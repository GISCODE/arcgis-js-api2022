// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/sniff","dojo/global","./kernel"],(function(r,e,i){var n,a=r("ff"),t=r("ie"),s=void 0===t&&r("trident")>=7,o=r("edge"),d=r("webkit"),l=r("opera"),m=r("chrome"),c=r("safari"),f=navigator.userAgent;(n=f.match(/(iPhone|iPad|CPU)\s+OS\s+(\d+\_\d+)/i))&&r.add("esri-iphone",parseFloat(n[2].replace("_","."))),(n=f.match(/Android\s+(\d+(\.\d+)*)/i))&&r.add("esri-android",parseFloat(n[1])),(n=f.match(/Fennec\/(\d+\.\d+)/i))&&r.add("esri-fennec",parseFloat(n[1])),f.indexOf("BlackBerry")>=0&&f.indexOf("WebKit")>=0&&r.add("esri-blackberry",1),r.add("esri-touch",!!(r("esri-iphone")||r("esri-android")||r("esri-blackberry")||r("esri-fennec")>=6||(a||d)&&(document.createTouch||"ontouchstart"in e||e.TouchEvent&&navigator.maxTouchPoints>0))),(n=f.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i))&&r.add("esri-mobile",!!n),r.add("esri-pointer",!a&&(navigator.pointerEnabled||navigator.msPointerEnabled||!!e.PointerEvent)),i._getDOMAccessor=function(r){var e="";return a?e="Moz":d?e="Webkit":t?e="ms":l&&(e="O"),e+r.charAt(0).toUpperCase()+r.substr(1)},r.add("esri-phonegap",!!e.cordova),r.add("esri-cors",r("esri-phonegap")||e.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest),r.add("esri-file-upload",!(!e.FormData||!e.FileList)),r.add("esri-script-sandbox",(function(){return"MessageChannel"in e&&"HTMLIFrameElement"in e&&"sandbox"in HTMLIFrameElement.prototype})),r.add("esri-secure-context",(function(){return"isSecureContext"in e?e.isSecureContext:e.location&&e.location.origin?0===e.location.origin.indexOf("https:"):void 0})),r.add("esri-wasm","WebAssembly"in e),r.add("esri-workers",!!e.Worker),r.add("esri-featurelayer-webgl",!1);var u=r("esri-featurelayer-webgl");if(u){var b=r("esri-mobile"),p=b?1:2,x=b?1:3;"object"==typeof u?(u.maxDrillLevel=null==u.maxDrillLevel?p:u.maxDrillLevel,u.maxRecordCountFactor=null==u.maxRecordCountFactor?x:u.maxRecordCountFactor,u.enablePBFQuery=null==u.enablePBFQuery||u.enablePBFQuery):r.add("esri-featurelayer-webgl",{maxDrillLevel:p,maxRecordCountFactor:x,enablePBFQuery:!0},null,!0)}return r.add("esri-featurelayer-webgl-labeling",!1),r.add("esri-pbf",!t||t>=10),r.add("esri-featurelayer-pbf",!0),r.add("esri-transforms",s||o||t>=9||a>=3.5||m>=4||c>=3.1||l>=10.5||r("esri-iphone")>=3.2||r("esri-android")>=2.1),r.add("esri-transitions",s||o||t>=10||a>=4||m>=4||c>=3.1||l>=10.5||r("esri-iphone")>=3.2||r("esri-android")>=2.1),r.add("esri-transforms3d",s||o||a>=10||m>=12||c>=4||r("esri-iphone")>=3.2||r("esri-android")>=3),r.add("esri-url-encodes-apostrophe",(function(){if(!e.document)return!1;var r=e.document.createElement("a");return r.href="?'",r.href.indexOf("?%27")>-1})),r("esri-android")<3&&(r.add("esri-transforms",!1,!1,!0),r.add("esri-transitions",!1,!1,!0),r.add("esri-transforms3d",!1,!1,!0)),r.add("esri-will-change",r("esri-transforms")&&(m>=52||c>=11.1)),i._css=function(e){var i=r("esri-transforms3d");null!=e?i=e:i&&(m||c&&!r("esri-iphone"))&&(i=!1);var n=i?"translate3d(":"translate(",s=i?m?",-1px)":",0px)":")",o=i?"scale3d(":"scale(",f=i?",1)":")",u=i?"rotate3d(0,0,1,":"rotate(",b=i?"matrix3d(":"matrix(",p=i?",0,0,":",",x=i?",0,0,0,0,1,0,":",",h=i?",0,1)":")";return{names:{transition:(d?"-webkit-transition":a&&"MozTransition")||l&&"OTransition"||t&&"msTransition"||"transition",transform:(d?"-webkit-transform":a&&"MozTransform")||l&&"OTransform"||t&&"msTransform"||"transform",transformName:(d?"-webkit-transform":a&&"-moz-transform")||l&&"-o-transform"||t&&"-ms-transform"||"transform",origin:(d?"-webkit-transform-origin":a&&"MozTransformOrigin")||l&&"OTransformOrigin"||t&&"msTransformOrigin"||"transformOrigin",endEvent:(d?"webkitTransitionEnd":a&&"transitionend")||l&&"oTransitionEnd"||t&&"MSTransitionEnd"||"transitionend"},translate:function(r,e){return n+r+"px,"+e+"px"+s},scale:function(r){return o+r+","+r+f},rotate:function(r){return u+r+"deg)"},matrix:function(r){return b+r.xx+","+r.xy+p+r.yx+","+r.yy+x+r.dx.toFixed(10)+(a&&a<=59?"px,":",")+r.dy.toFixed(10)+(a&&a<=59?"px":"")+h},getScaleFromMatrix:function(r){if(!r)return 1;var e=(r=r.toLowerCase()).indexOf("matrix3d")>-1?"matrix3d(":"matrix(";return Number(r.substring(e.length,r.indexOf(",")))}}},r("extend-esri")&&(i.isiPhone=r("esri-iphone"),i.isAndroid=r("esri-android"),i.isFennec=r("esri-fennec"),i.isBlackBerry=r("esri-blackberry"),i.isTouchEnabled=r("esri-touch"),i.isPointerEnabled=r("esri-pointer"),i._hasCors=r("esri-cors"),i._hasFileUpload=r("esri-file-upload"),i._hasTransforms=r("esri-transforms"),i._hasTransitions=r("esri-transitions"),i._has3DTransforms=r("esri-transforms3d")),r}));