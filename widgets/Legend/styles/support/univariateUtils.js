/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../core/screenUtils","../../../../libs/maquette/projection","../../../../libs/maquette/projector","../../../../symbols/support/symbolUtils","../../../support/widgetUtils","../../../../core/has","../../../../core/Logger","../../../support/jsxFactory"],(function(e,t,i,o,l,n,r,s,a){"use strict";const c=o.createProjector(),p=10,f=20,u=10,v=20,m={univariateAboveAndBelowSymbol:"esri-univariate-above-and-below-ramp__symbol",colorRamp:"esri-legend__color-ramp"};function h(e="vertical"){const t="stroke:rgb(200, 200, 200);stroke-width:1";return"vertical"===e?a.tsx("svg",{height:"4",width:"10"},a.tsx("line",{x1:"0",y1:"2",x2:"10",y2:"2",style:t})):a.tsx("svg",{height:"10",width:"10"},a.tsx("line",{x1:"5",y1:"0",x2:"5",y2:"10",style:t}))}function d(e,t="vertical"){const i=document.createElement("div");return i.style.height=`${f}px`,i.className=m.univariateAboveAndBelowSymbol,null!=e&&(i.style.opacity=e.toString()),c.append(i,h.bind(null,t)),i}function g(e,i,o="vertical",l){e.infos.forEach(((e,n)=>{if(l&&2===n)e.preview=d(i,o);else{const i=t.pt2px(e.size)+("horizontal"===o?v:u),l="div"===e.preview.tagName.toLowerCase(),n=l?e.preview:document.createElement("div");n.className=m.univariateAboveAndBelowSymbol,"horizontal"===o?n.style.width=`${i}px`:n.style.height=`${i}px`,l||n.appendChild(e.preview),e.preview=n}}))}function y(e,i="classic"){const o=e.infos;return"classic"===i?(t.pt2px(o[0].size)+u)/2:(t.pt2px(o[0].size)-t.pt2px(o[o.length-1].size))/2}function b(e,t){if(!e)return null;const i=e.infos.map((e=>e.color)),o=l.renderColorRampPreviewHTML("full"===t.type?i:"above"===t.type?i.slice(0,3):i.slice(2,5),{width:t.width,height:t.height,align:t.rampAlignment,effectList:t.effectList});return o.className=m.colorRamp,null!=t.opacity&&(o.style.opacity=t.opacity.toString()),o}function z(e,i,o,l="vertical"){let n=0;const r=e.infos,s=Math.floor(r.length/2),a="full"===i||"above"===i?0:s,c="full"===i||"below"===i?r.length-1:s;for(let m=a;m<=c;m++)if(o&&m===s)n+="horizontal"===l?p:f;else{n+=t.pt2px(r[m].size)+("horizontal"===l?v:u)}return Math.round(n)}function w(e,i,o,l="vertical"){const n=z(e,i,o,l),r=e.infos,s=Math.floor(r.length/2),a="full"===i||"above"===i?0:s,c="full"===i||"below"===i?r.length-1:s,m="full"===i?r[a].size+r[c].size:"above"===i?r[a].size:r[c].size,h=o?"vertical"===l?f:p:0,d="vertical"===l?u*("full"===i?2:1):v*("full"===i?2:1);return Math.round(n-(t.pt2px(m)/2+h/2+d/2))}function x(e,t,i="vertical"){const o=e.infos;let l=o.find((({type:e})=>"size-ramp"===e)),n=o.find((({type:e})=>"color-ramp"===e));var r,s;(l&&(l={...l},l.infos=[...l.infos],g(l,t,i,!0)),n&&(n={...n},n.infos=[...n.infos]),"horizontal"===i)&&(null==(r=l)||r.infos.reverse(),null==(s=n)||s.infos.reverse());return{sizeRampElement:l,colorRampElement:n}}function R(e,t="vertical"){const i=e.infos;let o=i.find((({type:e})=>"size-ramp"===e)),l=i.find((({type:e})=>"color-ramp"===e));var n,r;(o&&(o={...o},o.infos=[...o.infos],g(o,null,t,!1)),l&&(l={...l},l.infos=[...l.infos]),"horizontal"===t)&&(null==(n=o)||n.infos.reverse(),null==(r=l)||r.infos.reverse());return{sizeRampElement:o,colorRampElement:l}}e.getUnivariateAboveAndBelowRampElements=x,e.getUnivariateColorRampMargin=y,e.getUnivariateColorRampPreview=b,e.getUnivariateColorRampSize=w,e.getUnivariateColorSizeRampElements=R,e.getUnivariateSizeRampSize=z,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
