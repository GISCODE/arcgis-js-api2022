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

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/promise/all","esri/dijit/geoenrichment/when","esri/kernel","./dataProvider/_CommandSupport","./dataProvider/_SerializationSupport","./dataProvider/_ServerSerializationSupport","./dataProvider/supportClasses/areas/AnalysisAreaUtil","./dataProvider/supportClasses/areas/AnalysisAreaJsonUtil","./dataProvider/supportClasses/areas/AreasPreprocessor","./dataProvider/supportClasses/CustomReportsManager","./dataProvider/supportClasses/TemplateJsonLoader","./dataProvider/supportClasses/ReportDataProcessor","./dataProvider/supportClasses/InfographicOptionsProvider","./dataProvider/supportClasses/GEUtil","./dataProvider/supportClasses/attachments/DefaultAttachmentsStore","./dataProvider/supportClasses/attachments/CustomAttachmentsStore","./dataProvider/supportClasses/PortalManager","./dataProvider/supportClasses/data/VariablesUtil","./dataProvider/commands/mapToImage/MapToURLUtil","./core/themes/ThemeLibrary","./core/themes/ReportThemes","esri/dijit/geoenrichment/ReportPlayer/countryConfig","esri/dijit/geoenrichment/utils/ProjectionUtil","esri/dijit/geoenrichment/utils/UrlUtil"],(function(e,r,t,a,o,s,i,n,l,p,c,u,m,d,h,g,f,v,A,y,I,C,P,U,b,R){return e([s,i,n],{analysisAreasLimit:-1,cacheTemplates:!0,printMapTaskUrl:null,resetReportItemsCache:!0,_infographicOptionsProvider:null,constructor:function(e){r.mixin(this,e),this._infographicOptionsProvider=new h},_getAttachmentsStore:function(e){return new f(e).initialize()},getCustomReports:function(e){return u.getCustomReports(e)},_currentContext:null,getReportData:function(e,o){var s=this,i=o&&o.progressCallback||function(){},n=r.mixin({},e);return n.portalUrl=R.getPortalUrl(n.portalUrl),l.parseSites(n),U.reset(),n.hierarchy||n.analysisAreas.some((function(e){if(e.geographies&&e.geographies[0].hierarchy)return n.hierarchy=e.geographies[0].hierarchy,!0})),s.resetReportItemsCache&&u.resetCache(),s._currentContext=n,n.analysisAreas=p.areasFromJson(n.analysisAreas),n.combinedAreasInfo=n.combinedAreasInfo&&p.combinedAreasInfoFromJson(n.combinedAreasInfo)||{},l.populateCombinedAreasInfo(n.combinedAreasInfo,n.analysisAreas),n.fieldData={specialTradeAreaCalculatorName:null,runReportTaskIDs:null,metadata:{},areaData:[],errors:[],reportInfo:null},t([a(u.tryFindReportIdByAlias(n),(function(e){n.reportID=e||n.reportID})),this._discoverPortal(n),n.variables&&a(y.preprocessVariables(n.variables,n.portalUrl),(function(e){n.variables=e}))]).then((function(){return a(c.preprocessAreas(n,{analysisAreasLimit:s.analysisAreasLimit}),(function(){i(.25),setTimeout((function(){s._onCreateReportStarted()}));var e=n.attachmentsProvider?v(n.attachmentsProvider):s._getAttachmentsStore(n.analysisAreas),r={initGE:g.initialize(),countryInfo:g.getCountryInfo(n.countryID),infographicOptions:s._infographicOptionsProvider.getInfographicOptions(n),attachmentsStore:e};return n.reportID?(r.reportObject=u.getCustomReportByID(n),r.templateJsonInfo=m.getTemplateJsonByID(n,s.cacheTemplates),r.runReportResult=d.runReportAndGetData(n,e)):n.variables&&(r.reportObject=u.getFakeCustomReportByContext(n),r.templateJsonInfo=m.createTemplateJsonFromVariables(n),r.runReportResult=d.runReportFromVariables(n)),t(r).then((function(e){var r=e.reportObject,t=e.infographicOptions,o=e.attachmentsStore,s=e.templateJsonInfo.templateJson,l=e.templateJsonInfo.templateVariableProvider,p=e.runReportResult;if(i(.75),!s||!r||!n.fieldData)return null;U.setCountry(e.countryInfo.country),U.setHierarchyID(n.hierarchy),U.setGeographiesModel(e.countryInfo.geographiesModels[U.getHierarchyID()]),s.theme||(s.theme=C.getReportThemeById(r.isGraphicReport?P.GRAPHIC:P.CLASSIC));var c={isMultiFeature:r.isMultiFeature&&n.analysisAreas.length>1,reportTitle:n.reportTitle||r.title,templateJson:s,reportObject:r,fieldData:n.fieldData,analysisAreas:n.analysisAreas,combinedAreasInfo:n.combinedAreasInfo,reverseAnalysisAreasOnMap:n.reverseAnalysisAreasOnMap,infographicOptions:t,attachmentsStore:o,geClient:g.getClient(),templateVariableProvider:l,customLogo:n.customLogo,config:{portalUrl:n.portalUrl,geoenrichmentUrl:n.geoenrichmentUrl,geometryServiceUrl:n.geometryServiceUrl,printMapTaskUrl:n.printMapTaskUrl,countryID:n.countryID,hierarchy:n.hierarchy,reportID:n.reportID,variables:n.variables}};return a(d.applyRunReportAndGetDataResults(p,c),(function(){return i(1),c}))}))}))}))},_discoverPortal:function(e){var r=this;return A.getPortalInfo(e.portalUrl).then((function(t){e.geoenrichmentUrl=e.geoenrichmentUrl||t.portal.helperServices.geoenrichment.url;var a=o.id.findCredential(e.portalUrl),s=a&&a.token;g.setGeoenrichmentUrl(e.geoenrichmentUrl,s),r._infographicOptionsProvider.setServerUrl(e.geoenrichmentUrl,s),e.geometryServiceUrl=e.geometryServiceUrl||t.portal.helperServices.geometry.url,b.setGeometryServiceUrl(e.geometryServiceUrl),e.printMapTaskUrl=e.printMapTaskUrl||t.portal.helperServices.printTask.url,I.setPrintMapTaskUrl(e.printMapTaskUrl)}))},reportDataToSingleAreaReportData:function(e,t){var a=t.currentFeatureIndex||0,o=r.mixin({},e.fieldData);o.areaData=[o.areaData[a]];var s=[r.mixin({},e.analysisAreas[a])];c.removeGroupInfo(s);var i=e.infographicOptions&&this._infographicOptionsProvider.getInfographicOptionsFromJson(e.infographicOptions.toJsonAt(a)),n=e.attachmentsStore,l=n&&{getImages:function(){return n.supportsMultipleAreas&&n.setCurrentAnalysisAreaIndex(a),n.getImages()},getAttributes:function(){return n.supportsMultipleAreas&&n.setCurrentAnalysisAreaIndex(a),n.getAttributes()},getNotes:function(){return n.supportsMultipleAreas&&n.setCurrentAnalysisAreaIndex(a),n.getNotes()}};return{isMultiFeature:!1,reportTitle:t.reportTitle,templateJson:t.templateJson,reportObject:e.reportObject,fieldData:o,analysisAreas:s,combinedAreasInfo:null,reverseAnalysisAreasOnMap:!1,infographicOptions:i,attachmentsStore:l,geClient:e.geClient,templateVariableProvider:e.templateVariableProvider,config:e.config}},_getCurrentContext:function(){return this._currentContext},_onCreateReportStarted:function(){}})}));