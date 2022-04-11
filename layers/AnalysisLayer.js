/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Logger","../core/maybe","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass","../core/support/OwningCollection","../geometry/projection","./Layer","../support/AnalysesCollection"],(function(e,t,n,s,o,r,a,l,i,c,y,u,p){"use strict";const d=n.getLogger("esri.layers.AnalysisLayer");let h=function(t){function n(e){var n;return(n=t.call(this,e)||this).type="analysis",n.analyses=new p.AnalysesCollection,n}e._inheritsLoose(n,t);var o=n.prototype;return o.destroy=function(){this.analyses.destroy()},o.add=function(e){this.analyses.add(e)},o.addMany=function(e){this.analyses.addMany(e)},o.remove=function(e){this.analyses.remove(e)},o.removeMany=function(e){this.analyses.removeMany(e)},o._calculateFullExtent=function(){return this.analyses.reduce(((e,t)=>{const n=t.extent;if(s.isNone(n))return e;const o=y.tryProjectWithZConversion(n,this.spatialReference);var r,a,l;return s.isNone(o)?(d.warnOnce("#fullExtent",`Extent of analysis (type: '${t.type}', id: '${null!=(r=t.id)?r:"no id"}') could not be projected to the spatial reference of the AnalysisLayer (title: '${null!=(a=this.title)?a:"no title"}', id: '${null!=(l=this.id)?l:"no id"}')`),e):s.isNone(e)?o:o.union(e)}),null)},e._createClass(n,[{key:"fullExtent",get:function(){return s.isNone(this.analyses)?null:this._calculateFullExtent()}}]),n}(u);t.__decorate([o.property({json:{read:!1},readOnly:!0})],h.prototype,"type",void 0),t.__decorate([o.property(c.owningCollectionProperty(p.AnalysesCollection,"analyses"))],h.prototype,"analyses",void 0),t.__decorate([o.property({readOnly:!0})],h.prototype,"fullExtent",null),h=t.__decorate([i.subclass("esri.layers.AnalysisLayer")],h);return h}));