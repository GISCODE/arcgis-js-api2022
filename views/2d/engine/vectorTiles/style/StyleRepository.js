/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["./StyleDefinition","./StyleLayer"],(function(e,t){"use strict";return function(){function r(t){if(this._style=t,this.backgroundBucketIds=[],this._uidToLayer=new Map,this._layerByName={},this._runningId=0,t.layers||(t.layers=[]),this.version=parseFloat(t.version),this.layers=t.layers.map(((e,t,r)=>this._create(e,t,r))),this.layers){let t;for(let r=0;r<this.layers.length;r++)t=this.layers[r],this._layerByName[t.id]=t,this._uidToLayer.set(t.uid,t),t.type===e.StyleLayerType.BACKGROUND&&this.backgroundBucketIds.push(t.id)}this._identifyRefLayers()}var i=r.prototype;return i.isPainterDataDriven=function(e){const t=this._layerByName[e];return!!t&&t.isPainterDataDriven()},i.getStyleLayerId=function(e){return e>=this.layers.length?null:this.layers[e].id},i.getStyleLayerByUID=function(e){const t=this._uidToLayer.get(e);return null!=t?t:null},i.getStyleLayerIndex=function(e){const t=this._layerByName[e];return t?this.layers.indexOf(t):-1},i.setStyleLayer=function(e,t){if(!e||!e.id)return;const i=this._style;null!=t&&t>=this.layers.length&&(t=this.layers.length-1);let y,a=!0;const s=this._layerByName[e.id];if(s){const l=this.layers.indexOf(s);t||(t=l),t===l?(a=!1,y=r._recreateLayer(e,s),this.layers[t]=y,i.layers[t]=e):(this.layers.splice(l,1),i.layers.splice(l,1),y=this._create(e,t,this.layers),this.layers.splice(t,0,y),i.layers.splice(t,0,e))}else y=this._create(e,t,this.layers),!t||t>=this.layers.length?(this.layers.push(y),i.layers.push(e)):(this.layers.splice(t,0,y),i.layers.splice(t,0,e));this._layerByName[e.id]=y,this._uidToLayer.set(y.uid,y),a&&this._recomputeZValues(),this._identifyRefLayers()},i.getStyleLayer=function(e){const t=this._layerByName[e];return t?{type:t.typeName,id:t.id,source:t.source,"source-layer":t.sourceLayer,minzoom:t.minzoom,maxzoom:t.maxzoom,filter:t.filter,layout:t.layout,paint:t.paint}:null},i.deleteStyleLayer=function(e){const t=this._layerByName[e];if(t){delete this._layerByName[e],this._uidToLayer.delete(t.uid);const r=this.layers.indexOf(t);this.layers.splice(r,1),this._style.layers.splice(r,1),this._recomputeZValues(),this._identifyRefLayers()}},i.getLayerById=function(e){return this._layerByName[e]},i.getLayoutProperties=function(e){const t=this._layerByName[e];return t?t.layout:null},i.getPaintProperties=function(e){const t=this._layerByName[e];return t?t.paint:null},i.setPaintProperties=function(e,t){const i=this._layerByName[e];if(!i)return;const y={type:i.typeName,id:i.id,source:i.source,"source-layer":i.sourceLayer,minzoom:i.minzoom,maxzoom:i.maxzoom,filter:i.filter,layout:i.layout,paint:t},a=r._recreateLayer(y,i),s=this.layers.indexOf(i);this.layers[s]=a,this._style.layers[s].paint=t,this._layerByName[i.id]=a,this._uidToLayer.set(i.uid,a)},i.setLayoutProperties=function(e,t){const i=this._layerByName[e];if(!i)return;const y={type:i.typeName,id:i.id,source:i.source,"source-layer":i.sourceLayer,minzoom:i.minzoom,maxzoom:i.maxzoom,filter:i.filter,layout:t,paint:i.paint},a=r._recreateLayer(y,i),s=this.layers.indexOf(i);this.layers[s]=a,this._style.layers[s].layout=t,this._layerByName[i.id]=a,this._uidToLayer.set(i.uid,a)},i.setStyleLayerVisibility=function(e,t){const i=this._layerByName[e];if(!i)return;const y=i.layout||{};y.visibility=t;const a={type:i.typeName,id:i.id,source:i.source,"source-layer":i.sourceLayer,minzoom:i.minzoom,maxzoom:i.maxzoom,filter:i.filter,layout:y,paint:i.paint},s=r._recreateLayer(a,i),l=this.layers.indexOf(i);this.layers[l]=s,this._style.layers[l].layout=y,this._layerByName[i.id]=s,this._uidToLayer.set(i.uid,s)},i.getStyleLayerVisibility=function(e){var t;const r=this._layerByName[e];if(!r)return"none";const i=r.layout;return null!=(t=null==i?void 0:i.visibility)?t:"visible"},i._recomputeZValues=function(){const e=this.layers,t=1/(e.length+1);for(let r=0;r<e.length;r++)e[r].z=1-(1+r)*t},i._identifyRefLayers=function(){const t=[],r=[];let i=0;for(const s of this.layers){const l=s.layout;if(s.type===e.StyleLayerType.FILL){var y;const e=s;let r=s.source+"|"+s.sourceLayer;r+=null!=(y="|"+(null==l?void 0:l.visibility))?y:"",r+="|"+s.minzoom,r+="|"+s.maxzoom,r+="|"+JSON.stringify(s.filter),(e.hasDataDrivenFill||e.hasDataDrivenOutline)&&(r+="|"+i),t.push({key:r,layer:s})}else if(s.type===e.StyleLayerType.LINE){var a;const e=s;let t=s.source+"|"+s.sourceLayer;t+=null!=(a="|"+(null==l?void 0:l.visibility))?a:"",t+="|"+s.minzoom,t+="|"+s.maxzoom,t+="|"+JSON.stringify(s.filter),t+="|"+(void 0!==l?l["line-cap"]:""),t+="|"+(void 0!==l?l["line-join"]:""),e.hasDataDrivenLine&&(t+="|"+i),r.push({key:t,layer:s})}++i}this._assignRefLayers(t),this._assignRefLayers(r)},i._assignRefLayers=function(t){let r,i;t.sort(((e,t)=>e.key<t.key?-1:e.key>t.key?1:0));const y=t.length;for(let a=0;a<y;a++){const s=t[a];if(s.key===r)s.layer.refLayerId=i;else if(r=s.key,i=s.layer.id,s.layer.type===e.StyleLayerType.FILL){if(!s.layer.getPaintProperty("fill-outline-color"))for(let e=a+1;e<y;e++){const y=t[e];if(y.key!==r)break;if(y.layer.getPaintProperty("fill-outline-color")){t[a]=y,t[e]=s,i=y.layer.id;break}}}else if(s.layer.type===e.StyleLayerType.LINE){let e=s.layer;for(let l=a+1;l<y;l++){const y=t[l];if(y.key!==r)break;const n=y.layer;(e.canUseThinTessellation&&!n.canUseThinTessellation||!e.canUseThinTessellation&&(n.getPaintProperty("line-pattern")||n.getPaintProperty("line-dasharray")))&&(e=n,t[a]=y,t[l]=s,i=y.layer.id)}}}},i._create=function(r,i,y){const a=1-(1+i)*(1/(y.length+1)),s=this._runningId++;switch(r.type){case"background":return new t.BackgroundStyleLayer(e.StyleLayerType.BACKGROUND,r,a,s);case"fill":return new t.FillStyleLayer(e.StyleLayerType.FILL,r,a,s);case"line":return new t.LineStyleLayer(e.StyleLayerType.LINE,r,a,s);case"symbol":return new t.SymbolStyleLayer(e.StyleLayerType.SYMBOL,r,a,s);case"raster":throw new Error("Unsupported vector tile raster layer");case"circle":return new t.CircleStyleLayer(e.StyleLayerType.CIRCLE,r,a,s)}throw new Error("Unknown vector tile layer")},r._recreateLayer=function(r,i){switch(r.type){case"background":return new t.BackgroundStyleLayer(e.StyleLayerType.BACKGROUND,r,i.z,i.uid);case"fill":return new t.FillStyleLayer(e.StyleLayerType.FILL,r,i.z,i.uid);case"line":return new t.LineStyleLayer(e.StyleLayerType.LINE,r,i.z,i.uid);case"symbol":return new t.SymbolStyleLayer(e.StyleLayerType.SYMBOL,r,i.z,i.uid);case"raster":throw new Error("Unsupported vector tile raster layer");case"circle":return new t.CircleStyleLayer(e.StyleLayerType.CIRCLE,r,i.z,i.uid)}},r}()}));
