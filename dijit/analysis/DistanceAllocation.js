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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["../../kernel","./AnalysisRegistry","./RasterAnalysisMixin","./utils","./ItemTypes","dijit/_FocusMixin","dijit/_OnDijitClickMixin","dijit/_TemplatedMixin","dijit/_WidgetBase","dijit/_WidgetsInTemplateMixin","dijit/form/Form","dijit/form/Select","dijit/form/NumberTextBox","dijit/form/ValidationTextBox","dijit/form/FilteringSelect","dijit/form/CheckBox","dijit/form/Button","dijit/Dialog","dijit/layout/ContentPane","esri/dijit/analysis/CreditEstimator","dojo/_base/array","dojo/_base/declare","dojo/_base/json","dojo/_base/lang","dojo/dom-class","dojo/has","dojo/i18n!./nls/DistanceAllocation","dojo/text!./templates/DistanceAllocation.html"],(function(t,e,i,s,a,r,n,o,u,l,h,c,p,_,R,d,m,g,I,y,S,A,F,v,w,f,C,L){var E=A([u,o,l,n,r,i],{declaredClass:"esri.dijit.analysis.DistanceAllocation",templateString:L,widgetsInTemplate:!0,browseType:[a.IS,a.FS],checkGeometries:[e.GeometryTypes.Point,e.GeometryTypes.Polygon,e.GeometryTypes.MultiPoint,e.GeometryTypes.Line],tags:["point","polygon","line"],intFields:[e.FieldTypes.Integer,e.FieldTypes.Short,e.FieldTypes.Float,e.FieldTypes.Double],map:null,toolName:"DistanceAllocation",helpFileName:"DistanceAllocation",toolNlsName:C,rasterGPToolName:"DistanceAllocation",outputName:"outputDistanceAllocationRasterName",resultParameter:["outputDistanceAllocationRaster","outputDistanceAccumulationRaster","outputBackDirectionRaster","outputSourceDirectionRaster","outputSourceLocationRaster"],secondaryOutputs:["outputDistanceAccumulationRaster","outputBackDirectionRaster","outputSourceDirectionRaster","outputSourceLocationRaster"],secondaryOutputNames:["outputDistanceAccumulationRasterName","outputBackDirectionRasterName","outputSourceDirectionRasterName","outputSourceLocationRasterName"],constructor:function(t,e){this._pbConnects=[],t.containerNode&&(this.container=t.containerNode)},_getJobParameters:function(){var t=s.constructAnalysisInputLyrObj(this.get("inputLayer")),e={inputSourceRasterOrFeatures:F.toJson(t),sourceField:this.sourceField,distanceMethod:this.distanceMethod};if(this.get("inputBarrierRasterOrFeatures")){var i=F.toJson(s.constructAnalysisInputLyrObj(this.get("inputBarrierRasterOrFeatures")));e.inputBarrierRasterOrFeatures=i}if(this.get("inputSurfaceRaster")){var a=F.toJson(s.constructAnalysisInputLyrObj(this.get("inputSurfaceRaster")));e.inputSurfaceRaster=a}if(this.get("inputCostRaster")){var r=F.toJson(s.constructAnalysisInputLyrObj(this.get("inputCostRaster")));e.inputCostRaster=r}if(this.get("inputVerticalRaster")){var n=F.toJson(s.constructAnalysisInputLyrObj(this.get("inputVerticalRaster")));e.inputVerticalRaster=n,e.verticalFactor=this._getVerticalFactor()}if(this.get("inputHorizontalRaster")){var o=F.toJson(s.constructAnalysisInputLyrObj(this.get("inputHorizontalRaster")));e.inputHorizontalRaster=o,e.horizontalFactor=this._getHorizontalFactor()}var u=this._sourceInitialAccumulationFieldSelect.get("value")||this._sourceInitialAccumulationInput.get("value");u&&(e.sourceInitialAccumulation=u);var l=this._sourceMaximumAccumulationFieldSelect.get("value")||this._sourceMaximumAccumulationInput.get("value");l&&(e.sourceMaximumAccumulation=l);var h=this._sourceCostMultiplierFieldSelect.get("value")||this._sourceCostMultiplierInput.get("value");h&&(e.sourceCostMultiplier=h);var c=this._sourceDirectionFieldSelect.get("value")||this._sourceDirectionSelect.get("value");return c&&(e.sourceDirectionField=c),e},_getVerticalFactor:function(){var t=this._verticalFactorSelect.get("value"),e=this._zeroFactorInput.get("value"),i=this._lowCutAngleInput.get("value"),s=this._highCutAngleInput.get("value"),a=this._slopeInput.get("value"),r=this._powerInput.get("value"),n=this._cosPowerInput.get("value"),o=this._secPowerInput.get("value"),u="";switch(t){case"LINEAR":u=["LINEAR",e,i,s,a].join(" ");break;case"INVERSE_LINEAR":u=["INVERSE_LINEAR",e,i,s,a].join(" ");break;case"SYM_LINEAR":u=["SYM_LINEAR",e,i,s,a].join(" ");break;case"SYM_INVERSE_LINEAR":u=["SYM_INVERSE_LINEAR",e,i,s,a].join(" ");break;case"COS":u=["COS",i,s,r].join(" ");break;case"SEC":u=["SEC",i,s,r].join(" ");break;case"COS_SEC":u=["COS_SEC",i,s,n,o].join(" ");break;case"SEC_COS":u=["SEC_COS",i,s,o,n].join(" ");break;case"BINARY":u=["BINARY",e,i,s].join(" ");break;default:u=["BINARY",1,-30,30].join(" ")}return"'"+u+"'"},_getHorizontalFactor:function(){var t=this._horizontalFactorSelect.get("value"),e=this._horizontalZeroFactorInput.get("value"),i=this._sideValueInput.get("value"),s=this._cutAngleInput.get("value"),a=this._horizontalSlopeInput.get("value"),r="";switch(t){case"LINEAR":r=["LINEAR",e,s,a].join(" ");break;case"INVERSE_LINEAR":r=["INVERSE_LINEAR",e,s,a].join(" ");break;case"FORWARD":r=["FORWARD",e,i].join(" ");break;case"BINARY":r=["BINARY",e,s].join(" ");break;default:r=["BINARY",1,45].join(" ")}return"'"+r+"'"},_setDefaultInputs:function(){this.inputCostRaster&&this.inputRasters&&!s.isLayerInLayers(this.inputCostRaster,this.inputRasters)&&this.inputRasters.push(this.inputCostRaster),this.inputBarrierRasterOrFeatures&&this.inputRasters&&!s.isLayerInLayers(this.inputBarrierRasterOrFeatures,this.inputRasters)&&this.inputBarriers.push(this.inputBarrierRasterOrFeatures),this.inputSurfaceRaster&&this.inputRasters&&!s.isLayerInLayers(this.inputSurfaceRaster,this.inputRasters)&&this.inputRasters.push(this.inputSurfaceRaster),this.inputVerticalRaster&&this.inputRasters&&!s.isLayerInLayers(this.inputVerticalRaster,this.inputRasters)&&this.inputRasters.push(this.inputVerticalRaster),this.inputHorizontalRaster&&this.inputRasters&&!s.isLayerInLayers(this.inputHorizontalRaster,this.inputRasters)&&this.inputRasters.push(this.inputHorizontalRaster),this.verticalFactor&&this._setVerticalFactor(this.verticalFactor),this.horizontalFactor&&this._setHorizontalFactor(this.horizontalFactor),this._addSourceFields(),this._addBarrierLayerOptions(),this._addInputRasterLayerOptions(),this._addSourceFactorFields(this.intFields,this._sourceInitialAccumulationFieldSelect,this.sourceInitialAccumulation),this._addSourceFactorFields(this.intFields,this._sourceMaximumAccumulationFieldSelect,this.sourceMaximumAccumulation),this._addSourceFactorFields(this.intFields,this._sourceCostMultiplierFieldSelect,this.sourceCostMultiplier),this._addSourceFactorFields([e.FieldTypes.String],this._sourceDirectionFieldSelect,this.sourceDirection),this._setSourceOptions(),this._outputLayerInput.set("value",this.outputDistanceAllocationRasterName&&this.outputDistanceAllocationRasterName.serviceProperties.name)},_addBarrierLayerOptions:function(){var t=[{label:" ",value:""}];this._inputBarrierRasterOrFeaturesSelect.removeOption(this._inputBarrierRasterOrFeaturesSelect.getOptions()),S.forEach(this.inputBarriers,v.hitch(this,(function(e,i){t.push({label:e.name,value:i.toString(),selected:this._isSelected(e,this.inputBarrierRasterOrFeatures)})}))),this._inputBarrierRasterOrFeaturesSelect.addOption(t),s.addReadyToUseLayerOption(this,[{select:this._inputBarrierRasterOrFeaturesSelect}])},_addInputRasterLayerOptions:function(){this._addRasterLayerOptions(this._inputCostRasterSelect,this.inputCostRaster),this._addRasterLayerOptions(this._inputSurfaceRasterSelect,this.inputSurfaceRaster),this._addRasterLayerOptions(this._inputVerticalRasterSelect,this.inputVerticalRaster),this._addRasterLayerOptions(this._inputHorizontalRasterSelect,this.inputHorizontalRaster),s.addReadyToUseLayerOption(this,[{disableLAAL:!0,select:this._inputCostRasterSelect},{disableLAAL:!0,select:this._inputSurfaceRasterSelect},{disableLAAL:!0,select:this._inputVerticalRasterSelect},{disableLAAL:!0,select:this._inputHorizontalRasterSelect}])},_addRasterLayerOptions:function(t,e){var i=[{label:" ",value:""}];t.removeOption(t.getOptions()),S.forEach(this.inputRasters,v.hitch(this,(function(t,s){i.push({label:t.name,value:s.toString(),selected:this._isSelected(t,e)})}))),t.addOption(i)},_setSourceOptions:function(t){var e=parseInt(this.sourceInitialAccumulation);e?this._sourceInitialAccumulationInput.set("value",e):this._sourceInitialAccumulationFieldSelect.set("value",this.sourceInitialAccumulation),(e=parseInt(this.sourceMaximumAccumulation))?this._sourceMaximumAccumulationInput.set("value",e):this._sourceMaximumAccumulationFieldSelect.set("value",this.sourceMaximumAccumulation),(e=parseInt(this.sourceCostMultiplier))?this._sourceCostMultiplierInput.set("value",e):this._sourceCostMultiplierFieldSelect.set("value",this.sourceCostMultiplier),this._sourceDirectionFieldSelect.set("value",this.sourceDirectionField),this._sourceDirectionSelect.set("value",this.sourceDirectionField)},_addSourceFields:function(){if(this._sourceFieldSelect.removeOption(this._sourceFieldSelect.getOptions()),this._sourceFieldSelect._setDisplay(""),this.inputLayer){var t=this.sourceField?[{alias:this.sourceField,name:this.sourceField,type:e.FieldTypes.Integer}]:[];if(this._isInputLayerImageServiceLayer())this.inputLayer.hasRasterAttributeTable?(t=this.inputLayer._rasterAttributeTableFields)&&0!==t.length||(t=[{alias:"VALUE",name:"VALUE",type:e.FieldTypes.Integer}]):t="VALUE"===this.sourceField?[{alias:"VALUE",name:"VALUE",type:e.FieldTypes.Integer}]:t;else if(!(t=this.inputLayer.fields))return;var i=[{value:"",label:" "}];S.forEach(t,(function(t){t.type!==e.FieldTypes.Integer&&t.type!==e.FieldTypes.Short||i.push({value:t.name,label:t.alias||t.name,selected:t.name===this.sourceField})}),this),this._sourceFieldSelect.addOption(i),this.sourceField=this._sourceFieldSelect.get("value")}},_addSourceFactorFields:function(t,i,s){if(i.removeOption(i.getOptions()),i._setDisplay(""),this.inputLayer){var a=s?[{alias:s,name:s,type:e.FieldTypes.Integer}]:[];if(this._isInputLayerImageServiceLayer())this.inputLayer.hasRasterAttributeTable&&(a=this.inputLayer._rasterAttributeTableFields);else if(!(a=this.inputLayer.fields))return;var r=[{value:"",label:this.i18n.selectField}];S.forEach(a,(function(e){t.indexOf(e.type)>-1&&r.push({value:e.name,label:e.alias||e.name,selected:e.name===s})}),this),i.addOption(r),s=i.get("value")}},_rasterLayerChange:function(t,e,i,s,r){if("browselayers"===t||"browse"===t){switch(this._isAnalysisSelect=!1,this.isRasters=!0,this.rasterSelect=s,r){case"inputCostRaster":this.changeCallBack=this._handleInputCostRasterChange;break;case"inputSurfaceRaster":this.changeCallBack=this._handleInputSurfaceRasterChange;break;case"inputVerticalRaster":this.changeCallBack=this._handleInputVerticalRasterChange;break;case"inputHorizontalRaster":this.changeCallBack=this._handleInputHorizontalRasterChange}this.defaultItemTypes=[],this.set("allowedItemTypes",[a.IS]),this._createBrowseItems({browseValue:t,disableLAAL:!0,disableBoundary:!0,disabledSubResources:[this.inputCostRaster,this.inputSurfaceRaster,this.inputVerticalRaster,this.inputHorizontalRaster]},{},s)}else t>=0&&this.set(r,i[t])},_handleInputBarrierRasterOrFeaturesChange:function(t){"browselayers"===t||"browse"===t?(this._isAnalysisSelect=!1,this.isRasters=!1,this.defaultItemTypes=[],this.set("allowedItemTypes",this.browseType),this._createBrowseItems({browseValue:t,disableLAAL:!0,disableBoundary:!0,disabledSubResources:[this.inputLayer,this.inputBarrierRasterOrFeatures]},{geometryTypes:this.checkGeometries,tags:this.tags},this._inputBarrierRasterOrFeaturesSelect)):t>=0&&this.set("inputBarrierRasterOrFeatures",this.inputBarriers[t])},_handleInputCostRasterChange:function(t){this._rasterLayerChange(t,this.inputCostRaster,this.inputRasters,this._inputCostRasterSelect,"inputCostRaster")},_handleInputSurfaceRasterChange:function(t){this._rasterLayerChange(t,this.inputSurfaceRaster,this.inputRasters,this._inputSurfaceRasterSelect,"inputSurfaceRaster")},_handleInputVerticalRasterChange:function(t){this._rasterLayerChange(t,this.inputVerticalRaster,this.inputRasters,this._inputVerticalRasterSelect,"inputVerticalRaster"),this.inputVerticalRaster&&this._setVerticalFactor("")},_handleInputHorizontalRasterChange:function(t){this._rasterLayerChange(t,this.inputHorizontalRaster,this.inputRasters,this._inputHorizontalRasterSelect,"InputHorizontalRaster"),this.inputHorizontalRaster&&this._setHorizontalFactor("")},_handleVerticalFactorChange:function(t){void 0!==this.verticalFactor&&-1!==this.verticalFactor.indexOf(t)||this._setVerticalFactor("'"+t+"'")},_handleHorizontalFactorChange:function(t){void 0!==this.horizontalFactor&&-1!==this.horizontalFactor.indexOf(t)||this._setHorizontalFactor("'"+t+"'")},_handleSourceFieldChange:function(t){this.set("sourceField",t)},_handleBrowseItemsSelect:function(t,e){t&&t.selection&&s.addAnalysisReadyLayer({item:t.selection,layers:this._isAnalysisSelect?this.inputLayers:this.isRasters?this.inputRasters:this.inputBarriers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this.isRasters?this.rasterSelect:this._inputBarrierRasterOrFeaturesSelect,browseDialog:this._browseLyrsdlg||this._browsedlg,widget:this},e).always(v.hitch(this,(function(){this._isAnalysisSelect?this._handleAnalysisLayerChange(this._analysisSelect.get("value")):this.isRasters?this.changeCallBack(this.rasterSelect.get("value")):this._handleInputBarrierRasterOrFeaturesChange(this._inputBarrierRasterOrFeaturesSelect.get("value"))})))},_resetUI:function(){this._addSourceFields(),this._addSourceFactorFields(this.intFields,this._sourceInitialAccumulationFieldSelect,this.sourceInitialAccumulation),this._addSourceFactorFields(this.intFields,this._sourceMaximumAccumulationFieldSelect,this.sourceMaximumAccumulation),this._addSourceFactorFields(this.intFields,this._sourceCostMultiplierFieldSelect,this.sourceCostMultiplier),this._addSourceFactorFields([e.FieldTypes.String],this._sourceDirectionFieldSelect,this.sourceDirection)},_isSelected:function(t,e){return e&&t&&e.url===t.url&&t.name===e.name},_handleOptionsBtnClick:function(){w.contains(this._optionsDiv,"disabled")||(w.contains(this._optionsDiv,"optionsClose")?(w.remove(this._optionsDiv,"optionsClose"),w.add(this._optionsDiv,"optionsOpen")):w.contains(this._optionsDiv,"optionsOpen")&&(w.remove(this._optionsDiv,"optionsOpen"),w.add(this._optionsDiv,"optionsClose")))},_handleSourceInitialAccumulationChange:function(t){this._sourceInitialAccumulationInput.isValid()&&(this.sourceInitialAccumulation=t)},_sourceInitialAccumulationFieldChange:function(t){this.sourceInitialAccumulationField=t},_handleSourceMaximumAccumulationChange:function(t){this._sourceMaximumAccumulationInput.isValid()&&(this.sourceMaximumAccumulation=t)},_sourceMaximumAccumulationFieldChange:function(t){this._sourceMaximumAccumulationField=t},_sourceDirectionChange:function(t){this.sourceDirection=t},_sourceDirectionFieldChange:function(t){this._sourceDirectionField=t},_handleSourceCostMultiplierChange:function(t){this._sourceCostMultiplier=t},_sourceCostMultiplierFieldChange:function(t){this._sourceCostMultiplierField=t},_handleDistanceMethodChange:function(t){this.distanceMethod=t},_hideElement:function(t){w.remove(t,"show"),w.add(t,"hide")},_showElement:function(t){w.remove(t,"hide"),w.add(t,"show")},_setVerticalFactor:function(t){var e=t.substring(1,t.length-1).split(" "),i=e[0];switch(this._hideElement(this._lowCutAngleRow),this._hideElement(this._highCutAngleRow),this._hideElement(this._cosPowerRow),this._hideElement(this._secPowerRow),this._hideElement(this._slopeRow),this._hideElement(this._zeroFactorRow),this._hideElement(this._powerRow),this._hideElement(this._verticalFactorRow),this._hideElement(this._verticalFactorSelectRow),this._showElement(this._verticalFactorRow),this._showElement(this._verticalFactorSelectRow),this._verticalFactorSelect.set("value",i||"BINARY"),i){case"LINEAR":case"SYM_LINEAR":this._showElement(this._zeroFactorRow),this._showElement(this._lowCutAngleRow),this._showElement(this._highCutAngleRow),this._showElement(this._slopeRow),this._zeroFactorInput.set("value",e[1]||1),this._lowCutAngleInput.set("value",e[2]||-90),this._highCutAngleInput.set("value",e[3]||90),this._slopeInput.set("value",e[4]||.01111);break;case"INVERSE_LINEAR":case"SYM_INVERSE_LINEAR":this._showElement(this._zeroFactorRow),this._showElement(this._lowCutAngleRow),this._showElement(this._highCutAngleRow),this._showElement(this._slopeRow),this._zeroFactorInput.set("value",e[1]||1),this._lowCutAngleInput.set("value",e[2]||-45),this._highCutAngleInput.set("value",e[3]||45),this._slopeInput.set("value",e[4]||-.0222);break;case"COS":case"SEC":this._showElement(this._lowCutAngleRow),this._showElement(this._highCutAngleRow),this._showElement(this._powerRow),this._lowCutAngleInput.set("value",e[1]||-90),this._highCutAngleInput.set("value",e[2]||90),this._powerInput.set("value",e[3]||1);break;case"COS_SEC":this._showElement(this._lowCutAngleRow),this._showElement(this._highCutAngleRow),this._showElement(this._cosPowerRow),this._showElement(this._secPowerRow),this._lowCutAngleInput.set("value",e[1]||-90),this._highCutAngleInput.set("value",e[2]||90),this._cosPowerInput.set("value",e[3]||1),this._secPowerInput.set("value",e[4]||1);break;case"SEC_COS":this._showElement(this._lowCutAngleRow),this._showElement(this._highCutAngleRow),this._showElement(this._cosPowerRow),this._showElement(this._secPowerRow),this._lowCutAngleInput.set("value",e[1]||-90),this._highCutAngleInput.set("value",e[2]||90),this._secPowerInput.set("value",e[3]||1),this._cosPowerInput.set("value",e[4]||1);break;case"BINARY":default:this._showElement(this._zeroFactorRow),this._showElement(this._lowCutAngleRow),this._showElement(this._highCutAngleRow),this._zeroFactorInput.set("value",e[1]||1),this._lowCutAngleInput.set("value",e[2]||30),this._highCutAngleInput.set("value",e[3]||-30)}},_setHorizontalFactor:function(t){var e=t.substring(1,t.length-1).split(" "),i=e[0];switch(this._hideElement(this._horizontalSlopeRow),this._hideElement(this._cutAngleRow),this._hideElement(this._horizontalZeroFactorRow),this._hideElement(this._sideValueRow),this._hideElement(this._horizontalFactorRow),this._hideElement(this._horizontalFactorSelectRow),this._showElement(this._horizontalFactorSelectRow),this._showElement(this._horizontalFactorRow),this._horizontalFactorSelect.set("value",i||"BINARY"),i){case"LINEAR":this._showElement(this._horizontalSlopeRow),this._showElement(this._cutAngleRow),this._showElement(this._horizontalZeroFactorRow),this._horizontalZeroFactorInput.set("value",e[1]||.5),this._cutAngleInput.set("value",e[2]||181),this._horizontalSlopeInput.set("value",e[3]||.01111);break;case"INVERSE_LINEAR":this._showElement(this._horizontalSlopeRow),this._showElement(this._cutAngleRow),this._showElement(this._horizontalZeroFactorRow),this._horizontalZeroFactorInput.set("value",e[1]||2),this._cutAngleInput.set("value",e[2]||180),this._horizontalSlopeInput.set("value",e[3]||-.01111);break;case"FORWARD":this._showElement(this._sideValueRow),this._showElement(this._horizontalZeroFactorRow),this._horizontalZeroFactorInput.set("value",e[1]||.5),this._sideValueInput.set("value",e[2]||1);break;case"BINARY":default:this._showElement(this._cutAngleRow),this._showElement(this._horizontalZeroFactorRow),this._horizontalZeroFactorInput.set("value",e[1]||1),this._cutAngleInput.set("value",e[2]||45)}},_setInputLayerAttr:function(t){t&&(t.geometryType===e.GeometryTypes.Point||t.geometryType===e.GeometryTypes.Line||t.geometryType===e.GeometryTypes.Polygon||this.isImageServiceLayer(t))&&(this.inputLayer=t)},_getInputLayerAttr:function(){return this.inputLayer},_setInputBarrierRasterOrFeaturesAttr:function(t){t&&(t.geometryType===e.GeometryTypes.Point||t.geometryType===e.GeometryTypes.Line||t.geometryType===e.GeometryTypes.Polygon||this.isImageServiceLayer(t))&&(this.inputBarrierRasterOrFeatures=t)},_getInputBarrierRasterOrFeaturesAttr:function(){return this.inputBarrierRasterOrFeatures},_setInputDestinationRasterOrFeaturesAttr:function(t){this.inputDestinationRasterOrFeatures=t,this._isSelected(t,this.inputLayer)&&this._resetUI()},_getInputDestinationRasterOrFeaturesAttr:function(){return this.inputDestinationRasterOrFeatures},_setInputLayersAttr:function(t){this.inputLayers=S.filter(t,(function(t){return t&&(t.geometryType===e.GeometryTypes.Point||t.geometryType===e.GeometryTypes.Line||t.geometryType===e.GeometryTypes.Polygon||this.isImageServiceLayer(t))}),this),this.set("inputRasters",t),this.set("inputBarriers",t)},_getInputLayersAttr:function(t){return this.inputLayers},setInputBarriersAttr:function(t){this.inputBarriers=S.filter(t,(function(t){return t&&(t.geometryType===e.GeometryTypes.Point||t.geometryType===e.GeometryTypes.Line||t.geometryType===e.GeometryTypes.Polygon||this.isImageServiceLayer(t))}),this)},_getInputBarriersAttr:function(t){return this.inputBarriers},_getInputCostRasterAttr:function(){return this.inputCostRaster},_setInputCostRasterAttr:function(t){this.isImageServiceLayer(t)&&(this.inputCostRaster=t)},_getInputRastersAttr:function(){return this.inputRasters},_setInputRastersAttr:function(t){this.inputRasters=S.filter(t,(function(t){return this.isImageServiceLayer(t)}),this)},_getInputSurfaceRasterAttr:function(){return this.inputSurfaceRaster},_setInputSurfaceRasterAttr:function(t){this.isImageServiceLayer(t)&&(this.inputSurfaceRaster=t)},_getInputVerticalRasterAttr:function(){return this.inputVerticalRaster},_setInputVerticalRasterAttr:function(t){this.isImageServiceLayer(t)&&(this.inputVerticalRaster=t)},_getInputHorizontalRasterAttr:function(){return this.inputHorizontalRaster},_setInputHorizontalRasterAttr:function(t){this.isImageServiceLayer(t)&&(this.inputHorizontalRaster=t)},_getOutputDistanceAccumulationRasterNameAttr:function(){return this._outputDistanceAccumulationRasterNameInput.get("value")},_setOutputDistanceAccumulationRasterNameAttr:function(t){this._outputDistanceAccumulationRasterNameInput&&this._outputDistanceAccumulationRasterNameInput.set("value",t)},_getOutputBackDirectionRasterNameAttr:function(){return this._outputBackDirectionRasterNameInput.get("value")},_setOutputBackDirectionRasterNameAttr:function(t){this._outputBackDirectionRasterNameInput&&this._outputBackDirectionRasterNameInput.set("value",t)},_getOutputSourceDirectionRasterNameAttr:function(){return this._outputSourceDirectionRasterNameInput.get("value")},_setOutputSourceDirectionRasterNameAttr:function(t){this._outputSourceDirectionRasterNameInput&&this._outputSourceDirectionRasterNameInput.set("value",t)},_getOutputSourceLocationRasterNameAttr:function(){return this._outputSourceLocationRasterNameInput.get("value")},_setOutputSourceLocationRasterNameAttr:function(t){this._outputSourceLocationRasterNameInput&&this._outputSourceLocationRasterNameInput.set("value",t)}});return f("extend-esri")&&v.setObject("dijit.analysis.DistanceAllocation",E,t),E}));