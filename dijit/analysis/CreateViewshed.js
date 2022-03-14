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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/Color","dojo/_base/json","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/number","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/NumberSpinner","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/Dialog","../../kernel","../../lang","./AnalysisBase","./_AnalysisOptions","../../symbols/SimpleFillSymbol","../../symbols/SimpleLineSymbol","../../toolbars/draw","../PopupTemplate","../../layers/FeatureLayer","../../graphic","./utils","./AnalysisRegistry","./CreditEstimator","../../symbols/PictureMarkerSymbol","dijit/form/HorizontalSlider","dijit/form/HorizontalRule","dijit/form/HorizontalRuleLabels","dojo/i18n!../../nls/jsapi","dojo/text!./templates/CreateViewshed.html"],(function(t,e,i,s,a,n,r,o,h,l,u,c,m,p,d,y,g,_,f,L,b,v,x,U,D,H,S,C,w,j,I,A,M,N,F,P,k,O,E,T,B,V,R,J,G,z,K,Y,W,q,Q){var X=e([g,_,f,L,b,P,F],{declaredClass:"esri.dijit.analysis.CreateViewshed",templateString:Q,widgetsInTemplate:!0,inputLayer:null,maximumDistance:15,maxDistanceUnits:"Kilometers",targetHeight:0,targetHeightUnits:"Meters",observerHeight:1.75,observerHeightUnits:"Meters",outputLayerName:null,i18n:null,map:null,toolName:"CreateViewshed",helpFileName:"CreateViewshed",resultParameter:"viewshedLayer",constructor:function(t,e){var i=t.distanceDefaultUnits||"Miles";this._pbConnects=[],t.containerNode&&(this.container=t.containerNode),this.maxDistanceUnits=t.maxDistanceUnits?t.maxDistanceUnits:i,this.maximumDistance=N.isDefined(t.maximumDistance)?t.maximumDistance:"Miles"===i?9:15,this.observerHeightUnits=t.observerHeightUnits?t.observerHeightUnits:"Miles"===i?"Feet":"Meters",this.observerHeight=N.isDefined(t.observerHeight)?t.observerHeight:"Miles"===i?6:1.75,this.targetHeightUnits=t.targetHeightUnits?t.targetHeightUnits:"Miles"===i?"Feet":"Meters"},destroy:function(){this.inherited(arguments),s.forEach(this._pbConnects,a.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),i.mixin(this.i18n,q.findHotSpotsTool),i.mixin(this.i18n,q.createViewshedTool),this.set("drawPointLayerName",this.i18n.pointlayerName)},postCreate:function(){this.inherited(arguments),d.add(this._form.domNode,"esriSimpleForm"),this._outputLayerInput.set("validator",i.hitch(this,this.validateServiceName)),this.showCredits=!1,this._buildUI()},startup:function(){},_handleModeCrumbClick:function(t){t.preventDefault(),this._onClose(!0)},_onClose:function(t){t&&this._pointfeatureLayer&&(this.map.removeLayer(this._pointfeatureLayer),s.forEach(this.inputLayers,(function(t,e){if(t===this._pointfeatureLayer)return this._analysisSelect.removeOption({value:e+1,label:this._pointfeatureLayer.name}),void this.inputLayers.splice(e,1)}),this)),this._handleInputDrawPointChange(!1),this.emit("close",{save:!t})},clear:function(){this._pointfeatureLayer&&(this.map.removeLayer(this._pointfeatureLayer),s.forEach(this.inputLayers,(function(t,e){if(t===this._pointfeatureLayer)return this._analysisSelect.removeOption({value:e+1,label:this._pointfeatureLayer.name}),void this.inputLayers.splice(e,1)}),this)),this._handleInputDrawPointChange(!1)},_handleShowCreditsClick:function(t){t.preventDefault();var e={},s=this.get("observerHeight"),a=this.get("targetHeight"),n=this.get("maximumDistance");this._form.validate()&&(e.inputLayer=r.toJson(this.constructAnalysisInputLyrObj(this.get("inputLayer"))),n>=0&&(e.maximumDistance=n,e.maxDistanceUnits=this.get("maxDistanceUnits")),s>=0&&(e.observerHeight=s,e.observerHeightUnits=this.get("observerHeightUnits")),a>=0&&(e.targetHeight=a,e.targetHeightUnits=this.get("targetHeightUnits")),this.returnFeatureCollection||(e.OutputName=r.toJson({serviceProperties:{name:this.get("outputLayerName")}})),this.returnFeatureCollection||(e.OutputName=r.toJson({serviceProperties:{name:this.get("outputLayerName")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(e.context=r.toJson({extent:this.map.extent._normalize(!0)})),this.getCreditsEstimate(this.toolName,e).then(i.hitch(this,(function(t){this._usageForm.set("content",t),this._usageDialog.show()}))))},_handleSaveBtnClick:function(t){if(this._form.validate()){this._saveBtn.set("disabled",!0);var e,i={},s={},a=this.get("observerHeight"),n=this.get("targetHeight"),o=this.get("maximumDistance");i.inputLayer=r.toJson(this.constructAnalysisInputLyrObj(this.get("inputLayer"))),o>=0&&(i.maximumDistance=o,i.maxDistanceUnits=this.get("maxDistanceUnits")),a>=0&&(i.observerHeight=a,i.observerHeightUnits=this.get("observerHeightUnits")),n>=0&&(i.targetHeight=n,i.targetHeightUnits=this.get("targetHeightUnits")),this.returnFeatureCollection||(i.OutputName=r.toJson({serviceProperties:{name:this.get("outputLayerName")}})),this.showChooseExtent&&!this.get("disableExtent")&&this._useExtentCheck.get("checked")&&(i.context=r.toJson({extent:this.map.extent._normalize(!0)})),this.returnFeatureCollection&&(e={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(e.extent=this.map.extent._normalize(!0)),i.context=r.toJson(e)),i.returnFeatureCollection=this.returnFeatureCollection,s.jobParams=i,s.itemParams={description:this.i18n.itemDescription,tags:l.substitute(this.i18n.itemTags,{layername:this.inputLayer.name,fieldname:i.field?i.field:""}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(s.itemParams.folder=this.get("folderId")),this.execute(s)}},_save:function(){},_buildUI:function(){this._loadConnections(),this.signInPromise.then(i.hitch(this,R.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer}));var t=!0;this.get("showSelectAnalysisLayer")&&(this.inputLayers&&this.inputLayer&&!R.isLayerInLayers(this.inputLayer,this.inputLayers)&&(this.inputLayers.push(this.inputLayer),-1!==this.inputLayer.name.indexOf("Drawn Input Points")&&(this.map.addLayer(this.inputLayer),this._pointfeatureLayer=this.inputLayer)),this.get("inputLayer")||!this.get("inputLayers")||this.rerun||this.set("inputLayer",this.inputLayers[0]),R.populateAnalysisLayers(this,"inputLayer","inputLayers",{posIncrement:1})),this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),t=!1),R.addReadyToUseLayerOption(this,[this._analysisSelect]),this._updateAnalysisLayerUI(t),u.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(i.hitch(this,(function(t){this.folderStore=t,R.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}))),u.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none"),u.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none"),this._distanceUnitsSelect.addOption([{value:"Miles",label:this.i18n.miles},{value:"Yards",label:this.i18n.yards},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}]),this.maxDistanceUnits&&(this._distanceUnitsSelect.set("value",this.maxDistanceUnits),this._handleMaxDstUnitsChange(this.maxDistanceUnits)),this.maximumDistance&&this._maximumDistanceInput.set("value",this.maximumDistance),this._obsrUnitsSelect.addOption([{value:"Miles",label:this.i18n.miles},{value:"Yards",label:this.i18n.yards},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}]),this.observerHeightUnits&&this._obsrUnitsSelect.set("value",this.observerHeightUnits),this.observerHeight&&this._obsrHeightInput.set("value",this.observerHeight),this._targetUnitsSelect.addOption([{value:"Miles",label:this.i18n.miles},{value:"Yards",label:this.i18n.yards},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}]),this.targetHeightUnits&&this._targetUnitsSelect.set("value",this.targetHeightUnits),this.targetHeight&&this._targetHgtInput.set("value",this.targetHeight)},_loadConnections:function(){this.on("start",i.hitch(this,"_onClose",!1)),this._connect(this._closeBtn,"onclick",i.hitch(this,"_onClose",!0))},validateServiceName:function(t){return R.validateServiceName(t,{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})},_handleInputDrawPointChange:function(t){t?(this.emit("drawtool-activate",{}),this._pointfeatureLayer||this._createPointFeatColl(),this._pointtoolbar.activate(E.POINT)):this._pointtoolbar.deactivate()},_createPointFeatColl:function(){var t=R.createPointFeatureCollection(this.drawPointLayerName);this._pointfeatureLayer=new B(t,{id:this.drawPointLayerName}),this.map.addLayer(this._pointfeatureLayer),a.connect(this._pointfeatureLayer,"onClick",i.hitch(this,(function(t){this.map.infoWindow.setFeatures([t.graphic])})))},_addPointFeatures:function(t){var e=[],i={},a=new V(t);if(i.description="blayer desc",i.title="blayer",a.setAttributes(i),e.push(a),this._pointfeatureLayer.applyEdits(e,null,null),0===this.inputLayers.length||this.inputLayers[this.inputLayers.length-1]!==this._pointfeatureLayer){this.inputLayers.push(this._pointfeatureLayer);var n=this.inputLayers.length-1,r=this._analysisSelect.getOptions();this._analysisSelect.removeOption(r),r=s.map(r,(function(t){return t.selected=!1,t})),this._analysisSelect.addOption({value:n+1,label:this._pointfeatureLayer.name,selected:!0}),this._analysisSelect.addOption(r),this._handleAnalysisLayerChange(n+1)}},_handleMaxDstChange:function(){this._maximumDistanceInput.validate()},_handleMaxDstUnitsChange:function(t){var e="",i={min:0};"Miles"===t?(i.max=31,e=l.substitute(this.i18n.maxDistanceValidMsg,{units:t,limit:31})):"Kilometers"===t?(i.max=50,e=l.substitute(this.i18n.maxDistanceValidMsg,{units:t,limit:50})):"Yards"===t?(i.max=54680,e=l.substitute(this.i18n.maxDistanceValidMsg,{units:t,limit:54680})):"Feet"===t?(i.max=164041,e=l.substitute(this.i18n.maxDistanceValidMsg,{units:t,limit:164041})):"Meters"===t&&(i.max=5e4,e=l.substitute(this.i18n.maxDistanceValidMsg,{units:t,limit:5e4})),this._maximumDistanceInput.set("constraints",i),this._maximumDistanceInput.set("rangeMessage",e)},_handleAnalysisLayerChange:function(t){"browse"===t||"browselayers"===t?(this._createBrowseItems({browseValue:t,disabledSubResources:[this.inputLayer]},{tags:["point"],geometryTypes:[J.GeometryTypes.Point,J.GeometryTypes.MultiPoint]},this._analysisSelect),this._analysisPointDrawBtn.reset()):(this.inputLayer=this.inputLayers[t-1],this._updateAnalysisLayerUI(!0))},_handleBrowseItemsSelect:function(t,e){t&&t.selection&&R.addAnalysisReadyLayer({item:t.selection,layers:this.inputLayers,layersSelect:this._analysisSelect,posIncrement:1,browseDialog:t.dialog||this._browsedlg,widget:this},e).always(i.hitch(this,this._updateAnalysisLayerUI,!0))},_updateAnalysisLayerUI:function(t){this.inputLayer&&(c.set(this._interpolateToolDescription,"innerHTML",l.substitute(this.i18n.toolDefine,{layername:this.inputLayer.name})),t&&(this.outputLayerName=l.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name})),this._outputLayerInput.set("value",this.outputLayerName),this._pointfeatureLayer&&this._pointfeatureLayer.name!==this.inputLayer.name&&this._analysisPointDrawBtn.reset())},_setAnalysisGpServerAttr:function(t){t&&(this.analysisGpServer=t,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayersAttr:function(t){this.inputLayers=t||[]},_setInputLayerAttr:function(t){this.inputLayer=t},_getInputLayerAttr:function(){return this.inputLayer},_getOutputLayerNameAttr:function(){return this._outputLayerInput&&(this.outputLayerName=this._outputLayerInput.get("value")),this.outputLayerName},_setOutputLayerNameAttr:function(t){this.outputLayerName=t},_setMapAttr:function(t){this.map=t,this._pointtoolbar=new E(this.map),a.connect(this._pointtoolbar,"onDrawEnd",i.hitch(this,this._addPointFeatures))},_getMapAttr:function(){return this.map},_setDisableRunAnalysisAttr:function(t){this._saveBtn.set("disabled",t)},_setDisableExtentAttr:function(t){this._useExtentCheck.set("checked",!t),this._useExtentCheck.set("disabled",t)},_getDisableExtentAttr:function(){this._useExtentCheck.get("disabled")},_setMaxDistanceUnitsAttr:function(t){this.maxDistanceUnits=t},_getMaxDistanceUnitsAttr:function(){return this._distanceUnitsSelect&&this._distanceUnitsSelect.get("value")&&(this.maxDistanceUnits=this._distanceUnitsSelect.get("value")),this.maxDistanceUnits},_setMaximumDistanceAttr:function(t){this.maximumDistance=t},_getMaximumDistanceAttr:function(){return this._maximumDistanceInput.get("value")},_setObserverHeightUnitsAttr:function(t){this.observerHeightUnits=t},_getObserverHeightUnitsAttr:function(){return this._obsrUnitsSelect&&this._obsrUnitsSelect.get("value")&&(this.observerHeightUnits=this._obsrUnitsSelect.get("value")),this.observerHeightUnits},_setObserverHeightAttr:function(t){this.observerHeight=t},_getObserverHeightAttr:function(){return this._obsrHeightInput.get("value")},_setTargetHeightUnitsAttr:function(t){this.targetHeightUnits=t},_getTargetHeightUnitsAttr:function(){return this._targetUnitsSelect&&this._targetUnitsSelect.get("value")&&(this.targetHeightUnits=this._targetUnitsSelect.get("value")),this.targetHeightUnits},_setTargetHeightAttr:function(t){this.targetHeight=t},_getTargetHeightAttr:function(){return this._targetHgtInput.get("value")},_setDrawPointLayerNameAttr:function(t){this.drawPointLayerName=t},_getDrawPointLayerNameAttr:function(){return this._pointfeatureLayer.name},_getDrawLayerAttr:function(){var t=[];return this._featureLayer&&t.push(this._featureLayer),this._pointfeatureLayer&&t.push(this._pointfeatureLayer),t},_connect:function(t,e,i){this._pbConnects.push(a.connect(t,e,i))}});return o("extend-esri")&&i.setObject("dijit.analysis.CreateViewshed",X,M),X}));