// COPYRIGHT © 2021 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/lang"],(function(e){return{calculate:function(e,r){if(e&&e.pixels&&e.pixels.length){var n=r&&r.bandIndexes,t=r&&r.method,l=n.trim().split(" ").map((function(e){return parseInt(e,10)})).filter((function(e){return null!=e})),a=this._clonePixelBlock(e),o=a.pixels,c=a.mask;switch(t){case 1:o=this._calculateNDVI(c,o[l[0]-1],o[l[1]-1]);break;case 2:o=this._calculateSAVI(c,o[l[0]-1],o[l[1]-1],l[2]);break;case 3:o=this._calculateTSAVI(c,o[l[0]-1],o[l[1]-1],l[2],l[3],l[4]);break;case 4:o=this._calculateMSAVI(c,o[l[0]-1],o[l[1]-1]);break;case 5:o=this._calculateGEMI(c,o[l[0]-1],o[l[1]-1]);break;case 6:o=this._calculatePVI(c,o[l[0]-1],o[l[1]-1],l[2],l[3]);break;case 7:o=this._calculateGVITM(c,o[l[0]-1],o[l[1]-1],o[l[2]-1],o[l[3]-1],o[l[4]-1],o[l[5]-1]);break;case 8:o=this._calculateSultan(c,o[l[0]-1],o[l[1]-1],o[l[2]-1],o[l[3]-1],o[l[4]-1],o[l[5]-1]);break;case 9:o=this._calculateVARI(c,o[l[0]-1],o[l[1]-1],o[l[2]-1]);break;case 0:o=this._calculateUserDefined(c,o,n)}return a.pixels=o,a.pixelType="F32",a.calculateStatistics(),a}},_clonePixelBlock:function(r){return r.clone?r.clone():e.clone(r)},_parseUserDefined:function(e,r){0===(e=e.replace(" ","")).indexOf("-")&&(e="0"+e),0===e.indexOf("+")&&(e=e.slice(1,e.length));var n,t,l=e.split(""),a=[],o=[],c=["+","-","*","/","(",")"],i="";for(n=0;n<l.length;n++)if(t=l[n],c.some((function(e){return e===t})))""!==i&&o.push(parseFloat(i)),a.push(t),i="";else{if("b"===t.toLowerCase()){n++,i=t.concat(l[n]),o.push(r[parseInt(i[1],10)-1]),i="";continue}i=i.concat(t),n===l.length-1&&o.push(parseFloat(i))}return{ops:a,nums:o}},_op:function(e,r,n,t){if(n.constructor===Number&&t.constructor===Number)return n+t;var l,a,o;if(n.constructor===Number)for(l=t.length,a=n,n=new Float32Array(l),o=0;o<l;o++)n[o]=a;else if(l=n.length,t.constructor===Number)for(a=t,t=new Float32Array(l),o=0;o<l;o++)t[o]=a;var c=new Float32Array(l);if(null==e){if("+"===r)for(o=0;o<l;o++)c[o]=n[o]+t[o];else if("-"===r)for(o=0;o<l;o++)c[o]=n[o]-t[o];else if("*"===r)for(o=0;o<l;o++)c[o]=n[o]*t[o];else if("/"===r)for(o=0;o<l;o++)c[o]=n[o]/t[o]}else if("+"===r)for(o=0;o<l;o++)e[o]&&(c[o]=n[o]+t[o]);else if("-"===r)for(o=0;o<l;o++)e[o]&&(c[o]=n[o]-t[o]);else if("*"===r)for(o=0;o<l;o++)e[o]&&(c[o]=n[o]*t[o]);else if("/"===r)for(o=0;o<l;o++)e[o]&&(c[o]=n[o]/t[o]);return c},_shrinkOp:function(e,r){e.splice(r,1);var n=0,t=0,l=0;do{for(t=0,l=0,n=0;n<e.length;n++)if("("===e[n])t=n;else if(")"===e[n]){l=n;break}l===t+1&&e.splice(t,2)}while(l===t+1);return e},_getPriorityOpIndex:function(e,r){if(1===e.length)return{opIndex:0,numIndex:0};var n,t=0,l=0,a=0,o=-1,c=0;for(t=0;t<e.length;t++)if("("===e[t])l=t;else if(")"===e[t]){a=t;break}for(n=0===a?e:e.slice(l+1,a),t=0;t<n.length;t++)if("*"===n[t]||"/"===n[t]){o=t;break}if(o>-1)a>0&&(o+=l+1);else{for(t=0;t<n.length;t++)if("+"===n[t]||"-"===n[t]){o=t;break}a>0&&(o+=l+1)}for(t=0;t<o;t++)"("===e[t]&&c++;return{opIndex:o,numIndex:o-c}},_calculateUserDefined:function(e,r,n){for(var t,l,a,o,c=this._parseUserDefined(n,r),i=c.ops,f=c.nums;i.length>0&&(t=i[(c=this._getPriorityOpIndex(i,f)).opIndex],a=f[c.numIndex],o=f[c.numIndex+1],l=this._op(e,t,a,o),1!==i.length);)i=this._shrinkOp(i,c.opIndex),f.splice(c.numIndex,2,l);return[l]},_calculateNDVI:function(e,r,n){var t,l,a,o=n.length,c=new Float32Array(o);if(null==e)for(t=0;t<o;t++)l=n[t],a=r[t],c[t]=(a-l)/(a+l);else for(t=0;t<o;t++)e[t]&&(l=n[t],a=r[t],c[t]=(a-l)/(a+l));return[c]},_calculateSAVI:function(e,r,n,t){var l,a,o,c=n.length,i=new Float32Array(c);if(null==e)for(l=0;l<c;l++)a=n[l],o=r[l],i[l]=(o-a)/(o+a+t)*(1+t);else for(l=0;l<c;l++)e[l]&&(a=n[l],o=r[l],i[l]=(o-a)/(o+a+t)*(1+t));return[i]},_calculateTSAVI:function(e,r,n,t,l,a){var o,c,i,f=n.length,u=new Float32Array(f),s=-l*t+a*(1+t*t);if(null==e)for(o=0;o<f;o++)c=n[o],i=r[o],u[o]=t*(i-t*c-l)/(l*i+c+s);else for(o=0;o<f;o++)e[o]&&(c=n[o],i=r[o],u[o]=t*(i-t*c-l)/(l*i+c+s));return[u]},_calculateMSAVI:function(e,r,n){var t,l,a,o=n.length,c=new Float32Array(o);if(null==e)for(t=0;t<o;t++)l=n[t],a=r[t],c[t]=.5*(2*(a+1)-Math.sqrt(Math.pow(2*a+1,2)-8*(a-l)));else for(t=0;t<o;t++)e[t]&&(c[t]=.5*(2*(a+1)-Math.sqrt(Math.pow(2*a+1,2)-8*(a-l))));return[c]},_calculateGEMI:function(e,r,n){var t,l,a,o,c=n.length,i=new Float32Array(c);if(null==e)for(t=0;t<c;t++)l=n[t],o=(2*((a=r[t])*a-l*l)+1.5*a+.5*l)/(a+l+.5),i[t]=o*(1-.25*o)-(l-.125)/(1-l);else for(t=0;t<c;t++)e[t]&&(l=n[t],o=(2*((a=r[t])*a-l*l)+1.5*a+.5*l)/(a+l+.5),i[t]=o*(1-.25*o)-(l-.125)/(1-l));return[i]},_calculatePVI:function(e,r,n,t,l){var a,o,c,i=n.length,f=new Float32Array(i),u=Math.sqrt(1+t*t);if(null==e)for(a=0;a<i;a++)o=n[a],c=r[a],f[a]=(c-t*o-l)/u;else for(a=0;a<i;a++)e[a]&&(o=n[a],c=r[a],f[a]=(c-t*o-l)/u);return[f]},_calculateGVITM:function(e,r,n,t,l,a,o){var c,i=r.length,f=new Float32Array(i);if(null==e)for(c=0;c<i;c++)f[c]=-.2848*r[c]-.2435*n[c]-.5436*t[c]+.7243*l[c]+.084*a[c]-1.18*o[c];else for(c=0;c<i;c++)e[c]&&(f[c]=-.2848*r[c]-.2435*n[c]-.5436*t[c]+.7243*l[c]+.084*a[c]-1.18*o[c]);return[f]},_calculateSultan:function(e,r,n,t,l,a,o){var c,i=r.length,f=new Float32Array(i),u=new Float32Array(i),s=new Float32Array(i);if(null==e)for(c=0;c<i;c++)f[c]=a[c]/o[c]*100,u[c]=a[c]/r[c]*100,s[c]=t[c]/l[c]*(a[c]/l[c])*100;else for(c=0;c<i;c++)e[c]&&(f[c]=a[c]/o[c]*100,u[c]=a[c]/r[c]*100,s[c]=t[c]/l[c]*(a[c]/l[c])*100);return[f,u,s]},_calculateVARI:function(e,r,n,t){var l,a,o,c,i=r.length,f=new Float32Array(i);if(null==e)for(l=0;l<i;l++)a=r[l],o=n[l],c=t[l],f[l]=(o-a)/(o+a-c);else for(l=0;l<i;l++)if(e[l])for(l=0;l<i;l++)a=r[l],o=n[l],c=t[l],f[l]=(o-a)/(o+a-c);return[f]}}}));