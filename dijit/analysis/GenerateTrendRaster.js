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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/_base/connect","dojo/has","dojo/dom-class","dojo/dom-style","dojo/string","dojo/dom-construct","dojo/query","dojo/dom-attr","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/CheckBox","dijit/form/Select","../../kernel","../../lang","./RasterAnalysisMixin","./utils","./AnalysisRegistry","./ItemTypes","dojo/i18n!../../nls/jsapi","dojo/i18n!./nls/GenerateTrendRaster","dojo/text!./templates/GenerateTrendRaster.html"],(function(e,t,i,n,s,a,o,l,r,h,c,u,d,_,L,y,m,g,p,f,A,v,S,N,b,T,D,O,R){var P=e([d,_,L,y,m,S],{declaredClass:"esri.dijit.analysis.GenerateTrendRaster",templateString:R,widgetsInTemplate:!0,inputLayers:null,inputLayer:null,dimension:null,dimensions:null,trendLineType:"LINEAR",frequency:1,variables:null,variableList:null,ignoreNoData:!0,cycleLength:1,cycleUnit:"YEARS",rmse:!0,r2:!1,slopePValue:!1,seasonalPeriod:"DAYS",toolName:"GenerateTrendRaster",helpFileName:"GenerateTrendRaster",toolNlsName:D.generateTrendRasterTool,rasterGPToolName:"GenerateTrendRaster",resultParameter:"outputMultidimensionalRaster",browseType:[T.IS],hasCustomCheck:!0,customCheckFailureMessage:D.customCheckFailureMessage.multiDimService,constructor:function(e,t){this._pbConnects=[],e.containerNode&&(this.container=e.containerNode)},postMixInProperties:function(){this.inherited(arguments),t.mixin(this.i18n,O)},_getJobParameters:function(){return{inputMultidimensionalRaster:n.toJson(N.constructAnalysisInputLyrObj(this.get("inputLayer"))),dimension:this.get("dimension"),variables:this.get("variables"),trendLineType:this.get("trendLineType"),cycleLength:this.get("cycleLength"),cycleUnit:this.get("cycleUnit"),frequency:this.get("frequency"),r2:this.get("r2"),rmse:this.get("rmse"),slopePValue:this.get("slopePValue"),ignoreNoData:this.get("ignoreNoData"),seasonalPeriod:this.get("seasonalPeriod")}},_setDefaultInputs:function(){this.dimension&&this.dimensions&&this._dimensionSelect.set("value",this.dimension),this.trendLineType&&this._loadTrendLineType(!0),this.cycleLength&&this._cycleLengthValue.set("value",this.cycleLength),this.cycleUnit&&this._loadCycleUnit(!0),this.frequency&&this._frequencyValue.set("value",this.frequency),this.seasonalPeriod&&this._loadSeasonalPeriod(!0),this._ignoreNoDataCheck.set("checked",this.ignoreNoData),this._r2Check.set("checked",this.r2),this._rmseCheck.set("checked",this.rmse),this._slopePValueCheck.set("checked",this.slopePValue)},_resetUI:function(){this.inputLayer&&this.inputLayer.getMultidimensionalInfo().then(t.hitch(this,(function(e){this.variableList=e.variables,this.set("variableList",this.variableList)})))},_loadTrendLineType:function(e){this._trendLineTypeSelect.removeOption(this._trendLineTypeSelect.getOptions());var t=e&&this.trendLineType;this._trendLineTypeSelect.addOption([{value:"LINEAR",label:this.i18n.linear,selected:"LINEAR"===t},{value:"HARMONIC",label:this.i18n.harmonic,selected:"HARMONIC"===t},{value:"POLYNOMIAL",label:this.i18n.polynomial,selected:"POLYNOMIAL"===t},{value:"MANN-KENDALL",label:this.i18n.mannKendall,selected:"MANN-KENDALL"===t},{value:"SEASONAL-KENDALL",label:this.i18n.seasonalKendall,selected:"SEASONAL-KENDALL"===t}]),this._handleTrendLineTypeChange(this.trendLineType)},_loadCycleUnit:function(e){this._cycleUnitSelect.removeOption(this._cycleUnitSelect.getOptions());var t=e&&this.cycleUnit;this._cycleUnitSelect.addOption([{value:"YEARS",label:this.i18n.years,selected:"YEARS"===t},{value:"DAYS",label:this.i18n.days,selected:"DAYS"===t}])},_loadSeasonalPeriod:function(e){this._seasonalPeriodSelect.removeOption(this._seasonalPeriodSelect.getOptions());var t=e&&this.seasonalPeriod;this._seasonalPeriodSelect.addOption([{value:"DAYS",label:this.i18n.days,selected:"DAYS"===t},{value:"MONTHS",label:this.i18n.months,selected:"MONTHS"===t}])},_handleDimensionChange:function(e){if(this.dimension!==e&&(this.dimension=e,this._updateHarmonicOptions(e),this.variableList)){var t=this.variableList.filter((function(t){return t.dimensions.some((function(t){return t.name===e}))}));this.set("variableList",t)}},_handleTrendLineTypeChange:function(e){this._showDiv(this._frequencyLabelRow,"HARMONIC"===e),this._showDiv(this._cycleLengthLabelRow,"HARMONIC"===e),this._showDiv(this._cycleLengthValueRow,"HARMONIC"===e),this._showDiv(this._cycleUnitLabelRow,"HARMONIC"===e&&"StdTime"===this.get("dimension")),this._showDiv(this._cycleUnitValueRow,"HARMONIC"===e&&"StdTime"===this.get("dimension")),this._showDiv(this._polynomialOrderLabelRow,"POLYNOMIAL"===e),this._showDiv(this._frequencyValueRow,"HARMONIC"===e||"POLYNOMIAL"===e),this._showDiv(this._seasonalPeriodLabelRow,"SEASONAL-KENDALL"===e),this._showDiv(this._seasonalPeriodValueRow,"SEASONAL-KENDALL"===e),"POLYNOMIAL"===e&&this.frequency<2&&this.set("frequency",2),this._showDiv(this._pValue,"POLYNOMIAL"!==e);var t="SEASONAL-KENDALL"===e||"MANN-KENDALL"===e;this._showDiv(this._modelStatisticsLabelRow,!t),this._showDiv(this._modelStatisticsValueRow,!t),u.set(this._ignoreNodataLabel,"innerHTML",t?this.i18n.fiveLabel:this.i18n.sixLabel),u.set(this._outputLayerLabel,"innerHTML",t?this.i18n.sixLabel:this.i18n.sevenLabel),this.trendLineType=e},_updateHarmonicOptions:function(e){"HARMONIC"===this.trendLineType&&(this._showDiv(this._cycleUnitLabelRow,"StdTime"===e),this._showDiv(this._cycleUnitValueRow,"StdTime"===e))},isMultidimensionalLayer:function(e){return e.hasMultidimensions},_showDiv:function(e,t){l.set(e,"display",t?"block":"none")},_setInputLayersAttr:function(e){this.inputLayers=i.filter(e,t.hitch(this,(function(e){return this.isMultidimensionalLayer(e)})))},isValidInputLayer:function(e){return this.isMultidimensionalLayer(e)},_getInputLayersAttr:function(){return this.inputLayers},_setDimensionAttr:function(e){this.dimension=e},_getDimensionAttr:function(){return this._dimensionSelect&&(this.dimension=this._dimensionSelect.get("value")),this.dimension},_setDimensionsAttr:function(e){this.dimensions!==e&&this.inputLayer&&(this._dimensionSelect.removeOption(this._dimensionSelect.getOptions()),i.forEach(e,(function(e){this._dimensionSelect.addOption({value:e.name,label:e.name})}),this),this.dimension?this._dimensionSelect.set("value",this.dimension):(this.dimension=this._dimensionSelect.get("value"),this._dimensionSelect.get("value")))},_getDimensionsAttr:function(){return this.dimensions},_setVariableListAttr:function(e){var t=!1,n=" checked";this._variablesList.innerHTML="",i.forEach(e,(function(e){var s,a,o,l="",r=e.dimensions;r&&r.length>0&&(s=null,i.forEach(r,(function(e){s=e.name+"="+e.values.length+",",l+=s})),l=l.slice(0,-1),a=e.name+" ["+l+"] ("+e.description+")",o=h.toDom("<tr><td colspan='3'><label class='esriLeadingMargin1 esriSelectLabel'><input type='checkbox' data-dojo-type='dijit/form/CheckBox' value='"+e.name+"'"+n+">"+a+"</label></td></tr>"),h.place(o,this._variablesList),n="",t||this.dimensions===r||(this.set("dimensions",r),t=!0))}),this),this._showDiv(this._variablesListLabel,this.variableList.length>0)},_getVariablesAttr:function(){var e=this._variablesList.querySelectorAll("input:checked");if(e&&e.length>0){var t=[];return e.forEach((function(e){t.push(e.value)})),t.join(",")}return""},_setTrendLineTypeAttr:function(e){this.trendLineType=e},_getTrendLineTypeAttr:function(){return this._trendLineTypeSelect&&this._trendLineTypeSelect.get("value")&&(this.trendLineType=this._trendLineTypeSelect.get("value")),this.trendLineType},_setFrequencyAttr:function(e){this.frequency=e,this._frequencyValue.set("value",e)},_getFrequencyAttr:function(){return"LINEAR"===this.trendLineType?null:(this._frequencyValue&&(this.frequency=this._frequencyValue.get("value")),this.frequency)},_setIgnoreNoDataAttr:function(e){this.ignoreNoData=e},_getIgnoreNoDataAttr:function(){return this._ignoreNoDataCheck&&(this.ignoreNoData=this._ignoreNoDataCheck.get("checked")),this.ignoreNoData},_setR2Attr:function(e){this.r2=e},_getR2Attr:function(){return this._r2Check&&(this.r2=this._r2Check.get("checked")),this.r2},_setRmseAttr:function(e){this.rmse=e},_getRmseAttr:function(){return this._rmseCheck&&(this.rmse=this._rmseCheck.get("checked")),this.rmse},_setSlopePValueAttr:function(e){this.slopePValue=e},_getSlopePValueAttr:function(){return this._slopePValueCheck&&(this.slopePValue=this._slopePValueCheck.get("checked")),this.slopePValue},_setCycleUnitAttr:function(e){this.cycleUnit=e},_getCycleUnitAttr:function(){return this.cycleUnitSelect&&(this.cycleUnit=this.cycleUnitSelect.get("value")),this.cycleUnit},_setCycleLengthAttr:function(e){this.cycleLength=e},_getCycleLengthAttr:function(){return this._cycleLengthValue&&(this.cycleLength=this._cycleLengthValue.get("value")),this.cycleLength},_setSeasonalPeriodAttr:function(e){this.seasonalPeriod=e},_getSeasonalPeriodAttr:function(){return this._seasonalPeriodSelect&&(this.seasonalPeriod=this._seasonalPeriodSelect.get("value")),this.seasonalPeriod}});return a("extend-esri")&&t.setObject("dijit.analysis.GenerateTrendRaster",P,A),P}));