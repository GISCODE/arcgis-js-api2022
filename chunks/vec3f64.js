/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function e(){return[0,0,0]}function t(n){return[n[0],n[1],n[2]]}function r(n,e,t){return[n,e,t]}function u(n){const t=e(),r=Math.min(3,n.length);for(let e=0;e<r;++e)t[e]=n[e];return t}function o(n,e){return new Float64Array(n,e,3)}function i(){return e()}function c(){return r(1,1,1)}function f(){return r(1,0,0)}function a(){return r(0,1,0)}function l(){return r(0,0,1)}const s=i(),_=c(),N=f(),T=a(),m=l(),I=Object.freeze(Object.defineProperty({__proto__:null,create:e,clone:t,fromValues:r,fromArray:u,createView:o,zeros:i,ones:c,unitX:f,unitY:a,unitZ:l,ZEROS:s,ONES:_,UNIT_X:N,UNIT_Y:T,UNIT_Z:m},Symbol.toStringTag,{value:"Module"}));n.ONES=_,n.UNIT_X=N,n.UNIT_Y=T,n.UNIT_Z=m,n.ZEROS=s,n.clone=t,n.create=e,n.createView=o,n.fromArray=u,n.fromValues=r,n.ones=c,n.unitX=f,n.unitY=a,n.unitZ=l,n.vec3f64=I,n.zeros=i}));