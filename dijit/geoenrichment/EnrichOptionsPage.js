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

define(["esri/declare","dojo/_base/lang","dojo/dom-construct","dojo/dom-class","dojo/Stateful","dojo/number","dojo/string","dojo/aspect","dojo/store/Memory","dojo/data/ObjectStore","dojox/html/entities","dojox/mvc/sync","dijit/registry","dijit/form/Select","dijit/form/CheckBox","dgrid/OnDemandGrid","dgrid/extensions/DijitRegistry","dgrid/tree","esri/request","esri/urlUtils","esri/tasks/geoenrichment/RingBuffer","esri/tasks/geoenrichment/DriveBuffer","./_WizardPage","./BufferOptions","./_Invoke","./config","./utils/ObjectUtil","dojo/text!./templates/EnrichOptionsPage.html","dojo/i18n!esri/nls/jsapi","dijit/layout/ContentPane","dijit/form/NumberSpinner","dijit/form/RadioButton"],(function(e,t,i,n,r,s,o,l,a,h,d,u,c,f,p,_,g,m,b,v,C,y,k,T,j,w,O,x,P){P=P.geoenrichment.dijit.EnrichOptionsPage;var E=e([h],{getChildren:function(e){return e.getChildren()},mayHaveChildren:function(e){return!!e.getChildren}}),S=e([r],{checked:!0,getLabel:function(){},getClass:function(){return""}}),V=e([S],{_children:null,_updateChildren:!0,_label:null,constructor:function(e,i,n){this.set("id2",e),this._label=e,this._children=[];for(var r=t.hitch(this,this._onChildChecked),s=0;s<i.length;s++){var o=new B(i[s],n);o.watch("checked",r),this._children.push(o)}},_checkedSetter:function(e){if(this.checked!=e&&(this.checked=e,this._updateChildren&&this._children))for(var t=0;t<this._children.length;t++)this._children[t].set("checked",this.checked)},_onChildChecked:function(e,t,i){if(t!=i){for(var n=!1,r=0;r<this._children.length;r++)if(this._children[r].get("checked")){n=!0;break}this._updateChildren=!1,this.set("checked",n),this._updateChildren=!0}},getLabel:function(){return this._label},getChildren:function(){return this._children}}),B=e([S],{mapTo:null,_page:null,constructor:function(e,t){this._page=t,this.id2=e.id2,this.mapTo=e.mapTo},_checkedSetter:function(e){this.checked!=e&&(this.checked=e,this._page.invoke("_updateTotalVars"))},_mapToSetter:function(e){this.mapTo!=e&&(this.mapTo=e,this._page.invoke("_updateTotalVars"))},getLabel:function(){return this.alias},getClass:function(){return"EnrichOptionsPage_VariableCheckbox"},getOptions:function(){var e=[],t=!0!==this._page.allowFieldTypeMismatch;if(e.push({value:"_",label:d.encode(this._page.allowNewColumns?P.newColumn:P.noColumn)}),this._page.fields)for(var i=0;i<this._page.fields.length;i++){var n=this._page.fields[i];if(t&&n.type&&n.type!=this.type){var r=!1;if("esriFieldTypeInteger"==n.type&&"esriFieldTypeDouble"==this.type&&0===this.precision?r=!0:"esriFieldTypeInteger"==this.type&&"esriFieldTypeDouble"==n.type&&(r=!0),!r)continue}e.push({value:n.id,label:d.encode(n.label||n.id)})}return e}}),A=e([_,g],{removeRow:function(e,t){var i=c.findWidgets(e);if(i)for(var n=0;n<i.length;n++)i[n].destroy();this.inherited(arguments)}});return e("esri.dijit.geoenrichment.EnrichOptionsPage",[k,j],{templateString:x,nls:P,geomType:null,buffer:null,fields:null,allowNewColumns:!0,dataCollections:null,studyAreaCount:null,title:null,_bufferOptions:null,_fieldSelects:null,_grid:null,_model:null,_eventMap:{back:!0,finish:!0},constructor:function(){this.buffer=new C},_setGeomTypeAttr:function(e){switch(this._set("geomType",e),this.geomType){case"esriGeometryPolygon":this.bufferEdit.style.display="none",this.bufferString.innerHTML=P.bufferPolygon;break;case"esriGeometryPoint":case"esriGeometryPolyline":this.bufferEdit.style.display="",this.bufferString.innerHTML=P.bufferRing}},_getFieldsMapAttr:function(){var e={};return this._enumCheckedVars((function(t,i){e[i.id2]=i.mapTo||""})),e},_setFieldsMapAttr:function(e){for(var i=[],n={},r=0;r<this.dataCollections.length;r++)for(var s=this.dataCollections[r],o=0;o<s.variables.length;o++){var h=s.variables[o];h.id2=s.id+"."+h.id;var d=e[h.id2];if(t.isString(d)){h.mapTo=d;var u=h.fieldCategory,c=n[u];c||(c=n[u]=[]),c.push(h),i.push(h.description)}}for(var f in this._model=[],n)n.hasOwnProperty(f)&&this._model.push(new V(f,n[f],this));this.dataCollectionNames.innerHTML=i.join(", "),this.dataCollectionNames.title=i.join("\n");var p=new a({data:this._model,idProperty:"id2"}),_=new E(p);if(this._grid)this._grid.set("store",_);else{var g=[m({label:" ",field:"expander",shouldExpand:t.hitch(this,this._shouldExpand)}),{label:P.varName,field:"varName",sortable:!1,renderCell:t.hitch(this,this._renderCheckBox)}];this.fields&&g.push({label:P.column,field:"column",sortable:!1,renderCell:t.hitch(this,this._renderSelect)}),this._grid=new A({store:_,columns:g},this.fieldsDiv),l.after(this._grid,"expand",t.hitch(this,this.invoke,"resize")),this._grid.startup()}this.invoke("_updateTotalVars")},_shouldExpand:function(e,t,i){return void 0!==i?i:1==this._model.length},_renderCheckBox:function(e,t,r,s){var o=new p,l=e.getLabel();u(e,"checked",o,"checked");var a=i.create("label",{class:"EnrichOptionsPage_TrimWithEllipsis EnrichOptionsPage_CheckboxLabel",title:l});return n.add(a,e.getClass()),o.placeAt(a),i.create("span",{innerHTML:l},a),a},_renderSelect:function(e,t,i,n){if(e.getOptions){var r=new f({options:e.getOptions(),maxHeight:151});return u(e,"mapTo",r,"value",{converter:{format:function(e){return e||"_"},parse:function(e){return"_"!=e?e:null}}}),r.domNode}},_updateTotalVars:function(){var e=this,t=0,i=!1;this._enumCheckedVars((function(e,n){t++,n.mapTo&&(i=!0)})),this.overwriteExisting.style.visibility=i?"visible":"hidden",this.finishButton.disabled=0===t;var n,r,l,a={enrichVariableCount:t,f:"json"};function h(i,a){O.isNumber(i)&&(i=o.substitute(P.credits,{credits:s.format(i)}));var h={varCount:t,rowCount:l,credits:i};e.totalVars.innerHTML=o.substitute(n,h),void 0===a&&(a=o.substitute(r,h)),e.totalVars.title=a}this.get("buffer")instanceof y&&(a.serviceAreaCount=1),this.studyAreaCount?(n=P.totalVars,r=P.totalVarsTooltip,l=this.studyAreaCount):(n=P.varsPerRow,r=P.varsPerRowTooltip,l=1),w.token&&(a.token=w.token);var d=w.portalUrl;d.indexOf("://")<0&&(d=v.getProtocolForWebResource()+"//"+d),h(P.creditsCalc,""),b({url:d+"/sharing/rest/portals/self/cost",content:a}).then((function(e){h((e.transactionCreditCost||0)*l)}),(function(e){h("error",e.toString())}))},_enumCheckedVars:function(e){for(var t=0;t<this._model.length;t++)for(var i=this._model[t].getChildren(),n=0;n<i.length;n++)i[n].checked&&(this.allowNewColumns||i[n].mapTo)&&e(this._model[t],i[n])},_getBufferAttr:function(){return this._bufferOptions?this._bufferOptions.get("buffer"):this.buffer},_setBufferAttr:function(e){this._set("buffer",e),this._bufferOptions&&this._bufferOptions.set("buffer",e)},_editBuffer:function(){i.destroy(this.bufferDiv),this.bufferEditDiv.style.display="",this._bufferOptions=new T({buffer:this.buffer,onChange:t.hitch(this,this.invoke,"_updateTotalVars")}),this.buffer=void 0,this._bufferOptions.placeAt(this.bufferEditDiv),this.resize()},_back:function(){this.onBack()},onBack:function(){},_finish:function(){this.onFinish()},onFinish:function(){}})}));