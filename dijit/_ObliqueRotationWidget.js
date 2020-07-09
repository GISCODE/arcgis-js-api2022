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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../lang","./_EventedWidget","dijit/_Widget","dijit/_TemplatedMixin","dojo/text!./templates/_ObliqueRotationWidget.html","dojo/_base/html","dojo/on","dojox/dgauges/CircularGauge","./ObliqueViewer/OVCircularScale","dojox/dgauges/CircularRangeIndicator","./ObliqueViewer/OVCircularValueIndicator","dojox/dgauges/LinearScaler","dojo/dom-geometry","dojo/dom-construct","dojo/i18n!../nls/jsapi","dojo/dom-style","dojo/query","dojo/dom-attr"],(function(t,i,e,a,n,s,o,h,r,d,u,l,c,g,_,m,f,z,A,p,b,v,N){var I=t([o,h,r],{baseClass:"esriObliqueRotationWidget",declaredClass:"esri.dijit._ObliqueRotationWidget",templateString:d,azimuthAngle:0,azimuthChangeThreshold:10,azimuthField:"SensorAzimuth",isNadir:!1,_rangeIndicatorWidth:8,constructor:function(t,e){i.mixin(this,t),this._i18n=p,this.isNadir=!s.isDefined(this.azimuthAngle)},postCreate:function(){this.inherited(arguments),this._coords=this.domNode.getBoundingClientRect(),this._computeCircleRadius(),this._getCenter(),this.refresh()},startup:function(){this.inherited(arguments),this._setupGauge(),this._addTooltips()},_getFontWeight:function(t){return t>=120?"bold":"normal"},_getFontSize:function(t){return t>=120?10:7},labelGap:5,resize:function(t){t=t||Math.min(this.domNode.getBoundingClientRect().height,this.domNode.getBoundingClientRect().width);this._getFontSize(t);var i=this._getFontWeight(t);this._gauge.resize(t,t),this._gauge.set("font",{family:"Helvetica",style:"normal",size:"10pt",color:"black",weight:i}),this._scale.set("labelGap",this.labelGap),this._addTooltips()},_setupGauge:function(){var t=this,e=Math.min(this._coords.height,this._coords.width);this._gauge=new c({value:0,font:{family:"Helvetica",style:"normal",size:this._getFontSize(e)+"pt",color:"black",weight:this._getFontWeight(e)},style:"margin: -2px;"},this.gaugeNode),this._addGaugeBackground(),this._addGaugeScale(),this._addGaugeIndicators(),this._gauge.startup(),this.own(l(this._gauge.domNode,"mouseup",(function(i){t._getCenter();var e=i.pageX-t._centerLocnInPage[0],a=i.pageY-t._centerLocnInPage[1];Math.abs(e)<=10&&Math.abs(a)<=10?(t._scale.azimuthAngle=null,t._switchToNadir()):(t.azimuthAngle=t._convertAngleToAzimuthNotation(t._calculateAngleFromXY(e,a)),t._switchToOblique())}))),this.own(this._gauge.on("endEditing",i.hitch(this,(function(i){t.isNadir||(this.snap&&this._snap(),t.azimuthAngle=this._convertAngleToAzimuthNotation(i.indicator.value),t.emit("azimuth-change",{azimuth:t.azimuthAngle}))})))),this.on("azimuth-change",(function(){t.rotateGauge(),t._azimuthIndicator.azimuthAngle=t.azimuthAngle,t.textNodes=t.gaugeNode.querySelectorAll("text")}))},rotateGauge:function(){this.gaugeNode&&(this.isNadir?(this.rotateAngle=0,this._scale.azimuthAngle=null,b.set(this.gaugeNode,"transform","none")):(this.rotateAngle=this.rotateAngle||0,this.rotateAngle=Math.abs(this.rotateAngle+this.azimuthAngle)>Math.abs(this.rotateAngle-(360-this.azimuthAngle))?360-this.azimuthAngle:0-this.azimuthAngle,b.set(this.gaugeNode,"transform","rotate("+this.rotateAngle+"deg)"),this._scale.azimuthAngle=this.azimuthAngle))},_addGaugeBackground:function(){var t="M "+this._center.join(",")+"m "+(0-this._radius)+",0 a "+this._radius+","+this._radius+" 0 1,0 "+2*this._radius+",0 a "+this._radius+","+this._radius+" 0 1,0 "+(0-2*this._radius)+",0";this._gauge.addElement("background",(function(i){i.createPath({path:t}).setFill("rgba(255,255,255,0.8)").setStroke("rgba(89, 106, 114, 1)")})),this._addNadirDataIndicator()},_addNadirDataIndicator:function(){var t="M "+this._center.join(",")+"m "+-7+",0 a 7,7 0 1,0 14,0 a 7,7 0 1,0 "+-14+",0";this._gauge.addElement("nadirDataIndicator",(function(i){i.createPath({path:t}).setFill("#00BDFF").setStroke("rgba(0,0,0, 0)")}))},_addGaugeScale:function(){Math.min(this._coords.width,this._coords.height);this._scale=new g({originX:this._center[0],originY:this._center[1],radius:this._radius,startAngle:0,endAngle:359.999,orientation:"clockwise",scaler:new f({minimum:0,maximum:360,majorTickInterval:90,minorTickInterval:45}),tickShapeFunc:function(t,i,e){if(!e.isMinor)return t.createLine({x1:0,y1:0,x2:e.isMinor?15:8,y2:0}).setStroke({color:"black",width:1})},labelGap:this.labelGap,tickLabelFunc:function(t){return t.isMinor?" ":t.value%90==0?["E","S","W","N"][t.value/90]:t.value}}),this._gauge.addElement("scale",this._scale)},_addGaugeIndicators:function(){var t=new _({value:359.9999,radius:this._radius,startThickness:8,endThickness:8,fill:"rgba(0,0,0,0.6)"});this._scale.addIndicator("indicatorBg",t),this.isNadir?(this._nadirIndicator=this._createNadirIndicator(),this._scale.addIndicator("nadir_indicator",this._nadirIndicator)):(this._azimuthIndicator=this._createObliqueIndicator(),this._scale.addIndicator("azimuth_indicator",this._azimuthIndicator))},_convertAngleToAzimuthNotation:function(t){if(s.isDefined(t))return(t+90)%360},_convertAngleToGaugeNotation:function(t){if(s.isDefined(t))return(t+270)%360},_computeCircleRadius:function(){var t;return t=Math.min(this._coords.width/2,this._coords.height/2),t=Math.floor(t-2),this._radius=t,t},showAvailableData:function(t){var i=this,a=this.azimuthAngle;if(this._snap(),Math.min(Math.abs(this.azimuthAngle-a),Math.abs(Math.abs(this.azimuthAngle-a)-360))>=this.azimuthChangeThreshold&&!this.isNadir&&this.emit("azimuth-change",{azimuth:this.azimuthAngle,noDataSwitch:!0}),t=t||this.features){e.forEach(this._availableDataIndicators,(function(t){i._scale.removeIndicator(t)})),this._availableDataIndicators=[],this.features=t;var n,s=0;for(s=0;s<t.length;s++)n=new _({start:this._convertAngleToGaugeNotation(t[s].attributes[this.azimuthField]-5),value:this._convertAngleToGaugeNotation(t[s].attributes[this.azimuthField]+5),radius:this._radius,startThickness:7,endThickness:7,fill:"#00BDFF",stroke:"#00BDFF"}),this._scale.addIndicator("indicator_"+s,n),this._availableDataIndicators.push("indicator_"+s)}},refresh:function(t){i.mixin(this,t),this.showAvailableData()},_getCenter:function(){var t,i=[],e=[];return this._coords=this.gaugeNode.getBoundingClientRect(),i.push(Math.ceil(this._coords.width/2)),i.push(Math.ceil(this._coords.height/2)),t=z.position(this.gaugeNode),e.push(t.x+i[0]),e.push(t.y+i[1]),this._centerLocnInPage=e,this._center=i,i},_snap:function(){if(this._azimuthIndicator&&this.features&&this.features.length){var t,i,a=this._convertAngleToAzimuthNotation(this._azimuthIndicator.value),n=1e3;e.forEach(this.features,(function(e){(i=Math.min(Math.abs(e.attributes[this.azimuthField]-a),Math.abs(Math.abs(e.attributes[this.azimuthField]-a)-360)))<=n&&(t=e.attributes[this.azimuthField],n=i)}),this),this.azimuthAngle=t,this._azimuthIndicator.set("value",this._convertAngleToGaugeNotation(this.azimuthAngle))}},_switchToNadir:function(){this.isNadir||(this._scale.azimuthAngle=null,this._nadirIndicator=this._createNadirIndicator(),this._scale.removeIndicator("azimuth_indicator"),this._scale.addIndicator("nadir_indicator",this._nadirIndicator),this.isNadir=!0,this.emit("azimuth-change",{azimuth:null}))},_switchToOblique:function(){this.isNadir&&(this._azimuthIndicator=this._createObliqueIndicator(),this._scale.removeIndicator("nadir_indicator"),this._scale.addIndicator("azimuth_indicator",this._azimuthIndicator),this._snap(),this.isNadir=!1,this.emit("azimuth-change",{azimuth:this.azimuthAngle}))},_createNadirIndicator:function(){return new m({interactionArea:"gauge",title:"Nadir",interactionMode:"none",indicatorShapeFunc:function(t){return t.createPolyline([-7,0,7,0,0,0,0,7,0,-7]).setStroke({color:"#000000",width:1})},value:0})},_createObliqueIndicator:function(){var t=this;return new m({interactionArea:"gauge",title:"Change Azimuth",indicatorShapeFunc:function(i){return i.createPolyline([0,-1,t._radius-1,-10,t._radius-1,10,0,1,0,-1]).setFill("rgba(0, 189, 255, 0.5)").setStroke("rgba(0, 189, 255, 0.5)")},value:this._convertAngleToGaugeNotation(this.azimuthAngle),azimuthAngle:this._convertAngleToGaugeNotation(this.azimuthAngle)})},_calculateAngleFromXY:function(t,i){var e;return(e=Math.atan2(i,t))/Math.PI*180+(e>0?0:360)},_addTooltips:function(){var t,i=this,a=this.domNode.getBoundingClientRect(),n=Math.min(a.width/2,a.height/2);e.forEach(this._tooltipNodes,(function(t){this.gaugeNode.removeChild(t.node)}),this),this._tooltipNodes=[{top:0,left:n-5,direction:"north",angle:0},{top:n-5,left:2*(n-5),direction:"east",angle:90},{top:2*(n-5),left:n,direction:"south",angle:180},{top:n-5,left:0,direction:"west",angle:270},{top:n-5,left:n-5,direction:"nadir",angle:null}],e.forEach(this._tooltipNodes,(function(e){(t=A.create("div")).style.top=e.top+"px",t.style.left=e.left+"px",t.style.position="absolute",t.style.height="10px",t.style.width="10px",t.style.cursor="pointer",t.style.zIndex=999,t.id=this.domNode.id+"_tooltip_"+e.direction,A.place(t,this.gaugeNode),t.title=this._i18n.widgets.obliqueViewer[e.direction+"Tooltip"],t.onclick=function(){s.isDefined(e.angle)&&(i.azimuthAngle=e.angle,i._azimuthIndicator.set("value",i._convertAngleToGaugeNotation(e.angle)),i.snap&&i._snap(),i.emit("azimuth-change",{azimuth:i.azimuthAngle}))},e.node=t}),this)},setAzimuth:function(t){s.isDefined(t)&&(this.azimuthAngle=t,this.isNadir?this._switchToOblique():this._azimuthIndicator.set("value",this._convertAngleToGaugeNotation(this.azimuthAngle)))}});return a("extend-esri")&&i.setObject("dijit._ObliqueRotationWidget",I,n),I}));