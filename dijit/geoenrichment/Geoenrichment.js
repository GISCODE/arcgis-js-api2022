// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["esri/declare","dojo/_base/lang","dojo/on","dojo/string","esri/dijit/geoenrichment/promise/all","esri/dijit/geoenrichment/when","esri/graphic","esri/geometry/jsonUtils","esri/tasks/locator","esri/tasks/FeatureSet","esri/tasks/geoenrichment/GeoenrichmentTask","esri/tasks/geoenrichment/EnrichParameters","esri/tasks/geoenrichment/RingBuffer","esri/tasks/geoenrichment/DriveBuffer","esri/tasks/geoenrichment/GeographyLevel","esri/tasks/geoenrichment/GeometryStudyArea","esri/tasks/geoenrichment/AddressStudyArea","esri/tasks/geoenrichment/studyAreaFromJson","./_Invoke","./config","./utils/ArrayUtil","./utils/StudyAreaKeyBuilder","./infographicUtils/bufferTitle","./infographicUtils/DataProvider"],(function(e,t,s,r,n,i,a,o,u,h,l,c,f,d,y,v,m,g,p,_,k,b,V,A){var D=e(null,{_keys:null,_values:null,_capacity:5,constructor:function(e){this._keys=[],this._values={},e&&(this._capacity=e)},getValue:function(e){return this._values[e]},setValue:function(e,t){this._keys.push(e),this._values[e]=t,this._removeOverflow()},hasValue:function(e){return this._values.hasOwnProperty(e)},_removeOverflow:function(){if(this._keys.length>this._capacity)for(var e=this._keys.splice(0,this._keys.length-this._capacity),t=0;t<e.length;t++)delete this._values[e[t]]},setCapacity:function(e){this._capacity=e,this._removeOverflow()},toJson:function(){var e={};for(var t in this._values){var s=this._values[t];null==s||"number"==typeof s&&isNaN(s)||("string"==typeof s||"boolean"==typeof s||"number"==typeof s?e[t]=s:"object"==typeof s&&s.toJson&&(e[t]=s.toJson()))}return{keys:this._keys.slice(),values:e,capacity:this._capacity}},fromJson:function(e,t){if(e)for(var s in this._keys=e.keys,this._capacity=e.capacity,this._values={},e.values)this._values[s]=t?t(e.values[s]):e.values[s]}}),J=e(null,{_values:null,constructor:function(e){this._values=new D(e)},getValue:function(e){var t=this.keyToString(e);if(this._values.hasValue(t))return this._values.getValue(t);var s=this;return this.keyToValue(e).then((function(e){return s._values.setValue(t,e),e}))},keyToString:function(e){return JSON.stringify(e)},keyToValue:function(e){throw"Not implemented"},setCapacity:function(e){this._values.setCapacity(e)},toJson:function(){return this._values.toJson()},fromJson:function(e,t){e&&this._values.fromJson(e,t)}}),C=e([J],{keyToString:function(e){return JSON.stringify(e.toJson())},keyToValue:function(e){return new u(_.locatorUrl).locationToAddress(e).then((function(e){return r.substitute(_.addressFormat,e.address,(function(e){return e||""}))}),(function(e){return""}))}});var w=e([J],{_countryValues:null,_geometries:null,constructor:function(){this._countryValues=new D,this._geometries=new D(3)},keyToValue:function(e){var t,s,r=this,n=g(e.studyArea),i=n.returnGeometry;i&&(s=function(e){var t=b.studyAreaToJson(e);return delete t.returnGeometry,delete t.comparisonLevels,delete t.attributes,t=JSON.stringify(t)}(n),t=this._geometries.hasValue(s));var a=i&&!t,o=new l(_.server);o.token=_.token;for(var u,h,f=null,d=n.comparisonGeographyLevels.length-1;d>=0;d--)"Admin1"==n.comparisonGeographyLevels[d].layerID&&(f=n.comparisonGeographyLevels.splice(d,1)[0]);f&&(u=JSON.stringify({variables:e.variables,country:e.country}),(h=this._countryValues.hasValue(u))||n.comparisonGeographyLevels.push(f));var y=new c;return y.forStorage=!1,y.countryID=e.country,y.variables=e.variables,n.returnGeometry=a,a&&(y.outSR=n.geometry?n.geometry.spatialReference:e.outSR),y.studyAreas.push(n),o.enrich(y).then((function(e){var n=e.featureSets[0].features;return f&&(h?n.push(r._countryValues.getValue(u)):r._countryValues.setValue(u,n[n.length-1])),i&&(t?n[0].geometry=r._geometries.getValue(s):r._geometries.setValue(s,n[0].geometry)),e.featureSets[0]}))},setCapacity:function(e){this.inherited(arguments),this._countryValues.setCapacity(e)},toJson:function(){var e=this.inherited(arguments);return e.countryValues=this._countryValues.toJson(),e.geometries=this._geometries.toJson(),e},fromJson:function(e){e&&(this._countryValues.fromJson(e.countryValues,(function(e){return new a(e)})),this._geometries.fromJson(e.geometries,(function(e){return o.fromJson(e)})),this.inherited(arguments,[e,function(e){return new h(e)}]))}}),S=e([J],{metadata:null,_enrichCache:null,_addressCache:null,constructor:function(e){this._enrichCache=new w(e),this._addressCache=new C(3)},keyToValue:function(e){var t=this,s=[],r=e.returnAddress;delete e.returnAddress,s.push(this._enrichCache.getValue(e));var i=g(e.studyArea);return r&&s.push(this._addressCache.getValue(i.geometry)),n(s).then((function(e){var s=e[0],n=s.features[0];return n.attributes[t.metadata.name]||(n.attributes[t.metadata.name]=V(i.getGeomType(),i.options),r?n.attributes[t.metadata.address]=e[1]:i instanceof m&&(n.attributes[t.metadata.address]=i.address.text)),s}))},setCapacity:function(e){this.inherited(arguments),this._enrichCache.setCapacity(e)},toJson:function(){var e=this.inherited(arguments);return e.metadata=t.clone(this.metadata),e.enrichCache=this._enrichCache.toJson(),e.addressCache=this._addressCache.toJson(),e},fromJson:function(e){e&&(this.metadata=e.metadata,this._enrichCache.fromJson(e.enrichCache),this._addressCache.fromJson(e.addressCache),this.inherited(arguments,[e,function(e){return new h(e)}]))}});return e("esri.dijit.geoenrichment.Geoenrichment",[A,p],{country:null,returnGeometry:!1,returnAddress:!1,returnData:!0,studyArea:null,outSR:null,buffer:null,variables:null,levels:null,highestLevel:null,data:null,restartOnDone:!1,requests:null,started:!1,cache:null,constructor:function(){this.buffer=new f,this.cache=new S,this.cache.metadata=this.metadata},getData:function(){return this.data},getGeometry:function(){return this.data.features[0].geometry},isBusy:function(){return this.pendingInvoke("requestData")||this.requests||this.restartOnDone},setBuffer:function(e){this.buffer=e,this.invalidate()},getBuffer:function(){return this.buffer},setStudyArea:function(e){this.studyArea=e,this.invalidate()},setVariables:function(e){k.arraysEqual(this.variables,e)||(this.variables=e,this.invalidateData())},setGeoLevels:function(e,t){k.arraysEqual(this.levels,e)&&this.highestLevel==t||(this.levels=e,this.highestLevel=t,this.invalidateData())},setReturnAddress:function(e){this.returnAddress!=e&&(this.returnAddress=e,e&&this.invalidateData())},setCacheLimit:function(e){this.cache.setCapacity(e)},invalidateData:function(){this.data=null,this.invalidate()},invalidate:function(){this.pendingInvoke("requestData")||(this.requests?this.restartOnDone=!0:(this.geometry=null,this.invoke("requestData")))},requestData:function(){if(this.studyArea&&this.variables&&this.buffer){var e;this.requests=[],this.started||(s.emit(this,"start"),this.started=!0);var r=this.buffer,n=!1;if(this.studyArea instanceof v)switch(this.studyArea.geometry.type){case"point":n=this.returnAddress;break;case"polyline":this.buffer instanceof d&&(r=new f);break;case"polygon":r=null}var a=t.clone(this.studyArea);if(!a.options&&r&&(a.options=r),this.levels)for(var o=0;o<this.levels.length;o++)a.comparisonGeographyLevels.push(new y({layerID:this.levels[o]}));this.highestLevel&&a.comparisonGeographyLevels.push(new y({layerID:this.highestLevel})),a.returnGeometry=this.returnGeometry,e=i(this.cache.getValue({country:this.country,variables:this.variables,returnData:this.returnData,studyArea:b.studyAreaToJson(a),outSR:this.outSR,returnAddress:n})),this.requests.push(e),e.then(t.hitch(this,this.handleResponse),t.hitch(this,this.handleError))}},stop:function(){if(this.restartOnDone=!1,this.cancelInvoke("requestData"),this.requests)for(var e=this.requests.slice(0),t=0;t<e.length;t++)e[t].cancel()},handleResponse:function(e){try{this.data=e,this.data.features[0].attributes.isThisArea=!0,this.onDone(null)}catch(e){this.onDone(e)}},handleError:function(e){this.onDone(e)},onDone:function(e){this.requests=null,e?"CancelError"!==e.name&&(console.log(e),s.emit(this,"error",e)):s.emit(this,"data"),this.restartOnDone?(this.invalidate(),this.restartOnDone=!1):(s.emit(this,"end"),this.started=!1)}})}));