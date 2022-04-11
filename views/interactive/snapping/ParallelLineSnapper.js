/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/maybe","../../../chunks/vec2","../../../chunks/vec2f64","./Settings","./SnappingAlgorithm","./snappingUtils","./candidates/ParallelLineSnappingCandidate","../../support/geometry2dUtils"],(function(e,t,n,i,r,o,s,a,l,c){"use strict";let p=function(e){function s(){var t;return(t=e.apply(this,arguments)||this)._tmpProjection=r.create(),t}t._inheritsLoose(s,e);var p=s.prototype;return p.snapNewVertex=function(e,t){const n=t.editGeometryOperations.data.components[0],i=n.edges.length,r=n.vertices.length,o=[];if(i<2)return o;const s=a.anyMapPointToScreenPoint(e,t.coordinateHelper,t.elevationInfo,this.view),l=n.vertices[r-1],c=n.vertices[0],p=n.edges[i-1];let h=p;do{this.edgeExceedsShortLineThreshold(h,t)&&(this._checkEdgeForParalleLines(h,l.pos,e,s,t,o),this._checkEdgeForParalleLines(h,c.pos,e,s,t,o)),h=h.leftVertex.leftEdge}while(h&&h!==p);return o},p.snapExistingVertex=function(e,t){const i=[],r=n.unwrap(t.vertexHandle),o=r.component;if(o.edges.length<3)return i;const s=a.anyMapPointToScreenPoint(e,t.coordinateHelper,t.elevationInfo,this.view),l=r.leftEdge,c=r.rightEdge,p=o.vertices[0],h=o.vertices.length,d=o.vertices[h-1],g=o.edges[0];let u=g;do{u!==l&&u!==c&&this.edgeExceedsShortLineThreshold(u,t)&&(l&&this._checkEdgeForParalleLines(u,l.leftVertex.pos,e,s,t,i),c&&this._checkEdgeForParalleLines(u,c.rightVertex.pos,e,s,t,i),r===p?this._checkEdgeForParalleLines(u,d.pos,e,s,t,i):r===d&&this._checkEdgeForParalleLines(u,p.pos,e,s,t,i)),u=u.rightVertex.rightEdge}while(u&&u!==g);return i},p._checkEdgeForParalleLines=function(e,t,n,r,s,p){const h=e.leftVertex.pos,d=e.rightVertex.pos;if(c.projectPointToLine(this._tmpProjection,t,h,d),i.squaredDistance(this._tmpProjection,t)<o.defaults.parallelLineThreshold)return;c.projectPointToLine(this._tmpProjection,n,h,d,t);const g=s.coordinateHelper,u=g.fromXYZ(this._tmpProjection,g.getZ(n,0));if(a.squareDistance(r,a.anyMapPointToScreenPoint(u,g,s.elevationInfo,this.view))<this.squaredProximityTreshold(s.pointer)){if(this._parallelToPreviousCandidate(e,p))return;p.push(new l.ParallelLineSnappingCandidate({coordinateHelper:g,referenceLine:e,lineStart:t,targetPoint:u}))}},p._parallelToPreviousCandidate=function(e,t){const n=e.leftVertex.pos,r=e.rightVertex.pos;for(const s of t)if(c.projectPointToLine(this._tmpProjection,r,s.constraint.start,s.constraint.end,n),i.squaredDistance(this._tmpProjection,r)<o.defaults.parallelLineThreshold)return s.addReferenceLine(e),!0;return!1},s}(s.SnappingAlgorithm);e.ParallelLineSnapper=p,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
