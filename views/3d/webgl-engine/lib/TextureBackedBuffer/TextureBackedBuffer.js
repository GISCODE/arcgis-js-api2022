/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../geometry/support/buffer/BufferView","../../../../webgl/enums","../../../../webgl/Texture"],(function(t,e,i,r){"use strict";let s=function(){function t(t,s=1){this.rctx=t,this.fieldCount=s,this.textureWidth=4096,this.dirty=!0,this.texture=new r.Texture(this.rctx,{target:i.TextureType.TEXTURE_2D,pixelFormat:i.PixelFormat.RGBA,dataType:i.PixelType.UNSIGNED_BYTE,samplingMode:i.TextureSamplingMode.NEAREST,wrapMode:i.TextureWrapMode.CLAMP_TO_EDGE,width:this.textureWidth,height:1,flipped:!1}),this.data=new e.BufferViewVec4u8(new ArrayBuffer(4*this.textureWidth))}var s=t.prototype;return s.dispose=function(){this.texture.dispose(),this.texture=void 0,this.data=void 0},s.setData=function(t,e,i,r,s,u){const d=t*this.fieldCount+e;this.dirty=!0,this.data.set(d,0,i),this.data.set(d,1,r),this.data.set(d,2,s),this.data.set(d,3,u)},s.setDataElement=function(t,e,i,r){const s=t*this.fieldCount+e;this.dirty=!0,this.data.set(s,i,r)},s.resizeToFit=function(t){const i=t*this.fieldCount;if(i>=this.data.count){const t=Math.ceil((i+1)/this.textureWidth)*this.textureWidth,r=new e.BufferViewVec4u8(new ArrayBuffer(4*t));r.typedBuffer.set(this.data.typedBuffer),this.data=r}},s.updateTexture=function(){if(!this.dirty)return;const t=this.texture.descriptor.width,e=this.texture.descriptor.height;this.data.count>t*e&&this.texture.resize(t,this.data.count/t),this.texture.setData(this.data.typedBuffer),this.dirty=!1},s.bind=function(t,e,i){t.bindTexture(this.texture,e),t.setUniform2f(i,1/this.texture.descriptor.width,1/this.texture.descriptor.height)},t}();t.TextureBackedBuffer=s,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
