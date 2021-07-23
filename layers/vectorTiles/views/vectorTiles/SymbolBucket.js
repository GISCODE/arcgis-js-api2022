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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","dojox/string/BidiEngine","../2d/engine/webgl/Geometry","../2d/engine/webgl/TextShaping","./Bucket","./GeometryUtils","./Placement","./style/StyleLayer"],(function(t,e,a,n,o,i,r,s,l,h,c){function d(t,e){return t.iconMosaicItem&&e.iconMosaicItem?t.iconMosaicItem.page===e.iconMosaicItem.page?0:t.iconMosaicItem.page<e.iconMosaicItem.page?-1:1:t.iconMosaicItem&&!e.iconMosaicItem?1:!t.iconMosaicItem&&e.iconMosaicItem?-1:0}return function(t){function e(e,a,n,o,i,r,s,l){var h=t.call(this,e,a)||this;if(h._markerMap=new Map,h._glyphMap=new Map,h._glyphBufferDataStorage=new Map,h._sdfMarkers=!1,e.hasDataDrivenIcon!==n.isDataDriven())throw new Error("incompatible icon buffer");if(e.hasDataDrivenText!==i.isDataDriven())throw new Error("incompatible text buffer");return h._iconVertexBuffer=n,h._iconIndexBuffer=o,h._textVertexBuffer=i,h._textIndexBuffer=r,h._placementEngine=s,h._workerTileHandler=l,h}return a(e,t),Object.defineProperty(e.prototype,"markerPageMap",{get:function(){return this._markerMap},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"glyphsPageMap",{get:function(){return this._glyphMap},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sdfMarker",{get:function(){return this._sdfMarkers},enumerable:!0,configurable:!0}),e.prototype.copy=function(t,a,n,o,i){var r=new e(this.layer,this.zoom,t,a,n,o,i,this._workerTileHandler);return r.layerIndex=this.layerIndex,r.layerExtent=this.layerExtent,r._iconIndexStart=a.index,r._textIndexStart=o.index,r._iconIndexCount=0,r._textIndexCount=0,r._symbolInstances=this._symbolInstances,r._workerTileHandler=this._workerTileHandler,r._fontArray=this._fontArray,r._textLayout=this._textLayout,r._iconLayout=this._iconLayout,r._isLinePlacement=this._isLinePlacement,r._avoidEdges=this._avoidEdges,r},e.prototype.getResources=function(t,a,n){var o=this.layer,i=this.zoom,r=o.hasDataDrivenIcon,s=o.hasDataDrivenText;t&&t.setExtent(this.layerExtent);for(var l=o.getLayoutProperty("icon-image"),h=o.getLayoutProperty("text-field"),c=o.getLayoutValue("text-font",i),d=o.getLayoutValue("text-transform",i),x=[],u=[1,1,1,1],y=1,p=1,f=[1,1,1,1],g=1,m=1,_=0,v=this._features;_<v.length;_++){var I=v[_],b=I.getGeometry(t);if(b&&0!==b.length){var M=void 0;l&&(M=o.getLayoutValue("icon-image",i,I),l.isDataDriven||(M=this._replaceKeys(M,I.values)),M&&a.add(M));var z=void 0,L=!1;if(h&&(z=o.getLayoutValue("text-field",i,I),h.isDataDriven||(z=this._replaceKeys(z,I.values)),z=z.replace(/\\n/g,"\n"))){switch(d){case 2:z=z.toLowerCase();break;case 1:z=z.toUpperCase()}if(e._bidiEngine.hasBidiChar(z)){var P=void 0;P="rtl"===e._bidiEngine.checkContextual(z)?"IDNNN":"ICNNN",z=e._bidiEngine.bidiTransform(z,P,"VLYSN"),L=!0}var D=z.length;if(D>0)for(var V=0,A=c;V<A.length;V++){var S=A[V],w=n[S];w||(w=n[S]=new Set);for(var T=0;T<D;T++){var E=z.charCodeAt(T);w.add(E)}}}if(M||z){var k=o.getLayoutValue("icon-size",i,I),C=o.getLayoutValue("text-size",i,I);o.hasDataDrivenIconColor&&(u=o.getPaintValue("icon-color",i,I)),o.hasDataDrivenIconOpacity&&(y=o.getPaintValue("icon-opacity",i,I)),o.hasDataDrivenIconSize&&(p=k),o.hasDataDrivenTextColor&&(f=o.getPaintValue("text-color",i,I)),o.hasDataDrivenTextOpacity&&(g=o.getPaintValue("text-opacity",i,I)),o.hasDataDrivenTextSize&&(m=C);var B={sprite:M,label:z,rtl:L,type:I.type,geometry:b,iconSize:k,iconRotate:o.getLayoutValue("icon-rotate",i,I),ddIconValues:r?{color:u,opacity:y,size:p}:null,textSize:C,textRotate:o.getLayoutValue("text-rotate",i,I),ddTextValues:s?{color:f,opacity:g,size:m}:null};x.push(B)}}}this._symbolFeatures=x},e.prototype.processFeatures=function(t,a){t&&t.setExtent(this.layerExtent);var n,o,i,s,x,u=this.layer,y=this.zoom,p=this._isLinePlacement=1===u.getLayoutValue("symbol-placement",y),f=this._avoidEdges=u.getLayoutValue("symbol-avoid-edges",y)&&!p,g=8*u.getLayoutValue("symbol-spacing",y),m=u.getLayoutProperty("icon-image"),_=u.getLayoutProperty("text-field"),v=this._workerTileHandler;if(m&&(this._iconLayout=new c.IconLayout(u,y,p),n=v.getSpriteItems(),o=this._getTranslate(!0)),_){var I=this._textLayout=new c.TextLayout(u,y,p);this._fontArray=I.fontArray;var b=.5;switch(I.anchor){case 5:case 1:case 7:b=0;break;case 6:case 2:case 8:b=1}var M=.5;switch(I.anchor){case 5:case 3:case 6:M=0;break;case 7:case 4:case 8:M=1}var z=.5;switch(I.justify){case 0:z=0;break;case 2:z=1}var L=24*I.letterSpacing,P=p?0:24*I.maxWidth,D=24*I.lineHeight,V=[24*I.offset[0],24*I.offset[1]];i=this._fontArray.map((function(t){return v.getGlyphItems(t)})),s=new r(i,P,D,L,V,b,M,z),x=this._getTranslate(!1)}this._iconIndexStart=this._iconIndexBuffer.index,this._textIndexStart=this._textIndexBuffer.index,this._iconIndexCount=0,this._textIndexCount=0,this._markerMap.clear(),this._glyphMap.clear();var A=[];this._symbolInstances=A;var S=this._textLayout,w=1;S&&S.size&&(w=S.size/24);for(var T=S?S.maxAngle*l.C_DEG_TO_RAD:0,E=S?8*S.size:0,k=0,C=this._symbolFeatures;k<C.length;k++){var B=C[k],N=void 0;B.sprite&&(N=n[B.sprite])&&N.sdf&&(this._sdfMarkers=!0);var R=void 0,G=B.label,F=0;if(G&&(R=s.getShaping(G,B.rtl))&&R.length>0){for(var H=1e30,O=-1e30,j=0,q=R;j<q.length;j++){var K=q[j];H=Math.min(H,K.x),O=Math.max(O,K.x)}F=(O-H+48)*w*8}for(var Y=0,U=B.geometry;Y<U.length;Y++){var W=U[Y],J=void 0;if(p){if(R&&R.length>0&&S&&S.size){var Q=8*S.size*(2+Math.min(2,4*Math.abs(S.offset[1])));e._smoothVertices(W,Q)}J=e._findAnchors(W,g,F)}else J=3===B.type?e._findCentroid(W):[new h.Anchor(W[0].x,W[0].y)];for(var X=0,Z=J;X<Z.length;X++){var $=Z[X];$.x<0||$.x>4096||$.y<0||$.y>4096||(p&&F>0&&0===S.rotationAlignment&&!e._honorsTextMaxAngle(W,$,F,T,E)||A.push({shaping:R,line:W,iconMosaicItem:N,anchor:$,iconSize:B.iconSize,iconRotate:B.iconRotate,ddIconValues:B.ddIconValues,textSize:B.textSize,textRotate:B.textRotate,ddTextValues:B.ddTextValues}))}}}A.sort(d);for(var tt=0,et=A;tt<et.length;tt++){var at=et[tt];this._processFeature(at,o,x,f)}this._addPlacedGlyphs()},e.prototype.updateSymbols=function(){this._iconIndexStart=this._iconIndexBuffer.index,this._textIndexStart=this._textIndexBuffer.index,this._iconIndexCount=0,this._textIndexCount=0,this._markerMap.clear(),this._glyphMap.clear();var t,e,a=this._avoidEdges,n=this.layer;n.getLayoutProperty("icon-image")&&(t=this._getTranslate(!0)),n.getLayoutProperty("text-field")&&(e=this._getTranslate(!1));for(var o=0,i=this._symbolInstances;o<i.length;o++){var r=i[o];this._processFeature(r,t,e,a)}this._addPlacedGlyphs()},e.prototype._getTranslate=function(t){var e=this.layer.getPaintValue(t?"icon-translate":"text-translate",this.zoom);if(0!==e[0]||0!==e[1]){var a=this._placementEngine.mapAngle;if(0!==a&&0===this.layer.getPaintValue(t?"icon-translate-anchor":"text-translate-anchor",this.zoom)){var n=Math.sin(a),o=Math.cos(a);return[8*(e[0]*o-e[1]*n),8*(e[0]*n+e[1]*o)]}return[8*e[0],8*e[1]]}},e.prototype._replaceKeys=function(t,e){return t.replace(/{([^{}]+)}/g,(function(t,a){return a in e?e[a]:""}))},e.prototype._processFeature=function(t,e,a,n){var o=t.line,r=t.iconMosaicItem,s=t.shaping,h=t.anchor,c=this._iconLayout,d=c&&!!r,x=!0,u=1;d&&(c.size=t.iconSize,c.rotate=t.iconRotate,u=8*c.size,x=c.optional||!r);var y=this._textLayout,p=y&&s&&s.length>0,f=1,g=f,m=!0;p&&(y.size=t.textSize,y.rotate=t.textRotate,g=8*(f=y.size/24),m=y.optional||!s||0===s.length);var _,v,I=new i.Point(0,-17);if((d&&(_=this._placementEngine.getIconPlacement(h,e,r,u,o,c,n),h.minzoom>_.footprint.minzoom&&(_.footprint.minzoom=h.minzoom),_.footprint.minzoom===l.C_INFINITY&&(_=null)),_||x)&&(p&&(v=this._placementEngine.getTextPlacement(h,a,I,s,g,o,y,n))&&(h.minzoom>v.footprint.minzoom&&(v.footprint.minzoom=h.minzoom),v.footprint.minzoom===l.C_INFINITY&&(v=null)),v||m)){if(_&&v||(m||x?m||v?x||_||(v=null):_=null:(_=null,v=null)),_&&v&&!m&&!x){var b=Math.max(_.footprint.minzoom,v.footprint.minzoom);_.footprint.minzoom=b,v.footprint.minzoom=b}v&&(y.ignorePlacement||this._placementEngine.add(v),this._storePlacedGlyphs(v.shapes,v.footprint.minzoom,this.zoom,t.ddTextValues)),_&&(c.ignorePlacement||this._placementEngine.add(_),this._addPlacedIcons(_.shapes,_.footprint.minzoom,this.zoom,r.page,t.ddIconValues))}},e.prototype._addPlacedIcons=function(t,e,a,n,o){for(var i=Math.max(a+l.log2(e),0),r=this._iconVertexBuffer,s=this._iconIndexBuffer,h=0,c=t;h<c.length;h++){var d=c[h],x=Math.max(a+l.log2(d.minzoom),i),u=Math.min(a+l.log2(d.maxzoom),25);if(!(u<=x)){var y=d.tl,p=d.tr,f=d.bl,g=d.br,m=d.mosaicRect,_=d.labelAngle,v=d.anchor,I=r.index,b=m.x,M=m.y,z=b+m.width,L=M+m.height;r.add(v.x,v.y,y.x,y.y,b,M,_,x,u,i,o),r.add(v.x,v.y,p.x,p.y,z,M,_,x,u,i,o),r.add(v.x,v.y,f.x,f.y,b,L,_,x,u,i,o),r.add(v.x,v.y,g.x,g.y,z,L,_,x,u,i,o),s.add(I+0,I+1,I+2),s.add(I+1,I+2,I+3),this._markerMap.has(n)?this._markerMap.get(n)[1]+=6:this._markerMap.set(n,[this._iconIndexStart+this._iconIndexCount,6]),this._iconIndexCount+=2}}},e.prototype._addPlacedGlyphs=function(){var t=this,e=this._textVertexBuffer,a=this._textIndexBuffer;this._glyphBufferDataStorage.forEach((function(n,o){for(var i=0,r=n;i<r.length;i++){var s=r[i],l=e.index;e.add(s.glyphAnchor[0],s.glyphAnchor[1],s.tl[0],s.tl[1],s.xmin,s.ymin,s.labelAngle,s.minLod,s.maxLod,s.placementLod,s.ddValues),e.add(s.glyphAnchor[0],s.glyphAnchor[1],s.tr[0],s.tr[1],s.xmax,s.ymin,s.labelAngle,s.minLod,s.maxLod,s.placementLod,s.ddValues),e.add(s.glyphAnchor[0],s.glyphAnchor[1],s.bl[0],s.bl[1],s.xmin,s.ymax,s.labelAngle,s.minLod,s.maxLod,s.placementLod,s.ddValues),e.add(s.glyphAnchor[0],s.glyphAnchor[1],s.br[0],s.br[1],s.xmax,s.ymax,s.labelAngle,s.minLod,s.maxLod,s.placementLod,s.ddValues),a.add(l+0,l+1,l+2),a.add(l+1,l+2,l+3),t._glyphMap.has(o)?t._glyphMap.get(o)[1]+=6:t._glyphMap.set(o,[t._textIndexStart+t._textIndexCount,6]),t._textIndexCount+=2}})),this._glyphBufferDataStorage.clear()},e.prototype._storePlacedGlyphs=function(t,e,a,n){for(var o=Math.max(a+l.log2(e),0),i=0,r=t;i<r.length;i++){var s=r[i],h=Math.max(a+l.log2(s.minzoom),o),c=Math.min(a+l.log2(s.maxzoom),25);if(!(c<=h)){var d=s.tl,x=s.tr,u=s.bl,y=s.br,p=s.labelAngle,f=s.anchor,g=s.mosaicRect;this._glyphBufferDataStorage.has(s.page)||this._glyphBufferDataStorage.set(s.page,[]),this._glyphBufferDataStorage.get(s.page).push({glyphAnchor:[f.x,f.y],tl:[d.x,d.y],tr:[x.x,x.y],bl:[u.x,u.y],br:[y.x,y.y],xmin:g.x,ymin:g.y,xmax:g.x+g.width,ymax:g.y+g.height,labelAngle:p,minLod:h,maxLod:c,placementLod:o,ddValues:n})}}},e._findAnchors=function(t,e,a){e+=a;for(var n=0,o=t.length-1,r=0;r<o;r++)n+=i.Point.distance(t[r],t[r+1]);var s=a||e;if(n<=(s*=.5))return[];var c=s/n,d=0,x=-(e=n/Math.max(Math.round(n/e),1))/2,u=[],y=t.length-1;for(r=0;r<y;r++){for(var p=t[r],f=t[r+1],g=f.x-p.x,m=f.y-p.y,_=Math.sqrt(g*g+m*m),v=void 0;x+e<d+_;){var I=((x+=e)-d)/_,b=l.interpolate(p.x,f.x,I),M=l.interpolate(p.y,f.y,I);void 0===v&&(v=Math.atan2(m,g)),u.push(new h.Anchor(b,M,v,r,c))}d+=_}return u},e._deviation=function(t,e,a){var n=(e.x-t.x)*(a.x-e.x)+(e.y-t.y)*(a.y-e.y),o=(e.x-t.x)*(a.y-e.y)-(e.y-t.y)*(a.x-e.x);return Math.atan2(o,n)},e._honorsTextMaxAngle=function(t,e,a,n,o){for(var r=0,s=a/2,l=new i.Point(e.x,e.y),h=e.segment+1;r>-s;){if(--h<0)return!1;r-=i.Point.distance(t[h],l),l=t[h]}r+=i.Point.distance(t[h],t[h+1]);for(var c=[],d=0,x=t.length;r<s;){var u=t[h],y=h,p=void 0;do{if(++y===x)return!1;p=t[y]}while(p.isEqual(u));var f=y,g=void 0;do{if(++f===x)return!1;g=t[f]}while(g.isEqual(p));var m=this._deviation(u,p,g);for(c.push({deviation:m,distToAnchor:r}),d+=m;r-c[0].distToAnchor>o;)d-=c.shift().deviation;if(Math.abs(d)>n)return!1;r+=i.Point.distance(p,g),h=y}return!0},e._smoothVertices=function(t,e){if(!(e<=0)){var a=t.length;if(!(a<3)){var n=[],o=0;n.push(0);for(var r=1;r<a;r++)o+=i.Point.distance(t[r],t[r-1]),n.push(o);e=Math.min(e,.2*o);var s=[];s.push(t[0].x),s.push(t[0].y);var l=t[a-1].x,h=t[a-1].y,c=i.Point.sub(t[0],t[1]);c.normalize(),t[0].x+=e*c.x,t[0].y+=e*c.y,c.assignSub(t[a-1],t[a-2]),c.normalize(),t[a-1].x+=e*c.x,t[a-1].y+=e*c.y;for(r=1;r<a;r++)n[r]+=e;n[a-1]+=e;var d=.5*e;for(r=1;r<a-1;r++){for(var x=0,u=0,y=0,p=r-1;p>=0&&!(n[p+1]<n[r]-d);p--){var f=d+n[p+1]-n[r],g=n[p+1]-n[p],m=n[r]-n[p]<d?1:f/g;if(Math.abs(m)<1e-6)break;var _=m*f-.5*(z=m*m)*g,v=m*g/e,I=t[p+1],b=t[p].x-I.x,M=t[p].y-I.y;x+=v/_*(I.x*m*f+.5*z*(f*b-g*I.x)-z*m*g*b/3),u+=v/_*(I.y*m*f+.5*z*(f*M-g*I.y)-z*m*g*M/3),y+=v}for(p=r+1;p<a&&!(n[p-1]>n[r]+d);p++){f=d-n[p-1]+n[r],g=n[p]-n[p-1],m=n[p]-n[r]<d?1:f/g;if(Math.abs(m)<1e-6)break;var z;_=m*f-.5*(z=m*m)*g,v=m*g/e,I=t[p-1],b=t[p].x-I.x,M=t[p].y-I.y;x+=v/_*(I.x*m*f+.5*z*(f*b-g*I.x)-z*m*g*b/3),u+=v/_*(I.y*m*f+.5*z*(f*M-g*I.y)-z*m*g*M/3),y+=v}s.push(x/y),s.push(u/y)}s.push(l),s.push(h);for(r=0,p=0;r<a;r++)t[r].x=s[p++],t[r].y=s[p++]}}},e._findCentroid=function(t){var e=t.length-1,a=0,n=0,o=0,i=t[0].x,r=t[0].y;i>4096&&(i=4096),i<0&&(i=0),r>4096&&(r=4096),r<0&&(r=0);for(var s=1;s<e;s++){var l=t[s].x,c=t[s].y,d=t[s+1].x,x=t[s+1].y;l>4096&&(l=4096),l<0&&(l=0),c>4096&&(c=4096),c<0&&(c=0),d>4096&&(d=4096),d<0&&(d=0),x>4096&&(x=4096),x<0&&(x=0);var u=(l-i)*(x-r)-(d-i)*(c-r);a+=u*(i+l+d),n+=u*(r+c+x),o+=u}return a/=3*o,n/=3*o,isNaN(a)||isNaN(n)?[]:[new h.Anchor(a,n)]},e._bidiEngine=new o,e}(s)}));