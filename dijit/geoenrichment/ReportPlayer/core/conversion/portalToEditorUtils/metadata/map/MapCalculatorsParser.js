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

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter","./MetadataToRendererParser","./MapTagsUtil","esri/dijit/geoenrichment/utils/ImageUtil"],(function(e,t,a,r){var s={parseMapCalculators:function(t,a,r){e.queryJson(t,"Maps").forEach((function(t){e.queryJson(t,"Map").forEach((function(e){var o=s._parsePortalLayers(e),i=s._parseStudyAreas(e),u={fieldName:e.attributes.Name,width:Number(e.attributes.Width),height:Number(e.attributes.Height),defaultBasemapId:o.defaultBasemapId,defaultBasemapName:o.defaultBasemapName,webMapId:o.webMapId,webMapName:o.webMapName,additionalLayerInfos:s._parseAdditionalLayers(e,a),pinSymbolJson:s._parseSiteLayerPinSymbol(e,r),areaSymbolJsons:i.symbolJsons,areaSymbolRamp:i.ramp,mapScale:Number(e.attributes.Scale)||null};a&&(a.metadata.mapImageInfosHash[t.attributes.Name+"."+e.attributes.Name]=u)}))}))},_parsePortalLayers:function(t){var a,r,s=e.queryJson(t,"Layer").filter((function(e){return!(!e.attributes.PortalItemId&&!e.attributes.MapName)}));return s.length>1&&(a=s.shift()),r=s.shift(),{defaultBasemapId:a&&a.attributes.PortalItemId,defaultBasemapName:a&&a.attributes.MapName,webMapId:r&&r.attributes.PortalItemId,webMapName:r&&r.attributes.MapName}},_parseAdditionalLayers:function(a,r){var s=[];return e.queryJson(a,/^(Layer|LocatorResultsLayer|ComparisonResultsLayer)$/).filter((function(e){return!!e.attributes.ServiceUrl||"LocatorResultsLayer"===e.name||"ComparisonResultsLayer"===e.name})).forEach((function(e){if(e.attributes.ServiceUrl)s.push({url:e.attributes.ServiceUrl});else if("LocatorResultsLayer"===e.name){var a=e.tags&&e.tags.filter((function(e){return"Renderer"===e.name}))[0],o=r.metadata.locatorCalculatorsHash[e.attributes.CalculatorName];o&&o.isValid&&s.push({isLocatorLayer:!0,layerName:e.attributes.LayerName,calculatorName:e.attributes.CalculatorName,calculatorInfo:o,rendererJson:a&&t.parseRendererJson(a)})}else if("ComparisonResultsLayer"===e.name){var i=(a=e.tags&&e.tags.filter((function(e){return"Renderer"===e.name}))[0])&&t.parseRendererJson(a);if(i&&"esriTS"===i.uniqueValueInfos[0].symbol.type)s[s.length-1].labelRendererJson=i;else{var u=e.tags&&e.tags.filter((function(e){return"LabelingInfo"===e.name}))[0],n=u&&t.parseLabelRendererJson(u);s.push({isComparisonLayer:!0,calculatorName:e.attributes.CalculatorName,rendererJson:i,labelRendererJson:n})}}})),s.length&&s},_parseSiteLayerPinSymbol:function(t,s){var o,i=e.queryJson(t,"SiteLayer")[0];if(i){var u=e.queryJson(i,"Symbol")[0];if(u&&"Image"===u.attributes.Type){var n=s.getImageData(u.attributes.Name);n&&(o={type:"esriPMS",contentType:r.getContentType(n),imageData:r.base64DataFromDataURL(n),url:u.attributes.Url,width:Number(u.attributes.Width),height:Number(u.attributes.Height),angle:Number(u.attributes.Angle)||0,xoffset:Number(u.attributes.XOffset)||0,yoffset:Number(u.attributes.YOffset)||0})}else if(u&&"Marker"===u.attributes.Type){var l=e.queryJson(u,"Fill")[0],m=l&&e.queryJson(l,"Color")[0],y=e.queryJson(u,"Outline")[0],b=y&&e.queryJson(y,"Color")[0];o={type:"esriSMS",style:"esriSMS"+(u.attributes.Style||"Circle"),size:Number(u.attributes.Size),angle:Number(u.attributes.Angle)||0,xoffset:Number(u.attributes.XOffset)||0,yoffset:Number(u.attributes.YOffset)||0,color:a.parseColorTag(m),outline:y&&{type:"esriSLS",color:a.parseColorTag(b),style:"esriSLS"+(y.attributes.Style||"Solid"),width:void 0===y.attributes.Width?0:Number(y.attributes.Width)}}}}return o},_parseStudyAreas:function(t){var a,r=e.queryJson(t,"StudyAreasLayer")[0],o=r&&e.queryTopJson(r,"SymbolsPalette")[0],i=(o&&e.queryTopJson(o,"Symbol")||[]).map(s._parseAreaSymbol),u=o&&e.queryTopJson(o,"SymbolRamp")[0];if(u){var n=e.queryTopJson(u,"First")[0],l=e.queryTopJson(u,"Last")[0];n=n&&e.queryTopJson(n,"Symbol")[0],l=l&&e.queryTopJson(l,"Symbol")[0],n&&l&&(a=[n,l].map(s._parseAreaSymbol))}return{ramp:a,symbolJsons:i}},_parseAreaSymbol:function(t){var r=e.queryJson(t,"Fill")[0],s=r&&e.queryJson(r,"Color")[0],o=e.queryJson(t,"Outline")[0],i=o&&e.queryJson(o,"Color")[0];return{type:"esriSFS",style:"esriSFSSolid",color:a.parseColorTag(s)||[0,0,0,1],outline:o&&{type:"esriSLS",color:a.parseColorTag(i),style:"esriSLS"+(o.attributes.Style||"Solid"),width:void 0===o.attributes.Width?0:Number(o.attributes.Width)}}}};return s}));