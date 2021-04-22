/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","./geometryEngineBase","../geometry/geometryAdapters/json"],(function(e,n,t){"use strict";function r(e){return n.geometryEngineBase$1.extendedSpatialReferenceInfo(e)}function i(e,r,i){return n.geometryEngineBase$1.clip(t.jsonAdapter,e,r,i)}function o(e,r,i){return n.geometryEngineBase$1.cut(t.jsonAdapter,e,r,i)}function s(e,r,i){return n.geometryEngineBase$1.contains(t.jsonAdapter,e,r,i)}function a(e,r,i){return n.geometryEngineBase$1.crosses(t.jsonAdapter,e,r,i)}function u(e,r,i,o){return n.geometryEngineBase$1.distance(t.jsonAdapter,e,r,i,o)}function c(e,r,i){return n.geometryEngineBase$1.equals(t.jsonAdapter,e,r,i)}function g(e,r,i){return n.geometryEngineBase$1.intersects(t.jsonAdapter,e,r,i)}function f(e,r,i){return n.geometryEngineBase$1.touches(t.jsonAdapter,e,r,i)}function l(e,r,i){return n.geometryEngineBase$1.within(t.jsonAdapter,e,r,i)}function p(e,r,i){return n.geometryEngineBase$1.disjoint(t.jsonAdapter,e,r,i)}function d(e,r,i){return n.geometryEngineBase$1.overlaps(t.jsonAdapter,e,r,i)}function m(e,r,i,o){return n.geometryEngineBase$1.relate(t.jsonAdapter,e,r,i,o)}function y(e,r){return n.geometryEngineBase$1.isSimple(t.jsonAdapter,e,r)}function E(e,r){return n.geometryEngineBase$1.simplify(t.jsonAdapter,e,r)}function A(e,r,i=!1){return n.geometryEngineBase$1.convexHull(t.jsonAdapter,e,r,i)}function B(e,r,i){return n.geometryEngineBase$1.difference(t.jsonAdapter,e,r,i)}function j(e,r,i){return n.geometryEngineBase$1.symmetricDifference(t.jsonAdapter,e,r,i)}function $(e,r,i){return n.geometryEngineBase$1.intersect(t.jsonAdapter,e,r,i)}function h(e,r,i=null){return n.geometryEngineBase$1.union(t.jsonAdapter,e,r,i)}function x(e,r,i,o,s,a,u){return n.geometryEngineBase$1.offset(t.jsonAdapter,e,r,i,o,s,a,u)}function w(e,r,i,o,s=!1){return n.geometryEngineBase$1.buffer(t.jsonAdapter,e,r,i,o,s)}function V(e,r,i,o,s,a,u){return n.geometryEngineBase$1.geodesicBuffer(t.jsonAdapter,e,r,i,o,s,a,u)}function v(e,r,i,o=!0){return n.geometryEngineBase$1.nearestCoordinate(t.jsonAdapter,e,r,i,o)}function z(e,r,i){return n.geometryEngineBase$1.nearestVertex(t.jsonAdapter,e,r,i)}function S(e,r,i,o,s){return n.geometryEngineBase$1.nearestVertices(t.jsonAdapter,e,r,i,o,s)}function D(e,t,r,i){if(null==t||null==i)throw new Error("Illegal Argument Exception");const o=n.geometryEngineBase$1.rotate(t,r,i);return o.spatialReference=e,o}function H(e,t,r){if(null==t||null==r)throw new Error("Illegal Argument Exception");const i=n.geometryEngineBase$1.flipHorizontal(t,r);return i.spatialReference=e,i}function I(e,t,r){if(null==t||null==r)throw new Error("Illegal Argument Exception");const i=n.geometryEngineBase$1.flipVertical(t,r);return i.spatialReference=e,i}function L(e,r,i,o,s){return n.geometryEngineBase$1.generalize(t.jsonAdapter,e,r,i,o,s)}function R(e,r,i,o){return n.geometryEngineBase$1.densify(t.jsonAdapter,e,r,i,o)}function b(e,r,i,o,s=0){return n.geometryEngineBase$1.geodesicDensify(t.jsonAdapter,e,r,i,o,s)}function _(e,r,i){return n.geometryEngineBase$1.planarArea(t.jsonAdapter,e,r,i)}function q(e,r,i){return n.geometryEngineBase$1.planarLength(t.jsonAdapter,e,r,i)}function C(e,r,i,o){return n.geometryEngineBase$1.geodesicArea(t.jsonAdapter,e,r,i,o)}function O(e,r,i,o){return n.geometryEngineBase$1.geodesicLength(t.jsonAdapter,e,r,i,o)}var J=Object.freeze({__proto__:null,extendedSpatialReferenceInfo:r,clip:i,cut:o,contains:s,crosses:a,distance:u,equals:c,intersects:g,touches:f,within:l,disjoint:p,overlaps:d,relate:m,isSimple:y,simplify:E,convexHull:A,difference:B,symmetricDifference:j,intersect:$,union:h,offset:x,buffer:w,geodesicBuffer:V,nearestCoordinate:v,nearestVertex:z,nearestVertices:S,rotate:D,flipHorizontal:H,flipVertical:I,generalize:L,densify:R,geodesicDensify:b,planarArea:_,planarLength:q,geodesicArea:C,geodesicLength:O});e.buffer=w,e.clip=i,e.contains=s,e.convexHull=A,e.crosses=a,e.cut=o,e.densify=R,e.difference=B,e.disjoint=p,e.distance=u,e.equals=c,e.extendedSpatialReferenceInfo=r,e.flipHorizontal=H,e.flipVertical=I,e.generalize=L,e.geodesicArea=C,e.geodesicBuffer=V,e.geodesicDensify=b,e.geodesicLength=O,e.geometryEngineJSON=J,e.intersect=$,e.intersects=g,e.isSimple=y,e.nearestCoordinate=v,e.nearestVertex=z,e.nearestVertices=S,e.offset=x,e.overlaps=d,e.planarArea=_,e.planarLength=q,e.relate=m,e.rotate=D,e.simplify=E,e.symmetricDifference=j,e.touches=f,e.union=h,e.within=l}));