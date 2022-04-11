/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./mat3f64","./quatf64","./vec3f64","./common","./vec3","./vec4"],(function(t,n,e,o,s,r,a){"use strict";function c(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function u(t,n,e){e*=.5;const o=Math.sin(e);return t[0]=o*n[0],t[1]=o*n[1],t[2]=o*n[2],t[3]=Math.cos(e),t}function i(t,n){const e=2*Math.acos(n[3]),o=Math.sin(e/2);return o>s.EPSILON?(t[0]=n[0]/o,t[1]=n[1]/o,t[2]=n[2]/o):(t[0]=1,t[1]=0,t[2]=0),e}function l(t,n,e){const o=n[0],s=n[1],r=n[2],a=n[3],c=e[0],u=e[1],i=e[2],l=e[3];return t[0]=o*l+a*c+s*i-r*u,t[1]=s*l+a*u+r*c-o*i,t[2]=r*l+a*i+o*u-s*c,t[3]=a*l-o*c-s*u-r*i,t}function h(t,n,e){e*=.5;const o=n[0],s=n[1],r=n[2],a=n[3],c=Math.sin(e),u=Math.cos(e);return t[0]=o*u+a*c,t[1]=s*u+r*c,t[2]=r*u-s*c,t[3]=a*u-o*c,t}function M(t,n,e){e*=.5;const o=n[0],s=n[1],r=n[2],a=n[3],c=Math.sin(e),u=Math.cos(e);return t[0]=o*u-r*c,t[1]=s*u+a*c,t[2]=r*u+o*c,t[3]=a*u-s*c,t}function f(t,n,e){e*=.5;const o=n[0],s=n[1],r=n[2],a=n[3],c=Math.sin(e),u=Math.cos(e);return t[0]=o*u+s*c,t[1]=s*u-o*c,t[2]=r*u+a*c,t[3]=a*u-r*c,t}function q(t,n){const e=n[0],o=n[1],s=n[2];return t[0]=e,t[1]=o,t[2]=s,t[3]=Math.sqrt(Math.abs(1-e*e-o*o-s*s)),t}function d(t,n,e,o){const r=n[0],a=n[1],c=n[2],u=n[3];let i,l,h,M,f,q=e[0],d=e[1],m=e[2],g=e[3];return l=r*q+a*d+c*m+u*g,l<0&&(l=-l,q=-q,d=-d,m=-m,g=-g),1-l>s.EPSILON?(i=Math.acos(l),h=Math.sin(i),M=Math.sin((1-o)*i)/h,f=Math.sin(o*i)/h):(M=1-o,f=o),t[0]=M*r+f*q,t[1]=M*a+f*d,t[2]=M*c+f*m,t[3]=M*u+f*g,t}function m(t){const n=s.RANDOM(),e=s.RANDOM(),o=s.RANDOM(),r=Math.sqrt(1-n),a=Math.sqrt(n);return t[0]=r*Math.sin(2*Math.PI*e),t[1]=r*Math.cos(2*Math.PI*e),t[2]=a*Math.sin(2*Math.PI*o),t[3]=a*Math.cos(2*Math.PI*o),t}function g(t,n){const e=n[0],o=n[1],s=n[2],r=n[3],a=e*e+o*o+s*s+r*r,c=a?1/a:0;return t[0]=-e*c,t[1]=-o*c,t[2]=-s*c,t[3]=r*c,t}function p(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t}function A(t,n){const e=n[0]+n[4]+n[8];let o;if(e>0)o=Math.sqrt(e+1),t[3]=.5*o,o=.5/o,t[0]=(n[5]-n[7])*o,t[1]=(n[6]-n[2])*o,t[2]=(n[1]-n[3])*o;else{let e=0;n[4]>n[0]&&(e=1),n[8]>n[3*e+e]&&(e=2);const s=(e+1)%3,r=(e+2)%3;o=Math.sqrt(n[3*e+e]-n[3*s+s]-n[3*r+r]+1),t[e]=.5*o,o=.5/o,t[3]=(n[3*s+r]-n[3*r+s])*o,t[s]=(n[3*s+e]+n[3*e+s])*o,t[r]=(n[3*r+e]+n[3*e+r])*o}return t}function x(t,n,e,o){const s=.5*Math.PI/180;n*=s,e*=s,o*=s;const r=Math.sin(n),a=Math.cos(n),c=Math.sin(e),u=Math.cos(e),i=Math.sin(o),l=Math.cos(o);return t[0]=r*u*l-a*c*i,t[1]=a*c*l+r*u*i,t[2]=a*u*i-r*c*l,t[3]=a*u*l+r*c*i,t}function y(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}const P=a.copy,I=a.set,E=a.add,L=l,O=a.scale,v=a.dot,z=a.lerp,N=a.length,b=N,j=a.squaredLength,S=j,_=a.normalize,D=a.exactEquals,R=a.equals;function T(t,n,e){const o=r.dot(n,e);return o<-.999999?(r.cross(V,W,n),r.len(V)<1e-6&&r.cross(V,X,n),r.normalize(V,V),u(t,V,Math.PI),t):o>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(r.cross(V,n,e),t[0]=V[0],t[1]=V[1],t[2]=V[2],t[3]=1+o,_(t,t))}const V=o.create(),W=o.fromValues(1,0,0),X=o.fromValues(0,1,0);function Y(t,n,e,o,s,r){return d(Z,n,s,r),d(k,e,o,r),d(t,Z,k,2*r*(1-r)),t}const Z=e.create(),k=e.create();function w(t,n,e,o){const s=B;return s[0]=e[0],s[3]=e[1],s[6]=e[2],s[1]=o[0],s[4]=o[1],s[7]=o[2],s[2]=-n[0],s[5]=-n[1],s[8]=-n[2],_(t,A(t,s))}const B=n.create(),C=Object.freeze(Object.defineProperty({__proto__:null,identity:c,setAxisAngle:u,getAxisAngle:i,multiply:l,rotateX:h,rotateY:M,rotateZ:f,calculateW:q,slerp:d,random:m,invert:g,conjugate:p,fromMat3:A,fromEuler:x,str:y,copy:P,set:I,add:E,mul:L,scale:O,dot:v,lerp:z,length:N,len:b,squaredLength:j,sqrLen:S,normalize:_,exactEquals:D,equals:R,rotationTo:T,sqlerp:Y,setAxes:w},Symbol.toStringTag,{value:"Module"}));t.add=E,t.calculateW=q,t.conjugate=p,t.copy=P,t.dot=v,t.equals=R,t.exactEquals=D,t.fromEuler=x,t.fromMat3=A,t.getAxisAngle=i,t.identity=c,t.invert=g,t.len=b,t.length=N,t.lerp=z,t.mul=L,t.multiply=l,t.normalize=_,t.quat=C,t.random=m,t.rotateX=h,t.rotateY=M,t.rotateZ=f,t.rotationTo=T,t.scale=O,t.set=I,t.setAxes=w,t.setAxisAngle=u,t.slerp=d,t.sqlerp=Y,t.sqrLen=S,t.squaredLength=j,t.str=y}));