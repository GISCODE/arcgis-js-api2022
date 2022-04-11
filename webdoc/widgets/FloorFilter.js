/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,t,r,o,i,n,s){"use strict";var l;let p=l=function(t){function r(e){var r;return(r=t.call(this,e)||this).enabled=!1,r.longNames=!1,r.minimized=!1,r.pinnedLevels=!1,r.site=null,r.facility=null,r.level=null,r}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new l(o.clone({enabled:this.enabled,longNames:this.longNames,minimized:this.minimized,pinnedLevels:this.pinnedLevels,site:this.site,facility:this.facility,level:this.level}))},r}(r.JSONSupport);t.__decorate([i.property({type:Boolean,json:{read:{source:"enabled"},write:{target:"enabled"}}})],p.prototype,"enabled",void 0),t.__decorate([i.property({type:Boolean,json:{read:{source:"longNames"},write:{target:"longNames"}}})],p.prototype,"longNames",void 0),t.__decorate([i.property({type:Boolean,json:{read:{source:"minimized"},write:{target:"minimized"}}})],p.prototype,"minimized",void 0),t.__decorate([i.property({type:Boolean,json:{read:{source:"pinnedLevels"},write:{target:"pinnedLevels"}}})],p.prototype,"pinnedLevels",void 0),t.__decorate([i.property({type:String,json:{read:{source:"site"},write:{target:"site"}}})],p.prototype,"site",void 0),t.__decorate([i.property({type:String,json:{read:{source:"facility"},write:{target:"facility"}}})],p.prototype,"facility",void 0),t.__decorate([i.property({type:String,json:{read:{source:"level"},write:{target:"level"}}})],p.prototype,"level",void 0),p=l=t.__decorate([s.subclass("esri.webdoc.widgets.FloorFilter")],p);return p}));