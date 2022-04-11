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

define(["dojo/_base/declare","dojo/on","dijit/Destroyable","../../../../../dataProvider/supportClasses/data/AreaDataUtil","../../MapEventUtil","esri/dijit/geoenrichment/utils/DeviceUtil"],(function(e,i,t,r,a,n){return e(t,{_info:null,_fieldData:null,_isMultiFeature:null,_calcDataArray:null,_currentFeatureIndex:null,_layerNames:null,constructor:function(e,i,t,r){this._info=e,this._fieldData=i,this._isMultiFeature=t,this._currentFeatureIndex=r,this._layerIndexes={},this._layerNames={},this._rendererJsons={},this._mapInfos={},this._graphicLayerInfos={}},_getCalculatorName:function(){return this._info.calculatorName},getVariableObjects:function(){return this._info.variableObjects},getLayerID:function(){return this._info.layerID},getLayerUrl:function(){return this._info.layerUrl},getLayerName:function(e){return this._layerNames[e]||this._info.layerName},setLayerName:function(e,i){this._layerNames[e]=i},getCalculatorDataArray:function(){if(!this._calcDataArray)if(this._isMultiFeature){var e=r.combineAreaDataObjectCalculators(this._fieldData.areaData,this._getCalculatorName());this._calcDataArray=r.removeDuplicacatedCalcData(e.thisAreas.concat(e.comparisonLevels))}else{var i=r.getAreaDataObjectCalculator(this._fieldData.areaData[this._currentFeatureIndex],this._getCalculatorName());this._calcDataArray=i&&[i.data].concat(i.comparisonLevels)}return this._calcDataArray},_rendererJsons:null,getRendererJson:function(e){return this._rendererJsons[e]},setRendererJson:function(e,i){this._rendererJsons[e]=i},_layerIndexes:null,getLayerIndex:function(e){return this._layerIndexes[e]},setLayerIndex:function(e,i){this._layerIndexes[e]=i},_mapInfos:null,getMapInfo:function(e){return this._mapInfos[e]},getMapInfos:function(){var e=[];for(var i in this._mapInfos)e.push(this._mapInfos[i]);return e},setMapInfo:function(e,i){this._mapInfos[e]=i},_getPointIndexForCellFunc:null,_getCellForPointAtFunc:null,_highlightedCell:null,setLocatorTableCallbacks:function(e){this._getPointIndexForCellFunc=e.getPointIndexForCellFunc,this._getCellForPointAtFunc=e.getCellForPointAtFunc},registerLocatorTable:function(e){var t,r=this;e.set("highlightRowsOnHover",!0),i(e.domNode,"mouseover,mousemove",(function(){var i=e.getOverFieldCell();i&&i!==t&&(t=i,r._highlightGraphicForFieldCell(t))})),i(e.domNode,"mouseout",(function(){r._highlightGraphicForFieldCell(null),t=null}))},_highlightRowForGraphic:function(e,i){if(this._highlightedCell&&(this._highlightedCell.parentGrid&&this._highlightedCell.parentGrid.setCellRowHighlighted(this._highlightedCell,!1),this._highlightedCell=null),i&&this._getCellForPointAtFunc){var t=e.getPointIndexForGraphicFunc(i),r=this._getCellForPointAtFunc(t);r&&r.parentGrid&&(r.parentGrid.setCellRowHighlighted(r,!0),this._highlightedCell=r)}},_graphicLayerInfos:null,setLocatorPointsLayer:function(e,i,t,r){this._unSetInfo(e);var a={map:t,graphicsLayer:i,getPointIndexForGraphicFunc:r.getPointIndexForGraphicFunc,getGraphicForPointAtFunc:r.getGraphicForPointAtFunc,setGraphicHighlightedFunc:r.setGraphicHighlightedFunc,layerMouseOverHandle:null,layerMouseOutHandle:null,highlightedGraphic:null,overGraphic:null};this._graphicLayerInfos[e]=a,this._addLayerListeners(a)},_addLayerListeners:function(e){var t=this,r=e.map,l=e.graphicsLayer;e.layerMouseOverHandle=a.onLayerMouseOver(l,r,(function(a){a.graphic&&a.graphic._graphicsLayer===l&&e.overGraphic!==a.graphic&&(e.layerMouseOutHandle&&e.layerMouseOutHandle.remove(),e.layerMouseOutHandle=null,t._removeHighlight(e),e.overGraphic=a.graphic,t._highlightRowForGraphic(e,e.overGraphic),e.setGraphicHighlightedFunc(e.overGraphic,!0),n.isMobileDevice()?r.infoWindow&&(r.infoWindow.setFeatures([e.overGraphic]),r.infoWindow.show(a.mapPoint,{closestFirst:!0})):e.layerMouseOutHandle=i.once(l,"mouse-out",(function(i){t._removeHighlight(e,!0)})))}))},_highlightGraphicForFieldCell:function(e){for(var i in this._graphicLayerInfos){var t=this._graphicLayerInfos[i];if(this._removeHighlight(t),e){var r=this._getPointIndexForCellFunc(e),a=t.getGraphicForPointAtFunc(r);a&&(t.setGraphicHighlightedFunc(a,!0),t.highlightedGraphic=a)}}},_removeHighlight:function(e,i){this._highlightRowForGraphic(e,null),e.highlightedGraphic&&(e.setGraphicHighlightedFunc(e.highlightedGraphic,!1),e.highlightedGraphic=null),e.overGraphic&&e.setGraphicHighlightedFunc(e.overGraphic,!1),e.overGraphic=null,!i&&e.map.infoWindow&&e.map.infoWindow.hide()},setPointVisibleAt:function(e,i){for(var t in this._graphicLayerInfos){var r=this._graphicLayerInfos[t].getGraphicForPointAtFunc(e);r&&r[i?"show":"hide"]()}},_unSetInfo:function(e){var i=this._graphicLayerInfos[e];delete this._graphicLayerInfos[e],i&&(i.layerMouseOverHandle&&i.layerMouseOverHandle.remove(),i.layerMouseOutHandle&&i.layerMouseOutHandle.remove())},_unSetLayers:function(){Object.keys(this._graphicLayerInfos).forEach(this._unSetInfo.bind(this)),this._graphicLayerInfos={}},destroy:function(){this._unSetLayers()}})}));