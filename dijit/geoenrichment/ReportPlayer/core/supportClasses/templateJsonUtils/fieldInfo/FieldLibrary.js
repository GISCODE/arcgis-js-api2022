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

define(["dojo/string","dojo/i18n!esri/nls/jsapi"],(function(e,i){var t=i.geoenrichment.dijit.ReportPlayer.FieldInfoLabels;i=i.geoenrichment.dijit.ReportPlayer.FieldInfoPreview;var E={_SPECIAL_HEADER_FIELDS_NAME_MAP:{SITE_NAME:"SiteName",STORE_ADDR:"SiteAddr",AREA_DESC2:"SiteDesc",STORE_LAT:"Latitude",STORE_LONG:"Longitude",AREA_ID:"AreaID",AREA_DESC:"AreaDesc",STORE_ID:"StoreID",RING:"Ring",STORE_NAME:"StoreName",GROUPCOUNT:"SummaryCount"},_ADDITIONAL_HEADER_FIELDS_MAP:{SITENOTE:"SiteNote",SITENOTE2:"SiteNote2",SITENOTE3:"SiteNote3",SITENOTE4:"SiteNote4",SITENOTE5:"SiteNote5",SITENOTE6:"SiteNote6",SITENOTE7:"SiteNote7",SITENOTE8:"SiteNote8",SITENOTE9:"SiteNote9",SITENOTE10:"SiteNote10",SITENOTES:"SiteNotes",CHART_AREA_NAME:"ChartAreaName",CHART_SERIES_NAME:"ChartSeriesName",CHART_POINT_NAME:"ChartVariableName",CHART_POINT_VALUE:"ChartVariableValue"},_REPORT_VAR_FIELDS_MAP:{REPORTNAME:"Title",REPORTTITLE2:"Subtitle",CURRPAGE:"Page",COPYRIGHT:"Copyright",TRIALURLTEXT:"TrialUrlText",PHONENUMBER:"PhoneNumber",PRODUCTURL:"ProductUrl",PRODUCTLABEL:"ProductLabel",SOURCE:"Source",CENSUSYEAR:"CensusYear",CURRENTYEAR:"CurrentYear",FUTUREYEAR:"FutureYear",LATITUDELABEL:"LatitudeLabel",LONGITUDELABEL:"LongitudeLabel",PAGEFORMAT:"PageFormat",BANDFROM0TO1UNIT2:"BandFrom0To1Unit2",RADIUS0UNIT1:"Radius0Unit1",AREADELIMITER:"AreaDelimiter",BANDREGIONFROM0TO1:"BandRegionFrom0To1",ET_AL:"ET_AL",LINEBUFFERSEGMENTFROM0TO1UNIT2RADIUS:"LineBufferSegmentFrom0To1Unit2Radius",LINEBUFFERRADIUS0UNIT1RADIUS:"LineBufferRadius0Unit1Radius",RINGVALUE0UNIT1RADIUS:"RingValue0Unit1Radius",RINGSVALUES0UNIT1RADII:"RingsValues0Unit1Radii",RINGBUFFERBANDFROM0TO1UNIT2RADIUS:"RingBufferBandFrom0To1Unit2Radius",DRIVETIMEBANDFROM0TO1UNIT2RADIUS:"DriveTimeBandFrom0To1Unit2Radius",RINGBUFFERBANDSBANDS0UNIT1RADII:"RingBufferBandsBands0Unit1Radii",RINGBUFFERBANDRING0UNIT1RADIUS:"RingBufferBandRing0Unit1Radius",DRIVETIMEBANDBAND0UNIT1RADIUS:"DriveTimeBandBand0Unit1Radius",DRIVETIMESRINGS0UNIT1RADII:"DriveTimesRings0Unit1Radii",DRIVETIMERING0UNIT1RADIUS:"DriveTimeRing0Unit1Radius",DRIVEDISTANCEVALUE0UNIT1RADIUS:"DriveDistanceValue0Unit1Radius",DRIVEDISTANCESRINGS0UNIT1RADII:"DriveDistancesRings0Unit1Radii",DRIVEDISTANCERING0UNIT1RADIUS:"DriveDistanceRing0Unit1Radius"},_SPECIAL_HEADER_FIELDS_NAME_MAP_BACK:{},_ADDITIONAL_HEADER_FIELDS_MAP_BACK:{},_REPORT_VAR_FIELDS_MAP_BACK:{},_PREVIEW:{Title:i.fieldPreviewTitle,Title_graphic:i.fieldPreviewTitleGraphic,Subtitle:i.fieldPreviewSubtitle,Date:i.fieldPreviewDate,Page:i.fieldPreviewPage,Count:i.fieldPreviewLocationsCount,Copyright:i.fieldPreviewCopyright,TrialUrlText:i.fieldPreviewTrialUrlText,PhoneNumber:i.fieldPreviewPhoneNumber,ProductUrl:i.fieldPreviewProductUrl,ProductLabel:i.fieldPreviewProductLabel,Source:i.fieldPreviewSource,SITE_NAME:i.fieldPreviewSiteName,SITE_NAME_multi:i.fieldPreviewSiteNameMulti,STORE_LAT:i.fieldPreviewLat,STORE_LONG:i.fieldPreviewLong,AREA_DESC2:i.fieldPreviewAreaDesc2,STORE_ADDR:i.fieldPreviewStoreAddr,AREA_DESC:i.fieldPreviewAreaDesc,CHART_AREA_NAME:i.fieldPreview_chartArea,CHART_SERIES_NAME:i.fieldPreview_seriesName,CHART_POINT_NAME:i.fieldPreview_pointName},_LABELS:{CHART_AREA_NAME:t.chartAreaName,CHART_SERIES_NAME:t.chartSeriesName,CHART_POINT_NAME:t.chartPointName,CHART_POINT_VALUE:t.chartPointValue},DATE_FIELD_NAME:"Date",DATE_FIELD_ALIAS:"Date",DATE_FIELD_DEFAULT_FORMAT:"d-MMMM dd, yyyy",GROUPCOUNT_FIELD_NAME:"SummaryCount",GROUPCOUNT_FIELD_ALIAS:"SummaryCount",SITENOTES_FIELD_NAME:"SiteNotes",SITENOTES_FIELD_ALIAS:"SiteNotes",init:function(){for(var e in this._SPECIAL_HEADER_FIELDS_NAME_MAP)this._SPECIAL_HEADER_FIELDS_NAME_MAP_BACK[this._SPECIAL_HEADER_FIELDS_NAME_MAP[e].toUpperCase()]=e;for(var e in this._ADDITIONAL_HEADER_FIELDS_MAP)this._ADDITIONAL_HEADER_FIELDS_MAP_BACK[this._ADDITIONAL_HEADER_FIELDS_MAP[e].toUpperCase()]=e;for(e in this._REPORT_VAR_FIELDS_MAP)this._REPORT_VAR_FIELDS_MAP_BACK[this._REPORT_VAR_FIELDS_MAP[e].toUpperCase()]=e},templateToUIHeader:function(e){return e=e&&this.trimTemplateHeaderName(e).toUpperCase(),this._SPECIAL_HEADER_FIELDS_NAME_MAP[e]||this._ADDITIONAL_HEADER_FIELDS_MAP[e]},qualifyTemplateHeaderName:function(e){return e?0===e.indexOf("headers.")?e:"headers."+e:e},trimTemplateHeaderName:function(e){return e?(0===e.indexOf("headers.")&&(e=e.substr(e.indexOf(".")+1)),e):e},templateToUIReportVar:function(e){return e=e&&e.toUpperCase(),this._REPORT_VAR_FIELDS_MAP[e]},uiToTemplate:function(e){return e=e&&e.toUpperCase(),this._SPECIAL_HEADER_FIELDS_NAME_MAP_BACK[e]||this._ADDITIONAL_HEADER_FIELDS_MAP_BACK[e]||this._REPORT_VAR_FIELDS_MAP_BACK[e]},getPreview:function(t,E,A){return t=this.trimTemplateHeaderName(t),E&&"Title"===t&&(t+="_graphic"),A&&"SITE_NAME"===t&&(t+="_multi"),"SiteNotes"===t?i.fieldPreviewSiteNotes:0===t.indexOf("SiteNote")?e.substitute(i.fieldPreviewSiteNote,{index:t.replace("SiteNote","")||1}):this._PREVIEW[t]},hasField:function(e){return!!(this.uiToTemplate(e)||this.templateToUIHeader(e)||this.templateToUIReportVar(e))},isAdditionalHeadersField:function(e){return e=e&&this.trimTemplateHeaderName(e).toUpperCase(),this._ADDITIONAL_HEADER_FIELDS_MAP[e]},isChartAttribute:function(e){return this.isAdditionalHeadersField(e)&&-1!==e.toUpperCase().indexOf("CHART_")},getSiteNoteFieldNameAt:function(e){return"SiteNote"+(!e||Number(e)<=1?"":e)},getFieldLabel:function(e){return e=e&&this.trimTemplateHeaderName(e).toUpperCase(),this._LABELS[e]},getReportVarSelfTagsMap:function(){return{Page:"currPage",Title:"reportName",Subtitle:"reportTitle2"}},getReportVarTextTagsMap:function(){var e=this.getReportVarSelfTagsMap(),i={};for(var t in this._REPORT_VAR_FIELDS_MAP){var E=this._REPORT_VAR_FIELDS_MAP[t];e[E]||(i[E]=E)}return i}};return E.init(),E}));