/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Collection","../../core/collectionUtils","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./LayerView"],(function(e,i,r,s,t,l,a,n,o,y){"use strict";let c=function(i){function t(e){var s;return(s=i.call(this,e)||this).type="group",s.layerViews=new r,s}e._inheritsLoose(t,i);var l=t.prototype;return l.initialize=function(){this.handles.add([this.layerViews.on("change",(e=>this._layerViewsChangeHandler(e))),this.layer.watch("visibilityMode",(()=>this._visibilityModeHandler()),!0),this.watch("visible",(()=>this._visibleHandler()),!0)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})},l.isUpdating=function(){return this.layerViews.some((e=>e.updating))},l._hasLayerViewVisibleOverrides=function(){return this.layerViews.some((e=>e._isOverridden("visible")))},l._findLayerViewForLayer=function(e){return e&&this.layerViews.find((i=>i.layer===e))},l._firstVisibleOnLayerOrder=function(){const e=this.layer.layers.find((e=>{const i=this._findLayerViewForLayer(e);return i&&i.visible}));return e&&this._findLayerViewForLayer(e)},l._enforceExclusiveVisibility=function(e){this._hasLayerViewVisibleOverrides()&&(e||!(e=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.getItemAt(0))),this.layerViews.forEach((i=>{i.visible=i===e})))},l._layerViewsChangeHandler=function(e){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map((e=>e.watch("visible",(i=>this._layerViewVisibleHandler(i,e)),!0))).toArray(),"grouplayerview:visible");const i=e.added[e.added.length-1];let r=null;i&&i.visible&&(r=i),this._enforceVisibility(r)},l._enforceVisibility=function(e){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":{const e=this.visible;this.layerViews.forEach((i=>{i.visible=e}));break}case"exclusive":this._enforceExclusiveVisibility(e)}},l._visibilityModeHandler=function(){this._enforceVisibility()},l._layerViewVisibleHandler=function(e,i){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":e!==this.visible&&(i.visible=this.visible);break;case"exclusive":this._enforceExclusiveVisibility(e&&i)}},l._visibleHandler=function(){var e;this._hasLayerViewVisibleOverrides()&&"inherited"===(null==(e=this.layer)?void 0:e.visibilityMode)&&this._enforceVisibility()},e._createClass(t,[{key:"layerViews",set:function(e){this._set("layerViews",s.referenceSetter(e,this._get("layerViews")))}},{key:"updatingProgress",get:function(){return 0===this.layerViews.length?1:this.layerViews.reduce(((e,i)=>e+i.updatingProgress),0)/this.layerViews.length}}]),t}(y);i.__decorate([t.property({cast:s.castForReferenceSetter})],c.prototype,"layerViews",null),i.__decorate([t.property({readOnly:!0})],c.prototype,"updatingProgress",null),i.__decorate([t.property()],c.prototype,"view",void 0),c=i.__decorate([o.subclass("esri.views.layers.GroupLayerView")],c);return c}));
