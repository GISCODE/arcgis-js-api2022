/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,t,r,o,s,c,n,p){"use strict";var u;let l=u=function(t){function r(e){var r;return(r=t.call(this,e)||this).doNotLocateOnRestrictedElements=null,r.url=null,r}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new u({doNotLocateOnRestrictedElements:this.doNotLocateOnRestrictedElements,url:this.url})},r}(r.JSONSupport);t.__decorate([o.property({type:Boolean,json:{write:!0}})],l.prototype,"doNotLocateOnRestrictedElements",void 0),t.__decorate([o.property({type:String,json:{write:!0}})],l.prototype,"url",void 0),l=u=t.__decorate([p.subclass("esri.rest.support.NetworkUrl")],l);return l}));
