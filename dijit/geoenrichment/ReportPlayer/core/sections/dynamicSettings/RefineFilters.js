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

define(["dojo/_base/declare","dojo/on","dojo/string","dojo/dom-construct","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/form/TextBox","esri/dijit/geoenrichment/NumericalSlider","./MethodFilter","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/InvokeUtil","esri/dijit/geoenrichment/utils/MouseUtil","esri/dijit/geoenrichment/utils/TooltipUtil","./supportClasses/FilterUtil","dojo/text!../../templates/sectionDynamicSettings/RefineFilters.html","dojo/i18n!esri/nls/jsapi"],(function(e,t,i,l,s,r,n,o,a,h,u,d,c,m,f,F){var g=e([s,r],{templateString:f,nls:F=F.geoenrichment.dijit.ReportPlayer.SectionDynamicSettingsBuilder,hasTitle:!1,hasTextFilter:!1,hasRangeFilters:!1,hasMethodFilter:!1,textFilterPlaceHolder:null,selectRangePlaceholder:null,_originalFilterRanges:null,_filters:null,textFilter:null,methodFilter:null,_filterWidgets:null,postCreate:function(){var e=this;this.inherited(arguments),this._buildKeywordFilter(),this._buildMethodFilter(),t(this.resetButton,"click",(function(){e._resetFilters()})),h[this.hasTitle?"show":"hide"](this.refineResultsTitleBlock),h[this.hasTextFilter?"show":"hide"](this.textFilterBlock),h[this.hasRangeFilters?"show":"hide"](this.filtersBlock),h[this.hasMethodFilter?"show":"hide"](this.methodBlock),h.hide(this.customBlock),this.setTitleInfo(null)},_buildKeywordFilter:function(){this.textFilter=new n({class:"sectionDynamicRefineFilters_textFilter",trim:!0,placeHolder:this.textFilterPlaceHolder||F.keywordsPlaceholder}).placeAt(this.textFilterDiv),t(this.textFilter.textbox,"keyup",this._emitEvent.bind(this)),this.own(this.textFilter)},_buildMethodFilter:function(){var e=this;this.methodFilter=new a({selectRangePlaceholder:this.selectRangePlaceholder,onFilterChanged:function(t){e._applyFilterToRanges(t),e.onFilterChanged(e.getVisualState())}}).placeAt(this.methodBlock),this.own(this.methodFilter)},_buildFiltersFromOriginals:function(){this._filters=this._originalFilterRanges?this._originalFilterRanges.map((function(e){return{label:e.alias,fieldName:e.fieldName,minValue:e.min,maxValue:e.max,lowerValue:e.min,upperValue:e.max,decimals:e.decimals,dataArray:e.dataArray}})):[]},_buildRangeFilters:function(){var e=this;this._destroyFilterWidgets(),this._filterWidgets=[],this._filters.forEach((function(t){var i=l.create("div",{class:"esriGERowHigh sectionDynamicRefineFilters_row "+(t.label?"":"noLabel")},e.filtersBlock),s=new o({label:t.label,minValue:t.minValue,maxValue:t.maxValue,lowerValue:t.lowerValue,upperValue:t.upperValue,decimals:t.decimals,timeIntervalLength:250,onChange:function(i){t.lowerValue=s.round(i.lowerValue),t.upperValue=s.round(i.upperValue),e._emitEvent()}}).placeAt(i);s.startup(),setTimeout((function(){t.dataArray&&s.domNode&&s.setStatistics(t.dataArray)}),100),e._filterWidgets.push(s)}))},addToCustomBlock:function(e){h.show(this.customBlock),e.forEach((function(e){l.place(e,this.customBlock)}),this)},setTitle:function(e,t,l){this.refineResultsTitle.innerHTML=i.substitute(e,{numTotal:t||0,numShown:l||0})},setTitleInfo:function(e){c.setTooltipToNode(this.titleInfoIcon,e),h[e?"show":"hide"](this.titleInfoIcon)},setFilterRanges:function(e){this._originalFilterRanges=e||[],this._buildFiltersFromOriginals(),this._buildRangeFilters()},setFilter:function(e){this.methodFilter.setRanges(this._filters),this.methodFilter.setFilter(e),e&&this._applyFilterToRanges(e)},_applyFilterToRanges:function(e){var t=this._filters.map((function(t){var i=m.filterData(t.dataArray,1===this._filters.length||e.fieldName===t.fieldName?e:{method:m.NONE});return{fieldName:t.fieldName,min:i[0],max:i[i.length-1]}}),this);this.setVisualState({filterRanges:t,hasPresetFilter:!!e})},_resetFilters:function(e){this.domNode&&(this.textFilter.set("value",""),this._buildFiltersFromOriginals(),this._buildRangeFilters(),!e&&this._doEmitEvent())},_emitEvent:function(){u.invoke(this,"_doEmitEvent",100)},_doEmitEvent:function(){this.methodFilter&&this.methodFilter.setFilter(null),this.onFilterChanged(this.getVisualState())},onFilterChanged:function(e){},hasFiltersOn:function(){return!!this.domNode&&!!(this.textFilter.get("value")||this._filters&&this._filters.some((function(e){return e.lowerValue>e.minValue||e.upperValue<e.maxValue})))},getVisualState:function(){return{type:"refineFilters",searchText:this.textFilter.get("value"),filterRanges:this._filters&&this._filters.map((function(e){return{fieldName:e.fieldName,min:e.lowerValue,max:e.upperValue}})),hasFiltersOn:this.hasFiltersOn()}},setVisualState:function(e){e?(e.filterRanges&&(e.filterRanges.forEach((function(e){var t=this._filters.filter((function(t){return t.fieldName===e.fieldName}))[0];t.lowerValue=e.min,t.upperValue=e.max}),this),this._buildRangeFilters(),e.hasPresetFilter||this.methodFilter.setFilter(null)),this.textFilter.set("value",e.searchText||"")):this._resetFilters(!0)},isMouseOver:function(e){return d.isMouseOver(this.domNode)||this.methodFilter&&this.methodFilter.isMouseOver()},_destroyFilterWidgets:function(){this._filterWidgets&&(this._filterWidgets.forEach((function(e){e.destroy()})),this._filterWidgets.length=0),this.filtersBlock.innerHTML=""},destroy:function(){this._destroyFilterWidgets(),this.inherited(arguments)}});return g.hasFiltersOn=function(e){return!1},g}));