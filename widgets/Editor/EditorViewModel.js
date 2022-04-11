/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Collection","../../core/Error","../../core/Evented","../../core/HandleOwner","../../core/Logger","../../core/watchUtils","../../core/accessorSupport/decorators/aliasOf","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../layers/GraphicsLayer","../../views/interactive/snapping/SnappingOptions","../Attachments/AttachmentsViewModel","./CreateFeaturesWorkflow","./CreateWorkflow","./deprecationUtils","./UpdateWorkflow","../FeatureForm/FeatureFormViewModel","../FeatureTemplates/FeatureTemplatesViewModel","../Sketch/SketchViewModel","../Spinner/SpinnerViewModel"],(function(e,t,r,o,a,i,n,s,l,c,u,d,p,f,w,h,y,k,_,v,W,g,m,C,F){"use strict";const b="esri.widgets.Editor.EditorViewModel",T=n.getLogger(b),M=["create","create-features","update"];function A(e,t,r){T.error(new o(e,t,r))}function V(e,t){return e&&e.find((e=>e.layer===t))}let O=function(t){function a(e){var r;return(r=t.call(this,e)||this)._sketchGraphicsLayer=new w({listMode:"hide",internal:!0}),r.activeWorkflow=null,r.activityQueue=[],r.failures=[],r.attachmentsViewModel=new y({abilities:{editing:!0}}),r.featureFormViewModel=new g,r.featureTemplatesViewModel=new m,r.layerInfos=null,r.sketchViewModel=new C({layer:r._sketchGraphicsLayer}),r.snappingOptions=new h,r.spinnerViewModel=new F,r}e._inheritsLoose(a,t);var i=a.prototype;return i.initialize=function(){this.handles.add([s.on(this,"activeWorkflow","cancel",(()=>this.emit("workflow-cancel"))),s.on(this,"activeWorkflow","commit",(()=>this.emit("workflow-commit"))),s.init(this,"view.map",(e=>{e&&e.add(this._sketchGraphicsLayer)})),s.watch(this,"editableItems",(()=>{const{activeWorkflow:e}=this;if(this.refreshCreationTemplates(),!e)return;const{stepId:t}=e;"create"!==e.type?"update"===e.type&&("awaiting-feature-to-update"===t&&!this.canUpdate||"awaiting-update-feature-candidate"===t&&!e.data.candidates.some((e=>{const t=this.editableItems.find((t=>t.layer===e.layer));return t&&t.supports.indexOf("update")>-1})))&&this._cancelWorkflow():"awaiting-feature-creation-info"!==t||this.canCreate||this._cancelWorkflow()}))])},i.destroy=function(){this._cancelWorkflow().then((()=>{var e;null!=(e=this.view)&&e.map&&this.view.map.remove(this._sketchGraphicsLayer),this.view=null}))},i.startCreateWorkflowAtFeatureTypeSelection=function(){var t=e._asyncToGenerator((function*(){if(v.workflowDeprecation(T,"startCreateWorkflowAtFeatureTypeSelection","startCreateFeaturesWorkflowAtFeatureTypeSelection"),!this.canCreate)return void A("editing:unsupported-workflow","Create workflow is unsupported or disabled.");yield this._cancelWorkflow();const e=this._createCreateWorkflow();yield e.start(),this._set("activeWorkflow",e)}));function r(){return t.apply(this,arguments)}return r}(),i.startCreateFeaturesWorkflowAtFeatureTypeSelection=function(){var t=e._asyncToGenerator((function*(){return this.startCreateFeaturesWorkflow()}));function r(){return t.apply(this,arguments)}return r}(),i.startCreateWorkflowAtFeatureCreation=function(){var t=e._asyncToGenerator((function*(e){if(v.workflowDeprecation(T,"startCreateWorkflowAtFeatureCreation","startCreateFeaturesWorkflowAtFeatureCreation"),!this.canCreate)return void A("editing:unsupported-workflow","Create workflow is unsupported or disabled.");yield this._cancelWorkflow();const t=this._createCreateWorkflow("awaiting-feature-to-create");t.data.creationInfo=e,yield t.start(),this._set("activeWorkflow",t)}));function r(e){return t.apply(this,arguments)}return r}(),i.startCreateFeaturesWorkflowAtFeatureCreation=function(){var t=e._asyncToGenerator((function*(e){return this.startCreateFeaturesWorkflow(e,"creating-features")}));function r(e){return t.apply(this,arguments)}return r}(),i.startCreateFeaturesWorkflow=function(){var t=e._asyncToGenerator((function*(e,t="awaiting-feature-creation-info"){if(!this.canCreate)throw new o("editing:unsupported-workflow","Creating features is unsupported or disabled.");yield this._cancelWorkflow();const r=this._createCreateFeaturesWorkflow(e,t);yield r.start(),this._set("activeWorkflow",r)}));function r(e){return t.apply(this,arguments)}return r}(),i.startCreateWorkflowAtFeatureEdit=function(){var t=e._asyncToGenerator((function*(e){if(v.workflowDeprecation(T,"startCreateWorkflowAtFeatureEdit"),!this.canCreate)return void A("editing:unsupported-workflow","Create workflow is unsupported or disabled.");yield this._cancelWorkflow();const t=this._createCreateWorkflow("editing-new-feature");t.data.edits.feature=e,yield t.start(),this._set("activeWorkflow",t)}));function r(e){return t.apply(this,arguments)}return r}(),i.startUpdateWorkflowAtFeatureSelection=function(){var t=e._asyncToGenerator((function*(){if(!this.canUpdate)return void A("editing:unsupported-workflow","Update workflow is unsupported or disabled.");yield this._cancelWorkflow();const e=this._createUpdateWorkflow();yield e.start(),this._set("activeWorkflow",e)}));function r(){return t.apply(this,arguments)}return r}(),i.startUpdateWorkflowAtMultipleFeatureSelection=function(){var t=e._asyncToGenerator((function*(e){if(!this.canUpdate)return void A("editing:unsupported-workflow","Update workflow is unsupported or disabled.");yield this._cancelWorkflow();const t=this._createUpdateWorkflow("awaiting-update-feature-candidate");t.data.candidates=e,yield t.start(),this._set("activeWorkflow",t)}));function r(e){return t.apply(this,arguments)}return r}(),i.startUpdateWorkflowAtFeatureEdit=function(){var t=e._asyncToGenerator((function*(e){if(!this.canUpdate)return void A("editing:unsupported-workflow","Update workflow is unsupported or disabled.");yield this._cancelWorkflow();const t=this._createUpdateWorkflow("editing-existing-feature");t.data.edits.feature=e,yield t.start(),this._set("activeWorkflow",t)}));function r(e){return t.apply(this,arguments)}return r}(),i.deleteFeatureFromWorkflow=function(){var t=e._asyncToGenerator((function*(){const{activeWorkflow:e}=this;e&&"update"===e.type?(yield this._delete(e.data.edits.feature),yield e.reset()):A("editing:unsupported-workflow","Deleting requires an active update workflow.")}));function r(){return t.apply(this,arguments)}return r}(),i.cancelWorkflow=function(){var t=e._asyncToGenerator((function*(e){return this._cancelWorkflow({warn:!0,...e})}));function r(e){return t.apply(this,arguments)}return r}(),i.refreshCreationTemplates=function(){const e=[];for(const{layer:t,supports:r}of this.editableItems)t.loaded&&r.includes("create")&&e.push(t);this.featureTemplatesViewModel.layers=e},i._cancelWorkflow=function(){var t=e._asyncToGenerator((function*(e){const t=this.activeWorkflow;if(!t)return void(e&&e.warn&&A("editing:no-active-workflow","There is no active workflow to cancel."));if(!e||!1!==e.force)return this.emit("workflow-cancel"),this._set("activeWorkflow",null),void(yield t.cancel(e));yield t.cancel(e),this._set("activeWorkflow",null)}));function r(e){return t.apply(this,arguments)}return r}(),i._createCreateFeaturesWorkflow=function(e,t){return k.create(this,e,t,((e,t)=>this._applyEdits(e,t)))},i._createCreateWorkflow=function(e){return _.create(this,e,((e,t)=>this._applyEdits(e,t)))},i._createUpdateWorkflow=function(e){return W.create(this,e,((e,t)=>this._applyEdits(e,t)))},i._delete=function(){var t=e._asyncToGenerator((function*(e){const t=e.sourceLayer;"applyEdits"in t&&(yield this._applyEdits(t,{deleteFeatures:[e]}))}));function r(e){return t.apply(this,arguments)}return r}(),i._applyEdits=function(){var t=e._asyncToGenerator((function*(t,r){var o=this;yield this._queueOperation(e._asyncToGenerator((function*(){const e=yield o.view.whenLayerView(t),a=yield t.applyEdits(r);return yield s.whenFalseOnce(e,"updating"),a})))}));function r(e,r){return t.apply(this,arguments)}return r}(),i._queueOperation=function(e){this.activityQueue.push(e),this.notifyChange("syncing");const t=(e,t)=>{const r=t.indexOf(e);r>-1&&t.splice(r,1)};return e().then((({addFeatureResults:e,deleteFeatureResults:t,updateFeatureResults:r})=>{const o=e.find((e=>!!e.error))||r.find((e=>!!e.error))||t.find((e=>!!e.error));if(o)throw o.error})).catch((r=>{A("editing:operation-error","An error occurred.",{error:r});const o={error:r,retry:()=>(t(o,this.failures),this._queueOperation(e)),cancel:()=>{t(o,this.failures)}};this._set("failures",[...this.failures,o])})).then((()=>{t(e,this.activityQueue),this.notifyChange("syncing")}))},e._createClass(a,[{key:"allowedWorkflows",get:function(){return this._get("allowedWorkflows")},set:function(e){e&&0!==e.length||(e=[...M]),this._set("allowedWorkflows",e)}},{key:"canCreate",get:function(){return this.editableItems.some((e=>e.supports.includes("create")))}},{key:"canUpdate",get:function(){return this.editableItems.some((e=>e.supports.includes("update")))}},{key:"editableItems",get:function(){var e,t,o;const a=null==(e=this.view)?void 0:e.allLayerViews;if(!a)return new r;const i=new Set(null==(t=this.view)||null==(o=t.map)?void 0:o.editableLayers);return a.filter((e=>i.has(e.layer))).map((e=>{const{layer:t,suspended:r}=e,{data:o,operations:a}=t.capabilities,i=V(this.layerInfos,t),n="supportsAttachment"in o&&o.supportsAttachment&&(!i||!1!==i.allowAttachments);if(r)return{hasAttachments:n,layer:t,supports:[]};const s=[];return a.supportsAdd&&(this.allowedWorkflows.includes("create")||this.allowedWorkflows.includes("create-features"))&&(!i||!1!==i.enabled&&!1!==i.addEnabled)&&s.push("create"),a.supportsUpdate&&this.allowedWorkflows.includes("update")&&(!i||!1!==i.enabled&&!1!==i.updateEnabled)&&s.push("update"),!1!==(i&&i.deleteEnabled)&&a.supportsDelete&&s.push("delete"),{hasAttachments:n,layer:t,supports:s}})).reverse()}},{key:"state",get:function(){if(!this.get("view.ready")||0===this.editableItems.length)return"disabled";const e=this.attachmentsViewModel.mode;if("add"===e)return"adding-attachment";if("edit"===e)return"editing-attachment";const{activeWorkflow:t}=this;return t?t.stepId:"ready"}},{key:"syncing",get:function(){return this.activityQueue.length>0}},{key:"view",set:function(e){this.sketchViewModel.view=e,this.spinnerViewModel.view=e,this._set("view",e)}}]),a}(i.HandleOwnerMixin(a.EventedAccessor));t.__decorate([p.property({readOnly:!0})],O.prototype,"activeWorkflow",void 0),t.__decorate([p.property({readOnly:!0})],O.prototype,"activityQueue",void 0),t.__decorate([p.property({value:[...M]})],O.prototype,"allowedWorkflows",null),t.__decorate([p.property({readOnly:!0})],O.prototype,"canCreate",null),t.__decorate([p.property({readOnly:!0})],O.prototype,"canUpdate",null),t.__decorate([p.property({readOnly:!0})],O.prototype,"editableItems",null),t.__decorate([p.property({readOnly:!0})],O.prototype,"failures",void 0),t.__decorate([p.property()],O.prototype,"attachmentsViewModel",void 0),t.__decorate([p.property()],O.prototype,"featureFormViewModel",void 0),t.__decorate([p.property()],O.prototype,"featureTemplatesViewModel",void 0),t.__decorate([p.property()],O.prototype,"layerInfos",void 0),t.__decorate([p.property()],O.prototype,"sketchViewModel",void 0),t.__decorate([l.aliasOf("sketchViewModel.snappingOptions")],O.prototype,"snappingOptions",void 0),t.__decorate([p.property()],O.prototype,"spinnerViewModel",void 0),t.__decorate([p.property()],O.prototype,"state",null),t.__decorate([p.property({readOnly:!0})],O.prototype,"syncing",null),t.__decorate([p.property()],O.prototype,"view",null),O=t.__decorate([f.subclass(b)],O);return O}));
