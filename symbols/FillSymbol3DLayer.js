/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/maybe","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","./Symbol3DLayer","./edges/utils","./patterns/LineStylePattern3D","./patterns/StylePattern3D","./patterns/utils","./support/colors","./support/Symbol3DFillMaterial","./support/Symbol3DOutline"],(function(e,t,l,o,r,n,s,i,a,p,u,c,y,d,m,h,S){"use strict";var b;let _=b=function(t){function o(e){var l;return(l=t.call(this,e)||this).type="fill",l.material=null,l.pattern=null,l.castShadows=!0,l.outline=null,l.edges=null,l}return e._inheritsLoose(o,t),o.prototype.clone=function(){const e={edges:l.isSome(this.edges)?this.edges.clone():null,enabled:this.enabled,material:l.isSome(this.material)?this.material.clone():null,pattern:l.isSome(this.pattern)?this.pattern.clone():null,castShadows:this.castShadows,outline:l.isSome(this.outline)?this.outline.clone():null};return new b(e)},o.fromSimpleFillSymbol=function(e){var t,l,o,r,n,s;const i=e.outline&&e.outline.style&&"inside-frame"!==e.outline.style&&"solid"!==e.outline.style?new c({style:e.outline.style}):null,a={size:null!=(t=null==(l=e.outline)?void 0:l.width)?t:0,color:(null!=(o=null==(r=e.outline)?void 0:r.color)?o:m.white).clone(),pattern:i};return i&&null!=(n=e.outline)&&n.cap&&(a.patternCap=e.outline.cap),new b({material:new h.Symbol3DFillMaterial({color:(null!=(s=e.color)?s:m.transparentWhite).clone()}),pattern:e.style&&"solid"!==e.style?new y({style:e.style}):null,outline:a})},o}(p);t.__decorate([i.enumeration({Fill:"fill"},{readOnly:!0})],_.prototype,"type",void 0),t.__decorate([o.property({type:h.Symbol3DFillMaterial,json:{write:!0}})],_.prototype,"material",void 0),t.__decorate([o.property(d.symbol3dPatternProperty)],_.prototype,"pattern",void 0),t.__decorate([o.property({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],_.prototype,"castShadows",void 0),t.__decorate([o.property({type:S.Symbol3DOutline,json:{write:!0}})],_.prototype,"outline",void 0),t.__decorate([o.property(u.symbol3dEdgesProperty)],_.prototype,"edges",void 0),_=b=t.__decorate([a.subclass("esri.symbols.FillSymbol3DLayer")],_);return _}));
