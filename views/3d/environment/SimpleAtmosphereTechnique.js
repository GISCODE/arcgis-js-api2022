/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["require","exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../chunks/SimpleAtmosphere.glsl","../webgl-engine/core/shaderTechnique/ReloadableShaderModule","../webgl-engine/core/shaderTechnique/ShaderTechnique","../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration","../webgl-engine/lib/DefaultVertexAttributeLocations","../webgl-engine/lib/Program","../../webgl/enums","../../webgl/renderState"],(function(e,r,t,n,i,o,a,l,u,s,c,h){"use strict";let d=function(e){function r(){return e.apply(this,arguments)||this}t._inheritsLoose(r,e);var n=r.prototype;return n.initializeProgram=function(e){const t=r.shader.get(),n=this.configuration,i=t.build({geometry:n.geometry});return new s.Program(e.rctx,i,u.Default3D)},n.initializePipeline=function(){return this.configuration.geometry===i.SimpleAtmosphereGeometry.Cylinder?h.makePipelineState({blending:h.separateBlendingParams(c.BlendFactor.SRC_ALPHA,c.BlendFactor.ONE,c.BlendFactor.ONE_MINUS_SRC_ALPHA,c.BlendFactor.ONE_MINUS_SRC_ALPHA),culling:h.backFaceCullingParams,depthTest:{func:c.CompareFunction.LEQUAL},colorWrite:h.defaultColorWriteParams}):h.makePipelineState({blending:h.separateBlendingParams(c.BlendFactor.SRC_ALPHA,c.BlendFactor.ONE,c.BlendFactor.ONE_MINUS_SRC_ALPHA,c.BlendFactor.ONE_MINUS_SRC_ALPHA),depthTest:{func:c.CompareFunction.LEQUAL},colorWrite:h.defaultColorWriteParams})},r}(a.ShaderTechnique);d.shader=new o.ReloadableShaderModule(i.SimpleAtmosphereShader,(()=>new Promise(((r,t)=>e(["./SimpleAtmosphere.glsl"],r,t)))));let m=function(e){function r(){var r;return(r=e.apply(this,arguments)||this).geometry=i.SimpleAtmosphereGeometry.Cone,r}return t._inheritsLoose(r,e),r}(l.ShaderTechniqueConfiguration);n.__decorate([l.parameter({count:i.SimpleAtmosphereGeometry.COUNT})],m.prototype,"geometry",void 0),r.SimpleAtmosphereTechnique=d,r.SimpleAtmosphereTechniqueConfiguration=m,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
