/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/Evented","../../../../../core/Handles","../../../../../core/maybe","../../../../../core/promiseUtils","../../../../../core/watchUtils","../../../../../core/accessorSupport/decorators/property","../../../../../core/arrayUtils","../../../../../core/has","../../../../../core/accessorSupport/ensureType","../../../../../core/accessorSupport/decorators/subclass","../../../../../geometry/SpatialReference","../../../../../layers/graphics/data/FeatureStore","../../../../../layers/graphics/data/QueryEngine","../../../../../layers/support/TileInfo","../../../../../layers/support/TimeInfo","../../../../../rest/support/Query","./FeatureServiceTiledFetcher","./FeatureServiceTileStore","../../../../support/WatchUpdatingTracking"],(function(e,t,r,i,n,a,o,s,u,c,p,l,d,f,h,y,g,S,v,m,F,I){"use strict";function w(){return new e.FeatureServiceSnappingSourceWorker}e.FeatureServiceSnappingSourceWorker=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).isInitializing=!0,t.whenSetup=o.createDeferred(),t.handles=new n,t.updatingHandles=new I.WatchUpdatingTracking,t.pendingApplyEdits=new Map,t}t._inheritsLoose(r,e);var i=r.prototype;return i.destroy=function(){this.featureFetcher.destroy(),this.queryEngine.destroy(),this.featureStore.clear(),this.handles.destroy()},i.setup=function(){var e=t._asyncToGenerator((function*(e){const{geometryType:t,objectIdField:r,timeInfo:i,fields:n}=e.serviceInfo;return this.featureStore=new h({...e.serviceInfo,hasZ:!1,hasM:!1}),this.queryEngine=new y.default({spatialReference:e.spatialReference,featureStore:this.featureStore,geometryType:t,fields:n,hasZ:!1,hasM:!1,objectIdField:r,timeInfo:i?S.fromJSON(i):null}),this.featureFetcher=new m.FeatureServiceTiledFetcher({store:new F.FeatureServiceTileStore({featureStore:this.featureStore}),url:e.serviceInfo.url,objectIdField:e.serviceInfo.objectIdField,globalIdField:e.serviceInfo.globalIdField,capabilities:e.serviceInfo.capabilities,spatialReference:f.fromJSON(e.spatialReference),sourceSpatialReference:f.fromJSON(e.serviceInfo.spatialReference)}),this.handles.add([this.featureFetcher.watch("availability",(e=>this.emit("notify-availability",{availability:e})),!0),this.watch("updating",(()=>this._notifyUpdating()))]),this.whenSetup.resolve(),this.isInitializing=!1,this.configure(e.configuration)}));function r(t){return e.apply(this,arguments)}return r}(),i.configure=function(){var e=t._asyncToGenerator((function*(e){return yield this.updatingHandles.addPromise(this.whenSetup.promise),this._updateFeatureFetcherConfiguration(e),{result:{}}}));function r(t){return e.apply(this,arguments)}return r}(),i.fetchCandidates=function(){var e=t._asyncToGenerator((function*(e,t){yield this.whenSetup.promise,o.throwIfAborted(t);return{result:yield this.queryEngine.executeQueryForSnapping({point:e.point,distance:e.distance,types:e.types,query:a.isSome(e.filter)?e.filter:{where:"1=1"}},a.isSome(t)?t.signal:null)}}));function r(t,r){return e.apply(this,arguments)}return r}(),i.updateTiles=function(){var e=t._asyncToGenerator((function*(e,t){return yield this.updatingHandles.addPromise(this.whenSetup.promise),o.throwIfAborted(t),this.featureFetcher.tileSize=e.tileSize,this.featureFetcher.tilesOfInterest=e.tiles,this.featureFetcher.tileInfo=a.isSome(e.tileInfo)?g.fromJSON(e.tileInfo):null,{result:{}}}));function r(t,r){return e.apply(this,arguments)}return r}(),i.refresh=function(){var e=t._asyncToGenerator((function*(e,t){return yield this.updatingHandles.addPromise(this.whenSetup.promise),o.throwIfAborted(t),this.featureFetcher.refresh(),{result:{}}}));function r(t,r){return e.apply(this,arguments)}return r}(),i.whenNotUpdating=function(){var e=t._asyncToGenerator((function*(e,t){return yield this.updatingHandles.addPromise(this.whenSetup.promise),o.throwIfAborted(t),yield o.whenOrAbort(s.whenNotOnce(this,"updating"),t),{result:{}}}));function r(t,r){return e.apply(this,arguments)}return r}(),i.getDebugInfo=function(){var e=t._asyncToGenerator((function*(e,t){return o.throwIfAborted(t),{result:this.featureFetcher.debugInfo}}));function r(t,r){return e.apply(this,arguments)}return r}(),i.beginApplyEdits=function(){var e=t._asyncToGenerator((function*(e,t){this.updatingHandles.addPromise(this.whenSetup.promise),o.throwIfAborted(t);const r=o.createDeferred();return this.pendingApplyEdits.set(e.id,r),this.featureFetcher.applyEdits(r.promise),this.updatingHandles.addPromise(r.promise),{result:{}}}));function r(t,r){return e.apply(this,arguments)}return r}(),i.endApplyEdits=function(){var e=t._asyncToGenerator((function*(e,t){const r=this.pendingApplyEdits.get(e.id);return r&&r.resolve(e.edits),o.throwIfAborted(t),{result:{}}}));function r(t,r){return e.apply(this,arguments)}return r}(),i._updateFeatureFetcherConfiguration=function(e){this.featureFetcher.filter=a.isSome(e.filter)?v.fromJSON(e.filter):null,this.featureFetcher.customParameters=e.customParameters},i._notifyUpdating=function(){this.emit("notify-updating",{updating:this.updating})},t._createClass(r,[{key:"updating",get:function(){return this.featureFetcher.updating||this.isInitializing||this.updatingHandles.updating}}]),r}(i.EventedAccessor),r.__decorate([u.property({readOnly:!0})],e.FeatureServiceSnappingSourceWorker.prototype,"updating",null),r.__decorate([u.property()],e.FeatureServiceSnappingSourceWorker.prototype,"isInitializing",void 0),e.FeatureServiceSnappingSourceWorker=r.__decorate([d.subclass("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],e.FeatureServiceSnappingSourceWorker),e.default=w,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));