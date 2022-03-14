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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojox/gfx/_base","../kernel","../Color","../layers/support/attributeUtils","../support/expressionUtils","../arcadeProfiles/visualizationProfile"],(function(t,e,o,i,n,r,a,s,c,l){var f=Math.PI,u=t(null,{declaredClass:"esri.renderer.Renderer",constructor:function(t){if(this._cache={},t&&!t.declaredClass){if(this.rotationInfo=t.rotationInfo,!this.rotationInfo){var o=t.rotationType,i=t.rotationExpression;(o||i)&&(this.rotationInfo={type:o,expression:i})}this.setRotationInfo(this.rotationInfo),this.setSizeInfo(this._readSizeInfo(t.sizeInfo)),this.setColorInfo(this._readColorInfo(t.colorInfo)),this.setOpacityInfo(this._readOpacityInfo(t.transparencyInfo)),this.setVisualVariables(this._readVariables(t.visualVariables)),this.setAuthoringInfo(t.authoringInfo)}this.getSymbol=e.hitch(this,this.getSymbol)},getSymbol:function(t){},_readSizeInfo:function(t){if(t){var e=t.minSize,i=t.maxSize;e&&(t.minSize="number"==typeof e?n.pt2px(e):this._readSizeInfo(e)),i&&(t.maxSize="number"==typeof i?n.pt2px(i):this._readSizeInfo(i)),t.stops&&o.forEach(t.stops,(function(t){t.size&&"number"==typeof t.size&&(t.size=n.pt2px(t.size))}))}return t},_readColorInfo:function(t){return t&&(o.forEach(t.colors,(function(o,i){e.isArray(o)&&(t.colors[i]=a.toDojoColor(o))})),o.forEach(t.stops,(function(o,i){o.color&&e.isArray(o.color)&&(t.stops[i].color=a.toDojoColor(o.color))}))),t},_readOpacityInfo:function(t){var i;return t&&((i=e.mixin({},t)).transparencyValues&&(i.opacityValues=o.map(i.transparencyValues,(function(t){return 1-t/100})),delete i.transparencyValues),i.stops&&(i.stops=o.map(i.stops,(function(t){return(t=e.mixin({},t)).opacity=1-t.transparency/100,delete t.transparency,t})))),i},_readVariables:function(t){return t&&(t=o.map(t,(function(t){return"sizeInfo"===t.type?t=this._readSizeInfo(t):"colorInfo"===t.type?t=this._readColorInfo(t):"transparencyInfo"===t.type&&((t=this._readOpacityInfo(t)).type="opacityInfo"),t}),this)),t},setAuthoringInfo:function(t){this.authoringInfo=t},setRotationInfo:function(t){var o=this.rotationInfo="string"==typeof t?{field:t}:t;if(o){if(o.expression&&!e.isFunction(o.expression)&&!o.field){var i=o.expression.match(this.rotationRE);i&&i[1]&&(o.field=i[1])}o.rotationType=o.type}return this._cache.rotationInfo=this._processRotationInfo(o),this},rotationRE:/^\[([^\]]+)\]$/i,_processRotationInfo:function(t){return t&&!t.rotationType&&(t.rotationType="geographic"),this._createCache(t)},getRotationAngle:function(t,e){var o=this._getVarInfo(e&&e.rotationInfo,"rotationInfo"),i=o.variable,n=this._cache[o.cacheKey],r="arithmetic"===this._getRotationType(i),a=i.field,s=n&&n.hasExpr,c=null;return(a||s)&&null!=(c=this._getDataValue(t,i,null,n))&&(c=(c+(r?-90:0))*(r?-1:1)),c},_getRotationType:function(t){return t&&("rotationInfo"===t.type?t.rotationType:t.type)},_getDataValue:function(t,e,o,i,n){if(!i){var r=this._getVarInfo(e,o);e=r.variable,i=this._cache[r.cacheKey],"sizeInfo"===o&&(i=i.root)}return t._getDataValue(e,i,c,n)},setVisualVariables:function(t){var e=this._cache;return o.forEach(this.visualVariables,(function(t,o){e.hasOwnProperty(o)&&(e[o]=null)}),this),this.visualVariables=t,o.some(t,(function(t){return!!t.target}))&&t.sort((function(t,e){return t.target===e.target?0:t.target?1:-1})),o.forEach(t,(function(t,o){"colorInfo"===t.type?e[o]=this._processColorInfo(t):"opacityInfo"===t.type?e[o]=this._processOpacityInfo(t):"sizeInfo"===t.type?e[o]=this._processSizeInfo(t):"rotationInfo"===t.type&&(e[o]=this._processRotationInfo(t))}),this),this},getVisualVariableValues:function(t){var e,i=this.visualVariables;return i&&(e=o.map(i,(function(e){var o;switch(e.type){case"sizeInfo":o=this.getSize(t,{sizeInfo:e});break;case"colorInfo":o=this.getColor(t,{colorInfo:e});break;case"opacityInfo":o=this.getOpacity(t,{opacityInfo:e});break;case"rotationInfo":o=this.getRotationAngle(t,{rotationInfo:e})}return{variable:e,value:o}}),this)),e},getFieldsUsedInExpressions:function(t){var e=[];return o.forEach(this._getCacheObjects(),(function(o){o.syntaxTree&&(e=e.concat(c.extractFieldNames(o.syntaxTree,t)))})),e.sort(),o.filter(e,(function(t,o){return 0===o||e[o-1]!==t}))},hasGeometryOperations:function(){return o.some(this._getCacheObjects(),(function(t){return!!t.syntaxTree&&c.hasGeometryOperations(t.syntaxTree)}))},initializeArcadeEngine:function(){var t=[];return o.forEach(this._getCacheObjects(),(function(e){e.syntaxTree&&t.push(e.syntaxTree)})),l.initialize(t)},hasVisualVariables:function(t,e){return t?!!this.getVisualVariablesForType(t,e):!!(this.getVisualVariablesForType("sizeInfo",e)||this.getVisualVariablesForType("colorInfo",e)||this.getVisualVariablesForType("opacityInfo",e)||this.getVisualVariablesForType("rotationInfo",e))},getVisualVariablesForType:function(t,e){var i,n=this.visualVariables;return!e&&this[t]?("rotationInfo"===t&&(this[t].rotationType=this[t].type),i=[this[t]]):n&&(i=o.filter(n,(function(o){return o.type===t&&("string"==typeof e?o.target===e:!1!==e||!o.target)})))&&0===i.length&&(i=void 0),i},setSizeInfo:function(t){return this.sizeInfo=this.proportionalSymbolInfo=t,this._cache.sizeInfo=this._processSizeInfo(t),this},_processSizeInfo:function(t){return t&&{root:this._createCache(t),minSize:this._createCache(t.minSize),maxSize:this._createCache(t.maxSize)}},_convertExpressionToArcade:function(t){t&&t.expression&&(t.valueExpression="$view.scale")},_getVarInfo:function(t,e){var i;return t&&t.type===e?(i=o.indexOf(this.visualVariables,t),t=this.visualVariables[i]):(i=e,t=this[e]),{variable:t,cacheKey:i}},setProportionalSymbolInfo:function(t){return this.setSizeInfo(t),this},getSize:function(t,e){var o=this._getVarInfo(e&&e.sizeInfo,"sizeInfo"),i=o.variable,n=this._cache[o.cacheKey],r=null;if(i){var a=i.minSize,s=i.maxSize,c="object"==typeof a&&a?this._getSize(t,a,n&&n.minSize,e):a,l="object"==typeof s&&s?this._getSize(t,s,n&&n.maxSize,e):s;r=this._getSize(t,i,n&&n.root,e,[c,l])}return r},_getSize:function(t,e,o,i,n){var r=e.field,a=e.stops,s=0,c=o&&o.hasExpr,l=o&&o.ipData,u=o&&o.isScaleDriven,p="object"==typeof t&&!!t,h="number"==typeof t?t:null;if(r||u||c){var y,I=i&&i.scale,_=n?n[0]:e.minSize,g=n?n[1]:e.maxSize,m=e.minDataValue,z=e.maxDataValue,b=e.valueUnit||"unknown",v=e.valueRepresentation,V=e.scaleBy,d=i&&i.shape;if(u?h=I:"number"!=typeof h&&p&&(h=this._getDataValue(t,e,null,o)),!this._isValidNumber(h))return null;if(a){var x,S=this._lookupData(h,l),C=S[0],O=S[1];s=C===O?a[C].size:(x=a[C].size)+(a[O].size-x)*S[2]}else if(null!=_&&null!=g&&null!=m&&null!=z)if(h<=m)s=_;else if(h>=z)s=g;else if(y=(h-m)/(z-m),"area"===V&&d){var T="circle"===d,j=T?f*Math.pow(_/2,2):_*_,w=j+y*((T?f*Math.pow(g/2,2):g*g)-j);s=T?2*Math.sqrt(w/f):Math.sqrt(w)}else s=_+y*(g-_);else if("unknown"===b)null!=_&&null!=m&&(_&&m?(y=h/m,s="circle"===d?2*Math.sqrt(y*Math.pow(_/2,2)):"square"===d||"diamond"===d||"image"===d?Math.sqrt(y*Math.pow(_,2)):y*_):s=h+(_||m),s=s<_?_:s,null!=g&&s>g&&(s=g));else{var E=(i&&i.resolution?i.resolution:1)*this._meterIn[b];"area"===v?(s=Math.sqrt(h/f)/E,s*=2):(s=h/E,"radius"!==v&&"distance"!==v||(s*=2)),null!=_&&s<_&&(s=_),null!=g&&s>g&&(s=g)}}else null==(s=a&&a[0]&&a[0].size)&&(s=e.minSize);return s=isNaN(s)?0:s},getSizeRangeAtScale:function(t,e){var o,i=this._getVarInfo(t,"sizeInfo"),n=this._cache[i.cacheKey],r={scale:e};if((t=i.variable)&&e){var a,s,c=t.minSize,l=t.maxSize,f=t.stops;if(f&&f.length?(a=f[0].size,s=f[f.length-1].size):(a="object"==typeof c&&c?this._getSize({},c,n&&n.minSize,r):c,s="object"==typeof l&&l?this._getSize({},l,n&&n.maxSize,r):l),null!=a||null!=s){if(a>s){var u=s;s=a,a=u}o={minSize:a,maxSize:s}}}return o},setColorInfo:function(t){return this.colorInfo=t,this._cache.colorInfo=this._processColorInfo(t),this},_createCache:function(t,e){var o=s.createAttributeCache(t,e);return o&&(o.ipData=this._interpolateData(t)),o},_getCacheObjects:function(t){var e,o=t||this._cache,i=[];for(e in o){var n=o[e];o.hasOwnProperty(e)&&n&&"object"==typeof n&&(n.hasOwnProperty("idSource")?i.push(n):i=i.concat(this._getCacheObjects(n)))}return i},_processColorInfo:function(t){return t&&(o.forEach(t.colors,(function(o,i){e.isArray(o)&&(t.colors[i]=new a(o))})),o.forEach(t.stops,(function(o,i){o.color&&e.isArray(o.color)&&(t.stops[i].color=new a(o.color))}))),this._createCache(t)},getColor:function(t,e){var o=this._getVarInfo(e&&e.colorInfo,"colorInfo");return this._getColorComponent(t,o.variable,this._cache[o.cacheKey])},setOpacityInfo:function(t){return this.opacityInfo=t,this._cache.opacityInfo=this._processOpacityInfo(t),this},_processOpacityInfo:function(t){return this._createCache(t)},getOpacity:function(t,e){var o=this._getVarInfo(e&&e.opacityInfo,"opacityInfo");return this._getColorComponent(t,o.variable,this._cache[o.cacheKey],!0)},_getColorComponent:function(t,e,o,i,n){var r,a="object"==typeof t&&!!t,s=e&&e.field,c="number"==typeof t?t:null,l=o&&o.hasExpr,f=o&&o.ipData;if(s||l)"number"!=typeof c&&a&&(c=this._getDataValue(t,e,null,o)),this._isValidNumber(c)||(c=null),null!=c&&(r=i?this._getOpacity(c,e,f):this._getColor(c,e,f));else if(e){var u=e.stops;i?null==(r=u&&u[0]&&u[0].opacity)&&(r=e.opacityValues&&e.opacityValues[0]):r=u&&u[0]&&u[0].color||e.colors&&e.colors[0]}return n&&(n.data=c,n.value=r),n||r},_isValidNumber:function(t){return"number"==typeof t&&!isNaN(t)&&t!==1/0&&t!==-1/0},_interpolateData:function(t){var e;if(t)if(t.colors||t.opacityValues){var i,n=(t.colors||t.opacityValues).length,r=t.minDataValue,a=(t.maxDataValue-r)/(n-1);for(e=[],i=0;i<n;i++)e[i]=r+i*a}else t.stops&&(e=o.map(t.stops,(function(t){return t.value})));return e},_getOpacity:function(t,e,o){var i,n=this._lookupData(t,o);if(e=e||this.opacityInfo,n){var r,a=n[0],s=n[1];i=a===s?this._getOpacValue(e,a):(r=this._getOpacValue(e,a))+(this._getOpacValue(e,s)-r)*n[2]}return i},_getOpacValue:function(t,e){return t.opacityValues?t.opacityValues[e]:t.stops[e].opacity},_getColor:function(t,e,o){var i,n=this._lookupData(t,o);if(e=e||this.colorInfo,n){var r=n[0],s=n[1];i=r===s?this._getColorObj(e,r):a.blendColors(this._getColorObj(e,r),this._getColorObj(e,s),n[2])}return i},_getColorObj:function(t,e){return t.colors?t.colors[e]:t.stops[e].color},_lookupData:function(t,e){var i;if(e){var n=0,r=e.length-1;o.some(e,(function(e,o){return t<e?(r=o,!0):(n=o,!1)})),i=[n,r,(t-e[n])/(e[r]-e[n])]}return i},_meterIn:{inches:1/.0254,feet:1/.3048,yards:1/.9144,miles:1/1609.344,"nautical-miles":1/1852,millimeters:1e3,centimeters:100,decimeters:10,meters:1,kilometers:.001,"decimal-degrees":180/20015077},_writeSizeInfo:function(t){if(t){t=e.mixin({},t),this._convertExpressionToArcade(t);var i=t.minSize,r=t.maxSize;i&&(t.minSize="number"==typeof i?n.px2pt(i):this._writeSizeInfo(i)),r&&(t.maxSize="number"==typeof r?n.px2pt(r):this._writeSizeInfo(r));var a=t.legendOptions;a&&(t.legendOptions=e.mixin({},a),(a=a.customValues)&&(t.legendOptions.customValues=a.slice(0))),t.stops&&(t.stops=o.map(t.stops,(function(t){return(t=e.mixin({},t)).size&&"number"==typeof t.size&&(t.size=n.px2pt(t.size)),t})))}return t},_writeColorInfo:function(t){return t&&((t=e.mixin({},t)).colors&&(t.colors=o.map(t.colors,(function(t){return a.toJsonColor(t)}))),t.stops&&(t.stops=o.map(t.stops,(function(t){return(t=e.mixin({},t)).color&&(t.color=a.toJsonColor(t.color)),t}))),t.legendOptions&&(t.legendOptions=e.mixin({},t.legendOptions))),t},_writeOpacityInfo:function(t){var i;return t&&((i=e.mixin({},t)).opacityValues&&(i.transparencyValues=o.map(i.opacityValues,(function(t){return 100*(1-t)})),delete i.opacityValues),i.stops&&(i.stops=o.map(i.stops,(function(t){return(t=e.mixin({},t)).transparency=100*(1-t.opacity),delete t.opacity,t}))),i.legendOptions&&(i.legendOptions=e.mixin({},i.legendOptions))),i},toJson:function(t){var i,n=this.visualVariables,r=e.clone(this.authoringInfo),a=t&&t.useLegacyRotationProperties,s=this.getVisualVariablesForType("rotationInfo",!1),c=s&&s[0],l=c&&c.field;return c&&(c===this.rotationInfo||a)&&(i=c.expression||l&&(e.isFunction(l)?l:"["+l+"]")),n&&(n=o.map(n,(function(t){return"sizeInfo"===t.type?t=this._writeSizeInfo(t):"colorInfo"===t.type?t=this._writeColorInfo(t):"opacityInfo"===t.type?(t=this._writeOpacityInfo(t)).type="transparencyInfo":"rotationInfo"===t.type&&(t=a?null:e.mixin({},t)),t}),this),n=o.filter(n,(function(t){return null!=t}))),r&&o.forEach(r.visualVariables,(function(t){"opacityInfo"===t.type&&(t.type="transparencyInfo")})),{rotationType:i&&(this._getRotationType(c)||"geographic"),rotationExpression:i,colorInfo:this._writeColorInfo(this.colorInfo),transparencyInfo:this._writeOpacityInfo(this.opacityInfo),sizeInfo:this._writeSizeInfo(this.sizeInfo),visualVariables:n,authoringInfo:r}}});return i("extend-esri")&&e.setObject("renderer.Renderer",u,r),u}));