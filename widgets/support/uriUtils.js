/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../core/string"],(function(e,a){"use strict";const s=[{pattern:/^\s*(https?:\/\/([^\s]+))\s*$/i,target:"_blank",label:"{messages.view}"},{pattern:/^\s*(tel:([^\s]+))\s*$/i,label:"{hierPart}"},{pattern:/^\s*(mailto:([^\s]+))\s*$/i,label:"{hierPart}"},{pattern:/^\s*(arcgis-appstudio-player:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"App Studio Player"},{pattern:/^\s*(arcgis-collector:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Collector"},{pattern:/^\s*(arcgis-explorer:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Explorer"},{pattern:/^\s*(arcgis-navigator:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Navigator"},{pattern:/^\s*(arcgis-survey123:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Survey123"},{pattern:/^\s*(arcgis-trek2there:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Trek2There"},{pattern:/^\s*(arcgis-workforce:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Workforce"},{pattern:/^\s*(iform:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"iForm"},{pattern:/^\s*(flow:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"FlowFinity"},{pattern:/^\s*(lfmobile:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Laserfische"},{pattern:/^\s*(mspbi:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Microsoft Power Bi"}];function p(e){let a=null;return s.some((s=>(s.pattern.test(e)&&(a=s),!!a))),a}function t(e,s){if("string"!=typeof s||!s)return s;const t=p(s);if(!t)return s;const r=s.match(t.pattern),n=r&&r[2],l=a.replace(a.replace(t.label,{messages:e,hierPart:n}),{appName:t.appName}),i=t.target?` target="${t.target}"`:"",o="_blank"===t.target?' rel="noreferrer"':"";return s.replace(t.pattern,`<a${i} href="$1"${o}>${l}</a>`)}e.autoLink=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
