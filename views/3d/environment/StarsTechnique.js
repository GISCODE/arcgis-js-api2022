/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["require","exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/mat4","../../../chunks/mat4f64","../../../chunks/Stars.glsl","../webgl-engine/core/shaderTechnique/ReloadableShaderModule","../webgl-engine/core/shaderTechnique/ShaderTechnique","../webgl-engine/lib/DefaultVertexAttributeLocations","../webgl-engine/lib/Program","../../webgl/enums","../../webgl/renderState"],(function(e,r,t,i,n,a,o,l,s,c,u,d){"use strict";let m=function(e){function r(r){var t;return t=e.call(this,r,null,(()=>t.destroy()))||this}t._inheritsLoose(r,e);var n=r.prototype;return n.initializeProgram=function(e){const t=r.shader.get().build();return new c.Program(e.rctx,t,s.Default3D)},n.initializePipeline=function(){return d.makePipelineState({blending:d.separateBlendingParams(u.BlendFactor.SRC_ALPHA,u.BlendFactor.ONE,u.BlendFactor.ONE_MINUS_SRC_ALPHA,u.BlendFactor.ONE_MINUS_SRC_ALPHA),depthTest:{func:u.CompareFunction.LEQUAL},colorWrite:d.defaultColorWriteParams})},n.bindPass=function(e){const r=this._makeInfiniteProjectionMatrix(e.camera.projectionMatrix,e.camera.near,h);i.multiply(r,r,e.camera.viewMatrix),i.multiply(r,r,e.modelMatrix),this.program.setUniformMatrix4fv("transform",r),this.program.setUniform4fv("viewport",e.camera.fullViewport),this.program.setUniform1f("pixelRatio",e.camera.pixelRatio)},n._makeInfiniteProjectionMatrix=function(e,r,t){const n=24e-8;return i.copy(t,e),t[10]=n-1,t[11]=-1,t[14]=(n-2)*r,t},r}(l.ShaderTechnique);m.shader=new o.ReloadableShaderModule(a.StarsShader,(()=>new Promise(((r,t)=>e(["./Stars.glsl"],r,t)))));const h=n.create();r.StarsTechnique=m,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
