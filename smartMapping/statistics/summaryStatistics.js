/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../core/Error","../../core/maybe","../../layers/support/fieldUtils","./support/utils","../support/utils","../support/adapters/support/layerUtils"],(function(e,i,s,r,t,a,n){"use strict";const l=[...r.numericTypes,"date","string"];function o(e){return p.apply(this,arguments)}function p(){return(p=e._asyncToGenerator((function*(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new i("summary-statistics:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new i("summary-statistics:missing-parameters","View is required when 'valueExpression' is specified");const{layer:o,...p}=e,u=n.createLayerAdapter(o,n.defaultSupportedLayerTypes),d={layerAdapter:u,...p};if(d.normalizationType=a.getNormalizationType(d),!u)throw new i("summary-statistics:invalid-parameters","'layer' must be one of these types: "+n.getLayerTypeLabels(n.defaultSupportedLayerTypes).join(", "));const y=s.isSome(d.signal)?{signal:d.signal}:null;yield u.load(y);const m=d.field,c=d.normalizationType,f=d.valueExpression||d.sqlExpression,w=m?u.getField(m):null,v=yield a.getFieldsList({field:d.field,normalizationField:d.normalizationField,valueExpression:d.valueExpression}),h=t.verifyBasicFieldValidity(u,v,"summary-statistics:invalid-parameters");if(h)throw h;if(w){const e=t.verifyFieldType(u,w,"summary-statistics:invalid-parameters",l);if(e)throw e;if(r.isDateField(w)&&c)throw new i("summary-statistics:invalid-parameters","Normalization is not allowed for date fields")}else if(f&&c)throw new i("summary-statistics:invalid-parameters","Normalization is not allowed when 'valueExpression' or 'sqlExpression' is specified");return d}))).apply(this,arguments)}function u(e){return d.apply(this,arguments)}function d(){return(d=e._asyncToGenerator((function*(e){const{layerAdapter:i,...s}=yield o(e);return i.summaryStatistics(s)}))).apply(this,arguments)}return u}));