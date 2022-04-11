/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../chunks/geometryEngineBase","./geometryAdapters/hydrated"],(function(e,n,r){"use strict";function t(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function i(e){return n.GeometryEngineApi.extendedSpatialReferenceInfo(e)}function o(e,i){return n.GeometryEngineApi.clip(r.hydratedAdapter,t(e),e,i)}function a(e,i){return n.GeometryEngineApi.cut(r.hydratedAdapter,t(e),e,i)}function d(e,i){return n.GeometryEngineApi.contains(r.hydratedAdapter,t(e),e,i)}function u(e,i){return n.GeometryEngineApi.crosses(r.hydratedAdapter,t(e),e,i)}function c(e,i,o){return n.GeometryEngineApi.distance(r.hydratedAdapter,t(e),e,i,o)}function p(e,i){return n.GeometryEngineApi.equals(r.hydratedAdapter,t(e),e,i)}function f(e,i){return n.GeometryEngineApi.intersects(r.hydratedAdapter,t(e),e,i)}function l(e,i){return n.GeometryEngineApi.touches(r.hydratedAdapter,t(e),e,i)}function y(e,i){return n.GeometryEngineApi.within(r.hydratedAdapter,t(e),e,i)}function A(e,i){return n.GeometryEngineApi.disjoint(r.hydratedAdapter,t(e),e,i)}function s(e,i){return n.GeometryEngineApi.overlaps(r.hydratedAdapter,t(e),e,i)}function g(e,i,o){return n.GeometryEngineApi.relate(r.hydratedAdapter,t(e),e,i,o)}function m(e){return n.GeometryEngineApi.isSimple(r.hydratedAdapter,t(e),e)}function E(e){return n.GeometryEngineApi.simplify(r.hydratedAdapter,t(e),e)}function h(e,i=!1){return n.GeometryEngineApi.convexHull(r.hydratedAdapter,t(e),e,i)}function G(e,i){return n.GeometryEngineApi.difference(r.hydratedAdapter,t(e),e,i)}function x(e,i){return n.GeometryEngineApi.symmetricDifference(r.hydratedAdapter,t(e),e,i)}function w(e,i){return n.GeometryEngineApi.intersect(r.hydratedAdapter,t(e),e,i)}function R(e,i=null){return n.GeometryEngineApi.union(r.hydratedAdapter,t(e),e,i)}function v(e,i,o,a,d,u){return n.GeometryEngineApi.offset(r.hydratedAdapter,t(e),e,i,o,a,d,u)}function S(e,i,o,a=!1){return n.GeometryEngineApi.buffer(r.hydratedAdapter,t(e),e,i,o,a)}function I(e,i,o,a,d,u){return n.GeometryEngineApi.geodesicBuffer(r.hydratedAdapter,t(e),e,i,o,a,d,u)}function V(e,i,o=!0){return n.GeometryEngineApi.nearestCoordinate(r.hydratedAdapter,t(e),e,i,o)}function b(e,i){return n.GeometryEngineApi.nearestVertex(r.hydratedAdapter,t(e),e,i)}function z(e,i,o,a){return n.GeometryEngineApi.nearestVertices(r.hydratedAdapter,t(e),e,i,o,a)}function D(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent.center:null}function H(e,r,t){var i;if(null==e)throw new Error("Illegal Argument Exception");const o=e.spatialReference;if(null==(t=null!=(i=t)?i:D(e)))throw new Error("Illegal Argument Exception");const a=e.constructor.fromJSON(n.GeometryEngineApi.rotate(e,r,t));return a.spatialReference=o,a}function L(e,r){var t;if(null==e)throw new Error("Illegal Argument Exception");const i=e.spatialReference;if(null==(r=null!=(t=r)?t:D(e)))throw new Error("Illegal Argument Exception");const o=e.constructor.fromJSON(n.GeometryEngineApi.flipHorizontal(e,r));return o.spatialReference=i,o}function O(e,r){var t;if(null==e)throw new Error("Illegal Argument Exception");const i=e.spatialReference;if(null==(r=null!=(t=r)?t:D(e)))throw new Error("Illegal Argument Exception");const o=e.constructor.fromJSON(n.GeometryEngineApi.flipVertical(e,r));return o.spatialReference=i,o}function j(e,i,o,a){return n.GeometryEngineApi.generalize(r.hydratedAdapter,t(e),e,i,o,a)}function B(e,i,o){return n.GeometryEngineApi.densify(r.hydratedAdapter,t(e),e,i,o)}function J(e,i,o,a=0){return n.GeometryEngineApi.geodesicDensify(r.hydratedAdapter,t(e),e,i,o,a)}function N(e,i){return n.GeometryEngineApi.planarArea(r.hydratedAdapter,t(e),e,i)}function q(e,i){return n.GeometryEngineApi.planarLength(r.hydratedAdapter,t(e),e,i)}function C(e,i,o){return n.GeometryEngineApi.geodesicArea(r.hydratedAdapter,t(e),e,i,o)}function M(e,i,o){return n.GeometryEngineApi.geodesicLength(r.hydratedAdapter,t(e),e,i,o)}e.buffer=S,e.clip=o,e.contains=d,e.convexHull=h,e.crosses=u,e.cut=a,e.densify=B,e.difference=G,e.disjoint=A,e.distance=c,e.equals=p,e.extendedSpatialReferenceInfo=i,e.flipHorizontal=L,e.flipVertical=O,e.generalize=j,e.geodesicArea=C,e.geodesicBuffer=I,e.geodesicDensify=J,e.geodesicLength=M,e.intersect=w,e.intersects=f,e.isSimple=m,e.nearestCoordinate=V,e.nearestVertex=b,e.nearestVertices=z,e.offset=v,e.overlaps=s,e.planarArea=N,e.planarLength=q,e.relate=g,e.rotate=H,e.simplify=E,e.symmetricDifference=x,e.touches=l,e.union=R,e.within=y,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
