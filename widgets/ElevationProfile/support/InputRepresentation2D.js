/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/maybe","../../../core/promiseUtils","../../../views/support/layerViewUtils"],(function(e,t,i,n,h){"use strict";let r=function(){function e(e){this._params=e,this._highlightTask=null,this._highlightHandle=null}var r=e.prototype;return r.destroy=function(){this.remove()},r.remove=function(){this._highlightTask=i.abortMaybe(this._highlightTask),this._highlightHandle=i.removeMaybe(this._highlightHandle)},r.update=function(e){var r=this;if(this.remove(),i.isNone(e)||!o(e))return;const s=e.layer;this._highlightTask=n.createTask(function(){var i=t._asyncToGenerator((function*(t){const i=yield r._params.view.whenLayerView(s);n.throwIfAborted(t),h.highlightsSupported(i)&&(r._highlightHandle=i.highlight(e))}));return function(e){return i.apply(this,arguments)}}())},e}();function o(e){return i.isSome(e.geometry)&&"polyline"===e.geometry.type}e.InputRepresentation2D=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
