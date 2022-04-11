/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../core/byteSizeEstimations","../../core/has","../../core/maybe","../../core/typedArrayUtil","../../core/uid","../../geometry/SpatialReference","../../geometry/support/aaBoundingBox","../../geometry/support/aaBoundingRect","../../geometry/support/quantizationUtils","../../geometry/support/typeUtils","../support/Field","./dehydratedFeatureComparison"],(function(e,t,s,n,r,a,i,o,l,u,c,p,h){"use strict";let m=function(e,t,s){this.uid=e,this.geometry=t,this.attributes=s,this.visible=!0,this.objectId=null,this.centroid=null};function y(e){return n.isSome(e.geometry)}function d(e){return c.isFeatureGeometryType(e.type)}let f=function(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null};function g(e){const t=c.featureGeometryTypeKebabDictionary.fromJSON(e.geometryType),s=i.fromJSON(e.spatialReference),r=e.transform,a=e.features.map((a=>{const i=b(a,t,s,e.objectIdFieldName),o=i.geometry;if(n.isSome(o)&&r)switch(o.type){case"point":i.geometry=u.unquantizePoint(r,o,o,o.hasZ,o.hasM);break;case"multipoint":i.geometry=u.unquantizeMultipoint(r,o,o,o.hasZ,o.hasM);break;case"polygon":i.geometry=u.unquantizePolygon(r,o,o,o.hasZ,o.hasM);break;case"polyline":i.geometry=u.unquantizePolyline(r,o,o,o.hasZ,o.hasM);break;case"extent":case"mesh":i.geometry=o}return i}));return{geometryType:t,features:a,spatialReference:s,fields:e.fields?e.fields.map((e=>p.fromJSON(e))):null,objectIdFieldName:e.objectIdFieldName,globalIdFieldName:e.globalIdFieldName,geohashFieldName:e.geohashFieldName,geometryProperties:e.geometryProperties,hasZ:e.hasZ,hasM:e.hasM,exceededTransferLimit:e.exceededTransferLimit,transform:null}}function b(e,t,s,n){return{uid:a.generateUID(),objectId:n&&e.attributes?e.attributes[n]:null,attributes:e.attributes,geometry:x(e.geometry,t,s),visible:!0}}function x(e,t,s){if(n.isNone(e))return null;switch(t){case"point":{const t=e;return{x:t.x,y:t.y,z:t.z,m:t.m,hasZ:null!=t.z,hasM:null!=t.m,type:"point",spatialReference:s}}case"polyline":{const t=e;return{paths:t.paths,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"polyline",spatialReference:s}}case"polygon":{const t=e;return{rings:t.rings,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"polygon",spatialReference:s}}case"multipoint":{const t=e;return{points:t.points,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"multipoint",spatialReference:s}}}}function A(e,t,s,n){return{x:e,y:t,z:s,hasZ:null!=s,hasM:!1,spatialReference:n,type:"point"}}function N(e){if(n.isNone(e))return 0;let t=32;switch(e.type){case"point":t+=42;break;case"polyline":case"polygon":{let s=0;const n=2+(e.hasZ?1:0)+(e.hasM?1:0),r="polyline"===e.type?e.paths:e.rings;for(const e of r)s+=e.length;t+=8*s*n+64,t+=128*s,t+=34,t+=32*(r.length+1);break}case"multipoint":{const s=2+(e.hasZ?1:0)+(e.hasM?1:0),n=e.points.length;t+=8*n*s+64,t+=128*n,t+=34,t+=32;break}case"extent":t+=98,e.hasM&&(t+=32),e.hasZ&&(t+=32);break;case"mesh":t+=r.estimateSize(e.vertexAttributes.position),t+=r.estimateSize(e.vertexAttributes.normal),t+=r.estimateSize(e.vertexAttributes.uv),t+=r.estimateSize(e.vertexAttributes.tangent)}return t}function z(e){let s=32;return s+=t.estimateAttributesObjectSize(e.attributes),s+=3,s+=8+N(e.geometry),s}function Z(e){if(n.isNone(e))return 0;switch(e.type){case"point":return 1;case"polyline":{let t=0;for(const s of e.paths)t+=s.length;return t}case"polygon":{let t=0;for(const s of e.rings)t+=s.length;return t}case"multipoint":return e.points.length;case"extent":return 2;case"mesh":{const t=e.vertexAttributes&&e.vertexAttributes.position;return t?t.length/3:0}default:return}}function M(e){if(n.isNone(e))return!1;switch(e.type){case"extent":case"point":return!0;case"polyline":for(const t of e.paths)if(t.length>0)return!0;return!1;case"polygon":for(const t of e.rings)if(t.length>0)return!0;return!1;case"multipoint":return e.points.length>0;case"mesh":return!e.loaded||e.vertexAttributes.position.length>0}}function S(e,t){switch(o.empty(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[3]=e.x,t[1]=t[4]=e.y,e.hasZ&&(t[2]=t[5]=e.z);break;case"polyline":for(let s=0;s<e.paths.length;s++)o.expandWithNestedArray(t,e.paths[s],e.hasZ);break;case"polygon":for(let s=0;s<e.rings.length;s++)o.expandWithNestedArray(t,e.rings[s],e.hasZ);break;case"multipoint":o.expandWithNestedArray(t,e.points,e.hasZ);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[3]=e.xmax,t[4]=e.ymax,null!=e.zmin&&(t[2]=e.zmin),null!=e.zmax&&(t[5]=e.zmax)}}function k(e,t){S(e,v),o.expandWithAABB(t,v)}function F(e,t){switch(l.empty(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[2]=e.x,t[1]=t[3]=e.y;break;case"polyline":for(let s=0;s<e.paths.length;s++)l.expandWithNestedArray(t,e.paths[s]);break;case"polygon":for(let s=0;s<e.rings.length;s++)l.expandWithNestedArray(t,e.rings[s]);break;case"multipoint":l.expandWithNestedArray(t,e.points);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax}}function I(e,t){n.isSome(e)&&(F(e,R),l.expand(t,R,t))}function j(e,t){return null!=e.objectId?e.objectId:e.attributes&&t?e.attributes[t]:null}const v=o.create(),R=l.create();e.equals=h.equals,e.DehydratedFeatureClass=m,e.DehydratedFeatureSetClass=f,e.computeAABB=S,e.computeAABR=F,e.estimateGeometryObjectSize=N,e.estimateSize=z,e.expandAABB=k,e.expandAABR=I,e.fromFeatureSetJSON=g,e.fromJSONGeometry=x,e.getObjectId=j,e.hasGeometry=y,e.hasVertices=M,e.isFeatureGeometry=d,e.makeDehydratedPoint=A,e.numVertices=Z,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
