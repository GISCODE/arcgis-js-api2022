/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../chunks/mat4","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../chunks/vec4","../../../../chunks/vec4f64","./Object3DVisualElement","../../webgl-engine/lib/Geometry","../../webgl-engine/lib/Material","../../webgl-engine/lib/VertexAttribute","../../webgl-engine/materials/CheckerBoardMaterial"],(function(e,t,r,i,c,o,n,a,s,l,u,h,d){"use strict";let _=function(e){function s(t){var r;return(r=e.call(this,t)||this)._checkerBoardMaterial=null,r._renderOccluded=u.RenderOccludedFlag.OccludeAndTransparent,r._geometry=null,r._size=[1,1],r._color1=a.fromValues(1,.5,0,.5),r._color2=a.fromValues(1,1,1,.5),r.applyProps(t),r}t._inheritsLoose(s,e);var _=s.prototype;return _._updateMaterial=function(){r.isSome(this._checkerBoardMaterial)&&this._checkerBoardMaterial.setParameters({size:this._size,color1:this._color1,color2:this._color2,renderOccluded:this._renderOccluded})},_.createExternalResources=function(){this._checkerBoardMaterial=new d.CheckerBoardMaterial({size:this._size,color1:this._color1,color2:this._color2,transparent:!0,writeDepth:!1,polygonOffset:!0,renderOccluded:u.RenderOccludedFlag.OccludeAndTransparent})},_.destroyExternalResources=function(){this._checkerBoardMaterial=null},_.forEachExternalMaterial=function(e){r.isSome(this._checkerBoardMaterial)&&e(this._checkerBoardMaterial)},_.createGeometries=function(e){if(r.isNone(this._geometry)||r.isNone(this._checkerBoardMaterial))return;const t=f;i.getTranslation(t,this.transform);const n=this._geometry,a=[],s=o.create();n.position.forEach((e=>{c.subtract(s,e,t),a.push(s[0],s[1],s[2])}));const u=[];n.uv.forEach((e=>{u.push(e[0],e[1])}));const d=new l.Geometry([[h.VertexAttribute.POSITION,{size:3,data:a,exclusive:!0}],[h.VertexAttribute.UV0,{size:2,data:u,exclusive:!0}]],[[h.VertexAttribute.POSITION,n.triangleIndices],[h.VertexAttribute.UV0,n.triangleIndices]]);e.addGeometry(d,this._checkerBoardMaterial)},_._geometryChanged=function(){this.recreateGeometry()},t._createClass(s,[{key:"renderOccluded",get:function(){return this._renderOccluded},set:function(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}},{key:"geometry",get:function(){return this._geometry},set:function(e){this._geometry=e,this._geometryChanged()}},{key:"size",get:function(){return this._size},set:function(e){this._size=e,this._updateMaterial()}},{key:"color1",get:function(){return this._color1},set:function(e){n.exactEquals(e,this._color1)||(n.copy(this._color1,e),this._updateMaterial())}},{key:"color2",get:function(){return this._color2},set:function(e){n.exactEquals(e,this._color2)||(n.copy(this._color2,e),this._updateMaterial())}}]),s}(s.Object3DVisualElement);const f=o.create();e.MeasurementAreaVisualElement=_,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));