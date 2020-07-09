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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojox/gfx/_base","../kernel","../lang","../Color","./Symbol","./Font"],(function(t,e,i,o,n,s,r,l,h){var a={type:"textsymbol",x:0,y:0,text:"",rotated:!1,kerning:!0,color:[0,0,0,1],font:o.defaultFont,angle:0,xoffset:0,yoffset:0,horizontalAlignment:"center"},f={start:"left",middle:"center",end:"right"},g={left:"start",center:"middle",right:"end",justify:"start"},c={top:"text-before-edge",middle:"central",baseline:"alphabetic",bottom:"text-after-edge"},d=document.createElement("canvas"),u=t(l,{declaredClass:"esri.symbol.TextSymbol",angle:0,xoffset:0,yoffset:0,constructor:function(t,i,n){e.mixin(this,a),this.font=new h(this.font),this.color=new r(this.color),t&&(e.isObject(t)?(e.mixin(this,t),this.color&&s.isDefined(this.color[0])&&(this.color=r.toDojoColor(this.color)),this.type="textsymbol",this.font=new h(this.font),this.xoffset=o.pt2px(this.xoffset),this.yoffset=o.pt2px(this.yoffset),this.angle&&(this.angle=-1*this.angle),this.haloSize&&(this.haloSize=o.pt2px(this.haloSize)),this.haloColor&&(this.haloColor=r.toDojoColor(this.haloColor))):(this.text=t,i&&(this.font=i),n&&(this.color=n))),this.setAlign(this.align||this.getSVGAlign())},setFont:function(t){return this.font=t,this},setSize:function(t){return this.font.size=t,this},setAngle:function(t){return this.angle=t,this},setOffset:function(t,e){return this.xoffset=t,this.yoffset=e,this},setHaloColor:function(t){return this.haloColor=t,this},setHaloSize:function(t){return this.haloSize=t,this},setAlign:function(t){return this.align=t,this.setHorizontalAlignment(t&&f[t.toLowerCase()]||"center"),this},setHorizontalAlignment:function(t){return this.horizontalAlignment=t,this},getSVGAlign:function(){var t=this.horizontalAlignment;return t=t&&g[t.toLowerCase()]||"middle"},setVerticalAlignment:function(t){return this.verticalAlignment=t,this},getSVGBaseline:function(){var t=this.verticalAlignment;return t&&c[t.toLowerCase()]||"alphabetic"},getSVGBaselineShift:function(){return"bottom"===this.verticalAlignment?"super":null},setDecoration:function(t){return this.decoration=t,this.font||this.setFont(new h),this.font.setDecoration(t),this},setRotated:function(t){return this.rotated=t,this},setKerning:function(t){return this.kerning=t,this},setText:function(t){return this.text=t,this},getStroke:function(){return null},getFill:function(){return this.color},getWidth:function(){var t=d&&d.getContext&&d.getContext("2d");if(t){var e=this.font,i=e.style?e.style:o.defaultFont.style,n=e.weight?e.weight:o.defaultFont.weight,s=e.size?e.size:o.defaultFont.size,r=e.family?e.family:o.defaultFont.family;return t.font=i+" "+n+" "+s+"px "+r,t.measureText(this.text).width}var l,h,a=this.getHeight(),f=0;for(l=0;l<this.text.length;l++)(h=this.text.charAt(l))==h.toUpperCase()?f+=.7*a:f+=.5*a;return f},getHeight:function(){return o.normalizedLength(this.font.size)},getShapeDescriptors:function(){var t,e=this.font;return e&&(t={},e.size&&(t.size=e.size),e.style&&(t.style=e.style),e.variant&&(t.variant=e.variant),e.decoration&&(t.decoration=e.decoration),e.weight&&(t.weight=e.weight),e.family&&(t.family=e.family)),{defaultShape:{type:"text",text:this.text,x:0,y:this.getHeight()/4,align:"middle",decoration:this.decoration||e&&e.decoration,rotated:this.rotated,kerning:this.kerning},font:t,fill:this.getFill(),stroke:this.getStroke()}},toJson:function(){var t=o.px2pt(this.xoffset),i=o.px2pt(this.yoffset),n=o.px2pt(this.haloSize);return t=isNaN(t)?void 0:t,i=isNaN(i)?void 0:i,n=isNaN(n)?void 0:n,s.fixJson(e.mixin(this.inherited("toJson",arguments),{type:"esriTS",backgroundColor:this.backgroundColor,borderLineColor:this.borderLineColor,borderLineSize:this.borderLineSize,haloSize:n,haloColor:this.haloColor&&r.toJsonColor(this.haloColor),verticalAlignment:this.verticalAlignment,horizontalAlignment:this.horizontalAlignment,rightToLeft:this.rightToLeft,width:this.width,angle:this.angle&&-1*this.angle,xoffset:t,yoffset:i,text:this.text,rotated:this.rotated,kerning:this.kerning,font:this.font.toJson()}))}});return e.mixin(u,{ALIGN_START:"start",ALIGN_MIDDLE:"middle",ALIGN_END:"end",DECORATION_NONE:"none",DECORATION_UNDERLINE:"underline",DECORATION_OVERLINE:"overline",DECORATION_LINETHROUGH:"line-through"}),u.defaultProps=a,i("extend-esri")&&(e.setObject("symbol.TextSymbol",u,n),n.symbol.defaultTextSymbol=a),u}));