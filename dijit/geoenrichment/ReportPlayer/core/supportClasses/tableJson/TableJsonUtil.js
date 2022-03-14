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

define(["dojo/_base/lang","../templateJsonUtils/fieldInfo/FieldInfoBuilder","../templateJsonUtils/fieldInfo/FieldLibrary","../../grid/coreUtils/GridDataUtil","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes"],(function(e,t,i,l,n){var r={};return r.createTable=function(i){var l=i.numColumns,n=i.numRows,r=i.width,o=i.widths,s=i.style,a=i.attributes&&i.attributes.fixedColumns,f=i.attributes&&i.attributes.dynamicColumns;if(r)if(o)o=o.map((function(e){return r*Number(e.replace("%",""))/100}));else{var u=r/l;o=[];for(var c=0;c<l;c++)o.push(u)}if(o)r||isNaN(Number(o[0]))||(r=0,o.forEach((function(e){r+=e})));else{var d=Number(100/l).toFixed(3)+"%";o=[];for(var h=0;h<l;h++)o.push(d)}for(var m=[],g=0;g<l;g++)m.push({field:"field"+g,style:{width:o[g]}});for(var p=[],b=!0,y=i.height?i.height/n:i.rowHeight||15.07,w=0;w<n;w++){var S={style:{height:y,fields:{}},fieldInfos:{}};for(g=0;g<l;g++){var T="field"+g;!1!==i.useDefaultTheme&&(S.style.fields[T]=e.mixin({horizontalAlign:0===g?"left":"right",overrideStyle:0===w?n>1?!1!==i.useDefaultHeaderTheme?"TableHeader":"Default":void 0:b?"AlternatingRow":"Default"},i.cellParams)),f&&g>=a&&0===w&&(S.fieldInfos[T]=t.createFieldInfoFromSpecialFieldName("AREA_DESC")),i.processTableCell&&i.processTableCell(S,T,w,g,i)}p.push(S),b=!b}return{id:"table",attributes:e.mixin({},i.attributes),style:e.mixin({width:r||772.33},s),columns:m,rows:p}},r.createSingleCellTable=function(e){e=e||{};var t=r.createTable({numColumns:1,numRows:1,attributes:e.attributes,useDefaultTheme:!1});return r.modifyTableJson(t,0,0,e),t},r.modifyTableJson=function(e,t,i,l){var n=e.rows[t],r=e.columns[i],o=r.field;l.text&&(n[o]=l.text),l.fieldInfo&&(n.fieldInfos[o]=l.fieldInfo),l.cellStyle&&(n.style.fields[o]=l.cellStyle),l.columnSpan&&(n.columnSpans=n.columnSpans||{},n.columnSpans[o]=l.columnSpan),l.rowSpan&&(n.rowSpans=n.rowSpans||{},n.rowSpans[o]=l.rowSpan),n.themeStyle=l.themeStyle,l.width&&(e.style.width=l.width,r.style.width=l.width),l.height&&(n.style.height=l.height),void 0!==l.left&&(e.style.left=l.left),void 0!==l.top&&(e.style.top=l.top)},r.getTableWidth=function(e){return e.style.width},r.getTableHeight=function(e){var t=0;return e.rows.forEach((function(e){t+=e.style?e.style.height:0})),t},r.calcTableBox=function(e){return{x:e.style.left||0,y:e.style.top||0,w:r.getTableWidth(e),h:r.getTableHeight(e)}},r.createDetailsSection=function(e){return{type:n.DETAILS,stack:[r.createTable(e)]}},r.createDetailsSectionForFieldInfos=function(t,l){return{type:n.DETAILS,stack:[(o=r.createTable(e.mixin({numColumns:2,numRows:t.length+1},l)),o.rows.forEach((function(e,l){if(0!==l){var n=t[l-1];e.field0=n.script?n.script.alias:n.hasVariable?n.alias:i.getFieldLabel(n.name)||"",e.fieldInfos.field1=n}else e.field0=t[0].hasVariable?t[0].fieldCategory:""})),r.provideSpaceAfter(o),o)]};var o},r.createDetailsSectionForFieldInfoGroups=function(t,i){return{type:n.DETAILS,stack:[(l=t[0],o=r.createTable(e.mixin({numColumns:t.length+1,numRows:l.length+1},i)),o.rows.forEach((function(e,i){o.columns.forEach((function(l,n){if(0!==n)if(0!==i){var r=t[n-1][i-1];e.field0=e.field0||(r.script?r.script.alias:r.alias),e.fieldInfos[l.field]=r}else e[l.field]=t[n-1][0].fieldCategory||""}))})),r.provideSpaceAfter(o),o)]};var l,o},r.provideSpaceAfter=function(e,t){e.style.spaceAfter=Math.max(t||0,90-15.07*e.rows.length)},r.applyDefaultStyling=function(e){var t=!0;e.rows.forEach((function(i,l){e.columns.forEach((function(e){i.style.fields[e.field].overrideStyle=0===l?"TableHeader":t?"AlternatingRow":void 0})),t=!t}))},r.setTableHeaderStyle=function(e){if(e.style)for(var t in e.style.fields){(e.style.fields[t]=e.style.fields[t]||{}).overrideStyle="TableHeader"}},r.DEFAULT_ROW_HEIGHT=15.07,r.isEmptyTable=function(e){return!(e.columns&&e.columns.length&&e.rows&&e.rows.length)},r.isSingleCelledTable=function(e){return 1===e.columns.length&&1===e.rows.length},r.isMultiDataTable=function(e){return e.isGrid,e.columns.length>1||e.rows.length>2},r.getTableSubtype=function(e){if(!r.isSingleCelledTable(e))return null;var t=r.getFirstFieldInfo(e);return l.isTextLikeCell(t)?"isTextLike":t.isImage?t.triggerJson?"isImage.hasConditionalStyling":"isImage":t.isShape?"isShape":null},r.getFirstFieldInfo=function(e){return e.isGrid,e.rows[0].fieldInfos&&e.rows[0].fieldInfos[e.columns[0].field]},r.tableJsonHasInfographic=function(e){return!!r.getTableJsonInfographic(e)},r.getTableJsonInfographic=function(e){var t;return e.rows.some((function(e){if(e.fieldInfos)for(var i in e.fieldInfos){var l=e.fieldInfos[i];if(l&&l.isInfographic)return t=l.infographicJson,!0}})),t},r.getTableJsonFirstFieldInfo=function(e){return e.rows[0].fieldInfos[e.columns[0].field]},r.tableJsonHasChart=function(e){return e.rows.some((function(e){if(e.fieldInfos)for(var t in e.fieldInfos){var i=e.fieldInfos[t];if(i&&i.isChart)return!0}}))},r}));