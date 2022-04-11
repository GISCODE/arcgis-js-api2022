/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../geometry","../../core/handleUtils","../../core/lang","../../core/mathUtils","../../core/maybe","../../core/screenUtils","../../chunks/vec3f64","../../geometry/projection","../ViewingMode","../draw/support/drawUtils","../../geometry/Point"],(function(e,n,t,r,a,o,i,c,s,l,u,p){"use strict";function m(e,n){let t=null,r=null;return a=>{if("cancel"===a.action)return void(o.isSome(r)&&(r.execute({action:"cancel"}),t=null,r=null));const i={action:a.action,screenStart:a.start,screenEnd:a.screenPoint};"start"===a.action&&o.isNone(t)&&(t=new j,r=new j,n(e,t,r,a.pointerType,i)),o.isSome(t)&&t.execute(i),"end"===a.action&&o.isSome(t)&&(t=null,r=null)}}function f(e,n){return e.events.on("drag",m(e,n))}function d(e,n){const r=[];for(const t of e)r.push(f(t,n));return t.handlesGroup(r)}function y(e,n){const t=[e.x,e.y,e.z],r=n,a=[Math.cos(r),Math.sin(r)],o=Math.sqrt(a[0]*a[0]+a[1]*a[1]);if(0===o)return null;a[0]/=o,a[1]/=o;const i=e=>{const n=(e.x-t[0])*a[0]+(e.y-t[1])*a[1];e.x=t[0]+n*a[0],e.y=t[1]+n*a[1]};return e=>(i(e.mapStart),i(e.mapEnd),e)}function S(e,n){let t=null;return r=>{if("start"===r.action&&(t=x(e,r.mapStart.spatialReference,n)),o.isNone(t))return null;const a=r.mapEnd.x-r.mapStart.x,i=r.mapEnd.y-r.mapStart.y,c=r.mapEnd.z-r.mapStart.z;return t.move(a,i,c),{...r,translationX:a,translationY:i,translationZ:c}}}function g(e,n){return o.isNone(e)?null:e.spatialReference.equals(n)?e.clone():s.project(e,n)}function x(e,n,t){const r=e.geometry;if(o.isNone(r))return null;if("mesh"===r.type)return h(e,r,n,t);const a=g(r,n),i=r.spatialReference;return o.isNone(a)?null:{move:(n,t,r)=>{const o=u.move(a.clone(),n,t,r);o.spatialReference.equals(i)?e.geometry=o:e.geometry=s.project(o,i)}}}function h(e,n,t,r){if(o.isSome(n.transform))return E(e,n,n.transform,t);if(!n.spatialReference.equals(t))return null;let a=0,i=0,c=0;return{move:(t,o,s)=>{const u=t-a,m=o-i,f=s-c;if(u||m||f){const d=new p(n.origin.x+u,n.origin.y+m,n.origin.z+f,n.origin.spatialReference);n.centerAt(d,{geographic:r===l.ViewingMode.Global}),e.notifyGeometryChanged(),a=t,i=o,c=s}}}}function E(e,n,t,r){const a=g(t.getOriginPoint(n.spatialReference),r),i=n.spatialReference;return o.isNone(a)?null:{move:(n,r,l)=>{const p=u.move(a.clone(),n,r,l);if(p.spatialReference.equals(i))t.origin=c.fromValues(p.x,p.y,p.z);else{const e=s.project(p,i);o.isSome(e)&&(t.origin=c.fromValues(e.x,e.y,e.z))}e.notifyMeshTransformChanged(),e.notifyGeometryChanged()}}}function M(e,n=null,t){let r=null;const a=o.isSome(n)&&!e.spatialReference.equals(n)?e=>o.isSome(e)?s.project(e,n):e:e=>e,i={exclude:[],...t};return n=>{if("start"===n.action&&(r=a(e.toMap(n.screenStart,i))),o.isNone(r))return null;const t=a(e.toMap(n.screenEnd,i));return o.isSome(t)?{...n,mapStart:r,mapEnd:t}:null}}function v(e,n){const t=e.map((e=>o.unwrap(S(e,n)))).filter((e=>o.isSome(e)));return e=>{const n=e.mapEnd.x-e.mapStart.x,r=e.mapEnd.y-e.mapStart.y,a=e.mapEnd.z-e.mapStart.z;return t.forEach((n=>n(e))),{...e,translationX:n,translationY:r,translationZ:a}}}function w(e,n){const t=new Map;for(const a of n)t.set(a,r.clone(e[a]));return n=>(t.forEach(((n,t)=>{e[t]=n})),n)}function R(e){return o.isSome(e.geometry)&&"mesh"===e.geometry.type?z(e,e.geometry):w(e,["geometry"])}function z(e,n){const t=o.isSome(n.transform)?n.transform.clone():null,r=n.vertexAttributes.clonePositional();return a=>(n.transform=t,n.vertexAttributes=r,e.notifyGeometryChanged(),a)}function D(e){const n=e.map((e=>o.unwrap(R(e)))).filter((e=>o.isSome(e)));return e=>(n.forEach((n=>n(e))),e)}function P(e){return w(e,["symbol"])}function b(){let e=0,n=0,t=0;return r=>{"start"===r.action&&(e=r.mapStart.x,n=r.mapStart.y,t=r.mapStart.z);const a=r.mapEnd.x-e,o=r.mapEnd.y-n,i=r.mapEnd.z-t;return e=r.mapEnd.x,n=r.mapEnd.y,t=r.mapEnd.z,{...r,mapDeltaX:a,mapDeltaY:o,mapDeltaZ:i,mapDeltaSpatialReference:r.mapStart.spatialReference}}}function G(){let e=0,n=0;return t=>{"start"===t.action&&(e=t.screenStart.x,n=t.screenStart.y);const r=t.screenEnd.x-e,a=t.screenEnd.y-n;return e=t.screenEnd.x,n=t.screenEnd.y,{...t,screenDeltaX:r,screenDeltaY:a}}}function N(e,n){let t=null,r=0,o=0;return c=>{if("start"===c.action&&(t=e.toScreen(n),t.x<0||t.x>e.width||t.y<0||t.y>e.height?t=null:(r=c.screenStart.x-t.x,o=c.screenStart.y-t.y)),null==t)return null;const s=a.clamp(c.screenEnd.x-r,0,e.width),l=a.clamp(c.screenEnd.y-o,0,e.height),u=i.createScreenPoint(s,l);return c.screenStart=t,c.screenEnd=u,c}}let j=function(){function e(){this.execute=()=>{}}return e.prototype.next=function(n,t=new e){return o.isSome(n)&&(this.execute=e=>{const r=n(e);o.isSome(r)&&t.execute(r)}),t},e}();e.EventPipeline=j,e.addMapDelta=b,e.addScreenDelta=G,e.constrainToMapAxis=y,e.createDragEventPipelineCallback=m,e.createManipulatorDragEventPipeline=f,e.createManipulatorDragEventPipelineMany=d,e.dragAtLocation=N,e.dragGraphic=S,e.dragGraphicMany=v,e.resetGraphic=R,e.resetGraphicMany=D,e.resetProperties=w,e.resetSymbol=P,e.screenToMap=M,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
