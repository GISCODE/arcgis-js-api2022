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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/dom-class","dojo/dom-style","dojo/dom-attr","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","../../kernel","./RasterAnalysisMixin","./ItemTypes","dojo/i18n!../../nls/jsapi","dojo/text!./templates/MonitorVegetation.html"],(function(e,n,t,i,d,s,a,I,o,h,l,x,u,r,p,b){var _=e([a,I,o,h,l,u],{declaredClass:"esri.dijit.analysis.MonitorVegetationTool",templateString:b,widgetsInTemplate:!0,inputLayer:null,browseType:[r.IS],hasCustomCheck:!0,customCheckFailureMessage:p.customCheckFailureMessage.multiBand,indexType:1,nirBandIndex:1,redBandIndex:2,band3Index:3,band4Index:4,band5Index:5,band6Index:6,store:null,ids:0,toolName:"MonitorVegetation",helpFileName:"MonitorVegetation",toolNlsName:p.monitorVegetationTool,_getRasterFunction:function(){return"BandArithmetic"},_getRasterArguments:function(){var e=this.get("nirBandIndex"),n=this.get("redBandIndex"),t=this.get("indexType"),i=e+" "+n;return 8==t?i=i+" "+this.get("band3Index")+" "+this.get("band4Index")+" "+this.get("band5Index"):7==t?i=i+" "+this.get("band3Index")+" "+this.get("band4Index")+" "+this.get("band5Index")+" "+this.get("band6Index"):2==t?i=i+" "+this._l.get("value"):6==t?i=i+" "+this._a.get("value")+" "+this._b.get("value"):3==t?i=i+" "+this._a.get("value")+" "+this._b.get("value")+" "+this._x.get("value"):9==t&&(i=i+" "+this.get("band3Index")),{Method:t,BandIndexes:i}},_getOutputItemProperties:function(){return this._getDefaultOutputItemProperties(1,"Red to Green","RSP_BilinearInterpolation")},_setDefaultInputs:function(){this._indexTypeInput.addOption([{value:5,label:this.i18n.GEMI},{value:7,label:this.i18n.GVITM},{value:4,label:this.i18n.MSAVI},{value:1,label:this.i18n.NDVI},{value:6,label:this.i18n.PVI},{value:2,label:this.i18n.SAVI},{value:8,label:this.i18n.Sultan},{value:3,label:this.i18n.TSAVI},{value:9,label:this.i18n.VARI}]);var e=this.Method||this.indexType;if(e&&this._indexTypeInput.set("value",e),this.BandIndexes&&"string"==typeof this.BandIndexes){var n=this.BandIndexes.split(" "),t=n.length;t>1&&(this.nirBandIndex=n[0],this.redBandIndex=n[1]),2===e&&t>2?this._l.set("value",n[2]):9===e&&t>2?this.band3Index=n[2]:6===e&&t>3?(this._a.set("value",n[2]),this._b.set("value",n[3])):3===e&&t>4?(this._a.set("value",n[2]),this._b.set("value",n[3]),this._x.set("value",n[4])):8===e&&t>5?(this.band3Index=n[2],this.band4Index=n[3],this.band5Index=n[4]):7===e&&t>6&&(this.band3Index=n[2],this.band4Index=n[3],this.band5Index=n[4],this.band6Index=n[5])}this.nirBandIndex&&this._nirBandIndexInput.set("value",this.nirBandIndex),this.redBandIndex&&this._redBandIndexInput.set("value",this.redBandIndex),this.band3Index&&this._band3IndexInput.set("value",this.band3Index),this.band4Index&&this._band4IndexInput.set("value",this.band4Index),this.band5Index&&this._band5IndexInput.set("value",this.band5Index),this.band6Index&&this._band6IndexInput.set("value",this.band6Index)},_handleIndexTypeChange:function(e){var n=9==e,t=8==e,i=7==e;d.set(this._band3IndexInputRow,"display",n||t||i?"block":"none"),d.set(this._band4IndexInputRow,"display",t||i?"block":"none"),d.set(this._band5IndexInputRow,"display",t||i?"table-cell":"none"),d.set(this._band6IndexInputRow,"display",i?"block":"none"),n?(this._bandIndexesLabel.innerText=this.i18n.rgbBandIndexes,s.set(this._bandIndexesHelpLink,"esriHelpTopic","rgbBandIndexes")):t?(this._bandIndexesLabel.innerText=this.i18n.sultanBandIndexes,s.set(this._bandIndexesHelpLink,"esriHelpTopic","sultanBandIndexes")):i?(this._bandIndexesLabel.innerText=this.i18n.gviBandIndexes,s.set(this._bandIndexesHelpLink,"esriHelpTopic","gviBandIndexes")):(this._bandIndexesLabel.innerText=this.i18n.bandIndexes,s.set(this._bandIndexesHelpLink,"esriHelpTopic","bandIndexes")),d.set(this._soilLine,"display",3==e||6==e?"block":"none"),d.set(this._greenVegetativeCover,"display",2==e?"block":"none"),d.set(this._adjustmentFactor,"display",3==e?"block":"none")},_handleOptionsBtnClick:function(){i.contains(this._optionsDiv,"disabled")||(i.contains(this._optionsDiv,"optionsClose")?(i.remove(this._optionsDiv,"optionsClose"),i.add(this._optionsDiv,"optionsOpen")):i.contains(this._optionsDiv,"optionsOpen")&&(i.remove(this._optionsDiv,"optionsOpen"),i.add(this._optionsDiv,"optionsClose")))},_setIndexTypeAttr:function(e){this.indexType=e},_getIndexTypeAttr:function(){return this._indexTypeInput&&this._indexTypeInput.get("value")&&(this.indexType=this._indexTypeInput.get("value")),this.indexType},_setNirBandIndexAttr:function(e){this.nirBandIndex=e},_getNirBandIndexAttr:function(){return this._nirBandIndexInput&&this._nirBandIndexInput.get("value")&&(this.nirBandIndex=this._nirBandIndexInput.get("value")),this.nirBandIndex},_setRedBandIndexAttr:function(e){this.redBandIndex=e},_getRedBandIndexAttr:function(){return this._redBandIndexInput&&this._redBandIndexInput.get("value")&&(this.redBandIndex=this._redBandIndexInput.get("value")),this.redBandIndex},_setBand3IndexAttr:function(e){this.band3Index=e},_getBand3IndexAttr:function(){return this._band3IndexInput&&this._band3IndexInput.get("value")&&(this.band3Index=this._band3IndexInput.get("value")),this.band3Index},_setBandIndexesAttr:function(e){this.bandIndexes=e},_getBandIndexesAttr:function(){return this._bandIndexesInput&&this._bandIndexesInput.get("value")&&(this.bandIndexes=this._bandIndexesInput.get("value")),this.bandIndexes},isValidInputLayer:function(e){return e.bandCount&&e.bandCount>1}});return t("extend-esri")&&n.setObject("dijit.analysis.MonitorVegetationTool",_,x),_}));