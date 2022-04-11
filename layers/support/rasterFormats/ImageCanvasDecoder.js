/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../core/Error","../../../core/promiseUtils","../../../chunks/Zlib"],(function(t,e,n){"use strict";return function(){function a(t){t&&(this.canvas=t.canvas,this.ctx=t.ctx||t.canvas&&t.canvas.getContext("2d"))}return a.prototype.decode=function(n,i,r){if(!n||n.byteLength<10)throw new t("imagecanvasdecoder: decode","required a valid encoded data as input.");let{width:c,height:s,format:h}=i;const{applyJpegMask:o}=i;if(o&&(!c||!s))throw new t("imagecanvasdecoder: decode","image width and height are needed to apply jpeg mask directly to canvas");return new Promise(((t,d)=>{let l=null;"jpg"===h&&o&&(l=a._getMask(n,{width:c,height:s}));const g=new Blob([new Uint8Array(n)],{type:"image/"+h=="jpg"?"jpeg":h}),w=URL.createObjectURL(g),v=new Image;let u;v.src=w,v.onload=()=>{if(URL.revokeObjectURL(w),e.isAborted(r))return void d(e.createAbortError());c=v.width,s=v.height,this.canvas?(this.canvas.width===c&&this.canvas.height===s||(this.canvas.width=c,this.canvas.height=s),this.ctx.clearRect(0,0,c,s)):(this.canvas=document.createElement("canvas"),this.canvas.width=c,this.canvas.height=s,this.ctx=this.canvas.getContext("2d")),this.ctx.drawImage(v,0,0);const n=this.ctx.getImageData(0,0,c,s);let a;if(u=n.data,i.renderOnCanvas){if(l)for(a=0;a<l.length;a++)l[a]?u[4*a+3]=255:u[4*a+3]=0;return this.ctx.putImageData(n,0,0),void t(null)}const h=c*s,o=new Uint8Array(h),g=new Uint8Array(h),f=new Uint8Array(h);if(l)for(a=0;a<h;a++)o[a]=u[4*a],g[a]=u[4*a+1],f[a]=u[4*a+2];else for(l=new Uint8Array(h),a=0;a<h;a++)o[a]=u[4*a],g[a]=u[4*a+1],f[a]=u[4*a+2],l[a]=u[4*a+3];t({width:c,height:s,pixels:[o,g,f],mask:l,pixelType:"u8"})},v.onerror=()=>{URL.revokeObjectURL(w),d("cannot load image")}}))},a._getMask=function(t,e){let a=null;try{const i=new Uint8Array(t),r=Math.ceil(i.length/2);let c=0;const s=i.length-2;for(c=r;c<s&&(255!==i[c]||217!==i[c+1]);c++);if(c+=2,c<i.length-1){const t=new n.Zlib(i.subarray(c)).getBytes();a=new Uint8Array(e.width*e.height);let r=0;for(let e=0;e<t.length;e++)for(let n=7;n>=0;n--)a[r++]=t[e]>>n&1}}catch(i){}return a},a}()}));
