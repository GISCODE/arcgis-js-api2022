/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/Evented","../../../../core/Logger","../../../../core/maybe","../../../../core/accessorSupport/decorators/property","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/subclass","../../../../chunks/mat4","../../../../chunks/mat4f64","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../geometry/support/aaBoundingRect","../../webgl-engine/lib/Intersector","../../webgl-engine/lib/IntersectorInterfaces"],(function(e,t,r,n,i,s,o,c,a,l,p,d,h,u,f,v,y,m){"use strict";const x=v.empty(),E=h.create(),g=f.create(),b=f.create(),_=f.create(),R=i.getLogger("esri.views.3d.layers.i3s.I3SElevationProvider");let w=function(t){function r(e){var r;return(r=t.call(this,e)||this).tmpEvent={spatialReference:null,extent:x,context:"scene"},r}e._inheritsLoose(r,t);var n=r.prototype;return n.initialize=function(){this.view=this.layerView.view,this.renderCoordsHelper=this.view.renderCoordsHelper,this.intersector=y.newIntersector(this.view.state.viewingMode),this.intersector.options.store=m.StoreResults.MIN;const e=this.layerView.i3slayer.fullExtent;s.isNone(e)?R.error("I3SElevationProvider expected fullExtent on I3SLayer."):(this.zmin=e.zmin,this.zmax=e.zmax),this.tmpEvent.context=this.intersectionHandler.isGround?"ground":"scene"},n.getElevation=function(e,t,r,n){if(g[0]=e,g[1]=t,g[2]=r,!this.renderCoordsHelper.toRenderCoords(g,n,g))return R.error("could not project point to compute elevation"),null;const i=this.layerView.elevationOffset,s=this.zmin+i,o=this.zmax+i;return this.renderCoordsHelper.setAltitude(b,o,g),this.renderCoordsHelper.setAltitude(_,s,g),this.intersector.reset(b,_,null),this.intersectionHandler.intersect(this.intersector,null,b,_),this.intersector.results.min.getIntersectionPoint(g)?this.renderCoordsHelper.getAltitude(g):null},n.layerChanged=function(){this.spatialReference&&(this.tmpEvent.extent=this._computeLayerExtent(),this.tmpEvent.spatialReference=this.spatialReference,this.emit("elevation-change",this.tmpEvent))},n.objectChanged=function(e){this.spatialReference&&(this.tmpEvent.extent=this._computeObjectExtent(e),this.tmpEvent.spatialReference=this.spatialReference,this.emit("elevation-change",this.tmpEvent))},n._computeObjectExtent=function(e){return v.empty(x),this._expandExtent(e,x),x},n._computeLayerExtent=function(){v.empty(x);for(const e of this.layerView.getVisibleNodes())this._expandExtent(e,x);return x},n._expandExtent=function(e,t){const r=e.visibilityObb||e.serviceObbInRenderSR;if(s.isSome(r)){d.fromQuat(E,r.quaternion),E[12]=r.center[0],E[13]=r.center[1],E[14]=r.center[2];for(let e=0;e<8;++e)g[0]=1&e?r.halfSize[0]:-r.halfSize[0],g[1]=2&e?r.halfSize[1]:-r.halfSize[1],g[2]=4&e?r.halfSize[2]:-r.halfSize[2],u.transformMat4(g,g,E),this.renderCoordsHelper.fromRenderCoords(g,g,this.spatialReference),v.expand(t,g,t)}else{const r=e.renderMbs[3],n=u.copy(b,e.renderMbs);n[0]-=r,n[1]-=r,n[2]-=r;const i=u.copy(_,e.renderMbs);i[0]+=r,i[1]+=r,i[2]+=r;for(let e=0;e<8;++e)g[0]=1&e?n[0]:i[0],g[1]=2&e?n[1]:i[1],g[2]=4&e?n[2]:i[2],this.renderCoordsHelper.fromRenderCoords(g,g,this.spatialReference),v.expand(t,g,t)}},r}(n.EventedMixin(r));t.__decorate([o.property({constructOnly:!0})],w.prototype,"layerView",void 0),t.__decorate([o.property({constructOnly:!0})],w.prototype,"intersectionHandler",void 0),t.__decorate([o.property()],w.prototype,"view",void 0),t.__decorate([o.property({readOnly:!0,aliasOf:"view.elevationProvider.spatialReference"})],w.prototype,"spatialReference",void 0),w=t.__decorate([p.subclass("esri.views.3d.layers.i3s.I3SElevationProvider")],w);return w}));
