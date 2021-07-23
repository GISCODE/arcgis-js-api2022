// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["require","exports","../../kernel","../kernel","../languageUtils","./centroid","../../geometry/Extent","../../geometry/Geometry","../../geometry/geometryEngineAsync","../../geometry/Multipoint","../../geometry/Point","../../geometry/Polygon","../../geometry/Polyline","../../geometry/jsonUtils"],(function(n,e,t,r,o,i,a,u,l,f,c,s,d,g){"use strict";function m(n){return 0===t.version.indexOf("4.")?s.fromExtent(n):new s({spatialReference:n.spatialReference,rings:[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]})}function y(n){if(o.pcCheck(n,2,2),n[0]instanceof u&&n[1]instanceof u);else if(n[0]instanceof u&&null===n[1]);else if(n[1]instanceof u&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new Error("Illegal Argument")}Object.defineProperty(e,"__esModule",{value:!0}),e.registerFunctions=void 0,e.registerFunctions=function(n){"async"===n.mode&&(n.functions.disjoint=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){return y(t=o.autoCastFeatureToGeometry(t)),null===t[0]||null===t[1]||l.disjoint(t[0],t[1])}))},n.functions.intersects=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){return y(t=o.autoCastFeatureToGeometry(t)),null!==t[0]&&null!==t[1]&&l.intersects(t[0],t[1])}))},n.functions.touches=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){return y(t=o.autoCastFeatureToGeometry(t)),null!==t[0]&&null!==t[1]&&l.touches(t[0],t[1])}))},n.functions.crosses=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){return y(t=o.autoCastFeatureToGeometry(t)),null!==t[0]&&null!==t[1]&&l.crosses(t[0],t[1])}))},n.functions.within=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){return y(t=o.autoCastFeatureToGeometry(t)),null!==t[0]&&null!==t[1]&&l.within(t[0],t[1])}))},n.functions.contains=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){return y(t=o.autoCastFeatureToGeometry(t)),null!==t[0]&&null!==t[1]&&l.contains(t[0],t[1])}))},n.functions.overlaps=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){return y(t=o.autoCastFeatureToGeometry(t)),null!==t[0]&&null!==t[1]&&l.overlaps(t[0],t[1])}))},n.functions.equals=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){return o.pcCheck(t,2,2),t[0]===t[1]||(t[0]instanceof u&&t[1]instanceof u?l.equals(t[0],t[1]):!(!o.isDate(t[0])||!o.isDate(t[1]))&&t[0].getTime()===t[1].getTime())}))},n.functions.relate=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(t=o.autoCastFeatureToGeometry(t),o.pcCheck(t,3,3),t[0]instanceof u&&t[1]instanceof u)return l.relate(t[0],t[1],o.toString(t[2]));if(t[0]instanceof u&&null===t[1])return!1;if(t[1]instanceof u&&null===t[0])return!1;if(null===t[0]&&null===t[1])return!1;throw new Error("Illegal Argument")}))},n.functions.intersection=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){return y(t=o.autoCastFeatureToGeometry(t)),null===t[0]||null===t[1]?null:l.intersect(t[0],t[1])}))},n.functions.union=function(e,t){return n.standardFunctionAsync(e,t,(function(n,t,i){var a=[];if(0===(i=o.autoCastFeatureToGeometry(i)).length)throw new Error("Function called with wrong number of Parameters");if(1===i.length)if(o.isArray(i[0])){for(var f=o.autoCastFeatureToGeometry(i[0]),c=0;c<f.length;c++)if(null!==f[c]){if(!(f[c]instanceof u))throw new Error("Illegal Argument");a.push(f[c])}}else{if(!o.isImmutableArray(i[0])){if(i[0]instanceof u)return o.fixSpatialReference(r.cloneGeometry(i[0]),e.spatialReference);if(null===i[0])return null;throw new Error("Illegal Argument")}var s=o.autoCastFeatureToGeometry(i[0].toArray());for(c=0;c<s.length;c++)if(null!==s[c]){if(!(s[c]instanceof u))throw new Error("Illegal Argument");a.push(s[c])}}else for(c=0;c<i.length;c++)if(null!==i[c]){if(!(i[c]instanceof u))throw new Error("Illegal Argument");a.push(i[c])}return 0===a.length?null:l.union(a)}))},n.functions.difference=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){return y(t=o.autoCastFeatureToGeometry(t)),null!==t[0]&&null===t[1]?r.cloneGeometry(t[0]):null===t[0]?null:l.difference(t[0],t[1])}))},n.functions.symmetricdifference=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){return y(t=o.autoCastFeatureToGeometry(t)),null===t[0]&&null===t[1]?null:null===t[0]?r.cloneGeometry(t[1]):null===t[1]?r.cloneGeometry(t[0]):l.symmetricDifference(t[0],t[1])}))},n.functions.clip=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(t=o.autoCastFeatureToGeometry(t),o.pcCheck(t,2,2),!(t[1]instanceof a)&&null!==t[1])throw new Error("Illegal Argument");if(null===t[0])return null;if(!(t[0]instanceof u))throw new Error("Illegal Argument");return null===t[1]?null:l.clip(t[0],t[1])}))},n.functions.cut=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(t=o.autoCastFeatureToGeometry(t),o.pcCheck(t,2,2),!(t[1]instanceof d)&&null!==t[1])throw new Error("Illegal Argument");if(null===t[0])return[];if(!(t[0]instanceof u))throw new Error("Illegal Argument");return null===t[1]?[r.cloneGeometry(t[0])]:l.cut(t[0],t[1])}))},n.functions.area=function(e,t){return n.standardFunctionAsync(e,t,(function(n,t,i){if(o.pcCheck(i,1,2),null===(i=o.autoCastFeatureToGeometry(i))[0])return 0;if(o.isFeatureSet(i[0]))return i[0].sumArea(r.convertSquareUnitsToCode(o.defaultUndefined(i[1],-1)),!1,e.abortSignal).then((function(n){if(e.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(o.isArray(i[0])||o.isImmutableArray(i[0])){var a=o.autoCastArrayOfPointsToPolygon(i[0],e.spatialReference);return null===a?0:l.planarArea(a,r.convertSquareUnitsToCode(o.defaultUndefined(i[1],-1)))}if(!(i[0]instanceof u))throw new Error("Illegal Argument");return l.planarArea(i[0],r.convertSquareUnitsToCode(o.defaultUndefined(i[1],-1)))}))},n.functions.areageodetic=function(e,t){return n.standardFunctionAsync(e,t,(function(n,t,i){if(o.pcCheck(i,1,2),null===(i=o.autoCastFeatureToGeometry(i))[0])return 0;if(o.isFeatureSet(i[0]))return i[0].sumArea(r.convertSquareUnitsToCode(o.defaultUndefined(i[1],-1)),!0,e.abortSignal).then((function(n){if(e.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(o.isArray(i[0])||o.isImmutableArray(i[0])){var a=o.autoCastArrayOfPointsToPolygon(i[0],e.spatialReference);return null===a?0:l.geodesicArea(a,r.convertSquareUnitsToCode(o.defaultUndefined(i[1],-1)))}if(!(i[0]instanceof u))throw new Error("Illegal Argument");return l.geodesicArea(i[0],r.convertSquareUnitsToCode(o.defaultUndefined(i[1],-1)))}))},n.functions.length=function(e,t){return n.standardFunctionAsync(e,t,(function(n,t,i){if(o.pcCheck(i,1,2),null===(i=o.autoCastFeatureToGeometry(i))[0])return 0;if(o.isFeatureSet(i[0]))return i[0].sumLength(r.convertLinearUnitsToCode(o.defaultUndefined(i[1],-1)),!1,e.abortSignal).then((function(n){if(e.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(o.isArray(i[0])||o.isImmutableArray(i[0])){var a=o.autoCastArrayOfPointsToPolyline(i[0],e.spatialReference);return null===a?0:l.planarLength(a,r.convertLinearUnitsToCode(o.defaultUndefined(i[1],-1)))}if(!(i[0]instanceof u))throw new Error("Illegal Argument");return l.planarLength(i[0],r.convertLinearUnitsToCode(o.defaultUndefined(i[1],-1)))}))},n.functions.lengthgeodetic=function(e,t){return n.standardFunctionAsync(e,t,(function(n,t,i){if(o.pcCheck(i,1,2),null===(i=o.autoCastFeatureToGeometry(i))[0])return 0;if(o.isFeatureSet(i[0]))return i[0].sumLength(r.convertLinearUnitsToCode(o.defaultUndefined(i[1],-1)),!0,e.abortSignal).then((function(n){if(e.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(o.isArray(i[0])||o.isImmutableArray(i[0])){var a=o.autoCastArrayOfPointsToPolyline(i[0],e.spatialReference);return null===a?0:l.geodesicLength(a,r.convertLinearUnitsToCode(o.defaultUndefined(i[1],-1)))}if(!(i[0]instanceof u))throw new Error("Illegal Argument");return l.geodesicLength(i[0],r.convertLinearUnitsToCode(o.defaultUndefined(i[1],-1)))}))},n.functions.distance=function(e,t){return n.standardFunctionAsync(e,t,(function(n,t,i){i=o.autoCastFeatureToGeometry(i),o.pcCheck(i,2,3);var a=i[0];(o.isArray(i[0])||o.isImmutableArray(i[0]))&&(a=o.autoCastArrayOfPointsToMultiPoint(i[0],e.spatialReference));var f=i[1];if((o.isArray(i[1])||o.isImmutableArray(i[1]))&&(f=o.autoCastArrayOfPointsToMultiPoint(i[1],e.spatialReference)),!(a instanceof u))throw new Error("Illegal Argument");if(!(f instanceof u))throw new Error("Illegal Argument");return l.distance(a,f,r.convertLinearUnitsToCode(o.defaultUndefined(i[2],-1)))}))},n.functions.distancegeodetic=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){t=o.autoCastFeatureToGeometry(t),o.pcCheck(t,2,3);var i=t[0],a=t[1];if(!(i instanceof c))throw new Error("Illegal Argument");if(!(a instanceof c))throw new Error("Illegal Argument");var u=new d({paths:[],spatialReference:i.spatialReference});return u.addPath([i,a]),l.geodesicLength(u,r.convertLinearUnitsToCode(o.defaultUndefined(t[2],-1)))}))},n.functions.densify=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(t=o.autoCastFeatureToGeometry(t),o.pcCheck(t,2,3),null===t[0])return null;if(!(t[0]instanceof u))throw new Error("Illegal Argument");var i=o.toNumber(t[1]);if(isNaN(i))throw new Error("Illegal Argument");if(i<=0)throw new Error("Illegal Argument");return t[0]instanceof s||t[0]instanceof d?l.densify(t[0],i,r.convertLinearUnitsToCode(o.defaultUndefined(t[2],-1))):t[0]instanceof a?l.densify(m(t[0]),i,r.convertLinearUnitsToCode(o.defaultUndefined(t[2],-1))):t[0]}))},n.functions.densifygeodetic=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(t=o.autoCastFeatureToGeometry(t),o.pcCheck(t,2,3),null===t[0])return null;if(!(t[0]instanceof u))throw new Error("Illegal Argument");var i=o.toNumber(t[1]);if(isNaN(i))throw new Error("Illegal Argument");if(i<=0)throw new Error("Illegal Argument");return t[0]instanceof s||t[0]instanceof d?l.geodesicDensify(t[0],i,r.convertLinearUnitsToCode(o.defaultUndefined(t[2],-1))):t[0]instanceof a?l.geodesicDensify(m(t[0]),i,r.convertLinearUnitsToCode(o.defaultUndefined(t[2],-1))):t[0]}))},n.functions.generalize=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(t=o.autoCastFeatureToGeometry(t),o.pcCheck(t,2,4),null===t[0])return null;if(!(t[0]instanceof u))throw new Error("Illegal Argument");var i=o.toNumber(t[1]);if(isNaN(i))throw new Error("Illegal Argument");return l.generalize(t[0],i,o.toBoolean(o.defaultUndefined(t[2],!0)),r.convertLinearUnitsToCode(o.defaultUndefined(t[3],-1)))}))},n.functions.buffer=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(t=o.autoCastFeatureToGeometry(t),o.pcCheck(t,2,3),null===t[0])return null;if(!(t[0]instanceof u))throw new Error("Illegal Argument");var i=o.toNumber(t[1]);if(isNaN(i))throw new Error("Illegal Argument");return 0===i?r.cloneGeometry(t[0]):l.buffer(t[0],i,r.convertLinearUnitsToCode(o.defaultUndefined(t[2],-1)))}))},n.functions.buffergeodetic=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(t=o.autoCastFeatureToGeometry(t),o.pcCheck(t,2,3),null===t[0])return null;if(!(t[0]instanceof u))throw new Error("Illegal Argument");var i=o.toNumber(t[1]);if(isNaN(i))throw new Error("Illegal Argument");return 0===i?r.cloneGeometry(t[0]):l.geodesicBuffer(t[0],i,r.convertLinearUnitsToCode(o.defaultUndefined(t[2],-1)))}))},n.functions.offset=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(t=o.autoCastFeatureToGeometry(t),o.pcCheck(t,2,6),null===t[0])return null;if(!(t[0]instanceof s||t[0]instanceof d))throw new Error("Illegal Argument");var i=o.toNumber(t[1]);if(isNaN(i))throw new Error("Illegal Argument");var a=o.toNumber(o.defaultUndefined(t[4],10));if(isNaN(a))throw new Error("Illegal Argument");var u=o.toNumber(o.defaultUndefined(t[5],0));if(isNaN(u))throw new Error("Illegal Argument");return l.offset(t[0],i,r.convertLinearUnitsToCode(o.defaultUndefined(t[2],-1)),o.toString(o.defaultUndefined(t[3],"round")).toLowerCase(),a,u)}))},n.functions.rotate=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){t=o.autoCastFeatureToGeometry(t),o.pcCheck(t,2,3);var r=t[0];if(null===r)return null;if(!(r instanceof u))throw new Error("Illegal Argument");r instanceof a&&(r=s.fromExtent(r));var i=o.toNumber(t[1]);if(isNaN(i))throw new Error("Illegal Argument");var f=o.defaultUndefined(t[2],null);if(null===f)return l.rotate(r,i);if(f instanceof c)return l.rotate(r,i,f);throw new Error("Illegal Argument")}))},n.functions.centroid=function(e,t){return n.standardFunctionAsync(e,t,(function(n,t,l){if(l=o.autoCastFeatureToGeometry(l),o.pcCheck(l,1,1),null===l[0])return null;var g=l[0];if((o.isArray(l[0])||o.isImmutableArray(l[0]))&&(g=o.autoCastArrayOfPointsToMultiPoint(l[0],e.spatialReference)),null===g)return null;if(!(g instanceof u))throw new Error("Illegal Argument");return g instanceof c?o.fixSpatialReference(r.cloneGeometry(l[0]),e.spatialReference):g instanceof s?g.getCentroid():g instanceof d?i.centroidPolyline(g):g instanceof f?i.centroidMultiPoint(g):g instanceof a?g.getCenter():null}))},n.functions.multiparttosinglepart=function(e,t){return n.standardFunctionAsync(e,t,(function(n,t,i){i=o.autoCastFeatureToGeometry(i),o.pcCheck(i,1,1);var m=[];if(null===i[0])return null;if(!(i[0]instanceof u))throw new Error("Illegal Argument");return i[0]instanceof c?[o.fixSpatialReference(r.cloneGeometry(i[0]),e.spatialReference)]:i[0]instanceof a?[o.fixSpatialReference(r.cloneGeometry(i[0]),e.spatialReference)]:l.simplify(i[0]).then((function(n){if(n instanceof s){for(var t=[],a=[],u=0;u<n.rings.length;u++)if(n.isClockwise(n.rings[u])){var l=g.fromJson({rings:[n.rings[u]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJson()});t.push(l)}else a.push({ring:n.rings[u],pt:n.getPoint(u,0)});for(var c=0;c<a.length;c++)for(var y=0;y<t.length;y++)if(t[y].contains(a[c].pt)){t[y].addRing(a[c].ring);break}return t}if(n instanceof d){var h=[];for(u=0;u<n.paths.length;u++){var A=g.fromJson({paths:[n.paths[u]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJson()});h.push(A)}return h}if(i[0]instanceof f){var w=o.fixSpatialReference(r.cloneGeometry(i[0]),e.spatialReference);for(u=0;u<w.points.length;u++)m.push(w.getPoint(u));return m}return null}))}))},n.functions.issimple=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(t=o.autoCastFeatureToGeometry(t),o.pcCheck(t,1,1),null===t[0])return!0;if(!(t[0]instanceof u))throw new Error("Illegal Argument");return l.isSimple(t[0])}))},n.functions.simplify=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(t=o.autoCastFeatureToGeometry(t),o.pcCheck(t,1,1),null===t[0])return null;if(!(t[0]instanceof u))throw new Error("Illegal Argument");return l.simplify(t[0])}))})}}));