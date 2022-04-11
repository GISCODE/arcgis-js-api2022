/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../core/watchUtils","../../webgl-engine/lib/basicInterfaces","../../webgl-engine/lib/ContentObjectType","../../webgl-engine/lib/Object3D","../../webgl-engine/lib/WebGLLayer"],(function(e,s,t,r,c,o,i,n){"use strict";let a=function(){function e(e){this.resourceFactory=e,this._resources=null,this._visible=!0,this._attached=!1}var a=e.prototype;return a.destroy=function(){this._destroyResources()},a.recreate=function(){this.attached&&this._createResources()},a.recreateGeometry=function(){if(!this.resourceFactory.recreateGeometry)return void this.recreate();const e=this.resourceFactory.view._stage;if(t.isNone(this._resources)||!e)return;const s=this._resources.object;this._resources.external.forEach((s=>{s.type===o.ContentObjectType.Geometry&&e.remove(s)})),s.removeAllGeometries();const r=this.resourceFactory.recreateGeometry(this._resources.external,s,this._resources.layer);e.addMany(r)},a._createOrDestroyResources=function(){this._attached?this._resources||this._createResources():this._destroyResources()},a._createResources=function(){this._destroyResources();const e=this.resourceFactory.view._stage;if(!e)return;const s=new n.WebGLLayer({isPickable:!1,updatePolicy:c.UpdatePolicy.SYNC});e.add(s);const t=new i.Object3D({castShadow:!1}),o=this.resourceFactory.createResources(t,s);o.forEach((s=>e.add(s))),e.add(t),s.add(t);const a=this.resourceFactory.cameraChanged?r.init(this.resourceFactory.view.state,"camera",(e=>this.resourceFactory.cameraChanged(e))):null;this._resources={layer:s,object:t,external:o,cameraHandle:a},this._syncVisible()},a._destroyResources=function(){if(t.isNone(this._resources))return;const e=this.resourceFactory.view._stage;null==e||e.remove(this._resources.object),null==e||e.remove(this._resources.layer),this._resources.external.forEach((s=>{null==e||e.remove(s),"dispose"in s&&s.dispose()})),this._resources.object.dispose(),this._resources.cameraHandle&&this._resources.cameraHandle.remove(),this._resources=null},a._syncVisible=function(){t.isNone(this._resources)||this._resources.object.setVisible(this._visible)},s._createClass(e,[{key:"object",get:function(){return t.isSome(this._resources)?this._resources.object:null}},{key:"resources",get:function(){return t.isSome(this._resources)?this._resources.external:null}},{key:"visible",get:function(){return this._visible},set:function(e){e!==this._visible&&(this._visible=e,this._syncVisible())}},{key:"attached",get:function(){return this._attached},set:function(e){e!==this._attached&&(this._attached=e,this._createOrDestroyResources())}}]),e}();e.VisualElementResources=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
