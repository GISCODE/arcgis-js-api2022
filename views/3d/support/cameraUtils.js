/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../Camera","../../../core/Logger","../../../core/mathUtils","../../../core/maybe","../../../core/promiseUtils","../../../chunks/vec3","../../../chunks/vec3f64","../../../geometry/Point","../../../geometry/projection","../../../geometry/projectionEllipsoid","../../../geometry/SpatialReference","../../../geometry/support/scaleUtils","../../ViewingMode","../camera/intersectionUtils","../../../chunks/cameraUtilsPlanar","../../../chunks/cameraUtilsSpherical","./earthUtils","./ElevationProvider","./mathUtils","../../support/spatialReferenceSupport"],(function(e,t,n,r,o,i,a,c,l,s,u,f,d,p,m,v,g,h,T,y,M,S){"use strict";const R=r.getLogger("esri.views.3d.support.cameraUtils"),x=39.37,w=96,C=1,P=8,j=5,z=1,V=l.create(),O=l.create(),b={heading:0,tilt:0},U=new s,A=new M.Cyclical(-20037508.342788905,20037508.342788905),D=new M.Cyclical(-180,180);var E;function H(e){return e.spatialReference||d.WGS84}function N(e){return"global"===e.viewingMode?h.cameraUtilsSpherical:g.cameraUtilsPlanar}function G(e,t,n,r,o){return N(e).headingTiltToDirectionUp(t,n,r,o)}function L(e,t){if(i.isNone(t))return null;const n=e.renderSpatialReference,r=N(e).headingTiltToDirectionUp,a=l.create();if(!u.projectPointToVector(t.position,a,n))return null;const s=r(a,t.heading,t.tilt);c.scale(s.direction,s.direction,e.state.camera.distance),c.add(s.direction,s.direction,a);const f=v.cameraOnContentAlongViewDirection(e,a,s.direction,s.up);return f.fov=o.deg2rad(t.fov),f}e.OrientationMode=void 0,(E=e.OrientationMode||(e.OrientationMode={}))[E.LOCKED=0]="LOCKED",E[E.ADJUST=1]="ADJUST";const k=l.create();function I(e,t,r){const a=e.renderSpatialReference,c=W(e,t.eye,t.viewForward,t.up,b);let l=H(e);return u.projectVectorToVector(t.eye,a,k,l)||(l=d.WGS84,u.projectVectorToVector(t.eye,a,k,l)),i.isNone(r)?new n(new s(k,l),c.heading,c.tilt,o.rad2deg(t.fov)):(r.position.x=k[0],r.position.y=k[1],r.position.z=k[2],r.position.spatialReference=l,r.heading=c.heading,r.tilt=c.tilt,r.fov=o.rad2deg(t.fov),r)}function F(e,t,n){const r=e.state.camera,i=r.width/2/r.pixelRatio;e.renderCoordsHelper.viewingMode===m.ViewingMode.Global&&null!=n&&(t*=Math.cos(o.deg2rad(n))),t/=e.renderCoordsHelper.unitInMeters;return i/(w*x/t)/Math.tan(r.fovX/2)}function q(e,t,n){const r=e.state.camera,i=t*Math.tan(r.fovX/2),a=r.width/2/r.pixelRatio;let c=w*x/(a/i);return e.renderCoordsHelper.viewingMode===m.ViewingMode.Global&&(c/=Math.cos(o.deg2rad(n))),c*=e.renderCoordsHelper.unitInMeters,c}function J(e,t,n,r,o,i){return _(e,t,F(e,n,t.latitude),r,o,i)}function _(e,t,n,r,o,a){if(ge(a)){const c=new ve(a.signal);return $(e,r.heading,r.tilt,t,n,o,c),void c.resolver.promise.then((t=>{const n=ue(e,t,r.fov);if(!i.isNone(n))return a.resolver.resolve(n);a.resolver.reject()}),(e=>a.resolver.reject(e)))}const c=$(e,r.heading,r.tilt,t,n,o);return ue(e,c,r.fov,a)}function W(e,t,n,r,o){return N(e).directionToHeadingTilt(t,n,r,o)}function X(e,t){return!!(e.basemapTerrain&&e.renderCoordsHelper.fromRenderCoords(t,U,e.spatialReference)&&i.unwrapOr(y.getElevationAtPoint(e.elevationProvider,U),0)>U.z-z)}function K(e,t,n){return Y.apply(this,arguments)}function Y(){return(Y=t._asyncToGenerator((function*(e,t,n){if(!e.renderCoordsHelper.fromRenderCoords(t,U,e.spatialReference))return!1;const r=yield e.elevationProvider.queryElevation(U.x,U.y,U.z,U.spatialReference,"ground",n);return i.unwrapOr(r,0)>U.z-z}))).apply(this,arguments)}function Z(e,t,n){return B.apply(this,arguments)}function B(){return(B=t._asyncToGenerator((function*(e,t,n){const r=l.create();if(t)if(t instanceof s){if(u.projectPointToVector(t,r,e.renderSpatialReference),null==t.z&&null!=e.basemapTerrain){const o=yield e.elevationProvider.queryElevation(t.x,t.y,t.z,t.spatialReference,"ground",n);return i.isSome(o)&&e.renderCoordsHelper.setAltitude(r,o),r}}else c.copy(r,t);else c.copy(r,e.state.camera.center);return r}))).apply(this,arguments)}function Q(e,t){const n=l.create();if(t&&t instanceof s){if(u.projectPointToVector(t,n,e.renderSpatialReference),null==t.z&&null!=e.basemapTerrain){const r=y.getElevationAtPoint(e.elevationProvider,t);i.isSome(r)&&e.renderCoordsHelper.setAltitude(n,r)}}else t?c.copy(n,t):c.copy(n,e.state.camera.center);return n}function $(e,t,n,r,o,i,a){const c=r&&r instanceof s?r:null;if(ge(a))return Z(e,r,a.signal).then((r=>{ee(e,t,n,c,r,o,i,a)}),(e=>a.resolver.reject(e))),null;const l=Q(e,r);return ee(e,t,n,c,l,o,i,a)}function ee(t,n,r,o,a,c,s,f){if(i.isNone(o)){const e=t.renderSpatialReference;if(o=u.projectVectorToPoint(a,e,H(t)),i.isNone(o))return null}c=Math.max(c,t.state.constraints.minimumPoiDistance);const d=oe(t,n,r,a,c,s),p=(0,N(t).eyeForCenterWithHeadingTilt)(a,c,d.heading,d.tilt);if(s===e.OrientationMode.ADJUST&&"global"===t.viewingMode&&r>0){const i=()=>{const i=le(t,a,c,ce(t,c,r,a));return s=r-i<1?e.OrientationMode.LOCKED:e.OrientationMode.ADJUST,ee(t,n,i,o,a,c,s,f)},u=t.map.ground.navigationConstraint;if(!u||"stay-above"===u.type){if(X(t,p.eye))return i();if(ge(f))return K(t,p.eye,f.signal).then((e=>e?i():(f.resolver.resolve({eye:p.eye,up:p.up,center:l.clone(a),heading:p.heading,tilt:p.tilt}),null))),null}}const m=!f||ge(f)?{center:l.create(),eye:l.create(),up:l.create(),tilt:0,heading:0}:f;return m.eye=p.eye,m.up=p.up,m.center=l.clone(a),m.heading=p.heading,m.tilt=p.tilt,ge(f)&&f.resolver.resolve(m),m}function te(e,t,n,r,o,a=null){const c=null!=t.zmax&&null!=t.zmin;let l,d,p;if(e.state.isGlobal){if(!S.isSpatialReferenceSupported(t.spatialReference,m.ViewingMode.Global))return ge(a)&&a.resolver.reject(),null;const e=new s(t.xmin,t.ymin,t.spatialReference),n=new s(t.xmax,t.ymax,t.spatialReference),r=t.spatialReference.isGeographic?D:A;l=new s({x:r.center(e.x,n.x),y:(n.y+e.y)/2,z:c?(t.zmax+t.zmin)/2:null,spatialReference:t.spatialReference});const o=f.getReferenceEllipsoid(t.spatialReference),i=T.getGreatCircleSpanAt(l,e,n);d=i.lon,p=i.lat,r.diff(e.x,n.x)>r.range/2&&(d+=o.halfCircumference),d=Math.min(d,o.halfCircumference),p=Math.min(p,o.halfCircumference)}else{const n=i.unwrapOr(e.renderSpatialReference,t.spatialReference);n.equals(t.spatialReference)||(t=u.project(t,n)),d=t.xmax-t.xmin,p=t.ymax-t.ymin;const r=c?(t.zmax+t.zmin)/2:null;l=new s({x:t.xmin+.5*d,y:t.ymin+.5*p,z:r,spatialReference:n})}const v=c?t.zmax-t.zmin:0,g=e.state.camera,h=1/Math.tan(g.fovX/2),y=1/Math.tan(g.fovY/2),M=1/Math.tan(g.fov/2),R=Math.max(.5*d*h,.5*p*y,.5*v*M)/C;if(ge(a)){const t=new ve(a.signal);return $(e,n,r,l,R,o,t),void t.resolver.promise.then((t=>{const n=ue(e,t,e.camera.fov);if(!i.isNone(n))return a.resolver.resolve(n);a.resolver.reject()}),(e=>a.resolver.reject(e)))}const x=$(e,n,r,l,R,o);return ue(e,x,e.camera.fov,a)}function ne(e,t,n){const r=e.renderSpatialReference,o=u.projectVectorToPoint(n,r,H(e));if(i.isNone(o))return null;const a=Math.tan(t.fovX/2),l=Math.tan(t.fovY/2),s=c.dist(t.eye,n),f=2*s*a*C,d=2*s*l*C;return"global"===e.viewingMode?h.toExtent(e,o,f,d):g.toExtent(e,o,f,d)}function re(e,t,n){const r=e.pointsOfInterest.centerOnSurfaceFrequent.distance;if(Math.log(n/r)/Math.LN2>P)return!0;const o=e.renderSpatialReference,a=H(e),c=u.projectVectorToPoint(t,o,a),l=u.projectVectorToPoint(e.pointsOfInterest.centerOnSurfaceFrequent.renderLocation,o,a);if(i.isNone(c)||i.isNone(l))return!1;const s=Math.tan(.5*e.state.camera.fov)*r;return l.distance(c)/s>j}function oe(t,n,r,o,i,a){let c=0;return a===e.OrientationMode.ADJUST&&re(t,o,i)?(n=0,c=ae(t,i,r,o)):c=se(t,o,i,r),c=t.state.constraints.clampTilt(i,c),{heading:n,tilt:r=le(t,o,i,c)}}const ie=.7;function ae(e,t,n,r){const o=e.state.constraints.tilt(t);o.max=Math.min(o.max,.5*Math.PI);const i=o.min*(1-ie)+o.max*ie,a=se(e,r,t,n);return Math.min(a,i)}function ce(e,t,n,r){const o=e.state.constraints.tilt(t);let i=se(e,r,t,n);return i=Math.min(i,.5*Math.PI),o.min*(1-ie)+i*ie}function le(e,t,n,r){return N(e).lookAtTiltToEyeTilt(r,t,n)}function se(e,t,n,r){return N(e).eyeTiltToLookAtTilt(r,t,n)}function ue(e,t,r,o){if(i.isNone(t))return null;const a=e.renderSpatialReference,c=u.projectVectorToPoint(t.eye,a,H(e));return i.isNone(c)?null:i.isSome(o)?(o.position=c,o.heading=t.heading,o.tilt=t.tilt,o.fov=r,o):new n(c,t.heading,t.tilt,r)}function fe(e,t){var n;const r=null==(n=e.basemapTerrain)?void 0:n.tilingScheme;if(r)return r.levelAtScale(t);R.error("#scaleToZoom()","Cannot compute zoom from scale without a tiling scheme")}function de(e,t){var n;const r=null==(n=e.basemapTerrain)?void 0:n.tilingScheme;if(r)return r.scaleAtLevel(t);R.error("#zoomToScale()","Cannot compute scale from zoom without a tiling scheme")}function pe(e,t){return e.spatialReference?p.getResolutionForScale(t,e.spatialReference):void 0}function me(e,t,r){const o=e.renderSpatialReference;let i,a;t||(t=e.state.camera);const l=d.WGS84;return t instanceof n?(i=t.position.latitude,u.projectPointToVector(t.position,V,o),u.projectPointToVector(r,O,o),a=c.distance(V,O)):(u.projectVectorToVector(t.center,o,O,l),i=O[1],a=t.distance),q(e,a,i)}let ve=function(e){this.signal=e,this.resolver=a.createResolver()};function ge(e){return e&&"resolver"in e}e.AsyncContext=ve,e.computeScale=me,e.directionToHeadingTilt=W,e.distanceToScale=q,e.externalToInternal=L,e.fromCenterDistance=_,e.fromCenterScale=J,e.fromExtent=te,e.getObserverForPointAtDistance=$,e.headingTiltToDirectionUp=G,e.internalToExternal=I,e.observerToCamera=ue,e.scaleToDistance=F,e.scaleToResolution=pe,e.scaleToZoom=fe,e.toExtent=ne,e.zoomToScale=de,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
