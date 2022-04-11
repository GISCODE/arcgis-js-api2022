/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/jsonMap","../../core/JSONSupport","../../core/maybe","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","./FeatureExpressionInfo","./unitConversionUtils"],(function(e,r,t,o,s,n,i,u,p,a,f,c,l,d){"use strict";var y;const h=t.strict()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),x=new t.JSONMap({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let E=y=function(r){function t(){var e;return(e=r.apply(this,arguments)||this).offset=null,e}e._inheritsLoose(t,r);var o=t.prototype;return o.readFeatureExpressionInfo=function(e,r){return null!=e?e:r.featureExpression&&0===r.featureExpression.value?{expression:"0"}:void 0},o.writeFeatureExpressionInfo=function(e,r,t,o){r[t]=e.write({},o),"0"===e.expression&&(r.featureExpression={value:0})},o.write=function(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?r.prototype.write.call(this,e,t):null},o.clone=function(){return new y({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})},e._createClass(t,[{key:"mode",get:function(){const{offset:e,featureExpressionInfo:r}=this;return this._isOverridden("mode")?this._get("mode"):s.isSome(e)||r?"relative-to-ground":"on-the-ground"},set:function(e){this._override("mode",e)}},{key:"unit",set:function(e){this._set("unit",e)}}]),t}(o.JSONSupport);r.__decorate([n.property({type:l,json:{write:!0}})],E.prototype,"featureExpressionInfo",void 0),r.__decorate([a.reader("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],E.prototype,"readFeatureExpressionInfo",null),r.__decorate([c.writer("featureExpressionInfo",{featureExpressionInfo:{type:l},"featureExpression.value":{type:[0]}})],E.prototype,"writeFeatureExpressionInfo",null),r.__decorate([n.property({type:h.apiValues,nonNullable:!0,json:{type:h.jsonValues,read:h.read,write:{writer:h.write,isRequired:!0}}})],E.prototype,"mode",null),r.__decorate([n.property({type:Number,json:{write:!0}})],E.prototype,"offset",void 0),r.__decorate([n.property({type:d.supportedUnits,json:{type:String,read:x.read,write:x.write}})],E.prototype,"unit",null),E=y=r.__decorate([f.subclass("esri.layers.support.ElevationInfo")],E);return E}));
