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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/Deferred","../PixelBlock","./LercCodec","./Lerc2Codec","./JpgPlus","./Png","./Raw","./TiffDecoder"],(function(e,t,i,a,r,n,o,d,s,h,l){var p,c;return{validPixelTypes:["U1","U2","U4","U8","U16","U32","S8","S16","S32","F32"],supportedFormats:["lerc","jpeg","jpg","jpgpng","png","png8","png24","png32","bip","bsq","tiff"],_isPlatformLittleEndian:(p=new ArrayBuffer(4),c=new Uint8Array(p),new Uint32Array(p)[0]=1,1===c[0]),decode:function(e,t){if(null==t)throw"missing decode options";var i,a;return t.format&&(i=t.format.toUpperCase()),"BSQ"!==i&&"BIP"!==i&&(i=this._getFormat(e)),null==(a=t.decodeFunc)&&(a=this._getFormatDecoderDfd(i)),a(e,t)},_getFormatDecoderDfd:function(e){var t=null;switch(e){case"LERC":t=this._decodeLerc;break;case"LERC2":t=this._decodeLerc2;break;case"JPEG":t=this._decodeJpeg;break;case"PNG":t=this._decodePng;break;case"BSQ":t=this._decodeBsq;break;case"BIP":t=this._decodeBip;break;case"TIFF":t=this._decodeTiff;break;default:t=function(e,t){throw"The raster format is not supported"}}return t=i.hitch(this,t),function(e,i){var r,n=new a;return i.isPoint&&i.width&&(i.width++,i.height++),r=t(e,i),i.isPoint&&i.width&&(this._interpolatePointGrid(r),i.width--,i.height--),n.resolve(r),n}.bind(this)},_getFormat:function(e){var t=new Uint8Array(e,0,10),i="";return 255===t[0]&&216===t[1]?i="JPEG":137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]?i="PNG":67===t[0]&&110===t[1]&&116===t[2]&&90===t[3]&&73===t[4]&&109===t[5]&&97===t[6]&&103===t[7]&&101===t[8]&&32===t[9]?i="LERC":76===t[0]&&101===t[1]&&114===t[2]&&99===t[3]&&50===t[4]&&32===t[5]?i="LERC2":String.fromCharCode.apply(null,t).toLowerCase().indexOf("error")>-1?i="ERROR":(73===t[0]&&73===t[1]&&42===t[2]&&0===t[3]||77===t[0]&&77===t[1]&&0===t[2]&&42===t[3])&&(i="TIFF"),i},_validateDecodeParams:function(e){if(!e.height||Math.floor(e.height)!==e.height)throw"Height not provided.";if(!e.width||Math.floor(e.width)!==e.width)throw"Width not provided."},_decodeJpeg:function(e,t){if(!d)throw"The jpeg decoder module is not loaded.";this._validateDecodeParams(t);var i=(new d).decode(e);if(!this._verifyResult(i,t))throw"The decoded image dimensions are incorrect.";var a=new r({width:i.width,height:i.height,pixels:i.pixels,pixelType:"U8",mask:i.mask,statistics:null});return a.calculateStatistics(),a},_decodePng:function(e,t){if(!s)throw"The png decoder module is not loaded.";this._validateDecodeParams(t);var i=new Uint8Array(e),a=new s(i),n=new Uint8Array(t.width*t.height*4);a.copyToImageData(n,a.decodePixels());var o,d=0,h=0,l=new Uint8Array(t.width*t.height);for(d=0;d<t.width*t.height;d++)l[d]=n[4*d+3];var p=new r({width:t.width,height:t.height,pixels:[],pixelType:"U8",mask:l,statistics:[]});for(d=0;d<3;d++){for(o=new Uint8Array(t.width*t.height),h=0;h<t.width*t.height;h++)o[h]=n[4*h+d];p.addData({pixels:o})}return p.calculateStatistics(),p},_decodeBsq:function(e,t){if(!h)throw"The bsq decoder module is not loaded.";this._validateDecodeParams(t);var i=t.noDataValue;t.pixelType=this._getpixelTypeAndNoData(t.pixelType);var a=h.decodeBSQ(e,{bandCount:t.planes,width:t.width,height:t.height,pixelType:t.pixelType,noDataValue:i}),n=new r({width:t.width,height:t.height,pixels:a.pixels,pixelType:t.pixelType,mask:a.maskData,statistics:null});return n.calculateStatistics(),n},_decodeBip:function(e,t){this._validateDecodeParams(t);var i=t.noDataValue;t.pixelType=this._getpixelTypeAndNoData(t.pixelType);var a=h.decodeBIP(e,{bandCount:t.planes,width:t.width,height:t.height,pixelType:t.pixelType,noDataValue:i}),n=new r({width:t.width,height:t.height,pixels:a.pixels,pixelType:t.pixelType,mask:a.maskData,statistics:null});return n.calculateStatistics(),n},_decodeTiff:function(e,t){this._validateDecodeParams(t),t.pixelType=this._getpixelTypeAndNoData(t.pixelType);var i=l.decode(e),a=new r({width:i.width,height:i.height,pixels:i.pixels,pixelType:i.pixelType,mask:i.maskData,statistics:null});return a.calculateStatistics(),a},_decodeLerc:function(e,t){if(!this._isPlatformLittleEndian)throw"lerc decoder is not supported on big endian platform";this._validateDecodeParams(t);var i=t.noDataValue;t.pixelType=this._getpixelTypeAndNoData(t.pixelType);for(var a,o,d=0,s=0,h=e.byteLength-10;s<h;){var l=n.decode(e,{inputOffset:s,encodedMaskData:a,returnMask:0===d,returnEncodedMask:0===d,returnFileInfo:!0,pixelType:t.pixelType,noDataValue:i});if(s=l.fileInfo.eofOffset,0===d&&(a=l.encodedMaskData,o=new r({width:t.width,height:t.height,pixels:[],pixelType:t.pixelType,mask:l.maskData,statistics:[]})),d++,!this._verifyResult(l,t))throw"The decoded image dimensions are incorrect";o.addData({pixels:l.pixelData,statistics:{minValue:l.minValue,maxValue:l.maxValue,noDataValue:l.noDataValue}})}return o},_decodeLerc2:function(e,t){if(!this._isPlatformLittleEndian)throw"lerc2 decoder is not supported on big endian platform";this._validateDecodeParams(t),t.pixelType=this._getpixelTypeAndNoData(t.pixelType);for(var i,a,n,d,s,h,l,p,c=0,f=0,u=e.byteLength-10,w=[],g=0;f<u;){if(f=(a=o.decode(e,{inputOffset:f,maskData:i,returnFileInfo:!0})).fileInfo.eofOffset,i=a.maskData,0===c&&(n=a.fileInfo.numValidPixel,d=new r({width:t.width,height:t.height,pixels:[],dimCount:a.dimCount||1,pixelType:a.fileInfo.pixelType,mask:i,statistics:[]})),a.fileInfo.mask&&a.fileInfo.mask.numBytes>0&&g++,i&&w.push(i),c++,!this._verifyResult(a,t))throw"The decoded image dimensions are incorrect";d.addData({pixels:a.pixelData,statistics:{minValue:a.minValue,maxValue:a.maxValue,noDataValue:a.noDataValue,dimStats:a.dimStats}})}if(g>1){for(p=d.width*d.height,d.bandMasks=w,(i=new Uint8Array(p)).set(w[0]),h=1;h<w.length;h++)for(s=w[h],l=0;l<p;l++)i[l]=i[l]&s[l];for(n=0,l=0;l<p;l++)n+=s[l];d.mask=i}return d.validPixelCount=n,d},_interpolatePointGrid:function(e,t){var i=e.pixels;if(i&&0!==i.length){var a,r,n,o,d,s,h,l=i.length,p=e.width,c=e.height,f=e.mask,u=p-1,w=c-1,g=[];if(0===(t=null==t?1:t)){for(a=0;a<l;a++){for(d=new(o=i[a]).constructor(u*w),r=0;r<w;r++)for(h=r*p,n=0;n<u;n++)d[r*u+n]=o[h+n];g.push(d)}if(f)for(s=new Uint8Array(u*w),r=0;r<w;r++)for(h=r*p,n=0;n<u;n++)s[r*u+n]=f[h+n]}else{for(a=0;a<l;a++){for(d=new(o=i[a]).constructor(u*w),r=0;r<w;r++)for(h=r*p,n=0;n<u;n++)d[r*u+n]=(o[h+n]+o[h+n+1]+o[h+p+n]+o[h+p+n+1])/4;g.push(d)}if(f)for(s=new Uint8Array(u*w),r=0;r<w;r++)for(h=r*p,n=0;n<u;n++)s[r*u+n]=Math.min.apply(null,[f[h+n],f[h+n+1],f[h+p+n],f[h+p+n+1]])}return e.width=u,e.height=w,e.mask=s,e.pixels=g,e}},_getpixelTypeAndNoData:function(e){var t=null;return"U1"===e||"U2"===e||"U4"===e||"U8"===e?(e="U8",t=Math.pow(2,8)-1,Uint8Array,e):"U16"===e?(t=t||Math.pow(2,16)-1,Uint16Array,e):"U32"===e?(t=t||Math.pow(2,32)-1,Uint32Array,e):"S8"===e?(t=t||0-Math.pow(2,7),Int8Array,e):"S16"===e?(t=t||0-Math.pow(2,15),Int16Array,e):"S32"===e?(t=t||0-Math.pow(2,31),Int32Array,e):(Float32Array,e)},_verifyResult:function(e,t){return e.height===t.height&&e.width===t.width}}}));