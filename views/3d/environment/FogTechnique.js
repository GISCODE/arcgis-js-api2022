/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["require","exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../chunks/Fog.glsl","../webgl-engine/core/shaderTechnique/ReloadableShaderModule","../webgl-engine/core/shaderTechnique/ShaderTechnique","../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration","../webgl-engine/lib/DefaultVertexAttributeLocations","../webgl-engine/lib/Program","../../webgl/enums","../../webgl/renderState"],(function(e,n,r,i,t,a,o,l,u,c,d,s){"use strict";let h=function(e){function n(){return e.apply(this,arguments)||this}r._inheritsLoose(n,e);var i=n.prototype;return i.initializeProgram=function(e){const r=n.shader.get(),i=this.configuration,t=r.build({haze:i.haze});return new c.Program(e.rctx,t,u.Default3D)},i.initializePipeline=function(){return this.configuration.haze?s.makePipelineState({blending:s.separateBlendingParams(d.BlendFactor.ONE,d.BlendFactor.ZERO,d.BlendFactor.ONE_MINUS_SRC_COLOR,d.BlendFactor.ONE),colorWrite:s.defaultColorWriteParams}):s.makePipelineState({blending:s.separateBlendingParams(d.BlendFactor.SRC_ALPHA,d.BlendFactor.ZERO,d.BlendFactor.ONE_MINUS_SRC_ALPHA,d.BlendFactor.ONE),colorWrite:s.defaultColorWriteParams})},n}(o.ShaderTechnique);h.shader=new a.ReloadableShaderModule(t.FogShader,(()=>new Promise(((n,r)=>e(["./Fog.glsl"],n,r)))));let g=function(e){function n(){var n;return(n=e.apply(this,arguments)||this).haze=!1,n}return r._inheritsLoose(n,e),n}(l.ShaderTechniqueConfiguration);i.__decorate([l.parameter()],g.prototype,"haze",void 0),n.FogTechnique=h,n.FogTechniqueConfiguration=g,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
