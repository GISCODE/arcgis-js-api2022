/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../definitions","./Effect","../../../../webgl/enums"],(function(e,t,n,o,i,s){"use strict";let r=function(e){function i(){var t;return(t=e.apply(this,arguments)||this).name=t.constructor.name,t.defines=["id"],t._lastSize=0,t}t._inheritsLoose(i,e);var r=i.prototype;return r.dispose=function(){n.isSome(this._fbo)&&this._fbo.dispose()},r.bind=function({context:e,painter:t}){const{width:n,height:o}=e.getViewport();this._boundFBO=e.getBoundFramebufferObject();const i=t.getFbos(n,o).effect0;e.bindFramebuffer(i),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT)},r.unbind=function({context:e}){e.bindFramebuffer(this._boundFBO),this._boundFBO=null},r.draw=function({context:e,state:t,pixelRatio:n},i,r=2*o.HITTEST_RADIUS){const f=e.getBoundFramebufferObject(),u=t.size[1]*n,a=Math.round(r*n),l=a/2,c=a/2;this._ensureBuffer(a),i.forEach(((e,t)=>{const o=new Map,r=Math.floor(t.x*n-a/2),h=Math.floor(u-t.y*n-a/2);f.readPixels(r,h,a,a,s.PixelFormat.RGBA,s.PixelType.UNSIGNED_BYTE,this._buf);for(let n=0;n<this._buf32.length;n++){const e=this._buf32[n];if(4294967295!==e&&0!==e){const t=n%a,i=a-Math.floor(n/a),s=(l-t)*(l-t)+(c-i)*(c-i),r=o.has(e)?o.get(e):4294967295;o.set(e,Math.min(s,r))}}const b=Array.from(o).sort(((e,t)=>e[1]-t[1])).map((e=>e[0]));e.resolve(b),i.delete(t)}))},r._ensureBuffer=function(e){this._lastSize!==e&&(this._lastSize=e,this._buf=new Uint8Array(4*e*e),this._buf32=new Uint32Array(this._buf.buffer))},i}(i.Effect);e.HittestEffectVTL=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
