/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/vec2","../../../../chunks/vec2f64","../SnappingConstraint","../snappingUtils","./SnappingCandidate","../hints/LineSnappingHint"],(function(n,t,e,i,r,a,s,o){"use strict";let c=function(n){function i({coordinateHelper:t,lineStart:e,lineEnd:i,targetPoint:s}){var c;return(c=n.call(this,t,s,new r.LineConstraint(t,e,i))||this).referenceLineHint=new o.LineSnappingHint(a.LineSegmentHintType.REFERENCE_EXTENSION,e,i),c}return t._inheritsLoose(i,n),i.prototype._lineEndClosestToTarget=function(){const n=this.constraint.start,t=this.constraint.end;return Math.sign(e.dot(e.subtract(l,t,n),e.subtract(p,this.targetPoint,n)))>0?t:n},t._createClass(i,[{key:"hints",get:function(){return[this.referenceLineHint,new o.LineSnappingHint(a.LineSegmentHintType.TARGET,this._lineEndClosestToTarget(),this.targetPoint)]}}]),i}(s.SnappingCandidate);const p=i.create(),l=i.create();n.LineSnappingCandidate=c,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
