/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","./enums","./decluttering/util","../../../webgl/BufferObject","../../../webgl/enums","../../../webgl/VertexArrayObject"],(function(e,t,r,i,n,s,f,o){"use strict";let a=function(){function e(e,t){this.layerUIDs=[],this.isDestroyed=!1,this.data=e,this.memoryUsed=e.byteLength;let r=1;const i=new Uint32Array(e);this.layerUIDs=[];const n=i[r++];for(let s=0;s<n;s++)this.layerUIDs[s]=i[r++];this.bufferDataOffset=r,t&&(this.layer=t.getStyleLayerByUID(this.layerUIDs[0]))}var i=e.prototype;return i.destroy=function(){this.isDestroyed||(this.doDestroy(),this.isDestroyed=!0)},i.prepareForRendering=function(e){r.isNone(this.data)||(this.doPrepareForRendering(e,this.data,this.bufferDataOffset),this.data=null)},t._createClass(e,[{key:"isPreparedForRendering",get:function(){return r.isNone(this.data)}},{key:"offset",get:function(){return this.bufferDataOffset}}]),e}(),u=function(e){function n(t,r){var n;(n=e.call(this,t,r)||this).type=i.BucketType.LINE,n.lineIndexStart=0,n.lineIndexCount=0;const s=new Uint32Array(t);let f=n.bufferDataOffset;n.lineIndexStart=s[f++],n.lineIndexCount=s[f++];const o=s[f++];if(o>0){const e=new Map;for(let t=0;t<o;t++){const t=s[f++],r=s[f++],i=s[f++];e.set(t,[r,i])}n.patternMap=e}return n.bufferDataOffset=f,n}t._inheritsLoose(n,e);var a=n.prototype;return a.hasData=function(){return this.lineIndexCount>0},a.triangleCount=function(){return this.lineIndexCount/3},a.doDestroy=function(){r.isSome(this.lineVertexArrayObject)&&this.lineVertexArrayObject.dispose(),r.isSome(this.lineVertexBuffer)&&this.lineVertexBuffer.dispose(),r.isSome(this.lineIndexBuffer)&&this.lineIndexBuffer.dispose(),this.lineVertexArrayObject=null,this.lineVertexBuffer=null,this.lineIndexBuffer=null,this.memoryUsed=0},a.doPrepareForRendering=function(e,t,r){const i=new Uint32Array(t),n=new Int32Array(i.buffer),a=i[r++];this.lineVertexBuffer=s.BufferObject.createVertex(e,f.Usage.STATIC_DRAW,new Int32Array(n.buffer,4*r,a)),r+=a;const u=i[r++];this.lineIndexBuffer=s.BufferObject.createIndex(e,f.Usage.STATIC_DRAW,new Uint32Array(i.buffer,4*r,u)),r+=u;const c=this.layer.lineMaterial;this.lineVertexArrayObject=new o.VertexArrayObject(e,c.getAttributeLocations(),c.getLayoutInfo(),{geometry:this.lineVertexBuffer},this.lineIndexBuffer)},n}(a),c=function(e){function n(t,r){var n;(n=e.call(this,t,r)||this).type=i.BucketType.FILL,n.fillIndexStart=0,n.fillIndexCount=0,n.outlineIndexStart=0,n.outlineIndexCount=0;const s=new Uint32Array(t);let f=n.bufferDataOffset;n.fillIndexStart=s[f++],n.fillIndexCount=s[f++],n.outlineIndexStart=s[f++],n.outlineIndexCount=s[f++];const o=s[f++];if(o>0){const e=new Map;for(let t=0;t<o;t++){const t=s[f++],r=s[f++],i=s[f++];e.set(t,[r,i])}n.patternMap=e}return n.bufferDataOffset=f,n}t._inheritsLoose(n,e);var a=n.prototype;return a.hasData=function(){return this.fillIndexCount>0||this.outlineIndexCount>0},a.triangleCount=function(){return(this.fillIndexCount+this.outlineIndexCount)/3},a.doDestroy=function(){r.isSome(this.fillVertexArrayObject)&&this.fillVertexArrayObject.dispose(),r.isSome(this.fillVertexBuffer)&&this.fillVertexBuffer.dispose(),r.isSome(this.fillIndexBuffer)&&this.fillIndexBuffer.dispose(),this.fillVertexArrayObject=null,this.fillVertexBuffer=null,this.fillIndexBuffer=null,r.isSome(this.outlineVertexArrayObject)&&this.outlineVertexArrayObject.dispose(),r.isSome(this.outlineVertexBuffer)&&this.outlineVertexBuffer.dispose(),r.isSome(this.outlineIndexBuffer)&&this.outlineIndexBuffer.dispose(),this.outlineVertexArrayObject=null,this.outlineVertexBuffer=null,this.outlineIndexBuffer=null,this.memoryUsed=0},a.doPrepareForRendering=function(e,t,r){const i=new Uint32Array(t),n=new Int32Array(i.buffer),a=i[r++];this.fillVertexBuffer=s.BufferObject.createVertex(e,f.Usage.STATIC_DRAW,new Int32Array(n.buffer,4*r,a)),r+=a;const u=i[r++];this.fillIndexBuffer=s.BufferObject.createIndex(e,f.Usage.STATIC_DRAW,new Uint32Array(i.buffer,4*r,u)),r+=u;const c=i[r++];this.outlineVertexBuffer=s.BufferObject.createVertex(e,f.Usage.STATIC_DRAW,new Int32Array(n.buffer,4*r,c)),r+=c;const l=i[r++];this.outlineIndexBuffer=s.BufferObject.createIndex(e,f.Usage.STATIC_DRAW,new Uint32Array(i.buffer,4*r,l)),r+=l;const h=this.layer,x=h.fillMaterial,y=h.outlineMaterial;this.fillVertexArrayObject=new o.VertexArrayObject(e,x.getAttributeLocations(),x.getLayoutInfo(),{geometry:this.fillVertexBuffer},this.fillIndexBuffer),this.outlineVertexArrayObject=new o.VertexArrayObject(e,y.getAttributeLocations(),y.getLayoutInfo(),{geometry:this.outlineVertexBuffer},this.outlineIndexBuffer)},n}(a),l=function(e){function a(t,r,s){var f;(f=e.call(this,t,r)||this).type=i.BucketType.SYMBOL,f.iconPerPageElementsMap=new Map,f.glyphPerPageElementsMap=new Map,f.symbolInstances=[],f.isIconSDF=!1,f.opacityChanged=!1,f.lastOpacityUpdate=0,f.symbols=[];const o=new Uint32Array(t),a=new Int32Array(t),u=new Float32Array(t);let c=f.bufferDataOffset;f.isIconSDF=!!o[c++];const l=o[c++];for(let e=0;e<l;e++){const e=o[c++],t=o[c++],r=o[c++];f.iconPerPageElementsMap.set(e,[t,r])}const h=o[c++];for(let e=0;e<h;e++){const e=o[c++],t=o[c++],r=o[c++];f.glyphPerPageElementsMap.set(e,[t,r])}const x=o[c++],y=o[c++];return f.iconOpacity=new Int32Array(x),f.textOpacity=new Int32Array(y),c=n.deserializeSymbols(o,a,u,c,f.symbols,s),f.bufferDataOffset=c,f}t._inheritsLoose(a,e);var u=a.prototype;return u.hasData=function(){return this.iconPerPageElementsMap.size>0||this.glyphPerPageElementsMap.size>0},u.triangleCount=function(){let e=0;for(const[t,r]of this.iconPerPageElementsMap)e+=r[1];for(const[t,r]of this.glyphPerPageElementsMap)e+=r[1];return e/3},u.doDestroy=function(){r.isSome(this.iconVertexArrayObject)&&this.iconVertexArrayObject.dispose(),r.isSome(this.iconVertexBuffer)&&this.iconVertexBuffer.dispose(),r.isSome(this.iconOpacityBuffer)&&this.iconOpacityBuffer.dispose(),r.isSome(this.iconIndexBuffer)&&this.iconIndexBuffer.dispose(),this.iconVertexArrayObject=null,this.iconVertexBuffer=null,this.iconOpacityBuffer=null,this.iconIndexBuffer=null,r.isSome(this.textVertexArrayObject)&&this.textVertexArrayObject.dispose(),r.isSome(this.textVertexBuffer)&&this.textVertexBuffer.dispose(),r.isSome(this.textOpacityBuffer)&&this.textOpacityBuffer.dispose(),r.isSome(this.textIndexBuffer)&&this.textIndexBuffer.dispose(),this.textVertexArrayObject=null,this.textVertexBuffer=null,this.textOpacityBuffer=null,this.textIndexBuffer=null,this.memoryUsed=0},u.updateOpacityInfo=function(){if(!this.opacityChanged)return;this.opacityChanged=!1;const e=r.unwrap(this.iconOpacity),t=r.unwrap(this.iconOpacityBuffer);e.length>0&&e.byteLength===t.size&&t.setSubData(e);const i=r.unwrap(this.textOpacity),n=r.unwrap(this.textOpacityBuffer);i.length>0&&i.byteLength===n.size&&n.setSubData(i)},u.doPrepareForRendering=function(e,t,i){const n=new Uint32Array(t),a=new Int32Array(n.buffer),u=n[i++];this.iconVertexBuffer=s.BufferObject.createVertex(e,f.Usage.STATIC_DRAW,new Int32Array(a.buffer,4*i,u)),i+=u;const c=n[i++];this.iconIndexBuffer=s.BufferObject.createIndex(e,f.Usage.STATIC_DRAW,new Uint32Array(n.buffer,4*i,c)),i+=c;const l=n[i++];this.textVertexBuffer=s.BufferObject.createVertex(e,f.Usage.STATIC_DRAW,new Int32Array(a.buffer,4*i,l)),i+=l;const h=n[i++];this.textIndexBuffer=s.BufferObject.createIndex(e,f.Usage.STATIC_DRAW,new Uint32Array(n.buffer,4*i,h)),i+=h,this.iconOpacityBuffer=s.BufferObject.createVertex(e,f.Usage.STATIC_DRAW,r.unwrap(this.iconOpacity).buffer),this.textOpacityBuffer=s.BufferObject.createVertex(e,f.Usage.STATIC_DRAW,r.unwrap(this.textOpacity).buffer);const x=this.layer,y=x.iconMaterial,d=x.textMaterial;this.iconVertexArrayObject=new o.VertexArrayObject(e,y.getAttributeLocations(),y.getLayoutInfo(),{geometry:this.iconVertexBuffer,opacity:this.iconOpacityBuffer},this.iconIndexBuffer),this.textVertexArrayObject=new o.VertexArrayObject(e,d.getAttributeLocations(),d.getLayoutInfo(),{geometry:this.textVertexBuffer,opacity:this.textOpacityBuffer},this.textIndexBuffer)},a}(a),h=function(e){function n(t,r){var n;(n=e.call(this,t,r)||this).type=i.BucketType.CIRCLE,n.circleIndexStart=0,n.circleIndexCount=0;const s=new Uint32Array(t);let f=n.bufferDataOffset;return n.circleIndexStart=s[f++],n.circleIndexCount=s[f++],n.bufferDataOffset=f,n}t._inheritsLoose(n,e);var a=n.prototype;return a.hasData=function(){return this.circleIndexCount>0},a.triangleCount=function(){return this.circleIndexCount/3},a.doDestroy=function(){r.isSome(this.circleVertexArrayObject)&&this.circleVertexArrayObject.dispose(),r.isSome(this.circleVertexBuffer)&&this.circleVertexBuffer.dispose(),r.isSome(this.circleIndexBuffer)&&this.circleIndexBuffer.dispose(),this.circleVertexArrayObject=null,this.circleVertexBuffer=null,this.circleIndexBuffer=null,this.memoryUsed=0},a.doPrepareForRendering=function(e,t,r){const i=new Uint32Array(t),n=new Int32Array(i.buffer),a=i[r++];this.circleVertexBuffer=s.BufferObject.createVertex(e,f.Usage.STATIC_DRAW,new Int32Array(n.buffer,4*r,a)),r+=a;const u=i[r++];this.circleIndexBuffer=s.BufferObject.createIndex(e,f.Usage.STATIC_DRAW,new Uint32Array(i.buffer,4*r,u)),r+=u;const c=this.layer.circleMaterial;this.circleVertexArrayObject=new o.VertexArrayObject(e,c.getAttributeLocations(),c.getLayoutInfo(),{geometry:this.circleVertexBuffer},this.circleIndexBuffer)},n}(a);e.CircleRenderBucket=h,e.FillRenderBucket=c,e.LineRenderBucket=u,e.RenderBucketBase=a,e.SymbolRenderBucket=l,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
