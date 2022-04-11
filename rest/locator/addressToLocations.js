/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","./utils","../support/AddressCandidate","../support/AddressToLocationsParameters"],(function(e,t,n,s,r,a,o){"use strict";function i(e,t,n){return d.apply(this,arguments)}function d(){return(d=t._asyncToGenerator((function*(e,t,r){t=o.from(t);const a=s.parseUrl(e),{address:i,...d}=t.toJSON(),l={...i,...d,f:"json"},c=s.encode({...a.query,...l}),p=s.asValidOptions(c,r),f=`${a.path}/findAddressCandidates`;return n(f,p).then(u)}))).apply(this,arguments)}function u({data:e}){if(!e)return[];const{candidates:t,spatialReference:n}=e;return t?t.map((e=>{if(!e)return;const{extent:t,location:s}=e,o=!t||r.isValidExtent(t);return r.isValidLocation(s)&&o?(t&&(t.spatialReference=n),s.spatialReference=n,a.fromJSON(e)):void 0})):[]}e.addressToLocations=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
