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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/_base/fx","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/fx/easing","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/RadioButton","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","../../kernel","../../lang","./AnalysisBase","./_AnalysisOptions","./AnalysisRegistry","./CreditEstimator","./ItemTypes","./utils","./components/AddMergingAttributes","dojo/i18n!../../nls/jsapi","dojo/text!./templates/MergeLayers.html"],(function(e,t,s,i,r,a,n,o,h,y,l,u,p,m,c,d,L,g,_,b,A,f,T,S,v,w,j,x,I,C,P,N,O,M,B,F,G,E,k,D,J,R){var U=t([L,g,_,b,A,B,M],{declaredClass:"esri.dijit.analysis.MergeLayers",templateString:R,widgetsInTemplate:!0,inputLayer:null,mergeLayers:null,mergingAttributes:null,outputLayerName:null,tableTypes:[E.TABLE,E.BTABLE],stdLayerTypes:[E.FLAYER],bdLayerTypes:[E.BDATAFEATURE,E.BIGDATA],geometryTypes:[F.GeometryTypes.Point,F.GeometryTypes.MultiPoint,F.GeometryTypes.Line,F.GeometryTypes.Polygon],blankOption:{label:" ",value:"",selected:!0},i18n:null,toolName:"MergeLayers",helpFileName:"MergeLayers",resultParameter:"MergedLayer",removeJobParamKeys:["mergeExpressionObject"],constructor:function(e){this._pbConnects=[],e.containerNode&&(this.container=e.containerNode)},destroy:function(){this.inherited(arguments),i.forEach(this._pbConnects,r.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),s.mixin(this.i18n,J.mergeLayers)},postCreate:function(){this.inherited(arguments),c.add(this._form.domNode,"esriSimpleForm"),this._outputLayerInput.set("validator",s.hitch(this,this.validateServiceName)),this.showGeoAnalyticsParams&&this._updateHelpTopicsForGAX(),this.filterObjects=[{layer:"inputLayer",select:this._analysisSelect,expressionObj:"attributeExprObj"},{layer:"mergeLayer",layers:this.mergeLayers,select:this._mergeLayersSelect,expressionObj:"mergeExpressionObject"}],this._buildUI()},startup:function(){},_onClose:function(e){e&&(this._save(),this.emit("save",{save:!0})),this.emit("close",{save:e})},_handleShowCreditsClick:function(e){if(e.preventDefault(),this._form.validate()){var t,i={};t=this.mergeLayers[this._mergeLayersSelect.get("value")],i.inputLayer=a.toJson(this.constructAnalysisInputLyrObj(this.inputLayer)),i.mergeLayer=a.toJson(this.constructAnalysisInputLyrObj(t)),i.mergingAttributes=a.toJson(this._mergingAttributesWidget.get("mergingAttributes")),this.returnFeatureCollection||(i.OutputName=a.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(i.context=a.toJson({extent:this.map.extent._normalize(!0)})),this.getCreditsEstimate(this.toolName,i).then(s.hitch(this,(function(e){this._usageForm.set("content",e),this._usageDialog.show()})))}},_handleSaveBtnClick:function(){if(this._form.validate()){this._saveBtn.set("disabled",!0);var e,t,s={},i={};e=this.mergeLayers[this._mergeLayersSelect.get("value")],s.inputLayer=a.toJson(this.constructAnalysisInputLyrObj(this.inputLayer)),s.mergeLayer=a.toJson(this.constructAnalysisInputLyrObj(e)),s.mergingAttributes=a.toJson(this._mergingAttributesWidget.get("mergingAttributes")),this.returnFeatureCollection||(s.OutputName=a.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),this.showGeoAnalyticsParams&&(this.resultParameter="output"),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(s.context=a.toJson({extent:this.map.extent._normalize(!0)})),this.returnFeatureCollection&&(t={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(t.extent=this.map.extent._normalize(!0)),s.context=a.toJson(t)),i.jobParams=this._updateJobFilterAndSelection(s),i.itemParams={description:this.i18n.itemDescription,tags:y.substitute(this.i18n.itemTags,{layername:this.inputLayer.name}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(i.itemParams.folder=this.get("folderId")),this.showGeoAnalyticsParams&&(i.isSpatioTemporalDataStore=!0),this.execute(i)}},_handleLayerChange:function(e){var t={};this._isAnalysisSelect=!1;var i={browseValue:e,disableLAAL:!0,disabledSubResources:[this.inputLayer,this.mergeLayer]};"browse"===e||"browselayers"===e?this.inputLayer?(s.mixin(t,{layerTypes:this.inputLayer.geometryType?this.showGeoAnalyticsParams?this.bdLayerTypes.concat(this.stdLayerTypes):this.stdLayerTypes:this.tableTypes}),s.mixin(t,this.showGeoAnalyticsParams?{timeTypes:[k.getTimeType(this.inputLayer)]}:{}),s.mixin(t,this.inputLayer.geometryType?{geometryTypes:[this.inputLayer.geometryType]}:{}),this.inputLayer.geometryType===F.GeometryTypes.Point?this._createBrowseItems(i,s.mixin({tags:["point"]},t),this._mergeLayersSelect):this.inputLayer.geometryType===F.GeometryTypes.Line?this._createBrowseItems(i,s.mixin({tags:["line"]},t),this._mergeLayersSelect):this.inputLayer.geometryType===F.GeometryTypes.Polygon?this._createBrowseItems(i,s.mixin({tags:["polygon"]},t),this._mergeLayersSelect):this.showGeoAnalyticsParams&&this._createBrowseItems(i,s.mixin({tags:["polygon"]},t),this._mergeLayersSelect)):(s.mixin(t,{layerTypes:this.showGeoAnalyticsParams?this.bdLayerTypes.concat(this.stdLayerTypes).concat(this.tableTypes):this.stdLayerTypes}),this._createBrowseItems(i,t,this._mergeLayersSelect)):""!==e&&(this._isSameLayer(this.mergeLayers[e],this.inputLayer)?this._updateAnalysisLayerUI(!0):(this.outputLayerName=y.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name,mergelayername:this.mergeLayers[e].name}),this._outputLayerInput.set("value",this.outputLayerName),this.set("mergeLayer",this.mergeLayers[e])))},_save:function(){},_buildUI:function(){var e=!0;this._loadConnections(),k.initHelpLinks(this.domNode,this.showHelp),l.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none"),this.get("showSelectAnalysisLayer")&&(this.inputLayers&&this.inputLayer&&!k.isLayerInLayers(this.inputLayer,this.inputLayers)&&this.inputLayers.push(this.inputLayer),this.get("inputLayer")||!this.get("inputLayers")||this.rerun||this.set("inputLayer",this.inputLayers[0]),k.populateAnalysisLayers(this,"inputLayer","inputLayers")),this.mergeLayers&&this.mergeLayer&&!k.isLayerInLayers(this.mergeLayer,this.mergeLayers)&&this.mergeLayers.push(this.mergeLayer),this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),e=!1),this.inputLayer&&this._updateAnalysisLayerUI(e),this.mergingAttributes&&this._mergingAttributesWidget.loadOptions(this.mergingAttributes),k.addReadyToUseLayerOption(this,[this._analysisSelect,this._mergeLayersSelect]),l.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(s.hitch(this,(function(e){this.folderStore=e,k.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}))),l.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none"),this._createFilterAndSelections()},_updateAnalysisLayerUI:function(e){var t,s,r,a,n,o=[],h=this._mergeLayersSelect.getOptions();this.inputLayer&&(u.set(this._mergeLayersDescription,"innerHTML",y.substitute(this.i18n.mergeLayersDefine,{layername:this.inputLayer.name})),r=k.getTimeType(this.inputLayer),a=-1!==this.tableTypes.indexOf(this.inputLayer.type)?this.tableTypes:this.stdLayerTypes.concat(this.bdLayerTypes),n=this.inputLayer.geometryType),this.mergeLayers&&(t=i.some(h,(function(e){return"browse"===e.value}),this),s=i.some(h,(function(e){return"browselayers"===e.value}),this),this._mergeLayersSelect.removeOption(h),i.forEach(this.mergeLayers,(function(e,t){var s,i=!!this._isSameLayer(e,this.mergeLayer);s=-1!==a.indexOf(e.type)&&e.geometryType===n,this.showGeoAnalyticsParams&&(s=s&&k.getTimeType(e)===r),!this._isSameLayer(e,this.inputLayer)&&s&&o.push({value:t+"",label:e.name,selected:i})}),this),(this.get("showReadyToUseLayers")||this.get("showBrowseLayers")||t||s)&&o.push({type:"separator",value:""}),(0===o.length||this.rerun&&!this.mergeLayer)&&o.push(this.blankOption),this._mergeLayersSelect.addOption(o),k.addBrowseOptionForTool({select:this._mergeLayersSelect,disableLAAL:!0},this),this.rerun||this._mergeLayersSelect.set("value",this._mergeLayersSelect.get("value"))),e&&this._mergeLayersSelect.get("value")>=0&&""!==this._mergeLayersSelect.get("value")&&(this.outputLayerName=y.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name,mergelayername:this.mergeLayers[this._mergeLayersSelect.get("value")].name})),this.outputLayerName&&this._outputLayerInput.set("value",this.outputLayerName)},_handleAnalysisLayerChange:function(e){this._isAnalysisSelect=!0;var t={browseValue:e,disableLAAL:!0,disabledSubResources:[this.inputLayer]};"browse"===e||"browselayers"===e?this._createBrowseItems(t,{layerTypes:this.showGeoAnalyticsParams?this.bdLayerTypes.concat(this.stdLayerTypes).concat(this.tableTypes):this.stdLayerTypes,geometryTypes:this.showGeoAnalyticsParams?this.geometryTypes:[]},this._analysisSelect):(this.set("inputLayer",this.inputLayers[e]),this._updateAnalysisLayerUI(!0))},_handleBrowseItemsSelect:function(e,t){e&&e.selection&&k.addAnalysisReadyLayer({item:e.selection,layers:this._isAnalysisSelect?this.inputLayers:this.mergeLayers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._mergeLayersSelect,browseDialog:e.dialog||this._browsedlg,widget:this},t)},_loadConnections:function(){this.on("start",s.hitch(this,"_onClose",!0)),this._connect(this._closeBtn,"onclick",s.hitch(this,"_onClose",!1))},_setAnalysisGpServerAttr:function(e){e&&(this.analysisGpServer=e,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(e){this.inputLayer=e,this._mergingAttributesWidget.set("inputLayer",e)},_setMergeLayerAttr:function(e){this.mergeLayer=e,this._mergingAttributesWidget.set("mergeLayer",e)},_setInputLayersAttr:function(e){this.inputLayers=e||[],this.showGeoAnalyticsParams||(this.inputLayers=i.filter(e||[],(function(e){return e.type&&"table"!==e.type.toLowerCase()})))},_setMergeLayersAttr:function(e){this.mergeLayers=e||[]},_setDisableRunAnalysisAttr:function(e){this._saveBtn.set("disabled",e)},validateServiceName:function(e){return k.validateServiceName(e,{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})},_connect:function(e,t,s){this._pbConnects.push(r.connect(e,t,s))},_showMessages:function(e){u.set(this._bodyNode,"innerHTML",e),n.fadeIn({node:this._errorMessagePane,easing:d.quadIn,onEnd:s.hitch(this,(function(){l.set(this._errorMessagePane,{display:"block"})}))}).play()},_handleCloseMsg:function(e){e&&e.preventDefault(),n.fadeOut({node:this._errorMessagePane,easing:d.quadOut,onEnd:s.hitch(this,(function(){l.set(this._errorMessagePane,{display:"none"})}))}).play()},_isSameLayer:function(e,t){return e&&t&&(e.name&&t.name&&e.name===t.name||e.url&&t.url&&e.url===t.url)},_updateHelpTopicsForGAX:function(){this._esriHelpMergeLayer.setAttribute("esriHelpTopic","mergeLayer"),this._esriHelpMergingAttributes.setAttribute("esriHelpTopic","mergingAttributes"),this._esriHelpOutputName.setAttribute("esriHelpTopic","outputName")}});return o("extend-esri")&&s.setObject("dijit.analysis.MergeLayers",U,N),U}));