import {TeX} from "mathjax3/input/tex.js";
import {MathML} from "mathjax3/input/mathml.js";
import {CHTML} from "mathjax3/output/chtml.js";
import {HTMLMathItem} from "mathjax3/handlers/html/HTMLMathItem.js";
import {HTMLDocument} from "mathjax3/handlers/html/HTMLDocument.js";
import {handleRetriesFor} from "mathjax3/util/Retries.js";
import {browserAdaptor} from "mathjax3/adaptors/browserAdaptor.js";

import {ConfigurationHandler} from 'mathjax3/input/tex/Configuration.js';
import {SerializedMmlVisitor as MmlVisitor} from '../mathjax3/core/MmlTree/SerializedMmlVisitor.js';

import 'mathjax3/input/tex/base/BaseConfiguration.js';
import 'mathjax3/input/tex/ams/AmsConfiguration.js';
import 'mathjax3/input/tex/noundefined/NoUndefinedConfiguration.js';
import 'mathjax3/input/tex/boldsymbol/BoldsymbolConfiguration.js';
import 'mathjax3/input/tex/newcommand/NewcommandConfiguration.js';
import 'mathjax3/input/tex/bussproofs/BussproofsConfiguration.js';

import {BrailleExplorer, SpeechExplorer, RoleExplorer, TypeExplorer, TagExplorer, Magnifier} from 'mathjax3/a11y/Explorer.js';
import {HoverRegion, LiveRegion, ToolTip} from 'mathjax3/a11y/Region.js';


let tex = new TeX();
let mathml = new MathML();
let chtml = new CHTML();
let visitor = new MmlVisitor();

let doc = new HTMLDocument(document, browserAdaptor(), {InputJax: mathml, OutputJax: chtml});
document.head.appendChild(chtml.styleSheet(doc));
let toMml = (node => visitor.visitTree(node, window.document));


