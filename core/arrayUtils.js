/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./maybe","./RandomLCG"],(function(n,t,e){"use strict";function r(n){if(!n)return;return n.length>0?n[0]:void 0}function o(n){if(!n)return;const t=n.length;return t>0?n[t-1]:void 0}function i(n){return n}function f(n,t=i){if(!n||0===n.length)return;let e=n[0],r=t(e);for(let o=1;o<n.length;++o){const i=n[o],f=Number(t(i));f>r&&(r=f,e=i)}return e}function u(n,t=i){return f(n,(n=>-t(n)))}function l(n,t){return t?n.filter(((n,e,r)=>r.findIndex(t.bind(null,n))===e)):n.filter(((n,t,e)=>e.indexOf(n)===t))}function c(n,e,r){if(t.isNone(n)&&t.isNone(e))return!0;if(t.isNone(n)||t.isNone(e)||n.length!==e.length)return!1;if(r){for(let t=0;t<n.length;t++)if(!r(n[t],e[t]))return!1}else for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function s(n,t,e){let r,o;return e?(r=t.filter((t=>!n.some((n=>e(n,t))))),o=n.filter((n=>!t.some((t=>e(t,n)))))):(r=t.filter((t=>!n.includes(t))),o=n.filter((n=>!t.includes(n)))),{added:r,removed:o}}function a(n,t,e){return n&&t?e?n.filter((function(n){return t.findIndex((function(t){return e(n,t)}))>-1})):n.filter((function(n){return t.indexOf(n)>-1})):[]}function d(n){return n&&"number"==typeof n.length}function h(n,t){const e=n.length;if(0===e)return[];const r=[];for(let o=0;o<e;o+=t)r.push(n.slice(o,o+t));return r}const g=!!Array.prototype.fill;function m(n,t){if(g)return new Array(n).fill(t);const e=new Array(n);for(let r=0;r<n;r++)e[r]=t;return e}function p(n,t){void 0===t&&(t=n,n=0);const e=new Array(t-n);for(let r=n;r<t;r++)e[r-n]=r;return e}function y(n,t,e){const r=n.length;let o=0,i=r-1;for(;o<i;){const e=o+Math.floor((i-o)/2);t>n[e]?o=e+1:i=e}const f=n[o];return e?t>=n[r-1]?-1:f===t?o:o-1:f===t?o:-1}function x(n,t,e){if(!n||0===n.length)return;const r=n.length-1,o=n[0];if(t<=e(o))return o;const i=n[r];if(t>=e(i))return i;let f=0,u=0,l=r;for(;f<l;){u=f+Math.floor((l-f)/2);const o=n[u],i=e(o);if(i===t)return o;if(t<i){if(u>0){const r=n[u-1],f=e(r);if(t>f)return t-f>=i-t?o:r}l=u}else{if(u<r){const r=n[u+1],f=e(r);if(t<f)return t-i>=f-t?r:o}f=u+1}}return n[u]}function M(n){return n.reduce(((n,t)=>n.concat(t||[])),[])}let v=function(){this.last=0};const b=new v;function w(n,t,e,r){r=r||b;const o=Math.max(0,r.last-10);for(let f=o;f<e;++f)if(n[f]===t)return r.last=f,f;const i=Math.min(o,e);for(let f=0;f<i;++f)if(n[f]===t)return r.last=f,f;return-1}function O(n,t,e,r){const o=null==e?n.length:e,i=w(n,t,o,r);if(-1!==i)return n[i]=n[o-1],null==e&&n.pop(),t}const A=new Set;function N(n,t,e=n.length,r=t.length,o,i){if(0===r||0===e)return e;A.clear();for(let u=0;u<r;++u)A.add(t[u]);o=o||b;const f=Math.max(0,o.last-10);for(let u=f;u<e;++u)if(A.has(n[u])&&(i&&i.push(n[u]),A.delete(n[u]),n[u]=n[e-1],--e,--u,0===A.size||0===e))return A.clear(),e;for(let u=0;u<f;++u)if(A.has(n[u])&&(i&&i.push(n[u]),A.delete(n[u]),n[u]=n[e-1],--e,--u,0===A.size||0===e))return A.clear(),e;return A.clear(),e}function I(n,t,e){const r=n.length;if(t>=r)return n.slice(0);const o=S(e),i=new Set,f=[];for(;f.length<t;){const t=Math.floor(o()*r);i.has(t)||(i.add(t),f.push(n[t]))}return f}function S(n){return n?(C.seed=n,()=>C.getFloat()):Math.random}function k(n,t){const e=S(t);for(let r=n.length-1;r>0;r--){const t=Math.floor(e()*(r+1)),o=n[r];n[r]=n[t],n[t]=o}return n}const C=new e;function q(n,t){const e=n.indexOf(t);return-1!==e?(n.splice(e,1),t):null}n.PositionHint=v,n.binaryFindClosest=x,n.binaryIndexOf=y,n.constant=m,n.difference=s,n.equals=c,n.first=r,n.flatten=M,n.indexOf=w,n.intersect=a,n.isArrayLike=d,n.last=o,n.max=f,n.min=u,n.pickRandom=I,n.range=p,n.remove=q,n.removeUnordered=O,n.removeUnorderedMany=N,n.shuffle=k,n.splitIntoChunks=h,n.unique=l,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
