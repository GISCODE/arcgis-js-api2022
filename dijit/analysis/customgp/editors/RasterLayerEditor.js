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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom-style","dojo/dom-attr","dojo/on","dojo/Deferred","dojo/text!./RasterLayerEditor.html","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","esri/tasks/RasterData","esri/request","../common/dijit/ViewStack","../common/dijit/Message","./SelectFeatureSetFromLayer","../../ItemTypes","../BaseEditor","dijit/form/TextBox","../common/dijit/URLInput"],(function(e,t,i,s,o,a,r,l,n,u,h,d,c,m,p,f,g){return e([g,n,u],{baseClass:"jimu-gp-editor-base jimu-gp-editor-wrapper",templateString:l,editorName:"RasterLayerEditor",mode:"url",_url:"",_format:"",_itemID:null,uniqueID:null,constructor:function(e){this.inherited(arguments),this.chooseLayerName=e.nls.useImageServiceLayer,this.uniqueID=(new Date).getTime()},postCreate:function(){this.inherited(arguments),this.value&&this.parseDefaultValue(),o.set(this.urlEditor,"tooltip",this.param.tooltip),this.config.showDrawOption=!1,this.selectFeature=new p({cssClass:{featureSetSelect:"esriTableFixedLayout fullSpread esriLongLabel esriAnalysisSelect",layerChooseCtr:""},param:{},widgetUID:void 0,widget:this.widget,config:this.config,appConfig:this.appConfig,map:this.map,nls:this.i18n,editorManager:this.editorManager,style:{width:"100%"}}),this.selectFeature.defaultItemTypes=[f.IS],this.ImgSvclayerNode.appendChild(this.selectFeature.domNode),"setting"===this.context?(this.viewStack=null,s.set(this.fileNode,"display","none")):(this.viewStack=new c({viewType:"dom",views:[this.urlNode,this.fileNode,this.ImgSvclayerNode]}),this.viewStack.placeAt(this.settingNode),this.viewStack.startup()),this.config.serverInfo.supportsUpload&&s.set(this.modeSelection,"display",""),"item"===this.mode&&this.config.serverInfo.supportsUpload?(o.set(this.itemMode,"checked",!0),a.emit(this.itemMode,"click",{cancelable:!0,bubble:!0})):(o.set(this.urlMode,"checked",!0),a.emit(this.urlMode,"click",{cancelable:!0,bubble:!0}),this.rasterFormatInput.set("value",this._format),this.urlEditor.set("value",this._url))},parseDefaultValue:function(){var e;0===this.value.indexOf("itemID:")?this.mode="item":(0!==this.value.indexOf("url:")&&0!==this.value.indexOf("format:")||(e=this.value.split(","),i.forEach(e,(function(e){0===e.indexOf("url:")?this._url=e.substring("url:".length):e.indexOf(!1)&&(this._format=e.substring("format:".length))}),this)),this.mode="url")},hasValidValue:function(){return"item"===this.mode||("layer"===this.mode?!(!this.selectFeature||!this.selectFeature.getSelectedLayer()):"url"===this.mode?this.urlEditor.isValid():void 0)},getValue:function(){return"url"===this.mode?"url:"+this._getUrl()+",format:"+this.rasterFormatInput.get("value"):"item"===this.mode?"itemID:":""},getGPValue:function(){var e=new r,t=new h;return"url"===this.mode?(t.url=this._getUrl(),t.format=this.rasterFormatInput.get("value")):"layer"===this.mode?t.url=this.selectFeature.getSelectedLayer()&&this.selectFeature.getSelectedLayer().url:t.itemID=this.itemIDInput,t.url||t.itemID?e.resolve(t):e.resolve(null),e},_getUrl:function(){return this.urlEditor.isValid()?this.urlEditor.get("value"):""},_onUrlModeSelect:function(){this.mode="url",this.viewStack?this.viewStack.switchView(0):(s.set(this.urlNode,"display","block"),s.set(this.ImgSvclayerNode,"display","none"))},_onItemModeSelect:function(){this.mode="item",this.viewStack?this.viewStack.switchView(1):(s.set(this.urlNode,"display","none"),s.set(this.ImgSvclayerNode,"display","none"))},_onSelectModeClick:function(){this.mode="layer",this.viewStack?this.viewStack.switchView(2):(s.set(this.urlNode,"display","none"),s.set(this.ImgSvclayerNode,"display","block"))},_onUpload:function(){if(o.get(this.fileInput,"value")){var e=o.get(this.fileInput,"value");e=(e=e.replace(/\\/g,"/")).substr(e.lastIndexOf("/")+1),d({url:this.config.serverInfo.url+"uploads/upload",form:this.fileForm.domNode,handleAs:"json"}).then(t.hitch(this,(function(t){t.success&&(this.itemIDInput=t.item.itemID,o.set(this.fileInput,"value",""),o.set(this.uploadFileName,"innerHTML",e),new m({message:this.nls.uploadSuccess}))})),t.hitch(this,(function(e){var t=e.message||e;new m({message:t})})))}}})}));