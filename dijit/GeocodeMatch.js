// COPYRIGHT © 2021 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/Deferred","dojo/_base/array","dojo/dom-construct","dojo/dom-style","dojo/Evented","dojo/on","dojo/uacss","dijit/_WidgetBase","dijit/Menu","dijit/MenuItem","dgrid/OnDemandGrid","dgrid/Selection","dgrid/Keyboard","dgrid/extensions/DijitRegistry","dgrid/extensions/ColumnResizer","dgrid/extensions/ColumnHider","dojo/store/Memory","../kernel","../graphic","../InfoTemplate","../SpatialReference","../geometry/webMercatorUtils","../geometry/Extent","../geometry/Point","../layers/GraphicsLayer","../symbols/PictureMarkerSymbol","../tasks/locator","../tasks/AddressCandidate","dijit/layout/BorderContainer","dijit/layout/ContentPane","dojo/i18n!../nls/jsapi","./GeocodeMatch/Popup"],(function(t,e,i,s,a,r,o,h,d,n,c,u,l,p,g,m,f,y,w,_,M,b,C,L,G,A,R,S,v,P,T,j,I,D,W){var k=e([c,h],{loaded:!1,singleLineInput:!0,_mapClickPause:!1,_defaultLocatorURL:"http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",_customLocator:!1,_hasCustomPoint:!1,_hasDefaultPoint:!1,constructor:function(s,a){e.safeMixin(this,s),this.map&&(this.geocoder?(this._locator=new P(this.geocoder),this._customLocator=!0):(this._locator=new P(this._defaultLocatorURL),this._customLocator=!1),this._columns=[{label:"",field:"matched",resizable:!1,formatter:function(t){return t},get:i.hitch(this,(function(e){return e.matched?"<img src='"+t.toUrl("./GeocodeMatch/images/EsriGreenPinCircle26.png")+"' />":""}))},{label:D.widgets.geocodeMatch.match.columnLabelAddress,field:"address",formatter:function(t){return t},get:i.hitch(this,(function(t){var e="";return e="object"==typeof t.address?t.Match_Addr?t.Match_Addr:"":t.address,"DefaultMatch"===t.Addr_type||"Custom"===t.Addr_type?t.matched?D.widgets.geocodeMatch.popup.matchButtonLabel:e+" ("+D.widgets.geocodeMatch.popup.matchButtonLabel+")":e}))},{label:D.widgets.geocodeMatch.match.columnLabelType,field:"Addr_type",formatter:function(t){return t},get:i.hitch(this,(function(t){var e,i=t.Addr_type;return"DefaultMatch"===t.Addr_type||"Custom"===t.Addr_type?"":(e=/([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g,i=i.replace(e,"$1$4 $2$3$5"))}))},{label:D.widgets.geocodeMatch.match.columnLabelScore,field:"score",hidden:!0,formatter:function(t){return t},get:i.hitch(this,(function(t){return t.score>0&&t.score<=100?t.score:" "}))}],this.suggestionGraphic||(this.suggestionGraphic=new v(t.toUrl("./GeocodeMatch/images/EsriBluePinCircle26.png"),26,26),this.suggestionGraphic.setOffset(0,12)),this.matchGraphic||(this.matchGraphic=new v(t.toUrl("./GeocodeMatch/images/EsriGreenPinCircle26.png"),26,26),this.matchGraphic.setOffset(0,12)),this.highlightGraphic||(this.highlightGraphic=new v(t.toUrl("./GeocodeMatch/images/EsriYellowPinCircle26.png"),26,26),this.highlightGraphic.setOffset(0,12)))},postCreate:function(){this.inherited(arguments);var t,s,r,o,h,n,c=this.map;t=this.graphicsLayer=new S,(s=this._infoTemplate=new C).setTitle(null),s.setContent(i.hitch(this,this._getInfoTemplateContent)),t.setInfoTemplate(s),c.addLayer(t),this._createContainerNodes(),this._createGridMenu(),n=e([p,f,g,m,y,w]),this.store=new _({data:"",idProperty:D.widgets.geocodeMatch.idProperty}),h=this.grid=new n({store:this.store,sort:"sort",noDataMessage:D.widgets.geocodeMatch.match.noDataMsg,selectionMode:"extended",allowSelectAll:!0,cellNavigation:!1,columns:this._columns},this._gridRef),this.resize(),this._listenerHandles=[d(window,"resize",i.hitch(this,(function(){this.resize()}))),d(h,"dgrid-deselect",i.hitch(this,(function(){this.currentSelectedRowId=null,this.currentSelectedRow=null}))),d(h,"dgrid-select",i.hitch(this,(function(e){a.forEach(t.graphics,i.hitch(this,(function(e){e.attributes&&e.attributes.type===D.widgets.geocodeMatch.customLabel&&!1===e.attributes.matched&&(t.remove(e),c.infoWindow.hide())}))),r=e.rows[0].data.location,this.currentSelectedRowId=e.rows[0].data.id,this.currentSelectedRow=e.rows[0].data,c.centerAt(r).then(i.hitch(this,(function(){c.infoWindow.setFeatures([t.graphics[this.currentSelectedRowId]]),c.infoWindow.show(r)})))}))),d(c,"click",i.hitch(this,(function(e){this._mapClickPause||(a.forEach(t.graphics,i.hitch(this,(function(e){e.attributes&&e.attributes.type===D.widgets.geocodeMatch.customLabel&&!1===e.attributes.matched&&(t.remove(e),c.infoWindow&&c.infoWindow.hide())}))),e.graphic?e.graphic.attributes&&e.graphic.attributes.id&&(h.clearSelection(),h.select(e.graphic.attributes.id)):this.lastAddress&&(h.clearSelection(),r=new R(e.mapPoint.x,e.mapPoint.y,c.spatialReference),(o=new b(r,this.highlightGraphic)).setAttributes({type:D.widgets.geocodeMatch.customLabel,matched:!1,featureType:this.featureType}),t.add(o),c.infoWindow.setFeatures([o]),c.infoWindow.show(r)))})))],this.resize()},startup:function(){this.inherited(arguments),this.grid.startup(),this.resize(),this.map.loaded?(this.loaded=!0,this.emit("load",{})):d(this.map,"load",i.hitch(this,(function(){this.loaded=!0,this.emit("load",{})})))},updateLocatorURL:function(t){this._locator=new P(t)},geocodeAddress:function(t){this._resetMapState(),this._resetAppState();var e,a,r,o=this.grid,h=new s;switch(typeof t){case"string":a={address:{SingleLine:e=t},outFields:["*"]},this.singleLineInput=!0;break;case"object":if(t.id&&(this.featureID=t.id),t.featureType&&(this.featureType=t.featureType),t.address)switch(typeof t.address){case"string":a={address:{SingleLine:e=t.address},outFields:["*"]},this.singleLineInput=!0;break;case"object":if(!Object.keys){t.address;Object.keys=function(t){var e,i=[];for(e in t)t.hasOwnProperty(e)&&i.push(e);return i}}t.address.CountryCode&&t.address.Address&&2===Object.keys(t.address).length?(e=t.address.Address,a={address:{SingleLine:t.address.Address,CountryCode:t.address.CountryCode},outFields:["*"]},this.singleLineInput=!0):t.address.CountryCode&&2===Object.keys(t.address).length?(e=t.address,a={address:{SingleLine:t.address,CountryCode:t.address.CountryCode},outFields:["*"]},this.singleLineInput=!0):(a={address:e=t.address,outFields:["*"]},this.singleLineInput=!1)}}return t.sourceCountry&&(a.address.CountryCode=t.sourceCountry),o.noDataMessage=D.widgets.geocodeMatch.popup.loadingPH,o.refresh(),this._locator.outSpatialReference=this.map.spatialReference,this._locator.addressToLocations(a).then(i.hitch(this,(function(i){var s,a;for(s=0;s<i.length;s++)i[s].id=s,i[s].featureID=this.featureID,i[s].matched=!1,i[s].sort=s+2,i[s].Addr_type=i[s].attributes.Addr_type,i[s].Match_addr=i[s].attributes.Match_addr,i[s].featureType=t.featureType;t.location?(!1===t.reviewed&&(a=i.length,this.currentMatchId=a,this._hasDefaultPoint=!0,this.defaultGeometry=t.location,this.defaultGeometry.spatialReference.wkid!==this.map.spatialReference.wkid&&(this.defaultGeometry=G.geographicToWebMercator(this.defaultGeometry)),r=new T({id:a,address:e,Addr_type:D.widgets.geocodeMatch.match.defaultMatchType,location:this.defaultGeometry,featureID:this.featureID,featureType:t.featureType,matched:!0,score:-1,sort:0}),i.push(r)),!0===t.reviewed&&(a=i.length,this.currentMatchId=a,this._hasCustomPoint=!0,this.defaultGeometry=t.location,this.defaultGeometry.spatialReference.wkid!==this.map.spatialReference.wkid&&(this.defaultGeometry=G.geographicToWebMercator(this.defaultGeometry)),r=new T({id:a,address:e,Addr_type:D.widgets.geocodeMatch.customLabel,location:this.defaultGeometry,featureID:this.featureID,featureType:t.featureType,matched:!0,score:-1,sort:0}),i.push(r))):this.defaultGeometry=null,this.store=new _({data:i}),o.set("store",this.store),this._updateMapGraphics(),this.lastGeocodeResults=i,this.lastAddress=e,h.resolve(i),o.noDataMessage=D.widgets.geocodeMatch.match.noDataMsg,o.refresh()})),(function(t){})),h.promise},pauseMapEvents:function(){this._mapClickPause=!0},resumeMapEvents:function(){this._mapClickPause=!1},refresh:function(){this.grid.refresh(),this.matchWidgetBorderContainer.refresh(),this.matchWidgetContentPane1.refresh(),this.matchWidgetContentPane2.refresh()},resize:function(){this.matchWidgetBorderContainer.resize(),this.matchWidgetContentPane1.resize(),this.matchWidgetContentPane2.resize(),this.grid&&this.grid.resize()},destroy:function(){a.forEach(this._listenerHandles,(function(t){t.remove()})),this._popup&&(this._popup.destroy(),this._popup=null),this.grid&&this.grid.destroy(),this.grid=null,this._columns=null,this.store=null,this._gridMenuRef&&r.empty(this._gridMenuRef),this.gridMenu=null,this.map&&(this.map.infoWindow.clearFeatures(),this.map.infoWindow.hide(),this.map.removeLayer(this.graphicsLayer)),this._locator=null,this._infoTemplate=null,this.graphicsLayer=null,this.map=null,this.inherited(arguments)},reset:function(){this._resetAppState(),this._resetMapState()},_matchCustomFeature:function(t){var e,s;!0===this._hasCustomPoint&&(a.forEach(this.store.data,i.hitch(this,(function(t){t.Addr_type===D.widgets.geocodeMatch.customLabel&&this.store.data.splice(a.indexOf(this.store.data,t),1)}))),a.forEach(this.graphicsLayer.graphics,i.hitch(this,(function(t){t.attributes&&t.attributes.type===D.widgets.geocodeMatch.customLabel&&(t.attributes.matched=!1)}))),this.graphicsLayer.remove(this.graphicsLayer.graphics[this.currentMatchId]),this.currentMatchId=null),s=this.store.data.length,e=new T({id:s,Addr_type:D.widgets.geocodeMatch.customLabel,address:this.lastAddress,matched:!1,location:t.geometry,score:-1,sort:1,graphicSymbol:t.symbol,attributes:t.attributes.reverseGeocodeResults}),t.attributes.id=s,t.attributes.matched=!0,this.store.data.push(e),this._hasCustomPoint=!0,this._matchFeature(s)},_matchFeature:function(t){var e=this.store.data,i=this.graphicsLayer.graphics,s=this.currentMatchId,r=i[s],o=e[s],h=i[t],d=e[t];o?(d.matched=!0,o.matched=!1,r.attributes.matched=!1,r.setSymbol(this.suggestionGraphic),h.attributes.matched=!0,h.attributes.id=t,h.setSymbol(this.matchGraphic),h.getDojoShape().moveToFront(),r.attributes.type===D.widgets.geocodeMatch.customLabel&&h.attributes.type!==D.widgets.geocodeMatch.customLabel&&(this.graphicsLayer.remove(r),e.splice(a.indexOf(e,o),1),this._hasCustomPoint=!1)):(d.matched=!0,!1!==this.map&&(h.attributes.matched=!0,h.attributes.id=t,h.setSymbol(this.matchGraphic),h.getDojoShape().moveToFront())),this.currentMatchId=t,this.emit("match",{id:t,featureID:this.featureID,address:this.lastAddress,oldLocation:this.defaultGeometry,featureType:this.featureType,newLocation:d.location,graphicSymbol:this.matchGraphic,locatorAttributes:d.attributes}),this.grid.refresh()},_updateMapGraphics:function(){var t,e,s,r=this.store.data,o=this.suggestionGraphic,h=[];this.graphicsLayer.clear(),1===r.length?((t=!0===r[0].matched?new b(r[0].location,this.matchGraphic):new b(r[0].location,o)).setAttributes({id:0,matched:r[0].matched,type:r[0].Addr_type}),h.push(t)):r.length>1&&a.forEach(r,i.hitch(this,(function(e){(t=!0===e.matched?new b(e.location,this.matchGraphic):new b(e.location,o)).setAttributes({id:e.id,matched:e.matched,type:e.Addr_type}),h.push(t)}))),0!==r.length&&(e=this._calcGraphicsExtent(h),this.map.setExtent(e,!0).then(i.hitch(this,(function(){for(s=0;s<h.length;s++)this.graphicsLayer.add(h[s])})))),a.forEach(this.graphicsLayer.graphics,i.hitch(this,(function(t){t.attributes&&!0===t.attributes.matched&&t.getDojoShape().moveToFront()})))},_getInfoTemplateContent:function(t){var e=this.store.data[t.attributes.id],i=e?e.address:null;return this._popup=new W({address:i,geocodeMatch:this,graphic:t,layer:this.graphicsLayer,map:this.map},r.create("div")),this._popup.domNode},_createContainerNodes:function(){var t,e,i;o.set(this.domNode,"position","relative"),o.set(this.domNode,"height","100%"),o.set(this.domNode,"width","100%"),t=this.matchWidgetBorderContainer=new j({class:"esriMatchContainer",style:"height: 100%; width: 100%;",gutters:!1}),e=this.matchWidgetContentPane1=new I({region:"top",style:"width: 100%; height: 30px;",class:"esriMatchHeader"}),i=this.matchWidgetContentPane2=new I({region:"center",style:"width: 100%; height: 100%;"}),this._gridMenuLeftSpanRef=r.create("span",{class:"esriMatchTitle",innerHTML:D.widgets.geocodeMatch.gridTitle},e.domNode),this._gridMenuRightRef=r.create("div",{class:"esriMatchOptions"},e.domNode),this._gridMenuRightSpanRef=r.create("span",{innerHTML:D.widgets.geocodeMatch.match.tableOptionsLabel},this._gridMenuRightRef),this._gridMenuRightArrowRef=r.create("div",{class:"esriSpriteArrow"},this._gridMenuRightRef),this._gridRef=r.create("div",{},i.domNode),t.addChild(e),t.addChild(i),t.placeAt(this.domNode),t.startup(),this.resize()},_createGridMenu:function(){this.gridMenu=new u({targetNodeIds:[this._gridMenuRightRef],leftClickToOpen:"true"}),this.gridMenu.addChild(new l({label:D.widgets.geocodeMatch.match.mapAllCandidatesLabel,onClick:i.hitch(this,(function(){this._resetMapState(),this._updateMapGraphics()}))})),this.gridMenu.addChild(new l({label:D.widgets.geocodeMatch.match.defaultSortOrderLabel,onClick:i.hitch(this,(function(){this.grid.set("sort","sort")}))})),this.gridMenu.startup()},_formatGeocodeResults:function(t){var e,i,s="";if("object"==typeof t){for(i in t)t.hasOwnProperty(i)&&(s+=t[i]+" ");e=s}else e=t.address&&"string"==typeof t.address?t.address:t;return e},_resetMapState:function(){this._popup&&(this._popup.map.infoWindow.hide(),this._popup.map.infoWindow.clearFeatures()),this.grid.clearSelection(),this.graphicsLayer.clear()},_resetAppState:function(){this.currentMatchId=null,this.lastAddress=null,this.lastGeocodeResults=null,this.currentSelectedRow=null,this.store.data=null,this.store=new _({data:""}),this.defaultGeometry=null,this._hasCustomPoint=!1,this._hasDefaultPoint=!1,this.grid.noDataMessage=D.widgets.geocodeMatch.match.noDataMsg,this.grid.refresh()},_calcGraphicsExtent:function(t){var e,i,s=t[0].geometry,a=s.getExtent(),r=t.length;for(null===a&&(a=new A(s.x,s.y,s.x,s.y,s.spatialReference)),i=1;i<r;i++)null===(e=(s=t[i].geometry).getExtent())&&(e=new A(s.x,s.y,s.x,s.y,s.spatialReference)),a=a.union(e);return a}});return n("extend-esri")&&i.setObject("dijit.GeocodeMatch",k,M),k}));