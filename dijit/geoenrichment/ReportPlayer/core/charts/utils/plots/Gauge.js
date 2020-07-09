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

define(["dojo/_base/declare","dojox/gfx","dojox/gfx/matrix","./Donut","./animation/_GaugeAnimation","./labelsRendering/LabelsUtil","./supportClasses/GaugeLabelPlacements","esri/dijit/geoenrichment/utils/ObjectUtil"],(function(e,t,a,o,n,i,s,r){var l={INSIDE_LABEL_DEFAULT_FONT_SIZE:30,OUTSIDE_LABEL_DEFAULT_FONT_SIZE:30,FROM_TO_LABEL_DEFAULT_FONT_SIZE:20,getMainLabelInfo:function(e,t,a,o,n,i,r){var l=r?e[0].tooltip.formatFunc(e[0].tooltip.value*r.progress):e[0].tooltip.valueLabel;return t.series.gaugeMainLabelPosition===s.INSIDE?this._getMainLabelInfoInside(e,t,a,o,l,r):this._getMainLabelInfoOutside(e,t,a,o,n,i,l,r)},_getMainLabelInfoInside:function(e,a,o,n,s,r){var u=o*((a.series.donutHolePercent||0)/100)*1.5;a.series.donutShowIcons&&(u/=2);var g,h=a.series.gaugeMainLabelFont||a.series.dataLabelsFont;g=a.series.gaugeMainLabelFontColorFromConditionalStyling?e[0].fill:a.series.gaugeMainLabelFontColor||a.series.dataLabelsColor;var c=r&&r.fontSize||function(){var e=l.INSIDE_LABEL_DEFAULT_FONT_SIZE;if(a.series.gaugeMainLabelFontSize)return a.series.gaugeMainLabelFontSize;h=h.replace(/\s\w*px/," "+e+"px");var o=t._base._getTextBox(s,{font:h}),n=Math.max(o.w,o.h);return Math.min(100,Math.max(30,e*u/n))}(),b=i.getSimpleLabelInfo({text:s,font:h,fontSize:c,fontColor:g,textDecoration:a.series.gaugeMainLabelTextDecoration}),L=n.cx-b.box.w/2,f=n.cy-b.box.h/2,x=0;if(a.series.donutShowIcons){var _=a.series.donutArcPercent/100;x=-u/(1.25-(1-_)),f=n.cy+b.box.h*(1.75*_-1)}else 50===a.series.donutArcPercent&&(f=n.cy-b.box.h/1.2);return{iconSize:u,iconShift:x,x:L,y:f,text:b.text,fontSize:c}},_getMainLabelInfoOutside:function(e,t,o,n,s,r,l,u){var g,h=t.series.gaugeMainLabelFont||t.series.dataLabelsFont;g=t.series.gaugeMainLabelFontColorFromConditionalStyling?e[0].fill:t.series.gaugeMainLabelFontColor||t.series.dataLabelsColor;var c=u&&u.fontSize||t.series.gaugeMainLabelFontSize||this.OUTSIDE_LABEL_DEFAULT_FONT_SIZE,b=i.getSimpleLabelInfo({text:l,font:h,fontColor:g,fontSize:c,textDecoration:t.series.gaugeMainLabelTextDecoration}),L=a._degToRad(r),f=L+2*s*Math.PI,x=t.series.gaugeShowArrowIndicator?f:(L+f)/2,_=n.cx+(o+10)*Math.cos(x)-(b.box.w/2-b.box.w/2*Math.cos(x)),M=n.cy+(o+10)*Math.sin(x)-(b.box.h/2-b.box.h/2*Math.sin(x)),S=0;return pushY=0,_<n.cx-o?S=n.cx-o-_:_+b.box.w>n.cx+o&&(S=n.cx+o-(_+b.box.w)),M<n.cy-o?pushY=n.cy-o-M:M+b.box.h>n.cy+o&&(pushY=n.cy+o-(M+b.box.h)),{x:_,y:M,pushX:S,pushY:pushY,text:b.text,fontSize:c}},getFromLabelInfo:function(e,t,o,n,s,l,u,g){var h=i.getSimpleLabelInfo({text:r.formatNumber(g),font:t.series.gaugeFromLabelFont||t.series.dataLabelsFont,fontColor:t.series.gaugeFromLabelFontColor||t.series.dataLabelsColor,fontSize:t.series.gaugeFromLabelFontSize||this.FROM_TO_LABEL_DEFAULT_FONT_SIZE,textDecoration:t.series.gaugeFromLabelTextDecoration}),c=a._degToRad(l),b=s.cx+o*Math.cos(c)+(o-n-h.box.w)/2,L=s.cy+o*Math.sin(c),f=t.series.donutArcPercent<55?0:-h.box.h,x=0;return t.series.donutArcPercent>65?x=0:b<s.cx-o&&(x=s.cx-o-b),{x:b,y:L,pushX:x,pushY:f,text:h.text}},getToLabelInfo:function(e,t,o,n,s,l,u,g){var h=i.getSimpleLabelInfo({text:r.formatNumber(g),font:t.series.gaugeToLabelFont||t.series.dataLabelsFont,fontColor:t.series.gaugeToLabelFontColor||t.series.dataLabelsColor,fontSize:t.series.gaugeToLabelFontSize||this.FROM_TO_LABEL_DEFAULT_FONT_SIZE,textDecoration:t.series.gaugeToLabelTextDecoration}),c=a._degToRad(l)+2*u*Math.PI,b=s.cx+o*Math.cos(c)-h.box.w+(h.box.w-(o-n))/2,L=s.cy+o*Math.sin(c),f=t.series.donutArcPercent<55?0:-h.box.h,x=0;return t.series.donutArcPercent>65?x=0:b+h.box.w>s.cx+o&&(x=s.cx+o-(b+h.box.w)),{x:b,y:L,pushX:x,pushY:f,text:h.text}}},u=function(e,t,a,o,n,i,s,r){var u,g=function(n,r){r&&(u=u||l.getMainLabelInfo(t,a,o,i,n,s).fontSize,r.fontSize=u);var g=l.getMainLabelInfo(t,a,o,i,n,s,r);return{labelInfo:g,element:e.renderLabel(g)}};return r&&r.push({isLabel:!0,func:g}),g},g=function(e,t,a,o,n,i,s,r,u){var g=l.getFromLabelInfo(t,a,o,n,i,s,r,u);return{labelInfo:g,element:e.renderLabel(g)}},h=function(e,t,a,o,n,i,s,r,u){var g=l.getToLabelInfo(t,a,o,n,i,s,r,u);return{labelInfo:g,element:e.renderLabel(g)}},c=function(e,t,o,n,i,s){var r=function(s){var r=a._degToRad(i)+2*s*Math.PI,l=[];return l.push({x:n.cx+5*Math.cos(r+Math.PI/2),y:n.cy+5*Math.sin(r+Math.PI/2)}),l.push({x:n.cx+5*Math.cos(r+Math.PI),y:n.cy+5*Math.sin(r+Math.PI)}),l.push({x:n.cx+5*Math.cos(r-Math.PI/2),y:n.cy+5*Math.sin(r-Math.PI/2)}),l.push({x:n.cx+o*Math.cos(r),y:n.cy+o*Math.sin(r)}),{shape:e.createPath().moveTo(l[0].x,l[0].y).lineTo(l[1].x,l[1].y).lineTo(l[2].x,l[2].y).lineTo(l[3].x,l[3].y).lineTo(l[0].x,l[0].y).setStroke(t.series.gaugeArrowIndicatorLineColor).setFill(t.series.gaugeArrowIndicatorFillColor)}};return s.push({isArrow:!0,func:r}),r};return e([o,n],{startAngleOffset:-90,_preprocessParams:function(e,t,a,o,n,i,r,u){if(t.series.gaugeMainLabelPosition===s.OUTSIDE){var g=l.getMainLabelInfo(e,t,a,r,this._getSliceValueAt(u,0,t),this._getStartAngle(t)),h=a;n-=Math.abs(g.pushX/2),i-=Math.abs(g.pushY/2),a=Math.min(n,i),a=Math.max(a,h/2),r.cx+=g.pushX/2,r.cy+=g.pushY/2,this._lastRenderResults.chartShiftX=g.pushX/2,this._lastRenderResults.chartShiftY=g.pushY/2}if(t.series.gaugeShowFromToLabels){var c=l.getFromLabelInfo(e,t,a,o,r,this._getStartAngle(t),this._getSliceValueAt(u,0,t),t.series.gaugeFromLabelValue),b=l.getToLabelInfo(e,t,a,o,r,this._getStartAngle(t),this._getSliceValueAt(u,0,t)+(this._getSliceValueAt(u,1,t)||0),t.series.gaugeToLabelValue),L=(Math.abs(c.pushX)+Math.abs(b.pushX))/2,f=Math.max(Math.abs(c.pushY),Math.abs(b.pushY))/2;h=a;n-=L,i-=f,a=Math.min(n,i),a=Math.max(a,h/2),r.cy-=f,this._lastRenderResults.chartShiftY=-f}return{circle:r,r:a}},_renderAdditionalElements:function(e,t,a,o,n,i,s){this._lastRenderResults.ryMultiplier=this._getRYMultiplier(a),this._renderGaugeDataLabel(e,a,o,n,i,s),this._renderGaugeFromToLabels(e,a,o,n,i,s),this._renderGaugeArrowIndicator(e,t,a,o,n,i,s)},gaugeLabelElement:null,_renderGaugeDataLabel:function(e,t,a,o,n,i){if(t.series.gaugeMainLabelPosition!==s.NONE){var r=u(this,e,t,a,o,n,this._getStartAngle(t),this._animationInfos)(this._getSliceValueAt(i,0,t));this.gaugeLabelElement=r.element,t.series.gaugeMainLabelPosition===s.INSIDE&&(this._lastRenderResults.maxIconSize=r.labelInfo.iconSize,this._lastRenderResults.chartIconOffset=r.labelInfo.iconShift)}},gaugeFromLabelElement:null,gaugeToLabelElement:null,_renderGaugeFromToLabels:function(e,t,a,o,n,i){if(t.series.gaugeShowFromToLabels){var s=g(this,e,t,a,o,n,this._getStartAngle(t),this._getSliceValueAt(i,0,t),t.series.gaugeFromLabelValue);this.gaugeFromLabelElement=s.element;s=h(this,e,t,a,o,n,this._getStartAngle(t),this._getSliceValueAt(i,0,t)+(this._getSliceValueAt(i,1,t)||0),t.series.gaugeToLabelValue);this.gaugeToLabelElement=s.element}},_renderGaugeArrowIndicator:function(e,t,a,o,n,i,s){a.series.gaugeShowArrowIndicator&&c(t,a,o,i,this._getStartAngle(a),this._animationInfos)(this._getSliceValueAt(s,0,a))}})}));