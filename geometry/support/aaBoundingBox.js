/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe","../Extent","./aaBoundingRect"],(function(n,t,e,i){"use strict";function a(n){return n}function r(n=k){return a([n[0],n[1],n[2],n[3],n[4],n[5]])}function u(n,t,e,i,a,u,o=r()){return o[0]=n,o[1]=t,o[2]=e,o[3]=i,o[4]=a,o[5]=u,o}function o(n,t=r()){return t[0]=n.xmin,t[1]=n.ymin,t[2]=n.zmin,t[3]=n.xmax,t[4]=n.ymax,t[5]=n.zmax,t}function m(n,t){const i=isFinite(n[2])||isFinite(n[5]);return new e(i?{xmin:n[0],xmax:n[3],ymin:n[1],ymax:n[4],zmin:n[2],zmax:n[5],spatialReference:t}:{xmin:n[0],xmax:n[3],ymin:n[1],ymax:n[4],spatialReference:t})}function f(n,t,e=r()){return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=t[0],e[4]=t[1],e[5]=t[2],e}function c(n,t){n[0]=Math.min(n[0],t[0]),n[1]=Math.min(n[1],t[1]),n[2]=Math.min(n[2],t[2]),n[3]=Math.max(n[3],t[3]),n[4]=Math.max(n[4],t[4]),n[5]=Math.max(n[5],t[5])}function h(n,t){n[0]=Math.min(n[0],t[0]),n[1]=Math.min(n[1],t[1]),n[3]=Math.max(n[3],t[2]),n[4]=Math.max(n[4],t[3])}function M(n,t){n[0]=Math.min(n[0],t[0]),n[1]=Math.min(n[1],t[1]),n[2]=Math.min(n[2],t[2]),n[3]=Math.max(n[3],t[0]),n[4]=Math.max(n[4],t[1]),n[5]=Math.max(n[5],t[2])}function x(n,t,e=0,i=t.length/3){let a=n[0],r=n[1],u=n[2],o=n[3],m=n[4],f=n[5];for(let c=0;c<i;c++)a=Math.min(a,t[e+3*c]),r=Math.min(r,t[e+3*c+1]),u=Math.min(u,t[e+3*c+2]),o=Math.max(o,t[e+3*c]),m=Math.max(m,t[e+3*c+1]),f=Math.max(f,t[e+3*c+2]);n[0]=a,n[1]=r,n[2]=u,n[3]=o,n[4]=m,n[5]=f}function s(n,t,e,i){n[0]=Math.min(n[0],n[0]+t),n[3]=Math.max(n[3],n[3]+t),n[1]=Math.min(n[1],n[1]+e),n[4]=Math.max(n[4],n[4]+e),n[2]=Math.min(n[2],n[2]+i),n[5]=Math.max(n[5],n[5]+i)}function l(n,t,e){const i=t.length;let a=n[0],r=n[1],u=n[2],o=n[3],m=n[4],f=n[5];if(e)for(let c=0;c<i;c++){const n=t[c];a=Math.min(a,n[0]),r=Math.min(r,n[1]),u=Math.min(u,n[2]),o=Math.max(o,n[0]),m=Math.max(m,n[1]),f=Math.max(f,n[2])}else for(let c=0;c<i;c++){const n=t[c];a=Math.min(a,n[0]),r=Math.min(r,n[1]),o=Math.max(o,n[0]),m=Math.max(m,n[1])}n[0]=a,n[1]=r,n[2]=u,n[3]=o,n[4]=m,n[5]=f}function I(n){for(let t=0;t<6;t++)if(!isFinite(n[t]))return!1;return!0}function N(n){return n[0]>=n[3]?0:n[3]-n[0]}function d(n){return n[1]>=n[4]?0:n[4]-n[1]}function p(n){return n[2]>=n[5]?0:n[5]-n[2]}function g(n){const t=N(n),e=p(n),i=d(n);return Math.sqrt(t*t+e*e+i*i)}function y(n,t=[0,0,0]){return t[0]=n[0]+N(n)/2,t[1]=n[1]+d(n)/2,t[2]=n[2]+p(n)/2,t}function E(n,t=[0,0,0]){return t[0]=N(n),t[1]=d(n),t[2]=p(n),t}function T(n){return Math.max(N(n),p(n),d(n))}function F(n,t){return t[0]>=n[0]&&t[1]>=n[1]&&t[2]>=n[2]&&t[0]<=n[3]&&t[1]<=n[4]&&t[2]<=n[5]}function R(n,t,e){return t[0]>=n[0]-e&&t[1]>=n[1]-e&&t[2]>=n[2]-e&&t[0]<=n[3]+e&&t[1]<=n[4]+e&&t[2]<=n[5]+e}function W(n,t){return t[0]>=n[0]&&t[1]>=n[1]&&t[2]>=n[2]&&t[3]<=n[3]&&t[4]<=n[4]&&t[5]<=n[5]}function A(n,t){return Math.max(t[0],n[0])<=Math.min(t[3],n[3])&&Math.max(t[1],n[1])<=Math.min(t[4],n[4])&&Math.max(t[2],n[2])<=Math.min(t[5],n[5])}function P(n,e){return!!t.isNone(e)||A(n,e)}function V(n,t,e,i,a=n){return a[0]=n[0]+t,a[1]=n[1]+e,a[2]=n[2]+i,a[3]=n[3]+t,a[4]=n[4]+e,a[5]=n[5]+i,a}function _(n,t,e=n){const i=n[0]+N(n)/2,a=n[1]+d(n)/2,r=n[2]+p(n)/2;return e[0]=i+(n[0]-i)*t,e[1]=a+(n[1]-a)*t,e[2]=r+(n[2]-r)*t,e[3]=i+(n[3]-i)*t,e[4]=a+(n[4]-a)*t,e[5]=r+(n[5]-r)*t,e}function b(n,t){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function z(n,t){return t[0]=n[3],t[1]=n[4],t[2]=n[5],t}function O(n,t,e=n){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e!==n&&(e[3]=n[3],e[4]=n[4],e[5]=n[5]),e}function B(n,t,e=n){return e[3]=t[0],e[4]=t[1],e[5]=t[2],e!==n&&(e[0]=n[0],e[1]=n[1],e[2]=n[2]),n}function S(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n}function Y(n){return n?S(n,Z):r(Z)}function w(n,t){return t||(t=i.create()),t[0]=n[0],t[1]=n[1],t[2]=n[3],t[3]=n[4],t}function q(n,t){return n[0]=t[0],n[1]=t[1],n[2]=Number.NEGATIVE_INFINITY,n[3]=t[2],n[4]=t[3],n[5]=Number.POSITIVE_INFINITY,n}function v(n){return 6===n.length}function G(n){return 0===N(n)&&0===d(n)&&0===p(n)}function j(n,e,i){if(t.isNone(n)||t.isNone(e))return n===e;if(!v(n)||!v(e))return!1;if(i){for(let t=0;t<n.length;t++)if(!i(n[t],e[t]))return!1}else for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function C(n,t,e,i,a,r){return u(n,t,e,i,a,r,H)}const D=a([-1/0,-1/0,-1/0,1/0,1/0,1/0]),Z=a([1/0,1/0,1/0,-1/0,-1/0,-1/0]),k=a([0,0,0,0,0,0]),H=r();n.NEGATIVE_INFINITY=Z,n.POSITIVE_INFINITY=D,n.ZERO=k,n.allFinite=I,n.center=y,n.contains=W,n.containsPoint=F,n.containsPointWithMargin=R,n.create=r,n.depth=d,n.diameter=g,n.empty=Y,n.equals=j,n.expandWithAABB=c,n.expandWithBuffer=x,n.expandWithNestedArray=l,n.expandWithOffset=s,n.expandWithRect=h,n.expandWithVec3=M,n.fromExtent=o,n.fromMinMax=f,n.fromRect=q,n.fromValues=u,n.getMax=z,n.getMin=b,n.height=p,n.intersects=A,n.intersectsClippingArea=P,n.is=v,n.isPoint=G,n.maximumDimension=T,n.offset=V,n.scale=_,n.set=S,n.setMax=B,n.setMin=O,n.size=E,n.toExtent=m,n.toRect=w,n.width=N,n.wrap=C,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
