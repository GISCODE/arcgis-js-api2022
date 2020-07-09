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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/_base/array","dojo/_base/html","dojo/has","dojo/on","dojo/string","dojo/number","dojo/touch","dojo/query","dojo/json","dojo/Evented","dojo/Deferred","dojo/date","dojo/date/locale","dojo/i18n!../nls/jsapi","dojo/i18n!dojo/cldr/nls/number","dojo/dom-class","dojo/dom-style","dojo/dom-construct","../kernel","dojo/text!./ImageFilter/templates/ImageFilter.html","dojo/store/Memory","dojo/store/Observable","dojo/data/ObjectStore","dijit/form/Select","dijit/form/HorizontalSlider","dijit/form/HorizontalRule","dijit/form/HorizontalRuleLabels","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojox/form/HorizontalRangeSlider","dojox/timing/_base","../domUtils","../lang","../graphic","../symbols/SimpleFillSymbol","../symbols/SimpleLineSymbol","../Color","../request","../layers/MosaicRule","../tasks/query","../tasks/QueryTask","../tasks/ImageServiceIdentifyTask","../tasks/ImageServiceIdentifyParameters","../tasks/ImageServiceProjectTask","../tasks/ProjectParameters","../geometry/Extent","../geometry/geometryEngine","../geometry/mathUtils","../geometry/Point","../geometry/Polygon","./ImageFilter/ImageFilterSettingsDialog","./ImageFilter/ImageFilterSelectFieldsDialog","./RasterList"],(function(e,t,i,s,a,l,n,r,h,o,d,c,u,_,f,m,p,g,y,F,R,v,D,k,L,w,b,x,I,S,E,M,T,V,P,A,j,C,O,q,B,N,H,U,G,z,W,Q,Y,K,Z,J,X,$,ee,te,ie){var se=e([E,M,T,u],{declaredClass:"esri.dijit.ImageFilter",templateString:D,showThumbnail:!1,_viewDropDown:!1,_nLabels:1,_sortAsc:!0,_isDisabled:!1,_mapZoomFactor:2,_mapWidthPanFactor:.75,_searchExtentFactor:.75,_selectAll:!1,_useRanges:!0,_dateFormats:{shortDate:{datePattern:"M/d/y",selector:"date"},shortDateLE:{datePattern:"d/M/y",selector:"date"},longMonthDayYear:{datePattern:"MMMM d, y",selector:"date"},dayShortMonthYear:{datePattern:"d MMM y",selector:"date"},longDate:{datePattern:"EEEE, MMMM d, y",selector:"date"},shortDateShortTime:{datePattern:"M/d/y",timePattern:"h:mm a",selector:"date and time"},shortDateLEShortTime:{datePattern:"d/M/y",timePattern:"h:mm a",selector:"date and time"},shortDateShortTime24:{datePattern:"M/d/y",timePattern:"H:mm",selector:"date and time"},shortDateLEShortTime24:{datePattern:"d/M/y",timePattern:"H:mm",selector:"date and time"},shortDateLongTime:{datePattern:"M/d/y",timePattern:"h:mm:ss a",selector:"date and time"},shortDateLELongTime:{datePattern:"d/M/y",timePattern:"h:mm:ss a",selector:"date and time"},shortDateLongTime24:{datePattern:"M/d/y",timePattern:"H:mm:ss",selector:"date and time"},shortDateLELongTime24:{datePattern:"d/M/y",timePattern:"H:mm:ss",selector:"date and time"},longMonthYear:{datePattern:"MMMM y",selector:"date"},shortMonthYear:{datePattern:"MMM y",selector:"date"},year:{datePattern:"y",selector:"date"}},esriDataType:{decimal:{esriFieldTypeDouble:1,esriFieldTypeSingle:1},integer:{esriFieldTypeInteger:1,esriFieldTypeSmallInteger:1},date:{esriFieldTypeDate:1},string:{esriFieldTypeString:1},notRequired:{esriFieldTypeGeometry:1,esriFieldTypeBlob:1}},_generalWhere:"Category = 1",constructor:function(i,s){e.safeMixin(this,i),this._i18n=p.widgets.imageFilter,this._i18n=t.mixin(this._i18n,g)},startup:function(){this.inherited(arguments),this._initializeGenericVariables(),this._setupRasterList(),this._setUpNotificationPane(),this._fillFieldList(),this._setInitialMosaicRule(),this._previousInfo={extent:this.map.extent,level:this.map.getLevel()}},_initializeGenericVariables:function(){this._task=new G(this.layer.url),this._query=new U,this._queryReq=new _,this._imageTask=new z(this.layer.url),this._imageParams=new W,this._identifyReq=new _,this.projectTask=new Q,this._extentChangeEvent=this.map.on("extent-change",t.hitch(this,this.mapExtentChange)),this._mapUpdateStartEvent=this.map.on("update-start",t.hitch(this,this._showLoading)),this._mapUpdateEndEvent=this.map.on("update-end",t.hitch(this,this._hideLoading))},mapExtentChange:function(e){var t=!1;e.levelChange&&(Math.abs(e.lod.level-this._previousInfo.level)>=this._mapZoomFactor&&(t=!0));Math.abs(J.getLength(e.extent.getCenter(),this._previousInfo.extent.getCenter()))>this._previousInfo.extent.getWidth()*this._mapWidthPanFactor&&(t=!0),t&&this._updateFilter()},_updateFilter:function(){this.lock&&j.isDefined(this._lockedFeatures)?this._showOutOfExtentMessage():(this._queriedExtent=this.map.extent,this._executeQueryTask())},_executeQueryTask:function(){this._deactivateFilter(),this._queryReq.cancel(),this._query=new U,this._query.outFields=this.selectedFields?this._mergeUnique([this.field.name],this.selectedFields):[this.field.name],this._query.where=this._initialDefExp?this._generalWhere+" AND ("+this._initialDefExp+")":this._generalWhere,j.isDefined(this._lockedLayerRasters)&&this._lockedLayerRasters.length>0&&(this._query.objectIds=this._lockedLayerRasters),this._isLockedLayerOpen?this._isLockedLayerOpen=!1:this._query.geometry=this._getClippedExtent(),this._query.returnGeometry=!0,this._query.outSpatialReference=this.map.spatialReference,this._queryReq=this._task.execute(this._query,t.hitch(this,this._processQueryResults))},_onError:function(e){this.showNotification(this._i18n.queryError,15e3,!0),this._handleNoImagesFound()},_getClippedExtent:function(){this._queriedExtent=this._queriedExtent||this.map.extent;var e=this._queriedExtent.getCenter(),t=(this._queriedExtent.xmax-this._queriedExtent.xmin)*this._searchExtentFactor/2,i=(this._queriedExtent.ymax-this._queriedExtent.ymin)*this._searchExtentFactor/2,s=e.x-t,a=e.x+t,l=e.y-i,n=e.y+i;return new K(s,l,a,n,this._queriedExtent.spatialReference)},_processQueryResults:function(e){e.features?(this._previousInfo={extent:this.map.extent,level:this.map.getLevel()},this._fieldFeatures=e.features,this.layer.maxRecordCount&&this._fieldFeatures.length===this.layer.maxRecordCount&&this.showNotification(r.substitute(this._i18n.maxRecords,{Number:this.layer.maxRecordCount})),this._setupFieldValueFeatures(),this._updateFilterUx()):this._onError()},_updateFilterUx:function(){this._fieldLength=this._fieldValues.length,0!==this._fieldLength?(this._fieldValues.sort(t.hitch(this,this._sortFun)),this._isDropDown(),this._createWidget()):this._handleNoImagesFound()},_createWidget:function(){this._ifSliderCell.innerHTML="",this._viewDropDown?this._setUpDropDown():this._setUpSlider()},_setupFieldValueFeatures:function(){var e;this._fieldValueFeatures={},this._fieldValues=[],s.forEach(this._fieldFeatures,(function(t){e=this._getFormattedValue(t.attributes[this.field.name]),j.isDefined(e)&&(-1===s.indexOf(this._fieldValues,e)?(this._fieldValues.push(e),this._fieldValueFeatures[e]=[t]):this._fieldValueFeatures[e].push(t))}),this)},_handleNoImagesFound:function(){var e=this._fieldFeatures.length>0?this._i18n.attributeNull:this._i18n.noImageMessage;this._selectedRasterList.setData(this._prepareListData()),this._fieldInfo.innerHTML="",this.selectRasterInfo.innerHTML='<img class="esriImageFilterWarning" src="../js/jsapi/esri/dijit/images/warning.png">'+e,A.hide(this._loadingImageFilter),this._loadBlankResult(),this._addToMapButton.set("disabled",!0),this._addToMapButton.set("title",this._i18n.addToMapDisable),d(".esriImageFilterResultPanelOptions").forEach((function(e){A.hide(e)}))},updateFilterFeatureFormat:function(e){e&&(this.set("field",e.field||this.field),this._setupFieldValueFeatures(),this._updateFilterUx())},_activateFilter:function(){A.hide(this._loadingImageFilter),this.settingsButton.set("disabled",!1),this.defineRangeButton.set("disabled",!1),this._slider&&this._slider.set("disabled",!1),this._toDropDown&&this._toDropDown.set("disabled",!1),d(".esriImageFilterResultPanelOptions").forEach((function(e){A.show(e)}))},_deactivateFilter:function(){A.show(this._loadingImageFilter),this.settingsButton.set("disabled",!0),this.defineRangeButton.set("disabled",!0),this._slider&&this._slider.set("disabled",!0),this._toDropDown&&this._toDropDown.set("disabled",!0)},_loadBlankResult:function(){this._ifSliderCell.innerHTML="";var e=document.createElement("div");this._ifSliderCell.appendChild(e);var t=new b({name:"BlankDropDown",width:50,maxHeight:150,options:[]},e);t.startup(),t.set("disabled",!0)},refresh:function(){this._query||this._initializeGenericVariables(),A.hide(this._linkPanel),A.hide(this.notificationPane),this._executeQueryTask()},_setLayerAttr:function(e){e&&(this.layer=e,this.layerInfo.innerHTML=r.substitute(this._i18n.layerInfo,{layer:this.layer.title}),this.timeAnimation=this.layer.useMapTime,this.dimensionAnimation=this.layer.useMapDimensionValue)},_setFieldAttr:function(e){e&&(this.prevField=this.field,this.field&&this.field.name!==e.name&&(this.value=null),this.field=e,this._fieldStore&&(this._fieldStore.put(e),this.prevField&&!this.prevField.format&&(this.prevField.format=t.clone(this._fieldStore.get(e.name)).format)))},_sortFun:function(e,t){return!(!j.isDefined(e)||!j.isDefined(t))&&this._getParsedValue(e)-this._getParsedValue(t)},_setUseRangesAttr:function(e){this._useRanges=!this._useRanges,this.lock=!1,this.defineRangeButton.set("iconClass",this._useRanges?"esriImageFilterIcons esriImageFilterSingleButton":"esriImageFilterIcons esriImageFilterRangeButton"),this.defineRangeButton.set("title",this._useRanges?this._i18n.singleValue:this._i18n.rangeValue),e&&(this._destroySlider(),this._setUpSlider())},_setViewDropDownsAttr:function(e){j.isDefined(e)&&(this._viewDropDown=e)},_setUpDropDown:function(){this._destroySlider(),this._destroyDropDown(),this.value&&this.value.length?(s.indexOf(this._fieldValues,this.value[0])>=0&&s.indexOf(this._fieldValues,this.value[1])>=0?this.value=this.value:this.value=[this._fieldValues[this._fieldValues.length-2],this._fieldValues[this._fieldValues.length-1]],this._createDropDown(),this._selectedRasterList.setData(this._prepareListData()),this._applyLockRule()):this._getBestFieldValue()},_createDropDown:function(){var e=document.createElement("div");this._ifSliderCell.appendChild(e),this._toDropDown=new b({name:"ToDropDown",width:50,maxHeight:150,options:this._fillDropDownOptions(this.value[1]),onChange:t.hitch(this,this._onDropDownChange)},e),this._toDropDown.startup()},_setUpSlider:function(){this._fieldValues&&0!==this._fieldValues.length&&(this._destroyDropDown(),this._destroySlider(),this.sliderNode=document.createElement("div"),this._createHorizontalRule(),this._createHorizontalRuleLabels(),this._createSlider())},_createHorizontalRuleLabels:function(){if(this._fieldValues){var e=[];this._nLabels=2,this.field.type in this.esriDataType.date?s.forEach(this._fieldValues,(function(t){e.push(m.format(this._getParsedValue(t),this._dateFormats.shortDate))}),this):s.forEach(this._fieldValues,(function(t){e.push(t)}),this),this.labelNode=document.createElement("div"),this.sliderNode.appendChild(this.labelNode),this._horizontalRuleLabels=new S({container:"bottomDecoration",labelStyle:"font-size: 83%; padding-left: 5px;",labels:this._filterLabels(e)},this.labelNode),this._horizontalRuleLabels.startup()}},_createHorizontalRule:function(){var e=this._fieldValues.length;this.rulesNode=document.createElement("div"),this.sliderNode.appendChild(this.rulesNode),e<=50&&e>1&&(this._sliderRules=new I({count:e,style:"height:5px;"},this.rulesNode),this._sliderRules.startup())},_createHorizontalSlider:function(e){if(this._fieldValues){var i=e||this._fieldValues.length-1;this._slider=new x({name:"horizontal",minimum:0,maximum:this._fieldLength-1,discreteValues:this._fieldLength,showButtons:!0,value:i,intermediateChanges:!1,onChange:t.hitch(this,this._onSingleSliderChange)},this.sliderNode),this._slider.startup()}},_createHorizontalRangeSlider:function(e){if(this._fieldValues){var i=e||[this._fieldValues.length-2,this._fieldValues.length-1];this._slider=new V({name:"horizontal",minimum:0,maximum:this._fieldLength-1,discreteValues:this._fieldLength,showButtons:!0,value:i,onChange:t.hitch(this,this._onRangeSliderChange)},this.sliderNode),this._slider.startup()}},_onSingleSliderChange:function(e){if(this._fieldValues&&0!==this._fieldValues.length){var t=[this.value[0],this._fieldValues[e]];this.value=t,this._setFieldInfoText(t),this._selectedRasterList.setData(this._prepareListData()),this._applyLockRule()}},_onRangeSliderChange:function(e){if(this._fieldValues&&0!==this._fieldValues.length){var i=[this._fieldValues[e[1]],this._fieldValues[e[0]]];i.sort(t.hitch(this,this._sortFun)),this.value=i,this._setFieldInfoText(i),this._selectedRasterList.setData(this._prepareListData()),this._applyLockRule()}},_onDropDownChange:function(e){this.field.type in this.esriDataType.date&&this._useRanges&&e<this.value[0]&&(this.value[0]=this._fieldValues[s.indexOf(this._fieldValues,e)-1],this._fromDropDown.set("value",this.value[0])),this.value=[this.value[0],e],this._selectedRasterList.setData(this._prepareListData()),this._applyLockRule()},_applyWhereClauseRule:function(){this.layer.setMosaicRule(this._initialMosaicRule),this._onLockRelease()},_onLockRelease:function(){var e=this.lock;this.lock=!1,this._selectAll=!1,this.selectAllRasters.set("checked",!!this._selectAll),this.selectAllRasters.set("title",this._i18n.selectAll),this._lockedFeatures&&this._selectedAttributeStore&&(this.selectRasterInfo.innerHTML=this._lockedFeatures.ids.length+"/"+this._selectedAttributeStore.data.length+" "+this._i18n.itemsAdded),this._activateFilter(),this._addToMapButton.set("disabled",!0),this._addToMapButton.set("title",this._i18n.addToMapDisable),this._checkOnLayer(),e&&this.emit("refresh-attr-table")},destroy:function(){this.lock=!1,this._removeEventHandlers(),this._applyWhereClauseRule(),this._destroySlider(),this._destroyDropDown(),this._destroyNotification(),this.inherited(arguments),this.emit("destroy-filter")},_removeEventHandlers:function(){this._extentChangeEvent.remove(),this._mapUpdateStartEvent.remove(),this._mapUpdateEndEvent.remove()},handleOKButtonClick:function(){this.saveOnCurrentLayer=!0,this.destroy()},_openSettings:function(){this._settingsDlg||(this._settingsDlg=new ee({imageFilter:this}),this._settingsDlg.startup()),this._settingsDlg.show()},_openShowFields:function(){this._selectFieldsDlg||(this._selectFieldsDlg=new te({imageFilter:this}),this._selectFieldsDlg.startup()),this._selectFieldsDlg.show()},_destroySlider:function(){this._slider&&(this._slider.destroy(),this._slider=null)},_destroyDropDown:function(){this._toDropDown&&(this._toDropDown.destroy(),this._toDropDown=null)},_destroyNotification:function(){this.notificationPane&&R.destroy(this.notificationPane)},_createSlider:function(){if(this.value&&this.value.length){var e=[],t=this.prevField.name===this.field.name?this.prevField.format:this.field.format,i=[this._getParsedValue(this.value[0],t),this._getParsedValue(this.value[1],t)];this._ifSliderCell.appendChild(this.sliderNode),2===this._fieldValues.length?e=[0,1]:(e[1]=j.isDefined(this.value[1])?this._findClosestValue(i[1]):this._fieldValues.length-1,e[0]=j.isDefined(this.value[0])&&this.value[1]!==this.value[0]?this._findClosestValue(i[1]-(i[1]-i[0])):e[1]-1>0?e[1]-1:0),this.value=[this._fieldValues[e[0]],this._fieldValues[e[1]]],this._useRanges?(this._createHorizontalRangeSlider(e),this._onRangeSliderChange(e)):(this._createHorizontalSlider(e[1]),this._onSingleSliderChange(e[1]))}else this._getBestFieldValue()},_getBestFieldValue:function(){if(j.isDefined(this._lockedLayerRasters)&&this._lockedLayerRasters.length>0)return this.value=[this._fieldValues[0],this._fieldValues[this._fieldValues.length-1]],void this._createWidget();var e=this._fieldValues.length-1;this.value=[this._fieldValues[e-1],this._fieldValues[e]],this._createWidget()},_getFormattedValue:function(e){if(!this.field.format||!j.isDefined(e))return e;var t=c.parse(this.field.format),i=this.field.type;return i in this.esriDataType.date?m.format(new Date(e),this._dateFormats[t.dateFormat]):i in this.esriDataType.integer||i in this.esriDataType.decimal?(e=h.format(e,{places:t.places}),t.digitSeparator||this._i18n.group&&(e=e.replace(new RegExp("\\"+this._i18n.group,"g"),"")),e):void 0},_getParsedValue:function(e,t){if(!this.field.format||!j.isDefined(e))return e;var i=t&&c.parse(t)||c.parse(this.field.format),s=this.field.type;return s in this.esriDataType.date?"string"==typeof e?m.parse(e,this._dateFormats[i.dateFormat]):new Date(e):s in this.esriDataType.integer||s in this.esriDataType.decimal?"string"==typeof e?h.parse(e,{places:i.places}):h.parse(e):void 0},_setFieldInfoText:function(e,t){var i;j.isDefined(e)&&(i=this._useRanges&&e[0]!=e[1]?e[0]+" - "+e[1]:e[1],this._fieldInfo.innerHTML=i)},_applyLockRule:function(){if(this._lockedFeatures.ids&&0!==this._lockedFeatures.ids.length){var e=new H;e.method=H.METHOD_LOCKRASTER,e.lockRasterIds=t.clone(this._lockedFeatures.ids),this.layer.setMosaicRule(e),this._onLockOn()}else this._applyWhereClauseRule()},_onLockOn:function(){this.lock=!0,this._checkOnLayer(),this._activateFilter(),this.selectRasterInfo.innerHTML=this._lockedFeatures.ids.length+"/"+this._selectedAttributeStore.data.length+" "+this._i18n.itemsAdded,this.emit("select-records-attr-table"),this._addToMapButton.set("disabled",!1),this._addToMapButton.set("title",this._i18n.addToMapEnable),this._lockedFeatures.ids.length===this._selectedAttributeStore.data.length||this._lockedFeatures.ids.length===this.layer.maxMosaicImageCount?(this._selectAll=!0,this.selectAllRasters.set("title",this._i18n.removeAll)):(this._selectAll=!1,this.selectAllRasters.set("title",this._i18n.selectAll)),this.selectAllRasters.set("checked",!!this._selectAll)},_showMoreImageNotification:function(){if(this.layer.maxMosaicImageCount&&this._lockedFeatures.ids.length>=this.layer.maxMosaicImageCount){var e=r.substitute(this._i18n.moreLockedImages,{Number:this.layer.maxMosaicImageCount});this.showNotification(e)}},_checkOnLayer:function(){this.timeAnimation&&this.layer.timeInfo&&this.lock&&this.emit("disable-time"),this.dimensionAnimation&&this.lock&&this.layer.activeMapDimensions&&this.emit("disable-dimension"),!this.lock&&this.timeAnimation&&this.emit("enable-time"),!this.lock&&this.dimensionAnimation&&this.emit("enable-dimension")},_setUpNotificationPane:function(){this.notificationPane=document.createElement("div"),this.notificationPane.setAttribute("class","esriImageFilterNotification"),this.mapDiv.appendChild(this.notificationPane),this.messagePane=document.createElement("div"),this.notificationPane.appendChild(this.messagePane),A.hide(this.notificationPane),R.place('<div class="linkPanel"><table><tr><td><a class="esriImageFilterLockedExtentLink">'+this._i18n.extentLink+'</a></td><td><a class="esriImageFilterUnlockLink">'+this._i18n.unlockLink+"</a></td></tr></table><div>",this.notificationPane),this._linkPanel=document.querySelector(".linkPanel"),A.hide(this._linkPanel),document.querySelector(".esriImageFilterLockedExtentLink").addEventListener("click",t.hitch(this,this._setMapExtent)),document.querySelector(".esriImageFilterUnlockLink").addEventListener("click",t.hitch(this,this.unlockFilter))},unlockFilter:function(){this._lockedFeatures={ids:[],geometries:[]},this.lock=!1,this._selectAll=!1,A.hide(this._linkPanel),A.hide(this.notificationPane),this._selectedRasterList.setData(this._selectedAttributeStore),this._queriedExtent=this.map.extent,this.refresh()},showNotification:function(e,t,i){var s=t||1e4,a=this.notificationPane;this.messagePane.innerHTML=e,A.show(a),n.once(this.mapDiv,"mousedown",(function(e){"esriImageFilterLockedExtentLink"!=e.target.className&&"esriImageFilterUnlockLink"!=e.target.className&&A.hide(a)})),i||setTimeout((function(){A.hide(a)}),s)},_filterLabels:function(e){if(this._nLabels&&e&&e.length){var t=Math.ceil(e.length/this._nLabels),i=s.map(e,(function(i,s){return s%t==0||s===e.length-1?(this.field.type in this.esriDataType.decimal&&i%1!=0&&(i=h.parse(i)),i):""}),this);return 1===i.length?[i[0],""]:i}},_fillDropDownOptions:function(e){var t=[];return s.forEach(this._fieldValues,(function(i){t.push({label:i,value:i,selected:i===e})}),this),t},_findClosestValue:function(e){e=this._getParsedValue(e);for(var t=this._fieldValues.length-2;t>0;t--){var i=this._getParsedValue(this._fieldValues[t]);if(i<=e){var s=this._getParsedValue(this._fieldValues[t+1]);return Math.abs(s-e)<Math.abs(i-e)?t+1:t}}return 0},_setMapExtent:function(){if(A.hide(this._linkPanel),A.hide(this.notificationPane),this._lockedFeatures&&0===this._lockedFeatures.ids.length)this.showNotification(this._i18n.noLockedImages);else{var e=Z.union(this._lockedFeatures.geometries).getExtent();this.map.spatialReference.equals(e.spatialReference)?this.map.setExtent(e):this.projectGeometry(e,this.map.spatialReference).then(t.hitch(this,(function(e){e[0]&&this.map.setExtent(e[0])})))}},_addToMap:function(){var e=this._getNewLayerTitle();this.emit("add-to-map",this.layer.title+"-"+this.field.name+" ("+e+")")},_getNewLayerTitle:function(){var e=this._selectedAttributeStore.get(this._lockedFeatures.ids[0]);if(this._viewDropDown||1===this._lockedFeatures.ids.length)return e[this.field.name+"_formatted"];var t=[];return s.forEach(this._lockedFeatures.ids,(function(e){t.push(this._selectedAttributeStore.get(e)[this.field.name])}),this),this._getFormattedValue(Math.min.apply(null,t))+" - "+this._getFormattedValue(Math.max.apply(null,t))},_fillFieldList:function(){var e=this.layer,i=[];e&&e.fields&&(s.forEach(this.layerFields,(function(e,t){e&&e.type&&(e.type in this.esriDataType.integer?e.format='{"places":0, "digitSeparator":true}':e.type in this.esriDataType.decimal?e.format='{"places":2, "digitSeparator":true}':e.type in this.esriDataType.date?e.format='{"dateFormat":"shortDateShortTime", "timezone":"utc"}':e.type in this.esriDataType.notRequired&&i.push(t))}),this),s.forEach(i,(function(e){this.layerFields.splice(e,1)}),this),this.layerFields.sort(this.sortObjFun("alias",!1)),this._fieldStore=new w(new k({data:this.layerFields,idProperty:"name"})),this.fieldSelect.set("sortByLabel",!1),this.fieldSelect.set("maxHeight",150),this.fieldSelect.set("store",this._fieldStore),this.fieldSelect.on("change",t.hitch(this,this._onFieldChange)),this.fieldSelect.set("value",this.field.name))},_onFieldChange:function(e){this._setFieldAttr(t.clone(this._fieldStore.get(e))),this.lock=!1,this._useRanges=!0,this.defineRangeButton.set("iconClass",this._useRanges?"esriImageFilterIcons esriImageFilterSingleButton":"esriImageFilterIcons esriImageFilterRangeButton"),this.defineRangeButton.set("title",this._useRanges?this._i18n.singleValue:this._i18n.rangeValue),this._addToSelectedFields(this.prevField.name),this._updateRasterListFields(),this._fieldInfo.innerHTML=""},_setInitialMosaicRule:function(){var e=this.layer.mosaicRule;this._lockedFeatures={ids:[],geometries:[]},e?(this._initialMosaicRule=t.clone(e),this._initialDefExp=this._initialMosaicRule.where?this._initialMosaicRule.where:null,e.method===H.METHOD_LOCKRASTER&&(this._isLockedLayerOpen=!0,this._lockedFeatures.ids=e.lockRasterIds,this._lockedLayerRasters=e.lockRasterIds)):(this._initialMosaicRule=t.clone(this.layer.defaultMosaicRule),this._initialDefExp=null)},_isDropDown:function(){this.field.type in this.esriDataType.string||1===this._fieldLength?(this._useRanges=!1,this.defineRangeButton.set("iconClass",this._useRanges?"esriImageFilterIcons esriImageFilterSingleButton":"esriImageFilterIcons esriImageFilterRangeButton"),this.defineRangeButton.set("title",this._useRanges?this._i18n.singleValue:this._i18n.rangeValue),this._viewDropDown=!0,A.hide(this._fieldInfo),A.hide(this.defineRangeButton),this.field.type in this.esriDataType.string?A.hide(this.settingsButton):A.show(this.settingsButton)):(this._viewDropDown=!1,A.show(this._fieldInfo),A.show(this.defineRangeButton),A.show(this.settingsButton))},_setupRasterList:function(){var e=this._getDefaultDisplayField(),i=[{name:e.name,alias:e.alias,display:!0},{name:this.field.name+"_formatted",alias:this.field.alias,display:!0}];this.rasterListDiv.innerHTML="",this.selectedFields=[e.name,this.field.name],this._selectedRasterList=new ie({data:new L(new k),showThumbnail:this.showThumbnail,showCheckbox:!0,imageServiceUrl:this.layer.url,fields:i,selectionMode:"extended"},this.rasterListDiv),this.rasterExtentSymbol=(new O).setOutline((new q).setColor(new B([214,137,16])).setWidth(2)).setColor(new B([249,231,159,.5])),this._selectedRasterList.on("raster-row-select",t.hitch(this,this._onRasterRowSelect)),this._selectedRasterList.on("raster-mouseover",t.hitch(this,this._showRasterFootPrint)),this._selectedRasterList.on("raster-mouseout",t.hitch(this,this._hideRasterFootPrint)),this._selectedRasterList.startup()},_getDefaultDisplayField:function(){if(this.layer&&this.layer.fields){this.layerFields=t.clone(this.layer.fields);var e={name:this.layer.objectIdField,alias:this.layer.objectIdField};return s.some(this.layerFields,(function(t){if("name"===t.name.toLowerCase())return e=t,!0})),e}},_onRasterRowSelect:function(e){var t=e.rasters;t.length>1&&t.splice(t.length-1,1);for(var i=t.length-1;i>=0;i--)t[i].data.selected=!t[i].data.selected,this._updateLockRasters(t[i].data);this._selectedRasterList.refresh(!0),this._applyLockRule()},_updateLockRasters:function(e){if(e.selected)this._lockedFeatures.ids.push(e[this.layer.objectIdField]),this._lockedFeatures.geometries.push(e.geometry);else{var t=this._lockedFeatures.ids.indexOf(e[this.layer.objectIdField]);t>-1&&(this._lockedFeatures.ids.splice(t,1),this._lockedFeatures.geometries.splice(t,1))}},_updateSelection:function(e){var t=this._selectedAttributeStore.get(e[this.layer.objectIdField]);t.selected=!t.selected,this._selectedRasterList.refresh(!0),this._updateLockRasters(t),this._applyLockRule()},_prepareListData:function(){var e,t=[];if(this._fieldValues&&this._fieldValues.length>0&&this.value&&2===this.value.length){var i=this._fieldValues.indexOf(this.value[0]),a=this._fieldValues.indexOf(this.value[1]);this._prevLockRasters={ids:[],geometries:[]},this._useRanges?s.forEach(this._fieldValues,(function(s,l){l>=i&&l<=a&&(e=this._fieldValueFeatures[s],t=t.concat(this._populateGridStoreData(e)))}),this):(e=this._fieldValueFeatures[this.value[1]],t=this._populateGridStoreData(e)),this._lockedFeatures=this._prevLockRasters,this._selectedRasterList.rasterList.maxRowsPerPage=t.length,this._selectAll&&this._selectAllRasters(t),this._lockedFeatures&&this._lockedFeatures.ids&&this._lockedFeatures.ids.length&&t.sort(this.sortObjFun("selected",!1,"boolean"))}return this._selectedAttributeStore=new L(new k({data:t,idProperty:this.layer.objectIdField})),this._selectedAttributeStore},_populateGridStoreData:function(e){var t,i=this.layer.objectIdField,a=this.layer.credential,l=[];return s.forEach(e,(function(e){(t=e.attributes).selected=!1,t[this.field.name+"_formatted"]=this._getFormattedValue(t[this.field.name]),t.thumbnailUrl=this.layer.url+"/"+t[i]+"/thumbnail",t.geometry=e.geometry,a&&a.token&&(t.thumbnailUrl+="?token="+a.token),s.forEach(this.selectedFields,(function(e){j.isDefined(t[e])||(t[e]="")})),this._lockedFeatures&&this._lockedFeatures.ids.length&&this._lockedFeatures.ids.indexOf(t[i])>-1&&(this._prevLockRasters.ids.push(t[i]),this._prevLockRasters.geometries.push(e.geometry),t.selected=!0),l.push(t)}),this),l},_handleSelectAll:function(){this._selectAll=!this._selectAll,this.selectAllRasters.set("checked",!!this._selectAll),this.selectAllRasters.set("title",this._selectAll?this._i18n.removeAll:this._i18n.selectAll),this._selectAll?this._selectAllRasters(this._selectedAttributeStore.data):(this._lockedFeatures={ids:[],geometries:[]},s.forEach(this._selectedAttributeStore.data,(function(e){e.selected=!1}))),this._selectedRasterList.setData(this._selectedAttributeStore),A.hide(this._linkPanel),A.hide(this.notificationPane),this._applyLockRule()},_selectAllRasters:function(e){var t=this._lockedFeatures.ids;s.some(e,(function(e){var i=e[this.layer.objectIdField];t.indexOf(i)<0&&(e.selected=!0,this._lockedFeatures.ids.push(e[this.layer.objectIdField]),this._lockedFeatures.geometries.push(e.geometry))}),this)},_handleSelectArrayOfRasters:function(e){this._lockedFeatures={ids:[],geometries:[]};var t=this._lockedFeatures.ids;s.forEach(this._selectedAttributeStore.data,(function(i){var s=i[this.layer.objectIdField];e.indexOf(s)>=0&&t.length<this.layer.maxMosaicImageCount?(i.selected=!0,this._lockedFeatures.ids.push(i[this.layer.objectIdField]),this._lockedFeatures.geometries.push(i.geometry)):i.selected=!1}),this),this._selectedRasterList.setData(this._selectedAttributeStore),A.hide(this._linkPanel),A.hide(this.notificationPane),this._onLockOn()},_updateRasterListFields:function(e){if(e&&(this.selectedFields=e.fields||this.selectedFields,this.showThumbnail=j.isDefined(e.showThumbnail)?e.showThumbnail:this.showThumbnail,this._selectedRasterList.showThumbnail=this.showThumbnail),this._selectedRasterList&&this.selectedFields){var t=[];s.forEach(this.selectedFields,(function(e){var i={name:e===this.field.name?e+"_formatted":e,alias:this._fieldStore.get(e).alias,display:!0};t.push(i)}),this),this._selectedRasterList.fields=t,this.refresh()}},_addToSelectedFields:function(e){this._selectedRasterList&&this.selectedFields&&this.selectedFields.indexOf(e)>=0&&-1===this.selectedFields.indexOf(this.field.name)&&this.selectedFields.splice(this.selectedFields.indexOf(e),1,this.field.name)},_mergeUnique:function(e,t){return e.concat(t.filter((function(t){return-1===e.indexOf(t)})))},_hideRasterFootPrint:function(){this.rasterExtentGraphic&&this.rasterExtentGraphic.hide()},_showRasterFootPrint:function(e){this.map.spatialReference.equals(e.geometry.spatialReference)?this.showImageGraphic(e.geometry):this.projectGeometry(e.geometry,this.map.spatialReference).then(t.hitch(this,(function(e){e[0]&&this.showImageGraphic(e[0])})))},showImageGraphic:function(e){this.rasterExtentGraphic?(this.rasterExtentGraphic.setGeometry(e),this.rasterExtentGraphic.show()):this.rasterExtentGraphic=this.map.graphics.add(new C(e,this.rasterExtentSymbol))},projectGeometry:function(e,t){var i=new Y;return t=t||this.map.spatialReference,e.spatialReference.url=this.layer.url,i.geometries=[e],i.outSR=t,this.projectTask.execute(i)},sortObjFun:function(e,t,i){var s=i?function(t){return i(t[e])}:function(t){return t[e]};return t=t?-1:1,function(a,l){return"boolean"===i?l[e]-a[e]:(a=s(a),l=s(l),t*((a>l)-(l>a)))}},_sortRasters:function(){this._sortAsc=!this._sortAsc,this.sortRasters.set("iconClass",this._sortAsc?"esriImageFilterIcons esriImageFilterDscSortIcon":"esriImageFilterIcons esriImageFilterAscSortIcon"),this.sortRasters.set("title",this._sortAsc?this._i18n.sortDsc:this._i18n.sortAsc);var e=this._selectedAttributeStore.data;this._sortAsc?e.sort(this.sortObjFun(this.field.name,!1)):e.sort(this.sortObjFun(this.field.name,!0)),this._selectedRasterList.setData(this._selectedAttributeStore)},adjustHeight:function(e){var t=a.coords(this.esriImageFilterCardsDiv).h,i=a.coords(this.esriImageFilterAddToMapDiv).h;F.set(this.esriImageFilterImageGridDiv,"height",e-(t+i)-100+"px")},_showLoading:function(){this.domNode.style.cursor="wait"},_hideLoading:function(){this.domNode.style.cursor="default",this._showOutOfExtentMessage()},_showOutOfExtentMessage:function(){if(this.lock&&j.isDefined(this._lockedFeatures)){var e=Z.union(this._lockedFeatures.geometries).getExtent();this.map.spatialReference.equals(e.spatialReference)?this._checkIntersects(e):this.projectGeometry(e,this.map.spatialReference).then(t.hitch(this,(function(e){e[0]&&this._checkIntersects(e[0])})))}},_checkIntersects:function(e){Z.intersects(e,this.map.extent)?"none"!==this._linkPanel.style.display&&(A.hide(this.notificationPane),A.hide(this._linkPanel)):(this.showNotification(this._i18n.noLockedImages,15e3),A.show(this._linkPanel))},handleDisplaySelected:function(e){this._isLockedLayerOpen=!0,this._lockedFeatures.ids=e,this._lockedLayerRasters=e,this.refresh()},handleDisplayAll:function(){this._lockedLayerRasters=void 0,this.unlockFilter()},getCurrentTimeExtent:function(){if(this.selectedFields.indexOf(this.layer.timeInfo.startTimeField)>=0){var e=[];return this._lockedFeatures.ids.forEach((function(t){e.push(this._selectedAttributeStore.get(t)[this.layer.timeInfo.endTimeField])}),this),(new _).resolve({startTime:new Date(Math.min.apply(null,e)),endTime:new Date(Math.max.apply(null,e))})}var i=new U,s=new _;return i.outFields=[this.layer.timeInfo.endTimeField],i.returnGeometry=!1,i.objectIds=this._lockedFeatures.ids,i.outSpatialReference=this.map.spatialReference,this._task.execute(i).then(t.hitch(this,(function(e){var t=[];e.features.forEach((function(e){t.push(e.attributes[this.layer.timeInfo.endTimeField])}),this),s.resolve({startTime:new Date(Math.min.apply(null,t)),endTime:new Date(Math.max.apply(null,t))})}))),s.promise}});return l("extend-esri")&&t.setObject("dijit.ImageFilter",se,v),se}));