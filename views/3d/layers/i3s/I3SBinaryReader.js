/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../core/Error","../../../../core/lang","../../../../core/Logger","./LEPCC","../../webgl-engine/lib/VertexAttribute"],(function(e,t,r,n,o,a){"use strict";const i=n.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function u(e,r,n){let o="",a=0;for(;a<n;){const i=e[r+a];if(i<128)o+=String.fromCharCode(i),a++;else if(i>=192&&i<224){if(a+1>=n)throw new t("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const u=(31&i)<<6|63&e[r+a+1];o+=String.fromCharCode(u),a+=2}else if(i>=224&&i<240){if(a+2>=n)throw new t("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const u=(15&i)<<12|(63&e[r+a+1])<<6|63&e[r+a+2];o+=String.fromCharCode(u),a+=3}else{if(!(i>=240&&i<248))throw new t("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(a+3>=n)throw new t("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const u=(7&i)<<18|(63&e[r+a+1])<<12|(63&e[r+a+2])<<6|63&e[r+a+3];if(u>=65536){const e=55296+(u-65536>>10),t=56320+(1023&u);o+=String.fromCharCode(e,t)}else o+=String.fromCharCode(u);a+=4}}}return o}function c(e,t){const r={byteOffset:0,byteCount:0,fields:Object.create(null)};let n=0;for(let o=0;o<t.length;o++){const a=t[o],i=a.valueType||a.type,u=A[i];r.fields[a.property]=u(e,n),n+=m[i].BYTES_PER_ELEMENT}return r.byteCount=n,r}function s(e,r,n){const o=[];let a,i,c=0;for(i=0;i<e;i+=1){if(a=r[i],a>0){if(o.push(u(n,c,a-1)),0!==n[c+a-1])throw new t("string-array-error","Invalid string array: missing null termination.")}else o.push(null);c+=a}return o}function f(e,t){return new(0,m[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function l(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}function d(e,n,o){const a=null!=n.header?c(e,n.header):{byteOffset:0,byteCount:0,fields:{count:o}},i={header:a,byteOffset:a.byteCount,byteCount:0,entries:Object.create(null)};let u=a.byteCount;for(let c=0;c<n.ordering.length;c++){const e=n.ordering[c],o=r.clone(n[e]);if(o.count=a.fields.count,"String"===o.valueType){if(o.byteOffset=u,o.byteCount=a.fields[e+"ByteCount"],"UTF-8"!==o.encoding)throw new t("unsupported-encoding","Unsupported String encoding.",{encoding:o.encoding})}else{if(!h(o.valueType))throw new t("unsupported-value-type","Unsupported binary valueType",{valueType:o.valueType});{const e=T(o.valueType);u+=u%e!=0?e-u%e:0,o.byteOffset=u,o.byteCount=e*o.valuesPerElement*o.count}}u+=o.byteCount,i.entries[e]=o}return i.byteCount=u-i.byteOffset,i}function b(e,r,n){if(r!==e&&i.error(`Invalid ${n} buffer size\n expected: ${e}, actual: ${r})`),r<e)throw new t("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:r})}function y(e){return{isDraco:!1,isLegacy:!1,color:null!=e.color,normal:null!=e.normal,uv0:null!=e.uv0,uvRegion:null!=e.uvRegion,featureIndex:null!=e.faceRange&&null!=e.featureId}}function g(e,t){const r=c(e,t&&t.header);let n=r.byteCount;const o={isDraco:!1,header:r,byteOffset:r.byteCount,byteCount:0,vertexAttributes:{}},a=r.fields,i=null!=a.vertexCount?a.vertexCount:a.count;for(const c of t.ordering){if(!t.vertexAttributes[c])continue;const e={...t.vertexAttributes[c],byteOffset:n,count:i},r=C[c]?C[c]:"_"+c;o.vertexAttributes[r]=e,n+=T(e.valueType)*e.valuesPerElement*i}const u=a.faceCount;if(t.faces&&u){o.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const r={...t.faces[e],byteOffset:n,count:u};o.faces[e]=r,n+=T(r.valueType)*r.valuesPerElement*u}}const s=a.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&s){o.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const r={...t.featureAttributes[e],byteOffset:n,count:s};o.featureAttributes[e]=r;n+=("UInt64"===r.valueType?8:T(r.valueType))*r.valuesPerElement*s}}return b(n,e.byteLength,"geometry"),o.byteCount=n-o.byteOffset,o}function w(e,t){return!(!e||!e.compressedAttributes||"draco"!==e.compressedAttributes.encoding)?v(e.compressedAttributes.attributes):e?y(e):p(t)}function p(e){const t={isDraco:!1,isLegacy:!0,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const r of e.ordering)if(e.vertexAttributes[r])switch(r){case"position":break;case"normal":t.normal=!0;break;case"color":t.color=!0;break;case"uv0":t.uv0=!0;break;case"region":t.uvRegion=!0}return e.featureAttributes&&e.featureAttributeOrder&&(t.featureIndex=!0),t}function v(e){const t={isDraco:!0,isLegacy:!1,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const r of e)switch(r){case"position":break;case"normal":t.normal=!0;break;case"uv0":t.uv0=!0;break;case"color":t.color=!0;break;case"uv-region":t.uvRegion=!0;break;case"feature-index":t.featureIndex=!0}return t}const C={position:a.VertexAttribute.POSITION,normal:a.VertexAttribute.NORMAL,color:a.VertexAttribute.COLOR,uv0:a.VertexAttribute.UV0,region:a.VertexAttribute.UVREGION};function I(e,r,n){if("lepcc-rgb"===e.encoding)return o.decodeRGB(r);if("lepcc-intensity"===e.encoding)return o.decodeIntensity(r);if(null!=e.encoding&&""!==e.encoding)throw new t("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(i.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(i.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const a=d(r,e,n);b(a.byteOffset+a.byteCount,r.byteLength,"attribute");const u=a.entries.attributeValues||a.entries.objectIds;if(u){if("String"===u.valueType){const e=a.entries.attributeByteCounts,t=f(r,e),n=l(r,u);return s(e.count,t,n)}return f(r,u)}throw new t("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const m={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},A={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function h(e){return m.hasOwnProperty(e)}function T(e){return h(e)?m[e].BYTES_PER_ELEMENT:0}e.createAttributeDataIndex=d,e.createGeometryDescriptor=w,e.createGeometryDescriptorForDraco=v,e.createGeometryDescriptorFromDefinition=y,e.createGeometryDescriptorFromSchema=p,e.createGeometryIndexFromSchema=g,e.createRawView=l,e.createTypedView=f,e.getBytesPerValue=T,e.isValueType=h,e.readBinaryAttribute=I,e.readHeader=c,e.readStringArray=s,e.valueType2ArrayBufferReader=A,e.valueType2TypedArrayClassMap=m,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
