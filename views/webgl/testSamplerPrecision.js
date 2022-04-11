/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../core/Logger","./BufferObject","./enums","./FramebufferObject","./Texture","./VertexArrayObject","./VertexElementDescriptor"],(function(e,t,r,i,o,n,a,s){"use strict";const p=t.getLogger("esri.views.WebGLDriverTest");function l(e){const t=new o.FramebufferObject(e,{colorTarget:i.TargetType.TEXTURE,depthStencilTarget:i.DepthStencilTargetType.NONE},{target:i.TextureType.TEXTURE_2D,wrapMode:i.TextureWrapMode.CLAMP_TO_EDGE,pixelFormat:i.PixelFormat.RGBA,dataType:i.PixelType.UNSIGNED_BYTE,samplingMode:i.TextureSamplingMode.NEAREST,width:1,height:1}),l="\nprecision highp float;\nattribute vec2 a_pos;\nuniform highp sampler2D u_texture;\nvarying vec4 v_color;\n\nfloat getBit(in float bitset, in int bitIndex) {\n  float offset = pow(2.0, float(bitIndex));\n  return mod(floor(bitset / offset), 2.0);\n}\n\nvoid main() {\n  vec4 value = texture2D(u_texture, vec2(0.0));\n  float bit = getBit(value.x * 255.0, 1);\n\n  v_color = bit * vec4(1.0);\n  gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n}\n",u="\nprecision highp float;\nvarying vec4 v_color;\n\nvoid main() {\n  gl_FragColor = v_color;\n}\n",c=new Uint8Array(4),d=r.BufferObject.createVertex(e,i.Usage.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),T=new a.VertexArrayObject(e,new Map([["a_position",0]]),{geometry:[new s.VertexElementDescriptor("a_position",2,i.DataType.SHORT,0,4)]},{geometry:d}),g=e.programCache.acquire(l,u,new Map([["a_pos",0]]));e.useProgram(g);const m=new n.Texture(e,{target:i.TextureType.TEXTURE_2D,wrapMode:i.TextureWrapMode.CLAMP_TO_EDGE,pixelFormat:i.PixelFormat.RGBA,dataType:i.PixelType.UNSIGNED_BYTE,samplingMode:i.TextureSamplingMode.NEAREST,width:1,height:1},new Uint8Array([2,255,0,0]));g.setUniform1i("u_texture",0),e.bindTexture(m,0);const f=e.getBoundFramebufferObject();e.bindFramebuffer(t),e.useProgram(g);const{x,y:b,width:y,height:v}=e.getViewport();e.setViewport(0,0,1,1),e.bindVAO(T),e.drawArrays(i.PrimitiveType.TRIANGLE_STRIP,0,4),e.setViewport(x,b,y,v),t.readPixels(0,0,1,1,i.PixelFormat.RGBA,i.PixelType.UNSIGNED_BYTE,c),g.dispose(),T.dispose(!1),d.dispose(),t.dispose();const _=255!==c[0]||255!==c[1]||255!==c[2]||255!==c[3];return _&&p.warn(`A problem was detected with your graphics driver. Your driver does not appear to honor sampler precision specifiers, which may result in rendering issues due to numerical instability. We recommend ensuring that your drivers have been updated to the latest version. Applying lowp sampler workaround. [${c[0]}.${c[1]}.${c[2]}.${c[3]}]`),e.bindFramebuffer(f),_}e.testSamplerPrecision=l,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
