/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../Logger","../ensureType","../get","../metadata","../set"],(function(e,r,t,n,o,s){"use strict";function i(e={}){return(i,a)=>{if(i===Function.prototype)throw new Error(`Inappropriate use of @property() on a static field: ${i.name}.${a}. Accessor does not support static properties.`);const c=Object.getOwnPropertyDescriptor(i,a),l=o.getOwnPropertyMetadata(i,a);c&&(c.get||c.set?(l.get=c.get||l.get,l.set=c.set||l.set):"value"in c&&("value"in e&&r.getLogger("esri.core.accessorSupport.decorators.property").warn(`@property() will redefine the value of "${a}" on "${i.constructor.name}" already defined in the metadata`,e),l.value=e.value=c.value)),null!=e.readOnly&&(l.readOnly=e.readOnly);const y=e.aliasOf;if(y){const e="string"==typeof y?y:y.source,r="string"==typeof y?null:!0===y.overridable;let t;l.dependsOn=[e],l.get=function(){let r=n.get(this,e);if("function"==typeof r){t||(t=e.split(".").slice(0,-1).join("."));const o=n.get(this,t);o&&(r=r.bind(o))}return r},l.readOnly||(l.set=r?function(e){void 0!==e?this._override(a,e):this._clearOverride(a)}:function(r){s.set(this,e,r)})}const f=e.type,g=e.types;l.cast||(f?l.cast=u(f):g&&(Array.isArray(g)?l.cast=t.ensureArrayTyped(t.ensureOneOfType(g[0])):l.cast=t.ensureOneOfType(g))),e.range&&(l.cast=p(l.cast,e.range)),o.mergeProperty(l,e)}}function a(e,r,t){const n=o.getOwnPropertyMetadata(e,t);n.json||(n.json={});let s=n.json;return void 0!==r&&(s.origins||(s.origins={}),s.origins[r]||(s.origins[r]={}),s=s.origins[r]),s}function u(e){let r=0,n=e;if(t.isLongFormType(e))return t.ensureLongFormType(e);for(;Array.isArray(n)&&1===n.length&&"string"!=typeof n[0]&&"number"!=typeof n[0];)n=n[0],r++;const o=n;if(t.isOneOf(o))return 0===r?t.ensureOneOf(o):t.ensureNArrayTyped(t.ensureOneOf(o),r);if(1===r)return t.ensureArray(o);if(r>1)return t.ensureNArray(o,r);const s=e;return s.from?s.from:t.ensureType(s)}function p(e,r){return t=>{let n=+e(t);return null!=r.step&&(n=Math.round(n/r.step)*r.step),null!=r.min&&(n=Math.max(r.min,n)),null!=r.max&&(n=Math.min(r.max,n)),n}}e.ensureRange=p,e.property=i,e.propertyJSONMeta=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
