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

define(["dojo/_base/declare","dojo/_base/lang","dojo/i18n!../nls/jsapi","dojo/text!./templates/ImageServiceMeasure.html","dojo/has","dojo/on","../kernel","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","../toolbars/ImageServiceMeasureTool","dijit/form/DropDownButton","dijit/DropDownMenu","dijit/MenuItem","dijit/MenuSeparator","dijit/PopupMenuItem","dijit/RadioMenuItem","dijit/CheckedMenuItem","../symbols/SimpleMarkerSymbol","../symbols/SimpleLineSymbol","../symbols/SimpleFillSymbol","../graphic","../InfoTemplate","../geometry/Point","dojo/_base/Color","dojo/dom-class","dojo/_base/array","../tasks/ImageServiceMeasureParameters","../units","dojo/dom-construct","dijit/form/ToggleButton","dojo/html","dojo/number"],(function(e,t,i,n,s,r,a,o,u,h,l,_,d,p,c,m,g,M,O,w,D,I,f,S,b,v,T,U,E,C,y,A,R){var N=e([o,u,h],{declaredClass:"esri.dijit.ImageServiceMeasure",templateString:n,widgetsInTemplate:!0,layer:null,map:null,layout:"dropDown",displayOperations:null,markerSymbol:null,lineSymbol:null,fillSymbol:null,displayMeasureResultInPopup:null,angularUnit:null,linearUnit:null,areaUnit:null,_supportedMeasureOperations:[],_supportedUnits:{},_currentGraphic:null,_defaultUnits:{angularUnit:"DECIMAL_DEGREES",linearUnit:"METERS",areaUnit:"SQUARE_METERS"},_desiredDropDownOrder:["OPERATION_POINT","OPERATION_DISTANCE_ANGLE","OPERATION_AREA_PERIMETER","OPERATION_CENTROID","OPERATION_BASE_TOP","OPERATION_TOP_TOP_SHADOW","OPERATION_BASE_TOP_SHADOW"],_map3DOperations:{OPERATION_POINT:"OPERATION_POINT_3D",OPERATION_DISTANCE_ANGLE:"OPERATION_DISTANCE_ANGLE_3D",OPERATION_AREA_PERIMETER:"OPERATION_AREA_PERIMETER_3D",OPERATION_CENTROID:"OPERATION_CENTROID_3D",OPERATION_BASE_TOP:"OPERATION_BASE_TOP",OPERATION_TOP_TOP_SHADOW:"OPERATION_TOP_TOP_SHADOW",OPERATION_BASE_TOP_SHADOW:"OPERATION_BASE_TOP_SHADOW"},_menu:null,_dropDownButton:null,_currentOperation:null,_activeMeasureOpMenuItem:null,_has3DOperations:!1,_enabled3DCheckbox:!1,_dropDownMenuItemMap:{},_toggleButtonMenuItemMap:{},_decimalDegreesConstantValue:"esriDUDecimalDegrees",_decimalDegreesConstantKeyword:"DECIMAL_DEGREES",constructor:function(t){e.safeMixin(this,t),this._setDefaultSymbols(),this._i18n=i},startup:function(){this.inherited(arguments)},postCreate:function(){this.map&&this.layer&&(this.measureToolbar=new l({map:this.map,layer:this.layer}),this.measureToolbar.on("draw-end",t.hitch(this,this._addGraphic)),this.measureToolbar.on("draw-start",t.hitch(this,this._onDrawStart)),this.measureToolbar.on("measure-end",t.hitch(this,this._addInfoWindow)),this.measureToolbar.on("unit-change",t.hitch(this,this._onUnitChange)),r(this.layer,"spatial-reference-change",t.hitch(this,this._removeDraws)),this._supportedMeasureOperations=this._getSupportedMeasureOperations(),this._has3DOperations=this._check3DSupported(),this._reorderMeasureOperations(),this._supportedUnits=this._getSupportedUnits(),this._setDefaultUnits()),this._checkValidLayoutValue(),this._supportedMeasureOperations.length>0?"dropDown"===this.layout?this._populateMeasureDropdown():"toolbar"===this.layout&&this._populateMeasureButtons():A.set(this.esriImageServiceMeasure,this._i18n.widgets.imageServiceMeasure.mensurationCapabilitiesAbsentText)},_checkValidLayoutValue:function(){"dropdown"===this.layout.toLowerCase()?this.layout="dropDown":"toolbar"===this.layout.toLowerCase()?this.layout="toolbar":(this.layout="dropDown",console.log("Invalid value for layout"))},_getUnitKeyword:function(e){var t,i=null;if(e===this._decimalDegreesConstantValue)i=this._decimalDegreesConstantKeyword;else for(t in E)E.hasOwnProperty(t)&&E[t]===e&&(i=t);return i||null},_setUnitKeyword:function(e,t){var i,n;return this[e]?(i=this._getUnitKeyword(this[e]))?n=i:(n=this._defaultUnits[e],console.log("Incorrect "+t+" supplied. "+t+" set to default.")):n=this._defaultUnits[e],n},_setDefaultUnits:function(){this.linearUnit=this._setUnitKeyword("linearUnit","Linear Unit"),this.areaUnit=this._setUnitKeyword("areaUnit","Area Unit"),this.angularUnit=this._setUnitKeyword("angularUnit","Angular Unit"),this.measureToolbar.setLinearUnit(E[this.linearUnit]),this.measureToolbar.setAreaUnit(E[this.areaUnit]),this.measureToolbar.setAngularUnit(E[this.angularUnit])},_getSupportedMeasureOperations:function(){var e,t=[],i=this.displayOperations||this.measureToolbar.getSupportedMeasureOperations(),n=this.measureToolbar.getSupportedMeasureOperations();return T.forEach(i,(function(i){for(e in U)U.hasOwnProperty(e)&&U[e]===i&&(T.indexOf(n,i)>-1?t.push(e):console.log(i+" is not supported by the service."))}),this),t},_getSupportedUnits:function(){var e,t={},i=[],n=[],s=this.measureToolbar.getSupportedUnits();for(e in s)s.hasOwnProperty(e)&&(n=s[e],i=[],T.forEach(n,(function(e){i.push(this._getUnitString(e))}),this),t[e]=i);return t},_check3DSupported:function(){return this._isSupportedMeasureOperation("OPERATION_POINT_3D")||this._isSupportedMeasureOperation("OPERATION_DISTANCE_ANGLE_3D")||this._isSupportedMeasureOperation("OPERATION_AREA_PERIMETER_3D")||this._isSupportedMeasureOperation("OPERATION_CENTROID_3D")},_isSupportedMeasureOperation:function(e){return this._supportedMeasureOperations.indexOf(e)>-1},_reorderMeasureOperations:function(){var e=[];T.forEach(this._desiredDropDownOrder,(function(t){this._supportedMeasureOperations.indexOf(t)>-1&&e.push(t)}),this),this._supportedMeasureOperations=e},_setDefaultSymbols:function(){this.markerSymbol||(this.markerSymbol=new O,this.markerSymbol.setPath("M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM16.868,21.375h-1.969v-1.889h1.969V21.375zM16.772,18.094h-1.777l-0.176-8.083h2.113L16.772,18.094z"),this.markerSymbol.setColor(new b("#00FFFF"))),this.lineSymbol||(this.lineSymbol=new w(w.STYLE_SOLID,new b([255,0,0]),1.5)),this.fillSymbol||(this.fillSymbol=new D(D.STYLE_SOLID,new w(w.STYLE_DASHDOT,new b([255,0,0]),2),new b([255,255,0,.25])))},_populateMeasureDropdown:function(){var e,i,n,s;this._menu=new d,T.forEach(this._supportedMeasureOperations,(function(i){(e=new p({label:this._i18n.widgets.imageServiceMeasure.operationLabel[i],iconClass:U[i]})).on("click",t.hitch(this,this._onDropDownMenuItemClick,i,e)),this._menu.addChild(e),this._dropDownMenuItemMap[i]=e}),this),i=new c,this._menu.addChild(i),this._has3DOperations&&((s=new M({label:this._i18n.widgets.imageServiceMeasure.measure3DLabel,checked:!1})).on("change",t.hitch(this,this._on3DCheckBoxChange)),this._menu.addChild(s),n=new c,this._menu.addChild(n)),this._addUnitsMenu(),this._dropDownButton=new _({dropDown:this._menu,class:"esriImageServiceMeasureDropdownContainer"},this.measureDropDownContainer),this._dropDownButton.startup(),this._defaultOperation=this._supportedMeasureOperations[0],this._currentOperation=this._defaultOperation,this._toggleButton=new _({label:this._i18n.widgets.imageServiceMeasure.operationLabel[this._defaultOperation],iconClass:U[this._defaultOperation],class:"esriImageServiceMeasureToggleButton",dropDown:new d({class:"esriHiddenDropDownMenu"})},this.toggleButtonDiv),this._toggleButton._buttonNode.title=this._i18n.widgets.imageServiceMeasure.operationLabel[this._defaultOperation],this._toggleButton.startup(),this._toggleButton.on("click",t.hitch(this,this._toggle))},_populateMeasureButtons:function(){var e,i,n,s;v.add(this.esriImageServiceMeasure,"esriImageServiceMeasureToolbarLayout"),v.add(this.measureButtonContainer,"esriImageServiceMeasureButtonContainer"),this._menu=new d,T.forEach(this._supportedMeasureOperations,(function(i){s=C.create("div",{innerHTML:this._i18n.widgets.imageServiceMeasure.operationLabel[i]},this.measureButtonContainer),(e=new y({showLabel:!1,checked:!1,label:this._i18n.widgets.imageServiceMeasure.operationLabel[i],iconClass:U[i],baseClass:"esriMeasureButton"},s)).on("click",t.hitch(this,this._onButtonMenuItemClick,i)),this._toggleButtonMenuItemMap[i]=e}),this),this._has3DOperations&&((n=new M({label:this._i18n.widgets.imageServiceMeasure.measure3DLabel,checked:!1})).on("change",t.hitch(this,this._on3DCheckBoxToolbarLayoutChange)),this._menu.addChild(n),i=new c,this._menu.addChild(i)),this._addUnitsMenu(),i=C.create("span",{innerHTML:"|"},this.measureButtonContainer),s=C.create("div",null,this.measureButtonContainer),this._dropDownButton=new _({dropDown:this._menu,label:this._i18n.widgets.imageServiceMeasure.settings,showLabel:!1,iconClass:"esriMensurationSettingsIcon",class:"esriMeasureSettingsButton"},s),this._dropDownButton.startup(),"false"!==this.displayMeasureResultInPopup&&!1!==this.displayMeasureResultInPopup&&this.displayMeasureResultInPopup||(this.measureResultContainer=C.create("div",{class:"measureResultContainer"},this.esriImageServiceMeasure),this.esriMeasurementResultLabel=C.create("div",{innerHTML:this._i18n.widgets.imageServiceMeasure.infoWindowTitle,class:"esriMeasurementResultLabel"},this.measureResultContainer),this.measureResultStringDiv=C.create("div",{class:"esriMeasurementResultString"},this.measureResultContainer))},_angularUnitsReqd:function(){if(T.some(this._supportedMeasureOperations,(function(e){if("OPERATION_DISTANCE_ANGLE_3D"===e||"OPERATION_DISTANCE_ANGLE"===e)return!0})))return!0},_linearUnitsReqd:function(){if(T.some(this._supportedMeasureOperations,(function(e){if(e.indexOf("OPERATION_POINT")<0&&e.indexOf("OPERATION_CENTROID")<0)return!0})))return!0},_areaUnitsReqd:function(){if(T.some(this._supportedMeasureOperations,(function(e){if("OPERATION_AREA_PERIMETER_3D"===e||"OPERATION_AREA_PERIMETER"===e)return!0})))return!0},_addUnitsMenu:function(){var e,i,n;this._angularUnitsReqd()&&(this.angularUnitMenu=new d,T.forEach(this._supportedUnits.angularUnits,(function(e){n=this._isCurrentAngularUnit(e),i=new g({group:"angularUnit",checked:n,label:this._i18n.widgets.imageServiceMeasure.unitLabel[e],class:n?"esriSelectedOption":""}),n&&(this._currentAngularUnitMenuItem=i),i.on("click",t.hitch(this,this._onAngularUnitClick,e,i)),this.angularUnitMenu.addChild(i)}),this),e=new m({label:this._i18n.widgets.imageServiceMeasure.angularUnits,popup:this.angularUnitMenu}),this._menu.addChild(e)),this._linearUnitsReqd()&&(this.linearUnitMenu=new d,T.forEach(this._supportedUnits.linearUnits,(function(e){n=this._isCurrentLinearUnit(e),i=new g({group:"linearUnit",checked:n,label:this._i18n.widgets.imageServiceMeasure.unitLabel[e],class:n?"esriSelectedOption":""}),n&&(this._currentLinearUnitMenuItem=i),i.on("click",t.hitch(this,this._onLinearUnitClick,e,i)),this.linearUnitMenu.addChild(i)}),this),e=new m({label:this._i18n.widgets.imageServiceMeasure.linearUnits,popup:this.linearUnitMenu}),this._menu.addChild(e)),this._areaUnitsReqd()&&(this.areaUnitMenu=new d,T.forEach(this._supportedUnits.areaUnits,(function(e){n=this._isCurrentAreaUnit(e),i=new g({group:"areaUnit",checked:n,label:this._i18n.widgets.imageServiceMeasure.unitLabel[e],class:n?"esriSelectedOption":""}),n&&(this._currentAreaUnitMenuItem=i),i.on("click",t.hitch(this,this._onAreaUnitClick,e,i)),this.areaUnitMenu.addChild(i)}),this),e=new m({label:this._i18n.widgets.imageServiceMeasure.areaUnits,popup:this.areaUnitMenu}),this._menu.addChild(e))},_on3DCheckBoxChange:function(e){var t=this._currentOperation.replace("_3D","");this._enabled3DCheckbox=e,this._dropDownButton.openDropDown(),this._activeMeasureOpMenuItem&&(this._activeMeasureOpMenuItem=null,this._onDropDownMenuItemClick(t,this._dropDownMenuItemMap[t]))},_on3DCheckBoxToolbarLayoutChange:function(e){this._enabled3DCheckbox=e,this._dropDownButton.openDropDown(),this._enabled3DCheckbox||(this._currentOperation=this._currentOperation.replace("_3D","")),this._currentOperation&&this._onButtonMenuItemClick(this._currentOperation)},_onDropDownMenuItemClick:function(e,t){var i=t.domNode;this._enabled3DCheckbox&&(e=this._map3DOperations[e]),this._disableMapNavigation(),this._removeDraws(),this._activeMeasureOpMenuItem?(v.remove(this._activeMeasureOpMenuItem.domNode,"esriSelectedOption"),v.add(i,"esriSelectedOption"),this._activeMeasureOpMenuItem=t,this._currentOperation=e,this._toggleButton.set({label:this._i18n.widgets.imageServiceMeasure.operationLabel[e],iconClass:U[e.replace("_3D","")]}),this._toggleButton._buttonNode.title=this._i18n.widgets.imageServiceMeasure.operationLabel[e],this.measureToolbar.activate(U[e]),this.measureToolbar.showDrawTooltip()):(this._activeMeasureOpMenuItem=t,v.add(i,"esriSelectedOption"),this._currentOperation=e,this._toggleButton.set({label:this._i18n.widgets.imageServiceMeasure.operationLabel[e],iconClass:U[e.replace("_3D","")]}),v.add(this._toggleButton._buttonNode,"esriCheckedMeasureButton"),this._toggleButton._buttonNode.title=this._i18n.widgets.imageServiceMeasure.operationLabel[e],this.measureToolbar.activate(U[e]),this.measureToolbar.showDrawTooltip())},_uncheckOtherButtons:function(e){var t;for(t in this._toggleButtonMenuItemMap)this._toggleButtonMenuItemMap.hasOwnProperty(t)&&t!==e&&(T.indexOf(this._supportedMeasureOperations,t)>=0?this._toggleButtonMenuItemMap[t].set("checked",!1):delete this._toggleButtonMenuItemMap[t])},_onButtonMenuItemClick:function(e){this._removeDraws(),this._enabled3DCheckbox&&(e=this._map3DOperations[e]),this._uncheckOtherButtons(e.replace("_3D","")),this._currentOperation=e,this._toggleButtonMenuItemMap[e.replace("_3D","")].checked?(this._disableMapNavigation(),this.measureToolbar.activate(U[e]),this.measureToolbar.showDrawTooltip()):(this.measureToolbar.deactivate(),this._enableMapNavigation()),this.measureResultStringDiv&&A.set(this.measureResultStringDiv,"")},_isCurrentAngularUnit:function(e){return e===this.angularUnit},_isCurrentLinearUnit:function(e){return e===this.linearUnit},_isCurrentAreaUnit:function(e){return e===this.areaUnit},_onLinearUnitClick:function(e,t){v.remove(this._currentLinearUnitMenuItem.domNode,"esriSelectedOption"),v.add(t.domNode,"esriSelectedOption"),this._currentLinearUnitMenuItem=t,this.linearUnit=e,this.measureToolbar.setLinearUnit(E[e]),this._dropDownButton.openDropDown()},_onAngularUnitClick:function(e,t){v.remove(this._currentAngularUnitMenuItem.domNode,"esriSelectedOption"),v.add(t.domNode,"esriSelectedOption"),this._currentAngularUnitMenuItem=t,this.angularUnit=e,this.measureToolbar.setAngularUnit(E[e]),this._dropDownButton.openDropDown()},_onAreaUnitClick:function(e,t){v.remove(this._currentAreaUnitMenuItem.domNode,"esriSelectedOption"),v.add(t.domNode,"esriSelectedOption"),this._currentAreaUnitMenuItem=t,this.areaUnit=e,this.measureToolbar.setAreaUnit(E[e]),this._dropDownButton.openDropDown()},_onDrawStart:function(){this._removeDraws()},_addGraphic:function(e){var t,i,n=e.geometry;this.measureToolbar.hideDrawTooltip(),t="point"===n.type?this.markerSymbol:"line"===n.type||"polyline"===n.type?this.lineSymbol:this.fillSymbol,this._removeDraws(),i=new I(n,t),this._currentGraphic=i,this.map.graphics.add(i)},_addInfoWindow:function(e){var t=this._measureResultString(e.measureResult,e.error);"dropDown"===this.layout||"toolbar"===this.layout&&("true"===this.displayMeasureResultInPopup||!0===this.displayMeasureResultInPopup)?this._displayInfoWindowMeasureResult(t):"toolbar"===this.layout&&this._displayToolbarMeasureResult(t)},_measureResultString:function(e,t){var i,n,s,r,a,o,u,h,l,_="";if(e)for(l in i=e)i.hasOwnProperty(l)&&i[l]&&"name"!==l&&"sensorName"!==l&&(a="point"===l&&this._currentOperation.toLowerCase().indexOf("centroid")>=0?this._i18n.widgets.imageServiceMeasure.measureDialog.Centroid:this._i18n.widgets.imageServiceMeasure.measureDialog[l.charAt(0).toUpperCase()+l.slice(1)],"point"!=l?(n=this._i18n.widgets.imageServiceMeasure.unitLabel[this._getUnitString(i[l].unit)],r=Math.abs(i[l].uncertainty).toFixed(2),s=this._getDisplayValue(i[l]),_+="<strong>"+a+"</strong>: "+R.format(s)+" (&plusmn"+R.format(r)+") "+n+"<br/>"):(o=i[l].value.x.toFixed(2),u=i[l].value.y.toFixed(2),_+="<strong>"+a+"</strong><br/>"+this._i18n.widgets.imageServiceMeasure.measureDialog.X+" : "+R.format(o)+"<br/>"+this._i18n.widgets.imageServiceMeasure.measureDialog.Y+" : "+R.format(u)+"<br/>",this._currentOperation.toLowerCase().indexOf("3d")>=0&&void 0!==i[l].value.z&&(h=i[l].value.z.toFixed(2),_+=this._i18n.widgets.imageServiceMeasure.measureDialog.Z+" : "+R.format(h)+"<br/>")));else _=this._i18n.widgets.imageServiceMeasure.measurementErrorGeneric;return _},_getDisplayValue:function(e){return this.layer.currentVersion&&this.layer.currentVersion>=10.3?e.uncertainty<0?e.value.toFixed(2):Number(e.displayValue).toString():e.value.toFixed(2)},_getUnitString:function(e){var t,i;for(t in E)E.hasOwnProperty(t)&&(E[t]===e?i=t:e===this._decimalDegreesConstantValue&&(i=this._decimalDegreesConstantKeyword));return i},_displayInfoWindowMeasureResult:function(e){if(this._currentGraphic){var t,i,n=this._currentGraphic.geometry,s=[this._currentGraphic];this._currentGraphic&&("point"===n.type?this._currentInfowindow=n:"polyline"===n.type?(t=(n.paths[0][0][0]+n.paths[0][1][0])/2,i=(n.paths[0][0][1]+n.paths[0][1][1])/2,this._currentInfowindow=new S(t,i,this.map.spatialReference)):"polygon"===n.type&&(this._currentInfowindow=n.getCentroid()),s[0].setInfoTemplate(new f({title:this._i18n.widgets.imageServiceMeasure.infoWindowTitle,content:e})),this.map.infoWindow.setFeatures(s),this.map.infoWindow.show(this._currentInfowindow))}},_displayToolbarMeasureResult:function(e){A.set(this.measureResultStringDiv,e)},_removeAssociatedGeometry:function(){this._currentGraphic&&(this.map.graphics.remove(this._currentGraphic),this._currentGraphic=null)},_removeDraws:function(){this._removeAssociatedGeometry(),this._currentInfowindow&&(this.map.infoWindow.hide(this._currentInfowindow),this._currentInfowindow=null)},_onUnitChange:function(e){this._addInfoWindow(e)},_toggle:function(){this._activeMeasureOpMenuItem?(this._removeDraws(),v.remove(this._activeMeasureOpMenuItem.domNode,"esriSelectedOption"),this._activeMeasureOpMenuItem=null,this.measureToolbar.deactivate(),v.remove(this._toggleButton._buttonNode,"esriCheckedMeasureButton"),this._enableMapNavigation()):(this._menuItem=this._dropDownMenuItemMap[this._currentOperation.replace("_3D","")],this._onDropDownMenuItemClick(this._currentOperation.replace("_3D",""),this._menuItem))},deactivate:function(){this._removeDraws(),this._activeMeasureOpMenuItem&&(v.remove(this._activeMeasureOpMenuItem.domNode,"esriSelectedOption"),this._activeMeasureOpMenuItem=null),this._toggleButton&&v.remove(this._toggleButton._buttonNode,"esriCheckedMeasureButton"),this.measureResultStringDiv&&A.set(this.measureResultStringDiv,""),"toolbar"===this.layout&&this._currentOperation&&this._toggleButtonMenuItemMap[this._currentOperation.replace("_3D","")].set("checked",!1),this.measureToolbar&&this.measureToolbar.deactivate(),this._enableMapNavigation()},_disableMapNavigation:function(){this.map.disableMapNavigation(),this.map.setInfoWindowOnClick(!1)},_enableMapNavigation:function(){this.map.enableMapNavigation(),this.map.setInfoWindowOnClick(!0)},destroy:function(){this.inherited(arguments)}});return s("extend-esri")&&t.setObject("dijit.ImageServiceMeasure",N,a),N}));