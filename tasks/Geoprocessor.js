/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass","../geometry/Extent","../geometry/SpatialReference","../rest/geoprocessor/execute","../rest/geoprocessor/submitJob","../rest/geoprocessor/GPOptions","../rest/support/JobInfo","./Task"],(function(e,t,r,o,s,n,u,c,i,a,p,l,h,b){"use strict";let f=function(t){function r(e){var r;return(r=t.call(this,e)||this)._jobs=new Map,r.outSpatialReference=null,r.processExtent=null,r.processSpatialReference=null,r.returnFeatureCollection=!1,r.returnM=!1,r.returnZ=!1,r}e._inheritsLoose(r,t);var o=r.prototype;return o.destroy=function(){this._jobs.forEach((e=>e.destroy())),this._jobs.clear()},o.cancelJob=function(e,t){const r=this._getOrAddJob(e),o={...this.requestOptions,...t};return r.cancelJob(o)},o.checkJobStatus=function(e,t){const r=this._getOrAddJob(e),o={...this.requestOptions,...t};return r.checkJobStatus(o)},o.execute=function(e,t){const r=new l({outSpatialReference:this.outSpatialReference,processExtent:this.processExtent,processSpatialReference:this.processSpatialReference,returnFeatureCollection:this.returnFeatureCollection,returnM:this.returnM,returnZ:this.returnZ}),o={...this.requestOptions,...t};return a.execute(this.url,e,r,o)},o.getResultData=function(e,t,r){const o=this._getOrAddJob(e),{returnFeatureCollection:s,returnM:n,returnZ:u,outSpatialReference:c}=this,i=new l({returnFeatureCollection:s,returnM:n,returnZ:u,outSpatialReference:c,url:this.url}),a={...this.requestOptions,...r};return o.fetchResultData(t,i,a)},o.getResultImage=function(e,t,r,o){const s=this._getOrAddJob(e),n={...this.requestOptions,...o};return s.fetchResultImage(t,r,n)},o.getResultMapImageLayer=function(){var t=e._asyncToGenerator((function*(e){return this._getOrAddJob(e).fetchResultMapImageLayer()}));function r(e){return t.apply(this,arguments)}return r}(),o.submitJob=function(e,t){const r=new l({outSpatialReference:this.outSpatialReference,processExtent:this.processExtent,processSpatialReference:this.processSpatialReference,returnFeatureCollection:this.returnFeatureCollection,returnM:this.returnM,returnZ:this.returnZ}),o={...this.requestOptions,...t};return p.submitJob(this.url,e,r,o).then((e=>(e.sourceUrl=this.url,this._jobs.set(e.jobId,e),e)))},o.waitForJobCompletion=function(e,t={}){return this._getOrAddJob(e).waitForJobCompletion(t)},o._getOrAddJob=function(e){let t=this._jobs.get(e);return t||(t=new h({sourceUrl:this.url,jobId:e}),this._jobs.set(t.jobId,t)),t},r}(b);t.__decorate([r.property({type:i})],f.prototype,"outSpatialReference",void 0),t.__decorate([r.property({type:c})],f.prototype,"processExtent",void 0),t.__decorate([r.property({type:i})],f.prototype,"processSpatialReference",void 0),t.__decorate([r.property({nonNullable:!0})],f.prototype,"returnFeatureCollection",void 0),t.__decorate([r.property({nonNullable:!0})],f.prototype,"returnM",void 0),t.__decorate([r.property({nonNullable:!0})],f.prototype,"returnZ",void 0),f=t.__decorate([u.subclass("esri.tasks.Geoprocessor")],f);return f}));
