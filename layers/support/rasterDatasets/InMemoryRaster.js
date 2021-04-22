/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/maybe","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/Error","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../core/promiseUtils","../../../geometry/SpatialReference","../../../geometry/Extent","../../../geometry","../RasterInfo","../rasterFunctions/pixelUtils","./BaseRaster"],(function(e,t,s,r,i,a,o,n,l,c,p,h,m,u,d,y,f,x,g){"use strict";let v=function(t){function s(){var e;return(e=t.apply(this,arguments)||this).datasetFormat="MEMORY",e}e._inheritsLoose(s,t);var i=s.prototype;return i.open=async function(e){var t;await this.init();const{pixelBlock:s,statistics:r,histograms:i,name:a,keyProperties:o,nativeExtent:n,transform:l}=this.data,{width:c,height:p,pixelType:h}=s,m=this.data.extent||new d({xmin:-.5,ymin:.5,xmax:c-.5,ymax:p-.5,spatialReference:new u({wkid:3857})}),y=null!=(t=this.data.isPseudoSpatialReference)?t:!this.data.extent,x={x:m.width/c,y:m.height/p},g=new f({width:c,height:p,pixelType:h,extent:m,nativeExtent:n,transform:l,pixelSize:x,spatialReference:m.spatialReference,bandCount:3,keyProperties:o||{},statistics:r,isPseudoSpatialReference:y,histograms:i});this.createRemoteDatasetStorageInfo(g,512,512),this._set("rasterInfo",g),this.updateTileInfo(),await this._buildInMemoryRaster(s,{width:512,height:512},e),this.datasetName=a,this.url="/InMemory/"+a},i.fetchRawTile=function(e,t,s,r={}){const i=this._pixelBlockTiles.get(`${e}/${t}/${s}`);return Promise.resolve(i)},i._buildInMemoryRaster=async function(e,t,s){const i=this.rasterInfo.storageInfo.maximumPyramidLevel,a=this.rasterJobHandler?this.rasterJobHandler.split({pixelBlock:e,tileSize:t,maximumPyramidLevel:i},s):Promise.resolve(x.split(e,t,i)),o=r.isSome(this.rasterInfo.statistics),n=r.isSome(this.rasterInfo.histograms),c=o&&n?Promise.resolve({statistics:null,histograms:null}):this.rasterJobHandler?this.rasterJobHandler.estimateStatisticsHistograms({pixelBlock:e},s):Promise.resolve(x.estimateStatisticsHistograms(e)),p=await m.eachAlways([a,c]);if(!p[0].value&&p[1].value)throw new l("inmemory-raster:open","failed to build in memory raster");var h,u;(this._pixelBlockTiles=p[0].value,o)||(this.rasterInfo.statistics=null==(h=p[1].value)?void 0:h.statistics);n&&(this.rasterInfo.histograms=null==(u=p[1].value)?void 0:u.histograms)},s}(g);return t.__decorate([o.property({type:String,json:{write:!0}})],v.prototype,"datasetFormat",void 0),t.__decorate([o.property()],v.prototype,"data",void 0),v=t.__decorate([n.subclass("esri.layers.support.rasterDatasets.InMemoryRaster")],v),v}));