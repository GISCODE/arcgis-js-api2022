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

define(["require","exports","../../../../arcade/Dictionary","../../../../arcade/Feature","../../../../core/Logger","../../../../core/screenUtils","../../../../support/arcadeUtils","./color","./enums","./SymbolProperties"],(function(e,r,t,n,_,i,E,a,s,o){Object.defineProperty(r,"__esModule",{value:!0});var u=_.getLogger("esri.views.2d.engine.webgl.Utils");function T(e){return e.map((function(e){return e.name}))}function C(e){for(var r={},t=0,n=e;t<n.length;t++){var _=n[t];r[_.name]=_.strideInBytes}return r}function V(e,t){switch(e){case s.WGLGeometryType.MARKER:return t?r.C_ICON_VERTEX_NAMES_VV:r.C_ICON_VERTEX_NAMES;case s.WGLGeometryType.FILL:return t?r.C_FILL_VERTEX_NAMES_VV:r.C_FILL_VERTEX_NAMES;case s.WGLGeometryType.LINE:return t?r.C_LINE_VERTEX_NAMES_VV:r.C_LINE_VERTEX_NAMES;case s.WGLGeometryType.TEXT:return t?r.C_TEXT_VERTEX_NAMES_VV:r.C_TEXT_VERTEX_NAMES;case s.WGLGeometryType.LABEL:return r.C_LABEL_VERTEX_NAMES}return null}function c(e){switch(e){case"esriSMS":return"simple-marker";case"esriPMS":return"picture-marker";case"esriSLS":return"simple-line";case"esriPLS":return"picture-line";case"esriSFS":return"simple-fill";case"esriPFS":return"picture-fill";case"esriTS":return"text"}return e}function I(e){var r=c(e.type);if(r){switch(r){case"simple-marker":case"picture-marker":case"CIMPointSymbol":return!0}return!1}}function l(e){var r=c(e.type);if(r){switch(r){case"simple-fill":case"picture-fill":case"CIMPolygonSymbol":return!0}return!1}}function p(e){var r=c(e.type);if(r){switch(r){case"simple-line":case"picture-line":case"CIMLineSymbol":return!0}return!1}}function y(e){var r=c(e.type);if(r){switch(r){case"text":case"CIMTextSymbol":return!0}return!1}}function S(e,r){return!1}function L(e){return e&&e.length||0}function R(e){return"string"==typeof e}r.C_HITTEST_SEARCH_SIZE=4,r.C_VBO_GEOMETRY="geometry",r.C_VBO_PERINSTANCE="per_instance",r.C_VBO_PERINSTANCE_VV="per_instance_vv",r.C_VBO_VISIBILITY="visibility",r.C_VBO_VISIBILITY_RANGE="visibilityRange",r.C_ICON_VERTEX_DEF=[{name:r.C_VBO_GEOMETRY,strideInBytes:28,divisor:0}],r.C_ICON_VERTEX_DEF_VV=[{name:r.C_VBO_GEOMETRY,strideInBytes:44,divisor:0}],r.C_ICON_HEATMAP=[{name:r.C_VBO_GEOMETRY,strideInBytes:32,divisor:0}],r.C_FILL_VERTEX_DEF=[{name:r.C_VBO_GEOMETRY,strideInBytes:24,divisor:0}],r.C_FILL_VERTEX_DEF_VV=[{name:r.C_VBO_GEOMETRY,strideInBytes:32,divisor:0}],r.C_LINE_VERTEX_DEF=[{name:r.C_VBO_GEOMETRY,strideInBytes:32,divisor:0}],r.C_LINE_VERTEX_DEF_VV=[{name:r.C_VBO_GEOMETRY,strideInBytes:44,divisor:0}],r.C_TEXT_VERTEX_DEF=[{name:r.C_VBO_GEOMETRY,strideInBytes:20,divisor:0},{name:r.C_VBO_VISIBILITY,strideInBytes:1,divisor:0}],r.C_TEXT_VERTEX_DEF_VV=[{name:r.C_VBO_GEOMETRY,strideInBytes:36,divisor:0},{name:r.C_VBO_VISIBILITY,strideInBytes:1,divisor:0}],r.C_LABEL_VERTEX_DEF=[{name:r.C_VBO_GEOMETRY,strideInBytes:20,divisor:0},{name:r.C_VBO_VISIBILITY,strideInBytes:1,divisor:0},{name:r.C_VBO_VISIBILITY_RANGE,strideInBytes:2,divisor:0}],r.C_ICON_VERTEX_NAMES=T(r.C_ICON_VERTEX_DEF),r.C_ICON_VERTEX_NAMES_VV=T(r.C_ICON_VERTEX_DEF_VV),r.C_FILL_VERTEX_NAMES=T(r.C_FILL_VERTEX_DEF),r.C_FILL_VERTEX_NAMES_VV=T(r.C_FILL_VERTEX_DEF_VV),r.C_LINE_VERTEX_NAMES=T(r.C_LINE_VERTEX_DEF),r.C_LINE_VERTEX_NAMES_VV=T(r.C_LINE_VERTEX_DEF_VV),r.C_TEXT_VERTEX_NAMES=T(r.C_TEXT_VERTEX_DEF),r.C_TEXT_VERTEX_NAMES_VV=T(r.C_TEXT_VERTEX_DEF_VV),r.C_LABEL_VERTEX_NAMES=T(r.C_LABEL_VERTEX_DEF),r.C_ICON_STRIDE_SPEC=C(r.C_ICON_VERTEX_DEF),r.C_ICON_STRIDE_SPEC_VV=C(r.C_ICON_VERTEX_DEF_VV),r.C_ICON_STRIDE_SPEC_HEATMAP=C(r.C_ICON_HEATMAP),r.C_FILL_STRIDE_SPEC=C(r.C_FILL_VERTEX_DEF),r.C_FILL_STRIDE_SPEC_VV=C(r.C_FILL_VERTEX_DEF_VV),r.C_LINE_STRIDE_SPEC=C(r.C_LINE_VERTEX_DEF),r.C_LINE_STRIDE_SPEC_VV=C(r.C_LINE_VERTEX_DEF_VV),r.C_TEXT_STRIDE_SPEC=C(r.C_TEXT_VERTEX_DEF),r.C_TEXT_STRIDE_SPEC_VV=C(r.C_TEXT_VERTEX_DEF_VV),r.C_LABEL_STRIDE_SPEC=C(r.C_LABEL_VERTEX_DEF),r.getStrides=function(e,t,n){switch(void 0===n&&(n=!1),e){case s.WGLGeometryType.MARKER:return t?r.C_ICON_STRIDE_SPEC_VV:n?r.C_ICON_STRIDE_SPEC_HEATMAP:r.C_ICON_STRIDE_SPEC;case s.WGLGeometryType.FILL:return t?r.C_FILL_STRIDE_SPEC_VV:r.C_FILL_STRIDE_SPEC;case s.WGLGeometryType.LINE:return t?r.C_LINE_STRIDE_SPEC_VV:r.C_LINE_STRIDE_SPEC;case s.WGLGeometryType.TEXT:return t?r.C_TEXT_STRIDE_SPEC_VV:r.C_TEXT_STRIDE_SPEC;case s.WGLGeometryType.LABEL:return r.C_LABEL_STRIDE_SPEC}return null},r.getNamedBuffers=V,r.getSymbolGeometryType=function(e){return I(e)?s.WGLGeometryType.MARKER:p(e)?s.WGLGeometryType.LINE:l(e)?s.WGLGeometryType.FILL:y(e)?s.WGLGeometryType.TEXT:s.WGLGeometryType.UNKNOWN},r.normalizeSymbolType=c,r.isMarkerSymbol=I,r.isFillSymbol=l,r.isLineSymbol=p,r.isPictureSymbol=function(e){var r=c(e.type);if(r){switch(r){case"picture-marker":case"picture-line":case"picture-fill":return!0}return!1}return!1},r.isTextSymbol=y,r.getTextProperties=function(e){return o.TextProperties.pool.acquire(e.color?a.copyAndPremultiply(e.color):[255,255,255,255],e.haloColor?a.copyAndPremultiply(e.haloColor):[255,255,255,255],i.pt2px(e.haloSize),i.pt2px(e.font.size),e.angle*Math.PI/180,e.xoffset/e.font.size,e.yoffset/e.font.size,"left"===e.horizontalAlignment?0:"right"===e.horizontalAlignment?1:.5,"top"===e.verticalAlignment?0:"bottom"===e.verticalAlignment?1:.5)},r.isSameUniformValue=S,r.isSameMaterialInfo=function(e,r){if(e.materialKey!==r.materialKey)return!1;if(L(e.texBindingInfo)!==L(r.texBindingInfo))return!1;if(L(e.materialParams)!==L(r.materialParams))return!1;for(var t=e.texBindingInfo.length,n=0;n<t;++n){var _=e.texBindingInfo[n],i=r.texBindingInfo[n];if(_.unit!==i.unit||_.pageId!==i.pageId||_.semantic!==i.semantic)return!1}var E=e.materialParams.length;for(n=0;n<E;++n){var a=e.materialParams[n],s=r.materialParams[n];if(a.name!==s.name||(a.value,s.value,1))return!1}return!0},r.serializeString=function(e,r,t){for(var n=0,_=e.length,i=0;i<_;++i)r&&(r[t+n]=e.charCodeAt(i)),++n;return r&&(r[t+n]=0),++n},r.deserializeString=function(e,r,t){var n=0;e.s="";for(var _=!0;_;){var i=r[t+n];++n,0!==i?e.s+=String.fromCharCode(i):_=!1}return n},r.isDefined=function(e){return null!=e},r.isNumber=function(e){return"number"==typeof e},r.isString=R,r.isStringOrNull=function(e){return null==e||R(e)},r.lerp=function(e,r,t){return e+(r-e)*t};var f=function(){function e(){this._arr=[],this._push=this._push.bind(this)}return e.prototype._push=function(e,r){this._arr.push(r)},e.prototype.getKeys=function(e){return this._arr.length=0,e&&e.forEach(this._push),this._arr},e}();r.KeysGetter=f;var m,N=function(){function e(){this._arr=[],this._push=this._push.bind(this)}return e.prototype._push=function(e,r){this._arr.push(e)},e.prototype.getValues=function(e){return this._arr.length=0,e&&e.forEach(this._push),this._arr},e}();r.ValuesGetter=N,r.getCapType=function(e){switch(e){case"butt":return s.CapType.BUTT;case"round":return s.CapType.ROUND;case"square":return s.CapType.SQUARE;default:return u.error("Cannot interpret unknown cap: "+e),s.CapType.UNKNOWN}},r.getJoinType=function(e){switch(e){case"miter":return s.JoinType.MITER;case"bevel":return s.JoinType.BEVEL;case"round":return s.JoinType.ROUND;default:return u.error("Cannot interpret unknown join: "+e),s.JoinType.UNKNOWN}},r.getVVType=function(e){switch(e){case"opacity":return s.VVType.OPACITY;case"color":return s.VVType.COLOR;case"rotation":return s.VVType.ROTATION;case"size":return s.VVType.SIZE;default:return u.error("Cannot interpret unknown vv: "+e),null}},r.createArcadeFunction=function(e,r){var _=e.valueExpression,i=e.spatialReference,a=e.layer,s=E.createFunction(_),o=new n;return function(e,n){o.repurposeFromGraphicLikeObject(e.geometry,e.attributes,a);var _=n&&new t({viewingMode:n.viewingMode,scale:n.scale}),u={vars:{$feature:o,$view:_||{}},spatialReference:i},T=E.executeFunction(s,u);return r?r(T):T}},r.copyMeshData=function(e,r,t,n,_,i,E){for(var a in i)for(var s=i[a].stride,o=i[a].data,u=t[a].data,T=s*_.vertexCount/4,C=s*e/4,V=s*_.vertexFrom/4,c=0;c<T;++c)u[c+C]=o[c+V];var I=_.indexCount;for(c=0;c<I;++c)n[c+r]=E[c+_.indexFrom]-_.vertexFrom+e},r.C_VBO_INFO=((m={})[r.C_VBO_GEOMETRY]=35044,m[r.C_VBO_VISIBILITY]=35044,m[r.C_VBO_VISIBILITY_RANGE]=35048,m),r.createGeometryData=function(e,r,t){for(var n=[],_=0;_<5;++_){for(var i={},E=0,a=V(_,e);E<a.length;E++){var s=a[E];i[s]={data:t(_,s)}}n.push({data:r(_),buffers:i})}return n}}));