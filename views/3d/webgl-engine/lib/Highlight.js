/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{releaseMaybe as e,disposeMaybe as t,isSome as i}from"../../../../core/maybe.js";import{a as r}from"../../../../chunks/vec2.js";import{c as s}from"../../../../chunks/vec4.js";import{c as a}from"../../../../chunks/vec4f64.js";import{ShaderTechniqueConfiguration as o}from"../core/shaderTechnique/ShaderTechniqueConfiguration.js";import{Default3D as h}from"./DefaultVertexAttributeLocations.js";import{Pos2Tex as l}from"./DefaultVertexBufferLayouts.js";import{createQuadVAO as p}from"./glUtil3D.js";import{HighlightApplyTechnique as u}from"../shaders/HighlightApplyTechnique.js";import{H as m}from"../../../../chunks/HighlightBlur.glsl.js";import{HighlightBlurTechnique as c}from"../shaders/HighlightBlurTechnique.js";import{H as n}from"../../../../chunks/HighlightDownsample.glsl.js";import{HighlightDownsampleTechnique as g}from"../shaders/HighlightDownsampleTechnique.js";import{HighlightPassParameters as d}from"../shaders/HighlightPassParameters.js";import{BufferObject as b}from"../../../webgl/BufferObject.js";import{TargetType as _,DepthStencilTargetType as w,TextureType as T,PixelFormat as v,PixelType as f,TextureSamplingMode as M,TextureWrapMode as q,ClearBufferBit as x,Usage as F,PrimitiveType as R}from"../../../webgl/enums.js";import{FramebufferObject as P}from"../../../webgl/FramebufferObject.js";import{vertexCount as y}from"../../../webgl/Util.js";import{VertexArrayObject as A}from"../../../webgl/VertexArrayObject.js";const D=32;class O{constructor(e,t){this._techniqueRep=e,this._rctx=t,this.viewportToRestore=a(),this._passParameters=new d,this._downsampleDrawParameters=new n,this._blurDrawParameters=new m,this._grid={coverageMipmap:null,vao:null,verticalCellCount:0,horizontalCellCount:0,cellPixelSize:0,mipmapLevels:0,viewportWidth:0,viewportHeight:0}}_assertResources(){if(this.quadVAO)return;this.quadVAO=p(this._rctx);const e={colorTarget:_.TEXTURE,depthStencilTarget:w.NONE,width:0,height:0},t={target:T.TEXTURE_2D,pixelFormat:v.RGBA,dataType:f.UNSIGNED_BYTE,samplingMode:M.LINEAR,wrapMode:q.CLAMP_TO_EDGE,width:0,height:0};this.blur0Fbo=new P(this._rctx,e,t),this.blur1Fbo=new P(this._rctx,e,t);const i=new o;this._blurTechnique=this._techniqueRep.acquire(c,i),this._downsampleTechnique=this._techniqueRep.acquire(g,i),this._applyTechnique=this._techniqueRep.acquire(u,i)}dispose(){if(this._blurTechnique=e(this._blurTechnique),this._downsampleTechnique=e(this._downsampleTechnique),this._applyTechnique=e(this._applyTechnique),this._grid.coverageMipmap)for(let e=1;e<this._grid.coverageMipmap.length;e++)this._grid.coverageMipmap[e].dispose();this._grid.vao&&this._grid.vao.dispose(!0),this.quadVAO&&(this.quadVAO.dispose(!0),this.quadVAO=null),this.blur0Fbo=t(this.blur0Fbo),this.blur1Fbo=t(this.blur1Fbo)}setDefaultOptions(e){this._passParameters={...new d,...e}}render(e,t,i){this._passParameters.highlightColorTexture=t.colorTexture,this._assertResources();const a=e.camera;s(this.viewportToRestore,a.fullViewport);const o=a.fullWidth,h=a.fullHeight,l=a.pixelRatio,p=Math.ceil(o/l),u=Math.ceil(h/l);this.blur0Fbo.resize(p,u),this.blur1Fbo.resize(p,u);const m=this._rctx;m.bindVAO(this.quadVAO);let c=null;this._gridUpdateResources(t,D),this._gridComputeMipmap(e),this._passParameters.coverageTexture=this._grid.coverageMipmap[this._grid.mipmapLevels].colorTexture,c=this._grid.vao;const n=m.bindTechnique(this._blurTechnique,this._passParameters,e);m.bindVAO(c),m.bindFramebuffer(this.blur0Fbo),m.setViewport(0,0,p,u),m.setClearColor(0,0,0,0),m.clear(x.COLOR_BUFFER_BIT),this._blurDrawParameters.blurInputTexture=t.colorTexture,r(this._blurDrawParameters.blurSize,1/p,0),n.bindDraw(this._blurDrawParameters,e),m.drawArrays(this._blurTechnique.primitiveType,0,y(c,"geometry")),m.bindFramebuffer(this.blur1Fbo),m.clear(x.COLOR_BUFFER_BIT),this._blurDrawParameters.blurInputTexture=this.blur0Fbo.colorTexture,r(this._blurDrawParameters.blurSize,0,1/u),n.bindDraw(this._blurDrawParameters,e),m.drawArrays(this._blurTechnique.primitiveType,0,y(c,"geometry")),m.bindFramebuffer(i),m.setViewport(this.viewportToRestore[0],this.viewportToRestore[1],this.viewportToRestore[2],this.viewportToRestore[3]),this._passParameters.blurColorTexture=this.blur1Fbo.colorTexture,m.bindTechnique(this._applyTechnique,this._passParameters,e),m.drawArrays(this._applyTechnique.primitiveType,0,y(c,"geometry")),m.bindVAO(null)}_gridUpdateResources(e,t){const i=this._rctx,r=this._grid;let s=!1;if(null===r.coverageMipmap&&(r.coverageMipmap=[e],s=!0),r.viewportWidth===e.width&&r.viewportHeight===e.height||(s=!0,r.viewportWidth=e.width,r.viewportHeight=e.height),r.coverageMipmap[0]=e,r.cellPixelSize!==t&&(r.cellPixelSize=t,s=!0),s){for(let e=1;e<r.coverageMipmap.length;e++)r.coverageMipmap[e].dispose();r.mipmapLevels=Math.ceil(Math.log(r.cellPixelSize)*Math.LOG2E),r.coverageMipmap.length=r.mipmapLevels+1;for(let e=0;e<r.mipmapLevels;e++){const t=r.coverageMipmap[e],s={target:T.TEXTURE_2D,pixelFormat:v.RGB,dataType:f.UNSIGNED_SHORT_5_6_5,samplingMode:M.LINEAR,wrapMode:q.CLAMP_TO_EDGE,width:Math.ceil(t.width/2),height:Math.ceil(t.height/2)},a={colorTarget:_.TEXTURE,depthStencilTarget:w.NONE,width:Math.ceil(t.width/2),height:Math.ceil(t.height/2)};r.coverageMipmap[e+1]=new P(i,a,s)}}const a=Math.ceil(e.height/r.cellPixelSize),o=Math.ceil(e.width/r.cellPixelSize);if(!r.vao||r.verticalCellCount!==a||r.horizontalCellCount!==o){r.verticalCellCount=a,r.horizontalCellCount=o;const e=a+1,t=o+1,s=1/a,p=1/o,u=6,m=4,c=new Float32Array(u*m*e*t);let n=0;for(let i=0;i<e;i++)for(let e=0;e<t;e++)c[n+0]=(e-.5)*p*2-1,c[n+1]=(i-.5)*s*2-1,c[n+2]=e*p,c[n+3]=i*s,c[n+4]=(e+.5)*p*2-1,c[n+5]=(i-.5)*s*2-1,c[n+6]=e*p,c[n+7]=i*s,c[n+8]=(e-.5)*p*2-1,c[n+9]=(i+.5)*s*2-1,c[n+10]=e*p,c[n+11]=i*s,c[n+12]=(e-.5)*p*2-1,c[n+13]=(i+.5)*s*2-1,c[n+14]=e*p,c[n+15]=i*s,c[n+16]=(e+.5)*p*2-1,c[n+17]=(i-.5)*s*2-1,c[n+18]=e*p,c[n+19]=i*s,c[n+20]=(e+.5)*p*2-1,c[n+21]=(i+.5)*s*2-1,c[n+22]=e*p,c[n+23]=i*s,n+=u*m;r.vao&&r.vao.dispose(!0),r.vao=new A(i,h,{geometry:l},{geometry:b.createVertex(i,F.STATIC_DRAW,c)})}}_gridComputeMipmap(e){const t=this._rctx,i=this._grid,s=t.bindTechnique(this._downsampleTechnique,this._passParameters,e);t.bindVAO(this.quadVAO);for(let a=0;a<i.mipmapLevels;a++){t.bindFramebuffer(i.coverageMipmap[a+1]);const o=i.coverageMipmap[a+1].width,h=i.coverageMipmap[a+1].height;this._downsampleDrawParameters.inputTexture=i.coverageMipmap[a].colorTexture,r(this._downsampleDrawParameters.invFramebufferDim,1/o,1/h),s.bindDraw(this._downsampleDrawParameters,e),t.setViewport(0,0,o,h),t.drawArrays(R.TRIANGLE_STRIP,0,y(this.quadVAO,"geometry"))}}get gpuMemoryUsage(){let e=(i(this.blur0Fbo)?this.blur0Fbo.gpuMemoryUsage:0)+(i(this.blur1Fbo)?this.blur1Fbo.gpuMemoryUsage:0);if(this._grid.coverageMipmap)for(const t of this._grid.coverageMipmap)e+=t.gpuMemoryUsage;return e}get test(){return{coverage:this._grid.coverageMipmap,blur:[this.blur0Fbo,this.blur1Fbo]}}}export{O as Highlight};