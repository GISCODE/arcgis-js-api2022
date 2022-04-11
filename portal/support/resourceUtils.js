/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../core/Error","../../core/maybe","../../core/urlUtils"],(function(e,t,r,n,o,s){"use strict";function a(e){return i.apply(this,arguments)}function i(){return(i=t._asyncToGenerator((function*(e,t={},r){yield e.load(r);const n=s.join(e.itemUrl,"resources"),{start:a=1,num:i=10,sortOrder:l="asc",sortField:u="created"}=t,c={query:{start:a,num:i,sortOrder:l,sortField:u,token:e.apiKey},signal:o.get(r,"signal")},p=yield e.portal._request(n,c);return{total:p.total,nextStart:p.nextStart,resources:p.resources.map((({created:t,size:r,resource:n})=>({created:new Date(t),size:r,resource:e.resourceFromPath(n)})))}}))).apply(this,arguments)}function l(e,t,r,n){return u.apply(this,arguments)}function u(){return(u=t._asyncToGenerator((function*(e,t,r,a){if(!e.hasPath())throw new n(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const i=e.portalItem;yield i.load(a);const l=s.join(i.userItemUrl,"add"===t?"addResources":"updateResources"),[u,c]=f(e.path),p=yield g(r),d=new FormData;return u&&"."!==u&&d.append("resourcesPrefix",u),d.append("fileName",c),d.append("file",p,c),d.append("f","json"),o.isSome(a)&&a.access&&d.append("access",a.access),yield i.portal._request(l,{method:"post",body:d,signal:o.get(a,"signal")}),e}))).apply(this,arguments)}function c(e,t,r){return p.apply(this,arguments)}function p(){return(p=t._asyncToGenerator((function*(e,t,r){if(!t.hasPath())throw new n("portal-item-resources-remove:invalid-path","Resource does not have a valid path");yield e.load(r);const a=s.join(e.userItemUrl,"removeResources");yield e.portal._request(a,{method:"post",query:{resource:t.path},signal:o.get(r,"signal")}),t.portalItem=null}))).apply(this,arguments)}function d(e,t){return h.apply(this,arguments)}function h(){return(h=t._asyncToGenerator((function*(e,t){yield e.load(t);const r=s.join(e.userItemUrl,"removeResources");return e.portal._request(r,{method:"post",query:{deleteAll:!0},signal:o.get(t,"signal")})}))).apply(this,arguments)}function f(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function y(e){const[t,r]=m(e),[n,o]=f(t);return[n,o,r]}function m(e){const t=s.getPathExtension(e);return o.isNone(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}function g(e){return v.apply(this,arguments)}function v(){return(v=t._asyncToGenerator((function*(e){if(e instanceof Blob)return e;return(yield r(e.url,{responseType:"blob"})).data}))).apply(this,arguments)}function P(e,t){if(!e.hasPath())return null;const[r,,n]=y(e.path);return e.portalItem.resourceFromPath(s.join(r,t+n))}function _(e,t){if(!e.hasPath())return null;const[r,,n]=y(e.path);return e.portalItem.resourceFromPath(s.join(r,t+n))}e.addOrUpdateResource=l,e.contentToBlob=g,e.fetchResources=a,e.getSiblingOfSameType=P,e.getSiblingOfSameTypeI=_,e.removeAllResources=d,e.removeResource=c,e.splitPrefixFileNameAndExtension=y,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
