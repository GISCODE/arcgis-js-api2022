/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../TimeExtent","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","../../geometry/support/jsonUtils","../../layers/support/MosaicRule","../../layers/support/RasterFunction","../../geometry/Point"],(function(e,r,t,o,p,s,i,n,u,c,l,a,y,m){"use strict";var d;let g=d=function(r){function t(){var e;return(e=r.apply(this,arguments)||this).geometry=null,e.mosaicRule=null,e.renderingRule=null,e.pixelSize=null,e.raster=void 0,e.timeExtent=null,e}e._inheritsLoose(t,r);var o=t.prototype;return o.writeGeometry=function(e,r,t){null!=e&&(r.geometryType=l.getJsonType(e),r[t]=e.toJSON())},o.clone=function(){return new d(s.clone({geometry:this.geometry,mosaicRule:this.mosaicRule,renderingRule:this.renderingRule,pixelSize:this.pixelSize,raster:this.raster,timeExtent:this.timeExtent}))},t}(p.JSONSupport);r.__decorate([i.property({types:t.geometryTypes,json:{read:l.fromJSON}})],g.prototype,"geometry",void 0),r.__decorate([c.writer("geometry")],g.prototype,"writeGeometry",null),r.__decorate([i.property({type:a,json:{write:!0}})],g.prototype,"mosaicRule",void 0),r.__decorate([i.property({type:y,json:{write:!0}})],g.prototype,"renderingRule",void 0),r.__decorate([i.property({type:m,json:{write:!0}})],g.prototype,"pixelSize",void 0),r.__decorate([i.property({json:{write:!0}})],g.prototype,"raster",void 0),r.__decorate([i.property({type:o,json:{read:{source:"time"},write:{target:"time"}}})],g.prototype,"timeExtent",void 0),g=d=r.__decorate([u.subclass("esri.rest.support.ImageHistogramParameters")],g);return g}));
