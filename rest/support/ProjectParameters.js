/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../../geometry/support/jsonUtils"],(function(r,t,e,o,s,i,n,a,p){"use strict";let c=function(t){function e(r){var e;return(e=t.call(this,r)||this).geometries=null,e.outSpatialReference=null,e.transformation=null,e.transformForward=null,e}return r._inheritsLoose(e,t),e.prototype.toJSON=function(){const r=this.geometries.map((function(r){return r.toJSON()})),t=this.geometries[0],e={};return e.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),e.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()),e.geometries=JSON.stringify({geometryType:p.getJsonType(t),geometries:r}),this.transformation&&(e.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(e.transformForward=this.transformForward),e},e}(e.JSONSupport);t.__decorate([o.property()],c.prototype,"geometries",void 0),t.__decorate([o.property({json:{read:{source:"outSR"}}})],c.prototype,"outSpatialReference",void 0),t.__decorate([o.property()],c.prototype,"transformation",void 0),t.__decorate([o.property()],c.prototype,"transformForward",void 0),c=t.__decorate([a.subclass("esri.rest.support.ProjectParameters")],c);return c}));
