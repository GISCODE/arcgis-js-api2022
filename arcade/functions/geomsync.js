// COPYRIGHT © 201 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["require","exports","../../kernel","../kernel","../languageUtils","./centroid","../../geometry/Extent","../../geometry/Geometry","../../geometry/Multipoint","../../geometry/Point","../../geometry/Polygon","../../geometry/Polyline","../../geometry/jsonUtils"],(function(e,n,r,t,o,i,u,a,l,f,c,s,g){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var m=null;function d(e){return 0===r.version.indexOf("4.")?c.fromExtent(e):new c({spatialReference:e.spatialReference,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]})}n.setGeometryEngine=function(e){m=e},n.registerFunctions=function(e,n){function r(e){if(o.pcCheck(e,2,2),e[0]instanceof a&&e[1]instanceof a);else if(e[0]instanceof a&&null===e[1]);else if(e[1]instanceof a&&null===e[0]);else if(null!==e[0]||null!==e[1])throw new Error("Illegal Argument")}e.disjoint=function(e,t){return n(e,t,(function(e,n,t){return r(t=o.autoCastFeatureToGeometry(t)),null===t[0]||null===t[1]||m.disjoint(t[0],t[1])}))},e.intersects=function(e,t){return n(e,t,(function(e,n,t){return r(t=o.autoCastFeatureToGeometry(t)),null!==t[0]&&null!==t[1]&&m.intersects(t[0],t[1])}))},e.touches=function(e,t){return n(e,t,(function(e,n,t){return r(t=o.autoCastFeatureToGeometry(t)),null!==t[0]&&null!==t[1]&&m.touches(t[0],t[1])}))},e.crosses=function(e,t){return n(e,t,(function(e,n,t){return r(t=o.autoCastFeatureToGeometry(t)),null!==t[0]&&null!==t[1]&&m.crosses(t[0],t[1])}))},e.within=function(e,t){return n(e,t,(function(e,n,t){return r(t=o.autoCastFeatureToGeometry(t)),null!==t[0]&&null!==t[1]&&m.within(t[0],t[1])}))},e.contains=function(e,t){return n(e,t,(function(e,n,t){return r(t=o.autoCastFeatureToGeometry(t)),null!==t[0]&&null!==t[1]&&m.contains(t[0],t[1])}))},e.overlaps=function(e,t){return n(e,t,(function(e,n,t){return r(t=o.autoCastFeatureToGeometry(t)),null!==t[0]&&null!==t[1]&&m.overlaps(t[0],t[1])}))},e.equals=function(e,r){return n(e,r,(function(e,n,r){return o.pcCheck(r,2,2),r[0]===r[1]||(r[0]instanceof a&&r[1]instanceof a?m.equals(r[0],r[1]):!(!o.isDate(r[0])||!o.isDate(r[1]))&&r[0].getTime()===r[1].getTime())}))},e.relate=function(e,r){return n(e,r,(function(e,n,r){if(r=o.autoCastFeatureToGeometry(r),o.pcCheck(r,3,3),r[0]instanceof a&&r[1]instanceof a)return m.relate(r[0],r[1],o.toString(r[2]));if(r[0]instanceof a&&null===r[1])return!1;if(r[1]instanceof a&&null===r[0])return!1;if(null===r[0]&&null===r[1])return!1;throw new Error("Illegal Argument")}))},e.intersection=function(e,t){return n(e,t,(function(e,n,t){return r(t=o.autoCastFeatureToGeometry(t)),null===t[0]||null===t[1]?null:m.intersect(t[0],t[1])}))},e.union=function(e,r){return n(e,r,(function(n,r,i){var u=[];if(0===(i=o.autoCastFeatureToGeometry(i)).length)throw new Error("Function called with wrong number of Parameters");if(1===i.length)if(o.isArray(i[0])){for(var l=o.autoCastFeatureToGeometry(i[0]),f=0;f<l.length;f++)if(null!==l[f]){if(!(l[f]instanceof a))throw new Error("Illegal Argument");u.push(l[f])}}else{if(!o.isImmutableArray(i[0])){if(i[0]instanceof a)return o.fixSpatialReference(t.cloneGeometry(i[0]),e.spatialReference);if(null===i[0])return null;throw new Error("Illegal Argument")}var c=o.autoCastFeatureToGeometry(i[0].toArray());for(f=0;f<c.length;f++)if(null!==c[f]){if(!(c[f]instanceof a))throw new Error("Illegal Argument");u.push(c[f])}}else for(f=0;f<i.length;f++)if(null!==i[f]){if(!(i[f]instanceof a))throw new Error("Illegal Argument");u.push(i[f])}return 0===u.length?null:m.union(u)}))},e.difference=function(e,i){return n(e,i,(function(e,n,i){return r(i=o.autoCastFeatureToGeometry(i)),null!==i[0]&&null===i[1]?t.cloneGeometry(i[0]):null===i[0]?null:m.difference(i[0],i[1])}))},e.symmetricdifference=function(e,i){return n(e,i,(function(e,n,i){return r(i=o.autoCastFeatureToGeometry(i)),null===i[0]&&null===i[1]?null:null===i[0]?t.cloneGeometry(i[1]):null===i[1]?t.cloneGeometry(i[0]):m.symmetricDifference(i[0],i[1])}))},e.clip=function(e,r){return n(e,r,(function(e,n,r){if(r=o.autoCastFeatureToGeometry(r),o.pcCheck(r,2,2),!(r[1]instanceof u)&&null!==r[1])throw new Error("Illegal Argument");if(null===r[0])return null;if(!(r[0]instanceof a))throw new Error("Illegal Argument");return null===r[1]?null:m.clip(r[0],r[1])}))},e.cut=function(e,r){return n(e,r,(function(e,n,r){if(r=o.autoCastFeatureToGeometry(r),o.pcCheck(r,2,2),!(r[1]instanceof s)&&null!==r[1])throw new Error("Illegal Argument");if(null===r[0])return[];if(!(r[0]instanceof a))throw new Error("Illegal Argument");return null===r[1]?[t.cloneGeometry(r[0])]:m.cut(r[0],r[1])}))},e.area=function(e,r){return n(e,r,(function(n,r,i){if(o.pcCheck(i,1,2),null===(i=o.autoCastFeatureToGeometry(i))[0])return 0;if(o.isArray(i[0])||o.isImmutableArray(i[0])){var u=o.autoCastArrayOfPointsToPolygon(i[0],e.spatialReference);return null===u?0:m.planarArea(u,t.convertSquareUnitsToCode(o.defaultUndefined(i[1],-1)))}if(!(i[0]instanceof a))throw new Error("Illegal Argument");return m.planarArea(i[0],t.convertSquareUnitsToCode(o.defaultUndefined(i[1],-1)))}))},e.areageodetic=function(e,r){return n(e,r,(function(n,r,i){if(o.pcCheck(i,1,2),null===(i=o.autoCastFeatureToGeometry(i))[0])return 0;if(o.isArray(i[0])||o.isImmutableArray(i[0])){var u=o.autoCastArrayOfPointsToPolygon(i[0],e.spatialReference);return null===u?0:m.geodesicArea(u,t.convertSquareUnitsToCode(o.defaultUndefined(i[1],-1)))}if(!(i[0]instanceof a))throw new Error("Illegal Argument");return m.geodesicArea(i[0],t.convertSquareUnitsToCode(o.defaultUndefined(i[1],-1)))}))},e.length=function(e,r){return n(e,r,(function(n,r,i){if(o.pcCheck(i,1,2),null===(i=o.autoCastFeatureToGeometry(i))[0])return 0;if(o.isArray(i[0])||o.isImmutableArray(i[0])){var u=o.autoCastArrayOfPointsToPolyline(i[0],e.spatialReference);return null===u?0:m.planarLength(u,t.convertLinearUnitsToCode(o.defaultUndefined(i[1],-1)))}if(!(i[0]instanceof a))throw new Error("Illegal Argument");return m.planarLength(i[0],t.convertLinearUnitsToCode(o.defaultUndefined(i[1],-1)))}))},e.lengthgeodetic=function(e,r){return n(e,r,(function(n,r,i){if(o.pcCheck(i,1,2),null===(i=o.autoCastFeatureToGeometry(i))[0])return 0;if(o.isArray(i[0])||o.isImmutableArray(i[0])){var u=o.autoCastArrayOfPointsToPolyline(i[0],e.spatialReference);return null===u?0:m.geodesicLength(u,t.convertLinearUnitsToCode(o.defaultUndefined(i[1],-1)))}if(!(i[0]instanceof a))throw new Error("Illegal Argument");return m.geodesicLength(i[0],t.convertLinearUnitsToCode(o.defaultUndefined(i[1],-1)))}))},e.distance=function(e,r){return n(e,r,(function(n,r,i){i=o.autoCastFeatureToGeometry(i),o.pcCheck(i,2,3);var u=i[0];(o.isArray(i[0])||o.isImmutableArray(i[0]))&&(u=o.autoCastArrayOfPointsToMultiPoint(i[0],e.spatialReference));var l=i[1];if((o.isArray(i[1])||o.isImmutableArray(i[1]))&&(l=o.autoCastArrayOfPointsToMultiPoint(i[1],e.spatialReference)),!(u instanceof a))throw new Error("Illegal Argument");if(!(l instanceof a))throw new Error("Illegal Argument");return m.distance(u,l,t.convertLinearUnitsToCode(o.defaultUndefined(i[2],-1)))}))},e.distancegeodetic=function(e,r){return n(e,r,(function(e,n,r){r=o.autoCastFeatureToGeometry(r),o.pcCheck(r,2,3);var i=r[0],u=r[1];if(!(i instanceof f))throw new Error("Illegal Argument");if(!(u instanceof f))throw new Error("Illegal Argument");var a=new s({paths:[],spatialReference:i.spatialReference});return a.addPath([i,u]),m.geodesicLength(a,t.convertLinearUnitsToCode(o.defaultUndefined(r[2],-1)))}))},e.densify=function(e,r){return n(e,r,(function(e,n,r){if(r=o.autoCastFeatureToGeometry(r),o.pcCheck(r,2,3),null===r[0])return null;if(!(r[0]instanceof a))throw new Error("Illegal Argument");var i=o.toNumber(r[1]);if(isNaN(i))throw new Error("Illegal Argument");if(i<=0)throw new Error("Illegal Argument");return r[0]instanceof c||r[0]instanceof s?m.densify(r[0],i,t.convertLinearUnitsToCode(o.defaultUndefined(r[2],-1))):r[0]instanceof u?m.densify(d(r[0]),i,t.convertLinearUnitsToCode(o.defaultUndefined(r[2],-1))):r[0]}))},e.densifygeodetic=function(e,r){return n(e,r,(function(e,n,r){if(r=o.autoCastFeatureToGeometry(r),o.pcCheck(r,2,3),null===r[0])return null;if(!(r[0]instanceof a))throw new Error("Illegal Argument");var i=o.toNumber(r[1]);if(isNaN(i))throw new Error("Illegal Argument");if(i<=0)throw new Error("Illegal Argument");return r[0]instanceof c||r[0]instanceof s?m.geodesicDensify(r[0],i,t.convertLinearUnitsToCode(o.defaultUndefined(r[2],-1))):r[0]instanceof u?m.geodesicDensify(d(r[0]),i,t.convertLinearUnitsToCode(o.defaultUndefined(r[2],-1))):r[0]}))},e.generalize=function(e,r){return n(e,r,(function(e,n,r){if(r=o.autoCastFeatureToGeometry(r),o.pcCheck(r,2,4),null===r[0])return null;if(!(r[0]instanceof a))throw new Error("Illegal Argument");var i=o.toNumber(r[1]);if(isNaN(i))throw new Error("Illegal Argument");return m.generalize(r[0],i,o.toBoolean(o.defaultUndefined(r[2],!0)),t.convertLinearUnitsToCode(o.defaultUndefined(r[3],-1)))}))},e.buffer=function(e,r){return n(e,r,(function(e,n,r){if(r=o.autoCastFeatureToGeometry(r),o.pcCheck(r,2,3),null===r[0])return null;if(!(r[0]instanceof a))throw new Error("Illegal Argument");var i=o.toNumber(r[1]);if(isNaN(i))throw new Error("Illegal Argument");return 0===i?t.cloneGeometry(r[0]):m.buffer(r[0],i,t.convertLinearUnitsToCode(o.defaultUndefined(r[2],-1)))}))},e.buffergeodetic=function(e,r){return n(e,r,(function(e,n,r){if(r=o.autoCastFeatureToGeometry(r),o.pcCheck(r,2,3),null===r[0])return null;if(!(r[0]instanceof a))throw new Error("Illegal Argument");var i=o.toNumber(r[1]);if(isNaN(i))throw new Error("Illegal Argument");return 0===i?t.cloneGeometry(r[0]):m.geodesicBuffer(r[0],i,t.convertLinearUnitsToCode(o.defaultUndefined(r[2],-1)))}))},e.offset=function(e,r){return n(e,r,(function(e,n,r){if(r=o.autoCastFeatureToGeometry(r),o.pcCheck(r,2,6),null===r[0])return null;if(!(r[0]instanceof c||r[0]instanceof s))throw new Error("Illegal Argument");var i=o.toNumber(r[1]);if(isNaN(i))throw new Error("Illegal Argument");var u=o.toNumber(o.defaultUndefined(r[4],10));if(isNaN(u))throw new Error("Illegal Argument");var a=o.toNumber(o.defaultUndefined(r[5],0));if(isNaN(a))throw new Error("Illegal Argument");return m.offset(r[0],i,t.convertLinearUnitsToCode(o.defaultUndefined(r[2],-1)),o.toString(o.defaultUndefined(r[3],"round")).toLowerCase(),u,a)}))},e.rotate=function(e,r){return n(e,r,(function(e,n,r){r=o.autoCastFeatureToGeometry(r),o.pcCheck(r,2,3);var t=r[0];if(null===t)return null;if(!(t instanceof a))throw new Error("Illegal Argument");t instanceof u&&(t=c.fromExtent(t));var i=o.toNumber(r[1]);if(isNaN(i))throw new Error("Illegal Argument");var l=o.defaultUndefined(r[2],null);if(null===l)return m.rotate(t,i);if(l instanceof f)return m.rotate(t,i,l);throw new Error("Illegal Argument")}))},e.centroid=function(e,r){return n(e,r,(function(n,r,g){if(g=o.autoCastFeatureToGeometry(g),o.pcCheck(g,1,1),null===g[0])return null;var m=g[0];if((o.isArray(g[0])||o.isImmutableArray(g[0]))&&(m=o.autoCastArrayOfPointsToMultiPoint(g[0],e.spatialReference)),null===m)return null;if(!(m instanceof a))throw new Error("Illegal Argument");return m instanceof f?o.fixSpatialReference(t.cloneGeometry(g[0]),e.spatialReference):m instanceof c?m.getCentroid():m instanceof s?i.centroidPolyline(m):m instanceof l?i.centroidMultiPoint(m):m instanceof u?m.getCenter():null}))},e.multiparttosinglepart=function(e,r){return n(e,r,(function(n,r,i){i=o.autoCastFeatureToGeometry(i),o.pcCheck(i,1,1);var d=[];if(null===i[0])return null;if(!(i[0]instanceof a))throw new Error("Illegal Argument");if(i[0]instanceof f)return[o.fixSpatialReference(t.cloneGeometry(i[0]),e.spatialReference)];if(i[0]instanceof u)return[o.fixSpatialReference(t.cloneGeometry(i[0]),e.spatialReference)];var h=m.simplify(i[0]);if(h instanceof c){for(var y=[],w=[],C=0;C<h.rings.length;C++)if(h.isClockwise(h.rings[C])){var p=g.fromJson({rings:[h.rings[C]],hasZ:!0===h.hasZ,hasM:!0===h.hasM,spatialReference:h.spatialReference.toJson()});y.push(p)}else w.push({ring:h.rings[C],pt:h.getPoint(C,0)});for(var A=0;A<w.length;A++)for(var T=0;T<y.length;T++)if(y[T].contains(w[A].pt)){y[T].addRing(w[A].ring);break}return y}if(h instanceof s){var v=[];for(C=0;C<h.paths.length;C++){var I=g.fromJson({paths:[h.paths[C]],hasZ:!0===h.hasZ,hasM:!0===h.hasM,spatialReference:h.spatialReference.toJson()});v.push(I)}return v}if(i[0]instanceof l){var E=o.fixSpatialReference(t.cloneGeometry(i[0]),e.spatialReference);for(C=0;C<E.points.length;C++)d.push(E.getPoint(C));return d}return null}))},e.issimple=function(e,r){return n(e,r,(function(e,n,r){if(r=o.autoCastFeatureToGeometry(r),o.pcCheck(r,1,1),null===r[0])return!0;if(!(r[0]instanceof a))throw new Error("Illegal Argument");return m.isSimple(r[0])}))},e.simplify=function(e,r){return n(e,r,(function(e,n,r){if(r=o.autoCastFeatureToGeometry(r),o.pcCheck(r,1,1),null===r[0])return null;if(!(r[0]instanceof a))throw new Error("Illegal Argument");return m.simplify(r[0])}))}}}));