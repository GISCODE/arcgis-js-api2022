/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../Color","../../../../symbols","../../../../core/asyncUtils","../../../../core/Error","../../../../core/has","../../../../core/maybe","../../../../core/promiseUtils","../../../../core/screenUtils","../../../../core/urlUtils","../../../../chunks/mat4f64","../../../../chunks/vec2f64","../../../../chunks/vec3f64","../../../../chunks/vec4","../../../../chunks/vec4f64","../../../../geometry/projection","../../../../geometry/support/aaBoundingBox","../../../../support/arcadeOnDemand","../../../../symbols/support/IconSymbol3DLayerResource","../../../../symbols/support/utils","../../../2d/arcade/callExpressionWithFeature","./constants","./ElevationAligners","./elevationAlignmentUtils","./ElevationContext","./Graphics3DDrapedGraphicLayer","./Graphics3DObject3DGraphicLayer","./Graphics3DSymbolLayer","./graphicUtils","./interfaces","./placementUtils","./pointUtils","./sdfPrimitives","../support/FastSymbolUpdates","../../terrain/OverlayRenderer","../../webgl-engine/lib/basicInterfaces","../../webgl-engine/lib/GeometryUtil","../../webgl-engine/lib/RenderGeometry","../../webgl-engine/lib/Texture","../../webgl-engine/materials/HUDMaterial","../../../../symbols/CIMSymbol"],(function(e,t,i,r,s,a,n,o,l,c,h,u,d,m,_,p,y,f,g,S,b,x,v,P,z,R,T,M,E,I,C,O,U,D,A,w,G,L,F,V,N,H,B){"use strict";const j=d.create(),k=_.fromValues(0,0,1),q=16,Z=1.5,W=A.DEFAULT_TEX_SIZE,$=A.DEFAULT_SYMBOL_SIZE_RATIO,J=[$/2,$/2,1-$/2,1-$/2],X=[W*$,W*$];let Y=function(t){function s(e,i,r,s){var a;return(a=t.call(this,e,i,r,s)||this)._cimLayers=null,a._cimSymbolMaterials=new Map,a._cimSymbolTextures=new Map,a._cimMaterialParametersInfo=null,a._cimRequiredFields=null,a._cimScaleFactorOrFunction=null,a._size=null,a._symbolTextureRatio=1,a._outlineSize=0,a._elevationOptions={supportsOffsetAdjustment:!0,supportsOnTheGround:!0},a}i._inheritsLoose(s,t);var d=s.prototype;return d.getCachedSize=function(){return{size:this._getIconSize()}},d.doLoad=function(){var e=i._asyncToGenerator((function*(e){this._validateOrThrow();const t=this._prepareMaterialParameters(),i=this._getPrimitive();if(l.isSome(i))this._prepareResourcesPrimitive(t,i);else{const i=x.getIconHref(this.symbol,this.symbolLayer),r=u.dataComponents(i);r&&"application/json"===r.mediaType?yield this._prepareResourcesCIM(t,JSON.parse(r.data),e):yield this._prepareResourcesHref(t,i,e)}}));function t(t){return e.apply(this,arguments)}return t}(),d._validateOrThrow=function(){if(this._drivenProperties.size)return;const e=C.validateSymbolLayerSize(this._getIconSize());if(e)throw new n("graphics3diconsymbollayer:invalid-size",e)},d._getIconSize=function(){const e=this.symbolLayer,t=Math.round(null!=e.size?h.pt2px(e.size):q);return this._drivenProperties.size?Math.max(t,64):t},d._generateTextureCIM=function(e){const t=this._getGraphicHash(e);let i=""===t?null:this._cimSymbolTextures.get(t);if(!i){const r={scaleFactor:this._cimScaleFactorOrFunction},s=this._context.sharedResources.cimSymbolRasterizer.rasterizeCIMSymbol(this._cimLayers,e,"esriGeometryPoint",r,null,null);this._cimMaterialParametersInfo.anchorPos=this._getAnchorPos("relative",s.anchorPosition);const a={width:s.imageData.width,height:s.imageData.height,powerOfTwoResizeMode:L.PowerOfTwoResizeMode.PAD};i=new N.Texture(s.imageData,a),this._cimSymbolTextures.set(t,i),this._context.stage.add(i)}return i},d._computeSize=function(e,t){const i=e.width/e.height;return i>1?[t,Math.round(t/i)]:[Math.round(t*i),t]},d._prepareMaterialParameters=function(){const e={anchorPos:this._getAnchorPos(this.symbolLayer.anchor,this.symbolLayer.anchorPosition)},t=this.symbol;if(K(t)){const{screenLength:i,minWorldLength:r,maxWorldLength:s}=t.verticalOffset;e.verticalOffset={screenLength:h.pt2px(i),minWorldLength:r||0,maxWorldLength:null!=s?s:1/0}}return this._context.screenSizePerspectiveEnabled&&(e.screenSizePerspective=this._context.sharedResources.screenSizePerspectiveSettings),e.occlusionTest=!0,e.slicePlaneEnabled=this._context.slicePlaneEnabled,e},d._prepareResourcesPrimitive=function(e,t){const i=this._getOutlineSize();if(Q(t)&&0===i)throw new Error("Nothing to render");this._outlineSize=i,e.color=this._getFillColor(),e.outlineColor=this._getOutlineColor(),e.outlineSize=this._outlineSize;const r=this._context.sharedResources.textures.fromData(t,(()=>A.createTexture(t)));this._texture=r.texture,this._releaseTexture=r,e.textureIsSignedDistanceField=!0,e.distanceFieldBoundingBox=J,e.textureId=this._texture.id;const s=this._getIconSize();this._size=[s,s],this._symbolTextureRatio=1/$,this._createMaterialAndAddToStage(e,this._context.stage)},d._prepareResourcesHref=function(){var e=i._asyncToGenerator((function*(e,t,i){if(!o("esri-canvas-svg-support")&&u.isSVG(t)){throw new n("graphics3diconsymbollayer:unsupported-image-format","IconSymbol3DLayer failed to load (SVG symbols are not supported in IE11)")}this._outlineSize=this._getOutlineSize(),e.color=this._getFillColor(),e.outlineColor=this._getOutlineColor(),e.outlineSize=this._outlineSize,e.textureIsSignedDistanceField=!1;const r=this._getIconSize(),s=r*this._context.graphicsCoreOwner.view.pixelRatio,l=yield a.result(this._context.sharedResources.textures.fromUrl(t,s,{signal:i}));if(!1===l.ok){c.throwIfAbortError(l.error);throw new n("graphics3diconsymbollayer:request-failed",`Failed to load (Request for icon resource failed: ${t})`)}this._releaseTexture=l.value;const h=l.value.texture,d=h.params;this._size=this._computeSize(d,r),e.textureId=h.id,this._createMaterialAndAddToStage(e,this._context.stage)}));function t(t,i,r){return e.apply(this,arguments)}return t}(),d._prepareResourcesCIM=function(){var t=i._asyncToGenerator((function*(t,i,r){const s=new B({data:i});if(!this._context.sharedResources.cimSymbolRasterizer){const t=(yield new Promise(((t,i)=>e(["../../../../symbols/cim/CIMSymbolRasterizer"],t,i)))).CIMSymbolRasterizer;c.throwIfAborted(r),this._context.sharedResources.cimSymbolRasterizer||(this._context.sharedResources.cimSymbolRasterizer=new t(this._context.renderCoordsHelper.spatialReference,!0))}const a=this._context.layer.fields?this._context.layer.fields.map((e=>e.toJSON())):null;let n,o;if(this._cimLayers=yield this._context.sharedResources.cimSymbolRasterizer.analyzeCIMSymbol(s,a,this._context.renderer&&"dictionary"===this._context.renderer.type?this._context.renderer.fieldMap:null,"esriGeometryPoint",{signal:r}),this._context.renderer&&"dictionary"===this._context.renderer.type&&this._context.renderer.scaleExpression){const e=this._context.renderer;if(isNaN(e.scaleExpression)){const t=e.scaleExpression,i=yield S.createRendererExpression(t,this._context.layer.spatialReference,a);o=(e,t,r)=>{const s=v(i,e,{$view:r},"esriGeometryPoint",t);return null!==s?s:1}}else n=Number(e.scaleExpression)}this._cimScaleFactorOrFunction=n||o||1;const l=this._context.renderer?yield this._context.renderer.getRequiredFields(this._context.layer.fieldsIndex):[];c.throwIfAborted(r);const h=this._context.layer.fieldsIndex;this._cimRequiredFields=l.map((e=>h.get(e).name)),this._cimMaterialParametersInfo=t,this._cimMaterialParametersInfo.color=this._getFillColor(),this._cimMaterialParametersInfo.outlineColor=[0,0,0,0],this._cimMaterialParametersInfo.outlineSize=0,this._cimMaterialParametersInfo.textureIsSignedDistanceField=!1}));function r(e,i,r){return t.apply(this,arguments)}return r}(),d._getPrimitive=function(){return this.symbolLayer.resource&&this.symbolLayer.resource.href?null:this.symbolLayer.resource&&this.symbolLayer.resource.primitive||b.defaultPrimitive},d._getOutlineSize=function(){let e=0;const t=this.symbolLayer;if(l.isSome(t.outline)&&null!=t.outline.size)return Math.max(h.pt2px(t.outline.size),0);return e=Q(this._getPrimitive())?Z:0,Math.max(e,0)},d._getOutlineColor=function(){const e=this._getLayerOpacity(),t=this.symbolLayer,i=l.get(t,"outline","color");if(l.isSome(i)){const t=r.toUnitRGB(i),s=i.a*e;return[t[0],t[1],t[2],s]}return[0,0,0,0]},d._getFillColor=function(){if(Q(this._getPrimitive()))return P.TRANSPARENT_UNIT;const e=l.isNone(this._getPrimitive()),t=l.get(this.symbolLayer,"material","color");return this._getCombinedOpacityAndColor(t,{hasIntrinsicColor:e})},d._getAnchorPos=function(e,t){return"relative"===e?m.fromValues((t.x||0)+.5,.5-(t.y||0)):e in U.namedAnchorToHUDMaterialAnchorPos?U.namedAnchorToHUDMaterialAnchorPos[e]:U.namedAnchorToHUDMaterialAnchorPos.center},d._createMaterialAndAddToStage=function(e,t){if(this._cimLayers?this._fastUpdates={enabled:!1}:this._fastUpdates=w.initFastSymbolUpdatesState(this._context.renderer,this._fastVisualVariableConvertOptions()),this._fastUpdates.enabled&&Object.assign(e,this._fastUpdates.materialParameters),this._cimLayers){let i=this._cimSymbolMaterials.get(e.textureId);return i||(i=new H.HUDMaterial(e),this._cimSymbolMaterials.set(e.textureId,i),t.add(i)),i}return this._material=new H.HUDMaterial(e),t.add(this._material),this._material},d._setDrapingDependentMaterialParameters=function(){this.draped&&(this._forEachMaterial((e=>{e.setParameters({verticalOffset:null,screenSizePerspective:null,occlusionTest:!1,slicePlaneEnabled:!1,shaderPolygonOffset:0,isDraped:this.draped})})),this.layerOpacityChanged())},d.destroy=function(){t.prototype.destroy.call(this),this._forEachMaterial((e=>this._context.stage.remove(e))),this._material=null,this._cimSymbolMaterials.clear(),this._cimSymbolTextures.forEach((e=>this._context.stage.remove(e))),this._cimSymbolTextures.clear(),this._releaseTexture=l.releaseMaybe(this._releaseTexture)},d._getScaleFactor=function(e,t){if(this._drivenProperties.size&&e.size){for(let t=0;t<3;t++){const i=e.size[t];i&&"symbol-value"!==i&&"proportional"!==i&&(e.size[t]=h.pt2px(i))}if("symbol-value"===e.size[0])return 1;if(isFinite(+e.size[0]))return+e.size[0]/t;if(isFinite(+e.size[2]))return+e.size[2]/t}return 1},d.createGraphics3DGraphic=function(e){const t=e.graphic;if(!this._validateGeometry(t.geometry))return null;let i,r;if(this._cimLayers){if(!this._cimLayers.length)return null;const e=this._generateTextureCIM(t),s={textureId:e.id,...this._cimMaterialParametersInfo};r=this._createMaterialAndAddToStage(s,this._context.stage),i=[e.params.width,e.params.height]}else i=this._size,r=l.unwrap(this._material);const s=D.placePointOnGeometry(t.geometry);if(l.isNone(s))return this.logger.warn(`unsupported geometry type for icon symbol: ${t.geometry.type}`),null;const a=e.renderingInfo,n=this._getVertexOpacityAndColor(a);let o=1;if(!this._fastUpdates.enabled||!this._fastUpdates.visualVariables.size){const e=i[0]>i[1]?i[0]:i[1];o=this._getScaleFactor(a,e)}o*=this._symbolTextureRatio;const c=[i[0]*o,i[1]*o],h=this.setGraphicElevationContext(t,new T.ElevationContext);return this.ensureDrapedStatus("on-the-ground"===h.mode)&&this._setDrapingDependentMaterialParameters(),this.draped?this._createAsOverlay(t,s,r,n,c,e.layer.uid):this._createAs3DShape(t,s,r,n,c,h,t.uid)},d.layerOpacityChanged=function(){const e=this._getFillColor(),t=this._getOutlineColor();return this._forEachMaterial((i=>{i.setParameters({color:e}),i.setParameters({outlineColor:t})})),!0},d.layerElevationInfoChanged=function(e,t,i){const r=this._elevationContext.mode,a=R.elevationModeChangeUpdateType(s.elevationModeChangeTypes,i,r);if(a!==R.SymbolUpdateType.UPDATE)return a;const n=R.needsElevationUpdates2D(r)||"absolute-height"===r;return this.updateGraphics3DGraphicElevationInfo(e,t,(()=>n))},d.slicePlaneEnabledChanged=function(){return this.draped||this._forEachMaterial((e=>{e.setParameters({slicePlaneEnabled:this._context.slicePlaneEnabled})})),!0},d.physicalBasedRenderingChanged=function(){return!0},d.pixelRatioChanged=function(){return!!this._getPrimitive()},d.applyRendererDiff=function(e,t){for(const i in e.diff){if("visualVariables"!==i)return O.ApplyRendererDiffResult.Recreate_Symbol;if(!w.updateFastSymbolUpdatesState(this._fastUpdates,t,this._fastVisualVariableConvertOptions()))return O.ApplyRendererDiffResult.Recreate_Symbol;l.isSome(this._material)&&this._material.setParameters(this._fastUpdates.materialParameters)}return O.ApplyRendererDiffResult.Fast_Update},d._defaultElevationInfoNoZ=function(){return ee},d._createAs3DShape=function(e,t,i,r,s,a,n){const o=this.getFastUpdateAttrValues(e),l=o?e=>w.evaluateModelTransform(this._fastUpdates.materialParameters,o,e):null,c=[F.createPointGeometry(k,null,r,s,te,null,o)],h=D.createStageObjectForHUD(this._context,t,c,[i],a,this._context.layer.uid,n,l);if(null===h)return null;const u=new E.Graphics3DObject3DGraphicLayer(this,h.object,c,null,null,z.perObjectElevationAligner,a);return u.alignedSampledElevation=h.sampledElevation,u.needsElevationUpdates=R.needsElevationUpdates2D(a.mode)||"absolute-height"===a.mode,u.getScreenSize=this._createScreenSizeGetter(s,l),u.calculateRelativeScreenBounds=e=>i.calculateRelativeScreenBounds(u.getScreenSize(),1,e),D.extendPointGraphicElevationContext(u,t,this._context.elevationProvider),u},d._createAsOverlay=function(e,t,i,r,s,a){i.renderPriority=this._renderPriority;const n=y.create();f.projectPointToVector(t,n,this._context.overlaySR),n[2]=G.DRAPED_Z;const o=this._context.clippingExtent;if(l.isSome(o)&&!g.containsPoint(o,n))return null;const c=this.getFastUpdateAttrValues(e),h=c?e=>w.evaluateModelTransform(this._fastUpdates.materialParameters,c,e):null,u=F.createPointGeometry(k,n,r,s,null,null,c),d=new V.RenderGeometry(u,i,{layerUid:a,graphicUid:e.uid,calculateShaderTransformation:h});n[3]=0,p.copy(d.boundingSphere,n);const m=new M(this,[d],null);return m.getScreenSize=this._createScreenSizeGetter(s,h),m.calculateRelativeScreenBounds=e=>i.calculateRelativeScreenBounds(m.getScreenSize(),1,e),m},d._createScreenSizeGetter=function(e,t){const i=this._outlineSize+2;if(this._fastUpdates.enabled){const r=e[0]/this._symbolTextureRatio,s=e[1]/this._symbolTextureRatio;return(e=m.create())=>{const a=t(j);return e[0]=a[0]*r+i,e[1]=a[5]*s+i,e}}{const t=e[0]/this._symbolTextureRatio+i,r=e[1]/this._symbolTextureRatio+i;return(e=m.create())=>(e[0]=t,e[1]=r,e)}},d._fastVisualVariableConvertOptions=function(){const e=this._size[0]>this._size[1]?this._size[0]:this._size[1],t=_.fromValues(e,e,e),i=h.px2pt(1),r=e*i;return{modelSize:t,symbolSize:_.fromValues(r,r,r),unitInMeters:i,transformation:{anchor:_.ZEROS,scale:_.ONES,rotation:_.ZEROS}}},d._getGraphicHash=function(e){let t="";for(const i of this._cimRequiredFields)t+=i+e.attributes[i];return t},d._forEachMaterial=function(e){l.isSome(this._material)&&e(this._material),this._cimSymbolMaterials.forEach(e)},i._createClass(s,[{key:"test",get:function(){return{material:this._material}}}]),s}(I.Graphics3DSymbolLayer);function K(e){return e&&"point-3d"===e.type&&e.hasVisibleVerticalOffset()}function Q(e){return!!l.isSome(e)&&("cross"===e||"x"===e)}Y.PRIMITIVE_SIZE=X,Y.elevationModeChangeTypes={definedChanged:R.SymbolUpdateType.UPDATE,staysOnTheGround:R.SymbolUpdateType.NONE,onTheGroundChanged:R.SymbolUpdateType.RECREATE};const ee={mode:"relative-to-ground",offset:0},te=y.fromValues(0,0,0,1);t.Graphics3DIconSymbolLayer=Y,t.default=Y,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
