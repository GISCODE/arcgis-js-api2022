/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/mathUtils","../definitions","../../../layers/features/support/StaticBitSet"],(function(t,s,i,e){"use strict";const o=2,n=1,h=0,r=1,c=2;let l=function(){function t(t,s){this.width=t,this.height=s;const i=Math.ceil(t/n),o=Math.ceil(s/n);this._cols=i,this._rows=o,this._cells=e.StaticBitSet.create(i*o)}var i=t.prototype;return i.insertMetrics=function(t){const s=this._hasCollision(t);return s===h&&this._markMetrics(t),s},i.getCellId=function(t,s){return t+s*this._cols},i.has=function(t){return this._cells.has(t)},i.hasRange=function(t,s){return this._cells.hasRange(t,s)},i.set=function(t){this._cells.set(t)},i.setRange=function(t,s){this._cells.setRange(t,s)},i._hasCollision=function(t){const s=t.id;let i=0,e=0;t.save();do{const s=t.boundsCount;i+=s;for(let i=0;i<s;i++){const s=t.boundsComputedAnchorX(i),n=t.boundsComputedAnchorY(i),h=t.boundsWidth(i)+o,l=t.boundsHeight(i)+o;switch(this._collide(s,n,h,l)){case c:return c;case r:e++}}}while(t.peekId()===s&&t.next());return t.restore(),i===e?r:h},i._collide=function(t,i,e,o){const l=t-e/2,u=i-o/2,a=l+e,_=u+o;if(a<0||_<0||l>this.width||u>this.height)return r;const d=s.clamp(Math.floor(l/n),0,this._cols),f=s.clamp(Math.floor(u/n),0,this._rows),g=s.clamp(Math.ceil(a/n),0,this._cols),p=s.clamp(Math.ceil(_/n),0,this._rows);for(let s=f;s<=p;s++)for(let t=d;t<=g;t++){const i=this.getCellId(t,s);if(this.has(i))return c}return h},i._mark=function(t,i,e,o){const h=t-e/2,r=i-o/2,c=h+e,l=r+o,u=s.clamp(Math.floor(h/n),0,this._cols),a=s.clamp(Math.floor(r/n),0,this._rows),_=s.clamp(Math.ceil(c/n),0,this._cols),d=s.clamp(Math.ceil(l/n),0,this._rows);for(let s=a;s<=d;s++)for(let t=u;t<=_;t++){const i=this.getCellId(t,s);this.set(i)}return!1},i._markMetrics=function(t){const s=t.id;do{const s=t.boundsCount;for(let i=0;i<s;i++){const s=t.boundsComputedAnchorX(i),e=t.boundsComputedAnchorY(i),n=t.boundsWidth(i)+o,h=t.boundsHeight(i)+o;this._mark(s,e,n,h)}}while(t.peekId()===s&&t.next())},t}(),u=function(){function t(t,s=2){this._bucketSize=t,this._rowsLength=i.TILE_SIZE/t,this._colsLength=i.TILE_SIZE/t,this._elementsPerBucket=s,this._grid=this._initGrid()}var s=t.prototype;return s.checkOverlap=function(t,s){const i=Math.floor(t/this._bucketSize),e=Math.floor(s/this._bucketSize);return i<0||i>=this._rowsLength||e<0||e>=this._colsLength||this._grid[e*this._colsLength+i]>=this._elementsPerBucket},s.markUsed=function(t,s){const i=Math.floor(t/this._bucketSize),e=Math.floor(s/this._bucketSize);this._grid[e*this._colsLength+i]+=1},s.reset=function(){this._grid=this._initGrid()},s._initGrid=function(){return new Uint8Array(this._rowsLength*this._colsLength)},t}();t.CollisionBitsetGrid=l,t.CollisionGrid=u,t.HAS_COLLISION=c,t.NONE=h,t.OUTSIDE_EXTENT=r,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
