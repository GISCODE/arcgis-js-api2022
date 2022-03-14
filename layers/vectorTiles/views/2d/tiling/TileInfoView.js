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

define(["require","exports","../../../geometry/support/spatialReferenceUtils","./LODInfo","./TileCoverage","./TileKey","./TileSpan"],(function(e,t,o,r,i,n,l){var s=new n("0/0/0/0"),a=function(){function e(e,t,o,r,i,n,l,s){this.x=e,this.ymin=t,this.ymax=o,this.invM=r,this.leftAdjust=i,this.rightAdjust=n,this.leftBound=l,this.rightBound=s}return e.create=function(t,o){t[1]>o[1]&&(t=(r=[o,t])[0],o=r[1]);var r,i=t[0],n=t[1],l=o[0],s=o[1],a=l-i,u=s-n,f=0!==u?a/u:0,h=(Math.ceil(n)-n)*f,c=(Math.floor(n)-n)*f;return new e(i,Math.floor(n),Math.ceil(s),f,a<0?h:c,a<0?c:h,a<0?l:i,a<0?i:l)},e.prototype.incrRow=function(){this.x+=this.invM},e.prototype.getLeftCol=function(){return Math.max(this.x+this.leftAdjust,this.leftBound)},e.prototype.getRightCol=function(){return Math.min(this.x+this.rightAdjust,this.rightBound)},e}(),u=[[0,0],[0,0],[0,0],[0,0]];return function(){function e(e,t){var o=this;this.tileInfo=e,this.fullExtent=t,this.scales=[],this._lodInfos=null,this._infoByScale={},this._infoByLevel={};var i=e.lods.slice();i.sort((function(e,t){return t.scale-e.scale}));var n=this._lodInfos=i.map((function(o){return r.create(e,o,t)}));i.forEach((function(e,t){o._infoByLevel[e.level]=n[t],o._infoByScale[e.scale]=n[t],o.scales[t]=e.scale}),this),this._wrap=e.isWrappable}return e.prototype.getLODInfoAt=function(e){return this._infoByLevel[e.level]},e.prototype.getTileBounds=function(e,t,o){void 0===o&&(o=!1),s.set(t);var r=this._infoByLevel[s.level];return r?r.getTileBounds(e,s,o):e},e.prototype.getTileCoords=function(e,t,o){void 0===o&&(o=!1),s.set(t);var r=this._infoByLevel[s.level];return r?r.getTileCoords(e,s,o):e},e.prototype.getTileCoverage=function(e,t,o){void 0===t&&(t=192),void 0===o&&(o="closest");var r,n,s,f="closest"===o?this.getClosestInfoForScale(e.scale):this.getSmallestInfoForScale(e.scale),h=i.pool.acquire(f),c=this._wrap,p=1/0,v=-1/0,d=h.spans;u[0][0]=u[0][1]=u[1][1]=u[3][0]=-t,u[1][0]=u[2][0]=e.size[0]+t,u[2][1]=u[3][1]=e.size[1]+t;for(var g=0,y=u;g<y.length;g++){var m=y[g];e.toMap(m,m),m[0]=f.getColumnForX(m[0]),m[1]=f.getRowForY(m[1])}for(var w=[],M=3,B=0;B<4;B++)if(u[B][1]!==u[M][1]){var _=a.create(u[B],u[M]);p=Math.min(_.ymin,p),v=Math.max(_.ymax,v),void 0===w[_.ymin]&&(w[_.ymin]=[]),w[_.ymin].push(_),M=B}else M=B;if(null==p||null==v||v-p>100)return null;var C=[];for(r=p;r<v;){null!=w[r]&&(C=C.concat(w[r])),n=1/0,s=-1/0;for(B=C.length-1;B>=0;B--){_=C[B];n=Math.min(n,_.getLeftCol()),s=Math.max(s,_.getRightCol())}if(n=Math.floor(n),s=Math.floor(s),r>=f.first[1]&&r<=f.last[1])if(c)if(f.size[0]<f.worldSize[0]){var S=Math.floor(s/f.worldSize[0]);for(B=Math.floor(n/f.worldSize[0]);B<=S;B++)d.push(new l(r,Math.max(f.getFirstColumnForWorld(B),n),Math.min(f.getLastColumnForWorld(B),s)))}else d.push(new l(r,n,s));else n>f.last[0]||s<f.first[0]||(n=Math.max(n,f.first[0]),s=Math.min(s,f.last[0]),d.push(new l(r,n,s)));r+=1;for(B=C.length-1;B>=0;B--){(_=C[B]).ymax>=r?_.incrRow():C.splice(B,1)}}return h},e.prototype.getTileIdAtParent=function(e,t){var o=n.pool.acquire(t),r=this._infoByLevel[o.level];if(e.resolution<r.resolution)throw new Error("Cannot calculate parent tile. destination LOD's resolution "+e.resolution+" is not a parent resolution of "+r.resolution);if(e.resolution===r.resolution)return o.id;var i=Math.floor(o.col*r.resolution/e.resolution+.01),l=Math.floor(o.row*r.resolution/e.resolution+.01);return n.getId(e.level,l,i,o.world)},e.prototype.getTileParentId=function(e){var t=n.pool.acquire(e),o=this._infoByLevel[t.level],r=this._lodInfos.indexOf(o)-1;if(r<0)return n.pool.release(t),null;var i=this._lodInfos[r],l=this.getTileIdAtParent(i,t);return n.pool.release(t),l},e.prototype.getTileResolution=function(e){var t=this._infoByLevel[e.level];return t?t.resolution:-1},e.prototype.getTileScale=function(e){var t=this._infoByLevel[e.level];return t?t.scale:-1},e.prototype.intersects=function(e,t){var o=n.pool.acquire(t),r=this._infoByLevel[o.level],i=e.lodInfo;if(i.resolution>r.resolution){var l=n.pool.acquire(this.getTileIdAtParent(i,o)),s=i.denormalizeCol(l.col,l.world),a=e.spans.some((function(e){return e.row===l.row&&e.colFrom<=s&&e.colTo>=s}));return n.pool.release(o),n.pool.release(l),a}if(i.resolution<r.resolution){var u=e.spans.reduce((function(e,t){return e[0]=Math.min(e[0],t.row),e[1]=Math.max(e[1],t.row),e[2]=Math.min(e[2],t.colFrom),e[3]=Math.max(e[3],t.colTo),e}),[1/0,-1/0,1/0,-1/0]),f=u[0],h=u[1],c=u[2],p=u[3],v=r.denormalizeCol(o.col,o.world),d=i.getColumnForX(r.getXForColumn(v)),g=i.getRowForY(r.getYForRow(o.row)),y=i.getColumnForX(r.getXForColumn(v+1))-1,m=i.getRowForY(r.getYForRow(o.row+1))-1;return n.pool.release(o),!(d>p||y<c||g>h||m<f)}var w=i.denormalizeCol(o.col,o.world),M=e.spans.some((function(e){return e.row===o.row&&e.colFrom<=w&&e.colTo>=w}));return n.pool.release(o),M},e.prototype.normalizeBounds=function(e,t,r){if(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],this._wrap){var i=o.getInfo(this.tileInfo.spatialReference),n=-r*(i.valid[1]-i.valid[0]);e[0]+=n,e[2]+=n}return e},e.prototype.getSmallestInfoForScale=function(e){var t=this.scales;if(this._infoByScale[e])return this._infoByScale[e];if(e>t[0])return this._infoByScale[t[0]];for(var o=1;o<t.length-1;o++)if(e>t[o]+1e-6)return this._infoByScale[t[o-1]];return this._infoByScale[t[t.length-1]]},e.prototype.getClosestInfoForScale=function(e){var t=this.scales;return this._infoByScale[e]?this._infoByScale[e]:(e=t.reduce((function(t,o,r,i){return Math.abs(o-e)<Math.abs(t-e)?o:t}),t[0]),this._infoByScale[e])},e}()}));