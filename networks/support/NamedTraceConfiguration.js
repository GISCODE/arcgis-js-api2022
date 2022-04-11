/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/MultiOriginJSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","./TraceConfiguration","./typeUtils","./UNTraceConfiguration"],(function(e,r,t,o,i,a,n,p,s,c,d,u){"use strict";let l=function(r){function t(e){var t;return(t=r.call(this,e)||this).globalId=null,t.title=null,t.traceConfiguration=null,t.creationDate=null,t.creator=null,t.description=null,t.minStartingPoints=null,t.resultTypes=[],t.tags=[],t.traceType=null,t}return e._inheritsLoose(t,r),t.prototype.readTraceConfiguration=function(e,r){return void 0!==e.tierName?u.fromJSON(e):c.fromJSON(e)},t}(t.MultiOriginJSONSupport);r.__decorate([o.property({type:String,nonNullable:!0,json:{origins:{"web-map":{read:{source:"id"},write:{target:"id",isRequired:!0}},service:{read:{source:"globalId"}}},read:!1}})],l.prototype,"globalId",void 0),r.__decorate([o.property({type:String,nonNullable:!0,json:{origins:{"web-map":{read:{source:"title"},write:{target:"title",isRequired:!0}},service:{read:{source:"name"}}},read:!1}})],l.prototype,"title",void 0),r.__decorate([o.property({type:c,json:{origins:{service:{read:!0}},read:!1}})],l.prototype,"traceConfiguration",void 0),r.__decorate([p.reader("service","traceConfiguration")],l.prototype,"readTraceConfiguration",null),r.__decorate([o.property({type:Date,json:{origins:{service:{read:!0}},read:!1}})],l.prototype,"creationDate",void 0),r.__decorate([o.property({type:String,json:{origins:{service:{read:!0}},read:!1}})],l.prototype,"creator",void 0),r.__decorate([o.property({type:String,json:{origins:{service:{read:!0}},read:!1}})],l.prototype,"description",void 0),r.__decorate([o.property({type:["none","one","many"],json:{origins:{service:{read:{source:"minNumStartingPoints"}}},read:!1}})],l.prototype,"minStartingPoints",void 0),r.__decorate([o.property({type:[Object],json:{origins:{service:{read:!0}},read:!1}})],l.prototype,"resultTypes",void 0),r.__decorate([o.property({type:[String],json:{origins:{service:{read:!0}},read:!1}})],l.prototype,"tags",void 0),r.__decorate([o.property({type:d.traceTypeKebabDict.apiValues,json:{type:d.traceTypeKebabDict.jsonValues,origins:{service:{read:d.traceTypeKebabDict.read}},read:!1}})],l.prototype,"traceType",void 0),l=r.__decorate([s.subclass("esri.networks.support.NamedTraceConfiguration")],l);return l}));