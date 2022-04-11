/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/maybe","../../../core/ObjectPool","../../../core/PooledArray","./terrainUtils","./tileUtils"],(function(e,t,s,i,n,a,l){"use strict";let o=function(){function e(){this.waitingAgents=new n,this._upsampleInfo=null,this.loadingAgent=null,this.requestPromise=null,this.requestAbort=null,this.pendingUpdates=0}e.acquire=function(e){const t=u.acquire();return t._init(e),t};var i=e.prototype;return i.release=function(){this.dispose(),p.delete(this),u.release(this)},i.dispose=function(){this.loadingAgent=s.disposeMaybe(this.loadingAgent),this.abortRequest(),this._unsetUpsampleInfo(),this.pendingUpdates=0,this._data=a.releaseTileData(this._data)},e.prune=function(){u.prune(0)},i._init=function(e){this.waitingAgents.clear(),this._data=a.releaseTileData(this._data),this.dataMissing=!1,this.dataInvalidated=!1,this._unsetUpsampleInfo(),this.abortRequest(),this.loadingAgent=null,this.pendingUpdates=0,this._pool=e,this.elevationBounds=null},i.invalidateSourceData=function(){this.dataInvalidated=!0,this.dataMissing=!1,this._unsetUpsampleInfo()},i.abortRequest=function(){this.requestAbort=s.abortMaybe(this.requestAbort),this.requestPromise=null},i._unsetUpsampleInfo=function(){this._upsampleInfo&&(this._upsampleInfo.tile.unrefMapData(),this._pool.release(this._upsampleInfo),this._upsampleInfo=null)},i.setUpsampleInfo=function(e,t){if(e===t||s.isNone(t))this._unsetUpsampleInfo();else{if(null==this._upsampleInfo)this._upsampleInfo=this._pool.acquire();else{if(this._upsampleInfo.tile===t)return;this._upsampleInfo.tile.unrefMapData()}t.refMapData(),l.computeUpsampleInfo(e,t,this._upsampleInfo)}},t._createClass(e,[{key:"upsampleInfo",get:function(){return this._upsampleInfo}},{key:"data",get:function(){return this._data},set:function(e){a.releaseTileData(this._data),this._data=e}}]),e}();const u=new i(o,null,(()=>{})),p=new Map;function r(){p.size>0&&(console.log(`${p.size} live TilePerLayerInfo allocations:`),p.forEach((e=>console.log(e,"\n"))))}e.TilePerLayerInfo=o,e.printAllocations=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
