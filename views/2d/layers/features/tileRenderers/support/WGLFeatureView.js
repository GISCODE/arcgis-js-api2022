/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../core/has","../../../../../../core/promiseUtils","../../../../engine/brushes","../../../../engine/FeatureContainer","../../../../engine/webgl/enums"],(function(e,t,i,s,r,a,n){"use strict";const l=i("featurelayer-order-by-server-enabled");let h=function(e){function i(t,i,s,r){var a;return(a=e.call(this,t)||this)._pointToCallbacks=[],a._layer=s,a._layerView=i,a._onUpdate=r,a}t._inheritsLoose(i,e);var a=i.prototype;return a.renderChildren=function(t){if(this.attributeView.update(),this.hasAnimation){t.painter.effects.integrate.draw(t,t.attributeView)}e.prototype.renderChildren.call(this,t)},a.hasEmptyAttributeView=function(){return this.attributeView.isEmpty()},a.isUpdating=function(){return this.attributeView.isUpdating()},a.hitTest=function(e){const t=s.createResolver();return this._pointToCallbacks.push({point:e,resolver:t}),this.requestRender(),t.promise},a.onTileData=function(e,t){const i=l&&"orderBy"in this._layer&&this._layer.orderBy,s=(null==i?void 0:i.length)&&!i[0].valueExpression&&i[0].field,r=i&&this._layerView.orderByFields===s;e.patch(t,r),this.contains(e)||this.addChild(e),this.requestRender()},a.onTileError=function(e){this.contains(e)||this.addChild(e)},a.updateTransitionProperties=function(t,i){e.prototype.updateTransitionProperties.call(this,t,i),this._layerView.featureEffectView.transitionStep(t,i),this._layerView.featureEffectView.transitioning&&this.requestRender()},a.doRender=function(t){const{minScale:i,maxScale:s}=this._layer,r=t.state.scale;r<=(i||1/0)&&r>=s&&e.prototype.doRender.call(this,t)},a.onAttributeStoreUpdate=function(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate(),this._onUpdate()},a.setStencilReference=function(t){if(t.rendererInfo.ddDotSize>1){const e=1;for(const t of this.children)t.stencilRef=t.key.level+e}else e.prototype.setStencilReference.call(this,t)},a.prepareRenderPasses=function(t){const i=t.registerRenderPass({name:"label",brushes:[r.brushes.label],target:()=>this.hasLabels?this.children:null,drawPhase:n.WGLDrawPhase.LABEL|n.WGLDrawPhase.LABEL_ALPHA}),s=t.registerRenderPass({name:"geometry",brushes:[r.brushes.fill,r.brushes.line,r.brushes.marker,r.brushes.text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.featureEffectView.hasEffects,effects:[{apply:t.effects.outsideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.excludedEffects},{apply:t.effects.insideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.includedEffects},{apply:t.effects.hittest,enable:()=>!!this._pointToCallbacks.length,args:()=>this._pointToCallbacks}]}),a=t.registerRenderPass({name:"highlight",brushes:[r.brushes.fill,r.brushes.line,r.brushes.marker,r.brushes.text],target:()=>this.children,drawPhase:n.WGLDrawPhase.HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:t.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]});return[...e.prototype.prepareRenderPasses.call(this,t),s,a,i]},t._createClass(i,[{key:"hasAnimation",get:function(){return this.hasLabels}},{key:"hasLabels",get:function(){if("sublayers"in this._layer)return this._layer.sublayers.some((e=>e.labelingInfo&&e.labelingInfo.length&&e.labelsVisible));const e=this._layer.featureReduction,t=e&&"cluster"===e.type&&e.labelsVisible&&e.labelingInfo&&e.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!t}}]),i}(a.FeatureContainer);e.WGLFeatureView=h,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
