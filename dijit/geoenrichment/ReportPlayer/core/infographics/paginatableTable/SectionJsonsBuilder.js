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

define(["dojo/_base/lang","../../sections/SectionTypes","../../grid/coreUtils/GridDataUtil","../../supportClasses/tableJson/TableJsonResizeUtil","../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoFormatUtil","esri/dijit/geoenrichment/utils/DateUtil","esri/dijit/geoenrichment/utils/FieldUtil"],(function(t,e,i,a,n,r,s){var o={};function l(t,e){return s.isNumericField(t)&&"number"==typeof e&&!isNaN(e)}return o.buildSectionJsonsAndStat=function(t){var e=o._collectGridDataObjectsAndStats(t);if(!e)return null;if(e.rowObjects.length)var i=o._splitRowsByPages(e.rowObjects,t).map((function(e){return o._buildSectionJsonForPage(e,t)}));return{sectionJsons:i,stats:e.stats,unitedSectionJson:o._buildSectionJsonForPage(e.rowObjects,t)}},o.buildStats=function(t){var e=o._collectGridDataObjectsAndStats(t,!0);return e&&e.stats},o._collectGridDataObjectsAndStats=function(e,a){var o=e.calculatorDataArray,c=e.searchTextRe;e.sorting;if(!o||!o.length){if(!e.allowNoResults)return null;o=[]}var u,d=e.dataSectionJson.stack[0],f=d.rows[0],h=d.rows[1],g={numAttributesTotal:0,numAttributesShown:0,ranges:{}};for(var m in e.filterRanges&&(u={},e.filterRanges.forEach((function(t){u[t.fieldName]=t}))),f.fieldInfos){var b=f.fieldInfos[m];s.isNumericField(b)&&(g.ranges[b.name]={fieldName:b.name,alias:b.alias,min:1/0,max:-1/0,sumTotal:0,sumShown:0,decimals:b.decimals,dataArray:[]})}var v=[];return o.forEach((function(t,s){var o={style:null,fieldInfos:{}};g.numAttributesTotal++;var h=!1,m=!1,b=!1;d.columns.forEach((function(e){var a=f.fieldInfos[e.field],d=t[a.name];if(l(a,d)){var v=g.ranges[a.name];v.min=Math.min(v.min,d),v.max=Math.max(v.max,d),v.dataArray.push(d)}var w="esriFieldTypeDate"===a.type;w?o[e.field]=d&&!isNaN(Number(d))?r.formatDateShort(Number(d)):"":void 0===d||"string"==typeof d?o[e.field]=d||"":(o[e.field]=n.formatNumber(d,a),i.setNumericDataValue(d,o,e.field)),o.__attributeIndex=s;var H=u&&u[a.name];H&&(d<H.min||d>H.max)&&(h=!0),c&&"string"==typeof d&&!w&&(m=!0,c.test(d)&&(b=!0))}));var w=h||m&&!b;w||a||(v.push(o),g.numAttributesShown++),d.columns.forEach((function(e){var i=f.fieldInfos[e.field],a=t[i.name];if(l(i,a)){var n=g.ranges[i.name];n.sumTotal+=a,w||(n.sumShown+=a)}})),e.setAttributeVisibleAt&&e.setAttributeVisibleAt(s,!w)})),e.sorting&&v.sort((function(t,a){var n=i.getNumericDataValue(t,e.sorting.field);n=void 0!==n?n:t[e.sorting.field];var r=i.getNumericDataValue(a,e.sorting.field);r=void 0!==r?r:a[e.sorting.field];var s="number"==typeof n?n-r:n.localeCompare(r);return"desc"===e.sorting.order?-s:s})),v.forEach((function(e,i){var a=i%2!=0&&h||f;e.style=t.clone(a.style),e.style.height=f.style.height})),g.ranges=Object.keys(g.ranges).map((function(t){return g.ranges[t]})),{stats:g,rowObjects:v}},o.getAttributeIndexForGridData=function(t){return t.__attributeIndex},o._splitRowsByPages=function(t,e){var i,a=o._getHeaderHeight(e),n=o._getDataRowHeight(e),r=o._getDataListHeight(t,e),s=[],l=0;return t.forEach((function(t){i||(i=[],s.push(i),l+=a),i.push(t),(l+=n)+n>r&&(i=null,l=0)})),s},o._getHeaderHeight=function(t){return t.scaleToFitHeight?t.minRowHeight:t.headerSectionJson?t.headerSectionJson.stack[0].rows[0].style.height:0},o._getDataRowHeight=function(t){return t.scaleToFitHeight?t.minRowHeight:t.dataSectionJson.stack[0].rows[0].style.height},o._getDataListHeight=function(t,e){var i=o._getHeaderHeight(e),a=o._getDataRowHeight(e),n=e.height-(e.hasFooter?e.footerHeight:0)-(e.hasTitle?e.titleHeight:0),r=e.height-e.footerHeight-(e.hasTitle?e.titleHeight:0);return i+a*t.length<=n?n:r},o._buildSectionJsonForPage=function(i,n){var r;if(n.headerSectionJson){var s=n.headerSectionJson.stack[0];r={id:"table",attributes:{},style:{width:n.width},columns:t.clone(s.columns),rows:[t.clone(s.rows[0])].concat(t.clone(i))}}else{var l=n.dataSectionJson.stack[0];r={id:"table",attributes:{},style:{width:n.width},columns:t.clone(l.columns),rows:t.clone(i)}}if(r.rows.forEach((function(t,e){t.style.height=0===e&&n.headerSectionJson?o._getHeaderHeight(n):o._getDataRowHeight(n)})),n.scaleToFitHeight){var c=o._getDataListHeight(i,n);a.resizeTableJsonToFitHeight(r,c)}return a.resizeTableJsonToFitWidth(r,n.width),{type:e.DETAILS,stack:[r]}},o}));