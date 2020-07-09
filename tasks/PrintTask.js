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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/_base/Deferred","dojo/has","../kernel","../lang","../layerUtils","../deferredUtils","../Color","../request","../urlUtils","../geometry/Polygon","../renderers/SimpleRenderer","../symbols/FillSymbol","./Geoprocessor","./PrintTemplate","./Task","dojo/dom-attr","dojo/dom-construct","dojox/gfx/_base","dojox/gfx/canvas","dojox/json/query","dojo/has!extend-esri?./PrintParameters","dojo/has!extend-esri?./LegendLayer"],(function(e,r,i,t,a,n,l,s,o,d,y,u,c,f,m,p,h,g,b,S,v,x,_,L){var I=e(b,{declaredClass:"esri.tasks.PrintTask",constructor:function(e,i){this.url=e,this.printGp=new h(this.url),this._handler=r.hitch(this,this._handler),i&&i.async&&(this.async=!0),this._colorEvaluator=L("$..color")},async:!1,_vtlExtent:null,_cimVersion:null,_is11xService:!1,_loadGpServerMetadata:!0,execute:function(e,i,t){if(!this._loadGpServerMetadata)return this._execute(e,i,t);var n=new a(d._dfdCanceller),l=this._url.path,s=l.lastIndexOf("/GPServer/");return s>0&&(l=l.slice(0,s+9)),n._pendingDfd=u({url:l,callbackParamName:"callback",content:r.mixin({},this._url.query,{f:"json"})}).then(r.hitch(this,(function(r){return this._loadGpServerMetadata=!1,this.async="esriExecutionTypeAsynchronous"===r.executionType,this._cimVersion=r.cimVersion,this._is11xService=!!this._cimVersion,n._pendingDfd=this._execute(e),n._pendingDfd}))).then(r.hitch(this,(function(e){this._successHandler([e],null,i,n)}))).otherwise((function(e){t&&t(e),n.errback(e)})),n},_handler:function(e,i,t,a,n){try{var l;this.async?"esriJobSucceeded"===e.jobStatus?this.printGp.getResultData(e.jobId,"Output_File",r.hitch(this,(function(e){l=e.value,this._successHandler([l],"onComplete",t,n)}))):this._errorHandler(new Error(e.jobStatus),a,n):(l=e[0].value,this._successHandler([l],"onComplete",t,n))}catch(e){this._errorHandler(e,a,n)}},_execute:function(e,n,l){var o=this._handler,y=this._errorHandler,u=e.template||new g;u.hasOwnProperty("showLabels")||(u.showLabels=!0);var c,f=u.exportOptions;f&&(c={outputSize:[f.width,f.height],dpi:f.dpi});var m,p=u.layoutOptions,h=[];if(p){var b,S;this.legendAll=!1,p.legendLayers?i.forEach(p.legendLayers,(function(e){var r={};r.id=e.layerId,e.subLayerIds&&(r.subLayerIds=e.subLayerIds),h.push(r)})):this.legendAll=!0,"Miles"===p.scalebarUnit||"Kilometers"===p.scalebarUnit?(b="esriKilometers",S="esriMiles"):"Meters"!==p.scalebarUnit&&"Feet"!==p.scalebarUnit||(b="esriMeters",S="esriFeet");var v={esriMiles:"mi",esriKilometers:"km",esriFeet:"ft",esriMeters:"m"};m={titleText:p.titleText,authorText:p.authorText,copyrightText:p.copyrightText,customTextElements:p.customTextElements,scaleBarOptions:{metricUnit:b,metricLabel:v[b],nonMetricUnit:S,nonMetricLabel:v[S]},legendOptions:{operationalLayers:h}}}var x=e.map,_=this._getPrintDefinition(x,u);if(e.outSpatialReference&&(_.mapOptions.spatialReference=e.outSpatialReference.toJson()),e.template&&s.isDefined(e.template.showAttribution)&&(_.mapOptions.showAttribution=e.template.showAttribution),r.mixin(_,{exportOptions:c,layoutOptions:m}),this.allLayerslegend&&r.mixin(_.layoutOptions,{legendOptions:{operationalLayers:this.allLayerslegend}}),_.operationalLayers){var L,I,D,F,R=_.operationalLayers,w=function(e){return s.fixJson(r.mixin(e,{type:"esriSLS",cap:void 0,join:void 0,meterLimit:void 0}))},T=new RegExp("[\\u4E00-\\u9FFF\\u0E00-\\u0E7F\\u0900-\\u097F\\u3040-\\u309F\\u30A0-\\u30FF\\u31F0-\\u31FF]"),k=/[\u0600-\u06FF]/,O=function(e){var r=e.text,i=e.font,t=i&&i.family&&i.family.toLowerCase();r&&i&&("arial"===t||"arial unicode ms"===t)&&(i.family=T.test(r)?"Arial Unicode MS":"Arial","normal"!==i.style&&k.test(r)&&(i.family="Arial Unicode MS"))};for(L=0;L<R.length;L++)if(R[L].featureCollection&&R[L].featureCollection.layers)for(I=0;I<R[L].featureCollection.layers.length;I++){var C=R[L].featureCollection.layers[I];if(C.layerDefinition&&C.layerDefinition.drawingInfo&&C.layerDefinition.drawingInfo.renderer&&C.layerDefinition.drawingInfo.renderer.symbol&&("esriCLS"===(F=C.layerDefinition.drawingInfo.renderer).symbol.type?F.symbol=w(F.symbol):"esriTS"===F.symbol.type?O(F.symbol):F.symbol.outline&&"esriCLS"===F.symbol.outline.type&&(F.symbol.outline=w(F.symbol.outline))),C.featureSet&&C.featureSet.features)for(D=0;D<C.featureSet.features.length;D++)(F=C.featureSet.features[D]).symbol&&("esriCLS"===F.symbol.type?F.symbol=w(F.symbol):"esriTS"===F.symbol.type?O(F.symbol):F.symbol.outline&&"esriCLS"===F.symbol.outline.type&&(F.symbol.outline=w(F.symbol.outline)))}}var E={Web_Map_as_JSON:t.toJson(s.fixJson(_)),Format:u.format,Layout_Template:u.layout};e.extraParameters&&(E=r.mixin(E,e.extraParameters));var A=new a(d._dfdCanceller),P=function(e,r){o(e,r,n,l,A)},V=function(e){y(e,l,A)};return this.async?A._pendingDfd=this.printGp.submitJob(E,P,null,V):A._pendingDfd=this.printGp.execute(E,P,V),A},onComplete:function(){},_createMultipointLayer:function(){return{layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}}},_createPolygonLayer:function(){return{layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}}},_createPointLayer:function(){return{layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}}},_createPolylineLayer:function(){return{layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}}},_convertSvgSymbol:function(e){if(!(n("ie")<=8||!e.path&&"image/svg+xml"!==e.contentType)){var r,i=_.createSurface(v.create("div"),1024,1024);r="image/svg+xml"===e.contentType?i.createObject(_.Image,{src:"data:image/svg+xml;base64,"+e.imageData,width:x.pt2px(e.width),height:x.pt2px(e.height),x:0,y:0}):i.createObject(_.Path,e.path).setFill(e.color).setStroke(e.outline),"pendingRender"in i&&i._render(!0);var t=i.rawNode.getContext("2d"),a=Math.ceil(r.getBoundingBox().width),l=Math.ceil(r.getBoundingBox().height),s=t.getImageData(r.getBoundingBox().x,r.getBoundingBox().y,a,l);t.canvas.width=a,t.canvas.height=l,t.putImageData(s,0,0);var o=t.canvas.toDataURL("image/png"),d={type:"esriPMS",imageData:o.substr(22,o.length),angle:e.angle,contentType:"image/png",height:e.size?e.size:x.px2pt(l),width:e.size?e.size*(a/l):x.px2pt(a),xoffset:e.xoffset,yoffset:e.yoffset};return i.destroy(),d}},_convertSvgRenderer:function(e){"simple"===e.type&&e.symbol&&(e.symbol.path||"image/svg+xml"===e.symbol.contentType)?e.symbol=this._convertSvgSymbol(e.symbol):"uniqueValue"===e.type?(e.defaultSymbol&&(e.defaultSymbol.path||"image/svg+xml"===e.defaultSymbol.contentType)&&(e.defaultSymbol=this._convertSvgSymbol(e.defaultSymbol)),e.uniqueValueInfos&&i.forEach(e.uniqueValueInfos,(function(e){(e.symbol.path||"image/svg+xml"===e.symbol.contentType)&&(e.symbol=this._convertSvgSymbol(e.symbol))}),this)):"classBreaks"===e.type&&(e.defaultSymbol&&(e.defaultSymbol.path||"image/svg+xml"===e.defaultSymbol.contentType)&&(e.defaultSymbol=this._convertSvgSymbol(e.defaultSymbol)),e.classBreakInfos&&i.forEach(e.classBreakInfos,(function(e){(e.symbol.path||"image/svg+xml"===e.symbol.contentType)&&(e.symbol=this._convertSvgSymbol(e.symbol))}),this))},_createFeatureCollection:function(e,t,a,n){var l=this._createPolygonLayer(),s=this._createPolylineLayer(),o=this._createPointLayer(),d=this._createMultipointLayer(),y=this._createPointLayer();y.layerDefinition.name="textLayer",delete y.layerDefinition.drawingInfo,"esri.layers.FeatureLayer"!==e.declaredClass&&"esri.layers.StreamLayer"!==e.declaredClass||(l.layerDefinition.name=s.layerDefinition.name=o.layerDefinition.name=d.layerDefinition.name=r.getObject("arcgisProps.title",!1,e)||e.name||e.id);var u=e.renderer&&"esri.renderer.SimpleRenderer"===e.renderer.declaredClass;if(!e.renderer||e.renderer.valueExpression||r.isFunction(e.renderer.attributeField))delete l.layerDefinition.drawingInfo,delete s.layerDefinition.drawingInfo,delete o.layerDefinition.drawingInfo,delete d.layerDefinition.drawingInfo;else{var c=e.renderer.toJson({useLegacyRotationProperties:!0});if("temporal"===c.type){var m={latestObservationRenderer:c.latestObservationRenderer,trackLinesRenderer:c.trackRenderer,observationAger:c.observationAger,renderer:c.observationRenderer},p={};e._trackIdField&&(p.trackIdField=e._trackIdField),e._startTimeField&&(p.startTimeField=e._startTimeField),e._endTimeField&&(p.endTimeField=e._endTimeField),l.layerDefinition.drawingInfo=m,l.layerDefinition.timeInfo=p,s.layerDefinition.drawingInfo=m,s.layerDefinition.timeInfo=p,o.layerDefinition.drawingInfo=m,o.layerDefinition.timeInfo=p,d.layerDefinition.drawingInfo=m,d.layerDefinition.timeInfo=p}else l.layerDefinition.drawingInfo.renderer=c,s.layerDefinition.drawingInfo.renderer=c,o.layerDefinition.drawingInfo.renderer=c,d.layerDefinition.drawingInfo.renderer=c}var h=e.fields;h||!e.renderer||e.renderer.valueExpression||r.isFunction(e.renderer.attributeField)||("esri.renderer.ClassBreaksRenderer"===e.renderer.declaredClass?(h=[{name:e.renderer.attributeField,type:"esriFieldTypeDouble"}],e.renderer.normalizationField&&h.push({name:e.renderer.normalizationField,type:"esriFieldTypeDouble"})):"esri.renderer.UniqueValueRenderer"===e.renderer.declaredClass&&(h=[{name:e.renderer.attributeField,type:"esriFieldTypeString"}],e.renderer.attributeField2&&h.push({name:e.renderer.attributeField2,type:"esriFieldTypeString"}),e.renderer.attributeField3&&h.push({name:e.renderer.attributeField3,type:"esriFieldTypeString"}))),h&&(l.layerDefinition.fields=h,s.layerDefinition.fields=h,o.layerDefinition.fields=h,d.layerDefinition.fields=h);var g=e.graphics;e.isFeatureReductionActive&&e.isFeatureReductionActive()&&(g=e.getSingleGraphics());var b,S,v=g.length;for(S=0;S<v;S++){var x=g[S];if(!1!==x.visible&&x.geometry){if((b=x.toJson()).symbol&&b.symbol.outline&&b.symbol.outline.color&&b.symbol.outline.color[3]&&!this._is11xService&&(b.symbol.outline.color[3]=255),e.renderer&&!b.symbol&&(r.isFunction(e.renderer.attributeField)||e.renderer.valueExpression||this._isFeatureCollectionRequired(e.renderer,e)||"esri.renderer.DotDensityRenderer"===e.renderer.declaredClass||a)){a=a||e.renderer;var _=null;try{_=a.getSymbol(x)}catch(e){}if(!_)continue;b.symbol=_.toJson(),this._isFeatureCollectionRequired(a,e)&&this._applyVisualVariables(b.symbol,{renderer:a,graphic:x,symbol:_,mapResolution:t&&t.getResolutionInMeters(),mapScale:t&&t.getScale()})}switch(b.symbol&&(b.symbol.path||"image/svg+xml"===b.symbol.contentType?b.symbol=this._convertSvgSymbol(b.symbol):b.symbol.text&&delete b.attributes),x.geometry.type){case"polygon":l.featureSet.features.push(b);break;case"polyline":s.featureSet.features.push(b);break;case"point":b.symbol&&b.symbol.text?y.featureSet.features.push(b):o.featureSet.features.push(b);break;case"multipoint":d.featureSet.features.push(b);break;case"extent":b.geometry=f.fromExtent(x.geometry).toJson(),l.featureSet.features.push(b)}}}var L=[];if(l.featureSet.features.length>0&&L.push(l),s.featureSet.features.length>0&&L.push(s),d.featureSet.features.length>0&&L.push(d),o.featureSet.features.length>0&&L.push(o),y.featureSet.features.length>0&&L.push(y),!L.length)return null;i.forEach(L,(function(e){var r=i.every(e.featureSet.features,(function(e){return e.symbol}));(u||r)&&(n&&n.forceFeatureAttributes||i.forEach(e.featureSet.features,(function(e){delete e.attributes})),n.forceFeatureAttributes||delete e.layerDefinition.fields),r&&delete e.layerDefinition.drawingInfo})),i.forEach(L,(function(e){e.layerDefinition.drawingInfo&&e.layerDefinition.drawingInfo.renderer&&this._convertSvgRenderer(e.layerDefinition.drawingInfo.renderer)}),this);var I={layers:L};return{id:e.id,opacity:e.opacity,minScale:e.minScale||0,maxScale:e.maxScale||0,featureCollection:I}},_getPrintDefinition:function(e,i){var t={operationalLayers:this._createOperationalLayers(e,i)},a=this._vtlExtent||e.extent,n=e.spatialReference;this._vtlExtent=null,e.spatialReference._isWrappable()&&(n=(a=a._normalize(!0)).spatialReference);var l={mapOptions:{showAttribution:e.showAttribution,extent:a.toJson(),spatialReference:n.toJson()}};i.preserveScale&&r.mixin(l.mapOptions,{scale:i.outScale||e.getScale()}),e.timeExtent&&r.mixin(l.mapOptions,{time:[e.timeExtent.startTime.getTime(),e.timeExtent.endTime.getTime()]});var s={};return r.mixin(s,l,t),s},_createOperationalLayers:function(e,a){var n,s,d,y,u=[],f=0;a.preserveScale&&(f=a.outScale||e.getScale()),this.legendAll?this.allLayerslegend=[]:this.allLayerslegend=null,this._vtlExtent=null;var p=i.map(e.layerIds,e.getLayer,e);for(e._mapImageLyr&&p.push(e._mapImageLyr),n=0;n<p.length;n++)if((s=p[n]).loaded&&s.visible&&(!f||s.isVisibleAtScale(f)))switch(d=s.declaredClass,y={id:s.id,title:r.getObject("arcgisProps.title",!1,s)||s.id,opacity:s.opacity,minScale:s.minScale||0,maxScale:s.maxScale||0},y=r.mixin(y,this._getUrlAndToken(s)),s.getNode()&&S.get(s.getNode(),"data-reference")&&(y._isRefLayer=!0),d){case"esri.layers.ArcGISDynamicMapServiceLayer":var h=[],g=!!s._params.layers;if(s._params.dynamicLayers){var b=a.outScale?s._getDynLayerObjs(a.outScale):t.fromJson(s._params.dynamicLayers);i.forEach(b,(function(e){h.push({id:e.id,name:e.name,layerDefinition:e}),delete e.id,delete e.name,delete e.maxScale,delete e.minScale})),0===h.length&&(y.visibleLayers=[-1])}else if(s.supportsDynamicLayers){if(g||s.layerDefinitions||s.layerTimeOptions){var v=s.createDynamicLayerInfosFromLayerInfos(),x=null;g&&(x=s.visibleLayers),x=o._getVisibleLayers(v,x);var _=o._getLayersForScale(a.outScale||e.getScale(),v);i.forEach(v,(function(e){if(!e.subLayerIds){var r=e.id;if(i.indexOf(x,r)>-1&&i.indexOf(_,r)>-1){var t={source:e.source.toJson()};s.layerDefinitions&&s.layerDefinitions[r]&&(t.definitionExpression=s.layerDefinitions[r]),s.layerTimeOptions&&s.layerTimeOptions[r]&&(t.layerTimeOptions=s.layerTimeOptions[r].toJson()),h.push({id:r,layerDefinition:t})}}})),0===h.length&&(y.visibleLayers=[-1])}}else i.forEach(s.layerInfos,(function(e){var r={id:e.id,layerDefinition:{}};s.layerDefinitions&&s.layerDefinitions[e.id]&&(r.layerDefinition.definitionExpression=s.layerDefinitions[e.id]),s.layerTimeOptions&&s.layerTimeOptions[e.id]&&(r.layerDefinition.layerTimeOptions=s.layerTimeOptions[e.id].toJson()),(r.layerDefinition.definitionExpression||r.layerDefinition.layerTimeOptions)&&h.push(r)})),g&&(s.visibleLayers.length?y.visibleLayers=s.visibleLayers:y.visibleLayers=[-1]);h.length&&(y.layers=h),u.push(y),this.allLayerslegend&&this.allLayerslegend.push({id:s.id,subLayerIds:s.visibleLayers});break;case"esri.layers.ArcGISImageServiceLayer":if(y=r.mixin(y,{url:s.url,bandIds:s.bandIds,compressionQuality:s.compressionQuality,format:s.format,interpolation:s.interpolation}),s.mosaicRule&&r.mixin(y,{mosaicRule:s.mosaicRule.toJson()}),s.renderingRule||s.renderer)if(this._is11xService)s.renderingRule&&(y.renderingRule=s.renderingRule.toJson()),s.renderer&&(y.layerDefinition=y.layerDefinition||{},y.layerDefinition.drawingInfo=y.layerDefinition.drawingInfo||{},y.layerDefinition.drawingInfo.renderer=s.renderer.toJson());else{var L=s.getExportImageRenderingRule();L&&r.mixin(y,{renderingRule:L.toJson()})}u.push(y),this.allLayerslegend&&this.allLayerslegend.push({id:s.id});break;case"esri.layers.RasterXLayer":this._is11xService&&(y=r.mixin(y,{url:s.url,bandIds:s.bandIds,interpolation:s.interpolation}),s.renderer&&(y.layerDefinition=y.layerDefinition||{},y.layerDefinition.drawingInfo=y.layerDefinition.drawingInfo||{},y.layerDefinition.drawingInfo.renderer=s.renderer.toJson()),u.push(y),this.allLayerslegend&&this.allLayerslegend.push({id:s.id}));break;case"esri.layers.WMSLayer":y=r.mixin(y,{url:s.url,title:s.title,type:"wms",version:s.version,transparentBackground:s.imageTransparency,visibleLayers:s.visibleLayers}),u.push(y),this.allLayerslegend&&this.allLayerslegend.push({id:s.id,subLayerIds:s.visibleLayers});break;case"esri.virtualearth.VETiledLayer":var I=s.mapStyle;"roadOnDemand"===I?I="Road":"aerialWithLabelsOnDemand"===I&&(I="Hybrid"),y=r.mixin(y,{visibility:s.visible,type:"BingMaps"+I,culture:s.culture,key:s.bingMapsKey}),u.push(y);break;case"esri.layers.OpenStreetMapLayer":y=r.mixin(y,{credits:s.copyright,type:"OpenStreetMap",url:c.getAbsoluteUrl(s.tileServers[0])}),u.push(y);break;case"esri.layers.WMTSLayer":y=r.mixin(y,{url:s.url,type:"wmts",layer:s._identifier,style:s._style,format:s.format,tileMatrixSet:s._tileMatrixSetId}),u.push(y);break;case"esri.layers.MapImageLayer":var D=s.getImages();i.forEach(D,(function(e,r){e.visible&&e.href&&(y={id:s.id+"_image"+r,type:"image",title:s.id,minScale:s.minScale||0,maxScale:s.maxScale||0,opacity:s.opacity*e.opacity,extent:e.extent.toJson()},"data:image/png;base64,"===e.href.substr(0,22)?y.imageData=e.href.substr(22):y.url=e.href,u.push(y))}));break;case"esri.layers.VectorTileLayer":if(delete y.url,delete y.token,this._is11xService&&s.currentStyleInfo.serviceUrl&&s.currentStyleInfo.styleUrl){var F=l.id&&l.id.findCredential(s.currentStyleInfo.styleUrl),R=l.id&&l.id.findCredential(s.currentStyleInfo.serviceUrl);if(!F&&!R||"2.1.0"!==this._cimVersion){y.type="VectorTileLayer",y.styleUrl=s.currentStyleInfo.styleUrl,F&&(y.token=F.token),R&&R.token!==y.token&&(y.additionalTokens=[{url:s.currentStyleInfo.serviceUrl,token:R.token}]),u.push(y);break}}y.type="image";var w=this._vtlExtent||e.extent.offset(0,0),T=a.exportOptions&&a.exportOptions.dpi||96,k={format:"png",pixelRatio:T/96};if("MAP_ONLY"===a.layout&&a.preserveScale&&(!a.outScale||a.outScale===e.getScale())&&96===T&&a.exportOptions&&(a.exportOptions.width%2!=e.width%2||a.exportOptions.height%2!=e.height%2)&&(k.area={x:0,y:0,width:e.width,height:e.height},a.exportOptions.width%2!=e.width%2&&(k.area.width-=1),a.exportOptions.height%2!=e.height%2&&(k.area.height-=1),!this._vtlExtent)){var O=e.toMap({x:k.area.width,y:k.area.height});w.update(w.xmin,O.y,O.x,w.ymax,w.spatialReference),this._vtlExtent=w}y.extent=w._normalize(!0).toJson();var C=s.takeScreenshot(k);C.isResolved()?C.then((function(e){"data:image/png;base64,"===e.dataURL.substr(0,22)&&(y.imageData=e.dataURL.substr(22))})):console.error("PrintTask: VectorTileLayer.takeScreenshot() returned an unresolved Promise"),y.imageData&&u.push(y);break;case"esri.layers.WebTiledLayer":var E=s.url.replace(/\$\{/g,"{");y=r.mixin(y,{type:"WebTiledLayer",urlTemplate:E,credits:s.copyright}),s.subDomains&&s.subDomains.length>0&&(y.subDomains=s.subDomains),s._wmtsInfo&&(y.wmtsInfo=s._wmtsInfo),delete y.url,u.push(y);break;default:(s.getTileUrl||s.getImageUrl)&&(y=r.mixin(y,{url:s.url}),u.push(y))}var A=i.map(e.graphicsLayerIds,e.getLayer,e);for(n=0;n<A.length;n++)(s=A[n]).isFeatureReductionActive&&s.isFeatureReductionActive()&&(s.getSingleGraphics().length?A.splice(++n,0,s.getFeatureReductionLayer()):A[n]=s.getFeatureReductionLayer());for(n=0;n<A.length;n++){var P;if((s=A[n]).loaded&&s.visible&&(!f||s.isVisibleAtScale(f)))switch(d=s.declaredClass){case"esri.layers.CSVLayer":if(this._is11xService){y={id:s.id,url:s.url,title:s.title,opacity:s.opacity,minScale:s.minScale||0,maxScale:s.maxScale||0,type:"CSV",locationInfo:{latitudeFieldName:s.latitudeFieldName,longitudeFieldName:s.longitudeFieldName},layerDefinition:{drawingInfo:{renderer:s.renderer&&s.renderer.toJson({useLegacyRotationProperties:!0})}}},u.push(y);break}case"esri.layers.FeatureLayer":case"esri.layers.LabelLayer":case"esri.layers.StreamLayer":if("esri.layers.LabelLayer"===d&&!a.showLabels||s.renderer&&"esri.renderer.HeatmapRenderer"===s.renderer.declaredClass)continue;P=null,s.url&&s.renderer&&("esri.renderer.ScaleDependentRenderer"===s.renderer.declaredClass?"scale"===s.renderer.rangeType?P=s.renderer.getRendererInfoByScale(e.getScale())&&s.renderer.getRendererInfoByScale(e.getScale()).renderer:"zoom"===s.renderer.rangeType&&(P=s.renderer.getRendererInfoByZoom(e.getZoom())&&s.renderer.getRendererInfoByZoom(e.getZoom()).renderer):P=s.renderer);var V=P&&"esri.layers.CSVLayer"!==s.declaredClass&&!this._isFeatureCollectionRequired(P,s)&&!P.valueExpression,M=s.isFeatureReductionActive&&s.isFeatureReductionActive();if(P&&!M&&"esri.renderer.DotDensityRenderer"!==P.declaredClass&&"esri.layers.StreamLayer"!==s.declaredClass&&(this._is11xService||V)&&("esri.renderer.SimpleRenderer"===P.declaredClass||"esri.renderer.TemporalRenderer"===P.declaredClass||null==P.attributeField||r.isString(P.attributeField)&&s._getField(P.attributeField,!0))){if(y={id:s.id,title:r.getObject("arcgisProps.title",!1,s)||s.id,opacity:s.opacity,minScale:s.minScale||0,maxScale:s.maxScale||0,layerDefinition:{drawingInfo:{renderer:P.toJson({useLegacyRotationProperties:!0})}}},y=r.mixin(y,this._getUrlAndToken(s)),"esri.renderer.TemporalRenderer"===P.declaredClass){var j=y.layerDefinition.drawingInfo;j.latestObservationRenderer=j.renderer.latestObservationRenderer,j.trackLinesRenderer=j.renderer.trackRenderer,j.observationAger=j.renderer.observationAger,j.renderer=j.renderer.observationRenderer,s._trackIdField&&(y.layerDefinition.timeInfo={trackIdField:s._trackIdField})}if(this._convertSvgRenderer(y.layerDefinition.drawingInfo.renderer),this._is11xService||s.opacity<1||"esri.renderer.TemporalRenderer"===P.declaredClass||this._updateLayerOpacity(y)){if(s._params.source){var J=s._params.source.toJson();r.mixin(y.layerDefinition,{source:J})}if(s.getDefinitionExpression()&&r.mixin(y.layerDefinition,{definitionExpression:s.getDefinitionExpression()}),2!==s.mode){if(s.getSelectedFeatures().length>0){var U=i.map(s.getSelectedFeatures(),(function(e){return e.attributes[s.objectIdField]}));U.length>0&&s.getSelectionSymbol()&&r.mixin(y,{selectionObjectIds:U,selectionSymbol:s.getSelectionSymbol().toJson()})}}else{var G=i.map(s.getSelectedFeatures(),(function(e){return e.attributes[s.objectIdField]}));if(0===G.length||!s._params.drawMode)break;r.mixin(y.layerDefinition,{objectIds:G});var z=null;s.getSelectionSymbol()&&(z=new m(s.getSelectionSymbol())),r.mixin(y.layerDefinition.drawingInfo,{renderer:z&&z.toJson()})}}else y=this._createFeatureCollection(s,e,null,a)}else y=P&&(P.valueExpression||this._isFeatureCollectionRequired(P,s)||"esri.renderer.DotDensityRenderer"===P.declaredClass)?this._createFeatureCollection(s,e,P,a):this._createFeatureCollection(s,e,null,a);if(!y)continue;u.push(y),this.allLayerslegend&&this.allLayerslegend.push({id:s.id});break;case"esri.layers._GraphicsLayer":case"esri.layers.GraphicsLayer":case"esri.layers.WFSLayer":if(!(y=this._createFeatureCollection(s,e,null,a)))continue;u.push(y),this.allLayerslegend&&this.allLayerslegend.push({id:s.id});break;case"esri.layers.ArcGISImageServiceVectorLayer":y={id:s.id,title:r.getObject("arcgisProps.title",!1,s)||s.id,opacity:s.opacity,minScale:s.minScale||0,maxScale:s.maxScale||0,visibility:s.visible,symbolTileSize:s.symbolTileSize,layerDefinition:{drawingInfo:{renderer:s.renderer.toJson({useLegacyRotationProperties:!0})}}},y=r.mixin(y,this._getUrlAndToken(s)),s.mosaicRule&&r.mixin(y,{mosaicRule:s.mosaicRule.toJson()}),u.push(y),this.allLayerslegend&&this.allLayerslegend.push({id:s.id})}}return f&&i.forEach(u,(function(e){e.minScale=0,e.maxScale=0})),e.graphics&&e.graphics.graphics.length>0&&(y=this._createFeatureCollection(e.graphics,e,null,a))&&u.push(y),e._labels&&a.showLabels&&(y=this._createFeatureCollection(e._labels,e,null,a))&&u.push(y),i.forEach(u,(function(e,r,i){e._isRefLayer&&(delete e._isRefLayer,i.splice(r,1),i.push(e))})),u},_getUrlAndToken:function(e){return{token:e._getToken(),url:e._url?e._url.path:null}},_updateLayerOpacity:function(e){var t=this._colorEvaluator(e),a=!0;if((t=i.filter(t,(function(e){return r.isArray(e)&&4===e.length}))).length){var n,l=t[0][3];for(n=1;n<t.length;n++)if(l!==t[n][3]){a=!1;break}if(a)for(e.opacity=l/255,n=0;n<t.length;n++)t[n][3]=255}return a},_isFeatureCollectionRequired:function(e,i){if(i&&i.isFeatureReductionActive&&i.isFeatureReductionActive())return!0;var t=!1,a=this._getVariable(e,"rotationInfo",!1);if(a){var n=a.field;t=n&&r.isFunction(n)||a.valueExpression}return e.hasVisualVariables("sizeInfo")||e.hasVisualVariables("colorInfo")||e.hasVisualVariables("opacityInfo")||t},_getVariable:function(e,r,i){var t,a;return e&&(a=(t=e.getVisualVariablesForType(r,i))&&t[0]),a},_applyVisualVariables:function(e,r){var i=r.renderer,t=r.graphic,a=r.symbol,n=r.mapResolution,l=r.mapScale,s=a.type;if("textsymbol"!==s&&"shieldlabelsymbol"!==s){var o,d,u,c=this._getVariable(i,"sizeInfo",!1),f=this._getVariable(i,"colorInfo",!1),m=this._getVariable(i,"opacityInfo",!1),h=this._getVariable(i,"rotationInfo",!1);if(a instanceof p&&(c=this._getVariable(i,"sizeInfo","outline")||c),null!=(o=c?i.getSize(t,{sizeInfo:c,shape:"simplemarkersymbol"===s?a.style:null,resolution:n,scale:l}):t.size)&&("simplemarkersymbol"===s?e.size=x.px2pt(o):"picturemarkersymbol"===s?(d=(u=o)*(a.width/a.height),e.width=x.px2pt(d),e.height=x.px2pt(u),0!==a.xoffset&&(e.xoffset=x.px2pt(d*(a.xoffset/a.width))),0!==a.yoffset&&(e.yoffset=x.px2pt(u*(a.yoffset/a.height)))):"simplelinesymbol"===s?e.width=x.px2pt(o):e.outline&&(e.outline.width=x.px2pt(o))),f){var g=i.getColor(t,{colorInfo:f});g&&("simplemarkersymbol"!==s&&"simplelinesymbol"!==s&&"simplefillsymbol"!==s||(e.color=y.toJsonColor(g)))}if(m){var b=i.getOpacity(t,{opacityInfo:m});null!=b&&e.color&&(e.color[3]=Math.round(255*b))}if(h){var S=i.getRotationAngle(t,{rotationInfo:h});S&&(e.angle=-S)}}}});return n("extend-esri")&&r.setObject("tasks.PrintTask",I,l),I}));