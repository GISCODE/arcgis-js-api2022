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

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter","../../../supportClasses/templateJsonUtils/fieldInfo/RichTextJsonUtil","../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoFormatUtil","../../ConversionUtil","../../ShapeConverter","../../../annotations/shape/ShapeJsonUtil","./_FieldInfoBuilder","./ImageParser","./MapParser","./AlignParser","../../../../_devConfig"],(function(e,r,t,a,n,i,o,s,l,f,u,g){var p={};function c(e){var r=e.attributes||{};return a.processFieldInfoTagAttributes(r),r}var m={parseImageTrigger:function(e,r){var t=s.getCalculatorOrScriptFieldInfo(e.attributes.field,r);if(!t)return console.log("Parse template error => can't build fieldInfo for field "+e.attributes.field),console.log(e),null;var a={fieldInfo:t,cases:[]},n=this;return e.tags.forEach((function(e){var t="case"===e.name?e.attributes.key:"default",i=e.tags[0],o=r.processFileName(i.attributes.value);a.cases.push({compareInfos:n._getCompareInfosFromTriggerKey(t),setters:[{property:i.attributes.property,value:o}]}),o&&r.putImageData(o)})),a},parseFieldTrigger:function(e,r,t){r.triggerJson={fieldInfo:t&&s.getCalculatorOrScriptFieldInfo(e.attributes.field,t),cases:[]};var a=this;e.tags.forEach((function(e){var t="case"===e.name?e.attributes.key:"default",n={compareInfos:a._getCompareInfosFromTriggerKey(t),setters:[]};r.triggerJson.cases.push(n),e.tags.forEach((function(e){n.setters.push({property:e.attributes.property,value:e.attributes.value})}))}))},_getCompareInfosFromTriggerKey:function(e){return e.split(n.KEY_INTERVAL_SEPARATOR).map((function(e){var r=n.ONE_FIELD_KEY_TEST.test(e)?e.replace(n.KEY_OPERATOR_RE,""):e;return{value:r,operator:e.substr(0,e.length-r.length)||"="}}))}},d=function(e,r,a){var n=a.parsers.getParser("chart").portalToEditor(e,r,a);return n&&t.createFieldInfoFromChart(n)},I=function(e,r,a){var n=a.parsers.getParser("infographic").portalToEditor(e,r,a);return n&&t.createFieldInfoFromInfographic(n)},F=function(r,a,n){var i,o=l.getElement(r,n),s=e.queryTopJson(r,"trigger")[0];if(s&&(i=m.parseImageTrigger(s,n))){var f=e.queryTopJson(r,"dataDrillingPanels")[0],u=f&&e.queryTopJson(f,"dataDrillingPanel")[0];u&&y(i.fieldInfo,u,n);var g=e.queryTopJson(r,"tooltip")[0];g&&S(i.fieldInfo,g,n)}return t.createFieldInfoFromImage(o,i)},h=function(e,r,a){var n=f.getElement(e,a);return t.createFieldInfoFromMap(n)},v=function(e,r,a){var n=i.svgJsonToShapeObject(e),s=i.getStylesFromSvgJson(e),l=o.createShapeJsonFromShapeObj(n,s),f=e.attributes;if(l.style.angle=Number(f.angle)||0,u.parseAlign(f,l.style),a.revisionVersion<2){var g=Math.max(l.style.borderAlpha>0&&l.style.borderWidth||0,l.backgroundStyle.borderAlpha>0&&l.backgroundStyle.borderWidth||0);if(g>0){var p=g,c=l.viewBox;c.xmin=c.xmin||0,c.ymin=c.ymin||0,c.xmin-=p/4,c.ymin-=p/4,c.width+=p/2,c.height+=p/2}}return t.createFieldInfoFromShape(l)},T=function(e,r,a){var n=a.parsers.getParser("section").parseSection(e,a);return t.createFieldInfoFromSection(n)},b=function(e,r,a,n,i,o,l){var u=c(e);if(l=l||u.f,a.templateJson.metadata.mapImageInfosHash[l]){var g=f.parseMapImageDField(l,a);return t.createFieldInfoFromMap(g)}var p,d=t.createFieldInfoFromSpecialFieldName(l,u.m);d||(2===r.tags.length&&r.tags[1].text&&(p=r.tags[1].text),d=s.getCalculatorOrScriptFieldInfo(l,a,{format:u.m,additionalText:p,summaryType:u.summary}));return d&&n&&(m.parseFieldTrigger(n,d,a),d.triggerJson&&!d.triggerJson.fieldInfo&&(d.triggerJson.fieldInfo=null,console.log("Parse template error => can't build fieldInfo for field "+n.attributes.field),console.log(n))),d&&i&&y(d,i,a),d&&o&&S(d,o,a),d};function y(r,t,a){var n=e.queryTopJson(t,"section")[0];n&&(r.dataDrillingPanelInfo={sectionJson:a.parsers.getParser("section").parseSection(n,a)})}function S(r,t,a){var i,o=t.attributes||{};r.tooltipInfo={value:!!o.value,alias:!!o.alias,expression:!!o.expression,conditional:!!o.conditional,fieldInfo:null,style:(i=o.style,n.ptToPxObj(n.parseStyleString(i)))};var s=e.queryTopJson(t,"textContent")[0];r.tooltipInfo.fieldInfo=s&&a.parsers.getParser("field").parseRichTextTag(s,a)}function J(r){return e.queryJson(r,/^d$|^text$|^reportName$|^reportTitle2/)}return p.parseField=function(e,r,a,n,i,o){var s;if(g.emulateErrors.layoutParseError)throw g.emulateErrors.layoutParseError--,new Error("Error test: something crashed during the parsing of the layout!");if(e){if("chart"===e.name)return d(e,r,a);if("infographic"===e.name)return I(e,r,a)||!1;if("img"===e.name&&e.attributes)return F(e,r,a);if("mapImage"===e.name&&e.attributes)return h(e,r,a);if("svg"===e.name)return v(e,r,a);if("section"===e.name)return T(e,r,a);if("d"===e.name)s=b(e,r,a,n,i,o);else if("a"===e.name&&e.tags&&"d"===e.tags[0].name){var l=e.tags[0];(s=b(l,r,a,n,i,o))&&e.attributes&&e.attributes.hreff&&(s.linkFieldInfo=b(l,r,a,n,i,o,e.attributes.hreff))}else s="text"===e.name?t.createFieldInfoFromSpecialFieldName(c(e).name):t.createFieldInfoFromSpecialFieldName(e.name,c(e).m)}if(!s){var f=J(r);if(1===f.length&&f[0].attributes&&"TrialUrlText"===f[0].attributes.name)return t.createFieldInfoFromSpecialFieldName(f[0].attributes.name);s=p.parseRichTextTag(r,a)}return s},p.parseRichTextTag=function(a,n){var i,o=J(a);if(o.length){var s=[],l=!0;o.some((function(e){var r=e.attributes?e.attributes.name:e.name,i="d"===e.name?b(e,a,n):r&&t.createFieldInfoFromSpecialFieldName(r);if(!i)return l=!1,!0;s.push(i)})),l&&(i=r.createFieldInfoFromRichText(e.getInnerHTML(a),s))}return i},p.parseFieldTrigger=function(e,r,t){return r=r||{},m.parseFieldTrigger(e,r,t),r.triggerJson},p}));