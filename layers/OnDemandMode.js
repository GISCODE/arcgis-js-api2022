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

define(["dojo/_base/declare","dojo/_base/connect","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../geometry/Point","../tasks/query","./RenderMode","./GridLayout"],(function(e,t,r,i,a,s,n,o,u,l){var h=e([u],{declaredClass:"esri.layers._OnDemandMode",constructor:function(e){this.featureLayer=e,this._featureMap={}},initialize:function(e){this.inherited(arguments),this._cellMap={},this._gridLayer=l.createFromFeatureLayer({layer:this.featureLayer,map:e})},startup:function(){this._started&&!this._isSuspendedAtStartup||(this.inherited(arguments),this._ioQueue=[],this._isSuspendedAtStartup=this.featureLayer.suspended,this.featureLayer.suspended||(this._zoomHandler(),this._enableConnectors()))},propertyChangeHandler:function(e){this._init&&(e<2?this._zoomHandler():console.log("FeatureLayer: layer in on-demand mode does not support time definitions. Layer id = "+this.featureLayer.id+", Layer URL = "+this.featureLayer.url))},destroy:function(){this._disableConnectors(),this._processIOQueue(!0),this.inherited(arguments)},drawFeature:function(e){var t,r=this._gridLayer,i=e.geometry;if(i){t=r.getCellsInExtent("point"===i.type?{xmin:i.x,ymin:i.y,xmax:i.x,ymax:i.y}:i.getExtent(),!1).cells;var a,s,n,o,u,l=this._cellMap,h=e.attributes[this.featureLayer.objectIdField];for(a=0;a<t.length;a++)n=(s=t[a]).latticeID,o=s.row,u=s.col,n?s=l[n]=l[n]||s:(l[o]=l[o]||{},s=l[o][u]=l[o][u]||s),s.features=s.features||[],s.features.push(e),this._addFeatureIIf(h,e),this._incRefCount(h)}},suspend:function(){this._init&&this._disableConnectors()},resume:function(){this._init&&(this._enableConnectors(),this._zoomHandler())},refresh:function(){this._zoomHandler()},hasAllFeatures:function(){var e,t=!1,r=this._getCurrentCells();for(e=0;e<r.length;e++)if(r[e].hasPartialFeatures){t=!0;break}return!t},hasUpdateError:function(){var e,t=!1,r=this._getCurrentCells();for(e=0;e<r.length;e++)if(r[e].hasUpdateError){t=!0;break}return t},canFetchPBF:function(e){return this.inherited(arguments)&&this.featureLayer._canFetchPBFForQuery(e)},_enableConnectors:function(){var e=this.map;this._zoomConnect=t.connect(e,"onZoomEnd",this,this._zoomHandler),this._panConnect=t.connect(e,"onPanEnd",this,this._panHandler),this._resizeConnect=t.connect(e,"onResize",this,this._panHandler)},_disableConnectors:function(){t.disconnect(this._zoomConnect),t.disconnect(this._panConnect),t.disconnect(this._resizeConnect)},_zoomHandler:function(){this._processIOQueue(!0);var e=this.featureLayer,t=this.map;if(!e.suspended&&e.isQueryable()){e._fireUpdateStart(),this._clearIIf();var r=e._trackManager;r&&r.clearTracks(),this._cellMap={},this._gridLayer.setResolution(t.extent),this._sendRequest()}},_panHandler:function(){if(this.featureLayer.isQueryable()){this.featureLayer._fireUpdateStart();var e=this.featureLayer._resized,t=e?arguments[0]:null;e&&this._gridLayer.setMapState(t,this.map.width,this.map.height),this._sendRequest(t)}},_sendRequest:function(e){this._exceeds=!1;var t,a=this.featureLayer,s=this.map,n=e||s.extent,o=this._gridLayer.getCellsInExtent(n,a.latticeTiling).cells;if(!a.isEditable()){var u=this._cellMap;o=i.filter(o,(function(e){if(e.lattice){if(u[e.latticeID])return!1}else if(u[e.row]&&u[e.row][e.col])return!1;return!0}))}for(this._pending=this._pending||0,t=0;t<o.length;t++){var l=o[t],h=this._createQueryInfo(l);this._pending++,this._ioQueue.push(a._task.execute(h.query,r.hitch(this,this._drawFeatures,l),r.hitch(this,this._queryErrorHandler,l),h.pbf?{format:"pbf"}:null))}this._removeOldCells(n),this._endCheck()},_drawFeatures:function(e,t){this.featureLayer._isImageService&&this.featureLayer.version<10.7&&void 0===t.exceededTransferLimit&&(t.exceededTransferLimit=t.features.length===this.featureLayer.maxRecordCount),e.hasPartialFeatures=!!t.exceededTransferLimit,e.hasUpdateError=!1,this._exceeds=this._exceeds||t.exceededTransferLimit,this._finalizeIO();var r,i,a=this.featureLayer,s=this.map.extent,n=e.extent,o=e.row,u=e.col,l=a.objectIdField,h=t.features,d=this._gridLayer,c=this._cellMap,_=e.latticeID,f=_?c[_]:c[o]&&c[o][u];if(e.resolution==d.resolution&&(_?_===d.getLatticeID(s):d.intersects(n,s)))if(f)a._sortFeatures(h),this._updateCell(f,h);else for(a._sortFeatures(h),e.features=h,this._addCellToCellMap(e),i=h.length,r=0;r<i;r++){var p=h[r],y=p.attributes[l];this._addFeatureIIf(y,p),this._incRefCount(y)}else f&&this._removeCell(o,u,_);this._endCheck()},_queryErrorHandler:function(e,t){this._finalizeIO(),e.hasPartialFeatures=!0,e.hasUpdateError=!0,this._addCellToCellMap(e),this.featureLayer._errorHandler(t),this._endCheck(t)},_finalizeIO:function(){this._pending--},_endCheck:function(e){if(0===this._pending){this._processIOQueue();var t=this.featureLayer,r=t._trackManager;r&&(r.clearTracks(),r.addFeatures(t.graphics),t._ager&&i.forEach(t.graphics,(function(e){e._shape&&t._repaint(e)})),r.moveLatestToFront(),r.drawTracks()),this.featureLayer._fireUpdateEnd(!!e&&new Error("FeatureLayer: "+(e.message||"an error occurred while updating the layer.")),this._exceeds?{queryLimitExceeded:!0}:null),this._exceeds&&t.onQueryLimitExceeded()}},_processIOQueue:function(e){this._ioQueue=i.filter(this._ioQueue,(function(e){return!(e.fired>-1)})),e&&i.forEach(this._ioQueue,this._cancelPendingRequest)},_createQueryInfo:function(e){var t=this.featureLayer,r=new o;r.outFields=t.getOutFields(),r.where=t._getAttributeFilter(),r.returnGeometry=!0,r.geometry=e.extent||e.lattice,t.latticeTiling&&e.extent&&(r.spatialRelationship=o.SPATIAL_REL_CONTAINS),r.timeExtent=t._getOffsettedTE(t._mapTimeExtent),r.maxAllowableOffset=t._maxOffset,r.quantizationParameters=t._quantizationParameters,r.orderByFields=t.supportsAdvancedQueries?t.getOrderByFields():null,r.multipatchOption=t.multipatchOption,t._ts&&(r._ts=(new Date).getTime());var i=t.advancedQueryCapabilities;i&&i.supportsQueryWithResultType&&(r.resultType="tile");var a=this.canFetchPBF(r);return t._enableEditModeQuantization(r,a),{query:r,pbf:a}},_getCurrentCells:function(e){var t,r=[],i=e||this._cellMap;for(t in i)if(i.hasOwnProperty(t)){var a=i[t];a&&(a.hasOwnProperty("row")||a.hasOwnProperty("latticeID")?r.push(a):"object"==typeof a&&r.push.apply(r,this._getCurrentCells(a)))}return r},_addCellToCellMap:function(e){var t=this._cellMap;if(e.latticeID)t[e.latticeID]=e;else{var r=e.row,i=e.col;t[r]=t[r]||{},t[r][i]=e}},_removeOldCells:function(e){var t,r,i=this._cellMap,a=this._gridLayer;for(t in i)if(i[t]){var s=i[t],n=s.latticeID,o=0,u=0;if(n)o++,n!==a.getLatticeID(e)&&(this._removeCell(null,null,n),u++);else for(r in s)if(s[r]){o++;var l=s[r].extent;a.intersects(l,e)||(this._removeCell(t,r),u++)}u===o&&delete i[t]}},_updateCell:function(e,t){var r,i=this.featureLayer,a=i.objectIdField,s=i._selectedFeatures,n=t.length;for(e.features=e.features||[],r=0;r<n;r++){var o=t[r],u=o.attributes[a],l=this._addFeatureIIf(u,o);l===o?(this._incRefCount(u),e.features.push(l)):u in s||(l.setGeometry(o.geometry),l.setAttributes(o.attributes))}},_removeCell:function(e,t,r){var i=this._cellMap,a=this.featureLayer,s=a.objectIdField,n=r?i[r]:i[e]&&i[e][t];if(n){r?delete i[r]:delete i[e][t];var o,u=n.features;if(!u)return;for(o=0;o<u.length;o++){var l=u[o].attributes[s];this._decRefCount(l),l in a._selectedFeatures||this._removeFeatureIIf(l)}}}});return a("extend-esri")&&r.setObject("layers._OnDemandMode",h,s),h}));