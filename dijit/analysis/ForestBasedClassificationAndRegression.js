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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/_base/fx","dojo/has","dojo/dom-style","dojo/dom-class","dojo/fx/easing","dojo/string","dojo/dom-attr","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/form/Button","dijit/form/CheckBox","dijit/form/RadioButton","dijit/form/Form","dijit/form/Select","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/layout/StackContainer","dijit/form/NumberTextBox","../../kernel","./AnalysisBase","./utils","./_AnalysisOptions","./AnalysisRegistry","./ItemTypes","./AnalysisToolItem","./CreditEstimator","./components/FieldAndCategoricalCheck/FieldAndCategoricalCheck","./components/AddExplanatoryFields/AddExplanatoryFields","dojo/i18n!../../nls/jsapi","dojo/i18n!./nls/ForestBasedClassificationAndRegression","dojo/text!./templates/ForestBasedClassificationAndRegression.html"],(function(e,t,i,s,a,n,o,r,l,h,d,u,c,p,m,_,y,f,g,b,C,T,F,x,S,A,L,v,P,k,I,j,V,O,w,B,N,E,D,M,G){var R=t([p,m,_,y,f,j,k],{declaredClass:"esri.dijit.analysis.ForestBasedClassificationAndRegression",templateString:G,widgetsInTemplate:!0,outputName:"outputTrainedName",inputLayer:"",inputLayers:[],featuresToPredict:"",predictLayers:[],dependentVariable:"",explanatoryVariables:"",explanatoryVariableMatching:"",numberOfTrees:"",minimumLeafSize:"",maximumTreeDepth:"",sampleSize:"",randomVariables:"",percentageForValidation:"",outputLayerName:"",returnProcessInfo:!0,i18n:{},toolName:"ForestBasedClassificationAndRegression",helpFileName:"ForestBasedClassificationAndRegression",resultParameter:["outputTrained"],mlGoals:{train:"Train",trainAndPredict:"TrainAndPredict"},goal:"",allowedLayerTypes:[O.TABLE,O.BTABLE,O.FLAYER,O.BDATAFEATURE],allowedGeometryTypes:[V.GeometryTypes.Point,V.GeometryTypes.Line,V.GeometryTypes.Polygon],removeJobParamKeys:["featureExpresssionObject"],constructor:function(e){this._pbConnects=[],e.containerNode&&(this.container=e.containerNode)},destroy:function(){this.inherited(arguments),s.forEach(this._pbConnects,a.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),i.mixin(this.i18n,D.analysisTools),i.mixin(this.i18n,M)},postCreate:function(){this.inherited(arguments),h.add(this._form.domNode,"esriSimpleForm"),this._outputLayerInput.set("validator",i.hitch(this,this.validateServiceName)),this._buildStack(),this.filterObjects=[{layer:"inFeatures",select:this._analysisSelect,expressionObj:"attributeExprObj"},{layer:"featuresToPredict",select:this._featuresToPredictSelect,expressionObj:"featureExpresssionObject"}],this._buildUI(),this._loadConnections()},startup:function(){this.inherited(arguments)},_getVariablePredictAttr:function(){var e={};return e.fieldName=this._dependentFieldSelect.get("value"),e.categorical=this._dependentFieldCheckBox.get("checked"),e},_getExplanatoryVariablesAttr:function(){return this._fieldAndCategoricalCheckComponent.get("explanatoryVariables")},_getNumberOfTreesAttr:function(){return this._numberOfTreesInput.get("value")},_getMinimumLeafSizeAttr:function(){return this._minimumLeafSizeInput.get("value")},_getMaximumTreeDepthAttr:function(){return this._maximumTreeDepthInput.get("value")},_getSampleSizeAttr:function(){return this._sampleSizeInput.get("value")},_getRandomVariablesAttr:function(){return this._randomVariablesInput.get("value")},_getPercentageForValidationAttr:function(){return this._percentageForValidationInput.get("value")},_getExplanatoryVariableMatchingAttr:function(){return this._addExplanatoryFieldsComponent.get("explanatoryVariableMatching")},_getOutputLayerNameAttr:function(){return this._outputLayerInput.get("value")},_setAnalysisGpServerAttr:function(e){e&&(this.analysisGpServer=e,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setGoalAttr:function(e){var t=this.i18n.forestBasedClassificationAndRegression,i="",s=this._taskPane,a=this.i18n.close;this._isMLGoal(e)&&(i=e,s=this._toolPane,a=this.i18n.back,e===this.mlGoals.train?(t=u.substitute(this.i18n.modifiedTitle,{goal:this.i18n.train}),this._showPredictUI(!1)):(t=u.substitute(this.i18n.modifiedTitle,{goal:this.i18n.trainAndPredict}),this._showPredictUI(!0))),this.goal=i,this._toolTitle.innerHTML=t,this._stackContainer.selectChild(s),c.set(this._closeBtn,"title",a)},_showPredictUI:function(e){e?this._addExplanatoryFieldsComponent.enable():this._addExplanatoryFieldsComponent.disable(),h.toggle(this._featuresToPredictTitle,"hide",!e),h.toggle(this._featuresToPredictWidget,"hide",!e),this._featuresToPredictSelect.set("required",e),h.toggle(this._addExplanatoryFieldsTitle,"hide",!e),this._resultLayerLabel.innerHTML=e?this.i18n.sixLabel:this.i18n.fourLabel},_setInFeaturesAttr:function(e){this.inFeatures=e,this._updateOutputLayerName(),I.addAttributeOptions({selectWidget:this._dependentFieldSelect,layer:e,allowSelectLabel:!1,allowStringType:!0,priorityChange:!1})||this._dependentFieldSelect._setDisplay(""),this._handleDependentFieldChange(this._dependentFieldSelect.get("value")),this._resetForestOptions()},_setInFeaturesLayersAttr:function(e){this.inputLayers=e,this.set("predictLayers",e)},_setVariablePredictAttr:function(e){this.variablePredict=e,this._dependentFieldSelect.set("value",e.fieldName,!1),this._handleDependentFieldChange(this._dependentFieldSelect.get("value")),this._dependentFieldCheckBox.set("checked",e.categorical)},_setExplanatoryVariablesAttr:function(e){this._fieldAndCategoricalCheckComponent.set("explanatoryVariables",e)},_setFeaturesToPredictAttr:function(e){this.featuresToPredict=e,this._addExplanatoryFieldsComponent.set("featuresToPredict",e),this._updateExplanatoryComponent(this._fieldAndCategoricalCheckComponent.get("explanatoryVariablesOptions"))},_setPredictLayersAttr:function(e){this.predictLayers=e},_setNumberOfTreesAttr:function(e){this.numberOfTrees=e,this._numberOfTreesInput.set("value",e)},_setMinimumLeafSizeAttr:function(e){this.minimumLeafSize=e,this._minimumLeafSizeInput.set("value",e)},_setMaximumTreeDepthAttr:function(e){this.maximumTreeDepth=e,this._maximumTreeDepthInput.set("value",e)},_setSampleSizeAttr:function(e){this.sampleSize=e,this._sampleSizeInput.set("value",e)},_setRandomVariablesAttr:function(e){this.randomVariables=e,this._randomVariablesInput.set("value",e)},_setPercentageForValidationAttr:function(e){this.percentageForValidation=e,this._percentageForValidationInput.set("value",e)},_setExplanatoryVariableMatchingAttr:function(e){this._addExplanatoryFieldsComponent.set("explanatoryVariableMatching",e)},_setOutputLayerNameAttr:function(e){this.outputLayerName=e,this._outputLayerInput.set("value",e)},_setDisableRunAnalysisAttr:function(e){this._saveBtn.set("disabled",e)},_loadConnections:function(){this._connect(this._closeBtn,"onclick",i.hitch(this,"_onClose",!1)),this.own(this.on("start",i.hitch(this,"_onClose",!0)),this._goalNode1.on("tool-select",i.hitch(this,this._handleGoalSelect,this.mlGoals[this._goalNode1.helpTopic])),this._goalNode2.on("tool-select",i.hitch(this,this._handleGoalSelect,this.mlGoals[this._goalNode2.helpTopic])),this._fieldAndCategoricalCheckComponent.on("update-parent-tool",i.hitch(this,(function(){var e=this._fieldAndCategoricalCheckComponent.get("explanatoryVariablesOptions");this._updateExplanatoryComponent(e),this._updateRandomVarConstraint(e.length)}))))},_connect:function(e,t,i){this._pbConnects.push(a.connect(e,t,i))},_onClose:function(e){e?(this._save(),this.emit("save",{save:!0}),this.emit("close",{save:e})):this._isMLGoal(this.goal)?this.set("goal",""):""===this.goal&&this.emit("close",{save:e})},_save:function(){},_handleCloseMsg:function(e){e&&e.preventDefault(),o.fadeOut({node:this._errorMessagePane,easing:d.quadOut,onEnd:i.hitch(this,(function(){l.set(this._errorMessagePane,{display:"none"})}))}).play()},_handleGoalSelect:function(e){this.set("goal",e)},_handleAnalysisLayerChange:function(e){this._isAnalysisSelect=!0,"browse"===e||"browselayers"===e?this._createBrowseItems({browseValue:e},{geometryTypes:this.allowedGeometryTypes,layerTypes:this.allowedLayerTypes},this._analysisSelect):this.set("inFeatures",this.inFeaturesLayers[e])},_handleDependentFieldChange:function(e){var t=[],i={};this._dependentFieldSelect.getOptions().forEach((function(e){""===e.value||e.selected?e.selected&&(i=e):t.push(e)})),this._disableDependentFieldCheckBox(i.type===V.PseudoFieldTypes.String),this._fieldAndCategoricalCheckComponent.resetOptions(t),this._addExplanatoryFieldsComponent.removeAllRows()},_handleFeaturesToPredictChange:function(e){this._isAnalysisSelect=!1,"browse"===e||"browselayers"===e?this._createBrowseItems({browseValue:e},{geometryTypes:this.allowedGeometryTypes,layerTypes:this.allowedLayerTypes},this._featuresToPredictSelect):this.set("featuresToPredict",this.predictLayers[e])},_handleBrowseItemsSelect:function(e,t){e&&e.selection&&I.addAnalysisReadyLayer({item:e.selection,layers:this._isAnalysisSelect?this.inFeaturesLayers:this.predictLayers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._featuresToPredictSelect,browseDialog:e.dialog||this._browsedlg,widget:this},t)},validateServiceName:function(e){return I.validateServiceName(e,{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})},_handleOptionsBtnClick:function(){h.contains(this._optionsDiv,"disabled")||(h.contains(this._optionsDiv,"optionsClose")?h.replace(this._optionsDiv,"optionsOpen","optionsClose"):h.contains(this._optionsDiv,"optionsOpen")&&h.replace(this._optionsDiv,"optionsClose","optionsOpen"))},_buildStack:function(){this._stackContainer=new L({doLayout:!1},this._stackDiv),this._stackContainer.addChild(this._taskPane),this._stackContainer.addChild(this._toolPane),this._stackContainer.startup()},_buildUI:function(){I.initHelpLinks(this.domNode,this.showHelp),this._addValidationMessages(),this.get("showSelectAnalysisLayer")&&this._harmonizeLayerSelection(),this.rerun&&this.set("outputLayerName",this.outputTrainedName.serviceProperties.name),I.populateAnalysisLayers(this,"inFeatures","inFeaturesLayers"),this._populatefeaturesToPredictSelect(this.featuresToPredict,this.predictLayers),I.addReadyToUseLayerOption(this,[this._analysisSelect,this._featuresToPredictSelect]),this._linkDependentFieldCheckBoxAndLabel(),setTimeout(i.hitch(this,(function(){this.set("explanatoryVariableMatching",this.explanatoryVariableMatching)})),0),l.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none"),l.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none"),this._createFilterAndSelections()},_populatefeaturesToPredictSelect:function(e,t){var i=[];t.forEach((function(t,s){var a=!!I.isSameLayer(t,e);i.push({value:s.toString(),label:t.name,selected:a})})),I.updateOptions(this._featuresToPredictSelect,i)},_linkDependentFieldCheckBoxAndLabel:function(){c.set(this._dependentFieldCheckBoxLabel,"for",this._dependentFieldCheckBox.id)},_harmonizeLayerSelection:function(){var e=this.get("inFeatures"),t=this.get("inFeaturesLayers"),i=this.get("featuresToPredict"),s=this.get("predictLayers");e&&t&&!I.isLayerInLayers(e,t)&&t.push(e),i&&s&&!I.isLayerInLayers(i,s)&&s.push(i),!e&&t&&this.set("inFeatures",t[0]),!i&&s&&this.set("featuresToPredict",s[0])},_disableDependentFieldCheckBox:function(e){this._dependentFieldCheckBox.set("readOnly",e),this._dependentFieldCheckBox.set("checked",e)},_updateExplanatoryComponent:function(e){this.featuresToPredict&&e.length>0&&this._addExplanatoryFieldsComponent.addRows(e)},_showOptions:function(){h.remove(this._optionsDiv,"optionsClose"),h.add(this._optionsDiv,"optionsOpen")},_addValidationMessages:function(){this._randomVariablesInput.rangeMessage=this.i18n.variableConstraintMsg},_updateRandomVarConstraint:function(e){this._randomVariablesInput.constraints.max=e},_resetForestOptions:function(){this._numberOfTreesInput.set("value",100),this._minimumLeafSizeInput.set("value",""),this._maximumTreeDepthInput.set("value",""),this._sampleSizeInput.set("value",100),this._randomVariablesInput.set("value",""),this._percentageForValidationInput.set("value",10)},_updateOutputLayerName:function(){this.inFeatures&&this.set("outputLayerName",u.substitute(this.i18n.outputLayerName,{inFeaturesName:this.inFeatures.name}))},_buildJobParams:function(){var e,t={},i={};return t={predictionType:this.goal,inFeatures:n.toJson(this.constructAnalysisInputLyrObj(this.inFeatures)),variablePredict:n.toJson(this.get("variablePredict")),explanatoryVariables:n.toJson(this.get("explanatoryVariables")),returnProcessInfo:this.get("returnProcessInfo")},e={numberOfTrees:this.get("numberOfTrees"),minimumLeafSize:this.get("minimumLeafSize"),maximumTreeDepth:this.get("maximumTreeDepth"),sampleSize:this.get("sampleSize"),randomVariables:this.get("randomVariables"),percentageForValidation:this.get("percentageForValidation")},Object.keys(e).forEach((function(i){e[i]&&(t[i]=e[i])})),this.goal===this.mlGoals.trainAndPredict&&(this.resultParameter.push("outputPredicted"),t.featuresToPredict=n.toJson(this.constructAnalysisInputLyrObj(this.featuresToPredict)),t.explanatoryVariableMatching=n.toJson(this.get("explanatoryVariableMatching"))),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(i.extent=this.map.extent._normalize(!0)),this.returnFeatureCollection?i.outSR=this.map.spatialReference:t.outputTrainedName=n.toJson({serviceProperties:{name:this.get("outputLayerName")}}),t.context=n.toJson(i),this._updateJobFilterAndSelection(t)},_buildExecuteObj:function(){var e={};return e.jobParams=this._buildJobParams(),e.itemParams={description:u.substitute(this.i18n.itemDescription,{inFeaturesName:this.inFeatures.name,goal:this.goal}),tags:u.substitute(this.i18n.itemTags,{inFeaturesName:this.inFeatures.name,goal:this.goal}),snippet:u.substitute(this.i18n.itemSnippet,{goal:this.goal})},this.showSelectFolder&&(e.itemParams.folder=this.get("folderId")),this.showGeoAnalyticsParams&&(e.isSpatioTemporalDataStore=!0),e},_handleShowCreditsClick:function(e){},_handleSaveBtnClick:function(){var e;this._form.validate()&&(this.set("disableRunAnalysis",!0),e=this._buildExecuteObj(),this.execute(e))},_isMLGoal:function(e){return e===this.mlGoals.train||e===this.mlGoals.trainAndPredict}});return r("extend-esri")&&i.setObject("dijit.analysis.ForestBasedClassificationAndRegression",R,P),R}));