/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../Graphic","../../../core/Collection","../../../core/maybe","../../../core/watchUtils","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/set","../../../core/accessorSupport/decorators/subclass","./LayerView2D","./graphics/GraphicContainer","./graphics/GraphicsView2D","../../layers/LayerView"],(function(e,i,t,s,r,n,a,h,o,c,l,p,u,g,d,f){"use strict";const y="sublayers",w="layerView",_=Object.freeze({remove(){},pause(){},resume(){}});let V=function(i){function a(){var e;return(e=i.apply(this,arguments)||this)._highlightIds=new Map,e}e._inheritsLoose(a,i);var h=a.prototype;return h.fetchPopupFeatures=function(){var i=e._asyncToGenerator((function*(e){return Array.from(this.graphicsViews(),(i=>i.hitTest(e).filter((e=>!!e.popupTemplate)))).flat()}));function t(e){return i.apply(this,arguments)}return t}(),h.graphicsViews=function*(){r.isSome(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():r.isSome(this._graphicsViews)?yield*this._graphicsViews:yield*[]},h.hitTest=function(){var i=e._asyncToGenerator((function*(i,t){var s=this;const n=Array.from(this.graphicsViews(),function(){var t=e._asyncToGenerator((function*(e){const t=yield e.hitTest(i);if(r.isSome(s._graphicsViewsFeatureCollectionMap)){const i=s._graphicsViewsFeatureCollectionMap.get(e);for(const e of t)!e.popupTemplate&&i.popupTemplate&&(e.popupTemplate=i.popupTemplate)}return t}));return function(e){return t.apply(this,arguments)}}());return(yield Promise.all(n)).flat()}));function t(e,t){return i.apply(this,arguments)}return t}(),h.highlight=function(e){let i;return"number"==typeof e?i=[e]:e instanceof t?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):s.isCollection(e)&&(i=e.map((e=>e&&e.uid)).toArray()),i=i.filter((e=>null!=e)),i.length?(this._addHighlight(i),{remove:()=>{this._removeHighlight(i)}}):_},h.update=function(e){for(const i of this.graphicsViews())i.processUpdate(e)},h.attach=function(){const e=this.view,i=()=>this.requestUpdate(),t=this.layer.featureCollections;if(r.isSome(t)&&t.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of t){const t=new g(this.view.featuresTilingScheme);t.fadeTransitionEnabled=!0;const r=new d({view:e,graphics:s.source,renderer:s.renderer,requestUpdateCallback:i,container:t});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.handles.add([n.init(s,"visible",(e=>r.container.visible=e)),n.init(r,"updating",(()=>this.notifyChange("updating")))],w)}this._updateHighlight()}else r.isSome(this.layer.sublayers)&&this.handles.add(n.on(this.layer,"sublayers","change",(()=>this._createGraphicsViews()),(()=>this._createGraphicsViews()),(()=>this._destroyGraphicsViews())),y)},h.detach=function(){this._destroyGraphicsViews(),this.handles.remove(y)},h.moveStart=function(){},h.moveEnd=function(){},h.viewChange=function(){for(const e of this.graphicsViews())e.viewChange()},h.isUpdating=function(){for(const e of this.graphicsViews())if(e.updating)return!0;return!1},h._destroyGraphicsViews=function(){this.container.removeAllChildren(),this.handles.remove(w);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null},h._createGraphicsViews=function(){if(this._destroyGraphicsViews(),r.isNone(this.layer.sublayers))return;const e=[],i=this.view,t=()=>this.requestUpdate();for(const s of this.layer.sublayers){const r=new g(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const a=new d({view:i,graphics:s.graphics,requestUpdateCallback:t,container:r});this.handles.add([s.on("graphic-update",a.graphicUpdateHandler),n.init(s,"visible",(e=>a.container.visible=e)),n.init(a,"updating",(()=>this.notifyChange("updating")))],w),this.container.addChild(a.container),e.push(a)}this._graphicsViews=e,this._updateHighlight()},h._addHighlight=function(e){for(const i of e)if(this._highlightIds.has(i)){const e=this._highlightIds.get(i);this._highlightIds.set(i,e+1)}else this._highlightIds.set(i,1);this._updateHighlight()},h._removeHighlight=function(e){for(const i of e)if(this._highlightIds.has(i)){const e=this._highlightIds.get(i)-1;0===e?this._highlightIds.delete(i):this._highlightIds.set(i,e)}this._updateHighlight()},h._updateHighlight=function(){const e=Array.from(this._highlightIds.keys());for(const i of this.graphicsViews())i.setHighlight(e)},a}(u.LayerView2DMixin(f));V=i.__decorate([p.subclass("esri.views.2d.layers.MapNotesLayerView2D")],V);return V}));
