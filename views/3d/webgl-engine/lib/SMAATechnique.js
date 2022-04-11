/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","./DefaultVertexAttributeLocations","./Program","../../../../chunks/SMAA.glsl","../../../webgl/renderState"],(function(e,t,r,i,n,o,u,a,l,s,c){"use strict";let h=function(e){function t(){return e.apply(this,arguments)||this}r._inheritsLoose(t,e);var i=t.prototype;return i.initializeProgram=function(e){const r=t.shader.get(),i=this.configuration,n=r.build({output:i.output,threshold:.05,localConstrastAdaption:2,maxSearchSteps:8,maxDistanceAreaTex:16});return new l.Program(e.rctx,n,a.Default3D)},i.initializePipeline=function(){return c.makePipelineState({colorWrite:c.defaultColorWriteParams})},t}(o.ShaderTechnique);h.shader=new n.ReloadableShaderModule(s.SMAAShader,(()=>new Promise(((t,r)=>e(["../shaders/SMAA.glsl"],t,r)))));let d=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).output=s.SMAAOutput.EdgeDetector,t}return r._inheritsLoose(t,e),t}(u.ShaderTechniqueConfiguration);i.__decorate([u.parameter({count:s.SMAAOutput.COUNT})],d.prototype,"output",void 0),t.SMAATechnique=h,t.SMAATechniqueConfiguration=d,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));