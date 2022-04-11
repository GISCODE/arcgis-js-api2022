/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/maybe","../../../../renderers/support/heatmapUtils","../core/shaderLibrary/util/View.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","../lib/Program","../../../../chunks/HeatmapDensity.glsl","../../../webgl/enums","../../../webgl/renderState","../../../webgl/Texture"],(function(e,t,r,i,a,n,o,s,l,u,d,c,h,p,m,b){"use strict";var g;t.RadiusMode=void 0,(g=t.RadiusMode||(t.RadiusMode={}))[g.Screen=0]="Screen",g[g.World=1]="World";let f=function(e){function t(t,r,i){var a;(a=e.call(this,t,r,i)||this)._kernelBlurRadius=1;const{R32F:n,textureFloatLinear:o}=t.rctx.capabilities.textureFloat,s=null!=n;a._kernelTextureChannels=s?1:4,a._floatInterpolationDisabled=!o;const l={target:p.TextureType.TEXTURE_2D,pixelFormat:s?p.PixelFormat.RED:p.PixelFormat.RGBA,internalFormat:s?p.SizedPixelFormat.R32F:p.PixelFormat.RGBA,dataType:p.PixelType.FLOAT,samplingMode:p.TextureSamplingMode.NEAREST,wrapMode:p.TextureWrapMode.CLAMP_TO_EDGE,width:1,height:1};return a._kernel=new b.Texture(t.rctx,l),a}r._inheritsLoose(t,e);var i=t.prototype;return i.initializeProgram=function(e){const r=t.shader.get().build({isAttributeDriven:this.configuration.isAttributeDriven,mode:this.configuration.mode});return new c.Program(e.rctx,r,d.Default3D)},i.initializePipeline=function(){return m.makePipelineState({blending:m.simpleBlendingParams(p.BlendFactor.ONE,p.BlendFactor.ONE,p.BlendOperation.ADD),colorWrite:m.defaultColorWriteParams,depthTest:null,depthWrite:null})},i.bindPass=function(e,t){const{camera:r}=t,{mode:i}=this.configuration;switch(o.bindProjectionMatrix(this.program,r.projectionMatrix),i){case h.HeatmapMode.KernelDensity:this._bindKernelDensityPass(e,t);break;case h.HeatmapMode.GaussianBlur:this._bindGaussianBlurPass(e,t)}},i.bindDraw=function(e){o.bindView(this.program,e)},i._bindKernelDensityPass=function({searchRadius:e,resolutionForScale:t},{camera:r,screenToWorldRatio:i}){0!==t&&(e/=i/t),this.program.setUniform1f("radius",e*r.pixelRatio/r.fullViewport[2])},i._bindGaussianBlurPass=function({searchRadius:e,resolutionForScale:t},{camera:r,screenToWorldRatio:i}){const a=Math.round(e),n=3*(0===t?a:a*t/i);0===t||this._floatInterpolationDisabled?this._kernel.setSamplingMode(p.TextureSamplingMode.NEAREST):this._kernel.setSamplingMode(p.TextureSamplingMode.LINEAR),this._kernelBlurRadius!==a&&this._recomputeKernel(a),this.program.setUniform1f("radius",2*n*r.pixelRatio/r.fullViewport[2]),this.program.bindTexture(this._kernel,"kernel")},i._recomputeKernel=function(e){const t=n.createKernel(e),r=Math.ceil(t.length/2),i=this._kernelTextureChannels,a=new Float32Array(r*i);for(let n=0;n<r;++n){const e=t[r-1-n];for(let t=0;t<i;++t)a[n*i+t]=e}this._kernel.resize(r,1),this._kernel.setData(a),this._kernelBlurRadius=e},i.destroy=function(){this._kernel=a.disposeMaybe(this._kernel),e.prototype.destroy.call(this)},t}(l.ShaderTechnique);f.shader=new s.ReloadableShaderModule(h.HeatmapDensityShader,(()=>new Promise(((t,r)=>e(["./HeatmapDensity.glsl"],t,r)))));let _=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).isAttributeDriven=!1,t.mode=h.HeatmapMode.GaussianBlur,t}return r._inheritsLoose(t,e),t}(u.ShaderTechniqueConfiguration);i.__decorate([u.parameter()],_.prototype,"isAttributeDriven",void 0),i.__decorate([u.parameter()],_.prototype,"mode",void 0),Object.defineProperty(t,"HeatmapMode",{enumerable:!0,get:()=>h.HeatmapMode}),t.HeatmapDensityTechnique=f,t.HeatmapDensityTechniqueConfiguration=_,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));