/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/mathUtils","../../../../core/maybe","../../../../core/accessorSupport/decorators/property","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/subclass","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../geometry/Point","../../../../geometry/projection","../../../../geometry/projectionEllipsoid","../../../../geometry/support/aaBoundingRect","../debugFlags","../PropertiesPool","./PointOfInterest"],(function(e,t,r,a,i,n,o,s,c,u,l,d,p,f,h,_,y,S,g){"use strict";const m=Array;e.CenterOnSurface=function(e){function r(r){var a;return(a=e.call(this,r)||this)._propertiesPool=new S.PropertiesPool({location:p,renderLocation:m},t._assertThisInitialized(a)),a._currentSurfaceAltitude=0,a._latestSurfaceAltitude=0,a.cameraName="camera",a.distance=0,a.renderLocation=d.create(),a.updating=!1,a}t._inheritsLoose(r,e);var n=r.prototype;return n.initialize=function(){this._frameWorker=this.scheduler.registerTask(this.task,this),this.runTask()},n.destroy=function(){this._frameWorker=i.removeMaybe(this._frameWorker),this._propertiesPool=i.destroyMaybe(this._propertiesPool)},n.updateRenderLocation=function(){this.updating=!0,this._updateRenderLocation()},n.runTask=function(){this._latestSurfaceAltitude=this.estimateSurfaceAltitudeAtCenter(),this._updateRenderLocation(),this.updating=!1},n._updateRenderLocation=function(){const e=O;let t=this._calculateSurfaceIntersection(this._currentSurfaceAltitude,e);const r=this._currentSurfaceAltitude!==this._latestSurfaceAltitude;!t&&r&&(t=this._calculateSurfaceIntersection(this._latestSurfaceAltitude,e),t&&(this._currentSurfaceAltitude=this._latestSurfaceAltitude));const a=C;t&&this._latestSurfaceAltitudeChangesDistanceSignificantly(e,a)&&(l.copy(e,a),this._currentSurfaceAltitude=this._latestSurfaceAltitude),t?this.distance=l.distance(this._camera.eye,e):(l.scale(e,this._camera.viewForward,this._get("distance")),l.add(e,e,this._camera.eye)),l.exactEquals(this._get("renderLocation"),e)||this._set("renderLocation",l.copy(this._propertiesPool.get("renderLocation"),e))},n._calculateSurfaceIntersection=function(e,t){const r=this._camera;if(!this.renderCoordsHelper.intersectManifold(r.ray,e,t))return!1;if(this.state.isGlobal){const a=h.getReferenceEllipsoid(this.renderCoordsHelper.spatialReference).radius,i=a+e,n=l.squaredLength(r.eye),o=n<i*i,s=l.distance(r.eye,t);if(o&&s>a/4){const e=i-Math.sqrt(n);return l.scale(t,r.viewForward,e),l.add(t,t,r.eye),!0}}else{const e=this.surface.ready?this.surface.extent:null;i.isSome(e)&&f.projectBoundingRect(e,this.surface.spatialReference,v,this.renderCoordsHelper.spatialReference)&&(t[0]=a.clamp(t[0],v[0],v[2]),t[1]=a.clamp(t[1],v[1],v[3]))}return!0},n._latestSurfaceAltitudeChangesDistanceSignificantly=function(e,t){if(this._latestSurfaceAltitude===this._currentSurfaceAltitude||null==e)return!1;if(this._calculateSurfaceIntersection(this._latestSurfaceAltitude,t)){if(y.TESTS_DISABLE_OPTIMIZATIONS)return!0;const r=this._camera.eye,a=l.distance(r,e),i=l.distance(r,t);if(Math.abs(i-a)/a>A)return!0}return!1},t._createClass(r,[{key:"_camera",get:function(){return this.state[this.cameraName]}},{key:"location",get:function(){const e=this._propertiesPool.get("location");return this.renderCoordsHelper.fromRenderCoords(this.renderLocation,e,this.state.spatialReference),e}},{key:"estimatedSurfaceAltitude",get:function(){return this._latestSurfaceAltitude}},{key:"running",get:function(){return this.updating}}]),r}(g.PointOfInterest),r.__decorate([n.property({constructOnly:!0})],e.CenterOnSurface.prototype,"scheduler",void 0),r.__decorate([n.property({constructOnly:!0})],e.CenterOnSurface.prototype,"task",void 0),r.__decorate([n.property({constructOnly:!0})],e.CenterOnSurface.prototype,"cameraName",void 0),r.__decorate([n.property()],e.CenterOnSurface.prototype,"distance",void 0),r.__decorate([n.property({constructOnly:!0})],e.CenterOnSurface.prototype,"estimateSurfaceAltitudeAtCenter",void 0),r.__decorate([n.property({readOnly:!0})],e.CenterOnSurface.prototype,"location",null),r.__decorate([n.property({readOnly:!0})],e.CenterOnSurface.prototype,"renderLocation",void 0),r.__decorate([n.property()],e.CenterOnSurface.prototype,"updating",void 0),e.CenterOnSurface=r.__decorate([u.subclass("esri.views.3d.support.CenterOnSurface")],e.CenterOnSurface);const A=.05,O=d.create(),C=d.create(),v=_.create(),k=e.CenterOnSurface;e.default=k,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
