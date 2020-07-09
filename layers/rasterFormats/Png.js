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

define(["./Zlib"],(function(t){return function(){var e;function a(t){var e,a,i,s,r,n,h,o,d,c,p,l,f;for(this.data=t,this.pos=8,this.palette=[],this.imgData=[],this.transparency={},this.animation=null,this.text={},r=null;;){switch(e=this.readUInt32(),o=function(){var t,e;for(e=[],t=0;t<4;++t)e.push(String.fromCharCode(this.data[this.pos++]));return e}.call(this).join("")){case"IHDR":this.width=this.readUInt32(),this.height=this.readUInt32(),this.bits=this.data[this.pos++],this.colorType=this.data[this.pos++],this.compressionMethod=this.data[this.pos++],this.filterMethod=this.data[this.pos++],this.interlaceMethod=this.data[this.pos++];break;case"acTL":this.animation={numFrames:this.readUInt32(),numPlays:this.readUInt32()||1/0,frames:[]};break;case"PLTE":this.palette=this.read(e);break;case"fcTL":r&&this.animation.frames.push(r),this.pos+=4,r={width:this.readUInt32(),height:this.readUInt32(),xOffset:this.readUInt32(),yOffset:this.readUInt32()},s=this.readUInt16(),i=this.readUInt16()||100,r.delay=1e3*s/i,r.disposeOp=this.data[this.pos++],r.blendOp=this.data[this.pos++],r.data=[];break;case"IDAT":case"fdAT":for("fdAT"===o&&(this.pos+=4,e-=4),t=(null!=r?r.data:void 0)||this.imgData,p=0;0<=e?p<e:p>e;0<=e?++p:--p)t.push(this.data[this.pos++]);break;case"tRNS":switch(this.transparency={},this.colorType){case 3:if(this.transparency.indexed=this.read(e),(d=255-this.transparency.indexed.length)>0)for(l=0;0<=d?l<d:l>d;0<=d?++l:--l)this.transparency.indexed.push(255);break;case 0:this.transparency.grayscale=this.read(e)[0];break;case 2:this.transparency.rgb=this.read(e)}break;case"tEXt":n=(c=this.read(e)).indexOf(0),h=String.fromCharCode.apply(String,c.slice(0,n)),this.text[h]=String.fromCharCode.apply(String,c.slice(n+1));break;case"IEND":return r&&this.animation.frames.push(r),this.colors=function(){switch(this.colorType){case 0:case 3:case 4:return 1;case 2:case 6:return 3}}.call(this),this.hasAlphaChannel=4===(f=this.colorType)||6===f,a=this.colors+(this.hasAlphaChannel?1:0),this.pixelBitlength=this.bits*a,this.colorSpace=function(){switch(this.colors){case 1:return"DeviceGray";case 3:return"DeviceRGB"}}.call(this),void(this.imgData=new Uint8Array(this.imgData));default:this.pos+=e}if(this.pos+=4,this.pos>this.data.length)throw new Error("Incomplete or corrupt PNG file")}}return a.load=function(t,e,i){var s;return"function"==typeof e&&(i=e),(s=new XMLHttpRequest).open("GET",t,!0),s.responseType="arraybuffer",s.onload=function(){var t;return t=new a(new Uint8Array(s.response||s.mozResponseArrayBuffer)),"function"==typeof(null!=e?e.getContext:void 0)&&t.render(e),"function"==typeof i?i(t):void 0},s.send(null)},0,1,2,0,1,a.prototype.read=function(t){var e,a;for(a=[],e=0;0<=t?e<t:e>t;0<=t?++e:--e)a.push(this.data[this.pos++]);return a},a.prototype.readUInt32=function(){return this.data[this.pos++]<<24|this.data[this.pos++]<<16|this.data[this.pos++]<<8|this.data[this.pos++]},a.prototype.readUInt16=function(){return this.data[this.pos++]<<8|this.data[this.pos++]},a.prototype.decodePixels=function(e){var a,i,s,r,n,h,o,d,c,p,l,f,u,g,y,m,w,v,I,b,D,U,x;if(null==e&&(e=this.imgData),0===e.length)return new Uint8Array(0);for(e=(e=new t(e)).getBytes(),m=(f=this.pixelBitlength/8)*this.width,u=new Uint8Array(m*this.height),h=e.length,y=0,g=0,i=0;g<h;){switch(e[g++]){case 0:for(r=I=0;I<m;r=I+=1)u[i++]=e[g++];break;case 1:for(r=b=0;b<m;r=b+=1)a=e[g++],n=r<f?0:u[i-f],u[i++]=(a+n)%256;break;case 2:for(r=D=0;D<m;r=D+=1)a=e[g++],s=(r-r%f)/f,w=y&&u[(y-1)*m+s*f+r%f],u[i++]=(w+a)%256;break;case 3:for(r=U=0;U<m;r=U+=1)a=e[g++],s=(r-r%f)/f,n=r<f?0:u[i-f],w=y&&u[(y-1)*m+s*f+r%f],u[i++]=(a+Math.floor((n+w)/2))%256;break;case 4:for(r=x=0;x<m;r=x+=1)a=e[g++],s=(r-r%f)/f,n=r<f?0:u[i-f],0===y?w=v=0:(w=u[(y-1)*m+s*f+r%f],v=s&&u[(y-1)*m+(s-1)*f+r%f]),o=n+w-v,d=Math.abs(o-n),p=Math.abs(o-w),l=Math.abs(o-v),c=d<=p&&d<=l?n:p<=l?w:v,u[i++]=(a+c)%256;break;default:throw new Error("Invalid filter algorithm: "+e[g-1])}y++}return u},a.prototype.decodePalette=function(){var t,e,a,i,s,r,n,h,o;for(a=this.palette,r=this.transparency.indexed||[],s=new Uint8Array((r.length||0)+a.length),i=0,a.length,t=0,e=n=0,h=a.length;n<h;e=n+=3)s[i++]=a[e],s[i++]=a[e+1],s[i++]=a[e+2],s[i++]=null!=(o=r[t++])?o:255;return s},a.prototype.copyToImageData=function(t,e){var a,i,s,r,n,h,o,d,c,p,l;if(i=this.colors,c=null,a=this.hasAlphaChannel,this.palette.length&&(c=null!=(l=this._decodedPalette)?l:this._decodedPalette=this.decodePalette(),i=4,a=!0),d=(s=t.data||t).length,n=c||e,r=h=0,1===i)for(;r<d;)o=c?4*e[r/4]:h,p=n[o++],s[r++]=p,s[r++]=p,s[r++]=p,s[r++]=a?n[o++]:this.transparency.grayscale&&this.transparency.grayscale===p?0:255,h=o;else for(;r<d;)o=c?4*e[r/4]:h,s[r++]=n[o++],s[r++]=n[o++],s[r++]=n[o++],s[r++]=a?n[o++]:this.transparency.rgb&&this.transparency.rgb[1]===n[o-3]&&this.transparency.rgb[3]===n[o-2]&&this.transparency.rgb[5]===n[o-1]?0:255,h=o},a.prototype.decode=function(){var t;return t=new Uint8Array(this.width*this.height*4),this.copyToImageData(t,this.decodePixels()),t},e=function(t){var e;return(void 0).width=t.width,(void 0).height=t.height,(void 0).clearRect(0,0,t.width,t.height),(void 0).putImageData(t,0,0),(e=new Image).src=(void 0).toDataURL(),e},a.prototype.decodeFrames=function(t){var a,i,s,r,n,h,o,d;if(this.animation){for(d=[],i=n=0,h=(o=this.animation.frames).length;n<h;i=++n)a=o[i],s=t.createImageData(a.width,a.height),r=this.decodePixels(new Uint8Array(a.data)),this.copyToImageData(s,r),a.imageData=s,d.push(a.image=e(s));return d}},a.prototype.renderFrame=function(t,e){var a,i,s;return a=(i=this.animation.frames)[e],s=i[e-1],0===e&&t.clearRect(0,0,this.width,this.height),1===(null!=s?s.disposeOp:void 0)?t.clearRect(s.xOffset,s.yOffset,s.width,s.height):2===(null!=s?s.disposeOp:void 0)&&t.putImageData(s.imageData,s.xOffset,s.yOffset),0===a.blendOp&&t.clearRect(a.xOffset,a.yOffset,a.width,a.height),t.drawImage(a.image,a.xOffset,a.yOffset)},a.prototype.animate=function(t){var e,a,i,s,r,n,h=this;return a=0,n=this.animation,s=n.numFrames,i=n.frames,r=n.numPlays,(e=function(){var n,o;if(n=a++%s,o=i[n],h.renderFrame(t,n),s>1&&a/s<r)return h.animation._timeout=setTimeout(e,o.delay)})()},a.prototype.stopAnimation=function(){var t;return clearTimeout(null!=(t=this.animation)?t._timeout:void 0)},a.prototype.render=function(t){var e,a;return t._png&&t._png.stopAnimation(),t._png=this,t.width=this.width,t.height=this.height,e=t.getContext("2d"),this.animation?(this.decodeFrames(e),this.animate(e)):(a=e.createImageData(this.width,this.height),this.copyToImageData(a,this.decodePixels()),e.putImageData(a,0,0))},a}()}));