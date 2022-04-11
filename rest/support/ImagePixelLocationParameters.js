/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","../../geometry/Point"],(function(e,r,t,o,s,p,i,c,n,a,u){"use strict";var l;let y=l=function(r){function t(){var e;return(e=r.apply(this,arguments)||this).geometries=null,e.rasterId=null,e}e._inheritsLoose(t,r);var o=t.prototype;return o.writeGeometry=function(e,r,t){r.geometries={geometryType:"esriGeometryPoint",geometries:e.map((e=>e.toJSON()))}},o.clone=function(){return new l({geometries:this.geometries.map((e=>e.clone())),rasterId:this.rasterId})},t}(o.JSONSupport);r.__decorate([s.property({type:[u],json:{write:!0}})],y.prototype,"geometries",void 0),r.__decorate([a.writer("geometries")],y.prototype,"writeGeometry",null),r.__decorate([s.property({type:c.Integer,json:{write:!0}})],y.prototype,"rasterId",void 0),y=l=r.__decorate([n.subclass("esri.rest.support.ImagePixelLocationParameters")],y);return y}));
