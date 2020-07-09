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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/_base/array","dojo/_base/json","dojo/_base/connect","dojo/dom-class","dojo/dom-style","dojo/string","dojo/json","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","esri/layers/ArcGISImageServiceLayer","../../kernel","../../lang","./utils","./ItemTypes","./RasterAnalysisMixin","./AnalysisRegistry","dojo/i18n!../../nls/jsapi","dojo/i18n!./nls/Watershed","dojo/text!./templates/Watershed.html"],(function(t,e,i,s,n,r,o,a,l,u,c,d,p,h,y,F,_,L,w,R,f,m,g,D,P,A){var b=e([d,p,h,y,F,m],{declaredClass:"esri.dijit.analysis.Watershed",templateString:A,widgetsInTemplate:!0,browseType:[f.IS,f.FS],checkGeometries:[g.GeometryTypes.Point,g.GeometryTypes.MultiPoint,g.GeometryTypes.Line],tags:["point","line"],inputFlowDirectionRaster:null,inputLayer:null,pourPointField:null,_NOVALUE_:"NOVALUE",toolName:"Watershed",helpFileName:"Watershed",toolNlsName:P,rasterGPToolName:"Watershed",resultParameter:"outputRaster",constructor:function(t,e){this._pbConnects=[],t.containerNode&&(this.container=t.containerNode),this.inputLayer=t.inPourPointRasterOrFeatures},_getJobParameters:function(){var t=r.toJson(R.constructAnalysisInputLyrObj(this.get("inputLayer"))),e=this.get("pourPointField");return{inputFlowDirectionRaster:r.toJson(R.constructAnalysisInputLyrObj(this.get("inputFlowDirectionRaster"))),inPourPointRasterOrFeatures:t,pourPointField:e}},_handleInputFlowDirectionRasterChange:function(t){"browselayers"===t||"browse"===t?(this._isAnalysisSelect=!1,this.defaultItemTypes=[],this.set("allowedItemTypes",[f.IS]),this._createBrowseItems({browseValue:t,disableLAAL:!0,disableBoundary:!0},{},this._inputFlowDirectionRasterSelect)):t>=0&&this.set("inputFlowDirectionRaster",this.inputFlowDirectionRasterLayers[t])},_handleBrowseItemsSelect:function(t,e){t&&t.selection&&R.addAnalysisReadyLayer({item:t.selection,layers:this._isAnalysisSelect?this.inputLayers:this.inputFlowDirectionRasterLayers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._inputFlowDirectionRasterSelect,browseDialog:this._browseLyrsdlg||this._browsedlg,widget:this},e).always(i.hitch(this,(function(){this._isAnalysisSelect?this._handleAnalysisLayerChange(this._analysisSelect.get("value")):this._handleInputFlowDirectionRasterChange(this._inputFlowDirectionRasterSelect.get("value"))})))},_handlePourPointFieldChange:function(t){this.set("pourPointField",t)},_resetUI:function(){this.inputLayer&&this._addPourPointFieldOptions(),this.inputFlowDirectionRaster||(this.inputFlowDirectionRaster=this.inputFlowDirectionRasterLayers[0])},_addPourPointFieldOptions:function(){var t,e=[];this._pourPointField.removeOption(this._pourPointField.getOptions()),t=this.inputLayer instanceof _||"esri.layers.RasterXLayer"===this.inputLayer.declaredClass?this.inputLayer.hasRasterAttributeTable?this.inputLayer._rasterAttributeTableFields:[{value:"VALUE",label:"VALUE"}]:this.inputLayer.fields,n.forEach(t,i.hitch(this,(function(t){this._isNumberType(t.type)&&e.push({value:t.name,label:t.alias,selected:t.name===this.pourPointField})}))),!this.pourPointField&&e&&e[0]&&this.set("pourPointField",e[0].value),this._pourPointField.addOption(e)},_isNumberType:function(t){return t===g.FieldTypes.Integer||t===g.FieldTypes.Double||t===g.FieldTypes.Short||t===g.FieldTypes.Float},_addInputFlowDirectionRasterLayerOptions:function(){var t=[];this._inputFlowDirectionRasterSelect.removeOption(this._inputFlowDirectionRasterSelect.getOptions()),n.forEach(this.inputFlowDirectionRasterLayers,i.hitch(this,(function(e,i){t.push({label:e.name,value:i,selected:this._isSelected(e)})}))),this._inputFlowDirectionRasterSelect.addOption(t)},_isSelected:function(t){return this.inputFlowDirectionRaster&&t&&this.inputFlowDirectionRaster.url===t.url},addBrowseOption:function(){R.addReadyToUseLayerOption(this,[{select:this._inputFlowDirectionRasterSelect,disableLAAL:!0}])},_setInputLayerAttr:function(t){this.inputLayer=t},_getInputLayerAttr:function(){return this.inputLayer},_setInputLayersAttr:function(t){this.inputLayers=n.filter(t,(function(t){return t.geometryType===g.GeometryTypes.Point||t.geometryType===g.GeometryTypes.Line||t.geometryType===g.GeometryTypes.MultiPoint||t instanceof _||"esri.layers.RasterXLayer"===t.declaredClass})),this.set("inputFlowDirectionRasterLayers",t)},_getInputLayersAttr:function(t){return this.inputLayers},_getInputFlowDirectionRasterAttr:function(){return this.inputFlowDirectionRaster},_setInputFlowDirectionRasterAttr:function(t){(t instanceof _||"esri.layers.RasterXLayer"===t.declaredClass)&&(this.inputFlowDirectionRaster=t)},_setInputFlowDirectionRasterLayersAttr:function(t){this.inputFlowDirectionRasterLayers=n.filter(t,(function(t){return t instanceof _||"esri.layers.RasterXLayer"===t.declaredClass})),this._addInputFlowDirectionRasterLayerOptions()},_getInputFlowDirectionRasterLayersAttr:function(){return this.inputFlowDirectionRasterLayers},_setPourPointFieldAttr:function(t){this.pourPointField=t},_getPourPointFieldAttr:function(){return this.pourPointField}});return s("extend-esri")&&i.setObject("dijit.analysis.Watershed",b,L),b}));