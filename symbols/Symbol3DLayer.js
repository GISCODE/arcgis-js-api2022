/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/JSONSupport","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer"],(function(e,r,t,o,s,c,p,a,n){"use strict";let l=function(r){function t(e){var t;return(t=r.call(this,e)||this).enabled=!0,t.type=null,t}return e._inheritsLoose(t,r),t.prototype.writeEnabled=function(e,r,t){e||(r[t]=e)},t}(t.JSONSupport);r.__decorate([o.property({type:Boolean,json:{read:{source:"enable"},write:{target:"enable"}}})],l.prototype,"enabled",void 0),r.__decorate([n.writer("enabled")],l.prototype,"writeEnabled",null),r.__decorate([o.property({type:["icon","object","line","path","fill","water","extrude","text"],readOnly:!0})],l.prototype,"type",void 0),l=r.__decorate([a.subclass("esri.symbols.Symbol3DLayer")],l);return l}));
