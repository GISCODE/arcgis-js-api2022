/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../core/has","../../../../../../core/maybe","../../../../../../core/promiseUtils","../../../../../../geometry/libtess","../../DisplayId","../templates/WGLLabelTemplate","../templates/WGLMarkerTemplate","../templates/WGLTemplateStore"],(function(e,t,i,s,r,o,n,l,a,c){"use strict";let f=function(){function e(e,t,i){this._loadPromise=o.loadLibtess(),this._geometryType=e,this._idField=t,this._templateStore=i}var i=e.prototype;return i.update=function(e,t){s.isSome(e.mesh.labels)&&(this._labelTemplates=this._createLabelTemplates(e.mesh.labels,t)),this._schema=e},i._createLabelTemplates=function(e,t){const i=new Map;if("simple"===e.type){for(const s of e.classes){const e=l.fromLabelClass(s,t);i.set(s.index,e)}return i}for(const s in e.classes){const r=e.classes[s];for(const e of r){const s=l.fromLabelClass(e,t);i.set(e.index,s)}}return i},i.analyze=function(){var e=t._asyncToGenerator((function*(e,t,i,o,l,a,f){if(r.isAborted(f))return;let u;"dictionary"===i.type&&(u=yield i.analyze(this._idField,e.copy(),t,l,a,f));let d=0;for(;e.next();){let t;if(t=u?u[d++]:s.isSome(o)&&n.isAggregateId(e.getDisplayId())&&1!==e.readAttribute("cluster_count")?o.match(this._idField,e,this._geometryType,l,a):i.match(this._idField,e,this._geometryType,l,a),e.setGroupId(t),c.isDynamicId(t)){const i=this._templateStore.getDynamicTemplateGroup(t);for(const t of i)t&&t.analyze&&t.analyze(this._templateStore,e,l,a)}}return yield this._loadPromise,this._templateStore.finalize(f)}));function i(t,i,s,r,o,n,l){return e.apply(this,arguments)}return i}(),i.analyzeGraphics=function(){var e=t._asyncToGenerator((function*(e,t,i,s,o,n){if(r.isAborted(n))return;const l=e.getCursor();for(i&&(yield i.analyze(this._idField,l.copy(),t,s,o,n));l.next();){let e=l.getGroupId();if(null!=e&&-1!==e||(e=i.match(this._idField,l,l.geometryType,s,o),l.setGroupId(e)),c.isDynamicId(e)){const t=this._templateStore.getDynamicTemplateGroup(e);for(const e of t)e&&e.analyze&&e.analyze(this._templateStore,l,s,o)}l.setGroupId(e)}return yield this._loadPromise,this._templateStore.finalize(n)}));function i(t,i,s,r,o,n){return e.apply(this,arguments)}return i}(),i.writeGraphic=function(e,t,i,s){const r=t.getGroupId(),o=t.getDisplayId(),n=this._templateStore.getTemplateGroup(r);if(e.featureStart(t.insertAfter,0),null!=o){if(c.isDynamicId(r))for(const e of n)e&&e.bindFeature(t,null,null);if(n){for(const r of n)r&&r.write(e,t,i,s);e.featureEnd()}}},i.writeCursor=function(e,t,i,r,o,n,l){const a=t.getGroupId(),f=t.getDisplayId(),u=this._templateStore.getTemplateGroup(a),d=this._schema.mesh.sortKey;let p=0;if(s.isSome(d)&&(p=null!=d.fieldIndex?t.getComputedNumericAtIndex(d.fieldIndex):null!=d.field?t.readAttribute(d.field):t.readAttribute(this._idField),p*="asc"===d.order?1:-1),e.featureStart(0,null==p||isNaN(p)?0:p),null!=f&&u){if(c.isDynamicId(a))for(const e of u)e.bindFeature(t,i,r);for(const i of u)i.write(e,t,o,l);if(s.isSome(n)&&e.hasRecords){const i=n&&this._findLabelRef(u);this._writeLabels(e,t,n,i,o,l)}e.featureEnd()}},i._findLabelRef=function(e){for(const t of e)if(t instanceof a)return t;return null},i._writeLabels=function(e,t,i,r,o,n){for(const l of i)if(s.isSome(l)&&l){const{glyphs:i,rtl:s,index:a}=l,c=this._labelTemplates.get(a);c.setZoomLevel(o),c.bindReferenceTemplate(r),c.bindTextInfo(i,s),c.write(e,t,null,n)}},t._createClass(e,[{key:"templates",get:function(){return this._templateStore}}]),e}();e.WGLMeshFactory=f,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
