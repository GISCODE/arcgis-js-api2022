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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/lang","../core/accessorSupport/decorators","./Extent","./Geometry","./Point","./SpatialReference","./support/zmUtils"],(function(t,e,r,n,i,a,s,o,h,p,l){function u(t){return function(e,r){return null==e?r:null==r?e:t(e,r)}}var c=u(Math.min),f=u(Math.max);var v=function(t){function e(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var n=t.call(this)||this;return n.paths=[],n.type="polyline",n}return r(e,t),o=e,e.prototype.normalizeCtorArgs=function(t,e){var r,n,i,a=null;return t&&!Array.isArray(t)?(a=t.paths?t.paths:null,e||(t.spatialReference?e=t.spatialReference:t.paths||(e=t)),r=t.hasZ,n=t.hasM):a=t,a=a||[],e=e||p.WGS84,a.length&&a[0]&&null!=a[0][0]&&"number"==typeof a[0][0]&&(a=[a]),(i=a[0]&&a[0][0])&&(void 0===r&&void 0===n?(r=i.length>2,n=!1):void 0===r?r=!n&&i.length>3:void 0===n&&(n=!r&&i.length>3)),{paths:a,spatialReference:e,hasZ:r,hasM:n}},Object.defineProperty(e.prototype,"extent",{get:function(){var t=this.hasZ,e=this.hasM,r=this.spatialReference,n=this.paths,i=t?3:2;if(!n.length||!n[0].length)return null;for(var a=n[0][0],o=a[0],h=a[1],p=n[0][0],l=p[0],u=p[1],v=void 0,y=void 0,d=void 0,m=void 0,g=[],x=0;x<n.length;x++){for(var R=n[x],w=R[0],P=w[0],A=w[1],S=R[0],M=S[0],O=S[1],Z=void 0,_=void 0,b=void 0,z=void 0,C=0;C<R.length;C++){var I=R[C],N=I[0],J=I[1];if(o=c(o,N),h=c(h,J),l=f(l,N),u=f(u,J),P=c(P,N),A=c(A,J),M=f(M,N),O=f(O,J),t&&I.length>2){var j=I[2];v=c(v,j),y=f(y,j),Z=c(Z,j),_=f(_,j)}if(e&&I.length>i){var q=I[i];d=c(v,q),m=f(y,q),b=c(Z,q),z=f(_,q)}}g.push(new s({xmin:P,ymin:A,zmin:Z,mmin:b,xmax:M,ymax:O,zmax:_,mmax:z,spatialReference:r}))}var E=new s;return E.xmin=o,E.ymin=h,E.xmax=l,E.ymax=u,E.spatialReference=r,t&&(E.zmin=v,E.zmax=y),e&&(E.mmin=d,E.mmax=m),E.cache._partwise=g.length>1?g:null,E},enumerable:!0,configurable:!0}),e.prototype.writePaths=function(t,e,r,n){e.paths=i.clone(this.paths)},e.prototype.addPath=function(t){if(t){this.clearCache();var e=this.paths,r=e.length;if(function(t){return!Array.isArray(t[0])}(t)){for(var n=[],i=0,a=t.length;i<a;i++)n[i]=t[i].toArray();e[r]=n}else e[r]=t.concat();return this}},e.prototype.clone=function(){var t=new o;return t.spatialReference=this.spatialReference,t.paths=i.clone(this.paths),t.hasZ=this.hasZ,t.hasM=this.hasM,t},e.prototype.getPoint=function(t,e){if(!this._validateInputs(t,e))return null;var r=this.paths[t][e],n=this.hasZ,i=this.hasM;return n&&!i?new h(r[0],r[1],r[2],void 0,this.spatialReference):i&&!n?new h(r[0],r[1],void 0,r[2],this.spatialReference):n&&i?new h(r[0],r[1],r[2],r[3],this.spatialReference):new h(r[0],r[1],this.spatialReference)},e.prototype.insertPoint=function(t,e,r){return this._validateInputs(t,e,!0)?(this.clearCache(),l.updateSupportFromPoint(this,r),Array.isArray(r)||(r=r.toArray()),this.paths[t].splice(e,0,r),this):this},e.prototype.removePath=function(t){if(!this._validateInputs(t,null))return null;this.clearCache();var e=this.paths.splice(t,1)[0],r=this.spatialReference;return e.map((function(t){return new h(t,r)}))},e.prototype.removePoint=function(t,e){return this._validateInputs(t,e)?(this.clearCache(),new h(this.paths[t].splice(e,1)[0],this.spatialReference)):null},e.prototype.setPoint=function(t,e,r){return this._validateInputs(t,e)?(this.clearCache(),l.updateSupportFromPoint(this,r),Array.isArray(r)||(r=r.toArray()),this.paths[t][e]=r,this):this},e.prototype._validateInputs=function(t,e,r){if(void 0===r&&(r=!1),null==t||t<0||t>=this.paths.length)return!1;if(null!=e){var n=this.paths[t];if(r&&(e<0||e>n.length))return!1;if(!r&&(e<0||e>=n.length))return!1}return!0},e.prototype.toJSON=function(t){return this.write(null,t)},n([a.property({dependsOn:["hasM","hasZ","paths"]})],e.prototype,"cache",void 0),n([a.property({dependsOn:["cache"],readOnly:!0})],e.prototype,"extent",null),n([a.property({type:[[[Number]]],json:{write:{isRequired:!0}}})],e.prototype,"paths",void 0),n([a.writer("paths")],e.prototype,"writePaths",null),e=o=n([a.subclass("esri.geometry.Polyline")],e);var o}(a.declared(o));return v.prototype.toJSON.isDefaultToJSON=!0,v}));