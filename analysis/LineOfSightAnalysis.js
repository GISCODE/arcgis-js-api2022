/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","./Analysis","./LineOfSightAnalysisObserver","./LineOfSightAnalysisTarget","../core/Collection","../core/collectionUtils","../core/maybe","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass","../geometry/Extent","../geometry/support/aaBoundingRect"],(function(e,t,r,o,s,n,i,a,l,p,c,u,y,g,d){"use strict";const f=n.ofType(s);let h=function(t){function r(e){var r;return(r=t.call(this,e)||this).type="line-of-sight",r.observer=null,r.nonEditableMessage="Assign an observer location to the analysis to allow editing.",r}return e._inheritsLoose(r,t),e._createClass(r,[{key:"targets",get:function(){return this._get("targets")||new f},set:function(e){this._set("targets",i.referenceSetter(e,this.targets,f))}},{key:"extent",get:function(){if(a.isNone(this.observer)||a.isNone(this.observer.position))return null;const e=this.observer.position,t=d.fromValues(e.x,e.y,e.x,e.y);for(const r of this.targets)a.isSome(r.position)&&d.expand(t,r.position,t);return g.fromBounds(t,e.spatialReference)}},{key:"requiredPropertiesForEditing",get:function(){return[this.observer]}}]),r}(r);t.__decorate([l.property({type:["line-of-sight"]})],h.prototype,"type",void 0),t.__decorate([l.property({type:o})],h.prototype,"observer",void 0),t.__decorate([l.property({cast:i.castForReferenceSetter,type:f,nonNullable:!0})],h.prototype,"targets",null),t.__decorate([l.property({value:null})],h.prototype,"extent",null),t.__decorate([l.property({readOnly:!0})],h.prototype,"requiredPropertiesForEditing",null),t.__decorate([l.property({readOnly:!0})],h.prototype,"nonEditableMessage",void 0),h=t.__decorate([y.subclass("esri.analysis.LineOfSightAnalysis")],h);return h}));
