/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["require","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/maybe","../../core/accessorSupport/decorators/aliasOf","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/cast","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../Widget","./widgetUtils","./decorators/messageBundle","../../core/Logger","./jsxFactory","./SnappingControls/SnappingControlsViewModel"],(function(e,t,i,n,s,l,r,a,o,c,d,p,g,u,h,b){"use strict";const w={header:!0,enabledToggle:!0,selfEnabledToggle:!0,featureEnabledToggle:!0,layerList:!0},y={base:"esri-snapping-controls",container:"esri-snapping-controls__container",panel:"esri-snapping-controls__panel",item:"esri-snapping-controls__item",toggleBlock:"esri-snapping-controls__toggle-block",layerListBlock:"esri-snapping-controls__layer-list-block",layerList:"esri-snapping-controls__layer-list",nestedContainer:"esri-snapping-controls__nested-container",disabled:"esri-disabled",esriWidget:"esri-widget",widgetIcon:"esri-icon-vertex-gps"};let f=function(i){function s(e,t){var n;return(n=i.call(this,(()=>{const{view:t,viewModel:i,snappingOptions:n,...s}=e;return s})(),t)||this).label=void 0,n.messages=null,n.messagesCommon=null,n.snappingOptions=null,n.view=null,n.visibleElements={...w},n._defaultViewModel=null,null!=e&&e.viewModel?n.viewModel=e.viewModel:(n._defaultViewModel=new b({snappingOptions:e.snappingOptions,view:e.view}),n.viewModel=n._defaultViewModel),n}t._inheritsLoose(s,i);var l=s.prototype;return l.destroy=function(){this._defaultViewModel=n.destroyMaybe(this._defaultViewModel)},l.loadDependencies=function(){return Promise.all([new Promise(((t,i)=>e(["../../chunks/calcite-action"],t,i))),new Promise(((t,i)=>e(["../../chunks/calcite-block"],t,i))),new Promise(((t,i)=>e(["../../chunks/calcite-icon"],t,i))),new Promise(((t,i)=>e(["../../chunks/calcite-label"],t,i))),new Promise(((t,i)=>e(["../../chunks/calcite-panel"],t,i))),new Promise(((t,i)=>e(["../../chunks/calcite-pick-list"],t,i))),new Promise(((t,i)=>e(["../../chunks/calcite-pick-list-item"],t,i))),new Promise(((t,i)=>e(["../../chunks/calcite-switch"],t,i)))])},l.castVisibleElements=function(e){return{...w,...e}},l.render=function(){const{label:e,visibleElements:{header:t}}=this;return h.tsx("div",{"aria-label":e,class:this.classes(y.base,y.esriWidget)},h.tsx("div",{class:y.container},t?this.renderHeaderView():this.renderContent()))},l.renderHeaderView=function(){return h.tsx("calcite-panel",{heading:this.label,class:y.panel},this.renderContent())},l.renderContent=function(){return[this.renderToggles(),this.renderLayerList()]},l.renderToggles=function(){return h.tsx("calcite-block",{class:y.toggleBlock,heading:"",open:!0},this.renderEnabledToggle(),h.tsx("div",{class:y.nestedContainer},this.renderSelfEnabledToggle(),this.renderFeatureEnabledToggle()))},l.renderEnabledToggle=function(){if(!this.visibleElements.enabledToggle)return;const{messages:{enableSnapping:e},viewModel:{snappingOptions:{enabled:t,enabledToggled:i}}}=this;return h.tsx("calcite-label",{layout:"inline-space-between"},e,h.tsx("calcite-switch",{checked:t,disabled:i,bind:this,onCalciteSwitchChange:this._enableSnappingSwitchChange}))},l.renderSelfEnabledToggle=function(){if(!this.visibleElements.selfEnabledToggle)return;const{messages:{geometryGuides:e},viewModel:{snappingOptions:{enabled:t,selfEnabled:i,enabledToggled:n}}}=this;return h.tsx("calcite-label",{layout:"inline-space-between"},e,h.tsx("calcite-switch",{checked:i,disabled:n||!t,bind:this,onCalciteSwitchChange:this._selfEnabledSwitchChange}))},l.renderFeatureEnabledToggle=function(){if(!this.visibleElements.featureEnabledToggle)return;const{messages:{featureToFeature:e},viewModel:{snappingOptions:{enabled:t,featureEnabled:i,enabledToggled:n}}}=this;return h.tsx("calcite-label",{layout:"inline-space-between"},e,h.tsx("calcite-switch",{checked:i,disabled:n||!t,bind:this,onCalciteSwitchChange:this._featureEnabledSwitchChange}))},l.renderLayerList=function(){if(!this.visibleElements.layerList)return;const{messages:{snappingLayers:e,searchLayers:t}}=this;return h.tsx("calcite-block",{heading:e,class:y.layerListBlock,open:!0,collapsible:!0},h.tsx("calcite-pick-list",{class:y.layerList,multiple:!0,bind:this,onCalciteListChange:this._layerListChange,filterEnabled:this.viewModel.layerListViewModel.operationalItems.length>=10,"filter-placeholder":t},this.renderLayerListItemCollection(this.viewModel.layerListViewModel.operationalItems)))},l.renderLayerListItemCollection=function(e){return e.map((e=>e.children.length>0?this.renderLayerListItemGroup(e):this.renderLayerListItem(e))).toArray()},l.renderLayerListItem=function(e){var t;const{messages:{untitledLayer:i}}=this,n=e.title||i,s=(null==(t=e.children)?void 0:t.length)>0,l=e.enabled;return h.tsx("calcite-pick-list-item",{slot:s?"parent-item":null,key:`${this.id}-pick-list-item-${e.uid}`,label:n,value:e.layer.id,selected:l})},l.renderLayerListItemGroup=function(e){const t=e.title||this.messages.untitledLayer;return h.tsx("calcite-pick-list-group",{"group-title":t,key:e.uid},[...this.renderLayerListItemCollection(e.children)])},l._enableSnappingSwitchChange=function(e){this.snappingOptions.enabled=e.target.checked},l._featureEnabledSwitchChange=function(e){this.snappingOptions.featureEnabled=e.target.checked},l._selfEnabledSwitchChange=function(e){this.snappingOptions.selfEnabled=e.target.checked},l._layerListChange=function(){var e=t._asyncToGenerator((function*(e){const t=yield e.target.getSelectedItems();this.viewModel.updateEnabledFeatureSources([...t.keys()])}));function i(t){return e.apply(this,arguments)}return i}(),t._createClass(s,[{key:"viewModel",set:function(e){e!==this._get("viewModel")&&((n.isNone(this._defaultViewModel)||this._defaultViewModel!==e)&&(this._defaultViewModel=n.destroyMaybe(this._defaultViewModel)),this._set("viewModel",e))}}]),s}(d);i.__decorate([o.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],f.prototype,"label",void 0),i.__decorate([o.property(),g.messageBundle("esri/widgets/support/SnappingControls/t9n/SnappingControls")],f.prototype,"messages",void 0),i.__decorate([o.property(),g.messageBundle("esri/t9n/common")],f.prototype,"messagesCommon",void 0),i.__decorate([s.aliasOf("viewModel.snappingOptions")],f.prototype,"snappingOptions",void 0),i.__decorate([s.aliasOf("viewModel.view")],f.prototype,"view",void 0),i.__decorate([o.property()],f.prototype,"viewModel",null),i.__decorate([o.property()],f.prototype,"visibleElements",void 0),i.__decorate([a.cast("visibleElements")],f.prototype,"castVisibleElements",null),f=i.__decorate([c.subclass("esri.widgets.support.SnappingControls")],f);return f}));
