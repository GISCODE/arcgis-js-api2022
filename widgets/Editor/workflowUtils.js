/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["require","exports","../../chunks/_rollupPluginBabelHelpers","../../Graphic","../../core/has","../../core/maybe","../../core/promiseUtils","../../core/screenUtils","../../core/watchUtils","../../core/accessorSupport/diffUtils","../../renderers/support/clickToleranceUtils","../../renderers/support/lengthUtils","../../renderers/visualVariables/support/sizeVariableUtils","../../renderers/visualVariables/support/visualVariableUtils","../../symbols/support/symbolConversion","../../symbols/support/symbolUtils","../../views/3d/layers/graphics/GraphicState","../../views/support/drapedUtils","../../views/support/hitTestSelectUtils"],(function(e,t,r,n,i,a,o,s,l,u,c,p,y,f,d,h,m,b,g){"use strict";function v(e){const t=e.sourceLayer;if("feature"!==t.type||!F(t.renderer))return{rotation:null,size:null};let r=null,n=null;const i=t.renderer.getVisualVariablesForType("rotation").filter((t=>(!t.axis||"heading"===t.axis)&&t.field&&!t.valueExpression&&a.isSome(f.getRotationAngle(t,e))));1===i.length&&(r=S(i[0],t));const o=t.renderer.getVisualVariablesForType("size").filter((t=>t.field&&!t.useSymbolValue&&!t.valueExpression&&y.getTransformationType(t)===y.TransformationType.RealWorldSize&&a.isSome(f.getSize(t,e))));return 1===o.length&&(n=G(o[0],t)),{rotation:r,size:n}}function S(e,t){const r="heading"===(e.axis||"heading")&&"arithmetic"===e.rotationType?-1:1,n=e.field,i=t.fields&&t.fields.filter((e=>e.name===n)),a=i&&1===i.length?i[0].type:"double",o={initial:0,current:0};return{field:n,getDefault:()=>Promise.resolve(0),getValue:e=>(o.current=o.initial-r*e,V((o.current+360)%360,a)),initValue:e=>{o.initial=null!=e?e:o.current,o.current=0},isUpdatingInteractively:!1}}function w(e,t){switch(t){case"width":return e[0];case"depth":return e[1];case"height":return e[2];default:return e[2]||e[1]||e[0]}}function T(e,t,r){return I.apply(this,arguments)}function I(){return(I=r._asyncToGenerator((function*(t,r,n){if(a.isNone(r))return 0;const{symbol:i}=d.to3D(r);if(a.isNone(i)||"web-style"===i.type||"cim"===i.type)return 0;const o=i.symbolLayers.getItemAt(0);if(!o)return 0;switch(o.type){case"icon":{const{computeIconLayerResourceSize:t}=yield new Promise(((t,r)=>e(["../../symbols/support/symbolLayerUtils"],t,r)));return o.size||Math.min($.icon,(yield t(o,$.icon))[0])||$.icon}case"text":return o.size||$.text;case"line":return o.size||$.line;case"object":{const{computeObjectLayerResourceSize:r}=yield new Promise(((t,r)=>e(["../../symbols/support/symbolLayerUtils"],t,r)));return w(yield r(o,t.scale/$.viewScaleSizeFactor),n)}case"path":return(null!=o.width?o.width:o.height)||t.scale/$.viewScaleSizeFactor;case"extrude":return o.size||t.scale/$.viewScaleSizeFactor;default:return 0}}))).apply(this,arguments)}function G(e,t){const n=e.field,i=e.axis,a=t.fields&&t.fields.filter((e=>e.name===n)),o=a&&1===a.length?a[0].type:"double",s={updating:!1,initial:0,current:0},l=p.meterIn[e.valueUnit];let u;return u="area"===e.valueRepresentation?e=>(e*l/2)**2*Math.PI:"radius"===e.valueRepresentation||"distance"===e.valueRepresentation?e=>e*l/2:e=>e*l,{field:n,getDefault:(c=r._asyncToGenerator((function*(e,t){return V(u(yield T(t,e,i)),o)})),function(e,t){return c.apply(this,arguments)}),getValue:(e,t)=>(s.initial||(s.initial=t.pixelSizeAt(t.center)),s.current=s.initial*e,V(s.current,o)),initValue:e=>{s.initial=null!=e?e:s.current,s.current=0},isUpdatingInteractively:!1};var c}function V(e,t){switch(t){case"small-integer":case"integer":case"long":return Math.round(e);case"double":case"single":return e;default:return 0}}function F(e){switch(e.type){case"class-breaks":case"simple":case"unique-value":case"dot-density":case"dictionary":return!0;default:return!1}}function U(e){return _.apply(this,arguments)}function _(){return(_=r._asyncToGenerator((function*(e){const t=yield h.getDisplayedSymbol(e,{useSourceLayer:!0,ignoreGraphicSymbol:!0}),r=u.diff(e.symbol,t);a.isSome(r)&&(e.symbol=t)}))).apply(this,arguments)}function z(e){if("mesh"===e||"multipatch"===e)throw new Error("Mesh and Multipatch not supported");return e}function x(e,t,r){return L.apply(this,arguments)}function L(){return L=r._asyncToGenerator((function*(e,t,n){yield M(e,t);const i=e.on("create",function(){var i=r._asyncToGenerator((function*(r){if("cancel"===r.state)return M(e,t);if("complete"===r.state){const e=r.graphic;e.sourceLayer||(e.sourceLayer=t.layer),e.attributes||(e.attributes={...t.template.prototype.attributes}),yield U(e),n(e)}}));return function(e){return i.apply(this,arguments)}}());return{remove:()=>{i.remove(),e.cancel()}}})),L.apply(this,arguments)}function M(e,t){return A.apply(this,arguments)}function A(){return(A=r._asyncToGenerator((function*(e,t){const r=t.layer,n={...t.template.prototype.attributes};yield R(e,r,n);const i={graphicProperties:{attributes:n,sourceLayer:r},hasZ:r.capabilities.data.supportsZ};return e.layer.elevationInfo=r.elevationInfo,e.create(z(r.geometryType),i)}))).apply(this,arguments)}function R(e,t,r){return O.apply(this,arguments)}function O(){return(O=r._asyncToGenerator((function*(e,t,r){var i;const o=new n({sourceLayer:t,attributes:r}),{rotation:s,size:l}=v(o);let u=yield h.getDisplayedSymbol(o,{useSourceLayer:!0}),c=!1;for(const n of[l,s]){if(a.isNone(n))continue;null==r[n.field]&&(r[n.field]=yield n.getDefault(u,e.view),c=!0)}switch(c&&(u=yield h.getDisplayedSymbol(o,{useSourceLayer:!0})),null==(i=u)?void 0:i.type){case"simple-fill":case"polygon-3d":e.polygonSymbol=u;break;case"simple-line":case"line-3d":e.polylineSymbol=u;break;case"simple-marker":case"picture-marker":case"point-3d":e.pointSymbol=u}}))).apply(this,arguments)}function j(e,t){return e&&e.find((e=>e.layer===t))}function D(e,t,r,n){return E.apply(this,arguments)}function E(){return E=r._asyncToGenerator((function*(e,t,n,i){if(0===e.length)return[];const{updatable:a,graphicsByLayer:s}=yield n.async(r._asyncToGenerator((function*(){const{results:r}=yield o.whenOrAbort(g.hitTestSelectSameDistance(t,n),i),a=new Map,s=({layer:e})=>{const t=a.get(e);if(!t){const t=new Array;return a.set(e,t),t}return t};r.forEach((({graphic:e})=>s(e).push(e)));const l=e.filter((({supports:e,layer:t})=>e.indexOf("update")>-1&&a.has(t)));return 0!==l.length&&n.stopPropagation(),{updatable:l,graphicsByLayer:a}})));return o.whenOrAbort(o.eachAlways(a.map(function(){var e=r._asyncToGenerator((function*({layer:e}){const{objectIdField:t,displayField:r}=e,n=[t];e.fieldsIndex.has(r)&&n.push(r);const a=s.get(e);if(!!a.some((e=>n.some((t=>!(t in e.attributes)))))){const t=e.createQuery();return t.outFields=n,t.returnGeometry=!1,t.objectIds=a.map((e=>e.getObjectId())),e.queryFeatures(t,{signal:i}).then((({features:e})=>e))}return a}));return function(t){return e.apply(this,arguments)}}())),i)})),E.apply(this,arguments)}function P(e,t,r,n){return k.apply(this,arguments)}function k(){return(k=r._asyncToGenerator((function*(e,t,n,i){if(0===e.length)return[];let a=null;const s=yield n.async(r._asyncToGenerator((function*(){const{results:r}=yield o.whenOrAbort(t.hitTest(n),i);if(0===r.length)return[];const s=new Set;a=r,a.forEach((({graphic:e})=>s.add(e.layer)));const l=e.items.filter((({layer:e,supports:t})=>t.indexOf("update")>-1&&s.has(e)));return l.length>0&&n.stopPropagation(),l})));return o.whenOrAbort(o.eachAlways(s.map((({layer:e})=>{const{objectIdField:r,displayField:o}=e,s=[r];e.fieldsIndex.has(o)&&s.push(o);const l=e.createQuery();l.outFields=s,l.returnGeometry=!1;const u="renderer"in e?c.calculateTolerance({renderer:e.renderer,event:n}):0;return l.geometry=b.createQueryGeometry(n.mapPoint,u,t),l.outSpatialReference=t.spatialReference,e.queryFeatures(l,{signal:i}).then((({features:t})=>(a.forEach((({graphic:n})=>{if(n.layer===e){t.find((t=>t.attributes[r]===n.attributes[e.objectIdField]))||t.push(n)}})),t)))}))),i)}))).apply(this,arguments)}function q(e,t,r,n){return N.apply(this,arguments)}function N(){return(N=r._asyncToGenerator((function*(e,t,r,n){switch(t.type){case"3d":return D(e,t,r,n);case"2d":return P(e,t,r,n)}}))).apply(this,arguments)}function C(e,t,r){return Q.apply(this,arguments)}function Q(){return(Q=r._asyncToGenerator((function*(e,t,r){const n=e.layer,i=n.createQuery();return i.objectIds=[e.getAttribute(n.objectIdField)],i.outFields=["*"],i.outSpatialReference=t.spatialReference,i.returnM=n.capabilities.data.supportsM,i.returnZ=n.capabilities.data.supportsZ,(yield n.queryFeatures(i,{signal:r})).features[0]}))).apply(this,arguments)}function W(e,t,r,n){return Z.apply(this,arguments)}function Z(){return Z=r._asyncToGenerator((function*(e,t,n,i){let o=!1;const{rotation:s,size:l}=i;[s,l].forEach(function(){var n=r._asyncToGenerator((function*(r){if(a.isNone(r))return;const n=t.attributes[r.field];if(a.isSome(n))r.initValue(n);else{const n=yield r.getDefault(t.symbol,e.view);r.initValue(n),t.setAttribute(r.field,n),o=!0}}));return function(e){return n.apply(this,arguments)}}()),o&&(yield U(t));const u={multipleSelectionEnabled:!1};return"point"===n.geometryType&&(u.enableRotation=a.isSome(s),u.enableScaling=a.isSome(l)),e.layer.elevationInfo=n.elevationInfo,e.update(t,u)})),Z.apply(this,arguments)}function B(e){return!e||"rotate-start"!==e.type&&"rotate"!==e.type&&"rotate-stop"!==e.type?null:e}function H(e){return!e||"scale-start"!==e.type&&"scale"!==e.type&&"scale-stop"!==e.type?null:e}function J(e,t,r,n){return K.apply(this,arguments)}function K(){return(K=r._asyncToGenerator((function*(e,t,r,n){var i;if(!a.isSome(t.geometry)||"point"!==(null==(i=t.geometry)?void 0:i.type))return;const o=n.rotation,s=B(r.toolEventInfo);if(a.isSome(o)&&a.isSome(s))if("rotate-stop"===s.type)o.isUpdatingInteractively=!1,o.initValue();else{o.isUpdatingInteractively=!0;const{field:r,getValue:n}=o;t.attributes[r]=n(s.angle,e)}const l=n.size,u=H(r.toolEventInfo);if(a.isSome(l)&&a.isSome(u))if("scale-stop"===u.type)l.isUpdatingInteractively=!1,l.initValue();else{l.isUpdatingInteractively=!0;const{field:r,getValue:n}=l;t.attributes[r]=n(u.xScale,e)}yield U(t)}))).apply(this,arguments)}function X(e,t,r,n,i){return Y.apply(this,arguments)}function Y(){return Y=r._asyncToGenerator((function*(e,t,n,i,o){const s=e.clone();yield U(s),i.map.add(n.layer),n.layer.add(s);const u=e.sourceLayer,c=i.whenLayerView(u),p=()=>{const t=e.layer,r=e.attributes[t.objectIdField];return c.then((e=>e.setVisibility(r,!1)),(()=>{})),{remove(){c.then((e=>e.setVisibility(r,!0)),(()=>{}))}}};let y=null,f=null;if("3d"===i.type){const e=new m.GraphicState({graphic:s});y=i.trackGraphicState(e),l.init(e,"displaying",(e=>{f=e?p():a.removeMaybe(f)}))}else f=p();yield W(n,s,u,t);let d=null;c.then((e=>d=e),(()=>{}));const h=t.size,b=t.rotation,g=e.watch("attributes",function(){var e=r._asyncToGenerator((function*(e){let t=!1;for(const r in e){const n=e[r];n!==s.attributes[r]&&(s.setAttribute(r,n),a.isSome(h)&&!h.isUpdatingInteractively&&h.field===r&&h.initValue(n),a.isSome(b)&&!b.isUpdatingInteractively&&b.field===r&&b.initValue(n),(a.isNone(d)||d.requiredFields.includes(r))&&(t=!0))}t&&(yield U(s))}));return function(t){return e.apply(this,arguments)}}()),v=n.on("update",function(){var e=r._asyncToGenerator((function*(e){const r=e.graphics[0];if("complete"===e.state)return W(n,r,u,t);yield J(i,r,e,t),o(r.clone())}));return function(t){return e.apply(this,arguments)}}()),S=n.on(["undo","redo"],function(){var e=r._asyncToGenerator((function*(e){o(e.graphics[0].clone())}));return function(t){return e.apply(this,arguments)}}()),w=()=>{};return{interactive:{remove(){S.remove(),v.remove(),n.cancel(),g&&g.remove(),this.remove=w}},visual:{remove(){a.removeMaybe(f),i.whenLayerView(u).then((e=>l.whenFalseOnce(e,"updating"))).then((()=>{a.removeMaybe(y),n.layer.remove(s),this.remove=w}))}}}})),Y.apply(this,arguments)}const $={icon:s.px2pt(24),text:s.px2pt(12),line:s.px2pt(1),viewScaleSizeFactor:100};function ee(e,t,r){let n=!1;return e.filter((e=>!!n||(n=e===t,n))).map((e=>r[e]()))}function te(e){if(1!==e.length)return null;const t=e[0];if("items"in t){const e=t;return 1===e.items.length?e.items[0]:null}return t}function re(e,t){if(e.viewModel.refreshCreationTemplates(),"awaiting-feature-creation-info"===t[0].id){const r=te(e.viewModel.featureTemplatesViewModel.items);a.isSome(r)&&(e.creationInfo={layer:r.layer,template:r.template},t.shift())}return t}t.avoidFeatureTemplateSelectionWithOnlyOneItem=re,t.createWorkflowSteps=ee,t.fetchCandidates=q,t.fetchFullFeature=C,t.findLayerInfo=j,t.getVisualVariableAttributes=v,t.setUpFeatureAdd=x,t.setUpGeometryUpdate=X,t.sizeDefaults=$,t.startCreatingNewFeature=M,t.startUpdatingFeature=W,t.updateGraphicSymbolWhenRequired=U,t.visualVariableInteractiveUpdate=J,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));