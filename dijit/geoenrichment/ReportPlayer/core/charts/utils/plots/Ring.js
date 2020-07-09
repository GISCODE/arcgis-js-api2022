// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/declare","dojox/charting/plot2d/Base","dojox/charting/plot2d/_PlotEvents","dojox/charting/plot2d/common","dojox/gfx/matrix","dojox/lang/functional","dojox/lang/utils","./animation/_RingAnimation","./labelsRendering/LabelsUtil"],(function(t,e,n,i,s,r,a,o,h,l){var u=function(t,e,n,i,s,r,a,o,h){var l=function(o){var h=i;function l(i,s,a,o){var h=r-(o&&o.width||0),l=e+h/2,u=s-i,c=n.cx+l*Math.cos(i),d=n.cy+l*Math.sin(i),f=n.cx+l*Math.cos(s),x=n.cy+l*Math.sin(s),p=l-h,b=n.cx+p*Math.cos(i),m=n.cy+p*Math.sin(i),y=n.cx+p*Math.cos(s),v=n.cy+p*Math.sin(s);return t.createPath().moveTo(b,m).lineTo(c,d).arcTo(l,l,0,u>Math.PI,!0,f,x).lineTo(y,v).arcTo(p,p,0,u>Math.PI,!1,b,m).closePath().setFill(a).setStroke(o)}o<0?(h+=2*Math.PI*o,o=Math.abs(o)):o>=0&&o<.001&&(o=.001);var u={cx:n.cx,cy:n.cy,r:e},c=h+2*o*Math.PI,d=c,f=h+2*Math.PI,x=a.series.stroke||{};return{bgShape:l(d,f,a.series.ringBackgroundColor||"#DDDDDD"),shape:l(h,c,s,x),end:c,ac:u}};return h.push({sliceIndex:o,func:l}),l};return e([n,i,h],{_animationInfos:null,defaultParams:{labels:!0,ticks:!1,fixed:!0,precision:1,labelOffset:20,labelStyle:"default",radGrad:"native",fanSize:5,startAngle:0,animate:null},optionalParams:{radius:0,omitLabels:!1,labelFunc:null,stroke:{},outline:{},shadow:{},fill:{},filter:{},styleFunc:null,font:"",fontColor:"",labelWiring:{}},_lastRenderResults:null,constructor:function(e,n){this.opt=t.clone(this.defaultParams),o.updateWithObject(this.opt,n),o.updateWithPattern(this.opt,n,this.optionalParams),this.axes=[],this.run=null,this.dyn=[],this.runFilter=[]},clear:function(){return this.inherited(arguments),this.dyn=[],this.run=null,this},setAxis:function(t){return this},addSeries:function(t){return this.run=t,this},getSeriesStats:function(){return t.delegate(s.defaultStats)},getRequiredColors:function(){return this.run?this.run.data.length:0},getRenderResults:function(){return this._lastRenderResults},render:function(t,e){if(!this.dirty)return this;this.resetEvents(),this.dirty=!1,this._eventSeries={},this.cleanGroup();var n=this.group,i=this.chart.theme;if(!this.run||!this.run.data.length)return this;var s,o,h=(t.width-e.l-e.r)/2,c=(t.height-e.t-e.b)/2,d=Math.min(h,c),f=("font"in this.opt?this.opt.font:i.series.dataLabelsFont,r._degToRad(90)),x=this.events(),p=this.run.data.map((function(t,e){return"number"!=typeof t&&t.hidden&&(this.runFilter.push(e),t.hidden=!1),this.runFilter.some((function(t){return t===e}))?"number"==typeof t?0:{y:0,text:t.text}:t}),this);this.dyn=[],"radius"in this.opt&&(d=this.opt.radius);var b={cx:e.l+h,cy:e.t+c,r:d},m=0;s=[],p.forEach((function(t){s.push(t.y),m+=Math.abs(t.y)})),s=s.map((function(t){return 0===m?0:t/m})),this.opt.labels&&(o=s.map((function(t,e){return l.getLabelInfo(this,p[e],i,{forceOneLine:!0,minSpace:20})}),this));var y=a.map(p,(function(t,e){var n=[this.opt,this.run];return null!=t&&"number"!=typeof t&&n.push(t),this.opt.styleFunc&&n.push(this.opt.styleFunc(t)),i.next("slice",n,!0)}),this),v=0;if(this.opt.labels){o.forEach((function(t){v=Math.max(v,t.box.w)}));var g=b.cx+d+v+e.r-t.width;if(g>0){var M=b.cx-d;if(M>g)b.cx-=g;else{var L=(g-M)/2;b.cx-=M+L,d-=L}}}var P=2*d+v;b.cx-=b.cx-d-(t.width-P)/2;var _=new Array(s.length),S=Math.min(d/10,.5*d/s.length),w=d;d-=S/2;var R=[],I=[];this._animationInfos=[],s.some((function(t,e){var s,r,a=p[e],o=y[e];s=o.series.fill;var h=u(n,d,b,f,s,S,o,e,this._animationInfos)(t),l=h.shape;return i.series.isEditMode&&(l.rawNode.style.cursor="pointer"),I.push(h.ac),this.dyn.push({fill:s,stroke:o.series.stroke}),x&&(r={element:"slice",index:e,run:this.run,shape:l,x:e,y:"number"==typeof a?a:a.y,cx:b.cx,cy:b.cy,cr:d},this._connectEvents(r),_[e]=r),R.push({x:b.cx,y:b.cy+d}),d-=S+3,!1}),this),this.opt.labels&&(R.forEach((function(t,e){var s=o[e];n.createPath().moveTo(t.x-5,t.y).lineTo(t.x+w-5,t.y).setStroke(i.series.labelWiring);this.renderLabel({x:t.x+w,y:t.y-s.box.h/2,text:s.getText({forceOneLine:!0,spaceToWidth:v})})}),this),i.series.show100PercentLabel&&this._show100PercentLabel(i,d,b));var T=0;return this._eventSeries[this.run.name]=a.map(p,(function(t){return t<=0?null:_[T++]})),this._lastRenderResults={labels:this.opt.labels,slicePies:I,maxLabelWidth:v},this.opt.animate&&this._renderAnimation(n,s),this},_show100PercentLabel:function(t,e,n){var i=l.getSimpleLabelInfo({text:"100%",font:t.series.dataLabelsFont,fontSize:Math.min(50,.6*e),fontColor:t.series.dataLabelsColor});this.renderLabel({x:n.cx-i.box.w/2,y:n.cy-i.box.h/2,text:i.text}).style.opacity="0.5"},renderLabel:function(t){var e=l.renderHTMLLabel(this.chart,t.x,t.y,t.text);return this.htmlElements.push(e),e}})}));