/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../../../chunks/tslib.es6.js";import"../../../../core/Logger.js";import"../../../../core/accessorSupport/ensureType.js";import"../../../../core/arrayUtils.js";import"../../../../core/has.js";import"../../../../core/accessorSupport/set.js";import{subclass as t}from"../../../../core/accessorSupport/decorators/subclass.js";import{CONTENT as s}from"../css.js";import{TooltipContent as r}from"./TooltipContent.js";import{TooltipField as e}from"../support/TooltipField.js";import"../../../../widgets/support/widgetUtils.js";import{tsx as i}from"../../../../widgets/support/jsxFactory.js";const p={base:`${s} ${`${s}--draw-polygon`}`};let a=class extends r{render(){const{area:o,elevation:t}=this.info,s=this._messagesTooltip?.sketch;return i("div",{class:p.base},i(e,{title:s?.elevation,value:this._formatVerticalLength(t)}),i(e,{title:s?.area,value:this._formatArea(o)}))}};a=o([t("esri.views.interactive.tooltip.content.TooltipContentDrawPolygon")],a);export{a as TooltipContentDrawPolygon};