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

define(["dojo/_base/declare","esri/dijit/geoenrichment/Deferred","dojo/sniff","esri/dijit/geoenrichment/when","dojo/dom-class","dojo/dom-construct","esri/dijit/geoenrichment/utils/ImageInfoUtil","../utils/AnnotationsUtil","../utils/CircularMaskUtil","../utils/ScaleToCoverUtil","../../supportClasses/images/ImageDataHolder","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/MathUtil","esri/dijit/geoenrichment/utils/WaitingUtil","dojo/i18n!esri/nls/jsapi","../../../_devConfig"],(function(t,i,e,s,a,n,o,h,l,r,g,c,m,d,_,u){_=_.geoenrichment.dijit.ReportPlayer.ReportPlayer;return t(null,{isImage:!0,viewModel:null,theme:null,currentFeatureIndex:null,imageJson:null,imageTriggerJson:null,alignParams:null,showError:!0,parentWidget:null,_circularMask:!1,_scaleToCover:!1,_fitParent:!0,_angle:0,_opacity:1,_dynamicBehavior:null,_useDefaultImageSizeFlag:!1,_initialImageData:null,_fileName:null,_shownImageData:null,postCreate:function(){this._configurePropertiesFromImageJson(),this.content=n.create("img",{class:"imageContainer_content"}),this.inherited(arguments),a.add(this.domNode,"esriGEImageContainer"),this.setPosition(this.imageJson.style.left||0,this.imageJson.style.top||0),this._addAdditionalUI(),this._dynamicBehavior&&(this.content._wToHRatio=1,this.resize()),this._applyRotation(),this._lastAlignParams=this.alignParams,(this._fileName||this._dynamicBehavior||this._initialImageData)&&this._initWithImageData()},_configurePropertiesFromImageJson:function(){this.fieldStyle=this.fieldStyle||{},this.fieldStyle.width=this.imageJson.style.width||150,this.fieldStyle.height=this.imageJson.style.height||0,this._fileName=this.imageJson.fileName,this._initialImageData=this.imageJson.data,this._opacity=Math.max(0,Math.min(1,void 0!==this.imageJson.style.opacity?this.imageJson.style.opacity:1)),this._angle=this.imageJson.style.angle||0,this._dynamicBehavior=this.imageJson.dynamicBehavior,this._fitParent=!this.imageJson.ownSizeInsideParent,this._circularMask=!!this.imageJson.circularMask,this._scaleToCover=!!this.imageJson.scaleToCover,this.imageJson.style.width||(this._useDefaultImageSizeFlag=!0),this.alignParams||!this.imageJson.style.horizontalAlign&&!this.imageJson.style.verticalAlign||(this.alignParams={horizontalAlign:this.imageJson.style.horizontalAlign,verticalAlign:this.imageJson.style.verticalAlign})},_addAdditionalUI:function(){},setAngle:function(t){this._angle=m.angleTo180_180Range(Number(t)||0),this._applyRotation()},_applyRotation:function(){if(!this.domNode)return null;this._angle=this._angle>0||this._angle<0?this._angle:0;var t=e("webkit")?"webkitTransform":"transform";this.content.style[t]=0!==this._angle?"rotate("+this._angle+"deg)":"",this._updateCircularMaskAndScaleToCover()},_applyOpacity:function(){if(!this.domNode)return null;this._opacity>=0&&this._opacity<1?(this._clickMaskDiv&&(this._clickMaskDiv.style.opacity=this._opacity),this._scaleToCoverDiv&&(this._scaleToCoverDiv.style.opacity=this._opacity),this.content.style.opacity=this._opacity):(this.content.style.opacity="",this._clickMaskDiv&&(this._clickMaskDiv.style.opacity=""),this._scaleToCoverDiv&&(this._scaleToCoverDiv.style.opacity=""))},_initPromise:null,isInitialized:function(){return this._initPromise},getRenderPromise:function(){return this._initPromise},_initWithImageData:function(){var t=this;return this._initPromise=s(this._loadImageData(),(function(){t.onInitialized(),t._updateCircularMaskAndScaleToCover()})),this._initPromise},_loadImageData:function(){var t=this;if(this.domNode){var i=g.getImageData(this._fileName)||this._initialImageData;return this.content.src="",this._dynamicBehavior?this.viewModel.getDynamicImageFunc?(d.showProgress(this.domNode),s(this.viewModel.getDynamicImageFunc(this._dynamicBehavior,this.theme,i),(function(s){return s&&e(s,s===i&&t._fileName)})).finally((function(){d.removeProgress(t.domNode)}))):void 0:e(i,this._fileName)}function e(i,e){return t._setImageData({data:i,fileName:e,recalcImageContainerDimentions:t._useDefaultImageSizeFlag,preserveHeight:!1})}},_setImageData:function(t){if(this.domNode&&t.data){var e=this,s=t.data,a=t.recalcImageContainerDimentions,n=t.preserveHeight,h=new i;return this._showErrorMessage(!1),this.domNode.style.opacity="0.001",o.getImageInfo(s,null,{crossOrigin:"anonymous"}).then((function(i){if(e.domNode){var s,o=i.width/i.height;e.content._wToHRatio=o,e._fitParent?(s=e._useDefaultImageSizeFlag?150:Math.min(e.getWidth(),e.getHeight()*o),e.content.style.width=s+"px",e.content.style.height=s/o+"px"):(s=e.imageJson.style.width||150,e.content.style.width=s+"px",e.content.style.height=s/o+"px"),e.content.onload=function(){a&&e._recalcImageContainerDimentions(n),h.resolve()},e.content.onerror=function(t){h.reject(t)},e._shownImageData=i.dataUrl,e.content.src=i.dataUrl,t.fileName&&g.putImageData(t.fileName,i.dataUrl),e._updateCircularMaskAndScaleToCover()}else h.resolve()}),h.reject),h.promise.then((function(){e.domNode&&(e.domNode.style.opacity="")}),(function(t){console.log(t),e._showErrorMessage(!0)}))}},_showErrorMessage:function(t){this.showError&&this.domNode&&(u.emulateErrors.contentErrors&&(t=!0),t&&!this.errorMessageDiv&&(this.errorMessageDiv=n.create("div",{class:"esriGEReportPlayerPanelErrorMessage",innerHTML:_.imageLoadError},this.domNode),this.errorMessageDiv.style.paddingTop=this.getHeight()/2-20+"px"),c[t?"show":"hide"](this.errorMessageDiv),c[t?"hide":"show"](this.contentBlock))},_recalcImageContainerDimentions:function(t){if(this.domNode){var i=this.getImageBox(!0),e=t&&this.getHeight();this.setWidth(i.w),this.setHeight(i.h),t&&this.setHeight(e)}},_lastAlignParams:null,resize:function(t,i){if(!this.domNode)return null;t&&(this.setWidth(t.w),this.setHeight(t.h),this._useDefaultImageSizeFlag=!1),this._lastAlignParams=i||this.alignParams,this._resizeContentImage(),this._updateCircularMaskAndScaleToCover()},_getContentImageWToHRatio:function(){return this.content._wToHRatio||(this.imageJson.style.innerImageW||this.imageJson.style.width)/(this.imageJson.style.innerImageH||this.imageJson.style.height)},_resizeContentImage:function(){var t,i=this._getContentImageWToHRatio();t=this._fitParent?Math.min(this.getWidth(),this.getHeight()*i):Math.min(this.imageJson.style.width,this.imageJson.style.height*i,this.getWidth(),this.getHeight()*i),this.content.style.width=t+"px",this.content.style.height=t/i+"px",h.alignAnnotationContainer(this,this._lastAlignParams),this._updateCircularMaskAndScaleToCover()},scaleProportionallyWithinParent:function(t){if(!this.domNode)return null;this.resize({w:this.getWidth()*t.xScale,h:this.getHeight()*t.yScale}),this.setPosition(this._left*t.xScale,this._top*t.yScale)},_clickMaskDiv:null,_scaleToCoverDiv:null,_updateCircularMaskAndScaleToCover:function(){if(this.domNode){var t=this.content.src;this._clickMaskDiv=l.setCircularMask(this._circularMask&&this._shownImageData,this.content,t,this._angle),this._scaleToCoverDiv=r.setScaleToCover(this._scaleToCover&&this._shownImageData,this.content,t,this._angle),c[this._clickMaskDiv||this._scaleToCoverDiv?"hide":"show"](this.content),this._applyOpacity()}},getFitParent:function(){return this._fitParent},setFitParent:function(t){this._fitParent=t,this._resizeContentImage()},getImageBox:function(t){return t?c.noTransformPosition(this.content):{w:this.getWidth(),h:this.getHeight(),l:this._left,t:this._top}},setImageWidth:function(t){this._fitParent||(this.imageJson.style.width=t,this.imageJson.style.height=t/this._getContentImageWToHRatio(),this._resizeContentImage())},setImageHeight:function(t){this._fitParent||(this.imageJson.style.height=t,this.imageJson.style.width=t*this._getContentImageWToHRatio(),this._resizeContentImage())},_left:0,_top:0,getLeft:function(){return this._left},getTop:function(){return this._top},setPosition:function(t,i){void 0!==t&&(this._left=t||0,this.domNode.style.left=this._left+"px"),void 0!==i&&(this._top=i||0,this.domNode.style.top=this._top+"px")},onInitialized:function(){},toJson:function(){var t=this.getImageBox(!0),i=this._lastAlignParams||this.alignParams,e={id:"img",fileName:this._fileName,circularMask:this._circularMask,scaleToCover:this._scaleToCover,dynamicBehavior:this._dynamicBehavior,ownSizeInsideParent:!this._fitParent,style:{left:this._left,top:this._top,angle:this._angle,opacity:this._opacity,horizontalAlign:i&&i.horizontalAlign,verticalAlign:i&&i.verticalAlign,innerImageW:t&&t.w,innerImageH:t&&t.h}};return this._fitParent?(e.style.width=this.getWidth(),e.style.height=this.getHeight()):(e.style.width=t?t.w:this.getWidth(),e.style.height=t?t.h:this.getHeight()),e}})}));