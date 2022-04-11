/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["require","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../geometry","../core/Error","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass","../geometry/support/aaBoundingRect","./Layer","./support/TileInfo","../geometry/SpatialReference","../geometry/Extent"],(function(e,t,r,o,n,i,a,l,p,s,c,u,y,d,f){"use strict";const v={id:"0/0/0",level:0,row:0,col:0,extent:null};let h=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).tileInfo=y.create({spatialReference:d.WebMercator,size:256}),e.fullExtent=new f(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,d.WebMercator),e.spatialReference=d.WebMercator,e.type="base-elevation",e}t._inheritsLoose(o,r);var i=o.prototype;return i.getTileBounds=function(e,t,r,o){const n=o||c.ZERO;return v.level=e,v.row=t,v.col=r,v.extent=n,this.tileInfo.updateTileInfo(v),v.extent=null,n},i.fetchTile=function(){throw new n("BaseElevationLayer:fetchtile-not-implemented","fetchTile() is not implemented")},i.queryElevation=function(e,t){return this._importElevationQuery().then((r=>(new r.ElevationQuery).query(this,e,t)))},i.createElevationSampler=function(e,t){return this._importElevationQuery().then((r=>(new r.ElevationQuery).createSampler(this,e,t)))},i._importElevationQuery=function(){return new Promise(((t,r)=>e(["./support/ElevationQuery"],t,r)))},o}(u);r.__decorate([i.property({type:y})],h.prototype,"tileInfo",void 0),r.__decorate([i.property({type:["show","hide"]})],h.prototype,"listMode",void 0),r.__decorate([i.property()],h.prototype,"fullExtent",void 0),r.__decorate([i.property()],h.prototype,"spatialReference",void 0),r.__decorate([i.property({readOnly:!0,value:"base-elevation"})],h.prototype,"type",void 0),h=r.__decorate([s.subclass("esri.layers.BaseElevationLayer")],h);return h}));
