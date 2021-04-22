/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../../core/maybe","../../../../core/CircularArray","../../../../chunks/vec2","../../../../chunks/mat2d","../../../../chunks/mat2df32","../../../../chunks/vec2f32","./enums","./Utils","./WGLTile","./collisions/MetricReader","./cpuMapped/Geometry"],(function(e,t,r,s,n,i,a,c,o,h,u,d,l,_){"use strict";const p=50,f=4,m=8;let S=0,y=function(e){function r(t,r,s){var i;return(i=e.call(this,t,r)||this).instanceId=S++,i.patchCount=0,i._renderState={current:{geometry:new Map,metrics:null},next:null,swap:!1,swapFrames:0,locked:!1},i._patches=new n(100),i._lastCommitTime=0,i._lastMessageWasClear=!1,i.transforms.labelMat2d=c.create(),i._store=s,i}t._inheritsLoose(r,e);var d=r.prototype;return d.destroy=function(){e.prototype.destroy.call(this),this._renderState.current.geometry.forEach((e=>e.destroy()))},d.getGeometry=function(e){return this._renderState.current.geometry.get(e)},d.setTransform=function(t,r){e.prototype.setTransform.call(this,t,r);const s=this.transforms.labelMat2d,n=t.getScreenTransform(s,r),c=o.create();i.transformMat2d(c,this.coords,n),a.identity(s),a.translate(s,s,c),a.multiply(s,t.viewMat2d,s)},d.patch=function(e){this.patchCount++,e.clear&&this._lastMessageWasClear||(this._lastMessageWasClear=e.clear,e.clear&&this._patches.size>=p&&this._dropPatches(),this._patches.enqueue(e),this.requestRender())},d.commit=function(e){if(this._lastCommitTime!==e.time){this._lastCommitTime=e.time;for(let e=0;e<f;e++)this._updateMesh();this._renderState.swap&&(this._swapRenderStates(),this.requestRender())}},d.lock=function(){this._renderState.locked=!0},d.unlock=function(){this._renderState.locked=!1,this._flushUpdates(),this._swap()},d._swapRenderStates=function(){if(this._renderState.next){if(this._renderState.locked)return this._renderState.swap=!0,void this.requestRender();if(this._renderState.swap=!0,0===this._renderState.swapFrames)return this._renderState.swapFrames=m,void this.requestRender();1==this._renderState.swapFrames--?this._swap():this.requestRender()}},d._swap=function(){this._renderState.swap&&(this._renderState.swap=!1,s.isSome(this._renderState.next)&&(this._renderState.current.geometry.forEach((e=>e.destroy())),this._renderState.current=this._renderState.next,this._renderState.next=null))},d._flushUpdates=function(){let e=this._patches.maxSize;for(;this._patches.size&&e--;)this._updateMesh(),this._swap()},d._updateMesh=function(){const e=this._patches.peek();if(s.isSome(e)&&e.clear&&null!==this._renderState.next)return;const t=this._patches.dequeue();if(s.isSome(t)){if(!0===t.clear){if(!this.isReady)return;return this._renderState.next,void(this._renderState.next={geometry:new Map,metrics:null})}this.requestRender(),this._patch(t),t.end&&(this.ready(),this._swapRenderStates())}},d._patch=function(e){u.forEachGeometryType((t=>{this._remove(t,e.remove),this._insert(e.type,t,e.addOrUpdate,e.clear)}))},d._insert=function(e,t,r,n){try{const i=s.unwrapOr(this._renderState.next,this._renderState.current),a=null==r?void 0:r.data[t],c=i.geometry;if(s.isNone(a))return;c.has(t)||c.set(t,new _.Geometry(t,this.stage)),c.get(t).insert(e,a),t===h.WGLGeometryType.LABEL&&this._insertLabelMetrics(e,a.metrics,n)}catch(i){}},d._insertLabelMetrics=function(e,t,r){const n=s.unwrapOr(this._renderState.next,this._renderState.current);if(s.isNone(t))return;const i=l.MetricReader.from(t);if(s.isNone(n.metrics))n.metrics=i;else{if("update"===e){const e=i.getCursor();for(;e.next();)n.metrics.delete(e.id)}n.metrics.link(i)}},d._remove=function(e,t){const r=s.unwrapOr(this._renderState.next,this._renderState.current).geometry.get(e);t&&t.length&&r&&(r.remove(t),this._removeLabelMetrics(t))},d._removeLabelMetrics=function(e){const{metrics:t}=s.unwrapOr(this._renderState.next,this._renderState.current);if(!s.isNone(t)&&e.length)for(const r of e)for(;t.delete(r););},d._dropPatches=function(){const e=new Array;let t=!1;for(;this._patches.size;){const r=this._patches.dequeue();if(s.isNone(r))break;if(r.clear){if(t)break;t=!0}e.push(r)}this._patches.clear(),e.forEach((e=>this._patches.enqueue(e)))},t._createClass(r,[{key:"labelMetrics",get:function(){return this._renderState.current.metrics}},{key:"hasData",get:function(){return!!this._renderState.current.geometry.size}}]),r}(d.WGLTile);e.FeatureTile=y,Object.defineProperty(e,"__esModule",{value:!0})}));