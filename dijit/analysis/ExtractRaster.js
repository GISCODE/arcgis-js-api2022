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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/_base/connect","dojo/_base/Color","dojo/dom-style","dojo/_base/json","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","../../kernel","../../symbols/SimpleFillSymbol","../../symbols/SimpleLineSymbol","../../toolbars/draw","../../graphic","../../geometry/Polygon","../../geometry/Extent","../../geometry/geometryEngine","../../tasks/query","./RasterAnalysisMixin","./ItemTypes","./utils","dojo/i18n!../../nls/jsapi","dojo/text!./templates/ExtractRaster.html"],(function(e,t,i,s,a,r,l,n,o,h,y,u,p,c,d,g,m,_,L,v,f,b,S,w,A,x,T){var j=e([o,h,y,u,p,S],{declaredClass:"esri.dijit.analysis.ExtractRaster",templateString:T,widgetsInTemplate:!0,browseType:[w.IS],inputLayer:null,clipType:1,geometry:null,graphic:null,_findDeepestArgsForRerun:!0,valueLayer:null,valueLayers:null,clippingMethod:"byExtent",toolName:"ExtractRaster",helpFileName:"ExtractRaster",toolNlsName:x.extractRasterTool,_getRasterFunction:function(){return"Clip"},_getRasterArguments:function(){return{ClippingType:this.get("clipType"),ClippingGeometry:this.get("geometry"),clippingMethod:this.get("clippingMethod"),valueLayer:n.toJson(A.constructAnalysisInputLyrObj(this.get("valueLayer")))}},_getOutputItemProperties:function(){return this.inputLayer&&this.inputLayer.bandCount&&1===this.inputLayer.bandCount?this._getDefaultOutputItemProperties(1,"Spectrum-Full Bright","RSP_NearestNeighbor"):{visibility:!0,popupInfo:this._getDefaultPopupInfo()}},_setDefaultInputs:function(){var e=0;if(this.valueLayers&&(this.rerun&&this.valueLayer&&"string"==typeof this.valueLayer&&(this.valueLayer=n.fromJson(this.valueLayer)),i.forEach(this.valueLayers,(function(t,i){this._layersSelect.addOption({value:i,label:t.name}),0!==i||this.rerun?this.valueLayer&&t.name===this.valueLayer.name&&t.url===(this.valueLayer.url&&this.valueLayer.url.split("?")[0])&&(e=i):this.valueLayer=t}),this)),this.valueLayer&&e>0&&this._layersSelect.set("value",e),this.rerun){this.set("clipType",this.ClippingType);var t=this.ClippingGeometry;"extent"===t.type?this.geometry=new v(t):this.geometry=new L(t)}else this.geometry=this.map.extent._normalize(!0);this.set("clippingMethod",this.clippingMethod)},addBrowseOption:function(){A.addReadyToUseLayerOption(this,[{disableLAAL:!0,select:this._layersSelect}])},_onClose:function(e){this._clearGeometry(),this._toolbar.deactivate(),this.emit("drawtool-deactivate",{}),e&&(this._save(),this.emit("save",{save:!0})),this.emit("close",{save:!e})},_handlePolyBtnChange:function(e){e?(this.emit("drawtool-activate",{}),this._toolbar.activate(m.POLYGON),this._clearGeometry()):(this._toolbar.deactivate(),this.emit("drawtool-deactivate",{}))},_handleClippingMethodChange:function(e){l.set(this._byGeometry,"display","byGeometry"===e?"block":"none"),l.set(this._byFeature,"display","byFeature"===e?"block":"none"),l.set(this._useGeometry,"display","byFeature"===e&&this.valueLayer&&"Feature Layer"===this.valueLayer.type?"block":"none"),"byExtent"===e&&(this.geometry=this.map.extent._normalize(!0),this._clearGeometry()),"byFeature"===e&&(this.geometry=this.valueLayer&&this.valueLayer.fullExtent)},_addGeometry:function(e){if(e){this._clearGeometry();var t=new d(d.STYLE_NULL,new g(g.STYLE_SOLID,new r([0,0,0]),4)),i=new _(e,t);this.map.graphics.add(i),this.graphic=i,this.map.setExtent(e.getExtent(),!0),this.geometry=e}},_clearGeometry:function(){this.graphic&&this.map.graphics.remove(this.graphic)},_handleLayerChange:function(e){"browselayers"===e||"browse"===e?(this._isAnalysisSelect=!1,this.defaultItemTypes=[],this.set("allowedItemTypes",[w.IS,w.FS]),this._createBrowseItems({browseValue:e,disableLAAL:!0,disableBoundary:!0},{},this._layersSelect)):this.set("valueLayer",this.valueLayers[e])},_handleBrowseItemsSelect:function(e,i){e&&e.selection&&A.addAnalysisReadyLayer({item:e.selection,layers:this._isAnalysisSelect?this.inputLayers:this.valueLayers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._layersSelect,browseDialog:this._browseLyrsdlg||this._browsedlg,widget:this},i).always(t.hitch(this,(function(){this._isAnalysisSelect?this._handleAnalysisLayerChange(this._analysisSelect.get("value")):this._handleLayerChange(this._layersSelect.get("value"))})))},_handleUseGeometryChange:function(e){if(e){var s=new b;s.returnGeometry=!0,s.where="1 = 1",this.valueLayer.queryFeatures(s).then(t.hitch(this,(function(e){if(e){var t=[];i.forEach(e.features,(function(e){t.push(e.geometry)})),this.geometry=f.union(t)}})))}else this.geometry=this.valueLayer.fullExtent},_getValueLayerAttr:function(){return this.valueLayer=this.valueLayers[this._layersSelect.get("value")],this.valueLayer},_setValueLayerAttr:function(e){this.valueLayer=e,"byFeature"===this._clippingMethodSelect.get("value")&&(this.geometry=this.valueLayer.fullExtent,l.set(this._useGeometry,"display","Feature Layer"===this.valueLayer.type?"block":"none"))},_setValueLayersAttr:function(e){this.valueLayers=e,this.set("valueLayer",this.valueLayers[0])},_getValueLayersAttr:function(){return this.valueLayers},_setMapAttr:function(e){this.map=e,this._toolbar=new m(this.map),a.connect(this._toolbar,"onDrawEnd",t.hitch(this,this._addGeometry))},_setClipTypeAttr:function(e){this.clipType=e,this._clippingTypeSelect.set("value",e)},_getClipTypeAttr:function(){return this.clipType=this._clippingTypeSelect.get("value"),this.clipType},_setGeometryAttr:function(e){this.geometry=e},_getGeometryAttr:function(){return this.geometry},_setClippingMethodAttr:function(e){this.clippingMethod=e,this._clippingMethodSelect.set("value",e)},_getClippingMethodAttr:function(){return this.clippingMethod=this._clippingMethodSelect.get("value"),this.clippingMethod}});return s("extend-esri")&&t.setObject("dijit.analysis.ExtractRaster",j,c),j}));