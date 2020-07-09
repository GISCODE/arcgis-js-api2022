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

define(["dojo/_base/lang","dojo/has","dojox/lang/functional/object","../../../../../kernel","./Common","../../../AnalysisRegistry","../../../ItemTypes","dojo/i18n!../../../nls/BrowseLayerMixin"],(function(e,t,i,s,r,o,n,a){var l={getConfig:function(t){var i=t.disableLAAL?{customSections:[]}:{customSections:r.getLAALCustomSection(t)};!t.disableBoundary&&t.portal.EsriBoundaryLayersGroupQuery&&i.customSections.push(r.getBoundaryLayersSection(t)),t.allowedItemTypes.indexOf(n.RFT)>-1&&t.showRFTSystemSection&&i.customSections.push(r.getSystemRFTSection(t));var s=e.mixin({dialogTitle:t.title||a.customAnalysisLayerTitle,allowedItemTypes:t.allowedItemTypes,availableItemTypeFilters:t.availableItemTypeFilters,baseSections:["myContent","myFavorites","myGroups","myOrganization"],resultsPerQuery:r.getNumberOfPages(),layoutMode:"fullscreen",staticFilters:r.getStaticFilters(t.customQueryTags),mainActionTitle:a.mainActionTitle,customActions:[r.getAddtoMapActions(t.onActionSubLayer)],showSubResources:this._getSubResourcesForPortal(t),disabledSubResources:t.disabledSubResources,addQueryParameters:t.addQueryParameters},i);return t.showRFTEditCustomAction&&s.customActions.push(r.getEditRFTActions(t.onEditRFT)),s},_getSubResourcesForPortal:function(e){var t={};return e.allowedItemTypes.indexOf(n.FS)>-1&&(t[n.FS]={allowed:function(t){return this.allowedItemsForTypes(t,e.customQueryTags)}.bind(this),onSelect:e.onSelectSubLayer,customActions:[r.getAddtoMapActions(e.onActionSubLayer)],filters:this._getFilterforSubLayer(!1,e.customQueryTags)}),e.allowedItemTypes.indexOf(n.MS)>-1&&(t[n.MS]={allowed:function(t){return this.allowedItemsForTypes(t,e.customQueryTags)}.bind(this),onSelect:e.onSelectSubLayer,customActions:[r.getAddtoMapActions(e.onActionSubLayer)],filters:this._getFilterforSubLayer(!1,e.customQueryTags)}),e.allowedItemTypes.indexOf(n.BIGDATA)>-1&&(t[n.BIGDATA]={allowed:function(t){return this.allowedItemsForTypes(t,e.customQueryTags)}.bind(this),onSelect:e.onSelectSubLayer,filters:this._getFilterforSubLayer(!0,e.customQueryTags)}),e.allowedItemTypes.indexOf(n.GPSERVICE)>-1&&(t[n.GPSERVICE]={allowed:function(){return!0},onSelect:e.onSelectGPTool,filters:[]}),t},_getFilterforSubLayer:function(e,t){var i=[];return i.push(this.getGeometryFilter(t.geometryTypes)),t.layerTypes&&(e?i.push(this.getFilterForLayerTypesForBigData(t.layerTypes)):i.push(this.getFilterForLayerTypesForFS(t.layerTypes))),t.timeTypes&&i.push(this.getTimeFilter(t.timeTypes)),i},getGeometryFilter:function(e){var t=[];return(e&&e.length>0?e:i.values(o.GeometryTypes)).forEach((function(e){switch(e){case o.GeometryTypes.Point:t.push({displayName:a.pointFilterName,allowed:this.filters.geometryTypes[o.GeometryTypes.Point],value:"point"});break;case o.GeometryTypes.Polygon:t.push({displayName:a.polygonFilterName,allowed:this.filters.geometryTypes[o.GeometryTypes.Polygon],value:"polygon"});break;case o.GeometryTypes.Line:t.push({displayName:a.lineFilterName,allowed:this.filters.geometryTypes[o.GeometryTypes.Line],value:"line"});break;case o.GeometryTypes.MultiPoint:t.push({displayName:a.multiPointFilterName,allowed:this.filters.geometryTypes[o.GeometryTypes.MultiPoint],value:"multipoint"})}}),this),{allowed:function(){return!0},displayName:a.geometryFilterName,value:"geometry",children:t}},getFilterForLayerTypesForFS:function(e){var t=[];return(e?e.length>0?e:[n.FLAYER,n.TABLE]:[]).forEach((function(e){switch(e){case n.FLAYER:t.push({displayName:a.featureLayerName,allowed:this.filters.layerTypes[n.FLAYER],value:"featurelayer"});break;case n.TABLE:t.push({displayName:a.tableLayerName,allowed:this.filters.layerTypes[n.TABLE],value:"ftable"})}}),this),{allowed:function(){return!0},displayName:a.itemTypeFilterName,value:"itemtype",children:t}},getFilterForLayerTypesForBigData:function(e){var t=[];return(e?e.length>0?e:[n.BDATAFEATURE,n.BTABLE]:[]).forEach((function(e){switch(e){case n.BDATAFEATURE:t.push({displayName:a.featureLayerName,allowed:this.filters.layerTypes[n.BDATAFEATURE],value:"bfeaturelayer"});break;case n.BTABLE:t.push({displayName:a.tableLayerName,allowed:this.filters.layerTypes[n.BTABLE],value:"btable"})}}),this),{allowed:function(){return!0},displayName:a.featureLayerName,value:"itemtype",children:t}},getTimeFilter:function(e){var t=[];return(e?e.length>0?e:[o.TimeTypes.Instant,o.TimeTypes.Interval]:[]).forEach((function(e){switch(e){case o.TimeTypes.Instant:t.push({displayName:a.instantFilterName,allowed:this.filters.timeTypes[o.TimeTypes.Instant].bind(this),value:"instant"});break;case o.TimeTypes.Interval:t.push({displayName:a.intervalFilterName,allowed:this.filters.timeTypes[o.TimeTypes.Interval].bind(this),value:"interval"})}}),this),{allowed:function(){return!0},displayName:a.timeFilterName,value:"time",children:t}},allowedItemsForTypes:function(e,t){var s=!0,r=t.layerTypes||[n.FLAYER,n.BDATAFEATURE];return t.geometryTypes&&e.geometryType&&(t.geometryTypes=t.geometryTypes.length>0?t.geometryTypes:i.values(o.GeometryTypes),s=s&&-1!==t.geometryTypes.indexOf(e.geometryType)),r&&e.type&&(r=r.length>0?r:[n.FLAYER,n.BDATAFEATURE,n.BTABLE,n.TABLE],s=s&&-1!==r.indexOf(e.type)),t.timeTypes&&(t.timeTypes=t.timeTypes.length>0?t.timeTypes:[o.TimeTypes.Instant,o.TimeTypes.Interval],s=s&&-1!==t.timeTypes.indexOf(this.getTimeType(e))),t.customCheck&&t.customCheck.customCheckHandler&&(s=s&&t.customCheck.customCheckHandler(e)),s&&e},getTimeType:function(e){return!!e&&(this.isDefined(e.timeInfo)&&this.isDefined(e.timeInfo.startTimeField)&&!this.isDefined(e.timeInfo.endTimeField)?o.TimeTypes.Instant:this.isDefined(e.timeInfo)&&this.isDefined(e.timeInfo.startTimeField)&&this.isDefined(e.timeInfo.endTimeField)?o.TimeTypes.Interval:!(!this.isDefined(e.time)||!this.isDefined(e.time.timeType))&&e.time.timeType)},isDefined:function(e){return null!=e},filters:{layerTypes:{"Feature Layer":function(e){return e.type===n.FLAYER},Table:function(e){return e.type===n.TABLE},featureClass:function(e){return e.type===n.BDATAFEATURE},table:function(e){return e.type===n.BTABLE}},geometryTypes:{esriGeometryMultipoint:function(e){return e.geometryType===o.GeometryTypes.MultiPoint},esriGeometryPolyline:function(e){return e.geometryType===o.GeometryTypes.Line},esriGeometryPolygon:function(e){return e.geometryType===o.GeometryTypes.Polygon},esriGeometryPoint:function(e){return e.geometryType===o.GeometryTypes.Point}},timeTypes:{instant:function(e){return this.getTimeType(e)===o.TimeTypes.Instant},interval:function(e){return this.getTimeType(e)===o.TimeTypes.Interval}}}};return t("extend-esri")&&e.setObject("dijit.analysis.mixins.browselayers.configs.EnterpriseBrowseItem",l,s),l}));