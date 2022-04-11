/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../geometry","../../../Graphic","../../../symbols","../../../core/maybe","../../../geometry/Polygon","../../../symbols/FillSymbol3DLayer","../../../symbols/PolygonSymbol3D","../../../geometry/Point","../../../symbols/PointSymbol3D","../../../symbols/IconSymbol3DLayer","../../../symbols/TextSymbol3DLayer"],(function(e,i,t,o,s,r,n,h,a,l,c,y){"use strict";let m=function(){function e(e,i,t=""){this.graphics=e,this._symbol=new l({symbolLayers:[new c({material:{color:i},outline:{color:[255,255,255],size:1},resource:{primitive:"circle"}}),new y({text:t,halo:{color:"white",size:1/.75},material:{color:i},size:12})]})}var i=e.prototype;return i.show=function(e,i){if(s.isNone(i))return;this.hide();const o=new a({x:e[0],y:e[1],z:e[2],spatialReference:i});this._graphic=new t({geometry:o,symbol:this._symbol}),this.graphics.add(this._graphic)},i.hide=function(){s.isSome(this._graphic)&&(this.graphics.remove(this._graphic),this._graphic=null)},e}(),p=function(){function e(e,i,t=""){this.graphics=e,this._graphics=new Array,this._outline=new h({symbolLayers:[new n({material:{color:[0,0,0,0]},outline:{color:i,size:2}})]}),this._text=new l({symbolLayers:[new y({text:t,halo:{color:"white",size:1/.75},material:{color:i},size:12})]})}var i=e.prototype;return i.show=function(e){this.hide();const i=new a({x:e.xmin,y:e.ymin,z:e.zmax,spatialReference:e.spatialReference});this._graphics.push(new t({geometry:r.fromExtent(e),symbol:this._outline})),this._graphics.push(new t({geometry:i,symbol:this._text})),this.graphics.addMany(this._graphics)},i.hide=function(){this.graphics.removeMany(this._graphics),this._graphics.length=0},e}();e.ExtentGraphics=p,e.PointGraphics=m,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
