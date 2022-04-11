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

define(["dojo/_base/declare","dojo/_base/lang","./RasterFunctionX","../../PixelBlock","./vertexShaders","./pixelShaders","./RasterFunctionWebGLMixin"],(function(t,i,e,s,r,a,n){return t([e,n],{declaredClass:"esri.layers.rasterLib.function.StretchFunction",functionName:"Stretch",supportWebGL:!0,support2D:!0,constructor:function(t){this.functionArguments=this.mixinIgnoreCase({stretchType:0,min:0,max:255,numberOfStandardDeviations:2,statistics:null,histograms:null,dra:!1,minPercent:.25,maxPercent:.5,useGamma:!1,gamma:null,raster:null,computeGamma:!1},t),this.functionArguments.statistics=this._convertStats(this.functionArguments.statistics),-1===[0,3,5,6].indexOf(this.functionArguments.stretchType)&&(console.error("The specific stretch type has not been implemented: "+this.functionArguments.stretchType),this.functionArguments.stretchType=5),this.min=null==this.min?0:this.min,this.max=null==this.max?255:this.max},bind:function(t){var e=this.getSourceRasterInfo(t);return e.raster?(e.raster.statistics&&(this.srcStatistics=this._convertStats(e.raster.statistics)),e.raster.histograms&&(this.srcHistograms=e.raster.histograms),this.rasterInfo=i.mixin({},e.raster,{bandCount:e.raster.bandCount,pixelType:this._calculatePixelType(this.pixelType,"U8"),statistics:null,histograms:null}),this.rasterInfo.keyProperties=this.rasterInfo.keyProperties||{},this.rasterInfo.keyProperties.DataType="Generic",!0):new Error("The raster input to stretch function is invalid.")},read2D:function(t){var i=t.raster;return this._stretch(i),i},hasTilingEffects:function(t){return!!((t=t||this.functionArguments).dra||t.raster&&"object"==typeof t.raster&&t.raster.dra)},_convertStats:function(t){return t?t.map((function(t){return t&&null!=t.min?[t.min,t.max,t.mean,t.stddev]:t})):null},_updateStatistisHistograms:function(t){var i=this.functionArguments,e=i.histograms||this.srcHistograms;if(!(t&&t.pixelBlock&&t.pixelBlock.pixels))return this._statistics=i.statistics&&i.statistics.length>0?i.statistics:this.srcStatistics,this._histograms=e,this._gammaCorrection=this._getGammaCorrection(),void(this._statistics=this._convertStats(this._statistics));if(0===i.stretchType)return this._statistics=i.statistics&&i.statistics.length>0?i.statistics:this.srcStatistics,this._histograms=e,this._statistics=this._convertStats(this._statistics),void(this._gammaCorrection=this._getGammaCorrection());var s,r=t.pixelBlock,a=r.pixels.length,n=6===i.stretchType&&(i.dra||!e)||3===i.stretchType&&i.dra;if(n&&(r.statistics||r.calculateStatistics(),this._calculateStatisticsHistograms(t)),i.dra)if(r.statistics||r.calculateStatistics(),n)this._statistics=r.statistics,this._histograms=r.histograms;else{var o=r.statistics;for(this._statistics=[],s=0;s<a;s++)this._statistics[s]=[o[s].minValue,o[s].maxValue,0,0]}else this._statistics=i.statistics&&i.statistics.length>0?i.statistics:this.srcStatistics,this._histograms=e;this._statistics=this._convertStats(this._statistics),this._gammaCorrection=this._getGammaCorrection()},_getGammaCorrection:function(){var t=this.functionArguments.gamma;if(t){var i,e=[];for(i=0;i<t.length;i++)t[i]>1?t[i]>2?e[i]=6.5+Math.pow(t[i]-2,2.5):e[i]=6.5+100*Math.pow(2-t[i],4):e[i]=1;return e}},_stretch:function(t){if(null!==t&&null!==t.pixelBlock&&null!==t.pixelBlock.pixels&&0!==this.functionArguments.stretchType){this._updateStatistisHistograms(t);var i,e,s=t.pixelBlock,r=s.pixels,a=s.width*s.height,n=r.length;if(this._createLUT(t),null==this.LUT)return this._filterNoLUT(t);var o,u,h=this.LUT,m=this.LUTOffset;for(i=0;i<n;i++)for(u=h[i],e=0;e<a;e++)o=r[i][e],r[i][e]=u[o-m];t.pixelBlock.pixelType="U8"}},_calculateStatisticsHistograms:function(t){var e,s,r,a,n,o,u,h,m,f,c,l,g,_,x,p,T,d=t.pixelBlock,A=d.pixelType,v=d.pixels,E=d.mask,U=v.length,F=function(t){this.min=-.5,this.max=255.5,this.size=256,i.mixin(this,t),this.counts=this.counts||new Uint32Array(this.size)},R=[];for(a=0;a<U;a++){if(u=(o=new F).counts,m=v[a],"U8"===A)if(E)for(n=0;n<d.width*d.height;n++)E[n]&&u[m[n]]++;else for(n=0;n<d.width*d.height;n++)u[m[n]]++;else{if(e=d.statistics[a].minValue,s=d.statistics[a].maxValue,o.min=e,o.max=s,r=(s-e)/256,h=new Uint32Array(257),E)for(n=0;n<d.width*d.height;n++)E[n]&&h[Math.floor((m[n]-e)/r)]++;else for(n=0;n<d.width*d.height;n++)h[Math.floor((m[n]-e)/r)]++;for(n=0;n<255;n++)u[n]=h[n];u[255]=h[255]+h[256]}for(R.push(o),f=[],e=d.statistics[a].minValue,s=d.statistics[a].maxValue,c=0,l=0,x=0,n=0;n<o.size;n++)c+=u[n],l+=n*u[n];for(p=l/c,n=0;n<o.size;n++)x+=u[n]*Math.pow(n-p,2);T=Math.sqrt(x/(c-1)),g=(p+.5)*(o.max-o.min)/o.size+o.min,_=T*(o.max-o.min)/o.size,f.push(e),f.push(s),f.push(g),f.push(_),d.statistics[a]={min:e,minValue:e,max:s,maxValue:s,mean:g,stddev:_}}d.histograms=R},_getCutOffPoints:function(t){var i=this.functionArguments,e=999;t&&t.pixelBlock?e=t.pixelBlock.pixels.length:t&&t.texture&&(e=3);var s,r,a,n,o,u,h,m,f=Math.min(e,this._statistics.length),c=[],l=[];switch(i.stretchType){case 5:for(h=0;h<f;h++)c[h]=this._statistics[h][0],l[h]=this._statistics[h][1];break;case 3:for(h=0;h<f;h++)c[h]=this._statistics[h][2]-i.numberOfStandardDeviations*this._statistics[h][3],l[h]=this._statistics[h][2]+i.numberOfStandardDeviations*this._statistics[h][3],c[h]<this._statistics[h][0]&&(c[h]=this._statistics[h][0]),l[h]>this._statistics[h][1]&&(l[h]=this._statistics[h][1]);break;case 6:for(h=0;h<f;h++){for(s=this._histograms[h],n=new Uint32Array(s.size),a=s.counts,r=0,u=-.5===s.min&&(s.max-s.min)/a==1?.5:0,m=0;m<s.size;m++)r+=a[m],n[m]=r;for(o=i.minPercent*r/100,m=0;m<s.size;m++)if(n[m]>o){c[h]=s.min+(s.max-s.min)/s.size*(m+u);break}for(o=(1-i.maxPercent/100)*r,m=s.size-2;m>=0;m--)if(n[m]<o){l[h]=s.min+(s.max-s.min)/s.size*(m+2-u);break}}break;default:for(h=0;h<e;h++)c[h]=0,l[h]=255}return{minCutOff:c,maxCutOff:l}},_createLUT:function(t){var i=this.functionArguments,e=t.pixelBlock,s=e.pixelType;if("U8"===s||"U16"===s||"S8"===s||"S16"===s){if(this._LUTSignature){var r=this._computeLutSignature();if(r.length===this._LUTSignature.length&&!r.some(function(t,i){return t!==this._LUTSignature[i]}.bind(this)))return}var a,n,o,u,h,m=e.pixels.length,f=[],c=[],l=[],g=i.max,_=i.min,x=i.gamma,p=g-_,T=this._getCutOffPoints(t),d=T.minCutOff,A=T.maxCutOff,v=0,E=256;for("S8"===e.pixelType?v=-127:"S16"===e.pixelType&&(v=-32767),"U16"!==e.pixelType&&"S16"!==e.pixelType||(E=65536),a=0;a<m;a++)c[a]=A[a]-d[a],f[a]=p/(A[a]-d[a]);var U,F=this._gammaCorrection;if(i.useGamma)for(a=0;a<m;a++){for(h=[],n=0;n<E;n++)U=((o=n+v)-d[a])/c[a],u=1,x[a]>1&&(u-=Math.pow(1/p,U*F[a])),o<A[a]&&o>d[a]?h[n]=Math.floor(u*p*Math.pow(U,1/x[a]))+_:o>A[a]?h[n]=g:o<d[a]&&(h[n]=_);l[a]=h}else for(a=0;a<m;a++){for(h=[],n=0;n<E;n++)(o=n+v)<d[a]?h[n]=_:o>A[a]?h[n]=g:h[n]=Math.floor((o-d[a])/c[a]*p)+_;l[a]=h}this.LUT=l,this.LUTOffset=v,this._LUTSignature=this._computeLutSignature()}},_computeLutSignature:function(){var t,i,e=this.functionArguments,s=[];if(s.push(e.stretchType),s.push(e.min),s.push(e.max),s.push(e.numberOfStandardDeviations),this._statistics)for(t=0;t<this._statistics.length;t++)for(i=0;i<this._statistics[t].length;i++)s.push(this._statistics[t][i]);if(s.push(e.dra?1:0),s.push(e.minPercent),s.push(e.maxPercent),e.gamma)for(t=0;t<this._statistics.length;t++)s.push(e.gamma[t]);return s.push(e.useGamma?1:0),s},_filterNoLUT:function(t){if(null!==t&&null!==t.pixelBlock&&null!==t.pixelBlock.pixels){var i,e,s,r,a,n=this.functionArguments,o=t.pixelBlock,u=o.pixels,h=o.mask,m=o.width*o.height,f=u.length,c=[],l=[],g=[],_=n.max,x=n.min,p=n.gamma,T=_-x,d=this._getCutOffPoints(t),A=d.minCutOff,v=d.maxCutOff;for(i=0;i<f;i++)l[i]=v[i]-A[i],c[i]=T/(v[i]-A[i]);if(n.useGamma&&null!==p&&p.length>=f)for(i=0;i<f;i++)p[i]>1?p[i]>2?g[i]=6.5+Math.pow(p[i]-2,2.5):g[i]=6.5+100*Math.pow(2-p[i],4):g[i]=1;if(n.useGamma)if(null!=h){for(e=0;e<m;e++)if(h[e])for(i=0;i<f;i++)a=((s=u[i][e])-A[i])/l[i],r=1,p[i]>1&&(r-=Math.pow(1/T,a*g[i])),s<v[i]&&s>A[i]?u[i][e]=Math.floor(r*T*Math.pow(a,1/p[i]))+x:s>v[i]?u[i][e]=_:s<A[i]&&(u[i][e]=x)}else for(e=0;e<m;e++)for(i=0;i<f;i++)a=((s=u[i][e])-A[i])/l[i],r=1,p[i]>1&&(r-=Math.pow(1/T,a*g[i])),s<v[i]&&s>A[i]?u[i][e]=Math.floor(r*T*Math.pow(a,1/p[i]))+x:s>v[i]?u[i][e]=_:s<A[i]&&(u[i][e]=x);else if(null!=h){for(e=0;e<m;e++)if(h[e])for(i=0;i<f;i++)(s=u[i][e])<v[i]&&s>A[i]?u[i][e]=Math.floor((s-A[i])/l[i]*T)+x:s>v[i]?u[i][e]=_:s<A[i]&&(u[i][e]=x)}else for(e=0;e<m;e++)for(i=0;i<f;i++)(s=u[i][e])<v[i]&&s>A[i]?u[i][e]=Math.floor((s-A[i])/l[i]*T)+x:s>v[i]?u[i][e]=_:s<A[i]&&(u[i][e]=x);return t.pixelBlock.pixelType="U8",t}},_computeGammaValues:function(t){var i,e,s=this._statistics.length,r=[];for(i=0;i<s;i++)e=this._statistics[i][2],"U8"!==t&&(e=255*(e-this._statistics[i][0])/(this._statistics[i][1]-this._statistics[i][0])),r.push(this._computeGammaValue(e));return r},_computeGammaValue:function(t){if(0!==t&&!(t>255||t<0)){var i=0;t>0&&150!=t&&t<255&&(i=t<=150?45*Math.cos(.01047*t):17*Math.sin(.021*t));var e=t+i,s=Math.log(t/255),r=Math.log(e/255);if(0!==r){var a=s/r;if(!isNaN(a))return Math.min(9.9,Math.max(.01,a))}}},readGL:function(t){return this._stretchGL(t.raster)},_stretchGL:function(t){this._performance.start();var i,e,r,n=this.renderTexture,o=t.pixelBlock&&t.pixelBlock.pixels&&t.pixelBlock.pixels.length||this.sourceRasterInfo.raster.bandCount,u=t.pixelBlock,h=this.gl,m=h.drawingBufferWidth,f=h.drawingBufferHeight;if(!u&&this.functionArguments.dra){var c=new Float32Array(m*f*4),l=new Uint8Array(m*f),g=new Float32Array(m*f),_=new Float32Array(m*f),x=new Float32Array(m*f);for(h.checkFramebufferStatus(h.FRAMEBUFFER)==h.FRAMEBUFFER_COMPLETE&&h.readPixels(0,0,m,f,h.RGBA,h.FLOAT,c),i=0;i<m*f;i++)g[i]=c[4*i],_[i]=c[4*i+1],x[i]=c[4*i+2],l[i]=c[4*i+3];t.pixelBlock=new s({width:m,height:f,pixels:[g,_,x],mask:l}),t.pixelBlock.calculateStatistics()}if(!u&&this.functionArguments.dra&&this._useGPUStats)e=new Float32Array(o),r=new Float32Array(o);else{this._updateStatistisHistograms(t);var p=this._getCutOffPoints(t);e=new Float32Array(o),r=new Float32Array(o),e.set(p.minCutOff.slice(0,o)),r.set(p.maxCutOff.slice(0,o))}this._initializeProgram({fragment:a.stretch,fragmentName:"Stretch"});var T,d,A=this._setupTextureData(t),v=this.bindFrameBuffer(),E=A;if((this.renderTexture=!1,this._performance.start(),!u&&this.functionArguments.dra&&this._useGPUStats)&&(this._setUniforms({u_sourceDim:[m,f],u_bandCount:o}),1===o?T=this._readMinMax(A,2):(T=this._readMinMax(A,0),d=this._readMinMax(A,1)),6===this.functionArguments.stretchType||3===this.functionArguments.stretchType&&this.functionArguments.dra)){var U=this._readHistogram(T,d,t);e=U.minCutOff||e,r=U.minCutOff||r}var F=this.functionArguments.max-this.functionArguments.min,R=new Float32Array(o);for(i=0;i<o;i++)R[i]=F/(r[i]-e[i]);this._useGPUStats&&this._initializeProgram({fragment:a.stretch,fragmentName:"Stretch"}),h.blendFunc(h.SRC_ALPHA,h.ZERO);var b=new Float32Array(3),w=new Float32Array(3);for(i=0;i<3;i++)b[i]=this.functionArguments.min,w[i]=this.functionArguments.max;var S=this.functionArguments.useGamma,y=this.functionArguments.gamma,M=this._gammaCorrection;if(Array.isArray(y)&&y.length>=o||(S=!1),this._setUniforms({u_sourceDim:[m,f],u_bandCount:o,u_minOutput:b,u_maxOutput:w,u_minCutOff:e,u_maxCutOff:r,u_factor:R,u_state:100,u_useGamma:S,u_gamma:y,u_scaled:!n,u_gammaCorrection:M,u_minMaxTexture:!(u||!this.functionArguments.dra||!this._useGPUStats)}),this.renderTexture=n,h.viewport(0,0,m,f),this._bindTexture(E.texture,"u_image"),!u&&this.functionArguments.dra&&this._useGPUStats){var B=h.getUniformLocation(this.rasterProgram,"u_image1");if(h.uniform1i(B,1),h.activeTexture(h.TEXTURE1),h.bindTexture(h.TEXTURE_2D,T.texture),o>1){var P=h.getUniformLocation(this.rasterProgram,"u_image2");h.uniform1i(P,2),h.activeTexture(h.TEXTURE2),h.bindTexture(h.TEXTURE_2D,d.texture)}}return this._drawGL(),{extent:E.extent,texture:v.texture}},_readMinMax:function(t,i){var e,s,r,a,n=this.gl,o=t.width||n.drawingBufferWidth,u=t.height||n.drawingBufferHeight;this._setUniforms({u_state:i}),this.renderTexture=!1;var h=t.texture;for(n.activeTexture(n.TEXTURE0);o>1||u>1;)s=this._createTexture(),r=Math.max(Math.ceil(o/2),1),a=Math.max(Math.ceil(u/2),1),n.getExtension("OES_texture_float"),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,r,a,0,n.RGBA,n.FLOAT,null),e=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s,0),n.viewport(0,0,r,a),n.bindTexture(n.TEXTURE_2D,h),this._setUniforms({u_sourceDim:[o,u]}),o=r,u=a,this._drawGL(!0),h=s;var m=new Float32Array(o*u*4);return n.checkFramebufferStatus(n.FRAMEBUFFER)==n.FRAMEBUFFER_COMPLETE&&n.readPixels(0,0,o,u,n.RGBA,n.FLOAT,m),{texture:s,minmax:m}},_readHistogram:function(t,i,e){if(t)try{var s,n,o,u,h,m,f,c=this.gl,l=c.drawingBufferWidth,g=c.drawingBufferHeight;if(t.texture instanceof WebGLTexture)f=!0,u=[1,0,0,1],i?(h=t.minmax,m=i.minmax):(h=[t.minmax[0]],m=[t.minmax[1]]);else for(m=i,h=t,u=new Float32Array(m.length),s=0;s<m.length;s++)u[s]=256/(m[s]-h[s]);var _=new Float32Array(l*g);for(o=0;o<_.length;o++)_[o]=o;if(!this.histogramProgram){var x=r.getShader(c,r.histogram),p=a.getShader(c,a.constant);this.histogramProgram=this._loadProgram(x,p)}c.blendFunc(c.ONE,c.ONE),c.enable(c.BLEND),c.useProgram(this.histogramProgram);var T=c.getAttribLocation(this.histogramProgram,"a_pixelIndex"),d=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,d),c.bufferData(c.ARRAY_BUFFER,_,c.STATIC_DRAW),c.enableVertexAttribArray(T),c.vertexAttribPointer(T,1,c.FLOAT,!1,0,0);var A=this._setupHistTexture(e),v=this._createTexture();c.getExtension("OES_texture_float"),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,257,1,0,c.RGBA,c.FLOAT,null);var E=c.createFramebuffer();c.bindFramebuffer(c.FRAMEBUFFER,E),c.framebufferTexture2D(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,v,0);c.viewport(0,0,257,1);var U=c.getUniformLocation(this.histogramProgram,"u_image");c.uniform1i(U,0),c.activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,A);var F=c.getUniformLocation(this.histogramProgram,"u_sourceDim");c.uniform2f(F,l,g);var R=c.getUniformLocation(this.histogramProgram,"u_bandCount");c.uniform1i(R,3);var b=c.getUniformLocation(this.histogramProgram,"u_halfPixel");c.uniform2f(b,.5/l,.5/g);var w=c.getUniformLocation(this.histogramProgram,"u_minMaxTexture");if(f){c.uniform1i(w,1);var S=c.getUniformLocation(this.histogramProgram,"u_image1");if(c.uniform1i(S,1),c.activeTexture(c.TEXTURE1),c.bindTexture(c.TEXTURE_2D,t.texture),i){var y=c.getUniformLocation(this.histogramProgram,"u_image2");c.uniform1i(y,2),c.activeTexture(c.TEXTURE2),c.bindTexture(c.TEXTURE_2D,i.texture)}}else{var M=c.getUniformLocation(this.histogramProgram,"u_mins");c.uniform4f(M,h[0],h[0],h[0],h[0]),c.uniform1i(w,0)}var B=c.getUniformLocation(this.histogramProgram,"u_color"),P=c.getUniformLocation(this.histogramProgram,"u_factors"),L=c.getUniformLocation(this.histogramProgram,"u_size");c.uniform1f(L,256);var O,C=[],G=[];c.uniform4fv(B,[1,0,0,1]),c.uniform4fv(P,[u[0],0,0,1]),c.drawArrays(c.POINTS,0,_.length);var k=this.sourceRasterInfo.raster.bandCount;if(k>1&&(c.uniform4fv(B,[0,1,0,1]),c.uniform4fv(P,[0,u[0],0,1]),c.drawArrays(c.POINTS,0,_.length),c.uniform4fv(B,[0,0,1,1]),c.uniform4fv(P,[0,0,u[0],1]),c.drawArrays(c.POINTS,0,_.length)),c.checkFramebufferStatus(c.FRAMEBUFFER)==c.FRAMEBUFFER_COMPLETE){var D;O=new Float32Array(1028),c.readPixels(0,0,257,1,c.RGBA,c.FLOAT,O);var H=0,X=-.5===h[0]&&(m[0]-h[0])/256==1?.5:0;for(s=0;s<k;s++){D=new Float32Array(257);var I=new Float32Array(257);for(H=0,o=0;o<256;o++)H+=O[4*o+s],D[o]=H,I[o]=O[4*o+s];I[256]=O[1024+s],D[256]=H+O[1024+s];var z=this.functionArguments.minPercent*H/100;if(m){for(n=0;n<256;n++)if(D[n]>z){C[s]=h[0]+(m[0]-h[0])/256*(n+X);break}for(z=(1-this.functionArguments.maxPercent/100)*H,n=254;n>=0;n--)if(D[n]<z){G[s]=h[0]+(m[0]-h[0])/256*(n+2-X);break}}}}return{histogram:O,minCutOff:C,maxCutOff:G}}catch(t){return void console.debug("webgl filter exception: "+t.message)}},_setupHistTexture:function(t){if(t instanceof WebGLTexture)return t;var i=this.originalHistTexture=this._createTexture(),e=this.gl,s=t.pixelBlock,r=s.width,a=s.height;return e.getExtension("OES_texture_float"),this.rgbaFloatData=s.getAsRGBAFloat(),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,r,a,0,e.RGBA,e.FLOAT,this.rgbaFloatData),i}})}));