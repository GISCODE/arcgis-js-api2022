/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/cast","../../core/accessorSupport/decorators/subclass"],(function(e,t,r,o,n,i,s,l,p){"use strict";var a;const u=new r.JSONMap({percentTotal:"percent-of-total",ratio:"ratio",percent:"percent"}),c=new r.JSONMap({sizeInfo:"size",colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation"}),y={key:e=>"number"==typeof e?"number":"string",typeMap:{number:Number,string:String},base:null},d=["high-to-low","above-and-below","centered-on","extremes"],m=[...new Set([...["high-to-low","above-and-below","centered-on","extremes","90-10","above","below"],...["high-to-low","above-and-below","90-10","above","below"]])],h=["seconds","minutes","hours","days","months","years"];let _=a=function(t){function r(e){var r;return(r=t.call(this,e)||this).endTime=null,r.field=null,r.maxSliderValue=null,r.minSliderValue=null,r.startTime=null,r.type=null,r.units=null,r}e._inheritsLoose(r,t);var o=r.prototype;return o.castEndTime=function(e){return"string"==typeof e||"number"==typeof e?e:null},o.castStartTime=function(e){return"string"==typeof e||"number"==typeof e?e:null},o.clone=function(){return new a({endTime:this.endTime,field:this.field,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,startTime:this.startTime,style:this.style,theme:this.theme,type:this.type,units:this.units})},e._createClass(r,[{key:"style",get:function(){return"color"===this.type?this._get("style"):null},set:function(e){this._set("style",e)}},{key:"theme",get:function(){return"color"===this.type||"size"===this.type?this._get("theme")||"high-to-low":null},set:function(e){this._set("theme",e)}}]),r}(o.JSONSupport);t.__decorate([n.property({types:y,json:{write:!0}})],_.prototype,"endTime",void 0),t.__decorate([l.cast("endTime")],_.prototype,"castEndTime",null),t.__decorate([n.property({type:String,json:{write:!0}})],_.prototype,"field",void 0),t.__decorate([n.property({type:Number,json:{write:!0}})],_.prototype,"maxSliderValue",void 0),t.__decorate([n.property({type:Number,json:{write:!0}})],_.prototype,"minSliderValue",void 0),t.__decorate([n.property({types:y,json:{write:!0}})],_.prototype,"startTime",void 0),t.__decorate([l.cast("startTime")],_.prototype,"castStartTime",null),t.__decorate([n.property({type:u.apiValues,value:null,json:{type:u.jsonValues,read:u.read,write:u.write}})],_.prototype,"style",null),t.__decorate([n.property({type:m,value:null,json:{type:m,origins:{"web-scene":{type:d,write:{writer:(e,t)=>{d.indexOf(e)>-1&&(t.theme=e)}}}},write:!0}})],_.prototype,"theme",null),t.__decorate([n.property({type:c.apiValues,json:{type:c.jsonValues,read:c.read,write:c.write}})],_.prototype,"type",void 0),t.__decorate([n.property({type:h,json:{type:h,write:!0}})],_.prototype,"units",void 0),_=a=t.__decorate([p.subclass("esri.renderers.support.AuthoringInfoVisualVariable")],_);return _}));
