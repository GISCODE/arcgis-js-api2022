/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./dom"],(function(e,t){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   */const n="calciteInternalLabelClick",l="calciteInternalLabelConnected",o="calciteInternaLabelDisconnected",i="calcite-label",c=new WeakMap,s=new Set,a=e=>{const{id:n}=e,l=n&&t.queryElementRoots(e,{selector:`${i}[for="${n}"]`});if(l)return l;const o=t.closestElementCrossShadowBoundary(e,i);return!o||d(o,e)?null:o};function d(e,t){let n;const l="custom-element-ancestor-check",o=l=>{l.stopImmediatePropagation();const o=l.composedPath();n=o.slice(o.indexOf(t),o.indexOf(e))};e.addEventListener(l,o,{once:!0}),t.dispatchEvent(new CustomEvent(l,{composed:!0,bubbles:!0})),e.removeEventListener(l,o);return n.filter((n=>n!==t&&n!==e)).filter((e=>{var t;return null===(t=e.tagName)||void 0===t?void 0:t.includes("-")})).length>0}function r(e){const t=a(e.el);if(c.has(t))return;const i=E.bind(e),d=m.bind(e);if(t){(()=>{e.labelEl=t;const l=v.bind(e);c.set(e.labelEl,l),e.labelEl.addEventListener(n,l)})(),s.delete(e),document.removeEventListener(l,i),document.addEventListener(o,d)}else t||s.has(e)||(d(),document.removeEventListener(o,d))}function u(e){const t=E.bind(e),i=m.bind(e);if(s.delete(e),document.removeEventListener(l,t),document.removeEventListener(o,i),!e.labelEl)return;const a=c.get(e.labelEl);e.labelEl.removeEventListener(n,a),c.delete(e.labelEl)}function b(e){var t,n;return e.label||(null===(n=null===(t=e.labelEl)||void 0===t?void 0:t.textContent)||void 0===n?void 0:n.trim())||""}function v(e){if(this.disabled)return;this.el.contains(e.detail.sourceEvent.target)||this.onLabelClick(e)}function E(){s.has(this)&&r(this)}function m(){s.add(this);const e=E.bind(this);document.addEventListener(l,e)}e.connectLabel=r,e.disconnectLabel=u,e.getLabelText=b,e.labelConnectedEvent=l,e.labelDisconnectedEvent=o}));