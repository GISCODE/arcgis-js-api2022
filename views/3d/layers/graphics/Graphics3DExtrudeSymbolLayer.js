/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/Error","../../../../core/maybe","../../../../chunks/earcut","../../../../chunks/mat3","../../../../chunks/mat3f64","../../../../chunks/mat4","../../../../chunks/mat4f64","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../geometry/projection","../../../../geometry/support/aaBoundingBox","../../../../geometry/support/buffer/BufferView","../../../../chunks/vec32","../../../../renderers/support/renderingInfoUtils","../../../ViewingMode","./elevationAlignmentUtils","./ElevationContext","./Graphics3DObject3DGraphicLayer","./Graphics3DSymbolLayer","./graphicUtils","./interfaces","./polygonUtils","../support/edgeUtils","../../support/debugFlags","../../support/ElevationProvider","../../webgl-engine/lib/basicInterfaces","../../webgl-engine/lib/Geometry","../../webgl-engine/lib/Object3D","../../webgl-engine/lib/VertexAttribute","../../webgl-engine/materials/DefaultMaterial"],(function(e,t,n,r,a,i,s,o,l,c,h,u,p,d,f,g,m,y,b,_,x,E,v,A,P,S,M,w,L,O,B,C){"use strict";const I=["polygon","extent"];let R=function(e){function c(t,n,r,a){var i;return(i=e.call(this,t,n,r,a)||this).ensureDrapedStatus(!1),i}t._inheritsLoose(c,e);var x=c.prototype;return x.doLoad=function(){var e=t._asyncToGenerator((function*(){if(!this._drivenProperties.size){const e=E.validateSymbolLayerSize(this._getSymbolSize());if(e)throw new n("graphics3dextrudesymbollayer:invalid-size",e)}const e=r.get(this.symbolLayer,"material","color"),t=this._getCombinedOpacityAndColor(e),a=h.fromArray(t),i=t[3],s=i<1||this.needsDrivenTransparentPass,o={usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0,diffuse:a,ambient:a,opacity:i,transparent:s,cullFace:s?w.CullFaceOptions.None:w.CullFaceOptions.Back,vertexColors:!0,slicePlaneEnabled:this._context.slicePlaneEnabled,castShadows:this.symbolLayer.castShadows,offsetTransparentBackfaces:!0};this._material=new C.DefaultMaterial(o),this._bottomMaterial=new C.DefaultMaterial({...o,cullFace:w.CullFaceOptions.Back}),this._context.stage.add(this._material),this._context.stage.add(this._bottomMaterial)}));function a(){return e.apply(this,arguments)}return a}(),x.destroy=function(){e.prototype.destroy.call(this),this._material&&(this._context.stage.remove(this._material),this._context.stage.remove(this._bottomMaterial))},x.createGraphics3DGraphic=function(e){const t=e.graphic;if(!this._validateGeometry(t.geometry,I,this.symbolLayer.type))return null;const n=this._getVertexOpacityAndColor(e.renderingInfo,255),r=this.setGraphicElevationContext(t,new b.ElevationContext);return this._createAs3DShape(t,e.renderingInfo,n,r,t.uid)},x.layerOpacityChanged=function(e,t){const n=r.get(this.symbolLayer,"material","color"),a=this._getCombinedOpacity(n),i=a<1||this.needsDrivenTransparentPass;this._material.setParameters({opacity:a,transparent:i}),this._bottomMaterial.setParameters({opacity:a,transparent:i});const s=this._getLayerOpacity();return e.forEach((e=>{const n=t(e);r.isSome(n)&&n.layerOpacityChanged(s,this._context.isAsync)})),!0},x.layerElevationInfoChanged=function(e,t){return this.updateGraphics3DGraphicElevationInfo(e,t,y.needsElevationUpdates3D)},x.slicePlaneEnabledChanged=function(e,t){return this._material.setParameters({slicePlaneEnabled:this._context.slicePlaneEnabled}),this._bottomMaterial.setParameters({slicePlaneEnabled:this._context.slicePlaneEnabled}),e.forEach((e=>{const n=t(e);r.isSome(n)&&n.slicePlaneEnabledChanged(this._context.slicePlaneEnabled,this._context.isAsync)})),!0},x.physicalBasedRenderingChanged=function(){return this._material.setParameters({usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0}),this._bottomMaterial.setParameters({usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0}),!0},x.pixelRatioChanged=function(){return!0},x._getExtrusionSize=function(e){let t;var n;e.size&&this._drivenProperties.size?t=null!=(n=g.getDriverAxisSizeValue(e.size,2))?n:0:t=this._getSymbolSize();return t/=this._context.renderCoordsHelper.unitInMeters,t},x.applyRendererDiff=function(e,t){return this._drivenPropertiesChanged(t)?v.ApplyRendererDiffResult.Recreate_Symbol:v.ApplyRendererDiffResult.Recreate_Graphics},x._getSymbolSize=function(){var e;return null!=(e=this.symbolLayer.size)?e:1},x._createAs3DShape=function(e,t,n,c,g){const b=A.geometryAsPolygon(e.geometry);if(r.isNone(b))return null;const x=A.geometryToRenderInfo(b,this._context.elevationProvider,this._context.renderCoordsHelper,c);if(this._logGeometryCreationWarnings(x,b.rings,"rings","ExtrudeSymbol3DLayer"),0===b.rings.length||!b.rings.some((e=>e.length>0)))return null;const v=E.computeCentroid(b);if(r.isNone(v))return null;const S=new Array,M=new Array,w=new Array,L=p.create(),B=l.create(),C=h.create(),I=this._context.renderCoordsHelper.viewingMode===m.ViewingMode.Global;I||this._context.renderCoordsHelper.worldUpAtPosition(null,C),u.computeTranslationToOriginAndRotation(b.spatialReference,[v.x,v.y,0],B,this._context.renderCoordsHelper.spatialReference);const R=l.create();o.invert(R,B);const V=s.create();i.normalFromMat4(V,R);const{polygons:z,mapPosition:G,position:U}=x,N=U.length/3,F=new Float64Array(3*N*6),k=new Float64Array(3*N*6),j=new Float64Array(3*N*6),H=new Float64Array(1*N*6);let Y=0;for(let r=0;r<z.length;++r){const e=z[r],i=e.count;if(this._context.clippingExtent&&(p.empty(L),p.expandWithBuffer(L,e.mapPosition),!p.intersectsClippingArea(L,this._context.clippingExtent)))continue;const s=a.earcut(e.mapPosition,e.holeIndices,3);if(0===s.length)continue;const o=3*i*2+s.length,c=new Uint32Array(o),h=new Uint32Array(s.length),u=6*i,g=3*F.BYTES_PER_ELEMENT,m=new d.BufferViewVec3f64(F.buffer,Y*g,g,(Y+u)*g),y=3*k.BYTES_PER_ELEMENT,b=new d.BufferViewVec3f64(k.buffer,Y*y,y,(Y+u)*y),_=new Float64Array(j.buffer,3*Y*j.BYTES_PER_ELEMENT,3*u),x=new Float64Array(H.buffer,1*Y*H.BYTES_PER_ELEMENT,1*u),E=this._getExtrusionSize(t);T(U,G,s,e,m.typedBuffer,_,b.typedBuffer,x,0,c,h,E,C,I),f.transformMat4(m,m,R),f.transformMat3(b,b,V),Y+=6*i;const v=D(c,c.length-h.length,{positions:m.typedBuffer,elevation:_,normals:b.typedBuffer,heights:x},n);S.push(v),M.push(this._material),w.push(l.IDENTITY);const A=D(h,0,{positions:m.typedBuffer,elevation:_,normals:b.typedBuffer,heights:x},n);S.push(A),M.push(this._bottomMaterial),w.push(l.IDENTITY)}if(0===S.length)return null;const Z=new O.Object3D({geometries:S,materials:M,transformations:w,metadata:{layerUid:this._context.layer.uid,graphicUid:g,isElevationSource:!0}});Z.transformation=B;const q=P.createMaterial(this.symbolLayer,{opacity:this._getLayerOpacity()}),J=r.isSome(q)?{baseMaterial:this._material,edgeMaterials:[q],properties:{mergeGeometries:!0,slicePlaneEnabled:this._context.slicePlaneEnabled}}:null,K=new _.Graphics3DObject3DGraphicLayer(this,Z,S,null,null,W,c,J);return K.alignedSampledElevation=x.sampledElevation,K.needsElevationUpdates=y.needsElevationUpdates3D(c.mode),K},c}(x.Graphics3DSymbolLayer);function D(e,t,n,r){const a=new Uint32Array(e.length),i=[[B.VertexAttribute.POSITION,{size:3,data:n.positions,exclusive:!0}],[B.VertexAttribute.NORMAL,{size:3,data:n.normals,exclusive:!0}],[B.VertexAttribute.COLOR,{size:4,data:r,exclusive:!0}],[B.VertexAttribute.SIZE,{size:1,data:n.heights,exclusive:!0}]],s=[[B.VertexAttribute.POSITION,e],[B.VertexAttribute.NORMAL,e],[B.VertexAttribute.COLOR,a]];return n.elevation&&(i.push([B.VertexAttribute.MAPPOS,{size:3,data:n.elevation}]),s.push([B.VertexAttribute.MAPPOS,e])),new L.Geometry(i,s,w.PrimitiveType.Triangle,t)}function T(e,t,n,r,a,i,s,o,l,c,h,u,p,d){const f=n.length/3;let g=0,m=2*r.count;V(e,t,r.index,r.count,n,0,f,a,i,s,o,l,c,h,m,u,p,d),l+=2*r.count,m=0,U(a,i,o,s,g,r.pathLengths[0],r.count,l,c,m,u),l+=4*r.pathLengths[0],m+=2*r.pathLengths[0],g+=r.pathLengths[0];for(let y=1;y<r.pathLengths.length;++y)U(a,i,o,s,g,r.pathLengths[y],r.count,l,c,m,u),l+=4*r.pathLengths[y],m+=2*r.pathLengths[y],g+=r.pathLengths[y]}function V(e,t,n,r,a,i,s,o,l,h,u,p,d,f,g,m,y,b){c.copy(J,y);const _=m>0?1:-1;let x=3*n,E=p,v=3*E,A=p+r,P=3*A;for(let w=0;w<r;++w)b&&(J[0]=e[x+0],J[1]=e[x+1],J[2]=e[x+2],c.normalize(J,J)),o[v+0]=e[x+0],o[v+1]=e[x+1],o[v+2]=e[x+2],l[v+0]=t[x+0],l[v+1]=t[x+1],l[v+2]=t[x+2],h[v+0]=-_*J[0],h[v+1]=-_*J[1],h[v+2]=-_*J[2],u[E]=0,o[P+0]=e[x+0]+m*J[0],o[P+1]=e[x+1]+m*J[1],o[P+2]=e[x+2]+m*J[2],l[P+0]=t[x+0],l[P+1]=t[x+1],l[P+2]=t[x+2],h[P+0]=_*J[0],h[P+1]=_*J[1],h[P+2]=_*J[2],u[A]=m,v+=3,P+=3,x+=3,E+=1,A+=1;x=3*i,v=0,P=3*g;const S=m<0?X:Q,M=m<0?Q:X;for(let c=0;c<s;++c)f[v+0]=a[x+S[0]],f[v+1]=a[x+S[1]],f[v+2]=a[x+S[2]],d[P+0]=a[x+M[0]]+r,d[P+1]=a[x+M[1]]+r,d[P+2]=a[x+M[2]]+r,v+=3,P+=3,x+=3}function z(e,t,n,r,a,i,s){r[i]=r[s],s*=3,e[(i*=3)+0]=e[s+0],e[i+1]=e[s+1],e[i+2]=e[s+2],t[i+0]=t[s+0],t[i+1]=t[s+1],t[i+2]=t[s+2],n[i+0]=a[0],n[i+1]=a[1],n[i+2]=a[2]}const G=h.create();function U(e,t,n,r,a,i,s,o,l,c,h){let u=a,p=a+1,d=a+s,f=a+s+1,g=o,m=o+1,y=o+2*i,b=o+2*i+1;h<0&&(u=a+s+1,f=a),c*=3;for(let _=0;_<i;++_)_===i-1&&(h>0?(p=a,f=a+s):(p=a,u=a+s)),Y(e,u,p,d,G),z(e,t,r,n,G,g,u),z(e,t,r,n,G,m,p),z(e,t,r,n,G,y,d),z(e,t,r,n,G,b,f),l[c++]=g,l[c++]=y,l[c++]=b,l[c++]=g,l[c++]=b,l[c++]=m,u++,p++,d++,f++,g+=2,m+=2,y+=2,b+=2}const N=h.create(),F=h.create(),k=h.create(),j=h.create(),H=h.create();function Y(e,t,n,r,a){t*=3,n*=3,r*=3,c.set(N,e[t++],e[t++],e[t++]),c.set(F,e[n++],e[n++],e[n++]),c.set(k,e[r++],e[r++],e[r++]),c.subtract(j,F,N),c.subtract(H,k,N),c.cross(a,H,j),c.normalize(a,a)}const Z=h.create();function W(e,t,n,r){const a=e.stageObject,i=a.geometryRecords,s=i.length,h="absolute-height"!==t.mode;let u=0;const p=a.transformation,d=o.invert(l.create(),p);for(let o=0;o<s;o+=2){const e=i[o].geometry,s=e.getMutableAttribute(B.VertexAttribute.POSITION).data,l=e.vertexAttributes.get(B.VertexAttribute.SIZE).data,f=e.vertexAttributes.get(B.VertexAttribute.MAPPOS).data,g=new M.SamplePosition(f),m=s.length/3;let b=0,_=!1,x=0;const E=n.spatialReference;for(let a=0;a<m;a++){Z[0]=s[b],Z[1]=s[b+1],Z[2]=s[b+2],y.evaluateElevationInfoAtPoint(g,n,t,r,K),h&&(x+=K.sampledElevation),S.TESTS_DISABLE_OPTIMIZATIONS?(c.set(q,g.array[g.offset+0],g.array[g.offset+1],K.z+l[b/3]),r.toRenderCoords(q,E,q),c.transformMat4(q,q,d)):(c.set(q,s[b+0],s[b+1],s[b+2]),c.transformMat4(q,q,p),r.setAltitude(q,K.z+l[b/3]),c.transformMat4(q,q,d)),s[b]=q[0],s[b+1]=q[1],s[b+2]=q[2];const e=$/r.unitInMeters;(Math.abs(Z[0]-s[b])>=e||Math.abs(Z[1]-s[b+1])>=e||Math.abs(Z[2]-s[b+2])>=e)&&(_=!0),g.offset+=3,b+=3}_&&(e.invalidateBoundingInfo(),a.geometryVertexAttrsUpdated(i[o]),i[o+1].geometry.invalidateBoundingInfo(),a.geometryVertexAttrsUpdated(i[o+1])),u+=x/m}return u/s}const q=h.create(),J=h.create(),K=new y.SampleElevationInfo,Q=[0,2,1],X=[0,1,2],$=.01;e.Graphics3DExtrudeSymbolLayer=R,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
