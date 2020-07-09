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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/_base/connect","dojo/has","dojo/dom-class","dojo/dom-style","dojo/string","dojo/dom-construct","dojo/query","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","../../kernel","../../lang","./RasterAnalysisMixin","./utils","./AnalysisRegistry","./ItemTypes","dojo/i18n!../../nls/jsapi","dojo/i18n!./nls/GenerateMultidimensionalAnomaly","dojo/text!./templates/GenerateMultidimensionalAnomaly.html"],(function(e,t,a,i,n,s,r,l,o,c,h,u,d,_,R,M,f,m,E,v,y,g,A,I,N){var L=e([u,d,_,R,M,E],{declaredClass:"esri.dijit.analysis.GenerateMultidimensionalAnomaly",templateString:N,widgetsInTemplate:!0,inputLayers:null,inputLayer:null,variables:null,variableList:null,method:"MEAN",calculationInterval:"ALL",ignoreNoData:!0,toolName:"GenerateMultidimensionalAnomaly",helpFileName:"GenerateMultidimensionalAnomaly",toolNlsName:A.generateMultiDimensionalAnomalyTool,rasterGPToolName:"GenerateMultidimensionalAnomaly",resultParameter:"outputMultidimensionalRaster",browseType:[g.IS],hasCustomCheck:!0,customCheckFailureMessage:A.customCheckFailureMessage.integerService,constructor:function(e,t){this._pbConnects=[],e.containerNode&&(this.container=e.containerNode),e.rerun&&(e.inputMultidimensionalRaster=e.inputLayer)},postMixInProperties:function(){this.inherited(arguments),t.mixin(this.i18n,I)},_getJobParameters:function(){return{inputMultidimensionalRaster:i.toJson(v.constructAnalysisInputLyrObj(this.get("inputLayer"))),variables:this.get("variables"),method:this.get("method"),calculationInterval:this.get("calculationInterval"),ignoreNoData:this.get("ignoreNoData"),referenceMeanRaster:this.get("referenceMeanRaster")&&i.toJson(v.constructAnalysisInputLyrObj(this.get("referenceMeanRaster")))}},_setDefaultInputs:function(){var e=0;this.referenceMeanRasters&&a.forEach(this.referenceMeanRasters,(function(t,a){this._referenceMeanRasterSelect.addOption({value:a,label:t.name}),0!==a||this.rerun?this.referenceMeanRaster&&t.name===this.referenceMeanRaster.name&&t.url===this.referenceMeanRaster.url&&(e=a):this.set("referenceMeanRaster",t)}),this),this.referenceMeanRaster&&e>0&&this._referenceMeanRasterSelect.set("value",e),this.variables&&this._variables.set("value",this.variables),this.method&&this._loadMethod(!0),this.calculationInterval&&this._loadCalculationInterval(!0)},addBrowseOption:function(){v.addReadyToUseLayerOption(this,[{disableLAAL:!0,select:this._referenceMeanRasterSelect}])},_resetUI:function(){this.inputLayer&&(this.outputLayerName=o.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name}),this._outputLayerInput.set("value",this.outputLayerName),this.inputLayer.getMultidimensionalInfo().then(t.hitch(this,(function(e){this.variableList=e.variables,this.set("variables",this.variableList)})))),this._ignoreNoDataCheck.set("checked",this.ignoreNoData)},_loadMethod:function(e){this._methodSelect.removeOption(this._methodSelect.getOptions());var t=e&&this.method;this._methodSelect.addOption([{value:"DIFFERENCE_FROM_MEAN",label:this.i18n.differenceFromMean,selected:"DIFFERENCE_FROM_MEAN"===t},{value:"PERCENT_DIFFERENCE_FROM_MEAN",label:this.i18n.percentDifferenceFromMean,selected:"PERCENT_DIFFERENCE_FROM_MEAN"===t},{value:"PERCENT_OF_MEAN",label:this.i18n.percentOfMean,selected:"PERCENT_OF_MEAN"===t},{value:"Z_SCORE",label:this.i18n.zScore,selected:"Z_SCORE"===t},{value:"DIFFERENCE_FROM_MEDIAN",label:this.i18n.differenceFromMedian,selected:"DIFFERENCE_FROM_MEDIAN"===t},{value:"PERCENT_DIFFERENCE_FROM_MEDIAN",label:this.i18n.percentDifferenceFromMedian,selected:"PERCENT_DIFFERENCE_FROM_MEDIAN"===t},{value:"PERCENT_OF_MEDIAN",label:this.i18n.percentOfMedian,selected:"PERCENT_OF_MEDIAN"===t}])},_loadCalculationInterval:function(e){this._calculationIntervalSelect.removeOption(this._calculationIntervalSelect.getOptions());var t=e&&this.calculationInterval;this._calculationIntervalSelect.addOption([{value:"ALL",label:this.i18n.all,selected:"ALL"===t},{value:"YEARLY",label:this.i18n.yearly,selected:"YEARLY"===t},{value:"RECURRING_MONTHLY",label:this.i18n.recurringMonthly,selected:"RECURRING_MONTHLY"===t},{value:"RECURRING_WEEKLY",label:this.i18n.recurringWeekly,selected:"RECURRING_WEEKLY"===t},{value:"RECURRING_DAILY",label:this.i18n.recurringDaily,selected:"RECURRING_DAILY"===t},{value:"HOURLY",label:this.i18n.hourly,selected:"HOURLY"===t},{value:"EXTERNAL_RASTER",label:this.i18n.externalRaster,selected:"EXTERNAL_RASTER"===t}])},isMultidimensionalLayer:function(e){return e.hasMultidimensions},_handleBrowseItemsSelect:function(e,a){e&&e.selection&&v.addAnalysisReadyLayer({item:e.selection,layers:this._isAnalysisSelect?this.inputLayers:this.referenceMeanRasters,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._referenceMeanRasterSelect,browseDialog:this._browseLyrsdlg||this._browsedlg,widget:this},a).always(t.hitch(this,(function(){this._isAnalysisSelect?this._handleAnalysisLayerChange(this._analysisSelect.get("value")):this._handleReferenceMeanRasterChange(this._referenceMeanRasterSelect.get("value"))})))},_handleCalculationIntervalChange:function(e){h(".referenceMeanRaster",this.domNode).forEach((function(t){l.set(t,"display","EXTERNAL_RASTER"===e?"block":"none")}),this)},_handleReferenceMeanRasterChange:function(e){"browselayers"===e||"browse"===e?(this._isAnalysisSelect=!1,this.defaultItemTypes=[],this.set("allowedItemTypes",[g.IS]),this._createBrowseItems({browseValue:e,disableLAAL:!0,disableBoundary:!0},{},this._referenceMeanRasterSelect)):this.set("referenceMeanRaster",this.referenceMeanRasters[e])},_setInputLayersAttr:function(e){this.inputLayers=a.filter(e,t.hitch(this,(function(e){return this.isMultidimensionalLayer(e)})))},isValidInputLayer:function(e){return this.isMultidimensionalLayer(e)},_getInputLayersAttr:function(){return this.inputLayers},_setVariablesAttr:function(e){var t=" checked";this._variablesList.innerHTML="",a.forEach(e,(function(e){var i,n,s=e.dimensions,r="";s&&s.length>0&&(a.forEach(s,(function(e){var t=e.name+"="+e.values.length+",";r+=t})),r=r.slice(0,-1),i=e.name+" ["+r+"] ("+e.description+")",n=c.toDom("<tr><td colspan='3'><label class='esriLeadingMargin1 esriSelectLabel'><input type='checkbox' data-dojo-type='dijit/form/CheckBox' value="+e.name+t+">"+i+"</label></td></tr>"),c.place(n,this._variablesList),t="")}),this),l.set(this._variablesListLabel,"display",this.variableList.length>0?"block":"none")},_getVariablesAttr:function(){var e=this._variablesList.querySelectorAll("input:checked");if(e&&e.length>0){var t=[];return e.forEach((function(e){t.push(e.value)})),t.join(",")}return""},_setMethodAttr:function(e){this.method=e},_getMethodAttr:function(){return this._methodSelect&&this._methodSelect.get("value")&&(this.method=this._methodSelect.get("value")),this.method},_setCalculationIntervalAttr:function(e){this.calculationInterval=e},_getCalculationIntervalAttr:function(){return this._calculationIntervalSelect&&this._calculationIntervalSelect.get("value")&&(this.calculationInterval=this._calculationIntervalSelect.get("value")),this.calculationInterval},_setIgnoreNoDataAttr:function(e){this.ignoreNoData=e},_getIgnoreNoDataAttr:function(){return this._ignoreNoDataCheck&&(this.ignoreNoData=this._ignoreNoDataCheck.get("checked")),this.ignoreNoData},_setReferenceMeanRastersAttr:function(e){this.referenceMeanRasters=e,this.set("referenceMeanRaster",this.referenceMeanRasters[0])},_getReferenceMeanRastersAttr:function(){return this.referenceMeanRasters},_getReferenceMeanRasterAttr:function(){var e=this._calculationIntervalSelect&&"EXTERNAL_RASTER"===this._calculationIntervalSelect.get("value");return this.referenceMeanRaster=e?this.this.referenceMeanRasters[this._referenceMeanRasterSelect.get("value")]:null,this.referenceMeanRaster},_setReferenceMeanRasterAttr:function(e){this.referenceMeanRaster!==e&&(this.referenceMeanRaster=e)}});return s("extend-esri")&&t.setObject("dijit.analysis.GenerateMultidimensionalAnomaly",L,f),L}));