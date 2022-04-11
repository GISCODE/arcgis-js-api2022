/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/Error","../../../core/maybe","../../../renderers/support/rasterRendererHelper","../support/utils"],(function(e,r,t,n,o,i){"use strict";function l(e){return s.apply(this,arguments)}function s(){return(s=r._asyncToGenerator((function*(e){const r=(e=yield i.processRasterRendererParameters(e)).layer.supportsMultidirectionalHillshade();if("multi-directional"===e.hillshadeType&&!r)throw new t("raster-shaded-relief-renderer:not-supported","multi-directional hillshade type is only supported on 10.8.1+ servers");return r||(e.hillshadeType="traditional"),e}))).apply(this,arguments)}function a(e){return p.apply(this,arguments)}function p(){return(p=r._asyncToGenerator((function*(e){e=yield l(e);const r=o.createShadedReliefRenderer(e.layer.rasterInfo,e.hillshadeType);if(!n.isSome(r))throw new t("raster-shaded-relief-renderer:not-supported","Only elevation raster data is supported");return d(r,e),{renderer:r}}))).apply(this,arguments)}function d(e,r){const{scalingType:t,colorRamp:n}=r;null!=t&&(e.scalingType=t),void 0!==n&&(e.colorRamp=n)}e.createRenderer=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
