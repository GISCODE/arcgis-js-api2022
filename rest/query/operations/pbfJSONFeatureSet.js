/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../core/compilerUtils","../../../core/maybe","../../../geometry/support/zscale","../../../layers/graphics/featureConversionUtils"],(function(e,t,r,n,o){"use strict";function i(e,t){return t}function s(e,t,r,n){switch(r){case 0:return c(e,t+n,0);case 1:return"lowerLeft"===e.originPosition?c(e,t+n,1):d(e,t+n,1)}}function a(e,t,r,n){return 2===r?c(e,t,2):s(e,t,r,n)}function u(e,t,r,n){return 2===r?c(e,t,3):s(e,t,r,n)}function h(e,t,r,n){return 3===r?c(e,t,3):a(e,t,r,n)}function c({translate:e,scale:t},r,n){return e[n]+r*t[n]}function d({translate:e,scale:t},r,n){return e[n]-r*t[n]}let f=function(){function e(e){this.options=e,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=i,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this._attributesConstructor=function(){}}var c=e.prototype;return c.createFeatureResult=function(){return{fields:[],features:[]}},c.finishFeatureResult=function(e){if(this.options.applyTransform&&(e.transform=null),this._attributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,!e.hasZ)return;const t=n.getGeometryZScaler(e.geometryType,this.options.sourceSpatialReference,e.spatialReference);if(!r.isNone(t))for(const r of e.features)t(r.geometry)},c.createSpatialReference=function(){return{}},c.addField=function(e,t){e.fields.push(t);const r=e.fields.map((e=>e.name));this._attributesConstructor=function(){for(const e of r)this[e]=null}},c.addFeature=function(e,t){e.features.push(t)},c.prepareFeatures=function(e){switch(this.transform=e.transform,this.options.applyTransform&&e.transform&&(this.applyTransform=this._deriveApplyTransform(e)),this.vertexDimension=2,e.hasZ&&this.vertexDimension++,e.hasM&&this.vertexDimension++,e.geometryType){case"esriGeometryPoint":this.addCoordinate=(e,t,r)=>this.addCoordinatePoint(e,t,r),this.createGeometry=e=>this.createPointGeometry(e);break;case"esriGeometryPolygon":this.addCoordinate=(e,t,r)=>this._addCoordinatePolygon(e,t,r),this.createGeometry=e=>this._createPolygonGeometry(e);break;case"esriGeometryPolyline":this.addCoordinate=(e,t,r)=>this._addCoordinatePolyline(e,t,r),this.createGeometry=e=>this._createPolylineGeometry(e);break;case"esriGeometryMultipoint":this.addCoordinate=(e,t,r)=>this._addCoordinateMultipoint(e,t,r),this.createGeometry=e=>this._createMultipointGeometry(e);break;default:t.neverReached(e.geometryType)}},c.createFeature=function(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,{attributes:new this._attributesConstructor}},c.allocateCoordinates=function(){},c.addLength=function(e,t,r){0===this.lengths.length&&(this.toAddInCurrentPath=t),this.lengths.push(t)},c.addQueryGeometry=function(e,t){const{queryGeometry:r,queryGeometryType:n}=t,i=o.unquantizeOptimizedGeometry(r.clone(),r,!1,!1,this.transform),s=o.convertToGeometry(i,n,!1,!1);e.queryGeometryType=n,e.queryGeometry={...s}},c.createPointGeometry=function(e){const t={x:0,y:0,spatialReference:e.spatialReference};return e.hasZ&&(t.z=0),e.hasM&&(t.m=0),t},c.addCoordinatePoint=function(e,t,r){switch(t=this.applyTransform(this.transform,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:"z"in e?e.z=t:e.m=t;break;case 3:e.m=t}},c._transformPathLikeValue=function(e,t){let r=0;return t<=1&&(r=this.previousCoordinate[t],this.previousCoordinate[t]+=e),this.applyTransform(this.transform,e,t,r)},c._addCoordinatePolyline=function(e,t,r){this._dehydratedAddPointsCoordinate(e.paths,t,r)},c._addCoordinatePolygon=function(e,t,r){this._dehydratedAddPointsCoordinate(e.rings,t,r)},c._addCoordinateMultipoint=function(e,t,r){0===r&&e.points.push([]);const n=this._transformPathLikeValue(t,r);e.points[e.points.length-1].push(n)},c._createPolygonGeometry=function(e){return{rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}},c._createPolylineGeometry=function(e){return{paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}},c._createMultipointGeometry=function(e){return{points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}},c._dehydratedAddPointsCoordinate=function(e,t,r){0===r&&0==this.toAddInCurrentPath--&&(e.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const n=this._transformPathLikeValue(t,r),o=e[e.length-1];0===r&&(this.coordinateBufferPtr=0,this.coordinateBuffer=new Array(this.vertexDimension),o.push(this.coordinateBuffer)),this.coordinateBuffer[this.coordinateBufferPtr++]=n},c._deriveApplyTransform=function(e){const{hasZ:t,hasM:r}=e;return t&&r?h:t?a:r?u:s},e}();e.JSONFeatureSetParserContext=f,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
