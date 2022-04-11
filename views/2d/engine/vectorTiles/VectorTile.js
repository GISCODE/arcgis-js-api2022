/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../chunks/mat3","../../../../chunks/mat3f32","./enums","./RenderBucket","./decluttering/config","../webgl/TiledDisplayObject"],(function(e,t,s,a,i,r,n,o,c){"use strict";let l=function(e){function c(t,s,a,i,r,n,o=null){var c;return(c=e.call(this,t,s,a,i,r,4096,4096)||this)._memCache=o,c.type="vector-tile",c._referenced=0,c._hasSymbolBuckets=!1,c._memoryUsedByLayerData=0,c.layerData=new Map,c.layerCount=0,c.status="loading",c.allSymbolsFadingOut=!1,c.lastOpacityUpdate=0,c.symbols=new Map,c.isCoverage=!1,c.neededForCoverage=!1,c.decluttered=!1,c.invalidating=!1,c.parentTile=null,c.childrenTiles=new Set,c._processed=!1,c._referenced=1,c.styleRepository=n,c.id=t.id,c}t._inheritsLoose(c,e);var l=c.prototype;return l.setData=function(e){this.changeDataImpl(e),this.requestRender(),this.ready(),this.invalidating=!1,this._processed=!0},l.deleteLayerData=function(e){let t=!1;for(const s of e)if(this.layerData.has(s)){const e=this.layerData.get(s);this._memoryUsedByLayerData-=e.memoryUsed,e.type===r.BucketType.SYMBOL&&this.symbols.has(s)&&(this.symbols.delete(s),t=!0),e.destroy(),this.layerData.delete(s),this.layerCount--}s.isSome(this._memCache)&&this._memCache.updateSize(this.key.id,this,this._memoryUsedByLayerData),t&&this.emit("symbols-changed"),this.requestRender()},l.processed=function(){return this._processed},l.hasData=function(){return this.layerCount>0},l.dispose=function(){"unloaded"!==this.status&&(h.delete(this),c._destroyRenderBuckets(this.layerData),this.layerData=null,this.layerCount=0,this._memoryUsedByLayerData=0,this.destroy(),this.status="unloaded")},l.release=function(){return 0==--this._referenced&&(this.dispose(),this.stage=null,!0)},l.retain=function(){++this._referenced},l.changeDataImpl=function(e){let t=!1;if(e){const{bucketsWithData:a,emptyBuckets:i}=e,n=this._createRenderBuckets(a);if(i&&i.byteLength>0){const e=new Uint32Array(i);for(const t of e)this._deleteLayerData(t)}for(const[e,s]of n)this._deleteLayerData(e),s.type===r.BucketType.SYMBOL&&(this.symbols.set(e,s.symbols),t=!0),this._memoryUsedByLayerData+=s.memoryUsed,this.layerData.set(e,s),this.layerCount++;s.isSome(this._memCache)&&this._memCache.updateSize(this.key.id,this,this._memoryUsedByLayerData)}this._hasSymbolBuckets=!1;for(const[s,a]of this.layerData)a.type===r.BucketType.SYMBOL&&(this._hasSymbolBuckets=!0);t&&this.emit("symbols-changed")},l.attachWithContext=function(e){this.stage={context:e,trashDisplayObject(e){e.processDetach()},untrashDisplayObject:()=>!1}},l.setTransform=function(t,s){e.prototype.setTransform.call(this,t,s);const i=s/(t.resolution*t.pixelRatio),r=this.width/this.rangeX*i,n=this.height/this.rangeY*i,o=[0,0];t.toScreen(o,[this.x,this.y]);const c=this.transforms.tileUnitsToPixels;a.identity(c),a.translate(c,c,o),a.rotate(c,c,Math.PI*t.rotation/180),a.scale(c,c,[r,n,1])},l._createTransforms=function(){return{dvs:i.create(),tileMat3:i.create(),tileUnitsToPixels:i.create()}},c._destroyRenderBuckets=function(e){if(!e)return;const t=new Set;e.forEach((e=>{t.has(e)||(e.destroy(),t.add(e))})),e.clear()},l._createRenderBuckets=function(e){const t=new Map,s=new Map;for(const a of e){const e=this._deserializeBucket(a,s);for(const s of e.layerUIDs)t.set(s,e)}return t},l._deserializeBucket=function(e,t){let s=t.get(e);if(s)return s;switch(new Uint32Array(e)[0]){case r.BucketType.FILL:s=new n.FillRenderBucket(e,this.styleRepository);break;case r.BucketType.LINE:s=new n.LineRenderBucket(e,this.styleRepository);break;case r.BucketType.SYMBOL:s=new n.SymbolRenderBucket(e,this.styleRepository,this);break;case r.BucketType.CIRCLE:s=new n.CircleRenderBucket(e,this.styleRepository)}return t.set(e,s),s},l._deleteLayerData=function(e){if(!this.layerData.has(e))return;const t=this.layerData.get(e);this._memoryUsedByLayerData-=t.memoryUsed,t.destroy(),this.layerData.delete(e),this.layerCount--},t._createClass(c,[{key:"hasSymbolBuckets",get:function(){return this._hasSymbolBuckets}},{key:"isFading",get:function(){return this._hasSymbolBuckets&&performance.now()-this.lastOpacityUpdate<o.FADE_DURATION}},{key:"isHoldingForFade",get:function(){return this._hasSymbolBuckets&&(!this.allSymbolsFadingOut||performance.now()-this.lastOpacityUpdate<o.FADE_DURATION)}},{key:"wasRequested",get:function(){return"errored"===this.status||"loaded"===this.status||"reloading"===this.status}},{key:"referenced",get:function(){return this._referenced}},{key:"memoryUsage",get:function(){return(this._memoryUsedByLayerData+256)/(this._referenced||1)}}]),c}(c.TiledDisplayObject);const h=new Map;function y(){h.forEach(((e,t)=>{console.log(`\n${t.key}:`),e[0].forEach((e=>console.log(e))),console.log("========"),e[1].forEach((e=>console.log(e)))}))}e.VectorTile=l,e.printAllocations=y,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
