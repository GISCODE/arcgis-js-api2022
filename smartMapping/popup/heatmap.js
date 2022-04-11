/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../PopupTemplate","../../core/Error","../../intl/messages","./support/utils"],(function(e,r,n,t,a,l){"use strict";function i(e){return o.apply(this,arguments)}function o(){return(o=r._asyncToGenerator((function*(e){const{layer:r,renderer:n}=e;yield r.load();const a=n||r.renderer;if("heatmap"!==a.type)throw new t("heatmap-popup:invalid-parameters","renderer.type must be 'heatmap'");return{layer:r,renderer:a}}))).apply(this,arguments)}function s(e){return p.apply(this,arguments)}function p(){return(p=r._asyncToGenerator((function*(e){const[{renderer:r,layer:t},o]=yield Promise.all([i(e),a.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]);if(!r.field)return null;const{fieldInfos:s}=yield l.getFieldAndExpressionInfos({renderer:r,layer:t}),p=new n({content:yield l.getContentFromFieldInfos(t,{fieldInfos:s}),fieldInfos:s});return{primaryTemplate:{name:"heatmap",title:o.heatmap,value:p},secondaryTemplates:[]}}))).apply(this,arguments)}e.getTemplates=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
