/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/vec3"],(function(e,t){"use strict";function n(e,t,n){for(let l=0;l<t.length;l++)r[l]=!1,u[l]=null;for(let r=0;r<e.length;r++)l[r]=!1,o[r]=null;for(let l=0;l<t.length;l++){const u=d(t[l],e,n);u>=0&&(r[l]=!0,null!=o[u]?o[u].push(t[l]):o[u]=[t[l]])}for(let o=0;o<e.length;o++){const r=d(e[o],t,n);r>=0&&(l[o]=!0,null!=u[r]?u[r].push(e[o]):u[r]=[e[o]])}const g=[];for(let r=0;r<e.length;r++)null!=o[r]||l[r]||g.push({load:[],remove:[e[r]]});for(let l=0;l<t.length;l++)null!=u[l]||r[l]||g.push({load:[t[l]],remove:[]});for(let l=0;l<t.length;l++)null!=u[l]&&(u[l].length>1||u[l][0]!==t[l])&&g.push({load:[t[l]],remove:u[l]});for(let l=0;l<e.length;l++)null!=o[l]&&(o[l].length>1||o[l][0]!==e[l])&&g.push({load:o[l],remove:[e[l]]});return g}const l=[!1],o=[null],r=[!1],u=[null];function d(e,t,n){let l=e;for(;l>0;){const e=t.indexOf(l);if(e>=0)return e;l=n.getParentId(l)}return t.indexOf(l)}function g(e,n,l){return e.sort(((e,o)=>{if(0===e.load.length&&0===o.load.length)return 0;if(0===e.load.length)return-1;if(0===o.load.length)return 1;if(0===e.remove.length&&0===o.remove.length){const r=l.getRenderCenter(e.load[0]),u=l.getRenderCenter(o.load[0]);return t.dot(r,n)-t.dot(u,n)}if(0===e.remove.length)return-1;if(0===o.remove.length)return 1;if(1===e.load.length&&1===o.load.length){const r=l.getRenderCenter(e.load[0]),u=l.getRenderCenter(o.load[0]);return t.dot(r,n)-t.dot(u,n)}if(1===e.load.length)return-1;if(1===o.load.length)return 1;{const r=l.getRenderCenter(e.remove[0]),u=l.getRenderCenter(o.remove[0]);return t.dot(r,n)-t.dot(u,n)}}))}function h(e,t,n){for(let l=0;l<e.length;++l){const o=e[l];o.load.length>t&&1===o.remove.length&&f(e,o,n)}}function f(e,t,n){const l=[t.remove[0]],o=[];for(;1===l.length;){const e=l.pop();o.length=0;for(let r=0;r<t.load.length;r++){let u=t.load[r],d=n.getParentId(u);for(;d!==e;)u=d,d=n.getParentId(u);let g=l.indexOf(u);g<0&&(g=l.length,l.push(u),o.push([])),o[g].push(t.load[r])}}t.load=l;for(let r=0;r<l.length;r++)o[r].length>1?e.push({remove:[l[r]],load:o[r]}):l[r]=o[r][0]}e.nodeDiff=n,e.sortFrontToBack=g,e.splitWorkEntries=h,e.splitWorkEntry=f,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
