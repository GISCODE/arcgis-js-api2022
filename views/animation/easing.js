/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";function u(t){return t}const i=t=>t*t,n=t=>1-i(1-t),o=t=>t<.5?i(2*t)/2:(n(2*(t-.5))+1)/2,a=t=>t*t*t,c=t=>1-a(1-t),s=t=>t<.5?a(2*t)/2:(c(2*(t-.5))+1)/2,r=t=>t*t*t*t,e=t=>1-r(1-t),C=t=>t<.5?r(2*t)/2:(e(2*(t-.5))+1)/2,q=t=>t*t*t*t*t,Q=t=>1-q(1-t),d=t=>t<.5?q(2*t)/2:(Q(2*(t-.5))+1)/2,b=t=>1-Math.cos(t*Math.PI/2),O=t=>1-b(1-t),p=t=>t<.5?b(2*t)/2:(O(2*(t-.5))+1)/2,l=t=>2**(10*(t-1)),x=t=>1-l(1-t),f=t=>t<.5?l(2*t)/2:(x(2*(t-.5))+1)/2,M=t=>-(Math.sqrt(1-t*t)-1),S=t=>1-M(1-t),h=t=>t<.5?M(2*t)/2:(S(2*(t-.5))+1)/2;function E(t){const u=2*(t-Math.sqrt((t-1)*t)),i=u/2/t;return n=>n<i?t*n*n:u*n-u+1}function g(t,u){return(i,n)=>i<u?u*t(i/u,n):1-t((1-i)/(1-u),n)*(1-u)}const v=g(E(1),1),P=g(E(1),0),_=g(E(1),.5),j=g(E(2),1),m=g(E(2),0),y=g(E(2),.5),F=g(E(3),1),I=g(E(3),0),T=g(E(3),.5),k=g(E(4),1),w=g(E(4),0),z=g(E(4),.5),A={linear:u,"in-quad":i,"out-quad":n,"in-out-quad":o,"in-coast-quad":v,"out-coast-quad":P,"in-out-coast-quad":_,"in-cubic":a,"out-cubic":c,"in-out-cubic":s,"in-coast-cubic":j,"out-coast-cubic":m,"in-out-coast-cubic":y,"in-quart":r,"out-quart":e,"in-out-quart":C,"in-coast-quart":F,"out-coast-quart":I,"in-out-coast-quart":T,"in-quint":q,"out-quint":Q,"in-out-quint":d,"in-coast-quint":k,"out-coast-quint":w,"in-out-coast-quint":z,"in-sine":b,"out-sine":O,"in-out-sine":p,"in-expo":l,"out-expo":x,"in-out-expo":f,"in-circ":M,"out-circ":S,"in-out-circ":h};t.EasingFunctions=A,t.inCirc=M,t.inCoastCubic=j,t.inCoastQuad=v,t.inCoastQuart=F,t.inCoastQuint=k,t.inCubic=a,t.inExpo=l,t.inOutCirc=h,t.inOutCoastCubic=y,t.inOutCoastQuad=_,t.inOutCoastQuart=T,t.inOutCoastQuint=z,t.inOutCubic=s,t.inOutExpo=f,t.inOutQuad=o,t.inOutQuart=C,t.inOutQuint=d,t.inOutSine=p,t.inQuad=i,t.inQuart=r,t.inQuint=q,t.inSine=b,t.linear=u,t.outCirc=S,t.outCoastCubic=m,t.outCoastQuad=P,t.outCoastQuart=I,t.outCoastQuint=w,t.outCubic=c,t.outExpo=x,t.outQuad=n,t.outQuart=e,t.outQuint=Q,t.outSine=O,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
