/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/Evented","../../../../../core/Handles","../../../../../core/maybe","../../../../../core/watchUtils","../../../../../core/accessorSupport/decorators/property","../../../../../core/arrayUtils","../../../../../core/has","../../../../../core/accessorSupport/ensureType","../../../../../core/accessorSupport/decorators/subclass","../isSupportedGraphicUtils","./isSupportedGraphic","./ReshapeOperation","../../../../interactive/InteractiveToolBase"],(function(e,t,o,r,a,n,i,p,s,h,l,c,d,u,y,_){"use strict";e.GraphicReshapeTool=function(e){function o(t){var o;return(o=e.call(this,t)||this)._handles=new a,o._reshapeOperation=null,o._internalGeometryUpdate=!1,o.enableZShape=!0,o.enableZVertex=!0,o.enableMoveGraphic=!0,o.enableMidpoints=!0,o.enableEdgeOffset=!1,o.type="reshape-3d",o.snappingManager=null,o.automaticManipulatorSelection=!1,o}t._inheritsLoose(o,e);var r=o.prototype;return r.destroy=function(){this._handles=n.destroyMaybe(this._handles),this._reshapeOperation=n.destroyMaybe(this._reshapeOperation),this._set("view",null),this._set("graphic",null)},r._updateGeometry=function(){const e=u.geometryOfSupportedGraphic(this.graphic);this._reshapeOperation.inputGeometry=n.isSome(e)?e.clone():null},r._updateGraphic=function(){if(this._handles.remove("onGraphicGeometryChange"),this._updateGeometry(),u.isSupportedGraphic(this.graphic)!==d.SupportedGraphicResult.SUPPORTED)return;const e=this.watch("graphic.geometry",(()=>{!1===this._internalGeometryUpdate&&this._updateGeometry()}),!0);this._handles.add(e,"onGraphicGeometryChange")},r.manipulatorSelectionChanged=function(){this._reshapeOperation&&this._reshapeOperation.manipulatorSelectionChanged()},r._updateGeometryInternally=function(e){this._internalGeometryUpdate=!0,this.graphic.geometry=e,this._internalGeometryUpdate=!1},r._onReshapeGeometryChanged=function(){n.isNone(this.graphic)||this._updateGeometryInternally(this._reshapeOperation.outputGeometry.clone())},r.initialize=function(){this._reshapeOperation=new y.ReshapeOperation({tool:this}),this._handles.add([this._reshapeOperation.on("reshape",(e=>{"reshape"===e.type&&this._onReshapeGeometryChanged(),this.emit("reshape",e)})),this._reshapeOperation.on("move",(e=>{"move"===e.type&&this._onReshapeGeometryChanged(),this.emit("move",e)})),this._reshapeOperation.on("vertex-add",(e=>{this._onReshapeGeometryChanged(),this.emit("vertex-add",e)})),this._reshapeOperation.on("vertex-remove",(e=>{this._onReshapeGeometryChanged(),this.emit("vertex-remove",e)})),this._reshapeOperation.on("immediate-click",(e=>this.emit("immediate-click",e))),this.view.on("pointer-down",["Shift"],(e=>{e.stopPropagation()})),i.init(this,"graphic",(()=>{this._updateGraphic()}),!0)]),this.finishToolCreation()},r.undo=function(){n.isSome(this.snappingManager)&&this.snappingManager.doneSnapping(),n.isSome(this._reshapeOperation.undo())&&this._updateGeometryInternally(this._reshapeOperation.outputGeometry.clone())},r.redo=function(){n.isSome(this.snappingManager)&&this.snappingManager.doneSnapping(),n.isSome(this._reshapeOperation.redo())&&this._updateGeometryInternally(this._reshapeOperation.outputGeometry.clone())},r.onInputEvent=function(e){"key-down"!==e.type||"Delete"!==e.key&&"Backspace"!==e.key||this._reshapeOperation.removeSelectedVertices()},r.reset=function(){},t._createClass(o,[{key:"updating",get:function(){var e,t;return null!=(e=null==(t=this._reshapeOperation)?void 0:t.updating)&&e}},{key:"canUndo",get:function(){var e,t;return null!=(e=null==(t=this._reshapeOperation)?void 0:t.canUndo)&&e}},{key:"canRedo",get:function(){var e,t;return null!=(e=null==(t=this._reshapeOperation)?void 0:t.canRedo)&&e}},{key:"test",get:function(){return{snappingManager:this.snappingManager}}}]),o}(r.EventedMixin(_.InteractiveToolBase)),o.__decorate([p.property()],e.GraphicReshapeTool.prototype,"_reshapeOperation",void 0),o.__decorate([p.property({constructOnly:!0,nonNullable:!0})],e.GraphicReshapeTool.prototype,"view",void 0),o.__decorate([p.property({constructOnly:!0})],e.GraphicReshapeTool.prototype,"graphic",void 0),o.__decorate([p.property({constructOnly:!0,nonNullable:!0})],e.GraphicReshapeTool.prototype,"enableZShape",void 0),o.__decorate([p.property({constructOnly:!0,nonNullable:!0})],e.GraphicReshapeTool.prototype,"enableZVertex",void 0),o.__decorate([p.property({constructOnly:!0,nonNullable:!0})],e.GraphicReshapeTool.prototype,"enableMoveGraphic",void 0),o.__decorate([p.property({constructOnly:!0,nonNullable:!0})],e.GraphicReshapeTool.prototype,"enableMidpoints",void 0),o.__decorate([p.property({constructOnly:!0,nonNullable:!0})],e.GraphicReshapeTool.prototype,"enableEdgeOffset",void 0),o.__decorate([p.property({readOnly:!0})],e.GraphicReshapeTool.prototype,"type",void 0),o.__decorate([p.property({constructOnly:!0})],e.GraphicReshapeTool.prototype,"snappingManager",void 0),o.__decorate([p.property({readOnly:!0})],e.GraphicReshapeTool.prototype,"updating",null),o.__decorate([p.property()],e.GraphicReshapeTool.prototype,"automaticManipulatorSelection",void 0),e.GraphicReshapeTool=o.__decorate([c.subclass("esri.views.3d.interactive.editingTools.graphicReshape3D.GraphicReshapeTool")],e.GraphicReshapeTool),Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));