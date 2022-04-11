/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../../core/maybe","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../chunks/vec4","../../../../geometry/projection","../../../../geometry/projectionEllipsoid","../../../../geometry/support/frustum","../../../../chunks/sphere","../../../../layers/graphics/dehydratedFeatures","../graphics/elevationAlignmentUtils","../graphics/ElevationContext","../graphics/featureExpressionInfoUtils","./I3SNode","./I3SUtil","../../support/orientedBoundingBox"],(function(t,e,i,s,n,r,a,o,c,h,u,l,p,m,d){"use strict";const _=1e5;return function(){function g(t,e,s,n,r,o,h,u={}){this._indexSR=t,this._renderCoordsHelper=e,this.clippingArea=r,this._elevationProvider=o,this._options=u,this._frustum=a.create(),this._useFrustumCulling=!1,this._poi=i.create(),this.minDistance=1/0,this.maxDistance=0,this.maxLodLevel=2,this._tmp1=i.create(),this._tmp2=i.create(),this._tmp3=i.create(),this._tmp0=i.create(),this._screenspaceErrorBias=u.screenspaceErrorBias||1,this._progressiveLoadFactor=u.progressiveLoadFactor||1,this.updateCamera(s,n),this.engineSR=this._renderCoordsHelper.spatialReference,this.updateElevationInfo(h),this._tmpPoint=c.makeDehydratedPoint(0,0,0,t)}var f=g.prototype;return f.updateElevationInfo=function(t){null!=t?(this._elevationContext=u.ElevationContext.fromElevationInfo(t),this._elevationContext.updateFeatureExpressionInfoContext(l.createContextWithoutExpressionSupport(l.extractExpressionInfo(t,!1)))):this._elevationContext=null},f.updateCamera=function(t,e){this._useFrustumCulling=e,e&&a.fromMatrix(t.viewMatrix,t.projectionMatrix,this._frustum),this._screenSizeFactor=1/(t.perScreenPixelRatio/2),this._camPos=t.eye,this.minDistance=1/0,this.maxDistance=0},f.setPointOfInterest=function(t){this._poi=t},f.updateScreenSpaceErrorBias=function(t){const e=this._screenspaceErrorBias;return this._screenspaceErrorBias=t,e},f.updateClippingArea=function(t){this.clippingArea=t},f.getRenderMbs=function(t){const e=t.renderMbs;return e[3]<0&&(s.copy(e,t.mbs),this._elevationContext&&e[3]<_&&(this._tmpPoint.x=e[0],this._tmpPoint.y=e[1],this._tmpPoint.z=e[2],e[2]=h.evaluateElevationAlignmentAtPoint(this._tmpPoint,this._elevationProvider,this._elevationContext,this._renderCoordsHelper)),n.projectBoundingSphere(e,this._indexSR,e,this.engineSR)),e},f.getVisibilityObb=function(e){if(t.isSome(e.visibilityObb))return e.visibilityObb;const i=e.serviceObb;return t.isNone(i)||i.halfSize[0]<0?void 0:(e.serviceObbInRenderSR=this._computeRenderObb(i,e.serviceObbInRenderSR,e.mbs[3]),e.serviceObbInRenderSR)},f._computeRenderObb=function(e,i,s){if(t.isNone(i)&&(i=d.create()),i.halfSize[0]<0){let t=0;this._elevationContext&&s<_&&(this._tmpPoint.x=e.center[0],this._tmpPoint.y=e.center[1],this._tmpPoint.z=e.center[2],t=h.evaluateElevationAlignmentAtPoint(this._tmpPoint,this._elevationProvider,this._elevationContext,this._renderCoordsHelper)-e.center[2]),m.transformObb(e,this._indexSR,i,this.engineSR,t)}return i},f.isNodeVisible=function(e){const i=this.getRenderMbs(e);if(!this._isMBSinClippingArea(i))return!1;if(!this._useFrustumCulling)return!0;const s=this.getVisibilityObb(e);return t.isSome(s)?d.isVisible(s,this._frustum):a.intersectsSphere(this._frustum,o.wrap(i))},f.isGeometryVisible=function(e){if(!this._useFrustumCulling)return!0;const i=e.geometryObb;return t.isSome(i)?d.isVisible(i,this._frustum):this.isNodeVisible(e)},f._isMBSinClippingArea=function(e){return!!t.isNone(this.clippingArea)||m.intersectBoundingRectWithMbs(this.clippingArea,e)!==m.MbsIntersectResult.OUTSIDE},f._screenSpaceDiameterMbs=function(t,i){const s=this.getRenderMbs(t),n=Math.sqrt(e.squaredDistance(s,this._camPos)),r=n-s[3];return this._updateMinMaxDistance(n),r<0?.5*Number.MAX_VALUE:i/r*this._screenSizeFactor},f.calcCameraDistance=function(t){return this.calcCameraDistanceToCenter(t)-this.getRenderMbs(t)[3]},f.calcCameraDistanceToCenter=function(t){const i=this.getRenderMbs(t),s=e.distance(i,this._camPos);return this._updateMinMaxDistance(s),s},f.calcAngleDependentLoD=function(t){const i=this.getRenderMbs(t),s=i[3],n=(Math.abs(i[0]*(i[0]-this._camPos[0])+i[1]*(i[1]-this._camPos[1])+i[2]*(i[2]-this._camPos[2]))/e.length(i)+s)/e.distance(i,this._camPos);return Math.min(1,n)},f.hasLOD=function(t){return t.lodMetric!==p.LodMetric.None},f._getDistancePlanarMode=function(t,e){const i=t[0]-e[0],s=t[1]-e[1],n=t[2]-e[2],r=i*i+s*s,a=e[3];if(r<=a*a)return Math.abs(n);const o=Math.sqrt(r)-a;return Math.sqrt(n*n+o*o)},f._getDistanceGlobeMode=function(t,i){const s=e.length(i),n=e.length(t)-s;e.scale(this._tmp0,t,e.dot(t,i)/e.squaredLength(t));const r=e.squaredDistance(i,this._tmp0),a=i[3];if(r<=a*a)return Math.abs(n);{const r=e.scale(this._tmp0,i,1/s),o=s,c=a*a/2/o,h=e.scale(this._tmp1,r,o-c),u=t,l=e.subtract(this._tmp2,u,h),p=e.subtract(this._tmp2,l,e.scale(this._tmp3,r,e.dot(r,l))),m=e.add(this._tmp2,h,e.scale(this._tmp2,p,a/e.length(p)));let d=e.distance(u,m);if(n>=2e5){const t=e.subtract(this._tmp1,u,m);let i=e.dot(t,r)/e.length(t);i<.08&&(i=1e-4),d/=i}return d}},f._getDistance=function(t,e){return this.engineSR===r.getSphericalPCPF(this.engineSR)?this._getDistanceGlobeMode(t,e):this._getDistancePlanarMode(t,e)},f._updateMinMaxDistance=function(t){t>0?(this.minDistance=Math.min(this.minDistance,t),this.maxDistance=Math.max(this.maxDistance,t)):(this.minDistance=0,this.maxDistance=Math.max(this.maxDistance,-t))},f.getLodLevel=function(t){if(t.lodMetric===p.LodMetric.None)return 0;if(0===t.childCount)return this.maxLodLevel;if(this._useFrustumCulling&&this._progressiveLoadFactor<1){const e=this._progressiveLoadFactor*this._screenspaceErrorBias,i=this._screenspaceErrorBias;return this.evaluateLODmetric(t,e)?this.evaluateLODmetric(t,i)?2:1:0}return this.evaluateLODmetric(t,this._screenspaceErrorBias)?this.maxLodLevel:0},f.evaluateLODmetric=function(t,e){switch(t.lodMetric){case p.LodMetric.ScreenSpaceRelative:{const i=this.getRenderMbs(t),s=this._getDistance(this._camPos,i),n=2*s/this._screenSizeFactor,r=s+i[3];return this._updateMinMaxDistance(r),t.maxError*e<=n}case p.LodMetric.MaxScreenThreshold:{let i=this._screenSpaceDiameterMbs(t,t.mbs[3]*e);return this._options.angleDependentLoD&&(i*=this.calcAngleDependentLoD(t)),i<t.maxError}case p.LodMetric.RemovedFeatureDiameter:return this._screenSpaceDiameterMbs(t,t.maxError)*e<10;case p.LodMetric.DistanceRangeFromDefaultCamera:return this.calcCameraDistance(t)>t.maxError*e}return!1},f.distToPOI=function(t){const i=this.getRenderMbs(t);return e.distance(i,this._poi)-i[3]},f.distCameraToPOI=function(){return e.distance(this._camPos,this._poi)},g}()}));
