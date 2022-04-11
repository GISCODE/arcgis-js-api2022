/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../Graphic","../../../symbols","../../../core/Accessor","../../../core/Handles","../../../core/maybe","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../../core/accessorSupport/diffUtils","../../../chunks/vec3f64","../../../layers/graphics/dehydratedFeatures","./graphics/Graphics3DCore","./graphics/Graphics3DScaleVisibility","./i3s/I3SGeometryUtil","../support/LimitGraphicsMap","../webgl-engine/lib/basicInterfaces","../../../symbols/PointSymbol3D"],(function(e,i,t,r,s,o,a,n,l,c,p,d,h,y,u,g,b,_,f,v,C){"use strict";let m=function(i){function r(e){var t;return(t=i.call(this,e)||this).loadedGraphics=new f.LimitGraphicsMap(5e4),t.slicePlaneEnabled=!1,t._renderingInfo={symbol:new C},t._handles=new o,t._graphicsByNode=new Map,t._scaleVisibility=null,t}e._inheritsLoose(r,i);var s=r.prototype;return s.initialize=function(){this._graphicsCore=new g.Graphics3DCore({owner:this,layer:this.layer,preferredUpdatePolicy:v.UpdatePolicy.ASYNC,elevationFeatureExpressionEnabled:!1,graphicSymbolSupported:!1,getRenderingInfoWithoutRenderer:!0,hasZ:!0,hasM:!1});const e=this.view.basemapTerrain;this._scaleVisibility=new b({layerScaleEnabled:!1}),this._scaleVisibility.setup(this,this.layer,((e,i,t)=>this._graphicsCore.spatialIndex.queryGraphicUIDsInExtent(e,i,t)),this._graphicsCore,e);const i=this.view.labeler.addGraphicsOwner(this._graphicsCore,this._scaleVisibility,{emptySymbolLabelSupported:!0,elevationInfoOverride:{mode:"absolute-height",offset:0},disablePlacement:{logEntityDescription:"3D Object Scene Layer features"}}),t=this.view.deconflictor.addGraphicsOwner(this._graphicsCore);this._graphicsCore.setup({labeler:i,deconflictor:t,scaleVisibility:this._scaleVisibility}).then((()=>{this._graphicsCore.startCreateGraphics()})).catch((()=>{})),this._handles.add([this.layer.watch("labelingInfo",((e,i)=>{h.diff(e,i)&&this._graphicsCore.updateLabelingInfo()}))])},s.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null),null!=this._scaleVisibility&&(this._scaleVisibility.destroy(),this._scaleVisibility=null),null!=this._graphicsCore&&(this._graphicsCore.destroy(),this._graphicsCore=null),this.loadedGraphics.destroy(),this.view=null},s.addNodeMeta=function(e,i){let r=0;const s=e.filteredIds,o=e.featureIds.map(((o,n)=>{_.boundingBoxTop(n,this.collection,e.objectHandle,I);const l=u.makeDehydratedPoint(0,0,0,this.view.spatialReference);this.view.renderCoordsHelper.fromRenderCoords(I,l);const c=i(n,e);let p=!1;return a.isNone(s)?p=!0:r<s.length&&o===s[r]&&(p=!0,r++),{objectId:o,uid:t.generateUID(),attributes:c,visible:p,geometry:l}}));this.loadedGraphics.addMany(o),this._graphicsByNode.set(e.node.index,o)},s.setNodeMetaAttributes=function(e,i){const t=this._graphicsByNode.get(e.node.index),r=new Array(t.length);for(let s=0;s<t.length;s++){const o=t[s];o.attributes=i(s,e),r[s]=o.uid}this._graphicsCore.updateLabelingInfo(r)},s.applyFilterChange=function(e){const i=this._graphicsByNode.get(e.node.index);if(i)if(a.isNone(e.filteredIds))for(const t of i)t.visible||(t.visible=!0,w.graphic=t,w.property="visible",w.oldValue=!1,w.newValue=!0,this._graphicsCore.graphicUpdateHandler(w));else{let t=0;for(const r of i){const i=r.visible;t<e.filteredIds.length&&r.objectId===e.filteredIds[t]?(r.visible=!0,t++):r.visible=!1,i!==r.visible&&(w.graphic=r,w.property="visible",w.oldValue=i,w.newValue=r.visible,this._graphicsCore.graphicUpdateHandler(w))}}},s.removeNodeMeta=function(e){this.loadedGraphics.removeManyByObjectId(e.featureIds)},s.getRenderingInfo=function(){return this._renderingInfo},s.notifyGraphicGeometryChanged=function(){},s.notifyGraphicVisibilityChanged=function(){},e._createClass(r,[{key:"updatePolicy",get:function(){return this._graphicsCore.effectiveUpdatePolicy}},{key:"usedMemory",get:function(){return this._graphicsCore.usedMemory}},{key:"unloadedMemoryEstimate",get:function(){return this._graphicsCore.unprocessedMemoryEstimate}},{key:"test",get:function(){return{graphicsCore:this._graphicsCore}}}]),r}(s);i.__decorate([n.property()],m.prototype,"view",void 0),i.__decorate([n.property()],m.prototype,"layer",void 0),i.__decorate([n.property()],m.prototype,"collection",void 0),i.__decorate([n.property()],m.prototype,"loadedGraphics",void 0),i.__decorate([n.property({aliasOf:"_graphicsCore.updating"})],m.prototype,"updating",void 0),i.__decorate([n.property()],m.prototype,"slicePlaneEnabled",void 0),i.__decorate([n.property()],m.prototype,"_graphicsCore",void 0),m=i.__decorate([d.subclass("esri.views.3d.layers.I3SMeshViewLabeler")],m);const w={graphic:null,property:null,oldValue:null,newValue:null},I=y.create();return m}));
