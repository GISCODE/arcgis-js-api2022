/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/Evented","../../../../../core/HandleOwner","../../../../../core/handleUtils","../../../../../core/maybe","../../../../../core/accessorSupport/decorators/property","../../../../../core/arrayUtils","../../../../../core/has","../../../../../core/accessorSupport/ensureType","../../../../../core/accessorSupport/decorators/subclass","../../../../../geometry/Point","../../../../../support/elevationInfoUtils","../../../../ViewingMode","../../Manipulator3D","../../manipulatorUtils","../../SnappingVisualizer3D","../manipulatorUtils","../visualElementUtils","../manipulations/config","../manipulations/MoveManipulation","./GraphicScaleRotateTransform","./ScaleRotateMeshAdapter","./ScaleRotateObjectSymbol3DAdapter","./undoRecords","../../../layers/graphics/GraphicState","../../../../interactive/InteractiveToolBase","../../../../interactive/editGeometry/EditGeometryOperations","../../../../interactive/snapping/SnappingContext","../../../../interactive/snapping/SnappingDragPipelineStep"],(function(e,t,a,i,n,o,r,s,l,c,p,h,u,d,g,v,m,y,M,f,S,_,R,b,T,w,G,A,E,x,O){"use strict";e.GraphicTransformTool=function(e){function a(t){var a;return(a=e.call(this,t)||this).enableZ=!0,a.enableRotation=!0,a.enableScaling=!0,a.type="transform-3d",a.scaleRotate=null,a.snappingPipeline=new O.SnappingPipeline,a}t._inheritsLoose(a,e);var i=a.prototype;return i.initialize=function(){this.graphicState=new G.GraphicState({graphic:this.graphic}),this.moveManipulation=new _.MoveManipulation({tool:this,view:this.view,snapToScene:this.snapToScene,xyAvailable:!0,xyAxisAvailable:!0,zAvailable:this.enableZ&&M.canMoveZ(this.graphic),radius:_.MoveManipulation.radiusForSymbol(this.graphic.symbol)}),this.moveManipulation.forEachManipulator((e=>this.handles.add(e.events.on("immediate-click",(e=>{this.emit("immediate-click",{...e,graphic:this.graphicState.graphic}),e.stopPropagation()}))))),this.moveManipulation.elevationInfo=d.getGraphicEffectiveElevationInfo(this.graphic);const e=this.graphic.geometry;if(this.moveManipulation.createGraphicDragPipeline(((t,a,i,n,o)=>(r.isSome(e)&&t===_.ManipulationType.XY&&(i=i.next(this.snappingPipeline.createSnapDragEventPipelineStep({snappingContext:new x.SnappingContext({elevationInfo:d.getGraphicEffectiveElevationInfo(this.graphic),pointer:o,editGeometryOperations:E.EditGeometryOperations.fromGeometry(new u({spatialReference:e.spatialReference}),this.view.state.viewingMode),visualizer:new y.SnappingVisualizer3D,excludeFeature:this.graphic}),snappingManager:this.snappingManager,updatingHandles:this.updatingHandles,cancel:n}),this.snappingPipeline.next)),i)),this.graphicState,(e=>{const{action:t,graphic:a,dxScreen:i,dyScreen:n}=e,o={graphic:a,dxScreen:i,dyScreen:n};switch(t){case"start":this.emit("graphic-translate-start",o),this.emit("record-undo",{record:this._createGeometryUndoRecord()});break;case"update":this.emit("graphic-translate",o);break;case"end":this.emit("graphic-translate-stop",o)}})),this.moveManipulation.angle=r.isSome(this.scaleRotate)?this.scaleRotate.angle:0,this.scaleRotateAdapter=this._createScaleRotateAdapter(),this.handles.add(this.scaleRotateAdapter.watch("angle",(()=>this._updateMoveAngle()))),this.enableScaling||this.enableRotation){const e=this.enableScaling&&this.enableRotation?null:this.enableScaling?"scale":"rotate";this.scaleRotate=new R.GraphicScaleRotateTransform({tool:this,mode:e,adapter:this.scaleRotateAdapter}),this.handles.add(this.scaleRotate.events.on("scale-changed",(()=>this._onScaleChanged())))}this.handles.add([f.createVisualElements({view:this.view,graphic:this.graphic,forEachManipulator:e=>this._forEachManipulator(e),onManipulatorsChanged:()=>o.makeHandle()}),this.graphicState.on("changed",(()=>this._onGeometryChanged())),this._hideManipulatorsForGraphicState(),this.view.watch("scale",(()=>this._updateMoveAngle()))]),this.handles.add(this.view.trackGraphicState(this.graphicState)),this._onGeometryChanged(),this._updateMoveAngle(),this._forEachManipulator((e=>{e instanceof v.Manipulator3D&&this.handles.add(e.events.on("grab-changed",(()=>this._updateManipulatorsInteractive())))})),this.finishToolCreation()},i._updateManipulatorsInteractive=function(){r.isNone(this.scaleRotate)||(this.scaleRotate.interactive=!this.moveManipulation.grabbing,this.moveManipulation.interactive=!this.scaleRotate.grabbing)},i._createScaleRotateAdapter=function(){return r.isSome(this.graphic.geometry)&&"mesh"===this.graphic.geometry.type?new b.ScaleRotateMeshAdapter({graphic:this.graphic,geometry:this.graphic.geometry,viewingMode:this.view.state.viewingMode}):new T.ScaleRotateObjectSymbol3DAdapter({graphic:this.graphic,sizeFilter:e=>this._enforceNonZeroSize(e),findLayerView:()=>this.view.allLayerViews.find((e=>e.layer===this.graphic.layer))})},i._forEachManipulator=function(e){this.moveManipulation.forEachManipulator(e),r.isSome(this.scaleRotate)&&this.scaleRotate.forEachManipulator(e)},i._hideManipulatorsForGraphicState=function(){return this.graphicState.watch("displaying",(e=>{this._forEachManipulator((t=>t.available=e)),this.moveManipulation.zManipulation.available=e&&this.enableZ&&M.canMoveZ(this.graphic)}))},i._createGeometryUndoRecord=function(){return w.createGraphicGeometryUndoRecord(this.graphic)},i.destroy=function(){this.moveManipulation.destroy(),this.scaleRotate=r.destroyMaybe(this.scaleRotate),this.scaleRotateAdapter=r.destroyMaybe(this.scaleRotateAdapter),this._set("view",null),this._set("graphic",null)},i.reset=function(){},i.onHide=function(){r.isSome(this.scaleRotate)&&this.scaleRotate.cancelActiveAnimation()},i._onScaleChanged=function(){if(r.isNone(this.scaleRotate))return;const e=this.scaleRotate.getScale();this.moveManipulation.displayScale=e},i._updateMoveAngle=function(){this.view.state.viewingMode===g.ViewingMode.Local||this.view.scale<S.ALIGN_ARROWS_SCALE_THRESHOLD?this.moveManipulation.angle=this.scaleRotateAdapter.angle:this.moveManipulation.angle=0},i._onGeometryChanged=function(){m.placeAtGraphic(this.view,this,this.graphic)},i._enforceNonZeroSize=function(e){return e||this.view.state.camera.computeRenderPixelSizeAt(this.moveManipulation.renderLocation)},t._createClass(a,[{key:"snapToScene",set:function(e){this.moveManipulation&&(this.moveManipulation.snapToScene=e),this._set("snapToScene",e)}},{key:"updating",get:function(){return this.updatingHandles.updating}},{key:"location",set:function(e){this.moveManipulation.location=e,r.isSome(this.scaleRotate)&&(this.scaleRotate.location=e)}},{key:"elevationAlignedLocation",set:function(e){this.moveManipulation.elevationAlignedLocation=e,r.isSome(this.scaleRotate)&&(this.scaleRotate.elevationAlignedLocation=e)}},{key:"test",get:function(){return{discManipulator:this.moveManipulation.xyManipulation.test.discManipulator,zManipulator:this.moveManipulation.zManipulation.test.manipulator,ringManipulator:r.isSome(this.scaleRotate)?this.scaleRotate.test.ringManipulator:null,arrowManipulators:this.moveManipulation.xyAxisManipulation.test.arrowManipulators}}}]),a}(n.HandleOwnerMixin(i.EventedMixin(A.InteractiveToolBase))),a.__decorate([s.property({constructOnly:!0,nonNullable:!0})],e.GraphicTransformTool.prototype,"view",void 0),a.__decorate([s.property({constructOnly:!0,nonNullable:!0})],e.GraphicTransformTool.prototype,"graphic",void 0),a.__decorate([s.property({constructOnly:!0,nonNullable:!0})],e.GraphicTransformTool.prototype,"enableZ",void 0),a.__decorate([s.property()],e.GraphicTransformTool.prototype,"enableRotation",void 0),a.__decorate([s.property()],e.GraphicTransformTool.prototype,"enableScaling",void 0),a.__decorate([s.property({value:!1})],e.GraphicTransformTool.prototype,"snapToScene",null),a.__decorate([s.property({constructOnly:!0})],e.GraphicTransformTool.prototype,"snappingManager",void 0),a.__decorate([s.property({readOnly:!0})],e.GraphicTransformTool.prototype,"type",void 0),a.__decorate([s.property({readOnly:!0})],e.GraphicTransformTool.prototype,"updating",null),e.GraphicTransformTool=a.__decorate([h.subclass("esri.views.3d.interactive.editingTools.graphicTransform3D.GraphicTransformTool")],e.GraphicTransformTool),Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));