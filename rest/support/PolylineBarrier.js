/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../PopupTemplate","../../symbols","../../core/JSONSupport","../../core/lang","../../core/maybe","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../geometry/Polyline","../route/utils","./networkEnums","../../symbols/support/jsonUtils"],(function(e,t,r,o,s,i,a,l,p,n,u,c,y,m,d){"use strict";var b;let T=b=function(t){function o(e){var r;return(r=t.call(this,e)||this).barrierType=null,r.costs=null,r.geometry=null,r.name=null,r.objectId=null,r.popupTemplate=null,r.scaleFactor=null,r.symbol=null,r}e._inheritsLoose(o,t);var s=o.prototype;return s.readCosts=function(e,t){return y.getPrefixedProperties(t.attributes,"Attr_")},o.fromPortalJSON=function(e){var t,o;return new b({barrierType:a.isSome(e.attributes.BarrierType)?m.barrierTypeJsonMap.fromJSON(e.attributes.BarrierType):null,costs:a.isSome(e.attributes.Costs)?JSON.parse(e.attributes.Costs):null,geometry:c.fromJSON(e.geometry),name:null!=(t=e.attributes.Name)?t:null,objectId:e.attributes.__OBJECTID,popupTemplate:a.isSome(e.popupInfo)?r.fromJSON(e.popupInfo):null,scaleFactor:null!=(o=e.attributes.ScaleFactor)?o:null,symbol:a.isSome(e.symbol)?d.fromJSON(e.symbol):null})},s.clone=function(){return new b(i.clone({barrierType:this.barrierType,costs:this.costs,geometry:this.geometry,name:this.name,objectId:this.objectId,popupTemplate:this.popupTemplate,scaleFactor:this.scaleFactor,symbol:this.symbol}))},s.toPortalJSON=function(){return{geometry:a.isSome(this.geometry)?this.geometry.toJSON():null,attributes:{__OBJECTID:a.unwrap(this.objectId),BarrierType:a.isSome(this.barrierType)?m.barrierTypeJsonMap.toJSON(this.barrierType):null,Costs:a.isSome(this.costs)?JSON.stringify(this.costs):null,Name:this.name,ScaleFactor:this.scaleFactor},symbol:a.isSome(this.symbol)?this.symbol.toJSON():null,popupInfo:a.isSome(this.popupTemplate)?this.popupTemplate.toJSON():null}},o}(s.JSONSupport);T.fields=[{name:"__OBJECTID",alias:"OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1,domain:null},{name:"BarrierType",alias:"Barrier Type",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriNABarrierType",codedValues:[{name:"Restriction",code:0},{name:"Scaled Cost",code:1},{name:"Added Cost",code:2}]}},{name:"Costs",alias:"Costs",type:"esriFieldTypeString",length:1048576,editable:!0,nullable:!0,visible:!1,domain:null},{name:"Name",alias:"Name",type:"esriFieldTypeString",length:255,editable:!0,nullable:!0,visible:!0},{name:"ScaleFactor",alias:"Scale Factor",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0}],T.popupInfo={title:"Line Barriers",fieldInfos:[{fieldName:"Name",label:"Name",isEditable:!0,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"BarrierType",label:"Barrier Type",isEditable:!0,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"ScaleFactor",isEditable:!0,tooltip:"",visible:!0,format:{places:3,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"Costs",label:"Costs",isEditable:!0,tooltip:"",visible:!1,stringFieldOption:"textbox"}],description:null,showAttachments:!1,mediaInfos:[]},t.__decorate([l.property({type:m.barrierTypeJsonMap.apiValues,json:{read:{source:"attributes.BarrierType",reader:m.barrierTypeJsonMap.read}}})],T.prototype,"barrierType",void 0),t.__decorate([l.property()],T.prototype,"costs",void 0),t.__decorate([n.reader("costs",["attributes"])],T.prototype,"readCosts",null),t.__decorate([l.property({type:c,json:{write:!0}})],T.prototype,"geometry",void 0),t.__decorate([l.property({json:{name:"attributes.Name",write:!0}})],T.prototype,"name",void 0),t.__decorate([l.property({json:{name:"attributes.ObjectID",write:!0}})],T.prototype,"objectId",void 0),t.__decorate([l.property({type:r,json:{read:!1}})],T.prototype,"popupTemplate",void 0),t.__decorate([l.property({json:{read:!1}})],T.prototype,"scaleFactor",void 0),t.__decorate([l.property({types:o.symbolTypes,json:{read:!1}})],T.prototype,"symbol",void 0),T=b=t.__decorate([u.subclass("esri.rest.support.PolylineBarrier")],T);return T}));
