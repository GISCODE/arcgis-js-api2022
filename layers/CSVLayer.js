/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../geometry","../core/Error","../core/maybe","../core/urlUtils","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass","./FeatureLayer","./graphics/sources/CSVSource","./graphics/sources/support/clientSideDefaults","../rest/support/Query","../chunks/persistableUrlUtils","../geometry/SpatialReference"],(function(e,r,t,o,i,n,a,s,l,u,c,d,p,y,f,h,g,_){"use strict";const m="CSVLayer";let b=function(r){function t(...e){var t;return(t=r.call(this,...e)||this).capabilities=f.createCapabilities(!1,!1),t.delimiter=null,t.editingEnabled=!1,t.fields=null,t.latitudeField=null,t.locationType="coordinates",t.longitudeField=null,t.operationalLayerType="CSV",t.outFields=["*"],t.path=null,t.portalItem=null,t.spatialReference=_.WGS84,t.source=null,t.type="csv",t}e._inheritsLoose(t,r);var a=t.prototype;return a.normalizeCtorArgs=function(e,r){return"string"==typeof e?{url:e,...r}:e},a.readWebMapLabelsVisible=function(e,r){return null!=r.showLabels?r.showLabels:!!(r.layerDefinition&&r.layerDefinition.drawingInfo&&r.layerDefinition.drawingInfo.labelingInfo)},a.createGraphicsSource=function(){var r=e._asyncToGenerator((function*(e){const r=new y({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url},customParameters:this.customParameters});return this._set("source",r),yield r.load({signal:e}),this.read({locationInfo:r.locationInfo,columnDelimiter:r.delimiter},{origin:"service",url:this.parsedUrl}),r}));function t(e){return r.apply(this,arguments)}return t}(),a.queryFeatures=function(e,r){return this.load().then((()=>this.source.queryFeatures(h.from(e)||this.createQuery()))).then((e=>{if(null!=e&&e.features)for(const r of e.features)r.layer=r.sourceLayer=this;return e}))},a.queryObjectIds=function(e,r){return this.load().then((()=>this.source.queryObjectIds(h.from(e)||this.createQuery())))},a.queryFeatureCount=function(e,r){return this.load().then((()=>this.source.queryFeatureCount(h.from(e)||this.createQuery())))},a.queryExtent=function(e,r){return this.load().then((()=>this.source.queryExtent(h.from(e)||this.createQuery())))},a.write=function(e,t){return r.prototype.write.call(this,e,{...t,writeLayerSchema:!0})},a.clone=function(){throw new o(m,`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)},a.hasDataChanged=function(){var r=e._asyncToGenerator((function*(){try{const{dataChanged:e,updates:r}=yield this.source.refresh(this.customParameters);return i.isSome(r)&&this.read(r,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}));function t(){return r.apply(this,arguments)}return t}(),a._verifyFields=function(){},a._verifySource=function(){},a._hasMemorySource=function(){return!1},e._createClass(t,[{key:"isTable",get:function(){return this.loaded&&null==this.geometryType}},{key:"url",set:function(e){if(!e)return void this._set("url",e);const r=n.urlToObject(e);this._set("url",r.path),r.query&&(this.customParameters={...this.customParameters,...r.query})}}]),t}(p);r.__decorate([a.property({readOnly:!0,json:{read:!1,write:!1}})],b.prototype,"capabilities",void 0),r.__decorate([a.property({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],b.prototype,"delimiter",void 0),r.__decorate([a.property({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],b.prototype,"editingEnabled",void 0),r.__decorate([a.property({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],b.prototype,"fields",void 0),r.__decorate([a.property({type:Boolean,readOnly:!0})],b.prototype,"isTable",null),r.__decorate([c.reader("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],b.prototype,"readWebMapLabelsVisible",null),r.__decorate([a.property({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],b.prototype,"latitudeField",void 0),r.__decorate([a.property({type:["show","hide"]})],b.prototype,"listMode",void 0),r.__decorate([a.property({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],b.prototype,"locationType",void 0),r.__decorate([a.property({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],b.prototype,"longitudeField",void 0),r.__decorate([a.property({type:["CSV"]})],b.prototype,"operationalLayerType",void 0),r.__decorate([a.property()],b.prototype,"outFields",void 0),r.__decorate([a.property({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],b.prototype,"path",void 0),r.__decorate([a.property({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],b.prototype,"portalItem",void 0),r.__decorate([a.property({json:{read:!1},cast:null,type:y,readOnly:!0})],b.prototype,"source",void 0),r.__decorate([a.property({json:{read:!1},value:"csv",readOnly:!0})],b.prototype,"type",void 0),r.__decorate([a.property({json:{read:g.read,write:{isRequired:!0,ignoreOrigin:!0,writer:g.write}}})],b.prototype,"url",null),b=r.__decorate([d.subclass("esri.layers.CSVLayer")],b);return b}));
