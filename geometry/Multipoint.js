/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/lang","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer","./Extent","./Geometry","./Point","./support/zmUtils"],(function(t,e,n,s,i,r,o,a,p,l,c){"use strict";var h;function u(t){return(e,n)=>null==e?n:null==n?e:t(e,n)}function f(t){return t&&("esri.geometry.SpatialReference"===t.declaredClass||null!=t.wkid)}let m=h=function(e){function s(...t){var n;return(n=e.call(this,...t)||this).points=[],n.type="multipoint",n}t._inheritsLoose(s,e);var i=s.prototype;return i.normalizeCtorArgs=function(t,e){if(!t&&!e)return null;const n={};Array.isArray(t)?(n.points=t,n.spatialReference=e):f(t)?n.spatialReference=t:(t.points&&(n.points=t.points),t.spatialReference&&(n.spatialReference=t.spatialReference),t.hasZ&&(n.hasZ=t.hasZ),t.hasM&&(n.hasM=t.hasM));const s=n.points&&n.points[0];return s&&(void 0===n.hasZ&&void 0===n.hasM?(n.hasZ=s.length>2,n.hasM=!1):void 0===n.hasZ?n.hasZ=s.length>3:void 0===n.hasM&&(n.hasM=s.length>3)),n},i.writePoints=function(t,e){e.points=n.clone(this.points)},i.addPoint=function(t){return c.updateSupportFromPoint(this,t),Array.isArray(t)?this.points.push(t):this.points.push(t.toArray()),this.notifyChange("points"),this},i.clone=function(){const t={points:n.clone(this.points),spatialReference:this.spatialReference};return this.hasZ&&(t.hasZ=!0),this.hasM&&(t.hasM=!0),new h(t)},i.getPoint=function(t){if(!this._validateInputs(t))return null;const e=this.points[t],n={x:e[0],y:e[1],spatialReference:this.spatialReference};let s=2;return this.hasZ&&(n.z=e[2],s=3),this.hasM&&(n.m=e[s]),new l(n)},i.removePoint=function(t){if(!this._validateInputs(t))return null;const e=new l(this.points.splice(t,1)[0],this.spatialReference);return this.notifyChange("points"),e},i.setPoint=function(t,e){return this._validateInputs(t)?(c.updateSupportFromPoint(this,e),Array.isArray(e)||(e=e.toArray()),this.points[t]=e,this.notifyChange("points"),this):this},i.toJSON=function(t){return this.write({},t)},i._validateInputs=function(t){return null!=t&&t>=0&&t<this.points.length},t._createClass(s,[{key:"cache",get:function(){return this.commitProperty("points"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}},{key:"extent",get:function(){const t=this.points;if(!t.length)return null;const e=new a,n=this.hasZ,s=this.hasM,i=n?3:2,r=t[0],o=u(Math.min),p=u(Math.max);let l,c,h,f,[m,y]=r,[d,g]=r;for(let a=0,u=t.length;a<u;a++){const e=t[a],[r,u]=e;if(m=o(m,r),y=o(y,u),d=p(d,r),g=p(g,u),n&&e.length>2){const t=e[2];l=o(l,t),h=p(h,t)}if(s&&e.length>i){const t=e[i];c=o(c,t),f=p(f,t)}}return e.xmin=m,e.ymin=y,e.xmax=d,e.ymax=g,e.spatialReference=this.spatialReference,n?(e.zmin=l,e.zmax=h):(e.zmin=null,e.zmax=null),s?(e.mmin=c,e.mmax=f):(e.mmin=null,e.mmax=null),e}}]),s}(p);e.__decorate([s.property({readOnly:!0})],m.prototype,"cache",null),e.__decorate([s.property()],m.prototype,"extent",null),e.__decorate([s.property({type:[[Number]],json:{write:{isRequired:!0}}})],m.prototype,"points",void 0),e.__decorate([o.writer("points")],m.prototype,"writePoints",null),m=h=e.__decorate([r.subclass("esri.geometry.Multipoint")],m),m.prototype.toJSON.isDefaultToJSON=!0;return m}));
