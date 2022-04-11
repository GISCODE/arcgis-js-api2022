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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/Deferred","dojo/_base/array","dojo/_base/config","dojo/_base/json","dojo/sniff","dojo/DeferredList","dojo/when","../../../kernel","../../../Evented","../../../request","../../../geometry/Extent","../../../geometry/Point","../../../SpatialReference","../../../deferredUtils","../../../urlUtils","../../PixelBlock","../../rasterFormats/rasterCodec","../tile/RasterTileInfo","./RasterInfo","./BasicRaster"],(function(e,t,r,i,n,a,o,s,l,f,c,h,d,u,p,g,_,m,x,I,y,b,S){var R=t([S],{declaredClass:"esri.layers.rasterLib.raster.TileRaster",sourceType:"TileCache",_RECORD_SIZE:8,constructor:function(e){this._cloudBlobStorage=e&&e._cloudBlobStorage},open:function(){var e=new i,t=this.datasetInfo||this._getDatasetInfo(null),n=r.hitch(this,(function(t){this.datasetInfo=t;var r=this._parseRasterInfo(t);this.rasterInfo=r,this.tileType="Cache/LERC"===r.format?"Elevation":"Cache/MIXED"===r.format||"Cache/JPEG"===r.format||"Cache/PNG"===r.format?"Map":"Raster",this.tileInfo=r.tileInfo,this.dataType=["Generic","Elevation","Processed"][["Raster","Elevation","Map"].indexOf(this.tileType)],this._HEADER_SIZE=r.packetSize*r.packetSize*this._RECORD_SIZE+64,this.loaded=!0,this._cloudBlobStorage=this._cloudBlobStorage||this.url.toLowerCase().indexOf("s3.amazonaws.com")>-1||this.url.toLowerCase().indexOf("windows.net")>-1||this.url.toLowerCase().indexOf("googleapis.com")>-1,this._getRasterIdentifier(),e.resolve(this)})),a=r.hitch(this,(function(t){this.loaded=!0,this._getRasterIdentifier(),e.reject(t)}));return f(t,n,a),e.promise},read:function(e){var t=new i,n=e.level,a=e.row,o=e.col,s=this._buildCacheFilePath(this.url,n,a,o),l=this._getIndexRecordFromBundle(n,a,o);return d({url:s,content:{},headers:{Range:"bytes=0-"+(this._HEADER_SIZE-1).toString()},handleAs:"arraybuffer"}).then(r.hitch(this,(function(r,i){if(!t.isCanceled()){var n=new Date;console.log("time in ms request "+(n-a));var a=new Date,o=new Uint8Array(r),f=this._getTileEndAndContentType(o,l),c={width:this.tileInfo.cols,height:this.tileInfo.rows,planes:null,pixelType:null,format:null,decodeFunc:null,isPoint:"elevation"===this.tileType.toLowerCase()};this._requestPixels({url:s+(this.disableClientCaching?"?_ts= "+(new Date).getTime():""),payload:{},headers:{Range:"bytes="+f.position.toString()+"-"+(f.position+f.recordSize).toString()},decodeParams:c,tileOptions:e}).then((function(e){t.isCanceled()||t.resolve(e)}),(function(e){t.isCanceled()||t.reject(e)}))}}))),t.promise},identify:function(){return null},setFetchParameters:function(e,t){},toJson:function(){return{url:this.url,tileInfo:this.tileInfo.toJson(),rasterInfo:this.rasterInfo.toJson(),datasetInfo:this.datasetInfo,sourceType:this.sourceType,tileType:this.tileType,_rasterId:this._rasterId}},_getDatasetInfo:function(){return d({url:this.url+"/conf.json",handleAs:"json",content:{}})},_parseRasterInfo:function(e){var t,r=new b;switch(e.pixelType){case 1:t="U1";break;case 1:t="U2";break;case 2:t="U4";break;case 3:t="U8";break;case 4:t="S8";break;case 5:t="U16";break;case 6:t="S16";break;case 7:t="U32";break;case 8:t="S32";break;case 9:t="F32";break;default:t="F32"}var i,n=[],a=e.LODInfos;for(i=0;i<a.levels.length;i++)n.push({level:a.levels[i],resolution:a.resolutions[i],scale:96/.0254*a.resolutions[i]});var o=new g(e.extent.spatialReference||e.geodataXform.spatialReference),s=new y({rows:e.blockHeight,cols:e.blockWidth,dpi:96,format:e.format,compressionQuality:0,origin:e.origin,spatialReference:o,lods:n});return r.pixelType=t,r.bandCount=e.bandCount,r.spatialReference=o,r.extent=new u({xmin:e.extent.xmin,ymin:e.extent.ymin,xmax:e.extent.xmax,ymax:e.extent.ymax,spatialReference:o}),r.cellSize=new p({x:e.pixelSizeX,y:e.pixelSizeY,spatialReference:o}),r.width=Math.floor((r.extent.xmax-r.extent.xmin)/r.cellSize.x+.5),r.height=Math.floor((r.extent.ymax-r.extent.ymin)/r.cellSize.y+.5),r.statistics=e.statistics.map((function(e){return Object.keys(e).forEach((function(t){isNaN(e[t])&&(e[t]=null)})),e})),r.histograms=e.histograms,r.geodataXform=e.geodataXform,r.packetSize=e.packetSize,r.format=e.format,r.compressionQuality=e.compressionQuality,r.tileInfo=s,r},_getRasterIdentifier:function(){return this._rasterId||(this._rasterId=this.url.replace("http:","").replace("https:","")),this._rasterId},_buildCacheFilePath:function(e,t,r,i){var n=this.rasterInfo.packetSize,a=Math.floor(r/n)*n,o=Math.floor(i/n)*n,s="R"+this._toHexString4(a)+"C"+this._toHexString4(o),l="L";return l+=t>=10?t.toString():"0"+t.toString(),this._cloudBlobStorage?e+"/_alllayers/"+l+"/"+s+".bundle":e+"/"+l+"_"+s+"/bundle"},_getIndexRecordFromBundle:function(e,t,r){var i=this.rasterInfo.packetSize,n=i*(t%i)+r%i;if(n<0)throw"Invalid level / row / col";return 20+n*this._RECORD_SIZE+44},_getTileEndAndContentType:function(e,t){var r,i=e.subarray(t,t+8),n=0;for(r=0;r<5;r++)n|=(255&i[r])<<8*r;var a=0xffffffffff&n;for(n=0,r=5;r<8;r++)n|=(255&i[r])<<8*(r-5);return{position:a,recordSize:0xffffffffff&n}},_toHexString4:function(e){var t=e.toString(16);if(4!=t.length)for(var r=4-t.length;r-- >0;)t="0"+t;return t}});return s("extend-esri")&&r.setObject("layers.rasterLib.raster.TileRaster",R,c),R}));