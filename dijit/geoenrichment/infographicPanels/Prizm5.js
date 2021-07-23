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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/on","dojo/dom-class","dojo/dom-construct","dojox/html/entities","../BaseWidget","../infographicUtils/dom","../infographicUtils/formatVariable","./supportClasses/Prizm5Data","../utils/ObjectUtil","dojo/i18n!esri/nls/jsapi"],(function(e,t,i,a,n,l,s,o,r,d,_){return _=_.geoenrichment.dijit.Prizm5,e(l,{baseClass:"Infographics_Prizm5",_mainTable:null,_detailsTable:null,_noSegmentsDiv:null,_openRowIndex:-1,createUIExpanded:function(e){this.inherited(arguments),this._createUI(e)},createUICollapsed:function(e){this.inherited(arguments),this._createUI(e)},_createUI:function(e){this._mainTable=e.addContent("table",{class:"Prizm5_Main_Table"}),s.createCols(this._mainTable,[.25,.4,.35])},updateUIExpanded:function(){this.inherited(arguments),this._updateUI()},updateUICollapsed:function(){this.inherited(arguments),this._updateUI()},_updateUI:function(){var e=this;this._toMainView();for(var n=this._get3DominantSegementsInfo(),l=this._mainTable;l.rows.length;)l.deleteRow(-1);n.length?n.forEach((function(n,s){var r,c;function u(){c=r.insertCell(-1)}(r=l.insertRow(-1))._info=n,t(r,"click",(function(){e._toDetailViewForRow(r,s)})),i.add(r,"Prizm5_LifeStyle"),u(),i.add(c,"Prizm5_LifeStyle_Image");var h=a.create("div",null,c);h.style.backgroundImage="url("+n.imageUrl+")",h.style.borderColor=n.color,a.create("span",{class:"Prizm5_LifeStyle_Image_Code",innerHTML:n.code},h).style.borderColor=n.color,u(),i.add(c,"Prizm5_Main_Name"),c.innerHTML="<span class='Prizm5_Main_Label'>"+n.alias+"</span><br><span class='Prizm5_Main_Value'>"+d.formatNumber(n.value)+" "+_.hhLabel+"</span>",u(),i.add(c,"Prizm5_Main_Pct"),c.innerHTML="<span class='Prizm5_Main_Pct_Value'>"+o({units:"pct",decimals:1},n.percentValue)+"</span><br><span class='Prizm5_Main_Pct_Label'>"+_.prtHhLabel+"</span>",u(),i.add(c,"Prizm5_Main_Arrow"),a.create("div",null,c)})):this._showNoSegementsInfo()},_get3DominantSegementsInfo:function(){for(var e=[],t=this._getDataManager(),i=this.getValueByName(0,t.getTotalFieldName(this.data.features[0].attributes),!0),a=0;a<t.getNumClassifiedSegments();a++){var n=t.getFieldNameByIndex(a,this.data.features[0].attributes),l=this.getValueByName(0,n,!0);if(l){var s=t.getSegmentInfoByIndex(a);e.push({index:a,code:s.code,alias:s.alias,fieldName:n,value:l,percentValue:l/i*100,color:s.color,fields:s.fields,imageUrl:s.imageUrl})}}return e.sort((function(e,t){return t.value-e.value})),e.length=Math.min(e.length,3),e},_toDetailViewForRow:function(e,t){this._openRowIndex===t?(this._openRowIndex=-1,this._toMainView()):(this._openRowIndex=t,this._toDetailView(e,e._info))},_toMainView:function(){for(var e=0;e<this._mainTable.rows.length;e++)i.remove(this._mainTable.rows[e],"clicked");this._detailsTableRow&&(a.destroy(this._detailsTableRow),this._detailsTable=null,this._detailsTableRow=null),this._noSegmentsDiv&&a.destroy(this._noSegmentsDiv),this._noSegmentsDiv=null},_toDetailView:function(e,t){this._toMainView(),i.add(e,"clicked"),this._createDetailsTable(e),this._createDetailedViewExpanded(t)},_createDetailsTable:function(e){this._detailsTableRow=a.create("tr",null,e,"after");var t=a.create("td",{colSpan:"4"},this._detailsTableRow);this._detailsTable=a.create("table",{class:"Prizm5_Details_Table"},t),s.createCols(this._detailsTable,[.5,.5])},_createDetailedViewExpanded:function(e){var l,s,o=this._detailsTable;function r(){l=o.insertRow(-1)}function d(e){s=l.insertCell(-1),e&&i.add(s,e)}function c(e,t,i){var l={};return e&&(l.class=e),t&&(l.innerHTML=n.encode(t)),a.create("div",l,i||s)}e.fields.forEach((function(e,t){t%2==0&&r(),function(e,t){d("Prizm5_Details_FieldCell");var i=c("Prizm5_Details_FieldCellContent");c("Prizm5_Details_Label",e,i),c("Prizm5_Details_SubLabel",t,i)}(e.label,e.value)})),r(),d(),s.colSpan=2,c("Prizm5_Details_LinkIcon dijitInline");var u=c("Wizard_Link Prizm5_Details_Link dijitInline",_.viewFullSegmentProfile);t(u,"click",function(){window.open(this._getDataManager().getUrl(e.index),"_blank")}.bind(this))},isDetailedViewOpen:function(){return this._openRowIndex>=0},getOpenDetailedViewRowIndex:function(){return this._openRowIndex},openDetailedViewAt:function(e){this._toDetailViewForRow(this._mainTable.rows[e],e)},collapseContent:function(){this._openRowIndex=-1,this._toMainView()},_showNoSegementsInfo:function(){this._noSegmentsDiv=a.create("div",{class:"esriGEAbsoluteStretched esriGEContentVerticalAlignMiddle Prizm5_noSegmentsDiv",innerHTML:_.noSegmentsFound},this._mainTable,"after")},_getDataManager:function(){return r.getDataManagerByAttributes(this.data.features[0].attributes)}})}));