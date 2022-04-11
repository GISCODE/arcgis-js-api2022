/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../chunks/mat4","../../../../geometry/support/vectorStacks","../core/shaderLibrary/ShaderOutputOptions","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/output/OutputHighlight.glsl","../core/shaderLibrary/shading/MultipassTerrainTest.glsl","../core/shaderLibrary/shading/VisualVariables.glsl","../core/shaderLibrary/util/View.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/basicInterfaces","../lib/OrderIndependentTransparency","../lib/Program","../lib/RenderSlot","../lib/StencilUtils","../lib/VertexAttribute","../../../../chunks/LineMarker.glsl","../../../webgl/renderState"],(function(e,t,r,i,a,n,o,s,l,p,c,u,d,h,m,T,g,b,v,f,P,y,_){"use strict";const S=new Map([[P.VertexAttribute.POSITION,0],[P.VertexAttribute.UV0,2],[P.VertexAttribute.AUXPOS1,3],[P.VertexAttribute.SIZE,6],[P.VertexAttribute.SIZEFEATUREATTRIBUTE,6],[P.VertexAttribute.COLOR,5],[P.VertexAttribute.COLORFEATUREATTRIBUTE,5],[P.VertexAttribute.OPACITYFEATUREATTRIBUTE,7]]);let O=function(e){function t(t,r,i){return e.call(this,t,r,i)||this}r._inheritsLoose(t,e);var i=t.prototype;return i.initializeProgram=function(e){const r=t.shader.get(),i=this.configuration,a=r.build({oitEnabled:i.transparencyPassType===T.TransparencyPassType.Color,output:i.output,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,draped:i.draped,vvColor:i.vvColor,vvSize:i.vvSize,vvInstancingEnabled:!0,vvOpacity:i.vvOpacity,multipassTerrainEnabled:i.multipassTerrainEnabled,cullAboveGround:i.cullAboveGround});return new b.Program(e.rctx,a,S)},i.bindPass=function(e,t){u.bindProjectionMatrix(this.program,t.camera.projectionMatrix),this.configuration.output===o.ShaderOutput.Highlight&&l.bindOutputHighlight(this.program,t),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),p.bindMultipassTerrainTexture(this.program,t)),this.program.setUniform1f("intrinsicWidth",e.width),this.program.setUniform4fv("intrinsicColor",e.color),this.program.setUniform2fv("nearFar",t.camera.nearFar),this.program.setUniform1f("pixelRatio",t.camera.pixelRatio),this.program.setUniform2f("screenSize",t.camera.fullViewport[2],t.camera.fullViewport[3]),c.bindVisualVariablesUniformsWithOpacity(this.program,e)},i.bindDraw=function(e){u.bindView(this.program,e),s.bindSliceUniforms(this.program,this.configuration,e.slicePlane,{origin:e.origin,view:e.camera.viewMatrix}),this.program.setUniformMatrix4fv("inverseProjectionMatrix",a.invert(n.sm4d.get(),e.camera.projectionMatrix)),this.program.rebindTextures()},i._makePipelineState=function(e,t){const r=this.configuration,i=e===T.TransparencyPassType.NONE;return _.makePipelineState({blending:r.output===o.ShaderOutput.Color||r.output===o.ShaderOutput.Alpha?i?g.blendingDefault:g.oitBlending(e):null,depthTest:{func:g.oitDepthTest(e)},depthWrite:i?r.writeDepth&&_.defaultDepthWriteParams:g.oitDepthWrite(e),colorWrite:_.defaultColorWriteParams,stencilWrite:r.sceneHasOcludees?f.stencilWriteMaskOn:null,stencilTest:r.sceneHasOcludees?t?f.stencilToolMaskBaseParams:f.stencilBaseAllZerosParams:null,polygonOffset:{factor:0,units:-10}})},i.initializePipeline=function(){return this.configuration.occluder&&(this._occluderPipelineTransparent=_.makePipelineState({blending:g.blendingDefault,depthTest:f.depthCompareAlways,depthWrite:null,colorWrite:_.defaultColorWriteParams,stencilWrite:null,stencilTest:f.stencilToolTransparentOccluderParams}),this._occluderPipelineOpaque=_.makePipelineState({blending:g.blendingDefault,depthTest:f.depthCompareAlways,depthWrite:null,colorWrite:_.defaultColorWriteParams,stencilWrite:f.stencilWriteMaskOff,stencilTest:f.stencilToolMaskOccluderParams}),this._occluderPipelineMaskWrite=_.makePipelineState({blending:null,depthTest:f.depthCompareLess,depthWrite:null,colorWrite:null,stencilWrite:f.stencilWriteMaskOn,stencilTest:f.stencilToolMaskBaseParams})),this._occludeePipelineState=this._makePipelineState(this.configuration.transparencyPassType,!0),this._makePipelineState(this.configuration.transparencyPassType,!1)},i.getPipelineState=function(t,r){return r?this._occludeePipelineState:this.configuration.occluder?t===v.RenderSlot.TRANSPARENT_OCCLUDER_MATERIAL?this._occluderPipelineTransparent:t===v.RenderSlot.OCCLUDER_MATERIAL?this._occluderPipelineOpaque:this._occluderPipelineMaskWrite:e.prototype.getPipelineState.call(this,t,r)},t}(h.ShaderTechnique);O.shader=new d.ReloadableShaderModule(y.LineMarkerShader,(()=>new Promise(((t,r)=>e(["./LineMarker.glsl"],t,r)))));let A=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).output=o.ShaderOutput.Color,t.occluder=!1,t.slicePlaneEnabled=!1,t.transparent=!1,t.writeDepth=!1,t.draped=!1,t.vvSize=!1,t.vvColor=!1,t.vvOpacity=!1,t.sceneHasOcludees=!1,t.transparencyPassType=T.TransparencyPassType.NONE,t.multipassTerrainEnabled=!1,t.cullAboveGround=!1,t}return r._inheritsLoose(t,e),t}(m.ShaderTechniqueConfiguration);i.__decorate([m.parameter({count:o.ShaderOutput.COUNT})],A.prototype,"output",void 0),i.__decorate([m.parameter()],A.prototype,"occluder",void 0),i.__decorate([m.parameter()],A.prototype,"slicePlaneEnabled",void 0),i.__decorate([m.parameter()],A.prototype,"transparent",void 0),i.__decorate([m.parameter()],A.prototype,"writeDepth",void 0),i.__decorate([m.parameter()],A.prototype,"draped",void 0),i.__decorate([m.parameter()],A.prototype,"vvSize",void 0),i.__decorate([m.parameter()],A.prototype,"vvColor",void 0),i.__decorate([m.parameter()],A.prototype,"vvOpacity",void 0),i.__decorate([m.parameter()],A.prototype,"sceneHasOcludees",void 0),i.__decorate([m.parameter({count:T.TransparencyPassType.COUNT})],A.prototype,"transparencyPassType",void 0),i.__decorate([m.parameter()],A.prototype,"multipassTerrainEnabled",void 0),i.__decorate([m.parameter()],A.prototype,"cullAboveGround",void 0),t.LineMarkerTechnique=O,t.LineMarkerTechniqueConfiguration=A,t.markerVertexAttributeLocations=S,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
