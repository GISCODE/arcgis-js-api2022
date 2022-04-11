/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../core/Logger","../../../core/mathUtils","../../../core/maybe","../../../core/promiseUtils","../../../core/watchUtils","../../../chunks/mat4","../../../chunks/mat4f64","../../../chunks/vec2","../../../chunks/vec2f64","../../../chunks/vec3","../../../chunks/vec3f64","../../../geometry/projectionEllipsoid","../../../geometry/support/spatialReferenceUtils","../../../support/requestImageUtils","./atmosphereUtils","../../../chunks/SimpleAtmosphere.glsl","./SimpleAtmosphereTechnique","./resources/MarsAtmosphereTexture","./resources/SimpleAtmosphereTexture","../support/mathUtils","../support/buffer/glUtil","../support/buffer/InterleavedLayout","../webgl-engine/lib/DefaultVertexAttributeLocations","../webgl-engine/lib/glUtil3D","../webgl-engine/lib/Util","../webgl-engine/lib/VertexAttribute","../../webgl/BufferObject","../../webgl/enums","../../webgl/Texture","../../webgl/Util","../../webgl/VertexArrayObject"],(function(e,t,r,i,n,s,a,o,h,c,l,u,d,p,m,f,_,g,y,x,R,A,V,C,b,v,T,q,w,D,S,U){"use strict";const M=t.getLogger("esri.views.3d.environment.SimpleAtmosphere"),F=128,L=-f.innerAtmosphereDepth,j=0,I=50,k=()=>1-511/512,O=R.makePiecewiseLinearFunction([[50,.1015625],[500,.21875],[5e3,1-250/512],[5e4,.4140625]]);let E=function(){function t(e){this.view=e,this.type="simple",this._renderData={texV:c.create(),silCircleCenter:u.create(),silCircleV1:u.create(),silCircleV2:u.create(),altitudeFade:0,innerScale:0,undergroundFadeAlpha:0},this._texture=null,this._fadeVaoCount=0,this._readyResolver=n.createResolver(),this._readyController=new AbortController,this.texV1=1,this.canRender=!0,this.isOnMars=p.isMars(e.spatialReference);const t=d.getReferenceEllipsoid(e.spatialReference);this.planetRadius=t.radius,this.outerRimWidth=t.outerAtmosphereRimWidth,this.innerRimFactor=(this.planetRadius+L)/this.planetRadius,this.middleRimFactor=(this.planetRadius+j)/this.planetRadius,this.outerRimFactor=(this.planetRadius+this.outerRimWidth)/this.planetRadius,this.texV0=j/this.outerRimWidth,this.texVScale=this.texV1-this.texV0}var o=t.prototype;return o.destroy=function(){this._readyResolver.reject(),this._cameraChangeHandle=i.removeMaybe(this._cameraChangeHandle),this._texture=i.disposeMaybe(this._texture),this._fadeVao=i.disposeMaybe(this._fadeVao),this._vao=i.disposeMaybe(this._vao),this._readyController=i.abortMaybe(this._readyController)},o.when=function(){return this._readyResolver.promise},o.initializeRenderContext=function(){var t=e._asyncToGenerator((function*(e){this._shaderTechniqueRepository=e.shaderTechniqueRepository;const t=e.renderContext.rctx;this._cameraChangeHandle=s.init(this.view,"state.camera",(()=>e.requestRender()),!0),this._vao=this._createRibbon(t),this._vaoCount=S.vertexCount(this._vao,"geometry"),this._fadeVao=b.createQuadVAO(t),this._fadeVaoCount=S.vertexCount(this._fadeVao,"geometry");const r=this.isOnMars?y:x,i=this._readyController.signal;try{const s=yield m.requestImage(r,{signal:i});n.throwIfAborted(i),this._texture=new D.Texture(t,{pixelFormat:w.PixelFormat.RGBA,dataType:w.PixelType.UNSIGNED_BYTE,wrapMode:w.TextureWrapMode.CLAMP_TO_EDGE,samplingMode:w.TextureSamplingMode.LINEAR,flipped:!0},s),e.requestRender(),this._readyController=null,this._readyResolver.resolve()}catch(a){n.isAbortError(a)||M.error("Unable to initialize simple atmosphere: image request failed",a),this._readyResolver.reject(a)}}));function r(e){return t.apply(this,arguments)}return r}(),o.render=function(e){this._update(e.camera);const t=e.rctx;if(this._renderData.undergroundFadeAlpha<1){const r=t.useTechnique(this.coneTechnique);r.setUniformMatrix4fv("proj",e.camera.projectionMatrix),r.setUniformMatrix4fv("view",e.camera.viewMatrix),r.setUniform3fv("silCircleCenter",this._renderData.silCircleCenter),r.setUniform3fv("silCircleV1",this._renderData.silCircleV1),r.setUniform3fv("silCircleV2",this._renderData.silCircleV2),r.setUniform2fv("texV",this._renderData.texV),r.bindTexture(this._texture,"tex"),e.scenelightingData.setLightDirectionUniform(r),r.setUniform1f("altitudeFade",this._renderData.altitudeFade),r.setUniform1f("innerScale",this._renderData.innerScale),t.bindVAO(this._vao),t.drawArrays(w.PrimitiveType.TRIANGLES,0,this._vaoCount)}if(this._renderData.undergroundFadeAlpha>0){const r=t.useTechnique(this.undergroundTechnique);r.setUniform1f("undergroundFadeAlpha",this._renderData.undergroundFadeAlpha),e.scenelightingData.setLightDirectionUniform(r),r.setUniform3fv("cameraPosition",e.camera.eye),t.bindVAO(this._fadeVao),t.drawArrays(w.PrimitiveType.TRIANGLE_STRIP,0,this._fadeVaoCount)}},o.renderHaze=function(){return!1},o._update=function(e){const t=u.create(),i=this.planetRadius,n=l.length(e.eye),s=n-i;if(s<0){const e=Math.min(-s/5e3,1);this._renderData.undergroundFadeAlpha=e}else this._renderData.undergroundFadeAlpha=0;const a=Math.max(I,s),o=i+L;this._renderData.innerScale=B(i+a,i,o)-1,this._renderData.altitudeFade=f.computeInnerAltitudeFade(s),l.scale(t,e.eye,(i+I)/n),P(t,e.center,e.up,i,this._renderData);const c=this._computeScreenRimWidth(e,t,e.up,this._renderData),d=k(),p=O(s);let m=this.texV0+d*this.texVScale,_=this.texV0+c*p*this.texVScale;if(s>I){P(e.eye,e.center,e.up,i,this._renderData);const t=this._computeScreenRimWidth(e,e.eye,e.up,this._renderData),n=r.clamp((t-1.5)/(c-1.5),0,1);m=this.texV0+n*d*this.texVScale,_=this.texV0+r.lerp(this.texV1,c*p,n)*this.texVScale}h.set(this._renderData.texV,m,_)},o._createRibbon=function(e){const t=new Float32Array(3+3*F*3),r=new Uint32Array(3*F*5);t[0]=0,t[1]=0,t[2]=-1;for(let s=0;s<F;s++){const e=9*s+3;t[e+0]=s,t[e+1]=this.innerRimFactor,t[e+2]=-1,t[e+3]=s,t[e+4]=this.middleRimFactor,t[e+5]=0,t[e+6]=s,t[e+7]=this.outerRimFactor,t[e+8]=1;const i=3*s+1,n=s===F-1?1:i+3,a=15*s;r[a+0]=i,r[a+1]=i+1,r[a+2]=n+1,r[a+3]=n+1,r[a+4]=n,r[a+5]=i,r[a+6]=i+1,r[a+7]=i+2,r[a+8]=n+2,r[a+9]=n+2,r[a+10]=n+1,r[a+11]=i+1,r[a+12]=i,r[a+13]=n,r[a+14]=0}const i=H.createBuffer(r.length),n=i.position;for(let s=0;s<r.length;++s){const e=3*r[s];n.set(s,0,t[e]),n.set(s,1,t[e+1]),n.set(s,2,t[e+2])}return new U.VertexArrayObject(e,C.Default3D,{geometry:A.glLayout(H)},{geometry:q.BufferObject.createVertex(e,w.Usage.STATIC_DRAW,i.buffer)})},o._computeScreenRimWidth=function(e,t,r,i){return l.add(G,i.silCircleCenter,i.silCircleV2),l.scale(N,G,this.outerRimFactor),a.lookAt(W,t,G,r),v.project(G,W,e.projectionMatrix,e.viewport),v.project(N,W,e.projectionMatrix,e.viewport),l.distance(G,N)/e.height},e._createClass(t,[{key:"coneTechnique",get:function(){if(i.isNone(this._coneTechnique)){const e=new g.SimpleAtmosphereTechniqueConfiguration;e.geometry=_.SimpleAtmosphereGeometry.Cone,this._coneTechnique=this._shaderTechniqueRepository.acquire(g.SimpleAtmosphereTechnique,e)}return this._coneTechnique}},{key:"undergroundTechnique",get:function(){if(i.isNone(this._undergroundTechnique)){const e=new g.SimpleAtmosphereTechniqueConfiguration;e.geometry=_.SimpleAtmosphereGeometry.Underground,this._undergroundTechnique=this._shaderTechniqueRepository.acquire(g.SimpleAtmosphereTechnique,e)}return this._undergroundTechnique}}]),t}();function P(e,t,r,i,n){const s=l.length(e),a=i*Math.sqrt(s*s-i*i)/s,o=Math.sqrt(i*i-a*a),h=n.silCircleV1,c=n.silCircleV2;return l.scale(n.silCircleCenter,e,o/s),l.cross(h,e,t),l.squaredLength(h)<1&&l.cross(h,e,r),l.scale(h,h,a/l.length(h)),l.cross(c,h,e),l.scale(c,c,a/l.length(c)),a}const W=o.create(),G=u.create(),N=u.create();function B(e,t,r){return e*e/(Math.sqrt(e*e-t*t)*Math.sqrt(e*e-r*r)+t*r)}const H=V.newLayout().vec3f(T.VertexAttribute.POSITION);return E}));
