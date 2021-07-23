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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["../kernel","../numberUtils","../renderers/utils","../dijit/RendererSlider","../dijit/RendererSlider/sliderUtils","../Color","dijit/_TemplatedMixin","dijit/_WidgetBase","dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/debounce","dojo/dom-style","dojo/Evented","dojo/has","dojox/gfx","dojo/text!./ClassedSizeSlider/templates/ClassedSizeSlider.html"],(function(i,t,s,e,a,h,o,n,r,l,u,m,d,c,f,_,g){var p=l([n,o,c],{declaredClass:"esri.dijit.ClassedSizeSlider",baseClass:"esriClassedSizeSlider",templateString:g,breakInfos:null,histogram:null,handles:[],showHistogram:!0,showStatistics:!0,showLabels:!0,showTicks:!0,showHandles:!0,classificationMethod:null,normalizationType:null,histogramWidth:100,rampWidth:26,_rampNode:null,_sliderHeight:null,_colorRampSurface:null,_histogramSurface:null,_surfaceRect:null,_barsGroup:null,_updateTimer:null,constructor:function(i,t){t&&(this.breakInfos=u.clone(i.breakInfos),this.set("values",this._getHandleInfo(this.breakInfos)),this._updateTimeout=m(this._updateTimeout,0))},postCreate:function(){this.inherited(arguments),this._setupDataDefaults()},startup:function(){this.inherited(arguments),this._slider=new e({type:"ClassedSizeSlider",values:this.values,minimum:this.minValue,maximum:this.maxValue,showLabels:this.showLabels,showTicks:this.showTicks,showHandles:this.showHandles,classificationMethod:this.classificationMethod,normalizationType:this.normalizationType},this._sliderNode),this._slider.startup(),this._rampNode=this._slider._sliderAreaRight,this._sliderHeight=d.get(this._rampNode,"height")||155,this._createSVGSurfaces(),this._slider.on("slide",u.hitch(this,(function(i){this.classificationMethod=null,this._updateBreakInfos(i.values),this._updateBreakInfoLabels(),this._fillRamp(),this.emit("data-change",{minValue:this.minValue,maxValue:this.maxValue,breakInfos:u.clone(this.breakInfos)})}))),this._slider.on("handle-value-change",u.hitch(this,(function(i){this.classificationMethod=null,this._updateBreakInfos(i.values),this._updateBreakInfoLabels(),this._fillRamp();var t=u.clone(this.breakInfos);this.emit("data-change",{minValue:this.minValue,maxValue:this.maxValue,breakInfos:t}),this.emit("handle-value-change",t)}))),this._slider.on("data-value-change",u.hitch(this,(function(i){this.classificationMethod=null,this.breakInfos[0].minValue=i.min,this.breakInfos[this.breakInfos.length-1].maxValue=i.max,this.set({minValue:i.min,maxValue:i.max}),this._updateBreakInfoLabels(),this._updateRendererSlider();var t={minValue:this.minValue,maxValue:this.maxValue,breakInfos:u.clone(this.breakInfos)};this.emit("data-change",t),this.emit("data-value-change",t)}))),this._slider.on("stop",u.hitch(this,(function(i){this.emit("handle-value-change",u.clone(this.breakInfos))}))),this.histogram&&this.showHistogram&&this._generateHistogram(),this.statistics&&this.showStatistics&&this._generateStatistics(),this.watch("breakInfos",this._updateTimeout),this.watch("handles",this._updateTimeout),this.watch("statistics",this._updateTimeout),this.watch("showHandles",this._updateTimeout),this.watch("showLabels",this._updateTimeout),this.watch("showTicks",this._updateTimeout),this.watch("histogram",this._showHistogram),this.watch("showHistogram",this._toggleHistogram)},destroy:function(){this.inherited(arguments),this._slider&&this._slider.destroy(),this._avgHandleObjs&&this._avgHandleObjs.avgHandleTooltip&&this._avgHandleObjs.avgHandleTooltip.destroy(),this.countTooltips&&r.forEach(this.countTooltips,(function(i){i.destroy()}))},_updateTimeout:function(){this._updateRendererSlider()},_updateRendererSlider:function(){this.set({minValue:this.breakInfos[0].minValue,maxValue:this.breakInfos[this.breakInfos.length-1].maxValue}),this._slider.set({minimum:this.minValue,maximum:this.maxValue,values:this._getHandleInfo(this.breakInfos),handles:this.handles}),this._slider._reset(),this._slider._updateRoundedLabels(),this._slider._generateMoveables(),this._clearRect(),this._createSVGSurfaces(),this.histogram&&this.showHistogram&&this._generateHistogram(),this.statistics&&this.showStatistics&&this._generateStatistics()},_getHandleInfo:function(i){var t,s=[];for(t=0;t<i.length-1;t++)s.push(i[t].maxValue);return s},_updateBreakInfos:function(i){var t,e=this.breakInfos;for(s.updateClassBreak({classBreaks:e,normalizationType:this.normalizationType,classificationMethod:this.classificationMethod,change:i}),t=0;t<i.length;t++)e[t].maxValue=i[t],e[t+1]&&(e[t+1].minValue=i[t])},_updateBreakInfoLabels:function(){var i=this.breakInfos,t=this.classificationMethod,e=this.normalizationType;s.setLabelsForClassBreaks({classBreaks:i,normalizationType:e,classificationMethod:t,round:!0})},_setupDataDefaults:function(){null!==this.breakInfos&&this.breakInfos.length>1?this.set({minValue:this.breakInfos[0].minValue,maxValue:this.breakInfos[this.breakInfos.length-1].maxValue}):null!==this.breakInfos&&1===this.breakInfos.length?this.set({minValue:this.breakInfos[0].minValue,maxValue:this.breakInfos[0].maxValue}):(this.set({minValue:0,maxValue:100,breakInfos:[{minValue:0,maxValue:20},{minValue:20,maxValue:80},{minValue:80,maxValue:100}]}),this.set("values",this._getHandleInfo(this.breakInfos)),this._updateBreakInfoLabels())},_createSVGSurfaces:function(){this._colorRampSurface=_.createSurface(this._rampNode,this.rampWidth,this._sliderHeight),this._surfaceRect=this._colorRampSurface.createRect({width:this.rampWidth,height:this._sliderHeight}),this._histogramSurface=a.generateHistogramSurface(this._rampNode,this.histogramWidth,this._sliderHeight,this.rampWidth),this._fillRamp()},_clearRect:function(){this._colorRampSurface.destroy(),this._histogramSurface.destroy()},_fillRamp:function(){var i,t,s,e=this.breakInfos,a=this._slider,o=this._sliderHeight,n=[];(n=r.map(e,(function(i){return[o-Math.round((i.minValue-a.minimum)/(a.maximum-a.minimum)*o),o-Math.round((i.maxValue-a.minimum)/(a.maximum-a.minimum)*o)]}))).reverse(),this._colorRampSurface.clear(),i=this.rampWidth/e.length,t=this.rampWidth,s=this._colorRampSurface.createPath().moveTo(t,0),r.forEach(n,u.hitch(this,(function(e,a){s.lineTo(t,e[0]),t=this.rampWidth-i*(a+1),s.lineTo(t,e[0])}))),s.lineTo(1,o).lineTo(0,o).lineTo(0,0).closePath().setFill(new h([0,121,193,.8]))},_showHistogram:function(){this.histogram?this._generateHistogram():this._barsGroup&&(this._barsGroup.destroy(),this._barsGroup=null)},_toggleHistogram:function(){this.showHistogram?(d.set(this._barsGroup.rawNode,"display","inline-block"),this._showHistogram()):d.set(this._barsGroup.rawNode,"display","none")},_generateHistogram:function(){this._barsGroup=a.generateHistogram(this._histogramSurface,this.histogram,this.histogramWidth,this.rampWidth,this.isLeftToRight()),this.countTooltips=a.generateCountTooltips(this.histogram,this._barsGroup)},_generateStatistics:function(){if(!(this.statistics.count<2||isNaN(this.statistics.avg))){var i,s,e,h,o=this.statistics,n=this._slider,r=a.getPrecision(this.maxValue);o.min===o.max&&o.min===o.avg?(s=0,e=2*o.avg):(s=o.min,e=o.max),s===n.minimum&&e===n.maximum||(s=n.minimum,e=n.maximum),h=this._sliderHeight*(e-o.avg)/(e-s),i=t.round([o.avg,e,s])[0],this._avgHandleObjs=a.generateAvgLine(this._histogramSurface,i,h,r,this.isLeftToRight())}}});return f("extend-esri")&&u.setObject("dijit.ClassedSizeSlider",p,i),p}));