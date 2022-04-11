/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/Accessor","../../../../../core/promiseUtils","../../../../../core/accessorSupport/decorators/property","../../../../../core/arrayUtils","../../../../../core/has","../../../../../core/accessorSupport/ensureType","../../../../../core/accessorSupport/decorators/subclass"],(function(e,t,r,o,s,n,i,u,a,c){"use strict";e.EditsQueue=function(e){function r(t){var r;return(r=e.call(this,t)||this)._queue=[],r._onGoingRequest=null,r._abortController=new AbortController,r}t._inheritsLoose(r,e);var o=r.prototype;return o.destroy=function(){this.clear()},o.clear=function(){if(this.destroyed)throw new Error("instance is already destroyed");let e=this._queue.pop();for(;e;)e.resolver.reject(s.createAbortError()),e=this._queue.pop();this._queue.length=0,this._abortController.abort(),this._abortController=new AbortController},o.push=function(){var e=t._asyncToGenerator((function*(e){if(this.destroyed)throw new Error("instance is already destroyed");const t=s.createResolver();return this._queue.push({event:e,resolver:t}),this.notifyChange("updating"),Promise.resolve().then((()=>{this._processNext()})),t.promise}));function r(t){return e.apply(this,arguments)}return r}(),o._processNext=function(){var e=t._asyncToGenerator((function*(){if(this._onGoingRequest)return;const e=[],t=new Set,r=new Set,o=new Set;let s=this._queue.shift();for(;s;){const{event:{addedFeatures:n,deletedFeatures:i,updatedFeatures:u},resolver:a}=s;e.push(a);for(const{objectId:e,error:s}of n)s||(t.add(e),r.add(e),o.delete(e));for(const{objectId:e,error:t}of u)t||(r.add(e),o.delete(e));for(const{objectId:e,error:s}of i)s||(t.has(e)?t.delete(e):o.add(e),r.delete(e));s=this._queue.shift()}if(!r.size&&!o.size)return this.notifyChange("updating"),void e.forEach((e=>e()));const n=[],i=[];r.size&&r.forEach((e=>{n.push(e)})),o.size&&o.forEach((e=>{i.push(e)})),this._onGoingRequest=Promise.resolve().then((()=>this.processEdits(n,i,{signal:this._abortController.signal}))).catch((()=>{})),this.notifyChange("updating"),yield this._onGoingRequest,this._onGoingRequest=null,this.notifyChange("updating"),e.forEach((e=>e())),this._queue.length>0&&this._processNext()}));function r(){return e.apply(this,arguments)}return r}(),t._createClass(r,[{key:"updating",get:function(){return!this.destroyed&&(this._queue.length>0||null!=this._onGoingRequest)}}]),r}(o),r.__decorate([n.property({constructOnly:!0})],e.EditsQueue.prototype,"processEdits",void 0),r.__decorate([n.property({readOnly:!0})],e.EditsQueue.prototype,"updating",null),e.EditsQueue=r.__decorate([c.subclass("esri.views.2d.layers.features.controllers.EditsQueue")],e.EditsQueue),Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));