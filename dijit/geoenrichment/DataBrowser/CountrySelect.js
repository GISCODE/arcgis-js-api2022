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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/string","dojo/on","dojo/store/Memory","dijit/form/FilteringSelect","dijit/form/_ComboBoxMenu","dojo/i18n!../../../nls/jsapi","dojox/mvc/Templated","dojo/text!./templates/CountrySelect.html"],(function(e,t,i,r,a,h,s,c,n,l,o){n=n.geoenrichment.dijit.DataCategoriesPage;var u={AUS_MapDataServices:"Map Services - Census",AUS_MapDataServicesDeloitte:"Map Services - Spending",FRA_EsriFrance:"Esri France",JPN_EsriJapan:"Esri Japan",DEU_Nexiga:"Nexiga GmbH",IND_Indicus:"Indicus Analytics",NLD_4orange:"Netherland 4Orange",KOR_OPENmate:"OPENmate",ESP_AIS:"AIS Group",EsriThailand:"Esri Thailand"},y=e(c,{class:"dijitComboBoxMenu DataBrowser_CountrySelectMenu",selectItem:function(e){if(this.items){for(var t=-1,i=0;i<this.items.length;i++)if(this.items[i].value==e){t=i;break}if(!(t<0)){var r=this.containerNode.children;for(i=0;i<r.length;i++){var a=r[i];if("none"!=a.style.display&&a.getAttribute("item")==t){this.selectLastNode(),this.set("selected",a,!0);break}}}}}}),d=e(s,{dropDownClass:y,_openResultList:function(e,t,i){this.inherited(arguments),this.store.filtered||this.dropDown.selectItem(this.get("value"))}});return e(l,{templateString:o,nls:n,_hierarchyCache:null,_currentValue:null,postCreate:function(){this.inherited(arguments),this.countrySelect=new d({maxHeight:151}),this.countrySelect.placeAt(this.divCountrySelect),this.countrySelect.set("labelAttr","label"),this.countrySelect.set("searchAttr","label"),this.countrySelect.set("store",new h({data:[{value:"loading",label:n.loading}],idProperty:"value"})),this.countrySelect.set("value","loading"),this.countrySelect.set("disabled",!0),this.countrySelect.startup(),this.own(this.countrySelect),this.hierarchySelect=new d({}),this.hierarchySelect.placeAt(this.divHierarchySelect),this.hierarchySelect.set("labelAttr","label"),this.hierarchySelect.set("searchAttr","label"),this.hierarchySelect.domNode.style.display="none",this.hierarchySelect.startup(),this.own(this.hierarchySelect)},setCountries:function(e){this._hierarchyCache={};var r=[];i.forEach(e,(function(e){e.hierarchyID?(this._hierarchyCache[e.countryID]||(this._hierarchyCache[e.countryID]={value:e.countryID,label:n.allHierarchies,index:0}),this._hierarchyCache[e.value]={value:e.value,label:this._composeHierarchyLabel(e),index:e.isDefault?1:2}):r.push(e)}),this),this.countrySelect.set("disabled",!1),this.countrySelect.set("store",new h({data:r,idProperty:"value"})),a(this.countrySelect,"change",t.hitch(this,this._changeCountry)),a(this.hierarchySelect,"change",t.hitch(this,this._changeHierarchy))},_composeHierarchyLabel:function(e){var t=n["hierarchy_"+e.hierarchyID];return t||(t=r.substitute(n.premiumHierarchy,{name:u[e.hierarchyID]||e.hierarchyID})),t},_changeCountry:function(){if(!this._innerUpdate){var e=this.countrySelect.get("value");e!=this._currentValue.substr(0,2)&&(this._innerUpdate=!0,this._updateHierarchySelect(e),this._innerUpdate=!1,this.emit("change"))}},_changeHierarchy:function(){if(!this._innerUpdate){var e=this.hierarchySelect.get("value");e!=this._currentValue&&this._hierarchyCache&&this._hierarchyCache[e]&&(this._currentValue=e,this.emit("change"))}},_innerUpdate:!1,_getValueAttr:function(){return this._currentValue},_setValueAttr:function(e){e!=this._currentValue&&(this._innerUpdate=!0,this._currentValue=e.substr(0,2),this.countrySelect.set("value",this._currentValue),this._updateHierarchySelect(e),this._innerUpdate=!1,this.emit("change"))},_updateHierarchySelect:function(e){if(this._hierarchyCache){var t=e.substr(0,2);if(!this._hierarchyCache[t])return this._currentValue=t,this.hierarchySelect.domNode.style.display="none",this.hierarchySelect.set("store",new h({data:[{value:"none",label:""}],idProperty:"value"})),void this.hierarchySelect.set("value","none");var i=[];for(var r in this._hierarchyCache)r.substr(0,2)==t&&i.push(this._hierarchyCache[r]);i.sort((function(e,t){return e.index<t.index?-1:e.index>t.index?1:e.label<t.label?-1:e.label>t.label?1:0})),this._currentValue=this._hierarchyCache[e]&&e||t,this.hierarchySelect.set("store",new h({data:i,idProperty:"value"})),this.hierarchySelect.set("value",this._currentValue),this.hierarchySelect.domNode.style.display=""}}})}));