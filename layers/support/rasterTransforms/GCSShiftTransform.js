/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/enumeration","../../../core/accessorSupport/decorators/subclass","./BaseRasterTransform"],(function(r,e,t,o,s,n,a,c,i){"use strict";let p=function(e){function t(){var r;return(r=e.apply(this,arguments)||this).type="gcs-shift",r.tolerance=1e-8,r}r._inheritsLoose(t,e);var o=t.prototype;return o.forwardTransform=function(r){return"point"===(r=r.clone()).type?(r.x>180+this.tolerance&&(r.x-=360),r):(r.xmin>=180-this.tolerance?(r.xmax-=360,r.xmin-=360):r.xmax>180+this.tolerance&&(r.xmin=-180,r.xmax=180),r)},o.inverseTransform=function(r){return"point"===(r=r.clone()).type?(r.x<-this.tolerance&&(r.x+=360),r):(r.xmin<-this.tolerance&&(r.xmin+=360,r.xmax+=360),r)},t}(i);e.__decorate([a.enumeration({GCSShiftXform:"gcs-shift"})],p.prototype,"type",void 0),e.__decorate([t.property()],p.prototype,"tolerance",void 0),p=e.__decorate([c.subclass("esri.layers.support.rasterTransforms.GCSShiftTransform")],p);return p}));