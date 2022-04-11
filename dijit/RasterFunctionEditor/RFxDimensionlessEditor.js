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

define(["dojo/_base/declare","dojo/dom-style","dojo/_base/array","dojo/has","dojo/i18n!../../nls/jsapi","dojo/text!./templates/RFxDimensionlessEditor.html","dojo/_base/lang","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","./utils","../../kernel"],(function(i,e,t,n,s,r,a,l,o,h,u,d){var c=i("RFxDimensionlessEditor",[l,o,h],{widgetsInTemplate:!0,templateString:r,isRasterSingleSlice:!1,mdimDefLeadsToSingleSlice:!1,multidimensionalInfo:null,constructor:function(){this.inherited(arguments),this._i18n=s.rasterFunctions.rfxArgs},postCreate:function(){this.inherited(arguments),this._attachInputToRFxArg(),this._attachChangeListener()},startup:function(){this.inherited(arguments);var i=this.triggerArgs.Raster&&this.triggerArgs.Raster.input;if(!i||!i.value)return this.isRasterSingleSlice=!1,this.mdimDefLeadsToSingleSlice=!1,void this._processDimensionlessArgState();var e=i.getSelectedLayer(i.get("value").name);this._setInitialSate(e)},_isArrayUnique:function(i){return i.every(function(i,e,t){return!(t.indexOf(i,e+1)>=0)}.bind(this))},_isItemInArray:function(i,e){return i.indexOf(e)>=0},_setInitialSate:function(i){i.getMultidimensionalInfo().then(a.hitch(this,(function(e){i.multidimensionalInfo=e,this.isRasterSingleSlice=this._checkIfRasterIsSingleSlice(i),this.multidimensionalInfo=u.filterMDInfoIfMosiacRuleIsSet(i);var t=this.triggerArgs.Filter&&this.triggerArgs.Filter.input,n=t.value||t.get("value")||this.triggerArgs.Filter.value;this.mdimDefLeadsToSingleSlice=!(!t||!n)&&this._isMultidimensionalDefinitionAppliedSingleSlice(n),this._processDimensionlessArgState()}))).catch(a.hitch(this,(function(i){console.error("Error: Layer does not support multidimensional info"),this.mdimDefLeadsToSingleSlice=!1,this.isRasterSingleSlice=!1,this._processDimensionlessArgState()})))},_attachInputToRFxArg:function(){var i=this.inputArgs&&this.inputArgs.Dimensionless;i.input=this._templateInput;var e=!!i.value;this._templateInput.set("checked",e),this._templateInput.startup()},_attachChangeListener:function(){var i=this.triggerArgs&&this.triggerArgs.Raster;i&&i.input&&i.input.on("change",this._handleRasterChange.bind(this));var e=this.triggerArgs&&this.triggerArgs.Filter;e&&e.input&&e.input.on("change",this._handleFilterArgChange.bind(this))},_handleRasterChange:function(i){var e=i.name,t=i.detail.widget.getSelectedLayer(e);if(!t)return this.mdimDefLeadsToSingleSlice=!1,void this._processDimensionlessArgState();t.getMultidimensionalInfo().then(a.hitch(this,(function(i){t.multidimensionalInfo=i,this.multidimensionalInfo=u.filterMDInfoIfMosiacRuleIsSet(t),this.isRasterSingleSlice=this._checkIfRasterIsSingleSlice(t),this._processDimensionlessArgState()}))).catch(a.hitch(this,(function(i){console.error("Error: Layer does not support multidimensional info"),this.mdimDefLeadsToSingleSlice=!1,this.isRasterSingleSlice=!1,this._processDimensionlessArgState()})))},_handleFilterArgChange:function(i){this.mdimDefLeadsToSingleSlice=this._isMultidimensionalDefinitionAppliedSingleSlice(i),this._processDimensionlessArgState()},_checkIfRasterIsSingleSlice:function(i){var e=this.multidimensionalInfo,t=e&&e.variables;return!(!e||!t)&&(1===t.length&&t[0].dimensions.every(function(i){return!!i&&1===(i&&i.values).length}.bind(this)))},_isMultidimensionalDefinitionAppliedSingleSlice:function(i){i&&"string"==typeof i&&(i=JSON.parse(i));if(["BY_ITERATION"].indexOf(i.definitionType)>=0)return!1;if(i.variables.length>1)return!1;if(!this.multidimensionalInfo)return!1;var e=i.dimensions;if(!e)return this._isVariableSingleSlice(this.multidimensionalInfo,i.variables[0]);if(!this._isArrayUnique(e))return!1;var t=this._getDimensionNameOfVariable(this.multidimensionalInfo,i.variables[0]).every(function(i){return this._isItemInArray(e,i)}.bind(this));if(!t)return!1;if(!("BY_RANGES"===i.definitionType))return t;var n=i.maxValues,s=i.minValues;return n.every((function(i,e){return s[e]===i}))},_processDimensionlessArgState:function(){var i=this.isRasterSingleSlice||this.mdimDefLeadsToSingleSlice,e=i?"show":"hide",t=this._templateContainer;switch(e){case"show":t&&u.UIModifier.show(t);break;default:t&&u.UIModifier.hide(t),this._templateInput.set("checked",i)}var n=this.triggerArgs.Raster&&this.triggerArgs.Raster.input;n&&n.value||t&&u.UIModifier.show(t)},_getDimensionNameOfVariable:function(i,e){var t=(i&&i.variables).filter(function(i){return e===i.name}.bind(this));return t&&0!==t.length?(t=t[0]).dimensions.reduce(function(i,e){var t=e.name;return-1==i.indexOf(t)&&i.push(t),i}.bind(this),[]):[]},_isVariableSingleSlice:function(i,e){var t=(i&&i.variables).filter(function(i){return e===i.name}.bind(this));if(!t||0===t.length)return!1;var n=(t=t[0]).dimensions.reduce(function(i,e){return i[e.name]=e.values.length,i}.bind(this),{});return Object.keys(n).every(function(i){return 1===n[i]}.bind(this))}});return n("extend-esri")&&a.setObject("dijit.RasterFunctionEditor.RFxDimensionlessEditor",c,d),c}));