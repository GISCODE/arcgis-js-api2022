/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/PooledArray","../../../../../chunks/mat3","../../../../../chunks/mat3f64","../../../../../chunks/quat","../../../../../chunks/quatf64","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../geometry/support/plane","../../../support/orientedBoundingBox","../../lib/depthRange"],(function(e,t,n,r,a,o,c,s,u,l,i){"use strict";function f(e,t){const n=i.empty(),{eye:r,frustum:a,viewForward:o}=e;t.forAll((e=>{const t=e.obb,s=c.dot(c.sub(A,t.center,r),o),u=l.projectedRadius(t,o);if(i.within(n,s-u)&&i.within(n,s+u))return;const f=v(t,a);if(-1===f)return;if(0===f)return d.far=s+u,d.near=s-u,void i.union(n,d);const p=h.pushNew();p.near=s-u,p.far=s+u,p.mask=f,p.object=e}));for(let s=0;s<h.length;s++){const e=h.data[s];if(i.within(n,e.near)&&i.within(n,e.far))continue;d.far=e.far,d.near=1/0;const t=y(e.object.obb,r,m,(t=>{let n=b;for(let r=0;r<z&&t.length>0;r++){if(0==(e.mask&1<<r))continue;w(a[r],t,n);const o=t;t=n,n=o}for(let e=0;e<t.length;e+=3){c.set(p,t.data[e+0],t.data[e+1],t.data[e+2]);const n=c.dot(c.sub(p,p,r),o);d.near=Math.min(d.near,n)}}));0===t&&(d.near=0),i.union(n,d)}return h.length=0,n}const h=new t({allocator:e=>e||{near:1/0,far:-1/0,mask:0,object:null},deallocator:e=>(e.object=null,e)}),d=i.empty(),p=s.create(),g=s.create(),m=new t({deallocator:null}),b=new t({deallocator:null});function w(e,t,n){n.length=0;const r=t.length-3;k(p,t,r);const a=u.signedDistance(e,p);a<=0&&(n.push(p[0]),n.push(p[1]),n.push(p[2]));let o=0,s=a;for(;o<r;o+=3){k(g,t,o);const r=u.signedDistance(e,g);if(s*r<0){const e=r/(r-s);c.lerp(p,g,p,e),S(n,p)}r<=0&&S(n,g),s=r,c.copy(p,g)}if(s*a<0){k(g,t,r);const e=a/(a-s);c.lerp(p,g,p,e),S(n,p)}}function k(e,t,n){return c.set(e,t.data[n+0],t.data[n+1],t.data[n+2])}function S(e,t){e.push(t[0]),e.push(t[1]),e.push(t[2])}function y(e,t,r,o){a.conjugate(M,e.quaternion),c.sub(A,t,e.center),c.transformQuat(A,A,M);const s=8*((A[0]<-e.halfSize[0]?-1:A[0]>e.halfSize[0]?1:0)+3*(A[1]<-e.halfSize[1]?-1:A[1]>e.halfSize[1]?1:0)+9*(A[2]<-e.halfSize[2]?-1:A[2]>e.halfSize[2]?1:0)+13),u=j[s];if(0===u)return u;n.fromQuat(q,e.quaternion),n.scale(q,q,e.halfSize);const l=(t,n)=>{const r=j[s+n+1];return c.set(t,((1&r)<<1)-1,(2&r)-1,((4&r)>>1)-1),c.transformMat3(t,t,q),c.add(t,e.center,t)};return r.length=0,S(r,l(D,0)),S(r,l(P,1)),S(r,l(A,2)),S(r,l(R,3)),o(r),1===u?u:(r.length=0,S(r,D),S(r,R),S(r,l(A,4)),S(r,l(x,5)),o(r),2===u||(r.length=0,S(r,D),S(r,x),S(r,l(A,6)),S(r,P),o(r)),u)}const j=(()=>{const e=new Int8Array(216);let t=0;const n=n=>{for(let r=0;r<n.length;r++)e[t+r]=n[r];t+=8};return n([3,0,6,2,3,1,5,4]),n([2,0,2,3,1,5,4,0]),n([3,1,0,2,3,7,5,4]),n([2,0,1,3,2,6,4,0]),n([1,0,1,3,2,0,0,0]),n([2,1,5,7,3,2,0,0]),n([3,2,0,1,3,7,6,4]),n([2,2,0,1,3,7,6,0]),n([3,3,0,1,5,7,6,2]),n([2,0,1,5,4,6,2,0]),n([1,0,1,5,4,0,0,0]),n([2,1,3,7,5,4,0,0]),n([1,0,2,6,4,0,0,0]),n([0,0,0,0,0,0,0,0]),n([1,1,3,7,5,0,0,0]),n([2,2,3,7,6,4,0,0]),n([1,2,3,7,6,0,0,0]),n([2,3,1,5,7,6,2,0]),n([3,4,0,1,5,7,6,2]),n([2,5,7,6,4,0,1,0]),n([3,5,0,1,3,7,6,4]),n([2,4,5,7,6,2,0,0]),n([1,4,5,7,6,0,0,0]),n([2,5,1,3,7,6,4,0]),n([3,6,0,2,3,7,5,4]),n([2,6,2,3,7,5,4,0]),n([3,7,6,2,3,1,5,4]),e})(),z=4;function v(e,t){let n=0;for(let r=0;r<z;r++){const a=l.intersectPlane(e,t[r]);if(a>0)return-1;0===a&&(n|=1<<r)}return n}const q=r.create(),M=o.create(),A=s.create(),D=s.create(),P=s.create(),R=s.create(),x=s.create();e.computeDepthRange=f,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
