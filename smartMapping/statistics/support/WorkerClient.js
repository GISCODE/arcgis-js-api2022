/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/Error","../../../core/workers/workers"],(function(n,t,e,r){"use strict";let i=function(){function n(){}var i=n.prototype;return i.open=function(){var n=t._asyncToGenerator((function*(n){this.connection=yield r.open("statsWorker",{strategy:"distributed",signal:n})}));function e(t){return n.apply(this,arguments)}return e}(),i.destroy=function(){var n;null==(n=this.connection)||n.close()},n.getInstance=function(){return n.instance||(n.instance=new n),n.instance},i.summaryStatistics=function(){var n=t._asyncToGenerator((function*(n,t){if(!this.connection)throw new e("worker-client:summary-statistics","connection is required");return this.connection.invoke("summaryStatistics",{attribute:n,features:t})}));function r(t,e){return n.apply(this,arguments)}return r}(),i.uniqueValues=function(){var n=t._asyncToGenerator((function*(n,t){if(!this.connection)throw new e("worker-client:unique-values","connection is required");return this.connection.invoke("uniqueValues",{attribute:n,features:t})}));function r(t,e){return n.apply(this,arguments)}return r}(),i.classBreaks=function(){var n=t._asyncToGenerator((function*(n,t){if(!this.connection)throw new e("worker-client:class-breaks","connection is required");return this.connection.invoke("classBreaks",{attribute:n,features:t})}));function r(t,e){return n.apply(this,arguments)}return r}(),i.histogram=function(){var n=t._asyncToGenerator((function*(n,t){if(!this.connection)throw new e("worker-client:histogram","connection is required");return this.connection.invoke("histogram",{attribute:n,features:t})}));function r(t,e){return n.apply(this,arguments)}return r}(),n}();n.WorkerClient=i,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
