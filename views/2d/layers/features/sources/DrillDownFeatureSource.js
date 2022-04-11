/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/has","../../../../../core/promiseUtils","./BaseFeatureSource"],(function(e,t,r,n,o){"use strict";const i=r("esri-mobile"),a={maxDrillLevel:i?1:4,maxRecordCountFactor:i?1:3};let s=function(e){function r(t){return e.call(this,t)||this}return t._inheritsLoose(r,e),r.prototype._fetchDataTile=function(){var e=t._asyncToGenerator((function*(e){var r=this;const o=this._serviceInfo.capabilities.query.supportsMaxRecordCountFactor,i=this._subscriptions.get(e.key.id),s=i.signal,u=e.getQuantizationParameters();let c=0;const l=function(){var d=t._asyncToGenerator((function*(t,d){const p=r._queryInfo,f=r.createTileQuery(t,{maxRecordCountFactor:o?a.maxRecordCountFactor:void 0,returnExceededLimitFeatures:!1,quantizationParameters:u});c++;try{const o=yield r._queue.push({tile:e,query:f,signal:s,depth:d});if(c--,n.throwIfAborted(s),!o)return;if(p!==r._queryInfo)return void l(t,d);if(o.exceededTransferLimit&&d<a.maxDrillLevel){for(const e of t.createChildTiles())l(e,d+1);return}const u={id:e.id,addOrUpdate:o,end:0===c,type:"append"};i.add({query:f,message:u}),r._onMessage(u)}catch(y){n.isAbortError(y)||r._onMessage({id:e.id,addOrUpdate:null,end:!0,type:"append"})}}));return function(e,t){return d.apply(this,arguments)}}();l(e,0)}));function r(t){return e.apply(this,arguments)}return r}(),r}(o.BaseFeatureSource);e.DrillDownFeatureSource=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));