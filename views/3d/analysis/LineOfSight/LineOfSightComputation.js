/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/accessorSupport/decorators/property","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/subclass","../../../../chunks/vec3f64"],(function(t,e,o,r,i,n,a,s,u,c){"use strict";t.LineOfSightComputation=function(t){function o(e){var o;return(o=t.call(this,e)||this).elevationAlignedTargetLocation=null,o.inputPoints={isValid:!1,observer:c.create(),observerSurfaceNormal:null,target:c.create(),targetSurfaceNormal:null,observerAdjusted:c.create(),targetAdjusted:c.create()},o.computationResult={start:c.create(),end:c.create(),intersection:c.create(),isValid:!1,isTargetVisible:!1},o.result=null,o}e._inheritsLoose(o,t);var r=o.prototype;return r.notifyResultChanged=function(){this.notifyChange("computationResult")},r.notifyInputPointsChanged=function(){this.notifyChange("inputPoints")},o}(r),o.__decorate([i.property()],t.LineOfSightComputation.prototype,"target",void 0),o.__decorate([i.property()],t.LineOfSightComputation.prototype,"elevationAlignedTargetLocation",void 0),o.__decorate([i.property()],t.LineOfSightComputation.prototype,"inputPoints",void 0),o.__decorate([i.property()],t.LineOfSightComputation.prototype,"computationResult",void 0),o.__decorate([i.property()],t.LineOfSightComputation.prototype,"result",void 0),t.LineOfSightComputation=o.__decorate([u.subclass("esri.views.3d.analysis.LineOfSight.LineOfSightComputation")],t.LineOfSightComputation),Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
