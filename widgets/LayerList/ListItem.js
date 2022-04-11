/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/Collection","../../core/HandleOwner","../../core/Identifiable","../../core/watchUtils","../../core/accessorSupport/decorators/aliasOf","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/cast","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../support/actions/ActionBase","../../support/actions/ActionButton","../../support/actions/ActionSlider","../../support/actions/ActionToggle","./ListItemPanel","./support/layerListUtils"],(function(e,t,i,r,o,n,a,l,s,c,p,d,y,h,u,_,v,f,w){"use strict";var g;const b=r.ofType({key:"type",defaultKeyValue:"button",base:h,typeMap:{button:u,toggle:v,slider:_}}),L=r.ofType(b),O="layer",S="child-list-mode",m="hide",C="esri.widgets.LayerList.ListItem";let P=g=function(t){function i(e){var i;return(i=t.call(this,e)||this).actionsSections=new L,i.actionsOpen=!1,i.children=new(r.ofType(g)),i.childrenSortable=!0,i.error=null,i.layer=null,i.layerView=null,i.open=!1,i.panel=null,i.parent=null,i.sortable=!0,i.view=null,i.visible=null,i}e._inheritsLoose(i,t);var o=i.prototype;return o.initialize=function(){this.handles.add([a.init(this,"layer",(e=>this._watchLayerProperties(e))),a.init(this,"view",(e=>this._updateChildren(e))),a.init(this,"panel",(e=>this._setListItemOnPanel(e))),a.init(this,["layer","view"],(()=>this._getLayerView()))])},o.destroy=function(){this.view=null},o.castPanel=function(e){return this.get("panel.open")&&!e.hasOwnProperty("open")&&(e.open=!0),e?new f(e):null},o.clone=function(){return new g({actionsSections:this.actionsSections.clone(),actionsOpen:this.actionsOpen,children:this.children.clone(),layer:this.layer,open:this.open,panel:this.panel,title:this.title,view:this.view,visible:this.visible})},o._setListItemOnPanel=function(e){e&&(e.listItem=this)},o._updateChildren=function(e){const t=this.children;t&&t.forEach((t=>t.view=e))},o._addChildren=function(e){if(this.handles.remove(S),this.children.removeAll(),!e)return;e.forEach((t=>{this.handles.add(a.watch(t,"listMode",(()=>this._addChildren(e))),S)}));const t=e.filter((e=>w.findLayerListMode(e)!==m));this.children.addMany(this._makeChildren(t))},o._watchSublayerChanges=function(e){e&&this.handles.add(e.on("change",(()=>{this._addChildren(e)})),O)},o._initializeChildLayers=function(e){this._addChildren(e),this._watchSublayerChanges(e)},o._makeChildren=function(e){return e.map((e=>w.canDisplayLayer(e)?new g({layer:e,parent:this,view:this.view}):null)).reverse()},o._watchLayerProperties=function(e){if(!this.handles)return;if(this.handles.remove(O),this.handles.remove(S),!e)return;this.handles.add(a.watch(e,"listMode",(()=>this._watchLayerProperties(e))),O);if("hide-children"===w.findLayerListMode(e))return void this.children.removeAll();const t=w.getNormalizedChildLayerProperty(e);t&&this.handles.add(a.init(e,t,(()=>{e.hasOwnProperty(t)&&this._initializeChildLayers(e[t])})),O)},o._getLayerView=function(){var t=e._asyncToGenerator((function*(){const{layer:e,view:t}=this;if(e&&t)try{const i=yield t.whenLayerView(e);if(i.layer!==this.layer)return;this._set("layerView",i)}catch{}}));function i(){return t.apply(this,arguments)}return i}(),o._isLayerUpdating=function(e){return e&&"loading"===e.loadStatus},e._createClass(i,[{key:"incompatible",get:function(){const{layerView:e}=this;return!(!e||!("spatialReferenceSupported"in e))&&!e.spatialReferenceSupported}},{key:"title",get:function(){const e=this.get("layer.layer");return(!e||e&&this.get("layer.layer.loaded"))&&this.get("layer.title")||this.get("layer.attributes.title")||""},set:function(e){void 0!==e?this._override("title",e):this._clearOverride("title")}},{key:"updating",get:function(){const e=this.layerView;return e?e.updating:this._isLayerUpdating(this.layer)}},{key:"visibleAtCurrentScale",get:function(){return!w.isLayerOutsideScaleRange(this.layer,this.get("view.scale"))}},{key:"visibilityMode",get:function(){return w.findLayerVisibilityMode(this.layer)}}]),i}(n.IdentifiableMixin(o.HandleOwnerMixin(i)));t.__decorate([d.property({type:L})],P.prototype,"actionsSections",void 0),t.__decorate([d.property()],P.prototype,"actionsOpen",void 0),t.__decorate([d.property({type:r})],P.prototype,"children",void 0),t.__decorate([d.property()],P.prototype,"childrenSortable",void 0),t.__decorate([l.aliasOf("layer.loadError?")],P.prototype,"error",void 0),t.__decorate([d.property({readOnly:!0})],P.prototype,"incompatible",null),t.__decorate([d.property()],P.prototype,"layer",void 0),t.__decorate([d.property({readOnly:!0})],P.prototype,"layerView",void 0),t.__decorate([d.property()],P.prototype,"open",void 0),t.__decorate([d.property({type:f})],P.prototype,"panel",void 0),t.__decorate([p.cast("panel")],P.prototype,"castPanel",null),t.__decorate([d.property()],P.prototype,"parent",void 0),t.__decorate([d.property()],P.prototype,"sortable",void 0),t.__decorate([d.property()],P.prototype,"title",null),t.__decorate([d.property({readOnly:!0})],P.prototype,"updating",null),t.__decorate([d.property({value:null})],P.prototype,"view",void 0),t.__decorate([l.aliasOf("layer.visible")],P.prototype,"visible",void 0),t.__decorate([d.property({readOnly:!0})],P.prototype,"visibleAtCurrentScale",null),t.__decorate([d.property({readOnly:!0})],P.prototype,"visibilityMode",null),P=g=t.__decorate([y.subclass(C)],P);return P}));
