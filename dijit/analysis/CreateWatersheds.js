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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/Color","dojo/_base/json","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/number","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/NumberSpinner","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/Dialog","../../kernel","../../lang","./AnalysisBase","./_AnalysisOptions","../../symbols/SimpleFillSymbol","../../symbols/SimpleLineSymbol","../../toolbars/draw","../PopupTemplate","../../layers/FeatureLayer","../../graphic","./utils","./AnalysisRegistry","./CreditEstimator","../../symbols/PictureMarkerSymbol","dijit/form/HorizontalSlider","dijit/form/HorizontalRule","dijit/form/HorizontalRuleLabels","dojo/i18n!../../nls/jsapi","dojo/text!./templates/CreateWatersheds.html"],(function(t,e,i,s,a,n,r,o,h,l,u,c,p,d,y,_,m,L,f,g,b,v,C,S,j,w,I,x,D,N,A,P,F,U,k,E,O,M,T,B,R,W,G,J,z,H,q,V,K,Y,Q){var X=e([m,L,f,g,b,E,k],{declaredClass:"esri.dijit.analysis.CreateWatersheds",templateString:Q,widgetsInTemplate:!0,inputLayer:null,searchDistance:null,searchUnits:"Meters",outputLayerName:null,i18n:null,map:null,toolName:"CreateWatersheds",helpFileName:"CreateWatersheds",resultParameter:["watershedLayer","snapPourPtsLayer"],constructor:function(t,e){this._pbConnects=[],t.containerNode&&(this.container=t.containerNode)},destroy:function(){this.inherited(arguments),s.forEach(this._pbConnects,a.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),i.mixin(this.i18n,Y.createWatershedTool),this.set("drawPointLayerName",this.i18n.pointlayerName)},postCreate:function(){this.inherited(arguments),y.add(this._form.domNode,"esriSimpleForm"),this._outputLayerInput.set("validator",i.hitch(this,this.validateServiceName)),this.showCredits=!1,this._buildUI()},startup:function(){},_handleModeCrumbClick:function(t){t.preventDefault(),this._onClose(!0)},_onClose:function(t){t&&this._pointfeatureLayer&&(this.map.removeLayer(this._pointfeatureLayer),s.forEach(this.inputLayers,(function(t,e){if(t===this._pointfeatureLayer)return this._analysisSelect.removeOption({value:e+1,label:this._pointfeatureLayer.name}),void this.inputLayers.splice(e,1)}),this)),this._handleInputDrawPointChange(!1),this.emit("close",{save:!t})},clear:function(){this._pointfeatureLayer&&(this.map.removeLayer(this._pointfeatureLayer),s.forEach(this.inputLayers,(function(t,e){if(t===this._pointfeatureLayer)return this._analysisSelect.removeOption({value:e+1,label:this._pointfeatureLayer.name}),void this.inputLayers.splice(e,1)}),this)),this._handleInputDrawPointChange(!1)},_handleShowCreditsClick:function(t){t.preventDefault();var e={};this._form.validate()&&(e.inputLayer=r.toJson(this.constructAnalysisInputLyrObj(this.get("inputLayer"))),e.searchDistance=this.get("searchDistance"),e.searchUnits=this.get("searchUnits"),this.returnFeatureCollection||(e.OutputName=r.toJson({serviceProperties:{name:this.get("outputLayerName")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(e.context=r.toJson({extent:this.map.extent._normalize(!0)})),this.getCreditsEstimate(this.toolName,e).then(i.hitch(this,(function(t){this._usageForm.set("content",t),this._usageDialog.show()}))))},_handleSaveBtnClick:function(t){if(this._form.validate()){this._saveBtn.set("disabled",!0);var e,i={},s={};i.inputLayer=r.toJson(this.constructAnalysisInputLyrObj(this.get("inputLayer"))),i.searchDistance=this.get("searchDistance"),i.searchUnits=this.get("searchUnits"),this.returnFeatureCollection||(i.OutputName=r.toJson({serviceProperties:{name:this.get("outputLayerName")}})),this.showChooseExtent&&!this.get("disableExtent")&&this._useExtentCheck.get("checked")&&(i.context=r.toJson({extent:this.map.extent._normalize(!0)})),this.returnFeatureCollection&&(e={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(e.extent=this.map.extent._normalize(!0)),i.context=r.toJson(e)),i.returnFeatureCollection=this.returnFeatureCollection,s.jobParams=i,s.itemParams={description:this.i18n.itemDescription,tags:l.substitute(this.i18n.itemTags,{layername:this.inputLayer.name,fieldname:i.field?i.field:""}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(s.itemParams.folder=this.get("folderId")),this.execute(s)}},_save:function(){},_buildUI:function(){var t=!0;this._loadConnections(),this.signInPromise.then(i.hitch(this,G.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer})),this.get("showSelectAnalysisLayer")&&(this.inputLayers&&this.inputLayer&&!G.isLayerInLayers(this.inputLayer,this.inputLayers)&&this.inputLayers.push(this.inputLayer),this.get("inputLayer")||!this.get("inputLayers")||this.rerun||this.set("inputLayer",this.inputLayers[0]),G.populateAnalysisLayers(this,"inputLayer","inputLayers",{posIncrement:1})),G.addReadyToUseLayerOption(this,[this._analysisSelect]),this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),t=!1),this.inputLayer&&this._updateAnalysisLayerUI(t),u.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(i.hitch(this,(function(t){this.folderStore=t,G.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}))),u.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none"),u.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none"),this._distanceUnitsSelect.addOption([{value:"Miles",label:this.i18n.miles},{value:"Yards",label:this.i18n.yards},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}]),this.searchUnits&&this._distanceUnitsSelect.set("value",this.searchUnits),this.searchDistance&&this._searchDistanceInput.set("value",this.searchDistance)},_loadConnections:function(){this.on("start",i.hitch(this,"_onClose",!1)),this._connect(this._closeBtn,"onclick",i.hitch(this,"_onClose",!0))},_handleAnalysisLayerChange:function(t){this._isAnalysisSelect=!1,"browse"===t||"browselayers"===t?(this._analysisPointDrawBtn.reset(),this._createBrowseItems({browseValue:t,disabledSubResources:[this.inputLayer]},{tags:["point"],geometryTypes:[J.GeometryTypes.Point,J.GeometryTypes.MultiPoint]},this._analysisSelect)):(this.inputLayer=this.inputLayers[t-1],this._updateAnalysisLayerUI(!0))},_updateAnalysisLayerUI:function(t){this.inputLayer&&(c.set(this._interpolateToolDescription,"innerHTML",l.substitute(this.i18n.toolDefine,{layername:this.inputLayer.name})),t&&(this.outputLayerName=l.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name})),this._outputLayerInput.set("value",this.outputLayerName),this._pointfeatureLayer&&this._pointfeatureLayer.name!==this.inputLayer.name&&this._analysisPointDrawBtn.reset())},_handleBrowseItemsSelect:function(t,e){t&&t.selection&&G.addAnalysisReadyLayer({item:t.selection,layers:this.inputLayers,layersSelect:this._analysisSelect,posIncrement:1,browseDialog:t.dialog||this._browsedlg,widget:this},e).always(i.hitch(this,this._updateAnalysisLayerUI,!0))},_handleInputDrawPointChange:function(t){t?(this.emit("drawtool-activate",{}),this._pointfeatureLayer||this._createPointFeatColl(),this._pointtoolbar.activate(T.POINT)):this._pointtoolbar.deactivate()},_createPointFeatColl:function(){var t=G.createPointFeatureCollection(this.drawPointLayerName);this._pointfeatureLayer=new R(t,{id:this.drawPointLayerName}),this.map.addLayer(this._pointfeatureLayer),a.connect(this._pointfeatureLayer,"onClick",i.hitch(this,(function(t){this.map.infoWindow.setFeatures([t.graphic])})))},_addPointFeatures:function(t){var e=[],i={},a=new W(t);if(i.description="blayer desc",i.title="blayer",a.setAttributes(i),e.push(a),this._pointfeatureLayer.applyEdits(e,null,null),0===this.inputLayers.length||this.inputLayers[this.inputLayers.length-1]!==this._pointfeatureLayer){this.inputLayers.push(this._pointfeatureLayer);var n=this.inputLayers.length-1,r=this._analysisSelect.getOptions();this._analysisSelect.removeOption(r),r=s.map(r,(function(t){return t.selected=!1,t})),this._analysisSelect.addOption({value:n+1,label:this._pointfeatureLayer.name,selected:!0}),this._analysisSelect.addOption(r),this._handleAnalysisLayerChange(n+1)}},validateServiceName:function(t){return G.validateServiceName(t,{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})},_setAnalysisGpServerAttr:function(t){t&&(this.analysisGpServer=t,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayersAttr:function(t){this.inputLayers=t},_setInputLayerAttr:function(t){this.inputLayer=t},_getInputLayerAttr:function(){return this.inputLayer},_getOutputLayerNameAttr:function(){return this._outputLayerInput&&(this.outputLayerName=this._outputLayerInput.get("value")),this.outputLayerName},_setOutputLayerNameAttr:function(t){this.outputLayerName=t},_setMapAttr:function(t){this.map=t,this._pointtoolbar=new T(this.map),a.connect(this._pointtoolbar,"onDrawEnd",i.hitch(this,this._addPointFeatures))},_getMapAttr:function(){return this.map},_setDisableRunAnalysisAttr:function(t){this._saveBtn.set("disabled",t)},_setDisableExtentAttr:function(t){this._useExtentCheck.set("checked",!t),this._useExtentCheck.set("disabled",t)},_getDisableExtentAttr:function(){this._useExtentCheck.get("disabled")},_setSearchUnitsAttr:function(t){this.searchUnits=t},_getSearchUnitsAttr:function(){return this._distanceUnitsSelect&&this._distanceUnitsSelect.get("value")&&(this.searchUnits=this._distanceUnitsSelect.get("value")),this.searchUnits},_setSearchDistanceAttr:function(t){this.searchDistance=t},_getSearchDistanceAttr:function(){return this._searchDistanceInput&&this._searchDistanceInput.get("value")&&(this.searchDistance=this._searchDistanceInput.get("value")),this.searchDistance},_setDrawPointLayerNameAttr:function(t){this.drawPointLayerName=t},_getDrawPointLayerNameAttr:function(){return this._pointfeatureLayer.name},_getDrawLayerAttr:function(){var t=[];return this._featureLayer&&t.push(this._featureLayer),this._pointfeatureLayer&&t.push(this._pointfeatureLayer),t},_connect:function(t,e,i){this._pbConnects.push(a.connect(t,e,i))}});return o("extend-esri")&&i.setObject("dijit.analysis.CreateWatersheds",X,F),X}));