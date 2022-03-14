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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/sniff","dojox/charting/plot2d/Grid"],(function(t,i,e){var s=function(t,i){return t.value-i.value};return t(e,{xOffset:0,yOffset:0,xHasHalfTickOffset:!1,yHasHalfTickOffset:!1,baseLineValue:0,optionalParams:{majorHLine:{},minorHLine:{},majorVLine:{},minorVLine:{},hFill:{},vFill:{},hAlternateFill:{},vAlternateFill:{},baseLineVertical:!1,baseLine:{}},render:function(t,e){this.baseLineValue=this.baseLineValue||0,this.dirty=!0,this.cleanGroup();var s,r,a,h,n=this.getGroup(),o=this.chart.theme;if(i("ios")&&i("ios")<6||i("android")||i("safari")&&!i("ios")){var l=Math.max(0,t.width-e.l-e.r),f=Math.max(0,t.height-e.t-e.b);n.createRect({x:e.l,y:e.t,width:l,height:f})}if(this._vAxis){r=this._vAxis.getTicks();var u=this._vAxis.getScaler();r&&u&&(a={ticks:r,vScaler:u,vt:u.scaler.getTransformerFromModel(u)})}if(this._hAxis){r=this._hAxis.getTicks();var c=this._hAxis.getScaler();r&&c&&(h={ticks:r,hScaler:c,ht:c.scaler.getTransformerFromModel(c)})}return a&&this.opt.hStripes&&this._renderHRect(a.ticks,o.grid,t,e,a.vScaler,a.vt),h&&this.opt.vStripes&&this._renderVRect(h.ticks,o.grid,t,e,h.hScaler,h.ht),a&&(this.opt.hMinorLines&&(s=this.opt.minorHLine||o.grid&&o.grid.minorLine||o.axis.minorTick,this._renderHLines(a.ticks.minor,s,t,e,a.vScaler,a.vt)),this.opt.hMajorLines&&(s=this.opt.majorHLine||o.grid&&o.grid.majorLine||o.axis.majorTick,this._renderHLines(a.ticks.major,s,t,e,a.vScaler,a.vt))),h&&(this.opt.vMinorLines&&(s=this.opt.minorVLine||o.grid&&o.grid.minorLine||o.axis.minorTick,this._renderVLines(h.ticks.minor,s,t,e,h.hScaler,h.ht)),this.opt.vMajorLines&&(s=this.opt.majorVLine||o.grid&&o.grid.majorLine||o.axis.majorTick,this._renderVLines(h.ticks.major,s,t,e,h.hScaler,h.ht))),this.xOffset>0&&this._renderOffsetVLine(t,e),this.dirty=!1,this},_getTickOffset:function(t,i,e){var s=0;return t.length>=2?s=Math.abs(i(t[0].value)-i(t[1].value)):t.length&&(s=Math.abs(i(t[0].value))),(e?this.yHasHalfTickOffset:this.xHasHalfTickOffset)?s/2:0},_renderHLines:function(t,i,e,s,r,a){var h=this._getTickOffset(t,a,!0);this.opt.baseLineVertical||h||(t=t.filter((function(t){return t.value!==this.baseLineValue}),this));var n=this.getGroup();function o(t,i,h){if(this.opt.renderOnAxis||t.value!==(this._vAxis.opt.leftBottom?r.bounds.from:r.bounds.to)){var o=e.height-s.b-a(t.value),l=this.createLine(n,{x1:s.l+this.xOffset,y1:o+h,x2:e.width-s.r,y2:o+h}).setStroke(i);this.animate&&this._animateGrid(l,"h",s.l,s.r+s.l-e.width)}}t.forEach((function(t){o.call(this,t,i,h)}),this),this.opt.baseLineVertical||o.call(this,{value:this.baseLineValue},this.opt.baseLine||i,0)},_renderVLines:function(t,i,e,s,r,a){var h=this._getTickOffset(t,a,!1);this.opt.baseLineVertical&&!h&&(t=t.filter((function(t){return t.value!==this.baseLineValue}),this));var n=this.getGroup();function o(t,i,h){if(this.opt.renderOnAxis||t.value!==(this._hAxis.opt.leftBottom?r.bounds.from:r.bounds.to)){var o=s.l+a(t.value),l=this.createLine(n,{x1:o+h,y1:s.t+this.yOffset,x2:o+h,y2:e.height-s.b}).setStroke(i);this.animate&&this._animateGrid(l,"v",e.height-s.b,e.height-s.b-s.t)}}t.forEach((function(t){o.call(this,t,i,h)}),this),this.opt.baseLineVertical&&o.call(this,{value:this.baseLineValue},this.opt.baseLine||i,0)},_renderHRect:function(t,i,e,r,a,h){var n,o,l,f,u,c=this._getTickOffset(t.major,h,!0),v=t.major.slice();v.sort(s),c&&(v.unshift({value:v[0].value-this._vAxis.opt.majorTickStep}),v.unshift({value:v[0].value-this._vAxis.opt.majorTickStep})),v[0].value>a.bounds.from&&v.unshift({value:a.bounds.from}),v[v.length-1].value<a.bounds.to&&v.push({value:a.bounds.to});for(var d=this.getGroup(),m=0;m<v.length-1;m++)o=v[m],l=e.height-r.b-h(o.value),f=e.height-r.b-h(v[m+1].value),(n=m%2!=0?this.opt.hAlternateFill||i&&i.alternateFill:this.opt.hFill||i&&i.fill)&&(u=this.createRect(d,{x:r.l+this.xOffset,y:f-c,width:e.width-r.r,height:l-f}).setFill(n),this.animate&&this._animateGrid(u,"h",r.l,r.r+r.l-e.width))},_renderVRect:function(t,i,e,r,a,h){var n,o,l,f,u,c=this._getTickOffset(t.major,h,!1),v=t.major.slice();v.sort(s),c&&(v.unshift({value:v[0].value-this._hAxis.opt.majorTickStep}),v.unshift({value:v[0].value-this._hAxis.opt.majorTickStep})),v[0].value>a.bounds.from&&v.unshift({value:a.bounds.from}),v[v.length-1].value<a.bounds.to&&v.push({value:a.bounds.to});for(var d=this.getGroup(),m=0;m<v.length-1;m++)o=v[m],l=r.l+h(o.value),f=r.l+h(v[m+1].value),(n=m%2!=0?this.opt.vAlternateFill||i&&i.alternateFill:this.opt.vFill||i&&i.fill)&&(u=this.createRect(d,{x:l+c,y:r.t+this.yOffset,width:f-l,height:e.width-r.r}).setFill(n),this.animate&&this._animateGrid(u,"v",e.height-r.b,e.height-r.b-r.t))},_renderOffsetVLine:function(t,i){var e=this.chart.theme,s=this.opt.majorVLine||e.grid&&e.grid.majorLine||e.axis.majorTick,r=this.getGroup();this.createLine(r,{x1:i.l+this.xOffset,y1:i.t,x2:i.l+this.xOffset,y2:t.height-i.b}).setStroke(s)}})}));