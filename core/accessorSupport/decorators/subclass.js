/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../has","../interfaces","../metadata","../tracking","../extensions/serializableProperty"],(function(e,t,r,s,o,i,n){"use strict";const a=new Set,c=new Set;function l(e){return r=>{r.prototype.declaredClass=e,u(r);const s=[],i=[];let n=r.prototype;for(;n;)n.hasOwnProperty("initialize")&&!a.has(n.initialize)&&(a.add(n.initialize),s.push(n.initialize)),n.hasOwnProperty("destroy")&&!c.has(n.destroy)&&(c.add(n.destroy),i.push(n.destroy)),n=Object.getPrototypeOf(n);a.clear(),c.clear();let l=function(e){function r(...o){var n;if((n=e.call(this,...o)||this).constructor===r&&"function"==typeof n.postscript){if(s.length&&Object.defineProperty(t._assertThisInitialized(n),"initialize",{enumerable:!1,configurable:!0,value(){for(let e=s.length-1;e>=0;e--)s[e].call(this)}}),i.length){let e=!1;Object.defineProperty(t._assertThisInitialized(n),"destroy",{enumerable:!1,configurable:!0,value(){if(!e){e=!0;for(let e=0;e<i.length;e++)i[e].call(this)}}})}n.postscript(...o)}return n}return t._inheritsLoose(r,e),r}(r);return l.__accessorMetadata__=o.getOwnClassMetadata(r.prototype),l.prototype.declaredClass=e,l}}function p(e,t){return null==t.get?function(){const t=this.__accessor__.properties.get(e);if(void 0===t)return;i.trackAccess(t);const r=this.__accessor__.store;return r.has(e)?r.get(e):t.metadata.value}:function(){const t=this.__accessor__.properties.get(e);if(void 0!==t)return t.getComputed()}}function u(e){const t=e.prototype,r=o.getOwnClassMetadata(t).properties,i={};for(const o of Object.getOwnPropertyNames(r)){const e=r[o];n.processPrototypePropertyMetadata(e),i[o]={enumerable:!0,configurable:!0,get:p(o,e),set(t){const r=this.__accessor__;if(void 0!==r){if(!Object.isFrozen(this)){if(r.initialized&&e.readOnly)throw new TypeError(`[accessor] cannot assign to read-only property '${o}' of ${this.declaredClass}`);if(r.lifecycle===s.Lifecycle.CONSTRUCTED&&e.constructOnly)throw new TypeError(`[accessor] cannot assign to construct-only property '${o}' of ${this.declaredClass}`);r.set(o,t)}}else Object.defineProperty(this,o,{enumerable:!0,configurable:!0,writable:!0,value:t})}}}Object.defineProperties(e.prototype,i)}e.finalizeClass=u,e.subclass=l,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
