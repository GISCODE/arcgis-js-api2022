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

var __extends=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();define(["require","exports","../sources/Empty","../support/FeatureSet","../support/IdSet","../support/shared","../../polyfill/promiseUtils","../../../geometry/geometryEngineAsync"],(function(e,t,n,r,i,a,o,s){"use strict";return function(e){function t(t){var n=e.call(this,t)||this;return n._relation="",n._relationGeom=null,n._relationString="",n.declaredClass="esri.arcade.featureset.actions.SpatialFilter",n._relationString=t.relationString,n._parent=t.parentfeatureset,n._maxProcessing=40,n._relation=t.relation,n._relationGeom=t.relationGeom,n}return __extends(t,e),t.prototype._getSet=function(e){var t=this;return null===this._wset?this._ensureLoaded().then((function(){return t._parent._getFilteredSet("esriSpatialRelRelation"!==t._relation?t._relation:t._relation+":"+t._relationString,t._relationGeom,null,null,e)})).then((function(n){return t._checkCancelled(e),t._wset=new i(n._candidates.slice(0),n._known.slice(0),n._ordered,t._clonePageDefinition(n.pagesDefinition)),t._wset})):o.resolve(this._wset)},t.prototype._isInFeatureSet=function(e){var t=this._parent._isInFeatureSet(e);return t===a.IdState.NotInFeatureSet?t:void 0===(t=this._idstates[e])?a.IdState.Unknown:t},t.prototype._getFeature=function(e,t,n){return this._parent._getFeature(e,t,n)},t.prototype._getFeatures=function(e,t,n,r){return this._parent._getFeatures(e,t,n,r)},t.prototype._featureFromCache=function(e){return this._parent._featureFromCache(e)},t.prototype.executeSpatialRelationTest=function(e){if(null===e.geometry)return o.resolve(!1);switch(this._relation){case"esriSpatialRelEnvelopeIntersects":var t=a.shapeExtent(this._relationGeom),n=a.shapeExtent(e.geometry);return s.intersects(t,n);case"esriSpatialRelIntersects":return s.intersects(this._relationGeom,e.geometry);case"esriSpatialRelContains":return s.contains(this._relationGeom,e.geometry);case"esriSpatialRelOverlaps":return s.overlaps(this._relationGeom,e.geometry);case"esriSpatialRelWithin":return s.within(this._relationGeom,e.geometry);case"esriSpatialRelTouches":return s.touches(this._relationGeom,e.geometry);case"esriSpatialRelCrosses":return s.crosses(this._relationGeom,e.geometry);case"esriSpatialRelRelation":return s.relate(this._relationGeom,e.geometry,this._relationString)}},t.prototype._fetchAndRefineFeatures=function(e,t,n){var r=this,s=new i([],e,!1,null),l=Math.min(t,e.length);return this._parent._getFeatures(s,-1,l,n).then((function(){r._checkCancelled(n);for(var t=[],i=0;i<l;i++){var a=r._parent._featureFromCache(e[i]);t.push(r.executeSpatialRelationTest(a))}return o.all(t)})).then((function(n){for(var i=0;i<t;i++)!0===n[i]?r._idstates[e[i]]=a.IdState.InFeatureSet:r._idstates[e[i]]=a.IdState.NotInFeatureSet;return"success"}))},t.prototype._getFilteredSet=function(e,t,n,r,a){var o=this;return this._ensureLoaded().then((function(){return o._parent._getFilteredSet("esriSpatialRelRelation"!==o._relation?o._relation:o._relation+":"+o._relationString,o._relationGeom,n,r,a)})).then((function(e){return o._checkCancelled(a),null!==t?new i(e._candidates.slice(0).concat(e._known.slice(0)),[],e._ordered,o._clonePageDefinition(e.pagesDefinition)):new i(e._candidates.slice(0),e._known.slice(0),e._ordered,o._clonePageDefinition(e.pagesDefinition))}))},t.prototype._stat=function(e,t,n,r,i,a,s){var l=this;return""!==n?o.resolve({calculated:!1}):this._parent._stat(e,t,"esriSpatialRelRelation"!==this._relation?this._relation:this._relation+":"+this._relationString,this._relationGeom,i,a,s).then((function(o){return!1===o.calculated?null===i&&""===n&&null===r?l._manualStat(e,t,a,s):{calculated:!1}:o}))},t.prototype._canDoAggregates=function(e,t,n,r,i){return""!==n||null!==r?o.resolve(!1):null===this._parent?o.resolve(!1):this._parent._canDoAggregates(e,t,"esriSpatialRelRelation"!==this._relation?this._relation:this._relation+":"+this._relationString,this._relationGeom,i)},t.prototype._getAggregatePagesDataSourceDefinition=function(e,t,n,r,i,a,s){return null===this._parent?o.reject(new Error("Should never be called")):this._parent._getAggregatePagesDataSourceDefinition(e,t,"esriSpatialRelRelation"!==this._relation?this._relation:this._relation+":"+this._relationString,this._relationGeom,i,a,s)},t.registerAction=function(){r._featuresetFunctions.intersects=function(e){return null==e?new n({parentfeatureset:this}):new t({parentfeatureset:this,relation:"esriSpatialRelIntersects",relationGeom:e})},r._featuresetFunctions.envelopeIntersects=function(e){return null==e?new n({parentfeatureset:this}):new t({parentfeatureset:this,relation:"esriSpatialRelEnvelopeIntersects",relationGeom:e})},r._featuresetFunctions.contains=function(e){return null==e?new n({parentfeatureset:this}):new t({parentfeatureset:this,relation:"esriSpatialRelContains",relationGeom:e})},r._featuresetFunctions.overlaps=function(e){return null==e?new n({parentfeatureset:this}):new t({parentfeatureset:this,relation:"esriSpatialRelOverlaps",relationGeom:e})},r._featuresetFunctions.within=function(e){return null==e?new n({parentfeatureset:this}):new t({parentfeatureset:this,relation:"esriSpatialRelWithin",relationGeom:e})},r._featuresetFunctions.touches=function(e){return null==e?new n({parentfeatureset:this}):new t({parentfeatureset:this,relation:"esriSpatialRelTouches",relationGeom:e})},r._featuresetFunctions.crosses=function(e){return null==e?new n({parentfeatureset:this}):new t({parentfeatureset:this,relation:"esriSpatialRelCrosses",relationGeom:e})},r._featuresetFunctions.relate=function(e,r){return null==e?new n({parentfeatureset:this}):new t({parentfeatureset:this,relation:"esriSpatialRelRelation",relationGeom:e,relationString:r})}},t}(r)}));