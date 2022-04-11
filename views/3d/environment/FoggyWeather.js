/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/enumeration","../../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,n,s,c,p,u){"use strict";var a;let i=a=function(r){function o(e){var o;return(o=r.call(this,e)||this).type="foggy",o.fogStrength=.5,o}return e._inheritsLoose(o,r),o.prototype.clone=function(){return new a({fogStrength:this.fogStrength})},o}(o.JSONSupport);r.__decorate([p.enumeration({foggy:"foggy"})],i.prototype,"type",void 0),r.__decorate([t.property({type:Number,nonNullable:!0,range:{min:0,max:1}})],i.prototype,"fogStrength",void 0),i=a=r.__decorate([u.subclass("esri.views.3d.environment.FoggyWeather")],i);return i}));
