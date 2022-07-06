/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{ReloadableShaderModule as e}from"../core/shaderTechnique/ReloadableShaderModule.js";import{ShaderTechnique as r}from"../core/shaderTechnique/ShaderTechnique.js";import{Default3D as t}from"../lib/DefaultVertexAttributeLocations.js";import{Program as i}from"../lib/Program.js";import{a as o}from"../../../../chunks/ShadowCastAccumulate.glsl.js";import{BlendFactor as s,PrimitiveType as l}from"../../../webgl/enums.js";import{makePipelineState as a,separateBlendingParams as n,defaultColorWriteParams as m}from"../../../webgl/renderState.js";class u extends r{constructor(e,r){super(e,r,(()=>this.destroy()))}initializeProgram(e){const r=u.shader.get().build();return new i(e.rctx,r,t)}initializePipeline(){return a({blending:n(s.ONE,s.ONE,s.ONE,s.ONE),colorWrite:m,depthTest:null,depthWrite:null})}get primitiveType(){return l.TRIANGLE_STRIP}}u.shader=new e(o,(()=>import("./ShadowCastAccumulate.glsl.js")));export{u as ShadowCastAccumulateTechnique};