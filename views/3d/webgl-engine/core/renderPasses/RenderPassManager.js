/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../../../../../chunks/mat3","../../../../../chunks/mat3f64","../../../../../chunks/mat4","../../../../../chunks/vec2","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../chunks/vec4","../../../../../chunks/boundedPlane","./AllRenderPasses","./RenderPass","../util/TwoVectorPosition","../../lib/depthRange","../../lib/RenderPass","../../lib/RenderSlot"],(function(s,a,e,r,t,i,n,h,P,o,l,m,d,c,u,p,_){"use strict";let R=function(){function s(s,a){this.rctx=s,this.shaderTechniqueRepository=a,this.canRender=!0,this._materialPassParams=new m.MaterialPassesParameters,this._shadowPassParams=new m.ShadowMapPassParameters,this._highlightPassParams=new m.HighlightPassParameters,this._systems=new Set,this._passes={materialOpaque:new d.RenderPass(s,this.shaderTechniqueRepository),materialTransparent:new d.RenderPass(s,this.shaderTechniqueRepository,d.RenderPassSorting.BackToFront),materialIntegratedMesh:new d.RenderPass(s,this.shaderTechniqueRepository),shadowMap:new d.RenderPass(s,this.shaderTechniqueRepository),highlight:new d.RenderPass(s,this.shaderTechniqueRepository),highlightIntegratedMesh:new d.RenderPass(s,this.shaderTechniqueRepository),highlightShadowMap:new d.RenderPass(s,this.shaderTechniqueRepository),defaultShadowMap:new d.RenderPass(s,this.shaderTechniqueRepository)}}var t=s.prototype;return t.register=function(s){this._systems.add(s)},t.prepareRender=function(s){if(0!==this._systems.size){for(const s of Object.values(this._passes))s.prepareSubmit();this._systems.forEach((a=>a.submit(this._passes,{camera:s})));for(const s of Object.values(this._passes))s.finishSubmit();this.shaderTechniqueRepository.frameUpdate()}},t.render=function(s){if(0!==this._systems.size)switch(this._configure(s),s.slot){case _.RenderSlot.OPAQUE_PLUGIN:switch(s.pass){case p.RenderPass.MATERIAL:return this._materialPassParams.subPass=m.MaterialSubPass.Color,this._configureMaterialColorPass(s),this._passes.materialOpaque.dispatch(this._materialPassParams);case p.RenderPass.MATERIAL_DEPTH:return this._materialPassParams.subPass=m.MaterialSubPass.Depth,this._passes.materialOpaque.dispatch(this._materialPassParams);case p.RenderPass.MATERIAL_NORMAL:return this._materialPassParams.subPass=m.MaterialSubPass.Normal,this._passes.materialOpaque.dispatch(this._materialPassParams);case p.RenderPass.MATERIAL_HIGHLIGHT:return this._passes.highlight.dispatch(this._highlightPassParams);case p.RenderPass.MATERIAL_DEPTH_SHADOWMAP_ALL:return this._passes.shadowMap.dispatch(this._shadowPassParams);case p.RenderPass.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT:return this._passes.highlightShadowMap.dispatch(this._shadowPassParams);case p.RenderPass.MATERIAL_DEPTH_SHADOWMAP_DEFAULT:return this._passes.defaultShadowMap.dispatch(this._shadowPassParams)}return;case _.RenderSlot.TRANSPARENT_PLUGIN:switch(s.pass){case p.RenderPass.MATERIAL:return this._materialPassParams.subPass=m.MaterialSubPass.Color,this._configureMaterialColorPass(s),this._passes.materialTransparent.dispatch(this._materialPassParams);case p.RenderPass.MATERIAL_ALPHA:return this._materialPassParams.subPass=m.MaterialSubPass.Alpha,this._configureMaterialColorPass(s),this._passes.materialTransparent.dispatch(this._materialPassParams);case p.RenderPass.MATERIAL_DEPTH:return this._materialPassParams.subPass=m.MaterialSubPass.Depth,this._passes.materialTransparent.dispatch(this._materialPassParams);case p.RenderPass.MATERIAL_NORMAL:return this._materialPassParams.subPass=m.MaterialSubPass.Normal,this._passes.materialTransparent.dispatch(this._materialPassParams)}return;case _.RenderSlot.INTEGRATED_MESH:switch(s.pass){case p.RenderPass.MATERIAL:return this._materialPassParams.subPass=m.MaterialSubPass.Color,this._configureMaterialColorPass(s),this._materialPassParams.ssrParams=s.ssrParams,this._passes.materialIntegratedMesh.dispatch(this._materialPassParams);case p.RenderPass.MATERIAL_DEPTH:return this._materialPassParams.subPass=m.MaterialSubPass.Depth,this._passes.materialIntegratedMesh.dispatch(this._materialPassParams);case p.RenderPass.MATERIAL_NORMAL:return this._materialPassParams.subPass=m.MaterialSubPass.Normal,this._passes.materialIntegratedMesh.dispatch(this._materialPassParams);case p.RenderPass.MATERIAL_HIGHLIGHT:return this._passes.highlightIntegratedMesh.dispatch(this._highlightPassParams)}return}},t.notifyDirty=function(){this._context.requestRender()},t.slots=function(){return[_.RenderSlot.OPAQUE_PLUGIN,_.RenderSlot.TRANSPARENT_PLUGIN,_.RenderSlot.INTEGRATED_MESH]},t.initializeRenderContext=function(s){this._context=s},t.uninitializeRenderContext=function(){},t.queryDepthRange=function(s){const a={near:1/0,far:-1/0};return this._systems.forEach((r=>{const t=r.queryShadowCasterDepthRange(s);e.isSome(t)&&u.union(a,t,a)})),a},t._configureMaterialColorPass=function(s){this._materialPassParams.bindShadowMap=a=>{s.shadowMap.bind(a);const e=this._materialPassParams.viewTransform;h.add(T,e.transformWorldFromViewTL,e.transformWorldFromViewTH),s.shadowMap.bindView(a,T)},this._materialPassParams.bindAmbientOcclusion=a=>s.ssaoHelper.bind(a,s.camera),this._materialPassParams.ambientOcclusionEnabled=!!s.ssaoHelper&&s.ssaoHelper.ready,this._materialPassParams.sceneHasOcludees=s.hasOccludees},t._configure=function(s){const a=s.pass===p.RenderPass.MATERIAL_DEPTH_SHADOWMAP_ALL||s.pass===p.RenderPass.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT||s.pass===p.RenderPass.MATERIAL_DEPTH_SHADOWMAP_DEFAULT?this._shadowPassParams:s.pass===p.RenderPass.MATERIAL_HIGHLIGHT?this._highlightPassParams:this._materialPassParams;this._updateParameters(s,a)},t._updateParameters=function(s,a){const e=s.camera,t=e.viewInverseTransposeMatrix;h.set(T,t[3],t[7],t[11]),g.set(T),h.copy(a.viewTransform.transformWorldFromViewTH,g.high),h.copy(a.viewTransform.transformWorldFromViewTL,g.low),r.fromMat4(a.viewTransform.transformViewFromCameraRelativeRS,e.viewMatrix),i.copy(a.viewTransform.transformProjFromView,e.projectionMatrix),a.identifier===m.RenderPassIdentifier.Material?(this._materialPassParams.transparent=s.slot===_.RenderSlot.TRANSPARENT_PLUGIN,this._materialPassParams.integratedMesh=s.slot===_.RenderSlot.INTEGRATED_MESH,this._materialPassParams.lighting=s.scenelightingData,r.transpose(f,a.viewTransform.transformViewFromCameraRelativeRS),r.invert(a.transformNormalViewFromGlobal,f),n.copy(a.nearFar,e.nearFar)):a.identifier===m.RenderPassIdentifier.ShadowMap?n.copy(a.nearFar,e.nearFar):a.identifier===m.RenderPassIdentifier.Highlight&&(a.highlightDepthTexture=s.highlightDepthTexture,o.copy(a.viewport,e.fullViewport)),a.identifier!==m.RenderPassIdentifier.Material&&a.identifier!==m.RenderPassIdentifier.Highlight||(a.inverseViewport[0]=1/e.fullViewport[2],a.inverseViewport[1]=1/e.fullViewport[3]),l.copyWithoutVerify(s.sliceHelper.plane,a.slicePlane),h.subtract(a.slicePlane.origin,a.slicePlane.origin,T),a.slicePlaneEnabled=s.sliceHelper.isEnabled,this._materialPassParams.slot=s.slot,this._materialPassParams.transparencyPassType=s.transparencyPassType,this._materialPassParams.multipassTerrainParams=s.multipassTerrainParams},a._createClass(s,[{key:"shadowCastingEnabled",get:function(){return this._materialPassParams.shadowsEnabled},set:function(s){this._materialPassParams.shadowsEnabled=s}},{key:"fillLightsEnabled",get:function(){return this._materialPassParams.hasFillLights},set:function(s){this._materialPassParams.hasFillLights=s}},{key:"screenSpaceReflectionsEnabled",get:function(){return e.isSome(this._materialPassParams.ssrParams.ssrEnabled)},set:function(s){this._materialPassParams.ssrParams.ssrEnabled=!!s}},{key:"needsHighlight",get:function(){return this._passes.highlight.count>0||this._passes.highlightIntegratedMesh.count>0}},{key:"needsTransparentPass",get:function(){return this._passes.materialTransparent.count>0}}]),s}();const T=P.create(),f=t.create(),g=new c.TwoVectorPosition;s.RenderPassManager=R,Object.defineProperties(s,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
