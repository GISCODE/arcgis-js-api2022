/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../definitions","../VertexStream","./Effect"],(function(e,t,i,n,r,o){"use strict";let a=function(e){function o(){var t;return(t=e.apply(this,arguments)||this).defines=[],t._desc={vsPath:"fx/integrate",fsPath:"fx/integrate",attributes:new Map([["a_position",0]])},t}t._inheritsLoose(o,e);var a=o.prototype;return a.dispose=function(){this._quad&&this._quad.dispose()},a.bind=function(){},a.unbind=function(){},a.draw=function(e,t){if(!t.size)return;const{context:o,renderingOptions:a}=e;this._quad||(this._quad=new r(o,[0,0,1,0,0,1,1,1]));const s=o.getBoundFramebufferObject(),{x:u,y:f,width:_,height:c}=o.getViewport();t.bindTextures(o);const d=t.getBlock(n.ATTRIBUTE_DATA_ANIMATION);if(i.isNone(d))return;const l=d.getFBO(o),m=d.getFBO(o,1);o.setViewport(0,0,t.size,t.size),this._computeDelta(e,m,a.labelsAnimationTime),this._updateAnimationState(e,m,l),o.bindFramebuffer(s),o.setViewport(u,f,_,c)},a._computeDelta=function(e,t,i){const{context:r,painter:o,displayLevel:a}=e,s=o.materialManager.getProgram(e,this._desc,["delta"]);r.bindFramebuffer(t),r.setClearColor(0,0,0,0),r.clear(r.gl.COLOR_BUFFER_BIT),r.useProgram(s),s.setUniform1i("u_maskTexture",n.TEXTURE_BINDING_ATTRIBUTE_DATA_0),s.setUniform1i("u_sourceTexture",n.TEXTURE_BINDING_ATTRIBUTE_DATA_1),s.setUniform1f("u_timeDelta",e.deltaTime),s.setUniform1f("u_animationTime",i),s.setUniform1f("u_zoomLevel",Math.round(10*a)),this._quad.draw()},a._updateAnimationState=function(e,t,i){const{context:n,painter:r}=e,o=r.materialManager.getProgram(e,this._desc,["update"]);n.bindTexture(t.colorTexture,1),n.useProgram(o),o.setUniform1i("u_sourceTexture",1),n.bindFramebuffer(i),n.setClearColor(0,0,0,0),n.clear(n.gl.COLOR_BUFFER_BIT),this._quad.draw()},o}(o.Effect);e.AnimationEffect=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