const Lab = window.Lab = {
  tex: document.getElementById('tex'),
  output: document.getElementById('output'),
  output2: document.getElementById('output2'),
  display: true,
  packages: {},
  old: null,
  new: null,
  // These should be held by the a11yDocument class.
  region: new LiveRegion(doc),
  region2: new LiveRegion(doc),
  tooltip: new ToolTip(doc),
  tooltip2: new ToolTip(doc),
  tooltip3: new ToolTip(doc),
  magnifier: new HoverRegion(doc),
  inner: null,
  jax: [],
  explorer: [],
  rules: 'mathspeak',
  
  //
  //  The TeX code for the examples menu
  //
  Examples: [
  "",
  "x = \\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}",
  [
    "\\left( \\sum_{k=1}^n a_k b_k \\right)^{\\!\\!2} \\leq",
    "  \\left( \\sum_{k=1}^n a_k^2 \\right)",
    "  \\left( \\sum_{k=1}^n b_k^2 \\right)"
  ].join("\n"),
  [
    "\\frac{1}{\\Bigl(\\sqrt{\\phi\\sqrt{5}}-\\phi\\Bigr)",
    "  e^{\\frac25\\pi}} =",
    "    1+\\frac{e^{-2\\pi}}",
    "      {1+\\frac{e^{-4\\pi}}",
    "        {1+\\frac{e^{-6\\pi}}",
    "          {1+\\frac{e^{-8\\pi}}",
    "            {1+\\ldots} } } }"
  ].join("\n"),
  [
    "1 + \\frac{q^2}{(1-q)}",
    "  + \\frac{q^6}{(1-q)(1-q^2)} + \\cdots =",
    "\\prod_{j=0}^{\\infty}",
    "  \\frac{1}{(1-q^{5j+2})(1-q^{5j+3})},",
    "     \\quad\\quad \\text{for $|q|<1$}."
  ].join("\n"),
    "\\sum_{n=1}^\\infty {1\\over n^2} = {\\pi^2\\over 6}",
    "f(a) = \\oint_\\gamma \\frac{f(z)}{z-a}dz",
    "\\sigma = \\sqrt{\\frac{1}{N}\\sum_{i=1}^N {(x_i-\\mu)}^2}",
    "\\newcommand\\hyp[1]{{\\scriptstyle Hyp^{#1}}}\\newcommand\\imp{\\rightarrow}\\newcommand\\andi{{\\wedge_I}}\\newcommand\\impi{{\\imp_I}}\\newcommand\\impe{{\\imp_E}}\\newcommand\\rit{{\\scriptstyle Rit}}\\begin{prooftree}  \\AXC{}  \\RL{\$\\hyp{1}\$}  \\UIC{\$P\$}  \\AXC{\$P\\imp Q\$}  \\RL{\$\\impe\$}  \\BIC{\$Q^2\$}  \\AXC{\$Q\\imp R\$}   \\RL{\$\\impe\$}   \\BIC{\$R\$}   \\AXC{\$Q\$}  \\RL{\$\\rit^2\$}   \\UIC{\$Q\$}  \\RL{\$\\andi\$}  \\BIC{\$Q\\wedge R\$}  \\RL{\$\\impi^1\$}  \\UIC{\$P\\imp Q\\wedge R\$}\\end{prooftree}"
  ],

  //
  //  Select a specific example equation
  //
  Select: function (n) {
    if (n === "-" || n === "?") return;
    this.tex.value = Lab.Examples[n];
    this.Typeset();
  },
  
  TypesetElement(node, tex, enrich) {
    node.innerHTML = '';
    let text = node.appendChild(document.createTextNode(''));
    let value = this.tex.value;
    let math = new HTMLMathItem(value, tex);
    math.setMetrics(16,8,16*20,100000,1);
    math.display = this.display;
    math.start = {node: text, n: 0, delim: ''};
    math.end = {node: text, n: 0, delim: ''};
    this.jax.push(math);
    let newNode = null;

    handleRetriesFor(function () {
      math.compile();
      math.root.setTeXclass();
      let mml = toMml(math.root);
      // TODO: properly import SRE or move this into the a11y document.
      if (enrich) {
        let enriched = SRE.toEnriched(mml);
        let math2 = new HTMLMathItem(enriched.outerHTML, mathml);      
        math2.compile();
        math2.typeset(doc);
        math.typesetRoot = math2.typesetRoot;
        newNode = toMml(math2.root);
      } else {
        math.typeset(doc);
      }
    }).then(() => {
      Lab.Update(node, math.typesetRoot.outerHTML);
      if (enrich) {
        Lab.explorer.push(SpeechExplorer.create(doc, Lab.region, node.childNodes[0], newNode));
        // let braille = BrailleExplorer.create(doc, Lab.region2, node.childNodes[0], newNode);
        // console.log(braille.speechGenerator);
        // console.log(SRE.setupEngine);

        // Lab.explorer.push(braille); 
        // Lab.explorer.push(TagExplorer.create(doc, Lab.tooltip2, node.childNodes[0]));
        // Lab.explorer.push(RoleExplorer.create(doc, Lab.tooltip3, node.childNodes[0]));
        // Lab.explorer.push(TypeExplorer.create(doc, Lab.tooltip, node.childNodes[0]));
        let mag = document.getElementById('magnifier');
        if (mag && mag.checked) {
          Lab.explorer.push(Magnifier.create(doc, Lab.magnifier, node.childNodes[0], newNode));
        }
      }
    })
      .catch(err => {console.log("Error: " + err.message); console.log(err.stack)});
  },
  
  Typeset() {
    let tex = new TeX({packages: this.getPackages()});
    // this.TypesetElement(this.output, tex, false);
    this.TypesetElement(this.output2, tex, true);
  },

  Keep() {
    window.location.search = "?" + [
      (this.display ? 1 : 0) + encodeURIComponent(this.tex.value)].
      concat(this.getPackages()).join(';');
  },
  
  Update(node, html) {
    node.innerHTML = html;
  },

  setPackages(packages) {
    for (let pack of packages) {
      let node = document.getElementById('package-' + pack);
      if (node) {
        node.checked = true;
      }
    }
  },

  getPackages() {
    let result = [];
    for (let key in this.packages) {
      if (document.getElementById(this.packages[key]).checked) {
        result.push(key);
      }
    }
    return result;
  },
  
  Packages() {
    let div = document.getElementById('package');
    for (let key of ConfigurationHandler.keys()) {
      if (key === 'empty' || key === 'extension') continue;
      let checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.name = key;
      checkbox.value = key;
      checkbox.id = 'package-' + key;
      if (key === 'base') checkbox.checked = true;
      let label = document.createElement('label');
      label.htmlFor = 'package-' + key;
      label.appendChild(document.createTextNode(key[0].toUpperCase() + key.slice(1)));
      checkbox.appendChild(label);
      div.appendChild(checkbox);
      div.appendChild(label);
      this.packages[key] = 'package-' + key;
    }
  },
  
  setDisplay(checked) {
    this.display = checked;
    this.Typeset();
  },
  
  checkKey: function (textarea, event) {
    if (!event) event = window.event;
    var code = event.which || event.keyCode;
    if ((event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) &&
        (code === 13 || code === 10)) {
      if (event.preventDefault) event.preventDefault();
      event.returnValue = false;
      this.Typeset();
    }
  },

  resetSpeech: function(rules) {
    if (rules === this.rules) {
      return;
    }
    switch (rules) {
    case 'mathspeak':
      sre.System.getInstance().setupEngine({locale: "en", domain: "mathspeak"});
      break;
    case 'clearspeak':
      sre.System.getInstance().setupEngine({locale: "en", domain: "clearspeak"});
      break;
    case 'nemeth':
      sre.System.getInstance().setupEngine({locale: "nemeth", domain: "default"});
      break;
    }
    this.rules = rules;
    this.Typeset();
  }
  
}

Lab.Packages();
if (window.location.search !== "") {
  let [expr, ...rest] = decodeURIComponent(window.location.search).split(';');
  Lab.tex.value = expr.substr(2); // decodeURIComponent(expr.substr(2));
  Lab.display = expr.substr(1,1) === '1';
  document.getElementById('display').checked = Lab.display;
  Lab.setPackages(rest);
  Lab.Typeset();
}

