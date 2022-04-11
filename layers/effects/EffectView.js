/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/has","../../core/lang","../../core/Logger","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./parser","./utils"],(function(e,t,s,r,n,c,i,o,f,l,a,u){"use strict";const h=-1;function _(e){const t=a.parse(e)||[];return y(t)?[{scale:h,effects:t}]:t}function p(e,t,s){var r,n,c,i;if(null==(r=e[0])||!r.effects||null==(n=t[0])||!n.effects)return!0;return!(((null==(c=e[0])?void 0:c.scale)===h||(null==(i=t[0])?void 0:i.scale)===h)&&(e.length>1||t.length>1)&&s<=0)&&u.canInterpolateEffects(e[0].effects,t[0].effects)}function d(e,t,s){var r,n;const c=e.length>t.length?e:t,i=e.length>t.length?t:e,o=i[i.length-1],f=null!=(r=null==o?void 0:o.scale)?r:s,l=null!=(n=null==o?void 0:o.effects)?n:[];for(let a=i.length;a<c.length;a++)i.push({scale:f,effects:[...l]});for(let a=0;a<c.length;a++)i[a].scale=i[a].scale===h?s:i[a].scale,c[a].scale=c[a].scale===h?s:c[a].scale,u.normalizeEffects(i[a].effects,c[a].effects)}function g(e,t,s){return e+(t-e)*s}function y(e){const t=e[0];return!!t&&"type"in t}e.EffectView=function(e){function s(t){var s;return(s=e.call(this,t)||this)._from=null,s._to=null,s._final=null,s._current=[],s._time=0,s.duration=n("mapview-transitions-duration"),s.effects=[],s}t._inheritsLoose(s,e);var r=s.prototype;return r.canTransitionTo=function(e){try{return this.scale>0&&p(this._current,_(e),this.scale)}catch{return!1}},r.transitionStep=function(e,t){this._applyTimeTransition(e),this._updateForScale(t)},r.end=function(){this._applyTimeTransition(this.duration)},r._transitionTo=function(e){this.scale>0&&p(this._current,e,this.scale)?(this._final=e,this._to=c.clone(e),d(this._current,this._to,this.scale),this._from=c.clone(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=e),this._set("effects",this._current[0]?c.clone(this._current[0].effects):[])},r._applyTimeTransition=function(e){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=e;const t=Math.min(1,this._time/this.duration);for(let s=0;s<this._current.length;s++){const e=this._current[s],r=this._from[s],n=this._to[s];e.scale=g(r.scale,n.scale,t);for(let s=0;s<e.effects.length;s++){const c=e.effects[s],i=r.effects[s],o=n.effects[s];c.interpolate(i,o,t)}}1===t&&(this._current=this._final,this._set("effects",this._current[0]?c.clone(this._current[0].effects):[]),this._from=this._to=this._final=null)},r._updateForScale=function(e){if(this._set("scale",e),0===this._current.length)return;const t=this._current,s=this._current.length-1;let r,n,c=1;if(1===t.length||e>=t[0].scale)n=r=t[0].effects;else if(e<=t[s].scale)n=r=t[s].effects;else for(let i=0;i<s;i++){const s=t[i],o=t[i+1];if(s.scale>=e&&o.scale<=e){c=(e-s.scale)/(o.scale-s.scale),r=s.effects,n=o.effects;break}}for(let i=0;i<this.effects.length;i++){this.effects[i].interpolate(r[i],n[i],c)}},t._createClass(s,[{key:"effect",set:function(e){if(this._get("effect")!==(e=e||"")){this._set("effect",e);try{this._transitionTo(_(e))}catch(t){this._transitionTo([]),i.getLogger(this.declaredClass).warn("Invalid Effect",{effect:e,error:t})}}}},{key:"hasEffects",get:function(){return this.transitioning||!!this.effects.length}},{key:"scale",set:function(e){this._updateForScale(e)}},{key:"transitioning",get:function(){return null!==this._to}}]),s}(r),s.__decorate([o.property()],e.EffectView.prototype,"_to",void 0),s.__decorate([o.property()],e.EffectView.prototype,"duration",void 0),s.__decorate([o.property({value:""})],e.EffectView.prototype,"effect",null),s.__decorate([o.property({readOnly:!0})],e.EffectView.prototype,"effects",void 0),s.__decorate([o.property({readOnly:!0})],e.EffectView.prototype,"hasEffects",null),s.__decorate([o.property({value:0})],e.EffectView.prototype,"scale",null),s.__decorate([o.property({readOnly:!0})],e.EffectView.prototype,"transitioning",null),e.EffectView=s.__decorate([l.subclass("esri.layers.effects.EffectView")],e.EffectView),e.canInterpolateEffectStops=p,e.convertEffectToStops=_,e.normalizeEffectStops=d,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));