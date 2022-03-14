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

define(["require","dojo/aspect","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/on","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/Dialog","dojox/form/CheckedMultiSelect","../../kernel","../../lang","./AnalysisBase","./utils","./AnalysisRegistry","./CreditEstimator","./_AnalysisOptions","../CalculateField","./components/AddSummaryFields","./components/TimeBoundarySelect/TimeBoundarySelect","dojo/i18n!../../nls/jsapi","dojo/text!./templates/ReconstructTracks.html"],(function(t,e,i,s,a,n,l,h,r,o,u,d,c,p,y,_,m,S,g,f,k,v,C,x,L,B,F,b,T,E,I,j,O,A,w,D,U,M,P,N,R,G,V,H){var W=i([m,S,g,f,k,P,w],{declaredClass:"esri.dijit.analysis.ReconstructTracks",templateString:H,widgetsInTemplate:!0,inputLayer:null,summaryFields:null,outputLayerName:null,i18n:null,toolName:"ReconstructTracks",helpFileName:"ReconstructTracks",resultParameter:"output",showFirstLastStats:!0,constructor:function(t){this._pbConnects=[],t.containerNode&&(this.container=t.containerNode),t.trackFields&&"string"==typeof t.trackFields&&(t.trackFields=t.trackFields.split(","))},destroy:function(){this.inherited(arguments),a.forEach(this._pbConnects,n.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),s.mixin(this.i18n,V.aggregatePointsTool),s.mixin(this.i18n,V.reconstructTracksTool)},postCreate:function(){this.inherited(arguments),y.add(this._form.domNode,"esriSimpleForm"),u.set(this._trackFieldSelect.selectNode,"width","90%"),this._outputLayerInput.set("validator",s.hitch(this,this.validateServiceName)),this._durSplitValue.set("isInRange",s.hitch(this._durSplitValue,D.isGreaterThanZero)),this._durSplitValue.set("rangeMessage",this.i18n.greaterThanZeroMsg),this.filterObjects=[{layer:"inputLayer",select:this._analysisSelect,expressionObj:"attributeExprObj"}],this._buildUI()},startup:function(){},_onClose:function(t){this._aspectHandle&&(this._aspectHandle.remove(),this._aspectHandle=null),t&&(this._save(),this.emit("save",{save:!0})),this.emit("close",{save:t})},_handleSaveBtnClick:function(){if(this._form.validate()||this._timeBoundarySelect.validate()){this._saveBtn.set("disabled",!0);var t={},e={},i=this.constructAnalysisInputLyrObj(this.inputLayer,!0);t.inputLayer=i,t.trackFields=this._trackFieldSelect.get("value").toString(),t.method=this.get("method"),this._bufFieldOutput.get("value")&&(t.bufferField="= "+this._bufFieldOutput.get("value")),this._splitExprInput.get("value")&&(t.arcadeSplit=this._splitExprInput.get("value")),t.summaryFields=l.toJson(this._summaryWidget.get("summaryFields")),this._timeSplitCheck.get("checked")&&this._durSplitValue.get("value")&&(t.timeSplit=this._durSplitValue.get("value"),t.timeSplitUnit=this._durSplitUnitsSelect.get("value")),this._distSplitCheck.get("checked")&&this._distSplitValue.get("value")&&(t.distanceSplit=this._distSplitValue.get("value"),t.distanceSplitUnit=this._distSplitUnitsSelect.get("value")),this._timeIntervalCheck.get("checked")&&this._timeBoundarySelect.get("timeBoundarySplit")&&(t.timeBoundarySplit=this._timeBoundarySelect.get("timeBoundarySplit"),t.timeBoundarySplitUnit=this._timeBoundarySelect.get("timeBoundarySplitUnit"),this._timeBoundarySelect.get("timeBoundaryReference")&&(t.timeBoundaryReference=this._timeBoundarySelect.get("timeBoundaryReference"),this.timeBoundaryReferenceType=this._timeBoundarySelect.get("timeBoundaryReferenceType"))),(this._timeSplitCheck.get("checked")||this._distSplitCheck.get("checked")||this._arcadeSplitCheck.get("checked"))&&(t.splitBoundaryOption=this._splitBoundarySelect.get("value")),this.returnFeatureCollection||(t.OutputName=l.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(t.context=l.toJson({extent:this.map.extent._normalize(!0)})),e.jobParams=this._updateJobFilterAndSelection(t),e.itemParams={description:o.substitute(this.i18n.itemDescription,{inputLayername:this.inputLayer.name}),tags:o.substitute(this.i18n.itemTags,{inputLayername:this.inputLayer.name}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(e.itemParams.folder=this.get("folderId")),this.showGeoAnalyticsParams&&(e.isSpatioTemporalDataStore=!0),this.execute(e)}},_handleShowCreditsClick:function(t){t.preventDefault();var e={};(this._form.validate()||this._timeBoundarySelect.validate())&&(e.inputLayer=l.toJson(this.constructAnalysisInputLyrObj(this.inputLayer)),e.summaryFields=l.toJson(this._summaryWidget.get("summaryFields")),this.returnFeatureCollection||(e.OutputName=l.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),e.KeepBoundariesWithNoPoints=this._keepPolygonsCheck.get("checked"),"0"!==this._groupBySelect.get("value")&&(e.GroupByField=this._groupBySelect.get("value")),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(e.context=l.toJson({extent:this.map.extent._normalize(!0)})),this.getCreditsEstimate(this.toolName,e).then(s.hitch(this,(function(t){this._usageForm.set("content",t),this._usageDialog.show()}))))},_handleBrowseItemsSelect:function(t,e){t&&t.selection&&D.addAnalysisReadyLayer({item:t.selection,layers:this._isAnalysisSelect?this.inputLayers:this.polygonLayers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._layersSelect,browseDialog:t.dialog||this._browsedlg,widget:this},e).always(s.hitch(this,this._updateAnalysisLayerUI,!0))},_handleDistUnitsChange:function(t){},_handleDurSplitValue:function(t){},_handleRefTimeChange:function(t){this._timeRefDay.set("required",t&&!this._timeRefDay.get("value"))},_handleDistSplitCheckChange:function(t){this._updateOptionalParams(this._distSplitValue,t),this._updateOptionalParams(this._distSplitUnitsSelect,t),this._updateSplitBoundaryTypeUX(this._timeSplitCheck.get("checked")||this._arcadeSplitCheck.get("checked")||t)},_handleTimeSplitCheckChange:function(t){this._updateOptionalParams(this._durSplitValue,t),this._updateOptionalParams(this._durSplitUnitsSelect,t),this._updateSplitBoundaryTypeUX(this._distSplitCheck.get("checked")||this._arcadeSplitCheck.get("checked")||t)},_handleTimeIntervalCheckChange:function(t){this._timeBoundarySelect.set("disabled",!t)},_handleArcadeExprCheckChange:function(t){this._updateOptionalParams(this._splitExprInput,t),this._updateOptionalParams(this._splitExprBtn,t),this._updateSplitBoundaryTypeUX(this._distSplitCheck.get("checked")||this._timeSplitCheck.get("checked")||t)},_updateSplitBoundaryTypeUX:function(t){this._updateOptionalParams(this._splitBoundarySelect,t),t||this._splitBoundarySelect.set("value","Gap"),y.toggle(this._splitTypeLabel,"esriAnalysisTextDisabled",!t)},_updateOptionalParams:function(t,e){t.set("disabled",!e),t.set("required",e)},_save:function(){},_buildUI:function(){var t=!0;D.initHelpLinks(this.domNode,this.showHelp),this.get("showSelectAnalysisLayer")&&(this.inputLayers&&this.inputLayer&&!D.isLayerInLayers(this.inputLayer,this.inputLayers)&&(this.inputLayers.push(this.inputLayer),this._summaryWidget.set("layer",this.inputLayer)),this.get("inputLayer")||!this.get("inputLayers")||this.rerun||this.set("inputLayer",this.inputLayers[0]),D.populateAnalysisLayers(this,"inputLayer","inputLayers")),D.addReadyToUseLayerOption(this,[this._analysisSelect]),this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),t=!1),this.set("method",this.method||U.DistanceMethods.geodesic),this.bufferField&&this._bufFieldOutput.set("value",this.bufferField.substring(this.bufferField.indexOf("=")+1)),this._durSplitUnitsSelect.addOption([{value:"Seconds",label:this.i18n.seconds},{value:"Minutes",label:this.i18n.minutes},{value:"Hours",label:this.i18n.hours},{value:"Days",label:this.i18n.days},{value:"Weeks",label:this.i18n.weeks},{value:"Months",label:this.i18n.months},{value:"Years",label:this.i18n.years}]),this.timeSplitUnit&&this._durSplitUnitsSelect.set("value",this.timeSplitUnit),this.timeSplit&&(this._durSplitValue.set("value",this.timeSplit),this._timeSplitCheck.set("checked",!0)),this.distanceSplitUnit&&this._distSplitUnitsSelect.set("value",this.distanceSplitUnit),this.distanceSplit&&(this._distSplitValue.set("value",this.distanceSplit),this._distSplitCheck.set("checked",!0)),this.timeBoundarySplit&&(this._timeBoundarySelect.set("timeBoundarySplit",this.timeBoundarySplit),this._timeBoundarySelect.set("timeBoundarySplitUnit",this.timeBoundarySplitUnit),this._timeIntervalCheck.set("checked",!0)),this.timeBoundaryReference&&(this._timeBoundarySelect.set("timeBoundaryReferenceType",this.timeBoundaryReferenceType),this._timeBoundarySelect.set("timeBoundaryReference",this.timeBoundaryReference)),this.splitBoundaryOption&&this._splitBoundarySelect.set("value",this.splitBoundaryOption),this.arcadeSplit&&(this._splitExprInput.set("value",this.arcadeSplit),this._arcadeSplitCheck.set("checked",!0)),this._handleDistSplitCheckChange(this._distSplitCheck.get("value")),this._handleTimeSplitCheckChange(this._timeSplitCheck.get("value")),this._handleTimeIntervalCheckChange(this._timeIntervalCheck.get("value")),this._handleArcadeExprCheckChange(this._arcadeSplitCheck.get("value")),this.summaryFields&&(t=!1,this._summaryWidget.set("summaryFields",this.summaryFields)),u.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(s.hitch(this,(function(t){this.folderStore=t,D.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}))),u.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none"),this.set("groupBySelect",this.groupByField),u.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none"),this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),t=!1),this._updateAnalysisLayerUI(t),this._loadConnections(),this._createFilterAndSelections()},_loadConnections:function(){this.on("start",s.hitch(this,"_onClose",!0)),this._connect(this._closeBtn,"onclick",s.hitch(this,"_onClose",!1)),this._connect(this._geodesicType,"onclick",s.hitch(this,this._handleDistanceMethodChange,U.DistanceMethods.geodesic)),this._connect(this._planarType,"onclick",s.hitch(this,this._handleDistanceMethodChange,U.DistanceMethods.planar))},_handleDistanceMethodChange:function(t){this.set("method",t)},_handleAnalysisLayerChange:function(t){this._isAnalysisSelect=!0,"browse"===t||"browselayers"===t?this._createBrowseItems({browseValue:t},{tags:["point","polygon"],geometryTypes:[U.GeometryTypes.Point,U.GeometryTypes.MultiPoint,U.GeometryTypes.Polygon],timeTypes:[U.TimeTypes.Instant]},this._analysisSelect):(this.set("inputLayer",this.inputLayers[t]),this._updateAnalysisLayerUI(!0))},_updateAnalysisLayerUI:function(t){if(this._expBtn.set("disabled",!this.inputLayer),this._bufFieldOutput.set("disabled",!this.inputLayer),this._splitExprBtn.set("disabled",!this.inputLayer),this._splitExprInput.set("disabled",!this.inputLayer),this.inputLayer)if(D.addAttributeOptions({selectWidget:this._trackFieldSelect,layer:this.inputLayer,allowStringType:!0,allowSelectLabel:!1}),!t&&this.trackFields&&this.trackFields.length>0&&this._trackFieldSelect.set("value",this.trackFields),t&&(this.outputLayerName=o.substitute(this.i18n.outputLayerName,{inputLayername:this.inputLayer.name}),this._outputLayerInput.set("value",this.outputLayerName)),this._calcField)this._calcField&&this._calcField.layer!==this.inputLayer&&(this._bufFieldOutput.set("value",""),this._splitExprInput.set("value",""),this._calcField.reset(),this._calcField.set("layer",this.inputLayer));else{var i=D.getExprFunctions();this._calcField=new N({expressionMode:N.MODE_ARCADE,arcadeEditor:this.arcadeEditor,arcadeProfileType:"geoanalyticstrack",map:this.map,layer:this.inputLayer,field:this.i18n.bufField,baseClass:"esriBufFieldExp",helperMethods:i,showHelp:!0,helpUrl:D.getHelpUrl({widget:this,topic:"BufferExpression"}),css:{base:"esriBufFieldExp",addButton:"btn calcite primary",closeButton:"btn calcite cancel"},helperType:"numeric",showHeader:!1,calculateLabel:this.i18n.add,expression:!t&&this.bufferField?this._bufFieldOutput.get("value"):null},this._expressionCtr),this._calcField.startup(),this._calcField.expressionMode===N.MODE_SQL?(u.set(this._calcField._validateBtn.domNode,"display","none"),this._calcField._handleHelperTypeChange("value",null,{functionType:"NumType"}),this._aspectHandle=e.around(this._calcField,"_handleAddButtonClick",s.hitch(this,(function(t){return s.hitch(this,(function(t,e){var i=this._calcField.get("expression")[0];"bufferExpression"===this._expType?this._bufFieldOutput.set("value",i.sqlExpression):"splitExpression"===this._expType&&this._splitExprInput.set("value",i.sqlExpression),this._exprDialog.hide()}))})))):this._calcField.expressionMode===N.MODE_ARCADE&&this._calcField.on("expression-add",s.hitch(this,(function(t){"bufferExpression"===this._expType?this._bufFieldOutput.set("value",t.expression):"splitExpression"===this._expType&&this._splitExprInput.set("value",t.expression)}))),this._calcField.on("close",s.hitch(this,(function(){this._exprDialog.hide()})))}},_handleExpBtnClick:function(t){this._expType=t,this._calcField.set("expression","bufferExpression"===t?this._bufFieldOutput.get("value"):this._splitExprInput.get("value")),this._calcField.reset(),this._exprDialog.show()},_handleBufExpBtnClick:function(){this._handleExpBtnClick("bufferExpression")},_handleSplitExpBtnClick:function(){this._handleExpBtnClick("splitExpression")},_handleCalculateSuccess:function(t){this._dialog.hide()},_setAnalysisGpServerAttr:function(t){t&&(this.analysisGpServer=t,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(t){A.isDefined(t)&&(t.geometryType===U.GeometryTypes.Point||t.geometryType===U.GeometryTypes.Polygon||t.geometryType===U.GeometryTypes.MultiPoint)&&D.isTimeInstantLayer(t)?this.inputLayer=t:this.inputLayer=null,this._summaryWidget.set("layer",this.get("inputLayer"))},_setDisableRunAnalysisAttr:function(t){this._saveBtn.set("disabled",t)},validateServiceName:function(t){return D.validateServiceName(t,{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})},_setInputLayersAttr:function(t){A.isDefined(t)&&(t=a.filter(t,(function(t,e){return-1!==a.indexOf([U.GeometryTypes.Point,U.GeometryTypes.MultiPoint,U.GeometryTypes.Polygon],t.geometryType)&&D.isTimeInstantLayer(t)})),this.inputLayers=t)},_setMethodAttr:function(t){this.method=t,y.toggle(this._geodesicType,"selected",t===U.DistanceMethods.geodesic),y.toggle(this._planarType,"selected",t===U.DistanceMethods.planar)},_connect:function(t,e,i){this._pbConnects.push(n.connect(t,e,i))}});return h("extend-esri")&&s.setObject("dijit.analysis.ReconstructTracks",W,O),W}));