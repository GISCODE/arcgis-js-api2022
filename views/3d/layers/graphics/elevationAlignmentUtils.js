/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../core/compilerUtils","../../../../core/maybe","../../../../chunks/mat4","../../../../chunks/mat4f64","../../../../chunks/vec3f64","../../../../geometry/projection","../../../../layers/graphics/dehydratedFeatureUtils","./graphicUtils","../../support/ElevationProvider"],(function(e,t,n,o,r,i,a,l,s,u){"use strict";function c(e,t,n,o,r,i,l,s,u,c,f){const d=R[f.mode];let p,v,g=0;if(a.projectBuffer(e,t,n,o,u.spatialReference,r,s))return d.requiresAlignment(f)?(g=d.applyElevationAlignmentBuffer(o,r,i,l,s,u,c,f),p=i,v=l):(p=o,v=r),a.projectBuffer(p,u.spatialReference,v,i,c.spatialReference,l,s)?g:void 0}function f(e,o,r,i,a){const s=(l.isDehydratedPoint(e)?e.z:u.isSamplePosition(e)?e.array[e.offset+2]:e[2])||0;switch(r.mode){case"on-the-ground":{const t=n.unwrapOr(u.getElevationAtPoint(o,e,"ground"),0);return a.verticalDistanceToGround=0,a.sampledElevation=t,void(a.z=t)}case"relative-to-ground":{const t=n.unwrapOr(u.getElevationAtPoint(o,e,"ground"),0),l=r.geometryZWithOffset(s,i);return a.verticalDistanceToGround=l,a.sampledElevation=t,void(a.z=l+t)}case"relative-to-scene":{const t=n.unwrapOr(u.getElevationAtPoint(o,e,"scene"),0),l=r.geometryZWithOffset(s,i);return a.verticalDistanceToGround=l,a.sampledElevation=t,void(a.z=l+t)}case"absolute-height":{const t=r.geometryZWithOffset(s,i),l=n.unwrapOr(u.getElevationAtPoint(o,e,"ground"),0);return a.verticalDistanceToGround=t-l,a.sampledElevation=l,void(a.z=t)}default:return t.neverReached(r.mode),void(a.z=0)}}function d(e,t,n,o){return f(e,t,n,o,P),P.z}function p(t,n,o){return null==n||null==o?t.definedChanged:"on-the-ground"===n&&"on-the-ground"===o?t.staysOnTheGround:n===o||"on-the-ground"!==n&&"on-the-ground"!==o?e.SymbolUpdateType.UPDATE:t.onTheGroundChanged}function v(e){return"relative-to-ground"===e||"relative-to-scene"===e}function g(e){return"absolute-height"!==e}function m(e,t,n,r,i){f(t,n,i,r,P),s.updateVertexAttributeAuxpos1w(e,P.verticalDistanceToGround);const l=P.sampledElevation,u=o.copy(b,e.transformation);x[0]=t.x,x[1]=t.y,x[2]=P.z;return a.computeTranslationToOriginAndRotation(t.spatialReference,x,u,r.spatialReference)?e.transformation=u:console.warn("Could not locate symbol object properly, it might be misplaced"),l}function E(e,t,o,r,i,a){let l=0;const s=a.spatialReference;t*=3,r*=3;for(let u=0;u<i;++u){const i=e[t+0],u=e[t+1],c=e[t+2],f=n.unwrapOr(a.getElevation(i,u,c,s,"ground"),0);l+=f,o[r+0]=i,o[r+1]=u,o[r+2]=f,t+=3,r+=3}return l/i}function h(e,t,o,r,i,a,l,s){let u=0;const c=s.calculateOffsetRenderUnits(l),f=s.featureExpressionInfoContext,d=a.spatialReference;t*=3,r*=3;for(let p=0;p<i;++p){const i=e[t+0],l=e[t+1],s=e[t+2],p=n.unwrapOr(a.getElevation(i,l,s,d,"ground"),0);u+=p,o[r+0]=i,o[r+1]=l,o[r+2]=null==f?s+p+c:p+c,t+=3,r+=3}return u/i}function y(e,t,o,r,i,a,l,s){let u=0;const c=s.calculateOffsetRenderUnits(l),f=s.featureExpressionInfoContext,d=a.spatialReference;t*=3,r*=3;for(let p=0;p<i;++p){const i=e[t+0],l=e[t+1],s=e[t+2],p=n.unwrapOr(a.getElevation(i,l,s,d,"scene"),0);u+=p,o[r+0]=i,o[r+1]=l,o[r+2]=null==f?s+p+c:p+c,t+=3,r+=3}return u/i}function A(e){const t=e.meterUnitOffset,n=e.featureExpressionInfoContext;return 0!==t||null!=n}function T(e,t,n,o,r,i,a,l){const s=l.calculateOffsetRenderUnits(a),u=l.featureExpressionInfoContext;t*=3,o*=3;for(let c=0;c<r;++c){const r=e[t+0],i=e[t+1],a=e[t+2];n[o+0]=r,n[o+1]=i,n[o+2]=null==u?a+s:s,t+=3,o+=3}return 0}let O=function(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0};var U;e.SymbolUpdateType=void 0,(U=e.SymbolUpdateType||(e.SymbolUpdateType={}))[U.NONE=0]="NONE",U[U.UPDATE=1]="UPDATE",U[U.RECREATE=2]="RECREATE";const R={"absolute-height":{applyElevationAlignmentBuffer:T,requiresAlignment:A},"on-the-ground":{applyElevationAlignmentBuffer:E,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:h,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:y,requiresAlignment:()=>!0}},b=r.create(),P=new O,x=i.create();e.SampleElevationInfo=O,e.applyElevationAlignmentForHUD=m,e.applyPerVertexElevationAlignment=c,e.elevationModeChangeUpdateType=p,e.evaluateElevationAlignmentAtPoint=d,e.evaluateElevationInfoAtPoint=f,e.needsElevationUpdates2D=v,e.needsElevationUpdates3D=g,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
