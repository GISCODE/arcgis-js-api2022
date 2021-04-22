/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../core/Evented","../../../core/Collection","../../../symbols/SimpleLineSymbol","../../../symbols/SimpleFillSymbol","../../../symbols/SimpleMarkerSymbol","../../../symbols","../../../core/Handles","../../../layers/GraphicsLayer","../../Sketch/SketchViewModel","./selectorUtils"],(function(e,t,o,i,s,n,l,r,c,a,p,d,y,h,_,u,m,v,S,w){"use strict";let b=function(t){function o(o){var i;(i=t.call(this)||this)._activeOptions=null,i._dashedFillSymbol=new h({color:[0,0,0,0],outline:{style:"dash",color:[12,207,255],width:2}}),i._dashedLineSymbol=new y({style:"dash",color:[12,207,255],width:2}),i._defaultOptions={tool:"rectangle",createOptions:null,selectionOptions:{overlaps:!0,intersects:!0,contains:!1}},i._completed=!1,i._handles=new m,i._sketchViewModel=new S,i._sketchGraphicsLayer=new v({listMode:"hide",internal:!0}),i._transparentPointSymbol=new _({color:[0,0,0,0],outline:{style:"none",width:0}}),i.candidates=null,i.geometry=null,i.options=null,i.selection=new d,i.view=null,i.candidates=o.candidates,i.options=o.options,i.view=o.view;const{_dashedFillSymbol:s,_dashedLineSymbol:n,_sketchViewModel:l,_sketchGraphicsLayer:r,_transparentPointSymbol:c}=e._assertThisInitialized(i);return l.set({layer:r,view:i.view,activePointSymbol:c,activeLineSymbol:n,activeVertexSymbol:c,activeFillSymbol:s,pointSymbol:c,polygonSymbol:s,polylineSymbol:n,vertexSymbol:c}),i._handles.add([l.on("create",(e=>i._onSketchEvent(e))),l.on(["undo","redo"],(e=>i._onSketchEvent(e)))]),i}e._inheritsLoose(o,t);var i=o.prototype;return i.initialize=function(){this._load()},i.destroy=function(){this._handles.destroy(),this._handles=null},i.cancel=function(){this._sketchViewModel.cancel()},i._load=async function(){await this.view.whenReady();const{options:e}=this,{tool:t,createOptions:o}=this._activeOptions={...this._defaultOptions,...e};this._sketchViewModel.create(t,o)},i._onSketchEvent=function(e){const t="create"===e.type?e.graphic:e.graphics[0],o=(null==t?void 0:t.geometry)||null,i="create"===e.type&&"cancel"===e.state,s="create"===e.type&&"complete"===e.state;this._processSelectionGeometry(o,s,i)},i._processSelectionGeometry=function(e,t,o){if(this._set("geometry",e),(t||o)&&(this._completed=!0),o)return void this._onComplete([],!0);const{_activeOptions:i,candidates:s,selection:n,view:l}=this;w.updateSelection({selector:e,candidates:s,currentSelection:n,options:i.selectionOptions,view:l}).then((({added:e,removed:o})=>{t?this._onComplete(this.selection.toArray(),!1):(e.length||o.length)&&this.emit("selection-change",{added:e,removed:o,type:"selection-change"})}))},i._onComplete=function(e,t){this._handles.removeAll(),this.notifyChange("state"),this.emit("complete",{aborted:t,selection:e,type:"complete"})},e._createClass(o,[{key:"state",get:function(){const{_completed:e,_sketchViewModel:{state:t}}=this;return e?"complete":"active"===t?"active":"disabled"}}]),o}(p.EventedAccessor);return t.__decorate([n.property()],b.prototype,"_completed",void 0),t.__decorate([n.property()],b.prototype,"candidates",void 0),t.__decorate([n.property({readOnly:!0})],b.prototype,"geometry",void 0),t.__decorate([n.property()],b.prototype,"options",void 0),t.__decorate([n.property({readOnly:!0})],b.prototype,"selection",void 0),t.__decorate([n.property({readOnly:!0})],b.prototype,"state",null),t.__decorate([n.property({value:null})],b.prototype,"view",void 0),b=t.__decorate([l.subclass("esri.widgets.support.Selector")],b),b}));