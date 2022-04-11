/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../../request","../../../../core/pbf"],(function(t,e){"use strict";let n=function(){function t(t){for(this._metrics=[],this._bitmaps=[];t.next();)switch(t.tag()){case 1:{const e=t.getMessage();for(;e.next();)switch(e.tag()){case 3:{const t=e.getMessage();let n,r,a,s,i,c,o;for(;t.next();)switch(t.tag()){case 1:n=t.getUInt32();break;case 2:r=t.getBytes();break;case 3:a=t.getUInt32();break;case 4:s=t.getUInt32();break;case 5:i=t.getSInt32();break;case 6:c=t.getSInt32();break;case 7:o=t.getUInt32();break;default:t.skip()}t.release(),n&&(this._metrics[n]={width:a,height:s,left:i,top:c,advance:o},this._bitmaps[n]=r);break}default:e.skip()}e.release();break}default:t.skip()}}var e=t.prototype;return e.getMetrics=function(t){return this._metrics[t]},e.getBitmap=function(t){return this._bitmaps[t]},t}(),r=function(){function t(){this._ranges=[]}var e=t.prototype;return e.getRange=function(t){return this._ranges[t]},e.addRange=function(t,e){this._ranges[t]=e},t}();return function(){function a(t){this._glyphInfo={},this._baseURL=t}var s=a.prototype;return s.getRange=function(r,a,s){const i=this._getFontStack(r);if(i.getRange(a))return Promise.resolve();const c=256*a,o=c+255,g=this._baseURL.replace("{fontstack}",r).replace("{range}",c+"-"+o);return t(g,{responseType:"array-buffer",...s}).then((t=>{i.addRange(a,new n(new e(new Uint8Array(t.data),new DataView(t.data))))}))},s.getGlyph=function(t,e){const n=this._getFontStack(t);if(!n)return;const r=Math.floor(e/256);if(r>256)return;const a=n.getRange(r);return a?{metrics:a.getMetrics(e),bitmap:a.getBitmap(e)}:void 0},s._getFontStack=function(t){let e=this._glyphInfo[t];return e||(e=this._glyphInfo[t]=new r),e},a}()}));
