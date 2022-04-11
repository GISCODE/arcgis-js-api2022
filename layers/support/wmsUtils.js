/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../core/Error","../../core/maybe","../../core/urlUtils","../../geometry/Extent","../../geometry/SpatialReference","../ogc/crsUtils"],(function(e,t,n,r,i,s,a){"use strict";const o={84:4326,83:4269,27:4267};function l(e){if(!e)return null;const n={idCounter:-1};if("string"==typeof e){e=(new DOMParser).parseFromString(e,"text/xml")}const r=e.documentElement;if("ServiceExceptionReport"===r.nodeName){const e=Array.prototype.slice.call(r.childNodes).map((e=>e.textContent)).join("\r\n");throw new t("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",e)}const s=p("Capability",r),a=p("Service",r),o=p("Request",s);if(!s||!a||!o)return null;const l=p("Layer",s);if(!l)return null;const u="WMS_Capabilities"===r.nodeName||"WMT_MS_Capabilities"===r.nodeName?r.getAttribute("version"):"1.3.0",m=x("Title",a,"")||x("Name",a,""),d=x("AccessConstraints",a,""),h=x("Abstract",a,""),N=parseInt(x("MaxWidth",a,"5000"),10),y=parseInt(x("MaxHeight",a,"5000"),10),S=b(o,"GetMap"),I=g(o,"GetMap"),O=A(l,u,n);let w,L=0;if(Array.prototype.slice.call(s.childNodes).forEach((e=>{"Layer"===e.nodeName&&(0===L?w=e:1===L?(O.name&&(O.name="",O.sublayers.push(A(w,u,n))),O.sublayers.push(A(e,u,n))):O.sublayers.push(A(e,u,n)),L++)})),!O)return null;let M,v;const T=O.fullExtents;if(M=O.sublayers,M||(M=[]),0===M.length&&M.push(O),v=O.extent,!v){const e=new i(M[0].extent);O.extent=e.toJSON(),v=O.extent}const C=O.spatialReferences.length>0?O.spatialReferences:c(O),R=g(o,"GetFeatureInfo");let V;if(R){const e=b(o,"GetFeatureInfo");e.indexOf("text/html")>-1?V="text/html":e.indexOf("text/plain")>-1&&(V="text/plain")}if(!V){const e=function(t){t&&(t.queryable=!1,t.sublayers&&t.sublayers.forEach((t=>{e(t)})))};e(O)}const _=f(M),D=O.minScale||0,U=O.maxScale||0,k=O.dimensions,q=_.reduce(((e,t)=>e.concat(t.dimensions)),[]),B=k.concat(q).filter(F);let W=null;if(B.length>0){let e=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;B.forEach((n=>{const{extent:r}=n;E(r)?r.forEach((n=>{e=Math.min(e,n.getTime()),t=Math.max(t,n.getTime())})):r.forEach((n=>{e=Math.min(e,n.min.getTime()),t=Math.max(t,n.max.getTime())}))})),W={startTimeField:null,endTimeField:null,trackIdField:null,timeExtent:[e,t]}}return{copyright:d,description:h,dimensions:k,extent:v,fullExtents:T,featureInfoFormat:V,featureInfoUrl:R,mapUrl:I,maxWidth:N,maxHeight:y,maxScale:U,minScale:D,layers:_,spatialReferences:C,supportedImageFormatTypes:S,timeInfo:W,title:m,version:u}}function u(e){return e.length?e.filter((e=>e.popupEnabled&&e.name&&e.queryable)).map((e=>e.name)).join(","):""}function c(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const e=c(t);if(e.length>0)return e}return[]}function f(e){let t=[];return e.forEach((e=>{t.push(e),e.sublayers&&e.sublayers.length&&(t=t.concat(f(e.sublayers)),delete e.sublayers)})),t}function m(e,t,n){var r;return null!=(r=t.getAttribute(e))?r:n}function d(e,t,n,r){const i=p(e,n);return i?m(t,i,r):r}function p(e,t){for(let n=0;n<t.childNodes.length;n++){const r=t.childNodes[n];if(S(r)&&r.nodeName===e)return r}return null}function h(e,t){const n=[];for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];S(i)&&i.nodeName===e&&n.push(i)}return n}function x(e,t,n){const r=p(e,t);return r?r.textContent:n}function N(e,t,n){if(!e)return null;const r=parseFloat(e.getAttribute("minx")),a=parseFloat(e.getAttribute("miny")),o=parseFloat(e.getAttribute("maxx")),l=parseFloat(e.getAttribute("maxy"));let u,c,f,m;n?(u=isNaN(a)?-Number.MAX_VALUE:a,c=isNaN(r)?-Number.MAX_VALUE:r,f=isNaN(l)?Number.MAX_VALUE:l,m=isNaN(o)?Number.MAX_VALUE:o):(u=isNaN(r)?-Number.MAX_VALUE:r,c=isNaN(a)?-Number.MAX_VALUE:a,f=isNaN(o)?Number.MAX_VALUE:o,m=isNaN(l)?Number.MAX_VALUE:l);const d=new s({wkid:t});return new i({xmin:u,ymin:c,xmax:f,ymax:m,spatialReference:d})}function g(e,t){const n=p(t,e);if(n){const e=p("DCPType",n);if(e){const t=p("HTTP",e);if(t){const e=p("Get",t);if(e){let t=d("OnlineResource","xlink:href",e,null);if(t)return t.indexOf("&")===t.length-1&&(t=t.substring(0,t.length-1)),L(t,["service","request"])}}}}return null}function b(e,t){const n=h("Operation",e);if(0===n.length){return h("Format",p(t,e)).map((e=>e.textContent))}const r=[];return n.forEach((e=>{if(e.getAttribute("name")===t){h("Format",e).forEach((e=>{r.push(e.textContent)}))}})),r}function y(e,t,n){const r=p(t,e);if(!r)return n;const{textContent:i}=r;if(null==i||""===i)return n;const s=Number(i);return isNaN(s)?n:s}function A(e,t,n){var r;if(!e)return null;const l={id:n.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},u=p("LatLonBoundingBox",e),c=p("EX_GeographicBoundingBox",e);let f=null;u&&(f=N(u,4326)),c&&(f=new i(0,0,0,0,new s({wkid:4326})),f.xmin=parseFloat(x("westBoundLongitude",c,"0")),f.ymin=parseFloat(x("southBoundLatitude",c,"0")),f.xmax=parseFloat(x("eastBoundLongitude",c,"0")),f.ymax=parseFloat(x("northBoundLatitude",c,"0"))),u||c||(f=new i(-180,-90,180,90,new s({wkid:4326}))),l.minScale=y(e,"MaxScaleDenominator",0),l.maxScale=y(e,"MinScaleDenominator",0);const d=["1.0.0","1.1.0","1.1.1"].indexOf(t)>-1?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((e=>{if("Name"===e.nodeName)l.name=e.textContent||"";else if("Title"===e.nodeName)l.title=e.textContent||"";else if("Abstract"===e.nodeName)l.description=e.textContent||"";else if("BoundingBox"===e.nodeName){const n=e.getAttribute(d);if(n&&0===n.indexOf("EPSG:")){const r=parseInt(n.substring(5),10);0===r||isNaN(r)||f||(f="1.3.0"===t?N(e,r,a.isAxesOrderReversedForWkid(r)):N(e,r))}const r=n&&n.indexOf(":");if(r&&r>-1){let i=parseInt(n.substring(r+1,n.length),10);0===i||isNaN(i)||(i=o[i]?o[i]:i);const s="1.3.0"===t?N(e,i,a.isAxesOrderReversedForWkid(i)):N(e,i);l.fullExtents.push(s)}}else if(e.nodeName===d){e.textContent.split(" ").forEach((e=>{const t=e.includes(":")?parseInt(e.split(":")[1],10):parseInt(e,10);if(0!==t&&!isNaN(t)){const e=o[t]?o[t]:t;l.spatialReferences.includes(e)||l.spatialReferences.push(e)}}))}else if("Style"!==e.nodeName||l.legendURL){if("Layer"===e.nodeName){const r=A(e,t,n);r&&(r.parentLayerId=l.id,l.sublayers||(l.sublayers=[]),l.sublayers.push(r))}}else{const t=p("LegendURL",e);if(t){const e=p("OnlineResource",t);e&&(l.legendURL=e.getAttribute("xlink:href"))}}})),l.extent=null==(r=f)?void 0:r.toJSON(),l.dimensions=h("Dimension",e).filter((e=>e.getAttribute("name")&&e.getAttribute("units")&&e.textContent)).map((e=>{const t=e.getAttribute("name"),n=e.getAttribute("units"),r=e.textContent,i=e.getAttribute("unitSymbol"),s=e.getAttribute("default"),a="0"!==m("default",e,"0"),o="0"!==m("nearestValue",e,"0"),l="0"!==m("current",e,"0");if(F({name:t,units:n})){return{name:"time",units:"ISO8601",extent:T(r),default:T(s),multipleValues:a,nearestValue:o,current:l}}if(O({name:t,units:n})){return{name:"elevation",units:n,extent:M(r),unitSymbol:i,default:M(s),multipleValues:a,nearestValue:o}}return{name:t,units:n,extent:v(r),unitSymbol:i,default:v(s),multipleValues:a,nearestValue:o}})),l}function E(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}function S(e){return e.nodeType===Node.ELEMENT_NODE}function I(e){return void 0!==e.min&&void 0!==e.max}function O(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}function w(e){return!F(e)&&!O(e)}function F(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function L(e,t){const n=[],i=r.urlToObject(e);for(const r in i.query)i.query.hasOwnProperty(r)&&-1===t.indexOf(r.toLowerCase())&&n.push(r+"="+i.query[r]);return i.path+(n.length?"?"+n.join("&"):"")}function M(e){if(!e)return null;const t=-1!==e.indexOf("/"),n=e.split(",");return t?n.map((e=>{const t=e.split("/");if(t.length<2)return null;return{min:parseFloat(t[0]),max:parseFloat(t[1]),resolution:t.length>=3&&"0"!==t[2]?parseFloat(t[2]):void 0}})).filter((e=>e)):n.map((e=>parseFloat(e)))}function v(e){if(!e)return null;const t=-1!==e.indexOf("/"),n=e.split(",");return t?n.map((e=>{const t=e.split("/");if(t.length<2)return null;return{min:t[0],max:t[1],resolution:t.length>=3&&"0"!==t[2]?t[2]:void 0}})).filter((e=>e)):n}function T(e){if(!e)return null;const t=-1!==e.indexOf("/"),n=e.split(",");return t?n.map((e=>{const t=e.split("/");if(t.length<2)return null;return{min:new Date(t[0]),max:new Date(t[1]),resolution:t.length>=3&&"0"!==t[2]?C(t[2]):void 0}})).filter((e=>e)):n.map((e=>new Date(e)))}function C(e){const t=/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i,n=e.match(t);if(!n)return null;return{years:R(n[1]),months:R(n[2]),days:R(n[3]),hours:R(n[4]),minutes:R(n[5]),seconds:R(n[6])}}function R(e){if(!e)return 0;const t=/(?:\d+(?:.|,)\d+|\d+)/,n=e.match(t);if(!n)return 0;const r=n[0].replace(",",".");return Number(r)}function V(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const _=new Set([102100,3857,102113,900913]),D=new Set([3395,54004]);function U(e,t){let r=e.wkid;return n.isNone(t)?r:(!t.includes(r)&&e.latestWkid&&(r=e.latestWkid),_.has(r)?t.find((e=>_.has(e)))||t.find((e=>D.has(e)))||102100:r)}e.fromISODuration=C,e.getPopupLayers=u,e.isDimensionInterval=I,e.isElevationDimension=O,e.isGenericDimension=w,e.isTimeDimension=F,e.normalizeWKID=U,e.parseCapabilities=l,e.toISOString=V,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
