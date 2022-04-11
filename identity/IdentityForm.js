/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass","../intl/substitute","../widgets/Widget","../widgets/support/widgetUtils","../widgets/support/decorators/messageBundle","../core/Logger","../widgets/support/jsxFactory"],(function(e,t,s,r,o,i,n,u,a,l,p,d,c){"use strict";const _={base:"esri-identity-form",group:"esri-identity-form__group",label:"esri-identity-form__label",footer:"esri-identity-form__footer",esriInput:"esri-input",esriButton:"esri-button",esriButtonSecondary:"esri-button--secondary"},h="ArcGIS Online";let y=function(t){function s(e,s){var r;return(r=t.call(this,e,s)||this)._usernameInputNode=null,r._passwordInputNode=null,r.messages=null,r.signingIn=!1,r.server=null,r.resource=null,r.error=null,r.oAuthPrompt=!1,r}e._inheritsLoose(s,t);var r=s.prototype;return r.render=function(){const{error:e,server:t,resource:s,signingIn:r,oAuthPrompt:o,messages:i}=this,n=c.tsx("div",{class:_.group},u.substitute(o?i.oAuthInfo:i.info,{server:/\.arcgis\.com/i.test(t)?h:t,resource:`(${s||i.lblItem})`})),a=o?null:c.tsx("div",{class:_.group,key:"username"},c.tsx("label",{class:_.label},i.lblUser,c.tsx("input",{value:"",required:!0,autocomplete:"off",spellcheck:!1,type:"text",bind:this,afterCreate:l.storeNode,"data-node-ref":"_usernameInputNode",class:_.esriInput}))),p=o?null:c.tsx("div",{class:_.group,key:"password"},c.tsx("label",{class:_.label},i.lblPwd,c.tsx("input",{value:"",required:!0,type:"password",bind:this,afterCreate:l.storeNode,"data-node-ref":"_passwordInputNode",class:_.esriInput}))),d=c.tsx("div",{class:this.classes(_.group,_.footer)},c.tsx("input",{type:"submit",disabled:!!r,value:r?i.lblSigning:i.lblOk,class:_.esriButton}),c.tsx("input",{type:"button",value:i.lblCancel,bind:this,onclick:this._cancel,class:this.classes(_.esriButton,_.esriButtonSecondary)})),y=e?c.tsx("div",null,e.details&&e.details.httpStatus?i.invalidUser:i.noAuthService):null;return c.tsx("form",{class:_.base,bind:this,onsubmit:this._submit},n,y,a,p,d)},r._cancel=function(){this._set("signingIn",!1),this._usernameInputNode&&(this._usernameInputNode.value=""),this._passwordInputNode&&(this._passwordInputNode.value=""),this.emit("cancel")},r._submit=function(e){e.preventDefault(),this._set("signingIn",!0);const t=this.oAuthPrompt?{}:{username:this._usernameInputNode&&this._usernameInputNode.value,password:this._passwordInputNode&&this._passwordInputNode.value};this.emit("submit",t)},s}(a);t.__decorate([s.property(),p.messageBundle("esri/identity/t9n/identity")],y.prototype,"messages",void 0),t.__decorate([s.property()],y.prototype,"signingIn",void 0),t.__decorate([s.property()],y.prototype,"server",void 0),t.__decorate([s.property()],y.prototype,"resource",void 0),t.__decorate([s.property()],y.prototype,"error",void 0),t.__decorate([s.property()],y.prototype,"oAuthPrompt",void 0),y=t.__decorate([n.subclass("esri.identity.IdentityForm")],y);return y}));