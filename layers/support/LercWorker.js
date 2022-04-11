/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../core/mathUtils"],(function(e){"use strict";var t={};t.defaultNoDataValue=e.clampFloat32(-1/0),t.decode=function(s,r){var o=(r=r||{}).encodedMaskData||null===r.encodedMaskData,f=l(s,r.inputOffset||0,o),u=null!=r.noDataValue?e.clampFloat32(r.noDataValue):t.defaultNoDataValue,m=i(f,r.pixelType||Float32Array,r.encodedMaskData,u,r.returnMask),c={width:f.width,height:f.height,pixelData:m.resultPixels,minValue:f.pixels.minValue,maxValue:f.pixels.maxValue,noDataValue:u};return m.resultMask&&(c.maskData=m.resultMask),r.returnEncodedMask&&f.mask&&(c.encodedMaskData=f.mask.bitset?f.mask.bitset:null),r.returnFileInfo&&(c.fileInfo=n(f,u),r.computeUsedBitDepths&&(c.fileInfo.bitDepths=a(f))),c};var i=function(e,t,i,n,a){var l,r,o=0,f=e.pixels.numBlocksX,u=e.pixels.numBlocksY,m=Math.floor(e.width/f),c=Math.floor(e.height/u),d=2*e.maxZError;i=i||(e.mask?e.mask.bitset:null),l=new t(e.width*e.height),a&&i&&(r=new Uint8Array(e.width*e.height));for(var g,h,k=new Float32Array(m*c),x=0;x<=u;x++){var p=x!==u?c:e.height%u;if(0!==p)for(var w=0;w<=f;w++){var y=w!==f?m:e.width%f;if(0!==y){var V,B,v,U,D=x*e.width*c+w*m,M=e.width-y,b=e.pixels.blocks[o];if(b.encoding<2?(0===b.encoding?V=b.rawData:(s(b.stuffedData,b.bitsPerPixel,b.numValidPixels,b.offset,d,k,e.pixels.maxValue),V=k),B=0):v=2===b.encoding?0:b.offset,i)for(h=0;h<p;h++){for(7&D&&(U=i[D>>3],U<<=7&D),g=0;g<y;g++)7&D||(U=i[D>>3]),128&U?(r&&(r[D]=1),l[D++]=b.encoding<2?V[B++]:v):(r&&(r[D]=0),l[D++]=n),U<<=1;D+=M}else if(b.encoding<2)for(h=0;h<p;h++){for(g=0;g<y;g++)l[D++]=V[B++];D+=M}else for(h=0;h<p;h++)if(l.fill)l.fill(v,D,D+y),D+=y+M;else{for(g=0;g<y;g++)l[D++]=v;D+=M}if(1===b.encoding&&B!==b.numValidPixels)throw"Block and Mask do not match";o++}}}return{resultPixels:l,resultMask:r}},n=function(e,t){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,minValue:e.pixels.minValue,noDataValue:t}}},a=function(e){for(var t=e.pixels.numBlocksX*e.pixels.numBlocksY,i={},n=0;n<t;n++){var a=e.pixels.blocks[n];0===a.encoding?i.float32=!0:1===a.encoding?i[a.bitsPerPixel]=!0:i[0]=!0}return Object.keys(i)},l=function(e,t,i){var n={},a=new Uint8Array(e,t,10);if(n.fileIdentifierString=String.fromCharCode.apply(null,a),"CntZImage"!=n.fileIdentifierString.trim())throw"Unexpected file identifier string: "+n.fileIdentifierString;t+=10;var l=new DataView(e,t,24);if(n.fileVersion=l.getInt32(0,!0),n.imageType=l.getInt32(4,!0),n.height=l.getUint32(8,!0),n.width=l.getUint32(12,!0),n.maxZError=l.getFloat64(16,!0),t+=24,!i)if(l=new DataView(e,t,16),n.mask={},n.mask.numBlocksY=l.getUint32(0,!0),n.mask.numBlocksX=l.getUint32(4,!0),n.mask.numBytes=l.getUint32(8,!0),n.mask.maxValue=l.getFloat32(12,!0),t+=16,n.mask.numBytes>0){var s=new Uint8Array(Math.ceil(n.width*n.height/8)),r=(l=new DataView(e,t,n.mask.numBytes)).getInt16(0,!0),o=2,f=0;do{if(r>0)for(;r--;)s[f++]=l.getUint8(o++);else{var u=l.getUint8(o++);for(r=-r;r--;)s[f++]=u}r=l.getInt16(o,!0),o+=2}while(o<n.mask.numBytes);if(-32768!==r||f<s.length)throw"Unexpected end of mask RLE encoding";n.mask.bitset=s,t+=n.mask.numBytes}else if(0==(n.mask.numBytes|n.mask.numBlocksY|n.mask.maxValue)){s=new Uint8Array(Math.ceil(n.width*n.height/8));n.mask.bitset=s}l=new DataView(e,t,16),n.pixels={},n.pixels.numBlocksY=l.getUint32(0,!0),n.pixels.numBlocksX=l.getUint32(4,!0),n.pixels.numBytes=l.getUint32(8,!0),n.pixels.maxValue=l.getFloat32(12,!0),t+=16;var m=n.pixels.numBlocksX,c=n.pixels.numBlocksY,d=m+(n.width%m>0?1:0),g=c+(n.height%c>0?1:0);n.pixels.blocks=new Array(d*g);for(var h=1e9,k=0,x=0;x<g;x++)for(var p=0;p<d;p++){var w=0,y=e.byteLength-t;l=new DataView(e,t,Math.min(10,y));var V={};n.pixels.blocks[k++]=V;var B=l.getUint8(0);if(w++,V.encoding=63&B,V.encoding>3)throw"Invalid block encoding ("+V.encoding+")";if(2!==V.encoding){if(0!==B&&2!==B){if(B>>=6,V.offsetType=B,2===B)V.offset=l.getInt8(1),w++;else if(1===B)V.offset=l.getInt16(1,!0),w+=2;else{if(0!==B)throw"Invalid block offset type";V.offset=l.getFloat32(1,!0),w+=4}if(h=Math.min(V.offset,h),1===V.encoding)if(B=l.getUint8(w),w++,V.bitsPerPixel=63&B,B>>=6,V.numValidPixelsType=B,2===B)V.numValidPixels=l.getUint8(w),w++;else if(1===B)V.numValidPixels=l.getUint16(w,!0),w+=2;else{if(0!==B)throw"Invalid valid pixel count type";V.numValidPixels=l.getUint32(w,!0),w+=4}}var v;if(t+=w,3!=V.encoding)if(0===V.encoding){var U=(n.pixels.numBytes-1)/4;if(U!==Math.floor(U))throw"uncompressed block has invalid length";v=new ArrayBuffer(4*U),new Uint8Array(v).set(new Uint8Array(e,t,4*U));for(var D=new Float32Array(v),M=0;M<D.length;M++)h=Math.min(h,D[M]);V.rawData=D,t+=4*U}else if(1===V.encoding){var b=Math.ceil(V.numValidPixels*V.bitsPerPixel/8),I=Math.ceil(b/4);v=new ArrayBuffer(4*I),new Uint8Array(v).set(new Uint8Array(e,t,b)),V.stuffedData=new Uint32Array(v),t+=b}}else t++,h=Math.min(h,0)}return n.pixels.minValue=h,n.eofOffset=t,n},s=function(e,t,i,n,a,l,s){var r,o,f,u=(1<<t)-1,m=0,c=0,d=Math.ceil((s-n)/a),g=4*e.length-Math.ceil(t*i/8);for(e[e.length-1]<<=8*g,r=0;r<i;r++){if(0===c&&(f=e[m++],c=32),c>=t)o=f>>>c-t&u,c-=t;else{var h=t-c;o=(f&u)<<h&u,o+=(f=e[m++])>>>(c=32-h)}l[r]=o<d?n+o*a:s}return l};const r=t.decode;let o=function(){function e(){}return e.prototype._decode=function(e){const t=r(e.buffer,e.options);return Promise.resolve({result:t,transferList:[t.pixelData.buffer]})},e}();function f(){return new o}return f}));
