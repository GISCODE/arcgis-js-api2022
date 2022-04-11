/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/maybe","../../../../../core/screenUtils","../../../../../chunks/mat4f64","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../geometry/support/plane","../../../../../layers/graphics/dehydratedFeatures","../../../../interactive/editGeometry/operations/OffsetEdgeVertex"],(function(e,r,t,n,o,c,s,a,d){"use strict";function i(e,r,t){const n="on-the-ground"===t.mode?d.PlaneType.XY:d.PlaneType.XYZ;return new d.OffsetEdgeVertex(e,n,r,0)}function u(e,t,n){const a=c.create();if(!e.renderCoordsHelper.toRenderCoords(t,a))return null;const d=l(e,t,s.normal(n.plane)),i=l(e,t,n.edgeDirection);if(r.isNone(d)||r.isNone(i))return null;const u=o.cross(c.create(),d,i);return s.fromPositionAndNormal(a,u,s.create())}function l(e,r,t){const n=a.makeDehydratedPoint(r.x+t[0],r.y+t[1],r.z+t[2],r.spatialReference),s=c.create(),d=c.create();return e.renderCoordsHelper.toRenderCoords(r,s)&&e.renderCoordsHelper.toRenderCoords(n,d)?o.direction(d,s,d):null}function f(e,r,t){const a=s.normal(e),d=o.direction(c.create(),r,t),i=o.cross(c.create(),d,a),u=o.cross(c.create(),d,i);return n.fromValues(d[0],d[1],d[2],0,i[0],i[1],i[2],0,u[0],u[1],u[2],0,0,0,0,1)}function p(e,n,c){const s=c.projectToRenderScreen(e,t.createRenderScreenPointArray3()),a=c.projectToRenderScreen(n,t.createRenderScreenPointArray3());return r.isSome(s)&&r.isSome(a)?o.squaredLength(o.subtract(s,s,a)):0}e.createEdgeOffsetIntersectionPlane=u,e.createEdgeOffsetOperation=i,e.edgeOffsetRotationMatrix=f,e.screenEdgeLengthSquared=p,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
