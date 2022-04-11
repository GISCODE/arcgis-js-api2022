/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../request","../core/has","../core/Logger","../core/maybe","../core/promiseUtils","../core/reactiveUtils","../libs/vxl/enums","../libs/vxl/VxlModule","../views/3d/webgl-engine/lib/RenderPass","../views/3d/webgl-engine/lib/RenderSlot","../views/webgl/context-util","../views/webgl/enums"],(function(e,t,i,s,r,n,a,o,l,h,c,_,d){"use strict";const u=s.getLogger("esri.layers.VoxelWasmPerScene");var g;return function(e){e[e.Lifetime=1]="Lifetime",e[e.RequestResponse=2]="RequestResponse",e[e.Rendering=3]="Rendering",e[e.Error=4]="Error"}(g||(g={})),function(){function s(e){this._halfIntTexturesAvailable=!1,this._havePreparedWithAllLayers=!1,this._renderPluginContext=null,this._vxl=null,this._pluginIsActive=!1,this._moreToLoad=!1,this._viewportWidth=-1,this._viewportHeight=-1,this._newLayers=[],this._layers=new Map,this._renderPass=h.RenderPass.MATERIAL,this._renderSlot=c.RenderSlot.VOXEL,this._rctx=null,this._renderTargetToRestore=null,this._lastFrameWasStationary=!1,this._wasmMemBlockSizes=[512,1024,2048,4096,8192,16384,32768,65536],this._wasmMemBlocks=new Map,this._dbgFlags=new Set,this._view=e,this._initialize()}var x=s.prototype;return x._dbg=function(e,t){this._dbgFlags.has(e)&&(e===g.Error?u.error(t):u.warn(t))},x._removeRenderPlugin=function(){this._pluginIsActive&&this._view._stage&&(this._dbg(g.Lifetime,"--removeRenderPlugin--"),this._view._stage.removeRenderPlugin(this)),this._pluginIsActive=!1},x._initialize=function(){this._dbg(g.Lifetime,"--initialize--");for(const e of this._wasmMemBlockSizes)this._wasmMemBlocks.set(e,0);this._readyWatchHandle=a.watch((()=>this._view.ready),(e=>{e&&"local"===this._view.viewingMode?(this._dbg(g.Lifetime,"view ready status changed to ready on a local view, calling addRenderPlugin"),this._view._stage.addRenderPlugin([this._renderSlot],this),this._pluginIsActive=!0):(this._dbg(g.Lifetime,"view ready status changed, not ready or not a local view!"),this._removeRenderPlugin())}),{initial:!0}),this._qualityWatchHandle=a.watch((()=>{var e;return null==(e=this._view)?void 0:e.qualityProfile}),(e=>{this._dbg(g.Rendering,"qualityProfile changed to "+e),this._vxl&&this._vxl.set_quality(this._toWasmQuality(e))}),{initial:!0}),this._timeExtentWatchHandle=a.watch((()=>{var e;return null==(e=this._view)?void 0:e.timeExtent}),(()=>{if(this._vxl){var e;const t=this._getTimeArgs(null==(e=this._view)?void 0:e.timeExtent);this._dbg(g.Rendering,"sceneView timeExtent changed to useTime="+t.useTime+" st="+t.startTime+" et="+t.endTime),this._vxl.set_scene_time_extent(t.startTime,t.endTime,t.useTime),this._renderPluginContext.requestRender()}}),{initial:!0}),this._stationaryWatchHandle=a.watch((()=>{var e;return null==(e=this._view)?void 0:e.stationary}),(e=>{this._vxl&&e&&!this._lastFrameWasStationary&&this._renderPluginContext.requestRender()}))},x.initializeRenderContext=function(e){this._dbg(g.Lifetime,"--initializeRenderContext--");const t=e.renderContext.rctx;t.type===_.ContextType.WEBGL2?(this._renderPluginContext=e,this._rctx=e.renderContext.rctx,this._halfIntTexturesAvailable=!!this._rctx.capabilities.textureNorm16,this._initializeWasm(t.gl)):this._dbg(g.Error,"WebGL 1 context only!")},x.uninitializeRenderContext=function(){this._renderPluginContext=null,this._rctx=null,this._dbg(g.Lifetime,"--uninitializeRenderContext--")},x._restoreFramebuffer=function(){if(!this._renderTargetToRestore)return;const e=this._renderTargetToRestore.fbo;if(!!!this._rctx)return void this._dbg(g.Error,"no context in restoreFramebuffer!");this._rctx.bindFramebuffer(e,!0);const t=this._renderTargetToRestore.viewport;this._rctx.setViewport(t.x,t.y,t.width,t.height)},x._bindPreviousDepthToSlot=function(e,t){const i=!!this._rctx,s=!!this._renderTargetToRestore;if(!i||!s)return 0;const r=this._renderTargetToRestore.fbo.depthStencilTexture;return r?(0===t?this._rctx.bindTexture(null,e,!0):this._rctx.bindTexture(r,e,!0),1):(this._dbg(g.Error,"no depth/stencil texture exists!"),0)},x._modifyResourceCount=function(e,t,i){if(!this._rctx)return void this._dbg(g.Error,"modifyAllocation callback has no rendering context!");const s=e;1===i?this._rctx.instanceCounter.increment(s,t):this._rctx.instanceCounter.decrement(s,t)},x._setBlendState=function(e,t,i,s){this._rctx?(this._rctx.setBlendingEnabled(1===e),this._rctx.setBlendFunction(t,i),this._rctx.setBlendEquation(s)):this._dbg(g.Error,"setBlendState callback has no rendering context!")},x._setFrontFace=function(e){this._rctx?this._rctx.setFrontFace(e):this._dbg(g.Error,"setFrontFace callback has no rendering context!")},x._setDepthStencilStateFunction=function(e,t,i){this._rctx?(this._rctx.setDepthFunction(i),this._rctx.setDepthTestEnabled(1===e),this._rctx.setDepthWriteEnabled(1===t),this._rctx.setStencilTestEnabled(!1),this._rctx.setStencilFunction(d.CompareFunction.ALWAYS,0,255),this._rctx.setStencilOpSeparate(d.Face.FRONT,d.StencilOperation.KEEP,d.StencilOperation.INCR,d.StencilOperation.KEEP),this._rctx.setStencilOpSeparate(d.Face.BACK,d.StencilOperation.KEEP,d.StencilOperation.DECR,d.StencilOperation.KEEP)):this._dbg(g.Error,"setDepthStencilStateFunction callback has no rendering context!")},x._setRasterizerState=function(e){if(this._rctx)switch(e){case o.WasmCullMode.None:this._rctx.setFaceCullingEnabled(!1);break;case o.WasmCullMode.Back:this._rctx.setCullFace(d.Face.BACK),this._rctx.setFaceCullingEnabled(!0);break;case o.WasmCullMode.Front:this._rctx.setCullFace(d.Face.FRONT),this._rctx.setFaceCullingEnabled(!0)}else this._dbg(g.Error,"setRasterizerState callback has no rendering context!")},x._setViewport=function(e,t,i,s){this._rctx?this._rctx.setViewport(e,t,i,s):this._dbg(g.Error,"setViewport callback has no rendering context!")},x._updateMemoryUsage=function(){this._layers.forEach(((e,t)=>{if(e.needMemoryUsageUpdate){const i=this._vxl.estimate_memory_usage(t);i>=0&&(e.needMemoryUsageUpdate=!1,e.layerView.setUsedMemory(i))}}))},x._syncRequestsResponses=function(){this._layers.forEach(((e,i)=>{const s=[];e.responses.forEach(((t,r)=>{s.push(r),this._dbg(g.RequestResponse,"responding for requestID:"+r+" size:"+t.size),this._vxl.respond(i,r,t),t.requestType!==o.VoxelRequestType.TreeIndex&&t.requestType!==o.VoxelRequestType.Section||(e.needMemoryUsageUpdate=!0)}));const r=e.responses;for(const t of s)r.delete(t);const a=this._vxl.get_new_requests(i),l=e.abortController.signal;for(const o in a){e.outstandingRequestCount+=1,1===e.outstandingRequestCount&&e.layerView.updatingFlagChanged();const i=a[o],s={responseType:"array-buffer",signal:l};this._dbg(g.RequestResponse,"making requestID:"+o+" url:"+i.url),t(i.url,s).then((t=>{e.outstandingRequestCount-=1,0===e.outstandingRequestCount&&e.layerView.updatingFlagChanged(),this._dbg(g.RequestResponse,"have response for requestID:"+o);let s=0;if(t.data.byteLength>0){s=this._vxl._malloc(t.data.byteLength);const e=new Uint8Array(this._vxl.HEAPU8.buffer,s,t.data.byteLength),i=new Uint8Array(t.data);for(let s=0;s<t.data.byteLength;++s)e[s]=i[s]}r.set(+o,{responseType:i.responseType,ptr:s,size:t.data.byteLength,success:!0,requestType:i.requestType})})).catch((t=>{e.outstandingRequestCount-=1,0===e.outstandingRequestCount&&e.layerView.updatingFlagChanged(),n.isAbortError(t)||(this._dbg(g.Error,`requestID:${o} failed, error=${t.toString()}`),r.set(+o,{responseType:i.responseType,ptr:0,size:0,success:!1,requestType:i.requestType}))}))}}))},x.updateWasmCamera=function(e){this._vxl.set_projection_matrix.apply(this._vxl,e.projectionMatrix),this._vxl.set_view_matrix.apply(this._vxl,e.viewMatrix),this._vxl.set_near_far(e.near,e.far)},x.isUpdating=function(e){return!(this._vxl||!this._vxlPromise)||!!this._layers.has(e)&&this._layers.get(e).outstandingRequestCount>0},x.setEnabled=function(e,t){this._layers.forEach(((i,s)=>{i.layerView===e&&(this._vxl.set_enabled(s,t),this._renderPluginContext.requestRender())}))},x.setSlices=function(e,t){const i={mask:o.UpdateFlags.Slices,slices:{planes:t,currentEditPlane:-1}};return this._doMaskedUIUpdate(e,i,!0)},x.setDynamicSections=function(e,t){const i={mask:o.UpdateFlags.DynamicSections,dynamicSections:{planes:t,currentEditPlane:-1}};return this._doMaskedUIUpdate(e,i,!0)},x.setStaticSections=function(e,t){const i={mask:o.UpdateFlags.StaticSections,staticSections:t};return this._doMaskedUIUpdate(e,i,!0)},x.setCurrentVariable=function(e,t){const i={mask:o.UpdateFlags.CurrentVariable,currentVariable:t};return this._doMaskedUIUpdate(e,i,!0)},x.setRenderMode=function(e,t){const i={mask:o.UpdateFlags.RenderMode,renderMode:t};return this._doMaskedUIUpdate(e,i,!0)},x._doMaskedUIUpdate=function(e,t,i){if(!this._vxl)return!1;let s=!1;return this._layers.forEach(((i,r)=>{if(i.layerView===e){const e={str:JSON.stringify(t),byteCount:0,ptr:0,isReusable:!1};this._allocateBlock(e)&&(s=1===this._vxl.handle_masked_ui_update(r,e.ptr,e.byteCount),e.isReusable||this._vxl._free(e.ptr))}})),s&&i&&this._renderPluginContext.requestRender(),s},x.addVoxelLayer=function(e){if(!this._vxl){const t={layerView:e,resolveCallback:null,rejectCallback:null},i=new Promise(((e,i)=>{t.resolveCallback=e,t.rejectCallback=i}));return this._newLayers.push(t),i}const t=this._addVoxelLayer(e);return t<0?Promise.reject(-1):Promise.resolve(t)},x.removeVoxelLayer=function(e){if(!this._vxl){const t=this._newLayers.findIndex((t=>e===t.layerView));t>=0&&(this._newLayers[t].resolveCallback(-1),this._newLayers.splice(t,1));const i=this._newLayers.length;return 0===i&&(this._dbg(g.Lifetime," no voxel layers left after removing a layer, removing RenderPlugin and destroying"),this.destroy()),i}let t=-1;this._layers.forEach(((i,s)=>{i.layerView===e&&(t=s,i.abortController.abort(),this._vxl.remove_layer(t))})),t>=0&&this._layers.delete(t);const i=this._layers.size;return 0===i&&(this._dbg(g.Lifetime," no voxel layers left after removing a layer, removing RenderPlugin and destroying"),this.destroy()),i},x._getBlockSize=function(e){for(const t of this._wasmMemBlockSizes)if(e<t)return t;return-1},x._allocateBlock=function(e){e.byteCount=this._vxl.lengthBytesUTF8(e.str)+1;const t=this._getBlockSize(e.byteCount);return t<0?(e.isReusable=!1,e.ptr=this._vxl._malloc(e.byteCount)):(e.isReusable=!0,e.ptr=this._wasmMemBlocks.get(t),0===e.ptr&&(e.ptr=this._vxl._malloc(t),this._wasmMemBlocks.set(t,e.ptr))),0!==e.ptr&&(this._vxl.stringToUTF8(e.str,e.ptr,e.byteCount),!0)},x._getTimeArgs=function(e){let t=-Number.MAX_VALUE,i=Number.MAX_VALUE,s=!1;return r.isSome(e)&&(e.isAllTime?s=!0:(r.isSome(e.start)&&(s=!0,t=e.start.getTime()/1e3),r.isSome(e.end)&&(s=!0,i=e.end.getTime()/1e3))),{startTime:t,endTime:i,useTime:s}},x._addVoxelLayer=function(e){var t;const s=e.layer;let r=-1;const n=s.getConfiguration();if(n.length<1)return-1;const a={str:n,byteCount:0,ptr:0,isReusable:!1};if(!this._allocateBlock(a))return-1;const o=this._getTimeArgs(null==(t=this._view)?void 0:t.timeExtent),l=this._view.spatialReference.isWGS84&&s.spatialReference.isWGS84?111319.49079327357:1;if(r=this._vxl.add_layer(s.serviceRoot,a.ptr,a.byteCount,l,l,o.startTime,o.endTime,o.useTime,this._toWasmQuality(this._view.qualityProfile)),a.isReusable||this._vxl._free(a.ptr),r>=0){const t=new AbortController;if(this._layers.set(r,{layerView:e,responses:new Map,outstandingRequestCount:0,abortController:t,needMemoryUsageUpdate:!1}),!this._halfIntTexturesAvailable||i("mac")){const t=[];let i="";for(const s of e.layer.variables)"Int16"!==s.renderingFormat.type&&"UInt16"!==s.renderingFormat.type||(t.push(s.name),s.id===e.layer.style.currentVariableId&&(i=s.name));""!==i&&u.error("#addVoxelLayer_error()",e.layer,`The voxel layer '${e.layer.title}' cannot render the current variable '${i}' in this browser`),t.length>0&&u.warn("#addVoxelLayer_warning()",e.layer,`The voxel layer '${e.layer.title}' cannot render the variables '${t.toString()}' in this browser`)}return i("esri-mobile")&&u.warnOnce("Mobile support differs across devices. Voxel layer might not display as expected."),r}return-1},x.prepareRender=function(e){if(!this._vxl)return;const t=e.viewForward,i=e.eye;this._vxl.update_camera_pos_and_direction(i[0],i[1],i[2],t[0],t[1],t[2]);const s=this._vxl.cull();this._dbg(g.RequestResponse,"missingResourceCount="+s),this._moreToLoad=s>0,this._havePreparedWithAllLayers=0===this._newLayers.length,this._updateMemoryUsage()},x.render=function(e){if(!this._vxl||e.pass!==this._renderPass||e.slot!==this._renderSlot)return;for(const i of this._newLayers){const e=this._addVoxelLayer(i.layerView);-1===e?i.rejectCallback(-1):i.resolveCallback(e)}if(this._newLayers=[],0===this._layers.size)return void this._dbg(g.Error,"No voxel layers but RenderPlugin instance is being asked to render!");this._renderTargetToRestore={fbo:this._rctx.getBoundFramebufferObject(),viewport:this._rctx.getViewport()},this._syncRequestsResponses(),this._lastFrameWasStationary=this._view.stationary,this._rctx.setPolygonOffsetFillEnabled(!1),this._rctx.setScissorTestEnabled(!1),this._rctx.setColorMask(!0,!0,!0,!0),this._vxl.begin_color_frame(!this._view.stationary||this._moreToLoad,e.scenelightingData.lightingMainDirection[0],e.scenelightingData.lightingMainDirection[1],e.scenelightingData.lightingMainDirection[2]);const t=this._renderTargetToRestore.viewport;t.width===this._viewportWidth&&t.height===this._viewportHeight||(this._viewportWidth=t.width,this._viewportHeight=t.height,this._vxl.set_viewport(t.width,t.height),this._layers.forEach((e=>{e.needMemoryUsageUpdate=!0}))),0===t.x&&0===t.y||this._dbg(g.Error,"Unsupported viewport parameters detected!"),this.updateWasmCamera(e.camera),this._vxl.draw(),this._renderTargetToRestore.fbo=null,e.rctx.externalTextureUnitUpdate(this._vxl.get_texture_units_bound_in_frame(),this._vxl.get_active_texture_unit()),e.rctx.externalVertexArrayObjectUpdate(),e.rctx.externalVertexBufferUpdate(),this._rctx.externalProgramUpdate(),(this._moreToLoad||!this._havePreparedWithAllLayers&&this._layers.size>0)&&this._renderPluginContext.requestRender()},x.destroy=function(){this._dbg(g.Lifetime,"--destroy--"),this._removeRenderPlugin(),this._readyWatchHandle=r.removeMaybe(this._readyWatchHandle),this._qualityWatchHandle=r.removeMaybe(this._qualityWatchHandle),this._timeExtentWatchHandle=r.removeMaybe(this._timeExtentWatchHandle),this._stationaryWatchHandle=r.removeMaybe(this._stationaryWatchHandle),this._vxl&&(this._layers.forEach((e=>{e.abortController.abort()})),this._wasmMemBlocks.forEach((e=>{0!==e&&this._vxl._free(e)})),this._vxl.uninitialize_voxel_wasm(),this._vxl=null)},x._initializeWasm=function(e){return this._vxl?Promise.resolve():(this._vxlPromise||(this._vxlPromise=l.loadVoxelWASM(e).then((e=>{var t;if(this._vxl=e,this._vxlPromise=null,this._newLayers.length<=0)return this._dbg(g.Lifetime," no voxel layers left after WASM downloaded, removing RenderPlugin and destroying"),void this.destroy();const s=this._getTimeArgs(null==(t=this._view)?void 0:t.timeExtent),r=this._vxl.addFunction(this._restoreFramebuffer.bind(this),"v"),n=this._vxl.addFunction(this._setBlendState.bind(this),"viiii"),a=this._vxl.addFunction(this._setFrontFace.bind(this),"vi"),o=this._vxl.addFunction(this._setRasterizerState.bind(this),"vi"),l=this._vxl.addFunction(this._setDepthStencilStateFunction.bind(this),"viii"),h=this._vxl.addFunction(this._setViewport.bind(this),"viiii"),c=this._vxl.addFunction(this._bindPreviousDepthToSlot.bind(this),"iii"),_=this._vxl.addFunction(this._modifyResourceCount.bind(this),"viii"),d=this._halfIntTexturesAvailable&&!i("mac");this._vxl.initialize_voxel_wasm(r,n,a,o,l,h,c,_,s.startTime,s.endTime,s.useTime,d),this._renderPluginContext&&this._renderPluginContext.requestRender()})).catch((()=>{for(const e of this._newLayers)e.rejectCallback(-2);this._dbg(g.Error," WASM failed to download, removing RenderPlugin and destroying"),this.destroy()}))),this._vxlPromise)},x.pickDepth=function(e,t,i){if(!this._vxl||!this._rctx||0===this._layers.size)return null;const s=i.viewport[3]-t;if(e<0||e>i.viewport[2]||t<0||t>i.viewport[3])return this._dbg(g.Error,`pickDepth: outOfRange, screenXY=[${e}, ${s}], vp=[${i.viewport.toString()}]`),null;this._renderTargetToRestore={fbo:this._rctx.getBoundFramebufferObject(),viewport:this._rctx.getViewport()};const r=i.viewForward,n=i.eye;this._vxl.update_camera_pos_and_direction(n[0],n[1],n[2],r[0],r[1],r[2]),this.updateWasmCamera(i),this._vxl.begin_frame();const a=this._vxl.pick_depth(e,s);if(this._renderTargetToRestore.fbo=null,this._rctx.externalTextureUnitUpdate(this._vxl.get_texture_units_bound_in_frame(),this._vxl.get_active_texture_unit()),this._rctx.externalVertexArrayObjectUpdate(),this._rctx.externalVertexBufferUpdate(),this._rctx.externalProgramUpdate(),a.success){return a.distanceToCamera}return null},x._toWasmQuality=function(e){switch(e){case"low":return 0;case"medium":return 1;case"high":return 2}},e._createClass(s,[{key:"canRender",get:function(){return!!this._vxl&&"local"===this._view.viewingMode}}]),s}()}));
