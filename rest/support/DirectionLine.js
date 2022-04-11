/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../PopupTemplate","../../symbols","../../core/JSONSupport","../../core/maybe","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../../geometry/Polyline","./networkEnums","../../symbols/support/jsonUtils"],(function(e,t,i,o,r,l,n,s,a,p,d,u,c,b){"use strict";var m;let y=m=function(t){function o(e){var i;return(i=t.call(this,e)||this).directionLineType=null,i.directionPointId=null,i.distance=null,i.duration=null,i.fromLevel=null,i.geometry=null,i.objectId=null,i.popupTemplate=null,i.symbol=null,i.toLevel=null,i}return e._inheritsLoose(o,t),o.fromPortalJSON=function(e){var t,o;return new m({directionLineType:c.directionLineTypeJsonMap.fromJSON(e.attributes.DirectionLineType),directionPointId:e.attributes.DirectionPointID,distance:e.attributes.Meters,duration:e.attributes.Minutes,fromLevel:null!=(t=e.attributes.FromLevel)?t:null,geometry:u.fromJSON(e.geometry),objectId:e.attributes.__OBJECTID,popupTemplate:l.isSome(e.popupInfo)?i.fromJSON(e.popupInfo):null,symbol:l.isSome(e.symbol)?b.fromJSON(e.symbol):null,toLevel:null!=(o=e.attributes.ToLevel)?o:null})},o.prototype.toPortalJSON=function(){const e={geometry:l.isSome(this.geometry)?this.geometry.toJSON():null,attributes:{__OBJECTID:l.unwrap(this.objectId),DirectionLineType:l.isSome(this.directionLineType)?c.directionLineTypeJsonMap.toJSON(this.directionLineType):null,DirectionPointID:l.unwrap(this.directionPointId),Meters:l.unwrap(this.distance),Minutes:l.unwrap(this.duration)},symbol:l.isSome(this.symbol)?this.symbol.toJSON():null,popupInfo:l.isSome(this.popupTemplate)?this.popupTemplate.toJSON():null};return l.isSome(this.fromLevel)&&(e.attributes.FromLevel=this.fromLevel),l.isSome(this.toLevel)&&(e.attributes.ToLevel=this.toLevel),e},o}(r.JSONSupport);y.fields=[{name:"__OBJECTID",alias:"OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1,domain:null},{name:"DirectionLineType",alias:"Line Type",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriDirectionsLineType",codedValues:[{name:"Unknown",code:0},{name:"Segment",code:1},{name:"Maneuver Segment",code:2},{name:"Restriction violation",code:3},{name:"Scale cost barrier crossing",code:4},{name:"Heavy Traffic",code:5},{name:"Slow Traffic",code:6},{name:"Moderate Traffic",code:7}]}},{name:"DirectionPointID",alias:"Direction Point ID",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!1},{name:"FromLevel",alias:"Start from 3D Level",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!1},{name:"Meters",alias:"Length in Meters",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0},{name:"Minutes",alias:"Duration in Minutes",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0},{name:"ToLevel",alias:"End at 3D Level",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!1}],y.popupInfo={title:"Direction Lines",fieldInfos:[{fieldName:"DirectionLineType",label:"Line Type",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"Meters",label:"Length in Meters",isEditable:!1,tooltip:"",visible:!0,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"Minutes",label:"Duration in Minutes",isEditable:!1,tooltip:"",visible:!0,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"DirectionPointID",label:"Direction Point ID",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"FromLevel",label:"Start from 3D Level",isEditable:!1,tooltip:"",visible:!1,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"ToLevel",label:"End at 3D Level",isEditable:!1,tooltip:"",visible:!1,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"}],description:null,showAttachments:!1,mediaInfos:[]},t.__decorate([n.property({type:c.directionLineTypeJsonMap.apiValues,json:{read:{source:"attributes.DirectionLineType",reader:c.directionLineTypeJsonMap.read}}})],y.prototype,"directionLineType",void 0),t.__decorate([n.property({json:{read:{source:"attributes.DirectionPointID"}}})],y.prototype,"directionPointId",void 0),t.__decorate([n.property({json:{read:{source:"attributes.Meters"}}})],y.prototype,"distance",void 0),t.__decorate([n.property({json:{read:{source:"attributes.Minutes"}}})],y.prototype,"duration",void 0),t.__decorate([n.property({json:{read:{source:"attributes.FromLevel"}}})],y.prototype,"fromLevel",void 0),t.__decorate([n.property({type:u})],y.prototype,"geometry",void 0),t.__decorate([n.property({json:{read:{source:"attributes.ObjectID"}}})],y.prototype,"objectId",void 0),t.__decorate([n.property({type:i,json:{read:!1}})],y.prototype,"popupTemplate",void 0),t.__decorate([n.property({types:o.symbolTypes,json:{read:!1}})],y.prototype,"symbol",void 0),t.__decorate([n.property({json:{read:{source:"attributes.ToLevel"}}})],y.prototype,"toLevel",void 0),y=m=t.__decorate([d.subclass("esri.rest.support.DirectionLine")],y);return y}));