"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2398],{73506:(e,t,n)=>{n.d(t,{Hq:()=>N,Mk:()=>u,P_:()=>Z,Qp:()=>O,VO:()=>g,kZ:()=>j,kr:()=>I,nF:()=>C,tB:()=>_,ut:()=>T,zD:()=>d}),n(66577);var r=n(20102),o=n(70586),i=n(67900),s=n(83305),a=n(44547),l=n(6570),f=n(13473),c=n(82971);function u(e,t,n){return!(0,a.Up)(e,t,n)}function p(e,t,n){const o=u(e,t,n);if(o&&!(0,a.kR)())throw new r.Z("rasterprojectionhelper-project","projection engine is not loaded");return o}const x=function(e,t,n,r=0){if(1===n[0])return[0,0];let o=1,i=-1,s=1,a=-1;for(let t=0;t<e.length;t+=2)isNaN(e[t])||(o=o>e[t]?e[t]:o,i=i>e[t]?i:e[t],s=s>e[t+1]?e[t+1]:s,a=a>e[t+1]?a:e[t+1]);const{cols:l,rows:f}=t,c=(i-o)/l/n[0],u=(a-s)/f/n[1],p=2*r;let x=0,h=!1,m=[0,0];for(let t=0;t<l-3;t++){for(let n=0;n<f-3;n++){const r=t*f*2+2*n,o=(e[r]+e[r+4]+e[r+4*f]+e[r+4*f+4])/4,i=(e[r+1]+e[r+5]+e[r+4*f+1]+e[r+4*f+5])/4,s=Math.abs((o-e[r+2*f+2])/c),a=Math.abs((i-e[r+2*f+3])/u);if(s+a>x&&(x=s+a,m=[s,a]),p&&x>p){h=!0;break}}if(h)break}return m},h={3395:20037508.342789244,3410:17334193.943686873,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53034:20015086.79602057,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54034:20037508.342789244,54079:20037508.342789244,54080:20037508.342789244,54100:20037508.342789244,54101:20037508.342789244},m=new Map,y=new Map;async function d(){if((0,a.kR)())return null;await(0,a.zD)()}function g(e,t,n,r=null){const s=e.spatialReference;if(s.equals(t))return e;p(s,t,r);const f=n.center,c=new l.Z({xmin:f.x-e.x/2,xmax:f.x+e.x/2,ymin:f.y-e.y/2,ymax:f.y+e.y/2,spatialReference:s}),u=(0,a.iV)(c,t,r);if((0,o.Wi)(u))return null;const x={x:u.xmax-u.xmin,y:u.ymax-u.ymin},h=T(t);if((0,o.pC)(h)&&x.x>=h){const n=(0,i.c9)(s)/(0,i.c9)(t);x.x=e.x*n,x.y=e.y*n}return x}function w(e,t=.01){return(0,i.c9)(e)?t/(0,i.c9)(e):0}function C(e,t,n=null,r=!0){const i=e.spatialReference;if(i.equals(t))return e;p(i,t,n);const s=(0,a.iV)(e,t,n);if(!r||!s)return s;const l=G(i,!0),f=G(t,!0),c=w(i);return c&&(0,o.pC)(l)&&(0,o.pC)(f)&&(s.x>0&&Math.abs(e.x-l[0])<c?s.x-=f[1]-f[0]:s.x<0&&Math.abs(e.x-l[1])<c&&(s.x+=f[1]-f[0])),s}function v(e){const{inSR:t,outSR:n,datumTransformation:r,preferPE:i}=e;if(t.equals(n)){const{points:t}=S(e,null);return t}if(t.isWebMercator&&n.isWGS84||t.isWGS84&&n.isWebMercator)return function(e){const{cols:t,rows:n,xres:r,yres:o,usePixelCenter:i,inSR:s,outSR:l}=e;let{xmin:c,ymax:u}=e;i&&(c+=r/2,u-=o/2);const p=[],x=[],h=Math.max(t,n);for(let e=0;e<h;e++){const i=c+r*Math.min(t,e),h=u-o*Math.min(n,e),m=(0,a.iV)(new f.Z({x:i,y:h,spatialReference:s}),l);e<=t&&p.push(m.x),e<=n&&x.push(m.y)}const m=[];for(let e=0;e<t;e++)for(let t=0;t<n;t++)m.push([p[e],x[t]]);return m}(e);if(p(t,n,r)&&i){if(t.isGeographic)return R(e);const n=M(t);if((0,o.pC)(n))return R(e)}return function(e){const{points:t}=S(e,null),n=t.map((t=>new f.Z(t[0],t[1],e.inSR)));return(0,a.iV)(n,e.outSR,e.datumTransformation).map((e=>e?[e.x,e.y]:[NaN,NaN]))}(e)}function R(e){const{inSR:t,outSR:n,datumTransformation:r}=e,i=M(t),{points:a,mask:l}=S(e,i);if(!t.isGeographic){const e=t.wkid?s.e.coordsys(t.wkid):s.e.fromString(t.isGeographic?s.f.PE_TYPE_GEOGCS:s.f.PE_TYPE_PROJCS,t.wkt);s.g.projToGeog(e,a.length,a)}if((0,o.pC)(r)&&r.steps.length&&r.steps.forEach((e=>{const t=e.wkid?s.e.geogtran(e.wkid):s.e.fromString(s.f.PE_TYPE_GEOGTRAN,e.wkt);s.h.geogToGeog(t,a.length,a,null,e.isInverse?s.f.PE_TRANSFORM_2_TO_1:s.f.PE_TRANSFORM_1_TO_2)})),!n.isGeographic){const e=M(n,!0),t=(0,o.pC)(e)&&e.isEnvelope?[e.bbox[1],e.bbox[3]]:[-90,90];!function(e,t){const[n,r]=t;for(let t=0;t<e.length;t++){const o=e[t][1];(o<n||o>r)&&(e[t]=[NaN,NaN])}}(a,t);const r=n.wkid?s.e.coordsys(n.wkid):s.e.fromString(n.isGeographic?s.f.PE_TYPE_GEOGCS:s.f.PE_TYPE_PROJCS,n.wkt);s.g.geogToProj(r,a.length,a)}let f=a;if(l&&a.length!==l.length){f=[];for(let e=0,t=0;e<l.length;e++)l[e]?f.push(a[t++]):f.push([NaN,NaN])}return f}function M(e,t=!1){let n=e.wkid||e.wkt;if(!n||e.isGeographic)return null;if(n=String(n),m.has(n)){const e=m.get(n);return t?null==e?void 0:e.gcs:null==e?void 0:e.pcs}const r=e.wkid?s.e.coordsys(e.wkid):s.e.fromString(e.isGeographic?s.f.PE_TYPE_GEOGCS:s.f.PE_TYPE_PROJCS,e.wkt),o=P(r,w(e,1e-4)),i=P(r,0,!0);return m.set(n,{pcs:o,gcs:i}),t?i:o}function P(e,t=0,n=!1){const r=s.j.generate(e),o=n?e.horizonGcsGenerate():e.horizonPcsGenerate();if(null==o||!o.length)return null;let i=!1,a=o.find((e=>1===e.getInclusive()&&1===e.getKind()));if(!a){if(a=o.find((e=>1===e.getInclusive()&&0===e.getKind())),!a)return null;i=!0}const l=r.isPannableRectangle(),f=a.getCoord();if(i)return{isEnvelope:i,isPannable:l,vertices:f,coef:null,bbox:[f[0][0]-t,f[0][1]-t,f[1][0]+t,f[1][1]+t]};let c=0;const u=[];let[p,x]=f[0],[h,m]=f[0];for(let e=0,t=f.length;e<t;e++){c++,c===t&&(c=0);const[n,r]=f[e],[o,i]=f[c];if(i===r)u.push([n,o,r,i,2]);else{const e=(o-n)/(i-r||1e-4),t=n-e*r;r<i?u.push([e,t,r,i,0]):u.push([e,t,i,r,1])}p=p<n?p:n,x=x<r?x:r,h=h>n?h:n,m=m>r?m:r}return{isEnvelope:!1,isPannable:l,vertices:f,coef:u,bbox:[p,x,h,m]}}function S(e,t){const n=[],{cols:r,rows:i,xres:s,yres:a,usePixelCenter:l}=e;let{xmin:f,ymax:c}=e;if(l&&(f+=s/2,c-=a/2),!(0,o.pC)(t)){for(let e=0;e<r;e++)for(let t=0;t<i;t++)n.push([f+s*e,c-a*t]);return{points:n}}const u=new Uint8Array(r*i);if(t.isEnvelope){const{bbox:[e,o,l,p]}=t;for(let x=0,h=0;x<r;x++){const r=f+s*x,m=t.isPannable||r>=e&&r<=l;for(let e=0;e<i;e++,h++){const t=c-a*e;m&&t>=o&&t<=p&&(n.push([r,t]),u[h]=1)}}return{points:n,mask:u}}const{coef:p}=t,x=[];for(let e=0;e<i;e++){const t=c-a*e,n=[],r=[];for(let e=0;e<p.length;e++){const[o,i,s,a,l]=p[e];if(t===s&&s===a)n.push(o),n.push(i),r.push(2),r.push(2);else if(t>=s&&t<=a){const e=o*t+i;n.push(e),r.push(l)}}let o=n;if(n.length>2){let e=2===r[0]?0:r[0],t=n[0];o=[];for(let i=1;i<r.length;i++)2===r[i]&&i!==r.length-1||(r[i]!==e&&(o.push(0===e?Math.min(t,n[i-1]):Math.max(t,n[i-1])),e=r[i],t=n[i]),i===r.length-1&&o.push(0===r[i]?Math.min(t,n[i]):Math.max(t,n[i])));o.sort(((e,t)=>e-t))}else n[0]>n[1]&&(o=[n[1],n[0]]);x.push(o)}for(let e=0,t=0;e<r;e++){const r=f+s*e;for(let e=0;e<i;e++,t++){const o=c-a*e,i=x[e];if(2===i.length)r>=i[0]&&r<=i[1]&&(n.push([r,o]),u[t]=1);else if(i.length>2){let e=!1;for(let t=0;t<i.length;t+=2)if(r>=i[t]&&r<=i[t+1]){e=!0;break}e&&(n.push([r,o]),u[t]=1)}}}return{points:n,mask:u}}function b(e){const t=T(e[0].spatialReference);if(e.length<2||!(0,o.pC)(t))return e[0];let{xmin:n,xmax:r,ymin:i,ymax:s}=e[0];for(let n=1;n<e.length;n++){const o=e[n];r=o.xmax+t*n,i=Math.min(i,o.ymin),s=Math.max(s,o.ymax)}return new l.Z({xmin:n,xmax:r,ymin:i,ymax:s,spatialReference:e[0].spatialReference})}function _(e,t,n=null,r=!0){if(e.spatialReference.equals(t))return e;const i=N(e),s=T(e.spatialReference,!0),a=T(t);if(0===i||(0,o.Wi)(s)||(0,o.Wi)(a))return k(e,t,n,r);const f=e.clone().normalize();if(1===f.length&&e.xmax<s&&e.xmax-s/2>w(e.spatialReference)){const{xmin:t,xmax:n}=e;for(let r=0;r<=i;r++){const o=0===r?t:-s/2,a=r===i?n-s*r:s/2;f[r]=new l.Z({xmin:o,xmax:a,ymin:e.ymin,ymax:e.ymax,spatialReference:e.spatialReference})}}return b(f.map((e=>k(e,t,n,r))).filter((e=>!!e)))}function k(e,t,n=null,r=!0,i=!0){const s=e.spatialReference;if(s.equals(t))return e;p(s,t,n);const l=(0,a.iV)(e,t,n);if(i&&t.isWebMercator&&l&&(l.ymax=Math.min(20037508.342787,l.ymax),l.ymin=Math.max(-20037508.342787,l.ymin),l.ymin>=l.ymax))return null;if(!r||!l)return l;const c=G(s,!0),u=G(t,!0);if((0,o.Wi)(c)||(0,o.Wi)(u))return l;const x=w(s,.001),h=w(s,500),m=w(t,.001);if(Math.abs(l.xmin-u[0])<m&&Math.abs(l.xmax-u[1])<m){const r=Math.abs(e.xmin-c[0]),o=Math.abs(c[1]-e.xmax);if(r<x&&o>h){l.xmin=u[0];const r=[];r.push(new f.Z(e.xmax,e.ymin,s)),r.push(new f.Z(e.xmax,(e.ymin+e.ymax)/2,s)),r.push(new f.Z(e.xmax,e.ymax,s));const o=r.map((e=>C(e,t,n))).filter((e=>!isNaN(null==e?void 0:e.x))).map((e=>e.x));l.xmax=Math.max.apply(null,o)}if(o<x&&r>h){l.xmax=u[1];const r=[];r.push(new f.Z(e.xmin,e.ymin,s)),r.push(new f.Z(e.xmin,(e.ymin+e.ymax)/2,s)),r.push(new f.Z(e.xmin,e.ymax,s));const o=r.map((e=>C(e,t,n))).filter((e=>!isNaN(null==e?void 0:e.x))).map((e=>e.x));l.xmin=Math.min.apply(null,o)}}else{const e=w(t,.001);Math.abs(l.xmin-u[0])<e&&(l.xmin=u[0]),Math.abs(l.xmax-u[1])<e&&(l.xmax=u[1])}return l}function T(e,t=!1){const n=t?20037508.342787:20037508.342788905;return e.isWebMercator?2*n:e.wkid&&e.isGeographic?360:2*h[e.wkid]||null}function G(e,t=!1){if(e.isGeographic)return[-180,180];const n=T(e,t);return(0,o.pC)(n)?[-n/2,n/2]:null}function E(e,t,n,r){let o=(e-t)/n;return o-Math.floor(o)!=0?o=Math.floor(o):r&&(o-=1),o}function N(e,t=!1){const n=T(e.spatialReference);if(!(0,o.pC)(n))return 0;const r=t?0:-n/2,i=w(e.spatialReference),s=!t&&Math.abs(e.xmax-n/2)<i?n/2:e.xmax,a=!t&&Math.abs(e.xmin+n/2)<i?-n/2:e.xmin;return E(s,r,n,!0)-E(a,r,n,!1)}function Z(e){const t=e.storageInfo.origin.x,n=T(e.spatialReference,!0);if(!(0,o.pC)(n))return{originX:t,halfWorldWidth:null,pyramidsInfo:null};const r=n/2,{nativePixelSize:i,storageInfo:s,extent:a}=e,{maximumPyramidLevel:l,blockWidth:f,pyramidScalingFactor:c}=s;let u=i.x;const p=[],x=(0,o.pC)(e.transform)&&"gcs-shift"===e.transform.type,h=t+(x?0:r),m=x?n-t:r-t;for(let e=0;e<=l;e++){const e=(a.xmax-t)/u/f,n=e-Math.floor(e)==0?e:Math.ceil(e),r=m/u/f,o=r-Math.floor(r)==0?r:Math.ceil(r),i=Math.floor(h/u/f),s=Math.round(h/u)%f,l=(f-Math.round(m/u)%f)%f;p.push({resolutionX:u,blockWidth:f,datsetColumnCount:n,worldColumnCountFromOrigin:o,leftMargin:s,rightPadding:l,originColumnOffset:i}),u*=c}return{originX:t,halfWorldWidth:r,pyramidsInfo:p,hasGCSSShiftTransform:x}}function O(e){const t=e.isAdaptive&&null==e.spacing;let n=e.spacing||[32,32],r=z(e),i={cols:r.size[0]+1,rows:r.size[1]+1};const a=r.outofBoundPointCount>0&&r.outofBoundPointCount<r.offsets.length/2;let l=r.outofBoundPointCount===r.offsets.length/2||t&&a?[0,0]:x(r.offsets,i,n,4);const f=(l[0]+l[1])/2,p=e.projectedExtent.spatialReference,h=e.srcBufferExtent.spatialReference;if(t&&(a||f>4)&&(u(p,h,e.datumTransformation)&&(p.isGeographic||(0,o.pC)(M(p))),n=[4,4],r=z({...e,spacing:n}),i={cols:r.size[0]+1,rows:r.size[1]+1},l=x(r.offsets,i,n,4)),r.error=l,n[0]>1&&(r.coefficients=W(r.offsets,i,a)),e.includeGCSGrid&&!p.isGeographic&&!p.isWebMercator)if(h.isGeographic)r.gcsGrid={offsets:r.offsets,coefficients:r.coefficients,spacing:n};else{const t=M(p);if((0,o.pC)(t)&&!t.isEnvelope){const t=function(e){if(!e||e.isGeographic)return e;const t=String(e.wkid||e.wkt);let n;return y.has(t)?n=y.get(t):(n=(e.wkid?s.e.coordsys(e.wkid):s.e.fromString(s.f.PE_TYPE_PROJCS,e.wkt)).getGeogcs().getCode(),y.set(t,n)),new c.Z({wkid:n})}(p),o=_(e.projectedExtent,t),{offsets:l}=z({...e,srcBufferExtent:o,spacing:n}),f=W(l,i,a);r.gcsGrid={offsets:l,coefficients:f,spacing:n}}}return r}function z(e){const{projectedExtent:t,srcBufferExtent:n,pixelSize:r,datumTransformation:i,rasterTransform:s}=e,a=t.spatialReference,l=n.spatialReference;p(a,l);const{xmin:c,ymin:u,xmax:x,ymax:h}=t,m=T(l),y=(0,o.pC)(m)&&(e.hasWrapAround||"gcs-shift"===(null==s?void 0:s.type)),d=e.spacing||[32,32],g=d[0]*r.x,C=d[1]*r.y,R=1===d[0],M=Math.ceil((x-c)/g-.1/d[0])+(R?0:1),P=Math.ceil((h-u)/C-.1/d[1])+(R?0:1),S=v({cols:M,rows:P,xmin:c,ymax:h,xres:g,yres:C,inSR:a,outSR:l,datumTransformation:i,preferPE:d[0]<=4,usePixelCenter:R}),b=[];let _,k=0;const G=R?-1:NaN,{xmin:E,xmax:N,ymax:Z,width:O,height:z}=n,W=w(l,500);for(let e=0;e<M;e++){const t=[];for(let n=0;n<P;n++){let r=S[e*P+n];if(y&&r[0]>N&&r[0]>m/2-W&&(r[0]-=m),!r||isNaN(r[0])||isNaN(r[1]))b.push(G),b.push(G),t.push(null),k++;else{if(s){const e=s.inverseTransform(new f.Z({x:r[0],y:r[1],spatialReference:l}));r=[e.x,e.y]}t.push(r),e>0&&y&&_[n]&&r[0]<_[n][0]&&(r[0]+=m),b.push((r[0]-E)/O),b.push((Z-r[1])/z)}}_=t}return{offsets:b,error:null,coefficients:null,outofBoundPointCount:k,spacing:d,size:R?[M,P]:[M-1,P-1]}}function W(e,t,n){const{cols:r,rows:o}=t,i=new Float32Array((r-1)*(o-1)*2*6),s=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),a=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let t=0;t<r-1;t++){for(let n=0;n<o-1;n++){let l=t*o*2+2*n;const f=e[l],c=e[l+1],u=e[l+2],p=e[l+3];l+=2*o;const x=e[l],h=e[l+1],m=e[l+2],y=e[l+3];let d=0,g=12*(n*(r-1)+t);for(let e=0;e<3;e++)i[g++]=s[d++]*f+s[d++]*u+s[d++]*m;d=0;for(let e=0;e<3;e++)i[g++]=s[d++]*c+s[d++]*p+s[d++]*y;d=0;for(let e=0;e<3;e++)i[g++]=a[d++]*f+a[d++]*x+a[d++]*m;d=0;for(let e=0;e<3;e++)i[g++]=a[d++]*c+a[d++]*h+a[d++]*y}if(n)for(let e=0;e<i.length;e++)isNaN(i[e])&&(i[e]=-1)}return i}function j(e){const t=e.clone().normalize();return 1===t.length?t[0]:b(t)}function I(e,t,n){const{storageInfo:r,pixelSize:i}=t;let s,a=!1;const{pyramidResolutions:l}=r;if((0,o.pC)(l)&&l.length){const r=(e.x+e.y)/2,o=l[l.length-1],c=(o.x+o.y)/2,u=(i.x+i.y)/2;if(r<=u)s=0;else if(r>=c)s=l.length,a=r/c>8;else{let e,t=u;for(let o=1;o<=l.length;o++){if(e=(l[o-1].x+l[o-1].y)/2,r<=e){r===e?s=o:"down"===n?(s=o-1,a=r/t>8):s="up"===n||r-t>e-r||r/t>2?o:o-1;break}t=e}}const p=0===s?i:l[s-1];return{pyramidLevel:s,pyramidResolution:new f.Z({x:p.x,y:p.y,spatialReference:t.spatialReference}),excessiveReading:a}}const c=Math.log(e.x/i.x)/Math.LN2,u=Math.log(e.y/i.y)/Math.LN2,p=t.storageInfo.maximumPyramidLevel||0;s="down"===n?Math.floor(Math.min(c,u)):"up"===n?Math.ceil(Math.max(c,u)):Math.round((c+u)/2),s<0?s=0:s>p&&(a=s>p+3,s=p);const x=2**s;return{pyramidLevel:s,pyramidResolution:new f.Z({x:x*t.nativePixelSize.x,y:x*t.nativePixelSize.y,spatialReference:t.spatialReference}),excessiveReading:a}}},48700:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(43697),o=n(96674),i=n(5600),s=(n(67676),n(80442),n(75215),n(52011));let a=class extends o.wq{get affectsPixelSize(){return!1}forwardTransform(e){return e}inverseTransform(e){return e}};(0,r._)([(0,i.Cb)()],a.prototype,"affectsPixelSize",null),(0,r._)([(0,i.Cb)({json:{write:!0}})],a.prototype,"spatialReference",void 0),a=(0,r._)([(0,s.j)("esri.layers.support.rasterTransforms.BaseRasterTransform")],a);const l=a},29680:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(43697),o=n(5600),i=(n(67676),n(80442),n(75215),n(36030)),s=n(52011),a=n(48700);let l=class extends a.Z{constructor(){super(...arguments),this.type="gcs-shift",this.tolerance=1e-8}forwardTransform(e){return"point"===(e=e.clone()).type?(e.x>180+this.tolerance&&(e.x-=360),e):(e.xmin>=180-this.tolerance?(e.xmax-=360,e.xmin-=360):e.xmax>180+this.tolerance&&(e.xmin=-180,e.xmax=180),e)}inverseTransform(e){return"point"===(e=e.clone()).type?(e.x<-this.tolerance&&(e.x+=360),e):(e.xmin<-this.tolerance&&(e.xmin+=360,e.xmax+=360),e)}};(0,r._)([(0,i.J)({GCSShiftXform:"gcs-shift"})],l.prototype,"type",void 0),(0,r._)([(0,o.Cb)()],l.prototype,"tolerance",void 0),l=(0,r._)([(0,s.j)("esri.layers.support.rasterTransforms.GCSShiftTransform")],l);const f=l},87390:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(43697),o=(n(66577),n(5600)),i=(n(67676),n(80442),n(75215),n(36030)),s=n(71715),a=n(52011),l=n(30556),f=n(48700),c=n(13473),u=n(6570);function p(e,t,n){const{x:r,y:o}=t;if(n<2)return{x:e[0]+r*e[2]+o*e[4],y:e[1]+r*e[3]+o*e[5]};if(2===n){const t=r*r,n=o*o,i=r*o;return{x:e[0]+r*e[2]+o*e[4]+t*e[6]+i*e[8]+n*e[10],y:e[1]+r*e[3]+o*e[5]+t*e[7]+i*e[9]+n*e[11]}}const i=r*r,s=o*o,a=r*o,l=i*r,f=i*o,c=r*s,u=o*s;return{x:e[0]+r*e[2]+o*e[4]+i*e[6]+a*e[8]+s*e[10]+l*e[12]+f*e[14]+c*e[16]+u*e[18],y:e[1]+r*e[3]+o*e[5]+i*e[7]+a*e[9]+s*e[11]+l*e[13]+f*e[15]+c*e[17]+u*e[19]}}function x(e,t,n){const{xmin:r,ymin:o,xmax:i,ymax:s,spatialReference:a}=t;let l=[];if(n<2)l.push({x:r,y:s}),l.push({x:i,y:s}),l.push({x:r,y:o}),l.push({x:i,y:o});else{let e=10;for(let t=0;t<e;t++)l.push({x:r,y:o+(s-o)*t/(e-1)}),l.push({x:i,y:o+(s-o)*t/(e-1)});e=8;for(let t=1;t<=e;t++)l.push({x:r+(i-r)*t/e,y:o}),l.push({x:r+(i-r)*t/e,y:s})}l=l.map((t=>p(e,t,n)));const f=l.map((e=>e.x)),c=l.map((e=>e.y));return new u.Z({xmin:Math.min.apply(null,f),xmax:Math.max.apply(null,f),ymin:Math.min.apply(null,c),ymax:Math.max.apply(null,c),spatialReference:a})}let h=class extends f.Z{constructor(){super(...arguments),this.polynomialOrder=1,this.type="polynomial"}readForwardCoefficients(e,t){const{coeffX:n,coeffY:r}=t;if(null==n||!n.length||null==r||!r.length||n.length!==r.length)return null;const o=[];for(let e=0;e<n.length;e++)o.push(n[e]),o.push(r[e]);return o}writeForwardCoefficients(e,t,n){const r=[],o=[];for(let t=0;t<(null==e?void 0:e.length);t++)t%2==0?r.push(e[t]):o.push(e[t]);t.coeffX=r,t.coeffY=o}get inverseCoefficients(){let e=this._get("inverseCoefficients");const t=this._get("forwardCoefficients");return!e&&t&&this.polynomialOrder<2&&(e=function(e){const[t,n,r,o,i,s]=e,a=r*s-i*o,l=i*o-r*s;return[(i*n-t*s)/a,(r*n-t*o)/l,s/a,o/l,-i/a,-r/l]}(t)),e}set inverseCoefficients(e){this._set("inverseCoefficients",e)}readInverseCoefficients(e,t){const{inverseCoeffX:n,inverseCoeffY:r}=t;if(null==n||!n.length||null==r||!r.length||n.length!==r.length)return null;const o=[];for(let e=0;e<n.length;e++)o.push(n[e]),o.push(r[e]);return o}writeInverseCoefficients(e,t,n){const r=[],o=[];for(let t=0;t<(null==e?void 0:e.length);t++)t%2==0?r.push(e[t]):o.push(e[t]);t.inverseCoeffX=r,t.inverseCoeffY=o}get affectsPixelSize(){return this.polynomialOrder>0}forwardTransform(e){if("point"===e.type){const t=p(this.forwardCoefficients,e,this.polynomialOrder);return new c.Z({x:t.x,y:t.y,spatialReference:e.spatialReference})}return x(this.forwardCoefficients,e,this.polynomialOrder)}inverseTransform(e){if("point"===e.type){const t=p(this.inverseCoefficients,e,this.polynomialOrder);return new c.Z({x:t.x,y:t.y,spatialReference:e.spatialReference})}return x(this.inverseCoefficients,e,this.polynomialOrder)}};(0,r._)([(0,o.Cb)({json:{write:!0}})],h.prototype,"polynomialOrder",void 0),(0,r._)([(0,o.Cb)()],h.prototype,"forwardCoefficients",void 0),(0,r._)([(0,s.r)("forwardCoefficients",["coeffX","coeffY"])],h.prototype,"readForwardCoefficients",null),(0,r._)([(0,l.c)("forwardCoefficients")],h.prototype,"writeForwardCoefficients",null),(0,r._)([(0,o.Cb)({json:{write:!0}})],h.prototype,"inverseCoefficients",null),(0,r._)([(0,s.r)("inverseCoefficients",["inverseCoeffX","inverseCoeffY"])],h.prototype,"readInverseCoefficients",null),(0,r._)([(0,l.c)("inverseCoefficients")],h.prototype,"writeInverseCoefficients",null),(0,r._)([(0,o.Cb)()],h.prototype,"affectsPixelSize",null),(0,r._)([(0,i.J)({PolynomialXform:"polynomial"})],h.prototype,"type",void 0),h=(0,r._)([(0,a.j)("esri.layers.support.rasterTransforms.PolynomialTransform")],h);const m=h},87521:(e,t,n)=>{n.d(t,{j:()=>x,c:()=>h});var r=n(29680),o=n(43697),i=(n(92604),n(75215),n(67676),n(80442),n(37697),n(36030)),s=n(52011),a=n(48700);let l=class extends a.Z{constructor(){super(...arguments),this.type="identity"}};(0,o._)([(0,i.J)({IdentityXform:"identity"})],l.prototype,"type",void 0),l=(0,o._)([(0,s.j)("esri.layers.support.rasterTransforms.IdentityTransform")],l);const f=l;var c=n(87390);const u={GCSShiftXform:r.Z,IdentityXform:f,PolynomialXform:c.Z},p=Object.keys(u);function x(e){const t=null==e?void 0:e.type;return!e||p.includes(t)}function h(e){if(!(null==e?void 0:e.type))return null;const t=u[null==e?void 0:e.type];if(t){const n=new t;return n.read(e),n}return null}}}]);