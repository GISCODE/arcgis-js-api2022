/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass","./widgets/FloorFilter","./widgets/Range","./widgets/TimeSlider"],(function(e,r,t,o,i,s,l,n,p,c){"use strict";var u;let a=u=function(r){function t(e){var t;return(t=r.call(this,e)||this).range=null,t.timeSlider=null,t.floorFilter=null,t}return e._inheritsLoose(t,r),t.prototype.clone=function(){return new u(o.clone({range:this.range,timeSlider:this.timeSlider,floorFilter:this.floorFilter}))},t}(t.JSONSupport);r.__decorate([i.property({type:p,json:{write:!0}})],a.prototype,"range",void 0),r.__decorate([i.property({type:c,json:{write:!0}})],a.prototype,"timeSlider",void 0),r.__decorate([i.property({type:n,json:{write:!0}})],a.prototype,"floorFilter",void 0),a=u=r.__decorate([l.subclass("esri.webdoc.Widgets")],a);return a}));
