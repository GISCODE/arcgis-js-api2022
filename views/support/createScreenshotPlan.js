/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define((function(){"use strict";function t(t,h,i,e,n,d,l,o){let u;t.ignorePadding&&(e={left:0,right:0,top:0,bottom:0}),null!=t.width&&null!=t.height?u=[t.width,t.height]:null==t.width&&null!=t.height?u=[t.height,t.height]:null!=t.width&&null==t.height?u=[t.width,t.width]:null==t.width&&null==t.height&&(u=null);const r=i[0]-(e.left+e.right),g=i[1]-(e.top+e.bottom);let w,a,c=t.area||{x:0,y:0,width:r,height:g};if(u){const t=r/g,h=u[0]/u[1];if(h>t){const t=c.width/h;c={x:c.x,y:Math.round(c.y+(c.height-t)/2),width:c.width,height:Math.round(t)}}else{const t=c.height*h;c={x:Math.round(c.x+(c.width-t)/2),y:c.y,width:Math.round(t),height:c.height}}}else u=[c.width,c.height];u[0]>c.width?(w=Math.min(u[0]/c.width,h),a=u[0]/c.width/w):(w=1,a=u[0]/c.width);return{resolutionScale:w,cropArea:{x:Math.round((c.x+e.left)*w),y:Math.round((c.y+e.top)*w),width:Math.round(c.width*w),height:Math.round(c.height*w)},outputScale:a,format:n,quality:d,children:l,rotation:o}}return t}));