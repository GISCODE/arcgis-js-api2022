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

define(["dojo/_base/declare","dojo/_base/lang","../../PixelBlock","./RasterColormapRenderer","./RasterUniqueValueRenderer","./RasterRGBRenderer","./RasterStretchColorRampRenderer","./RasterClassBreaksRenderer","./RasterShadedReliefRenderer"],(function(e,r,n,a,t,l,o,i,s){var u=function(){var e={};function r(r){e[r.prototype.rendererName]=r}return r(a),r(l),r(o),r(t),r(i),r(s),e}();return{wellKnownRenderers:u,isSupported:function(e){if(!e)return!1;var r=!0,n=e.rendererName;return u[n]||(r=!1),r},create:function(e){return e?(e.rendererName?(r=e.rendererName,n=e.rendererArguments):(r=["UniqueValue","Stretch","ShadedRelief","RGB","Colormap","ClassBreaks"][["uniqueValue","rasterStretch","rasterShadedRelief","rgb","rasterColormap","classBreaks"].indexOf(e.type)],"rasterStretch"===e.type&&e.bandIndex&&e.bandIndex.length>1&&(r="RGB"),n=e),(a=u[r])?new a(n):null):null;var r,n,a},createDefaultRenderer:function(e){if(e&&e.raster){var r=e.raster.rasterInfo,n=e.raster.dataType;if(r){var a=e.raster.rasterFunction;if(a&&"U8"===r.pixelType&&["Stretch","Colormap","ContrastAndBrightness"].indexOf(a.functionName)>-1)a.renderTexture=!0;else if("Processed"!==n||!(e.useWebGL&&a&&a.renderTexture||!e.useWebGL&&"U8"===r.pixelType)){a&&(r=a.rasterInfo);var i,s=r.bandCount,u=r.colormap,f=r.vat,d=r.histograms;d&&0===d.length&&(d=null);var m,c=r.statistics&&r.statistics.map((function(e){return[e.min,e.max,e.mean,e.stddev]}));if(1===s&&u&&u.length>0)m=this._getDefaultColormapRenderer(f,u);else if(1===s&&f&&f.features&&f.features.length>0)m=new t({});else{var p,C=0,g=!1;n||!e.raster||!e.raster.tileInfo||void 0!==e.raster.tileInfo.tileType&&"Map"!==e.raster.tileInfo.tileType?"U8"===r.pixelType&&"Processed"===n?(C=5,c=c||[[0,255,0,0],[0,255,0,0],[0,255,0,0]],g=!1):"U8"===r.pixelType||"Elevation"===n?(C=5,g=!c):"Scientific"===n||"StdTime"===n?(C=5,g=!c,i=this._getDefaultScientificColorRamp()):d&&d.length>0?(C=6,g=!1):c?(C=5,g=!1):(C=6,g=!0):(c=[[0,255,0,0],[0,255,0,0],[0,255,0,0]],C=5,g=!1),c||(C=5,g=!0),s>=3&&!(e.bandIds||e.raster&&e.raster.imageServiceParams&&e.raster.imageServiceParams.bandIds)&&(p=this.getDefaultBandCombination(r)),p&&(c=p.map((function(e){return c[e]})));var v={stretchType:C,min:0,max:255,dra:g,minPercent:.25,maxPercent:.25,useGamma:!1,computeGamma:!1,statistics:c,histograms:d,numberOfStandardDeviations:2.5,bandIndex:p};1===s||p&&1===p.length?(i&&(v.colorRamp=i,v.invert=!1),m=new o(v)):m=new l(v)}return m}}}},getDefaultBandCombination:function(e){var r=e.bandCount;if(1===r)return null;if(2===r)return[0];var n=e.keyProperties,a=n&&n.ChangeAnalysisParameters&&n.ChangeAnalysisParameters.AnalysisType;if(a&&("ccdc"===a.toLowerCase()||"landtrendr"===a.toLowerCase()))return[0];var t,l=n&&n.BandProperties;if(l&&l.length===r){var o=this.getWellKnownBandIndexes(l),i=o.red,s=o.green,u=o.blue,f=o.nir;null!=i&&null!=s&&null!=u?t=[i,s,u]:null!=f&&null!=i&&null!=s&&(t=[f,i,s])}return!t&&r>=3&&(t=[0,1,2]),t},getWellKnownBandIndexes:function(e){for(var r={},n=0;n<e.length;n++){var a=e[n],t=a.BandName&&a.BandName.toLowerCase();if("red"===t)r.red=n;else if("green"===t)r.green=n;else if("blue"===t)r.blue=n;else if("nearinfrared"===t||"nearinfrared_1"===t||"nir"===t)r.nir=n;else if(a.WavelengthMax&&a.WavelengthMin){var l=a.WavelengthMin,o=a.WavelengthMax;null==r.blue&&l>=410&&l<=480&&o>=480&&o<=540?r.blue=n:null==r.green&&l>=490&&l<=560&&o>=560&&o<=610?r.green=n:null==r.red&&l>=595&&l<=670&&o>=660&&o<=730?r.red=n:null==r.nir&&l>=700&&l<=860&&o>=800&&o<=950&&(r.nir=n)}}return r},_getDefaultColormapRenderer:function(e,r){if(r||r.length){var n=[],t=this._ratContainsColormap(e);if(t)var l=this._getRATValueClassNameMap(e);return r.forEach((function(e){var r=l?l[e[0]]:e[0];n.push({color:[e[1],e[2],e[3]],value:e[0],label:t?null!=r?r:"":e[0]})})),new a({colormapInfos:n})}},_ratContainsColormap:function(e){return!(!e||!e.fields)&&e.fields.some((function(e){if(e&&e.name){var t=e.name.toLowerCase();"red"===t&&(r=!0),"green"===t&&(n=!0),"blue"===t&&(a=!0)}return r&&n&&a}));var r,n,a},_getRATValueClassNameMap:function(e){if(!e||!e.fields)return null;var r,n,a={};return e.fields.forEach((function(e){"classname"!==e.name.toLowerCase()&&"class_name"!==e.name.toLowerCase()||(r=e.name),"value"===e.name.toLowerCase()&&(n=e.name)})),e.features.forEach((function(e){var t=e.attributes;a[t[n]]=r?t[r]:t[n]})),a},_getDefaultScientificColorRamp:function(){return{type:"multipart",colorRamps:[{fromColor:[255,0,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[0,255,255]},{fromColor:[0,255,255],toColor:[0,0,255]}].map((function(e){return{fromColor:e.toColor,toColor:e.fromColor}})).reverse()}}}}));