/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/maybe","../../../core/typedArrayUtil","../../../libs/i3s/enums","../../../libs/i3s/I3SModule","./i3s/I3SNode"],(function(e,t,n,o,r,i,s){"use strict";function f(e){return a.apply(this,arguments)}function a(){return(a=t._asyncToGenerator((function*(e){yield w();const t=[e.geometryBuffer];return{result:I(e,t),transferList:t}}))).apply(this,arguments)}function c(e){return l.apply(this,arguments)}function l(){return(l=t._asyncToGenerator((function*(e){var t;yield w();const n=[e.geometryBuffer],{geometryBuffer:r}=e,i=r.byteLength,s=g._malloc(i),f=new Uint8Array(g.HEAPU8.buffer,s,i);f.set(new Uint8Array(r));const a=g.dracoDecompressPointCloudData(s,f.byteLength);if(g._free(s),a.error.length>0)throw`i3s.wasm: ${a.error}`;const c=(null==(t=a.featureIds)?void 0:t.length)>0?o.slice(a.featureIds):null,l=o.slice(a.positions);c&&n.push(c.buffer),n.push(l.buffer);return{result:{positions:l,featureIds:c},transferList:n}}))).apply(this,arguments)}function u(e){return y.apply(this,arguments)}function y(){return(y=t._asyncToGenerator((function*(e){yield w(),T(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}))).apply(this,arguments)}function d(e){return b.apply(this,arguments)}function b(){return(b=t._asyncToGenerator((function*(e){yield w(),_(e)}))).apply(this,arguments)}function p(e){return m.apply(this,arguments)}function m(){return(m=t._asyncToGenerator((function*(e){yield w(),g.setLegacySchema(e.context,e.jsonSchema)}))).apply(this,arguments)}function h(e){A(e)}let E,g;function _(e){const t=e.modifications,n=g._malloc(8*t.length),o=new Float64Array(g.HEAPU8.buffer,n,t.length);for(let r=0;r<t.length;++r)o[r]=t[r];g.setModifications(e.context,n,t.length,e.isGeodetic),g._free(n)}function I(e,t){if(!g)return null;const{context:i,localOrigin:s,globalTrafo:f,mbs:a,obb:c,elevationOffset:l,geometryBuffer:u,geometryDescriptor:y,indexToVertexProjector:d,vertexToRenderProjector:b}=e,p=g._malloc(u.byteLength),m=33,h=g._malloc(m*Float64Array.BYTES_PER_ELEMENT),E=new Uint8Array(g.HEAPU8.buffer,p,u.byteLength);E.set(new Uint8Array(u));const _=new Float64Array(g.HEAPU8.buffer,h,m);L(_,s);let I=_.byteOffset+3*_.BYTES_PER_ELEMENT,M=new Float64Array(_.buffer,I);L(M,f),I+=16*_.BYTES_PER_ELEMENT,M=new Float64Array(_.buffer,I),L(M,a),I+=4*_.BYTES_PER_ELEMENT,n.isSome(c)&&(M=new Float64Array(_.buffer,I),L(M,c.center),I+=3*_.BYTES_PER_ELEMENT,M=new Float64Array(_.buffer,I),L(M,c.halfSize),I+=3*_.BYTES_PER_ELEMENT,M=new Float64Array(_.buffer,I),L(M,c.quaternion));const T=y,A={isDraco:!1,isLegacy:!1,color:e.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:e.needNormals&&e.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:e.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:e.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:T.featureIndex},w=g.process(i,!!e.obb,p,E.byteLength,T,A,h,l,d,b,e.normalReferenceFrame);if(g._free(h),g._free(p),w.error.length>0)throw`i3s.wasm: ${w.error}`;if(w.discarded)return null;const P=w.componentOffsets.length>0?o.slice(w.componentOffsets):null,S=w.featureIds.length>0?o.slice(w.featureIds):null,U=o.slice(w.interleavedVertedData).buffer,O=w.indicesType===r.IndexType.Int16?o.slice(new Uint16Array(w.indices.buffer,w.indices.byteOffset,w.indices.byteLength/2)):o.slice(new Uint32Array(w.indices.buffer,w.indices.byteOffset,w.indices.byteLength/4)),x=o.slice(w.positions),B=w.positionIndicesType===r.IndexType.Int16?o.slice(new Uint16Array(w.positionIndices.buffer,w.positionIndices.byteOffset,w.positionIndices.byteLength/2)):o.slice(new Uint32Array(w.positionIndices.buffer,w.positionIndices.byteOffset,w.positionIndices.byteLength/4)),F={layout:e.layouts[0],interleavedVertexData:U,indices:O,hasColors:w.hasColors,hasModifications:w.hasModifications,positionData:{data:x,indices:B}};return S&&t.push(S.buffer),P&&t.push(P.buffer),t.push(U),t.push(O.buffer),t.push(x.buffer),t.push(B.buffer),{componentOffsets:P,featureIds:S,transformedGeometry:F,obb:w.obb}}function M(e){return 0===e?s.NodeIMModificationImpact.Unmodified:1===e?s.NodeIMModificationImpact.PotentiallyModified:2===e?s.NodeIMModificationImpact.Culled:s.NodeIMModificationImpact.Unknown}function T(e){const{context:t,buffer:n}=e,o=g._malloc(n.byteLength),r=n.byteLength/Float64Array.BYTES_PER_ELEMENT,i=new Float64Array(g.HEAPU8.buffer,o,r),s=new Float64Array(n);i.set(s),g.filterOBBs(t,o,r),s.set(i),g._free(o)}function A(e){g&&g.destroy(e)}function L(e,t){for(let n=0;n<t.length;++n)e[n]=t[n]}function w(){return g?Promise.resolve():(E||(E=i.get().then((e=>{g=e,E=null}))),E)}const P={transform:I,destroy:A};e.destroyContext=h,e.dracoDecompressPointCloudData=c,e.filterObbsForModifications=u,e.filterObbsForModificationsSync=T,e.initialize=w,e.interpretObbModificationResults=M,e.process=f,e.setLegacySchema=p,e.setModifications=d,e.setModificationsSync=_,e.test=P,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
