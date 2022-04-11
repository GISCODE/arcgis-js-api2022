/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","../lib/Program","../../../../chunks/HighlightComposition.glsl","../../../webgl/enums","../../../webgl/renderState"],(function(i,e,t,o,r,n,a,l,h,s,u,c){"use strict";const g=8.6,p=.4;let d=function(i){function e(){return i.apply(this,arguments)||this}t._inheritsLoose(e,i);var o=e.prototype;return o.initializeProgram=function(i){const t=e.shader.get().build(this.configuration);return new h.Program(i.rctx,t,l.Default3D)},o.bindApplyPass=function(i){this.program.setUniform4fv("uColor",i.color),this.program.setUniform4fv("haloColor",i.haloColor),this.program.setUniform1f("outlineSize",g),this.program.setUniform1f("blurSize",p),this.program.setUniform4f("opacities",i.haloOpacity,i.haloOpacityOccluded,i.fillOpacity,i.fillOpacityOccluded)},o.initializePipeline=function(){return this.configuration.highlightStage===s.HighlightCompositionPass.Apply?c.makePipelineState({blending:c.separateBlendingParams(u.BlendFactor.SRC_ALPHA,u.BlendFactor.ONE,u.BlendFactor.ONE_MINUS_SRC_ALPHA,u.BlendFactor.ONE_MINUS_SRC_ALPHA),colorWrite:c.defaultColorWriteParams}):c.makePipelineState({colorWrite:c.defaultColorWriteParams})},t._createClass(e,[{key:"primitiveType",get:function(){return this.configuration.gridOptimization?u.PrimitiveType.TRIANGLES:u.PrimitiveType.TRIANGLE_STRIP}}]),e}(n.ShaderTechnique);d.shader=new r.ReloadableShaderModule(s.HighlightCompositionShader,(()=>new Promise(((e,t)=>i(["./HighlightComposition.glsl"],e,t)))));let m=function(i){function e(){var e;return(e=i.apply(this,arguments)||this).highlightStage=s.HighlightCompositionPass.Blur,e.gridOptimization=!1,e}return t._inheritsLoose(e,i),e}(a.ShaderTechniqueConfiguration);o.__decorate([a.parameter({count:s.HighlightCompositionPass.COUNT})],m.prototype,"highlightStage",void 0),o.__decorate([a.parameter()],m.prototype,"gridOptimization",void 0),e.HighlightCompositionTechnique=d,e.HighlightCompositionTechniqueConfiguration=m,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
