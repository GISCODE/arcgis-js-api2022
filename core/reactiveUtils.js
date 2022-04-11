/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./events","./handleUtils","./maybe","./promiseUtils","./accessorSupport/watch","./accessorSupport/trackingUtils"],(function(n,e,t,r,o,i,u){"use strict";function c(n,e,t={}){return s(n,e,t,y)}function l(n,e,t={}){return s(n,e,t,v)}function s(n,e,t={},o){let u=null;const c=t.once?(n,t)=>{o(n)&&(r.removeMaybe(u),e(n,t))}:(n,t)=>{o(n)&&e(n,t)};if(u=i.watchTracked(n,c,t.sync,t.equals),t.initial){const e=n();c(e,e)}return u}function a(n,o,i,u={}){let l=null,s=null,a=null;function f(){l&&s&&(s.remove(),null==u.onListenerRemove||u.onListenerRemove(l),l=null,s=null)}function d(n){u.once&&u.once&&r.removeMaybe(a),i(n)}const m=c(n,((n,t)=>{f(),e.isEventTarget(n)&&(l=n,s=e.on(n,o,d),null==u.onListenerAdd||u.onListenerAdd(n))}),{sync:u.sync,initial:!0});return a=t.makeHandle((()=>{m.remove(),f()})),a}function f(n,e){return m(n,null,e)}function d(n,e){return m(n,v,e)}function m(n,e,i){if(o.isAborted(i))return Promise.reject(o.createAbortError());const u=n();if(null!=e&&e(u))return Promise.resolve(u);let c=null;function l(){c=r.removeMaybe(c)}return new Promise(((r,u)=>{c=t.handlesGroup([o.onAbort(i,(()=>{l(),u(o.createAbortError())})),s(n,(n=>{l(),r(n)}),{sync:!1,once:!0},null!=e?e:y)])}))}function y(n){return!0}function v(n){return!!n}const b={sync:!0},p={initial:!0},h={sync:!0,initial:!0};n.autorun=u.autorun,n.initial=p,n.on=a,n.once=f,n.sync=b,n.syncAndInitial=h,n.watch=c,n.when=l,n.whenOnce=d,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
