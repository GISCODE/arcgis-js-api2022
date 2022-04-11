/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../analysis/LineOfSightAnalysis","../../analysis/LineOfSightAnalysisObserver","../../analysis/LineOfSightAnalysisTarget","../../core/Collection","../../core/collectionUtils","../../core/Handles","../../core/handleUtils","../../core/maybe","../../core/reactiveUtils","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../../views/3d/interactive/analysisTools/lineOfSight/LineOfSightTool","./LineOfSightTarget","../support/InteractiveAnalysisViewModel"],(function(e,t,s,n,i,o,a,r,l,c,d,h,g,y,u,p,T,v,_){"use strict";const f=o.ofType(v);let w=function(t){function o(e){var s;return(s=t.call(this,e)||this).analysis=null,s.supportedViewType="3d",s.unsupportedErrorMessage="LineOfSightViewModel is only supported in 3D views.",s._handles=new r,s._vmTargetsToConnection=new Map,s._analysisTargetsToConnection=new Map,s}e._inheritsLoose(o,t);var h=o.prototype;return h.initialize=function(){this._handles.add([this.targets.on("after-add",(e=>this._onViewModelTargetAdded(e.item))),this.targets.on("after-remove",(e=>this._onViewModelTargetRemoved(e.item))),d.watch((()=>this.analysis),(e=>this._onAnalysisChange(e)),d.syncAndInitial)])},h.destroy=function(){this._analysisTargetsToConnection.forEach((e=>e.remove())),this._handles=c.destroyMaybe(this._handles)},h.clear=function(){this.removeTool(),this.observer=null,this.targets.removeAll()},h.continue=function(){c.isSome(this.tool)&&this.tool.continue()},h.stop=function(){c.isSome(this.tool)&&this.tool.stop()},h.constructAnalysis=function(){return new s},h.constructTool=function(){return new T.LineOfSightTool({view:c.unwrap(this.view),analysis:this.analysis,analysisView:c.unwrap(this.analysisView),visible:this.visible})},h.onConnectToAnalysisView=function(){var t=e._asyncToGenerator((function*(e){this._handles.add([e.on("result-changed",(e=>{const t=this._analysisTargetsToConnection.get(e.target);c.isSome(e.result)?(t.viewModelTarget.intersectedGraphic=e.result.intersectedGraphic,t.viewModelTarget.intersectedLocation=c.unwrap(e.result.intersectedLocation),t.viewModelTarget.visible=e.result.visible):(t.viewModelTarget.intersectedGraphic=null,t.viewModelTarget.intersectedLocation=null,t.viewModelTarget.visible=void 0)}))],"view")}));function s(e){return t.apply(this,arguments)}return s}(),h.onDisconnectFromAnalysisView=function(){null!=this._handles&&this._handles.remove("view")},h._onViewModelTargetAdded=function(e){if(this._vmTargetsToConnection.get(e))return;const t=new i({position:e.location});this._connectViewModelWithAnalysisTarget(e,t),this.analysis.targets.add(t)},h._onViewModelTargetRemoved=function(e){const t=this._vmTargetsToConnection.get(e);t&&(t.remove(),this.analysis.targets.remove(t.analysisTarget))},h._onAnalysisTargetAdded=function(e){if(this._analysisTargetsToConnection.get(e))return;const t=new v({location:c.applySome(e.position,(e=>e.clone()))});this._connectViewModelWithAnalysisTarget(t,e),this.targets.add(t)},h._onAnalysisTargetRemoved=function(e){const t=this._analysisTargetsToConnection.get(e);t&&(t.remove(),this.targets.remove(t.viewModelTarget))},h._connectViewModelWithAnalysisTarget=function(e,t){let s=!1;const n=l.handlesGroup([d.watch((()=>t.position),(t=>{s||(s=!0,e.location=c.applySome(t,(e=>e.clone())),s=!1)}),d.sync),d.watch((()=>e.location),(e=>{s||(s=!0,t.position=c.applySome(e,(e=>e.clone())),s=!1)}),d.sync)]),i={analysisTarget:t,viewModelTarget:e,remove:()=>{n.remove(),this._vmTargetsToConnection.delete(e),this._analysisTargetsToConnection.delete(t)}};this._vmTargetsToConnection.set(e,i),this._analysisTargetsToConnection.set(t,i)},h._onAnalysisChange=function(e){const t="analysis";this._handles.remove(t),this._handles.add([this.analysis.targets.on("after-add",(e=>this._onAnalysisTargetAdded(e.item))),this.analysis.targets.on("after-remove",(e=>this._onAnalysisTargetRemoved(e.item)))],t),this.targets.removeAll(),e.targets.forEach((e=>{this._onAnalysisTargetAdded(e)}))},e._createClass(o,[{key:"state",get:function(){return this.disabled||!this.ready?"disabled":c.isNone(this.tool)||"pending"===this.tool.toolState?"ready":this.tool.state}},{key:"observer",get:function(){return c.isSome(this.analysis.observer)?this.analysis.observer.position:null},set:function(e){this.analysis.observer=new n({position:e})}},{key:"targets",get:function(){return this._get("targets")||new f},set:function(e){this._set("targets",a.referenceSetter(e,this.targets,f))}},{key:"testInfo",get:function(){return{getAnalysisTargetFromViewModelTarget:e=>c.applySome(this._vmTargetsToConnection.get(e),(e=>e.analysisTarget))}}}]),o}(_.InteractiveAnalysisViewModel);t.__decorate([h.property({type:s})],w.prototype,"analysis",void 0),t.__decorate([h.property({readOnly:!0})],w.prototype,"state",null),t.__decorate([h.property()],w.prototype,"observer",null),t.__decorate([h.property({type:f,cast:a.castForReferenceSetter,nonNullable:!0})],w.prototype,"targets",null),w=t.__decorate([p.subclass("esri.widgets.lineOfSight.LineOfSightViewModel")],w);return w}));
