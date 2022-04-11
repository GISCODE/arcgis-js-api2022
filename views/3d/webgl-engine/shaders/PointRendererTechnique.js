/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../core/shaderLibrary/ShaderOutputOptions","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","../lib/Program","../lib/StencilUtils","../../../../chunks/PointRenderer.glsl","../../../webgl/enums","../../../webgl/renderState"],(function(e,r,t,i,n,a,o,l,u,s,c,d,h,p){"use strict";let S=function(e){function r(r,t,i){return e.call(this,r,t,i)||this}t._inheritsLoose(r,e);var i=r.prototype;return i.initializeProgram=function(e){const t=r.shader.get(),i=this.configuration,n=t.build({output:i.output,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!0,drawScreenSize:i.drawScreenSize});return new s.Program(e.rctx,n,u.Default3D)},i.initializePipeline=function(){return p.makePipelineState({depthTest:{func:h.CompareFunction.LESS},depthWrite:p.defaultDepthWriteParams,colorWrite:p.defaultColorWriteParams,stencilWrite:this.configuration.sceneHasOcludees?c.stencilWriteMaskOn:null,stencilTest:this.configuration.sceneHasOcludees?c.stencilBaseAllZerosParams:null})},r}(o.ShaderTechnique);S.shader=new a.ReloadableShaderModule(d.PointRendererShader,(()=>new Promise(((r,t)=>e(["./PointRenderer.glsl"],r,t)))));let P=function(e){function r(){var r;return(r=e.apply(this,arguments)||this).output=n.ShaderOutput.Color,r.slicePlaneEnabled=!1,r.drawScreenSize=!1,r.sceneHasOcludees=!1,r}return t._inheritsLoose(r,e),r}(l.ShaderTechniqueConfiguration);i.__decorate([l.parameter({count:n.ShaderOutput.COUNT})],P.prototype,"output",void 0),i.__decorate([l.parameter()],P.prototype,"slicePlaneEnabled",void 0),i.__decorate([l.parameter()],P.prototype,"drawScreenSize",void 0),i.__decorate([l.parameter()],P.prototype,"sceneHasOcludees",void 0),r.PointRendererTechnique=S,r.PointRendererTechniqueConfiguration=P,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
