// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["./geometry/Extent","./geometry/ScreenPoint","./kernel","./layerUtils","./tasks/query","dijit/registry","dojo/_base/array","dojo/_base/declare","dojo/_base/Deferred","dojo/_base/lang","esri/sniff","dojo/on","dojo/promise/all","dojo/Stateful","require"],(function(e,r,a,t,i,s,n,l,o,u,c,d,f,p,h){var y,m=l(p,{declaredClass:"esri.PopupManager",enabled:!1,map:null,_mapClickHandle:null,_featureLayersCache:{},constructor:function(e){this._mapClickHandler=u.hitch(this,this._mapClickHandler)},setMap:function(e){if(this.map){if(e===this.map)return;this.unsetMap()}this.map=e,this._setupClickHandler()},unsetMap:function(){this.map&&(this.map=null),this._mapClickHandle&&(this._mapClickHandle.remove(),this._mapClickHandle=null)},getMapLayer:function(e){var r;if(e&&(r=e.getLayer())){var a=r.id;if(this._featureLayersCache[a]){var t=a.lastIndexOf("_");t>-1&&(a=a.substring(0,t),r=this.map.getLayer(a))}}return r},_enabledSetter:function(e){this.enabled=e,this._setupClickHandler()},_setupClickHandler:function(){this._mapClickHandle&&(this._mapClickHandle.remove(),this._mapClickHandle=null),this.enabled&&this.map&&(this._mapClickHandle=this.map.on("click",this._mapClickHandler))},_mapClickHandler:function(e){var r=this.map.infoWindow,a=e.graphic;r&&this.map.loaded&&(r.clearFeatures&&r.setFeatures?this._showPopup(e):a&&a.getInfoTemplate()&&this._showInfoWindow(a,e.mapPoint))},_showPopup:function(a){var t=this.map,s=t.infoWindow,l=this,u=[],c=[t.graphics].concat(n.map(t.graphicsLayerIds,t.getLayer,t));n.forEach(c,(function(e){var r=e.getFeatureReduction&&e.getFeatureReduction();e&&e.loaded&&e.infoTemplate&&!e.suspended&&(!r||!l._isReductionEnabled(e)||r.infoTemplate&&!r.disablePopup)&&u.push(e)}));var d=[];n.forEach(t.layerIds,(function(e){var r=t.getLayer(e);r&&r.loaded&&!r.suspended&&(l._isImageServiceLayer(r)&&r.infoTemplate?u.push(r):"esri.layers.WMSLayer"===r.declaredClass&&r.getFeatureInfoURL?u.push(r):"esri.layers.ArcGISDynamicMapServiceLayer"!==r.declaredClass&&"esri.layers.ArcGISTiledMapServiceLayer"!==r.declaredClass||!r.infoTemplates||d.push(r))}));var f=t.getResolutionForPopup();this._getSubLayerFeatureLayers(d,f).then((function(c){u=u.concat(c);var d=a.graphic&&a.graphic.getParentGraphic()||a.graphic,p=null;if(d&&d.getInfoTemplate()&&!l._isImageServiceLayer(d.getLayer())&&(p=d),u.length||p){var h=l._calculateClickTolerance(u),y=a.screenPoint,m=t.toMap(new r(y.x-h,y.y+h)),g=t.toMap(new r(y.x+h,y.y-h)),v=new e(m.x,m.y,g.x,g.y,t.spatialReference);if(v=v.intersects(t.extent)){var _=new i,L=!!p,b=!0,C=n.map(u,(function(e){_.timeExtent=e.useMapTime?t.timeExtent:null;var r,i=l._isReductionEnabled(e);e=i?e.getFeatureReductionLayer():e;var s=l._featureLayersCache[e.id];if(l._isImageServiceLayer(e)){_.geometry=a.mapPoint,b=!1;var u={rasterAttributeTableFieldPrefix:"Raster.",returnDomainValues:!0};l._isTiledImageServiceLayer(e)?r=e.fetchPopupFromTiles(_):(r=e.queryVisibleRasters(_,u)).addCallback((function(){var r=e.getVisibleRasters();return L=L||r.length>0,r}))}else if("esri.layers.WMSLayer"===e.declaredClass){r=new o;var c=e._getPopupGraphic(t,a.screenPoint);c?(r.resolve([c]),L=!0):r.resolve([])}else if(s||"function"==typeof e.queryFeatures&&(0===e.currentMode||1===e.currentMode))_.geometry=v,(r=e.queryFeatures(_)).addCallback((function(e){var r=[];return n.forEach(e.features,(function(e){e.visible&&(r.push(e),s&&e.setResolution(f))})),L=L||r.length>0,r}));else{r=new o;var d=n.filter(e.graphics,(function(e){return e&&e.visible&&v.intersects(e.geometry)}));if(i&&l._isParentLayer(e,p)){var h=l._findGraphicById(d,p,"cluster_id");h&&(p=h)}L=L||d.length>0,r.resolve(d)}return r}));if(p){var I=new o;I.resolve([p]),C.unshift(I)}if(!n.some(C,(function(e){return!e.isFulfilled()}))&&!L)return s.hide(),void s.clearFeatures();s.setFeatures(C),s.show(a.mapPoint,{closestFirst:b})}}}))},_getSubLayerFeatureLayers:function(e,r,a){r=r||null;var i=a||new o,s=[],l=e.length,u=this.map.getScale(),c=!1,p=this;e:for(var m=0;m<l;m++){var g=e[m],v=g.dynamicLayerInfos||g.layerInfos;if(v){var _=null;g._params&&(g._params.layers||g._params.dynamicLayers)&&(_=g.visibleLayers),_=t._getVisibleLayers(v,_);for(var L=t._getLayersForScale(u,v),b=v.length,C=0;C<b;C++){var I=v[C],w=I.id,S=g.infoTemplates[w];if(!I.subLayerIds&&S&&S.infoTemplate&&n.indexOf(_,w)>-1&&n.indexOf(L,w)>-1){if(!y){c=!0;break e}var M=g.id+"_"+w,T=this._featureLayersCache[M];if(T&&T.loadError)continue;if(!T){var x=S.layerUrl;x||(x=I.source?this._getLayerUrl(g.url,"/dynamicLayer"):this._getLayerUrl(g.url,w)),T=new y(x,{parentLayer:g,id:M,drawMode:!1,mode:y.MODE_SELECTION,outFields:this._getOutFields(S.infoTemplate),resourceInfo:S.resourceInfo,source:I.source}),this._featureLayersCache[M]=T}T.setDefinitionExpression(g.layerDefinitions&&g.layerDefinitions[w]),T.setGDBVersion(g.gdbVersion),T.setInfoTemplate(S.infoTemplate),T.setMaxAllowableOffset(r),T.setUseMapTime(!!g.useMapTime),g.layerDrawingOptions&&g.layerDrawingOptions[w]&&g.layerDrawingOptions[w].renderer&&T.setRenderer(g.layerDrawingOptions[w].renderer),s.push(T)}}}}if(c){var F=new o;h(["./layers/FeatureLayer"],(function(e){y=e,F.resolve()})),F.then((function(){p._getSubLayerFeatureLayers(e,r,i)}))}else{var k=[];n.forEach(s,(function(e){if(!e.loaded){var r=new o;d.once(e,"load, error",(function(){r.resolve()})),k.push(r.promise)}})),k.length?f(k).then((function(){s=n.filter(s,(function(e){return!e.loadError&&e.isVisibleAtScale(u)})),i.resolve(s)})):(s=n.filter(s,(function(e){return e.isVisibleAtScale(u)})),i.resolve(s))}return i.promise},_getLayerUrl:function(e,r){var a=e.indexOf("?");return-1===a?e+"/"+r:e.substring(0,a)+"/"+r+e.substring(a)},_getOutFields:function(e){var r,a=e.info&&e.info.fieldInfos;return a&&a.length&&"esri.dijit.PopupTemplate"===e.declaredClass?(r=[],n.forEach(a,(function(e){var a=e.fieldName&&e.fieldName.toLowerCase();a&&"shape"!==a&&0!==a.indexOf("relationships/")&&r.push(e.fieldName)}))):r=["*"],r},_calculateClickTolerance:function(e){var r,a,t=c("esri-touch")?9:6;return n.forEach(e,(function(e){(r=e.renderer)&&("esri.renderer.SimpleRenderer"===r.declaredClass?((a=r.symbol)&&a.xoffset&&(t=Math.max(t,Math.abs(a.xoffset))),a&&a.yoffset&&(t=Math.max(t,Math.abs(a.yoffset)))):"esri.renderer.UniqueValueRenderer"!==r.declaredClass&&"esri.renderer.ClassBreaksRenderer"!==r.declaredClass||n.forEach(r.infos,(function(e){(a=e.symbol)&&a.xoffset&&(t=Math.max(t,Math.abs(a.xoffset))),a&&a.yoffset&&(t=Math.max(t,Math.abs(a.yoffset)))})))})),t},_showInfoWindow:function(e,r){var a=this.map.infoWindow,t=e.geometry,i=t&&"point"===t.type?t:r,n=e.getContent();if(a.setTitle(e.getTitle()),n&&u.isString(n.id)){var l=s.byId(n.id);l&&l.set&&/_PopupRenderer/.test(l.declaredClass)&&l.set("showTitle",!1)}a.setContent(n),a.show(i)},_findGraphicById:function(e,r,a){var t,i=r.attributes,s=i&&i[a];return n.some(e,(function(e){var r=e.attributes;return r&&r[a]===s&&(t=e),!!t})),t},_isParentLayer:function(e,r){var a=r&&r.getLayer();return e&&a===e},_isReductionEnabled:function(e){return e&&e.isFeatureReductionActive&&e.isFeatureReductionActive()},_isImageServiceLayer:function(e){return"esri.layers.ArcGISImageServiceLayer"===e.declaredClass||"esri.layers.ArcGISImageServiceVectorLayer"===e.declaredClass||"esri.layers.RasterXLayer"===e.declaredClass},_isTiledImageServiceLayer:function(e){return"esri.layers.RasterXLayer"===e.declaredClass}});return c("extend-esri")&&(a.PopupManager=m),m}));