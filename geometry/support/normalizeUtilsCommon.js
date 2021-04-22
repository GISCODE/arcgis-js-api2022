/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../SpatialReference","../Polyline","./jsonUtils"],(function(e,n,t,i){"use strict";const a={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new t({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:n.WebMercator}),minus180Line:new t({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:n.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new t({paths:[[[180,-180],[180,180]]],spatialReference:n.WGS84}),minus180Line:new t({paths:[[[-180,-180],[-180,180]]],spatialReference:n.WGS84})}};function r(e,n){return Math.ceil((e-n)/(2*n))}function s(e,n){const t=o(e);for(const i of t)for(const e of i)e[0]+=n;return e}function o(e){return i.isPolygon(e)?e.rings:e.paths}function c(e){const n=(null==e?void 0:e.isWebMercator)?102100:4326;return[a[n].minX,a[n].maxX]}e.cutParams=a,e.getGeometryParts=o,e.getSpatialReferenceMinMaxX=c,e.offsetMagnitude=r,e.updatePolyGeometry=s,Object.defineProperty(e,"__esModule",{value:!0})}));