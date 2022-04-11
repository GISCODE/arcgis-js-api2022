/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../geometry","../../../../core/arrayUtils","../../../../core/maybe","../../../../core/promiseUtils","../../../support/Scheduler","../../../../geometry/Multipoint"],(function(e,t,r,i,n,o,s,a){"use strict";let u=function(){function e(e,t){this.spatialReference=e,this.view=t}var r=e.prototype;return r.getElevation=function(e,t,r){return this.view.elevationProvider.getElevation(e,t,0,this.spatialReference,r)},r.queryElevation=function(){var e=t._asyncToGenerator((function*(e,t,r,i,n){return this.view.elevationProvider.queryElevation(e,t,0,this.spatialReference,n,r,i)}));function r(t,r,i,n,o){return e.apply(this,arguments)}return r}(),e}(),l=function(){function e(e,t,r,i){this.spatialReference=t,this._getElevationQueryProvider=r,this._queries=new Array,this._queryOptions={...i,ignoreInvisibleLayers:!0},this._frameTask=e.registerTask(s.TaskPriority.ELEVATION_QUERY,this)}var r=e.prototype;return r.destroy=function(){this._frameTask.remove()},r.queryElevation=function(e,t,r,n=0){return new Promise(((s,a)=>{const u={x:e,y:t,minDemResolution:n,result:{resolve:s,reject:a},signal:r};this._queries.push(u),o.onAbort(r,(()=>{i.remove(this._queries,u),a(o.createAbortError())}))}))},r.runTask=function(){const e=this._queries;this._queries=[];const t=this._getElevationQueryProvider();if(!t)return void e.forEach((e=>e.result.reject()));const r=e.map((e=>[e.x,e.y])),i=e.reduce(((e,t)=>Math.min(e,t.minDemResolution)),1/0),s=new a({points:r,spatialReference:this.spatialReference}),u=e.length>1&&e.some((e=>!!e.signal))?new AbortController:null,l=n.isSome(u)?u.signal:e[0].signal;if(n.isSome(u)){let t=0;e.forEach((r=>o.onAbort(r.signal,(()=>{t++,r.result.reject(o.createAbortError()),t===e.length&&u.abort()}))))}const c={...this._queryOptions,minDemResolution:i,signal:l};t.queryElevation(s,c).then((t=>{e.forEach(((e,r)=>{n.isSome(e.signal)&&e.signal.aborted?e.result.reject(o.createAbortError()):e.result.resolve(t.geometry.points[r][2])}))})).catch((t=>{e.forEach((e=>e.result.reject(t)))}))},t._createClass(e,[{key:"running",get:function(){return this._queries.length>0}},{key:"test",get:function(){const e=this;return{update:()=>e._queries.length>0&&e.runTask()}}}]),e}();e.ElevationQuery=l,e.ViewElevationProvider=u,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
