/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Graphic","../../arcade/featureset/support/FeatureSetQueryInterceptor","../../core/Accessor","../../core/Handles","../../core/Logger","../../core/maybe","../../core/promiseUtils","../../core/throttle","../../core/watchUtils","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/cast","../../core/accessorSupport/decorators/subclass","../../popup/content/TextContent","./FeatureAttachments/FeatureAttachmentsViewModel","./FeatureContent/FeatureContentViewModel","./FeatureExpression/FeatureExpressionViewModel","./FeatureFields/FeatureFieldsViewModel","./FeatureMedia/FeatureMediaViewModel","./support/arcadeFeatureUtils","./support/featureUtils","./support/relatedFeatureUtils"],(function(e,t,r,i,o,n,s,a,l,c,p,u,d,f,h,_,y,m,b,g,A,I,v,M,x){"use strict";var F;const C=1,w="content-view-models",T="esri.widgets.FeatureViewModel",E=s.getLogger(T),V={attachmentsContent:!0,chartAnimation:!0,customContent:!0,expressionContent:!0,fieldsContent:!0,mediaContent:!0,textContent:!0};let P=F=function(t){function r(r){var i;return(i=t.call(this,r)||this)._handles=new n,i._error=null,i._featureAbortController=null,i.graphicChangedThrottled=c.throttle(i._graphicChanged,C,e._assertThisInitialized(i)),i._expressionAttributes=null,i._graphicExpressionAttributes=null,i.abilities={...V},i.content=null,i.contentViewModels=[],i.defaultPopupTemplateEnabled=!1,i.formattedAttributes=null,i.lastEditInfo=null,i.relatedInfos=new Map,i.title="",i.view=null,i._isAllowedContentType=t=>{const{abilities:r}=e._assertThisInitialized(i);return"attachments"===t.type&&r.attachmentsContent||"custom"===t.type&&r.customContent||"fields"===t.type&&r.fieldsContent||"media"===t.type&&r.mediaContent||"text"===t.type&&r.textContent||"expression"===t.type&&r.expressionContent},i._handles.add(p.init(e._assertThisInitialized(i),["graphic","_effectivePopupTemplate","abilities"],(()=>i.graphicChangedThrottled()))),i}e._inheritsLoose(r,t);var i=r.prototype;return i.destroy=function(){this._clear(),this._cancelFeatureQuery(),this._error=null,this._handles.destroy(),this._handles=null,this.graphic=null,this._destroyContentViewModels(),this.relatedInfos.clear()},i.castAbilities=function(e){return{...V,...e}},i.setActiveMedia=function(e,t){const r=this.contentViewModels[e];r instanceof I&&r.setActiveMedia(t)},i.nextMedia=function(e){const t=this.contentViewModels[e];t instanceof I&&t.next()},i.previousMedia=function(e){const t=this.contentViewModels[e];t instanceof I&&t.previous()},i._clear=function(){this._set("title",""),this._set("content",null),this._set("formattedAttributes",null)},i._graphicChanged=function(){var t=e._asyncToGenerator((function*(){this._cancelFeatureQuery(),this._error=null,this._clear();const{graphic:e}=this;if(!e)return;const t=new AbortController;this._featureAbortController=t;try{yield this._queryFeature({signal:t.signal})}catch(r){l.isAbortError(r)||(this._error=r,E.error("error","The popupTemplate could not be displayed for this feature.",{error:r,graphic:e,popupTemplate:this._effectivePopupTemplate}))}this._featureAbortController===t&&(this._featureAbortController=null)}));function r(){return t.apply(this,arguments)}return r}(),i._cancelFeatureQuery=function(){const{_featureAbortController:e}=this;e&&e.abort(),this._featureAbortController=null},i._compileContentElement=function(e,t){return"attachments"===e.type?this._compileAttachments(e,t):"custom"===e.type?this._compileCustom(e,t):"fields"===e.type?this._compileFields(e,t):"media"===e.type?this._compileMedia(e,t):"text"===e.type?this._compileText(e,t):"expression"===e.type?this._compileExpression(e,t):void 0},i._compileContent=function(e){if(this._destroyContentViewModels(),this.graphic)return Array.isArray(e)?e.filter(this._isAllowedContentType).map(((e,t)=>this._compileContentElement(e,t))):"string"==typeof e?this._compileText(new y({text:e}),0).text:e},i._destroyContentViewModels=function(){var e;null==(e=this._handles)||e.remove(w),this.contentViewModels.forEach((e=>e&&!e.destroyed&&e.destroy())),this._set("contentViewModels",[])},i._setExpressionContentVM=function(e,t){const{formattedAttributes:r}=this,{contentElement:i,contentElementViewModel:o}=e,n=null==i?void 0:i.type;o&&n&&("fields"===n&&(this._createFieldsFormattedAttributes({contentElement:i,contentElementIndex:t,formattedAttributes:r}),o.set(this._createFieldsVMParams(i,t))),"media"===n&&(this._createMediaFormattedAttributes({contentElement:i,contentElementIndex:t,formattedAttributes:r}),o.set(this._createMediaVMParams(i,t))),"text"===n&&o.set(this._createTextVMParams(i)))},i._compileExpression=function(e,t){const{expressionInfo:r}=e,{graphic:i,map:o,spatialReference:n,view:s}=this,a=new g({expressionInfo:r,graphic:i,interceptor:F.interceptor,map:o,spatialReference:n,view:s});return this.contentViewModels[t]=a,this._handles.add(p.init(a,"contentElementViewModel",(()=>this._setExpressionContentVM(a,t))),w),e},i._compileAttachments=function(e,t){const{graphic:r}=this,{description:i,title:o}=e;return this.contentViewModels[t]=new m({graphic:r,...this._compileTitleAndDesc({title:o,description:i})}),e},i._compileCustom=function(e,t){const{graphic:r}=this,{creator:i,destroyer:o}=e;return this.contentViewModels[t]=new b({graphic:r,creator:i,destroyer:o}),e},i._compileTitleAndDesc=function({title:e,description:t}){const{_fieldInfoMap:r,_sourceLayer:i,graphic:o,formattedAttributes:n,_expressionAttributes:s}=this,{attributes:a}=o,l=n.global;return{title:M.substituteFieldsInLinksAndAttributes({attributes:a,fieldInfoMap:r,globalAttributes:l,expressionAttributes:s,layer:i,text:e}),description:M.substituteFieldsInLinksAndAttributes({attributes:a,fieldInfoMap:r,globalAttributes:l,expressionAttributes:s,layer:i,text:t})}},i._createFieldsVMParams=function(e,t){const{_effectivePopupTemplate:r,formattedAttributes:i}=this,o={...i.global,...i.content[t]},n=(null==e?void 0:e.fieldInfos)||(null==r?void 0:r.fieldInfos),s=null==n?void 0:n.filter((({fieldName:e})=>M.isExpressionField(e)||M.isRelatedField(e)||o.hasOwnProperty(e))),a=null==r?void 0:r.expressionInfos,{description:l,title:c}=e;return{attributes:o,expressionInfos:a,fieldInfos:s,...this._compileTitleAndDesc({title:c,description:l})}},i._compileFields=function(e,t){const r=e.clone(),i=new A(this._createFieldsVMParams(e,t));return this.contentViewModels[t]=i,r.fieldInfos=i.formattedFieldInfos.slice(0),r},i._createMediaVMParams=function(e,t){const{abilities:r,graphic:i,_fieldInfoMap:o,formattedAttributes:n,_effectivePopupTemplate:s,relatedInfos:a,_sourceLayer:l,_expressionAttributes:c}=this,{attributes:p}=i,{description:u,mediaInfos:d,title:f}=e;return{abilities:{chartAnimation:r.chartAnimation},activeMediaInfoIndex:e.activeMediaInfoIndex||0,attributes:p,layer:l,fieldInfoMap:o,formattedAttributes:{...n.global,...n.content[t]},expressionAttributes:c,mediaInfos:d,popupTemplate:s,relatedInfos:a,...this._compileTitleAndDesc({title:f,description:u})}},i._compileMedia=function(e,t){const r=e.clone(),i=new I(this._createMediaVMParams(e,t));return r.mediaInfos=i.formattedMediaInfos.slice(0),this.contentViewModels[t]=i,r},i._createTextVMParams=function(e){const{graphic:t,_fieldInfoMap:r,_sourceLayer:i,_expressionAttributes:o}=this;if(e&&e.text){const{attributes:n}=t,s=this.formattedAttributes.global;e.text=M.substituteFieldsInLinksAndAttributes({attributes:n,fieldInfoMap:r,globalAttributes:s,expressionAttributes:o,layer:i,text:e.text})}return{graphic:t,creator:e.text}},i._compileText=function(e,t){const r=e.clone();return this.contentViewModels[t]=new b(this._createTextVMParams(r)),r},i._compileLastEditInfo=function(){const{_effectivePopupTemplate:e,_sourceLayer:t,graphic:r}=this;if(!e)return;const{lastEditInfoEnabled:i}=e,o=null==t?void 0:t.editFieldsInfo;return i&&o?M.formatEditInfo(o,r.attributes):void 0},i._compileTitle=function(e){const{_fieldInfoMap:t,_sourceLayer:r,graphic:i,_expressionAttributes:o}=this,{attributes:n}=i,s=this.formattedAttributes.global;return M.substituteFieldsInLinksAndAttributes({attributes:n,fieldInfoMap:t,globalAttributes:s,expressionAttributes:o,layer:r,text:e})},i._getTitle=function(){var t=e._asyncToGenerator((function*(){const{_effectivePopupTemplate:e,graphic:t}=this,r=null==e?void 0:e.title;return M.graphicCallback(r,{graphic:t})}));function r(){return t.apply(this,arguments)}return r}(),i._getContent=function(){var t=e._asyncToGenerator((function*(){const{_effectivePopupTemplate:e,graphic:t}=this,r=null==e?void 0:e.content;return M.graphicCallback(r,{graphic:t})}));function r(){return t.apply(this,arguments)}return r}(),i._queryFeature=function(){var t=e._asyncToGenerator((function*(e){const{_featureAbortController:t,_sourceLayer:r,graphic:i,_effectivePopupTemplate:o,spatialReference:n,map:s,view:a}=this,{content:{value:c},title:{value:p}}=yield l.eachAlways({content:this._getContent(),title:this._getTitle()});if(t!==this._featureAbortController||!i)return;yield M.queryUpdatedFeature({graphic:i,popupTemplate:o,layer:r,spatialReference:n},e);const{expressionAttributes:{value:u}}=yield l.eachAlways({checkForRelatedFeatures:this._checkForRelatedFeatures(e),expressionAttributes:v.createCompiledExpressions({expressionInfos:null==o?void 0:o.expressionInfos,spatialReference:n,graphic:i,map:s,interceptor:F.interceptor,view:a})});t===this._featureAbortController&&i&&(this._expressionAttributes=u,this._graphicExpressionAttributes={...i.attributes,...u},this._set("formattedAttributes",this._createFormattedAttributes(c)),this._set("title",this._compileTitle(p)),this._set("lastEditInfo",this._compileLastEditInfo()||null),this._set("content",this._compileContent(c)||null))}));function r(e){return t.apply(this,arguments)}return r}(),i._createMediaFormattedAttributes=function({contentElement:e,contentElementIndex:t,formattedAttributes:r}){const{_effectivePopupTemplate:i,graphic:o,relatedInfos:n,_sourceLayer:s,_fieldInfoMap:a,_graphicExpressionAttributes:l}=this;r.content[t]=M.formatAttributes({fieldInfos:null==i?void 0:i.fieldInfos,graphic:o,attributes:{...l,...e.attributes},layer:s,fieldInfoMap:a,relatedInfos:n})},i._createFieldsFormattedAttributes=function({contentElement:e,contentElementIndex:t,formattedAttributes:r}){if(e.fieldInfos){const{graphic:i,relatedInfos:o,_sourceLayer:n,_fieldInfoMap:s,_graphicExpressionAttributes:a}=this;r.content[t]=M.formatAttributes({fieldInfos:e.fieldInfos,graphic:i,attributes:{...a,...e.attributes},layer:n,fieldInfoMap:s,relatedInfos:o})}},i._createFormattedAttributes=function(e){const{_effectivePopupTemplate:t,graphic:r,relatedInfos:i,_sourceLayer:o,_fieldInfoMap:n,_graphicExpressionAttributes:s}=this,a=null==t?void 0:t.fieldInfos,l={global:M.formatAttributes({fieldInfos:a,graphic:r,attributes:s,layer:o,fieldInfoMap:n,relatedInfos:i}),content:[]};return Array.isArray(e)&&e.forEach(((e,t)=>{"fields"===e.type&&this._createFieldsFormattedAttributes({contentElement:e,contentElementIndex:t,formattedAttributes:l}),"media"===e.type&&this._createMediaFormattedAttributes({contentElement:e,contentElementIndex:t,formattedAttributes:l})})),l},i._checkForRelatedFeatures=function(e){const{graphic:t,_effectivePopupTemplate:r}=this;return this._queryRelatedInfos(t,M.getAllFieldInfos(r),e)},i._queryRelatedInfos=function(){var t=e._asyncToGenerator((function*(e,t,r){const{relatedInfos:i,_sourceLayer:o}=this;i.clear();const n=a.isSome(o.associatedLayer)?yield o.associatedLayer.load(r):o;if(!n)return;const s=t.filter((e=>e&&M.isRelatedField(e.fieldName)));if(!s||!s.length)return;t.forEach((e=>this._configureRelatedInfo(e,n)));const l=yield x.queryLayerInfos({relatedInfos:i,layer:n},r);Object.keys(l).forEach((e=>{var t;const r=i.get(e.toString()),o=null==(t=l[e])?void 0:t.value;r&&o&&(r.layerInfo=o.data)}));const c=yield x.queryRelatedFeatures({graphic:e,relatedInfos:i,layer:n},r);Object.keys(c).forEach((e=>{var t;x.setRelatedFeatures(null==(t=c[e])?void 0:t.value,i.get(e.toString()))}))}));function r(e,r,i){return t.apply(this,arguments)}return r}(),i._configureRelatedInfo=function(e,t){const{relatedInfos:r}=this,i=x.getRelatedFieldInfo(e.fieldName);if(!i)return;const{layerId:o,fieldName:n}=i;if(!o)return;const s=r.get(o.toString())||x.createRelatedInfo(o,t);s&&(x.updateRelatedInfo({relatedInfo:s,fieldName:n,fieldInfo:e}),this.relatedInfos.set(o,s))},e._createClass(r,[{key:"_effectivePopupTemplate",get:function(){return a.isSome(this.graphic)?this.graphic.getEffectivePopupTemplate(this.defaultPopupTemplateEnabled):null}},{key:"_fieldInfoMap",get:function(){return M.createfieldInfoMap(M.getAllFieldInfos(this._effectivePopupTemplate),this._sourceLayer)}},{key:"_sourceLayer",get:function(){return M.getSourceLayer(this.graphic)}},{key:"state",get:function(){return this.graphic?this._error?"error":this.waitingForContent?"loading":"ready":"disabled"}},{key:"graphic",set:function(e){this._set("graphic",e?e.clone():null)}},{key:"spatialReference",get:function(){return this.get("view.spatialReference")||null},set:function(e){void 0!==e?this._override("spatialReference",e):this._clearOverride("spatialReference")}},{key:"map",get:function(){return this.get("view.map")||null},set:function(e){void 0!==e?this._override("map",e):this._clearOverride("map")}},{key:"waitingForContent",get:function(){return!!this._featureAbortController}}]),r}(o);P.interceptor=new i.FeatureSetQueryInterceptor(M.preLayerQueryCallback,M.preRequestCallback),t.__decorate([u.property()],P.prototype,"_error",void 0),t.__decorate([u.property()],P.prototype,"_featureAbortController",void 0),t.__decorate([u.property({readOnly:!0})],P.prototype,"_effectivePopupTemplate",null),t.__decorate([u.property({readOnly:!0})],P.prototype,"_fieldInfoMap",null),t.__decorate([u.property({readOnly:!0})],P.prototype,"_sourceLayer",null),t.__decorate([u.property()],P.prototype,"abilities",void 0),t.__decorate([h.cast("abilities")],P.prototype,"castAbilities",null),t.__decorate([u.property({readOnly:!0})],P.prototype,"content",void 0),t.__decorate([u.property({readOnly:!0})],P.prototype,"contentViewModels",void 0),t.__decorate([u.property({type:Boolean})],P.prototype,"defaultPopupTemplateEnabled",void 0),t.__decorate([u.property({readOnly:!0})],P.prototype,"state",null),t.__decorate([u.property({readOnly:!0})],P.prototype,"formattedAttributes",void 0),t.__decorate([u.property({type:r,value:null})],P.prototype,"graphic",null),t.__decorate([u.property({readOnly:!0})],P.prototype,"lastEditInfo",void 0),t.__decorate([u.property({readOnly:!0})],P.prototype,"relatedInfos",void 0),t.__decorate([u.property()],P.prototype,"spatialReference",null),t.__decorate([u.property({readOnly:!0})],P.prototype,"title",void 0),t.__decorate([u.property()],P.prototype,"map",null),t.__decorate([u.property({readOnly:!0})],P.prototype,"waitingForContent",null),t.__decorate([u.property()],P.prototype,"view",void 0),P=F=t.__decorate([_.subclass(T)],P);return P}));
