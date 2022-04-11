/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../Color","../../request","../../core/Error","../../core/Logger","../../core/LRUCache","../../core/maybe","../../core/promiseUtils","../../core/string","../../support/arcadeOnDemand","../../symbols/CIMSymbol"],(function(e,t,o,i,s,r,n,l,a,c,u,f){"use strict";const y=r.getLogger("esri.renderers.support.DictionaryLoader"),m={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}};let h=function(){function e(e,t,o){this.config=null,this.fieldMap=null,this.url=null,this._ongoingRequests=new Map,this._symbolCache=new n(100),this.url=e,this.config=t,this.fieldMap=o}var r=e.prototype;return r.getSymbolFields=function(){return this._symbolFields},r.getSymbolAsync=function(){var e=t._asyncToGenerator((function*(e,t){let i;this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(t));try{i=yield this._dictionaryPromise}catch(d){if(a.isAbortError(d))return this._dictionaryPromise=null,null}const s={};if(this.fieldMap)for(const o of this._symbolFields){const t=this.fieldMap[o];if(t&&null!=e.attributes[t]){const i=""+e.attributes[t];s[o]=i}else s[o]=""}const r=i(s,t);if(!r||"string"!=typeof r)return null;const n=c.numericHash(r).toString(),u=this._symbolCache.get(n);if(u)return u.catch((()=>{this._symbolCache.pop(n)})),u;const f=r.split(";"),y=[],m=[];for(const l of f)if(l)if(l.includes("po:")){const e=l.substr(3).split("|");if(3===e.length){const t=e[0],i=e[1];let s=e[2];if("DashTemplate"===i)s=s.split(" ").map((e=>Number(e)));else if("Color"===i){const e=new o(s).toRgba();s=[e[0],e[1],e[2],255*e[3]]}else s=Number(s);m.push({primitiveName:t,propertyName:i,value:s})}}else if(l.includes("|")){for(const e of l.split("|"))if(this._itemNames.has(e)){y.push(e);break}}else this._itemNames.has(l)&&y.push(l);const h=!l.isSome(e.geometry)||!e.geometry.hasZ&&"point"===e.geometry.type,p=this._cimPartsToCIMSymbol(y,m,h,t);return this._symbolCache.put(n,p,1),p}));function i(t,o){return e.apply(this,arguments)}return i}(),r.fetchResources=function(){var e=t._asyncToGenerator((function*(e){if(this._dictionaryPromise)return this._dictionaryPromise;if(!this.url)return void y.error("no valid URL!");const t=l.isSome(e)?e.abortOptions:null,o=i(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},...t}),[{data:r}]=yield Promise.all([o,u.loadArcade()]);if(!r)throw this._dictionaryPromise=null,new s("esri.renderers.DictionaryRenderer","Bad dictionary data!");const n=r.expression,a=r.authoringInfo;this._refSymbolUrlTemplate=this.url+"/"+r.cimRefTemplateUrl,this._itemNames=new Set(r.itemsNames),this._symbolFields=a.symbol;const c={};if(this.config){const e=this.config;for(const t in e)c[t]=e[t]}if(a.configuration)for(const i of a.configuration)c.hasOwnProperty(i.name)||(c[i.name]=i.value);const f=[];if(l.isSome(e)&&e.fields&&this.fieldMap)for(const i of this._symbolFields){const t=this.fieldMap[i],o=e.fields.filter((e=>e.name===t));o.length>0&&f.push({...o[0],name:i})}return this._dictionaryPromise=u.createDictionaryExpression(n,l.isSome(e)?e.spatialReference:null,f,c).then((e=>{const t={scale:0};return(o,i)=>{const s=e.repurposeFeature({geometry:null,attributes:o});return t.scale=l.isSome(i)?i.scale:void 0,e.evaluate({$feature:s,$view:t})}})).catch((e=>(y.error("Creating dictinoary expression failed:",e),null))),this._dictionaryPromise}));function o(t){return e.apply(this,arguments)}return o}(),r._cimPartsToCIMSymbol=function(){var e=t._asyncToGenerator((function*(e,t,o,i){const s=new Array(e.length);for(let l=0;l<e.length;l++)s[l]=this._getSymbolPart(e[l],i);const r=yield Promise.all(s),n=this.fieldMap;for(const l of r)p(l,n);return new f({data:this._combineSymbolParts(r,t,o)})}));function o(t,o,i,s){return e.apply(this,arguments)}return o}(),r._getSymbolPart=function(){var e=t._asyncToGenerator((function*(e,t){if(this._ongoingRequests.has(e))return this._ongoingRequests.get(e).then((e=>e.data));const o=this._refSymbolUrlTemplate.replace(/\{itemName\}/gi,e),s=i(o,{responseType:"json",query:{f:"json"},...t});this._ongoingRequests.set(e,s);try{return(yield s).data}catch(r){return this._ongoingRequests.delete(e),Promise.reject(r)}}));function o(t,o){return e.apply(this,arguments)}return o}(),r._combineSymbolParts=function(e,t,o){if(!e||0===e.length)return null;const i={...e[0]};if(e.length>1){i.symbolLayers=[];for(const t of e){const e=t;i.symbolLayers.unshift(...e.symbolLayers)}}return o&&(i.callout=m),{type:"CIMSymbolReference",symbol:i,primitiveOverrides:t}},e}();function p(e,t){if(!e)return;const o=e.symbolLayers;if(!o)return;let i=o.length;for(;i--;){const e=o[i];if(e&&!1!==e.enable&&"CIMVectorMarker"===e.type)d(e,t)}}function d(e,t){const o=e.markerGraphics;if(o)for(const i of o){if(!i)continue;const e=i.symbol;if(e)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":p(e,t);break;case"CIMTextSymbol":e.fieldMap=t}}}e.DictionaryLoader=h,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
