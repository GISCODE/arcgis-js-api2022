/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../core/PooledArray","../../../webgl/checkWebGLError"],(function(t,e,r,i,n){"use strict";let o=function(){function t(t,e,r){this._context=t,this._locations=r,this._textures=new Map,this._freeTextureUnits=new i({deallocator:null}),this._glProgram=t.programCache.acquire(e.generateSource("vertex"),e.generateSource("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this._fragmentUniforms=n.webglDebugEnabled()?e.fragmentUniforms.entries:null}var o=t.prototype;return o.dispose=function(){this._glProgram.dispose()},o.setUniform1b=function(t,e){this._glProgram.setUniform1i(t,e?1:0)},o.setUniform1i=function(t,e){this._glProgram.setUniform1i(t,e)},o.setUniform1f=function(t,e){this._glProgram.setUniform1f(t,e)},o.setUniform1fv=function(t,e){this._glProgram.setUniform1fv(t,e)},o.setUniform1iv=function(t,e){this._glProgram.setUniform1iv(t,e)},o.setUniform2f=function(t,e,r){this._glProgram.setUniform2f(t,e,r)},o.setUniform2fv=function(t,e){this._glProgram.setUniform2fv(t,e)},o.setUniform2iv=function(t,e){this._glProgram.setUniform2iv(t,e)},o.setUniform3f=function(t,e,r,i){this._glProgram.setUniform3f(t,e,r,i)},o.setUniform3fv=function(t,e){this._glProgram.setUniform3fv(t,e)},o.setUniform3iv=function(t,e){this._glProgram.setUniform3iv(t,e)},o.setUniform4f=function(t,e,r,i,n){this._glProgram.setUniform4f(t,e,r,i,n)},o.setUniform4fv=function(t,e){this._glProgram.setUniform4fv(t,e)},o.setUniform4iv=function(t,e){this._glProgram.setUniform4iv(t,e)},o.setUniformMatrix3fv=function(t,e){this._glProgram.setUniformMatrix3fv(t,e)},o.setUniformMatrix4fv=function(t,e){this._glProgram.setUniformMatrix4fv(t,e)},o.assertCompatibleVertexAttributeLocations=function(t){t.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")},o.stop=function(){this._textures.clear(),this._freeTextureUnits.clear()},o.bindTexture=function(t,e){if(r.isNone(t)||null==t.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let i=this._textures.get(e);return null==i?(i=this._allocTextureUnit(t),this._textures.set(e,i)):i.texture=t,this._context.useProgram(this),this.setUniform1i(e,i.unit),this._context.bindTexture(t,i.unit),i.unit},o.rebindTextures=function(){this._context.useProgram(this),this._textures.forEach(((t,e)=>{this._context.bindTexture(t.texture,t.unit),this.setUniform1i(e,t.unit)})),r.isSome(this._fragmentUniforms)&&this._fragmentUniforms.forEach((t=>{if(("sampler2D"===t.type||"samplerCube"===t.type)&&!this._textures.has(t.name))throw new Error(`Texture sampler ${t.name} has no bound texture`)}))},o._allocTextureUnit=function(t){return{texture:t,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}},o._freeTextureUnit=function(t){this._freeTextureUnits.push(t.unit)},e._createClass(t,[{key:"glName",get:function(){return this._glProgram.glName}},{key:"isCompiled",get:function(){return this._glProgram.isCompiled}}]),t}();t.Program=o,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
