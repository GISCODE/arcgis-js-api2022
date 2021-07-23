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

define([],(function(){"use strict";function r(t,e,n,u){this.message=t,this.expected=e,this.found=n,this.location=u,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,r)}return function(r,t){function e(){this.constructor=r}e.prototype=t.prototype,r.prototype=new e}(r,Error),r.buildMessage=function(r,t){var e={literal:function(r){return'"'+u(r.text)+'"'},class:function(r){var t,e="";for(t=0;t<r.parts.length;t++)e+=r.parts[t]instanceof Array?o(r.parts[t][0])+"-"+o(r.parts[t][1]):o(r.parts[t]);return"["+(r.inverted?"^":"")+e+"]"},any:function(r){return"any character"},end:function(r){return"end of input"},other:function(r){return r.description}};function n(r){return r.charCodeAt(0).toString(16).toUpperCase()}function u(r){return r.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(r){return"\\x0"+n(r)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(r){return"\\x"+n(r)}))}function o(r){return r.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(r){return"\\x0"+n(r)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(r){return"\\x"+n(r)}))}return"Expected "+function(r){var t,n,u,o=new Array(r.length);for(t=0;t<r.length;t++)o[t]=(u=r[t],e[u.type](u));if(o.sort(),o.length>0){for(t=1,n=1;t<o.length;t++)o[t-1]!==o[t]&&(o[n]=o[t],n++);o.length=n}switch(o.length){case 1:return o[0];case 2:return o[0]+" or "+o[1];default:return o.slice(0,-1).join(", ")+", or "+o[o.length-1]}}(r)+" but "+function(r){return r?'"'+u(r)+'"':"end of input"}(t)+" found."},{SyntaxError:r,parse:function(t,e){e=void 0!==e?e:{};var n,u={},o={start:kr},a=kr,i=function(r,t){var e={type:"expr_list"},n=function(r,t,e){return function(r,t){for(var e=[r],n=0;n<t.length;n++)e.push(t[n][3]);return e}(r,t)}(r,t);return e.value=n,e},s=function(r,t){return $t(r,t)},c=zr("!",!1),l=zr("=",!1),f=zr(">=",!1),v=zr(">",!1),p=zr("<=",!1),d=zr("<>",!1),h=zr("<",!1),b=zr("!=",!1),y=function(r){return r[0]+" "+r[2]},A=zr("+",!1),C=zr("-",!1),g=zr("*",!1),E=zr("/",!1),m=function(r,t){return r+t.join("")},L=/^[A-Za-z_\x80-\uFFFF]/,T=Gr([["A","Z"],["a","z"],"_",["","￿"]],!1,!1),w=/^[A-Za-z0-9_]/,x=Gr([["A","Z"],["a","z"],["0","9"],"_"],!1,!1),N=/^[A-Za-z0-9_.\x80-\uFFFF]/,R=Gr([["A","Z"],["a","z"],["0","9"],"_",".",["","￿"]],!1,!1),_=zr("@",!1),I=function(r){return{type:"interval-period",period:r.value,precision:null,secondary:null}},O=function(r,t){return{type:"interval-period",period:"second",precision:r,secondary:t}},F=function(r){return parseFloat(r)},S=zr("'",!1),M=zr("N'",!1),D=zr("''",!1),H=/^[^']/,U=Gr(["'"],!0,!1),B=function(r,t){return{type:"when_clause",operand:r,value:t}},P=zr(".",!1),z=/^[0-9]/,G=Gr([["0","9"]],!1,!1),Z=/^[eE]/,j=Gr(["e","E"],!1,!1),W=/^[+\-]/,Y=Gr(["+","-"],!1,!1),k=zr("NULL",!0),q=zr("TRUE",!0),K=zr("FALSE",!0),V=zr("IN",!0),X=zr("IS",!0),$=zr("LIKE",!0),J=zr("ESCAPE",!0),Q=zr("NOT",!0),rr=zr("AND",!0),tr=zr("OR",!0),er=zr("BETWEEN",!0),nr=zr("FROM",!0),ur=zr("FOR",!0),or=zr("SUBSTRING",!0),ar=zr("EXTRACT",!0),ir=zr("TRIM",!0),sr=zr("POSITION",!0),cr=zr("TIMESTAMP",!0),lr=zr("DATE",!0),fr=zr("LEADING",!0),vr=zr("TRAILING",!0),pr=zr("BOTH",!0),dr=zr("TO",!0),hr=zr("INTERVAL",!0),br=zr("YEAR",!0),yr=zr("MONTH",!0),Ar=zr("DAY",!0),Cr=zr("HOUR",!0),gr=zr("MINUTE",!0),Er=zr("SECOND",!0),mr=zr("CASE",!0),Lr=zr("END",!0),Tr=zr("WHEN",!0),wr=zr("THEN",!0),xr=zr("ELSE",!0),Nr=zr(",",!1),Rr=zr("(",!1),_r=zr(")",!1),Ir=/^[ \t\n\r]/,Or=Gr([" ","\t","\n","\r"],!1,!1),Fr=zr("`",!1),Sr=/^[^`]/,Mr=Gr(["`"],!0,!1),Dr=0,Hr=[{line:1,column:1}],Ur=0,Br=[],Pr=0;if("startRule"in e){if(!(e.startRule in o))throw new Error("Can't start parsing from rule \""+e.startRule+'".');a=o[e.startRule]}function zr(r,t){return{type:"literal",text:r,ignoreCase:t}}function Gr(r,t,e){return{type:"class",parts:r,inverted:t,ignoreCase:e}}function Zr(r){var e,n=Hr[r];if(n)return n;for(e=r-1;!Hr[e];)e--;for(n={line:(n=Hr[e]).line,column:n.column};e<r;)10===t.charCodeAt(e)?(n.line++,n.column=1):n.column++,e++;return Hr[r]=n,n}function jr(r,t){var e=Zr(r),n=Zr(t);return{start:{offset:r,line:e.line,column:e.column},end:{offset:t,line:n.line,column:n.column}}}function Wr(r){Dr<Ur||(Dr>Ur&&(Ur=Dr,Br=[]),Br.push(r))}function Yr(t,e,n){return new r(r.buildMessage(t,e),t,e,n)}function kr(){var r,t;return r=Dr,Kt()!==u&&(t=Kr())!==u&&Kt()!==u?(r,r=t):(Dr=r,r=u),r}function qr(){var r,t,e,n,o,a,s,c;if(r=Dr,(t=Kr())!==u){for(e=[],n=Dr,(o=Kt())!==u&&(a=Yt())!==u&&(s=Kt())!==u&&(c=Kr())!==u?n=o=[o,a,s,c]:(Dr=n,n=u);n!==u;)e.push(n),n=Dr,(o=Kt())!==u&&(a=Yt())!==u&&(s=Kt())!==u&&(c=Kr())!==u?n=o=[o,a,s,c]:(Dr=n,n=u);e!==u?(r,r=t=i(t,e)):(Dr=r,r=u)}else Dr=r,r=u;return r}function Kr(){var r,t,e,n,o,a,i,c;if(r=Dr,(t=Vr())!==u){for(e=[],n=Dr,(o=Kt())!==u&&(a=It())!==u&&(i=Kt())!==u&&(c=Vr())!==u?n=o=[o,a,i,c]:(Dr=n,n=u);n!==u;)e.push(n),n=Dr,(o=Kt())!==u&&(a=It())!==u&&(i=Kt())!==u&&(c=Vr())!==u?n=o=[o,a,i,c]:(Dr=n,n=u);e!==u?(r,r=t=s(t,e)):(Dr=r,r=u)}else Dr=r,r=u;return r}function Vr(){var r,t,e,n,o,a,i,c;if(r=Dr,(t=Xr())!==u){for(e=[],n=Dr,(o=Kt())!==u&&(a=_t())!==u&&(i=Kt())!==u&&(c=Xr())!==u?n=o=[o,a,i,c]:(Dr=n,n=u);n!==u;)e.push(n),n=Dr,(o=Kt())!==u&&(a=_t())!==u&&(i=Kt())!==u&&(c=Xr())!==u?n=o=[o,a,i,c]:(Dr=n,n=u);e!==u?(r,r=t=s(t,e)):(Dr=r,r=u)}else Dr=r,r=u;return r}function Xr(){var r,e,n,o,a;return r=Dr,(e=Rt())===u&&(e=Dr,33===t.charCodeAt(Dr)?(n="!",Dr++):(n=u,0===Pr&&Wr(c)),n!==u?(o=Dr,Pr++,61===t.charCodeAt(Dr)?(a="=",Dr++):(a=u,0===Pr&&Wr(l)),Pr--,a===u?o=void 0:(Dr=o,o=u),o!==u?e=n=[n,o]:(Dr=e,e=u)):(Dr=e,e=u)),e!==u&&(n=Kt())!==u&&(o=Xr())!==u?(r,r=e={type:"unary_expr",operator:"NOT",expr:o}):(Dr=r,r=u),r===u&&(r=function(){var r,e,n;r=Dr,(e=rt())!==u&&Kt()!==u?((n=function(){var r;(r=function(){var r,t,e,n,o,a,i;r=Dr,t=[],e=Dr,(n=Kt())!==u&&(o=$r())!==u&&(a=Kt())!==u&&(i=rt())!==u?e=n=[n,o,a,i]:(Dr=e,e=u);if(e!==u)for(;e!==u;)t.push(e),e=Dr,(n=Kt())!==u&&(o=$r())!==u&&(a=Kt())!==u&&(i=rt())!==u?e=n=[n,o,a,i]:(Dr=e,e=u);else t=u;t!==u&&(r,t={type:"arithmetic",tail:t});return r=t}())===u&&(r=function(){var r,t,e,n;r=Dr,(t=Qr())!==u&&Kt()!==u&&(e=kt())!==u&&Kt()!==u&&(n=qr())!==u&&Kt()!==u&&qt()!==u?(r,r=t={op:t,right:n}):(Dr=r,r=u);r===u&&(r=Dr,(t=Qr())!==u&&Kt()!==u&&(e=kt())!==u&&Kt()!==u&&(n=qt())!==u?(r,t=function(r){return{op:r,right:{type:"expr_list",value:[]}}}(t),r=t):(Dr=r,r=u),r===u&&(r=Dr,(t=Qr())!==u&&Kt()!==u&&(e=ct())!==u?(r,t=function(r,t){return{op:r,right:t}}(t,e),r=t):(Dr=r,r=u)));return r}())===u&&(r=function(){var r,t,e,n,o,a;r=Dr,(t=Rt())!==u&&Kt()!==u&&(e=Ot())!==u&&Kt()!==u&&(n=rt())!==u&&Kt()!==u&&(o=_t())!==u&&Kt()!==u&&(a=rt())!==u?(r,r=t={op:"NOT"+e,right:{type:"expr_list",value:[n,a]}}):(Dr=r,r=u);r===u&&(r=Dr,(t=Ot())!==u&&Kt()!==u&&(e=rt())!==u&&Kt()!==u&&(n=_t())!==u&&Kt()!==u&&(o=rt())!==u?(r,t=function(r,t,e){return{op:r,right:{type:"expr_list",value:[t,e]}}}(t,e,o),r=t):(Dr=r,r=u));return r}())===u&&(r=function(){var r,t,e,n;r=Dr,(t=xt())!==u&&Kt()!==u&&(e=Rt())!==u&&Kt()!==u&&(n=rt())!==u?(r,r=t={op:t+"NOT",right:n}):(Dr=r,r=u);r===u&&(r=Dr,(t=xt())!==u&&Kt()!==u&&(e=rt())!==u?(r,t=function(r,t){return{op:r,right:t}}(t,e),r=t):(Dr=r,r=u));return r}())===u&&(r=function(){var r,e,n,o;r=Dr,(e=Jr())!==u&&Kt()!==u&&(n=ht())!==u&&Kt()!==u&&function(){var r,e,n,o;r=Dr,"escape"===t.substr(Dr,6).toLowerCase()?(e=t.substr(Dr,6),Dr+=6):(e=u,0===Pr&&Wr(J));e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="ESCAPE"):(Dr=r,r=u)):(Dr=r,r=u);return r}()!==u&&Kt()!==u&&(o=bt())!==u?(r,e={op:e,right:n,escape:o.value},r=e):(Dr=r,r=u);r===u&&(r=Dr,(e=Jr())!==u&&Kt()!==u&&(n=ht())!==u?(r,e=function(r,t){return{op:r,right:t,escape:""}}(e,n),r=e):(Dr=r,r=u));return r}());return r}())===u&&(n=null),n!==u?(r,e=function(r,t){if(""==t||null==t||null==t)return r;return"arithmetic"==t.type?$t(r,t.tail):Xt(t.op,r,t.right,t.escape)}(e,n),r=e):(Dr=r,r=u)):(Dr=r,r=u);return r}()),r}function $r(){var r;return">="===t.substr(Dr,2)?(r=">=",Dr+=2):(r=u,0===Pr&&Wr(f)),r===u&&(62===t.charCodeAt(Dr)?(r=">",Dr++):(r=u,0===Pr&&Wr(v)),r===u&&("<="===t.substr(Dr,2)?(r="<=",Dr+=2):(r=u,0===Pr&&Wr(p)),r===u&&("<>"===t.substr(Dr,2)?(r="<>",Dr+=2):(r=u,0===Pr&&Wr(d)),r===u&&(60===t.charCodeAt(Dr)?(r="<",Dr++):(r=u,0===Pr&&Wr(h)),r===u&&(61===t.charCodeAt(Dr)?(r="=",Dr++):(r=u,0===Pr&&Wr(l)),r===u&&("!="===t.substr(Dr,2)?(r="!=",Dr+=2):(r=u,0===Pr&&Wr(b)))))))),r}function Jr(){var r,t,e,n,o;return r=Dr,t=Dr,(e=Rt())!==u&&(n=Kt())!==u&&(o=Nt())!==u?t=e=[e,n,o]:(Dr=t,t=u),t!==u&&(r,t=y(t)),(r=t)===u&&(r=Nt()),r}function Qr(){var r,t,e,n,o;return r=Dr,t=Dr,(e=Rt())!==u&&(n=Kt())!==u&&(o=wt())!==u?t=e=[e,n,o]:(Dr=t,t=u),t!==u&&(r,t=y(t)),(r=t)===u&&(r=wt()),r}function rt(){var r,t,e,n,o,a,i,c;if(r=Dr,(t=et())!==u){for(e=[],n=Dr,(o=Kt())!==u&&(a=tt())!==u&&(i=Kt())!==u&&(c=et())!==u?n=o=[o,a,i,c]:(Dr=n,n=u);n!==u;)e.push(n),n=Dr,(o=Kt())!==u&&(a=tt())!==u&&(i=Kt())!==u&&(c=et())!==u?n=o=[o,a,i,c]:(Dr=n,n=u);e!==u?(r,r=t=s(t,e)):(Dr=r,r=u)}else Dr=r,r=u;return r}function tt(){var r;return 43===t.charCodeAt(Dr)?(r="+",Dr++):(r=u,0===Pr&&Wr(A)),r===u&&(45===t.charCodeAt(Dr)?(r="-",Dr++):(r=u,0===Pr&&Wr(C))),r}function et(){var r,t,e,n,o,a,i,s;if(r=Dr,(t=ut())!==u){for(e=[],n=Dr,(o=Kt())!==u&&(a=nt())!==u&&(i=Kt())!==u&&(s=ut())!==u?n=o=[o,a,i,s]:(Dr=n,n=u);n!==u;)e.push(n),n=Dr,(o=Kt())!==u&&(a=nt())!==u&&(i=Kt())!==u&&(s=ut())!==u?n=o=[o,a,i,s]:(Dr=n,n=u);e!==u?(r,r=t=$t(t,e)):(Dr=r,r=u)}else Dr=r,r=u;return r}function nt(){var r;return 42===t.charCodeAt(Dr)?(r="*",Dr++):(r=u,0===Pr&&Wr(g)),r===u&&(47===t.charCodeAt(Dr)?(r="/",Dr++):(r=u,0===Pr&&Wr(E))),r}function ut(){var r,e,n;return(r=function(){var r;(r=bt())===u&&(r=function(){var r,t,e,n;r=Dr,(t=function(){var r,t,e,n;r=Dr,(t=gt())!==u&&(e=Et())!==u&&(n=mt())!==u?(r,t=parseFloat(t+e+n),r=t):(Dr=r,r=u);r===u&&(r=Dr,(t=gt())!==u&&(e=Et())!==u?(r,t=function(r,t){return parseFloat(r+t)}(t,e),r=t):(Dr=r,r=u),r===u&&(r=Dr,(t=gt())!==u&&(e=mt())!==u?(r,t=function(r,t){return parseFloat(r+t)}(t,e),r=t):(Dr=r,r=u),r===u&&(r=Dr,(t=gt())!==u&&(r,t=function(r){return parseFloat(r)}(t)),r=t)));return r}())!==u?(e=Dr,Pr++,n=at(),Pr--,n===u?e=void 0:(Dr=e,e=u),e!==u?(r,r=t={type:"number",value:t}):(Dr=r,r=u)):(Dr=r,r=u);return r}())===u&&(r=function(){var r,e;r=Dr,(e=function(){var r,e,n,o;r=Dr,"true"===t.substr(Dr,4).toLowerCase()?(e=t.substr(Dr,4),Dr+=4):(e=u,0===Pr&&Wr(q));e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?r=e=[e,n]:(Dr=r,r=u)):(Dr=r,r=u);return r}())!==u&&(r,e={type:"bool",value:!0});(r=e)===u&&(r=Dr,(e=function(){var r,e,n,o;r=Dr,"false"===t.substr(Dr,5).toLowerCase()?(e=t.substr(Dr,5),Dr+=5):(e=u,0===Pr&&Wr(K));e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?r=e=[e,n]:(Dr=r,r=u)):(Dr=r,r=u);return r}())!==u&&(r,e={type:"bool",value:!1}),r=e);return r}())===u&&(r=function(){var r,e;r=Dr,(e=function(){var r,e,n,o;r=Dr,"null"===t.substr(Dr,4).toLowerCase()?(e=t.substr(Dr,4),Dr+=4):(e=u,0===Pr&&Wr(k));e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?r=e=[e,n]:(Dr=r,r=u)):(Dr=r,r=u);return r}())!==u&&(r,e={type:"null",value:null});return r=e}())===u&&(r=function(){var r,e,n;r=Dr,(e=function(){var r,e,n,o;r=Dr,"date"===t.substr(Dr,4).toLowerCase()?(e=t.substr(Dr,4),Dr+=4):(e=u,0===Pr&&Wr(lr));e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="DATE"):(Dr=r,r=u)):(Dr=r,r=u);return r}())!==u&&Kt()!==u&&(n=ht())!==u?(r,e={type:"date",value:n.value},r=e):(Dr=r,r=u);return r}())===u&&(r=function(){var r,e,n;r=Dr,(e=function(){var r,e,n,o;r=Dr,"timestamp"===t.substr(Dr,9).toLowerCase()?(e=t.substr(Dr,9),Dr+=9):(e=u,0===Pr&&Wr(cr));e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="TIMESTAMP"):(Dr=r,r=u)):(Dr=r,r=u);return r}())!==u&&Kt()!==u&&(n=ht())!==u?(r,e={type:"timestamp",value:n.value},r=e):(Dr=r,r=u);return r}())===u&&(r=function(){var r,e,n,o,a;r=Dr,(e=Mt())!==u&&Kt()!==u?(45===t.charCodeAt(Dr)?(n="-",Dr++):(n=u,0===Pr&&Wr(C)),n===u&&(43===t.charCodeAt(Dr)?(n="+",Dr++):(n=u,0===Pr&&Wr(A))),n!==u&&Kt()!==u&&(o=ht())!==u&&Kt()!==u&&(a=ft())!==u?(r,r=e={type:"interval",value:o,qualifier:a,op:n}):(Dr=r,r=u)):(Dr=r,r=u);r===u&&(r=Dr,(e=Mt())!==u&&Kt()!==u&&(n=ht())!==u&&Kt()!==u&&(o=ft())!==u?(r,e=function(r,t){return{type:"interval",value:r,qualifier:t,op:""}}(n,o),r=e):(Dr=r,r=u));return r}());return r}())===u&&(r=function(){var r,e,n;r=Dr,function(){var r,e,n,o;r=Dr,"extract"===t.substr(Dr,7).toLowerCase()?(e=t.substr(Dr,7),Dr+=7):(e=u,0===Pr&&Wr(ar));e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="EXTRACT"):(Dr=r,r=u)):(Dr=r,r=u);return r}()!==u&&Kt()!==u&&kt()!==u&&Kt()!==u&&(e=function(){var r;(r=Dt())===u&&(r=Ht())===u&&(r=Ut())===u&&(r=Bt())===u&&(r=Pt())===u&&(r=zt());return r}())!==u&&Kt()!==u&&Ft()!==u&&Kt()!==u&&(n=Kr())!==u&&Kt()!==u&&qt()!==u?(r,r={type:"function",name:"extract",args:{type:"expr_list",value:[{type:"string",value:e},n]}}):(Dr=r,r=u);return r}())===u&&(r=function(){var r,e,n,o,a,i,s,c,l;r=Dr,(e=function(){var r,e,n,o;r=Dr,"substring"===t.substr(Dr,9).toLowerCase()?(e=t.substr(Dr,9),Dr+=9):(e=u,0===Pr&&Wr(or));e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="SUBSTRING"):(Dr=r,r=u)):(Dr=r,r=u);return r}())!==u&&Kt()!==u&&kt()!==u&&Kt()!==u&&(n=Kr())!==u&&Kt()!==u&&Ft()!==u&&Kt()!==u&&(o=Kr())!==u&&Kt()!==u?(a=Dr,(i=function(){var r,e,n,o;r=Dr,"for"===t.substr(Dr,3).toLowerCase()?(e=t.substr(Dr,3),Dr+=3):(e=u,0===Pr&&Wr(ur));e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="FOR"):(Dr=r,r=u)):(Dr=r,r=u);return r}())!==u&&(s=Kt())!==u&&(c=Kr())!==u&&(l=Kt())!==u?a=i=[i,s,c,l]:(Dr=a,a=u),a===u&&(a=null),a!==u&&(i=qt())!==u?(r,f=n,v=o,e={type:"function",name:"substring",args:{type:"expr_list",value:(p=a)?[f,v,p[2]]:[f,v]}},r=e):(Dr=r,r=u)):(Dr=r,r=u);var f,v,p;return r}())===u&&(r=function(){var r,t,e,n,o;r=Dr,(t=St())!==u&&Kt()!==u&&kt()!==u&&Kt()!==u?((e=lt())===u&&(e=null),e!==u&&Kt()!==u&&(n=Kr())!==u&&Kt()!==u&&Ft()!==u&&Kt()!==u&&(o=Kr())!==u&&Kt()!==u&&qt()!==u?(r,r=t={type:"function",name:"trim",args:{type:"expr_list",value:[{type:"string",value:null==(a=e)?"BOTH":a},n,o]}}):(Dr=r,r=u)):(Dr=r,r=u);var a;r===u&&(r=Dr,(t=St())!==u&&Kt()!==u&&kt()!==u&&Kt()!==u?((e=lt())===u&&(e=null),e!==u&&Kt()!==u&&(n=Kr())!==u&&Kt()!==u&&qt()!==u?(r,t=function(r,t){return{type:"function",name:"trim",args:{type:"expr_list",value:[{type:"string",value:null==r?"BOTH":r},t]}}}(e,n),r=t):(Dr=r,r=u)):(Dr=r,r=u));return r}())===u&&(r=function(){var r,e,n;r=Dr,function(){var r,e,n,o;r=Dr,"position"===t.substr(Dr,8).toLowerCase()?(e=t.substr(Dr,8),Dr+=8):(e=u,0===Pr&&Wr(sr));e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="POSITION"):(Dr=r,r=u)):(Dr=r,r=u);return r}()!==u&&Kt()!==u&&kt()!==u&&Kt()!==u&&(e=Kr())!==u&&Kt()!==u&&wt()!==u&&Kt()!==u&&(n=Kr())!==u&&Kt()!==u&&qt()!==u?(r,r={type:"function",name:"position",args:{type:"expr_list",value:[e,n]}}):(Dr=r,r=u);return r}())===u&&(r=function(){var r,e,n;r=Dr,(e=function(){var r,e,n,o;r=Dr,(e=ot())!==u&&(r,e=e);if((r=e)===u)if(r=Dr,96===t.charCodeAt(Dr)?(e="`",Dr++):(e=u,0===Pr&&Wr(Fr)),e!==u){if(n=[],Sr.test(t.charAt(Dr))?(o=t.charAt(Dr),Dr++):(o=u,0===Pr&&Wr(Mr)),o!==u)for(;o!==u;)n.push(o),Sr.test(t.charAt(Dr))?(o=t.charAt(Dr),Dr++):(o=u,0===Pr&&Wr(Mr));else n=u;n!==u?(96===t.charCodeAt(Dr)?(o="`",Dr++):(o=u,0===Pr&&Wr(Fr)),o!==u?(r,e=n.join(""),r=e):(Dr=r,r=u)):(Dr=r,r=u)}else Dr=r,r=u;return r}())!==u&&Kt()!==u&&kt()!==u&&Kt()!==u?((n=qr())===u&&(n=null),n!==u&&Kt()!==u&&qt()!==u?(r,r=e={type:"function",name:e,args:n||{type:"expr_list",value:[]}}):(Dr=r,r=u)):(Dr=r,r=u);return r}())===u&&(r=function(){var r;(r=function(){var r,t,e,n,o,a;if(r=Dr,(t=Gt())!==u)if(Kt()!==u)if((e=Kr())!==u)if(Kt()!==u){for(n=[],o=At();o!==u;)n.push(o),o=At();n!==u&&(o=Kt())!==u&&(a=Zt())!==u?(r,r=t={type:"case_expression",format:"simple",operand:e,clauses:n,else:null}):(Dr=r,r=u)}else Dr=r,r=u;else Dr=r,r=u;else Dr=r,r=u;else Dr=r,r=u;if(r===u)if(r=Dr,(t=Gt())!==u)if(Kt()!==u)if((e=Kr())!==u)if(Kt()!==u){for(n=[],o=At();o!==u;)n.push(o),o=At();n!==u&&(o=Kt())!==u&&(a=Ct())!==u&&Kt()!==u&&Zt()!==u?(r,t=function(r,t,e){return{type:"case_expression",format:"simple",operand:r,clauses:t,else:e.value}}(e,n,a),r=t):(Dr=r,r=u)}else Dr=r,r=u;else Dr=r,r=u;else Dr=r,r=u;else Dr=r,r=u;return r}())===u&&(r=function(){var r,t,e,n,o;if(r=Dr,(t=Gt())!==u)if(Kt()!==u){for(e=[],n=yt();n!==u;)e.push(n),n=yt();e!==u&&(n=Kt())!==u&&(o=Zt())!==u?(r,r=t={type:"case_expression",format:"searched",clauses:e,else:null}):(Dr=r,r=u)}else Dr=r,r=u;else Dr=r,r=u;if(r===u)if(r=Dr,(t=Gt())!==u)if(Kt()!==u){for(e=[],n=yt();n!==u;)e.push(n),n=yt();e!==u&&(n=Kt())!==u&&(o=Ct())!==u&&Kt()!==u&&Zt()!==u?(r,t=function(r,t){return{type:"case_expression",format:"searched",clauses:r,else:t.value}}(e,o),r=t):(Dr=r,r=u)}else Dr=r,r=u;else Dr=r,r=u;return r}());return r}())===u&&(r=function(){var r,t;r=Dr,(t=function(){var r,t;r=Dr,(t=function(){var r,t,e,n;if(r=Dr,(t=at())!==u){for(e=[],n=st();n!==u;)e.push(n),n=st();e!==u?(r,t=m(t,e),r=t):(Dr=r,r=u)}else Dr=r,r=u;return r}())!==u&&(r,t=t);return r=t}())!==u&&(r,t=/^CURRENT_DATE$/i.test(e=t)?{type:"current_time",mode:"date"}:/^CURRENT_TIMESTAMP$/i.test(e)?{type:"current_time",mode:"timestamp"}:{type:"column_ref",table:"",column:e});var e;return r=t}())===u&&(r=ct())===u&&(r=Dr,kt()!==u&&Kt()!==u&&(e=Kr())!==u&&Kt()!==u&&qt()!==u?(r,(n=e).paren=!0,r=n):(Dr=r,r=u)),r}function ot(){var r,t,e,n;if(r=Dr,(t=at())!==u){for(e=[],n=it();n!==u;)e.push(n),n=it();e!==u?(r,r=t=m(t,e)):(Dr=r,r=u)}else Dr=r,r=u;return r}function at(){var r;return L.test(t.charAt(Dr))?(r=t.charAt(Dr),Dr++):(r=u,0===Pr&&Wr(T)),r}function it(){var r;return w.test(t.charAt(Dr))?(r=t.charAt(Dr),Dr++):(r=u,0===Pr&&Wr(x)),r}function st(){var r;return N.test(t.charAt(Dr))?(r=t.charAt(Dr),Dr++):(r=u,0===Pr&&Wr(R)),r}function ct(){var r,e,n,o;return r=Dr,e=Dr,64===t.charCodeAt(Dr)?(n="@",Dr++):(n=u,0===Pr&&Wr(_)),n!==u&&(o=ot())!==u?e=n=[n,o]:(Dr=e,e=u),e!==u&&(r,e={type:"param",value:e[1]}),r=e}function lt(){var r;return(r=function(){var r,e,n,o;r=Dr,"leading"===t.substr(Dr,7).toLowerCase()?(e=t.substr(Dr,7),Dr+=7):(e=u,0===Pr&&Wr(fr));e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="LEADING"):(Dr=r,r=u)):(Dr=r,r=u);return r}())===u&&(r=function(){var r,e,n,o;r=Dr,"trailing"===t.substr(Dr,8).toLowerCase()?(e=t.substr(Dr,8),Dr+=8):(e=u,0===Pr&&Wr(vr));e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="TRAILING"):(Dr=r,r=u)):(Dr=r,r=u);return r}())===u&&(r=function(){var r,e,n,o;r=Dr,"both"===t.substr(Dr,4).toLowerCase()?(e=t.substr(Dr,4),Dr+=4):(e=u,0===Pr&&Wr(pr));e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="BOTH"):(Dr=r,r=u)):(Dr=r,r=u);return r}()),r}function ft(){var r,e,n;return r=Dr,(e=function(){var r,t,e;r=Dr,(t=vt())!==u&&Kt()!==u&&kt()!==u&&Kt()!==u&&(e=dt())!==u&&Kt()!==u&&qt()!==u?(r,n=e,t={type:"interval-period",period:t.value,precision:n,secondary:null},r=t):(Dr=r,r=u);var n;r===u&&(r=Dr,(t=vt())!==u&&(r,t=I(t)),r=t);return r}())!==u&&Kt()!==u&&function(){var r,e,n,o;r=Dr,"to"===t.substr(Dr,2).toLowerCase()?(e=t.substr(Dr,2),Dr+=2):(e=u,0===Pr&&Wr(dr));e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="TO"):(Dr=r,r=u)):(Dr=r,r=u);return r}()!==u&&Kt()!==u&&(n=function(){var r,t,e,n;r=Dr,(t=vt())!==u&&(r,t={type:"interval-period",period:t.value,precision:null,secondary:null});(r=t)===u&&(r=Dr,(t=zt())!==u&&Kt()!==u&&kt()!==u&&Kt()!==u&&(e=dt())!==u&&Kt()!==u&&Yt()!==u&&Kt()!==u&&(n=pt())!==u&&Kt()!==u&&qt()!==u?(r,t=O(e,n),r=t):(Dr=r,r=u),r===u&&(r=Dr,(t=zt())!==u&&Kt()!==u&&kt()!==u&&Kt()!==u&&(e=dt())!==u&&Kt()!==u&&qt()!==u?(r,r=t={type:"interval-period",period:"second",precision:e,secondary:null}):(Dr=r,r=u),r===u&&(r=Dr,(t=zt())!==u&&(r,t={type:"interval-period",period:"second",precision:null,secondary:null}),r=t)));return r}())!==u?(r,r=e={type:"interval-qualifier",start:e,end:n}):(Dr=r,r=u),r===u&&(r=function(){var r,t,e,n;r=Dr,(t=vt())!==u&&Kt()!==u&&kt()!==u&&Kt()!==u&&(e=pt())!==u&&Kt()!==u&&qt()!==u?(r,o=e,t={type:"interval-period",period:t.value,precision:o,secondary:null},r=t):(Dr=r,r=u);var o;r===u&&(r=Dr,(t=vt())!==u&&(r,t=I(t)),(r=t)===u&&(r=Dr,(t=zt())!==u&&Kt()!==u&&kt()!==u&&Kt()!==u&&(e=dt())!==u&&Kt()!==u&&Yt()!==u&&Kt()!==u&&(n=pt())!==u&&Kt()!==u&&qt()!==u?(r,t=O(e,n),r=t):(Dr=r,r=u),r===u&&(r=Dr,(t=zt())!==u&&Kt()!==u&&kt()!==u&&Kt()!==u&&(e=pt())!==u&&Kt()!==u&&qt()!==u?(r,t=function(r){return{type:"interval-period",period:"second",precision:r,secondary:null}}(e),r=t):(Dr=r,r=u),r===u&&(r=Dr,(t=zt())!==u&&(r,t={type:"interval-period",period:"second",precision:null,secondary:null}),r=t))));return r}()),r}function vt(){var r,t;return r=Dr,(t=Ut())!==u&&(r,t={type:"string",value:"day"}),(r=t)===u&&(r=Dr,(t=Bt())!==u&&(r,t={type:"string",value:"hour"}),(r=t)===u&&(r=Dr,(t=Pt())!==u&&(r,t={type:"string",value:"minute"}),(r=t)===u&&(r=Dr,(t=Ht())!==u&&(r,t={type:"string",value:"month"}),(r=t)===u&&(r=Dr,(t=Dt())!==u&&(r,t={type:"string",value:"year"}),r=t)))),r}function pt(){var r,t;return r=Dr,(t=Lt())!==u&&(r,t=F(t)),r=t}function dt(){var r,t;return r=Dr,(t=Lt())!==u&&(r,t=F(t)),r=t}function ht(){var r;return(r=bt())===u&&(r=ct()),r}function bt(){var r,e,n,o,a;if(r=Dr,39===t.charCodeAt(Dr)?(e="'",Dr++):(e=u,0===Pr&&Wr(S)),e===u&&("N'"===t.substr(Dr,2)?(e="N'",Dr+=2):(e=u,0===Pr&&Wr(M))),e!==u){for(n=[],o=Dr,"''"===t.substr(Dr,2)?(a="''",Dr+=2):(a=u,0===Pr&&Wr(D)),a!==u&&(o,a="'"),(o=a)===u&&(H.test(t.charAt(Dr))?(o=t.charAt(Dr),Dr++):(o=u,0===Pr&&Wr(U)));o!==u;)n.push(o),o=Dr,"''"===t.substr(Dr,2)?(a="''",Dr+=2):(a=u,0===Pr&&Wr(D)),a!==u&&(o,a="'"),(o=a)===u&&(H.test(t.charAt(Dr))?(o=t.charAt(Dr),Dr++):(o=u,0===Pr&&Wr(U)));n!==u?(39===t.charCodeAt(Dr)?(o="'",Dr++):(o=u,0===Pr&&Wr(S)),o!==u?(r,r=e={type:"string",value:n.join("")}):(Dr=r,r=u)):(Dr=r,r=u)}else Dr=r,r=u;return r}function yt(){var r,t,e;return r=Dr,jt()!==u&&Kt()!==u&&(t=Kr())!==u&&Kt()!==u&&Wt()!==u&&Kt()!==u&&(e=Kr())!==u?(r,r=B(t,e)):(Dr=r,r=u),r}function At(){var r,t,e;return r=Dr,jt()!==u&&Kt()!==u&&(t=Kr())!==u&&Kt()!==u&&Wt()!==u&&Kt()!==u&&(e=Kr())!==u?(r,r=B(t,e)):(Dr=r,r=u),r}function Ct(){var r,e;return r=Dr,function(){var r,e,n,o;r=Dr,"else"===t.substr(Dr,4).toLowerCase()?(e=t.substr(Dr,4),Dr+=4):(e=u,0===Pr&&Wr(xr));e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="ELSE"):(Dr=r,r=u)):(Dr=r,r=u);return r}()!==u&&Kt()!==u&&(e=Kr())!==u?(r,r={type:"else_clause",value:e}):(Dr=r,r=u),r}function gt(){var r,e,n,o;return(r=Lt())===u&&(r=Dr,45===t.charCodeAt(Dr)?(e="-",Dr++):(e=u,0===Pr&&Wr(C)),e===u&&(43===t.charCodeAt(Dr)?(e="+",Dr++):(e=u,0===Pr&&Wr(A))),e!==u&&(n=Lt())!==u?(r,o=n,r=e=e[0]+o):(Dr=r,r=u)),r}function Et(){var r,e,n,o;return r=Dr,46===t.charCodeAt(Dr)?(e=".",Dr++):(e=u,0===Pr&&Wr(P)),e!==u?((n=Lt())===u&&(n=null),n!==u?(r,r=e="."+(null!=(o=n)?o:"")):(Dr=r,r=u)):(Dr=r,r=u),r}function mt(){var r,e,n;return r=Dr,(e=function(){var r,e,n;r=Dr,Z.test(t.charAt(Dr))?(e=t.charAt(Dr),Dr++):(e=u,0===Pr&&Wr(j));e!==u?(W.test(t.charAt(Dr))?(n=t.charAt(Dr),Dr++):(n=u,0===Pr&&Wr(Y)),n===u&&(n=null),n!==u?(r,r=e="e"+(null===(o=n)?"":o)):(Dr=r,r=u)):(Dr=r,r=u);var o;return r}())!==u&&(n=Lt())!==u?(r,r=e=e+n):(Dr=r,r=u),r}function Lt(){var r,t,e;if(r=Dr,t=[],(e=Tt())!==u)for(;e!==u;)t.push(e),e=Tt();else t=u;return t!==u&&(r,t=t.join("")),r=t}function Tt(){var r;return z.test(t.charAt(Dr))?(r=t.charAt(Dr),Dr++):(r=u,0===Pr&&Wr(G)),r}function wt(){var r,e,n,o;return r=Dr,"in"===t.substr(Dr,2).toLowerCase()?(e=t.substr(Dr,2),Dr+=2):(e=u,0===Pr&&Wr(V)),e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="IN"):(Dr=r,r=u)):(Dr=r,r=u),r}function xt(){var r,e,n,o;return r=Dr,"is"===t.substr(Dr,2).toLowerCase()?(e=t.substr(Dr,2),Dr+=2):(e=u,0===Pr&&Wr(X)),e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="IS"):(Dr=r,r=u)):(Dr=r,r=u),r}function Nt(){var r,e,n,o;return r=Dr,"like"===t.substr(Dr,4).toLowerCase()?(e=t.substr(Dr,4),Dr+=4):(e=u,0===Pr&&Wr($)),e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="LIKE"):(Dr=r,r=u)):(Dr=r,r=u),r}function Rt(){var r,e,n,o;return r=Dr,"not"===t.substr(Dr,3).toLowerCase()?(e=t.substr(Dr,3),Dr+=3):(e=u,0===Pr&&Wr(Q)),e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="NOT"):(Dr=r,r=u)):(Dr=r,r=u),r}function _t(){var r,e,n,o;return r=Dr,"and"===t.substr(Dr,3).toLowerCase()?(e=t.substr(Dr,3),Dr+=3):(e=u,0===Pr&&Wr(rr)),e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="AND"):(Dr=r,r=u)):(Dr=r,r=u),r}function It(){var r,e,n,o;return r=Dr,"or"===t.substr(Dr,2).toLowerCase()?(e=t.substr(Dr,2),Dr+=2):(e=u,0===Pr&&Wr(tr)),e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="OR"):(Dr=r,r=u)):(Dr=r,r=u),r}function Ot(){var r,e,n,o;return r=Dr,"between"===t.substr(Dr,7).toLowerCase()?(e=t.substr(Dr,7),Dr+=7):(e=u,0===Pr&&Wr(er)),e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="BETWEEN"):(Dr=r,r=u)):(Dr=r,r=u),r}function Ft(){var r,e,n,o;return r=Dr,"from"===t.substr(Dr,4).toLowerCase()?(e=t.substr(Dr,4),Dr+=4):(e=u,0===Pr&&Wr(nr)),e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="FROM"):(Dr=r,r=u)):(Dr=r,r=u),r}function St(){var r,e,n,o;return r=Dr,"trim"===t.substr(Dr,4).toLowerCase()?(e=t.substr(Dr,4),Dr+=4):(e=u,0===Pr&&Wr(ir)),e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="TRIM"):(Dr=r,r=u)):(Dr=r,r=u),r}function Mt(){var r,e,n,o;return r=Dr,"interval"===t.substr(Dr,8).toLowerCase()?(e=t.substr(Dr,8),Dr+=8):(e=u,0===Pr&&Wr(hr)),e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="INTERVAL"):(Dr=r,r=u)):(Dr=r,r=u),r}function Dt(){var r,e,n,o;return r=Dr,"year"===t.substr(Dr,4).toLowerCase()?(e=t.substr(Dr,4),Dr+=4):(e=u,0===Pr&&Wr(br)),e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="YEAR"):(Dr=r,r=u)):(Dr=r,r=u),r}function Ht(){var r,e,n,o;return r=Dr,"month"===t.substr(Dr,5).toLowerCase()?(e=t.substr(Dr,5),Dr+=5):(e=u,0===Pr&&Wr(yr)),e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="MONTH"):(Dr=r,r=u)):(Dr=r,r=u),r}function Ut(){var r,e,n,o;return r=Dr,"day"===t.substr(Dr,3).toLowerCase()?(e=t.substr(Dr,3),Dr+=3):(e=u,0===Pr&&Wr(Ar)),e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="DAY"):(Dr=r,r=u)):(Dr=r,r=u),r}function Bt(){var r,e,n,o;return r=Dr,"hour"===t.substr(Dr,4).toLowerCase()?(e=t.substr(Dr,4),Dr+=4):(e=u,0===Pr&&Wr(Cr)),e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="HOUR"):(Dr=r,r=u)):(Dr=r,r=u),r}function Pt(){var r,e,n,o;return r=Dr,"minute"===t.substr(Dr,6).toLowerCase()?(e=t.substr(Dr,6),Dr+=6):(e=u,0===Pr&&Wr(gr)),e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="MINUTE"):(Dr=r,r=u)):(Dr=r,r=u),r}function zt(){var r,e,n,o;return r=Dr,"second"===t.substr(Dr,6).toLowerCase()?(e=t.substr(Dr,6),Dr+=6):(e=u,0===Pr&&Wr(Er)),e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="SECOND"):(Dr=r,r=u)):(Dr=r,r=u),r}function Gt(){var r,e,n,o;return r=Dr,"case"===t.substr(Dr,4).toLowerCase()?(e=t.substr(Dr,4),Dr+=4):(e=u,0===Pr&&Wr(mr)),e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="CASE"):(Dr=r,r=u)):(Dr=r,r=u),r}function Zt(){var r,e,n,o;return r=Dr,"end"===t.substr(Dr,3).toLowerCase()?(e=t.substr(Dr,3),Dr+=3):(e=u,0===Pr&&Wr(Lr)),e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="END"):(Dr=r,r=u)):(Dr=r,r=u),r}function jt(){var r,e,n,o;return r=Dr,"when"===t.substr(Dr,4).toLowerCase()?(e=t.substr(Dr,4),Dr+=4):(e=u,0===Pr&&Wr(Tr)),e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="WHEN"):(Dr=r,r=u)):(Dr=r,r=u),r}function Wt(){var r,e,n,o;return r=Dr,"then"===t.substr(Dr,4).toLowerCase()?(e=t.substr(Dr,4),Dr+=4):(e=u,0===Pr&&Wr(wr)),e!==u?(n=Dr,Pr++,o=it(),Pr--,o===u?n=void 0:(Dr=n,n=u),n!==u?(r,r=e="THEN"):(Dr=r,r=u)):(Dr=r,r=u),r}function Yt(){var r;return 44===t.charCodeAt(Dr)?(r=",",Dr++):(r=u,0===Pr&&Wr(Nr)),r}function kt(){var r;return 40===t.charCodeAt(Dr)?(r="(",Dr++):(r=u,0===Pr&&Wr(Rr)),r}function qt(){var r;return 41===t.charCodeAt(Dr)?(r=")",Dr++):(r=u,0===Pr&&Wr(_r)),r}function Kt(){var r,t;for(r=[],t=Vt();t!==u;)r.push(t),t=Vt();return r}function Vt(){var r;return Ir.test(t.charAt(Dr))?(r=t.charAt(Dr),Dr++):(r=u,0===Pr&&Wr(Or)),r}function Xt(r,t,e,n){var u={type:"binary_expr",operator:r,left:t,right:e};return void 0!==n&&(u.escape=n),u}function $t(r,t){for(var e=r,n=0;n<t.length;n++)e=Xt(t[n][1],e,t[n][3]);return e}if((n=a())!==u&&Dr===t.length)return n;throw n!==u&&Dr<t.length&&Wr({type:"end"}),Yr(Br,Ur<t.length?t.charAt(Ur):null,Ur<t.length?jr(Ur,Ur+1):jr(Ur,Ur))}}}));