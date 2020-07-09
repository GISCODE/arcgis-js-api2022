// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/on","esri/dijit/geoenrichment/when","dojox/mvc/Templated","dgrid1/List","../../../declare","../utils/MouseUtil","../utils/TooltipUtil","dojo/text!./templates/ShoppingCart.html","dojo/i18n!../../../nls/jsapi","./VariableUtil","./VariableToggle"],(function(t,i,e,s,n,o,a,l,h,r,c,d,p,u){return l("esri.dijit.geoenrichment.ShoppingCart",o,{nls:d=d.geoenrichment.dijit.ShoppingCart,templateString:c,variables:null,selection:null,allowToggles:!0,allowMoveButtons:!1,allowEditButtons:!1,allowReplaceButtons:!1,_list:null,_content:null,_mouseOutH:null,postCreate:function(){this.inherited(arguments);var i=d.selectedVars,e=i.split(/\s+/),o=e.length-1;if(o<2)i=e.join("<br/>");else{for(var a=i.length-o,l=e[0].length,h=0,r=1;r<o;r++){var c=l+e[r].length;Math.abs(2*l-a)>Math.abs(2*c-a)&&(h=r),l=c}i=e.slice(0,h+1).join("&nbsp;")+"<br/>"+e.slice(h+1).join("&nbsp;")}this.selectedVariablesLabel.innerHTML=i,this.selection=[],this._content=[];var p=this._getListClass();this._list=new p({renderRow:t.hitch(this,this._renderVariable)},this.divList),s(this.divList,"click, touchend",t.hitch(this,this._stopPropagation)),this._updateLabel(),this.divOuter.style.display="none";var u=this;this.watch("selection",(function(){n(u.variables.synchronize(),t.hitch(u,u._onSelectionChanged))}))},_getListClass:function(){return a},_updateLabel:function(){this.divCounter.innerHTML=this._content.length.toString()},_onSelectionChanged:function(){for(var t=[],i=Math.min(this._content.length,this.selection.length),e=0;e<i;e++){var s=this.selection[e],n=this._content[e];if(!n.hash[s])break;n.group.value=s,t.push(n)}for(i=this.selection.length,e=t.length;e<i;e++){s=this.selection[e],(n={hash:{}}).group=p.getToggleGroup(this.variables,s,n.hash),s=n.group.states&&this.allowToggles?n.group.states.ids[0]:n.group.value;var o=this.variables.get(s);n.title=o&&o.alias,t.push(n)}this._content=t,this._updateLabel(),this._content.length||this._hideList()},_toggleList:function(t){this._stopPropagation(t),"none"===this.divOuter.style.display?this._displayList():this._hideList()},_stopPropagation:function(t){t.stopPropagation&&t.stopPropagation()},_displayList:function(){this.refresh(),this.divShoppingCartOpener.innerHTML="&#x25b2;",this.divOuter.style.display="",this._listenToMouseLeave()},_listenToMouseLeave:function(){this._mouseOutH&&this._mouseOutH.remove(),this._mouseOutH=h.addOutHandler(this.domNode,this._onMouseLeave.bind(this))},_onMouseLeave:function(){this._mouseOutH&&this._mouseOutH.remove(),this._hideList()},_hideList:function(){this.divShoppingCartOpener.innerHTML="&#x25bc;",this.divOuter.style.display="none"},_renderVariable:function(n){var o=e.create("div",{class:"ShoppingCartRow"});function a(){e.create("div",{class:"dijitInline ShoppingCartRowSpacer ShoppingCartRowFloatEnd",innerHTML:"&nbsp;"},o)}var l=e.create("div",{class:"ShoppingCartRowCloser ShoppingCartRowFloatEnd"},o);if(r.setTooltipToNode(l,d.removeVariable),s(l,"click",t.hitch(this,this._onRemove,n)),a(),n.group.states&&this.allowToggles){var h=new u(n.group,e.create("div",{class:"dijitInline ShoppingCartRowFloatEnd"},o));s(h,"change",t.hitch(this,this._onToggleChange,h,n)),a()}if(this.allowEditButtons&&this._canEditData(n)){var c=e.create("div",{class:"ShoppingCartRowEditButton ShoppingCartRowFloatEnd"},o);r.setTooltipToNode(c,d.editVariable),s(c,"click",t.hitch(this,this._onEditData,n)),a()}if(this.allowReplaceButtons){var p=e.create("div",{class:"ShoppingCartRowReplaceButton ShoppingCartRowFloatEnd"},o);r.setTooltipToNode(p,d.replaceVariable),s(p,"click",t.hitch(this,this._onReplaceData,n)),a()}if(this.allowMoveButtons){var g=e.create("div",{class:"dijitInline ShoppingCartRowFloatEnd upDownArrowsBlock"},o);if(this._content.indexOf(n)>0){var v=e.create("div",{class:"dijitInline upArrow"},g);s(v,"click",t.hitch(this,this._onMove,n,!0))}if(this._content.indexOf(n)<this._content.length-1){var _=e.create("div",{class:"dijitInline downArrow"},g);s(_,"click",t.hitch(this,this._onMove,n,!1))}a()}var f=n.group.states&&this.allowToggles?n.group.states.ids[0]:n.group.value,b=this.variables.get(f),w=e.create("div",{class:"TrimWithEllipses ShoppingCartRowLabel",innerHTML:b&&b.alias||""},o);return b&&b.isMissing&&i.add(w,"ShoppingCartRowLabel_missing"),o},_onRemove:function(t){var i=this.selection.slice(),e=this._content.indexOf(t);i.splice(e,1),this._content.splice(e,1),this.set("selection",i),this.refresh()},_onToggleChange:function(t,i){i.group.value=t.value;var e=this.selection.slice();e[this._content.indexOf(i)]=t.value,this.set("selection",e)},_onMove:function(t,i){var e=this.selection.slice(),s=this._content.indexOf(t),n=e[s];e.splice(s,1),this._content.splice(s,1),e.splice(i?s-1:s+1,0,n),this._content.splice(i?s-1:s+1,0,t),this.set("selection",e),this.refresh()},_canEditData:function(t){return!1},_onEditData:function(t){},_onReplaceData:function(t){},refresh:function(){this._list.refresh(),this._list.renderArray(this._content),this._updateLabel(),this.divEmpty.style.visibility=this._content.length?"hidden":"visible"},isOpen:function(){return"none"!==this.divOuter.style.display},hideList:function(){this._hideList()}})}));