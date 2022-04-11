/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/JSONSupport","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass","../layers/support/FacilityLayerInfo","../layers/support/LevelLayerInfo","../layers/support/SiteLayerInfo"],(function(e,r,o,t,s,p,a,c,l,i,y){"use strict";let u=function(r){function o(e){var o;return(o=r.call(this,e)||this).levelLayer=null,o.facilityLayer=null,o.siteLayer=null,o}return e._inheritsLoose(o,r),o}(o.JSONSupport);r.__decorate([t.property({type:i,json:{write:!0}})],u.prototype,"levelLayer",void 0),r.__decorate([t.property({type:l,json:{write:!0}})],u.prototype,"facilityLayer",void 0),r.__decorate([t.property({type:y,json:{write:!0}})],u.prototype,"siteLayer",void 0),u=r.__decorate([c.subclass("esri.support.MapFloorInfo")],u);return u}));
