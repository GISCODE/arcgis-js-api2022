/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/Error","../../../../../core/Logger","../../../../../core/maybe","../../../../../core/promiseUtils","./BaseFeatureSource"],(function(e,t,r,o,a,n,i){"use strict";const s=o.getLogger("esri.views.2d.layers.features.sources.FeatureSource");let u=function(e){function o(t){return e.call(this,t)||this}t._inheritsLoose(o,e);var i=o.prototype;return i._fetchDataTile=function(){var e=t._asyncToGenerator((function*(e){const t=6,o=20,a=this._subscriptions.get(e.key.id);let i=!1,u=0,d=0;const c=(t,r)=>{d--,n.throwIfAborted(a);const o=e.id,s=t.reader,u=t.query;if(!s.exceededTransferLimit){if(i=!0,0!==r&&!s.hasFeatures){const e={id:o,addOrUpdate:s,end:0===d,type:"append"};return a.add({message:e,query:u}),void this._onMessage(e)}const e={id:o,addOrUpdate:s,end:0===d,type:"append"};return a.add({message:e,query:u}),void this._onMessage(e)}const c={id:o,addOrUpdate:s,end:i&&0===d,type:"append"};a.add({message:c,query:u}),this._onMessage(c)};let h=0,l=0;for(;!i&&l++<o;){let o;for(let t=0;t<h+1;t++){const t=u++;d++,o=this._fetchDataTilePage(e,t,a).then((e=>e&&c(e,t))).catch((t=>{i=!0,n.isAbortError(t)||(s.error(new r("mapview-query-error","Encountered error when fetching tile",{tile:e,error:t})),this._onMessage({id:e.id,addOrUpdate:null,end:i,type:"append"}))}))}yield o,n.throwIfAborted(a),h=Math.min(h+2,t)}}));function o(t){return e.apply(this,arguments)}return o}(),i._fetchDataTilePage=function(){var e=t._asyncToGenerator((function*(e,t,r){n.throwIfAborted(r);const o=this._queryInfo,i={start:this.pageSize*t,num:this.pageSize,returnExceededLimitFeatures:!0,quantizationParameters:e.getQuantizationParameters()};a.isSome(this.maxRecordCountFactor)&&(i.maxRecordCountFactor=this.maxRecordCountFactor);const s=this.createTileQuery(e,i);try{const a=r.signal,i=yield this._queue.push({tile:e,query:s,signal:a,depth:t});return n.throwIfAborted(r),i?o!==this._queryInfo?this._fetchDataTilePage(e,t,r):{reader:i,query:s}:null}catch(u){return n.throwIfNotAbortError(u),null}}));function r(t,r,o){return e.apply(this,arguments)}return r}(),o}(i.BaseFeatureSource);e.PagedFeatureSource=u,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));