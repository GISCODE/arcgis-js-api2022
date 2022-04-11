/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../geometry/support/aaBoundingBox","../../../../chunks/sphere","./featureExpressionInfoUtils","./graphicUtils","../../webgl-engine/lib/basicInterfaces","../../webgl-engine/lib/edgeRendering/interfaces"],(function(e,t,i,s,n,a,r,o,c,h,l){"use strict";let g=function(){function e(e,t,i,s,n,a,r,o=null){this.graphics3DSymbolLayer=e,this.stageObject=t,this._uniqueGeometries=i,this._uniqueMaterials=s,this._sharedResource=n,this.elevationAligner=a,this.elevationContext=r,this._edgeState=o,this.type="object3d",this._stageLayer=null,this._stage=null,this._visible=!1,this._addedToStage=!1,this.alignedSampledElevation=0,this.needsElevationUpdates=!1,this.useObjectOriginAsAttachmentOrigin=!1,this.graphics3DSymbolLayer=e,this.stageObject=t}var l=e.prototype;return l.initialize=function(e,t){this._stageLayer=t,this._stage=e,e.addMany(this._uniqueMaterials),e.addMany(this._uniqueGeometries),e.add(this.stageObject)},l.destroy=function(){const e=this._stage;this._stageLayer&&(e.removeMany(this._uniqueMaterials),e.removeMany(this._uniqueGeometries)),e.remove(this.stageObject),this._addedToStage&&(this._stageLayer.remove(this.stageObject),this._addedToStage=!1);const t=this._stage.renderView.ensureEdgeView();t.hasObject(this.stageObject)&&t.removeObject(this.stageObject),this.stageObject.dispose(),i.isSome(this._sharedResource)&&this._sharedResource.release(),this._visible=!1,this._stageLayer=null,this._stage=null},l.layerOpacityChanged=function(e,t){if(i.isNone(this._edgeState))return;const s=d(this._edgeState.baseMaterial);let n=!1;for(const i of this._edgeState.edgeMaterials)i.objectTransparency!==s&&(i.objectTransparency=s,n=!0);n&&this._resetEdgeObject(t);this._stage.renderView.ensureEdgeView().updateAllComponentOpacities(this.stageObject,[e])},l.slicePlaneEnabledChanged=function(e,t){if(i.isNone(this._edgeState))return;this._stage.renderView.ensureEdgeView().updateAllComponentMaterials(this.stageObject,this._edgeState.edgeMaterials,{slicePlaneEnabled:e},!t),this._edgeState.properties.slicePlaneEnabled=e},l.setVisibility=function(e){if(null!=this._stage&&this._visible!==e&&(this._visible=e,this._visible?this._addedToStage?this.stageObject.setVisible(!0):(this._stageLayer.add(this.stageObject),this._addedToStage=!0):this.stageObject.setVisible(!1),i.isSome(this._edgeState))){const t=this._stage.renderView.ensureEdgeView();t.hasObject(this.stageObject)?t.updateObjectVisibility(this.stageObject,e):e&&this._addOrUpdateEdgeObject(t,!1)}},l.alignWithElevation=function(e,t,s,n){null!=this.elevationAligner&&(i.isSome(s)&&o.setContextFeature(this.elevationContext.featureExpressionInfoContext,s),this.alignedSampledElevation=this.elevationAligner(this,this.elevationContext,e,t),this._resetEdgeObject(n))},l.getCenterObjectSpace=function(e=n.create()){return s.copy(e,r.getCenter(this.stageObject.boundingVolumeObjectSpace.bounds))},l.getBoundingBoxObjectSpace=function(e=a.create()){const t=this.stageObject.boundingVolumeObjectSpace;return a.setMin(e,t.min),a.setMax(e,t.max),e},l.computeAttachmentOrigin=function(e){if(this.useObjectOriginAsAttachmentOrigin){const t=this.stageObject.transformation;e.render.origin[0]+=t[12],e.render.origin[1]+=t[13],e.render.origin[2]+=t[14],e.render.num++}else for(const t of this.stageObject.geometryRecords)t.computeAttachmentOrigin(O)&&(s.transformMat4(O,O,this.stageObject.transformation),s.add(e.render.origin,e.render.origin,O),e.render.num++)},l.getProjectedBoundingBox=function(){var e=t._asyncToGenerator((function*(e,t,n,r,o){const h=this.getBoundingBoxObjectSpace(o),l=j,g=a.isPoint(h)?1:l.length;for(let i=0;i<g;i++){const e=l[i];b[0]=h[e[0]],b[1]=h[e[1]],b[2]=h[e[2]],s.transformMat4(b,b,this.stageObject.transformation),u[3*i+0]=b[0],u[3*i+1]=b[1],u[3*i+2]=b[2]}if(!e(u,0,g))return null;a.empty(h);let d=null;this.calculateRelativeScreenBounds&&(d=this.calculateRelativeScreenBounds());for(let i=0;i<3*g;i+=3){for(let e=0;e<3;e++)h[e]=Math.min(h[e],u[i+e]),h[e+3]=Math.max(h[e+3],u[i+e]);d&&n.push({location:u.slice(i,i+3),screenSpaceBoundingRect:d})}if(t&&t.service&&"absolute-height"!==this.elevationContext.mode){a.center(h,O);const e="relative-to-scene"===this.elevationContext.mode?"scene":"ground";let s=0;if(t.useViewElevation)s=i.unwrapOr(t.service.getElevation(O[0],O[1],e),0);else try{const n=c.demResolutionForBoundingBox(h,t);s=i.unwrapOr(yield t.service.queryElevation(O[0],O[1],r,n,e),0)}catch(p){}a.offset(h,0,0,-this.alignedSampledElevation+s)}return h}));function n(t,i,s,n,a){return e.apply(this,arguments)}return n}(),l.addObjectState=function(e,t){e===h.Object3DState.Highlight&&t.addObject(this.stageObject,this.stageObject.highlight()),e===h.Object3DState.MaskOccludee&&t.addObject(this.stageObject,this.stageObject.maskOccludee())},l.removeObjectState=function(e){e.removeObject(this.stageObject)},l._resetEdgeObject=function(e){if(i.isNone(this._edgeState))return;const t=this._stage.renderView.ensureEdgeView();this._visible?this._addOrUpdateEdgeObject(t,e):t.removeObject(this.stageObject)},l._addOrUpdateEdgeObject=function(e,t){const s=this._edgeState;if(i.isNone(s))return;const n=d(s.baseMaterial);for(const i of s.edgeMaterials)i.objectTransparency=n;e.addOrUpdateObject3D(this.stageObject,s.edgeMaterials,s.properties,!t).then((()=>{var e;return null==(e=this._stageLayer)?void 0:e.sync()}))},t._createClass(e,[{key:"isElevationSource",get:function(){return!(!this.stageObject.metadata||!this.stageObject.metadata.isElevationSource)}},{key:"visible",get:function(){return this._visible}}]),e}();function d(e){return e.isVisible?e.parameters.transparent?l.Transparency.TRANSPARENT:l.Transparency.OPAQUE:l.Transparency.INVISIBLE}const u=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],b=n.create(),O=n.create(),j=[[0,1,2],[3,1,2],[0,4,2],[3,4,2],[0,1,5],[3,1,5],[0,4,5],[3,4,5]];e.Graphics3DObject3DGraphicLayer=g,e.default=g,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
