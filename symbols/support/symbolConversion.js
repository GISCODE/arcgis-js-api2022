/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../symbols","../../core/Error","../WebStyleSymbol","../PointSymbol3D","../SimpleLineSymbol","../LineSymbol3D","../SimpleMarkerSymbol","../PictureMarkerSymbol","../SimpleFillSymbol","../PolygonSymbol3D","../TextSymbol","../LabelSymbol3D"],(function(e,o,l,i,n,r,t,s,m,y,b,a,f){"use strict";const S={retainId:!1,ignoreDrivers:!1,hasLabelingContext:!0};function u(e,u=S){if(!e)return{symbol:null};const{retainId:c=S.retainId,ignoreDrivers:p=S.ignoreDrivers,hasLabelingContext:d=S.hasLabelingContext,retainCIM:D=S.retainCIM}=u;let g;if(o.isSymbol3D(e)||e instanceof i)g=e.clone();else if("cim"===e.type){var M,v;const o=null==(M=e.data)||null==(v=M.symbol)?void 0:v.type;if("CIMPointSymbol"!==o)return{error:new l("symbol-conversion:unsupported-cim-symbol",`CIM symbol of type '${o||"unknown"}' is unsupported in 3D`,{symbol:e})};g=D?e.clone():n.fromCIMSymbol(e)}else if(e instanceof r)g=t.fromSimpleLineSymbol(e);else if(e instanceof s)g=n.fromSimpleMarkerSymbol(e);else if(e instanceof m)g=n.fromPictureMarkerSymbol(e);else if(e instanceof y)g=b.fromSimpleFillSymbol(e);else{if(!(e instanceof a))return{error:new l("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${e.type||e.declaredClass}' is unsupported in 3D`,{symbol:e})};g=d?f.fromTextSymbol(e):n.fromTextSymbol(e)}if(c&&"cim"!==g.type&&(g.id=e.id),p&&o.isSymbol3D(g))for(let o=0;o<g.symbolLayers.length;++o)g.symbolLayers.getItemAt(o)._ignoreDrivers=!0;return{symbol:g}}e.to3D=u,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
