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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/promise/all","esri/dijit/geoenrichment/when","dojo/dom-class","dojo/dom-construct","dijit/_WidgetBase","dijit/_TemplatedMixin","./_GridChartViewSupport","./_GridHighlightSupport","./_GridFilterSupport","./_GridSortSupport","./_ResizableColumnsSupport","./_DataDrillingSupport","esri/dijit/geoenrichment/ReportPlayer/config","./valueField/ValueField","./valueField/_ResizableField","./coreUtils/GridBackgroundForegroundUtil","./coreUtils/GridFloatingTablesUtil","./coreUtils/GridBorderUtil","./coreUtils/GridDataUtil","./coreUtils/GridQueryUtil","./coreUtils/GridLayoutCalculator","./coreUtils/GridCellRenderer","./coreUtils/GridStyleUtil","./coreUtils/GridLayoutSizer","./coreUtils/_GridDebugUtil","../sections/SectionTypes","esri/dijit/geoenrichment/utils/ArrayUtil","esri/dijit/geoenrichment/utils/DeviceUtil","esri/dijit/geoenrichment/utils/async/AsyncQueue","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/tableJson/TableJsonUtil","dojo/text!../templates/AdjustableGrid.html"],(function(e,t,i,n,o,s,l,r,a,u,d,h,c,g,f,_,C,b,m,S,p,F,y,w,T,R,v,M,x,k,V,A,D,P){var N={defaultRowHeight:15.33,rowMinHeight:3,columnMinWidth:3,defaultChartRowHeight:150},W={rowMinHeight:3,columnMinWidth:3},G=e([_,C]);return e([l,r,a,u,d,h,c,g],{isGrid:!0,templateString:P,viewModel:null,theme:null,columns:null,rows:null,backgroundSectionJson:null,foregroundSectionJson:null,enableBackgroundForeground:!1,forceCreateFloatingTables:!1,backgroundFloatingTablesSectionJson:null,foregroundFloatingTablesSectionJson:null,isFloatingTable:!1,isBackgroundFloatingTable:!1,layoutDefaults:null,stickToRight:!1,looseResize:!1,keepGridWidthWhenResized:!1,keepGridHeightWhenResized:!1,hasResizableColumns:!1,disableResizableColumnsAutoDetection:!1,fitParentWhenResized:!1,parentWidget:null,parentElementInPageInfo:null,viewPortContainer:null,parentGrid:null,reportContainerPageNode:null,isReportContainerPageGrid:!1,getPreviewValueFunction:null,currentFeatureIndex:null,currentFeatureAttributes:null,fixedViewMode:null,fixedSpecificViewMode:null,enableAsyncRendering:!1,asyncBatchSize:1,enableNumberAnimation:!1,applyThemeStyle:!0,inheritThemeBackground:!0,previewModeBorderLineStyle:null,editModeBorderLineStyle:null,renderBordersFromTheme:!1,noThemeBorderLineStyle:null,hasRealBorders:!1,trimTextIfOverflows:!1,autoDetectUrl:!1,shouldStayWithinParent:!0,infographicBenchmarkController:null,elementUsageType:null,backgroundSection:null,foregroundSection:null,backgroundFloatingTablesSection:null,foregroundFloatingTablesSection:null,_cellRenderer:null,_fieldCells:null,_dynamicBindings:null,_isBeingResizedFlag:!1,_renderCellsQueue:null,_renderCellsContentQueue:null,postCreate:function(){this.inherited(arguments),this.layoutDefaults=t.mixin({},N,this.layoutDefaults),f.isPlayerOnServer&&(this.enableAsyncRendering=!1,this.hasResizableColumns=!1,this.disableResizableColumnsAutoDetection=!0)},refresh:function(e){if(this.domNode)return!this.isReportContainerPageGrid&&!this.hasResizableColumns&&this.viewModel.dynamicReportInfo&&this.columns.length>1&&this.rows.length>2&&!this.disableResizableColumnsAutoDetection&&(this.keepGridWidthWhenResized=!0,this.hasResizableColumns=!0,this.fitParentWhenResized=!0,this.layoutDefaults.columnMinWidth=30),k.isMobileDevice()&&(this.hasResizableColumns=!1),o[this.hasResizableColumns?"add":"remove"](this.domNode,"hasResizableColumns"),y.markAsDirty(this),this._doRefresh(e),this.getRenderPromise()},_doRefresh:function(e){this.mainNode&&this.rows&&(this._destroyTableContent(),this.mainNode.innerHTML="",v.refreshStart(this),this._recoverOriginalData(),this._applyFilterToStoreData(),this._applySortingToStoreData(),this.isEmptyTable()?!this.viewModel.isGraphicStyle()&&s.create("div",{class:"adjustableGrid_emptyRow"},this.mainNode):(o.remove(this.domNode,"esriGEAdjustableGridSingleCell esriGEAdjustableGridMultiCell"),o.add(this.domNode,this.isSingleCelledTable()?"esriGEAdjustableGridSingleCell "+(D.getTableSubtype(this)||""):"esriGEAdjustableGridMultiCell"),y.recalcRows(this),void 0===(e=e||{}).stickToRight&&(e.stickToRight=this.stickToRight),y.recalcColumns(this,e),y.autoSnapLayout(this),this._createCellsFromStoreData(),this._renderCells(),y.positionCells(this)),this.refreshBackground(),this._renderBackgroundFloatingTables(),this._renderForegroundFloatingTables(),this.refreshForeground(),this._buildSortControls(),v.refreshEnd(this))},_originalData:null,_getOriginalData:function(){return this._originalData||this.rows},_getSavedOriginalData:function(){return this._originalData},_saveOriginalData:function(){this._originalData||(this.rows=t.clone(this.rows),this._originalData=t.clone(this.rows))},_recoverOriginalData:function(){this._originalData&&(this.rows=t.clone(this._originalData))},_createCellsFromStoreData:function(){var e=this;this.enableAsyncRendering&&(this._renderCellsQueue=new V({onFinished:function(){e.onRendered()}})),this.rows.forEach((function(t){e.columns.forEach((function(i,n){if(!(t.excludedIndexHorizontal&&t.excludedIndexHorizontal[n]||t.excludedIndexVertical&&t.excludedIndexVertical[n])){var o=i.index+(p.getDataColumnSpan(t,i.field)||1)===e.columns.length,s=t.index+(p.getDataRowSpan(t,i.field)||1)===e.rows.length;e._createField(t,i,o,s)}}))}))},_getCellClass:function(e){return this.hasResizableColumns&&0===e.row.index?G:_},_createField:function(e,t,i,n){var o="adjustableGridField field-"+t.field+(i?" lastInRow":"")+(n?" lastRow":""),s={viewModel:this.viewModel,fieldStyle:T.combineCellStyle(this,e,t),defaultBorderStyle:this._getDefaultBorderStyle(e,t,i,n),class:o,trimTextIfOverflows:this.trimTextIfOverflows,autoDetectUrl:this.autoDetectUrl,rowId:e.id,columnId:t.id,parentGrid:this,parentWidget:this,uniqueId:e.id+t.id,row:e,column:t,isLastInRow:i,isLastInColumn:n};this.hasResizableColumns&&(s.allowVerticalResizing=!1,s.showColumnRowSizeTooltip=!0);var l=this._doCreateFieldFromParams(s,e,t);return this.hasResizableColumns&&this._populateFieldForResizableColumns(l,e,t),l.domNode.style.position="absolute",this._fieldCells.push(l),l},_getDefaultBorderStyle:function(e,t,i,n){return S.getBorderStyle(this,e,t,i,n)},getRenderPromise:function(){var e=[];return e.push(this._renderCellsQueue&&this._renderCellsQueue.getPromise()),e.push(this._renderCellsContentQueue&&this._renderCellsContentQueue.getPromise()),this.getCells().forEach((function(t){t.content&&t.content.getRenderPromise&&e.push(t.content.getRenderPromise())})),["backgroundSection","backgroundFloatingTablesSection","foregroundFloatingTablesSection","foregroundSection"].forEach((function(t){this[t]&&e.push(this[t].getRenderPromise())}),this),i(e)},isBeingRendered:function(){return this._renderCellsQueue&&!this._renderCellsQueue.isFinished()||this._renderCellsContentQueue&&!this._renderCellsContentQueue.isFinished()},_doCreateFieldFromParams:function(e,t,i){return new(this._getCellClass(e))(e).placeAt(this.mainNode)},_renderCells:function(){var e=this;if(this._renderCellsQueue){var t=function(t){e._renderFieldContent(t),e._postCreateFieldCell(t),e._updateCellViewMode(t)};x.splitArrayToBunches(this._fieldCells,this.asyncBatchSize).forEach((function(i){e._renderCellsQueue.add((function(){i.forEach(t)}),{delayAfter:0})}))}else this._getCellRenderer().renderCells(this._fieldCells,{cellPreRenderer:function(t){e._preRenderFieldCell(t)},addToQueue:function(t){e._renderCellsContentQueue=e._renderCellsContentQueue||new V,e._renderCellsContentQueue.add(t)},cellPostRenderer:function(t){e._configureRenderedCellContentSpecificStyles(t),e._postRenderFieldCell(t),e._postCreateFieldCell(t),e._updateCellViewMode(t),f.isPlayerOnServer||e._trySetupDataDrilling(t)}}),this.onRendered()},_renderFieldContent:function(e){this._preRenderFieldCell(e);var t=this._getCellRenderer().renderCellContent(e);t&&t.then&&(this._renderCellsContentQueue=this._renderCellsContentQueue||new V,this._renderCellsContentQueue.add(t)),this._configureRenderedCellContentSpecificStyles(e),this._postRenderFieldCell(e),f.isPlayerOnServer||this._trySetupDataDrilling(e)},_preRenderFieldCell:function(e){},_postRenderFieldCell:function(e){},_getCellRenderer:function(){return this._cellRenderer||(this._cellRenderer=new w),this._cellRenderer},_configureRenderedCellContentSpecificStyles:function(e){o[p.isNumericVariableFieldCell(e)?"add":"remove"](e.domNode,"hasNumericVariableFieldInfo"),o[p.isStringVariableFieldCell(e)?"add":"remove"](e.domNode,"hasStringVariableFieldInfo"),this._configureRenderedCellContentSpecificStyles_conditional(e)},_configureRenderedCellContentSpecificStyles_conditional:function(e){},_postCreateFieldCell:function(e){},refreshBackground:function(){this.enableBackgroundForeground&&(this.backgroundSection&&this.backgroundSection.destroy(),this.backgroundSection=b.renderBackground(this,this.backgroundSectionJson,this._getBackgroundSectionCreationParams()))},_getBackgroundSectionCreationParams:function(){return null},refreshForeground:function(){this.enableBackgroundForeground&&(this.foregroundSection&&this.foregroundSection.destroy(),this.foregroundSection=b.renderForeground(this,this.foregroundSectionJson,this._getForegroundSectionCreationParams()))},_getForegroundSectionCreationParams:function(){return null},_renderBackgroundFloatingTables:function(){this.backgroundFloatingTablesSection&&this.backgroundFloatingTablesSection.destroy(),this.forceCreateFloatingTables&&(this.backgroundFloatingTablesSectionJson=this.backgroundFloatingTablesSectionJson||{type:M.TABLE_BACKGROUND_FLOATING_PANELS,stack:[]}),this.backgroundFloatingTablesSection=m.renderFloatingTables(this,this.backgroundFloatingTablesSectionJson,this._getFloatingTablesSectionParams(!0),!0),this._postProcessFloatingTablesSection(this.backgroundFloatingTablesSection,!0)},_renderForegroundFloatingTables:function(){this.foregroundFloatingTablesSection&&this.foregroundFloatingTablesSection.destroy(),this.forceCreateFloatingTables&&(this.foregroundFloatingTablesSectionJson=this.foregroundFloatingTablesSectionJson||{type:M.TABLE_FOREGROUND_FLOATING_PANELS,stack:[]}),this.foregroundFloatingTablesSection=m.renderFloatingTables(this,this.foregroundFloatingTablesSectionJson,this._getFloatingTablesSectionParams(!1),!1),this._postProcessFloatingTablesSection(this.foregroundFloatingTablesSection,!1)},_getFloatingTablesSectionParams:function(e){var i=this,n={tableClass:function(e){var t=D.getTableSubtype(e);return t?"outerFloatingAdjustableGrid floatingTableSimpleElement "+t:"outerFloatingAdjustableGrid floatingTableComplexElement"},tableParams:{isFloatingTable:!0,isBackgroundFloatingTable:e,parentGrid:this,inheritThemeBackground:this.inheritThemeBackground,applyThemeStyle:this.applyThemeStyle,layoutDefaults:t.mixin({},this.layoutDefaults,W),_preRenderFieldCell:function(e){i._preRenderFieldCell(e)},_postCreateFieldCell:function(e){i._postCreateFieldCell(e)}}};return this._addFloatingTablesSectionCreationParams(n,e),n},_addFloatingTablesSectionCreationParams:function(e,t){return e},_postProcessFloatingTablesSection:function(e,t){},getVisualState:function(){var e={type:"table",cells:this.getCells().map((function(e){return{content:e.content&&e.content.getVisualState&&e.content.getVisualState(),text:e.get("value")}}))},i=this.getSorting(this);i&&(e.sorting=i);var n=this._filterRanges?t.clone(this._filterRanges):null;return n&&(e.filterRanges=n),this.presetFilter&&(e.hasPresetFilter=!0),this.backgroundSection&&(e.backgroundSection=this.backgroundSection.getVisualState()),this.backgroundFloatingTablesSection&&(e.backgroundFloatingTablesSection=this.backgroundFloatingTablesSection.getVisualState()),this.foregroundFloatingTablesSection&&(e.foregroundFloatingTablesSection=this.foregroundFloatingTablesSection.getVisualState()),this.foregroundSection&&(e.foregroundSection=this.foregroundSection.getVisualState()),this._chartViewInfo&&(e.isChartView=!0,e.chartViewInfo=t.clone(this._chartViewInfo)),e},setVisualState:function(e){var t=this;if(e)return n(this.getRenderPromise(),(function(){var o=[];return e.cells&&t.getCells().forEach((function(t,i){var n=e.cells[i];n&&(t.content&&t.content.setVisualState?o.push(t.content.setVisualState(n.content)):t.set("value",n.text))})),["backgroundSection","backgroundFloatingTablesSection","foregroundFloatingTablesSection","foregroundSection"].forEach((function(i){e[i]&&t[i]&&o.push(t[i].setVisualState(e[i]))})),i(o).then((function(){return n(e.filterRanges&&t.setFilterRanges(e.filterRanges),(function(){return n(e.sorting&&t.setSorting(e.sorting),(function(){return e.isChartView&&t.tableToChart(e.chartViewInfo)}))}))}))}))},_setCellWidth:function(e,t){y.adjustColumnWidth(this,e.row,e.column,t),y.positionCells(this)},_setCellHeight:function(e,t){y.adjustRowHeight(this,e.row,e.column.field,t),y.positionCells(this)},setCellWidth:function(e,t){this._setCellWidth(e,t)},setCellHeight:function(e,t){this._setCellHeight(e,t)},_maxWidth:500,_width:500,_height:0,_spaceAfter:0,_maxHeight:0,_left:0,_top:0,_alternatingStyle:null,_opacity:1,_fixedCellsOpacity:1,getMaxHeight:function(e){return this._maxHeight},setMaxHeight:function(e){this._maxHeight=e},getHeight:function(e,t){return this._height+(!1!==t?this._top:0)+(e&&this._spaceAfter||0)},getMaxWidth:function(){return this._maxWidth},setMaxWidth:function(e,t){var i=0;if(t&&t.preserveRightOffset){y.recalcGridWidth(this);var n=this.getAllowedWidth();i=(n-this._width)/n}this._maxWidth=e,t&&t.resizeToFitAllowedWidth&&this.resizeToFitAllowedWidth({rightOffsetWeight:t.preserveRightOffset?i:0})},getLeft:function(){return this._left},getTop:function(){return this._top},setSpaceAfter:function(e){this._spaceAfter=e},getAllowedWidth:function(){return this._maxWidth-this._left},getAllowedWidthFromParent:function(){return this.shouldStayWithinParent?this.domNode.parentNode.clientWidth-this._left:1e6},getTableBox:function(){var e=this.getSettings().style;return{l:e.left,t:e.top,w:e.width,h:this.getHeight(!1,!1)}},resizeToFitAllowedWidth:function(e){this.isEmptyTable()||R.resizeToFitAllowedWidth(this,e)},resizeToFitWidth:function(e){this.isEmptyTable()||R.resizeToFitWidth(this,e)},resizeToFitHeight:function(e,t){if(!this.isEmptyTable()){if(!1!==t)e-=this._top;R.resizeToFitHeight(this,e)}},scaleProportionallyWithinParent:function(e){R.scaleProportionallyWithinParent(this,e)},collapseContent:function(){this.getCells({floatingCells:!0}).forEach((function(e){e.content&&e.content.collapseContent&&e.content.collapseContent()}))},hasHiddenContent:function(){return this._checkNeedResizeRowHeightToShowCellsContent(!1)},resizeRowHeightToShowCellsContent:function(){return this._checkNeedResizeRowHeightToShowCellsContent(!0),this.getRenderPromise()},_checkNeedResizeRowHeightToShowCellsContent:function(e){return!1},_tableAttributes:null,_scaleToFitWidth:void 0,_scaleToFitHeight:void 0,setSettings:function(e){var t,i=this._left,n=this.isMultiFeatureTable();if(this.columns.forEach((function(e){e.style&&"number"==typeof e.style.width&&(e._wasBeforeRecalc=!0)})),e.style){void 0!==e.style.left&&this.setPosition(e.style.left),void 0!==e.style.top&&this.setPosition(void 0,e.style.top),void 0!==e.style.spaceAfter&&(this._spaceAfter=e.style.spaceAfter),e.style.width&&(this._width=e.style.width),e.style.alternatingStyle&&(this._alternatingStyle=e.style.alternatingStyle),this.setOpacity(e.style);var o=this._width;this._width=Math.min(this._width,this.getAllowedWidth()),this._width===o&&i===this._left||(t=!0)}var s=!1;e.attributes&&(this._adjustColumnsForSettings(e)&&(s=!0,t=!0),this._tableAttributes=e.attributes,this._tableAttributes.rowCount&&this._tableAttributes.rowCount!==this.rows.length&&this._adjustRowsForSettings(e),delete this._tableAttributes.rowCount,delete this._tableAttributes.columnCount),void 0!==e.scaleToFitWidth&&(this._scaleToFitWidth=e.scaleToFitWidth),void 0!==e.scaleToFitHeight&&(this._scaleToFitHeight=e.scaleToFitHeight),this._tableAttributes=this._tableAttributes||{};var l=[];if(this.columns.forEach((function(e){e._wasBeforeRecalc&&l.push(e),delete e._wasBeforeRecalc})),!n&&this.isMultiFeatureTable()&&s)for(var r=this.columns.length-1;r>=this.getNumFixedColumns();r--){var a=this.columns[r],u=l.indexOf(a);-1!==u&&l.splice(u,1)}(e.viewMode||e.specificViewMode)&&this._tryApplyNewViewMode(e.viewMode,e.specificViewMode),void 0!==e.noChartView&&(this.noChartView=e.noChartView),void 0!==e.maxWidth&&this.setMaxWidth(e.maxWidth),void 0!==e.maxHeight&&this.setMaxHeight(e.maxHeight),this.viewModel.dynamicReportInfo&&this.getNumDynamicColumns()?(y.trimColumnsForNumberOfFeatures(this),this.refresh({resetWidth:!0})):this.viewModel.dynamicReportInfo&&this.getNumDynamicRows()?(y.adjustRowsForNumberOfFeatures(this),this.refresh()):t?this.refresh({resetWidth:!0,columnsToPreserve:l}):this.refresh()},setPosition:function(e,t){void 0!==e&&(this._left=e||0,this.domNode.style.left=this._left+"px"),void 0!==t&&(this._top=t||0,this.domNode.style.top=this._top+"px")},setOpacity:function(e){"number"==typeof e.opacity&&(this._opacity=Math.max(0,Math.min(1,e.opacity)),this.domNode.style.opacity=this._opacity,o[0===this._opacity?"add":"remove"](this.domNode,"esriGENonInteractable")),"number"==typeof e.fixedCellsOpacity&&(this._fixedCellsOpacity=Math.max(0,Math.min(1,e.fixedCellsOpacity)),this.mainNode.style.opacity=this._fixedCellsOpacity,o[0===this._fixedCellsOpacity?"add":"remove"](this.mainNode,"esriGENonInteractable"))},_adjustColumnsForSettings:function(e){return!1},_adjustRowsForSettings:function(e){},getDefaultStyle:function(){return this._alternatingStyle||"Default"},getSettings:function(){return y.recalcGridWidth(this),{style:{width:this._width,left:this._left,top:this._top,spaceAfter:this._spaceAfter,alternatingStyle:this._alternatingStyle,opacity:this._opacity,fixedCellsOpacity:this._fixedCellsOpacity},attributes:t.mixin(t.clone(this._tableAttributes),{columnCount:this.columns.length,rowCount:this.rows.length}),presetFilter:this.presetFilter,presetSorting:this.presetSorting,scaleToFitWidth:this._scaleToFitWidth,scaleToFitHeight:this._scaleToFitHeight,noChartView:this.noChartView}},getOpacity:function(){return{opacity:this._opacity,fixedCellsOpacity:this._fixedCellsOpacity}},needScaleToFitWidth:function(){return this._scaleToFitWidth},needScaleToFitHeight:function(){return this._scaleToFitHeight},isEmptyTable:function(){return D.isEmptyTable(this)},isSingleCelledTable:function(){return D.isSingleCelledTable(this)},isMultiDataTable:function(){return D.isMultiDataTable(this)},isMultiFeatureTable:function(){return!!this.getNumDynamicColumns()||!!this.getNumDynamicRows()},getNumFixedColumns:function(){return this._tableAttributes&&this._tableAttributes.fixedColumns||0},setNumFixedColumns:function(e){this._tableAttributes.fixedColumns=e},getNumDynamicColumns:function(){return this._tableAttributes&&this._tableAttributes.dynamicColumns||0},setNumDynamicColumns:function(e){this._tableAttributes.dynamicColumns=e},getNumFixedRows:function(){return this._tableAttributes&&this._tableAttributes.fixedRows||0},setNumFixedRows:function(e){this._tableAttributes.fixedRows=e},getNumDynamicRows:function(){return this._tableAttributes&&this._tableAttributes.dynamicRows||0},setNumDynamicRows:function(e){this._tableAttributes.dynamicRows=e},_viewMode:null,_specificViewMode:null,_viewModeKey:null,getViewMode:function(){return this._viewMode},getSpecificViewMode:function(){return this._specificViewMode},setViewMode:function(e,t,i){this._tryApplyNewViewMode(e,t)&&(i&&i.noUpdate||(this._fieldCells&&this._fieldCells.forEach((function(e){this._updateCellViewMode(e)}),this),this.backgroundSection&&this.backgroundSection.setViewMode(this._viewMode,this._specificViewMode),this.backgroundFloatingTablesSection&&this.backgroundFloatingTablesSection.setViewMode(this._viewMode,this._specificViewMode),this.foregroundFloatingTablesSection&&this.foregroundFloatingTablesSection.setViewMode(this._viewMode,this._specificViewMode),this.foregroundSection&&this.foregroundSection.setViewMode(this._viewMode,this._specificViewMode)))},_tryApplyNewViewMode:function(e,t){var i="function"==typeof this.fixedViewMode?this.fixedViewMode(this):this.fixedViewMode,n="function"==typeof this.fixedSpecificViewMode?this.fixedSpecificViewMode(this):this.fixedSpecificViewMode,s=(e=i||e||this._viewMode)+((t=n||t||this._specificViewMode)?JSON.stringify(t):"");return this._viewModeKey!==s&&(this._viewModeKey=s,this._viewMode=e,this._specificViewMode=t,o.remove(this.domNode,"adjustableGridPreviewMode adjustableGridEditMode "),o.add(this.domNode,this._viewMode===A.EDIT?"adjustableGridEditMode":"adjustableGridPreviewMode"),!0)},_updateCellViewMode:function(e){e.setDefaultBorderStyle(this._getDefaultBorderStyle(e.row,e.column,e.isLastInRow,e.isLastInColumn)),e.content&&e.content.setViewMode&&e.content.setViewMode(this._viewMode,this._specificViewMode),this._getCellRenderer().updateViewMode(e,this._viewMode)},getCells:function(e){var t=[];return t=e&&e.floatingCells?this.getBackgroundFloatingCells().concat(this._fieldCells).concat(this.getForegroundFloatingCells()):this._fieldCells,e&&e.topFirst&&(t=t.slice().reverse()),t},queryCells:function(e){return F.queryCells(this,e)},getFirstCell:function(){return this.getCells()[0]},getCellText:function(e){return p.getFieldCellValue(e)},setCellText:function(e,t){p.setFieldCellContent(e,t)},renderCell:function(e){this._renderFieldContent(e)},refreshCellStyle:function(e){e.setStyle(T.combineCellStyle(this,e.row,e.column))},getInfographicJson:function(){var e=this.getFirstCell();return p.isInfographicCell(e)?p.getFieldInfo(e).infographicJson:null},getFeatureIndexForCell:function(e){return this.isMultiFeatureTable()?y.calcRingIndexForCell(e):"number"==typeof this.currentFeatureIndex?this.currentFeatureIndex:"number"==typeof e.row.currentFeatureIndex?e.row.currentFeatureIndex:"number"==typeof e.column.currentFeatureIndex?e.column.currentFeatureIndex:void 0},isMouseOver:function(){return this.domNode&&F.isMouseOver(this)},getOverFieldCell:function(e){return F.getOverFieldCell(this,e)},getBBox:function(e){return F.getBBox(this,e)},getBackgroundFloatingCells:function(e){return this._getFloatingCells(this.backgroundFloatingTablesSection,e)},getForegroundFloatingCells:function(e){return this._getFloatingCells(this.foregroundFloatingTablesSection,e)},_getFloatingCells:function(e,t){var i=[];return e?(e.getTrueTables().forEach((function(e){i=i.concat(e.getCells())})),t&&t.topFirst&&i.reverse(),i):i},getChartJson:function(){var e=this.getFirstCell();return p.isChartCell(e)?p.getFieldInfo(e).chartJson:null},toJson:function(){var e=this.getSettings();return e.id="table",e.rows=this._getOriginalData(),e.columns=this.columns,e.elementUsageType=this.elementUsageType,["backgroundSection","foregroundSection","backgroundFloatingTablesSection","foregroundFloatingTablesSection"].forEach((function(t){var i=this[t];if(i){var n=i.toJson();n.stack.length&&(e[t+"Json"]=n)}}),this),t.clone(e)},fromJson:function(e){e&&(this.columns=e.columns||[],this.rows=e.rows||[],this.backgroundSectionJson=e.backgroundSectionJson,this.foregroundSectionJson=e.foregroundSectionJson,this.backgroundFloatingTablesSectionJson=e.backgroundFloatingTablesSectionJson,this.foregroundFloatingTablesSectionJson=e.foregroundFloatingTablesSectionJson,this.elementUsageType=e.elementUsageType,this.setSettings(e))},notifyShown:function(){this.getCells().forEach((function(e){e.notifyShown(),e.content&&e.content.notifyShown&&e.content.notifyShown()})),this.backgroundSection&&this.backgroundSection.notifyShown(),this.backgroundFloatingTablesSection&&this.backgroundFloatingTablesSection.notifyShown(),this.foregroundFloatingTablesSection&&this.foregroundFloatingTablesSection.notifyShown(),this.foregroundSection&&this.foregroundSection.notifyShown()},onRendered:function(){},onRequestScaleToFitHeight:function(){},_destroyTableContent:function(){this._renderInfo=null,this._fieldCells=this._fieldCells||[],this._fieldCells.forEach((function(e){e.parentWidget=null,e.parentGrid=null,e.row=null,e.column=null,e.destroy()})),this._fieldCells.length=0,this.backgroundSection&&this.backgroundSection.destroy(),this.backgroundSection=null,this.backgroundFloatingTablesSection&&this.backgroundFloatingTablesSection.destroy(),this.backgroundFloatingTablesSection=null,this.foregroundFloatingTablesSection&&this.foregroundFloatingTablesSection.destroy(),this.foregroundFloatingTablesSection=null,this.foregroundSection&&this.foregroundSection.destroy(),this.foregroundSection=null,this._renderCellsQueue&&this._renderCellsQueue.destroy(),this._renderCellsQueue=null,this._renderCellsContentQueue&&this._renderCellsContentQueue.destroy(),this._renderCellsContentQueue=null},destroy:function(){this._destroyTableContent(),this.viewModel=null,this.theme=null,this.rows=null,this.columns=null,this._originalData=null,this.parentWidget=null,this.parentElementInPageInfo=null,this.viewPortContainer=null,this.parentGrid=null,this.reportContainerPageNode=null,this._removeChart(),this.inherited(arguments)}})}));