/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../../../../../geometry.js";import e from"../../../../../core/has.js";import t from"../../../../../core/Logger.js";import{isNone as s,applySome as r,mapOr as i}from"../../../../../core/maybe.js";import{diff as o,hasDiff as a}from"../../../../../core/accessorSupport/diffUtils.js";import{GeohashTree as h}from"../../../../../geohash/GeohashTree.js";import{setGeohashBuf as n,setGeohashXY as d}from"../../../../../geohash/geohashUtils.js";import{earth as g}from"../../../../../geometry/support/Ellipsoid.js";import{getInfo as p}from"../../../../../geometry/support/spatialReferenceUtils.js";import{convertToGeometry as l,convertFromPolygon as c}from"../../../../../layers/graphics/featureConversionUtils.js";import{OptimizedFeature as u}from"../../../../../layers/graphics/OptimizedFeature.js";import f from"../../../../../layers/graphics/OptimizedGeometry.js";import{checkProjectionSupport as m,project as _}from"../../../../../layers/graphics/data/projectionSupport.js";import{createDisplayId as y}from"../../../engine/webgl/DisplayId.js";import{Store2D as I}from"../Store2D.js";import{FeatureSetReaderJSON as b}from"./FeatureSetReaderJSON.js";import x from"../../../../../geometry/SpatialReference.js";import j from"../../../../../geometry/Polygon.js";import v from"../../../../../geometry/Extent.js";const G=t.getLogger("esri.view.2d.layers.features.support.BinStore"),B=12,L=64,R=5;function S(e){return 57.29577951308232*e}class A extends I{constructor(e,t,s,r){super(e,s),this._geohashLevel=R,this._geohashBuf=[],this._serviceInfo=r,this.geometryInfo=e.geometryInfo,this._spatialReference=t,this._projectionSupportCheck=m(t,x.WGS84),this._bitsets.geohash=s.getBitset(s.createBitset()),this._bitsets.inserted=s.getBitset(s.createBitset())}destroy(){this._tree&&this._tree.destroy()}async updateSchema(t,r){const i=this._schema;try{await super.updateSchema(t,r),await this._projectionSupportCheck}catch(d){}const n=o(i,r);r&&(!s(n)||t.source||t.storage.filters)?((a(n,"params.fields")||a(n,"params")||!this._tree||t.source)&&(this._tree&&this._tree.destroy(),this._tree=new h(this._statisticFields,this._serviceInfo),this._tree.onRelease=e=>e.displayId&&this._storage.releaseDisplayId(e.displayId),this._geohashLevel=this._schema.params.fixedBinLevel,this._rebuildTree(),e("esri-2d-update-debug")&&G.info("Aggregate mesh needs update due to tree changing")),e("esri-2d-update-debug")&&G.info("Aggregate mesh needs update due to tree changing"),t.targets[r.name]=!0,t.mesh=!1):i&&(t.mesh=!0)}clear(){this._rebuildTree()}sweepFeatures(e,t){this._bitsets.inserted.forEachSet((s=>{if(!e.has(s)){const e=t.lookupByDisplayIdUnsafe(s);this._remove(e)}}))}sweepAggregates(e,t,s){}onTileData(e,t,r,i,o=!0){if(!this._schema||s(t.addOrUpdate))return t;const a=this._getTransforms(e,this._spatialReference);{const e=t.addOrUpdate.getCursor();for(;e.next();)this._update(e,i)}if(t.status.mesh||!o)return t;const h=new Array;this._getBinsForTile(h,e,a,r),t.addOrUpdate=b.fromOptimizedFeatures(h,{...this._serviceInfo,geometryType:"esriGeometryPolygon"}),t.addOrUpdate.attachStorage(r),t.clear=!0,t.end=!0;{const s=t.addOrUpdate.getCursor();for(;s.next();){const t=s.getDisplayId();this._bitsets.computed.unset(t),this.setComputedAttributes(r,s,t,e.scale)}}return t}forEach(e){this._tree.forEach(e)}onTileUpdate(e){}getAggregate(e){const t=y(e,!0),s=this._tree.findIf((e=>e.displayId===t));return r(s,(e=>this._toAggregateGraphic(e)))}getAggregates(){return this._tree.findAllIf((e=>e.depth===this._geohashLevel)).map(this._toAggregateGraphic.bind(this))}getDisplayId(e){const t=this._tree.findIf((t=>t.id===e));return r(t,(e=>e.displayId))}getFeatureDisplayIdsForAggregate(e){const t=this._tree.findIf((t=>t.id===e));return i(t,[],(e=>Array.from(e.displayIds)))}getDisplayIdForReferenceId(e){const t=this._tree.findIf((t=>1===t.displayIds.size&&t.displayIds.has(e)));return r(t,(e=>e.displayId))}_toAggregateGraphic(e){const t=this._spatialReference;return{referenceId:null,objectId:e.id,displayId:e.displayId,attributes:e.getAttributes(),geometry:l(e.getGeometry(t),"esriGeometryPolygon",!1,!1),centroid:null}}_rebuildTree(){this._bitsets.computed.clear(),this._bitsets.inserted.clear(),this._tree&&this._tree.clear()}_remove(e){const t=e.getDisplayId(),s=e.getXHydrated(),r=e.getYHydrated(),i=this._geohashBuf[2*t],o=this._geohashBuf[2*t+1];this._bitsets.inserted.has(t)&&(this._bitsets.inserted.unset(t),this._tree.removeCursor(e,s,r,i,o,this._geohashLevel))}_update(e,t){const s=e.getDisplayId(),r=this._bitsets.inserted,i=t.isVisible(s);if(i===r.has(s))return;if(!i)return void this._remove(e);const o=e.getXHydrated(),a=e.getYHydrated();if(!this._setGeohash(s,o,a))return;const h=this._geohashBuf[2*s],n=this._geohashBuf[2*s+1];this._tree.insertCursor(e,s,o,a,h,n,this._geohashLevel),r.set(s)}_setGeohash(e,t,s){if(this._bitsets.geohash.has(e))return!0;const r=this._geohashBuf;if(this._spatialReference.isWebMercator){const i=S(t/g.radius),o=i-360*Math.floor((i+180)/360),a=S(Math.PI/2-2*Math.atan(Math.exp(-s/g.radius)));n(r,e,a,o,B)}else{const i=_({x:t,y:s},this._spatialReference,x.WGS84);if(!i)return!1;n(r,e,i.y,i.x,B)}return this._bitsets.geohash.set(e),!0}_getBinsForTile(e,t,s,r){try{const{xLL:i,yLL:o,xTR:a,yTR:h,level:n}=this._getGeohashBounds(t),d=this._tree.getBins(i,o,a,h,n);for(const t of d){t.displayId||(t.displayId=r.createDisplayId(!0));const i=t.getGeometry(this._spatialReference,s.tile),o=new u(i,t.getAttributes());o.objectId=t.id,o.displayId=t.displayId,e.push(o)}}catch(i){return void G.error("Unable to get bins for tile",t.key.id)}}_getGeohash(e,t,s){const r={geohashX:0,geohashY:0};return d(r,t,e,s),r}_getGeohashBounds(e){const t=this._getGeohashLevel(e.key.level),s=[e.extent.xmin,e.extent.ymin,e.extent.xmax,e.extent.ymax],r=j.fromExtent(v.fromBounds(s,this._spatialReference)),i=_(r,this._spatialReference,x.WGS84,{densificationStep:e.resolution*L}),o=c(new f,i,!1,!1),a=o.coords.filter(((e,t)=>!(t%2))),h=o.coords.filter(((e,t)=>t%2)),n=Math.min(...a),d=Math.min(...h),g=Math.max(...a),p=Math.max(...h),l=this._getGeohash(n,d,t),u=this._getGeohash(g,p,t);return{xLL:l.geohashX,yLL:l.geohashY,xTR:u.geohashX,yTR:u.geohashY,level:t}}_getGeohashLevel(e){return this._schema.params.fixedBinLevel}_getTransforms(e,t){const s={originPosition:"upperLeft",scale:[e.resolution,e.resolution],translate:[e.bounds[0],e.bounds[3]]},r=p(t);if(!r)return{tile:s,left:null,right:null};const[i,o]=r.valid;return{tile:s,left:{...s,translate:[o,e.bounds[3]]},right:{...s,translate:[i-o+e.bounds[0],e.bounds[3]]}}}}export{A as BinStore};