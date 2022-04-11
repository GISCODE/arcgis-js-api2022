/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Collection","../core/lang","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","./LineSymbol3DLayer","./PathSymbol3DLayer","./Symbol3D"],(function(e,o,r,t,n,s,l,y,i,c,p){"use strict";var a;const u=r.ofType({base:null,key:"type",typeMap:{line:i,path:c}}),b=r.ofType({base:null,key:"type",typeMap:{line:i,path:c}});let m=a=function(o){function r(e){var r;return(r=o.call(this,e)||this).symbolLayers=new u,r.type="line-3d",r}return e._inheritsLoose(r,o),r.prototype.clone=function(){return new a({styleOrigin:t.clone(this.styleOrigin),symbolLayers:t.clone(this.symbolLayers),thumbnail:t.clone(this.thumbnail)})},r.fromSimpleLineSymbol=function(e){return new a({symbolLayers:[i.fromSimpleLineSymbol(e)]})},r}(p);o.__decorate([n.property({type:u,json:{type:b}})],m.prototype,"symbolLayers",void 0),o.__decorate([l.enumeration({LineSymbol3D:"line-3d"},{readOnly:!0})],m.prototype,"type",void 0),m=a=o.__decorate([y.subclass("esri.symbols.LineSymbol3D")],m);return m}));
