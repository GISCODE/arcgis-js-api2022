/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/Identifiable","../../../../core/maybe","../../../../core/accessorSupport/decorators/property","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/subclass","../../layers/interfaces","../../webgl-engine/lib/basicInterfaces","../../webgl-engine/lib/ModelDirtyTypes"],(function(e,r,s,t,o,i,c,n,a,u,d,h,l,y){"use strict";let _=function(){function e(e){this.resourceFactory=e,this._resources=null,this._visible=!0,this._attached=!1}var s=e.prototype;return s.destroy=function(){this._destroyResources()},s.recreate=function(){this.attached&&this._createResources()},s.recreateGeometry=function(){this.resourceFactory.recreateGeometry?i.isNone(this._resources)||(this._ensureRenderGeometriesRemoved(),this.resourceFactory.recreateGeometry(this._resources.external),this._syncGeometriesToRenderer()):this.recreate()},s._createOrDestroyResources=function(){this._attached?i.isNone(this._resources)&&this._createResources():this._destroyResources()},s._createResources=function(){var e;this._destroyResources();const r=this.resourceFactory.createResources();this._resources={layerView:new p({view:this.resourceFactory.view}),external:r,geometriesAdded:!1},this._syncGeometriesToRenderer();const s=null==(e=this.resourceFactory.view.basemapTerrain)?void 0:e.overlayManager;s&&s.registerDrapeSource(this._resources.layerView)},s._destroyResources=function(){var e;if(i.isNone(this._resources))return;this._ensureRenderGeometriesRemoved();const r=null==(e=this.resourceFactory.view.basemapTerrain)?void 0:e.overlayManager;r&&r.unregisterDrapeSource(this._resources.layerView),this._resources=null},s._syncGeometriesToRenderer=function(){this._visible?this._ensureRenderGeometriesAdded():this._ensureRenderGeometriesRemoved()},s._ensureRenderGeometriesRemoved=function(){var e;if(i.isNone(this._resources)||null==(e=this.resourceFactory.view)||!e.basemapTerrain)return;if(!this._resources.geometriesAdded)return;this.resourceFactory.view.basemapTerrain.overlayManager.renderer.removeGeometries(this._resources.external.geometries,this._resources.layerView,y.ModelDirty.Geometry.UPDATE),this._resources.geometriesAdded=!1},s._ensureRenderGeometriesAdded=function(){if(i.isNone(this._resources))return;if(this._resources.geometriesAdded)return;this.resourceFactory.view.basemapTerrain.overlayManager.renderer.addGeometries(this._resources.external.geometries,this._resources.layerView,y.ModelDirty.Geometry.UPDATE),this._resources.geometriesAdded=!0},r._createClass(e,[{key:"resources",get:function(){return i.isSome(this._resources)?this._resources.external:null}},{key:"visible",get:function(){return this._visible},set:function(e){e!==this._visible&&(this._visible=e,this._syncGeometriesToRenderer())}},{key:"attached",get:function(){return this._attached},set:function(e){e!==this._attached&&(this._attached=e,this._createOrDestroyResources())}}]),e}(),p=function(e){function s(r){var s;return(s=e.call(this,r)||this).drapeSourceType=h.DrapeSourceType.Features,s.updatePolicy=l.UpdatePolicy.SYNC,s}return r._inheritsLoose(s,e),s}(o.IdentifiableMixin(t));s.__decorate([c.property({constructOnly:!0})],p.prototype,"view",void 0),s.__decorate([c.property({readOnly:!0})],p.prototype,"drapeSourceType",void 0),p=s.__decorate([d.subclass("DrapedVisualElementLayerView")],p),e.DrapedVisualElementResources=_,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
