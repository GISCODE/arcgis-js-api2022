/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/arrayUtils","../../../../core/lang","../../../../core/maybe","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/subclass","../../../../geometry/support/ray"],(function(e,t,o,r,n,i,s,c,p,l,a){"use strict";var u;e.LineOfSightIntersectionResult=u=function(e){function o(t){return e.call(this,t)||this}t._inheritsLoose(o,e);var r=o.prototype;return r.clone=function(){return new u({type:this.type,id:i.clone(this.id),point:i.clone(this.point),normal:i.clone(this.normal),ray:i.clone(this.ray)})},r.equals=function(e){return this.type===e.type&&this.id===e.id&&s.equalsMaybe(this.point,e.point)&&n.equals(this.normal,e.normal)&&a.equals(this.ray,e.ray)},o}(r),o.__decorate([c.property()],e.LineOfSightIntersectionResult.prototype,"type",void 0),o.__decorate([c.property({constructOnly:!0})],e.LineOfSightIntersectionResult.prototype,"id",void 0),o.__decorate([c.property({constructOnly:!0})],e.LineOfSightIntersectionResult.prototype,"point",void 0),o.__decorate([c.property({constructOnly:!0})],e.LineOfSightIntersectionResult.prototype,"normal",void 0),o.__decorate([c.property({constructOnly:!0})],e.LineOfSightIntersectionResult.prototype,"ray",void 0),e.LineOfSightIntersectionResult=u=o.__decorate([l.subclass("esri.views.3d.analysis.LineOfSight.LineOfSightIntersectionResult")],e.LineOfSightIntersectionResult),Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
