/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["./chunks/_rollupPluginBabelHelpers","./chunks/tslib.es6","./core/Clonable","./core/JSONSupport","./core/mathUtils","./core/accessorSupport/decorators/property","./core/arrayUtils","./core/has","./core/accessorSupport/decorators/cast","./core/accessorSupport/decorators/reader","./core/accessorSupport/decorators/subclass","./core/accessorSupport/decorators/writer","./core/accessorSupport/ensureType","./geometry/Point","./views/3d/support/mathUtils"],(function(e,r,o,t,i,s,n,u,a,c,p,l,d,y,b){"use strict";let h=function(r){function o(...e){var o;return(o=r.call(this,...e)||this).position=new y([0,0,0]),o.heading=0,o.tilt=0,o.fov=55,o}e._inheritsLoose(o,r);var t=o.prototype;return t.normalizeCtorArgs=function(e,r,o,t){if(e&&"object"==typeof e&&("x"in e||Array.isArray(e))){const i={position:e};return null!=r&&(i.heading=r),null!=o&&(i.tilt=o),null!=t&&(i.fov=t),i}return e},t.writePosition=function(e,r,o,t){const i=e.clone();i.x=d.ensureNumber(e.x||0),i.y=d.ensureNumber(e.y||0),i.z=e.hasZ?d.ensureNumber(e.z||0):e.z,r[o]=i.write({},t)},t.readPosition=function(e,r){const o=new y;return o.read(e,r),o.x=d.ensureNumber(o.x||0),o.y=d.ensureNumber(o.y||0),o.z=o.hasZ?d.ensureNumber(o.z||0):o.z,o},t.equals=function(e){return!!e&&(this.tilt===e.tilt&&this.heading===e.heading&&this.fov===e.fov&&this.position.equals(e.position))},o}(o.ClonableMixin(t.JSONSupport));r.__decorate([s.property({type:y,json:{write:{isRequired:!0}}})],h.prototype,"position",void 0),r.__decorate([l.writer("position")],h.prototype,"writePosition",null),r.__decorate([c.reader("position")],h.prototype,"readPosition",null),r.__decorate([s.property({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),a.cast((e=>b.cyclicalDeg.normalize(d.ensureNumber(e))))],h.prototype,"heading",void 0),r.__decorate([s.property({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),a.cast((e=>i.clamp(d.ensureNumber(e),-180,180)))],h.prototype,"tilt",void 0),r.__decorate([s.property({type:Number,nonNullable:!0,json:{read:!1,write:!1}})],h.prototype,"fov",void 0),h=r.__decorate([p.subclass("esri.Camera")],h);return h}));
