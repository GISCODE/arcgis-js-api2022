/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["require","exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/maybe","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../Widget","../css","../../support/timeWidgetUtils","../../support/widgetUtils","../../support/decorators/messageBundle","../../../core/Logger","../../support/jsxFactory"],(function(e,t,o,s,r,n,i,c,l,a,u,p,d,_,h,m,f){"use strict";t.TimezonePicker=function(t){function s(e,o){var s;return(s=t.call(this,e,o)||this)._focused=!1,s}o._inheritsLoose(s,t);var n=s.prototype;return n.loadDependencies=function(){return new Promise(((t,o)=>e(["../../../chunks/calcite-icon"],t,o)))},n.render=function(){const e=this._gmtOffsets,t=this._timezoneMessages;if(r.isNone(e)||r.isNone(t))return f.tsx("div",{class:p.TIMEZONE_PICKER_CSS.base});const o=this.value,s=this._selectedItemText;return f.tsx("div",{class:p.TIMEZONE_PICKER_CSS.base},f.tsx("select",{key:"hidden-select",class:p.TIMEZONE_PICKER_CSS.hiddenSelect,"aria-label":t.chooseTimezone,title:t.chooseTimezone,value:String(o),bind:this,onfocus:this._onFocus,onblur:this._onBlur,onchange:this._onDropdownSelectChange},e.map((({utcOffset:e,shortWithUTC:t,long:o})=>f.tsx("option",{value:String(e)},t," - ",o)))),f.tsx("div",{key:"visible-select",class:this.classes({[p.TIMEZONE_PICKER_CSS.select]:!0,[p.TIMEZONE_PICKER_CSS.selectFocused]:this._focused})},s,f.tsx("calcite-icon",{icon:"chevron-down",scale:"s"})))},n._onDropdownSelectChange=function(e){const t=e.target,o=parseInt(null==t?void 0:t.value,10);Number.isFinite(o)&&r.isSome(this.onChange)&&this.onChange(o)},n._onFocus=function(){this._focused=!0},n._onBlur=function(){this._focused=!1},o._createClass(s,[{key:"_gmtOffsets",get:function(){return r.applySome(this._timezoneMessages,d.getTimezoneInfos)}},{key:"_selectedItem",get:function(){const e=this.value,t=this._gmtOffsets;return r.isNone(e)||r.isNone(t)?null:t.find((t=>t.utcOffset===e))}},{key:"_selectedItemText",get:function(){const e=this._selectedItem;return r.isSome(e)?e.short:""}}]),s}(u),s.__decorate([n.property()],t.TimezonePicker.prototype,"value",void 0),s.__decorate([n.property()],t.TimezonePicker.prototype,"onChange",void 0),s.__decorate([n.property(),h.messageBundle("esri/widgets/support/t9n/timezone")],t.TimezonePicker.prototype,"_timezoneMessages",void 0),s.__decorate([n.property()],t.TimezonePicker.prototype,"_focused",void 0),s.__decorate([n.property({readOnly:!0})],t.TimezonePicker.prototype,"_gmtOffsets",null),s.__decorate([n.property({readOnly:!0})],t.TimezonePicker.prototype,"_selectedItem",null),s.__decorate([n.property({readOnly:!0})],t.TimezonePicker.prototype,"_selectedItemText",null),t.TimezonePicker=s.__decorate([a.subclass("esri.widgets.ShadowCast.components.TimezonePicker")],t.TimezonePicker),Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));