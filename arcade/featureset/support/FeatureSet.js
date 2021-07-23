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

define(["require","exports","../support/FeatureSetIterator","../support/IdSet","../support/shared","./cache","./stats","../../polyfill/promiseUtils","../../polyfill/sql/WhereClause","../../../geometry/geometryEngineAsync","../../../SpatialReference","../../polyfill/sql/FieldsIndex"],(function(e,t,n,r,i,a,o,s,u,c,l,h){"use strict";return function(){function e(e){this.recentlyUsedQueries=null,this.featureSetQueryInterceptor=null,this._idstates=[],this._parent=null,this._wset=null,this._mainSetInUse=null,this._maxProcessing=200,this._maxQuery=500,this._totalCount=-1,this._databaseType=i.FeatureServiceDatabaseType.NotEvaluated,this._databaseTypeProbed=null,this.declaredRootClass="esri.arcade.featureset.support.FeatureSet",this._featureCache=[],this.types=null,this.fields=null,this.geometryType="",this.objectIdField="",this.globalIdField="",this.spatialReference=null,this.hasM=!1,this.hasZ=!1,this._transparent=!1,this.loaded=!1,this._loadPromise=null,this._fieldsIndex=null,e&&e.lrucache&&(this.recentlyUsedQueries=e.lrucache),e&&e.interceptor&&(this.featureSetQueryInterceptor=e.interceptor)}return e.prototype.optimisePagingFeatureQueries=function(e){this._parent&&this._parent.optimisePagingFeatureQueries(e)},e.prototype._hasMemorySource=function(){return!0},e.prototype.prop=function(e,t){return void 0===t?this[e]:(void 0!==this[e]&&(this[e]=t),this)},e.prototype.end=function(){return null!==this._parent&&!0===this._parent._transparent?this._parent.end():this._parent},e.prototype._ensureLoaded=function(){return this.load()},e.prototype.load=function(){var e=this;return null===this._loadPromise&&(this._loadPromise=s.create((function(t,n){if(!0===e._parent.loaded)return e._initialiseFeatureSet(),void t(e);e._parent.load().then((function(){try{e._initialiseFeatureSet(),t(e)}catch(e){n(e)}}),n)}))),this._loadPromise},e.prototype._initialiseFeatureSet=function(){null!==this._parent?(this.fields=this._parent.fields.slice(0),this.geometryType=this._parent.geometryType,this.objectIdField=this._parent.objectIdField,this.globalIdField=this._parent.globalIdField,this.spatialReference=this._parent.spatialReference,this.hasM=this._parent.hasM,this.hasZ=this._parent.hasZ,this.typeIdField=this._parent.typeIdField,this.types=this._parent.types):(this.fields=[],this.typeIdField="",this.objectIdField="",this.globalIdField="",this.spatialReference=new l({wkid:4326}),this.geometryType=i.layerGeometryEsriConstants.point)},e.prototype.getField=function(e,t){var n;return(t=t||this.fields)&&(e=e.toLowerCase(),t.some((function(t){return t&&t.name.toLowerCase()===e&&(n=t),!!n}))),n},e.prototype.getFieldsIndex=function(){return null===this._fieldsIndex&&(this._fieldsIndex=new h(this.fields)),this._fieldsIndex},e.prototype._maxProcessingRate=function(){return null!==this._parent?Math.min(this._maxProcessing,this._parent._maxProcessingRate()):Math.min(this._maxProcessing,this._maxQueryRate())},e.prototype._maxQueryRate=function(){return null!==this._parent?Math.max(this._maxQuery,this._parent._maxQueryRate()):this._maxQuery},e.prototype._checkCancelled=function(e){if(null!==e&&e.aborted)throw new Error("Operation has been cancelled.")},e.prototype.nativeCapabilities=function(){return this._parent.nativeCapabilities()},e.prototype._canDoAggregates=function(e,t,n,r,i){return null===this._parent?s.resolve(!1):this._parent._canDoAggregates(e,t,n,r,i)},e.prototype._getAggregatePagesDataSourceDefinition=function(e,t,n,r,i,a,o){return null===this._parent?s.reject(new Error("Should never be called")):this._parent._getAggregatePagesDataSourceDefinition(e,t,n,r,i,a,o)},e.prototype._getAgregagtePhysicalPage=function(e,t,n){return null===this._parent?s.reject(new Error("Should never be called")):this._parent._getAgregagtePhysicalPage(e,t,n)},e.prototype.databaseType=function(){var e=this;if(this._databaseType===i.FeatureServiceDatabaseType.NotEvaluated){if(null!==a.applicationCache){var t=a.applicationCache.getDatabaseType(this._cacheableFeatureSetSourceKey());if(null!==t)return t}if(null!==this._databaseTypeProbed)return this._databaseTypeProbed;var n=[{thetype:i.FeatureServiceDatabaseType.SqlServer,testwhere:"(CAST( '2015-01-01' as DATETIME) = CAST( '2015-01-01' as DATETIME)) AND OBJECTID<0"},{thetype:i.FeatureServiceDatabaseType.Oracle,testwhere:"(TO_DATE('2003-11-18','YYYY-MM-DD') = TO_DATE('2003-11-18','YYYY-MM-DD')) AND OBJECTID<0"},{thetype:i.FeatureServiceDatabaseType.StandardisedNoInterval,testwhere:"(date '2015-01-01 10:10:10' = date '2015-01-01 10:10:10') AND OBJECTID<0"}],r=s.create((function(t,r){e._getDatabaseTypeImpl(n,0).then((function(n){e._databaseType=n,t(e._databaseType)}),(function(e){r(e)}))}));return null!==a.applicationCache&&(a.applicationCache.setDatabaseType(this._cacheableFeatureSetSourceKey(),r),r=r.catch((function(t){throw a.applicationCache.clearDatabaseType(e._cacheableFeatureSetSourceKey()),t}))),this._databaseTypeProbed=r,this._databaseTypeProbed}return s.resolve(this._databaseType)},e.prototype._cacheableFeatureSetSourceKey=function(){return"MUSTBESET"},e.prototype._getDatabaseTypeImpl=function(e,t){var n=this;return t>=e.length?s.resolve(i.FeatureServiceDatabaseType.StandardisedNoInterval):this._runDatabaseProbe(e[t].testwhere).then((function(r){return!0===r?e[t].thetype:n._getDatabaseTypeImpl(e,t+1)}))},e.prototype._runDatabaseProbe=function(e){return null!==this._parent?this._parent._runDatabaseProbe(e):s.reject(new Error("Not Implemented"))},e.prototype.isTable=function(){return this._parent.isTable()},e.prototype._featureFromCache=function(e){if(void 0!==this._featureCache[e])return this._featureCache[e]},e.prototype._isInFeatureSet=function(e){return i.IdState.Unknown},e.prototype._getSet=function(e){throw new Error("Not implemented in abstract class")},e.prototype._getFeature=function(e,t,n){var r=this;try{return this._checkCancelled(n),void 0!==this._featureFromCache(t)?s.resolve(this._featureFromCache(t)):this._getFeatures(e,t,this._maxProcessingRate(),n).then((function(){return r._checkCancelled(n),void 0!==r._featureFromCache(t)?r._featureFromCache(t):s.reject(new Error("Feature Not Found"))}))}catch(e){return s.reject(e)}},e.prototype._getFeatureBatch=function(e,t){var n=this;try{this._checkCancelled(t);var i=new r([],e,!1,null),a=[];return this._getFeatures(i,-1,e.length,t).then((function(){n._checkCancelled(t);for(var r=0,i=e;r<i.length;r++){var o=i[r];void 0!==n._featureFromCache(o)&&a.push(n._featureFromCache(o))}return a}))}catch(e){return s.reject(e)}},e.prototype._getFeatures=function(e,t,n,r){return s.resolve("success")},e.prototype._getFilteredSet=function(e,t,n,r,i){throw new Error("Not implemented in abstract class")},e.prototype._refineSetBlock=function(e,t,n){var r=this;try{if(!0===this._checkIfNeedToExpandCandidatePage(e,this._maxQueryRate()))return this._expandPagedSet(e,this._maxQueryRate(),0,0,n).then((function(){return r._refineSetBlock(e,t,n)}));this._checkCancelled(n);var i=e._candidates.length;this._refineKnowns(e,t);var a=i-e._candidates.length;return 0===e._candidates.length?s.resolve(e):a>=t?s.resolve(e):this._refineIfParentKnown(e,t-a,n).then((function(){if(r._checkCancelled(n),r._refineKnowns(e,t-a),(a=i-e._candidates.length)<t&&e._candidates.length>0){var o=t-a,s=r._prepareFetchAndRefineSet(e._candidates);return r._fetchAndRefineFeatures(s,s.length>o?o:e._candidates.length,n).then((function(){return r._checkCancelled(n),r._refineKnowns(e,t-a),e}))}return e}))}catch(e){return s.reject(e)}},e.prototype._fetchAndRefineFeatures=function(e,t,n){return null},e.prototype._prepareFetchAndRefineSet=function(e){for(var t=[],n=0;n<e.length;n++)this._isPhysicalFeature(e[n])&&t.push(e[n]);return t},e.prototype._isPhysicalFeature=function(e){return null===this._parent||this._parent._isPhysicalFeature(e)},e.prototype._refineKnowns=function(e,t){var n=0,r=null,a=[];t=this._maxQueryRate();for(var o=0;o<e._candidates.length&&"GETPAGES"!==e._candidates[o];o++){var s=!1,u=this._candidateIdTransform(e._candidates[o]);u!==e._candidates[o]&&(s=!0);var c=this._isInFeatureSet(u);if(c===i.IdState.InFeatureSet)!0===s?e._known.indexOf(u)<0&&(e._known.push(u),n+=1):(e._known.push(e._candidates[o]),n+=1),null===r?r={start:o,end:o}:r.end===o-1?r.end=o:(a.push(r),r={start:o,end:o});else if(c===i.IdState.NotInFeatureSet)null===r?r={start:o,end:o}:r.end===o-1?r.end=o:(a.push(r),r={start:o,end:o}),n+=1;else if(c===i.IdState.Unknown&&(n+=1,!0===e._ordered))break;if(n>=t)break}null!==r&&a.push(r);for(var l=a.length-1;l>=0;l--)e._candidates.splice(a[l].start,a[l].end-a[l].start+1)},e.prototype._refineIfParentKnown=function(e,t,n){var i=new r([],[],e._ordered,null);return i._candidates=e._candidates.slice(0),this._parent._refineSetBlock(i,t,n)},e.prototype._candidateIdTransform=function(e){return this._parent._candidateIdTransform(e)},e.prototype._checkIfNeedToExpandKnownPage=function(e,t){if(null===e.pagesDefinition)return!1;for(var n=0,r=e._lastFetchedIndex;r<e._known.length;r++){if("GETPAGES"===e._known[r])return!0;if(void 0===this._featureCache[e._known[r]]&&(n+=1)>=t)break}return!1},e.prototype._checkIfNeedToExpandCandidatePage=function(e,t){if(null===e.pagesDefinition)return!1;for(var n=0,r=0;r<e._candidates.length;r++){if("GETPAGES"===e._candidates[r])return!0;if((n+=1)>=t)break}return!1},e.prototype._expandPagedSet=function(e,t,n,r,i){return null===this._parent?s.reject(new Error("Parent Paging not implemented")):this._parent._expandPagedSet(e,t,n,r,i)},e.prototype._expandPagedSetFeatureSet=function(e,t,n,r,i){var a=this;return e._known.length>0&&"GETPAGES"===e._known[e._known.length-1]&&(r=1),0===r&&e._candidates.length>0&&"GETPAGES"===e._candidates[e._candidates.length-1]&&(r=2),0===r?s.resolve("finished"):this._getPage(e,r,i).then((function(r){return n+r<t?a._expandPagedSet(e,t,n+r,0,i):"success"}))},e.prototype._getPage=function(e,t,n){var r=this,i=1===t?e._known:e._candidates;if(e.pagesDefinition.internal.set.length>e.pagesDefinition.resultOffset||!0===e.pagesDefinition.internal.fullyResolved){i.length=i.length-1;for(var a=0,o=0;o<e.pagesDefinition.resultRecordCount&&!(e.pagesDefinition.resultOffset+o>=e.pagesDefinition.internal.set.length);o++)i[i.length]=e.pagesDefinition.internal.set[e.pagesDefinition.resultOffset+o],a++;e.pagesDefinition.resultOffset+=a;var u=!1;return!0===e.pagesDefinition.internal.fullyResolved&&e.pagesDefinition.internal.set.length<=e.pagesDefinition.resultOffset&&(u=!0),!1===u&&i.push("GETPAGES"),s.resolve(a)}return this._getPhysicalPage(e,t,n).then((function(){return r._getPage(e,t,n)}))},e.prototype._getPhysicalPage=function(e,t,n){return null},e.prototype._clonePageDefinition=function(e){return null===this._parent?null:this._parent._clonePageDefinition(e)},e.prototype._first=function(e){return this.iterator(e).next()},e.prototype.first=function(e){return this._first(e)},e.prototype.calculateStatistic=function(e,t,n,r){var i=this;return this._ensureLoaded().then((function(){return i._stat(e,t,"",null,null,n,r).then((function(a){return!1===a.calculated?i._manualStat(e,t,n,r).then((function(e){return e.result})):a.result}))}))},e.prototype._manualStat=function(e,t,n,r){switch(e.toLowerCase()){case"count":return o.count(this,r).then((function(e){return{calculated:!0,result:e}}));case"distinct":return o.distinct(this,t,n).then((function(e){return{calculated:!0,result:e}}));case"avg":case"mean":return o.mean(this,t,r).then((function(e){return{calculated:!0,result:e}}));case"stdev":return o.stdev(this,t,r).then((function(e){return{calculated:!0,result:e}}));case"variance":return o.variance(this,t,r).then((function(e){return{calculated:!0,result:e}}));case"sum":return o.sum(this,t,r).then((function(e){return{calculated:!0,result:e}}));case"min":return o.min(this,t,r).then((function(e){return{calculated:!0,result:e}}));case"max":return o.max(this,t,r).then((function(e){return{calculated:!0,result:e}}));default:return s.resolve({calculated:!0,result:0})}},e.prototype._stat=function(e,t,n,r,i,a,o){var s=this;return this._parent._stat(e,t,n,r,i,a,o).then((function(u){return!1===u.calculated?null===i&&""===n&&null===r?s._manualStat(e,t,a,o):{calculated:!1}:u}))},e.prototype._unionAllGeomSelf=function(e){var t=this,n=this.iterator(this._defaultTracker(e)),r=[];return s.create((function(e,i){t._unionShapeInBatches(r,n,e,i)}))},e.prototype._unionAllGeom=function(e){var t=this;return s.create((function(n,r){var i=t.iterator(t._defaultTracker(e));t._unionShapeInBatches([],i,n,r)}))},e.prototype._unionShapeInBatches=function(e,t,n,r){var i=this;t.next().then((function(a){try{null!==a&&null!==a.geometry&&e.push(a.geometry),e.length>30||null===a&&e.length>1?c.union(e).then((function(o){try{null===a?n(o):(e=[o],i._unionShapeInBatches(e,t,n,r))}catch(e){r(e)}}),r):null===a?1===e.length?n(e[0]):n(null):i._unionShapeInBatches(e,t,n,r)}catch(e){r(e)}}),r)},e.prototype.iterator=function(e){return new n(this,e)},e.prototype.intersection=function(t,n){return void 0===n&&(n=!1),e._featuresetFunctions.intersection.bind(this)(t,n)},e.prototype.difference=function(t,n,r){return void 0===n&&(n=!1),void 0===r&&(r=!0),e._featuresetFunctions.difference.bind(this)(t,n,r)},e.prototype.symmetricDifference=function(t,n,r){return void 0===n&&(n=!1),void 0===r&&(r=!0),e._featuresetFunctions.symmetricDifference.bind(this)(t,n,r)},e.prototype.morphShape=function(t,n,r,i){return void 0===r&&(r="unknown"),void 0===i&&(i=null),e._featuresetFunctions.morphShape.bind(this)(t,n,r,i)},e.prototype.morphShapeAndAttributes=function(t,n,r){return void 0===r&&(r="unknown"),e._featuresetFunctions.morphShapeAndAttributes.bind(this)(t,n,r)},e.prototype.union=function(t,n){return void 0===n&&(n=!1),e._featuresetFunctions.union.bind(this)(t,n)},e.prototype.intersects=function(t){return e._featuresetFunctions.intersects.bind(this)(t)},e.prototype.envelopeIntersects=function(t){return e._featuresetFunctions.envelopeIntersects.bind(this)(t)},e.prototype.contains=function(t){return e._featuresetFunctions.contains.bind(this)(t)},e.prototype.overlaps=function(t){return e._featuresetFunctions.overlaps.bind(this)(t)},e.prototype.relate=function(t,n){return e._featuresetFunctions.relate.bind(this)(t,n)},e.prototype.within=function(t){return e._featuresetFunctions.within.bind(this)(t)},e.prototype.touches=function(t){return e._featuresetFunctions.touches.bind(this)(t)},e.prototype.top=function(t){return e._featuresetFunctions.top.bind(this)(t)},e.prototype.crosses=function(t){return e._featuresetFunctions.crosses.bind(this)(t)},e.prototype.buffer=function(t,n,r,i){return void 0===i&&(i=!0),e._featuresetFunctions.buffer.bind(this)(t,n,r,i)},e.prototype.filter=function(t,n){return void 0===n&&(n=null),e._featuresetFunctions.filter.bind(this)(t,n)},e.prototype.orderBy=function(t){return e._featuresetFunctions.orderBy.bind(this)(t)},e.prototype.dissolve=function(t,n){return e._featuresetFunctions.dissolve.bind(this)(t,n)},e.prototype.groupby=function(t,n){return e._featuresetFunctions.groupby.bind(this)(t,n)},e.prototype.reduce=function(e,t,n){var r=this;return void 0===t&&(t=null),s.create((function(i,a){r._reduceImpl(r.iterator(r._defaultTracker(n)),e,t,0,i,a,0)}))},e.prototype._reduceImpl=function(e,t,n,r,i,a,o){var u=this;try{if(++o>1e3)return void setTimeout((function(){o=0,u._reduceImpl(e,t,n,r,i,a,o)}));e.next().then((function(c){try{if(null===c)i(n);else{var l=t(n,c,r,u);s.isPromiseLike(l)?l.then((function(n){u._reduceImpl(e,t,n,r+1,i,a,o)}),a):u._reduceImpl(e,t,l,r+1,i,a,o)}}catch(e){a(e)}}),a)}catch(e){a(e)}},e.prototype.removeField=function(t){return e._featuresetFunctions.removeField.bind(this)(t)},e.prototype.addField=function(t,n,r){return void 0===r&&(r=null),e._featuresetFunctions.addField.bind(this)(t,n,r)},e.prototype.sumArea=function(e,t,n){void 0===t&&(t=!1);var r=i.convertSquareUnitsToCode(e);return this.reduce((function(e,n){return null===n.geometry?0:t?c.geodesicArea(n.geometry,r).then((function(t){return e+t})):c.planarArea(n.geometry,r).then((function(t){return e+t}))}),0,n)},e.prototype.sumLength=function(e,t,n){void 0===t&&(t=!1);var r=i.convertLinearUnitsToCode(e);return this.reduce((function(e,n){return null===n.geometry?0:t?c.geodesicLength(n.geometry,r).then((function(t){return e+t})):c.planarLength(n.geometry,r).then((function(t){return e+t}))}),0,n)},e.prototype._substituteVars=function(e,t){if(null!==t){var n={};for(var r in t)n[r.toLowerCase()]=t[r];e.parameters=n}},e.prototype.distinct=function(e,t,n,r){var i=this;return void 0===t&&(t=1e3),void 0===n&&(n=null),this.load().then((function(){var a=u.WhereClause.create(e,i.getFieldsIndex());return i._substituteVars(a,n),i.calculateStatistic("distinct",a,t,i._defaultTracker(r))}))},e.prototype.min=function(e,t,n){var r=this;return void 0===t&&(t=null),this.load().then((function(){var i=u.WhereClause.create(e,r.getFieldsIndex());return r._substituteVars(i,t),r.calculateStatistic("min",i,-1,r._defaultTracker(n))}))},e.prototype.max=function(e,t,n){var r=this;return void 0===t&&(t=null),this.load().then((function(){var i=u.WhereClause.create(e,r.getFieldsIndex());return r._substituteVars(i,t),r.calculateStatistic("max",i,-1,r._defaultTracker(n))}))},e.prototype.avg=function(e,t,n){var r=this;return void 0===t&&(t=null),this.load().then((function(){var i=u.WhereClause.create(e,r.getFieldsIndex());return r._substituteVars(i,t),r.calculateStatistic("avg",i,-1,r._defaultTracker(n))}))},e.prototype.sum=function(e,t,n){var r=this;return void 0===t&&(t=null),this.load().then((function(){var i=u.WhereClause.create(e,r.getFieldsIndex());return r._substituteVars(i,t),r.calculateStatistic("sum",i,-1,r._defaultTracker(n))}))},e.prototype.stdev=function(e,t,n){var r=this;return void 0===t&&(t=null),this.load().then((function(){var i=u.WhereClause.create(e,r.getFieldsIndex());return r._substituteVars(i,t),r.calculateStatistic("stdev",i,-1,r._defaultTracker(n))}))},e.prototype.variance=function(e,t,n){var r=this;return void 0===t&&(t=null),this.load().then((function(){var i=u.WhereClause.create(e,r.getFieldsIndex());return r._substituteVars(i,t),r.calculateStatistic("variance",i,-1,r._defaultTracker(n))}))},e.prototype.count=function(e){var t=this;return this.load().then((function(){return t.calculateStatistic("count",u.WhereClause.create("1",t.getFieldsIndex()),-1,t._defaultTracker(e))}))},e.prototype._defaultTracker=function(e){return e||{aborted:!1}},e.prototype.forEach=function(e,t){var n=this;return s.create((function(r,i){n._forEachImpl(n.iterator(n._defaultTracker(t)),e,n,r,i,0)}))},e.prototype._forEachImpl=function(e,t,n,r,i,a){var o=this;try{if(++a>1e3)return void setTimeout((function(){a=0,o._forEachImpl(e,t,n,r,i,a)}),0);e.next().then((function(u){try{if(null===u)r(n);else{var c=t(u);null==c?o._forEachImpl(e,t,n,r,i,a):s.isPromiseLike(c)?c.then((function(){try{o._forEachImpl(e,t,n,r,i,a)}catch(e){i(e)}}),i):o._forEachImpl(e,t,n,r,i,a)}}catch(e){i(e)}}),i)}catch(e){i(e)}},e.prototype.convertToJSON=function(e){for(var t={layerDefinition:{geometryType:this.geometryType,fields:[]},featureSet:{features:[],geometryType:this.geometryType}},n=0;n<this.fields.length;n++)t.layerDefinition.fields.push(i.esriFieldToJson(this.fields[n]));return this.reduce((function(e,n){var r={geometry:n.geometry&&n.geometry.toJson(),attributes:{}};for(var i in n.attributes)r.attributes[i]=n.attributes[i];return t.featureSet.features.push(r),1}),0,e).then((function(){return t}))},e.prototype.castToText=function(){return"object, FeatureSet"},e.prototype.queryAttachments=function(e,t,n,r){return this._parent.queryAttachments(e,t,n,r)},e.prototype.serviceUrl=function(){return this._parent.serviceUrl()},e.prototype.subtypes=function(){return this.typeIdField?{subtypeField:this.typeIdField,subtypes:this.types?this.types.map((function(e){return{name:e.name,code:e.id}})):[]}:null},e.prototype.relationshipMetaData=function(){return this._parent.relationshipMetaData()},Object.defineProperty(e.prototype,"gdbVersion",{get:function(){return this._parent?this._parent.gdbVersion:""},enumerable:!1,configurable:!0}),e.prototype.schema=function(){for(var e=[],t=0,n=this.fields;t<n.length;t++){var r=n[t];e.push(i.esriFieldToJson(r))}return{objectIdField:this.objectIdField,globalIdField:this.globalIdField,geometryType:void 0===i.layerGeometryEsriRestConstants[this.geometryType]?"":i.layerGeometryEsriRestConstants[this.geometryType],fields:e}},e.prototype.convertToText=function(e,t){var n=this;return"schema"===e?this._ensureLoaded().then((function(){return JSON.stringify(n.schema())})):"featureset"===e?this._ensureLoaded().then((function(){var e=[];return n.reduce((function(t,n){var r={geometry:n.geometry?n.geometry.toJson():null,attributes:n.attributes};return null!==r.geometry&&r.geometry.spatialReference&&delete r.geometry.spatialReference,e.push(r),1}),0,t).then((function(){var t=n.schema();return t.features=e,t.spatialReference=n.spatialReference.toJson(),JSON.stringify(t)}))})):s.resolve(this.castToText())},e.prototype.getFeatureByObjectId=function(e,t){return this._parent.getFeatureByObjectId(e,t)},e.prototype.getOwningSystemUrl=function(){return this._parent.getOwningSystemUrl()},e.prototype.getIdentityUser=function(){return this._parent.getIdentityUser()},e._featuresetFunctions={},e}()}));