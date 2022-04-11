/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../../../core/uuid","../../../layers/support/BuildingFilterBlock","../../../layers/support/BuildingFilterModeSolid","../../../layers/support/BuildingFilterModeXRay"],(function(e,t,i,n,r,o){"use strict";const l="__BUILDING_EXPLORER_FILTER__";function s(){return`${i.generateUUID()}${l}`}function u(e){const t="string"==typeof e?e:e.id;return!!t&&-1!==t.indexOf(l)}function f(e,i){for(const n of e.items)for(const e of n.filters.items){if(!u(e))continue;const n=i(e);if(t.isSome(n))return n}return null}function c(e,i){e.forEach((e=>{const n=e.filters.filter((e=>!u(e)));t.isSome(i)&&n.push(i),d(e.filters,n)||(e.filters=n);const r=e.filters.find((e=>u(e)));e.activeFilterId=t.isSome(r)?r.id:null}))}function d(e,i){const n=i.length;if(t.isNone(e)||e.length!==n)return!1;for(let t=0;t<n;++t){const n=i.getItemAt(t).toJSON(),r=e.getItemAt(t).toJSON();if(n.id="",r.id="",JSON.stringify(n)!==JSON.stringify(r))return!1}return!0}function g(e){const t=p(e);return t?new n({filterExpression:t,filterMode:new o}):null}function a(e){const t=p(e);return t?new n({filterExpression:t,filterMode:new r}):null}function p(e){return e.filter((e=>!!e)).map((e=>`(${e})`)).join(" AND ")}e.generateFilterId=s,e.getFilterBlockSolid=a,e.getFilterBlockXRay=g,e.getValueFromFilters=f,e.isBuildingExplorerFilter=u,e.setFilterOnLayers=c,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));