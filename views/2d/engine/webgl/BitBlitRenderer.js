/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","./DefaultVertexAttributeLayouts","./shaders/BitBlitPrograms","../../../webgl/BufferObject","../../../webgl/enums","../../../webgl/ProgramTemplate","../../../webgl/VertexArrayObject"],(function(e,t,r,i,n,a,o,s){"use strict";let l=function(){function e(){this._initialized=!1}var l=e.prototype;return l.dispose=function(){this._program=t.disposeMaybe(this._program),this._vertexArrayObject=t.disposeMaybe(this._vertexArrayObject)},l.render=function(e,t,r,i){e&&(this._initialized||this._initialize(e),e.setBlendFunctionSeparate(a.BlendFactor.ONE,a.BlendFactor.ONE_MINUS_SRC_ALPHA,a.BlendFactor.ONE,a.BlendFactor.ONE_MINUS_SRC_ALPHA),e.bindVAO(this._vertexArrayObject),e.useProgram(this._program),t.setSamplingMode(r),e.bindTexture(t,0),this._program.setUniform1i("u_tex",0),this._program.setUniform1f("u_opacity",i),e.drawArrays(a.PrimitiveType.TRIANGLE_STRIP,0,4),e.bindTexture(null,0),e.bindVAO())},l._initialize=function(e){if(this._initialized)return!0;const t=o.createProgram(e,i.bitBlit);if(!t)return!1;const l=new Int8Array(16);l[0]=-1,l[1]=-1,l[2]=0,l[3]=0,l[4]=1,l[5]=-1,l[6]=1,l[7]=0,l[8]=-1,l[9]=1,l[10]=0,l[11]=1,l[12]=1,l[13]=1,l[14]=1,l[15]=1;const u=i.bitBlit.attributes,c=new s.VertexArrayObject(e,u,r.PosTex2b,{geometry:n.BufferObject.createVertex(e,a.Usage.STATIC_DRAW,l)});return this._program=t,this._vertexArrayObject=c,this._initialized=!0,!0},e}();e.BitBlitRenderer=l,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
