/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/lang","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","./Renderer","./mixins/VisualVariablesMixin","./support/commonProperties"],(function(e,r,t,o,i,s,n,l,a,c){"use strict";var u;let p=u=function(r){function o(e){var t;return(t=r.call(this,e)||this).description=null,t.label=null,t.symbol=null,t.type="simple",t}e._inheritsLoose(o,r);var i=o.prototype;return i.collectRequiredFields=function(){var r=e._asyncToGenerator((function*(e,r){yield Promise.all([this.collectSymbolFields(e,r),this.collectVVRequiredFields(e,r)])}));function t(e,t){return r.apply(this,arguments)}return t}(),i.collectSymbolFields=function(){var r=e._asyncToGenerator((function*(e,r){yield Promise.all(this.getSymbols().map((t=>t.collectRequiredFields(e,r))))}));function t(e,t){return r.apply(this,arguments)}return t}(),i.getSymbol=function(e,r){return this.symbol},i.getSymbolAsync=function(){var r=e._asyncToGenerator((function*(e,r){return this.symbol}));function t(e,t){return r.apply(this,arguments)}return t}(),i.getSymbols=function(){return this.symbol?[this.symbol]:[]},i.getAttributeHash=function(){return this.visualVariables&&this.visualVariables.reduce(((e,r)=>e+r.getAttributeHash()),"")},i.getMeshHash=function(){return this.getSymbols().reduce(((e,r)=>e+JSON.stringify(r)),"")},i.clone=function(){return new u({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:t.clone(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})},e._createClass(o,[{key:"arcadeRequired",get:function(){return this.arcadeRequiredForVisualVariables}}]),o}(a.VisualVariablesMixin(l));r.__decorate([o.property({type:String,json:{write:!0}})],p.prototype,"description",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],p.prototype,"label",void 0),r.__decorate([o.property(c.rendererSymbolProperty)],p.prototype,"symbol",void 0),r.__decorate([s.enumeration({simple:"simple"})],p.prototype,"type",void 0),p=u=r.__decorate([n.subclass("esri.renderers.SimpleRenderer")],p);return p}));
