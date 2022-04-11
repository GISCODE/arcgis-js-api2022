/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../../core/Logger","../../VertexStream","../../../../../webgl/enums","../../../../../webgl/FramebufferObject","../../../../../webgl/Texture"],(function(e,t,r,i,s,o){"use strict";const n=t.getLogger("esri.views.2d.engine.webgl.effects.post-processing.DRA"),a=2;let l=function(){function e(){this._fbos=null,this._colorAttachmentsPoints=[i.ColorAttachment.COLOR_ATTACHMENT0,i.ColorAttachment.COLOR_ATTACHMENT1],this._size=[0,0],this._programDesc={"min-max":{vsPath:"post-processing/pp",fsPath:"post-processing/dra/min-max",attributes:new Map([["a_position",0]])},dra:{vsPath:"post-processing/pp",fsPath:"post-processing/dra",attributes:new Map([["a_position",0]])}}}var t=e.prototype;return t.dispose=function(){this._disposeFBOs(),this._layerTexture&&(this._layerTexture.dispose(),this._layerTexture=null)},t.draw=function(e,t,s){this._createOrResizeResources(e);const{context:o,state:a,painter:l,pixelRatio:u}=e,{materialManager:d}=l,h=this._programDesc,{size:p}=a,c=this._fbos,_=[u*p[0],u*p[1]],T=o.capabilities.drawBuffers;if(!T)return void n.error("esri.DRA","WebGL Extension WEBGL_draw_buffers isn't supported!");this._quad||(this._quad=new r(o,[-1,-1,1,-1,-1,1,1,1]));const f=this._layerTexture;t.copyToTexture(0,0,_[0],_[1],0,0,f);const m=this._quad;m.bind();const x=d.getProgram(e,h["min-max"]);o.useProgram(x),o.setBlendingEnabled(!1);let g,b=t.colorTexture,M=t.colorTexture;const E=[_[0],_[1]],A=[0,0];for(let r=0;r<c.length;r++){const e=c[r],t=e.descriptor;A[0]=t.width,A[1]=t.height,o.bindFramebuffer(e),T.drawBuffers(this._colorAttachmentsPoints),o.setViewport(0,0,t.width,t.height),g=r,g>6&&(g=6),o.bindTexture(b,g),o.bindTexture(M,g+1),x.setUniform1i("u_minTexture",g),x.setUniform1i("u_maxTexture",g+1),x.setUniform2fv("u_srcResolution",E),x.setUniform2fv("u_dstResolution",A),m.draw(),b=e.getColorTexture(i.ColorAttachment.COLOR_ATTACHMENT0),M=e.getColorTexture(i.ColorAttachment.COLOR_ATTACHMENT1),E[0]=A[0],E[1]=A[1]}o.setViewport(0,0,_[0],_[1]),o.bindFramebuffer(t);const w=d.getProgram(e,h.dra);o.useProgram(w),o.bindTexture(b,5),o.bindTexture(M,6),o.bindTexture(f,7),w.setUniform1i("u_minColor",5),w.setUniform1i("u_maxColor",6),w.setUniform1i("u_texture",7),o.setStencilWriteMask(0),o.setStencilTestEnabled(!1),o.setDepthWriteEnabled(!1),o.setDepthTestEnabled(!1),m.draw(),o.setBlendingEnabled(!0),o.setBlendFunction(i.BlendFactor.ONE,i.BlendFactor.ONE_MINUS_SRC_ALPHA),o.setStencilTestEnabled(!0),m.unbind()},t._createOrResizeResources=function(e){const{context:t,state:r,pixelRatio:n}=e,{size:l}=r;let u=Math.round(n*l[0]),d=Math.round(n*l[1]);if(this._size[0]!==u||this._size[1]!==d){for(this._size[0]=u,this._size[1]=d,this._disposeFBOs(),this._fbos=[];u>1||d>1;){u=Math.max(1,0|Math.floor((u+a-1)/a)),d=Math.max(1,0|Math.floor((d+a-1)/a));const e={pixelFormat:i.PixelFormat.RGBA,internalFormat:i.PixelFormat.RGBA,dataType:i.PixelType.UNSIGNED_BYTE,samplingMode:i.TextureSamplingMode.NEAREST,wrapMode:i.TextureWrapMode.CLAMP_TO_EDGE,flipped:!1,width:u,height:d},r=new s.FramebufferObject(t,{depthStencilTarget:i.DepthStencilTargetType.NONE,width:u,height:d},[e,e]);this._fbos.push(r)}this._layerTexture?this._layerTexture.resize(Math.round(n*l[0]),Math.round(n*l[1])):this._layerTexture=new o.Texture(t,{target:i.TextureType.TEXTURE_2D,pixelFormat:i.PixelFormat.RGBA,internalFormat:i.PixelFormat.RGBA,dataType:i.PixelType.UNSIGNED_BYTE,wrapMode:i.TextureWrapMode.CLAMP_TO_EDGE,samplingMode:i.TextureSamplingMode.LINEAR,flipped:!1,width:Math.round(n*l[0]),height:Math.round(n*l[1])})}},t._disposeFBOs=function(){if(this._fbos){for(const e of this._fbos)e.dispose();this._fbos.length=0,this._fbos=null}},e}();e.DRA=l,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));