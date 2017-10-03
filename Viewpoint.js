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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["./core/JSONSupport","./Camera","./core/lang","./geometry/support/typeUtils","./geometry/support/jsonUtils"],function(e,t,r,a,o){var n=e.createSubclass({declaredClass:"esri.Viewpoint",properties:{rotation:{value:0,cast:function(e){return e%=360,0>e&&(e+=360),e}},scale:0,targetGeometry:{value:null,types:a.types,json:{read:function(e){return o.fromJSON(e)}}},camera:{value:null,type:t}},toJSON:function(){var e={scale:this.scale,rotation:this.rotation,targetGeometry:this.targetGeometry?this.targetGeometry.toJSON():void 0,camera:this.camera?this.camera.toJSON():void 0};return e.camera&&delete e.camera.fov,r.fixJson(e)},clone:function(){return new n({rotation:this.rotation,scale:this.scale,targetGeometry:this.targetGeometry?this.targetGeometry.clone():null,camera:this.camera?this.camera.clone():null})}});return n});