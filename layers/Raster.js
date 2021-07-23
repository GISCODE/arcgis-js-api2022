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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/Deferred","dojo/_base/array","dojo/_base/config","dojo/json","dojo/sniff","../kernel","../Evented","../request","../geometry/Extent","../SpatialReference","../deferredUtils","./PixelBlock","./rasterFormats/LercCodec","./rasterFormats/Lerc2Codec"],(function(e,t,a,i,r,n,s,o,l,d,h,c,p,u,m,f,x){var g,w,y,v,D,_,T=t(d,{declaredClass:"esri.layers.Raster",imageServiceUrl:null,validPixelTypes:["U1","U2","U4","U8","U16","U32","S8","S16","S32","F32"],validFormats:["lerc","jpeg","jpg","jpgpng","png","png8","png24","png32","bip","bsq","tiff"],_eventMap:{"raster-read-complete":["pixelData","params"]},constructor:function(e){this.imageServiceUrl=e,this.registerConnectEvents(),this._loadRasterFormatModules()},read:function(e,t,n){var s=this,l=new i(u._dfdCanceller);if(o("ie")<10)throw"This browser is not supported.";if(!e.imageServiceParameters)throw"Insufficient parameters to read data";var d=a.clone(e.imageServiceParameters),c=e.pixelType;r.some(this.validPixelTypes,(function(e){return e===c}))||(d.pixelType="F32"),r.some(this.validFormats,(function(e){return e.toLowerCase()===d.format.toLowerCase()}))||(d.format="lerc");var p,m=e.decodeFunc;this._prepareGetImageParameters(d);var f=d.width,x=d.height,g=d.extent;return delete d.width,delete d.height,delete d.extent,l._pendingDfd=h({url:this.imageServiceUrl+"/exportImage",handleAs:"arraybuffer",content:a.mixin(d,{f:"image"}),load:function(e){var a={width:f,height:x,planes:null,pixelType:c,noDataValue:d.noData,format:d.format,decodeFunc:m};s.decode(e,a).then((function(e){p={pixelBlock:e,extent:g},s._resolve([p,d],"onRasterReadComplete",t,l)}),(function(e){s._resolve([e],null,n,l,!0)}))},error:function(e){s._resolve([e],null,n,l,!0)}}),l.promise},decode:function(e,t){if(null==t)throw"missing decode options";var a,i;return t.format&&(a=t.format.toUpperCase()),"BSQ"!==a&&"BIP"!==a&&(a=this._getFormat(e)),null==(i=t.decodeFunc)&&(i=this._getFormatDecoderDfd(a)),i(e,t)},onRasterReadComplete:function(){},_prepareGetImageParameters:function(e){if(e.size&&e.bbox){var t=e.size.split(",");if(e.width=parseFloat(t[0]),e.height=parseFloat(t[1]),!e.extent){var i=e.bbox.split(",");e.extent=new c(parseFloat(i[0]),parseFloat(i[1]),parseFloat(i[2]),parseFloat(i[3]),new p(e.bboxSR))}}else{if(!e.width||Math.floor(e.width)!==e.width||!e.height||Math.floor(e.height)!==e.height)throw"Incorrect Image Dimensions";if(!e.extent||"esri.geometry.Extent"!==e.extent.declaredClass)throw"Incorrect extent";var r=e.extent,n=r.spatialReference.wkid||s.toJson(r.spatialReference.toJson());delete e._ts,a.mixin(e,{bbox:r.xmin+","+r.ymin+","+r.xmax+","+r.ymax,imageSR:n,bboxSR:n,size:e.width+","+e.height},e.disableClientCaching?{_ts:(new Date).getTime()}:{})}},_adjustExtent:function(e,t,a){var i=e.ymax-e.ymin,r=e.xmax-e.xmin;return a>=t?(i=r*t/a,e.ymax=e.ymin+i):(r=i*a/t,e.xmax=e.xmin+r),e},_resolve:function(e,t,a,i,r){t&&this[t].apply(this,e),a&&a.apply(null,e),i&&u._resDfd(i,e,r)},_getFormatDecoderDfd:function(e){var t=null;switch(e){case"LERC":t=this._decodeLerc;break;case"LERC2":t=this._decodeLerc2;break;case"JPEG":t=this._decodeJpeg;break;case"PNG":t=this._decodePng;break;case"BSQ":t=this._decodeBsq;break;case"BIP":t=this._decodeBip;break;case"TIFF":t=this._decodeTiff;break;default:t=function(e,t){throw"The raster format is not supported"}}t=a.hitch(this,t);return function(a,r){var n=new i;try{var s;"LERC"===e||!0===D?(s=t(a,r),n.resolve(s)):_.then((function(){s=t(a,r),n.resolve(s)}))}catch(e){n.reject(e)}return n}},_getFormat:function(e){var t=new Uint8Array(e,0,10),a="";return 255===t[0]&&216===t[1]?a="JPEG":137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]?a="PNG":67===t[0]&&110===t[1]&&116===t[2]&&90===t[3]&&73===t[4]&&109===t[5]&&97===t[6]&&103===t[7]&&101===t[8]&&32===t[9]?a="LERC":76===t[0]&&101===t[1]&&114===t[2]&&99===t[3]&&50===t[4]&&32===t[5]?a="LERC2":String.fromCharCode.apply(null,t).toLowerCase().indexOf("error")>-1?a="ERROR":(73===t[0]&&73===t[1]&&42===t[2]&&0===t[3]||77===t[0]&&77===t[1]&&0===t[2]&&42===t[3])&&(a="TIFF"),a},_validateDecodeParams:function(e){if(!e.height||Math.floor(e.height)!==e.height)throw"Height not provided.";if(!e.width||Math.floor(e.width)!==e.width)throw"Width not provided."},_decodeJpeg:function(e,t){if(!g)throw"The jpeg decoder module is not loaded.";this._validateDecodeParams(t);var a=(new g).decode(e);if(!S(a,t))throw"The decoded image dimensions are incorrect.";var i,r,n=[];for(i=0;i<a.pixels.length;i++)r=a.pixels[i],n.push(this._calculateBandStatistics(r));return new m({width:a.width,height:a.height,pixels:a.pixels,pixelType:"U8",mask:a.mask,statistics:n})},_decodePng:function(e,t){if(!w)throw"The png decoder module is not loaded.";this._validateDecodeParams(t);var a=new Uint8Array(e),i=new w(a),r=new Uint8Array(t.width*t.height*4);i.copyToImageData(r,i.decodePixels());var n,s=0,o=0,l=new Uint8Array(t.width*t.height);for(s=0;s<t.width*t.height;s++)l[s]=r[4*s+3];var d=new m({width:t.width,height:t.height,pixels:[],pixelType:"U8",mask:l,statistics:[]});for(s=0;s<3;s++){for(n=new Uint8Array(t.width*t.height),o=0;o<t.width*t.height;o++)n[o]=r[4*o+s];d.addData({pixels:n,statistics:this._calculateBandStatistics(n)})}return d},_decodeBsq:function(e,t){if(!y)throw"The bsq decoder module is not loaded.";this._validateDecodeParams(t),k=t.noDataValue,t.pixelType=F(t.pixelType);var a,i=y.decodeBSQ(e,{bandCount:t.planes,width:t.width,height:t.height,pixelType:b,noDataValue:k}),r=[],n=null;for(a=0;a<i.pixels.length;a++)n=i.pixels[a],r.push(this._calculateBandStatistics(n));return new m({width:t.width,height:t.height,pixels:i.pixels,pixelType:t.pixelType,mask:i.maskData,statistics:r})},_decodeBip:function(e,t){this._validateDecodeParams(t),k=t.noDataValue,t.pixelType=F(t.pixelType);var a,i=y.decodeBIP(e,{bandCount:t.planes,width:t.width,height:t.height,pixelType:b,noDataValue:k}),r=[],n=null;for(a=0;a<i.pixels.length;a++)n=i.pixels[a],r.push(this._calculateBandStatistics(n));return new m({width:t.width,height:t.height,pixels:i.pixels,pixelType:t.pixelType,mask:i.maskData,statistics:r})},_decodeTiff:function(e,t){this._validateDecodeParams(t),k=t.noDataValue,t.pixelType=F(t.pixelType);var a,i=v.decode(e),r=[],n=null;for(a=0;a<i.pixels.length;a++)n=i.pixels[a],r.push(this._calculateBandStatistics(n,i.maskData));return new m({width:i.width,height:i.height,pixels:i.pixels,pixelType:i.pixelType,mask:i.maskData,statistics:r})},_decodeLerc:function(e,t){this._validateDecodeParams(t),k=t.noDataValue,t.pixelType=F(t.pixelType);for(var a,i,r=0,n=0,s=e.byteLength-10;n<s;){var o=f.decode(e,{inputOffset:n,encodedMaskData:a,returnMask:0===r,returnEncodedMask:0===r,returnFileInfo:!0,pixelType:b,noDataValue:k});if(n=o.fileInfo.eofOffset,0===r&&(a=o.encodedMaskData,i=new m({width:t.width,height:t.height,pixels:[],pixelType:t.pixelType,mask:o.maskData,statistics:[]})),r++,!S(o,t))throw"The decoded image dimensions are incorrect";i.addData({pixels:o.pixelData,statistics:{minValue:o.minValue,maxValue:o.maxValue,noDataValue:o.noDataValue}})}return i},_decodeLerc2:function(e,t){this._validateDecodeParams(t),k=t.noDataValue,t.pixelType=F(t.pixelType);for(var a,i,r,n,s,o,l,d=0,h=0,c=e.byteLength-10,p=[];h<c;){if(h=(i=x.decode(e,{inputOffset:h,maskData:a,returnFileInfo:!0})).fileInfo.eofOffset,0===d&&(a=i.maskData,r=new m({width:t.width,height:t.height,pixels:[],pixelType:i.fileInfo.pixelType,mask:i.maskData,statistics:[]})),i.fileInfo.mask&&i.fileInfo.mask.numBytes>0&&p.push(i.maskData),d++,!S(i,t))throw"The decoded image dimensions are incorrect";if(i.dimCount>1&&i.pixelData&&i.pixelData.length===i.width*i.height*i.dimCount){i.pixelData=i.pixelData.slice(-i.width*i.height);var u=i.dimStats&&i.dimStats.minValues&&i.dimStats.minValues[i.dimCount-1],f=i.dimStats&&i.dimStats.maxValues&&i.dimStats.maxValues[i.dimCount-1];null!=u&&null!=f&&(i.minValue=u,i.maxValue=f)}r.addData({pixels:i.pixelData,statistics:{minValue:i.minValue,maxValue:i.maxValue,noDataValue:i.noDataValue}})}if(p.length>1){for(l=r.width*r.height,r.bandMasks=p,(a=new Uint8Array(l)).set(p[0]),s=1;s<p.length;s++)for(n=p[s],o=0;o<l;o++)a[o]=a[o]&n[o];r.maskData=a}return r},_calculateBandStatistics:function(e,t){var a,i=1/0,r=-1/0,n=e.length,s=0;if(t)for(a=0;a<n;a++)t[a]&&(i=(s=e[a])<i?s:i,r=s>r?s:r);else for(a=0;a<n;a++)i=(s=e[a])<i?s:i,r=s>r?s:r;return{minValue:i,maxValue:r}},_loadRasterFormatModules:function(){D||(_||(_=new i),o("ie")<10?_.isRejected()||_.reject("unsupported browser version"):e(["./rasterFormats/JpgPlus","./rasterFormats/Png","./rasterFormats/Raw","./rasterFormats/TiffDecoder","./rasterFormats/Zlib"],(function(e,t,a,i){g=e,w=t,y=a,v=i,D=!0,_.isResolved()||_.resolve(!0)})))}}),b=null,k=null,F=function(e){return"U1"===e||"U2"===e||"U4"===e||"U8"===e?(e="U8",k=Math.pow(2,8)-1,b=Uint8Array,e):"U16"===e?(k=k||Math.pow(2,16)-1,b=Uint16Array,e):"U32"===e?(k=k||Math.pow(2,32)-1,b=Uint32Array,e):"S8"===e?(k=k||0-Math.pow(2,7),b=Int8Array,e):"S16"===e?(k=k||0-Math.pow(2,15),b=Int16Array,e):"S32"===e?(k=k||0-Math.pow(2,31),b=Int32Array,e):(b=Float32Array,e)},S=function(e,t){return e.height===t.height&&e.width===t.width};return o("extend-esri")&&a.setObject("layers.Raster",T,l),T}));