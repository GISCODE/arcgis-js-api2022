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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["require","dojo/_base/declare","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/promise/all","dojo/dom-style","esri/dijit/geoenrichment/utils/DataUtil","esri/dijit/geoenrichment/utils/ImageInfoUtil","esri/dijit/geoenrichment/utils/RegExpUtil","esri/dijit/geoenrichment/utils/UrlUtil"],(function(e,r,t,n,a,o,s,l,u,c){var d,f,y,m,p,h,g;var _,L={setPrintMapTaskUrl:function(e){g=e,c.registerCORS(e)},mapToURL:function(i,a,o,l){var c=L._getUrlForMap(i);if(c)return c;var g,_=(g=new t,e(["esri/tasks/PrintTask","esri/tasks/PrintParameters","esri/tasks/PrintTemplate","esri/layers/GraphicsLayer","./DotDensityToImageUtil","./LegendToLayerUtil"],(function(e,i,n,a,o,l){f=i,y=n,m=a,p=o,h=l,d=r(e,{returnJson:!1,mapName:null,_execute:function(){return this.returnJson&&(this.printGp.submitJob=this.printGp.execute=function(e,r){return r([{value:{url:"data:application/json;base64,"+s.base64FromJson(e.Web_Map_as_JSON)}}]),(new t).resolve()}),this.inherited(arguments)},_getPrintDefinition:function(e,r){var t=this.inherited(arguments);return this.returnJson&&this.mapName&&(t.title=this.mapName),console.log(t),t},_createOperationalLayers:function(e,r){var t=this.inherited(arguments);if(r.__legendLayerId){var i=t.filter((function(e){return e.id===r.__legendLayerId}))[0];t.splice(t.indexOf(i),1),t.push(i)}return t},_createFeatureCollection:function(e,r,t,i){var n=this.inherited(arguments);return this.returnJson&&n&&("esri.layers.FeatureLayer"===e.declaredClass||"esri.layers.StreamLayer"===e.declaredClass||"esri.layers.GraphicsLayer"===e.declaredClass)&&n.featureCollection.layers.forEach((function(r){r.layerDefinition.name=e.arcgisProps&&e.arcgisProps.title||e._titleForLegend||e.name||e.id,r.layerDefinition.name=u.decodeXML(r.layerDefinition.name),r.layerDefinition.objectIdField="OBJECTID",r.layerDefinition.fields=[{name:"OBJECTID",type:"esriFieldTypeOID"}];var t,i={OBJECTID:1},n=/[^\w]/g;r.featureSet.features.forEach((function(e,a){e.attributes=e.attributes||{},e.attributes.OBJECTID=a+1+"",e.attributes.__nameField||(e.attributes.Name=u.decodeXML(e.attributes.Name||r.layerDefinition.name),t="Name");var o=e.attributes.__fieldAliases;for(var s in e.attributes)if(0!==s.indexOf("__")){var l=s,c=e.attributes[s];"string"==typeof c&&(c=u.decodeXML(c));var d=o&&o[s];(d=d&&d.replace(n,"_"))&&void 0===e.attributes[d]&&(e.attributes[d]=c,l=d),e.attributes.__nameField===s&&(t=l),i[s]||(i[s]=1,r.layerDefinition.fields.push({name:l,type:"string"==typeof c?"esriFieldTypeString":"esriFieldTypeDouble"}))}})),r.layerDefinition.displayField=t})),n},_convertSvgSymbol:function(e){return e}}),g.resolve()})),g.promise).then((function(){return L._replaceDotDensityLayersWithPictureMarkers(i).then((function(e){return n(a&&h.legendToGraphicsLayer(a,i,o),(function(r){return r&&i.addLayer(r),n(L._runPrintTask(i,o,r,l),(function(n){r&&i.removeLayer(r),L._rollbackReplacing(i,e);var a=new t;return setTimeout((function(){a.resolve(n.url)}),100),a.promise}))}))}))}));return L._putUrlToCache(i,_),_},_replaceDotDensityLayersWithPictureMarkers:function(e){var r=[];for(i=0;i<e.graphicsLayerIds.length;i++)layer=e.getLayer(e.graphicsLayerIds[i]),layer.loaded&&layer.visible&&p.isDotDensity(layer)&&r.push(L._createGraphicsLayerFromDotDensityLayer(i,layer,e));return a(r)},_createGraphicsLayerFromDotDensityLayer:function(e,r,t){return p.createPictureMarkersFromDotDensityLayer(r,t.extent,t).then((function(i){if(!i)return null;var n=new m;return i.map((function(e){n.add(e)})),t.addLayer(n,e),r.visible=!1,{addedLayer:n,hiddenLayer:r}})).otherwise((function(e){return console.log(e),null}))},_runPrintTask:function(e,r,t,i){function a(){var n=new d(g);n.returnJson=i&&i.replaceWithJson,n.mapName=i&&i.mapName;var a=new f;a.map=e;var s=new y;return s.exportOptions={width:3.125*o.get(r,"width"),height:3.125*o.get(r,"height"),dpi:300},s.format="png32",s.showAttribution=!1,s.forceFeatureAttributes=!0,s.__legendLayerId=t&&t.id,a.template=s,n.execute(a)}return n(a(),(function(e){return e}),(function(e){return console.log(e),n(a(),(function(e){return e}),(function(e){return console.log(e),a()}))}))},_rollbackReplacing:function(e,r){r.forEach((function(r){r&&r.addedLayer&&e.removeLayer(r.addedLayer),r&&r.hiddenLayer&&(r.hiddenLayer.visible=!0)}))},urlToSrc:function(e,r){return r&&r.saveImagesAsDataUrl?l.getRemoteImageDataUrl(e,{sizeLimit:1500}):e}},D=0;return L.enableCaching=function(){_={}},L.clearCaching=function(){_=null},L._putUrlToCache=function(e,r){_&&r&&(e.__mapToImageUtilKey=D++,_[e.__mapToImageUtilKey]=r)},L._getUrlForMap=function(e){return _&&_[e.__mapToImageUtilKey]},L}));