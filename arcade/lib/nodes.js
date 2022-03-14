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

var __extends=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();define(["require","exports","./syntax"],(function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.VariableDeclarator=e.VariableDeclaration=e.UpdateExpression=e.UpdateOperators=e.UnaryExpression=e.UnaryOperators=e.TemplateLiteral=e.TemplateElement=e.Program=e.ReturnStatement=e.Property=e.ObjectExpression=e.Literal=e.IfStatement=e.Identifier=e.FunctionDeclaration=e.ForStatement=e.ForInStatement=e.ExpressionStatement=e.EmptyStatement=e.ContinueStatement=e.StaticMemberExpression=e.ComputedMemberExpression=e.CallExpression=e.BreakStatement=e.BlockStatement=e.BinaryExpression=e.BinaryOperators=e.LogicalOperators=e.AssignmentExpression=e.AssignmentOperators=e.ArrayExpression=e.Comment=void 0;var r=function(){},a=function(t){function e(e,n){var r=t.call(this)||this;return r.type=e,r.value=n,r}return __extends(e,t),e}(r);e.Comment=a;var i=function(t){function e(e){var r=t.call(this)||this;return r.elements=e,r.type=n.Syntax.ArrayExpression,r}return __extends(e,t),e}(r);e.ArrayExpression=i,e.AssignmentOperators=["=","/=","*=","%=","+=","-="];var s=function(t){function e(e,r,a){var i=t.call(this)||this;return i.operator=e,i.left=r,i.right=a,i.type=n.Syntax.AssignmentExpression,i}return __extends(e,t),e}(r);e.AssignmentExpression=s,e.LogicalOperators=["||","&&"],e.BinaryOperators=["|","&",">>","<<",">>",">>>","^","==","!=","<","<=",">",">=","+","-","*","/","%"];var o=function(t){function r(r,a,i){var s=t.call(this)||this;return s.operator=r,s.left=a,s.right=i,s.type=e.LogicalOperators.includes(r)?n.Syntax.LogicalExpression:n.Syntax.BinaryExpression,s}return __extends(r,t),r}(r);e.BinaryExpression=o;var u=function(t){function e(e){var r=t.call(this)||this;return r.body=e,r.type=n.Syntax.BlockStatement,r}return __extends(e,t),e}(r);e.BlockStatement=u;var c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type=n.Syntax.BreakStatement,e}return __extends(e,t),e}(r);e.BreakStatement=c;var p=function(t){function e(e,r){var a=t.call(this)||this;return a.callee=e,a.args=r,a.type=n.Syntax.CallExpression,a.arguments=r,a}return __extends(e,t),e}(r);e.CallExpression=p;var l=function(t){function e(e,r){var a=t.call(this)||this;return a.object=e,a.property=r,a.type=n.Syntax.MemberExpression,a.computed=!0,a}return __extends(e,t),e}(r);e.ComputedMemberExpression=l;var y=function(t){function e(e,r){var a=t.call(this)||this;return a.object=e,a.property=r,a.type=n.Syntax.MemberExpression,a.computed=!1,a}return __extends(e,t),e}(r);e.StaticMemberExpression=y;var x=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type=n.Syntax.ContinueStatement,e}return __extends(e,t),e}(r);e.ContinueStatement=x;var f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type=n.Syntax.EmptyStatement,e}return __extends(e,t),e}(r);e.EmptyStatement=f;var m=function(t){function e(e){var r=t.call(this)||this;return r.expression=e,r.type=n.Syntax.ExpressionStatement,r}return __extends(e,t),e}(r);e.ExpressionStatement=m;var _=function(t){function e(e,r,a){var i=t.call(this)||this;return i.left=e,i.right=r,i.body=a,i.type=n.Syntax.ForInStatement,i.each=!1,i}return __extends(e,t),e}(r);e.ForInStatement=_;var h=function(t){function e(e,r,a,i){var s=t.call(this)||this;return s.init=e,s.test=r,s.update=a,s.body=i,s.type=n.Syntax.ForStatement,s}return __extends(e,t),e}(r);e.ForStatement=h;var v=function(t){function e(e,r,a){var i=t.call(this)||this;return i.id=e,i.params=r,i.body=a,i.type=n.Syntax.FunctionDeclaration,i.generator=!1,i.expression=!1,i.async=!1,i}return __extends(e,t),e}(r);e.FunctionDeclaration=v;var d=function(t){function e(e){var r=t.call(this)||this;return r.name=e,r.type=n.Syntax.Identifier,r}return __extends(e,t),e}(r);e.Identifier=d;var S=function(t){function e(e,r,a){var i=t.call(this)||this;return i.test=e,i.consequent=r,i.alternate=a,i.type=n.Syntax.IfStatement,i}return __extends(e,t),e}(r);e.IfStatement=S;var E=function(t){function e(e,r){var a=t.call(this)||this;return a.value=e,a.raw=r,a.type=n.Syntax.Literal,a}return __extends(e,t),e}(r);e.Literal=E;var b=function(t){function e(e){var r=t.call(this)||this;return r.properties=e,r.type=n.Syntax.ObjectExpression,r}return __extends(e,t),e}(r);e.ObjectExpression=b;var g=function(t){function e(e,r,a,i,s,o){var u=t.call(this)||this;return u.kind=e,u.key=r,u.computed=a,u.value=i,u.method=s,u.shorthand=o,u.type=n.Syntax.Property,u}return __extends(e,t),e}(r);e.Property=g;var O=function(t){function e(e){var r=t.call(this)||this;return r.argument=e,r.type=n.Syntax.ReturnStatement,r}return __extends(e,t),e}(r);e.ReturnStatement=O;var B=function(t){function e(e){var r=t.call(this)||this;return r.body=e,r.type=n.Syntax.Program,r}return __extends(e,t),e}(r);e.Program=B;var C=function(t){function e(e,r){var a=t.call(this)||this;return a.value=e,a.tail=r,a.type=n.Syntax.TemplateElement,a}return __extends(e,t),e}(r);e.TemplateElement=C;var L=function(t){function e(e,r){var a=t.call(this)||this;return a.quasis=e,a.expressions=r,a.type=n.Syntax.TemplateLiteral,a}return __extends(e,t),e}(r);e.TemplateLiteral=L,e.UnaryOperators=["-","+","!","~"];var U=function(t){function e(e,r){var a=t.call(this)||this;return a.operator=e,a.argument=r,a.type=n.Syntax.UnaryExpression,a.prefix=!0,a}return __extends(e,t),e}(r);e.UnaryExpression=U,e.UpdateOperators=["++","--"];var j=function(t){function e(e,r,a){var i=t.call(this)||this;return i.operator=e,i.argument=r,i.prefix=a,i.type=n.Syntax.UpdateExpression,i}return __extends(e,t),e}(r);e.UpdateExpression=j;var k=function(t){function e(e,r){var a=t.call(this)||this;return a.declarations=e,a.kind=r,a.type=n.Syntax.VariableDeclaration,a}return __extends(e,t),e}(r);e.VariableDeclaration=k;var A=function(t){function e(e,r){var a=t.call(this)||this;return a.id=e,a.init=r,a.type=n.Syntax.VariableDeclarator,a}return __extends(e,t),e}(r);e.VariableDeclarator=A}));