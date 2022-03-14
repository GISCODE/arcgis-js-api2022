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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/NodeList","dojo/NodeList-dom","dojo/on","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/form/RadioButton","dijit/form/DateTextBox","dijit/form/NumberTextBox","dijit/form/TimeTextBox","dijit/Dialog","dijit/InlineEditBox","../../kernel","../../lang","./AnalysisBase","./utils","./CreditEstimator","./_AnalysisOptions","./components/AddSummaryFields","./AnalysisRegistry","dojo/i18n!../../nls/jsapi","dojo/text!./templates/AggregatePoints.html"],(function(t,e,i,s,n,a,o,r,h,l,y,p,u,c,m,g,d,_,L,b,S,f,v,T,w,I,P,A,C,j,R,x,B,k,U,N,F,G,D,M,H,O,E,z,q,J,W){var X=e([_,L,b,S,f,E,M],{declaredClass:"esri.dijit.analysis.AggregatePoints",templateString:W,widgetsInTemplate:!0,pointLayer:null,polygonLayers:null,summaryFields:null,outputLayerName:null,polygonLayer:null,groupByField:null,minorityMajority:!1,percentPoints:!1,distanceDefaultUnits:"Miles",showBinsUIForStandard:!0,i18n:null,toolName:"AggregatePoints",helpFileName:"AggregatePoints",resultParameter:"AggregatedLayer",removeJobParamKeys:["polyExpressionObject"],_afterAnalysisStr:"",_beforeAnalysisStr:"",constructor:function(t){this._pbConnects=[],t.containerNode&&(this.container=t.containerNode)},destroy:function(){this.inherited(arguments),s.forEach(this._pbConnects,n.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),i.mixin(this.i18n,J.aggregatePointsTool),this._beforeAnalysisStr=this.i18n.aggregateDefine.substring(0,this.i18n.aggregateDefine.indexOf("<b>${layername}</b>")),this._afterAnalysisStr=this.i18n.aggregateDefine.substring(this.i18n.aggregateDefine.indexOf("<b>${layername}</b>")+"<b>${layername}</b>".length)},postCreate:function(){this.inherited(arguments),this.filterObjects=[{layer:"pointLayer",select:this._analysisSelect,expressionObj:"attributeExprObj"},{layer:"polygonLayer",layers:this.polygonLayers,select:this._layersSelect,expressionObj:"polyExpressionObject"}],c.add(this._form.domNode,"esriSimpleForm"),this._outputLayerInput.set("validator",i.hitch(this,this.validateServiceName)),this._bigdataUX=[this._choosePolyLblRow,this._timeStepsLabelRow,this._intervalLabelRow,this._intervalRow,this._repeatLabelRow,this._repeatRow,this._timeRefRow,this._timeLabelRow,this._timeStepLabelNo,this._selectDataStore,this._datastoreLabelRow],this.showBinsUIForStandard||this._bigdataUX.concat([this._binTypeRow,this._chooseBinSizeLblRow,this._binsTypeRow]),this._standardUX=[this._keepPolygonsCheckRow,this._groupByLabelRow,this._groupBySelectRow,this._minmajorityRow,this._percentPointsRow,this._groupByLabelNo],this._timeIntervalInput.set("isInRange",i.hitch(this._timeIntervalInput,H.isGreaterThanZero)),this._timeRepeatInput.set("isInRange",i.hitch(this._timeRepeatInput,H.isGreaterThanZero)),this._binsInput.set("isInRange",i.hitch(this._binsInput,H.isGreaterThanZero)),this._timeIntervalInput.set("rangeMessage",this.i18n.greaterThanZeroMsg),this._timeRepeatInput.set("rangeMessage",this.i18n.greaterThanZeroMsg),this._binsInput.set("rangeMessage",this.i18n.greaterThanZeroMsg),this._buildUI()},startup:function(){},_onClose:function(t){t&&(this._save(),this.emit("save",{save:!0})),this.showGeoAnalyticsParams&&(this._hasPCSWarnShown=!1),this.emit("close",{save:t})},_handleSaveBtnClick:function(){if(this._form.validate()){this._saveBtn.set("disabled",!0);var t,e,i,s,n,o={},r={};(t=this.polygonLayers[this._layersSelect.get("value")])&&(i=this.constructAnalysisInputLyrObj(t,this.showGeoAnalyticsParams)),this.showGeoAnalyticsParams||this.showBinsUIForStandard?"polygon"===this.binType?o.polygonLayer=a.toJson(i):(o.binType=this.binType.toUpperCase(),o.binSize=this._binsInput.get("value"),o.binSizeUnit=this._binUnits.get("value")):o.polygonLayer=a.toJson(i),s=this.constructAnalysisInputLyrObj(this.pointLayer,this.showGeoAnalyticsParams),o.pointLayer=a.toJson(s),(n=this._summaryWidget.get("summaryFields")).length>0&&(o.summaryFields=a.toJson(n)),o=this._updateJobFilterAndSelection(o),this.showGeoAnalyticsParams&&this._isTimeInstantLayer&&(this.get("timeReference")&&(o.timeStepReference=this.get("timeReference")),this._timeIntervalInput.get("value")&&(o.timeStepInterval=this._timeIntervalInput.get("value"),o.timeStepIntervalUnit=this._timeIntervalUnits.get("value")),this._timeRepeatInput.get("value")&&(o.timeStepRepeatInterval=this._timeRepeatInput.get("value"),o.timeStepRepeatIntervalUnit=this._timeRepeatUnits.get("value"))),this.returnFeatureCollection||(o.OutputName=a.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),this.showGeoAnalyticsParams||(o.keepBoundariesWithNoPoints=this._keepPolygonsCheck.get("checked"),"0"!==this._groupBySelect.get("value")&&(o.groupByField=this._groupBySelect.get("value"),this.resultParameter=["aggregatedLayer","groupSummary"],o.minorityMajority=this.get("minorityMajority"),o.percentPoints=this.get("percentPoints"))),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(o.context=a.toJson({extent:this.map.extent._normalize(!0)})),this.returnFeatureCollection&&(e={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(e.extent=this.map.extent._normalize(!0)),o.context=a.toJson(e)),!this.showGeoAnalyticsParams||(e={},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(e.extent=this.map.extent._normalize(!0)),o.context=a.toJson(e),H.checkPCSforAnalysis({widget:this,jobParams:o,hasPCSWarnShown:this._hasPCSWarnShown})||this._hasPCSWarnShown)?(r.jobParams=o,r.itemParams={description:h.substitute(this.i18n.itemDescription,{pointlayername:this.pointLayer.name,polygonlayername:t?t.name:this.i18n.bins}),tags:h.substitute(this.i18n.itemTags,{pointlayername:this.pointLayer.name,polygonlayername:t?t.name:this.i18n.bins}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(r.itemParams.folder=this.get("folderId")),this.showGeoAnalyticsParams&&(this.resultParameter="output"),this.showGeoAnalyticsParams&&(r.isSpatioTemporalDataStore=!0),this.execute(r)):this._hasPCSWarnShown=!0}},_handleLayerChange:function(t){this._isAnalysisSelect=!1,"browse"===t||"browselayers"===t?this._createBrowseItems({browseValue:t},{tags:["polygon"],geometryTypes:[q.GeometryTypes.Polygon]},this._layersSelect):this.polygonLayers[t]&&this.pointLayer&&(this.outputLayerName=h.substitute(this.i18n.outputLayerName,{pointlayername:this.pointLayer.name,polygonlayername:this.polygonLayers[t].name}),this._outputLayerInput.set("value",this.outputLayerName))},_handleBrowseItemsSelect:function(t,e){t&&t.selection&&H.addAnalysisReadyLayer({item:t.selection,layers:this._isAnalysisSelect?this.pointLayers:this.polygonLayers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._layersSelect,browseDialog:t.dialog||this._browsedlg,widget:this},e).always(i.hitch(this,this._updateAnalysisLayerUI,!0,!this._isAnalysisSelect))},_handleShowCreditsClick:function(t){t.preventDefault();var e,s,n={};this._form.validate()&&((e=this.polygonLayers[this._layersSelect.get("value")])&&(s=this.constructAnalysisInputLyrObj(e,this.showGeoAnalyticsParams)),this.showGeoAnalyticsParams||this.showBinsUIForStandard?"polygon"===this.binType?n.polygonLayer=a.toJson(s):(n.binType=this.binType.toUpperCase(),n.binSize=this._binsInput.get("value"),n.binSizeUnit=this._binUnits.get("value")):n.polygonLayer=a.toJson(s),n.pointLayer=a.toJson(this.constructAnalysisInputLyrObj(this.pointLayer)),n.summaryFields=a.toJson(this._summaryWidget.get("summaryFields")),this.returnFeatureCollection||(n.OutputName=a.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),n.keepBoundariesWithNoPoints=this._keepPolygonsCheck.get("checked"),"0"!==this._groupBySelect.get("value")&&(n.groupByField=this._groupBySelect.get("value")),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(n.context=a.toJson({extent:this.map.extent._normalize(!0)})),n.binType&&this._pauseCreditLinkClick(this._onCreditsClickHandle,!0),this.getCreditsEstimate(this.toolName,n).then(i.hitch(this,(function(t){this._usageForm.set("content",t),this._usageDialog.show(),n.binType&&this._pauseCreditLinkClick(this._onCreditsClickHandle,!1)}))))},_save:function(){},_buildUI:function(){var t=!0;if(H.updateDisplay(this._standardUX,!this.get("showGeoAnalyticsParams"),"table-row"),H.updateDisplay(this._bigdataUX,this.get("showGeoAnalyticsParams"),"table-row"),H.updateDisplay([this._datastoreLabelRow,this._selectDataStore],!1,"table-row"),this.signInPromise.then(i.hitch(this,H.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer})),this.get("showSelectAnalysisLayer")&&(this.pointLayers&&this.pointLayer&&!H.isLayerInLayers(this.pointLayer,this.pointLayers)&&(this.pointLayers.push(this.pointLayer),this._summaryWidget.set("layer",this.pointLayer)),this.get("pointLayer")||!this.get("pointLayers")||this.rerun||this.set("pointLayer",this.pointLayers[0]),H.populateAnalysisLayers(this,"pointLayer","pointLayers")),this.polygonLayers&&this.polygonLayer&&!H.isLayerInLayers(this.polygonLayer,this.polygonLayers)&&this.polygonLayers.push(this.polygonLayer),this.pointLayer&&y.set(this._aggregateToolDescription,"innerHTML",h.substitute(this.i18n.aggregateDefine,{layername:this.pointLayer.name})),this.polygonLayers){var e=[];this.rerun&&!this.polygonLayer&&H.addBlankOption(this._layersSelect,e),s.forEach(this.polygonLayers,(function(t,i){if(t.geometryType===q.GeometryTypes.Polygon){var s={value:i,label:t.name};this.polygonLayer&&(t.name===this.polygonLayer.name||t.url&&this.polygonLayer.url&&t.url===this.polygonLayer.url)&&(s.selected=!0),e.push(s)}}),this),this._layersSelect.addOption(e)}H.addReadyToUseLayerOption(this,[this._analysisSelect,this._layersSelect]),this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),t=!1),D.isDefined(this.keepBoundariesWithNoPoints)&&this._keepPolygonsCheck.set("checked",this.keepBoundariesWithNoPoints),l.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(i.hitch(this,(function(t){this.folderStore=t,H.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}))),l.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none"),this.set("groupBySelect",this.groupByField||this.GroupByField),l.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none"),this.minorityMajority&&this._minmajorityCheck.set("checked",this.minorityMajority),this._percentPointsCheck.set("checked",this.percentPoints),l.set(this._closeBtn,"display",this.get("showCloseIcon")?"block":"none"),(this.showGeoAnalyticsParams||this.showBinsUIForStandard)&&this.distanceDefaultUnits&&this._binUnits.set("value",this.distanceDefaultUnits),this.showGeoAnalyticsParams?(y.set(this._chooseAggLabel,"innerHTML",this.i18n.aggOption),y.set(this._chooseAggHelp,"esriHelpTopic","inputAggregation"),y.set(this._sumHelp,"esriHelpTopic","summaryFields"),y.set(this._outputHelp,"esriHelpTopic","outputName"),y.set(this._outputNumLabel,"innerHTML",this.i18n.fiveLabel),this.timeStepInterval&&(this._timeIntervalInput.set("value",this.timeStepInterval),this._timeIntervalUnits.set("value",this.timeStepIntervalUnit)),this.timeStepRepeatInterval&&(this._timeRepeatInput.set("value",this.timeStepRepeatInterval),this._timeRepeatUnits.set("value",this.timeStepRepeatIntervalUnit)),this._updateTimeUX()):(y.set(this._chooseAggLabel,"innerHTML",this.i18n.chooseAreaLabel),y.set(this._chooseAggHelp,"esriHelpTopic","polygonLayer"),y.set(this._sumHelp,"esriHelpTopic","SummaryFields"),y.set(this._outputHelp,"esriHelpTopic","OutputLayer"),y.set(this._statsNumLabel,"innerHTML",this.i18n.threeLabel),y.set(this._groupByLabelNo,"innerHTML",this.i18n.fourLabel),y.set(this._outputNumLabel,"innerHTML",this.i18n.fiveLabel)),this._updateAnalysisLayerUI(t),this._loadConnections(),this.summaryFields&&(t=!1,this._summaryWidget.set("summaryFields",this.summaryFields)),(this.showGeoAnalyticsParams||this.showBinsUIForStandard)&&("HEXAGON"===this.binType||"SQUARE"===this.binType?(this.binSize&&this._binsInput.set("value",this.binSize),this.binSizeUnit&&this._binUnits.set("value",this.binSizeUnit),this._handleSumGeomTypeChange(this.binType.toLowerCase())):this._handleSumGeomTypeChange("polygon")),this._createFilterAndSelections()},_loadConnections:function(){this.on("start",i.hitch(this,"_onClose",!0)),this._connect(this._closeBtn,"onclick",i.hitch(this,"_onClose",!1)),(this.showGeoAnalyticsParams||this.showBinsUIForStandard)&&(this._connect(this._polygon,"onclick",i.hitch(this,"_handleSumGeomTypeChange","polygon")),this._connect(this._square,"onclick",i.hitch(this,"_handleSumGeomTypeChange","square")),this._connect(this._hexagon,"onclick",i.hitch(this,"_handleSumGeomTypeChange","hexagon")))},_handleGroupBySelectChange:function(t){var e="0"===t;c.toggle(this._minmajorityLabel,"esriAnalysisTextDisabled",e),c.toggle(this._percentPointsLabel,"esriAnalysisTextDisabled",e),this._percentPointsCheck.set("disabled",e),this._minmajorityCheck.set("disabled",e)},_handleAnalysisLayerChange:function(t){this._isAnalysisSelect=!0,"browse"===t||"browselayers"===t?this._createBrowseItems({browseValue:t,disabledSubResources:[this.get("pointLayer")]},{tags:["point"],geometryTypes:[q.GeometryTypes.Point,q.GeometryTypes.MultiPoint]},this._analysisSelect):(this.set("pointLayer",this.pointLayers[t]),this._updateAnalysisLayerUI(!0))},_updateAnalysisLayerUI:function(t,e){if(this.pointLayer){y.set(this._aggregateToolDescription,"innerHTML",h.substitute(this.i18n.aggregateDefine,{layername:this.pointLayer.name}));var i=this.polygonLayers[this._layersSelect.get("value")];t&&i&&(this.outputLayerName=h.substitute(this.i18n.outputLayerName,{pointlayername:this.pointLayer.name,polygonlayername:i.name}),this._outputLayerInput.set("value",this.outputLayerName)),this.set("groupBySelect",this.groupByField||this.GroupByField),this._updateTimeUX(),(this.showGeoAnalyticsParams||this.showBinsUIForStandard)&&("polygon"===this.binType&&this.pointLayer&&i?(this.outputLayerName=h.substitute(this.i18n.outputLayerName,{pointlayername:this.pointLayer.name,polygonlayername:i.name}),this._outputLayerInput.set("value",this.outputLayerName)):"square"===this.binType&&this.pointLayer?(this.outputLayerName=h.substitute(this.i18n.outputSquareType,{pointlayername:this.pointLayer.name}),this._outputLayerInput.set("value",this.outputLayerName)):"hexagon"===this.binType&&this.pointLayer&&(this.outputLayerName=h.substitute(this.i18n.outputHexType,{pointlayername:this.pointLayer.name}),this._outputLayerInput.set("value",this.outputLayerName)))}},_updateTimeUX:function(){if(this.showGeoAnalyticsParams){this._isTimeInstantLayer=!!this.pointLayer&&H.isTimeInstantLayer(this.pointLayer);var t=new m([this._timeStepsLabelRow,this._intervalLabelRow,this._intervalRow,this._repeatLabelRow,this._repeatRow,this._timeRefRow,this._timeLabelRow,this._timeStepLabelNo]),e=[this._timeIntervalInput,this._timeIntervalUnits,this._timeRepeatInput,this._timeRepeatUnits,this._timeRefDay,this._timeRefTime];s.forEach(e,(function(t){t.set("disabled",!this._isTimeInstantLayer)}),this),t.toggleClass("esriAnalysisTextDisabled",!this._isTimeInstantLayer)}},_handleRefTimeChange:function(t){this._timeRefDay.set("required",t&&!this._timeRefDay.get("value"))},_handleSumGeomTypeChange:function(t){var e,i="polygon"===t,s="square"===t?this.i18n.selectSqBinSizeLbl:"hexagon"===t?this.i18n.selectHexBinSizeLbl:"";c.toggle(this._polygon,"selected",i),c.toggle(this._square,"selected","square"===t),c.toggle(this._hexagon,"selected","hexagon"===t),l.set(this._polygonRow,"display",i?"table-row":"none"),l.set(this._choosePolyLblRow,"display",i?"table-row":"none"),l.set(this._chooseBinSizeLblRow,"display",i?"none":"table-row"),l.set(this._binsTypeRow,"display",i?"none":"table-row"),this._layersSelect.set("required",i),this._binsInput.set("required",!i),this._binUnits.set("required",!i),this.binType=t,i||y.set(this._binSizeLabel,"innerHTML",s),"polygon"===this.binType&&this.pointLayer?(e=this.polygonLayers[this._layersSelect.get("value")]?this.polygonLayers[this._layersSelect.get("value")].name:"",this.outputLayerName=h.substitute(this.i18n.outputLayerName,{pointlayername:this.pointLayer.name,polygonlayername:e}),this._outputLayerInput.set("value",this.outputLayerName)):"square"===this.binType&&this.pointLayer?(this.outputLayerName=h.substitute(this.i18n.outputSquareType,{pointlayername:this.pointLayer.name}),this._outputLayerInput.set("value",this.outputLayerName)):"hexagon"===this.binType&&this.pointLayer&&(this.outputLayerName=h.substitute(this.i18n.outputHexType,{pointlayername:this.pointLayer.name}),this._outputLayerInput.set("value",this.outputLayerName))},_setAnalysisGpServerAttr:function(t){t&&(this.analysisGpServer=t,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setPointLayerAttr:function(t){!D.isDefined(t)||t.geometryType!==q.GeometryTypes.Point&&t.geometryType!==q.GeometryTypes.MultiPoint||(this.pointLayer=t),this._summaryWidget.set("layer",this.get("pointLayer"))},_setPolygonLayersAttr:function(t){this.polygonLayers=t||[]},_setLayersAttr:function(t){this.polygonLayers=[],s.forEach(t,(function(t){t.geometryType===q.GeometryTypes.Polygon?this.polygonLayers.push(t):t.geometryType===q.GeometryTypes.Point&&(this.pointLayer=t)}),this)},_setGroupBySelectAttr:function(t){if(this.pointLayer){var e=this.pointLayer.fields;this._groupBySelect.removeOption(this._groupBySelect.getOptions()),this._groupBySelect.addOption({value:"0",label:this.i18n.attribute}),s.forEach(e,(function(t){-1!==s.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeString","esriFieldTypeDate"],t.type)&&t.name!==this.pointLayer.objectIdField&&this._groupBySelect.addOption({value:t.name,label:D.isDefined(t.alias)&&""!==t.alias?t.alias:t.name})}),this),t&&this._groupBySelect.set("value",t),this._handleGroupBySelectChange(this._groupBySelect.get("value"))}},_setMinorityMajorityAttr:function(t){this.minorityMajority=t},_getMinorityMajorityAttr:function(t){return this._minmajorityCheck&&(this.minorityMajority=this._minmajorityCheck.get("checked")),this.minorityMajority},_setPercentPointsAttr:function(t){this.percentPoints=t},_getPercentPointsAttr:function(t){return this._percentPointsCheck&&(this.percentPoints=this._percentPointsCheck.get("checked")),this.percentPoints},_setDisableRunAnalysisAttr:function(t){this._saveBtn.set("disabled",t)},validateServiceName:function(t){return H.validateServiceName(t,{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})},_setPointLayersAttr:function(t){D.isDefined(t)&&(t=s.filter(t,(function(t,e){return t.geometryType===q.GeometryTypes.Point||t.geometryType===q.GeometryTypes.MultiPoint})),this.pointLayers=t)},_setDistanceDefaultUnitsAttr:function(t){this.distanceDefaultUnits=t},_getDistanceDefaultUnitsAttr:function(){return this.distanceDefaultUnits},_connect:function(t,e,i){this._pbConnects.push(n.connect(t,e,i))},_handleCloseMsg:function(t){t&&t.preventDefault(),H.hideMessages(this._errorMessagePane)}});return o("extend-esri")&&i.setObject("dijit.analysis.AggregatePoints",X,G),X}));