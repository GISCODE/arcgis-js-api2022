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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/on","dijit/_WidgetBase","dijit/_TemplatedMixin","esri/dijit/geoenrichment/TriStateItem","esri/dijit/geoenrichment/lists/FlowList","../utils/ThemeCalculator","./LegendSymbolRenderer"],(function(e,t,i,l,s,n,o,a,d,r,c,h,u){var m=e(null,{createPresentation:function(e,t,a,d,c){var h=this,m=l.create("div",{class:"selectableLegendRoot "+(this.isStacked()?"":"dijitInline")},a);m.style.paddingLeft=(this.isStacked()?3:10)+"px",m.style.paddingRight=(this.isStacked()?3:10)+"px";var k=this.canSelect()&&new r(m,{class:"dijitInline selectableLegendRootCheckbox"}),f=u.renderSymbol({defaultSymbol:this.getDefaultLegendSymbol(),customSymbol:this.getCusomLegendSymbol(),marker:e.marker,stroke:e.stroke,fill:e.fill,width:8,height:15}),g=l.create("div",{innerHTML:e.label,class:"dijitInline selectableLegendRootLabel TrimWithEllipses"}),S=e.valueText&&l.create("div",{innerHTML:this.isStacked()?e.valueText:"("+e.valueText+")",class:"dijitInline selectableLegendRootValue TrimWithEllipses"});S&&(S.style.marginLeft="10px"),this.isRtlPlacement()?(l.place(g,m),S&&l.place(S,m),l.place(f,m)):(l.place(f,m),l.place(g,m),S&&l.place(S,m)),k&&(k.set("checked",!e.unchecked),i[e.unchecked?"add":"remove"](m,"selectableLegendRoot_unselected"),k.onClick=function(t){i[t.checked?"remove":"add"](m,"selectableLegendRoot_unselected"),h.onSelectionChanged(e.label,t.checked)});var b=this.getItemMaxWidth();if(b&&this.needFormatAsTable()){if(S){var L=b-s.getMarginBox(f).w-s.getMarginBox(g).w-S.clientWidth;S.style.marginLeft=L+"px"}m.style.width=b+"px"}return this.setItemWidth(n.get(m,"width"),m.clientWidth),this.canEditLabel(e)&&(i.add(g,"isEditable"),o(g,"click",(function(t){t.stopPropagation(),h.onLabelClicked(e,m)}))),m},isRtlPlacement:function(){},isStacked:function(){},needFormatAsTable:function(){},canSelect:function(){},onSelectionChanged:function(e,t){},getDefaultLegendSymbol:function(){},getCusomLegendSymbol:function(){},canEditLabel:function(e){},onLabelClicked:function(e,t){},getItemMaxWidth:function(){},setItemWidth:function(e,t){}});return e([a,d],{templateString:"<div class='esriGESelectableLegend'><div data-dojo-attach-point='listDiv'></div></div>",series:null,allowSelect:!0,allowEditLabels:!1,showSeriesData:!1,isRtlPlacement:!1,keepItemsTheSameWidth:!1,customLegendSymbol:null,defaultLegendSymbol:null,showValues:!1,isStacked:!1,hideLastPoint:!1,chartWidth:0,chartType:null,list:null,_isCollectingWidthsFlag:!1,_uncheckedSeriesHash:null,_itemMaxWidth:0,_itemFullWidths:null,_isFlowStacked:!1,postCreate:function(){var e=this;this._uncheckedSeriesHash={};var i=t.mixin(new m,{onSelectionChanged:function(t,i){i?delete e._uncheckedSeriesHash[t]:e._uncheckedSeriesHash[t]=!0,e.onSeriesExclusionChanged(e._uncheckedSeriesHash)},onLabelClicked:function(t,i){e.showSeriesData?e.onPointLabelClickedAt(void 0!==t.unsortedIndex?t.unsortedIndex:e.list.items.indexOf(t),i):e.onSeriesLabelClickedAt(e.list.items.indexOf(t),i)},isStacked:function(){return e.isStacked},needFormatAsTable:function(){return e.isStacked||e._isFlowStacked},canSelect:function(){return e.allowSelect},getDefaultLegendSymbol:function(){return e.defaultLegendSymbol},getCusomLegendSymbol:function(){return e.customLegendSymbol},canEditLabel:function(t){return!t.isComparisonSeries&&e.allowEditLabels},isRtlPlacement:function(){return e.isRtlPlacement},getItemMaxWidth:function(){return e._isCollectingWidthsFlag?0:e._itemMaxWidth},setItemWidth:function(t,i){e._isCollectingWidthsFlag&&(e._itemFullWidths.push(i),e._itemMaxWidth=Math.max(e._itemMaxWidth,t))}});this.list=new c({class:"selectableLegendFlowList",itemRenderer:i},this.listDiv),this.own(this.list),this.isRtlPlacement&&(this.domNode.style.textAlign="right")},refresh:function(){var e=this._getItems();this.list.domNode.style.width="",this._itemMaxWidth=0,this._itemFullWidths=[],this._isCollectingWidthsFlag=!0,this._isFlowStacked=!1,this.list.setItems(e),this._isCollectingWidthsFlag=!1;var t=0;if(this._itemFullWidths.forEach((function(e){t+=e})),this._isFlowStacked=!this.isStacked&&this.chartWidth&&t>this.chartWidth,this.keepItemsTheSameWidth&&this.list.refresh(),!this.isStacked&&this.chartWidth){var i;if(this._isFlowStacked){var l=this.list.domNode.children[0].clientWidth;i=Math.max(1,Math.floor(this.chartWidth/l))*l+2}else i=t+2;this.list.domNode.style.width=i+"px"}},_getItems:function(){var e=this,t=[];return this.showSeriesData?(this.series&&this.series[0]&&this.series[0].data.forEach((function(i){var l={label:i.name||"",valueText:e.showValues?i.tooltip.valueLabel:null,unsortedIndex:i.unsortedIndex},s=e._getDataFillAndStrokeColors(null,i);l.fill=s.fill,l.stroke=s.stroke,l.marker=s.marker,t.push(l)})),this.hideLastPoint&&t.pop()):this.series&&this.series.forEach((function(i){var l={label:i.name,unchecked:!0===e._uncheckedSeriesHash[i.name],isComparisonSeries:i.isComparisonSeries},s=e._getDataFillAndStrokeColors(i.params,i.data[0]);l.fill=s.fill,l.stroke=s.stroke,l.marker=s.marker,t.push(l)})),t},_getDataFillAndStrokeColors:function(e,t){e=e||{};var i=h.getPointIconStyle(t),l=e.markerFill||e.fill;l||(l=t.point&&t.point.hidden&&t.unhiddenFillColor||t.fill),l||(l=i.fillColor);var s=e.markerStroke&&e.markerStroke.color;return s||(s=e.stroke&&e.stroke.color&&e.stroke.width>0?e.stroke.color:t.stroke&&t.stroke.color&&t.stroke.width>0?t.point&&t.point.hidden&&t.unhiddenLineColor||t.stroke.color:i.borderColor),{fill:l,stroke:s,marker:e.unscaledMarker||e.marker||t.marker}},resetExclusion:function(){this._uncheckedSeriesHash={}},onSeriesLabelClickedAt:function(e,t){},onPointLabelClickedAt:function(e,t){},onSeriesExclusionChanged:function(e){}})}));