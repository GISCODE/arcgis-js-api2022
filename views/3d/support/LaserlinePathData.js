/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/maybe","../../../chunks/vec3","../../../chunks/vec3f64","./buffer/glUtil","./buffer/InterleavedLayout","../webgl-engine/lib/VertexAttribute","../webgl-engine/shaders/LaserlinePathTechnique","../../webgl/BufferObject","../../webgl/enums","../../webgl/VertexArrayObject"],(function(e,t,r,s,i,n,u,o,a,f,c,l){"use strict";let h=function(){function e(e){this._renderCoordsHelper=e,this._buffers=null,this._origin=i.create(),this._dirty=!1,this._count=0,this._vao=null}var u=e.prototype;return u.draw=function(e){const t=this._ensureVAO(e);r.isSome(t)&&(e.bindVAO(t),e.drawArrays(c.PrimitiveType.TRIANGLES,0,this._count))},u.dispose=function(){r.isSome(this._vao)&&this._vao.dispose()},u._ensureVAO=function(e){return r.isNone(this._buffers)?null:(r.isNone(this._vao)&&(this._vao=this._createVAO(e,this._buffers)),this._ensureVertexData(this._vao,this._buffers),this._vao)},u._createVAO=function(e,t){const r=this._createDataBuffer(t);return this._dirty=!1,new l.VertexArrayObject(e,a.LaserlinePathTechnique.attributeLocations,{data:n.glLayout(b)},{data:f.BufferObject.createVertex(e,c.Usage.STATIC_DRAW,r)})},u._ensureVertexData=function(e,t){if(!this._dirty)return;const r=this._createDataBuffer(t);e.vertexBuffers.data.setData(r),this._dirty=!1},u._numberOfRenderVertices=function(e){return 3*(2*(e.length/3-1))},u._createDataBuffer=function(e){const t=e.reduce(((e,t)=>e+this._numberOfRenderVertices(t)),0);this._count=t;const r=b.createBuffer(t),i=this._origin;let n=0,u=0;for(const o of e){for(let e=0;e<o.length;e+=3){const t=s.set(d,o[e+0],o[e+1],o[e+2]);0===e?u=this._renderCoordsHelper.getAltitude(t):this._renderCoordsHelper.setAltitude(t,u);const a=this._renderCoordsHelper.worldUpAtPosition(t,_),f=n+2*e,c=s.subtract(d,t,i);if(e<o.length-3){r.up.setVec(f,a),r.up.setVec(f+3,a),r.up.setVec(f+5,a);for(let e=0;e<6;e++)r.start.setVec(f+e,c);r.extrude.setValues(f+0,0,-1),r.extrude.setValues(f+1,1,-1),r.extrude.setValues(f+2,1,1),r.extrude.setValues(f+3,0,-1),r.extrude.setValues(f+4,1,1),r.extrude.setValues(f+5,0,1)}if(e>0){r.up.setVec(f-2,a),r.up.setVec(f-4,a),r.up.setVec(f-5,a);for(let e=-6;e<0;e++)r.end.setVec(f+e,c)}}n+=this._numberOfRenderVertices(o)}return r.buffer},t._createClass(e,[{key:"vertices",set:function(e){const t=new Float64Array(3*e.length);let r=0;for(const s of e)t[r++]=s[0],t[r++]=s[1],t[r++]=s[2];this.buffers=[t]}},{key:"buffers",set:function(e){if(this._buffers=e,this._buffers.length>0){const e=this._buffers[0],t=3*Math.floor(e.length/3/2);s.set(this._origin,e[t+0],e[t+1],e[t+2])}else s.set(this._origin,0,0,0);this._dirty=!0}},{key:"origin",get:function(){return this._origin}}]),e}();const _=i.create(),d=i.create(),b=u.newLayout().vec3f(o.VertexAttribute.START).vec3f(o.VertexAttribute.END).vec3f(o.VertexAttribute.UP).vec2f(o.VertexAttribute.EXTRUDE);e.LaserlinePathData=h,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
