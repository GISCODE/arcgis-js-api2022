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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../SpatialReference","../srUtils","../tasks/query","./RenderMode","./support/ParallelSnapshot"],(function(e,t,r,a,i,s,n,h,o){var u=e([h],{declaredClass:"esri.layers._SnapshotMode",maxFeatures:5e4,maxRecordCountFactor:1,scaleToTileFactor:1,_isSuspendedAtStartup:!1,_pendingRefresh:!1,constructor:function(e){this.featureLayer=e,this._featureMap={},this._hasPartialFeatures=!1,this._hasUpdateError=!1,this._drawFeatures=t.hitch(this,this._drawFeatures),this._queryErrorHandler=t.hitch(this,this._queryErrorHandler),this._handleSuccess=t.hitch(this,this._handleSuccess),this._handleError=t.hitch(this,this._handleError),this._handleProgress=t.hitch(this,this._handleProgress)},startup:function(){if(!this._started||this._isSuspendedAtStartup){this.inherited(arguments);var e=this.featureLayer,t=e.reHostedFS.test(e.url);this.pagination=e.queryPagination&&null!=e.maxRecordCount,this._cacheHintSupported=e._isCacheHintSupported(),this.scaleToTileFactor=this._getScaleToTileFactor(),t&&this.pagination&&(this._parallelSnapshot=new o({layer:e,mode:this,queryTask:e._task})),this._isSuspendedAtStartup=e.suspended,this._startup()}},propertyChangeHandler:function(e){this._init&&(e?this.featureLayer._collection?console.log("FeatureLayer: layer created by value (from a feature collection) does not support definition expressions and time definitions. Layer id = "+this.featureLayer.id):this._fetchAll():this._applyTimeFilter())},destroy:function(){this._isSuspendedAtStartup=this._pendingRefresh=!1,this._cancelPendingRequest(this._pendingRequest),this._parallelSnapshot&&this._parallelSnapshot.destroy(),this.inherited(arguments)},drawFeature:function(e){var t=this.featureLayer.objectIdField,r=e.attributes[t];this._addFeatureIIf(r,e),this._incRefCount(r)},resume:function(){this._isSuspendedAtStartup||this._pendingRefresh?(this._isSuspendedAtStartup=!1,this._startup()):this.propertyChangeHandler(0)},refresh:function(){var e=this.featureLayer;e._collection?(e._fireUpdateStart(),e._refresh(!0),e._fireUpdateEnd()):this._fetchAll()},hasAllFeatures:function(){return!this._hasPartialFeatures},hasUpdateError:function(){return this._hasUpdateError},canFetchPBF:function(e){return this.inherited(arguments)&&this.featureLayer._canFetchPBFForQuery(e)},_startup:function(){this.featureLayer._collection?this._applyTimeFilter():this._fetchAll()},_fetchAll:function(){var e=this.featureLayer;e._collection||e.suspended||!e.isQueryable()?this._pendingRefresh=e.suspended:(this._pendingRefresh=!1,e._fireUpdateStart(),this._clearIIf(),this._hasPartialFeatures=!1,this._hasUpdateError=!1,this._parallelSnapshot?this._parallelSnapshot.fetch().then(this._handleSuccess,this._handleError,this._handleProgress):this._sendRequest())},_handleSuccess:function(e){this._hasPartialFeatures=e.hasPartialFeatures,this._hasUpdateError=e.hasUpdateError,this.featureLayer._fireUpdateEnd(null)},_handleError:function(e){this._queryErrorHandler(e)},_handleProgress:function(e){e.isError?this.featureLayer._errorHandler(e.error):this._addFeatures(e.features)},_getScaleToTileFactor:function(){var e=this.featureLayer.tileMaxRecordCount,t=this.featureLayer.maxRecordCount,r=1;return null!=e&&null!=t&&(r=e/t,r=Number(r.toFixed(2))),r},_getPageSize:function(e){var t=this.featureLayer.tileMaxRecordCount,r="tile"===e.resultType&&t?t:this.featureLayer.maxRecordCount;return e.maxRecordCountFactor&&(r=Math.floor(r*e.maxRecordCountFactor)),r},_sendRequest:function(e){var t=this.featureLayer,r=this._createQueryInfo(),a=r.query;this.pagination&&(this._pageSize=this._getPageSize(a),this._start=a.start=null==e?0:e,a.num=this._pageSize),this._pendingRequest&&this._cancelPendingRequest(this._pendingRequest),this._pendingRequest=t._task.execute(a,this._drawFeatures,this._queryErrorHandler,r.pbf?{format:"pbf"}:null)},_drawFeatures:function(e){this._pendingRequest=null,this.featureLayer._isImageService&&this.featureLayer.version<10.7&&void 0===e.exceededTransferLimit&&(e.exceededTransferLimit=e.features.length===this.featureLayer.maxRecordCount);var t=this.featureLayer,r=e.exceededTransferLimit,a=r&&!t._collection,i=this._checkMaxLimit(e.features),s=i.maxLimitReached;this._addFeatures(i.features),this.pagination&&a&&!s||(this._hasPartialFeatures=!!r,t._fireUpdateEnd(null,r?{queryLimitExceeded:!0}:null)),a&&(this.pagination&&!s&&this._sendRequest(this._start+this._pageSize),t.onQueryLimitExceeded())},_queryErrorHandler:function(e){this._pendingRequest=null,this._hasPartialFeatures=!0,this._hasUpdateError=!0;var t=this.featureLayer;t._errorHandler(e),t._fireUpdateEnd(e)},_checkMaxLimit:function(e){var t=e?e.length:0,r=this.featureLayer.graphics.length+t,a=r>=this.maxFeatures;if(a){var i=r-this.maxFeatures;i&&e.splice(t-i,i)}return{maxLimitReached:a,featuresDiscarded:r>this.maxFeatures,features:e}},_createQueryInfo:function(){var e=this.featureLayer,t=new n;t.outFields=e.getOutFields(),t.where=e.getDefinitionExpression()||"1=1",t.returnGeometry=!0,t.outSpatialReference=s.createSpatialReference(this.map.spatialReference.toJson()),t.timeExtent=e.getTimeDefinition(),t.maxAllowableOffset=e._maxOffset,t.quantizationParameters=e._quantizationParameters,t.orderByFields=e.supportsAdvancedQueries?e.getOrderByFields():null,t.multipatchOption=e.multipatchOption,e._ts&&(t._ts=(new Date).getTime()),this._cacheHintSupported&&e._enableCacheHint(t);var r=this.canFetchPBF(t);return e._enableEditModeQuantization(t,r),this._applyMaxRecordCountFactor(t,r),{query:t,pbf:r}},_applyMaxRecordCountFactor:function(e,t){var r=this.featureLayer.advancedQueryCapabilities;this.featureLayer._isCacheHintEnabled(e)&&r&&r.supportsMaxRecordCountFactor&&("tile"!==e.resultType&&this.scaleToTileFactor>1&&(e.maxRecordCountFactor=this.scaleToTileFactor),t&&this.maxRecordCountFactor>1&&(e.maxRecordCountFactor=this.maxRecordCountFactor),e.maxRecordCountFactor>5&&(e.maxRecordCountFactor=5))},_addFeatures:function(e){var t,r,a,i,s=this.featureLayer,n=s.objectIdField,h=e.length,o=s._selectedFeatures,u=s.mode===s.constructor.MODE_AUTO;for(s._fireUpdateStart(),s._sortFeatures(e),t=0;t<h;t++)i=(a=e[t]).attributes[n],r=this._addFeatureIIf(i,a),this._incRefCount(i),u&&r!==a&&o[i]&&(r.setGeometry(a.geometry),r.setAttributes(a.attributes));this._applyTimeFilter(!0)}});return r("extend-esri")&&t.setObject("layers._SnapshotMode",u,a),u}));