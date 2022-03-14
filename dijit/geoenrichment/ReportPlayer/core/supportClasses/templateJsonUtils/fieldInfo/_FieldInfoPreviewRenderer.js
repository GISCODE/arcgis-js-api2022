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

define(["dojo/string","./utils","./FieldInfoPreviewSampleUtil","./FieldInfoPreviewAttributeUtil","../../conditionalStyling/ConditionalStyleUtil","esri/dijit/geoenrichment/utils/DateUtil","../../../grid/coreUtils/sorting/GridSortUtil","../../../grid/coreUtils/GridDataUtil","esri/dijit/geoenrichment/ReportPlayer/countryConfig","../../../sections/dynamicSettings/supportClasses/FilterUtil","./_FieldInfoDataRenderer","dojo/i18n!esri/nls/jsapi","../../../../_devConfig"],(function(e,t,r,i,n,a,l,u,o,s,m,f,d){f=f.geoenrichment.dijit.ReportPlayer.FieldInfoPreview;var v={percent:[10,15,20,25,33,46,72,90,95],percentSmall:[2,3,4,5,6,7],index:[80,99,105,111,113,118,121,130],number:[1150,2013,5006,10135,20456,36813],numberSmall:[10,5,3,7,15]},c=/^MEDAGE|^AVGHHSZ|^UNEMPRT|ECYHSZAVG|ECYPTAMED/,g={percent:{MP19013a_B:72,MP19014a_B:70,EMP_TO_POP:25,NOHS:10,HSG:20,SC:30,BGPD:40,X9074_A:326},percentSmall:{UNEMPRT_CY:5},index:{},number:{MEDHINC_CY:55650,TOTPOP_CY:20456,TOTHH_CY:8546,MEDDI_CY:38290,S01_BUS:11256,S01_EMP:60382,PCI_CY:30382,MEDNW_CY:88548,MEDVAL_CY:352430,X3004_A:5682,ACSMEDCRNT:1227,X5001_A:1762,X1003_A:4073,X4100_A:543,X8001_A:4538,X1130_A:3465,X7001_A:1568,X9008_A:246,X9073_A:158,X9045_A:42,POPGRWCYCY:1.05,POPGRWCYFY:1.12,ECYPTAPOP:20456,ECYHNIMED:55650},numberSmall:{AVGHHSZ_CY:2,MEDAGE_CY:36,ECYHSZAVG:2,ECYPTAMED:36},string:{TSEGNAME:"Bright Young Professionals",TLIFECODE:"L8",TLIFENAME:"Middle Ground",TSEGCODE:"8A",CONAME:"Coffee",NAICS:"1234",SIC:"5678",ADDR:"380 New York St, Redlands, CA",STATE:"CA",STATE_NAME:"California",ZIP:"92373",ZIP4:"92373",CITY:"Redlands",STREET:"New York st.",DIRECTION:"SW",FRNCOD:"24"}},p={"Employee/ Population Ratio":"EMP_TO_POP","No High School Diploma":"NOHS","High School Graduate":"HSG","Some College":"SC","Bachelors/Grad/Prof Degree":"BGPD","Tickets to Movies/Museums/Parks: Average":"X9074_A"};var S={};return{getValuePreview:function(e,t){return u.isVariableLikeFieldCell(e)?this._getVariableOrScriptPreview(e,t):this._getNonVariablePreview(e,t)},_getVariableOrScriptPreview:function(e,t){function n(e){return{formattedValue:e,value:e,formatFunction:null,isUnavailableData:!1}}function l(t){function r(t){return m.formatNumericValue(t,e)}var i=t;if(e.decimals>0?(i*=1.12345678,i=Number(i.toFixed(e.decimals))):i=Math.round(i),e.unitPrefix)switch(e.unitPrefix){case"kilo":i<1e3&&(i*=1e3);break;case"mega":i<1e9&&(i*=1e6);break;case"giga":i<1e9&&(i*=1e9)}else e.isCompact&&i<1e3&&(i*=1e3);return{formattedValue:r(i),value:i,formatFunction:function(e){return r(e)},isUnavailableData:!1}}var u=this._getSampleCacheType(e);if(d.preview.bigValues&&"number"===u)return l(1e12);var o=this._getValueFromPreviewFunction(e,t);if(o)return"string"==typeof o.value?n(o.value):l(o.value);var s=r.findNonEmptySample(e);if("string"==typeof s)return n(s);if("number"==typeof s)return l(s);var c=e.type||e.script&&("String"===e.script.type?"esriFieldTypeString":"esriFieldTypeDouble")||e.isSiteAttribute&&e.attribute.type,P=e.isSiteAttribute&&i.getAttributePreviewValue(e.attribute);if("esriFieldTypeDate"===c){var C=new Date;return P&&C.setTime(P),n(a.formatDateShort(C))}if("esriFieldTypeString"===c){var A=e.isDataLayerAttribute?e.attribute.name:e.variableID;return n(g.string[A]||P||f.sampleTextValue)}if("number"==typeof P)return l(P);var _=S[u]=S[u]||{},E=e.name+";"+e.decimals,F=_[E];if(!F){if(!(F=g[u][function(e){return e.variableID?e.variableID:e.script&&p[e.script.alias]}(e)])){var b=v[u];F=b[Math.round((b.length-1)*Math.random())]}F=_[E]=F}return l(F)},_getSampleCacheType:function(e){var t=e.statefulName?"p"===e.statefulName.charAt(0):e.showPercent,r=e.statefulName&&"i"===e.statefulName.charAt(0),i=e.hasVariable&&c.test(e.variableID);return t?i?"percentSmall":"percent":r?"index":i?"numberSmall":"number"},_getValueFromPreviewFunction:function(e,t){var r=t.getPreviewValueFunction&&t.getPreviewValueFunction({fieldInfo:e});if(r){var i=this._getSampleCacheType(e);return i=0===i.indexOf("percent")?"percent":"number",{value:(r=r.fields&&r.fields[e.name]||r)[i]||r.value,propName:i}}return null},_getNonVariablePreview:function(r,i){var n=void 0;if(i.getPreviewValueFunction){var a=i.getPreviewValueFunction({fieldInfo:r});a&&(n=(a=a.fields&&a.fields[r.name]||a).formattedValue||a.value)}if(void 0===n)if("headers.AREA_DESC"===r.name&&i.currentFeatureIndex>-1){var l=1+2*i.currentFeatureIndex;n=1===l?o.getSingleUnits()?"1 "+o.getSingleUnits():e.substitute(f.fieldPreviewAreaDescWithRadiusSingular,{radius:l}):o.getPluralUnits()?l+" "+o.getPluralUnits():e.substitute(f.fieldPreviewAreaDescWithRadiusPlural,{radius:l})}else n=t.fields.getPreview(r.name,i.isGraphicReport,i.isMultiFeature)||r.alias;return{formattedValue:n,value:n,formatFunction:null,isUnavailableData:!1}},getConditionalStylePreview:function(e,t){var r=e.triggerJson,i=t.cell;if(r&&void 0!==t.rowIndex){var a=this._getValueFromPreviewFunction(e,t);if(a)return{style:n.getConditionalStyle(a.value,r),value:a.value};var l=function(){var e=i.parentGrid.getCells().filter((function(e){var t=u.getConditionalFormatting(e);return t&&t.groupId===r.groupId})),t=e.indexOf(i);return{index:t,numElements:e.length,value:1e3-10*t}},o=r.calcMethod;if("aboveAverage"===o||"belowAverage"===o){var s,m=r.cases.filter((function(e){return e.isDefault}))[0],f=r.cases.filter((function(e){return!e.isDefault}))[0],d=l();return"aboveAverage"===o?s=d.index<Math.floor(d.numElements/2):"belowAverage"===o&&(s=d.index>=Math.ceil(d.numElements/2)),s?{fileName:n.getConditionalFileName("first-non-default",r),style:n.styleFromSetters(f.setters),value:g}:{style:m?n.styleFromSetters(m.setters):{},value:d.value}}if("indexDescOrder"===o){d=l();var v=function(e){return e>=0?e:d.numElements+e};return{fileName:n.getConditionalFileName(d.index,r,v),style:n.getConditionalStyle(d.index,r,v),value:d.value,stats:{min:null,max:null,numElements:d.numElements}}}var c=r.cases[t.rowIndex%r.cases.length];if(c){var g,p=n.styleFromSetters(c.setters);if(c.compareInfos)if(1===c.compareInfos.length){g=Number(c.compareInfos[0].value);var S=c.compareInfos[0].operator;">"===S?g++:"<"===S&&g--}else 2===c.compareInfos.length&&(g=(Number(c.compareInfos[1].value)+Number(c.compareInfos[0].value))/2);return{style:p,value:g,stats:{min:0,max:100}}}return null}return null},getRangeFilterPreview:function(e){if(e.presetFilter&&s.isRangeType(e.presetFilter.method)){if(e.presetFilter.columnIndex!==e.columnIndex)return null;var t=s.getRangeStatistics(e.presetFilter.ranges),r=t.min,i=t.max;isFinite(r)||isFinite(i)?isFinite(i)?isFinite(r)||(r=0===i?0:i>0?i/2:2*i):i=0!==r?Math.abs(2*r):100:(r=0,i=100);var n=(i-r)/e.numRows;return{value:r+n*e.rowIndex,_min:r,_max:i,_step:n}}},getSortingPreview:function(e){var t=e.presetFilter&&this.getRangeFilterPreview(e);if(!e.presetSorting.order||e.presetSorting.field!==e.columnField)return t;var r=100,i=0,n=i+e.numRows*r;return t&&(i=t._min,n=t._max,r=t._step),{value:e.presetSorting.order===l.ORDER_ASC?i+e.rowIndex*r:n-e.rowIndex*r}}}}));