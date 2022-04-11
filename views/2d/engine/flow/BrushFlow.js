/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../webgl/brushes/WGLBrush","../../../webgl/enums"],(function(e,t,n,r){"use strict";let i=function(n){function i(){return n.apply(this,arguments)||this}e._inheritsLoose(i,n);var a=i.prototype;return a.dispose=function(){},a.prepareState=function(e){const{context:t}=e;t.setColorMask(!0,!0,!0,!0),t.setStencilFunction(r.CompareFunction.EQUAL,0,255)},a.draw=function(e,n){const{context:i}=e,{displayData:a}=n;if(t.isNone(a))return;if("loaded"===a.state.name&&a.prepareForRendering(i),"attached"!==a.state.name)return;const o=a.state.resources;i.setFaceCullingEnabled(!1),i.setBlendingEnabled(!0),i.setBlendFunctionSeparate(r.BlendFactor.ONE,r.BlendFactor.ONE_MINUS_SRC_ALPHA,r.BlendFactor.ONE,r.BlendFactor.ONE);const l=[];"ramp"===o.values.lineColor.kind&&l.push("vvLineColor"),"ramp"===o.values.lineOpacity.kind&&l.push("vvLineOpacity"),"ramp"===o.values.lineRenderWidth.kind&&l.push("vvLineRenderWidth");const u=e.painter.materialManager.getProgram(e,{vsPath:"raster/flow",fsPath:"raster/flow",attributes:o.locations},l);i.useProgram(u),u.setUniform1f("u_time",e.time/1e3),u.setUniform1f("u_fadeDuration",a.flowStyle.renderSettings.fadeDuration),u.setUniform1f("u_lineSpeed",a.flowStyle.renderSettings.lineSpeed),u.setUniformMatrix3fv("u_dvsMat3",n.transforms.dvs),u.setUniformMatrix3fv("u_displayViewMat3",e.state.displayViewMat3),s(u,"lineColor","vec4",a.flowStyle.renderSettings.lineColor),s(u,"lineOpacity","float",a.flowStyle.renderSettings.lineOpacity),s(u,"lineRenderWidth","float",a.flowStyle.renderSettings.lineRenderWidth),i.bindVAO(o.vertexArray),i.drawElements(r.PrimitiveType.TRIANGLES,o.indexBuffer.size,r.DataType.UNSIGNED_INT,0),a.flowStyle.animated&&n.requestRender()},i}(n);function a(e,t,n,r){switch(t){case"int":e.setUniform1iv(n,r);break;case"float":e.setUniform1fv(n,r);break;case"vec2":e.setUniform2fv(n,r);break;case"vec3":e.setUniform3fv(n,r);break;case"vec4":e.setUniform4fv(n,r)}}function s(e,t,n,r){"constant"===r.kind?a(e,n,`u_${t}`,r.value):(a(e,"float",`u_${t}_stops`,r.stops),a(e,n,`u_${t}_values`,r.values),a(e,"int",`u_${t}_count`,[r.count]))}return i}));
