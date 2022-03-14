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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/array","dojo/has","dojo/DeferredList","../../geometry/Extent","../../geometry/Point","../../geometry/ScreenPoint","../../layers/FeatureLayer","../../tasks/query","../../kernel"],(function(e,t,r,i,n,s,a,o,c,f,l,h){var u=e(null,{declaredClass:"esri.dijit.editing.SelectionHelper",constructor:function(e){this._settings=e||{},this._sConnects=[],this._mapServiceCount=0,this._map=this._settings.map,this._tolerance=this._settings.singleSelectionTolerance,this._initMapServiceInfos(this._settings.layers)},destroy:function(){var e;for(e in this._sConnects)this._sConnects.hasOwnProperty(e)&&r.disconnect(this._sConnects[e])},selectFeatures:function(e,r,n,a){n===f.SELECTION_NEW&&(this._resetMapServiceInfos(),this.getSelection(e));var o=[];i.forEach(e,(function(e){if(!0===e.visible&&!0===e._isMapAtVisibleScale()){var t=n;e._isSelOnly&&t===f.SELECTION_NEW&&(t=f.SELECTION_ADD),o.push(e.selectFeatures(r,t))}})),new s(o).addCallback(t.hitch(this,(function(r){var s=[];if(i.forEach(r,(function(t,r){i.forEach(t[1],(function(t){var i=t.attributes[e[r].objectIdField];(t=e[r]._mode._getFeature(i)||null)&&s.push(t)}),this)}),this),this._mapServiceCount){var o=n===f.SELECTION_SUBTRACT;o?(this._resetMapServiceInfos(),this._createLayerDefs(this._getLayerInfosFromSelection(e))):this._createLayerDefs(this._getLayerInfosFromFeatures(s)),this._updateLayerDefs(this._mapServiceInfos,!1,!(s&&s.length||o),t.hitch(this,a,s))}else a(s)})))},selectFeaturesByGeometry:function(e,t,r,i){var n=t;-1!==t.declaredClass.indexOf("Extent")&&t.xmax===t.xmin&&t.ymax===t.ymin&&(n=new o(t.xmax,t.ymax,t.spatialReference)),n=-1!==n.declaredClass.indexOf("Point")?this._extentFromPoint(n):n;var s=new l;s.geometry=n,this.selectFeatures(e,s,r,i)},clearSelection:function(e){var t=this._nonSelOnlyLayers;if(i.forEach(t,(function(e){e.clearSelection&&e.clearSelection()})),this._mapServiceCount){this._resetMapServiceInfos();var r=this._getLayerInfosFromSelection(this._settings.layers);i.some(r,(function(e){return e.oids&&e.oids.length}))&&(this._createLayerDefs(r),this._updateLayerDefs(this._mapServiceInfos,!0,e||!1))}},findMapService:function(e){var t,r,i,n=this._map,s=n.layerIds,a=e&&e._url&&e._url.path?e._url.path.toLowerCase():"";for(r in s)if(s.hasOwnProperty(r)&&(i=(t=n.getLayer(s[r]))._url?t._url.path?t._url.path.toLowerCase().replace("mapserver","featureserver"):t._url.toLowerCase().replace("mapserver","featureserver"):"",a.substr(0,i.length)===i&&"esri.layers.ArcGISDynamicMapServiceLayer"===t.declaredClass))return t},getSelection:function(e){var t=[];i.forEach(e,(function(e){e._isSelOnly&&t.push(this._createLayerInfo(e))}),this),i.forEach(t,(function(e){var t=this._createMapServiceInfo(this.findMapService(e.layer));t&&(t.layerInfos[e.layer.layerId]=e)}),this)},_initMapServiceInfos:function(e){this._nonSelOnlyLayers=[],this._mapServiceInfos=[],i.forEach(e,(function(e){var t=this.findMapService(e);t?(this._mapServiceCount++,this._createMapServiceInfo(t),t&&t.setDisableClientCaching(!0)):this._nonSelOnlyLayers.push(e)}),this)},_createMapServiceInfo:function(e){if(!e)return null;var r=this._mapServiceInfos,i=r[e.id];return i||(i=r[e.id]={mapService:e,layerInfos:[],layerDefs:t.mixin([],e.layerDefinitions||[]),origLayerDefs:t.mixin([],e.layerDefinitions||[])}),i},_resetMapServiceInfo:function(e){i.forEach(e.layerInfos,this._resetLayerInfo),e.layerDefs=t.mixin([],e.origLayerDefs||[])},_resetMapServiceInfos:function(){var e,t=this._mapServiceInfos;for(e in t)t.hasOwnProperty(e)&&this._resetMapServiceInfo(t[e])},_createLayerInfo:function(e,t){var r=e.objectIdField,n=t?[]:e.getSelectedFeatures();return{layer:e,selectedFeatures:n||[],oids:i.map(n,(function(e){return e.attributes[r]}))}},_resetLayerInfo:function(e){e&&(e.selectedFeatures=[],e.oids=[])},_updateLayerDefs:function(e,i,n,s){var a;for(a in e)if(e.hasOwnProperty(a)){var o=e[a],c=o.mapService,f=o.layerDefs=i?t.mixin([],o.origLayerDefs||[]):o.layerDefs;f?(n?s&&s():this._sConnects[c.id]=r.connect(c,"onUpdateEnd",t.hitch(this,"_onMapServiceUpdate",o,i,s)),c.setLayerDefinitions(f,n||!1)):s&&s()}},_onMapServiceUpdate:function(e,t,n){r.disconnect(this._sConnects[e.mapService.id]),i.forEach(e.layerInfos,(function(e){if(t)e&&e.layer.clearSelection();else{var r=new l;r.objectIds=e?e.oids:[],r.objectIds.length&&e.layer.selectFeatures(r,f.SELECTION_SUBTRACT)}}),this),t&&this._resetMapServiceInfo(e),n&&n()},_createLayerDefs:function(e){i.forEach(e,(function(e){var t=e.layer,r=this._createMapServiceInfo(this.findMapService(e.layer));if(r){r.mapService;var n=r.layerDefs,s=t.objectIdField,a=t.layerId,o='("'+s+'" NOT IN (',c=e.oids;c&&c.length&&(i.forEach(e.oids,(function(e,t){c=!0,t&&(o+=","),o+="'"+e+"'"})),o+="))",n.length&&n[a]&&n[a].length?n[a]+=" AND"+o:n[a]=o)}}),this)},_getLayerInfosFromFeatures:function(e){var t=[];i.forEach(e,(function(e){var r=e.getLayer();r&&r._isSelOnly&&(t[r.id]||(t[r.id]=this._createLayerInfo(r,!0)),t[r.id].selectedFeatures.push(e),t[r.id].oids.push(e.attributes[r.objectIdField]))}),this);var r,n=[];for(r in t)t.hasOwnProperty(r)&&n.push(t[r]);return n},_getLayerInfosFromSelection:function(e){var t=[];return i.forEach(e,(function(e){e._isSelOnly&&t.push(this._createLayerInfo(e,!1))}),this),t},_extentFromPoint:function(e){var t=this._tolerance,r=this._map,i=r.toScreen(e),n=new c(i.x-t,i.y+t),s=new c(i.x+t,i.y-t),o=r.toMap(n),f=r.toMap(s);return new a(o.x,o.y,f.x,f.y,r.spatialReference)}});return n("extend-esri")&&t.setObject("dijit.editing.SelectionHelper",u,h),u}));