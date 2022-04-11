/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../Color","../../../../core/maybe","../../../../core/screenUtils","../../../../symbols/callouts/calloutUtils","./ElevationAligners","./elevationAlignmentUtils","./ElevationContext","./Graphics3DObject3DGraphicLayer","./Graphics3DSymbolLayer","./graphicUtils","./pointUtils","./symbolComplexity","../../webgl-engine/lib/basicInterfaces","../../webgl-engine/lib/Geometry","../../webgl-engine/lib/Material","../../webgl-engine/lib/VertexAttribute","../../webgl-engine/materials/LineCalloutMaterial"],(function(e,t,i,n,a,r,o,l,s,c,u,d,p,m,h,f,y,v,b){"use strict";let g=function(e){function u(t,i){var n;return(n=e.call(this,t,null,i,_)||this)._elevationOptions={supportsOffsetAdjustment:!0,supportsOnTheGround:!1},n.ensureDrapedStatus(!1),n}t._inheritsLoose(u,e);var g=u.prototype;return g.doLoad=function(){var e=t._asyncToGenerator((function*(){this._material=new b.LineCalloutMaterial(this.materialParameters),this._context.stage.add(this._material)}));function i(){return e.apply(this,arguments)}return i}(),g.destroy=function(){e.prototype.destroy.call(this),this._context.stage.remove(this._material),this._material=null},g._perInstanceMaterialParameters=function(e){const t=this.materialParameters;return t.screenOffset=e.screenOffset||[0,0],t.centerOffsetUnits=e.centerOffsetUnits||"world",t},g._defaultElevationInfoNoZ=function(){return O},g.createGraphics3DGraphic=function(e){const t=e.renderingInfo,i=e.graphic,a=this.setGraphicElevationContext(i,new s.ElevationContext,t.elevationOffset||0),o=t.symbol,l="on-the-ground"===this._elevationContext.mode&&("cim"===o.type||!o.symbolLayers.some((e=>"object"===e.type||"text"===e.type)));if("label-3d"!==o.type&&l)return null;if("point-3d"===o.type&&o.symbolLayers.every((e=>"text"===e.type&&!r.textSymbolLayerSupportsVerticalOffset(e))))return null;const c=d.computeCentroid(i.geometry);return n.isNone(c)?null:this._createAs3DShape(c,a,t,i.uid)},g.layerOpacityChanged=function(){return n.isNone(this._material)||this._material.setParameters(this.materialParameters),!0},g.layerElevationInfoChanged=function(e,t,i){const a=this._elevationContext.mode,r=l.elevationModeChangeUpdateType(u.elevationModeChangeTypes,i,a);return r!==l.SymbolUpdateType.UPDATE||e.forEach((e=>{const i=t(e);n.isSome(i)&&this.updateGraphicElevationContext(e.graphic,i)})),r},g.slicePlaneEnabledChanged=function(){return n.isNone(this._material)||this._material.setParameters({slicePlaneEnabled:this._context.slicePlaneEnabled}),!0},g.physicalBasedRenderingChanged=function(){return!0},g.pixelRatioChanged=function(){return!0},g.setGraphicElevationContext=function(t,i,n=0){const a=e.prototype.setGraphicElevationContext.call(this,t,i);return a.addOffsetRenderUnits(n),a},g.updateGraphicElevationContext=function(e,t){this.setGraphicElevationContext(e,t.elevationContext,t.metadata.elevationOffset),t.needsElevationUpdates=l.needsElevationUpdates2D(t.elevationContext.mode)},g.computeComplexity=function(){return{primitivesPerFeature:2,primitivesPerCoordinate:0,drawCallsPerFeature:0,estimated:!1,memory:m.emptySymbolComplexity.memory}},g._createVertexData=function(e){const{translation:t,centerOffset:i}=e,n=t?{size:3,data:[t[0],t[1],t[2]],exclusive:!0}:{size:3,data:[0,0,0],exclusive:!0},a=i?{size:4,data:[i[0],i[1],i[2],i[3]],exclusive:!0}:{size:4,data:[0,0,0,1],exclusive:!0};return[[v.VertexAttribute.POSITION,n],[v.VertexAttribute.NORMAL,{size:3,data:[0,0,1],exclusive:!0}],[v.VertexAttribute.AUXPOS1,a]]},g._getOrCreateMaterial=function(e){const t=this._perInstanceMaterialParameters(e),i=b.LineCalloutMaterial.uniqueMaterialIdentifier(t);if(n.isSome(this._material)&&i===this._material.uniqueMaterialIdentifier)return{material:this._material,isUnique:!1};if(e.materialCollection){let a=e.materialCollection.get(i);return n.isNone(a)&&(a=new b.LineCalloutMaterial(t),e.materialCollection.add(i,a)),{material:a,isUnique:!1}}return{material:new b.LineCalloutMaterial(t),isUnique:!0}},g._createAs3DShape=function(e,t,i,n){const a=[new f.Geometry(this._createVertexData(i),C,h.PrimitiveType.Point)],r=this._getOrCreateMaterial(i),s=p.createStageObjectForHUD(this._context,e,a,[r.material],t,this._context.layer.uid,n);if(null===s)return null;const u=new c.Graphics3DObject3DGraphicLayer(this,s.object,a,r.isUnique?[r.material]:null,null,o.perObjectElevationAligner,t);return u.metadata={elevationOffset:i.elevationOffset||0},u.alignedSampledElevation=s.sampledElevation,u.needsElevationUpdates=l.needsElevationUpdates2D(t.mode),p.extendPointGraphicElevationContext(u,e,this._context.elevationProvider),u},t._createClass(u,[{key:"materialParameters",get:function(){const e=this.symbol,t=e.callout,r=n.isSome(t.color)?i.toUnitRGBA(t.color):[0,0,0,0];r[3]*=this._getLayerOpacity();const o=a.pt2px(t.size||0);let l=null;if(e.verticalOffset){const{screenLength:t,minWorldLength:i,maxWorldLength:n}=e.verticalOffset;l={screenLength:a.pt2px(t),minWorldLength:i||0,maxWorldLength:null!=n?n:1/0}}const s=n.isSome(t.border)&&n.isSome(t.border.color)?i.toUnitRGBA(t.border.color):null,c="object"===e.symbolLayers.getItemAt(0).type,u=!c,d=c?0:void 0,p="label-3d"===e.type;return{color:r,size:o,verticalOffset:l,screenSizePerspective:this._context.screenSizePerspectiveEnabled?this._context.sharedResources.screenSizePerspectiveSettings:null,screenOffset:[0,0],centerOffsetUnits:"world",borderColor:s,occlusionTest:u,shaderPolygonOffset:d,depthHUDAlignStart:p,slicePlaneEnabled:this._context.slicePlaneEnabled,renderOccluded:y.DefaultMaterialParameters.renderOccluded}}}]),u}(u.Graphics3DSymbolLayer);g.elevationModeChangeTypes={definedChanged:l.SymbolUpdateType.UPDATE,staysOnTheGround:l.SymbolUpdateType.UPDATE,onTheGroundChanged:l.SymbolUpdateType.RECREATE};const x=new Uint16Array([0]),C=[[v.VertexAttribute.POSITION,x],[v.VertexAttribute.NORMAL,x],[v.VertexAttribute.AUXPOS1,x]],O={mode:"relative-to-ground",offset:0},_={ignoreDrivers:!0,renderPriority:0,renderPriorityStep:1};e.Graphics3DLineCalloutSymbolLayer=g,e.default=g,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
