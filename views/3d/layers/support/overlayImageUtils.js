/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../geometry/support/aaBoundingRect","../../webgl-engine/lib/Geometry","../../webgl-engine/lib/GeometryUtil","../../webgl-engine/lib/VertexAttribute"],(function(e,t,r,i,n){"use strict";function o(e,r,i){const n=t.width(e)/t.height(e),o={width:i,height:i};return n>1.0001?o.height=i/n:n<.9999&&(o.width=i*n),o.width=Math.round(o.width/(t.width(e)/t.width(r))),o.height=Math.round(o.height/(t.height(e)/t.height(r))),o}function a(e){return i.createSquareGeometry([[e[0],e[1],-1],[e[2],e[1],-1],[e[2],e[3],-1],[e[0],e[3],-1]])}function u(e,i){if(!t.intersects(e,i))return a(i);const o=[e[1]-i[1],Math.min(e[3],i[3])-Math.max(e[1],i[1]),i[3]-e[3],123456],u=[e[0]-i[0],Math.min(e[2],i[2])-Math.max(e[0],i[0]),i[2]-e[2],123456],c=i[2]-i[0],l=i[3]-i[1],g=u[0]>0&&u[2]>0?3:2,s=o[0]>0&&o[2]>0?3:2,d=(s+1)*(g+1),b=new Float64Array(3*d),m=new Float32Array(2*d),w=new Uint32Array(6*(s*g-1));let x=0,A=0,y=0,f=0,M=0;for(let t=0;t<4;t++){const e=o[t];if(e<=0)continue;let r=0;for(let n=0;n<4;n++){const e=u[n];e<=0||(b[A++]=i[0]+r,b[A++]=i[1]+x,b[A++]=-1,m[y++]=r/c,m[y++]=x/l,n<3&&t<3&&(1!==n||1!==t)&&(w[M++]=f,w[M++]=f+1,w[M++]=f+g+1,w[M++]=f+1,w[M++]=f+g+2,w[M++]=f+g+1),f++,r+=e)}x+=e}const V=new Uint32Array(w.length);return new r.Geometry([[n.VertexAttribute.POSITION,{size:3,data:b,exclusive:!0}],[n.VertexAttribute.NORMAL,{size:3,data:h,exclusive:!0}],[n.VertexAttribute.UV0,{size:2,data:m,exclusive:!0}]],[[n.VertexAttribute.POSITION,w],[n.VertexAttribute.NORMAL,V],[n.VertexAttribute.UV0,w]])}const h=[0,0,1];e.computeImageExportSize=o,e.createGeometryForExtent=a,e.createOuterImageGeometry=u,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
