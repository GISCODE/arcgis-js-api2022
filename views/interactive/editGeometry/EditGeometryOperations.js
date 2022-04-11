/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/Evented","../../../core/maybe","./EditGeometry","./interfaces","./operations/AppendVertex","./operations/UpdateVertices","./operations/RemoveVertices","./operations/SplitEdge","./operations/SetVertexPosition","./operations/CloseComponent","./operations/MoveVertex","./operations/OffsetEdgeVertex","./operations/RotateVertex","./operations/ScaleVertex","./operations/UndoGroup"],(function(e,t,n,r,o,i,a,s,u,c,p,d,l,h,m,V,f){"use strict";let S=function(e){function n(t){var n;return(n=e.call(this)||this).data=t,n.undoStack=[],n.redoStack=[],n.listener=n.data.on("change",(e=>{e.addedVertices&&n.emit("vertex-add",{type:"vertex-add",vertices:e.addedVertices,operation:e.operation}),e.removedVertices&&n.emit("vertex-remove",{type:"vertex-remove",vertices:e.removedVertices,operation:e.operation}),e.updatedVertices&&n.emit("vertex-update",{type:"vertex-update",vertices:e.updatedVertices,operation:e.operation})})),n}t._inheritsLoose(n,e);var S=n.prototype;return S.destroy=function(){this.listener.remove()},S.splitEdge=function(e,t){return this._apply(new c.SplitEdge(this.data,e,t))},S.updateVertices=function(e,t,n=i.AccumulationBehaviour.ACCUMULATE_STEPS){return this._apply(new s.UpdateVertices(this.data,e,t),n)},S.moveVertices=function(e,t,n,r,o=i.AccumulationBehaviour.ACCUMULATE_STEPS){return this.updateVertices(e,new l.MoveVertex(this.data.coordinateHelper,t,n,r),o)},S.scaleVertices=function(e,t,n,r,o,a=i.AccumulationBehaviour.ACCUMULATE_STEPS,u=s.AccumulationType.CUMULATIVE){return this.updateVertices(e,new V.ScaleVertex(t,n,r,o,u),a)},S.rotateVertices=function(e,t,n,r=i.AccumulationBehaviour.ACCUMULATE_STEPS,o=s.AccumulationType.CUMULATIVE){return this.updateVertices(e,new m.RotateVertex(t,n,o),r)},S.removeVertices=function(e){return this._apply(new u.RemoveVertices(this.data,e,this._minNumVerticesPerType))},S.appendVertex=function(e){return 0===this.data.components.length?null:this._apply(new a.AppendVertex(this.data,this.data.components[0],e))},S.setVertexPosition=function(e,t){return this._apply(new p.SetVertexPosition(this.data,e,t))},S.offsetEdge=function(e,t,n,r=i.AccumulationBehaviour.ACCUMULATE_STEPS){return this.updateVertices([t.leftVertex,t.rightVertex],new h.OffsetEdgeVertex(this.data.coordinateHelper,e,t,n),r)},S.closeComponent=function(e){return this.data.components.includes(e)?this._apply(new d.CloseComponent(this.data,e)):null},S.canRemoveVertex=function(){return this.data.components[0].vertices.length>this._minNumVerticesPerType},S.createUndoGroup=function(){const e=new f.UndoGroup;return this._apply(e),{remove:()=>e.close()}},S.undo=function(){if(this.undoStack.length>0){const e=this.undoStack.pop();return e.undo(),this.redoStack.push(e),e}return null},S.redo=function(){if(this.redoStack.length>0){const e=this.redoStack.pop();return e.apply(),this.undoStack.push(e),e}return null},S._apply=function(e,t=i.AccumulationBehaviour.ACCUMULATE_STEPS){return t!==i.AccumulationBehaviour.NEW_STEP&&!r.isNone(this.lastOperation)&&this.lastOperation.accumulate(e)||(e.apply(),this.undoStack.push(e),this.redoStack=[]),e},n.fromGeometry=function(e,t){return new n(o.EditGeometry.fromGeometry(e,t))},t._createClass(n,[{key:"canUndo",get:function(){return this.undoStack.length>0}},{key:"canRedo",get:function(){return this.redoStack.length>0}},{key:"lastOperation",get:function(){return this.undoStack.length>0?this.undoStack[this.undoStack.length-1]:null}},{key:"_minNumVerticesPerType",get:function(){switch(this.data.type){case"point":return 1;case"polyline":return 2;case"polygon":return 3;default:return 0}}}]),n}(n);e.EditGeometryOperations=S,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
