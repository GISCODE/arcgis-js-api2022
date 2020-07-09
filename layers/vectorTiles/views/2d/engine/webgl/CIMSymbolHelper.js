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

define(["require","exports","../../../../core/Logger","./CIMSymbolDrawHelper","./SDFHelper","../../../vectorTiles/GeometryUtils"],(function(e,r,a,o,t,i){Object.defineProperty(r,"__esModule",{value:!0});var s=a.getLogger("esri/views/2d/engine/webgl/CIMSymbolHelper"),n=function(){function e(){}return e.getEnvelope=function(e){if("CIMPointSymbol"!==e.type)return null;var r=new o.EnvDrawHelper;return r.drawSymbol(e,{type:"point",x:0,y:0}),r.envelope()},e.rasterize=function(e,r){var a=this.getEnvelope(r);if(!a||a.width<=0||a.height<=0)return[null,0,0,0,0];var t=(a.x+.5*a.width)*(96/72),i=-(a.y+.5*a.height)*(96/72);e.width=a.width*(96/72)+2,e.height=a.height*(96/72)+2;var s=e.getContext("2d"),n=o.Transformation.createScale(96/72,-96/72);n.translate(.5*e.width-t,.5*e.height-i);new o.CanvasDrawHelper(s,n).drawSymbol(r,{type:"point",x:0,y:0});for(var l,S=s.getImageData(0,0,e.width,e.height),h=new Uint8Array(S.data),c=0;c<h.length;c+=4)l=h[c+3]/255,h[c]=h[c]*l,h[c+1]=h[c+1]*l,h[c+2]=h[c+2]*l;return[h,e.width,e.height,t/e.width,i/e.height]},e.fromSimpleMarker=function(e){var r,a,o,t=e.style;if("circle"===t||"esriSMSCircle"===t){var s=Math.acos(.995),n=Math.ceil(i.C_PI/s/4);0===n&&(n=1),s=i.C_PI_BY_2/n,n*=4;var l=[];l.push([50,0]);for(var S=1;S<n;S++)l.push([50*Math.cos(S*s),-50*Math.sin(S*s)]);l.push([50,0]),r={rings:[l]},a={xmin:-50,ymin:-50,xmax:50,ymax:50}}else if("cross"===t||"esriSMSCross"===t){r={rings:[[[h=0,50],[h,h],[50,h],[50,-h],[h,-h],[h,-50],[-h,-50],[-h,-h],[-50,-h],[-50,h],[-h,h],[-h,50],[h,50]]]},a={xmin:-50,ymin:-50,xmax:50,ymax:50}}else if("diamond"===t||"esriSMSDiamond"===t)r={rings:[[[-50,0],[0,50],[50,0],[0,-50],[-50,0]]]},a={xmin:-50,ymin:-50,xmax:50,ymax:50};else if("square"===t||"esriSMSSquare"===t)r={rings:[[[-50,-50],[-50,50],[50,50],[50,-50],[-50,-50]]]},a={xmin:-50,ymin:-50,xmax:50,ymax:50};else if("x"===t||"esriSMSX"===t){var h;r={rings:[[[0,h=0],[50-h,50],[50,50-h],[h,0],[50,h-50],[50-h,-50],[0,-h],[h-50,-50],[-50,h-50],[-h,0],[-50,50-h],[h-50,50],[0,h]]]},a={xmin:-50,ymin:-50,xmax:50,ymax:50}}else if("triangle"===t||"esriSMSTriangle"===t){var c=57.735026918962575,d=-c,g=2/3*100-100;r={rings:[[[d,g],[0,2/3*100],[c,g],[d,g]]]},a={xmin:d,ymin:g,xmax:c,ymax:2/3*100}}if(r&&a){var m=[{type:"CIMSolidFill",enable:!0,color:e.color}];e.outline&&m.push({type:"CIMSolidStroke",enable:!0,width:e.outline.width,color:e.outline.color});var y={type:"CIMPolygonSymbol",symbolLayers:m};o={type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,rotation:e.angle,size:e.size,offsetX:e.xoffset,offsetY:e.yoffset,frame:a,markerGraphics:[{type:"CIMMarkerGraphic",geometry:r,symbol:y}]}]}}return o},e}();r.CIMSymbolHelper=n;var l=function(){function e(){}return e.rasterizeSimpleFill=function(e,r){"solid"!==r&&"none"!==r&&"esriSFSSolid"!==r&&"esriSFSNull"!==r||console.error("Unexpected: style does not require rasterization"),e.width=8,e.height=8;var a=e.getContext("2d");a.strokeStyle="#FFFFFF",a.beginPath(),"vertical"!==r&&"cross"!==r&&"esriSFSCross"!==r&&"esriSFSVertical"!==r||(a.moveTo(0,0),a.lineTo(0,8)),"horizontal"!==r&&"cross"!==r&&"esriSFSCross"!==r&&"esriSFSHorizontal"!==r||(a.moveTo(0,0),a.lineTo(8,0)),"forward-diagonal"!==r&&"diagonal-cross"!==r&&"esriSFSDiagonalCross"!==r&&"esriSFSForwardDiagonal"!==r||(a.moveTo(0,0),a.lineTo(8,8)),"backward-diagonal"!==r&&"diagonal-cross"!==r&&"esriSFSBackwardDiagonal"!==r&&"esriSFSDiagonalCross"!==r||(a.moveTo(8,0),a.lineTo(0,8)),a.stroke();for(var o,t=a.getImageData(0,0,e.width,e.height),i=new Uint8Array(t.data),s=0;s<i.length;s+=4)o=i[s+3]/255,i[s]=i[s]*o,i[s+1]=i[s+1]*o,i[s+2]=i[s+2]*o;return[i,e.width,e.height]},e.rasterizeSimpleLine=function(e,r){var a;switch(r){case"dash":case"esriSLSDash":a=[3,2];break;case"dash-dot":case"esriSLSDashDot":a=[2,2,0,2];break;case"dot":case"esriSLSDot":a=[0,3];break;case"long-dash":case"esriSLSLongDash":a=[6,3];break;case"long-dash-dot":case"esriSLSLongDashDot":a=[6,3,0,3];break;case"long-dash-dot-dot":case"esriSLSDashDotDot":a=[2,2,0,2,0,2];break;case"short-dash":case"esriSLSShortDash":a=[2,2];break;case"short-dash-dot":case"esriSLSShortDashDot":a=[2,2,0,2];break;case"short-dash-dot-dot":case"esriSLSShortDashDotDot":a=[2,2,0,2,0,2];break;case"short-dot":case"esriSLSShortDot":a=[0,2];break;case"solid":case"esriSLSSolid":case"none":s.error("Unexpected: style does not require rasterization"),a=[0,0];break;default:s.error("Tried to rasterize SLS, but found an unexpected style: "+r+"!"),a=[0,0]}for(var o=0,i=0,n=a;i<n.length;i++){o+=n[i]}for(var l=16*o,S=31*l,h=new Float32Array(S),c=0;c<S;++c)h[c]=257;for(var d=.5,g=.5,m=!0,y=0,f=a;y<f.length;y++){d=g,g+=16*f[y];for(var u=d;u<g;){for(var v=.5;v<31;){var p=(v-15.5)*(v-15.5);h[c=(31-v+.5+1)*l+u-.5]=m?p:Math.min((u-d)*(u-d)+p,(u-g)*(u-g)+p),v++}u++}m=!m}var x=h.length,b=new Uint8Array(4*x);for(c=0;c<x;++c){var w=Math.sqrt(h[c])/15;t.packFloat(w,b,4*c)}return[b,l,31]},e}();r.SymbolHelper=l}));