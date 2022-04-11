/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function n(e){var n;return null!=(n=s(e))?n:t(e)}function t(e){const n=new Date(e).getTime();return Number.isNaN(n)?null:n}function s(e){var n,t,s,r;const o=u.exec(e);if(!o)return null;const l=o.groups,i=+l.year,f=+l.month-1,a=+l.day,d=+(null!=(n=l.hours)?n:"0"),c=+(null!=(t=l.minutes)?t:"0"),m=+(null!=(s=l.seconds)?s:"0");if(d>23)return null;if(c>59)return null;if(m>59)return null;const g=null!=(r=l.ms)?r:"0",T=g?+g.padEnd(3,"0").substring(0,3):0;let p;if(l.isUTC)p=Date.UTC(i,f,a,d,c,m,T);else if(l.offsetSign){const e=+l.offsetHours,n=+l.offsetMinutes;p=6e4*("+"===l.offsetSign?-1:1)*(60*e+n)+Date.UTC(i,f,a,d,c,m,T)}else p=new Date(i,f,a,d,c,m,T).getTime();return Number.isNaN(p)?null:p}const u=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;e.parseDate=n,e.parseJSDate=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));