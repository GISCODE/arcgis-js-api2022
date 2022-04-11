/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/accessorSupport/decorators/property","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/subclass","./Deconflictor","./enums","../../../support/Scheduler"],(function(e,t,r,o,s,c,i,n,a,l,u){"use strict";const p=2e3;e.LabelDeconflictor=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).visibilityGroup=l.VisibilityGroup.LABEL,t.iconMarginFactor=0,t._lastDeconfliction=0,t}t._inheritsLoose(r,e);var o=r.prototype;return o.runTask=function(t){if(this.parent.running)return;const r=performance.now();(t.state===u.State.IDLE||r-this._lastDeconfliction>p)&&(e.prototype.runTask.call(this,t),this.state===a.State.Idle&&(this._lastDeconfliction=r))},o.enabledChanged=function(e,t){this.modifyGraphics(t,e.labelsEnabled)},o.getGraphicsLayers=function(e){return e.labelGraphics},t._createClass(r,[{key:"viewState",get:function(){return this.parent.viewState}}]),r}(a.Deconflictor),r.__decorate([o.property({constructOnly:!0})],e.LabelDeconflictor.prototype,"parent",void 0),e.LabelDeconflictor=r.__decorate([n.subclass("esri.views.3d.layers.graphics.LabelDeconflictor")],e.LabelDeconflictor),Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
