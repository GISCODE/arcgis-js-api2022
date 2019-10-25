// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","./core/tsSupport/assignHelper","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","./core/arrayUtils","./core/asyncUtils","./core/collectionUtils","./core/JSONSupport","./core/lang","./core/Loadable","./core/loadAll","./core/Logger","./core/maybe","./core/promiseUtils","./core/urlUtils","./core/accessorSupport/decorators","./layers/support/LayerCollection","./portal/Portal","./portal/PortalItem","./support/basemapDefinitions","./webdoc/support/writeUtils"],function(e,r,t,o,a,n,s,i,l,p,u,c,f,y,d,h,m,b,L,I,g,v){var S=0,w=f.getLogger("esri.Basemap");return function(r){function l(e){var t=r.call(this)||this;t.id=null,t.portalItem=null,t.thumbnailUrl=null,t.title="Basemap",t.id=Date.now().toString(16)+"-basemap-"+S++,t.baseLayers=new b.default,t.referenceLayers=new b.default;var o=function(e){e.parent&&e.parent!==t&&"remove"in e.parent&&e.parent.remove(e),e.parent=t,"elevation"===e.type&&w.error("Layer '"+e.title+", id:"+e.id+"' of type '"+e.type+"' is not supported as a basemap layer and will therefore be ignored.")},a=function(e){e.parent=null};return t.baseLayers.on("after-add",function(e){return o(e.item)}),t.referenceLayers.on("after-add",function(e){return o(e.item)}),t.baseLayers.on("after-remove",function(e){return a(e.item)}),t.referenceLayers.on("after-remove",function(e){return a(e.item)}),t}o(l,r),u=l,l.prototype.initialize=function(){var e=this;this.when().catch(function(r){w.error("#load()","Failed to load basemap (title: '"+e.title+"', id: '"+e.id+"')",r)}),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)},l.prototype.normalizeCtorArgs=function(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),e=t({},e),delete e.resourceInfo),e},Object.defineProperty(l.prototype,"baseLayers",{set:function(e){this._set("baseLayers",i.referenceSetter(e,this._get("baseLayers"),b.default))},enumerable:!0,configurable:!0}),l.prototype.writeBaseLayers=function(e,r,o,a){var n=this,s=[];if(!e)return void(r[o]=s);a=t({},a,{layerContainerType:"basemap"}),this.baseLayers.forEach(function(e){var r=v.getLayerJSON(e,n._getLayerJSONFromResourceInfo(e),a);y.isSome(r)&&s.push(r)}),this.referenceLayers.forEach(function(e){var r=v.getLayerJSON(e,n._getLayerJSONFromResourceInfo(e),a);y.isSome(r)&&(r.isReference=!0,s.push(r))}),r[o]=s},Object.defineProperty(l.prototype,"referenceLayers",{set:function(e){this._set("referenceLayers",i.referenceSetter(e,this._get("referenceLayers"),b.default))},enumerable:!0,configurable:!0}),l.prototype.writeTitle=function(e,r){r.title=e||"Basemap"},l.prototype.load=function(e){return this.addResolvingPromise(this._loadFromSource(e)),this.when()},l.prototype.loadAll=function(){var e=this;return s.safeCast(c.loadAll(this,function(r){r(e.baseLayers,e.referenceLayers)}))},l.prototype.clone=function(){var e={id:this.id,title:this.title,portalItem:this.portalItem,baseLayers:this.baseLayers.slice(),referenceLayers:this.referenceLayers.slice()};return this.loaded&&(e.loadStatus="loaded"),new u({resourceInfo:this.resourceInfo}).set(e)},l.prototype.read=function(e,r){this.resourceInfo||this._set("resourceInfo",{data:e,context:r}),this.inherited(arguments)},l.prototype.write=function(e,r){return e=e||{},r&&r.origin||(r=t({origin:"web-map"},r)),this.inherited(arguments,[e,r]),!this.loaded&&this.resourceInfo&&this.resourceInfo.data.baseMapLayers&&(e.baseMapLayers=this.resourceInfo.data.baseMapLayers.map(function(e){var r=p.clone(e);return r.url&&h.isProtocolRelative(r.url)&&(r.url="https:"+r.url),r.templateUrl&&h.isProtocolRelative(r.templateUrl)&&(r.templateUrl="https:"+r.templateUrl),r})),e},l.prototype._loadFromSource=function(e){var r=this,t=r.resourceInfo,o=r.portalItem;if(t){var a=t.context?t.context.url:null;return this._loadLayersFromJSON(t.data,a,e)}return o?this._loadFromItem(o,e):d.resolve(null)},l.prototype._loadLayersFromJSON=function(r,t,o){var a=this,n=this.resourceInfo&&this.resourceInfo.context,i=this.portalItem&&this.portalItem.portal||n&&n.portal||null,l=n&&"web-scene"===n.origin?"web-scene":"web-map";return d.create(function(r){return e(["./portal/support/layersCreator"],r)}).then(function(e){var n=[];if(d.throwIfAborted(o),r.baseMapLayers&&Array.isArray(r.baseMapLayers)){var p={context:{origin:l,url:t,portal:i,layerContainerType:"basemap"},defaultLayerType:"DefaultTileLayer"},u=e.populateOperationalLayers(a.baseLayers,r.baseMapLayers.filter(function(e){return!e.isReference}),p);n.push(s.safeCast(u));var c=e.populateOperationalLayers(a.referenceLayers,r.baseMapLayers.filter(function(e){return e.isReference}),p);n.push(s.safeCast(c))}return d.eachAlways(n)}).then(function(){})},l.prototype._loadFromItem=function(e,r){var t=this;return e.load(r).then(function(e){return e.fetchData("json",r)}).then(function(o){var a=h.urlToObject(e.itemUrl);return t._set("resourceInfo",{data:o.baseMap,context:{origin:"web-map",portal:e.portal||L.getDefault(),url:a}}),t.read(t.resourceInfo.data,t.resourceInfo.context),t.read({title:e.title,thumbnailUrl:e.thumbnailUrl},{origin:"portal-item",portal:e.portal||L.getDefault(),url:a}),t._loadLayersFromJSON(t.resourceInfo.data,a,r)})},l.prototype._getLayerJSONFromResourceInfo=function(e){var r=this.get("resourceInfo.data.baseMapLayers");return y.isSome(r)?n.find(r,function(r){return r.id===e.id}):null},l.fromId=function(e){var r=g.esriBasemapDefinitions[e];return r?u.fromJSON(r):null};var u;return a([m.property({type:b.default,json:{write:{ignoreOrigin:!0,target:"baseMapLayers"}}}),m.cast(i.castForReferenceSetter)],l.prototype,"baseLayers",null),a([m.writer("baseLayers")],l.prototype,"writeBaseLayers",null),a([m.property({type:String,json:{origins:{"web-scene":{write:!0}}}})],l.prototype,"id",void 0),a([m.property({type:I})],l.prototype,"portalItem",void 0),a([m.property({type:b.default}),m.cast(i.castForReferenceSetter)],l.prototype,"referenceLayers",null),a([m.property({readOnly:!0})],l.prototype,"resourceInfo",void 0),a([m.property()],l.prototype,"thumbnailUrl",void 0),a([m.property({type:String,json:{origins:{"web-scene":{write:{isRequired:!0}}}}})],l.prototype,"title",void 0),a([m.writer("title")],l.prototype,"writeTitle",null),l=u=a([m.subclass("esri.Basemap")],l)}(m.declared(l.JSONSupportMixin(u)))});