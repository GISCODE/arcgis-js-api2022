/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./mixins/ChartMediaInfo","./support/chartMediaInfoUtils"],(function(e,t,r,o,s,i,a,c,n){"use strict";var p;let l=p=function(t){function r(e){var r;return(r=t.call(this,e)||this).type="pie-chart",r}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new p({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})},r}(c);t.__decorate([r.property({type:["pie-chart"],readOnly:!0,json:{type:["piechart"],read:!1,write:n.chartTypeKebabDict.write}})],l.prototype,"type",void 0),l=p=t.__decorate([a.subclass("esri.popup.content.PieChartMediaInfo")],l);return l}));
