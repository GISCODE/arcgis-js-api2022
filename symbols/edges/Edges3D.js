/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Color","../../core/JSONSupport","../../core/lang","../../core/screenUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../support/materialUtils"],(function(e,r,o,t,s,n,c,p,i,l){"use strict";let a=function(r){function t(e){var t;return(t=r.call(this,e)||this).color=new o([0,0,0,1]),t.extensionLength=0,t.size=n.px2pt(1),t}e._inheritsLoose(t,r);var c=t.prototype;return c.clone=function(){},c.cloneProperties=function(){return{color:s.clone(this.color),size:this.size,extensionLength:this.extensionLength}},t}(t.JSONSupport);r.__decorate([c.property({type:["solid","sketch"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],a.prototype,"type",void 0),r.__decorate([c.property(l.colorAndTransparencyProperty)],a.prototype,"color",void 0),r.__decorate([c.property({...l.screenSizeProperty,json:{write:{overridePolicy:e=>({enabled:!!e})}}})],a.prototype,"extensionLength",void 0),r.__decorate([c.property(l.screenSizeProperty)],a.prototype,"size",void 0),a=r.__decorate([i.subclass("esri.symbols.edges.Edges3D")],a);return a}));
