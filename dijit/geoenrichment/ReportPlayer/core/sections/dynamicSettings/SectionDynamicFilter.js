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

define(["dojo/_base/declare","dojo/aspect","dojo/dom-construct","dijit/_WidgetBase","dijit/_TemplatedMixin","esri/dijit/geoenrichment/utils/MouseUtil","./chart/ChartFilter","./locator/LocatorFilter","./areaDetails/AreaDetailsFilter","./comparison/ComparisonFilter","./dynamicInfographic/DynamicInfographicFilter","./table/TableFilter"],(function(t,i,e,r,a,n,l,s,o,h,c,d){var F=t([r,a],{templateString:"<div class='esriGEReportPlayer_sectionDynamicFilter'></div>",areaDetailsFilter:null,chartFilter:null,comparisonFilter:null,dynamicInfographicFilter:null,locatorFilter:null,tableFilter:null,_areaDetailsFilterWidget:null,_chartFilterWidget:null,_comparisonFilterWidget:null,_dynamicInfographicFilterWidget:null,_locatorFilterWidget:null,_tableFilterWidget:null,postCreate:function(){this._tryInitAreaDetailsFilter(),this._tryInitChartFilter(),this._tryInitComparisonFilter(),this._tryInitDynamicInfographicFilter(),this._tryInitLocatorFilter(),this._tryInitTableFilter()},_tryInitAreaDetailsFilter:function(){var t=this;function r(){t._areaDetailsFilterWidget.setNumItems(t.areaDetailsFilter.getNumItemsTotal(),t.areaDetailsFilter.getNumItemsShown())}this.areaDetailsFilter&&(this._areaDetailsFilterWidget=new o({onAreaDetailsFilterChanged:this.onAreaDetailsFilterChanged.bind(this)}).placeAt(e.create("div",{class:"sectionDynamicFilter_row"},this.domNode)),this.own(this._areaDetailsFilterWidget),r(),this.own(i.after(this.areaDetailsFilter,"onContentUpdated",r)))},_tryInitChartFilter:function(){var t=this;function r(){t._chartFilterWidget.setNumElements(t.chartFilter.getNumElementsTotal(),t.chartFilter.getNumElementsShown())}this.chartFilter&&(this._chartFilterWidget=new l({onFilterRangesChanged:this.onChartFilterChanged.bind(this)}).placeAt(e.create("div",{class:"sectionDynamicFilter_row"},this.domNode)),this.own(this._chartFilterWidget),this._chartFilterWidget.setSettings(this.chartFilter),r(),this.own(i.after(this.chartFilter,"onContentUpdated",r)))},_tryInitComparisonFilter:function(){var t=this;function r(){t._comparisonFilterWidget.setNumAreas(t.comparisonFilter.getNumAreasTotal(),t.comparisonFilter.getNumAreasShown())}this.comparisonFilter&&(this._comparisonFilterWidget=new h({onComparisonFilterChanged:this.onComparisonFilterChanged.bind(this)}).placeAt(e.create("div",{class:"sectionDynamicFilter_row"},this.domNode)),this.own(this._comparisonFilterWidget),this._comparisonFilterWidget.setFilter(this.comparisonFilter),r(),this.own(i.after(this.comparisonFilter,"onContentUpdated",r)))},_tryInitDynamicInfographicFilter:function(){var t=this;function r(){t._dynamicInfographicFilterWidget.setNumAreas(t.dynamicInfographicFilter.getNumAreasTotal(),t.dynamicInfographicFilter.getNumAreasShown())}this.dynamicInfographicFilter&&(this._dynamicInfographicFilterWidget=new c({onDynamicInfographicFilterChanged:this.onDynamicInfographicFilterChanged.bind(this)}).placeAt(e.create("div",{class:"sectionDynamicFilter_row"},this.domNode)),this.own(this._dynamicInfographicFilterWidget),this._dynamicInfographicFilterWidget.setFilter(this.dynamicInfographicFilter),r(),this.own(i.after(this.dynamicInfographicFilter,"onContentUpdated",r)))},updateDynamicInfographicFilter:function(t){if(this.dynamicInfographicFilter){var i=this._dynamicInfographicFilterWidget.domNode.parentNode;this._dynamicInfographicFilterWidget.destroy(),e.destroy(i),this.dynamicInfographicFilter=t,this._tryInitDynamicInfographicFilter()}},_tryInitLocatorFilter:function(){var t=this;function r(){t._locatorFilterWidget.setNumPoints(t.locatorFilter.getNumPointsTotal(),t.locatorFilter.getNumPointsShown())}this.locatorFilter&&(this._locatorFilterWidget=new s({onLocatorFilterChanged:this.onLocatorFilterChanged.bind(this)}).placeAt(e.create("div",{class:"sectionDynamicFilter_row"},this.domNode)),this.own(this._locatorFilterWidget),this._locatorFilterWidget.setFilterRanges(this.locatorFilter.filterRanges),r(),this.own(i.after(this.locatorFilter,"onContentUpdated",r)))},_tryInitTableFilter:function(){var t=this;function r(){t._tableFilterWidget.setNumElements(t.tableFilter.getNumElementsTotal(),t.tableFilter.getNumElementsShown())}this.tableFilter&&(this._tableFilterWidget=new d({onFilterRangesChanged:this.onTableFilterChanged.bind(this)}).placeAt(e.create("div",{class:"sectionDynamicFilter_row"},this.domNode)),this.own(this._tableFilterWidget),this._tableFilterWidget.setSettings(this.tableFilter),r(),this.own(i.after(this.tableFilter,"onContentUpdated",r)))},hasFiltersOn:function(){return[this._chartFilterWidget,this._locatorFilterWidget,this._areaDetailsFilterWidget,this._comparisonFilterWidget,this._dynamicInfographicFilterWidget,this._tableFilterWidget].some((function(t){return t&&t.hasFiltersOn()}))},setVisualState:function(t){if(t){var i=t.stackElements[0];t=i&&i.filterRanges?i:i&&i.cells&&i.cells[0]}this._chartFilterWidget&&this._chartFilterWidget.setVisualState(t),this._locatorFilterWidget&&this._locatorFilterWidget.setVisualState(t),this._areaDetailsFilterWidget&&this._areaDetailsFilterWidget.setVisualState(t),this._comparisonFilterWidget&&this._comparisonFilterWidget.setVisualState(t),this._dynamicInfographicFilterWidget&&this._dynamicInfographicFilterWidget.setVisualState(t),this._tableFilterWidget&&this._tableFilterWidget.setVisualState(t)},isMouseOver:function(t){return n.isMouseOver(this.domNode,{event:t})||[this._chartFilterWidget,this._locatorFilterWidget,this._areaDetailsFilterWidget,this._comparisonFilterWidget,this._dynamicInfographicFilterWidget,this._tableFilterWidget].some((function(i){return i&&i.isMouseOver&&i.isMouseOver(t)}))},onAreaDetailsFilterChanged:function(t){},onChartFilterChanged:function(t){},onComparisonFilterChanged:function(t){},onLocatorFilterChanged:function(t){},onDynamicInfographicFilterChanged:function(t){},onTableFilterChanged:function(t){},onClosePopup:function(){}});return F.hasFiltersOn=function(t){return l.hasFiltersOn(t)||s.hasFiltersOn(t)||o.hasFiltersOn(t)||h.hasFiltersOn(t)||c.hasFiltersOn(t)||d.hasFiltersOn(t)},F}));