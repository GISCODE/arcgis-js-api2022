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

define(["require","dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","dijit/_WidgetBase","dijit/_TemplatedMixin","esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicTypes","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/MouseUtil","esri/dijit/geoenrichment/utils/WaitingUtil","dojo/text!../templates/InfographicContainer.html"],(function(i,e,t,n,r,s,h,o,a,c,u,p){return e([s,h],{isInfographic:!0,templateString:p,viewModel:null,theme:null,parentWidget:null,currentFeatureIndex:null,getPreviewValueFunction:null,adjustElementsWhenResized:!1,_pendingResizeFlag:!1,_pendingUpdateFlag:!1,postCreate:function(){this.inherited(arguments),this._initDfd=new n},_initDfd:null,_currentInfographic:null,_isBeingUpdated:!1,getInnerInfographic:function(){return this._currentInfographic},getContentInitPromise:function(){return this._initDfd&&this._initDfd.promise},getRenderPromise:function(){return r(this._initDfd&&this._initDfd.promise).then(function(){return this._currentInfographic&&this._currentInfographic.getRenderPromise()}.bind(this))},_getTypeToClassPathMap:function(){var i={};return i[o.STATIC]="./simpleInfographic/SimpleInfographicWithDataDrilling",i[o.ATTACHMENTS]="./AttachmentsInfographic",i[o.AREA_DETAILS]="./areaDetails/AreaDetailsInfographic",i[o.LOCATOR_TABLE]="./locator/LocatorTableInfographic",i[o.COMPARISON_TABLE]="./comparison/ComparisonTableInfographic",i.dynamic="./dynamic/DynamicInfographic",i},_getRelativeRequire:function(){return i},_lastAppliedJson:null,updateInfographic:function(i){var e=this;if(this.viewDiv&&i&&o.isSupported(i.type)&&!this._isBeingUpdated){if(i.style=i.style||{},this._lastAppliedJson=i,this._type=i.type,this._currentInfographic)return this._currentInfographic.updateInfographic(i);this._initDfd=this._initDfd||new n,this._isBeingUpdated=!0;var t=this._getTypeToClassPathMap()[o.isDynamic(i.type)?"dynamic":i.type],r=new n;return this._getRelativeRequire()([t],(function(i){r.resolve(i)})),u.showProgressPromise(this.domNode,r.promise),r.promise.then((function(t){e._createInfographicForClass(i,t)})).then((function(){return e._isBeingUpdated=!1,a.isNodeInLayout(e.domNode)?e._currentInfographic.updateInfographic(i):e._pendingUpdateFlag=!0,e._initDfd.resolve(),e._initDfd=null,e.getRenderPromise()}))}},_createInfographicForClass:function(i,e){var n=this,r=t.mixin({viewModel:this.viewModel,theme:this.theme,parentWidget:this,currentFeatureIndex:this.currentFeatureIndex,getPreviewValueFunction:this.getPreviewValueFunction,width:this.width,height:this.height,adjustElementsWhenResized:this.adjustElementsWhenResized,onShowWaiting:function(i){return u.showProgressPromise(n.domNode,i)}},this._prepareCreationParameters(i),r);return this._currentInfographic=new e(r),this._currentInfographic.placeAt(this.viewDiv),this._currentInfographic},_prepareCreationParameters:function(i){return null},_type:null,getType:function(){return this._type},width:null,height:null,resize:function(i,e,t){var n=this;function s(){n._currentInfographic&&n._currentInfographic.resize(n.width,n.height,t)}t=t||{},void 0!==i&&(this.width=i,this.height=e),t.sync?s():r(this._initDfd&&this._initDfd.promise,function(){a.isNodeInLayout(this.domNode)?s():this._pendingResizeFlag=!0}.bind(this))},getPreferredHeight:function(){return this._currentInfographic&&this._currentInfographic.getPreferredHeight&&this._currentInfographic.getPreferredHeight()},collapseContent:function(){this._currentInfographic&&this._currentInfographic.collapseContent&&this._currentInfographic.collapseContent()},toJson:function(){return this._currentInfographic?this._currentInfographic.toJson():this._lastAppliedJson&&t.clone(this._lastAppliedJson)},getVisualState:function(){return this._currentInfographic&&this._currentInfographic.getVisualState&&this._currentInfographic.getVisualState()},setVisualState:function(i){return this._currentInfographic&&this._currentInfographic.setVisualState&&this._currentInfographic.setVisualState(i)},notifyShown:function(){r(this._initDfd&&this._initDfd.promise,function(){a.isNodeInLayout(this.domNode)&&(this._pendingResizeFlag&&this.resize(),this._pendingResizeFlag=!1,this._pendingUpdateFlag&&this._currentInfographic.updateInfographic(this._lastAppliedJson),this._pendingUpdateFlag=!1,r(this.getRenderPromise(),function(){this._currentInfographic&&this._currentInfographic.notifyShown&&this._currentInfographic.notifyShown()}.bind(this)))}.bind(this))},_panelScale:null,notifyPanelScaleChanged:function(i){this._panelScale=i,r(this._initDfd&&this._initDfd.promise,function(){this._currentInfographic&&this._currentInfographic.notifyPanelScaleChanged&&this._currentInfographic.notifyPanelScaleChanged(this._panelScale)}.bind(this))},isMouseOver:function(){return c.isMouseOver(this.domNode)||this._currentInfographic&&this._currentInfographic.isMouseOver&&this._currentInfographic.isMouseOver()},destroy:function(){this._currentInfographic&&this._currentInfographic.destroy(),this.inherited(arguments)}})}));