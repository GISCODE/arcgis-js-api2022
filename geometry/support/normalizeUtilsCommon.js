/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../Polyline","../SpatialReference","./jsonUtils"],(function(e,n,t,i){"use strict";const a={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new n({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:t.WebMercator}),minus180Line:new n({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:t.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new n({paths:[[[180,-180],[180,180]]],spatialReference:t.WGS84}),minus180Line:new n({paths:[[[-180,-180],[-180,180]]],spatialReference:t.WGS84})}};function o(e,n){return Math.ceil((e-n)/(2*n))}function r(e,n){const t=s(e);for(const i of t)for(const e of i)e[0]+=n;return e}function s(e){return i.isPolygon(e)?e.rings:e.paths}function c(e){const n=(null==e?void 0:e.isWebMercator)?102100:4326;return[a[n].minX,a[n].maxX]}e.cutParams=a,e.getGeometryParts=s,e.getSpatialReferenceMinMaxX=c,e.offsetMagnitude=o,e.updatePolyGeometry=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));