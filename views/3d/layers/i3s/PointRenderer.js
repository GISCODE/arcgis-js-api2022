// COPYRIGHT © 2017 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../webgl/Program","../../../webgl/VertexArrayObject","../../../webgl/BufferObject","../../webgl-engine/lib/RenderPass","../../../webgl/enums","../../webgl-engine/lib/gl-matrix","../../support/aaBoundingBox","../../support/orientedBoundingBox"],function(e,i,t,n,r,o,s,a,c,d){function l(e,i,t,n){return t.drawScreenSpace?t.fixedSize*i*n:t.drawFixedSize?t.fixedSize/2:t.screenMinSize>0?Math.max(t.screenMinSize*i*n,e/2):e/2}function u(e,i){return i.drawScreenSpace?0:i.drawFixedSize?i.fixedSize/2:e/2}function p(e,i,t){return null==t&&(t=a.vec3d.create()),t[0]=e.origin[0]+e.coordinates[3*i],t[1]=e.origin[1]+e.coordinates[3*i+1],t[2]=e.origin[2]+e.coordinates[3*i+2],t}var f={aPosition:0,aColor:1},m={positions:[{name:"aPosition",count:3,type:5126,offset:0,stride:12,normalized:!1}],colors:[{name:"aColor",count:3,type:5121,offset:0,stride:3,normalized:!0}]},h=function(){function e(){this.didRender=!1,this.needsRender=!0,this.layerId="",this._useFixedSizes=!1,this._scaleFactor=1,this._minSizePx=0,this._useRealWorldSymbolSizes=!1,this._size=0,this._sizePx=0,this._clipBox=c.create(c.POSITIVE_INFINITY),this._programWorld=null,this._programScreen=null,this.tempMatrix4=a.mat4.create(),this.tempVec2=a.vec2.create(),this.tempVec3=a.vec3.create(),this.nodes=[]}return e.prototype.initializeRenderContext=function(e){var i=v.shader,n=i.vertex,r=i.fragment,o=[];this._programWorld=new t(e.rctx,n,r,f,o);var s=["DRAW_SCREEN_SIZE"];this._programScreen=new t(e.rctx,n,r,f,s),this.needsRender=!0},e.prototype.uninitializeRenderContext=function(e){this._programWorld&&this._programWorld.dispose(),this._programScreen&&this._programScreen.dispose(),this._programWorld=null,this._programScreen=null},e.prototype.intersect=function(e,i,t,n){var r=a.vec3d.create(),o=a.vec3d.create(),s=a.vec3d.create(),f=a.vec3d.create(),m=a.vec4d.create(),h=e.camera.perPixelRatio,v=this._getSizeParams();a.vec3d.subtract(t,i,o);var S=1/a.vec3d.length(o);a.vec3d.scale(o,S,o),a.vec3d.negate(o,s),a.vec4d.set4(o[0],o[1],o[2],-a.vec3d.dot(o,i),m);var x={},g={},_=c.create(),z=c.create(this._clipBox);c.offset(z,-i[0],-i[1],-i[2],z);for(var b=0,P=this.nodes;b<P.length;b++){var y=P[b],M=y.splatSize*this._scaleFactor,I=u(M,v),R=d.minimumDistancePlane(y.obb,m)-I,C=d.maximumDistancePlane(y.obb,m)-I,w=0>C,V=null!=x.dist&&null!=g.dist&&x.dist<R*S&&g.dist>C*S;if(!w&&!V){var F=l(M,C,v,h);if(d.intersectLine(y.obb,i,o,F)){d.toAaBoundingBox(y.obb,_),c.offset(_,-i[0],-i[1],-i[2],_);var O=!c.containsAabb(z,_);a.vec3d.subtract(y.origin,i,f);for(var E=0;E<y.pointCount;E++)if(r[0]=f[0]+y.coordinates[3*E],r[1]=f[1]+y.coordinates[3*E+1],r[2]=f[2]+y.coordinates[3*E+2],!O||c.contains(z,r)){var W=a.vec3d.dot(r,o),j=0>W-I,N=a.vec3d.length2(r)-W*W;if(!j&&F*F>=N){var q=l(M,W-I,v,h);if(q*q>=N){var B=this.layerId+"/"+y.id+"/"+E,A=(W-I)*S;(null==x.dist||A<x.dist)&&(x.point=p(y,E,x.point),x.dist=A,x.normal=s,x.pointId=B,x.layerId=this.layerId),(null==g.dist||A>g.dist)&&(g.point=p(y,E,g.point),g.dist=A,g.normal=s,g.pointId=B,g.layerId=this.layerId)}}}}}}if(null!=x.dist){var U=e.getMinResult(),T={point:x.point,metadata:{pointId:x.pointId,layerId:x.layerId}};U.set(T,x.pointId,x.dist,x.normal,void 0),U.setIntersector("pointcloud")}if(null!=g.dist){var D=e.getMaxResult(),T={point:g.point,metadata:{pointId:g.pointId,layerId:g.layerId}};D.set(T,g.pointId,g.dist,g.normal,void 0),D.setIntersector("pointcloud")}},e.prototype.render=function(e){if(e.pass!==o.MATERIAL)return!1;for(var i=e.rctx,t=0,n=this.nodes;t<n.length;t++){var r=n[t];null==r.vao&&this._initNode(e,r)}var s=this._getSizeParams(),d=s.drawScreenSpace?this._programScreen:this._programWorld;if(null==d||0===this.nodes.length)return!0;var l=this._clipBox,u=!c.equals(l,c.POSITIVE_INFINITY,function(e,i){return e===i});u||(a.vec3.set3(-(1/0),-(1/0),-(1/0),this.tempVec3),d.setUniform3fv("uClipMin",this.tempVec3),a.vec3.set3(1/0,1/0,1/0,this.tempVec3),d.setUniform3fv("uClipMax",this.tempVec3)),i.setDepthTestEnabled(!0),i.bindProgram(d);var p=e.camera.projectionMatrix;if(d.setUniformMatrix4fv("uProjectionMatrix",p),d.setUniform1f("uScreenMinSize",s.screenMinSize),this.tempVec2[1]=e.camera.fullHeight,s.drawFixedSize){var f=s.fixedSize;this.tempVec2[0]=f,d.setUniform2fv("uPointScale",this.tempVec2)}for(var m=0,h=this.nodes;m<h.length;m++){var r=h[m];if(!s.drawFixedSize){var v=r.splatSize*this._scaleFactor;this.tempVec2[0]=v,d.setUniform2fv("uPointScale",this.tempVec2)}var S=r.origin;u&&(a.vec3.set3(l[0]-S[0],l[1]-S[1],l[2]-S[2],this.tempVec3),d.setUniform3fv("uClipMin",this.tempVec3),a.vec3.set3(l[3]-S[0],l[4]-S[1],l[5]-S[2],this.tempVec3),d.setUniform3fv("uClipMax",this.tempVec3)),a.mat4.identity(this.tempMatrix4),a.mat4.translate(this.tempMatrix4,S,this.tempMatrix4),a.mat4.multiply(e.camera.viewMatrix,this.tempMatrix4,this.tempMatrix4),d.setUniformMatrix4fv("uModelViewMatrix",this.tempMatrix4),i.bindVAO(r.vao),i.drawArrays(0,0,r.pointCount)}return!0},Object.defineProperty(e.prototype,"useFixedSizes",{get:function(){return this._useFixedSizes},set:function(e){this._useFixedSizes!==e&&(this._useFixedSizes=e,this._requestRender())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scaleFactor",{get:function(){return this._scaleFactor},set:function(e){this._scaleFactor!==e&&(this._scaleFactor=e,this._requestRender())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"minSizePx",{get:function(){return this._minSizePx},set:function(e){this._minSizePx!==e&&(this._minSizePx=e,this._requestRender())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"useRealWorldSymbolSizes",{get:function(){return this._useRealWorldSymbolSizes},set:function(e){this._useRealWorldSymbolSizes!==e&&(this._useRealWorldSymbolSizes=e,this._requestRender())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this._size},set:function(e){this._size!==e&&(this._size=e,this._requestRender())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sizePx",{get:function(){return this._sizePx},set:function(e){this._sizePx!==e&&(this._sizePx=e,this._requestRender())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"clippingBox",{set:function(e){c.set(this._clipBox,e||c.POSITIVE_INFINITY)},enumerable:!0,configurable:!0}),e.prototype.addNode=function(e){this.nodes.push({id:e.id,splatSize:e.splatSize,obb:e.obb,origin:a.vec3.create(e.origin),coordinates:e.coordinates,pointCount:e.coordinates.length/3,rgb:e.rgb,vao:null}),this._requestRender()},e.prototype.removeNode=function(e){this.nodes=this.nodes.filter(function(i){return i.id===e&&i.vao&&(i.vao.dispose(!0),i.vao=null),i.id!==e}),this._requestRender()},e.prototype.removeAll=function(){this.nodes.forEach(function(e){e.vao&&(e.vao.dispose(!0),e.vao=null)}),this.nodes=[],this._requestRender()},e.prototype._initNode=function(e,i){var t=e.rctx;i.vao=new n(t,f,m,{positions:r.createVertex(t,35044,i.coordinates),colors:r.createVertex(t,35044,i.rgb)})},e.prototype._requestRender=function(){this.didRender=!1,this.needsRender=!0},e.prototype._getSizeParams=function(){var e=this._useFixedSizes,i=e&&!this._useRealWorldSymbolSizes,t=i?this._sizePx:this._size,n=this._minSizePx;return e&&(n=0),{drawScreenSpace:i,drawFixedSize:e,fixedSize:t,screenMinSize:n}},e}(),v={shader:{vertex:"\n      attribute vec3 aPosition;\n      attribute vec3 aColor;\n\n      uniform mat4 uModelViewMatrix;\n      uniform mat4 uProjectionMatrix;\n      uniform float uScreenMinSize;\n      uniform vec2 uPointScale;\n      uniform vec3 uClipMin;\n      uniform vec3 uClipMax;\n\n      varying vec3 vColor;\n      void main(void) {\n\n        // Move clipped points outside of clipspace\n        if (aPosition.x < uClipMin.x || aPosition.y < uClipMin.y || aPosition.z < uClipMin.z ||\n            aPosition.x > uClipMax.x || aPosition.y > uClipMax.y || aPosition.z > uClipMax.z) {\n          vColor = vec3(0.0);\n          gl_Position = vec4(0.0,0.0,0.0,2.0);\n          gl_PointSize = 0.0;\n          return;\n        }\n\n        // Position in camera space\n        vec4 camera = uModelViewMatrix * vec4(aPosition, 1.0);\n\n        float pointSize = uPointScale.x;\n        float pointRadius = 0.5 * pointSize;\n\n        #ifndef DRAW_SCREEN_SIZE\n          // Shift towards camera, to move rendered point out of terrain i.e. to\n          // the camera-facing end of the virtual point when considering it as a\n          // 3D sphere.\n          camera.xyz -= normalize(camera.xyz) * pointRadius;\n        #endif\n\n        vec4 position = uProjectionMatrix * camera;\n\n        // Calculate Size\n        #ifdef DRAW_SCREEN_SIZE\n          float screenPointSize = pointSize;\n        #else\n          vec4 cameraOffset = camera + vec4(0.0, pointRadius, 0.0, 0.0);\n          vec4 positionOffset = uProjectionMatrix * cameraOffset;\n          float radius = abs(positionOffset.y - position.y);\n\n          float viewHeight = uPointScale.y;\n\n          // screen diameter = (2 * r / w) * (h / 2)\n          float screenPointSize = (radius / position.w) * viewHeight;\n        #endif\n\n        screenPointSize = max(screenPointSize, uScreenMinSize);\n\n        gl_PointSize = screenPointSize;\n        gl_Position = position;\n\n        vColor = aColor;\n      }\n    ",fragment:"\n      precision mediump float;\n      varying vec3 vColor;\n      void main(void) {\n\n        vec2 vOffset = gl_PointCoord - vec2(0.5, 0.5);\n        float r2 = dot(vOffset, vOffset);\n        if (r2 > 0.25) {\n          discard;\n        }\n\n        gl_FragColor = vec4(vColor, 1.0);\n      }\n    "}};return h});