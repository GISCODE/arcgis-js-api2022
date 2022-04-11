/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/Handles","../../../core/has","../../../core/mathUtils","../../../core/maybe","../../../core/watchUtils","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../../chunks/mat3","../../../chunks/mat3f64","../../../chunks/mat4","../../../chunks/mat4f64","../../../chunks/vec3f32","../../../geometry/projectionEllipsoid","./CloudsPresets","./CloudsTechnique","./NoiseTextureAtlas","../webgl-engine/lib/glUtil3D","../../support/Scheduler","../../webgl/enums","../../webgl/FramebufferObject"],(function(e,t,r,i,s,o,a,n,u,c,h,l,d,p,f,_,y,m,g,T,b,v,x,S,C,M){"use strict";e.CloudsGenerator=function(e){function r(t){var r;return(r=e.call(this,t)||this)._frameTask=null,r._handles=new s,r._cubeMapSize=o("esri-mobile")?1024:2048,r._techniques=[],r._techniqueConfiguration=new b.CloudsTechniqueConfiguration,r.coverage=a.lerp(U.coverage[0],U.coverage[1],.5),r.density=a.lerp(U.density[0],U.density[1],.5),r.absorption=a.lerp(U.absorption[0],U.absorption[1],.5),r.cloudSize=a.lerp(U.cloudSize[0],U.cloudSize[1],.5),r.detailSize=a.lerp(U.detailSize[0],U.detailSize[1],.5),r.smoothness=a.lerp(U.smoothness[0],U.smoothness[1],.5),r.cloudHeight=a.lerp(U.cloudHeight[0],U.cloudHeight[1],.5),r.raymarchingStepType=U.raymarchingStepType,r._cloudRadius=0,r._viewMatrix=y.create(),r._viewMatrix3=f.create(),r.running=!1,r}t._inheritsLoose(r,e);var i=r.prototype;return i._getTechnique=function(e){const t=this._techniques[e];return t||(this._techniqueConfiguration.steps=e,this._techniques[e]=new b.CloudsTechnique({rctx:this.rctx,viewingMode:this.view.state.viewingMode},this._techniqueConfiguration),this._techniques[e])},i.initialize=function(){this._vao=x.createQuadVAO(this.rctx);const e=g.getReferenceEllipsoid(this.view.spatialReference);this._cloudRadius=.5*e.radius,this.setDirty(),this._frameTask=this.view.resourceController.scheduler.registerTask(S.TaskPriority.CLOUDS_GENERATOR,this),this._handles.add(this._frameTask),this._handles.add(u.init(this,"coverage",(()=>this.setDirty())));["coverage","density","absorption","cloudSize","detailSize","smoothness","cloudHeight","raymarchingStepType"].forEach((e=>this._handles.add(u.init(this,e,(()=>this.setDirty())))))},i.destroy=function(){this._handles.destroy(),this._techniques.forEach((e=>n.releaseMaybe(e))),this._techniques=null,this._frameBufferCube=n.disposeMaybe(this._frameBufferCube),this._vao=n.disposeMaybe(this._vao),this._noiseTexture=n.destroyMaybe(this._noiseTexture)},i._ensureNoiseTexture=function(){return n.isNone(this._noiseTexture)&&(this._noiseTexture=new v.NoiseTextureAtlas(this.rctx,this.view),this._noiseTexture.render(this.rctx)),this._noiseTexture.textureAtlas},i.applyPreset=function(e,t){const r=e.median,i=e=>{const i=a.lerp(e[0],e[1],r);return t<.5?a.lerp(e[0],i,2*t):a.lerp(i,e[1],2*(t-.5))};this.coverage=i(e.coverage),this.density=i(e.density),this.absorption=i(e.absorption),this.cloudSize=i(e.cloudSize),this.detailSize=i(e.detailSize),this.smoothness=i(e.smoothness),this.cloudHeight=i(e.cloudHeight),this.raymarchingStepType=e.raymarchingStepType},i.setDirty=function(){this.running=!0},i.runTask=function(e){if(0===this.coverage||n.isNone(this._vao))return void(this.running=!1);const t=this._ensureNoiseTexture();if(n.isNone(t))return void(this.running=!1);const r=this._getTechnique(this.raymarchingStepType);if(!this.rctx.isTechniqueCompiled(r))return;const i=this.rctx.getViewport();this.rctx.setViewport(0,0,this._cubeMapSize,this._cubeMapSize),this.rctx.bindFramebuffer(this.frameBufferCube);const s=this.rctx.useTechnique(r),o=1+this.absorption,u=a.lerp(35,120,this.absorption);s.bindTexture(t,"cloudShapeTexture"),s.setUniform1f("cloudRadius",this._cloudRadius),s.setUniform1f("halfCubeMapSize",.5*this._cubeMapSize),s.setUniform1f("power",u),s.setUniform1f("sigmaE",o),s.setUniform1f("density",a.lerp(0,.3,this.density)),s.setUniform1f("cloudSize",a.lerp(0,.02,Math.max(.01,1-this.cloudSize))),s.setUniform1f("detailSize",a.lerp(0,.2,Math.max(.01,1-this.detailSize))),s.setUniform1f("smoothness",a.lerp(0,.5,1-this.smoothness)),s.setUniform1f("cloudHeight",a.lerp(0,1500,this.cloudHeight)),s.setUniform1f("coverage",this.coverage),this.rctx.bindVAO(this._vao),s.assertCompatibleVertexAttributeLocations(this._vao);for(let a=0;a<5;a++){const e=w[a],t=z[a];_.targetTo(this._viewMatrix,G,e,t),p.fromMat4(this._viewMatrix3,this._viewMatrix),s.setUniformMatrix3fv("view",this._viewMatrix3);const r=C.TextureType.TEXTURE_CUBE_MAP_POSITIVE_X+a;this.frameBufferCube.setColorTextureTarget(r),this.rctx.gl.drawArrays(this.rctx.gl.TRIANGLE_STRIP,0,4),this.rctx.gl.flush()}this.running=!1,this.rctx.setViewport(i.x,i.y,i.width,i.height),this.requestRender(),e.madeProgress()},t._createClass(r,[{key:"frameBufferCube",get:function(){if(n.isNone(this._frameBufferCube)){const e={target:C.TextureType.TEXTURE_CUBE_MAP,pixelFormat:C.PixelFormat.RGBA,dataType:C.PixelType.UNSIGNED_BYTE,wrapMode:C.TextureWrapMode.CLAMP_TO_EDGE,samplingMode:C.TextureSamplingMode.LINEAR,hasMipmap:!1,width:this._cubeMapSize,height:this._cubeMapSize};this._frameBufferCube=new M.FramebufferObject(this.rctx,{colorTarget:C.TargetType.CUBEMAP,width:this._cubeMapSize,height:this._cubeMapSize},e)}return this._frameBufferCube}},{key:"cubeMap",get:function(){return this._frameBufferCube}}]),r}(i),r.__decorate([c.property({constructOnly:!0})],e.CloudsGenerator.prototype,"rctx",void 0),r.__decorate([c.property({constructOnly:!0})],e.CloudsGenerator.prototype,"view",void 0),r.__decorate([c.property({constructOnly:!0})],e.CloudsGenerator.prototype,"requestRender",void 0),r.__decorate([c.property()],e.CloudsGenerator.prototype,"_frameTask",void 0),r.__decorate([c.property()],e.CloudsGenerator.prototype,"coverage",void 0),r.__decorate([c.property()],e.CloudsGenerator.prototype,"density",void 0),r.__decorate([c.property()],e.CloudsGenerator.prototype,"absorption",void 0),r.__decorate([c.property()],e.CloudsGenerator.prototype,"cloudSize",void 0),r.__decorate([c.property()],e.CloudsGenerator.prototype,"detailSize",void 0),r.__decorate([c.property()],e.CloudsGenerator.prototype,"smoothness",void 0),r.__decorate([c.property()],e.CloudsGenerator.prototype,"cloudHeight",void 0),r.__decorate([c.property()],e.CloudsGenerator.prototype,"raymarchingStepType",void 0),r.__decorate([c.property()],e.CloudsGenerator.prototype,"running",void 0),e.CloudsGenerator=r.__decorate([d.subclass("esri.views.3d.environment.CloudsGenerator")],e.CloudsGenerator);const w=[m.fromValues(1,0,0),m.fromValues(-1,0,0),m.fromValues(0,1,0),m.fromValues(0,-1,0),m.fromValues(0,0,1)],z=[m.fromValues(0,1,0),m.fromValues(0,1,0),m.fromValues(0,0,-1),m.fromValues(0,0,1),m.fromValues(0,1,0)],G=m.zeros(),U=T.cloudPresets.sunny;Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));