/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","./CodedValue","./Domain"],(function(e,o,r,t,s,c,n,a,u){"use strict";var d;let l=d=function(o){function t(e){var r;return(r=o.call(this,e)||this).codedValues=null,r.type="coded-value",r}e._inheritsLoose(t,o);var s=t.prototype;return s.getName=function(e){let o=null;if(this.codedValues){const r=String(e);this.codedValues.some((e=>(String(e.code)===r&&(o=e.name),!!o)))}return o},s.clone=function(){return new d({codedValues:r.clone(this.codedValues),name:this.name})},t}(u);o.__decorate([t.property({type:[a.default],json:{write:!0}})],l.prototype,"codedValues",void 0),o.__decorate([c.enumeration({codedValue:"coded-value"})],l.prototype,"type",void 0),l=d=o.__decorate([n.subclass("esri.layers.support.CodedValueDomain")],l);return l}));
