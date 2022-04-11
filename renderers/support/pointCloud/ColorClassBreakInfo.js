/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../Color","../../../core/JSONSupport","../../../core/lang","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass"],(function(e,o,r,t,s,l,a,n,p){"use strict";var i;e.ColorClassBreakInfo=i=function(e){function r(){var o;return(o=e.apply(this,arguments)||this).description=null,o.label=null,o.minValue=0,o.maxValue=0,o.color=null,o}return o._inheritsLoose(r,e),r.prototype.clone=function(){return new i({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:l.clone(this.color)})},r}(s.JSONSupport),r.__decorate([a.property({type:String,json:{write:!0}})],e.ColorClassBreakInfo.prototype,"description",void 0),r.__decorate([a.property({type:String,json:{write:!0}})],e.ColorClassBreakInfo.prototype,"label",void 0),r.__decorate([a.property({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],e.ColorClassBreakInfo.prototype,"minValue",void 0),r.__decorate([a.property({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],e.ColorClassBreakInfo.prototype,"maxValue",void 0),r.__decorate([a.property({type:t,json:{type:[n.Integer],write:!0}})],e.ColorClassBreakInfo.prototype,"color",void 0),e.ColorClassBreakInfo=i=r.__decorate([p.subclass("esri.renderers.support.pointCloud.ColorClassBreakInfo")],e.ColorClassBreakInfo);const c=e.ColorClassBreakInfo;e.default=c,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
