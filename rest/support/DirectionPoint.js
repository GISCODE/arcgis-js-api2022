/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../PopupTemplate","../../symbols","../../core/JSONSupport","../../core/maybe","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../geometry/Point","./networkEnums","../../symbols/support/jsonUtils"],(function(e,t,i,a,o,r,l,n,s,p,d,m,u,c,b){"use strict";var y;let T=y=function(t){function a(e){var i;return(i=t.call(this,e)||this).alternateName=null,i.arrivalTime=null,i.arrivalTimeOffset=null,i.azimuth=null,i.branchName=null,i.directionPointType=null,i.displayText=null,i.exitName=null,i.geometry=null,i.intersectingName=null,i.level=null,i.name=null,i.objectId=null,i.popupTemplate=null,i.sequence=null,i.shortVoiceInstruction=null,i.stopId=null,i.symbol=null,i.towardName=null,i.voiceInstruction=null,i}e._inheritsLoose(a,t);var o=a.prototype;return o.readArrivalTime=function(e,t){return r.isSome(t.attributes.ArrivalTime)?new Date(t.attributes.ArrivalTime):null},a.fromPortalJSON=function(e){var t,a,o,l,n,s,p,d,m,T,h,v,f;return new y({alternateName:null!=(t=e.attributes.AlternateName)?t:null,arrivalTime:r.isSome(e.attributes.ArrivalTime)?new Date(e.attributes.ArrivalTime):null,arrivalTimeOffset:null!=(a=e.attributes.ArrivalUTCOffset)?a:null,azimuth:null!=(o=e.attributes.Azimuth)?o:null,branchName:null!=(l=e.attributes.BranchName)?l:null,directionPointType:c.directionPointTypeJsonMap.fromJSON(e.attributes.DirectionPointType),displayText:null!=(n=e.attributes.DisplayText)?n:null,exitName:null!=(s=e.attributes.ExitName)?s:null,geometry:u.fromJSON(e.geometry),intersectingName:null!=(p=e.attributes.IntersectingName)?p:null,level:null!=(d=e.attributes.Level)?d:null,name:null!=(m=e.attributes.Name)?m:null,objectId:e.attributes.__OBJECTID,popupTemplate:r.isSome(e.popupInfo)?i.fromJSON(e.popupInfo):null,sequence:e.attributes.Sequence,shortVoiceInstruction:null!=(T=e.attributes.ShortVoiceInstruction)?T:null,stopId:null!=(h=e.attributes.StopID)?h:null,symbol:r.isSome(e.symbol)?b.fromJSON(e.symbol):null,towardName:null!=(v=e.attributes.TowardName)?v:null,voiceInstruction:null!=(f=e.attributes.VoiceInstruction)?f:null})},o.toPortalJSON=function(){const e={geometry:r.isSome(this.geometry)?this.geometry.toJSON():null,attributes:{__OBJECTID:r.unwrap(this.objectId),DirectionPointType:r.isSome(this.directionPointType)?c.directionPointTypeJsonMap.toJSON(this.directionPointType):null,Sequence:r.unwrap(this.sequence),StopID:this.stopId},symbol:r.isSome(this.symbol)?this.symbol.toJSON():null,popupInfo:r.isSome(this.popupTemplate)?this.popupTemplate.toJSON():null};return r.isSome(this.alternateName)&&(e.attributes.AlternateName=this.alternateName),r.isSome(this.arrivalTime)&&(e.attributes.ArrivalTime=this.arrivalTime.getTime()),r.isSome(this.arrivalTimeOffset)&&(e.attributes.ArrivalUTCOffset=this.arrivalTimeOffset),r.isSome(this.azimuth)&&(e.attributes.Azimuth=this.azimuth),r.isSome(this.branchName)&&(e.attributes.BranchName=this.branchName),r.isSome(this.displayText)&&(e.attributes.DisplayText=this.displayText),r.isSome(this.exitName)&&(e.attributes.ExitName=this.exitName),r.isSome(this.intersectingName)&&(e.attributes.IntersectingName=this.intersectingName),r.isSome(this.level)&&(e.attributes.Level=this.level),r.isSome(this.name)&&(e.attributes.Name=this.name),r.isSome(this.shortVoiceInstruction)&&(e.attributes.ShortVoiceInstruction=this.shortVoiceInstruction),r.isSome(this.towardName)&&(e.attributes.TowardName=this.towardName),r.isSome(this.voiceInstruction)&&(e.attributes.VoiceInstruction=this.voiceInstruction),e},a}(o.JSONSupport);T.fields=[{name:"__OBJECTID",alias:"OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1,domain:null},{name:"AlternateName",alias:"Alternative Feature Name",type:"esriFieldTypeString",length:2048,editable:!0,nullable:!0,visible:!0,domain:null},{name:"ArrivalTime",alias:"Maneuver Starts at",type:"esriFieldTypeDate",length:36,editable:!0,nullable:!0,visible:!0},{name:"ArrivalUTCOffset",alias:"Offset from UTC in Minutes",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"Azimuth",alias:"Azimuth",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0},{name:"BranchName",alias:"Signpost Branch Name",type:"esriFieldTypeString",length:2048,editable:!0,nullable:!0,visible:!0,domain:null},{name:"DirectionPointType",alias:"Directions Item Type",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriDirectionPointType",codedValues:[{name:"Unknown",code:0},{name:"",code:1},{name:"Arrive at stop",code:50},{name:"Depart at stop",code:51},{name:"Go straight",code:52},{name:"Take ferry",code:100},{name:"Take off ferry",code:101},{name:"Keep center at fork",code:102},{name:"Take roundabout",code:103},{name:"Make U-Turn",code:104},{name:"Pass the door",code:150},{name:"Take stairs",code:151},{name:"",code:152},{name:"Take escalator",code:153},{name:"Take pedestrian ramp",code:154},{name:"Keep left at fork",code:200},{name:"Ramp left",code:201},{name:"Take left-handed roundabout",code:202},{name:"Make left-handed U-Turn",code:203},{name:"Bear left",code:204},{name:"Turn left",code:205},{name:"Make sharp left",code:206},{name:"Turn left, followed by turn left",code:207},{name:"Turn left, followed by turn right",code:208},{name:"Keep right at fork",code:300},{name:"Ramp right",code:301},{name:"Take right-handed roundabout",code:302},{name:"Make right-handed U-Turn",code:303},{name:"Bear right",code:304},{name:"Turn right",code:305},{name:"Make sharp right",code:306},{name:"Turn right, followed by turn left",code:307},{name:"Turn right, followed by turn right",code:308},{name:"Indicates up direction of elevator",code:400},{name:"Indicates up direction of escalator",code:401},{name:"Take up-stairs",code:402},{name:"Indicates down direction of elevator",code:500},{name:"Indicates down direction of escalator",code:501},{name:"Take down-stairs",code:502},{name:"General event",code:1e3},{name:"Landmark",code:1001},{name:"Time zone change",code:1002},{name:"Heavy traffic segment",code:1003},{name:"Scale cost barrier crossing",code:1004},{name:"Administrative Border crossing",code:1005},{name:"Restriction violation",code:1006}]}},{name:"DisplayText",alias:"Text to Display",type:"esriFieldTypeString",length:2048,editable:!0,nullable:!0,visible:!0,domain:null},{name:"ExitName",alias:"Highway Exit Name",type:"esriFieldTypeString",length:2048,editable:!0,nullable:!0,visible:!0,domain:null},{name:"IntersectingName",alias:"Intersecting Feature Name",type:"esriFieldTypeString",length:2048,editable:!0,nullable:!0,visible:!0,domain:null},{name:"Level",alias:"3D Logical Level",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"Name",alias:"Primary Feature Name",type:"esriFieldTypeString",length:2048,editable:!0,nullable:!0,visible:!0,domain:null},{name:"Sequence",alias:"Sequence",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"ShortVoiceInstruction",alias:"Voice Instruction",type:"esriFieldTypeString",length:2048,editable:!0,nullable:!0,visible:!0,domain:null},{name:"StopID",alias:"Stop ID",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"TowardName",alias:"Signpost Toward Name",type:"esriFieldTypeString",length:2048,editable:!0,nullable:!0,visible:!0,domain:null},{name:"VoiceInstruction",alias:"Voice Full Instruction",type:"esriFieldTypeString",length:2048,editable:!0,nullable:!0,visible:!0,domain:null}],T.popupInfo={title:"{DisplayText}",fieldInfos:[{fieldName:"DirectionPointType",label:"Directions Item Type",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"DisplayText",label:"Text to Display",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"Sequence",label:"Sequence",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"StopID",label:"Stop ID",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"ArrivalTime",label:"Maneuver Starts at",isEditable:!0,tooltip:"",visible:!0,format:{dateFormat:"shortDateShortTime24"},stringFieldOption:"textbox"},{fieldName:"ArrivalUTCOffset",label:"Offset from UTC in Minutes",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"Azimuth",label:"Azimuth",isEditable:!1,tooltip:"",visible:!1,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"Name",label:"Primary Feature Name",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"AlternateName",label:"Alternative Feature Name",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"ExitName",label:"Highway Exit Name",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"IntersectingName",label:"Intersecting Feature Name",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"BranchName",label:"Signpost Branch Name",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"TowardName",label:"Signpost Toward Name",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"ShortVoiceInstruction",label:"Voice Instruction",isEditable:!1,tooltip:"",visible:!1,stringFieldOption:"textbox"},{fieldName:"VoiceInstruction",label:"Voice Full Instruction",isEditable:!1,tooltip:"",visible:!1,stringFieldOption:"textbox"}],description:null,showAttachments:!1,mediaInfos:[]},t.__decorate([l.property({json:{read:!1}})],T.prototype,"alternateName",void 0),t.__decorate([l.property()],T.prototype,"arrivalTime",void 0),t.__decorate([d.reader("arrivalTime",["attributes.ArrivalTime"])],T.prototype,"readArrivalTime",null),t.__decorate([l.property({json:{read:{source:"attributes.ArrivalUTCOffset"}}})],T.prototype,"arrivalTimeOffset",void 0),t.__decorate([l.property({json:{read:{source:"attributes.Azimuth"}}})],T.prototype,"azimuth",void 0),t.__decorate([l.property({json:{read:{source:"attributes.BranchName"}}})],T.prototype,"branchName",void 0),t.__decorate([l.property({type:c.directionPointTypeJsonMap.apiValues,json:{read:{source:"attributes.DirectionPointType",reader:c.directionPointTypeJsonMap.read}}})],T.prototype,"directionPointType",void 0),t.__decorate([l.property({json:{read:{source:"attributes.DisplayText"}}})],T.prototype,"displayText",void 0),t.__decorate([l.property({json:{read:{source:"attributes.ExitName"}}})],T.prototype,"exitName",void 0),t.__decorate([l.property({type:u})],T.prototype,"geometry",void 0),t.__decorate([l.property({json:{read:!1}})],T.prototype,"intersectingName",void 0),t.__decorate([l.property({json:{read:!1}})],T.prototype,"level",void 0),t.__decorate([l.property({json:{read:{source:"attributes.Name"}}})],T.prototype,"name",void 0),t.__decorate([l.property({json:{read:{source:"attributes.ObjectID"}}})],T.prototype,"objectId",void 0),t.__decorate([l.property({type:i,json:{read:!1}})],T.prototype,"popupTemplate",void 0),t.__decorate([l.property({json:{read:{source:"attributes.Sequence"}}})],T.prototype,"sequence",void 0),t.__decorate([l.property({json:{read:!1}})],T.prototype,"shortVoiceInstruction",void 0),t.__decorate([l.property({json:{read:{source:"attributes.StopID"}}})],T.prototype,"stopId",void 0),t.__decorate([l.property({types:a.symbolTypes,json:{read:!1}})],T.prototype,"symbol",void 0),t.__decorate([l.property({json:{read:{source:"attributes.TowardName"}}})],T.prototype,"towardName",void 0),t.__decorate([l.property({json:{read:!1}})],T.prototype,"voiceInstruction",void 0),T=y=t.__decorate([m.subclass("esri.rest.support.DirectionPoint")],T);return T}));