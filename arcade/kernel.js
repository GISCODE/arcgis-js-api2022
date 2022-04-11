/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../geometry/Extent"],(function(e,r){"use strict";function s(e){if(void 0===e)return null;if("number"==typeof e)return e;let r=e.toLowerCase();switch(r=r.replace(/\s/g,""),r=r.replace(/-/g,""),r){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":return 109404;case"miles":case"mile":case"squaremile":case"squaremiles":return 109413;case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"km":return 109414;case"acres":case"acre":case"ac":return 109402;case"hectares":case"hectare":case"ha":return 109401;case"yard":case"yd":case"yards":case"squareyards":case"squareyard":return 109442;case"feet":case"ft":case"foot":case"squarefeet":case"squarefoot":return 109405;case"nm":case"nmi":case"nauticalmile":case"nauticalmiles":case"squarenauticalmile":case"squarenauticalmiles":return 109409}return null}function a(e){if(null===e)return null;switch(e.type){case"polygon":case"multipoint":case"polyline":return e.extent;case"point":return new r({xmin:e.x,ymin:e.y,xmax:e.x,ymax:e.y,spatialReference:e.spatialReference});case"extent":return e}return null}function t(e){if(void 0===e)return null;if("number"==typeof e)return e;let r=e.toLowerCase();switch(r=r.replace(/\s/g,""),r=r.replace(/-/g,""),r){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":return 9001;case"miles":case"mile":case"squaremile":case"squaremiles":return 9035;case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"km":return 9036;case"yard":case"yd":case"yards":case"squareyards":case"squareyard":return 9096;case"feet":case"ft":case"foot":case"squarefeet":case"squarefoot":return 9002;case"nm":case"nmi":case"nauticalmile":case"nauticalmiles":case"squarenauticalmile":case"squarenauticalmiles":return 9030}return null}function c(e,r){return e===r||("point"===e&&"esriGeometryPoint"===r||("polyline"===e&&"esriGeometryPolyline"===r||("polygon"===e&&"esriGeometryPolygon"===r||("extent"===e&&"esriGeometryEnvelope"===r||("multipoint"===e&&"esriGeometryMultipoint"===r||("point"===r&&"esriGeometryPoint"===e||("polyline"===r&&"esriGeometryPolyline"===e||("polygon"===r&&"esriGeometryPolygon"===e||("extent"===r&&"esriGeometryEnvelope"===e||"multipoint"===r&&"esriGeometryMultipoint"===e)))))))))}function n(e){if(null===e)return null;const r=e.clone();return void 0!==e.cache._geVersion&&(r.cache._geVersion=e.cache._geVersion),r}e.cloneGeometry=n,e.convertLinearUnitsToCode=t,e.convertSquareUnitsToCode=s,e.sameGeomType=c,e.shapeExtent=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
