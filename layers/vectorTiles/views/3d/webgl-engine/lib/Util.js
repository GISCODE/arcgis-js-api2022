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

define(["require","exports","../../support/geometryUtils","./gl-matrix"],(function(t,e,r,a){Object.defineProperty(e,"__esModule",{value:!0});var n=a.mat4d.create(),o=[a.vec4d.createFrom(-1,-1,-1,1),a.vec4d.createFrom(1,-1,-1,1),a.vec4d.createFrom(1,1,-1,1),a.vec4d.createFrom(-1,1,-1,1),a.vec4d.createFrom(-1,-1,1,1),a.vec4d.createFrom(1,-1,1,1),a.vec4d.createFrom(1,1,1,1),a.vec4d.createFrom(-1,1,1,1)],c=a.vec4d.create(),i=[a.vec3d.create(),a.vec3d.create(),a.vec3d.create(),a.vec3d.create(),a.vec3d.create(),a.vec3d.create(),a.vec3d.create(),a.vec3d.create()],u=a.vec3d.create(),s=a.vec3d.create(),v=a.vec3d.create(),f=a.vec3d.create(),d=a.vec3d.create(),h=a.vec3d.create(),M=a.vec3d.create(),l=a.vec3d.create(),m=a.vec3d.create(),p=a.vec3d.create(),g=a.vec3d.create(),E=a.vec3d.create(),I=a.vec3d.create(),T=a.vec3d.createFrom(0,0,0),b=function(){function t(t){this.message=t}return t.prototype.toString=function(){return"AssertException: "+this.message},t}();function C(t,e){if(!t){var r=new Error("dummy");throw r.stack&&console.log(r.stack),new b(e)}}function y(t,e,r){return t<e?e:t>r?r:t}e.AssertException=b,e.EARTH_RADIUS=6378137,e.METER2FEET=3.28084,e.ECCENTRICITY_SQUARED=.0066943799901414,e.VertexAttrConstants={POSITION:"position",NORMAL:"normal",NORMALCOMPRESSED:"normalCompressed",UV0:"uv0",AUXPOS1:"auxpos1",AUXPOS2:"auxpos2",COLOR:"color",SYMBOLCOLOR:"symbolColor",SIZE:"size",REGION:"region",COMPONENTINDEX:"componentIndex"},e.assert=C,e.verify=function(t,e){t||(console.log("Verify failed: "+e),console.log(new Error("dummy").stack))},e.isPowerOfTwo=function(t){return 0==(t&t-1)},e.lerp=function(t,e,r){return t+(e-t)*r},e.clamp=y,e.encodeInt16=function(t){return y(Math.round(32767*t),-32767,32767)},e.encodeNormal=function(t,e){var r=Math.abs(t[0]),a=Math.abs(t[1]),n=1/(r+a+Math.abs(t[2])),o=r*n,c=a*n,i=Math.min(t[2]*n,0);e[0]=R(t[0])*(o-i),e[1]=R(t[1])*(c-i)};var R="function"==typeof Math.sign?Math.sign:function(t){return+(t>0)-+(t<0)||0};function x(t){return t/180*Math.PI}function P(t){return 180*t/Math.PI}function O(t,e,r){a.mat4d.multiply(e,t,n),a.mat4d.inverse(n);for(var i=0;i<8;++i)a.mat4d.multiplyVec4(n,o[i],c),a.vec3d.set3(c[0]/c[3],c[1]/c[3],c[2]/c[3],r[i])}function S(t,e){r.plane.fromPoints(t[4],t[0],t[3],e[0]),r.plane.fromPoints(t[1],t[5],t[6],e[1]),r.plane.fromPoints(t[4],t[5],t[1],e[2]),r.plane.fromPoints(t[3],t[2],t[6],e[3]),r.plane.fromPoints(t[0],t[1],t[2],e[4]),r.plane.fromPoints(t[5],t[4],t[7],e[5])}function A(t,r,a,n){var o=6378137/Math.sqrt(1-e.ECCENTRICITY_SQUARED*Math.pow(Math.sin(t),2)),c=Math.cos(t);n[0]=(o+a)*Math.cos(r)*c,n[1]=(o*(1-e.ECCENTRICITY_SQUARED)+a)*Math.sin(t),n[2]=-(o+a)*Math.sin(r)*c}function w(t){for(var e in t)return e}function D(t,e){t[12]=e[0],t[13]=e[1],t[14]=e[2]}function U(t,e){void 0===e&&(e=0);for(var r=0,a=0;a<4;a++)r+=t[e+a]*N[a];return r}e.fallbackIfUndefined=function(t,e){return void 0===t?e:t},e.hex2rgb=function(t){return[((t=Math.floor(t))>>16&255)/255,(t>>8&255)/255,(255&t)/255]},e.rgb2hex=function(t){return"0x"+((y(Math.round(255*t[0]),0,255)<<16)+(y(Math.round(255*t[1]),0,255)<<8)+y(Math.round(255*t[2]),0,255)).toString(16)},e.dec2hex=function(t){var e=t.toString(16);return"00000000".substr(0,8-e.length)+e},e.deg2rad=x,e.rad2deg=P,e.azimuthElevationAngle2Direction=function(t,e){var r=1.5*Math.PI-t,a=.5*Math.PI-e;return[Math.cos(r)*Math.sin(a),Math.cos(a),Math.sin(r)*Math.sin(a)]},e.raySphere=function(t,e,r,n,o){r=r||T;var c=a.vec3d.subtract(t,r,u),i=a.vec3d.dot(e,e),s=2*a.vec3d.dot(e,c),v=s*s-4*i*(a.vec3d.dot(c,c)-n*n);if(v<0)return!1;var f=Math.sqrt(v),d=(-s-f)/(2*i),h=(-s+f)/(2*i);return(d<0||h<d&&h>0)&&(d=h),d>0&&(o&&a.vec3d.add(t,a.vec3d.scale(e,d,I),o),!0)},e.rayTriangle3D=function(t,e,r,n,o,c,i,u,s){void 0===s&&(s=a.vec3d.create());var v=n[i]-r[c],f=n[i+1]-r[c+1],d=n[i+2]-r[c+2],h=o[u]-r[c],M=o[u+1]-r[c+1],l=o[u+2]-r[c+2],m=e[1]*l-M*e[2],p=e[2]*h-l*e[0],g=e[0]*M-h*e[1],E=v*m+f*p+d*g;if(E>-1e-5&&E<1e-5)return!1;var I=1/E,T=t[0]-r[c],b=t[1]-r[c+1],C=t[2]-r[c+2];if(s[1]=I*(T*m+b*p+C*g),s[1]<0||s[1]>1)return!1;var y=b*d-f*C,R=C*v-d*T,x=T*f-v*b;return s[2]=I*(e[0]*y+e[1]*R+e[2]*x),!(s[2]<0||s[1]+s[2]>1)&&(s[0]=I*(h*y+M*R+l*x),!0)},e.rayBoxTest=function(t,e,r,a){var n,o=(r[0]-t[0])/e[0],c=(a[0]-t[0])/e[0];o>c&&(n=o,o=c,c=n);var i=(r[1]-t[1])/e[1],u=(a[1]-t[1])/e[1];if(i>u&&(n=i,i=u,u=n),o>u||i>c)return!1;i>o&&(o=i),u<c&&(c=u);var s=(r[2]-t[2])/e[2],v=(a[2]-t[2])/e[2];return s>v&&(n=s,s=v,v=n),!(o>v||s>c)&&(v<c&&(c=v),!(c<0))},e.rayRay2D=function(t,e,r,n,o,c){void 0===c&&(c=a.vec2d.create());var i=(n[o]-r[o])*(e[0]-t[0])-(n[0]-r[0])*(e[o]-t[o]),u=(n[0]-r[0])*(t[o]-r[o])-(n[o]-r[o])*(t[0]-r[0]);if(0===i)return!1;var s=u/i;return c[0]=t[0]+s*(e[0]-t[0]),c[1]=t[o]+s*(e[o]-t[o]),!0},e.matrixToFrustumPoints=O,e.matrixToFrustumPlanes=function(t,e,r,a){void 0===a&&(a=r,r=i),O(t,e,r),S(r,a)},e.frustumPointsToPlanes=S,e.project=function(t,e,r,n,o){o||(o=t),c[0]=t[0],c[1]=t[1],c[2]=t[2],c[3]=1,a.mat4d.multiplyVec4(e,c),o.length>2&&(o[2]=-c[2]),a.mat4d.multiplyVec4(r,c),C(0!==c[3]),o[0]=c[0]/c[3],o[1]=c[1]/c[3],o[2]=c[2]/c[3],o[0]=(.5*o[0]+.5)*n[2]+n[0],o[1]=(.5*o[1]+.5)*n[3]+n[1]},e.geodeticToGeocentricLatidude=function(t){return Math.atan((1-e.ECCENTRICITY_SQUARED)*Math.tan(t))},e.latLon2positionWGS84Ellipsoid=A,e.pos2latLon=function(t,e){var r=a.vec3d.length(t);e[0]=Math.asin(y(t[1]/r,-1,1));var n=Math.cos(e[0]);e[1]=(t[2]<0?1:-1)*Math.acos(y(t[0]/(n*r),-1,1)),e[0]=P(e[0]),e[1]=P(e[1]),e[2]=r},e.pos2latLonWGS84Ellipsoid=function(t,r){var a=6378137,n=t[0],o=-t[2],c=t[1],i=Math.sqrt(Math.pow(a,2)*(1-e.ECCENTRICITY_SQUARED)),u=Math.sqrt((Math.pow(a,2)-Math.pow(i,2))/Math.pow(i,2)),s=Math.sqrt(Math.pow(n,2)+Math.pow(o,2)),v=Math.atan2(a*c,i*s),f=Math.atan2(o,n),d=Math.atan2(c+Math.pow(u,2)*i*Math.pow(Math.sin(v),3),s-e.ECCENTRICITY_SQUARED*a*Math.pow(Math.cos(v),3)),h=a/Math.sqrt(1-e.ECCENTRICITY_SQUARED*Math.pow(Math.sin(d),2)),M=s/Math.cos(d)-h+e.EARTH_RADIUS;r[0]=d,r[1]=f,r[2]=M},e.computeGlobeTransformation=function(t,e,r){var n=x(t[0]),o=x(t[1]);return A(n,o,e,s),a.mat4d.translate(r,s),a.mat4d.rotateY(r,.5*Math.PI+o),a.mat4d.rotateX(r,.5*Math.PI-n),r},e.readUInt16=function(t,e){return t[e]+(t[e+1]<<8)},e.readUInt32=function(t,e){return t[e]+(t[e+1]<<8)+(t[e+2]<<16)+(t[e+3]<<24)},e.setIfDefined=function(t,e,r){void 0!==e[t]&&(r[t]=e[t])},e.array2object=function(t,e){var r={};if(void 0!==e)for(var a=0,n=t;a<n.length;a++){r[e(i=n[a])]=i}else for(var o=0,c=t;o<c.length;o++){var i;r[i=c[o]]=i}return r},e.object2array=function(t){var e=[];for(var r in t)e.push(t[r]);return e},e.mergeObjects=function(t,e,r){if(void 0===r&&(r={}),r!==t)for(var a in t)r[a]=t[a];if(r!==e)for(var n in e)r[n]=e[n];return r},e.subtractObjects=function(t,e){var r={};for(var a in t)void 0===e[a]&&(r[a]=t[a]);return r},e.intersectObjects=function(t,e){var r={};for(var a in t)void 0!==e[a]&&(r[a]=t[a]);return r},e.getFirstObjectKey=w,e.getFirstObjectValue=function(t){return t[w(t)]},e.objectEmpty=function(t){for(var e in t)return!1;return!0},e.byteBuffer2base64image=function(t,e,r,a,n){var o=4*e;C(t.length===o*r,"buffer length must match image resolution");var c=document.createElement("canvas");c.width=e,c.height=r;for(var i=c.getContext("2d"),u=i.getImageData(0,0,e,r),s=u.data,v=0;v<r;++v)for(var f=v*o,d=(r-1-v)*o,h=0;h<o;++h)s[f++]=t[d++];return i.putImageData(u,0,0),c.toDataURL(a,n)},e.cround=function(t){return Math.round(100*t)/100},e.logWithBase=function(t,e){return Math.log(t)/Math.log(e)},e.setMatrixTranslation=D,e.setMatrixTranslation3=function(t,e,r,a){t[12]=e,t[13]=r,t[14]=a},e.getMatrixTranslation=function(t,e){return void 0===e&&(e=a.vec3d.create()),e[0]=t[12],e[1]=t[13],e[2]=t[14],e},e.createTranslationMatrix=function(t,e){return D(t=a.mat4d.identity(t),e),t},e.isTranslationMatrix=function(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&1===t[15]},e.fovx2fovy=function(t,e,r){return 2*Math.atan(r*Math.tan(.5*t)/e)},e.fovy2fovx=function(t,e,r){return 2*Math.atan(e*Math.tan(.5*t)/r)},e.fovx2fovd=function(t,e,r){return 2*Math.atan(Math.sqrt(e*e+r*r)*Math.tan(.5*t)/e)},e.fovy2fovd=function(t,e,r){return 2*Math.atan(Math.sqrt(e*e+r*r)*Math.tan(.5*t)/r)},e.fovd2fovx=function(t,e,r){return 2*Math.atan(e*Math.tan(.5*t)/Math.sqrt(e*e+r*r))},e.fovd2fovy=function(t,e,r){return 2*Math.atan(r*Math.tan(.5*t)/Math.sqrt(e*e+r*r))},e.nextHighestPowerOfTwo=function(t){--t;for(var e=1;e<32;e<<=1)t|=t>>e;return t+1},e.nextHighestPowerOfTen=function(t){return Math.pow(10,Math.ceil(Math.LOG10E*Math.log(t)))},e.lineLineDistanceSquared3D=function(t,e,r,n,o){var c=v,i=f;if(c[0]=t[0]-r[0],c[1]=t[1]-r[1],c[2]=t[2]-r[2],i[0]=n[0]-r[0],i[1]=n[1]-r[1],i[2]=n[2]-r[2],Math.abs(i[0])<1e-4&&Math.abs(i[1])<1e-4&&Math.abs(i[2])<1e-4)return o.success=!1,o;var u=d;if(u[0]=e[0]-t[0],u[1]=e[1]-t[1],u[2]=e[2]-t[2],Math.abs(u[0])<1e-4&&Math.abs(u[1])<1e-4&&Math.abs(u[2])<1e-4)return o.success=!1,o;var s=c[0]*i[0]+c[1]*i[1]+c[2]*i[2],l=i[0]*u[0]+i[1]*u[1]+i[2]*u[2],m=c[0]*u[0]+c[1]*u[1]+c[2]*u[2],p=i[0]*i[0]+i[1]*i[1]+i[2]*i[2],g=(u[0]*u[0]+u[1]*u[1]+u[2]*u[2])*p-l*l;if(Math.abs(g)<1e-4)return o.success=!1,o;var E=y((s*l-m*p)/g,0,1),I=y((s+l*E)/p,0,1),T=h,b=M;T[0]=t[0]+E*u[0],T[1]=t[1]+E*u[1],T[2]=t[2]+E*u[2],b[0]=r[0]+I*i[0],b[1]=r[1]+I*i[1],b[2]=r[2]+I*i[2];var C=a.vec3d.dist2(T,b);return o.success=!0,o.dist2=C,o.pa=T,o.pb=b,o},e.pointLineSegmentDistanceSquared2D=function(t,e,r){var n=g,o=E,c=I,i=p,u=l,s=m;n[0]=e[0]-t[0],n[1]=e[1]-t[1],n[2]=0,o[0]=r[0]-t[0],o[1]=r[1]-t[1],o[2]=0,c[0]=r[0],c[1]=r[1],c[2]=0;var v=y(a.vec2d.dot(o,n)/a.vec2d.dot(n,n),0,1);i[0]=n[0]*v,i[1]=n[1]*v,u[0]=t[0]+i[0],u[1]=t[1]+i[1],a.vec2d.subtract(c,u,s);var f=a.vec2d.dot(s,s),d=a.vec2d.dot(o,o),h=a.vec2d.dot(n,n),M=a.vec2d.dot(i,i);return(M>d||M>h)&&(f=Number.MAX_VALUE),f},e.packFloatRGBA=function(t,e,r){void 0===r&&(r=0);for(var a,n=y(t,0,L),o=0;o<4;o++)e[r+o]=Math.floor(256*((a=n*F[o])-Math.floor(a)))},e.unpackFloatRGBA=U;var F=[1,256,65536,16777216],N=[1/256,1/65536,1/16777216,1/4294967296],L=U(new Uint8ClampedArray([255,255,255,255]));e.inverseProjectionInfo=function(t,e,r,n,o){var c=t;0===t[11]?(n[0]=2/(e*c[0]),n[1]=2/(r*c[5]),n[2]=(1+c[12])/c[0],n[3]=(1+c[13])/c[5],a.vec2d.set2(0,1,o)):(n[0]=-2/(e*c[0]),n[1]=-2/(r*c[5]),n[2]=(1-c[8])/c[0],n[3]=(1-c[9])/c[5],a.vec2d.set2(1,0,o))}}));