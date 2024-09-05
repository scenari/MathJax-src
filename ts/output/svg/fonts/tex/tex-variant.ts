/*************************************************************
 *
 *  Copyright (c) 2018-2022 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import {SVGCharMap, AddPaths} from '../../FontData.js';
import {texVariant as font} from '../../../common/fonts/tex/tex-variant.js';

export const texVariant: SVGCharMap = AddPaths(font, {
    0x2C6: '1 561Q-3 563 -6 577T-12 604L-14 618Q-14 625 -7 628T23 635Q31 636 36 637Q63 641 621 745Q1148 845 1165 845Q1167 845 1752 739L2338 630Q2346 630 2346 618Q2340 565 2332 561Q2329 561 1749 654Q1617 675 1466 699T1241 736T1167 748Q1165 748 1093 737T867 700T583 654Q3 561 1 561',
    0x2DC: '804 788Q717 788 606 772T397 732T213 685T75 645T18 628Q11 628 11 632Q8 637 4 668T2 704Q2 713 36 732Q55 739 242 795Q622 898 826 898Q893 898 947 895Q1009 887 1056 872T1187 819Q1286 776 1356 758T1527 739Q1614 739 1725 755T1934 795T2118 842T2256 882T2313 899Q2320 899 2320 895Q2323 890 2327 860T2329 824Q2329 818 2296 795Q2273 787 2089 732Q1810 657 1598 632Q1562 629 1492 629Q1389 629 1320 644T1144 708Q1048 751 977 769T804 788',
    0x302: '-2332 561Q-2336 563 -2340 577T-2346 604L-2347 618Q-2347 625 -2340 628T-2310 635Q-2302 636 -2297 637Q-2270 641 -1712 745Q-1185 845 -1168 845Q-1166 845 -581 739L5 630Q13 630 13 618Q7 565 -1 561Q-4 561 -584 654Q-716 675 -867 699T-1092 736T-1166 748Q-1168 748 -1240 737T-1466 700T-1750 654Q-2330 561 -2332 561',
    0x303: '-1529 788Q-1616 788 -1727 772T-1936 732T-2120 685T-2258 645T-2315 628Q-2322 628 -2322 632Q-2325 637 -2329 668T-2331 704Q-2331 713 -2297 732Q-2278 739 -2091 795Q-1711 898 -1507 898Q-1440 898 -1386 895Q-1324 887 -1277 872T-1146 819Q-1047 776 -977 758T-806 739Q-719 739 -608 755T-399 795T-215 842T-77 882T-20 899Q-13 899 -13 895Q-10 890 -6 860T-4 824Q-4 818 -37 795Q-60 787 -244 732Q-523 657 -735 632Q-771 629 -841 629Q-944 629 -1013 644T-1189 708Q-1285 751 -1356 769T-1529 788',
    0x3F0: '228 325Q170 322 156 316T127 309Q108 309 104 314Q99 319 99 322T108 341Q125 376 171 400T268 425H271Q302 425 319 396Q328 377 328 358Q328 332 324 314Q311 270 286 221Q274 194 274 192H275Q339 234 484 325T639 421Q669 434 691 434T723 425T734 406Q734 394 719 381Q715 376 644 330L575 287L566 267Q543 233 526 176Q520 160 515 143T508 115T506 105Q506 103 533 103Q585 103 607 110T641 118Q670 118 670 107Q670 100 661 85Q643 50 598 27T504 3Q465 3 450 36Q441 51 441 73Q441 84 444 96Q452 146 484 205L497 236L324 125Q143 12 135 10Q103 -6 77 -6Q61 -6 49 2T37 21Q37 36 49 46T124 96L195 141L204 156Q219 179 243 248T264 323Q264 325 228 325',
    0x210F: '182 599Q182 611 174 615T133 619Q118 619 114 621T109 630Q109 636 114 656T122 681Q125 685 202 688Q272 695 286 695Q304 695 304 684Q304 682 295 644T282 597Q282 592 360 592H399Q430 592 445 587T460 563Q460 552 451 541L442 535H266L251 468Q247 453 243 436T236 409T233 399Q233 395 244 404Q295 441 357 441Q405 441 445 417T485 333Q485 284 449 178T412 58T426 44Q447 44 466 68Q485 87 500 130L509 152H531H543Q562 152 562 144Q562 128 546 93T494 23T415 -13Q385 -13 359 3T322 44Q318 52 318 77Q318 99 352 196T386 337Q386 386 346 386Q318 386 286 370Q267 361 245 338T211 292Q207 287 193 235T162 113T138 21Q128 7 122 4Q105 -12 83 -12Q66 -12 54 -2T42 26L166 530Q166 534 161 534T129 535Q127 535 122 535T112 534Q74 534 74 562Q74 570 77 576T84 585T96 589T109 591T124 592T138 592L182 595V599',
    0x2190: '292 419Q292 400 261 347T211 275H306Q319 275 338 275T364 276Q399 276 410 271T422 250T411 230T366 225H306H211Q214 222 232 197T271 136T292 82Q292 71 285 68T262 64H250H241Q221 64 216 67T205 83Q186 127 153 167T78 230Q64 238 64 250Q64 258 69 263T82 272T106 288T139 318Q162 342 177 365T198 402T209 425T223 436Q224 437 252 437H258Q292 437 292 419',
    0x2192: '188 417Q188 437 221 437H233Q256 437 263 434T275 417Q294 373 327 333T402 270Q417 261 417 250Q417 241 410 236T382 217T341 182Q315 155 299 128T275 85T263 66Q259 64 231 64H219Q197 64 191 72T193 100Q202 124 215 147T239 185T257 210T267 223L269 225H174H116Q80 225 69 229T58 250T70 271T114 276Q121 276 140 276T174 275H269L267 277Q266 280 257 291T233 325T205 374Q188 408 188 417',
    0x21CC: '755 512Q755 514 778 514H801L804 503Q805 501 812 486T824 462T839 437T862 408T892 381T932 354L944 347V327H507Q70 327 67 329Q55 335 55 347T67 365Q70 367 454 367H837L828 376Q803 403 785 437T761 489T755 512ZM55 153V173H492Q928 173 932 171Q944 166 944 153T932 135Q928 133 545 133H162L171 124Q198 95 216 61T239 8L244 -12Q244 -14 221 -14H198L195 -4Q160 95 67 146L55 153',
    0x2204: '55 676Q55 688 66 694H199L333 696L351 772Q364 827 370 843T386 860Q393 860 399 854T406 841Q406 836 391 765L375 696Q375 694 431 694H484Q491 688 497 681V12L493 5L486 1L353 -1H219L202 -79Q184 -153 180 -159Q175 -166 165 -166Q146 -166 146 -148Q146 -141 161 -76T177 -4Q177 -1 122 -1H68Q55 12 55 20T66 39H126L186 41L219 181Q226 215 234 251T246 305T251 325Q251 328 166 328H79Q68 345 68 347Q68 352 75 359L82 368H262L291 505Q298 539 306 575T319 630T324 650V654H68Q55 669 55 676ZM457 368V654H411Q366 654 366 652Q365 651 361 634T349 580T333 514Q303 373 302 372V368H457ZM457 39V328H375Q293 328 293 325Q292 322 260 183T228 41T344 39H457',
    0x2205: '624 470Q624 468 639 446T668 382T683 291Q683 181 612 99T437 -1Q425 -2 387 -2T337 -1Q245 18 193 70L179 81L131 39Q96 8 89 3T75 -3Q55 -3 55 17Q55 24 61 30T111 73Q154 113 151 113Q151 114 140 130T115 177T95 241Q94 253 94 291T95 341Q112 431 173 495Q265 587 385 587Q410 587 437 581Q522 571 582 513L595 501L642 541Q689 586 695 586Q696 586 697 586T699 587Q706 587 713 583T720 568Q720 560 711 551T664 510Q651 499 642 490T628 475T624 470ZM564 477Q517 522 448 539Q428 546 375 546Q290 546 229 492T144 370Q133 332 133 279Q136 228 151 195Q157 179 168 160T184 141Q186 141 375 307T564 477ZM642 290Q642 318 637 343T625 386T611 416T598 436T593 444Q590 444 402 277T213 108Q213 104 231 89T293 55T392 37Q495 37 568 111T642 290',
    0x2212: '84 237T84 250T98 270H402Q417 262 417 250T402 230H98Q84 237 84 250',
    0x2216: '91 404T91 410T97 423T111 430Q117 430 395 224Q676 13 678 10Q685 3 685 -3T678 -16T664 -23Q658 -23 380 184T98 397Q91 404 91 410',
    0x221D: '56 250Q56 346 122 409T276 472Q349 472 407 430T486 326L489 316Q490 317 493 326T501 345T514 367T531 393Q557 425 602 448T698 472Q722 472 722 452Q722 437 702 435T642 421T571 377Q520 323 520 250Q520 179 568 126T693 68Q722 66 722 48Q722 28 698 28Q636 28 576 67T493 174L490 184Q489 181 483 167T475 150T468 136T458 120T447 107T432 90T412 73Q350 28 277 28Q188 28 122 91T56 250ZM199 68T278 68T408 122T459 250Q459 322 414 370T308 430Q302 431 273 431Q204 431 150 380T96 250Q96 176 147 122',
    0x2223: '91 417Q104 430 111 430T131 417V-10Q116 -23 111 -23T91 -10V417',
    0x2224: '91 417Q104 430 111 430T131 417V301L171 341Q201 373 207 378T220 384Q227 384 233 377T240 366Q240 357 187 299L131 244V-10Q116 -23 111 -23T91 -10V201L49 157Q20 127 14 121T0 115Q-8 115 -14 121T-20 132Q-20 139 17 178Q29 191 36 199L91 257V417',
    0x2225: '55 417Q69 431 76 431T95 419V-12Q84 -23 76 -23Q72 -23 69 -22T62 -16T55 -10V417ZM293 419Q300 431 310 431L324 424L331 417V-10Q316 -23 309 -23L297 -19L293 -12V419',
    0x2226: '56 417Q68 431 76 431L89 426L96 419V317L98 215L193 273L291 330V375L293 419Q301 431 311 431Q331 431 331 388L333 355L356 370Q381 384 388 384Q394 384 400 377T407 363Q407 354 367 328L331 308V-10Q316 -23 310 -23Q300 -23 293 -12L291 135V284L98 168L96 77V-12Q84 -24 76 -24L62 -19L58 -12L56 66V144L31 128Q5 114 -2 114Q-8 114 -14 121T-20 136Q-20 142 -14 147T20 170L56 190V417',
    0x223C: '73 132Q55 132 55 172Q55 220 79 272Q95 301 111 319Q148 353 195 363Q199 364 212 364Q262 364 294 350T408 272Q472 222 522 212Q537 208 555 208Q606 208 646 243Q671 268 680 296T691 342T702 365Q713 365 716 354T719 314Q714 236 664 179L660 176Q657 173 654 170T644 163T631 154T615 146T596 139T574 134T549 132Q510 132 465 156T386 211T307 265T223 290Q162 290 124 249T86 165Q86 155 82 144T73 132',
    0x2248: '55 326Q55 394 101 437T226 481Q268 479 313 460T392 419T469 379T555 361Q622 361 662 401Q686 423 688 450Q693 479 702 479H705Q719 479 719 442Q719 367 670 327T554 286Q512 286 466 304T386 345T307 385T220 404Q184 404 157 394T120 374L111 363Q86 339 86 317Q86 288 71 288Q55 288 55 326ZM55 90Q55 164 105 205T226 246Q269 243 314 224T392 183T470 144T558 126Q622 126 662 166Q686 187 688 214Q693 244 704 244Q716 244 719 210Q719 165 702 132T658 82T605 58T552 50T498 58T447 77T384 110Q322 146 302 152Q263 168 220 168Q179 168 144 152Q128 147 107 125T86 81Q86 52 71 52Q55 52 55 90',
    0x2268: '86 472Q93 477 381 614T673 752Q680 752 686 746T693 732T689 721Q686 715 418 590L151 461L418 332Q684 207 689 201Q693 195 693 190Q693 183 687 177T675 170Q668 170 380 307T86 450Q82 454 82 461Q82 467 86 472ZM369 101V126Q369 156 382 156H384Q385 157 386 157Q409 157 409 115V98V54H680Q693 39 693 34T680 14H409V-142H680Q693 -155 693 -162Q693 -167 680 -182H409V-273Q396 -284 388 -284Q382 -284 369 -275V-182H95Q82 -167 82 -162Q82 -155 95 -142H369V14H95Q93 17 89 21T84 27T82 34T83 40T89 47T95 54H369V101',
    0x2269: '89 745Q95 752 100 752Q106 752 394 615T689 472Q693 468 693 461T689 450Q684 445 396 308T100 170Q95 170 89 176T82 190Q82 195 86 201Q91 208 358 332L624 461L358 590Q90 715 86 721Q82 725 82 731Q82 739 89 745ZM369 101V126Q369 156 382 156H384Q385 157 386 157Q409 157 409 115V98V54H680Q693 39 693 34T680 14H409V-142H680Q693 -155 693 -162Q693 -167 680 -182H409V-273Q396 -284 388 -284Q382 -284 369 -275V-182H95Q82 -167 82 -162Q82 -155 95 -142H369V14H95Q93 17 89 21T84 27T82 34T83 40T89 47T95 54H369V101',
    0x2270: '82 34Q82 44 93 55H198L300 57L342 179Q351 207 362 238T378 286T384 303T238 377Q109 435 86 450Q82 454 82 460T86 472Q90 476 302 579L511 679Q512 679 553 795Q569 842 577 866T592 903T600 917T608 919Q615 919 622 912T629 901Q629 899 595 799Q589 777 581 753T569 717T564 703L618 728Q666 752 673 752T686 746T693 732Q693 723 683 717T615 683L546 650L491 488Q464 410 450 368T438 326Q493 297 562 266Q660 219 677 209T694 190Q694 183 690 177T678 171Q664 171 546 228L424 286Q422 286 382 172L342 57L513 55H682Q694 43 694 34Q694 28 689 21L682 17L506 15H329L322 -8Q320 -13 310 -41T295 -85L275 -141H680Q682 -143 684 -146T688 -151T691 -156T693 -162Q693 -172 682 -179L473 -181H262L220 -303Q192 -388 185 -404T166 -421Q160 -421 153 -415T146 -403Q146 -400 179 -302T220 -185Q220 -181 158 -181L93 -179L86 -174Q82 -169 82 -161Q82 -152 93 -141H164L233 -139L260 -63L286 15H189L93 17L86 21Q82 26 82 34ZM495 623Q495 626 493 626T321 544T151 461L398 343Q399 343 405 360T423 415T446 483Q457 513 469 551T488 606T495 623',
    0x2271: '97 172Q82 172 82 190Q82 197 86 201Q94 209 173 246T327 319T402 357Q405 360 434 448T462 539L278 628Q96 713 86 721Q82 725 82 732T88 745T102 752Q103 752 125 742T198 709T293 666Q342 642 385 622T453 590T478 579Q479 579 506 659T562 824T598 915Q602 919 609 919T622 913T629 901Q629 898 571 728Q546 656 531 608T518 559Q555 539 602 519Q664 488 679 479T694 461Q694 457 689 450Q680 443 616 413T494 356T435 326L389 190L342 57L513 55H682Q694 43 694 34Q694 28 689 21L682 17L506 15H329L322 -8Q320 -13 310 -41T295 -85L275 -141H680Q682 -143 684 -146T688 -151T691 -156T693 -162Q693 -172 682 -179L473 -181H262L220 -303Q192 -388 185 -404T166 -421Q160 -421 153 -415T146 -403Q146 -400 179 -302T220 -185Q220 -181 158 -181L93 -179L86 -174Q82 -169 82 -161Q82 -152 93 -141H164L233 -139L260 -63L286 15H189L93 17L86 21Q82 26 82 34Q82 44 93 55H198L300 57L342 179Q350 204 361 238T378 286T382 301L246 237Q111 172 97 172ZM624 461Q621 464 560 492Q512 518 503 518Q500 518 500 517Q499 513 488 479T465 413T453 379L624 461',
    0x2288: '82 -6Q82 1 95 14H262L295 94Q331 171 331 174Q324 175 312 178T267 194T206 227T146 283T98 368Q84 406 84 461T98 554Q126 632 194 685T349 750Q360 752 480 752H591L604 783Q620 819 624 821Q631 828 640 828Q653 825 658 810Q658 808 646 781L635 754Q635 752 658 752Q680 752 686 746Q693 739 693 732Q693 728 692 726T686 719T680 712H615L506 466Q479 407 451 344T408 248T393 214Q393 210 535 210H680Q693 194 693 190T680 170H373L340 92L304 14H680Q693 1 693 -6Q693 -11 680 -26H286L253 -103L218 -179L451 -181H682Q694 -193 694 -201Q694 -212 682 -219L440 -221H200L178 -270Q160 -309 154 -319T139 -330Q122 -330 118 -312L155 -223Q155 -221 126 -221H95Q82 -206 82 -201T95 -181H175L206 -108Q237 -35 242 -30Q242 -26 169 -26H95Q82 -11 82 -6ZM571 710Q571 712 469 712Q443 712 416 712T371 711T351 710Q279 700 221 656T138 548Q124 508 124 461T138 374Q186 245 351 212L460 459Q571 709 571 710',
    0x2289: '82 732Q82 739 95 752H251H348Q420 752 460 744T551 708Q566 697 566 701Q618 815 624 821Q631 828 640 828Q653 825 658 810L600 677Q600 671 615 656T653 605T689 517Q692 496 692 461T689 406Q668 325 615 266Q572 221 513 196T391 170H373L340 92L304 14H680Q693 1 693 -6Q693 -11 680 -26H286L253 -103L218 -179L451 -181H682Q694 -193 694 -201Q694 -212 682 -219L440 -221H200L178 -270Q160 -309 154 -319T139 -330Q122 -330 118 -312L155 -223Q155 -221 126 -221H95Q82 -206 82 -201T95 -181H175L206 -108Q237 -35 242 -30Q242 -26 169 -26H95Q82 -11 82 -6Q82 1 95 14H262L295 92L331 170H95Q93 172 91 175T87 180T84 185T82 191Q82 199 93 210H220L349 212L549 659Q507 692 462 702T338 712H249H95Q82 727 82 732ZM652 473Q652 513 636 552T603 611T582 632Q581 632 487 422T393 210Q424 210 460 220T535 253T605 316T649 410Q652 427 652 461V473',
    0x228A: '693 -115T693 -122T680 -144H315L269 -199Q221 -255 213 -255H212Q203 -255 197 -248T193 -231Q195 -225 229 -184L262 -144H186L113 -142L106 -137Q102 -130 102 -125Q102 -119 115 -104H298L426 52H386Q342 54 309 63Q236 79 180 129T98 249Q84 289 84 343Q84 398 98 436Q126 514 193 567T346 632Q347 632 373 632T440 633T520 634H680Q682 631 686 627T691 621T693 614T680 594H526Q364 594 353 592Q268 581 207 528T126 394Q123 378 123 343T126 292Q141 231 181 185T280 114Q329 92 415 92H462L506 147Q554 203 562 203H563Q572 203 578 196T582 178Q579 173 546 132L513 94L598 92H682Q693 81 693 73T680 52H480L349 -102L515 -104H682Q693 -115 693 -122',
    0x228B: '82 610T82 614T83 620T89 627T95 634H251Q378 634 409 633T469 623Q540 604 596 554T678 436Q691 397 691 343T678 249Q653 181 597 131T469 63Q427 52 362 52H315L213 -102L438 -104H662Q673 -115 673 -123Q673 -129 660 -144H186L151 -197Q114 -250 109 -253Q106 -254 104 -254Q100 -254 98 -253Q91 -253 87 -248T82 -235Q82 -230 109 -186L138 -144H115Q82 -144 82 -125Q82 -119 95 -104H166L266 49Q266 52 182 52H95Q82 65 82 72Q82 76 83 78T89 85T95 92H295L329 143Q365 195 369 198Q372 203 380 203Q385 203 391 197T398 185Q398 184 398 184L399 182Q399 175 369 129L344 94Q344 92 376 92Q402 92 422 94Q496 104 554 147T638 256Q651 295 651 343Q651 390 638 429Q613 494 555 537T422 592Q411 594 249 594H95Q82 610 82 614',
    0x22A8: '55 678Q55 679 56 681T58 684T61 688T65 691T70 693T77 694Q88 692 95 679V464H540Q554 456 555 446Q555 442 554 439T552 434T549 430T546 428T542 426T539 424H95V270H539Q540 270 542 269T545 267T549 264T552 260T554 255T555 248Q554 238 540 230H95V15Q88 2 77 0Q73 0 70 1T65 3T61 6T59 9T57 13T55 16V678',
    0x22C5: '71 0Q59 4 55 16V96L56 176Q59 180 66 187L70 189H209Q219 181 222 174V15Q219 10 209 1L140 0H71',
    0x2322: '77 122Q68 122 63 126T57 135T55 142Q55 151 68 176T111 235T177 302T271 356T388 378Q451 378 508 355T602 300T668 233T709 174T722 142Q722 124 704 122Q692 122 685 134T658 179T606 243Q511 338 390 338Q354 338 320 329Q251 312 193 263T97 141Q87 123 77 122',
    0x2323: '389 143Q324 143 266 164T171 215T107 277T67 330T55 358T60 371T77 378Q85 377 92 367T116 331T158 280Q256 182 389 182Q475 182 552 227T675 351Q688 378 704 378Q722 376 722 358Q722 352 710 330T670 276T605 215T511 164T389 143',
    0x25B3: '99 -20Q84 -11 84 0Q84 5 148 145T278 424L342 563Q347 575 360 575Q368 575 375 570Q376 569 441 430T571 148T637 0Q637 -11 622 -20H99ZM476 260L360 509L248 266Q137 24 135 22Q135 20 360 20Q586 20 586 21L476 260',
    0x25BD: '84 556Q84 567 99 576H622Q637 567 637 556Q637 551 572 409T441 127T375 -14Q368 -19 360 -19H358Q349 -19 342 -7T296 92Q249 193 211 275Q84 550 84 556ZM586 534Q586 536 361 536Q135 536 135 535L358 52L361 47L473 290Q584 532 586 534',
    0x2A87: '102 168Q103 168 151 146T247 102T295 81Q299 85 322 144T344 206L218 268Q153 297 123 313T87 333T82 344T86 355Q104 369 291 455Q491 552 491 553L542 673Q581 767 590 784T609 801Q616 801 622 795T629 781Q629 773 586 677Q546 581 546 577L609 606Q669 635 673 635Q680 635 686 629T693 615Q693 610 692 608T670 593T604 561L524 521L400 226L542 157Q617 123 649 107T687 85T694 72Q694 66 690 60T679 54Q665 54 526 119Q394 186 386 186Q385 186 342 88L331 61L509 -23Q680 -105 688 -111Q693 -115 693 -122T688 -135T675 -141H673Q664 -141 491 -59Q320 21 316 21H315L249 -136Q183 -293 178 -299Q172 -303 166 -303T153 -297T146 -283Q146 -282 154 -261T181 -197T213 -119L280 41Q280 46 186 86Q157 101 121 119Q92 133 87 136T82 148Q82 155 88 161T102 168ZM418 370L466 495Q464 495 308 420T151 344T204 317T311 267T364 244Q364 247 418 370',
    0x2A88: '97 54Q82 54 82 72Q82 79 86 84Q95 91 222 153L351 215L398 324L442 433L258 519Q95 597 87 604Q82 608 82 615T88 628T102 635Q107 635 424 484L458 468L524 630Q593 789 597 795Q601 801 609 801Q616 801 622 795T629 781L562 615L493 450L589 406Q665 371 679 362T694 344Q694 339 693 337T677 326T631 302T538 257Q504 241 465 223T406 195T386 186Q383 185 344 92T306 -3L486 81Q662 168 673 168Q680 168 686 162T693 148T689 137Q688 136 482 35L280 -59L233 -176Q184 -291 178 -299Q172 -303 166 -303T153 -297T146 -283Q146 -279 185 -186T224 -90Q225 -88 223 -88Q219 -88 193 -101Q109 -143 98 -143Q82 -138 82 -122Q82 -116 85 -113T108 -98T171 -67L249 -30L289 61Q297 81 307 107T321 144T326 157L218 106Q109 54 97 54ZM553 379Q480 412 480 415Q479 415 460 372T423 285T406 241Q408 240 516 291T624 344L553 379',
    0x2ACB: '82 -14T82 -7T95 15H431L529 170H435Q341 170 333 175Q149 218 98 368Q84 406 84 461Q84 515 98 555Q126 633 193 686T346 750Q347 750 373 750T440 751T520 752H680Q693 739 693 732Q693 727 680 712H526Q364 712 353 710Q268 700 207 646T126 512Q123 496 123 461T126 410Q141 350 180 304T280 232Q312 217 344 214T464 210H555L589 261Q613 301 620 311T635 321Q644 321 650 315T657 301Q657 296 651 286T630 252T604 212Q604 210 642 210H680Q693 197 693 190Q693 186 692 184T686 177T680 170H578L526 92L478 17L580 15H682Q693 4 693 -4T680 -25H451L353 -179L518 -181H682Q694 -193 694 -201Q694 -211 682 -219L504 -221H326L293 -272Q257 -332 246 -332Q238 -332 232 -326T225 -313Q225 -310 226 -308Q226 -305 251 -265T278 -223Q278 -221 186 -221H95Q93 -218 89 -214T84 -208T82 -201T95 -181H306L404 -25H249L93 -23L86 -19Q82 -14 82 -7',
    0x2ACC: '82 732Q82 739 95 752H251Q415 752 426 750Q539 736 615 657Q667 599 689 517Q692 496 692 461T689 406Q668 325 615 266Q522 170 382 170H355L326 95Q319 80 311 59T298 28T293 17Q293 15 486 15H680Q693 0 693 -6T680 -25H275L213 -179L449 -181H682Q693 -192 693 -199T680 -221H198L178 -270Q153 -333 139 -333Q132 -333 126 -327T119 -314T135 -266T153 -223Q153 -221 124 -221H95Q82 -207 82 -201T95 -181H171L233 -25H162L93 -23L86 -19Q82 -14 82 -7T95 15H251L313 170H202L93 172L86 177Q82 182 82 190Q82 199 93 210H211L329 212L349 261Q366 301 372 311T386 321Q392 321 399 315T407 302Q407 295 390 254T373 210Q374 209 377 209Q412 209 444 217Q512 231 564 273T638 377Q651 414 651 461Q651 509 638 548Q613 613 555 656T422 710Q411 712 249 712H95Q82 727 82 732',
},{
});
