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

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","dojo/io-query","../../request","../../core/Accessor","../../core/Error","../../core/Handles","../../core/Logger","../../core/LRUMap","../../core/promiseUtils","../../core/watchUtils","../../core/accessorSupport/decorators","./Tilemap"],(function(e,t,i,l,r,a,n,o,s,p,c,u,h,v,y,f){var m=c.getLogger("esri.layers.support.TilemapCache");return function(e){function t(t){var i=e.call(this)||this;return i._handles=new p,i._pendingTilemapRequests={},i._availableLevels={},i.levels=5,i.cacheByteSize=2097152,i.request=n,i}return l(t,e),t.prototype.initialize=function(){var e=this;this._tilemapCache=new u(this.cacheByteSize,{sizeOfFunction:function(e){return e.byteSize}}),this._handles.add([this.watch(["layer.parsedUrl","layer.tileServers"],(function(){return e._initializeTilemapDefinition()})),v.init(this,"layer.tileInfo.lods",(function(t){return e._initializeAvailableLevels(t)}),!0)]),this._initializeTilemapDefinition()},t.prototype.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null)},t.prototype.castLevels=function(e){return e<=2?(m.error("Minimum levels for Tilemap is 3, but got ",e),3):e},Object.defineProperty(t.prototype,"size",{get:function(){return 1<<this.levels},enumerable:!0,configurable:!0}),t.prototype.getTilemap=function(e,t,i){return this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition)},t.prototype.fetchTilemap=function(e,t,i,l){var r=this;if(!this._availableLevels[e])return h.reject(new s("tilemap-cache:level-unavailable","Level "+e+" is unavailable in the service"));var a=this._tmpTilemapDefinition,n=this._tilemapFromCache(e,t,i,a);if(n)return h.resolve(n);var o=f.tilemapDefinitionId(a),p=this._pendingTilemapRequests[o];return p||(p=f.Tilemap.fromDefinition(a,l).then((function(e){return r._tilemapCache.set(o,e),delete r._pendingTilemapRequests[o],e})).catch((function(e){return delete r._pendingTilemapRequests[o],h.reject(e)})),this._pendingTilemapRequests[o]=p),h.create((function(e,t){p.then(e,t)}))},t.prototype.getAvailability=function(e,t,i){if(!this._availableLevels[e])return"unavailable";var l=this.getTilemap(e,t,i);return l?l.getAvailability(t,i):"unknown"},t.prototype.getAvailabilityUpsample=function(e,t,i,l){l.level=e,l.row=t,l.col=i;var r=this.layer.tileInfo;for(r.updateTileInfo(l);;){var a=this.getAvailability(l.level,l.row,l.col);if("unavailable"!==a)return a;if(!r.upsampleTile(l))return"unavailable"}},t.prototype.fetchAvailability=function(e,t,i,l){return this._availableLevels[e]?this.fetchTilemap(e,t,i,l).always((function(l){if(l instanceof f.Tilemap){var r=l.getAvailability(t,i);return"unavailable"===r?h.reject(new s("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):r}return l&&"cancel"===l.dojoType?h.reject(l):"unknown"})):h.reject(new s("tilemap-cache:level-unavailable","Level "+e+" is unavailable in the service"))},t.prototype.fetchAvailabilityUpsample=function(e,t,i,l,r){var a=this;l.level=e,l.row=t,l.col=i;var n=this.layer.tileInfo;return n.updateTileInfo(l),this.fetchAvailability(e,t,i,r).catch((function(e){return e&&"cancel"===e.dojoType?h.reject(e):n.upsampleTile(l)?a.fetchAvailabilityUpsample(l.level,l.row,l.col,l):h.reject(e)}))},t.prototype._initializeTilemapDefinition=function(){if(this.layer.parsedUrl){var e=this.layer.parsedUrl,t=e.query;t&&t.token||!this.layer.token||(t=i({},t,{token:this.layer.token})),this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:t?a.objectToQuery(t):null,tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}},t.prototype._tilemapFromCache=function(e,t,i,l){var r=this._getTilemapDefinition(e,t,i,l),a=f.tilemapDefinitionId(r);return this._tilemapCache.get(a)},t.prototype._getTilemapDefinition=function(e,t,i,l){return l.level=e,l.row=t-t%this.size,l.col=i-i%this.size,l},t.prototype._initializeAvailableLevels=function(e){var t=this;this._availableLevels={},e&&e.forEach((function(e){return t._availableLevels[e.level]=!0}))},r([y.property({constructOnly:!0,type:Number})],t.prototype,"levels",void 0),r([y.cast("levels")],t.prototype,"castLevels",null),r([y.property({readOnly:!0,dependsOn:["levels"],type:Number})],t.prototype,"size",null),r([y.property({constructOnly:!0,type:Number})],t.prototype,"cacheByteSize",void 0),r([y.property({constructOnly:!0})],t.prototype,"layer",void 0),r([y.property({constructOnly:!0})],t.prototype,"request",void 0),t=r([y.subclass("esri.layers.support.TilemapCache")],t)}(y.declared(o))}));