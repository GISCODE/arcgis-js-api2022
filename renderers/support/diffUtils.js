// COPYRIGHT © 2019 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/Accessor","../../core/Collection","../../core/maybe","../../core/accessorSupport/utils"],function(e,t,r,n,o,i){function f(e){return e instanceof r}function u(e){return e instanceof n?Object.keys(e.items):f(e)?i.getProperties(e).keys():e?Object.keys(e):[]}function l(e,t){return e instanceof n?e.items[t]:e[t]}function c(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}function a(e){return e?e.declaredClass:null}function s(e,t){var r,n=e.diff;if(n&&"function"==typeof n)return n(e,t);var i=u(e),p=u(t);if(0!==i.length||0!==p.length){if(!i.length||!p.length||c(e,t))return{type:"complete",oldValue:e,newValue:t};var y=p.filter(function(e){return-1===i.indexOf(e)}),v=i.filter(function(e){return-1===p.indexOf(e)}),m=i.filter(function(r){return p.indexOf(r)>-1&&l(e,r)!==l(t,r)}),h=m.concat(y,v).sort(),g=a(e);if(g&&d.indexOf(g)>-1&&h.length)return{type:"complete",oldValue:e,newValue:t};for(var b,V=f(e)&&f(t),j=0,A=h;j<A.length;j++){var O=A[j],w=l(e,O),x=l(t,O),P=void 0;(V||"function"!=typeof w&&"function"!=typeof x)&&(w!==x&&(null==w&&null==x||(P=n&&n[O]&&"function"==typeof n[O]?n[O](w,x):"object"==typeof w&&"object"==typeof x&&a(w)===a(x)?s(w,x):{type:"complete",oldValue:w,newValue:x},o.isSome(P)&&(o.isSome(b)?b.diff[O]=P:b={type:"partial",diff:(r={},r[O]=P,r)}))))}return b}}function p(e,t){if("function"!=typeof e&&"function"!=typeof t&&(e||t))return!e||!t||"object"==typeof e&&"object"==typeof t&&a(e)!==a(t)?{type:"complete",oldValue:e,newValue:t}:s(e,t)}function y(e){if(o.isNone(e))return!0;switch(e.type){case"complete":return!1;case"collection":for(var t=e,r=0,n=t.added;r<n.length;r++){var i=n[r];if(!y(i))return!1}for(var f=0,u=t.removed;f<u.length;f++){var i=u[f];if(!y(i))return!1}for(var l=0,c=t.changed;l<c.length;l++){var i=c[l];if(!y(i))return!1}return!0;case"partial":for(var a in e.diff){var i=e.diff[a];if(!y(i))return!1}return!0}}Object.defineProperty(t,"__esModule",{value:!0});var d=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"];t.diff=p,t.isEmpty=y});