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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/Deferred","dojo/json","dojo/has","./_DRSBaseTask","../../request","../FeatureSet","../../layers/FeatureEditResult","../../kernel"],(function(e,t,r,s,i,a,o,n,c,u,l){var h=e(o,{declaredClass:"esri.tasks.datareviewer.ReviewerResultsTask",constructor:function(e){this.onGetResultsComplete=t.hitch(this,this.onGetResultsComplete),this.onWriteResultComplete=t.hitch(this,this.onWriteResultComplete),this.onWriteFeatureAsResultComplete=t.hitch(this,this.onWriteFeatureAsResultComplete),this.onGetLayerDefinitionComplete=t.hitch(this,this.onGetLayerDefinitionComplete),this.onGetBatchRunDetailsComplete=t.hitch(this,this.onGetBatchRunDetailsComplete)},getResults:function(e,r){var i=this._successHandler,a=this._errorHandler,o=this._appendQueryParams,u=this._url+"/ReviewerResults/getResults";u=o(u);var l=new s,h={queryParameters:e.toJSON(),f:"json"};return null!=r&&(h.filtersArray=r.toJSON()),n({callbackParamName:"callback",url:u,content:h}).then(t.hitch(this,(function(e,t){if(void 0!==e.error){var r=new Error;return r.message=e.error.message,r.code=e.error.code,void a(r,l)}try{if(void 0===e.features||void 0===e.fieldAliases||void 0===e.fields)a(null,l);else{var s=new c(e);i({featureSet:s},"onGetResultsComplete",l)}}catch(e){a(e,l)}})),(function(e,t){a(e,l)})),l},writeResult:function(e,r){var a=this._successHandler,o=this._errorHandler,c=this._appendQueryParams,u=this._url+"/ReviewerResults/writeResult";u=c(u);var l=new s;return n({callbackParamName:"callback",url:u,content:{reviewerAttributes:e.toJSON(),geometry:i.stringify(r.toJson()),f:"json"}}).then(t.hitch(this,(function(e,t){var r=new Error;if(void 0!==e.error)return r.message=e.error.message,r.code=e.error.code,void o(r,l);try{void 0!==e.result&&"error"===e.result?(r.message=e.messages,r.code=e.result,o(r,l)):"success"===e.result?a({success:!0},"onWriteResultComplete",l):o(null,l)}catch(e){o(e,l)}})),(function(e,t){o(e,l)})),l},writeFeatureAsResult:function(e,r){var a=this._successHandler,o=this._errorHandler,c=this._appendQueryParams,u=this._url+"/ReviewerResults/writeFeatureAsResult";u=c(u);var l=new s;return n({callbackParamName:"callback",url:u,content:{reviewerAttributes:e.toJSON(),feature:i.stringify(r.toJson()),f:"json"}}).then(t.hitch(this,(function(e,t){var r=new Error;if(void 0!==e.error)return r.message=e.error.message,r.code=e.error.code,void o(r,l);try{void 0!==e.result&&"error"===e.result?(r.message=e.messages,r.code=e.result,o(r,l)):"success"===e.result?a({success:!0},"onWriteFeatureAsResultComplete",l):o(null,l)}catch(e){o(e,l)}})),(function(e,t){o(e,l)})),l},getLayerDefinition:function(e){var r=this._successHandler,i=this._errorHandler,a=this._appendQueryParams,o=this._url+"/ReviewerResults/getLayerDefinition";o=a(o);var c=new s,u={f:"json"};return null===e&&void 0===e||(u.filtersArray=e.toJSON()),n({callbackParamName:"callback",url:o,content:u}).then(t.hitch(this,(function(e,t){if(void 0!==e.error){var s=new Error;return s.message=e.error.message,s.code=e.error.code,void i(s,c)}try{void 0===e.whereClause?i(null,c):r({whereClause:e.whereClause},"onGetLayerDefinitionComplete",c)}catch(e){i(e,c)}})),(function(e,t){i(e,c)})),c},getBatchRunDetails:function(e){var r=this._successHandler,a=this._errorHandler,o=this._appendQueryParams,u=this._url+"/ReviewerResults/getBatchRunDetails";u=o(u);var l=new s;return n({callbackParamName:"callback",url:u,content:{batchRunIds:i.stringify(e),f:"json"}}).then(t.hitch(this,(function(e,t){if(void 0!==e.error){var s=new Error;return s.message=e.error.message,s.code=e.error.code,void a(s,l)}try{if(void 0===e.features||void 0===e.fieldAliases||void 0===e.fields)a(null,l);else{var i=new c(e);r({featureSet:i},"onGetBatchRunDetailsComplete",l)}}catch(e){a(e,l)}})),(function(e,t){a(e,l)})),l},updateLifecycleStatus:function(e,i,a,o){var c=this._successHandler,l=this._errorHandler,h=this._appendQueryParams,d=this._url+"/ReviewerResults/updateLifecycleStatus";d=h(d);var f=new s;return n({callbackParamName:"callback",url:d,content:{sessionId:e,lifecycleStatus:i,technicianName:a,filtersArray:o.toJSON(),f:"json"}}).then(t.hitch(this,(function(e,t){if(void 0!==e.error){var s=new Error;return s.message=e.error.message,s.code=e.error.code,void l(s,f)}try{var i=[];r.forEach(e.updateResults,(function(e){var t=new u,r=new Error(e.description);t.error=r,t.success=e.success,t.objectId=e.objectId,i.push(t)})),c({featureEditResults:i},"onUpdateLifecycleStatusComplete",f)}catch(e){l(e,f)}})),(function(e,t){l(e,f)})),f},getResultsFieldNames:function(){return["recordId","objectId","subtype","category","sessionId","checktitle","resourceName","checkName","notes","severity","reviewStatus","correctionStatus","verificationStatus","reviewTechnician","correctionTechnician","verificationTechnician","reviewDateUtc","correctionDateUtc","verificationDateUtc","lifecycleStatus"]},onGetResultsComplete:function(e){},onWriteResultComplete:function(e){},onWriteFeatureAsResultComplete:function(e){},onGetLayerDefinitionComplete:function(e){},onGetBatchRunDetailsComplete:function(e){},onUpdateLifecycleStatusComplete:function(e){}});return a("extend-esri")&&t.setObject("tasks.datareviewer.ReviewerResultsTask",h,l),h}));