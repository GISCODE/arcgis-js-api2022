// COPYRIGHT © 2021 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojox/charting/plot2d/CartesianBase","dojox/charting/plot2d/_PlotEvents","dojox/charting/plot2d/common","dojox/lang/functional","dojox/lang/functional/reversed","dojox/lang/utils","./labelsRendering/_ColumnsLabelRenderingFix","./animation/_ClusteredColumnsAnimation","./_MinVisibleColumn"],(function(t,e,i,a,r,s,n,o,h,l,u,c){var d=o.lambda("item.purgeGroup()");return i("dojox.charting.plot2d.Columns",[a,r,l,u,c],{_mainShapes:null,_animationInfos:null,_noCrispEdges:!1,defaultParams:{gap:0,animate:null},optionalParams:{minBarSize:1,maxBarSize:1},constructor:function(e,i){this.opt=t.clone(t.mixin(this.opt,this.defaultParams)),h.updateWithObject(this.opt,i),h.updateWithPattern(this.opt,i,this.optionalParams),this.animate=this.opt.animate,this.renderingOptions=this._noCrispEdges?null:{"shape-rendering":"crispEdges"}},getSeriesStats:function(){var t=s.collectSimpleStats(this.series,(function(t){return null==t}));return t.hmin-=.5,t.hmax+=.5,t},render:function(t,i){if(!this.chart.isPreRenderMode){var a;this.resetEvents(),this.dirty=this.isDirty(),this.dirty&&(e.forEach(this.series,d),this._eventSeries={},this.cleanGroup(),a=this.getGroup(),n.forEachRev(this.series,(function(t){t.cleanGroup(a)})));var r=this.chart.theme,s=this._hScaler.scaler.getTransformerFromModel(this._hScaler),o=this._vScaler.scaler.getTransformerFromModel(this._vScaler),h=Math.max(r.series.baseLineValue||0,this._vScaler.bounds.lower),l=o(h),u=this.events(),c=this.getBarProperties();this._mainShapes=[],this._animationInfos=[];var m=this.extractValues(this._hScaler);m=this.rearrangeValues(m,o,l);for(var p=this.series.length-1;p>=0;--p){var f=this.series[p];if(this.dirty||f.dirty){f.cleanGroup();var g=r.next("column",[this.opt,f]),v=new Array(f.data.length);a=f.group;for(var _=e.some(f.data,(function(t){return"number"==typeof t||t&&!t.hasOwnProperty("x")})),x=_?Math.max(0,Math.floor(this._hScaler.bounds.from-1)):0,y=_?Math.min(f.data.length,Math.ceil(this._hScaler.bounds.to)):f.data.length,S=x;S<y;++S){var b=f.data[S];if(null!=b){var M,C=this.getValue(b,S,p,_),j=m[p][S];if(this.opt.styleFunc||"number"!=typeof b){var w="number"!=typeof b?[b]:[];this.opt.styleFunc&&w.push(this.opt.styleFunc(b)),M=r.addMixin(g,"column",w,!0)}else M=r.post(g,"column");if(c.width>=1){var P={x:i.l+s(C.x+.5)+c.gap+c.thickness*this._getXShift(p,r),y:t.height-i.b-l-Math.max(j,0),width:c.width,height:Math.abs(j)},E=this._drawColumn(a,b,P,M,t,i,f,l,S),V=E.shape;if(r.series.isEditMode&&(V.rawNode.style.cursor="pointer"),V.value=b,this._mainShapes.push(V),P=E.rect,u){var z={element:"column",index:S,run:f,shape:V,cx:C.x+.5,cy:C.y,x:_?S:f.data[S].x,y:_?f.data[S]:f.data[S].y};this._connectEvents(z),v[S]=z}if(this.createLabel(a,b,P,M,t,i,h),this.animate){var B={shape:V,voffset:t.height-i.b-l,vsize:j};this._animationInfos.push(B),this._animateColumn(B)}}}}this._eventSeries[f.name]=v,f.dirty=!1}else r.skip(),this._reconnectEvents(f.name)}return this._renderLabels(M,t,i,a),this.dirty=!1,this}},getMainShapes:function(){return this._mainShapes},_drawColumn:function(t,e,i,a,r,s,n,o,h){},getValue:function(t,e,i,a){var r,s;return a?(r="number"==typeof t?t:t.y,s=e):(r=t.y,s=t.x-1),{x:s,y:r}},extractValues:function(t){for(var i=[],a=this.series.length-1;a>=0;--a){var r=this.series[a];if(this.dirty||r.dirty){var s=e.some(r.data,(function(t){return"number"==typeof t||t&&!t.hasOwnProperty("x")})),n=s?Math.max(0,Math.floor(t.bounds.from-1)):0,o=s?Math.min(r.data.length,Math.ceil(t.bounds.to)):r.data.length,h=i[a]=[];h.min=n,h.max=o;for(var l=n;l<o;++l){var u=r.data[l];h[l]=this.isNullValue(u)?0:"number"==typeof u?u:u.y}}}return i},rearrangeValues:function(t,e,i){for(var a=0,r=t.length;a<r;++a){var s=t[a];if(s)for(var n=s.min,o=s.max;n<o;++n){var h=s[n];s[n]=this.isNullValue(h)?0:e(h)-i}}return t},getBarProperties:function(){var t=this._getClusterSize(),e=s.calculateBarSize(this._hScaler.bounds.scale,this.opt,t);return{gap:e.gap,width:e.size,thickness:e.size,clusterSize:t}},_getClusterSize:function(){var t=this.series.length;return this.chart.theme.series.renderColumnBarsInOppositeDirections?Math.round(t/2):t},_getXShift:function(t,e){return e.series.renderColumnBarsInOppositeDirections&&t>=this.series.length/2?t-this.series.length/2:t}})}));