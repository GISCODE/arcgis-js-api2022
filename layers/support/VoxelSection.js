/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","./VoxelSlice","../../chunks/persistableUrlUtils"],(function(e,r,o,t,p,i,s,n,l,a,d){"use strict";let c=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).enabled=!0,e.href=null,e.id=null,e.label="",e.normal=null,e.point=null,e.sizeInPixel=null,e.slices=null,e.timeId=0,e.variableId=null,e}return e._inheritsLoose(o,r),o.prototype.readHref=function(e,r,o){return d.fromJSON(e,o)},o}(o.JSONSupport);r.__decorate([t.property({type:Boolean,json:{default:!0,write:!0}})],c.prototype,"enabled",void 0),r.__decorate([t.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"href",void 0),r.__decorate([n.reader(["service","web-scene"],"href")],c.prototype,"readHref",null),r.__decorate([t.property({type:s.Integer,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"id",void 0),r.__decorate([t.property({type:String,json:{write:!0}})],c.prototype,"label",void 0),r.__decorate([t.property({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"normal",void 0),r.__decorate([t.property({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"point",void 0),r.__decorate([t.property({type:[s.Integer],json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"sizeInPixel",void 0),r.__decorate([t.property({type:[a],json:{write:!0}})],c.prototype,"slices",void 0),r.__decorate([t.property({type:s.Integer,json:{default:0,write:!0}})],c.prototype,"timeId",void 0),r.__decorate([t.property({type:s.Integer,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"variableId",void 0),c=r.__decorate([l.subclass("esri.layers.support.VoxelSection")],c);return c}));
