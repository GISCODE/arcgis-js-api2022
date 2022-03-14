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

define(["dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../Color","./colors","./size"],(function(e,n,o,a,r,i,t){var m={light:{color:[153,153,153,.25],width:1},dark:{color:[153,153,153,.25],width:1},darker:{color:[26,26,26,.25],width:1}},c={default:{name:"default",label:"Default",description:"Default theme for visualizing features by their predominant category.",basemapGroups:{light:["streets","gray","topo","terrain","national-geographic","oceans","osm"],dark:["satellite","hybrid","dark-gray"]},pointSchemes:{light:{common:{noDataColor:"#aaaaaa",outline:m.light,size:8},primary:"predominant-v1",secondary:["predominant-v2","predominant-v3","predominant-v4","predominant-v5","predominance-race","predominance-money","predominance-race-ethnic","predominance-rainbow","predominance-sequence"]},dark:{common:{noDataColor:"#aaaaaa",outline:m.darker,size:8},primary:"predominant-v2",secondary:["predominant-v1","predominant-v3","predominant-v4","predominant-v5","predominance-race","predominance-money","predominance-race-ethnic","predominance-rainbow","predominance-sequence"]}},lineSchemes:{light:{common:{noDataColor:"#aaaaaa",width:2},primary:"predominant-v1",secondary:["predominant-v2","predominant-v3","predominant-v4","predominant-v5","predominance-race","predominance-money","predominance-race-ethnic","predominance-rainbow","predominance-sequence"]},dark:{common:{noDataColor:"#aaaaaa",width:2},primary:"predominant-v2",secondary:["predominant-v1","predominant-v3","predominant-v4","predominant-v5","predominance-race","predominance-money","predominance-race-ethnic","predominance-rainbow","predominance-sequence"]}},polygonSchemes:{light:{common:{noDataColor:"#aaaaaa",outline:m.light,fillOpacity:.8,markerSize:8},primary:"predominant-v1",secondary:["predominant-v2","predominant-v3","predominant-v4","predominant-v5","predominance-race","predominance-money","predominance-race-ethnic","predominance-rainbow","predominance-sequence"]},dark:{common:{noDataColor:"#aaaaaa",outline:m.dark,fillOpacity:.8,markerSize:8},primary:"predominant-v2",secondary:["predominant-v1","predominant-v3","predominant-v4","predominant-v5","predominance-race","predominance-money","predominance-race-ethnic","predominance-rainbow","predominance-sequence"]}}}},p={};function d(n,o){return e.map(n,(function(e){var n=new r(e);return null!=o&&(n.a=o),n}))}function l(e,n,o,a,t){var m,c=i[e];if(c)switch((m={}).colors=d(c[t]||c.stops),m.noDataColor=new r(n.noDataColor),m.opacity=n.fillOpacity||1,m.sizeInfo=a,o){case"point":m.outline={color:new r(n.outline.color),width:n.outline.width},m.size=n.size;break;case"line":m.width=n.width;break;case"polygon":m.outline={color:new r(n.outline.color),width:n.outline.width},a&&a.marker&&null!=n.markerSize&&(a.marker.size=n.markerSize)}return m}!function(){var e,n,o,a,r,i,t,m;for(e in c)for(a in o=(n=c[e]).basemapGroups,r=p[e]={basemaps:[].concat(o.light).concat(o.dark),point:{},line:{},polygon:{}},o)for(i=o[a],t=0;t<i.length;t++)m=i[t],n.pointSchemes&&(r.point[m]=n.pointSchemes[a]),n.lineSchemes&&(r.line[m]=n.lineSchemes[a]),n.polygonSchemes&&(r.polygon[m]=n.polygonSchemes[a])}();var s={getAvailableThemes:function(n){var o,a,r,i=[];for(o in c)a=c[o],r=p[o],n&&-1===e.indexOf(r.basemaps,n)||i.push({name:a.name,label:a.label,description:a.description,basemaps:r.basemaps.slice(0)});return i},getSchemes:function(n){var o,a,r=n.theme,i=n.basemap,m=function(e){var n=e;return"esriGeometryPoint"===n||"esriGeometryMultipoint"===n?n="point":"esriGeometryPolyline"===n?n="line":"esriGeometryPolygon"!==n&&"esriGeometryMultiPatch"!==n||(n="polygon"),n}(n.geometryType),c=n.numColors,d=t.getSchemes({theme:"default",basemap:n.basemap,geometryType:n.geometryType}),s=d&&d.primaryScheme,h=p[r];return(o=(o=h&&h[m])&&o[i])&&(a={primaryScheme:l(o.primary,o.common,m,s,c),secondarySchemes:e.map(o.secondary,(function(e){return l(e,o.common,m,s,c)}))}),a},cloneScheme:function(e){var o;return e&&((o=n.mixin({},e)).colors=d(o.colors),o.noDataColor&&(o.noDataColor=new r(o.noDataColor)),o.outline&&(o.outline={color:o.outline.color&&new r(o.outline.color),width:o.outline.width}),o.sizeInfo&&(o.sizeInfo=t.cloneScheme(o.sizeInfo))),o}};return o("extend-esri")&&n.setObject("styles.predominance",s,a),s}));