/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Graphic","../../core/Accessor","../../core/arrayUtils","../../core/byteSizeEstimations","../../core/Collection","../../core/collectionUtils","../../core/Handles","../../core/Logger","../../core/LRUCache","../../core/maybe","../../core/memoize","../../core/reactiveUtils","../../core/unitUtils","../../core/accessorSupport/decorators/aliasOf","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../layers/support/ElevationQueryTileCache","../../properties/defaultUnit","./ElevationProfileController","./ElevationProfileLineGround","./elevationProfileLineTypes","./ElevationProfileTool","./support/constants","./support/geometryUtils","./support/ProfileGenerationError","./support/profileUtils","./support/statisticsUtils"],(function(e,t,r,o,i,n,l,s,a,c,p,u,d,h,f,y,_,v,m,g,E,P,S,b,U,C,w,k,O,T,G){"use strict";const L=c.getLogger("esri.widgets.ElevationProfile.ElevationProfileViewModel");let M=function(t){function r(e){var r;return(r=t.call(this,e)||this).view=null,r.input=null,r._getEffectiveUnitsMemoized=d.memoize(((e,t)=>({distance:e,elevation:t}))),r.geodesicDistanceThreshold=1e5,r.hoveredChartPosition=null,r.uniformChartScaling=!1,r.highlightEnabled=!0,r.defaultUnit=null,r.queue=null,r._currentTileCache=null,r.error=null,r._handles=new a,r._defaultProfileLineGround=new b,r._userUnitOptions=null,r._userUnit=null,null!=e&&e.profiles||(r.profiles=new l([r._defaultProfileLineGround])),r}e._inheritsLoose(r,t);var o=r.prototype;return o.initialize=function(){this._handles.add(h.watch((()=>this.view),(e=>{var t;u.isNone(e)?L.warnOnce("no view. Widget will be disabled until a view is provided."):this.queue=T.createProfileQueue("3d"===e.type?null==(t=e.resourceController)?void 0:t.scheduler:void 0)}),h.syncAndInitial)),this.tool=new C.ElevationProfileTool({viewModel:this}),this._controller=new S.ElevationProfileController({viewModel:this})},o.destroy=function(){this._handles=u.destroyMaybe(this._handles),this._defaultProfileLineGround=u.destroyMaybe(this._defaultProfileLineGround),this._controller=u.destroyMaybe(this._controller),this._currentTileCache=u.destroyMaybe(this._currentTileCache),this.tool=u.destroyMaybe(this.tool),this.queue=u.destroyMaybe(this.queue)},o.start=function(e){this.tool.interaction.start(e)},o.stop=function(){this.tool.interaction.stop()},o.cancel=function(){this.tool.interaction.cancel()},o.clear=function(){this.tool.interaction.clear()},o._findSelectableUnit=function(e,t){const r=this.unitOptions;return u.isSome(e)&&-1!==r.indexOf(e)?e:t?this._findSelectableUnit(t):r[0]},o._filteredOrAllUnits=function(e){const t=(u.isSome(e)?e:[]).filter((e=>-1!==f.measurementLengthUnits.indexOf(e)));return 0===t.length?f.measurementLengthUnits.slice():t},e._createClass(r,[{key:"profiles",set:function(e){const t=this._get("profiles"),r=null!=e?e:new l;this._set("profiles",s.referenceSetter(r,t))}},{key:"state",get:function(){const e=this.view;return u.isSome(e)&&e.ready?this.tool.state:w.ElevationProfileState.Disabled}},{key:"progress",get:function(){let e=0,t=0;for(const r of this.visibleProfiles)e++,t+=r.progress;return e>0?t/e:0}},{key:"unitOptions",get:function(){return this._filteredOrAllUnits(this._userUnitOptions)},set:function(e){this._userUnitOptions=e,this._set("unitOptions",this._filteredOrAllUnits(this._userUnitOptions))}},{key:"unit",get:function(){return this._userUnit?(this._userUnit=this._findSelectableUnit(this._userUnit,this.defaultUnit),this._userUnit):this._findSelectableUnit(this.defaultUnit)},set:function(e){this._userUnit=e?this._findSelectableUnit(e,this._userUnit):null,this.notifyChange("unit")}},{key:"effectiveUnits",get:function(){const e=G.getBoundsInMeters(this.visibleProfiles.map((e=>e.result))),t=f.preferredLengthUnit(e.maxDistance,"meters",this.unit),r=f.preferredVerticalLengthUnit(e.maxElevation,"meters",this.unit);return this._getEffectiveUnitsMemoized(t,r)}},{key:"hasVertices",get:function(){const e=u.applySome(this.input,(e=>e.geometry));return k.isPolyline(e)&&e.paths.reduce(((e,t)=>e+t.length),0)>0}},{key:"hoveredPoints",get:function(){return!u.isNone(this.input)&&this.visible&&this.tool.editable?this.visibleProfiles.map((e=>{const t=e.hoveredPoint;return u.isSome(t)?{hoveredPoint:t,color:e.color}:null})).filter(u.isSome):[]}},{key:"statistics",get:function(){return G.mergeStatistics(this.visibleProfiles.map((e=>e.statistics)))}},{key:"chartData",get:function(){if(u.isNone(this.input))return null;const{effectiveUnits:e,progress:t,statistics:r,visibleProfiles:o,uniformChartScaling:i}=this,n=o.filter((e=>e.hasZ)).map((e=>({id:e.id,type:e.type,title:e.title,color:e.color,samples:e.samples,progress:e.progress,chartFillEnabled:e.chartFillEnabled,chartStrokeWidth:e.chartStrokeWidth,chartStrokeOffsetY:e.chartStrokeOffsetY,viewVisualizationEnabled:e.viewVisualizationEnabled})));return 0===n.length?null:{lines:n,effectiveUnits:e,statistics:r,refined:1===t,dynamicElevationRange:o.some((e=>"view"===e.type)),uniformScaling:i}}},{key:"visibleProfiles",get:function(){return this.profiles.toArray().filter((e=>e.available&&e.visible))}},{key:"minDemResolutions",get:function(){const e=[];for(const{minDemResolution:t}of this.visibleProfiles)u.isSome(t)&&e.push(t);return e}},{key:"minDemResolution",get:function(){return i.min(this.minDemResolutions)}},{key:"errorState",get:function(){const e=u.applySome(this.input,(e=>e.geometry));if(!k.isValidInputPath(e))return w.ElevationProfileErrorState.NoValidInput;if(u.isSome(this.error)){if(O.isProfileGenerationError(this.error))switch(this.error.cause){case O.ProfileGenerationErrorCause.TooComplex:return w.ElevationProfileErrorState.TooComplex;case O.ProfileGenerationErrorCause.InvalidGeometry:return w.ElevationProfileErrorState.InvalidGeometry;case O.ProfileGenerationErrorCause.InvalidElevationInfo:return w.ElevationProfileErrorState.InvalidElevationInfo;case O.ProfileGenerationErrorCause.ElevationQueryError:return w.ElevationProfileErrorState.NoValidInput}return w.ElevationProfileErrorState.UnknownError}return 0===this.visibleProfiles.length?w.ElevationProfileErrorState.NoVisibleProfiles:u.isNone(this.chartData)&&1===this.progress?w.ElevationProfileErrorState.RefinedButNoChartData:w.ElevationProfileErrorState.None}},{key:"tileCache",get:function(){this._currentTileCache=u.destroyMaybe(this._currentTileCache);const e=this.view;if(u.isSome(e)&&"3d"===(null==e?void 0:e.type)){var t;const r=null==(t=e.basemapTerrain)?void 0:t.elevationQueryCache;if(u.isSome(r))return r}return u.isNone(this._currentTileCache)&&(this._currentTileCache=new E.ElevationQueryTileCache(new p(20*n.ByteSizeUnit.MEGABYTES))),this._currentTileCache}},{key:"inputIsSketched",get:function(){return this.tool.interaction.isSketchedGraphic(this.input)}},{key:"elevationProvider",get:function(){const e=this.view;return u.isSome(e)&&"3d"===e.type?e.elevationProvider:null}}]),r}(o);t.__decorate([m.property()],M.prototype,"view",void 0),t.__decorate([m.property({type:r})],M.prototype,"input",void 0),t.__decorate([m.property({type:U.ElevationProfileLineCollection,nonNullable:!0})],M.prototype,"profiles",null),t.__decorate([m.property({readOnly:!0})],M.prototype,"state",null),t.__decorate([m.property({readOnly:!0})],M.prototype,"progress",null),t.__decorate([m.property()],M.prototype,"unitOptions",null),t.__decorate([m.property()],M.prototype,"unit",null),t.__decorate([m.property({readOnly:!0})],M.prototype,"effectiveUnits",null),t.__decorate([m.property({type:Number})],M.prototype,"geodesicDistanceThreshold",void 0),t.__decorate([m.property()],M.prototype,"hoveredChartPosition",void 0),t.__decorate([m.property()],M.prototype,"uniformChartScaling",void 0),t.__decorate([y.aliasOf("tool.highlightEnabled")],M.prototype,"highlightEnabled",void 0),t.__decorate([m.property({readOnly:!0})],M.prototype,"hoveredPoints",null),t.__decorate([m.property({readOnly:!0})],M.prototype,"statistics",null),t.__decorate([m.property()],M.prototype,"chartData",null),t.__decorate([m.property()],M.prototype,"visibleProfiles",null),t.__decorate([m.property()],M.prototype,"minDemResolutions",null),t.__decorate([m.property({readOnly:!0})],M.prototype,"minDemResolution",null),t.__decorate([m.property({readOnly:!0})],M.prototype,"errorState",null),t.__decorate([m.property(P.defaultUnitPropertyMetadata)],M.prototype,"defaultUnit",void 0),t.__decorate([m.property()],M.prototype,"queue",void 0),t.__decorate([m.property()],M.prototype,"tileCache",null),t.__decorate([m.property()],M.prototype,"tool",void 0),t.__decorate([y.aliasOf("tool.visible")],M.prototype,"visible",void 0),t.__decorate([m.property()],M.prototype,"error",void 0),t.__decorate([m.property()],M.prototype,"inputIsSketched",null),t.__decorate([m.property()],M.prototype,"elevationProvider",null),t.__decorate([m.property()],M.prototype,"_defaultProfileLineGround",void 0),t.__decorate([m.property()],M.prototype,"_userUnitOptions",void 0),t.__decorate([m.property()],M.prototype,"_controller",void 0),t.__decorate([m.property()],M.prototype,"_userUnit",void 0),M=t.__decorate([g.subclass("esri.widgets.ElevationProfile.ElevationProfileViewModel")],M);return M}));
