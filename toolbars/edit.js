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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/array","dojo/_base/Color","dojo/has","dojo/dom-construct","dojo/dom-style","../kernel","../lang","../sniff","./_toolbar","./_Box","./_GraphicMover","./_VertexEditor","./TextEditor","../symbols/SimpleMarkerSymbol","../symbols/SimpleLineSymbol","../symbols/TextSymbol","../graphic"],(function(t,e,i,o,n,r,a,s,h,c,l,d,_,p,f,E,x,m,u,b,g){var v=e(_,{declaredClass:"esri.toolbars.Edit",constructor:function(t,e){if(this._map=t,this._tool=0,this._map.loaded)this._scratchGL=t.graphics;else var n=o.connect(this._map,"onLoad",this,(function(){o.disconnect(n),n=null,this._scratchGL=this._map.graphics}));var s=a("esri-mobile");this._defaultOptions=i.mixin({vertexSymbol:new m(m.STYLE_CIRCLE,s?20:12,new u(u.STYLE_SOLID,new r([0,0,0,.5]),1),new r([128,128,128])),ghostVertexSymbol:new m(m.STYLE_CIRCLE,s?18:10,new u(u.STYLE_SOLID,new r([0,0,0,.5]),1),new r([255,255,255,.75])),ghostLineSymbol:new u(u.STYLE_DOT,new r([128,128,128]),2),allowDeleteVertices:!0,allowAddVertices:!0,rotateHandleOffset:s?24:16,boxLineSymbol:new u(u.STYLE_DASH,new r([64,64,64]),1),boxHandleSymbol:new m(m.STYLE_SQUARE,s?16:9,new u(u.STYLE_SOLID,new r([0,0,0,.5]),1),new r([255,255,255,.75])),textAnchorSymbol:new m(m.STYLE_CIRCLE,10,null,new r([255,0,0]))},e||{})},activate:function(t,e,n){this.deactivate(),this._graphic=e,this._options=i.mixin(i.mixin({},this._defaultOptions),n||{});var r=v.MOVE,a=v.EDIT_VERTICES,s=v.SCALE,h=v.ROTATE,c=v.EDIT_TEXT,l=!1,d=!1,_=!1,p=this._map,f=p.spatialReference,E=e.geometry.spatialReference;this._geo=!(!f||!E||f.equals(E)||!f.isWebMercator()||4326!==E.wkid),this._isTextPoint=this._prepareTextSymbolEditing(e,t),(t&r)===r&&(l=this._enableMove(e));var x=(t&s)===s,m=(t&h)===h;if((x||m)&&(_=this._enableBoxEditing(e,x,m)),(t&a)===a&&(d=this._enableVertexEditing(e)),(t&c)===c&&this._enableTextEditing(e),!(l||d||_))throw new Error("[esri.toolbars.Edit::activate] Unable to activate the tool. Check if the tool is valid for the given geometry type.");this._tool=t,this._tool&&(this._mapPanEndHandle=o.connect(p,"onPanEnd",this,this._mapPanEndHandler),this._mapExtChgHandle=o.connect(p,"onExtentChange",this,this._mapExtentChangeHandler),this.onActivate(this._tool,e)),p.snappingManager&&(l||d)&&p.snappingManager._startSelectionLayerQuery()},deactivate:function(){this._isTextPoint=null;var t=this._tool,e=this._graphic;if(t){var i=!!this._modified;this._clear(),o.disconnect(this._mapPanEndHandle),o.disconnect(this._mapExtChgHandle),this._mapPanEndHandle=this._mapExtChgHandle=null,this._graphic=this._geo=null,this.onDeactivate(t,e,{isModified:i}),this._map.snappingManager&&this._map.snappingManager._stopSelectionLayerQuery()}},refresh:function(){this._refreshMoveables(!0)},getCurrentState:function(){return{tool:this._tool,graphic:this._graphic,isModified:!!this._modified}},onActivate:function(t,e){},onDeactivate:function(t,e,i){},onGraphicMoveStart:function(t){},onGraphicFirstMove:function(t){this._modified=!0},onGraphicMove:function(t,e){},onGraphicMoveStop:function(t,e){},onGraphicClick:function(t,e){},onVertexMoveStart:function(t,e){},onVertexFirstMove:function(t,e){this._modified=!0},onVertexMove:function(t,e,i){},onVertexMoveStop:function(t,e,i){},onVertexAdd:function(t,e){this._modified=!0},onVertexClick:function(t,e){},onVertexMouseOver:function(t,e){},onVertexMouseOut:function(t,e){},onVertexDelete:function(t,e){this._modified=!0},onTextEditStart:function(t,e){},onTextEditEnd:function(t){},onScaleStart:function(t){},onScaleFirstMove:function(t){this._modified=!0},onScale:function(t,e){},onScaleStop:function(t,e){},onRotateStart:function(t){},onRotateFirstMove:function(t){this._modified=!0},onRotate:function(t,e){},onRotateStop:function(t,e){},_eventMap:{activate:["tool","graphic"],deactivate:["tool","graphic","info"],"graphic-move-start":["graphic"],"graphic-first-move":["graphic"],"graphic-move":["graphic","transform"],"graphic-move-stop":["graphic","transform"],"graphic-click":["graphic","info"],"vertex-move-start":["graphic","vertexinfo"],"vertex-first-move":["graphic","vertexinfo"],"vertex-move":["graphic","vertexinfo","transform"],"vertex-move-stop":["graphic","vertexinfo","transform"],"vertex-add":["graphic","vertexinfo"],"vertex-click":["graphic","vertexinfo"],"vertex-mouse-over":["graphic","vertexinfo"],"vertex-mouse-out":["graphic","vertexinfo"],"vertex-delete":["graphic","vertexinfo"],"scale-start":["graphic"],"scale-first-move":["graphic"],scale:["graphic","info"],"scale-stop":["graphic","info"],"rotate-start":["graphic"],"rotate-first-move":["graphic"],rotate:["graphic","info"],"rotate-stop":["graphic","info"]},_prepareTextSymbolEditing:function(e,i){if("point"===e.geometry.type||"multipoint"===e.geometry.type){var o=e.getLayer(),n=o.renderer,r=e.symbol||o._getSymbol(e);if(!r&&(n.hasVisualVariables("sizeInfo",!1)||n.hasVisualVariables("colorInfo",!1)||n.hasVisualVariables("opacityInfo",!1))&&n.addBreak&&n.infos&&1===n.infos.length&&(r=n.infos[0].symbol||n.defaultSymbol),r&&"textsymbol"===r.type){if((i&v.SCALE)===v.SCALE||(i&v.ROTATE)===v.ROTATE||(i&v.EDIT_TEXT)===v.EDIT_TEXT){e.setSymbol(new b(r.toJson()));var a=this;this._textSymbolEditor?(this._textSymbolEditor.createForm(e),this._textSymbolEditor.show()):this._options&&this._options.textSymbolEditor?(this._textSymbolEditor=this._options.textSymbolEditor,this._textSymbolEditor.on("symbol-change",(function(){a._boxEditor&&a._boxEditor.refresh()}))):t(["../dijit/SymbolEditor"],(function(t){if(!a._textSymbolEditor){var i;i=a._options.textSymbolEditorHolder?s.create("div",null,a._options.textSymbolEditorHolder):s.create("div",null,a._map.root),a._textSymbolEditor=new t({graphic:e},i);var o=a._textSymbolEditor.domNode.parentNode.id;h.set(a._textSymbolEditor.domNode,{position:"map_root"===o?"absolute":"relative",left:"map_root"===o?a._map.width/2-100+"px":"5px",top:"20px","z-index":50}),a._textSymbolEditor.startup(),a._textSymbolEditor.createForm(e),a._textSymbolEditor.show(),a._textSymbolEditor.on("symbol-change",(function(){a._boxEditor&&a._boxEditor.refresh()}))}}))}return(i&v.MOVE)!==v.MOVE&&(i&v.ROTATE)!==v.ROTATE&&(i&v.SCALE)!==v.SCALE||(this._textAnchor=new g(e.geometry,this._options.textAnchorSymbol),this._scratchGL.add(this._textAnchor)),!0}}return!1},_enableMove:function(t){var e=this._map;switch(t.geometry.type){case"point":case"polyline":case"polygon":return this._graphicMover=new f(t,e,this,this._textAnchor),!0}return!1},_enableVertexEditing:function(t){var e=this._map;switch(t.geometry.type){case"point":break;case"multipoint":case"polyline":case"polygon":return this._vertexEditor=E.create(t,e,this),!0}return!1},_enableBoxEditing:function(t,e,i){var o=this._map,n=t.geometry.type;return!("polyline"!==n&&"polygon"!==n&&!this._isTextPoint)&&(this._boxEditor=new p(t,o,this,e,i,this._options.uniformScaling,this._isTextPoint),!0)},_enableTextEditing:function(t){return!!this._isTextPoint&&(this._textEditor=new x(t,this._map,this),o.connect(this._textEditor,"onEditStart",i.hitch(this,(function(){this._textAnchor&&(this._textAnchor.getLayer().remove(this._textAnchor),this._textAnchor=null),this._map.disableKeyboardNavigation(),this._disableMove(),this._disableBoxEditing()}))),!0)},_disableMove:function(){var t=this._graphicMover;t&&(t.destroy(),this._graphicMover=null)},_disableVertexEditing:function(){var t=this._vertexEditor;t&&(t.destroy(),this._vertexEditor=null)},_disableBoxEditing:function(){var t=this._boxEditor;t&&(t.destroy(),this._boxEditor=null)},_disableTextEditing:function(){this._textEditor&&(this._textEditor.destroy(),this._textEditor=null),this._map.enableKeyboardNavigation()},_disableSymbolEditing:function(){this._textSymbolEditor&&this._textSymbolEditor.hide()},_clear:function(){this._disableMove(),this._disableVertexEditing(),this._disableBoxEditing(),this._disableTextEditing(),this._disableSymbolEditing(),this._textAnchor&&(this._textAnchor.getLayer().remove(this._textAnchor),this._textAnchor=null),this._tool=0,this._modified=!1},_mapPanEndHandler:function(){this._refreshMoveables()},_mapExtentChangeHandler:function(t,e,i){i&&this._refreshMoveables()},_refreshMoveables:function(t){var e=n.filter([this._graphicMover,this._vertexEditor,this._boxEditor],l.isDefined);n.forEach(e,(function(e){e.refresh(t)}))},_beginOperation:function(t){n.forEach(this._getAffectedTools(t),(function(t){t.suspend()}))},_endOperation:function(t){n.forEach(this._getAffectedTools(t),(function(t){t.resume()}))},_getAffectedTools:function(t){var e=[];switch(t){case"MOVE":e=[this._vertexEditor,this._boxEditor];break;case"VERTICES":e=[this._boxEditor];break;case"BOX":e=[this._vertexEditor]}return e=n.filter(e,l.isDefined)}});return i.mixin(v,{MOVE:1,EDIT_VERTICES:2,SCALE:4,ROTATE:8,EDIT_TEXT:16}),a("extend-esri")&&i.setObject("toolbars.Edit",v,c),v}));