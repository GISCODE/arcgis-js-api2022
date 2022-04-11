/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../support/arcadeOnDemand"],(function(e,t){"use strict";function n(e,t=!0,n=!0){return isFinite(e)&&(t||0!==e)&&(n||e>=0)}function i(e){return s.apply(this,arguments)}function s(){return(s=e._asyncToGenerator((function*(e){const{features:i,attributes:s,includeZeros:l,includeNegatives:o,view:c}=e;let r=0,a=0,u=1/0,f=-1/0,p=null;const d=new Map;for(let n=0;n<s.length;n++){const{valueExpression:e}=s[n];if(e){if(!p){const{arcadeUtils:e}=yield t.loadArcade();p=e}d.set(n,p.createFunction(e))}}const g=c&&p&&p.getViewInfo({viewingMode:"2d"===c.type?"map":c.viewingMode,scale:c.scale,spatialReference:c.spatialReference});for(const t of i){const e=t.geometry,i=t.attributes;if(e){const c=e.extent;if(c){const e=c.width*c.height;if(e>0){let c=0;const y=p&&p.createExecContext(t,g);for(let e=0;e<s.length;e++){const{field:t,valueExpression:r}=s[e];let a=null;if(t)a=i[t];else if(r){const t=d.get(e);a=p.executeFunction(t,y)}n(a,l,o)&&(c+=a||0)}if(n(c,l,o)){const t=c/e;++r,a+=t,t<u&&(u=t),t>f&&(f=t)}}}}}return{minDensity:u!==1/0?u:null,maxDensity:f!==-1/0?f:null,avgDensity:r?a/r:null}}))).apply(this,arguments)}return i}));
