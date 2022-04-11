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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

var __extends=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function a(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(a.prototype=r.prototype,new a)}}();define(["require","exports","../../../graphic","../../kernel","../support/FeatureSet","../support/IdSet","../support/shared","../support/sqlUtils","../../polyfill/promiseUtils","../../polyfill/sql/WhereClause","../../../SpatialReference"],(function(e,t,r,a,i,n,l,o,s,u,h){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AdaptedFeatureSet=t.SqlExpressionAdapted=t.StringToCodeAdapted=t.FieldRename=t.OriginalField=t.AdaptedField=void 0;var d=function(){function e(e){this.field=e,this.sqlRewritable=!1}return e.prototype.postInitialization=function(e,t){},e}();t.AdaptedField=d;var c=function(e){function t(t){var r=e.call(this,t)||this;return r.sqlRewritable=!0,r}return __extends(t,e),t.prototype.extractValue=function(e){return e.attributes[this.field.name]},t.prototype.rewriteSql=function(e){return{rewritten:this.sqlRewritable,where:e}},t}(d);t.OriginalField=c;var p=function(e){function t(t,r,a){var i=e.call(this,l.cloneField(t))||this;return i.originalField=t,i.sqlRewritable=!0,i.field.name=r,i.field.alias=a,i}return __extends(t,e),t.prototype.rewriteSql=function(e,t){return{rewritten:this.sqlRewritable,where:o.reformulateWithoutField(e,this.field.name,this.originalField.name,t.getFieldsIndex())}},t.prototype.extractValue=function(e){return e.attributes[this.originalField.name]},t}(d);t.FieldRename=p;var f=function(e){function t(t,r,a){var i=e.call(this,t)||this;for(var n in i.codefield=r,i.lkp=a,i.reverseLkp={},a)i.reverseLkp[a[n]]=n;return i.sqlRewritable=!0,i}return __extends(t,e),t.prototype.rewriteSql=function(e,r){var a=this.evaluateNodeToWhereClause(e.parseTree,l.FeatureServiceDatabaseType.Standardised,this.field.name,this.codefield instanceof u.WhereClause?o.toWhereClause(this.codefield,l.FeatureServiceDatabaseType.Standardised):this.codefield,e.parameters);return a.indexOf(t.BADNESS)>=0?{rewritten:!1,where:e}:{rewritten:this.sqlRewritable,where:u.WhereClause.create(a,r._parent.getFieldsIndex())}},t.prototype.evaluateNodeToWhereClause=function(e,r,a,i,n){var l,s,u,h;switch(void 0===a&&(a=null),void 0===i&&(i=null),e.type){case"interval":return o.convertIntervalToSql(this.evaluateNodeToWhereClause(e.value,r,a,i,n),e.qualifier,e.op);case"case_expression":var d=" CASE ";"simple"===e.format&&(d+=this.evaluateNodeToWhereClause(e.operand,r,a,t.BADNESS,n));for(var c=0;c<e.clauses.length;c++)d+=" WHEN "+this.evaluateNodeToWhereClause(e.clauses[c].operand,r,a,t.BADNESS,n)+" THEN "+this.evaluateNodeToWhereClause(e.clauses[c].value,r,a,t.BADNESS,n);return null!==e.else&&(d+=" ELSE "+this.evaluateNodeToWhereClause(e.else,r,a,t.BADNESS,n)),d+=" END ";case"param":var p=n[e.value.toLowerCase()];if("string"==typeof p)return"'"+n[e.value.toLowerCase()].toString().replace(/'/g,"''")+"'";if(p instanceof Date)return o.makeDateString(p,r);if(p instanceof Array){var f=[];for(c=0;c<p.length;c++)"string"==typeof p[c]?f.push("'"+p[c].toString().replace(/'/g,"''")+"'"):p[c]instanceof Date?f.push(o.makeDateString(p[c],r)):f.push(p[c].toString());return f}return p.toString();case"expr_list":s=[];for(var v=0,g=e.value;v<g.length;v++){var _=g[v];s.push(this.evaluateNodeToWhereClause(_,r,a,i,n))}return s;case"unary_expr":return" ( NOT "+this.evaluateNodeToWhereClause(e.expr,r,a,t.BADNESS,n)+" ) ";case"binary_expr":switch(e.operator){case"AND":return" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" AND "+this.evaluateNodeToWhereClause(e.right,r,a,i,n)+") ";case"OR":return" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" OR "+this.evaluateNodeToWhereClause(e.right,r,a,i,n)+") ";case"IS":if("null"!==e.right.type)throw new Error("Unsupported RHS for IS");return" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" IS NULL )";case"ISNOT":if("null"!==e.right.type)throw new Error("Unsupported RHS for IS");return" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" IS NOT NULL )";case"IN":if(l=[],"expr_list"===e.right.type){if("column_ref"===e.left.type&&e.left.column.toUpperCase()===this.field.name.toUpperCase()){for(var S=[],N=!0,w=0,C=e.right.value;w<C.length;w++){if("string"!==(F=C[w]).type){N=!1;break}if(void 0===this.lkp[F.value]){N=!1;break}S.push(this.lkp[F.value].toString())}if(N)return" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" IN ("+S.join(",")+")) "}return l=this.evaluateNodeToWhereClause(e.right,r,a,i,n)," ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" IN ("+l.join(",")+")) "}return(h=this.evaluateNodeToWhereClause(e.right,r,a,i,n))instanceof Array?" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" IN ("+h.join(",")+")) ":" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" IN ("+h+")) ";case"NOT IN":if(l=[],"expr_list"===e.right.type){if("column_ref"===e.left.type&&e.left.column.toUpperCase()===this.field.name.toUpperCase()){S=[],N=!0;for(var y=0,m=e.right.value;y<m.length;y++){var F;if("string"!==(F=m[y]).type){N=!1;break}if(void 0===this.lkp[F.value]){N=!1;break}S.push(this.lkp[F.value].toString())}if(N)return" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" NOT IN ("+S.join(",")+")) "}return l=this.evaluateNodeToWhereClause(e.right,r,a,i,n)," ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" NOT IN ("+l.join(",")+")) "}return(h=this.evaluateNodeToWhereClause(e.right,r,a,i,n))instanceof Array?" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" NOT IN ("+h.join(",")+")) ":" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" NOT IN ("+h+")) ";case"BETWEEN":return u=this.evaluateNodeToWhereClause(e.right,r,a,t.BADNESS,n)," ("+this.evaluateNodeToWhereClause(e.left,r,a,t.BADNESS,n)+" BETWEEN "+u[0]+" AND "+u[1]+" ) ";case"NOTBETWEEN":return u=this.evaluateNodeToWhereClause(e.right,r,a,t.BADNESS,n)," ("+this.evaluateNodeToWhereClause(e.left,r,a,t.BADNESS,n)+" NOT BETWEEN "+u[0]+" AND "+u[1]+" ) ";case"LIKE":return""!==e.escape?" ("+this.evaluateNodeToWhereClause(e.left,r,a,t.BADNESS,n)+" LIKE "+this.evaluateNodeToWhereClause(e.right,r,a,t.BADNESS,n)+" ESCAPE '"+e.escape+"') ":" ("+this.evaluateNodeToWhereClause(e.left,r,a,t.BADNESS,n)+" LIKE "+this.evaluateNodeToWhereClause(e.right,r,a,t.BADNESS,n)+") ";case"NOT LIKE":return""!==e.escape?" ("+this.evaluateNodeToWhereClause(e.left,r,a,t.BADNESS,n)+" NOT LIKE "+this.evaluateNodeToWhereClause(e.right,r,a,t.BADNESS,n)+" ESCAPE '"+e.escape+"') ":" ("+this.evaluateNodeToWhereClause(e.left,r,a,t.BADNESS,n)+" NOT LIKE "+this.evaluateNodeToWhereClause(e.right,r,a,t.BADNESS,n)+") ";case"<>":case"=":if("column_ref"===e.left.type&&"string"===e.right.type){if(e.left.column.toUpperCase()===this.field.name.toUpperCase()&&void 0!==this.lkp[e.right.value.toString()])return" ("+i+" "+e.operator+" "+this.lkp[e.right.value.toString()].toString()+") "}else if("column_ref"===e.right.type&&"string"===e.left.type&&e.right.column.toUpperCase()===this.field.name.toUpperCase())return" ("+this.lkp[e.right.value.toString()].toString()+" "+e.operator+" "+i+") ";return" ("+this.evaluateNodeToWhereClause(e.left,r,a,t.BADNESS,n)+" "+e.operator+" "+this.evaluateNodeToWhereClause(e.right,r,a,t.BADNESS,n)+") ";case"<":case">":case">=":case"<=":case"*":case"-":case"+":case"/":return" ("+this.evaluateNodeToWhereClause(e.left,r,a,t.BADNESS,n)+" "+e.operator+" "+this.evaluateNodeToWhereClause(e.right,r,a,t.BADNESS,n)+") "}throw new Error("Not Supported Operator "+e.operator);case"null":return"null";case"bool":return!0===e.value?"1":"0";case"string":return"'"+e.value.toString().replace(/'/g,"''")+"'";case"timestamp":case"date":return o.makeDateString(e.value,r);case"number":return e.value.toString();case"current_time":return o.makeToday("date"===e.mode,r);case"column_ref":return a&&a.toLowerCase()===e.column.toLowerCase()?"("+i+")":e.column;case"function":var T=this.evaluateNodeToWhereClause(e.args,r,a,t.BADNESS,n);return o.translateFunctionToDatabaseSpecific(e.name,T,r)}throw new Error("Unsupported sql syntax "+e.type)},t.prototype.extractValue=function(e){return this.codefield instanceof u.WhereClause?this.reverseLkp[this.codefield.calculateValueCompiled(e)]:this.reverseLkp[e.attributes[this.codefield]]},t.BADNESS="_!!!_BAD_LKP_!!!!",t}(d);t.StringToCodeAdapted=f;var v=function(e){function t(t,r){var a=e.call(this,t)||this;return a.sql=r,a}return __extends(t,e),t.prototype.rewriteSql=function(e,t){return{rewritten:!0,where:o.reformulateWithoutField(e,this.field.name,o.toWhereClause(this.sql,l.FeatureServiceDatabaseType.Standardised),t.getFieldsIndex())}},t.prototype.extractValue=function(e){return this.sql.calculateValueCompiled(e)},t}(d);t.SqlExpressionAdapted=v;var g=function(e){function t(t){var r=e.call(this,t)||this;return r._calcFunc=null,r.declaredClass="esri.arcade.featureset.actions.Adapted",r.adaptedFields=null,r._extraFilter=null,r._extraFilter=t.extraFilter,r._parent=t.parentfeatureset,r._maxProcessing=30,r.adaptedFields=t.adaptedFields,r}return __extends(t,e),t.findField=function(e,t){for(var r=0,a=e;r<a.length;r++){var i=a[r];if(i.name.toLowerCase()===t.toString().toLowerCase())return i}return null},t.prototype._initialiseFeatureSet=function(){null!==this._parent?(this.geometryType=this._parent.geometryType,this.objectIdField=this._parent.objectIdField,this.globalIdField=this._parent.globalIdField,this.spatialReference=this._parent.spatialReference,this.hasM=this._parent.hasM,this.hasZ=this._parent.hasZ,this.typeIdField=this._parent.typeIdField,this.types=this._parent.types):(this.spatialReference=new h({wkid:4326}),this.objectIdField="",this.globalIdField="",this.geometryType=l.layerGeometryEsriConstants.point,this.typeIdField="",this.types=null),this.fields=[];for(var e=0,t=this.adaptedFields;e<t.length;e++){var r=t[e];r.postInitialization(this,this._parent),this.fields.push(r.field)}},t.prototype._getSet=function(e){var t=this;return null===this._wset?this._ensureLoaded().then((function(){return t._extraFilter?t._getFilteredSet("",null,null,null,e):t._parent._getSet(e)})).then((function(r){return t._checkCancelled(e),t._wset=new n(r._candidates.slice(0),r._known.slice(0),r._ordered,t._clonePageDefinition(r.pagesDefinition)),t._wset})):s.resolve(this._wset)},t.prototype._isInFeatureSet=function(e){return this._parent._isInFeatureSet(e)},t.prototype._getFeatures=function(e,t,i,l){var o=this,u=[];-1!==t&&void 0===this._featureCache[t]&&u.push(t);var h=this._maxQueryRate();if(!0===this._checkIfNeedToExpandKnownPage(e,h))return this._expandPagedSet(e,h,0,0,l).then((function(){return o._getFeatures(e,t,i,l)}));for(var d=0,c=e._lastFetchedIndex;c<e._known.length&&(++d<=i&&(e._lastFetchedIndex+=1),!(void 0===this._featureCache[e._known[c]]&&(e._known[c]!==t&&u.push(e._known[c]),u.length>=h)));c++);if(0===u.length)return s.resolve("success");e=new n([],u,e._ordered,null);var p=Math.min(u.length,i);return this._parent._getFeatures(e,-1,p,l).then((function(){o._checkCancelled(l);for(var e=[],t=0;t<p;t++){var i=o._parent._featureFromCache(u[t]);void 0!==i&&e.push({geometry:i.geometry,attributes:i.attributes,id:u[t]})}for(var n=0,s=e;n<s.length;n++){for(var h=s[n],d=[],c=0,f=o.adaptedFields;c<f.length;c++){var v=f[c];d[v.field.name]=v.extractValue(h)}o._featureCache[h.id]=new r({attributes:d,geometry:a.cloneGeometry(h.geometry)})}return"success"}))},t.prototype._fetchAndRefineFeatures=function(){return s.reject(new Error("Fetch and Refine should not be called in this featureset"))},t.prototype._getFilteredSet=function(e,t,r,a,i){var l,s=this,u=this.reformulateWithoutAdaptions(r);l=u.cannot,r=u.where;var h=!1;if(null!==a){h=!0;for(var d=[],f=0,v=this.adaptedFields;f<v.length;f++){var g=v[f];if(!(g instanceof c)&&!0===a.scanForField(g.field.name)){if(!(g instanceof p)){a=null,h=!1;break}d.push({field:g.field.name,newfield:g.originalField.name})}}a&&d.length>0&&(a=a.replaceFields(d))}return null!==r?null!==this._extraFilter&&(r=o.combine(this._extraFilter,r)):r=this._extraFilter,this._ensureLoaded().then((function(){return s._parent._getFilteredSet(e,t,r,a,i)})).then((function(e){return s._checkCancelled(i),!0===l?new n(e._candidates.slice(0).concat(e._known.slice(0)),[],!0===h&&e._ordered,s._clonePageDefinition(e.pagesDefinition)):new n(e._candidates.slice(0),e._known.slice(0),!0===h&&e._ordered,s._clonePageDefinition(e.pagesDefinition))}))},t.prototype.reformulateWithoutAdaptions=function(e){var t={cannot:!1,where:e};if(null!==e)for(var r=0,a=this.adaptedFields;r<a.length;r++){var i=a[r];if(!0===o.scanForField(e,i.field.name)){var n=i.rewriteSql(e,this);if(!0!==n.rewritten){t.cannot=!0,t.where=null;break}t.where=n.where}}return t},t.prototype._stat=function(e,t,r,a,i,n,l){var u=this,h=!1,d=this.reformulateWithoutAdaptions(t);return h=d.cannot,t=d.where,d=this.reformulateWithoutAdaptions(i),h=h||d.cannot,null!==(i=d.where)?null!==this._extraFilter&&(i=o.combine(this._extraFilter,i)):i=this._extraFilter,!0===h?null===i&&""===r&&null===a?this._manualStat(e,t,n,l):s.resolve({calculated:!1}):this._parent._stat(e,t,r,a,i,n,l).then((function(o){return!1===o.calculated?null===i&&""===r&&null===a?u._manualStat(e,t,n,l):{calculated:!1}:o}))},t.prototype._canDoAggregates=function(e,t,r,a,i){if(null===this._parent)return s.resolve(!1);for(var n=0;n<e.length;n++)for(var l=0,u=this.adaptedFields;l<u.length;l++){var h=u[l];if(e[n].toLowerCase()===h.field.name.toLowerCase()&&!(h instanceof c))return s.resolve(!1)}var d=[];for(n=0;n<t.length;n++){var p=t[n];if(null!==p.workingexpr){var f=this.reformulateWithoutAdaptions(p.workingexpr);if(f.cannot)return s.resolve(!1);var v=p.clone();v.workingexpr=f.where,d.push(v)}else d.push(p)}var g=this.reformulateWithoutAdaptions(i);return g.cannot?s.resolve(!1):(null!==(i=g.where)?null!==this._extraFilter&&(i=o.combine(this._extraFilter,i)):i=this._extraFilter,this._parent._canDoAggregates(e,d,r,a,i))},t.prototype._getAggregatePagesDataSourceDefinition=function(e,t,r,a,i,n,l){if(null===this._parent)return s.reject(new Error("Should never be called"));for(var u=[],h=0;h<t.length;h++){var d=t[h];if(null!==d.workingexpr){var c=this.reformulateWithoutAdaptions(d.workingexpr);if(c.cannot)return s.reject(new Error("Should never be called"));var p=d.clone();p.workingexpr=c.where,u.push(p)}else u.push(d)}var f=this.reformulateWithoutAdaptions(i);return f.cannot?s.reject(new Error("Should never be called")):(null!==(i=f.where)?null!==this._extraFilter&&(i=o.combine(this._extraFilter,i)):i=this._extraFilter,this._parent._getAggregatePagesDataSourceDefinition(e,u,r,a,i,n,l))},t}(i);t.AdaptedFeatureSet=g}));