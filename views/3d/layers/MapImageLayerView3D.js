/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/set","../../../core/accessorSupport/decorators/subclass","./DynamicLayerView3D","../../layers/MapImageLayerView","../../support/drapedUtils"],(function(e,r,t,s,i,a,o,n,c,u,p){"use strict";let l=function(r){function t(){var e;return(e=r.apply(this,arguments)||this).type="map-image-3d",e}e._inheritsLoose(t,r);var s=t.prototype;return s.initialize=function(){this.updatingHandles.add((()=>this.exportImageVersion),(()=>this.updatingHandles.addPromise(this.refreshDebounced())))},s.createFetchPopupFeaturesQueryGeometry=function(e,r){return p.createQueryGeometry(e,r,this.view)},s.getFetchOptions=function(){return{timeExtent:this.timeExtent}},t}(u.MapImageLayerView(c));l=r.__decorate([n.subclass("esri.views.3d.layers.MapImageLayerView3D")],l);return l}));
