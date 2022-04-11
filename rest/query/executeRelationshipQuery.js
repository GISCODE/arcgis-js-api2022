/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../utils","./operations/queryRelatedRecords","../support/FeatureSet","../support/RelationshipQuery"],(function(e,t,r,n,o,u){"use strict";function i(e,t,r){return s.apply(this,arguments)}function s(){return(s=t._asyncToGenerator((function*(e,t,i){t=u.from(t);const s=r.parseUrl(e);return n.executeRelationshipQuery(s,t,i).then((e=>{const t=e.data,r={};return Object.keys(t).forEach((e=>r[e]=o.fromJSON(t[e]))),r}))}))).apply(this,arguments)}function a(e,t,r){return p.apply(this,arguments)}function p(){return(p=t._asyncToGenerator((function*(e,t,o){t=u.from(t);const i=r.parseUrl(e);return n.executeRelationshipQueryForCount(i,t,{...o}).then((e=>e.data))}))).apply(this,arguments)}e.executeRelationshipQuery=i,e.executeRelationshipQueryForCount=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));