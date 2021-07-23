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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/string","dojo/dom-construct","dojo/json","dojo/query","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/TitlePane","../../kernel","../analysis/mixins/browselayers/BrowseLayerMixin","dojo/i18n!../../nls/jsapi","dojo/text!../../layers/support/rasterFunctionResources.json","dojo/text!./templates/RFxRasterInfo.html","./RFxGridBase","./RFxSRPicker"],(function(e,t,i,a,r,s,n,o,l,c,d,p,h,x,u,f,m,y,S){var _,R="esriRFxArgsEditor__titlePane",g=e("dijit.RasterFunctionEditor.RFxRasterInfo",[l,c,d,x],{templateString:m,declaredClass:"esri.dijit.RasterFunctionEditor.RFxRasterInfo",rasterInfoGrid:null,rasterExtentGrid:null,rasterStatisticsGrid:null,rasterSpatialReferenceGrid:null,rasterSpatialReferencePicker:null,categoryReference:{rasterInfo:"rfxArgCat_RasterInfo",spatialReference:"rfxArgCat_SpatialReference",extent:"rfxArgCat_Extent",statistics:"rfxArgCat_Statistics"},rasterInfoi18nMap:{columns:"rasterInfoColumns",rows:"rasterInfoRows",bandCount:"rasterInfoBandCount",pixelSizeX:"rasterInfoPixelSizeX",pixelSizeY:"rasterInfoPixelSizeY",pixelType:"rasterInfoPixelType"},rasterExtenti18nMap:{top:"rasterExtentTop",bottom:"rasterExtentBottom",left:"rasterExtentLeft",right:"rasterExtentRight"},rasterSpatialReferencei18nMap:{wkid:"spatialReferenceWkid",latestWkid:"spatialReferenceLatestWkid",wkt:"spatialReferenceWkt",vcsWkid:"spatialReferenceVcsWkid",latestVcsWkid:"spatialReferenceLatestVcsWkid"},spatialReferenceCategories:{1:"geographicCS",2:"projCS",3:"vcs"},pixelTypeMapping:{Unknown:{value:-1,type:"Unknown",depth:""},U1:{value:0,type:"",depth:"1 bit"},U2:{value:1,type:"",depth:"2 bit"},U4:{value:2,type:"",depth:"4 bit"},U8:{value:3,type:"Unsigned integer",depth:"8 bit"},U16:{value:5,type:"Unsigned integer",depth:"16 bit"},U32:{value:7,type:"Unsigned integer",depth:"32 bit"},S8:{value:4,type:"Signed integer",depth:"8 bit"},S16:{value:6,type:"Signed integer",depth:"16 bit"},S32:{value:8,type:"Signed integer",depth:"32 bit"},F32:{value:9,type:"floating point number",depth:"32 bit"},F64:{value:10,type:"floating point number",depth:"64 bit"},C64:{type:"complex",depth:"64 bit"},C128:{type:"complex",depth:"128 bit"}},constructor:function(e){t.mixin(this,e),this.inherited(arguments),this._i18n=u.rasterFunctions.categoryLabels,this._i18n=t.mixin(this._i18n,u.analysisSettings),this._i18n=t.mixin(this._i18n,u.rasterFunctions.rfxArgs),this._i18n=t.mixin(this._i18n,u.rasterFunctions.enumLabels),_=n.parse(r.substitute(f,u))},postCreate:function(){this.inherited(arguments),this._setupRasterInputSelect();var e=Boolean(this.value);if(e){var t=this.value,i={columns:((t.extent.xmax-t.extent.xmin)/t.pixelSizeX).toFixed(6),rows:((t.extent.ymax-t.extent.ymin)/t.pixelSizeY).toFixed(6),pixelSizeX:t.pixelSizeX.toFixed(8),pixelSizeY:t.pixelSizeY.toFixed(8),bandCount:t.bandCount,pixelType:t.pixelType},a={top:t.extent.ymax.toFixed(6),bottom:t.extent.ymin.toFixed(6),left:t.extent.xmin.toFixed(6),right:t.extent.xmax.toFixed(6)},r=t.statistics,s=t.extent.spatialReference;this._populateRasterinfoTables(i,a,r,s)}},_setupRasterInputSelect:function(){this._layerSelect.set("browseProperties",this.browseProperties),this._layerSelect.set("selectDefault",!1),this._layerSelect.set("allowScalar",this.allowScalar),this._layerSelect.set("inputLayers",this.inputLayers),this.own(this._layerSelect.on("change",t.hitch(this,this._addLayer)))},_addLayer:function(){var e=this._layerSelect.getSelectedLayer(),t={columns:((e.extent.xmax-e.extent.xmin)/e.pixelSizeX).toFixed(6),rows:((e.extent.ymax-e.extent.ymin)/e.pixelSizeY).toFixed(6),pixelSizeX:e.pixelSizeX.toFixed(8),pixelSizeY:e.pixelSizeY.toFixed(8),bandCount:e.bandCount,pixelType:e.pixelType},i={top:e.extent.ymax.toFixed(6),bottom:e.extent.ymin.toFixed(6),left:e.extent.xmin.toFixed(6),right:e.extent.xmax.toFixed(6)},a=e.bands,r=e.spatialReference;this._populateRasterinfoTables(t,i,a,r)},_populateRasterinfoTables:function(e,t,i,a){var r=this._createCategoryDiv(this._RasterInfoPane,this.categoryReference.rasterInfo);this._createRasterInfoGrid(r,e);var s=this._createCategoryDiv(this._RasterExtentPane,this.categoryReference.extent);this._createRasterExtentGrid(s,t);var n=this._createCategoryDiv(this._RasterSpatialReferencePane,this.categoryReference.spatialReference);this._createRasterSpatialReferenceGrid(n,a);var o=this._createCategoryDiv(this._RasterStasticsPane,this.categoryReference.statistics);i&&i.length>0?this._createRasterStatisticsGrid(o,i):this._createRasterStatsNotCalculatedDiv(o)},_getSelectedLayer:function(){if(this.value&&this.inputLayers)return this.inputLayers.filter(function(e){return e.url.indexOf(this.value.url)>-1||this.value.url.indexOf(e.url)>-1}.bind(this))[0]},_createRasterInfoGrid:function(e,t){var a=[this._i18n.rasterInfoProperty,this._i18n.rasterInfoValue],r=this._getGridSchema(["Property","Value"],["string","string"],a),s=i.map(Object.keys(t),(function(e){return{Property:this._i18n[this.rasterInfoi18nMap[e]],Value:t[e]}}),this);this.rasterInfoGrid&&this.rasterInfoGrid.destroy(),this._rasterInfoDiv=document.createElement("div"),e.appendChild(this._rasterInfoDiv),this.rasterInfoGrid=new y({schema:r,data:s,isExtensible:!1,isEditable:!1},this._rasterInfoDiv)},_createRasterExtentGrid:function(e,t){var a=[this._i18n.rasterInfoProperty,this._i18n.rasterInfoValue],r=this._getGridSchema(["Property","Value"],["string","double"],a),s=i.map(Object.keys(t),(function(e){return{Property:this._i18n[this.rasterExtenti18nMap[e]],Value:t[e]}}),this);this.rasterExtentGrid&&this.rasterExtentGrid.destroy(),this._rasterExtentDiv=document.createElement("div"),e.appendChild(this._rasterExtentDiv),this.rasterExtentGrid=new y({schema:r,data:s,isExtensible:!1,isEditable:!1},this._rasterExtentDiv)},_createRasterSpatialReferenceGrid:function(e,t){var a=[this._i18n.rasterInfoProperty,this._i18n.rasterInfoValue];this._rasterSpatialReferencePicker=document.createElement("div"),this._rasterSpatialReferenceDiv=document.createElement("div"),e.appendChild(this._rasterSpatialReferenceDiv),this.rasterSpatialReferencePicker=new S({value:t},this._rasterSpatialReferencePicker);var r,s=t.wkid,n=t.latestWkid;s&&(r=(r=this.rasterSpatialReferencePicker.getSRWithID(s))||(n?this.rasterSpatialReferencePicker.getSRWithID(n):r)),r&&r.name?this.rasterSpatialReferencePicker.setSR(r.name):this.rasterSpatialReferencePicker.reset();var o=this._getGridSchema(["Property","Value"],["string","string"],a),l=[{Property:this._i18n[this.spatialReferenceCategories[this.rasterSpatialReferencePicker.category]],Value:r&&r.name}];l=l.concat(i.map(Object.keys(t),(function(e){var i=this._i18n[this.rasterSpatialReferencei18nMap[e]],a=t[e];if(i)return{Property:i,Value:a}}),this).filter((function(e){return e&&e.Property&&e.Value}),this)),this.rasterSpatialReferenceGrid&&this.rasterSpatialReferenceGrid.destroy(),this.rasterSpatialReferenceGrid=new y({schema:o,data:l,isExtensible:!1,isEditable:!1},this._rasterSpatialReferenceDiv)},_createRasterStatisticsGrid:function(e,t){var a=[this._i18n.bandNamesName,this._i18n.minimum,this._i18n.maximum,this._i18n.mean,this._i18n.stdDeviation],r=this._getGridSchema(["BandName","Minimum","Maximum","Mean","StdDeviation"],["string","long","long","long","long"],a),s=i.map(t,(function(e,t){return{BandName:"Band_"+(t+1),Minimum:e.min,Maximum:e.max,Mean:e.avg||e.mean,StdDeviation:e.stddev}}),this);this.rasterStatisticsGrid&&this.rasterStatisticsGrid.destroy(),this._rasterStatisticsDiv=document.createElement("div"),e.appendChild(this._rasterStatisticsDiv),this.rasterStatisticsGrid=new y({schema:r,data:s,isExtensible:!1,isEditable:!1},this._rasterStatisticsDiv)},_createRasterStatsNotCalculatedDiv:function(e){e.innerHTML="";var t=document.createElement("div");t.innerHTML=this._i18n.rasterStatisticsNotCalculated,e.appendChild(t)},_getGridSchema:function(e,t,i){return e.map((function(e,a){return{label:i[a],name:e,dataType:t[a]}}))},_createCategoryDiv:function(e,t){var i=o("."+t+"-table-body",e)[0];if(i)return i;var a=s.create("tr",{class:R},e),r=s.create("td",null,a),n=s.create("div",{class:t},r),l=s.create("table",{class:t+"-table"});i=s.create("tbody",{class:t+"-table-body"},l);var c=_.categoryReference&&_.categoryReference[t];new p({title:c.title,content:l,open:c.visible},n);return i},_getValueAttr:function(){var e=this._layerSelect.getSelectedLayer();return e?{extent:{xmin:e.extent.xmin,ymin:e.extent.ymin,xmax:e.extent.xmax,ymax:e.extent.ymax,spatialReference:{wkid:e.spatialReference.wkid,latestWkid:e.spatialReference.latestWkid}},blockWidth:e.blockWidth||256,blockHeight:e.blockHeight||256,bandCount:e.bandCount,pixelType:e.pixelType,pixelSizeX:e.pixelSizeX,pixelSizeY:e.pixelSizeY,format:e.format||"Image Service",compressionType:e.compressionType||"",compressionQuality:e.compressionQuality||0,statistics:e.statistics,type:"RasterInfo"}:this.value}});return a("extend-esri")&&t.setObject("dijit.RasterFunctionEditor.RFxRasterInfo",g,h),g}));