// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Logger","../core/accessorSupport/decorators","./Geometry","./SpatialReference","./support/spatialReferenceUtils","./support/webMercatorUtils"],(function(e,t,r,i,n,s,o,a,l,u){var p=[0,0];function c(e){return e&&("esri.geometry.SpatialReference"===e.declaredClass||null!=e.wkid)}var h=n.getLogger("esri.geometry.Point"),y=function(e){function t(t,r,i,n,s){var o=e.call(this)||this;return o.x=0,o.y=0,o.z=void 0,o.m=void 0,o.type="point",o}return r(t,e),n=t,t.copy=function(e,t){t.x=e.x,t.y=e.y,t.z=e.z,t.m=e.m,t.spatialReference=Object.isFrozen(e.spatialReference)?e.spatialReference:e.spatialReference.clone()},t.distance=function(e,t){var r=e.x-t.x,i=e.y-t.y,n=e.hasZ&&t.hasZ?e.z-t.z:0;return Math.sqrt(r*r+i*i+n*n)},t.prototype.normalizeCtorArgs=function(e,t,r,i,n){var s;if(Array.isArray(e))n=t,e=(s=e)[0],t=s[1],r=s[2],i=s[3];else if(e&&"object"==typeof e){if(e=null!=(s=e).x?s.x:s.longitude,t=null!=s.y?s.y:s.latitude,r=null!=s.z?s.z:s.altitude,i=s.m,(n=s.spatialReference)&&"esri.geometry.SpatialReference"!==n.declaredClass&&(n=new a(n)),null!=s.longitude||null!=s.latitude)if(null==s.longitude)h.warn(".longitude=","Latitude was defined without longitude");else if(null==s.latitude)h.warn(".latitude=","Longitude was defined without latitude");else if(!s.declaredClass&&n&&n.isWebMercator){var o=u.lngLatToXY(s.longitude,s.latitude,p);e=o[0],t=o[1]}}else c(r)?(n=r,r=null):c(i)&&(n=i,i=null);var l={x:e,y:t};return null!=n&&(l.spatialReference=n),null!=r&&(l.z=r),null!=i&&(l.m=i),l},Object.defineProperty(t.prototype,"hasM",{get:function(){return void 0!==this.m},set:function(e){e!==this._get("hasM")&&(this._set("m",e?0:void 0),this._set("hasM",e))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasZ",{get:function(){return void 0!==this.z},set:function(e){e!==this._get("hasZ")&&(this._set("z",e?0:void 0),this._set("hasZ",e))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"latitude",{get:function(){var e=this._get("spatialReference");if(e){if(e.isWebMercator)return u.xyToLngLat(this.x,this.y,p)[1];if(e.isWGS84)return this._get("y")}return null},set:function(e){var t=this._get("spatialReference");t&&(t.isWebMercator?this._set("y",u.lngLatToXY(this.x,e,p)[1]):t.isWGS84&&this._set("y",e),this._set("latitude",e))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"longitude",{get:function(){var e=this._get("spatialReference");if(e){if(e.isWebMercator)return u.xyToLngLat(this._get("x"),this._get("y"),p)[0];if(e.isWGS84)return this._get("x")}return null},set:function(e){var t=this._get("spatialReference");t&&(t.isWebMercator?this._set("x",u.lngLatToXY(e,this._get("y"),p)[0]):t.isWGS84&&this._set("x",e),this._set("longitude",e))},enumerable:!0,configurable:!0}),t.prototype.clone=function(){var e=new n;return e.x=this.x,e.y=this.y,e.z=this.z,e.m=this.m,e.spatialReference=this.spatialReference,e},t.prototype.copy=function(e){return n.copy(e,this),this},t.prototype.equals=function(e){if(!e)return!1;var t,r,i=this,n=i.x,s=i.y,o=i.z,a=i.m,l=i.spatialReference,p=e.z,c=e.m,h=e.x,y=e.y,f=e.spatialReference;if(!l.equals(f))if(l.isWebMercator&&f.isWGS84)h=(t=u.lngLatToXY(h,y))[0],y=t[1],f=l;else{if(!l.isWGS84||!f.isWebMercator)return!1;h=(r=u.xyToLngLat(h,y))[0],y=r[1],f=l}return n===h&&s===y&&o===p&&a===c&&l.wkid===f.wkid},t.prototype.offset=function(e,t,r){return this.x=this.x+e,this.y=this.y+t,null!=r&&this.hasZ&&(this.z=this.z+r),this},t.prototype.normalize=function(){if(!this.spatialReference)return this;var e=l.getInfo(this.spatialReference);if(!e)return this;var t=this.x,r=e.valid,i=r[0],n=r[1],s=2*n;return t>n?t-=Math.ceil(Math.abs(t-n)/s)*s:t<i&&(t+=Math.ceil(Math.abs(t-i)/s)*s),this._set("x",t),this},t.prototype.distance=function(e){return n.distance(this,e)},t.prototype.toArray=function(){var e=this.hasZ,t=this.hasM;return e&&t?[this.x,this.y,this.z,this.m]:e?[this.x,this.y,this.z]:t?[this.x,this.y,this.m]:[this.x,this.y]},t.prototype.toJSON=function(e){return this.write(null,e)},i([s.property({dependsOn:["x","y","z","m","spatialReference"]})],t.prototype,"cache",void 0),i([s.property({type:Boolean,dependsOn:["m"],json:{write:{enabled:!1,overridePolicy:null}}})],t.prototype,"hasM",null),i([s.property({type:Boolean,dependsOn:["z"],json:{write:{enabled:!1,overridePolicy:null}}})],t.prototype,"hasZ",null),i([s.property({type:Number,dependsOn:["y"]})],t.prototype,"latitude",null),i([s.property({type:Number,dependsOn:["x"]})],t.prototype,"longitude",null),i([s.property({type:Number,json:{write:{isRequired:!0}}})],t.prototype,"x",void 0),i([s.property({type:Number,json:{write:!0}})],t.prototype,"y",void 0),i([s.property({type:Number,json:{write:{overridePolicy:function(){return{enabled:this.hasZ}}}}})],t.prototype,"z",void 0),i([s.property({type:Number,json:{write:{overridePolicy:function(){return{enabled:this.hasM}}}}})],t.prototype,"m",void 0),t=n=i([s.subclass("esri.geometry.Point")],t);var n}(s.declared(o));return y.prototype.toJSON.isDefaultToJSON=!0,y}));