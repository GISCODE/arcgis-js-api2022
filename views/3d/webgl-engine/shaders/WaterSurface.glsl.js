/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../core/shaderLibrary/ForwardLinearDepth.glsl","../core/shaderLibrary/ShaderOutputOptions","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/Transform.glsl","../core/shaderLibrary/output/OutputHighlight.glsl","../core/shaderLibrary/output/ReadLinearDepth.glsl","../core/shaderLibrary/shading/EvaluateAmbientLighting.glsl","../core/shaderLibrary/shading/EvaluateMainLighting.glsl","../core/shaderLibrary/shading/MultipassTerrainTest.glsl","../core/shaderLibrary/shading/NormalUtils.glsl","../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../core/shaderLibrary/shading/ReadShadowMap.glsl","../core/shaderLibrary/shading/Water.glsl","../core/shaderLibrary/shading/WaterDistortion.glsl","../core/shaderLibrary/util/AlphaDiscard.glsl","../core/shaderLibrary/util/ColorConversion.glsl","../core/shaderModules/interfaces","../core/shaderModules/ShaderBuilder","../lib/VertexAttribute","../../../../chunks/WaterSurface.glsl"],(function(r,e,a,s,i,l,d,t,o,h,g,n,c,u,b,L,y,p,M,S,f){"use strict";r.build=f.build,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));