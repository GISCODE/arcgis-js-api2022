// COPYRIGHT © 2021 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["require","exports","dojo/has","./FreeList","./Utils"],(function(e,t,r,i,o){Object.defineProperty(t,"__esModule",{value:!0});var n=["FILL","LINE","MARKER","TEXT","LABEL"];var s=function(){function e(e,t,r,o){for(var n in this._strides=e,this._displayList=t,this._vertexAlignments={},this._freeListsAndStorage={},this._dirtyMap=null,this._dirtyMap=r,e){var s=!1,a=!1;for(var d in this._freeListsAndStorage[n]={vtxFreeList:o?new i.FreeList(o):null,idxFreeList:o?new i.FreeList(o):null,vertexBuffers:{},indexBuffer:o?new Uint32Array(o):null},e[n])this._freeListsAndStorage[n].vertexBuffers[d]={data:o?new Uint32Array(Math.floor(o*e[n][d]/4)):null,stride:e[n][d]},e[n][d]%4==2?s=!0:e[n][d]%4!=0&&(a=!0);this._vertexAlignments[n]=a?4:s?2:1}}return e.fromTileData=function(t,r){var o=function(e){var t=e.getStrides(),r={};for(var i in t)r[n[i]]=t[i];return r}(t),s=[0,0,0,0,0],a=[0,0,0,0,0],d=[];t.tileDisplayData.displayObjectRegistry.forEach((function(e){d.push(e)}));for(var u=0,f=d;u<f.length;u++)for(var v=0,x=f[u].displayRecords;v<x.length;v++){var l=x[v];s[l.geometryType]=Math.max(s[l.geometryType],l.vertexFrom+l.vertexCount),a[l.geometryType]=Math.max(a[l.geometryType],l.indexFrom+l.indexCount)}for(var h=new e(o,t.tileDisplayData.displayList,r,null),m=0;m<t.tileBufferData.geometries.length;++m){var F=s[m],_=a[m],c=t.tileBufferData.geometries[m],y=n[m],p=h._storageFor(y),g=t.tileBufferData.geometries[m].indexBuffer;p.indexBuffer=g,p.idxFreeList=new i.FreeList(g.length),p.idxFreeList.allocate(_);var C=void 0;for(var L in c.vertexBuffer){var B=t.tileBufferData.geometries[m].vertexBuffer[L];p.vertexBuffers[L].data=B.data,p.vertexBuffers[L].stride=B.stride,C=4*B.data.length/B.stride}p.vtxFreeList=new i.FreeList(C),p.vtxFreeList.allocate(F)}return h},e.prototype.delete=function(e){var t=n[e.geometryType];this._freeVertices(t,e.vertexFrom,e.vertexCount),this._freeIndices(t,e.indexFrom,e.indexCount),this._displayList.removeFromList(e),e.vertexFrom=void 0,e.indexFrom=void 0},e.prototype.setMeshData=function(e,t,r,i){var s=n[e.geometryType];e.meshData=null;var a=void 0,d=void 0;void 0===e.vertexFrom?(d=this._align(s,t.vertexCount),a=this._allocateVertices(s,d)):t.vertexCount>e.vertexCount?(this._freeVertices(s,e.vertexFrom,e.vertexCount),d=this._align(s,t.vertexCount),a=this._allocateVertices(s,d)):t.vertexCount===e.vertexCount?(a=e.vertexFrom,d=e.vertexCount):(this._freeVertices(s,e.vertexFrom+t.vertexCount,e.vertexCount-t.vertexCount),a=e.vertexFrom,d=t.vertexCount);var u=!0,f=void 0,v=void 0;if(void 0===e.indexFrom?(v=t.indexCount,f=this._allocateIndices(s,v)):t.indexCount>e.indexCount?(this._displayList.removeFromList(e),this._freeIndices(s,e.indexFrom,e.indexCount),v=t.indexCount,f=this._allocateIndices(s,v)):t.indexCount===e.indexCount?(u=!1,f=e.indexFrom,v=e.indexCount):(this._displayList.removeFromList(e),this._freeIndices(s,e.indexFrom+t.indexCount,e.indexCount-t.indexCount),f=e.indexFrom,v=t.indexCount),-1!==a&&-1!==f){var x=this._storageFor(s);if(o.copyMeshData(a,f,x.vertexBuffers,x.indexBuffer,t,r,i),e.vertexFrom=a,e.indexFrom=f,e.vertexCount=t.vertexCount,e.indexCount=t.indexCount,this._dirtyMap)for(var l in this._dirtyMap.markDirtyIndices(e.geometryType,e.indexFrom,e.indexCount),r)this._dirtyMap.markDirtyVertices(e.geometryType,l,e.vertexFrom,e.vertexCount);return u&&this._displayList.addToList(e),!0}return-1!==a&&this._freeVertices(s,a,d),-1!==f&&this._freeIndices(s,f,v),e.setMeshDataFromBuffers(t,r,i),e.vertexFrom=void 0,e.vertexCount=0,e.indexFrom=void 0,e.indexCount=0,!1},e.prototype._allocateVertices=function(e,t){var r=this._storageFor(e),i=r.vtxFreeList.allocate(t);return-1===i?-1:r.vtxFreeList.fragmentation>.5?-1:i},e.prototype._freeVertices=function(e,t,i){var o=this._storageFor(e);if(o.vtxFreeList.free(t,i),r("esri-feature-tiles-debug"))for(var n in o.vertexBuffers)for(var s=o.vertexBuffers[n].data,a=this._stridesFor(e,n),d=t*a/4,u=i*a/4,f=d;f<d+u;++f)s[f]=0},e.prototype._freeIndices=function(e,t,i){var o=this._storageFor(e);if(o.idxFreeList.free(t,i),r("esri-feature-tiles-debug"))for(var n=o.indexBuffer,s=t;s<t+i;++s)n[s]=0},e.prototype._align=function(e,t){var r=t%this._vertexAlignments[e];return 0===r?t:t+(this._vertexAlignments[e]-r)},e.prototype._allocateIndices=function(e,t){var r=this._storageFor(e),i=r.idxFreeList.allocate(t);return-1===i?-1:r.idxFreeList.fragmentation>.5?-1:i},e.prototype._storageFor=function(e){return this._freeListsAndStorage[e]},e.prototype._stridesFor=function(e,t){return this._strides[e][t]},e}();t.default=s}));