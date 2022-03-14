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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/store/Memory","dojo/when","dojo/Deferred","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","esri/request","../../kernel","./utils","../analysis/utils","../analysis/mixins/browselayers/BrowseLayerMixin","../analysis/ItemTypes","dojo/i18n!../../nls/jsapi","dojo/text!./templates/RFxTemplateInput.html"],(function(t,e,i,r,o,s,a,n,l,h,u,m,c,d,_,v,f,p){var b=t([n,l,h,_],{templateString:p,declaredClass:"esri.dijit.RasterFunctionEditor.RFxTemplateInput",showBrowseLayers:!0,useArcGISComponents:!0,_convertRFTToolName:"ConvertRasterFunctionTemplate",agumentSchema:null,constructor:function(t){e.mixin(this,t),this.inherited(arguments),this._i18n=f.widgets.rasterFunctionEditor,esriGeowConfig.self.helperServices.rasterUtilities&&(this.rasterUtilitiesServer=esriGeowConfig.self.helperServices.rasterUtilities.url)},startup:function(){this._comboBox.set("validator",e.hitch(this,this.validator));var t=this.value&&this._getFormattedValueFromVariable(this.value);this._comboBox.set("placeHolder",t),this._comboBox.textbox.readOnly=!0,this.inherited(arguments),this._isArgRFT(this.value)||(this.agumentSchema=this.value,this._initStore())},validator:function(t,e){if(""===t)return!1;var i=this._getStoreItems(t);return!!(i&&i.length>0)||(this._getFormattedValueFromVariable(this.value)===t||void 0)},_handleComboBoxChange:function(t){if("separator"!==t&&""!==t)return"browselayers"===t?(this.set("allowedItemTypes",[v.RFT]),this.defaultItemTypes=[],void this._createBrowseItems({},{layerTypes:[v.RFT]},this._comboBox)):void(this.value&&t===this._getFormattedValueFromVariable(this.value)||(this.value=this.get("value"),this.emit("change",e.clone(this.value))));this.value?this._comboBox.set("displayedValue",this.value.name):this._comboBox.reset()},_setValueAttr:function(t){if(t&&this._isArgRFT(t)){var e=this._getFormattedValueFromVariable(t);this.getSelectedRFT(e)||this._initStore(),this._comboBox.set("value",e),this.value=t}else this._comboBox.attr("value","",!1)},_setBrowsePropertiesAttr:function(t){t&&(this.isSingleTenant=!0,this.map=t.map?t.map:this.map,this.portalUrl=t.portalUrl?t.portalUrl:this.portalUrl,this.portalSelf=t.portalSelf?t.portalSelf:this.portalSelf)},_isArgRFT:function(t){return!!c.getArgRFT(t)},_initStore:function(){var t=[];if(this.value&&this._isArgRFT(this.value)){var e=this.value;t.push({id:0,name:this._getFormattedValueFromVariable(e),label:e.name,rft:e})}var i=new o({data:t,idProperty:"id"});this._comboBox.set("labelAttr","label"),this._comboBox.set("labelType","html"),this._comboBox.set("store",i),this._comboBox.reset(),d.addReadyToUseLayerOption(this,[this._comboBox])},_handleSelectRFTTool:function(t){this._fetchRFT(t)},_fetchRFT:function(t){var i,r,o=e.hitch(this,(function(t){return t})),s=e.hitch(this,(function(t){console.error(t),this._displayError(this.i18n.errorFetchingRFT)})),n=e.hitch(this,this._updateRFTInputStore),l=new a,h=t.name;if(i=(r=h&&h.slice(-8))&&".rft.xml"===r.toLowerCase(),!t||!t.itemDataUrl)return this._displayError(this.i18n.errorRetrievingRFTItem),l.reject(new Error("this.i18n.errorRetrievingRFTItem")),l.promise;if(i){if(!this.rasterUtilitiesServer)return this._displayError(this.i18n.errorUtilitiesServiceNotAvailable),l.reject(new Error(this.i18n.errorUtilitiesServiceNotAvailable)),l.promise;var m={url:this.rasterUtilitiesServer+"/"+this._convertRFTToolName,rft:{itemId:t.id},format:"json"};return c.convertRFT(m,o,n,s)}return u({url:t.itemDataUrl,callbackParamName:"callback",content:{f:"json"},handleAs:i?"text":"json",load:o,error:s}).then(n)},_updateRFTInputStore:function(t){var e,i,r=this._comboBox.get("store");e=(i=r&&r.data).splice(i.length-2,2);var s={id:i.length,label:t.name,name:this._getFormattedValueFromVariable(t),rft:t};i.push(s),i=i.concat(e);var a=new o({data:i,idProperty:"id"});this._comboBox.set("store",a),this._comboBox.set("value",s.name)},_displayError:function(t){this._loadingMessage.innerText=t,this.set("disableRunAnalysis",!0)},_getFormattedValueFromVariable:function(t){if(t){var e=c.getArgRFT(t);return e?"<"+(e.function&&e.function.name)+"."+this._i18n.rfxArgsEditor.outputRaster+">":"<"+this._i18n.rfxRasterInput.rfxVariable+": "+t.name+">"}},_getStoreItems:function(t){return this._comboBox.store&&this._comboBox.store.query({name:t})},getSelectedRFT:function(t){if(null!=(t=t||this._comboBox&&this._comboBox.value)&&this._comboBox){var e;e="object"==typeof t?t:{name:t};var i=this._comboBox.store&&this._comboBox.store.query(e),r=i&&i[0];if(r)return r}},_getValueAttr:function(){var t=this._comboBox.value;t=t.trim();var e=this.getSelectedRFT(t);if(e)return"browselayers"===e.id?e:e.rft}});return r("extend-esri")&&e.setObject("dijit.RasterFunctionEditor.RFxTemplateInput",b,m),b}));