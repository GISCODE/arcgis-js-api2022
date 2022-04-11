/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../config","../../core/Error","../Portal","../../rest/geometryService/project","../../rest/support/ProjectParameters"],(function(e,r,t,n,o,i,l){"use strict";function u(){return c.apply(this,arguments)}function c(){return(c=r._asyncToGenerator((function*(e=null,r){var i,l;if(t.geometryServiceUrl)return t.geometryServiceUrl;if(!e)throw new n("internal:geometry-service-url-not-configured");let u;u="portal"in e?e.portal||o.getDefault():e,yield u.load({signal:r});const c=null==(i=u.helperServices)||null==(l=i.geometry)?void 0:l.url;if(!c)throw new n("internal:geometry-service-url-not-configured");return c}))).apply(this,arguments)}function a(e,r){return s.apply(this,arguments)}function s(){return(s=r._asyncToGenerator((function*(e,r,t=null,o){const c=yield u(t,o),a=new l;a.geometries=[e],a.outSpatialReference=r;const s=yield i.project(c,a,{signal:o});if(s&&Array.isArray(s)&&1===s.length)return s[0];throw new n("internal:geometry-service-projection-failed")}))).apply(this,arguments)}e.getGeometryServiceURL=u,e.projectGeometry=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
