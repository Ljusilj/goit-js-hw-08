!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,p=Math.max,m=Math.min,b=function(){return s.Date.now()};function g(e,t,n){var o,i,f,u,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function g(t){var n=o,r=i;return o=i=void 0,l=t,u=e.apply(r,n)}function j(e){return l=e,a=setTimeout(h,t),d?g(e):u}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=f}function h(){var e=b();if(O(e))return S(e);a=setTimeout(h,function(e){var n=t-(e-c);return s?m(n,f-(e-l)):n}(e))}function S(e){return a=void 0,v&&o?g(e):(o=i=void 0,u)}function T(){var e=b(),n=O(e);if(o=arguments,i=this,c=e,n){if(void 0===a)return j(c);if(s)return a=setTimeout(h,t),g(c)}return void 0===a&&(a=setTimeout(h,t)),u}return t=w(t)||0,y(n)&&(d=!!n.leading,f=(s="maxWait"in n)?p(w(n.maxWait)||0,t):f,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=i=a=void 0},T.flush=function(){return void 0===a?u:S(b())},T}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||a.test(t)?c(t.slice(2),r?2:8):f.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})};var j=document.querySelector(".feedback-form"),O={};j.addEventListener("input",e(t)((function(e){e.preventDefault(),O[e.target.name]=e.target.value,console.log(O),localStorage.setItem("feedback-form-state",JSON.stringify(O))}),500)),window.addEventListener("load",(function(){var e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&function(e){for(var t in e)e.hasOwnProperty(t)&&(j.elements[t].value=e[t])}(O=e)})),j.addEventListener("submit",(function(e){e.preventDefault(),console.log(O),localStorage.removeItem("feedback-form-state"),O={},j.reset()}))}();
//# sourceMappingURL=03-feedback.5ea71f58.js.map
