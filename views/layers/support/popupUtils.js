/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/maybe","../../../layers/support/fieldUtils"],(function(e,l,t,i){"use strict";function d(e){return n.apply(this,arguments)}function n(){return(n=l._asyncToGenerator((function*(e,l=e.popupTemplate){if(!t.isSome(l))return[];const d=yield l.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:n}=l,{objectIdField:p,typeIdField:s,globalIdField:u,relationships:o}=e;if(d.includes("*"))return["*"];const a=n?yield i.getFeatureEditFields(e):[],r=i.fixFields(e.fieldsIndex,[...d,...a]);return s&&r.push(s),r&&p&&e.fieldsIndex.has(p)&&-1===r.indexOf(p)&&r.push(p),r&&u&&e.fieldsIndex.has(u)&&-1===r.indexOf(u)&&r.push(u),o&&o.forEach((l=>{const{keyField:t}=l;r&&t&&e.fieldsIndex.has(t)&&-1===r.indexOf(t)&&r.push(t)})),r}))).apply(this,arguments)}function p(e,l){return e.popupTemplate?e.popupTemplate:t.isSome(l)&&l.defaultPopupTemplateEnabled&&t.isSome(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}e.getFetchPopupTemplate=p,e.getRequiredFields=d,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
