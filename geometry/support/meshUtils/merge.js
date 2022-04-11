/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../core/Logger","../../../core/maybe","../../../chunks/vec3","../../../chunks/vec3f64","../MeshComponent","../MeshTransform","../MeshVertexAttributes","./georeference"],(function(e,t,r,o,n,s,i,a,l){"use strict";const f=t.getLogger("esri.geometry.support.triangleMeshMerge");function c(e,t){if(0===e.length)return f.error("merge()","Must specify one more more geometries to merge"),null;const o=e[0].spatialReference;for(const r of e){if(!r.spatialReference.equals(o))return f.error("merge()","Geometries must all be in the same spatial reference"),null;if(!r.loaded)return f.error("merge()","Geometries must all be loaded before merging"),null}const n=u(e);if(r.isNone(n))return null;const s=d(e),i=[],a={position:0,uv:0,normal:0,tangent:0,color:0},l=new Map,c=new Map;for(const r of e){const e=g(r,n);if(t&&t.reuseMaterials&&r.components)for(const t of r.components)t.material&&l.set(t.material,t.material);h(r,a,l,c,i),b("position",e,s,a,0),b("normal",e,s,a,0),b("tangent",e,s,a,0),b("uv",r.vertexAttributes,s,a,0),b("color",r.vertexAttributes,s,a,255)}return{vertexAttributes:s,components:i,transform:n.transform,spatialReference:o}}function u(e){let t=null,s=!0;const a=n.create();let l=0,c=!1;for(const n of e)if(!r.isSome(t)||!r.isNone(n.transform)&&n.transform.equals(t)||(s=!1),r.isSome(n.transform)){if(r.isSome(t)&&t.geographic!==n.transform.geographic)return f.error("merge()","Inconsistent geographic mode for provided geometries transform. Some are geographic while others are not, unable to merge geometries."),null;r.isNone(t)&&(t=n.transform),n.transform.geographic&&(c=!0),l++,o.add(a,a,n.transform.origin)}if(r.isNone(t))return{transform:null,rebake:!1};if(s)return{transform:t.clone(),rebake:!1};const u=o.scale(a,a,1/l);return{transform:new i({origin:u,geographic:c}),rebake:!0}}function g(e,t){if(!t.rebake)return e.vertexAttributes;const o=l.georeferenceApplyTransform(e.vertexAttributes,e.transform,e.spatialReference);return r.isSome(t.transform)?l.ungeoreference(o,t.transform.getOriginPoint(e.spatialReference),{geographic:t.transform.geographic}):o}function m(e,t){return t.normal>0&&!e.vertexAttributes.normal}function p(e,t,r){m(e,t)&&"source"===r.shading&&(r.shading="flat")}function h(e,t,r,o,n){if(e.components)for(const s of e.components){const i=s.cloneWithDeduplication(r,o),a=t.position/3;if(i.faces)for(let e=0;e<i.faces.length;e++)i.faces[e]+=a;else{i.faces=new Uint32Array(e.vertexAttributes.position.length/3);for(let e=0;e<i.faces.length;e++)i.faces[e]=e+a}p(e,t,i),n.push(i)}else if(e.vertexAttributes&&e.vertexAttributes.position){const r=e.vertexAttributes.position.length/3,o=new Uint32Array(r),i=t.position/3;for(let e=0;e<r;e++)o[e]=e+i;const a=new s({faces:o});p(e,t,a),n.push(a)}}function b(e,t,o,n,s){if(!t)return;const i=t.position;if(!i)return;const a=t[e],l=o[e];if(r.isNone(a)){let t=n[e];const o=x[e];if(r.isSome(l)){for(let e=0;e<i.length;e+=3)for(let r=0;r<o;r++)l[t++]=s;n[e]=t}}else r.isSome(l)&&r.isSome(a)&&(v(a,0,l,n[e],a.length),n[e]+=a.length)}function v(e,t,r,o,n){for(let s=0;s<n;s++)r[o++]=e[t++];return r}function A(e){let t=!1,r=!1,o=!1,n=!1;for(const s of e){const e=s.vertexAttributes;if(e&&e.position&&(e.uv&&(t=!0),e.normal&&(r=!0),e.tangent&&(n=!0),e.color&&(o=!0),r&&t&&o&&n))break}return{normal:r,uv:t,color:o,tangent:n}}function d(e){let t=0,r=0,o=0,n=0,s=0;const i=A(e);for(const a of e){const e=a.vertexAttributes;e&&e.position&&(t+=e.position.length,i.uv&&(r+=e.position.length/x.position*x.uv),i.normal&&(o+=e.position.length/x.position*x.normal),i.color&&(n+=e.position.length/x.position*x.color),i.tangent&&(s+=e.position.length/x.position*x.tangent))}return new a.MeshVertexAttributes({position:new Float64Array(t),uv:r?new Float32Array(r):null,normal:o?new Float32Array(o):null,tangent:s?new Float32Array(s):null,color:n?new Uint8Array(n):null})}const x={position:3,normal:3,tangent:4,uv:2,color:4};e.merge=c,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
