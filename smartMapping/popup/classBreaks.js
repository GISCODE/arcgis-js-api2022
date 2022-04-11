/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../PopupTemplate","../../core/Error","../../intl/messages","./support/utils"],(function(e,r,n,s,t,a){"use strict";function l(e){return i.apply(this,arguments)}function i(){return(i=r._asyncToGenerator((function*(e){const{layer:r,renderer:n}=e;yield r.load();const t=n||r.renderer;if("class-breaks"!==t.type)throw new s("class-breaks-popup:invalid-parameters","renderer.type must be 'class-breaks'");return{layer:r,renderer:t}}))).apply(this,arguments)}function o(e,r){return p.apply(this,arguments)}function p(){return(p=r._asyncToGenerator((function*(e,r,s="divide"){const{fieldInfos:t,expressionInfos:l}=yield a.getFieldAndExpressionInfos({renderer:e,layer:r,normFieldExpressionTemplate:s});return new n({content:yield a.getContentFromFieldInfos(r,{fieldInfos:t,expressionInfos:l}),fieldInfos:t,expressionInfos:l})}))).apply(this,arguments)}function u(e){return c.apply(this,arguments)}function c(){return(c=r._asyncToGenerator((function*(e){const[{renderer:r,layer:n},s]=yield Promise.all([l(e),t.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]),i={name:"class-breaks",title:s.classBreaks,value:yield o(r,n)},p=[];return a.hasNormalizedField(r)&&p.push({name:"class-breaks-percent",title:s.classBreaksNormFieldAsPercent,value:yield o(r,n,"percentage")}),{primaryTemplate:i,secondaryTemplates:p}}))).apply(this,arguments)}e.getTemplates=u,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));