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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/Color","dojo/_base/connect","dojo/has","dojo/string","dojo/dom-attr","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/form/Button","dijit/form/ToggleButton","dijit/Dialog","../../../../kernel","../../../../lang","../../../../layers/FeatureLayer","../../ExpressionForm","../../../../geometry/Extent","../../../../geometry/ScreenPoint","../../../../symbols/CartographicLineSymbol","../../../../symbols/SimpleMarkerSymbol","../../../../symbols/SimpleLineSymbol","../../../../symbols/SimpleFillSymbol","../../../../tasks/query","../../ItemTypes","../../AnalysisRegistry","dojo/i18n!../../../../nls/jsapi","dojo/text!./FilterAndSelection.html"],(function(e,t,i,s,n,r,o,a,l,h,c,y,p,u,d,m,_,x,f,L,g,b,F,S,A,E,T,C,j){var I=e([l,h,c],{declaredClass:"esri.dijit.analysis.components.FilterAndSelection.FilterAndSelection",templateString:j,_pbConnects:[],i18n:{},map:{},layer:{},msgContainer:null,expression:{},inputQuery:"",postMixInProperties:function(){this.inherited(arguments),t.mixin(this.i18n,C.expressionGrid),t.mixin(this.i18n,C.common)},destroy:function(){this.inherited(arguments),i.forEach(this._pbConnects,n.disconnect),delete this._pbConnects},postCreate:function(){this.inherited(arguments),this.own(this._expressionForm.on("add-expression",t.hitch(this,this._handleExpressionFormAdd))),this.own(this._expressionForm.on("cancel-expression",t.hitch(this,this._handleExpressionFormCancel)))},startup:function(){},_handleSelectionButtonClick:function(e){e&&!this._mapClickHandle?(this._mapClickHandle=this.map.on("click",t.hitch(this,this._handleMapClick)),this.emit("selecttool-activate",{}),this.set("expression",void 0)):(this._mapClickHandle&&(this._mapClickHandle.remove(),this._mapClickHandle=null),this.emit("selecttool-deactivate",{}))},_setInputQueryForRerun:function(){var e=this.layer&&(this.layer.type===E.BDATAFEATURE||this.layer.type===E.BTABLE);this.layer&&this.layer.filter&&-1!==this.layer.filter.indexOf(" AND ")?(this.set("inputQuery",this.layer.filter.substring(this.layer.filter.indexOf(" AND ")+" AND ".length)),e||this.layer.setDefinitionExpression(this.layer.filter.substring(0,this.layer.filter.indexOf(" AND ")))):this.layer&&this.layer.filter&&-1===this.layer.filter.indexOf(" AND ")&&(this.set("inputQuery",this.layer.filter),e||this.layer.setDefinitionExpression(null)),this.inputQuery===(this.expression&&this.expression.expression.where)?a.set(this.msgContainer,"innerHTML",this.expression.expression._attributeText):0===this._getObjectIds().length&&a.set(this.msgContainer,"innerHTML","")},_handleQueryButtonClick:function(){this._expDialog.set("title",this.i18n.queryLabel),this._selectBtn.set("checked",!1),this._isAttrFlag=!0;var e=this.layer&&(this.layer.type===E.BDATAFEATURE||this.layer.type===E.TABLE||this.layer.type===E.BTABLE);this._expressionForm.set("showUnique",!e),this.expression?(this._expressionForm.set("action","edit"),this._expressionForm.set("expression",this.expression.expression)):this._expressionForm.set("action","add"),this._expDialog.show()},_handleExpressionFormAdd:function(e){if(this.selectionLayer&&this.selectionLayer.clearSelection(),"add"===e.action||"edit"===e.action){this.set("expression",e),this.set("inputQuery",e.expression&&e.expression.where||"");var t=this._getQuery();this.selectionLayer&&this.selectionLayer.selectFeatures(t,_.SELECTION_ADD)}this._expDialog.hide()},_handleExpressionFormCancel:function(){this._expDialog.hide()},clear:function(){this.selectionLayer&&(this.selectionLayer.clearSelection(),this.map.removeLayer(this.selectionLayer),this.selectionLayer=null,this.set("inputQuery","")),this._mapClickHandle&&(this._mapClickHandle.remove(),delete this._mapClickHandle)},_handleMapClick:function(e){var s,n,r,o,a,l,h,c;!this._isAttrFlag&&this.expression&&this.selectionLayer.clearSelection(),n=6,(h=this.layer.renderer)&&"esri.renderer.SimpleRenderer"===h.declaredClass?((c=h.symbol).xoffset&&(n=Math.max(n,Math.abs(c.xoffset))),c.yoffset&&(n=Math.max(n,Math.abs(c.yoffset)))):!h||"esri.renderer.UniqueValueRenderer"!==h.declaredClass&&"esri.renderer.ClassBreaksRenderer"!==h.declaredClass||i.forEach(h.infos,(function(e){(c=e.symbol).xoffset&&(n=Math.max(n,Math.abs(c.xoffset))),c.yoffset&&(n=Math.max(n,Math.abs(c.yoffset)))})),s=e.screenPoint,r=this.map.toMap(new L(s.x-n,s.y+n)),o=this.map.toMap(new L(s.x+n,s.y-n)),a=new f(r.x,r.y,o.x,o.y,this.map.spatialReference),l=this._getQuery({extent:a}),this.layer.getDefinitionExpression&&(l.where=this.layer.getDefinitionExpression()),this.layer.queryFeatures(l).then(t.hitch(this,(function(e){if(e){var t,s=[],n=[],r=[];this.selectionLayer&&this.selectionLayer.getSelectedFeatures().length>0&&(n=i.map(this.selectionLayer.getSelectedFeatures(),(function(e){return e.attributes[this.selectionLayer.objectIdField]}),this)),i.forEach(e.features,(function(e){0===n.length?s.push(e.attributes[this.selectionLayer.objectIdField]):-1===i.indexOf(n,e.attributes[this.selectionLayer.objectIdField])?s.push(e.attributes[this.selectionLayer.objectIdField]):r.push(e.attributes[this.selectionLayer.objectIdField])}),this),s.length>0&&(t=this._getQuery({oids:s}),this.selectionLayer.selectFeatures(t,_.SELECTION_ADD)),r.length>0&&(t=this._getQuery({oids:r}),this.selectionLayer.selectFeatures(t,_.SELECTION_SUBTRACT))}})))},_handleLayerSelectionComplete:function(){var e,t=this.selectionLayer.getSelectedFeatures();!this._isAttrFlag&&t.length>0&&(e="",i.forEach(t,(function(t){return e+=this.selectionLayer.objectIdField+" = "+t.attributes[this.selectionLayer.objectIdField]+" OR ",t.attributes[this.selectionLayer.objectIdField]}),this),e=e.substring(0,e.lastIndexOf(" OR ")),this.set("inputQuery",e),a.set(this.msgContainer,"innerHTML",o.substitute(this.i18n.selectedFeaturesLabel,{total:t.length}))),this._isAttrFlag||0!==t.length||(a.set(this.msgContainer,"innerHTML",""),this.set("inputQuery",""))},_onSelectionLayerLoad:function(e,i){var n;if(i.setScaleRange(e.minScale,e.maxScale),this._connect(e,"onScaleRangeChange",t.hitch(this,(function(e,t){e.setScaleRange(t.minScale,t.maxScale)}),i,e)),this.map.addLayer(i),i.geometryType===T.GeometryTypes.Point||"esriGeometryMultPoint"===i.geometryType?((n=new b).setStyle(b.STYLE_TARGET),n._setDim(16,16,0),n.setOutline(new g(F.STYLE_SOLID,new s([0,255,255]),2,g.CAP_ROUND,g.JOIN_ROUND)),n.setColor(new s([0,0,0,0])),i.setSelectionSymbol(n)):i.geometryType===T.GeometryTypes.Line?i.setSelectionSymbol(new F(F.STYLE_SOLID,new s([0,255,255]),2)):i.geometryType===T.GeometryTypes.Polygon&&i.setSelectionSymbol(new S(S.STYLE_NULL,new F(F.STYLE_SOLID,new s([0,255,255]),2),new s([0,0,0,0]))),this.selectionLayer&&this.inputQuery){this.inputQuery.match(/ OR /g)||!this.expression?this._isAttrFlag=!1:(this._isAttrFlag=!0,this.set("expression",{action:"edit",expression:this.expression.expression}));var r=this._getQuery();this.selectionLayer.selectFeatures(r,_.SELECTION_ADD)}},_isLayerPresentInMap:function(e){var t=this.map.getLayersVisibleAtScale(),i=!1;return t.forEach((function(t){i=i||t.url===e.url})),i},_getObjectIds:function(){var e=this.get("inputQuery"),t=e?e.split(" OR "):[];return t=i.map(t,(function(e){return e.split(" = ")[1]})),a.set(this.msgContainer,"innerHTML",o.substitute(this.i18n.selectedFeaturesLabel,{total:t.length})),t},_getQuery:function(e){var t;return(t=new A).returnGeometry=!0,e?(e.extent&&(t.geometry=e.extent),e.oids&&(t.objectIds=e.oids),t):(this._isAttrFlag?t.where=this.get("inputQuery"):t.objectIds=this._getObjectIds(),t)},_setMapAttr:function(e){this.map=e},_getMapAttr:function(){return this.map},_getInputQueryAttr:function(){return this.inputQuery},_setInputQueryAttr:function(e){this.inputQuery=e},_getLayerAttr:function(){return this.selectionLayer},_setLayerAttr:function(e){if(e&&e.url){var i=this.layer&&(this.layer.type===E.BDATAFEATURE||this.layer.type===E.BTABLE||this.layer.type===E.TABLE);this.layer=e,this.set("inputQuery",""),this.selectionLayer&&this.clear(),this._selectBtn.set("checked",!1),this._expressionForm.set("showUnique",!i),this._expressionForm.set("showFirstRow",!1),this._expressionForm.set("firstOperands",[e]),this._expressionForm.set("inputOperands",[e]),this._expressionForm.set("selectedFirstOperand",e),this._expressionForm.init(),this._queryBtn.set("disabled",!1),this._setInputQueryForRerun(),this._isLayerPresentInMap(e)?(this._selectBtn.set("disabled",!1),this.selectionLayer=new _(e.url&&!e._collection?e.url:this.layer.toJson(),{outFields:["*"],mode:e.url&&!e._collection?_.MODE_SELECTION:_.MODE_SNAPSHOT}),this.selectionLayer.setRenderer(null),this.selectionLayer.on("selection-complete",t.hitch(this,this._handleLayerSelectionComplete)),this.selectionLayer.loaded?this._onSelectionLayerLoad(e,this.selectionLayer):this.selectionLayer.on("load",t.hitch(this,this._onSelectionLayerLoad,e,this.selectionLayer))):this._selectBtn.set("disabled",!0)}else this._selectBtn.set("disabled",!0),this._queryBtn.set("disabled",!0)},_setExpressionAttr:function(e){e?(this._isAttrFlag=!0,this.expression=e,this.expression.expression&&(a.set(this.msgContainer,"innerHTML",this.expression.expression._attributeText),this.set("inputQuery",this.expression.expression.where))):(this._isAttrFlag=!1,this.expression=void 0)},_getExpressionAttr:function(){return this.expression},_connect:function(e,t,i){this._pbConnects.push(n.connect(e,t,i))}});return r("extend-esri")&&t.setObject("dijit.analysis.components.FilterAndSelection.FilterAndSelection",I,d),I}));