/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./componentsUtils","./label"],(function(t,e,a){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   */const i={container:"container"},n="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:inline}:host([alignment=start]){text-align:start}:host([alignment=end]){text-align:end}:host([alignment=center]){text-align:center}:host([scale=s]) .container{margin-bottom:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) .container{margin-bottom:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) .container{margin-bottom:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host .container{margin-top:0px;margin-right:0px;margin-left:0px;width:100%;line-height:1.375;color:var(--calcite-ui-text-1)}:host([layout=default]) .container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:0.25rem}:host([layout=inline]) .container,:host([layout=inline-space-between]) .container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;gap:0.5rem}:host([layout=inline][scale=l]) .container{gap:0.75rem}:host([layout=inline-space-between]) .container{-ms-flex-pack:justify;justify-content:space-between}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled])>.container{pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted(*){pointer-events:none}:host([disabled]) ::slotted(*[disabled]),:host([disabled]) ::slotted(*[disabled] *){--tw-bg-opacity:1}:host([disabled]) ::slotted(calcite-input-message:not([active])){--tw-bg-opacity:0}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([disable-spacing]) .container{margin:0px;gap:0px}",o=e.proxyCustomElement(class extends e.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalLabelClick=e.createEvent(this,"calciteInternalLabelClick",3),this.alignment="start",this.status="idle",this.scale="m",this.layout="default",this.disableSpacing=!1,this.disabled=!1,this.labelClickHandler=t=>{this.calciteInternalLabelClick.emit({sourceEvent:t})}}connectedCallback(){document.dispatchEvent(new CustomEvent(a.labelConnectedEvent))}disconnectedCallback(){document.dispatchEvent(new CustomEvent(a.labelDisconnectedEvent))}render(){return e.h(e.Host,{onClick:this.labelClickHandler},e.h("div",{class:i.container},e.h("slot",null)))}get el(){return this}static get style(){return n}},[1,"calcite-label",{alignment:[513],status:[513],for:[513],scale:[513],layout:[513],disableSpacing:[4,"disable-spacing"],disabled:[516]}]);function s(){if("undefined"==typeof customElements)return;["calcite-label"].forEach((t=>{if("calcite-label"===t)customElements.get(t)||customElements.define(t,o)}))}s();
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   */
const l=o,c=s;t.CalciteLabel=l,t.defineCustomElement=c,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));