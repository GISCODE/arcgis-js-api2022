/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../VertexStream","../../../../../webgl/enums","../../../../../webgl/FramebufferObject"],(function(e,t,r,i){"use strict";const s=[1,0],n=[0,1];let a=function(){function e(){this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}var a=e.prototype;return a.dispose=function(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)},a.draw=function(e,r,i){const{context:s}=e,{type:n,radius:a}=i;if(0===a)return;this._createOrResizeResources(e),this._quad||(this._quad=new t(s,[-1,-1,1,-1,-1,1,1,1]));const o=this._quad;o.bind(),"blur"===n?this._gaussianBlur(e,r,a):this._radialBlur(e,r),o.unbind()},a._gaussianBlur=function(e,t,i){const{context:a,state:o,painter:u,pixelRatio:l}=e,{size:d}=o,{materialManager:c}=u,p=this._programDesc,b=this._quad,_=[Math.round(l*d[0]),Math.round(l*d[1])],h=this._blurFBO,g=c.getProgram(e,p.gaussianBlur,[{name:"radius",value:Math.ceil(i)}]);a.useProgram(g),a.setBlendingEnabled(!1),a.bindFramebuffer(h),a.bindTexture(t.colorTexture,4),g.setUniform1i("u_colorTexture",4),g.setUniform2fv("u_texSize",_),g.setUniform2fv("u_direction",s),g.setUniform1f("u_sigma",i),b.draw(),a.bindFramebuffer(t),a.setStencilWriteMask(0),a.setStencilTestEnabled(!1),a.setDepthWriteEnabled(!1),a.setDepthTestEnabled(!1),a.bindTexture(h.colorTexture,5),g.setUniform1i("u_colorTexture",5),g.setUniform2fv("u_direction",n),b.draw(),a.setBlendingEnabled(!0),a.setBlendFunction(r.BlendFactor.ONE,r.BlendFactor.ONE_MINUS_SRC_ALPHA),a.setStencilTestEnabled(!0)},a._radialBlur=function(e,t){const{context:i,painter:s}=e,{materialManager:n}=s,a=this._programDesc,o=this._quad,u=this._blurFBO;i.bindFramebuffer(u);const l=n.getProgram(e,a.radialBlur);i.useProgram(l),i.setBlendingEnabled(!1),i.bindTexture(t.colorTexture,4),l.setUniform1i("u_colorTexture",4),o.draw(),i.bindFramebuffer(t),i.setStencilWriteMask(0),i.setStencilTestEnabled(!1),i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1),i.setBlendingEnabled(!0);const d=n.getProgram(e,a.blit);i.useProgram(d),i.bindTexture(u.colorTexture,5),d.setUniform1i("u_texture",5),i.setBlendFunction(r.BlendFactor.ONE,r.BlendFactor.ONE_MINUS_SRC_ALPHA),o.draw()},a._createOrResizeResources=function(e){const{context:t,state:s,pixelRatio:n}=e,{size:a}=s,o=Math.round(n*a[0]),u=Math.round(n*a[1]);this._blurFBO&&this._size[0]===o&&this._size[1]===u||(this._size[0]=o,this._size[1]=u,this._blurFBO?this._blurFBO.resize(o,u):this._blurFBO=new i.FramebufferObject(t,{colorTarget:r.TargetType.TEXTURE,depthStencilTarget:r.DepthStencilTargetType.NONE,width:o,height:u},{target:r.TextureType.TEXTURE_2D,pixelFormat:r.PixelFormat.RGBA,internalFormat:r.PixelFormat.RGBA,dataType:r.PixelType.UNSIGNED_BYTE,wrapMode:r.TextureWrapMode.CLAMP_TO_EDGE,samplingMode:r.TextureSamplingMode.LINEAR,flipped:!1,width:o,height:u}))},e}();e.Blur=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
