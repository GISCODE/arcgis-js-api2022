/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../lang","./PropertyOrigin"],(function(i,n,e){"use strict";let t=function(){function i(){this._values=new Map,this.multipleOriginsSupported=!1}var t=i.prototype;return t.clone=function(e){const t=new i;return this._values.forEach(((i,r)=>{e&&e.has(r)||t.set(r,n.clone(i.value),i.origin)})),t},t.get=function(i,n){n=this._normalizeOrigin(n);const e=this._values.get(i);return null==n||(null==e?void 0:e.origin)===n?null==e?void 0:e.value:void 0},t.originOf=function(i){var n,t;return null!=(n=null==(t=this._values.get(i))?void 0:t.origin)?n:e.OriginId.USER},t.keys=function(i){i=this._normalizeOrigin(i);const n=[...this._values.keys()];return null==i?n:n.filter((n=>{var e;return(null==(e=this._values.get(n))?void 0:e.origin)===i}))},t.set=function(i,n,t){if((t=this._normalizeOrigin(t))===e.OriginId.DEFAULTS){const n=this._values.get(i);if(n&&null!=n.origin&&n.origin>t)return}this._values.set(i,new r(n,t))},t.delete=function(i,n){var e;null!=(n=this._normalizeOrigin(n))&&(null==(e=this._values.get(i))?void 0:e.origin)!==n||this._values.delete(i)},t.has=function(i,n){var e;return null!=(n=this._normalizeOrigin(n))?(null==(e=this._values.get(i))?void 0:e.origin)===n:this._values.has(i)},t.forEach=function(i){this._values.forEach((({value:n},e)=>i(n,e)))},t._normalizeOrigin=function(i){if(null!=i)return i===e.OriginId.DEFAULTS?i:e.OriginId.USER},i}(),r=function(i,n){this.value=i,this.origin=n};i.DefaultsStore=t,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));