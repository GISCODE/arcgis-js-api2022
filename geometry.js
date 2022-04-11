/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./core/accessorSupport/ensureType","./geometry/Extent","./geometry/Geometry","./geometry/Multipoint","./geometry/Point","./geometry/Polygon","./geometry/Polyline","./geometry/SpatialReference","./geometry/support/typeUtils","./geometry/support/jsonUtils"],(function(e,t,o,r,y,n,i,p,a,s,l){"use strict";function m(e){return e instanceof r}const u={base:r,key:"type",typeMap:{extent:o,multipoint:y,point:n,polyline:p,polygon:i}},c=t.ensureOneOfType(u);e.Extent=o,e.BaseGeometry=r,e.Multipoint=y,e.Point=n,e.Polygon=i,e.Polyline=p,e.SpatialReference=a,e.featureGeometryTypeKebabDictionary=s.featureGeometryTypeKebabDictionary,e.isFeatureGeometryType=s.isFeatureGeometryType,e.typeKebabDictionary=s.typeKebabDictionary,e.fromJSON=l.fromJSON,e.ensureType=c,e.geometryTypes=u,e.isGeometry=m,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
