/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["./Utils","../../../webgl/BufferObject","../../../webgl/enums","../../../webgl/VertexArrayObject"],(function(e,t,r,n){"use strict";return function(){function f(n){this.geometryMap=e.createGeometryData((()=>({indexBuffer:t.BufferObject.createIndex(n,r.Usage.STATIC_DRAW),vao:null})),((r,f)=>({vertexBuffer:t.BufferObject.createVertex(n,e.C_VBO_INFO[f])})))}var a=f.prototype;return a.dispose=function(){for(let e=0;e<5;e++){const t=this.geometryMap[e];if(t){t.data.vao&&t.data.vao.dispose(!1),t.data.indexBuffer&&t.data.indexBuffer.dispose();for(const e in t.buffers)t.buffers[e]&&t.buffers[e].data.vertexBuffer.dispose()}}},a.get=function(e){const t=this.geometryMap[e];return{getVAO(e,r,f){if(!t.data.vao){const a={};for(const e in t.buffers)a[e]=t.buffers[e].data.vertexBuffer;t.data.vao=new n.VertexArrayObject(e,f,r,a,t.data.indexBuffer)}return t.data.vao}}},a.has=function(e){return null!=this.geometryMap[e]},a.upload=function(e,t){t.forEach(((t,r)=>{this._upload(t,r,e)}))},a._upload=function(e,t,r){if(e.indices&&(e.indices.allDirty?this._uploadIndices(r,t):null!=e.indices.from&&null!=e.indices.count&&this._uploadIndices(r,t,e.indices.from,e.indices.count)),e.vertices){const n=e.vertices;for(const e in n){const f=n[e];f.allDirty?this._uploadVertices(r,t,e):null!=f.from&&null!=f.count&&this._uploadVertices(r,t,e,f.from,f.count)}}},a._uploadVertices=function(e,t,r,n,f){const a=this.geometryMap[t];if(!a)return;const u=e.geometries[t].vertexBuffer[r];if(!u)return;const i=u.stride,s=u.data.buffer;a.buffers[r]&&s.byteLength>0&&(null!=n&&null!=f?a.buffers[r].data.vertexBuffer.setSubData(s,n*i,n*i,(n+f)*i):a.buffers[r].data.vertexBuffer.setData(s))},a._uploadIndices=function(e,t,r,n){const f=this.geometryMap[t];if(!f)return;const a=4,u=e.geometries[t].indexBuffer.buffer;f.data.indexBuffer&&u.byteLength>0&&(null!=r&&null!=n?f.data.indexBuffer.setSubData(u,r*a,r*a,(r+n)*a):f.data.indexBuffer.setData(u))},f}()}));
