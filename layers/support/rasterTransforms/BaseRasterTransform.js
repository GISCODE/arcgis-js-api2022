/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass"],(function(r,e,t,o,s,c,n,a){"use strict";let p=function(e){function t(){return e.apply(this,arguments)||this}r._inheritsLoose(t,e);var o=t.prototype;return o.forwardTransform=function(r){return r},o.inverseTransform=function(r){return r},r._createClass(t,[{key:"affectsPixelSize",get:function(){return!1}}]),t}(t.JSONSupport);e.__decorate([o.property()],p.prototype,"affectsPixelSize",null),e.__decorate([o.property({json:{write:!0}})],p.prototype,"spatialReference",void 0),p=e.__decorate([a.subclass("esri.layers.support.rasterTransforms.BaseRasterTransform")],p);return p}));