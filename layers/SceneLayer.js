/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["require","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../PopupTemplate","../renderers/ClassBreaksRenderer","../renderers/DictionaryRenderer","../renderers/DotDensityRenderer","../renderers/HeatmapRenderer","../renderers/Renderer","../renderers/SimpleRenderer","../renderers/UniqueValueRenderer","../renderers/support/jsonUtils","../renderers/support/types","../request","../core/Collection","../core/Error","../core/Logger","../core/maybe","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/reactiveUtils","../core/urlUtils","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/utils","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass","../core/accessorSupport/PropertyOrigin","./Layer","./mixins/APIKeyMixin","./mixins/ArcGISService","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/ScaleRangeLayer","./mixins/SceneService","./support/capabilities","./support/commonProperties","./support/FeatureReduction","./support/FeatureReductionSelection","./support/FetchAssociatedFeatureLayer","./support/fieldProperties","./support/FieldsIndex","./support/fieldUtils","./support/I3SLayerDefinitions","./support/LabelClass","./support/labelingInfo","./support/LayerFloorInfo","./support/RangeInfo","../renderers/support/styleUtils","../rest/support/Query","../support/popupUtils","../webdoc/support/opacityUtils"],(function(e,t,r,o,i,n,s,a,p,l,d,c,u,y,f,h,g,m,_,v,b,I,S,L,w,F,O,T,P,E,x,j,A,D,R,U,k,N,q,G,Q,C,V,M,K,z,$,W,B,H,J,Z,X,Y){"use strict";const ee=["3DObject","Point"],te=g.getLogger("esri.layers.SceneLayer"),re=V.defineFieldProperties();let oe=function(r){function o(...e){var t;return(t=r.call(this,...e)||this).featureReduction=null,t.rangeInfos=null,t.operationalLayerType="ArcGISSceneServiceLayer",t.type="scene",t.fields=null,t.floorInfo=null,t.outFields=null,t.nodePages=null,t.materialDefinitions=null,t.textureSetDefinitions=null,t.geometryDefinitions=null,t.serviceUpdateTimeStamp=null,t.excludeObjectIds=new f,t.definitionExpression=null,t.path=null,t.labelsVisible=!0,t.labelingInfo=null,t.legendEnabled=!0,t.cachedDrawingInfo={color:!1},t.popupEnabled=!0,t.popupTemplate=null,t.objectIdField=null,t.globalIdField=null,t._fieldUsageInfo={},t.screenSizePerspectiveEnabled=!0,t}t._inheritsLoose(o,r);var i=o.prototype;return i.normalizeCtorArgs=function(e,t){return"string"==typeof e?{url:e,...t}:e},i.getField=function(e){return this.fieldsIndex.get(e)},i.getFieldDomain=function(e,t){var r,o,i,n;const s=null==(r=this.getFeatureType(null==t?void 0:t.feature))||null==(o=r.domains)?void 0:o[e];return s&&"inherited"!==s.type?s:null!=(i=null==(n=this.getField(e))?void 0:n.domain)?i:null},i.getFeatureType=function(e){return e&&m.isSome(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null},i.readNodePages=function(e,t,r){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:z.I3SNodePageDefinition.fromJSON(e,r)},i.readCachedDrawingInfo=function(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e},i.readObjectIdField=function(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeOID"===t.type&&(e=t.name),!!e))),e||void 0},i.readGlobalIdField=function(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e))),e||void 0},i.readProfile=function(e,t){const r=t.store.profile;return null!=r&&ie[r]?ie[r]:(te.error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")},i.load=function(e){const t=m.isSome(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(v.throwIfAbortError).then((()=>this._fetchService(t))).then((()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t)]))).then((()=>this._validateElevationInfo())).then((()=>this._applyAssociatedLayerOverrides())).then((()=>this._populateFieldUsageInfo())).then((()=>J.loadStyleRenderer(this,{origin:"service"},t))).then((()=>K.fixRendererFields(this.renderer,this.fieldsIndex))).then((()=>this.finishLoadEditablePortalLayer(e)));return this.addResolvingPromise(r),Promise.resolve(this)},i.createQuery=function(){const e=new Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e},i.queryExtent=function(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))},i.queryFeatureCount=function(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))},i.queryFeatures=function(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=this,t.sourceLayer=this;return e}))},i.queryObjectIds=function(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))},i.queryAttachments=function(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryAttachments(e,t)))},i.getFieldUsageInfo=function(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(te.error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)},i.createPopupTemplate=function(e){return X.createPopupTemplate(this,e)},i._getAssociatedLayerForQuery=function(){const e=this.associatedLayer;return m.isSome(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()},i._loadAssociatedLayerForQuery=function(){var e=t._asyncToGenerator((function*(){if(yield this.load(),m.isNone(this.associatedLayer))throw new h("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{yield this.associatedLayer.load()}catch(e){throw new h("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}));function r(){return e.apply(this,arguments)}return r}(),i.hasCachedStatistics=function(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((t=>t.name===e))},i.queryCachedStatistics=function(){var e=t._asyncToGenerator((function*(e,t){if(yield this.load(t),!this.statisticsInfo)throw new h("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new h("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const o of this.statisticsInfo)if(o.name===r.name){const e=I.join(this.parsedUrl.path,o.href);return y(e,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new h("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}));function r(t,r){return e.apply(this,arguments)}return r}(),i.saveAs=function(){var e=t._asyncToGenerator((function*(e,t){return this._debouncedSaveOperations(k.SaveOperationType.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}));function r(t,r){return e.apply(this,arguments)}return r}(),i.save=function(){var e=t._asyncToGenerator((function*(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(k.SaveOperationType.SAVE,e)}));function r(){return e.apply(this,arguments)}return r}(),i.applyEdits=function(){var r=t._asyncToGenerator((function*(t,r){const o=yield new Promise(((t,r)=>e(["./graphics/editingSupport"],t,r)));if(yield this.load(),m.isNone(this.associatedLayer))throw new h(`${this.type}-layer:not-editable`,"Service is not editable");return yield this.associatedLayer.load(),o.applyEdits(this,this.associatedLayer.source,t,r)}));function o(e,t){return r.apply(this,arguments)}return o}(),i.on=function(e,t){return r.prototype.on.call(this,e,t)},i.validateLayer=function(e){if(e.layerType&&-1===ee.indexOf(e.layerType))throw new h("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new h("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new h("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});function t(e,t){let r=!1,o=!1;if(null==e)r=!0,o=!0;else{const i=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":r=!0,o=i;break;case"vertex-reference-frame":r=!0,o=!i;break;default:r=!1}}if(!r)throw new h("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!o)throw new h("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}t(this.normalReferenceFrame,this.spatialReference)},i._getTypeKeywords=function(){const e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new h("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e},i._populateFieldUsageInfo=function(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some((t=>t.name===e.name))),r=!!(m.isSome(this.associatedLayer)&&this.associatedLayer.fields&&this.associatedLayer.fields.some((t=>t&&e.name===t.name))),o={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||r,supportsLayerQuery:r};this._fieldUsageInfo[e.name]=o}},i._applyAssociatedLayerOverrides=function(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides()},i._applyAssociatedLayerFieldsOverrides=function(){if(m.isNone(this.associatedLayer)||!this.associatedLayer.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)},i._applyAssociatedLayerPopupOverrides=function(){if(m.isNone(this.associatedLayer))return;const e=["popupTemplate","popupEnabled"],t=F.getProperties(this);for(let r=0;r<e.length;r++){const o=e[r],i=this.originIdOf(o),n=this.associatedLayer.originIdOf(o);i<n&&(n===E.OriginId.SERVICE||n===E.OriginId.PORTAL_ITEM)&&t.setAtOrigin(o,this.associatedLayer[o],n)}},i._setAssociatedFeatureLayer=function(){var e=t._asyncToGenerator((function*(e){if(-1===["mesh-pyramids","points"].indexOf(this.profile))return;const t=new C.FetchAssociatedFeatureLayer(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedLayer=yield t.fetch()}catch(r){v.isAbortError(r)||this._logWarningOnPopupEnabled()}}));function r(t){return e.apply(this,arguments)}return r}(),i._logWarningOnPopupEnabled=function(){var e=t._asyncToGenerator((function*(){yield b.whenOnce((()=>this.popupEnabled&&null!=this.popupTemplate));const e=`this SceneLayer: ${this.title}`;null==this.attributeStorageInfo?te.warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):te.info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}));function r(){return e.apply(this,arguments)}return r}(),i._validateElevationInfo=function(){const e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"absolute-height"!==e.mode&&te.warn(".elevationInfo=","Mesh scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&te.warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))},t._createClass(o,[{key:"types",get:function(){return m.isSome(this.associatedLayer)?this.associatedLayer.types:[]}},{key:"typeIdField",get:function(){return m.isSome(this.associatedLayer)?this.associatedLayer.typeIdField:null}},{key:"formTemplate",get:function(){return m.isSome(this.associatedLayer)?this.associatedLayer.formTemplate:null}},{key:"fieldsIndex",get:function(){return new M(this.fields)}},{key:"elevationInfo",set:function(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}},{key:"geometryType",get:function(){return ne[this.profile]||"mesh"}},{key:"renderer",set:function(e){K.fixRendererFields(e,this.fieldsIndex),this._set("renderer",e)}},{key:"capabilities",get:function(){const e=m.isSome(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:N.zeroCapabilities,{query:t,editing:{supportsGlobalId:r,supportsRollbackOnFailure:o,supportsUploadWithItemId:i,supportsReturnServiceEditsInSourceSpatialReference:n},data:{supportsZ:s,supportsM:a,isVersioned:p,supportsAttachment:l},operations:{supportsEditing:d,supportsUpdate:c,supportsQuery:u,supportsQueryAttachments:y}}=e,f=e.operations.supportsChangeTracking;return{query:t,editing:{supportsGlobalId:r,supportsReturnServiceEditsInSourceSpatialReference:n,supportsRollbackOnFailure:o,supportsGeometryUpdate:!1,supportsUploadWithItemId:i},data:{supportsAttachment:l,supportsZ:s,supportsM:a,isVersioned:p},operations:{supportsQuery:u,supportsQueryAttachments:y,supportsEditing:d&&f,supportsAdd:!1,supportsDelete:!1,supportsUpdate:c&&f}}}},{key:"editingEnabled",get:function(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges},set:function(e){null!=e?this._override("editingEnabled",e):this._clearOverride("editingEnabled")}},{key:"defaultPopupTemplate",get:function(){return m.isSome(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}},{key:"displayField",get:function(){return m.isSome(this.associatedLayer)?this.associatedLayer.displayField:null}}]),o}(k.SceneService(A.ArcGISService(D.OperationalLayer(R.PortalLayer(U.ScaleRangeLayer(_.MultiOriginJSONMixin(j.APIKeyMixin(x))))))));r.__decorate([S.property({types:{key:"type",base:G.default,typeMap:{selection:Q}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],oe.prototype,"featureReduction",void 0),r.__decorate([S.property({type:[H.default],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],oe.prototype,"rangeInfos",void 0),r.__decorate([S.property({json:{read:!1}})],oe.prototype,"associatedLayer",void 0),r.__decorate([S.property({type:["show","hide"]})],oe.prototype,"listMode",void 0),r.__decorate([S.property({type:["ArcGISSceneServiceLayer"]})],oe.prototype,"operationalLayerType",void 0),r.__decorate([S.property({json:{read:!1},readOnly:!0})],oe.prototype,"type",void 0),r.__decorate([S.property({...re.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],oe.prototype,"fields",void 0),r.__decorate([S.property()],oe.prototype,"types",null),r.__decorate([S.property()],oe.prototype,"typeIdField",null),r.__decorate([S.property()],oe.prototype,"formTemplate",null),r.__decorate([S.property({readOnly:!0})],oe.prototype,"fieldsIndex",null),r.__decorate([S.property({type:B,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],oe.prototype,"floorInfo",void 0),r.__decorate([S.property(re.outFields)],oe.prototype,"outFields",void 0),r.__decorate([S.property({type:z.I3SNodePageDefinition,readOnly:!0,json:{read:!1}})],oe.prototype,"nodePages",void 0),r.__decorate([T.reader("service","nodePages",["nodePages","pointNodePages"])],oe.prototype,"readNodePages",null),r.__decorate([S.property({type:[z.I3SMaterialDefinition],readOnly:!0})],oe.prototype,"materialDefinitions",void 0),r.__decorate([S.property({type:[z.I3STextureSetDefinition],readOnly:!0})],oe.prototype,"textureSetDefinitions",void 0),r.__decorate([S.property({type:[z.I3SGeometryDefinition],readOnly:!0})],oe.prototype,"geometryDefinitions",void 0),r.__decorate([S.property({readOnly:!0})],oe.prototype,"serviceUpdateTimeStamp",void 0),r.__decorate([S.property({readOnly:!0})],oe.prototype,"attributeStorageInfo",void 0),r.__decorate([S.property({readOnly:!0})],oe.prototype,"statisticsInfo",void 0),r.__decorate([S.property({type:f.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],oe.prototype,"excludeObjectIds",void 0),r.__decorate([S.property({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],oe.prototype,"definitionExpression",void 0),r.__decorate([S.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],oe.prototype,"path",void 0),r.__decorate([S.property(q.elevationInfo)],oe.prototype,"elevationInfo",null),r.__decorate([S.property({type:String})],oe.prototype,"geometryType",null),r.__decorate([S.property(q.labelsVisible)],oe.prototype,"labelsVisible",void 0),r.__decorate([S.property({type:[$],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:W.reader},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:W.reader},write:!0}})],oe.prototype,"labelingInfo",void 0),r.__decorate([S.property(q.legendEnabled)],oe.prototype,"legendEnabled",void 0),r.__decorate([S.property({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){var r,o;if("number"==typeof e&&e>=0&&e<=1)return e;const i=null==(r=t.layerDefinition)||null==(o=r.drawingInfo)?void 0:o.transparency;return void 0!==i?Y.transparencyToOpacity(i):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],oe.prototype,"opacity",void 0),r.__decorate([S.property({types:u.webSceneRendererTypes,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],oe.prototype,"renderer",null),r.__decorate([S.property({json:{read:!1}})],oe.prototype,"cachedDrawingInfo",void 0),r.__decorate([T.reader("service","cachedDrawingInfo")],oe.prototype,"readCachedDrawingInfo",null),r.__decorate([S.property({readOnly:!0,json:{read:!1}})],oe.prototype,"capabilities",null),r.__decorate([S.property({type:Boolean,json:{read:!1}})],oe.prototype,"editingEnabled",null),r.__decorate([S.property(q.popupEnabled)],oe.prototype,"popupEnabled",void 0),r.__decorate([S.property({type:o,json:{name:"popupInfo",write:!0}})],oe.prototype,"popupTemplate",void 0),r.__decorate([S.property({readOnly:!0,json:{read:!1}})],oe.prototype,"defaultPopupTemplate",null),r.__decorate([S.property({type:String,json:{read:!1}})],oe.prototype,"objectIdField",void 0),r.__decorate([T.reader("service","objectIdField",["objectIdField","fields"])],oe.prototype,"readObjectIdField",null),r.__decorate([S.property({type:String,json:{read:!1}})],oe.prototype,"globalIdField",void 0),r.__decorate([T.reader("service","globalIdField",["globalIdField","fields"])],oe.prototype,"readGlobalIdField",null),r.__decorate([S.property({readOnly:!0,type:String,json:{read:!1}})],oe.prototype,"displayField",null),r.__decorate([S.property({type:String,json:{read:!1}})],oe.prototype,"profile",void 0),r.__decorate([T.reader("service","profile",["store.profile"])],oe.prototype,"readProfile",null),r.__decorate([S.property({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],oe.prototype,"normalReferenceFrame",void 0),r.__decorate([S.property(q.screenSizePerspectiveEnabled)],oe.prototype,"screenSizePerspectiveEnabled",void 0),oe=r.__decorate([P.subclass("esri.layers.SceneLayer")],oe);const ie={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},ne={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"};return oe}));
