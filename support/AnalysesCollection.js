/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Logger","../core/maybe","../core/accessorSupport/ensureType","../core/arrayUtils","../core/has","../core/accessorSupport/set","../core/accessorSupport/decorators/subclass","../core/support/OwningCollection"],(function(e,o,n,s,t,r,l,i,c,a,u){"use strict";const p=s.getLogger("esri.support.AnalysesCollection");e.AnalysesCollection=function(e){function n(o){var n;return(n=e.call(this,o)||this).handles.add(n.on("before-add",(e=>{t.isNone(e.item)||e.item.parent===n.owner&&(p.warn("Analysis inside the collection must be unique. Not adding this element again."),e.preventDefault())}))),n}o._inheritsLoose(n,e);var s=n.prototype;return s._own=function(e){e.parent=this.owner},s._release=function(e){e.parent=null},n}(u.OwningCollection),e.AnalysesCollection=n.__decorate([a.subclass("esri.support.AnalysesCollection")],e.AnalysesCollection),Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
