/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../geometry/support/buffer/math/common"],(function(e,t){"use strict";function r(e,r,f){if(e.count!==r.count)return void t.mathLogger.error("source and destination buffers need to have the same number of elements");const o=e.count,n=f[0],u=f[1],d=f[2],c=f[3],i=f[4],s=f[5],a=f[6],p=f[7],m=f[8],y=f[9],B=f[10],h=f[11],l=f[12],S=f[13],g=f[14],b=f[15],M=e.typedBuffer,v=e.typedBufferStride,_=r.typedBuffer,j=r.typedBufferStride;for(let t=0;t<o;t++){const e=t*v,r=t*j,f=_[r],o=_[r+1],L=_[r+2],O=_[r+3];M[e]=n*f+i*o+m*L+l*O,M[e+1]=u*f+s*o+y*L+S*O,M[e+2]=d*f+a*o+B*L+g*O,M[e+3]=c*f+p*o+h*L+b*O}}function f(e,r,f){if(e.count!==r.count)return void t.mathLogger.error("source and destination buffers need to have the same number of elements");const o=e.count,n=f[0],u=f[1],d=f[2],c=f[3],i=f[4],s=f[5],a=f[6],p=f[7],m=f[8],y=e.typedBuffer,B=e.typedBufferStride,h=r.typedBuffer,l=r.typedBufferStride;for(let t=0;t<o;t++){const e=t*B,r=t*l,f=h[r],o=h[r+1],S=h[r+2],g=h[r+3];y[e]=n*f+c*o+a*S,y[e+1]=u*f+i*o+p*S,y[e+2]=d*f+s*o+m*S,y[e+3]=g}}function o(e,t,r){const f=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let c=0;c<f;c++){const e=c*n,t=c*d;o[e]=r*u[t],o[e+1]=r*u[t+1],o[e+2]=r*u[t+2],o[e+3]=r*u[t+3]}}function n(e,t,r){const f=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let c=0;c<f;c++){const e=c*n,t=c*d;o[e]=u[t]>>r,o[e+1]=u[t+1]>>r,o[e+2]=u[t+2]>>r,o[e+3]=u[t+3]>>r}}const u=Object.freeze(Object.defineProperty({__proto__:null,transformMat4:r,transformMat3:f,scale:o,shiftRight:n},Symbol.toStringTag,{value:"Module"}));e.scale=o,e.shiftRight=n,e.transformMat3=f,e.transformMat4=r,e.vec4=u}));
