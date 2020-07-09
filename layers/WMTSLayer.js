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

define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/sniff","dojox/xml/parser","../kernel","../lang","../request","../urlUtils","../WKIDUnitConversion","../SpatialReference","../geometry/Point","../geometry/Extent","../geometry/webMercatorUtils","./TiledMapServiceLayer","./TileInfo","./WMTSLayerInfo","dojo/query"],(function(e,t,i,r,s,o,n,l,a,h,f,u,d,g,p,c,m,y){var _=t([c],{declaredClass:"esri.layers.WMTSLayer",copyright:null,extent:null,tileUrl:null,spatialReference:null,tileInfo:null,constructor:function(e,t){if(this.version="1.0.0",this.tileUrl=this._url=e,this.serviceMode="RESTful",this._parseCapabilities=i.hitch(this,this._parseCapabilities),this._getCapabilitiesError=i.hitch(this,this._getCapabilitiesError),this._formatDictionary={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},t||(t={}),t.serviceMode){if("KVP"!==t.serviceMode&&"RESTful"!==t.serviceMode)return void console.error("WMTS mode could only be 'KVP' or 'RESTful'");this.serviceMode=t.serviceMode}this.customParameters=t.customParameters,this.customLayerParameters=t.customLayerParameters,this.layerInfo=new y,t.layerInfo&&(this.layerInfo=t.layerInfo,this._identifier=t.layerInfo.identifier,this._tileMatrixSetId=t.layerInfo.tileMatrixSet,t.layerInfo.format&&(this.format="image/"+t.layerInfo.format),this._style=t.layerInfo.style,this.title=t.layerInfo.title,this._dimension=t.layerInfo.dimension,this._dimension2=t.layerInfo.dimension2),t.resourceInfo?(this.version=t.resourceInfo.version,t.resourceInfo.getTileUrl&&(this._url=this.tileUrl=t.resourceInfo.getTileUrl),this.copyright=t.resourceInfo.copyright,this.layerInfos=t.resourceInfo.layerInfos,this.customParameters=t.resourceInfo.customParameters||this.customParameters,this.customLayerParameters=t.resourceInfo.customLayerParameters||this.customLayerParameters,this._parseResourceInfo(),this.loaded=!0,this.onLoad(this)):this._getCapabilities()},setActiveLayer:function(e){this.setVisibleLayer(e)},setVisibleLayer:function(e){this._setActiveLayer(e),this.refresh(!0)},setCustomParameters:function(e,t){this.customParameters=e,this.customLayerParameters=t,this.refresh(!0)},getTileUrl:function(e,t,i){var r;return e=this._levelToLevelValue[e],r=this.resourceUrls&&this.resourceUrls.length>0?this.resourceUrls[t%this.resourceUrls.length].template.replace(/\{Style\}/gi,this._style).replace(/\{TileMatrixSet\}/gi,this._tileMatrixSetId).replace(/\{TileMatrix\}/gi,e).replace(/\{TileRow\}/gi,t).replace(/\{TileCol\}/gi,i).replace(/\{dimensionValue\}/gi,this._dimension).replace(/\{dimensionValue2\}/gi,this._dimension2):this.UrlTemplate.replace(/\{level\}/gi,e).replace(/\{row\}/gi,t).replace(/\{col\}/gi,i),r=this._appendCustomLayerParameters(r),r=this.addTimestampToURL(r),h.addProxy(r)},getTileUrlTemplate:function(e){var t,i,s=e.identifier,o=e.tileMatrixSet,n=e.format,l=e.style,a=e.dimension,h=e.dimension2;if(s?t=r.filter(this.layers,(function(e){return e.identifier===s}))[0]:(t=this.layers[0],s=this.layers[0].identifier),!t)return console.error("couldn't find the layer "+s),void this.onError(new Error("couldn't find the layer "+s));if(n){if(-1===n.indexOf("image/")&&r.indexOf(t.formats,n)>-1);else if(-1===n.indexOf("image/")&&(n="image/"+n),-1===r.indexOf(t.formats,n))return console.error("The layer doesn't support the format of "+n),void this.onError(new Error("The layer doesn't support the format of "+n))}else n=t.formats[0];if(l){if(-1===r.indexOf(t.styles,l))return console.error("The layer doesn't support the style of "+l),void this.onError(new Error("The layer doesn't support the style of "+l))}else l=t.styles[0];if(!a&&t.dimensions)a=t.dimensions[0];else if(-1===r.indexOf(t.dimensions,a))return console.error("The layer doesn't support the dimension of "+a),void this.onError(new Error("The layer doesn't support the dimension of "+a));if(!h&&t.dimensions2)h=t.dimensions2[0];else if(-1===r.indexOf(t.dimensions2,h))return console.error("The layer doesn't support the dimension of "+h),void this.onError(new Error("The layer doesn't support the dimension of "+h));if(o){if(!(i=r.filter(t.tileMatrixSetInfos,(function(e){return e.tileMatrixSet===o}))[0]))return console.error("The tileMatrixSetId "+o+" is not supported by the layer of "+s),void this.onError(new Error("The tileMatrixSetId "+o+" is not supported by the layer of "+s))}else(i=r.filter(t.tileMatrixSetInfos,(function(e){return"GoogleMapsCompatible"===e.tileMatrixSet}))[0])||(i=t.tileMatrixSetInfos[0]),o=i.tileMatrixSet;return this._getTileUrlTemplate(s,o,n,l,a,h)},_getTileUrlTemplate:function(e,t,i,r,s,o){var n;if(e||(e=this._identifier),t||(t=this._tileMatrixSetId),i||(i=this.format),r||""===r||(r=this._style),this.resourceUrls&&this.resourceUrls.length>0)return(n=this.resourceUrls[0].template).indexOf(".xxx")===n.length-4&&(n=n.slice(0,n.length-4)),n=(n=(n=(n=(n=(n=(n=n.replace(/\{Style\}/gi,r)).replace(/\{TileMatrixSet\}/gi,t)).replace(/\{TileMatrix\}/gi,"{level}")).replace(/\{TileRow\}/gi,"{row}")).replace(/\{TileCol\}/gi,"{col}")).replace(/\{dimensionValue\}/gi,s)).replace(/\{dimensionValue2\}/gi,o);if("KVP"===this.serviceMode)n=this._url+"SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+r+"&FORMAT="+i+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";else if("RESTful"===this.serviceMode){var l="";this._formatDictionary[i.toLowerCase()]&&(l=this._formatDictionary[i.toLowerCase()]),n=this._url+e+"/"+r+"/"+t+"/{level}/{row}/{col}"+l}return n},_parseResourceInfo:function(){var e,t,s=this.layerInfos;for("KVP"===this.serviceMode&&(this._url+=this._url.indexOf("?")>-1?"":"?"),t=0;t<s.length;t++)if(!(this._identifier&&s[t].identifier!==this._identifier||this.title&&s[t].title!==this.title||this._tileMatrixSetId&&s[t].tileMatrixSet!==this._tileMatrixSetId||this.format&&"image/"+s[t].format!==this.format||this._style&&s[t].style!==this._style)){i.mixin(this,{description:s[t].description,tileInfo:s[t].tileInfo,spatialReference:s[t].tileInfo.spatialReference,fullExtent:s[t].fullExtent,initialExtent:s[t].initialExtent,_identifier:s[t].identifier,_tileMatrixSetId:s[t].tileMatrixSet,format:"image/"+s[t].format,_style:s[t].style});break}for(t=0;t<s.length;t++)96!==(e=s[t].tileInfo).dpi&&(r.forEach(e.lods,(function(t){t.scale=96*t.scale/e.dpi})),e.dpi=96),r.forEach(e.lods,(function(i){i.resolution=this._getResolution(e.spatialReference.wkid,90.71428571428571*i.scale/96,s[t].tileMatrixSet)}),this);this._setActiveLayer(),this.UrlTemplate=this._getTileUrlTemplate(),this._levelToLevelValue=[],r.forEach(this.tileInfo.lods,(function(e){this._levelToLevelValue[e.level]=e.levelValue?e.levelValue:e.level}),this)},_getCapabilities:function(){var e;"KVP"===this.serviceMode?e=this._url.indexOf("?")>-1?this._url+"&request=GetCapabilities&service=WMTS&version="+this.version:this._url+"?request=GetCapabilities&service=WMTS&version="+this.version:"RESTful"===this.serviceMode&&(e=this._url+"/"+this.version+"/WMTSCapabilities.xml"),e=this._appendCustomParameters(e),a({url:e,handleAs:"text",load:this._parseCapabilities,error:this._getCapabilitiesError})},_parseCapabilities:function(t){t=t.replace(/ows:/gi,"");var i=o.parse(t),s=e.query("Contents",i)[0];if(!s)return console.error("The WMTS capabilities XML is not valid"),void this.onError(new Error("The WMTS capabilities XML is not valid"));var n,l,a,h=e.query("OperationsMetadata",i)[0],f=e.query("[name='GetTile']",h)[0],u=this._url,d=e.query("Get",f),g=!1;for(n=0;n<d.length;n++){var p=e.query("Constraint",d[n])[0];if(!p||this._getTagWithChildTagValue("AllowedValues","Value",this.serviceMode,p)){u=d[n].attributes[0].nodeValue,g=!0;break}!p||this._getTagWithChildTagValue("AllowedValues","Value","RESTful",p)?l=d[n].attributes[0].nodeValue:p&&!this._getTagWithChildTagValue("AllowedValues","Value","KVP",p)||(a=d[n].attributes[0].nodeValue)}g||("KVP"===this.serviceMode&&l?(u=l,this.serviceMode="RESTful"):"RESTful"===this.serviceMode&&a&&(u=a,this.serviceMode="KVP")),-1===u.indexOf("/1.0.0/")&&"RESTful"===this.serviceMode&&(u+="/"),"KVP"===this.serviceMode&&(u+=u.indexOf("?")>-1?"":"?"),this._url=u,this.copyright=this._getTagValues("Capabilities>ServiceIdentification>AccessConstraints",i)[0];var c,m=e.query("Layer",s),y=[];this.layers=[],r.forEach(m,(function(e){c=this._getTagValues("Identifier",e)[0],y.push(c),this.layers.push(this._getWMTSLayerInfo(c,e,s))}),this),this._setActiveLayer(),this.loaded=!0,this.onLoad(this)},_setActiveLayer:function(e){if(e||(e={}),e.identifier&&(this._identifier=e.identifier),e.tileMatrixSet&&(this._tileMatrixSetId=e.tileMatrixSet),e.format&&(this.format=e.format),e.style&&(this._style=e.style),e.dimension&&(this._dimension=e.dimension),e.dimension2&&(this._dimension2=e.dimension2),this.layers){var t,i;if(this._identifier?t=r.filter(this.layers,(function(e){return e.identifier===this._identifier}),this)[0]:(t=this.layers[0],this._identifier=this.layers[0].identifier),!t)return console.error("couldn't find the layer "+this._identifier),void this.onError(new Error("couldn't find the layer "+this._identifier));if(this.format){if(-1===this.format.indexOf("image/")&&(this.format="image/"+this.format),-1===r.indexOf(t.formats,this.format))return console.error("The layer doesn't support the format of "+this.format),void this.onError(new Error("The layer doesn't support the format of "+this.format))}else this.format=t.formats[0],-1===this.format.indexOf("image/")&&(this.format="image/"+this.format);if(this._style){if(-1===r.indexOf(t.styles,this._style))return console.error("The layer doesn't support the style of "+this._style),void this.onError(new Error("The layer doesn't support the style of "+this._style))}else this._style=t.styles[0];if(!this._dimension&&t.dimensions)this._dimension=t.dimensions[0];else if(-1===r.indexOf(t.dimensions,this._dimension))return console.error("The layer doesn't support the dimension of "+this._dimension),void this.onError(new Error("The layer doesn't support the dimension of "+this._dimension));if(!this._dimension2&&t.dimensions2)this._dimension2=t.dimensions2[0];else if(-1===r.indexOf(t.dimensions2,this._dimension2))return console.error("The layer doesn't support the dimension of "+this._dimension2),void this.onError(new Error("The layer doesn't support the dimension of "+this._dimension2));if(this._tileMatrixSetId){if(!(i=r.filter(t.tileMatrixSetInfos,(function(e){return e.tileMatrixSet===this._tileMatrixSetId}),this)[0]))return console.error("The tileMatrixSetId "+this._tileMatrixSetId+" is not supported by the layer of "+this._identifier),void this.onError(new Error("The tileMatrixSetId "+this._tileMatrixSetId+" is not supported by the layer of "+this._identifier))}else(i=r.filter(t.tileMatrixSetInfos,(function(e){return"GoogleMapsCompatible"===e.tileMatrixSet}))[0])||(i=t.tileMatrixSetInfos[0]),this._tileMatrixSetId=i.tileMatrixSet;this.description=t.description,this.title=t.title,this.spatialReference=i.tileInfo.spatialReference,this.tileInfo=i.tileInfo,this._levelToLevelValue=[],r.forEach(this.tileInfo.lods,(function(e){this._levelToLevelValue[e.level]=e.levelValue?e.levelValue:e.level}),this),102100===this.spatialReference.wkid||102113===this.spatialReference.wkid?this.fullExtent=this.initialExtent=p.geographicToWebMercator(t.gcsExtent):4326===this.spatialReference.wkid?this.fullExtent=this.initialExtent=t.gcsExtent:(this.fullExtent=i.fullExtent,this.initialExtent=i.initialExtent),this.resourceUrls=t.resourceUrls,this.UrlTemplate=this._getTileUrlTemplate(),this.layerInfo={identifier:this._identifier,tileMatrixSet:this._tileMatrixSetId,format:this.format,style:this._style,fullExtent:this.fullExtent,initialExtent:this.initialExtent,tileInfo:this.tileInfo,title:this.title,description:this.description}}},_getWMTSLayerInfo:function(t,i,s){var o,n=this._getTagValues("Abstract",i)[0],l=this._getTagValues("Title",i)[0],a=e.query("WGS84BoundingBox",i)[0],h=a?this._getTagValues("LowerCorner",a)[0].split(" "):["-180","-90"],f=a?this._getTagValues("UpperCorner",a)[0].split(" "):["180","90"],d=parseFloat(h[0]),p=parseFloat(h[1]),c=parseFloat(f[0]),m=parseFloat(f[1]),y=new g(d,p,c,m,new u({wkid:4326})),_=this._getTagValues("Identifier",e.query("Style",i)[0]),T=this._getTagValues("Identifier",e.query("Dimension",i)[0]),x=this._getTagValues("Default",e.query("Dimension",i)[0])||this._getTagValues("Value",e.query("Dimension",i)[0]),v=e.query("Dimension",i).length>1?this._getTagValues("Identifier",e.query("Dimension",i)[1]):[],M=e.query("Dimension",i).length>1?this._getTagValues("Default",e.query("Dimension",i)[1])||this._getTagValues("Value",e.query("Dimension",i)[1]):[],I=this._getTagValues("Format",i),E={identifier:t,tileMatrixSetInfos:this._getLayerMatrixInfos(i,s),formats:I,styles:_,title:l,description:n,gcsExtent:y,dimensions:x,dimensions2:M},S=e.query("ResourceURL",i),V=[];return r.forEach(S,(function(e){var t;(o=e.getAttribute("template"),T&&x&&T[0]&&x[0])&&(o.indexOf("{"+T+"}")>-1?o=o.replace("{"+T+"}","{dimensionValue}"):(t=o.toLowerCase().indexOf("{"+T[0].toLowerCase()+"}"))>-1&&(o=o.substring(0,t)+"{dimensionValue}"+o.substring(t+T[0].length+2)));v&&M&&v[0]&&M[0]&&(o.indexOf("{"+v+"}")>-1?o=o.replace("{"+v+"}","{dimensionValue2}"):(t=o.toLowerCase().indexOf("{"+v[0].toLowerCase()+"}"))>-1&&(o=o.substring(0,t)+"{dimensionValue2}"+o.substring(t+v[0].length+2)));V.push({template:o,format:e.getAttribute("format"),resourceType:e.getAttribute("resourceType")})})),V&&V.length>0&&(E.resourceUrls=V),E},_getLayerMatrixInfos:function(e,t){var i=[],s=this._getTagValues("TileMatrixSet",e);if(s&&0!==s.length)return r.forEach(s,(function(r){var s=this._getLayerMatrixInfo(r,e,t);i.push(s)}),this),i},_getLayerMatrixInfo:function(t,i,r){var s,o,n,l,a,h,f,p=[],c=this._getTagWithChildTagValue("TileMatrixSetLink","TileMatrixSet",t,i),y=this._getTagValues("TileMatrix",c),_=this._getTagWithChildTagValue("TileMatrixSet","Identifier",t,r),T=this._getTagValues("SupportedCRS",_)[0];900913!=(s=parseInt(T.split(":").pop(),10))&&3857!=s||(s=102100),T.toLowerCase().indexOf("crs84")>-1||T.toLowerCase().indexOf("crs:84")>-1?(s=4326,f=!0):T.toLowerCase().indexOf("crs83")>-1||T.toLowerCase().indexOf("crs:83")>-1?(s=4269,f=!0):(T.toLowerCase().indexOf("crs27")>-1||T.toLowerCase().indexOf("crs:27")>-1)&&(s=4267,f=!0);var x=new u({wkid:s}),v=e.query("TileMatrix",_)[0];o=parseInt(this._getTagValues("TileWidth",v)[0],10),n=parseInt(this._getTagValues("TileHeight",v)[0],10);var M=this._getTagValues("TopLeftCorner",v)[0].split(" "),I=M[0],E=M[1];if(I.split("E").length>1){var S=I.split("E");I=S[0]*Math.pow(10,S[1])}if(E.split("E").length>1){var V=E.split("E");E=V[0]*Math.pow(10,V[1])}I=parseFloat(I),E=parseFloat(E);var L=f&&4326===s&&90===I&&-180===E;for(l=0;l<this._flippingAxisForWkids.length;l++)if(T.split(":").pop()>=this._flippingAxisForWkids[l][0]&&T.split(":").pop()<=this._flippingAxisForWkids[l][1]||4326===s&&(!f||L)){4326===s&&I>90&&(I="90"),a=new d(E,I,x);break}if(l===this._flippingAxisForWkids.length&&(a=new d(I,E,x)),0===y.length){var C=e.query("TileMatrix",_);for(l=0;l<C.length;l++)h=this._getLodFromTileMatrix(C[l],s,l,t),p.push(h)}else for(l=0;l<y.length;l++){var w=this._getTagWithChildTagValue("TileMatrix","Identifier",y[l],_);h=this._getLodFromTileMatrix(w,s,l,t),p.push(h)}var b,R,O,P,q,U,W,A=e.query("BoundingBox",_)[0];if(A&&(b=this._getTagValues("LowerCorner",A)[0].split(" "),R=this._getTagValues("UpperCorner",A)[0].split(" ")),b&&b.length>1&&R&&R.length>1)O=parseFloat(b[0]),q=parseFloat(b[1]),P=parseFloat(R[0]),U=parseFloat(R[1]);else{var F=this._getTagValues("MatrixWidth",v)[0],k=this._getTagValues("MatrixHeight",v)[0];O=a.x,U=a.y,P=O+F*n*p[0].resolution,q=U-k*o*p[0].resolution}return{tileMatrixSet:t,fullExtent:W=new g(O,q,P,U,x),initialExtent:W,tileInfo:new m({dpi:96,spatialReference:x,format:this.format,rows:o,cols:n,origin:a,lods:p})}},_getCapabilitiesError:function(e){console.error("Failed to get capabilities xml"),this.onError(e)},_getLodFromTileMatrix:function(e,t,i,r){var s=this._getTagValues("Identifier",e)[0],o=this._getTagValues("ScaleDenominator",e)[0];if(o.split("E").length>1){var n=o.split("E");o=n[0]*Math.pow(10,n[1])}else o=parseFloat(o);var l=this._getResolution(t,o,r);return{level:i,levelValue:s,scale:o*=1.058267716535433,resolution:l}},_getResolution:function(e,t,i){return 7*t/25e3/(l.isDefined(f[e])?f.values[f[e]]:"default028mm"===i?6370997*Math.PI/180:6378137*Math.PI/180)},_getTag:function(t,i){var r=e.query(t,i);return r&&r.length>0?r[0]:null},_getTagValues:function(t,i){var o,n,l,a=[],h=t.split(">");if(o=e.query(h[0],i)[0],h.length>1){for(l=1;l<h.length-1;l++)o=e.query(h[l],o)[0];n=e.query(h[h.length-1],o)}else n=e.query(h[0],i);return n&&n.length>0&&r.forEach(n,(function(e){s("ie")<9?a.push(e.childNodes.length?e.childNodes[0].nodeValue:""):a.push(e.textContent)})),a},_getAttributeValues:function(t,i,s){var o=e.query(t,s),n=[];return o&&o.length>0&&r.forEach(o,(function(e){n.push(e.getAttribute(i))})),n},_getTagWithChildTagValue:function(t,i,r,o){var n,a,h=o.childNodes;for(a=0;a<h.length;a++)if(h[a].nodeName.indexOf(t)>-1&&(s("ie")<9?l.isDefined(e.query(i,h[a])[0])&&(n=e.query(i,h[a])[0].childNodes[0].nodeValue):l.isDefined(e.query(i,h[a])[0])&&(n=e.query(i,h[a])[0].textContent),n===r||r.split(":")&&n===r.split(":")[1]))return h[a]},_appendCustomParameters:function(e){var t;if(this.customParameters)for(t in this.customParameters)e+=(-1===e.indexOf("?")?"?":"&")+t+"="+encodeURIComponent(this.customParameters[t]);return e},_appendCustomLayerParameters:function(e){var t,r;if(this.customLayerParameters||this.customParameters)for(t in r=i.clone(this.customParameters||{}),i.mixin(r,this.customLayerParameters||{}),r)e+=(-1===e.indexOf("?")?"?":"&")+t+"="+encodeURIComponent(r[t]);return e},_flippingAxisForWkids:[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]]});return s("extend-esri")&&i.setObject("layers.WMTSLayer",_,n),_}));