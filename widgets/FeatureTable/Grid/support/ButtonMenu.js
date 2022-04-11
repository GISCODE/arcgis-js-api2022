/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/events","../../../../core/HandleOwner","../../../../core/maybe","../../../../core/watchUtils","../../../../core/accessorSupport/decorators/aliasOf","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/decorators/subclass","../../../Widget","./ButtonMenuViewModel","../../../support/Popover","../../../support/widgetUtils","../../../../core/Logger","../../../support/jsxFactory"],(function(e,t,n,o,i,s,r,a,l,u,c,d,p,m,h,b,_,f){"use strict";const v={base:"esri-button-menu",content:"esri-button-menu__content",contentWrapper:"esri-button-menu__content-wrapper",itemWrapper:"esri-button-menu__item-wrapper",label:"esri-button-menu__label",icon:"esri-button-menu__icon",item:"esri-button-menu__item",itemLabel:"esri-button-menu__item-label",itemLabelContent:"esri-button-menu__item-label-content",selectableMenuItem:"esri-button-menu__item--selectable",selectedMenuItem:"esri-button-menu__item--selected",checkbox:"esri-button-menu__checkbox",embeddedContentWrapper:"esri-button-menu__embedded-content-wrapper",button:"esri-button-menu__button",buttonSelected:"esri-button-menu__button--selected",defaultIconClass:"esri-icon-menu",widget:"esri-widget"};let C=function(t){function o(n,o){var i;return(i=t.call(this,n,o)||this)._menuContentNode=null,i._popover=null,i._rootNode=null,i.iconClass=null,i.items=null,i.label=null,i.open=null,i.viewModel=new m,i._handleOutsideClick=i._handleOutsideClick.bind(e._assertThisInitialized(i)),i}e._inheritsLoose(o,t);var r=o.prototype;return r.postInitialize=function(){this._popover=new h({owner:this,open:!!this.open,placement:b.isRTL(this.container)?"bottom-start":"bottom-end",renderContentFunction:this.renderMenuContent,anchorElement:this._rootNode}),this.handles.add([s.watch(this,"open",(e=>this._popover.set("open",e)))]),document.addEventListener("click",this._handleOutsideClick)},r.destroy=function(){var e;null==(e=this._popover)||e.destroy(),this._popover=null,document.removeEventListener("click",this._handleOutsideClick)},r._handleOutsideClick=function(e){var t,n;if(!this.open||!this._rootNode||!this._menuContentNode)return;const o=e.target;null!=(t=this._menuContentNode)&&t.contains(o)||null!=(n=this._rootNode)&&n.contains(o)||(this.open=!1)},r.render=function(){return f.tsx("div",{afterCreate:this._afterRootNodeCreate,bind:this,"data-node-ref":"_rootNode",class:this.classes(v.base,v.widget),key:"menu"},this.renderMenuButton())},r.renderMenuButton=function(){const{iconClass:e,id:t,label:n,open:o}=this,i=this.classes([v.button,e||v.defaultIconClass,o?v.buttonSelected:null]);return f.tsx("button",{"aria-pressed":o.toString(),"aria-controls":`${t}-menu`,"aria-expanded":o.toString(),"aria-haspopup":"true","aria-label":n,bind:this,class:i,id:`${t}-button`,title:n,selected:o,onclick:this._toggleOpen,tabindex:"0",type:"button"})},r.renderMenuContent=function(){var e;const{id:t,open:n}=this;return f.tsx("div",{afterCreate:this._afterMenuContentNodeCreate,bind:this,class:v.content,"data-node-ref":"_menuContentNode",key:"esri-button-menu-content",hidden:!n},f.tsx("ul",{"aria-labelledby":`${t}-button`,bind:this,class:v.itemWrapper,id:`${t}-menu`,role:"menu"},(null==(e=this.items)?void 0:e.length)&&this.renderItems()))},r.renderItems=function(){var e;return null==(e=this.items)?void 0:e.map(((e,t)=>this.renderItem(e,t)))},r.renderItem=function(e,t,n){var o;const s=i.isSome(n)?`${this.id}-menu-item-${t}-${n}`:`${this.id}-menu-item-${t}`,r=`${s}-label`,a=this.classes(v.item,e.selectionEnabled?v.selectableMenuItem:null,e.selectionEnabled&&e.selected?v.selectedMenuItem:null);return f.tsx("li",{afterCreate:this._afterMenuItemCreate,bind:this,class:a,"data-item-index":t,"data-item-subIndex":n,for:s,key:s,onkeydown:t=>this._handleMenuItemKeydown(t,e),onclick:t=>this._handleMenuItemInteraction(t,e),role:"menuitem",tabindex:"0"},f.tsx("input",{disabled:!0,checked:e.selected,class:v.checkbox,id:s,name:s,tabindex:"-1",type:"checkbox"}),f.tsx("label",{bind:this,class:this.classes(v.button,v.itemLabel),for:s,id:r},f.tsx("span",{class:this.classes(v.icon,e.iconClass),"aria-hidden":"true"}),f.tsx("span",{class:v.itemLabelContent},e.label)),f.tsx("ul",{"aria-labelledby":r,class:v.embeddedContentWrapper,id:`${this.id}-submenu`,role:"menu"},null==e||null==(o=e.items)?void 0:o.map(((e,n)=>this.renderItem(e,t,n)))))},r._afterRootNodeCreate=function(e){var t;this._rootNode=e,null==(t=this._popover)||t.set("anchorElement",(()=>e))},r._handleMenuItemInteraction=function(e,t){t.selected=!t.selected,t.open=!(!t.selected||!t.items),t.autoCloseMenu&&this.set("open",!1),t.clickFunction&&t.clickFunction({event:e,item:t}),e.stopPropagation()},r._handleMenuItemKeydown=function(e,t){const o=n.eventKey(e);b.isActivationKey(o)&&this._handleMenuItemInteraction(e,t),"Escape"===o&&(this.open=!1,e.preventDefault(),e.stopPropagation())},r._afterMenuContentNodeCreate=function(e){this._menuContentNode=e,e.focus()},r._toggleOpen=function(){this.open=!this.open},r._afterMenuItemCreate=function(e){0===e["data-item-index"]&&e.focus()},o}(o.HandleOwnerMixin(p));t.__decorate([c.property()],C.prototype,"iconClass",void 0),t.__decorate([r.aliasOf("viewModel.items")],C.prototype,"items",void 0),t.__decorate([c.property()],C.prototype,"label",void 0),t.__decorate([r.aliasOf("viewModel.open")],C.prototype,"open",void 0),t.__decorate([c.property()],C.prototype,"viewModel",void 0),C=t.__decorate([d.subclass("esri.widgets.FeatureTable.Grid.support.ButtonMenu")],C);return C}));
