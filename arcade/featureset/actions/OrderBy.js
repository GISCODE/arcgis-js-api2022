/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/languageUtils","../support/FeatureSet","../support/IdSet","../support/OrderbyClause","../../../core/promiseUtils"],(function(e,t,n,r,i,s){"use strict";return function(u){function a(e){var t;return(t=u.call(this,e)||this)._orderbyclause=null,t.declaredClass="esri.arcade.featureset.actions.OrderBy",t._maxProcessing=100,t._orderbyclause=e.orderbyclause,t._parent=e.parentfeatureset,t}e._inheritsLoose(a,u);var o=a.prototype;return o._getSet=function(e){return null===this._wset?this._ensureLoaded().then((()=>this._getFilteredSet("",null,null,this._orderbyclause,e))).then((t=>(this._checkCancelled(e),this._wset=t,this._wset))):s.resolve(this._wset)},o.manualOrderSet=function(e,t){return this.getIdColumnDictionary(e,[],-1,t).then((e=>{this._orderbyclause.order(e);const t=new r([],[],!0,null);for(let n=0;n<e.length;n++)t._known.push(e[n].id);return t}))},o.getIdColumnDictionary=function(e,n,r,i){if(r<e._known.length-1){const s=this._maxQueryRate();if("GETPAGES"===e._known[r+1])return t.tick(this._parent._expandPagedSet(e,s,0,0,i)).then((()=>this.getIdColumnDictionary(e,n,r,i)));let u=r+1;const a=[];for(;u<e._known.length&&"GETPAGES"!==e._known[u];)a.push(e._known[u]),u++;return r+=a.length,t.tick(this._parent._getFeatureBatch(a,i)).then((t=>{this._checkCancelled(i);for(const e of t)n.push({id:e.attributes[this.objectIdField],feature:e});return this.getIdColumnDictionary(e,n,r,i)}))}return e._candidates.length>0?t.tick(this._refineSetBlock(e,this._maxProcessingRate(),i)).then((()=>(this._checkCancelled(i),this.getIdColumnDictionary(e,n,r,i)))):s.resolve(n)},o._isInFeatureSet=function(e){return this._parent._isInFeatureSet(e)},o._getFeatures=function(e,t,n,r){return this._parent._getFeatures(e,t,n,r)},o._featureFromCache=function(e){if(void 0===this._featureCache[e]){const t=this._parent._featureFromCache(e);if(void 0===t)return;return null===t?null:(this._featureCache[e]=t,t)}return this._featureCache[e]},o._fetchAndRefineFeatures=function(){return s.reject(new Error("Fetch and Refine should not be called in this featureset"))},o._getFilteredSet=function(e,t,n,i,s){return this._ensureLoaded().then((()=>this._parent._getFilteredSet(e,t,n,null===i?this._orderbyclause:i,s))).then((e=>{this._checkCancelled(s);const i=new r(e._candidates.slice(0),e._known.slice(0),e._ordered,this._clonePageDefinition(e.pagesDefinition));let u=!0;return e._candidates.length>0&&(u=!1),!1===i._ordered?this.manualOrderSet(i,s).then((e=>(!1===u&&(null===t&&null===n||(e=new r(e._candidates.slice(0).concat(e._known.slice(0)),[],e._ordered,this._clonePageDefinition(e.pagesDefinition)))),e))):i}))},a.registerAction=function(){n._featuresetFunctions.orderBy=function(e){return""===e?this:new a({parentfeatureset:this,orderbyclause:new i(e)})}},a}(n)}));
