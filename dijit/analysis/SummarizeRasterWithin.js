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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/has","dojo/dom-class","dojo/dom-style","dojo/string","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","../../kernel","../../lang","./RasterAnalysisMixin","./utils","./AnalysisRegistry","./ItemTypes","dojo/i18n!../../nls/jsapi","dojo/text!./templates/SummarizeRasterWithin.html"],(function(e,t,i,s,a,l,n,r,u,h,o,y,c,d,p,L,m,v,_,g,T){var S=e([u,h,o,y,c,L],{declaredClass:"esri.dijit.analysis.SummarizeRasterWithin",templateString:T,widgetsInTemplate:!0,inputLayer:null,valueLayer:null,valueLayers:null,zoneField:null,ignoreNoData:!0,statsType:null,toolName:"SummarizeRasterWithin",helpFileName:"SummarizeRasterWithin",toolNlsName:g.summarizeRasterWithinTool,rasterGPToolName:"SummarizeRasterWithin",resultParameter:"outputRaster",browseType:[_.IS,_.FS],hasCustomCheck:!0,customCheckFailureMessage:g.customCheckFailureMessage.integerService,constructor:function(e,t){this._pbConnects=[],e.containerNode&&(this.container=e.containerNode),e.rerun&&(e.inputLayer=e.inputZoneLayer,e.valueLayer=e.inputRasterLayertoSummarize,e.statsType=e.statisticType,e.ignoreNoData=e.ignoreMissingValues)},_getJobParameters:function(){var e=s.toJson(m.constructAnalysisInputLyrObj(this.get("inputLayer"))),t=s.toJson(m.constructAnalysisInputLyrObj(this.get("valueLayer"))),i=this.get("zoneField"),a=this.get("ignoreNoData"),l=this.get("statsType"),n={zoneField:i,ignoreMissingValues:a,statisticType:l,inputZoneLayer:e,inputRasterLayertoSummarize:t,processAsMultidimensional:this._multidimensionalCheck.get("checked")};return"PERCENTILE"===l&&(n.percentileValue=this._percentileValueInput.get("value")||90),n},_setDefaultInputs:function(){var e=0;this.valueLayers&&i.forEach(this.valueLayers,(function(t,i){this._layersSelect.addOption({value:i,label:t.name}),0!==i||this.rerun?this.valueLayer&&t.name===this.valueLayer.name&&t.url===this.valueLayer.url&&(e=i):this.set("valueLayer",t)}),this),this.valueLayer&&e>0&&this._layersSelect.set("value",e),this.zoneField&&this._zoneFieldSelect.set("value",this.zoneField),this.statsType&&this._loadStatsType(!0),this.percentileValue&&this._percentileValueInput.set("value",this.percentileValue),this._multidimensionalCheck.set("checked",this.processAsMultidimensional),this._ignoreNoDataCheck.set("checked",this.ignoreNoData)},_resetUI:function(){this.set("zoneField",this.zoneField),this.inputLayer&&this.valueLayer&&(this.outputLayerName=r.substitute(this.i18n.outputLayerNameFull,{layername:this.inputLayer.name,valuelayername:this.valueLayer.name}),this._outputLayerInput.set("value",this.outputLayerName))},_loadStatsType:function(e){if(this._statsTypeSelect.removeOption(this._statsTypeSelect.getOptions()),this.valueLayer){var t=!1,i=this.valueLayer.pixelType;this.isFloat(this.valueLayer)?!i&&this.rerun&&this.statsType&&["MAJORITY","MEDIAN","MINORITY","VARIETY"].indexOf(this.statsType)>0&&(t=!0):t=!0;var s=e&&this.statsType;t?this._statsTypeSelect.addOption([{value:"MEAN",label:this.i18n.average,selected:"MEAN"===s},{value:"MAJORITY",label:this.i18n.majority,selected:"MAJORITY"===s},{value:"MAXIMUM",label:this.i18n.maximum,selected:"MAXIMUM"===s},{value:"MEDIAN",label:this.i18n.median,selected:"MEDIAN"===s},{value:"MINIMUM",label:this.i18n.minimum,selected:"MINIMUM"===s},{value:"MINORITY",label:this.i18n.minority,selected:"MINORITY"===s},{value:"PERCENTILE",label:this.i18n.percentile,selected:"PERCENTILE"===s},{value:"RANGE",label:this.i18n.range,selected:"RANGE"===s},{value:"STD",label:this.i18n.standardDeviation,selected:"STD"===s},{value:"SUM",label:this.i18n.sum,selected:"SUM"===s},{value:"VARIETY",label:this.i18n.variety,selected:"VARIETY"===s}]):this._statsTypeSelect.addOption([{value:"MEAN",label:this.i18n.average,selected:"MEAN"===s},{value:"MAXIMUM",label:this.i18n.maximum,selected:"MAXIMUM"===s},{value:"MINIMUM",label:this.i18n.minimum,selected:"MINIMUM"===s},{value:"PERCENTILE",label:this.i18n.percentile,selected:"PERCENTILE"===s},{value:"RANGE",label:this.i18n.range,selected:"RANGE"===s},{value:"STD",label:this.i18n.standardDeviation,selected:"STD"===s},{value:"SUM",label:this.i18n.sum,selected:"SUM"===s}]),!0!==this.isIntegerRaster(this.valueLayer)&&this._statsTypeSelect.removeOption({value:"PERCENTILE",label:this.i18n.percentile,selected:"PERCENTILE"===s}),this._handleStatsChange(this._statsTypeSelect.get("value"))}},_handleLayerChange:function(e){"browselayers"===e||"browse"===e?(this._isAnalysisSelect=!1,this.defaultItemTypes=[],this.set("allowedItemTypes",[_.IS]),this._createBrowseItems({browseValue:e,disableLAAL:!0,disableBoundary:!0},{},this._layersSelect)):(this.set("valueLayer",this.valueLayers[e]),this.inputLayer&&this.valueLayer&&(this.outputLayerName=r.substitute(this.i18n.outputLayerNameFull,{layername:this.inputLayer.name,valuelayername:this.valueLayer.name}),this._outputLayerInput.set("value",this.outputLayerName)))},_handleStatsChange:function(e){l.toggle(this._percentileRow1,"hide","PERCENTILE"!==e),l.toggle(this._percentileRow2,"hide","PERCENTILE"!==e)},_handleBrowseItemsSelect:function(e,i){e&&e.selection&&m.addAnalysisReadyLayer({item:e.selection,layers:this._isAnalysisSelect?this.inputLayers:this.valueLayers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._layersSelect,browseDialog:this._browseLyrsdlg||this._browsedlg,widget:this},i).always(t.hitch(this,(function(){this._isAnalysisSelect?this._handleAnalysisLayerChange(this._analysisSelect.get("value")):this._handleLayerChange(this._layersSelect.get("value"))})))},isFloat:function(e){return e.pixelType&&["F32","F64"].indexOf(e.pixelType)>=0},isPixelTypeDefined:function(e){return e.pixelType&&"UNKNOWN"!==e.pixelType},isIntegerRaster:function(e){return this.isPixelTypeDefined(e)&&!1===this.isFloat(e)},isFeatureLayer:function(e){return e.type===_.FLAYER},_setInputLayersAttr:function(e){this.inputLayers=i.filter(e,t.hitch(this,(function(e){return this.isFeatureLayer(e)||!this.isFloat(e)&&this.isPixelTypeDefined(e)})))},isValidInputLayer:function(e){return this.isFeatureLayer(e)||!this.isFloat(e)&&this.isPixelTypeDefined(e)},addBrowseOption:function(){m.addReadyToUseLayerOption(this,[{disableLAAL:!0,select:this._layersSelect}])},_getInputLayersAttr:function(){return this.inputLayers},_getValueLayerAttr:function(){return this.valueLayer=this.valueLayers[this._layersSelect.get("value")],this.valueLayer},_setValueLayerAttr:function(e){this.valueLayer=e,this._loadStatsType()},_setValueLayersAttr:function(e){this.valueLayers=e,this.valueLayer=this.valueLayers[0]},_getValueLayersAttr:function(){return this.valueLayers},_setZoneFieldAttr:function(e){if(this._zoneFieldSelect.removeOption(this._zoneFieldSelect.getOptions()),this.inputLayer){var t;if("esri.layers.ArcGISImageServiceLayer"===this.inputLayer.declaredClass){if(!this.inputLayer.hasRasterAttributeTable)return void this._zoneFieldSelect.addOption({value:"VALUE",label:"VALUE"});t=this.inputLayer._rasterAttributeTableFields}else if(!(t=this.inputLayer.fields))return;i.forEach(t,(function(e){e.type!==v.FieldTypes.Integer&&e.type!==v.FieldTypes.String||this._zoneFieldSelect.addOption({value:e.name,label:p.isDefined(e.alias)&&""!==e.alias?e.alias:e.name})}),this)}},_getZoneFieldAttr:function(){return this._zoneFieldSelect&&this._zoneFieldSelect.get("value")&&(this.zoneField=this._zoneFieldSelect.get("value")),this.zoneField},_setIgnoreNoDataAttr:function(e){this.ignoreNoData=e},_getIgnoreNoDataAttr:function(){return this._ignoreNoDataCheck&&(this.ignoreNoData=this._ignoreNoDataCheck.get("checked")),this.ignoreNoData},_setStatsTypeAttr:function(e){this.statsType=e,this._handleStatsChange(e)},_getStatsTypeAttr:function(){return this._statsTypeSelect&&this._statsTypeSelect.get("value")&&(this.statsType=this._statsTypeSelect.get("value")),this.statsType}});return a("extend-esri")&&t.setObject("dijit.analysis.SummarizeRasterWithin",S,d),S}));