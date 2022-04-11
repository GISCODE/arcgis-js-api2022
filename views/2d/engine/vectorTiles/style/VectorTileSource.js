/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/lang","../../../../../core/urlUtils","../../../../../geometry/Extent","../../../../../layers/support/serviceTileInfoProperty","../../../../../layers/support/TilemapCache","../TilemapIndex","../TilemapRequest","./VectorTilesRequestManager"],(function(e,t,i,l,r,n,s,o,a){"use strict";let u=function(){function u(e,a,u){this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.name=e,this.sourceUrl=a;const p=i.urlToObject(this.sourceUrl),c=t.clone(u),h=c.tiles;if(p)for(let t=0;t<h.length;t++){const e=i.urlToObject(h[t]);e&&(i.isAbsolute(e.path)||(e.path=i.join(p.path,e.path)),h[t]=i.addQueryParameters(e.path,{...p.query,...e.query}))}this.tileServers=h;const f=u.capabilities&&u.capabilities.split(",").map((e=>e.toLowerCase().trim())),d=!0===(null==u?void 0:u.exportTilesAllowed),m=!0===(null==f?void 0:f.includes("tilemap")),y=d&&u.hasOwnProperty("maxExportTilesCount")?u.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:d,supportsTileMap:m},exportTiles:d?{maxExportTilesCount:+y}:null},this.tileInfo=r.readServiceTileInfo(c.tileInfo,c,null,{ignoreMinMaxLOD:!0});const T=u.tileMap?i.addQueryParameters(i.join(p.path,u.tileMap),p.query):null;m?(this.type="vector-tile",this.tilemap=new o(new n.TilemapCache({layer:{parsedUrl:p,tileInfo:this.tileInfo,type:"vector-tile",tileServers:this.tileServers}}),T)):T&&(this.tilemap=new s(T)),this.fullExtent=l.fromJSON(u.fullExtent)}var p=u.prototype;return p.destroy=function(){},p.getRefKey=function(){var t=e._asyncToGenerator((function*(e,t){var i,l;return null!=(i=null==(l=this.tilemap)?void 0:l.dataKey(e,t))?i:e}));function i(e,i){return t.apply(this,arguments)}return i}(),p.requestTile=function(e,t,i,l){const r=this.tileServers[t%this.tileServers.length];return a.request(r,e,t,i,l)},p.isCompatibleWith=function(e){const t=this.tileInfo,i=e.tileInfo;if(!t.spatialReference.equals(i.spatialReference))return!1;if(!t.origin.equals(i.origin))return!1;if(Math.round(t.dpi)!==Math.round(i.dpi))return!1;const l=t.lods,r=i.lods,n=Math.min(l.length,r.length);for(let s=0;s<n;s++){const e=l[s],t=r[s];if(e.level!==t.level||Math.round(e.scale)!==Math.round(t.scale))return!1}return!0},u}();return u}));
