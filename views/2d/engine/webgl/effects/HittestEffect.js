/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../definitions","./Effect","../../../../webgl/enums"],(function(t,e,i,n,o,s){"use strict";let r=function(t){function o(){var e;return(e=t.apply(this,arguments)||this).name=e.constructor.name,e.defines=["hittest"],e}e._inheritsLoose(o,t);var r=o.prototype;return r.dispose=function(){i.isSome(this._fbo)&&this._fbo.dispose()},r.createOptions=function({pixelRatio:t},e,i=n.HITTEST_RADIUS){if(!e.length)return null;const o=e.shift(),s=o.point.x,r=o.point.y;return this._outstanding=o,{type:"hittest",distance:i*t,position:[s,r]}},r.bind=function(t){const{context:e,attributeView:o}=t;if(!o.size)return;const s=o.getBlock(n.ATTRIBUTE_DATA_GPGPU);if(i.isNone(s))return;const r=s.getFBO(e);e.setViewport(0,0,o.size,o.size),e.bindFramebuffer(r),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT)},r.unbind=function(t){},r.draw=function(t){const{context:e,attributeView:o}=t,r=o.getBlock(n.ATTRIBUTE_DATA_GPGPU);if(i.isNone(this._outstanding))return;const u=this._outstanding.resolver;if(i.isNone(r))return u.resolve([]),void(this._outstanding=null);const l=r.getFBO(e),c=new Uint8Array(l.width*l.height*4);l.readPixels(0,0,l.width,l.height,s.PixelFormat.RGBA,s.PixelType.UNSIGNED_BYTE,c);const f=[];for(let i=0;i<c.length;i+=4)c[i]&&f.push(i/4);this._outstanding=null,u.resolve(f)},o}(o.Effect);t.HittestEffect=r,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
