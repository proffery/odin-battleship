(()=>{"use strict";var r={705:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var A=0;A<r.length;A++){var d=[].concat(r[A]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},476:r=>{r.exports=function(r){var n=r[1],e=r[3];if(!e)return n;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},890:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(476),o=e.n(t),a=e(705),i=e.n(a)()(o());i.push([r.id,":root {\r\n    --main-font: clamp(16px, calc(16px + (28 - 16) * ((100vw - 360px) / 1560)), 28px);\r\n    --font-color: rgb(228, 223, 241);\r\n    --background-color-main: rgb(19, 9, 46);\r\n    --background-color-block: rgba(255, 255, 255, 0.822);\r\n    --shadow: rgb(255, 255, 255) 0px 1px 3px, rgb(5, 5, 5) 0px 1px 3px;\r\n    --gradient: linear-gradient(90deg, rgba(36, 36, 44, 0.651) 0%, rgba(237, 237, 240, 0.329) 35%, rgba(36, 37, 37, 0.397) 100%);\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n}\r\n\r\nbody {\r\n    background: var(--background-color-main);\r\n    color: var(--font-color);\r\n    font-size: var(--main-font);\r\n}\r\n\r\n.main-container {\r\n    display: grid;\r\n    gap: 1rem;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr 1fr;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    grid-column: 1 / 3;\r\n    grid-row: 1 / 2;\r\n}\r\n\r\n.battle-area {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    grid-column: 1 / 3;\r\n    grid-row: 2 / 3;\r\n}\r\n\r\n.info-area {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    grid-column: 1 / 3;\r\n    grid-row: 3 / 4;\r\n}\r\n\r\n.start-window {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    border: 1px solid var(--font-color);\r\n    border-radius: .5rem;\r\n    padding: 1rem;\r\n    box-shadow: var(--shadow);\r\n}\r\n\r\n.start-button {\r\n    border: 1px solid var(--font-color);\r\n    border-radius: .3rem;\r\n    padding-left: .3rem;\r\n    padding-right: .3rem;\r\n    margin-top: .5rem;\r\n}","",{version:3,sources:["webpack://./src/styles/style.css"],names:[],mappings:"AAAA;IACI,iFAAiF;IACjF,gCAAgC;IAChC,uCAAuC;IACvC,oDAAoD;IACpD,kEAAkE;IAClE,4HAA4H;AAChI;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,wCAAwC;IACxC,wBAAwB;IACxB,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,SAAS;IACT,8BAA8B;IAC9B,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,2BAA2B;IAC3B,mCAAmC;IACnC,oBAAoB;IACpB,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,mCAAmC;IACnC,oBAAoB;IACpB,mBAAmB;IACnB,oBAAoB;IACpB,iBAAiB;AACrB",sourcesContent:[":root {\r\n    --main-font: clamp(16px, calc(16px + (28 - 16) * ((100vw - 360px) / 1560)), 28px);\r\n    --font-color: rgb(228, 223, 241);\r\n    --background-color-main: rgb(19, 9, 46);\r\n    --background-color-block: rgba(255, 255, 255, 0.822);\r\n    --shadow: rgb(255, 255, 255) 0px 1px 3px, rgb(5, 5, 5) 0px 1px 3px;\r\n    --gradient: linear-gradient(90deg, rgba(36, 36, 44, 0.651) 0%, rgba(237, 237, 240, 0.329) 35%, rgba(36, 37, 37, 0.397) 100%);\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n}\r\n\r\nbody {\r\n    background: var(--background-color-main);\r\n    color: var(--font-color);\r\n    font-size: var(--main-font);\r\n}\r\n\r\n.main-container {\r\n    display: grid;\r\n    gap: 1rem;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr 1fr;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    grid-column: 1 / 3;\r\n    grid-row: 1 / 2;\r\n}\r\n\r\n.battle-area {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    grid-column: 1 / 3;\r\n    grid-row: 2 / 3;\r\n}\r\n\r\n.info-area {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    grid-column: 1 / 3;\r\n    grid-row: 3 / 4;\r\n}\r\n\r\n.start-window {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    border: 1px solid var(--font-color);\r\n    border-radius: .5rem;\r\n    padding: 1rem;\r\n    box-shadow: var(--shadow);\r\n}\r\n\r\n.start-button {\r\n    border: 1px solid var(--font-color);\r\n    border-radius: .3rem;\r\n    padding-left: .3rem;\r\n    padding-right: .3rem;\r\n    margin-top: .5rem;\r\n}"],sourceRoot:""}]);const c=i},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],c=0;c<r.length;c++){var s=r[c],A=t.base?s[0]+t.base:s[0],d=a[A]||0,l="".concat(A," ").concat(d);a[A]=d+1;var u=e(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var f=o(p,t);t.byIndex=c,n.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=t(r,o),A=0;A<a.length;A++){var d=e(a[A]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return r[t](a,a.exports,e),a.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r;e.g.importScripts&&(r=e.g.location+"");var n=e.g.document;if(!r&&n&&(n.currentScript&&(r=n.currentScript.src),!r)){var t=n.getElementsByTagName("script");t.length&&(r=t[t.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r+"../"})(),e.nc=void 0,(()=>{var r=e(379),n=e.n(r),t=e(795),o=e.n(t),a=e(569),i=e.n(a),c=e(565),s=e.n(c),A=e(216),d=e.n(A),l=e(589),u=e.n(l),p=e(890),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;!function(){var r=[],n=[];function e(r){r=new Array(8);for(var n=0;n<r.length;n++)r[n]=new Array(8);for(var e=0;e<r.length;e++)for(var t=0;t<r[e].length;t++)r[e][t]=!1;return r}n=e(n),r=e(r)}();const m=e.p+"audio/startBattleSound.mp3";var g=document.querySelector(".main-container");!function(){var r=document.createElement("div");r.classList.add("start-window"),r.textContent="Start new game?",g.appendChild(r);var n=document.createElement("div");n.classList.add("start-button"),n.textContent="Start!",r.appendChild(n);var e=new Audio(m);r.appendChild(e),e.setAttribute("controls",""),e.setAttribute("autoplay",""),e.play(),n.addEventListener("click",(function(){r.remove(),e.pause()}))}()})()})();
//# sourceMappingURL=mainf5ed6bfe3084ff14b125.js.map