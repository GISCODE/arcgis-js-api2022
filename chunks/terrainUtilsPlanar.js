/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../core/Error","../core/maybe","./vec3","./vec3f64","../geometry/projection","../geometry/support/aaBoundingRect","../views/3d/terrain/TerrainConst","../views/3d/terrain/TilingScheme"],(function(e,t,n,o,r,i,c,s,a){"use strict";const l=r.create(),u=r.create(),f=r.create(),h=r.create();function g(e,t,o=0){const r=e.extent;if(n.isNone(r))return!1;if(0===o)return c.containsPoint(r,t);const i=Math.min(r[2]-r[0],r[3]-r[1]);return c.containsPointWithMargin(r,t,o*i)}function d(e,t,n,r){o.copy(l,n),l[r]=t[r];const i=o.subtract(l,l,t),c=o.subtract(u,e,t),s=o.dot(c,i),a=o.dot(i,i);let f;f=s<=0?t:a<=s?n:o.add(l,t,o.scale(i,i,s/a));const h=o.subtract(l,e,f);return Math.PI/2-Math.atan(h[2]/Math.sqrt(h[0]*h[0]+h[1]*h[1]))}function p(e,t,o){const r=e.extent;if(n.isNone(r))return 0;f[0]=r[0],f[1]=r[1],f[2]=o,h[0]=r[2],h[1]=r[3],h[2]=o;let i=1/0,c=1/0;return t[0]<f[0]?i=d(t,f,h,0):t[0]>h[0]&&(i=d(t,h,f,0)),t[1]<f[1]?c=d(t,f,h,1):t[1]>h[1]&&(c=d(t,h,f,1)),Math.min(i,c)}function m(e,o,r){if(n.isNone(e))return a.getMissingTileInfoError();if(e.spatialReference.isGeographic&&!i.canProjectToWGS84ComparableLonLat(e.spatialReference))return new t("tilingscheme:local-unsupported-spatial-reference","The tiling scheme spatial reference is not supported in local scenes");const c=a.default.checkUnsupported(e);if(n.isSome(c))return c;const s=S(e,r);if(s)return s;const l=e.spatialReference;return o&&!(l.equals(o)||o.isWGS84&&l.isWebMercator)?new t("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the local scene"):null}function S(e,n){const o=e.lods,r=o[0].resolution*2**o[0].level,i=[r*e.size[0],r*e.size[1]],l=[e.origin.x,e.origin.y],u=c.fromExtent(n),f=c.create();a.default.computeRowColExtent(u,i,l,f);const h=(f[2]-f[0])*(f[3]-f[1]);if(h>s.MAX_ROOT_TILES){const n=o[0].scale*2**o[0].level;let i=Math.max((u[3]-u[1])/e.size[1],(u[2]-u[0])/e.size[0])*n/r;const c=Math.floor(Math.log(i)/Math.log(10));return i=Math.ceil(i/10**c)*10**c,new t("tilingscheme:too-many-root-tiles","Scale of level 0 of the tiling scheme (1:"+Math.floor(n).toLocaleString()+") is too large for the layer's extent. Suggested scale: 1:"+i.toLocaleString()+".",{level0Scale:n,suggestedLevel0Scale:i,requiredNumRootTiles:h,allowedNumRootTiles:s.MAX_ROOT_TILES})}return null}const M=Object.freeze(Object.defineProperty({__proto__:null,isInsideExtent:g,tiltToExtentEdge:p,checkIfTileInfoSupportedForViewSR:m},Symbol.toStringTag,{value:"Module"}));e.checkIfTileInfoSupportedForViewSR=m,e.isInsideExtent=g,e.terrainUtilsPlanar=M,e.tiltToExtentEdge=p}));