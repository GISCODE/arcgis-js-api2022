/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/screenUtils","../core/watchUtils","../core/accessorSupport/decorators/aliasOf","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/cast","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","./Widget","./ScaleBar/ScaleBarViewModel","./support/widgetUtils","./support/decorators/messageBundle","../core/Logger","./support/jsxFactory"],(function(e,t,r,s,a,i,l,o,n,c,d,u,b,p,_,h){"use strict";const v={base:"esri-scale-bar esri-widget",labelContainer:"esri-scale-bar__label-container",rulerLabelContainer:"esri-scale-bar__label-container--ruler",lineLabelContainer:"esri-scale-bar__label-container--line",topLabelContainer:"esri-scale-bar__label-container--top",bottomLabelContainer:"esri-scale-bar__label-container--bottom",label:"esri-scale-bar__label",line:"esri-scale-bar__line",topLine:"esri-scale-bar__line--top",bottomLine:"esri-scale-bar__line--bottom",ruler:"esri-scale-bar__ruler",rulerBlock:"esri-scale-bar__ruler-block",barContainer:"esri-scale-bar__bar-container",rulerBarContainer:"esri-scale-bar__bar-container--ruler",lineBarContainer:"esri-scale-bar__bar-container--line",disabled:"esri-disabled"};function y(e){return 2*e}let w=function(t){function a(e,r){var s;return(s=t.call(this,e,r)||this).label=void 0,s.messages=null,s.unit="non-metric",s.view=null,s.viewModel=new u,s}e._inheritsLoose(a,t);var i=a.prototype;return i.initialize=function(){this.own([s.whenTrue(this,"view.stationary",(()=>this.scheduleRender())),s.watch(this,["view.center","view.scale","view.zoom"],(()=>{this.view.stationary&&this.scheduleRender()}))])},i.castStyle=function(e){return"line"===e?e:"ruler"},i.castUnit=function(e){return"metric"===e||"dual"===e?e:"non-metric"},i.render=function(){const e="disabled"===this.get("viewModel.state"),t={[v.disabled]:e};let r,s;if(!e){const{unit:e,style:t}=this,a="metric"===e||"dual"===e,i=50;if("non-metric"===e||"dual"===e){const e=this.viewModel.getScaleBarProperties(i,"non-metric");e&&(s="ruler"===t?this._renderRuler(e):this._renderLine(e,"bottom"))}if(a){const e=this.viewModel.getScaleBarProperties(i,"metric");e&&(r="ruler"===t?this._renderRuler(e):this._renderLine(e,"top"))}}return h.tsx("div",{afterCreate:this._handleRootCreateOrUpdate,afterUpdate:this._handleRootCreateOrUpdate,bind:this,class:this.classes(v.base,t)},r,s)},i._renderRuler=function(e){const t=y(Math.round(e.length)),{messages:r}=this,s=r[e.unit]||r.unknownUnit,a=`${y(e.value)} ${s}`;return h.tsx("div",{class:this.classes(v.barContainer,v.rulerBarContainer),key:"esri-scale-bar__ruler"},h.tsx("div",{class:v.ruler,styles:{width:`${t}px`}},h.tsx("div",{class:v.rulerBlock}),h.tsx("div",{class:v.rulerBlock}),h.tsx("div",{class:v.rulerBlock}),h.tsx("div",{class:v.rulerBlock})),h.tsx("div",{class:this.classes(v.labelContainer,v.rulerLabelContainer)},h.tsx("div",{class:v.label},"0"),h.tsx("div",{class:v.label},a)))},i._renderLine=function(e,t){const{messages:r}=this,s=r[e.unit]||r.unknownUnit,a=`${y(e.value)} ${s}`,i={[v.topLabelContainer]:"top"===t,[v.bottomLabelContainer]:"bottom"===t},l=h.tsx("div",{class:this.classes(v.labelContainer,v.lineLabelContainer,i),key:"esri-scale-bar__label"},h.tsx("div",{class:v.label},a)),o={[v.topLine]:"top"===t,[v.bottomLine]:"bottom"===t},n=y(Math.round(e.length)),c=h.tsx("div",{class:this.classes(v.line,o),key:"esri-scale-bar__line",styles:{width:`${n}px`}});return h.tsx("div",{class:this.classes(v.barContainer,v.lineBarContainer),key:"esri-scale-bar__line-container"},[c,l])},i._handleRootCreateOrUpdate=function(e){const t=this.viewModel;if(!t)return;const s=e.getBoundingClientRect(),a=s.left+window.pageXOffset,i=s.top+window.pageYOffset,l=r.createScreenPoint(a,i);(l.x!==t.scaleComputedFrom.x||l.y!==t.scaleComputedFrom.y)&&(t.scaleComputedFrom=l)},e._createClass(a,[{key:"style",set:function(e){const t="dual"===this.unit?"line":e;this._set("style",t)}}]),a}(d);t.__decorate([n.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],w.prototype,"label",void 0),t.__decorate([n.property(),p.messageBundle("esri/widgets/ScaleBar/t9n/ScaleBar")],w.prototype,"messages",void 0),t.__decorate([n.property()],w.prototype,"style",null),t.__decorate([o.cast("style")],w.prototype,"castStyle",null),t.__decorate([n.property()],w.prototype,"unit",void 0),t.__decorate([o.cast("unit")],w.prototype,"castUnit",null),t.__decorate([a.aliasOf("viewModel.view")],w.prototype,"view",void 0),t.__decorate([n.property()],w.prototype,"viewModel",void 0),w=t.__decorate([c.subclass("esri.widgets.ScaleBar")],w);return w}));
