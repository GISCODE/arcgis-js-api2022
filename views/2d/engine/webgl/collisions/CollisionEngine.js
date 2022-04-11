/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/maybe","../../../../../core/screenUtils","../definitions","./CollisionGrid","./visualVariableSimpleUtils"],(function(e,t,i,o,n,r){"use strict";const s=254,l=255,a=0;function u(e,i){const o=[];e.forEachTile((e=>o.push(e))),o.sort(((e,t)=>e.instanceId-t.instanceId)),o.forEach((e=>{t.isSome(e.labelMetrics)&&e.isReady&&i(e,e.labelMetrics.getCursor())}))}function c(e){return"feature"===e.layer.type||"csv"===e.layer.type||"geojson"===e.layer.type||"ogc-feature"===e.layer.type||"stream"===e.layer.type||"subtype-group"===e.layer.type||"wfs"===e.layer.type}function d(e){return t=>i.pt2px(r.getSizeForValueSimple(t,e))}function f(e){const t="visualVariables"in e&&e.visualVariables;if(!t)return null;for(const i of t)if("size"===i.type)return d(i);return null}function b(e){for(const i of e){var t;const e="featureReduction"in i&&"cluster"===(null==(t=i.featureReduction)?void 0:t.type)&&i.featureReduction,o=[...i.labelingInfo||[],...e.labelingInfo||[]];if(!i.labelsVisible||!o.length)continue;if(o.some((e=>"none"===e.deconflictionStrategy)))return!0}return!1}function y(e,i){if(!c(i))return;const o="subtype-group"===i.layer.type?i.layer.sublayers.items:[i.layer],n=i.layer.geometryType,r=!b(o),s={};if("subtype-group"!==i.layer.type){if("heatmap"===i.layer.renderer.type)return;const e=f(i.layer.renderer);s[0]=e}const l=i.tileRenderer;if(t.isNone(l))return;const a=i.layer.visible&&!i.suspended;e.push({tileRenderer:l,vvEvaluators:s,deconflictionEnabled:r,geometryType:n,visible:a})}let p=function(){function e(){}var i=e.prototype;return i.run=function(e,t,i){const o=[];for(let n=e.length-1;n>=0;n--){y(o,e[n])}this._transformMetrics(o,t),this._runCollision(o,t,i)},i._runCollision=function(e,t,i){const[o,r]=t.state.size,s=new n.CollisionBitsetGrid(o*t.pixelRatio,r*t.pixelRatio);for(const{tileRenderer:n,deconflictionEnabled:c,visible:d}of e){const e=n.featuresView.attributeView;c?d?(this._prepare(n),this._collideVisible(s,n,i),this._collideInvisible(s,n)):u(n,((t,i)=>{for(;i.nextId();)e.setLabelMinZoom(i.id,l)})):u(n,((t,i)=>{for(;i.nextId();)e.setLabelMinZoom(i.id,a)}))}},i._isFiltered=function(e,i,n){const r=i.getFilterFlags(e),s=!n.hasFilter||!!(r&o.FILTER_FLAG_0),l=!t.isSome(n.featureEffect)||n.featureEffect.excludedLabelsVisible||!!(r&o.EFFECT_FLAG_0);return!(s&&l)},i._prepare=function(e){const t=e.featuresView.attributeView,i=new Set;u(e,((o,n)=>{for(;n.nextId();){if(i.has(n.id))continue;if(i.add(n.id),this._isFiltered(n.id,t,e.layerView)){t.setLabelMinZoom(n.id,s);continue}t.getLabelMinZoom(n.id)!==a?t.setLabelMinZoom(n.id,l):t.setLabelMinZoom(n.id,a)}}))},i._collideVisible=function(e,t,i){const o=t.featuresView.attributeView,r=new Set;u(t,((t,l)=>{for(;l.nextId();)if(!r.has(l.id))if(t.key.level===i){if(0===o.getLabelMinZoom(l.id)){switch(e.insertMetrics(l)){case n.OUTSIDE_EXTENT:break;case n.HAS_COLLISION:o.setLabelMinZoom(l.id,s),r.add(l.id);break;case n.NONE:o.setLabelMinZoom(l.id,a),r.add(l.id)}}}else o.setLabelMinZoom(l.id,s)}))},i._collideInvisible=function(e,t){const i=t.featuresView.attributeView,o=new Set;u(t,((t,r)=>{for(;r.nextId();)if(!o.has(r.id)&&i.getLabelMinZoom(r.id)===l){switch(e.insertMetrics(r)){case n.OUTSIDE_EXTENT:break;case n.HAS_COLLISION:i.setLabelMinZoom(r.id,l),o.add(r.id);break;case n.NONE:i.setLabelMinZoom(r.id,a),o.add(r.id)}}}))},i._transformMetrics=function(e,i){for(const{tileRenderer:o,geometryType:n,vvEvaluators:r}of e)u(o,((e,s)=>{const l=o.featuresView.attributeView,a=e.transforms.labelMat2d;a[4]=Math.round(a[4]),a[5]=Math.round(a[5]);const u=a[4],c=a[5],d="polyline"===n;for(;s.next();){const e=s.boundsCount,o=s.anchorX,n=s.anchorY;let f=s.size;const b=r[0];if(t.isSome(b)){const e=b(l.getVVSize(s.id));f=isNaN(e)||null==e||e===1/0?f:e}const y=s.directionX*(f/2),p=s.directionY*(f/2);for(let t=0;t<e;t++){let e=o,r=s.anchorY;if(d){let o=e+s.boundsX(t)+y,n=r+s.boundsY(t)+p;i.state.rotation?(o=a[0]*o+a[2]*n+a[4],n=a[1]*o+a[3]*n+a[5]):(o+=u,n+=c),s.setBoundsComputedAnchorX(t,Math.floor(o)),s.setBoundsComputedAnchorY(t,Math.floor(n))}else{i.state.rotation?(e=a[0]*o+a[2]*n+a[4],r=a[1]*o+a[3]*n+a[5]):(e+=u,r+=c);const l=e+s.boundsX(t)+y,d=r+s.boundsY(t)+p;s.setBoundsComputedAnchorX(t,l),s.setBoundsComputedAnchorY(t,d)}}}}))},e}();e.CollisionEngine=p,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
