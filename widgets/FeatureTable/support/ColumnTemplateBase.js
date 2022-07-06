/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../../../chunks/tslib.es6.js";import{JSONSupport as o}from"../../../core/JSONSupport.js";import{property as r}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as i}from"../../../core/accessorSupport/decorators/subclass.js";let e=class extends o{constructor(t){super(t),this.description=null,this.direction=null,this.formatFunction=null,this.initialSortPriority=null,this.label=null,this.menuConfig=null,this.sortable=!0,this.textAlign="start",this.type=null,this.visible=!0}};t([r()],e.prototype,"description",void 0),t([r()],e.prototype,"direction",void 0),t([r()],e.prototype,"formatFunction",void 0),t([r()],e.prototype,"initialSortPriority",void 0),t([r()],e.prototype,"label",void 0),t([r()],e.prototype,"menuConfig",void 0),t([r()],e.prototype,"sortable",void 0),t([r()],e.prototype,"textAlign",void 0),t([r({type:String,json:{read:!1,write:!0}})],e.prototype,"type",void 0),t([r()],e.prototype,"visible",void 0),e=t([i("esri.widgets.FeatureTable.support.ColumnTemplateBase")],e);const s=e;export{s as default};