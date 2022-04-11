/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/arrayUtils","../../../core/Evented","../../../core/maybe","../../../geometry/Polygon","../../../geometry/Polyline","../coordinateHelper","./unnormalizationHelper"],(function(e,t,i,n,s,r,o,c,h){"use strict";let l=function(){function e(e){this.component=e,this.leftEdge=null,this.rightEdge=null,this.type="vertex",this.index=null}return t._createClass(e,[{key:"pos",get:function(){return this._pos},set:function(e){this._pos=e,this.component.unnormalizeVertexPositions()}}]),e}(),a=function(e,t,i){this.component=e,this.leftVertex=t,this.rightVertex=i,this.type="edge",t.rightEdge=this,i.leftEdge=this},g=function(){function e(e,t){this.spatialReference=e,this.viewingMode=t,this.vertices=[],this.edges=[]}var t=e.prototype;return t.unnormalizeVertexPositions=function(){this.vertices.length<=1||h.unnormalize(this.vertices,h.getUnnormalizationInfo(this.spatialReference,this.viewingMode))},t.updateVertexIndex=function(e,t){if(0===this.vertices.length)return;const i=this.vertices[0];let n=null,s=e,r=t;do{n=s,n.index=r++,s=n.rightEdge?n.rightEdge.rightVertex:null}while(null!=s&&s!==i);n.leftEdge&&n!==this.vertices[this.vertices.length-1]&&this.swapVertices(this.vertices.indexOf(n),this.vertices.length-1)},t.getFirstVertex=function(){return 0===this.vertices.length?null:this.vertices[0]},t.getLastVertex=function(){return 0===this.vertices.length?null:this.vertices[this.vertices.length-1]},t.isClosed=function(){return this.vertices.length>2&&null!==this.vertices[0].leftEdge},t.swapVertices=function(e,t){const i=this.vertices[e];this.vertices[e]=this.vertices[t],this.vertices[t]=i},t.iterateVertices=function(e){if(0===this.vertices.length)return;const t=this.vertices[0];let i=t;do{e(i,i.index),i=s.isSome(i.rightEdge)?i.rightEdge.rightVertex:null}while(i!==t&&null!=i)},e}(),p=function(e){function n(t,i,n){var s;return(s=e.call(this)||this).type=t,s.coordinateHelper=i,s.viewingMode=n,s._geometry=null,s.dirty=!0,s.components=[],s}t._inheritsLoose(n,e);var h=n.prototype;return h.notifyChanges=function(e){this.dirty=!0,this.emit("change",e)},h._toPoint=function(){return 0===this.components.length||0===this.components[0].vertices.length?null:this.coordinateHelper.vectorToPoint(this.components[0].vertices[0].pos)},h._toPolyline=function(){const e=[],t=this.coordinateHelper.vectorToArray;return this.components.forEach(((i,n)=>{const s=[];let r=i.vertices.find((e=>null==e.leftEdge));const o=r;do{s.push(t(r.pos)),r=r.rightEdge?r.rightEdge.rightVertex:null}while(r&&r!==o);e.push(s)})),new o({paths:e,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})},h._toPolygon=function(){const e=[],t=this.coordinateHelper.vectorToArray;return this.components.forEach(((i,n)=>{const r=[],o=i.vertices[0];let c=o;const h=c;do{r.push(t(c.pos)),c=s.isSome(c.rightEdge)?c.rightEdge.rightVertex:null}while(c&&c!==h);i.isClosed()&&r.push(t(o.pos)),e.push(r)})),new r({rings:e,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})},n.fromGeometry=function(e,t){const s=e.spatialReference,r=c.createCoordinateHelper(e.hasZ,e.hasM,s),o=new n(e.type,r,t);switch(e.type){case"polygon":{const n=e.rings;for(let e=0;e<n.length;++e){const c=n[e],h=new g(s,t),p=c.length>2&&i.equals(c[0],c[c.length-1]),u=p?c.length-1:c.length;for(let e=0;e<u;++e){const t=r.arrayToVector(c[e]),i=new l(h);h.vertices.push(i),i.pos=t,i.index=e}const d=h.vertices.length-1;for(let e=0;e<d;++e){const t=h.vertices[e],i=h.vertices[e+1],n=new a(h,t,i);h.edges.push(n)}if(p){const e=new a(h,h.vertices[h.vertices.length-1],h.vertices[0]);h.edges.push(e)}o.components.push(h)}break}case"polyline":for(const i of e.paths){const e=new g(s,t),n=i.length;for(let t=0;t<n;++t){const n=r.arrayToVector(i[t]),s=new l(e);e.vertices.push(s),s.pos=n,s.index=t}const c=e.vertices.length-1;for(let t=0;t<c;++t){const i=e.vertices[t],n=e.vertices[t+1],s=new a(e,i,n);e.edges.push(s)}o.components.push(e)}break;case"point":{const i=new g(s,t),n=new l(i);n.index=0,n.pos=r.pointToVector(e),i.vertices.push(n),o.components.push(i);break}}return o},t._createClass(n,[{key:"geometry",get:function(){if(this.dirty){switch(this.type){case"point":this._geometry=this._toPoint();break;case"polyline":this._geometry=this._toPolyline();break;case"polygon":this._geometry=this._toPolygon()}this.dirty=!1}return this._geometry}},{key:"spatialReference",get:function(){return this.coordinateHelper.spatialReference}}]),n}(n);e.Component=g,e.Edge=a,e.EditGeometry=p,e.Vertex=l,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
