/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../config","../../../../request","../../../../core/BidiText","../../../../core/Error","../../../../core/Logger","../../../../core/maybe","../../../../core/promiseUtils","../../../../core/screenUtils","../../../../chunks/vec2","../../../../chunks/vec2f32","../../../../symbols/cim/Rasterizer","./definitions","./enums","./fontUtils","./GlyphMosaic","./GlyphSource","./SDFConverter","./SpriteMosaic","./Utils","./animatedFormats/apng","./animatedFormats/gif","./util/Result","./util/symbolUtils","../../../support/QueueProcessor","../../../webgl/enums"],(function(e,t,i,n,r,s,o,a,u,c,h,l,d,p,g,f,_,y,m,w,T,M,I,v,R,b){"use strict";const S=h.create(),G="arial-unicode-ms-regular",x=126,z=s.getLogger("esri.views.2d.engine.webgl.TextureManager");function A(e,t){return U.apply(this,arguments)}function U(){return(U=e._asyncToGenerator((function*(e,t){const n=w.getUrl(e);let s;const o=";base64,";if(n.includes(o)){const e=n.indexOf(o)+o.length,t=n.substring(e),i=atob(t),r=new Uint8Array(i.length);for(let n=0;n<i.length;n++)r[n]=i.charCodeAt(n);s=r.buffer}else try{const{data:e}=yield i(n,{responseType:"array-buffer",...t});s=e}catch(u){if(!a.isAbortError(u))return new r("mapview-invalid-resource",`Could not fetch requested resource at ${n}`)}return s}))).apply(this,arguments)}function P(e,t){const i=Math.round(u.pt2px(t)*window.devicePixelRatio),n=i>=128?2:4;return Math.min(e,i*n)}const E=(e,t,i)=>z.error(new r(e,t,i));let B=function(){function e(e,t,i){this.mosaicType=e,this.page=t,this.sdf=i}return e.fromMosaic=function(t,i){return new e(t,i.page,i.sdf)},e}(),N=function(){function s(n,s){var o;this.resourceManager=s,this._invalidFontsMap=new Map,this._sdfConverter=new y(x),this._bindingInfos=new Array,this._hashToBindingIndex=new Map,this._ongoingRasterizations=new Map,this._imageRequestQueue=new R.QueueProcessor({concurrency:10,process:(o=e._asyncToGenerator((function*(e,t){a.throwIfAborted(t);try{return yield i(e,{responseType:"image",signal:t})}catch(n){if(!a.isAbortError(n))throw new r("mapview-invalid-resource",`Could not fetch requested resource at ${e}`,n);throw n}})),function(e,t){return o.apply(this,arguments)})}),this._spriteMosaic=new m(n,2048,2048,500),this._glyphSource=new _(`${t.fontsUrl}/{fontstack}/{range}.pbf`),this._glyphMosaic=new f(1024,1024,this._glyphSource),this._rasterizer=new l(s)}var h=s.prototype;return h.dispose=function(){this._spriteMosaic.dispose(),this._glyphMosaic.dispose(),this._rasterizer.dispose(),this._sdfConverter.dispose(),this._spriteMosaic=null,this._glyphMosaic=null,this._sdfConverter=null,this._hashToBindingIndex.clear(),this._hashToBindingIndex=null,this._bindingInfos=null,this._ongoingRasterizations.clear(),this._ongoingRasterizations=null,this._imageRequestQueue.clear(),this._imageRequestQueue=null},h.rasterizeItem=function(){var t=e._asyncToGenerator((function*(e,t,i,n){if(o.isNone(e))return E("mapview-null-resource","Unable to rasterize null resource"),null;switch(e.type){case"text":case"esriTS":{const t=yield this._rasterizeText(e,i,n);return t.forEach((e=>this._setTextureBinding(p.MosaicType.GLYPH,e))),{glyphMosaicItems:t}}default:{if(w.is3D(e))return E("mapview-invalid-type",`MapView does not support symbol type: ${e.type}`,e),null;const i=yield this._rasterizeSpriteSymbol(e,t,n);return I.ok(i)&&i&&this._setTextureBinding(p.MosaicType.SPRITE,i),{spriteMosaicItem:i}}}}));function i(e,i,n,r){return t.apply(this,arguments)}return i}(),h.bindTextures=function(e,t,i,n=!1){if(0===i.textureBinding)return;const r=this._bindingInfos[i.textureBinding-1],s=r.page,o=n?b.TextureSamplingMode.LINEAR_MIPMAP_LINEAR:b.TextureSamplingMode.LINEAR;switch(r.mosaicType){case p.MosaicType.SPRITE:{const i=this.sprites.getWidth(s),n=this.sprites.getHeight(s),r=c.set(S,i,n);return this._spriteMosaic.bind(e,o,s,d.TEXTURE_BINDING_SPRITE_ATLAS),t.setUniform1i("u_texture",d.TEXTURE_BINDING_SPRITE_ATLAS),void t.setUniform2fv("u_mosaicSize",r)}case p.MosaicType.GLYPH:{const i=this.glyphs.width,n=this.glyphs.height,r=c.set(S,i,n);return this._glyphMosaic.bind(e,o,s,d.TEXTURE_BINDING_GLYPH_ATLAS),t.setUniform1i("u_texture",d.TEXTURE_BINDING_GLYPH_ATLAS),void t.setUniform2fv("u_mosaicSize",r)}default:z.error("mapview-texture-manager",`Cannot handle unknown type ${r.mosaicType}`)}},h._hashMosaic=function(e,t){return 1|e<<1|(t.sdf?1:0)<<2|t.page<<3},h._setTextureBinding=function(e,t){const i=this._hashMosaic(e,t);if(!this._hashToBindingIndex.has(i)){const n=B.fromMosaic(e,t),r=this._bindingInfos.length+1;this._hashToBindingIndex.set(i,r),this._bindingInfos.push(n)}t.textureBinding=this._hashToBindingIndex.get(i)},h._rasterizeText=function(){var t=e._asyncToGenerator((function*(e,t,i){let r,s;if("cim"in e){const t=e;r=t.fontName,s=t.text}else{const t=e;r=g.getFullyQualifiedFontName(t.font),s=t.text}const o=this._invalidFontsMap.has(r),a=t||w.charCodes(n.bidiText(s)[0]);try{return yield this._glyphMosaic.getGlyphItems(o?G:r,a,i)}catch(u){return E("mapview-invalid-resource",`Couldn't find font ${r}. Falling back to Arial Unicode MS Regular`),this._invalidFontsMap.set(r,!0),this._glyphMosaic.getGlyphItems(G,a,i)}}));function i(e,i,n){return t.apply(this,arguments)}return i}(),h._rasterizeSpriteSymbol=function(){var t=e._asyncToGenerator((function*(e,t,i){if(w.isSimple(e))return null;const n=v.keyFromSymbol(e);if(this._spriteMosaic.has(n))return this._spriteMosaic.getSpriteItem(n);if(w.isSVGResource(e)||w.isImageResource(e))return this._handleAsyncResource(n,e,i);const s=1,o=this._rasterizer.rasterizeJSONResource(e,s);if(o){const{size:t,image:i,sdf:r,simplePattern:s}=o;return this._addItemToMosaic(n,t,{type:"static",data:i},w.shouldRepeat(e),r,s)}return new r("TextureManager","unrecognized or null rasterized image")}));function i(e,i,n){return t.apply(this,arguments)}return i}(),h._handleAsyncResource=function(){var t=e._asyncToGenerator((function*(e,t,i){if(this._ongoingRasterizations.has(e))return this._ongoingRasterizations.get(e);let n;n=w.isSVGResource(t)?this._handleSVG(t,e,i):this._handleImage(t,e,i),this._ongoingRasterizations.set(e,n);try{yield n,this._ongoingRasterizations.delete(e)}catch{this._ongoingRasterizations.delete(e)}return n}));function i(e,i,n){return t.apply(this,arguments)}return i}(),h._handleSVG=function(){var t=e._asyncToGenerator((function*(e,t,i){const n=[x,x],r=yield this._sdfConverter.draw(e.path,i);return this._addItemToMosaic(t,n,{type:"static",data:new Uint32Array(r.buffer)},!1,!0,!0)}));function i(e,i,n){return t.apply(this,arguments)}return i}(),h._handleGIFOrPNG=function(){var t=e._asyncToGenerator((function*(e,t,i){const n=yield A(e,i);if(I.ok(n)){const o=M.isGIF(n),u=T.isPNG(n);if(!o&&!u)return new r("mapview-invalid-resource","Image data is neither GIF nor PNG!");let c;try{o&&M.isAnimatedGIF(n)?c=yield M.default.create(n,i):u&&T.isAnimatedPNG(n)&&(c=yield T.default.create(n,i))}catch(s){if(!a.isAbortError(s))return new r("mapview-invalid-resource","Could not fetch requested resource!")}if(c&&I.ok(c))return this._addItemToMosaic(t,[c.width,c.height],{type:"animated",data:c},w.shouldRepeat(e),!1,!1);const h=new Blob([n],{type:o?"image/gif":"image/png"}),l=yield this._imageFromBlob(h);if(l&&l instanceof HTMLImageElement){let i=l.width,n=l.height;"esriPMS"===e.type&&(i=Math.round(P(l.width,w.getPMSResourceSize(e))),n=Math.round(l.height*(i/l.width)));const r="cim"in e?e.cim.colorSubstitutions:void 0,{size:s,sdf:o,image:a}=this._rasterizer.rasterizeImageResource(i,n,l,r);return this._addItemToMosaic(t,s,{type:"static",data:a},w.shouldRepeat(e),o,!1)}}return new r("mapview-invalid-resource","Could not handle resource!")}));function i(e,i,n){return t.apply(this,arguments)}return i}(),h._handleImage=function(){var t=e._asyncToGenerator((function*(e,t,i){if(w.isGIF(e)||w.isPNG(e))return this._handleGIFOrPNG(e,t,i);const n=w.getUrl(e);try{let r;const a=this.resourceManager.getResource(n);if(o.isSome(a))r=a;else{const{data:e}=yield this._imageRequestQueue.push(n,{...i});r=e}if(w.isSVGImage(n))if("width"in e&&"height"in e)r.width=u.pt2px(e.width),r.height=u.pt2px(e.height);else if("cim"in e){var s;const t=e.cim;r.width=u.pt2px(null!=(s=t.width)?s:t.scaleX*t.size),r.height=u.pt2px(t.size)}if(!r.width||!r.height)return null;let c=r.width,h=r.height;"esriPMS"===e.type&&(c=Math.round(P(r.width,w.getPMSResourceSize(e))),h=Math.round(r.height*(c/r.width)));const l="cim"in e?e.cim.colorSubstitutions:void 0,{size:d,sdf:p,image:g}=this._rasterizer.rasterizeImageResource(c,h,r,l);return this._addItemToMosaic(t,d,{type:"static",data:g},w.shouldRepeat(e),p,!1)}catch(c){if(!a.isAbortError(c))return new r("mapview-invalid-resource",`Could not fetch requested resource at ${n}. ${c.message}`)}}));function i(e,i,n){return t.apply(this,arguments)}return i}(),h._imageFromBlob=function(){var t=e._asyncToGenerator((function*(e){const t=window.URL.createObjectURL(e);try{const{data:e}=yield this._imageRequestQueue.push(t);return window.URL.revokeObjectURL(t),e}catch(i){if(window.URL.revokeObjectURL(t),!a.isAbortError(i))return new r("mapview-invalid-resource",`Could not fetch requested resource at ${t}`);throw i}}));function i(e){return t.apply(this,arguments)}return i}(),h._addItemToMosaic=function(e,t,i,n,r,s){return this._spriteMosaic.addSpriteItem(e,t,i,n,r,s)},e._createClass(s,[{key:"sprites",get:function(){return this._spriteMosaic}},{key:"glyphs",get:function(){return this._glyphMosaic}}]),s}();return N}));