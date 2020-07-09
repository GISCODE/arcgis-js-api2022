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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/Evented","./when","dojo/store/util/QueryResults","dojo/store/util/SimpleQueryEngine","dstore/QueryResults"],(function(t,e,n,i,r,s,o,d){var h=function(t,e){this.storage=t,this.data=e};return h.prototype={storage:null,data:null,filter:function(t){return this.storage._filter(this.data,t)},sort:function(t,e){return this.storage._sort(this.data,t,e)},fetch:function(){return this.storage._fetchRange(this.data)},fetchRange:function(t){return this.storage._fetchRange(this.data,t)},mayHaveChildren:function(t){return this.storage.mayHaveChildren(t)},getChildren:function(t){return this.storage.getChildren(t,{returnCollection:!0})}},t(i,{idProperty:"id",bindingProperty:null,autoIdentify:!0,queryEngine:o,isDstoreTree:!1,root:null,data:null,_hash:null,_autoId:null,storage:null,constructor:function(t,n){e.mixin(this,n),this.storage=this,this.root={children:t||[]},e.mixin(this._provideBinding(this.root),{deepness:-1,selectCount:0,leafCount:0}),this._hash={},this.idProperty&&this.autoIdentify&&(this._autoId=1),this._initializeNode(this.root,0),this.data=this.root.children},_provideBinding:function(t){var e=this._getBinding(t);return e||(t[this.bindingProperty]=e={}),e},_getBinding:function(t){return this.bindingProperty?t[this.bindingProperty]:t},_initializeNode:function(t,e){var i=this._provideBinding(t);if(i.selected=!!i.selected,!t.children)return"number"!=typeof i.leafCount&&(i.leafCount=1),void(i.selectCount=i.selected?i.leafCount:0);i.selectCount=0,i.leafCount=0,n.forEach(t.children,(function(n){this._registerNode(n);var r=this._provideBinding(n);r.parent=t,r.deepness=e,this._initializeNode(n,e+1),i.selectCount+=r.selectCount,i.leafCount+=r.leafCount}),this),i.selectCount?i.selectCount===i.leafCount&&(i.selected=!0):i.selected=!1},isOwned:function(t,e){return!e&&t===this.root||this.get(this.getIdentity(t))===t},_registerNode:function(t){this._autoId&&void 0===t[this.idProperty]&&(t[this.idProperty]=this._autoId++),this.idProperty&&(this._hash[t[this.idProperty]]=t)},_unregisterNode:function(t){this.isOwned(t,!0)&&delete this._hash[t[this.idProperty]]},clear:function(){this.root.children.length&&(n.forEach(this.root.children,(function(t){this._unbindNode(t)}),this),this.data=this.root.children=[])},destroy:function(){this.clear()},_unbindNode:function(t){t.children&&n.forEach(t.children,(function(t){delete this._getBinding(t).parent,this._unbindNode(t)}),this),this._unregisterNode(t);var e=this._getBinding(t);e.parent&&(this._incrementCounts(e.parent,-e.selectCount,-e.leafCount),delete e.parent),e!==t&&delete t[this.bindingProperty]},removeNodes:function(t,e){n.forEach(t&&t.slice(),(function(t){if(this.isOwned(t,!0)){var e=this._getBinding(t).parent,i=n.indexOf(e.children,t);i>=0&&e.children.splice(i,1),this._unbindNode(t)}}),this),!e&&this.emit("updated")},addNodes:function(t,e,i){if(e){if(!this.isOwned(e)||!e.children)return!1}else e=this.root;var r=this._getBinding(e).deepness+1,s=0,o=0;return n.forEach(t,(function(t){if(!this.isOwned(t)){e.children.push(t),this._registerNode(t);var n=this._provideBinding(t);n.parent=e,n.deepness=r,this._initializeNode(t,r+1),s+=n.selectCount,o+=n.leafCount}}),this),this._incrementCounts(e,s,o),!i&&this.emit("updated"),!0},select:function(t,e){return this.changeSelect(t,!0,e)},deselect:function(t){this.changeSelect(t,!1)},changeSelect:function(t,e,i){i=i||this.root.leafCount;var r=t&&this._getBinding(t);if(r){var s=((e=!!e)?r.leafCount:0)-r.selectCount,o=s<0||this.root.selectCount+s<=i;return t.children?(o&&(r.selected=e),n.forEach(t.children,(function(t){this.changeSelect(t,e,i)}),this),o):(o&&(r.selected=e,s&&this._incrementCounts(t,s)),o)}},_incrementCounts:function(t,e,n){var i=this._getBinding(t);i.selectCount+=e,n&&(i.leafCount+=n),i.selectCount?i.selectCount==i.leafCount&&(i.selected=!0):i.selected=!1,i.parent&&this._incrementCounts(i.parent,e,n)},getSelectionState:function(t){if(!this.isOwned(t))return!1;var e=this._getBinding(t);return e.selectCount&&e.selectCount!=e.leafCount?"mixed":e.selected=!!e.selectCount},getSelectedNodes:function(t){return this.getDescendingNodes(this.root,!0,t)},getDescendingNodes:function(t,e,n){if(!this.isOwned(t))return[];var i=[];return this._collectNodes(t.children,i,e,n),i},_collectNodes:function(t,e,i,r){n.forEach(t,(function(t){var n=this._getBinding(t),s=null==i?n.leafCount:i?n.selectCount:n.leafCount-n.selectCount;s&&(!t.children||!r&&s==n.leafCount?e.push(t):this._collectNodes(t.children,e,i,r))}),this)},inspectChildren:function(t,i,r,s){s&&(i=e.hitch(s,i));var o=(t=t||this.root).children;return o&&r&&(o=o.slice()).sort(r),n.every(o,(function(t){var e=i(t);return null!==e&&(!1===e||!t.children||this.inspectChildren(t,i,r))}),this)},updateExpandedNodes:function(t,e){for(var n in this._hash){var i=this._hash[n];this.updateExpand(i,!!t[n])}this._updateOddEven(null,e)},updateExpand:function(t,e,n,i){if(t){var r=!1;if(t.children){var s=this._getBinding(t);s.expanded!==e&&(r=!0,s.expanded=e)}var o={};return r&&n&&this._updateOddEven(o,i),o}},_updateOddEven:function(t,e){var n=1;this.inspectChildren(null,(function(e){!1!==e.visible&&(n=1-n);var i=this._getBinding(e);return t&&i.isOdd!==n&&(t[this.getIdentity(e)]=n),i.isOdd=n,!(!e.children||!i.expanded)}),e,this)},isOdd:function(t){var e=this._getBinding(t);return e&&e.isOdd},get:function(t){return this._hash[t]},getIdentity:function(t){return this.idProperty?t[this.idProperty]:null},query:function(t,e){return s(this._query(this.data,t,e))},_query:function(t,e,n){return this.queryEngine(e,n)(t)},filter:function(t){return this._filter(this.data,t)},_filter:function(t,e){var n=this._query(t,e);return new h(this.storage,n)},sort:function(t,e){return this._sort(this.data,t,e)},_sort:function(t,e,n){var i,r;"function"==typeof e?(i=t.slice()).sort(e):(r=Array.isArray(e)?e.map((function(t){return{attribute:t.property,descending:t.descending}})):[{attribute:e,descending:n}],i=this._query(t,{},{sort:r}));return new h(this.storage,i)},mayHaveChildren:function(t){return!!t.children},getChildren:function(t,e){var n=this.isOwned(t,!0)?t.children:null,i=this.isDstoreTree||e&&e.returnCollection,r=this.queryEngine({},i?null:e)(n||[]);return i?new h(this.storage,r):s(r)},fetch:function(){return this._fetchRange(this.data)},fetchRange:function(t){return this._fetchRange(this.data,t)},_fetchRange:function(t,e){return d(r(e?t.slice(e.start,e.end):t.slice()),{totalLength:r(t.length)})}})}));