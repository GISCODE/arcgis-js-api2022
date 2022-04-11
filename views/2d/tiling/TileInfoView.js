/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../geometry/support/spatialReferenceUtils","./LODInfo","./TileCoverage","./TileKey","./TileSpan"],(function(t,e,o,n,l,i){"use strict";const s=new l("0/0/0/0");let r=function(){function t(t,e,o,n,l,i,s,r){this.x=t,this.ymin=e,this.ymax=o,this.invM=n,this.leftAdjust=l,this.rightAdjust=i,this.leftBound=s,this.rightBound=r}t.create=function(e,o){e[1]>o[1]&&([e,o]=[o,e]);const[n,l]=e,[i,s]=o,r=i-n,c=s-l,a=0!==c?r/c:0,f=(Math.ceil(l)-l)*a,u=(Math.floor(l)-l)*a;return new t(n,Math.floor(l),Math.ceil(s),a,r<0?f:u,r<0?u:f,r<0?i:n,r<0?n:i)};var e=t.prototype;return e.incrRow=function(){this.x+=this.invM},e.getLeftCol=function(){return Math.max(this.x+this.leftAdjust,this.leftBound)},e.getRightCol=function(){return Math.min(this.x+this.rightAdjust,this.rightBound)},t}();const c=[[0,0],[0,0],[0,0],[0,0]],a=1e-6;return function(){function l(t,e=null){this.tileInfo=t,this.fullExtent=e,this.scales=[],this._lodInfos=null,this._infoByScale={},this._infoByLevel={};const n=t.lods.slice();n.sort((function(t,e){return e.scale-t.scale}));const l=this._lodInfos=n.map((n=>o.create(t,n,e)));n.forEach(((t,e)=>{this._infoByLevel[t.level]=l[e],this._infoByScale[t.scale]=l[e],this.scales[e]=t.scale}),this),this._wrap=t.isWrappable}var f=l.prototype;return f.getLODInfoAt=function(t){return this._infoByLevel["number"==typeof t?t:t.level]},f.getTileBounds=function(t,e,o=!1){s.set(e);const n=this._infoByLevel[s.level];return n?n.getTileBounds(t,s,o):t},f.getTileCoords=function(t,e,o=!1){s.set(e);const n=this._infoByLevel[s.level];return n?n.getTileCoords(t,s,o):t},f.getTileCoverage=function(t,e=192,o="closest"){const l="closest"===o?this.getClosestInfoForScale(t.scale):this.getSmallestInfoForScale(t.scale),s=n.pool.acquire(l),a=this._wrap;let f,u,h,g=1/0,m=-1/0;const d=s.spans;c[0][0]=c[0][1]=c[1][1]=c[3][0]=-e,c[1][0]=c[2][0]=t.size[0]+e,c[2][1]=c[3][1]=t.size[1]+e;for(const n of c)t.toMap(n,n),n[0]=l.getColumnForX(n[0]),n[1]=l.getRowForY(n[1]);const y=[];let _=3;for(let n=0;n<4;n++){if(c[n][1]===c[_][1]){_=n;continue}const t=r.create(c[n],c[_]);g=Math.min(t.ymin,g),m=Math.max(t.ymax,m),void 0===y[t.ymin]&&(y[t.ymin]=[]),y[t.ymin].push(t),_=n}if(null==g||null==m||m-g>100)return null;let v=[];for(f=g;f<m;){null!=y[f]&&(v=v.concat(y[f])),u=1/0,h=-1/0;for(let t=v.length-1;t>=0;t--){const e=v[t];u=Math.min(u,e.getLeftCol()),h=Math.max(h,e.getRightCol())}if(u=Math.floor(u),h=Math.floor(h),f>=l.first[1]&&f<=l.last[1])if(a)if(l.size[0]<l.worldSize[0]){const t=Math.floor(h/l.worldSize[0]);for(let e=Math.floor(u/l.worldSize[0]);e<=t;e++)d.push(new i(f,Math.max(l.getFirstColumnForWorld(e),u),Math.min(l.getLastColumnForWorld(e),h)))}else d.push(new i(f,u,h));else u>l.last[0]||h<l.first[0]||(u=Math.max(u,l.first[0]),h=Math.min(h,l.last[0]),d.push(new i(f,u,h)));f+=1;for(let t=v.length-1;t>=0;t--){const e=v[t];e.ymax>=f?e.incrRow():v.splice(t,1)}}return s},f.getTileParentId=function(t){s.set(t);const e=this._infoByLevel[s.level],o=this._lodInfos.indexOf(e)-1;return o<0?null:(this._getTileIdAtLOD(s,this._lodInfos[o],s),s.id)},f.getTileResolution=function(t){const e=this._infoByLevel["object"==typeof t?t.level:t];return e?e.resolution:-1},f.getTileScale=function(t){const e=this._infoByLevel[t.level];return e?e.scale:-1},f.intersects=function(t,e){s.set(e);const o=this._infoByLevel[s.level],n=t.lodInfo;if(n.resolution>o.resolution){this._getTileIdAtLOD(s,n,s);const e=n.denormalizeCol(s.col,s.world);for(const o of t.spans)if(o.row===s.row&&o.colFrom<=e&&o.colTo>=e)return!0}if(n.resolution<o.resolution){const[e,l,i,r]=t.spans.reduce(((t,e)=>(t[0]=Math.min(t[0],e.row),t[1]=Math.max(t[1],e.row),t[2]=Math.min(t[2],e.colFrom),t[3]=Math.max(t[3],e.colTo),t)),[1/0,-1/0,1/0,-1/0]),c=o.denormalizeCol(s.col,s.world),a=n.getColumnForX(o.getXForColumn(c)),f=n.getRowForY(o.getYForRow(s.row)),u=n.getColumnForX(o.getXForColumn(c+1))-1,h=n.getRowForY(o.getYForRow(s.row+1))-1;return!(a>r||u<i||f>l||h<e)}const l=n.denormalizeCol(s.col,s.world),i=t.spans.some((t=>t.row===s.row&&t.colFrom<=l&&t.colTo>=l));return i},f.normalizeBounds=function(t,o,n){if(t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=o[3],this._wrap){const o=e.getInfo(this.tileInfo.spatialReference),l=-n*(o.valid[1]-o.valid[0]);t[0]+=l,t[2]+=l}return t},f.getSmallestInfoForScale=function(t){const e=this.scales;if(this._infoByScale[t])return this._infoByScale[t];if(t>e[0])return this._infoByScale[e[0]];for(let o=1;o<e.length-1;o++)if(t>e[o]+a)return this._infoByScale[e[o-1]];return this._infoByScale[e[e.length-1]]},f.getClosestInfoForScale=function(t){const e=this.scales;return this._infoByScale[t]||(t=e.reduce(((e,o)=>Math.abs(o-t)<Math.abs(e-t)?o:e),e[0])),this._infoByScale[t]},f.scaleToLevel=function(t){const e=this.scales;if(this._infoByScale[t])return this._infoByScale[t].level;for(let o=e.length-1;o>=0;o--)if(t<e[o]){if(o===e.length-1)return this._infoByScale[e[e.length-1]].level;return this._infoByScale[e[o]].level+(e[o]-t)/(e[o]-e[o+1])}return this._infoByScale[e[0]].level},f.scaleToZoom=function(t){return this.tileInfo.scaleToZoom(t)},f._getTileIdAtLOD=function(t,e,o){const n=this._infoByLevel[o.level];return t.set(o),e.resolution<n.resolution?null:(e.resolution===n.resolution||(t.level=e.level,t.col=Math.floor(o.col*n.resolution/e.resolution+.01),t.row=Math.floor(o.row*n.resolution/e.resolution+.01)),t)},t._createClass(l,[{key:"spatialReference",get:function(){return this.tileInfo.spatialReference}}]),l}()}));
