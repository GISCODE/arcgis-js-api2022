/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../Color","../../core/lang","../../core/Logger","../../core/maybe","../../core/screenUtils","../../core/string","../../support/arcadeOnDemand","./CIMSymbolHelper","./enums","./SDFHelper","./utils","./effects/CIMEffectHelper","../../views/2d/arcade/callExpressionWithFeature","../../views/2d/engine/webgl/fontUtils"],(function(e,t,i,o,r,n,l,a,s,c,f,m,u,p,y,h){"use strict";const g=r.getLogger("esri.symbols.cim.cimAnalyzer");function d(e){switch(e){case"Butt":return f.CapType.BUTT;case"Square":return f.CapType.SQUARE;default:return f.CapType.ROUND}}function S(e){switch(e){case"Bevel":return f.JoinType.BEVEL;case"Miter":return f.JoinType.MITER;default:return f.JoinType.ROUND}}function C(e){switch(e){case"Left":default:return"left";case"Right":return"right";case"Center":return"center";case"Justify":return"justify"}}function v(e){switch(e){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function b(e){let t="",i="";if(e){const o=e.toLowerCase();-1!==o.indexOf("italic")?t="italic":-1!==o.indexOf("oblique")&&(t="oblique"),-1!==o.indexOf("bold")?i="bold":-1!==o.indexOf("light")&&(i="lighter")}return{style:t,weight:i}}function N(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}function O(e,t,i,o){let r;e[t]?r=e[t]:(r={},e[t]=r),r[i]=o}function k(e){const t=e.markerPlacement;return t&&t.angleToLine?f.Alignment.MAP:f.Alignment.SCREEN}function M(e,t,i,o,r){return I.apply(this,arguments)}function I(){return(I=t._asyncToGenerator((function*(e,t,i,o,r){const n=null!=o?o:[];if(!e)return n;let l,a;const c={};if("CIMSymbolReference"!==e.type)return g.error("Expect cim type to be 'CIMSymbolReference'"),n;if(l=e.symbol,a=e.primitiveOverrides,a){const e=[];for(const i of a){const o=i.valueExpressionInfo;if(o&&t){const r=o.expression,n=s.createRendererExpression(r,t.spatialReference,t.fields).then((e=>{e&&O(c,i.primitiveName,i.propertyName,e)}));e.push(n)}else null!=i.value&&O(c,i.primitiveName,i.propertyName,i.value)}e.length>0&&(yield Promise.all(e))}const f=[];switch(K(l,i,f),f.length>0&&(yield Promise.all(f)),l.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":H(l,a,c,t,n,i,r)}return n}))).apply(this,arguments)}function H(e,t,i,o,r,n,l){if(!e)return;const a=e.symbolLayers;if(!a)return;const s=e.effects;let m;const u=c.CIMSymbolHelper.getSize(e);"CIMPointSymbol"===e.type&&"Map"===e.angleAlignment&&(m=f.Alignment.MAP);let p=a.length;for(;p--;){const f=a[p];if(!f||!1===f.enable)continue;let y;s&&s.length&&(y=[...s]);const h=f.effects;h&&h.length&&(s?y.push(...h):y=[...h]);const d=[];let S;c.OverrideHelper.findEffectOverrides(y,t,d),S=d.length>0?U(y,d,i,o):y;const C=[];switch(c.OverrideHelper.findApplicableOverrides(f,t,C),f.type){case"CIMSolidFill":P(f,S,i,C,o,r);break;case"CIMPictureFill":L(f,S,i,C,o,n,r);break;case"CIMHatchFill":x(f,S,i,C,o,r);break;case"CIMGradientFill":w(f,S,i,C,o,r);break;case"CIMSolidStroke":X(f,S,i,C,o,r,"CIMPolygonSymbol"===e.type,u);break;case"CIMPictureStroke":z(f,S,i,C,o,r,"CIMPolygonSymbol"===e.type,u);break;case"CIMGradientStroke":J(f,S,i,C,o,r,"CIMPolygonSymbol"===e.type,u);break;case"CIMCharacterMarker":if(A(f,S,i,C,o,r))break;break;case"CIMPictureMarker":if(A(f,S,i,C,o,r))break;"CIMLineSymbol"===e.type&&(m=k(f)),E(f,S,i,C,o,n,r,m,u);break;case"CIMVectorMarker":if(A(f,S,i,C,o,r))break;"CIMLineSymbol"===e.type&&(m=k(f)),R(f,S,i,C,o,r,n,m,u,l);break;default:g.error("Cannot analyze CIM layer",f.type)}}}function P(e,t,i,o,r,n){const l=e.primitiveName,s=u.fromCIMColor(e.color),[c,f]=q(o,l,t,null),m=a.numericHash(JSON.stringify(e)+f).toString();n.push({type:"fill",templateHash:m,materialHash:c?()=>m:m,cim:e,materialOverrides:null,colorLocked:e.colorLocked,color:G(l,i,"Color",r,s,D),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:t})}function L(e,t,i,o,r,l,s){const c=e.primitiveName,f=e.tintColor?u.fromCIMColor(e.tintColor):{r:255,g:255,b:255,a:1},[m,p]=q(o,c,t,null),y=a.numericHash(JSON.stringify(e)+p).toString(),h=a.numericHash(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString();let g=u.getValue(e.scaleX);if("width"in e){const t=e.width;let i=1;const o=l.getResource(e.url);n.isSome(o)&&(i=o.width/o.height),g/=i*(e.height/t)}s.push({type:"fill",templateHash:y,materialHash:m?()=>h:h,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,color:G(c,i,"TintColor",r,f,D),height:G(c,i,"Height",r,e.height),scaleX:G(c,i,"ScaleX",r,g),angle:G(c,i,"Rotation",r,u.getValue(e.rotation)),offsetX:G(c,i,"OffsetX",r,u.getValue(e.offsetX)),offsetY:G(c,i,"OffsetY",r,u.getValue(e.offsetY)),url:e.url})}function x(e,t,i,o,r,n){const l=["Rotation","OffsetX","OffsetY"],s=o.filter((t=>t.primitiveName!==e.primitiveName&&-1===l.indexOf(t.propertyName))),c=e.primitiveName,[f,m]=q(o,c,t,null),p=a.numericHash(JSON.stringify(e)+m).toString(),y=a.numericHash(`${e.separation}${JSON.stringify(e.lineSymbol)}`).toString();n.push({type:"fill",templateHash:p,materialHash:f?B(y,i,s,r):y,cim:e,materialOverrides:s,colorLocked:e.colorLocked,effects:t,color:{r:255,g:255,b:255,a:1},height:G(c,i,"Separation",r,e.separation),scaleX:1,angle:G(c,i,"Rotation",r,u.getValue(e.rotation)),offsetX:G(c,i,"OffsetX",r,u.getValue(e.offsetX)),offsetY:G(c,i,"OffsetY",r,u.getValue(e.offsetY))})}function w(e,t,i,o,r,n){const l=e.primitiveName,[s,c]=q(o,l,t,null),f=a.numericHash(JSON.stringify(e)+c).toString();n.push({type:"fill",templateHash:f,materialHash:s?B(f,i,o,r):f,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1})}function X(e,t,i,o,r,n,l,s){const c=e.primitiveName,f=u.fromCIMColor(e.color),m=void 0!==e.width?e.width:4,p=d(e.capStyle),y=S(e.joinStyle),h=e.miterLimit,[g,C]=q(o,c,t,null),v=a.numericHash(JSON.stringify(e)+C).toString();let b,N;if(t&&t instanceof Array&&t.length>0){const e=t[t.length-1];if("CIMGeometricEffectDashes"===e.type&&"NoConstraint"===e.lineDashEnding&&null===e.offsetAlongLine){const e=(t=[...t]).pop();b=e.dashTemplate,N=e.scaleDash}}n.push({type:"line",templateHash:v,materialHash:g?()=>v:v,cim:e,materialOverrides:null,isOutline:l,colorLocked:e.colorLocked,effects:t,color:G(c,i,"Color",r,f,D),width:G(c,i,"Width",r,m),cap:G(c,i,"CapStyle",r,p),join:G(c,i,"JoinStyle",r,y),miterLimit:G(c,i,"MiterLimit",r,h),referenceWidth:s,zOrder:W(e.name),dashTemplate:b,scaleDash:N})}function z(e,t,i,o,r,n,l,s){const c=a.numericHash(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),f=e.primitiveName,m=u.fromCIMColor(e.tintColor),p=void 0!==e.width?e.width:4,y=d(e.capStyle),h=S(e.joinStyle),g=e.miterLimit,[C,v]=q(o,f,t,null),b=a.numericHash(JSON.stringify(e)+v).toString();n.push({type:"line",templateHash:b,materialHash:C?()=>c:c,cim:e,materialOverrides:null,isOutline:l,colorLocked:e.colorLocked,effects:t,color:G(f,i,"TintColor",r,m,D),width:G(f,i,"Width",r,p),cap:G(f,i,"CapStyle",r,y),join:G(f,i,"JoinStyle",r,h),miterLimit:G(f,i,"MiterLimit",r,g),referenceWidth:s,zOrder:W(e.name),dashTemplate:null,scaleDash:!1,url:e.url})}function J(e,t,i,o,r,n,l,s){const c=e.primitiveName,f=void 0!==e.width?e.width:4,m=d(e.capStyle),u=S(e.joinStyle),p=e.miterLimit,[y,h]=q(o,c,t,null),g=a.numericHash(JSON.stringify(e)+h).toString();n.push({type:"line",templateHash:g,materialHash:y?B(g,i,o,r):g,cim:e,materialOverrides:null,isOutline:l,colorLocked:e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},width:G(c,i,"Width",r,f),cap:G(c,i,"CapStyle",r,m),join:G(c,i,"JoinStyle",r,u),miterLimit:G(c,i,"MiterLimit",r,p),referenceWidth:s,zOrder:W(e.name),dashTemplate:null,scaleDash:!1})}function A(e,t,i,o,r,n){const l=e.markerPlacement;if(!l||"CIMMarkerPlacementInsidePolygon"!==l.type)return!1;const s=l,c=["Rotation","OffsetX","OffsetY"],f=o.filter((t=>t.primitiveName!==e.primitiveName&&-1===c.indexOf(t.propertyName))),m="url"in e?e.url:null,[p,y]=q(o,s.primitiveName,t,null),h=a.numericHash(JSON.stringify(e)+y).toString();let g=s.stepY,d=null,S=1;return l.shiftOddRows&&(g*=2,d=function(e){return e?2*e:0},S=.5),n.push({type:"fill",templateHash:h,materialHash:p?B(h,i,f,r):h,cim:e,materialOverrides:f,colorLocked:e.colorLocked,effects:t,color:{r:255,g:255,b:255,a:1},height:G(s.primitiveName,i,"StepY",r,g,d),scaleX:S,angle:G(s.primitiveName,i,"GridAngle",r,s.gridAngle),offsetX:G(s.primitiveName,i,"OffsetX",r,u.getValue(s.offsetX)),offsetY:G(s.primitiveName,i,"OffsetY",r,u.getValue(s.offsetY)),url:m}),!0}function E(e,t,i,o,r,l,s,c,f){var m;const p=e.primitiveName,y=u.getValue(e.size);let h=u.getValue(e.scaleX);const g=u.getValue(e.rotation),d=u.getValue(e.offsetX),S=u.getValue(e.offsetY),C=e.tintColor?u.fromCIMColor(e.tintColor):{r:255,g:255,b:255,a:1},v=a.numericHash(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),b=j(e.markerPlacement,o,i,r),[N,O]=q(o,p,t,b),k=a.numericHash(JSON.stringify(e)+O).toString(),M=null!=(m=e.anchorPoint)?m:{x:0,y:0};if("width"in e){const t=e.width;let i=1;const o=l.getResource(e.url);n.isSome(o)&&(i=o.width/o.height),h/=i*(y/t)}s.push({type:"marker",templateHash:k,materialHash:N?()=>v:v,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:!1,alignment:c,size:G(p,i,"Size",r,y),scaleX:G(p,i,"ScaleX",r,h),rotation:G(p,i,"Rotation",r,g),offsetX:G(p,i,"OffsetX",r,d),offsetY:G(p,i,"OffsetY",r,S),color:G(p,i,"TintColor",r,C,D),anchorPoint:{x:M.x,y:-M.y},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:e.rotateClockwise,referenceSize:f,sizeRatio:1,markerPlacement:e.markerPlacement,url:e.url})}function R(e,t,i,o,r,n,l,a,s,c){const f=e.markerGraphics;if(!f)return;let m=0;if(e.scaleSymbolsProportionally){const t=e.frame;t&&(m=t.ymax-t.ymin)}const u=j(e.markerPlacement,o,i,r);for(const p of f)if(p){const f=p.symbol;if(!f)continue;switch(f.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":Y(e,t,u,p,o,i,r,n,l,a,s,m,c);break;case"CIMTextSymbol":V(e,t,u,p,i,o,r,n,a,s,m)}}}function V(e,t,i,o,r,n,l,s,f,m,p){const y=[];c.OverrideHelper.findApplicableOverrides(o,n,y);const g=o.geometry;if(!("x"in g)||!("y"in g))return;const d=o.symbol,S=N(d),O=b(d.fontStyleName),k=h.getFontFamily(d.fontFamilyName);d.font={family:k,decoration:S,...O};const M=e.frame,I=g.x-.5*(M.xmin+M.xmax),H=g.y-.5*(M.ymin+M.ymax),P=e.size/p,L=e.primitiveName,x=u.getValue(d.height)*P,w=u.getValue(d.angle),X=u.getValue(e.offsetX)+(u.getValue(d.offsetX)+I)*P,z=u.getValue(e.offsetY)+(u.getValue(d.offsetY)+H)*P,J=u.fromCIMColor(c.CIMSymbolHelper.getFillColor(d));let A=u.fromCIMColor(c.CIMSymbolHelper.getStrokeColor(d)),E=c.CIMSymbolHelper.getStrokeWidth(d);E||(A=u.fromCIMColor(c.CIMSymbolHelper.getFillColor(d.haloSymbol)),E=d.haloSize*P);const[R,V]=q(n,L,t,i),Y=JSON.stringify(e.effects)+Number(e.colorLocked)+JSON.stringify(e.anchorPoint)+e.anchorPointUnits+JSON.stringify(e.markerPlacement),T=a.numericHash(JSON.stringify(o)+Y+V).toString();let F=G(o.primitiveName,r,"TextString",l,o.textString,u._adjustTextCase,d.textCase);if(null==F)return;const{fontStyleName:$}=d,W=k+($?"-"+$.toLowerCase():"-regular"),D=W;"string"==typeof F&&F.indexOf("[")>-1&&d.fieldMap&&(F=u.createLabelOverrideFunction(d.fieldMap,F,d.textCase)),s.push({type:"text",templateHash:T,materialHash:R||"function"==typeof F||F.match(/\[(.*?)\]/)?(e,t,i)=>D+"-"+u.evaluateValueOrFunction(F,e,t,i):D+"-"+a.numericHash(F),cim:d,materialOverrides:null,colorLocked:e.colorLocked,effects:t,alignment:f,anchorPoint:{x:e.anchorPoint?e.anchorPoint.x:0,y:e.anchorPoint?e.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,fontName:W,decoration:S,weight:G(L,r,"Weight",l,O.weight),style:G(L,r,"Size",l,O.style),size:G(L,r,"Size",l,x),angle:G(L,r,"Rotation",l,w),offsetX:G(L,r,"OffsetX",l,X),offsetY:G(L,r,"OffsetY",l,z),horizontalAlignment:C(d.horizontalAlignment),verticalAlignment:v(d.verticalAlignment),text:F,color:J,outlineColor:A,outlineSize:E,referenceSize:m,sizeRatio:1,markerPlacement:i})}function Y(e,t,i,o,r,l,s,f,y,h,g,d,S){const C=o.symbol,v=C.symbolLayers;if(!v)return;if(S)return void F(e,t,i,o,l,r,s,f,y,h,g,d);let b=v.length;if(Q(v))return void T(e,t,i,o,v,r,l,s,f,h,g,d);const N=p.CIMEffectHelper.applyEffects(C.effects,o.geometry,y.geometryEngine);if(N)for(;b--;){const S=v[b];if(S&&!1!==S.enable)switch(S.type){case"CIMSolidFill":case"CIMSolidStroke":{var O;const C=p.CIMEffectHelper.applyEffects(S.effects,N,y.geometryEngine),v=m.getExtent(C);if(!v)continue;const[b,k,M]=m.getSDFMetrics(v,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),I="CIMSolidFill"===S.type,H={type:"sdf",geom:C,asFill:I},P=e.primitiveName,L=null!=(O=u.getValue(e.size))?O:10,x=u.getValue(e.rotation),w=u.getValue(e.offsetX),X=u.getValue(e.offsetY),z=S.path,J=S.primitiveName,A=I?u.fromCIMColor(c.CIMSymbolHelper.getFillColor(S)):u.fromCIMColor(c.CIMSymbolHelper.getStrokeColor(S)),E=I?{r:0,g:0,b:0,a:0}:u.fromCIMColor(c.CIMSymbolHelper.getStrokeColor(S)),R=c.CIMSymbolHelper.getStrokeWidth(S);if(!I&&!R)break;let V=!1,Y="";for(const e of r)e.primitiveName!==J&&e.primitiveName!==P||(void 0!==e.value?Y+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`:e.valueExpressionInfo&&(V=!0));n.isSome(t)&&"function"==typeof t&&(V=!0);const T=JSON.stringify({...e,markerGraphics:null}),F=a.numericHash(JSON.stringify(H)+z).toString(),$={type:"marker",templateHash:a.numericHash(JSON.stringify(o)+JSON.stringify(S)+T+Y).toString(),materialHash:V?()=>F:F,cim:H,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:h,anchorPoint:{x:k,y:M},isAbsoluteAnchorPoint:!1,size:G(e.primitiveName,l,"Size",s,L),rotation:G(e.primitiveName,l,"Rotation",s,x),offsetX:G(e.primitiveName,l,"OffsetX",s,w),offsetY:G(e.primitiveName,l,"OffsetY",s,X),scaleX:1,frameHeight:d,rotateClockwise:e.rotateClockwise,referenceSize:g,sizeRatio:b,color:G(J,l,"Color",s,A,D),outlineColor:G(J,l,"Color",s,E,D),outlineWidth:G(J,l,"Width",s,R),markerPlacement:i,path:z};f.push($);break}default:F(e,t,i,o,l,r,s,f,y,h,g,d)}}}function T(e,t,i,o,r,n,l,s,f,p,y,h){const g=o.geometry,d=r[0],S=r[1],C=m.getExtent(g);if(!C)return;const[v,b,N]=m.getSDFMetrics(C,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),O={type:"sdf",geom:g,asFill:!0},k=e.primitiveName,M=u.getValue(e.size),I=u.getValue(e.rotation),H=u.getValue(e.offsetX),P=u.getValue(e.offsetY),L=S.path,x=S.primitiveName,w=d.primitiveName,X=u.fromCIMColor(c.CIMSymbolHelper.getFillColor(S)),z=u.fromCIMColor(c.CIMSymbolHelper.getStrokeColor(d)),J=c.CIMSymbolHelper.getStrokeWidth(d);let A=!1,E="";for(const a of n)a.primitiveName!==x&&a.primitiveName!==w&&a.primitiveName!==k||(void 0!==a.value?E+=`-${a.primitiveName}-${a.propertyName}-${JSON.stringify(a.value)}`:a.valueExpressionInfo&&(A=!0));const R=JSON.stringify({...e,markerGraphics:null}),V=a.numericHash(JSON.stringify(O)+L).toString(),Y={type:"marker",templateHash:a.numericHash(JSON.stringify(o)+JSON.stringify(S)+JSON.stringify(d)+R+E).toString(),materialHash:A?()=>V:V,cim:O,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:p,anchorPoint:{x:b,y:N},isAbsoluteAnchorPoint:!1,size:G(e.primitiveName,l,"Size",s,M),rotation:G(e.primitiveName,l,"Rotation",s,I),offsetX:G(e.primitiveName,l,"OffsetX",s,H),offsetY:G(e.primitiveName,l,"OffsetY",s,P),scaleX:1,frameHeight:h,rotateClockwise:e.rotateClockwise,referenceSize:y,sizeRatio:v,color:G(x,l,"Color",s,X,D),outlineColor:G(w,l,"Color",s,z,D),outlineWidth:G(w,l,"Width",s,J),markerPlacement:i,path:L};f.push(Y)}function F(e,t,i,o,r,s,f,m,p,y,h,g){const d=$(e,o);let S=[];const C=["Rotation","OffsetX","OffsetY"];S=s.filter((t=>t.primitiveName!==e.primitiveName||-1===C.indexOf(t.propertyName)));let v="";for(const n of s)void 0!==n.value&&(v+=`-${n.primitiveName}-${n.propertyName}-${JSON.stringify(n.value)}`);const[b,N,O]=c.CIMSymbolHelper.getTextureAnchor(d,p),k=e.primitiveName,M=u.getValue(e.rotation),I=u.getValue(e.offsetX),H=u.getValue(e.offsetY),P=a.numericHash(JSON.stringify(d)+v).toString(),L={type:"marker",templateHash:P,materialHash:S.length>0||n.isSome(t)&&"function"==typeof t?B(P,r,S,f):P,cim:d,materialOverrides:S,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:y,anchorPoint:{x:b,y:N},isAbsoluteAnchorPoint:!1,size:e.size,rotation:G(k,r,"Rotation",f,M),offsetX:G(k,r,"OffsetX",f,I),offsetY:G(k,r,"OffsetY",f,H),color:{r:255,g:255,b:255,a:1},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:g,rotateClockwise:e.rotateClockwise,referenceSize:h,sizeRatio:O/l.pt2px(e.size),markerPlacement:i};m.push(L)}function $(e,t){return{type:e.type,enable:!0,name:e.name,colorLocked:e.colorLocked,primitiveName:e.primitiveName,anchorPoint:e.anchorPoint,anchorPointUnits:e.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:e.rotateClockwise,rotation:0,size:e.size,billboardMode3D:e.billboardMode3D,depth3D:e.depth3D,frame:e.frame,markerGraphics:[t],scaleSymbolsProportionally:e.scaleSymbolsProportionally,respectFrame:e.respectFrame,clippingPath:e.clippingPath}}function W(e){if(e&&0===e.indexOf("Level_")){const t=parseInt(e.substr(6),10);if(!isNaN(t))return t}return 0}function D(e){if(!e||0===e.length)return null;const t=new i(e).toRgba();return{r:t[0],g:t[1],b:t[2],a:t[3]}}function G(e,t,i,o,r,n,l){const a=t[e];if(a){const e=a[i];if("string"==typeof e||"number"==typeof e||e instanceof Array)return n?n.call(null,e,l):e;if(null!=e&&e instanceof s.ArcadeExpression)return(t,i,a)=>{let s=y(e,t,{$view:a},o.geometryType,i);return null!==s&&n&&(s=n.call(null,s,l)),null!==s?s:r}}return r}function U(e,t,i,r){for(const o of t){if(o.valueExpressionInfo){const e=i[o.primitiveName]&&i[o.primitiveName][o.propertyName];e instanceof s.ArcadeExpression&&(o.fn=(t,i,o)=>y(e,t,{$view:o},r.geometryType,i))}}const n=e=>e?e.charAt(0).toLowerCase()+e.substr(1):e;return(i,r,l)=>{for(const e of t)e.fn&&(e.value=e.fn(i,r,l));const a=[];for(let c of e){var s;const e=null==(s=c)?void 0:s.primitiveName;if(e){let i=!1;for(const r of t)if(r.primitiveName===e){const e=n(r.propertyName);null!=r.value&&r.value!==c[e]&&(i||(c=o.clone(c),i=!0),c[e]=r.value)}}a.push(c)}return a}}function j(e,t,i,r){const n=[];if(c.OverrideHelper.findApplicableOverrides(e,t,n),0===n.length)return e;for(const o of n){if(o.valueExpressionInfo){const e=i[o.primitiveName]&&i[o.primitiveName][o.propertyName];e instanceof s.ArcadeExpression&&(o.fn=(t,i,o)=>y(e,t,{$view:o},r.geometryType,i))}}const l=e=>e?e.charAt(0).toLowerCase()+e.substr(1):e;return(t,i,r)=>{for(const e of n)e.fn&&(e.value=e.fn(t,i,r));const a=o.clone(e),s=e.primitiveName;for(const e of n)if(e.primitiveName===s){const t=l(e.propertyName);null!=e.value&&e.value!==a[t]&&(a[t]=e.value)}return a}}function B(e,t,i,o){for(const r of i){if(r.valueExpressionInfo){const e=t[r.primitiveName]&&t[r.primitiveName][r.propertyName];e instanceof s.ArcadeExpression&&(r.fn=(t,i,r)=>y(e,t,{$view:r},o.geometryType,i))}}return(t,o,r)=>{for(const e of i)e.fn&&(e.value=e.fn(t,o,r));return a.numericHash(e+c.OverrideHelper.buildOverrideKey(i)).toString()}}function _(e,t){if(!t||0===t.length)return e;const i=JSON.parse(JSON.stringify(e));return c.OverrideHelper.applyOverrides(i,t),i}function q(e,t,i,o){let r=!1,l="";for(const n of e)n.primitiveName===t&&(void 0!==n.value?l+=`-${n.primitiveName}-${n.propertyName}-${JSON.stringify(n.value)}`:n.valueExpressionInfo&&(r=!0));return n.isSome(i)&&"function"==typeof i&&(r=!0),n.isSome(o)&&"function"==typeof o&&(r=!0),[r,l]}function K(e,t,i){if(e&&t)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{const o=e.symbolLayers;if(!o)return;for(const e of o)switch(ee(e,t,i),e.type){case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMCharacterMarker":case"CIMPictureMarker":"url"in e&&e.url&&i.push(t.fetchResource(e.url,null));break;case"CIMVectorMarker":{const o=e.markerGraphics;if(!o)continue;for(const e of o)if(e){const o=e.symbol;o&&K(o,t,i)}}}}}}const Q=e=>e&&2===e.length&&e[0].enable&&e[1].enable&&"CIMSolidStroke"===e[0].type&&"CIMSolidFill"===e[1].type&&!e[0].effects&&!e[1].effects;let Z;function ee(e,t,i){if(!e.effects||n.isSome(t.geometryEngine))return;if(Z)return void i.push(Z);u.isGeometryEngineRequired(e.effects)&&(Z=u.importGeometryEngine(),i.push(Z),Z.then((e=>t.geometryEngine=e)))}e.analyzeCIMResource=_,e.analyzeCIMSymbol=M,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
