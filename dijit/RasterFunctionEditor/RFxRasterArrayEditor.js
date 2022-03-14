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

define(["dojo/_base/declare","dojo/has","../../kernel","dojo/_base/lang","dojo/_base/array","dojo/store/Memory","dojo/store/Observable","dojo/data/ObjectStore","dijit/form/Select","dijit/form/Button","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dgrid/OnDemandGrid","dgrid/Selection","./utils","dojo/text!./templates/RFxRasterArrayEditor.html","dojo/i18n!../../nls/jsapi"],(function(e,t,r,i,a,s,n,l,o,u,d,h,_,c,f,y,m,v){var p=e("RFxRasterArrayEditor",[d,h,_],{templateString:m,inputLayers:null,value:[],_lastId:1,constructor:function(e){this.inherited(arguments),this._i18n=v.widgets.rasterFunctionEditor},postCreate:function(){this.inherited(arguments),this._populateLayerSelect(),this._setupGrid(),this._readValues()},_getValueAttr:function(){this._updateValue();var e=this.value.elements;return e&&a.forEach(e,(function(t,r){i.mixin(e[r].value,y.getRasterJsonFromLayer(t.value))})),this.value},_getInputLayersStore:function(){return new l(new s({data:this.inputLayers}))},_populateLayerSelect:function(){this._layerSelect.set("browseProperties",this.browseProperties),this._layerSelect.set("selectDefault",!1),this._layerSelect.set("allowScalar",this.allowScalar),this._layerSelect.set("inputLayers",this.inputLayers),this.own(this._layerSelect.on("change",i.hitch(this,this._addLayer)))},_setupGrid:function(){this._layerStore=n(new s),this._layerGrid=new(e([c,f]))({selectionMode:"single",showHeader:!1,store:this._layerStore,allowSelect:function(e){return!(e.data&&e.data.isTemplate)},queryOptions:{sort:[{attribute:"id"}]},columns:[{field:"name"}]},this._gridNode)},_readValues:function(){if(this.value&&(this.value.elements||Array.isArray(this.value))){var e,t,r=this._layerStore,i=0,s=this.value.elements||this.value;this._rasterElements=s,a.forEach(s,(function(a){if(e=a&&a.type===y.RFX_VARIABLE_TYPE?a.value:a,(t=a.type)===y.RFX_TEMPLATE_TYPE)return r.put(this._getRFTGridData(a,++i));if(e&&e.type===y.RFX_TEMPLATE_TYPE)return r.put(this._getRFTGridData(e,++i));if(t===y.RFX_VARIABLE_TYPE||a.url){var s=this._getRFVGridData(a,++i);s&&r.put(s)}}),this),this._layerGrid.refresh()}},_getRFVGridData:function(e,t){var r=e&&e.value;if(r){var i,s=y.getLayerIdfromRasterValue(r,this.inputLayers);if(r&&r.type&&"scalar"===r.type.toLowerCase())return{id:t,name:String(r.value),value:r,isTemplate:!1,element:e};if(!s){var n=y.getArcGISImageServiceLayerItem(r);return this.inputLayers.push(n),{id:t,name:r.name||r.value,value:r,isTemplate:!1}}return a.some(this.inputLayers,(function(e){if(s===e.id)return i=e,!0})),i?{id:t,name:i.name,value:r,isTemplate:!1}:void 0}},_getRFTGridData:function(e,t){if(e)return{id:t,name:"<"+e.function.name+"."+this._i18n.rfxArgsEditor.outputRaster+">",value:e,element:e,isTemplate:!0}},_addLayer:function(){this._adjustGridItemIds();var e,t=this._layerSelect.get("value"),r=this._layerStore.data.length;t&&(e={id:r+1,value:t,name:t.name||t.value},this._layerStore.put(e),this._refreshGrid())},_onRemoveButtonClick:function(){var e=this._getSelectedId();this._layerStore.remove(e),this._refreshGrid()},_adjustGridItemIds:function(){var e=this._layerStore&&this._layerStore.data;e&&(a.forEach(e,(function(e,t){e.id=t+1})),this._layerStore.setData(e))},_onUpButtonClick:function(){var e=this._getSelectedItem();if(this._layerStore&&this._layerStore.data&&e){var t,r=this._layerStore.data,i=a.indexOf(r,e);i<=0||(t=r[i-1],r[i-1]=e,r[i]=t,this._refreshGrid())}},_onDownButtonClick:function(){var e=this._getSelectedItem();if(this._layerStore&&this._layerStore.data&&e){var t,r=this._layerStore.data,i=a.indexOf(r,e);i!==r.length-1&&(t=r[i+1],r[i]=t,r[i+1]=e,this._refreshGrid())}},_getSelectedId:function(){var e=this._layerGrid&&this._layerGrid.selection;return Object.keys(e)[0]},_getSelectedItem:function(){var e=this._getSelectedId();return this._layerStore.get(e)},_refreshGrid:function(){this._adjustGridItemIds(),this._updateValue(),this._layerGrid.refresh()},_updateValue:function(){var e=this._layerStore&&this._layerStore.data,t=[];e&&(e.forEach((function(e){var r;if(this._rasterElements&&this._rasterElements.some((function(t){if(t===e.element||t.value===e.element)return r=t,!0}),this),e.isTemplate){var i=this.getRFT?this.getRFT(e.value):e.value;r.value?(r.value=i,t.push(r)):t.push(i)}else r?r.value=e.value:t.push({type:y.RFX_VARIABLE_TYPE,isDataset:!0,value:e.value})}),this),this._rasterElements&&this._rasterElements.forEach((function(e){void 0!==e._object_ref_id&&null!==e._object_ref_id&&t.push(e)})),this.value={elements:t,type:"ArgumentArray"})}});return t("extend-esri")&&i.setObject("dijit.RasterFunctionEditor.RFxNamedRasterEditor",p,r),p}));