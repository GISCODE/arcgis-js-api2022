/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./contains"],(function(t,n){"use strict";function e(t,e){return n.extentContainsPoint(t,e)}function r(t,n){const e=t.hasZ&&n.hasZ;let r,o,i;if(t.xmin<=n.xmin){if(r=n.xmin,t.xmax<r)return!1}else if(r=t.xmin,n.xmax<r)return!1;if(t.ymin<=n.ymin){if(o=n.ymin,t.ymax<o)return!1}else if(o=t.ymin,n.ymax<o)return!1;if(e&&n.hasZ)if(t.zmin<=n.zmin){if(i=n.zmin,t.zmax<i)return!1}else if(i=t.zmin,n.zmax<i)return!1;return!0}function o(t,e){const{points:r,hasZ:o}=e,i=o?n.extentContainsCoords3D:n.extentContainsCoords2D;for(const n of r)if(i(t,n))return!0;return!1}const i=[0,0],s=[0,0],c=[0,0],f=[0,0],u=[i,s,c,f],l=[[c,i],[i,s],[s,f],[f,c]];function x(t,e){i[0]=t.xmin,i[1]=t.ymax,s[0]=t.xmax,s[1]=t.ymax,c[0]=t.xmin,c[1]=t.ymin,f[0]=t.xmax,f[1]=t.ymin;for(const r of u)if(n.polygonContainsCoords(e,r))return!0;for(const r of e.rings){if(!r.length)continue;let e=r[0];if(n.extentContainsCoords2D(t,e))return!0;for(let o=1;o<r.length;o++){const i=r[o];if(n.extentContainsCoords2D(t,i)||g(e,i,l))return!0;e=i}}return!1}function a(t,e){i[0]=t.xmin,i[1]=t.ymax,s[0]=t.xmax,s[1]=t.ymax,c[0]=t.xmin,c[1]=t.ymin,f[0]=t.xmax,f[1]=t.ymin;const r=e.paths;for(const o of r){if(!r.length)continue;let e=o[0];if(n.extentContainsCoords2D(t,e))return!0;for(let r=1;r<o.length;r++){const i=o[r];if(n.extentContainsCoords2D(t,i)||g(e,i,l))return!0;e=i}}return!1}const m=[0,0];function y(t){for(let n=0;n<t.length;n++){const e=t[n];for(let o=0;o<e.length-1;o++){const r=e[o],i=e[o+1];for(let e=n+1;e<t.length;e++)for(let n=0;n<t[e].length-1;n++){const o=t[e][n],s=t[e][n+1];if(h(r,i,o,s,m)&&!(m[0]===r[0]&&m[1]===r[1]||m[0]===o[0]&&m[1]===o[1]||m[0]===i[0]&&m[1]===i[1]||m[0]===s[0]&&m[1]===s[1]))return!0}}const r=e.length;if(!(r<=4))for(let t=0;t<r-3;t++){let n=r-1;0===t&&(n=r-2);const o=e[t],i=e[t+1];for(let r=t+2;r<n;r++){const t=e[r],n=e[r+1];if(h(o,i,t,n,m)&&!(m[0]===o[0]&&m[1]===o[1]||m[0]===t[0]&&m[1]===t[1]||m[0]===i[0]&&m[1]===i[1]||m[0]===n[0]&&m[1]===n[1]))return!0}}}return!1}function g(t,n,e){for(let r=0;r<e.length;r++)if(h(t,n,e[r][0],e[r][1]))return!0;return!1}function h(t,n,e,r,o){const[i,s]=t,[c,f]=n,[u,l]=e,[x,a]=r,m=x-u,y=i-u,g=c-i,h=a-l,C=s-l,p=f-s,d=h*g-m*p;if(0===d)return!1;const I=(m*C-h*y)/d,P=(g*C-p*y)/d;return I>=0&&I<=1&&P>=0&&P<=1&&(o&&(o[0]=i+I*(c-i),o[1]=s+I*(f-s)),!0)}function C(t){switch(t){case"esriGeometryEnvelope":case"extent":return r;case"esriGeometryMultipoint":case"multipoint":return o;case"esriGeometryPoint":case"point":return e;case"esriGeometryPolygon":case"polygon":return x;case"esriGeometryPolyline":case"polyline":return a}}t.extentIntersectsExtent=r,t.extentIntersectsMultipoint=o,t.extentIntersectsPoint=e,t.extentIntersectsPolygon=x,t.extentIntersectsPolyline=a,t.getFeatureExtentIntersector=C,t.isSelfIntersecting=y,t.segmentIntersects=h,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
