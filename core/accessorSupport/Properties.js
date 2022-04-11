/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../has","../lang","../Logger","../ObjectPool","./interfaces","./Property","./PropertyOrigin","./Store","./tracking","./utils","./tracking/Flags"],(function(t,e,i,n,s,r,o,a,c,l,u,f){"use strict";function h(t,e,i){return void 0!==t}function g(t,e,i,n){return void 0!==t&&(!(null==i&&t.flags&f.Flags.NonNullable)||(n.lifecycle,r.Lifecycle.INITIALIZING,!1))}function p(t){return t&&"function"==typeof t.destroy}n.getLogger("esri.core.accessorSupport.Properties");let d=function(){function e(t){this.host=t,this.properties=new Map,this.ctorArgs=null,this.destroyed=!1,this.lifecycle=r.Lifecycle.INITIALIZING,this.store=new c.Store,this._origin=a.OriginId.USER;const e=this.host.constructor.__accessorMetadata__,i=e.properties;for(const n in i){const t=new o.Property(this,n,i[n]);this.properties.set(n,t)}this.metadatas=i,this._autoDestroy=e.autoDestroy}var n=e.prototype;return n.initialize=function(){this.lifecycle=r.Lifecycle.CONSTRUCTING},n.constructed=function(){this.lifecycle=r.Lifecycle.CONSTRUCTED},n.destroy=function(){if(this.destroyed=!0,this._autoDestroy)for(const[t,e]of this.properties){const i=this.internalGet(t);i&&p(i)&&(i.destroy(),~e.flags&f.Flags.NonNullable&&this._internalSet(e,null)),e.destroy()}else for(const[t,e]of this.properties)e.destroy()},n.get=function(t){const e=this.properties.get(t);if(e.metadata.get)return e.getComputed();l.trackAccess(e);const i=this.store;return i.has(t)?i.get(t):e.metadata.value},n.originOf=function(t){const e=this.store.originOf(t);if(void 0===e){const e=this.properties.get(t);if(void 0!==e&&e.flags&f.Flags.HasDefaultValue)return"defaults"}return a.idToName(e)},n.has=function(t){return!!this.properties.has(t)&&this.store.has(t)},n.keys=function(){return[...this.properties.keys()]},n.internalGet=function(t){const e=this.properties.get(t);if(h(e))return this.store.has(t)?this.store.get(t):e.metadata.value},n.internalSet=function(t,e){const i=this.properties.get(t);h(i)&&this._internalSet(i,e)},n.getDependsInfo=function(t,e,i){const n=this.properties.get(e);if(!h(n))return"";const s=new Set,r=l.runTracked({onObservableAccessed:t=>s.add(t),onTrackingEnd:()=>{}},(()=>{var e;return null==(e=n.metadata.get)?void 0:e.call(t)}));let a=`${i}${t.declaredClass.split(".").pop()}.${e}: ${r}\n`;if(0===s.size)return a;i+="  ";for(const c of s){if(!(c instanceof o.Property))continue;const t=c.properties.host,e=c.propertyName,n=u.getProperties(t);a+=n?n.getDependsInfo(t,e,i):`${i}${e}: undefined\n`}return a},n.setAtOrigin=function(t,e,i){const n=this.properties.get(t);if(h(n))return this._setAtOrigin(n,e,i)},n.isOverridden=function(t){const e=this.properties.get(t);return void 0!==e&&!!(e.flags&f.Flags.Overriden)},n.clearOverride=function(t){const e=this.properties.get(t);void 0!==e&&e.flags&f.Flags.Overriden&&(e.flags&=~f.Flags.Overriden,e.notifyChange())},n.override=function(t,e){const i=this.properties.get(t);if(!g(i,t,e,this))return;const n=i.metadata.cast;if(n){const t=this._cast(n,e),{valid:i,value:s}=t;if(v.release(t),!i)return;e=s}i.flags|=f.Flags.Overriden,this._internalSet(i,e)},n.set=function(t,e){const i=this.properties.get(t);if(!g(i,t,e,this))return;const n=i.metadata.cast;if(n){const t=this._cast(n,e),{valid:i,value:s}=t;if(v.release(t),!i)return;e=s}const s=i.metadata.set;s?s.call(this.host,e):this._internalSet(i,e)},n.setDefaultOrigin=function(t){this._origin=a.nameToId(t)},n.getDefaultOrigin=function(){return a.idToName(this._origin)},n.notifyChange=function(t){const e=this.properties.get(t);void 0!==e&&e.notifyChange()},n.invalidate=function(t){const e=this.properties.get(t);void 0!==e&&e.invalidate()},n.commit=function(t){const e=this.properties.get(t);void 0!==e&&e.commit()},n._internalSet=function(t,e){const i=this.lifecycle!==r.Lifecycle.INITIALIZING?this._origin:a.OriginId.DEFAULTS;this._setAtOrigin(t,e,i)},n._setAtOrigin=function(t,e,n){const s=this.store,r=t.propertyName;s.has(r,n)&&i.equals(e,s.get(r))&&~t.flags&f.Flags.Overriden&&n===s.originOf(r)||(t.invalidate(),s.set(r,e,n),t.commit(),l.initializeDependencyTracking(this.host,t))},n._cast=function(t,e){const i=v.acquire();return i.valid=!0,i.value=e,t&&(i.value=t.call(this.host,e,i)),i},t._createClass(e,[{key:"initialized",get:function(){return this.lifecycle!==r.Lifecycle.INITIALIZING}}]),e}();const v=new s(function(){function t(){this.value=null,this.valid=!0}var e=t.prototype;return e.acquire=function(){this.valid=!0},e.release=function(){this.value=null},t}());return d}));
