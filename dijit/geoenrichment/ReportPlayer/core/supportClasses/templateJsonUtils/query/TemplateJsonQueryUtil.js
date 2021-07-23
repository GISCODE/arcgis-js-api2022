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

define(["./_SectionJsonCollector","../../../infographics/InfographicTypes"],(function(o,n){var e={},s="field",i={process:function(o,n,e,t,c){var r=t,a={processLevel:n,objJson:e,processFunc:t=function(o,n,e){o&&r.apply(this,arguments)},ignoreComparisonCalculators:c&&c.ignoreComparisonCalculators};o!==n||o===s&&n===s?"document"===o?i._processTemplateJson(e,a):"section"===o?i._processSectionJson(e,a):"table"===o?i._processTableJson(e,a,null):"tableRow"===o?i._processTableDataObj(e,a,null):o===s&&i._processFieldInfo(e,a,null):t(e)},_processTemplateJson:function(n,e){n.sectionsTables?n.sectionsTables.forEach((function(o){i._processTableJson(o,e)})):o.collectSectionJsons(n,{saveParentInfo:!1,processFieldInfoFunc:function(o){e.processLevel===s&&e.processFunc(o)}}).forEach((function(o){i._processSectionJson(o,e)}))},_processSectionJson:function(o,n){"section"===n.processLevel&&n.processFunc(o),o.stack&&o.stack.forEach((function(o){"sectionElement"===n.processLevel&&n.processFunc(o),"table"===o.id&&i._processTableJson(o,n)}))},_processTableJson:function(o,n,e){"table"===n.processLevel&&n.processFunc(o),o.rows.forEach((function(o){"tableRow"===n.processLevel&&n.processFunc(o,e),i._processTableDataObj(o,n,e)})),o.backgroundSectionJson&&i._processSectionJson(o.backgroundSectionJson,n),o.foregroundSectionJson&&i._processSectionJson(o.foregroundSectionJson,n),o.backgroundFloatingTablesSectionJson&&i._processSectionJson(o.backgroundFloatingTablesSectionJson,n),o.foregroundFloatingTablesSectionJson&&i._processSectionJson(o.foregroundFloatingTablesSectionJson,n)},_processTableDataObj:function(o,n,e){if(o.fieldInfos)for(var s in o.fieldInfos)i._processFieldInfo(o.fieldInfos[s],n,e,"tableCell")},_processFieldInfo:function(o,n,e,t){if(o){if(function(o,e){if(n.processLevel===s){if(n.skipVariables&&(o.hasVariable||o.script))return;n.processFunc(o,e,t)}}(o,e),o.triggerJson&&o.triggerJson.fieldInfo&&o.templateName!==o.triggerJson.fieldInfo.templateName&&i._processFieldInfo(o.triggerJson.fieldInfo,n,o,"trigger"),o.dataDrillingPanelInfo&&i._processSectionJson(o.dataDrillingPanelInfo.sectionJson,n),o.tooltipInfo&&o.tooltipInfo.fieldInfo&&i._processFieldInfo(o.tooltipInfo.fieldInfo,n,o,"fieldTooltip"),o.linkFieldInfo&&i._processFieldInfo(o.linkFieldInfo,n,o,"linkFieldInfo"),o.isRichText)for(var c in o.richTextJson.fieldInfos){var r=o.richTextJson.fieldInfos[c];i._processFieldInfo(r,n,o,"richTextPart")}o.isInfographic&&i._processInfographicFieldInfo(o,n),o.isChart&&i._processChartFieldInfo(o,n),o.isReportSection&&o.sectionJson&&i._processSectionJson(o.sectionJson,n)}},_processInfographicFieldInfo:function(o,e){var s=o.infographicJson;switch(s.type){case n.STATIC:if(s.header&&i._processTableJson(s.header,e,o),s.variableTables&&s.variableTables.forEach((function(n){n.variable&&i._processFieldInfo(n.variable.fieldInfo,e,o,"staticInfographicVariable"),n.description&&n.description.fieldInfo&&i._processFieldInfo(n.description.fieldInfo,e,o,"staticInfographicDescription")})),s.dataDrilling)for(var t in s.dataDrilling){var c=s.dataDrilling[t];c&&c.sectionJson&&i._processSectionJson(c.sectionJson,e)}break;case n.AGE_PYRAMID:case n.TAPESTRY:case n.PRIZM5:case n.RELATED_VARS:case n.ONE_VAR:!e.ignoreComparisonCalculators&&s.fieldInfos&&s.fieldInfos.forEach((function(n){i._processFieldInfo(n,e,o,"dynamicInfographicVariable")}));break;case n.AREA_DETAILS:s.titleSectionJson&&i._processSectionJson(s.titleSectionJson,e,o),s.attributesSectionJson&&i._processSectionJson(s.attributesSectionJson,e,o),s.notesSectionJson&&i._processSectionJson(s.notesSectionJson,e,o);break;case n.LOCATOR_TABLE:s.titleSectionJson&&i._processSectionJson(s.titleSectionJson,e),i._processSectionJson(s.headerSectionJson,e),i._processSectionJson(s.dataSectionJson,e),s.summarySectionJson&&i._processSectionJson(s.summarySectionJson,e),s.summaryFooterSectionJson&&i._processSectionJson(s.summaryFooterSectionJson,e),s.summarizeFractionField&&"object"==typeof s.summarizeFractionField&&i._processFieldInfo(s.summarizeFractionField,e,o,"locatorFractionFieldInfo");break;case n.COMPARISON_TABLE:s.titleSectionJson&&i._processSectionJson(s.titleSectionJson,e),e.ignoreComparisonCalculators||i._processSectionJson(s.dataSectionJson,e)}},_processChartFieldInfo:function(o,n){var e=o.chartJson.visualProperties;e.chartIcons&&e.chartIcons.forEach((function(e){i._processFieldInfo(e,n,o,"chartIcon")})),e.floatingIcons&&e.floatingIcons.forEach((function(e){i._processTableJson(e,n,o,"floatingIcon")})),e.floatingTexts&&e.floatingTexts.forEach((function(e){i._processTableJson(e,n,o,"floatingText")})),!n.ignoreComparisonCalculators||!o.chartJson.comparisonInfo||((n=Object.assign({},n)).skipVariables=!0),e.tooltip&&e.tooltip.fieldInfo&&i._processFieldInfo(e.tooltip.fieldInfo,n,o,"chartTooltip"),o.chartJson.dataDrillingPanelInfo&&i._processSectionJson(o.chartJson.dataDrillingPanelInfo.sectionJson,n),o.chartJson.seriesItems.forEach((function(e){e.points.forEach((function(e){i._processFieldInfo(e.fieldInfo,n,o,"chartPointField"),e.iconFieldInfo&&i._processFieldInfo(e.iconFieldInfo,n,o,"chartPointIcon"),e.captionFieldInfo&&i._processFieldInfo(e.captionFieldInfo,n,o,"chartPointCaption")}))}))}};return e.DOCUMENT="document",e.SECTION="section",e.TABLE="table",e.SECTION_ELEMENT="sectionElement",e.TABLE_ROW="tableRow",e.FIELD=s,e.process=i.process,e.processTemplateFieldInfos=function(o,n,e){i.process("document",s,o,n,e)},e.processSectionFieldInfos=function(o,n,e){i.process("section",s,o,n,e)},e.processSectionElements=function(o,n){i.process("document","sectionElement",o,n)},e.processTableFieldInfos=function(o,n,e){i.process("table",s,o,n,e)},e.processChartFieldInfos=function(o,n){o.seriesItems.forEach((function(o){o.points.forEach((function(o){o.fieldInfo&&n(o.fieldInfo,"series")}))}));var s=o.visualProperties.tooltip;if(s&&s.fieldInfo&&s.fieldInfo.isRichText)for(var i in s.fieldInfo.richTextJson.fieldInfos)n(s.fieldInfo.richTextJson.fieldInfos[i],"tooltip");o.dataDrillingPanelInfo&&e.processSectionFieldInfos(o.dataDrillingPanelInfo.sectionJson,(function(o){n(o,"dataDrilling")}))},e.processDataDrillingPanelInfos=function(o,n){e.processTemplateFieldInfos(o,(function(o){if(o.isInfographic&&o.infographicJson.dataDrilling)for(var e in o.infographicJson.dataDrilling){var s=o.infographicJson.dataDrilling[e];s&&n(s)}else o.isChart&&o.chartJson.dataDrillingPanelInfo?n(o.chartJson.dataDrillingPanelInfo):o.dataDrillingPanelInfo&&n(o.dataDrillingPanelInfo)}))},e.hasMultiFeatureChart=function(o){var n=!1;return e.processTemplateFieldInfos(o,(function(o){o.isChart&&(n=n||o.chartJson&&!!o.chartJson.isMultiFeatureChart)})),n},e.hasComparisonInfographicTable=function(o){var s=!1;return e.processTemplateFieldInfos(o,(function(o){o.isInfographic&&(s=s||o.infographicJson&&o.infographicJson.type===n.COMPARISON_TABLE)})),s},e.isGraphicReport=function(o){return!!o.sectionsTables},e.hasDynamicColumns=function(o){return e._checkTableAttributes(o,(function(o){return o.dynamicColumns>0}))},e.hasDynamicRows=function(o){return e._checkTableAttributes(o,(function(o){return o.dynamicRows>0}))},e._checkTableAttributes=function(o,n){var s;return e.isGraphicReport(o)?e.processTemplateFieldInfos(o,(function(o){o.isReportSection&&o.sectionJson&&o.sectionJson.stack&&o.sectionJson.stack.some((function(o){if("table"===o.id&&o.attributes&&n(o.attributes))return s=!0,!0}))})):s=e.collectSectionJsons(o).some((function(o){return o.stack&&o.stack.some((function(o){return"table"===o.id&&o.attributes&&n(o.attributes)}))})),s},e.hasMultiFeatureSections=function(o){return!!e.isGraphicReport(o)&&(e.hasMultiFeatureChart(o)||e.hasDynamicColumns(o)||e.hasComparisonInfographicTable(o))},e.calcNumberOfMaps=function(o,n){var s=0;return e.collectSectionJsons(o).forEach((function(o){s+=e.calcNumberOfMapsInSectionJson(o,n)})),s},e.calcNumberOfMapsInSectionJson=function(o,n){var s=0;return o.stack&&o.stack.forEach((function(o){o.isMap&&(n&&n(o),s++)})),e.processSectionFieldInfos(o,(function(o){o.isMap&&(n&&n(o.mapJson),s++)})),s},e.calcNumberOfMapsInTableJson=function(o,n){var s=0;return e.processTableFieldInfos(o,(function(o){o.isReportSection&&(s+=e.calcNumberOfMapsInSectionJson(o.sectionJson,n))})),s},e.collectSectionJsons=o.collectSectionJsons,e.getParentBox=o.getParentBox,e.setParentBox=o.setParentBox,e.getParentStyle=o.getParentStyle,e}));