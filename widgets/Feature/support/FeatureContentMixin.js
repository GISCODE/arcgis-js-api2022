/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/set","../../../core/accessorSupport/decorators/subclass","../../support/widget","../../support/jsxFactory"],(function(e,t,o,r,s,n,i,a,c,d,u){"use strict";const p=e=>{let r=function(e){function o(){var t;return(t=e.apply(this,arguments)||this).renderNodeContent=e=>d.isWidget(e)&&!e.destroyed?u.tsx("div",{key:e},e.render()):e instanceof HTMLElement?u.tsx("div",{key:e,bind:e,afterCreate:t._attachToNode}):d.hasDomNode(e)?u.tsx("div",{key:e,bind:e.domNode,afterCreate:t._attachToNode}):null,t}return t._inheritsLoose(o,e),o.prototype._attachToNode=function(e){const t=this;e.appendChild(t)},o}(e);return r=o.__decorate([c.subclass("esri.widgets.Feature.ContentMixin")],r),r};e.FeatureContentMixin=p,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
