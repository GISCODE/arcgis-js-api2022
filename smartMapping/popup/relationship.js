/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../PopupTemplate","../../core/Error","../../intl/messages","./support/utils"],(function(e,n,r,i,t,o){"use strict";function l(e){return s.apply(this,arguments)}function s(){return(s=n._asyncToGenerator((function*(e){const{layer:n,renderer:r}=e;yield n.load();const t=r||n.renderer;if("unique-value"!==t.type)throw new i("relationship-popup:invalid-parameters","renderer.type must be 'unique-value'");const o=t.authoringInfo;if(!o||"relationship"!==o.type)throw new i("relationship-popup:invalid-parameters","renderer.authoringInfo.type must be 'relationship'");if(!(o.field1&&o.field1.field&&o.field2&&o.field2.field))throw new i("relationship-popup:invalid-parameters","'field1' and/or 'field2' properties are missing in renderer.authoringInfo");return{layer:n,renderer:t}}))).apply(this,arguments)}function a(e,n){return p.apply(this,arguments)}function p(){return(p=n._asyncToGenerator((function*(e,n,i="divide"){const{fieldInfos:t,expressionInfos:l}=yield o.getFieldAndExpressionInfos({renderer:e,layer:n,normFieldExpressionTemplate:i});return new r({content:yield o.getContentFromFieldInfos(n,{fieldInfos:t,expressionInfos:l}),fieldInfos:t,expressionInfos:l})}))).apply(this,arguments)}function u(e){const n=e.authoringInfo;return!(!n.field1.normalizationField&&!n.field2.normalizationField)}function d(e){return f.apply(this,arguments)}function f(){return(f=n._asyncToGenerator((function*(e){const[{renderer:n,layer:r},i]=yield Promise.all([l(e),t.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]),o={name:"relationship",title:i.relationshipPopupTitle,value:yield a(n,r)},s=[];return u(n)&&s.push({name:"relationship-percent",title:i.relationshipNormFieldAsPercent,value:yield a(n,r,"percentage")}),{primaryTemplate:o,secondaryTemplates:s}}))).apply(this,arguments)}e.getTemplates=d,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
