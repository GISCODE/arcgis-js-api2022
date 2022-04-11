/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass"],(function(e,t,r,o,s,c,i,n,u){"use strict";var l;e.SceneViewAtmosphere=l=function(e){function r(){return e.apply(this,arguments)||this}return t._inheritsLoose(r,e),r.prototype.clone=function(){return new l({quality:this.quality})},t._createClass(r,[{key:"quality",set:function(e){-1!==["low","high"].indexOf(e)&&this._set("quality",e)}}]),r}(o),r.__decorate([s.property({type:["low","high"],value:"low"})],e.SceneViewAtmosphere.prototype,"quality",null),e.SceneViewAtmosphere=l=r.__decorate([u.subclass("esri.views.3d.environment.SceneViewAtmosphere")],e.SceneViewAtmosphere);const p=e.SceneViewAtmosphere;e.default=p,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
