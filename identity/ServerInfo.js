/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/JSONSupport","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,n,i,p,s){"use strict";let l=function(r){function o(e){var o;return(o=r.call(this,e)||this).adminTokenServiceUrl=null,o.currentVersion=null,o.hasPortal=null,o.hasServer=null,o.owningSystemUrl=null,o.owningTenant=null,o.server=null,o.shortLivedTokenValidity=null,o.tokenServiceUrl=null,o.webTierAuth=null,o}return e._inheritsLoose(o,r),o}(o.JSONSupport);r.__decorate([t.property({json:{write:!0}})],l.prototype,"adminTokenServiceUrl",void 0),r.__decorate([t.property({json:{write:!0}})],l.prototype,"currentVersion",void 0),r.__decorate([t.property({json:{write:!0}})],l.prototype,"hasPortal",void 0),r.__decorate([t.property({json:{write:!0}})],l.prototype,"hasServer",void 0),r.__decorate([t.property({json:{write:!0}})],l.prototype,"owningSystemUrl",void 0),r.__decorate([t.property({json:{write:!0}})],l.prototype,"owningTenant",void 0),r.__decorate([t.property({json:{write:!0}})],l.prototype,"server",void 0),r.__decorate([t.property({json:{write:!0}})],l.prototype,"shortLivedTokenValidity",void 0),r.__decorate([t.property({json:{write:!0}})],l.prototype,"tokenServiceUrl",void 0),r.__decorate([t.property({json:{write:!0}})],l.prototype,"webTierAuth",void 0),l=r.__decorate([s.subclass("esri.identity.ServerInfo")],l);return l}));
