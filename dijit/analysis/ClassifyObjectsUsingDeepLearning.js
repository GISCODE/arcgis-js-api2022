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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/has","dojo/dom-class","dojo/dom-style","dojo/string","dojo/dom-construct","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","../../kernel","../../lang","./RasterAnalysisMixin","../RasterFunctionEditor/utils","./utils","./AnalysisRegistry","./ItemTypes","dojo/i18n!../../nls/jsapi","dojo/i18n!./nls/ClassifyObjectsUsingDeepLearning","dojo/text!./templates/ClassifyObjectsUsingDeepLearning.html"],(function(e,t,s,i,a,r,n,l,o,u,d,c,h,y,g,L,f,m,p,_,b,A,j,M){var F=e([u,d,c,h,y,f],{declaredClass:"esri.dijit.analysis.ClassifyObjectsUsingDeepLearning",templateString:M,widgetsInTemplate:!0,browseType:[b.IS],inputLayer:null,model:null,modelArguments:null,featureLayer:null,classLabelField:"ClassLabel",processingMode:!0,toolName:"ClassifyObjectsUsingDeepLearning",helpFileName:"ClassifyObjectsUsingDeepLearning",toolNlsName:A.classifyObjectsUsingDeepLearningTool,rasterGPToolName:"ClassifyObjectsUsingDeepLearning",resultParameter:"outFeatureClass",analysisType:"feature",outputName:"outputFeatureClass",constructor:function(e,t){this._pbConnects=[],e.containerNode&&(this.container=e.containerNode)},postMixInProperties:function(){this.inherited(arguments),t.mixin(this.i18n,j)},_getJobParameters:function(){var e=this.get("featureLayer"),t=e&&e.url&&i.toJson(p.constructAnalysisInputLyrObj(e));return{inputRaster:i.toJson(m.getRasterJsonFromLayer(this.get("inputLayer"))),inputFeatures:t,model:i.toJson(this.get("model")),modelArguments:i.toJson(this.get("modelArguments")),classLabelField:this.get("classLabelField"),processAllRasterItems:this.get("processingMode")}},_setDefaultInputs:function(){var e=0;this.featureLayers&&s.forEach(this.featureLayers,(function(t,s){this._featureLayersSelect.addOption({value:s,label:t.name}),0!==s||this.rerun?this.featureLayer&&t.name===this.featureLayer.name&&t.url===this.featureLayer.url&&(e=s):this.set("featureLayer",t)}),this),this.featureLayer&&e>0&&this._featureLayersSelect.set("value",e),this.classLabelField&&this._classLabelField.set("value",this.classLabelField),this.processingMode&&this._loadProcessingMode()},_resetUI:function(){this.inputLayer&&(this.outputLayerName=l.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name}),this._outputLayerInput.set("value",this.outputLayerName))},addBrowseOption:function(){p.addReadyToUseLayerOption(this,[{disableLAAL:!0,select:this._featureLayersSelect}])},_handleLayerChange:function(e){"browselayers"===e||"browse"===e?(this._isAnalysisSelect=!1,this.defaultItemTypes=[],this.set("allowedItemTypes",[b.FS]),this._createBrowseItems({browseValue:e,disableLAAL:!0,disableBoundary:!0},{},this._featureLayersSelect)):(this.set("featureLayer",this.featureLayers[e]),this.inputLayer&&(this.outputLayerName=l.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name}),this._outputLayerInput.set("value",this.outputLayerName)))},_handleBrowseItemsSelect:function(e,s){e&&e.selection&&p.addAnalysisReadyLayer({item:e.selection,layers:this._isAnalysisSelect?this.inputLayers:this.featureLayers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._featureLayersSelect,browseDialog:this._browseLyrsdlg||this._browsedlg,widget:this},s).always(t.hitch(this,(function(){this._isAnalysisSelect?this._handleAnalysisLayerChange(this._analysisSelect.get("value")):this._handleLayerChange(this._featureLayersSelect.get("value"))})))},_loadProcessingMode:function(){this._processingModeSelect.removeOption(this._processingModeSelect.getOptions());var e=this.processingMode;this._processingModeSelect.addOption([{value:1,label:this.i18n.processAsMosaicLabel,selected:e},{value:2,label:this.i18n.processAsItemsLabel,selected:!e}])},_getFeatureLayerAttr:function(){return this.featureLayer=this.featureLayers[this._featureLayersSelect.get("value")],this.featureLayer},_setFeatureLayerAttr:function(e){this.featureLayer=e},_setFeatureLayersAttr:function(e){this.featureLayers=[{name:" ",value:-1}].concat(e)},_getFeatureLayersAttr:function(){return this.featureLayers},_getModelAttr:function(){return{itemId:this._modelSelect.get("value")}},_setModelAttr:function(e){this.model=e},_setModelsAttr:function(e){this.models=e},_getModelsAttr:function(){return this.models},_setModelArgumentsAttr:function(e){this.modelArguments=e},_getModelArgumentsAttr:function(){var e={};return this.modelArgumentRows&&this.modelArgumentRows.length>0&&s.forEach(this.modelArgumentRows,(function(t){var s=t.firstChild.innerText,i=t.lastChild.firstChild.firstChild.value;e[s]=i})),this.modelArguments=e,e},_getClassLabelFieldAttr:function(){return this.classLabelField=this._classLabelField.get("value"),this.classLabelField},_setClassLabelFieldAttr:function(e){this.classLabelField=e},_getProcessingModeAttr:function(){return this.processingMode=2===this._processingModeSelect.get("value"),this.processingMode},_setProcessingModeAttr:function(e){this.processingMode=e}});return a("extend-esri")&&t.setObject("dijit.analysis.ClassifyObjectsUsingDeepLearning",F,g),F}));