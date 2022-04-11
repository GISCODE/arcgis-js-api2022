/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../core/shaderLibrary/ShaderOutputOptions","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/output/OutputHighlight.glsl","../core/shaderLibrary/shading/MultipassTerrainTest.glsl","../core/shaderLibrary/util/View.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/basicInterfaces","../lib/DefaultVertexAttributeLocations","../lib/OrderIndependentTransparency","../lib/Program","../lib/StencilUtils","../../../../chunks/ColorMaterial.glsl","../../../webgl/renderState"],(function(e,t,r,a,i,o,n,s,l,p,u,c,d,h,g,f,b,y,m){"use strict";let T=function(e){function t(){return e.apply(this,arguments)||this}r._inheritsLoose(t,e);var a=t.prototype;return a.initializeProgram=function(e){const r=t.shader.get(),a=this.configuration,i=r.build({output:a.output,oitEnabled:a.transparencyPassType===d.TransparencyPassType.Color,attributeColor:a.vertexColors,slicePlaneEnabled:a.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,multipassTerrainEnabled:a.multipassTerrainEnabled,cullAboveGround:a.cullAboveGround});return new f.Program(e.rctx,i,h.Default3D)},a.bindPass=function(e,t){l.bindProjectionMatrix(this.program,t.camera.projectionMatrix),this.program.setUniform4fv("eColor",e.color),this.configuration.output===i.ShaderOutput.Highlight&&n.bindOutputHighlight(this.program,t),(this.configuration.output===i.ShaderOutput.Depth||t.multipassTerrainEnabled)&&this.program.setUniform2fv("nearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),s.bindMultipassTerrainTexture(this.program,t))},a.bindDraw=function(e){l.bindView(this.program,e),this.program.rebindTextures(),o.bindSliceUniformsWithOrigin(this.program,this.configuration,e)},a._createPipeline=function(e,t){const r=this.configuration,a=e===d.TransparencyPassType.NONE,o=e===d.TransparencyPassType.FrontFace;return m.makePipelineState({blending:r.output!==i.ShaderOutput.Color&&r.output!==i.ShaderOutput.Alpha||!r.transparent?null:a?g.blendingDefault:g.oitBlending(e),culling:m.cullingParams(r.cullFace),depthTest:{func:g.oitDepthTest(e)},depthWrite:a||o?r.writeDepth&&m.defaultDepthWriteParams:null,colorWrite:m.defaultColorWriteParams,stencilWrite:r.sceneHasOcludees?b.stencilWriteMaskOn:null,stencilTest:r.sceneHasOcludees?t?b.stencilToolMaskBaseParams:b.stencilBaseAllZerosParams:null,polygonOffset:a||o?r.polygonOffset&&P:g.getOITPolygonOffset(r.enableOffset)})},a.initializePipeline=function(){return this._occludeePipelineState=this._createPipeline(this.configuration.transparencyPassType,!0),this._createPipeline(this.configuration.transparencyPassType,!1)},a.getPipelineState=function(t,r){return r?this._occludeePipelineState:e.prototype.getPipelineState.call(this,t,r)},t}(u.ShaderTechnique);T.shader=new p.ReloadableShaderModule(y.ColorMaterialShader,(()=>new Promise(((t,r)=>e(["./ColorMaterial.glsl"],t,r)))));const P={factor:1,units:1};let O=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).output=i.ShaderOutput.Color,t.cullFace=d.CullFaceOptions.None,t.slicePlaneEnabled=!1,t.vertexColors=!1,t.transparent=!1,t.polygonOffset=!1,t.enableOffset=!0,t.writeDepth=!0,t.sceneHasOcludees=!1,t.transparencyPassType=d.TransparencyPassType.NONE,t.multipassTerrainEnabled=!1,t.cullAboveGround=!1,t}return r._inheritsLoose(t,e),t}(c.ShaderTechniqueConfiguration);a.__decorate([c.parameter({count:i.ShaderOutput.COUNT})],O.prototype,"output",void 0),a.__decorate([c.parameter({count:d.CullFaceOptions.COUNT})],O.prototype,"cullFace",void 0),a.__decorate([c.parameter()],O.prototype,"slicePlaneEnabled",void 0),a.__decorate([c.parameter()],O.prototype,"vertexColors",void 0),a.__decorate([c.parameter()],O.prototype,"transparent",void 0),a.__decorate([c.parameter()],O.prototype,"polygonOffset",void 0),a.__decorate([c.parameter()],O.prototype,"enableOffset",void 0),a.__decorate([c.parameter()],O.prototype,"writeDepth",void 0),a.__decorate([c.parameter()],O.prototype,"sceneHasOcludees",void 0),a.__decorate([c.parameter({count:d.TransparencyPassType.COUNT})],O.prototype,"transparencyPassType",void 0),a.__decorate([c.parameter()],O.prototype,"multipassTerrainEnabled",void 0),a.__decorate([c.parameter()],O.prototype,"cullAboveGround",void 0),t.ColorMaterialTechnique=T,t.ColorMaterialTechniqueConfiguration=O,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
