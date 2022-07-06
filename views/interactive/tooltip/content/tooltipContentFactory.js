/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isNone as t}from"../../../../core/maybe.js";import{TooltipContentDrawPoint as o}from"./TooltipContentDrawPoint.js";import{TooltipContentDrawPolygon as n}from"./TooltipContentDrawPolygon.js";import{TooltipContentDrawPolyline as e}from"./TooltipContentDrawPolyline.js";import{TooltipContentExtentRotate as r}from"./TooltipContentExtentRotate.js";import{TooltipContentExtentScale as i}from"./TooltipContentExtentScale.js";import{TooltipContentReshapeEdgeOffset as a}from"./TooltipContentReshapeEdgeOffset.js";import{TooltipContentReshapeMoveGraphic as p}from"./TooltipContentReshapeMoveGraphic.js";import{TooltipContentTransformAbsolute as s}from"./TooltipContentTransformAbsolute.js";import{TooltipContentTransformRotate as l}from"./TooltipContentTransformRotate.js";import{TooltipContentTransformScale as f}from"./TooltipContentTransformScale.js";import{TooltipContentTranslateVertex as c}from"./TooltipContentTranslateVertex.js";import{TooltipContentTranslateZ as m}from"./TooltipContentTranslateZ.js";function w(w,u){if(t(u))return null;const T=document.createElement("div");switch(u.type){case"draw-point":return new o({tooltip:w,info:u,container:T});case"draw-polygon":return new n({tooltip:w,info:u,container:T});case"draw-polyline":return new e({tooltip:w,info:u,container:T});case"extent-rotate":return new r({tooltip:w,info:u,container:T});case"extent-scale":return new i({tooltip:w,info:u,container:T});case"reshape-edge-offset":return new a({tooltip:w,info:u,container:T});case"transform-absolute":return new s({tooltip:w,info:u,container:T});case"transform-rotate":return new l({tooltip:w,info:u,container:T});case"transform-scale":return new f({tooltip:w,info:u,container:T});case"translate-graphic":return new p({tooltip:w,info:u,container:T});case"translate-vertex":return new c({tooltip:w,info:u,container:T});case"translate-z":return new m({tooltip:w,info:u,container:T})}}export{w as tooltipContentFactory};