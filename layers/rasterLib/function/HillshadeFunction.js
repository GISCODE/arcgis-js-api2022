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

define(["dojo/_base/declare","dojo/_base/lang","./RasterFunctionX","../../../renderers/colorRampGenerator","../../../WKIDUnitConversion","../../PixelBlock","./pixelShaders","./RasterFunctionWebGLMixin","./surfaceUtils","./rasterUtils"],(function(t,e,i,r,s,a,n,o,l,h){return t([i,o],{declaredClass:"esri.layers.rasterLib.function.HillshadeFunction",functionName:"Hillshade",supportWebGL:!0,support2D:!0,renderTexture:!0,constructor:function(t){this.functionArguments=this.mixinIgnoreCase({hillshadeType:0,altitude:45,azimuth:315,zFactor:1,slopeType:1,psPower:.664,psFactor:.024,colorRamp:null,raster:null},t),this._azimuths=[315,270,225,360,180,0],this._altitudes=[60,60,60,60,60,90],this._weights=[3,5,3,2,1,4];var e=this._weights.reduce((function(t,e){return t+e}));this._weights=this._weights.map((function(t){return t/e}))},bind:function(t){var i=this.getSourceRasterInfo(t);return i.raster?(i.raster.statistics&&(this.srcStatistics=i.raster.statistics),this.rasterInfo=e.mixin(i.raster,{bandCount:1,pixelType:this._calculatePixelType(this.pixelType,"U8"),statistics:[{min:0,max:255}],histograms:null}),this.rasterInfo.keyProperties=this.rasterInfo.keyProperties||{},this.rasterInfo.keyProperties.DataType="Generic",this._initializeColormap(),!0):new Error("The raster input to hillshade function is invalid.")},read2D:function(t){this._performance.start();var e=t.raster,i=e.extent.spatialReference.wkid&&null==s[e.extent.spatialReference.wkid],r=l.hillshade(e,{altitude:this.functionArguments.altitude,azimuth:this.functionArguments.azimuth,zFactor:this.functionArguments.zFactor,psPower:this.functionArguments.psPower,psFactor:this.functionArguments.psFactor,hillshadeType:this.functionArguments.hillshadeType,slopeType:this.functionArguments.slopeType,isGCS:i});return this._addPerformanceMetric(this._performance.elapsed()),r},readGL:function(t){this._performance.start(),this._initializeProgram({fragment:n.hillshade,fragmentName:"Hillshade"}),this.functionArguments.colorRamp&&this._indexedColormap&&(this._clrTexture||(this._clrTexture=this._setupColormapTexture(this._indexedColormap)));var e=this._setupTextureData(t.raster),i=this.bindFrameBuffer(),r=this.gl,a=r.drawingBufferWidth,o=r.drawingBufferHeight,l=e.extent,h=(l.xmax-l.xmin)/a,u=(l.ymax-l.ymin)/o,c=this.functionArguments.altitude,p=this.functionArguments.azimuth,m=this.functionArguments.zFactor;1===this.functionArguments.hillshadeType&&(m*=2);var d=m/(8*h),f=m/(8*u);m>.001&&l.spatialReference.wkid&&null==s[l.spatialReference.wkid]&&(d/=111e3,f/=111e3);var _=this.functionArguments.psPower,x=this.functionArguments.psFactor;if(3===this.functionArguments.slopeType)if(l.spatialReference.wkid&&null==s[l.spatialReference.wkid]){var g=111e3*h,C=111e3*u;d=(m+Math.pow(g,_)*x)/(8*g),f=(m+Math.pow(C,_)*x)/(8*C)}else d=(m+Math.pow(h,_)*x)/(8*h),f=(m+Math.pow(u,_)*x)/(8*u);var A,T,w=(90-c)*Math.PI/180,y=Math.cos(w),M=(360-p+90)*Math.PI/180,R=Math.sin(w)*Math.cos(M),v=Math.sin(w)*Math.sin(M),F=new Array(6),P=Array(6),z=Array(6),k=this._weights;if(1===this.functionArguments.hillshadeType)for(A=this._azimuths.length,T=0;T<A;T++)c=this._altitudes[T],p=this._azimuths[T],w=(90-c)*Math.PI/180,y=Math.cos(w),M=(360-p+90)*Math.PI/180,R=Math.sin(w)*Math.cos(M),v=Math.sin(w)*Math.sin(M),F[T]=y,P[T]=R,z[T]=v;else F[0]=y,P[0]=R,z[0]=v;F=F.map((function(t){return parseFloat(t)})),P=P.map((function(t){return parseFloat(t)})),z=z.map((function(t){return parseFloat(t)}));var I=t&&t.raster&&t.raster.pixelBlock?[1/t.raster.pixelBlock.width,1/t.raster.pixelBlock.height]:[1/a,1/o];return this._setUniforms({u_cellSize:[h,u],u_zfactor:m,u_xFactor:d,u_yFactor:f,u_sinZcosA:R,u_sinZsinA:v,u_cosZ:y,u_sinZcosAs:P,u_sinZsinAs:z,u_cosZs:F,u_weights:k,u_hillshadeType:this.functionArguments.hillshadeType,u_resolution:I,u_scaled:!this.renderTexture,u_applyColorramp:!!this._clrTexture,u_minValue:this.srcStatistics[0].min,u_maxValue:this.srcStatistics[0].max,u_indexedColormapOffset:this._indexedColormapOffset||0,u_indexedColormapMaxIndex:this._indexedColormap?this._indexedColormap.length/4-1:0}),this._clrTexture&&this._bindTexture(this._clrTexture,"u_image1"),this._bindTexture(e.texture,"u_image"),this._drawGL(),this._addPerformanceMetric(this._performance.elapsed()),{extent:e.extent,texture:i.texture}},_initializeColormap:function(){this._indexedColormapOffset=0;var t=this._indexedColormap,e=this.functionArguments.colorRamp;if(this.functionArguments.colormap){var i=h.buildIndexedColormap(this.functionArguments.colormap);this._alphaSpecified=i&&i.alphaSpecified,this._indexedColormap=i&&i.indexedColormap,this._indexedColormapOffset=i&&i.offset}else e?("multipart"===e.type?this.invert?this._indexedColormap=r.createMultiPartColorRamp(this._invertColorRamp(e)):this._indexedColormap=r.createMultiPartColorRamp(e):this.invert?this._indexedColormap=r.createAlgorithmicColorRamp(this._invertColorRamp(e)):this._indexedColormap=r.createAlgorithmicColorRamp(e),e.fromColor&&e.toColor&&"000"===e.fromColor.slice(0,3).join("")&&"255255255"===e.toColor.slice(0,3).join("")&&(this._indexedColormap=null,this._clrTexture=null)):this.functionArguments.colormapName?"random"===this.functionArguments.colormapName.toLowerCase()&&(this._indexedColormap=r.createRandomColorRamp()):(this._indexedColormap=null,this._clrTexture=null);if(t&&this._indexedColormap){for(var s=!0,a=0;a<t.length;a++)if(t[a]!==this._indexedColormap[a]){s=!1;break}s||(this._clrTexture=null)}},_setupColormapTexture:function(t){var e,i=this._createTexture(),r=this.gl,s=t.length/4,a=new Float32Array(t.length);for(e=0;e<t.length;e++)a[e]=t[e]/255;return r.getExtension("OES_texture_float"),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,s,1,0,r.RGBA,r.FLOAT,a),i}})}));