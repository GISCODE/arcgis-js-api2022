// COPYRIGHT © 2021 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

!function(t){var i={};function n(t,i){var n=t.length;if(n<3)return 0;i||(i=t[0]);for(var s=i[0],e=i[1],h=t[n-1],r=h[0]-s,o=h[1]-e,a=0,u=0,c=t.length;u<c;u++){var l=(h=t[u])[0]-s,x=h[1]-e;a+=l*o-r*x,r=l,o=x}return a/2}i.calculateRingArea=n,i.calculateRingCentroid=function(t,i){var n=t.length;if(!n)return null;i||(i=t[0]);var s=i[0],e=i[1],h=0,r=0,o=0;if(n>2)for(var a=t[n-1],u=a[0]-s,c=a[1]-e,l=0,x=t.length;l<x;l++){var g=(a=t[l])[0]-s,f=a[1]-e,d=g*c-u*f;h+=d,r+=(u+g)*d,o+=(c+f)*d,u=g,c=f}return 0==h?r=o=0:(r/=3*h,o/=3*h),[s+r,e+o]};i.INTERIOR=1,i.EXTERIOR=-1,i.BOUNDARY=0,i.createRingInfo=function(t,i){return new h(t,i)},i.createSegmentCoordinates=function(t){return new r(null,0,0,t)};var s=function(t){return function(){for(var i in t){var n=t[i];this[i]="function"==typeof n?n.bind(this):n}var s=t.ctr.bind(this);s.apply(this,arguments)}},e=s({xmin:null,ymin:null,xmax:null,ymax:null,spatialReference:null,ctr:function(t,i,n,s,e){this.xmin=t,this.ymin=i,this.xmax=n,this.ymax=s,this.spatialReference=e},printOut:function(){console.log([this.xmin,this.xmax,this.ymin,this.ymax].join(" "))}}),h=s({ring:null,origin:null,area:0,clockwise:!1,extent:null,_coords:null,ctr:function(t,i){this.ring=t,this.origin=i;var s=this.ring.length-1;if(!(s<0)){s?this.ring[s][0]==this.ring[0][0]&&this.ring[s][1]==this.ring[0][1]||(s++,this.ring.push(this.ring[0].slice())):s++;var h=0,r=0,o=!i;this.extent=new e(this.ring[0][0],this.ring[0][1],this.ring[0][0],this.ring[0][1]);for(var a=0;a<s;a++){var u=this.ring[a],c=u[0];o&&(h+=c),c<this.extent.xmin?this.extent.xmin=c:c>this.extent.xmax&&(this.extent.xmax=c),c=u[1],o&&(r+=c),c<this.extent.ymin?this.extent.ymin=c:c>this.extent.ymax&&(this.extent.ymax=c)}o&&(this.origin=[h/s,r/s]),this.area=n(this.ring,this.origin),this.area<=0?this.area=-this.area:this.clockwise=!0}},setDirection:function(t){this.clockwise==!t&&(this.ring.reverse(),this.clockwise=!this.clockwise,this._coords=null)},testPoint:function(t,i){var n=this.getRingCoordinates(i).testPoint(t[0]-this.origin[0],t[1]-this.origin[1]);return this.clockwise?n:-n},generalize:function(t,i,s){i=i||.75;var e,h,r,o,a,u=this.getRingCoordinates(t),c=u.xs,l=u.ys,x=c[0],g=l[0],f=0;function d(n,s,u){h=n,r=s,(u||f<e)&&(e=t,o=h-x,a=r-x,(f=Math.sqrt(o*o+a*a))>t*i?(o/=f,a/=f):f=0),e*=i}function y(){if(!f)return!0;var t=u.dx,i=u.dy,n=Math.sqrt(t*t+i*i);return n-t*o-i*a>=.9*n}var v=c.length-1;d(c[v],l[v],!0);for(var m=this,p=this.clockwise?function(t){m.ring.splice(t,1)}:function(t){m.ring.splice(-t-1,1)};v-- >0&&c.length>4;){var _=c[v],w=l[v];u.setSegment(x,g,_,w)&&u.testPointOnTouch(h,r,e)&&y()?(c.splice(v+1,1),l.splice(v+1,1),p(v+1),d(_,w)):(x=h,g=r,d(_,w,!0))}this._coords=null,s&&(this.area=n(this.ring,this.origin),this.clockwise||(this.area=-this.area))},getRingCoordinates:function(t,i){return i?new r(this.ring,i[0],i[1],t,this.extent,this.clockwise):(this._coords&&this._coords.eps==t||(this._coords=new r(this.ring,this.origin[0],this.origin[1],t,this.extent,this.clockwise)),this._coords)}});i.RingInfo=h;var r=s({xs:null,ys:null,extent:null,eps:NaN,dx:null,dy:null,_sx:null,_sy:null,ctr:function(t,i,n,s,h,r){if(this.xs=[],this.ys=[],t||(t=[]),void 0===i&&(i=0),void 0===n&&(n=0),void 0===s&&(s=0),this.eps=Math.max(s,0),h){var o=this.eps/2;this.extent=new e(h.xmin-i-o,h.ymin-n-o,h.xmax-i+o,h.ymax-n+o)}var a=t.length-1;if(!(a<0))for(var u=a?t[a][0]==t[0][0]&&t[a][1]==t[0][1]?a:a+1:1,c=r?1:-1,l=r?0:a;u--;l+=c){var x=t[l];this.xs.push(x[0]-i),this.ys.push(x[1]-n)}},testPoint:function(t,i){if(!this._pointBelongsToExtent(t,i))return-1;var n=this.xs.length,s=!1;if(this.dy=this.ys[0]-this.ys[n-1],0==this.dy){for(var e=n;e-- >1&&(this.dy=this.ys[e]-this.ys[e-1],0==this.dy););if(0==this.dy)return 0}s=this.dy>0;for(var h,r,o=0,a=this.xs[0],u=this.ys[0],c=1;c<=n;c++,a=h,u=r){var l=c==n?0:c;if(h=this.xs[l],r=this.ys[l],this.setSegment(a,u,h,r)){var x=u-i,g=r-i,f=!1;if(x<0&&(x=-x,g=-g,f=!0),!(x>this.eps&&g>this.eps)){if(this.testPointOnTouch(t,i,this.eps))return 0;0==x?0!==g&&(g<0&&(s=!s),t<a&&s&&o++):0==g?s=f:g<0&&t<a+this.dx/this.dy*(i-u)&&o++}}}return o%2!=0?1:-1},testPointOnTouch:function(t,i,n){var s=this.findIntersectionDelta(t,i,t-this.dy,i+this.dx),e=this._sx+s*this.dx-t,h=this._sy+s*this.dy-i;return e*e+h*h<=n*n},_pointBelongsToExtent:function(t,i){return t>=this.extent.xmin&&t<=this.extent.xmax&&i>=this.extent.ymin&&i<=this.extent.ymax},setSegment:function(t,i,n,s){return this._sx=t,this.dx=n-t,this._sy=i,this.dy=s-i,0!=this.dx||0!=this.dy},findIntersectionDelta:function(t,i,n,s,e){void 0===e&&(e=!0),n-=t,s-=i;var h=this.dy*n-this.dx*s;if(0==h)return 0;var r=t-this._sx,o=i-this._sy,a=o*n-r*s,u=e?0:o*this.dx-r*this.dy;return h<0&&(h=-h,a=-a,u=-u),e||(u=u<0?0:u<h?u/h:1,this.testPointOnTouch(t+u*n,i+u*s,this.eps))?a<=0?0:a<h?a/h:1:-1},addPointOfSegmentAt:function(t){this.xs.push(this._sx+t*this.dx),this.ys.push(this._sy+t*this.dy)}});i.RingCoordinates=r,t.document?define((function(){return i})):t.GeometryUtil_base=i}(this);