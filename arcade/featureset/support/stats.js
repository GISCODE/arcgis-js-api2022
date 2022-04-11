/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/languageUtils","./shared","./sqlUtils","../../../core/promiseUtils"],(function(t,e,n,r,u){"use strict";function c(t){return t=+t,isFinite(t)?t-t%1||(t<0?-0:0===t?t:0):t}function l(t){let e=0;for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}function a(t){const e=l(t);let n=0;for(let r=0;r<t.length;r++)n+=(e-t[r])**2;return n/t.length}function i(t){const e=l(t);let n=0;for(let r=0;r<t.length;r++)n+=(e-t[r])**2;return n/(t.length-1)}function s(t){let e=0;for(let n=0;n<t.length;n++)e+=t[n];return e}function o(t,e){const r=[],u={},c=[];for(let l=0;l<t.length;l++){if(void 0!==t[l]&&null!==t[l]){const e=t[l];if(n.isNumber(e)||n.isString(e))void 0===u[e]&&(r.push(e),u[e]=1);else{let t=!1;for(let r=0;r<c.length;r++)!0===n.equalityTest(c[r],e)&&(t=!0);!1===t&&(c.push(e),r.push(e))}}if(r.length>=e&&-1!==e)return r}return r}function h(t){switch(t.toLowerCase()){case"distinct":return"distinct";case"avg":case"mean":return"avg";case"min":return"min";case"sum":return"sum";case"max":return"max";case"stdev":case"stddev":return"stddev";case"var":case"variance":return"var";case"count":return"count"}return""}function f(t,e,n=1e3){switch(t.toLowerCase()){case"distinct":return o(e,n);case"avg":case"mean":return l(e);case"min":return Math.min.apply(Math,e);case"sum":return s(e);case"max":return Math.max.apply(Math,e);case"stdev":case"stddev":return Math.sqrt(a(e));case"var":case"variance":return a(e);case"count":return e.length}return 0}function g(t,e,n){return x(t,e,n,!0).then((t=>0===t.length?null:Math.min.apply(Math,t)))}function d(t,e,n){return x(t,e,n,!0).then((t=>0===t.length?null:Math.max.apply(Math,t)))}function m(t,e,n){let u="";return!1===r.isSingleField(e)&&(u=r.predictType(e,t.fields,null)),x(t,e,n,!0).then((t=>{if(0===t.length)return null;const e=l(t);return null===e?e:"integer"===u?c(e):e}))}function v(t,e,n){return x(t,e,n,!0).then((t=>0===t.length?null:i(t)))}function p(t,e,n){return x(t,e,n,!0).then((t=>0===t.length?null:Math.sqrt(i(t))))}function y(t,e,n){return x(t,e,n,!0).then((t=>0===t.length?null:s(t)))}function M(t,e){try{return t.iterator(e).count()}catch(n){return u.reject(n)}}function x(t,e,n,r=!1){try{const c=t.iterator(n);return u.create(((t,n)=>{S(c,[],e,r,t,n)}))}catch(c){return u.reject(c)}}function S(t,n,r,u,c,l){e.tick(t.next().then((e=>{try{if(null!==e){const a=r.calculateValue(e);return null===a?!1===u&&(n[n.length]=a):n[n.length]=a,S(t,n,r,u,c,l)}c(n)}catch(a){l(a)}}),l))}function j(t,e,n=1e3,r=null){return q(t,e,n,r)}function q(t,e,n,r){try{return w(t.iterator(r),{},[],e,n)}catch(c){return u.reject(c)}}function w(t,e,n,r,u){return t.next().then((c=>{if(null!==c){const l=r.calculateValue(c);return null!=l&&void 0===e[l]&&(n.push(l),e[l]=1),n.length>=u&&-1!==u?n:w(t,e,n,r,u)}return n}))}t.calculateStat=f,t.count=M,t.decodeStatType=h,t.distinct=j,t.max=d,t.mean=m,t.min=g,t.stdev=p,t.sum=y,t.variance=v,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
