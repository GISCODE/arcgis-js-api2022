/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./AuthoringInfoClassBreakInfo"],(function(o,e,r,t,n,i,s,l,a){"use strict";var p;o.AuthoringInfoFieldInfo=p=function(o){function r(e){var r;return(r=o.call(this,e)||this).field="",r.normalizationField="",r.label="",r.classBreakInfos=[],r}return e._inheritsLoose(r,o),r.prototype.clone=function(){return new p({field:this.field,normalizationField:this.normalizationField,label:this.label,classBreakInfos:n.clone(this.classBreakInfos)})},r}(t.JSONSupport),r.__decorate([i.property({type:String,json:{write:!0}})],o.AuthoringInfoFieldInfo.prototype,"field",void 0),r.__decorate([i.property({type:String,json:{write:!0}})],o.AuthoringInfoFieldInfo.prototype,"normalizationField",void 0),r.__decorate([i.property({type:String,json:{write:!0}})],o.AuthoringInfoFieldInfo.prototype,"label",void 0),r.__decorate([i.property({type:[a.default],json:{write:!0}})],o.AuthoringInfoFieldInfo.prototype,"classBreakInfos",void 0),o.AuthoringInfoFieldInfo=p=r.__decorate([l.subclass("esri.renderers.support.AuthoringInfoFieldInfo")],o.AuthoringInfoFieldInfo);const u=o.AuthoringInfoFieldInfo;o.default=u,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
