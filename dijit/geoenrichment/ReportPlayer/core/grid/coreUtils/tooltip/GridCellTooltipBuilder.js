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

define(["dojo/_base/declare","../GridDataUtil","../../../supportClasses/conditionalStyling/ConditionalStyleLegendBuilder","../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoNameUtil","../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoRenderer","../../../supportClasses/WidgetQueryUtil","../../valueField/supportClasses/TextRenderer","./_ScriptExpressionBuilder","esri/dijit/geoenrichment/utils/ObjectUtil","esri/dijit/geoenrichment/utils/TooltipUtil","esri/dijit/geoenrichment/ReportPlayer/config","dojo/i18n!esri/nls/jsapi"],(function(e,i,t,o,n,l,r,a,s,d,u,c){c=c.geoenrichment.dijit.ReportPlayer.Grid;var p=e(null,{_cell:null,_content:"",constructor:function(e){this._cell=e},getContent:function(){return this._content?"<div class='esriGEAdjustableGridValueField_cellTooltipContent'>"+this._content+"</div>":null},addValue:function(e){this._content+="<div class='esriGERowHigh esriGEAdjustableGridValueField_cellTooltipContentValue'>"+e+"</div>"},addImageValue:function(e){var t=i.getNumericCellValue(e);if(!isNaN(t)&&"number"==typeof t){var o=e.numberFormatFunction?e.numberFormatFunction(t):s.formatNumber(t);this._content+="<div class='esriGERowHigh esriGEAdjustableGridValueField_cellTooltipContentValue'>"+o+"</div>"}},addAlias:function(e){this._content+="<div class='esriGERowHigh'><b>"+c.variable+"</b> "+e+"</div>"},buildRichText:function(e){var i=this._cell.parentGrid.viewModel.dynamicReportInfo,t=n.renderFieldInfoInTableCell(e,{previewValues:!0,fieldData:i&&i.fieldData,isGraphicReport:!0,currentFeatureIndex:this._cell.parentGrid.currentFeatureIndex});this._content+="<div class='esriGERowHigh'>"+t.formattedValue+"</div>"},addExpression:function(e,i){var t=a.buildTooltipExpression(e,i);t&&(this._content+="<div class='esriGERowHigh'>"+c.variableIsBasedOnExpression+"</div>",this._content+="<div class='esriGERowHigh'>"+t+"</div>")},addConditionalStyleLegend:function(e){var o=i.getNumericCellValue(e),n=i.getCellGroupStyleStats(e),l=i.getConditionalFormatting(e),r=i.getFieldInfo(e).isImage;this._content+=t.createLegendNode(l,n,r?"image":"text",o,e.numberFormatFunction).outerHTML},addTextBlock:function(e){this._content+="<div class='esriGERowHigh'>"+e+"</div>"},addSeparator:function(){this._content+="<div class='esriGERowHigh esriGEAdjustableGridValueField_cellTooltipContentSeparator'></div>"}}),f=/<\w/,g={value:!1,alias:!0,expression:!1,conditional:!1},v={setDynamicTooltipToCell:function(e,t,o){if(e.hasOverflowText()||i.isVariableLikeFieldCell(e)||i.isImageTriggerCell(e)){if(!v.isTooltipVisible(e))return;var n=v.getTooltipInfo(e),l=v.getSourceFieldInfo(e),r=l&&!(!l.script&&!l.expressionText)&&n.expression,a=!!n.fieldInfo,s=r||a;e.own(d.setTooltipToNode(e.domNode,(function(){return v.renderCellTooltip(e,t,o)}),{notRestricted:r,stayOnHover:s,classes:"esriGEAdjustableGridValueField_cellTooltip"+(s?"":" esriGENonInteractable"),style:v.getTooltipStyleFunc(e)}))}},getTooltipInfo:function(e){var i=v.getSourceFieldInfo(e);if(i&&i.tooltipInfo)return i.tooltipInfo;var t=l.getReportContainerGrid(e);return t&&t.tooltipInfo&&t.tooltipInfo.table||g},isTooltipVisible:function(e){var i=v.getSourceFieldInfo(e);if(i&&i.dataDrillingPanelInfo)return!1;var t=v.getTooltipInfo(e);return t.value||t.alias||t.expression||t.conditional||t.fieldInfo},getSourceFieldInfo:function(e){var t=i.getFieldInfo(e),o=i.getConditionalFormatting(e);return t&&t.isImage?o&&o.fieldInfo:t},getTooltipStyleFunc:function(e){return function(){return v.getTooltipStyle(e)}},getTooltipStyle:function(e){if(!e.parentGrid)return null;var i={},t=e.parentGrid.viewModel.getTheme(e.parentGrid.theme).table.tooltip;return s.copyOwnJsonProperties(t,i),s.copyOwnJsonProperties(v.getTooltipInfo(e).style,i),i},renderCellTooltip:function(e,t,n){var l=(n=n||{}).getExpression||function(e){return u.modules.complexCellTooltips&&e.expressionText},a=r.getFullText(e),s=i.getFieldInfo(e),d=s&&s.isImage,c=i.isVariableLikeFieldCell(s),g=i.getConditionalFormatting(e),I=v.getSourceFieldInfo(e),T=s&&s.isRichText||a&&f.test(a),m=new p(e),F=v.getTooltipInfo(e);if(c?(F.value&&a&&m.addValue(a),F.alias&&m.addAlias(o.getFieldInfoAlias(s))):d?(F.value&&m.addImageValue(e),F.alias&&m.addAlias(o.getFieldInfoAlias(I))):a&&!T&&F.value&&a&&m.addValue(a),F.fieldInfo&&m.buildRichText(F.fieldInfo),F.expression){var h=l(I);h&&m.addExpression(h,t)}return F.conditional&&g&&u.modules.complexCellTooltips&&(h&&m.addSeparator(),n.conditionalLegendDesc&&m.addTextBlock(n.conditionalLegendDesc),m.addConditionalStyleLegend(e)),m.getContent()}};return v}));