/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import r from"../../PopupTemplate.js";import"../../renderers/ClassBreaksRenderer.js";import"../../renderers/DictionaryRenderer.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/PieChartRenderer.js";import"../../renderers/Renderer.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/UniqueValueRenderer.js";import"../../renderers/support/jsonUtils.js";import{rendererTypes as o}from"../../renderers/support/types.js";import{clone as t}from"../../core/lang.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/accessorSupport/ensureType.js";import{enumeration as i}from"../../core/accessorSupport/decorators/enumeration.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import n from"./AggregateField.js";import{labelsVisible as l,popupEnabled as d}from"./commonProperties.js";import{FeatureReduction as a}from"./FeatureReduction.js";import m from"./LabelClass.js";var u;let c=u=class extends a{constructor(e){super(e),this.type="binning",this.fixedBinLevel=3,this.labelingInfo=null,this.labelsVisible=!0,this.popupEnabled=!0,this.popupTemplate=null,this.fields=[],this.renderer=null}clone(){return new u({fields:t(this.fields),fixedBinLevel:this.fixedBinLevel,labelingInfo:t(this.labelingInfo),labelsVisible:this.labelsVisible,popupEnabled:this.popupEnabled,popupTemplate:t(this.popupTemplate),renderer:t(this.renderer)})}};e([i({binning:"binning"})],c.prototype,"type",void 0),e([s({type:Number,json:{write:!0}})],c.prototype,"fixedBinLevel",void 0),e([s({type:[m],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],c.prototype,"labelingInfo",void 0),e([s(l)],c.prototype,"labelsVisible",void 0),e([s(d)],c.prototype,"popupEnabled",void 0),e([s({type:r,json:{name:"popupInfo",write:!0}})],c.prototype,"popupTemplate",void 0),e([s({type:[n],json:{write:!0,origins:{"web-document":{write:!1},"portal-item":{write:!1}}}})],c.prototype,"fields",void 0),e([s({types:o,json:{write:!0}})],c.prototype,"renderer",void 0),c=u=e([p("esri.layers.support.FeatureReductionBinning")],c);const f=c;export{f as default};