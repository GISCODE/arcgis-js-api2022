// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/Color","dojo/has","../kernel","./_toolbar","../symbols/SimpleMarkerSymbol","../symbols/SimpleLineSymbol","../symbols/SimpleFillSymbol","./draw","../tasks/ImageServiceMeasureParameters","../tasks/ImageServiceMeasureTask","../geometry/Point","dojo/_base/array","../units"],(function(e,t,i,r,n,s,o,a,l,h,u,_,p,m,c){var E=e("CustomDraw",[h],{returnCurrentPoint:function(){return this._points},hideTooltip:function(){this._options.showTooltips=!1},showTooltip:function(){this._options.showTooltips=!0}}),T=e(s,{declaredClass:"esri.toolbars.imageServiceMeasure",_eventMap:{"draw-end":["geometry"],"draw-start":[],"measure-end":["measureResult","error","geometry"],"unit-change":["measureResult","error","geometry"]},_mensurationCapabilitiesMap:{Basic:["OPERATION_POINT","OPERATION_DISTANCE_ANGLE","OPERATION_AREA_PERIMETER","OPERATION_CENTROID"],"3D":["OPERATION_POINT_3D","OPERATION_DISTANCE_ANGLE_3D","OPERATION_AREA_PERIMETER_3D","OPERATION_CENTROID_3D"],"Base-Top Height":["OPERATION_BASE_TOP"],"Top-Top Shadow Height":["OPERATION_TOP_TOP_SHADOW"],"Base-Top Shadow Height":["OPERATION_BASE_TOP_SHADOW"]},_supportedMeasureOperations:[],_operationsMap:{OPERATION_POINT:{geometryType:"POINT"},OPERATION_DISTANCE_ANGLE:{geometryType:"LINE"},OPERATION_AREA_PERIMETER:{geometryType:"POLYGON"},OPERATION_BASE_TOP:{geometryType:"LINE"},OPERATION_BASE_TOP_SHADOW:{geometryType:"LINE"},OPERATION_TOP_TOP_SHADOW:{geometryType:"LINE"},OPERATION_CENTROID:{geometryType:"POLYGON"},OPERATION_POINT_3D:{geometryType:"POINT"},OPERATION_DISTANCE_ANGLE_3D:{geometryType:"LINE"},OPERATION_AREA_PERIMETER_3D:{geometryType:"POLYGON"},OPERATION_CENTROID_3D:{geometryType:"POLYGON"}},_supportedUnits:{linearUnits:["INCHES","FEET","YARDS","MILES","NAUTICAL_MILES","MILLIMETERS","CENTIMETERS","DECIMETERS","METERS","KILOMETERS"],angularUnits:["RADIANS","DECIMAL_DEGREES"],areaUnits:["SQUARE_INCHES","SQUARE_FEET","SQUARE_YARDS","ACRES","SQUARE_MILES","SQUARE_MILLIMETERS","SQUARE_CENTIMETERS","SQUARE_DECIMETERS","SQUARE_METERS","ARES","HECTARES","SQUARE_KILOMETERS"]},markerSymbol:null,lineSymbol:null,fillSymbol:null,_drawToolbar:null,_currentGeometry:null,_currentOperation:null,linearUnit:null,angularUnit:null,areaUnit:null,_decimalDegreesConstantValue:"esriDUDecimalDegrees",_decimalDegreesConstantKeyword:"DECIMAL_DEGREES",constructor:function(t){e.safeMixin(this,t),this._checkMensurationSupport(),this._setDefaultSymbols()},_checkMensurationSupport:function(){this.layer.mensurationCapabilities?this._setSupportedMeasureOperations():console.log("Mensuration Capabilities not supported.")},_setDefaultSymbols:function(){this.markerSymbol||(this.markerSymbol=new o,this.markerSymbol.setPath("M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM16.868,21.375h-1.969v-1.889h1.969V21.375zM16.772,18.094h-1.777l-0.176-8.083h2.113L16.772,18.094z"),this.markerSymbol.setColor(new i("#00FFFF"))),this.lineSymbol||(this.lineSymbol=new a(a.STYLE_SOLID,new i([255,0,0]),1.5)),this.fillSymbol||(this.fillSymbol=new l(l.STYLE_SOLID,new a(a.STYLE_DASHDOT,new i([255,0,0]),2),new i([255,255,0,.25])))},_setSupportedMeasureOperations:function(){var e;this._supportedMeasureOperations=[],this.mensurationCapabilities=this.layer.mensurationCapabilities.split(","),m.forEach(this.mensurationCapabilities,(function(t){e=this._mensurationCapabilitiesMap[t],m.forEach(e,(function(e){this._supportedMeasureOperations.push(e)}),this)}),this)},getSupportedMeasureOperations:function(){var e=[];return m.forEach(this._supportedMeasureOperations,(function(t){e.push(u[t])}),this),e},getSupportedUnits:function(){var e,t={},i=[],r=[];for(e in this._supportedUnits)this._supportedUnits.hasOwnProperty(e)&&(i=this._supportedUnits[e],r=[],m.forEach(i,(function(e){e===this._decimalDegreesConstantKeyword?r.push(this._decimalDegreesConstantValue):r.push(c[e])}),this),t[e]=r);return t},setLinearUnit:function(e){var t;for(t in c)c.hasOwnProperty(t)&&c[t]===e&&(this.linearUnit=t);this._currentGeometry&&this._getUnitChangeResults(this._currentGeometry)},setAngularUnit:function(e){var t;for(t in c)c.hasOwnProperty(t)&&(c[t]===e?this.angularUnit=t:e===this._decimalDegreesConstantValue&&(this.angularUnit=this._decimalDegreesConstantKeyword));this._currentGeometry&&this._getUnitChangeResults(this._currentGeometry)},setAreaUnit:function(e){var t;for(t in c)c.hasOwnProperty(t)&&c[t]===e&&(this.areaUnit=t);this._currentGeometry&&this._getUnitChangeResults(this._currentGeometry)},setMarkerSymbol:function(e){this.markerSymbol=e},setLineSymbol:function(e){this.lineSymbol=e},setFillSymbol:function(e){this.fillSymbol=e},activate:function(e){m.forEach(this._supportedMeasureOperations,(function(t){u[t]===e&&(this._currentOperation=t)}),this),this.map.setMapCursor("crosshair"),this._mapClickHandle=this.map.on("click",t.hitch(this,this._onMapClick)),this._mapMouseDownHandle=this.map.on("mouse-down",t.hitch(this,this._onMapMouseDown)),this._drawToolbar||(this._drawToolbar=new E(this.map,{fillSymbol:this.fillSymbol,markerSymbol:this.markerSymbol,lineSymbol:this.lineSymbol}),this._drawToolbar.on("draw-end",t.hitch(this,this._setGeometry))),this._drawToolbar.activate(h[this._operationsMap[this._currentOperation].geometryType])},_onMapClick:function(){0===this._drawToolbar.returnCurrentPoint().length&&this.onDrawStart()},_onMapMouseDown:function(){0===this._drawToolbar.returnCurrentPoint().length&&this.onDrawStart()},deactivate:function(){this._drawToolbar&&this._drawToolbar.deactivate(),this.map.setMapCursor("default"),this._currentGeometry=null,this._currentOperation=null,this._mapClickHandle&&(this._mapClickHandle.remove(),this._mapClickHandle=null),this._mapMouseDownHandle&&(this._mapMouseDownHandle.remove(),this._mapMouseDownHandle=null)},hideDrawTooltip:function(){this._drawToolbar.deactivate(),this._drawToolbar.hideTooltip(),this._drawToolbar.activate(h[this._operationsMap[this._currentOperation].geometryType])},showDrawTooltip:function(){this._drawToolbar.deactivate(),this._drawToolbar.showTooltip(),this._drawToolbar.activate(h[this._operationsMap[this._currentOperation].geometryType])},_setGeometry:function(e){var t=e.geometry;this.onDrawEnd(t),this._getMensurationResults(t),this._currentGeometry=t},_getImageServiceMeasureParameters:function(e){var t=new u;return t.operation=u[this._currentOperation],t.mosaicRule=this.layer.mosaicRule,t.linearUnit=c[this.linearUnit],t.angularUnit=this.angularUnit===this._decimalDegreesConstantKeyword?this._decimalDegreesConstantValue:c[this.angularUnit],t.areaUnit=c[this.areaUnit],"line"===e.type||"polyline"===e.type?(t.fromGeometry=new p(e.paths[0][0][0],e.paths[0][0][1],this.map.spatialReference),t.toGeometry=new p(e.paths[0][1][0],e.paths[0][1][1],this.map.spatialReference)):t.fromGeometry=e,t},_getMensurationResults:function(e){var i=this._getImageServiceMeasureParameters(e);new _(this.layer.url).execute(i,t.hitch(this,this._measureTaskSuccess),t.hitch(this,this._measureTaskError))},_measureTaskSuccess:function(e){this.onMeasureEnd(e,null,this._currentGeometry)},_measureTaskError:function(e){this.onMeasureEnd(null,e,this._currentGeometry)},_getUnitChangeResults:function(e){var i=this._getImageServiceMeasureParameters(e);new _(this.layer.url).execute(i,t.hitch(this,this._unitChangeSuccess),t.hitch(this,this._unitChangeError))},_unitChangeSuccess:function(e){this.onUnitChange(e,null,this._currentGeometry)},_unitChangeError:function(e){this.onUnitChange(null,e,this._currentGeometry)},onDrawStart:function(){},onDrawEnd:function(){},onMeasureEnd:function(){},onUnitChange:function(){}});return r("extend-esri")&&t.setObject("toolbars.imageServiceMeasure",T,n),T}));