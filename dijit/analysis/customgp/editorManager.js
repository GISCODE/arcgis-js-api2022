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

define(["dojo/_base/array","dojo/on","dojo/aspect","dijit/form/Select","dijit/form/TextBox","dijit/form/CheckBox","./common/dijit/URLInput","./editors/simpleEditors","./editors/DataFileEditor","./editors/RasterLayerEditor","./editors/SelectFeatureSetFromLayer","./editors/MultipleFeatureLayer","./editors/FieldEditor"],(function(e,t,a,r,i,o,d,l,u,n,p,s,f){var c,y,m={},E=[];return m.createEditor=function(t,o,S,L){var w,V=function(e,t,a){if(e.editorName&&e.dataType.indexOf("GPMultiValue")<0)return e.editorName;return"input"===t?function(e,t){return"GPMultiValue:GPFeatureRecordSetLayer"===e.dataType?"MultiSelectFeatureLayer":e.dataType.indexOf("GPMultiValue")>-1&&e.choiceList&&e.choiceList.length>0?"MultiValueChooser":e.dataType.indexOf("GPMultiValue")>-1&&(!e.choiceList||0===e.choiceList.length)?"MultiValueEditor":"GPLong"===e.dataType?"LongNumberTextBox":"GPDouble"===e.dataType?"DoubleNumberTextBox":"GPString"===e.dataType?e.choiceList&&e.choiceList.length>0?"Select":"TextBox":"GPBoolean"===e.dataType?"CheckBox":"GPLinearUnit"===e.dataType?"LinerUnitEditor":"GPDate"===e.dataType?"DateTimeEditor":"GPDataFile"===e.dataType?"DataFileEditor":"GPRasterDataLayer"===e.dataType?"RasterLayerEditor":"GPRecordSet"===e.dataType?"SimpleJsonEditor":"GPFeatureRecordSetLayer"===e.dataType?"setting"===t?"FeatureSetEditorChooser":"draw"===e.featureSetMode?"SelectFeatureSetFromDraw":"layers"===e.featureSetMode?"SelectFeatureSetFromLayer":"url"===e.featureSetMode?"SelectFeatureSetFromUrl":"file"===e.featureSetMode?"SelectFeatureSetFromFile":"UnsupportEditor":"Field"===e.dataType?"Field":"UnsupportEditor"}(e,a):function(e){return"GPFeatureRecordSetLayer"===e.dataType?"FeatureSetResultEditor":"GPRecordSet"===e.dataType?"RecordSetEditor":"MapServiceLayer"===e.dataType?"MapServiceLayer":"ShowMessage"}(e)}(t,o,S),F={param:t,widgetUID:L?L.uid:void 0,widget:L?L.widget:void 0,config:L?L.config:void 0,appConfig:L?L.appConfig:void 0,map:c,nls:y,context:S,editorManager:m,style:{width:"100%"}};if("UnsupportEditor"===V)F.message="type "+t.dataType+" is not supported for now.",w=new l.UnsupportEditor(F);else if("ShowMessage"===V)F.message=function(e){var t;t="GPRecordSet"===e.dataType?"table":"GPDataFile"===e.dataType||"GPRasterDataLayer"===e.dataType?"link":"text";return t}(t),w=new l.UnsupportEditor(F);else if("MapServiceLayer"===V)F.message=y.useResultMapService,w=new l.UnsupportEditor(F);else if("MultiValueChooser"===V)w=new l.MultiValueChooser(F);else if("MultiSelectFeatureLayer"===V)w=new s(F);else if("MultiValueEditor"===V)w=new l.MultiValueEditor(F);else if("LongNumberTextBox"===V)w=new l.LongNumberEditor(F);else if("DoubleNumberTextBox"===V)w=new l.DoubleNumberEditor(F);else if("Select"===V){var T=[];void 0!==t.defaultValue&&""!==t.defaultValue||T.push({value:"",label:""}),T=T.concat(e.map(t.choiceList,(function(e){return{label:e,value:e}}))),F.gEditor=new r({options:T,value:void 0===t.defaultValue||""===t.defaultValue?"":t.defaultValue}),F.editorName="Select",w=new l.GeneralEditorWrapperEditor(F)}else"TextBox"===V?(F.gEditor=new i({value:void 0===t.defaultValue?"":t.defaultValue}),w=new l.GeneralEditorWrapperEditor(F)):"CheckBox"===V?w=new l.BooleanEditor(F):"LinerUnitEditor"===V?w=new l.LinerUnitEditor(F):"DateTimeEditor"===V?w=new l.DateTimeEditor(F):"URLInput"===V?(F.gEditor=new d({value:void 0===t.defaultValue?"":t.defaultValue}),w=new l.GeneralEditorWrapperEditor(F)):"ObjectUrlEditor"===V?(t.defaultValue&&"string"==typeof t.defaultValue&&(F.value=t.defaultValue),w=new l.ObjectUrlEditor(F)):"SimpleJsonEditor"===V?(t.defaultValue&&(F.value=t.defaultValue),w=new l.SimpleJsonEditor(F)):"DataFileEditor"===V?(t.defaultValue&&(F.value=t.defaultValue),w=new u(F)):"RasterLayerEditor"===V?(t.defaultValue&&(F.value=t.defaultValue),w=new n(F)):"SelectFeatureSetFromLayer"===V?(t.defaultValue&&(F.value=t.defaultValue),w=new p(F)):"GetUrlObjectFromLayer"===V?(t.defaultValue&&(F.value=t.defaultValue),w=new l.GetUrlObjectFromLayer(F)):"Field"===V?(t.defaultValue&&(F.value=t.defaultValue),w=new f(F)):(F.message="wrong editorName."+V,w=new l.UnsupportEditor(F));return t.editorDependParamName&&(w.dependParam=t.editorDependParamName),a.before(w,"destroy",(function(){E.splice(E.indexOf(w),1)})),w.dependParam&&e.forEach(E,(function(e){e.param.name===w.dependParam&&w.update(e.getValue())})),E.push(w),w},m.setMap=function(e){c=e},m.setNls=function(e){y=e},m}));