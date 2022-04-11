/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../geometry","../Polygon","../Polyline","../Point","../Multipoint"],(function(n,e,t,i,r){"use strict";function s(n){let e=0,t=0;const i=n.length;let r,s=n[t];for(t=0;t<i-1;t++)r=n[t+1],e+=(r[0]-s[0])*(r[1]+s[1]),s=r;return e>=0}function o(n,e,t,i){const r=[];for(const s of n){const n=s.slice(0);r.push(n);const o=e*(s[0]-i.x)-t*(s[1]-i.y)+i.x,l=t*(s[0]-i.x)+e*(s[1]-i.y)+i.y;n[0]=o,n[1]=l}return r}function l(n,l,c){const a=n.spatialReference,u=l*Math.PI/180,x=Math.cos(u),f=Math.sin(u);var y,p;"xmin"in n&&(c=null!=(y=c)?y:n.center,n=new e({spatialReference:a,rings:[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]}));if("paths"in n){var m;c=null!=(m=c)?m:n.extent.center;const e=[];for(const t of n.paths)e.push(o(t,x,f,c));return new t({spatialReference:a,paths:e})}if("rings"in n){var h;c=null!=(h=c)?h:n.extent.center;const t=[];for(const e of n.rings){const n=s(e),i=o(e,x,f,c);s(i)!==n&&i.reverse(),t.push(i)}return new e({spatialReference:a,rings:t})}if("x"in n){var g;c=null!=(g=c)?g:n;const e=new i({x:x*(n.x-c.x)-f*(n.y-c.y)+c.x,y:f*(n.x-c.x)+x*(n.y-c.y)+c.y,spatialReference:a});return null!=n.z&&(e.z=n.z),null!=n.m&&(e.m=n.m),e}return"points"in n?(c=null!=(p=c)?p:n.extent.center,new r({points:o(n.points,x,f,c),spatialReference:a})):null}return l}));