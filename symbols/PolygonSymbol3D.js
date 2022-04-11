/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Collection","../core/Error","../core/lang","../core/maybe","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer","./ExtrudeSymbol3DLayer","./FillSymbol3DLayer","./IconSymbol3DLayer","./LineSymbol3DLayer","./ObjectSymbol3DLayer","./Symbol3D","./TextSymbol3DLayer","./WaterSymbol3DLayer"],(function(e,o,r,t,l,s,y,n,a,i,c,m,p,b,u,L,S,d,f){"use strict";var g;const h=r.ofType({base:null,key:"type",typeMap:{extrude:m,fill:p,icon:b,line:u,object:L,text:d,water:f}}),w=r.ofType({base:null,key:"type",typeMap:{extrude:m,fill:p,icon:b,line:u,object:L,water:f}});let D=g=function(o){function r(e){var r;return(r=o.call(this,e)||this).symbolLayers=new h,r.type="polygon-3d",r}e._inheritsLoose(r,o);var y=r.prototype;return y.writeSymbolLayers=function(e,o,r,l){const s=e.filter((e=>"text"!==e.type));if(l&&l.messages&&s.length<e.length){const o=e.find((e=>"text"===e.type));l.messages.push(new t("symbol-layer:unsupported","Symbol layers of type 'text' cannot be persisted in PolygonSymbol3D",{symbolLayer:o}))}o[r]=s.map((e=>e.write({},l))).toArray()},y.clone=function(){return new g({styleOrigin:l.clone(this.styleOrigin),symbolLayers:l.clone(this.symbolLayers),thumbnail:l.clone(this.thumbnail)})},r.fromJSON=function(e){const o=new g;if(o.read(e),2===o.symbolLayers.length&&"fill"===o.symbolLayers.getItemAt(0).type&&"line"===o.symbolLayers.getItemAt(1).type){const r=o.symbolLayers.getItemAt(0),t=o.symbolLayers.getItemAt(1);!t.enabled||e.symbolLayers&&e.symbolLayers[1]&&!1===e.symbolLayers[1].enable||(r.outline={size:t.size,color:s.isSome(t.material)?t.material.color:null}),o.symbolLayers.removeAt(1)}return o},r.fromSimpleFillSymbol=function(e){return new g({symbolLayers:[p.fromSimpleFillSymbol(e)]})},r}(S);o.__decorate([y.property({type:h,json:{type:w}})],D.prototype,"symbolLayers",void 0),o.__decorate([c.writer("web-scene","symbolLayers")],D.prototype,"writeSymbolLayers",null),o.__decorate([a.enumeration({PolygonSymbol3D:"polygon-3d"},{readOnly:!0})],D.prototype,"type",void 0),D=g=o.__decorate([i.subclass("esri.symbols.PolygonSymbol3D")],D);return D}));
