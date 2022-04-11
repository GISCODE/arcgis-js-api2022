/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/vec2","../../../../chunks/vec2f64","../SnappingConstraint","../snappingUtils","./SnappingCandidate","../hints/LineSnappingHint","../hints/RightAngleSnappingHint"],(function(n,t,i,e,a,p,s,r,g){"use strict";let o=function(n){function e({coordinateHelper:t,targetPoint:e,point1:p,point2:s}){var r;return(r=n.call(this,t,e,new a.PlanarCircleConstraint(t,i.lerp(l,p,s,.5),.5*i.distance(p,s)))||this).p1=p,r.p2=s,r}return t._inheritsLoose(e,n),t._createClass(e,[{key:"hints",get:function(){return[new r.LineSnappingHint(p.LineSegmentHintType.REFERENCE,this.targetPoint,this.p1),new r.LineSnappingHint(p.LineSegmentHintType.REFERENCE,this.targetPoint,this.p2),new g.RightAngleSnappingHint(this.p1,this.targetPoint,this.p2)]}}]),e}(s.SnappingCandidate);const l=e.create();n.RightAngleTriangleSnappingCandidate=o,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
