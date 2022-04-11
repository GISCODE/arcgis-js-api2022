/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./componentsUtils","./dom"],(function(t,e,i){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   */const a="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;display:-ms-flexbox;display:flex}:host([scale=s]){min-height:1.5rem}:host([scale=m]){min-height:2rem}:host([scale=l]){min-height:2.75rem}.tab-nav{display:-ms-flexbox;display:flex;width:100%;-ms-flex-pack:start;justify-content:flex-start;overflow:auto}:host([layout=center]) .tab-nav{-ms-flex-pack:center;justify-content:center}.tab-nav-active-indicator-container{position:absolute;left:0px;right:0px;bottom:0px;height:0.125rem;width:100%;overflow:hidden}.tab-nav-active-indicator{position:absolute;bottom:0px;display:block;height:0.125rem;background-color:var(--calcite-ui-brand);-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-timing-function:cubic-bezier(0, 0, 0.2, 1)}:host([position=below]) .tab-nav-active-indicator{bottom:unset;top:0px}:host([position=below]) .tab-nav-active-indicator-container{bottom:unset;top:0px}:host([bordered]) .tab-nav-active-indicator-container{bottom:unset}:host([bordered][position=below]) .tab-nav-active-indicator-container{bottom:0;top:unset}",n=e.proxyCustomElement(class extends e.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTabChange=e.createEvent(this,"calciteTabChange",7),this.scale="m",this.layout="inline",this.position="below",this.bordered=!1,this.animationActiveDuration=.3,this.handleContainerScroll=()=>{this.activeIndicatorEl.style.transitionDuration="0s",this.updateOffsetPosition()}}async selectedTabChanged(){localStorage&&this.storageId&&void 0!==this.selectedTab&&null!==this.selectedTab&&localStorage.setItem(`calcite-tab-nav-${this.storageId}`,JSON.stringify(this.selectedTab)),this.calciteTabChange.emit({tab:this.selectedTab}),this.selectedTabEl=await this.getTabTitleById(this.selectedTab)}selectedTabElChanged(){this.updateOffsetPosition(),this.updateActiveWidth(),this.activeIndicatorEl.style.transitionDuration=`${this.animationActiveDuration}s`}componentWillLoad(){const t=`calcite-tab-nav-${this.storageId}`;if(localStorage&&this.storageId&&localStorage.getItem(t)){const e=JSON.parse(localStorage.getItem(t));this.selectedTab=e,this.calciteTabChange.emit({tab:this.selectedTab})}}componentWillRender(){var t,e,i,a;this.layout=null===(t=this.el.closest("calcite-tabs"))||void 0===t?void 0:t.layout,this.position=null===(e=this.el.closest("calcite-tabs"))||void 0===e?void 0:e.position,this.scale=null===(i=this.el.closest("calcite-tabs"))||void 0===i?void 0:i.scale,this.bordered=null===(a=this.el.closest("calcite-tabs"))||void 0===a?void 0:a.bordered,this.selectedTabEl&&this.updateOffsetPosition()}componentDidRender(){this.tabTitles.length&&this.tabTitles.every((t=>!t.active))&&!this.selectedTab&&this.tabTitles[0].getTabIdentifier().then((t=>{this.calciteTabChange.emit({tab:t})}))}render(){const t=i.getElementDir(this.el),a=`${this.indicatorWidth}px`,n=`${this.indicatorOffset}px`,s="rtl"!==t?{width:a,left:n}:{width:a,right:n};return e.h(e.Host,{role:"tablist"},e.h("div",{class:"tab-nav",onScroll:this.handleContainerScroll,ref:t=>this.tabNavEl=t},e.h("div",{class:"tab-nav-active-indicator-container",ref:t=>this.activeIndicatorContainerEl=t},e.h("div",{class:"tab-nav-active-indicator",ref:t=>this.activeIndicatorEl=t,style:s})),e.h("slot",null)))}resizeHandler(){this.activeIndicatorEl.style.transitionDuration="0s",this.updateActiveWidth(),this.updateOffsetPosition()}focusPreviousTabHandler(t){const e=this.getIndexOfTabTitle(t.target,this.enabledTabTitles);(this.enabledTabTitles[e-1]||this.enabledTabTitles[this.enabledTabTitles.length-1]).focus(),t.stopPropagation(),t.preventDefault()}focusNextTabHandler(t){const e=this.getIndexOfTabTitle(t.target,this.enabledTabTitles);(this.enabledTabTitles[e+1]||this.enabledTabTitles[0]).focus(),t.stopPropagation(),t.preventDefault()}activateTabHandler(t){this.selectedTab=t.detail.tab?t.detail.tab:this.getIndexOfTabTitle(t.target),t.stopPropagation(),t.preventDefault()}updateTabTitles(t){t.target.active&&(this.selectedTab=t.detail)}globalTabChangeHandler(t){this.syncId&&t.target!==this.el&&t.target.syncId===this.syncId&&this.selectedTab!==t.detail.tab&&(this.selectedTab=t.detail.tab)}updateOffsetPosition(){var t,e,a,n,s;const o=i.getElementDir(this.el),l=null===(t=this.activeIndicatorContainerEl)||void 0===t?void 0:t.offsetWidth,r=null===(e=this.selectedTabEl)||void 0===e?void 0:e.offsetLeft,c=l-(r+(null===(a=this.selectedTabEl)||void 0===a?void 0:a.offsetWidth));this.indicatorOffset="rtl"!==o?r-(null===(n=this.tabNavEl)||void 0===n?void 0:n.scrollLeft):c+(null===(s=this.tabNavEl)||void 0===s?void 0:s.scrollLeft)}updateActiveWidth(){var t;this.indicatorWidth=null===(t=this.selectedTabEl)||void 0===t?void 0:t.offsetWidth}getIndexOfTabTitle(t,e=this.tabTitles){return e.indexOf(t)}async getTabTitleById(t){return Promise.all(this.tabTitles.map((t=>t.getTabIdentifier()))).then((e=>this.tabTitles[e.indexOf(t)]))}get tabTitles(){return i.filterDirectChildren(this.el,"calcite-tab-title")}get enabledTabTitles(){return i.filterDirectChildren(this.el,"calcite-tab-title:not([disabled])")}get el(){return this}static get watchers(){return{selectedTab:["selectedTabChanged"],selectedTabEl:["selectedTabElChanged"]}}static get style(){return a}},[1,"calcite-tab-nav",{storageId:[1,"storage-id"],syncId:[1,"sync-id"],scale:[1537],layout:[1537],position:[1537],bordered:[1540],indicatorOffset:[1026,"indicator-offset"],indicatorWidth:[1026,"indicator-width"],selectedTab:[32],selectedTabEl:[32]},[[9,"resize","resizeHandler"],[0,"calciteTabsFocusPrevious","focusPreviousTabHandler"],[0,"calciteTabsFocusNext","focusNextTabHandler"],[0,"calciteTabsActivate","activateTabHandler"],[0,"calciteTabTitleRegister","updateTabTitles"],[16,"calciteTabChange","globalTabChangeHandler"]]]);function s(){if("undefined"==typeof customElements)return;["calcite-tab-nav"].forEach((t=>{if("calcite-tab-nav"===t)customElements.get(t)||customElements.define(t,n)}))}s(),t.TabNav=n,t.defineCustomElement=s}));
