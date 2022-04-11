/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/events","../../../core/maybe","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../Slider","./SliderWithDropdownViewModel","../../support/widgetUtils","../../../core/Logger","../../support/jsxFactory"],(function(o,e,t,r,i,n,s,l,d,p,c,a,w,h){"use strict";const u={interactive:"esri-interactive",label:"esri-slider__label",box:"esri-slider-with-dropdown__box",dropdownRoot:"esri-slider-with-dropdown__dropdown-root",anchor:" esri-widget__anchor esri-slider-with-dropdown__anchor",anchorOpen:"esri-slider-with-dropdown__anchor--open",anchorClosed:"esri-slider-with-dropdown__anchor--closed",dropdownList:"esri-slider-with-dropdown__list",dropdownListItem:"esri-slider-with-dropdown__list-item",dropdownListItemSelected:"esri-slider-with-dropdown__list-item--selected",boxDropDownOn:"esri-slider-with-dropdown__box--drop-down-on",boxDropDownOff:"esri-slider-with-dropdown__box--drop-down-off"},_={selectItem:"Enter",closeDropdown:"Escape",moveSelectionUp:"ArrowUp",moveSelectionDown:"ArrowDown"};let b=function(e){function i(o,t){var r;return(r=e.call(this,o,t)||this).viewModel=new c.SliderWithDropdownViewModel,r.buttonTooltip="",r.showDropDown=!0,r.currentIndex=0,r._rootNode=null,r}o._inheritsLoose(i,e);var n=i.prototype;return n.renderThumbLabel=function(o){const t={[u.boxDropDownOn]:this.showDropDown,[u.boxDropDownOff]:!this.showDropDown};return h.tsx("div",{class:this.classes(u.box,u.label,t)},e.prototype.renderThumbLabel.call(this,o),this.showDropDown?h.tsx("div",{bind:this,afterCreate:this._onRootNodeCreate,class:u.dropdownRoot},h.tsx("button",{class:this.classes(u.interactive,u.anchor,this.isDropdownOpen?u.anchorOpen:u.anchorClosed),bind:this,onclick:this._onAnchorClick,onpointerdown:this._killEvent,"aria-label":this.buttonTooltip,title:this.buttonTooltip,"aria-expanded":this.isDropdownOpen.toString(),"aria-haspopup":"listbox",type:"button"},this.currentItem?this.currentItem.name+" ":""),this.isDropdownOpen?h.tsx("ol",{class:this.classes(u.dropdownList),onpointerdown:this._killEvent,onblur:this._onDropdownBlur,bind:this,tabindex:"-1","aria-label":this.buttonTooltip,role:"listbox",onkeydown:this._onOlKeyDown,afterCreate:this._focusOnSelectedItem},this.items.map(((o,e)=>h.tsx("li",{class:e===this.currentIndex?this.classes(u.interactive,u.dropdownListItem,u.dropdownListItemSelected):this.classes(u.interactive,u.dropdownListItem),bind:this,onclick:this._onDropdownItemClick,"data-result":e,"aria-label":o.label.join(" "),role:"option","aria-selected":(e===this.currentIndex).toString(),onkeydown:this._onLiKeyDown,onblur:this._onDropdownBlur,tabindex:"0"},o.label.map((o=>h.tsx("span",{bind:this},o))))))):null):null)},n._onRootNodeCreate=function(o){this._rootNode=o},n._focusOnSelectedItem=function(o){var e;const t=null!=(e=o.querySelector(`.${u.dropdownListItemSelected}`))?e:o.firstChild;r.isSome(t)&&t instanceof HTMLElement&&(t.scrollIntoView(),t.focus())},n._onAnchorClick=function(){return this.viewModel.toggle(),!0},n._onDropdownItemClick=function(o){const e=o.currentTarget;this.viewModel.selectItem(e["data-result"])},n._onDropdownBlur=function(o){let e=o.relatedTarget;null===e&&(e=document.activeElement),r.isSome(this._rootNode)&&!this._rootNode.contains(e)&&e!==this._rootNode.parentElement&&e!==this._rootNode.parentElement.parentElement&&(this.viewModel.isDropdownOpen=!1)},n._killEvent=function(o){return o.stopPropagation(),!0},n._onOlKeyDown=function(o){o.stopPropagation(),t.eventKey(o)===_.closeDropdown&&(this.viewModel.isDropdownOpen=!1)},n._onLiKeyDown=function(o){const e=o.target;switch(t.eventKey(o)){case _.moveSelectionUp:if(e.previousElementSibling){e.previousElementSibling.focus()}break;case _.moveSelectionDown:if(e.nextElementSibling){e.nextElementSibling.focus()}break;case _.selectItem:e.click()}},i}(p);e.__decorate([i.property()],b.prototype,"viewModel",void 0),e.__decorate([i.property()],b.prototype,"buttonTooltip",void 0),e.__decorate([i.property()],b.prototype,"showDropDown",void 0),e.__decorate([i.property({aliasOf:"viewModel.items"})],b.prototype,"items",void 0),e.__decorate([i.property({aliasOf:"viewModel.currentIndex"})],b.prototype,"currentIndex",void 0),e.__decorate([i.property({aliasOf:"viewModel.currentItem"})],b.prototype,"currentItem",void 0),e.__decorate([i.property({aliasOf:"viewModel.isDropdownOpen"})],b.prototype,"isDropdownOpen",void 0),b=e.__decorate([d.subclass("esri.widgets.Daylight.SliderWithDropdown")],b);return b}));
