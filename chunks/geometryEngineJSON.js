/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./geometryEngineBase","../geometry/geometryAdapters/json"],(function(e,n,t){"use strict";function r(e){return n.GeometryEngineApi.extendedSpatialReferenceInfo(e)}function i(e,r,i){return n.GeometryEngineApi.clip(t.jsonAdapter,e,r,i)}function o(e,r,i){return n.GeometryEngineApi.cut(t.jsonAdapter,e,r,i)}function s(e,r,i){return n.GeometryEngineApi.contains(t.jsonAdapter,e,r,i)}function a(e,r,i){return n.GeometryEngineApi.crosses(t.jsonAdapter,e,r,i)}function u(e,r,i,o){return n.GeometryEngineApi.distance(t.jsonAdapter,e,r,i,o)}function c(e,r,i){return n.GeometryEngineApi.equals(t.jsonAdapter,e,r,i)}function p(e,r,i){return n.GeometryEngineApi.intersects(t.jsonAdapter,e,r,i)}function f(e,r,i){return n.GeometryEngineApi.touches(t.jsonAdapter,e,r,i)}function l(e,r,i){return n.GeometryEngineApi.within(t.jsonAdapter,e,r,i)}function A(e,r,i){return n.GeometryEngineApi.disjoint(t.jsonAdapter,e,r,i)}function g(e,r,i){return n.GeometryEngineApi.overlaps(t.jsonAdapter,e,r,i)}function d(e,r,i,o){return n.GeometryEngineApi.relate(t.jsonAdapter,e,r,i,o)}function m(e,r){return n.GeometryEngineApi.isSimple(t.jsonAdapter,e,r)}function y(e,r){return n.GeometryEngineApi.simplify(t.jsonAdapter,e,r)}function E(e,r,i=!1){return n.GeometryEngineApi.convexHull(t.jsonAdapter,e,r,i)}function j(e,r,i){return n.GeometryEngineApi.difference(t.jsonAdapter,e,r,i)}function G(e,r,i){return n.GeometryEngineApi.symmetricDifference(t.jsonAdapter,e,r,i)}function h(e,r,i){return n.GeometryEngineApi.intersect(t.jsonAdapter,e,r,i)}function x(e,r,i=null){return n.GeometryEngineApi.union(t.jsonAdapter,e,r,i)}function w(e,r,i,o,s,a,u){return n.GeometryEngineApi.offset(t.jsonAdapter,e,r,i,o,s,a,u)}function S(e,r,i,o,s=!1){return n.GeometryEngineApi.buffer(t.jsonAdapter,e,r,i,o,s)}function V(e,r,i,o,s,a,u){return n.GeometryEngineApi.geodesicBuffer(t.jsonAdapter,e,r,i,o,s,a,u)}function v(e,r,i,o=!0){return n.GeometryEngineApi.nearestCoordinate(t.jsonAdapter,e,r,i,o)}function z(e,r,i){return n.GeometryEngineApi.nearestVertex(t.jsonAdapter,e,r,i)}function b(e,r,i,o,s){return n.GeometryEngineApi.nearestVertices(t.jsonAdapter,e,r,i,o,s)}function D(e,t,r,i){if(null==t||null==i)throw new Error("Illegal Argument Exception");const o=n.GeometryEngineApi.rotate(t,r,i);return o.spatialReference=e,o}function H(e,t,r){if(null==t||null==r)throw new Error("Illegal Argument Exception");const i=n.GeometryEngineApi.flipHorizontal(t,r);return i.spatialReference=e,i}function I(e,t,r){if(null==t||null==r)throw new Error("Illegal Argument Exception");const i=n.GeometryEngineApi.flipVertical(t,r);return i.spatialReference=e,i}function L(e,r,i,o,s){return n.GeometryEngineApi.generalize(t.jsonAdapter,e,r,i,o,s)}function R(e,r,i,o){return n.GeometryEngineApi.densify(t.jsonAdapter,e,r,i,o)}function B(e,r,i,o,s=0){return n.GeometryEngineApi.geodesicDensify(t.jsonAdapter,e,r,i,o,s)}function _(e,r,i){return n.GeometryEngineApi.planarArea(t.jsonAdapter,e,r,i)}function q(e,r,i){return n.GeometryEngineApi.planarLength(t.jsonAdapter,e,r,i)}function C(e,r,i,o){return n.GeometryEngineApi.geodesicArea(t.jsonAdapter,e,r,i,o)}function O(e,r,i,o){return n.GeometryEngineApi.geodesicLength(t.jsonAdapter,e,r,i,o)}const J=Object.freeze(Object.defineProperty({__proto__:null,extendedSpatialReferenceInfo:r,clip:i,cut:o,contains:s,crosses:a,distance:u,equals:c,intersects:p,touches:f,within:l,disjoint:A,overlaps:g,relate:d,isSimple:m,simplify:y,convexHull:E,difference:j,symmetricDifference:G,intersect:h,union:x,offset:w,buffer:S,geodesicBuffer:V,nearestCoordinate:v,nearestVertex:z,nearestVertices:b,rotate:D,flipHorizontal:H,flipVertical:I,generalize:L,densify:R,geodesicDensify:B,planarArea:_,planarLength:q,geodesicArea:C,geodesicLength:O},Symbol.toStringTag,{value:"Module"}));e.buffer=S,e.clip=i,e.contains=s,e.convexHull=E,e.crosses=a,e.cut=o,e.densify=R,e.difference=j,e.disjoint=A,e.distance=u,e.equals=c,e.extendedSpatialReferenceInfo=r,e.flipHorizontal=H,e.flipVertical=I,e.generalize=L,e.geodesicArea=C,e.geodesicBuffer=V,e.geodesicDensify=B,e.geodesicLength=O,e.geometryEngineJSON=J,e.intersect=h,e.intersects=p,e.isSimple=m,e.nearestCoordinate=v,e.nearestVertex=z,e.nearestVertices=b,e.offset=w,e.overlaps=g,e.planarArea=_,e.planarLength=q,e.relate=d,e.rotate=D,e.simplify=y,e.symmetricDifference=G,e.touches=f,e.union=x,e.within=l}));