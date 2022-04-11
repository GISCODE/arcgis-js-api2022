/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../geometry","../../core/maybe","../../core/unitUtils","../../renderers/support/clickToleranceUtils","../../geometry/Extent"],(function(e,t,r,n,a,i){"use strict";function o(e,t,a,o=new i){let s;if("2d"===a.type)s=t*a.resolution;else if("3d"===a.type){const i=a.overlayPixelSizeInMapUnits(e),o=a.basemapSpatialReference;s=r.isSome(o)&&!o.equals(a.spatialReference)?n.getMetersPerUnitForSR(o)/n.getMetersPerUnitForSR(a.spatialReference):t*i}const c=e.x-s,l=e.y-s,u=e.x+s,m=e.y+s,{spatialReference:p}=a;return o.xmin=Math.min(c,u),o.ymin=Math.min(l,m),o.xmax=Math.max(c,u),o.ymax=Math.max(l,m),o.spatialReference=p,o}function s(e,t,n){const i=n.toMap(e);if(r.isNone(i))return!1;return o(i,a.calculateTolerance(),n,c).intersects(t)}const c=new i;e.createQueryGeometry=o,e.intersectsDrapedGeometry=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
