/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(t,e,r,o,i,n,s,p){"use strict";let c=function(e){function r(t){var r;return(r=e.call(this,t)||this).conditionBarriers=[],r.outputConditions=[],r.functions=[],r.functionBarriers=[],r.traversabilityScope=null,r.shortestPathNetworkAttributeName=null,r.includeBarriers=null,r.validateConsistency=null,r.ignoreBarriersAtStartingPoints=null,r}return t._inheritsLoose(r,e),r}(r.JSONSupport);e.__decorate([o.property({type:[Object],json:{write:!0}})],c.prototype,"conditionBarriers",void 0),e.__decorate([o.property({type:[Object],json:{write:!0}})],c.prototype,"outputConditions",void 0),e.__decorate([o.property({type:[Object],json:{write:!0}})],c.prototype,"functions",void 0),e.__decorate([o.property({type:[Object],json:{write:!0}})],c.prototype,"functionBarriers",void 0),e.__decorate([o.property({type:["junctions","edges","junctionsAndEdges"],json:{write:!0}})],c.prototype,"traversabilityScope",void 0),e.__decorate([o.property({type:String,json:{write:!0}})],c.prototype,"shortestPathNetworkAttributeName",void 0),e.__decorate([o.property({type:Boolean,json:{write:!0}})],c.prototype,"includeBarriers",void 0),e.__decorate([o.property({type:Boolean,json:{write:!0}})],c.prototype,"validateConsistency",void 0),e.__decorate([o.property({type:Boolean,json:{write:!0}})],c.prototype,"ignoreBarriersAtStartingPoints",void 0),c=e.__decorate([p.subclass("esri.networks.support.TraceConfiguration")],c);return c}));
