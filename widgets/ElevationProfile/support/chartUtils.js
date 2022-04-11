/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../intl","../../../core/arrayUtils","../../../core/handleUtils","../../../core/maybe","../../../core/promiseUtils","../../../core/unitFormatUtils","../../../core/unitUtils","../css","./constants","./intlUtils","./niceScale","../../support/chartUtils","../../support/widgetUtils","../../../core/has","../../../core/Logger","../../support/widgetThemeUtils","../../../intl/substitute","../../../intl/number"],(function(e,i,t,o,n,a,s,l,r,d,c,p,u,m,x,g,f,h,b,v){"use strict";const T="#f8f8f8",y="#a9a9a9",A="#323232",S="line",C="fill",L=15,k=12,P=30,z=.001,F=.5,M=.5,w=30,I=.02,N=.02,O={sideSpacing:L,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,axisFontSize:9,axisFontWeight:"400",axisGridStroke:"#f4f4f4",axisLabelsFontSize:9,axisLabelsFontWeight:"400",axisLabelsColor:y,axisTooltipFontSize:12,axisTooltipBackgroundColor:A,axisTooltipLabelColor:T,axisTooltipPaddingTop:Math.round(k/4),axisTooltipPaddingBottom:Math.round(k/4),axisTooltipPaddingHorizontal:Math.round(L/4),xAxisMinGridDistance:50,xAxisLabelsSpacing:Math.round(k/2),xAxisMinLabelPosition:.05,xAxisMaxLabelPosition:.9,yAxisMinGridDistance:30,yAxisLabelSpacing:Math.round(L/4),yAxisMinLabelPosition:0,yAxisMaxLabelPosition:.8,seriesTooltipFontSize:12,seriesTooltipBackgroundColor:T,seriesTooltipLabelColor:A,seriesFillLighten:.9,seriesTooltipSpacing:k/2,seriesTooltipPaddingVertical:Math.round(L/4),seriesTooltipPaddingHorizontal:Math.round(L/4),tooltipBorderRadius:0},H={...O,axisGridStroke:A,axisLabelsColor:y,axisTooltipBackgroundColor:A,axisTooltipLabelColor:T,seriesTooltipBackgroundColor:A,seriesTooltipLabelColor:T,seriesFillLighten:-.75},Y={minX:void 0,maxX:void 0,minY:void 0,maxY:void 0};function X(e){return R.apply(this,arguments)}function R(){return(R=i._asyncToGenerator((function*(e){const i=yield m.loadChartsModule();s.throwIfAborted(e.abortOptions);const{am4core:t,am4charts:o}=i;t.options.minPolylineStep=F,t.options.autoSetClassName=!0,t.options.animationsEnabled=!1;const l=h.isDarkTheme(),r=l?H:O;l&&t.useTheme(i.am4themes_dark);const d=t.create(e.container,o.XYChart);d.arrangeTooltips=!1,d.preloader.disabled=!0,d.zoomOutButton.disabled=!0;const c=x.isRTL(e.container);d.rtl=c,d.padding(r.paddingTop,c?r.paddingLeft:r.paddingRight,r.paddingBottom,c?r.paddingRight:r.paddingLeft);const p=d.plotContainer.background;p.strokeWidth=0,p.strokeOpacity=0,p.stroke=null;const u=d.xAxes.push(new o.ValueAxis),g=d.yAxes.push(new o.ValueAxis),f={params:e,amCharts4Index:i,amChart:d,xAxis:u,yAxis:g,series:new Map,data:null,messages:null,theme:r,zooming:!1,pointerIsOver:!1};d.cursor=W(f),U(f),B(f),E(f);const b=[Q(f,e.onRangeChange),ie(f,e.onCursorPositionChange),ee(f)];let v=null,T=!1;const y=()=>{a.isNone(v)||("undefined"!=typeof window&&"cancelIdleCallback"in window?window.cancelIdleCallback(v):clearTimeout(v),v=null)};return{...f,destroy(){T=!0,y(),n.handlesGroup(b).remove(),d.dispose()},update(e){if(e.data===f.data&&e.messages===f.messages)return;if(y(),T)return;const i=()=>{T||(v=null,D(f,e))};v="undefined"!=typeof window&&"requestIdleCallback"in window?window.requestIdleCallback(i,{timeout:w}):setTimeout(i,w)},zoomOut(){T||(f.yAxis.zoom({start:0,end:1},!1,!0),f.xAxis.zoom({start:0,end:1},!1,!0))}}}))).apply(this,arguments)}function W(e){const i=new e.amCharts4Index.am4charts.XYCursor;return i.trackable=!0,i.lineY.disabled=!0,i.behavior="zoomXY",i}function U(e){const i=e.theme,t=e.amChart.tooltip,{am4core:o}=e.amCharts4Index;t.id="series-tooltip",t.fitPointerToBounds=!0,t.pointerOrientation="vertical",t.zIndex=-1,t.getFillFromObject=!1,t.label.fontSize=i.seriesTooltipFontSize,t.label.fill=o.color(i.seriesTooltipLabelColor),t.label.padding(i.seriesTooltipPaddingVertical,i.seriesTooltipPaddingHorizontal,i.seriesTooltipPaddingVertical,i.seriesTooltipPaddingHorizontal),t.background.cornerRadius=i.tooltipBorderRadius,t.background.stroke=null,t.background.fill=o.color(i.seriesTooltipBackgroundColor),t.background.padding(0,0,0,0),t.adapter.add("dy",(()=>i.seriesTooltipSpacing*(t.background.pointerY<=0?1:-1))),x.isRTL(e.params.container)&&(t.label.textAlign="middle")}function B(e){const{xAxis:i,theme:t}=e,{am4core:o}=e.amCharts4Index;i.numberFormatter=le(e,"distance"),i.strictMinMax=!0,i.cursorTooltipEnabled=!1,i.title.visible=!1;const n=i.renderer;n.line.visible=!1,n.minGridDistance=t.xAxisMinGridDistance,n.minLabelPosition=t.xAxisMinLabelPosition,n.maxLabelPosition=t.xAxisMaxLabelPosition,n.fontWeight=t.axisFontWeight,n.fontSize=t.axisFontSize,n.baseGrid.disabled=!0;const a=n.labels.template;a.fontSize=t.axisLabelsFontSize,a.fontWeight=t.axisLabelsFontWeight,a.fill=o.color(t.axisLabelsColor),a.paddingTop=t.xAxisLabelsSpacing,a.horizontalCenter="left",a.paddingLeft=0;const s=i.tooltip;s.id="axis-tooltip",s.background.fill=o.color(t.axisTooltipBackgroundColor),s.background.stroke=null,s.background.padding(0,0,0,0),s.label.fontSize=t.axisTooltipFontSize,s.label.fill=o.color(t.axisTooltipLabelColor),s.label.padding(t.axisTooltipPaddingTop,t.axisTooltipPaddingHorizontal,t.axisTooltipPaddingBottom,t.axisTooltipPaddingHorizontal);const l=n.grid.template;l.strokeOpacity=1,l.stroke=o.color(t.axisGridStroke)}function E(e){const{yAxis:i,theme:t}=e,{am4core:o}=e.amCharts4Index;i.numberFormatter=le(e,"elevation"),i.title.visible=!1,i.cursorTooltipEnabled=!1,i.strictMinMax=!0,i.baseValue=c.NO_DATA_VALUE;const n=i.renderer;n.inside=!0,n.line.opacity=0,n.line.visible=!1,n.minGridDistance=t.yAxisMinGridDistance,n.minLabelPosition=t.yAxisMinLabelPosition,n.maxLabelPosition=t.yAxisMaxLabelPosition,n.fontWeight=t.axisFontWeight,n.fontSize=t.axisFontSize,n.baseGrid.disabled=!0;const a=n.labels.template;a.fontSize=t.axisLabelsFontSize,a.fontWeight=t.axisLabelsFontWeight,a.fill=o.color(t.axisLabelsColor),a.verticalCenter="bottom",a.paddingLeft=t.yAxisLabelSpacing,a.paddingBottom=0;const s=n.grid.template;s.strokeOpacity=1,s.stroke=o.color(t.axisGridStroke),x.isRTL(e.params.container)&&(n.opposite=!0,a.textAlign="middle",a.paddingLeft=0,a.paddingRight=t.yAxisLabelSpacing)}function D(e,{data:i,messages:t}){const o=a.isSome(i)&&i.refined;e.amChart.cursor.disabled=!o,e.amChart.htmlContainer.classList.toggle(d.CHART_CSS.cursorEnabled,o);const n=e.data!==i,s=a.applySome(e.data,(e=>e.effectiveUnits))!==a.applySome(i,(e=>e.effectiveUnits));e.data=i,e.messages=t,n&&(G(e),j(e)),s&&(e.yAxis.invalidateLabels(),e.xAxis.invalidateLabels()),te(e)}function G(e){const{xAxis:i,yAxis:t}=e,{minX:o,maxX:n,minY:a,maxY:s}=_({data:e.data,pixelWidth:i.pixelWidth,pixelHeight:t.pixelHeight});i.min=o,i.max=n,t.min=a,t.max=s}function _({data:e,pixelWidth:i,pixelHeight:t}){if(a.isNone(e))return Y;const o=e.statistics,n=0,s=a.applySome(o,(e=>e.maxDistance));let l=a.applySome(o,(e=>e.minElevation)),d=a.applySome(o,(e=>e.maxElevation));if(a.isNone(s)||a.isNone(l)||a.isNone(d))return Y;const p=Math.max(s-n,z);let m=Math.max(d-l,z);const x=e.effectiveUnits;if(e.dynamicElevationRange){const e=r.convertUnit(p,x.distance,x.elevation);m=Math.max(m,e/c.MAX_CHART_RATIO)}return l-=N*m,d=l+m+I*m,[l,d]=u.niceScale(l,d,10),m=d-l,e.uniformScaling?V({data:e,bounds:{minX:n,maxX:s,minY:l,maxY:d},pixelWidth:i,pixelHeight:t,centered:!0}):{minX:n,maxX:n+p,minY:l,maxY:l+m}}function V({data:e,bounds:i,pixelWidth:t,pixelHeight:o,centered:n}){if(a.isNone(e))return i;let{minX:s,maxX:l,minY:d,maxY:c}=i;const p=l-s,u=c-d,m=e.effectiveUnits,x=r.convertUnit(u,m.elevation,m.distance)/o/(p/t);return x>=1?[s,l]=$([s,l],x,n):[d,c]=$([d,c],1/x,n),{minX:s,maxX:l,minY:d,maxY:c}}function $([e,i],t,o){const n=(i-e)*t;if(o){const t=(e+i)/2-n/2;return[t,t+n]}return[e,e+n]}function j(e){const{amChart:i,data:t}=e;if(a.isNone(t)||0===t.lines.length)return void i.series.clear();const o=new Map,n=new Set(i.series.values),s=t.lines.length;for(let l=0;l<s;l++){const r=t.lines[l];let d=e.series.get(r.id);d?(a.applySome(d.fill,(e=>n.delete(e))),n.delete(d.line)):(d=J(e,r),a.applySome(d.fill,(e=>i.series.push(e))),i.series.push(d.line)),o.set(d.id,d);const c=s-l-1;a.applySome(d.fill,(e=>e.zIndex=c)),d.line.zIndex=s+c,Z(e,d,r)}e.series=o;for(const a of n)i.series.removeValue(a)}function Z(e,{line:i,fill:t},o){const{theme:n}=e,{am4core:s}=e.amCharts4Index,{r:l,g:r,b:d,a:c}=o.color,p=s.color({r:l,g:r,b:d,a:c}),u=a.unwrapOr(o.samples,[]),m=u.length>0;i.stroke=p,i.visible=m,a.applySome(t,(e=>{e.visible=m,e.fill=p.lighten(n.seriesFillLighten)}));const x=u.length,g=i.data;if(g.length===x){for(let e=0;e<x;++e)q(g[e],u[e]);i.invalidateRawData(),a.applySome(t,(e=>e.invalidateRawData()))}else i.data=u,a.applySome(t,(e=>e.data=u))}function q(e,i){e.x=i.x,e.y=i.y,e.z=i.z,e.distance=i.distance,e.elevation=i.elevation}function J(e,i){const{id:t}=i,o=K(e,`${S}-${t}`);o.strokeWidth=i.chartStrokeWidth,o.dy=i.chartStrokeOffsetY;let n=null;return i.chartFillEnabled&&(n=K(e,`${C}-${t}`),n.fillOpacity=1),{id:t,line:o,fill:n}}function K(e,i){const t=new e.amCharts4Index.am4charts.LineSeries;t.id=i,t.showOnInit=!1,t.simplifiedProcessing=!0,t.minDistance=M,t.excludeFromTotal=!0,t.clickable=!1,t.contextMenuDisabled=!0,t.cursorHoverEnabled=!1,t.cursorTooltipEnabled=!1,t.connect=!1,t.fill=null,t.stroke=null;const o="distance";t.dataFields.valueX=o;const n="elevation";return t.dataFields.valueY=n,t}function Q(e,i){const{amChart:t,xAxis:o,yAxis:s}=e;let l=!1;const r=()=>{const{data:i}=e;if(!l||a.isNone(i)||!i.uniformScaling)return;l=!1;const{minX:n,maxX:r,minY:d,maxY:c}=V({data:e.data,bounds:{minX:o.minZoomed,maxX:o.maxZoomed,minY:s.minZoomed,maxY:s.maxZoomed},pixelWidth:o.pixelWidth,pixelHeight:s.pixelHeight,centered:!0});o.zoomToValues(n,r,!0),s.zoomToValues(d,c,!0),t.validate(),te(e)},d=()=>{i(e.xAxis.zoomFactor,e.yAxis.zoomFactor)},c=i=>{e.zooming=i,te(e)},p=[t.events.on("down",(()=>c(!0))),t.events.on("up",(()=>c(!1))),t.cursor.events.on("zoomended",(()=>{l=!0})),o.events.on("startendchanged",r),s.events.on("startendchanged",r),o.events.on("rangechangeended",d),s.events.on("rangechangeended",d)];return n.makeHandle((()=>{p.forEach((e=>e.dispose()))}))}function ee({xAxis:e,yAxis:i}){const t=e=>()=>{e.renderer.grid.each((e=>{e.visible="none"!==e.dataItem.label.dom.getAttribute("display")}))},o=[e.events.on("rangechangeended",t(e)),e.events.on("validated",t(e)),i.events.on("rangechangeended",t(i)),i.events.on("validated",t(i))];return n.makeHandle((()=>{o.forEach((e=>e.dispose()))}))}function ie(e,i){const{amChart:t,xAxis:o,yAxis:a}=e,{cursor:s,events:l}=t,r=i=>{e.pointerIsOver=i,te(e)},d=()=>{r(!1),i(null,null)},c=[s.events.on("cursorpositionchanged",(()=>{if(!e.pointerIsOver)return;te(e);const t=o.toAxisPosition(s.xPosition),n=a.toAxisPosition(s.yPosition);i(t,n)})),l.on("over",(()=>r(!0))),l.on("out",d),l.on("blur",d)];return n.makeHandle((()=>{c.forEach((e=>e.dispose()))}))}function te(e){const{amChart:i,xAxis:t,data:o,theme:n,zooming:s,pointerIsOver:l}=e;if(e.amChart.tooltip.hide(),e.xAxis.hideTooltip(),!l)return;if(s)return;if(a.isNone(o)||!o.refined)return;const r=oe(e);if(a.isSome(r)){const{cursor:o,tooltip:a}=i;o.show(0),o.validate(),a.text=r.text,a.show(0),a.validate();const s=r.y-a.contentHeight-n.seriesTooltipSpacing;a.pointerOrientation=s<P?"up":"down",a.pointTo(r,!0),a.validate();const l=t.tooltip;l.text=se(e),l.show(0),l.validate()}}function oe(e){const{amChart:i,yAxis:t,data:o}=e;if(a.isNone(o))return null;const n=o.lines.map((i=>({line:i,y:a.applySome(re(e,i),(e=>e.elevation))}))).sort(ne),s=n.length?n[0].y:null;if(a.isNone(s))return null;const l=i.cursor,r=t.measuredHeight,d=r+i.pixelPaddingTop;return{text:n.map((({y:i,line:t})=>ae(e,t,i))).join("\n"),x:l.point.x+l.parent.pixelX+i.pixelPaddingLeft,y:d-t.valueToPosition(s)*r}}function ne({y:e},{y:i}){return a.isNone(e)?1:a.isNone(i)?-1:i-e}function ae(e,i,t){const{data:o,messages:n}=e;if(a.isNone(o)||a.isNone(n))return"";const s=b.substitute(n.chartTooltip,{name:p.getTranslatedLineTitle(i,n),elevation:a.isSome(t)?l.formatDecimal(n,t,o.effectiveUnits.elevation,c.FORMAT_PRECISION):c.NOT_AVAILABLE});return`[${i.color.toHex()}]●[/] ${s}`}function se(e){const{data:i,messages:t}=e;if(a.isNone(i)||a.isNone(t))return"";const o=i.lines[0],n=o?re(e,o):null;return a.isSome(n)?l.formatDecimal(t,n.distance,i.effectiveUnits.distance,c.FORMAT_PRECISION):"-"}function le(e,i){const t=e.xAxis.numberFormatter.clone();return t.format=(t,o,n)=>{const{messages:s,data:r}=e;if(a.isNone(s)||a.isNone(r)||"string"==typeof t)return"";return`${v.formatNumber(t,{maximumFractionDigits:n})} ${l.unitName(s,r.effectiveUnits[i],"abbr")}`},t}function re({amChart:e,xAxis:i},t){const n=a.unwrapOr(t.samples,[]);if(0===n.length)return null;const s=i.toAxisPosition(e.cursor.xPosition),l=i.positionToValue(s);return o.binaryFindClosest(n,l,(e=>e.distance))}e.createChart=X,e.getAdjustedBounds=_,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));