/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Collection","../core/lang","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","./FillSymbol3DLayer","./Symbol3D"],(function(e,o,r,s,t,l,n,c,y,a){"use strict";var i;const p=r.ofType({base:null,key:"type",typeMap:{fill:y}});let u=i=function(o){function r(e){var r;return(r=o.call(this,e)||this).symbolLayers=new p,r.type="mesh-3d",r}return e._inheritsLoose(r,o),r.prototype.clone=function(){return new i({styleOrigin:s.clone(this.styleOrigin),symbolLayers:s.clone(this.symbolLayers),thumbnail:s.clone(this.thumbnail)})},r}(a);o.__decorate([t.property({type:p})],u.prototype,"symbolLayers",void 0),o.__decorate([n.enumeration({MeshSymbol3D:"mesh-3d"},{readOnly:!0})],u.prototype,"type",void 0),u=i=o.__decorate([c.subclass("esri.symbols.MeshSymbol3D")],u);return u}));
