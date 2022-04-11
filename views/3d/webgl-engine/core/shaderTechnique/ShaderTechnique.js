/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../../../../webgl/enums"],(function(i,e,t,n){"use strict";let r=function(){function i(i,e,t){this.release=t,e&&(this._config=e.snapshot()),this._program=this.initializeProgram(i),this._pipeline=this.initializePipeline(i)}var r=i.prototype;return r.destroy=function(){this._program=t.disposeMaybe(this._program),this._pipeline=this._config=null},r.reload=function(i){t.disposeMaybe(this._program),this._program=this.initializeProgram(i),this._pipeline=this.initializePipeline(i)},r.bindPass=function(i,e){},r.bindMaterial=function(i,e){},r.bindDraw=function(i){},r.bindPipelineState=function(i,e=null,t){i.setPipelineState(this.getPipelineState(e,t))},r.ensureAttributeLocations=function(i){this.program.assertCompatibleVertexAttributeLocations(i)},r.getPipelineState=function(i,e){return this._pipeline},e._createClass(i,[{key:"program",get:function(){return this._program}},{key:"key",get:function(){return this._config.key}},{key:"configuration",get:function(){return this._config}},{key:"primitiveType",get:function(){return n.PrimitiveType.TRIANGLES}}]),i}();i.ShaderTechnique=r,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
