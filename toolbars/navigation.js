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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/Color","dojo/has","../kernel","./_toolbar","../undoManager","../OperationBase","../geometry/Extent","../geometry/Rect","../symbols/SimpleLineSymbol","../symbols/SimpleFillSymbol","../graphic"],(function(t,e,n,o,a,i,s,r,h,c,_,l,d,p){var u=t(s,{declaredClass:"esri.toolbars.Navigation",_eventMap:{"extent-history-change":!0},constructor:function(t){this.zoomSymbol=new d(d.STYLE_SOLID,new l(l.STYLE_SOLID,new o([255,0,0]),2),new o([0,0,0,.25])),n.connect(t,"onUnload",this,"_cleanUp"),this.map=t,this._undoManager=new r({maxOperations:-1}),this._normalizeRect=e.hitch(this,this._normalizeRect),this._onMouseDownHandler=e.hitch(this,this._onMouseDownHandler),this._onMouseUpHandler=e.hitch(this,this._onMouseUpHandler),this._onMouseDragHandler=e.hitch(this,this._onMouseDragHandler),this._swipeCheck=a("esri-pointer"),this._onExtentChangeHandler_connect=n.connect(t,"onExtentChange",this,"_extentChangeHandler"),this._onMapLoad_connect=n.connect(t,"onLoad",this,"_mapLoadHandler"),t.loaded&&t.extent&&(this._currentExtent=t.extent)},_mapLoadHandler:function(){this._currentExtent=this.map.extent},_navType:null,_start:null,_graphic:null,_prevExtent:!1,_currentExtent:null,_preExtent:null,_cleanUp:function(t){n.disconnect(this._onExtentChangeHandler_connect),n.disconnect(this._onMapLoad_connect)},activate:function(t){var e=this.map;switch(this._graphic||(this._deactivateMapTools(!0,!1,!1,!0),this._graphic=new p(null,this.zoomSymbol)),t){case u.ZOOM_IN:case u.ZOOM_OUT:this._deactivate(),this._swipeCheck?(this._onMouseDownHandler_connect=n.connect(e,"onSwipeStart",this,"_onMouseDownHandler"),this._onMouseDragHandler_connect=n.connect(e,"onSwipeMove",this,"_onMouseDragHandler"),this._onMouseUpHandler_connect=n.connect(e,"onSwipeEnd",this,"_onMouseUpHandler")):(this._onMouseDownHandler_connect=n.connect(e,"onMouseDown",this,"_onMouseDownHandler"),this._onMouseDragHandler_connect=n.connect(e,"onMouseDrag",this,"_onMouseDragHandler"),this._onMouseUpHandler_connect=n.connect(e,"onMouseUp",this,"_onMouseUpHandler")),this._navType=t;break;case u.PAN:this._deactivate(),e.enablePan(),this._navType=t}},_extentChangeHandler:function(t){if(this._prevExtent||this._nextExtent)this._currentExtent=t;else if(this._preExtent=this._currentExtent,this._currentExtent=t,this._preExtent&&this._currentExtent){var e=new u.MapExtent({map:this.map,preExtent:this._preExtent,currentExtent:this._currentExtent});this._undoManager.add(e)}this._prevExtent=this._nextExtent=!1,this.onExtentHistoryChange()},_deactivate:function(){var t=this._navType;t===u.PAN?this.map.disablePan():t!==u.ZOOM_IN&&t!==u.ZOOM_OUT||(n.disconnect(this._onMouseDownHandler_connect),n.disconnect(this._onMouseDragHandler_connect),n.disconnect(this._onMouseUpHandler_connect))},_normalizeRect:function(t,e,n){var o=t.x,a=t.y,i=e.x,s=e.y,r=Math.abs(o-i),h=Math.abs(a-s);return{x:Math.min(o,i),y:Math.max(a,s),width:r,height:h,spatialReference:n}},_onMouseDownHandler:function(t){this._start=t.mapPoint},_onMouseDragHandler:function(t){var e=this._graphic,n=this.map.graphics;n.remove(e,!0),e.setGeometry(new _(this._normalizeRect(this._start,t.mapPoint,this.map.spatialReference))),n.add(e,!0)},_onMouseUpHandler:function(t){var e=this.map,n=this._normalizeRect(this._start,t.mapPoint,e.spatialReference);if(e.graphics.remove(this._graphic,!0),0!==n.width||0!==n.height)if(this._navType===u.ZOOM_IN)e.setExtent(new _(n).getExtent());else{var o=e.toScreen(n),a=e.toScreen({x:n.x+n.width,y:n.y,spatialReference:e.spatialReference}),i=e.extent.getWidth(),s=(i*e.width/Math.abs(a.x-o.x)-i)/2,r=e.extent;e.setExtent(new c(r.xmin-s,r.ymin-s,r.xmax+s,r.ymax+s,r.spatialReference))}},deactivate:function(){this._deactivate(),this._graphic&&this.map.graphics.remove(this._graphic,!0),this._navType=this._start=this._graphic=null,this._activateMapTools(!0,!1,!1,!0)},setZoomSymbol:function(t){this.zoomSymbol=t},isFirstExtent:function(){return!this._undoManager.canUndo},isLastExtent:function(){return!this._undoManager.canRedo},zoomToFullExtent:function(){var t=this.map;t.setExtent(t.getLayer(t.layerIds[0]).initialExtent)},zoomToPrevExtent:function(){this._undoManager.canUndo&&(this._prevExtent=!0,this._undoManager.undo())},zoomToNextExtent:function(){this._undoManager.canRedo&&(this._nextExtent=!0,this._undoManager.redo())},onExtentHistoryChange:function(){}});return e.mixin(u,{ZOOM_IN:"zoomin",ZOOM_OUT:"zoomout",PAN:"pan"}),u.MapExtent=t(h,{declaredClass:"esri.toolbars.MapExtent",label:"extent changes",constructor:function(t){this.map=t.map,this.preExtent=t.preExtent,this.currentExtent=t.currentExtent},performRedo:function(){this.map.setExtent(this.currentExtent)},performUndo:function(){this.map.setExtent(this.preExtent)}}),a("extend-esri")&&(e.setObject("toolbars.Navigation",u,i),e.setObject("toolbars.MapExtent",u.MapExtent,i)),u}));