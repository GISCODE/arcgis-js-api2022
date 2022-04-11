/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../Graphic","../../../core/maybe","../../../core/workers/WorkerHandle","../../../geometry/SpatialReference","../../../layers/support/Field"],(function(e,r,t,o,n,i,s){"use strict";let l=function(){function e(e){this._schedule=e,this._handle=new a(e)}var r=e.prototype;return r.destroy=function(){this._handle.destroy()},r.invoke=function(e,r){return e.buffer&&0!==e.buffer.byteLength?(e.options.sourceSpatialReference&&e.options.sourceSpatialReference instanceof i&&(e.options={...e.options,sourceSpatialReference:e.options.sourceSpatialReference.toJSON()}),this._handle.invoke(e,r).then((e=>this._schedule((()=>{if(e.spatialReference=i.fromJSON(e.spatialReference),e.fields)for(let t=0;t<e.fields.length;t++)e.fields[t]=s.fromJSON(e.fields[t]);const r=e.spatialReference;for(const n of e.features)n.uid=t.generateUID(),o.isSome(n.geometry)&&(n.geometry.spatialReference=r);return e}))))):Promise.resolve(null)},e}(),a=function(e){function t(r){return e.call(this,"PBFDecoderWorker","_parseFeatureQuery",r)||this}return r._inheritsLoose(t,e),t.prototype.getTransferList=function(e){return[e.buffer]},t}(n.WorkerHandle);e.PBFDecoder=l,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
