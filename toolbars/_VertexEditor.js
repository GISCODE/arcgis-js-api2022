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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/array","dojo/has","dijit/Menu","dijit/MenuItem","../kernel","./_VertexMover","../geometry/Point","../geometry/jsonUtils","dojo/i18n!../nls/jsapi"],(function(e,t,n,o,i,r,s,h,a,d,c,l){var g=e(null,{declaredClass:"esri.toolbars._GraphicVertexEditor",constructor:function(e,t,n){this.graphic=e,this.map=t,this.toolbar=n;var o=n._options;this._symbol1=o.vertexSymbol,this._symbol2=o.ghostVertexSymbol;var i=o.ghostLineSymbol;this._lineStroke={style:i.style,width:i.width,color:i.color},this._canDel=o.allowDeleteVertices,this._canAdd=o.allowAddVertices,this._addControllers()},destroy:function(){this._removeControllers()},refresh:function(e){e?(this._removeControllers(),this._addControllers()):(this._refresh(this._vertexMovers),this._refresh(this._mpVertexMovers))},suspend:function(){this._suspended||this._removeControllers(),this._suspended=!0},resume:function(){this._suspended&&this._addControllers(),this._suspended=!1},_addControllers:function(){this._firstMoveHandle=n.connect(a,"onFirstMove",this,this._firstMoveHandler),this._moveStopHandle=n.connect(a,"onMoveStop",this,this._moveStopHandler),this._vertexMovers=this._add(this._getSegments(this.graphic.geometry),this._symbol1),this._canAdd&&(this._mpVertexMovers=this._add(this._getMidpointSegments(this.graphic.geometry),this._symbol2,!0));var e=this._getGraphicsLayer();if(this._mouseOverHandle=n.connect(e,"onMouseOver",this,this._mouseOverHandler),this._mouseOutHandle=n.connect(e,"onMouseOut",this,this._mouseOutHandler),this._canDel){this._ctxMenu=new r({style:"font-size: 12px; margin-left: 5px; margin-top: 5px;"});var t=this._ctxDelete=new s({label:l.toolbars.edit.deleteLabel,iconClass:"vertexDeleteIcon",style:"outline: none;"});this._deleteHandle=n.connect(t,"onClick",this,this._deleteHandler),this._ctxMenu.addChild(t),this._ctxMenu.startup()}},_removeControllers:function(){n.disconnect(this._firstMoveHandle),n.disconnect(this._moveStopHandle),n.disconnect(this._mouseOverHandle),n.disconnect(this._mouseOutHandle),n.disconnect(this._deleteHandle),this._ctxMenu&&(this._ctxDelete=null,this._unbindCtxNode(),this._ctxMenu.destroyRecursive()),this._remove(this._vertexMovers),this._remove(this._mpVertexMovers),this._vertexMovers=this._mpVertexMovers=null},_add:function(e,t,n){var o,i,r=this.graphic,s=[];for(o=0;o<e.length;o++){var h=e[o],d=[];for(i=0;i<h.length;i++)d.push(new a(h[i],t,r,o,i,h.length,this,n));s.push(d)}return s},_remove:function(e){e&&o.forEach(e,(function(e){o.forEach(e,(function(e){e.destroy()}))}))},_refresh:function(e){e&&o.forEach(e,(function(e){o.forEach(e,(function(e){e.refresh()}))}))},_isNew:function(e){return-1===o.indexOf(this._vertexMovers[e.segIndex],e)},_getGraphicsLayer:function(){return this.toolbar._scratchGL},_deleteHandler:function(e){var t=this._selectedMover;t.ptIndex;this._updateRelatedGraphic(t,t.relatedGraphic,t.graphic.geometry,t.segIndex,t.ptIndex,t.segLength,!1,!0),this._canAdd&&this._deleteMidpoints(t),this._deleteVertex(t),this.toolbar._endOperation("VERTICES")},_mouseOverHandler:function(e){var t=e.graphic,n=this._findMover(t);n&&(this.toolbar.onVertexMouseOver(this.graphic,n._getInfo()),n._placeholder||(this._selectedMover=n,this._canDel&&this._bindCtxNode(t.getDojoShape().getNode())))},_mouseOutHandler:function(e){var t=e.graphic,n=this._findMover(t);n&&this.toolbar.onVertexMouseOut(this.graphic,n._getInfo())},_bindCtxNode:function(e){this._unbindCtxNode(),this._ctxDelete.set("disabled",this._selectedMover.segLength<=this.minLength),this._ctxMenu.bindDomNode(e),this._bindNode=e},_unbindCtxNode:function(){var e=this._bindNode;e&&this._ctxMenu.unBindDomNode(e)},_findMover:function(e){var t,n=[],i=this._mpVertexMovers;for(o.forEach(this._vertexMovers,(function(e){n=n.concat(e)})),i&&o.forEach(i,(function(e){n=n.concat(e)})),t=0;t<n.length;t++){var r=n[t];if(r.graphic===e)return r}},_firstMoveHandler:function(e){!this._isNew(e)&&this._canAdd&&this._hideRelatedMidpoints(e),this.toolbar._beginOperation("VERTICES")},_moveStopHandler:function(e,t){var n=this._isNew(e);t&&(t.dx||t.dy)?(this._updateRelatedGraphic(e,e.relatedGraphic,e.graphic.geometry,e.segIndex,e.ptIndex,e.segLength,n),this._canAdd&&(n?this._addMidpoints(e):(this._repositionRelatedMidpoints(e),this._showRelatedMidpoints(e))),this.toolbar._endOperation("VERTICES")):!n&&this._canAdd&&this._showRelatedMidpoints(e)},_showRelatedMidpoints:function(e){var t,n=this._getAdjacentMidpoints(e.ptIndex,e.segLength),o=this._mpVertexMovers[e.segIndex];for(t=0;t<n.length;t++){var i=o[n[t]];i.graphic.show(),i.refresh()}},_hideRelatedMidpoints:function(e){var t,n=this._getAdjacentMidpoints(e.ptIndex,e.segLength),o=this._mpVertexMovers[e.segIndex];for(t=0;t<n.length;t++)o[n[t]].graphic.hide()},_repositionRelatedMidpoints:function(e){var t,n=this._getAdjacentMidpoints(e.ptIndex,e.segLength),o=this._mpVertexMovers[e.segIndex];for(t=0;t<n.length;t++){var i=this._getAdjacentVertices(n[t],e.segLength),r=e.relatedGraphic.geometry.getPoint(e.segIndex,i[0]),s=e.relatedGraphic.geometry.getPoint(e.segIndex,i[1]),h=new d({x:(r.x+s.x)/2,y:(r.y+s.y)/2,spatialReference:r.spatialReference.toJson()});o[n[t]].graphic.setGeometry(h)}},_addMidpoints:function(e){var t,n=e.segIndex,o=e.ptIndex,i=e.segLength,r=o+1,s=i+1;this._mpVertexMovers[n].splice(o,1);var h=this._vertexMovers[n];for(t=0;t<r;t++)h[t].segLength+=1;for(t=r;t<h.length;t++)h[t].ptIndex+=1,h[t].segLength+=1;for(e.ptIndex=r,e.segLength=h.length+1,h.splice(r,0,e),e.graphic.setSymbol(this._symbol1),h=this._mpVertexMovers[n],t=0;t<o;t++)h[t].segLength+=1;for(t=o;t<i-1;t++)h[t].ptIndex+=1,h[t].segLength+=1;var c,l,g=this._getAdjacentVertices(o,s),p=this._getAdjacentVertices(o+1,s);c=e.relatedGraphic.geometry.getPoint(e.segIndex,g[0]),l=e.relatedGraphic.geometry.getPoint(e.segIndex,g[1]);var _=new d({x:(c.x+l.x)/2,y:(c.y+l.y)/2,spatialReference:c.spatialReference.toJson()});c=e.relatedGraphic.geometry.getPoint(e.segIndex,p[0]),l=e.relatedGraphic.geometry.getPoint(e.segIndex,p[1]);var u=new d({x:(c.x+l.x)/2,y:(c.y+l.y)/2,spatialReference:c.spatialReference.toJson()}),f=new a(_,this._symbol2,this.graphic,e.segIndex,o,s,this,!0),x=new a(u,this._symbol2,this.graphic,e.segIndex,o+1,s,this,!0);h.splice(o,0,f,x)},_deleteVertex:function(e){var t,n=e.segIndex,o=e.ptIndex,i=this._vertexMovers[n];for(t=0;t<o;t++)i[t].segLength-=1;for(t=o+1;t<i.length;t++){var r=i[t];r.ptIndex-=1,r.segLength-=1}i.splice(o,1);var s=e._getInfo();e.destroy(),this.toolbar.onVertexDelete(this.graphic,s)}});return t.mixin(g,{create:function(e,t,n){switch(e.geometry.type){case"multipoint":return new g.MultipointVertexEditor(e,t,n);case"polyline":return new g.PolylineVertexEditor(e,t,n);case"polygon":return new g.PolygonVertexEditor(e,t,n)}}}),g.MultipointVertexEditor=e(g,{declaredClass:"esri.toolbars._MultipointVertexEditor",minLength:1,constructor:function(){this._moveStartHandle=n.connect(a,"onMoveStart",this,this._moveStartHandler),n.disconnect(this._firstMoveHandle)},destroy:function(){this.inherited(arguments),n.disconnect(this._moveStartHandle)},_getSegments:function(e){var t,n=e.points,o=[],i=e.spatialReference;for(t=0;t<n.length;t++){var r=n[t];o.push(new d({x:r[0],y:r[1],spatialReference:i.toJson()}))}return[o]},_getMidpointSegments:function(e){return[]},_getControlPoints:function(e,t,n,o,i){return[]},_getGraphicsLayer:function(){return this.graphic._graphicsLayer},_mouseOverHandler:function(e){var t=e.graphic,n=this._findMover(e);n&&(this.toolbar.onVertexMouseOver(t,n._getInfo()),this._selectedMover=n,this._canDel&&this._bindCtxNode(n.graphic.getDojoShape().getNode()))},_mouseOutHandler:function(e){var t=e.graphic,n=this._findMover(e);n&&this.toolbar.onVertexMouseOut(t,n._getInfo())},_findMover:function(e){var t,n=[].concat(this._vertexMovers[0]),o=e.target;for(t=0;t<n.length;t++){var i=n[t];if(i.graphic.getDojoShape().getNode()===o)return i}},_moveStartHandler:function(e){var t=e.relatedGraphic.geometry,n=e.ptIndex,o=e.segLength-1,i=t.points,r=i.splice(n,1);i.push(r[0]);var s,h=this._vertexMovers[0];for(s=o;s>n;s--)h[s].ptIndex-=1;r=h.splice(n,1),h.push(r[0]),r[0].ptIndex=o},_moveStopHandler:function(e){this._updateRelatedGraphic(e,e.relatedGraphic,e.graphic.geometry,e.segIndex,e.ptIndex,e.segLength),this.toolbar._endOperation("VERTICES")},_updateRelatedGraphic:function(e,t,n,o,i,r,s,h){var a=t.geometry;h?a.removePoint(i):a.setPoint(i,n),t.setGeometry(a)},_deleteMidpoints:function(e){}}),g.PolylineVertexEditor=e(g,{declaredClass:"esri.toolbars._PolylineVertexEditor",minLength:2,_getSegments:function(e){var t,n,o=e.paths,i=[];for(t=0;t<o.length;t++){var r=o[t],s=[];for(n=0;n<r.length;n++)s.push(e.getPoint(t,n));i.push(s)}return i},_getMidpointSegments:function(e){var t,n,o=e.paths,i=[],r=e.spatialReference;for(t=0;t<o.length;t++){var s=o[t],h=[];for(n=0;n<s.length-1;n++){var a=e.getPoint(t,n),c=e.getPoint(t,n+1),l=(a.x+c.x)/2,g=(a.y+c.y)/2,p=new d({x:l,y:g,spatialReference:r.toJson()});h.push(p)}i.push(h)}return i},_getControlPoints:function(e,t,n,o,i){var r,s,h,a,d=this.map;return this._isNew(e)?(s=o+1,(r=o)>=0&&(h=d.toScreen(t.getPoint(n,r))),s<=i&&(a=d.toScreen(t.getPoint(n,s)))):(s=o+1,(r=o-1)>=0&&(h=d.toScreen(t.getPoint(n,r))),s<i&&(a=d.toScreen(t.getPoint(n,s)))),[h,a]},_getAdjacentMidpoints:function(e,t){var n=[],o=e-1;o>=0&&n.push(o);var i=e;return i<t-1&&n.push(i),n},_getAdjacentVertices:function(e,t){return[e,e+1]},_deleteMidpoints:function(e){var t,n=e.segIndex,o=e.ptIndex,i=e.segLength,r=this._mpVertexMovers[n],s=r.length-1,h=this._getAdjacentMidpoints(o,i).sort(),c=h[0];for(t=0;t<c;t++)r[t].segLength-=1;for(t=c+1;t<r.length;t++){var l=r[t];l.ptIndex-=1,l.segLength-=1}if(1===h.length)r.splice(c,1)[0].destroy();else{var g=this._getAdjacentVertices(c,s),p=e.relatedGraphic.geometry.getPoint(e.segIndex,g[0]),_=e.relatedGraphic.geometry.getPoint(e.segIndex,g[1]),u=new d({x:(p.x+_.x)/2,y:(p.y+_.y)/2,spatialReference:p.spatialReference.toJson()}),f=new a(u,this._symbol2,this.graphic,e.segIndex,c,s,this,!0),x=r.splice(c,h.length,f);for(t=0;t<x.length;t++)x[t].destroy()}},_updateRelatedGraphic:function(e,t,n,o,i,r,s,h){var a=t.geometry;s?a.insertPoint(o,i+1,c.fromJson(n.toJson())):h?a.removePoint(o,i):a.setPoint(o,i,c.fromJson(n.toJson())),t.setGeometry(a)}}),g.PolygonVertexEditor=e(g,{declaredClass:"esri.toolbars._PolygonVertexEditor",minLength:3,_getSegments:function(e){var t,n,o=e.rings,i=[];for(t=0;t<o.length;t++){var r=o[t],s=[];for(n=0;n<r.length-1;n++)s.push(e.getPoint(t,n));i.push(s)}return i},_getMidpointSegments:function(e){var t,n,o=e.rings,i=[],r=e.spatialReference;for(t=0;t<o.length;t++){var s=o[t],h=[];for(n=0;n<s.length-1;n++){var a=e.getPoint(t,n),c=e.getPoint(t,n+1),l=(a.x+c.x)/2,g=(a.y+c.y)/2,p=new d({x:l,y:g,spatialReference:r.toJson()});h.push(p)}i.push(h)}return i},_getControlPoints:function(e,t,n,o,i){var r,s,h=this.map;return this._isNew(e)?(r=o,s=(o+1)%i):(r=(r=o-1)<0?(i+r)%i:r,s=(o+1)%i),[h.toScreen(t.getPoint(n,r)),h.toScreen(t.getPoint(n,s))]},_getAdjacentMidpoints:function(e,t){var n=e-1;return[n=n<0?(t+n)%t:n,e]},_getAdjacentVertices:function(e,t){return[e,(e+1)%t]},_deleteMidpoints:function(e){var t,n,o,i,r,s,h,c=e.segIndex,l=e.ptIndex,g=e.segLength,p=this._mpVertexMovers[c],_=p.length-1,u=this._getAdjacentMidpoints(l,g).sort(),f=u[0],x=u[u.length-1];if(0===l)for(t=this._getAdjacentVertices(_-1,_),n=e.relatedGraphic.geometry.getPoint(e.segIndex,t[0]),o=e.relatedGraphic.geometry.getPoint(e.segIndex,t[1]),i=new d({x:(n.x+o.x)/2,y:(n.y+o.y)/2,spatialReference:n.spatialReference.toJson()}),s=new a(i,this._symbol2,this.graphic,e.segIndex,_-1,_,this,!0),p.splice(x,1,s)[0].destroy(),p.splice(f,1)[0].destroy(),r=0;r<p.length-1;r++)(h=p[r]).ptIndex-=1,h.segLength-=1;else{t=this._getAdjacentVertices(f,_),n=e.relatedGraphic.geometry.getPoint(e.segIndex,t[0]),o=e.relatedGraphic.geometry.getPoint(e.segIndex,t[1]),i=new d({x:(n.x+o.x)/2,y:(n.y+o.y)/2,spatialReference:n.spatialReference.toJson()}),s=new a(i,this._symbol2,this.graphic,e.segIndex,f,_,this,!0);var v=p.splice(f,u.length,s);for(r=0;r<v.length;r++)v[r].destroy();for(r=0;r<f;r++)p[r].segLength-=1;for(r=f+1;r<p.length;r++)(h=p[r]).ptIndex-=1,h.segLength-=1}},_updateRelatedGraphic:function(e,t,n,o,i,r,s,h){var a=t.geometry;s?a.insertPoint(o,i+1,c.fromJson(n.toJson())):h?(a.removePoint(o,i),0===i&&a.setPoint(o,r-1,c.fromJson(a.getPoint(o,0).toJson()))):(a.setPoint(o,i,c.fromJson(n.toJson())),0===i&&a.setPoint(o,r,c.fromJson(n.toJson()))),t.setGeometry(a)}}),i("extend-esri")&&(t.setObject("toolbars._GraphicVertexEditor",g,h),t.setObject("toolbars._MultipointVertexEditor",g.MultipointVertexEditor,h),t.setObject("toolbars._PolylineVertexEditor",g.PolylineVertexEditor,h),t.setObject("toolbars._PolygonVertexEditor",g.PolygonVertexEditor,h)),g}));