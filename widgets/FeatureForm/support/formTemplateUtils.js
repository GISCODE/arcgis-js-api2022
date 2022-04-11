/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../layers/support/RangeDomain","../FieldConfig","../FieldGroupConfig"],(function(e,i,n,t){"use strict";function l(e){var i;const n={},t=[];return null==(i=e.expressionInfos)||i.map((e=>n[e.name]=e.expression)),{config:p(e.elements,n,t),encounteredUnsupportedTypes:t}}function o(e,t,l){const{description:o,domain:p,editable:a,fieldName:r,hint:s,input:u,label:d,requiredExpression:m,visibilityExpression:y}=e,f=t[m]||null,c=t[y]||null,g=new n({description:o,domain:p,editable:a,hint:s,label:d,name:r,requiredExpression:f,visibilityExpression:c});if(u)if("barcode-scanner"===u.type||"text-area"===u.type||"text-box"===u.type)g.editorType=u.type,g.minLength=u.minLength,g.maxLength=u.maxLength;else if("combo-box"===u.type||"radio-buttons"===u.type)g.editorType=u.type,g.noValueOptionLabel=u.noValueOptionLabel,g.showNoValueOption=u.showNoValueOption;else if("switch"===u.type)g.editorType=u.type,g.offValue=u.offValue,g.onValue=u.onValue;else if("datetime-picker"===u.type){g.editorType=u.type,g.includeTime=u.includeTime;const{max:e,min:n}=u;if(e||n){const t="range"===(null==p?void 0:p.type)?Math.min(null==e?void 0:e.getTime(),p.maxValue):null==e?void 0:e.getTime(),l="range"===(null==p?void 0:p.type)?Math.max(null==n?void 0:n.getTime(),p.minValue):null==n?void 0:n.getTime();g.domain=new i({maxValue:t,minValue:l,name:"__internal-range-domain-based-on-datetime-picker-input__"})}}else l.push({type:"unsupported-input-type",details:u});return g}function p(e,i,n,l=!0){return e.map((e=>{if("field"===e.type)return o(e,i,n);if("group"===e.type){if(!l)return n.push({type:"nested-group",details:e}),null;const o=i[e.visibilityExpression]||null;return new t({description:e.description,state:e.initialState,fieldConfig:p(e.elements,i,n,!1),label:e.label,visibilityExpression:o})}return n.push({type:"unsupported-element-type",details:e}),null})).filter((e=>!!e))}e.fieldConfigsFromFormTemplate=l,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
