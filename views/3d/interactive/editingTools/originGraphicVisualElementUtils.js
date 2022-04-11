/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../core/handleUtils","../../../../core/mathUtils","../../../../core/maybe","../../../../core/watchUtils","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../geometry/projection","../../../../geometry/support/aaBoundingBox","../../../../geometry/support/aaBoundingRect","../../../../support/elevationInfoUtils","./GrabbingState","./ManipulatorState","./settings","../visualElements/ExtendedLineVisualElement","../visualElements/LaserlineVisualElement","../visualElements/PointVisualElement","../../layers/graphics/elevationAlignmentUtils","../../layers/graphics/ElevationContext","../../layers/graphics/GraphicState","../../webgl-engine/lib/Material"],(function(e,t,n,a,i,s,l,o,r,c,p,u,d,h,g,v,m,f,y,E,w){"use strict";function b(e){const{view:n,graphic:a}=e,i=new E.GraphicState({graphic:a}),s=[],l=V(e,i,s);return S(e,i,s,l),s.push(n.trackGraphicState(i)),{visualElement:l,remove(){t.handlesGroup(s).remove()}}}function S(e,i,l,c){const{view:m,graphic:E}=e,b=new g.ExtendedLineVisualElement({view:m,extensionType:h.settings.visualElements.zVerticalLine.extensionType,innerWidth:1,attached:!1,writeDepthEnabled:!1,renderOccluded:w.RenderOccludedFlag.OccludeAndTransparent});h.settings.visualElements.zVerticalLine.apply(b);const S=new v.LaserlineVisualElement({view:m,intersectsLineInfinite:!0,attached:!1});h.settings.visualElements.pointGraphics.shadowStyle.apply(S);const V=n.deg2rad(h.settings.visualElements.heightPlaneAngleCutoff),M=new v.LaserlineVisualElement({view:m,attached:!1,angleCutoff:V});h.settings.visualElements.heightPlane.apply(M);const P=p.getGraphicEffectiveElevationInfo(e.graphic),x=y.ElevationContext.fromElevationInfo(P),H="on-the-ground"===P.mode||!P.offset&&"absolute-height"!==P.mode,T=new d.ManipulatorState;let C=1,R=1;const I=()=>{T.update(e);const t=G(E),n=H&&(i.isDraped||a.isNone(t)||!t.hasZ);let l=!0;if(!n&&a.isSome(t)){const e=f.evaluateElevationAlignmentAtPoint(t,m.elevationProvider,x,m.renderCoordsHelper);s.set(L,t.x,t.y,e),o.projectVectorToVector(L,t.spatialReference,L,m.renderCoordsHelper.spatialReference),b.setStartEndFromWorldDownAtLocation(L),S.intersectsWorldUpAtLocation=L}else l=!1;const p=T.grabbingState&u.GrabbingState.Z?h.settings.visualElements.laserlineAlphaMultiplier:1;p!==C&&(C=p,h.settings.visualElements.heightPlane.apply(M,p));const d=r.empty(A);!n&&i.displaying&&c.calculateMapBounds(d)&&o.projectVectorToVector(r.getMin(d,L),m.spatialReference,L,m.renderCoordsHelper.spatialReference)?(M.heightManifoldTarget=L,M.attached=!0):M.attached=!1;const g=T.grabbingState&u.GrabbingState.XY?h.settings.visualElements.laserlineAlphaMultiplier:1;g!==R&&(R=g,h.settings.visualElements.pointGraphics.shadowStyle.apply(S,g));const v=l&&i.displaying&&!n;S.attached=v,b.attached=v};l.push(i.watch(["displaying","isDraped"],I),i.on("changed",I)),e.forEachManipulator((e=>{l.push(e.events.on("grab-changed",I))})),l.push(t.destroyHandle(S)),l.push(t.destroyHandle(b)),l.push(t.destroyHandle(M)),I()}function V(e,n,a){const{view:i,graphic:s}=e,l=new m.PointVisualElement({view:i,geometry:G(s),elevationInfo:p.getGraphicEffectiveElevationInfo(s),attached:!1});return M(e,l,n,a),a.push(t.destroyHandle(l)),l}function G(e){const t=e.geometry;return a.isNone(t)?null:"point"===t.type?t:"mesh"===t.type?t.anchor.clone():null}function M(e,t,n,a){const s=()=>t.attached=n.displaying;P(e,t,n,a),h.settings.visualElements.pointGraphics.outline.apply(t),a.push(i.init(n,"displaying",s))}function P(e,n,i,s){const{view:l,graphic:o}=e;let r=null;const c=e=>{a.isSome(r)&&(r.remove(),r=null),i.isDraped&&a.isSome(e)&&(r=x(l,e,(()=>{n.geometry=e})))},p=()=>{const e=G(o);c(e),n.geometry=e};s.push(i.on("changed",p),t.refHandle((()=>r))),p()}function x(e,t,n){const a=e.elevationProvider.spatialReference;o.projectPointToVector(t,L,a);const i=L[0],s=L[1];return e.elevationProvider.on("elevation-change",(e=>{c.containsXY(e.extent,i,s)&&n()}))}const L=l.create(),A=r.create();e.createVisualElements=b,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
