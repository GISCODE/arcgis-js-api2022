/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/Accessor","../../../../../core/arrayUtils","../../../../../core/Logger","../../../../../core/mathUtils","../../../../../core/maybe","../../../../../core/accessorSupport/decorators/property","../../../../../core/has","../../../../../core/accessorSupport/ensureType","../../../../../core/accessorSupport/decorators/subclass","../../../../../chunks/mat3","../../../../../chunks/mat3f64","../../../../../chunks/mat4","../../../../../chunks/mat4f64","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../chunks/sphere","../../../../../chunks/vec33","../../core/shaderLibrary/attributes/VertexPosition.glsl","../../core/util/TwoVectorPosition","../GridLocalOriginFactory","../localOriginHelper","../LocalOriginManager","../Object3D","../VertexAttribute","./bufferLayouts","./edgeBufferWriters","./edgePreprocessing","./EdgeRenderer","./EdgeWorkerHandle","./interfaces","./strokes","./util","../TextureBackedBuffer/BufferManager","../../../../support/WatchUpdatingTracking","../../../../webgl/BufferObject","../../../../webgl/enums","../../../../webgl/VertexArrayObject"],(function(e,t,r,n,s,i,o,a,c,d,u,l,g,h,f,p,m,y,b,E,O,T,_,v,w,R,x,j,M,C,S,V,A,P,L,B,I,D,k,N){"use strict";const U=i.getLogger("esri.views.3d.webgl-engine.lib.edgeRendering.EdgeView");function G(e){e.regular&&(e.regular.vao.vertexBuffers.instances.dispose(),e.regular.vao.dispose(!1),e.regular.vao=null),e.silhouette&&(e.silhouette.vao.vertexBuffers.instances.dispose(),e.silhouette.vao.dispose(!1),e.silhouette.vao=null)}function F(e){let t=null,r=null;for(let i=0;i<e.geometries.length;i++){var n;const o=e.geometryRecords[i];if(o.material.supportsEdges){if(t){if(!s.equals(t,o.transformation))return!1}else t=o.transformation;if(!r&&a.isSome(o.origin))r=o;else if(a.isSome(null==(n=r)?void 0:n.origin)&&a.isSome(o.origin)&&r.origin.id!==o.origin.id)return!1}}return!0}e.EdgeView=function(e){function r(t){var r;return(r=e.call(this,t)||this).updatingHandles=new I.WatchUpdatingTracking,r.perObjectData=new Map,r.perObjectDataEvictionCache=new Set,r.renderers=new Map,r.numberOfRenderedEdges={[A.Transparency.TRANSPARENT]:0,[A.Transparency.OPAQUE]:0},r.gpuMemoryUsage=0,r.workerAbort=new AbortController,r.tmpModelPosition=y.create(),r.localOrigins=new w.LocalOriginManager(new _.GridLocalOriginFactory(t.renderSR)),r}t._inheritsLoose(r,e);var n=r.prototype;return n.initialize=function(){this.worker=new V(this.schedule),this.componentColorManager=new B.BufferManager(this.rctx,2);const e=j.VertexLayout.createBuffer(4);for(let t=0;t<4;t++)e.sideness.set(t,0,0===t||3===t?0:1),e.sideness.set(t,1,0===t||1===t?0:1);this.verticesBufferObject=D.BufferObject.createVertex(this.rctx,k.Usage.STATIC_DRAW,e.buffer)},n.destroy=function(){this.destroyed||(this.perObjectData.forEach((e=>this._discardObjectEntry(e))),this.perObjectData.clear(),this.strokesTexture=a.disposeMaybe(this.strokesTexture),this.componentColorManager=a.destroyMaybe(this.componentColorManager),this.workerAbort.abort(),this.worker.destroy(),this.verticesBufferObject=a.disposeMaybe(this.verticesBufferObject),this.renderers.clear(),this.updatingHandles.destroy())},n.shouldRender=function(){return this.renderers.size>0},n.addComponentObject=function(){var e=t._asyncToGenerator((function*(e,t,r,n,s,i,o,a){if(this.hasObject(e))return this.getObjectMemoryUsage(e);let c;const d=new H(new Promise((e=>c=e)),r.center,r.radius);this.perObjectData.set(e,d);const u=yield this.updatingHandles.addPromise(this._addComponentGeometry(t,d,n,s,i,o,a));return this.setNeedsRender(),c(),u}));function r(t,r,n,s,i,o,a,c){return e.apply(this,arguments)}return r}(),n.addOrUpdateObject3D=function(){var e=t._asyncToGenerator((function*(e,t,r,n){if(this.destroyed)return void U.warn("Attempt to add an object to a destroyed instance");const s=this.perObjectData.get(e);let i;(null==s?void 0:s.renderables.length)>0&&this.perObjectDataEvictionCache.add(s);const o=e.boundingVolumeWorldSpace.bounds,a=new H(new Promise((e=>i=e)),b.getCenter(o),b.getRadius(o));this.perObjectData.set(e,a);const c=new Array;if(r.mergeGeometries&&e.geometries.length>1&&F(e))c.push(this._addObjectMergedGeometries(e,a,t,r,n));else for(let d=0;d<e.geometries.length;d++){const s=e.geometryRecords[d];if(!s.material.supportsEdges)continue;const i=e.geometries[d];c.push(this._addGeometry(e,a,i,s,t[0],r,n))}yield this.updatingHandles.addPromise(Promise.all(c)),this.perObjectDataEvictionCache.delete(a),this._discardObjectEntry(s),this.setNeedsRender(),i()}));function r(t,r,n,s){return e.apply(this,arguments)}return r}(),n._discardObjectEntry=function(e){e&&(e.renderables.length&&(e.renderables.forEach((e=>this._removeRenderable(e))),this.setNeedsRender()),e.loaded=null)},n.hasObject=function(e){return this.perObjectData.has(e)},n.updateAllComponentOpacities=function(){var e=t._asyncToGenerator((function*(e,t){const r=t instanceof Array?e=>t[e]:()=>t;(yield this.updatingHandles.addPromise(this._getObjectEntry(e))).renderables.forEach((e=>{const t=e.components.meta.length;for(let n=0;n<t;n++){const t=r(n),s=e.components.meta[n],i=s.index;s.material.opacity=t,e.components.buffer.textureBuffer.setDataElement(i,1,3,255*t)}this._updateTransparency(e)})),this.setNeedsRender()}));function r(t,r){return e.apply(this,arguments)}return r}(),n.getObjectMemoryUsage=function(){var e=t._asyncToGenerator((function*(e){return(yield this._getObjectEntry(e)).renderables.reduce(((e,t)=>e+t.statistics.gpuMemoryUsage),0)}));function r(t){return e.apply(this,arguments)}return r}(),n.updateAllComponentMaterials=function(){var e=t._asyncToGenerator((function*(e,t,r,n){const s=e instanceof R.Object3D,i=!!r.slicePlaneEnabled,o=L.determineRendererType(t),a=S.EdgeRenderer.getKey(o,i,s);(yield this.updatingHandles.addPromise(this._getObjectEntry(e))).renderables.forEach((e=>{if(a!==e.rendererKey){const t=this.renderers.get(e.rendererKey),r=this._acquireRenderer(o,i,s);t.removeRenderable(e),t.refCount.decrement(),e.rendererKey=a,r.addRenderable(e)}for(let r=0;r<t.length;r++)e.components.meta[r].material=t[r];n&&this._updateComponentBuffer(e.components),this._updateTransparency(e)})),this.setNeedsRender()}));function r(t,r,n,s){return e.apply(this,arguments)}return r}(),n.updateObjectVisibility=function(){var e=t._asyncToGenerator((function*(e,t){(yield this.updatingHandles.addPromise(this._getObjectEntry(e))).renderables.forEach((e=>e.visible=t)),this.setNeedsRender()}));function r(t,r){return e.apply(this,arguments)}return r}(),n.removeObject=function(e){const t=this.perObjectData.get(e);t&&(this.perObjectData.delete(e),this._discardObjectEntry(t))},n._getObjectEntry=function(){var e=t._asyncToGenerator((function*(e){const t=this.perObjectData.get(e);if(!t)throw"no object";return yield t.loaded,t}));function r(t){return e.apply(this,arguments)}return r}(),n.removeAll=function(){this.perObjectData.forEach(((e,t)=>this.removeObject(t)))},n.render=function(e,t){if(this.numberOfRenderedEdges[t]=0,a.isNone(this.componentColorManager))return;this.localOrigins.updateViewMatrices(e.camera.viewMatrix);const r=e.camera.viewInverseTransposeMatrix,n=y.create(),s=new T.TwoVectorPosition,i=new O.VertexPositionViewProjectionTransform,o=h.create();m.set(n,r[3],r[7],r[11]),s.set(n),m.copy(i.transformWorldFromViewTH,s.high),m.copy(i.transformWorldFromViewTL,s.low),g.fromMat4(i.transformViewFromCameraRelativeRS,e.camera.viewMatrix),f.copy(i.transformProjFromView,e.camera.projectionMatrix);const c=h.create();g.transpose(c,i.transformViewFromCameraRelativeRS),g.invert(o,c);let d=0,u=0;if(this.renderers.forEach((e=>{0===e.refCount.value?(this.renderers.delete(e.key),e.dispose()):e.forEachRenderable((e=>{e.visible&&(d+=e.statistics.averageEdgeLength,u++)}),t)})),this.componentColorManager.garbageCollect(),this.componentColorManager.updateTextures(),0===u)return;const l={distanceFalloffFactor:40*d/u,minimumEdgeLength:e.camera.perScreenPixelRatio,transparency:t,viewProjectionTransform:i,transformNormalViewFromGlobal:o};this._updateObjectCameraDistances(e),this.renderers.forEach((t=>{this._renderRegularEdges(t,e,l),this._renderSilhouetteEdges(t,e,l)}))},n._updateTransparency=function(e){const t=L.determineEdgeTransparency(e.components.meta),r=L.determineObjectTransparency(e.components.meta);t===e.edgeTransparency&&r===e.objectTransparency||(e.edgeTransparency=t,e.objectTransparency=r,this.renderers.get(e.rendererKey).setRenderablesDirty())},n._computeModelTransformWithLocalOrigin=function(e,t,r){if(e.getCombinedStaticTransformation(t,r),a.isSome(t.origin))this.localOrigins.register(t.origin);else{const e=m.set(this.tmpModelPosition,r[12],r[13],r[14]);t.origin=this.localOrigins.acquire(e)}return v.applyToModelMatrix(t.origin.vec3,r),t.origin},n._updateComponentBuffer=function(e){const{meta:t,buffer:r}=e;for(let n=0;n<t.length;n++){const e=t[n].material,s=t[n].index,i=o.clamp(Math.round(e.size*S.LINE_WIDTH_FRACTION_FACTOR),0,255),a=o.clamp(e.extensionLength,-S.EXTENSION_LENGTH_OFFSET,255-S.EXTENSION_LENGTH_OFFSET)+S.EXTENSION_LENGTH_OFFSET,c="solid"===e.type?C.EdgeType.SOLID:C.EdgeType.SKETCH,d=255*e.opacity,u=e.color,l=255*u[0],g=255*u[1],h=255*u[2],f=255*u[3];r.textureBuffer.setData(s,0,l,g,h,f),r.textureBuffer.setData(s,1,i,a,c,d)}},n._createComponentBuffers=function(e){if(a.isNone(this.componentColorManager))return null;const t=new Array,r=this.componentColorManager.getBuffer(e.length);for(let s=0;s<e.length;s++){const n=e[s],i=r.acquireIndex();t.push({index:i,material:n})}const n={meta:t,buffer:r};return this._updateComponentBuffer(n),n},n._extractEdges=function(e,t,r,n,s,i=s.length){return this.worker.process({data:t,indices:s,indicesLength:i,writerSettings:e,skipDeduplicate:r},this.workerAbort.signal,n)},n._createEdgeResources=function(e){const t={};if(a.isNone(this.verticesBufferObject))return t;if(e.regular.lodInfo.lengths.length>0){const r=new N.VertexArrayObject(this.rctx,j.EdgeShaderAttributeLocations,{vertices:j.glVertexLayout,instances:M.RegularEdgeBufferWriter.glLayout},{vertices:this.verticesBufferObject,instances:D.BufferObject.createVertex(this.rctx,k.Usage.STATIC_DRAW,e.regular.instancesData.buffer)});t.regular={vao:r,lod:e.regular.lodInfo}}if(e.silhouette.lodInfo.lengths.length>0){const r=new N.VertexArrayObject(this.rctx,j.EdgeShaderAttributeLocations,{vertices:j.glVertexLayout,instances:M.SilhouetteEdgeBufferWriter.glLayout},{vertices:this.verticesBufferObject,instances:D.BufferObject.createVertex(this.rctx,k.Usage.STATIC_DRAW,e.silhouette.instancesData.buffer)});t.silhouette={vao:r,lod:e.silhouette.lodInfo}}return t},n._addGeometry=function(){var e=t._asyncToGenerator((function*(e,t,r,n,s,i,o){const a=r.vertexAttributes.get(x.VertexAttribute.POSITION),c=r.indices.get(x.VertexAttribute.POSITION),d=p.create(),u={position:a,indices:c,modelTransform:d,origin:this._computeModelTransformWithLocalOrigin(e,n,d)};return this._addPositionData(t,u,r.edgeIndicesLength,s,i,o)}));function r(t,r,n,s,i,o,a){return e.apply(this,arguments)}return r}(),n._addPositionData=function(){var e=t._asyncToGenerator((function*(e,t,r,n,s,i=!1){if(null==e.loaded)return;const o=this._createComponentBuffers([n]);if(a.isNone(o)||r<=0)return;const c=this._acquireRenderer(n.type,!!s.slicePlaneEnabled),{modelTransform:d,origin:u}=t,l=t.indices,g=t.position,h=g.data.length/g.size,f=j.EdgeInputBufferLayout.createBuffer(h);for(let a=0;a<h;a++)f.position.set(a,0,g.data[a*g.size+0]),f.position.set(a,1,g.data[a*g.size+1]),f.position.set(a,2,g.data[a*g.size+2]);L.fillComponenBufferIndices(o.meta,[0,f.componentIndex.count],f.componentIndex);const p=yield this.updatingHandles.addPromise(this._extractEdges(c.writerSettings,f,!1,i,l,r));if(null==e.loaded)return;const{regular:m,silhouette:y}=this._createEdgeResources(p),b=(m?m.vao.size:0)+(y?y.vao.size:0),E={regular:m,silhouette:y,transform:{modelMatrix:d,origin:u},statistics:{gpuMemoryUsage:b,externalMemoryUsage:!1,averageEdgeLength:p.averageEdgeLength},components:o,visible:!0,edgeTransparency:L.determineEdgeTransparency(o.meta),objectTransparency:L.determineObjectTransparency(o.meta),distanceToCamera:0,rendererKey:c.key};e.renderables.push(E),c.addRenderable(E),this.gpuMemoryUsage+=b}));function r(t,r,n,s,i){return e.apply(this,arguments)}return r}(),n._addComponentGeometry=function(){var e=t._asyncToGenerator((function*(e,t,r,n,s,i,o){if(null==t.loaded)return 0;const c=this._createComponentBuffers(i);if(a.isNone(c))return 0;const d=L.determineRendererType(i),u=this._acquireRenderer(d,o.slicePlaneEnabled||!1,!1),l=j.EdgeInputBufferLayout.createBuffer(r.count);E.copy(l.position,r),L.fillComponenBufferIndices(c.meta,s,l.componentIndex,n);const g=!0,h=u.writerSettings,f=yield this.updatingHandles.addPromise(this._extractEdges(h,l,g,!1,n));if(null==t.loaded)return 0;const{regular:p,silhouette:m}=this._createEdgeResources(f),y=(p?p.vao.size:0)+(m?m.vao.size:0),b={regular:p,silhouette:m,transform:e,statistics:{gpuMemoryUsage:y,externalMemoryUsage:!0,averageEdgeLength:f.averageEdgeLength},components:c,visible:!0,edgeTransparency:L.determineEdgeTransparency(c.meta),objectTransparency:L.determineObjectTransparency(c.meta),distanceToCamera:0,rendererKey:u.key};return t.renderables.push(b),u.addRenderable(b),y}));function r(t,r,n,s,i,o,a){return e.apply(this,arguments)}return r}(),n._addObjectMergedGeometries=function(){var e=t._asyncToGenerator((function*(e,t,r,n,s){const i=new Map;let o=0,a=null,c=0;for(let p=0;p<e.geometries.length;p++){const t=e.geometries[p],r=e.geometryRecords[p];if(!r.material.supportsEdges)continue;!a&&r.origin&&(a=r);const n=t.vertexAttributes.get(x.VertexAttribute.POSITION);c+=n.data.length/n.size,o+=t.edgeIndicesLength}const d=c>=65536?Uint32Array:Uint16Array,u=o?new d(o):null,l=[];let g=0;for(let p=0;p<e.geometries.length;p++){const t=e.geometries[p];if(!e.geometryRecords[p].material.supportsEdges)continue;const r=t.vertexAttributes.get(x.VertexAttribute.POSITION),n=t.indices.get(x.VertexAttribute.POSITION);let s=i.get(r.data);if(null==s){s=l.length/3;for(let e=0;e<r.data.length;e+=r.size)l.push(r.data[e+0]),l.push(r.data[e+1]),l.push(r.data[e+2]);i.set(r.data,s)}if(n)for(let e=0;e<t.edgeIndicesLength;e++)u[g++]=s+n[e]}const h=a||e.geometryRecords[0],f=p.create(),m=this._computeModelTransformWithLocalOrigin(e,h,f);for(let p=0;p<e.geometryRecords.length;p++)e.geometryRecords[p].origin=m;const y={position:{data:l,size:3},indices:u,modelTransform:f,origin:m};yield this.updatingHandles.addPromise(this._addPositionData(t,y,u.length,r[0],n,s))}));function r(t,r,n,s,i){return e.apply(this,arguments)}return r}(),n._acquireRenderer=function(e,t,r=!0){const n=S.EdgeRenderer.getKey(e,t,r);let s=this.renderers.get(n);return a.isNone(this.strokesTexture)&&(this.strokesTexture=P.generateStrokesTexture(this.rctx)),s||(s=new S.EdgeRenderer(this.rctx,this.techniqueRepository,{type:e,slicePlaneEnabled:t,strokesTexture:this.strokesTexture,legacy:r}),this.renderers.set(n,s)),s.refCount.increment(),s},n._removeRenderable=function(e){G(e);const t=this.renderers.get(e.rendererKey);if(t){t.removeRenderable(e),t.refCount.decrement(),"origin"in e.transform&&this.localOrigins.release(e.transform.origin),this.gpuMemoryUsage-=e.statistics.externalMemoryUsage?0:e.statistics.gpuMemoryUsage;for(const t of e.components.meta)e.components.buffer.releaseIndex(t.index)}},n._updateObjectCameraDistances=function(e){const t=e.camera.eye,r=e.camera.viewForward,n=y.create(),s=e=>{const{center:s,radius:i}=e;m.sub(n,s,t);const o=m.dot(n,r),a=o<-i?1/0:o<i?0:o-i;e.renderables.forEach((e=>e.distanceToCamera=a))};this.perObjectData.forEach(s),this.perObjectDataEvictionCache.forEach(s)},n._renderRegularEdges=function(e,t,r){e.bindRegularEdges(t,r);const n=r.transparency;e.forEachRenderable((s=>{if(!s.visible||!s.regular)return;const i=L.computeEdgeCount(s.regular.lod.lengths,s.distanceToCamera,r);"origin"in s.transform&&(t.localViewMatrixForEdges=this.localOrigins.getViewMatrix(s.transform.origin)),e.renderRegularEdges(s,t,i),this.numberOfRenderedEdges[n]+=i}),n)},n._renderSilhouetteEdges=function(e,t,r){e.bindSilhouetteEdges(t,r);const n=r.transparency;e.forEachRenderable((s=>{if(!s.visible||!s.silhouette)return;const i=L.computeEdgeCount(s.silhouette.lod.lengths,s.distanceToCamera,r);"origin"in s.transform&&(t.localViewMatrixForEdges=this.localOrigins.getViewMatrix(s.transform.origin)),e.renderSilhouetteEdges(s,t,i),this.numberOfRenderedEdges[n]+=i}),n)},t._createClass(r,[{key:"updating",get:function(){return this.updatingHandles.updating}},{key:"usedMemory",get:function(){return this.gpuMemoryUsage}},{key:"numberOfRenderedPrimitives",get:function(){return this.numberOfRenderedEdges[A.Transparency.TRANSPARENT]+this.numberOfRenderedEdges[A.Transparency.OPAQUE]}}]),r}(n),r.__decorate([c.property({constructOnly:!0})],e.EdgeView.prototype,"rctx",void 0),r.__decorate([c.property({constructOnly:!0})],e.EdgeView.prototype,"renderSR",void 0),r.__decorate([c.property({constructOnly:!0})],e.EdgeView.prototype,"techniqueRepository",void 0),r.__decorate([c.property({constructOnly:!0})],e.EdgeView.prototype,"setNeedsRender",void 0),r.__decorate([c.property({constructOnly:!0})],e.EdgeView.prototype,"schedule",void 0),r.__decorate([c.property({readOnly:!0})],e.EdgeView.prototype,"updatingHandles",void 0),r.__decorate([c.property({readOnly:!0})],e.EdgeView.prototype,"updating",null),e.EdgeView=r.__decorate([l.subclass("esri.views.3d.webgl-engine.lib.edgeRendering.EdgeView")],e.EdgeView);let H=function(e,t,r){this.center=t,this.radius=r,this.renderables=new Array,this.loaded=e,this.loaded.then((()=>{null!=this.loaded&&(this.loaded=!0)}))};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
