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

define(["../../../kernel","../utils","dijit/registry","dijit/form/Select","dijit/_WidgetBase","dijit/_TemplatedMixin","dojo/query","dojo/window","dojo/_base/array","dojo/_base/json","dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dojo/dom-construct","dojo/has","dojo/on","dojo/Evented","dojo/i18n!../../../nls/jsapi"],(function(t,e,s,i,r,o,a,l,n,h,d,c,u,m,g,w,y,p){var S=d([r,o,y],{declaredClass:"esri.dijit.analysis.components.AddSummaryFields",layer:null,summaryFields:[],showGeoAnalyticsParams:null,showFirstLastStats:!1,emptyValue:"",removeAttrStats:p.common.removeAttrStats,rows:[],removeAllBool:!1,allowDateType:!1,isGPStringObjType:!1,isActive:!0,required:!1,constructor:function(t){!0===t.addAsRow?this.templateString="<tr data-dojo-attach-point='_emptySummaryRow'><td colspan='3' class='clear'></td></tr>":this.templateString="<table class='fullSpread'><tr data-dojo-attach-point='_emptySummaryRow'><td colspan='3' class='clear'></tr></table>"},postMixInProperties:function(){this.inherited(arguments)},postCreate:function(){this.inherited(arguments)},destroy:function(){this._removeAll(),this.inherited(arguments)},_createStatsRow:function(){var t,s,r,o,a,l,n,h,d,u;return t=m.create("tr",null,this._emptySummaryRow,"before"),r=m.create("td",{style:{width:"50%",maxWidth:"100px"}},t),s=m.create("td",{style:{width:"45%",maxWidth:"104px"}},t),o=m.create("td",{class:"shortTextInput removeTd",style:{visibility:"hidden",maxWidth:"12px"}},t),a=new i({maxHeight:200,class:"esriLeadingMargin1 mediumInput attrSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},m.create("select",null,r)),!1===e.addAttributeOptions({selectWidget:a,layer:this.layer,allowStringType:this.showGeoAnalyticsParams,allowDateType:!0===this.allowDateType&&!this.showGeoAnalyticsParams})?(m.destroy(t),!1):(h=a.on("change",this._handleAttrSelectChange),this.own(h),l=new i({class:"mediumInput statsSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},m.create("select",null,s)),e.addStatisticsOptions({selectWidget:l,showGeoAnalyticsParams:this.showGeoAnalyticsParams,showFirstLastStats:this.showFirstLastStats}),d=l.on("change",this._handleStatsSelectChange),this.own(d),n=m.create("a",{title:this.removeAttrStats,class:"closeIcon statsRemove",innerHTML:"<img src='"+require.toUrl("../images/close.gif")+"' border='0''/>"},o),u=w(n,"click",c.hitch(this,this._remove,t)),this.own(u),a.set("statisticSelect",l),a.set("showGeoAnalyticsParams",this.showGeoAnalyticsParams),a.set("statsRow",t),l.set("attributeSelect",a),l.set("removeTd",o),l.set("isnewRowAdded",!1),l.set("referenceWidget",this),this.rows.push(t),this._currentStatsSelect=l,this._currentAttrSelect=a,this.required&&1===this.rows.length&&(this._toggleRowRequired(this.rows[0],!0),this._currentAttrSelect.set("isFirstRow",!0)),2===this.rows.length&&this.emit("disable-tool-checkbox",{disable:!1}),!0)},_handleAttrSelectChange:function(t){var s,i,r,o;t!==(i=(s=this.get("statisticSelect")).get("referenceWidget")).emptyValue?(s.set("required",!0),(o=this.getOptions(t))&&o.type!==s.optionsType&&e.addStatisticsOptions({selectWidget:s,type:o.type,showGeoAnalyticsParams:i.showGeoAnalyticsParams,showFirstLastStats:i.showFirstLastStats}),s.get("value")!==i.emptyValue&&(s.get("isnewRowAdded")||(r=s.get("removeTd"),u.set(r,"visibility","visible"),c.hitch(i,i._createStatsRow)(),s.set("isnewRowAdded",!0)))):s.set("required",!1)},_handleStatsSelectChange:function(t){var e,s,i;e=this.get("attributeSelect"),t!==(s=this.get("referenceWidget")).emptyValue?(e.set("required",!0),e.get("value")!==s.emptyValue&&(this.get("isnewRowAdded")||(i=this.get("removeTd"),u.set(i,"visibility","visible"),c.hitch(s,s._createStatsRow)(),this.set("isnewRowAdded",!0)))):e.set("required",!1)},_remove:function(t){if(!this.removeAllBool){var e=this.rows.indexOf(t);this.rows.splice(e,1)}this._destroyRow(t),1===this.rows.length&&this.emit("disable-tool-checkbox",{disable:!0})},_destroyRow:function(t){n.forEach(s.findWidgets(t),(function(t){t.destroyRecursive()})),m.destroy(t)},_removeAll:function(){this.removeAllBool=!0,n.forEach(this.rows,this._remove,this),this.rows=[],this.removeAllBool=!1},_getSummaryFieldsAttr:function(){var t,i,r,o=[],a=[],l=[];if(this.isActive)if(this.rows.forEach((function(e){t=s.findWidgets(e),r=t[0],i=t[1],r.get("value")!==this.emptyValue&&i.get("value")!==this.emptyValue&&o.push(r.get("value")+" "+i.get("value"))}),this),a=e.removeDuplicates(o,!1),this.showGeoAnalyticsParams||this.isGPStringObjType){for(var n=0;n<a.length;n++){var d={},c=a[n].split(" ");d.onStatisticField=c[0],d.statisticType=c[1],this.showGeoAnalyticsParams?l.push(d):l.push(h.toJson(d))}this.summaryFields=l}else this.summaryFields=a;else this.summaryFields=[];return this.summaryFields},_setSummaryFieldsAttr:function(t){this.summaryFields=t,this._loadOptions(),t&&t.length>0&&this.emit("summary-fields-loaded",{})},_setLayerAttr:function(t){this.layer=t,this.layer?this._resetOptions():this._removeAll()},_loadOptions:function(){this._removeAll(),n.forEach(this.summaryFields,(function(t){var s,i,r;this._createStatsRow(),i="string"==typeof t&&-1!==t.indexOf("{")?e.tryParseJSON(t):"object"==typeof t?t:t.split(" "),this._currentAttrSelect.set("value",i&&i.length?i[0]:i.onStatisticField,!1),this._currentAttrSelect.set("required",!0),(r=this._currentAttrSelect.getOptions(i&&i.length?i[0]:i.onStatisticField))&&r.type!==this._currentAttrSelect.optionsType&&e.addStatisticsOptions({selectWidget:this._currentStatsSelect,type:r.type,showGeoAnalyticsParams:this.showGeoAnalyticsParams,showFirstLastStats:this.showFirstLastStats}),this._currentStatsSelect.set("value",i&&i.length?i[1]:i.statisticType,!1),this._currentStatsSelect.set("required",!0),s=this._currentStatsSelect.get("removeTd"),u.set(s,"visibility","visible"),this._currentStatsSelect.set("isnewRowAdded",!0)}),this),this._createStatsRow()},_resetOptions:function(){this._removeAll(),this._createStatsRow()},validate:function(){for(var t=[],e=0;e<this.rows.length;e++){t=s.findWidgets(this.rows[e]);for(var i=0;i<t.length;i++)if(t[i]._hasBeenBlurred=!0,t[i].validate&&!t[i].validate())return l.scrollIntoView(t[i].containerNode||t[i].domNode),t[i].focus(),!1}return!0},_getRequiredAttr:function(){return this.required},_setRequiredAttr:function(t){this.required=t},show:function(){new a.NodeList([this.domNode].concat(this.rows)).style("display","table-row"),this.isActive=!0,this._triggerRowsOptionChange()},hide:function(){new a.NodeList([this.domNode].concat(this.rows)).style("display","none"),this.isActive=!1,this._toggleRowsRequired(!1)},disable:function(){this._resetOptions(),this._currentStatsSelect.set("disabled",!0),this._currentAttrSelect.set("disabled",!0),this.isActive=!1},enable:function(){this._currentStatsSelect.set("disabled",!1),this._currentAttrSelect.set("disabled",!1),this.isActive=!0},updateRequiredAttributes:function(){if(0===this.rows.length||!this.required)return!1;for(var t,e=0;e<this.rows.length;e++)if((t=s.findWidgets(this.rows[e]))[0].get("value")!==this.emptyValue&&t[1].get("value")===this.emptyValue||t[0].get("value")===this.emptyValue&&t[1].get("value")!==this.emptyValue)return!0;return this.get("summaryFields").length>0?this._toggleRowRequired(this.rows[0],!1):((t=s.findWidgets(this.rows[0]))[0].set("required",!0),t[1].set("required",!0)),!0},_triggerRowOptionChange:function(t){var e=s.findWidgets(t);c.hitch(e[0],this._handleAttrSelectChange,e[0].get("value"))(),c.hitch(e[1],this._handleStatsSelectChange,e[1].get("value"))()},_triggerRowsOptionChange:function(){for(var t=0;t<this.rows.length;t++)this.required&&0===t?this._toggleRowRequired(this.rows[t],!0):this._triggerRowOptionChange(this.rows[t])},_toggleRowRequired:function(t,e){var i=s.findWidgets(t);i[0].set("required",e),i[1].set("required",e)},_toggleRowsRequired:function(t){for(var e=0;e<this.rows.length;e++)this._toggleRowRequired(this.rows[e],t)}});return g("extend-esri")&&c.setObject("dijit.analysis.components.AddSummaryFields",S,t),S}));