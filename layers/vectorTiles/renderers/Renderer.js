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

define(["../core/declare","../core/Accessor","../core/JSONSupport","../core/kebabDictionary","../core/screenUtils","../core/lang","../core/Error","../support/arcadeUtils","../webdoc/support/opacityUtils","../Color","./support/utils","./support/AuthoringInfo"],(function(e,t,i,o,a,r,s,n,l,c,u,p){var f="size",h=o({sizeInfo:f,colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation"}),y=o({widthAndDepth:"width-and-depth"}),v=o({unknown:"unknown",inch:"inches",foot:"feet",yard:"yards",mile:"miles","nautical-mile":"nautical-miles",millimeter:"millimeters",centimeter:"centimeters",decimeter:"decimeters",meter:"meters",kilometer:"kilometers","decimal-degree":"decimal-degrees"}),m=(o({classedSize:"classed-size",classedColor:"classed-color",univariateColorSize:"univariate-color-size"}),o({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation"}),o({percentTotal:"percent-of-total"}),Math.PI),d=l.opacityToTransparency,_=l.transparencyToOpacity;return e([t,i],{declaredClass:"esri.renderers.Renderer",properties:{authoringInfo:{type:p,value:null,json:{write:!0}},requiredFields:{dependsOn:["visualVariables"],get:function(){var e=Object.create(null);return this.collectRequiredFields(e),Object.keys(e).sort()}},type:{type:String,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}},visualVariables:{json:{read:{source:["visualVariables","rotationType","rotationExpression"],reader:function(e,t){return this._readVariables(e,t)}},write:function(e,t,i,o){var a=[];e.forEach((function(e,t){e.type===f?a.push(this._writeSizeInfo(e,o,t)):"color"===e.type?a.push(this._writeColorInfo(e,o,t)):"opacity"===e.type?a.push(this._writeOpacityInfo(e,o,t)):"rotation"===e.type&&a.push(this._writeRotationInfo(e,o,t))}),this),t.visualVariables=a}}}},constructor:function(){this._cache={}},_rotationRE:/^\[([^\]]+)\]$/i,_viewScaleRE:/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i,_visualVariablesSetter:function(e){var t=this._cache;this.visualVariables&&this.visualVariables.forEach((function(e,i){t.hasOwnProperty(i)&&(t[i]=null)}),this),e&&e.some((function(e){return!!e.target}))&&e.sort((function(e,t){return e.target===t.target?0:e.target?1:-1})),e&&e.forEach((function(e,i){"color"===e.type?t[i]=this._processColorInfo(e):"opacity"===e.type?t[i]=this._processOpacityInfo(e):e.type===f?t[i]=this._processSizeInfo(e):"rotation"===e.type&&(t[i]=this._processRotationInfo(e))}),this),this._set("visualVariables",e)},getSymbol:function(e,t){},getVisualVariableValues:function(e,t){var i,o=this.visualVariables;return o&&(i=o.map((function(i){var o,a=i.type,s=a+"Info";switch((t=r.mixin({},t))[s]=i,a){case f:o=this.getSize(e,t);break;case"color":o=this.getColor(e,t);break;case"opacity":o=this.getOpacity(e,t);break;case"rotation":o=this.getRotationAngle(e,t)}return{variable:i,value:o}}),this).filter((function(e){return null!=e.value}),this)),i},hasVisualVariables:function(e,t){return e?!!this.getVisualVariablesForType(e,t):!!(this.getVisualVariablesForType(f,t)||this.getVisualVariablesForType("color",t)||this.getVisualVariablesForType("opacity",t)||this.getVisualVariablesForType("rotation",t))},getVisualVariablesForType:function(e,t){var i,o=this.visualVariables;return o&&(i=o.filter((function(i){return i.type===e&&("string"==typeof t?i.target===t:!1!==t||!i.target)})))&&0===i.length&&(i=void 0),i},getSize:function(e,t){var i=this._getVarInfo(t&&t.sizeInfo,f),o=i.variable,a=this._cache[i.cacheKey],r=null;if(o){var s=o.minSize,n=o.maxSize,l="object"==typeof s&&s?this._getSize(e,s,a&&a.minSize,t):s,c="object"==typeof n&&n?this._getSize(e,n,a&&a.maxSize,t):n;r=this._getSize(e,o,a&&a.root,t,[l,c])}return r},getSizeRangeAtScale:function(e,t){var i,o=this._getVarInfo(e,f),a=this._cache[o.cacheKey],r={scale:t};if((e=o.variable)&&t){var s=e.minSize,n=e.maxSize,l="object"==typeof s&&s?this._getSize({},s,a&&a.minSize,r):s,c="object"==typeof n&&n?this._getSize({},n,a&&a.maxSize,r):n;if(null!=l||null!=c){if(l>c){var u=c;c=l,l=u}i={minSize:l,maxSize:c}}}return i},getColor:function(e,t){var i=this._getVarInfo(t&&t.colorInfo,"color");return this._getColorComponent(e,i.variable,this._cache[i.cacheKey],t)},getOpacity:function(e,t){var i=this._getVarInfo(t&&t.opacityInfo,"opacity");return this._getColorComponent(e,i.variable,this._cache[i.cacheKey],t,!0)},getRotationAngle:function(e,t){var i=this._getVarInfo(t&&t.rotationInfo,"rotation"),o=i.variable,a=this._cache[i.cacheKey],r=o.axis||"heading",s="heading"===r&&"arithmetic"===o.rotationType?90:0,l="heading"===r&&"arithmetic"===o.rotationType?-1:1,c=o.field,u=a&&a.compiledFunc,p=e.attributes,f=0;return(c||u)&&(u?f=n.executeFunction(u,n.createExecContext(e,n.getViewInfo(t))):"function"==typeof c?f=c.apply(this,arguments):p&&(f=p[c]||0),f="number"!=typeof f||isNaN(f)?null:s+l*f),f},collectRequiredFields:function(e){var t=[];this.visualVariables&&(t=t.concat(this.visualVariables)),t.forEach((function(t){t&&(t.field&&(e[t.field]=!0),t.normalizationField&&(e[t.normalizationField]=!0),t.valueExpression&&n.extractFieldNames(t.valueExpression).forEach((function(t){e[t]=!0})))}))},_getVarInfo:function(e,t){var i;if(e&&e.type===t&&this.visualVariables)i=this.visualVariables.indexOf(e),e=this.visualVariables[i];else if(this.visualVariables){var o=this.getVisualVariablesForType(t);e=o&&o[0],i=this.visualVariables.indexOf(e)}return{variable:e,cacheKey:i}},_readSizeInfo:function(e){return e.axis&&(e.axis=y.fromJSON(e.axis)),e.valueUnit&&(e.valueUnit=v.fromJSON(e.valueUnit)),e},_readColorInfo:function(e){return e&&(e.colors&&e.colors.forEach((function(t,i){Array.isArray(t)?e.colors[i]=c.fromJSON(t):e.colors[i]=new c(t)})),e.stops&&e.stops.forEach((function(t,i){t.color&&Array.isArray(t.color)?e.stops[i].color=c.fromJSON(t.color):t.color&&(e.stops[i].color=new c(t.color))}))),e},_readOpacityInfo:function(e){var t;return e&&((t=r.mixin({},e)).transparencyValues&&(t.opacityValues=t.transparencyValues.map(_),delete t.transparencyValues),t.stops&&(t.stops=t.stops.map((function(e){return(e=r.mixin({},e)).opacity=_(e.transparency),delete e.transparency,e})))),t},_readVariables:function(e,t){e&&(e=e.map((function(e){return(e=r.clone(e)).type=h.fromJSON(e.type),e.type===f?e=this._readSizeInfo(e):"color"===e.type?e=this._readColorInfo(e):"opacity"===e.type&&(e=this._readOpacityInfo(e)),e}),this));var i=t.rotationType,o=t.rotationExpression;if(o){var a={type:"rotation",rotationType:i},s=o.match(this._rotationRE);s&&s[1]&&(a.field=s[1],e||(e=[]),e.push(a))}return e},_createCache:function(e){var t=e&&e.valueExpression,i=n.createSyntaxTree(t),o=n.createFunction(i),a=!(!e||!e.expression)||this._viewScaleRE.test(t);return{ipData:this._interpolateData(e),hasExpr:!!t,compiledFunc:o,isScaleDriven:a}},_processColorInfo:function(e){return e&&(e.colors&&e.colors.forEach((function(t,i){t instanceof c||(e.colors[i]=new c(t))})),e.stops&&e.stops.forEach((function(t,i){!t.color||t.color instanceof c||(e.stops[i].color=new c(t.color))})),this._sortStops(e.stops)),this._createCache(e)},_processOpacityInfo:function(e){return this._sortStops(e&&e.stops),this._createCache(e)},_processSizeInfo:function(e){return e.stops&&Array.isArray(e.stops)?e.stops=this._processSizeInfoStops(e.stops):(e.minSize=e.minSize&&this._processSizeInfoSize(e.minSize),e.maxSize=e.maxSize&&this._processSizeInfoSize(e.maxSize)),{root:this._createCache(e),minSize:this._createCache(e.minSize),maxSize:this._createCache(e.maxSize)}},_processSizeInfoSize:function(e){return"object"==typeof e?e.stops=this._processSizeInfoStops(e.stops):e=a.toPt(e),e},_processSizeInfoStops:function(e){return e&&Array.isArray(e)&&(e.forEach((function(e){e.size=a.toPt(e.size)})),this._sortStops(e)),e},_sortStops:function(e){e&&Array.isArray(e)&&e.sort((function(e,t){return e.value-t.value}))},_processRotationInfo:function(e){return this._createCache(e)},_getSize:function(e,t,i,o,a){var r=e.attributes,s=t.field,l=t.stops,c=0,p=i&&i.hasExpr,f=i&&i.compiledFunc,h=i&&i.ipData,y=i&&i.isScaleDriven,v="number"==typeof e,d=v?e:null;if(s||y||p){var _,g=o&&o.scale,S=a?a[0]:t.minSize,V=a?a[1]:t.maxSize,b=t.minDataValue,x=t.maxDataValue,z=t.valueUnit||"unknown",I=t.valueRepresentation,O=t.scaleBy,C=t.normalizationField,w=r?parseFloat(r[C]):void 0,E=o&&o.shape;if(y?d=null==g?this._getAverageValue(t):g:"number"!=typeof d&&(p?d=n.executeFunction(f,n.createExecContext(e,n.getViewInfo(o))):"function"==typeof s?d=s.apply(this,arguments):r&&(d=r[s])),null==d||C&&!v&&(isNaN(w)||0===w))return null;if(isNaN(w)||v||(d/=w),l){var F,N=this._lookupData(d,h),T=N[0],A=N[1];c=T===A?l[T].size:(F=l[T].size)+(l[A].size-F)*N[2]}else if(null!=S&&null!=V&&null!=b&&null!=x)if(d<=b)c=S;else if(d>=x)c=V;else if(_=(d-b)/(x-b),"area"===O&&E){var D="circle"===E,k=D?m*Math.pow(S/2,2):S*S,J=D?m*Math.pow(V/2,2):V*V,R=k+_*(J-k);c=D?2*Math.sqrt(R/m):Math.sqrt(R)}else c=S+_*(V-S);else if("unknown"===z)null!=S&&null!=b?(S&&b?(_=d/b,c="circle"===E?2*Math.sqrt(_*Math.pow(S/2,2)):"square"===E||"diamond"===E||"image"===E?Math.sqrt(_*Math.pow(S,2)):_*S):c=d+(S||b),c=c<S?S:c,null!=V&&c>V&&(c=V)):c=d;else{var j=(o&&o.resolution?o.resolution:1)*u.meterIn[z];"area"===I?(c=Math.sqrt(d/m)/j,c*=2):(c=d/j,"radius"!==I&&"distance"!==I||(c*=2)),null!=S&&c<S&&(c=S),null!=V&&c>V&&(c=V)}}else t&&null==(c=l&&l[0]&&l[0].size)&&(c=t.minSize);return c=isNaN(c)?0:c},_getAverageValue:function(e){var t,i,o=e.stops;return o?(t=o[0].value,i=o[o.length-1].value):(t=e.minDataValue||0,i=e.maxDataValue||0),(t+i)/2},_getColorComponent:function(e,t,i,o,a,r){var s,l=e.attributes,c=t&&t.field,u="number"==typeof e,p=u?e:null,f=i&&i.hasExpr,h=i&&i.compiledFunc,y=i&&i.ipData;if(c||f){var v=t.normalizationField,m=l?parseFloat(l[v]):void 0;"number"!=typeof p&&(f?p=n.executeFunction(h,n.createExecContext(e,n.getViewInfo(o))):"function"==typeof c?p=c.apply(this,arguments):l&&(p=l[c])),null==p||v&&!u&&(isNaN(m)||0===m)||(isNaN(m)||u||(p/=m),s=a?this._getOpacity(p,t,y):this._getColor(p,t,y))}else if(t){var d=t.stops;a?null==(s=d&&d[0]&&d[0].opacity)&&(s=t.opacityValues&&t.opacityValues[0]):s=d&&d[0]&&d[0].color||t.colors&&t.colors[0]}return r&&(r.data=p,r.value=s),r||s},_interpolateData:function(e){var t;if(e)if(e.colors||e.opacityValues){var i,o=(e.colors||e.opacityValues).length,a=e.minDataValue,r=(e.maxDataValue-a)/(o-1);for(t=[],i=0;i<o;i++)t[i]=a+i*r}else e.stops&&(t=e.stops.map((function(e){return e.value||0})));return t},_getOpacity:function(e,t,i){var o,a=this._lookupData(e,i);if(t=t||this.opacityInfo,a){var r,s=a[0],n=a[1];o=s===n?this._getOpacValue(t,s):(r=this._getOpacValue(t,s))+(this._getOpacValue(t,n)-r)*a[2]}return o},_getOpacValue:function(e,t){return e.opacityValues?e.opacityValues[t]:e.stops[t].opacity},_getColor:function(e,t,i){var o,a=this._lookupData(e,i);if(t=t||this.colorInfo,a){var r=a[0],s=a[1];o=r===s?this._getColorObj(t,r):c.blendColors(this._getColorObj(t,r),this._getColorObj(t,s),a[2]),o=new c(o)}return o},_getColorObj:function(e,t){return e.colors?e.colors[t]:e.stops[t].color},_lookupData:function(e,t){var i;if(t){var o=0,a=t.length-1;t.some((function(t,i){return e<t?(a=i,!0):(o=i,!1)})),i=[o,a,(e-t[o])/(t[a]-t[o])]}return i},_processForContext:function(e,t,i){if(t&&"web-scene"===t.origin){var o=null!=e.expression,a=null!=e.valueExpressionTitle&&"rotation"===e.type;t.messages&&(o&&t.messages.push(new s("property:unsupported",e.type+"VisualVariable.expression is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:i+".expression",context:t})),a&&t.messages.push(new s("property:unsupported",e.type+"VisualVariable.valueExpressionTitle is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:i+".valueExpressionTitle",context:t}))),o&&delete e.expression,a&&delete e.valueExpressionTitle}else e.type===f&&this._convertExpressionToArcade(e)},_writeRotationInfo:function(e,t,i){return e&&(e=r.mixin({},e),this._processForContext(e,t,"visualVariables["+i+"]"),e.type=h.toJSON(e.type),e=r.fixJson(e,!0)),e},_convertExpressionToArcade:function(e){e&&e.expression&&(e.valueExpression="$view.scale")},_writeSizeInfo:function(e,t,i){if(e){e=r.mixin({},e),this._processForContext(e,t,"string"==typeof i?i:"visualVariables["+i+"]");var o=e.minSize,a=e.maxSize;o&&(e.minSize="number"==typeof o?o:this._writeSizeInfo(o,t,"visualVariables["+i+"].minSize")),a&&(e.maxSize="number"==typeof a?a:this._writeSizeInfo(a,t,"visualVariables["+i+"].maxSize"));var s=e.legendOptions,n=e.type,l=e.axis;e.type=h.toJSON(n),l&&(e.axis=y.toJSON(l)),s&&(e.legendOptions=r.mixin({},s),(s=s.customValues)&&(e.legendOptions.customValues=s.slice(0))),e.stops&&(e.stops=e.stops.map((function(e){return null===(e=r.mixin({},e)).label&&delete e.label,e}))),e=r.fixJson(e,!0)}return e},_writeColorInfo:function(e,t,i){return e&&(e=r.mixin({},e),this._processForContext(e,t,"visualVariables["+i+"]"),e.type=h.toJSON(e.type),e.colors&&(e.colors=e.colors.map((function(e){return c.toJSON(e)}))),e.stops&&(e.stops=e.stops.map((function(e){return(e=r.mixin({},e)).color&&(e.color=c.toJSON(e.color)),null==e.value&&(e.value=0),null===e.label&&delete e.label,e}))),e.legendOptions&&(e.legendOptions=r.mixin({},e.legendOptions)),e=r.fixJson(e,!0)),e},_writeOpacityInfo:function(e,t,i){var o;return e&&(o=r.mixin({},e),this._processForContext(o,t,"visualVariables["+i+"]"),o.type=h.toJSON(o.type),o.opacityValues&&(o.transparencyValues=o.opacityValues.map(d),delete o.opacityValues),o.stops&&(o.stops=o.stops.map((function(e){return(e=r.mixin({},e)).transparency=d(e.opacity),delete e.opacity,null===e.label&&delete e.label,e}))),o.legendOptions&&(o.legendOptions=r.mixin({},o.legendOptions)),o=r.fixJson(o,!0)),o}})}));