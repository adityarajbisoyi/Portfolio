(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function r(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(c){if(c.ep)return;c.ep=!0;const f=r(c);fetch(c.href,f)}})();function $2(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Gu={exports:{}},Ys={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0;function Q2(){if(L0)return Ys;L0=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function r(o,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var m in c)m!=="key"&&(f[m]=c[m])}else f=c;return c=f.ref,{$$typeof:n,type:o,key:d,ref:c!==void 0?c:null,props:f}}return Ys.Fragment=a,Ys.jsx=r,Ys.jsxs=r,Ys}var H0;function K2(){return H0||(H0=1,Gu.exports=Q2()),Gu.exports}var h=K2(),Yu={exports:{}},ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0;function Z2(){if(U0)return ft;U0=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function b(E){return E===null||typeof E!="object"?null:(E=S&&E[S]||E["@@iterator"],typeof E=="function"?E:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,B={};function U(E,q,I){this.props=E,this.context=q,this.refs=B,this.updater=I||T}U.prototype.isReactComponent={},U.prototype.setState=function(E,q){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,q,"setState")},U.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function F(){}F.prototype=U.prototype;function P(E,q,I){this.props=E,this.context=q,this.refs=B,this.updater=I||T}var L=P.prototype=new F;L.constructor=P,M(L,U.prototype),L.isPureReactComponent=!0;var Z=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},$=Object.prototype.hasOwnProperty;function _(E,q,I,W,it,mt){return I=mt.ref,{$$typeof:n,type:E,key:q,ref:I!==void 0?I:null,props:mt}}function X(E,q){return _(E.type,q,void 0,void 0,void 0,E.props)}function K(E){return typeof E=="object"&&E!==null&&E.$$typeof===n}function ct(E){var q={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(I){return q[I]})}var Vt=/\/+/g;function Ut(E,q){return typeof E=="object"&&E!==null&&E.key!=null?ct(""+E.key):q.toString(36)}function $e(){}function ze(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then($e,$e):(E.status="pending",E.then(function(q){E.status==="pending"&&(E.status="fulfilled",E.value=q)},function(q){E.status==="pending"&&(E.status="rejected",E.reason=q)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function Qt(E,q,I,W,it){var mt=typeof E;(mt==="undefined"||mt==="boolean")&&(E=null);var st=!1;if(E===null)st=!0;else switch(mt){case"bigint":case"string":case"number":st=!0;break;case"object":switch(E.$$typeof){case n:case a:st=!0;break;case v:return st=E._init,Qt(st(E._payload),q,I,W,it)}}if(st)return it=it(E),st=W===""?"."+Ut(E,0):W,Z(it)?(I="",st!=null&&(I=st.replace(Vt,"$&/")+"/"),Qt(it,q,I,"",function(ce){return ce})):it!=null&&(K(it)&&(it=X(it,I+(it.key==null||E&&E.key===it.key?"":(""+it.key).replace(Vt,"$&/")+"/")+st)),q.push(it)),1;st=0;var It=W===""?".":W+":";if(Z(E))for(var St=0;St<E.length;St++)W=E[St],mt=It+Ut(W,St),st+=Qt(W,q,I,mt,it);else if(St=b(E),typeof St=="function")for(E=St.call(E),St=0;!(W=E.next()).done;)W=W.value,mt=It+Ut(W,St++),st+=Qt(W,q,I,mt,it);else if(mt==="object"){if(typeof E.then=="function")return Qt(ze(E),q,I,W,it);throw q=String(E),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return st}function V(E,q,I){if(E==null)return E;var W=[],it=0;return Qt(E,W,"","",function(mt){return q.call(I,mt,it++)}),W}function Q(E){if(E._status===-1){var q=E._result;q=q(),q.then(function(I){(E._status===0||E._status===-1)&&(E._status=1,E._result=I)},function(I){(E._status===0||E._status===-1)&&(E._status=2,E._result=I)}),E._status===-1&&(E._status=0,E._result=q)}if(E._status===1)return E._result.default;throw E._result}var et=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)};function ut(){}return ft.Children={map:V,forEach:function(E,q,I){V(E,function(){q.apply(this,arguments)},I)},count:function(E){var q=0;return V(E,function(){q++}),q},toArray:function(E){return V(E,function(q){return q})||[]},only:function(E){if(!K(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},ft.Component=U,ft.Fragment=r,ft.Profiler=c,ft.PureComponent=P,ft.StrictMode=o,ft.Suspense=p,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,ft.__COMPILER_RUNTIME={__proto__:null,c:function(E){return G.H.useMemoCache(E)}},ft.cache=function(E){return function(){return E.apply(null,arguments)}},ft.cloneElement=function(E,q,I){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var W=M({},E.props),it=E.key,mt=void 0;if(q!=null)for(st in q.ref!==void 0&&(mt=void 0),q.key!==void 0&&(it=""+q.key),q)!$.call(q,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&q.ref===void 0||(W[st]=q[st]);var st=arguments.length-2;if(st===1)W.children=I;else if(1<st){for(var It=Array(st),St=0;St<st;St++)It[St]=arguments[St+2];W.children=It}return _(E.type,it,void 0,void 0,mt,W)},ft.createContext=function(E){return E={$$typeof:d,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:f,_context:E},E},ft.createElement=function(E,q,I){var W,it={},mt=null;if(q!=null)for(W in q.key!==void 0&&(mt=""+q.key),q)$.call(q,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(it[W]=q[W]);var st=arguments.length-2;if(st===1)it.children=I;else if(1<st){for(var It=Array(st),St=0;St<st;St++)It[St]=arguments[St+2];it.children=It}if(E&&E.defaultProps)for(W in st=E.defaultProps,st)it[W]===void 0&&(it[W]=st[W]);return _(E,mt,void 0,void 0,null,it)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(E){return{$$typeof:m,render:E}},ft.isValidElement=K,ft.lazy=function(E){return{$$typeof:v,_payload:{_status:-1,_result:E},_init:Q}},ft.memo=function(E,q){return{$$typeof:g,type:E,compare:q===void 0?null:q}},ft.startTransition=function(E){var q=G.T,I={};G.T=I;try{var W=E(),it=G.S;it!==null&&it(I,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(ut,et)}catch(mt){et(mt)}finally{G.T=q}},ft.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},ft.use=function(E){return G.H.use(E)},ft.useActionState=function(E,q,I){return G.H.useActionState(E,q,I)},ft.useCallback=function(E,q){return G.H.useCallback(E,q)},ft.useContext=function(E){return G.H.useContext(E)},ft.useDebugValue=function(){},ft.useDeferredValue=function(E,q){return G.H.useDeferredValue(E,q)},ft.useEffect=function(E,q,I){var W=G.H;if(typeof I=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return W.useEffect(E,q)},ft.useId=function(){return G.H.useId()},ft.useImperativeHandle=function(E,q,I){return G.H.useImperativeHandle(E,q,I)},ft.useInsertionEffect=function(E,q){return G.H.useInsertionEffect(E,q)},ft.useLayoutEffect=function(E,q){return G.H.useLayoutEffect(E,q)},ft.useMemo=function(E,q){return G.H.useMemo(E,q)},ft.useOptimistic=function(E,q){return G.H.useOptimistic(E,q)},ft.useReducer=function(E,q,I){return G.H.useReducer(E,q,I)},ft.useRef=function(E){return G.H.useRef(E)},ft.useState=function(E){return G.H.useState(E)},ft.useSyncExternalStore=function(E,q,I){return G.H.useSyncExternalStore(E,q,I)},ft.useTransition=function(){return G.H.useTransition()},ft.version="19.1.0",ft}var F0;function id(){return F0||(F0=1,Yu.exports=Z2()),Yu.exports}var O=id();const Je=$2(O);var qu={exports:{}},qs={},Pu={exports:{}},Xu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0;function I2(){return G0||(G0=1,function(n){function a(V,Q){var et=V.length;V.push(Q);t:for(;0<et;){var ut=et-1>>>1,E=V[ut];if(0<c(E,Q))V[ut]=Q,V[et]=E,et=ut;else break t}}function r(V){return V.length===0?null:V[0]}function o(V){if(V.length===0)return null;var Q=V[0],et=V.pop();if(et!==Q){V[0]=et;t:for(var ut=0,E=V.length,q=E>>>1;ut<q;){var I=2*(ut+1)-1,W=V[I],it=I+1,mt=V[it];if(0>c(W,et))it<E&&0>c(mt,W)?(V[ut]=mt,V[it]=et,ut=it):(V[ut]=W,V[I]=et,ut=I);else if(it<E&&0>c(mt,et))V[ut]=mt,V[it]=et,ut=it;else break t}}return Q}function c(V,Q){var et=V.sortIndex-Q.sortIndex;return et!==0?et:V.id-Q.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var d=Date,m=d.now();n.unstable_now=function(){return d.now()-m}}var p=[],g=[],v=1,S=null,b=3,T=!1,M=!1,B=!1,U=!1,F=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function Z(V){for(var Q=r(g);Q!==null;){if(Q.callback===null)o(g);else if(Q.startTime<=V)o(g),Q.sortIndex=Q.expirationTime,a(p,Q);else break;Q=r(g)}}function G(V){if(B=!1,Z(V),!M)if(r(p)!==null)M=!0,$||($=!0,Ut());else{var Q=r(g);Q!==null&&Qt(G,Q.startTime-V)}}var $=!1,_=-1,X=5,K=-1;function ct(){return U?!0:!(n.unstable_now()-K<X)}function Vt(){if(U=!1,$){var V=n.unstable_now();K=V;var Q=!0;try{t:{M=!1,B&&(B=!1,P(_),_=-1),T=!0;var et=b;try{e:{for(Z(V),S=r(p);S!==null&&!(S.expirationTime>V&&ct());){var ut=S.callback;if(typeof ut=="function"){S.callback=null,b=S.priorityLevel;var E=ut(S.expirationTime<=V);if(V=n.unstable_now(),typeof E=="function"){S.callback=E,Z(V),Q=!0;break e}S===r(p)&&o(p),Z(V)}else o(p);S=r(p)}if(S!==null)Q=!0;else{var q=r(g);q!==null&&Qt(G,q.startTime-V),Q=!1}}break t}finally{S=null,b=et,T=!1}Q=void 0}}finally{Q?Ut():$=!1}}}var Ut;if(typeof L=="function")Ut=function(){L(Vt)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,ze=$e.port2;$e.port1.onmessage=Vt,Ut=function(){ze.postMessage(null)}}else Ut=function(){F(Vt,0)};function Qt(V,Q){_=F(function(){V(n.unstable_now())},Q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(V){V.callback=null},n.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<V?Math.floor(1e3/V):5},n.unstable_getCurrentPriorityLevel=function(){return b},n.unstable_next=function(V){switch(b){case 1:case 2:case 3:var Q=3;break;default:Q=b}var et=b;b=Q;try{return V()}finally{b=et}},n.unstable_requestPaint=function(){U=!0},n.unstable_runWithPriority=function(V,Q){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var et=b;b=V;try{return Q()}finally{b=et}},n.unstable_scheduleCallback=function(V,Q,et){var ut=n.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?ut+et:ut):et=ut,V){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=et+E,V={id:v++,callback:Q,priorityLevel:V,startTime:et,expirationTime:E,sortIndex:-1},et>ut?(V.sortIndex=et,a(g,V),r(p)===null&&V===r(g)&&(B?(P(_),_=-1):B=!0,Qt(G,et-ut))):(V.sortIndex=E,a(p,V),M||T||(M=!0,$||($=!0,Ut()))),V},n.unstable_shouldYield=ct,n.unstable_wrapCallback=function(V){var Q=b;return function(){var et=b;b=Q;try{return V.apply(this,arguments)}finally{b=et}}}}(Xu)),Xu}var Y0;function W2(){return Y0||(Y0=1,Pu.exports=I2()),Pu.exports}var $u={exports:{}},de={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0;function J2(){if(q0)return de;q0=1;var n=id();function a(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var o={d:{f:r,r:function(){throw Error(a(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(p,g,v){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:S==null?null:""+S,children:p,containerInfo:g,implementation:v}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return de.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,de.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(a(299));return f(p,g,null,v)},de.flushSync=function(p){var g=d.T,v=o.p;try{if(d.T=null,o.p=2,p)return p()}finally{d.T=g,o.p=v,o.d.f()}},de.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,o.d.C(p,g))},de.prefetchDNS=function(p){typeof p=="string"&&o.d.D(p)},de.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,S=m(v,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,T=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?o.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:b,fetchPriority:T}):v==="script"&&o.d.X(p,{crossOrigin:S,integrity:b,fetchPriority:T,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},de.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=m(g.as,g.crossOrigin);o.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&o.d.M(p)},de.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,S=m(v,g.crossOrigin);o.d.L(p,v,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},de.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=m(g.as,g.crossOrigin);o.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else o.d.m(p)},de.requestFormReset=function(p){o.d.r(p)},de.unstable_batchedUpdates=function(p,g){return p(g)},de.useFormState=function(p,g,v){return d.H.useFormState(p,g,v)},de.useFormStatus=function(){return d.H.useHostTransitionStatus()},de.version="19.1.0",de}var P0;function tS(){if(P0)return $u.exports;P0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),$u.exports=J2(),$u.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0;function eS(){if(X0)return qs;X0=1;var n=W2(),a=id(),r=tS();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){var e=t,i=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(i=e.return),t=e.return;while(t)}return e.tag===3?i:null}function d(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function m(t){if(f(t)!==t)throw Error(o(188))}function p(t){var e=t.alternate;if(!e){if(e=f(t),e===null)throw Error(o(188));return e!==t?null:t}for(var i=t,s=e;;){var l=i.return;if(l===null)break;var u=l.alternate;if(u===null){if(s=l.return,s!==null){i=s;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===i)return m(l),t;if(u===s)return m(l),e;u=u.sibling}throw Error(o(188))}if(i.return!==s.return)i=l,s=u;else{for(var y=!1,x=l.child;x;){if(x===i){y=!0,i=l,s=u;break}if(x===s){y=!0,s=l,i=u;break}x=x.sibling}if(!y){for(x=u.child;x;){if(x===i){y=!0,i=u,s=l;break}if(x===s){y=!0,s=u,i=l;break}x=x.sibling}if(!y)throw Error(o(189))}}if(i.alternate!==s)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?t:e}function g(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=g(t),e!==null)return e;t=t.sibling}return null}var v=Object.assign,S=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),P=Symbol.for("react.consumer"),L=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),K=Symbol.for("react.activity"),ct=Symbol.for("react.memo_cache_sentinel"),Vt=Symbol.iterator;function Ut(t){return t===null||typeof t!="object"?null:(t=Vt&&t[Vt]||t["@@iterator"],typeof t=="function"?t:null)}var $e=Symbol.for("react.client.reference");function ze(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===$e?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case U:return"Profiler";case B:return"StrictMode";case G:return"Suspense";case $:return"SuspenseList";case K:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case L:return(t.displayName||"Context")+".Provider";case P:return(t._context.displayName||"Context")+".Consumer";case Z:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _:return e=t.displayName||null,e!==null?e:ze(t.type)||"Memo";case X:e=t._payload,t=t._init;try{return ze(t(e))}catch{}}return null}var Qt=Array.isArray,V=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},ut=[],E=-1;function q(t){return{current:t}}function I(t){0>E||(t.current=ut[E],ut[E]=null,E--)}function W(t,e){E++,ut[E]=t.current,t.current=e}var it=q(null),mt=q(null),st=q(null),It=q(null);function St(t,e){switch(W(st,e),W(mt,t),W(it,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?d0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=d0(e),t=h0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}I(it),W(it,t)}function ce(){I(it),I(mt),I(st)}function ci(t){t.memoizedState!==null&&W(It,t);var e=it.current,i=h0(e,t.type);e!==i&&(W(mt,t),W(it,i))}function mn(t){mt.current===t&&(I(it),I(mt)),It.current===t&&(I(It),Ls._currentValue=et)}var ke=Object.prototype.hasOwnProperty,Cl=n.unstable_scheduleCallback,Rl=n.unstable_cancelCallback,Eb=n.unstable_shouldYield,jb=n.unstable_requestPaint,an=n.unstable_now,Db=n.unstable_getCurrentPriorityLevel,Xd=n.unstable_ImmediatePriority,$d=n.unstable_UserBlockingPriority,xr=n.unstable_NormalPriority,Mb=n.unstable_LowPriority,Qd=n.unstable_IdlePriority,Cb=n.log,Rb=n.unstable_setDisableYieldValue,Xa=null,we=null;function kn(t){if(typeof Cb=="function"&&Rb(t),we&&typeof we.setStrictMode=="function")try{we.setStrictMode(Xa,t)}catch{}}var Ae=Math.clz32?Math.clz32:kb,_b=Math.log,zb=Math.LN2;function kb(t){return t>>>=0,t===0?32:31-(_b(t)/zb|0)|0}var Sr=256,wr=4194304;function ui(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ar(t,e,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,u=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var x=s&134217727;return x!==0?(s=x&~u,s!==0?l=ui(s):(y&=x,y!==0?l=ui(y):i||(i=x&~t,i!==0&&(l=ui(i))))):(x=s&~u,x!==0?l=ui(x):y!==0?l=ui(y):i||(i=s&~t,i!==0&&(l=ui(i)))),l===0?0:e!==0&&e!==l&&(e&u)===0&&(u=l&-l,i=e&-e,u>=i||u===32&&(i&4194048)!==0)?e:l}function $a(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Ob(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kd(){var t=Sr;return Sr<<=1,(Sr&4194048)===0&&(Sr=256),t}function Zd(){var t=wr;return wr<<=1,(wr&62914560)===0&&(wr=4194304),t}function _l(t){for(var e=[],i=0;31>i;i++)e.push(t);return e}function Qa(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Bb(t,e,i,s,l,u){var y=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var x=t.entanglements,A=t.expirationTimes,R=t.hiddenUpdates;for(i=y&~i;0<i;){var N=31-Ae(i),Y=1<<N;x[N]=0,A[N]=-1;var z=R[N];if(z!==null)for(R[N]=null,N=0;N<z.length;N++){var k=z[N];k!==null&&(k.lane&=-536870913)}i&=~Y}s!==0&&Id(t,s,0),u!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=u&~(y&~e))}function Id(t,e,i){t.pendingLanes|=e,t.suspendedLanes&=~e;var s=31-Ae(e);t.entangledLanes|=e,t.entanglements[s]=t.entanglements[s]|1073741824|i&4194090}function Wd(t,e){var i=t.entangledLanes|=e;for(t=t.entanglements;i;){var s=31-Ae(i),l=1<<s;l&e|t[s]&e&&(t[s]|=e),i&=~l}}function zl(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function kl(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Jd(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:z0(t.type))}function Vb(t,e){var i=Q.p;try{return Q.p=t,e()}finally{Q.p=i}}var On=Math.random().toString(36).slice(2),ue="__reactFiber$"+On,me="__reactProps$"+On,Li="__reactContainer$"+On,Ol="__reactEvents$"+On,Nb="__reactListeners$"+On,Lb="__reactHandles$"+On,th="__reactResources$"+On,Ka="__reactMarker$"+On;function Bl(t){delete t[ue],delete t[me],delete t[Ol],delete t[Nb],delete t[Lb]}function Hi(t){var e=t[ue];if(e)return e;for(var i=t.parentNode;i;){if(e=i[Li]||i[ue]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(t=y0(t);t!==null;){if(i=t[ue])return i;t=y0(t)}return e}t=i,i=t.parentNode}return null}function Ui(t){if(t=t[ue]||t[Li]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Za(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function Fi(t){var e=t[th];return e||(e=t[th]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Wt(t){t[Ka]=!0}var eh=new Set,nh={};function fi(t,e){Gi(t,e),Gi(t+"Capture",e)}function Gi(t,e){for(nh[t]=e,t=0;t<e.length;t++)eh.add(e[t])}var Hb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ih={},ah={};function Ub(t){return ke.call(ah,t)?!0:ke.call(ih,t)?!1:Hb.test(t)?ah[t]=!0:(ih[t]=!0,!1)}function Tr(t,e,i){if(Ub(e))if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var s=e.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+i)}}function Er(t,e,i){if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+i)}}function gn(t,e,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(e,i,""+s)}}var Vl,sh;function Yi(t){if(Vl===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);Vl=e&&e[1]||"",sh=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vl+t+sh}var Nl=!1;function Ll(t,e){if(!t||Nl)return"";Nl=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(e){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(k){var z=k}Reflect.construct(t,[],Y)}else{try{Y.call()}catch(k){z=k}t.call(Y.prototype)}}else{try{throw Error()}catch(k){z=k}(Y=t())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(k){if(k&&z&&typeof k.stack=="string")return[k.stack,z.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=s.DetermineComponentFrameRoot(),y=u[0],x=u[1];if(y&&x){var A=y.split(`
`),R=x.split(`
`);for(l=s=0;s<A.length&&!A[s].includes("DetermineComponentFrameRoot");)s++;for(;l<R.length&&!R[l].includes("DetermineComponentFrameRoot");)l++;if(s===A.length||l===R.length)for(s=A.length-1,l=R.length-1;1<=s&&0<=l&&A[s]!==R[l];)l--;for(;1<=s&&0<=l;s--,l--)if(A[s]!==R[l]){if(s!==1||l!==1)do if(s--,l--,0>l||A[s]!==R[l]){var N=`
`+A[s].replace(" at new "," at ");return t.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",t.displayName)),N}while(1<=s&&0<=l);break}}}finally{Nl=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?Yi(i):""}function Fb(t){switch(t.tag){case 26:case 27:case 5:return Yi(t.type);case 16:return Yi("Lazy");case 13:return Yi("Suspense");case 19:return Yi("SuspenseList");case 0:case 15:return Ll(t.type,!1);case 11:return Ll(t.type.render,!1);case 1:return Ll(t.type,!0);case 31:return Yi("Activity");default:return""}}function rh(t){try{var e="";do e+=Fb(t),t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}function Oe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function oh(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Gb(t){var e=oh(t)?"checked":"value",i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),s=""+t[e];if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var l=i.get,u=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(y){s=""+y,u.call(this,y)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function jr(t){t._valueTracker||(t._valueTracker=Gb(t))}function lh(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var i=e.getValue(),s="";return t&&(s=oh(t)?t.checked?"true":"false":t.value),t=s,t!==i?(e.setValue(t),!0):!1}function Dr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Yb=/[\n"\\]/g;function Be(t){return t.replace(Yb,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Hl(t,e,i,s,l,u,y,x){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),e!=null?y==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Oe(e)):t.value!==""+Oe(e)&&(t.value=""+Oe(e)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),e!=null?Ul(t,y,Oe(e)):i!=null?Ul(t,y,Oe(i)):s!=null&&t.removeAttribute("value"),l==null&&u!=null&&(t.defaultChecked=!!u),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.name=""+Oe(x):t.removeAttribute("name")}function ch(t,e,i,s,l,u,y,x){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||i!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;i=i!=null?""+Oe(i):"",e=e!=null?""+Oe(e):i,x||e===t.value||(t.value=e),t.defaultValue=e}s=s??l,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=x?t.checked:!!s,t.defaultChecked=!!s,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y)}function Ul(t,e,i){e==="number"&&Dr(t.ownerDocument)===t||t.defaultValue===""+i||(t.defaultValue=""+i)}function qi(t,e,i,s){if(t=t.options,e){e={};for(var l=0;l<i.length;l++)e["$"+i[l]]=!0;for(i=0;i<t.length;i++)l=e.hasOwnProperty("$"+t[i].value),t[i].selected!==l&&(t[i].selected=l),l&&s&&(t[i].defaultSelected=!0)}else{for(i=""+Oe(i),e=null,l=0;l<t.length;l++){if(t[l].value===i){t[l].selected=!0,s&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function uh(t,e,i){if(e!=null&&(e=""+Oe(e),e!==t.value&&(t.value=e),i==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=i!=null?""+Oe(i):""}function fh(t,e,i,s){if(e==null){if(s!=null){if(i!=null)throw Error(o(92));if(Qt(s)){if(1<s.length)throw Error(o(93));s=s[0]}i=s}i==null&&(i=""),e=i}i=Oe(e),t.defaultValue=i,s=t.textContent,s===i&&s!==""&&s!==null&&(t.value=s)}function Pi(t,e){if(e){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=e;return}}t.textContent=e}var qb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function dh(t,e,i){var s=e.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?s?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":s?t.setProperty(e,i):typeof i!="number"||i===0||qb.has(e)?e==="float"?t.cssFloat=i:t[e]=(""+i).trim():t[e]=i+"px"}function hh(t,e,i){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,i!=null){for(var s in i)!i.hasOwnProperty(s)||e!=null&&e.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var l in e)s=e[l],e.hasOwnProperty(l)&&i[l]!==s&&dh(t,l,s)}else for(var u in e)e.hasOwnProperty(u)&&dh(t,u,e[u])}function Fl(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mr(t){return Xb.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Gl=null;function Yl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xi=null,$i=null;function ph(t){var e=Ui(t);if(e&&(t=e.stateNode)){var i=t[me]||null;t:switch(t=e.stateNode,e.type){case"input":if(Hl(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),e=i.name,i.type==="radio"&&e!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+Be(""+e)+'"][type="radio"]'),e=0;e<i.length;e++){var s=i[e];if(s!==t&&s.form===t.form){var l=s[me]||null;if(!l)throw Error(o(90));Hl(s,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<i.length;e++)s=i[e],s.form===t.form&&lh(s)}break t;case"textarea":uh(t,i.value,i.defaultValue);break t;case"select":e=i.value,e!=null&&qi(t,!!i.multiple,e,!1)}}}var ql=!1;function mh(t,e,i){if(ql)return t(e,i);ql=!0;try{var s=t(e);return s}finally{if(ql=!1,(Xi!==null||$i!==null)&&(po(),Xi&&(e=Xi,t=$i,$i=Xi=null,ph(e),t)))for(e=0;e<t.length;e++)ph(t[e])}}function Ia(t,e){var i=t.stateNode;if(i===null)return null;var s=i[me]||null;if(s===null)return null;i=s[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(o(231,e,typeof i));return i}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pl=!1;if(yn)try{var Wa={};Object.defineProperty(Wa,"passive",{get:function(){Pl=!0}}),window.addEventListener("test",Wa,Wa),window.removeEventListener("test",Wa,Wa)}catch{Pl=!1}var Bn=null,Xl=null,Cr=null;function gh(){if(Cr)return Cr;var t,e=Xl,i=e.length,s,l="value"in Bn?Bn.value:Bn.textContent,u=l.length;for(t=0;t<i&&e[t]===l[t];t++);var y=i-t;for(s=1;s<=y&&e[i-s]===l[u-s];s++);return Cr=l.slice(t,1<s?1-s:void 0)}function Rr(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _r(){return!0}function yh(){return!1}function ge(t){function e(i,s,l,u,y){this._reactName=i,this._targetInst=l,this.type=s,this.nativeEvent=u,this.target=y,this.currentTarget=null;for(var x in t)t.hasOwnProperty(x)&&(i=t[x],this[x]=i?i(u):u[x]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?_r:yh,this.isPropagationStopped=yh,this}return v(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=_r)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=_r)},persist:function(){},isPersistent:_r}),e}var di={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zr=ge(di),Ja=v({},di,{view:0,detail:0}),$b=ge(Ja),$l,Ql,ts,kr=v({},Ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ts&&(ts&&t.type==="mousemove"?($l=t.screenX-ts.screenX,Ql=t.screenY-ts.screenY):Ql=$l=0,ts=t),$l)},movementY:function(t){return"movementY"in t?t.movementY:Ql}}),vh=ge(kr),Qb=v({},kr,{dataTransfer:0}),Kb=ge(Qb),Zb=v({},Ja,{relatedTarget:0}),Kl=ge(Zb),Ib=v({},di,{animationName:0,elapsedTime:0,pseudoElement:0}),Wb=ge(Ib),Jb=v({},di,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tx=ge(Jb),ex=v({},di,{data:0}),bh=ge(ex),nx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ix={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ax={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ax[t])?!!e[t]:!1}function Zl(){return sx}var rx=v({},Ja,{key:function(t){if(t.key){var e=nx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ix[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zl,charCode:function(t){return t.type==="keypress"?Rr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ox=ge(rx),lx=v({},kr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xh=ge(lx),cx=v({},Ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zl}),ux=ge(cx),fx=v({},di,{propertyName:0,elapsedTime:0,pseudoElement:0}),dx=ge(fx),hx=v({},kr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),px=ge(hx),mx=v({},di,{newState:0,oldState:0}),gx=ge(mx),yx=[9,13,27,32],Il=yn&&"CompositionEvent"in window,es=null;yn&&"documentMode"in document&&(es=document.documentMode);var vx=yn&&"TextEvent"in window&&!es,Sh=yn&&(!Il||es&&8<es&&11>=es),wh=" ",Ah=!1;function Th(t,e){switch(t){case"keyup":return yx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qi=!1;function bx(t,e){switch(t){case"compositionend":return Eh(e);case"keypress":return e.which!==32?null:(Ah=!0,wh);case"textInput":return t=e.data,t===wh&&Ah?null:t;default:return null}}function xx(t,e){if(Qi)return t==="compositionend"||!Il&&Th(t,e)?(t=gh(),Cr=Xl=Bn=null,Qi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sh&&e.locale!=="ko"?null:e.data;default:return null}}var Sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Sx[t.type]:e==="textarea"}function Dh(t,e,i,s){Xi?$i?$i.push(s):$i=[s]:Xi=s,e=xo(e,"onChange"),0<e.length&&(i=new zr("onChange","change",null,i,s),t.push({event:i,listeners:e}))}var ns=null,is=null;function wx(t){o0(t,0)}function Or(t){var e=Za(t);if(lh(e))return t}function Mh(t,e){if(t==="change")return e}var Ch=!1;if(yn){var Wl;if(yn){var Jl="oninput"in document;if(!Jl){var Rh=document.createElement("div");Rh.setAttribute("oninput","return;"),Jl=typeof Rh.oninput=="function"}Wl=Jl}else Wl=!1;Ch=Wl&&(!document.documentMode||9<document.documentMode)}function _h(){ns&&(ns.detachEvent("onpropertychange",zh),is=ns=null)}function zh(t){if(t.propertyName==="value"&&Or(is)){var e=[];Dh(e,is,t,Yl(t)),mh(wx,e)}}function Ax(t,e,i){t==="focusin"?(_h(),ns=e,is=i,ns.attachEvent("onpropertychange",zh)):t==="focusout"&&_h()}function Tx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Or(is)}function Ex(t,e){if(t==="click")return Or(e)}function jx(t,e){if(t==="input"||t==="change")return Or(e)}function Dx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Te=typeof Object.is=="function"?Object.is:Dx;function as(t,e){if(Te(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var i=Object.keys(t),s=Object.keys(e);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var l=i[s];if(!ke.call(e,l)||!Te(t[l],e[l]))return!1}return!0}function kh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Oh(t,e){var i=kh(t);t=0;for(var s;i;){if(i.nodeType===3){if(s=t+i.textContent.length,t<=e&&s>=e)return{node:i,offset:e-t};t=s}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=kh(i)}}function Bh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Bh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Vh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Dr(t.document);e instanceof t.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)t=e.contentWindow;else break;e=Dr(t.document)}return e}function tc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Mx=yn&&"documentMode"in document&&11>=document.documentMode,Ki=null,ec=null,ss=null,nc=!1;function Nh(t,e,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;nc||Ki==null||Ki!==Dr(s)||(s=Ki,"selectionStart"in s&&tc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ss&&as(ss,s)||(ss=s,s=xo(ec,"onSelect"),0<s.length&&(e=new zr("onSelect","select",null,e,i),t.push({event:e,listeners:s}),e.target=Ki)))}function hi(t,e){var i={};return i[t.toLowerCase()]=e.toLowerCase(),i["Webkit"+t]="webkit"+e,i["Moz"+t]="moz"+e,i}var Zi={animationend:hi("Animation","AnimationEnd"),animationiteration:hi("Animation","AnimationIteration"),animationstart:hi("Animation","AnimationStart"),transitionrun:hi("Transition","TransitionRun"),transitionstart:hi("Transition","TransitionStart"),transitioncancel:hi("Transition","TransitionCancel"),transitionend:hi("Transition","TransitionEnd")},ic={},Lh={};yn&&(Lh=document.createElement("div").style,"AnimationEvent"in window||(delete Zi.animationend.animation,delete Zi.animationiteration.animation,delete Zi.animationstart.animation),"TransitionEvent"in window||delete Zi.transitionend.transition);function pi(t){if(ic[t])return ic[t];if(!Zi[t])return t;var e=Zi[t],i;for(i in e)if(e.hasOwnProperty(i)&&i in Lh)return ic[t]=e[i];return t}var Hh=pi("animationend"),Uh=pi("animationiteration"),Fh=pi("animationstart"),Cx=pi("transitionrun"),Rx=pi("transitionstart"),_x=pi("transitioncancel"),Gh=pi("transitionend"),Yh=new Map,ac="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ac.push("scrollEnd");function Qe(t,e){Yh.set(t,e),fi(e,[t])}var qh=new WeakMap;function Ve(t,e){if(typeof t=="object"&&t!==null){var i=qh.get(t);return i!==void 0?i:(e={value:t,source:e,stack:rh(e)},qh.set(t,e),e)}return{value:t,source:e,stack:rh(e)}}var Ne=[],Ii=0,sc=0;function Br(){for(var t=Ii,e=sc=Ii=0;e<t;){var i=Ne[e];Ne[e++]=null;var s=Ne[e];Ne[e++]=null;var l=Ne[e];Ne[e++]=null;var u=Ne[e];if(Ne[e++]=null,s!==null&&l!==null){var y=s.pending;y===null?l.next=l:(l.next=y.next,y.next=l),s.pending=l}u!==0&&Ph(i,l,u)}}function Vr(t,e,i,s){Ne[Ii++]=t,Ne[Ii++]=e,Ne[Ii++]=i,Ne[Ii++]=s,sc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function rc(t,e,i,s){return Vr(t,e,i,s),Nr(t)}function Wi(t,e){return Vr(t,null,null,e),Nr(t)}function Ph(t,e,i){t.lanes|=i;var s=t.alternate;s!==null&&(s.lanes|=i);for(var l=!1,u=t.return;u!==null;)u.childLanes|=i,s=u.alternate,s!==null&&(s.childLanes|=i),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(l=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,l&&e!==null&&(l=31-Ae(i),t=u.hiddenUpdates,s=t[l],s===null?t[l]=[e]:s.push(e),e.lane=i|536870912),u):null}function Nr(t){if(50<Rs)throw Rs=0,du=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ji={};function zx(t,e,i,s){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(t,e,i,s){return new zx(t,e,i,s)}function oc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vn(t,e){var i=t.alternate;return i===null?(i=Ee(t.tag,e,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=e,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&65011712,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,e=t.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function Xh(t,e){t.flags&=65011714;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,e=i.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Lr(t,e,i,s,l,u){var y=0;if(s=t,typeof t=="function")oc(t)&&(y=1);else if(typeof t=="string")y=O2(t,i,it.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case K:return t=Ee(31,i,e,l),t.elementType=K,t.lanes=u,t;case M:return mi(i.children,l,u,e);case B:y=8,l|=24;break;case U:return t=Ee(12,i,e,l|2),t.elementType=U,t.lanes=u,t;case G:return t=Ee(13,i,e,l),t.elementType=G,t.lanes=u,t;case $:return t=Ee(19,i,e,l),t.elementType=$,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F:case L:y=10;break t;case P:y=9;break t;case Z:y=11;break t;case _:y=14;break t;case X:y=16,s=null;break t}y=29,i=Error(o(130,t===null?"null":typeof t,"")),s=null}return e=Ee(y,i,e,l),e.elementType=t,e.type=s,e.lanes=u,e}function mi(t,e,i,s){return t=Ee(7,t,s,e),t.lanes=i,t}function lc(t,e,i){return t=Ee(6,t,null,e),t.lanes=i,t}function cc(t,e,i){return e=Ee(4,t.children!==null?t.children:[],t.key,e),e.lanes=i,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var ta=[],ea=0,Hr=null,Ur=0,Le=[],He=0,gi=null,bn=1,xn="";function yi(t,e){ta[ea++]=Ur,ta[ea++]=Hr,Hr=t,Ur=e}function $h(t,e,i){Le[He++]=bn,Le[He++]=xn,Le[He++]=gi,gi=t;var s=bn;t=xn;var l=32-Ae(s)-1;s&=~(1<<l),i+=1;var u=32-Ae(e)+l;if(30<u){var y=l-l%5;u=(s&(1<<y)-1).toString(32),s>>=y,l-=y,bn=1<<32-Ae(e)+l|i<<l|s,xn=u+t}else bn=1<<u|i<<l|s,xn=t}function uc(t){t.return!==null&&(yi(t,1),$h(t,1,0))}function fc(t){for(;t===Hr;)Hr=ta[--ea],ta[ea]=null,Ur=ta[--ea],ta[ea]=null;for(;t===gi;)gi=Le[--He],Le[He]=null,xn=Le[--He],Le[He]=null,bn=Le[--He],Le[He]=null}var he=null,Nt=null,xt=!1,vi=null,sn=!1,dc=Error(o(519));function bi(t){var e=Error(o(418,""));throw ls(Ve(e,t)),dc}function Qh(t){var e=t.stateNode,i=t.type,s=t.memoizedProps;switch(e[ue]=t,e[me]=s,i){case"dialog":yt("cancel",e),yt("close",e);break;case"iframe":case"object":case"embed":yt("load",e);break;case"video":case"audio":for(i=0;i<zs.length;i++)yt(zs[i],e);break;case"source":yt("error",e);break;case"img":case"image":case"link":yt("error",e),yt("load",e);break;case"details":yt("toggle",e);break;case"input":yt("invalid",e),ch(e,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),jr(e);break;case"select":yt("invalid",e);break;case"textarea":yt("invalid",e),fh(e,s.value,s.defaultValue,s.children),jr(e)}i=s.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||e.textContent===""+i||s.suppressHydrationWarning===!0||f0(e.textContent,i)?(s.popover!=null&&(yt("beforetoggle",e),yt("toggle",e)),s.onScroll!=null&&yt("scroll",e),s.onScrollEnd!=null&&yt("scrollend",e),s.onClick!=null&&(e.onclick=So),e=!0):e=!1,e||bi(t)}function Kh(t){for(he=t.return;he;)switch(he.tag){case 5:case 13:sn=!1;return;case 27:case 3:sn=!0;return;default:he=he.return}}function rs(t){if(t!==he)return!1;if(!xt)return Kh(t),xt=!0,!1;var e=t.tag,i;if((i=e!==3&&e!==27)&&((i=e===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||Mu(t.type,t.memoizedProps)),i=!i),i&&Nt&&bi(t),Kh(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(i=t.data,i==="/$"){if(e===0){Nt=Ze(t.nextSibling);break t}e--}else i!=="$"&&i!=="$!"&&i!=="$?"||e++;t=t.nextSibling}Nt=null}}else e===27?(e=Nt,In(t.type)?(t=zu,zu=null,Nt=t):Nt=e):Nt=he?Ze(t.stateNode.nextSibling):null;return!0}function os(){Nt=he=null,xt=!1}function Zh(){var t=vi;return t!==null&&(be===null?be=t:be.push.apply(be,t),vi=null),t}function ls(t){vi===null?vi=[t]:vi.push(t)}var hc=q(null),xi=null,Sn=null;function Vn(t,e,i){W(hc,e._currentValue),e._currentValue=i}function wn(t){t._currentValue=hc.current,I(hc)}function pc(t,e,i){for(;t!==null;){var s=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,s!==null&&(s.childLanes|=e)):s!==null&&(s.childLanes&e)!==e&&(s.childLanes|=e),t===i)break;t=t.return}}function mc(t,e,i,s){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){var y=l.child;u=u.firstContext;t:for(;u!==null;){var x=u;u=l;for(var A=0;A<e.length;A++)if(x.context===e[A]){u.lanes|=i,x=u.alternate,x!==null&&(x.lanes|=i),pc(u.return,i,t),s||(y=null);break t}u=x.next}}else if(l.tag===18){if(y=l.return,y===null)throw Error(o(341));y.lanes|=i,u=y.alternate,u!==null&&(u.lanes|=i),pc(y,i,t),y=null}else y=l.child;if(y!==null)y.return=l;else for(y=l;y!==null;){if(y===t){y=null;break}if(l=y.sibling,l!==null){l.return=y.return,y=l;break}y=y.return}l=y}}function cs(t,e,i,s){t=null;for(var l=e,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var y=l.alternate;if(y===null)throw Error(o(387));if(y=y.memoizedProps,y!==null){var x=l.type;Te(l.pendingProps.value,y.value)||(t!==null?t.push(x):t=[x])}}else if(l===It.current){if(y=l.alternate,y===null)throw Error(o(387));y.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Ls):t=[Ls])}l=l.return}t!==null&&mc(e,t,i,s),e.flags|=262144}function Fr(t){for(t=t.firstContext;t!==null;){if(!Te(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Si(t){xi=t,Sn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function fe(t){return Ih(xi,t)}function Gr(t,e){return xi===null&&Si(t),Ih(t,e)}function Ih(t,e){var i=e._currentValue;if(e={context:e,memoizedValue:i,next:null},Sn===null){if(t===null)throw Error(o(308));Sn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Sn=Sn.next=e;return i}var kx=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(i,s){t.push(s)}};this.abort=function(){e.aborted=!0,t.forEach(function(i){return i()})}},Ox=n.unstable_scheduleCallback,Bx=n.unstable_NormalPriority,Kt={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gc(){return{controller:new kx,data:new Map,refCount:0}}function us(t){t.refCount--,t.refCount===0&&Ox(Bx,function(){t.controller.abort()})}var fs=null,yc=0,na=0,ia=null;function Vx(t,e){if(fs===null){var i=fs=[];yc=0,na=bu(),ia={status:"pending",value:void 0,then:function(s){i.push(s)}}}return yc++,e.then(Wh,Wh),e}function Wh(){if(--yc===0&&fs!==null){ia!==null&&(ia.status="fulfilled");var t=fs;fs=null,na=0,ia=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Nx(t,e){var i=[],s={status:"pending",value:null,reason:null,then:function(l){i.push(l)}};return t.then(function(){s.status="fulfilled",s.value=e;for(var l=0;l<i.length;l++)(0,i[l])(e)},function(l){for(s.status="rejected",s.reason=l,l=0;l<i.length;l++)(0,i[l])(void 0)}),s}var Jh=V.S;V.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Vx(t,e),Jh!==null&&Jh(t,e)};var wi=q(null);function vc(){var t=wi.current;return t!==null?t:Rt.pooledCache}function Yr(t,e){e===null?W(wi,wi.current):W(wi,e.pool)}function tp(){var t=vc();return t===null?null:{parent:Kt._currentValue,pool:t}}var ds=Error(o(460)),ep=Error(o(474)),qr=Error(o(542)),bc={then:function(){}};function np(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Pr(){}function ip(t,e,i){switch(i=t[i],i===void 0?t.push(e):i!==e&&(e.then(Pr,Pr),e=i),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,sp(t),t;default:if(typeof e.status=="string")e.then(Pr,Pr);else{if(t=Rt,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(s){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=s}},function(s){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=s}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,sp(t),t}throw hs=e,ds}}var hs=null;function ap(){if(hs===null)throw Error(o(459));var t=hs;return hs=null,t}function sp(t){if(t===ds||t===qr)throw Error(o(483))}var Nn=!1;function xc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Sc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ln(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Hn(t,e,i){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Tt&2)!==0){var l=s.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),s.pending=e,e=Nr(t),Ph(t,null,i),e}return Vr(t,s,e,i),Nr(t)}function ps(t,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194048)!==0)){var s=e.lanes;s&=t.pendingLanes,i|=s,e.lanes=i,Wd(t,i)}}function wc(t,e){var i=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var l=null,u=null;if(i=i.firstBaseUpdate,i!==null){do{var y={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};u===null?l=u=y:u=u.next=y,i=i.next}while(i!==null);u===null?l=u=e:u=u.next=e}else l=u=e;i={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:s.shared,callbacks:s.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=e:t.next=e,i.lastBaseUpdate=e}var Ac=!1;function ms(){if(Ac){var t=ia;if(t!==null)throw t}}function gs(t,e,i,s){Ac=!1;var l=t.updateQueue;Nn=!1;var u=l.firstBaseUpdate,y=l.lastBaseUpdate,x=l.shared.pending;if(x!==null){l.shared.pending=null;var A=x,R=A.next;A.next=null,y===null?u=R:y.next=R,y=A;var N=t.alternate;N!==null&&(N=N.updateQueue,x=N.lastBaseUpdate,x!==y&&(x===null?N.firstBaseUpdate=R:x.next=R,N.lastBaseUpdate=A))}if(u!==null){var Y=l.baseState;y=0,N=R=A=null,x=u;do{var z=x.lane&-536870913,k=z!==x.lane;if(k?(vt&z)===z:(s&z)===z){z!==0&&z===na&&(Ac=!0),N!==null&&(N=N.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});t:{var ot=t,at=x;z=e;var Mt=i;switch(at.tag){case 1:if(ot=at.payload,typeof ot=="function"){Y=ot.call(Mt,Y,z);break t}Y=ot;break t;case 3:ot.flags=ot.flags&-65537|128;case 0:if(ot=at.payload,z=typeof ot=="function"?ot.call(Mt,Y,z):ot,z==null)break t;Y=v({},Y,z);break t;case 2:Nn=!0}}z=x.callback,z!==null&&(t.flags|=64,k&&(t.flags|=8192),k=l.callbacks,k===null?l.callbacks=[z]:k.push(z))}else k={lane:z,tag:x.tag,payload:x.payload,callback:x.callback,next:null},N===null?(R=N=k,A=Y):N=N.next=k,y|=z;if(x=x.next,x===null){if(x=l.shared.pending,x===null)break;k=x,x=k.next,k.next=null,l.lastBaseUpdate=k,l.shared.pending=null}}while(!0);N===null&&(A=Y),l.baseState=A,l.firstBaseUpdate=R,l.lastBaseUpdate=N,u===null&&(l.shared.lanes=0),$n|=y,t.lanes=y,t.memoizedState=Y}}function rp(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function op(t,e){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)rp(i[t],e)}var aa=q(null),Xr=q(0);function lp(t,e){t=Cn,W(Xr,t),W(aa,e),Cn=t|e.baseLanes}function Tc(){W(Xr,Cn),W(aa,aa.current)}function Ec(){Cn=Xr.current,I(aa),I(Xr)}var Un=0,ht=null,jt=null,qt=null,$r=!1,sa=!1,Ai=!1,Qr=0,ys=0,ra=null,Lx=0;function Ft(){throw Error(o(321))}function jc(t,e){if(e===null)return!1;for(var i=0;i<e.length&&i<t.length;i++)if(!Te(t[i],e[i]))return!1;return!0}function Dc(t,e,i,s,l,u){return Un=u,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,V.H=t===null||t.memoizedState===null?Pp:Xp,Ai=!1,u=i(s,l),Ai=!1,sa&&(u=up(e,i,s,l)),cp(t),u}function cp(t){V.H=to;var e=jt!==null&&jt.next!==null;if(Un=0,qt=jt=ht=null,$r=!1,ys=0,ra=null,e)throw Error(o(300));t===null||Jt||(t=t.dependencies,t!==null&&Fr(t)&&(Jt=!0))}function up(t,e,i,s){ht=t;var l=0;do{if(sa&&(ra=null),ys=0,sa=!1,25<=l)throw Error(o(301));if(l+=1,qt=jt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}V.H=Px,u=e(i,s)}while(sa);return u}function Hx(){var t=V.H,e=t.useState()[0];return e=typeof e.then=="function"?vs(e):e,t=t.useState()[0],(jt!==null?jt.memoizedState:null)!==t&&(ht.flags|=1024),e}function Mc(){var t=Qr!==0;return Qr=0,t}function Cc(t,e,i){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i}function Rc(t){if($r){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}$r=!1}Un=0,qt=jt=ht=null,sa=!1,ys=Qr=0,ra=null}function ye(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?ht.memoizedState=qt=t:qt=qt.next=t,qt}function Pt(){if(jt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var e=qt===null?ht.memoizedState:qt.next;if(e!==null)qt=e,jt=t;else{if(t===null)throw ht.alternate===null?Error(o(467)):Error(o(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},qt===null?ht.memoizedState=qt=t:qt=qt.next=t}return qt}function _c(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vs(t){var e=ys;return ys+=1,ra===null&&(ra=[]),t=ip(ra,t,e),e=ht,(qt===null?e.memoizedState:qt.next)===null&&(e=e.alternate,V.H=e===null||e.memoizedState===null?Pp:Xp),t}function Kr(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return vs(t);if(t.$$typeof===L)return fe(t)}throw Error(o(438,String(t)))}function zc(t){var e=null,i=ht.updateQueue;if(i!==null&&(e=i.memoCache),e==null){var s=ht.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(e={data:s.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),i===null&&(i=_c(),ht.updateQueue=i),i.memoCache=e,i=e.data[e.index],i===void 0)for(i=e.data[e.index]=Array(t),s=0;s<t;s++)i[s]=ct;return e.index++,i}function An(t,e){return typeof e=="function"?e(t):e}function Zr(t){var e=Pt();return kc(e,jt,t)}function kc(t,e,i){var s=t.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=i;var l=t.baseQueue,u=s.pending;if(u!==null){if(l!==null){var y=l.next;l.next=u.next,u.next=y}e.baseQueue=l=u,s.pending=null}if(u=t.baseState,l===null)t.memoizedState=u;else{e=l.next;var x=y=null,A=null,R=e,N=!1;do{var Y=R.lane&-536870913;if(Y!==R.lane?(vt&Y)===Y:(Un&Y)===Y){var z=R.revertLane;if(z===0)A!==null&&(A=A.next={lane:0,revertLane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),Y===na&&(N=!0);else if((Un&z)===z){R=R.next,z===na&&(N=!0);continue}else Y={lane:0,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},A===null?(x=A=Y,y=u):A=A.next=Y,ht.lanes|=z,$n|=z;Y=R.action,Ai&&i(u,Y),u=R.hasEagerState?R.eagerState:i(u,Y)}else z={lane:Y,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},A===null?(x=A=z,y=u):A=A.next=z,ht.lanes|=Y,$n|=Y;R=R.next}while(R!==null&&R!==e);if(A===null?y=u:A.next=x,!Te(u,t.memoizedState)&&(Jt=!0,N&&(i=ia,i!==null)))throw i;t.memoizedState=u,t.baseState=y,t.baseQueue=A,s.lastRenderedState=u}return l===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Oc(t){var e=Pt(),i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=t;var s=i.dispatch,l=i.pending,u=e.memoizedState;if(l!==null){i.pending=null;var y=l=l.next;do u=t(u,y.action),y=y.next;while(y!==l);Te(u,e.memoizedState)||(Jt=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),i.lastRenderedState=u}return[u,s]}function fp(t,e,i){var s=ht,l=Pt(),u=xt;if(u){if(i===void 0)throw Error(o(407));i=i()}else i=e();var y=!Te((jt||l).memoizedState,i);y&&(l.memoizedState=i,Jt=!0),l=l.queue;var x=pp.bind(null,s,l,t);if(bs(2048,8,x,[t]),l.getSnapshot!==e||y||qt!==null&&qt.memoizedState.tag&1){if(s.flags|=2048,oa(9,Ir(),hp.bind(null,s,l,i,e),null),Rt===null)throw Error(o(349));u||(Un&124)!==0||dp(s,e,i)}return i}function dp(t,e,i){t.flags|=16384,t={getSnapshot:e,value:i},e=ht.updateQueue,e===null?(e=_c(),ht.updateQueue=e,e.stores=[t]):(i=e.stores,i===null?e.stores=[t]:i.push(t))}function hp(t,e,i,s){e.value=i,e.getSnapshot=s,mp(e)&&gp(t)}function pp(t,e,i){return i(function(){mp(e)&&gp(t)})}function mp(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!Te(t,i)}catch{return!0}}function gp(t){var e=Wi(t,2);e!==null&&Re(e,t,2)}function Bc(t){var e=ye();if(typeof t=="function"){var i=t;if(t=i(),Ai){kn(!0);try{i()}finally{kn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:t},e}function yp(t,e,i,s){return t.baseState=i,kc(t,jt,typeof s=="function"?s:An)}function Ux(t,e,i,s,l){if(Jr(t))throw Error(o(485));if(t=e.action,t!==null){var u={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){u.listeners.push(y)}};V.T!==null?i(!0):u.isTransition=!1,s(u),i=e.pending,i===null?(u.next=e.pending=u,vp(e,u)):(u.next=i.next,e.pending=i.next=u)}}function vp(t,e){var i=e.action,s=e.payload,l=t.state;if(e.isTransition){var u=V.T,y={};V.T=y;try{var x=i(l,s),A=V.S;A!==null&&A(y,x),bp(t,e,x)}catch(R){Vc(t,e,R)}finally{V.T=u}}else try{u=i(l,s),bp(t,e,u)}catch(R){Vc(t,e,R)}}function bp(t,e,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(s){xp(t,e,s)},function(s){return Vc(t,e,s)}):xp(t,e,i)}function xp(t,e,i){e.status="fulfilled",e.value=i,Sp(e),t.state=i,e=t.pending,e!==null&&(i=e.next,i===e?t.pending=null:(i=i.next,e.next=i,vp(t,i)))}function Vc(t,e,i){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do e.status="rejected",e.reason=i,Sp(e),e=e.next;while(e!==s)}t.action=null}function Sp(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function wp(t,e){return e}function Ap(t,e){if(xt){var i=Rt.formState;if(i!==null){t:{var s=ht;if(xt){if(Nt){e:{for(var l=Nt,u=sn;l.nodeType!==8;){if(!u){l=null;break e}if(l=Ze(l.nextSibling),l===null){l=null;break e}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){Nt=Ze(l.nextSibling),s=l.data==="F!";break t}}bi(s)}s=!1}s&&(e=i[0])}}return i=ye(),i.memoizedState=i.baseState=e,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wp,lastRenderedState:e},i.queue=s,i=Gp.bind(null,ht,s),s.dispatch=i,s=Bc(!1),u=Fc.bind(null,ht,!1,s.queue),s=ye(),l={state:e,dispatch:null,action:t,pending:null},s.queue=l,i=Ux.bind(null,ht,l,u,i),l.dispatch=i,s.memoizedState=t,[e,i,!1]}function Tp(t){var e=Pt();return Ep(e,jt,t)}function Ep(t,e,i){if(e=kc(t,e,wp)[0],t=Zr(An)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var s=vs(e)}catch(y){throw y===ds?qr:y}else s=e;e=Pt();var l=e.queue,u=l.dispatch;return i!==e.memoizedState&&(ht.flags|=2048,oa(9,Ir(),Fx.bind(null,l,i),null)),[s,u,t]}function Fx(t,e){t.action=e}function jp(t){var e=Pt(),i=jt;if(i!==null)return Ep(e,i,t);Pt(),e=e.memoizedState,i=Pt();var s=i.queue.dispatch;return i.memoizedState=t,[e,s,!1]}function oa(t,e,i,s){return t={tag:t,create:i,deps:s,inst:e,next:null},e=ht.updateQueue,e===null&&(e=_c(),ht.updateQueue=e),i=e.lastEffect,i===null?e.lastEffect=t.next=t:(s=i.next,i.next=t,t.next=s,e.lastEffect=t),t}function Ir(){return{destroy:void 0,resource:void 0}}function Dp(){return Pt().memoizedState}function Wr(t,e,i,s){var l=ye();s=s===void 0?null:s,ht.flags|=t,l.memoizedState=oa(1|e,Ir(),i,s)}function bs(t,e,i,s){var l=Pt();s=s===void 0?null:s;var u=l.memoizedState.inst;jt!==null&&s!==null&&jc(s,jt.memoizedState.deps)?l.memoizedState=oa(e,u,i,s):(ht.flags|=t,l.memoizedState=oa(1|e,u,i,s))}function Mp(t,e){Wr(8390656,8,t,e)}function Cp(t,e){bs(2048,8,t,e)}function Rp(t,e){return bs(4,2,t,e)}function _p(t,e){return bs(4,4,t,e)}function zp(t,e){if(typeof e=="function"){t=t();var i=e(t);return function(){typeof i=="function"?i():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function kp(t,e,i){i=i!=null?i.concat([t]):null,bs(4,4,zp.bind(null,e,t),i)}function Nc(){}function Op(t,e){var i=Pt();e=e===void 0?null:e;var s=i.memoizedState;return e!==null&&jc(e,s[1])?s[0]:(i.memoizedState=[t,e],t)}function Bp(t,e){var i=Pt();e=e===void 0?null:e;var s=i.memoizedState;if(e!==null&&jc(e,s[1]))return s[0];if(s=t(),Ai){kn(!0);try{t()}finally{kn(!1)}}return i.memoizedState=[s,e],s}function Lc(t,e,i){return i===void 0||(Un&1073741824)!==0?t.memoizedState=e:(t.memoizedState=i,t=Lm(),ht.lanes|=t,$n|=t,i)}function Vp(t,e,i,s){return Te(i,e)?i:aa.current!==null?(t=Lc(t,i,s),Te(t,e)||(Jt=!0),t):(Un&42)===0?(Jt=!0,t.memoizedState=i):(t=Lm(),ht.lanes|=t,$n|=t,e)}function Np(t,e,i,s,l){var u=Q.p;Q.p=u!==0&&8>u?u:8;var y=V.T,x={};V.T=x,Fc(t,!1,e,i);try{var A=l(),R=V.S;if(R!==null&&R(x,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var N=Nx(A,s);xs(t,e,N,Ce(t))}else xs(t,e,s,Ce(t))}catch(Y){xs(t,e,{then:function(){},status:"rejected",reason:Y},Ce())}finally{Q.p=u,V.T=y}}function Gx(){}function Hc(t,e,i,s){if(t.tag!==5)throw Error(o(476));var l=Lp(t).queue;Np(t,l,e,et,i===null?Gx:function(){return Hp(t),i(s)})}function Lp(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:et},next:null};var i={};return e.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:i},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Hp(t){var e=Lp(t).next.queue;xs(t,e,{},Ce())}function Uc(){return fe(Ls)}function Up(){return Pt().memoizedState}function Fp(){return Pt().memoizedState}function Yx(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var i=Ce();t=Ln(i);var s=Hn(e,t,i);s!==null&&(Re(s,e,i),ps(s,e,i)),e={cache:gc()},t.payload=e;return}e=e.return}}function qx(t,e,i){var s=Ce();i={lane:s,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null},Jr(t)?Yp(e,i):(i=rc(t,e,i,s),i!==null&&(Re(i,t,s),qp(i,e,s)))}function Gp(t,e,i){var s=Ce();xs(t,e,i,s)}function xs(t,e,i,s){var l={lane:s,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null};if(Jr(t))Yp(e,l);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var y=e.lastRenderedState,x=u(y,i);if(l.hasEagerState=!0,l.eagerState=x,Te(x,y))return Vr(t,e,l,0),Rt===null&&Br(),!1}catch{}finally{}if(i=rc(t,e,l,s),i!==null)return Re(i,t,s),qp(i,e,s),!0}return!1}function Fc(t,e,i,s){if(s={lane:2,revertLane:bu(),action:s,hasEagerState:!1,eagerState:null,next:null},Jr(t)){if(e)throw Error(o(479))}else e=rc(t,i,s,2),e!==null&&Re(e,t,2)}function Jr(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function Yp(t,e){sa=$r=!0;var i=t.pending;i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e}function qp(t,e,i){if((i&4194048)!==0){var s=e.lanes;s&=t.pendingLanes,i|=s,e.lanes=i,Wd(t,i)}}var to={readContext:fe,use:Kr,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useLayoutEffect:Ft,useInsertionEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useSyncExternalStore:Ft,useId:Ft,useHostTransitionStatus:Ft,useFormState:Ft,useActionState:Ft,useOptimistic:Ft,useMemoCache:Ft,useCacheRefresh:Ft},Pp={readContext:fe,use:Kr,useCallback:function(t,e){return ye().memoizedState=[t,e===void 0?null:e],t},useContext:fe,useEffect:Mp,useImperativeHandle:function(t,e,i){i=i!=null?i.concat([t]):null,Wr(4194308,4,zp.bind(null,e,t),i)},useLayoutEffect:function(t,e){return Wr(4194308,4,t,e)},useInsertionEffect:function(t,e){Wr(4,2,t,e)},useMemo:function(t,e){var i=ye();e=e===void 0?null:e;var s=t();if(Ai){kn(!0);try{t()}finally{kn(!1)}}return i.memoizedState=[s,e],s},useReducer:function(t,e,i){var s=ye();if(i!==void 0){var l=i(e);if(Ai){kn(!0);try{i(e)}finally{kn(!1)}}}else l=e;return s.memoizedState=s.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},s.queue=t,t=t.dispatch=qx.bind(null,ht,t),[s.memoizedState,t]},useRef:function(t){var e=ye();return t={current:t},e.memoizedState=t},useState:function(t){t=Bc(t);var e=t.queue,i=Gp.bind(null,ht,e);return e.dispatch=i,[t.memoizedState,i]},useDebugValue:Nc,useDeferredValue:function(t,e){var i=ye();return Lc(i,t,e)},useTransition:function(){var t=Bc(!1);return t=Np.bind(null,ht,t.queue,!0,!1),ye().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,i){var s=ht,l=ye();if(xt){if(i===void 0)throw Error(o(407));i=i()}else{if(i=e(),Rt===null)throw Error(o(349));(vt&124)!==0||dp(s,e,i)}l.memoizedState=i;var u={value:i,getSnapshot:e};return l.queue=u,Mp(pp.bind(null,s,u,t),[t]),s.flags|=2048,oa(9,Ir(),hp.bind(null,s,u,i,e),null),i},useId:function(){var t=ye(),e=Rt.identifierPrefix;if(xt){var i=xn,s=bn;i=(s&~(1<<32-Ae(s)-1)).toString(32)+i,e="«"+e+"R"+i,i=Qr++,0<i&&(e+="H"+i.toString(32)),e+="»"}else i=Lx++,e="«"+e+"r"+i.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Uc,useFormState:Ap,useActionState:Ap,useOptimistic:function(t){var e=ye();e.memoizedState=e.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=i,e=Fc.bind(null,ht,!0,i),i.dispatch=e,[t,e]},useMemoCache:zc,useCacheRefresh:function(){return ye().memoizedState=Yx.bind(null,ht)}},Xp={readContext:fe,use:Kr,useCallback:Op,useContext:fe,useEffect:Cp,useImperativeHandle:kp,useInsertionEffect:Rp,useLayoutEffect:_p,useMemo:Bp,useReducer:Zr,useRef:Dp,useState:function(){return Zr(An)},useDebugValue:Nc,useDeferredValue:function(t,e){var i=Pt();return Vp(i,jt.memoizedState,t,e)},useTransition:function(){var t=Zr(An)[0],e=Pt().memoizedState;return[typeof t=="boolean"?t:vs(t),e]},useSyncExternalStore:fp,useId:Up,useHostTransitionStatus:Uc,useFormState:Tp,useActionState:Tp,useOptimistic:function(t,e){var i=Pt();return yp(i,jt,t,e)},useMemoCache:zc,useCacheRefresh:Fp},Px={readContext:fe,use:Kr,useCallback:Op,useContext:fe,useEffect:Cp,useImperativeHandle:kp,useInsertionEffect:Rp,useLayoutEffect:_p,useMemo:Bp,useReducer:Oc,useRef:Dp,useState:function(){return Oc(An)},useDebugValue:Nc,useDeferredValue:function(t,e){var i=Pt();return jt===null?Lc(i,t,e):Vp(i,jt.memoizedState,t,e)},useTransition:function(){var t=Oc(An)[0],e=Pt().memoizedState;return[typeof t=="boolean"?t:vs(t),e]},useSyncExternalStore:fp,useId:Up,useHostTransitionStatus:Uc,useFormState:jp,useActionState:jp,useOptimistic:function(t,e){var i=Pt();return jt!==null?yp(i,jt,t,e):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:zc,useCacheRefresh:Fp},la=null,Ss=0;function eo(t){var e=Ss;return Ss+=1,la===null&&(la=[]),ip(la,t,e)}function ws(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function no(t,e){throw e.$$typeof===S?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function $p(t){var e=t._init;return e(t._payload)}function Qp(t){function e(D,j){if(t){var C=D.deletions;C===null?(D.deletions=[j],D.flags|=16):C.push(j)}}function i(D,j){if(!t)return null;for(;j!==null;)e(D,j),j=j.sibling;return null}function s(D){for(var j=new Map;D!==null;)D.key!==null?j.set(D.key,D):j.set(D.index,D),D=D.sibling;return j}function l(D,j){return D=vn(D,j),D.index=0,D.sibling=null,D}function u(D,j,C){return D.index=C,t?(C=D.alternate,C!==null?(C=C.index,C<j?(D.flags|=67108866,j):C):(D.flags|=67108866,j)):(D.flags|=1048576,j)}function y(D){return t&&D.alternate===null&&(D.flags|=67108866),D}function x(D,j,C,H){return j===null||j.tag!==6?(j=lc(C,D.mode,H),j.return=D,j):(j=l(j,C),j.return=D,j)}function A(D,j,C,H){var tt=C.type;return tt===M?N(D,j,C.props.children,H,C.key):j!==null&&(j.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===X&&$p(tt)===j.type)?(j=l(j,C.props),ws(j,C),j.return=D,j):(j=Lr(C.type,C.key,C.props,null,D.mode,H),ws(j,C),j.return=D,j)}function R(D,j,C,H){return j===null||j.tag!==4||j.stateNode.containerInfo!==C.containerInfo||j.stateNode.implementation!==C.implementation?(j=cc(C,D.mode,H),j.return=D,j):(j=l(j,C.children||[]),j.return=D,j)}function N(D,j,C,H,tt){return j===null||j.tag!==7?(j=mi(C,D.mode,H,tt),j.return=D,j):(j=l(j,C),j.return=D,j)}function Y(D,j,C){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=lc(""+j,D.mode,C),j.return=D,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case b:return C=Lr(j.type,j.key,j.props,null,D.mode,C),ws(C,j),C.return=D,C;case T:return j=cc(j,D.mode,C),j.return=D,j;case X:var H=j._init;return j=H(j._payload),Y(D,j,C)}if(Qt(j)||Ut(j))return j=mi(j,D.mode,C,null),j.return=D,j;if(typeof j.then=="function")return Y(D,eo(j),C);if(j.$$typeof===L)return Y(D,Gr(D,j),C);no(D,j)}return null}function z(D,j,C,H){var tt=j!==null?j.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return tt!==null?null:x(D,j,""+C,H);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case b:return C.key===tt?A(D,j,C,H):null;case T:return C.key===tt?R(D,j,C,H):null;case X:return tt=C._init,C=tt(C._payload),z(D,j,C,H)}if(Qt(C)||Ut(C))return tt!==null?null:N(D,j,C,H,null);if(typeof C.then=="function")return z(D,j,eo(C),H);if(C.$$typeof===L)return z(D,j,Gr(D,C),H);no(D,C)}return null}function k(D,j,C,H,tt){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return D=D.get(C)||null,x(j,D,""+H,tt);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case b:return D=D.get(H.key===null?C:H.key)||null,A(j,D,H,tt);case T:return D=D.get(H.key===null?C:H.key)||null,R(j,D,H,tt);case X:var pt=H._init;return H=pt(H._payload),k(D,j,C,H,tt)}if(Qt(H)||Ut(H))return D=D.get(C)||null,N(j,D,H,tt,null);if(typeof H.then=="function")return k(D,j,C,eo(H),tt);if(H.$$typeof===L)return k(D,j,C,Gr(j,H),tt);no(j,H)}return null}function ot(D,j,C,H){for(var tt=null,pt=null,nt=j,rt=j=0,ee=null;nt!==null&&rt<C.length;rt++){nt.index>rt?(ee=nt,nt=null):ee=nt.sibling;var bt=z(D,nt,C[rt],H);if(bt===null){nt===null&&(nt=ee);break}t&&nt&&bt.alternate===null&&e(D,nt),j=u(bt,j,rt),pt===null?tt=bt:pt.sibling=bt,pt=bt,nt=ee}if(rt===C.length)return i(D,nt),xt&&yi(D,rt),tt;if(nt===null){for(;rt<C.length;rt++)nt=Y(D,C[rt],H),nt!==null&&(j=u(nt,j,rt),pt===null?tt=nt:pt.sibling=nt,pt=nt);return xt&&yi(D,rt),tt}for(nt=s(nt);rt<C.length;rt++)ee=k(nt,D,rt,C[rt],H),ee!==null&&(t&&ee.alternate!==null&&nt.delete(ee.key===null?rt:ee.key),j=u(ee,j,rt),pt===null?tt=ee:pt.sibling=ee,pt=ee);return t&&nt.forEach(function(ni){return e(D,ni)}),xt&&yi(D,rt),tt}function at(D,j,C,H){if(C==null)throw Error(o(151));for(var tt=null,pt=null,nt=j,rt=j=0,ee=null,bt=C.next();nt!==null&&!bt.done;rt++,bt=C.next()){nt.index>rt?(ee=nt,nt=null):ee=nt.sibling;var ni=z(D,nt,bt.value,H);if(ni===null){nt===null&&(nt=ee);break}t&&nt&&ni.alternate===null&&e(D,nt),j=u(ni,j,rt),pt===null?tt=ni:pt.sibling=ni,pt=ni,nt=ee}if(bt.done)return i(D,nt),xt&&yi(D,rt),tt;if(nt===null){for(;!bt.done;rt++,bt=C.next())bt=Y(D,bt.value,H),bt!==null&&(j=u(bt,j,rt),pt===null?tt=bt:pt.sibling=bt,pt=bt);return xt&&yi(D,rt),tt}for(nt=s(nt);!bt.done;rt++,bt=C.next())bt=k(nt,D,rt,bt.value,H),bt!==null&&(t&&bt.alternate!==null&&nt.delete(bt.key===null?rt:bt.key),j=u(bt,j,rt),pt===null?tt=bt:pt.sibling=bt,pt=bt);return t&&nt.forEach(function(X2){return e(D,X2)}),xt&&yi(D,rt),tt}function Mt(D,j,C,H){if(typeof C=="object"&&C!==null&&C.type===M&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case b:t:{for(var tt=C.key;j!==null;){if(j.key===tt){if(tt=C.type,tt===M){if(j.tag===7){i(D,j.sibling),H=l(j,C.props.children),H.return=D,D=H;break t}}else if(j.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===X&&$p(tt)===j.type){i(D,j.sibling),H=l(j,C.props),ws(H,C),H.return=D,D=H;break t}i(D,j);break}else e(D,j);j=j.sibling}C.type===M?(H=mi(C.props.children,D.mode,H,C.key),H.return=D,D=H):(H=Lr(C.type,C.key,C.props,null,D.mode,H),ws(H,C),H.return=D,D=H)}return y(D);case T:t:{for(tt=C.key;j!==null;){if(j.key===tt)if(j.tag===4&&j.stateNode.containerInfo===C.containerInfo&&j.stateNode.implementation===C.implementation){i(D,j.sibling),H=l(j,C.children||[]),H.return=D,D=H;break t}else{i(D,j);break}else e(D,j);j=j.sibling}H=cc(C,D.mode,H),H.return=D,D=H}return y(D);case X:return tt=C._init,C=tt(C._payload),Mt(D,j,C,H)}if(Qt(C))return ot(D,j,C,H);if(Ut(C)){if(tt=Ut(C),typeof tt!="function")throw Error(o(150));return C=tt.call(C),at(D,j,C,H)}if(typeof C.then=="function")return Mt(D,j,eo(C),H);if(C.$$typeof===L)return Mt(D,j,Gr(D,C),H);no(D,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,j!==null&&j.tag===6?(i(D,j.sibling),H=l(j,C),H.return=D,D=H):(i(D,j),H=lc(C,D.mode,H),H.return=D,D=H),y(D)):i(D,j)}return function(D,j,C,H){try{Ss=0;var tt=Mt(D,j,C,H);return la=null,tt}catch(nt){if(nt===ds||nt===qr)throw nt;var pt=Ee(29,nt,null,D.mode);return pt.lanes=H,pt.return=D,pt}finally{}}}var ca=Qp(!0),Kp=Qp(!1),Ue=q(null),rn=null;function Fn(t){var e=t.alternate;W(Zt,Zt.current&1),W(Ue,t),rn===null&&(e===null||aa.current!==null||e.memoizedState!==null)&&(rn=t)}function Zp(t){if(t.tag===22){if(W(Zt,Zt.current),W(Ue,t),rn===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(rn=t)}}else Gn()}function Gn(){W(Zt,Zt.current),W(Ue,Ue.current)}function Tn(t){I(Ue),rn===t&&(rn=null),I(Zt)}var Zt=q(0);function io(t){for(var e=t;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||_u(i)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Gc(t,e,i,s){e=t.memoizedState,i=i(s,e),i=i==null?e:v({},e,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Yc={enqueueSetState:function(t,e,i){t=t._reactInternals;var s=Ce(),l=Ln(s);l.payload=e,i!=null&&(l.callback=i),e=Hn(t,l,s),e!==null&&(Re(e,t,s),ps(e,t,s))},enqueueReplaceState:function(t,e,i){t=t._reactInternals;var s=Ce(),l=Ln(s);l.tag=1,l.payload=e,i!=null&&(l.callback=i),e=Hn(t,l,s),e!==null&&(Re(e,t,s),ps(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var i=Ce(),s=Ln(i);s.tag=2,e!=null&&(s.callback=e),e=Hn(t,s,i),e!==null&&(Re(e,t,i),ps(e,t,i))}};function Ip(t,e,i,s,l,u,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,u,y):e.prototype&&e.prototype.isPureReactComponent?!as(i,s)||!as(l,u):!0}function Wp(t,e,i,s){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,s),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,s),e.state!==t&&Yc.enqueueReplaceState(e,e.state,null)}function Ti(t,e){var i=e;if("ref"in e){i={};for(var s in e)s!=="ref"&&(i[s]=e[s])}if(t=t.defaultProps){i===e&&(i=v({},i));for(var l in t)i[l]===void 0&&(i[l]=t[l])}return i}var ao=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Jp(t){ao(t)}function tm(t){console.error(t)}function em(t){ao(t)}function so(t,e){try{var i=t.onUncaughtError;i(e.value,{componentStack:e.stack})}catch(s){setTimeout(function(){throw s})}}function nm(t,e,i){try{var s=t.onCaughtError;s(i.value,{componentStack:i.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function qc(t,e,i){return i=Ln(i),i.tag=3,i.payload={element:null},i.callback=function(){so(t,e)},i}function im(t){return t=Ln(t),t.tag=3,t}function am(t,e,i,s){var l=i.type.getDerivedStateFromError;if(typeof l=="function"){var u=s.value;t.payload=function(){return l(u)},t.callback=function(){nm(e,i,s)}}var y=i.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){nm(e,i,s),typeof l!="function"&&(Qn===null?Qn=new Set([this]):Qn.add(this));var x=s.stack;this.componentDidCatch(s.value,{componentStack:x!==null?x:""})})}function Xx(t,e,i,s,l){if(i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(e=i.alternate,e!==null&&cs(e,i,l,!0),i=Ue.current,i!==null){switch(i.tag){case 13:return rn===null?pu():i.alternate===null&&Lt===0&&(Lt=3),i.flags&=-257,i.flags|=65536,i.lanes=l,s===bc?i.flags|=16384:(e=i.updateQueue,e===null?i.updateQueue=new Set([s]):e.add(s),gu(t,s,l)),!1;case 22:return i.flags|=65536,s===bc?i.flags|=16384:(e=i.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([s])},i.updateQueue=e):(i=e.retryQueue,i===null?e.retryQueue=new Set([s]):i.add(s)),gu(t,s,l)),!1}throw Error(o(435,i.tag))}return gu(t,s,l),pu(),!1}if(xt)return e=Ue.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,s!==dc&&(t=Error(o(422),{cause:s}),ls(Ve(t,i)))):(s!==dc&&(e=Error(o(423),{cause:s}),ls(Ve(e,i))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,s=Ve(s,i),l=qc(t.stateNode,s,l),wc(t,l),Lt!==4&&(Lt=2)),!1;var u=Error(o(520),{cause:s});if(u=Ve(u,i),Cs===null?Cs=[u]:Cs.push(u),Lt!==4&&(Lt=2),e===null)return!0;s=Ve(s,i),i=e;do{switch(i.tag){case 3:return i.flags|=65536,t=l&-l,i.lanes|=t,t=qc(i.stateNode,s,t),wc(i,t),!1;case 1:if(e=i.type,u=i.stateNode,(i.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Qn===null||!Qn.has(u))))return i.flags|=65536,l&=-l,i.lanes|=l,l=im(l),am(l,t,i,s),wc(i,l),!1}i=i.return}while(i!==null);return!1}var sm=Error(o(461)),Jt=!1;function re(t,e,i,s){e.child=t===null?Kp(e,null,i,s):ca(e,t.child,i,s)}function rm(t,e,i,s,l){i=i.render;var u=e.ref;if("ref"in s){var y={};for(var x in s)x!=="ref"&&(y[x]=s[x])}else y=s;return Si(e),s=Dc(t,e,i,y,u,l),x=Mc(),t!==null&&!Jt?(Cc(t,e,l),En(t,e,l)):(xt&&x&&uc(e),e.flags|=1,re(t,e,s,l),e.child)}function om(t,e,i,s,l){if(t===null){var u=i.type;return typeof u=="function"&&!oc(u)&&u.defaultProps===void 0&&i.compare===null?(e.tag=15,e.type=u,lm(t,e,u,s,l)):(t=Lr(i.type,null,s,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!Wc(t,l)){var y=u.memoizedProps;if(i=i.compare,i=i!==null?i:as,i(y,s)&&t.ref===e.ref)return En(t,e,l)}return e.flags|=1,t=vn(u,s),t.ref=e.ref,t.return=e,e.child=t}function lm(t,e,i,s,l){if(t!==null){var u=t.memoizedProps;if(as(u,s)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=s=u,Wc(t,l))(t.flags&131072)!==0&&(Jt=!0);else return e.lanes=t.lanes,En(t,e,l)}return Pc(t,e,i,s,l)}function cm(t,e,i){var s=e.pendingProps,l=s.children,u=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((e.flags&128)!==0){if(s=u!==null?u.baseLanes|i:i,t!==null){for(l=e.child=t.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;e.childLanes=u&~s}else e.childLanes=0,e.child=null;return um(t,e,s,i)}if((i&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Yr(e,u!==null?u.cachePool:null),u!==null?lp(e,u):Tc(),Zp(e);else return e.lanes=e.childLanes=536870912,um(t,e,u!==null?u.baseLanes|i:i,i)}else u!==null?(Yr(e,u.cachePool),lp(e,u),Gn(),e.memoizedState=null):(t!==null&&Yr(e,null),Tc(),Gn());return re(t,e,l,i),e.child}function um(t,e,i,s){var l=vc();return l=l===null?null:{parent:Kt._currentValue,pool:l},e.memoizedState={baseLanes:i,cachePool:l},t!==null&&Yr(e,null),Tc(),Zp(e),t!==null&&cs(t,e,s,!0),null}function ro(t,e){var i=e.ref;if(i===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(o(284));(t===null||t.ref!==i)&&(e.flags|=4194816)}}function Pc(t,e,i,s,l){return Si(e),i=Dc(t,e,i,s,void 0,l),s=Mc(),t!==null&&!Jt?(Cc(t,e,l),En(t,e,l)):(xt&&s&&uc(e),e.flags|=1,re(t,e,i,l),e.child)}function fm(t,e,i,s,l,u){return Si(e),e.updateQueue=null,i=up(e,s,i,l),cp(t),s=Mc(),t!==null&&!Jt?(Cc(t,e,u),En(t,e,u)):(xt&&s&&uc(e),e.flags|=1,re(t,e,i,u),e.child)}function dm(t,e,i,s,l){if(Si(e),e.stateNode===null){var u=Ji,y=i.contextType;typeof y=="object"&&y!==null&&(u=fe(y)),u=new i(s,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Yc,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=s,u.state=e.memoizedState,u.refs={},xc(e),y=i.contextType,u.context=typeof y=="object"&&y!==null?fe(y):Ji,u.state=e.memoizedState,y=i.getDerivedStateFromProps,typeof y=="function"&&(Gc(e,i,y,s),u.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(y=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),y!==u.state&&Yc.enqueueReplaceState(u,u.state,null),gs(e,s,u,l),ms(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),s=!0}else if(t===null){u=e.stateNode;var x=e.memoizedProps,A=Ti(i,x);u.props=A;var R=u.context,N=i.contextType;y=Ji,typeof N=="object"&&N!==null&&(y=fe(N));var Y=i.getDerivedStateFromProps;N=typeof Y=="function"||typeof u.getSnapshotBeforeUpdate=="function",x=e.pendingProps!==x,N||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(x||R!==y)&&Wp(e,u,s,y),Nn=!1;var z=e.memoizedState;u.state=z,gs(e,s,u,l),ms(),R=e.memoizedState,x||z!==R||Nn?(typeof Y=="function"&&(Gc(e,i,Y,s),R=e.memoizedState),(A=Nn||Ip(e,i,A,s,z,R,y))?(N||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=s,e.memoizedState=R),u.props=s,u.state=R,u.context=y,s=A):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),s=!1)}else{u=e.stateNode,Sc(t,e),y=e.memoizedProps,N=Ti(i,y),u.props=N,Y=e.pendingProps,z=u.context,R=i.contextType,A=Ji,typeof R=="object"&&R!==null&&(A=fe(R)),x=i.getDerivedStateFromProps,(R=typeof x=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(y!==Y||z!==A)&&Wp(e,u,s,A),Nn=!1,z=e.memoizedState,u.state=z,gs(e,s,u,l),ms();var k=e.memoizedState;y!==Y||z!==k||Nn||t!==null&&t.dependencies!==null&&Fr(t.dependencies)?(typeof x=="function"&&(Gc(e,i,x,s),k=e.memoizedState),(N=Nn||Ip(e,i,N,s,z,k,A)||t!==null&&t.dependencies!==null&&Fr(t.dependencies))?(R||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(s,k,A),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(s,k,A)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||y===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),e.memoizedProps=s,e.memoizedState=k),u.props=s,u.state=k,u.context=A,s=N):(typeof u.componentDidUpdate!="function"||y===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),s=!1)}return u=s,ro(t,e),s=(e.flags&128)!==0,u||s?(u=e.stateNode,i=s&&typeof i.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&s?(e.child=ca(e,t.child,null,l),e.child=ca(e,null,i,l)):re(t,e,i,l),e.memoizedState=u.state,t=e.child):t=En(t,e,l),t}function hm(t,e,i,s){return os(),e.flags|=256,re(t,e,i,s),e.child}var Xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $c(t){return{baseLanes:t,cachePool:tp()}}function Qc(t,e,i){return t=t!==null?t.childLanes&~i:0,e&&(t|=Fe),t}function pm(t,e,i){var s=e.pendingProps,l=!1,u=(e.flags&128)!==0,y;if((y=u)||(y=t!==null&&t.memoizedState===null?!1:(Zt.current&2)!==0),y&&(l=!0,e.flags&=-129),y=(e.flags&32)!==0,e.flags&=-33,t===null){if(xt){if(l?Fn(e):Gn(),xt){var x=Nt,A;if(A=x){t:{for(A=x,x=sn;A.nodeType!==8;){if(!x){x=null;break t}if(A=Ze(A.nextSibling),A===null){x=null;break t}}x=A}x!==null?(e.memoizedState={dehydrated:x,treeContext:gi!==null?{id:bn,overflow:xn}:null,retryLane:536870912,hydrationErrors:null},A=Ee(18,null,null,0),A.stateNode=x,A.return=e,e.child=A,he=e,Nt=null,A=!0):A=!1}A||bi(e)}if(x=e.memoizedState,x!==null&&(x=x.dehydrated,x!==null))return _u(x)?e.lanes=32:e.lanes=536870912,null;Tn(e)}return x=s.children,s=s.fallback,l?(Gn(),l=e.mode,x=oo({mode:"hidden",children:x},l),s=mi(s,l,i,null),x.return=e,s.return=e,x.sibling=s,e.child=x,l=e.child,l.memoizedState=$c(i),l.childLanes=Qc(t,y,i),e.memoizedState=Xc,s):(Fn(e),Kc(e,x))}if(A=t.memoizedState,A!==null&&(x=A.dehydrated,x!==null)){if(u)e.flags&256?(Fn(e),e.flags&=-257,e=Zc(t,e,i)):e.memoizedState!==null?(Gn(),e.child=t.child,e.flags|=128,e=null):(Gn(),l=s.fallback,x=e.mode,s=oo({mode:"visible",children:s.children},x),l=mi(l,x,i,null),l.flags|=2,s.return=e,l.return=e,s.sibling=l,e.child=s,ca(e,t.child,null,i),s=e.child,s.memoizedState=$c(i),s.childLanes=Qc(t,y,i),e.memoizedState=Xc,e=l);else if(Fn(e),_u(x)){if(y=x.nextSibling&&x.nextSibling.dataset,y)var R=y.dgst;y=R,s=Error(o(419)),s.stack="",s.digest=y,ls({value:s,source:null,stack:null}),e=Zc(t,e,i)}else if(Jt||cs(t,e,i,!1),y=(i&t.childLanes)!==0,Jt||y){if(y=Rt,y!==null&&(s=i&-i,s=(s&42)!==0?1:zl(s),s=(s&(y.suspendedLanes|i))!==0?0:s,s!==0&&s!==A.retryLane))throw A.retryLane=s,Wi(t,s),Re(y,t,s),sm;x.data==="$?"||pu(),e=Zc(t,e,i)}else x.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=A.treeContext,Nt=Ze(x.nextSibling),he=e,xt=!0,vi=null,sn=!1,t!==null&&(Le[He++]=bn,Le[He++]=xn,Le[He++]=gi,bn=t.id,xn=t.overflow,gi=e),e=Kc(e,s.children),e.flags|=4096);return e}return l?(Gn(),l=s.fallback,x=e.mode,A=t.child,R=A.sibling,s=vn(A,{mode:"hidden",children:s.children}),s.subtreeFlags=A.subtreeFlags&65011712,R!==null?l=vn(R,l):(l=mi(l,x,i,null),l.flags|=2),l.return=e,s.return=e,s.sibling=l,e.child=s,s=l,l=e.child,x=t.child.memoizedState,x===null?x=$c(i):(A=x.cachePool,A!==null?(R=Kt._currentValue,A=A.parent!==R?{parent:R,pool:R}:A):A=tp(),x={baseLanes:x.baseLanes|i,cachePool:A}),l.memoizedState=x,l.childLanes=Qc(t,y,i),e.memoizedState=Xc,s):(Fn(e),i=t.child,t=i.sibling,i=vn(i,{mode:"visible",children:s.children}),i.return=e,i.sibling=null,t!==null&&(y=e.deletions,y===null?(e.deletions=[t],e.flags|=16):y.push(t)),e.child=i,e.memoizedState=null,i)}function Kc(t,e){return e=oo({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function oo(t,e){return t=Ee(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Zc(t,e,i){return ca(e,t.child,null,i),t=Kc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function mm(t,e,i){t.lanes|=e;var s=t.alternate;s!==null&&(s.lanes|=e),pc(t.return,e,i)}function Ic(t,e,i,s,l){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:l}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=s,u.tail=i,u.tailMode=l)}function gm(t,e,i){var s=e.pendingProps,l=s.revealOrder,u=s.tail;if(re(t,e,s.children,i),s=Zt.current,(s&2)!==0)s=s&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mm(t,i,e);else if(t.tag===19)mm(t,i,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(W(Zt,s),l){case"forwards":for(i=e.child,l=null;i!==null;)t=i.alternate,t!==null&&io(t)===null&&(l=i),i=i.sibling;i=l,i===null?(l=e.child,e.child=null):(l=i.sibling,i.sibling=null),Ic(e,!1,l,i,u);break;case"backwards":for(i=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&io(t)===null){e.child=l;break}t=l.sibling,l.sibling=i,i=l,l=t}Ic(e,!0,i,null,u);break;case"together":Ic(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function En(t,e,i){if(t!==null&&(e.dependencies=t.dependencies),$n|=e.lanes,(i&e.childLanes)===0)if(t!==null){if(cs(t,e,i,!1),(i&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,i=vn(t,t.pendingProps),e.child=i,i.return=e;t.sibling!==null;)t=t.sibling,i=i.sibling=vn(t,t.pendingProps),i.return=e;i.sibling=null}return e.child}function Wc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Fr(t)))}function $x(t,e,i){switch(e.tag){case 3:St(e,e.stateNode.containerInfo),Vn(e,Kt,t.memoizedState.cache),os();break;case 27:case 5:ci(e);break;case 4:St(e,e.stateNode.containerInfo);break;case 10:Vn(e,e.type,e.memoizedProps.value);break;case 13:var s=e.memoizedState;if(s!==null)return s.dehydrated!==null?(Fn(e),e.flags|=128,null):(i&e.child.childLanes)!==0?pm(t,e,i):(Fn(e),t=En(t,e,i),t!==null?t.sibling:null);Fn(e);break;case 19:var l=(t.flags&128)!==0;if(s=(i&e.childLanes)!==0,s||(cs(t,e,i,!1),s=(i&e.childLanes)!==0),l){if(s)return gm(t,e,i);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),W(Zt,Zt.current),s)break;return null;case 22:case 23:return e.lanes=0,cm(t,e,i);case 24:Vn(e,Kt,t.memoizedState.cache)}return En(t,e,i)}function ym(t,e,i){if(t!==null)if(t.memoizedProps!==e.pendingProps)Jt=!0;else{if(!Wc(t,i)&&(e.flags&128)===0)return Jt=!1,$x(t,e,i);Jt=(t.flags&131072)!==0}else Jt=!1,xt&&(e.flags&1048576)!==0&&$h(e,Ur,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var s=e.elementType,l=s._init;if(s=l(s._payload),e.type=s,typeof s=="function")oc(s)?(t=Ti(s,t),e.tag=1,e=dm(null,e,s,t,i)):(e.tag=0,e=Pc(null,e,s,t,i));else{if(s!=null){if(l=s.$$typeof,l===Z){e.tag=11,e=rm(null,e,s,t,i);break t}else if(l===_){e.tag=14,e=om(null,e,s,t,i);break t}}throw e=ze(s)||s,Error(o(306,e,""))}}return e;case 0:return Pc(t,e,e.type,e.pendingProps,i);case 1:return s=e.type,l=Ti(s,e.pendingProps),dm(t,e,s,l,i);case 3:t:{if(St(e,e.stateNode.containerInfo),t===null)throw Error(o(387));s=e.pendingProps;var u=e.memoizedState;l=u.element,Sc(t,e),gs(e,s,null,i);var y=e.memoizedState;if(s=y.cache,Vn(e,Kt,s),s!==u.cache&&mc(e,[Kt],i,!0),ms(),s=y.element,u.isDehydrated)if(u={element:s,isDehydrated:!1,cache:y.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=hm(t,e,s,i);break t}else if(s!==l){l=Ve(Error(o(424)),e),ls(l),e=hm(t,e,s,i);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Nt=Ze(t.firstChild),he=e,xt=!0,vi=null,sn=!0,i=Kp(e,null,s,i),e.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(os(),s===l){e=En(t,e,i);break t}re(t,e,s,i)}e=e.child}return e;case 26:return ro(t,e),t===null?(i=S0(e.type,null,e.pendingProps,null))?e.memoizedState=i:xt||(i=e.type,t=e.pendingProps,s=wo(st.current).createElement(i),s[ue]=e,s[me]=t,le(s,i,t),Wt(s),e.stateNode=s):e.memoizedState=S0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ci(e),t===null&&xt&&(s=e.stateNode=v0(e.type,e.pendingProps,st.current),he=e,sn=!0,l=Nt,In(e.type)?(zu=l,Nt=Ze(s.firstChild)):Nt=l),re(t,e,e.pendingProps.children,i),ro(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&xt&&((l=s=Nt)&&(s=S2(s,e.type,e.pendingProps,sn),s!==null?(e.stateNode=s,he=e,Nt=Ze(s.firstChild),sn=!1,l=!0):l=!1),l||bi(e)),ci(e),l=e.type,u=e.pendingProps,y=t!==null?t.memoizedProps:null,s=u.children,Mu(l,u)?s=null:y!==null&&Mu(l,y)&&(e.flags|=32),e.memoizedState!==null&&(l=Dc(t,e,Hx,null,null,i),Ls._currentValue=l),ro(t,e),re(t,e,s,i),e.child;case 6:return t===null&&xt&&((t=i=Nt)&&(i=w2(i,e.pendingProps,sn),i!==null?(e.stateNode=i,he=e,Nt=null,t=!0):t=!1),t||bi(e)),null;case 13:return pm(t,e,i);case 4:return St(e,e.stateNode.containerInfo),s=e.pendingProps,t===null?e.child=ca(e,null,s,i):re(t,e,s,i),e.child;case 11:return rm(t,e,e.type,e.pendingProps,i);case 7:return re(t,e,e.pendingProps,i),e.child;case 8:return re(t,e,e.pendingProps.children,i),e.child;case 12:return re(t,e,e.pendingProps.children,i),e.child;case 10:return s=e.pendingProps,Vn(e,e.type,s.value),re(t,e,s.children,i),e.child;case 9:return l=e.type._context,s=e.pendingProps.children,Si(e),l=fe(l),s=s(l),e.flags|=1,re(t,e,s,i),e.child;case 14:return om(t,e,e.type,e.pendingProps,i);case 15:return lm(t,e,e.type,e.pendingProps,i);case 19:return gm(t,e,i);case 31:return s=e.pendingProps,i=e.mode,s={mode:s.mode,children:s.children},t===null?(i=oo(s,i),i.ref=e.ref,e.child=i,i.return=e,e=i):(i=vn(t.child,s),i.ref=e.ref,e.child=i,i.return=e,e=i),e;case 22:return cm(t,e,i);case 24:return Si(e),s=fe(Kt),t===null?(l=vc(),l===null&&(l=Rt,u=gc(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=i),l=u),e.memoizedState={parent:s,cache:l},xc(e),Vn(e,Kt,l)):((t.lanes&i)!==0&&(Sc(t,e),gs(e,null,null,i),ms()),l=t.memoizedState,u=e.memoizedState,l.parent!==s?(l={parent:s,cache:s},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),Vn(e,Kt,s)):(s=u.cache,Vn(e,Kt,s),s!==l.cache&&mc(e,[Kt],i,!0))),re(t,e,e.pendingProps.children,i),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function jn(t){t.flags|=4}function vm(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!j0(e)){if(e=Ue.current,e!==null&&((vt&4194048)===vt?rn!==null:(vt&62914560)!==vt&&(vt&536870912)===0||e!==rn))throw hs=bc,ep;t.flags|=8192}}function lo(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Zd():536870912,t.lanes|=e,ha|=e)}function As(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,i=0,s=0;if(e)for(var l=t.child;l!==null;)i|=l.lanes|l.childLanes,s|=l.subtreeFlags&65011712,s|=l.flags&65011712,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)i|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=s,t.childLanes=i,e}function Qx(t,e,i){var s=e.pendingProps;switch(fc(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return Ot(e),null;case 3:return i=e.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),e.memoizedState.cache!==s&&(e.flags|=2048),wn(Kt),ce(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(rs(e)?jn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Zh())),Ot(e),null;case 26:return i=e.memoizedState,t===null?(jn(e),i!==null?(Ot(e),vm(e,i)):(Ot(e),e.flags&=-16777217)):i?i!==t.memoizedState?(jn(e),Ot(e),vm(e,i)):(Ot(e),e.flags&=-16777217):(t.memoizedProps!==s&&jn(e),Ot(e),e.flags&=-16777217),null;case 27:mn(e),i=st.current;var l=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==s&&jn(e);else{if(!s){if(e.stateNode===null)throw Error(o(166));return Ot(e),null}t=it.current,rs(e)?Qh(e):(t=v0(l,s,i),e.stateNode=t,jn(e))}return Ot(e),null;case 5:if(mn(e),i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==s&&jn(e);else{if(!s){if(e.stateNode===null)throw Error(o(166));return Ot(e),null}if(t=it.current,rs(e))Qh(e);else{switch(l=wo(st.current),t){case 1:t=l.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:t=l.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":t=l.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":t=l.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?l.createElement("select",{is:s.is}):l.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?l.createElement(i,{is:s.is}):l.createElement(i)}}t[ue]=e,t[me]=s;t:for(l=e.child;l!==null;){if(l.tag===5||l.tag===6)t.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break t;for(;l.sibling===null;){if(l.return===null||l.return===e)break t;l=l.return}l.sibling.return=l.return,l=l.sibling}e.stateNode=t;t:switch(le(t,i,s),i){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&jn(e)}}return Ot(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==s&&jn(e);else{if(typeof s!="string"&&e.stateNode===null)throw Error(o(166));if(t=st.current,rs(e)){if(t=e.stateNode,i=e.memoizedProps,s=null,l=he,l!==null)switch(l.tag){case 27:case 5:s=l.memoizedProps}t[ue]=e,t=!!(t.nodeValue===i||s!==null&&s.suppressHydrationWarning===!0||f0(t.nodeValue,i)),t||bi(e)}else t=wo(t).createTextNode(s),t[ue]=e,e.stateNode=t}return Ot(e),null;case 13:if(s=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=rs(e),s!==null&&s.dehydrated!==null){if(t===null){if(!l)throw Error(o(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[ue]=e}else os(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ot(e),l=!1}else l=Zh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(Tn(e),e):(Tn(e),null)}if(Tn(e),(e.flags&128)!==0)return e.lanes=i,e;if(i=s!==null,t=t!==null&&t.memoizedState!==null,i){s=e.child,l=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(l=s.alternate.memoizedState.cachePool.pool);var u=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==l&&(s.flags|=2048)}return i!==t&&i&&(e.child.flags|=8192),lo(e,e.updateQueue),Ot(e),null;case 4:return ce(),t===null&&Au(e.stateNode.containerInfo),Ot(e),null;case 10:return wn(e.type),Ot(e),null;case 19:if(I(Zt),l=e.memoizedState,l===null)return Ot(e),null;if(s=(e.flags&128)!==0,u=l.rendering,u===null)if(s)As(l,!1);else{if(Lt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=io(t),u!==null){for(e.flags|=128,As(l,!1),t=u.updateQueue,e.updateQueue=t,lo(e,t),e.subtreeFlags=0,t=i,i=e.child;i!==null;)Xh(i,t),i=i.sibling;return W(Zt,Zt.current&1|2),e.child}t=t.sibling}l.tail!==null&&an()>fo&&(e.flags|=128,s=!0,As(l,!1),e.lanes=4194304)}else{if(!s)if(t=io(u),t!==null){if(e.flags|=128,s=!0,t=t.updateQueue,e.updateQueue=t,lo(e,t),As(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!xt)return Ot(e),null}else 2*an()-l.renderingStartTime>fo&&i!==536870912&&(e.flags|=128,s=!0,As(l,!1),e.lanes=4194304);l.isBackwards?(u.sibling=e.child,e.child=u):(t=l.last,t!==null?t.sibling=u:e.child=u,l.last=u)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=an(),e.sibling=null,t=Zt.current,W(Zt,s?t&1|2:t&1),e):(Ot(e),null);case 22:case 23:return Tn(e),Ec(),s=e.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(e.flags|=8192):s&&(e.flags|=8192),s?(i&536870912)!==0&&(e.flags&128)===0&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),i=e.updateQueue,i!==null&&lo(e,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),s=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),s!==i&&(e.flags|=2048),t!==null&&I(wi),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),wn(Kt),Ot(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function Kx(t,e){switch(fc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return wn(Kt),ce(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return mn(e),null;case 13:if(Tn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));os()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return I(Zt),null;case 4:return ce(),null;case 10:return wn(e.type),null;case 22:case 23:return Tn(e),Ec(),t!==null&&I(wi),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return wn(Kt),null;case 25:return null;default:return null}}function bm(t,e){switch(fc(e),e.tag){case 3:wn(Kt),ce();break;case 26:case 27:case 5:mn(e);break;case 4:ce();break;case 13:Tn(e);break;case 19:I(Zt);break;case 10:wn(e.type);break;case 22:case 23:Tn(e),Ec(),t!==null&&I(wi);break;case 24:wn(Kt)}}function Ts(t,e){try{var i=e.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var l=s.next;i=l;do{if((i.tag&t)===t){s=void 0;var u=i.create,y=i.inst;s=u(),y.destroy=s}i=i.next}while(i!==l)}}catch(x){Ct(e,e.return,x)}}function Yn(t,e,i){try{var s=e.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var u=l.next;s=u;do{if((s.tag&t)===t){var y=s.inst,x=y.destroy;if(x!==void 0){y.destroy=void 0,l=e;var A=i,R=x;try{R()}catch(N){Ct(l,A,N)}}}s=s.next}while(s!==u)}}catch(N){Ct(e,e.return,N)}}function xm(t){var e=t.updateQueue;if(e!==null){var i=t.stateNode;try{op(e,i)}catch(s){Ct(t,t.return,s)}}}function Sm(t,e,i){i.props=Ti(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(s){Ct(t,e,s)}}function Es(t,e){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof i=="function"?t.refCleanup=i(s):i.current=s}}catch(l){Ct(t,e,l)}}function on(t,e){var i=t.ref,s=t.refCleanup;if(i!==null)if(typeof s=="function")try{s()}catch(l){Ct(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(l){Ct(t,e,l)}else i.current=null}function wm(t){var e=t.type,i=t.memoizedProps,s=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":i.autoFocus&&s.focus();break t;case"img":i.src?s.src=i.src:i.srcSet&&(s.srcset=i.srcSet)}}catch(l){Ct(t,t.return,l)}}function Jc(t,e,i){try{var s=t.stateNode;g2(s,t.type,i,e),s[me]=e}catch(l){Ct(t,t.return,l)}}function Am(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&In(t.type)||t.tag===4}function tu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Am(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&In(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function eu(t,e,i){var s=t.tag;if(s===5||s===6)t=t.stateNode,e?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(t,e):(e=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,e.appendChild(t),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=So));else if(s!==4&&(s===27&&In(t.type)&&(i=t.stateNode,e=null),t=t.child,t!==null))for(eu(t,e,i),t=t.sibling;t!==null;)eu(t,e,i),t=t.sibling}function co(t,e,i){var s=t.tag;if(s===5||s===6)t=t.stateNode,e?i.insertBefore(t,e):i.appendChild(t);else if(s!==4&&(s===27&&In(t.type)&&(i=t.stateNode),t=t.child,t!==null))for(co(t,e,i),t=t.sibling;t!==null;)co(t,e,i),t=t.sibling}function Tm(t){var e=t.stateNode,i=t.memoizedProps;try{for(var s=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);le(e,s,i),e[ue]=t,e[me]=i}catch(u){Ct(t,t.return,u)}}var Dn=!1,Gt=!1,nu=!1,Em=typeof WeakSet=="function"?WeakSet:Set,te=null;function Zx(t,e){if(t=t.containerInfo,ju=Mo,t=Vh(t),tc(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else t:{i=(i=t.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var l=s.anchorOffset,u=s.focusNode;s=s.focusOffset;try{i.nodeType,u.nodeType}catch{i=null;break t}var y=0,x=-1,A=-1,R=0,N=0,Y=t,z=null;e:for(;;){for(var k;Y!==i||l!==0&&Y.nodeType!==3||(x=y+l),Y!==u||s!==0&&Y.nodeType!==3||(A=y+s),Y.nodeType===3&&(y+=Y.nodeValue.length),(k=Y.firstChild)!==null;)z=Y,Y=k;for(;;){if(Y===t)break e;if(z===i&&++R===l&&(x=y),z===u&&++N===s&&(A=y),(k=Y.nextSibling)!==null)break;Y=z,z=Y.parentNode}Y=k}i=x===-1||A===-1?null:{start:x,end:A}}else i=null}i=i||{start:0,end:0}}else i=null;for(Du={focusedElem:t,selectionRange:i},Mo=!1,te=e;te!==null;)if(e=te,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,te=t;else for(;te!==null;){switch(e=te,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,i=e,l=u.memoizedProps,u=u.memoizedState,s=i.stateNode;try{var ot=Ti(i.type,l,i.elementType===i.type);t=s.getSnapshotBeforeUpdate(ot,u),s.__reactInternalSnapshotBeforeUpdate=t}catch(at){Ct(i,i.return,at)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,i=t.nodeType,i===9)Ru(t);else if(i===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ru(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=e.sibling,t!==null){t.return=e.return,te=t;break}te=e.return}}function jm(t,e,i){var s=i.flags;switch(i.tag){case 0:case 11:case 15:qn(t,i),s&4&&Ts(5,i);break;case 1:if(qn(t,i),s&4)if(t=i.stateNode,e===null)try{t.componentDidMount()}catch(y){Ct(i,i.return,y)}else{var l=Ti(i.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Ct(i,i.return,y)}}s&64&&xm(i),s&512&&Es(i,i.return);break;case 3:if(qn(t,i),s&64&&(t=i.updateQueue,t!==null)){if(e=null,i.child!==null)switch(i.child.tag){case 27:case 5:e=i.child.stateNode;break;case 1:e=i.child.stateNode}try{op(t,e)}catch(y){Ct(i,i.return,y)}}break;case 27:e===null&&s&4&&Tm(i);case 26:case 5:qn(t,i),e===null&&s&4&&wm(i),s&512&&Es(i,i.return);break;case 12:qn(t,i);break;case 13:qn(t,i),s&4&&Cm(t,i),s&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=s2.bind(null,i),A2(t,i))));break;case 22:if(s=i.memoizedState!==null||Dn,!s){e=e!==null&&e.memoizedState!==null||Gt,l=Dn;var u=Gt;Dn=s,(Gt=e)&&!u?Pn(t,i,(i.subtreeFlags&8772)!==0):qn(t,i),Dn=l,Gt=u}break;case 30:break;default:qn(t,i)}}function Dm(t){var e=t.alternate;e!==null&&(t.alternate=null,Dm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Bl(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var zt=null,ve=!1;function Mn(t,e,i){for(i=i.child;i!==null;)Mm(t,e,i),i=i.sibling}function Mm(t,e,i){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(Xa,i)}catch{}switch(i.tag){case 26:Gt||on(i,e),Mn(t,e,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Gt||on(i,e);var s=zt,l=ve;In(i.type)&&(zt=i.stateNode,ve=!1),Mn(t,e,i),Os(i.stateNode),zt=s,ve=l;break;case 5:Gt||on(i,e);case 6:if(s=zt,l=ve,zt=null,Mn(t,e,i),zt=s,ve=l,zt!==null)if(ve)try{(zt.nodeType===9?zt.body:zt.nodeName==="HTML"?zt.ownerDocument.body:zt).removeChild(i.stateNode)}catch(u){Ct(i,e,u)}else try{zt.removeChild(i.stateNode)}catch(u){Ct(i,e,u)}break;case 18:zt!==null&&(ve?(t=zt,g0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),Gs(t)):g0(zt,i.stateNode));break;case 4:s=zt,l=ve,zt=i.stateNode.containerInfo,ve=!0,Mn(t,e,i),zt=s,ve=l;break;case 0:case 11:case 14:case 15:Gt||Yn(2,i,e),Gt||Yn(4,i,e),Mn(t,e,i);break;case 1:Gt||(on(i,e),s=i.stateNode,typeof s.componentWillUnmount=="function"&&Sm(i,e,s)),Mn(t,e,i);break;case 21:Mn(t,e,i);break;case 22:Gt=(s=Gt)||i.memoizedState!==null,Mn(t,e,i),Gt=s;break;default:Mn(t,e,i)}}function Cm(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Gs(t)}catch(i){Ct(e,e.return,i)}}function Ix(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Em),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Em),e;default:throw Error(o(435,t.tag))}}function iu(t,e){var i=Ix(t);e.forEach(function(s){var l=r2.bind(null,t,s);i.has(s)||(i.add(s),s.then(l,l))})}function je(t,e){var i=e.deletions;if(i!==null)for(var s=0;s<i.length;s++){var l=i[s],u=t,y=e,x=y;t:for(;x!==null;){switch(x.tag){case 27:if(In(x.type)){zt=x.stateNode,ve=!1;break t}break;case 5:zt=x.stateNode,ve=!1;break t;case 3:case 4:zt=x.stateNode.containerInfo,ve=!0;break t}x=x.return}if(zt===null)throw Error(o(160));Mm(u,y,l),zt=null,ve=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Rm(e,t),e=e.sibling}var Ke=null;function Rm(t,e){var i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:je(e,t),De(t),s&4&&(Yn(3,t,t.return),Ts(3,t),Yn(5,t,t.return));break;case 1:je(e,t),De(t),s&512&&(Gt||i===null||on(i,i.return)),s&64&&Dn&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?s:i.concat(s))));break;case 26:var l=Ke;if(je(e,t),De(t),s&512&&(Gt||i===null||on(i,i.return)),s&4){var u=i!==null?i.memoizedState:null;if(s=t.memoizedState,i===null)if(s===null)if(t.stateNode===null){t:{s=t.type,i=t.memoizedProps,l=l.ownerDocument||l;e:switch(s){case"title":u=l.getElementsByTagName("title")[0],(!u||u[Ka]||u[ue]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(s),l.head.insertBefore(u,l.querySelector("head > title"))),le(u,s,i),u[ue]=t,Wt(u),s=u;break t;case"link":var y=T0("link","href",l).get(s+(i.href||""));if(y){for(var x=0;x<y.length;x++)if(u=y[x],u.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&u.getAttribute("rel")===(i.rel==null?null:i.rel)&&u.getAttribute("title")===(i.title==null?null:i.title)&&u.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){y.splice(x,1);break e}}u=l.createElement(s),le(u,s,i),l.head.appendChild(u);break;case"meta":if(y=T0("meta","content",l).get(s+(i.content||""))){for(x=0;x<y.length;x++)if(u=y[x],u.getAttribute("content")===(i.content==null?null:""+i.content)&&u.getAttribute("name")===(i.name==null?null:i.name)&&u.getAttribute("property")===(i.property==null?null:i.property)&&u.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&u.getAttribute("charset")===(i.charSet==null?null:i.charSet)){y.splice(x,1);break e}}u=l.createElement(s),le(u,s,i),l.head.appendChild(u);break;default:throw Error(o(468,s))}u[ue]=t,Wt(u),s=u}t.stateNode=s}else E0(l,t.type,t.stateNode);else t.stateNode=A0(l,s,t.memoizedProps);else u!==s?(u===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):u.count--,s===null?E0(l,t.type,t.stateNode):A0(l,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Jc(t,t.memoizedProps,i.memoizedProps)}break;case 27:je(e,t),De(t),s&512&&(Gt||i===null||on(i,i.return)),i!==null&&s&4&&Jc(t,t.memoizedProps,i.memoizedProps);break;case 5:if(je(e,t),De(t),s&512&&(Gt||i===null||on(i,i.return)),t.flags&32){l=t.stateNode;try{Pi(l,"")}catch(k){Ct(t,t.return,k)}}s&4&&t.stateNode!=null&&(l=t.memoizedProps,Jc(t,l,i!==null?i.memoizedProps:l)),s&1024&&(nu=!0);break;case 6:if(je(e,t),De(t),s&4){if(t.stateNode===null)throw Error(o(162));s=t.memoizedProps,i=t.stateNode;try{i.nodeValue=s}catch(k){Ct(t,t.return,k)}}break;case 3:if(Eo=null,l=Ke,Ke=Ao(e.containerInfo),je(e,t),Ke=l,De(t),s&4&&i!==null&&i.memoizedState.isDehydrated)try{Gs(e.containerInfo)}catch(k){Ct(t,t.return,k)}nu&&(nu=!1,_m(t));break;case 4:s=Ke,Ke=Ao(t.stateNode.containerInfo),je(e,t),De(t),Ke=s;break;case 12:je(e,t),De(t);break;case 13:je(e,t),De(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(cu=an()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,iu(t,s)));break;case 22:l=t.memoizedState!==null;var A=i!==null&&i.memoizedState!==null,R=Dn,N=Gt;if(Dn=R||l,Gt=N||A,je(e,t),Gt=N,Dn=R,De(t),s&8192)t:for(e=t.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(i===null||A||Dn||Gt||Ei(t)),i=null,e=t;;){if(e.tag===5||e.tag===26){if(i===null){A=i=e;try{if(u=A.stateNode,l)y=u.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{x=A.stateNode;var Y=A.memoizedProps.style,z=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;x.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(k){Ct(A,A.return,k)}}}else if(e.tag===6){if(i===null){A=e;try{A.stateNode.nodeValue=l?"":A.memoizedProps}catch(k){Ct(A,A.return,k)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;i===e&&(i=null),e=e.return}i===e&&(i=null),e.sibling.return=e.return,e=e.sibling}s&4&&(s=t.updateQueue,s!==null&&(i=s.retryQueue,i!==null&&(s.retryQueue=null,iu(t,i))));break;case 19:je(e,t),De(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,iu(t,s)));break;case 30:break;case 21:break;default:je(e,t),De(t)}}function De(t){var e=t.flags;if(e&2){try{for(var i,s=t.return;s!==null;){if(Am(s)){i=s;break}s=s.return}if(i==null)throw Error(o(160));switch(i.tag){case 27:var l=i.stateNode,u=tu(t);co(t,u,l);break;case 5:var y=i.stateNode;i.flags&32&&(Pi(y,""),i.flags&=-33);var x=tu(t);co(t,x,y);break;case 3:case 4:var A=i.stateNode.containerInfo,R=tu(t);eu(t,R,A);break;default:throw Error(o(161))}}catch(N){Ct(t,t.return,N)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function _m(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;_m(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function qn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)jm(t,e.alternate,e),e=e.sibling}function Ei(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Yn(4,e,e.return),Ei(e);break;case 1:on(e,e.return);var i=e.stateNode;typeof i.componentWillUnmount=="function"&&Sm(e,e.return,i),Ei(e);break;case 27:Os(e.stateNode);case 26:case 5:on(e,e.return),Ei(e);break;case 22:e.memoizedState===null&&Ei(e);break;case 30:Ei(e);break;default:Ei(e)}t=t.sibling}}function Pn(t,e,i){for(i=i&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var s=e.alternate,l=t,u=e,y=u.flags;switch(u.tag){case 0:case 11:case 15:Pn(l,u,i),Ts(4,u);break;case 1:if(Pn(l,u,i),s=u,l=s.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(R){Ct(s,s.return,R)}if(s=u,l=s.updateQueue,l!==null){var x=s.stateNode;try{var A=l.shared.hiddenCallbacks;if(A!==null)for(l.shared.hiddenCallbacks=null,l=0;l<A.length;l++)rp(A[l],x)}catch(R){Ct(s,s.return,R)}}i&&y&64&&xm(u),Es(u,u.return);break;case 27:Tm(u);case 26:case 5:Pn(l,u,i),i&&s===null&&y&4&&wm(u),Es(u,u.return);break;case 12:Pn(l,u,i);break;case 13:Pn(l,u,i),i&&y&4&&Cm(l,u);break;case 22:u.memoizedState===null&&Pn(l,u,i),Es(u,u.return);break;case 30:break;default:Pn(l,u,i)}e=e.sibling}}function au(t,e){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&us(i))}function su(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&us(t))}function ln(t,e,i,s){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zm(t,e,i,s),e=e.sibling}function zm(t,e,i,s){var l=e.flags;switch(e.tag){case 0:case 11:case 15:ln(t,e,i,s),l&2048&&Ts(9,e);break;case 1:ln(t,e,i,s);break;case 3:ln(t,e,i,s),l&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&us(t)));break;case 12:if(l&2048){ln(t,e,i,s),t=e.stateNode;try{var u=e.memoizedProps,y=u.id,x=u.onPostCommit;typeof x=="function"&&x(y,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(A){Ct(e,e.return,A)}}else ln(t,e,i,s);break;case 13:ln(t,e,i,s);break;case 23:break;case 22:u=e.stateNode,y=e.alternate,e.memoizedState!==null?u._visibility&2?ln(t,e,i,s):js(t,e):u._visibility&2?ln(t,e,i,s):(u._visibility|=2,ua(t,e,i,s,(e.subtreeFlags&10256)!==0)),l&2048&&au(y,e);break;case 24:ln(t,e,i,s),l&2048&&su(e.alternate,e);break;default:ln(t,e,i,s)}}function ua(t,e,i,s,l){for(l=l&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,y=e,x=i,A=s,R=y.flags;switch(y.tag){case 0:case 11:case 15:ua(u,y,x,A,l),Ts(8,y);break;case 23:break;case 22:var N=y.stateNode;y.memoizedState!==null?N._visibility&2?ua(u,y,x,A,l):js(u,y):(N._visibility|=2,ua(u,y,x,A,l)),l&&R&2048&&au(y.alternate,y);break;case 24:ua(u,y,x,A,l),l&&R&2048&&su(y.alternate,y);break;default:ua(u,y,x,A,l)}e=e.sibling}}function js(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var i=t,s=e,l=s.flags;switch(s.tag){case 22:js(i,s),l&2048&&au(s.alternate,s);break;case 24:js(i,s),l&2048&&su(s.alternate,s);break;default:js(i,s)}e=e.sibling}}var Ds=8192;function fa(t){if(t.subtreeFlags&Ds)for(t=t.child;t!==null;)km(t),t=t.sibling}function km(t){switch(t.tag){case 26:fa(t),t.flags&Ds&&t.memoizedState!==null&&V2(Ke,t.memoizedState,t.memoizedProps);break;case 5:fa(t);break;case 3:case 4:var e=Ke;Ke=Ao(t.stateNode.containerInfo),fa(t),Ke=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Ds,Ds=16777216,fa(t),Ds=e):fa(t));break;default:fa(t)}}function Om(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Ms(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var s=e[i];te=s,Vm(s,t)}Om(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Bm(t),t=t.sibling}function Bm(t){switch(t.tag){case 0:case 11:case 15:Ms(t),t.flags&2048&&Yn(9,t,t.return);break;case 3:Ms(t);break;case 12:Ms(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,uo(t)):Ms(t);break;default:Ms(t)}}function uo(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var s=e[i];te=s,Vm(s,t)}Om(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Yn(8,e,e.return),uo(e);break;case 22:i=e.stateNode,i._visibility&2&&(i._visibility&=-3,uo(e));break;default:uo(e)}t=t.sibling}}function Vm(t,e){for(;te!==null;){var i=te;switch(i.tag){case 0:case 11:case 15:Yn(8,i,e);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var s=i.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:us(i.memoizedState.cache)}if(s=i.child,s!==null)s.return=i,te=s;else t:for(i=t;te!==null;){s=te;var l=s.sibling,u=s.return;if(Dm(s),s===i){te=null;break t}if(l!==null){l.return=u,te=l;break t}te=u}}}var Wx={getCacheForType:function(t){var e=fe(Kt),i=e.data.get(t);return i===void 0&&(i=t(),e.data.set(t,i)),i}},Jx=typeof WeakMap=="function"?WeakMap:Map,Tt=0,Rt=null,gt=null,vt=0,Et=0,Me=null,Xn=!1,da=!1,ru=!1,Cn=0,Lt=0,$n=0,ji=0,ou=0,Fe=0,ha=0,Cs=null,be=null,lu=!1,cu=0,fo=1/0,ho=null,Qn=null,oe=0,Kn=null,pa=null,ma=0,uu=0,fu=null,Nm=null,Rs=0,du=null;function Ce(){if((Tt&2)!==0&&vt!==0)return vt&-vt;if(V.T!==null){var t=na;return t!==0?t:bu()}return Jd()}function Lm(){Fe===0&&(Fe=(vt&536870912)===0||xt?Kd():536870912);var t=Ue.current;return t!==null&&(t.flags|=32),Fe}function Re(t,e,i){(t===Rt&&(Et===2||Et===9)||t.cancelPendingCommit!==null)&&(ga(t,0),Zn(t,vt,Fe,!1)),Qa(t,i),((Tt&2)===0||t!==Rt)&&(t===Rt&&((Tt&2)===0&&(ji|=i),Lt===4&&Zn(t,vt,Fe,!1)),cn(t))}function Hm(t,e,i){if((Tt&6)!==0)throw Error(o(327));var s=!i&&(e&124)===0&&(e&t.expiredLanes)===0||$a(t,e),l=s?n2(t,e):mu(t,e,!0),u=s;do{if(l===0){da&&!s&&Zn(t,e,0,!1);break}else{if(i=t.current.alternate,u&&!t2(i)){l=mu(t,e,!1),u=!1;continue}if(l===2){if(u=e,t.errorRecoveryDisabledLanes&u)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){e=y;t:{var x=t;l=Cs;var A=x.current.memoizedState.isDehydrated;if(A&&(ga(x,y).flags|=256),y=mu(x,y,!1),y!==2){if(ru&&!A){x.errorRecoveryDisabledLanes|=u,ji|=u,l=4;break t}u=be,be=l,u!==null&&(be===null?be=u:be.push.apply(be,u))}l=y}if(u=!1,l!==2)continue}}if(l===1){ga(t,0),Zn(t,e,0,!0);break}t:{switch(s=t,u=l,u){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:Zn(s,e,Fe,!Xn);break t;case 2:be=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(l=cu+300-an(),10<l)){if(Zn(s,e,Fe,!Xn),Ar(s,0,!0)!==0)break t;s.timeoutHandle=p0(Um.bind(null,s,i,be,ho,lu,e,Fe,ji,ha,Xn,u,2,-0,0),l);break t}Um(s,i,be,ho,lu,e,Fe,ji,ha,Xn,u,0,-0,0)}}break}while(!0);cn(t)}function Um(t,e,i,s,l,u,y,x,A,R,N,Y,z,k){if(t.timeoutHandle=-1,Y=e.subtreeFlags,(Y&8192||(Y&16785408)===16785408)&&(Ns={stylesheets:null,count:0,unsuspend:B2},km(e),Y=N2(),Y!==null)){t.cancelPendingCommit=Y($m.bind(null,t,e,u,i,s,l,y,x,A,N,1,z,k)),Zn(t,u,y,!R);return}$m(t,e,u,i,s,l,y,x,A)}function t2(t){for(var e=t;;){var i=e.tag;if((i===0||i===11||i===15)&&e.flags&16384&&(i=e.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var s=0;s<i.length;s++){var l=i[s],u=l.getSnapshot;l=l.value;try{if(!Te(u(),l))return!1}catch{return!1}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zn(t,e,i,s){e&=~ou,e&=~ji,t.suspendedLanes|=e,t.pingedLanes&=~e,s&&(t.warmLanes|=e),s=t.expirationTimes;for(var l=e;0<l;){var u=31-Ae(l),y=1<<u;s[u]=-1,l&=~y}i!==0&&Id(t,i,e)}function po(){return(Tt&6)===0?(_s(0),!1):!0}function hu(){if(gt!==null){if(Et===0)var t=gt.return;else t=gt,Sn=xi=null,Rc(t),la=null,Ss=0,t=gt;for(;t!==null;)bm(t.alternate,t),t=t.return;gt=null}}function ga(t,e){var i=t.timeoutHandle;i!==-1&&(t.timeoutHandle=-1,v2(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),hu(),Rt=t,gt=i=vn(t.current,null),vt=e,Et=0,Me=null,Xn=!1,da=$a(t,e),ru=!1,ha=Fe=ou=ji=$n=Lt=0,be=Cs=null,lu=!1,(e&8)!==0&&(e|=e&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=e;0<s;){var l=31-Ae(s),u=1<<l;e|=t[l],s&=~u}return Cn=e,Br(),i}function Fm(t,e){ht=null,V.H=to,e===ds||e===qr?(e=ap(),Et=3):e===ep?(e=ap(),Et=4):Et=e===sm?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Me=e,gt===null&&(Lt=1,so(t,Ve(e,t.current)))}function Gm(){var t=V.H;return V.H=to,t===null?to:t}function Ym(){var t=V.A;return V.A=Wx,t}function pu(){Lt=4,Xn||(vt&4194048)!==vt&&Ue.current!==null||(da=!0),($n&134217727)===0&&(ji&134217727)===0||Rt===null||Zn(Rt,vt,Fe,!1)}function mu(t,e,i){var s=Tt;Tt|=2;var l=Gm(),u=Ym();(Rt!==t||vt!==e)&&(ho=null,ga(t,e)),e=!1;var y=Lt;t:do try{if(Et!==0&&gt!==null){var x=gt,A=Me;switch(Et){case 8:hu(),y=6;break t;case 3:case 2:case 9:case 6:Ue.current===null&&(e=!0);var R=Et;if(Et=0,Me=null,ya(t,x,A,R),i&&da){y=0;break t}break;default:R=Et,Et=0,Me=null,ya(t,x,A,R)}}e2(),y=Lt;break}catch(N){Fm(t,N)}while(!0);return e&&t.shellSuspendCounter++,Sn=xi=null,Tt=s,V.H=l,V.A=u,gt===null&&(Rt=null,vt=0,Br()),y}function e2(){for(;gt!==null;)qm(gt)}function n2(t,e){var i=Tt;Tt|=2;var s=Gm(),l=Ym();Rt!==t||vt!==e?(ho=null,fo=an()+500,ga(t,e)):da=$a(t,e);t:do try{if(Et!==0&&gt!==null){e=gt;var u=Me;e:switch(Et){case 1:Et=0,Me=null,ya(t,e,u,1);break;case 2:case 9:if(np(u)){Et=0,Me=null,Pm(e);break}e=function(){Et!==2&&Et!==9||Rt!==t||(Et=7),cn(t)},u.then(e,e);break t;case 3:Et=7;break t;case 4:Et=5;break t;case 7:np(u)?(Et=0,Me=null,Pm(e)):(Et=0,Me=null,ya(t,e,u,7));break;case 5:var y=null;switch(gt.tag){case 26:y=gt.memoizedState;case 5:case 27:var x=gt;if(!y||j0(y)){Et=0,Me=null;var A=x.sibling;if(A!==null)gt=A;else{var R=x.return;R!==null?(gt=R,mo(R)):gt=null}break e}}Et=0,Me=null,ya(t,e,u,5);break;case 6:Et=0,Me=null,ya(t,e,u,6);break;case 8:hu(),Lt=6;break t;default:throw Error(o(462))}}i2();break}catch(N){Fm(t,N)}while(!0);return Sn=xi=null,V.H=s,V.A=l,Tt=i,gt!==null?0:(Rt=null,vt=0,Br(),Lt)}function i2(){for(;gt!==null&&!Eb();)qm(gt)}function qm(t){var e=ym(t.alternate,t,Cn);t.memoizedProps=t.pendingProps,e===null?mo(t):gt=e}function Pm(t){var e=t,i=e.alternate;switch(e.tag){case 15:case 0:e=fm(i,e,e.pendingProps,e.type,void 0,vt);break;case 11:e=fm(i,e,e.pendingProps,e.type.render,e.ref,vt);break;case 5:Rc(e);default:bm(i,e),e=gt=Xh(e,Cn),e=ym(i,e,Cn)}t.memoizedProps=t.pendingProps,e===null?mo(t):gt=e}function ya(t,e,i,s){Sn=xi=null,Rc(e),la=null,Ss=0;var l=e.return;try{if(Xx(t,l,e,i,vt)){Lt=1,so(t,Ve(i,t.current)),gt=null;return}}catch(u){if(l!==null)throw gt=l,u;Lt=1,so(t,Ve(i,t.current)),gt=null;return}e.flags&32768?(xt||s===1?t=!0:da||(vt&536870912)!==0?t=!1:(Xn=t=!0,(s===2||s===9||s===3||s===6)&&(s=Ue.current,s!==null&&s.tag===13&&(s.flags|=16384))),Xm(e,t)):mo(e)}function mo(t){var e=t;do{if((e.flags&32768)!==0){Xm(e,Xn);return}t=e.return;var i=Qx(e.alternate,e,Cn);if(i!==null){gt=i;return}if(e=e.sibling,e!==null){gt=e;return}gt=e=t}while(e!==null);Lt===0&&(Lt=5)}function Xm(t,e){do{var i=Kx(t.alternate,t);if(i!==null){i.flags&=32767,gt=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!e&&(t=t.sibling,t!==null)){gt=t;return}gt=t=i}while(t!==null);Lt=6,gt=null}function $m(t,e,i,s,l,u,y,x,A){t.cancelPendingCommit=null;do go();while(oe!==0);if((Tt&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));if(u=e.lanes|e.childLanes,u|=sc,Bb(t,i,u,y,x,A),t===Rt&&(gt=Rt=null,vt=0),pa=e,Kn=t,ma=i,uu=u,fu=l,Nm=s,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,o2(xr,function(){return Wm(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||s){s=V.T,V.T=null,l=Q.p,Q.p=2,y=Tt,Tt|=4;try{Zx(t,e,i)}finally{Tt=y,Q.p=l,V.T=s}}oe=1,Qm(),Km(),Zm()}}function Qm(){if(oe===1){oe=0;var t=Kn,e=pa,i=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||i){i=V.T,V.T=null;var s=Q.p;Q.p=2;var l=Tt;Tt|=4;try{Rm(e,t);var u=Du,y=Vh(t.containerInfo),x=u.focusedElem,A=u.selectionRange;if(y!==x&&x&&x.ownerDocument&&Bh(x.ownerDocument.documentElement,x)){if(A!==null&&tc(x)){var R=A.start,N=A.end;if(N===void 0&&(N=R),"selectionStart"in x)x.selectionStart=R,x.selectionEnd=Math.min(N,x.value.length);else{var Y=x.ownerDocument||document,z=Y&&Y.defaultView||window;if(z.getSelection){var k=z.getSelection(),ot=x.textContent.length,at=Math.min(A.start,ot),Mt=A.end===void 0?at:Math.min(A.end,ot);!k.extend&&at>Mt&&(y=Mt,Mt=at,at=y);var D=Oh(x,at),j=Oh(x,Mt);if(D&&j&&(k.rangeCount!==1||k.anchorNode!==D.node||k.anchorOffset!==D.offset||k.focusNode!==j.node||k.focusOffset!==j.offset)){var C=Y.createRange();C.setStart(D.node,D.offset),k.removeAllRanges(),at>Mt?(k.addRange(C),k.extend(j.node,j.offset)):(C.setEnd(j.node,j.offset),k.addRange(C))}}}}for(Y=[],k=x;k=k.parentNode;)k.nodeType===1&&Y.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<Y.length;x++){var H=Y[x];H.element.scrollLeft=H.left,H.element.scrollTop=H.top}}Mo=!!ju,Du=ju=null}finally{Tt=l,Q.p=s,V.T=i}}t.current=e,oe=2}}function Km(){if(oe===2){oe=0;var t=Kn,e=pa,i=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||i){i=V.T,V.T=null;var s=Q.p;Q.p=2;var l=Tt;Tt|=4;try{jm(t,e.alternate,e)}finally{Tt=l,Q.p=s,V.T=i}}oe=3}}function Zm(){if(oe===4||oe===3){oe=0,jb();var t=Kn,e=pa,i=ma,s=Nm;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?oe=5:(oe=0,pa=Kn=null,Im(t,t.pendingLanes));var l=t.pendingLanes;if(l===0&&(Qn=null),kl(i),e=e.stateNode,we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(Xa,e,void 0,(e.current.flags&128)===128)}catch{}if(s!==null){e=V.T,l=Q.p,Q.p=2,V.T=null;try{for(var u=t.onRecoverableError,y=0;y<s.length;y++){var x=s[y];u(x.value,{componentStack:x.stack})}}finally{V.T=e,Q.p=l}}(ma&3)!==0&&go(),cn(t),l=t.pendingLanes,(i&4194090)!==0&&(l&42)!==0?t===du?Rs++:(Rs=0,du=t):Rs=0,_s(0)}}function Im(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,us(e)))}function go(t){return Qm(),Km(),Zm(),Wm()}function Wm(){if(oe!==5)return!1;var t=Kn,e=uu;uu=0;var i=kl(ma),s=V.T,l=Q.p;try{Q.p=32>i?32:i,V.T=null,i=fu,fu=null;var u=Kn,y=ma;if(oe=0,pa=Kn=null,ma=0,(Tt&6)!==0)throw Error(o(331));var x=Tt;if(Tt|=4,Bm(u.current),zm(u,u.current,y,i),Tt=x,_s(0,!1),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(Xa,u)}catch{}return!0}finally{Q.p=l,V.T=s,Im(t,e)}}function Jm(t,e,i){e=Ve(i,e),e=qc(t.stateNode,e,2),t=Hn(t,e,2),t!==null&&(Qa(t,2),cn(t))}function Ct(t,e,i){if(t.tag===3)Jm(t,t,i);else for(;e!==null;){if(e.tag===3){Jm(e,t,i);break}else if(e.tag===1){var s=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Qn===null||!Qn.has(s))){t=Ve(i,t),i=im(2),s=Hn(e,i,2),s!==null&&(am(i,s,e,t),Qa(s,2),cn(s));break}}e=e.return}}function gu(t,e,i){var s=t.pingCache;if(s===null){s=t.pingCache=new Jx;var l=new Set;s.set(e,l)}else l=s.get(e),l===void 0&&(l=new Set,s.set(e,l));l.has(i)||(ru=!0,l.add(i),t=a2.bind(null,t,e,i),e.then(t,t))}function a2(t,e,i){var s=t.pingCache;s!==null&&s.delete(e),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,Rt===t&&(vt&i)===i&&(Lt===4||Lt===3&&(vt&62914560)===vt&&300>an()-cu?(Tt&2)===0&&ga(t,0):ou|=i,ha===vt&&(ha=0)),cn(t)}function t0(t,e){e===0&&(e=Zd()),t=Wi(t,e),t!==null&&(Qa(t,e),cn(t))}function s2(t){var e=t.memoizedState,i=0;e!==null&&(i=e.retryLane),t0(t,i)}function r2(t,e){var i=0;switch(t.tag){case 13:var s=t.stateNode,l=t.memoizedState;l!==null&&(i=l.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(o(314))}s!==null&&s.delete(e),t0(t,i)}function o2(t,e){return Cl(t,e)}var yo=null,va=null,yu=!1,vo=!1,vu=!1,Di=0;function cn(t){t!==va&&t.next===null&&(va===null?yo=va=t:va=va.next=t),vo=!0,yu||(yu=!0,c2())}function _s(t,e){if(!vu&&vo){vu=!0;do for(var i=!1,s=yo;s!==null;){if(t!==0){var l=s.pendingLanes;if(l===0)var u=0;else{var y=s.suspendedLanes,x=s.pingedLanes;u=(1<<31-Ae(42|t)+1)-1,u&=l&~(y&~x),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(i=!0,a0(s,u))}else u=vt,u=Ar(s,s===Rt?u:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(u&3)===0||$a(s,u)||(i=!0,a0(s,u));s=s.next}while(i);vu=!1}}function l2(){e0()}function e0(){vo=yu=!1;var t=0;Di!==0&&(y2()&&(t=Di),Di=0);for(var e=an(),i=null,s=yo;s!==null;){var l=s.next,u=n0(s,e);u===0?(s.next=null,i===null?yo=l:i.next=l,l===null&&(va=i)):(i=s,(t!==0||(u&3)!==0)&&(vo=!0)),s=l}_s(t)}function n0(t,e){for(var i=t.suspendedLanes,s=t.pingedLanes,l=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var y=31-Ae(u),x=1<<y,A=l[y];A===-1?((x&i)===0||(x&s)!==0)&&(l[y]=Ob(x,e)):A<=e&&(t.expiredLanes|=x),u&=~x}if(e=Rt,i=vt,i=Ar(t,t===e?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,i===0||t===e&&(Et===2||Et===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Rl(s),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||$a(t,i)){if(e=i&-i,e===t.callbackPriority)return e;switch(s!==null&&Rl(s),kl(i)){case 2:case 8:i=$d;break;case 32:i=xr;break;case 268435456:i=Qd;break;default:i=xr}return s=i0.bind(null,t),i=Cl(i,s),t.callbackPriority=e,t.callbackNode=i,e}return s!==null&&s!==null&&Rl(s),t.callbackPriority=2,t.callbackNode=null,2}function i0(t,e){if(oe!==0&&oe!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(go()&&t.callbackNode!==i)return null;var s=vt;return s=Ar(t,t===Rt?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Hm(t,s,e),n0(t,an()),t.callbackNode!=null&&t.callbackNode===i?i0.bind(null,t):null)}function a0(t,e){if(go())return null;Hm(t,e,!0)}function c2(){b2(function(){(Tt&6)!==0?Cl(Xd,l2):e0()})}function bu(){return Di===0&&(Di=Kd()),Di}function s0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Mr(""+t)}function r0(t,e){var i=e.ownerDocument.createElement("input");return i.name=e.name,i.value=e.value,t.id&&i.setAttribute("form",t.id),e.parentNode.insertBefore(i,e),t=new FormData(t),i.parentNode.removeChild(i),t}function u2(t,e,i,s,l){if(e==="submit"&&i&&i.stateNode===l){var u=s0((l[me]||null).action),y=s.submitter;y&&(e=(e=y[me]||null)?s0(e.formAction):y.getAttribute("formAction"),e!==null&&(u=e,y=null));var x=new zr("action","action",null,s,l);t.push({event:x,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Di!==0){var A=y?r0(l,y):new FormData(l);Hc(i,{pending:!0,data:A,method:l.method,action:u},null,A)}}else typeof u=="function"&&(x.preventDefault(),A=y?r0(l,y):new FormData(l),Hc(i,{pending:!0,data:A,method:l.method,action:u},u,A))},currentTarget:l}]})}}for(var xu=0;xu<ac.length;xu++){var Su=ac[xu],f2=Su.toLowerCase(),d2=Su[0].toUpperCase()+Su.slice(1);Qe(f2,"on"+d2)}Qe(Hh,"onAnimationEnd"),Qe(Uh,"onAnimationIteration"),Qe(Fh,"onAnimationStart"),Qe("dblclick","onDoubleClick"),Qe("focusin","onFocus"),Qe("focusout","onBlur"),Qe(Cx,"onTransitionRun"),Qe(Rx,"onTransitionStart"),Qe(_x,"onTransitionCancel"),Qe(Gh,"onTransitionEnd"),Gi("onMouseEnter",["mouseout","mouseover"]),Gi("onMouseLeave",["mouseout","mouseover"]),Gi("onPointerEnter",["pointerout","pointerover"]),Gi("onPointerLeave",["pointerout","pointerover"]),fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fi("onBeforeInput",["compositionend","keypress","textInput","paste"]),fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zs));function o0(t,e){e=(e&4)!==0;for(var i=0;i<t.length;i++){var s=t[i],l=s.event;s=s.listeners;t:{var u=void 0;if(e)for(var y=s.length-1;0<=y;y--){var x=s[y],A=x.instance,R=x.currentTarget;if(x=x.listener,A!==u&&l.isPropagationStopped())break t;u=x,l.currentTarget=R;try{u(l)}catch(N){ao(N)}l.currentTarget=null,u=A}else for(y=0;y<s.length;y++){if(x=s[y],A=x.instance,R=x.currentTarget,x=x.listener,A!==u&&l.isPropagationStopped())break t;u=x,l.currentTarget=R;try{u(l)}catch(N){ao(N)}l.currentTarget=null,u=A}}}}function yt(t,e){var i=e[Ol];i===void 0&&(i=e[Ol]=new Set);var s=t+"__bubble";i.has(s)||(l0(e,t,2,!1),i.add(s))}function wu(t,e,i){var s=0;e&&(s|=4),l0(i,t,s,e)}var bo="_reactListening"+Math.random().toString(36).slice(2);function Au(t){if(!t[bo]){t[bo]=!0,eh.forEach(function(i){i!=="selectionchange"&&(h2.has(i)||wu(i,!1,t),wu(i,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[bo]||(e[bo]=!0,wu("selectionchange",!1,e))}}function l0(t,e,i,s){switch(z0(e)){case 2:var l=U2;break;case 8:l=F2;break;default:l=Nu}i=l.bind(null,e,i,t),l=void 0,!Pl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),s?l!==void 0?t.addEventListener(e,i,{capture:!0,passive:l}):t.addEventListener(e,i,!0):l!==void 0?t.addEventListener(e,i,{passive:l}):t.addEventListener(e,i,!1)}function Tu(t,e,i,s,l){var u=s;if((e&1)===0&&(e&2)===0&&s!==null)t:for(;;){if(s===null)return;var y=s.tag;if(y===3||y===4){var x=s.stateNode.containerInfo;if(x===l)break;if(y===4)for(y=s.return;y!==null;){var A=y.tag;if((A===3||A===4)&&y.stateNode.containerInfo===l)return;y=y.return}for(;x!==null;){if(y=Hi(x),y===null)return;if(A=y.tag,A===5||A===6||A===26||A===27){s=u=y;continue t}x=x.parentNode}}s=s.return}mh(function(){var R=u,N=Yl(i),Y=[];t:{var z=Yh.get(t);if(z!==void 0){var k=zr,ot=t;switch(t){case"keypress":if(Rr(i)===0)break t;case"keydown":case"keyup":k=ox;break;case"focusin":ot="focus",k=Kl;break;case"focusout":ot="blur",k=Kl;break;case"beforeblur":case"afterblur":k=Kl;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=vh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Kb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=ux;break;case Hh:case Uh:case Fh:k=Wb;break;case Gh:k=dx;break;case"scroll":case"scrollend":k=$b;break;case"wheel":k=px;break;case"copy":case"cut":case"paste":k=tx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=xh;break;case"toggle":case"beforetoggle":k=gx}var at=(e&4)!==0,Mt=!at&&(t==="scroll"||t==="scrollend"),D=at?z!==null?z+"Capture":null:z;at=[];for(var j=R,C;j!==null;){var H=j;if(C=H.stateNode,H=H.tag,H!==5&&H!==26&&H!==27||C===null||D===null||(H=Ia(j,D),H!=null&&at.push(ks(j,H,C))),Mt)break;j=j.return}0<at.length&&(z=new k(z,ot,null,i,N),Y.push({event:z,listeners:at}))}}if((e&7)===0){t:{if(z=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",z&&i!==Gl&&(ot=i.relatedTarget||i.fromElement)&&(Hi(ot)||ot[Li]))break t;if((k||z)&&(z=N.window===N?N:(z=N.ownerDocument)?z.defaultView||z.parentWindow:window,k?(ot=i.relatedTarget||i.toElement,k=R,ot=ot?Hi(ot):null,ot!==null&&(Mt=f(ot),at=ot.tag,ot!==Mt||at!==5&&at!==27&&at!==6)&&(ot=null)):(k=null,ot=R),k!==ot)){if(at=vh,H="onMouseLeave",D="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(at=xh,H="onPointerLeave",D="onPointerEnter",j="pointer"),Mt=k==null?z:Za(k),C=ot==null?z:Za(ot),z=new at(H,j+"leave",k,i,N),z.target=Mt,z.relatedTarget=C,H=null,Hi(N)===R&&(at=new at(D,j+"enter",ot,i,N),at.target=C,at.relatedTarget=Mt,H=at),Mt=H,k&&ot)e:{for(at=k,D=ot,j=0,C=at;C;C=ba(C))j++;for(C=0,H=D;H;H=ba(H))C++;for(;0<j-C;)at=ba(at),j--;for(;0<C-j;)D=ba(D),C--;for(;j--;){if(at===D||D!==null&&at===D.alternate)break e;at=ba(at),D=ba(D)}at=null}else at=null;k!==null&&c0(Y,z,k,at,!1),ot!==null&&Mt!==null&&c0(Y,Mt,ot,at,!0)}}t:{if(z=R?Za(R):window,k=z.nodeName&&z.nodeName.toLowerCase(),k==="select"||k==="input"&&z.type==="file")var tt=Mh;else if(jh(z))if(Ch)tt=jx;else{tt=Tx;var pt=Ax}else k=z.nodeName,!k||k.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?R&&Fl(R.elementType)&&(tt=Mh):tt=Ex;if(tt&&(tt=tt(t,R))){Dh(Y,tt,i,N);break t}pt&&pt(t,z,R),t==="focusout"&&R&&z.type==="number"&&R.memoizedProps.value!=null&&Ul(z,"number",z.value)}switch(pt=R?Za(R):window,t){case"focusin":(jh(pt)||pt.contentEditable==="true")&&(Ki=pt,ec=R,ss=null);break;case"focusout":ss=ec=Ki=null;break;case"mousedown":nc=!0;break;case"contextmenu":case"mouseup":case"dragend":nc=!1,Nh(Y,i,N);break;case"selectionchange":if(Mx)break;case"keydown":case"keyup":Nh(Y,i,N)}var nt;if(Il)t:{switch(t){case"compositionstart":var rt="onCompositionStart";break t;case"compositionend":rt="onCompositionEnd";break t;case"compositionupdate":rt="onCompositionUpdate";break t}rt=void 0}else Qi?Th(t,i)&&(rt="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(rt="onCompositionStart");rt&&(Sh&&i.locale!=="ko"&&(Qi||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&Qi&&(nt=gh()):(Bn=N,Xl="value"in Bn?Bn.value:Bn.textContent,Qi=!0)),pt=xo(R,rt),0<pt.length&&(rt=new bh(rt,t,null,i,N),Y.push({event:rt,listeners:pt}),nt?rt.data=nt:(nt=Eh(i),nt!==null&&(rt.data=nt)))),(nt=vx?bx(t,i):xx(t,i))&&(rt=xo(R,"onBeforeInput"),0<rt.length&&(pt=new bh("onBeforeInput","beforeinput",null,i,N),Y.push({event:pt,listeners:rt}),pt.data=nt)),u2(Y,t,R,i,N)}o0(Y,e)})}function ks(t,e,i){return{instance:t,listener:e,currentTarget:i}}function xo(t,e){for(var i=e+"Capture",s=[];t!==null;){var l=t,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=Ia(t,i),l!=null&&s.unshift(ks(t,l,u)),l=Ia(t,e),l!=null&&s.push(ks(t,l,u))),t.tag===3)return s;t=t.return}return[]}function ba(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function c0(t,e,i,s,l){for(var u=e._reactName,y=[];i!==null&&i!==s;){var x=i,A=x.alternate,R=x.stateNode;if(x=x.tag,A!==null&&A===s)break;x!==5&&x!==26&&x!==27||R===null||(A=R,l?(R=Ia(i,u),R!=null&&y.unshift(ks(i,R,A))):l||(R=Ia(i,u),R!=null&&y.push(ks(i,R,A)))),i=i.return}y.length!==0&&t.push({event:e,listeners:y})}var p2=/\r\n?/g,m2=/\u0000|\uFFFD/g;function u0(t){return(typeof t=="string"?t:""+t).replace(p2,`
`).replace(m2,"")}function f0(t,e){return e=u0(e),u0(t)===e}function So(){}function Dt(t,e,i,s,l,u){switch(i){case"children":typeof s=="string"?e==="body"||e==="textarea"&&s===""||Pi(t,s):(typeof s=="number"||typeof s=="bigint")&&e!=="body"&&Pi(t,""+s);break;case"className":Er(t,"class",s);break;case"tabIndex":Er(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Er(t,i,s);break;case"style":hh(t,s,u);break;case"data":if(e!=="object"){Er(t,"data",s);break}case"src":case"href":if(s===""&&(e!=="a"||i!=="href")){t.removeAttribute(i);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(i);break}s=Mr(""+s),t.setAttribute(i,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(i==="formAction"?(e!=="input"&&Dt(t,e,"name",l.name,l,null),Dt(t,e,"formEncType",l.formEncType,l,null),Dt(t,e,"formMethod",l.formMethod,l,null),Dt(t,e,"formTarget",l.formTarget,l,null)):(Dt(t,e,"encType",l.encType,l,null),Dt(t,e,"method",l.method,l,null),Dt(t,e,"target",l.target,l,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(i);break}s=Mr(""+s),t.setAttribute(i,s);break;case"onClick":s!=null&&(t.onclick=So);break;case"onScroll":s!=null&&yt("scroll",t);break;case"onScrollEnd":s!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(i=s.__html,i!=null){if(l.children!=null)throw Error(o(60));t.innerHTML=i}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}i=Mr(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,""+s):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":s===!0?t.setAttribute(i,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,s):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(i,s):t.removeAttribute(i);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(i):t.setAttribute(i,s);break;case"popover":yt("beforetoggle",t),yt("toggle",t),Tr(t,"popover",s);break;case"xlinkActuate":gn(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":gn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":gn(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":gn(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":gn(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":gn(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":gn(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":gn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":gn(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Tr(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=Pb.get(i)||i,Tr(t,i,s))}}function Eu(t,e,i,s,l,u){switch(i){case"style":hh(t,s,u);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(i=s.__html,i!=null){if(l.children!=null)throw Error(o(60));t.innerHTML=i}}break;case"children":typeof s=="string"?Pi(t,s):(typeof s=="number"||typeof s=="bigint")&&Pi(t,""+s);break;case"onScroll":s!=null&&yt("scroll",t);break;case"onScrollEnd":s!=null&&yt("scrollend",t);break;case"onClick":s!=null&&(t.onclick=So);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nh.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(l=i.endsWith("Capture"),e=i.slice(2,l?i.length-7:void 0),u=t[me]||null,u=u!=null?u[i]:null,typeof u=="function"&&t.removeEventListener(e,u,l),typeof s=="function")){typeof u!="function"&&u!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(e,s,l);break t}i in t?t[i]=s:s===!0?t.setAttribute(i,""):Tr(t,i,s)}}}function le(t,e,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var s=!1,l=!1,u;for(u in i)if(i.hasOwnProperty(u)){var y=i[u];if(y!=null)switch(u){case"src":s=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Dt(t,e,u,y,i,null)}}l&&Dt(t,e,"srcSet",i.srcSet,i,null),s&&Dt(t,e,"src",i.src,i,null);return;case"input":yt("invalid",t);var x=u=y=l=null,A=null,R=null;for(s in i)if(i.hasOwnProperty(s)){var N=i[s];if(N!=null)switch(s){case"name":l=N;break;case"type":y=N;break;case"checked":A=N;break;case"defaultChecked":R=N;break;case"value":u=N;break;case"defaultValue":x=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,e));break;default:Dt(t,e,s,N,i,null)}}ch(t,u,x,A,R,y,l,!1),jr(t);return;case"select":yt("invalid",t),s=y=u=null;for(l in i)if(i.hasOwnProperty(l)&&(x=i[l],x!=null))switch(l){case"value":u=x;break;case"defaultValue":y=x;break;case"multiple":s=x;default:Dt(t,e,l,x,i,null)}e=u,i=y,t.multiple=!!s,e!=null?qi(t,!!s,e,!1):i!=null&&qi(t,!!s,i,!0);return;case"textarea":yt("invalid",t),u=l=s=null;for(y in i)if(i.hasOwnProperty(y)&&(x=i[y],x!=null))switch(y){case"value":s=x;break;case"defaultValue":l=x;break;case"children":u=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(o(91));break;default:Dt(t,e,y,x,i,null)}fh(t,s,l,u),jr(t);return;case"option":for(A in i)if(i.hasOwnProperty(A)&&(s=i[A],s!=null))switch(A){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Dt(t,e,A,s,i,null)}return;case"dialog":yt("beforetoggle",t),yt("toggle",t),yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(s=0;s<zs.length;s++)yt(zs[s],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in i)if(i.hasOwnProperty(R)&&(s=i[R],s!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Dt(t,e,R,s,i,null)}return;default:if(Fl(e)){for(N in i)i.hasOwnProperty(N)&&(s=i[N],s!==void 0&&Eu(t,e,N,s,i,void 0));return}}for(x in i)i.hasOwnProperty(x)&&(s=i[x],s!=null&&Dt(t,e,x,s,i,null))}function g2(t,e,i,s){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,y=null,x=null,A=null,R=null,N=null;for(k in i){var Y=i[k];if(i.hasOwnProperty(k)&&Y!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":A=Y;default:s.hasOwnProperty(k)||Dt(t,e,k,null,s,Y)}}for(var z in s){var k=s[z];if(Y=i[z],s.hasOwnProperty(z)&&(k!=null||Y!=null))switch(z){case"type":u=k;break;case"name":l=k;break;case"checked":R=k;break;case"defaultChecked":N=k;break;case"value":y=k;break;case"defaultValue":x=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(o(137,e));break;default:k!==Y&&Dt(t,e,z,k,s,Y)}}Hl(t,y,x,A,R,N,u,l);return;case"select":k=y=x=z=null;for(u in i)if(A=i[u],i.hasOwnProperty(u)&&A!=null)switch(u){case"value":break;case"multiple":k=A;default:s.hasOwnProperty(u)||Dt(t,e,u,null,s,A)}for(l in s)if(u=s[l],A=i[l],s.hasOwnProperty(l)&&(u!=null||A!=null))switch(l){case"value":z=u;break;case"defaultValue":x=u;break;case"multiple":y=u;default:u!==A&&Dt(t,e,l,u,s,A)}e=x,i=y,s=k,z!=null?qi(t,!!i,z,!1):!!s!=!!i&&(e!=null?qi(t,!!i,e,!0):qi(t,!!i,i?[]:"",!1));return;case"textarea":k=z=null;for(x in i)if(l=i[x],i.hasOwnProperty(x)&&l!=null&&!s.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:Dt(t,e,x,null,s,l)}for(y in s)if(l=s[y],u=i[y],s.hasOwnProperty(y)&&(l!=null||u!=null))switch(y){case"value":z=l;break;case"defaultValue":k=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(o(91));break;default:l!==u&&Dt(t,e,y,l,s,u)}uh(t,z,k);return;case"option":for(var ot in i)if(z=i[ot],i.hasOwnProperty(ot)&&z!=null&&!s.hasOwnProperty(ot))switch(ot){case"selected":t.selected=!1;break;default:Dt(t,e,ot,null,s,z)}for(A in s)if(z=s[A],k=i[A],s.hasOwnProperty(A)&&z!==k&&(z!=null||k!=null))switch(A){case"selected":t.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Dt(t,e,A,z,s,k)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in i)z=i[at],i.hasOwnProperty(at)&&z!=null&&!s.hasOwnProperty(at)&&Dt(t,e,at,null,s,z);for(R in s)if(z=s[R],k=i[R],s.hasOwnProperty(R)&&z!==k&&(z!=null||k!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,e));break;default:Dt(t,e,R,z,s,k)}return;default:if(Fl(e)){for(var Mt in i)z=i[Mt],i.hasOwnProperty(Mt)&&z!==void 0&&!s.hasOwnProperty(Mt)&&Eu(t,e,Mt,void 0,s,z);for(N in s)z=s[N],k=i[N],!s.hasOwnProperty(N)||z===k||z===void 0&&k===void 0||Eu(t,e,N,z,s,k);return}}for(var D in i)z=i[D],i.hasOwnProperty(D)&&z!=null&&!s.hasOwnProperty(D)&&Dt(t,e,D,null,s,z);for(Y in s)z=s[Y],k=i[Y],!s.hasOwnProperty(Y)||z===k||z==null&&k==null||Dt(t,e,Y,z,s,k)}var ju=null,Du=null;function wo(t){return t.nodeType===9?t:t.ownerDocument}function d0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function h0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Mu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cu=null;function y2(){var t=window.event;return t&&t.type==="popstate"?t===Cu?!1:(Cu=t,!0):(Cu=null,!1)}var p0=typeof setTimeout=="function"?setTimeout:void 0,v2=typeof clearTimeout=="function"?clearTimeout:void 0,m0=typeof Promise=="function"?Promise:void 0,b2=typeof queueMicrotask=="function"?queueMicrotask:typeof m0<"u"?function(t){return m0.resolve(null).then(t).catch(x2)}:p0;function x2(t){setTimeout(function(){throw t})}function In(t){return t==="head"}function g0(t,e){var i=e,s=0,l=0;do{var u=i.nextSibling;if(t.removeChild(i),u&&u.nodeType===8)if(i=u.data,i==="/$"){if(0<s&&8>s){i=s;var y=t.ownerDocument;if(i&1&&Os(y.documentElement),i&2&&Os(y.body),i&4)for(i=y.head,Os(i),y=i.firstChild;y;){var x=y.nextSibling,A=y.nodeName;y[Ka]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&y.rel.toLowerCase()==="stylesheet"||i.removeChild(y),y=x}}if(l===0){t.removeChild(u),Gs(e);return}l--}else i==="$"||i==="$?"||i==="$!"?l++:s=i.charCodeAt(0)-48;else s=0;i=u}while(i);Gs(e)}function Ru(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var i=e;switch(e=e.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Ru(i),Bl(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function S2(t,e,i,s){for(;t.nodeType===1;){var l=i;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ka])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Ze(t.nextSibling),t===null)break}return null}function w2(t,e,i){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ze(t.nextSibling),t===null))return null;return t}function _u(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function A2(t,e){var i=t.ownerDocument;if(t.data!=="$?"||i.readyState==="complete")e();else{var s=function(){e(),i.removeEventListener("DOMContentLoaded",s)};i.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Ze(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var zu=null;function y0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"){if(e===0)return t;e--}else i==="/$"&&e++}t=t.previousSibling}return null}function v0(t,e,i){switch(e=wo(i),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function Os(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Bl(t)}var Ge=new Map,b0=new Set;function Ao(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Rn=Q.d;Q.d={f:T2,r:E2,D:j2,C:D2,L:M2,m:C2,X:_2,S:R2,M:z2};function T2(){var t=Rn.f(),e=po();return t||e}function E2(t){var e=Ui(t);e!==null&&e.tag===5&&e.type==="form"?Hp(e):Rn.r(t)}var xa=typeof document>"u"?null:document;function x0(t,e,i){var s=xa;if(s&&typeof e=="string"&&e){var l=Be(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof i=="string"&&(l+='[crossorigin="'+i+'"]'),b0.has(l)||(b0.add(l),t={rel:t,crossOrigin:i,href:e},s.querySelector(l)===null&&(e=s.createElement("link"),le(e,"link",t),Wt(e),s.head.appendChild(e)))}}function j2(t){Rn.D(t),x0("dns-prefetch",t,null)}function D2(t,e){Rn.C(t,e),x0("preconnect",t,e)}function M2(t,e,i){Rn.L(t,e,i);var s=xa;if(s&&t&&e){var l='link[rel="preload"][as="'+Be(e)+'"]';e==="image"&&i&&i.imageSrcSet?(l+='[imagesrcset="'+Be(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(l+='[imagesizes="'+Be(i.imageSizes)+'"]')):l+='[href="'+Be(t)+'"]';var u=l;switch(e){case"style":u=Sa(t);break;case"script":u=wa(t)}Ge.has(u)||(t=v({rel:"preload",href:e==="image"&&i&&i.imageSrcSet?void 0:t,as:e},i),Ge.set(u,t),s.querySelector(l)!==null||e==="style"&&s.querySelector(Bs(u))||e==="script"&&s.querySelector(Vs(u))||(e=s.createElement("link"),le(e,"link",t),Wt(e),s.head.appendChild(e)))}}function C2(t,e){Rn.m(t,e);var i=xa;if(i&&t){var s=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+Be(s)+'"][href="'+Be(t)+'"]',u=l;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=wa(t)}if(!Ge.has(u)&&(t=v({rel:"modulepreload",href:t},e),Ge.set(u,t),i.querySelector(l)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Vs(u)))return}s=i.createElement("link"),le(s,"link",t),Wt(s),i.head.appendChild(s)}}}function R2(t,e,i){Rn.S(t,e,i);var s=xa;if(s&&t){var l=Fi(s).hoistableStyles,u=Sa(t);e=e||"default";var y=l.get(u);if(!y){var x={loading:0,preload:null};if(y=s.querySelector(Bs(u)))x.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":e},i),(i=Ge.get(u))&&ku(t,i);var A=y=s.createElement("link");Wt(A),le(A,"link",t),A._p=new Promise(function(R,N){A.onload=R,A.onerror=N}),A.addEventListener("load",function(){x.loading|=1}),A.addEventListener("error",function(){x.loading|=2}),x.loading|=4,To(y,e,s)}y={type:"stylesheet",instance:y,count:1,state:x},l.set(u,y)}}}function _2(t,e){Rn.X(t,e);var i=xa;if(i&&t){var s=Fi(i).hoistableScripts,l=wa(t),u=s.get(l);u||(u=i.querySelector(Vs(l)),u||(t=v({src:t,async:!0},e),(e=Ge.get(l))&&Ou(t,e),u=i.createElement("script"),Wt(u),le(u,"link",t),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(l,u))}}function z2(t,e){Rn.M(t,e);var i=xa;if(i&&t){var s=Fi(i).hoistableScripts,l=wa(t),u=s.get(l);u||(u=i.querySelector(Vs(l)),u||(t=v({src:t,async:!0,type:"module"},e),(e=Ge.get(l))&&Ou(t,e),u=i.createElement("script"),Wt(u),le(u,"link",t),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(l,u))}}function S0(t,e,i,s){var l=(l=st.current)?Ao(l):null;if(!l)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(e=Sa(i.href),i=Fi(l).hoistableStyles,s=i.get(e),s||(s={type:"style",instance:null,count:0,state:null},i.set(e,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=Sa(i.href);var u=Fi(l).hoistableStyles,y=u.get(t);if(y||(l=l.ownerDocument||l,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,y),(u=l.querySelector(Bs(t)))&&!u._p&&(y.instance=u,y.state.loading=5),Ge.has(t)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Ge.set(t,i),u||k2(l,t,i,y.state))),e&&s===null)throw Error(o(528,""));return y}if(e&&s!==null)throw Error(o(529,""));return null;case"script":return e=i.async,i=i.src,typeof i=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=wa(i),i=Fi(l).hoistableScripts,s=i.get(e),s||(s={type:"script",instance:null,count:0,state:null},i.set(e,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function Sa(t){return'href="'+Be(t)+'"'}function Bs(t){return'link[rel="stylesheet"]['+t+"]"}function w0(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function k2(t,e,i,s){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?s.loading=1:(e=t.createElement("link"),s.preload=e,e.addEventListener("load",function(){return s.loading|=1}),e.addEventListener("error",function(){return s.loading|=2}),le(e,"link",i),Wt(e),t.head.appendChild(e))}function wa(t){return'[src="'+Be(t)+'"]'}function Vs(t){return"script[async]"+t}function A0(t,e,i){if(e.count++,e.instance===null)switch(e.type){case"style":var s=t.querySelector('style[data-href~="'+Be(i.href)+'"]');if(s)return e.instance=s,Wt(s),s;var l=v({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Wt(s),le(s,"style",l),To(s,i.precedence,t),e.instance=s;case"stylesheet":l=Sa(i.href);var u=t.querySelector(Bs(l));if(u)return e.state.loading|=4,e.instance=u,Wt(u),u;s=w0(i),(l=Ge.get(l))&&ku(s,l),u=(t.ownerDocument||t).createElement("link"),Wt(u);var y=u;return y._p=new Promise(function(x,A){y.onload=x,y.onerror=A}),le(u,"link",s),e.state.loading|=4,To(u,i.precedence,t),e.instance=u;case"script":return u=wa(i.src),(l=t.querySelector(Vs(u)))?(e.instance=l,Wt(l),l):(s=i,(l=Ge.get(u))&&(s=v({},i),Ou(s,l)),t=t.ownerDocument||t,l=t.createElement("script"),Wt(l),le(l,"link",s),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(s=e.instance,e.state.loading|=4,To(s,i.precedence,t));return e.instance}function To(t,e,i){for(var s=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=s.length?s[s.length-1]:null,u=l,y=0;y<s.length;y++){var x=s[y];if(x.dataset.precedence===e)u=x;else if(u!==l)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=i.nodeType===9?i.head:i,e.insertBefore(t,e.firstChild))}function ku(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Ou(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Eo=null;function T0(t,e,i){if(Eo===null){var s=new Map,l=Eo=new Map;l.set(i,s)}else l=Eo,s=l.get(i),s||(s=new Map,l.set(i,s));if(s.has(t))return s;for(s.set(t,null),i=i.getElementsByTagName(t),l=0;l<i.length;l++){var u=i[l];if(!(u[Ka]||u[ue]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var y=u.getAttribute(e)||"";y=t+y;var x=s.get(y);x?x.push(u):s.set(y,[u])}}return s}function E0(t,e,i){t=t.ownerDocument||t,t.head.insertBefore(i,e==="title"?t.querySelector("head > title"):null)}function O2(t,e,i){if(i===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function j0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ns=null;function B2(){}function V2(t,e,i){if(Ns===null)throw Error(o(475));var s=Ns;if(e.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var l=Sa(i.href),u=t.querySelector(Bs(l));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=jo.bind(s),t.then(s,s)),e.state.loading|=4,e.instance=u,Wt(u);return}u=t.ownerDocument||t,i=w0(i),(l=Ge.get(l))&&ku(i,l),u=u.createElement("link"),Wt(u);var y=u;y._p=new Promise(function(x,A){y.onload=x,y.onerror=A}),le(u,"link",i),e.instance=u}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(s.count++,e=jo.bind(s),t.addEventListener("load",e),t.addEventListener("error",e))}}function N2(){if(Ns===null)throw Error(o(475));var t=Ns;return t.stylesheets&&t.count===0&&Bu(t,t.stylesheets),0<t.count?function(e){var i=setTimeout(function(){if(t.stylesheets&&Bu(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(i)}}:null}function jo(){if(this.count--,this.count===0){if(this.stylesheets)Bu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Do=null;function Bu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Do=new Map,e.forEach(L2,t),Do=null,jo.call(t))}function L2(t,e){if(!(e.state.loading&4)){var i=Do.get(t);if(i)var s=i.get(null);else{i=new Map,Do.set(t,i);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var y=l[u];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(i.set(y.dataset.precedence,y),s=y)}s&&i.set(null,s)}l=e.instance,y=l.getAttribute("data-precedence"),u=i.get(y)||s,u===s&&i.set(null,l),i.set(y,l),this.count++,s=jo.bind(this),l.addEventListener("load",s),l.addEventListener("error",s),u?u.parentNode.insertBefore(l,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var Ls={$$typeof:L,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function H2(t,e,i,s,l,u,y,x){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_l(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.hiddenUpdates=_l(null),this.identifierPrefix=s,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function D0(t,e,i,s,l,u,y,x,A,R,N,Y){return t=new H2(t,e,i,y,x,A,R,Y),e=1,u===!0&&(e|=24),u=Ee(3,null,null,e),t.current=u,u.stateNode=t,e=gc(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:s,isDehydrated:i,cache:e},xc(u),t}function M0(t){return t?(t=Ji,t):Ji}function C0(t,e,i,s,l,u){l=M0(l),s.context===null?s.context=l:s.pendingContext=l,s=Ln(e),s.payload={element:i},u=u===void 0?null:u,u!==null&&(s.callback=u),i=Hn(t,s,e),i!==null&&(Re(i,t,e),ps(i,t,e))}function R0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<e?i:e}}function Vu(t,e){R0(t,e),(t=t.alternate)&&R0(t,e)}function _0(t){if(t.tag===13){var e=Wi(t,67108864);e!==null&&Re(e,t,67108864),Vu(t,67108864)}}var Mo=!0;function U2(t,e,i,s){var l=V.T;V.T=null;var u=Q.p;try{Q.p=2,Nu(t,e,i,s)}finally{Q.p=u,V.T=l}}function F2(t,e,i,s){var l=V.T;V.T=null;var u=Q.p;try{Q.p=8,Nu(t,e,i,s)}finally{Q.p=u,V.T=l}}function Nu(t,e,i,s){if(Mo){var l=Lu(s);if(l===null)Tu(t,e,s,Co,i),k0(t,s);else if(Y2(l,t,e,i,s))s.stopPropagation();else if(k0(t,s),e&4&&-1<G2.indexOf(t)){for(;l!==null;){var u=Ui(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var y=ui(u.pendingLanes);if(y!==0){var x=u;for(x.pendingLanes|=2,x.entangledLanes|=2;y;){var A=1<<31-Ae(y);x.entanglements[1]|=A,y&=~A}cn(u),(Tt&6)===0&&(fo=an()+500,_s(0))}}break;case 13:x=Wi(u,2),x!==null&&Re(x,u,2),po(),Vu(u,2)}if(u=Lu(s),u===null&&Tu(t,e,s,Co,i),u===l)break;l=u}l!==null&&s.stopPropagation()}else Tu(t,e,s,null,i)}}function Lu(t){return t=Yl(t),Hu(t)}var Co=null;function Hu(t){if(Co=null,t=Hi(t),t!==null){var e=f(t);if(e===null)t=null;else{var i=e.tag;if(i===13){if(t=d(e),t!==null)return t;t=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Co=t,null}function z0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Db()){case Xd:return 2;case $d:return 8;case xr:case Mb:return 32;case Qd:return 268435456;default:return 32}default:return 32}}var Uu=!1,Wn=null,Jn=null,ti=null,Hs=new Map,Us=new Map,ei=[],G2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function k0(t,e){switch(t){case"focusin":case"focusout":Wn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":ti=null;break;case"pointerover":case"pointerout":Hs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Us.delete(e.pointerId)}}function Fs(t,e,i,s,l,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:i,eventSystemFlags:s,nativeEvent:u,targetContainers:[l]},e!==null&&(e=Ui(e),e!==null&&_0(e)),t):(t.eventSystemFlags|=s,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function Y2(t,e,i,s,l){switch(e){case"focusin":return Wn=Fs(Wn,t,e,i,s,l),!0;case"dragenter":return Jn=Fs(Jn,t,e,i,s,l),!0;case"mouseover":return ti=Fs(ti,t,e,i,s,l),!0;case"pointerover":var u=l.pointerId;return Hs.set(u,Fs(Hs.get(u)||null,t,e,i,s,l)),!0;case"gotpointercapture":return u=l.pointerId,Us.set(u,Fs(Us.get(u)||null,t,e,i,s,l)),!0}return!1}function O0(t){var e=Hi(t.target);if(e!==null){var i=f(e);if(i!==null){if(e=i.tag,e===13){if(e=d(i),e!==null){t.blockedOn=e,Vb(t.priority,function(){if(i.tag===13){var s=Ce();s=zl(s);var l=Wi(i,s);l!==null&&Re(l,i,s),Vu(i,s)}});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ro(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var i=Lu(t.nativeEvent);if(i===null){i=t.nativeEvent;var s=new i.constructor(i.type,i);Gl=s,i.target.dispatchEvent(s),Gl=null}else return e=Ui(i),e!==null&&_0(e),t.blockedOn=i,!1;e.shift()}return!0}function B0(t,e,i){Ro(t)&&i.delete(e)}function q2(){Uu=!1,Wn!==null&&Ro(Wn)&&(Wn=null),Jn!==null&&Ro(Jn)&&(Jn=null),ti!==null&&Ro(ti)&&(ti=null),Hs.forEach(B0),Us.forEach(B0)}function _o(t,e){t.blockedOn===e&&(t.blockedOn=null,Uu||(Uu=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,q2)))}var zo=null;function V0(t){zo!==t&&(zo=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){zo===t&&(zo=null);for(var e=0;e<t.length;e+=3){var i=t[e],s=t[e+1],l=t[e+2];if(typeof s!="function"){if(Hu(s||i)===null)continue;break}var u=Ui(i);u!==null&&(t.splice(e,3),e-=3,Hc(u,{pending:!0,data:l,method:i.method,action:s},s,l))}}))}function Gs(t){function e(A){return _o(A,t)}Wn!==null&&_o(Wn,t),Jn!==null&&_o(Jn,t),ti!==null&&_o(ti,t),Hs.forEach(e),Us.forEach(e);for(var i=0;i<ei.length;i++){var s=ei[i];s.blockedOn===t&&(s.blockedOn=null)}for(;0<ei.length&&(i=ei[0],i.blockedOn===null);)O0(i),i.blockedOn===null&&ei.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(s=0;s<i.length;s+=3){var l=i[s],u=i[s+1],y=l[me]||null;if(typeof u=="function")y||V0(i);else if(y){var x=null;if(u&&u.hasAttribute("formAction")){if(l=u,y=u[me]||null)x=y.formAction;else if(Hu(l)!==null)continue}else x=y.action;typeof x=="function"?i[s+1]=x:(i.splice(s,3),s-=3),V0(i)}}}function Fu(t){this._internalRoot=t}ko.prototype.render=Fu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var i=e.current,s=Ce();C0(i,s,t,e,null,null)},ko.prototype.unmount=Fu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;C0(t.current,2,null,t,null,null),po(),e[Li]=null}};function ko(t){this._internalRoot=t}ko.prototype.unstable_scheduleHydration=function(t){if(t){var e=Jd();t={blockedOn:null,target:t,priority:e};for(var i=0;i<ei.length&&e!==0&&e<ei[i].priority;i++);ei.splice(i,0,t),i===0&&O0(t)}};var N0=a.version;if(N0!=="19.1.0")throw Error(o(527,N0,"19.1.0"));Q.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=p(e),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var P2={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oo.isDisabled&&Oo.supportsFiber)try{Xa=Oo.inject(P2),we=Oo}catch{}}return qs.createRoot=function(t,e){if(!c(t))throw Error(o(299));var i=!1,s="",l=Jp,u=tm,y=em,x=null;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(s=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(y=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(x=e.unstable_transitionCallbacks)),e=D0(t,1,!1,null,null,i,s,l,u,y,x,null),t[Li]=e.current,Au(t),new Fu(e)},qs.hydrateRoot=function(t,e,i){if(!c(t))throw Error(o(299));var s=!1,l="",u=Jp,y=tm,x=em,A=null,R=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(y=i.onCaughtError),i.onRecoverableError!==void 0&&(x=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(A=i.unstable_transitionCallbacks),i.formState!==void 0&&(R=i.formState)),e=D0(t,1,!0,e,i??null,s,l,u,y,x,A,R),e.context=M0(null),i=e.current,s=Ce(),s=zl(s),l=Ln(s),l.callback=null,Hn(i,l,s),i=s,e.current.lanes=i,Qa(e,i),cn(e),t[Li]=e.current,Au(t),new ko(e)},qs.version="19.1.0",qs}var $0;function nS(){if($0)return qu.exports;$0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),qu.exports=eS(),qu.exports}var iS=nS(),ae=function(){return ae=Object.assign||function(a){for(var r,o=1,c=arguments.length;o<c;o++){r=arguments[o];for(var f in r)Object.prototype.hasOwnProperty.call(r,f)&&(a[f]=r[f])}return a},ae.apply(this,arguments)};function _a(n,a,r){if(r||arguments.length===2)for(var o=0,c=a.length,f;o<c;o++)(f||!(o in a))&&(f||(f=Array.prototype.slice.call(a,0,o)),f[o]=a[o]);return n.concat(f||Array.prototype.slice.call(a))}var _t="-ms-",Ws="-moz-",wt="-webkit-",h1="comm",yl="rule",ad="decl",aS="@import",p1="@keyframes",sS="@layer",m1=Math.abs,sd=String.fromCharCode,jf=Object.assign;function rS(n,a){return ie(n,0)^45?(((a<<2^ie(n,0))<<2^ie(n,1))<<2^ie(n,2))<<2^ie(n,3):0}function g1(n){return n.trim()}function _n(n,a){return(n=a.exec(n))?n[0]:n}function dt(n,a,r){return n.replace(a,r)}function Qo(n,a,r){return n.indexOf(a,r)}function ie(n,a){return n.charCodeAt(a)|0}function za(n,a,r){return n.slice(a,r)}function un(n){return n.length}function y1(n){return n.length}function Zs(n,a){return a.push(n),n}function oS(n,a){return n.map(a).join("")}function Q0(n,a){return n.filter(function(r){return!_n(r,a)})}var vl=1,ka=1,v1=0,Xe=0,$t=0,Ha="";function bl(n,a,r,o,c,f,d,m){return{value:n,root:a,parent:r,type:o,props:c,children:f,line:vl,column:ka,length:d,return:"",siblings:m}}function ai(n,a){return jf(bl("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},a)}function Aa(n){for(;n.root;)n=ai(n.root,{children:[n]});Zs(n,n.siblings)}function lS(){return $t}function cS(){return $t=Xe>0?ie(Ha,--Xe):0,ka--,$t===10&&(ka=1,vl--),$t}function en(){return $t=Xe<v1?ie(Ha,Xe++):0,ka++,$t===10&&(ka=1,vl++),$t}function ki(){return ie(Ha,Xe)}function Ko(){return Xe}function xl(n,a){return za(Ha,n,a)}function Df(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function uS(n){return vl=ka=1,v1=un(Ha=n),Xe=0,[]}function fS(n){return Ha="",n}function Qu(n){return g1(xl(Xe-1,Mf(n===91?n+2:n===40?n+1:n)))}function dS(n){for(;($t=ki())&&$t<33;)en();return Df(n)>2||Df($t)>3?"":" "}function hS(n,a){for(;--a&&en()&&!($t<48||$t>102||$t>57&&$t<65||$t>70&&$t<97););return xl(n,Ko()+(a<6&&ki()==32&&en()==32))}function Mf(n){for(;en();)switch($t){case n:return Xe;case 34:case 39:n!==34&&n!==39&&Mf($t);break;case 40:n===41&&Mf(n);break;case 92:en();break}return Xe}function pS(n,a){for(;en()&&n+$t!==57;)if(n+$t===84&&ki()===47)break;return"/*"+xl(a,Xe-1)+"*"+sd(n===47?n:en())}function mS(n){for(;!Df(ki());)en();return xl(n,Xe)}function gS(n){return fS(Zo("",null,null,null,[""],n=uS(n),0,[0],n))}function Zo(n,a,r,o,c,f,d,m,p){for(var g=0,v=0,S=d,b=0,T=0,M=0,B=1,U=1,F=1,P=0,L="",Z=c,G=f,$=o,_=L;U;)switch(M=P,P=en()){case 40:if(M!=108&&ie(_,S-1)==58){Qo(_+=dt(Qu(P),"&","&\f"),"&\f",m1(g?m[g-1]:0))!=-1&&(F=-1);break}case 34:case 39:case 91:_+=Qu(P);break;case 9:case 10:case 13:case 32:_+=dS(M);break;case 92:_+=hS(Ko()-1,7);continue;case 47:switch(ki()){case 42:case 47:Zs(yS(pS(en(),Ko()),a,r,p),p);break;default:_+="/"}break;case 123*B:m[g++]=un(_)*F;case 125*B:case 59:case 0:switch(P){case 0:case 125:U=0;case 59+v:F==-1&&(_=dt(_,/\f/g,"")),T>0&&un(_)-S&&Zs(T>32?Z0(_+";",o,r,S-1,p):Z0(dt(_," ","")+";",o,r,S-2,p),p);break;case 59:_+=";";default:if(Zs($=K0(_,a,r,g,v,c,m,L,Z=[],G=[],S,f),f),P===123)if(v===0)Zo(_,a,$,$,Z,f,S,m,G);else switch(b===99&&ie(_,3)===110?100:b){case 100:case 108:case 109:case 115:Zo(n,$,$,o&&Zs(K0(n,$,$,0,0,c,m,L,c,Z=[],S,G),G),c,G,S,m,o?Z:G);break;default:Zo(_,$,$,$,[""],G,0,m,G)}}g=v=T=0,B=F=1,L=_="",S=d;break;case 58:S=1+un(_),T=M;default:if(B<1){if(P==123)--B;else if(P==125&&B++==0&&cS()==125)continue}switch(_+=sd(P),P*B){case 38:F=v>0?1:(_+="\f",-1);break;case 44:m[g++]=(un(_)-1)*F,F=1;break;case 64:ki()===45&&(_+=Qu(en())),b=ki(),v=S=un(L=_+=mS(Ko())),P++;break;case 45:M===45&&un(_)==2&&(B=0)}}return f}function K0(n,a,r,o,c,f,d,m,p,g,v,S){for(var b=c-1,T=c===0?f:[""],M=y1(T),B=0,U=0,F=0;B<o;++B)for(var P=0,L=za(n,b+1,b=m1(U=d[B])),Z=n;P<M;++P)(Z=g1(U>0?T[P]+" "+L:dt(L,/&\f/g,T[P])))&&(p[F++]=Z);return bl(n,a,r,c===0?yl:m,p,g,v,S)}function yS(n,a,r,o){return bl(n,a,r,h1,sd(lS()),za(n,2,-2),0,o)}function Z0(n,a,r,o,c){return bl(n,a,r,ad,za(n,0,o),za(n,o+1,-1),o,c)}function b1(n,a,r){switch(rS(n,a)){case 5103:return wt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return wt+n+n;case 4789:return Ws+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return wt+n+Ws+n+_t+n+n;case 5936:switch(ie(n,a+11)){case 114:return wt+n+_t+dt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return wt+n+_t+dt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return wt+n+_t+dt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return wt+n+_t+n+n;case 6165:return wt+n+_t+"flex-"+n+n;case 5187:return wt+n+dt(n,/(\w+).+(:[^]+)/,wt+"box-$1$2"+_t+"flex-$1$2")+n;case 5443:return wt+n+_t+"flex-item-"+dt(n,/flex-|-self/g,"")+(_n(n,/flex-|baseline/)?"":_t+"grid-row-"+dt(n,/flex-|-self/g,""))+n;case 4675:return wt+n+_t+"flex-line-pack"+dt(n,/align-content|flex-|-self/g,"")+n;case 5548:return wt+n+_t+dt(n,"shrink","negative")+n;case 5292:return wt+n+_t+dt(n,"basis","preferred-size")+n;case 6060:return wt+"box-"+dt(n,"-grow","")+wt+n+_t+dt(n,"grow","positive")+n;case 4554:return wt+dt(n,/([^-])(transform)/g,"$1"+wt+"$2")+n;case 6187:return dt(dt(dt(n,/(zoom-|grab)/,wt+"$1"),/(image-set)/,wt+"$1"),n,"")+n;case 5495:case 3959:return dt(n,/(image-set\([^]*)/,wt+"$1$`$1");case 4968:return dt(dt(n,/(.+:)(flex-)?(.*)/,wt+"box-pack:$3"+_t+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+wt+n+n;case 4200:if(!_n(n,/flex-|baseline/))return _t+"grid-column-align"+za(n,a)+n;break;case 2592:case 3360:return _t+dt(n,"template-","")+n;case 4384:case 3616:return r&&r.some(function(o,c){return a=c,_n(o.props,/grid-\w+-end/)})?~Qo(n+(r=r[a].value),"span",0)?n:_t+dt(n,"-start","")+n+_t+"grid-row-span:"+(~Qo(r,"span",0)?_n(r,/\d+/):+_n(r,/\d+/)-+_n(n,/\d+/))+";":_t+dt(n,"-start","")+n;case 4896:case 4128:return r&&r.some(function(o){return _n(o.props,/grid-\w+-start/)})?n:_t+dt(dt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return dt(n,/(.+)-inline(.+)/,wt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(un(n)-1-a>6)switch(ie(n,a+1)){case 109:if(ie(n,a+4)!==45)break;case 102:return dt(n,/(.+:)(.+)-([^]+)/,"$1"+wt+"$2-$3$1"+Ws+(ie(n,a+3)==108?"$3":"$2-$3"))+n;case 115:return~Qo(n,"stretch",0)?b1(dt(n,"stretch","fill-available"),a,r)+n:n}break;case 5152:case 5920:return dt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,c,f,d,m,p,g){return _t+c+":"+f+g+(d?_t+c+"-span:"+(m?p:+p-+f)+g:"")+n});case 4949:if(ie(n,a+6)===121)return dt(n,":",":"+wt)+n;break;case 6444:switch(ie(n,ie(n,14)===45?18:11)){case 120:return dt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+wt+(ie(n,14)===45?"inline-":"")+"box$3$1"+wt+"$2$3$1"+_t+"$2box$3")+n;case 100:return dt(n,":",":"+_t)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return dt(n,"scroll-","scroll-snap-")+n}return n}function rl(n,a){for(var r="",o=0;o<n.length;o++)r+=a(n[o],o,n,a)||"";return r}function vS(n,a,r,o){switch(n.type){case sS:if(n.children.length)break;case aS:case ad:return n.return=n.return||n.value;case h1:return"";case p1:return n.return=n.value+"{"+rl(n.children,o)+"}";case yl:if(!un(n.value=n.props.join(",")))return""}return un(r=rl(n.children,o))?n.return=n.value+"{"+r+"}":""}function bS(n){var a=y1(n);return function(r,o,c,f){for(var d="",m=0;m<a;m++)d+=n[m](r,o,c,f)||"";return d}}function xS(n){return function(a){a.root||(a=a.return)&&n(a)}}function SS(n,a,r,o){if(n.length>-1&&!n.return)switch(n.type){case ad:n.return=b1(n.value,n.length,r);return;case p1:return rl([ai(n,{value:dt(n.value,"@","@"+wt)})],o);case yl:if(n.length)return oS(r=n.props,function(c){switch(_n(c,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Aa(ai(n,{props:[dt(c,/:(read-\w+)/,":"+Ws+"$1")]})),Aa(ai(n,{props:[c]})),jf(n,{props:Q0(r,o)});break;case"::placeholder":Aa(ai(n,{props:[dt(c,/:(plac\w+)/,":"+wt+"input-$1")]})),Aa(ai(n,{props:[dt(c,/:(plac\w+)/,":"+Ws+"$1")]})),Aa(ai(n,{props:[dt(c,/:(plac\w+)/,_t+"input-$1")]})),Aa(ai(n,{props:[c]})),jf(n,{props:Q0(r,o)});break}return""})}}var wS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_e={},Oa=typeof process<"u"&&_e!==void 0&&(_e.REACT_APP_SC_ATTR||_e.SC_ATTR)||"data-styled",x1="active",S1="data-styled-version",Sl="6.1.19",rd=`/*!sc*/
`,ol=typeof window<"u"&&typeof document<"u",AS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&_e!==void 0&&_e.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&_e.REACT_APP_SC_DISABLE_SPEEDY!==""?_e.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&_e.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&_e!==void 0&&_e.SC_DISABLE_SPEEDY!==void 0&&_e.SC_DISABLE_SPEEDY!==""&&_e.SC_DISABLE_SPEEDY!=="false"&&_e.SC_DISABLE_SPEEDY),TS={},wl=Object.freeze([]),Ba=Object.freeze({});function w1(n,a,r){return r===void 0&&(r=Ba),n.theme!==r.theme&&n.theme||a||r.theme}var A1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ES=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,jS=/(^-|-$)/g;function I0(n){return n.replace(ES,"-").replace(jS,"")}var DS=/(a)(d)/gi,Bo=52,W0=function(n){return String.fromCharCode(n+(n>25?39:97))};function Cf(n){var a,r="";for(a=Math.abs(n);a>Bo;a=a/Bo|0)r=W0(a%Bo)+r;return(W0(a%Bo)+r).replace(DS,"$1-$2")}var Ku,T1=5381,Ta=function(n,a){for(var r=a.length;r;)n=33*n^a.charCodeAt(--r);return n},E1=function(n){return Ta(T1,n)};function od(n){return Cf(E1(n)>>>0)}function MS(n){return n.displayName||n.name||"Component"}function Zu(n){return typeof n=="string"&&!0}var j1=typeof Symbol=="function"&&Symbol.for,D1=j1?Symbol.for("react.memo"):60115,CS=j1?Symbol.for("react.forward_ref"):60112,RS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},_S={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},M1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zS=((Ku={})[CS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ku[D1]=M1,Ku);function J0(n){return("type"in(a=n)&&a.type.$$typeof)===D1?M1:"$$typeof"in n?zS[n.$$typeof]:RS;var a}var kS=Object.defineProperty,OS=Object.getOwnPropertyNames,tg=Object.getOwnPropertySymbols,BS=Object.getOwnPropertyDescriptor,VS=Object.getPrototypeOf,eg=Object.prototype;function C1(n,a,r){if(typeof a!="string"){if(eg){var o=VS(a);o&&o!==eg&&C1(n,o,r)}var c=OS(a);tg&&(c=c.concat(tg(a)));for(var f=J0(n),d=J0(a),m=0;m<c.length;++m){var p=c[m];if(!(p in _S||r&&r[p]||d&&p in d||f&&p in f)){var g=BS(a,p);try{kS(n,p,g)}catch{}}}}return n}function Vi(n){return typeof n=="function"}function ld(n){return typeof n=="object"&&"styledComponentId"in n}function Ri(n,a){return n&&a?"".concat(n," ").concat(a):n||a||""}function ll(n,a){if(n.length===0)return"";for(var r=n[0],o=1;o<n.length;o++)r+=n[o];return r}function sr(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Rf(n,a,r){if(r===void 0&&(r=!1),!r&&!sr(n)&&!Array.isArray(n))return a;if(Array.isArray(a))for(var o=0;o<a.length;o++)n[o]=Rf(n[o],a[o]);else if(sr(a))for(var o in a)n[o]=Rf(n[o],a[o]);return n}function cd(n,a){Object.defineProperty(n,"toString",{value:a})}function Ni(n){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var NS=function(){function n(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}return n.prototype.indexOfGroup=function(a){for(var r=0,o=0;o<a;o++)r+=this.groupSizes[o];return r},n.prototype.insertRules=function(a,r){if(a>=this.groupSizes.length){for(var o=this.groupSizes,c=o.length,f=c;a>=f;)if((f<<=1)<0)throw Ni(16,"".concat(a));this.groupSizes=new Uint32Array(f),this.groupSizes.set(o),this.length=f;for(var d=c;d<f;d++)this.groupSizes[d]=0}for(var m=this.indexOfGroup(a+1),p=(d=0,r.length);d<p;d++)this.tag.insertRule(m,r[d])&&(this.groupSizes[a]++,m++)},n.prototype.clearGroup=function(a){if(a<this.length){var r=this.groupSizes[a],o=this.indexOfGroup(a),c=o+r;this.groupSizes[a]=0;for(var f=o;f<c;f++)this.tag.deleteRule(o)}},n.prototype.getGroup=function(a){var r="";if(a>=this.length||this.groupSizes[a]===0)return r;for(var o=this.groupSizes[a],c=this.indexOfGroup(a),f=c+o,d=c;d<f;d++)r+="".concat(this.tag.getRule(d)).concat(rd);return r},n}(),Io=new Map,cl=new Map,Wo=1,Vo=function(n){if(Io.has(n))return Io.get(n);for(;cl.has(Wo);)Wo++;var a=Wo++;return Io.set(n,a),cl.set(a,n),a},LS=function(n,a){Wo=a+1,Io.set(n,a),cl.set(a,n)},HS="style[".concat(Oa,"][").concat(S1,'="').concat(Sl,'"]'),US=new RegExp("^".concat(Oa,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),FS=function(n,a,r){for(var o,c=r.split(","),f=0,d=c.length;f<d;f++)(o=c[f])&&n.registerName(a,o)},GS=function(n,a){for(var r,o=((r=a.textContent)!==null&&r!==void 0?r:"").split(rd),c=[],f=0,d=o.length;f<d;f++){var m=o[f].trim();if(m){var p=m.match(US);if(p){var g=0|parseInt(p[1],10),v=p[2];g!==0&&(LS(v,g),FS(n,v,p[3]),n.getTag().insertRules(g,c)),c.length=0}else c.push(m)}}},ng=function(n){for(var a=document.querySelectorAll(HS),r=0,o=a.length;r<o;r++){var c=a[r];c&&c.getAttribute(Oa)!==x1&&(GS(n,c),c.parentNode&&c.parentNode.removeChild(c))}};function YS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var R1=function(n){var a=document.head,r=n||a,o=document.createElement("style"),c=function(m){var p=Array.from(m.querySelectorAll("style[".concat(Oa,"]")));return p[p.length-1]}(r),f=c!==void 0?c.nextSibling:null;o.setAttribute(Oa,x1),o.setAttribute(S1,Sl);var d=YS();return d&&o.setAttribute("nonce",d),r.insertBefore(o,f),o},qS=function(){function n(a){this.element=R1(a),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var o=document.styleSheets,c=0,f=o.length;c<f;c++){var d=o[c];if(d.ownerNode===r)return d}throw Ni(17)}(this.element),this.length=0}return n.prototype.insertRule=function(a,r){try{return this.sheet.insertRule(r,a),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},n.prototype.getRule=function(a){var r=this.sheet.cssRules[a];return r&&r.cssText?r.cssText:""},n}(),PS=function(){function n(a){this.element=R1(a),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(a,r){if(a<=this.length&&a>=0){var o=document.createTextNode(r);return this.element.insertBefore(o,this.nodes[a]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},n.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},n}(),XS=function(){function n(a){this.rules=[],this.length=0}return n.prototype.insertRule=function(a,r){return a<=this.length&&(this.rules.splice(a,0,r),this.length++,!0)},n.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},n.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},n}(),ig=ol,$S={isServer:!ol,useCSSOMInjection:!AS},ul=function(){function n(a,r,o){a===void 0&&(a=Ba),r===void 0&&(r={});var c=this;this.options=ae(ae({},$S),a),this.gs=r,this.names=new Map(o),this.server=!!a.isServer,!this.server&&ol&&ig&&(ig=!1,ng(this)),cd(this,function(){return function(f){for(var d=f.getTag(),m=d.length,p="",g=function(S){var b=function(F){return cl.get(F)}(S);if(b===void 0)return"continue";var T=f.names.get(b),M=d.getGroup(S);if(T===void 0||!T.size||M.length===0)return"continue";var B="".concat(Oa,".g").concat(S,'[id="').concat(b,'"]'),U="";T!==void 0&&T.forEach(function(F){F.length>0&&(U+="".concat(F,","))}),p+="".concat(M).concat(B,'{content:"').concat(U,'"}').concat(rd)},v=0;v<m;v++)g(v);return p}(c)})}return n.registerId=function(a){return Vo(a)},n.prototype.rehydrate=function(){!this.server&&ol&&ng(this)},n.prototype.reconstructWithOptions=function(a,r){return r===void 0&&(r=!0),new n(ae(ae({},this.options),a),this.gs,r&&this.names||void 0)},n.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(a=function(r){var o=r.useCSSOMInjection,c=r.target;return r.isServer?new XS(c):o?new qS(c):new PS(c)}(this.options),new NS(a)));var a},n.prototype.hasNameForId=function(a,r){return this.names.has(a)&&this.names.get(a).has(r)},n.prototype.registerName=function(a,r){if(Vo(a),this.names.has(a))this.names.get(a).add(r);else{var o=new Set;o.add(r),this.names.set(a,o)}},n.prototype.insertRules=function(a,r,o){this.registerName(a,r),this.getTag().insertRules(Vo(a),o)},n.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},n.prototype.clearRules=function(a){this.getTag().clearGroup(Vo(a)),this.clearNames(a)},n.prototype.clearTag=function(){this.tag=void 0},n}(),QS=/&/g,KS=/^\s*\/\/.*$/gm;function _1(n,a){return n.map(function(r){return r.type==="rule"&&(r.value="".concat(a," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(a," ")),r.props=r.props.map(function(o){return"".concat(a," ").concat(o)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=_1(r.children,a)),r})}function ZS(n){var a,r,o,c=Ba,f=c.options,d=f===void 0?Ba:f,m=c.plugins,p=m===void 0?wl:m,g=function(b,T,M){return M.startsWith(r)&&M.endsWith(r)&&M.replaceAll(r,"").length>0?".".concat(a):b},v=p.slice();v.push(function(b){b.type===yl&&b.value.includes("&")&&(b.props[0]=b.props[0].replace(QS,r).replace(o,g))}),d.prefix&&v.push(SS),v.push(vS);var S=function(b,T,M,B){T===void 0&&(T=""),M===void 0&&(M=""),B===void 0&&(B="&"),a=B,r=T,o=new RegExp("\\".concat(r,"\\b"),"g");var U=b.replace(KS,""),F=gS(M||T?"".concat(M," ").concat(T," { ").concat(U," }"):U);d.namespace&&(F=_1(F,d.namespace));var P=[];return rl(F,bS(v.concat(xS(function(L){return P.push(L)})))),P};return S.hash=p.length?p.reduce(function(b,T){return T.name||Ni(15),Ta(b,T.name)},T1).toString():"",S}var IS=new ul,_f=ZS(),z1=Je.createContext({shouldForwardProp:void 0,styleSheet:IS,stylis:_f});z1.Consumer;Je.createContext(void 0);function zf(){return O.useContext(z1)}var k1=function(){function n(a,r){var o=this;this.inject=function(c,f){f===void 0&&(f=_f);var d=o.name+f.hash;c.hasNameForId(o.id,d)||c.insertRules(o.id,d,f(o.rules,d,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=r,cd(this,function(){throw Ni(12,String(o.name))})}return n.prototype.getName=function(a){return a===void 0&&(a=_f),this.name+a.hash},n}(),WS=function(n){return n>="A"&&n<="Z"};function ag(n){for(var a="",r=0;r<n.length;r++){var o=n[r];if(r===1&&o==="-"&&n[0]==="-")return n;WS(o)?a+="-"+o.toLowerCase():a+=o}return a.startsWith("ms-")?"-"+a:a}var O1=function(n){return n==null||n===!1||n===""},B1=function(n){var a,r,o=[];for(var c in n){var f=n[c];n.hasOwnProperty(c)&&!O1(f)&&(Array.isArray(f)&&f.isCss||Vi(f)?o.push("".concat(ag(c),":"),f,";"):sr(f)?o.push.apply(o,_a(_a(["".concat(c," {")],B1(f),!1),["}"],!1)):o.push("".concat(ag(c),": ").concat((a=c,(r=f)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||a in wS||a.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return o};function ri(n,a,r,o){if(O1(n))return[];if(ld(n))return[".".concat(n.styledComponentId)];if(Vi(n)){if(!Vi(f=n)||f.prototype&&f.prototype.isReactComponent||!a)return[n];var c=n(a);return ri(c,a,r,o)}var f;return n instanceof k1?r?(n.inject(r,o),[n.getName(o)]):[n]:sr(n)?B1(n):Array.isArray(n)?Array.prototype.concat.apply(wl,n.map(function(d){return ri(d,a,r,o)})):[n.toString()]}function V1(n){for(var a=0;a<n.length;a+=1){var r=n[a];if(Vi(r)&&!ld(r))return!1}return!0}var JS=E1(Sl),t5=function(){function n(a,r,o){this.rules=a,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&V1(a),this.componentId=r,this.baseHash=Ta(JS,r),this.baseStyle=o,ul.registerId(r)}return n.prototype.generateAndInjectStyles=function(a,r,o){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,r,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))c=Ri(c,this.staticRulesId);else{var f=ll(ri(this.rules,a,r,o)),d=Cf(Ta(this.baseHash,f)>>>0);if(!r.hasNameForId(this.componentId,d)){var m=o(f,".".concat(d),void 0,this.componentId);r.insertRules(this.componentId,d,m)}c=Ri(c,d),this.staticRulesId=d}else{for(var p=Ta(this.baseHash,o.hash),g="",v=0;v<this.rules.length;v++){var S=this.rules[v];if(typeof S=="string")g+=S;else if(S){var b=ll(ri(S,a,r,o));p=Ta(p,b+v),g+=b}}if(g){var T=Cf(p>>>0);r.hasNameForId(this.componentId,T)||r.insertRules(this.componentId,T,o(g,".".concat(T),void 0,this.componentId)),c=Ri(c,T)}}return c},n}(),rr=Je.createContext(void 0);rr.Consumer;function e5(n){var a=Je.useContext(rr),r=O.useMemo(function(){return function(o,c){if(!o)throw Ni(14);if(Vi(o)){var f=o(c);return f}if(Array.isArray(o)||typeof o!="object")throw Ni(8);return c?ae(ae({},c),o):o}(n.theme,a)},[n.theme,a]);return n.children?Je.createElement(rr.Provider,{value:r},n.children):null}var Iu={};function n5(n,a,r){var o=ld(n),c=n,f=!Zu(n),d=a.attrs,m=d===void 0?wl:d,p=a.componentId,g=p===void 0?function(Z,G){var $=typeof Z!="string"?"sc":I0(Z);Iu[$]=(Iu[$]||0)+1;var _="".concat($,"-").concat(od(Sl+$+Iu[$]));return G?"".concat(G,"-").concat(_):_}(a.displayName,a.parentComponentId):p,v=a.displayName,S=v===void 0?function(Z){return Zu(Z)?"styled.".concat(Z):"Styled(".concat(MS(Z),")")}(n):v,b=a.displayName&&a.componentId?"".concat(I0(a.displayName),"-").concat(a.componentId):a.componentId||g,T=o&&c.attrs?c.attrs.concat(m).filter(Boolean):m,M=a.shouldForwardProp;if(o&&c.shouldForwardProp){var B=c.shouldForwardProp;if(a.shouldForwardProp){var U=a.shouldForwardProp;M=function(Z,G){return B(Z,G)&&U(Z,G)}}else M=B}var F=new t5(r,b,o?c.componentStyle:void 0);function P(Z,G){return function($,_,X){var K=$.attrs,ct=$.componentStyle,Vt=$.defaultProps,Ut=$.foldedComponentIds,$e=$.styledComponentId,ze=$.target,Qt=Je.useContext(rr),V=zf(),Q=$.shouldForwardProp||V.shouldForwardProp,et=w1(_,Qt,Vt)||Ba,ut=function(mt,st,It){for(var St,ce=ae(ae({},st),{className:void 0,theme:It}),ci=0;ci<mt.length;ci+=1){var mn=Vi(St=mt[ci])?St(ce):St;for(var ke in mn)ce[ke]=ke==="className"?Ri(ce[ke],mn[ke]):ke==="style"?ae(ae({},ce[ke]),mn[ke]):mn[ke]}return st.className&&(ce.className=Ri(ce.className,st.className)),ce}(K,_,et),E=ut.as||ze,q={};for(var I in ut)ut[I]===void 0||I[0]==="$"||I==="as"||I==="theme"&&ut.theme===et||(I==="forwardedAs"?q.as=ut.forwardedAs:Q&&!Q(I,E)||(q[I]=ut[I]));var W=function(mt,st){var It=zf(),St=mt.generateAndInjectStyles(st,It.styleSheet,It.stylis);return St}(ct,ut),it=Ri(Ut,$e);return W&&(it+=" "+W),ut.className&&(it+=" "+ut.className),q[Zu(E)&&!A1.has(E)?"class":"className"]=it,X&&(q.ref=X),O.createElement(E,q)}(L,Z,G)}P.displayName=S;var L=Je.forwardRef(P);return L.attrs=T,L.componentStyle=F,L.displayName=S,L.shouldForwardProp=M,L.foldedComponentIds=o?Ri(c.foldedComponentIds,c.styledComponentId):"",L.styledComponentId=b,L.target=o?c.target:n,Object.defineProperty(L,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Z){this._foldedDefaultProps=o?function(G){for(var $=[],_=1;_<arguments.length;_++)$[_-1]=arguments[_];for(var X=0,K=$;X<K.length;X++)Rf(G,K[X],!0);return G}({},c.defaultProps,Z):Z}}),cd(L,function(){return".".concat(L.styledComponentId)}),f&&C1(L,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),L}function sg(n,a){for(var r=[n[0]],o=0,c=a.length;o<c;o+=1)r.push(a[o],n[o+1]);return r}var rg=function(n){return Object.assign(n,{isCss:!0})};function ud(n){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];if(Vi(n)||sr(n))return rg(ri(sg(wl,_a([n],a,!0))));var o=n;return a.length===0&&o.length===1&&typeof o[0]=="string"?ri(o):rg(ri(sg(o,a)))}function kf(n,a,r){if(r===void 0&&(r=Ba),!a)throw Ni(1,a);var o=function(c){for(var f=[],d=1;d<arguments.length;d++)f[d-1]=arguments[d];return n(a,r,ud.apply(void 0,_a([c],f,!1)))};return o.attrs=function(c){return kf(n,a,ae(ae({},r),{attrs:Array.prototype.concat(r.attrs,c).filter(Boolean)}))},o.withConfig=function(c){return kf(n,a,ae(ae({},r),c))},o}var N1=function(n){return kf(n5,n)},w=N1;A1.forEach(function(n){w[n]=N1(n)});var i5=function(){function n(a,r){this.rules=a,this.componentId=r,this.isStatic=V1(a),ul.registerId(this.componentId+1)}return n.prototype.createStyles=function(a,r,o,c){var f=c(ll(ri(this.rules,r,o,c)),""),d=this.componentId+a;o.insertRules(d,d,f)},n.prototype.removeStyles=function(a,r){r.clearRules(this.componentId+a)},n.prototype.renderStyles=function(a,r,o,c){a>2&&ul.registerId(this.componentId+a),this.removeStyles(a,o),this.createStyles(a,r,o,c)},n}();function a5(n){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];var o=ud.apply(void 0,_a([n],a,!1)),c="sc-global-".concat(od(JSON.stringify(o))),f=new i5(o,c),d=function(p){var g=zf(),v=Je.useContext(rr),S=Je.useRef(g.styleSheet.allocateGSInstance(c)).current;return g.styleSheet.server&&m(S,p,g.styleSheet,v,g.stylis),Je.useLayoutEffect(function(){if(!g.styleSheet.server)return m(S,p,g.styleSheet,v,g.stylis),function(){return f.removeStyles(S,g.styleSheet)}},[S,p,g.styleSheet,v,g.stylis]),null};function m(p,g,v,S,b){if(f.isStatic)f.renderStyles(p,TS,v,b);else{var T=ae(ae({},g),{theme:w1(g,S,d.defaultProps)});f.renderStyles(p,T,v,b)}}return Je.memo(d)}function Ua(n){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];var o=ll(ud.apply(void 0,_a([n],a,!1))),c=od(o);return new k1(c,o)}const fd=O.createContext({});function Fa(n){const a=O.useRef(null);return a.current===null&&(a.current=n()),a.current}const dd=typeof window<"u",Al=dd?O.useLayoutEffect:O.useEffect,Tl=O.createContext(null);function hd(n,a){n.indexOf(a)===-1&&n.push(a)}function pd(n,a){const r=n.indexOf(a);r>-1&&n.splice(r,1)}const pn=(n,a,r)=>r>a?a:r<n?n:r;let or=()=>{};const zn={},L1=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function H1(n){return typeof n=="object"&&n!==null}const U1=n=>/^0[^.\s]+$/u.test(n);function md(n){let a;return()=>(a===void 0&&(a=n()),a)}const Se=n=>n,s5=(n,a)=>r=>a(n(r)),mr=(...n)=>n.reduce(s5),Va=(n,a,r)=>{const o=a-n;return o===0?1:(r-n)/o};class gd{constructor(){this.subscriptions=[]}add(a){return hd(this.subscriptions,a),()=>pd(this.subscriptions,a)}notify(a,r,o){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](a,r,o);else for(let f=0;f<c;f++){const d=this.subscriptions[f];d&&d(a,r,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const fn=n=>n*1e3,dn=n=>n/1e3;function yd(n,a){return a?n*(1e3/a):0}const F1=(n,a,r)=>(((1-3*r+3*a)*n+(3*r-6*a))*n+3*a)*n,r5=1e-7,o5=12;function l5(n,a,r,o,c){let f,d,m=0;do d=a+(r-a)/2,f=F1(d,o,c)-n,f>0?r=d:a=d;while(Math.abs(f)>r5&&++m<o5);return d}function gr(n,a,r,o){if(n===a&&r===o)return Se;const c=f=>l5(f,0,1,n,r);return f=>f===0||f===1?f:F1(c(f),a,o)}const G1=n=>a=>a<=.5?n(2*a)/2:(2-n(2*(1-a)))/2,Y1=n=>a=>1-n(1-a),q1=gr(.33,1.53,.69,.99),vd=Y1(q1),P1=G1(vd),X1=n=>(n*=2)<1?.5*vd(n):.5*(2-Math.pow(2,-10*(n-1))),bd=n=>1-Math.sin(Math.acos(n)),$1=Y1(bd),Q1=G1(bd),c5=gr(.42,0,1,1),u5=gr(0,0,.58,1),K1=gr(.42,0,.58,1),f5=n=>Array.isArray(n)&&typeof n[0]!="number",Z1=n=>Array.isArray(n)&&typeof n[0]=="number",d5={linear:Se,easeIn:c5,easeInOut:K1,easeOut:u5,circIn:bd,circInOut:Q1,circOut:$1,backIn:vd,backInOut:P1,backOut:q1,anticipate:X1},h5=n=>typeof n=="string",og=n=>{if(Z1(n)){or(n.length===4);const[a,r,o,c]=n;return gr(a,r,o,c)}else if(h5(n))return d5[n];return n},No=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function p5(n,a){let r=new Set,o=new Set,c=!1,f=!1;const d=new WeakSet;let m={delta:0,timestamp:0,isProcessing:!1};function p(v){d.has(v)&&(g.schedule(v),n()),v(m)}const g={schedule:(v,S=!1,b=!1)=>{const M=b&&c?r:o;return S&&d.add(v),M.has(v)||M.add(v),v},cancel:v=>{o.delete(v),d.delete(v)},process:v=>{if(m=v,c){f=!0;return}c=!0,[r,o]=[o,r],r.forEach(p),r.clear(),c=!1,f&&(f=!1,g.process(v))}};return g}const m5=40;function I1(n,a){let r=!1,o=!0;const c={delta:0,timestamp:0,isProcessing:!1},f=()=>r=!0,d=No.reduce((L,Z)=>(L[Z]=p5(f),L),{}),{setup:m,read:p,resolveKeyframes:g,preUpdate:v,update:S,preRender:b,render:T,postRender:M}=d,B=()=>{const L=zn.useManualTiming?c.timestamp:performance.now();r=!1,zn.useManualTiming||(c.delta=o?1e3/60:Math.max(Math.min(L-c.timestamp,m5),1)),c.timestamp=L,c.isProcessing=!0,m.process(c),p.process(c),g.process(c),v.process(c),S.process(c),b.process(c),T.process(c),M.process(c),c.isProcessing=!1,r&&a&&(o=!1,n(B))},U=()=>{r=!0,o=!0,c.isProcessing||n(B)};return{schedule:No.reduce((L,Z)=>{const G=d[Z];return L[Z]=($,_=!1,X=!1)=>(r||U(),G.schedule($,_,X)),L},{}),cancel:L=>{for(let Z=0;Z<No.length;Z++)d[No[Z]].cancel(L)},state:c,steps:d}}const{schedule:At,cancel:nn,state:ne,steps:Wu}=I1(typeof requestAnimationFrame<"u"?requestAnimationFrame:Se,!0);let Jo;function g5(){Jo=void 0}const xe={now:()=>(Jo===void 0&&xe.set(ne.isProcessing||zn.useManualTiming?ne.timestamp:performance.now()),Jo),set:n=>{Jo=n,queueMicrotask(g5)}},W1=n=>a=>typeof a=="string"&&a.startsWith(n),xd=W1("--"),y5=W1("var(--"),Sd=n=>y5(n)?v5.test(n.split("/*")[0].trim()):!1,v5=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Ga={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},lr={...Ga,transform:n=>pn(0,1,n)},Lo={...Ga,default:1},Js=n=>Math.round(n*1e5)/1e5,wd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function b5(n){return n==null}const x5=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ad=(n,a)=>r=>!!(typeof r=="string"&&x5.test(r)&&r.startsWith(n)||a&&!b5(r)&&Object.prototype.hasOwnProperty.call(r,a)),J1=(n,a,r)=>o=>{if(typeof o!="string")return o;const[c,f,d,m]=o.match(wd);return{[n]:parseFloat(c),[a]:parseFloat(f),[r]:parseFloat(d),alpha:m!==void 0?parseFloat(m):1}},S5=n=>pn(0,255,n),Ju={...Ga,transform:n=>Math.round(S5(n))},_i={test:Ad("rgb","red"),parse:J1("red","green","blue"),transform:({red:n,green:a,blue:r,alpha:o=1})=>"rgba("+Ju.transform(n)+", "+Ju.transform(a)+", "+Ju.transform(r)+", "+Js(lr.transform(o))+")"};function w5(n){let a="",r="",o="",c="";return n.length>5?(a=n.substring(1,3),r=n.substring(3,5),o=n.substring(5,7),c=n.substring(7,9)):(a=n.substring(1,2),r=n.substring(2,3),o=n.substring(3,4),c=n.substring(4,5),a+=a,r+=r,o+=o,c+=c),{red:parseInt(a,16),green:parseInt(r,16),blue:parseInt(o,16),alpha:c?parseInt(c,16)/255:1}}const Of={test:Ad("#"),parse:w5,transform:_i.transform},yr=n=>({test:a=>typeof a=="string"&&a.endsWith(n)&&a.split(" ").length===1,parse:parseFloat,transform:a=>`${a}${n}`}),si=yr("deg"),hn=yr("%"),lt=yr("px"),A5=yr("vh"),T5=yr("vw"),lg={...hn,parse:n=>hn.parse(n)/100,transform:n=>hn.transform(n*100)},Ea={test:Ad("hsl","hue"),parse:J1("hue","saturation","lightness"),transform:({hue:n,saturation:a,lightness:r,alpha:o=1})=>"hsla("+Math.round(n)+", "+hn.transform(Js(a))+", "+hn.transform(Js(r))+", "+Js(lr.transform(o))+")"},Xt={test:n=>_i.test(n)||Of.test(n)||Ea.test(n),parse:n=>_i.test(n)?_i.parse(n):Ea.test(n)?Ea.parse(n):Of.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?_i.transform(n):Ea.transform(n),getAnimatableNone:n=>{const a=Xt.parse(n);return a.alpha=0,Xt.transform(a)}},E5=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function j5(n){return isNaN(n)&&typeof n=="string"&&(n.match(wd)?.length||0)+(n.match(E5)?.length||0)>0}const tv="number",ev="color",D5="var",M5="var(",cg="${}",C5=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function cr(n){const a=n.toString(),r=[],o={color:[],number:[],var:[]},c=[];let f=0;const m=a.replace(C5,p=>(Xt.test(p)?(o.color.push(f),c.push(ev),r.push(Xt.parse(p))):p.startsWith(M5)?(o.var.push(f),c.push(D5),r.push(p)):(o.number.push(f),c.push(tv),r.push(parseFloat(p))),++f,cg)).split(cg);return{values:r,split:m,indexes:o,types:c}}function nv(n){return cr(n).values}function iv(n){const{split:a,types:r}=cr(n),o=a.length;return c=>{let f="";for(let d=0;d<o;d++)if(f+=a[d],c[d]!==void 0){const m=r[d];m===tv?f+=Js(c[d]):m===ev?f+=Xt.transform(c[d]):f+=c[d]}return f}}const R5=n=>typeof n=="number"?0:Xt.test(n)?Xt.getAnimatableNone(n):n;function _5(n){const a=nv(n);return iv(n)(a.map(R5))}const oi={test:j5,parse:nv,createTransformer:iv,getAnimatableNone:_5};function tf(n,a,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?n+(a-n)*6*r:r<1/2?a:r<2/3?n+(a-n)*(2/3-r)*6:n}function z5({hue:n,saturation:a,lightness:r,alpha:o}){n/=360,a/=100,r/=100;let c=0,f=0,d=0;if(!a)c=f=d=r;else{const m=r<.5?r*(1+a):r+a-r*a,p=2*r-m;c=tf(p,m,n+1/3),f=tf(p,m,n),d=tf(p,m,n-1/3)}return{red:Math.round(c*255),green:Math.round(f*255),blue:Math.round(d*255),alpha:o}}function fl(n,a){return r=>r>0?a:n}const Bt=(n,a,r)=>n+(a-n)*r,ef=(n,a,r)=>{const o=n*n,c=r*(a*a-o)+o;return c<0?0:Math.sqrt(c)},k5=[Of,_i,Ea],O5=n=>k5.find(a=>a.test(n));function ug(n){const a=O5(n);if(!a)return!1;let r=a.parse(n);return a===Ea&&(r=z5(r)),r}const fg=(n,a)=>{const r=ug(n),o=ug(a);if(!r||!o)return fl(n,a);const c={...r};return f=>(c.red=ef(r.red,o.red,f),c.green=ef(r.green,o.green,f),c.blue=ef(r.blue,o.blue,f),c.alpha=Bt(r.alpha,o.alpha,f),_i.transform(c))},Bf=new Set(["none","hidden"]);function B5(n,a){return Bf.has(n)?r=>r<=0?n:a:r=>r>=1?a:n}function V5(n,a){return r=>Bt(n,a,r)}function Td(n){return typeof n=="number"?V5:typeof n=="string"?Sd(n)?fl:Xt.test(n)?fg:H5:Array.isArray(n)?av:typeof n=="object"?Xt.test(n)?fg:N5:fl}function av(n,a){const r=[...n],o=r.length,c=n.map((f,d)=>Td(f)(f,a[d]));return f=>{for(let d=0;d<o;d++)r[d]=c[d](f);return r}}function N5(n,a){const r={...n,...a},o={};for(const c in r)n[c]!==void 0&&a[c]!==void 0&&(o[c]=Td(n[c])(n[c],a[c]));return c=>{for(const f in o)r[f]=o[f](c);return r}}function L5(n,a){const r=[],o={color:0,var:0,number:0};for(let c=0;c<a.values.length;c++){const f=a.types[c],d=n.indexes[f][o[f]],m=n.values[d]??0;r[c]=m,o[f]++}return r}const H5=(n,a)=>{const r=oi.createTransformer(a),o=cr(n),c=cr(a);return o.indexes.var.length===c.indexes.var.length&&o.indexes.color.length===c.indexes.color.length&&o.indexes.number.length>=c.indexes.number.length?Bf.has(n)&&!c.values.length||Bf.has(a)&&!o.values.length?B5(n,a):mr(av(L5(o,c),c.values),r):fl(n,a)};function sv(n,a,r){return typeof n=="number"&&typeof a=="number"&&typeof r=="number"?Bt(n,a,r):Td(n)(n,a)}const U5=n=>{const a=({timestamp:r})=>n(r);return{start:(r=!0)=>At.update(a,r),stop:()=>nn(a),now:()=>ne.isProcessing?ne.timestamp:xe.now()}},rv=(n,a,r=10)=>{let o="";const c=Math.max(Math.round(a/r),2);for(let f=0;f<c;f++)o+=Math.round(n(f/(c-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`},dl=2e4;function Ed(n){let a=0;const r=50;let o=n.next(a);for(;!o.done&&a<dl;)a+=r,o=n.next(a);return a>=dl?1/0:a}function F5(n,a=100,r){const o=r({...n,keyframes:[0,a]}),c=Math.min(Ed(o),dl);return{type:"keyframes",ease:f=>o.next(c*f).value/a,duration:dn(c)}}const G5=5;function ov(n,a,r){const o=Math.max(a-G5,0);return yd(r-n(o),a-o)}const Ht={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},nf=.001;function Y5({duration:n=Ht.duration,bounce:a=Ht.bounce,velocity:r=Ht.velocity,mass:o=Ht.mass}){let c,f,d=1-a;d=pn(Ht.minDamping,Ht.maxDamping,d),n=pn(Ht.minDuration,Ht.maxDuration,dn(n)),d<1?(c=g=>{const v=g*d,S=v*n,b=v-r,T=Vf(g,d),M=Math.exp(-S);return nf-b/T*M},f=g=>{const S=g*d*n,b=S*r+r,T=Math.pow(d,2)*Math.pow(g,2)*n,M=Math.exp(-S),B=Vf(Math.pow(g,2),d);return(-c(g)+nf>0?-1:1)*((b-T)*M)/B}):(c=g=>{const v=Math.exp(-g*n),S=(g-r)*n+1;return-nf+v*S},f=g=>{const v=Math.exp(-g*n),S=(r-g)*(n*n);return v*S});const m=5/n,p=P5(c,f,m);if(n=fn(n),isNaN(p))return{stiffness:Ht.stiffness,damping:Ht.damping,duration:n};{const g=Math.pow(p,2)*o;return{stiffness:g,damping:d*2*Math.sqrt(o*g),duration:n}}}const q5=12;function P5(n,a,r){let o=r;for(let c=1;c<q5;c++)o=o-n(o)/a(o);return o}function Vf(n,a){return n*Math.sqrt(1-a*a)}const X5=["duration","bounce"],$5=["stiffness","damping","mass"];function dg(n,a){return a.some(r=>n[r]!==void 0)}function Q5(n){let a={velocity:Ht.velocity,stiffness:Ht.stiffness,damping:Ht.damping,mass:Ht.mass,isResolvedFromDuration:!1,...n};if(!dg(n,$5)&&dg(n,X5))if(n.visualDuration){const r=n.visualDuration,o=2*Math.PI/(r*1.2),c=o*o,f=2*pn(.05,1,1-(n.bounce||0))*Math.sqrt(c);a={...a,mass:Ht.mass,stiffness:c,damping:f}}else{const r=Y5(n);a={...a,...r,mass:Ht.mass},a.isResolvedFromDuration=!0}return a}function hl(n=Ht.visualDuration,a=Ht.bounce){const r=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:a}:n;let{restSpeed:o,restDelta:c}=r;const f=r.keyframes[0],d=r.keyframes[r.keyframes.length-1],m={done:!1,value:f},{stiffness:p,damping:g,mass:v,duration:S,velocity:b,isResolvedFromDuration:T}=Q5({...r,velocity:-dn(r.velocity||0)}),M=b||0,B=g/(2*Math.sqrt(p*v)),U=d-f,F=dn(Math.sqrt(p/v)),P=Math.abs(U)<5;o||(o=P?Ht.restSpeed.granular:Ht.restSpeed.default),c||(c=P?Ht.restDelta.granular:Ht.restDelta.default);let L;if(B<1){const G=Vf(F,B);L=$=>{const _=Math.exp(-B*F*$);return d-_*((M+B*F*U)/G*Math.sin(G*$)+U*Math.cos(G*$))}}else if(B===1)L=G=>d-Math.exp(-F*G)*(U+(M+F*U)*G);else{const G=F*Math.sqrt(B*B-1);L=$=>{const _=Math.exp(-B*F*$),X=Math.min(G*$,300);return d-_*((M+B*F*U)*Math.sinh(X)+G*U*Math.cosh(X))/G}}const Z={calculatedDuration:T&&S||null,next:G=>{const $=L(G);if(T)m.done=G>=S;else{let _=G===0?M:0;B<1&&(_=G===0?fn(M):ov(L,G,$));const X=Math.abs(_)<=o,K=Math.abs(d-$)<=c;m.done=X&&K}return m.value=m.done?d:$,m},toString:()=>{const G=Math.min(Ed(Z),dl),$=rv(_=>Z.next(G*_).value,G,30);return G+"ms "+$},toTransition:()=>{}};return Z}hl.applyToOptions=n=>{const a=F5(n,100,hl);return n.ease=a.ease,n.duration=fn(a.duration),n.type="keyframes",n};function Nf({keyframes:n,velocity:a=0,power:r=.8,timeConstant:o=325,bounceDamping:c=10,bounceStiffness:f=500,modifyTarget:d,min:m,max:p,restDelta:g=.5,restSpeed:v}){const S=n[0],b={done:!1,value:S},T=X=>m!==void 0&&X<m||p!==void 0&&X>p,M=X=>m===void 0?p:p===void 0||Math.abs(m-X)<Math.abs(p-X)?m:p;let B=r*a;const U=S+B,F=d===void 0?U:d(U);F!==U&&(B=F-S);const P=X=>-B*Math.exp(-X/o),L=X=>F+P(X),Z=X=>{const K=P(X),ct=L(X);b.done=Math.abs(K)<=g,b.value=b.done?F:ct};let G,$;const _=X=>{T(b.value)&&(G=X,$=hl({keyframes:[b.value,M(b.value)],velocity:ov(L,X,b.value),damping:c,stiffness:f,restDelta:g,restSpeed:v}))};return _(0),{calculatedDuration:null,next:X=>{let K=!1;return!$&&G===void 0&&(K=!0,Z(X),_(X)),G!==void 0&&X>=G?$.next(X-G):(!K&&Z(X),b)}}}function K5(n,a,r){const o=[],c=r||zn.mix||sv,f=n.length-1;for(let d=0;d<f;d++){let m=c(n[d],n[d+1]);if(a){const p=Array.isArray(a)?a[d]||Se:a;m=mr(p,m)}o.push(m)}return o}function jd(n,a,{clamp:r=!0,ease:o,mixer:c}={}){const f=n.length;if(or(f===a.length),f===1)return()=>a[0];if(f===2&&a[0]===a[1])return()=>a[1];const d=n[0]===n[1];n[0]>n[f-1]&&(n=[...n].reverse(),a=[...a].reverse());const m=K5(a,o,c),p=m.length,g=v=>{if(d&&v<n[0])return a[0];let S=0;if(p>1)for(;S<n.length-2&&!(v<n[S+1]);S++);const b=Va(n[S],n[S+1],v);return m[S](b)};return r?v=>g(pn(n[0],n[f-1],v)):g}function Z5(n,a){const r=n[n.length-1];for(let o=1;o<=a;o++){const c=Va(0,a,o);n.push(Bt(r,1,c))}}function lv(n){const a=[0];return Z5(a,n.length-1),a}function I5(n,a){return n.map(r=>r*a)}function W5(n,a){return n.map(()=>a||K1).splice(0,n.length-1)}function tr({duration:n=300,keyframes:a,times:r,ease:o="easeInOut"}){const c=f5(o)?o.map(og):og(o),f={done:!1,value:a[0]},d=I5(r&&r.length===a.length?r:lv(a),n),m=jd(d,a,{ease:Array.isArray(c)?c:W5(a,c)});return{calculatedDuration:n,next:p=>(f.value=m(p),f.done=p>=n,f)}}const J5=n=>n!==null;function Dd(n,{repeat:a,repeatType:r="loop"},o,c=1){const f=n.filter(J5),m=c<0||a&&r!=="loop"&&a%2===1?0:f.length-1;return!m||o===void 0?f[m]:o}const tw={decay:Nf,inertia:Nf,tween:tr,keyframes:tr,spring:hl};function cv(n){typeof n.type=="string"&&(n.type=tw[n.type])}class Md{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(a=>{this.resolve=a})}notifyFinished(){this.resolve()}then(a,r){return this.finished.then(a,r)}}const ew=n=>n/100;class El extends Md{constructor(a){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:r}=this.options;r&&r.updatedAt!==xe.now()&&this.tick(xe.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=a,this.initAnimation(),this.play(),a.autoplay===!1&&this.pause()}initAnimation(){const{options:a}=this;cv(a);const{type:r=tr,repeat:o=0,repeatDelay:c=0,repeatType:f,velocity:d=0}=a;let{keyframes:m}=a;const p=r||tr;p!==tr&&typeof m[0]!="number"&&(this.mixKeyframes=mr(ew,sv(m[0],m[1])),m=[0,100]);const g=p({...a,keyframes:m});f==="mirror"&&(this.mirroredGenerator=p({...a,keyframes:[...m].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=Ed(g));const{calculatedDuration:v}=g;this.calculatedDuration=v,this.resolvedDuration=v+c,this.totalDuration=this.resolvedDuration*(o+1)-c,this.generator=g}updateTime(a){const r=Math.round(a-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=r}tick(a,r=!1){const{generator:o,totalDuration:c,mixKeyframes:f,mirroredGenerator:d,resolvedDuration:m,calculatedDuration:p}=this;if(this.startTime===null)return o.next(0);const{delay:g=0,keyframes:v,repeat:S,repeatType:b,repeatDelay:T,type:M,onUpdate:B,finalKeyframe:U}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,a):this.speed<0&&(this.startTime=Math.min(a-c/this.speed,this.startTime)),r?this.currentTime=a:this.updateTime(a);const F=this.currentTime-g*(this.playbackSpeed>=0?1:-1),P=this.playbackSpeed>=0?F<0:F>c;this.currentTime=Math.max(F,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let L=this.currentTime,Z=o;if(S){const X=Math.min(this.currentTime,c)/m;let K=Math.floor(X),ct=X%1;!ct&&X>=1&&(ct=1),ct===1&&K--,K=Math.min(K,S+1),!!(K%2)&&(b==="reverse"?(ct=1-ct,T&&(ct-=T/m)):b==="mirror"&&(Z=d)),L=pn(0,1,ct)*m}const G=P?{done:!1,value:v[0]}:Z.next(L);f&&(G.value=f(G.value));let{done:$}=G;!P&&p!==null&&($=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const _=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&$);return _&&M!==Nf&&(G.value=Dd(v,this.options,U,this.speed)),B&&B(G.value),_&&this.finish(),G}then(a,r){return this.finished.then(a,r)}get duration(){return dn(this.calculatedDuration)}get time(){return dn(this.currentTime)}set time(a){a=fn(a),this.currentTime=a,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=a:this.driver&&(this.startTime=this.driver.now()-a/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(a){this.updateTime(xe.now());const r=this.playbackSpeed!==a;this.playbackSpeed=a,r&&(this.time=dn(this.currentTime))}play(){if(this.isStopped)return;const{driver:a=U5,startTime:r}=this.options;this.driver||(this.driver=a(c=>this.tick(c))),this.options.onPlay?.();const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=r??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(xe.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(a){return this.startTime=0,this.tick(a,!0)}attachTimeline(a){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),a.observe(this)}}function nw(n){for(let a=1;a<n.length;a++)n[a]??(n[a]=n[a-1])}const zi=n=>n*180/Math.PI,Lf=n=>{const a=zi(Math.atan2(n[1],n[0]));return Hf(a)},iw={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Lf,rotateZ:Lf,skewX:n=>zi(Math.atan(n[1])),skewY:n=>zi(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Hf=n=>(n=n%360,n<0&&(n+=360),n),hg=Lf,pg=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),mg=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),aw={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:pg,scaleY:mg,scale:n=>(pg(n)+mg(n))/2,rotateX:n=>Hf(zi(Math.atan2(n[6],n[5]))),rotateY:n=>Hf(zi(Math.atan2(-n[2],n[0]))),rotateZ:hg,rotate:hg,skewX:n=>zi(Math.atan(n[4])),skewY:n=>zi(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Uf(n){return n.includes("scale")?1:0}function Ff(n,a){if(!n||n==="none")return Uf(a);const r=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,c;if(r)o=aw,c=r;else{const m=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=iw,c=m}if(!c)return Uf(a);const f=o[a],d=c[1].split(",").map(rw);return typeof f=="function"?f(d):d[f]}const sw=(n,a)=>{const{transform:r="none"}=getComputedStyle(n);return Ff(r,a)};function rw(n){return parseFloat(n.trim())}const Ya=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],qa=new Set(Ya),gg=n=>n===Ga||n===lt,ow=new Set(["x","y","z"]),lw=Ya.filter(n=>!ow.has(n));function cw(n){const a=[];return lw.forEach(r=>{const o=n.getValue(r);o!==void 0&&(a.push([r,o.get()]),o.set(r.startsWith("scale")?1:0))}),a}const Oi={width:({x:n},{paddingLeft:a="0",paddingRight:r="0"})=>n.max-n.min-parseFloat(a)-parseFloat(r),height:({y:n},{paddingTop:a="0",paddingBottom:r="0"})=>n.max-n.min-parseFloat(a)-parseFloat(r),top:(n,{top:a})=>parseFloat(a),left:(n,{left:a})=>parseFloat(a),bottom:({y:n},{top:a})=>parseFloat(a)+(n.max-n.min),right:({x:n},{left:a})=>parseFloat(a)+(n.max-n.min),x:(n,{transform:a})=>Ff(a,"x"),y:(n,{transform:a})=>Ff(a,"y")};Oi.translateX=Oi.x;Oi.translateY=Oi.y;const Bi=new Set;let Gf=!1,Yf=!1,qf=!1;function uv(){if(Yf){const n=Array.from(Bi).filter(o=>o.needsMeasurement),a=new Set(n.map(o=>o.element)),r=new Map;a.forEach(o=>{const c=cw(o);c.length&&(r.set(o,c),o.render())}),n.forEach(o=>o.measureInitialState()),a.forEach(o=>{o.render();const c=r.get(o);c&&c.forEach(([f,d])=>{o.getValue(f)?.set(d)})}),n.forEach(o=>o.measureEndState()),n.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}Yf=!1,Gf=!1,Bi.forEach(n=>n.complete(qf)),Bi.clear()}function fv(){Bi.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Yf=!0)})}function uw(){qf=!0,fv(),uv(),qf=!1}class Cd{constructor(a,r,o,c,f,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...a],this.onComplete=r,this.name=o,this.motionValue=c,this.element=f,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Bi.add(this),Gf||(Gf=!0,At.read(fv),At.resolveKeyframes(uv))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:a,name:r,element:o,motionValue:c}=this;if(a[0]===null){const f=c?.get(),d=a[a.length-1];if(f!==void 0)a[0]=f;else if(o&&r){const m=o.readValue(r,d);m!=null&&(a[0]=m)}a[0]===void 0&&(a[0]=d),c&&f===void 0&&c.set(a[0])}nw(a)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(a=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,a),Bi.delete(this)}cancel(){this.state==="scheduled"&&(Bi.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const fw=n=>n.startsWith("--");function dw(n,a,r){fw(a)?n.style.setProperty(a,r):n.style[a]=r}const dv=md(()=>window.ScrollTimeline!==void 0),hw={};function pw(n,a){const r=md(n);return()=>hw[a]??r()}const hv=pw(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Is=([n,a,r,o])=>`cubic-bezier(${n}, ${a}, ${r}, ${o})`,yg={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Is([0,.65,.55,1]),circOut:Is([.55,0,1,.45]),backIn:Is([.31,.01,.66,-.59]),backOut:Is([.33,1.53,.69,.99])};function pv(n,a){if(n)return typeof n=="function"?hv()?rv(n,a):"ease-out":Z1(n)?Is(n):Array.isArray(n)?n.map(r=>pv(r,a)||yg.easeOut):yg[n]}function mw(n,a,r,{delay:o=0,duration:c=300,repeat:f=0,repeatType:d="loop",ease:m="easeOut",times:p}={},g=void 0){const v={[a]:r};p&&(v.offset=p);const S=pv(m,c);Array.isArray(S)&&(v.easing=S);const b={delay:o,duration:c,easing:Array.isArray(S)?"linear":S,fill:"both",iterations:f+1,direction:d==="reverse"?"alternate":"normal"};return g&&(b.pseudoElement=g),n.animate(v,b)}function mv(n){return typeof n=="function"&&"applyToOptions"in n}function gw({type:n,...a}){return mv(n)&&hv()?n.applyToOptions(a):(a.duration??(a.duration=300),a.ease??(a.ease="easeOut"),a)}class yw extends Md{constructor(a){if(super(),this.finishedTime=null,this.isStopped=!1,!a)return;const{element:r,name:o,keyframes:c,pseudoElement:f,allowFlatten:d=!1,finalKeyframe:m,onComplete:p}=a;this.isPseudoElement=!!f,this.allowFlatten=d,this.options=a,or(typeof a.type!="string");const g=gw(a);this.animation=mw(r,o,c,g,f),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!f){const v=Dd(c,this.options,m,this.speed);this.updateMotionValue?this.updateMotionValue(v):dw(r,o,v),this.animation.cancel()}p?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:a}=this;a==="idle"||a==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const a=this.animation.effect?.getComputedTiming?.().duration||0;return dn(Number(a))}get time(){return dn(Number(this.animation.currentTime)||0)}set time(a){this.finishedTime=null,this.animation.currentTime=fn(a)}get speed(){return this.animation.playbackRate}set speed(a){a<0&&(this.finishedTime=null),this.animation.playbackRate=a}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(a){this.animation.startTime=a}attachTimeline({timeline:a,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,a&&dv()?(this.animation.timeline=a,Se):r(this)}}const gv={anticipate:X1,backInOut:P1,circInOut:Q1};function vw(n){return n in gv}function bw(n){typeof n.ease=="string"&&vw(n.ease)&&(n.ease=gv[n.ease])}const vg=10;class xw extends yw{constructor(a){bw(a),cv(a),super(a),a.startTime&&(this.startTime=a.startTime),this.options=a}updateMotionValue(a){const{motionValue:r,onUpdate:o,onComplete:c,element:f,...d}=this.options;if(!r)return;if(a!==void 0){r.set(a);return}const m=new El({...d,autoplay:!1}),p=fn(this.finishedTime??this.time);r.setWithVelocity(m.sample(p-vg).value,m.sample(p).value,vg),m.stop()}}const bg=(n,a)=>a==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(oi.test(n)||n==="0")&&!n.startsWith("url("));function Sw(n){const a=n[0];if(n.length===1)return!0;for(let r=0;r<n.length;r++)if(n[r]!==a)return!0}function ww(n,a,r,o){const c=n[0];if(c===null)return!1;if(a==="display"||a==="visibility")return!0;const f=n[n.length-1],d=bg(c,a),m=bg(f,a);return!d||!m?!1:Sw(n)||(r==="spring"||mv(r))&&o}function Pf(n){n.duration=0,n.type}const Aw=new Set(["opacity","clipPath","filter","transform"]),Tw=md(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Ew(n){const{motionValue:a,name:r,repeatDelay:o,repeatType:c,damping:f,type:d}=n;if(!(a?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:g}=a.owner.getProps();return Tw()&&r&&Aw.has(r)&&(r!=="transform"||!g)&&!p&&!o&&c!=="mirror"&&f!==0&&d!=="inertia"}const jw=40;class Dw extends Md{constructor({autoplay:a=!0,delay:r=0,type:o="keyframes",repeat:c=0,repeatDelay:f=0,repeatType:d="loop",keyframes:m,name:p,motionValue:g,element:v,...S}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=xe.now();const b={autoplay:a,delay:r,type:o,repeat:c,repeatDelay:f,repeatType:d,name:p,motionValue:g,element:v,...S},T=v?.KeyframeResolver||Cd;this.keyframeResolver=new T(m,(M,B,U)=>this.onKeyframesResolved(M,B,b,!U),p,g,v),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(a,r,o,c){this.keyframeResolver=void 0;const{name:f,type:d,velocity:m,delay:p,isHandoff:g,onUpdate:v}=o;this.resolvedAt=xe.now(),ww(a,f,d,m)||((zn.instantAnimations||!p)&&v?.(Dd(a,o,r)),a[0]=a[a.length-1],Pf(o),o.repeat=0);const b={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>jw?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:r,...o,keyframes:a},T=!g&&Ew(b)?new xw({...b,element:b.motionValue.owner.current}):new El(b);T.finished.then(()=>this.notifyFinished()).catch(Se),this.pendingTimeline&&(this.stopTimeline=T.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=T}get finished(){return this._animation?this.animation.finished:this._finished}then(a,r){return this.finished.finally(a).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),uw()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(a){this.animation.time=a}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(a){this.animation.speed=a}get startTime(){return this.animation.startTime}attachTimeline(a){return this._animation?this.stopTimeline=this.animation.attachTimeline(a):this.pendingTimeline=a,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const Mw=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Cw(n){const a=Mw.exec(n);if(!a)return[,];const[,r,o,c]=a;return[`--${r??o}`,c]}function yv(n,a,r=1){const[o,c]=Cw(n);if(!o)return;const f=window.getComputedStyle(a).getPropertyValue(o);if(f){const d=f.trim();return L1(d)?parseFloat(d):d}return Sd(c)?yv(c,a,r+1):c}function Rd(n,a){return n?.[a]??n?.default??n}const vv=new Set(["width","height","top","left","right","bottom",...Ya]),Rw={test:n=>n==="auto",parse:n=>n},bv=n=>a=>a.test(n),xv=[Ga,lt,hn,si,T5,A5,Rw],xg=n=>xv.find(bv(n));function _w(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||U1(n):!0}const zw=new Set(["brightness","contrast","saturate","opacity"]);function kw(n){const[a,r]=n.slice(0,-1).split("(");if(a==="drop-shadow")return n;const[o]=r.match(wd)||[];if(!o)return n;const c=r.replace(o,"");let f=zw.has(a)?1:0;return o!==r&&(f*=100),a+"("+f+c+")"}const Ow=/\b([a-z-]*)\(.*?\)/gu,Xf={...oi,getAnimatableNone:n=>{const a=n.match(Ow);return a?a.map(kw).join(" "):n}},Sg={...Ga,transform:Math.round},Bw={rotate:si,rotateX:si,rotateY:si,rotateZ:si,scale:Lo,scaleX:Lo,scaleY:Lo,scaleZ:Lo,skew:si,skewX:si,skewY:si,distance:lt,translateX:lt,translateY:lt,translateZ:lt,x:lt,y:lt,z:lt,perspective:lt,transformPerspective:lt,opacity:lr,originX:lg,originY:lg,originZ:lt},_d={borderWidth:lt,borderTopWidth:lt,borderRightWidth:lt,borderBottomWidth:lt,borderLeftWidth:lt,borderRadius:lt,radius:lt,borderTopLeftRadius:lt,borderTopRightRadius:lt,borderBottomRightRadius:lt,borderBottomLeftRadius:lt,width:lt,maxWidth:lt,height:lt,maxHeight:lt,top:lt,right:lt,bottom:lt,left:lt,padding:lt,paddingTop:lt,paddingRight:lt,paddingBottom:lt,paddingLeft:lt,margin:lt,marginTop:lt,marginRight:lt,marginBottom:lt,marginLeft:lt,backgroundPositionX:lt,backgroundPositionY:lt,...Bw,zIndex:Sg,fillOpacity:lr,strokeOpacity:lr,numOctaves:Sg},Vw={..._d,color:Xt,backgroundColor:Xt,outlineColor:Xt,fill:Xt,stroke:Xt,borderColor:Xt,borderTopColor:Xt,borderRightColor:Xt,borderBottomColor:Xt,borderLeftColor:Xt,filter:Xf,WebkitFilter:Xf},Sv=n=>Vw[n];function wv(n,a){let r=Sv(n);return r!==Xf&&(r=oi),r.getAnimatableNone?r.getAnimatableNone(a):void 0}const Nw=new Set(["auto","none","0"]);function Lw(n,a,r){let o=0,c;for(;o<n.length&&!c;){const f=n[o];typeof f=="string"&&!Nw.has(f)&&cr(f).values.length&&(c=n[o]),o++}if(c&&r)for(const f of a)n[f]=wv(r,c)}class Hw extends Cd{constructor(a,r,o,c,f){super(a,r,o,c,f,!0)}readKeyframes(){const{unresolvedKeyframes:a,element:r,name:o}=this;if(!r||!r.current)return;super.readKeyframes();for(let p=0;p<a.length;p++){let g=a[p];if(typeof g=="string"&&(g=g.trim(),Sd(g))){const v=yv(g,r.current);v!==void 0&&(a[p]=v),p===a.length-1&&(this.finalKeyframe=g)}}if(this.resolveNoneKeyframes(),!vv.has(o)||a.length!==2)return;const[c,f]=a,d=xg(c),m=xg(f);if(d!==m)if(gg(d)&&gg(m))for(let p=0;p<a.length;p++){const g=a[p];typeof g=="string"&&(a[p]=parseFloat(g))}else Oi[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:a,name:r}=this,o=[];for(let c=0;c<a.length;c++)(a[c]===null||_w(a[c]))&&o.push(c);o.length&&Lw(a,o,r)}measureInitialState(){const{element:a,unresolvedKeyframes:r,name:o}=this;if(!a||!a.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Oi[o](a.measureViewportBox(),window.getComputedStyle(a.current)),r[0]=this.measuredOrigin;const c=r[r.length-1];c!==void 0&&a.getValue(o,c).jump(c,!1)}measureEndState(){const{element:a,name:r,unresolvedKeyframes:o}=this;if(!a||!a.current)return;const c=a.getValue(r);c&&c.jump(this.measuredOrigin,!1);const f=o.length-1,d=o[f];o[f]=Oi[r](a.measureViewportBox(),window.getComputedStyle(a.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),this.removedTransforms?.length&&this.removedTransforms.forEach(([m,p])=>{a.getValue(m).set(p)}),this.resolveNoneKeyframes()}}function zd(n,a,r){if(n instanceof EventTarget)return[n];if(typeof n=="string"){const c=document.querySelectorAll(n);return c?Array.from(c):[]}return Array.from(n)}const Av=(n,a)=>a&&typeof n=="number"?a.transform(n):n;function kd(n){return H1(n)&&"offsetHeight"in n}const wg=30,Uw=n=>!isNaN(parseFloat(n)),er={current:void 0};class Fw{constructor(a,r={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=o=>{const c=xe.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const f of this.dependents)f.dirty()},this.hasAnimated=!1,this.setCurrent(a),this.owner=r.owner}setCurrent(a){this.current=a,this.updatedAt=xe.now(),this.canTrackVelocity===null&&a!==void 0&&(this.canTrackVelocity=Uw(this.current))}setPrevFrameValue(a=this.current){this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt}onChange(a){return this.on("change",a)}on(a,r){this.events[a]||(this.events[a]=new gd);const o=this.events[a].add(r);return a==="change"?()=>{o(),At.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const a in this.events)this.events[a].clear()}attach(a,r){this.passiveEffect=a,this.stopPassiveEffect=r}set(a){this.passiveEffect?this.passiveEffect(a,this.updateAndNotify):this.updateAndNotify(a)}setWithVelocity(a,r,o){this.set(r),this.prev=void 0,this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt-o}jump(a,r=!0){this.updateAndNotify(a),this.prev=a,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(a){this.dependents||(this.dependents=new Set),this.dependents.add(a)}removeDependent(a){this.dependents&&this.dependents.delete(a)}get(){return er.current&&er.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const a=xe.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||a-this.updatedAt>wg)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,wg);return yd(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(a){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=a(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function tn(n,a){return new Fw(n,a)}const{schedule:Od}=I1(queueMicrotask,!1),We={x:!1,y:!1};function Tv(){return We.x||We.y}function Gw(n){return n==="x"||n==="y"?We[n]?null:(We[n]=!0,()=>{We[n]=!1}):We.x||We.y?null:(We.x=We.y=!0,()=>{We.x=We.y=!1})}function Ev(n,a){const r=zd(n),o=new AbortController,c={passive:!0,...a,signal:o.signal};return[r,c,()=>o.abort()]}function Ag(n){return!(n.pointerType==="touch"||Tv())}function Yw(n,a,r={}){const[o,c,f]=Ev(n,r),d=m=>{if(!Ag(m))return;const{target:p}=m,g=a(p,m);if(typeof g!="function"||!p)return;const v=S=>{Ag(S)&&(g(S),p.removeEventListener("pointerleave",v))};p.addEventListener("pointerleave",v,c)};return o.forEach(m=>{m.addEventListener("pointerenter",d,c)}),f}const jv=(n,a)=>a?n===a?!0:jv(n,a.parentElement):!1,Bd=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,qw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Pw(n){return qw.has(n.tagName)||n.tabIndex!==-1}const tl=new WeakSet;function Tg(n){return a=>{a.key==="Enter"&&n(a)}}function af(n,a){n.dispatchEvent(new PointerEvent("pointer"+a,{isPrimary:!0,bubbles:!0}))}const Xw=(n,a)=>{const r=n.currentTarget;if(!r)return;const o=Tg(()=>{if(tl.has(r))return;af(r,"down");const c=Tg(()=>{af(r,"up")}),f=()=>af(r,"cancel");r.addEventListener("keyup",c,a),r.addEventListener("blur",f,a)});r.addEventListener("keydown",o,a),r.addEventListener("blur",()=>r.removeEventListener("keydown",o),a)};function Eg(n){return Bd(n)&&!Tv()}function $w(n,a,r={}){const[o,c,f]=Ev(n,r),d=m=>{const p=m.currentTarget;if(!Eg(m))return;tl.add(p);const g=a(p,m),v=(T,M)=>{window.removeEventListener("pointerup",S),window.removeEventListener("pointercancel",b),tl.has(p)&&tl.delete(p),Eg(T)&&typeof g=="function"&&g(T,{success:M})},S=T=>{v(T,p===window||p===document||r.useGlobalTarget||jv(p,T.target))},b=T=>{v(T,!1)};window.addEventListener("pointerup",S,c),window.addEventListener("pointercancel",b,c)};return o.forEach(m=>{(r.useGlobalTarget?window:m).addEventListener("pointerdown",d,c),kd(m)&&(m.addEventListener("focus",g=>Xw(g,c)),!Pw(m)&&!m.hasAttribute("tabindex")&&(m.tabIndex=0))}),f}function Vd(n){return H1(n)&&"ownerSVGElement"in n}const el=new WeakMap;let nl;const Dv=(n,a,r)=>(o,c)=>c&&c[0]?c[0][n+"Size"]:Vd(o)&&"getBBox"in o?o.getBBox()[a]:o[r],Qw=Dv("inline","width","offsetWidth"),Kw=Dv("block","height","offsetHeight");function Zw({target:n,borderBoxSize:a}){el.get(n)?.forEach(r=>{r(n,{get width(){return Qw(n,a)},get height(){return Kw(n,a)}})})}function Iw(n){n.forEach(Zw)}function Ww(){typeof ResizeObserver>"u"||(nl=new ResizeObserver(Iw))}function Jw(n,a){nl||Ww();const r=zd(n);return r.forEach(o=>{let c=el.get(o);c||(c=new Set,el.set(o,c)),c.add(a),nl?.observe(o)}),()=>{r.forEach(o=>{const c=el.get(o);c?.delete(a),c?.size||nl?.unobserve(o)})}}const il=new Set;let ja;function t3(){ja=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};il.forEach(a=>a(n))},window.addEventListener("resize",ja)}function e3(n){return il.add(n),ja||t3(),()=>{il.delete(n),!il.size&&typeof ja=="function"&&(window.removeEventListener("resize",ja),ja=void 0)}}function n3(n,a){return typeof n=="function"?e3(n):Jw(n,a)}function Mv(n,a){let r;const o=()=>{const{currentTime:c}=a,d=(c===null?0:c.value)/100;r!==d&&n(d),r=d};return At.preUpdate(o,!0),()=>nn(o)}function i3(n){return Vd(n)&&n.tagName==="svg"}function a3(...n){const a=!Array.isArray(n[0]),r=a?0:-1,o=n[0+r],c=n[1+r],f=n[2+r],d=n[3+r],m=jd(c,f,d);return a?m(o):m}const se=n=>!!(n&&n.getVelocity);function s3(n,a,r){const o=n.get();let c=null,f=o,d;const m=typeof o=="string"?o.replace(/[\d.-]/g,""):void 0,p=()=>{c&&(c.stop(),c=null)},g=()=>{p(),c=new El({keyframes:[Dg(n.get()),Dg(f)],velocity:n.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...r,onUpdate:d})};if(n.attach((v,S)=>(f=v,d=b=>S(jg(b,m)),At.postRender(g),n.get()),p),se(a)){const v=a.on("change",b=>n.set(jg(b,m))),S=n.on("destroy",v);return()=>{v(),S()}}return p}function jg(n,a){return a?n+a:n}function Dg(n){return typeof n=="number"?n:parseFloat(n)}const r3=[...xv,Xt,oi],o3=n=>r3.find(bv(n)),vr=O.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class l3 extends O.Component{getSnapshotBeforeUpdate(a){const r=this.props.childRef.current;if(r&&a.isPresent&&!this.props.isPresent){const o=r.offsetParent,c=kd(o)&&o.offsetWidth||0,f=this.props.sizeRef.current;f.height=r.offsetHeight||0,f.width=r.offsetWidth||0,f.top=r.offsetTop,f.left=r.offsetLeft,f.right=c-f.width-f.left}return null}componentDidUpdate(){}render(){return this.props.children}}function c3({children:n,isPresent:a,anchorX:r,root:o}){const c=O.useId(),f=O.useRef(null),d=O.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:m}=O.useContext(vr);return O.useInsertionEffect(()=>{const{width:p,height:g,top:v,left:S,right:b}=d.current;if(a||!f.current||!p||!g)return;const T=r==="left"?`left: ${S}`:`right: ${b}`;f.current.dataset.motionPopId=c;const M=document.createElement("style");m&&(M.nonce=m);const B=o??document.head;return B.appendChild(M),M.sheet&&M.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${g}px !important;
            ${T}px !important;
            top: ${v}px !important;
          }
        `),()=>{B.contains(M)&&B.removeChild(M)}},[a]),h.jsx(l3,{isPresent:a,childRef:f,sizeRef:d,children:O.cloneElement(n,{ref:f})})}const u3=({children:n,initial:a,isPresent:r,onExitComplete:o,custom:c,presenceAffectsLayout:f,mode:d,anchorX:m,root:p})=>{const g=Fa(f3),v=O.useId();let S=!0,b=O.useMemo(()=>(S=!1,{id:v,initial:a,isPresent:r,custom:c,onExitComplete:T=>{g.set(T,!0);for(const M of g.values())if(!M)return;o&&o()},register:T=>(g.set(T,!1),()=>g.delete(T))}),[r,g,o]);return f&&S&&(b={...b}),O.useMemo(()=>{g.forEach((T,M)=>g.set(M,!1))},[r]),O.useEffect(()=>{!r&&!g.size&&o&&o()},[r]),d==="popLayout"&&(n=h.jsx(c3,{isPresent:r,anchorX:m,root:p,children:n})),h.jsx(Tl.Provider,{value:b,children:n})};function f3(){return new Map}function Cv(n=!0){const a=O.useContext(Tl);if(a===null)return[!0,null];const{isPresent:r,onExitComplete:o,register:c}=a,f=O.useId();O.useEffect(()=>{if(n)return c(f)},[n]);const d=O.useCallback(()=>n&&o&&o(f),[f,o,n]);return!r&&o?[!1,d]:[!0]}const Ho=n=>n.key||"";function Mg(n){const a=[];return O.Children.forEach(n,r=>{O.isValidElement(r)&&a.push(r)}),a}const Pe=({children:n,custom:a,initial:r=!0,onExitComplete:o,presenceAffectsLayout:c=!0,mode:f="sync",propagate:d=!1,anchorX:m="left",root:p})=>{const[g,v]=Cv(d),S=O.useMemo(()=>Mg(n),[n]),b=d&&!g?[]:S.map(Ho),T=O.useRef(!0),M=O.useRef(S),B=Fa(()=>new Map),[U,F]=O.useState(S),[P,L]=O.useState(S);Al(()=>{T.current=!1,M.current=S;for(let $=0;$<P.length;$++){const _=Ho(P[$]);b.includes(_)?B.delete(_):B.get(_)!==!0&&B.set(_,!1)}},[P,b.length,b.join("-")]);const Z=[];if(S!==U){let $=[...S];for(let _=0;_<P.length;_++){const X=P[_],K=Ho(X);b.includes(K)||($.splice(_,0,X),Z.push(X))}return f==="wait"&&Z.length&&($=Z),L(Mg($)),F(S),null}const{forceRender:G}=O.useContext(fd);return h.jsx(h.Fragment,{children:P.map($=>{const _=Ho($),X=d&&!g?!1:S===P||b.includes(_),K=()=>{if(B.has(_))B.set(_,!0);else return;let ct=!0;B.forEach(Vt=>{Vt||(ct=!1)}),ct&&(G?.(),L(M.current),d&&v?.(),o&&o())};return h.jsx(u3,{isPresent:X,initial:!T.current||r?void 0:!1,custom:a,presenceAffectsLayout:c,mode:f,root:p,onExitComplete:X?void 0:K,anchorX:m,children:$},_)})})},Rv=O.createContext({strict:!1}),Cg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Na={};for(const n in Cg)Na[n]={isEnabled:a=>Cg[n].some(r=>!!a[r])};function d3(n){for(const a in n)Na[a]={...Na[a],...n[a]}}const h3=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function pl(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||h3.has(n)}let _v=n=>!pl(n);function p3(n){typeof n=="function"&&(_v=a=>a.startsWith("on")?!pl(a):n(a))}try{p3(require("@emotion/is-prop-valid").default)}catch{}function m3(n,a,r){const o={};for(const c in n)c==="values"&&typeof n.values=="object"||(_v(c)||r===!0&&pl(c)||!a&&!pl(c)||n.draggable&&c.startsWith("onDrag"))&&(o[c]=n[c]);return o}const jl=O.createContext({});function Dl(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function ur(n){return typeof n=="string"||Array.isArray(n)}const Nd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ld=["initial",...Nd];function Ml(n){return Dl(n.animate)||Ld.some(a=>ur(n[a]))}function zv(n){return!!(Ml(n)||n.variants)}function g3(n,a){if(Ml(n)){const{initial:r,animate:o}=n;return{initial:r===!1||ur(r)?r:void 0,animate:ur(o)?o:void 0}}return n.inherit!==!1?a:{}}function y3(n){const{initial:a,animate:r}=g3(n,O.useContext(jl));return O.useMemo(()=>({initial:a,animate:r}),[Rg(a),Rg(r)])}function Rg(n){return Array.isArray(n)?n.join(" "):n}const fr={};function v3(n){for(const a in n)fr[a]=n[a],xd(a)&&(fr[a].isCSSVariable=!0)}function kv(n,{layout:a,layoutId:r}){return qa.has(n)||n.startsWith("origin")||(a||r!==void 0)&&(!!fr[n]||n==="opacity")}const b3={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},x3=Ya.length;function S3(n,a,r){let o="",c=!0;for(let f=0;f<x3;f++){const d=Ya[f],m=n[d];if(m===void 0)continue;let p=!0;if(typeof m=="number"?p=m===(d.startsWith("scale")?1:0):p=parseFloat(m)===0,!p||r){const g=Av(m,_d[d]);if(!p){c=!1;const v=b3[d]||d;o+=`${v}(${g}) `}r&&(a[d]=g)}}return o=o.trim(),r?o=r(a,c?"":o):c&&(o="none"),o}function Hd(n,a,r){const{style:o,vars:c,transformOrigin:f}=n;let d=!1,m=!1;for(const p in a){const g=a[p];if(qa.has(p)){d=!0;continue}else if(xd(p)){c[p]=g;continue}else{const v=Av(g,_d[p]);p.startsWith("origin")?(m=!0,f[p]=v):o[p]=v}}if(a.transform||(d||r?o.transform=S3(a,n.transform,r):o.transform&&(o.transform="none")),m){const{originX:p="50%",originY:g="50%",originZ:v=0}=f;o.transformOrigin=`${p} ${g} ${v}`}}const Ud=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Ov(n,a,r){for(const o in a)!se(a[o])&&!kv(o,r)&&(n[o]=a[o])}function w3({transformTemplate:n},a){return O.useMemo(()=>{const r=Ud();return Hd(r,a,n),Object.assign({},r.vars,r.style)},[a])}function A3(n,a){const r=n.style||{},o={};return Ov(o,r,n),Object.assign(o,w3(n,a)),o}function T3(n,a){const r={},o=A3(n,a);return n.drag&&n.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(r.tabIndex=0),r.style=o,r}const E3={offset:"stroke-dashoffset",array:"stroke-dasharray"},j3={offset:"strokeDashoffset",array:"strokeDasharray"};function D3(n,a,r=1,o=0,c=!0){n.pathLength=1;const f=c?E3:j3;n[f.offset]=lt.transform(-o);const d=lt.transform(a),m=lt.transform(r);n[f.array]=`${d} ${m}`}function Bv(n,{attrX:a,attrY:r,attrScale:o,pathLength:c,pathSpacing:f=1,pathOffset:d=0,...m},p,g,v){if(Hd(n,m,g),p){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:S,style:b}=n;S.transform&&(b.transform=S.transform,delete S.transform),(b.transform||S.transformOrigin)&&(b.transformOrigin=S.transformOrigin??"50% 50%",delete S.transformOrigin),b.transform&&(b.transformBox=v?.transformBox??"fill-box",delete S.transformBox),a!==void 0&&(S.x=a),r!==void 0&&(S.y=r),o!==void 0&&(S.scale=o),c!==void 0&&D3(S,c,f,d,!1)}const Vv=()=>({...Ud(),attrs:{}}),Nv=n=>typeof n=="string"&&n.toLowerCase()==="svg";function M3(n,a,r,o){const c=O.useMemo(()=>{const f=Vv();return Bv(f,a,Nv(o),n.transformTemplate,n.style),{...f.attrs,style:{...f.style}}},[a]);if(n.style){const f={};Ov(f,n.style,n),c.style={...f,...c.style}}return c}const C3=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Fd(n){return typeof n!="string"||n.includes("-")?!1:!!(C3.indexOf(n)>-1||/[A-Z]/u.test(n))}function R3(n,a,r,{latestValues:o},c,f=!1){const m=(Fd(n)?M3:T3)(a,o,c,n),p=m3(a,typeof n=="string",f),g=n!==O.Fragment?{...p,...m,ref:r}:{},{children:v}=a,S=O.useMemo(()=>se(v)?v.get():v,[v]);return O.createElement(n,{...g,children:S})}function _g(n){const a=[{},{}];return n?.values.forEach((r,o)=>{a[0][o]=r.get(),a[1][o]=r.getVelocity()}),a}function Gd(n,a,r,o){if(typeof a=="function"){const[c,f]=_g(o);a=a(r!==void 0?r:n.custom,c,f)}if(typeof a=="string"&&(a=n.variants&&n.variants[a]),typeof a=="function"){const[c,f]=_g(o);a=a(r!==void 0?r:n.custom,c,f)}return a}function al(n){return se(n)?n.get():n}function _3({scrapeMotionValuesFromProps:n,createRenderState:a},r,o,c){return{latestValues:z3(r,o,c,n),renderState:a()}}function z3(n,a,r,o){const c={},f=o(n,{});for(const b in f)c[b]=al(f[b]);let{initial:d,animate:m}=n;const p=Ml(n),g=zv(n);a&&g&&!p&&n.inherit!==!1&&(d===void 0&&(d=a.initial),m===void 0&&(m=a.animate));let v=r?r.initial===!1:!1;v=v||d===!1;const S=v?m:d;if(S&&typeof S!="boolean"&&!Dl(S)){const b=Array.isArray(S)?S:[S];for(let T=0;T<b.length;T++){const M=Gd(n,b[T]);if(M){const{transitionEnd:B,transition:U,...F}=M;for(const P in F){let L=F[P];if(Array.isArray(L)){const Z=v?L.length-1:0;L=L[Z]}L!==null&&(c[P]=L)}for(const P in B)c[P]=B[P]}}}return c}const Lv=n=>(a,r)=>{const o=O.useContext(jl),c=O.useContext(Tl),f=()=>_3(n,a,o,c);return r?f():Fa(f)};function Yd(n,a,r){const{style:o}=n,c={};for(const f in o)(se(o[f])||a.style&&se(a.style[f])||kv(f,n)||r?.getValue(f)?.liveStyle!==void 0)&&(c[f]=o[f]);return c}const k3=Lv({scrapeMotionValuesFromProps:Yd,createRenderState:Ud});function Hv(n,a,r){const o=Yd(n,a,r);for(const c in n)if(se(n[c])||se(a[c])){const f=Ya.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;o[f]=n[c]}return o}const O3=Lv({scrapeMotionValuesFromProps:Hv,createRenderState:Vv}),B3=Symbol.for("motionComponentSymbol");function Da(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function V3(n,a,r){return O.useCallback(o=>{o&&n.onMount&&n.onMount(o),a&&(o?a.mount(o):a.unmount()),r&&(typeof r=="function"?r(o):Da(r)&&(r.current=o))},[a])}const qd=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),N3="framerAppearId",Uv="data-"+qd(N3),Fv=O.createContext({});function L3(n,a,r,o,c){const{visualElement:f}=O.useContext(jl),d=O.useContext(Rv),m=O.useContext(Tl),p=O.useContext(vr).reducedMotion,g=O.useRef(null);o=o||d.renderer,!g.current&&o&&(g.current=o(n,{visualState:a,parent:f,props:r,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:p}));const v=g.current,S=O.useContext(Fv);v&&!v.projection&&c&&(v.type==="html"||v.type==="svg")&&H3(g.current,r,c,S);const b=O.useRef(!1);O.useInsertionEffect(()=>{v&&b.current&&v.update(r,m)});const T=r[Uv],M=O.useRef(!!T&&!window.MotionHandoffIsComplete?.(T)&&window.MotionHasOptimisedAnimation?.(T));return Al(()=>{v&&(b.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),v.scheduleRenderMicrotask(),M.current&&v.animationState&&v.animationState.animateChanges())}),O.useEffect(()=>{v&&(!M.current&&v.animationState&&v.animationState.animateChanges(),M.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(T)}),M.current=!1))}),v}function H3(n,a,r,o){const{layoutId:c,layout:f,drag:d,dragConstraints:m,layoutScroll:p,layoutRoot:g,layoutCrossfade:v}=a;n.projection=new r(n.latestValues,a["data-framer-portal-id"]?void 0:Gv(n.parent)),n.projection.setOptions({layoutId:c,layout:f,alwaysMeasureLayout:!!d||m&&Da(m),visualElement:n,animationType:typeof f=="string"?f:"both",initialPromotionConfig:o,crossfade:v,layoutScroll:p,layoutRoot:g})}function Gv(n){if(n)return n.options.allowProjection!==!1?n.projection:Gv(n.parent)}function sf(n,{forwardMotionProps:a=!1}={},r,o){r&&d3(r);const c=Fd(n)?O3:k3;function f(m,p){let g;const v={...O.useContext(vr),...m,layoutId:U3(m)},{isStatic:S}=v,b=y3(m),T=c(m,S);if(!S&&dd){F3();const M=G3(v);g=M.MeasureLayout,b.visualElement=L3(n,T,v,o,M.ProjectionNode)}return h.jsxs(jl.Provider,{value:b,children:[g&&b.visualElement?h.jsx(g,{visualElement:b.visualElement,...v}):null,R3(n,m,V3(T,b.visualElement,p),T,S,a)]})}f.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const d=O.forwardRef(f);return d[B3]=n,d}function U3({layoutId:n}){const a=O.useContext(fd).id;return a&&n!==void 0?a+"-"+n:n}function F3(n,a){O.useContext(Rv).strict}function G3(n){const{drag:a,layout:r}=Na;if(!a&&!r)return{};const o={...a,...r};return{MeasureLayout:a?.isEnabled(n)||r?.isEnabled(n)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function Y3(n,a){if(typeof Proxy>"u")return sf;const r=new Map,o=(f,d)=>sf(f,d,n,a),c=(f,d)=>o(f,d);return new Proxy(c,{get:(f,d)=>d==="create"?o:(r.has(d)||r.set(d,sf(d,void 0,n,a)),r.get(d))})}function Yv({top:n,left:a,right:r,bottom:o}){return{x:{min:a,max:r},y:{min:n,max:o}}}function q3({x:n,y:a}){return{top:a.min,right:n.max,bottom:a.max,left:n.min}}function P3(n,a){if(!a)return n;const r=a({x:n.left,y:n.top}),o=a({x:n.right,y:n.bottom});return{top:r.y,left:r.x,bottom:o.y,right:o.x}}function rf(n){return n===void 0||n===1}function $f({scale:n,scaleX:a,scaleY:r}){return!rf(n)||!rf(a)||!rf(r)}function Ci(n){return $f(n)||qv(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function qv(n){return zg(n.x)||zg(n.y)}function zg(n){return n&&n!=="0%"}function ml(n,a,r){const o=n-r,c=a*o;return r+c}function kg(n,a,r,o,c){return c!==void 0&&(n=ml(n,c,o)),ml(n,r,o)+a}function Qf(n,a=0,r=1,o,c){n.min=kg(n.min,a,r,o,c),n.max=kg(n.max,a,r,o,c)}function Pv(n,{x:a,y:r}){Qf(n.x,a.translate,a.scale,a.originPoint),Qf(n.y,r.translate,r.scale,r.originPoint)}const Og=.999999999999,Bg=1.0000000000001;function X3(n,a,r,o=!1){const c=r.length;if(!c)return;a.x=a.y=1;let f,d;for(let m=0;m<c;m++){f=r[m],d=f.projectionDelta;const{visualElement:p}=f.options;p&&p.props.style&&p.props.style.display==="contents"||(o&&f.options.layoutScroll&&f.scroll&&f!==f.root&&Ca(n,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),d&&(a.x*=d.x.scale,a.y*=d.y.scale,Pv(n,d)),o&&Ci(f.latestValues)&&Ca(n,f.latestValues))}a.x<Bg&&a.x>Og&&(a.x=1),a.y<Bg&&a.y>Og&&(a.y=1)}function Ma(n,a){n.min=n.min+a,n.max=n.max+a}function Vg(n,a,r,o,c=.5){const f=Bt(n.min,n.max,c);Qf(n,a,r,f,o)}function Ca(n,a){Vg(n.x,a.x,a.scaleX,a.scale,a.originX),Vg(n.y,a.y,a.scaleY,a.scale,a.originY)}function Xv(n,a){return Yv(P3(n.getBoundingClientRect(),a))}function $3(n,a,r){const o=Xv(n,r),{scroll:c}=a;return c&&(Ma(o.x,c.offset.x),Ma(o.y,c.offset.y)),o}const Ng=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ra=()=>({x:Ng(),y:Ng()}),Lg=()=>({min:0,max:0}),Yt=()=>({x:Lg(),y:Lg()}),Kf={current:null},$v={current:!1};function Q3(){if($v.current=!0,!!dd)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),a=()=>Kf.current=n.matches;n.addEventListener("change",a),a()}else Kf.current=!1}const K3=new WeakMap;function Z3(n,a,r){for(const o in a){const c=a[o],f=r[o];if(se(c))n.addValue(o,c);else if(se(f))n.addValue(o,tn(c,{owner:n}));else if(f!==c)if(n.hasValue(o)){const d=n.getValue(o);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=n.getStaticValue(o);n.addValue(o,tn(d!==void 0?d:c,{owner:n}))}}for(const o in r)a[o]===void 0&&n.removeValue(o);return a}const Hg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class I3{scrapeMotionValuesFromProps(a,r,o){return{}}constructor({parent:a,props:r,presenceContext:o,reducedMotionConfig:c,blockInitialAnimation:f,visualState:d},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Cd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const b=xe.now();this.renderScheduledAt<b&&(this.renderScheduledAt=b,At.render(this.render,!1,!0))};const{latestValues:p,renderState:g}=d;this.latestValues=p,this.baseTarget={...p},this.initialValues=r.initial?{...p}:{},this.renderState=g,this.parent=a,this.props=r,this.presenceContext=o,this.depth=a?a.depth+1:0,this.reducedMotionConfig=c,this.options=m,this.blockInitialAnimation=!!f,this.isControllingVariants=Ml(r),this.isVariantNode=zv(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(a&&a.current);const{willChange:v,...S}=this.scrapeMotionValuesFromProps(r,{},this);for(const b in S){const T=S[b];p[b]!==void 0&&se(T)&&T.set(p[b])}}mount(a){this.current=a,K3.set(a,this),this.projection&&!this.projection.instance&&this.projection.mount(a),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,o)=>this.bindToMotionValue(o,r)),$v.current||Q3(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Kf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),nn(this.notifyUpdate),nn(this.render),this.valueSubscriptions.forEach(a=>a()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const a in this.events)this.events[a].clear();for(const a in this.features){const r=this.features[a];r&&(r.unmount(),r.isMounted=!1)}this.current=null}bindToMotionValue(a,r){this.valueSubscriptions.has(a)&&this.valueSubscriptions.get(a)();const o=qa.has(a);o&&this.onBindTransform&&this.onBindTransform();const c=r.on("change",d=>{this.latestValues[a]=d,this.props.onUpdate&&At.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,a,r)),this.valueSubscriptions.set(a,()=>{c(),f&&f(),r.owner&&r.stop()})}sortNodePosition(a){return!this.current||!this.sortInstanceNodePosition||this.type!==a.type?0:this.sortInstanceNodePosition(this.current,a.current)}updateFeatures(){let a="animation";for(a in Na){const r=Na[a];if(!r)continue;const{isEnabled:o,Feature:c}=r;if(!this.features[a]&&c&&o(this.props)&&(this.features[a]=new c(this)),this.features[a]){const f=this.features[a];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Yt()}getStaticValue(a){return this.latestValues[a]}setStaticValue(a,r){this.latestValues[a]=r}update(a,r){(a.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=a,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let o=0;o<Hg.length;o++){const c=Hg[o];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const f="on"+c,d=a[f];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=Z3(this,this.scrapeMotionValuesFromProps(a,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(a){return this.props.variants?this.props.variants[a]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(a){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(a),()=>r.variantChildren.delete(a)}addValue(a,r){const o=this.values.get(a);r!==o&&(o&&this.removeValue(a),this.bindToMotionValue(a,r),this.values.set(a,r),this.latestValues[a]=r.get())}removeValue(a){this.values.delete(a);const r=this.valueSubscriptions.get(a);r&&(r(),this.valueSubscriptions.delete(a)),delete this.latestValues[a],this.removeValueFromRenderState(a,this.renderState)}hasValue(a){return this.values.has(a)}getValue(a,r){if(this.props.values&&this.props.values[a])return this.props.values[a];let o=this.values.get(a);return o===void 0&&r!==void 0&&(o=tn(r===null?void 0:r,{owner:this}),this.addValue(a,o)),o}readValue(a,r){let o=this.latestValues[a]!==void 0||!this.current?this.latestValues[a]:this.getBaseTargetFromProps(this.props,a)??this.readValueFromInstance(this.current,a,this.options);return o!=null&&(typeof o=="string"&&(L1(o)||U1(o))?o=parseFloat(o):!o3(o)&&oi.test(r)&&(o=wv(a,r)),this.setBaseTarget(a,se(o)?o.get():o)),se(o)?o.get():o}setBaseTarget(a,r){this.baseTarget[a]=r}getBaseTarget(a){const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const f=Gd(this.props,r,this.presenceContext?.custom);f&&(o=f[a])}if(r&&o!==void 0)return o;const c=this.getBaseTargetFromProps(this.props,a);return c!==void 0&&!se(c)?c:this.initialValues[a]!==void 0&&o===void 0?void 0:this.baseTarget[a]}on(a,r){return this.events[a]||(this.events[a]=new gd),this.events[a].add(r)}notify(a,...r){this.events[a]&&this.events[a].notify(...r)}scheduleRenderMicrotask(){Od.render(this.render)}}class Qv extends I3{constructor(){super(...arguments),this.KeyframeResolver=Hw}sortInstanceNodePosition(a,r){return a.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(a,r){return a.style?a.style[r]:void 0}removeValueFromRenderState(a,{vars:r,style:o}){delete r[a],delete o[a]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:a}=this.props;se(a)&&(this.childSubscription=a.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function Kv(n,{style:a,vars:r},o,c){const f=n.style;let d;for(d in a)f[d]=a[d];c?.applyProjectionStyles(f,o);for(d in r)f.setProperty(d,r[d])}function W3(n){return window.getComputedStyle(n)}class J3 extends Qv{constructor(){super(...arguments),this.type="html",this.renderInstance=Kv}readValueFromInstance(a,r){if(qa.has(r))return this.projection?.isProjecting?Uf(r):sw(a,r);{const o=W3(a),c=(xd(r)?o.getPropertyValue(r):o[r])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(a,{transformPagePoint:r}){return Xv(a,r)}build(a,r,o){Hd(a,r,o.transformTemplate)}scrapeMotionValuesFromProps(a,r,o){return Yd(a,r,o)}}const Zv=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function tA(n,a,r,o){Kv(n,a,void 0,o);for(const c in a.attrs)n.setAttribute(Zv.has(c)?c:qd(c),a.attrs[c])}class eA extends Qv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Yt}getBaseTargetFromProps(a,r){return a[r]}readValueFromInstance(a,r){if(qa.has(r)){const o=Sv(r);return o&&o.default||0}return r=Zv.has(r)?r:qd(r),a.getAttribute(r)}scrapeMotionValuesFromProps(a,r,o){return Hv(a,r,o)}build(a,r,o){Bv(a,r,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(a,r,o,c){tA(a,r,o,c)}mount(a){this.isSVGTag=Nv(a.tagName),super.mount(a)}}const nA=(n,a)=>Fd(n)?new eA(a):new J3(a,{allowProjection:n!==O.Fragment});function dr(n,a,r){const o=n.getProps();return Gd(o,a,r!==void 0?r:o.custom,n)}const Zf=n=>Array.isArray(n);function iA(n,a,r){n.hasValue(a)?n.getValue(a).set(r):n.addValue(a,tn(r))}function aA(n){return Zf(n)?n[n.length-1]||0:n}function sA(n,a){const r=dr(n,a);let{transitionEnd:o={},transition:c={},...f}=r||{};f={...f,...o};for(const d in f){const m=aA(f[d]);iA(n,d,m)}}function rA(n){return!!(se(n)&&n.add)}function If(n,a){const r=n.getValue("willChange");if(rA(r))return r.add(a);if(!r&&zn.WillChange){const o=new zn.WillChange("auto");n.addValue("willChange",o),o.add(a)}}function Iv(n){return n.props[Uv]}const oA=n=>n!==null;function lA(n,{repeat:a,repeatType:r="loop"},o){const c=n.filter(oA),f=a&&r!=="loop"&&a%2===1?0:c.length-1;return c[f]}const cA={type:"spring",stiffness:500,damping:25,restSpeed:10},uA=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),fA={type:"keyframes",duration:.8},dA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},hA=(n,{keyframes:a})=>a.length>2?fA:qa.has(n)?n.startsWith("scale")?uA(a[1]):cA:dA;function pA({when:n,delay:a,delayChildren:r,staggerChildren:o,staggerDirection:c,repeat:f,repeatType:d,repeatDelay:m,from:p,elapsed:g,...v}){return!!Object.keys(v).length}const Pd=(n,a,r,o={},c,f)=>d=>{const m=Rd(o,n)||{},p=m.delay||o.delay||0;let{elapsed:g=0}=o;g=g-fn(p);const v={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:a.getVelocity(),...m,delay:-g,onUpdate:b=>{a.set(b),m.onUpdate&&m.onUpdate(b)},onComplete:()=>{d(),m.onComplete&&m.onComplete()},name:n,motionValue:a,element:f?void 0:c};pA(m)||Object.assign(v,hA(n,v)),v.duration&&(v.duration=fn(v.duration)),v.repeatDelay&&(v.repeatDelay=fn(v.repeatDelay)),v.from!==void 0&&(v.keyframes[0]=v.from);let S=!1;if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(Pf(v),v.delay===0&&(S=!0)),(zn.instantAnimations||zn.skipAnimations)&&(S=!0,Pf(v),v.delay=0),v.allowFlatten=!m.type&&!m.ease,S&&!f&&a.get()!==void 0){const b=lA(v.keyframes,m);if(b!==void 0){At.update(()=>{v.onUpdate(b),v.onComplete()});return}}return m.isSync?new El(v):new Dw(v)};function mA({protectedKeys:n,needsAnimating:a},r){const o=n.hasOwnProperty(r)&&a[r]!==!0;return a[r]=!1,o}function Wv(n,a,{delay:r=0,transitionOverride:o,type:c}={}){let{transition:f=n.getDefaultTransition(),transitionEnd:d,...m}=a;o&&(f=o);const p=[],g=c&&n.animationState&&n.animationState.getState()[c];for(const v in m){const S=n.getValue(v,n.latestValues[v]??null),b=m[v];if(b===void 0||g&&mA(g,v))continue;const T={delay:r,...Rd(f||{},v)},M=S.get();if(M!==void 0&&!S.isAnimating&&!Array.isArray(b)&&b===M&&!T.velocity)continue;let B=!1;if(window.MotionHandoffAnimation){const F=Iv(n);if(F){const P=window.MotionHandoffAnimation(F,v,At);P!==null&&(T.startTime=P,B=!0)}}If(n,v),S.start(Pd(v,S,b,n.shouldReduceMotion&&vv.has(v)?{type:!1}:T,n,B));const U=S.animation;U&&p.push(U)}return d&&Promise.all(p).then(()=>{At.update(()=>{d&&sA(n,d)})}),p}function Wf(n,a,r={}){const o=dr(n,a,r.type==="exit"?n.presenceContext?.custom:void 0);let{transition:c=n.getDefaultTransition()||{}}=o||{};r.transitionOverride&&(c=r.transitionOverride);const f=o?()=>Promise.all(Wv(n,o,r)):()=>Promise.resolve(),d=n.variantChildren&&n.variantChildren.size?(p=0)=>{const{delayChildren:g=0,staggerChildren:v,staggerDirection:S}=c;return gA(n,a,p,g,v,S,r)}:()=>Promise.resolve(),{when:m}=c;if(m){const[p,g]=m==="beforeChildren"?[f,d]:[d,f];return p().then(()=>g())}else return Promise.all([f(),d(r.delay)])}function gA(n,a,r=0,o=0,c=0,f=1,d){const m=[],p=n.variantChildren.size,g=(p-1)*c,v=typeof o=="function",S=v?b=>o(b,p):f===1?(b=0)=>b*c:(b=0)=>g-b*c;return Array.from(n.variantChildren).sort(yA).forEach((b,T)=>{b.notify("AnimationStart",a),m.push(Wf(b,a,{...d,delay:r+(v?0:o)+S(T)}).then(()=>b.notify("AnimationComplete",a)))}),Promise.all(m)}function yA(n,a){return n.sortNodePosition(a)}function vA(n,a,r={}){n.notify("AnimationStart",a);let o;if(Array.isArray(a)){const c=a.map(f=>Wf(n,f,r));o=Promise.all(c)}else if(typeof a=="string")o=Wf(n,a,r);else{const c=typeof a=="function"?dr(n,a,r.custom):a;o=Promise.all(Wv(n,c,r))}return o.then(()=>{n.notify("AnimationComplete",a)})}function Jv(n,a){if(!Array.isArray(a))return!1;const r=a.length;if(r!==n.length)return!1;for(let o=0;o<r;o++)if(a[o]!==n[o])return!1;return!0}const bA=Ld.length;function tb(n){if(!n)return;if(!n.isControllingVariants){const r=n.parent?tb(n.parent)||{}:{};return n.props.initial!==void 0&&(r.initial=n.props.initial),r}const a={};for(let r=0;r<bA;r++){const o=Ld[r],c=n.props[o];(ur(c)||c===!1)&&(a[o]=c)}return a}const xA=[...Nd].reverse(),SA=Nd.length;function wA(n){return a=>Promise.all(a.map(({animation:r,options:o})=>vA(n,r,o)))}function AA(n){let a=wA(n),r=Ug(),o=!0;const c=p=>(g,v)=>{const S=dr(n,v,p==="exit"?n.presenceContext?.custom:void 0);if(S){const{transition:b,transitionEnd:T,...M}=S;g={...g,...M,...T}}return g};function f(p){a=p(n)}function d(p){const{props:g}=n,v=tb(n.parent)||{},S=[],b=new Set;let T={},M=1/0;for(let U=0;U<SA;U++){const F=xA[U],P=r[F],L=g[F]!==void 0?g[F]:v[F],Z=ur(L),G=F===p?P.isActive:null;G===!1&&(M=U);let $=L===v[F]&&L!==g[F]&&Z;if($&&o&&n.manuallyAnimateOnMount&&($=!1),P.protectedKeys={...T},!P.isActive&&G===null||!L&&!P.prevProp||Dl(L)||typeof L=="boolean")continue;const _=TA(P.prevProp,L);let X=_||F===p&&P.isActive&&!$&&Z||U>M&&Z,K=!1;const ct=Array.isArray(L)?L:[L];let Vt=ct.reduce(c(F),{});G===!1&&(Vt={});const{prevResolvedValues:Ut={}}=P,$e={...Ut,...Vt},ze=Q=>{X=!0,b.has(Q)&&(K=!0,b.delete(Q)),P.needsAnimating[Q]=!0;const et=n.getValue(Q);et&&(et.liveStyle=!1)};for(const Q in $e){const et=Vt[Q],ut=Ut[Q];if(T.hasOwnProperty(Q))continue;let E=!1;Zf(et)&&Zf(ut)?E=!Jv(et,ut):E=et!==ut,E?et!=null?ze(Q):b.add(Q):et!==void 0&&b.has(Q)?ze(Q):P.protectedKeys[Q]=!0}P.prevProp=L,P.prevResolvedValues=Vt,P.isActive&&(T={...T,...Vt}),o&&n.blockInitialAnimation&&(X=!1),X&&(!($&&_)||K)&&S.push(...ct.map(Q=>({animation:Q,options:{type:F}})))}if(b.size){const U={};if(typeof g.initial!="boolean"){const F=dr(n,Array.isArray(g.initial)?g.initial[0]:g.initial);F&&F.transition&&(U.transition=F.transition)}b.forEach(F=>{const P=n.getBaseTarget(F),L=n.getValue(F);L&&(L.liveStyle=!0),U[F]=P??null}),S.push({animation:U})}let B=!!S.length;return o&&(g.initial===!1||g.initial===g.animate)&&!n.manuallyAnimateOnMount&&(B=!1),o=!1,B?a(S):Promise.resolve()}function m(p,g){if(r[p].isActive===g)return Promise.resolve();n.variantChildren?.forEach(S=>S.animationState?.setActive(p,g)),r[p].isActive=g;const v=d(p);for(const S in r)r[S].protectedKeys={};return v}return{animateChanges:d,setActive:m,setAnimateFunction:f,getState:()=>r,reset:()=>{r=Ug(),o=!0}}}function TA(n,a){return typeof a=="string"?a!==n:Array.isArray(a)?!Jv(a,n):!1}function Mi(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ug(){return{animate:Mi(!0),whileInView:Mi(),whileHover:Mi(),whileTap:Mi(),whileDrag:Mi(),whileFocus:Mi(),exit:Mi()}}class li{constructor(a){this.isMounted=!1,this.node=a}update(){}}class EA extends li{constructor(a){super(a),a.animationState||(a.animationState=AA(a))}updateAnimationControlsSubscription(){const{animate:a}=this.node.getProps();Dl(a)&&(this.unmountControls=a.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:a}=this.node.getProps(),{animate:r}=this.node.prevProps||{};a!==r&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let jA=0;class DA extends li{constructor(){super(...arguments),this.id=jA++}update(){if(!this.node.presenceContext)return;const{isPresent:a,onExitComplete:r}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||a===o)return;const c=this.node.animationState.setActive("exit",!a);r&&!a&&c.then(()=>{r(this.id)})}mount(){const{register:a,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),a&&(this.unmount=a(this.id))}unmount(){}}const MA={animation:{Feature:EA},exit:{Feature:DA}};function hr(n,a,r,o={passive:!0}){return n.addEventListener(a,r,o),()=>n.removeEventListener(a,r)}function br(n){return{point:{x:n.pageX,y:n.pageY}}}const CA=n=>a=>Bd(a)&&n(a,br(a));function nr(n,a,r,o){return hr(n,a,CA(r),o)}const eb=1e-4,RA=1-eb,_A=1+eb,nb=.01,zA=0-nb,kA=0+nb;function pe(n){return n.max-n.min}function OA(n,a,r){return Math.abs(n-a)<=r}function Fg(n,a,r,o=.5){n.origin=o,n.originPoint=Bt(a.min,a.max,n.origin),n.scale=pe(r)/pe(a),n.translate=Bt(r.min,r.max,n.origin)-n.originPoint,(n.scale>=RA&&n.scale<=_A||isNaN(n.scale))&&(n.scale=1),(n.translate>=zA&&n.translate<=kA||isNaN(n.translate))&&(n.translate=0)}function ir(n,a,r,o){Fg(n.x,a.x,r.x,o?o.originX:void 0),Fg(n.y,a.y,r.y,o?o.originY:void 0)}function Gg(n,a,r){n.min=r.min+a.min,n.max=n.min+pe(a)}function BA(n,a,r){Gg(n.x,a.x,r.x),Gg(n.y,a.y,r.y)}function Yg(n,a,r){n.min=a.min-r.min,n.max=n.min+pe(a)}function ar(n,a,r){Yg(n.x,a.x,r.x),Yg(n.y,a.y,r.y)}function qe(n){return[n("x"),n("y")]}const ib=({current:n})=>n?n.ownerDocument.defaultView:null,qg=(n,a)=>Math.abs(n-a);function VA(n,a){const r=qg(n.x,a.x),o=qg(n.y,a.y);return Math.sqrt(r**2+o**2)}class ab{constructor(a,r,{transformPagePoint:o,contextWindow:c=window,dragSnapToOrigin:f=!1,distanceThreshold:d=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=lf(this.lastMoveEventInfo,this.history),T=this.startEvent!==null,M=VA(b.offset,{x:0,y:0})>=this.distanceThreshold;if(!T&&!M)return;const{point:B}=b,{timestamp:U}=ne;this.history.push({...B,timestamp:U});const{onStart:F,onMove:P}=this.handlers;T||(F&&F(this.lastMoveEvent,b),this.startEvent=this.lastMoveEvent),P&&P(this.lastMoveEvent,b)},this.handlePointerMove=(b,T)=>{this.lastMoveEvent=b,this.lastMoveEventInfo=of(T,this.transformPagePoint),At.update(this.updatePoint,!0)},this.handlePointerUp=(b,T)=>{this.end();const{onEnd:M,onSessionEnd:B,resumeAnimation:U}=this.handlers;if(this.dragSnapToOrigin&&U&&U(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const F=lf(b.type==="pointercancel"?this.lastMoveEventInfo:of(T,this.transformPagePoint),this.history);this.startEvent&&M&&M(b,F),B&&B(b,F)},!Bd(a))return;this.dragSnapToOrigin=f,this.handlers=r,this.transformPagePoint=o,this.distanceThreshold=d,this.contextWindow=c||window;const m=br(a),p=of(m,this.transformPagePoint),{point:g}=p,{timestamp:v}=ne;this.history=[{...g,timestamp:v}];const{onSessionStart:S}=r;S&&S(a,lf(p,this.history)),this.removeListeners=mr(nr(this.contextWindow,"pointermove",this.handlePointerMove),nr(this.contextWindow,"pointerup",this.handlePointerUp),nr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(a){this.handlers=a}end(){this.removeListeners&&this.removeListeners(),nn(this.updatePoint)}}function of(n,a){return a?{point:a(n.point)}:n}function Pg(n,a){return{x:n.x-a.x,y:n.y-a.y}}function lf({point:n},a){return{point:n,delta:Pg(n,sb(a)),offset:Pg(n,NA(a)),velocity:LA(a,.1)}}function NA(n){return n[0]}function sb(n){return n[n.length-1]}function LA(n,a){if(n.length<2)return{x:0,y:0};let r=n.length-1,o=null;const c=sb(n);for(;r>=0&&(o=n[r],!(c.timestamp-o.timestamp>fn(a)));)r--;if(!o)return{x:0,y:0};const f=dn(c.timestamp-o.timestamp);if(f===0)return{x:0,y:0};const d={x:(c.x-o.x)/f,y:(c.y-o.y)/f};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function HA(n,{min:a,max:r},o){return a!==void 0&&n<a?n=o?Bt(a,n,o.min):Math.max(n,a):r!==void 0&&n>r&&(n=o?Bt(r,n,o.max):Math.min(n,r)),n}function Xg(n,a,r){return{min:a!==void 0?n.min+a:void 0,max:r!==void 0?n.max+r-(n.max-n.min):void 0}}function UA(n,{top:a,left:r,bottom:o,right:c}){return{x:Xg(n.x,r,c),y:Xg(n.y,a,o)}}function $g(n,a){let r=a.min-n.min,o=a.max-n.max;return a.max-a.min<n.max-n.min&&([r,o]=[o,r]),{min:r,max:o}}function FA(n,a){return{x:$g(n.x,a.x),y:$g(n.y,a.y)}}function GA(n,a){let r=.5;const o=pe(n),c=pe(a);return c>o?r=Va(a.min,a.max-o,n.min):o>c&&(r=Va(n.min,n.max-c,a.min)),pn(0,1,r)}function YA(n,a){const r={};return a.min!==void 0&&(r.min=a.min-n.min),a.max!==void 0&&(r.max=a.max-n.min),r}const Jf=.35;function qA(n=Jf){return n===!1?n=0:n===!0&&(n=Jf),{x:Qg(n,"left","right"),y:Qg(n,"top","bottom")}}function Qg(n,a,r){return{min:Kg(n,a),max:Kg(n,r)}}function Kg(n,a){return typeof n=="number"?n:n[a]||0}const PA=new WeakMap;class XA{constructor(a){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Yt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=a}start(a,{snapToCursor:r=!1,distanceThreshold:o}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const f=S=>{const{dragSnapToOrigin:b}=this.getProps();b?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(br(S).point)},d=(S,b)=>{const{drag:T,dragPropagation:M,onDragStart:B}=this.getProps();if(T&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Gw(T),!this.openDragLock))return;this.latestPointerEvent=S,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),qe(F=>{let P=this.getAxisMotionValue(F).get()||0;if(hn.test(P)){const{projection:L}=this.visualElement;if(L&&L.layout){const Z=L.layout.layoutBox[F];Z&&(P=pe(Z)*(parseFloat(P)/100))}}this.originPoint[F]=P}),B&&At.postRender(()=>B(S,b)),If(this.visualElement,"transform");const{animationState:U}=this.visualElement;U&&U.setActive("whileDrag",!0)},m=(S,b)=>{this.latestPointerEvent=S,this.latestPanInfo=b;const{dragPropagation:T,dragDirectionLock:M,onDirectionLock:B,onDrag:U}=this.getProps();if(!T&&!this.openDragLock)return;const{offset:F}=b;if(M&&this.currentDirection===null){this.currentDirection=$A(F),this.currentDirection!==null&&B&&B(this.currentDirection);return}this.updateAxis("x",b.point,F),this.updateAxis("y",b.point,F),this.visualElement.render(),U&&U(S,b)},p=(S,b)=>{this.latestPointerEvent=S,this.latestPanInfo=b,this.stop(S,b),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>qe(S=>this.getAnimationState(S)==="paused"&&this.getAxisMotionValue(S).animation?.play()),{dragSnapToOrigin:v}=this.getProps();this.panSession=new ab(a,{onSessionStart:f,onStart:d,onMove:m,onSessionEnd:p,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:v,distanceThreshold:o,contextWindow:ib(this.visualElement)})}stop(a,r){const o=a||this.latestPointerEvent,c=r||this.latestPanInfo,f=this.isDragging;if(this.cancel(),!f||!c||!o)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:m}=this.getProps();m&&At.postRender(()=>m(o,c))}cancel(){this.isDragging=!1;const{projection:a,animationState:r}=this.visualElement;a&&(a.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(a,r,o){const{drag:c}=this.getProps();if(!o||!Uo(a,c,this.currentDirection))return;const f=this.getAxisMotionValue(a);let d=this.originPoint[a]+o[a];this.constraints&&this.constraints[a]&&(d=HA(d,this.constraints[a],this.elastic[a])),f.set(d)}resolveConstraints(){const{dragConstraints:a,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,c=this.constraints;a&&Da(a)?this.constraints||(this.constraints=this.resolveRefConstraints()):a&&o?this.constraints=UA(o.layoutBox,a):this.constraints=!1,this.elastic=qA(r),c!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&qe(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=YA(o.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:a,onMeasureDragConstraints:r}=this.getProps();if(!a||!Da(a))return!1;const o=a.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const f=$3(o,c.root,this.visualElement.getTransformPagePoint());let d=FA(c.layout.layoutBox,f);if(r){const m=r(q3(d));this.hasMutatedConstraints=!!m,m&&(d=Yv(m))}return d}startAnimation(a){const{drag:r,dragMomentum:o,dragElastic:c,dragTransition:f,dragSnapToOrigin:d,onDragTransitionEnd:m}=this.getProps(),p=this.constraints||{},g=qe(v=>{if(!Uo(v,r,this.currentDirection))return;let S=p&&p[v]||{};d&&(S={min:0,max:0});const b=c?200:1e6,T=c?40:1e7,M={type:"inertia",velocity:o?a[v]:0,bounceStiffness:b,bounceDamping:T,timeConstant:750,restDelta:1,restSpeed:10,...f,...S};return this.startAxisValueAnimation(v,M)});return Promise.all(g).then(m)}startAxisValueAnimation(a,r){const o=this.getAxisMotionValue(a);return If(this.visualElement,a),o.start(Pd(a,o,0,r,this.visualElement,!1))}stopAnimation(){qe(a=>this.getAxisMotionValue(a).stop())}pauseAnimation(){qe(a=>this.getAxisMotionValue(a).animation?.pause())}getAnimationState(a){return this.getAxisMotionValue(a).animation?.state}getAxisMotionValue(a){const r=`_drag${a.toUpperCase()}`,o=this.visualElement.getProps(),c=o[r];return c||this.visualElement.getValue(a,(o.initial?o.initial[a]:void 0)||0)}snapToCursor(a){qe(r=>{const{drag:o}=this.getProps();if(!Uo(r,o,this.currentDirection))return;const{projection:c}=this.visualElement,f=this.getAxisMotionValue(r);if(c&&c.layout){const{min:d,max:m}=c.layout.layoutBox[r];f.set(a[r]-Bt(d,m,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:a,dragConstraints:r}=this.getProps(),{projection:o}=this.visualElement;if(!Da(r)||!o||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};qe(d=>{const m=this.getAxisMotionValue(d);if(m&&this.constraints!==!1){const p=m.get();c[d]=GA({min:p,max:p},this.constraints[d])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),qe(d=>{if(!Uo(d,a,null))return;const m=this.getAxisMotionValue(d),{min:p,max:g}=this.constraints[d];m.set(Bt(p,g,c[d]))})}addListeners(){if(!this.visualElement.current)return;PA.set(this.visualElement,this);const a=this.visualElement.current,r=nr(a,"pointerdown",p=>{const{drag:g,dragListener:v=!0}=this.getProps();g&&v&&this.start(p)}),o=()=>{const{dragConstraints:p}=this.getProps();Da(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,f=c.addEventListener("measure",o);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),At.read(o);const d=hr(window,"resize",()=>this.scalePositionWithinConstraints()),m=c.addEventListener("didUpdate",({delta:p,hasLayoutChanged:g})=>{this.isDragging&&g&&(qe(v=>{const S=this.getAxisMotionValue(v);S&&(this.originPoint[v]+=p[v].translate,S.set(S.get()+p[v].translate))}),this.visualElement.render())});return()=>{d(),r(),f(),m&&m()}}getProps(){const a=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:o=!1,dragPropagation:c=!1,dragConstraints:f=!1,dragElastic:d=Jf,dragMomentum:m=!0}=a;return{...a,drag:r,dragDirectionLock:o,dragPropagation:c,dragConstraints:f,dragElastic:d,dragMomentum:m}}}function Uo(n,a,r){return(a===!0||a===n)&&(r===null||r===n)}function $A(n,a=10){let r=null;return Math.abs(n.y)>a?r="y":Math.abs(n.x)>a&&(r="x"),r}class QA extends li{constructor(a){super(a),this.removeGroupControls=Se,this.removeListeners=Se,this.controls=new XA(a)}mount(){const{dragControls:a}=this.node.getProps();a&&(this.removeGroupControls=a.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Se}unmount(){this.removeGroupControls(),this.removeListeners()}}const Zg=n=>(a,r)=>{n&&At.postRender(()=>n(a,r))};class KA extends li{constructor(){super(...arguments),this.removePointerDownListener=Se}onPointerDown(a){this.session=new ab(a,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ib(this.node)})}createPanHandlers(){const{onPanSessionStart:a,onPanStart:r,onPan:o,onPanEnd:c}=this.node.getProps();return{onSessionStart:Zg(a),onStart:Zg(r),onMove:o,onEnd:(f,d)=>{delete this.session,c&&At.postRender(()=>c(f,d))}}}mount(){this.removePointerDownListener=nr(this.node.current,"pointerdown",a=>this.onPointerDown(a))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const sl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Ig(n,a){return a.max===a.min?0:n/(a.max-a.min)*100}const Ps={correct:(n,a)=>{if(!a.target)return n;if(typeof n=="string")if(lt.test(n))n=parseFloat(n);else return n;const r=Ig(n,a.target.x),o=Ig(n,a.target.y);return`${r}% ${o}%`}},ZA={correct:(n,{treeScale:a,projectionDelta:r})=>{const o=n,c=oi.parse(n);if(c.length>5)return o;const f=oi.createTransformer(n),d=typeof c[0]!="number"?1:0,m=r.x.scale*a.x,p=r.y.scale*a.y;c[0+d]/=m,c[1+d]/=p;const g=Bt(m,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=g),typeof c[3+d]=="number"&&(c[3+d]/=g),f(c)}};let Wg=!1;class IA extends O.Component{componentDidMount(){const{visualElement:a,layoutGroup:r,switchLayoutGroup:o,layoutId:c}=this.props,{projection:f}=a;v3(WA),f&&(r.group&&r.group.add(f),o&&o.register&&c&&o.register(f),Wg&&f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,onExitComplete:()=>this.safeToRemove()})),sl.hasEverUpdated=!0}getSnapshotBeforeUpdate(a){const{layoutDependency:r,visualElement:o,drag:c,isPresent:f}=this.props,{projection:d}=o;return d&&(d.isPresent=f,Wg=!0,c||a.layoutDependency!==r||r===void 0||a.isPresent!==f?d.willUpdate():this.safeToRemove(),a.isPresent!==f&&(f?d.promote():d.relegate()||At.postRender(()=>{const m=d.getStack();(!m||!m.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:a}=this.props.visualElement;a&&(a.root.didUpdate(),Od.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:a,layoutGroup:r,switchLayoutGroup:o}=this.props,{projection:c}=a;c&&(c.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(c),o&&o.deregister&&o.deregister(c))}safeToRemove(){const{safeToRemove:a}=this.props;a&&a()}render(){return null}}function rb(n){const[a,r]=Cv(),o=O.useContext(fd);return h.jsx(IA,{...n,layoutGroup:o,switchLayoutGroup:O.useContext(Fv),isPresent:a,safeToRemove:r})}const WA={borderRadius:{...Ps,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ps,borderTopRightRadius:Ps,borderBottomLeftRadius:Ps,borderBottomRightRadius:Ps,boxShadow:ZA};function JA(n,a,r){const o=se(n)?n:tn(n);return o.start(Pd("",o,a,r)),o.animation}const tT=(n,a)=>n.depth-a.depth;class eT{constructor(){this.children=[],this.isDirty=!1}add(a){hd(this.children,a),this.isDirty=!0}remove(a){pd(this.children,a),this.isDirty=!0}forEach(a){this.isDirty&&this.children.sort(tT),this.isDirty=!1,this.children.forEach(a)}}function nT(n,a){const r=xe.now(),o=({timestamp:c})=>{const f=c-r;f>=a&&(nn(o),n(f-a))};return At.setup(o,!0),()=>nn(o)}const ob=["TopLeft","TopRight","BottomLeft","BottomRight"],iT=ob.length,Jg=n=>typeof n=="string"?parseFloat(n):n,ty=n=>typeof n=="number"||lt.test(n);function aT(n,a,r,o,c,f){c?(n.opacity=Bt(0,r.opacity??1,sT(o)),n.opacityExit=Bt(a.opacity??1,0,rT(o))):f&&(n.opacity=Bt(a.opacity??1,r.opacity??1,o));for(let d=0;d<iT;d++){const m=`border${ob[d]}Radius`;let p=ey(a,m),g=ey(r,m);if(p===void 0&&g===void 0)continue;p||(p=0),g||(g=0),p===0||g===0||ty(p)===ty(g)?(n[m]=Math.max(Bt(Jg(p),Jg(g),o),0),(hn.test(g)||hn.test(p))&&(n[m]+="%")):n[m]=g}(a.rotate||r.rotate)&&(n.rotate=Bt(a.rotate||0,r.rotate||0,o))}function ey(n,a){return n[a]!==void 0?n[a]:n.borderRadius}const sT=lb(0,.5,$1),rT=lb(.5,.95,Se);function lb(n,a,r){return o=>o<n?0:o>a?1:r(Va(n,a,o))}function ny(n,a){n.min=a.min,n.max=a.max}function Ye(n,a){ny(n.x,a.x),ny(n.y,a.y)}function iy(n,a){n.translate=a.translate,n.scale=a.scale,n.originPoint=a.originPoint,n.origin=a.origin}function ay(n,a,r,o,c){return n-=a,n=ml(n,1/r,o),c!==void 0&&(n=ml(n,1/c,o)),n}function oT(n,a=0,r=1,o=.5,c,f=n,d=n){if(hn.test(a)&&(a=parseFloat(a),a=Bt(d.min,d.max,a/100)-d.min),typeof a!="number")return;let m=Bt(f.min,f.max,o);n===f&&(m-=a),n.min=ay(n.min,a,r,m,c),n.max=ay(n.max,a,r,m,c)}function sy(n,a,[r,o,c],f,d){oT(n,a[r],a[o],a[c],a.scale,f,d)}const lT=["x","scaleX","originX"],cT=["y","scaleY","originY"];function ry(n,a,r,o){sy(n.x,a,lT,r?r.x:void 0,o?o.x:void 0),sy(n.y,a,cT,r?r.y:void 0,o?o.y:void 0)}function oy(n){return n.translate===0&&n.scale===1}function cb(n){return oy(n.x)&&oy(n.y)}function ly(n,a){return n.min===a.min&&n.max===a.max}function uT(n,a){return ly(n.x,a.x)&&ly(n.y,a.y)}function cy(n,a){return Math.round(n.min)===Math.round(a.min)&&Math.round(n.max)===Math.round(a.max)}function ub(n,a){return cy(n.x,a.x)&&cy(n.y,a.y)}function uy(n){return pe(n.x)/pe(n.y)}function fy(n,a){return n.translate===a.translate&&n.scale===a.scale&&n.originPoint===a.originPoint}class fT{constructor(){this.members=[]}add(a){hd(this.members,a),a.scheduleRender()}remove(a){if(pd(this.members,a),a===this.prevLead&&(this.prevLead=void 0),a===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(a){const r=this.members.findIndex(c=>a===c);if(r===0)return!1;let o;for(let c=r;c>=0;c--){const f=this.members[c];if(f.isPresent!==!1){o=f;break}}return o?(this.promote(o),!0):!1}promote(a,r){const o=this.lead;if(a!==o&&(this.prevLead=o,this.lead=a,a.show(),o)){o.instance&&o.scheduleRender(),a.scheduleRender(),a.resumeFrom=o,r&&(a.resumeFrom.preserveOpacity=!0),o.snapshot&&(a.snapshot=o.snapshot,a.snapshot.latestValues=o.animationValues||o.latestValues),a.root&&a.root.isUpdating&&(a.isLayoutDirty=!0);const{crossfade:c}=a.options;c===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(a=>{const{options:r,resumingFrom:o}=a;r.onExitComplete&&r.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(a=>{a.instance&&a.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function dT(n,a,r){let o="";const c=n.x.translate/a.x,f=n.y.translate/a.y,d=r?.z||0;if((c||f||d)&&(o=`translate3d(${c}px, ${f}px, ${d}px) `),(a.x!==1||a.y!==1)&&(o+=`scale(${1/a.x}, ${1/a.y}) `),r){const{transformPerspective:g,rotate:v,rotateX:S,rotateY:b,skewX:T,skewY:M}=r;g&&(o=`perspective(${g}px) ${o}`),v&&(o+=`rotate(${v}deg) `),S&&(o+=`rotateX(${S}deg) `),b&&(o+=`rotateY(${b}deg) `),T&&(o+=`skewX(${T}deg) `),M&&(o+=`skewY(${M}deg) `)}const m=n.x.scale*a.x,p=n.y.scale*a.y;return(m!==1||p!==1)&&(o+=`scale(${m}, ${p})`),o||"none"}const cf=["","X","Y","Z"],hT=1e3;let pT=0;function uf(n,a,r,o){const{latestValues:c}=a;c[n]&&(r[n]=c[n],a.setStaticValue(n,0),o&&(o[n]=0))}function fb(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:a}=n.options;if(!a)return;const r=Iv(a);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:c,layoutId:f}=n.options;window.MotionCancelOptimisedAnimation(r,"transform",At,!(c||f))}const{parent:o}=n;o&&!o.hasCheckedOptimisedAppear&&fb(o)}function db({attachResizeListener:n,defaultParent:a,measureScroll:r,checkIsScrollRoot:o,resetTransform:c}){return class{constructor(d={},m=a?.()){this.id=pT++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(yT),this.nodes.forEach(ST),this.nodes.forEach(wT),this.nodes.forEach(vT)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=m?m.root||m:this,this.path=m?[...m.path,m]:[],this.parent=m,this.depth=m?m.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new eT)}addEventListener(d,m){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new gd),this.eventHandlers.get(d).add(m)}notifyListeners(d,...m){const p=this.eventHandlers.get(d);p&&p.notify(...m)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Vd(d)&&!i3(d),this.instance=d;const{layoutId:m,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||m)&&(this.isLayoutDirty=!0),n){let v,S=0;const b=()=>this.root.updateBlockedByResize=!1;At.read(()=>{S=window.innerWidth}),n(d,()=>{const T=window.innerWidth;T!==S&&(S=T,this.root.updateBlockedByResize=!0,v&&v(),v=nT(b,250),sl.hasAnimatedSinceResize&&(sl.hasAnimatedSinceResize=!1,this.nodes.forEach(py)))})}m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&g&&(m||p)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:S,hasRelativeLayoutChanged:b,layout:T})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||g.getDefaultTransition()||DT,{onLayoutAnimationStart:B,onLayoutAnimationComplete:U}=g.getProps(),F=!this.targetLayout||!ub(this.targetLayout,T),P=!S&&b;if(this.options.layoutRoot||this.resumeFrom||P||S&&(F||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const L={...Rd(M,"layout"),onPlay:B,onComplete:U};(g.shouldReduceMotion||this.options.layoutRoot)&&(L.delay=0,L.type=!1),this.startAnimation(L),this.setAnimationOrigin(v,P)}else S||py(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=T})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),nn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(AT),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&fb(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const S=this.path[v];S.shouldResetTransform=!0,S.updateScroll("snapshot"),S.options.layoutRoot&&S.willUpdate(!1)}const{layoutId:m,layout:p}=this.options;if(m===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(dy);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(hy);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(xT),this.nodes.forEach(mT),this.nodes.forEach(gT)):this.nodes.forEach(hy),this.clearAllSnapshots();const m=xe.now();ne.delta=pn(0,1e3/60,m-ne.timestamp),ne.timestamp=m,ne.isProcessing=!0,Wu.update.process(ne),Wu.preRender.process(ne),Wu.render.process(ne),ne.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Od.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(bT),this.sharedNodes.forEach(TT)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,At.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){At.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!pe(this.snapshot.measuredBox.x)&&!pe(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Yt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:m}=this.options;m&&m.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let m=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(m=!1),m&&this.instance){const p=o(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,m=this.projectionDelta&&!cb(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,v=g!==this.prevTransformTemplateValue;d&&this.instance&&(m||Ci(this.latestValues)||v)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const m=this.measurePageBox();let p=this.removeElementScroll(m);return d&&(p=this.removeTransform(p)),MT(p),{animationId:this.root.animationId,measuredBox:m,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:d}=this.options;if(!d)return Yt();const m=d.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(CT))){const{scroll:g}=this.root;g&&(Ma(m.x,g.offset.x),Ma(m.y,g.offset.y))}return m}removeElementScroll(d){const m=Yt();if(Ye(m,d),this.scroll?.wasRoot)return m;for(let p=0;p<this.path.length;p++){const g=this.path[p],{scroll:v,options:S}=g;g!==this.root&&v&&S.layoutScroll&&(v.wasRoot&&Ye(m,d),Ma(m.x,v.offset.x),Ma(m.y,v.offset.y))}return m}applyTransform(d,m=!1){const p=Yt();Ye(p,d);for(let g=0;g<this.path.length;g++){const v=this.path[g];!m&&v.options.layoutScroll&&v.scroll&&v!==v.root&&Ca(p,{x:-v.scroll.offset.x,y:-v.scroll.offset.y}),Ci(v.latestValues)&&Ca(p,v.latestValues)}return Ci(this.latestValues)&&Ca(p,this.latestValues),p}removeTransform(d){const m=Yt();Ye(m,d);for(let p=0;p<this.path.length;p++){const g=this.path[p];if(!g.instance||!Ci(g.latestValues))continue;$f(g.latestValues)&&g.updateSnapshot();const v=Yt(),S=g.measurePageBox();Ye(v,S),ry(m,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,v)}return Ci(this.latestValues)&&ry(m,this.latestValues),m}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ne.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){const m=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=m.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=m.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=m.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==m;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:S}=this.options;if(!(!this.layout||!(v||S))){if(this.resolvedRelativeTargetAt=ne.timestamp,!this.targetDelta&&!this.relativeTarget){const b=this.getClosestProjectingParent();b&&b.layout&&this.animationProgress!==1?(this.relativeParent=b,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Yt(),this.relativeTargetOrigin=Yt(),ar(this.relativeTargetOrigin,this.layout.layoutBox,b.layout.layoutBox),Ye(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Yt(),this.targetWithTransforms=Yt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),BA(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ye(this.target,this.layout.layoutBox),Pv(this.target,this.targetDelta)):Ye(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const b=this.getClosestProjectingParent();b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?(this.relativeParent=b,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Yt(),this.relativeTargetOrigin=Yt(),ar(this.relativeTargetOrigin,this.target,b.target),Ye(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||$f(this.parent.latestValues)||qv(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const d=this.getLead(),m=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(p=!1),m&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===ne.timestamp&&(p=!1),p)return;const{layout:g,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||v))return;Ye(this.layoutCorrected,this.layout.layoutBox);const S=this.treeScale.x,b=this.treeScale.y;X3(this.layoutCorrected,this.treeScale,this.path,m),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=Yt());const{target:T}=d;if(!T){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(iy(this.prevProjectionDelta.x,this.projectionDelta.x),iy(this.prevProjectionDelta.y,this.projectionDelta.y)),ir(this.projectionDelta,this.layoutCorrected,T,this.latestValues),(this.treeScale.x!==S||this.treeScale.y!==b||!fy(this.projectionDelta.x,this.prevProjectionDelta.x)||!fy(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",T))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){if(this.options.visualElement?.scheduleRender(),d){const m=this.getStack();m&&m.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ra(),this.projectionDelta=Ra(),this.projectionDeltaWithTransform=Ra()}setAnimationOrigin(d,m=!1){const p=this.snapshot,g=p?p.latestValues:{},v={...this.latestValues},S=Ra();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!m;const b=Yt(),T=p?p.source:void 0,M=this.layout?this.layout.source:void 0,B=T!==M,U=this.getStack(),F=!U||U.members.length<=1,P=!!(B&&!F&&this.options.crossfade===!0&&!this.path.some(jT));this.animationProgress=0;let L;this.mixTargetDelta=Z=>{const G=Z/1e3;my(S.x,d.x,G),my(S.y,d.y,G),this.setTargetDelta(S),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ar(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox),ET(this.relativeTarget,this.relativeTargetOrigin,b,G),L&&uT(this.relativeTarget,L)&&(this.isProjectionDirty=!1),L||(L=Yt()),Ye(L,this.relativeTarget)),B&&(this.animationValues=v,aT(v,g,this.latestValues,G,P,F)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=G},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(nn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=At.update(()=>{sl.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=tn(0)),this.currentAnimation=JA(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:m=>{this.mixTargetDelta(m),d.onUpdate&&d.onUpdate(m)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(hT),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:m,target:p,layout:g,latestValues:v}=d;if(!(!m||!p||!g)){if(this!==d&&this.layout&&g&&hb(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||Yt();const S=pe(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+S;const b=pe(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+b}Ye(m,p),Ca(m,v),ir(this.projectionDeltaWithTransform,this.layoutCorrected,m,v)}}registerSharedNode(d,m){this.sharedNodes.has(d)||this.sharedNodes.set(d,new fT),this.sharedNodes.get(d).add(m);const g=m.options.initialPromotionConfig;m.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(m):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){const{layoutId:d}=this.options;return d?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:d}=this.options;return d?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:m,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),m&&this.setOptions({transition:m})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let m=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(m=!0),!m)return;const g={};p.z&&uf("z",d,g,this.animationValues);for(let v=0;v<cf.length;v++)uf(`rotate${cf[v]}`,d,g,this.animationValues),uf(`skew${cf[v]}`,d,g,this.animationValues);d.render();for(const v in g)d.setStaticValue(v,g[v]),this.animationValues&&(this.animationValues[v]=g[v]);d.scheduleRender()}applyProjectionStyles(d,m){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=al(m?.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=al(m?.pointerEvents)||""),this.hasProjected&&!Ci(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const v=g.animationValues||g.latestValues;this.applyTransformsToTarget();let S=dT(this.projectionDeltaWithTransform,this.treeScale,v);p&&(S=p(v,S)),d.transform=S;const{x:b,y:T}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${T.origin*100}% 0`,g.animationValues?d.opacity=g===this?v.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:d.opacity=g===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const M in fr){if(v[M]===void 0)continue;const{correct:B,applyTo:U,isCSSVariable:F}=fr[M],P=S==="none"?v[M]:B(v[M],g);if(U){const L=U.length;for(let Z=0;Z<L;Z++)d[U[Z]]=P}else F?this.options.visualElement.renderState.vars[M]=P:d[M]=P}this.options.layoutId&&(d.pointerEvents=g===this?al(m?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>d.currentAnimation?.stop()),this.root.nodes.forEach(dy),this.root.sharedNodes.clear()}}}function mT(n){n.updateLayout()}function gT(n){const a=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&a&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:c}=n.options,f=a.source!==n.layout.source;c==="size"?qe(v=>{const S=f?a.measuredBox[v]:a.layoutBox[v],b=pe(S);S.min=r[v].min,S.max=S.min+b}):hb(c,a.layoutBox,r)&&qe(v=>{const S=f?a.measuredBox[v]:a.layoutBox[v],b=pe(r[v]);S.max=S.min+b,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+b)});const d=Ra();ir(d,r,a.layoutBox);const m=Ra();f?ir(m,n.applyTransform(o,!0),a.measuredBox):ir(m,r,a.layoutBox);const p=!cb(d);let g=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:S,layout:b}=v;if(S&&b){const T=Yt();ar(T,a.layoutBox,S.layoutBox);const M=Yt();ar(M,r,b.layoutBox),ub(T,M)||(g=!0),v.options.layoutRoot&&(n.relativeTarget=M,n.relativeTargetOrigin=T,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:a,delta:m,layoutDelta:d,hasLayoutChanged:p,hasRelativeLayoutChanged:g})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function yT(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function vT(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function bT(n){n.clearSnapshot()}function dy(n){n.clearMeasurements()}function hy(n){n.isLayoutDirty=!1}function xT(n){const{visualElement:a}=n.options;a&&a.getProps().onBeforeLayoutMeasure&&a.notify("BeforeLayoutMeasure"),n.resetTransform()}function py(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function ST(n){n.resolveTargetDelta()}function wT(n){n.calcProjection()}function AT(n){n.resetSkewAndRotation()}function TT(n){n.removeLeadSnapshot()}function my(n,a,r){n.translate=Bt(a.translate,0,r),n.scale=Bt(a.scale,1,r),n.origin=a.origin,n.originPoint=a.originPoint}function gy(n,a,r,o){n.min=Bt(a.min,r.min,o),n.max=Bt(a.max,r.max,o)}function ET(n,a,r,o){gy(n.x,a.x,r.x,o),gy(n.y,a.y,r.y,o)}function jT(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const DT={duration:.45,ease:[.4,0,.1,1]},yy=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),vy=yy("applewebkit/")&&!yy("chrome/")?Math.round:Se;function by(n){n.min=vy(n.min),n.max=vy(n.max)}function MT(n){by(n.x),by(n.y)}function hb(n,a,r){return n==="position"||n==="preserve-aspect"&&!OA(uy(a),uy(r),.2)}function CT(n){return n!==n.root&&n.scroll?.wasRoot}const RT=db({attachResizeListener:(n,a)=>hr(n,"resize",a),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ff={current:void 0},pb=db({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!ff.current){const n=new RT({});n.mount(window),n.setOptions({layoutScroll:!0}),ff.current=n}return ff.current},resetTransform:(n,a)=>{n.style.transform=a!==void 0?a:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),_T={pan:{Feature:KA},drag:{Feature:QA,ProjectionNode:pb,MeasureLayout:rb}};function xy(n,a,r){const{props:o}=n;n.animationState&&o.whileHover&&n.animationState.setActive("whileHover",r==="Start");const c="onHover"+r,f=o[c];f&&At.postRender(()=>f(a,br(a)))}class zT extends li{mount(){const{current:a}=this.node;a&&(this.unmount=Yw(a,(r,o)=>(xy(this.node,o,"Start"),c=>xy(this.node,c,"End"))))}unmount(){}}class kT extends li{constructor(){super(...arguments),this.isActive=!1}onFocus(){let a=!1;try{a=this.node.current.matches(":focus-visible")}catch{a=!0}!a||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=mr(hr(this.node.current,"focus",()=>this.onFocus()),hr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Sy(n,a,r){const{props:o}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&o.whileTap&&n.animationState.setActive("whileTap",r==="Start");const c="onTap"+(r==="End"?"":r),f=o[c];f&&At.postRender(()=>f(a,br(a)))}class OT extends li{mount(){const{current:a}=this.node;a&&(this.unmount=$w(a,(r,o)=>(Sy(this.node,o,"Start"),(c,{success:f})=>Sy(this.node,c,f?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const td=new WeakMap,df=new WeakMap,BT=n=>{const a=td.get(n.target);a&&a(n)},VT=n=>{n.forEach(BT)};function NT({root:n,...a}){const r=n||document;df.has(r)||df.set(r,{});const o=df.get(r),c=JSON.stringify(a);return o[c]||(o[c]=new IntersectionObserver(VT,{root:n,...a})),o[c]}function LT(n,a,r){const o=NT(a);return td.set(n,r),o.observe(n),()=>{td.delete(n),o.unobserve(n)}}const HT={some:0,all:1};class UT extends li{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:a={}}=this.node.getProps(),{root:r,margin:o,amount:c="some",once:f}=a,d={root:r?r.current:void 0,rootMargin:o,threshold:typeof c=="number"?c:HT[c]},m=p=>{const{isIntersecting:g}=p;if(this.isInView===g||(this.isInView=g,f&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:v,onViewportLeave:S}=this.node.getProps(),b=g?v:S;b&&b(p)};return LT(this.node.current,d,m)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:a,prevProps:r}=this.node;["amount","margin","root"].some(FT(a,r))&&this.startObserver()}unmount(){}}function FT({viewport:n={}},{viewport:a={}}={}){return r=>n[r]!==a[r]}const GT={inView:{Feature:UT},tap:{Feature:OT},focus:{Feature:kT},hover:{Feature:zT}},YT={layout:{ProjectionNode:pb,MeasureLayout:rb}},qT={...MA,...GT,..._T,...YT},J=Y3(qT,nA),PT=50,wy=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),XT=()=>({time:0,x:wy(),y:wy()}),$T={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Ay(n,a,r,o){const c=r[a],{length:f,position:d}=$T[a],m=c.current,p=r.time;c.current=n[`scroll${d}`],c.scrollLength=n[`scroll${f}`]-n[`client${f}`],c.offset.length=0,c.offset[0]=0,c.offset[1]=c.scrollLength,c.progress=Va(0,c.scrollLength,c.current);const g=o-p;c.velocity=g>PT?0:yd(c.current-m,g)}function QT(n,a,r){Ay(n,"x",a,r),Ay(n,"y",a,r),a.time=r}function KT(n,a){const r={x:0,y:0};let o=n;for(;o&&o!==a;)if(kd(o))r.x+=o.offsetLeft,r.y+=o.offsetTop,o=o.offsetParent;else if(o.tagName==="svg"){const c=o.getBoundingClientRect();o=o.parentElement;const f=o.getBoundingClientRect();r.x+=c.left-f.left,r.y+=c.top-f.top}else if(o instanceof SVGGraphicsElement){const{x:c,y:f}=o.getBBox();r.x+=c,r.y+=f;let d=null,m=o.parentNode;for(;!d;)m.tagName==="svg"&&(d=m),m=o.parentNode;o=d}else break;return r}const ed={start:0,center:.5,end:1};function Ty(n,a,r=0){let o=0;if(n in ed&&(n=ed[n]),typeof n=="string"){const c=parseFloat(n);n.endsWith("px")?o=c:n.endsWith("%")?n=c/100:n.endsWith("vw")?o=c/100*document.documentElement.clientWidth:n.endsWith("vh")?o=c/100*document.documentElement.clientHeight:n=c}return typeof n=="number"&&(o=a*n),r+o}const ZT=[0,0];function IT(n,a,r,o){let c=Array.isArray(n)?n:ZT,f=0,d=0;return typeof n=="number"?c=[n,n]:typeof n=="string"&&(n=n.trim(),n.includes(" ")?c=n.split(" "):c=[n,ed[n]?n:"0"]),f=Ty(c[0],r,o),d=Ty(c[1],a),f-d}const WT={All:[[0,0],[1,1]]},JT={x:0,y:0};function tE(n){return"getBBox"in n&&n.tagName!=="svg"?n.getBBox():{width:n.clientWidth,height:n.clientHeight}}function eE(n,a,r){const{offset:o=WT.All}=r,{target:c=n,axis:f="y"}=r,d=f==="y"?"height":"width",m=c!==n?KT(c,n):JT,p=c===n?{width:n.scrollWidth,height:n.scrollHeight}:tE(c),g={width:n.clientWidth,height:n.clientHeight};a[f].offset.length=0;let v=!a[f].interpolate;const S=o.length;for(let b=0;b<S;b++){const T=IT(o[b],g[d],p[d],m[f]);!v&&T!==a[f].interpolatorOffsets[b]&&(v=!0),a[f].offset[b]=T}v&&(a[f].interpolate=jd(a[f].offset,lv(o),{clamp:!1}),a[f].interpolatorOffsets=[...a[f].offset]),a[f].progress=pn(0,1,a[f].interpolate(a[f].current))}function nE(n,a=n,r){if(r.x.targetOffset=0,r.y.targetOffset=0,a!==n){let o=a;for(;o&&o!==n;)r.x.targetOffset+=o.offsetLeft,r.y.targetOffset+=o.offsetTop,o=o.offsetParent}r.x.targetLength=a===n?a.scrollWidth:a.clientWidth,r.y.targetLength=a===n?a.scrollHeight:a.clientHeight,r.x.containerLength=n.clientWidth,r.y.containerLength=n.clientHeight}function iE(n,a,r,o={}){return{measure:c=>{nE(n,o.target,r),QT(n,r,c),(o.offset||o.target)&&eE(n,r,o)},notify:()=>a(r)}}const Xs=new WeakMap,Ey=new WeakMap,hf=new WeakMap,jy=n=>n===document.scrollingElement?window:n;function mb(n,{container:a=document.scrollingElement,...r}={}){if(!a)return Se;let o=hf.get(a);o||(o=new Set,hf.set(a,o));const c=XT(),f=iE(a,n,c,r);if(o.add(f),!Xs.has(a)){const m=()=>{for(const S of o)S.measure(ne.timestamp);At.preUpdate(p)},p=()=>{for(const S of o)S.notify()},g=()=>At.read(m);Xs.set(a,g);const v=jy(a);window.addEventListener("resize",g,{passive:!0}),a!==document.documentElement&&Ey.set(a,n3(a,g)),v.addEventListener("scroll",g,{passive:!0}),g()}const d=Xs.get(a);return At.read(d,!1,!0),()=>{nn(d);const m=hf.get(a);if(!m||(m.delete(f),m.size))return;const p=Xs.get(a);Xs.delete(a),p&&(jy(a).removeEventListener("scroll",p),Ey.get(a)?.(),window.removeEventListener("resize",p))}}const Dy=new Map;function aE(n){const a={value:0},r=mb(o=>{a.value=o[n.axis].progress*100},n);return{currentTime:a,cancel:r}}function gb({source:n,container:a,...r}){const{axis:o}=r;n&&(a=n);const c=Dy.get(a)??new Map;Dy.set(a,c);const f=r.target??"self",d=c.get(f)??{},m=o+(r.offset??[]).join(",");return d[m]||(d[m]=!r.target&&dv()?new ScrollTimeline({source:a,axis:o}):aE({container:a,...r})),d[m]}function sE(n,a){const r=gb(a);return n.attachTimeline({timeline:a.target?void 0:r,observe:o=>(o.pause(),Mv(c=>{o.time=o.duration*c},r))})}function rE(n){return n.length===2}function oE(n,a){return rE(n)?mb(r=>{n(r[a.axis].progress,r)},a):Mv(n,gb(a))}function lE(n,{axis:a="y",container:r=document.scrollingElement,...o}={}){if(!r)return Se;const c={axis:a,container:r,...o};return typeof n=="function"?oE(n,c):sE(n,c)}const cE=()=>({scrollX:tn(0),scrollY:tn(0),scrollXProgress:tn(0),scrollYProgress:tn(0)}),Fo=n=>n?!n.current:!1;function uE({container:n,target:a,...r}={}){const o=Fa(cE),c=O.useRef(null),f=O.useRef(!1),d=O.useCallback(()=>(c.current=lE((m,{x:p,y:g})=>{o.scrollX.set(p.current),o.scrollXProgress.set(p.progress),o.scrollY.set(g.current),o.scrollYProgress.set(g.progress)},{...r,container:n?.current||void 0,target:a?.current||void 0}),()=>{c.current?.()}),[n,a,JSON.stringify(r.offset)]);return Al(()=>{if(f.current=!1,Fo(n)||Fo(a)){f.current=!0;return}else return d()},[d]),O.useEffect(()=>{if(f.current)return or(!Fo(n)),or(!Fo(a)),d()},[d]),o}function La(n){const a=Fa(()=>tn(n)),{isStatic:r}=O.useContext(vr);if(r){const[,o]=O.useState(n);O.useEffect(()=>a.on("change",o),[])}return a}function yb(n,a){const r=La(a()),o=()=>r.set(a());return o(),Al(()=>{const c=()=>At.preRender(o,!1,!0),f=n.map(d=>d.on("change",c));return()=>{f.forEach(d=>d()),nn(o)}}),r}function fE(n){er.current=[],n();const a=yb(er.current,n);return er.current=void 0,a}function nd(n,a,r,o){if(typeof n=="function")return fE(n);const c=typeof a=="function"?a:a3(a,r,o);return Array.isArray(n)?My(n,c):My([n],([f])=>c(f))}function My(n,a){const r=Fa(()=>[]);return yb(n,()=>{r.length=0;const o=n.length;for(let c=0;c<o;c++)r[c]=n[c].get();return a(r)})}function pr(n,a={}){const{isStatic:r}=O.useContext(vr),o=()=>se(n)?n.get():n;if(r)return nd(o);const c=La(o());return O.useInsertionEffect(()=>s3(c,n,a),[c,JSON.stringify(a)]),c}const dE={some:0,all:1};function hE(n,a,{root:r,margin:o,amount:c="some"}={}){const f=zd(n),d=new WeakMap,m=g=>{g.forEach(v=>{const S=d.get(v.target);if(v.isIntersecting!==!!S)if(v.isIntersecting){const b=a(v.target,v);typeof b=="function"?d.set(v.target,b):p.unobserve(v.target)}else typeof S=="function"&&(S(v),d.delete(v.target))})},p=new IntersectionObserver(m,{root:r,rootMargin:o,threshold:typeof c=="number"?c:dE[c]});return f.forEach(g=>p.observe(g)),()=>p.disconnect()}function pE(n,{root:a,margin:r,amount:o,once:c=!1,initial:f=!1}={}){const[d,m]=O.useState(f);return O.useEffect(()=>{if(!n.current||c&&d)return;const p=()=>(m(!0),c?void 0:()=>m(!1)),g={root:a&&a.current||void 0,margin:r,amount:o};return hE(n.current,p,g)},[a,n,r,c,o]),d}const mE=w(J.div)`
  position: fixed;
  inset: 0;
  background: #0A0A0A;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  overflow: hidden;
  user-select: none;
`,gE=w.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(80vw, 600px);
  height: min(80vw, 600px);
  background: radial-gradient(circle, rgba(232, 213, 163, 0.07) 0%, transparent 70%);
  pointer-events: none;
`,yE=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.25rem;
  position: relative;
  z-index: 2;
`,vE=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
`,bE=w(J.h1)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.2rem, 6vw, 4rem);
  font-weight: 700;
  letter-spacing: -1.5px;
  color: #FFFFFF;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.15rem;

  span.dot {
    color: #E8D5A3;
    font-size: 1.2em;
    margin-left: 2px;
  }
`,xE=w(J.div)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #E8D5A3;
  opacity: 0.9;
`,SE=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
  width: 280px;

  @media (max-width: 480px) {
    width: 220px;
  }
`,wE=w.div`
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`,AE=w.div`
  height: 100%;
  background: linear-gradient(90deg, #C4A96B, #E8D5A3, #FFFFFF);
  border-radius: 2px;
  width: ${n=>n.$width}%;
  transition: width 0.05s linear;
  box-shadow: 0 0 12px rgba(232, 213, 163, 0.6);
`,TE=w.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,EE=w.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #B0B0B0;
`,jE=w.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #E8D5A3;
`,Go=w.div`
  position: absolute;
  width: 24px;
  height: 24px;
  border-color: rgba(232, 213, 163, 0.25);
  border-style: solid;
  pointer-events: none;

  &.tl { top: 2rem; left: 2rem; border-width: 1px 0 0 1px; }
  &.tr { top: 2rem; right: 2rem; border-width: 1px 1px 0 0; }
  &.bl { bottom: 2rem; left: 2rem; border-width: 0 0 1px 1px; }
  &.br { bottom: 2rem; right: 2rem; border-width: 0 1px 1px 0; }

  @media (max-width: 600px) {
    display: none;
  }
`,DE=w.div`
  position: absolute;
  bottom: 2.5rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #666666;
`,ME=({onComplete:n})=>{const[a,r]=O.useState(0);O.useEffect(()=>{const c=performance.now(),f=2e3;let d;const m=p=>{const g=p-c,v=Math.min(g/f,1),S=Math.min(100,Math.round((1-Math.pow(1-v,3))*100));r(S),v<1?d=requestAnimationFrame(m):setTimeout(()=>{n&&n()},120)};return d=requestAnimationFrame(m),()=>cancelAnimationFrame(d)},[n]);const o=c=>c<30?"INITIALIZING SYSTEM":c<65?"HYDRATING ASSETS":c<95?"PREPARING WORKSPACE":"READY";return h.jsxs(mE,{initial:{opacity:1},exit:{opacity:0,scale:1.02,transition:{duration:.5,ease:[.22,1,.36,1]}},children:[h.jsx(gE,{}),h.jsx(Go,{className:"tl"}),h.jsx(Go,{className:"tr"}),h.jsx(Go,{className:"bl"}),h.jsx(Go,{className:"br"}),h.jsxs(yE,{children:[h.jsxs(vE,{children:[h.jsxs(bE,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,ease:[.22,1,.36,1]},children:["Aditya Raj Bisoyi",h.jsx("span",{className:"dot",children:"."})]}),h.jsx(xE,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,delay:.2},children:"Full-Stack & Software Engineer"})]}),h.jsxs(SE,{children:[h.jsx(wE,{children:h.jsx(AE,{$width:a})}),h.jsxs(TE,{children:[h.jsx(EE,{children:o(a)}),h.jsxs(jE,{children:[a,"%"]})]})]})]}),h.jsx(DE,{children:"PORTFOLIO EXPERIENCE // 2025"})]})},CE=w(J.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.25rem 2rem;
  transition: background 0.4s ease, border-color 0.4s ease;
  background: ${n=>n.$scrolled?"rgba(10, 10, 10, 0.92)":"transparent"};
  backdrop-filter: ${n=>n.$scrolled?"blur(20px)":"none"};
  border-bottom: 1px solid ${n=>n.$scrolled?"rgba(232, 213, 163, 0.1)":"transparent"};
  transform: translateZ(0);
  will-change: background, border-color;

  @media (max-width: 768px) {
    padding: 1rem 1.25rem;
  }
`,RE=w.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,_E=w(J.div)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #E8D5A3;
    border-radius: 50%;
    animation: pulseDot 2s ease-in-out infinite;
  }

  @keyframes pulseDot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.7); }
  }
`,zE=w.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`,kE=w.nav`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  background: rgba(18, 18, 18, 0.7);
  border: 1px solid rgba(232, 213, 163, 0.16);
  padding: 0.3rem 0.35rem;
  border-radius: 100px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.06);

  @media (max-width: 860px) {
    display: none;
  }
`,OE=w.div`
  position: relative;
  display: flex;
  align-items: center;
`,BE=w.button`
  background: none;
  border: none;
  outline: none;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: 0.4px;
  color: ${n=>n.$active?"#FFFFFF":"#A3A3A3"};
  cursor: pointer;
  padding: 0.45rem 1.15rem;
  border-radius: 100px;
  position: relative;
  z-index: 2;
  transition: color 0.25s ease;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:focus,
  &:focus-visible,
  &:active {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }

  &:hover {
    color: #FFFFFF;
  }
`,VE=w(J.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(232, 213, 163, 0.22) 0%, rgba(196, 169, 107, 0.14) 100%);
  border: 1px solid rgba(232, 213, 163, 0.4);
  border-radius: 100px;
  box-shadow: 0 0 16px rgba(232, 213, 163, 0.18), inset 0 1px 1px rgba(255, 255, 255, 0.15);
  z-index: 1;
  pointer-events: none;
`,NE=w.button`
  background: none;
  border: 1px solid rgba(232, 213, 163, 0.3);
  border-radius: 8px;
  width: 42px;
  height: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: rgba(232, 213, 163, 0.7);
  }

  @media (min-width: 821px) {
    display: none;
  }
`,pf=w.span`
  display: block;
  width: 18px;
  height: 1.5px;
  background: #E8D5A3;
  border-radius: 1px;
  transition: all 0.3s ease;
  transform-origin: center;

  &:nth-child(1) {
    transform: ${n=>n.$open?"rotate(45deg) translateY(6.5px)":"none"};
    width: ${n=>(n.$open,"18px")};
  }
  &:nth-child(2) {
    opacity: ${n=>n.$open?0:1};
    transform: ${n=>n.$open?"scaleX(0)":"none"};
  }
  &:nth-child(3) {
    transform: ${n=>n.$open?"rotate(-45deg) translateY(-6.5px)":"none"};
  }
`,LE=w(J.div)`
  position: fixed;
  inset: 0;
  background: #0A0A0A;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 10vw;
  overflow: hidden;
`,HE=w.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(232, 213, 163, 0.1);
`,vb=w.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: #E8D5A3;
  opacity: 0.5;
  margin-right: 1.5rem;
`,UE=w(J.div)`
  display: flex;
  align-items: center;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -1px;
  line-height: 1.15;
  cursor: none;
  transition: color 0.2s ease;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #E8D5A3;
    transition: width 0.4s ease;
  }

  &:hover {
    color: #E8D5A3;
    &::after { width: 100%; }
    ${vb} { opacity: 1; }
  }
`,FE=w.div`
  position: absolute;
  bottom: 3rem;
  left: 10vw;
  display: flex;
  gap: 2rem;
`,mf=w(J.a)`
  font-size: 0.8rem;
  font-weight: 500;
  color: #555;
  text-decoration: none;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: color 0.2s ease;

  &:hover {
    color: #E8D5A3;
  }
`,GE=w(J.div)`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  z-index: 998;

  @media (max-width: 1100px) {
    display: none;
  }
`,YE=w.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  cursor: none;
`,qE=w(J.span)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #E8D5A3;
  white-space: nowrap;
  pointer-events: none;
`,PE=w(J.div)`
  width: ${n=>n.$active?"24px":"6px"};
  height: 6px;
  border-radius: 3px;
  background: ${n=>n.$active?"#E8D5A3":"rgba(232, 213, 163, 0.25)"};
  transition: width 0.3s ease, background 0.3s ease;
  flex-shrink: 0;
`,Yo=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"projects",label:"Projects"},{id:"certifications",label:"Certifications"},{id:"contact",label:"Contact"}],XE=()=>{const[n,a]=O.useState(!1),[r,o]=O.useState(!1),[c,f]=O.useState("home"),[d,m]=O.useState(null);O.useEffect(()=>{let S=!1;const b=()=>{o(window.scrollY>50);const B=Yo.map(U=>{const F=document.getElementById(U.id);return F?{id:U.id,top:Math.abs(F.getBoundingClientRect().top)}:{id:U.id,top:1/0}}).reduce((U,F)=>U.top<F.top?U:F);f(B.id),S=!1},T=()=>{S||(requestAnimationFrame(b),S=!0)};return window.lenis?window.lenis.on("scroll",T):window.addEventListener("scroll",T,{passive:!0}),()=>{window.lenis&&window.lenis.off("scroll",T),window.removeEventListener("scroll",T)}},[]),O.useEffect(()=>(document.body.style.overflow=n?"hidden":"",()=>{document.body.style.overflow=""}),[n]);const p=S=>{if(a(!1),window.lenis)window.lenis.scrollTo(`#${S}`,{offset:-20,duration:1.15});else{const b=document.getElementById(S);b&&b.scrollIntoView({behavior:"smooth"})}},g={closed:{clipPath:"inset(0 0 100% 0)",transition:{duration:.5,ease:[.76,0,.24,1]}},open:{clipPath:"inset(0 0 0% 0)",transition:{duration:.55,ease:[.76,0,.24,1]}}},v={closed:{y:60,opacity:0},open:S=>({y:0,opacity:1,transition:{delay:.1+S*.06,duration:.5,ease:[.22,1,.36,1]}})};return h.jsxs(h.Fragment,{children:[h.jsx(CE,{$scrolled:r,initial:{y:-80,opacity:0},animate:{y:0,opacity:1},transition:{duration:.7,ease:[.22,1,.36,1]},children:h.jsxs(RE,{children:[h.jsxs(_E,{whileHover:{scale:1.03},onClick:()=>p("home"),style:{cursor:"pointer"},children:["A R Bisoyi",h.jsx("span",{})]}),h.jsx(kE,{children:Yo.map(S=>{const b=c===S.id;return h.jsxs(OE,{children:[h.jsx(BE,{$active:b,onClick:()=>p(S.id),children:S.label}),b&&h.jsx(VE,{layoutId:"activeNavIndicator",transition:{type:"spring",stiffness:420,damping:32}})]},S.id)})}),h.jsx(zE,{children:h.jsxs(NE,{onClick:()=>a(S=>!S),"aria-label":n?"Close menu":"Open menu",style:{position:"relative",zIndex:1001},children:[h.jsx(pf,{$open:n}),h.jsx(pf,{$open:n}),h.jsx(pf,{$open:n})]})})]})}),h.jsx(Pe,{children:n&&h.jsxs(LE,{initial:"closed",animate:"open",exit:"closed",variants:g,children:[h.jsx(HE,{}),Yo.map((S,b)=>h.jsxs(UE,{custom:b,variants:v,initial:"closed",animate:"open",exit:"closed",onClick:()=>p(S.id),children:[h.jsxs(vb,{children:["0",b+1]}),S.label]},S.id)),h.jsxs(FE,{children:[h.jsx(mf,{href:"mailto:learnerbisoyi@gmail.com",whileHover:{y:-2},children:"Email"}),h.jsx(mf,{href:"https://github.com/adityarajbisoyi",target:"_blank",whileHover:{y:-2},children:"GitHub"}),h.jsx(mf,{href:"https://www.linkedin.com/in/aditya-raj-bisoyi-a82154328/",target:"_blank",whileHover:{y:-2},children:"LinkedIn"})]})]},"overlay")}),h.jsx(GE,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:1,duration:.5},children:Yo.map(S=>h.jsxs(YE,{onClick:()=>p(S.id),onMouseEnter:()=>m(S.id),onMouseLeave:()=>m(null),children:[h.jsx(Pe,{children:d===S.id&&h.jsx(qE,{initial:{opacity:0,x:8},animate:{opacity:1,x:0},exit:{opacity:0,x:8},transition:{duration:.2},children:S.label})}),h.jsx(PE,{$active:c===S.id})]},S.id))})]})},$E=Ua`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`,QE=Ua`
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(8px); }
`;Ua`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;const KE=w.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 8.5rem 2rem 4.5rem;

  @media (max-width: 900px)  { padding: 7.5rem 1.5rem 4rem; }
  @media (max-width: 600px)  { padding: 6.5rem 1.25rem 3.5rem; }
`,ZE=w.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`,IE=w.div`
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(rgba(232,213,163,0.055) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
  z-index: 1;
`,WE=w.div`
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 4.5rem;
  align-items: center;
  width: 100%;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,JE=w.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,tj=w(J.div)`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    margin-bottom: 2.5rem;
    order: 1;
  }
`,ej=w.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top center;
  border: 2px solid rgba(232,213,163,0.25);
  box-shadow: 0 0 40px rgba(232,213,163,0.12);
`,nj=w(J.p)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 3.5px;
  text-transform: uppercase;
  color: #E8D5A3;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &::before {
    content: '';
    display: inline-block;
    width: 28px;
    height: 1px;
    background: #E8D5A3;
    flex-shrink: 0;
  }
`,ij=w.div`
  overflow: hidden;
  margin-bottom: 1.75rem;
`,aj=w.h1`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.8rem, 6.5vw, 6rem);
  font-weight: 700;
  line-height: 1.0;
  letter-spacing: -2px;
  color: #ffffff;
  margin: 0;

  .gold    { color: #E8D5A3; font-style: italic; }
  .outline {
    -webkit-text-stroke: 1.5px rgba(255,255,255,0.35);
    color: transparent;
  }

  @media (max-width: 600px) {
    font-size: clamp(2.4rem, 9vw, 3.5rem);
    letter-spacing: -1px;
  }
`,sj=w(J.p)`
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  line-height: 1.78;
  color: #D4D4D4;
  margin-bottom: 2.25rem;
  max-width: 520px;

  strong {
    color: #FFFFFF;
    font-weight: 700;
  }

  @media (max-width: 900px) { max-width: 100%; }
`,rj=w(J.div)`
  display: flex;
  gap: 1.25rem;
  align-items: center;
  flex-wrap: wrap;
`,oj=w(J.button)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.84rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #0A0A0A;
  background: #E8D5A3;
  border: none;
  padding: 0.85rem 1.9rem;
  border-radius: 100px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.55s ease;
  }
  &:hover::after { transform: translateX(100%); }

  @media (max-width: 400px) { padding: 0.8rem 1.5rem; font-size: 0.78rem; }
`,lj=w(J.a)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: 0.8px;
  color: #E8D5A3;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 0;
  transition: color 0.2s ease;

  svg { transition: transform 0.3s ease; }
  &:hover { color: #FFFFFF; svg { transform: translateX(4px); } }
`,cj=w.div`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: 1050px) { display: none; }
`,uj=w(J.div)`
  width: 100%;
  max-width: 440px;
  aspect-ratio: 4/5;
  border-radius: 28px;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(232, 213, 163, 0.2);
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.6), 0 0 40px rgba(232, 213, 163, 0.06);
  cursor: none;
  transform-style: preserve-3d;
  perspective: 1000px;
  background: #141414;
`,fj=w.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
`,dj=w.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(10, 10, 10, 0.88) 100%);
`,hj=w.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(232,213,163,0.08) 0%,
    transparent 50%,
    rgba(0,229,204,0.04) 100%
  );
  pointer-events: none;
`,pj=w.div`
  position: absolute;
  bottom: 1.75rem;
  left: 1.75rem;
  right: 1.75rem;
  z-index: 5;

  h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: 0.3px;
    margin-bottom: 0.25rem;
  }
  p {
    font-size: 0.72rem;
    font-weight: 700;
    color: #E8D5A3;
    letter-spacing: 1.8px;
    text-transform: uppercase;
  }
`,mj=w(J.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  padding: 2.25rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
    padding: 1.75rem 0;
  }
`,gj=w(J.div)`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: -1rem;
    top: 15%;
    height: 70%;
    width: 1px;
    background: rgba(255, 255, 255, 0.08);

    @media (max-width: 768px) {
      display: none;
    }
  }
`,yj=w.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.2rem, 3.5vw, 3rem);
  font-weight: 800;
  color: #E8D5A3;
  line-height: 1;
  letter-spacing: -1px;
`,vj=w.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  color: #FFFFFF;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`,bj=w(J.div)`
  position: relative;
  z-index: 2;
  margin-top: 0.5rem;
  overflow: hidden;
  border-top: 1px solid rgba(255,255,255,0.08);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  padding: 0.85rem 0;
  /* mask out edges */
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
  mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
`,xj=w.div`
  display: flex;
  gap: 2.5rem;
  animation: ${$E} 22s linear infinite;
  white-space: nowrap;
  width: max-content;
`,Sj=w.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #B8B8B8;
`,wj=w.span`
  color: #E8D5A3;
  font-size: 0.55rem;
  vertical-align: middle;
`,Aj=w(J.div)`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 2;

  .line {
    width: 1px;
    height: 42px;
    background: linear-gradient(to bottom, rgba(232,213,163,0.7), transparent);
    animation: ${QE} 2.2s ease-in-out infinite;
  }

  span {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #E8D5A3;
    writing-mode: vertical-rl;
  }

  @media (max-width: 768px) { display: none; }
`,Tj=[{num:"20+",label:"Projects Shipped"},{num:"2+",label:"Years Building"},{num:"100%",label:"Satisfaction"}],Ej=["React","Node.js","Svelte","Cloudflare","TypeScript","Three.js","Framer Motion","PostgreSQL","Hono","Python","React","Node.js","Svelte","Cloudflare","TypeScript","Three.js","Framer Motion","PostgreSQL","Hono","Python"],jj=()=>{const n=O.useRef(null),a=La(0),r=La(0),o=pr(nd(r,[-.5,.5],[10,-10]),{stiffness:250,damping:22}),c=pr(nd(a,[-.5,.5],[-10,10]),{stiffness:250,damping:22}),f=g=>{const v=n.current?.getBoundingClientRect();v&&(a.set((g.clientX-v.left)/v.width-.5),r.set((g.clientY-v.top)/v.height-.5))},d=()=>{a.set(0),r.set(0)},m=()=>{window.lenis?window.lenis.scrollTo("#projects",{offset:-20,duration:1.15}):document.getElementById("projects")?.scrollIntoView({behavior:"smooth"})},p=()=>{window.lenis?window.lenis.scrollTo("#contact",{offset:-20,duration:1.15}):document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})};return h.jsxs(KE,{id:"home",children:[h.jsx(IE,{}),h.jsxs(ZE,{children:[h.jsxs(WE,{children:[h.jsxs(JE,{children:[h.jsx(tj,{initial:{opacity:0,scale:.85},animate:{opacity:1,scale:1},transition:{duration:.7,delay:.15,ease:[.22,1,.36,1]},children:h.jsx(ej,{src:"/profile.jpg",alt:"Aditya Raj Bisoyi"})}),h.jsx(nj,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.6,delay:.15},children:"Full-Stack Developer"}),h.jsx(ij,{children:h.jsx(aj,{children:[{text:"Creator,",cls:""},{text:"Developer",cls:"gold"},{text:"& Designer.",cls:"outline"}].map(({text:g,cls:v},S)=>h.jsx(J.div,{initial:{y:90,opacity:0},animate:{y:0,opacity:1},transition:{duration:.75,delay:.22+S*.13,ease:[.22,1,.36,1]},children:h.jsx("span",{className:v||void 0,children:g})},g))})}),h.jsx(sj,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.6,delay:.68},children:"I transform complex problems into elegant, high-performance solutions — building applications that push what is possible, with precision and craft."}),h.jsxs(rj,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.6,delay:.82},children:[h.jsx(oj,{onClick:m,whileHover:{scale:1.04},whileTap:{scale:.96},children:"View Projects"}),h.jsxs(lj,{onClick:p,as:J.div,whileHover:{x:3},children:["Contact me",h.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:h.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]}),h.jsx(cj,{children:h.jsxs(uj,{ref:n,onMouseMove:f,onMouseLeave:d,style:{rotateX:o,rotateY:c},initial:{opacity:0,scale:.88,y:30},animate:{opacity:1,scale:1,y:0},transition:{duration:.9,delay:.5,ease:[.22,1,.36,1]},children:[h.jsx(fj,{src:"/profile.jpg",alt:"Aditya Raj Bisoyi"}),h.jsx(dj,{}),h.jsx(hj,{}),h.jsxs(pj,{children:[h.jsx("h3",{children:"Aditya Raj Bisoyi"}),h.jsx("p",{children:"Full-Stack Developer"})]})]})})]}),h.jsx(mj,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.95},children:Tj.map((g,v)=>h.jsxs(gj,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:1.05+v*.08,duration:.45},children:[h.jsx(yj,{children:g.num}),h.jsx(vj,{children:g.label})]},g.label))}),h.jsx(bj,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.3,duration:.8},children:h.jsx(xj,{children:Ej.map((g,v)=>h.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"2.5rem"},children:[h.jsx(Sj,{children:g}),h.jsx(wj,{children:"■"})]},v))})})]}),h.jsxs(Aj,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.6,duration:.8},children:[h.jsx("span",{children:"Scroll"}),h.jsx("div",{className:"line"})]})]})},Dj=(n,a=1500,r)=>{const[o,c]=O.useState(0),f=O.useRef(!1);return O.useEffect(()=>{if(!r||f.current)return;f.current=!0;const d=parseInt(n);if(isNaN(d)){c(n);return}let m=null;const p=g=>{m||(m=g);const v=Math.min((g-m)/a,1);c(Math.floor((1-Math.pow(1-v,3))*d)),v<1?requestAnimationFrame(p):c(n)};requestAnimationFrame(p)},[r,n,a]),o},Cy=({value:n})=>{const a=O.useRef(null),r=pE(a,{once:!0,margin:"-60px"}),o=Dj(n,1400,r);return h.jsx("span",{ref:a,children:o})},Mj=Ua`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`,Cj=w.section`
  padding: 8.5rem 2rem 6rem;
  background: #0A0A0A;
  position: relative;
  overflow: hidden;
  scroll-margin-top: 80px;

  @media (max-width: 900px) { padding: 6.5rem 1.5rem 5rem; }
  @media (max-width: 600px) { padding: 5rem 1.25rem 4rem; }
`,Rj=w.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`,_j=w(J.div)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #E8D5A3;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  z-index: 2;

  &::before {
    content: '';
    display: inline-block;
    width: 28px;
    height: 2px;
    background: #E8D5A3;
    flex-shrink: 0;
  }
`,zj=w(J.h2)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.2rem, 5.5vw, 4rem);
  font-weight: 700;
  color: #FFFFFF;
  letter-spacing: -1.5px;
  line-height: 1.12;
  margin-bottom: 3.5rem;
  position: relative;
  z-index: 2;
  max-width: 820px;

  span {
    color: #E8D5A3;
    font-style: italic;
    background: linear-gradient(135deg, #FFF6DC 0%, #E8D5A3 50%, #C4A96B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 600px) {
    margin-bottom: 2.5rem;
    letter-spacing: -0.8px;
  }
`,kj=w.div`
  display: grid;
  gap: 1.5rem;
  position: relative;
  z-index: 2;

  /* ── Desktop: 12-col ── */
  grid-template-columns: repeat(12, 1fr);
  grid-template-areas:
    "bio  bio  bio  bio  bio  bio  sk   sk   sk   sk   sk   sk "
    "bio  bio  bio  bio  bio  bio  sk   sk   sk   sk   sk   sk "
    "st1  st1  st1  st2  st2  st2  app  app  app  app  app  app"
    "tkr  tkr  tkr  tkr  tkr  tkr  tkr  tkr  tkr  tkr  tkr  tkr";

  /* ── Tablet ── */
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "bio  bio "
      "sk   sk  "
      "st1  st2 "
      "app  app "
      "tkr  tkr ";
  }

  /* ── Mobile ── */
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "bio"
      "sk "
      "st1"
      "st2"
      "app"
      "tkr";
  }
`,Pa=w(J.div)`
  background: #141414;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.25rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(232, 213, 163, 0.35);
    box-shadow: 0 16px 45px rgba(0, 0, 0, 0.5);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(232,213,163,0.06) 0%, transparent 65%);
    opacity: 0;
    transition: opacity 0.35s ease;
  }
  &:hover::before { opacity: 1; }
`,Oj=w(Pa)`
  grid-area: bio;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,Bj=w(Pa)`
  grid-area: sk;
  display: flex;
  flex-direction: column;
`,Vj=w.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`,Nj=w(Pa)`
  grid-area: st1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Lj=w(Pa)`
  grid-area: st2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Hj=w(Pa)`
  grid-area: app;
  padding: 1.8rem 2.25rem;
`,Uj=w(Pa)`
  grid-area: tkr;
  padding: 1.25rem 2.25rem;
  display: flex;
  align-items: center;
  gap: 1.75rem;
  overflow: hidden;
`,$s=w.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #E8D5A3;
  display: block;
  margin-bottom: 0.9rem;
`,Fj=w.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 1.15rem;
`,Ry=w.div`
  font-size: 1.05rem;
  line-height: 1.85;
  color: #D6D6D6;

  p {
    margin-bottom: 1.35rem;
    &:last-child { margin-bottom: 0; }
  }

  strong {
    color: #FFFFFF;
    font-weight: 700;
    text-shadow: 0 0 12px rgba(255, 255, 255, 0.15);
  }
`,_y=w.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.6rem, 4.5vw, 3.8rem);
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1;
  margin-bottom: 0.5rem;
`,zy=w.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.78rem;
  color: #B8B8B8;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`,Gj=[{name:"Frontend",color:"#00E5CC",skills:["React","Svelte","Next.js","Three.js","Framer"]},{name:"Backend",color:"#E8D5A3",skills:["Node.js","Hono","Flask","Python","GraphQL"]},{name:"Database",color:"#c084fc",skills:["PostgreSQL","MongoDB","D1 SQLite","Redis"]},{name:"Platform",color:"#FF6B35",skills:["Cloudflare","Docker","AWS","GitHub"]}],Yj=w.div`
  margin-bottom: 1.2rem;
  &:last-child { margin-bottom: 0; }
`,qj=w.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${n=>n.$color};
  margin-bottom: 0.55rem;
`,Pj=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`,Xj=w(J.span)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.32rem 0.8rem;
  border-radius: 100px;
  background: ${n=>n.$color}20;
  border: 1px solid ${n=>n.$color}55;
  color: #FFFFFF;
  letter-spacing: 0.3px;
  transition: all 0.2s ease;
  &:hover {
    background: ${n=>n.$color}35;
    border-color: ${n=>n.$color};
    transform: translateY(-1px);
  }
`,$j=w.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #E8D5A3;
  white-space: nowrap;
  flex-shrink: 0;
`,Qj=w.div`
  display: flex;
  gap: 2.5rem;
  animation: ${Mj} 16s linear infinite;
  white-space: nowrap;
  width: max-content;
`,Kj=w.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  color: #D4D4D4;
  letter-spacing: 0.6px;
`,Zj=["Rust","WebAssembly","Kubernetes","Go","Distributed Systems","Rust","WebAssembly","Kubernetes","Go","Distributed Systems"],Ij=()=>{const n={hidden:{},visible:{transition:{staggerChildren:.07}}},a={hidden:{opacity:0,y:36},visible:{opacity:1,y:0,transition:{duration:.65,ease:[.22,1,.36,1]}}},r=o=>{const c=o.currentTarget,f=c.getBoundingClientRect();c.style.setProperty("--mx",`${(o.clientX-f.left)/f.width*100}%`),c.style.setProperty("--my",`${(o.clientY-f.top)/f.height*100}%`)};return h.jsx(Cj,{id:"about",children:h.jsxs(Rj,{children:[h.jsx(_j,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.5},children:"Who I am"}),h.jsxs(zj,{initial:{opacity:0,y:28},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1},children:["Building at the ",h.jsx("span",{children:"intersection"}),h.jsx("br",{}),"of craft and technology"]}),h.jsxs(kj,{as:J.div,variants:n,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-80px"},children:[h.jsxs(Oj,{variants:a,onMouseMove:r,children:[h.jsx($s,{children:"Background"}),h.jsxs(Ry,{children:[h.jsxs("p",{children:["I am a ",h.jsx("strong",{children:"full-stack developer"})," with a deep passion for crafting innovative, efficient, and beautiful digital experiences. My journey started with raw curiosity — taking things apart to understand how they work — and evolved into expertise across the entire stack."]}),h.jsxs("p",{children:["I believe great software is like great architecture: ",h.jsx("strong",{children:"structurally sound"}),", aesthetically considered, and built to stand the test of time. Every line of code I write is crafted with performance, accessibility, and user delight in mind."]}),h.jsxs("p",{children:["My mission is to bridge the gap between ",h.jsx("strong",{children:"imagination and reality"})," — creating digital experiences that function flawlessly and leave users genuinely impressed."]})]})]}),h.jsxs(Bj,{variants:a,onMouseMove:r,children:[h.jsx($s,{children:"Stack"}),h.jsx(Fj,{children:"Core Technologies"}),h.jsx(Vj,{children:Gj.map(o=>h.jsxs(Yj,{children:[h.jsx(qj,{$color:o.color,children:o.name}),h.jsx(Pj,{children:o.skills.map((c,f)=>h.jsx(Xj,{$color:o.color,initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:f*.04,duration:.3},whileHover:{scale:1.06},children:c},c))})]},o.name))})]}),h.jsxs(Nj,{variants:a,onMouseMove:r,children:[h.jsx($s,{children:"Projects"}),h.jsx(_y,{children:h.jsx(Cy,{value:"20+"})}),h.jsx(zy,{children:"Quality Projects Shipped"})]}),h.jsxs(Lj,{variants:a,onMouseMove:r,children:[h.jsx($s,{children:"Experience"}),h.jsx(_y,{children:h.jsx(Cy,{value:"2+"})}),h.jsx(zy,{children:"Years of Building"})]}),h.jsxs(Hj,{variants:a,onMouseMove:r,children:[h.jsx($s,{children:"Approach"}),h.jsx(Ry,{children:h.jsxs("p",{style:{marginBottom:0},children:["I approach every project as a ",h.jsx("strong",{children:"product thinker"})," — starting with the user problem, designing the system, then writing the code. I care deeply about the tiny details that separate good from ",h.jsx("strong",{children:"exceptional"}),"."]})})]}),h.jsxs(Uj,{variants:a,style:{overflow:"hidden"},children:[h.jsx($j,{children:"Exploring"}),h.jsx("div",{style:{overflow:"hidden",flex:1},children:h.jsx(Qj,{children:Zj.map((o,c)=>h.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"2.5rem"},children:[h.jsx(Kj,{children:o}),h.jsx("span",{style:{color:"#E8D5A3",fontSize:"0.45rem",verticalAlign:"middle"},children:"■"})]},c))})})]})]})]})})},Wj="/assets/image-CSKk-lwq.png",Jj=Object.freeze(Object.defineProperty({__proto__:null,default:Wj},Symbol.toStringTag,{value:"Module"})),t6="/assets/image1-BfleqB6L.png",e6=Object.freeze(Object.defineProperty({__proto__:null,default:t6},Symbol.toStringTag,{value:"Module"})),n6="/assets/image2-BdfjUMog.png",i6=Object.freeze(Object.defineProperty({__proto__:null,default:n6},Symbol.toStringTag,{value:"Module"})),a6="/assets/image-Co2erQGj.png",s6=Object.freeze(Object.defineProperty({__proto__:null,default:a6},Symbol.toStringTag,{value:"Module"})),r6="/assets/image0-Dpvhq9MM.png",o6=Object.freeze(Object.defineProperty({__proto__:null,default:r6},Symbol.toStringTag,{value:"Module"})),l6="/assets/image1-ChVKMDN4.png",c6=Object.freeze(Object.defineProperty({__proto__:null,default:l6},Symbol.toStringTag,{value:"Module"})),u6="/assets/image2-0l2vgA4g.png",f6=Object.freeze(Object.defineProperty({__proto__:null,default:u6},Symbol.toStringTag,{value:"Module"})),d6="/assets/Habibo%20image%203-qBbbfTNr.png",h6=Object.freeze(Object.defineProperty({__proto__:null,default:d6},Symbol.toStringTag,{value:"Module"})),p6="/assets/Habibo%20image%204-DaUAgenb.png",m6=Object.freeze(Object.defineProperty({__proto__:null,default:p6},Symbol.toStringTag,{value:"Module"})),g6="/assets/Habibo%20image%205-CR0TNTKT.png",y6=Object.freeze(Object.defineProperty({__proto__:null,default:g6},Symbol.toStringTag,{value:"Module"})),v6="/assets/habibo%20image%202-ViWw5CZ-.png",b6=Object.freeze(Object.defineProperty({__proto__:null,default:v6},Symbol.toStringTag,{value:"Module"})),x6="/assets/image%20copy%202-BJYp0PjL.png",S6=Object.freeze(Object.defineProperty({__proto__:null,default:x6},Symbol.toStringTag,{value:"Module"})),w6="/assets/image%20copy%203-B2eNiC2k.png",A6=Object.freeze(Object.defineProperty({__proto__:null,default:w6},Symbol.toStringTag,{value:"Module"})),T6="/assets/image%20copy%204-CmQcGhVQ.png",E6=Object.freeze(Object.defineProperty({__proto__:null,default:T6},Symbol.toStringTag,{value:"Module"})),j6="/assets/image%20copy-DUNBPBR-.png",D6=Object.freeze(Object.defineProperty({__proto__:null,default:j6},Symbol.toStringTag,{value:"Module"})),M6="/assets/image-2-qvbkUoRa.png",C6=Object.freeze(Object.defineProperty({__proto__:null,default:M6},Symbol.toStringTag,{value:"Module"})),R6="/assets/image-5-CnNlWjR8.png",_6=Object.freeze(Object.defineProperty({__proto__:null,default:R6},Symbol.toStringTag,{value:"Module"})),z6="/assets/image-o-C868lrwl.png",k6=Object.freeze(Object.defineProperty({__proto__:null,default:z6},Symbol.toStringTag,{value:"Module"})),O6="/assets/image-x-VZar3Ymq.png",B6=Object.freeze(Object.defineProperty({__proto__:null,default:O6},Symbol.toStringTag,{value:"Module"})),V6="/assets/image-y-dFhZJl-z.png",N6=Object.freeze(Object.defineProperty({__proto__:null,default:V6},Symbol.toStringTag,{value:"Module"})),L6="/assets/img-10-Be2VVB8V.png",H6=Object.freeze(Object.defineProperty({__proto__:null,default:L6},Symbol.toStringTag,{value:"Module"})),U6="/assets/image%20copy%202-CVJUa54Y.png",F6=Object.freeze(Object.defineProperty({__proto__:null,default:U6},Symbol.toStringTag,{value:"Module"})),G6="/assets/image%20copy-BklXKk89.png",Y6=Object.freeze(Object.defineProperty({__proto__:null,default:G6},Symbol.toStringTag,{value:"Module"})),q6="/assets/image-CGZSXBEF.png",P6=Object.freeze(Object.defineProperty({__proto__:null,default:q6},Symbol.toStringTag,{value:"Module"})),X6="/assets/image0-DNo-MF7s.png",$6=Object.freeze(Object.defineProperty({__proto__:null,default:X6},Symbol.toStringTag,{value:"Module"})),Q6="/assets/image1-DdNyu1Hd.png",K6=Object.freeze(Object.defineProperty({__proto__:null,default:Q6},Symbol.toStringTag,{value:"Module"})),Z6="/assets/image3-C08gMHcp.png",I6=Object.freeze(Object.defineProperty({__proto__:null,default:Z6},Symbol.toStringTag,{value:"Module"})),ky=Object.assign({"../assets/projects/AIFormBuilder/image.png":Jj,"../assets/projects/AIFormBuilder/image1.png":e6,"../assets/projects/AIFormBuilder/image2.png":i6,"../assets/projects/GitVisualizer/image.png":s6,"../assets/projects/GitVisualizer/image0.png":o6,"../assets/projects/GitVisualizer/image1.png":c6,"../assets/projects/GitVisualizer/image2.png":f6,"../assets/projects/Habibo/Habibo image 3.png":h6,"../assets/projects/Habibo/Habibo image 4.png":m6,"../assets/projects/Habibo/Habibo image 5.png":y6,"../assets/projects/Habibo/habibo image 2.png":b6,"../assets/projects/NeonEditor/image copy 2.png":S6,"../assets/projects/NeonEditor/image copy 3.png":A6,"../assets/projects/NeonEditor/image copy 4.png":E6,"../assets/projects/NeonEditor/image copy.png":D6,"../assets/projects/StepTracker/image-2.png":C6,"../assets/projects/StepTracker/image-5.png":_6,"../assets/projects/StepTracker/image-o.png":k6,"../assets/projects/StepTracker/image-x.png":B6,"../assets/projects/StepTracker/image-y.png":N6,"../assets/projects/StepTracker/img-10.png":H6,"../assets/projects/TickKick/image copy 2.png":F6,"../assets/projects/TickKick/image copy.png":Y6,"../assets/projects/TickKick/image.png":P6,"../assets/projects/dbmig/image0.png":$6,"../assets/projects/dbmig/image1.png":K6,"../assets/projects/dbmig/image3.png":I6}),bb=n=>{const a=[];for(const r in ky)r.includes(`../assets/projects/${n}/`)&&a.push(ky[r].default);return a},W6=w.section`
  padding: 8.5rem 2rem 6rem;
  background: #0A0A0A;
  position: relative;
  overflow: hidden;
  scroll-margin-top: 80px;

  @media (max-width: 900px) { padding: 6.5rem 1.5rem 5rem; }
  @media (max-width: 600px) { padding: 5rem 1.25rem 4rem; }
`,J6=w.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`,t4=w(J.div)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #E8D5A3;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  z-index: 2;

  &::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 1px;
    background: #E8D5A3;
  }
`,e4=w(J.h2)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -1.5px;
  line-height: 1.1;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;

  span { color: #E8D5A3; }
`,n4=w.div`
  position: relative;
  z-index: 2;
  margin-bottom: 3rem;
`,Oy=w.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #E8D5A3;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;

  &::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #E8D5A3;
    box-shadow: 0 0 8px rgba(232, 213, 163, 0.7);
  }
`,By=w(J.div)`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  overflow-x: auto;
  padding-bottom: 0.6rem;
  margin-bottom: 0.85rem;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 4%, black 92%, transparent 100%);
  mask-image: linear-gradient(90deg, transparent 0%, black 4%, black 92%, transparent 100%);

  @media (min-width: 601px) {
    flex-wrap: wrap;
    -webkit-mask-image: none;
    mask-image: none;
    overflow-x: visible;
    padding-bottom: 0;
  }
`,Vy=w(J.button)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  padding: 0.5rem 1.15rem;
  border-radius: 100px;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid ${n=>n.$active?"#E8D5A3":"rgba(255,255,255,0.18)"};
  background: ${n=>n.$active?"rgba(232, 213, 163, 0.22)":"rgba(255,255,255,0.04)"};
  color: ${n=>n.$active?"#FFFFFF":"#D6D6D6"};
  box-shadow: ${n=>n.$active?"0 0 16px rgba(232, 213, 163, 0.25)":"none"};
  letter-spacing: 0.4px;
  transition: all 0.22s ease;

  &:hover {
    border-color: rgba(232, 213, 163, 0.6);
    color: #FFFFFF;
    background: rgba(232, 213, 163, 0.12);
  }
`,Ny=w.span`
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.12rem 0.5rem;
  border-radius: 50px;
  background: ${n=>n.$active?"rgba(232, 213, 163, 0.35)":"rgba(255, 255, 255, 0.12)"};
  color: ${n=>n.$active?"#FFFFFF":"#E8D5A3"};
`,i4=w.div`
  width: 100%;
  height: 1px;
  background: rgba(255,255,255,0.1);
  margin: 0.75rem 0;
`,a4=w.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #FFFFFF;
  background: rgba(232, 213, 163, 0.15);
  margin-left: auto;
  padding: 0.4rem 1rem;
  border: 1px solid rgba(232, 213, 163, 0.4);
  border-radius: 100px;
  flex-shrink: 0;
`,s4=w(J.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(400px, 100%), 1fr));
  gap: 1.75rem;
  position: relative;
  z-index: 2;
  width: 100%;
`,xb=w(J.div)`
  background: #141414;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  cursor: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  transition: all 0.35s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(
      400px circle at var(--mx, 50%) var(--my, 50%),
      rgba(232, 213, 163, 0.08) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
    z-index: 1;
  }

  &:hover {
    border-color: rgba(232, 213, 163, 0.35);
    box-shadow: 0 16px 45px rgba(0, 0, 0, 0.55);
    &::before { opacity: 1; }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: ${n=>n.$accentColor||"#E8D5A3"};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after { opacity: 1; }
`,Sb=w.div`
  height: 210px;
  position: relative;
  overflow: hidden;
  background: #0D0D0D;
  border-bottom: 1px solid rgba(255,255,255,0.04);
`,r4=w(J.img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  inset: 0;
  transition: transform 0.4s ease;

  ${xb}:hover & {
    transform: scale(1.04);
  }
`,wb=w.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #333;
`,o4=w.div`
  position: absolute;
  bottom: 0.6rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.35rem;
  z-index: 3;
`,l4=w.div`
  width: ${n=>n.$active?"16px":"5px"};
  height: 5px;
  border-radius: 3px;
  background: ${n=>n.$active?"#E8D5A3":"rgba(255,255,255,0.2)"};
  transition: all 0.3s ease;
`,Ly=w.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${n=>n.$dir==="left"?"left: 0.5rem;":"right: 0.5rem;"}
  background: rgba(10,10,10,0.8);
  border: 1px solid rgba(232, 213, 163, 0.2);
  color: #E8D5A3;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: none;
  z-index: 4;
  opacity: 0;
  transition: opacity 0.2s ease;

  ${Sb}:hover & {
    opacity: 1;
  }

  svg { width: 14px; height: 14px; }
`,c4=w.div`
  padding: 1.5rem;
  position: relative;
  z-index: 2;
`,u4=w.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.6rem;
`,f4=w.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.22rem;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 1.3;
`,d4=w.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  padding: 0.25rem 0.7rem;
  border-radius: 100px;
  white-space: nowrap;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  flex-shrink: 0;

  ${n=>{const a={PWA:["#34d399","rgba(16, 185, 129, 0.18)","rgba(16, 185, 129, 0.4)"],"Desktop App":["#c084fc","rgba(139, 92, 246, 0.18)","rgba(139, 92, 246, 0.4)"],"Mobile App":["#fbbf24","rgba(245, 158, 11, 0.18)","rgba(245, 158, 11, 0.4)"],"Web App":["#00E5CC","rgba(0, 229, 204, 0.16)","rgba(0, 229, 204, 0.38)"]},[r,o,c]=a[n.$type]||a["Web App"];return`color: ${r}; background: ${o}; border: 1px solid ${c}; font-weight: 700;`}}
`,h4=w.p`
  font-size: 0.95rem;
  line-height: 1.72;
  color: #D6D6D6;
  margin-bottom: 1.35rem;
`,p4=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 1.35rem;
`,Hy=w.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.28rem 0.75rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: #EEEEEE;
  letter-spacing: 0.3px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(232, 213, 163, 0.18);
    border-color: #E8D5A3;
    color: #FFFFFF;
  }
`,Uy=w(J.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #0A0A0A;
  background: #E8D5A3;
  text-decoration: none;
  padding: 0.55rem 1.25rem;
  border-radius: 100px;
  transition: background 0.2s ease;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    background: #F0E0B0;
    svg { transform: translateX(3px); }
  }
`,m4=w(J.div)`
  grid-column: 1 / -1;
  text-align: center;
  padding: 5rem 2rem;
  color: #333;
  font-size: 0.9rem;
  border: 1px dashed rgba(255,255,255,0.06);
  border-radius: 20px;
`,g4={Creativity:"#FF6B35",Games:"#c084fc","Productivity Tools":"#00E5CC",Simulation:"#E8D5A3","Developer Utilities":"#4ade80"},y4=w.div`
  position: relative;
  z-index: 2;
  width: 100%;
`,v4=w(J.div)`
  background: #121212;
  border: 1px solid rgba(232, 213, 163, 0.2);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
  display: grid;
  grid-template-columns: 1.2fr 1fr;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,b4=w.div`
  height: 420px;
  position: relative;
  overflow: hidden;
  background: #0D0D0D;

  @media (max-width: 900px) { height: 280px; }
  @media (max-width: 600px) { height: 220px; }
`,x4=w(J.img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  inset: 0;
`,S4=w.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.4rem;
  z-index: 3;
`,w4=w.div`
  width: ${n=>n.$active?"20px":"6px"};
  height: 6px;
  border-radius: 3px;
  background: ${n=>n.$active?"#E8D5A3":"rgba(255,255,255,0.25)"};
  transition: all 0.3s ease;
`,A4=w.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 600px) { padding: 1.5rem; }
`,T4=w.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #E8D5A3;
  margin-bottom: 1rem;
  text-transform: uppercase;
`,E4=w.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 1.2;
  margin-bottom: 0.5rem;

  @media (max-width: 600px) { font-size: 1.4rem; }
`,j4=w.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.25rem 0.7rem;
  border-radius: 100px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  display: inline-flex;
  align-self: flex-start;
  margin-bottom: 1rem;

  ${n=>{const a={PWA:["#34d399","rgba(16, 185, 129, 0.18)","rgba(16, 185, 129, 0.4)"],"Desktop App":["#c084fc","rgba(139, 92, 246, 0.18)","rgba(139, 92, 246, 0.4)"],"Mobile App":["#fbbf24","rgba(245, 158, 11, 0.18)","rgba(245, 158, 11, 0.4)"],"Web App":["#00E5CC","rgba(0, 229, 204, 0.16)","rgba(0, 229, 204, 0.38)"]},[r,o,c]=a[n.$type]||a["Web App"];return`color: ${r}; background: ${o}; border: 1px solid ${c};`}}
`,D4=w.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #C8C8C8;
  margin-bottom: 1.5rem;
`,M4=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 1.5rem;
`,C4=w.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
`,Fy=w.button`
  width: 42px; height: 42px;
  border-radius: 50%;
  border: 1px solid rgba(232, 213, 163, 0.3);
  background: rgba(232, 213, 163, 0.06);
  color: #E8D5A3;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #E8D5A3;
    color: #0A0A0A;
  }

  svg { width: 16px; height: 16px; }
`,R4=w.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
`,_4=w.button`
  width: ${n=>n.$active?"24px":"8px"};
  height: 8px;
  border-radius: 4px;
  background: ${n=>n.$active?"#E8D5A3":"rgba(255,255,255,0.15)"};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover { background: rgba(232, 213, 163, 0.5); }
`,Gy=w(J.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin: 2.5rem auto 0;
  padding: 0.85rem 2rem;
  border-radius: 100px;
  border: 1px solid rgba(232, 213, 163, 0.35);
  background: rgba(232, 213, 163, 0.06);
  color: #E8D5A3;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.84rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: #E8D5A3;
    color: #0A0A0A;
    box-shadow: 0 6px 20px rgba(232, 213, 163, 0.3);
  }

  svg { width: 14px; height: 14px; }
`,z4=({folderName:n})=>{const a=bb(n),[r,o]=O.useState(0);return O.useEffect(()=>{if(a.length<=1)return;const c=setInterval(()=>o(f=>(f+1)%a.length),2500);return()=>clearInterval(c)},[a.length]),a.length?h.jsxs(h.Fragment,{children:[h.jsx(Pe,{mode:"wait",children:h.jsx(r4,{src:a[r],alt:"",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.35}},r)}),a.length>1&&h.jsxs(h.Fragment,{children:[h.jsx(Ly,{$dir:"left",onClick:c=>{c.stopPropagation(),o(f=>(f-1+a.length)%a.length)},children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:h.jsx("path",{d:"M15 18l-6-6 6-6"})})}),h.jsx(Ly,{$dir:"right",onClick:c=>{c.stopPropagation(),o(f=>(f+1)%a.length)},children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:h.jsx("path",{d:"M9 18l6-6-6-6"})})}),h.jsx(o4,{children:a.map((c,f)=>h.jsx(l4,{$active:f===r},f))})]})]}):h.jsx(wb,{children:"No preview"})},k4=({folderName:n,onAllImagesDone:a})=>{const r=bb(n),[o,c]=O.useState(0),f=O.useRef(null),d=O.useRef(!1);return O.useEffect(()=>{c(0),d.current=!1},[n]),O.useEffect(()=>r.length<=1?(f.current=setTimeout(()=>{a&&a()},3e3),()=>clearTimeout(f.current)):(f.current=setInterval(()=>{c(m=>{const p=m+1;return p>=r.length?(clearInterval(f.current),setTimeout(()=>{a&&!d.current&&(d.current=!0,a())},3e3),0):p})},2500),()=>{clearInterval(f.current),clearTimeout(f.current)}),[r.length,n]),r.length?h.jsxs(h.Fragment,{children:[h.jsx(Pe,{mode:"wait",children:h.jsx(x4,{src:r[o],alt:"",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.4}},`${n}-${o}`)}),r.length>1&&h.jsx(S4,{children:r.map((m,p)=>h.jsx(w4,{$active:p===o},p))})]}):h.jsx(wb,{children:"No preview"})},kt=[{id:1,title:"Step Tracker",folderName:"StepTracker",description:"A multi-user step tracker with dashboards, leaderboard, competitive charts, and team support — turning your casual walk into a disciplined habit.",tech:["Svelte","Hono","Cloudflare","Javascript","Tailwind"],category:"Productivity Tools",softwareType:"PWA",deployedUrl:"https://stepcounter-frontend.learnerbisoyi.workers.dev"},{id:2,title:"Habibo",folderName:"Habibo",description:"A minimalist hobby tracker with detailed insights and stunning visual analytics — built for people who take their growth seriously.",tech:["React","Hono","Cloudflare","Typescript","Tailwind"],category:"Productivity Tools",softwareType:"PWA",deployedUrl:"https://habibo.learnerbisoyi.workers.dev"},{id:3,title:"Easiest Git & Github Visualizer",folderName:"GitVisualizer",description:"An interactive visual interface to learn all essential Git & Github concepts through meaningful simulation — zero setup required.",tech:["React","Cloudflare","Framer","Tailwind"],category:"Simulation",softwareType:"Web App",deployedUrl:"https://git-github-visualizer.learnerbisoyi.workers.dev"},{id:4,title:"Database Migrator",folderName:"dbmig",description:"A time-saving tool to migrate PostgreSQL databases across platforms, export/import via Excel, and preview data in minutes.",tech:["Flask","Python","React","PostgreSQL"],category:"Developer Utilities",softwareType:"Web App",deployedUrl:"https://witty-plant-027003000.7.azurestaticapps.net/"},{id:5,title:"AI Form Builder",folderName:"AIFormBuilder",description:"Create survey forms and manage them by just typing what you need — powered by AI for instant generation and management.",tech:["Groq","Python","React","D1SQLite"],category:"Productivity Tools",softwareType:"Web App",deployedUrl:"https://ai-form-builder-a4w.pages.dev"},{id:6,title:"TickKick",folderName:"TickKick",description:"A premium-looking todo tracker with a minimalist design and all the essentials you need to stay organized.",tech:["React"],category:"Productivity Tools",softwareType:"Web App",deployedUrl:"https://lemon-pebble-07c34c300.7.azurestaticapps.net"},{id:7,title:"Neon Video Editor",folderName:"NeonEditor",description:"An ultramodern and efficient video editor for content creators, gamers, and educators. Desktop-grade performance.",tech:["Electron","FFmpeg","React","Zustand","IPC","Tailwind"],category:"Creativity",softwareType:"Desktop App",deployedUrl:"https://github.com/adityarajbisoyi/Video-Editor/releases/download/v1.0.0/Neon.Video.Editor-0.1.0-setup.exe"}],O4=()=>{const[n,a]=O.useState(!1),[r,o]=O.useState("All"),[c,f]=O.useState("All"),[d,m]=O.useState(0),p=O.useCallback(()=>{m(_=>(_+1)%kt.length)},[]),g=()=>m(_=>(_-1+kt.length)%kt.length),v=()=>m(_=>(_+1)%kt.length),S=_=>m(_),b=(()=>{const _=c==="All"?kt:kt.filter(X=>X.softwareType===c);return["All",...Array.from(new Set(_.map(X=>X.category)))]})(),T=(()=>{const _=r==="All"?kt:kt.filter(X=>X.category===r);return["All",...Array.from(new Set(_.map(X=>X.softwareType)))]})(),M=_=>_==="All"?c==="All"?kt.length:kt.filter(X=>X.softwareType===c).length:(c==="All"?kt.filter(X=>X.category===_):kt.filter(X=>X.category===_&&X.softwareType===c)).length,B=_=>_==="All"?r==="All"?kt.length:kt.filter(X=>X.category===r).length:(r==="All"?kt.filter(X=>X.softwareType===_):kt.filter(X=>X.category===r&&X.softwareType===_)).length,U=_=>{o(_),c!=="All"&&((_==="All"?kt:kt.filter(ct=>ct.category===_)).map(ct=>ct.softwareType).includes(c)||f("All"))},F=_=>{f(_),r!=="All"&&((_==="All"?kt:kt.filter(ct=>ct.softwareType===_)).map(ct=>ct.category).includes(r)||o("All"))},P=kt.filter(_=>{const X=r==="All"||_.category===r,K=c==="All"||_.softwareType===c;return X&&K}),L=_=>{const X=_.currentTarget,K=X.getBoundingClientRect(),ct=(_.clientX-K.left)/K.width*100,Vt=(_.clientY-K.top)/K.height*100;X.style.setProperty("--mx",`${ct}%`),X.style.setProperty("--my",`${Vt}%`)},Z={hidden:{},visible:{transition:{staggerChildren:.07}}},G={hidden:{opacity:0,y:35},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.22,1,.36,1]}}},$=kt[d];return h.jsx(W6,{id:"projects",children:h.jsxs(J6,{children:[h.jsx(t4,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.5},children:"Selected Projects"}),h.jsxs(e4,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1},children:["Things I have ",h.jsx("span",{children:"built"})]}),h.jsx(Pe,{mode:"wait",children:n?h.jsxs(J.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.4},children:[h.jsx(n4,{children:h.jsxs(J.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},children:[h.jsx(Oy,{children:"Category"}),h.jsxs(By,{children:[b.map(_=>h.jsxs(Vy,{$active:r===_,onClick:()=>U(_),whileHover:{scale:1.04},whileTap:{scale:.96},children:[_,h.jsx(Ny,{$active:r===_,children:M(_)})]},_)),h.jsxs(a4,{children:[P.length," ",P.length===1?"project":"projects"]})]}),h.jsx(i4,{}),h.jsx(Oy,{style:{marginTop:"0.75rem"},children:"Platform"}),h.jsx(By,{children:T.map(_=>h.jsxs(Vy,{$active:c===_,onClick:()=>F(_),whileHover:{scale:1.04},whileTap:{scale:.96},children:[_,h.jsx(Ny,{$active:c===_,children:B(_)})]},_))})]})}),h.jsx(Pe,{mode:"wait",children:P.length===0?h.jsx(m4,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:"No projects match the selected filters."},"empty"):h.jsx(s4,{as:J.div,variants:Z,initial:"hidden",animate:"visible",children:P.map(_=>h.jsxs(xb,{variants:G,$accentColor:g4[_.category]||"#E8D5A3",onMouseMove:L,whileHover:{y:-6},transition:{duration:.3},children:[h.jsx(Sb,{children:h.jsx(z4,{folderName:_.folderName})}),h.jsxs(c4,{children:[h.jsxs(u4,{children:[h.jsx(f4,{children:_.title}),h.jsx(d4,{$type:_.softwareType,children:_.softwareType})]}),h.jsx(h4,{children:_.description}),h.jsx(p4,{children:_.tech.map(X=>h.jsx(Hy,{children:X},X))}),h.jsxs(Uy,{href:_.deployedUrl||"#",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.03},whileTap:{scale:.97},children:["Experience",h.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:h.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]},_.id))},"grid")}),h.jsxs(Gy,{onClick:()=>a(!1),whileHover:{scale:1.04},whileTap:{scale:.97},children:["Back to Slideshow",h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:h.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]},"grid"):h.jsxs(J.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.4},children:[h.jsx(y4,{children:h.jsx(Pe,{mode:"wait",children:h.jsxs(v4,{initial:{opacity:0,x:40},animate:{opacity:1,x:0},exit:{opacity:0,x:-40},transition:{duration:.5,ease:[.22,1,.36,1]},children:[h.jsx(b4,{children:h.jsx(k4,{folderName:$.folderName,onAllImagesDone:p})}),h.jsxs(A4,{children:[h.jsxs(T4,{children:["Project ",d+1," of ",kt.length]}),h.jsx(E4,{children:$.title}),h.jsx(j4,{$type:$.softwareType,children:$.softwareType}),h.jsx(D4,{children:$.description}),h.jsx(M4,{children:$.tech.map(_=>h.jsx(Hy,{children:_},_))}),h.jsxs(Uy,{href:$.deployedUrl||"#",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.03},whileTap:{scale:.97},style:{alignSelf:"flex-start"},children:["Experience",h.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:h.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]}),h.jsxs(C4,{children:[h.jsx(Fy,{onClick:g,children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:h.jsx("path",{d:"M15 18l-6-6 6-6"})})}),h.jsx(R4,{children:kt.map((_,X)=>h.jsx(_4,{$active:X===d,onClick:()=>S(X)},X))}),h.jsx(Fy,{onClick:v,children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:h.jsx("path",{d:"M9 18l6-6-6-6"})})})]})]})]},$.id)})}),h.jsxs(Gy,{onClick:()=>a(!0),whileHover:{scale:1.04},whileTap:{scale:.97},children:["Explore All Projects",h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:h.jsx("path",{d:"M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"})})]})]},"slideshow")})]})})},B4=Ua`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`,V4=Ua`
  0%, 100% { opacity: 0.8; transform: scale(1); box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.4); }
  50%      { opacity: 1; transform: scale(1.1); box-shadow: 0 0 16px 2px rgba(74, 222, 128, 0.7); }
`,N4=w.section`
  padding: 8.5rem 2rem 6rem;
  background: #0A0A0A;
  position: relative;
  overflow: hidden;
  scroll-margin-top: 80px;

  @media (max-width: 900px) { padding: 6.5rem 1.5rem 5rem; }
  @media (max-width: 600px) { padding: 5rem 1.25rem 4rem; }
`,L4=w.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`,H4=w(J.div)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #E8D5A3;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  z-index: 2;

  &::before {
    content: '';
    display: inline-block;
    width: 28px;
    height: 2px;
    background: #E8D5A3;
    flex-shrink: 0;
  }
`,U4=w(J.h2)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.4rem, 5.5vw, 4.5rem);
  font-weight: 700;
  color: #FFFFFF;
  letter-spacing: -2px;
  line-height: 1.08;
  margin-bottom: 1.25rem;
  position: relative;
  z-index: 2;
  max-width: 860px;

  span {
    color: #E8D5A3;
    font-style: italic;
    background: linear-gradient(135deg, #FFF6DC 0%, #E8D5A3 50%, #C4A96B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`,F4=w(J.p)`
  font-size: 1.08rem;
  line-height: 1.75;
  color: #D6D6D6;
  max-width: 640px;
  margin-bottom: 3.5rem;
  position: relative;
  z-index: 2;
`,G4=w.div`
  display: grid;
  grid-template-columns: 1fr 1.35fr;
  gap: 3.5rem;
  position: relative;
  z-index: 2;
  width: 100%;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,Y4=w(J.div)`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`,q4=w.div`
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(232, 213, 163, 0.2);
  border-radius: 18px;
  padding: 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(232, 213, 163, 0.4), transparent);
  }
`,P4=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
`,X4=w.div`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #4ADE80;
  background: rgba(74, 222, 128, 0.1);
  padding: 0.35rem 0.8rem;
  border-radius: 100px;
  border: 1px solid rgba(74, 222, 128, 0.3);
`,$4=w.span`
  width: 7px; height: 7px;
  border-radius: 50%;
  background: #4ADE80;
  display: inline-block;
  animation: ${V4} 2s infinite ease-in-out;
`,Q4=w.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: #E8D5A3;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`,K4=w.p`
  font-size: 0.92rem;
  line-height: 1.65;
  color: #CFCFCF;
  margin: 0;
`,Z4=w.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,gl=w(J.a)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 1.75rem;
  background: #121212;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 3px; height: 100%;
    background: ${n=>n.$accent||"#E8D5A3"};
    opacity: 0.8;
    transition: width 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px);
    border-color: ${n=>n.$borderHover||"rgba(232, 213, 163, 0.4)"};
    background: #171717;
    box-shadow: 0 14px 40px ${n=>n.$glow||"rgba(232, 213, 163, 0.15)"};
    &::before { width: 5px; }
  }
`,Yy=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,qy=w.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,Py=w.div`
  width: 46px; height: 46px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${n=>n.$bg||"rgba(255, 255, 255, 0.06)"};
  border: 1px solid ${n=>n.$border||"rgba(255, 255, 255, 0.12)"};
  color: ${n=>n.$color||"#FFFFFF"};
  flex-shrink: 0;
  transition: transform 0.3s ease;
  ${gl}:hover & { transform: scale(1.08); }
`,Xy=w.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`,$y=w.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${n=>n.$color||"#E8D5A3"};
`,Qy=w.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0;
`,Ky=w.div`
  width: 32px; height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E8D5A3;
  transition: all 0.3s ease;
  ${gl}:hover & {
    background: #E8D5A3;
    color: #0A0A0A;
    transform: translate(2px, -2px);
  }
`,Zy=w.p`
  font-size: 0.88rem;
  line-height: 1.55;
  color: #C2C2C2;
  margin: 0;
`,Iy=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,gf=w.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #E0E0E0;
`,I4=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.25rem;
`,qo=w.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  padding: 0.3rem 0.7rem;
  border-radius: 8px;
  background: rgba(232, 213, 163, 0.08);
  border: 1px solid rgba(232, 213, 163, 0.2);
  color: #E8D5A3;
`,W4=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  background: rgba(232, 213, 163, 0.03);
  border: 1px dashed rgba(232, 213, 163, 0.25);
  border-radius: 16px;
  gap: 1rem;
  flex-wrap: wrap;
`,J4=w.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,tD=w.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #E8D5A3;
`,eD=w.a`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.98rem;
  font-weight: 600;
  color: #FFFFFF;
  text-decoration: none;
  transition: color 0.2s ease;
  &:hover { color: #E8D5A3; }
`,nD=w.button`
  background: rgba(232, 213, 163, 0.12);
  border: 1px solid rgba(232, 213, 163, 0.3);
  color: #E8D5A3;
  padding: 0.45rem 0.9rem;
  border-radius: 8px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  &:hover {
    background: #E8D5A3;
    color: #0A0A0A;
    box-shadow: 0 4px 12px rgba(232, 213, 163, 0.3);
  }
`,iD=w(J.div)`
  background: radial-gradient(circle at 100% 0%, rgba(232, 213, 163, 0.06) 0%, rgba(16, 16, 16, 0.96) 70%);
  border: 1px solid rgba(232, 213, 163, 0.25);
  border-radius: 24px;
  padding: 2.5rem;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 600px) { padding: 1.5rem; }
`,aD=w.div`
  margin-bottom: 2rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`,sD=w.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0 0 0.35rem 0;
`,rD=w.p`
  font-size: 0.88rem;
  color: #A8A8A8;
  line-height: 1.5;
  margin: 0;
`,yf=w(J.div)`
  min-height: 320px;
  display: flex;
  flex-direction: column;
`,oD=w.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`,lD=w(J.button)`
  background: ${n=>n.$active?"rgba(232, 213, 163, 0.12)":"rgba(255, 255, 255, 0.03)"};
  border: 1px solid ${n=>n.$active?"#E8D5A3":"rgba(255, 255, 255, 0.12)"};
  border-radius: 14px;
  padding: 1rem;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.25s ease;
  box-shadow: ${n=>n.$active?"0 0 20px rgba(232, 213, 163, 0.15)":"none"};

  &:hover {
    border-color: rgba(232, 213, 163, 0.5);
    background: rgba(232, 213, 163, 0.06);
  }
`,cD=w.div`
  width: 16px; height: 16px;
  border-radius: 50%;
  border: 2px solid ${n=>n.$active?"#E8D5A3":"rgba(255, 255, 255, 0.25)"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: border-color 0.2s ease;

  &::after {
    content: '';
    width: 8px; height: 8px;
    border-radius: 50%;
    background: ${n=>n.$active?"#E8D5A3":"transparent"};
    transition: background 0.2s ease;
  }
`,uD=w.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`,fD=w.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  color: ${n=>n.$active?"#FFFFFF":"#E0E0E0"};
`,dD=w.span`
  font-size: 0.76rem;
  color: #909090;
  line-height: 1.35;
`,hD=w.div`
  margin-bottom: 1.5rem;
`,vf=w.span`
  display: block;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #E8D5A3;
  margin-bottom: 0.6rem;
`,Wy=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
`,pD=w.button`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.45rem 0.95rem;
  border-radius: 100px;
  cursor: pointer;
  border: 1px solid ${n=>n.$active?"#E8D5A3":"rgba(255, 255, 255, 0.15)"};
  background: ${n=>n.$active?"rgba(232, 213, 163, 0.18)":"rgba(255, 255, 255, 0.03)"};
  color: ${n=>n.$active?"#FFFFFF":"#B8B8B8"};
  transition: all 0.2s ease;
  &:hover { border-color: #E8D5A3; color: #FFFFFF; }
`,mD=w.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
`,Qs=w.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,Po=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Ks=w.label`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`,bf=w.span`
  color: #E8D5A3;
  font-size: 0.85rem;
`,xf=w.div`
  position: relative;
  display: flex;
  align-items: center;
`,Sf=w.div`
  position: absolute;
  left: 1rem;
  color: #777;
  display: flex;
  align-items: center;
  pointer-events: none;
`,Xo=w.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${n=>n.$error?"#FF5F56":"rgba(255, 255, 255, 0.18)"};
  border-radius: 12px;
  padding: 0.95rem 1.15rem 0.95rem 2.85rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.96rem;
  font-weight: 500;
  color: #FFFFFF;
  outline: none;
  transition: all 0.25s ease;
  &::placeholder { color: #606060; }
  &:focus {
    border-color: #E8D5A3;
    background: rgba(232, 213, 163, 0.05);
    box-shadow: 0 0 18px rgba(232, 213, 163, 0.2);
  }
`,wf=w.span`
  font-size: 0.74rem;
  color: #FF5F56;
  font-weight: 500;
`,gD=w.div`
  background: rgba(232, 213, 163, 0.06);
  border: 1px solid rgba(232, 213, 163, 0.2);
  border-radius: 12px;
  padding: 0.85rem 1.1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.78rem;
  color: #D0D0D0;
`,Jy=w.span`
  background: rgba(232, 213, 163, 0.12);
  border: 1px solid rgba(232, 213, 163, 0.25);
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  color: #E8D5A3;
  font-weight: 700;
  font-size: 0.72rem;
`,yD=w.div`
  margin-bottom: 1rem;
`,vD=w.span`
  display: block;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #888;
  margin-bottom: 0.45rem;
`,bD=w.button`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #C8C8C8;
  font-size: 0.74rem;
  padding: 0.3rem 0.7rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    border-color: #E8D5A3;
    color: #E8D5A3;
    background: rgba(232, 213, 163, 0.08);
  }
`,xD=w.textarea`
  width: 100%;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${n=>n.$error?"#FF5F56":"rgba(255, 255, 255, 0.18)"};
  border-radius: 12px;
  padding: 1rem 1.15rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.96rem;
  font-weight: 500;
  color: #FFFFFF;
  outline: none;
  resize: vertical;
  min-height: 110px;
  transition: all 0.25s ease;
  &::placeholder { color: #606060; }
  &:focus {
    border-color: #E8D5A3;
    background: rgba(232, 213, 163, 0.05);
    box-shadow: 0 0 18px rgba(232, 213, 163, 0.2);
  }
`,Af=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1rem;
`,t1=w.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  padding: 0.85rem 1.3rem;
  border-radius: 12px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.25s ease;
  &:hover {
    border-color: #E8D5A3;
    color: #E8D5A3;
  }
`,Tf=w(J.button)`
  background: linear-gradient(90deg, #C4A96B, #F0DFB4, #FFFFFF, #F0DFB4, #C4A96B);
  background-size: 200% auto;
  border: none;
  color: #0A0A0A;
  padding: 0.95rem 1.8rem;
  border-radius: 12px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.86rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  box-shadow: 0 8px 24px rgba(232, 213, 163, 0.25);
  transition: all 0.3s ease;
  margin-left: auto;
  &:hover {
    animation: ${B4} 2s linear infinite;
    box-shadow: 0 12px 32px rgba(232, 213, 163, 0.4);
  }
  &:disabled { opacity: 0.5; cursor: not-allowed; animation: none; }
`,SD=w(J.div)`
  background: rgba(232, 213, 163, 0.05);
  border: 1px solid rgba(232, 213, 163, 0.3);
  border-radius: 20px;
  padding: 3.5rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`,wD=w.div`
  width: 72px; height: 72px;
  border-radius: 50%;
  background: rgba(232, 213, 163, 0.15);
  border: 2px solid #E8D5A3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E8D5A3;
  box-shadow: 0 0 30px rgba(232, 213, 163, 0.3);
`,AD=w.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.85rem;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0;
`,TD=w.p`
  font-size: 0.98rem;
  line-height: 1.7;
  color: #CCCCCC;
  max-width: 490px;
  margin: 0;
  strong { color: #E8D5A3; }
`,ED=w.button`
  background: transparent;
  border: 1px solid rgba(232, 213, 163, 0.4);
  color: #E8D5A3;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 0.75rem 1.6rem;
  border-radius: 100px;
  cursor: pointer;
  margin-top: 0.75rem;
  transition: all 0.25s ease;
  &:hover {
    background: #E8D5A3;
    color: #0A0A0A;
    box-shadow: 0 4px 16px rgba(232, 213, 163, 0.3);
  }
`,$o=[{id:"fullstack",name:"Full-Stack Development",sub:"Scalable platforms, modern web apps & APIs"},{id:"ai",name:"AI & Automation",sub:"LLMs, agentic workflows & intelligent systems"},{id:"frontend",name:"Interactive UI & 3D Web",sub:"High-end visuals, shaders & responsive UI"},{id:"architecture",name:"System Architecture",sub:"Distributed systems, cloud & infrastructure"},{id:"consulting",name:"Technical Advisory",sub:"Code review, scaling strategies & tech audit"},{id:"opportunity",name:"Role & Collaboration",sub:"Engineering roles, contracts & partnerships"}],e1=["< 2 Weeks","1 – 3 Months","Ongoing / Full-Time","Flexible / Advisory"],jD=["Looking to build an MVP from scratch","Need technical review for architecture","Discussing a software engineering role","Interested in AI integration"],Ef={enter:{clipPath:"inset(0 100% 0 0)",opacity:.5},center:{clipPath:"inset(0 0% 0 0)",opacity:1,transition:{duration:.5,ease:[.22,1,.36,1]}},exit:{clipPath:"inset(0 0 0 100%)",opacity:0,transition:{duration:.35,ease:[.22,1,.36,1]}}},DD=()=>{const[n,a]=O.useState(1),[r,o]=O.useState($o[0].name),[c,f]=O.useState(e1[1]),[d,m]=O.useState({name:"",email:"",company:"",subject:`Project inquiry: ${$o[0].name}`,message:""}),[p,g]=O.useState({}),[v,S]=O.useState(!1),[b,T]=O.useState(!1),[M,B]=O.useState(!1),U=()=>{navigator.clipboard.writeText("learnerbisoyi@gmail.com"),B(!0),setTimeout(()=>B(!1),2200)},F=K=>{o(K),m(ct=>({...ct,subject:`Project inquiry: ${K} (${c})`}))},P=K=>{f(K),m(ct=>({...ct,subject:`Project inquiry: ${r} (${K})`}))},L=()=>{const K={};return d.name.trim()||(K.name="Name is required"),d.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim())||(K.email="Enter a valid email"):K.email="Email is required",g(K),Object.keys(K).length===0},Z=()=>{n===1?a(2):n===2&&L()&&a(3)},G=()=>{n>1&&a(K=>K-1)},$=K=>{m(ct=>({...ct,message:ct.message?`${ct.message}

${K}`:K}))},_=async K=>{if(K.preventDefault(),!d.message.trim()){g({message:"Please add a message"});return}S(!0);try{if((await fetch("https://formspree.io/f/mvgqalng",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:d.name,email:d.email,company:d.company||"Not specified",intent:r,timeline:c,subject:d.subject,message:d.message,_replyto:d.email})})).ok)T(!0);else throw new Error}catch{alert("Could not send message. You can reach Aditya directly at learnerbisoyi@gmail.com")}finally{S(!1)}},X=()=>{T(!1),a(1),m({name:"",email:"",company:"",subject:`Project inquiry: ${$o[0].name}`,message:""}),g({})};return h.jsx(N4,{id:"contact",children:h.jsxs(L4,{children:[h.jsx(H4,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.5},children:"Direct Channel"}),h.jsxs(U4,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.65,delay:.1},children:["Let us build something ",h.jsx("span",{children:"remarkable"})," together"]}),h.jsx(F4,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2},children:"Have a product to build, an engineering opportunity, or a bold vision? Send a message below or connect directly across channels."}),h.jsxs(G4,{children:[h.jsxs(Y4,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.7,delay:.2},children:[h.jsxs(q4,{children:[h.jsxs(P4,{children:[h.jsxs(X4,{children:[h.jsx($4,{})," Online & Available"]}),h.jsxs(Q4,{children:[h.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[h.jsx("circle",{cx:"12",cy:"12",r:"10"}),h.jsx("polyline",{points:"12 6 12 12 16 14"})]}),"Bangalore, India (IST)"]})]}),h.jsx(K4,{children:"Currently reviewing select projects, engineering roles, and high-impact software collaborations. Typical response turnaround is under 24 hours."})]}),h.jsxs(Z4,{children:[h.jsxs(gl,{href:"https://github.com/adityarajbisoyi",target:"_blank",rel:"noreferrer",$accent:"#FFFFFF",$borderHover:"rgba(255, 255, 255, 0.4)",$glow:"rgba(255, 255, 255, 0.08)",children:[h.jsxs(Yy,{children:[h.jsxs(qy,{children:[h.jsx(Py,{$bg:"rgba(255,255,255,0.08)",$border:"rgba(255,255,255,0.2)",$color:"#FFFFFF",children:h.jsx("svg",{width:"26",height:"26",viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"})})}),h.jsxs(Xy,{children:[h.jsx($y,{$color:"#D6D6D6",children:"GitHub"}),h.jsx(Qy,{children:"@adityarajbisoyi"})]})]}),h.jsx(Ky,{children:h.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:h.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17"})})})]}),h.jsx(Zy,{children:"Full-stack tools, video editors, fitness trackers, git visualizers & TUI applications."}),h.jsx(Iy,{children:h.jsx(gf,{children:"TypeScript · Python · JS"})}),h.jsxs(I4,{children:[h.jsx(qo,{children:"Pair Extraordinaire"}),h.jsx(qo,{children:"Pull Shark x2"}),h.jsx(qo,{children:"Quickdraw"}),h.jsx(qo,{children:"YOLO"})]})]}),h.jsxs(gl,{href:"https://www.linkedin.com/in/aditya-raj-bisoyi-a82154328/",target:"_blank",rel:"noreferrer",$accent:"#0A66C2",$borderHover:"rgba(10, 102, 194, 0.45)",$glow:"rgba(10, 102, 194, 0.2)",children:[h.jsxs(Yy,{children:[h.jsxs(qy,{children:[h.jsx(Py,{$bg:"rgba(10,102,194,0.15)",$border:"rgba(10,102,194,0.35)",$color:"#0A66C2",children:h.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3z"})})}),h.jsxs(Xy,{children:[h.jsx($y,{$color:"#60A5FA",children:"LinkedIn"}),h.jsx(Qy,{children:"Aditya Raj Bisoyi"})]})]}),h.jsx(Ky,{children:h.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:h.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17"})})})]}),h.jsx(Zy,{children:"Full-stack developer in Bangalore, experienced with React, Python, PostgreSQL, Docker & Cloudflare platforms."}),h.jsxs(Iy,{children:[h.jsx(gf,{children:"Software Engineer"}),h.jsx(gf,{children:"Bangalore, India"})]})]})]}),h.jsxs(W4,{children:[h.jsxs(J4,{children:[h.jsx(tD,{children:"Email"}),h.jsx(eD,{href:"mailto:learnerbisoyi@gmail.com",children:"learnerbisoyi@gmail.com"})]}),h.jsx(nD,{type:"button",onClick:U,children:M?h.jsxs(h.Fragment,{children:[h.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:h.jsx("polyline",{points:"20 6 9 17 4 12"})})," Copied!"]}):h.jsxs(h.Fragment,{children:[h.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[h.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),h.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})," Copy"]})})]})]}),h.jsx(iD,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.7,delay:.3},children:b?h.jsxs(SD,{initial:{opacity:0,scale:.94},animate:{opacity:1,scale:1},transition:{duration:.5},children:[h.jsx(wD,{children:h.jsx("svg",{width:"34",height:"34",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:h.jsx("polyline",{points:"20 6 9 17 4 12"})})}),h.jsx(AD,{children:"Message Sent!"}),h.jsxs(TD,{children:["Thanks, ",h.jsx("strong",{children:d.name}),". Your message about ",h.jsx("strong",{children:r})," has been received. I will get back to you at ",h.jsx("strong",{children:d.email})," within 24 hours."]}),h.jsx(ED,{type:"button",onClick:X,children:"Send Another Message"})]}):h.jsxs("form",{onSubmit:_,children:[h.jsxs(aD,{children:[h.jsx(sD,{children:"Get in Touch"}),h.jsx(rD,{children:"Tell me about your project or idea — I would love to hear from you."})]}),h.jsxs(Pe,{mode:"wait",children:[n===1&&h.jsxs(yf,{variants:Ef,initial:"enter",animate:"center",exit:"exit",children:[h.jsx(vf,{style:{marginBottom:"0.75rem"},children:"What are you looking for?"}),h.jsx(oD,{children:$o.map(K=>h.jsxs(lD,{type:"button",$active:r===K.name,onClick:()=>F(K.name),whileTap:{scale:.98},children:[h.jsx(cD,{$active:r===K.name}),h.jsxs(uD,{children:[h.jsx(fD,{$active:r===K.name,children:K.name}),h.jsx(dD,{children:K.sub})]})]},K.id))}),h.jsxs(hD,{children:[h.jsx(vf,{children:"Timeline"}),h.jsx(Wy,{children:e1.map(K=>h.jsx(pD,{type:"button",$active:c===K,onClick:()=>P(K),children:K},K))})]}),h.jsx(Af,{children:h.jsxs(Tf,{type:"button",onClick:Z,whileHover:{scale:1.02},whileTap:{scale:.98},children:["Next",h.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:h.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})})]},"s1"),n===2&&h.jsxs(yf,{variants:Ef,initial:"enter",animate:"center",exit:"exit",children:[h.jsx(vf,{style:{marginBottom:"0.75rem"},children:"A little about you"}),h.jsxs(mD,{children:[h.jsxs(Qs,{children:[h.jsxs(Po,{children:[h.jsxs(Ks,{htmlFor:"c-name",children:["Your Name ",h.jsx(bf,{children:"*"})]}),p.name&&h.jsx(wf,{children:p.name})]}),h.jsxs(xf,{children:[h.jsx(Sf,{children:h.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[h.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),h.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}),h.jsx(Xo,{id:"c-name",type:"text",required:!0,placeholder:"e.g. Alex Vance",$error:!!p.name,value:d.name,onChange:K=>{m({...d,name:K.target.value}),p.name&&g({...p,name:null})}})]})]}),h.jsxs(Qs,{children:[h.jsxs(Po,{children:[h.jsxs(Ks,{htmlFor:"c-email",children:["Email ",h.jsx(bf,{children:"*"})]}),p.email&&h.jsx(wf,{children:p.email})]}),h.jsxs(xf,{children:[h.jsx(Sf,{children:h.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[h.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),h.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),h.jsx(Xo,{id:"c-email",type:"email",required:!0,placeholder:"e.g. alex@company.com",$error:!!p.email,value:d.email,onChange:K=>{m({...d,email:K.target.value}),p.email&&g({...p,email:null})}})]})]}),h.jsxs(Qs,{children:[h.jsx(Po,{children:h.jsxs(Ks,{htmlFor:"c-company",children:["Company / Project ",h.jsx("span",{style:{color:"#666",fontWeight:"normal",textTransform:"none"},children:"(optional)"})]})}),h.jsxs(xf,{children:[h.jsx(Sf,{children:h.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[h.jsx("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),h.jsx("path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"})]})}),h.jsx(Xo,{id:"c-company",type:"text",placeholder:"e.g. Acme Labs",value:d.company,onChange:K=>m({...d,company:K.target.value})})]})]})]}),h.jsxs(Af,{children:[h.jsxs(t1,{type:"button",onClick:G,children:[h.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:h.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back"]}),h.jsxs(Tf,{type:"button",onClick:Z,whileHover:{scale:1.02},whileTap:{scale:.98},children:["Next",h.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:h.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]},"s2"),n===3&&h.jsxs(yf,{variants:Ef,initial:"enter",animate:"center",exit:"exit",children:[h.jsxs(gD,{children:[h.jsx(Jy,{children:r}),h.jsx(Jy,{children:c}),h.jsx("span",{style:{marginLeft:"auto",color:"#888",fontSize:"0.72rem",cursor:"pointer"},onClick:()=>a(1),children:"Edit"})]}),h.jsxs(Qs,{style:{marginBottom:"1rem"},children:[h.jsx(Ks,{htmlFor:"c-subject",children:"Subject"}),h.jsx(Xo,{id:"c-subject",type:"text",required:!0,value:d.subject,onChange:K=>m({...d,subject:K.target.value}),placeholder:"Subject...",style:{paddingLeft:"1.15rem"}})]}),h.jsxs(yD,{children:[h.jsx(vD,{children:"Quick starters"}),h.jsx(Wy,{children:jD.map((K,ct)=>h.jsxs(bD,{type:"button",onClick:()=>$(K),children:["+ ",K]},ct))})]}),h.jsxs(Qs,{style:{marginBottom:"1.5rem"},children:[h.jsxs(Po,{children:[h.jsxs(Ks,{htmlFor:"c-msg",children:["Your Message ",h.jsx(bf,{children:"*"})]}),p.message&&h.jsx(wf,{children:p.message})]}),h.jsx(xD,{id:"c-msg",required:!0,$error:!!p.message,placeholder:"Describe your project, timeline, and any specific questions...",value:d.message,onChange:K=>{m({...d,message:K.target.value}),p.message&&g({...p,message:null})}})]}),h.jsxs(Af,{children:[h.jsxs(t1,{type:"button",onClick:G,children:[h.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:h.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back"]}),h.jsx(Tf,{type:"submit",disabled:v||!d.message.trim(),whileHover:{scale:1.02},whileTap:{scale:.98},children:v?"Sending...":h.jsxs(h.Fragment,{children:["Send Message",h.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[h.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),h.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})]})})]})]},"s3")]})]})})]})]})})},Ie=[{id:1,title:"IBM RAG and Agentic AI Professional Certificate",issuer:"IBM",date:"Sep 2026",credentialId:"Q1RY6EZTO52M",skills:["Retrieval-Augmented Generation (RAG)","Agentic AI Development"],description:"Earned the IBM RAG and Agentic AI Professional Certificate, demonstrating proficiency in designing and deploying advanced generative AI applications and autonomous multi-agent pipelines.",category:"AI & Agents"},{id:2,title:"Docker Foundations Professional Certificate",issuer:"Docker, Inc",date:"Nov 2025",credentialId:null,skills:["Docker Products","Containerization"],description:"Verified competencies in container architecture, Dockerfile optimization, multi-container compose configurations, and isolated reproducible development environments.",category:"DevOps & Tools"},{id:3,title:"Foundation: Introduction to LangGraph",issuer:"LangChain",date:"Nov 2025",credentialId:"jcphbyrpdw",skills:["Multi-agent Systems","AI Agents"],description:"Mastered core LangGraph architectures for stateful cyclic graphs, branching agent workflows, memory persistence, and human-in-the-loop controls.",category:"AI & Agents"},{id:4,title:"Essential Skills in Adobe Premiere Pro 2025 Professional Certificate",issuer:"Adobe",date:"Jul 2025",credentialId:null,skills:["Non-linear Editing","Video Editing"],description:"Industry credential covering professional non-linear video editing, audio-visual timing, multi-track sequencing, and high-performance post-production workflows.",category:"Creative & Media"},{id:5,title:"Career Essentials in GitHub Professional Certificate",issuer:"GitHub",date:"Jul 2025",credentialId:null,skills:["GitHub","Git Version Control"],description:"Practical validation in collaborative Git development, pull request workflows, branch protection rules, and enterprise repository management.",category:"DevOps & Tools"},{id:6,title:"Google Data Analytics",issuer:"Google",date:"Aug 2024",credentialId:"VM1T4RCWUNGY",skills:["Data Analytics","SQL","Spreadsheets"],description:"Comprehensive program covering end-to-end data analytics lifecycle, structured data transformation, SQL querying, analytical thinking, and visual storytelling.",category:"Data & Analytics"},{id:7,title:"Google Cybersecurity",issuer:"Google",date:"Jun 2024",credentialId:"G2HCQGUPVX8JC",skills:["Cybersecurity","Network Security"],description:"Hands-on practice in identifying cyber threats, vulnerabilities, SIEM tooling, network defense architectures, and proactive incident response.",category:"Security"}],MD=["All",...Array.from(new Set(Ie.map(n=>n.category)))],CD=[{name:"Pair Extraordinaire",description:"Co-authored commits on merged pull requests",icon:"🤝"},{name:"Pull Shark x2",description:"Opened pull requests that have been merged — earned twice",icon:"🦈"},{name:"Quickdraw",description:"Closed an issue or pull request within 5 minutes of opening",icon:"⚡"},{name:"YOLO",description:"Merged a pull request without code review",icon:"🎲"}],RD=w.section`
  padding: 8.5rem 2rem 6rem;
  background: #0A0A0A;
  position: relative;
  overflow: hidden;
  scroll-margin-top: 80px;

  @media (max-width: 900px) { padding: 6.5rem 1.5rem 5rem; }
  @media (max-width: 600px) { padding: 5rem 1.25rem 4rem; }
`,_D=w.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`,n1=w(J.div)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #E8D5A3;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  z-index: 2;

  &::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 1px;
    background: #E8D5A3;
  }
`,zD=w(J.h2)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -1.5px;
  line-height: 1.1;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;

  span { color: #E8D5A3; }
`,kD=w(J.div)`
  background: #121212;
  border: 1px solid rgba(232, 213, 163, 0.2);
  border-radius: 24px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
  max-width: 780px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #E8D5A3, transparent);
  }

  @media (max-width: 600px) { padding: 1.5rem; }
`,OD=w.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #E8D5A3;
  text-transform: uppercase;
`,BD=w.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
`,VD=w.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #C4A96B;
  background: rgba(232, 213, 163, 0.1);
  border: 1px solid rgba(232, 213, 163, 0.25);
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
`,ND=w.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  color: #888;
`,i1=w.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  padding: 0.22rem 0.6rem;
  border-radius: 6px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-left: auto;
  background: ${n=>({"AI & Agents":"rgba(168, 85, 247, 0.12)","DevOps & Tools":"rgba(251, 191, 36, 0.12)","Creative & Media":"rgba(244, 63, 94, 0.12)","Data & Analytics":"rgba(56, 189, 248, 0.12)",Security:"rgba(239, 68, 68, 0.12)"})[n.$cat]||"rgba(255,255,255,0.08)"};
  color: ${n=>({"AI & Agents":"#C084FC","DevOps & Tools":"#FBBF24","Creative & Media":"#FB7185","Data & Analytics":"#38BDF8",Security:"#F87171"})[n.$cat]||"#E8D5A3"};
  border: 1px solid ${n=>({"AI & Agents":"rgba(168, 85, 247, 0.3)","DevOps & Tools":"rgba(251, 191, 36, 0.3)","Creative & Media":"rgba(244, 63, 94, 0.3)","Data & Analytics":"rgba(56, 189, 248, 0.3)",Security:"rgba(239, 68, 68, 0.3)"})[n.$cat]||"rgba(255,255,255,0.15)"};
`,LD=w.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.55rem;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 1.25;
  margin: 0;

  @media (max-width: 600px) { font-size: 1.3rem; }
`,HD=w.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: #C8C8C8;
  margin: 0;
`,a1=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 0.2rem;
`,s1=w.span`
  font-size: 0.72rem;
  color: #D6D6D6;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
  font-family: 'Space Grotesk', sans-serif;
`,r1=w.div`
  font-size: 0.72rem;
  color: #8E8E8E;
  font-family: monospace;
  letter-spacing: 0.5px;
`,UD=w.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
`,o1=w.button`
  width: 42px; height: 42px;
  border-radius: 50%;
  border: 1px solid rgba(232, 213, 163, 0.3);
  background: rgba(232, 213, 163, 0.06);
  color: #E8D5A3;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #E8D5A3;
    color: #0A0A0A;
  }

  svg { width: 16px; height: 16px; }
`,FD=w.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
`,GD=w.button`
  width: ${n=>n.$active?"24px":"8px"};
  height: 8px;
  border-radius: 4px;
  background: ${n=>n.$active?"#E8D5A3":"rgba(255,255,255,0.15)"};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover { background: rgba(232, 213, 163, 0.5); }
`,l1=w(J.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin: 2.5rem auto 0;
  padding: 0.85rem 2rem;
  border-radius: 100px;
  border: 1px solid rgba(232, 213, 163, 0.35);
  background: rgba(232, 213, 163, 0.06);
  color: #E8D5A3;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.84rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: #E8D5A3;
    color: #0A0A0A;
    box-shadow: 0 6px 20px rgba(232, 213, 163, 0.3);
  }

  svg { width: 14px; height: 14px; }
`,YD=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 2rem;
`,qD=w(J.button)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  padding: 0.5rem 1.15rem;
  border-radius: 100px;
  cursor: pointer;
  white-space: nowrap;
  border: 1px solid ${n=>n.$active?"#E8D5A3":"rgba(255,255,255,0.18)"};
  background: ${n=>n.$active?"rgba(232, 213, 163, 0.22)":"rgba(255,255,255,0.04)"};
  color: ${n=>n.$active?"#FFFFFF":"#D6D6D6"};
  letter-spacing: 0.4px;
  transition: all 0.22s ease;

  &:hover {
    border-color: rgba(232, 213, 163, 0.6);
    color: #FFFFFF;
  }
`,PD=w(J.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(340px, 100%), 1fr));
  gap: 1.5rem;
`,XD=w(J.div)`
  background: #141414;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  transition: all 0.35s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: ${n=>({"AI & Agents":"#C084FC","DevOps & Tools":"#FBBF24","Creative & Media":"#FB7185","Data & Analytics":"#38BDF8",Security:"#F87171"})[n.$cat]||"#E8D5A3"};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: rgba(232, 213, 163, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 16px 45px rgba(0, 0, 0, 0.55);
    &::before { opacity: 1; }
  }
`,$D=w.h4`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0;
  line-height: 1.3;
`,QD=w.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  color: #E8D5A3;
`,KD=w.p`
  font-size: 0.88rem;
  line-height: 1.6;
  color: #B8B8B8;
  margin: 0;
`,ZD=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  gap: 0.5rem;
  padding-top: 0.5rem;
`,ID=w.span`
  font-size: 0.72rem;
  font-weight: 600;
  color: #888;
`,WD=w.div`
  margin-top: 5rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`,JD=w.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(260px, 100%), 1fr));
  gap: 1.25rem;
  margin-top: 2rem;
`,t8=w(J.div)`
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(232, 213, 163, 0.15);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(232, 213, 163, 0.4);
    background: rgba(232, 213, 163, 0.04);
    transform: translateY(-2px);
  }
`,e8=w.div`
  font-size: 1.8rem;
  flex-shrink: 0;
  line-height: 1;
`,n8=w.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`,i8=w.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #FFFFFF;
`,a8=w.span`
  font-size: 0.82rem;
  color: #999;
  line-height: 1.45;
`,s8=()=>{const[n,a]=O.useState(!1),[r,o]=O.useState(0),[c,f]=O.useState("All"),d=O.useRef(null);O.useEffect(()=>{if(!n)return d.current=setInterval(()=>{o(b=>(b+1)%Ie.length)},3e3),()=>clearInterval(d.current)},[n]);const m=()=>o(b=>(b-1+Ie.length)%Ie.length),p=()=>o(b=>(b+1)%Ie.length),g=b=>o(b),v=Ie[r],S=c==="All"?Ie:Ie.filter(b=>b.category===c);return h.jsx(RD,{id:"certifications",children:h.jsxs(_D,{children:[h.jsx(n1,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.5},children:"Certifications & Achievements"}),h.jsxs(zD,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1},children:["Licenses & ",h.jsx("span",{children:"Certifications"})]}),h.jsx(Pe,{mode:"wait",children:n?h.jsxs(J.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.4},children:[h.jsx(YD,{children:MD.map(b=>h.jsx(qD,{$active:c===b,onClick:()=>f(b),whileHover:{scale:1.04},whileTap:{scale:.96},children:b},b))}),h.jsx(PD,{variants:{hidden:{},visible:{transition:{staggerChildren:.06}}},initial:"hidden",animate:"visible",children:S.map(b=>h.jsxs(XD,{$cat:b.category,variants:{hidden:{opacity:0,y:25},visible:{opacity:1,y:0,transition:{duration:.5,ease:[.22,1,.36,1]}}},children:[h.jsx($D,{children:b.title}),h.jsx(QD,{children:b.issuer}),h.jsx(KD,{children:b.description}),b.skills&&b.skills.length>0&&h.jsx(a1,{children:b.skills.map(T=>h.jsx(s1,{children:T},T))}),b.credentialId&&h.jsxs(r1,{children:["ID: ",b.credentialId]}),h.jsxs(ZD,{children:[h.jsx(i1,{$cat:b.category,children:b.category}),h.jsx(ID,{children:b.date})]})]},b.id))}),h.jsxs(l1,{onClick:()=>a(!1),whileHover:{scale:1.04},whileTap:{scale:.97},children:["Back to Slideshow",h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:h.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]},"grid"):h.jsxs(J.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.4},children:[h.jsx(Pe,{mode:"wait",children:h.jsxs(kD,{initial:{opacity:0,x:30},animate:{opacity:1,x:0},exit:{opacity:0,x:-30},transition:{duration:.4,ease:[.22,1,.36,1]},children:[h.jsxs(OD,{children:["Certificate ",r+1," of ",Ie.length]}),h.jsxs(BD,{children:[h.jsx(VD,{children:v.issuer}),h.jsx(ND,{children:v.date}),h.jsx(i1,{$cat:v.category,children:v.category})]}),h.jsx(LD,{children:v.title}),h.jsx(HD,{children:v.description}),v.skills&&v.skills.length>0&&h.jsx(a1,{children:v.skills.map(b=>h.jsx(s1,{children:b},b))}),v.credentialId&&h.jsxs(r1,{children:["Credential ID: ",v.credentialId]}),h.jsxs(UD,{children:[h.jsx(o1,{onClick:m,"aria-label":"Previous Certificate",children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:h.jsx("path",{d:"M15 18l-6-6 6-6"})})}),h.jsx(FD,{children:Ie.map((b,T)=>h.jsx(GD,{$active:T===r,onClick:()=>g(T),"aria-label":`Go to slide ${T+1}`},T))}),h.jsx(o1,{onClick:p,"aria-label":"Next Certificate",children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:h.jsx("path",{d:"M9 18l6-6-6-6"})})})]})]},v.id)}),h.jsxs(l1,{onClick:()=>a(!0),whileHover:{scale:1.04},whileTap:{scale:.97},children:["View All Certifications (",Ie.length,")",h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:h.jsx("path",{d:"M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"})})]})]},"slideshow")}),h.jsxs(WD,{children:[h.jsx(n1,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.5},children:"GitHub Achievements"}),h.jsx(JD,{children:CD.map((b,T)=>h.jsxs(t8,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:T*.08},children:[h.jsx(e8,{children:b.icon}),h.jsxs(n8,{children:[h.jsx(i8,{children:b.name}),h.jsx(a8,{children:b.description})]})]},b.name))})]})]})})},r8=w.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.4;
`,o8=()=>{const n=O.useRef(null),a=O.useRef({x:.5,y:.5}),r=O.useRef({x:.5,y:.5}),o=O.useRef(null);return O.useEffect(()=>{const c=n.current;if(!c)return;const f=c.getContext("2d"),d=()=>{c.width=window.innerWidth,c.height=window.innerHeight};d(),window.addEventListener("resize",d);const m=S=>{r.current={x:S.clientX/window.innerWidth,y:S.clientY/window.innerHeight}};window.addEventListener("mousemove",m);let p=0;const g=Array.from({length:6},(S,b)=>({x:Math.random(),y:Math.random(),vx:(Math.random()-.5)*3e-4,vy:(Math.random()-.5)*3e-4,color:b<2?"#E8D5A3":b<4?"#00E5CC":"#FF6B35",radius:300+Math.random()*200})),v=()=>{a.current.x+=(r.current.x-a.current.x)*.04,a.current.y+=(r.current.y-a.current.y)*.04,f.clearRect(0,0,c.width,c.height),p+=.004;for(const T of g)T.x+=T.vx+Math.sin(p+T.y*10)*1e-4,T.y+=T.vy+Math.cos(p+T.x*10)*1e-4,(T.x<0||T.x>1)&&(T.vx*=-1),(T.y<0||T.y>1)&&(T.vy*=-1);const S=a.current.x,b=a.current.y;for(const T of g){const M=(T.x+S*.3)/1.3*c.width,B=(T.y+b*.3)/1.3*c.height,U=f.createRadialGradient(M,B,0,M,B,T.radius);U.addColorStop(0,T.color+"18"),U.addColorStop(.5,T.color+"08"),U.addColorStop(1,"transparent"),f.beginPath(),f.fillStyle=U,f.arc(M,B,T.radius,0,Math.PI*2),f.fill()}o.current=requestAnimationFrame(v)};return v(),()=>{window.removeEventListener("resize",d),window.removeEventListener("mousemove",m),o.current&&cancelAnimationFrame(o.current)}},[]),h.jsx(r8,{ref:n})},l8=w.div`
  position: relative;
  min-height: 100vh;
  z-index: 2;
`,c8=w(J.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #C4A96B, #E8D5A3, #00E5CC);
  transform-origin: left;
  z-index: 10001;
  pointer-events: none;
`,u8=w.footer`
  background: #0A0A0A;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 2.5rem 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 600px) {
    padding: 2rem 1.25rem;
  }
`,f8=w.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,d8=w.p`
  font-size: 0.82rem;
  color: #999999;
  font-weight: 500;
  letter-spacing: 0.3px;
`,h8=w.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  color: #E8D5A3;
`,p8=w.button`
  background: none;
  border: none;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  color: #B0B0B0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.2s ease;

  &:hover {
    color: #E8D5A3;
  }
`,m8=()=>{const{scrollYProgress:n}=uE(),a=pr(n,{stiffness:400,damping:40}),r=()=>{window.lenis?window.lenis.scrollTo(0,{duration:1.2}):window.scrollTo({top:0,behavior:"smooth"})};return h.jsxs(l8,{children:[h.jsx(o8,{}),h.jsx(c8,{style:{scaleX:a}}),h.jsx(XE,{}),h.jsx(jj,{}),h.jsx(Ij,{}),h.jsx(O4,{}),h.jsx(s8,{}),h.jsx(DD,{}),h.jsx(u8,{children:h.jsxs(f8,{children:[h.jsxs(d8,{children:["© ",new Date().getFullYear()," ",h.jsx(h8,{children:"Aditya Raj Bisoyi"}),". All rights reserved."]}),h.jsxs(p8,{onClick:r,children:["Back to top",h.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:h.jsx("path",{d:"M12 19V5M5 12l7-7 7 7"})})]})]})})]})},g8=`
You are an AI assistant for Aditya Raj Bisoyi's portfolio website. 

ABOUT ADITYA RAJ BISOYI:
- Full-stack developer with 3+ years of experience
- Creator, Developer, Designer
- Specializes in React, Node.js, Python, TypeScript, MongoDB, PostgreSQL, Docker, AWS, Three.js
- Has completed 50+ projects across various domains
- Works on e-commerce, AI/ML, mobile applications, and blockchain projects
- Passionate about transforming complex problems into elegant solutions
- Uses cutting-edge technology and innovative thinking

PORTFOLIO FEATURES:
- Clean professional design with dark theme
- Smooth animations using Framer Motion
- Profile photo display
- Interactive AI assistant
- Functional contact form powered by Formspree
- Curated project showcase
- Responsive design for all devices

TONE & PERSONALITY:
- Professional yet friendly
- Enthusiastic about technology
- Helpful and informative
- Encouraging potential collaborations

Always provide helpful, accurate information about Aditya's skills, projects, and how to get in touch.
`;class y8{constructor(){this.openai=null,this.initialize()}initialize(){{console.log("Using enhanced fallback AI system - no API key needed.");return}}async generateResponse(a){if(this.openai)try{return(await this.openai.chat.completions.create({model:"gpt-3.5-turbo",messages:[{role:"system",content:g8},{role:"user",content:a}],max_tokens:200,temperature:.7})).choices[0]?.message?.content||this.getSmartResponse(a)}catch(r){console.error("OpenAI API error:",r)}return this.getSmartResponse(a)}getSmartResponse(a){const r=a.toLowerCase(),o=[];r.includes("project")||r.includes("work")||r.includes("portfolio")?o.push("Aditya has an impressive portfolio. He has built web applications with React, mobile apps, AI/ML projects, blockchain solutions, and IoT dashboards. Each project showcases different technical skills - from e-commerce platforms to machine learning models. Which area interests you most?","His projects span multiple domains: full-stack web apps, React Native mobile applications, Python AI projects, blockchain smart contracts, and Node.js APIs. Would you like to know about a specific technology or project type?","The project showcase includes everything from modern web development to cutting-edge AI implementations. Aditya excels at turning complex problems into elegant solutions. What kind of project are you curious about?"):r.includes("skill")||r.includes("technology")||r.includes("tech")||r.includes("stack")?o.push("Aditya's tech stack is impressive. Frontend: React, TypeScript, Three.js for 3D graphics. Backend: Node.js, Python, Express. Databases: MongoDB, PostgreSQL. Cloud: AWS, Docker. Plus AI/ML with TensorFlow and blockchain development.","His technology stack is constantly evolving. Currently mastering React, Node.js, Python, TypeScript, MongoDB, PostgreSQL, Docker, AWS, Three.js, and more. He stays current with industry trends and loves learning new technologies.","The skill set includes full-stack development, 3D web graphics, AI/ML integration, cloud deployment, and blockchain technology. Aditya believes in using the right tool for each job - efficiency meets innovation."):r.includes("contact")||r.includes("hire")||r.includes("work together")||r.includes("collaborate")?o.push("You can reach out through the contact form on this page. Aditya typically responds within 24 hours and is always excited to discuss new opportunities.","Great choice! Use the contact form below, and Aditya will get back to you quickly. He is passionate about working on innovative projects and building lasting professional relationships.","Send a message through the contact form on this page - Aditya responds promptly and is always enthusiastic about new collaborations, whether freelance work, full-time opportunities, or exciting side projects."):r.includes("experience")||r.includes("background")||r.includes("years")?o.push("With 3+ years of experience and 50+ completed projects, Aditya has worked across e-commerce, AI/ML, mobile apps, and blockchain. He is passionate about creating innovative, user-centric solutions that make a real impact.","His journey includes diverse domains: e-commerce platforms, machine learning models, mobile applications, and blockchain solutions. Every project is an opportunity to learn, grow, and deliver exceptional results.","3+ years of building impactful solutions. From startup MVPs to enterprise applications, Aditya has built everything from AI-powered apps to complex web platforms. Experience meets innovation in every project."):r.includes("hello")||r.includes("hi")||r.includes("hey")||r.includes("greet")?o.push("Hello! Welcome to Aditya's portfolio. I can help you explore his projects, learn about his skills, or connect you two. What would you like to discover?","Hi there! This portfolio showcases Aditya's ability to solve complex problems with elegant digital solutions. Feel free to ask me anything about his work, experience, or how to get in touch.","Hey! You have found a great developer's portfolio. I am here to help you navigate Aditya's work - from web experiences to AI integrations. What interests you most?"):r.includes("theme")||r.includes("design")?o.push("This portfolio features a clean, professional design with smooth animations and a focus on readability. Every element is crafted to showcase Aditya's attention to both functionality and visual impact.","The design philosophy here is minimalism meets professionalism. Dark backgrounds, subtle accents, and smooth transitions create an engaging experience that lets the work speak for itself.","Great eye for design! The clean aesthetic reflects Aditya's approach to development: thoughtful, precise, and user-focused. Every detail serves a purpose."):(r.includes("ai")||r.includes("artificial intelligence")||r.includes("chatbot"))&&o.push("I am an AI assistant built to help visitors navigate this portfolio. Aditya built me to showcase his AI integration skills and provide a better user experience.","I am a smart assistant powered by context-aware response systems. This demonstrates Aditya's practical approach: building robust solutions that work reliably in any scenario.","I represent accessible AI - combining intelligent processing with practical engineering. Aditya believes AI should be powerful yet practical, just like this portfolio.");const c=["That is an interesting question! I am here to help you learn about Aditya's portfolio, technical skills, projects, and how to connect with him. What specific aspect would you like to explore?","Great question! Feel free to ask me about Aditya's projects, technical expertise, experience, the design, or how to get in touch. I am here to help.","I would love to help you discover more about this portfolio. Try asking about specific technologies, project types, Aditya's background, or anything else you are curious about."],f=o.length>0?o:c;return f[Math.floor(Math.random()*f.length)]}}const v8=new y8,b8=w.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
`,x8=w(J.button)`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: ${n=>n.theme.colors.primary};
  border: none;
  color: ${n=>n.theme.colors.dark};
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(91, 164, 230, 0.3);
  transition: background 0.2s ease;

  &:hover {
    background: ${n=>n.theme.colors.primaryLight};
  }
`,S8=w.svg`
  width: 22px;
  height: 22px;
  fill: currentColor;
`,w8=w(J.div)`
  position: absolute;
  bottom: 68px;
  right: 0;
  width: 350px;
  height: 480px;
  background: rgba(13, 13, 13, 0.95);
  border: 1px solid ${n=>n.theme.colors.border};
  border-radius: 12px;
  backdrop-filter: blur(12px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 480px) {
    width: 300px;
    height: 400px;
    bottom: 60px;
    right: -16px;
  }
`,A8=w.div`
  padding: 1rem 1.25rem;
  background: rgba(91, 164, 230, 0.06);
  border-bottom: 1px solid ${n=>n.theme.colors.border};
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,T8=w.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${n=>n.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${n=>n.theme.colors.dark};
  font-weight: 700;
  font-size: 0.8rem;
`,E8=w.div`
  flex: 1;

  h4 {
    color: ${n=>n.theme.colors.white};
    margin: 0;
    font-size: 0.95rem;
    font-weight: 600;
  }

  p {
    color: ${n=>n.theme.colors.greyDark};
    margin: 0;
    font-size: 0.75rem;
  }
`,j8=w.button`
  background: none;
  border: none;
  color: ${n=>n.theme.colors.grey};
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  line-height: 1;

  &:hover {
    color: ${n=>n.theme.colors.white};
    background: rgba(91, 164, 230, 0.1);
  }
`,D8=w.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${n=>n.theme.colors.border};
    border-radius: 2px;
  }
`,c1=w(J.div)`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;

  &.user {
    flex-direction: row-reverse;
  }
`,M8=w.div`
  max-width: 80%;
  padding: 0.625rem 0.875rem;
  border-radius: 10px;
  font-size: 0.875rem;
  line-height: 1.5;

  &.user {
    background: #E8D5A3;
    color: #0A0A0A;
    font-weight: 600;
  }

  &.bot {
    background: rgba(232, 213, 163, 0.08);
    border: 1px solid rgba(232, 213, 163, 0.22);
    color: #F0F0F0;
    font-weight: 400;
  }
`,C8=w.div`
  padding: 0.875rem 1rem;
  border-top: 1px solid rgba(232, 213, 163, 0.15);
  display: flex;
  gap: 0.5rem;
`,R8=w.input`
  flex: 1;
  padding: 0.625rem 0.875rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 8px;
  color: #FFFFFF;
  font-size: 0.875rem;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #E8D5A3;
    box-shadow: 0 0 10px rgba(232, 213, 163, 0.25);
  }

  &::placeholder {
    color: #9E9E9E;
  }
`,_8=w(J.button)`
  background: ${n=>n.theme.colors.primary};
  border: none;
  border-radius: 8px;
  padding: 0.625rem 1rem;
  color: ${n=>n.theme.colors.dark};
  font-weight: 600;
  cursor: pointer;
  font-size: 0.85rem;
  font-family: inherit;
  transition: background 0.2s ease;

  &:hover {
    background: ${n=>n.theme.colors.primaryLight};
  }
`,z8=w(J.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 0.875rem;
  background: rgba(91, 164, 230, 0.08);
  border: 1px solid ${n=>n.theme.colors.border};
  border-radius: 10px;
  max-width: 80%;
  color: ${n=>n.theme.colors.grey};
  font-size: 0.85rem;

  .dots {
    display: flex;
    gap: 3px;

    span {
      width: 4px;
      height: 4px;
      background: ${n=>n.theme.colors.primary};
      border-radius: 50%;
      animation: typing 1.4s infinite ease-in-out;

      &:nth-child(1) { animation-delay: 0s; }
      &:nth-child(2) { animation-delay: 0.2s; }
      &:nth-child(3) { animation-delay: 0.4s; }
    }
  }

  @keyframes typing {
    0%, 60%, 100% {
      transform: translateY(0);
      opacity: 0.4;
    }
    30% {
      transform: translateY(-6px);
      opacity: 1;
    }
  }
`,k8=()=>{const[n,a]=O.useState(!1),[r,o]=O.useState([{id:1,text:"Hello! I can help you learn more about Aditya's portfolio, discuss projects, or answer any questions you might have. How can I assist you?",sender:"bot",timestamp:new Date}]),[c,f]=O.useState(""),[d,m]=O.useState(!1),p=O.useRef(null),g=()=>{p.current?.scrollIntoView({behavior:"smooth"})};O.useEffect(()=>{g()},[r,d]);const v=async()=>{if(!c.trim())return;const b={id:Date.now(),text:c,sender:"user",timestamp:new Date},T=c;o(M=>[...M,b]),f(""),m(!0);try{const M=await v8.generateResponse(T),B={id:Date.now()+1,text:M,sender:"bot",timestamp:new Date};o(U=>[...U,B]),m(!1)}catch(M){console.error("Error getting AI response:",M);const B={id:Date.now()+1,text:"I apologize, but I'm experiencing some technical difficulties. Please try again in a moment, or feel free to contact Aditya directly through the contact form.",sender:"bot",timestamp:new Date};o(U=>[...U,B]),m(!1)}},S=b=>{b.key==="Enter"&&v()};return h.jsxs(b8,{children:[h.jsx(Pe,{children:n&&h.jsxs(w8,{initial:{opacity:0,scale:.9,y:10},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:10},transition:{duration:.2},children:[h.jsxs(A8,{children:[h.jsx(T8,{children:"AI"}),h.jsxs(E8,{children:[h.jsx("h4",{children:"Assistant"}),h.jsx("p",{children:"AI-powered portfolio assistant"})]}),h.jsx(j8,{onClick:()=>a(!1),children:"×"})]}),h.jsxs(D8,{children:[r.map(b=>h.jsx(c1,{className:b.sender,initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.2},children:h.jsx(M8,{className:b.sender,children:b.text})},b.id)),d&&h.jsx(c1,{className:"bot",children:h.jsxs(z8,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},children:["Thinking",h.jsxs("div",{className:"dots",children:[h.jsx("span",{}),h.jsx("span",{}),h.jsx("span",{})]})]})}),h.jsx("div",{ref:p})]}),h.jsxs(C8,{children:[h.jsx(R8,{type:"text",value:c,onChange:b=>f(b.target.value),onKeyPress:S,placeholder:"Ask me anything..."}),h.jsx(_8,{onClick:v,whileHover:{scale:1.03},whileTap:{scale:.97},children:"Send"})]})]})}),h.jsx(x8,{onClick:()=>a(!n),whileHover:{scale:1.08},whileTap:{scale:.95},children:n?h.jsx("span",{style:{fontSize:"1.5rem",lineHeight:1},children:"×"}):h.jsx(S8,{viewBox:"0 0 24 24",children:h.jsx("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"})})})]})},O8=w(J.div)`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99999;
  border-radius: 50%;
  border: 1.5px solid rgba(232, 213, 163, 0.65);
  /* translate -50% -50% so it centres on the cursor point */
  margin-left: -18px;
  margin-top: -18px;
  width: 36px;
  height: 36px;
  will-change: transform;
  transform: translateZ(0);

  @media (max-width: 768px) { display: none; }
`,B8=w(J.div)`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99999;
  border-radius: 50%;
  background: #E8D5A3;
  /* translate -50% -50% to centre */
  margin-left: -3px;
  margin-top: -3px;
  width: 6px;
  height: 6px;
  will-change: transform;
  transform: translateZ(0);

  @media (max-width: 768px) { display: none; }
`,V8=()=>{const n=La(-200),a=La(-200),r=pr(n,{stiffness:600,damping:38,mass:.3}),o=pr(a,{stiffness:600,damping:38,mass:.3}),[c,f]=O.useState("default");O.useEffect(()=>{const p=b=>{n.set(b.clientX),a.set(b.clientY)},g=b=>{const T=b.target;T.tagName==="A"||T.tagName==="BUTTON"||T.closest("a")||T.closest("button")||T.getAttribute("role")==="button"?f("hover"):T.tagName==="INPUT"||T.tagName==="TEXTAREA"?f("text"):f("default")},v=()=>f("click"),S=()=>f("default");return window.addEventListener("mousemove",p,{passive:!0}),window.addEventListener("mouseover",g),window.addEventListener("mousedown",v),window.addEventListener("mouseup",S),()=>{window.removeEventListener("mousemove",p),window.removeEventListener("mouseover",g),window.removeEventListener("mousedown",v),window.removeEventListener("mouseup",S)}},[n,a]);const d={default:{scale:1,opacity:.7},hover:{scale:2.4,opacity:.45,borderColor:"rgba(0,229,204,0.7)"},click:{scale:.7,opacity:1},text:{scale:.5,opacity:.6,borderRadius:"3px",width:"3px",height:"28px",marginLeft:"-1.5px",marginTop:"-14px"}},m={default:{scale:1,opacity:1},hover:{scale:0,opacity:0},click:{scale:1.8,opacity:1,backgroundColor:"#00E5CC"},text:{scale:0,opacity:0}};return h.jsxs(h.Fragment,{children:[h.jsx(O8,{style:{x:r,y:o},animate:c,variants:d,transition:{duration:.18,ease:"easeOut"}}),h.jsx(B8,{style:{x:n,y:a},animate:c,variants:m,transition:{duration:.1,ease:"easeOut"}})]})};var u1="1.3.26";function Ab(n,a,r){return Math.max(n,Math.min(a,r))}function N8(n,a,r){return(1-r)*n+r*a}function L8(n,a,r,o){return N8(n,a,1-Math.exp(-r*o))}function H8(n,a){return(n%a+a)%a}var U8=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(n){if(!this.isRunning)return;let a=!1;if(this.duration&&this.easing){this.currentTime+=n;const r=Ab(0,this.currentTime/this.duration,1);a=r>=1;const o=a?1:this.easing(r);this.value=this.from+(this.to-this.from)*o}else this.lerp?(this.value=L8(this.value,this.to,this.lerp*60,n),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,a=!0)):(this.value=this.to,a=!0);a&&this.stop(),this.onUpdate?.(this.value,a)}stop(){this.isRunning=!1}fromTo(n,a,{lerp:r,duration:o,easing:c,onStart:f,onUpdate:d}){this.from=this.value=n,this.to=a,this.lerp=r,this.duration=o,this.easing=c,this.currentTime=0,this.isRunning=!0,f?.(),this.onUpdate=d}};function F8(n,a){let r;return function(...o){clearTimeout(r),r=setTimeout(()=>{r=void 0,n.apply(this,o)},a)}}var G8=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(n,a,{autoResize:r=!0,debounce:o=250}={}){this.wrapper=n,this.content=a,r&&(this.debouncedResize=F8(this.resize,o),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Tb=class{events={};emit(n,...a){const r=this.events[n]||[];for(let o=0,c=r.length;o<c;o++)r[o]?.(...a)}on(n,a){return this.events[n]?this.events[n].push(a):this.events[n]=[a],()=>{this.events[n]=this.events[n]?.filter(r=>a!==r)}}off(n,a){this.events[n]=this.events[n]?.filter(r=>a!==r)}destroy(){this.events={}}};const Y8=100/6,ii={passive:!1};function f1(n,a){return n===1?Y8:n===2?a:1}var q8=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new Tb;constructor(n,a={wheelMultiplier:1,touchMultiplier:1}){this.element=n,this.options=a,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ii),this.element.addEventListener("touchstart",this.onTouchStart,ii),this.element.addEventListener("touchmove",this.onTouchMove,ii),this.element.addEventListener("touchend",this.onTouchEnd,ii)}on(n,a){return this.emitter.on(n,a)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,ii),this.element.removeEventListener("touchstart",this.onTouchStart,ii),this.element.removeEventListener("touchmove",this.onTouchMove,ii),this.element.removeEventListener("touchend",this.onTouchEnd,ii)}onTouchStart=n=>{const{clientX:a,clientY:r}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=a,this.touchStart.y=r,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})};onTouchMove=n=>{const{clientX:a,clientY:r}=n.targetTouches?n.targetTouches[0]:n,o=-(a-this.touchStart.x)*this.options.touchMultiplier,c=-(r-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=a,this.touchStart.y=r,this.lastDelta={x:o,y:c},this.emitter.emit("scroll",{deltaX:o,deltaY:c,event:n})};onTouchEnd=n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})};onWheel=n=>{let{deltaX:a,deltaY:r,deltaMode:o}=n;const c=f1(o,this.window.width),f=f1(o,this.window.height);a*=c,r*=f,a*=this.options.wheelMultiplier,r*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:a,deltaY:r,event:n})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const d1=n=>Math.min(1,1.001-2**(-10*n));var P8=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia("(prefers-reduced-motion: reduce)");isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new U8;emitter=new Tb;dimensions;virtualScroll;constructor({wrapper:n=window,content:a=document.documentElement,eventsTarget:r=n,smoothWheel:o=!0,syncTouch:c=!1,syncTouchLerp:f=.075,touchInertiaExponent:d=1.7,duration:m,easing:p,lerp:g=.1,infinite:v=!1,orientation:S="vertical",gestureOrientation:b=S==="horizontal"?"both":"vertical",touchMultiplier:T=1,wheelMultiplier:M=1,autoResize:B=!0,prevent:U,virtualScroll:F,overscroll:P=!0,autoRaf:L=!1,anchors:Z=!1,autoToggle:G=!1,allowNestedScroll:$=!1,__experimental__naiveDimensions:_=!1,naiveDimensions:X=_,stopInertiaOnNavigate:K=!1,respectReducedMotion:ct=!0}={}){window.lenisVersion=u1,window.lenis||(window.lenis={}),window.lenis.version=u1,S==="horizontal"&&(window.lenis.horizontal=!0),c===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!n||n===document.documentElement)&&(n=window),typeof m=="number"&&typeof p!="function"?p=d1:typeof p=="function"&&typeof m!="number"&&(m=1),this.options={wrapper:n,content:a,eventsTarget:r,smoothWheel:o,syncTouch:c,syncTouchLerp:f,touchInertiaExponent:d,duration:m,easing:p,lerp:g,infinite:v,gestureOrientation:b,orientation:S,touchMultiplier:T,wheelMultiplier:M,autoResize:B,prevent:U,virtualScroll:F,overscroll:P,autoRaf:L,anchors:Z,autoToggle:G,allowNestedScroll:$,naiveDimensions:X,stopInertiaOnNavigate:K,respectReducedMotion:ct},this.dimensions=new G8(n,a,{autoResize:B}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new q8(r,{touchMultiplier:T,wheelMultiplier:M}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,a){return this.emitter.on(n,a)}off(n,a){return this.emitter.off(n,a)}onScrollEnd=n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=n=>{n.propertyName?.includes("overflow")&&n.target===this.rootElement&&this.checkOverflow()};setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}onClick=n=>{const a=n.composedPath().filter(o=>o instanceof HTMLAnchorElement&&o.href).map(o=>new URL(o.href)),r=new URL(window.location.href);if(this.options.anchors){const o=a.find(c=>r.host===c.host&&r.pathname===c.pathname&&c.hash);if(o){const c=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,f=decodeURIComponent(o.hash);this.scrollTo(f,c);return}}if(this.options.stopInertiaOnNavigate&&a.some(o=>r.host===o.host&&r.pathname!==o.pathname)){this.reset();return}};onPointerDown=n=>{n.button===1&&this.reset()};isTouchOnSelectionHandle(n){const a=window.getSelection();if(!a||a.isCollapsed||a.rangeCount===0)return!1;const r=n.targetTouches[0]??n.changedTouches[0];if(!r)return!1;const o=a.getRangeAt(0).getClientRects();if(o.length===0)return!1;const c=o[0],f=o[o.length-1],d=40,m=Math.hypot(r.clientX-c.left,r.clientY-c.top)<=d,p=Math.hypot(r.clientX-f.right,r.clientY-f.bottom)<=d;return m||p}onVirtualScroll=n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:a,deltaY:r,event:o}=n;if(this.emitter.emit("virtual-scroll",{deltaX:a,deltaY:r,event:o}),o.ctrlKey||o.lenisStopPropagation)return;const c=o.type.includes("touch"),f=o.type.includes("wheel");if(c&&this.isIos&&(o.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(o)),this._isDraggingSelection)){o.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=o.type==="touchstart"||o.type==="touchmove";const d=a===0&&r===0;if(this.options.syncTouch&&c&&o.type==="touchstart"&&d&&!this.isStopped&&!this.isLocked){this.reset();return}const m=this.options.gestureOrientation==="vertical"&&r===0||this.options.gestureOrientation==="horizontal"&&a===0;if(d||m)return;let p=o.composedPath();p=p.slice(0,p.indexOf(this.rootElement));const g=this.options.prevent,v=Math.abs(a)>=Math.abs(r)?"horizontal":"vertical";if(p.find(M=>M instanceof HTMLElement&&(typeof g=="function"&&g?.(M)||M.hasAttribute?.("data-lenis-prevent")||v==="vertical"&&M.hasAttribute?.("data-lenis-prevent-vertical")||v==="horizontal"&&M.hasAttribute?.("data-lenis-prevent-horizontal")||c&&M.hasAttribute?.("data-lenis-prevent-touch")||f&&M.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(M,{deltaX:a,deltaY:r}))))return;if(this.isStopped||this.isLocked){o.cancelable&&o.preventDefault();return}if(!(this.options.syncTouch&&c||this.options.smoothWheel&&f)){this.isScrolling="native",this.animate.stop(),o.lenisStopPropagation=!0;return}let S=r;this.options.gestureOrientation==="both"?S=Math.abs(r)>Math.abs(a)?r:a:this.options.gestureOrientation==="horizontal"&&(S=a),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&r>0||this.animatedScroll===this.limit&&r<0))&&(o.lenisStopPropagation=!0),o.cancelable&&o.preventDefault();const b=c&&this.options.syncTouch,T=c&&o.type==="touchend";T&&(S=Math.sign(S)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+S,{programmatic:!1,...b?{lerp:T?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=n=>{const a=n-(this.time||n);this.time=n,this.animate.advance(a*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(n,{offset:a=0,immediate:r=!1,lock:o=!1,programmatic:c=!0,lerp:f=c?this.options.lerp:void 0,duration:d=c?this.options.duration:void 0,easing:m=c?this.options.easing:void 0,onStart:p,onComplete:g,force:v=!1,userData:S}={}){if(this.prefersReducedMotion&&(c?r=!0:(f=1,d=void 0,m=void 0)),(this.isStopped||this.isLocked)&&!v)return;let b=n,T=a;if(typeof b=="string"&&["top","left","start","#"].includes(b))b=0;else if(typeof b=="string"&&["bottom","right","end"].includes(b))b=this.limit;else{let M=null;if(typeof b=="string"?(M=b.startsWith("#")?document.getElementById(b.slice(1)):document.querySelector(b),M||(b==="#top"?b=0:console.warn("Lenis: Target not found",b))):b instanceof HTMLElement&&b?.nodeType&&(M=b),M){if(this.options.wrapper!==window){const Z=this.rootElement.getBoundingClientRect();T-=this.isHorizontal?Z.left:Z.top}const B=M.getBoundingClientRect(),U=getComputedStyle(M),F=this.isHorizontal?Number.parseFloat(U.scrollMarginLeft):Number.parseFloat(U.scrollMarginTop),P=getComputedStyle(this.rootElement),L=this.isHorizontal?Number.parseFloat(P.scrollPaddingLeft):Number.parseFloat(P.scrollPaddingTop);b=(this.isHorizontal?B.left:B.top)+this.animatedScroll-(Number.isNaN(F)?0:F)-(Number.isNaN(L)?0:L)}}if(typeof b=="number"){if(b+=T,this.options.infinite){if(c){this.targetScroll=this.animatedScroll=this.scroll;const M=b-this.animatedScroll;M>this.limit/2?b-=this.limit:M<-this.limit/2&&(b+=this.limit)}}else b=Ab(0,b,this.limit);if(b===this.targetScroll){p?.(this),g?.(this);return}if(this.userData=S??{},r){this.animatedScroll=this.targetScroll=b,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),g?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}c||(this.targetScroll=b),typeof d=="number"&&typeof m!="function"?m=d1:typeof m=="function"&&typeof d!="number"&&(d=1),this.animate.fromTo(this.animatedScroll,b,{duration:d,easing:m,lerp:f,onStart:()=>{o&&(this.isLocked=!0),this.isScrolling="smooth",p?.(this)},onUpdate:(M,B)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=M-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=M,this.setScroll(this.scroll),c&&(this.targetScroll=M),B||this.emit(),B&&(this.reset(),this.emit(),g?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:a,deltaY:r}){const o=Date.now();n._lenis||(n._lenis={});const c=n._lenis;let f,d,m,p,g,v,S,b,T,M;if(o-(c.time??0)>2e3){c.time=Date.now();const $=window.getComputedStyle(n);if(c.computedStyle=$,f=["auto","overlay","scroll"].includes($.overflowX),d=["auto","overlay","scroll"].includes($.overflowY),g=["auto"].includes($.overscrollBehaviorX),v=["auto"].includes($.overscrollBehaviorY),c.hasOverflowX=f,c.hasOverflowY=d,!(f||d))return!1;S=n.scrollWidth,b=n.scrollHeight,T=n.clientWidth,M=n.clientHeight,m=S>T,p=b>M,c.isScrollableX=m,c.isScrollableY=p,c.scrollWidth=S,c.scrollHeight=b,c.clientWidth=T,c.clientHeight=M,c.hasOverscrollBehaviorX=g,c.hasOverscrollBehaviorY=v}else m=c.isScrollableX,p=c.isScrollableY,f=c.hasOverflowX,d=c.hasOverflowY,S=c.scrollWidth,b=c.scrollHeight,T=c.clientWidth,M=c.clientHeight,g=c.hasOverscrollBehaviorX,v=c.hasOverscrollBehaviorY;if(!(f&&m||d&&p))return!1;const B=Math.abs(a)>=Math.abs(r)?"horizontal":"vertical";let U,F,P,L,Z,G;if(B==="horizontal")U=Math.round(n.scrollLeft),F=S-T,P=a,L=f,Z=m,G=g;else if(B==="vertical")U=Math.round(n.scrollTop),F=b-M,P=r,L=d,Z=p,G=v;else return!1;return!G&&(U>=F||U<=0)?!0:(P>0?U<F:U>0)&&L&&Z}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?H8(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(n=>{this.rootElement.classList.add(n)})}cleanUpClassName(){for(const n of Array.from(this.rootElement.classList))(n==="lenis"||n.startsWith("lenis-"))&&this.rootElement.classList.remove(n)}};const X8=({children:n})=>(O.useEffect(()=>{const a=new P8({duration:1.15,easing:f=>Math.min(1,1.001-Math.pow(2,-10*f)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:.95,touchMultiplier:1.5,infinite:!1});window.lenis=a;let r;const o=f=>{a.raf(f),r=requestAnimationFrame(o)};r=requestAnimationFrame(o);const c=f=>{const d=f.target.closest('a[href^="#"]');if(d){const m=d.getAttribute("href");if(m&&m!=="#"&&m.startsWith("#")){const p=document.querySelector(m);p&&(f.preventDefault(),a.scrollTo(p,{offset:-20,duration:1.15}))}}};return document.addEventListener("click",c),()=>{document.removeEventListener("click",c),cancelAnimationFrame(r),a.destroy(),delete window.lenis}},[]),n),$8=a5`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: auto !important;
  }

  html.lenis, html.lenis body {
    height: auto;
  }

  .lenis.lenis-smooth {
    scroll-behavior: auto !important;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: #0A0A0A;
    color: #E8E8E8;
    overflow-x: hidden;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    cursor: none;
  }

  @media (max-width: 768px) {
    body {
      cursor: auto;
    }
  }

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background: #0A0A0A;
  }

  ::-webkit-scrollbar-thumb {
    background: #E8D5A3;
    border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #F0E0B0;
  }

  ::selection {
    background: rgba(232, 213, 163, 0.25);
    color: #FFFFFF;
  }

  a, button {
    cursor: none;
  }

  @media (max-width: 768px) {
    a, button {
      cursor: auto;
    }
  }

  button:focus,
  input:focus,
  textarea:focus,
  a:focus {
    outline: 2px solid rgba(232, 213, 163, 0.5);
    outline-offset: 2px;
  }
`,Q8={colors:{primary:"#E8D5A3",primaryLight:"#F0E0B0",primaryDark:"#C4A96B",cyan:"#00E5CC",cyanDim:"rgba(0, 229, 204, 0.15)",orange:"#FF6B35",orangeDim:"rgba(255, 107, 53, 0.12)",grey:"#888",greyLight:"#B0B0B0",greyDark:"#555",dark:"#0A0A0A",darkAlt:"#111111",darkCard:"#161616",darkCardAlt:"#1A1A1A",white:"#FFFFFF",offWhite:"#E8E8E8",border:"rgba(232, 213, 163, 0.12)",borderStrong:"rgba(232, 213, 163, 0.25)",cardBg:"rgba(22, 22, 22, 0.7)"},fonts:{display:"'Space Grotesk', -apple-system, sans-serif",body:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"}},K8=w.div`
  position: relative;
  min-height: 100vh;
  background: #0A0A0A;
`;function Z8(){const[n,a]=O.useState(!0),r=O.useCallback(()=>{a(!1)},[]);return h.jsxs(e5,{theme:Q8,children:[h.jsx($8,{}),h.jsxs(X8,{children:[h.jsx(V8,{}),h.jsxs(K8,{children:[h.jsx(m8,{}),!n&&h.jsx(k8,{}),h.jsx(Pe,{children:n&&h.jsx(ME,{onComplete:r},"loading")})]})]})]})}iS.createRoot(document.getElementById("root")).render(h.jsx(O.StrictMode,{children:h.jsx(Z8,{})}));
