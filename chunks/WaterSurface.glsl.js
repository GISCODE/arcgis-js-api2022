/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/WaterDistortion.glsl","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/Water.glsl"],(function(e,a,r,i,o,l,t,n,d,s,g,v,c,m,u){"use strict";function p(e){const p=new i.ShaderBuilder;return p.include(r.Transform,{linearDepth:!1}),p.attributes.add("position","vec3"),p.attributes.add("uv0","vec2"),p.vertex.uniforms.add("proj","mat4").add("view","mat4").add("localOrigin","vec3"),p.vertex.uniforms.add("waterColor","vec4"),0!==e.output&&7!==e.output||(p.include(m.NormalUtils,e),p.include(c.ForwardLinearDepth,e),p.varyings.add("vuv","vec2"),p.varyings.add("vpos","vec3"),p.varyings.add("vnormal","vec3"),p.varyings.add("vtbnMatrix","mat3"),e.multipassTerrainEnabled&&p.varyings.add("depth","float"),p.vertex.code.add(a.glsl`
      void main(void) {
        if (waterColor.a < ${a.glsl.float(d.symbolAlphaCutoff)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        vnormal = getLocalUp(vpos, localOrigin);
        vtbnMatrix = getTBNMatrix(vnormal);

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}

        gl_Position = transformPosition(proj, view, vpos);
        ${0===e.output?"forwardLinearDepth();":""}
      }
    `)),e.multipassTerrainEnabled&&(p.fragment.include(t.ReadLinearDepth),p.include(s.multipassTerrainTest,e)),7===e.output&&(p.include(l.Slice,e),p.fragment.uniforms.add("waterColor","vec4"),p.fragment.code.add(a.glsl`
        void main() {
          discardBySlice(vpos);
          ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

          gl_FragColor = vec4(waterColor.a);
        }
      `)),0===e.output&&(p.include(v.WaterDistortion,e),p.include(l.Slice,e),e.receiveShadows&&p.include(g.ReadShadowMap,e),p.include(u.Water,e),p.fragment.uniforms.add("waterColor","vec4").add("lightingMainDirection","vec3").add("lightingMainIntensity","vec3").add("camPos","vec3").add("timeElapsed","float").add("view","mat4"),p.fragment.include(o.ColorConversion),p.fragment.code.add(a.glsl`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - camPos);
        vec3 l = normalize(-lightingMainDirection);
        float shadow = ${e.receiveShadows?a.glsl`1.0 - readShadowMap(vpos, linearDepth)`:"1.0"};
        vec4 vPosView = view*vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, l, waterColor.rgb, lightingMainIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz), waterColor.w);

        // gamma correction
        gl_FragColor = delinearizeGamma(final);
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),2===e.output&&(p.include(m.NormalUtils,e),p.include(v.WaterDistortion,e),p.include(l.Slice,e),p.varyings.add("vpos","vec3"),p.varyings.add("vuv","vec2"),p.vertex.code.add(a.glsl`
        void main(void) {
          if (waterColor.a < ${a.glsl.float(d.symbolAlphaCutoff)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vuv = uv0;
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
        }
    `),p.fragment.uniforms.add("timeElapsed","float"),p.fragment.code.add(a.glsl`
        void main() {
          discardBySlice(vpos);

          // the created normal is in tangent space and foam
          vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
          tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);

          gl_FragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);
        }
    `)),5===e.output&&(p.varyings.add("vpos","vec3"),p.vertex.code.add(a.glsl`
        void main(void) {
          if (waterColor.a < ${a.glsl.float(d.symbolAlphaCutoff)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vpos = position;
          gl_Position = transformPosition(proj, view, vpos);
        }
    `),p.fragment.uniforms.add("waterColor","vec4"),p.fragment.code.add(a.glsl`
        void main() {
          gl_FragColor = waterColor;
        }
    `)),4===e.output&&(p.include(n.OutputHighlight),p.varyings.add("vpos","vec3"),p.vertex.code.add(a.glsl`
      void main(void) {
        if (waterColor.a < ${a.glsl.float(d.symbolAlphaCutoff)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
      }
    `),p.include(l.Slice,e),p.fragment.code.add(a.glsl`
      void main() {
        discardBySlice(vpos);
        outputHighlight();
      }
    `)),p}var h=Object.freeze({__proto__:null,build:p});e.WaterSurface=h,e.build=p}));