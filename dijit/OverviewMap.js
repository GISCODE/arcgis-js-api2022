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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/html","dojo/has","dojo/dom-class","dojo/dom-style","dojo/dnd/Moveable","dijit/_Widget","dijit/_Templated","../map","../geometry/Point","../geometry/ScreenPoint","../layers/TiledMapServiceLayer","../layers/DynamicMapServiceLayer","../layers/VectorTileLayer","../layers/ArcGISTiledMapServiceLayer","../layers/ArcGISDynamicMapServiceLayer","../layers/ArcGISImageServiceLayer","../layers/RasterXLayer","../layers/OpenStreetMapLayer","../virtualearth/VETiledLayer","../kernel","../config","../domUtils","dojo/text!./templates/OverviewMap.html","dojo/i18n!../nls/jsapi"],(function(e,i,t,s,a,o,n,h,r,d,c,l,v,p,_,m,u,w,f,y,x,b,L,M,S,g,z){var D=e([r,d],{declaredClass:"esri.dijit.OverviewMap",widgetsInTemplate:!0,templateString:g,constructor:function(e,a){if(i.mixin(this,z.widgets.overviewMap),(e=e||{}).map){var o={};if(a&&(this._detached=!0,o=s.coords(a,!0)),this.map=e.map,this.baseLayer=e.baseLayer,this.width=e.width||o.w||this.map.width/4,this.height=e.height||o.h||this.map.height/4,this.attachTo=e.attachTo||"top-right",this.expandFactor=e.expandFactor||2,this.color=e.color||"#000000",this.opacity=e.opacity||.5,this.maximizeButton=!!e.maximizeButton,this.visible=!!e.visible,this.map.loaded)this._initialSetup();else var n=t.connect(this.map,"onLoad",this,(function(){t.disconnect(n),n=null,this._initialSetup()}));this._detached&&(this.visible=!0),this._maximized=!1}else console.error("esri.dijit.OverviewMap: "+this.NLS_noMap)},startup:function(){this.inherited(arguments),(!this.domNode.parentNode||a("ie")<9&&"DIV"!==this.domNode.parentNode.nodeName)&&this.map.container.appendChild(this.domNode),this._detached?(n.set(this._body,"display","block"),n.set(this._controllerDiv,"display","none"),n.set(this._maximizerDiv,"display","none"),this.map.loaded?this._initialize():t.connect(this.map,"onLoad",this,this._initialize)):("bottom"===this.attachTo.split("-")[0]&&this.domNode.insertBefore(this._maximizerDiv,this._controllerDiv),this.maximizeButton||o.add(this._maximizerDiv,"ovwDisabledButton"),o.add(this.domNode,{"top-left":"ovwTL","top-right":"ovwTR","bottom-left":"ovwBL","bottom-right":"ovwBR"}[this.attachTo]),o.add(this._controllerDiv,"ovwShow"),o.add(this._maximizerDiv,"ovwMaximize"),this.visible&&this.map.loaded&&(this.visible=!1,this.show())),n.set(this._focusDiv,"opacity",this.opacity)},destroy:function(){this._deactivate(),this.overviewMap&&this.overviewMap.destroy(),this.overviewMap=this.baseLayer=null,this.inherited(arguments)},resize:function(e){!e||e.w<=0||e.h<=0||this._resize(e.w,e.h)},show:function(){if(!this.visible){var e=this._controllerDiv;e.title=this.NLS_hide,o.remove(e,"ovwShow"),o.add(e,"ovwHide"),S.show(this._body),S.show(this._maximizerDiv),this._initialize(),this.visible=!0}},hide:function(){if(this.visible){var e=this._controllerDiv;e.title=this.NLS_show,o.remove(e,"ovwHide"),o.add(e,"ovwShow"),this._maximized&&this._maximizeHandler(),S.hide(this._body),S.hide(this._maximizerDiv),this._deactivate(),this.visible=!1}},_initialSetup:function(){if(this._mainMapLayer=this.map.getLayer(this.map.layerIds[0]),this._mainMapLayer){var e=this.baseLayer||this._mainMapLayer,i=this.map.spatialReference,s=e.spatialReference;if(s.wkid===i.wkid||s.wkt===i.wkt){var a=e.declaredClass;if(e instanceof p)if(-1!==a.indexOf("VETiledLayer"))this.baseLayer=new b({resourceInfo:e.getResourceInfo(),culture:e.culture,mapStyle:e.mapStyle,bingMapsKey:e.bingMapsKey});else if(-1!==a.indexOf("OpenStreetMapLayer"))this.baseLayer=new x({tileServers:e.tileServers});else if(-1!==a.indexOf("WebTiledLayer")){var o=e.initialExtent,n=e.fullExtent,h=e.tileInfo;this.baseLayer=new e.constructor(e.urlTemplate,{initialExtent:o&&new o.constructor(o.toJson()),fullExtent:n&&new n.constructor(n.toJson()),tileInfo:h&&new h.constructor(h.toJson()),tileServers:e.tileServers&&e.tileServers.slice(0)})}else this.baseLayer=new u(e.url,{resourceInfo:e.getResourceInfo()});else if(e instanceof _)-1!==a.indexOf("ArcGISImageServiceLayer")?this.baseLayer=new f(e.url):(this.baseLayer=new w(e.url),this.baseLayer.setImageFormat("png24"));else if(e instanceof y)this.baseLayer=new y(e.url);else{if(!(e instanceof m))return void console.error("esri.dijit.OverviewMap: "+this.NLS_invalidType);this.baseLayer=new u("https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer",{})}if(!this._detached&&this.visible&&this._controllerDiv){var r=function(){this.visible=!1,this.show()};this.baseLayer.loaded?r.call(this):t.connect(this.baseLayer,"onLoad",this,r)}}else console.error("esri.dijit.OverviewMap: "+this.NLS_invalidSR)}else console.error("esri.dijit.OverviewMap: "+this.NLS_noLayer)},_visibilityHandler:function(){this.visible?this.hide():this.show()},_maximizeHandler:function(){var e=this._maximizerDiv;this._maximized?(e.title=this.NLS_maximize,o.remove(e,"ovwRestore"),o.add(e,"ovwMaximize"),this._resize(this.width,this.height)):(e.title=this.NLS_restore,o.remove(e,"ovwMaximize"),o.add(e,"ovwRestore"),this._resize(this.map.width,this.map.height)),this._maximized=!this._maximized},_resize:function(e,i){n.set(this._body,{width:e+"px",height:i+"px"});var t=M.defaults.map.panDuration,s=this.overviewMap;M.defaults.map.panDuration=0,s&&(s.resize(!0),s.centerAt(this._focusExtent.getCenter())),M.defaults.map.panDuration=t},_initialize:function(){var e,s;this.overviewMap?this._activate():(a("ie")<9?(this._body.firstChild.id,s=this._body.firstChild):(this._body.firstElementChild.id,s=this._body.firstElementChild),e=new c(s,{slider:!1,showAttribution:!1,logo:!1,lods:this._overviewLods,wrapAround180:this.map.wrapAround180}),this.overviewMap=e,t.connect(e,"onLoad",this,(function(){this._map_resize_override=i.hitch(e,this._map_resize_override),e.disableMapNavigation(),this._activate()})),e.addLayer(this.baseLayer))},_activate:function(){var e=this.map,i=this.overviewMap;this._moveableHandle=new h(this._focusDiv),this._soeConnect=t.connect(e,"onExtentChange",this,this._syncOverviewMap),this._ufoConnect=t.connect(e,"onPan",this,this._updateFocus),this._oecConnect=t.connect(i,"onExtentChange",this,this._ovwExtentChangeHandler),this._opaConnect=t.connect(i,"onPan",this,this._ovwPanHandler),this._ozsConnect=t.connect(i,"onZoomStart",this,(function(){S.hide(this._focusDiv)})),this._ozeConnect=t.connect(i,"onZoomEnd",this,(function(){S.show(this._focusDiv)})),this._omsConnect=t.connect(this._moveableHandle,"onMoveStop",this,this._moveStopHandler),this._syncOverviewMap(e.extent,null,null,null)},_deactivate:function(){t.disconnect(this._soeConnect),t.disconnect(this._ufoConnect),t.disconnect(this._oecConnect),t.disconnect(this._opaConnect),t.disconnect(this._ozsConnect),t.disconnect(this._ozeConnect),t.disconnect(this._omsConnect),this._moveableHandle&&(this._moveableHandle.destroy(),this._moveableHandle=null)},_syncOverviewMap:function(e,i,t,s){this._suspendPanHandling?this._suspendPanHandling=!1:(this._focusExtent=e,this.overviewMap.setExtent(e.expand(this.expandFactor),!0))},_updateFocus:function(e){this._suspendPanHandling||(this._focusExtent=e,this._drawFocusDiv(e))},_drawFocusDiv:function(e,i){var t=this.overviewMap,s=t.toScreen(new l(e.xmin,e.ymax,t.spatialReference)),a=t.toScreen(new l(e.xmax,e.ymin,t.spatialReference)),o=a.x-s.x,h=a.y-s.y,r=!0;o>this.overviewMap.width&&h>this.overviewMap.height&&(r=!1),n.set(this._focusDiv,{left:s.x+(i?i.x:0)+"px",top:s.y+(i?i.y:0)+"px",width:o+"px",height:h+"px",display:r?"block":"none"})},_moveStopHandler:function(e){var i=this._moveableHandle.node.style,t=this._focusExtent,s=this.overviewMap,a=s.toMap(new v(parseInt(i.left,10),parseInt(i.top,10))),o=new l(t.xmin,t.ymax,s.spatialReference);this._focusExtent=t.offset(a.x-o.x,a.y-o.y),this._maximized?this._maximizeHandler():s.centerAt(this._focusExtent.getCenter()),this._suspendPanHandling=!0,this.map.setExtent(this._focusExtent)},_ovwExtentChangeHandler:function(){this._drawFocusDiv(this._focusExtent)},_ovwPanHandler:function(e,i){this._drawFocusDiv(this._focusExtent,i)}});return a("extend-esri")&&i.setObject("dijit.OverviewMap",D,L),D}));