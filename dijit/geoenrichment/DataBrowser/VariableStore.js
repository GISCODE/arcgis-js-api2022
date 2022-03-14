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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","esri/dijit/geoenrichment/Deferred","dojo/store/util/SimpleQueryEngine","dojo/store/util/QueryResults","./DeferredStore","./KeywordFilter"],(function(e,t,a,i,r,s,n,o){return e(null,{categories:null,dataCollections:null,favorites:null,idProperty:"fullName",_data:null,_variables:null,queryEngine:r,constructor:function(){this.categories=new n({syncQuery:t.hitch(this,this._queryCategories)}),this.dataCollections=new n({syncQuery:t.hitch(this,this._queryDataCollections)})},_queryCategories:function(e,t){var a;if("object"==typeof(e=this._cleanUpCountryID(e))&&e.dataCollectionID){var i=this.dataCollections.get(e.dataCollectionID);delete e.dataCollectionID,a=i?i.categories:[]}else a=this.categories.data;return this.categories.queryEngine(e,t)(a)},_queryDataCollections:function(e,t){var a;if("object"==typeof(e=this._cleanUpCountryID(e))&&e.categoryID){var i=this.categories.get(e.categoryID);delete e.categoryID,a=i?i.dataCollections:[]}else a=this.dataCollections.data;return this.dataCollections.queryEngine(e,t)(a)},_cleanUpCountryID:function(e){return"object"==typeof e&&"countryID"in(e=t.mixin({},e))&&delete e.countryID,e},_clearAllStores:function(){this._data=[],this._variables={},this.categories.setData(),this.dataCollections.setData()},synchronize:function(e){return(new i).resolve()},get:function(e){return this._variables[e]||null},getIdentity:function(e){return e&&e[this.idProperty]||null},query:function(e,t){return this._asyncQuery(e,t)},_asyncQuery:function(e,a,i){return s(n.resolveCallback(i&&i._resolver||this.categories.resolver,e,t.hitch(this,this._syncQuery,e,a,i)))},_syncQuery:function(e,a,i){var r={},s=[i&&i.queryFilter||t.hitch(this,this.queryFilter)];if("function"==typeof e)s.push(e);else{var n,l;for(var c in e=e||{})switch(c){case"countryID":break;case"categoryID":case"dataCollectionID":r[c]=e[c];break;case"searchString":var u=new o(e[c]);s.push((function(e){return u.match(e)}));break;case"favorites":var h=e[c];h&&(h=i&&void 0!==i.favorites?i.favorites:this.favorites,s.push(t.hitch(this,(function(e){return h&&h.contains&&h.contains(this.getIdentity(e))}))));break;case"filters":var d=this._prepareFilterHash(e[c]);d&&s.push((function(e){for(var t in e.filteringTags)if(d[t]||d["*"])return!0;return!1}));break;case"additionalData":l=e[c];break;default:(n=n||{})[c]=e[c]}n&&s.push((function(e){for(var t in n){var a=n[t];if(a&&a.test){if(!a.test(e[t],e))return!1}else if(a!=e[t])return!1}return!0}))}return e=this._composeQuery(s),r.dataCollectionID?this._queryDCVariables(r.dataCollectionID,e,a,l):r.categoryID?this._queryCategoryVariables(r.categoryID,e,a,l):this._queryAllVariables(e,a,l)},_queryDCVariables:function(e,t,a,i){var r=this.dataCollections.get(e);return!r&&i&&(r=i.getDataCollection(e)),r&&this._query(r.getVisibleVariables(),t,a)||[]},_queryCategoryVariables:function(e,t,a,i){var r=this.categories.get(e);return!r&&i&&(r=i.getCategory(e)),r&&this._query(r.data,t,a)||[]},_queryAllVariables:function(e,t,a){return this._query(this._data,e,t,a&&a.getVariables())},_composeQuery:function(e){return 1==e.length?e[0]:function(t){return a.every(e,(function(e){return e(t)}))}},queryFilter:function(e){return!e.missedInCategories},_query:function(e,t,a,i){var r=e.length;this._addAdditionalData(e,i);var s=this.queryEngine(t,a)(e);return e.length=r,s},_addAdditionalData:function(e,t){a.forEach(t,(function(t){t instanceof Array?this._addAdditionalData(e,t):t&&e.push(t)}),this)},getPopularVariables:function(e,t,a){return e&&e.getPopularVariables?e.getPopularVariables(t,a):[]},getRefineFilters:function(e){var t={};if(e.dataCollectionID){var a=this.dataCollections.get(e.dataCollectionID);!a&&e.additionalData&&(a=e.additionalData.getDataCollection(e.dataCollectionID)),a&&a.filters&&this._combineFilters(a.filters,t)}else if(e.categoryID){var i=this.categories.get(e.categoryID);!i&&e.additionalData&&(i=e.additionalData.getCategory(e.categoryID)),i&&this._collectCategoryFilters(i,t)}else this._collectAllFilters(t,e.additionalData);var r=this._prepareFilterHash(e.filters);if(r&&!r["*"]){var s=t;for(var n in t={},s)r[n]&&(t[n]=s[n])}return t},_prepareFilterHash:function(e){if("string"==typeof e&&(e=e.split(",")),!e||!e.length)return null;var i={};return a.forEach(e,(function(e){i[t.trim(e)]=!0})),i},_collectAllFilters:function(e,t){a.forEach(this.categories.data,(function(t){this._collectCategoryFilters(t,e)}),this),a.forEach(t&&t.getCategories(),(function(t){this._collectCategoryFilters(t,e)}),this)},_collectCategoryFilters:function(e,t){a.forEach(e.dataCollections,(function(e){this._combineFilters(e.filters,t)}),this)},_combineFilters:function(e,a){for(var i in e){var r=e[i],s=a[r.id];s?this._mergeFilter(s,r):(s=t.mixin({},r),a[r.id]=s)}},_mergeFilter:function(e,t){if(e.type==t.type)if("Range"==e.type){var i=e.rangeMin,r=t.rangeMin;!isNaN(i)&&!isNaN(r)&&i>r&&(e.rangeMin=r),i=e.rangeMax,r=t.rangeMax,!isNaN(i)&&!isNaN(r)&&i<r&&(e.rangeMax=r)}else i=this._arrayToObject(e.enumValues.split(",")),r=t.enumValues.split(","),a.forEach(r,(function(t){i[t]||(e.enumValues+=","+t)}))},getStates:function(e){return null},_processDataCollections:function(e,i){i=i||{variables:{},categories:{},dataCollections:[]},a.forEach(e,(function(e){if(!this._isDataCollectionDisallowed(e)){var r=e.variables||e.data,s=e.id||e.dataCollectionID;e=t.mixin({id:s},e.metadata),a.forEach(e.filters,(function(e){this._prepareFilter(e)}),this),e.filters=this._arrayToObject(e.filters,"id"),e.hash={},e.data=e.variables=[],e.hasVariable=function(e){var t=e&&e.id;return!(!t||void 0===this.hash[t.toUpperCase()])},e.getVisibleVariables=function(){return a.filter(this.data,(function(e){return this.hash[e.id.toUpperCase()]}),this)};var n=[];a.forEach(e.categories,(function(t){(t=this._prepareCategory(t,e,i))&&n.push(t)}),this),e.categories=n,a.forEach(r,(function(t){this._processVariable(t,e,i)}),this),i.dataCollections.push(e)}}),this);var r=this.categories.queryEngine({},{sort:[{attribute:"displayOrder",descending:!0}]})(this._objectToArray(i.categories));return this.categories.setData(r),this.dataCollections.setData(i.dataCollections),i},_prepareFilter:function(e){"Range"==e.type?(e.rangeMin=Number(e.rangeMin),e.rangeMin||(e.rangeMin=0),e.rangeMax=Number(e.rangeMax)):e.enumValues=this._trimArray(e.enumValues.split(",")).join(",")},_prepareCategory:function(e,t,a){var i=Number(e.displayOrder)||0,r=a.categories[e.id];if(r)r.displayOrder=Math.max(i,r.displayOrder);else{(r=e).hash={},r.data=[],r.dataCollections=[],r.displayOrder=i,r.popularityHash={};var s=this;r.getPopularVariables=function(e,t){return this.popularityArray||(this.popularityArray=s._objectToArray(this.popularityHash)),s._queryPopularVariables(this.popularityArray,e,t)},a.categories[e.id]=r}return r.dataCollections.push(t),r},_queryPopularVariables:function(e,t,a){for(var i=this,r=a&&a.queryFilter||this.queryFilter,s=this.queryEngine((function(e){var t=i.get(e.id);return!!t&&r(t)}),t)(e),n=0;n<s.length;n++){var o=s[n];s[n]=this.get(o.id)}return s},_processVariable:function(e,i,r){var s=e.popularity;if(void 0!==s&&(delete e.popularity,s=Number(s)),i.categories&&i.categories.length||(e.missedInCategories=!0),!this._isVariableDisallowed(e)){this._prepareVariable(e);var n=this._createUniqueVariableId(e).toUpperCase(),o=i.id+"."+e.id,l=this._isVariableAllowedInCategories(e,i),c=r.variables[n];if(c){var u=!e.missedInCategories,h=c.hideInDataBrowser&&e.hideInDataBrowser,d=c.missedInCategories?e.__sourceDesc||c.__sourceDesc:c.__sourceDesc||e.__sourceDesc;c.missedInCategories&&u&&delete c.missedInCategories,u&&Object.keys(e.filteringTags).length&&(Object.keys(c.filteringTags).length?(t.mixin(e.filteringTags,c.filteringTags),e.indexBase=c.indexBase||e.indexBase,e[this.idProperty]=c[this.idProperty]):(e[this.idProperty]=o,d=e.__sourceDesc||c.__sourceDesc),t.mixin(c,e)),c.__sourceDesc=d,d&&(c.description=d),c.hideInDataBrowser=!!h}else(c=e)[this.idProperty]=o,r.variables[n]=c,this._data.push(c);this._registerVariable(c,o);var f=(o=c[this.idProperty]).toUpperCase();i.hasVariable(c)||(i.hash[c.id]=!!l,i.data.push(c)),l&&a.forEach(i.categories,(function(e){if(e.hash[f]||(e.hash[f]=c,e.data.push(c)),s){var t=e.popularityHash[f];t?t.popularity<s&&(t.popularity=s):(t={id:o,popularity:s},e.popularityHash[f]=t)}}),this)}},_isDataCollectionDisallowed:function(e){return!e.metadata||!e.metadata.categories},_isVariableDisallowed:function(e){return!e.fieldCategory},_createUniqueVariableId:function(e){return e.id+"."+e.alias},_registerVariable:function(e,t){this._variables[t]=e},_isVariableAllowedInCategories:function(e,t){return!0},_prepareVariable:function(e){e.id=e.id.toUpperCase(),e.units=e.units&&e.units.toUpperCase(),e.filteringTags=this._arrayToObject(e.filteringTags,"id"),e.percentBase=e.percentBase||null,e.percentBaseAlias=e.percentBaseAlias||null,e.averageBase=e.averageBase||null,e.averageBaseAlias=e.averageBaseAlias||null,e.indexBase=e.indexBase||null,e.__sourceDesc=e.description,e.description||(e.description=e.alias)},_trimArray:function(e){for(var a=0;a<e.length;a++)e[a]=t.trim(e[a]);return e},_objectToArray:function(e){var t=[];for(var a in e)t.push(e[a]);return t},_arrayToObject:function(e,t){var i={};return a.forEach(e,(function(e){var a=t?e[t]:e;i[a]=e})),i}})}));