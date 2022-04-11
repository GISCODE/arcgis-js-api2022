/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../Color","../../../../../core/Evented","../../../../../core/Handles","../../../../../core/handleUtils","../../../../../core/maybe","../../../../../chunks/mat4","../../../../../chunks/mat4f64","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../geometry/support/vectorStacks","../../../../../support/elevationInfoUtils","../../Manipulator3D","../dragEventPipeline3D","../ManipulatorType","../settings","./config","./Manipulation","./moveUtils","../../../webgl-engine/lib/basicInterfaces","../../../webgl-engine/lib/GeometryUtil","../../../webgl-engine/lib/Material","../../../webgl-engine/materials/ColorMaterial","../../../../interactive/dragEventPipeline","../../../../interactive/interfaces"],(function(t,a,e,r,n,i,o,s,l,u,p,c,d,h,_,f,g,M,m,v,w,y,A,T,I,S){"use strict";let D=function(t){function m(a){var e;return(e=t.call(this)||this)._handles=new n,e._arrowManipulatorInfos=new Array,e._opaqueMaterial=e._createMaterial(),e._transparentMaterial=e._createMaterial(.5),e._angle=0,e._scale=1,e._radius=M.DISC_RADIUS,e._updateAfterDrag=!1,e.events=new r,e._tool=a.tool,e._view=a.view,null!=a.radius&&(e._radius=a.radius),e._createManipulators(),e.forEachManipulator((t=>e._tool.manipulators.add(t))),e}a._inheritsLoose(m,t);var D=m.prototype;return D.destroy=function(){this.forEachManipulator((t=>{this._tool.manipulators.remove(t),t.destroy()})),this._handles=o.destroyMaybe(this._handles),this._tool=null,this._view=null,this._arrowManipulatorInfos.length=0},D.forEachManipulator=function(t){for(const{manipulator:a}of this._arrowManipulatorInfos)t(a,f.ManipulatorType.TRANSLATE_XY)},D.createGraphicDragPipeline=function(t,a,e){const r=a.graphic,n=d.getGraphicEffectiveElevationInfo(r),i=o.unwrap(r.geometry).spatialReference;return v.createGraphicMoveDragPipeline(a,e,(a=>this.createDragPipeline(((e,r,n,i,o)=>a(e,t(e,r,n,i,o),n)),n,i,r)),this._view.state.viewingMode)},D.createDragPipeline=function(t,a,e,r){return i.handlesGroup(this._arrowManipulatorInfos.map((({manipulator:n},i)=>I.createManipulatorDragEventPipeline(n,((n,o,s,l,u)=>{const p=o.next((t=>({...t,manipulatorType:f.ManipulatorType.TRANSLATE_XY}))).next(I.dragAtLocation(this._view,n.elevationAlignedLocation)).next(_.screenToMapXYAtLocation(this._view,n.elevationAlignedLocation,a,e,r)).next(I.constrainToMapAxis(n.location,this.angle+(i+1)*Math.PI*.5)).next(I.addScreenDelta());t(n,p,s,l,u)})))))},D._updateManipulators=function(){for(let t=0;t<this._arrowManipulatorInfos.length;t++)this._updateArrowManipulator(this._arrowManipulatorInfos[t],t);this._updateManipulatorTransform()},D._updateArrowManipulator=function({manipulator:t,transform:a},e){const r=this._radius/M.DISC_RADIUS,n=M.DISC_TRANSLATE_ARROW_SIZE*r,i=n*Math.sqrt(3)/2,o=y.createExtrudedTriangle(i,n/2,n/2,M.DISC_HEIGHT);y.transformInPlace(o,s.fromTranslation(c.sm4d.get(),u.set(c.sv3d.get(),0,-i/3,0))),t.renderObjects=[{geometry:o,material:this._opaqueMaterial,stateMask:S.ManipulatorStateFlags.Focused},{geometry:o,material:this._transparentMaterial,stateMask:S.ManipulatorStateFlags.Unfocused}],t.radius=i/3*2*1.2;const l=s.fromZRotation(c.sm4d.get(),e*Math.PI/2),p=s.fromTranslation(c.sm4d.get(),u.set(c.sv3d.get(),0,M.DISC_TRANSLATE_ARROW_OFFSET*r,0));s.multiply(a,l,p)},D._createManipulators=function(){for(let t=0;t<4;t++){const a=this._createArrowManipulator(t);this._arrowManipulatorInfos.push(a)}this._updateManipulatorTransform()},D._updateManipulatorTransform=function(){const t=this.angle,a=s.fromRotation(c.sm4d.get(),t,p.fromValues(0,0,1)),e=s.fromScaling(c.sm4d.get(),u.set(c.sv3d.get(),this.displayScale,this.displayScale,this.displayScale)),r=s.multiply(c.sm4d.get(),e,a);for(const n of this._arrowManipulatorInfos){const t=s.multiply(c.sm4d.get(),r,n.transform);n.manipulator.modelTransform=t}},D._createArrowManipulator=function(t){const a=new h.Manipulator3D({view:this._view,autoScaleRenderObjects:!1,worldOriented:!0,focusMultiplier:1,touchMultiplier:1,collisionType:{type:"disc",direction:p.fromValues(0,0,1)}}),e={manipulator:a,transform:l.create()};return this._updateArrowManipulator(e,t),this._handles.add(a.events.on("drag",(t=>{this._updateAfterDrag&&"end"===t.action&&!this.dragging&&(this._updateManipulatorTransform(),this._updateAfterDrag=!1)}))),e},D._createMaterial=function(t=1){const a=e.toUnitRGBA(g.colors.main);return a[3]*=t,new T.ColorMaterial({color:a,transparent:1!==t,cullFace:w.CullFaceOptions.Back,renderOccluded:A.RenderOccludedFlag.Transparent})},a._createClass(m,[{key:"orthogonalAvailable",set:function(t){this._arrowManipulatorInfos[1].manipulator.available=t,this._arrowManipulatorInfos[3].manipulator.available=t}},{key:"angle",get:function(){return this._angle},set:function(t){this._angle=t,this.dragging?this._updateAfterDrag=!0:this._updateManipulatorTransform()}},{key:"displayScale",get:function(){return this._scale},set:function(t){this._scale=t,this._updateManipulatorTransform()}},{key:"radius",get:function(){return this._radius},set:function(t){this._radius!==t&&(this._radius=t,this._updateManipulators())}},{key:"test",get:function(){return{arrowManipulators:this._arrowManipulatorInfos.map((({manipulator:t})=>t))}}}]),m}(m.Manipulation);t.MoveXYAxisManipulation=D,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
