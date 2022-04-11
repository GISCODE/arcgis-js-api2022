/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Clonable","../../core/JSONSupport","../../core/unitUtils","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,a,p,n,i,l){"use strict";let c=function(r){function o(e){var o;return(o=r.call(this,e)||this).shapeAreaField=null,o.shapeLengthField=null,o.units=null,o}return e._inheritsLoose(o,r),o}(o.ClonableMixin(t.JSONSupport));r.__decorate([a.property({type:String,json:{read:{source:"shapeAreaFieldName"}}})],c.prototype,"shapeAreaField",void 0),r.__decorate([a.property({type:String,json:{read:{source:"shapeLengthFieldName"}}})],c.prototype,"shapeLengthField",void 0),r.__decorate([a.property({type:String,json:{read:e=>s.areaUnitsJSONMap.read(e)||s.lengthUnitsJSONMap.read(e)}})],c.prototype,"units",void 0),c=r.__decorate([l.subclass("esri.layers.support.GeometryFieldsInfo")],c);return c}));
