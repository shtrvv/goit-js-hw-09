!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("6JpON"),i={delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),btn:document.querySelector('[type="submit"]')};function c(n,t){setTimeout((function(){(function(e,n){return new Promise((function(t,o){Math.random()>.3?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}))})(n,t).then((function(n){return e(u).Notify.success(n)})).catch((function(n){return e(u).Notify.failure(n)}))}),t)}i.btn.addEventListener("click",(function(e){e.preventDefault();for(var n=Number(i.step.value),t=Number(i.delay.value),o=1;o<=i.amount.value;o+=1)c(o,t),t+=n}))}();
//# sourceMappingURL=03-promises.d6aa95dc.js.map
