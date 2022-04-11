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

define(["dojo/_base/lang","dojo/_base/Deferred","esri/dijit/geoenrichment/promise/all","esri/dijit/geoenrichment/when","esri/kernel","esri/arcgis/utils","esri/geometry/Extent","esri/request","esri/dijit/geoenrichment/utils/CacheUtil","esri/dijit/geoenrichment/utils/PortalUtil","esri/dijit/geoenrichment/utils/UrlUtil","./UrlToItemUtil"],(function(e,t,i,a,r,n,l,u,o,s,m,c){var f={};m.isPageRunOnWebService()||(r.id.getCredential=function(){var e=new t;return e.reject(new Error("Can't get credentials")),e});var p={loadItem:function(t){var i=o.get("WebMapsUtil.itemIds");return i[t]||(i[t]=n.getItem(t)),a(i[t]).then((function(a){return i[t]=a,a&&e.clone(a)}))},loadItemByMapName:function(t,i){var r=o.get("WebMapsUtil.mapNames");return r[t]||(r[t]=f.mapNameToItemId(t).then((function(e){return e?p.loadItem(e):i?f.getPortalDefaultBasemap():null}))),a(r[t]).then((function(i){return r[t]=i,i&&e.clone(i)}))},loadServiceInfo:function(e,t){var i=o.get("WebMapsUtil.siCache");return i[e]||(i[e]=t({url:e,content:{f:"json"}})),i[e]}};return f.loadItems=function(e){var t={},a={};return e.itemIds.forEach((function(e){t[e]=p.loadItem(e)})),e.mapNames.forEach((function(e){a[e]=p.loadItemByMapName(e)})),i([i(t),i(a)]).then((function(e){return{itemIds:e[0],mapNames:e[1]}}))},f.setLoadedItemsCache=function(t){o.set("WebMapsUtil.itemIds",e.mixin(o.get("WebMapsUtil.itemIds"),t&&t.itemIds)),o.set("WebMapsUtil.mapNames",e.mixin(o.get("WebMapsUtil.mapNames"),t&&t.mapNames))},f.getItem=function(e){return p.loadItem(e)},f.getItemByMapName=function(e,t){return p.loadItemByMapName(e,t)},f.mapNameToItemId=function(e,t){return t=t||m.getArcgisUrl(),s.getDefaultBasemaps(t).then((function(t){var i,a=e.match(/\(\?i\)/),r=new RegExp(a?e.replace(a[0],""):e,a?"i":void 0);return t&&t.some((function(e){return!(e.name?!r.test(e.name):!r.test(e.title))&&(i=e.id,!0)})),i}))},f.getPortalDefaultBasemap=function(t){return t=t||m.getArcgisUrl(),s.getPortalSelf(t).then((function(t){var i=t.useVectorBasemaps?t.defaultVectorBasemap:t.defaultBasemap;return{portalUrl:null,item:{type:"Web Map"},itemData:{baseMap:e.clone(i),operationalLayers:[],version:"2.7"}}}))},f.isWebMapType=function(e){return e&&"Web Map"===e.type},f.createMap=function(e,t,i){if(i=i||{},e&&e.item)return a(f.isWebMapType(e.item)&&i.additionalLayerInfos&&f._addAdditionalLayerInfosToOperationalLayers(e.itemData.operationalLayers,i.additionalLayerInfos,i.requestFunc),(function(){return a(!f.isWebMapType(e.item)&&f.createItemDataForNonWebMapItem(e,{defaultBasemapId:i.defaultBasemapId,defaultBasemapName:i.defaultBasemapName,additionalLayerInfos:i.additionalLayerInfos}),(function(){return!e.itemData.baseMap.baseMapLayers.length&&e.itemData.operationalLayers.length&&e.itemData.baseMap.baseMapLayers.push(e.itemData.operationalLayers.shift()),e.itemData.operationalLayers.forEach((function(e){e.featureCollection&&e.featureCollection.layers.forEach((function(e){e.featureSet&&e.layerDefinition&&(e.layerDefinition.fields=e.layerDefinition.fields||e.featureSet.fields&&e.featureSet.fields.slice())}))})),n.createMap(e,t,{usePopupManager:!0,mapOptions:i.mapOptions||{}})}))}))},f.createItemDataForNonWebMapItem=function(t,i){i=i||{};var r=t.item,n=t.itemData;function l(){return f.executeItemUrl(r,i.requestFunc)}function u(e){return t.itemData={baseMap:null,operationalLayers:e},a(i.additionalLayerInfos&&f._addAdditionalLayerInfosToOperationalLayers(e,i.additionalLayerInfos,i.requestFunc),(function(){return a(!1!==i.defaultBasemapId&&f.provideDefaultBaseMapForItemData(t.itemData,i),(function(){return t}))}))}function o(e,t){return-1!==e.indexOf(t)?e.substr(e.lastIndexOf(t)+t.length,e.length):null}function s(t,i,a){var n=t.id;return e.mixin({url:m.combine(r.url,n),capabilities:i.capabilities||"Query",visibility:i.visibility||t.defaultVisibility,mode:1,title:t.title||t.name,description:t.description},a,{id:i.idPrefix+n})}if("Feature Service"===r.type){var c=o(r.url,"FeatureServer/"),p=n&&n.layers?n.layers.reduce((function(e,t){return e[t.id]=t,e}),{}):{};return l().then((function(e){var t=[],i=c&&function(e,t){var i;return e.layers.some((function(e){return t==e.id&&(i=e),!!i})),i}(e,c);if(i)t.push(s(i,{capabilities:e.capabilities,idPrefix:"featureServiceLayer_",visibility:!0},p[c]));else for(var a=0;a<e.layers.length;a++)t.unshift(s(e.layers[a],{capabilities:e.capabilities,idPrefix:"featureServiceLayer_"},p[e.layers[a].id]));return u(t)}))}if("Map Service"===r.type){c=o(r.url,"MapServer/");return l().then((function(t){var i=c&&t.layers[c]?s(t.layers[c],{capabilities:t.capabilities,idPrefix:"mapServiceLayer_",visibility:!0}):{url:r.url,id:"mapServiceLayer01",visibility:!0,title:t.title||t.name};return u([e.mixin(i,n)])}))}return"Image Service"===r.type?l().then((function(t){return u([e.mixin({url:r.url,id:"imageServiceLayer01",visibility:!0,title:t.title||t.name},n)])})):"Vector Tile Service"===r.type?l().then((function(t){return u([e.mixin({url:r.url,id:"vectorTileServiceLayer01",visibility:!0,title:t.title||t.name,styleUrl:m.combineMulti([r.url,t.defaultStyles,"root.json"]),type:"VectorTileLayer",layerType:"VectorTileLayer"},n)])})):"WMSServer"===r.type?l().then((function(t){return u([e.mixin({url:r.url,id:"wmsLayer01",visibility:!0,title:t.title||t.name},n)])})):"WMTS"===r.type?l().then((function(t){return u([e.mixin({url:r.url,id:"wmtsLayer01",visibility:!0,title:t.title||t.name},n)])})):"WFS"===r.type?l().then((function(t){return u([e.mixin({url:r.url,id:"wfsLayer01",visibility:!0,title:t.title||t.name},n)])})):"KML"===r.type?(m.registerCORS(r.url),u([e.mixin({url:r.url,id:"kmlLayer01",visibility:!0,title:"KML Layer",type:"KML"},n)])):void 0},f.executeItemUrl=function(e,t){var i;return e.url=(i=e.url,["FeatureServer","MapServer","ImageServer"].some((function(e){if(-1!==i.indexOf(e))return i=i.substr(0,i.lastIndexOf(e)+e.length),!0})),i),t=t||u,m.registerCORS(e.url),p.loadServiceInfo(e.url,t).then((function(t){return a(function(e,t){if(!e.extent){var i=t.initialExtent||t.fullExtent||t.extent;!i||i instanceof l||(i=new l(i)),e.extent=i}}(e,t),(function(){return t}))}))},f.provideDefaultBaseMapForItemData=function(e,t){var i;if(t=t||{},!e.baseMap)return a((i={title:"My basemap",baseMapLayers:[{id:"basemapLayer01",opacity:t.hideBasemap?0:1,visibility:!t.hideBasemap,url:"http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer"}]},t.defaultBasemapId?f.getItem(t.defaultBasemapId).then((function(e){return e&&e.itemData&&e.itemData.baseMap||i})):t.defaultBasemapName?f.getItemByMapName(t.defaultBasemapName,!0).then((function(e){return e&&e.itemData&&e.itemData.baseMap||i})):i),(function(t){return e.baseMap=t,e}))},f._addAdditionalLayerInfosToOperationalLayers=function(e,t,a){return i(t.map((function(e,t){return/Server$/.test(e.url)?f.createItemDataForNonWebMapItem({item:c.tryCreateItemFromServerUrl(e.url)},{requestFunc:a}).then((function(e){return e.itemData.operationalLayers})):[{url:e.url,id:"additionalLayer"+t,visibility:!0}]}))).then((function(t){t.forEach((function(t){t.forEach((function(t){e.push(t)}))}))}))},f}));