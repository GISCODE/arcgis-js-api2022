/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","./Input"],(function(o,e,t,r,n,p,s,a){"use strict";var i;let u=i=function(e){function t(o){var t;return(t=e.call(this,o)||this).noValueOptionLabel=null,t.showNoValueOption=!1,t.type="combo-box",t}return o._inheritsLoose(t,e),t.prototype.clone=function(){return new i({showNoValueOption:this.showNoValueOption,noValueOptionLabel:this.noValueOptionLabel})},t}(a);e.__decorate([t.property({type:String,json:{write:!0}})],u.prototype,"noValueOptionLabel",void 0),e.__decorate([t.property({type:Boolean,json:{write:!0}})],u.prototype,"showNoValueOption",void 0),e.__decorate([t.property({type:["combo-box"],json:{read:!1,write:!0}})],u.prototype,"type",void 0),u=i=e.__decorate([s.subclass("esri.form.elements.inputs.ComboBoxInput")],u);return u}));
