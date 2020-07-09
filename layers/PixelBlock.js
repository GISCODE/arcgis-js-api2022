// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel"],(function(t,e,i,s){var l=t([],{declaredClass:"esri.layers.PixelBlock",planes:null,width:null,height:null,pixelType:null,pixels:[],statistics:[],maskIsAlpha:!1,validPixelCount:null,constructor:function(t){if(t){if(!t.width||Math.floor(t.width)!==t.width)throw"PixelBlock: incorrect width";if(!t.height||Math.floor(t.height)!==t.height)throw"PixelBlock: incorrect height";if(!t.pixels)throw"PixelBlock: pixel data not present";this.width=t.width,this.height=t.height,this.pixels=t.pixels,this.pixelType=t.pixelType||null,this.statistics=t.statistics,this.mask=t.mask||null,this.maskIsAlpha=t.maskIsAlpha||!1;var e=t.validPixelCount;null==e&&(e=this.mask?this._getValidPixelCount(this.mask):this.width*this.height),this.validPixelCount=e}},getPlaneCount:function(){return this.pixels.length!==this.statistics.length?console.error("Inconsistent pixel data and statistics"):this.statistics.length},addData:function(t){if(!t.pixels||!t.statistics)throw"Pixel data or statistics are not present";if(t.pixels.length!==this.width*this.height)throw"Inconsistent pixel data size";this.statistics.push(t.statistics),this.pixels.push(t.pixels)},getAsRGBA:function(){var t=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"S8":case"S16":case"U16":case"S32":case"U32":case"F32":case"F64":this._fillFromNon8Bit(t);break;default:this._fillFrom8Bit(t)}return new Uint8ClampedArray(t)},getAsRGBAFloat:function(){var t=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(t),t},clone:function(t){t=t||this;var i,s,l,a=new this.constructor;if(a.width=t.width,a.height=t.height,a.pixelType=t.pixelType,a.maskIsAlpha=t.maskIsAlpha,t.mask&&(a.mask=new Uint8Array(t.mask)),t.pixels)for(a.pixels=[],l=(s=t.pixels.length)&&t.pixels[0].slice,i=0;i<s;i++)a.pixels[i]=l?t.pixels[i].slice(0,t.pixels[i].length):new t.pixels[i].constructor(t.pixels[i]);if(t.statistics)for(a.statistics=[],s=t.statistics.length,i=0;i<s;i++)a.statistics[i]=e.clone(t.statistics[i]);var r=t.validPixelCount;return null==r&&(r=a.mask?this._getValidPixelCount(a.mask):a.width*a.height),a},clamp:function(t){if("F64"!==t&&"F32"!==t){var e;switch(t){case"U8":e=[0,255];break;case"U16":e=[0,65535];break;case"U32":e=[0,4294967295];break;case"S8":e=[-128,127];break;case"S16":e=[-32768,32767];break;case"S32":e=[-2147483648,2147483647];break;default:e=[-34e38,34e38]}var i,s,l,a,r,n=e[0],h=e[1],o=this.pixels,c=this.width*this.height,p=o.length,u=[];for(a=0;a<p;a++){for(l=this._createEmptyBand(t,c),i=o[a],r=0;r<c;r++)s=i[r],l[r]=s>h?h:s<n?n:s;u.push(l)}this.pixels=u,this.pixelType=t}},calculateStatistics:function(){var t,e,i=[],s=this.mask;for(t=0;t<this.pixels.length;t++)e=this.pixels[t],i.push(this._calculateBandStatistics(e,s));this.statistics=i},_getValidPixelCount:function(t){var e,i=0;for(e=0;e<t.length;e++)t[e]&&i++;return i},_createEmptyBand:function(t,e){var i;switch(t){case"U8":i=new Uint8Array(e);break;case"U16":i=new Uint16Array(e);break;case"U32":i=new Uint32Array(e);break;case"S8":i=new Int8Array(e);break;case"S16":i=new Int16Array(e);break;case"S32":i=new Int32Array(e);break;case"U32":i=new Uint32Array(e);break;case"F32":i=new Float32Array(e);break;case"F64":i=new Float64Array(e);break;default:i=new Float32Array(e)}return i},_fillFrom8Bit:function(t){var e,i,s,l,a=this.pixels,r=this.mask;if(!t||!a||!a.length)return console.error("Unable to convert to RGBA. The input pixel block is empty.");e=i=s=a[0],a.length>=3&&(i=a[1],s=a[2]);var n=new Uint32Array(t),h=this.width*this.height;if(e.length!==h)return console.error("Unable to convert to RGBA. The pixelblock is invalid.");if(r&&r.length===h)if(this.maskIsAlpha)for(l=0;l<h;l++)r[l]&&(n[l]=r[l]<<24|s[l]<<16|i[l]<<8|e[l]);else for(l=0;l<h;l++)r[l]&&(n[l]=255<<24|s[l]<<16|i[l]<<8|e[l]);else for(l=0;l<h;l++)n[l]=255<<24|s[l]<<16|i[l]<<8|e[l]},_fillFromNon8Bit:function(t){var e=this.pixels,i=this.mask,s=this.statistics;if(!t||!e||!e.length)return console.error("Unable to convert to RGBA. The input pixel block is empty.");var l=1,a=0;if(s&&s.length>0)a=s.map((function(t){return t.minValue})).reduce((function(t,e){return Math.min(t,e)})),l=255/s.map((function(t){return t.maxValue-t.minValue})).reduce((function(t,e){return Math.max(t,e)}));else{var r=255;"S8"===this.pixelType?(a=-128,r=127):"U16"===this.pixelType?r=65535:"S16"===this.pixelType?(a=-32768,r=32767):"U32"===this.pixelType?r=4294967295:"S32"===this.pixelType?(a=-2147483648,r=2147483647):"F32"===this.pixelType?(a=-34e38,r=34e38):"F64"===this.pixelType&&(a=-Number.MAX_VALUE,r=Number.MAX_VALUE),l=255/(r-a)}var n,h,o,c,p,u=new Uint32Array(t),f=this.width*this.height;if((n=e[0]).length!==f)return console.error("Unable to convert to RGBA. The pixelblock is invalid.");if(e.length>=3)if(h=e[1],o=e[2],i&&i.length===f)for(c=0;c<f;c++)i[c]&&(u[c]=255<<24|(o[c]-a)*l<<16|(h[c]-a)*l<<8|(n[c]-a)*l);else for(c=0;c<f;c++)u[c]=255<<24|(o[c]-a)*l<<16|(h[c]-a)*l<<8|(n[c]-a)*l;else if(i&&i.length===f)for(c=0;c<f;c++)p=(n[c]-a)*l,i[c]&&(u[c]=255<<24|p<<16|p<<8|p);else for(c=0;c<f;c++)p=(n[c]-a)*l,u[c]=255<<24|p<<16|p<<8|p},_fillFrom32Bit:function(t){var e,i,s,l,a=this.pixels,r=this.mask;if(!t||!a||!a.length)return console.error("Unable to convert to RGBA. The input pixel block is empty.");e=i=s=a[0],a.length>=3&&(i=a[1],s=a[2]);var n=this.width*this.height;if(e.length!==n)return console.error("Unable to convert to RGBA. The pixelblock is invalid.");var h=0;if(r&&r.length===n)for(l=0;l<n;l++)t[h++]=e[l],t[h++]=i[l],t[h++]=s[l],t[h++]=1&r[l];else for(l=0;l<n;l++)t[h++]=e[l],t[h++]=i[l],t[h++]=s[l],t[h++]=1},_calculateBandStatistics:function(t,e){var i,s=1/0,l=-1/0,a=t.length,r=0;if(e)for(i=0;i<a;i++)e[i]&&(s=(r=t[i])<s?r:s,l=r>l?r:l);else for(i=0;i<a;i++)s=(r=t[i])<s?r:s,l=r>l?r:l;return{minValue:s,maxValue:l}}});return i("extend-esri")&&e.setObject("layers.PixelBlock",l,s),l}));