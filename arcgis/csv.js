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

define(["dojo/_base/lang","dojo/_base/array","dojo/_base/Deferred","dojo/sniff","dojo/number","dojox/data/CsvStore","../kernel","../config","../request","../SpatialReference","../geometry/jsonUtils","../geometry/webMercatorUtils"],(function(e,t,i,n,r,a,o,l,s,f,u,c){var d=["lat","latitude","y","ycenter","latitude83","latdecdeg","point-y","lat_dd"],h=["lon","lng","long","longitude","x","xcenter","longitude83","longdecdeg","point-x","long_dd"];function m(e){var i=0,n="";return t.forEach([","," ",";","|","\t"],(function(t){var r=e.split(t).length;r>i&&(i=r,n=t)})),n}function p(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;var i=!0;if(n("chrome")&&/\d+\W*$/.test(t)){if(t.match(/[^0-9a-zA-Z\s]/))return!1;var r=t.match(/[a-zA-Z]{2,}/);if(r){for(var a=!1,o=0,l=r.length,s=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i;!a&&o<=l&&!(a=!s.test(r[o]));)o++;i=!a}}return i}function g(i,n,o){var l=i.indexOf("\n"),s=e.trim(i.substr(0,l)),f=n.columnDelimiter;f||(f=m(s));var u=new a({data:i,separator:f});return u.fetch({onComplete:function(i,a){var l,s,f=0,c={layerDefinition:n.layerDefinition,featureSet:{features:[],geometryType:"esriGeometryPoint"}},m=c.layerDefinition.objectIdField,g=c.layerDefinition.fields;m||t.some(g,(function(e){return"esriFieldTypeOID"===e.type&&(m=e.name,!0)}))||(g.push({name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1}),m="__OBJECTID");var y,x=u._attributes,v=[],b=[];if(t.forEach(g,(function(e){"esriFieldTypeDate"===e.type?v.push(e.name):"esriFieldTypeDouble"!==e.type&&"esriFieldTypeInteger"!==e.type||b.push(e.name)})),n.locationInfo&&"coordinates"===n.locationInfo.locationType?(l=n.locationInfo.latitudeFieldName,s=n.locationInfo.longitudeFieldName):(t.forEach(x,(function(e){-1!==t.indexOf(d,e.toLowerCase())&&(l=e),-1!==t.indexOf(h,e.toLowerCase())&&(s=e)})),l&&s&&(n.locationInfo={locationType:"coordinates",latitudeFieldName:l,longitudeFieldName:s})),!l||!s){var w="File does not seem to contain fields with point coordinates.";return setTimeout((function(){console.error(w)}),1),void(o&&o(null,new Error(w)))}-1===t.indexOf(b,l)&&b.push(l),-1===t.indexOf(b,s)&&b.push(s),e.isArray(n.outFields)&&-1===t.indexOf(n.outFields,"*")&&(y=n.outFields),t.forEach(x,(function(e){t.some(g,(function(t){return e===t.name}))||g.push({name:e,alias:e,type:e===l||e===s?"esriFieldTypeDouble":"esriFieldTypeString"})}));for(var O=0,N=i.length;O<N;O++){var T=i[O],F=u.getAttributes(T),S={};t.forEach(F,(function(e){if(e&&(e===l||e===s||!y||t.indexOf(y,e)>-1)){var i=e;if(0===e.length&&t.forEach(g,(function(t,i){t.name==="attribute_"+(i-1)&&(e="attribute_"+(i-1))})),t.indexOf(v,e)>-1){var n=u.getValue(T,i),a=new Date(n);S[e]=p(a,n)?a.getTime():null}else if(t.indexOf(b,e)>-1){var o=r.parse(u.getValue(T,i));e!==l&&e!==s||!(isNaN(o)||Math.abs(o)>181)?isNaN(o)?S[e]=null:S[e]=o:(o=parseFloat(u.getValue(T,i)),isNaN(o)?S[e]=null:S[e]=o)}else S[e]=u.getValue(T,i)}})),S[m]=f,f++;var _=S[l],D=S[s];if(null!=D&&null!=_&&!isNaN(_)&&!isNaN(D)){y&&-1===t.indexOf(y,l)&&delete S[l],y&&-1===t.indexOf(y,s)&&delete S[s];var k={geometry:{x:D,y:_,spatialReference:{wkid:4326}},attributes:S};c.featureSet.features.push(k)}}c.layerDefinition.name="csv",o&&o(c)},onError:function(e){console.error("Error fetching items from CSV store: ",e),o&&o(null,e)}}),!0}function y(i,n,r,a,o,s){0===i.length&&o(null);var f=u.getGeometryType(n),d=[];t.forEach(i,(function(e){var t=new f(e);t.spatialReference=r,d.push(t)}),this);var h=[102113,102100,3857];if(r.wkid&&4326===r.wkid&&a.wkid&&t.indexOf(h,a.wkid)>-1)t.forEach(d,(function(e){e.xmin?(e.xmin=Math.max(e.xmin,-180),e.xmax=Math.min(e.xmax,180),e.ymin=Math.max(e.ymin,-89.99),e.ymax=Math.min(e.ymax,89.99)):e.rings?t.forEach(e.rings,(function(e){t.forEach(e,(function(e){e[0]=Math.min(Math.max(e[0],-180),180),e[1]=Math.min(Math.max(e[1],-89.99),89.99)}),this)}),this):e.paths?t.forEach(e.paths,(function(e){t.forEach(e,(function(e){e[0]=Math.min(Math.max(e[0],-180),180),e[1]=Math.min(Math.max(e[1],-89.99),89.99)}),this)}),this):e.x&&(e.x=Math.min(Math.max(e.x,-180),180),e.y=Math.min(Math.max(e.y,-89.99),89.99))}),this),i=[],t.forEach(d,(function(e){var t=c.geographicToWebMercator(e);102100!==a.wkid&&(t.spatialReference=a),i.push(t.toJson())}),this),o(i);else if(null!==r.wkid&&t.indexOf(h,r.wkid)>-1&&null!==a.wkid&&4326===a.wkid)i=[],t.forEach(d,(function(e){i.push(c.webMercatorToGeographic(e).toJson())}),this),o(i);else{l.defaults.geometryService?l.defaults.geometryService.project(d,a,e.hitch(this,(function(e,n){e&&e.length===i.length?(i=[],t.forEach(e,(function(e){e&&(e.rings&&e.rings.length>0&&e.rings[0].length>0&&e.rings[0][0].length>0&&!isNaN(e.rings[0][0][0])&&!isNaN(e.rings[0][0][1])||e.paths&&e.paths.length>0&&e.paths[0].length>0&&e.paths[0][0].length>0&&!isNaN(e.paths[0][0][0])&&!isNaN(e.paths[0][0][1])||e.xmin&&!isNaN(e.xmin)&&e.ymin&&!isNaN(e.ymin)||e.x&&!isNaN(e.x)&&e.y&&!isNaN(e.y))?i.push(e.toJson()):i.push(null)}),this),o(i)):s(e,n)})),s):o(null)}}function x(e,i){var n=[102113,102100,3857];return!(!e||!i||e.wkid!==i.wkid||e.wkt!==i.wkt)||!!(e&&i&&e.wkid&&i.wkid&&t.indexOf(n,e.wkid)>-1&&t.indexOf(n,i.wkid)>-1)}function v(i,n,r,a){if(i.featureSet&&0!==i.featureSet.features.length)if(x(r,n))a(i);else{var o,l=function(e){var n=[];t.forEach(i.featureSet.features,(function(t,i){e[i]&&(t.geometry=e[i],n.push(t))}),this),a(i)},s=function(e,t){console.error("error projecting featureSet ("+i.layerDefinition.name+"). Final try."),a(i)};i.featureSet.features&&i.featureSet.features.length>0?(o=[],t.forEach(i.featureSet.features,(function(e){if(e.geometry.toJson)o.push(e.geometry);else{var t=u.getGeometryType(i.featureSet.geometryType);o.push(new t(e.geometry))}})),n.toJson||(n=new f(n)),r.toJson||(r=new f(r)),y(o,i.featureSet.geometryType,n,r,e.hitch(this,l),e.hitch(this,(function(t,a){console.error("error projecting featureSet ("+i.layerDefinition.name+"). Try one more time."),y(o,i.featureSet.geometryType,n,r,e.hitch(this,l),e.hitch(this,s))})))):a(i)}}var b={latFieldStrings:d,longFieldStrings:h,buildCSVFeatureCollection:function(t){var n=new i,r=function(e,t){t?n.errback(t):n.callback(e)},a={url:t.url,handleAs:"text",load:function(i){g(i,t,e.hitch(this,r))},error:function(e){n.errback(e),console.error("error: "+e)}};return t.url.indexOf("arcgis.com")>-1&&t.url.indexOf("/content/items")>-1&&t.url.indexOf("/data")>-1&&(a.headers={"Content-Type":""}),s(a,{usePost:!1}),n},projectFeatureCollection:function(t,n,r){var a=new i;return r||(r=new f({wkid:4326})),v(t,r,n,e.hitch(this,(function(e){a.callback(e)}))),a},generateDefaultPopupInfo:function(i){var n=i.layerDefinition.fields,r={esriFieldTypeDouble:1,esriFieldTypeSingle:1},a={esriFieldTypeInteger:1,esriFieldTypeSmallInteger:1},o={esriFieldTypeDate:1},l=null,s=t.map(n,e.hitch(this,(function(t){"NAME"===t.name.toUpperCase()&&(l=t.name);var i="esriFieldTypeOID"!==t.type&&"esriFieldTypeGlobalID"!==t.type&&"esriFieldTypeGeometry"!==t.type,n=null;if(i){var s=t.name.toLowerCase();(",stretched value,fnode_,tnode_,lpoly_,rpoly_,poly_,subclass,subclass_,rings_ok,rings_nok,".indexOf(","+s+",")>-1||s.indexOf("area")>-1||s.indexOf("length")>-1||s.indexOf("shape")>-1||s.indexOf("perimeter")>-1||s.indexOf("objectid")>-1||s.indexOf("_")===s.length-1||s.indexOf("_i")===s.length-2&&s.length>1)&&(i=!1),t.type in a?n={places:0,digitSeparator:!0}:t.type in r?n={places:2,digitSeparator:!0}:t.type in o&&(n={dateFormat:"shortDateShortTime"})}return e.mixin({},{fieldName:t.name,label:t.alias,isEditable:!0,tooltip:"",visible:i,format:n,stringFieldOption:"textbox"})})));return{title:l?"{"+l+"}":"",fieldInfos:s,description:null,showAttachments:!1,mediaInfos:[]}},_getSeparator:m,_isValidDate:p,_processCsvData:g,_projectGeometries:y,_sameSpatialReference:x,_projectFeatureSet:v};return n("extend-esri")&&e.setObject("arcgis.csv",b,o),b}));