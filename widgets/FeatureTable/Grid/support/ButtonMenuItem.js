/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/accessorSupport/decorators/property","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/decorators/cast","../../../../core/accessorSupport/decorators/subclass"],(function(e,o,t,r,c,s,p,n){"use strict";var a;let l=a=function(o){function t(e){var t;return(t=o.call(this,e)||this).autoCloseMenu=!1,t.iconClass=null,t.items=null,t.label=null,t.open=!1,t.selected=!1,t.selectionEnabled=!1,t.clickFunction=null,t}return e._inheritsLoose(t,o),t.prototype.castItems=function(e){return e?e.map((e=>e instanceof a?e:new a(e))):null},t}(t);o.__decorate([r.property()],l.prototype,"autoCloseMenu",void 0),o.__decorate([r.property()],l.prototype,"iconClass",void 0),o.__decorate([r.property()],l.prototype,"items",void 0),o.__decorate([p.cast("items")],l.prototype,"castItems",null),o.__decorate([r.property()],l.prototype,"label",void 0),o.__decorate([r.property()],l.prototype,"open",void 0),o.__decorate([r.property()],l.prototype,"selected",void 0),o.__decorate([r.property()],l.prototype,"selectionEnabled",void 0),o.__decorate([r.property()],l.prototype,"clickFunction",void 0),l=a=o.__decorate([n.subclass("esri.widgets.FeatureTable.Grid.support.ButtonMenuItem")],l);return l}));
