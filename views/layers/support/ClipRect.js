/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","./ClipArea"],(function(t,e,r,o,p,s,i,n){"use strict";var c;let l=c=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).type="rect",t.left=null,t.right=null,t.top=null,t.bottom=null,t}return t._inheritsLoose(r,e),r.prototype.clone=function(){return new c({left:this.left,right:this.right,top:this.top,bottom:this.bottom})},t._createClass(r,[{key:"version",get:function(){return(this._get("version")||0)+1}}]),r}(n);e.__decorate([r.property({type:[Number,String],json:{write:!0}})],l.prototype,"left",void 0),e.__decorate([r.property({type:[Number,String],json:{write:!0}})],l.prototype,"right",void 0),e.__decorate([r.property({type:[Number,String],json:{write:!0}})],l.prototype,"top",void 0),e.__decorate([r.property({type:[Number,String],json:{write:!0}})],l.prototype,"bottom",void 0),e.__decorate([r.property({readOnly:!0})],l.prototype,"version",null),l=c=e.__decorate([i.subclass("esri.views.layers.support.ClipRect")],l);return l}));
