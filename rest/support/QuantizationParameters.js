/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../core/jsonMap","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../../geometry/Extent"],(function(e,t,r,o,i,n,p,s,c,a){"use strict";var u;const l=new o.JSONMap({upperLeft:"upper-left",lowerLeft:"lower-left"});let d=u=function(t){function r(e){var r;return(r=t.call(this,e)||this).extent=null,r.mode="view",r.originPosition="upper-left",r.tolerance=1,r}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new u(n.clone({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))},r}(i.JSONSupport);t.__decorate([p.property({type:a,json:{write:{overridePolicy(){return{enabled:"view"===this.mode}}}}})],d.prototype,"extent",void 0),t.__decorate([p.property({type:["view","edit"],json:{write:!0}})],d.prototype,"mode",void 0),t.__decorate([p.property({type:String,json:{read:l.read,write:l.write}})],d.prototype,"originPosition",void 0),t.__decorate([p.property({type:Number,json:{write:{overridePolicy(){return{enabled:"view"===this.mode}}}}})],d.prototype,"tolerance",void 0),d=u=t.__decorate([c.subclass("esri.rest.support.QuantizationParameters")],d);return d}));
