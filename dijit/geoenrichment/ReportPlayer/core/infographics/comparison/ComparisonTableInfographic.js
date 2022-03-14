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

define(["dojo/_base/declare","dojo/_base/lang","dojo/on","esri/dijit/geoenrichment/when","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","../../charts/utils/ChartTypes","../../charts/utils/ChartJsonUtil","../../sections/supportClasses/SectionContentFitModes","../../supportClasses/ViewModes","../../../dataProvider/supportClasses/data/AreaDataUtil","../../supportClasses/tableJson/TableJsonUtil","../../supportClasses/tableJson/TablePrettyParameters","../utils/InfographicThemeUtil","./jsonBuilder/SectionJsonBuilder","./ComparisonSelectionBuilder","./ChartViewBuilder","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/InvokeUtil","dojo/text!../../templates/ComparisonTableInfographic.html","dojo/i18n!esri/nls/jsapi"],(function(t,e,i,n,o,s,r,a,h,l,d,c,u,g,_,f,m,C,p,I,v,w){var S=t([s,r],{templateString:v,nls:w=w.geoenrichment.dijit.ReportPlayer.ComparisonTableInfographic,viewModel:null,theme:null,parentWidget:null,isEditMode:!1,simplifySelectionForSingleGeography:!0,minRowHeight:20,_titleSection:null,_dataSection:null,_currentInfographicJson:null,_updatePromise:null,_selectedLevelsCache:null,_additionalColumnsCache:null,_sorting:null,_columnWidths:null,_dataInfo:null,_analysisAreas:null,_chartViewInfo:!1,_chartViewBuilder:null,_stdPolygonsController:null,_thisAreasHighlightController:null,postCreate:function(){this.inherited(arguments),this._selectedLevelsCache={},this._additionalColumnsCache={},this._removeChart(),this._showEmptyView(!1)},getRenderPromise:function(){return this._updatePromise},updateInfographic:function(t){if(this.domNode){this._currentInfographicJson=t,this._analysisAreas=this.viewModel.dynamicReportInfo&&this.viewModel.dynamicReportInfo.analysisAreas;var e=this.viewModel.getStaticInfographicDefaultStyles(this.theme);return _.applyThemeSettingsComparisonInfographicJson(this._currentInfographicJson,e),this.viewModel.dynamicReportInfo&&(this._stdPolygonsController=this.viewModel.getStdPolygonsController(this._currentInfographicJson.calculatorName),this.own(this._stdPolygonsController),this._thisAreasHighlightController=this.viewModel.getThisAreasHighlightController(),this.own(this._thisAreasHighlightController)),this._updatePromise=this._updateContent(),this.onShowWaiting(this._updatePromise),this._updatePromise}},_updateContent:function(){return I.invoke(this,"_doUpdateContent",50)},_doUpdateContent:function(){if(this._destroySections(),this.domNode&&this.width)return this._resizeContent(),this._createTitleSection(),this._createDataSection(),n(this._chartViewInfo&&this.tableToChart(this._chartViewInfo),function(){this.onContentUpdated()}.bind(this))},_resizeContent:function(){this._syncJsonDimensions(),o.set(this.domNode,{width:this.width+"px",height:this.height+"px"}),setTimeout(this._syncEmptyViewPlaceholder.bind(this))},_syncJsonDimensions:function(){this._currentInfographicJson&&(this._currentInfographicJson.style.width=this.width,this._currentInfographicJson.style.height=this.height)},_createTitleSection:function(){if(this._currentInfographicJson.titleSectionJson){var t={};t.initialWidth=this.width,t.json=this._currentInfographicJson.titleSectionJson,t.viewModel=this.viewModel,t.theme=this.theme,t.parentWidget=this,t.noContentOffset=!0,t.tableParams={trimTextIfOverflows:!1},t.initialViewMode=this.isEditMode?d.EDIT:d.PREVIEW_VALUES,e.mixin(t,this._prepareTitleSectionCreationParams()),this._titleSection=this.viewModel.layoutBuilder.createElement("section",t,this.titleDiv),this._titleSection.fitContentNicely({fitMode:l.WIDTH})}},_prepareTitleSectionCreationParams:function(){return null},_createDataSection:function(){var t=this;if(this._dataInfo=this._buildDataInfo(),this._showEmptyView(!this._dataInfo),this._dataInfo){var i={};i.initialWidth=this.width,i.initialHeight=this._getDataHeight(),i.json=this._dataInfo.sectionJson,i.viewModel=this.viewModel,i.theme=this.theme,i.parentWidget=this,i.noContentOffset=!0,i.tableParams={trimTextIfOverflows:!1,keepGridWidthWhenResized:!0,hasResizableColumns:!0,fitParentWhenResized:!0,enableAsyncRendering:!this.isEditMode,asyncBatchSize:this._dataInfo.sectionJson.stack[0].columns.length,layoutDefaults:{columnMinWidth:g.MIN_COLUMN_WIDTH},onColumnWidthChanged:function(){t._columnWidths=o&&o.columns.map((function(t){return t.style.width}))}},i.initialViewMode=this.isEditMode?d.EDIT:d.PREVIEW_VALUES,e.mixin(i,this._prepareSectionCreationParams());var n=this.viewModel.layoutBuilder.createElement("section",i,this.dataSectionDiv);this._dataSection=n;var o=n.getTrueTables()[0];o.onSortingChanged=function(e){t._sorting=e},this._sorting&&o.setSorting(this._sorting),this._resizeDataSection(),new m({grid:n.getTrueTables()[0],groups:this._dataInfo.groups,numThisAreas:this._dataInfo.numThisAreas,fields:this._dataInfo.fields,selectedLevelsCache:this._selectedLevelsCache,additionalColumnsCache:this._additionalColumnsCache,variablesInColumns:this._currentInfographicJson.variablesInColumns,isEditMode:this.isEditMode,simplifySelectionForSingleGeography:this.simplifySelectionForSingleGeography,onFeatureSelected:function(e,i){t._selectedLevelsCache[e]=i,t._updateContent()},onAddFeature:function(e,i){var n=t._additionalColumnsCache[e]=t._additionalColumnsCache[e]||[];-1===n.indexOf(i)&&n.push(i),t._updateContent()},onRemoveAdditionalFeature:function(e,i){var n=t._additionalColumnsCache[e]=t._additionalColumnsCache[e]||[],o=n.indexOf(i);-1!==o&&(n.splice(o,1),t._updateContent())}}),this._stdPolygonsController&&this._registerTableForControllers()}else this._stdPolygonsController&&this._stdPolygonsController.setShownFeatureAttributes([])},_prepareSectionCreationParams:function(t){return null},_buildDataInfo:function(){return f.buildSectionJsonAndGroups({infographicJson:this._currentInfographicJson,calculators:this._getCalculatorDataArray(),selectedLevelsCache:this._selectedLevelsCache,additionalColumnsCache:this._additionalColumnsCache,analysisAreas:this._analysisAreas,filterRanges:this._filterRanges,numLevels:this._currentInfographicJson.levels.length,width:this.width,height:this.height,columnWidths:this._columnWidths})},_getCalculatorDataArray:function(){var t=this;return this.viewModel.dynamicReportInfo.fieldData.areaData.map((function(e,i){return function(e){return c.getAreaDataObjectCalculator(t.viewModel.dynamicReportInfo.fieldData.areaData[e],t._currentInfographicJson.calculatorName)}(i)}))},_resizeDataSection:function(){this.dataDiv.style.top=this._getTitleHeight()+"px";var t=this._dataSection.getTrueTables()[0],e=t.rows.length,i=Math.max(this._getDataHeight(),e*this.minRowHeight);t.resizeToFitHeight(i),this._dataSection.fitContentNicely({fitMode:l.WIDTH})},_registerTableForControllers:function(){this._registerTableForStdController(),this._dataInfo.numThisAreas&&this._registerTableForThisAreasController()},_registerTableForStdController:function(){var t=this;this._stdPolygonsController.setAttributeFields(this._dataInfo.fields),this._stdPolygonsController.setShownFeatureAttributes(this._dataInfo.geographiesInTable),this._stdPolygonsController.setAllFeatureAttributes(this._dataInfo.allGeographies);var e,n=this._dataSection.getTrueTables()[0];this._stdPolygonsController.registerInfographic({highlightInfographicForAttributes:function(i){if(n.domNode){var o=t._currentInfographicJson.variablesInColumns?"setCellRowHighlighted":"setCellColumnHighlighted";e&&(e.parentGrid&&e.parentGrid[o](e,!1),e=null);var s=i&&t._getCellForFeatureAttributes(i);s&&s.parentGrid&&(s.parentGrid[o](s,!0),e=s)}}}).then((function(){var e;n.domNode&&(t._currentInfographicJson.variablesInColumns?(n.set("highlightRowsOnHover",!0),n.canHighlightHeader=!1,n.canHighlightFirstColumn=!0):(n.set("highlightColumnsOnHover",!0),n.canHighlightHeader=!0,n.canHighlightFirstColumn=!1),i(n.domNode,"mouseover,mousemove",(function(){var i=n.getOverFieldCell();i&&i!==e&&(e=i,t._stdPolygonsController.highlightGraphicForAttributes(e&&t._getCellAttrs(e)))})),i(n.domNode,"mouseout",(function(){t._stdPolygonsController.highlightGraphicForAttributes(null),e=null})))}))},_registerTableForThisAreasController:function(){var t,e=this,n=this._dataSection.getTrueTables()[0];this._thisAreasHighlightController.registerTable({highlightTableForAreaIndex:function(i){if(n.domNode){var o=e._currentInfographicJson.variablesInColumns?"setCellRowHighlighted":"setCellColumnHighlighted";t&&(t.parentGrid&&t.parentGrid[o](t,!1),t=null);var s="number"==typeof i&&e._getCellForThisAreaAt(i);s&&s.parentGrid&&(s.parentGrid[o](s,!0),t=s)}}}).then((function(){var t;n.domNode&&(e._currentInfographicJson.variablesInColumns?(n.set("highlightRowsOnHover",!0),n.canHighlightHeader=!1,n.canHighlightFirstColumn=!0):(n.set("highlightColumnsOnHover",!0),n.canHighlightHeader=!0,n.canHighlightFirstColumn=!1),i(n.domNode,"mouseover,mousemove",(function(){var i=n.getOverFieldCell();i&&i!==t&&(t=i,e._thisAreasHighlightController.highlightGraphicForAreaIndex(t&&f.getThisAreaIndex(e._getCellAttrs(t))))})),i(n.domNode,"mouseout",(function(){e._thisAreasHighlightController.highlightGraphicForAreaIndex(null),t=null})))}))},_getCellAttrs:function(t){return t?this._currentInfographicJson.variablesInColumns?f.getAttributesForColumn(t.row):f.getAttributesForGridData(t.column):null},_getCellForFeatureAttributes:function(t){var e;return t&&this._dataSection.getTrueTables()[0].getCells().some((function(i){var n=this._getCellAttrs(i);if(n&&n.StdGeographyLevel===t.StdGeographyLevel&&n.StdGeographyID==t.StdGeographyID)return e=i,!0}),this),e},_getCellForThisAreaAt:function(t){var e;return this._dataSection.getTrueTables()[0].getCells().some((function(i){var n=this._getCellAttrs(i);if(n&&f.getThisAreaIndex(n)===t)return e=i,!0}),this),e},_getTitleHeight:function(){return this._currentInfographicJson.titleSectionJson?u.getTableHeight(this._currentInfographicJson.titleSectionJson.stack[0])+g.TITLE_GAP:0},_getDataHeight:function(){return this.height-this._getTitleHeight()},notifyShown:function(){this._dataSection&&this._dataSection.notifyShown()},getVisualState:function(){return e.clone({type:this._currentInfographicJson.type,filterRanges:this._filterRanges,selectedLevelsCache:this._selectedLevelsCache,additionalColumnsCache:this._additionalColumnsCache,sorting:this._sorting,columnWidths:this._columnWidths,chartViewInfo:this._chartViewInfo})},setVisualState:function(t){if(t)return this._selectedLevelsCache=t.selectedLevelsCache||{},this._additionalColumnsCache=t.additionalColumnsCache||{},this._sorting=t.sorting,this._columnWidths=t.columnWidths,this._filterRanges=t.filterRanges,this._chartViewInfo=t.chartViewInfo,this._updateContent()},getChartViewOptions:function(){return{chartType:this._chartViewInfo&&this._chartViewInfo.chartType,chartTypes:[a.COLUMN,a.BAR,a.LINE,a.VERTICAL_LINE],takeSeriesFromRows:this._currentInfographicJson.variablesInColumns,supportsAltOrientation:!0}},tableToChart:function(t){return this._removeChart(),this._chartViewInfo=t,p.show(this.chartDiv),p.hide(this.dataSectionDiv),this._chartViewBuilder=new C({viewModel:this.viewModel,theme:this.theme,parentWidget:this,chartNode:this.chartDiv,width:this.width,height:this._getDataHeight(),chartSeriesItems:this._chartViewInfo.altOrientation?h.transposeSeriesItems(this._dataInfo.chartSeriesItems):this._dataInfo.chartSeriesItems}),this._chartViewBuilder.renderChart(this._chartViewInfo)},chartToTable:function(){this._removeChart()},_removeChart:function(){this._chartViewInfo=null,this._chartViewBuilder&&this._chartViewBuilder.destroy(),this._chartViewBuilder=null,p.hide(this.chartDiv),p.show(this.dataSectionDiv)},width:0,height:0,resize:function(t,e){return void 0!==t&&(this.width=t,this.height=e),this._updateContent()},_showEmptyView:function(t){p[t?"hide":"show"]([this.titleDiv,this.dataDiv]),p[t?"show":"hide"](this.noDataPlaceHolder),t&&this._syncEmptyViewPlaceholder()},_syncEmptyViewPlaceholder:function(){this.noDataPlaceHolder&&o.set(this.noDataPlaceHolder,"paddingTop",(this.height-o.get(this.noDataPlaceHolder,"height"))/2+"px")},_filterRanges:null,getFilterRanges:function(){return n(this._updatePromise,function(){return this._dataInfo.ranges}.bind(this))},setFilterRanges:function(t){return this._filterRanges=t,this._updateContent()},getNumAreasTotal:function(){return this._dataInfo&&this._dataInfo.numAreasTotal||0},getNumAreasShown:function(){return this._dataInfo&&this._dataInfo.numAreasShown||0},toJson:function(){return e.clone(this._currentInfographicJson)},onContentUpdated:function(){},onShowWaiting:function(t){},_destroySections:function(){this._chartViewBuilder&&this._chartViewBuilder.destroy(),this._chartViewBuilder=null,this._dataSection&&this._dataSection.destroy(),this._dataSection=null,this._titleSection&&this._titleSection.destroy(),this._titleSection=null},destroy:function(){this._destroySections(),this.inherited(arguments)}});return S.MIN_ROW_HEIGHT=20,S}));