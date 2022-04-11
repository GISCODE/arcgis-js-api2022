/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","./DefaultVertexAttributeLocations","./Program","../../../../chunks/SSAO.glsl","../../../webgl/renderState"],(function(e,t,r,i,u,n,o,a,l,s,h){"use strict";let c=function(e){function t(){return e.apply(this,arguments)||this}r._inheritsLoose(t,e);var i=t.prototype;return i.initializeProgram=function(e){const r=t.shader.get(),i=this.configuration,u=(t.filterRadius+1)/2,n=1/(2*u*u),o=r.build({output:i.output,samples:t.samples,filterRadius:t.filterRadius,blurFalloff:n});return new l.Program(e.rctx,o,a.Default3D)},i.initializePipeline=function(){return h.makePipelineState({colorWrite:h.defaultColorWriteParams})},t}(n.ShaderTechnique);c.shader=new u.ReloadableShaderModule(s.SSAOShader,(()=>new Promise(((t,r)=>e(["../shaders/SSAO.glsl"],t,r))))),c.samples=16,c.filterRadius=4;let d=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).output=s.SSAOOutput.SSAO,t}return r._inheritsLoose(t,e),t}(o.ShaderTechniqueConfiguration);i.__decorate([o.parameter({count:s.SSAOOutput.COUNT})],d.prototype,"output",void 0),t.SSAOTechnique=c,t.SSAOTechniqueConfiguration=d,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));