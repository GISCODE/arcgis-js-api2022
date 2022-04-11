/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./arcadeCompiler","./arcadeRuntime","./parser","./treeAnalysis","../core/has","../core/promiseUtils","../chunks/arcade"],(function(e,t,r,s,c,i,p,a){"use strict";e.compileScript=a.compileScript,e.enableAsyncSupport=a.enableAsyncSupport,e.enableFeatureSetSupport=a.enableFeatureSetSupport,e.enableGeometrySupport=a.enableGeometrySupport,e.executeScript=a.executeScript,e.extend=a.extend,e.extractExpectedFieldLiterals=a.extractExpectedFieldLiterals,e.extractFieldLiterals=a.extractFieldLiterals,e.featureSetUtils=a.featureSetUtils,e.isAsyncEnabled=a.isAsyncEnabled,e.isFeatureSetSupportEnabled=a.isFeatureSetSupportEnabled,e.isGeometryEnabled=a.isGeometryEnabled,e.loadScriptDependencies=a.loadScriptDependencies,e.parseAndExecuteScript=a.parseAndExecuteScript,e.parseScript=a.parseScript,e.referencesFunction=a.referencesFunction,e.referencesMember=a.referencesMember,e.scriptCheck=a.scriptCheck,e.scriptIsAsync=a.scriptIsAsync,e.scriptTouchesGeometry=a.scriptTouchesGeometry,e.scriptUsesFeatureSet=a.scriptUsesFeatureSet,e.scriptUsesGeometryEngine=a.scriptUsesGeometryEngine,e.validateScript=a.validateScript,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
