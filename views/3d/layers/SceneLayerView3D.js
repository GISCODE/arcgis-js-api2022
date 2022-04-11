/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../Graphic","../../../core/Logger","../../../core/maybe","../../../core/reactiveUtils","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../../core/sql/WhereClause","../../../layers/support/FeatureFilter","../../../rest/support/Query","./I3SMeshView3D","./II3SMeshView3D","./LayerView3D","./i3s/attributeEditing","./i3s/I3SGeometryUtil","./i3s/I3SMeshViewFilter","./i3s/I3SNode","./i3s/I3SQueryEngine","./i3s/I3SQueryFeatureAdapter","./i3s/I3SQueryFeatureStore","./i3s/I3SUtil","./support/DefinitionExpressionSceneLayerView","./support/fieldProperties","./support/PopupSceneLayerView","./support/SceneLayerViewRequiredFields","../support/updatingProperties","../../layers/SceneLayerView","../../support/floorFilterUtils","../../support/Scheduler"],(function(e,t,r,i,s,n,o,l,a,u,d,c,p,h,y,f,g,F,_,S,v,I,w,b,E,m,x,C,Q,q,V,D,L){"use strict";const O=i.getLogger("esri.views.3d.layers.SceneLayerView3D"),A=x.defineFieldProperties();let j=function(t){function i(){var e;return(e=t.apply(this,arguments)||this).type="scene-layer-3d",e.lodFactor=1,e.progressiveLoadFactor=1,e._elevationContext="scene",e._isIntegratedMesh=!1,e._supportsLabeling=!0,e._interactiveEditingSessions=new Map,e._queryEngine=null,e}e._inheritsLoose(i,t);var o=i.prototype;return o.initialize=function(){this.fieldsHelper=new Q.SceneLayerViewRequiredFields({layerView:this}),this.updatingHandles.add((()=>this.layer.rangeInfos),(e=>this._rangeInfosChanged(e)),n.initial),this.updatingHandles.add((()=>this.layer.renderer),(e=>this.updatingHandles.addPromise(this._rendererChange(e))),n.initial),this.updatingHandles.add((()=>[this.parsedDefinitionExpression,this.filter,this.floorFilterClause,this.excludeObjectIdsSorted,s.applySome(this.viewFilter,(e=>[e.parsedWhereClause,e.parsedGeometry,e.sortedObjectIds]))]),(()=>this._filterChange())),this.updatingHandles.add((()=>[this.filter,s.applySome(this.viewFilter,(e=>e.parsedGeometry))]),(()=>this._geometryFilterChange())),this.handles.add(this.layer.on("apply-edits",(e=>this.updatingHandles.addPromise(e.result)))),this.handles.add(this.layer.on("edits",(e=>this._handleEdits(e))))},o.destroy=function(){this.fieldsHelper=s.destroyMaybe(this.fieldsHelper)},o._rangeInfosChanged=function(e){null!=e&&e.length>0&&O.warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")},o.createQuery=function(){const e={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return s.isSome(this.filter)?this.filter.createQuery(e):new h(e)},o.queryExtent=function(e,t){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e),null==t?void 0:t.signal)},o.queryFeatureCount=function(e,t){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e),null==t?void 0:t.signal)},o.queryFeatures=function(e,t){return this._ensureQueryEngine().executeQuery(this._ensureQuery(e),null==t?void 0:t.signal).then((e=>{if(null==e||!e.features)return e;const t=this.layer;for(const r of e.features)r.layer=t,r.sourceLayer=t;return e}))},o.queryObjectIds=function(e,t){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e),null==t?void 0:t.signal)},o._ensureQueryEngine=function(){return this._queryEngine||(this._queryEngine=this._createQueryEngine()),this._queryEngine},o._createQueryEngine=function(){const e=_.createGetFeatureExtent(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new I.default({layerView:this,priority:L.TaskPriority.FEATURE_QUERY_ENGINE,spatialIndex:new b.default({featureAdapter:new w.I3SQueryFeatureAdapter({objectIdField:this.layer.objectIdField,attributeStorageInfo:this.layer.attributeStorageInfo,getFeatureExtent:e}),forAllFeatures:(e,t)=>this._forAllFeatures(((t,r,i)=>e({id:t,index:r,meta:i})),t,f.ForAllFeaturesVisibilityMode.ALL_IN_CLIPPING_AREA),getFeatureExtent:e,sourceSpatialReference:E.getIndexCrs(this.layer),viewSpatialReference:this.view.spatialReference})})},o.highlight=function(e){const r=this._highlights;if(e instanceof h){const{set:t,handle:i}=r.acquireSet();return this.queryObjectIds(e).then((e=>r.setFeatureIds(t,e))),i}return t.prototype.highlight.call(this,e)},o.createInteractiveEditSession=function(e){return F.createInteractiveEditSession(this.attributeEditingContext,e)},o._createLayerGraphic=function(e){const t=new r(null,null,e);return t.layer=this.layer,t.sourceLayer=this.layer,t},o.canResume=function(){return t.prototype.canResume.call(this)&&(!this._controller||this._controller.rootNodeVisible)},o.getFilters=function(){const e=t.prototype.getFilters.call(this),r=this.excludeObjectIdsSorted;return s.isSome(r)&&e.push((e=>E.objectIdFilter(r,!1,e))),this.floorFilterClause&&this.addSqlFilter(e,this.floorFilterClause,this.logError),this.addSqlFilter(e,this.parsedDefinitionExpression,this.logError),s.isSome(this.viewFilter)&&this.viewFilter.addFilters(e,this.view,this._controller.crsIndex,this._collection),e},o._ensureQuery=function(e){return this._addDefinitionExpressionToQuery(s.isNone(e)?this.createQuery():h.from(e))},o._handleEdits=function(e){F.processAttributeEdits(this.attributeEditingContext,e)},o.computeNodeFiltering=function(e){const t=this.viewFilter;return s.isNone(t)||t.isMBSGeoemtryVisible(e,this.view.spatialReference,this._controller.crsIndex)?v.NodeFilterImpact.Unmodified:v.NodeFilterImpact.Culled},e._createClass(i,[{key:"filter",get:function(){return s.isSome(this.viewFilter)?this.viewFilter.filter:null},set:function(e){!s.isNone(e)&&S.I3SMeshViewFilter.checkSupport(e)?s.isSome(this.viewFilter)?this.viewFilter.filter=e:this.viewFilter=new S.I3SMeshViewFilter({filter:e,layerFieldsIndex:this.layer.fieldsIndex,loadAsyncModule:e=>this._loadAsyncModule(e),applyFilters:()=>this._applyFilters(!0),addSqlFilter:(e,t)=>this.addSqlFilter(e,t,this.logError)}):this.viewFilter=null}},{key:"requiredFields",get:function(){var e,t;return null!=(e=null==(t=this.fieldsHelper)?void 0:t.requiredFields)?e:[]}},{key:"floorFilterClause",get:function(){const e=D.getFloorFilterClause(this);return s.isSome(e)?c.WhereClause.create(e,this.layer.fieldsIndex):null}},{key:"excludeObjectIdsSorted",get:function(){const e=this.layer.excludeObjectIds;return e.length?e.toArray().sort(((e,t)=>e-t)):null}},{key:"lodCrossfadeinDuration",get:function(){var e,t;return null!=(e=null==(t=this.view)?void 0:t.qualitySettings.sceneService["3dObject"].lodCrossfadeinDuration)?e:0}},{key:"lodCrossfadeoutDuration",get:function(){var e,t;return null!=(e=null==(t=this.view)?void 0:t.qualitySettings.sceneService["3dObject"].lodCrossfadeoutDuration)?e:0}},{key:"lodCrossfadeUncoveredDuration",get:function(){var e,t;return null!=(e=null==(t=this.view)?void 0:t.qualitySettings.sceneService["3dObject"].lodCrossfadeUncoveredDuration)?e:0}},{key:"attributeEditingContext",get:function(){return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:this._getObjectIdField(),forEachNode:e=>this._forAllNodes((t=>s.isSome(t)?e(t.node,t.featureIds):null)),attributeStorageInfo:this.i3slayer.attributeStorageInfo,attributeOverrides:this.attributeOverrides,getAttributeData:e=>this.getAttributeData(e),setAttributeData:(e,t)=>this.setAttributeData(e,t),clearMemCache:()=>this.clearMemCache()}}},{key:"hasGeometryFilter",get:function(){const e=this.viewFilter;return s.isSome(e)&&s.isSome(e.parsedGeometry)}}]),i}(y.I3SMeshView3D(m.DefinitionExpressionSceneLayerView(C.PopupSceneLayerView(g.LayerView3D(V)))));t.__decorate([o.property({aliasOf:"layer"})],j.prototype,"i3slayer",void 0),t.__decorate([o.property(q.updatingProgress)],j.prototype,"updatingProgress",void 0),t.__decorate([o.property({type:p})],j.prototype,"filter",null),t.__decorate([o.property()],j.prototype,"viewFilter",void 0),t.__decorate([o.property(A.requiredFields)],j.prototype,"requiredFields",null),t.__decorate([o.property(A.availableFields)],j.prototype,"availableFields",void 0),t.__decorate([o.property()],j.prototype,"fieldsHelper",void 0),t.__decorate([o.property()],j.prototype,"floorFilterClause",null),t.__decorate([o.property()],j.prototype,"excludeObjectIdsSorted",null),t.__decorate([o.property({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.3dObject.lodFactor"})],j.prototype,"lodFactor",void 0),t.__decorate([o.property({readOnly:!0,aliasOf:"_controller.updatingProgress"})],j.prototype,"updatingProgressValue",void 0),j=t.__decorate([d.subclass("esri.views.3d.layers.SceneLayerView3D")],j);return j}));
