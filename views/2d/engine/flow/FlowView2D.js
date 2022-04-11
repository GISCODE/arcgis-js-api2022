/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../Graphic","../../../../core/HandleOwner","../../../../core/reactiveUtils","../../../../core/accessorSupport/decorators/property","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/subclass","./dataUtils","./FlowContainer","./FlowStrategy","./FlowStyle"],(function(e,t,r,a,o,i,n,s,l,c,p,d,u,y){"use strict";let h=function(t){function a(){var r;return(r=t.apply(this,arguments)||this)._loadImagery=(e,t,a,o,i)=>p.loadImagery(r.layer,e,t,a,o,i),r._createStreamlinesMesh=(e,t,a)=>r.layer.createStreamlinesMesh({flowData:t,rendererSettings:e},{signal:a}),r.attached=!1,r.container=null,r.layer=null,r.type="flow",r.timeExtent=null,r.redrawOrRefetch=e._asyncToGenerator((function*(){r._updateVisualization()})),r}e._inheritsLoose(a,t);var i=a.prototype;return i.attach=function(){const{layer:e}=this,t=()=>{this._loadImagery=(t,r,a,o,i)=>p.loadImagery(e,t,r,a,o,i),this._updateVisualization()};"multidimensionalDefinition"in e?this.handles.add(o.watch((()=>e.multidimensionalDefinition),t)):this.handles.add([o.watch((()=>e.mosaicRule),t),o.watch((()=>e.renderingRule),t),o.watch((()=>e.definitionExpression),t)]),this.container=new d,this._strategy=new u({flowContainer:this.container}),this._updateVisualization()},i.detach=function(){this._strategy.destroy(),this.container.removeAllChildren(),this.container=null,this.handles.removeAll()},i.update=function(e){e.stationary?this._strategy.update(e):this.layerView.requestUpdate()},i.hitTest=function(e){return new r({attributes:{},geometry:e.clone(),layer:this.layer})},i.moveEnd=function(){},i.doRefresh=function(){var t=e._asyncToGenerator((function*(){}));function r(){return t.apply(this,arguments)}return r}(),i._updateVisualization=function(){if("flow"!==this.layer.renderer.type)return;const e=new y(this._loadImagery,this._createStreamlinesMesh,this.layer.renderer,this.timeExtent);this.container.flowStyle=e,this.layerView.requestUpdate()},e._createClass(a,[{key:"updating",get:function(){return!this._strategy||this._strategy.updating}}]),a}(a.HandleOwner);t.__decorate([i.property()],h.prototype,"_strategy",void 0),t.__decorate([i.property()],h.prototype,"attached",void 0),t.__decorate([i.property()],h.prototype,"container",void 0),t.__decorate([i.property()],h.prototype,"layer",void 0),t.__decorate([i.property()],h.prototype,"layerView",void 0),t.__decorate([i.property()],h.prototype,"type",void 0),t.__decorate([i.property()],h.prototype,"updating",null),t.__decorate([i.property()],h.prototype,"timeExtent",void 0),h=t.__decorate([c.subclass("esri.views.2d.engine.flow.FlowView2D")],h);return h}));