/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../core/Error","../../../../core/Logger","./enums","./Utils"],(function(e,s,i,l,a){"use strict";const r=i.getLogger("esri.views.2d.engine.webgl");function n(e){return a.isNumber(e.minDataValue)&&a.isNumber(e.maxDataValue)&&null!=e.minSize&&null!=e.maxSize?l.WGLVVFlag.SIZE_MINMAX_VALUE:(e.expression&&"view.scale"===e.expression||e.valueExpression&&"$view.scale"===e.valueExpression)&&Array.isArray(e.stops)?l.WGLVVFlag.SIZE_SCALE_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&(Array.isArray(e.stops)||"levels"in e&&e.levels)?l.WGLVVFlag.SIZE_FIELD_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&null!=e.valueUnit?l.WGLVVFlag.SIZE_UNIT_VALUE:(r.error(new s("mapview-bad-type","Found invalid size VisualVariable",e)),l.WGLVVFlag.NONE)}e.getTypeOfSizeVisualVariable=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
