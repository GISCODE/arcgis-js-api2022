/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../core/has"],(function(e,t){"use strict";function r(t){switch(t){case e.SupportedGraphicResult.SUPPORTED:break;case e.SupportedGraphicResult.GRAPHICS_LAYER_MISSING:return"not owned by a graphics layer";case e.SupportedGraphicResult.GEOMETRY_MISSING:return"no geometry";case e.SupportedGraphicResult.GEOMETRY_TYPE_UNSUPPORTED:return"the geometry type is not supported";case e.SupportedGraphicResult.ELEVATION_MODE_UNSUPPORTED:return"the elevation mode is not supported";case e.SupportedGraphicResult.SYMBOL_TYPE_UNSUPPORTED:return"the symbol type is not supported"}return""}var E;e.SupportedGraphicResult=void 0,(E=e.SupportedGraphicResult||(e.SupportedGraphicResult={}))[E.SUPPORTED=0]="SUPPORTED",E[E.GRAPHICS_LAYER_MISSING=1]="GRAPHICS_LAYER_MISSING",E[E.GEOMETRY_MISSING=2]="GEOMETRY_MISSING",E[E.GEOMETRY_TYPE_UNSUPPORTED=3]="GEOMETRY_TYPE_UNSUPPORTED",E[E.ELEVATION_MODE_UNSUPPORTED=4]="ELEVATION_MODE_UNSUPPORTED",E[E.SYMBOL_TYPE_UNSUPPORTED=5]="SYMBOL_TYPE_UNSUPPORTED",e.isSupportedGraphicResultMessage=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));