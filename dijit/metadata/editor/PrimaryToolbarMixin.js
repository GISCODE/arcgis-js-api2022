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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom-class","dojo/dom-style","dojo/has","dojo/i18n!../nls/i18nBase","../base/ValidationTracker","../base/xml/XmlInterrogator","../base/xml/xmlUtil","./util/DownloadXmlDialog","./util/LoadDocumentDialog","./util/MessageDialog","./util/SaveDocumentDialog","./util/TransformDialog","../base/transform/Iso2IsoTransformer","../../../kernel"],(function(t,e,i,o,r,n,a,d,s,h,l,c,u,m,g,f,v){var w=t(null,{constructor:function(t){e.mixin(this,t)},_compareXmls:function(t,e){var i=function(t){if(null==t)return t;var e,i=t.indexOf("<ModTime>");return-1!==i&&(e=t.indexOf("</ModTime>"))>i?t.substring(0,i)+t.substring(e+10):t};return i(t)===i(e)},_confirmAndDelete:function(){if(this.editor.gxeAdaptor.getAllowEditMetadata()&&this.editor.gxeAdaptor.getAllowDeleteMetadata()){var t=a.editor.del.caption,i=a.editor.del.prompt,o=this.editor&&this.editor.dialogBroker;if(this.editor.gxeContext.arcgisMode){i=a.editor.del.portalPrompt;try{if(!this.editor.gxeAdaptor.portalItemContext){var r=a.editor.del.portalPrompt2;r&&(i=r)}}catch(t){console.error(t)}o&&(t=a.editor.del.portalButton)}new u({title:a.editor.del.dialogTitle,okLabel:t,onOkClick:e.hitch(this,(function(){var t=new u({title:a.editor.del.dialogTitle,showOkCancelBar:!1});t.show(a.editor.del.working).then(e.hitch(this,(function(){this.editor.gxeAdaptor.deleteMetadata({}).then(e.hitch(this,(function(){this.lastSavedXml=null,setTimeout(e.hitch(this,(function(){t.hide(),o&&this._close()})),1500)})),e.hitch(this,(function(e){t.hide();var i=a.editor.del.errorDeleting;this._handleError(i,e,!0)})))})))}))}).show(i)}},_executeSave:function(t,i,o,r){if(this.editor.gxeAdaptor.getAllowEditMetadata()){var n=new u({title:a.editor.save.dialogTitle,showOkCancelBar:!1});n.show(a.editor.save.working).then(e.hitch(this,(function(){this.editor.gxeAdaptor.saveXml(t,i,r).then(e.hitch(this,(function(){this.lastSavedXml=i,setTimeout(e.hitch(this,(function(){n.hide(),o&&this._close()})),1500)})),e.hitch(this,(function(t){n.hide();var e=a.editor.save.errorSaving;this._handleError(e,t,!0)})))})))}},_download:function(t,e,i){null===e&&(e="metadata");var o,r=e+".xml";window.navigator&&window.navigator.msSaveOrOpenBlob?window.navigator.msSaveOrOpenBlob(new Blob([t],{type:"text/xml"}),r):(o=a.editor.download.dialogTitle,i&&(o=a.editor.saveDraft.dialogTitle),new l({dialogTitle:o}).show(t,e))},_getTransformationTypes:function(t){var e=[];return(t=this.editor.getEditDocument())&&t.documentType.isIso?(i.forEach(this.editor.gxeContext.filterDocumentTypes(),(function(i){i.key!==t.documentType.key&&i.isIso&&t.documentType.isIso&&e.push(i)})),e):e},_handleError:function(t,e,i){if(e)try{console.error(e)}catch(t){}i&&new u({title:a.editor.errorDialog.dialogTitle,showOk:!1,cancelLabel:a.general.close}).show(t,"gxeIconError",e)},_initializeView:function(){var t=this.editor.gxeAdaptor.getAllowEditMetadata(),o=this.editor.gxeContext.allowView,n=this.editor.gxeContext.allowViewXml,d=this.editor.gxeContext.startupTypeKey,s=null;"string"==typeof d&&d.length>0&&-1!==this.editor.gxeContext.allowedTypeKeys.indexOf(d)&&i.some(this.editor.gxeContext.documentTypes.list,(function(t){if(t.key===d)return s=t,!0}));var h,l,c=e.hitch(this,(function(i,d){r.set(this.commonToolset,"display",""),d&&t?(this._setMode("edit"),s?this._fadeOut(a.editor.primaryToolbar.loadingDocument,e.hitch(this,(function(){this.editor.loadEditor(s,null,!0,!1).then(e.hitch(this,(function(){this._fadeIn()})),e.hitch(this,(function(t){this._fadeIn();var e=a.editor.primaryToolbar.errors.errorLoadingDocument;this._handleError(e,t,!0)})))}))):this._fadeIn(e.hitch(this,(function(){setTimeout(e.hitch(this,(function(){this._showLoadDialog(a.editor.load.noMetadata)})),500)})))):(o||n||!t||(i="edit"),this._setMode(i),this._fadeIn())})),u=this.editor.viewDocumentPane,m=null,g=this._parseXml(this.editor.gxeAdaptor.getOriginalXml());if(g.documentType){if(h=g.documentType,m=g.xmlString,l=g.xmlDocument,t&&!o)return r.set(this.commonToolset,"display",""),this._setMode("edit"),void this._loadEditor();this._fadeOut(a.editor.primaryToolbar.initializing,e.hitch(this,(function(){this.editor.loadView(h,l,!0).then(e.hitch(this,(function(t){u.xmlString=m,this.editor.xmlPane.setXml(m,t.originalTitle),c("view")})),e.hitch(this,(function(t){c("view");var e=a.editor.primaryToolbar.errors.errorGeneratingView;this._handleError(e,t,!0)})))})))}else if(g.xmlDocument){var f=a.editor.xmlViewOnly;"string"==typeof this.editor.gxeContext.xmlViewOnlyText&&(f=this.editor.gxeContext.xmlViewOnlyText),!o&&t?this.editor.editDocumentPane.showMessage(f):u.showMessage(f),c("viewXml")}else u.showMessage(a.editor.noMetadata),c("view",!0)},_loadEditor:function(){if(this.editor.gxeAdaptor.getAllowEditMetadata()){var t,i=this._parseXml(this.editor.gxeAdaptor.getOriginalXml());i.documentType?this._fadeOut(a.editor.primaryToolbar.startingEditor,e.hitch(this,(function(){this.editor.loadEditor(i.documentType,i.xmlDocument,!1,!0).then(e.hitch(this,(function(){this._fadeIn()})),e.hitch(this,(function(t){this._fadeIn();var e=a.editor.primaryToolbar.errors.errorLoadingDocument;this._handleError(e,t,!0)})))}))):(t=a.editor.load.noMetadata,i.xmlDocument&&(t=a.editor.load.unrecognizedMetadata),this._showLoadDialog(t))}},_loadView:function(){var t=this.editor.getEditDocument();if(t){var i=this.editor.viewDocumentPane,r=new d({ignoreErrors:!0}),n=t.generateXml(r);this._compareXmls(n,i.xmlString)?this._setMode("view"):(o.add(this.viewButton.domNode,"current"),o.remove(this.viewXmlButton.domNode,"current"),o.remove(this.editButton.domNode,"current"),this._fadeOut(a.editor.primaryToolbar.generatingView,e.hitch(this,(function(){this._setMode("view");var o=t.documentType,r=h.parseFromString(n);this.editor.loadView(o,r,!1).then(e.hitch(this,(function(t){i.xmlString=n,i.hideMessage(),this.editor.xmlPane.setXml(n,t.originalTitle),this._fadeIn()})),e.hitch(this,(function(t){i.hideMessage(),this._fadeIn();var e=a.editor.primaryToolbar.errors.errorGeneratingView;this._handleError(e,t,!0)})))}))))}else this._setMode("view")},_parseXml:function(t){var e={documentType:null,xmlString:t,xmlDocument:null};if(!t)return e;var i=null;try{i=h.parseFromString(t)}catch(t){return e}e.xmlDocument=i;var o=this.editor.gxeContext.filterDocumentTypes(),r=new s;return e.documentType=r.interrogate(i,o),e},_save:function(t){if(this.editor.gxeAdaptor.getAllowEditMetadata()){var i=this.editor.getEditDocument();if(i){this.editor.validationPane.clearMessages();var o=new d({isSaveAsDraft:!0,validationPane:this.editor.validationPane});this.editor.gxeContext.validateOnSave&&!t.isSaveAsDraft&&(o.isSaveAsDraft=!1);var r=i.generateXml(o),n=o.documentTitle;o.hadValidationErrors||null!==n&&0!==n.length&&(t.isSaveAsDraft?this._download(r,n,!0):t.showDialog?new m({editor:this.editor,gxeDocument:i,onSave:e.hitch(this,(function(t,e,o){t.hide(),this._executeSave(i,r,e,o)}))}).show():this._executeSave(i,r,t.isSaveAndClose,t.bPushToItem))}}},_showLoadDialog:function(t){new c({editor:this.editor,prompt:t,onSelect:e.hitch(this,(function(t,i,o,r){t.hide(),this._fadeOut(a.editor.primaryToolbar.loadingDocument,e.hitch(this,(function(){this.editor.loadEditor(i,o,r,!1).then(e.hitch(this,(function(){this._fadeIn()})),e.hitch(this,(function(t){this._fadeIn();var e=a.editor.primaryToolbar.errors.errorLoadingDocument;this._handleError(e,t,!0)})))})))})),onSelectPullItem:e.hitch(this,(function(t){t.hide(),this.editor.gxeAdaptor.pullItem(this.editor.getEditDocument())}))}).show()},_showTransformDialog:function(t,i){new g({editor:this.editor,documentTypes:i,prompt:null,onSelect:e.hitch(this,(function(i,o){i.hide(),this._fadeOut(a.editor.transform.working,e.hitch(this,(function(){var i=new f({gxeDocument:t,toDocumentType:o}),r=new d({ignoreErrors:!0}),n=t.generateXml(r,i),s=null;if(n)try{s=h.parseFromString(n)}catch(t){s=null,console.error(t)}this.editor.loadEditor(o,s,!1,!1).then(e.hitch(this,(function(e){e.documentType.afterTransform(e,t),this._fadeIn()})),e.hitch(this,(function(t){this._fadeIn();var e=a.editor.transform.errorTransforming;this._handleError(e,t,!0)})))})))}))}).show()},_validate:function(t){var e=this.editor.getEditDocument();if(e){this.editor.validationPane.clearMessages();var i=new d({isSaveAsDraft:t,validationPane:this.editor.validationPane});if(e.generateXml(i),!i.hadValidationErrors)new u({title:a.editor.validate.dialogTitle,showCancel:!1}).show(a.editor.validate.docIsValid,null,null)}}});return n("extend-esri")&&e.setObject("dijit.metadata.editor.PrimaryToolbarMixin",w,v),w}));