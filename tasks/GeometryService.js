/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass","../rest/geometryService/areasAndLengths","../rest/geometryService/autoComplete","../rest/geometryService/buffer","../rest/geometryService/convexHull","../rest/geometryService/cut","../rest/geometryService/densify","../rest/geometryService/difference","../rest/geometryService/distance","../rest/geometryService/fromGeoCoordinateString","../rest/geometryService/generalize","../rest/geometryService/intersect","../rest/geometryService/labelPoints","../rest/geometryService/lengths","../rest/geometryService/offset","../rest/geometryService/project","../rest/geometryService/relation","../rest/geometryService/reshape","../rest/geometryService/simplify","../rest/geometryService/toGeoCoordinateString","../rest/geometryService/trimExtend","../rest/geometryService/union","../rest/geometryService/units","./Task"],(function(e,r,t,_,I,N,i,T,n,s,o,u,U,E,c,S,A,R,l,a,f,O,C,L,m,g,h,y,M,D){"use strict";let p=function(r){function t(e){var t;return(t=r.call(this,e)||this).url=null,t}e._inheritsLoose(t,r);var _=t.prototype;return _.areasAndLengths=function(e,r){return T.areasAndLengths(this.url,e,r)},_.autoComplete=function(e,r,t){return n.autoComplete(this.url,e,r,t)},_.buffer=function(e,r){return s.buffer(this.url,e,r)},_.convexHull=function(e,r){return o.convexHull(this.url,e,r)},_.cut=function(e,r,t){return u.cut(this.url,e,r,t)},_.densify=function(e,r){return U.densify(this.url,e,r)},_.difference=function(e,r,t){return E.difference(this.url,e,r,t)},_.distance=function(e,r){return c.distance(this.url,e,r)},_.fromGeoCoordinateString=function(e,r){return S.fromGeoCoordinateString(this.url,e,r)},_.generalize=function(e,r){return A.generalize(this.url,e,r)},_.intersect=function(e,r,t){return R.intersect(this.url,e,r,t)},_.labelPoints=function(e,r){return l.labelPoints(this.url,e,r)},_.lengths=function(e,r){return a.lengths(this.url,e,r)},_.offset=function(e,r){return f.offset(this.url,e,r)},_.project=function(e,r){return O.project(this.url,e,r)},_.relation=function(e,r){return C.relation(this.url,e,r)},_.reshape=function(e,r,t){return L.reshape(this.url,e,r,t)},_.simplify=function(e,r){return m.simplify(this.url,e,r)},_.toGeoCoordinateString=function(e,r){return g.toGeoCoordinateString(this.url,e,r)},_.trimExtend=function(e,r){return h.trimExtend(this.url,e,r)},_.union=function(e,r){return y.union(this.url,e,r)},t}(D);p.UNIT_METER=9001,p.UNIT_GERMAN_METER=9031,p.UNIT_FOOT=9002,p.UNIT_SURVEY_FOOT=9003,p.UNIT_CLARKE_FOOT=9005,p.UNIT_FATHOM=9014,p.UNIT_NAUTICAL_MILE=9030,p.UNIT_SURVEY_CHAIN=9033,p.UNIT_SURVEY_LINK=9034,p.UNIT_SURVEY_MILE=9035,p.UNIT_KILOMETER=9036,p.UNIT_CLARKE_YARD=9037,p.UNIT_CLARKE_CHAIN=9038,p.UNIT_CLARKE_LINK=9039,p.UNIT_SEARS_YARD=9040,p.UNIT_SEARS_FOOT=9041,p.UNIT_SEARS_CHAIN=9042,p.UNIT_SEARS_LINK=9043,p.UNIT_BENOIT_1895A_YARD=9050,p.UNIT_BENOIT_1895A_FOOT=9051,p.UNIT_BENOIT_1895A_CHAIN=9052,p.UNIT_BENOIT_1895A_LINK=9053,p.UNIT_BENOIT_1895B_YARD=9060,p.UNIT_BENOIT_1895B_FOOT=9061,p.UNIT_BENOIT_1895B_CHAIN=9062,p.UNIT_BENOIT_1895B_LINK=9063,p.UNIT_INDIAN_FOOT=9080,p.UNIT_INDIAN_1937_FOOT=9081,p.UNIT_INDIAN_1962_FOOT=9082,p.UNIT_INDIAN_1975_FOOT=9083,p.UNIT_INDIAN_YARD=9084,p.UNIT_INDIAN_1937_YARD=9085,p.UNIT_INDIAN_1962_YARD=9086,p.UNIT_INDIAN_1975_YARD=9087,p.UNIT_FOOT_1865=9070,p.UNIT_RADIAN=9101,p.UNIT_DEGREE=9102,p.UNIT_ARCMINUTE=9103,p.UNIT_ARCSECOND=9104,p.UNIT_GRAD=9105,p.UNIT_GON=9106,p.UNIT_MICRORADIAN=9109,p.UNIT_ARCMINUTE_CENTESIMAL=9112,p.UNIT_ARCSECOND_CENTESIMAL=9113,p.UNIT_MIL6400=9114,p.UNIT_BRITISH_1936_FOOT=9095,p.UNIT_GOLDCOAST_FOOT=9094,p.UNIT_INTERNATIONAL_CHAIN=109003,p.UNIT_INTERNATIONAL_LINK=109004,p.UNIT_INTERNATIONAL_YARD=109001,p.UNIT_STATUTE_MILE=9093,p.UNIT_SURVEY_YARD=109002,p.UNIT_50KILOMETER_LENGTH=109030,p.UNIT_150KILOMETER_LENGTH=109031,p.UNIT_DECIMETER=109005,p.UNIT_CENTIMETER=109006,p.UNIT_MILLIMETER=109007,p.UNIT_INTERNATIONAL_INCH=109008,p.UNIT_US_SURVEY_INCH=109009,p.UNIT_INTERNATIONAL_ROD=109010,p.UNIT_US_SURVEY_ROD=109011,p.UNIT_US_NAUTICAL_MILE=109012,p.UNIT_UK_NAUTICAL_MILE=109013,p.UNIT_SQUARE_INCHES="esriSquareInches",p.UNIT_SQUARE_FEET="esriSquareFeet",p.UNIT_SQUARE_YARDS="esriSquareYards",p.UNIT_ACRES="esriAcres",p.UNIT_SQUARE_MILES="esriSquareMiles",p.UNIT_SQUARE_MILLIMETERS="esriSquareMillimeters",p.UNIT_SQUARE_CENTIMETERS="esriSquareCentimeters",p.UNIT_SQUARE_DECIMETERS="esriSquareDecimeters",p.UNIT_SQUARE_METERS="esriSquareMeters",p.UNIT_ARES="esriAres",p.UNIT_HECTARES="esriHectares",p.UNIT_SQUARE_KILOMETERS="esriSquareKilometers",r.__decorate([t.property()],p.prototype,"url",void 0),p=r.__decorate([i.subclass("esri.tasks.GeometryService")],p);return p}));
