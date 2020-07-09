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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/json","dojo/_base/fx","dojo/_base/Color","dojo/has","dojo/string","dojo/dom-style","dojo/query","dojo/dom-class","dojo/fx/easing","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/RadioButton","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","../../kernel","./AnalysisBase","./_AnalysisOptions","./CreditEstimator","./AnalysisToggleButton","./GroupToggleButton","../../symbols/SimpleFillSymbol","../../symbols/SimpleLineSymbol","../../graphic","../../toolbars/draw","../../layers/FeatureLayer","./utils","./AnalysisRegistry","dojo/i18n!./nls/GenerateTessellations","dojo/text!./templates/GenerateTessellations.html"],(function(e,t,i,s,n,a,r,o,l,h,u,c,d,y,p,_,m,f,b,L,x,S,v,g,C,w,I,O,A,N,B,j,k,T,U,z,F,D,M,E,P,q,G){var J=t([y,p,_,m,f,B,N],{declaredClass:"esri.dijit.analysis.GenerateTessellations",templateString:G,widgetsInTemplate:!0,binType:null,extentLayer:null,extentLayers:[],intersectStudyArea:null,binSize:null,binSizeUnit:null,outputLayerName:null,distanceDefaultUnits:"",drawLayerName:"",drawnLayerIndex:-1,i18n:null,toolName:"GenerateTessellations",helpFileName:"GenerateTessellations",resultParameter:"tessellationLayer",distanceOptions:[],areaOptions:[],shapeOptions:[],constructor:function(e){this._pbConnects=[],e.containerNode&&(this.container=e.containerNode)},destroy:function(){this.inherited(arguments),this._pbConnects.forEach(s.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),i.mixin(this.i18n,q),this.set("drawLayerName",this.i18n.drawnPolygonLayer),this._initializeOptions()},postCreate:function(){this.inherited(arguments),c.add(this._form.domNode,"esriSimpleForm"),this._outputLayerInput.set("validator",i.hitch(this,this.validateServiceName)),this._buildUI()},startup:function(){},_initializeOptions:function(){this.distanceOptions=[{value:"Miles",label:this.i18n.miles,selected:"Miles"===this.distanceDefaultUnits},{value:"Yards",label:this.i18n.yards},{value:"Feet",label:this.i18n.feet},{value:"NauticalMiles",label:this.i18n.nautMiles},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers,selected:"Kilometers"===this.distanceDefaultUnits},{value:"Meters",label:this.i18n.meters}],this.areaOptions=[{value:"SquareMiles",label:this.i18n.sqMiles,selected:"Miles"===this.distanceDefaultUnits},{value:"SquareFeet",label:this.i18n.sqFeet},{value:"SquareYards",label:this.i18n.sqYards},{value:"SquareInches",label:this.i18n.sqIn},{type:"separator"},{value:"SquareKilometers",label:this.i18n.sqKm,selected:"Kilometers"===this.distanceDefaultUnits},{value:"SquareMeters",label:this.i18n.sqMeters},{value:"Hectares",label:this.i18n.hectares},{value:"Acres",label:this.i18n.acres}],this.shapeOptions=[{value:P.Shapes.square,iconClassName:"squareBinTessIcon",iconTextLabel:this.i18n.square,selected:!0},{value:P.Shapes.hexagon,iconClassName:"regularHexagonBinTessIcon",iconTextLabel:this.i18n.hexagon},{value:P.Shapes.transverseHexagon,iconClassName:"transverseHexagonBinTessIcon",iconTextLabel:this.i18n.transverseHexagon},{value:P.Shapes.triangle,iconClassName:"triangleBinTessIcon",iconTextLabel:this.i18n.triangle},{value:P.Shapes.diamond,iconClassName:"diamondBinTessIcon",iconTextLabel:this.i18n.diamond}]},_loadConnections:function(){this.on("start",i.hitch(this,"_onClose",!0)),this._connect(this._closeBtn,"onclick",i.hitch(this,"_onClose",!1))},_connect:function(e,t,i){this._pbConnects.push(s.connect(e,t,i))},_buildUI:function(){this._loadConnections(),this.signInPromise.then(i.hitch(this,E.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer})),this.showSelectFolder&&this.getFolderStore().then(i.hitch(this,(function(e){this.folderStore=e,E.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}))),h.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none"),h.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none"),this._addOptionsToSelectBoxes(),this._harmonizeJobParamsAndUI()},_addOptionsToSelectBoxes:function(){this._addOptionIcons(this._shapeSelect,this.shapeOptions),this._addExtentLayersOptions(),this._addBinSizeUnitOptions()},_harmonizeJobParamsAndUI:function(){this.binType&&this._shapeSelect.set("value",this.binType),this.intersectStudyArea&&this._intersectChkBox.set("checked",!0),this.binSizeUnit&&this._binSizeUnitSelect.set("value",this.binSizeUnit),this.binSize&&this._binSizeInput.set("value",this.binSize),this.outputLayerName&&this._outputLayerInput.set("value",this.outputLayerName)},_updateOutputLayerName:function(){var e=l.substitute(this.i18n.outputLayerName,{extentLayerName:this.extentLayer?this.extentLayer.name:this.i18n.currentExtent});this._outputLayerInput.set("value",e)},_generateOptionLabelMarkUp:function(e,t){return'<div class="esriFloatLeading bufferIcon '+e+'"></div><div class="esriLeadingMargin4" style="height:20px;margin-top:10px;">'+t+"</div>"},_addOptionIcons:function(e,t){var i=t.map((function(e){return{value:e.value,label:this._generateOptionLabelMarkUp(e.iconClassName,e.iconTextLabel),selected:e.selected}}),this);E.updateOptions(e,i)},_addExtentLayersOptions:function(){var e=[{value:"sameAsDisplay",label:this.i18n.sameAsDisplay}];this.get("showSelectAnalysisLayer")&&this.extentLayers&&this.extentLayer&&!E.isLayerInLayers(this.extentLayer,this.extentLayers)&&this.extentLayers.push(this.extentLayer),this.extentLayers.forEach((function(t,i){var s=!!E.isSameLayer(t,this.extentLayer);e.push({value:i.toString(),label:t.name,selected:s})}),this),this._analysisSelect.addOption(e),E.addReadyToUseLayerOption(this,[this._analysisSelect])},_addBinSizeUnitOptions:function(){var e=this.areaOptions.some((function(e){return this.binSizeUnit===e.value}),this);!this.binSizeUnit||e?(this._areaChkBox.set("checked",!0,!1),this._handleAreaCheck(!0)):(this._distanceChkBox.set("checked",!0,!1),this._handleDistanceCheck(!0))},_setAnalysisGpServerAttr:function(e){e&&(this.analysisGpServer=e,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setExtentLayerAttr:function(e){this.extentLayer=e,this._updateOutputLayerName(),this._intersectChkBox.set("disabled",!e)},_setDisableRunAnalysisAttr:function(e){this._saveBtn.set("disabled",e)},_getBinTypeAttr:function(){return this._shapeSelect.get("value")},_getExtentLayerAttr:function(){return this.extentLayer},_getIntersectStudyAreaAttr:function(){return this._intersectChkBox.get("checked")},_getBinSizeAttr:function(){return this._binSizeInput.get("value")},_getBinSizeUnitAttr:function(){return this._binSizeUnitSelect.get("value")},_getOutputLayerNameAttr:function(){return this._outputLayerInput.get("value")},_handleAnalysisLayerChange:function(e){"browse"===e||"browselayers"===e?this._createBrowseItems(e,{},this._analysisSelect):"sameAsDisplay"===e?(this._intersectChkBox.set("checked",!1),this._useExtentCheck.set("checked",!0),this.set("extentLayer",null)):(this._useExtentCheck.set("checked",!1),this.set("extentLayer",this.extentLayers[e])),this.drawnLayerIndex!==e&&this.clear()},_handleDistanceCheck:function(e){e&&E.updateOptions(this._binSizeUnitSelect,i.clone(this.distanceOptions))},_handleAreaCheck:function(e){e&&E.updateOptions(this._binSizeUnitSelect,i.clone(this.areaOptions))},_handleBrowseItemsSelect:function(e,t){e&&e.selection&&E.addAnalysisReadyLayer({item:e.selection,layers:this.extentLayers,layersSelect:this._analysisSelect,browseDialog:e.dialog||this._browsedlg,widget:this},t)},_getDrawLayerNameAttr:function(){return this._featureLayer.name},_getDrawLayerAttr:function(){return this._featureLayer},_handleBoundingBtnChange:function(e){e?(this.emit("drawtool-activate",{}),this._featureLayer||this._createBoundingPolyFeatColl(),this._toolbar.activate(D.POLYGON)):(this._toolbar.deactivate(),this.emit("drawtool-deactivate",{}))},_createBoundingPolyFeatColl:function(){var e=E.createPolygonFeatureCollection(this.drawLayerName);this._featureLayer=new M(e,{id:this.drawLayerName}),this.map.addLayer(this._featureLayer),s.connect(this._featureLayer,"onClick",i.hitch(this,(function(e){this.map.infoWindow.setFeatures([e.graphic])})))},_setDrawLayerNameAttr:function(e){this.drawLayerName=e},_setMapAttr:function(e){this.map=e,this._toolbar=new D(this.map),s.connect(this._toolbar,"onDrawEnd",i.hitch(this,this._addFeatures))},_getMapAttr:function(){return this.map},_addFeatures:function(e){var t=[],i={},s=new F(e);i.description="blayer desc",i.title="blayer",s.setAttributes(i),t.push(s),this._featureLayer.applyEdits(t,null,null),-1===this.drawnLayerIndex&&(this.drawnLayerIndex=(this.extentLayers.push(this._featureLayer)-1).toString(),E.updateOptions(this._analysisSelect),this._addExtentLayersOptions(),this._analysisSelect.set("value",this.drawnLayerIndex)),this._bndgPolyDrawBtn.reset()},clear:function(){this._featureLayer&&(this.map.removeLayer(this._featureLayer),this._analysisSelect.removeOption({value:this.drawnLayerIndex,label:this._featureLayer.name}),this.extentLayers.splice(this.drawnLayerIndex,1),this._featureLayer=null,this.drawnLayerIndex=-1),this._handleBoundingBtnChange(!1)},_buildJobParams:function(){var e={},t={};return e={binType:this.get("binType"),extentLayer:this.extentLayer?n.toJson(this.constructAnalysisInputLyrObj(this.extentLayer)):null,intersectStudyArea:this.get("intersectStudyArea"),binSize:this.get("binSize"),binSizeUnit:this.get("binSizeUnit")},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(t.extent=this.map.extent._normalize(!0)),this.returnFeatureCollection?t.outSR=this.map.spatialReference:e.OutputName=n.toJson({serviceProperties:{name:this.get("outputLayerName")}}),e.context=n.toJson(t),e},_buildExecuteObj:function(){var e={};return e.jobParams=this._buildJobParams(),e.itemParams={description:l.substitute(this.i18n.itemDescription,{extentLayerName:this.extentLayer?this.extentLayer.name:this.i18n.currentExtent}),tags:l.substitute(this.i18n.itemTags,{extentLayerName:this.extentLayer?this.extentLayer.name:this.i18n.currentExtent}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(e.itemParams.folder=this.get("folderId")),this.showGeoAnalyticsParams&&(e.isSpatioTemporalDataStore=!0),e},_handleShowCreditsClick:function(e){e.preventDefault(),this._form.validate()&&this.getCreditsEstimate(this.toolName,this._buildJobParams()).then(i.hitch(this,(function(e){this._usageForm.set("content",e),this._usageDialog.show()})))},_handleSaveBtnClick:function(){var e;this._form.validate()&&(this.set("disableRunAnalysis",!0),e=this._buildExecuteObj(),this.execute(e))},_handleCloseMsg:function(e){e&&e.preventDefault(),a.fadeOut({node:this._errorMessagePane,easing:d.quadOut,onEnd:i.hitch(this,(function(){h.set(this._errorMessagePane,{display:"none"})}))}).play()},_onClose:function(e){e?(this._save(),this.emit("save",{save:!0})):this.clear(),this.emit("close",{save:e})},_save:function(){},validateServiceName:function(e){return E.validateServiceName(e,{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})}});return o("extend-esri")&&i.setObject("dijit.analysis.GenerateTessellations",J,A),J}));