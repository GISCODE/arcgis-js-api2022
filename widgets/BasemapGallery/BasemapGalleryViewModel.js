/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Collection","../../core/HandleOwner","../../core/Loadable","../../core/maybe","../../core/reactiveUtils","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/cast","../../core/accessorSupport/decorators/subclass","../../geometry/projection","../../geometry/support/spatialReferenceUtils","../../support/basemapUtils","./support/basemapCompatibilityUtils","./support/BasemapGalleryItem","./support/LocalBasemapsSource","./support/PortalBasemapsSource"],(function(e,t,i,a,r,o,s,n,c,l,p,u,d,m,h,v,y,f,_){"use strict";const b=i.ofType(y);function w(e){return e&&"esri.portal.Portal"===e.declaredClass}function g(e){return e&&!(e instanceof _)&&(!!e.portal||!!e.query)}function B(e){return e&&"basemaps"in e&&"state"in e&&"refresh"in e}let P=function(t){function a(e){var i;return(i=t.call(this,e)||this)._loadingProjectionEngine=!1,i.items=new b,i.source=new _,i.view=null,i}e._inheritsLoose(a,t);var n=a.prototype;return n.initialize=function(){const e=()=>this._recreateItems();this.handles.add([s.watch((()=>"ready"===this.state?this.compatibilityFunction:null),(()=>this._updateItems())),s.on((()=>{var e;return null==(e=this.source)?void 0:e.basemaps}),"change",e,{onListenerAdd:e})])},n.castSource=function(e){return Array.isArray(e)||i.isCollection(e)?new f({basemaps:e}):w(e)?new _({portal:e}):g(e)?new _(e):B(e)?e:null},n.basemapEquals=function(e,t){return h.contentEquals(e,t)},n.refresh=function(){this._recreateItems()},n.load=function(e){return this.addResolvingPromise(r.isLoadable(this.source)?this.source.load(e):null),Promise.resolve(this)},n._recreateItems=function(){var e;const t=null==(e=this.source)?void 0:e.basemaps,{view:i,compatibilityFunction:a}=this;this.items.removeAll().forEach((e=>e.destroy())),t&&this.items.addMany(t.map((e=>new y({basemap:e,compatibilityFunction:a,view:i}))))},n._updateItems=function(){for(const e of this.items)e.compatibilityFunction=this.compatibilityFunction,e.view=this.view},e._createClass(a,[{key:"activeBasemap",get:function(){var e,t,i;return null!=(e=null==(t=this.view)||null==(i=t.map)?void 0:i.basemap)?e:null},set:function(e){var t;if(!this.view.map)return;if(!e||!this.view.ready)return this.view.map.basemap=e,void this._clearOverride("activeBasemap");const i=e.spatialReference||(null==(t=this.items)?void 0:t.find((t=>t.basemap===e)).spatialReference);if(i&&"spatialReferenceLocked"in this.view&&!this.view.spatialReferenceLocked){const t=this.view.spatialReference;if(o.isSome(i)&&!m.equals(t,i)&&!d.canProjectWithoutEngine(this.view.spatialReference,i)&&!d.isLoaded())return this._override("activeBasemap",e),this._loadingProjectionEngine=!0,void d.load().then((()=>{this._get("activeBasemap")===e&&(this.view.map.basemap=e,this.view.spatialReference=i,this._clearOverride("activeBasemap"))}),(()=>{})).then((()=>{this._loadingProjectionEngine=!1}));this.view.map.basemap=e,this._clearOverride("activeBasemap"),o.isSome(i)&&!m.equals(this.view.spatialReference,i)&&(this.view.spatialReference=i)}else this.view.map.basemap=e,this._clearOverride("activeBasemap")}},{key:"compatibilityFunction",get:function(){var e;return"3d"===(null==(e=this.view)?void 0:e.type)?v.default3DCompatibility:v.default2DCompatibility},set:function(e){o.isSome(e)?this._override("compatibilityFunction",e):this._clearOverride("compatibilityFunction")}},{key:"state",get:function(){var e;return null!=(e=this.view)&&e.ready&&this.source?this._loadingProjectionEngine?"loading":"ready":"disabled"}}]),a}(a.HandleOwnerMixin(r));t.__decorate([n.property()],P.prototype,"_loadingProjectionEngine",void 0),t.__decorate([n.property()],P.prototype,"activeBasemap",null),t.__decorate([n.property()],P.prototype,"compatibilityFunction",null),t.__decorate([n.property({readOnly:!0,type:b})],P.prototype,"items",void 0),t.__decorate([n.property()],P.prototype,"source",void 0),t.__decorate([p.cast("source")],P.prototype,"castSource",null),t.__decorate([n.property({readOnly:!0})],P.prototype,"state",null),t.__decorate([n.property()],P.prototype,"view",void 0),P=t.__decorate([u.subclass("esri.widgets.BasemapGallery.BasemapGalleryViewModel")],P);return P}));
