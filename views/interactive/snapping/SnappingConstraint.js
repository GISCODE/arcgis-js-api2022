/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/vec2f64","../../../chunks/vec2","./Settings","./snappingUtils","../../support/geometry2dUtils"],(function(t,n,e,i,s,r,o){"use strict";let c=function(t){this.coordinateHelper=t},a=function(t){function e(n,e){var i;return(i=t.call(this,n)||this).point=e,i}n._inheritsLoose(e,t);var c=e.prototype;return c.objectEqual=function(t){return t instanceof e&&r.objectEqual(this.point,t.point)},c.check=function(t){return i.squaredDistance(t,this.point)<s.defaults.pointThreshold},c.closestTo=function(){return this.coordinateHelper.clone(this.point)},c.intersect=function(t){const n=[];return t instanceof u?n.push(...o.intersectLineAndPoint({start:t.start,end:t.end,type:t instanceof p?1:0},this.point)):t instanceof d&&n.push(...o.intersectCircleAndPoint(t.center,t.radius,this.point)),n.map((n=>new l(this.coordinateHelper,n,this,t)))},e}(c),u=function(t){function e(n,e,i){var s;return(s=t.call(this,n)||this).start=e,s.end=i,s}n._inheritsLoose(e,t);var i=e.prototype;return i.objectEqual=function(t){return t instanceof e&&(r.objectEqual(this.start,t.start)&&r.objectEqual(this.end,t.end))},i.intersect=function(t){const n=[];return t instanceof a?n.push(...o.intersectLineAndPoint({start:this.start,end:this.end,type:this instanceof p?1:0},t.point)):t instanceof e?n.push(...o.intersectLineAndRay({start:this.start,end:this.end,type:this instanceof p?1:0},{start:t.start,end:t.end,type:t instanceof p?1:0})):t instanceof d&&n.push(...o.intersectLineLikeAndCircle({start:this.start,end:this.end,type:this instanceof p?1:0},t.center,t.radius)),n.map((n=>new l(this.coordinateHelper,n,this,t)))},e}(c),h=function(t){function r(n,i,s){var r;return(r=t.call(this,n,i,s)||this).dir=e.create(),r.p=e.create(),r}n._inheritsLoose(r,t);var c=r.prototype;return c.objectEqual=function(n){return n instanceof r&&t.prototype.objectEqual.call(this,n)},c.check=function(t){return i.subtract(this.dir,this.end,this.start),i.subtract(this.p,t,this.start),i.dot(this.dir,this.p)>=0&&o.pointToLineDistance(t,this.start,this.end)<s.defaults.pointOnLineThreshold},c.closestTo=function(t){const n=this.coordinateHelper.clone(t);return o.projectPointToRay(n,t,this.start,this.end),n},r}(u),p=function(t){function e(n,e,i){return t.call(this,n,e,i)||this}n._inheritsLoose(e,t);var i=e.prototype;return i.objectEqual=function(n){return n instanceof e&&t.prototype.objectEqual.call(this,n)},i.check=function(t){return o.pointToLineDistance(t,this.start,this.end)<s.defaults.pointOnLineThreshold},i.closestTo=function(t){const n=this.coordinateHelper.clone(t);return o.projectPointToLine(n,t,this.start,this.end),n},e}(u),l=function(t){function e(n,e,i,s){var r;return(r=t.call(this,n)||this).intersection=e,r.first=i,r.second=s,r}n._inheritsLoose(e,t);var s=e.prototype;return s.objectEqual=function(t){return t instanceof e&&(this.first.objectEqual(t.first)&&this.second.objectEqual(t.second))},s.check=function(){return!1},s.closestTo=function(t){const n=this.coordinateHelper.clone(t);return i.copy(n,this.intersection),n},s.intersect=function(){return[]},e}(c),d=function(t){function e(n,e,i){var s;return(s=t.call(this,n)||this).center=e,s.radius=i,s}n._inheritsLoose(e,t);var i=e.prototype;return i.objectEqual=function(t){return t instanceof e&&(this.center[0]===t.center[0]&&this.center[1]===t.center[1]&&this.radius===t.radius)},i.check=function(){return!1},i.closestTo=function(t){const n=this.coordinateHelper.clone(t);return o.projectPointToCircle(n,t,this.center,this.radius),n},i.intersect=function(t){const n=[];return t instanceof u?n.push(...o.intersectLineLikeAndCircle({start:t.start,end:t.end,type:t instanceof p?1:0},this.center,this.radius)):t instanceof a&&n.push(...o.intersectCircleAndPoint(this.center,this.radius,t.point)),n.map((n=>new l(this.coordinateHelper,n,this,t)))},e}(c);t.IntersectionConstraint=l,t.LineConstraint=p,t.LineLikeConstraint=u,t.PlanarCircleConstraint=d,t.PointConstraint=a,t.RayConstraint=h,t.SnappingConstraint=c,Object.defineProperty(t,"__esModule",{value:!0})}));