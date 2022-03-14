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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["require","exports","../../FunctionWrapper","../../languageUtils","../../../geometry/Geometry"],(function(e,r,n,t,a){"use strict";function o(e,r){switch(r.type){case"EmptyStatement":return"";case"VariableDeclarator":return function(e,r){var n=null===r.init?null:o(e,r.init),t=i(r.name,e.mangles);return""===n?t:t+" = "+n}(e,r);case"VariableDeclaration":return function(e,r){for(var n=[],t=0;t<r.declarations.length;t++)n.push(o(e,r.declarations[t]));return"var "+n.join(",")+"; "}(e,r);case"BlockStatement":return function(e,r){for(var n="{\n",t=0;t<r.body.length;t++)n+=o(e,r.body[t])+" \n";return n+="}\n"}(e,r);case"FunctionDeclaration":return function(e,r){var n="function "+l(r.id.name,e.globalMangles,{}),t=[],a={};a={};for(var s={},u=0,c=r.params;u<c.length;u++){var p=c[u],f=i(p.name,s);t.push(f),a[p.name]=1}return n+="("+t.join(",")+") ",n+=o({functions:e.functions,globals:e.globals,symbols:e.symbols,context:e.context,globalMangles:e.globalMangles,localMangles:s,locals:a},r.body)}(e,r);case"ReturnStatement":return function(e,r){return null===r.argument?"return;":"return "+o(e,r.argument)+";\n"}(e,r);case"IfStatement":return function(e,r){return"if "+o(e,r.test)+" "+o(e,r.consequent)+(null!==r.alternate?"else "+o(e,r.alternate):"")}(e,r);case"ExpressionStatement":return function(e,r){return o(e,r.expression)+";"}(e,r);case"AssignmentExpression":return function(e,r){return o(e,r.left)+" "+r.operator+" "+o(e,r.right)}(e,r);case"UpdateExpression":return function(e,r){return!0===r.prefix?r.operator+o(e,r.argument):o(e,r.argument)+r.operator}(e,r);case"BreakStatement":return"break;";case"ContinueStatement":return"continue;";case"ForStatement":return function(e,r){var n="for(";return null!==r.init&&(n+=o(e,r.init)),n+=";",null!==r.test?n+=o(e,r.test):n+=" ;",null!==r.update?n+=o(e,r.update):n+=" ;",n+=") ",n+=o(e,r.body)+"\n"}(e,r);case"ForInStatement":return function(e,r){return"for( "+o(e,r.left)+" in "+o(e,r.right)+") "+o(e,r.body)+"\n"}(e,r);case"Identifier":return function(e,r){var o=r.name.toLowerCase();if(void 0!==e.locals[o])return l(r.name,e.globalMangles,e.localMangles);var u=e.context.globalScope[o];if(void 0===u)return r.name;if(null!==u){if(u.value instanceof n)return i=c(u.value,e.functions,e.globals,e.symbols);if(null==u){var i=s(e.symbols);return e.globals.push({name:i,type:"null",params:{value:null}}),i}if(u instanceof a){i=s(e.symbols);return e.globals.push({name:i,type:"geometry",params:{value:u}}),i}if(t.isNumber(u)){i=s(e.symbols);return e.globals.push({name:i,type:"number",params:{value:u}}),i}if(t.isDate(u)){i=s(e.symbols);return e.globals.push({name:i,type:"date",params:{value:t.toDate(u).getTime()}}),i}if(t.isString(u)){i=s(e.symbols);return e.globals.push({name:i,type:"string",params:{value:u}}),i}if(t.isFeatureSet(u));else if(t.isImmutableArray(u));else if(!t.isArray(u))throw new Error("Unsupported Type")}return r.name}(e,r);case"MemberExpression":return function(e,r){return"true"===r.computed?o(e,r.object)+"["+o(e,r.property)+"]":o(e,r.object)+"."+r.property.name}(e,r);case"Literal":return null===r.value||void 0===r.value?"null":JSON.stringify(r.value);case"ThisExpression":throw new Error("NOTSUPPORTED");case"CallExpression":return function(e,r){for(var n=o(e,r.callee)+"(",t=[],a=0,s=r.arguments;a<s.length;a++){var u=s[a];t.push(o(e,u))}return n+=t.join(",")+")"}(e,r);case"UnaryExpression":return function(e,r){return!0===r.prefix?r.operator+o(e,r.argument):o(e,r.argument)+r.operator}(e,r);case"BinaryExpression":return function(e,r){return"("+o(e,r.left)+" "+r.operator+" "+o(e,r.right)+")"}(e,r);case"LogicalExpression":return function(e,r){return o(e,r.left)+" "+r.operator+" "+o(e,r.right)}(e,r);case"ConditionalExpression":throw new Error("NOTSUPPORTED");case"ArrayExpression":return function(e,r){for(var n=[],t=0;t<r.elements.length;t++)n.push(o(e,r.elements[t]));return"["+n.join(",")+"]"}(e,r);case"ObjectExpression":return function(e,r){for(var n="{",t=0;t<r.properties.length;t++){var a=r.properties[t];n+=("Identifier"===a.key.type?JSON.stringify(a.key.name):o(e,a.key))+":"+o(e,a.value)}return n+="}"}(e,r);case"Property":return function(){throw new Error("Not Supported")}();case"Array":throw new Error("NOTSUPPORTED");default:throw new Error("UNREOGNISED")}}function s(e){for(var r=!1,n="";!1===r;)n="$gi_"+u.toString(),u++,void 0===e.syms[n]&&(r=!0);return n}Object.defineProperty(r,"__esModule",{value:!0}),r.exportFunctionAsArcade=void 0;var u=0;function i(e,r){var n="$$fc_"+u.toString();return u++,r[e]=n,n}function l(e,r,n){return void 0===n[e]?void 0===r[e]?e:r[e]:n[e]}function c(e,r,n,t){var a={functions:r,globals:n,symbols:t,context:e.context,locals:{},globalMangles:{},localMangles:{}},s=e.definition.id.name;if(void 0!==r.lkp[s])return r.lkp[s].mangledname;var u=i(s,a.globalMangles),l={name:s,mangledname:u,script:""};return l.script=o(a,e.definition),r.lkp[l.name]=l,r.stack.push(l),u}r.exportFunctionAsArcade=c}));