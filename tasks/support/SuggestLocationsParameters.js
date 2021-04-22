/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport","../../geometry/SpatialReference","../../geometry/Point","../../geometry/Extent","../../geometry","./commonProperties"],(function(e,t,r,o,p,n,s,i,c,a,u,l,y,d,g,_){"use strict";let S=function(t){function r(e){var r;return(r=t.call(this,e)||this).apiKey=null,r.categories=null,r.countryCode=null,r.location=null,r.maxSuggestions=null,r.outSpatialReference=null,r.searchExtent=null,r.text=null,r}return e._inheritsLoose(r,t),r}(u.JSONSupport);return t.__decorate([n.property(_.apiKey)],S.prototype,"apiKey",void 0),t.__decorate([n.property({type:[String],json:{read:{source:"category",reader:e=>e?e.split(","):null},write:{target:"category",writer:(e,t)=>{t.category=e?e.join(","):null}}}})],S.prototype,"categories",void 0),t.__decorate([n.property({type:String,json:{write:!0}})],S.prototype,"countryCode",void 0),t.__decorate([n.property({type:y,json:{write:{writer:(e,t)=>{t.location=e?e.clone().normalize():null}}}})],S.prototype,"location",void 0),t.__decorate([n.property({type:Number,json:{write:!0}})],S.prototype,"maxSuggestions",void 0),t.__decorate([n.property({type:l,json:{read:{source:"outSR"},write:{target:"outSR"}}})],S.prototype,"outSpatialReference",void 0),t.__decorate([n.property({type:d,json:{write:{writer:(e,t)=>{const r=e?e.shiftCentralMeridian():null;t.searchExtent=JSON.stringify(r)}}}})],S.prototype,"searchExtent",void 0),t.__decorate([n.property({type:String,json:{write:!0}})],S.prototype,"text",void 0),S=t.__decorate([s.subclass("esri.tasks.support.SuggestLocationsParameters")],S),S.from=p.ensureType(S),S}));