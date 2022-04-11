/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Error","../core/Promise","../core/promiseUtils","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass"],(function(t,e,s,r,i,o,n,a,p,c){"use strict";let d=function(e){function r(t){var s;return(s=e.call(this,t)||this).state="running",s.target=null,s}t._inheritsLoose(r,e);var o=r.prototype;return o.initialize=function(){this.addResolvingPromise(new Promise(((t,e)=>this._dfd={resolve:t,reject:e})))},o.stop=function(){"stopped"!==this.state&&"finished"!==this.state&&(this._set("state","stopped"),this._dfd.reject(new s("ViewAnimation stopped")))},o.finish=function(){"stopped"!==this.state&&"finished"!==this.state&&(this._set("state","finished"),this._dfd.resolve())},o.update=function(t,e){e||(e=i.isPromiseLike(t)?"waiting-for-target":"running"),this._set("target",t),this._set("state",e)},t._createClass(r,[{key:"done",get:function(){return"finished"===this.state||"stopped"===this.state}}]),r}(r.EsriPromise);e.__decorate([o.property({readOnly:!0})],d.prototype,"done",null),e.__decorate([o.property({readOnly:!0,type:String})],d.prototype,"state",void 0),e.__decorate([o.property()],d.prototype,"target",void 0),d=e.__decorate([c.subclass("esri.views.ViewAnimation")],d),function(t){t.State={RUNNING:"running",STOPPED:"stopped",FINISHED:"finished",WAITING_FOR_TARGET:"waiting-for-target"}}(d||(d={}));return d}));
