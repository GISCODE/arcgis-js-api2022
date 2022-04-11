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

define(["require","dojo/_base/declare","dojo/_base/connect","dojo/_base/lang","dojo/_base/array","dojo/_base/kernel","dojo/sniff","dojo/query","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-style","../libs/sanitizer/Sanitizer","dojox/html/entities","dijit/_Widget","dijit/_Templated","../kernel","../lang","../urlUtils","./_EventedWidget","dojo/i18n!../nls/jsapi","dojo/NodeList-dom"],(function(e,i,t,a,s,d,n,r,o,h,l,c,m,_,u,p,v,f,g,y,L,S){var j=0,P=S.widgets.popup,T=S.widgets.templatePicker,b=i([L,p,v],{declaredClass:"esri.dijit._PopupRenderer",_sanitizer:new _({whiteList:{span:["class"],dd:[],dl:[],dt:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],sub:[],sup:[],animate:[],animatetransform:[],circle:[],clippath:[],defs:[],ellipse:[],g:[],image:[],line:[],lineargradient:[],marker:[],mask:[],path:[],pattern:[],polygon:[],polyline:[],radialgradient:[],rect:[],stop:[],svg:[],switch:[],symbol:[],text:[],textpath:[],tspan:[],use:[]}},!0),constructor:function(){this._nls=a.mixin({},P)},templateString:"<div class='esriViewPopup'><div class='statusSection hidden' dojoAttachPoint='_status'></div><div class='mainSection'><div class='header' dojoAttachPoint='_title'></div><div class='hzLine'></div><div dojoAttachPoint='_description'></div><div class='break'></div></div><div class='attachmentsSection hidden'><div>${_nls.NLS_attach}:</div><ul dojoAttachPoint='_attachmentsList'></ul><div class='break'></div></div><div class='mediaSection hidden'><div class='header' dojoAttachPoint='_mediaTitle'></div><div class='hzLine'></div><div class='caption' dojoAttachPoint='_mediaCaption'></div><div class='gallery' dojoAttachPoint='_gallery'><div class='mediaHandle prev' dojoAttachPoint='_prevMedia' dojoAttachEvent='onclick: _goToPrevMedia'></div><div class='mediaHandle next' dojoAttachPoint='_nextMedia' dojoAttachEvent='onclick: _goToNextMedia'></div><ul class='summary'><li class='image mediaCount hidden' dojoAttachPoint='_imageCount'>0</li><li class='image mediaIcon hidden'></li><li class='chart mediaCount hidden' dojoAttachPoint='_chartCount'>0</li><li class='chart mediaIcon hidden'></li></ul><div class='frame' dojoAttachPoint='_mediaFrame'></div></div></div><div class='editSummarySection hidden' dojoAttachPoint='_editSummarySection'><div class='break'></div><div class='break hidden' dojoAttachPoint='_mediaBreak'></div><div class='editSummary' dojoAttachPoint='_editSummary'></div></div></div>",showTitle:!0,startup:function(){this.inherited(arguments),this._showStatus(T.loading),this._contentDfd=this.template.getComponents(this.graphic).then(a.hitch(this,this._handleComponentsSuccess)).otherwise(a.hitch(this,this._handleComponentsError))},destroy:function(){this._contentDfd&&this._contentDfd.cancel(),this._attachmentsDfd&&this._attachmentsDfd.cancel(),this._destroyFrame(),this.template=this.graphic=this._nls=this._mediaInfos=this._mediaPtr=this._contentDfd=this._attachmentsDfd=null,this.inherited(arguments)},_goToPrevMedia:function(){this._mediaPtr-1<0||(this._mediaPtr--,this._updateUI(),this._displayMedia())},_goToNextMedia:function(){this._mediaPtr+1!==this._mediaInfos.length&&(this._mediaPtr++,this._updateUI(),this._displayMedia())},_updateUI:function(){var e=this._mediaInfos,i=e.length,t=this.domNode,a=this._prevMedia,n=this._nextMedia;if(i>1){var r=0,o=0;s.forEach(e,(function(e){"image"===e.type?r++:-1!==e.type.indexOf("chart")&&o++})),r&&(h.set(this._imageCount,"innerHTML",r),d.query(".summary .image",t).removeClass("hidden")),o&&(h.set(this._chartCount,"innerHTML",o),d.query(".summary .chart",t).removeClass("hidden"))}else d.query(".summary",t).addClass("hidden"),l.add(a,"hidden"),l.add(n,"hidden");var c=this._mediaPtr;0===c?l.add(a,"hidden"):l.remove(a,"hidden"),c===i-1?l.add(n,"hidden"):l.remove(n,"hidden"),this._destroyFrame()},_displayMedia:function(){var i=this._mediaInfos[this._mediaPtr],t=i.title,s=i.caption,n=d.query(".mediaSection .hzLine",this.domNode)[0];if(h.set(this._mediaTitle,"innerHTML",this._sanitizer.sanitize(t)),l[t?"remove":"add"](this._mediaTitle,"hidden"),h.set(this._mediaCaption,"innerHTML",this._sanitizer.sanitize(s)),l[s?"remove":"add"](this._mediaCaption,"hidden"),l[t&&s?"remove":"add"](n,"hidden"),this._rid=null,"image"===i.type)this._showImage(i);else{var r=this,o=["dojox/charting/Chart2D","dojox/charting/action2d/Tooltip"],c=i.value.theme||this.chartTheme;a.isString(c)&&-1===(c=c.replace(/\./gi,"/")).indexOf("/")&&(c="dojox/charting/themes/"+c),c||(c="./Rainbow"),o.push(c);try{var m=this._rid=j++;e(o,(function(e,t,a){m===r._rid&&(r._rid=null,r._showChart(i.type,i.value,e,t,a))}))}catch(e){console.log("PopupRenderer: error loading modules")}}},_preventNewTab:function(e){return(e=e&&a.trim(e).toLowerCase())&&(0===e.indexOf("mailto:")||0===e.indexOf("tel:"))},_showImage:function(e){l.add(this._mediaFrame,"image");var i,a=m.get(this._gallery,"height"),s=e.value,n=u.decode(s.linkURL),r=u.decode(s.sourceURL);n&&(i=c.create("a",{href:n,target:this._preventNewTab(n)?"":"_blank"},this._mediaFrame));var o=e.refreshInterval?this._addURLParameter(r,"timestamp",Date.now()):r;c.create("img",{className:"esriPopupMediaImage",src:o},i||this._mediaFrame);var h=d.query(".esriPopupMediaImage",this._mediaFrame)[0];this._imageLoadHandle=t.connect(h,"onload",this,(function(){this._clearImageHandles(),this._imageLoaded(h,a),this._initImageRefresh(e)}))},_addURLParameter:function(e,i,t){var a=-1===e.indexOf("?")?"?":"&";return e+a+i+"="+t},_initImageRefresh:function(e){if(e.refreshInterval){var i=60*e.refreshInterval*1e3;this._imageRefreshHandle=setTimeout(a.hitch(this,(function(){this._destroyFrame(),this._showImage(e)})),i)}},_clearImageHandles:function(){t.disconnect(this._imageLoadHandle),this._imageLoadHandle=null,clearTimeout(this._imageRefreshHandle),this._imageRefreshHandle=null},_showChart:function(e,i,t,a,d){l.remove(this._mediaFrame,"image");var n=this._chart=new t(c.create("div",{class:"chart"},this._mediaFrame),{margins:{l:4,t:4,r:4,b:4}});switch(d&&n.setTheme(d),e){case"piechart":n.addPlot("default",{type:"Pie",labels:!1}),n.addSeries("Series A",i.fields);break;case"linechart":n.addPlot("default",{type:"Markers"}),n.addAxis("x",{min:0,majorTicks:!1,minorTicks:!1,majorLabels:!1,minorLabels:!1}),n.addAxis("y",{includeZero:!0,vertical:!0,fixUpper:"minor"}),s.forEach(i.fields,(function(e,i){e.x=i+1})),n.addSeries("Series A",i.fields);break;case"columnchart":n.addPlot("default",{type:"Columns",gap:3}),n.addAxis("y",{includeZero:!0,vertical:!0,fixUpper:"minor"}),n.addSeries("Series A",i.fields);break;case"barchart":n.addPlot("default",{type:"Bars",gap:3}),n.addAxis("x",{includeZero:!0,fixUpper:"minor",minorLabels:!1}),n.addAxis("y",{vertical:!0,majorTicks:!1,minorTicks:!1,majorLabels:!1,minorLabels:!1}),n.addSeries("Series A",i.fields)}this._action=new a(n),n.render()},_destroyFrame:function(){this._rid=null,this._clearImageHandles(),this._chart&&(this._chart.destroy(),this._chart=null),this._action&&(this._action.destroy(),this._action=null),h.set(this._mediaFrame,"innerHTML","")},_imageLoaded:function(e,i){var t=e.height;if(t<i){var a=Math.round((i-t)/2);m.set(e,"marginTop",a+"px")}},_attListHandler:function(e,i){if(e===this._attachmentsDfd){this._attachmentsDfd=null;var t="";i instanceof Error||!i||!i.length||s.forEach(i,(function(e){t+="<li>",t+="<a href='"+y.addProxy(e.url)+"' target='_blank'>"+(e.name||"[No name]")+"</a>",t+="</li>"})),h.set(this._attachmentsList,"innerHTML",t||"<li>"+this._nls.NLS_noAttach+"</li>")}},_createLinkIfURI:function(e,i){var t=y.getURIInfo(e);if(t){var a=e.match(t.pattern),s=a&&a[2],d=u.decode(a[1]);c.create("a",{target:"_blank",href:d,title:d,innerHTML:this._sanitizer.sanitize(g.substitute({appName:t.appName,hierPart:s},t.label))},i)}else h.set(i,"innerHTML",this._sanitizer.sanitize(e))},_showStatus:function(e){h.set(this._status,"innerHTML",e),l.remove(this._status,"hidden"),d.query(".mainSection",this.domNode).addClass("hidden")},_hideStatus:function(){h.set(this._status,"innerHTML",""),l.add(this._status,"hidden"),d.query(".mainSection",this.domNode).removeClass("hidden")},_handleComponentsSuccess:function(e){if(e){this._hideStatus();var i,t=this.showTitle?e.title:"",n=e.description,r=e.fields,m=e.mediaInfos,_=this.domNode,u=this._nls,p=this,v=this.template,f=this.graphic;if(this._prevMedia.title=u.NLS_prevMedia,this._nextMedia.title=u.NLS_nextMedia,h.set(this._title,"innerHTML",this._sanitizer.sanitize(t)),t||l.add(this._title,"hidden"),!e.hasDescription&&r){n="";var g=s.map(r,(function(e){var i=c.create("tr",{vAlign:"top"});c.create("td",{className:"attrName",innerHTML:this._sanitizer.sanitize(e[0])},i);var t=c.create("td",{className:"attrValue"},i);return this._createLinkIfURI(e[1],t),i}),this);g.length&&(i=c.create("table",{className:"attrTable",cellPadding:"0px",cellSpacing:"0px"}),s.forEach(g,(function(e){i.appendChild(e)})))}i?(this._description.appendChild(i),n=!0):h.set(this._description,"innerHTML",this._sanitizer.sanitize(n)),n||l.add(this._description,"hidden"),d.query("a",this._description).forEach((function(e){p._preventNewTab(e.href)?"_blank"===e.target&&h.remove(e,"target"):h.set(e,"target","_blank")})),t&&n?d.query(".mainSection .hzLine",_).removeClass("hidden"):t||n?d.query(".mainSection .hzLine",_).addClass("hidden"):d.query(".mainSection",_).addClass("hidden");var y=this._attachmentsDfd=v.getAttachments(f);y&&(y.addBoth(a.hitch(this,this._attListHandler,y)),h.set(this._attachmentsList,"innerHTML","<li>"+u.NLS_searching+"...</li>"),d.query(".attachmentsSection",_).removeClass("hidden")),m&&m.length&&(d.query(".mediaSection",_).removeClass("hidden"),o.setSelectable(this._mediaFrame,!1),this._mediaInfos=m,this._mediaPtr=0,this._updateUI(),this._displayMedia()),e.editSummary&&(h.set(this._editSummary,"innerHTML",this._sanitizer.sanitize(e.editSummary)),m&&m.length&&l.remove(this._mediaBreak,"hidden"),l.remove(this._editSummarySection,"hidden")),this.emit("content-update")}else this._showStatus(P.NLS_noInfo)},_handleComponentsError:function(e){e&&"cancel"===e.dojoType||(console.log("PopupRenderer: error loading template",e),this._showStatus(P.NLS_noInfo))}});return n("extend-esri")&&a.setObject("dijit._PopupRenderer",b,f),b}));