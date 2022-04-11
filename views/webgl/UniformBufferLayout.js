/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../core/Logger","./storageLayouts"],(function(t,e,n){"use strict";function a(t,e){return t+(e-t%e)%e}const r=(()=>{const t=new ArrayBuffer(2),e=new Uint8Array(t),n=new Uint16Array(t);return e[0]=170,e[1]=187,48042===n[0]})(),i=4,o=e.getLogger("esri.views.webgl.UniformBufferLayout");let s=function(){function t(t){this._layout=new Map,this.byteLength=this._buildLayout(t),this.array=new ArrayBuffer(this.byteLength),this.arrayView32=new Float32Array(this.array),this._dataView=new DataView(this.array)}var e=t.prototype;return e.setValues=function(t,e){for(const n in t)this.setValue(n,t[n],e)},e.setValue=function(t,e,a){if(!this._layout.has(t))return void o.warn("Trying to set an unrecognized layout array member!");let r=this.byteLength/i,s=0;const{type:u,offset:h,arrayLength:y}=this._layout.get(t),{numberType:f,elementLength:l,elementCount:g,arrayStride:c}=n.STD140_LAYOUT[u],m="number"!=typeof e,w=y*g,_=w*l;if((m?"byteLength"in e?e.byteLength/i:e.length:1)!==_&&o.warn("Attempting to set layout array member value with the wrong length!"),m)for(let n=0;n<w;n++)for(let t=0;t<l;t++){const a=h+n*c+t*i,o=n*l+t;if(this._setData(a,e[o],f)){const t=a/i;r=Math.min(r,t),s=Math.max(s,t+1)}}else if(this._setData(h,e,f)){const t=h/i;r=Math.min(r,t),s=Math.max(s,t+1)}a&&(a.from=Math.min(r,a.from),a.to=Math.max(s,a.to))},e._setData=function(t,e,n){switch(n){case"Int32":if(e!==this._dataView.getInt32(t,r))return this._dataView.setInt32(t,e,r),!0;break;case"Uint32":if(e!==this._dataView.getUint32(t,r))return this._dataView.setUint32(t,e,r),!0;break;case"Float32":if(e!==this._dataView.getFloat32(t,r))return this._dataView.setFloat32(t,e,r),!0}return!1},e._buildLayout=function(t){let e=0;for(const{name:r,type:o,count:s}of t){const{elementLength:t,elementCount:u,elementAlignment:h,arrayStride:y,arrayAlignment:f}=n.STD140_LAYOUT[o],l=null!=s?s:1,g=l*u,c=g>1,m=c?f:h,w=c?g*y:t*i;e=a(e,m),this._layout.set(r,{type:o,offset:e,arrayLength:l}),e+=w,c&&(e=a(e,m))}return a(e,4*i)},t}();t.UniformBufferLayout=s,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));