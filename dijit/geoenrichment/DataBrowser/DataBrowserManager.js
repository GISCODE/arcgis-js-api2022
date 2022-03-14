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

define(["dojo/_base/declare","dojo/_base/array","esri/dijit/geoenrichment/when","dojo/Stateful","dojo/dom-geometry","esri/dijit/geoenrichment/Deferred","./VariableInfo","./VariableUtil"],(function(e,t,i,n,l,o,r,s){return e(n,{variables:null,selectionLimit:-1,variableQuery:null,selection:null,variableInfo:null,flyAnim:null,onLimit:null,allowShoppingCart:!1,allowMultipleSelectInGroup:!1,categoryPageIndex:0,constructor:function(e){this.variables=e.variables,this.selectionLimit=isNaN(e.selectionLimit)?-1:e.selectionLimit,this.allowShoppingCart=this.multipleSelectIsAllowed()&&!!e.shoppingCart,this.allowMultipleSelectInGroup=this.multipleSelectIsAllowed()&&!!e.allowMultipleSelectInGroup,e.variableQuery=this.variableQuery=e.variableQuery||{},e.countryID=this.variableQuery.countryID=this.variableQuery.countryID||e.countryID||null,e.favorites&&!this.variables.favorites&&(this.variables.favorites=e.favorites),this.variables.synchronize(e.countryID),e.selection&&e.selection.length&&this.multipleSelectIsAllowed()&&this.changeSelection(e.selection),this.selection=[],e.selection=this.selection;var t=e.variableInfo;if(!1!==t){if(!0===t)t="fullName";else if(t&&t.domNode)return void(this.variableInfo=t);this.variableInfo=new r({infoFields:t}),e.own(this.variableInfo)}},postscript:function(){},multipleSelectIsAllowed:function(){return this.selectionLimit<0||this.selectionLimit>1},changeSelection:function(e){var t=this,n=new o;return i(this.variables.synchronize(),(function(){setTimeout((function(){t.selection=[],t.addToSelection(e,!0),n.resolve()}),0)})),n.promise},validateSelection:function(){var e=t.filter(this.selection,(function(e){return this.variables.get(e)}),this);e.length!=this.selection.length&&this.set("selection",e)},addToSelection:function(e,i){"string"==typeof e&&(e=[e]);var n=this.selection.slice(),l={},o=!1;return t.forEach(e,(function(e){if(this.variables.get(e))if(this.selectionLimit>=0&&n.length==this.selectionLimit)o=!0;else{var i=s.getToggleGroups(this.variables,[e],this.allowMultipleSelectInGroup);t.every(n,(function(e){return!i.hash[e]}))&&(n.push(i.groups[0].value),l[e]=!0)}}),this),n.length&&!this._ensureValidSelection(n)?null:(i||this.selection.length!=n.length?this.set("selection",n):l=null,o&&this.onLimit&&this.onLimit(),l)},_ensureValidSelection:function(e){return!0},removeFromSelection:function(e,i){"string"==typeof e&&(e=[e]);var n=[],l=s.getToggleGroups(this.variables,e,!i&&this.allowMultipleSelectInGroup).hash,o={};return t.forEach(this.selection,(function(e){l[e]?o[e]=!0:n.push(e)})),this.selection.length!=n.length?(this.set("selection",n),o):null},updateSelection:function(e){var i=s.getToggleGroups(this.variables,[e],this.allowMultipleSelectInGroup),n=-1;if(t.some(this.selection,(function(e,t){return!!i.hash[e]&&(n=t,!0)})),n>=0){var l=this.selection.slice();l[n]=i.groups[0].value,this.set("selection",l)}},getSelectionGroups:function(){return this._selectionGroups||(this._selectionGroups=s.getToggleGroups(this.variables,this.selection,this.allowMultipleSelectInGroup)),this._selectionGroups},_selectionSetter:function(e){this._selectionGroups=null,this.selection=e},_selectionGroups:null,animateSelection:function(e){this.flyAnim.fly(e,"DataBrowser_SelectVar",["top",l.isBodyLtr()?"right":"left"])},composeQuery:function(e){e&&"string"==typeof e&&(e=[e]);var i={countryID:this._getQueryCountryID()};return t.forEach(e,(function(e){var t=this.variableQuery[e];t&&(i[e]=t)}),this),i},_getQueryCountryID:function(){return this.variableQuery.countryID},validateQuery:function(){var e=this.variableQuery,t=e.dataCollectionID?this.getDataCollection():e.categoryID?this.getCategory():this.queryVariables(),n=this;return i(t).then((function(t){return t||n.set("variableQuery",n.composeQuery()),e.dataCollectionID||e.categoryID?null:t}),(function(e){return n.set("variableQuery",n.composeQuery()),null}))},getCategories:function(){return this.variables.categories.query(this.composeQuery())},queryVariables:function(e){return this.variables.query(this.variableQuery,e)},getCategory:function(e){if(!(e=e||this.variableQuery.categoryID))return null;var t=this.composeQuery();t.id=e;var i=this.variables.categories.query(t),n=this;return i.then?i.then((function(t){return n._getCategory(t,e)})):this._getCategory(i,e)},_getCategory:function(e,t){return e[0]},getDataCollection:function(e){if(!(e=e||this.variableQuery.dataCollectionID))return null;var t=this.composeQuery();t.id=e;var i=this.variables.dataCollections.query(t),n=this;return i.then?i.then((function(t){return n._getDataCollection(t,e)})):this._getDataCollection(i,e)},_getDataCollection:function(e,t){return e[0]}})}));