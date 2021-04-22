/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../../../core/accessorSupport/trackingUtils","../../../core/Handles","./constants","./HoveredPoints","./InputRepresentation3D","./ProfileLines3D"],(function(e,t,i,n,o,s,r,a){"use strict";let p=function(){function e(e,o){this._handles=new n,this._inputRepresentation=new r.InputRepresentation3D({view:e}),this._hoveredPoints=new s.HoveredPoints({view:e}),this._profileLines=new a.ProfileLines3D({view:e}),this._handles.add([i.reactionInit((()=>o.viewModel.hoveredPoints),(e=>this._hoveredPoints.update(e))),i.reactionInit((()=>{const e=o.viewModel.input;return t.applySome(e,(e=>{e.commitProperty("geometry"),e.commitProperty("layer")})),{input:e,state:o.state,editable:o.editable}}),(e=>this._updateInputRepresentation(e))),i.reactionInit((()=>o.viewModel.chartData),(e=>this._profileLines.update(e))),i.reactionInit((()=>t.applySome(o.viewModel.input,(e=>e.geometry))),(()=>{this._profileLines.remove()}))])}var p=e.prototype;return p.destroy=function(){this._handles=t.destroyMaybe(this._handles),this._inputRepresentation=t.destroyMaybe(this._inputRepresentation),this._hoveredPoints=t.destroyMaybe(this._hoveredPoints),this._profileLines=t.destroyMaybe(this._profileLines)},p._updateInputRepresentation=function({input:e,state:t,editable:i}){t===o.ElevationProfileState.Selected?this._inputRepresentation.showHighlight(e):t!==o.ElevationProfileState.Created||i?this._inputRepresentation.remove():this._inputRepresentation.showReshaping(e)},e}();e.ElevationProfileView3D=p,Object.defineProperty(e,"__esModule",{value:!0})}));