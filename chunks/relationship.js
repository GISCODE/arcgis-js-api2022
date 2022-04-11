/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../Color","../core/lang","../smartMapping/symbology/support/colors","../smartMapping/symbology/support/symbologyUtils","../smartMapping/symbology/support/utils"],(function(e,o,r,a,l,n){"use strict";const t={light:{color:[153,153,153,.25],width:"1px"},dark:{color:[153,153,153,.25],width:"1px"},darker:{color:[26,26,26,.25],width:"1px"}},s={lightBasemaps:{primary:"relationship-blue-orange-brown",secondary:["relationship-brewer-yellow-blue-black","relationship-brewer-pink-blue-purple","relationship-purple-green-blue","relationship-blue-green-purple","relationship-blue-orange-green","relationship-mustard-blue-wine","relationship-pink-blue-purple","relationship-olive-blue-green","relationship-yellow-cyan-blue","relationship-blue-pink-purple","relationship-purple-green-wine","relationship-blue-peach-purple","relationship-mint-mustard-green","relationship-purple-mustard-darkpurple","relationship-blue-orange-purple","relationship-pink-periwinkle-violet","relationship-blue-tan-green","relationship-blue-red-pink","relationship-blue-green-brightgreen","relationship-blue-orange-lavender","relationship-pink-purple-peach","relationship-purple-mustard-eggshell","relationship-blue-brick-green","relationship-orange-purple-lavender","relationship-brown-purple-lilac","relationship-teal-yellow-lightteal"]},darkBasemaps:{primary:"relationship-blue-green-brightgreen",secondary:["relationship-blue-red-pink","relationship-blue-orange-lavender","relationship-pink-purple-peach","relationship-purple-mustard-eggshell","relationship-blue-brick-green","relationship-orange-purple-lavender","relationship-brown-purple-lilac","relationship-teal-yellow-lightteal","relationship-blue-orange-brown","relationship-brewer-yellow-blue-black","relationship-brewer-pink-blue-purple","relationship-purple-green-blue","relationship-blue-green-purple","relationship-blue-orange-green","relationship-mustard-blue-wine","relationship-pink-blue-purple","relationship-olive-blue-green","relationship-yellow-cyan-blue","relationship-blue-pink-purple","relationship-purple-green-wine","relationship-blue-peach-purple","relationship-mint-mustard-green","relationship-purple-mustard-darkpurple","relationship-blue-orange-purple","relationship-pink-periwinkle-violet","relationship-blue-tan-green"]}},i="#aaaaaa",p="8px",c="2px",u={default:{name:"default",label:"Default",description:"Default theme for visualizing features based on relationship between two attributes.",schemes:{point:{light:{common:{noDataColor:i,outline:t.light,size:p},primary:s.lightBasemaps.primary,secondary:s.lightBasemaps.secondary},dark:{common:{noDataColor:i,outline:t.darker,size:p},primary:s.darkBasemaps.primary,secondary:s.darkBasemaps.secondary}},polyline:{light:{common:{noDataColor:i,width:c},primary:s.lightBasemaps.primary,secondary:s.lightBasemaps.secondary},dark:{common:{noDataColor:i,width:c},primary:s.darkBasemaps.primary,secondary:s.darkBasemaps.secondary}},polygon:{light:{common:{noDataColor:i,outline:t.light,fillOpacity:.8},primary:s.lightBasemaps.primary,secondary:s.lightBasemaps.secondary},dark:{common:{noDataColor:i,outline:t.dark,fillOpacity:.8},primary:s.darkBasemaps.primary,secondary:s.darkBasemaps.secondary}}}}},m=l.createThemes({themeDictionary:u});function h(e){return l.getThemesforBasemap(m,e)}function g(e){const o="default",r=l.getRawSchemes({basemap:e.basemap,geometryType:e.geometryType,basemapTheme:e.basemapTheme,theme:m.get(o)});if(!r)return;const{schemesInfo:a,basemapId:n,basemapTheme:t}=r,s={...e,basemap:n};return{primaryScheme:T(s,a.primary,a.common),secondarySchemes:a.secondary.map((e=>T(s,e,a.common))).filter(Boolean),basemapId:n,basemapTheme:t}}function d(e){return l.filterSchemesByName(e.name,g(e))}function y(e){return l.filterSchemesByTag(e.includedTags,e.excludedTags,g(e))}function b(e){if(!e)return;const r={...e};return r.colorsForClassBreaks=r.colorsForClassBreaks.map((e=>({numClasses:e.numClasses,colors:e.colors.map((e=>e.map((e=>new o(e)))))}))),r.tags=[...r.tags],r.noDataColor&&(r.noDataColor=new o(r.noDataColor)),"outline"in r&&r.outline&&(r.outline={color:r.outline.color&&new o(r.outline.color),width:r.outline.width}),r}function f(e,o){e=r.clone(e);let a=[];const l=(o||"HH").split(""),n=l[0],t=l[1];"L"===n&&e.reverse();const s="H"===t;return e.forEach((e=>{s&&e.reverse(),a=a.concat(e)})),a}function C(e,r,a){let l;return e.colorsForClassBreaks.some((e=>(e.numClasses===r&&(l=e.colors),!!l))),l=l.map((e=>e.map((e=>new o(e))))),l?f(l,a):null}function w(e,o){const r=o?e:b(e);return r.colorsForClassBreaks.forEach((e=>{const o=e.colors.reverse(),r=[];for(let a=0;a<e.numClasses;a++){const e=[];o.forEach((o=>{e.push(o[a])})),r.push(e)}e.colors=r})),r}function k(e){const o=e.theme||"default",r=e.geometryType,a=e.colors,l=e.numClasses,n=m.get(o);if(!n)return;const t=n.supportedBasemaps,s=[];return t.forEach((e=>{const n=g({theme:o,basemap:e,geometryType:r});if(n){let e=S(n.primaryScheme,a,l);e&&s.push(e),n.secondarySchemes.forEach((o=>{e=S(o,a,l),e&&s.push(e)}))}})),s}function B(e,o,r,a){let l;const t=C(e,r,a);if(t){1===n.hasIdenticalColors(o,t)&&(l=e)}return l}function D(e,o,r,a){let l,n=1;do{l=B(e,o,r,a),l||(e=w(e),n++)}while(!l&&n<=4);return l}function S(e,o,r){return D(e,o,r,"HH")||D(e,o,r,"HL")||D(e,o,r,"LH")||D(e,o,r,"LL")}function T(e,o,r){const l="mesh"!==e.geometryType&&e.worldScale?e.view:null,n=a[o],t=e.theme||"default";if(!n)return;const s=t+"/"+e.basemap+"/"+o,i=[];for(const a in n)if("stops"!==a&&"name"!==a&&"tags"!==a){const e=+a,o=n[a];i.push({numClasses:e,colors:o})}switch(e.geometryType){case"point":case"multipoint":{const e=r;return F({id:s,name:n.name,tags:n.tags,colorsForClassBreaks:i,noDataColor:e.noDataColor,opacity:1,outline:e.outline,size:e.size},l)}case"polyline":{const e=r;return v({id:s,name:n.name,tags:n.tags,colorsForClassBreaks:i,noDataColor:e.noDataColor,opacity:1,width:e.width},l)}case"polygon":{const e=r;return z({id:s,name:n.name,tags:n.tags,colorsForClassBreaks:i,noDataColor:e.noDataColor,opacity:e.fillOpacity,outline:e.outline})}case"mesh":{const e=r;return x({id:s,name:n.name,tags:n.tags,colorsForClassBreaks:i,noDataColor:e.noDataColor,opacity:e.fillOpacity})}}}function F(e,r){return{id:e.id,name:e.name,tags:[...e.tags],colorsForClassBreaks:H(e.colorsForClassBreaks),noDataColor:new o(e.noDataColor),outline:{color:new o(e.outline.color),width:e.outline.width},size:r?n.toWorldScale(e.size,r):e.size,opacity:e.opacity}}function v(e,r){return{id:e.id,name:e.name,tags:[...e.tags],colorsForClassBreaks:H(e.colorsForClassBreaks),noDataColor:new o(e.noDataColor),opacity:e.opacity,width:r?n.toWorldScale(e.width,r):e.width}}function z(e){return{id:e.id,name:e.name,tags:[...e.tags],colorsForClassBreaks:H(e.colorsForClassBreaks),noDataColor:new o(e.noDataColor),outline:{color:new o(e.outline.color),width:e.outline.width},opacity:e.opacity}}function x(e){return{id:e.id,name:e.name,tags:[...e.tags],colorsForClassBreaks:H(e.colorsForClassBreaks),noDataColor:new o(e.noDataColor),opacity:e.opacity}}function H(e){return e.map((e=>({numClasses:e.numClasses,colors:e.colors.map((e=>e.map((e=>new o(e)))))})))}const M=Object.freeze(Object.defineProperty({__proto__:null,getThemes:h,getSchemes:g,getSchemeByName:d,getSchemesByTag:y,cloneScheme:b,flatten2DArray:f,getColors:C,flipColors:w,getMatchingSchemes:k},Symbol.toStringTag,{value:"Module"}));e.cloneScheme=b,e.flatten2DArray=f,e.flipColors=w,e.getColors=C,e.getMatchingSchemes=k,e.getSchemeByName=d,e.getSchemes=g,e.getSchemesByTag=y,e.getThemes=h,e.relationshipSymbology=M}));
