/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/compilerUtils","../../core/Evented","../../core/maybe","../../core/reactiveUtils","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/cast","../../core/accessorSupport/decorators/subclass","../../geometry/projection","../../geometry/support/spatialReferenceUtils","../../support/basemapDefinitions","../../support/basemapUtils"],(function(e,t,a,i,s,r,n,o,p,l,c,u,h,d,m){"use strict";let f=function(t){function i(a){var i;return(i=t.call(this,a)||this)._basemapCache={},i._loadingProjectionEngine=!1,i.nextBasemap=m.ensureType("hybrid",i._basemapCache),i.view=null,i.toggle=i.toggle.bind(e._assertThisInitialized(i)),i}e._inheritsLoose(i,t);var n=i.prototype;return n.initialize=function(){r.watch((()=>this.nextBasemap),(e=>{e&&!e.loaded&&e.load().catch((()=>{}))}),r.initial)},n.destroy=function(){this.view=null,m.destroyCache(this._basemapCache),this._basemapCache=null},n.castNextBasemap=function(e){return m.ensureType(e,this._basemapCache)},n.toggle=function(){var t=e._asyncToGenerator((function*(){if("disabled"===this.state)return;const{activeBasemap:e,nextBasemap:t}=this,a=!("spatialReferenceLocked"in this.view)||this.view.spatialReferenceLocked;if(!a){if(yield r.whenOnce((()=>!this._nextBasemapSpatialReferenceTask.updating)),t!==this.nextBasemap||e!==this.activeBasemap)return;const{spatialReference:a}=this._nextBasemapSpatialReferenceTask;if(!s.isSome(a)||h.equals(this.view.spatialReference,a)||u.isLoaded()||u.canProjectWithoutEngine(this.view.spatialReference,a)||(this._loadingProjectionEngine=!0,yield u.load(),this._loadingProjectionEngine=!1),t!==this.nextBasemap||e!==this.activeBasemap)return}this.view.map.basemap=t,a||!s.isSome(this._nextBasemapSpatialReferenceTask.spatialReference)||h.equals(this.view.spatialReference,this._nextBasemapSpatialReferenceTask.spatialReference)||(this.view.spatialReference=this._nextBasemapSpatialReferenceTask.spatialReference),this.nextBasemap=e,this.emit("toggle",{previous:e,current:t})}));function a(){return t.apply(this,arguments)}return a}(),i.getThumbnailUrl=function(e){if(!e)return null;const{thumbnailUrl:t}=e;if(t)return t;const i=m.getWellKnownBasemapId(e);if(i)return d.esriBasemapDefinitions[i].thumbnailUrl;const s=e.baseLayers.find((e=>!!a.typeCast(e)().get("portalItem.thumbnailUrl")));return s?a.typeCast(s)().get("portalItem.thumbnailUrl"):null},e._createClass(i,[{key:"_nextBasemapSpatialReferenceTask",get:function(){return m.findSpatialReference(this.view,this.nextBasemap)}},{key:"activeBasemap",get:function(){var e,t,a;return m.ensureType(null!=(e=null==(t=this.view)||null==(a=t.map)?void 0:a.basemap)?e:"topo",this._basemapCache)}},{key:"state",get:function(){var e;return null!=(e=this.view)&&e.ready?this._loadingProjectionEngine?"loading":"ready":"disabled"}}]),i}(i.EventedAccessor);t.__decorate([n.property()],f.prototype,"_loadingProjectionEngine",void 0),t.__decorate([n.property({readOnly:!0})],f.prototype,"_nextBasemapSpatialReferenceTask",null),t.__decorate([n.property({readOnly:!0})],f.prototype,"activeBasemap",null),t.__decorate([n.property()],f.prototype,"nextBasemap",void 0),t.__decorate([l.cast("nextBasemap")],f.prototype,"castNextBasemap",null),t.__decorate([n.property({readOnly:!0})],f.prototype,"state",null),t.__decorate([n.property()],f.prototype,"view",void 0),t.__decorate([n.property()],f.prototype,"toggle",null),f=t.__decorate([c.subclass("esri.widgets.BasemapToggle.BasemapToggleViewModel")],f);return f}));
