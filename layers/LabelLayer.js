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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/i18n!dojo/cldr/nls/number","dojo/number","dojo/has","dojox/gfx/_base","../kernel","../lang","../graphic","../PopupInfo","../ArcadeExpression","../core/timerUtils","../symbols/TextSymbol","../symbols/ShieldLabelSymbol","../geometry/Extent","../geometry/Point","../geometry/webMercatorUtils","../renderers/SimpleRenderer","../arcadeProfiles/labelingProfile","./labelLayerUtils/DynamicLabelClass","./labelLayerUtils/StaticLabelClass","./GraphicsLayer","./LabelClass"],(function(e,t,r,n,i,a,s,l,o,h,f,c,u,b,p,v,d,L,g,m,y,_,P,S,x){function w(e){return"sizeInfo"===e.type}var C=e(S,{declaredClass:"esri.layers.LabelLayer",constructor:function(e){this._refreshLabels=t.hitch(this,this._refreshLabels),this.id="labels",this.featureLayers=[],this._featureLayerInfos=[],this._preparedLabels=[],this._engineType="STATIC",this._mapEventHandlers=[],e&&(e.id&&(this.id=e.id),e.mode&&(this._engineType="DYNAMIC"===e.mode.toUpperCase()?"DYNAMIC":"STATIC"))},_setMap:function(e){this._mapEventHandlers.push(e.on("extent-change",t.hitch(this,"_handleLevelChange")));var r=this.inherited(arguments);return this.refresh(),r},_unsetMap:function(){var e;for(e=0;e<this._mapEventHandlers.length;e++)n.disconnect(this._mapEventHandlers[e]);this.refresh(),b.clearTimeout(this._refreshHandle),this._refreshHandle=null,this.inherited(arguments)},setAlgorithmType:function(e){this._engineType=e&&"DYNAMIC"===e.toUpperCase()?"DYNAMIC":"STATIC",this.refresh()},addFeatureLayer:function(e,r,n,i){if(!this.getFeatureLayer(e.layerId)){var a=[];a.push(e.on("update-end",t.hitch(this,"refresh"))),a.push(e.on("suspend",t.hitch(this,"refresh"))),a.push(e.on("resume",t.hitch(this,"refresh"))),a.push(e.on("edits-complete",t.hitch(this,"refresh"))),a.push(e.on("labeling-info-change",t.hitch(this,"refresh"))),a.push(e.on("time-extent-change",t.hitch(this,"refresh"))),a.push(e.on("show-labels-change",t.hitch(this,"refresh"))),a.push(e.on("feature-reduction-change",t.hitch(this,"refresh"))),this._featureLayerInfos.push({FeatureLayer:e,LabelExpressionInfo:n,LabelingOptions:i,LabelRenderer:r,EventHandlers:a}),this.featureLayers.push(e),this.refresh()}},getFeatureLayer:function(e){var t,r;for(t=0;t<this.featureLayers.length;t++)if(void 0!==(r=this.featureLayers[t])&&r.id==e)return r;return null},removeFeatureLayer:function(e){var t,i,a;if(void 0!==(i=this.getFeatureLayer(e))&&(a=r.indexOf(this.featureLayers,i))>-1){for(this.featureLayers.splice(a,1),t=0;t<this._featureLayerInfos[a].EventHandlers.length;t++)n.disconnect(this._featureLayerInfos[a].EventHandlers[t]);this._featureLayerInfos.splice(a,1),this.refresh()}},removeAllFeatureLayers:function(){var e;for(e=0;e<this.featureLayers.length;e++){for(var t=0;t<this._featureLayerInfos[e].EventHandlers.length;t++)n.disconnect(this._featureLayerInfos[e].EventHandlers[t]);this.featureLayers=[],this._featureLayerInfos=[]}this.refresh()},getFeatureLayers:function(){return this.featureLayers},getFeatureLayerInfo:function(e){var t,r;for(t=0;t<this.featureLayers.length;t++)if(void 0!==(r=this.featureLayers[t])&&r.id==e)return this._featureLayerInfos[t];return null},refresh:function(){null==this._refreshHandle&&(this._refreshHandle=b.setTimeout(this._refreshLabels,b.priority.LOW))},_handleLevelChange:function(e){e.levelChange&&this.clear(),this.refresh()},_refreshLabels:function(e){var t,r,n,i,a,s,l;this._refreshHandle=null;var o,h=[],f="DYNAMIC"===this._engineType?new _:new P;if(this._map){for(f.setMap(this._map,this),this._preparedLabels=[],r=0;r<this.featureLayers.length;r++)if((n=this.featureLayers[r]).visible&&n.showLabels&&n.visibleAtMapScale&&!n._suspended)if(i=this._featureLayerInfos[r],l=this._convertOptions(null),i.LabelRenderer){if((h=n.labelingInfo)&&(o=h[0])&&(s=this._getLabelExpression(o),l=this._convertOptions(o)),a=i.LabelRenderer,i.LabelExpressionInfo&&(s=i.LabelExpressionInfo),i.LabelingOptions){if(l=this._convertOptions(null),void 0!==i.LabelingOptions.pointPriorities){var c=i.LabelingOptions.pointPriorities;l.pointPriorities="above-center"==c||"AboveCenter"==c||"esriServerPointLabelPlacementAboveCenter"==c?"AboveCenter":"above-left"==c||"AboveLeft"==c||"esriServerPointLabelPlacementAboveLeft"==c?"AboveLeft":"above-right"==c||"AboveRight"==c||"esriServerPointLabelPlacementAboveRight"==c?"AboveRight":"below-center"==c||"BelowCenter"==c||"esriServerPointLabelPlacementBelowCenter"==c?"BelowCenter":"below-left"==c||"BelowLeft"==c||"esriServerPointLabelPlacementBelowLeft"==c?"BelowLeft":"below-right"==c||"BelowRight"==c||"esriServerPointLabelPlacementBelowRight"==c?"BelowRight":"center-center"==c||"CenterCenter"==c||"esriServerPointLabelPlacementCenterCenter"==c?"CenterCenter":"center-left"==c||"CenterLeft"==c||"esriServerPointLabelPlacementCenterLeft"==c?"CenterLeft":"center-right"==c||"CenterRight"==c||"esriServerPointLabelPlacementCenterRight"==c?"CenterRight":"AboveRight"}void 0!==i.LabelingOptions.lineLabelPlacement&&(l.lineLabelPlacement=i.LabelingOptions.lineLabelPlacement),void 0!==i.LabelingOptions.lineLabelPosition&&(l.lineLabelPosition=i.LabelingOptions.lineLabelPosition),void 0!==i.LabelingOptions.labelRotation&&(l.labelRotation=i.LabelingOptions.labelRotation),void 0!==i.LabelingOptions.howManyLabels&&(l.howManyLabels=i.LabelingOptions.howManyLabels)}a instanceof x&&(s=this._getLabelExpression(a),a=new m(a.symbol),l=this._convertOptions(a)),this._addLabels(n,a,s,l)}else if(h=n.labelingInfo)for(t=h.length-1;t>=0;t--)(o=h[t])&&(a=new x(o instanceof x?o.toJson():o),s=this._getLabelExpression(o),l=this._convertOptions(o),this._addLabels(n,a,s,l));var u=f._process(this._preparedLabels);this.clear(),this.drawLabels(this._map,u)}},drawLabels:function(e,t){var r;for(this._scale=(e.extent.xmax-e.extent.xmin)/e.width,r=0;r<t.length;r++){var n=t[r],i=n.layer,a=n.x,s=n.y,l=n.text,o=n.angle,h=n.layer.labelSymbol;"polyline"==i.geometry.type&&n.layer.options.labelRotation&&h.setAngle(o*(180/Math.PI)),h.setText(l);var c=a,u=s;if(h instanceof p){var b=h.getHeight(),v=Math.sin(o);c-=.25*b*this._scale*v,u-=.33*b*this._scale}var d=new f(new L(c,u,e.extent.spatialReference));d.setParentGraphic(n.layer.graphic),d.setSymbol(h),this.add(d)}},_addLabels:function(e,t,r,n){var i,a,s,l,o=t.minScale,h=t.maxScale;if(this._isWithinScaleRange(o,h)&&r&&""!==r){var f=this._map,c=!e.url&&!f.spatialReference.equals(e.spatialReference);for(i=0;i<e.graphics.length;i++)if(!1!==(a=e.graphics[i]).visible&&!a._suspended){if(s=a.geometry,c){if(!g.canProject(s,f))continue;s=g.project(s,f)}s&&this._isWhere(t.where,a.attributes)&&this._isWithinScreenArea(s)&&(l=this._buildLabelText(r,a,e.fields,n),this._addLabel(l,t,e.renderer,a,n,s,f))}}},_isWithinScreenArea:function(e){var t;if(void 0===(t="point"===e.type?new d(e.x,e.y,e.x,e.y,e.spatialReference):e.getExtent()))return!1;var r=this._intersects(this._map,t);return null!==r&&0!==r.length},_isWithinScaleRange:function(e,t){var r=this._map.getScale();return!(e>0&&r>=e)&&!(t>0&&r<t)},_isWhere:function(e,t){try{if(!e)return!0;if(e){var r=e.split(" ");if(3===r.length)return this._sqlEquation(t[this._removeQuotes(r[0])],r[1],this._removeQuotes(r[2]));if(7===r.length){var n=this._sqlEquation(t[this._removeQuotes(r[0])],r[1],this._removeQuotes(r[2])),i=r[3],a=this._sqlEquation(t[this._removeQuotes(r[4])],r[5],this._removeQuotes(r[6]));switch(i){case"AND":return n&&a;case"OR":return n||a}}}return!1}catch(t){console.log("Error.: can't parse = "+e)}},_sqlEquation:function(e,t,r){switch(t){case"=":return e==r;case"<>":return e!=r;case">":return e>r;case">=":return e>=r;case"<":return e<r;case"<=":return e<=r}return!1},_removeQuotes:function(e){var t=e.indexOf('"'),r=e.lastIndexOf('"');return-1!=t&&-1!=r?e.substr(1,e.length-2):(t=e.indexOf("'"),r=e.lastIndexOf("'"),-1!=t&&-1!=r?e.substr(1,e.length-2):e)},_getSizeInfo:function(e){return e?e.sizeInfo||r.filter(e.visualVariables,w)[0]:null},_addLabel:function(e,r,n,i,a,s,o){var h,f,c,u;if(e&&""!==t.trim(e)&&r){e=e.replace(/[\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/g," "),(h=r.getSymbol(i))instanceof p?((h=new p(h.toJson())).setVerticalAlignment("baseline"),h.setHorizontalAlignment("center")):h=h instanceof v?new v(h.toJson()):new p,h.setText(e),r.symbol=h;var b=this._getProportionalSize(r.sizeInfo,i.attributes);if(b&&(h instanceof p?h.setSize(b):h instanceof v&&(h.setWidth(b),h.setHeight(b))),c=0,u=0,n){f=n.getSymbol(i);var d,L=this._getSizeInfo(n);(d=L?n.getSize(i,{sizeInfo:L,resolution:o.getResolutionInMeters()}):i.size)&&null!==d?c=u=d:f&&("simplemarkersymbol"==f.type?(c=f.size,u=f.size):"picturemarkersymbol"==f.type?(c=f.width,u=f.height):"simplelinesymbol"!=f.type&&"cartographiclinesymbol"!=f.type||(c=f.width))}var g={};g.graphic=i,g.options=a,g.geometry=s,g.labelRenderer=r,g.labelSymbol=h,g.labelWidth=h.getWidth()/2,g.labelHeight=h.getHeight()/2,g.symbolWidth=l.normalizedLength(c)/2,g.symbolHeight=l.normalizedLength(u)/2,g.text=e,g.angle=h.angle,this._preparedLabels.push(g)}},_buildLabelText:function(e,r,n,s){if(s.hasExpression){var l=y.getEvalOptions({expression:s.arcadeExpr,feature:r,layer:r.getLayer(),spatialReference:this._map.spatialReference}),o=r.evaluateExpression(s.arcadeExpr,l);return h.isDefined(o)?""+o:""}var f=r.attributes;return e.replace(/{[^}]*}/g,(function(e){var r,l,o,u=e;for(r=0;r<n.length;r++){if("{"+n[r].name+"}"==e){u=f[n[r].name];var b=n[r].domain;if(b&&t.isObject(b)){if("codedValue"==b.type&&s.useCodedValues){var p=u;for(o=0;o<b.codedValues.length;o++)if(b.codedValues[o].code==p){u=b.codedValues[o].name;break}}return null==u?"":u}var v=n[r].type;if(s.fieldInfos){var d=s.fieldInfos;for(l=0;l<d.length;l++)if("{"+d[l].fieldName+"}"==e){var L=d[l].format;if("esriFieldTypeDate"==v){var g=L&&L.dateFormat||"shortDate";u=h.substitute({myKey:u},"${myKey}",{format:{myKey:t.mixin({formatType:"DateFormat"},c.prototype._dateFormatsJson[g])}})}else"esriFieldTypeInteger"!=v&&"esriFieldTypeSingle"!=v&&"esriFieldTypeSmallInteger"!=v&&"esriFieldTypeLong"!=v&&"esriFieldTypeDouble"!=v||L&&(u=a.format(u,{places:L.places}),L.digitSeparator||i.group&&(u=u.replace(new RegExp("\\"+i.group,"g"),"")));break}}break}u=""}return null==u?"":u}))},_getLabelExpression:function(e){var t="";return e.labelExpressionInfo?t=e.labelExpressionInfo.value||e.labelExpressionInfo.expression:this._validSyntax(e.labelExpression)&&(t=this._convertLabelExpression(e.labelExpression)),t},_validSyntax:function(e){return/^(\s*\[[^\]]+\]\s*)+$/i.test(e)},_convertLabelExpression:function(e){return e.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}")},_getProportionalSize:function(e,t){if(!e)return null;var r=h.substitute(t,"${"+e.field+"}",{first:!0});return e.minSize&&e.maxSize&&e.minDataValue&&e.maxDataValue&&r&&!(e.maxDataValue-e.minDataValue<=0)?(e.maxSize-e.minSize)/(e.maxDataValue-e.minDataValue)*(r-e.minDataValue)+e.minSize:null},_convertOptions:function(e){var t,r,n=!0,i="shortDate",a=null,s=null,l="",o=!0;if(e){e.format&&(i=e.format.dateFormat,a={places:e.format.places,digitSeparator:e.format.digitSeparator}),s=e.fieldInfos,l=e.labelPlacement,null!=e.useCodedValues&&(n=e.useCodedValues);var h=e.labelExpressionInfo;if(h){var f=h.expression;f&&!h.value&&(r=!0,t=new u({expression:f,returnType:"string",profile:y}))}}return"always-horizontal"!=l&&"esriServerPolygonPlacementAlwaysHorizontal"!=l||(o=!1),{useCodedValues:n,dateFormat:i,numberFormat:a,fieldInfos:s,pointPriorities:"above-center"==l||"esriServerPointLabelPlacementAboveCenter"==l?"AboveCenter":"above-left"==l||"esriServerPointLabelPlacementAboveLeft"==l?"AboveLeft":"above-right"==l||"esriServerPointLabelPlacementAboveRight"==l?"AboveRight":"below-center"==l||"esriServerPointLabelPlacementBelowCenter"==l?"BelowCenter":"below-left"==l||"esriServerPointLabelPlacementBelowLeft"==l?"BelowLeft":"below-right"==l||"esriServerPointLabelPlacementBelowRight"==l?"BelowRight":"center-center"==l||"esriServerPointLabelPlacementCenterCenter"==l?"CenterCenter":"center-left"==l||"esriServerPointLabelPlacementCenterLeft"==l?"CenterLeft":"center-right"==l||"esriServerPointLabelPlacementCenterRight"==l?"CenterRight":"AboveRight",lineLabelPlacement:"above-start"==l||"below-start"==l||"center-start"==l?"PlaceAtStart":"above-end"==l||"below-end"==l||"center-end"==l?"PlaceAtEnd":"PlaceAtCenter",lineLabelPosition:"above-after"==l||"esriServerLinePlacementAboveAfter"==l||"above-along"==l||"esriServerLinePlacementAboveAlong"==l||"above-before"==l||"esriServerLinePlacementAboveBefore"==l||"above-start"==l||"esriServerLinePlacementAboveStart"==l||"above-end"==l||"esriServerLinePlacementAboveEnd"==l?"Above":"below-after"==l||"esriServerLinePlacementBelowAfter"==l||"below-along"==l||"esriServerLinePlacementBelowAlong"==l||"below-before"==l||"esriServerLinePlacementBelowBefore"==l||"below-start"==l||"esriServerLinePlacementBelowStart"==l||"below-end"==l||"esriServerLinePlacementBelowEnd"==l?"Below":"center-after"==l||"esriServerLinePlacementCenterAfter"==l||"center-along"==l||"esriServerLinePlacementCenterAlong"==l||"center-before"==l||"esriServerLinePlacementCenterBefore"==l||"center-start"==l||"esriServerLinePlacementCenterStart"==l||"center-end"==l||"esriServerLinePlacementCenterEnd"==l?"OnLine":"Above",labelRotation:o,howManyLabels:"OneLabel",hasExpression:r,arcadeExpr:t}}});return s("extend-esri")&&t.setObject("layers.LabelLayer",C,o),C}));