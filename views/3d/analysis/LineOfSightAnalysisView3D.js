/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/Collection","../../../core/Evented","../../../core/HandleOwner","../../../core/maybe","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../../chunks/vec3f64","./AnalysisView3D","./LineOfSight/LineOfSightConfiguration","./LineOfSight/LineOfSightController","./LineOfSight/LineOfSightVisualization"],(function(t,e,i,o,r,n,s,a,l,p,c,y,u,d,_,h,g){"use strict";let f=function(e){function i(t){var i;return(i=e.call(this,t)||this).type="line-of-sight-view-3d",i.computations=new o,i.elevationAlignedObserver=null,i.configuration=new _.LineOfSightConfiguration,i.observerEngineLocation=u.create(),i.cursorTarget=null,i}t._inheritsLoose(i,e);var r=i.prototype;return r.initialize=function(){const t=this.view,e=this.analysis;this._analysisController=new h.LineOfSightController({analysis:e,analysisViewData:this,view:t}),this._analysisVisualization=new g.LineOfSightVisualization({analysis:e,analysisViewData:this,view:t}),this.handles.add([this._analysisController.on("result-changed",(t=>{t.target!==this.cursorTarget&&this.emit("result-changed",t)}))])},r.destroy=function(){this._analysisController=s.destroyMaybe(this._analysisController),this._analysisVisualization=s.destroyMaybe(this._analysisVisualization)},r.getResultForTarget=function(t){const e=this.computations.find((e=>e.target===t));return s.applySome(e,(t=>t.result))},t._createClass(i,[{key:"results",get:function(){return this.computations.map((t=>t.result))}},{key:"priority",get:function(){return this._analysisController.priority},set:function(t){this._analysisController.priority=t}},{key:"updating",get:function(){return s.isSome(this._analysisController)&&this._analysisController.updating}},{key:"testInfo",get:function(){return{visualization:this._analysisVisualization,controller:this._analysisController}}}]),i}(d.AnalysisView3D(n.HandleOwnerMixin(r.EventedMixin(i))));e.__decorate([a.property()],f.prototype,"type",void 0),e.__decorate([a.property()],f.prototype,"analysis",void 0),e.__decorate([a.property({readOnly:!0})],f.prototype,"results",null),e.__decorate([a.property()],f.prototype,"priority",null),e.__decorate([a.property()],f.prototype,"computations",void 0),e.__decorate([a.property()],f.prototype,"elevationAlignedObserver",void 0),e.__decorate([a.property()],f.prototype,"configuration",void 0),e.__decorate([a.property()],f.prototype,"observerEngineLocation",void 0),e.__decorate([a.property()],f.prototype,"cursorTarget",void 0),e.__decorate([a.property()],f.prototype,"updating",null),e.__decorate([a.property()],f.prototype,"_analysisController",void 0),e.__decorate([a.property()],f.prototype,"_analysisVisualization",void 0),f=e.__decorate([y.subclass("esri.views.3d.analysis.LineOfSightAnalysisView3D")],f);return f}));
