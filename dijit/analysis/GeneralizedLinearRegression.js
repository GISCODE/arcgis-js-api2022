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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/_base/fx","dojo/has","dojo/dom-style","dojo/dom-class","dojo/fx/easing","dojo/string","dojo/dom-attr","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dojox/form/CheckedMultiSelect","dijit/layout/StackContainer","../../kernel","./AnalysisBase","./utils","./_AnalysisOptions","./AnalysisRegistry","./ItemTypes","./AnalysisToolItem","./CreditEstimator","./components/AddExplanatoryFields/AddExplanatoryFields","dojo/i18n!../../nls/jsapi","dojo/i18n!./nls/GeneralizedLinearRegression","dojo/text!./templates/GeneralizedLinearRegression.html"],(function(e,t,i,s,a,n,o,r,l,h,d,c,u,p,y,_,g,m,f,b,L,x,T,S,F,P,C,A,v,j,w,E,G,k,I,N,V,O,R){var M=t([p,y,_,g,m,w,v],{declaredClass:"esri.dijit.analysis.GeneralizedLinearRegression",templateString:R,widgetsInTemplate:!0,inputLayer:"",inputLayers:[],featuresToPredict:"",predictLayers:[],dependentVariable:"",explanatoryVariables:"",regressionFamily:"",explanatoryVariableMatching:"",outputLayerName:"",returnProcessInfo:!0,i18n:{},toolName:"GeneralizedLinearRegression",helpFileName:"GeneralizedLinearRegression",resultParameter:["output"],mlGoals:{fit:"Fit",fitAndPredict:"Fit and Predict"},goal:"",allowedLayerTypes:[G.TABLE,G.BTABLE,G.FLAYER,G.BDATAFEATURE],allowedGeometryTypes:[E.GeometryTypes.Point,E.GeometryTypes.Line,E.GeometryTypes.Polygon],allowedGeometryTags:[E.PseudoGeometryTypes.Point,E.PseudoGeometryTypes.Line,E.PseudoGeometryTypes.Polygon],regressionFamilies:{continuous:"Continuous",binary:"Binary",count:"Count"},removeJobParamKeys:["featureExpresssionObject"],constructor:function(e){this._pbConnects=[],e.containerNode&&(this.container=e.containerNode)},destroy:function(){this.inherited(arguments),s.forEach(this._pbConnects,a.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),i.mixin(this.i18n,V.analysisTools),i.mixin(this.i18n,O)},postCreate:function(){this.inherited(arguments),h.add(this._form.domNode,"esriSimpleForm"),this._outputLayerInput.set("validator",i.hitch(this,this.validateServiceName)),this._buildStack(),this.filterObjects=[{layer:"inputLayer",select:this._analysisSelect,expressionObj:"attributeExprObj"},{layer:"featuresToPredict",select:this._featuresToPredictSelect,expressionObj:"featureExpresssionObject"}],this._buildUI(),this._loadConnections()},startup:function(){this.inherited(arguments)},_getInputLayerAttr:function(){return this.inputLayer},_getDependentVariableAttr:function(){return this._dependentFieldSelect.get("value")},_getRegressionFamilyAttr:function(){return this.regressionFamily},_getExplanatoryVariablesAttr:function(){return this._explanatoryFieldSelect.get("value")},_getFeaturesToPredictAttr:function(){return this.featuresToPredict},_getExplanatoryVariableMatchingAttr:function(){return this._addExplanatoryFieldsComponent.get("explanatoryVariableMatching")},_getOutputLayerNameAttr:function(){return this._outputLayerInput.get("value")},_setAnalysisGpServerAttr:function(e){e&&(this.analysisGpServer=e,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setGoalAttr:function(e){var t=this.i18n.generalizedLinearRegression,i="",s=this._taskPane,a=this.i18n.close;this._isMLGoal(e)&&(i=e,s=this._toolPane,a=this.i18n.back,e===this.mlGoals.fit?(t=c.substitute(this.i18n.modifiedTitle,{goal:this.i18n.fit}),this._showPredictUI(!1)):(t=c.substitute(this.i18n.modifiedTitle,{goal:this.i18n.fitAndPredict}),this._showPredictUI(!0))),this.goal=i,this._toolTitle.innerHTML=t,this._stackContainer.selectChild(s),u.set(this._closeBtn,"title",a)},_showPredictUI:function(e){e?this._addExplanatoryFieldsComponent.enable():this._addExplanatoryFieldsComponent.disable(),h.toggle(this._featuresToPredictTitle,"hide",!e),h.toggle(this._featuresToPredictWidget,"hide",!e),this._featuresToPredictSelect.set("required",e),h.toggle(this._addExplanatoryFieldsTitle,"hide",!e),this._resultLayerLabel.innerHTML=e?this.i18n.sixLabel:this.i18n.fourLabel},_setInputLayerAttr:function(e){this.inputLayer=e,this._updateOutputLayerName(),j.addAttributeOptions({selectWidget:this._dependentFieldSelect,layer:e,allowSelectLabel:!1,priorityChange:!1})||this._dependentFieldSelect._setDisplay(""),this._handleDependentFieldChange(this._dependentFieldSelect.get("value"))},_setInputLayersAttr:function(e){this.inputLayers=e,this.set("predictLayers",e)},_setDependentVariableAttr:function(e){this.dependentVariable=e,this._dependentFieldSelect.set("value",e,!1),this._handleDependentFieldChange(this._dependentFieldSelect.get("value"))},_setRegressionFamilyAttr:function(e){this.regressionFamily=e,h.toggle(this._continuousData,"selected",e===this.regressionFamilies.continuous),h.toggle(this._binaryData,"selected",e===this.regressionFamilies.binary),h.toggle(this._countData,"selected",e===this.regressionFamilies.count)},_setExplanatoryVariablesAttr:function(e){this.explanatoryVariables="string"==typeof e?e.split(","):e,this._explanatoryFieldSelect.set("value",this.explanatoryVariables,!1),this._handleExplanatoryFieldChange(this._explanatoryFieldSelect.get("value"))},_setFeaturesToPredictAttr:function(e){this.featuresToPredict=e,this._addExplanatoryFieldsComponent.set("featuresToPredict",e),this._updateExplanatoryComponent()},_setPredictLayersAttr:function(e){this.predictLayers=e},_updateExplanatoryComponent:function(){if(this.featuresToPredict&&this._explanatoryFieldSelect.get("value")){var e=[];this._explanatoryFieldSelect.getOptions().forEach((function(t){t.selected&&e.push(t)})),this._addExplanatoryFieldsComponent.addRows(e)}},_setExplanatoryVariableMatchingAttr:function(e){this._addExplanatoryFieldsComponent.set("explanatoryVariableMatching",e)},_setOutputLayerNameAttr:function(e){this.outputLayerName=e,this._outputLayerInput.set("value",e)},_setDisableRunAnalysisAttr:function(e){this._saveBtn.set("disabled",e)},_loadConnections:function(){this.on("start",i.hitch(this,"_onClose",!0)),this._connect(this._closeBtn,"onclick",i.hitch(this,"_onClose",!1)),this.own(this._goalNode1.on("tool-select",i.hitch(this,this._handleGoalSelect,this.mlGoals[this._goalNode1.helpTopic])),this._goalNode2.on("tool-select",i.hitch(this,this._handleGoalSelect,this.mlGoals[this._goalNode2.helpTopic]))),this._connect(this._continuousData,"onclick",i.hitch(this,this._handleRegressionClick,this.regressionFamilies.continuous)),this._connect(this._binaryData,"onclick",i.hitch(this,this._handleRegressionClick,this.regressionFamilies.binary)),this._connect(this._countData,"onclick",i.hitch(this,this._handleRegressionClick,this.regressionFamilies.count))},_connect:function(e,t,i){this._pbConnects.push(a.connect(e,t,i))},_onClose:function(e){e?(this._save(),this.emit("save",{save:!0}),this.emit("close",{save:e})):this._isMLGoal(this.goal)?this.set("goal",""):""===this.goal&&this.emit("close",{save:e})},_save:function(){},_handleCloseMsg:function(e){e&&e.preventDefault(),o.fadeOut({node:this._errorMessagePane,easing:d.quadOut,onEnd:i.hitch(this,(function(){l.set(this._errorMessagePane,{display:"none"})}))}).play()},_handleGoalSelect:function(e){this.set("goal",e)},_handleAnalysisLayerChange:function(e){this._isAnalysisSelect=!0,"browse"===e||"browselayers"===e?this._createBrowseItems({browseValue:e},{tags:this.allowedGeometryTags,geometryTypes:this.allowedGeometryTypes,layerTypes:this.allowedLayerTypes},this._analysisSelect):this.set("inputLayer",this.inputLayers[e])},_handleDependentFieldChange:function(e){var t=this._dependentFieldSelect.getOptions().filter((function(t){return""!==t.value&&t.value!==e}));j.updateOptions(this._explanatoryFieldSelect,t),this._addExplanatoryFieldsComponent.removeAllRows()},_handleRegressionClick:function(e){this.set("regressionFamily",e)},_handleExplanatoryFieldChange:function(e){this._updateExplanatoryComponent()},_handleFeaturesToPredictChange:function(e){this._isAnalysisSelect=!1,"browse"===e||"browselayers"===e?this._createBrowseItems({browseValue:e},{tags:this.allowedGeometryTags,geometryTypes:this.allowedGeometryTypes,layerTypes:this.allowedLayerTypes},this._featuresToPredictSelect):this.set("featuresToPredict",this.predictLayers[e])},_handleBrowseItemsSelect:function(e,t){e&&e.selection&&j.addAnalysisReadyLayer({item:e.selection,layers:this._isAnalysisSelect?this.inputLayers:this.predictLayers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._featuresToPredictSelect,browseDialog:e.dialog||this._browsedlg,widget:this},t)},validateServiceName:function(e){return j.validateServiceName(e,{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})},_buildStack:function(){this._stackContainer=new C({doLayout:!1},this._stackDiv),this._stackContainer.addChild(this._taskPane),this._stackContainer.addChild(this._toolPane),this._stackContainer.startup()},_buildUI:function(){j.initHelpLinks(this.domNode,this.showHelp),this.get("showSelectAnalysisLayer")&&this._harmonizeLayerSelection(),this.rerun&&this.set("outputLayerName",this.OutputName.serviceProperties.name),j.populateAnalysisLayers(this,"inputLayer","inputLayers"),this._populatefeatureToPredictSelect(this.featuresToPredict,this.predictLayers),j.addReadyToUseLayerOption(this,[this._analysisSelect,this._featuresToPredictSelect]),this.set("dependentVariable",this.dependentVariable),this.set("regressionFamily",this.regressionFamily||this.regressionFamilies.continuous),this.set("explanatoryVariables",this.explanatoryVariables),setTimeout(i.hitch(this,(function(){this.set("explanatoryVariableMatching",this.explanatoryVariableMatching)})),0),l.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none"),l.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none"),this._createFilterAndSelections()},_populatefeatureToPredictSelect:function(e,t){var i=[];t.forEach((function(t,s){var a=!!j.isSameLayer(t,e);i.push({value:s.toString(),label:t.name,selected:a})})),j.updateOptions(this._featuresToPredictSelect,i)},_harmonizeLayerSelection:function(){var e=this.get("inputLayer"),t=this.get("inputLayers"),i=this.get("featuresToPredict"),s=this.get("predictLayers");e&&t&&!j.isLayerInLayers(e,t)&&t.push(e),i&&s&&!j.isLayerInLayers(i,s)&&s.push(i),!e&&t&&this.set("inputLayer",t[0]),!i&&s&&this.set("featuresToPredict",s[0])},_updateOutputLayerName:function(){this.inputLayer&&this.set("outputLayerName",c.substitute(this.i18n.outputLayerName,{inputLayerName:this.inputLayer.name}))},_updateAnalysisLayerUI:function(){},_buildJobParams:function(){var e={},t={};return e={inputLayer:n.toJson(this.constructAnalysisInputLyrObj(this.inputLayer)),dependentVariable:this.get("dependentVariable"),regressionFamily:this.get("regressionFamily"),explanatoryVariables:this.get("explanatoryVariables").toString(),returnProcessInfo:this.get("returnProcessInfo")},this.goal===this.mlGoals.fitAndPredict&&(this.resultParameter.push("outputPredicted"),e.featuresToPredict=n.toJson(this.constructAnalysisInputLyrObj(this.featuresToPredict)),e.explanatoryVariableMatching=n.toJson(this.get("explanatoryVariableMatching"))),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(t.extent=this.map.extent._normalize(!0)),this.returnFeatureCollection?t.outSR=this.map.spatialReference:e.OutputName=n.toJson({serviceProperties:{name:this.get("outputLayerName")}}),e.context=n.toJson(t),this._updateJobFilterAndSelection(e)},_buildExecuteObj:function(){var e={};return e.jobParams=this._buildJobParams(),e.itemParams={description:c.substitute(this.i18n.itemDescription,{inputLayerName:this.inputLayer.name,goal:this.goal}),tags:c.substitute(this.i18n.itemTags,{inputLayerName:this.inputLayer.name,goal:this.goal}),snippet:c.substitute(this.i18n.itemSnippet,{goal:this.goal})},this.showSelectFolder&&(e.itemParams.folder=this.get("folderId")),this.showGeoAnalyticsParams&&(e.isSpatioTemporalDataStore=!0),e},_handleShowCreditsClick:function(e){},_handleSaveBtnClick:function(){var e;this._form.validate()&&(this.set("disableRunAnalysis",!0),e=this._buildExecuteObj(),this.execute(e))},_isMLGoal:function(e){return e===this.mlGoals.fit||e===this.mlGoals.fitAndPredict}});return r("extend-esri")&&i.setObject("dijit.analysis.GeneralizedLinearRegression",M,A),M}));