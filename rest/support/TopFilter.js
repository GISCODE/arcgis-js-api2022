/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(r,o,e,t,s,p,i,u){"use strict";var c;let n=c=function(o){function e(r){var e;return(e=o.call(this,r)||this).groupByFields=void 0,e.topCount=void 0,e.orderByFields=void 0,e}return r._inheritsLoose(e,o),e.prototype.clone=function(){return new c({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})},e}(e.JSONSupport);o.__decorate([t.property({type:[String],json:{write:!0}})],n.prototype,"groupByFields",void 0),o.__decorate([t.property({type:Number,json:{write:!0}})],n.prototype,"topCount",void 0),o.__decorate([t.property({type:[String],json:{write:!0}})],n.prototype,"orderByFields",void 0),n=c=o.__decorate([u.subclass("esri.rest.support.TopFilter")],n);return n}));
