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

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/when","dojo/string","dojo/dom-construct","../paginatableTable/PaginatableTableInfographic","../paginatableTable/SectionJsonsBuilder","../../supportClasses/ViewModes","../../sections/sectionUtils/SectionJsonUtil","../utils/InfographicJsonUtil","./ExportToExcelUtil","./SummaryFooterSectionJsonBuilder","./SummaryCalculator","../../dataDrilling/DataDrillingVisualizer","esri/dijit/geoenrichment/utils/ColorUtil","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/FieldUtil","esri/dijit/geoenrichment/utils/RegExpUtil","dojo/i18n!esri/nls/jsapi"],(function(t,e,i,o,r,s,n,a,l,h,u,c,m,d,g,_,f,y,p){p=p.geoenrichment.dijit.ReportPlayer.LocatorTableInfographic;var S=t(s,{noDataText:p.noLocatorData,hideElementsIfEmpty:!1,_locatorPointsController:null,_areaName:null,_areaShortName:null,_stats:null,_unitedSectionJson:null,_summarySection:null,_summaryFooterSection:null,updateInfographic:function(t){if(this.domNode)return this.canShowEmptyView=!t.showAsSummary,t.locatorCalculatorInfo&&this.viewModel.dynamicReportInfo&&(this.viewModel.dynamicReportInfo.isMultiFeature?(this._areaName=this.viewModel.dynamicReportInfo.combinedAreasInfo.name,this._areaShortName=this.viewModel.dynamicReportInfo.combinedAreasInfo.shortName):(this._areaName=this.viewModel.dynamicReportInfo.analysisAreas[this.currentFeatureIndex].name,this._areaShortName=this.viewModel.dynamicReportInfo.analysisAreas[this.currentFeatureIndex].shortName),this._locatorPointsController=this.viewModel.getLocatorPointsController(t.locatorCalculatorInfo,this.currentFeatureIndex),this.own(this._locatorPointsController)),this._summaryFields=t.summaryFooterFields,this.inherited(arguments)},_doUpdateContent:function(){this.domNode&&this.width&&(this.inherited(arguments),this._registerLocatorPointsController())},_buildSectionJsonsAndStat:function(){var t=this,e=n.buildSectionJsonsAndStat({headerSectionJson:this._currentInfographicJson.headerSectionJson,dataSectionJson:this._currentInfographicJson.dataSectionJson,calculatorDataArray:this._getCalculatorDataArray(),filterRanges:this._filterRanges,searchTextRe:this._searchTextRe,sorting:this._sorting,minRowHeight:this.minRowHeight,scaleToFitHeight:this._currentInfographicJson.scaleToFitHeight,height:this.height,width:this.width,hasTitle:!!this._currentInfographicJson.titleSectionJson,titleHeight:this._getTitleHeight(),hasFooter:this._currentInfographicJson.showNumberOfLocations,footerHeight:s.BOTTOM_AREA_HEIGHT+this._getSummaryFooterHeight(),setAttributeVisibleAt:function(e,i){t._isDataDrillingView()||t._locatorPointsController&&t._locatorPointsController.setPointVisibleAt(e,i)},allowNoResults:!this.hideElementsIfEmpty});return this._stats=e&&e.stats,this._unitedSectionJson=e&&e.unitedSectionJson,e},_buildStatsOfOtherFeaturesForComparison:function(t){var e=this.viewModel.getLocatorPointsController(this._currentInfographicJson.locatorCalculatorInfo,t);return n.buildStats({dataSectionJson:this._currentInfographicJson.dataSectionJson,calculatorDataArray:e.getCalculatorDataArray(),filterRanges:this._filterRanges,allowNoResults:!this.hideElementsIfEmpty})},_resizeSection:function(t){this.isEditMode&&this.inherited(arguments);var e=t.getTrueTables()[0];this._isDataDrillingView()||this._locatorPointsController&&this._locatorPointsController.registerLocatorTable(e)},_getCalculatorDataArray:function(){return this._locatorPointsController.getCalculatorDataArray()},_renderParts:function(t){var e=this._currentInfographicJson.showAsSummary;_[e?"hide":"show"]([this.paginationDiv,this.summaryFooterDiv,this.pageNavigatorDiv,this.footnoteDiv]),_[e?"show":"hide"]([this.summaryDiv]),this.footnoteDiv.innerHTML="",e?(this._renderTitleSection(),this._renderSummarySection()):(this.inherited(arguments),this._renderSummaryFooterSection())},_renderFootNote:function(){var t=this.getNumPointsShown();this.footnoteDiv.innerHTML=this._currentInfographicJson.showNumberOfLocations&&t?1===t?p.oneClosestLocations:o.substitute(p.numClosestLocations,{numPoints:t}):"",this.footnoteDiv.style.color=this.viewModel.getDocumentDefaultStyles(this.theme).color},_getFooterHeight:function(){return(!this._isSinglePage||this._currentInfographicJson.showNumberOfLocations?s.BOTTOM_AREA_HEIGHT:0)+this._getSummaryFooterHeight()},_getSummaryFooterHeight:function(){return this._summaryFields?2*this.minRowHeight:0},_renderSummaryFooterSection:function(){var t=this;if(this._summaryFields){_.show(this.summaryFooterDiv);var i={};i.initialWidth=this._getPageWidth(),i.initialHeight=this._getSummaryFooterHeight()/2,i.json=this._currentInfographicJson.summaryFooterSectionJson||c.buildSummaryFooterSectionJson(this._currentInfographicJson),i.viewModel=this.viewModel,i.theme=this.theme,i.parentWidget=this,i.noContentOffset=!0,i.tableParams={trimTextIfOverflows:!1,hasResizableColumns:!1,disableResizableColumnsAutoDetection:!0},i.initialViewMode=this.isEditMode?a.EDIT:a.PREVIEW_VALUES,i.getPreviewValueFunction=function(){var e={};return t._summaryFields.forEach((function(i){t._stats.ranges.some((function(t){if(t.fieldName===i)return e[i]={value:t&&t.sumShown||0},!0}))})),{formattedValue:"",fields:e}},this._columnWidths&&this._columnWidths.forEach((function(t,e){i.json.stack[0].columns[e].style.width=t})),e.mixin(i,this._prepareSummaryFooterSectionCreationParams()),this.summaryFooterDiv||(this.summaryFooterDiv=r.create("div",{class:"esriGEAbsoluteStretched locatorTableInfographic_summaryFooterDiv"},this.dataDiv),this.summaryFooterDiv.style.borderTop="1px solid "+g.getCSSColorWithAlpha(this.viewModel.getDocumentDefaultStyles(this.theme).color,.5),this.summaryFooterLabelDiv=r.create("div",{class:"esriGEAbsoluteStretched",innerHTML:p.summaryInTable},this.summaryFooterDiv),this.summaryFooterLabelDiv.style.color=this.viewModel.getDocumentDefaultStyles(this.theme).color,this.summaryFooterSectionDiv=r.create("div",{class:"esriGEAbsoluteStretched"},this.summaryFooterDiv)),this.summaryFooterDiv.style.top="auto",this.summaryFooterDiv.style.bottom=this._getFooterHeight()-this._getSummaryFooterHeight()+"px",this.summaryFooterDiv.style.height=this._getSummaryFooterHeight()+"px",this.summaryFooterLabelDiv.style.bottom="auto",this.summaryFooterLabelDiv.style.height=this.summaryFooterLabelDiv.style.lineHeight=this._getSummaryFooterHeight()/2+"px",this.summaryFooterSectionDiv.style.top="auto",this.summaryFooterSectionDiv.style.height=this._getSummaryFooterHeight()/2+"px";var o=this.viewModel.layoutBuilder.createElement("section",i,this.summaryFooterSectionDiv);o.fitContentNicely(),this._summaryFooterSection=o}else _.hide(this.summaryFooterDiv)},_prepareSummaryFooterSectionCreationParams:function(){return null},_onColumnWidthsChanged:function(){this._columnWidths&&this._summaryFooterSection&&(table=this._summaryFooterSection.getTrueTables()[0],this._columnWidths.forEach((function(t,e){table.columns[e].style.width=t})),table.refresh())},_renderSummarySection:function(){var t=this;if(this._currentInfographicJson.summarySectionJson){var i={};i.initialWidth=this._getPageWidth(),i.initialHeight=this.height-this._getTitleHeight(),i.json=this._provideDataDrillingForSummarySectionJson(),i.viewModel=this.viewModel,i.theme=this.theme,i.parentWidget=this,i.currentFeatureIndex=this.currentFeatureIndex,i.noContentOffset=!0,i.tableParams={trimTextIfOverflows:!1},i.initialViewMode=this.isEditMode?a.EDIT:a.PREVIEW_VALUES,i.getPreviewValueFunction=function(e){var i=e&&"number"==typeof e.currentFeatureIndex&&e.currentFeatureIndex!==t.currentFeatureIndex,o=i?t._buildStatsOfOtherFeaturesForComparison(e.currentFeatureIndex):t._stats,r=i?o.numAttributesTotal:o.numAttributesShown;return{value:m.calculateSummaryValue({count:r,stats:o,json:t._currentInfographicJson,areaIndex:i?e.currentFeatureIndex:t.currentFeatureIndex||0,viewModel:t.viewModel})}},e.mixin(i,this._prepareSummarySectionCreationParams()),this.summaryDiv=this.summaryDiv||r.create("div",{class:"esriGEAbsoluteStretched"},this.dataDiv),this.summaryDiv.style.top=this._getTitleHeight()+"px";var o=this.viewModel.layoutBuilder.createElement("section",i,this.summaryDiv);o.fitContentNicely(),this._summarySection=o}},_prepareSummarySectionCreationParams:function(){return null},_provideDataDrillingForSummarySectionJson:function(){var t=l.getSectionJsonInfographic(this._currentInfographicJson.summarySectionJson);delete t.dataDrilling;var i=e.clone(this._currentInfographicJson);i.showAsSummary=!1;var o=d.DATA_DRILLING_BOX_ZOOM,r=l.createSectionJsonFromInfographicJson(i,o.w,o.h);return h.setDataDrilling(t,t.variableTables[0].variable.fieldInfo.templateName,{sectionJson:r}),this._currentInfographicJson.summarySectionJson},_registerLocatorPointsController:function(){this._locatorPointsController&&this._locatorPointsController.setLocatorTableCallbacks({getCellForPointAtFunc:this._getCellForPointAt.bind(this),getPointIndexForCellFunc:this._getPointIndexForCellFunc.bind(this)})},_getPointIndexForCellFunc:function(t){return t&&n.getAttributeIndexForGridData(t.row)},_getCellForPointAt:function(t){if(!this._currentInfographicJson.showAsSummary){var e,i,o=-1;if(this._sectionJsons.some((function(i,r){return i.stack[0].rows.some((function(s){if(n.getAttributeIndexForGridData(s)===t)return o=r,e=i,!0}))})),-1!==o)return this.pagination.set("currentPage",o,!0),this._getSectionByJson(e).getTrueTables()[0].getCells().some((function(e){if(n.getAttributeIndexForGridData(e.row)===t)return i=e,!0})),i}},_filterRanges:null,_searchText:null,_searchTextRe:null,getFilterRanges:function(){return i(this._updatePromise,function(){return this._stats&&this._stats.ranges}.bind(this))},setFilterRanges:function(t){return this._filterRanges=t,this._updateContent()},setSearchText:function(t){return this._searchText=t,this._searchTextRe=t&&y.createRegExp(t,"i",!0),this._updateContent()},_summaryFields:null,getSummaryInfos:function(){var t=this;return i(this._updatePromise,(function(){var e=!t._currentInfographicJson.showAsSummary&&t._stats&&t._stats.ranges;if(!e)return null;var i=[];return e.forEach((function(e){f.isDistanceField(e.fieldName)||i.push({fieldName:e.fieldName,label:e.alias,visible:t._summaryFields&&-1!==t._summaryFields.indexOf(e.fieldName)})})),i}))},setVisibleSummaryFields:function(t){return this._summaryFields=t&&t.length?t:null,this._updateContent()},getNumPointsTotal:function(){return this._stats&&this._stats.numAttributesTotal||0},getNumPointsShown:function(){return this._stats&&this._stats.numAttributesShown||0},getVisualState:function(){return{type:this._currentInfographicJson.type,filterRanges:this._filterRanges,summaryFields:this._summaryFields,searchText:this._searchText,sorting:this._sorting,columnWidths:this._columnWidths}},setVisualState:function(t){if(t)return t.filterRanges&&this.setFilterRanges(t.filterRanges),t.summaryFields&&this.setVisibleSummaryFields(t.summaryFields),t.searchText&&this.setSearchText(t.searchText),t.sorting&&this._setSorting(t.sorting),t.columnWidths&&(this._columnWidths=t.columnWidths,this._updateContent()),this._updatePromise},canExportToExcel:function(){return!this._isDataDrillingView()&&this.viewModel.canExportToExcel()},exportToExcel:function(){var t=this;return i(this._updatePromise,(function(){return i(t.viewModel.prepareExportToExcelParameters({layerID:t._locatorPointsController.getLayerID(),hasMaps:t._locatorPointsController.getMapInfos()&&t._locatorPointsController.getMapInfos().length}),(function(e){return t.onShowWaiting(i(t.prepareExportToExcelParameters(e),(function(e){return t.viewModel.exportToExcel(e)})))}))}))},prepareExportToExcelParameters:function(t){return t=t||{},u.prepareExportParameters({areaName:this._areaName,areaShortName:this._areaShortName,layerName:this._locatorPointsController.getLayerName(),layerID:this._locatorPointsController.getLayerID(),sectionJson:this._unitedSectionJson,mapInfos:this._locatorPointsController.getMapInfos(),exportMaps:t.exportMaps})},toJson:function(){var t=e.clone(this._currentInfographicJson);t.summarySectionJson&&delete l.getSectionJsonInfographic(t.summarySectionJson).dataDrilling;return t},_isDataDrillingView:function(){return this.parentWidget.parentWidget.parentWidget.parentWidget.isDataDrillingView},_destroySections:function(){this.inherited(arguments),this._stats=null,this._summaryFooterSection&&this._summaryFooterSection.destroy(),this._summaryFooterSection=null,this._summarySection&&this._summarySection.destroy(),this._summarySection=null}});return S.MIN_ROW_HEIGHT=s.MIN_ROW_HEIGHT,S}));