/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../../core/maybe","./cpuMapped/FreeList"],(function(e,t,r,n,a){"use strict";const s=r("esri-2d-log-allocations");let i=function(){function e(e){this._array=e}e.create=function(t){return new e(u.acquire(t))};var r=e.prototype;return r.expand=function(e){const t=u.acquire(e);t.set(this._array),u.release(this._array),this._array=t},r.destroy=function(){u.release(this._array)},r.set=function(e,t){this._array.set(e._array,t)},r.slice=function(){const t=u.acquire(this._array.byteLength);return t.set(this._array),new e(t)},t._createClass(e,[{key:"array",get:function(){return this._array}},{key:"length",get:function(){return this._array.length}}]),e}(),o=function(){function e(){this._data=new ArrayBuffer(e.BYTE_LENGTH),this._freeList=new a.FreeList({start:0,end:this._data.byteLength})}var r=e.prototype;return r.allocate=function(e){const t=this._freeList.firstFit(e);return n.isNone(t)?null:new Uint32Array(this._data,t,e/Uint32Array.BYTES_PER_ELEMENT)},r.free=function(e){this._freeList.free(e.byteOffset,e.byteLength)},t._createClass(e,[{key:"buffer",get:function(){return this._data}}],[{key:"BYTE_LENGTH",get:function(){return 64e6}}]),e}();const u=new(function(){function e(){this._bytesAllocated=0,this._pages=[],this._pagesByBuffer=new Map,this._addPage()}var r=e.prototype;return r.acquire=function(e){if(this._bytesAllocated+=e,s&&console.log(`Allocating ${e}, (${this._bytesAllocated} / ${this._bytesTotal})`),e>o.BYTE_LENGTH)return new Uint32Array(e/Uint32Array.BYTES_PER_ELEMENT);for(const t of this._pages){const r=t.allocate(e);if(n.isSome(r))return r}return n.unwrapOrThrow(this._addPage().allocate(e),"Expected to allocate page")},r.release=function(e){this._bytesAllocated-=e.byteLength,s&&console.log(`Freeing ${e.byteLength}, (${this._bytesAllocated} / ${this._bytesTotal})`);const t=this._pagesByBuffer.get(e.buffer);t&&t.free(e)},r._addPage=function(){const e=new o;return this._pages.push(e),this._pagesByBuffer.set(e.buffer,e),e},t._createClass(e,[{key:"_bytesTotal",get:function(){return this._pages.length*o.BYTE_LENGTH}}]),e}());e.TypedBuffer=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
