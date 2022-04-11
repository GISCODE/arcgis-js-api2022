/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../PopupTemplate","../layers/support/fieldUtils","../popup/content/AttachmentsContent","../popup/content/Content","../popup/content/CustomContent","../popup/content/ExpressionContent","../popup/content/FieldsContent","../popup/content/MediaContent","../popup/content/TextContent","../popup/FieldInfo","../popup/support/FieldInfoFormat"],(function(e,t,n,i,o,l,a,s,r,d,p,u){"use strict";const c=["oid","global-id"],f=["oid","global-id","guid"];function m({displayField:e,editFieldsInfo:n,fields:i,objectIdField:o,title:l},a){if(!i)return null;const s=$({editFieldsInfo:n,fields:i,objectIdField:o},a);if(!s.length)return null;const r=v({titleBase:l,fields:i,displayField:e}),d=_();return new t({title:r,content:d,fieldInfos:s})}const F=[/^fnode_$/i,/^tnode_$/i,/^lpoly_$/i,/^rpoly_$/i,/^poly_$/i,/^subclass$/i,/^subclass_$/i,/^rings_ok$/i,/^rings_nok$/i,/shape/i,/perimeter/i,/objectid/i,/_i$/i],b=(e,{editFieldsInfo:t,objectIdField:n,visibleFieldNames:i})=>i?i.has(e.name):!w(e.name,t)&&((!n||e.name!==n)&&(!(c.indexOf(e.type)>-1)&&!F.some((t=>t.test(e.name)))));function C(e,t){const n=e;return t&&(e=e.filter((e=>-1===t.indexOf(e.type)))),e===n&&(e=e.slice()),e.sort(g),e}function g(e,t){return"oid"===e.type?-1:"oid"===t.type?1:x(e)?-1:x(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function w(e,t){if(!e||!t)return!1;const{creationDateField:n,creatorField:i,editDateField:o,editorField:l}=t;return-1!==[n&&n.toLowerCase(),i&&i.toLowerCase(),o&&o.toLowerCase(),l&&l.toLowerCase()].indexOf(e.toLowerCase())}function y(e,t){return e.editable&&-1===f.indexOf(e.type)&&!w(e.name,t)}function I(e,t){return new s({fieldInfos:$(e,t).filter((e=>e.visible))})}function $({editFieldsInfo:e,fields:t,objectIdField:n},i){return C(t,(null==i?void 0:i.ignoreFieldTypes)||j).map((t=>new p({fieldName:t.name,isEditable:y(t,e),label:t.alias,format:L(t),visible:b(t,{editFieldsInfo:e,objectIdField:n,visibleFieldNames:null==i?void 0:i.visibleFieldNames})})))}function L(e){switch(e.type){case"small-integer":case"integer":case"single":return new u({digitSeparator:!0,places:0});case"double":return new u({digitSeparator:!0,places:2});case"date":return new u({dateFormat:"long-month-day-year"});default:return null}}function _(){return[new s,new i]}function v(e){const t=n.getDisplayFieldName(e),{titleBase:i}=e;return t?`${i}: {${t.trim()}}`:i}function x(e){if("name"===(e.name&&e.name.toLowerCase()))return!0;return"name"===(e.alias&&e.alias.toLowerCase())||void 0}const j=["geometry","blob","raster","guid","xml"];e.createFieldInfos=$,e.createFieldsContent=I,e.createPopupTemplate=m,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
