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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/i18n!../../nls/jsapi","dojo/text!./templates/RFxAttributeTable.html","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/form/NumberSpinner","./EditableGridMixin","./RFxGridBase","./utils","../ColorRampSelector","../../renderers/colorRampUtils","../../kernel"],(function(e,t,i,a,s,r,l,n,o,u,h,c,d,p,b){var g=e([r,l,n,u],{templateString:s,baseClass:"esriRFxAttributeTable",nCols:0,dataTypes:[h.DATA_TYPES.string,h.DATA_TYPES.string,"color"],fieldNames:["Value","ClassName","Color"],isExternalTable:!1,_store:null,_grid:null,defaults:{min:1,max:7},fields:[{name:"ObjectID",type:"esriFieldTypeOID",alias:"OID"},{name:"Value",type:"esriFieldTypeInteger",alias:"Value"},{name:"ClassName",type:"esriFieldTypeString",alias:"ClassName",length:256},{name:"Red",type:"esriFieldTypeInteger",alias:"Red"},{name:"Green",type:"esriFieldTypeInteger",alias:"Green"},{name:"Blue",type:"esriFieldTypeInteger",alias:"Blue"},{name:"Alpha",type:"esriFieldTypeInteger",alias:"Alpha"}],fieldTypeMap:{esriFieldTypeOID:"double",esriFieldTypeInteger:"double",esriFieldTypeDouble:"double",esriFieldTypeString:"string",esriFieldTypeDate:"string"},constructor:function(e){this.inherited(arguments),this._i18n=a.widgets.rasterFunctionEditor.rfxAttributeTable},postCreate:function(){this.inherited(arguments),this._validateInputArgs(),this._setLabels(),this._setupLayerSelect(),this._setupValueControls(),this._setupColorRamp(),this._initializeGrid(),this.generateButton.on("click",t.hitch(this,this._onGenerateTableClick)),this._grid.on("grid-data-change",t.hitch(this,this._updateValue))},_validateInputArgs:function(){var e=Object.keys(this.inputArgs).some((function(e){if("AttributeTableAsRecordSet"===e)return!0}));if(!e){var t={name:"AttributeTableAsRecordSet",isPublic:!1,type:"RecordSet"};this.rfxArgs.AttributeTableAsRecordSet=t,this.inputArgs.AttributeTableAsRecordSet=t}e&&(this.isExternalTable=this._isExternalTable(),this.isExternalTable&&(this.generateOptions.domNode.style.display="none"))},_setupLayerSelect:function(){this.rasterArg=this.inputArgs&&this.inputArgs.Raster,this._layerSelect.set("inputLayers",this.inputLayers),this._layerSelect.set("allowScalar",this.allowScalar),this._layerSelect.set("rfxVariable",this.rasterArg),this.browseProperties&&(this._layerSelect.set("map",this.browseProperties.map),this._layerSelect.set("portalSelf",this.browseProperties.portalSelf),this._layerSelect.set("portalUrl",this.browseProperties.portalUrl)),c.getArgRFT(this.rasterArg)?this._hideLayerSelect():(this.own(this._layerSelect.on("change",this._updateRasterInputArg.bind(this))),this._updateRasterInputArg())},_hideLayerSelect:function(){this.rasterName.style.display="none",this.rasterInput.style.display="none"},_updateRasterInputArg:function(){this.rasterArg.value=this._layerSelect.get("value")},_setupValueControls:function(){this.minVal=this._createValueControl(this.minValSelect,this.defaults.min),this.maxVal=this._createValueControl(this.maxValSelect,this.defaults.max)},_setupColorRamp:function(){this.colorRampSelect=new d({maxHeight:200,includeDefault:!1},this.colorRampNode),this.colorRampSelect.startup(),this.colorRampSelect.setSelected("Aspect")},_createValueControl:function(e,t){var i=new o({value:t,smallDelta:1,constraints:{min:-255,max:255,places:0}},e);return i.startup(),i},_initializeGrid:function(){var e=this._getGridSchema(),t=this._createDataObject();this.isExternalTable?this._grid=new h({schema:e,data:t,hasIdColumn:!1,isEditable:!1},this.attributeTable):this._grid=new h({schema:e,data:t,hasIdColumn:!0,defaultBlankObject:this._getDefaultValueObject()},this.attributeTable)},_getGridSchema:function(){var e=[];this.isExternalTable?e=(this.inputArgs&&this.inputArgs.AttributeTableAsRecordSet&&this.inputArgs.AttributeTableAsRecordSet.fields).map(t.hitch(this,(function(e){return{label:this._i18n[e.name.toLowerCase()]||e.name,name:e.name,dataType:this.fieldTypeMap[e.type]}}))):e=this.fieldNames.map((function(e,t){return{label:this._i18n[e.toLowerCase()],name:e,dataType:this.dataTypes[t]}}),this);return e},_isExternalTable:function(){var e=!1,i=this.inputArgs&&this.inputArgs.AttributeTableAsRecordSet&&this.inputArgs.AttributeTableAsRecordSet.fields;return i?(i.length===this.fields.length?i.forEach(t.hitch(this,(function(i){"oid"===i.name.toLowerCase()||this.fields.some(t.hitch(this,(function(e){return e.name===i.name&&e.type===i.type&&e.alias===i.alias})))||(e=!0)}))):e=!0,e):e},_createDataObject:function(){var e=[];if(this.recordSetArg=this.inputArgs&&this.inputArgs.AttributeTableAsRecordSet,this.recordSetArg&&this.recordSetArg.features&&this.recordSetArg.features.length){var t=this.recordSetArg.features;this.isExternalTable?e=t.map((function(e){return e.attributes})):t.forEach((function(t){var i=t.attributes;null!=i.Alpha&&i.Alpha<=1&&(i.Alpha=Math.round(255*i.Alpha));var a={Value:i.Value,ClassName:i.ClassName,colorObject:{r:i.Red,g:i.Green,b:i.Blue,a:i.Alpha,id:i.ObjectID}};e.push(a)}))}return e},_getDefaultValueObject:function(){if(!this.isExternalTable)return{Value:0,ClassName:"",colorObject:{r:0,g:0,b:0,a:255}}},_onGenerateTableClick:function(){var e=this._getGridData();this._grid.updateStoreValue(e),this._updateValue(e)},_getGridData:function(){for(var e=this.minVal.value,t=this.maxVal.value,i=this.baseClassNameInput.value,a=t-e+1,s=[],r=this.colorRampSelect.colorRamp,l=p.convertColorRampToColormap(r,a),n=0,o=e;o<=t;o++){var u={r:l[n][1],g:l[n][2],b:l[n][3],a:255,id:n};s.push({Value:o,ClassName:i+o,colorObject:u}),n++}return s},_updateValue:function(e){var t=[];e.forEach((function(e,i){if(e&&"*"!==e.idNum){var a={attributes:{ObjectID:i,Value:parseInt(e.Value,10),ClassName:e.ClassName,Red:e.colorObject.r,Green:e.colorObject.g,Blue:e.colorObject.b,Alpha:e.colorObject.a}};t.push(a)}})),this.recordSetArg.fields||(this.recordSetArg.fields=this.fields),this.recordSetArg.features=t,this.emit("change")},_setLabels:function(){this.inputArgs&&this.inputArgs.Raster&&(this.rasterLabel.innerHTML=this.inputArgs.Raster.displayName||this.inputArgs.Raster.name)}});return i("extend-esri")&&t.setObject("dijit.RasterFunctionEditor.RFxAttributeTable",g,b),g}));