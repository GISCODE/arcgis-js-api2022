// COPYRIGHT © 2021 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/connect","dojo/_base/lang","dojo/_base/array","dojo/_base/url","dojo/dom-construct","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/dom","dojox/collections/ArrayList","dojox/gfx/matrix","../kernel","../config","../sniff","../domUtils","../tileUtils","../geometry/Point","../geometry/Rect","../geometry/Extent","./layer"],(function(t,e,i,s,n,a,o,l,h,r,_,d,c,p,m,f,u,v,g,x,y){var w=t(y,{declaredClass:"esri.layers.TiledMapServiceLayer",constructor:function(t,s){e.connect(this,"onLoad",this,"_initTiledLayer"),this._displayLevels=s?s.displayLevels:null,this._lowestLevel=this._displayLevels?this._displayLevels[0]:0,this.resampling=s?s.resampling:void 0,this._resamplingTolerance=s?s.resamplingTolerance:null,this.exclusionAreas=s?s.exclusionAreas:null;var n=i.hitch;this._addImage=n(this,this._addImage),this._tileLoadHandler=n(this,this._tileLoadHandler),this._tileErrorHandler=n(this,this._tileErrorHandler),this._popTile=n(this,this._popTile),this._cleanUpRemovedImages=n(this,this._cleanUpRemovedImages),this._fireOnUpdateEvent=n(this,this._fireOnUpdateEvent),this._transitionEnd=n(this,this._transitionEnd),this._tileMapCallback=n(this,this._tileMapCallback)},opacity:1,isPNG32:!1,_multiple:1,isResampling:!1,_initTiledLayer:function(){var t=this.tileInfo,e=t.lods;this.resampling=null!=this.resampling&&this.resampling,this._tileW=t.width,this._tileH=t.height;var i,n,a,o=this.scales=[],l=this._displayLevels,h=-1/0,r=1/0,_=this.fullExtent,d=new v(_.xmin,_.ymax),c=new v(_.xmax,_.ymin),p=u.getContainingTileCoords,f=e.length;for(a=0;a<f;a++)i=p(t,d,n=e[a]),n.startTileRow=i.row<0?0:i.row,n.startTileCol=i.col<0?0:i.col,i=p(t,c,n),n.endTileRow=i.row,n.endTileCol=i.col,l&&-1===s.indexOf(l,n.level)||(o[a]=n.scale,h=n.scale>h?n.scale:h,r=n.scale<r?n.scale:r);h===-1/0||this._hasMin||this.setMinScale(h),r===1/0||this._hasMax||this.setMaxScale(r),this.setExclusionAreas(this.exclusionAreas),this._patchIE=m("ie")>=6&&m("ie")<7&&(this.isPNG32||"Mixed"===t.format)},isVisibleAtScale:function(t){return!!t&&y.prototype._isMapAtVisibleScale.call(this,t,!0)},_isMapAtVisibleScale:function(t){var e=this.inherited(arguments,[t,!0]);if(e){var i,s=this._map,n=this.scales,a=s.getScale(),o=!1,l=s.width>s.height?s.width:s.height;for(i=0;i<n.length;i++)if(Math.abs(n[i]-a)/n[i]<1/l){o=!0;break}e=o}return e},_setMap:function(t,i,s,n){this.inherited(arguments),this._map=t;var o=this._div=a.create("div",null,i),l=t.__visibleDelta,r=e.connect,_=c._css.names,d={position:"absolute",width:t.width+"px",height:t.height+"px",overflow:"visible"},m=p.defaults.map.zoomDuration;"css-transforms"===t.navigationMode?(d[_.transform]=c._css.translate(-l.x,-l.y),h.set(o,d),delete d[_.transform],d[_.transition]=_.transformName+" "+m+"ms ease",h.set(this._active=a.create("div",null,o),d),this._active._remove=0,this._passives=[]):(d.left=-l.x+"px",d.top=-l.y+"px",h.set(o,d)),this._onResizeHandler_connect=r(t,"onResize",this,"_onResizeHandler"),this._opacityChangeHandler_connect=r(this,"onOpacityChange",this,"_opacityChangeHandler");var f=this.tileInfo,v=f.spatialReference,g=v._getInfo();if(this._wrap=t.wrapAround180&&v._isWrappable()&&Math.abs(g.origin[0]-f.origin.x)<=g.dx,this._wrap&&u._addFrameInfo(f,g),this.setExclusionAreas(this.exclusionAreas),this.evaluateSuspension(),this.suspended&&!t.loaded)var x=e.connect(t,"onLoad",this,(function(){e.disconnect(x),x=null,this.setExclusionAreas(this.exclusionAreas),this.evaluateSuspension()}));return o},_unsetMap:function(t,i){this.suspended||this._suspendImpl(),a.destroy(this._div),this._map=this._div=null;var s=e.disconnect;s(this._onResizeHandler_connect),s(this._opacityChangeHandler_connect),this.inherited(arguments)},onSuspend:function(){this.inherited(arguments),this._suspendImpl()},_suspendImpl:function(){f.hide(this._div),clearTimeout(this._wakeTimer),this._wakeTimer=null,this._disableDrawConnectors();var t,i,s,n=this._tiles,o=this._tileIds,l=this._loadingList,h=e.disconnect,r=a.destroy;for(l&&l.count>0&&(l.forEach((function(e){(t=n[e])&&(h(t._onload_connect),h(t._onerror_connect),h(t._onabort_connect),t._onload_connect=t._onerror_connect=t._onabort_connect=null)})),l.clear(),this._fireUpdateEnd()),this._removeList.clear(),i=o.length-1;i>=0;i--)s=o[i],(t=s&&n[s])&&r(t);if("css-transforms"===this._map.navigationMode){var _,d=this._active,c=this._passives;for(this._noDom=0,i=c.length-1;i>=0;i--)(_=c[i])._endHandle&&h(_._endHandle),_._matrix=_._multiply=_._endHandle=null,_._marked=_._remove=0,c.splice(i,1),r(_);d._matrix=d._multiply=null,d._marked=d._remove=0}this._tileIds=this._tiles=this._tileBounds=this._ct=this._loadingList=this._removeList=this._standby=null},onResume:function(){this.inherited(arguments),this._tileIds=[],this._tiles=[],this._tileBounds=[],this._ct=null,this._removeList=new _,this._loadingList=new _,f.show(this._div),this._enableDrawConnectors(),this._wakeTimer=this._wakeTimer||setTimeout(i.hitch(this,(function(){this.suspended||this._onExtentChangeHandler(this._map.extent,null,!0,this._map.__LOD)})),0)},_enableDrawConnectors:function(){var t=this._map,i=e.connect;if("css-transforms"===t.navigationMode){if(this._onScaleHandler_connect=i(t,"onScale",this,this._onScaleHandler),m("esri-mobile")){this._standby=[];var s=this,n=function(){s._noDom=1};this._onPanStartHandler_connect=i(t,"onPanStart",n),this._onZoomStartHandler_connect=i(t,"onZoomStart",n)}}else this._onZoomHandler_connect=i(t,"onZoom",this,"_onZoomHandler");this._onPanHandler_connect=i(t,"onPan",this,"_onPanHandler"),this._onExtentChangeHandler_connect=i(t,"onExtentChange",this,"_onExtentChangeHandler")},_disableDrawConnectors:function(){var t=e.disconnect;t(this._onPanHandler_connect),t(this._onZoomHandler_connect),t(this._onScaleHandler_connect),t(this._onExtentChangeHandler_connect),t(this._onPanStartHandler_connect),t(this._onZoomStartHandler_connect),this._onPanHandler_connect=this._onZoomHandler_connect=this._onScaleHandler_connect=this._onExtentChangeHandler_connect=this._onPanStartHandler_connect=this._onZoomStartHandler_connect=null},_onResizeHandler:function(t,e,i){var s,n={width:e+"px",height:i+"px"},a=h.set;if(a(this._div,n),"css-transforms"===this._map.navigationMode)for(this._active&&a(this._active,n),s=this._passives.length-1;s>=0;s--)a(this._passives[s],n)},_onExtentChangeHandler:function(t,e,i,s){var n,o,r,_=this._map,p=this._standby;if(clearTimeout(this._wakeTimer),this._wakeTimer=null,!_._isPanningOrZooming()){if("css-transforms"===_.navigationMode){if(i)for(n=this._passives.length-1;n>=0;n--)r=this._passives[n],h.set(r,c._css.names.transition,"none"),r._marked?(this._passives.splice(n,1),r.parentNode&&r.parentNode.removeChild(r),a.destroy(r)):r.childNodes.length>0&&(r._multiply=r._multiply?d.multiply(r._matrix,r._multiply):r._matrix);if(this._noDom=0,p&&p.length)for(n=p.length-1;n>=0;n--)o=p[n],h.set(o,"visibility","inherit"),this._popTile(o),p.splice(n,1)}this._fireUpdateStart(),this._rrIndex=0;var m,f=u.getCandidateTileInfo(_,this.tileInfo,t),v=_.__visibleDelta;if(!this._ct||f.lod.level!==this._ct.lod.level||i){var x=f&&this._ct&&f.lod.level!==this._ct.lod.level;this._ct=f;var y,w=this._tiles,H=this._tileIds,T=this._tileBounds,b=this._removeList,M=H.length;for(this._cleanUpRemovedImages(),n=0;n<M;n++)y=w[m=H[n]],T[m]=H[n]=null,"css-transforms"===_.navigationMode&&x&&y.parentNode&&_.fadeOnZoom&&(y._fadeOut=x,y.parentNode._remove++),b.add(y);i&&(this._tileIds=[],this._tiles=[],this._tileBounds=[])}var I=v.x,E=v.y;if("css-transforms"===_.navigationMode){var L={};L[c._css.names.transform]=c._css.translate(I,E),h.set(this._div,L)}else h.set(this._div,{left:I+"px",top:E+"px"});this.__coords_dx=I,this.__coords_dy=E,this._updateImages(new g(0,0,v.width,v.height)),0===this._loadingList.count?(this._cleanUpRemovedImages(),this.onUpdate(),this._fireUpdateEnd()):this._fireOnUpdate=!0;var S,C,R=this._tileW,U=this._tileH;for(v=new g(-v.x,-v.y,v.width,v.height),n=this._tileIds.length-1;n>=0;n--)(m=this._tileIds[n])?(o=this._tiles[m],S=l.getMarginBox(o),C=new g(S.l,S.t,R,U),"css-transforms"===_.navigationMode&&(C.x=o._left,C.y=o._top),v.intersects(C)?this._tileBounds[m]=C:(this._loadingList.contains(m)&&this._popTile(o),a.destroy(o),this._tileIds.splice(n,1),delete this._tileBounds[m],delete this._tiles[m])):(this._tileIds.splice(n,1),delete this._tileBounds[m],delete this._tiles[m])}},_onPanHandler:function(t,e){var i=this._map,s=i.__visibleDelta.offset(e.x,e.y);if(this.__coords_dx=this.__coords_dy=0,"css-transforms"===i.navigationMode){var n={};n[c._css.names.transform]=c._css.translate(s.x,s.y),h.set(this._div,n),m("esri-mobile")||this._updateImages({x:-s.x,y:-s.y,width:s.width,height:s.height})}else h.set(this._div,{left:s.x+"px",top:s.y+"px"}),this._updateImages({x:-s.x,y:-s.y,width:s.width,height:s.height});this._loadingList.count>0&&(this._fireUpdateStart(),this._fireOnUpdate=!0)},_onScaleHandler:function(t,e){var i,s={},n=c._css.names,o=this._map,l=p.defaults.map.zoomDuration;for(i=this._passives.length-1;i>=0;i--){var r=this._passives[i];0===r.childNodes.length?(this._passives.splice(i,1),a.destroy(r)):("none"===r.style[n.transition]&&h.set(r,n.transition,n.transformName+" "+l+"ms ease"),h.set(r,n.transition,e?"none":n.transformName+" "+l+"ms ease"),r._matrix=t,s[n.transform]=c._css.matrix(r._multiply?d.multiply(t,r._multiply):t),h.set(r,s))}this._active&&0===this._active.childNodes.length||(h.set(this._active,n.transition,e?"none":n.transformName+" "+l+"ms ease"),this._active._matrix=t,s[n.transform]=c._css.matrix(this._active._matrix),h.set(this._active,s),this._passives.push(this._active),(s={position:"absolute",width:o.width+"px",height:o.height+"px",overflow:"visible"})[n.transition]=n.transformName+" "+l+"ms ease",h.set(this._active=a.create("div",null,this._div),s),this._active._remove=0,o.fadeOnZoom&&a.place(this._active,this._div,"first"))},_onZoomHandler:function(t,e,i){var n=l.getMarginBox(this._div);i=i.offset(-n.l,-n.t),this._previousScale&&1!==e||(this._previousScale=1);var a,o,r,_=this._tileW*e,d=this._tileH*e,c=this._tileBounds,p=this._tiles,f=this._previousScale,u=this._multiple,v=h.set,g=m("ie");if(g&&g<8)s.forEach(this._tileIds,(function(t){r="",a=c[t],o=p[t].style.margin.split(" "),s.forEach(o,(function(t){""!==r&&(r+=" "),t=parseFloat(t),r+=t/f*e+"px"})),v(p[t],{left:a.x-(_-a.width)*(i.x-a.x)/a.width+"px",top:a.y-(d-a.height)*(i.y-a.y)/a.height+"px",margin:1!==u&&-1===r.indexOf("NaN")?r:"",zoom:e})}));else{var x,y,w=_*u,H=d*u;s.forEach(this._tileIds,(function(t){r="",a=c[t],x=a.x-(_-a.width)*(i.x-a.x)/a.width,y=a.y-(d-a.height)*(i.y-a.y)/a.height,o=p[t].style.margin.split(" "),s.forEach(o,(function(t){""!==r&&(r+=" "),t=parseFloat(t),r+=t/f*e+"px"})),v(p[t],{left:x+"px",top:y+"px",margin:1!==u&&-1===r.indexOf("NaN")?r:"",width:w+"px",height:H+"px"})}))}this._previousScale=e},_updateImages:function(t){if(this._ct){var e,i,n,a,o,l,h,r,_,d=this._tileW,c=this._tileH,p=this._ct,m=p.lod,f=p.tile,u=f.offsets,v=f.coords,g=v.row,x=v.col,y=m.level,w=this.opacity,H=this._tileIds,T=this._loadingList,b=this._addImage,M=this._map.id,I=this.id,E=t.x,L=t.y,S=m.startTileRow,C=m.endTileRow,R=m.startTileCol,U=m.endTileCol,N=s.indexOf,O=-t.x,Z=-t.y,P=u.x-this.__coords_dx,k=u.y-this.__coords_dy,A=d-P+O,D=c-k+Z,j=Math.ceil,z=A>0?A%d:d-Math.abs(A)%d,B=D>0?D%c:c-Math.abs(D)%c,q=E>0?Math.floor((E+P)/d):j((E-(d-P))/d),W=L>0?Math.floor((L+k)/c):j((L-(c-k))/c),F=q+j((t.width-z)/d),V=W+j((t.height-B)/c);for(this._wrap&&(o=(a=m._frameInfo)[0],l=a[1],h=a[2]),r=q;r<=F;r++)for(_=W;_<=V;_++)i=g+_,n=x+r,this._wrap&&(n<l?n=(n%=o)<l?n+o:n:n>h&&(n%=o)),!this._isExcluded(y,i,n)&&i>=S&&i<=C&&n>=R&&n<=U&&-1===N(H,e=M+"_"+I+"_tile_"+y+"_"+_+"_"+r)&&(T.add(e),H.push(e),b(y,_,i,r,n,e,d,c,w,f,u))}},_cleanUpRemovedImages:function(){var t,i=this._removeList,s=a.destroy,n=c._css.names;if(i.forEach((function(t){t._fadeOut||(t.style.filter="",t.style.zoom=1,s(t))})),"css-transforms"===this._map.navigationMode)for(t=this._passives.length-1;t>=0;t--){var o=this._passives[t];0===o.childNodes.length?(this._passives.splice(t,1),s(o)):this._map.fadeOnZoom&&!o._marked&&o._remove===o.childNodes.length&&(o._marked=1,c._css.getScaleFromMatrix(h.get(o,n.transform))<2048?(h.set(o,n.transition,"opacity 0.65s"),h.set(o,"opacity",0),e.disconnect(o._endHandle),o._endHandle=e.connect(o,n.endEvent,this._transitionEnd)):this._transitionEnd({propertyName:"opacity",target:o}))}i.clear()},_transitionEnd:function(t){var i,n=t.target;"opacity"===t.propertyName&&(e.disconnect(n._endHandle),n._endHandle=null,(i=s.indexOf(this._passives,n))>-1&&this._passives.splice(i,1),n.parentNode&&n.parentNode.removeChild(n),a.destroy(n))},_addImage:function(t,s,n,l,r,_,d,p,m,f,u){if(this._patchIE){var v=this._tiles[_]=a.create("div");v.id=_,o.add(v,"layerTile"),h.set(v,{left:d*l-u.x+"px",top:p*s-u.y+"px",width:d+"px",height:p+"px",filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+this.getTileUrl(t,n,r)+"', sizingMethod='scale')"}),m<1&&h.set(v,"opacity",m);var g=v.appendChild(a.create("div"));h.set(g,{opacity:0,width:d+"px",height:p+"px"}),this._div.appendChild(v),v=null,this._loadingList.remove(_),this._fireOnUpdateEvent()}else{var x=this._tiles[_]=a.create("img"),y=e.connect;x.id=_,x._uid=t+"_"+n+"_"+r,x.alt="",o.add(x,"layerTile");var w=d*l-u.x,H=p*s-u.y,T=this._map,b=c._css.names,M={width:d+"px",height:p+"px",visibility:"hidden"};if("css-transforms"===T.navigationMode?(M[b.transform]=c._css.translate(w,H),h.set(x,M),x._left=w,x._top=H):(M.left=w+"px",M.top=H+"px",h.set(x,M)),m<1&&h.set(x,"opacity",m),x._onload_connect=y(x,"onload",this,"_tileLoadHandler"),x._onerror_connect=y(x,"onerror",i.hitch(this,"_tileErrorHandler",n,r)),x._onabort_connect=y(x,"onabort",this,"_tileAbortHandler"),this.tileMap)this.tileMap.getTile(t,n,r,_,this._tileMapCallback);else{var I=this.getTileUrl(t,n,r,x);I&&(this._failedRequests&&this._failedRequests[I]?(h.set(x,this._failedRequests[I].css),x.src=this._failedRequests[I].src,this._multiple=parseInt(this._failedRequests[I].css.width)/this._tileW,this.isResampling=1!==this._multiple):(this._multiple=1,this.isResampling=!1,x.src=I))}"css-transforms"===T.navigationMode?this._active.appendChild(x):this._div.appendChild(x),x=null}},_tileMapCallback:function(t,e){var i,s;if(!this.suspended){s=this._tiles[e.id]||r.byId(e.id);var n=e.level+"_"+e.row+"_"+e.col;s&&s._uid===n?(this._multiple=2*(e.level-t.level)||1,this.isResampling=1!==this._multiple,i=this.tileMap.style(t,e),h.set(s,i),s.src=this.getTileUrl(t.level,t.row,t.col)):this._popTile(e)}},getTileUrl:function(t,e,i){},refresh:function(){this.suspended||(this._refreshTS=Date.now(),this._onExtentChangeHandler(this._map.extent,null,!0,this._map.__LOD))},_popTile:function(t){var i=e.disconnect;i(t._onload_connect),i(t._onerror_connect),i(t._onabort_connect),t._onload_connect=t._onerror_connect=t._onabort_connect=null,this._loadingList.remove(t.id),this._fireOnUpdateEvent()},_tileLoadHandler:function(t){var e=t.currentTarget;this._noDom?this._standby.push(e):(h.set(e,"visibility","inherit"),this._popTile(e))},_tileAbortHandler:function(t){var e=t.currentTarget;this.onError(new Error("Unable to load tile: "+e.src)),h.set(e,"visibility","hidden"),this._popTile(e)},_tileErrorHandler:function(t,e,i){var s,a,o,l=i.currentTarget,r=!0;this.tileMap||!this.resampling?r=!1:(s=new n(l.src).path.split("/"),a=parseInt(s[s.length-3]),o=this._ct.lod.level-a+1,this._multiple=Math.pow(2,o),(a===this._lowestLevel||0===this._resamplingTolerance||this._resamplingTolerance&&Math.log(this._multiple)/Math.LN2>this._resamplingTolerance)&&(r=!1)),r?(this.isResampling=!0,this._resample(l,t,e)):(this.onError(new Error("Unable to load tile: "+l.src)),h.set(l,"visibility","hidden"),this._popTile(l))},_resample:function(t,e,i){var s=new n(t.src).path.split("/"),a=this._multiple,o=parseInt(s[s.length-3])-1,l=parseInt(e/a),r=parseInt(i/a),_=i%a,d=e%a,c=this.getTileUrl(o,l,r),p=this.getTileUrl(o+Math.log(a)/Math.LN2,e,i),f="-"+this._tileW*d+"px"+" 0 0 "+("-"+this._tileH*_+"px"),u={width:this._tileW*a+"px",height:this._tileH*a+"px",margin:f};this._failedRequests||(this._failedRequests={}),this._failedRequests[p]={src:c,css:u},h.set(t,u),m("chrome")&&t.setAttribute("src",null),t.src=c},_fireOnUpdateEvent:function(){0===this._loadingList.count&&(this._cleanUpRemovedImages(),this._fireOnUpdate&&(this._fireOnUpdate=!1,this.onUpdate(),this._fireUpdateEnd()))},setOpacity:function(t){this.opacity!=t&&this.onOpacityChange(this.opacity=t)},onOpacityChange:function(){},_opacityChangeHandler:function(t){var e,i,s,n=h.set;if("css-transforms"!==this._map.navigationMode)for(e=(s=this._div.childNodes).length-1;e>=0;e--)n(s[e],"opacity",t);else{if(this._active)for(e=(s=this._active.childNodes).length-1;e>=0;e--)n(s[e],"opacity",t);for(e=this._passives.length-1;e>=0;e--)for(i=(s=this._passives[e].childNodes).length-1;i>=0;i--)n(s[i],"opacity",t)}},setExclusionAreas:function(t){if(this.exclusionAreas=t,this.loaded&&this._map&&this._map.loaded){var e,i,s,n,a,o,l,h,r,_,d,c,p,m,f=this._map.spatialReference,u=this.tileInfo,g=u.origin,y=u.lods,w=y[0].level,H=y[y.length-1].level;if(this.exclusionAreas&&this.exclusionAreas.length){for(this._exclusionsPerZoom=[],i=0,s=t.length;i<s;i++)if((c=(e=t[i]).geometry)&&"extent"===c.type&&c.xmin<=c.xmax&&c.ymin<=c.ymax){if(!f.equals(c.spatialReference)){if(!f._canProject(c.spatialReference))continue;f.isWebMercator()?(p=v.lngLatToXY(c.xmin,c.ymin),m=v.lngLatToXY(c.xmax,c.ymax)):(p=v.xyToLngLat(c.xmin,c.ymin,!0),m=v.xyToLngLat(c.xmax,c.ymax,!0)),c=new x(p[0],p[1],m[0],m[1],f)}if(h=-1,e.minZoom&&-1!==e.minZoom)h=e.minZoom;else if(e.minScale&&-1!==e.minScale)for(n=0,a=y.length;n<a;n++)if(y[n].scale<=e.minScale){h=y[n].level;break}if(h=Math.max(h,w),r=-1,e.maxZoom&&-1!==e.maxZoom)r=e.maxZoom;else if(e.maxScale&&-1!==e.maxScale)for(n=0,a=y.length;n<a;n++){if(y[n].scale<e.maxScale){r=y[n-1].level;break}if(y[n].scale===e.maxScale){r=y[n].level;break}}for(r=-1===r?H:Math.min(r,H),o=h;o<=r;o++){for(n=0,a=y.length;n<a;n++)if(y[n].level===o){l=y[n];break}l&&(this._exclusionsPerZoom[o]||(this._exclusionsPerZoom[o]=[]),_=1/l.resolution/u.rows,d=1/l.resolution/u.cols,this._exclusionsPerZoom[o].push({rowFrom:Math.floor((g.y-c.ymax)*_),rowTo:Math.ceil((g.y-c.ymin)*_),colFrom:Math.floor((c.xmin-g.x)*d),colTo:Math.ceil((c.xmax-g.x)*d)}))}}}else this._exclusionsPerZoom=null;this.suspended||this._onExtentChangeHandler(this._map.extent,null,!0,this._map.__LOD)}},_isExcluded:function(t,e,i){var s,n,a,o;if(!this._exclusionsPerZoom)return!1;if(!(n=this._exclusionsPerZoom[t]))return!1;for(a=0,o=n.length;a<o;a++)if(e>=(s=n[a]).rowFrom&&e<s.rowTo&&i>=s.colFrom&&i<s.colTo)return!0;return!1}});return m("extend-esri")&&i.setObject("layers.TiledMapServiceLayer",w,c),w}));