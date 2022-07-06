/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../../../../core/Logger.js";import{disposeMaybe as t,isNone as r}from"../../../../../core/maybe.js";import{WGLSymbologyType as a}from"../enums.js";import i from"../VertexStream.js";import s from"./WGLGeometryBrushMarker.js";import{assertRendererSchema as o}from"../techniques/utils.js";import{ContextType as u}from"../../../../webgl/context-util.js";import{DataType as n,BlendFactor as l,ClearBufferBit as m,TextureType as d,PixelFormat as h,PixelType as c,SizedPixelFormat as f,TextureWrapMode as _,TextureSamplingMode as p}from"../../../../webgl/enums.js";import{FramebufferObject as g}from"../../../../webgl/FramebufferObject.js";import{Texture as T}from"../../../../webgl/Texture.js";const x=e.getLogger("esri.views.2d.engine.webgl.brushes.WGLBrushHeatmap"),F={vsPath:"heatmap/heatmapResolve",fsPath:"heatmap/heatmapResolve",attributes:new Map([["a_position",0]])};class b extends s{supportsSymbology(e){return e===a.HEATMAP}dispose(){super.dispose(),this._accumulateOutputTexture=t(this._accumulateOutputTexture),this._accumulateFramebuffer=t(this._accumulateFramebuffer),this._resolveGradientTexture=t(this._resolveGradientTexture),this._tileQuad=t(this._tileQuad)}drawGeometry(e,t,r,a){const{defines:i}=this._loadQualityProfile(e.context);super.drawGeometry(e,t,r,a?[...a,...i]:i)}_drawMarkers(e,t,r,a,i,s,o){const{context:u}=e,l=u.getBoundFramebufferObject(),m=u.getViewport();this._prepareAccumulatePass(e,t,r,o),u.drawElements(a,i,n.UNSIGNED_INT,s),o||this._drawResolvePass(e,t,l,m)}_prepareAccumulatePass(e,t,r,a){const{context:i,rendererInfo:s,state:u,displayLevel:n}=e,{rendererSchema:d}=s;o(d,"heatmap");const{referenceScale:h,radius:c,isFieldActive:f}=d;this._loadResources(i),this._updateResources(d);const _=c*(0!==h?h/u.scale:1)*2**(t.key.level-n);r.setUniform1f("u_radius",_),a||(i.bindFramebuffer(this._accumulateFramebuffer),r.setUniform1f("u_isFieldActive",f),i.setViewport(0,0,this._accumulateFramebuffer.width,this._accumulateFramebuffer.height),i.setBlendingEnabled(!0),i.setBlendFunction(l.ONE,l.ONE),i.setClearColor(0,0,0,0),i.clear(m.COLOR_BUFFER_BIT))}_drawResolvePass(e,t,r,a){const{context:i,painter:s,rendererInfo:u}=e,{rendererSchema:n}=u;o(n,"heatmap");const{radius:m,minDensity:d,densityRange:h}=n,{defines:c}=this._loadQualityProfile(i),f=s.materialManager.getProgram(F,c);i.useProgram(f),this._setSharedUniforms(f,e,t),i.bindFramebuffer(r),i.setViewport(0,0,a.width,a.height),i.setBlendFunction(l.ONE,l.ONE_MINUS_SRC_ALPHA),i.bindTexture(this._accumulateOutputTexture,8),i.bindTexture(this._resolveGradientTexture,9),f.setUniform1i("u_texture",8),f.setUniform1i("u_gradient",9),f.setUniform2f("u_densityMinAndInvRange",d,1/h),f.setUniform1f("u_densityNormalization",3/(m*m*Math.PI)),this._tileQuad.draw()}_loadResources(e){const t=e.type===u.WEBGL2,{dataType:r,samplingMode:a,shadingRate:s}=this._loadQualityProfile(e);this._accumulateOutputTexture??(this._accumulateOutputTexture=new T(e,{target:d.TEXTURE_2D,pixelFormat:t?h.RED:h.RGBA,internalFormat:t?r===c.FLOAT?f.R32F:f.R16F:h.RGBA,dataType:r,samplingMode:a,wrapMode:_.CLAMP_TO_EDGE,width:Math.round(512*s),height:Math.round(512*s)})),this._accumulateFramebuffer??(this._accumulateFramebuffer=new g(e,{},this._accumulateOutputTexture)),this._resolveGradientTexture??(this._resolveGradientTexture=new T(e,{target:d.TEXTURE_2D,pixelFormat:h.RGBA,dataType:c.UNSIGNED_BYTE,samplingMode:p.LINEAR,wrapMode:_.CLAMP_TO_EDGE})),this._tileQuad??(this._tileQuad=new i(e,[0,0,1,0,0,1,1,1]))}_updateResources(e){const{gradientHash:t,gradient:r}=e;this._prevGradientHash!==t&&(this._resolveGradientTexture.resize(r.length/4,1),this._resolveGradientTexture.setData(r),this._prevGradientHash=t)}_loadQualityProfile(e){if(r(this._qualityProfile)){const{textureFloat:t,colorBufferFloat:r}=e.capabilities,{textureFloat:a,textureFloatLinear:i,textureHalfFloat:s,textureHalfFloatLinear:o,HALF_FLOAT:u}=t,{textureFloat:n,textureHalfFloat:l,floatBlend:m}=r;let d,h;const f=a&&n&&m,_=s&&l;f&&i?(d=c.FLOAT,h=p.LINEAR):_&&o?(d=u,h=p.LINEAR):f?(d=c.FLOAT,h=p.NEAREST):_?(d=u,h=p.NEAREST):x.error("Missing webgl extensions for heatmap!"),h===p.NEAREST&&x.warnOnce("Missing linear filtering webgl extension(s). Heatmap quality may be reduced."),this._qualityProfile={dataType:d,samplingMode:h,shadingRate:.5,defines:d===u?["heatmapPrecisionHalfFloat"]:[]}}return this._qualityProfile}}export{b as default};