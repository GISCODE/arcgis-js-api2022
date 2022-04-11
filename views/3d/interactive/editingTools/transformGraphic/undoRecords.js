/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/maybe"],(function(e,t){"use strict";function o(e){return t.isSome(e.geometry)&&"mesh"===e.geometry.type?r(e.geometry):n(e)}function r(e){return t.isSome(e.transform)?i(e,e.transform):m(e)}function n(e){let o=e.geometry,r=t.none;return{undo(e){r=e.geometry,e.geometry=o},redo(e){o=e.geometry,e.geometry=r}}}function i(e,o){let r=o.clone(),n=null;return{undo:o=>{n=t.isSome(e.transform)?e.transform.clone():null,e.transform=r,o.notifyGeometryChanged()},redo:o=>{r=t.isSome(e.transform)?e.transform.clone():null,e.transform=n,o.notifyGeometryChanged()}}}function m(e){let t,o=e.vertexAttributes.clonePositional();return{undo:r=>{t=e.vertexAttributes.clonePositional(),e.vertexAttributes=o,r.notifyGeometryChanged()},redo:r=>{o=e.vertexAttributes.clonePositional(),e.vertexAttributes=t,r.notifyGeometryChanged()}}}e.createGraphicGeometryUndoRecord=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));