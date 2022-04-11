/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/handleUtils","./Graphics3DObjectStateSet"],(function(t,e,s,a){"use strict";let i=function(){function t(t){this._graphicsCore=t,this._stateSets=new Array}var i=t.prototype;return i.destroy=function(){this._stateSets&&this._stateSets.forEach((t=>t.objectStateSet.removeAll())),this._stateSets=null},i.acquireSet=function(t,e){const i=new a.Graphics3DObjectStateSet(t,e);this._stateSets.push(i);const c=s.makeHandle((()=>this.releaseSet(i)));return{set:i,handle:c}},i.releaseSet=function(t){t.objectStateSet.removeAll();const e=this._stateSets?this._stateSets.indexOf(t):-1;-1!==e&&this._stateSets.splice(e,1)},i._addObjectStateSet=function(t,e){t.addObjectStateSet(e.stateType,e.objectStateSet)},i._removeObjectStateSet=function(t,e){t.removeObjectState(e.objectStateSet)},i.setUid=function(t,e){t.ids.add(e);const s=this._graphicsCore.graphics3DGraphics.get(e);s&&this._addObjectStateSet(s,t)},i.setUids=function(t,e){e.forEach((e=>this.setUid(t,e)))},i.setObjectIds=function(t,e){e.forEach((e=>t.ids.add(e))),this._initializeSet(t)},i.addGraphic=function(t){this._stateSets.forEach((e=>{!e.paused&&e.hasGraphic(t)&&this._addObjectStateSet(t,e)}))},i.removeGraphic=function(t){this._stateSets.forEach((e=>{e.hasGraphic(t)&&this._removeObjectStateSet(t,e)}))},i.allGraphicsDeleted=function(){this._stateSets&&this._stateSets.forEach((t=>t.objectStateSet.removeAll()))},i._initializeSet=function(t){const e=this._graphicsCore.graphics3DGraphics;t.objectIdField?e.forEach((e=>{e&&t.hasGraphic(e)&&this._addObjectStateSet(e,t)})):t.ids.forEach((s=>{const a=e.get(s);a&&this._addObjectStateSet(a,t)}))},e._createClass(t,[{key:"test",get:function(){return{states:this._stateSets}}}]),t}();t.Graphics3DObjectStates=i,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
