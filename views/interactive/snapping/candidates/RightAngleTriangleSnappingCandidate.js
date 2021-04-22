/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/vec2f64","../../../../chunks/vec2","../hints/LineSnappingHint","../hints/RightAngleSnappingHint","./SnappingCandidate","../SnappingConstraint"],(function(n,t,i,e,a,p,r,s){"use strict";let g=function(n){function i({coordinateHelper:t,targetPoint:i,point1:a,point2:p}){var r;return(r=n.call(this,t,i,new s.PlanarCircleConstraint(t,e.lerp(o,a,p,.5),.5*e.distance(a,p)))||this).p1=a,r.p2=p,r}return t._inheritsLoose(i,n),t._createClass(i,[{key:"hints",get:function(){return[new a.LineSnappingHint(1,this.targetPoint,this.p1),new a.LineSnappingHint(1,this.targetPoint,this.p2),new p.RightAngleSnappingHint(this.p1,this.targetPoint,this.p2)]}}]),i}(r.SnappingCandidate);const o=i.create();n.RightAngleTriangleSnappingCandidate=g,Object.defineProperty(n,"__esModule",{value:!0})}));