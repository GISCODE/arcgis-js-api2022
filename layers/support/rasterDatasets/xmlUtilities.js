/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function n(e,t){if(!e||!t)return[];let l=t;t.indexOf("/")>-1?(l=t.slice(0,t.indexOf("/")),t=t.slice(t.indexOf("/")+1)):t="";const u=[];if(t){const r=n(e,l);for(let e=0;e<r.length;e++){n(r[e],t).forEach((e=>u.push(e)))}return u}const r=e.getElementsByTagNameNS("*",l);if(!r||0===r.length)return[];for(let n=0;n<r.length;n++)u.push(r[n]||r.item[n]);return u}function t(e,l){if(!e||!l)return null;let u=l;l.indexOf("/")>-1?(u=l.slice(0,l.indexOf("/")),l=l.slice(l.indexOf("/")+1)):l="";const r=n(e,u);return r.length>0?l?t(r[0],l):r[0]:null}function l(e,n=null){const l=n?t(e,n):e;let u;return l?(u=l.textContent||l.nodeValue,u?u.trim():null):null}function u(e,t){const l=n(e,t),u=[];let r;for(let n=0;n<l.length;n++)r=l[n].textContent||l[n].nodeValue,r&&(r=r.trim(),""!==r&&u.push(r));return u}function r(e,n=null){const t=l(e,n);return null==t?void 0:t.split(" ").map((e=>Number(e)))}function o(e,n){return u(e,n).map((e=>Number(e)))}function i(e,n){const t=l(e,n);return Number(t)}function s(e,n){var t;const l=null==e||null==(t=e.nodeName)?void 0:t.toLowerCase(),u=n.toLowerCase();return l.slice(l.lastIndexOf(":")+1)===u}function c(e){return e.nodeName.slice(e.nodeName.lastIndexOf(":")+1)}e.getElement=t,e.getElementNumericValue=i,e.getElementNumericValues=o,e.getElementValue=l,e.getElementValues=u,e.getElements=n,e.getNodeNameIgnoreNS=c,e.getSpaceDelimitedNumericValues=r,e.isSameTagIgnoreNS=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
