/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/Handles","../../../../core/maybe","../../../../core/screenUtils","../../../../chunks/vec2","../../../../chunks/vec3","../../../../chunks/vec3f64","../measurementTools/support/viewUtils","./VisualElement","../../../overlay/LineOverlayItem","../../../overlay/TextOverlayItem"],(function(e,t,i,o,s,n,r,a,c,h,l,u){"use strict";let _=function(e){function s(t){var o;return(o=e.call(this,t.view)||this)._handles=new i,o._textItem=null,o._calloutItem=null,o._showCallout=!0,o._showText=!0,o._geometry=null,o._text="-",o._fontSize=14,o._distance=25,o._anchor="right",o.applyProps(t),o}t._inheritsLoose(s,e);var r=s.prototype;return r.overlaps=function(e){return!!this.attached&&(this.textItem.visible&&e.textItem.visible&&this.view.overlay.overlaps(this._textItem,e.textItem))},r._updateLabelPosition=function(){if(this.attached){if(this._showText=!1,this._showCallout=!1,o.isSome(this.geometry)&&this.view._stage)switch(this.geometry.type){case"point":if(this._computeLabelPositionFromPoint(this.geometry.point,w)){if(this.geometry.callout){const e=this.view.state.camera,t=this.geometry.callout.distance;n.add(S,S,[0,this.geometry.callout.offset]),e.renderToScreen(S,w),n.set(g,0,1),n.scale(g,g,t*e.pixelRatio),n.add(g,g,S),e.renderToScreen(g,P),this._showCallout=this._updatePosition(w,P)}else this._textItem.position=[w[0],w[1]],this._textItem.anchor="center";this._showText=!0}break;case"corner":this._computeLabelPositionFromCorner(this.geometry,this._distance,w,P)&&(this._showCallout=this._updatePosition(w,P),this._showText=!0);break;case"segment":this._computeLabelPositionFromSegment(this.geometry,this._distance,this._anchor,w,P)&&(this._showText=!0,this._showCallout=this._updatePosition(w,P))}this.updateVisibility(this.visible)}},r._computeLabelPositionFromPoint=function(e,t){const i=this.view.state.camera;return i.projectToRenderScreen(e,S),!(S[2]<0||S[2]>1)&&(i.renderToScreen(S,t),!0)},r._computeLabelPositionFromCorner=function(e,t,i,o){if(!e)return!1;const s=this.view.state.camera;return m(e.left,1,s,b),n.negate(b,b),m(e.right,0,s,v),n.add(g,b,v),n.negate(g,g),n.normalize(g,g),s.projectToRenderScreen(e.left.endRenderSpace,S),!(S[2]<0||S[2]>1)&&(s.renderToScreen(S,i),n.scale(g,g,t*s.pixelRatio),n.add(g,g,S),s.renderToScreen(g,o),!0)},r._computeLabelPositionFromSegment=function(e,t,i,o,s){if(!e)return!1;const r=e.segment,a=this.view.state.camera;c.screenSpaceTangent(r.startRenderSpace,r.endRenderSpace,b,a),n.set(g,-b[1],b[0]);let h=!1;switch(i){case"top":h=g[1]<0;break;case"bottom":h=g[1]>0;break;case"left":h=g[0]>0;break;case"right":h=g[0]<0}if(h&&n.negate(g,g),0===n.length(g))switch(i){case"top":g[1]=1;break;case"bottom":g[1]=-1;break;case"left":g[0]=-1;break;case"right":g[0]=1}return r.eval(L[e.sampleLocation],x),a.projectToRenderScreen(x,S),!(S[2]<0||S[2]>1)&&(a.renderToScreen(S,o),n.scale(g,g,t*a.pixelRatio),n.add(g,g,S),a.renderToScreen(g,s),!0)},r._updatePosition=function(e,t){if(t){const i=t[0]-e[0],o=t[1]-e[1];return this._textItem.position=[t[0],t[1]],this._textItem.anchor=Math.abs(i)>Math.abs(o)?i>0?"left":"right":o>0?"top":"bottom",this._calloutItem.startPosition=[e[0],e[1]],this._calloutItem.endPosition=[t[0],t[1]],!0}return this._textItem.position=[e[0],e[1]],this._textItem.anchor="center",!1},r.createResources=function(){this._textItem=new u({visible:!0,text:this._text,fontSize:this._fontSize}),this._calloutItem=new l({visible:!0,width:2}),this._updateLabelPosition(),this.view.overlay.items.addMany([this._textItem,this._calloutItem]),this._handles.add(this.view.state.watch("camera",(()=>this._updateLabelPosition())))},r.destroyResources=function(){this.view.overlay&&!this.view.overlay.destroyed&&this.view.overlay.items.removeMany([this._textItem,this._calloutItem]),this._handles.removeAll()},r.updateVisibility=function(e){this._textItem.visible=this._showText&&e,this._calloutItem.visible=this._showCallout&&e},t._createClass(s,[{key:"geometry",get:function(){return this._geometry},set:function(e){this._geometry=e,this._updateLabelPosition()}},{key:"textItem",get:function(){return this._textItem}},{key:"text",get:function(){return this._text},set:function(e){this._text=e,this.attached&&(this._textItem.text=this._text)}},{key:"fontSize",get:function(){return this._fontSize},set:function(e){this._fontSize=e,this.attached&&(this._textItem.fontSize=this._fontSize)}},{key:"distance",get:function(){return this._distance},set:function(e){this._distance!==e&&(this._distance=e,this._updateLabelPosition())}},{key:"anchor",get:function(){return this._anchor},set:function(e){this._anchor!==e&&(this._anchor=e,this._updateLabelPosition())}}]),s}(h.VisualElement);function m(e,t,i,o){e.eval(t,p,y),r.add(f,p,y),i.projectToRenderScreen(p,I),i.projectToRenderScreen(f,R),n.subtract(o,k,T),n.normalize(o,o)}function d(e){switch(e){case"top":return"bottom";case"right":return"left";case"bottom":return"top";case"left":return"right"}}const p=a.create(),f=a.create(),y=a.create(),b=s.createRenderScreenPointArray(),v=s.createRenderScreenPointArray(),g=s.createRenderScreenPointArray(),x=a.create(),S=s.createRenderScreenPointArray3(),w=s.createScreenPointArray(),P=s.createScreenPointArray(),I=s.createRenderScreenPointArray3(),T=I,R=s.createRenderScreenPointArray3(),k=R,L={start:0,center:.5,end:1};e.LabelVisualElement=_,e.mirrorPosition=d,e.screenSpaceTangent=m,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));