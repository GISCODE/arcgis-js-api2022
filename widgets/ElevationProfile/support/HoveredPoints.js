/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/Collection","../../../core/maybe","../../../core/reactiveUtils","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","./constants","../../support/AnchorElementViewModel"],(function(e,o,t,r,n,i,s,c,a,d,l,p,h,u){"use strict";e.HoveredPoints=function(e){function t(o){var t;return(t=e.call(this,o)||this)._hoveredPoints=new n,t}o._inheritsLoose(t,e);var r=t.prototype;return r.initialize=function(){this._updateScreenLocationsHandle=s.watch((()=>this._hoveredPoints.toArray().map((({anchor:e,element:o})=>({screenLocation:e.screenLocation,element:o})))),(e=>{for(const{screenLocation:o,element:t}of e)i.applySome(o,(({x:e,y:o})=>{t.style.transform=`translate(${e}px, ${o}px)`}))}),s.syncAndInitial)},r.destroy=function(){this._updateScreenLocationsHandle=i.removeMaybe(this._updateScreenLocationsHandle),this._hoveredPoints.drain((e=>this._destroyHoveredPoint(e)))},r.update=function(e){const o=this.view,t=this._hoveredPoints,r=e.length;for(;this._hoveredPoints.length>r;)this._destroyHoveredPoint(this._hoveredPoints.pop());for(;this._hoveredPoints.length<r;){const e=this._makeHoveredPoint();t.push(e),o.surface.appendChild(e.element)}for(let n=0;n<r;++n){const o=t.getItemAt(r-1-n),i=e[n];this._updateHoveredPoint(o,i)}},r._makeHoveredPoint=function(){const{size:e,borderStyle:o,borderColor:t,borderWidth:r,boxShadow:n}=h.HOVERED_POINTS_STYLE,i=this.view,s=new u({view:i,screenLocationEnabled:!0}),c=document.createElement("div"),a=c.style;return a.position="absolute",a.top="0",a.left="0",a.contain="strict",a.boxSizing="border-box",a.width=`${e}px`,a.height=`${e}px`,a.marginTop=`-${e/2}px`,a.marginLeft=`-${e/2}px`,a.border=`${o} ${r}px ${t}`,a.borderRadius=`${e}px`,a.boxShadow=n,{anchor:s,element:c}},r._updateHoveredPoint=function({anchor:e,element:o},t){e.screenLocationEnabled=!0,e.location=t.hoveredPoint;const r=o.style;r.display="block",r.background=t.color.toCss()},r._destroyHoveredPoint=function({anchor:e,element:o}){e.destroy(),this.view.surface.removeChild(o)},t}(r),t.__decorate([c.property()],e.HoveredPoints.prototype,"view",void 0),t.__decorate([c.property()],e.HoveredPoints.prototype,"_hoveredPoints",void 0),e.HoveredPoints=t.__decorate([p.subclass("esri.widgets.ElevationProfile.support.HoveredPoints")],e.HoveredPoints),Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));