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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom-style","dojox/gfx/matrix","../../kernel","../../lang","../../sniff","../../urlUtils","../../geometry/scaleUtils","../vectorTiles/core/promiseUtils","../vectorTiles/views/2d/engine/StageGL","../vectorTiles/views/2d/engine/webgl/WGLFeatureView","../vectorTiles/views/2d/layers/features/processors/SymbolProcessor","../vectorTiles/views/2d/layers/features/tileRenderers/SymbolTileRenderer","../vectorTiles/views/2d/support/HighlightOptions","../vectorTiles/layers/support/TileInfo","../vectorTiles/views/2d/tiling/TileInfoView","../vectorTiles/geometry/SpatialReference","../vectorTiles/geometry/support/spatialReferenceUtils","../vectorTiles/renderers/SimpleRenderer","../vectorTiles/renderers/ClassBreaksRenderer","../vectorTiles/renderers/UniqueValueRenderer"],(function(e,t,i,n,r,s,a,o,l,h,d,_,u,c,p,f,m,w,g,y,R,v,P){var T,x,b,C=u.default,S=c.SymbolProcessor,V=p.default,L=o("esri-will-change"),q=void 0===o("ie")&&o("trident")>=7,D=o("safari"),I=q||o("edge"),F=(x=window.performance||{},void 0!==(b=x.now||x.webkitNow||x.msNow||x.oNow||x.mozNow)?function(){return b.call(x)}:(T=window.performance&&window.performance.timing&&window.performance.timing.navigationStart?window.performance.timing.navigationStart:(new Date).getTime(),function(){return(new Date).getTime()-T})),O=o("ff"),N=o("ie"),E=o("webkit"),M=o("opera"),z=(new Date).getTime(),k=window.requestAnimationFrame;function G(e){Object.defineProperty(e,"width",{get:function(){return this.size[0]}}),Object.defineProperty(e,"height",{get:function(){return this.size[1]}}),Object.defineProperty(e,"center",{get:function(){var e=this.viewpoint.targetGeometry;return[e.x,e.y]}})}k||(k=window[((E?"webkit":O&&"moz")||M&&"o"||N&&"ms")+"RequestAnimationFrame"])||(k=function(e){var t=F(),i=Math.max(0,16-(t-z)),n=window.setTimeout((function(){e(F())}),i);return z=t+i,n});var U=e(null,{surfaceType:"webgl",surface:null,map:null,layer:null,updateOnPan:!1,renderOnNav:!1,_canvas:null,_mapSR4:null,_dprWatchDelay:2e3,_dprTimer:null,_rendererEvalTimer:null,_redrawPromises:null,_defaultTileSize:512,_tileInfo:null,_tileInfoView:null,_wglContainer:null,_wglView:null,_tileRenderer:null,_tileRendererProps:null,_layerListenerHandles:null,_mapListenerHandles:null,_symbolProcessor:null,_returnCentroid:null,_started:!1,_renderRequested:!1,_updateRequested:!1,_frameRequested:!1,_frameHandle:null,_viewState:null,_renderParameters:null,_updateParameters:null,_zooming:!1,_panning:!1,_scaleMatrix:null,_defaultTransition:"transform 500ms ease",_panDx:0,_panDy:0,_clipRect:null,constructor:function(e){this._frame=this._frame.bind(this),this._evalRendererChange=this._evalRendererChange.bind(this),this._redrawPromises=new Map,a.mixin(this,e),this._setup()},destroy:function(){this._teardown()},getNode:function(){return this._canvas},getEventSource:function(){return this.getNode()},setClip:function(e){this._clipRect=null;var t=I&&q?"rect(auto,auto,auto,auto)":null;if(e){var i=e.x,r=e.y,s=e.width,a=e.height;this._clipRect={x:i,y:r,width:s,height:a};var o=this.layer.getNavigationTransform();i+=o.dx,r+=o.dy,t=I?this._getClipRect(i,r,s,a):this._getClipPath(i,r,s,a)}n.set(this.getNode(),I?"clip":"clip-path",t),D&&n.set(this.getNode(),"-webkit-clip-path",t)},start:function(){this._started=!0,this._renderParameters.pixelRatio=this._updateParameters.pixelRatio=window.devicePixelRatio,this._watchDPR(),this._updateMapView(this.map.extent)},stop:function(){this._started=!1,this._unwatchDPR(),this._stopFrame()},redraw:function(){this._handleRendererChange()},hitTest:function(e,t){return this.layer.suspended?d.resolve(null):this._wglView.hitTest(e,t).then(function(e){if(0===e.length)return null;var t=e[0];return this.layer._mode._featureMap[t]}.bind(this))},syncHitTest:function(e,t){var i=this._wglContainer.prepareChildrenRenderParameters(this._renderParameters);i=this._wglView.prepareChildrenRenderParameters(i);var n=this._wglView._hitTest(i,e,t);this._scheduleRender();var r=n[0];return this.layer._mode._featureMap[r]},_setup:function(){this._initState(),this._createWGLContainer(),this._createTileRenderer(),this._applyLayerSettings(),this._createMapListeners(),this._setViewState(),this._initRendering()},_teardown:function(){this._destroyRendering(),this._destroyMapListeners(),this._destroyLayerListeners(),this._destroyTileRenderer(),this._destroyWGLContainer(),this.stop(),this.surface.getEventSource().removeChild(this.getNode())},_createWGLContainer:function(){this._wglContainer=new _,this._canvas=this._wglContainer.createElement(),L&&n.set(this._canvas,"will-change","transform"),this._wglContainer.setElement(this._canvas),this.surface.getEventSource().appendChild(this._canvas),this._wglContainer.parent={requestChildRender:this._scheduleRender.bind(this)},this._wglContainer.attach(this._renderParameters)},_destroyWGLContainer:function(){this._wglContainer.detach(this._renderParameters),this._wglContainer=null},_createTileRenderer:function(){var e=this.layer;this._tileRendererProps={layerView:{requestUpdate:function(){this._scheduleUpdate()}.bind(this)},highlightOptions:new f,layer:{objectIdField:e.objectIdField,geometryType:this._getNormalizedGeometryType(e),spatialReference:new g(e.spatialReference.toJson()),fields:e.fields,typeIdField:e.typeIdField,types:i.map(e.types,(function(e){return e.toJson()})),outFields:e.getOutFields(),definitionExpression:null,renderer:this._getRenderer4(),gdbVersion:null,historicMoment:null},tileInfoView:this._tileInfoView},this._tileRenderer=new V(this._tileRendererProps),this._installTileRenderer(this._tileRenderer)},_installTileRenderer:function(e){this._wglView=new C({highlightOptions:e.highlightOptions,tileInfoView:e.tileInfoView,layer:this.layer}),e._featuresView=this._wglView,this._wglContainer.addChild(this._wglView),this._wglView._container=this._wglContainer},_getNormalizedGeometryType:function(e){return e.hasXYFootprint()?"esriGeometryPolygon":e.geometryType},_destroyTileRenderer:function(){this._wglContainer.removeChild(this._wglView),this._wglView.dispose(),this._wglView._container=null,this._tileRendererProps=this._tileRenderer=this._wglView=null},_applyLayerSettings:function(){this._wglContainer.opacity=this.layer.opacity,this._wglContainer.visible=!this.layer.suspended,this._createLayerListeners()},_createLayerListeners:function(){this._destroyLayerListeners();var e=this.layer;this._layerListenerHandles=[e.on("opacity-change",function(){this._wglContainer.opacity=this.layer.opacity}.bind(this)),e.on("suspend",function(){this._wglContainer.visible=!1}.bind(this)),e.on("resume",function(){this._wglContainer.visible=!0}.bind(this)),e.on("renderer-change",function(){this._handleRendererChange()}.bind(this))]},_destroyLayerListeners:function(){i.forEach(this._layerListenerHandles,(function(e){e.remove()})),this._layerListenerHandles=null},_createMapListeners:function(){this._destroyMapListeners();var e=this.map;this._mapListenerHandles=[e.on("pan-start",function(e){this._panning=!0,this.updateOnPan||this.renderOnNav||this._stopFrame()}.bind(this)),e.on("pan",function(e){this._applyPanEvent(e)}.bind(this)),e.on("pan-end",function(e){this._panning=!1,this._applyPanEvent(e)}.bind(this)),e.on("extent-change",function(e){n.set(this.getNode(),s._css.names.transition,"none"),this._updateMapView(e.extent)}.bind(this)),e.on("zoom-start",function(e){this._zooming=!0,this._stopFrame()}.bind(this)),e.on("zoom-end",function(e){this._zooming=!1}.bind(this)),e.on("scale",function(e){if(!this.renderOnNav){n.set(this.getNode(),s._css.names.transition,e.immediate?"none":this._defaultTransition);var t=this.map.__visibleDelta,i=r.translate(-t.x,-t.y),a=r.multiply(r.invert(i),e.matrix,i);this._scaleMatrix=a,this._applyTransform(a)}}.bind(this))]},_destroyMapListeners:function(){i.forEach(this._mapListenerHandles,(function(e){e.remove()})),this._mapListenerHandles=null},_getRenderer4:function(e){if(e=e||this.layer._getRenderer()){var t,i=this._fixImageUrl(e.toJson());return"simple"===i.type?t=R.fromJSON(i):"classBreaks"===i.type?t=v.fromJSON(i):"uniqueValue"===i.type?t=P.fromJSON(i):console.error("WebGLRenderer: unsupported layer.renderer!"),t}},_fixImageUrl:function(e){var t=[];switch(e.type){case"simple":t.push(e.symbol);break;case"uniqueValue":t.push(e.defaultSymbol),t=t.concat(i.map(e.uniqueValueInfos,(function(e){return e.symbol})));break;case"classBreaks":t.push(e.defaultSymbol),t=t.concat(i.map(e.classBreakInfos,(function(e){return e.symbol})))}t=i.filter(t,(function(e){return!!e}));var n=this.layer,r=n._url.path+"/images/",s=n._getToken();return i.forEach(t,(function(e){var t=e.url;t&&(-1===t.search(/https?\:/)&&-1===t.indexOf("data:")&&(e.url=r+t),s&&-1!==e.url.search(/https?\:/)&&l.hasSameOrigin(e.url,n._url.path)&&(e.url+="?token="+s))})),e},_setRenderer:function(e){this._tileRendererProps.layer.renderer=e;var t=this._tileRenderer.getProcessorConfiguration(),i=this._symbolProcessor;return i.setConfiguration(t),this._returnCentroid=i._getReturnCentroid(i.getRendererInfo().renderer),t},_handleRendererChange:function(){this._rendererEvalTimer||(this._rendererEvalTimer=setTimeout(this._evalRendererChange,0))},_cancelRendererEval:function(){clearTimeout(this._rendererEvalTimer),this._rendererEvalTimer=null},_evalRendererChange:function(){this._cancelRendererEval();var e=this._returnCentroid,t=this._setRenderer(this._getRenderer4());(this._cancelRedraw(),this._tileRenderer.needsProcessorReconfiguration(t))?(this._tileRenderer.applyConfiguration(t,!0),e!==this._returnCentroid&&this._returnCentroid?this.layer._mode.refresh():this._redrawView()):(this._tileRenderer.applyConfiguration(t,!1),this._scheduleUpdate())},_redrawView:function(){this._wglView.children.slice(0).forEach(function(e,t){var i=e.key.id,n=this.layer._mode._tileRequests.get(i);if(n){var r=this._redrawTile(n.tsTile,e,n.featureSet);r.isFulfilled()||this._redrawPromises.set(i,r)}}.bind(this))},_redrawTile:function(e,t,i){return this._symbolProcessor.getMeshData(e,i).then(function(e){var i=t.key.id;this._redrawPromises.delete(i),this.layer._mode._tileRequests.get(i)&&this._repaintTile(t,e.data)}.bind(this)).otherwise(function(e){this._redrawPromises.delete(t.key.id)}.bind(this))},_repaintTile:function(e,t){this._wglView.removeChild(e),e.attached=!1,this._tileRenderer.onTileData({tileKey:e.key.id,data:t}),this._wglView.addChild(e)},_cancelRedraw:function(e){if(e){var t=this._redrawPromises.get(e);t&&t.cancel()}else this._redrawPromises.forEach((function(e,t){e.cancel()}))},_initState:function(){this._mapSR4=new g(this.map.spatialReference.toJson());var e={};G(e),this._viewState=a.mixin(e,{scale:0,size:[0,0],rotation:0,resolution:1,worldScreenWidth:0,spatialReference:this._mapSR4,viewpoint:{rotation:0,scale:0,targetGeometry:{x:0,y:0},camera:null,clone:function(){var e=a.mixin({},this);return e.targetGeometry&&(e.targetGeometry=a.mixin({},e.targetGeometry)),e}},toScreen:function(e,t){var i=this.center[0]-this.resolution*this.width*.5,n=this.center[1]+this.resolution*this.height*.5;return e[0]=(t[0]-i)/this.resolution,e[1]=(n-t[1])/this.resolution,e},toMap:function(e,t){var i=this.center[0]-this.resolution*this.width*.5,n=this.center[1]+this.resolution*this.height*.5;return e[0]=i+t[0]*this.resolution,e[1]=n-t[1]*this.resolution,e},clone:function(){var e=a.mixin({},this);return G(e),e.size&&(e.size=e.size.slice(0)),e.viewpoint&&(e.viewpoint=e.viewpoint.clone()),e}}),this._renderParameters={state:this._viewState,pixelRatio:window.devicePixelRatio,stationary:!0},this._updateParameters={state:this._viewState,pixelRatio:window.devicePixelRatio,stationary:!0},this._tileInfo=m.create({spatialReference:this._mapSR4,size:this._defaultTileSize}),this._tileInfoView=new w(this._tileInfo)},_initRendering:function(){var e=this._tileRendererProps.layer;this._symbolProcessor=new S({configuration:null,service:{fields:e.fields,geometryType:e.geometryType,objectIdField:e.objectIdField,typeIdField:e.typeIdField,types:e.types},spatialReference:this._mapSR4,tileRenderer:this._tileRenderer});var t=this._setRenderer(this._getRenderer4());this._tileRenderer.applyConfiguration(t,!0)},_destroyRendering:function(){this._symbolProcessor&&this._symbolProcessor.destroy(),this._cancelRendererEval(),this._cancelRedraw()},_updateMapView:function(e){this._setViewState(e),this._scheduleUpdate(),this._scheduleRender()},_setViewState:function(e){var t=this.map;if(t.loaded){var i=e?e.getCenter():t.extent.getCenter(),n=this._viewState;n.viewpoint.targetGeometry=i.toJson(),n.scale=n.viewpoint.scale=t.getScale(),n.size=[t.width,t.height]}},_updateViewState:function(){var e=this._viewState;e.resolution=e.scale/(39.37*h.getUnitValueForSR(this.map.spatialReference)*96);var t=0;if(e.spatialReference.isWrappable){var i=y.getInfo(e.spatialReference);t=i.valid[1]-i.valid[0]}e.worldScreenWidth=Math.round(t/e.resolution)},_getClipPath:function(e,t,i,n){return"inset("+(t?t-this._panDy:t)+"px "+(this.map.width-(e+i)+this._panDx)+"px "+(this.map.height-(t+n)+this._panDy)+"px "+(e?e-this._panDx:e)+"px)"},_getClipRect:function(e,t,i,n){var r=t-this._panDy,s=r+n,a=e-this._panDx;return"rect("+r+"px, "+(a+i)+"px, "+s+"px, "+a+"px)"},_stopFrame:function(){this._renderRequested=!1,this._updateRequested=!1,this._frameRequested=!1,cancelAnimationFrame(this._frameHandle),this._frameHandle=null},_canRender:function(){return this.renderOnNav||!this._zooming&&!this._panning},_canUpdate:function(){return this.updateOnPan||!this._zooming&&!this._panning},_watchDPR:function(){this._unwatchDPR(),this._dprTimer=setTimeout(function(){this._renderParameters.pixelRatio!==window.devicePixelRatio&&this._scheduleRender(),this._watchDPR()}.bind(this),this._dprWatchDelay)},_unwatchDPR:function(){clearTimeout(this._dprTimer),this._dprTimer=null},_scheduleRender:function(){this._started&&this._canRender()&&(this._renderRequested=!0,this._scheduleFrame())},_scheduleUpdate:function(){this._started&&this._canUpdate()&&(this._updateRequested=!0,this._scheduleFrame())},_scheduleFrame:function(){this._frameRequested||(this._frameRequested=!0,this._frameHandle=k(this._frame))},_frame:function(){if(this._frameRequested){this._frameRequested=!1,this._renderParameters.pixelRatio!==window.devicePixelRatio&&(this._renderParameters.pixelRatio=this._updateParameters.pixelRatio=window.devicePixelRatio);this._updateParameters.stationary=this._renderParameters.stationary=!0,this._updateViewState(),this._renderRequested&&this._canRender()&&(this._renderRequested=!1,n.set(this._canvas,s._css.names.transition,"none"),this._applyTransform(),this._scaleMatrix=null,this._wglContainer.doRender(this._renderParameters)),this._updateRequested&&this._canUpdate()&&(this._updateRequested=!1,this.layer._mode.update(this._updateParameters))}},_applyPanEvent:function(e){if(!this.renderOnNav){this._panDx=e.delta.x,this._panDy=e.delta.y;var t=r.translate(e.delta.x,e.delta.y),i=this._scaleMatrix?r.multiply(t,this._scaleMatrix):t;this._applyTransform(i)}(this.updateOnPan||this.renderOnNav)&&this._updateMapView(e.extent)},_applyTransform:function(e){e=e?s._css.matrix(e):"",n.set(this._canvas,s._css.names.transform,e),e||(this._panDx=this._panDy=0,this.setClip(this._clipRect))}});return o("extend-esri")&&t.setObject("layers.support.WebGLRenderer",U,s),U}));