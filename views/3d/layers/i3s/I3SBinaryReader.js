// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/Error","../../../../core/lang","../../../../core/Logger","./LEPCC"],function(e,t,r,n,a,o){function u(e,t,n){for(var a="",o=0;o<n;){var u=e[t+o];if(u<128)a+=String.fromCharCode(u),o++;else if(u>=192&&u<224){if(o+1>=n)throw new r("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");var i=e[t+o+1],f=(31&u)<<6|63&i;a+=String.fromCharCode(f),o+=2}else if(u>=224&&u<240){if(o+2>=n)throw new r("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");var i=e[t+o+1],l=e[t+o+2],f=(15&u)<<12|(63&i)<<6|63&l;a+=String.fromCharCode(f),o+=3}else{if(!(u>=240&&u<248))throw new r("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");if(o+3>=n)throw new r("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");var i=e[t+o+1],l=e[t+o+2],s=e[t+o+3],f=(7&u)<<18|(63&i)<<12|(63&l)<<6|63&s;if(f>=65536){var y=55296+(f-65536>>10),c=56320+(1023&f);a+=String.fromCharCode(y,c)}else a+=String.fromCharCode(f);o+=4}}return a}function i(e,r){for(var n={byteOffset:0,byteCount:0,fields:Object.create(null)},a=0,o=0;o<r.length;o++){var u=r[o],i=u.valueType||u.type,f=t.valueType2ArrayBufferReader[i];n.fields[u.property]=f(e,a),a+=t.valueType2TypedArrayClassMap[i].BYTES_PER_ELEMENT}return n.byteCount=a,n}function f(e,t,n){var a,o,i=[],f=0;for(o=0;o<e;o+=1){if((a=t[o])>0){if(i.push(u(n,f,a-1)),0!==n[f+a-1])throw new r("string-array-error","Invalid string array: missing null termination.")}else i.push(null);f+=a}return i}function l(e,r){return new(0,t.valueType2TypedArrayClassMap[r.valueType])(e,r.byteOffset,r.count*r.valuesPerElement)}function s(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}function y(e,t,a){for(var o=null!=t.header?i(e,t.header):{byteOffset:0,byteCount:0,fields:{count:a}},u={header:o,byteOffset:o.byteCount,byteCount:0,entries:Object.create(null)},f=o.byteCount,l=0;l<t.ordering.length;l++){var s=t.ordering[l],y=n.clone(t[s]);if(y.count=o.fields.count,"String"===y.valueType){if(y.byteOffset=f,y.byteCount=o.fields[s+"ByteCount"],"UTF-8"!==y.encoding)throw new r("unsupported-encoding","Unsupported String encoding.",{encoding:y.encoding})}else{if(!g(y.valueType))throw new r("unsupported-value-type","Unsupported binary valueType",{valueType:y.valueType});var c=p(y.valueType);f+=f%c!=0?c-f%c:0,y.byteOffset=f,y.byteCount=c*y.valuesPerElement*y.count}f+=y.byteCount,u.entries[s]=y}return u.byteCount=f-u.byteOffset,u}function c(e,t,n){if(t!==e&&w.error("Invalid "+n+" buffer size\n expected: "+e+", actual: "+t+")"),t<e)throw new r("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function d(e,t,r){for(var n={header:{byteOffset:0,byteCount:e.offset,fields:{}},byteOffset:e.offset,byteCount:0,vertexAttributes:{},featureAttributes:{}},a=e.offset,o=function(e,t,r,n){var o="UInt64"===t.type?8:p(t.type),u={byteOffset:a,byteCount:o*t.component*r,count:r,valueType:t.type,valuesPerElement:t.component};a+=u.byteCount,n[e]=u},u=0,i=C;u<i.length;u++){var f=i[u];e[f[0]]&&o(f[1],e[f[0]],t,n.vertexAttributes)}for(var l=0,s=T;l<s.length;l++){var y=s[l];e[y[0]]&&o(y[1],e[y[0]],r,n.featureAttributes)}return n}function b(e,t){for(var r=i(e,t&&t.header),a=r.byteCount,o={header:r,byteOffset:r.byteCount,byteCount:0,vertexAttributes:n.clone(t.vertexAttributes)},u=o.vertexAttributes,f=r.fields,l=null!=f.vertexCount?f.vertexCount:f.count,s=0;s<t.ordering.length;s++){var y=t.ordering[s];null!=u[y]&&(u[y].byteOffset=a,u[y].count=l,a+=p(u[y].valueType)*u[y].valuesPerElement*l)}var d=f.faceCount;if(t.faces&&d){o.faces=n.clone(t.faces);for(var b=o.faces,s=0;s<t.ordering.length;s++){var v=t.ordering[s];null!=b[v]&&(b[v].byteOffset=a,b[v].count=d,a+=p(b[v].valueType)*b[v].valuesPerElement*d)}}var g=f.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&g){o.featureAttributes=n.clone(t.featureAttributes);for(var w=o.featureAttributes,s=0;s<t.featureAttributeOrder.length;s++){var C=t.featureAttributeOrder[s];w[C].byteOffset=a,w[C].count=g;var T=p(w[C].valueType);"UInt64"===w[C].valueType&&(T=8),a+=T*w[C].valuesPerElement*g}}return c(a,e.byteLength,"geometry"),o.byteCount=a-o.byteOffset,o}function v(e,t,n){if("lepcc-rgb"===e.encoding)return o.decodeRGB(t);if("lepcc-intensity"===e.encoding)return o.decodeIntensity(t);if(null!=e.encoding&&""!==e.encoding)throw new r("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(w.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(w.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");var a=y(t,e,n);c(a.byteOffset+a.byteCount,t.byteLength,"attribute");var u=a.entries.attributeValues||a.entries.objectIds;if(u){if("String"===u.valueType){var i=a.entries.attributeByteCounts,d=l(t,i),b=s(t,u);return f(i.count,d,b)}return l(t,u)}throw new r("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}function g(e){return t.valueType2TypedArrayClassMap.hasOwnProperty(e)}function p(e){return g(e)?t.valueType2TypedArrayClassMap[e].BYTES_PER_ELEMENT:0}Object.defineProperty(t,"__esModule",{value:!0});var w=a.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");t.readHeader=i,t.readStringArray=f,t.createTypedView=l,t.createRawView=s,t.createAttributeDataIndex=y,t.createGeometryIndexFromDefinition=d;var C=[["position","position"],["normal","normal"],["uv0","uv0"],["uv1","uv1"],["color","color"],["uvRegion","region"]],T=[["featureId","id"],["faceRange","faceRange"]];t.createGeometryIndexFromSchema=b,t.readBinaryAttribute=v,t.valueType2TypedArrayClassMap={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},t.valueType2ArrayBufferReader={Float32:function(e,t){return new DataView(e,0).getFloat32(t,!0)},Float64:function(e,t){return new DataView(e,0).getFloat64(t,!0)},UInt8:function(e,t){return new DataView(e,0).getUint8(t)},Int8:function(e,t){return new DataView(e,0).getInt8(t)},UInt16:function(e,t){return new DataView(e,0).getUint16(t,!0)},Int16:function(e,t){return new DataView(e,0).getInt16(t,!0)},UInt32:function(e,t){return new DataView(e,0).getUint32(t,!0)},Int32:function(e,t){return new DataView(e,0).getInt32(t,!0)}},t.isValueType=g,t.getBytesPerValue=p});