/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/screenUtils","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass","./Symbol"],(function(e,t,r,o,s,p,c,i,a){"use strict";let n=function(t){function r(e){var r;return(r=t.call(this,e)||this).angle=0,r.type=null,r.xoffset=0,r.yoffset=0,r.size=9,r}return e._inheritsLoose(r,t),r.prototype.hash=function(){return`${this.type}.${this.angle}.${this.size}.${this.xoffset}.${this.yoffset}`},r}(a);t.__decorate([o.property({type:Number,json:{read:e=>e&&-1*e,write:(e,t)=>t.angle=e&&-1*e}})],n.prototype,"angle",void 0),t.__decorate([o.property({type:["simple-marker","picture-marker"],readOnly:!0})],n.prototype,"type",void 0),t.__decorate([o.property({type:Number,cast:r.toPt,json:{write:!0}})],n.prototype,"xoffset",void 0),t.__decorate([o.property({type:Number,cast:r.toPt,json:{write:!0}})],n.prototype,"yoffset",void 0),t.__decorate([o.property({type:Number,cast:e=>"auto"===e?e:r.toPt(e),json:{write:!0}})],n.prototype,"size",void 0),n=t.__decorate([i.subclass("esri.symbols.MarkerSymbol")],n);return n}));
