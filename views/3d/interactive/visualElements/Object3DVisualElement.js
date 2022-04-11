/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../chunks/mat4","../../../../chunks/mat4f64","./VisualElement","../../webgl-engine/lib/basicInterfaces","../../webgl-engine/lib/Object3D","../../webgl-engine/lib/WebGLLayer"],(function(e,s,t,r,i,o,n,c,a){"use strict";let u=function(e){function o(s){var t;return(t=e.call(this,s.view)||this)._resources=null,t._transform=i.create(),t}s._inheritsLoose(o,e);var u=o.prototype;return u.recreate=function(){this.attached&&this.createResources()},u.recreateGeometry=function(){if(t.isNone(this._resources))return;const e=this._resources.object,s=this.view._stage;s.removeMany(e.geometries),e.removeAllGeometries(),this.createGeometries(e),this.visible||e.setVisible(this.visible),s.addMany(e.geometries)},u.createResources=function(){this.destroyResources();const e=this.view._stage;if(!e)return;const s=new a.WebGLLayer({isPickable:!1,updatePolicy:n.UpdatePolicy.SYNC});e.add(s);const t=new c.Object3D({castShadow:!1});t.transformation=this._transform,this.createExternalResources(),this.createGeometries(t),e.addMany(t.geometries),this.forEachExternalMaterial((s=>e.add(s))),e.add(t),s.add(t),this.visible||t.setVisible(!1),this._resources={layer:s,object:t}},u.destroyResources=function(){const e=this.view._stage;!t.isNone(this._resources)&&e&&(e.remove(this._resources.object),e.remove(this._resources.layer),this.forEachExternalMaterial((s=>{e.remove(s),s.dispose()})),e.removeMany(this._resources.object.geometries),this._resources.object.dispose(),this.destroyExternalResources(),this._resources=null)},u.updateVisibility=function(e){t.isNone(this._resources)||this._resources.object.setVisible(e)},s._createClass(o,[{key:"object",get:function(){return t.isSome(this._resources)?this._resources.object:null}},{key:"transform",get:function(){return this._transform},set:function(e){r.copy(this._transform,e),t.isSome(this._resources)&&(this._resources.object.transformation=this._transform)}}]),o}(o.VisualElement);e.Object3DVisualElement=u,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
