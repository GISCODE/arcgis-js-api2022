/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../Graphic","../../../core/Accessor","../../../core/arrayUtils","../../../core/Collection","../../../core/Error","../../../core/lang","../../../core/Logger","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../../rest/support/AttachmentQuery"],(function(e,t,r,n,o,i,s,a,u,c,h,y,l){"use strict";const d="esri.widgets.FeatureTable.support.FeatureStore",p=u.getLogger(d);function f(e,t,r){p.error(new s(e,t,r))}let _=function(t){function n(e){var r;return(r=t.call(this,e)||this)._loaded=!1,r._loadError=!1,r._loading=!1,r._editOperationQueue=[],r._queryOperationQueue=[],r._objectIdCache=new i,r._hasStaleCache=!1,r.count=0,r.failures=new i,r.itemCache=new i,r.relatedRecordsEnabled=!1,r}e._inheritsLoose(n,t);var u=n.prototype;return u.destroy=function(){this.layer=null,this.itemCache&&this.itemCache.destroy(),this.failures&&this.failures.destroy(),this._set("itemCache",null)},u.load=function(){var t=e._asyncToGenerator((function*(){this._reset();const{layer:e}=this;if(!e)return Promise.resolve();this._loading=!0,this.notifyChange("state");try{yield e.when(),yield this._syncLayerInfo(),this._loading=!1,this._loaded=!0,this.notifyChange("state")}catch(t){throw this._reset(),this._loadError=!0,this.notifyChange("state"),f("store:load-error","An error ocurred.",{error:t}),t}}));function r(){return t.apply(this,arguments)}return r}(),u.refreshLayerInfo=function(){var t=e._asyncToGenerator((function*(){return this._syncLayerInfo()}));function r(){return t.apply(this,arguments)}return r}(),u.addItems=function(){var t=e._asyncToGenerator((function*(e){}));function r(e){return t.apply(this,arguments)}return r}(),u.fetchItems=function(){var t=e._asyncToGenerator((function*(e){const{page:t,pageSize:r}=e,n=t*r,o=n+r,{layer:i,state:s}=this;if(!i||"loaded"!==s)return Promise.resolve([]);this.notifyChange("querying");const a=yield this._query({start:n,num:o,page:t,pageSize:r});return this.notifyChange("state"),a}));function r(e){return t.apply(this,arguments)}return r}(),u.verifyFeaturesByObjectId=function(){var t=e._asyncToGenerator((function*(e){const{layer:t,state:r}=this;if(!t||"loaded"!==r)return Promise.resolve([]);const{features:n}=yield this._verifyFeaturesByObjectId(e);return e.map((e=>!!n.find((t=>(null==t?void 0:t.getObjectId())===e))))}));function r(e){return t.apply(this,arguments)}return r}(),u.query=function(){var t=e._asyncToGenerator((function*(e){const{layer:t,state:r}=this;if(!t||"loaded"!==r)return[];this.notifyChange("querying");const n=yield this._query(e);return this.notifyChange("state"),n}));function r(e){return t.apply(this,arguments)}return r}(),u.removeItemAt=function(){var t=e._asyncToGenerator((function*(e){}));function r(e){return t.apply(this,arguments)}return r}(),u.reset=function(){var t=e._asyncToGenerator((function*(){this._reset()}));function r(){return t.apply(this,arguments)}return r}(),u.updateItem=function(){var t=e._asyncToGenerator((function*(e){return this._update(e)}));function r(e){return t.apply(this,arguments)}return r}(),u.getItemByObjectId=function(e){const{itemCache:t,layer:{objectIdField:r}}=this;return t.find((t=>t.feature.attributes[r]===e))},u.getLocalItemAt=function(e){return this.itemCache.getItemAt(e)},u.getItemAt=function(e){return Promise.resolve(this.itemCache.getItemAt(e))},u.getObjectIdIndex=function(e){const{itemCache:t,layer:{objectIdField:r}}=this;return t.findIndex((t=>t.feature.attributes[r]===e))},u._reset=function(){this.itemCache.removeAll(),this.failures.removeAll(),this._editOperationQueue=[],this._queryOperationQueue=[],this._hasStaleCache=!1,this._loading=!1,this._loaded=!1,this._loadError=!1,this._set("count",0),this._objectIdCache.removeAll(),this.notifyChange("querying"),this.notifyChange("syncing"),this.notifyChange("state")},u._getIdsFromFeatures=function(e){return e.map((e=>e.attributes[this.layer.objectIdField]))},u._toFeatureData=function(e,t){const{layer:{objectIdField:r}}=this;return e.map((e=>{const{attributes:n}=e,o=n[r];return{objectId:o,feature:e,attachments:t?t[o]:null,relatedRecords:null}}))},u._update=function(){var t=e._asyncToGenerator((function*(e){const{layer:t}=this,{operations:n}=t.capabilities;if(!n.supportsUpdate||!("applyEdits"in t))throw new s("store:update-error","Update is not supported.");const{index:o,name:i,value:u}=e,c=yield this.getItemAt(o);if(!c||!c.feature)throw new s("store:update-error","Feature with provided 'objectId' not found.");const{feature:h}=c,y=a.clone(h.attributes);y[i]=u;const l=new r({attributes:y}),d=t.applyEdits({updateFeatures:[l]}).then((e=>{const{updateFeatureResults:t}=e,r=t.find((e=>!!e.error));if(r)throw r.error;return t.length&&(h.attributes=y),e}));return this._queueEditOperation((()=>d))}));function n(e){return t.apply(this,arguments)}return n}(),u._query=function(){var t=e._asyncToGenerator((function*(e){const{refresh:t}=e;return!0===t?(this.itemCache.removeAll(),this._syncLayerInfo().then((()=>this._queryFeatureData(e)))):(this._hasStaleCache&&(yield this._updateIds(),this._hasStaleCache=!1),this._queryFeatureData(e))}));function r(e){return t.apply(this,arguments)}return r}(),u._queryFeatureData=function(){var t=e._asyncToGenerator((function*(t){var r=this;return this._queueQueryOperation(e._asyncToGenerator((function*(){const{features:e}=yield r._queryFeatures(t),n=r._getIdsFromFeatures(e),o=yield r._queryAttachments(n);return r._toFeatureData(e,o)||[]})))}));function r(e){return t.apply(this,arguments)}return r}(),u._syncLayerInfo=function(){var t=e._asyncToGenerator((function*(){yield this._updateCount(),yield this._updateIds()}));function r(){return t.apply(this,arguments)}return r}(),u._updateCount=function(){var t=e._asyncToGenerator((function*(){yield this._queryCount().then((e=>this._set("count",e)))}));function r(){return t.apply(this,arguments)}return r}(),u._updateIds=function(){var t=e._asyncToGenerator((function*(){var e,t,r;null!=(e=this.layer)&&null!=(t=e.capabilities)&&null!=(r=t.query)&&r.supportsPagination||(this._objectIdCache.removeAll(),yield this._queryForObjectIds().then((e=>this._objectIdCache.addMany(e))))}));function r(){return t.apply(this,arguments)}return r}(),u._queryCount=function(){const{filterGeometry:e,layer:t}=this,{capabilities:{query:{supportsCacheHint:r}}}=t,n=t.createQuery();return n.geometry=e,n.returnGeometry=!1,n.where=this._getWhere(),n.objectIds=this.objectIds,r&&(n.cacheHint=!0),t.queryFeatureCount(n)},u._queryForObjectIds=function(){const{filterGeometry:e,layer:t,orderByFields:r}=this,{capabilities:{query:{supportsCacheHint:n,supportsOrderBy:o}}}=t,i=t.createQuery();return i.geometry=e,i.outFields=[t.objectIdField],i.returnGeometry=!1,i.where=this._getWhere(),i.objectIds=this.objectIds,o&&(i.orderByFields=r),n&&(i.cacheHint=!0),t.queryObjectIds(i)},u._queryFeatures=function(){var t=e._asyncToGenerator((function*(e){const{layer:t}=this;if(!t.capabilities.operations.supportsQuery)return Promise.reject(new s("store:query-error","Layer does not support query operation."));const{filterGeometry:r,layer:{capabilities:{query:{supportsCacheHint:n,supportsOrderBy:o,supportsPagination:i}}},orderByFields:a,returnGeometry:u}=this,{start:c,pageSize:h}=e,y=t.createQuery();return y.returnGeometry=u,i?(y.start=c,y.num=h,y.where=this._getWhere(),y.objectIds=this.objectIds):y.objectIds=this.objectIds||this._getObjectIdsForPage(c,h),o&&(y.orderByFields=a),r&&(y.geometry=r),n&&(y.cacheHint=!0),t.queryFeatures(y)}));function r(e){return t.apply(this,arguments)}return r}(),u._verifyFeaturesByObjectId=function(){var t=e._asyncToGenerator((function*(e){const{layer:t}=this;if(!t.capabilities.operations.supportsQuery)return Promise.reject(new s("store:query-error","Layer does not support query operation."));const{filterGeometry:r,layer:{capabilities:{query:{supportsCacheHint:n,supportsOrderBy:o}}},orderByFields:i}=this,a=t.createQuery();return a.where=this._getWhere(),a.returnGeometry=!1,a.objectIds=e,a.outFields=[t.objectIdField],o&&(a.orderByFields=i),r&&(a.geometry=r),n&&(a.cacheHint=!0),t.queryFeatures(a)}));function r(e){return t.apply(this,arguments)}return r}(),u._getObjectIdsForPage=function(e,t){const r=this._objectIdCache.toArray();return r.length>=e+t?r.slice(e,e+t):r.slice(e)},u._queryAttachments=function(e){const{attachmentsEnabled:t,layer:r}=this,{capabilities:{data:{supportsAttachment:n},operations:{supportsQueryAttachments:o}}}=r;return t&&n&&o&&"queryAttachments"in r?r.queryAttachments(new l({objectIds:e,where:this._getWhere()})):Promise.resolve(null)},u._queueQueryOperation=function(e){return this._queryOperationQueue.push(e),this.notifyChange("querying"),e().then((t=>this._queryOperationQueue.indexOf(e)>-1?(this.itemCache.addMany(t),t):[])).catch((t=>{f("store:query-error","An error ocurred.",{error:t});const r={error:t,retry:()=>{this.failures.remove(r),this._queueQueryOperation(e)},cancel:()=>this.failures.remove(r)};return this.failures.add(r),[]})).then((t=>(o.remove(this._queryOperationQueue,e),this.notifyChange("querying"),t)))},u._queueEditOperation=function(e){return this._editOperationQueue.push(e),this.notifyChange("syncing"),e().then((()=>{o.remove(this._editOperationQueue,e),this.notifyChange("syncing")})).catch((t=>{f("store:edit-error","An error ocurred.",{error:t});const r={error:t,retry:()=>{this.failures.remove(r),this._queueEditOperation(e)},cancel:()=>this.failures.remove(r)};throw this.failures.add(r),o.remove(this._editOperationQueue,e),this.notifyChange("syncing"),t}))},u._getWhere=function(){return this.where||this.layer.definitionExpression||"1=1"},e._createClass(n,[{key:"attachmentsEnabled",set:function(e){this._reset(),this._set("attachmentsEnabled",e),this.notifyChange("state")}},{key:"filterGeometry",set:function(e){this._reset(),this._set("filterGeometry",e),this.notifyChange("state")}},{key:"layer",set:function(e){this._reset(),this._set("layer",e),this.notifyChange("state")}},{key:"objectIds",set:function(e){this._reset(),this._set("objectIds",e||null),this.notifyChange("state")}},{key:"orderByFields",get:function(){return this._get("orderByFields")||[]},set:function(e){const t=this.orderByFields;o.equals(e,t)||(this.itemCache.removeAll(),this._hasStaleCache=!0,this._set("orderByFields",e))}},{key:"querying",get:function(){return this._queryOperationQueue.length>0}},{key:"returnGeometry",set:function(e){this._reset(),this._set("returnGeometry",e),this.notifyChange("state")}},{key:"state",get:function(){const{layer:e,_loaded:t,_loadError:r,_loading:n}=this;return r?"error":!e||this.get("layer.loadError")?"disabled":n?"loading":"loaded"===this.get("layer.loadStatus")&&t?"loaded":"ready"}},{key:"syncing",get:function(){return this._editOperationQueue.length>0}},{key:"where",get:function(){return this._get("where")||null},set:function(e){this._reset(),this._set("where",e),this.notifyChange("state")}}]),n}(n);t.__decorate([c.property()],_.prototype,"attachmentsEnabled",null),t.__decorate([c.property({readOnly:!0})],_.prototype,"count",void 0),t.__decorate([c.property({readOnly:!0})],_.prototype,"failures",void 0),t.__decorate([c.property()],_.prototype,"filterGeometry",null),t.__decorate([c.property({readOnly:!0})],_.prototype,"itemCache",void 0),t.__decorate([c.property({value:null})],_.prototype,"layer",null),t.__decorate([c.property({value:null})],_.prototype,"objectIds",null),t.__decorate([c.property()],_.prototype,"orderByFields",null),t.__decorate([c.property({readOnly:!0})],_.prototype,"querying",null),t.__decorate([c.property()],_.prototype,"relatedRecordsEnabled",void 0),t.__decorate([c.property({value:!1})],_.prototype,"returnGeometry",null),t.__decorate([c.property({readOnly:!0})],_.prototype,"state",null),t.__decorate([c.property({readOnly:!0})],_.prototype,"syncing",null),t.__decorate([c.property()],_.prototype,"where",null),_=t.__decorate([y.subclass(d)],_);return _}));