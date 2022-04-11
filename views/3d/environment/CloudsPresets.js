/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/Clouds.glsl"],(function(e,s){"use strict";let t=function(e,s,t,i,n,o,a,h,c=.5){this.coverage=e,this.density=s,this.absorption=t,this.cloudSize=i,this.detailSize=n,this.smoothness=o,this.cloudHeight=a,this.raymarchingStepType=h,this.median=c};const i={sunny:new t([.1,.7],[.02,.02],[0,0],[.86,.86],[.8,.8],[.5,.5],[.05,.05],s.RayMarchingSteps.SIXTEEN),cloudy:new t([.24,.7],[.135,.2],[0,0],[.5,.5],[.65,.7],[.3,.3],[1,1],s.RayMarchingSteps.TWOHUNDRED),rainy:new t([.5,.9],[.2,.5],[.3,.6],[.4,.4],[.7,.7],[.5,.5],[1,1],s.RayMarchingSteps.TWOHUNDRED),snowy:new t([.5,.9],[.2,.5],[0,0],[.4,.4],[.7,.7],[.5,.5],[1,1],s.RayMarchingSteps.TWOHUNDRED),foggy:new t([.8,.8],[.5,.5],[0,0],[.85,.85],[.75,.75],[.8,.8],[.3,.3],s.RayMarchingSteps.HUNDRED)};e.CloudPresets=t,e.cloudPresets=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
