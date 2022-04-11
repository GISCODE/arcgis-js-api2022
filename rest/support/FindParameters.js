/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../../geometry/SpatialReference"],(function(e,r,t,o,p,s,n,i,a,y){"use strict";let c=function(r){function t(e){var t;return(t=r.call(this,e)||this).contains=!0,t.dynamicLayerInfos=null,t.gdbVersion=null,t.geometryPrecision=null,t.layerDefinitions=null,t.layerIds=null,t.maxAllowableOffset=null,t.outSpatialReference=null,t.returnGeometry=!1,t.searchFields=null,t.searchText=null,t}return e._inheritsLoose(t,r),t}(o.JSONSupport);r.__decorate([p.property({type:Boolean,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"contains",void 0),r.__decorate([p.property({type:[Object],json:{read:{source:"dynamicLayers"},write:{target:"dynamicLayers"}}})],c.prototype,"dynamicLayerInfos",void 0),r.__decorate([p.property({type:String,json:{write:!0}})],c.prototype,"gdbVersion",void 0),r.__decorate([p.property({type:Number,json:{write:!0}})],c.prototype,"geometryPrecision",void 0),r.__decorate([p.property({type:[Object],json:{write:!0}})],c.prototype,"layerDefinitions",void 0),r.__decorate([p.property({type:[Number],json:{write:!0}})],c.prototype,"layerIds",void 0),r.__decorate([p.property({type:Number,json:{write:!0}})],c.prototype,"maxAllowableOffset",void 0),r.__decorate([p.property({type:y,json:{read:{source:"outSR"},write:{target:"outSR"}}})],c.prototype,"outSpatialReference",void 0),r.__decorate([p.property({type:Boolean,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"returnGeometry",void 0),r.__decorate([p.property({type:[String],json:{write:!0}})],c.prototype,"searchFields",void 0),r.__decorate([p.property({type:String,json:{write:!0}})],c.prototype,"searchText",void 0),c=r.__decorate([a.subclass("esri.rest.support.FindParameters")],c),c.from=i.ensureType(c);return c}));