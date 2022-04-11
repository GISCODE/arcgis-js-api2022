/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../Color","../../../core/has","../../../core/handleUtils","../../../chunks/vec3","../../../chunks/vec3f64","./visualElements/ExtendedLineVisualElement","./visualElements/ParallelLineVisualElement","./visualElements/PointVisualElement","./visualElements/RightAngleQuadVisualElement","../webgl-engine/lib/Material","../../interactive/snapping/Settings","../../interactive/snapping/snappingUtils","../../interactive/snapping/SnappingVisualizer"],(function(e,n,t,i,a,l,o,r,s,d,u,c,p,g,f){"use strict";let v=function(e){function i(){return e.apply(this,arguments)||this}n._inheritsLoose(i,e);var f=i.prototype;return f.visualizeIntersectionPoint=function(e,n){const{coordinateHelper:i,elevationInfo:l,view:o}=n;return a.destroyHandle(new d.PointVisualElement({view:o,primitive:"circle",geometry:i.vectorToPoint(e.intersectionPoint),elevationInfo:l,size:20,outlineSize:2,color:[0,0,0,0],outlineColor:t.toUnitRGBA(p.defaults.orange),pixelSnappingEnabled:!1}))},f.visualizePoint=function(e,n){const{coordinateHelper:i,elevationInfo:l,view:o}=n;return a.destroyHandle(new d.PointVisualElement({view:o,primitive:"circle",geometry:i.vectorToPoint(e.point),elevationInfo:l,size:20,outlineSize:2,color:[0,0,0,0],outlineColor:t.toUnitRGBA(p.defaults.orange),pixelSnappingEnabled:!1}))},f.visualizeLine=function(e,n){const{coordinateHelper:t,elevationInfo:i,view:l}=n;return a.destroyHandle(this._createLineSegmentHintFromMap(e.type,e.lineStart,e.lineEnd,t,i,l,e.fadeLeft,e.fadeRight))},f.visualizeParallelSign=function(e,n){const{coordinateHelper:i,elevationInfo:o,view:r}=n,d=g.anyMapPointToRender(e.lineStart,i,o,n.view),u=g.anyMapPointToRender(e.lineEnd,i,o,n.view),f=l.lerp(u,d,u,.5),v=new s.ParallelLineVisualElement({view:r,attached:!1,offset:p.defaults.parallelLineHintOffset,length:p.defaults.parallelLineHintLength,width:p.defaults.parallelLineHintWidth,color:t.toUnitRGBA(p.defaults.orange),location:f,renderOccluded:c.RenderOccludedFlag.Opaque});return v.setDirectionFromPoints(d,f),v.attached=!0,a.destroyHandle(v)},f.visualizeRightAngleQuad=function(e,n){const{coordinateHelper:i,elevationInfo:l,view:o}=n;return a.destroyHandle(new u.RightAngleQuadVisualElement({view:o,attached:!0,color:t.toUnitRGBA(p.defaults.orange),renderOccluded:c.RenderOccludedFlag.Transparent,outlineRenderOccluded:c.RenderOccludedFlag.Opaque,outlineColor:t.toUnitRGBA(p.defaults.orange),outlineSize:p.defaults.rightAngleHintOutlineSize,size:p.defaults.rightAngleHintSize,geometry:{previous:g.anyMapPointToRender(e.previousVertex,i,l,o),center:g.anyMapPointToRender(e.centerVertex,i,l,o),next:g.anyMapPointToRender(e.nextVertex,i,l,o)}}))},f._createLineSegmentHintFromMap=function(e,n,t,i,a,l,r=!0,s=!0){const d=o.create(),u=o.create();return g.anyMapPointsToRenderWithEqualZ(n,t,i,a,l,d,u),this._createLineSegmentHint(e,l,d,u,r,s)},f._createLineSegmentHint=function(e,n,i,a,l=!0,o=!0){const s=new r.ExtendedLineVisualElement({view:n,extensionType:r.ExtensionType.FADED,start:i,end:a,color:t.toUnitRGBA(p.defaults.orange),renderOccluded:c.RenderOccludedFlag.Opaque});switch(e){case g.LineSegmentHintType.TARGET:s.width=p.defaults.lineHintWidthTarget,s.fadedExtensions={start:0,end:p.defaults.lineHintFadedExtensions};break;case g.LineSegmentHintType.REFERENCE_EXTENSION:s.width=p.defaults.lineHintWidthReference,s.fadedExtensions={start:0,end:0};break;case g.LineSegmentHintType.REFERENCE:s.width=p.defaults.lineHintWidthReference,s.fadedExtensions={start:l?p.defaults.lineHintFadedExtensions:0,end:o?p.defaults.lineHintFadedExtensions:0}}return s.attached=!0,s},i}(f.SnappingVisualizer);e.SnappingVisualizer3D=v,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));