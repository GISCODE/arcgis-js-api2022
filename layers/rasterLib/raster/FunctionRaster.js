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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/Deferred","dojo/_base/array","dojo/_base/config","dojo/_base/json","dojo/sniff","../DeferredList2","dojo/when","../../../kernel","../../../Evented","../../../request","../../../deferredUtils","../../../geometry/Extent","../../../geometry/Point","../../../SpatialReference","../../../deferredUtils","../../../urlUtils","../../rasterFormats/rasterCodec","./RasterInfo","./BasicRaster","../../rasterLib/function/rasterFunctionHelper"],(function(e,t,r,n,s,i,a,o,c,u,f,h,l,d,m,g,b,p,F,_,y,R,j){var v=t([R],{declaredClass:"esri.layers.rasterLib.raster.FunctionRaster",rasterFunction:null,sourceType:"Function",constructor:function(e){e&&e.rasterFx&&this._init(e.rasterFx,e.rasterFxArgs)},open:function(){var e=this.getMemberRasters().map((function(e){return e.open()}));this.identifiers=this.getMemberRasters().map((function(e){return e._rasterId}));var t=new n;return new c(e,null,null,!0).then(function(e){e.some((function(e){return!e[0]}))?t.reject(e):(this.rasterFunction.bind(),this.rasterInfo=this.rasterFunction.rasterInfo,this.dataType=this.rasterInfo.keyProperties&&this.rasterInfo.keyProperties.DataType||"Generic",this.tileInfo=e[0][1].tileInfo,t.resolve(this))}.bind(this)),t.promise},getProjectedFullExtent:function(e){var t=new n;return this.getMemberRasters()[0].getProjectedFullExtent(e).then(r.hitch(this,(function(e){this.projectedFullExtent=e,t.resolve(e)}))),t.promise},setProcessingContext:function(e){var t=e;if(e.layer){var r=e.layer,n=r.tileMode&&r.tileManager&&r.tileManager.xformSetting.requireProjection&&!r._hasTilingEffects&&"Thematic"!==r.raster.dataType;t={id:r.id,rawRasterInfo:r.raster.rasterInfo,glSetting:r._glSetting,xformSetting:r.tileManager&&r.tileManager.xformSetting,useWebGL:r.useWebGL,resampling:n?1:0,tileMode:r.tileMode}}this.rasterFunction.setProcessingContext(t),this._layerOptions=t},alterDefinition:function(e){if(e=e||this.rasterFunction){if(1===this.memberRasters.length&&!e._bindComplete){var t={raster:this.memberRasters[0]};this.rasterFunction=j.create(e,t),this.rasterFunction&&(this.rasterFunction.bind(),this.rasterInfo=this.rasterFunction.rasterInfo,this.dataType=this.rasterInfo.keyProperties&&this.rasterInfo.keyProperties.DataType||"Generic",this.rasterFunction.setProcessingContext(this._layerOptions))}this._rasterHandler&&this._rasterHandler._connected&&this.rasterFunction&&this._rasterHandler.setRasterFunction({layerId:this._layerOptions.id,data:this.rasterFunction.toJson(!0)})}},setFetchParameters:function(e,t){var r=this.getMemberRasters();r&&1===r.length&&r[0].setFetchParameters(e,t)},getMemberRasters:function(){return this.memberRasters?this.memberRasters:(this.memberRasters=[],this._getMemberRasters(this.rasterFunction.functionArguments,this.memberRasters),this.memberRasters)},read:function(e){var t,s=new n(d._dfdCanceller);if(e.src)return t=this.rasterFunction.read(e),s.resolve(t),s.promise;var i,a=this.getMemberRasters().map((function(t){return t.read(e)})),o=new c(a),u=this.identifiers;return s._pendingDfd=o,o.then(r.hitch(this,(function(r){r.some((function(e){return e[0]}))&&(i={},r.forEach((function(e,t){i[u[t]]=e[0]?e[1]:null}))),(t=i?this.rasterFunction.read({extent:e.extent,src:i}):null).srcData=i,s.resolve(t)}))),s},_init:function(e,t){if(this.rasterFunction=j.create(e,t),!this.rasterFunction)throw"Cannot initialize a function raster without a raster function";this.rasterFunction._bindComplete=!0},_getMemberRasters:function(e,t){var r,n,s,i,a=Object.keys(e);for(r=0;r<a.length;r++)if(s=e[a[r]])for(i=s instanceof Array?s:[s],n=0;n<i.length;n++)(s=i[n])&&("function"==typeof s||"object"==typeof s)&&s.read&&(s.functionArguments?this._getMemberRasters(s.functionArguments,t):s.sourceType&&"Function"!==s.sourceType&&(s._identifier=s._getRasterIdentifier(),t.some((function(e){return e._identifier===s._identifier}))||t.push(s)));return t}});return o("extend-esri")&&r.setObject("layers.rasterLib.raster.FunctionRaster",v,f),v}));