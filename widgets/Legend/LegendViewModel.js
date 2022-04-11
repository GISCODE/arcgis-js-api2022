/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../intl","../../core/Accessor","../../core/Collection","../../core/Handles","../../core/watchUtils","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./support/ActiveLayerInfo","../../intl/locale"],(function(e,i,t,r,s,a,n,o,l,y,d,c,h,L){"use strict";const u={state:"state",view:"view",allLayerViews:"all-layer-views",legendProperties:"legend-properties"},_=s.ofType(h),f=["esri.layers.BuildingSceneLayer","esri.layers.CSVLayer","esri.layers.FeatureLayer","esri.layers.GeoJSONLayer","esri.layers.GeoRSSLayer","esri.layers.GroupLayer","esri.layers.HeatmapLayer","esri.layers.ImageryLayer","esri.layers.ImageryTileLayer","esri.layers.MapImageLayer","esri.layers.OGCFeatureLayer","esri.layers.PointCloudLayer","esri.layers.StreamLayer","esri.layers.SceneLayer","esri.layers.TileLayer","esri.layers.VoxelLayer","esri.layers.WFSLayer","esri.layers.WMSLayer","esri.layers.WMTSLayer","esri.layers.WCSLayer"],p="view.basemapView.baseLayerViews",v="view.groundView.layerViews",w="view.basemapView.referenceLayerViews",I=[p,v,"view.layerViews",w];let V=function(i){function t(e){var t;return(t=i.call(this,e)||this)._handles=new a,t._layerViewByLayerId={},t._layerInfosByLayerViewId={},t._activeLayerInfosByLayerViewId={},t._activeLayerInfosWithNoParent=new s,t.activeLayerInfos=new _,t.basemapLegendVisible=!1,t.groundLegendVisible=!1,t.hideLayersNotInCurrentView=!1,t.keepCacheOnDestroy=!1,t.respectLayerVisibility=!0,t.layerInfos=[],t.view=null,t}e._inheritsLoose(t,i);var r=t.prototype;return r.initialize=function(){this._handles.add(n.init(this,"view",this._viewHandles),u.view),this._handles.add(L.onLocaleChange((()=>this._refresh())))},r.destroy=function(){this._destroyViewActiveLayerInfos(),this._handles.destroy(),this._handles=null,this.view=null},r._viewHandles=function(){this._handles.remove(u.state),this.view&&this._handles.add(n.init(this,"state",this._stateHandles),u.state)},r._stateHandles=function(){this._resetAll(),"ready"===this.state&&this._watchPropertiesAndAllLayerViews()},r._resetAll=function(){this._handles.remove([u.allLayerViews,u.legendProperties]),this._destroyViewActiveLayerInfos(),this.activeLayerInfos.removeAll()},r._destroyViewActiveLayerInfos=function(){Object.keys(this._activeLayerInfosByLayerViewId).forEach(this._destroyViewActiveLayerInfo,this)},r._destroyViewActiveLayerInfo=function(e){this._handles.remove(e);const i=this._activeLayerInfosByLayerViewId[e];delete this._activeLayerInfosByLayerViewId[e],i&&i.parent&&i.parent.children.remove(i)},r._watchPropertiesAndAllLayerViews=function(){const{allLayerViews:e}=this.view;e.length&&this._refresh(),this._handles.add(e.on("change",this._allLayerViewsChangeHandle.bind(this)),u.allLayerViews),this._handles.add(n.watch(this,"layerInfos, basemapLegendVisible, groundLegendVisible",this._propertiesChangeHandle.bind(this)),u.legendProperties)},r._allLayerViewsChangeHandle=function(e){e.removed.forEach((e=>this._destroyViewActiveLayerInfo(e.uid))),this._refresh()},r._propertiesChangeHandle=function(){this._destroyViewActiveLayerInfos(),this._refresh()},r._refresh=function(){this._layerInfosByLayerViewId={},this.activeLayerInfos.removeAll(),this._generateLayerViews().filter(this._filterLayerViewsByLayerInfos,this).filter(this._isLayerViewSupported,this).forEach(this._generateActiveLayerInfo,this),this._sortActiveLayerInfos(this.activeLayerInfos)},r._sortActiveLayerInfos=function(e){if(e.length<2)return;const i=[];e.forEach((t=>{if(!t.parent){const r=t.layer.parent,s=r&&"uid"in r&&this._layerViewByLayerId[r.uid],a=s&&this._activeLayerInfosByLayerViewId[s.uid];a&&-1!==e.indexOf(a)&&(i.push(t),t.parent=a,a.children.add(t),this._sortActiveLayerInfos(a.children))}})),e.removeMany(i);const t={};this.view.allLayerViews.forEach(((e,i)=>t[e.layer.uid]=i)),e.sort(((e,i)=>{const r=t[e.layer.uid]||0;return(t[i.layer.uid]||0)-r}))},r._generateLayerViews=function(){const e=[];return I.filter(this._filterLayerViews,this).map(this.get,this).filter((e=>null!=e)).forEach(this._collectLayerViews("layerViews",e)),e},r._filterLayerViews=function(e){const i=!this.basemapLegendVisible&&(e===p||e===w),t=!this.groundLegendVisible&&e===v;return!i&&!t},r._collectLayerViews=function(e,i){const t=r=>(r&&r.forEach((r=>{i.push(r),t(r[e])})),i);return t},r._filterLayerViewsByLayerInfos=function(e){const i=this.layerInfos;return!i||!i.length||i.some((i=>this._hasLayerInfo(i,e)))},r._hasLayerInfo=function(e,i){const t=this._isLayerUIDMatching(e.layer,i.layer.uid);return t&&(this._layerInfosByLayerViewId[i.uid]=e),t},r._isLayerUIDMatching=function(e,i){return e&&(e.uid===i||this._hasLayerUID(e.layers,i))},r._hasLayerUID=function(e,i){return e&&e.some((e=>this._isLayerUIDMatching(e,i)))},r._isLayerViewSupported=function(e){return!!f.includes(e.layer.declaredClass)&&(this._layerViewByLayerId[e.layer.uid]=e,!0)},r._generateActiveLayerInfo=function(e){this._isLayerActive(e)?this._buildActiveLayerInfo(e):(this._handles.remove(e.uid),this._handles.add(n.watch(e,"legendEnabled, layer.legendEnabled",(()=>this._layerActiveHandle(e))),e.uid))},r._layerActiveHandle=function(e){this._isLayerActive(e)&&(this._handles.remove(e.uid),this._buildActiveLayerInfo(e))},r._isLayerActive=function(e){return!this.respectLayerVisibility||e.legendEnabled&&e.get("layer.legendEnabled")},r._buildActiveLayerInfo=function(e){var i;const t=e.layer,r=e.uid,s=this._layerInfosByLayerViewId[r];let a=this._activeLayerInfosByLayerViewId[r];if(!a){const i=s&&void 0!==s.title&&s.layer.uid===t.uid;a=new h({layer:t,layerView:e,title:i?s.title:t.title,view:this.view,respectLayerVisibility:this.respectLayerVisibility,hideLayersNotInCurrentView:this.hideLayersNotInCurrentView,keepCacheOnDestroy:this.keepCacheOnDestroy,sublayerIds:s&&s.sublayerIds||[]}),this._activeLayerInfosByLayerViewId[r]=a}const o=t.parent&&"uid"in t.parent&&this._layerViewByLayerId[null==(i=t.parent)?void 0:i.uid];if(a.parent=this._activeLayerInfosByLayerViewId[null==o?void 0:o.uid],!this._handles.has(r)){const i=[n.watch(t,"title",(e=>this._titleHandle(e,a))),n.watch(t,"renderer?, opacity, pointSymbol?, lineSymbol?, polygonSymbol?",(()=>this._constructLegendElements(a))),n.whenTrue(this.view,"stationary",(()=>this._scaleHandle(a))),n.watch(e,"_effectiveRenderer",(()=>this._constructLegendElements(a))),n.watch(t,"effect",(()=>this._constructLegendElements(a)))];if(this.respectLayerVisibility){const r=n.watch(e,"legendEnabled",(e=>this._legendEnabledHandle(e,a))),s=n.watch(t,"legendEnabled",(e=>this._legendEnabledHandle(e,a)));i.push(r,s)}this._handles.add(i,r)}a.isScaleDriven||this._constructLegendElements(a),this._addActiveLayerInfo(a)},r._titleHandle=function(e,i){i.title=e,this._constructLegendElements(i)},r._legendEnabledHandle=function(e,i){e?this._addActiveLayerInfo(i):this._removeActiveLayerInfo(i)},r._scaleHandle=function(e){(e.isScaleDriven||e.hideLayersNotInCurrentView)&&this._constructLegendElements(e)},r._addActiveLayerInfo=function(e){const{layerView:i,layer:t}=e;if(this._isLayerActive(i)&&-1===this.activeLayerInfos.indexOf(e)){const i=e.parent;if(i)-1===i.children.indexOf(e)&&i.children.push(e),this._sortActiveLayerInfos(i.children);else{var r;const i=null==(r=this.layerInfos)?void 0:r.some((e=>e.layer.uid===t.uid));t.parent&&"uid"in t.parent&&!i?this._activeLayerInfosWithNoParent.add(e):(this.activeLayerInfos.add(e),this._sortActiveLayerInfos(this.activeLayerInfos))}if(this._activeLayerInfosWithNoParent.length){const e=[];this._activeLayerInfosWithNoParent.forEach((i=>{const t=i.layer.parent,r=t&&"uid"in t&&this._layerViewByLayerId[null==t?void 0:t.uid],s=this._activeLayerInfosByLayerViewId[null==r?void 0:r.uid];s&&(e.push(i),i.parent=s)})),e.length&&(this._activeLayerInfosWithNoParent.removeMany(e),e.forEach((e=>this._addActiveLayerInfo(e))))}}},r._removeActiveLayerInfo=function(e){const i=e.parent;i?i.children.remove(e):this.activeLayerInfos.remove(e)},r._constructLegendElements=function(e){const i=e.layer;"featureCollections"in i&&i.featureCollections?e.buildLegendElementsForFeatureCollections(i.featureCollections):"renderer"in i&&i.renderer?e.buildLegendElementsForRenderer(i.renderer):"url"in i&&i.url?e.buildLegendElementsForTools():e.children.forEach((e=>this._constructLegendElements(e)))},e._createClass(t,[{key:"state",get:function(){return this.get("view.ready")?"ready":"disabled"}}]),t}(r);i.__decorate([o.property({type:_})],V.prototype,"activeLayerInfos",void 0),i.__decorate([o.property()],V.prototype,"basemapLegendVisible",void 0),i.__decorate([o.property()],V.prototype,"groundLegendVisible",void 0),i.__decorate([o.property()],V.prototype,"hideLayersNotInCurrentView",void 0),i.__decorate([o.property()],V.prototype,"keepCacheOnDestroy",void 0),i.__decorate([o.property()],V.prototype,"respectLayerVisibility",void 0),i.__decorate([o.property()],V.prototype,"layerInfos",void 0),i.__decorate([o.property({readOnly:!0})],V.prototype,"state",null),i.__decorate([o.property()],V.prototype,"view",void 0),V=i.__decorate([c.subclass("esri.widgets.Legend.LegendViewModel")],V);return V}));
