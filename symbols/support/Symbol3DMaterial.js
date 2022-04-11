/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/maybe","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./materialUtils"],(function(o,r,e,t,l,s,c,a,i,n,p){"use strict";var u;o.Symbol3DMaterial=u=function(o){function e(r){var e;return(e=o.call(this,r)||this).color=null,e}return r._inheritsLoose(e,o),e.prototype.clone=function(){const o={color:l.isSome(this.color)?this.color.clone():null};return new u(o)},e}(t.JSONSupport),e.__decorate([s.property(p.colorAndTransparencyProperty)],o.Symbol3DMaterial.prototype,"color",void 0),o.Symbol3DMaterial=u=e.__decorate([n.subclass("esri.symbols.support.Symbol3DMaterial")],o.Symbol3DMaterial),Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
