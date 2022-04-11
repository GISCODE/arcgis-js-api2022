/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../request","../../core/Error","../../core/Logger","../../core/urlUtils"],(function(t,e,i,s,a){"use strict";const r=s.getLogger("esri.layers.support.SpriteSource"),h=1.15;let o=function(){function s(t,e,i,s){this.baseURL=t,this.devicePixelRatio=e,this.maxTextureSize=i,this._spriteImageFormat=s,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}var o=s.prototype;return o.getSpriteInfo=function(t){return this._spritesData[t]},o.load=function(){var e=t._asyncToGenerator((function*(t){if(this.baseURL){this.loadStatus="loading";try{yield this._loadSprites(t),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}));function i(t){return e.apply(this,arguments)}return i}(),o._loadSprites=function(t){this._isRetina=this.devicePixelRatio>h;const s=a.urlToObject(this.baseURL),o=s.query?"?"+a.objectToQuery(s.query):"",n=this._isRetina?"@2x":"",l=`${s.path}${n}.${this._spriteImageFormat}${o}`,u=`${s.path}${n}.json${o}`;return Promise.all([e(u,t),e(l,{responseType:"image",...t})]).then((([t,e])=>{const a=Object.keys(t.data);if(!a||0===a.length||1===a.length&&"_ssl"===a[0]||!e||!e.data)return this._spritesData=this.image=null,this.width=this.height=0,Promise.resolve(null);this._spritesData=t.data;const h=e.data,o=Math.max(this.maxTextureSize,4096);if(h.width>o||h.height>o){const t=`Sprite resource for style ${s.path} is bigger than the maximum allowed of ${o} pixels}`;throw r.error(t),new i("SpriteSource",t)}this.width=h.width,this.height=h.height;const n=document.createElement("canvas"),l=n.getContext("2d");n.width=h.width,n.height=h.height,l.drawImage(h,0,0,h.width,h.height);const u=l.getImageData(0,0,h.width,h.height),c=new Uint8Array(u.data);let d;for(let i=0;i<c.length;i+=4)d=c[i+3]/255,c[i]=c[i]*d,c[i+1]=c[i+1]*d,c[i+2]=c[i+2]*d;this.image=c}))},t._createClass(s,[{key:"spriteNames",get:function(){const t=[];for(const e in this._spritesData)t.push(e);return t.sort(),t}}]),s}();return o}));
