/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../shaderModules/interfaces"],(function(e,i){"use strict";!function(e){function r(e,r){e.vertex.uniforms.add("camPos","vec3").add("perScreenPixelRatio","float").add("screenSize","float"),e.vertex.code.add(i.glsl`
    float computeRenderPixelSizeAt( vec3 pWorld ){
      vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
      float viewDirectionDistance = abs(dot(viewForward, pWorld - camPos));
      return viewDirectionDistance*perScreenPixelRatio;
    }

    vec3 screenSizeScaling(vec3 position, vec3 anchor){
      return position * screenSize * computeRenderPixelSizeAt(anchor) + anchor;
    }
  `)}function n(e,i,r){e.setUniform1f("perScreenPixelRatio",r.camera.perScreenPixelRatio),e.setUniform1f("screenSize",i.screenSize)}e.builder=r,e.bindPassUniforms=n}(e.ScreenSizeScaling||(e.ScreenSizeScaling={})),Object.defineProperty(e,"__esModule",{value:!0})}));