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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/Deferred","dojo/sniff","../../../kernel","../../../WKIDUnitConversion","../../../geometry/Extent","../../../geometry/projection","../../../geometry/webMercatorUtils","../../../SpatialReference","../../../geometry/Point"],(function(e,r,o,n,t,s,i,a,l,c,f){var d={requirePE:function(e,r){return!(e.equals(r)||e._canProject(r))},load:function(){var e=new o;if(!this._loadPromise)if(a.isSupported())this._loadPromise=a.load();else{var n=new o;n.reject("projection engine is not supported on this version of the browser, please try with a modern browser"),this._loadPromise=n.promise}return this._loadPromise.isFulfilled()?this._loadPromise.isResolved()?e.resolve():this._loadPromise.isRejected()&&e.resolve():(this._pendingdfds=this._pendingdfds||[],this._pendingdfds.push(e),this._loadPromise.then(r.hitch(this,(function(){this._pendingdfds.forEach((function(e){e.isFulfilled()||e.resolve()}))})),r.hitch(this,(function(){this._pendingdfds.forEach((function(e){e.isFulfilled()||e.reject()}))})))),e.promise},computeError:function(e,r){var o=(e[0]+e[4]+e[4*r.rows]+e[4*r.rows+4])/4,n=(e[1]+e[5]+e[4*r.rows+1]+e[4*r.rows+5])/4;return[Math.abs(o-e[2*r.rows+2]),Math.abs(n-e[2*r.rows+3])]},getDefaultDatumTransformationForDataset:function(e,r,o){return r&&e.spatialReference&&this.requirePE(e.spatialReference,r)&&a.isLoaded()?(e=new i(e.toJson()),r=new c(r.toJson()),o?a.getTransformation(r,e.spatialReference,e):a.getTransformation(e.spatialReference,r,e)):null},project:function(e,r,o){if(!r||e.spatialReference.equals(r))return e;var n=a.isLoaded()?a:l;"esri.geometry.Extent"===e.declaredClass?e=new i(e.toJson()):"esri.geometry.Point"===e.declaredClass&&(e=new f(e.toJson())),r=new c(r.toJson());var t=n.project(e,r);return t&&"esri.geometry.Extent"===t.declaredClass?(t=new i(t.toJson()),o&&(Math.abs(t.xmin+180)<1e-5&&Math.abs(t.xmax-180)<1e-5?(t.xmin=0,t.xmax=360):(t.xmin<0&&(t.xmin+=360,t.xmax+=360),t.xmax<0&&(t.xmax+=360)))):t&&"esri.geometry.Point"===t.declaredClass&&(t=new f(t.toJson()),o&&t.x<0&&(t.x+=360)),t},projectResolution:function(e,r,o){var n=o.xmin+(o.xmax-o.xmin)/2,t=o.ymin+(o.ymax-o.ymin)/2,s=new i(n,t,n+e.x,t+e.y,e.spatialReference),a=this.project(s,r);return new f(a.xmax-a.xmin,a.ymax-a.ymin,r)},getProjectionOffsetGrid:function(e,r,o,n,t,s,i){null==i&&(i=[32,32]);var c,d,m,x,u,h,p,w=e.xmin,y=e.ymin,g=e.xmax,j=e.ymax,v=e.spatialReference,_=r.spatialReference,P=a.isLoaded()?a:l,b=t?-t:null,R=t,E=i[0]*o.x,M=i[1]*o.y,F={cols:Math.ceil((g-w)/E)+1,rows:Math.ceil((j-y)/M)+1},J=[];for(m=0;m<F.cols;m++)for(h=p,p=[],x=0;x<F.rows;x++){if(c=new f({x:w+E*m,y:y+M*x,spatialReference:v}),!(d=P.project(c,_,s)))return null;n&&d.x<0&&(d.x+=360),p.push(d),m>0&&null!=b&&d.x<h[x].x&&(d.x+=R-b,d.x<h[x].x&&(d.x+=R-b)),J.push((d.x-r.xmin)/(r.xmax-r.xmin)),J.push((d.y-r.ymin)/(r.ymax-r.ymin))}var C=this.computeError(J,F),D=new Float32Array((F.cols-1)*(F.rows-1)*2*6),q=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),L=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(m=0;m<F.cols-1;m++)for(x=0;x<F.rows-1;x++){var W=m*F.rows*2+2*x,A=J[W],T=J[W+1],k=J[W+2],H=J[W+3],O=J[W+=2*F.rows],S=J[W+1],U=J[W+2],z=J[W+3],G=0,I=12*(x*(F.cols-1)+m);for(u=0;u<3;u++)D[I++]=q[G++]*A+q[G++]*k+q[G++]*U;for(G=0,u=0;u<3;u++)D[I++]=q[G++]*T+q[G++]*H+q[G++]*z;for(G=0,u=0;u<3;u++)D[I++]=L[G++]*A+L[G++]*O+L[G++]*U;for(G=0,u=0;u<3;u++)D[I++]=L[G++]*T+L[G++]*S+L[G++]*z}return{offsets:J,error:C,coefficients:D,spacing:i,size:[F.cols-1,F.rows-1]}},getHalfWorldWidth:function(e){var r=e&&e.wkid;if(null!=r)return e.isWebMercator()&&(r=3857),null==s[r]?180:m[r]}};n("extend-esri")&&r.setObject("layers.rasterLib.raster.rasterProjectionHelper",d,t);var m={3395:20037508.342789244,3410:17334193.943686873,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53034:20015086.79602057,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54034:20037508.342789244,54079:20037508.342789244,54080:20037508.342789244,54100:20037508.342789244,54101:20037508.342789244};return d}));