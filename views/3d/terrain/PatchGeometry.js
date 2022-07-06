/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{c as t}from"../../../chunks/vec4f64.js";import{empty as e}from"../../../geometry/support/aaBoundingBox.js";import{BufferPool as s}from"../../../geometry/support/buffer/BufferPool.js";import{newLayout as i}from"../support/buffer/InterleavedLayout.js";import{GEOMETRY_VERTEX_STRIDE as r}from"./TerrainConst.js";import{internalAssert as f}from"./terrainUtils.js";import{VertexAttribute as u}from"../webgl-engine/lib/VertexAttribute.js";class h{constructor(){this.indices=null,this.vertexAttributes=null,this.boundingBox=e(),this.indexCount=0,this.numVerticesPerSide=0,this.uvOffsetAndScale=t(),this.outerEdges=[null,null,null,null],this.innerEdges=[null,null,null,null]}}class n{constructor(t,e,s,i,r){this._buf=t,this._localOrigin=e,this.offset0=s,this.stride=i,this.count=r}getVertexOffset(t){return f(0<=t&&t<this.count),this.offset0+this.stride*t}getVertex(t,e){const s=this.getVertexOffset(e)*r;t[0]=this._buf[s+0]+this._localOrigin[0],t[1]=this._buf[s+1]+this._localOrigin[1],t[2]=this._buf[s+2]+this._localOrigin[2]}getVertexZ(t){const e=this.getVertexOffset(t)*r;return this._buf[e+2]+this._localOrigin[2]}setVertex(t,e,s,i){const f=this.getVertexOffset(t)*r;this._buf[f+0]=e[0]-this._localOrigin[0],this._buf[f+1]=e[1]-this._localOrigin[1],this._buf[f+2]=e[2]-this._localOrigin[2],this._buf[f+3]=s,this._buf[f+4]=i}getNormal(t,e){const s=this.getVertexOffset(e)*r;t[0]=this._buf[s+5],t[1]=this._buf[s+6],t[2]=this._buf[s+7]}setVertexRawXYZUV(t,e,s,i,f,u){const h=this.getVertexOffset(t)*r;this._buf[h+0]=e,this._buf[h+1]=s,this._buf[h+2]=i,this._buf[h+3]=f,this._buf[h+4]=u}setVertexRawXYZUVN(t,e,s,i,f,u,h,n,o){const l=this.getVertexOffset(t)*r;this._buf[l+0]=e,this._buf[l+1]=s,this._buf[l+2]=i,this._buf[l+3]=f,this._buf[l+4]=u,this._buf[l+5]=h,this._buf[l+6]=n,this._buf[l+7]=o}setVertexRawNormal(t,e,s,i){const f=this.getVertexOffset(t)*r;this._buf[f+5]=e,this._buf[f+6]=s,this._buf[f+7]=i}getVertexRawNormal(t,e){const s=this.getVertexOffset(e)*r;t[0]=this._buf[s+5],t[1]=this._buf[s+6],t[2]=this._buf[s+7]}}const o=i().vec3f(u.POSITION).vec2f(u.UV0).vec3f(u.NORMAL),l=new s((t=>o.createBuffer(t)),(t=>t.count));function c(){l.clear()}function b(t){return l.acquire(t)}function _(t){l.release(t.vertexAttributes),t.vertexAttributes=null,t.indices=null}export{n as EdgeDescriptor,h as PatchGeometry,b as acquireTerrainAttributes,c as clearCaches,_ as releaseGeometry};