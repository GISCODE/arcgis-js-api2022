/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/PooledArray"],(function(e,t,o){"use strict";let i=function(){function e(e,t){this._factoryCallback=e,this._lengthCallback=t,this._pool=new Map}var i=e.prototype;return i.acquire=function(t){if(!e.test.disabled){const e=this._pool.get(t);if(e&&0!==e.length)return e.pop()}try{return this._factoryCallback(t)}catch(o){const e=window.performance&&window.performance.memory;let i="";throw e&&(i=`\n  totalJSHeapSize: ${e.totalJSHeapSize}, usedJSHeapSize: ${e.usedJSHeapSize}, jsHeapSizeLimit: ${e.jsHeapSizeLimit}`),console.log("Array allocation of size "+t+" failed: "+o+i),o}},i.release=function(t){if(e.test.disabled)return;const i=this._lengthCallback(t);let l=this._pool.get(i);l||(l=new o({shrink:!0}),this._pool.set(i,l)),l.push(t)},i.clear=function(){this._pool.clear()},t._createClass(e,[{key:"test",get:function(){return{size:this._pool.size}}}]),e}();i.test={disabled:!1},e.BufferPool=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));