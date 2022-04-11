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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/_base/array","dojo/store/Memory","dojo/data/ObjectStore","dojo/i18n!../../nls/jsapi","dojo/text!./templates/RFxFilteredArgumentEditor.html","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","./utils","../../kernel"],(function(t,e,i,r,s,n,a,o,l,h,u,p,c){var d=t("RFxFilteredArgumentEditor",[l,h,u],{widgetsInTemplate:!0,templateString:o,declaredClass:"esri.widgets.ToolModeler.RasterFunctionEditor.ArgumentEditors.RFxFilteredArgumentEditor",storeType:"string",constructor:function(){this.inherited(arguments),this._i18n=a.rasterFunctionEditor},postCreate:function(){this.inherited(arguments),this._setLabels(),this._initializeVariables(),this._setInitialDropDownState(),this._initializeAttributes(),this._checkForFilters(),this._attachTriggerArgsChangeListener(),this._attachInputArgChangeListener()},_initializeVariables:function(){this.initialStore=[],this._pixelTypeFilters={},this._valueFilters={}},_getPersistedValue:function(){var t;return Object.keys(this.inputArgs).forEach(function(e){t=this.inputArgs[e].value}.bind(this)),t},_setInputArgValue:function(t){Object.keys(this.inputArgs).forEach(function(e){this.inputArgs[e].value="number"===this.storeType?Number(t):t}.bind(this)),this.emit("change",{value:t})},_isRasterTypeFloat:function(t){return t&&t.toLocaleLowerCase().indexOf("f")>=0},_setStore:function(t){if(!this._isStoreDataSame(t)){var e=this._createObjectStore(t,"key");this._templateNode.set("store",e),this.currentStoreData=t;var i=t[0]&&t[0].key,s=this._getPersistedValue();if("number"===this.storeType&&(s=s.toString()),s)r.some(t,(function(t){return t.key===s}))&&(i=s);this._templateNode.set("value",i),this._setInputArgValue(i)}},_createObjectStore:function(t,e){return new n(new s({data:t,idProperty:e}))},_setLabels:function(){this.inputArgs&&r.forEach(Object.keys(this.inputArgs),function(t){var e=this.inputArgs[t];this.fieldLabel.innerHTML=e.displayName,e.input=this._templateNode}.bind(this))},_setInitialDropDownState:function(){var t=p.getFunctionName(this.rfxArgs),i=this.rasterFunctions[t],s=i&&i.rasterFunctionArguments;r.forEach(Object.keys(this.inputArgs),(function(t){var i=s[t].domain;if(i&&"list"===i.type){var r=this.browseProperties.portalSelf&&this.browseProperties.portalSelf.portalMode,n=p.coerceEnumDataForCurrentEnv(this.rfxArgs,this.rasterFunctionEnums[i.enum],r);this.initialStore=e.clone(n)}}),this),this.storeType=typeof this.initialStore[0].key,r.forEach(this.initialStore,(function(t){t.key=t.key.toString()})),this.initialStore||console.error("Domain list Enum not set! Check Schema"),this._setStore(this.initialStore)},_initializeAttributes:function(){this.triggerAttributes.trim().split(";").forEach(function(t){var e=t.trim().split(":"),i=e[0],r=e[1].trim().split(","),s={};switch(s.dependFieldName=r[0],s.dependFieldValue=r[1].trim().split("|"),s.filteredValue=r[2].trim().split("|"),s.isApplied=!1,i){case"pixelType":this._pixelTypeFilters[s.dependFieldName]=s;break;case"value":this._valueFilters[s.dependFieldName]=s}}.bind(this))},_attachInputArgChangeListener:function(){this._templateNode.on("change",this._handleInputArgChange.bind(this))},_handleInputArgChange:function(t){this._setInputArgValue(t)},_attachTriggerArgsChangeListener:function(){r.forEach(Object.keys(this.triggerArgs),(function(t){this.triggerArgs[t].input&&this.triggerArgs[t].input.on("change",this._checkForFilters.bind(this))}),this)},_checkForFilters:function(){Object.keys(this.triggerArgs).forEach(function(t){var e=this.triggerArgs[t].input,i=e?e.value:this.triggerArgs[t].value;if(this._pixelTypeFilters.hasOwnProperty(t)){var r=this._pixelTypeFilters[t];if(r.isApplied=!1,i){var s=i.name,n=e.getSelectedLayer(s);if(n&&n.loaded){var a=n.pixelType;this._isRasterTypeFloat(a)&&(r.isApplied=!0,this.applyFilter())}else n&&n.on("load",function(t){var e=(n=t.layer?t.layer:t).pixelType;this._isRasterTypeFloat(e)&&(r.isApplied=!0,this.applyFilter())}.bind(this))}}if(this._valueFilters.hasOwnProperty(t)){var o=this._valueFilters[t];o.isApplied=!1,o.dependFieldValue.some((function(t){return i===t}))&&(o.isApplied=!0,this.applyFilter())}}.bind(this)),this.applyFilter()},applyFilter:function(){var t=this.initialStore;Object.keys(this._pixelTypeFilters).forEach(function(e){var i=this._pixelTypeFilters[e];i.isApplied&&(t=this._getFilteredStore(t,i.filteredValue),!0)}.bind(this)),Object.keys(this._valueFilters).forEach(function(e){var i=this._valueFilters[e];i.isApplied&&(t=this._getFilteredStore(t,i.filteredValue),!0)}.bind(this)),this._setStore(t)},_getFilteredStore:function(t,e){return t.filter((function(t){return e.some((function(e){return t.key===e}))}))},_isStoreDataSame:function(t){var e=!0;return!!this.currentStoreData&&(t.length===this.currentStoreData.length&&(t.forEach(function(t,i){t.key!==this.currentStoreData[i].key&&(e=!1)}.bind(this)),e))}});return i("extend-esri")&&e.setObject("dijit.RasterFunctionEditor.RFxFilteredArgumentEditor",d,c),d}));