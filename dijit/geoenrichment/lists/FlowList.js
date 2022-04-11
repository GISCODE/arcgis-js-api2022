// COPYRIGHT © 2021 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-construct","dojo/dom-class","dojo/on","../utils/DeviceUtil","../utils/DnDUtil","../utils/MouseUtil","../utils/TooltipUtil","./FlowListDefaultItemRenderer","../utils/PopupUtil","../utils/AccessibilitySupport","dijit/_WidgetBase","dijit/_TemplatedMixin"],(function(e,t,i,s,n,r,l,o,d,a,h,c,m,u){var p=e([m,u],{templateString:"<div class='esriGEFlowList esriGENonSelectable'></div>",idProperty:"value",labelProperty:"label",selectedIndex:-1,selectedItem:null,items:null,store:null,defaultItemRendererClass:a,itemRenderer:null,itemClass:null,itemClassSelected:null,keepScrollPosition:!1,allowRepetitiveSelection:!0,selectOnMouseDown:!1,noDragTolerance:0,selectionValidator:null,allowManualSelection:!0,stopMouseEventPropagation:!0,hasSelectableItems:!0,autoDetectUrlsInLabels:!1,storeItemsInInnerDiv:!1,enableTabbing:!1,_addedWrappers:null,_clickHandles:null,_valueOnCreation:null,_isCreated:!1,itemsDiv:null,postCreate:function(){this.inherited(arguments),this.storeItemsInInnerDiv?this.itemsDiv=i.create("div",{class:"esriGEFlowList_innerDiv"},this.domNode):this.itemsDiv=this.domNode,this._clearHandlers(),this._setUpItemRenderer(),d.autoTooltip(this.domNode),this._isCreated=!0,this._valueOnCreation?this._setValueAttr(this._valueOnCreation):this.refresh()},_setUpItemRenderer:function(){this.itemRenderer||(this.itemRenderer=new this.defaultItemRendererClass),this.itemClass&&(this.itemRenderer.itemClass=this.itemClass),this.itemClassSelected&&(this.itemRenderer.itemClassSelected=this.itemClassSelected)},_getValueAttr:function(){return this.selectedItem&&this.selectedItem[this.idProperty]},_setValueAttr:function(e){var t=this;if(this._isCreated){var i=this.items||this.store&&this.store.data;i&&i.some((function(i){if(i[t.idProperty]==e)return t.setSelectedItem(i),!0}))}else this._valueOnCreation=e},_scrollTopMemo:0,memoScroll:function(){this._scrollTopMemo=this.domNode.scrollTop},applyScrollFromMemo:function(){this.domNode.scrollTop=this._scrollTopMemo||0},_setItemsAttr:function(e){this.setItems(e)},setItems:function(e,t){this.keepScrollPosition&&this.memoScroll(),this.clear(),this.items=e,t||(this.items&&this._isCreated?(this._addItems(e),this._checkIfStillSelected(),this.keepScrollPosition&&this.applyScrollFromMemo(),this.onItemsSet()):this._checkIfStillSelected())},_checkIfStillSelected:function(){if(-1!=this.selectedIndex||this.selectedItem){var e=this;this._addedWrappers&&this._addedWrappers.some((function(t,i){return e._isItemSelected(t,i)}))||(this.selectedIndex=-1,this.selectedItem=null)}},refresh:function(){this.store?this.setStore(this.store):this.setItems(this.items)},setSelectedItem:function(e,t){this.hasSelectableItems&&(this.selectedItem=e,this.selectedIndex=-1,this.refresh(),t&&this._dispatchChangeEvent())},setSelectedIndex:function(e,t){this.hasSelectableItems&&(this.selectedIndex=e,this.selectedItem=null,this.refresh(),t&&this._dispatchChangeEvent())},getItemNode:function(e){var t;return this._addedWrappers&&this._addedWrappers.some((function(i){if(i.itemRef===e)return t=i.__itemPresentation,!0})),t},getItemByNode:function(e){var t;return this._addedWrappers&&this._addedWrappers.some((function(i){if(i.__itemPresentation===e)return t=i.itemRef,!0})),t},getItemByValue:function(e){var t,i=this;return this._addedWrappers&&this._addedWrappers.some((function(s){if(s[i.idProperty]===e)return t=s.itemRef,!0})),t},__selectedPresentation:null,_addItems:function(e){this._addedWrappers=this._addedWrappers||[];var i=this;e.forEach((function(e){var s=t.mixin({},e);s.itemRef=e,i.__addWrapper(s)}))},__addWrapper:function(e){var t=this._addedWrappers.length,i=this.itemRenderer.createPresentation(e.itemRef,this._isItemSelected(e,t),this.itemsDiv,this,e);if(i){i.index=t,i.item=e.itemRef,e.__itemPresentation=i,this._isItemSelected(e,t)&&(this.selectedItem=e.itemRef,this.selectedIndex=t,this.__selectedPresentation=i),this._addClickHandler(i),this._addedWrappers.push(e);var n=this._addedWrappers.length-1;s.add(i,"listItem_"+n),s.add(i,"listItem_"+(n%2==0?"even":"odd"))}},_isItemSelected:function(e,t){if(!this.hasSelectableItems||!this._isItemClickable(e))return!1;if(t==this.selectedIndex)return!0;if(e.itemRef===this.selectedItem)return!0;if(e.itemRef&&this.selectedItem){var i=e.itemRef[this.idProperty],s=this.selectedItem[this.idProperty];return void 0!==i&&i===s}return!1},_isItemClickable:function(e){return this.selectionValidator?this.selectionValidator(e):this._selectionValidatorDefault(e)},_selectionValidatorDefault:function(e){return!!e&&!e.isSeparator&&!1!==e.enabled},_addClickHandler:function(e){var t,i=this;this.allowManualSelection&&(t=this.selectOnMouseDown||!this.noDragTolerance?n(e,this.selectOnMouseDown?r.press:r.click,(function(e){i.stopMouseEventPropagation&&e.stopPropagation(),s()})):l.addNoDragClickHandler(e,s,{tolerance:this.noDragTolerance}),this._clickHandles.push(t),this.enableTabbing&&c.registerButton(e,s,e.item[this.labelProperty]));function s(){(i.allowRepetitiveSelection||i.__selectedPresentation!=e)&&i._isItemClickable(e.item)&&(i.__selectedPresentation&&i.itemRenderer.selectPresentation&&i.itemRenderer.selectPresentation(i.__selectedPresentation,!1,i.__selectedPresentation.item),i.itemRenderer.selectPresentation&&i.itemRenderer.selectPresentation(e,i.hasSelectableItems,e.item),i.__selectedPresentation=e,i.selectedIndex=e.index,i.selectedItem=e.item,i._dispatchChangeEvent())}},_dispatchChangeEvent:function(){this.onChange({type:"change",selectedIndex:this.selectedIndex,selectedItem:this.selectedItem,value:this.selectedItem&&this.selectedItem[this.idProperty]})},clear:function(){this.__selectedPresentation=null,this._addedWrappers=this._addedWrappers||[],this._addedWrappers&&this._addedWrappers.forEach((function(e){e.destroyPresentation&&e.destroyPresentation()})),this._addedWrappers.length=0,this.itemsDiv&&(this.itemsDiv.innerHTML=""),this._clearHandlers()},_clearHandlers:function(){this._clickHandles=this._clickHandles||[],this._clickHandles.forEach((function(e){e.remove()})),this._clickHandles.length=0},scrollToItem:function(e){var t=this.getItemNode(e);t&&(this.domNode.scrollTop=t.offsetTop)},store:null,onDemandModeLoadStep:1e3,onDemandPopulateLimit:1e3,onDemandPopulatePeriod:200,_storeScrollHandler:null,_setStoreAttr:function(e){this.setStore(e)},setStore:function(e){if(this.domNode)if(this.keepScrollPosition&&this._memoScroll(),this.clear(),this.store=e,this.idProperty=e&&e.idProperty,this.store&&this._isCreated){this._loadNextPart(),this._checkIfStillSelected(),this.keepScrollPosition&&this.applyScrollFromMemo();var t=this;this._storeScrollHandler=this._storeScrollHandler||n(this.domNode,"scroll",(function(){var e=t._addedWrappers[t._addedWrappers.length-30],i=e?e.__itemPresentation:null;i&&i.offsetTop<t.domNode.scrollTop&&t._loadNextPart()}))}else this._checkIfStillSelected()},_loadNextPart:function(){if(this.store&&this.store.query().length!=this._addedWrappers.length){var e=this.store.query(null,{start:this._addedWrappers.length,count:this.onDemandModeLoadStep});if(delete e.total,this._addItems(e),e.length&&this._addedWrappers.length<this.onDemandPopulateLimit){var t=this._loadNextPart.bind(this);setTimeout(t,this.onDemandPopulatePeriod)}}},isMouseOver:function(e){return o.isMouseOver(this.domNode,{event:e})},onChange:function(e){},onItemsSet:function(){},destroy:function(){this.clear(),this.inherited(arguments)}});return p.createPopup=function(e){var t;function i(){return t||(t=new p({class:e.listClass,itemRenderer:e.itemRenderer,items:e.options,onChange:function(i){e.onChange(i),!e.keepSelection&&t.setSelectedItem(null),h.close(t)}}),e.doNotOwn||e.wizard.own(t),e.isDeferred&&e.isDeferred(t)),t}return h.makePopup(e.isDeferred?i:i(),e.wizard,e.aroundNode,e.popupOptions||{}),t},p}));