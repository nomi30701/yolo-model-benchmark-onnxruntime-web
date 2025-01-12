(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const u of d.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerPolicy&&(d.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?d.credentials="include":o.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(o){if(o.ep)return;o.ep=!0;const d=i(o);fetch(o.href,d)}})();function Py(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ad={exports:{}},Bs={},Rd={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ih;function Y1(){if(ih)return je;ih=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),w=Symbol.iterator;function f(A){return A===null||typeof A!="object"?null:(A=w&&A[w]||A["@@iterator"],typeof A=="function"?A:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,x={};function T(A,N,ie){this.props=A,this.context=N,this.refs=x,this.updater=ie||b}T.prototype.isReactComponent={},T.prototype.setState=function(A,N){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,N,"setState")},T.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function z(){}z.prototype=T.prototype;function C(A,N,ie){this.props=A,this.context=N,this.refs=x,this.updater=ie||b}var O=C.prototype=new z;O.constructor=C,S(O,T.prototype),O.isPureReactComponent=!0;var R=Array.isArray,M=Object.prototype.hasOwnProperty,F={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function Q(A,N,ie){var ce,Ee={},Ce=null,We=null;if(N!=null)for(ce in N.ref!==void 0&&(We=N.ref),N.key!==void 0&&(Ce=""+N.key),N)M.call(N,ce)&&!U.hasOwnProperty(ce)&&(Ee[ce]=N[ce]);var Fe=arguments.length-2;if(Fe===1)Ee.children=ie;else if(1<Fe){for(var Ne=Array(Fe),He=0;He<Fe;He++)Ne[He]=arguments[He+2];Ee.children=Ne}if(A&&A.defaultProps)for(ce in Fe=A.defaultProps,Fe)Ee[ce]===void 0&&(Ee[ce]=Fe[ce]);return{$$typeof:e,type:A,key:Ce,ref:We,props:Ee,_owner:F.current}}function se(A,N){return{$$typeof:e,type:A.type,key:N,ref:A.ref,props:A.props,_owner:A._owner}}function ue(A){return typeof A=="object"&&A!==null&&A.$$typeof===e}function Se(A){var N={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(ie){return N[ie]})}var xe=/\/+/g;function de(A,N){return typeof A=="object"&&A!==null&&A.key!=null?Se(""+A.key):N.toString(36)}function Re(A,N,ie,ce,Ee){var Ce=typeof A;(Ce==="undefined"||Ce==="boolean")&&(A=null);var We=!1;if(A===null)We=!0;else switch(Ce){case"string":case"number":We=!0;break;case"object":switch(A.$$typeof){case e:case r:We=!0}}if(We)return We=A,Ee=Ee(We),A=ce===""?"."+de(We,0):ce,R(Ee)?(ie="",A!=null&&(ie=A.replace(xe,"$&/")+"/"),Re(Ee,N,ie,"",function(He){return He})):Ee!=null&&(ue(Ee)&&(Ee=se(Ee,ie+(!Ee.key||We&&We.key===Ee.key?"":(""+Ee.key).replace(xe,"$&/")+"/")+A)),N.push(Ee)),1;if(We=0,ce=ce===""?".":ce+":",R(A))for(var Fe=0;Fe<A.length;Fe++){Ce=A[Fe];var Ne=ce+de(Ce,Fe);We+=Re(Ce,N,ie,Ne,Ee)}else if(Ne=f(A),typeof Ne=="function")for(A=Ne.call(A),Fe=0;!(Ce=A.next()).done;)Ce=Ce.value,Ne=ce+de(Ce,Fe++),We+=Re(Ce,N,ie,Ne,Ee);else if(Ce==="object")throw N=String(A),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return We}function De(A,N,ie){if(A==null)return A;var ce=[],Ee=0;return Re(A,ce,"","",function(Ce){return N.call(ie,Ce,Ee++)}),ce}function be(A){if(A._status===-1){var N=A._result;N=N(),N.then(function(ie){(A._status===0||A._status===-1)&&(A._status=1,A._result=ie)},function(ie){(A._status===0||A._status===-1)&&(A._status=2,A._result=ie)}),A._status===-1&&(A._status=0,A._result=N)}if(A._status===1)return A._result.default;throw A._result}var ke={current:null},q={transition:null},X={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:q,ReactCurrentOwner:F};function J(){throw Error("act(...) is not supported in production builds of React.")}return je.Children={map:De,forEach:function(A,N,ie){De(A,function(){N.apply(this,arguments)},ie)},count:function(A){var N=0;return De(A,function(){N++}),N},toArray:function(A){return De(A,function(N){return N})||[]},only:function(A){if(!ue(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},je.Component=T,je.Fragment=i,je.Profiler=o,je.PureComponent=C,je.StrictMode=s,je.Suspense=m,je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,je.act=J,je.cloneElement=function(A,N,ie){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var ce=S({},A.props),Ee=A.key,Ce=A.ref,We=A._owner;if(N!=null){if(N.ref!==void 0&&(Ce=N.ref,We=F.current),N.key!==void 0&&(Ee=""+N.key),A.type&&A.type.defaultProps)var Fe=A.type.defaultProps;for(Ne in N)M.call(N,Ne)&&!U.hasOwnProperty(Ne)&&(ce[Ne]=N[Ne]===void 0&&Fe!==void 0?Fe[Ne]:N[Ne])}var Ne=arguments.length-2;if(Ne===1)ce.children=ie;else if(1<Ne){Fe=Array(Ne);for(var He=0;He<Ne;He++)Fe[He]=arguments[He+2];ce.children=Fe}return{$$typeof:e,type:A.type,key:Ee,ref:Ce,props:ce,_owner:We}},je.createContext=function(A){return A={$$typeof:u,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:d,_context:A},A.Consumer=A},je.createElement=Q,je.createFactory=function(A){var N=Q.bind(null,A);return N.type=A,N},je.createRef=function(){return{current:null}},je.forwardRef=function(A){return{$$typeof:h,render:A}},je.isValidElement=ue,je.lazy=function(A){return{$$typeof:_,_payload:{_status:-1,_result:A},_init:be}},je.memo=function(A,N){return{$$typeof:g,type:A,compare:N===void 0?null:N}},je.startTransition=function(A){var N=q.transition;q.transition={};try{A()}finally{q.transition=N}},je.unstable_act=J,je.useCallback=function(A,N){return ke.current.useCallback(A,N)},je.useContext=function(A){return ke.current.useContext(A)},je.useDebugValue=function(){},je.useDeferredValue=function(A){return ke.current.useDeferredValue(A)},je.useEffect=function(A,N){return ke.current.useEffect(A,N)},je.useId=function(){return ke.current.useId()},je.useImperativeHandle=function(A,N,ie){return ke.current.useImperativeHandle(A,N,ie)},je.useInsertionEffect=function(A,N){return ke.current.useInsertionEffect(A,N)},je.useLayoutEffect=function(A,N){return ke.current.useLayoutEffect(A,N)},je.useMemo=function(A,N){return ke.current.useMemo(A,N)},je.useReducer=function(A,N,ie){return ke.current.useReducer(A,N,ie)},je.useRef=function(A){return ke.current.useRef(A)},je.useState=function(A){return ke.current.useState(A)},je.useSyncExternalStore=function(A,N,ie){return ke.current.useSyncExternalStore(A,N,ie)},je.useTransition=function(){return ke.current.useTransition()},je.version="18.3.1",je}var ah;function Uc(){return ah||(ah=1,Rd.exports=Y1()),Rd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sh;function Z1(){if(sh)return Bs;sh=1;var e=Uc(),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function u(h,m,g){var _,w={},f=null,b=null;g!==void 0&&(f=""+g),m.key!==void 0&&(f=""+m.key),m.ref!==void 0&&(b=m.ref);for(_ in m)s.call(m,_)&&!d.hasOwnProperty(_)&&(w[_]=m[_]);if(h&&h.defaultProps)for(_ in m=h.defaultProps,m)w[_]===void 0&&(w[_]=m[_]);return{$$typeof:r,type:h,key:f,ref:b,props:w,_owner:o.current}}return Bs.Fragment=i,Bs.jsx=u,Bs.jsxs=u,Bs}var oh;function X1(){return oh||(oh=1,Ad.exports=Z1()),Ad.exports}var Ue=X1(),sn=Uc();const J1=Py(sn);var Tu={},Od={exports:{}},Yt={},Pd={exports:{}},Md={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh;function e_(){return uh||(uh=1,function(e){function r(q,X){var J=q.length;q.push(X);e:for(;0<J;){var A=J-1>>>1,N=q[A];if(0<o(N,X))q[A]=X,q[J]=N,J=A;else break e}}function i(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var X=q[0],J=q.pop();if(J!==X){q[0]=J;e:for(var A=0,N=q.length,ie=N>>>1;A<ie;){var ce=2*(A+1)-1,Ee=q[ce],Ce=ce+1,We=q[Ce];if(0>o(Ee,J))Ce<N&&0>o(We,Ee)?(q[A]=We,q[Ce]=J,A=Ce):(q[A]=Ee,q[ce]=J,A=ce);else if(Ce<N&&0>o(We,J))q[A]=We,q[Ce]=J,A=Ce;else break e}}return X}function o(q,X){var J=q.sortIndex-X.sortIndex;return J!==0?J:q.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;e.unstable_now=function(){return d.now()}}else{var u=Date,h=u.now();e.unstable_now=function(){return u.now()-h}}var m=[],g=[],_=1,w=null,f=3,b=!1,S=!1,x=!1,T=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(q){for(var X=i(g);X!==null;){if(X.callback===null)s(g);else if(X.startTime<=q)s(g),X.sortIndex=X.expirationTime,r(m,X);else break;X=i(g)}}function R(q){if(x=!1,O(q),!S)if(i(m)!==null)S=!0,be(M);else{var X=i(g);X!==null&&ke(R,X.startTime-q)}}function M(q,X){S=!1,x&&(x=!1,z(Q),Q=-1),b=!0;var J=f;try{for(O(X),w=i(m);w!==null&&(!(w.expirationTime>X)||q&&!Se());){var A=w.callback;if(typeof A=="function"){w.callback=null,f=w.priorityLevel;var N=A(w.expirationTime<=X);X=e.unstable_now(),typeof N=="function"?w.callback=N:w===i(m)&&s(m),O(X)}else s(m);w=i(m)}if(w!==null)var ie=!0;else{var ce=i(g);ce!==null&&ke(R,ce.startTime-X),ie=!1}return ie}finally{w=null,f=J,b=!1}}var F=!1,U=null,Q=-1,se=5,ue=-1;function Se(){return!(e.unstable_now()-ue<se)}function xe(){if(U!==null){var q=e.unstable_now();ue=q;var X=!0;try{X=U(!0,q)}finally{X?de():(F=!1,U=null)}}else F=!1}var de;if(typeof C=="function")de=function(){C(xe)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,De=Re.port2;Re.port1.onmessage=xe,de=function(){De.postMessage(null)}}else de=function(){T(xe,0)};function be(q){U=q,F||(F=!0,de())}function ke(q,X){Q=T(function(){q(e.unstable_now())},X)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(q){q.callback=null},e.unstable_continueExecution=function(){S||b||(S=!0,be(M))},e.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):se=0<q?Math.floor(1e3/q):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return i(m)},e.unstable_next=function(q){switch(f){case 1:case 2:case 3:var X=3;break;default:X=f}var J=f;f=X;try{return q()}finally{f=J}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(q,X){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var J=f;f=q;try{return X()}finally{f=J}},e.unstable_scheduleCallback=function(q,X,J){var A=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?A+J:A):J=A,q){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=J+N,q={id:_++,callback:X,priorityLevel:q,startTime:J,expirationTime:N,sortIndex:-1},J>A?(q.sortIndex=J,r(g,q),i(m)===null&&q===i(g)&&(x?(z(Q),Q=-1):x=!0,ke(R,J-A))):(q.sortIndex=N,r(m,q),S||b||(S=!0,be(M))),q},e.unstable_shouldYield=Se,e.unstable_wrapCallback=function(q){var X=f;return function(){var J=f;f=X;try{return q.apply(this,arguments)}finally{f=J}}}}(Md)),Md}var lh;function t_(){return lh||(lh=1,Pd.exports=e_()),Pd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh;function n_(){if(dh)return Yt;dh=1;var e=Uc(),r=t_();function i(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function d(t,n){u(t,n),u(t+"Capture",n)}function u(t,n){for(o[t]=n,t=0;t<n.length;t++)s.add(n[t])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},w={};function f(t){return m.call(w,t)?!0:m.call(_,t)?!1:g.test(t)?w[t]=!0:(_[t]=!0,!1)}function b(t,n,a,l){if(a!==null&&a.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function S(t,n,a,l){if(n===null||typeof n>"u"||b(t,n,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function x(t,n,a,l,p,y,E){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=t,this.type=n,this.sanitizeURL=y,this.removeEmptyString=E}var T={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){T[t]=new x(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];T[n]=new x(n,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){T[t]=new x(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){T[t]=new x(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){T[t]=new x(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){T[t]=new x(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){T[t]=new x(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){T[t]=new x(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){T[t]=new x(t,5,!1,t.toLowerCase(),null,!1,!1)});var z=/[\-:]([a-z])/g;function C(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(z,C);T[n]=new x(n,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(z,C);T[n]=new x(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(z,C);T[n]=new x(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){T[t]=new x(t,1,!1,t.toLowerCase(),null,!1,!1)}),T.xlinkHref=new x("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){T[t]=new x(t,1,!1,t.toLowerCase(),null,!0,!0)});function O(t,n,a,l){var p=T.hasOwnProperty(n)?T[n]:null;(p!==null?p.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(S(n,a,p,l)&&(a=null),l||p===null?f(n)&&(a===null?t.removeAttribute(n):t.setAttribute(n,""+a)):p.mustUseProperty?t[p.propertyName]=a===null?p.type===3?!1:"":a:(n=p.attributeName,l=p.attributeNamespace,a===null?t.removeAttribute(n):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,l?t.setAttributeNS(l,n,a):t.setAttribute(n,a))))}var R=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,M=Symbol.for("react.element"),F=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),se=Symbol.for("react.profiler"),ue=Symbol.for("react.provider"),Se=Symbol.for("react.context"),xe=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),Re=Symbol.for("react.suspense_list"),De=Symbol.for("react.memo"),be=Symbol.for("react.lazy"),ke=Symbol.for("react.offscreen"),q=Symbol.iterator;function X(t){return t===null||typeof t!="object"?null:(t=q&&t[q]||t["@@iterator"],typeof t=="function"?t:null)}var J=Object.assign,A;function N(t){if(A===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);A=n&&n[1]||""}return`
`+A+t}var ie=!1;function ce(t,n){if(!t||ie)return"";ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(V){var l=V}Reflect.construct(t,[],n)}else{try{n.call()}catch(V){l=V}t.call(n.prototype)}else{try{throw Error()}catch(V){l=V}t()}}catch(V){if(V&&l&&typeof V.stack=="string"){for(var p=V.stack.split(`
`),y=l.stack.split(`
`),E=p.length-1,P=y.length-1;1<=E&&0<=P&&p[E]!==y[P];)P--;for(;1<=E&&0<=P;E--,P--)if(p[E]!==y[P]){if(E!==1||P!==1)do if(E--,P--,0>P||p[E]!==y[P]){var D=`
`+p[E].replace(" at new "," at ");return t.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",t.displayName)),D}while(1<=E&&0<=P);break}}}finally{ie=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?N(t):""}function Ee(t){switch(t.tag){case 5:return N(t.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return t=ce(t.type,!1),t;case 11:return t=ce(t.type.render,!1),t;case 1:return t=ce(t.type,!0),t;default:return""}}function Ce(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case F:return"Portal";case se:return"Profiler";case Q:return"StrictMode";case de:return"Suspense";case Re:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Se:return(t.displayName||"Context")+".Consumer";case ue:return(t._context.displayName||"Context")+".Provider";case xe:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case De:return n=t.displayName||null,n!==null?n:Ce(t.type)||"Memo";case be:n=t._payload,t=t._init;try{return Ce(t(n))}catch{}}return null}function We(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(n);case 8:return n===Q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Fe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ne(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function He(t){var n=Ne(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),l=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,y=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return p.call(this)},set:function(E){l=""+E,y.call(this,E)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ln(t){t._valueTracker||(t._valueTracker=He(t))}function at(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return t&&(l=Ne(t)?t.checked?"true":"false":t.value),t=l,t!==a?(n.setValue(t),!0):!1}function dt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ct(t,n){var a=n.checked;return J({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function $n(t,n){var a=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;a=Fe(n.value!=null?n.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Yr(t,n){n=n.checked,n!=null&&O(t,"checked",n,!1)}function Bn(t,n){Yr(t,n);var a=Fe(n.value),l=n.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?Pi(t,n.type,a):n.hasOwnProperty("defaultValue")&&Pi(t,n.type,Fe(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function Oi(t,n,a){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,a||n===t.value||(t.value=n),t.defaultValue=n}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Pi(t,n,a){(n!=="number"||dt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var fr=Array.isArray;function Yn(t,n,a,l){if(t=t.options,n){n={};for(var p=0;p<a.length;p++)n["$"+a[p]]=!0;for(a=0;a<t.length;a++)p=n.hasOwnProperty("$"+t[a].value),t[a].selected!==p&&(t[a].selected=p),p&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Fe(a),n=null,p=0;p<t.length;p++){if(t[p].value===a){t[p].selected=!0,l&&(t[p].defaultSelected=!0);return}n!==null||t[p].disabled||(n=t[p])}n!==null&&(n.selected=!0)}}function Mi(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return J({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ra(t,n){var a=n.value;if(a==null){if(a=n.children,n=n.defaultValue,a!=null){if(n!=null)throw Error(i(92));if(fr(a)){if(1<a.length)throw Error(i(93));a=a[0]}n=a}n==null&&(n=""),a=n}t._wrapperState={initialValue:Fe(a)}}function Bi(t,n){var a=Fe(n.value),l=Fe(n.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),n.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function Js(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function eo(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zr(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?eo(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var pr,Oa=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,a,l,p){MSApp.execUnsafeLocalFunction(function(){return t(n,a,l,p)})}:t}(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(pr=pr||document.createElement("div"),pr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=pr.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function Xt(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Qe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pa=["Webkit","ms","Moz","O"];Object.keys(Qe).forEach(function(t){Pa.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),Qe[n]=Qe[t]})});function Ma(t,n,a){return n==null||typeof n=="boolean"||n===""?"":a||typeof n!="number"||n===0||Qe.hasOwnProperty(t)&&Qe[t]?(""+n).trim():n+"px"}function Di(t,n){t=t.style;for(var a in n)if(n.hasOwnProperty(a)){var l=a.indexOf("--")===0,p=Ma(a,n[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,p):t[a]=p}}var Dn=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xn(t,n){if(n){if(Dn[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function Ni(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jt=null;function Li(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ui=null,Zn=null,Xn=null;function Xr(t){if(t=$s(t)){if(typeof Ui!="function")throw Error(i(280));var n=t.stateNode;n&&(n=Fo(n),Ui(t.stateNode,t.type,n))}}function to(t){Zn?Xn?Xn.push(t):Xn=[t]:Zn=t}function no(){if(Zn){var t=Zn,n=Xn;if(Xn=Zn=null,Xr(t),n)for(t=0;t<n.length;t++)Xr(n[t])}}function ro(t,n){return t(n)}function io(){}var ji=!1;function Ba(t,n,a){if(ji)return t(n,a);ji=!0;try{return ro(t,n,a)}finally{ji=!1,(Zn!==null||Xn!==null)&&(io(),no())}}function hr(t,n){var a=t.stateNode;if(a===null)return null;var l=Fo(a);if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(i(231,n,typeof a));return a}var Wi=!1;if(h)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){Wi=!0}}),window.addEventListener("test",rt,rt),window.removeEventListener("test",rt,rt)}catch{Wi=!1}function ao(t,n,a,l,p,y,E,P,D){var V=Array.prototype.slice.call(arguments,3);try{n.apply(a,V)}catch(te){this.onError(te)}}var mr=!1,gr=null,Jr=!1,Nn=null,so={onError:function(t){mr=!0,gr=t}};function oo(t,n,a,l,p,y,E,P,D){mr=!1,gr=null,ao.apply(so,arguments)}function uo(t,n,a,l,p,y,E,P,D){if(oo.apply(this,arguments),mr){if(mr){var V=gr;mr=!1,gr=null}else throw Error(i(198));Jr||(Jr=!0,Nn=V)}}function Ln(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,n.flags&4098&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function Da(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function Na(t){if(Ln(t)!==t)throw Error(i(188))}function lo(t){var n=t.alternate;if(!n){if(n=Ln(t),n===null)throw Error(i(188));return n!==t?null:t}for(var a=t,l=n;;){var p=a.return;if(p===null)break;var y=p.alternate;if(y===null){if(l=p.return,l!==null){a=l;continue}break}if(p.child===y.child){for(y=p.child;y;){if(y===a)return Na(p),t;if(y===l)return Na(p),n;y=y.sibling}throw Error(i(188))}if(a.return!==l.return)a=p,l=y;else{for(var E=!1,P=p.child;P;){if(P===a){E=!0,a=p,l=y;break}if(P===l){E=!0,l=p,a=y;break}P=P.sibling}if(!E){for(P=y.child;P;){if(P===a){E=!0,a=y,l=p;break}if(P===l){E=!0,l=y,a=p;break}P=P.sibling}if(!E)throw Error(i(189))}}if(a.alternate!==l)throw Error(i(190))}if(a.tag!==3)throw Error(i(188));return a.stateNode.current===a?t:n}function La(t){return t=lo(t),t!==null?Ua(t):null}function Ua(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=Ua(t);if(n!==null)return n;t=t.sibling}return null}var ja=r.unstable_scheduleCallback,Wa=r.unstable_cancelCallback,co=r.unstable_shouldYield,Un=r.unstable_requestPaint,st=r.unstable_now,dn=r.unstable_getCurrentPriorityLevel,ei=r.unstable_ImmediatePriority,Fi=r.unstable_UserBlockingPriority,Wt=r.unstable_NormalPriority,fo=r.unstable_LowPriority,po=r.unstable_IdlePriority,Jt=null,cn=null;function Fa(t){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(Jt,t,void 0,(t.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:Vt,Va=Math.log,Ft=Math.LN2;function Vt(t){return t>>>=0,t===0?32:31-(Va(t)/Ft|0)|0}var yr=64,Vi=4194304;function ti(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Hi(t,n){var a=t.pendingLanes;if(a===0)return 0;var l=0,p=t.suspendedLanes,y=t.pingedLanes,E=a&268435455;if(E!==0){var P=E&~p;P!==0?l=ti(P):(y&=E,y!==0&&(l=ti(y)))}else E=a&~p,E!==0?l=ti(E):y!==0&&(l=ti(y));if(l===0)return 0;if(n!==0&&n!==l&&!(n&p)&&(p=l&-l,y=n&-n,p>=y||p===16&&(y&4194240)!==0))return n;if(l&4&&(l|=a&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=l;0<n;)a=31-pt(n),p=1<<a,l|=t[a],n&=~p;return l}function tl(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nl(t,n){for(var a=t.suspendedLanes,l=t.pingedLanes,p=t.expirationTimes,y=t.pendingLanes;0<y;){var E=31-pt(y),P=1<<E,D=p[E];D===-1?(!(P&a)||P&l)&&(p[E]=tl(P,n)):D<=n&&(t.expiredLanes|=P),y&=~P}}function Ha(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ho(){var t=yr;return yr<<=1,!(yr&4194240)&&(yr=64),t}function qi(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ni(t,n,a){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-pt(n),t[n]=a}function rl(t,n){var a=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var p=31-pt(a),y=1<<p;n[p]=0,l[p]=-1,t[p]=-1,a&=~y}}function qa(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var l=31-pt(a),p=1<<l;p&n|t[l]&n&&(t[l]|=n),a&=~p}}var Ke=0;function mo(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var go,Ga,yo,vo,wo,Gi=!1,vr=[],en=null,jn=null,fn=null,ri=new Map,ii=new Map,Wn=[],Ka="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qa(t,n){switch(t){case"focusin":case"focusout":en=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":ri.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ii.delete(n.pointerId)}}function ai(t,n,a,l,p,y){return t===null||t.nativeEvent!==y?(t={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:y,targetContainers:[p]},n!==null&&(n=$s(n),n!==null&&Ga(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,p!==null&&n.indexOf(p)===-1&&n.push(p),t)}function Ki(t,n,a,l,p){switch(n){case"focusin":return en=ai(en,t,n,a,l,p),!0;case"dragenter":return jn=ai(jn,t,n,a,l,p),!0;case"mouseover":return fn=ai(fn,t,n,a,l,p),!0;case"pointerover":var y=p.pointerId;return ri.set(y,ai(ri.get(y)||null,t,n,a,l,p)),!0;case"gotpointercapture":return y=p.pointerId,ii.set(y,ai(ii.get(y)||null,t,n,a,l,p)),!0}return!1}function bn(t){var n=gi(t.target);if(n!==null){var a=Ln(n);if(a!==null){if(n=a.tag,n===13){if(n=Da(a),n!==null){t.blockedOn=n,wo(t.priority,function(){yo(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Mt(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Xa(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);jt=l,a.target.dispatchEvent(l),jt=null}else return n=$s(a),n!==null&&Ga(n),t.blockedOn=a,!1;n.shift()}return!0}function Ya(t,n,a){Mt(t)&&a.delete(n)}function Qi(){Gi=!1,en!==null&&Mt(en)&&(en=null),jn!==null&&Mt(jn)&&(jn=null),fn!==null&&Mt(fn)&&(fn=null),ri.forEach(Ya),ii.forEach(Ya)}function wr(t,n){t.blockedOn===n&&(t.blockedOn=null,Gi||(Gi=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Qi)))}function _r(t){function n(p){return wr(p,t)}if(0<vr.length){wr(vr[0],t);for(var a=1;a<vr.length;a++){var l=vr[a];l.blockedOn===t&&(l.blockedOn=null)}}for(en!==null&&wr(en,t),jn!==null&&wr(jn,t),fn!==null&&wr(fn,t),ri.forEach(n),ii.forEach(n),a=0;a<Wn.length;a++)l=Wn[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<Wn.length&&(a=Wn[0],a.blockedOn===null);)bn(a),a.blockedOn===null&&Wn.shift()}var $r=R.ReactCurrentBatchConfig,xr=!0;function il(t,n,a,l){var p=Ke,y=$r.transition;$r.transition=null;try{Ke=1,Za(t,n,a,l)}finally{Ke=p,$r.transition=y}}function _o(t,n,a,l){var p=Ke,y=$r.transition;$r.transition=null;try{Ke=4,Za(t,n,a,l)}finally{Ke=p,$r.transition=y}}function Za(t,n,a,l){if(xr){var p=Xa(t,n,a,l);if(p===null)$l(t,n,l,Jn,a),Qa(t,l);else if(Ki(p,t,n,a,l))l.stopPropagation();else if(Qa(t,l),n&4&&-1<Ka.indexOf(t)){for(;p!==null;){var y=$s(p);if(y!==null&&go(y),y=Xa(t,n,a,l),y===null&&$l(t,n,l,Jn,a),y===p)break;p=y}p!==null&&l.stopPropagation()}else $l(t,n,l,null,a)}}var Jn=null;function Xa(t,n,a,l){if(Jn=null,t=Li(l),t=gi(t),t!==null)if(n=Ln(t),n===null)t=null;else if(a=n.tag,a===13){if(t=Da(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return Jn=t,null}function $o(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dn()){case ei:return 1;case Fi:return 4;case Wt:case fo:return 16;case po:return 536870912;default:return 16}default:return 16}}var tn=null,Ja=null,si=null;function xo(){if(si)return si;var t,n=Ja,a=n.length,l,p="value"in tn?tn.value:tn.textContent,y=p.length;for(t=0;t<a&&n[t]===p[t];t++);var E=a-t;for(l=1;l<=E&&n[a-l]===p[y-l];l++);return si=p.slice(t,1<l?1-l:void 0)}function Yi(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Zi(){return!0}function es(){return!1}function Bt(t){function n(a,l,p,y,E){this._reactName=a,this._targetInst=p,this.type=l,this.nativeEvent=y,this.target=E,this.currentTarget=null;for(var P in t)t.hasOwnProperty(P)&&(a=t[P],this[P]=a?a(y):y[P]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?Zi:es,this.isPropagationStopped=es,this}return J(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zi)},persist:function(){},isPersistent:Zi}),n}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ts=Bt(br),oi=J({},br,{view:0,detail:0}),al=Bt(oi),ns,rs,ui,Xi=J({},oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:as,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ui&&(ui&&t.type==="mousemove"?(ns=t.screenX-ui.screenX,rs=t.screenY-ui.screenY):rs=ns=0,ui=t),ns)},movementY:function(t){return"movementY"in t?t.movementY:rs}}),bo=Bt(Xi),sl=J({},Xi,{dataTransfer:0}),ol=Bt(sl),Sr=J({},oi,{relatedTarget:0}),Ji=Bt(Sr),So=J({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),ul=Bt(So),ll=J({},br,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ko=Bt(ll),Eo=J({},br,{data:0}),Co=Bt(Eo),is={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},To={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cl(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=dl[t])?!!n[t]:!1}function as(){return cl}var fl=J({},oi,{key:function(t){if(t.key){var n=is[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Yi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?To[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:as,charCode:function(t){return t.type==="keypress"?Yi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pl=Bt(fl),Io=J({},Xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zo=Bt(Io),hl=J({},oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:as}),ml=Bt(hl),gl=J({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),yl=Bt(gl),ea=J({},Xi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),li=Bt(ea),Ao=[9,13,27,32],ss=h&&"CompositionEvent"in window,di=null;h&&"documentMode"in document&&(di=document.documentMode);var os=h&&"TextEvent"in window&&!di,ta=h&&(!ss||di&&8<di&&11>=di),us=" ",ls=!1;function ds(t,n){switch(t){case"keyup":return Ao.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var er=!1;function Ro(t,n){switch(t){case"compositionend":return cs(n);case"keypress":return n.which!==32?null:(ls=!0,us);case"textInput":return t=n.data,t===us&&ls?null:t;default:return null}}function vl(t,n){if(er)return t==="compositionend"||!ss&&ds(t,n)?(t=xo(),si=Ja=tn=null,er=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ta&&n.locale!=="ko"?null:n.data;default:return null}}var Oo={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fs(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Oo[t.type]:n==="textarea"}function ps(t,n,a,l){to(l),n=Uo(n,"onChange"),0<n.length&&(a=new ts("onChange","change",null,a,l),t.push({event:a,listeners:n}))}var ci=null,kr=null;function wl(t){_f(t,0)}function fi(t){var n=da(t);if(at(n))return t}function na(t,n){if(t==="change")return n}var Po=!1;if(h){var ye;if(h){var ra="oninput"in document;if(!ra){var hs=document.createElement("div");hs.setAttribute("oninput","return;"),ra=typeof hs.oninput=="function"}ye=ra}else ye=!1;Po=ye&&(!document.documentMode||9<document.documentMode)}function pi(){ci&&(ci.detachEvent("onpropertychange",tr),kr=ci=null)}function tr(t){if(t.propertyName==="value"&&fi(kr)){var n=[];ps(n,kr,t,Li(t)),Ba(wl,n)}}function ia(t,n,a){t==="focusin"?(pi(),ci=n,kr=a,ci.attachEvent("onpropertychange",tr)):t==="focusout"&&pi()}function pn(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fi(kr)}function ms(t,n){if(t==="click")return fi(n)}function Mo(t,n){if(t==="input"||t==="change")return fi(n)}function Bo(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Dt=typeof Object.is=="function"?Object.is:Bo;function Fn(t,n){if(Dt(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var p=a[l];if(!m.call(n,p)||!Dt(t[p],n[p]))return!1}return!0}function gs(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ys(t,n){var a=gs(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=n&&l>=n)return{node:a,offset:n-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=gs(a)}}function hi(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?hi(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function aa(){for(var t=window,n=dt();n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=dt(t.document)}return n}function mi(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function Do(t){var n=aa(),a=t.focusedElem,l=t.selectionRange;if(n!==a&&a&&a.ownerDocument&&hi(a.ownerDocument.documentElement,a)){if(l!==null&&mi(a)){if(n=l.start,t=l.end,t===void 0&&(t=n),"selectionStart"in a)a.selectionStart=n,a.selectionEnd=Math.min(t,a.value.length);else if(t=(n=a.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var p=a.textContent.length,y=Math.min(l.start,p);l=l.end===void 0?y:Math.min(l.end,p),!t.extend&&y>l&&(p=l,l=y,y=p),p=ys(a,y);var E=ys(a,l);p&&E&&(t.rangeCount!==1||t.anchorNode!==p.node||t.anchorOffset!==p.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(n=n.createRange(),n.setStart(p.node,p.offset),t.removeAllRanges(),y>l?(t.addRange(n),t.extend(E.node,E.offset)):(n.setEnd(E.node,E.offset),t.addRange(n)))}}for(n=[],t=a;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<n.length;a++)t=n[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var No=h&&"documentMode"in document&&11>=document.documentMode,nr=null,sa=null,Er=null,oa=!1;function c(t,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;oa||nr==null||nr!==dt(l)||(l=nr,"selectionStart"in l&&mi(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Er&&Fn(Er,l)||(Er=l,l=Uo(sa,"onSelect"),0<l.length&&(n=new ts("onSelect","select",null,n,a),t.push({event:n,listeners:l}),n.target=nr)))}function v(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var $={animationend:v("Animation","AnimationEnd"),animationiteration:v("Animation","AnimationIteration"),animationstart:v("Animation","AnimationStart"),transitionend:v("Transition","TransitionEnd")},k={},I={};h&&(I=document.createElement("div").style,"AnimationEvent"in window||(delete $.animationend.animation,delete $.animationiteration.animation,delete $.animationstart.animation),"TransitionEvent"in window||delete $.transitionend.transition);function B(t){if(k[t])return k[t];if(!$[t])return t;var n=$[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in I)return k[t]=n[a];return t}var G=B("animationend"),Z=B("animationiteration"),oe=B("animationstart"),le=B("transitionend"),$e=new Map,Le="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Be(t,n){$e.set(t,n),d(n,[t])}for(var H=0;H<Le.length;H++){var Me=Le[H],et=Me.toLowerCase(),rr=Me[0].toUpperCase()+Me.slice(1);Be(et,"on"+rr)}Be(G,"onAnimationEnd"),Be(Z,"onAnimationIteration"),Be(oe,"onAnimationStart"),Be("dblclick","onDoubleClick"),Be("focusin","onFocus"),Be("focusout","onBlur"),Be(le,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),u1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));function wf(t,n,a){var l=t.type||"unknown-event";t.currentTarget=a,uo(l,n,void 0,t),t.currentTarget=null}function _f(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],p=l.event;l=l.listeners;e:{var y=void 0;if(n)for(var E=l.length-1;0<=E;E--){var P=l[E],D=P.instance,V=P.currentTarget;if(P=P.listener,D!==y&&p.isPropagationStopped())break e;wf(p,P,V),y=D}else for(E=0;E<l.length;E++){if(P=l[E],D=P.instance,V=P.currentTarget,P=P.listener,D!==y&&p.isPropagationStopped())break e;wf(p,P,V),y=D}}}if(Jr)throw t=Nn,Jr=!1,Nn=null,t}function tt(t,n){var a=n[Cl];a===void 0&&(a=n[Cl]=new Set);var l=t+"__bubble";a.has(l)||($f(n,t,2,!1),a.add(l))}function _l(t,n,a){var l=0;n&&(l|=4),$f(a,t,l,n)}var Lo="_reactListening"+Math.random().toString(36).slice(2);function vs(t){if(!t[Lo]){t[Lo]=!0,s.forEach(function(a){a!=="selectionchange"&&(u1.has(a)||_l(a,!1,t),_l(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Lo]||(n[Lo]=!0,_l("selectionchange",!1,n))}}function $f(t,n,a,l){switch($o(n)){case 1:var p=il;break;case 4:p=_o;break;default:p=Za}a=p.bind(null,n,a,t),p=void 0,!Wi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(p=!0),l?p!==void 0?t.addEventListener(n,a,{capture:!0,passive:p}):t.addEventListener(n,a,!0):p!==void 0?t.addEventListener(n,a,{passive:p}):t.addEventListener(n,a,!1)}function $l(t,n,a,l,p){var y=l;if(!(n&1)&&!(n&2)&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var P=l.stateNode.containerInfo;if(P===p||P.nodeType===8&&P.parentNode===p)break;if(E===4)for(E=l.return;E!==null;){var D=E.tag;if((D===3||D===4)&&(D=E.stateNode.containerInfo,D===p||D.nodeType===8&&D.parentNode===p))return;E=E.return}for(;P!==null;){if(E=gi(P),E===null)return;if(D=E.tag,D===5||D===6){l=y=E;continue e}P=P.parentNode}}l=l.return}Ba(function(){var V=y,te=Li(a),re=[];e:{var ee=$e.get(t);if(ee!==void 0){var fe=ts,me=t;switch(t){case"keypress":if(Yi(a)===0)break e;case"keydown":case"keyup":fe=pl;break;case"focusin":me="focus",fe=Ji;break;case"focusout":me="blur",fe=Ji;break;case"beforeblur":case"afterblur":fe=Ji;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=bo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=ol;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=ml;break;case G:case Z:case oe:fe=ul;break;case le:fe=yl;break;case"scroll":fe=al;break;case"wheel":fe=li;break;case"copy":case"cut":case"paste":fe=ko;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=zo}var ve=(n&4)!==0,ht=!ve&&t==="scroll",j=ve?ee!==null?ee+"Capture":null:ee;ve=[];for(var L=V,W;L!==null;){W=L;var ae=W.stateNode;if(W.tag===5&&ae!==null&&(W=ae,j!==null&&(ae=hr(L,j),ae!=null&&ve.push(ws(L,ae,W)))),ht)break;L=L.return}0<ve.length&&(ee=new fe(ee,me,null,a,te),re.push({event:ee,listeners:ve}))}}if(!(n&7)){e:{if(ee=t==="mouseover"||t==="pointerover",fe=t==="mouseout"||t==="pointerout",ee&&a!==jt&&(me=a.relatedTarget||a.fromElement)&&(gi(me)||me[ir]))break e;if((fe||ee)&&(ee=te.window===te?te:(ee=te.ownerDocument)?ee.defaultView||ee.parentWindow:window,fe?(me=a.relatedTarget||a.toElement,fe=V,me=me?gi(me):null,me!==null&&(ht=Ln(me),me!==ht||me.tag!==5&&me.tag!==6)&&(me=null)):(fe=null,me=V),fe!==me)){if(ve=bo,ae="onMouseLeave",j="onMouseEnter",L="mouse",(t==="pointerout"||t==="pointerover")&&(ve=zo,ae="onPointerLeave",j="onPointerEnter",L="pointer"),ht=fe==null?ee:da(fe),W=me==null?ee:da(me),ee=new ve(ae,L+"leave",fe,a,te),ee.target=ht,ee.relatedTarget=W,ae=null,gi(te)===V&&(ve=new ve(j,L+"enter",me,a,te),ve.target=W,ve.relatedTarget=ht,ae=ve),ht=ae,fe&&me)t:{for(ve=fe,j=me,L=0,W=ve;W;W=ua(W))L++;for(W=0,ae=j;ae;ae=ua(ae))W++;for(;0<L-W;)ve=ua(ve),L--;for(;0<W-L;)j=ua(j),W--;for(;L--;){if(ve===j||j!==null&&ve===j.alternate)break t;ve=ua(ve),j=ua(j)}ve=null}else ve=null;fe!==null&&xf(re,ee,fe,ve,!1),me!==null&&ht!==null&&xf(re,ht,me,ve,!0)}}e:{if(ee=V?da(V):window,fe=ee.nodeName&&ee.nodeName.toLowerCase(),fe==="select"||fe==="input"&&ee.type==="file")var _e=na;else if(fs(ee))if(Po)_e=Mo;else{_e=pn;var Te=ia}else(fe=ee.nodeName)&&fe.toLowerCase()==="input"&&(ee.type==="checkbox"||ee.type==="radio")&&(_e=ms);if(_e&&(_e=_e(t,V))){ps(re,_e,a,te);break e}Te&&Te(t,ee,V),t==="focusout"&&(Te=ee._wrapperState)&&Te.controlled&&ee.type==="number"&&Pi(ee,"number",ee.value)}switch(Te=V?da(V):window,t){case"focusin":(fs(Te)||Te.contentEditable==="true")&&(nr=Te,sa=V,Er=null);break;case"focusout":Er=sa=nr=null;break;case"mousedown":oa=!0;break;case"contextmenu":case"mouseup":case"dragend":oa=!1,c(re,a,te);break;case"selectionchange":if(No)break;case"keydown":case"keyup":c(re,a,te)}var Ie;if(ss)e:{switch(t){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else er?ds(t,a)&&(Ae="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(ta&&a.locale!=="ko"&&(er||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&er&&(Ie=xo()):(tn=te,Ja="value"in tn?tn.value:tn.textContent,er=!0)),Te=Uo(V,Ae),0<Te.length&&(Ae=new Co(Ae,t,null,a,te),re.push({event:Ae,listeners:Te}),Ie?Ae.data=Ie:(Ie=cs(a),Ie!==null&&(Ae.data=Ie)))),(Ie=os?Ro(t,a):vl(t,a))&&(V=Uo(V,"onBeforeInput"),0<V.length&&(te=new Co("onBeforeInput","beforeinput",null,a,te),re.push({event:te,listeners:V}),te.data=Ie))}_f(re,n)})}function ws(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Uo(t,n){for(var a=n+"Capture",l=[];t!==null;){var p=t,y=p.stateNode;p.tag===5&&y!==null&&(p=y,y=hr(t,a),y!=null&&l.unshift(ws(t,y,p)),y=hr(t,n),y!=null&&l.push(ws(t,y,p))),t=t.return}return l}function ua(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xf(t,n,a,l,p){for(var y=n._reactName,E=[];a!==null&&a!==l;){var P=a,D=P.alternate,V=P.stateNode;if(D!==null&&D===l)break;P.tag===5&&V!==null&&(P=V,p?(D=hr(a,y),D!=null&&E.unshift(ws(a,D,P))):p||(D=hr(a,y),D!=null&&E.push(ws(a,D,P)))),a=a.return}E.length!==0&&t.push({event:n,listeners:E})}var l1=/\r\n?/g,d1=/\u0000|\uFFFD/g;function bf(t){return(typeof t=="string"?t:""+t).replace(l1,`
`).replace(d1,"")}function jo(t,n,a){if(n=bf(n),bf(t)!==n&&a)throw Error(i(425))}function Wo(){}var xl=null,bl=null;function Sl(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var kl=typeof setTimeout=="function"?setTimeout:void 0,c1=typeof clearTimeout=="function"?clearTimeout:void 0,Sf=typeof Promise=="function"?Promise:void 0,f1=typeof queueMicrotask=="function"?queueMicrotask:typeof Sf<"u"?function(t){return Sf.resolve(null).then(t).catch(p1)}:kl;function p1(t){setTimeout(function(){throw t})}function El(t,n){var a=n,l=0;do{var p=a.nextSibling;if(t.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(l===0){t.removeChild(p),_r(n);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=p}while(a);_r(n)}function Tr(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function kf(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}var la=Math.random().toString(36).slice(2),Vn="__reactFiber$"+la,_s="__reactProps$"+la,ir="__reactContainer$"+la,Cl="__reactEvents$"+la,h1="__reactListeners$"+la,m1="__reactHandles$"+la;function gi(t){var n=t[Vn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ir]||a[Vn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=kf(t);t!==null;){if(a=t[Vn])return a;t=kf(t)}return n}t=a,a=t.parentNode}return null}function $s(t){return t=t[Vn]||t[ir],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function da(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(i(33))}function Fo(t){return t[_s]||null}var Tl=[],ca=-1;function Ir(t){return{current:t}}function nt(t){0>ca||(t.current=Tl[ca],Tl[ca]=null,ca--)}function Xe(t,n){ca++,Tl[ca]=t.current,t.current=n}var zr={},Tt=Ir(zr),Ht=Ir(!1),yi=zr;function fa(t,n){var a=t.type.contextTypes;if(!a)return zr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var p={},y;for(y in a)p[y]=n[y];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=p),p}function qt(t){return t=t.childContextTypes,t!=null}function Vo(){nt(Ht),nt(Tt)}function Ef(t,n,a){if(Tt.current!==zr)throw Error(i(168));Xe(Tt,n),Xe(Ht,a)}function Cf(t,n,a){var l=t.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var p in l)if(!(p in n))throw Error(i(108,We(t)||"Unknown",p));return J({},a,l)}function Ho(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zr,yi=Tt.current,Xe(Tt,t),Xe(Ht,Ht.current),!0}function Tf(t,n,a){var l=t.stateNode;if(!l)throw Error(i(169));a?(t=Cf(t,n,yi),l.__reactInternalMemoizedMergedChildContext=t,nt(Ht),nt(Tt),Xe(Tt,t)):nt(Ht),Xe(Ht,a)}var ar=null,qo=!1,Il=!1;function If(t){ar===null?ar=[t]:ar.push(t)}function g1(t){qo=!0,If(t)}function Ar(){if(!Il&&ar!==null){Il=!0;var t=0,n=Ke;try{var a=ar;for(Ke=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}ar=null,qo=!1}catch(p){throw ar!==null&&(ar=ar.slice(t+1)),ja(ei,Ar),p}finally{Ke=n,Il=!1}}return null}var pa=[],ha=0,Go=null,Ko=0,hn=[],mn=0,vi=null,sr=1,or="";function wi(t,n){pa[ha++]=Ko,pa[ha++]=Go,Go=t,Ko=n}function zf(t,n,a){hn[mn++]=sr,hn[mn++]=or,hn[mn++]=vi,vi=t;var l=sr;t=or;var p=32-pt(l)-1;l&=~(1<<p),a+=1;var y=32-pt(n)+p;if(30<y){var E=p-p%5;y=(l&(1<<E)-1).toString(32),l>>=E,p-=E,sr=1<<32-pt(n)+p|a<<p|l,or=y+t}else sr=1<<y|a<<p|l,or=t}function zl(t){t.return!==null&&(wi(t,1),zf(t,1,0))}function Al(t){for(;t===Go;)Go=pa[--ha],pa[ha]=null,Ko=pa[--ha],pa[ha]=null;for(;t===vi;)vi=hn[--mn],hn[mn]=null,or=hn[--mn],hn[mn]=null,sr=hn[--mn],hn[mn]=null}var nn=null,rn=null,it=!1,Sn=null;function Af(t,n){var a=wn(5,null,null,0);a.elementType="DELETED",a.stateNode=n,a.return=t,n=t.deletions,n===null?(t.deletions=[a],t.flags|=16):n.push(a)}function Rf(t,n){switch(t.tag){case 5:var a=t.type;return n=n.nodeType!==1||a.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,nn=t,rn=Tr(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,nn=t,rn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(a=vi!==null?{id:sr,overflow:or}:null,t.memoizedState={dehydrated:n,treeContext:a,retryLane:1073741824},a=wn(18,null,null,0),a.stateNode=n,a.return=t,t.child=a,nn=t,rn=null,!0):!1;default:return!1}}function Rl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ol(t){if(it){var n=rn;if(n){var a=n;if(!Rf(t,n)){if(Rl(t))throw Error(i(418));n=Tr(a.nextSibling);var l=nn;n&&Rf(t,n)?Af(l,a):(t.flags=t.flags&-4097|2,it=!1,nn=t)}}else{if(Rl(t))throw Error(i(418));t.flags=t.flags&-4097|2,it=!1,nn=t}}}function Of(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;nn=t}function Qo(t){if(t!==nn)return!1;if(!it)return Of(t),it=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!Sl(t.type,t.memoizedProps)),n&&(n=rn)){if(Rl(t))throw Pf(),Error(i(418));for(;n;)Af(t,n),n=Tr(n.nextSibling)}if(Of(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(n===0){rn=Tr(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++}t=t.nextSibling}rn=null}}else rn=nn?Tr(t.stateNode.nextSibling):null;return!0}function Pf(){for(var t=rn;t;)t=Tr(t.nextSibling)}function ma(){rn=nn=null,it=!1}function Pl(t){Sn===null?Sn=[t]:Sn.push(t)}var y1=R.ReactCurrentBatchConfig;function xs(t,n,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(i(309));var l=a.stateNode}if(!l)throw Error(i(147,t));var p=l,y=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===y?n.ref:(n=function(E){var P=p.refs;E===null?delete P[y]:P[y]=E},n._stringRef=y,n)}if(typeof t!="string")throw Error(i(284));if(!a._owner)throw Error(i(290,t))}return t}function Yo(t,n){throw t=Object.prototype.toString.call(n),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function Mf(t){var n=t._init;return n(t._payload)}function Bf(t){function n(j,L){if(t){var W=j.deletions;W===null?(j.deletions=[L],j.flags|=16):W.push(L)}}function a(j,L){if(!t)return null;for(;L!==null;)n(j,L),L=L.sibling;return null}function l(j,L){for(j=new Map;L!==null;)L.key!==null?j.set(L.key,L):j.set(L.index,L),L=L.sibling;return j}function p(j,L){return j=Lr(j,L),j.index=0,j.sibling=null,j}function y(j,L,W){return j.index=W,t?(W=j.alternate,W!==null?(W=W.index,W<L?(j.flags|=2,L):W):(j.flags|=2,L)):(j.flags|=1048576,L)}function E(j){return t&&j.alternate===null&&(j.flags|=2),j}function P(j,L,W,ae){return L===null||L.tag!==6?(L=kd(W,j.mode,ae),L.return=j,L):(L=p(L,W),L.return=j,L)}function D(j,L,W,ae){var _e=W.type;return _e===U?te(j,L,W.props.children,ae,W.key):L!==null&&(L.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===be&&Mf(_e)===L.type)?(ae=p(L,W.props),ae.ref=xs(j,L,W),ae.return=j,ae):(ae=_u(W.type,W.key,W.props,null,j.mode,ae),ae.ref=xs(j,L,W),ae.return=j,ae)}function V(j,L,W,ae){return L===null||L.tag!==4||L.stateNode.containerInfo!==W.containerInfo||L.stateNode.implementation!==W.implementation?(L=Ed(W,j.mode,ae),L.return=j,L):(L=p(L,W.children||[]),L.return=j,L)}function te(j,L,W,ae,_e){return L===null||L.tag!==7?(L=Ci(W,j.mode,ae,_e),L.return=j,L):(L=p(L,W),L.return=j,L)}function re(j,L,W){if(typeof L=="string"&&L!==""||typeof L=="number")return L=kd(""+L,j.mode,W),L.return=j,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case M:return W=_u(L.type,L.key,L.props,null,j.mode,W),W.ref=xs(j,null,L),W.return=j,W;case F:return L=Ed(L,j.mode,W),L.return=j,L;case be:var ae=L._init;return re(j,ae(L._payload),W)}if(fr(L)||X(L))return L=Ci(L,j.mode,W,null),L.return=j,L;Yo(j,L)}return null}function ee(j,L,W,ae){var _e=L!==null?L.key:null;if(typeof W=="string"&&W!==""||typeof W=="number")return _e!==null?null:P(j,L,""+W,ae);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case M:return W.key===_e?D(j,L,W,ae):null;case F:return W.key===_e?V(j,L,W,ae):null;case be:return _e=W._init,ee(j,L,_e(W._payload),ae)}if(fr(W)||X(W))return _e!==null?null:te(j,L,W,ae,null);Yo(j,W)}return null}function fe(j,L,W,ae,_e){if(typeof ae=="string"&&ae!==""||typeof ae=="number")return j=j.get(W)||null,P(L,j,""+ae,_e);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case M:return j=j.get(ae.key===null?W:ae.key)||null,D(L,j,ae,_e);case F:return j=j.get(ae.key===null?W:ae.key)||null,V(L,j,ae,_e);case be:var Te=ae._init;return fe(j,L,W,Te(ae._payload),_e)}if(fr(ae)||X(ae))return j=j.get(W)||null,te(L,j,ae,_e,null);Yo(L,ae)}return null}function me(j,L,W,ae){for(var _e=null,Te=null,Ie=L,Ae=L=0,bt=null;Ie!==null&&Ae<W.length;Ae++){Ie.index>Ae?(bt=Ie,Ie=null):bt=Ie.sibling;var Ge=ee(j,Ie,W[Ae],ae);if(Ge===null){Ie===null&&(Ie=bt);break}t&&Ie&&Ge.alternate===null&&n(j,Ie),L=y(Ge,L,Ae),Te===null?_e=Ge:Te.sibling=Ge,Te=Ge,Ie=bt}if(Ae===W.length)return a(j,Ie),it&&wi(j,Ae),_e;if(Ie===null){for(;Ae<W.length;Ae++)Ie=re(j,W[Ae],ae),Ie!==null&&(L=y(Ie,L,Ae),Te===null?_e=Ie:Te.sibling=Ie,Te=Ie);return it&&wi(j,Ae),_e}for(Ie=l(j,Ie);Ae<W.length;Ae++)bt=fe(Ie,j,Ae,W[Ae],ae),bt!==null&&(t&&bt.alternate!==null&&Ie.delete(bt.key===null?Ae:bt.key),L=y(bt,L,Ae),Te===null?_e=bt:Te.sibling=bt,Te=bt);return t&&Ie.forEach(function(Ur){return n(j,Ur)}),it&&wi(j,Ae),_e}function ve(j,L,W,ae){var _e=X(W);if(typeof _e!="function")throw Error(i(150));if(W=_e.call(W),W==null)throw Error(i(151));for(var Te=_e=null,Ie=L,Ae=L=0,bt=null,Ge=W.next();Ie!==null&&!Ge.done;Ae++,Ge=W.next()){Ie.index>Ae?(bt=Ie,Ie=null):bt=Ie.sibling;var Ur=ee(j,Ie,Ge.value,ae);if(Ur===null){Ie===null&&(Ie=bt);break}t&&Ie&&Ur.alternate===null&&n(j,Ie),L=y(Ur,L,Ae),Te===null?_e=Ur:Te.sibling=Ur,Te=Ur,Ie=bt}if(Ge.done)return a(j,Ie),it&&wi(j,Ae),_e;if(Ie===null){for(;!Ge.done;Ae++,Ge=W.next())Ge=re(j,Ge.value,ae),Ge!==null&&(L=y(Ge,L,Ae),Te===null?_e=Ge:Te.sibling=Ge,Te=Ge);return it&&wi(j,Ae),_e}for(Ie=l(j,Ie);!Ge.done;Ae++,Ge=W.next())Ge=fe(Ie,j,Ae,Ge.value,ae),Ge!==null&&(t&&Ge.alternate!==null&&Ie.delete(Ge.key===null?Ae:Ge.key),L=y(Ge,L,Ae),Te===null?_e=Ge:Te.sibling=Ge,Te=Ge);return t&&Ie.forEach(function(Q1){return n(j,Q1)}),it&&wi(j,Ae),_e}function ht(j,L,W,ae){if(typeof W=="object"&&W!==null&&W.type===U&&W.key===null&&(W=W.props.children),typeof W=="object"&&W!==null){switch(W.$$typeof){case M:e:{for(var _e=W.key,Te=L;Te!==null;){if(Te.key===_e){if(_e=W.type,_e===U){if(Te.tag===7){a(j,Te.sibling),L=p(Te,W.props.children),L.return=j,j=L;break e}}else if(Te.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===be&&Mf(_e)===Te.type){a(j,Te.sibling),L=p(Te,W.props),L.ref=xs(j,Te,W),L.return=j,j=L;break e}a(j,Te);break}else n(j,Te);Te=Te.sibling}W.type===U?(L=Ci(W.props.children,j.mode,ae,W.key),L.return=j,j=L):(ae=_u(W.type,W.key,W.props,null,j.mode,ae),ae.ref=xs(j,L,W),ae.return=j,j=ae)}return E(j);case F:e:{for(Te=W.key;L!==null;){if(L.key===Te)if(L.tag===4&&L.stateNode.containerInfo===W.containerInfo&&L.stateNode.implementation===W.implementation){a(j,L.sibling),L=p(L,W.children||[]),L.return=j,j=L;break e}else{a(j,L);break}else n(j,L);L=L.sibling}L=Ed(W,j.mode,ae),L.return=j,j=L}return E(j);case be:return Te=W._init,ht(j,L,Te(W._payload),ae)}if(fr(W))return me(j,L,W,ae);if(X(W))return ve(j,L,W,ae);Yo(j,W)}return typeof W=="string"&&W!==""||typeof W=="number"?(W=""+W,L!==null&&L.tag===6?(a(j,L.sibling),L=p(L,W),L.return=j,j=L):(a(j,L),L=kd(W,j.mode,ae),L.return=j,j=L),E(j)):a(j,L)}return ht}var ga=Bf(!0),Df=Bf(!1),Zo=Ir(null),Xo=null,ya=null,Ml=null;function Bl(){Ml=ya=Xo=null}function Dl(t){var n=Zo.current;nt(Zo),t._currentValue=n}function Nl(t,n,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===a)break;t=t.return}}function va(t,n){Xo=t,Ml=ya=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&n&&(Gt=!0),t.firstContext=null)}function gn(t){var n=t._currentValue;if(Ml!==t)if(t={context:t,memoizedValue:n,next:null},ya===null){if(Xo===null)throw Error(i(308));ya=t,Xo.dependencies={lanes:0,firstContext:t}}else ya=ya.next=t;return n}var _i=null;function Ll(t){_i===null?_i=[t]:_i.push(t)}function Nf(t,n,a,l){var p=n.interleaved;return p===null?(a.next=a,Ll(n)):(a.next=p.next,p.next=a),n.interleaved=a,ur(t,l)}function ur(t,n){t.lanes|=n;var a=t.alternate;for(a!==null&&(a.lanes|=n),a=t,t=t.return;t!==null;)t.childLanes|=n,a=t.alternate,a!==null&&(a.childLanes|=n),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Rr=!1;function Ul(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function lr(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function Or(t,n,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,qe&2){var p=l.pending;return p===null?n.next=n:(n.next=p.next,p.next=n),l.pending=n,ur(t,a)}return p=l.interleaved,p===null?(n.next=n,Ll(l)):(n.next=p.next,p.next=n),l.interleaved=n,ur(t,a)}function Jo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194240)!==0)){var l=n.lanes;l&=t.pendingLanes,a|=l,n.lanes=a,qa(t,a)}}function Uf(t,n){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var p=null,y=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};y===null?p=y=E:y=y.next=E,a=a.next}while(a!==null);y===null?p=y=n:y=y.next=n}else p=y=n;a={baseState:l.baseState,firstBaseUpdate:p,lastBaseUpdate:y,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}function eu(t,n,a,l){var p=t.updateQueue;Rr=!1;var y=p.firstBaseUpdate,E=p.lastBaseUpdate,P=p.shared.pending;if(P!==null){p.shared.pending=null;var D=P,V=D.next;D.next=null,E===null?y=V:E.next=V,E=D;var te=t.alternate;te!==null&&(te=te.updateQueue,P=te.lastBaseUpdate,P!==E&&(P===null?te.firstBaseUpdate=V:P.next=V,te.lastBaseUpdate=D))}if(y!==null){var re=p.baseState;E=0,te=V=D=null,P=y;do{var ee=P.lane,fe=P.eventTime;if((l&ee)===ee){te!==null&&(te=te.next={eventTime:fe,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var me=t,ve=P;switch(ee=n,fe=a,ve.tag){case 1:if(me=ve.payload,typeof me=="function"){re=me.call(fe,re,ee);break e}re=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=ve.payload,ee=typeof me=="function"?me.call(fe,re,ee):me,ee==null)break e;re=J({},re,ee);break e;case 2:Rr=!0}}P.callback!==null&&P.lane!==0&&(t.flags|=64,ee=p.effects,ee===null?p.effects=[P]:ee.push(P))}else fe={eventTime:fe,lane:ee,tag:P.tag,payload:P.payload,callback:P.callback,next:null},te===null?(V=te=fe,D=re):te=te.next=fe,E|=ee;if(P=P.next,P===null){if(P=p.shared.pending,P===null)break;ee=P,P=ee.next,ee.next=null,p.lastBaseUpdate=ee,p.shared.pending=null}}while(!0);if(te===null&&(D=re),p.baseState=D,p.firstBaseUpdate=V,p.lastBaseUpdate=te,n=p.shared.interleaved,n!==null){p=n;do E|=p.lane,p=p.next;while(p!==n)}else y===null&&(p.shared.lanes=0);bi|=E,t.lanes=E,t.memoizedState=re}}function jf(t,n,a){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var l=t[n],p=l.callback;if(p!==null){if(l.callback=null,l=a,typeof p!="function")throw Error(i(191,p));p.call(l)}}}var bs={},Hn=Ir(bs),Ss=Ir(bs),ks=Ir(bs);function $i(t){if(t===bs)throw Error(i(174));return t}function jl(t,n){switch(Xe(ks,n),Xe(Ss,t),Xe(Hn,bs),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Zr(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=Zr(n,t)}nt(Hn),Xe(Hn,n)}function wa(){nt(Hn),nt(Ss),nt(ks)}function Wf(t){$i(ks.current);var n=$i(Hn.current),a=Zr(n,t.type);n!==a&&(Xe(Ss,t),Xe(Hn,a))}function Wl(t){Ss.current===t&&(nt(Hn),nt(Ss))}var ot=Ir(0);function tu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Fl=[];function Vl(){for(var t=0;t<Fl.length;t++)Fl[t]._workInProgressVersionPrimary=null;Fl.length=0}var nu=R.ReactCurrentDispatcher,Hl=R.ReactCurrentBatchConfig,xi=0,ut=null,vt=null,$t=null,ru=!1,Es=!1,Cs=0,v1=0;function It(){throw Error(i(321))}function ql(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Dt(t[a],n[a]))return!1;return!0}function Gl(t,n,a,l,p,y){if(xi=y,ut=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,nu.current=t===null||t.memoizedState===null?x1:b1,t=a(l,p),Es){y=0;do{if(Es=!1,Cs=0,25<=y)throw Error(i(301));y+=1,$t=vt=null,n.updateQueue=null,nu.current=S1,t=a(l,p)}while(Es)}if(nu.current=su,n=vt!==null&&vt.next!==null,xi=0,$t=vt=ut=null,ru=!1,n)throw Error(i(300));return t}function Kl(){var t=Cs!==0;return Cs=0,t}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?ut.memoizedState=$t=t:$t=$t.next=t,$t}function yn(){if(vt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=vt.next;var n=$t===null?ut.memoizedState:$t.next;if(n!==null)$t=n,vt=t;else{if(t===null)throw Error(i(310));vt=t,t={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},$t===null?ut.memoizedState=$t=t:$t=$t.next=t}return $t}function Ts(t,n){return typeof n=="function"?n(t):n}function Ql(t){var n=yn(),a=n.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=t;var l=vt,p=l.baseQueue,y=a.pending;if(y!==null){if(p!==null){var E=p.next;p.next=y.next,y.next=E}l.baseQueue=p=y,a.pending=null}if(p!==null){y=p.next,l=l.baseState;var P=E=null,D=null,V=y;do{var te=V.lane;if((xi&te)===te)D!==null&&(D=D.next={lane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),l=V.hasEagerState?V.eagerState:t(l,V.action);else{var re={lane:te,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null};D===null?(P=D=re,E=l):D=D.next=re,ut.lanes|=te,bi|=te}V=V.next}while(V!==null&&V!==y);D===null?E=l:D.next=P,Dt(l,n.memoizedState)||(Gt=!0),n.memoizedState=l,n.baseState=E,n.baseQueue=D,a.lastRenderedState=l}if(t=a.interleaved,t!==null){p=t;do y=p.lane,ut.lanes|=y,bi|=y,p=p.next;while(p!==t)}else p===null&&(a.lanes=0);return[n.memoizedState,a.dispatch]}function Yl(t){var n=yn(),a=n.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=t;var l=a.dispatch,p=a.pending,y=n.memoizedState;if(p!==null){a.pending=null;var E=p=p.next;do y=t(y,E.action),E=E.next;while(E!==p);Dt(y,n.memoizedState)||(Gt=!0),n.memoizedState=y,n.baseQueue===null&&(n.baseState=y),a.lastRenderedState=y}return[y,l]}function Ff(){}function Vf(t,n){var a=ut,l=yn(),p=n(),y=!Dt(l.memoizedState,p);if(y&&(l.memoizedState=p,Gt=!0),l=l.queue,Zl(Gf.bind(null,a,l,t),[t]),l.getSnapshot!==n||y||$t!==null&&$t.memoizedState.tag&1){if(a.flags|=2048,Is(9,qf.bind(null,a,l,p,n),void 0,null),xt===null)throw Error(i(349));xi&30||Hf(a,n,p)}return p}function Hf(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ut.updateQueue,n===null?(n={lastEffect:null,stores:null},ut.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function qf(t,n,a,l){n.value=a,n.getSnapshot=l,Kf(n)&&Qf(t)}function Gf(t,n,a){return a(function(){Kf(n)&&Qf(t)})}function Kf(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Dt(t,a)}catch{return!0}}function Qf(t){var n=ur(t,1);n!==null&&Tn(n,t,1,-1)}function Yf(t){var n=qn();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ts,lastRenderedState:t},n.queue=t,t=t.dispatch=$1.bind(null,ut,t),[n.memoizedState,t]}function Is(t,n,a,l){return t={tag:t,create:n,destroy:a,deps:l,next:null},n=ut.updateQueue,n===null?(n={lastEffect:null,stores:null},ut.updateQueue=n,n.lastEffect=t.next=t):(a=n.lastEffect,a===null?n.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,n.lastEffect=t)),t}function Zf(){return yn().memoizedState}function iu(t,n,a,l){var p=qn();ut.flags|=t,p.memoizedState=Is(1|n,a,void 0,l===void 0?null:l)}function au(t,n,a,l){var p=yn();l=l===void 0?null:l;var y=void 0;if(vt!==null){var E=vt.memoizedState;if(y=E.destroy,l!==null&&ql(l,E.deps)){p.memoizedState=Is(n,a,y,l);return}}ut.flags|=t,p.memoizedState=Is(1|n,a,y,l)}function Xf(t,n){return iu(8390656,8,t,n)}function Zl(t,n){return au(2048,8,t,n)}function Jf(t,n){return au(4,2,t,n)}function ep(t,n){return au(4,4,t,n)}function tp(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function np(t,n,a){return a=a!=null?a.concat([t]):null,au(4,4,tp.bind(null,n,t),a)}function Xl(){}function rp(t,n){var a=yn();n=n===void 0?null:n;var l=a.memoizedState;return l!==null&&n!==null&&ql(n,l[1])?l[0]:(a.memoizedState=[t,n],t)}function ip(t,n){var a=yn();n=n===void 0?null:n;var l=a.memoizedState;return l!==null&&n!==null&&ql(n,l[1])?l[0]:(t=t(),a.memoizedState=[t,n],t)}function ap(t,n,a){return xi&21?(Dt(a,n)||(a=ho(),ut.lanes|=a,bi|=a,t.baseState=!0),n):(t.baseState&&(t.baseState=!1,Gt=!0),t.memoizedState=a)}function w1(t,n){var a=Ke;Ke=a!==0&&4>a?a:4,t(!0);var l=Hl.transition;Hl.transition={};try{t(!1),n()}finally{Ke=a,Hl.transition=l}}function sp(){return yn().memoizedState}function _1(t,n,a){var l=Dr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},op(t))up(n,a);else if(a=Nf(t,n,a,l),a!==null){var p=Lt();Tn(a,t,l,p),lp(a,n,l)}}function $1(t,n,a){var l=Dr(t),p={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(op(t))up(n,p);else{var y=t.alternate;if(t.lanes===0&&(y===null||y.lanes===0)&&(y=n.lastRenderedReducer,y!==null))try{var E=n.lastRenderedState,P=y(E,a);if(p.hasEagerState=!0,p.eagerState=P,Dt(P,E)){var D=n.interleaved;D===null?(p.next=p,Ll(n)):(p.next=D.next,D.next=p),n.interleaved=p;return}}catch{}finally{}a=Nf(t,n,p,l),a!==null&&(p=Lt(),Tn(a,t,l,p),lp(a,n,l))}}function op(t){var n=t.alternate;return t===ut||n!==null&&n===ut}function up(t,n){Es=ru=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function lp(t,n,a){if(a&4194240){var l=n.lanes;l&=t.pendingLanes,a|=l,n.lanes=a,qa(t,a)}}var su={readContext:gn,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},x1={readContext:gn,useCallback:function(t,n){return qn().memoizedState=[t,n===void 0?null:n],t},useContext:gn,useEffect:Xf,useImperativeHandle:function(t,n,a){return a=a!=null?a.concat([t]):null,iu(4194308,4,tp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return iu(4194308,4,t,n)},useInsertionEffect:function(t,n){return iu(4,2,t,n)},useMemo:function(t,n){var a=qn();return n=n===void 0?null:n,t=t(),a.memoizedState=[t,n],t},useReducer:function(t,n,a){var l=qn();return n=a!==void 0?a(n):n,l.memoizedState=l.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=_1.bind(null,ut,t),[l.memoizedState,t]},useRef:function(t){var n=qn();return t={current:t},n.memoizedState=t},useState:Yf,useDebugValue:Xl,useDeferredValue:function(t){return qn().memoizedState=t},useTransition:function(){var t=Yf(!1),n=t[0];return t=w1.bind(null,t[1]),qn().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,a){var l=ut,p=qn();if(it){if(a===void 0)throw Error(i(407));a=a()}else{if(a=n(),xt===null)throw Error(i(349));xi&30||Hf(l,n,a)}p.memoizedState=a;var y={value:a,getSnapshot:n};return p.queue=y,Xf(Gf.bind(null,l,y,t),[t]),l.flags|=2048,Is(9,qf.bind(null,l,y,a,n),void 0,null),a},useId:function(){var t=qn(),n=xt.identifierPrefix;if(it){var a=or,l=sr;a=(l&~(1<<32-pt(l)-1)).toString(32)+a,n=":"+n+"R"+a,a=Cs++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=v1++,n=":"+n+"r"+a.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},b1={readContext:gn,useCallback:rp,useContext:gn,useEffect:Zl,useImperativeHandle:np,useInsertionEffect:Jf,useLayoutEffect:ep,useMemo:ip,useReducer:Ql,useRef:Zf,useState:function(){return Ql(Ts)},useDebugValue:Xl,useDeferredValue:function(t){var n=yn();return ap(n,vt.memoizedState,t)},useTransition:function(){var t=Ql(Ts)[0],n=yn().memoizedState;return[t,n]},useMutableSource:Ff,useSyncExternalStore:Vf,useId:sp,unstable_isNewReconciler:!1},S1={readContext:gn,useCallback:rp,useContext:gn,useEffect:Zl,useImperativeHandle:np,useInsertionEffect:Jf,useLayoutEffect:ep,useMemo:ip,useReducer:Yl,useRef:Zf,useState:function(){return Yl(Ts)},useDebugValue:Xl,useDeferredValue:function(t){var n=yn();return vt===null?n.memoizedState=t:ap(n,vt.memoizedState,t)},useTransition:function(){var t=Yl(Ts)[0],n=yn().memoizedState;return[t,n]},useMutableSource:Ff,useSyncExternalStore:Vf,useId:sp,unstable_isNewReconciler:!1};function kn(t,n){if(t&&t.defaultProps){n=J({},n),t=t.defaultProps;for(var a in t)n[a]===void 0&&(n[a]=t[a]);return n}return n}function Jl(t,n,a,l){n=t.memoizedState,a=a(l,n),a=a==null?n:J({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ou={isMounted:function(t){return(t=t._reactInternals)?Ln(t)===t:!1},enqueueSetState:function(t,n,a){t=t._reactInternals;var l=Lt(),p=Dr(t),y=lr(l,p);y.payload=n,a!=null&&(y.callback=a),n=Or(t,y,p),n!==null&&(Tn(n,t,p,l),Jo(n,t,p))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var l=Lt(),p=Dr(t),y=lr(l,p);y.tag=1,y.payload=n,a!=null&&(y.callback=a),n=Or(t,y,p),n!==null&&(Tn(n,t,p,l),Jo(n,t,p))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Lt(),l=Dr(t),p=lr(a,l);p.tag=2,n!=null&&(p.callback=n),n=Or(t,p,l),n!==null&&(Tn(n,t,l,a),Jo(n,t,l))}};function dp(t,n,a,l,p,y,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,y,E):n.prototype&&n.prototype.isPureReactComponent?!Fn(a,l)||!Fn(p,y):!0}function cp(t,n,a){var l=!1,p=zr,y=n.contextType;return typeof y=="object"&&y!==null?y=gn(y):(p=qt(n)?yi:Tt.current,l=n.contextTypes,y=(l=l!=null)?fa(t,p):zr),n=new n(a,y),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ou,t.stateNode=n,n._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=p,t.__reactInternalMemoizedMaskedChildContext=y),n}function fp(t,n,a,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==t&&ou.enqueueReplaceState(n,n.state,null)}function ed(t,n,a,l){var p=t.stateNode;p.props=a,p.state=t.memoizedState,p.refs={},Ul(t);var y=n.contextType;typeof y=="object"&&y!==null?p.context=gn(y):(y=qt(n)?yi:Tt.current,p.context=fa(t,y)),p.state=t.memoizedState,y=n.getDerivedStateFromProps,typeof y=="function"&&(Jl(t,n,y,a),p.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(n=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),n!==p.state&&ou.enqueueReplaceState(p,p.state,null),eu(t,a,p,l),p.state=t.memoizedState),typeof p.componentDidMount=="function"&&(t.flags|=4194308)}function _a(t,n){try{var a="",l=n;do a+=Ee(l),l=l.return;while(l);var p=a}catch(y){p=`
Error generating stack: `+y.message+`
`+y.stack}return{value:t,source:n,stack:p,digest:null}}function td(t,n,a){return{value:t,source:null,stack:a??null,digest:n??null}}function nd(t,n){try{console.error(n.value)}catch(a){setTimeout(function(){throw a})}}var k1=typeof WeakMap=="function"?WeakMap:Map;function pp(t,n,a){a=lr(-1,a),a.tag=3,a.payload={element:null};var l=n.value;return a.callback=function(){hu||(hu=!0,yd=l),nd(t,n)},a}function hp(t,n,a){a=lr(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var p=n.value;a.payload=function(){return l(p)},a.callback=function(){nd(t,n)}}var y=t.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(a.callback=function(){nd(t,n),typeof l!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var E=n.stack;this.componentDidCatch(n.value,{componentStack:E!==null?E:""})}),a}function mp(t,n,a){var l=t.pingCache;if(l===null){l=t.pingCache=new k1;var p=new Set;l.set(n,p)}else p=l.get(n),p===void 0&&(p=new Set,l.set(n,p));p.has(a)||(p.add(a),t=L1.bind(null,t,n,a),n.then(t,t))}function gp(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function yp(t,n,a,l,p){return t.mode&1?(t.flags|=65536,t.lanes=p,t):(t===n?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(n=lr(-1,1),n.tag=2,Or(a,n,1))),a.lanes|=1),t)}var E1=R.ReactCurrentOwner,Gt=!1;function Nt(t,n,a,l){n.child=t===null?Df(n,null,a,l):ga(n,t.child,a,l)}function vp(t,n,a,l,p){a=a.render;var y=n.ref;return va(n,p),l=Gl(t,n,a,l,y,p),a=Kl(),t!==null&&!Gt?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~p,dr(t,n,p)):(it&&a&&zl(n),n.flags|=1,Nt(t,n,l,p),n.child)}function wp(t,n,a,l,p){if(t===null){var y=a.type;return typeof y=="function"&&!Sd(y)&&y.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(n.tag=15,n.type=y,_p(t,n,y,l,p)):(t=_u(a.type,null,l,n,n.mode,p),t.ref=n.ref,t.return=n,n.child=t)}if(y=t.child,!(t.lanes&p)){var E=y.memoizedProps;if(a=a.compare,a=a!==null?a:Fn,a(E,l)&&t.ref===n.ref)return dr(t,n,p)}return n.flags|=1,t=Lr(y,l),t.ref=n.ref,t.return=n,n.child=t}function _p(t,n,a,l,p){if(t!==null){var y=t.memoizedProps;if(Fn(y,l)&&t.ref===n.ref)if(Gt=!1,n.pendingProps=l=y,(t.lanes&p)!==0)t.flags&131072&&(Gt=!0);else return n.lanes=t.lanes,dr(t,n,p)}return rd(t,n,a,l,p)}function $p(t,n,a){var l=n.pendingProps,p=l.children,y=t!==null?t.memoizedState:null;if(l.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xe(xa,an),an|=a;else{if(!(a&1073741824))return t=y!==null?y.baseLanes|a:a,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,Xe(xa,an),an|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=y!==null?y.baseLanes:a,Xe(xa,an),an|=l}else y!==null?(l=y.baseLanes|a,n.memoizedState=null):l=a,Xe(xa,an),an|=l;return Nt(t,n,p,a),n.child}function xp(t,n){var a=n.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(n.flags|=512,n.flags|=2097152)}function rd(t,n,a,l,p){var y=qt(a)?yi:Tt.current;return y=fa(n,y),va(n,p),a=Gl(t,n,a,l,y,p),l=Kl(),t!==null&&!Gt?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~p,dr(t,n,p)):(it&&l&&zl(n),n.flags|=1,Nt(t,n,a,p),n.child)}function bp(t,n,a,l,p){if(qt(a)){var y=!0;Ho(n)}else y=!1;if(va(n,p),n.stateNode===null)lu(t,n),cp(n,a,l),ed(n,a,l,p),l=!0;else if(t===null){var E=n.stateNode,P=n.memoizedProps;E.props=P;var D=E.context,V=a.contextType;typeof V=="object"&&V!==null?V=gn(V):(V=qt(a)?yi:Tt.current,V=fa(n,V));var te=a.getDerivedStateFromProps,re=typeof te=="function"||typeof E.getSnapshotBeforeUpdate=="function";re||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(P!==l||D!==V)&&fp(n,E,l,V),Rr=!1;var ee=n.memoizedState;E.state=ee,eu(n,l,E,p),D=n.memoizedState,P!==l||ee!==D||Ht.current||Rr?(typeof te=="function"&&(Jl(n,a,te,l),D=n.memoizedState),(P=Rr||dp(n,a,P,l,ee,D,V))?(re||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(n.flags|=4194308)):(typeof E.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=D),E.props=l,E.state=D,E.context=V,l=P):(typeof E.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{E=n.stateNode,Lf(t,n),P=n.memoizedProps,V=n.type===n.elementType?P:kn(n.type,P),E.props=V,re=n.pendingProps,ee=E.context,D=a.contextType,typeof D=="object"&&D!==null?D=gn(D):(D=qt(a)?yi:Tt.current,D=fa(n,D));var fe=a.getDerivedStateFromProps;(te=typeof fe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(P!==re||ee!==D)&&fp(n,E,l,D),Rr=!1,ee=n.memoizedState,E.state=ee,eu(n,l,E,p);var me=n.memoizedState;P!==re||ee!==me||Ht.current||Rr?(typeof fe=="function"&&(Jl(n,a,fe,l),me=n.memoizedState),(V=Rr||dp(n,a,V,l,ee,me,D)||!1)?(te||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,me,D),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,me,D)),typeof E.componentDidUpdate=="function"&&(n.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof E.componentDidUpdate!="function"||P===t.memoizedProps&&ee===t.memoizedState||(n.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||P===t.memoizedProps&&ee===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=me),E.props=l,E.state=me,E.context=D,l=V):(typeof E.componentDidUpdate!="function"||P===t.memoizedProps&&ee===t.memoizedState||(n.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||P===t.memoizedProps&&ee===t.memoizedState||(n.flags|=1024),l=!1)}return id(t,n,a,l,y,p)}function id(t,n,a,l,p,y){xp(t,n);var E=(n.flags&128)!==0;if(!l&&!E)return p&&Tf(n,a,!1),dr(t,n,y);l=n.stateNode,E1.current=n;var P=E&&typeof a.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,t!==null&&E?(n.child=ga(n,t.child,null,y),n.child=ga(n,null,P,y)):Nt(t,n,P,y),n.memoizedState=l.state,p&&Tf(n,a,!0),n.child}function Sp(t){var n=t.stateNode;n.pendingContext?Ef(t,n.pendingContext,n.pendingContext!==n.context):n.context&&Ef(t,n.context,!1),jl(t,n.containerInfo)}function kp(t,n,a,l,p){return ma(),Pl(p),n.flags|=256,Nt(t,n,a,l),n.child}var ad={dehydrated:null,treeContext:null,retryLane:0};function sd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ep(t,n,a){var l=n.pendingProps,p=ot.current,y=!1,E=(n.flags&128)!==0,P;if((P=E)||(P=t!==null&&t.memoizedState===null?!1:(p&2)!==0),P?(y=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(p|=1),Xe(ot,p&1),t===null)return Ol(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(n.mode&1?t.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(E=l.children,t=l.fallback,y?(l=n.mode,y=n.child,E={mode:"hidden",children:E},!(l&1)&&y!==null?(y.childLanes=0,y.pendingProps=E):y=$u(E,l,0,null),t=Ci(t,l,a,null),y.return=n,t.return=n,y.sibling=t,n.child=y,n.child.memoizedState=sd(a),n.memoizedState=ad,t):od(n,E));if(p=t.memoizedState,p!==null&&(P=p.dehydrated,P!==null))return C1(t,n,E,l,P,p,a);if(y){y=l.fallback,E=n.mode,p=t.child,P=p.sibling;var D={mode:"hidden",children:l.children};return!(E&1)&&n.child!==p?(l=n.child,l.childLanes=0,l.pendingProps=D,n.deletions=null):(l=Lr(p,D),l.subtreeFlags=p.subtreeFlags&14680064),P!==null?y=Lr(P,y):(y=Ci(y,E,a,null),y.flags|=2),y.return=n,l.return=n,l.sibling=y,n.child=l,l=y,y=n.child,E=t.child.memoizedState,E=E===null?sd(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},y.memoizedState=E,y.childLanes=t.childLanes&~a,n.memoizedState=ad,l}return y=t.child,t=y.sibling,l=Lr(y,{mode:"visible",children:l.children}),!(n.mode&1)&&(l.lanes=a),l.return=n,l.sibling=null,t!==null&&(a=n.deletions,a===null?(n.deletions=[t],n.flags|=16):a.push(t)),n.child=l,n.memoizedState=null,l}function od(t,n){return n=$u({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function uu(t,n,a,l){return l!==null&&Pl(l),ga(n,t.child,null,a),t=od(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function C1(t,n,a,l,p,y,E){if(a)return n.flags&256?(n.flags&=-257,l=td(Error(i(422))),uu(t,n,E,l)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(y=l.fallback,p=n.mode,l=$u({mode:"visible",children:l.children},p,0,null),y=Ci(y,p,E,null),y.flags|=2,l.return=n,y.return=n,l.sibling=y,n.child=l,n.mode&1&&ga(n,t.child,null,E),n.child.memoizedState=sd(E),n.memoizedState=ad,y);if(!(n.mode&1))return uu(t,n,E,null);if(p.data==="$!"){if(l=p.nextSibling&&p.nextSibling.dataset,l)var P=l.dgst;return l=P,y=Error(i(419)),l=td(y,l,void 0),uu(t,n,E,l)}if(P=(E&t.childLanes)!==0,Gt||P){if(l=xt,l!==null){switch(E&-E){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=p&(l.suspendedLanes|E)?0:p,p!==0&&p!==y.retryLane&&(y.retryLane=p,ur(t,p),Tn(l,t,p,-1))}return bd(),l=td(Error(i(421))),uu(t,n,E,l)}return p.data==="$?"?(n.flags|=128,n.child=t.child,n=U1.bind(null,t),p._reactRetry=n,null):(t=y.treeContext,rn=Tr(p.nextSibling),nn=n,it=!0,Sn=null,t!==null&&(hn[mn++]=sr,hn[mn++]=or,hn[mn++]=vi,sr=t.id,or=t.overflow,vi=n),n=od(n,l.children),n.flags|=4096,n)}function Cp(t,n,a){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),Nl(t.return,n,a)}function ud(t,n,a,l,p){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:p}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=l,y.tail=a,y.tailMode=p)}function Tp(t,n,a){var l=n.pendingProps,p=l.revealOrder,y=l.tail;if(Nt(t,n,l.children,a),l=ot.current,l&2)l=l&1|2,n.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cp(t,a,n);else if(t.tag===19)Cp(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Xe(ot,l),!(n.mode&1))n.memoizedState=null;else switch(p){case"forwards":for(a=n.child,p=null;a!==null;)t=a.alternate,t!==null&&tu(t)===null&&(p=a),a=a.sibling;a=p,a===null?(p=n.child,n.child=null):(p=a.sibling,a.sibling=null),ud(n,!1,p,a,y);break;case"backwards":for(a=null,p=n.child,n.child=null;p!==null;){if(t=p.alternate,t!==null&&tu(t)===null){n.child=p;break}t=p.sibling,p.sibling=a,a=p,p=t}ud(n,!0,a,null,y);break;case"together":ud(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function lu(t,n){!(n.mode&1)&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function dr(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),bi|=n.lanes,!(a&n.childLanes))return null;if(t!==null&&n.child!==t.child)throw Error(i(153));if(n.child!==null){for(t=n.child,a=Lr(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Lr(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function T1(t,n,a){switch(n.tag){case 3:Sp(n),ma();break;case 5:Wf(n);break;case 1:qt(n.type)&&Ho(n);break;case 4:jl(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,p=n.memoizedProps.value;Xe(Zo,l._currentValue),l._currentValue=p;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(Xe(ot,ot.current&1),n.flags|=128,null):a&n.child.childLanes?Ep(t,n,a):(Xe(ot,ot.current&1),t=dr(t,n,a),t!==null?t.sibling:null);Xe(ot,ot.current&1);break;case 19:if(l=(a&n.childLanes)!==0,t.flags&128){if(l)return Tp(t,n,a);n.flags|=128}if(p=n.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Xe(ot,ot.current),l)break;return null;case 22:case 23:return n.lanes=0,$p(t,n,a)}return dr(t,n,a)}var Ip,ld,zp,Ap;Ip=function(t,n){for(var a=n.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ld=function(){},zp=function(t,n,a,l){var p=t.memoizedProps;if(p!==l){t=n.stateNode,$i(Hn.current);var y=null;switch(a){case"input":p=Ct(t,p),l=Ct(t,l),y=[];break;case"select":p=J({},p,{value:void 0}),l=J({},l,{value:void 0}),y=[];break;case"textarea":p=Mi(t,p),l=Mi(t,l),y=[];break;default:typeof p.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=Wo)}xn(a,l);var E;a=null;for(V in p)if(!l.hasOwnProperty(V)&&p.hasOwnProperty(V)&&p[V]!=null)if(V==="style"){var P=p[V];for(E in P)P.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else V!=="dangerouslySetInnerHTML"&&V!=="children"&&V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&V!=="autoFocus"&&(o.hasOwnProperty(V)?y||(y=[]):(y=y||[]).push(V,null));for(V in l){var D=l[V];if(P=p!=null?p[V]:void 0,l.hasOwnProperty(V)&&D!==P&&(D!=null||P!=null))if(V==="style")if(P){for(E in P)!P.hasOwnProperty(E)||D&&D.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in D)D.hasOwnProperty(E)&&P[E]!==D[E]&&(a||(a={}),a[E]=D[E])}else a||(y||(y=[]),y.push(V,a)),a=D;else V==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,P=P?P.__html:void 0,D!=null&&P!==D&&(y=y||[]).push(V,D)):V==="children"?typeof D!="string"&&typeof D!="number"||(y=y||[]).push(V,""+D):V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&(o.hasOwnProperty(V)?(D!=null&&V==="onScroll"&&tt("scroll",t),y||P===D||(y=[])):(y=y||[]).push(V,D))}a&&(y=y||[]).push("style",a);var V=y;(n.updateQueue=V)&&(n.flags|=4)}},Ap=function(t,n,a,l){a!==l&&(n.flags|=4)};function zs(t,n){if(!it)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function zt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(n)for(var p=t.child;p!==null;)a|=p.lanes|p.childLanes,l|=p.subtreeFlags&14680064,l|=p.flags&14680064,p.return=t,p=p.sibling;else for(p=t.child;p!==null;)a|=p.lanes|p.childLanes,l|=p.subtreeFlags,l|=p.flags,p.return=t,p=p.sibling;return t.subtreeFlags|=l,t.childLanes=a,n}function I1(t,n,a){var l=n.pendingProps;switch(Al(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(n),null;case 1:return qt(n.type)&&Vo(),zt(n),null;case 3:return l=n.stateNode,wa(),nt(Ht),nt(Tt),Vl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Qo(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Sn!==null&&(_d(Sn),Sn=null))),ld(t,n),zt(n),null;case 5:Wl(n);var p=$i(ks.current);if(a=n.type,t!==null&&n.stateNode!=null)zp(t,n,a,l,p),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(i(166));return zt(n),null}if(t=$i(Hn.current),Qo(n)){l=n.stateNode,a=n.type;var y=n.memoizedProps;switch(l[Vn]=n,l[_s]=y,t=(n.mode&1)!==0,a){case"dialog":tt("cancel",l),tt("close",l);break;case"iframe":case"object":case"embed":tt("load",l);break;case"video":case"audio":for(p=0;p<Cr.length;p++)tt(Cr[p],l);break;case"source":tt("error",l);break;case"img":case"image":case"link":tt("error",l),tt("load",l);break;case"details":tt("toggle",l);break;case"input":$n(l,y),tt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!y.multiple},tt("invalid",l);break;case"textarea":Ra(l,y),tt("invalid",l)}xn(a,y),p=null;for(var E in y)if(y.hasOwnProperty(E)){var P=y[E];E==="children"?typeof P=="string"?l.textContent!==P&&(y.suppressHydrationWarning!==!0&&jo(l.textContent,P,t),p=["children",P]):typeof P=="number"&&l.textContent!==""+P&&(y.suppressHydrationWarning!==!0&&jo(l.textContent,P,t),p=["children",""+P]):o.hasOwnProperty(E)&&P!=null&&E==="onScroll"&&tt("scroll",l)}switch(a){case"input":ln(l),Oi(l,y,!0);break;case"textarea":ln(l),Js(l);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(l.onclick=Wo)}l=p,n.updateQueue=l,l!==null&&(n.flags|=4)}else{E=p.nodeType===9?p:p.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=eo(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(a,{is:l.is}):(t=E.createElement(a),a==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,a),t[Vn]=n,t[_s]=l,Ip(t,n,!1,!1),n.stateNode=t;e:{switch(E=Ni(a,l),a){case"dialog":tt("cancel",t),tt("close",t),p=l;break;case"iframe":case"object":case"embed":tt("load",t),p=l;break;case"video":case"audio":for(p=0;p<Cr.length;p++)tt(Cr[p],t);p=l;break;case"source":tt("error",t),p=l;break;case"img":case"image":case"link":tt("error",t),tt("load",t),p=l;break;case"details":tt("toggle",t),p=l;break;case"input":$n(t,l),p=Ct(t,l),tt("invalid",t);break;case"option":p=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},p=J({},l,{value:void 0}),tt("invalid",t);break;case"textarea":Ra(t,l),p=Mi(t,l),tt("invalid",t);break;default:p=l}xn(a,p),P=p;for(y in P)if(P.hasOwnProperty(y)){var D=P[y];y==="style"?Di(t,D):y==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,D!=null&&Oa(t,D)):y==="children"?typeof D=="string"?(a!=="textarea"||D!=="")&&Xt(t,D):typeof D=="number"&&Xt(t,""+D):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(o.hasOwnProperty(y)?D!=null&&y==="onScroll"&&tt("scroll",t):D!=null&&O(t,y,D,E))}switch(a){case"input":ln(t),Oi(t,l,!1);break;case"textarea":ln(t),Js(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Fe(l.value));break;case"select":t.multiple=!!l.multiple,y=l.value,y!=null?Yn(t,!!l.multiple,y,!1):l.defaultValue!=null&&Yn(t,!!l.multiple,l.defaultValue,!0);break;default:typeof p.onClick=="function"&&(t.onclick=Wo)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return zt(n),null;case 6:if(t&&n.stateNode!=null)Ap(t,n,t.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(i(166));if(a=$i(ks.current),$i(Hn.current),Qo(n)){if(l=n.stateNode,a=n.memoizedProps,l[Vn]=n,(y=l.nodeValue!==a)&&(t=nn,t!==null))switch(t.tag){case 3:jo(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&jo(l.nodeValue,a,(t.mode&1)!==0)}y&&(n.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[Vn]=n,n.stateNode=l}return zt(n),null;case 13:if(nt(ot),l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(it&&rn!==null&&n.mode&1&&!(n.flags&128))Pf(),ma(),n.flags|=98560,y=!1;else if(y=Qo(n),l!==null&&l.dehydrated!==null){if(t===null){if(!y)throw Error(i(318));if(y=n.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(i(317));y[Vn]=n}else ma(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;zt(n),y=!1}else Sn!==null&&(_d(Sn),Sn=null),y=!0;if(!y)return n.flags&65536?n:null}return n.flags&128?(n.lanes=a,n):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(n.child.flags|=8192,n.mode&1&&(t===null||ot.current&1?wt===0&&(wt=3):bd())),n.updateQueue!==null&&(n.flags|=4),zt(n),null);case 4:return wa(),ld(t,n),t===null&&vs(n.stateNode.containerInfo),zt(n),null;case 10:return Dl(n.type._context),zt(n),null;case 17:return qt(n.type)&&Vo(),zt(n),null;case 19:if(nt(ot),y=n.memoizedState,y===null)return zt(n),null;if(l=(n.flags&128)!==0,E=y.rendering,E===null)if(l)zs(y,!1);else{if(wt!==0||t!==null&&t.flags&128)for(t=n.child;t!==null;){if(E=tu(t),E!==null){for(n.flags|=128,zs(y,!1),l=E.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=a,a=n.child;a!==null;)y=a,t=l,y.flags&=14680066,E=y.alternate,E===null?(y.childLanes=0,y.lanes=t,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=E.childLanes,y.lanes=E.lanes,y.child=E.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=E.memoizedProps,y.memoizedState=E.memoizedState,y.updateQueue=E.updateQueue,y.type=E.type,t=E.dependencies,y.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Xe(ot,ot.current&1|2),n.child}t=t.sibling}y.tail!==null&&st()>ba&&(n.flags|=128,l=!0,zs(y,!1),n.lanes=4194304)}else{if(!l)if(t=tu(E),t!==null){if(n.flags|=128,l=!0,a=t.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),zs(y,!0),y.tail===null&&y.tailMode==="hidden"&&!E.alternate&&!it)return zt(n),null}else 2*st()-y.renderingStartTime>ba&&a!==1073741824&&(n.flags|=128,l=!0,zs(y,!1),n.lanes=4194304);y.isBackwards?(E.sibling=n.child,n.child=E):(a=y.last,a!==null?a.sibling=E:n.child=E,y.last=E)}return y.tail!==null?(n=y.tail,y.rendering=n,y.tail=n.sibling,y.renderingStartTime=st(),n.sibling=null,a=ot.current,Xe(ot,l?a&1|2:a&1),n):(zt(n),null);case 22:case 23:return xd(),l=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(n.flags|=8192),l&&n.mode&1?an&1073741824&&(zt(n),n.subtreeFlags&6&&(n.flags|=8192)):zt(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function z1(t,n){switch(Al(n),n.tag){case 1:return qt(n.type)&&Vo(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return wa(),nt(Ht),nt(Tt),Vl(),t=n.flags,t&65536&&!(t&128)?(n.flags=t&-65537|128,n):null;case 5:return Wl(n),null;case 13:if(nt(ot),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(i(340));ma()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return nt(ot),null;case 4:return wa(),null;case 10:return Dl(n.type._context),null;case 22:case 23:return xd(),null;case 24:return null;default:return null}}var du=!1,At=!1,A1=typeof WeakSet=="function"?WeakSet:Set,pe=null;function $a(t,n){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){ct(t,n,l)}else a.current=null}function dd(t,n,a){try{a()}catch(l){ct(t,n,l)}}var Rp=!1;function R1(t,n){if(xl=xr,t=aa(),mi(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var p=l.anchorOffset,y=l.focusNode;l=l.focusOffset;try{a.nodeType,y.nodeType}catch{a=null;break e}var E=0,P=-1,D=-1,V=0,te=0,re=t,ee=null;t:for(;;){for(var fe;re!==a||p!==0&&re.nodeType!==3||(P=E+p),re!==y||l!==0&&re.nodeType!==3||(D=E+l),re.nodeType===3&&(E+=re.nodeValue.length),(fe=re.firstChild)!==null;)ee=re,re=fe;for(;;){if(re===t)break t;if(ee===a&&++V===p&&(P=E),ee===y&&++te===l&&(D=E),(fe=re.nextSibling)!==null)break;re=ee,ee=re.parentNode}re=fe}a=P===-1||D===-1?null:{start:P,end:D}}else a=null}a=a||{start:0,end:0}}else a=null;for(bl={focusedElem:t,selectionRange:a},xr=!1,pe=n;pe!==null;)if(n=pe,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,pe=t;else for(;pe!==null;){n=pe;try{var me=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(me!==null){var ve=me.memoizedProps,ht=me.memoizedState,j=n.stateNode,L=j.getSnapshotBeforeUpdate(n.elementType===n.type?ve:kn(n.type,ve),ht);j.__reactInternalSnapshotBeforeUpdate=L}break;case 3:var W=n.stateNode.containerInfo;W.nodeType===1?W.textContent="":W.nodeType===9&&W.documentElement&&W.removeChild(W.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(ae){ct(n,n.return,ae)}if(t=n.sibling,t!==null){t.return=n.return,pe=t;break}pe=n.return}return me=Rp,Rp=!1,me}function As(t,n,a){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var p=l=l.next;do{if((p.tag&t)===t){var y=p.destroy;p.destroy=void 0,y!==void 0&&dd(n,a,y)}p=p.next}while(p!==l)}}function cu(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==n)}}function cd(t){var n=t.ref;if(n!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof n=="function"?n(t):n.current=t}}function Op(t){var n=t.alternate;n!==null&&(t.alternate=null,Op(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[Vn],delete n[_s],delete n[Cl],delete n[h1],delete n[m1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Pp(t){return t.tag===5||t.tag===3||t.tag===4}function Mp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Pp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fd(t,n,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(t,n):a.insertBefore(t,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(t,a)):(n=a,n.appendChild(t)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wo));else if(l!==4&&(t=t.child,t!==null))for(fd(t,n,a),t=t.sibling;t!==null;)fd(t,n,a),t=t.sibling}function pd(t,n,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(pd(t,n,a),t=t.sibling;t!==null;)pd(t,n,a),t=t.sibling}var St=null,En=!1;function Pr(t,n,a){for(a=a.child;a!==null;)Bp(t,n,a),a=a.sibling}function Bp(t,n,a){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(Jt,a)}catch{}switch(a.tag){case 5:At||$a(a,n);case 6:var l=St,p=En;St=null,Pr(t,n,a),St=l,En=p,St!==null&&(En?(t=St,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):St.removeChild(a.stateNode));break;case 18:St!==null&&(En?(t=St,a=a.stateNode,t.nodeType===8?El(t.parentNode,a):t.nodeType===1&&El(t,a),_r(t)):El(St,a.stateNode));break;case 4:l=St,p=En,St=a.stateNode.containerInfo,En=!0,Pr(t,n,a),St=l,En=p;break;case 0:case 11:case 14:case 15:if(!At&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){p=l=l.next;do{var y=p,E=y.destroy;y=y.tag,E!==void 0&&(y&2||y&4)&&dd(a,n,E),p=p.next}while(p!==l)}Pr(t,n,a);break;case 1:if(!At&&($a(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(P){ct(a,n,P)}Pr(t,n,a);break;case 21:Pr(t,n,a);break;case 22:a.mode&1?(At=(l=At)||a.memoizedState!==null,Pr(t,n,a),At=l):Pr(t,n,a);break;default:Pr(t,n,a)}}function Dp(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new A1),n.forEach(function(l){var p=j1.bind(null,t,l);a.has(l)||(a.add(l),l.then(p,p))})}}function Cn(t,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var p=a[l];try{var y=t,E=n,P=E;e:for(;P!==null;){switch(P.tag){case 5:St=P.stateNode,En=!1;break e;case 3:St=P.stateNode.containerInfo,En=!0;break e;case 4:St=P.stateNode.containerInfo,En=!0;break e}P=P.return}if(St===null)throw Error(i(160));Bp(y,E,p),St=null,En=!1;var D=p.alternate;D!==null&&(D.return=null),p.return=null}catch(V){ct(p,n,V)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Np(n,t),n=n.sibling}function Np(t,n){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(n,t),Gn(t),l&4){try{As(3,t,t.return),cu(3,t)}catch(ve){ct(t,t.return,ve)}try{As(5,t,t.return)}catch(ve){ct(t,t.return,ve)}}break;case 1:Cn(n,t),Gn(t),l&512&&a!==null&&$a(a,a.return);break;case 5:if(Cn(n,t),Gn(t),l&512&&a!==null&&$a(a,a.return),t.flags&32){var p=t.stateNode;try{Xt(p,"")}catch(ve){ct(t,t.return,ve)}}if(l&4&&(p=t.stateNode,p!=null)){var y=t.memoizedProps,E=a!==null?a.memoizedProps:y,P=t.type,D=t.updateQueue;if(t.updateQueue=null,D!==null)try{P==="input"&&y.type==="radio"&&y.name!=null&&Yr(p,y),Ni(P,E);var V=Ni(P,y);for(E=0;E<D.length;E+=2){var te=D[E],re=D[E+1];te==="style"?Di(p,re):te==="dangerouslySetInnerHTML"?Oa(p,re):te==="children"?Xt(p,re):O(p,te,re,V)}switch(P){case"input":Bn(p,y);break;case"textarea":Bi(p,y);break;case"select":var ee=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!y.multiple;var fe=y.value;fe!=null?Yn(p,!!y.multiple,fe,!1):ee!==!!y.multiple&&(y.defaultValue!=null?Yn(p,!!y.multiple,y.defaultValue,!0):Yn(p,!!y.multiple,y.multiple?[]:"",!1))}p[_s]=y}catch(ve){ct(t,t.return,ve)}}break;case 6:if(Cn(n,t),Gn(t),l&4){if(t.stateNode===null)throw Error(i(162));p=t.stateNode,y=t.memoizedProps;try{p.nodeValue=y}catch(ve){ct(t,t.return,ve)}}break;case 3:if(Cn(n,t),Gn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{_r(n.containerInfo)}catch(ve){ct(t,t.return,ve)}break;case 4:Cn(n,t),Gn(t);break;case 13:Cn(n,t),Gn(t),p=t.child,p.flags&8192&&(y=p.memoizedState!==null,p.stateNode.isHidden=y,!y||p.alternate!==null&&p.alternate.memoizedState!==null||(gd=st())),l&4&&Dp(t);break;case 22:if(te=a!==null&&a.memoizedState!==null,t.mode&1?(At=(V=At)||te,Cn(n,t),At=V):Cn(n,t),Gn(t),l&8192){if(V=t.memoizedState!==null,(t.stateNode.isHidden=V)&&!te&&t.mode&1)for(pe=t,te=t.child;te!==null;){for(re=pe=te;pe!==null;){switch(ee=pe,fe=ee.child,ee.tag){case 0:case 11:case 14:case 15:As(4,ee,ee.return);break;case 1:$a(ee,ee.return);var me=ee.stateNode;if(typeof me.componentWillUnmount=="function"){l=ee,a=ee.return;try{n=l,me.props=n.memoizedProps,me.state=n.memoizedState,me.componentWillUnmount()}catch(ve){ct(l,a,ve)}}break;case 5:$a(ee,ee.return);break;case 22:if(ee.memoizedState!==null){jp(re);continue}}fe!==null?(fe.return=ee,pe=fe):jp(re)}te=te.sibling}e:for(te=null,re=t;;){if(re.tag===5){if(te===null){te=re;try{p=re.stateNode,V?(y=p.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(P=re.stateNode,D=re.memoizedProps.style,E=D!=null&&D.hasOwnProperty("display")?D.display:null,P.style.display=Ma("display",E))}catch(ve){ct(t,t.return,ve)}}}else if(re.tag===6){if(te===null)try{re.stateNode.nodeValue=V?"":re.memoizedProps}catch(ve){ct(t,t.return,ve)}}else if((re.tag!==22&&re.tag!==23||re.memoizedState===null||re===t)&&re.child!==null){re.child.return=re,re=re.child;continue}if(re===t)break e;for(;re.sibling===null;){if(re.return===null||re.return===t)break e;te===re&&(te=null),re=re.return}te===re&&(te=null),re.sibling.return=re.return,re=re.sibling}}break;case 19:Cn(n,t),Gn(t),l&4&&Dp(t);break;case 21:break;default:Cn(n,t),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{e:{for(var a=t.return;a!==null;){if(Pp(a)){var l=a;break e}a=a.return}throw Error(i(160))}switch(l.tag){case 5:var p=l.stateNode;l.flags&32&&(Xt(p,""),l.flags&=-33);var y=Mp(t);pd(t,y,p);break;case 3:case 4:var E=l.stateNode.containerInfo,P=Mp(t);fd(t,P,E);break;default:throw Error(i(161))}}catch(D){ct(t,t.return,D)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function O1(t,n,a){pe=t,Lp(t)}function Lp(t,n,a){for(var l=(t.mode&1)!==0;pe!==null;){var p=pe,y=p.child;if(p.tag===22&&l){var E=p.memoizedState!==null||du;if(!E){var P=p.alternate,D=P!==null&&P.memoizedState!==null||At;P=du;var V=At;if(du=E,(At=D)&&!V)for(pe=p;pe!==null;)E=pe,D=E.child,E.tag===22&&E.memoizedState!==null?Wp(p):D!==null?(D.return=E,pe=D):Wp(p);for(;y!==null;)pe=y,Lp(y),y=y.sibling;pe=p,du=P,At=V}Up(t)}else p.subtreeFlags&8772&&y!==null?(y.return=p,pe=y):Up(t)}}function Up(t){for(;pe!==null;){var n=pe;if(n.flags&8772){var a=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:At||cu(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!At)if(a===null)l.componentDidMount();else{var p=n.elementType===n.type?a.memoizedProps:kn(n.type,a.memoizedProps);l.componentDidUpdate(p,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var y=n.updateQueue;y!==null&&jf(n,y,l);break;case 3:var E=n.updateQueue;if(E!==null){if(a=null,n.child!==null)switch(n.child.tag){case 5:a=n.child.stateNode;break;case 1:a=n.child.stateNode}jf(n,E,a)}break;case 5:var P=n.stateNode;if(a===null&&n.flags&4){a=P;var D=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":D.autoFocus&&a.focus();break;case"img":D.src&&(a.src=D.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var V=n.alternate;if(V!==null){var te=V.memoizedState;if(te!==null){var re=te.dehydrated;re!==null&&_r(re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}At||n.flags&512&&cd(n)}catch(ee){ct(n,n.return,ee)}}if(n===t){pe=null;break}if(a=n.sibling,a!==null){a.return=n.return,pe=a;break}pe=n.return}}function jp(t){for(;pe!==null;){var n=pe;if(n===t){pe=null;break}var a=n.sibling;if(a!==null){a.return=n.return,pe=a;break}pe=n.return}}function Wp(t){for(;pe!==null;){var n=pe;try{switch(n.tag){case 0:case 11:case 15:var a=n.return;try{cu(4,n)}catch(D){ct(n,a,D)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var p=n.return;try{l.componentDidMount()}catch(D){ct(n,p,D)}}var y=n.return;try{cd(n)}catch(D){ct(n,y,D)}break;case 5:var E=n.return;try{cd(n)}catch(D){ct(n,E,D)}}}catch(D){ct(n,n.return,D)}if(n===t){pe=null;break}var P=n.sibling;if(P!==null){P.return=n.return,pe=P;break}pe=n.return}}var P1=Math.ceil,fu=R.ReactCurrentDispatcher,hd=R.ReactCurrentOwner,vn=R.ReactCurrentBatchConfig,qe=0,xt=null,gt=null,kt=0,an=0,xa=Ir(0),wt=0,Rs=null,bi=0,pu=0,md=0,Os=null,Kt=null,gd=0,ba=1/0,cr=null,hu=!1,yd=null,Mr=null,mu=!1,Br=null,gu=0,Ps=0,vd=null,yu=-1,vu=0;function Lt(){return qe&6?st():yu!==-1?yu:yu=st()}function Dr(t){return t.mode&1?qe&2&&kt!==0?kt&-kt:y1.transition!==null?(vu===0&&(vu=ho()),vu):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:$o(t.type)),t):1}function Tn(t,n,a,l){if(50<Ps)throw Ps=0,vd=null,Error(i(185));ni(t,a,l),(!(qe&2)||t!==xt)&&(t===xt&&(!(qe&2)&&(pu|=a),wt===4&&Nr(t,kt)),Qt(t,l),a===1&&qe===0&&!(n.mode&1)&&(ba=st()+500,qo&&Ar()))}function Qt(t,n){var a=t.callbackNode;nl(t,n);var l=Hi(t,t===xt?kt:0);if(l===0)a!==null&&Wa(a),t.callbackNode=null,t.callbackPriority=0;else if(n=l&-l,t.callbackPriority!==n){if(a!=null&&Wa(a),n===1)t.tag===0?g1(Vp.bind(null,t)):If(Vp.bind(null,t)),f1(function(){!(qe&6)&&Ar()}),a=null;else{switch(mo(l)){case 1:a=ei;break;case 4:a=Fi;break;case 16:a=Wt;break;case 536870912:a=po;break;default:a=Wt}a=Xp(a,Fp.bind(null,t))}t.callbackPriority=n,t.callbackNode=a}}function Fp(t,n){if(yu=-1,vu=0,qe&6)throw Error(i(327));var a=t.callbackNode;if(Sa()&&t.callbackNode!==a)return null;var l=Hi(t,t===xt?kt:0);if(l===0)return null;if(l&30||l&t.expiredLanes||n)n=wu(t,l);else{n=l;var p=qe;qe|=2;var y=qp();(xt!==t||kt!==n)&&(cr=null,ba=st()+500,ki(t,n));do try{D1();break}catch(P){Hp(t,P)}while(!0);Bl(),fu.current=y,qe=p,gt!==null?n=0:(xt=null,kt=0,n=wt)}if(n!==0){if(n===2&&(p=Ha(t),p!==0&&(l=p,n=wd(t,p))),n===1)throw a=Rs,ki(t,0),Nr(t,l),Qt(t,st()),a;if(n===6)Nr(t,l);else{if(p=t.current.alternate,!(l&30)&&!M1(p)&&(n=wu(t,l),n===2&&(y=Ha(t),y!==0&&(l=y,n=wd(t,y))),n===1))throw a=Rs,ki(t,0),Nr(t,l),Qt(t,st()),a;switch(t.finishedWork=p,t.finishedLanes=l,n){case 0:case 1:throw Error(i(345));case 2:Ei(t,Kt,cr);break;case 3:if(Nr(t,l),(l&130023424)===l&&(n=gd+500-st(),10<n)){if(Hi(t,0)!==0)break;if(p=t.suspendedLanes,(p&l)!==l){Lt(),t.pingedLanes|=t.suspendedLanes&p;break}t.timeoutHandle=kl(Ei.bind(null,t,Kt,cr),n);break}Ei(t,Kt,cr);break;case 4:if(Nr(t,l),(l&4194240)===l)break;for(n=t.eventTimes,p=-1;0<l;){var E=31-pt(l);y=1<<E,E=n[E],E>p&&(p=E),l&=~y}if(l=p,l=st()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*P1(l/1960))-l,10<l){t.timeoutHandle=kl(Ei.bind(null,t,Kt,cr),l);break}Ei(t,Kt,cr);break;case 5:Ei(t,Kt,cr);break;default:throw Error(i(329))}}}return Qt(t,st()),t.callbackNode===a?Fp.bind(null,t):null}function wd(t,n){var a=Os;return t.current.memoizedState.isDehydrated&&(ki(t,n).flags|=256),t=wu(t,n),t!==2&&(n=Kt,Kt=a,n!==null&&_d(n)),t}function _d(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function M1(t){for(var n=t;;){if(n.flags&16384){var a=n.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var p=a[l],y=p.getSnapshot;p=p.value;try{if(!Dt(y(),p))return!1}catch{return!1}}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Nr(t,n){for(n&=~md,n&=~pu,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var a=31-pt(n),l=1<<a;t[a]=-1,n&=~l}}function Vp(t){if(qe&6)throw Error(i(327));Sa();var n=Hi(t,0);if(!(n&1))return Qt(t,st()),null;var a=wu(t,n);if(t.tag!==0&&a===2){var l=Ha(t);l!==0&&(n=l,a=wd(t,l))}if(a===1)throw a=Rs,ki(t,0),Nr(t,n),Qt(t,st()),a;if(a===6)throw Error(i(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,Ei(t,Kt,cr),Qt(t,st()),null}function $d(t,n){var a=qe;qe|=1;try{return t(n)}finally{qe=a,qe===0&&(ba=st()+500,qo&&Ar())}}function Si(t){Br!==null&&Br.tag===0&&!(qe&6)&&Sa();var n=qe;qe|=1;var a=vn.transition,l=Ke;try{if(vn.transition=null,Ke=1,t)return t()}finally{Ke=l,vn.transition=a,qe=n,!(qe&6)&&Ar()}}function xd(){an=xa.current,nt(xa)}function ki(t,n){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,c1(a)),gt!==null)for(a=gt.return;a!==null;){var l=a;switch(Al(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Vo();break;case 3:wa(),nt(Ht),nt(Tt),Vl();break;case 5:Wl(l);break;case 4:wa();break;case 13:nt(ot);break;case 19:nt(ot);break;case 10:Dl(l.type._context);break;case 22:case 23:xd()}a=a.return}if(xt=t,gt=t=Lr(t.current,null),kt=an=n,wt=0,Rs=null,md=pu=bi=0,Kt=Os=null,_i!==null){for(n=0;n<_i.length;n++)if(a=_i[n],l=a.interleaved,l!==null){a.interleaved=null;var p=l.next,y=a.pending;if(y!==null){var E=y.next;y.next=p,l.next=E}a.pending=l}_i=null}return t}function Hp(t,n){do{var a=gt;try{if(Bl(),nu.current=su,ru){for(var l=ut.memoizedState;l!==null;){var p=l.queue;p!==null&&(p.pending=null),l=l.next}ru=!1}if(xi=0,$t=vt=ut=null,Es=!1,Cs=0,hd.current=null,a===null||a.return===null){wt=1,Rs=n,gt=null;break}e:{var y=t,E=a.return,P=a,D=n;if(n=kt,P.flags|=32768,D!==null&&typeof D=="object"&&typeof D.then=="function"){var V=D,te=P,re=te.tag;if(!(te.mode&1)&&(re===0||re===11||re===15)){var ee=te.alternate;ee?(te.updateQueue=ee.updateQueue,te.memoizedState=ee.memoizedState,te.lanes=ee.lanes):(te.updateQueue=null,te.memoizedState=null)}var fe=gp(E);if(fe!==null){fe.flags&=-257,yp(fe,E,P,y,n),fe.mode&1&&mp(y,V,n),n=fe,D=V;var me=n.updateQueue;if(me===null){var ve=new Set;ve.add(D),n.updateQueue=ve}else me.add(D);break e}else{if(!(n&1)){mp(y,V,n),bd();break e}D=Error(i(426))}}else if(it&&P.mode&1){var ht=gp(E);if(ht!==null){!(ht.flags&65536)&&(ht.flags|=256),yp(ht,E,P,y,n),Pl(_a(D,P));break e}}y=D=_a(D,P),wt!==4&&(wt=2),Os===null?Os=[y]:Os.push(y),y=E;do{switch(y.tag){case 3:y.flags|=65536,n&=-n,y.lanes|=n;var j=pp(y,D,n);Uf(y,j);break e;case 1:P=D;var L=y.type,W=y.stateNode;if(!(y.flags&128)&&(typeof L.getDerivedStateFromError=="function"||W!==null&&typeof W.componentDidCatch=="function"&&(Mr===null||!Mr.has(W)))){y.flags|=65536,n&=-n,y.lanes|=n;var ae=hp(y,P,n);Uf(y,ae);break e}}y=y.return}while(y!==null)}Kp(a)}catch(_e){n=_e,gt===a&&a!==null&&(gt=a=a.return);continue}break}while(!0)}function qp(){var t=fu.current;return fu.current=su,t===null?su:t}function bd(){(wt===0||wt===3||wt===2)&&(wt=4),xt===null||!(bi&268435455)&&!(pu&268435455)||Nr(xt,kt)}function wu(t,n){var a=qe;qe|=2;var l=qp();(xt!==t||kt!==n)&&(cr=null,ki(t,n));do try{B1();break}catch(p){Hp(t,p)}while(!0);if(Bl(),qe=a,fu.current=l,gt!==null)throw Error(i(261));return xt=null,kt=0,wt}function B1(){for(;gt!==null;)Gp(gt)}function D1(){for(;gt!==null&&!co();)Gp(gt)}function Gp(t){var n=Zp(t.alternate,t,an);t.memoizedProps=t.pendingProps,n===null?Kp(t):gt=n,hd.current=null}function Kp(t){var n=t;do{var a=n.alternate;if(t=n.return,n.flags&32768){if(a=z1(a,n),a!==null){a.flags&=32767,gt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{wt=6,gt=null;return}}else if(a=I1(a,n,an),a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);wt===0&&(wt=5)}function Ei(t,n,a){var l=Ke,p=vn.transition;try{vn.transition=null,Ke=1,N1(t,n,a,l)}finally{vn.transition=p,Ke=l}return null}function N1(t,n,a,l){do Sa();while(Br!==null);if(qe&6)throw Error(i(327));a=t.finishedWork;var p=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(i(177));t.callbackNode=null,t.callbackPriority=0;var y=a.lanes|a.childLanes;if(rl(t,y),t===xt&&(gt=xt=null,kt=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||mu||(mu=!0,Xp(Wt,function(){return Sa(),null})),y=(a.flags&15990)!==0,a.subtreeFlags&15990||y){y=vn.transition,vn.transition=null;var E=Ke;Ke=1;var P=qe;qe|=4,hd.current=null,R1(t,a),Np(a,t),Do(bl),xr=!!xl,bl=xl=null,t.current=a,O1(a),Un(),qe=P,Ke=E,vn.transition=y}else t.current=a;if(mu&&(mu=!1,Br=t,gu=p),y=t.pendingLanes,y===0&&(Mr=null),Fa(a.stateNode),Qt(t,st()),n!==null)for(l=t.onRecoverableError,a=0;a<n.length;a++)p=n[a],l(p.value,{componentStack:p.stack,digest:p.digest});if(hu)throw hu=!1,t=yd,yd=null,t;return gu&1&&t.tag!==0&&Sa(),y=t.pendingLanes,y&1?t===vd?Ps++:(Ps=0,vd=t):Ps=0,Ar(),null}function Sa(){if(Br!==null){var t=mo(gu),n=vn.transition,a=Ke;try{if(vn.transition=null,Ke=16>t?16:t,Br===null)var l=!1;else{if(t=Br,Br=null,gu=0,qe&6)throw Error(i(331));var p=qe;for(qe|=4,pe=t.current;pe!==null;){var y=pe,E=y.child;if(pe.flags&16){var P=y.deletions;if(P!==null){for(var D=0;D<P.length;D++){var V=P[D];for(pe=V;pe!==null;){var te=pe;switch(te.tag){case 0:case 11:case 15:As(8,te,y)}var re=te.child;if(re!==null)re.return=te,pe=re;else for(;pe!==null;){te=pe;var ee=te.sibling,fe=te.return;if(Op(te),te===V){pe=null;break}if(ee!==null){ee.return=fe,pe=ee;break}pe=fe}}}var me=y.alternate;if(me!==null){var ve=me.child;if(ve!==null){me.child=null;do{var ht=ve.sibling;ve.sibling=null,ve=ht}while(ve!==null)}}pe=y}}if(y.subtreeFlags&2064&&E!==null)E.return=y,pe=E;else e:for(;pe!==null;){if(y=pe,y.flags&2048)switch(y.tag){case 0:case 11:case 15:As(9,y,y.return)}var j=y.sibling;if(j!==null){j.return=y.return,pe=j;break e}pe=y.return}}var L=t.current;for(pe=L;pe!==null;){E=pe;var W=E.child;if(E.subtreeFlags&2064&&W!==null)W.return=E,pe=W;else e:for(E=L;pe!==null;){if(P=pe,P.flags&2048)try{switch(P.tag){case 0:case 11:case 15:cu(9,P)}}catch(_e){ct(P,P.return,_e)}if(P===E){pe=null;break e}var ae=P.sibling;if(ae!==null){ae.return=P.return,pe=ae;break e}pe=P.return}}if(qe=p,Ar(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(Jt,t)}catch{}l=!0}return l}finally{Ke=a,vn.transition=n}}return!1}function Qp(t,n,a){n=_a(a,n),n=pp(t,n,1),t=Or(t,n,1),n=Lt(),t!==null&&(ni(t,1,n),Qt(t,n))}function ct(t,n,a){if(t.tag===3)Qp(t,t,a);else for(;n!==null;){if(n.tag===3){Qp(n,t,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Mr===null||!Mr.has(l))){t=_a(a,t),t=hp(n,t,1),n=Or(n,t,1),t=Lt(),n!==null&&(ni(n,1,t),Qt(n,t));break}}n=n.return}}function L1(t,n,a){var l=t.pingCache;l!==null&&l.delete(n),n=Lt(),t.pingedLanes|=t.suspendedLanes&a,xt===t&&(kt&a)===a&&(wt===4||wt===3&&(kt&130023424)===kt&&500>st()-gd?ki(t,0):md|=a),Qt(t,n)}function Yp(t,n){n===0&&(t.mode&1?(n=Vi,Vi<<=1,!(Vi&130023424)&&(Vi=4194304)):n=1);var a=Lt();t=ur(t,n),t!==null&&(ni(t,n,a),Qt(t,a))}function U1(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Yp(t,a)}function j1(t,n){var a=0;switch(t.tag){case 13:var l=t.stateNode,p=t.memoizedState;p!==null&&(a=p.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(i(314))}l!==null&&l.delete(n),Yp(t,a)}var Zp;Zp=function(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps||Ht.current)Gt=!0;else{if(!(t.lanes&a)&&!(n.flags&128))return Gt=!1,T1(t,n,a);Gt=!!(t.flags&131072)}else Gt=!1,it&&n.flags&1048576&&zf(n,Ko,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;lu(t,n),t=n.pendingProps;var p=fa(n,Tt.current);va(n,a),p=Gl(null,n,l,t,p,a);var y=Kl();return n.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,qt(l)?(y=!0,Ho(n)):y=!1,n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Ul(n),p.updater=ou,n.stateNode=p,p._reactInternals=n,ed(n,l,t,a),n=id(null,n,l,!0,y,a)):(n.tag=0,it&&y&&zl(n),Nt(null,n,p,a),n=n.child),n;case 16:l=n.elementType;e:{switch(lu(t,n),t=n.pendingProps,p=l._init,l=p(l._payload),n.type=l,p=n.tag=F1(l),t=kn(l,t),p){case 0:n=rd(null,n,l,t,a);break e;case 1:n=bp(null,n,l,t,a);break e;case 11:n=vp(null,n,l,t,a);break e;case 14:n=wp(null,n,l,kn(l.type,t),a);break e}throw Error(i(306,l,""))}return n;case 0:return l=n.type,p=n.pendingProps,p=n.elementType===l?p:kn(l,p),rd(t,n,l,p,a);case 1:return l=n.type,p=n.pendingProps,p=n.elementType===l?p:kn(l,p),bp(t,n,l,p,a);case 3:e:{if(Sp(n),t===null)throw Error(i(387));l=n.pendingProps,y=n.memoizedState,p=y.element,Lf(t,n),eu(n,l,null,a);var E=n.memoizedState;if(l=E.element,y.isDehydrated)if(y={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},n.updateQueue.baseState=y,n.memoizedState=y,n.flags&256){p=_a(Error(i(423)),n),n=kp(t,n,l,a,p);break e}else if(l!==p){p=_a(Error(i(424)),n),n=kp(t,n,l,a,p);break e}else for(rn=Tr(n.stateNode.containerInfo.firstChild),nn=n,it=!0,Sn=null,a=Df(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ma(),l===p){n=dr(t,n,a);break e}Nt(t,n,l,a)}n=n.child}return n;case 5:return Wf(n),t===null&&Ol(n),l=n.type,p=n.pendingProps,y=t!==null?t.memoizedProps:null,E=p.children,Sl(l,p)?E=null:y!==null&&Sl(l,y)&&(n.flags|=32),xp(t,n),Nt(t,n,E,a),n.child;case 6:return t===null&&Ol(n),null;case 13:return Ep(t,n,a);case 4:return jl(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=ga(n,null,l,a):Nt(t,n,l,a),n.child;case 11:return l=n.type,p=n.pendingProps,p=n.elementType===l?p:kn(l,p),vp(t,n,l,p,a);case 7:return Nt(t,n,n.pendingProps,a),n.child;case 8:return Nt(t,n,n.pendingProps.children,a),n.child;case 12:return Nt(t,n,n.pendingProps.children,a),n.child;case 10:e:{if(l=n.type._context,p=n.pendingProps,y=n.memoizedProps,E=p.value,Xe(Zo,l._currentValue),l._currentValue=E,y!==null)if(Dt(y.value,E)){if(y.children===p.children&&!Ht.current){n=dr(t,n,a);break e}}else for(y=n.child,y!==null&&(y.return=n);y!==null;){var P=y.dependencies;if(P!==null){E=y.child;for(var D=P.firstContext;D!==null;){if(D.context===l){if(y.tag===1){D=lr(-1,a&-a),D.tag=2;var V=y.updateQueue;if(V!==null){V=V.shared;var te=V.pending;te===null?D.next=D:(D.next=te.next,te.next=D),V.pending=D}}y.lanes|=a,D=y.alternate,D!==null&&(D.lanes|=a),Nl(y.return,a,n),P.lanes|=a;break}D=D.next}}else if(y.tag===10)E=y.type===n.type?null:y.child;else if(y.tag===18){if(E=y.return,E===null)throw Error(i(341));E.lanes|=a,P=E.alternate,P!==null&&(P.lanes|=a),Nl(E,a,n),E=y.sibling}else E=y.child;if(E!==null)E.return=y;else for(E=y;E!==null;){if(E===n){E=null;break}if(y=E.sibling,y!==null){y.return=E.return,E=y;break}E=E.return}y=E}Nt(t,n,p.children,a),n=n.child}return n;case 9:return p=n.type,l=n.pendingProps.children,va(n,a),p=gn(p),l=l(p),n.flags|=1,Nt(t,n,l,a),n.child;case 14:return l=n.type,p=kn(l,n.pendingProps),p=kn(l.type,p),wp(t,n,l,p,a);case 15:return _p(t,n,n.type,n.pendingProps,a);case 17:return l=n.type,p=n.pendingProps,p=n.elementType===l?p:kn(l,p),lu(t,n),n.tag=1,qt(l)?(t=!0,Ho(n)):t=!1,va(n,a),cp(n,l,p),ed(n,l,p,a),id(null,n,l,!0,t,a);case 19:return Tp(t,n,a);case 22:return $p(t,n,a)}throw Error(i(156,n.tag))};function Xp(t,n){return ja(t,n)}function W1(t,n,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,n,a,l){return new W1(t,n,a,l)}function Sd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function F1(t){if(typeof t=="function")return Sd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xe)return 11;if(t===De)return 14}return 2}function Lr(t,n){var a=t.alternate;return a===null?(a=wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function _u(t,n,a,l,p,y){var E=2;if(l=t,typeof t=="function")Sd(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case U:return Ci(a.children,p,y,n);case Q:E=8,p|=8;break;case se:return t=wn(12,a,n,p|2),t.elementType=se,t.lanes=y,t;case de:return t=wn(13,a,n,p),t.elementType=de,t.lanes=y,t;case Re:return t=wn(19,a,n,p),t.elementType=Re,t.lanes=y,t;case ke:return $u(a,p,y,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ue:E=10;break e;case Se:E=9;break e;case xe:E=11;break e;case De:E=14;break e;case be:E=16,l=null;break e}throw Error(i(130,t==null?t:typeof t,""))}return n=wn(E,a,n,p),n.elementType=t,n.type=l,n.lanes=y,n}function Ci(t,n,a,l){return t=wn(7,t,l,n),t.lanes=a,t}function $u(t,n,a,l){return t=wn(22,t,l,n),t.elementType=ke,t.lanes=a,t.stateNode={isHidden:!1},t}function kd(t,n,a){return t=wn(6,t,null,n),t.lanes=a,t}function Ed(t,n,a){return n=wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function V1(t,n,a,l,p){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qi(0),this.expirationTimes=qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qi(0),this.identifierPrefix=l,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Cd(t,n,a,l,p,y,E,P,D){return t=new V1(t,n,a,P,D),n===1?(n=1,y===!0&&(n|=8)):n=0,y=wn(3,null,null,n),t.current=y,y.stateNode=t,y.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ul(y),t}function H1(t,n,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:t,containerInfo:n,implementation:a}}function Jp(t){if(!t)return zr;t=t._reactInternals;e:{if(Ln(t)!==t||t.tag!==1)throw Error(i(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(qt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(t.tag===1){var a=t.type;if(qt(a))return Cf(t,a,n)}return n}function eh(t,n,a,l,p,y,E,P,D){return t=Cd(a,l,!0,t,p,y,E,P,D),t.context=Jp(null),a=t.current,l=Lt(),p=Dr(a),y=lr(l,p),y.callback=n??null,Or(a,y,p),t.current.lanes=p,ni(t,p,l),Qt(t,l),t}function xu(t,n,a,l){var p=n.current,y=Lt(),E=Dr(p);return a=Jp(a),n.context===null?n.context=a:n.pendingContext=a,n=lr(y,E),n.payload={element:t},l=l===void 0?null:l,l!==null&&(n.callback=l),t=Or(p,n,E),t!==null&&(Tn(t,p,E,y),Jo(t,p,E)),E}function bu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function th(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Td(t,n){th(t,n),(t=t.alternate)&&th(t,n)}var nh=typeof reportError=="function"?reportError:function(t){console.error(t)};function Id(t){this._internalRoot=t}Su.prototype.render=Id.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(i(409));xu(t,n,null,null)},Su.prototype.unmount=Id.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Si(function(){xu(null,t,null,null)}),n[ir]=null}};function Su(t){this._internalRoot=t}Su.prototype.unstable_scheduleHydration=function(t){if(t){var n=vo();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Wn.length&&n!==0&&n<Wn[a].priority;a++);Wn.splice(a,0,t),a===0&&bn(t)}};function zd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ku(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rh(){}function q1(t,n,a,l,p){if(p){if(typeof l=="function"){var y=l;l=function(){var V=bu(E);y.call(V)}}var E=eh(n,l,t,0,null,!1,!1,"",rh);return t._reactRootContainer=E,t[ir]=E.current,vs(t.nodeType===8?t.parentNode:t),Si(),E}for(;p=t.lastChild;)t.removeChild(p);if(typeof l=="function"){var P=l;l=function(){var V=bu(D);P.call(V)}}var D=Cd(t,0,!1,null,null,!1,!1,"",rh);return t._reactRootContainer=D,t[ir]=D.current,vs(t.nodeType===8?t.parentNode:t),Si(function(){xu(n,D,a,l)}),D}function Eu(t,n,a,l,p){var y=a._reactRootContainer;if(y){var E=y;if(typeof p=="function"){var P=p;p=function(){var D=bu(E);P.call(D)}}xu(n,E,t,p)}else E=q1(a,n,t,p,l);return bu(E)}go=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var a=ti(n.pendingLanes);a!==0&&(qa(n,a|1),Qt(n,st()),!(qe&6)&&(ba=st()+500,Ar()))}break;case 13:Si(function(){var l=ur(t,1);if(l!==null){var p=Lt();Tn(l,t,1,p)}}),Td(t,1)}},Ga=function(t){if(t.tag===13){var n=ur(t,134217728);if(n!==null){var a=Lt();Tn(n,t,134217728,a)}Td(t,134217728)}},yo=function(t){if(t.tag===13){var n=Dr(t),a=ur(t,n);if(a!==null){var l=Lt();Tn(a,t,n,l)}Td(t,n)}},vo=function(){return Ke},wo=function(t,n){var a=Ke;try{return Ke=t,n()}finally{Ke=a}},Ui=function(t,n,a){switch(n){case"input":if(Bn(t,a),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==t&&l.form===t.form){var p=Fo(l);if(!p)throw Error(i(90));at(l),Bn(l,p)}}}break;case"textarea":Bi(t,a);break;case"select":n=a.value,n!=null&&Yn(t,!!a.multiple,n,!1)}},ro=$d,io=Si;var G1={usingClientEntryPoint:!1,Events:[$s,da,Fo,to,no,$d]},Ms={findFiberByHostInstance:gi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},K1={bundleType:Ms.bundleType,version:Ms.version,rendererPackageName:Ms.rendererPackageName,rendererConfig:Ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=La(t),t===null?null:t.stateNode},findFiberByHostInstance:Ms.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cu.isDisabled&&Cu.supportsFiber)try{Jt=Cu.inject(K1),cn=Cu}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G1,Yt.createPortal=function(t,n){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zd(n))throw Error(i(200));return H1(t,n,null,a)},Yt.createRoot=function(t,n){if(!zd(t))throw Error(i(299));var a=!1,l="",p=nh;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),n=Cd(t,1,!1,null,null,a,!1,l,p),t[ir]=n.current,vs(t.nodeType===8?t.parentNode:t),new Id(n)},Yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=La(n),t=t===null?null:t.stateNode,t},Yt.flushSync=function(t){return Si(t)},Yt.hydrate=function(t,n,a){if(!ku(n))throw Error(i(200));return Eu(null,t,n,!0,a)},Yt.hydrateRoot=function(t,n,a){if(!zd(t))throw Error(i(405));var l=a!=null&&a.hydratedSources||null,p=!1,y="",E=nh;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(y=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),n=eh(n,null,t,1,a??null,p,!1,y,E),t[ir]=n.current,vs(t),l)for(t=0;t<l.length;t++)a=l[t],p=a._getVersion,p=p(a._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[a,p]:n.mutableSourceEagerHydrationData.push(a,p);return new Su(n)},Yt.render=function(t,n,a){if(!ku(n))throw Error(i(200));return Eu(null,t,n,!1,a)},Yt.unmountComponentAtNode=function(t){if(!ku(t))throw Error(i(40));return t._reactRootContainer?(Si(function(){Eu(null,null,t,!1,function(){t._reactRootContainer=null,t[ir]=null})}),!0):!1},Yt.unstable_batchedUpdates=$d,Yt.unstable_renderSubtreeIntoContainer=function(t,n,a,l){if(!ku(a))throw Error(i(200));if(t==null||t._reactInternals===void 0)throw Error(i(38));return Eu(t,n,a,!1,l)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var ch;function r_(){if(ch)return Od.exports;ch=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(r){console.error(r)}}return e(),Od.exports=n_(),Od.exports}var fh;function i_(){if(fh)return Tu;fh=1;var e=r_();return Tu.createRoot=e.createRoot,Tu.hydrateRoot=e.hydrateRoot,Tu}var a_=i_();const s_=Py(a_);/*!
 * ONNX Runtime Web v1.20.1
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var jc=Object.defineProperty,o_=Object.getOwnPropertyDescriptor,u_=Object.getOwnPropertyNames,l_=Object.prototype.hasOwnProperty,d_=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,i)=>(typeof require<"u"?require:r)[i]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),ne=(e,r)=>()=>(e&&(r=e(e=0)),r),Xs=(e,r)=>{for(var i in r)jc(e,i,{get:r[i],enumerable:!0})},c_=(e,r,i,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of u_(r))!l_.call(e,o)&&o!==i&&jc(e,o,{get:()=>r[o],enumerable:!(s=o_(r,o))||s.enumerable});return e},Fu=e=>c_(jc({},"__esModule",{value:!0}),e),Ds,jr,Ca,ph,Wc,Fc=ne(()=>{Ds=new Map,jr=[],Ca=(e,r,i)=>{if(r&&typeof r.init=="function"&&typeof r.createInferenceSessionHandler=="function"){let s=Ds.get(e);if(s===void 0)Ds.set(e,{backend:r,priority:i});else{if(s.priority>i)return;if(s.priority===i&&s.backend!==r)throw new Error(`cannot register backend "${e}" using priority ${i}`)}if(i>=0){let o=jr.indexOf(e);o!==-1&&jr.splice(o,1);for(let d=0;d<jr.length;d++)if(Ds.get(jr[d]).priority<=i){jr.splice(d,0,e);return}jr.push(e)}return}throw new TypeError("not a valid backend")},ph=async e=>{let r=Ds.get(e);if(!r)return"backend not found.";if(r.initialized)return r.backend;if(r.aborted)return r.error;{let i=!!r.initPromise;try{return i||(r.initPromise=r.backend.init(e)),await r.initPromise,r.initialized=!0,r.backend}catch(s){return i||(r.error=`${s}`,r.aborted=!0),r.error}finally{delete r.initPromise}}},Wc=async e=>{let r=e.executionProviders||[],i=r.map(m=>typeof m=="string"?m:m.name),s=i.length===0?jr:i,o,d=[],u=new Set;for(let m of s){let g=await ph(m);typeof g=="string"?d.push({name:m,err:g}):(o||(o=g),o===g&&u.add(m))}if(!o)throw new Error(`no available backend found. ERR: ${d.map(m=>`[${m.name}] ${m.err}`).join(", ")}`);for(let{name:m,err:g}of d)i.includes(m)&&console.warn(`removing requested execution provider "${m}" from session options because it is not available: ${g}`);let h=r.filter(m=>u.has(typeof m=="string"?m:m.name));return[o,new Proxy(e,{get:(m,g)=>g==="executionProviders"?h:Reflect.get(m,g)})]}}),f_=ne(()=>{Fc()}),My,p_=ne(()=>{My="1.20.1"}),Bd,_n,By=ne(()=>{p_(),Bd="warning",_n={wasm:{},webgl:{},webgpu:{},versions:{common:My},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Bd=e}},get logLevel(){return Bd}},Object.defineProperty(_n,"logLevel",{enumerable:!0})}),Je,h_=ne(()=>{By(),Je=_n}),Dy,Ny,m_=ne(()=>{Dy=(e,r)=>{let i=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);i.width=e.dims[3],i.height=e.dims[2];let s=i.getContext("2d");if(s!=null){let o,d;(r==null?void 0:r.tensorLayout)!==void 0&&r.tensorLayout==="NHWC"?(o=e.dims[2],d=e.dims[3]):(o=e.dims[3],d=e.dims[2]);let u=(r==null?void 0:r.format)!==void 0?r.format:"RGB",h=r==null?void 0:r.norm,m,g;h===void 0||h.mean===void 0?m=[255,255,255,255]:typeof h.mean=="number"?m=[h.mean,h.mean,h.mean,h.mean]:(m=[h.mean[0],h.mean[1],h.mean[2],0],h.mean[3]!==void 0&&(m[3]=h.mean[3])),h===void 0||h.bias===void 0?g=[0,0,0,0]:typeof h.bias=="number"?g=[h.bias,h.bias,h.bias,h.bias]:(g=[h.bias[0],h.bias[1],h.bias[2],0],h.bias[3]!==void 0&&(g[3]=h.bias[3]));let _=d*o,w=0,f=_,b=_*2,S=-1;u==="RGBA"?(w=0,f=_,b=_*2,S=_*3):u==="RGB"?(w=0,f=_,b=_*2):u==="RBG"&&(w=0,b=_,f=_*2);for(let x=0;x<d;x++)for(let T=0;T<o;T++){let z=(e.data[w++]-g[0])*m[0],C=(e.data[f++]-g[1])*m[1],O=(e.data[b++]-g[2])*m[2],R=S===-1?255:(e.data[S++]-g[3])*m[3];s.fillStyle="rgba("+z+","+C+","+O+","+R+")",s.fillRect(T,x,1,1)}if("toDataURL"in i)return i.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Ny=(e,r)=>{let i=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),s;if(i!=null){let o,d,u;(r==null?void 0:r.tensorLayout)!==void 0&&r.tensorLayout==="NHWC"?(o=e.dims[2],d=e.dims[1],u=e.dims[3]):(o=e.dims[3],d=e.dims[2],u=e.dims[1]);let h=r!==void 0&&r.format!==void 0?r.format:"RGB",m=r==null?void 0:r.norm,g,_;m===void 0||m.mean===void 0?g=[255,255,255,255]:typeof m.mean=="number"?g=[m.mean,m.mean,m.mean,m.mean]:(g=[m.mean[0],m.mean[1],m.mean[2],255],m.mean[3]!==void 0&&(g[3]=m.mean[3])),m===void 0||m.bias===void 0?_=[0,0,0,0]:typeof m.bias=="number"?_=[m.bias,m.bias,m.bias,m.bias]:(_=[m.bias[0],m.bias[1],m.bias[2],0],m.bias[3]!==void 0&&(_[3]=m.bias[3]));let w=d*o;if(r!==void 0&&(r.format!==void 0&&u===4&&r.format!=="RGBA"||u===3&&r.format!=="RGB"&&r.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let f=4,b=0,S=1,x=2,T=3,z=0,C=w,O=w*2,R=-1;h==="RGBA"?(z=0,C=w,O=w*2,R=w*3):h==="RGB"?(z=0,C=w,O=w*2):h==="RBG"&&(z=0,O=w,C=w*2),s=i.createImageData(o,d);for(let M=0;M<d*o;b+=f,S+=f,x+=f,T+=f,M++)s.data[b]=(e.data[z++]-_[0])*g[0],s.data[S]=(e.data[C++]-_[1])*g[1],s.data[x]=(e.data[O++]-_[2])*g[2],s.data[T]=R===-1?255:(e.data[R++]-_[3])*g[3]}else throw new Error("Can not access image data");return s}}),Iu,Ly,Uy,jy,Wy,Fy,g_=ne(()=>{Vc(),Iu=(e,r)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(r.height===void 0||r.width===void 0)throw new Error("Image height and width must be defined");if(r.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:i,width:s}=r,o=r.norm??{mean:255,bias:0},d,u;typeof o.mean=="number"?d=[o.mean,o.mean,o.mean,o.mean]:d=[o.mean[0],o.mean[1],o.mean[2],o.mean[3]??255],typeof o.bias=="number"?u=[o.bias,o.bias,o.bias,o.bias]:u=[o.bias[0],o.bias[1],o.bias[2],o.bias[3]??0];let h=r.format!==void 0?r.format:"RGBA",m=r.tensorFormat!==void 0&&r.tensorFormat!==void 0?r.tensorFormat:"RGB",g=i*s,_=m==="RGBA"?new Float32Array(g*4):new Float32Array(g*3),w=4,f=0,b=1,S=2,x=3,T=0,z=g,C=g*2,O=-1;h==="RGB"&&(w=3,f=0,b=1,S=2,x=-1),m==="RGBA"?O=g*3:m==="RBG"?(T=0,C=g,z=g*2):m==="BGR"&&(C=0,z=g,T=g*2);for(let R=0;R<g;R++,f+=w,S+=w,b+=w,x+=w)_[T++]=(e[f]+u[0])/d[0],_[z++]=(e[b]+u[1])/d[1],_[C++]=(e[S]+u[2])/d[2],O!==-1&&x!==-1&&(_[O++]=(e[x]+u[3])/d[3]);return m==="RGBA"?new on("float32",_,[1,4,i,s]):new on("float32",_,[1,3,i,s])},Ly=async(e,r)=>{let i=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,s=typeof ImageData<"u"&&e instanceof ImageData,o=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,d=typeof e=="string",u,h=r??{},m=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},g=_=>typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||_ instanceof OffscreenCanvas?_.getContext("2d"):null;if(i){let _=m();_.width=e.width,_.height=e.height;let w=g(_);if(w!=null){let f=e.height,b=e.width;if(r!==void 0&&r.resizedHeight!==void 0&&r.resizedWidth!==void 0&&(f=r.resizedHeight,b=r.resizedWidth),r!==void 0){if(h=r,r.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");h.tensorFormat="RGBA",h.height=f,h.width=b}else h.tensorFormat="RGBA",h.height=f,h.width=b;w.drawImage(e,0,0),u=w.getImageData(0,0,b,f).data}else throw new Error("Can not access image data")}else if(s){let _,w;if(r!==void 0&&r.resizedWidth!==void 0&&r.resizedHeight!==void 0?(_=r.resizedHeight,w=r.resizedWidth):(_=e.height,w=e.width),r!==void 0&&(h=r),h.format="RGBA",h.height=_,h.width=w,r!==void 0){let f=m();f.width=w,f.height=_;let b=g(f);if(b!=null)b.putImageData(e,0,0),u=b.getImageData(0,0,w,_).data;else throw new Error("Can not access image data")}else u=e.data}else if(o){if(r===void 0)throw new Error("Please provide image config with format for Imagebitmap");let _=m();_.width=e.width,_.height=e.height;let w=g(_);if(w!=null){let f=e.height,b=e.width;return w.drawImage(e,0,0,b,f),u=w.getImageData(0,0,b,f).data,h.height=f,h.width=b,Iu(u,h)}else throw new Error("Can not access image data")}else{if(d)return new Promise((_,w)=>{let f=m(),b=g(f);if(!e||!b)return w();let S=new Image;S.crossOrigin="Anonymous",S.src=e,S.onload=()=>{f.width=S.width,f.height=S.height,b.drawImage(S,0,0,f.width,f.height);let x=b.getImageData(0,0,f.width,f.height);h.height=f.height,h.width=f.width,_(Iu(x.data,h))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(u!==void 0)return Iu(u,h);throw new Error("Input data provided is not supported - aborted tensor creation")},Uy=(e,r)=>{let{width:i,height:s,download:o,dispose:d}=r,u=[1,s,i,4];return new on({location:"texture",type:"float32",texture:e,dims:u,download:o,dispose:d})},jy=(e,r)=>{let{dataType:i,dims:s,download:o,dispose:d}=r;return new on({location:"gpu-buffer",type:i??"float32",gpuBuffer:e,dims:s,download:o,dispose:d})},Wy=(e,r)=>{let{dataType:i,dims:s,download:o,dispose:d}=r;return new on({location:"ml-tensor",type:i??"float32",mlTensor:e,dims:s,download:o,dispose:d})},Fy=(e,r,i)=>new on({location:"cpu-pinned",type:e,data:r,dims:i??[r.length]})}),zi,Hs,Dd,Vy,y_=ne(()=>{zi=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Hs=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Dd=!1,Vy=()=>{if(!Dd){Dd=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,r=typeof BigUint64Array<"u"&&BigUint64Array.from,i=typeof Float16Array<"u"&&Float16Array.from;e&&(zi.set("int64",BigInt64Array),Hs.set(BigInt64Array,"int64")),r&&(zi.set("uint64",BigUint64Array),Hs.set(BigUint64Array,"uint64")),i?(zi.set("float16",Float16Array),Hs.set(Float16Array,"float16")):zi.set("float16",Uint16Array)}}}),Hy,qy,v_=ne(()=>{Vc(),Hy=e=>{let r=1;for(let i=0;i<e.length;i++){let s=e[i];if(typeof s!="number"||!Number.isSafeInteger(s))throw new TypeError(`dims[${i}] must be an integer, got: ${s}`);if(s<0)throw new RangeError(`dims[${i}] must be a non-negative integer, got: ${s}`);r*=s}return r},qy=(e,r)=>{switch(e.location){case"cpu":return new on(e.type,e.data,r);case"cpu-pinned":return new on({location:"cpu-pinned",data:e.data,type:e.type,dims:r});case"texture":return new on({location:"texture",texture:e.texture,type:e.type,dims:r});case"gpu-buffer":return new on({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:r});case"ml-tensor":return new on({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:r});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),on,Vc=ne(()=>{m_(),g_(),y_(),v_(),on=class{constructor(e,r,i){Vy();let s,o;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,s=e.type,o=e.dims,e.location){case"cpu-pinned":{let u=zi.get(s);if(!u)throw new TypeError(`unsupported type "${s}" to create tensor from pinned buffer`);if(!(e.data instanceof u))throw new TypeError(`buffer should be of type ${u.name}`);this.cpuData=e.data;break}case"texture":{if(s!=="float32")throw new TypeError(`unsupported type "${s}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(s!=="float32"&&s!=="float16"&&s!=="int32"&&s!=="int64"&&s!=="uint32"&&s!=="uint8"&&s!=="bool"&&s!=="uint4"&&s!=="int4")throw new TypeError(`unsupported type "${s}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(s!=="float32"&&s!=="float16"&&s!=="int32"&&s!=="int64"&&s!=="uint32"&&s!=="uint64"&&s!=="int8"&&s!=="uint8"&&s!=="bool")throw new TypeError(`unsupported type "${s}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let u,h;if(typeof e=="string")if(s=e,h=i,e==="string"){if(!Array.isArray(r))throw new TypeError("A string tensor's data must be a string array.");u=r}else{let m=zi.get(e);if(m===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(r)){if(e==="float16"&&m===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${m.name} as data.`);e==="uint64"||e==="int64"?u=m.from(r,BigInt):u=m.from(r)}else if(r instanceof m)u=r;else if(r instanceof Uint8ClampedArray)if(e==="uint8")u=Uint8Array.from(r);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else throw new TypeError(`A ${s} tensor's data must be type of ${m}`)}else if(h=r,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let m=typeof e[0];if(m==="string")s="string",u=e;else if(m==="boolean")s="bool",u=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${m}.`)}else if(e instanceof Uint8ClampedArray)s="uint8",u=Uint8Array.from(e);else{let m=Hs.get(e.constructor);if(m===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);s=m,u=e}if(h===void 0)h=[u.length];else if(!Array.isArray(h))throw new TypeError("A tensor's dims must be a number array");o=h,this.cpuData=u,this.dataLocation="cpu"}let d=Hy(o);if(this.cpuData&&d!==this.cpuData.length&&!((s==="uint4"||s==="int4")&&Math.ceil(d/2)===this.cpuData.length))throw new Error(`Tensor's size(${d}) does not match data length(${this.cpuData.length}).`);this.type=s,this.dims=o,this.size=d}static async fromImage(e,r){return Ly(e,r)}static fromTexture(e,r){return Uy(e,r)}static fromGpuBuffer(e,r){return jy(e,r)}static fromMLTensor(e,r){return Wy(e,r)}static fromPinnedBuffer(e,r,i){return Fy(e,r,i)}toDataURL(e){return Dy(this,e)}toImageData(e){return Ny(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let r=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=r,e&&this.disposer&&(this.disposer(),this.disposer=void 0),r}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return qy(this,e)}}}),Pt,Hc=ne(()=>{Vc(),Pt=on}),Vu,Nd,Kn,Pn,Gy=ne(()=>{By(),Vu=(e,r)=>{(typeof _n.trace>"u"?!_n.wasm.trace:!_n.trace)||console.timeStamp(`${e}::ORT::${r}`)},Nd=(e,r)=>{var o;let i=((o=new Error().stack)==null?void 0:o.split(/\r\n|\r|\n/g))||[],s=!1;for(let d=0;d<i.length;d++){if(s&&!i[d].includes("TRACE_FUNC")){let u=`FUNC_${e}::${i[d].trim().split(" ")[1]}`;r&&(u+=`::${r}`),Vu("CPU",u);return}i[d].includes("TRACE_FUNC")&&(s=!0)}},Kn=e=>{(typeof _n.trace>"u"?!_n.wasm.trace:!_n.trace)||Nd("BEGIN",e)},Pn=e=>{(typeof _n.trace>"u"?!_n.wasm.trace:!_n.trace)||Nd("END",e)}}),Ky,w_=ne(()=>{Fc(),Hc(),Gy(),Ky=class Qy{constructor(r){this.handler=r}async run(r,i,s){Kn();let o={},d={};if(typeof r!="object"||r===null||r instanceof Pt||Array.isArray(r))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let u=!0;if(typeof i=="object"){if(i===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(i instanceof Pt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(i)){if(i.length===0)throw new TypeError("'fetches' cannot be an empty array.");u=!1;for(let g of i){if(typeof g!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(g)===-1)throw new RangeError(`'fetches' contains invalid output name: ${g}.`);o[g]=null}if(typeof s=="object"&&s!==null)d=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else{let g=!1,_=Object.getOwnPropertyNames(i);for(let w of this.outputNames)if(_.indexOf(w)!==-1){let f=i[w];(f===null||f instanceof Pt)&&(g=!0,u=!1,o[w]=f)}if(g){if(typeof s=="object"&&s!==null)d=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else d=i}}else if(typeof i<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let g of this.inputNames)if(typeof r[g]>"u")throw new Error(`input '${g}' is missing in 'feeds'.`);if(u)for(let g of this.outputNames)o[g]=null;let h=await this.handler.run(r,o,d),m={};for(let g in h)if(Object.hasOwnProperty.call(h,g)){let _=h[g];_ instanceof Pt?m[g]=_:m[g]=new Pt(_.type,_.data,_.dims)}return Pn(),m}async release(){return this.handler.dispose()}static async create(r,i,s,o){Kn();let d,u={};if(typeof r=="string"){if(d=r,typeof i=="object"&&i!==null)u=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(r instanceof Uint8Array){if(d=r,typeof i=="object"&&i!==null)u=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(r instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&r instanceof SharedArrayBuffer){let _=r,w=0,f=r.byteLength;if(typeof i=="object"&&i!==null)u=i;else if(typeof i=="number"){if(w=i,!Number.isSafeInteger(w))throw new RangeError("'byteOffset' must be an integer.");if(w<0||w>=_.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${_.byteLength}).`);if(f=r.byteLength-w,typeof s=="number"){if(f=s,!Number.isSafeInteger(f))throw new RangeError("'byteLength' must be an integer.");if(f<=0||w+f>_.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${_.byteLength-w}].`);if(typeof o=="object"&&o!==null)u=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else if(typeof s<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof i<"u")throw new TypeError("'options' must be an object.");d=new Uint8Array(_,w,f)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[h,m]=await Wc(u),g=await h.createInferenceSessionHandler(d,m);return Pn(),new Qy(g)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),qc,__=ne(()=>{w_(),qc=Ky}),$_=ne(()=>{}),x_=ne(()=>{}),b_=ne(()=>{}),S_=ne(()=>{}),hh,Yy,k_=ne(()=>{Fc(),Hc(),hh="Training backend could not be resolved. Make sure you're using the correct configuration & WebAssembly files.",Yy=class Zy{constructor(r,i,s){this.handler=r,this.hasOptimizerModel=i,this.hasEvalModel=s}get trainingInputNames(){return this.handler.inputNames}get trainingOutputNames(){return this.handler.outputNames}get evalInputNames(){if(this.hasEvalModel)return this.handler.evalInputNames;throw new Error("This training session has no evalModel loaded.")}get evalOutputNames(){if(this.hasEvalModel)return this.handler.evalOutputNames;throw new Error("This training session has no evalModel loaded.")}static async create(r,i){let s=r.evalModel||"",o=r.optimizerModel||"",d=i||{},[u,h]=await Wc(d);if(u.createTrainingSessionHandler){let m=await u.createTrainingSessionHandler(r.checkpointState,r.trainModel,s,o,h);return new Zy(m,!!r.optimizerModel,!!r.evalModel)}else throw new Error(hh)}typeNarrowingForRunStep(r,i,s,o,d){let u={},h={};if(typeof s!="object"||s===null||s instanceof Pt||Array.isArray(s))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let m=!0;if(typeof o=="object"){if(o===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(o instanceof Pt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(o)){if(o.length===0)throw new TypeError("'fetches' cannot be an empty array.");m=!1;for(let g of o){if(typeof g!="string")throw new TypeError("'fetches' must be a string array or an object.");if(i.indexOf(g)===-1)throw new RangeError(`'fetches' contains invalid output name: ${g}.`);u[g]=null}if(typeof d=="object"&&d!==null)h=d;else if(typeof d<"u")throw new TypeError("'options' must be an object.")}else{let g=!1,_=Object.getOwnPropertyNames(o);for(let w of i)if(_.indexOf(w)!==-1){let f=o[w];(f===null||f instanceof Pt)&&(g=!0,m=!1,u[w]=f)}if(g){if(typeof d=="object"&&d!==null)h=d;else if(typeof d<"u")throw new TypeError("'options' must be an object.")}else h=o}}else if(typeof o<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let g of r)if(typeof s[g]>"u")throw new Error(`input '${g}' is missing in 'feeds'.`);if(m)for(let g of i)u[g]=null;return[u,h]}convertHandlerReturnTypeToMapOfTensors(r){let i={};for(let s in r)if(Object.hasOwnProperty.call(r,s)){let o=r[s];o instanceof Pt?i[s]=o:i[s]=new Pt(o.type,o.data,o.dims)}return i}async lazyResetGrad(){await this.handler.lazyResetGrad()}async runTrainStep(r,i,s){let[o,d]=this.typeNarrowingForRunStep(this.trainingInputNames,this.trainingOutputNames,r,i,s),u=await this.handler.runTrainStep(r,o,d);return this.convertHandlerReturnTypeToMapOfTensors(u)}async runOptimizerStep(r){if(this.hasOptimizerModel)await this.handler.runOptimizerStep(r||{});else throw new Error("This TrainingSession has no OptimizerModel loaded.")}async runEvalStep(r,i,s){if(this.hasEvalModel){let[o,d]=this.typeNarrowingForRunStep(this.evalInputNames,this.evalOutputNames,r,i,s),u=await this.handler.runEvalStep(r,o,d);return this.convertHandlerReturnTypeToMapOfTensors(u)}else throw new Error("This TrainingSession has no EvalModel loaded.")}async getParametersSize(r=!0){return this.handler.getParametersSize(r)}async loadParametersBuffer(r,i=!0){let s=await this.getParametersSize(i);if(r.length!==4*s)throw new Error("Size of the buffer passed into loadParametersBuffer must match the number of parameters in the model. Please use getParametersSize method to check.");return this.handler.loadParametersBuffer(r,i)}async getContiguousParameters(r=!0){return this.handler.getContiguousParameters(r)}async release(){return this.handler.dispose()}}}),Xy,E_=ne(()=>{k_(),Xy=Yy}),C_={};Xs(C_,{InferenceSession:()=>qc,TRACE:()=>Vu,TRACE_FUNC_BEGIN:()=>Kn,TRACE_FUNC_END:()=>Pn,Tensor:()=>Pt,TrainingSession:()=>Xy,env:()=>Je,registerBackend:()=>Ca});var Mn=ne(()=>{f_(),h_(),__(),Hc(),$_(),x_(),Gy(),b_(),S_(),E_()}),Gc=ne(()=>{}),Jy={};Xs(Jy,{default:()=>e0});var Ld,Ud,e0,T_=ne(()=>{var e;Yw(),Ri(),Xu(),Ld="ort-wasm-proxy-worker",Ud=((e=globalThis.self)==null?void 0:e.name)===Ld,Ud&&(self.onmessage=r=>{let{type:i,in:s}=r.data;try{switch(i){case"init-wasm":Kc(s.wasm).then(()=>{ff(s).then(()=>{postMessage({type:i})},o=>{postMessage({type:i,err:o})})},o=>{postMessage({type:i,err:o})});break;case"init-ep":{let{epName:o,env:d}=s;pf(d,o).then(()=>{postMessage({type:i})},u=>{postMessage({type:i,err:u})});break}case"copy-from":{let{buffer:o}=s,d=Zu(o);postMessage({type:i,out:d});break}case"create":{let{model:o,options:d}=s;hf(o,d).then(u=>{postMessage({type:i,out:u})},u=>{postMessage({type:i,err:u})});break}case"release":mf(s),postMessage({type:i});break;case"run":{let{sessionId:o,inputIndices:d,inputs:u,outputIndices:h,options:m}=s;gf(o,d,u,h,new Array(h.length).fill(null),m).then(g=>{g.some(_=>_[3]!=="cpu")?postMessage({type:i,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:i,out:g},vf([...u,...g]))},g=>{postMessage({type:i,err:g})});break}case"end-profiling":yf(s),postMessage({type:i});break;default:}}catch(o){postMessage({type:i,err:o})}}),e0=Ud?null:r=>new Worker(r??Ea,{type:"module",name:Ld})}),t0={};Xs(t0,{default:()=>n0});var jd,Wd,n0,I_=ne(()=>{var e;Wd=(jd=import.meta.url,async function(r={}){function i(){return be.buffer!=X.buffer&&He(),X}function s(){return be.buffer!=X.buffer&&He(),J}function o(){return be.buffer!=X.buffer&&He(),A}function d(){return be.buffer!=X.buffer&&He(),N}function u(){return be.buffer!=X.buffer&&He(),ie}function h(){return be.buffer!=X.buffer&&He(),ce}function m(){return be.buffer!=X.buffer&&He(),Ee}function g(){return be.buffer!=X.buffer&&He(),Fe}var _,w,f=Object.assign({},r),b=new Promise((c,v)=>{_=c,w=v}),S=typeof window=="object",x=typeof importScripts=="function",T=x&&self.name=="em-pthread";f.mountExternalData=(c,v)=>{c.startsWith("./")&&(c=c.substring(2)),(f.Fb||(f.Fb=new Map)).set(c,v)},f.unmountExternalData=()=>{delete f.Fb};var z=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let C=()=>{let c=($,k,I)=>(...B)=>{let G=Mt,Z=k==null?void 0:k();B=$(...B);let oe=k==null?void 0:k();return Z!==oe&&($=oe,I(Z),k=I=null),Mt!=G?new Promise((le,$e)=>{xr={resolve:le,reject:$e}}):B},v=$=>async(...k)=>{var I;try{if(f.Eb)throw Error("Session already started");let B=f.Eb={fc:k[0],errors:[]},G=await $(...k);if(f.Eb!==B)throw Error("Session mismatch");(I=f.Gb)==null||I.flush();let Z=B.errors;if(0<Z.length){let oe=await Promise.all(Z);if(oe=oe.filter(le=>le),0<oe.length)throw Error(oe.join(`
`))}return G}finally{f.Eb=null}};f._OrtCreateSession=c(f._OrtCreateSession,()=>f._OrtCreateSession,$=>f._OrtCreateSession=$),f._OrtRun=v(c(f._OrtRun,()=>f._OrtRun,$=>f._OrtRun=$)),f._OrtRunWithBinding=v(c(f._OrtRunWithBinding,()=>f._OrtRunWithBinding,$=>f._OrtRunWithBinding=$)),f._OrtBindInput=c(f._OrtBindInput,()=>f._OrtBindInput,$=>f._OrtBindInput=$),C=void 0};f.jsepInit=(c,v)=>{if(C==null||C(),c==="webgpu"){[f.Gb,f.Ub,f.Yb,f.Nb,f.Xb,f.jb,f.Zb,f.bc,f.Vb,f.Wb,f.$b]=v;let $=f.Gb;f.jsepRegisterBuffer=(k,I,B,G)=>$.registerBuffer(k,I,B,G),f.jsepGetBuffer=k=>$.getBuffer(k),f.jsepCreateDownloader=(k,I,B)=>$.createDownloader(k,I,B),f.jsepOnReleaseSession=k=>{$.onReleaseSession(k)},f.jsepOnRunStart=k=>$.onRunStart(k),f.cc=(k,I)=>{$.upload(k,I)}}else if(c==="webnn"){[f.Gb,f.ac,f.Ob,f.jsepEnsureTensor,f.dc,f.jsepDownloadTensor]=v,f.jsepReleaseTensorId=f.Ob;let $=f.Gb;f.jsepOnRunStart=k=>$.onRunStart(k),f.jsepRegisterMLContext=(k,I)=>{$.registerMLContext(k,I)},f.jsepOnReleaseSession=k=>{$.onReleaseSession(k)},f.jsepCreateMLTensorDownloader=(k,I)=>$.createMLTensorDownloader(k,I),f.jsepRegisterMLTensor=(k,I,B)=>$.registerMLTensor(k,I,B)}};var O,R,M=Object.assign({},f),F="./this.program",U=(c,v)=>{throw v},Q="";(S||x)&&(x?Q=self.location.href:typeof document<"u"&&document.currentScript&&(Q=document.currentScript.src),jd&&(Q=jd),Q=Q.startsWith("blob:")?"":Q.substr(0,Q.replace(/[?#].*/,"").lastIndexOf("/")+1),x&&(R=c=>{var v=new XMLHttpRequest;return v.open("GET",c,!1),v.responseType="arraybuffer",v.send(null),new Uint8Array(v.response)}),O=(c,v,$)=>{var k=new XMLHttpRequest;k.open("GET",c,!0),k.responseType="arraybuffer",k.onload=()=>{k.status==200||k.status==0&&k.response?v(k.response):$()},k.onerror=$,k.send(null)});var se,ue=console.log.bind(console),Se=console.error.bind(console),xe=ue,de=Se;if(Object.assign(f,M),M=null,T){let c=function(v){try{var $=v.data,k=$.cmd;if(k==="load"){let I=[];self.onmessage=B=>I.push(B),self.startWorker=()=>{postMessage({cmd:"loaded"});for(let B of I)c(B);self.onmessage=c};for(let B of $.handlers)f[B]&&!f[B].proxy||(f[B]=(...G)=>{postMessage({Mb:"callHandler",oc:B,args:G})},B=="print"&&(xe=f[B]),B=="printErr"&&(de=f[B]));be=$.wasmMemory,He(),Re($.wasmModule)}else if(k==="run"){ms($.pthread_ptr,0,0,1,0,0),vr($.pthread_ptr),to(),Ui(),De||(hs(),De=!0);try{no($.start_routine,$.arg)}catch(I){if(I!="unwind")throw I}}else k==="cancel"?tr()&&Fn(-1):$.target!=="setimmediate"&&(k==="checkMailbox"?De&&en():k&&(de(`worker: received unknown command ${k}`),de($)))}catch(I){throw Mo(),I}};var Re,De=!1;de=function(...v){v=v.join(" "),console.error(v)},self.alert=function(...v){postMessage({Mb:"alert",text:v.join(" "),qc:tr()})},f.instantiateWasm=(v,$)=>new Promise(k=>{Re=I=>{I=new WebAssembly.Instance(I,Ra()),$(I),k()}}),self.onunhandledrejection=v=>{throw v.reason||v},self.onmessage=c}f.wasmBinary&&(se=f.wasmBinary);var be,ke,q,X,J,A,N,ie,ce,Ee,Ce,We,Fe,Ne=!1;function He(){var c=be.buffer;f.HEAP8=X=new Int8Array(c),f.HEAP16=A=new Int16Array(c),f.HEAPU8=J=new Uint8Array(c),f.HEAPU16=N=new Uint16Array(c),f.HEAP32=ie=new Int32Array(c),f.HEAPU32=ce=new Uint32Array(c),f.HEAPF32=Ee=new Float32Array(c),f.HEAPF64=Fe=new Float64Array(c),f.HEAP64=Ce=new BigInt64Array(c),f.HEAPU64=We=new BigUint64Array(c)}if(!T){if(!((be=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0})).buffer instanceof z))throw de("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),Error("bad memory");He()}var ln=[],at=[],dt=[],Ct=0,$n=null;function Yr(){if(--Ct==0&&$n){var c=$n;$n=null,c()}}function Bn(c){throw de(c="Aborted("+c+")"),Ne=!0,q=1,c=new WebAssembly.RuntimeError(c+". Build with -sASSERTIONS for more info."),w(c),c}var Oi,Pi=c=>c.startsWith("data:application/octet-stream;base64,"),fr=c=>c.startsWith("file://");function Yn(c){if(c==Oi&&se)return new Uint8Array(se);if(R)return R(c);throw"both async and sync fetching of the wasm failed"}function Mi(c,v,$){return function(k){if(!se&&(S||x)){if(typeof fetch=="function"&&!fr(k))return fetch(k,{credentials:"same-origin"}).then(I=>{if(!I.ok)throw`failed to load wasm binary file at '${k}'`;return I.arrayBuffer()}).catch(()=>Yn(k));if(O)return new Promise((I,B)=>{O(k,G=>I(new Uint8Array(G)),B)})}return Promise.resolve().then(()=>Yn(k))}(c).then(k=>WebAssembly.instantiate(k,v)).then($,k=>{de(`failed to asynchronously prepare wasm: ${k}`),Bn(k)})}function Ra(){return{a:{O:eo,Aa:Js,b:io,aa:Ba,B:ao,qa:mr,Y:so,_:oo,ra:uo,oa:Ln,ha:Da,na:Na,L:lo,Z:La,W:Ua,pa:ja,X:Wa,wa:st,F:po,Q:cn,P:ti,E:tl,u:nl,q:Ha,G:ho,A:Ga,R:yo,ua:vo,ka:wo,U:jn,ba:ri,H:ii,ja:vr,ta:Wn,t:ai,x:Za,o:Xa,l:Ja,c:Va,n:xo,j:Bt,w:br,p:ts,g:oi,s:al,m:ns,e:rs,k:ui,i:Xi,h:bo,d:sl,ea:ol,fa:ul,ga:ll,ca:ko,da:Eo,T:Co,f:dl,D:cl,I:as,M:fl,y:pl,sa:zo,V:hl,v:Io,z:ml,N:gl,S:yl,za:ss,ya:di,la:ls,ma:ds,$:Di,C:cs,K:er,ia:Ro,J:Oo,a:be,xa:Pa,va:kr,r:wl}}}var Bi={868340:(c,v,$,k,I)=>{if(f===void 0||!f.Fb)return 1;if((c=rt(c>>>0)).startsWith("./")&&(c=c.substring(2)),!(c=f.Fb.get(c)))return 2;if(k>>>=0,(v>>>=0)+($>>>=0)>c.byteLength)return 3;try{let B=c.subarray(v,v+$);switch(I){case 0:s().set(B,k>>>0);break;case 1:f.cc(k,B);break;default:return 4}return 0}catch{return 4}},869023:(c,v,$)=>{f.dc(c,s().subarray(v>>>0,v+$>>>0))},869086:()=>f.ac(),869127:c=>{f.Ob(c)},869163:()=>{f.Vb()},869194:()=>{f.Wb()},869223:()=>{f.$b()},869248:c=>f.Ub(c),869281:c=>f.Yb(c),869313:(c,v,$)=>{f.Nb(c,v,$,!0)},869352:(c,v,$)=>{f.Nb(c,v,$)},869385:()=>typeof wasmOffsetConverter<"u",869442:c=>{f.jb("Abs",c,void 0)},869493:c=>{f.jb("Neg",c,void 0)},869544:c=>{f.jb("Floor",c,void 0)},869597:c=>{f.jb("Ceil",c,void 0)},869649:c=>{f.jb("Reciprocal",c,void 0)},869707:c=>{f.jb("Sqrt",c,void 0)},869759:c=>{f.jb("Exp",c,void 0)},869810:c=>{f.jb("Erf",c,void 0)},869861:c=>{f.jb("Sigmoid",c,void 0)},869916:(c,v,$)=>{f.jb("HardSigmoid",c,{alpha:v,beta:$})},869995:c=>{f.jb("Log",c,void 0)},870046:c=>{f.jb("Sin",c,void 0)},870097:c=>{f.jb("Cos",c,void 0)},870148:c=>{f.jb("Tan",c,void 0)},870199:c=>{f.jb("Asin",c,void 0)},870251:c=>{f.jb("Acos",c,void 0)},870303:c=>{f.jb("Atan",c,void 0)},870355:c=>{f.jb("Sinh",c,void 0)},870407:c=>{f.jb("Cosh",c,void 0)},870459:c=>{f.jb("Asinh",c,void 0)},870512:c=>{f.jb("Acosh",c,void 0)},870565:c=>{f.jb("Atanh",c,void 0)},870618:c=>{f.jb("Tanh",c,void 0)},870670:c=>{f.jb("Not",c,void 0)},870721:(c,v,$)=>{f.jb("Clip",c,{min:v,max:$})},870790:c=>{f.jb("Clip",c,void 0)},870842:(c,v)=>{f.jb("Elu",c,{alpha:v})},870900:c=>{f.jb("Gelu",c,void 0)},870952:c=>{f.jb("Relu",c,void 0)},871004:(c,v)=>{f.jb("LeakyRelu",c,{alpha:v})},871068:(c,v)=>{f.jb("ThresholdedRelu",c,{alpha:v})},871138:(c,v)=>{f.jb("Cast",c,{to:v})},871196:c=>{f.jb("Add",c,void 0)},871247:c=>{f.jb("Sub",c,void 0)},871298:c=>{f.jb("Mul",c,void 0)},871349:c=>{f.jb("Div",c,void 0)},871400:c=>{f.jb("Pow",c,void 0)},871451:c=>{f.jb("Equal",c,void 0)},871504:c=>{f.jb("Greater",c,void 0)},871559:c=>{f.jb("GreaterOrEqual",c,void 0)},871621:c=>{f.jb("Less",c,void 0)},871673:c=>{f.jb("LessOrEqual",c,void 0)},871732:(c,v,$,k,I)=>{f.jb("ReduceMean",c,{keepDims:!!v,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,I>>>0)):[]})},871891:(c,v,$,k,I)=>{f.jb("ReduceMax",c,{keepDims:!!v,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,I>>>0)):[]})},872049:(c,v,$,k,I)=>{f.jb("ReduceMin",c,{keepDims:!!v,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,I>>>0)):[]})},872207:(c,v,$,k,I)=>{f.jb("ReduceProd",c,{keepDims:!!v,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,I>>>0)):[]})},872366:(c,v,$,k,I)=>{f.jb("ReduceSum",c,{keepDims:!!v,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,I>>>0)):[]})},872524:(c,v,$,k,I)=>{f.jb("ReduceL1",c,{keepDims:!!v,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,I>>>0)):[]})},872681:(c,v,$,k,I)=>{f.jb("ReduceL2",c,{keepDims:!!v,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,I>>>0)):[]})},872838:(c,v,$,k,I)=>{f.jb("ReduceLogSum",c,{keepDims:!!v,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,I>>>0)):[]})},872999:(c,v,$,k,I)=>{f.jb("ReduceSumSquare",c,{keepDims:!!v,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,I>>>0)):[]})},873163:(c,v,$,k,I)=>{f.jb("ReduceLogSumExp",c,{keepDims:!!v,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,I>>>0)):[]})},873327:c=>{f.jb("Where",c,void 0)},873380:(c,v,$)=>{f.jb("Transpose",c,{perm:v?Array.from(u().subarray(v>>>0,$>>>0)):[]})},873488:(c,v,$,k)=>{f.jb("DepthToSpace",c,{blocksize:v,mode:rt($),format:k?"NHWC":"NCHW"})},873621:(c,v,$,k)=>{f.jb("DepthToSpace",c,{blocksize:v,mode:rt($),format:k?"NHWC":"NCHW"})},873754:(c,v,$,k,I,B,G,Z,oe,le,$e,Le,Be,H,Me)=>{f.jb("ConvTranspose",c,{format:oe?"NHWC":"NCHW",autoPad:v,dilations:[$],group:k,kernelShape:[I],pads:[B,G],strides:[Z],wIsConst:()=>!!i()[le>>>0],outputPadding:$e?Array.from(u().subarray($e>>>0,Le>>>0)):[],outputShape:Be?Array.from(u().subarray(Be>>>0,H>>>0)):[],activation:rt(Me)})},874155:(c,v,$,k,I,B,G,Z,oe,le,$e,Le,Be,H)=>{f.jb("ConvTranspose",c,{format:Z?"NHWC":"NCHW",autoPad:v,dilations:Array.from(u().subarray($>>>0,2+($>>>0)>>>0)),group:k,kernelShape:Array.from(u().subarray(I>>>0,2+(I>>>0)>>>0)),pads:Array.from(u().subarray(B>>>0,4+(B>>>0)>>>0)),strides:Array.from(u().subarray(G>>>0,2+(G>>>0)>>>0)),wIsConst:()=>!!i()[oe>>>0],outputPadding:le?Array.from(u().subarray(le>>>0,$e>>>0)):[],outputShape:Le?Array.from(u().subarray(Le>>>0,Be>>>0)):[],activation:rt(H)})},874720:(c,v,$,k,I,B,G,Z,oe,le,$e,Le,Be,H,Me)=>{f.jb("ConvTranspose",c,{format:oe?"NHWC":"NCHW",autoPad:v,dilations:[$],group:k,kernelShape:[I],pads:[B,G],strides:[Z],wIsConst:()=>!!i()[le>>>0],outputPadding:$e?Array.from(u().subarray($e>>>0,Le>>>0)):[],outputShape:Be?Array.from(u().subarray(Be>>>0,H>>>0)):[],activation:rt(Me)})},875121:(c,v,$,k,I,B,G,Z,oe,le,$e,Le,Be,H)=>{f.jb("ConvTranspose",c,{format:Z?"NHWC":"NCHW",autoPad:v,dilations:Array.from(u().subarray($>>>0,2+($>>>0)>>>0)),group:k,kernelShape:Array.from(u().subarray(I>>>0,2+(I>>>0)>>>0)),pads:Array.from(u().subarray(B>>>0,4+(B>>>0)>>>0)),strides:Array.from(u().subarray(G>>>0,2+(G>>>0)>>>0)),wIsConst:()=>!!i()[oe>>>0],outputPadding:le?Array.from(u().subarray(le>>>0,$e>>>0)):[],outputShape:Le?Array.from(u().subarray(Le>>>0,Be>>>0)):[],activation:rt(H)})},875686:(c,v)=>{f.jb("GlobalAveragePool",c,{format:v?"NHWC":"NCHW"})},875777:(c,v,$,k,I,B,G,Z,oe,le,$e,Le,Be,H)=>{f.jb("AveragePool",c,{format:H?"NHWC":"NCHW",auto_pad:v,ceil_mode:$,count_include_pad:k,storage_order:I,dilations:B?Array.from(u().subarray(B>>>0,G>>>0)):[],kernel_shape:Z?Array.from(u().subarray(Z>>>0,oe>>>0)):[],pads:le?Array.from(u().subarray(le>>>0,$e>>>0)):[],strides:Le?Array.from(u().subarray(Le>>>0,Be>>>0)):[]})},876192:(c,v)=>{f.jb("GlobalAveragePool",c,{format:v?"NHWC":"NCHW"})},876283:(c,v,$,k,I,B,G,Z,oe,le,$e,Le,Be,H)=>{f.jb("AveragePool",c,{format:H?"NHWC":"NCHW",auto_pad:v,ceil_mode:$,count_include_pad:k,storage_order:I,dilations:B?Array.from(u().subarray(B>>>0,G>>>0)):[],kernel_shape:Z?Array.from(u().subarray(Z>>>0,oe>>>0)):[],pads:le?Array.from(u().subarray(le>>>0,$e>>>0)):[],strides:Le?Array.from(u().subarray(Le>>>0,Be>>>0)):[]})},876698:(c,v)=>{f.jb("GlobalMaxPool",c,{format:v?"NHWC":"NCHW"})},876785:(c,v,$,k,I,B,G,Z,oe,le,$e,Le,Be,H)=>{f.jb("MaxPool",c,{format:H?"NHWC":"NCHW",auto_pad:v,ceil_mode:$,count_include_pad:k,storage_order:I,dilations:B?Array.from(u().subarray(B>>>0,G>>>0)):[],kernel_shape:Z?Array.from(u().subarray(Z>>>0,oe>>>0)):[],pads:le?Array.from(u().subarray(le>>>0,$e>>>0)):[],strides:Le?Array.from(u().subarray(Le>>>0,Be>>>0)):[]})},877196:(c,v)=>{f.jb("GlobalMaxPool",c,{format:v?"NHWC":"NCHW"})},877283:(c,v,$,k,I,B,G,Z,oe,le,$e,Le,Be,H)=>{f.jb("MaxPool",c,{format:H?"NHWC":"NCHW",auto_pad:v,ceil_mode:$,count_include_pad:k,storage_order:I,dilations:B?Array.from(u().subarray(B>>>0,G>>>0)):[],kernel_shape:Z?Array.from(u().subarray(Z>>>0,oe>>>0)):[],pads:le?Array.from(u().subarray(le>>>0,$e>>>0)):[],strides:Le?Array.from(u().subarray(Le>>>0,Be>>>0)):[]})},877694:(c,v,$,k,I)=>{f.jb("Gemm",c,{alpha:v,beta:$,transA:k,transB:I})},877798:c=>{f.jb("MatMul",c,void 0)},877852:(c,v,$,k)=>{f.jb("ArgMax",c,{keepDims:!!v,selectLastIndex:!!$,axis:k})},877960:(c,v,$,k)=>{f.jb("ArgMin",c,{keepDims:!!v,selectLastIndex:!!$,axis:k})},878068:(c,v)=>{f.jb("Softmax",c,{axis:v})},878131:(c,v)=>{f.jb("Concat",c,{axis:v})},878191:(c,v,$,k,I)=>{f.jb("Split",c,{axis:v,numOutputs:$,splitSizes:k?Array.from(u().subarray(k>>>0,I>>>0)):[]})},878331:c=>{f.jb("Expand",c,void 0)},878385:(c,v)=>{f.jb("Gather",c,{axis:Number(v)})},878456:(c,v)=>{f.jb("GatherElements",c,{axis:Number(v)})},878535:(c,v,$,k,I,B,G,Z,oe,le,$e)=>{f.jb("Resize",c,{antialias:v,axes:$?Array.from(u().subarray($>>>0,k>>>0)):[],coordinateTransformMode:rt(I),cubicCoeffA:B,excludeOutside:G,extrapolationValue:Z,keepAspectRatioPolicy:rt(oe),mode:rt(le),nearestMode:rt($e)})},878881:(c,v,$,k,I,B,G)=>{f.jb("Slice",c,{starts:v?Array.from(u().subarray(v>>>0,$>>>0)):[],ends:k?Array.from(u().subarray(k>>>0,I>>>0)):[],axes:B?Array.from(u().subarray(B>>>0,G>>>0)):[]})},879097:c=>{f.jb("Tile",c,void 0)},879149:(c,v,$)=>{f.jb("InstanceNormalization",c,{epsilon:v,format:$?"NHWC":"NCHW"})},879263:(c,v,$)=>{f.jb("InstanceNormalization",c,{epsilon:v,format:$?"NHWC":"NCHW"})},879377:c=>{f.jb("Range",c,void 0)},879430:(c,v)=>{f.jb("Einsum",c,{equation:rt(v)})},879511:(c,v,$,k,I)=>{f.jb("Pad",c,{mode:v,value:$,pads:k?Array.from(u().subarray(k>>>0,I>>>0)):[]})},879638:(c,v,$,k,I,B)=>{f.jb("BatchNormalization",c,{epsilon:v,momentum:$,spatial:!!I,trainingMode:!!k,format:B?"NHWC":"NCHW"})},879807:(c,v,$,k,I,B)=>{f.jb("BatchNormalization",c,{epsilon:v,momentum:$,spatial:!!I,trainingMode:!!k,format:B?"NHWC":"NCHW"})},879976:(c,v,$)=>{f.jb("CumSum",c,{exclusive:Number(v),reverse:Number($)})},880073:(c,v,$)=>{f.jb("DequantizeLinear",c,{axis:v,blockSize:$})},880163:(c,v,$,k,I,B,G,Z,oe)=>{f.jb("Attention",c,{numHeads:v,isUnidirectional:$,maskFilterValue:k,scale:I,doRotary:B,qkvHiddenSizes:G?Array.from(u().subarray(Number(Z)>>>0,Number(Z)+G>>>0)):[],pastPresentShareBuffer:!!oe})},880435:c=>{f.jb("BiasAdd",c,void 0)},880490:c=>{f.jb("BiasSplitGelu",c,void 0)},880551:c=>{f.jb("FastGelu",c,void 0)},880607:(c,v,$,k,I,B,G,Z,oe,le,$e,Le,Be,H,Me,et)=>{f.jb("Conv",c,{format:Le?"NHWC":"NCHW",auto_pad:v,dilations:$?Array.from(u().subarray($>>>0,k>>>0)):[],group:I,kernel_shape:B?Array.from(u().subarray(B>>>0,G>>>0)):[],pads:Z?Array.from(u().subarray(Z>>>0,oe>>>0)):[],strides:le?Array.from(u().subarray(le>>>0,$e>>>0)):[],w_is_const:()=>!!i()[Be>>>0],activation:rt(H),activation_params:Me?Array.from(m().subarray(Me>>>0,et>>>0)):[]})},881103:c=>{f.jb("Gelu",c,void 0)},881155:(c,v,$,k)=>{f.jb("GroupQueryAttention",c,{numHeads:v,kvNumHeads:$,scale:k})},881268:(c,v,$,k)=>{f.jb("LayerNormalization",c,{axis:v,epsilon:$,simplified:!!k})},881379:(c,v,$,k)=>{f.jb("LayerNormalization",c,{axis:v,epsilon:$,simplified:!!k})},881490:(c,v,$,k,I,B)=>{f.jb("MatMulNBits",c,{k:v,n:$,accuracyLevel:k,bits:I,blockSize:B})},881617:(c,v,$,k,I,B)=>{f.jb("MultiHeadAttention",c,{numHeads:v,isUnidirectional:$,maskFilterValue:k,scale:I,doRotary:B})},881776:(c,v)=>{f.jb("QuickGelu",c,{alpha:v})},881840:(c,v,$,k,I)=>{f.jb("RotaryEmbedding",c,{interleaved:!!v,numHeads:$,rotaryEmbeddingDim:k,scale:I})},881979:(c,v,$)=>{f.jb("SkipLayerNormalization",c,{epsilon:v,simplified:!!$})},882081:(c,v,$)=>{f.jb("SkipLayerNormalization",c,{epsilon:v,simplified:!!$})},882183:(c,v,$,k)=>{f.jb("GatherBlockQuantized",c,{gatherAxis:v,quantizeAxis:$,blockSize:k})},882304:c=>{f.Zb(c)},882338:(c,v)=>f.bc(c,v,f.Eb.fc,f.Eb.errors)};function Js(c,v,$){return _o(async()=>{await f.Xb(c,v,$)})}function eo(){return typeof wasmOffsetConverter<"u"}function Zr(c){this.name="ExitStatus",this.message=`Program terminated with exit(${c})`,this.status=c}var pr=c=>{c.terminate(),c.onmessage=()=>{}},Oa=c=>{Dn.length==0&&(Xn(),Zn(Dn[0]));var v=Dn.pop();if(!v)return 6;xn.push(v),jt[c.Ab]=v,v.Ab=c.Ab;var $={cmd:"run",start_routine:c.hc,arg:c.Qb,pthread_ptr:c.Ab};return v.postMessage($,c.mc),0},Xt=0,Qe=(c,v,...$)=>{for(var k=2*$.length,I=mi(),B=aa(8*k),G=B>>>3,Z=0;Z<$.length;Z++){var oe=$[Z];typeof oe=="bigint"?(Ce[G+2*Z]=1n,Ce[G+2*Z+1]=oe):(Ce[G+2*Z]=0n,g()[G+2*Z+1>>>0]=oe)}return c=Bo(c,0,k,B,v),hi(I),c};function Pa(c){if(T)return Qe(0,1,c);if(q=c,!(0<Xt)){for(var v of xn)pr(v);for(v of Dn)pr(v);Dn=[],xn=[],jt=[],Ne=!0}U(c,new Zr(c))}function Ma(c){if(T)return Qe(1,0,c);Di(c)}var Di=c=>{if(q=c,T)throw Ma(c),"unwind";Pa(c)},Dn=[],xn=[],Ni=[],jt={},Li=c=>{var v=c.Ab;delete jt[v],Dn.push(c),xn.splice(xn.indexOf(c),1),c.Ab=0,Dt(v)};function Ui(){Ni.forEach(c=>c())}var Zn=c=>new Promise(v=>{c.onmessage=I=>{var B=(I=I.data).cmd;if(I.targetThread&&I.targetThread!=tr()){var G=jt[I.targetThread];G?G.postMessage(I,I.transferList):de(`Internal error! Worker sent a message "${B}" to target pthread ${I.targetThread}, but that thread no longer exists!`)}else B==="checkMailbox"?en():B==="spawnThread"?Oa(I):B==="cleanupThread"?Li(jt[I.thread]):B==="killThread"?(I=I.thread,B=jt[I],delete jt[I],pr(B),Dt(I),xn.splice(xn.indexOf(B),1),B.Ab=0):B==="cancelThread"?jt[I.thread].postMessage({cmd:"cancel"}):B==="loaded"?(c.loaded=!0,v(c)):B==="alert"?alert(`Thread ${I.threadId}: ${I.text}`):I.target==="setimmediate"?c.postMessage(I):B==="callHandler"?f[I.handler](...I.args):B&&de(`worker sent an unknown command ${B}`)},c.onerror=I=>{throw de(`worker sent an error! ${I.filename}:${I.lineno}: ${I.message}`),I};var $,k=[];for($ of[])f.hasOwnProperty($)&&k.push($);c.postMessage({cmd:"load",handlers:k,wasmMemory:be,wasmModule:ke})});function Xn(){var c=new Worker(new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});Dn.push(c)}var Xr=c=>{for(;0<c.length;)c.shift()(f)},to=()=>{var c=tr(),v=h()[c+52>>>2>>>0];c=h()[c+56>>>2>>>0],ys(v,v-c),hi(v)},no=(c,v)=>{Xt=0,c=Do(c,v),0<Xt?q=c:Fn(c)};class ro{constructor(v){this.Jb=v-24}}function io(c,v,$){var k=new ro(c>>>=0);throw v>>>=0,$>>>=0,h()[k.Jb+16>>>2>>>0]=0,h()[k.Jb+4>>>2>>>0]=v,h()[k.Jb+8>>>2>>>0]=$,c}function ji(c,v,$,k){return T?Qe(2,1,c,v,$,k):Ba(c,v,$,k)}function Ba(c,v,$,k){if(c>>>=0,v>>>=0,$>>>=0,k>>>=0,z===void 0)return de("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var I=[];return T&&I.length===0?ji(c,v,$,k):(c={hc:$,Ab:c,Qb:k,mc:I},T?(c.Mb="spawnThread",postMessage(c,I),0):Oa(c))}var hr=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,Wi=(c,v,$)=>{var k=(v>>>=0)+$;for($=v;c[$]&&!($>=k);)++$;if(16<$-v&&c.buffer&&hr)return hr.decode(c.buffer instanceof z?c.slice(v,$):c.subarray(v,$));for(k="";v<$;){var I=c[v++];if(128&I){var B=63&c[v++];if((224&I)==192)k+=String.fromCharCode((31&I)<<6|B);else{var G=63&c[v++];65536>(I=(240&I)==224?(15&I)<<12|B<<6|G:(7&I)<<18|B<<12|G<<6|63&c[v++])?k+=String.fromCharCode(I):(I-=65536,k+=String.fromCharCode(55296|I>>10,56320|1023&I))}}else k+=String.fromCharCode(I)}return k},rt=(c,v)=>(c>>>=0)?Wi(s(),c,v):"";function ao(c,v,$){return T?Qe(3,1,c,v,$):0}function mr(c,v){if(T)return Qe(4,1,c,v)}var gr=c=>{for(var v=0,$=0;$<c.length;++$){var k=c.charCodeAt($);127>=k?v++:2047>=k?v+=2:55296<=k&&57343>=k?(v+=4,++$):v+=3}return v},Jr=(c,v,$,k)=>{if(!(0<k))return 0;var I=$>>>=0;k=$+k-1;for(var B=0;B<c.length;++B){var G=c.charCodeAt(B);if(55296<=G&&57343>=G&&(G=65536+((1023&G)<<10)|1023&c.charCodeAt(++B)),127>=G){if($>=k)break;v[$++>>>0]=G}else{if(2047>=G){if($+1>=k)break;v[$++>>>0]=192|G>>6}else{if(65535>=G){if($+2>=k)break;v[$++>>>0]=224|G>>12}else{if($+3>=k)break;v[$++>>>0]=240|G>>18,v[$++>>>0]=128|G>>12&63}v[$++>>>0]=128|G>>6&63}v[$++>>>0]=128|63&G}}return v[$>>>0]=0,$-I},Nn=(c,v,$)=>Jr(c,s(),v,$);function so(c,v){if(T)return Qe(5,1,c,v)}function oo(c,v,$){if(T)return Qe(6,1,c,v,$)}function uo(c,v,$){return T?Qe(7,1,c,v,$):0}function Ln(c,v){if(T)return Qe(8,1,c,v)}function Da(c,v,$){if(T)return Qe(9,1,c,v,$)}function Na(c,v,$,k){if(T)return Qe(10,1,c,v,$,k)}function lo(c,v,$,k){if(T)return Qe(11,1,c,v,$,k)}function La(c,v,$,k){if(T)return Qe(12,1,c,v,$,k)}function Ua(c){if(T)return Qe(13,1,c)}function ja(c,v){if(T)return Qe(14,1,c,v)}function Wa(c,v,$){if(T)return Qe(15,1,c,v,$)}var co,Un,st=()=>{Bn("")},dn=c=>{for(var v="";s()[c>>>0];)v+=co[s()[c++>>>0]];return v},ei={},Fi={};function Wt(c,v,$={}){if(!("argPackAdvance"in v))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function(k,I,B={}){var G=I.name;if(!k)throw new Un(`type "${G}" must have a positive integer typeid pointer`);if(Fi.hasOwnProperty(k)){if(B.Sb)return;throw new Un(`Cannot register type '${G}' twice`)}Fi[k]=I,ei.hasOwnProperty(k)&&(I=ei[k],delete ei[k],I.forEach(Z=>Z()))}(c,v,$)}var fo=(c,v,$)=>{switch(v){case 1:return $?k=>i()[k>>>0]:k=>s()[k>>>0];case 2:return $?k=>o()[k>>>1>>>0]:k=>d()[k>>>1>>>0];case 4:return $?k=>u()[k>>>2>>>0]:k=>h()[k>>>2>>>0];case 8:return $?k=>Ce[k>>>3]:k=>We[k>>>3];default:throw new TypeError(`invalid integer width (${v}): ${c}`)}};function po(c,v,$){$>>>=0,Wt(c>>>=0,{name:v=dn(v>>>0),fromWireType:k=>k,toWireType:function(k,I){if(typeof I!="bigint"&&typeof I!="number")throw I=I===null?"null":(k=typeof I)=="object"||k==="array"||k==="function"?I.toString():""+I,new TypeError(`Cannot convert "${I}" to ${this.name}`);return typeof I=="number"&&(I=BigInt(I)),I},argPackAdvance:Jt,readValueFromPointer:fo(v,$,v.indexOf("u")==-1),Db:null})}var Jt=8;function cn(c,v,$,k){Wt(c>>>=0,{name:v=dn(v>>>0),fromWireType:function(I){return!!I},toWireType:function(I,B){return B?$:k},argPackAdvance:Jt,readValueFromPointer:function(I){return this.fromWireType(s()[I>>>0])},Db:null})}var Fa=[],pt=[];function Va(c){9<(c>>>=0)&&--pt[c+1]==0&&(pt[c]=void 0,Fa.push(c))}var Ft=c=>{if(!c)throw new Un("Cannot use deleted val. handle = "+c);return pt[c]},Vt=c=>{switch(c){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let v=Fa.pop()||pt.length;return pt[v]=c,pt[v+1]=1,v}};function yr(c){return this.fromWireType(h()[c>>>2>>>0])}var Vi={name:"emscripten::val",fromWireType:c=>{var v=Ft(c);return Va(c),v},toWireType:(c,v)=>Vt(v),argPackAdvance:Jt,readValueFromPointer:yr,Db:null};function ti(c){return Wt(c>>>0,Vi)}var Hi=(c,v)=>{switch(v){case 4:return function($){return this.fromWireType(m()[$>>>2>>>0])};case 8:return function($){return this.fromWireType(g()[$>>>3>>>0])};default:throw new TypeError(`invalid float width (${v}): ${c}`)}};function tl(c,v,$){$>>>=0,Wt(c>>>=0,{name:v=dn(v>>>0),fromWireType:k=>k,toWireType:(k,I)=>I,argPackAdvance:Jt,readValueFromPointer:Hi(v,$),Db:null})}function nl(c,v,$,k,I){if(c>>>=0,$>>>=0,v=dn(v>>>0),I===-1&&(I=4294967295),I=Z=>Z,k===0){var B=32-8*$;I=Z=>Z<<B>>>B}var G=v.includes("unsigned")?function(Z,oe){return oe>>>0}:function(Z,oe){return oe};Wt(c,{name:v,fromWireType:I,toWireType:G,argPackAdvance:Jt,readValueFromPointer:fo(v,$,k!==0),Db:null})}function Ha(c,v,$){function k(B){var G=h()[B>>>2>>>0];return B=h()[B+4>>>2>>>0],new I(i().buffer,B,G)}var I=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][v];Wt(c>>>=0,{name:$=dn($>>>0),fromWireType:k,argPackAdvance:Jt,readValueFromPointer:k},{Sb:!0})}function ho(c,v){c>>>=0;var $=(v=dn(v>>>0))==="std::string";Wt(c,{name:v,fromWireType:function(k){var I=h()[k>>>2>>>0],B=k+4;if($)for(var G=B,Z=0;Z<=I;++Z){var oe=B+Z;if(Z==I||s()[oe>>>0]==0){if(G=rt(G,oe-G),le===void 0)var le=G;else le+="\0",le+=G;G=oe+1}}else{for(le=Array(I),Z=0;Z<I;++Z)le[Z]=String.fromCharCode(s()[B+Z>>>0]);le=le.join("")}return pn(k),le},toWireType:function(k,I){I instanceof ArrayBuffer&&(I=new Uint8Array(I));var B=typeof I=="string";if(!(B||I instanceof Uint8Array||I instanceof Uint8ClampedArray||I instanceof Int8Array))throw new Un("Cannot pass non-string to std::string");var G=$&&B?gr(I):I.length,Z=ia(4+G+1),oe=Z+4;if(h()[Z>>>2>>>0]=G,$&&B)Nn(I,oe,G+1);else if(B)for(B=0;B<G;++B){var le=I.charCodeAt(B);if(255<le)throw pn(oe),new Un("String has UTF-16 code units that do not fit in 8 bits");s()[oe+B>>>0]=le}else for(B=0;B<G;++B)s()[oe+B>>>0]=I[B];return k!==null&&k.push(pn,Z),Z},argPackAdvance:Jt,readValueFromPointer:yr,Db(k){pn(k)}})}var qi=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,ni=(c,v)=>{for(var $=c>>1,k=$+v/2;!($>=k)&&d()[$>>>0];)++$;if(32<($<<=1)-c&&qi)return qi.decode(s().slice(c,$));for($="",k=0;!(k>=v/2);++k){var I=o()[c+2*k>>>1>>>0];if(I==0)break;$+=String.fromCharCode(I)}return $},rl=(c,v,$)=>{if($??($=2147483647),2>$)return 0;var k=v;$=($-=2)<2*c.length?$/2:c.length;for(var I=0;I<$;++I){var B=c.charCodeAt(I);o()[v>>>1>>>0]=B,v+=2}return o()[v>>>1>>>0]=0,v-k},qa=c=>2*c.length,Ke=(c,v)=>{for(var $=0,k="";!($>=v/4);){var I=u()[c+4*$>>>2>>>0];if(I==0)break;++$,65536<=I?(I-=65536,k+=String.fromCharCode(55296|I>>10,56320|1023&I)):k+=String.fromCharCode(I)}return k},mo=(c,v,$)=>{if(v>>>=0,$??($=2147483647),4>$)return 0;var k=v;$=k+$-4;for(var I=0;I<c.length;++I){var B=c.charCodeAt(I);if(55296<=B&&57343>=B&&(B=65536+((1023&B)<<10)|1023&c.charCodeAt(++I)),u()[v>>>2>>>0]=B,(v+=4)+4>$)break}return u()[v>>>2>>>0]=0,v-k},go=c=>{for(var v=0,$=0;$<c.length;++$){var k=c.charCodeAt($);55296<=k&&57343>=k&&++$,v+=4}return v};function Ga(c,v,$){if(c>>>=0,v>>>=0,$=dn($>>>=0),v===2)var k=ni,I=rl,B=qa,G=Z=>d()[Z>>>1>>>0];else v===4&&(k=Ke,I=mo,B=go,G=Z=>h()[Z>>>2>>>0]);Wt(c,{name:$,fromWireType:Z=>{for(var oe,le=h()[Z>>>2>>>0],$e=Z+4,Le=0;Le<=le;++Le){var Be=Z+4+Le*v;Le!=le&&G(Be)!=0||($e=k($e,Be-$e),oe===void 0?oe=$e:(oe+="\0",oe+=$e),$e=Be+v)}return pn(Z),oe},toWireType:(Z,oe)=>{if(typeof oe!="string")throw new Un(`Cannot pass non-string to C++ string type ${$}`);var le=B(oe),$e=ia(4+le+v);return h()[$e>>>2>>>0]=le/v,I(oe,$e+4,le+v),Z!==null&&Z.push(pn,$e),$e},argPackAdvance:Jt,readValueFromPointer:yr,Db(Z){pn(Z)}})}function yo(c,v){Wt(c>>>=0,{Tb:!0,name:v=dn(v>>>0),argPackAdvance:0,fromWireType:()=>{},toWireType:()=>{}})}var vo=()=>1;function wo(c){ms(c>>>0,!x,1,!S,131072,!1),Ui()}var Gi=c=>{if(!Ne)try{if(c(),!(0<Xt))try{T?Fn(q):Di(q)}catch(v){v instanceof Zr||v=="unwind"||U(1,v)}}catch(v){v instanceof Zr||v=="unwind"||U(1,v)}};function vr(c){c>>>=0,typeof Atomics.nc=="function"&&(Atomics.nc(u(),c>>>2,c).value.then(en),c+=128,Atomics.store(u(),c>>>2,1))}var en=()=>{var c=tr();c&&(vr(c),Gi(gs))};function jn(c,v){(c>>>=0)==v>>>0?setTimeout(en):T?postMessage({targetThread:c,cmd:"checkMailbox"}):(c=jt[c])&&c.postMessage({cmd:"checkMailbox"})}var fn=[];function ri(c,v,$,k,I){for(v>>>=0,k/=2,fn.length=k,$=I>>>0>>>3,I=0;I<k;I++)fn[I]=Ce[$+2*I]?Ce[$+2*I+1]:g()[$+2*I+1>>>0];return(v?Bi[v]:Po[c])(...fn)}function ii(c){c>>>=0,T?postMessage({cmd:"cleanupThread",thread:c}):Li(jt[c])}function Wn(c){}var Ka=(c,v)=>{var $=Fi[c];if($===void 0)throw c=ra(c),$=dn(c),pn(c),new Un(`${v} has unknown type ${$}`);return $},Qa=(c,v,$)=>{var k=[];return c=c.toWireType(k,$),k.length&&(h()[v>>>2>>>0]=Vt(k)),c};function ai(c,v,$){return v>>>=0,$>>>=0,c=Ft(c>>>0),v=Ka(v,"emval::as"),Qa(v,$,c)}var Ki=c=>{try{c()}catch(v){Bn(v)}},bn=0,Mt=null,Ya=0,Qi=[],wr={},_r={},$r=0,xr=null,il=[];function _o(c){return function(v){if(!Ne){if(bn===0){var $=!1,k=!1;v((I=0)=>{if(!Ne&&(Ya=I,$=!0,k)){bn=2,Ki(()=>sa(Mt)),typeof Browser<"u"&&Browser.Kb.Rb&&Browser.Kb.resume(),I=!1;try{var B=function(){var oe=u()[Mt+8>>>2>>>0];return oe=ye[_r[oe]],--Xt,oe()}()}catch(oe){B=oe,I=!0}var G=!1;if(!Mt){var Z=xr;Z&&(xr=null,(I?Z.reject:Z.resolve)(B),G=!0)}if(I&&!G)throw B}}),k=!0,$||(bn=1,Mt=function(){var I=ia(65548),B=I+12;h()[I>>>2>>>0]=B,h()[I+4>>>2>>>0]=B+65536,B=Qi[0];var G=wr[B];return G===void 0&&(G=$r++,wr[B]=G,_r[G]=B),B=G,u()[I+8>>>2>>>0]=B,I}(),typeof Browser<"u"&&Browser.Kb.Rb&&Browser.Kb.pause(),Ki(()=>No(Mt)))}else bn===2?(bn=0,Ki(Er),pn(Mt),Mt=null,il.forEach(Gi)):Bn(`invalid state: ${bn}`);return Ya}}(v=>{c().then(v)})}function Za(c){return c>>>=0,_o(()=>(c=Ft(c)).then(Vt))}var Jn=[];function Xa(c,v,$,k){return $>>>=0,k>>>=0,(c=Jn[c>>>0])(null,v=Ft(v>>>0),$,k)}var $o={},tn=c=>{var v=$o[c];return v===void 0?dn(c):v};function Ja(c,v,$,k,I){return $>>>=0,k>>>=0,I>>>=0,(c=Jn[c>>>0])(v=Ft(v>>>0),v[$=tn($)],k,I)}var si=()=>typeof globalThis=="object"?globalThis:Function("return this")();function xo(c){return(c>>>=0)==0?Vt(si()):(c=tn(c),Vt(si()[c]))}var Yi=c=>{var v=Jn.length;return Jn.push(c),v},Zi=(c,v)=>{for(var $=Array(c),k=0;k<c;++k)$[k]=Ka(h()[v+4*k>>>2>>>0],"parameter "+k);return $},es=(c,v)=>Object.defineProperty(v,"name",{value:c});function Bt(c,v,$){var k=(v=Zi(c,v>>>0)).shift();c--;var I=`return function (obj, func, destructorsRef, args) {
`,B=0,G=[];$===0&&G.push("obj");for(var Z=["retType"],oe=[k],le=0;le<c;++le)G.push("arg"+le),Z.push("argType"+le),oe.push(v[le]),I+=`  var arg${le} = argType${le}.readValueFromPointer(args${B?"+"+B:""});
`,B+=v[le].argPackAdvance;return I+=`  var rv = ${$===1?"new func":"func.call"}(${G.join(", ")});
`,k.Tb||(Z.push("emval_returnValue"),oe.push(Qa),I+=`  return emval_returnValue(retType, destructorsRef, rv);
`),Z.push(I+`};
`),c=function($e){var Le=Function;if(!(Le instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof Le} which is not a function`);var Be=es(Le.name||"unknownFunctionName",function(){});return Be.prototype=Le.prototype,Be=new Be,($e=Le.apply(Be,$e))instanceof Object?$e:Be}(Z)(...oe),$=`methodCaller<(${v.map($e=>$e.name).join(", ")}) => ${k.name}>`,Yi(es($,c))}function br(c){return c=tn(c>>>0),Vt(f[c])}function ts(c,v){return v>>>=0,c=Ft(c>>>0),v=Ft(v),Vt(c[v])}function oi(c){9<(c>>>=0)&&(pt[c+1]+=1)}function al(){return Vt([])}function ns(c){c=Ft(c>>>0);for(var v=Array(c.length),$=0;$<c.length;$++)v[$]=c[$];return Vt(v)}function rs(c){return Vt(tn(c>>>0))}function ui(){return Vt({})}function Xi(c){for(var v=Ft(c>>>=0);v.length;){var $=v.pop();v.pop()($)}Va(c)}function bo(c,v,$){v>>>=0,$>>>=0,c=Ft(c>>>0),v=Ft(v),$=Ft($),c[v]=$}function sl(c,v){return v>>>=0,c=(c=Ka(c>>>0,"_emval_take_value")).readValueFromPointer(v),Vt(c)}function ol(c,v){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),v>>>=0,c=new Date(1e3*c),u()[v>>>2>>>0]=c.getUTCSeconds(),u()[v+4>>>2>>>0]=c.getUTCMinutes(),u()[v+8>>>2>>>0]=c.getUTCHours(),u()[v+12>>>2>>>0]=c.getUTCDate(),u()[v+16>>>2>>>0]=c.getUTCMonth(),u()[v+20>>>2>>>0]=c.getUTCFullYear()-1900,u()[v+24>>>2>>>0]=c.getUTCDay(),c=(c.getTime()-Date.UTC(c.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,u()[v+28>>>2>>>0]=c}var Sr=c=>c%4==0&&(c%100!=0||c%400==0),Ji=[0,31,60,91,121,152,182,213,244,274,305,335],So=[0,31,59,90,120,151,181,212,243,273,304,334];function ul(c,v){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),v>>>=0,c=new Date(1e3*c),u()[v>>>2>>>0]=c.getSeconds(),u()[v+4>>>2>>>0]=c.getMinutes(),u()[v+8>>>2>>>0]=c.getHours(),u()[v+12>>>2>>>0]=c.getDate(),u()[v+16>>>2>>>0]=c.getMonth(),u()[v+20>>>2>>>0]=c.getFullYear()-1900,u()[v+24>>>2>>>0]=c.getDay();var $=(Sr(c.getFullYear())?Ji:So)[c.getMonth()]+c.getDate()-1|0;u()[v+28>>>2>>>0]=$,u()[v+36>>>2>>>0]=-60*c.getTimezoneOffset(),$=new Date(c.getFullYear(),6,1).getTimezoneOffset();var k=new Date(c.getFullYear(),0,1).getTimezoneOffset();c=0|($!=k&&c.getTimezoneOffset()==Math.min(k,$)),u()[v+32>>>2>>>0]=c}function ll(c){c>>>=0;var v=new Date(u()[c+20>>>2>>>0]+1900,u()[c+16>>>2>>>0],u()[c+12>>>2>>>0],u()[c+8>>>2>>>0],u()[c+4>>>2>>>0],u()[c>>>2>>>0],0),$=u()[c+32>>>2>>>0],k=v.getTimezoneOffset(),I=new Date(v.getFullYear(),6,1).getTimezoneOffset(),B=new Date(v.getFullYear(),0,1).getTimezoneOffset(),G=Math.min(B,I);return 0>$?u()[c+32>>>2>>>0]=+(I!=B&&G==k):0<$!=(G==k)&&(I=Math.max(B,I),v.setTime(v.getTime()+6e4*((0<$?G:I)-k))),u()[c+24>>>2>>>0]=v.getDay(),$=(Sr(v.getFullYear())?Ji:So)[v.getMonth()]+v.getDate()-1|0,u()[c+28>>>2>>>0]=$,u()[c>>>2>>>0]=v.getSeconds(),u()[c+4>>>2>>>0]=v.getMinutes(),u()[c+8>>>2>>>0]=v.getHours(),u()[c+12>>>2>>>0]=v.getDate(),u()[c+16>>>2>>>0]=v.getMonth(),u()[c+20>>>2>>>0]=v.getYear(),c=v.getTime(),BigInt(isNaN(c)?-1:c/1e3)}function ko(c,v,$,k,I,B,G){return T?Qe(16,1,c,v,$,k,I,B,G):-52}function Eo(c,v,$,k,I,B){if(T)return Qe(17,1,c,v,$,k,I,B)}function Co(c,v,$,k){c>>>=0,v>>>=0,$>>>=0,k>>>=0;var I=new Date().getFullYear(),B=new Date(I,0,1),G=new Date(I,6,1);I=B.getTimezoneOffset();var Z=G.getTimezoneOffset(),oe=Math.max(I,Z);h()[c>>>2>>>0]=60*oe,u()[v>>>2>>>0]=+(I!=Z),B=(c=le=>le.toLocaleTimeString(void 0,{hour12:!1,timeZoneName:"short"}).split(" ")[1])(B),G=c(G),Z<I?(Nn(B,$,17),Nn(G,k,17)):(Nn(B,k,17),Nn(G,$,17))}var is=[],To=(c,v)=>{is.length=0;for(var $;$=s()[c++>>>0];){var k=$!=105;v+=(k&=$!=112)&&v%8?4:0,is.push($==112?h()[v>>>2>>>0]:$==106?Ce[v>>>3]:$==105?u()[v>>>2>>>0]:g()[v>>>3>>>0]),v+=k?8:4}return is};function dl(c,v,$){return c>>>=0,v=To(v>>>0,$>>>0),Bi[c](...v)}function cl(c,v,$){return c>>>=0,v=To(v>>>0,$>>>0),Bi[c](...v)}var as=()=>{},fl=()=>Date.now();function pl(c,v){return de(rt(c>>>0,v>>>0))}var Io,zo=()=>{throw Xt+=1,"unwind"};function hl(){return 4294901760}Io=()=>performance.timeOrigin+performance.now();var ml=()=>navigator.hardwareConcurrency;function gl(){return Bn("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function yl(c){c>>>=0;var v=s().length;if(c<=v||4294901760<c)return!1;for(var $=1;4>=$;$*=2){var k=v*(1+.2/$);k=Math.min(k,c+100663296);var I=Math;k=Math.max(c,k);e:{I=(I.min.call(I,4294901760,k+(65536-k%65536)%65536)-be.buffer.byteLength+65535)/65536;try{be.grow(I),He();var B=1;break e}catch{}B=void 0}if(B)return!0}return!1}var ea=()=>(Bn("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),li={},Ao=c=>{c.forEach(v=>{ea()})};function ss(){var c=Error().stack.toString().split(`
`);return c[0]=="Error"&&c.shift(),Ao(c),li.Pb=ea(),li.ec=c,li.Pb}function di(c,v,$){if(c>>>=0,v>>>=0,li.Pb==c)var k=li.ec;else(k=Error().stack.toString().split(`
`))[0]=="Error"&&k.shift(),Ao(k);for(var I=3;k[I]&&ea()!=c;)++I;for(c=0;c<$&&k[c+I];++c)u()[v+4*c>>>2>>>0]=ea();return c}var os,ta={},us=()=>{if(!os){var c,v={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:F};for(c in ta)ta[c]===void 0?delete v[c]:v[c]=ta[c];var $=[];for(c in v)$.push(`${c}=${v[c]}`);os=$}return os};function ls(c,v){if(T)return Qe(18,1,c,v);c>>>=0,v>>>=0;var $=0;return us().forEach((k,I)=>{var B=v+$;for(I=h()[c+4*I>>>2>>>0]=B,B=0;B<k.length;++B)i()[I++>>>0]=k.charCodeAt(B);i()[I>>>0]=0,$+=k.length+1}),0}function ds(c,v){if(T)return Qe(19,1,c,v);c>>>=0,v>>>=0;var $=us();h()[c>>>2>>>0]=$.length;var k=0;return $.forEach(I=>k+=I.length+1),h()[v>>>2>>>0]=k,0}function cs(c){return T?Qe(20,1,c):52}function er(c,v,$,k){return T?Qe(21,1,c,v,$,k):52}function Ro(c,v,$,k){return T?Qe(22,1,c,v,$,k):70}var vl=[null,[],[]];function Oo(c,v,$,k){if(T)return Qe(23,1,c,v,$,k);v>>>=0,$>>>=0,k>>>=0;for(var I=0,B=0;B<$;B++){var G=h()[v>>>2>>>0],Z=h()[v+4>>>2>>>0];v+=8;for(var oe=0;oe<Z;oe++){var le=s()[G+oe>>>0],$e=vl[c];le===0||le===10?((c===1?xe:de)(Wi($e,0)),$e.length=0):$e.push(le)}I+=Z}return h()[k>>>2>>>0]=I,0}var fs=[31,29,31,30,31,30,31,31,30,31,30,31],ps=[31,28,31,30,31,30,31,31,30,31,30,31],ci=(c,v)=>{i().set(c,v>>>0)};function kr(c,v,$,k){function I(H,Me,et){for(H=typeof H=="number"?H.toString():H||"";H.length<Me;)H=et[0]+H;return H}function B(H,Me){return I(H,Me,"0")}function G(H,Me){function et(Cr){return 0>Cr?-1:0<Cr?1:0}var rr;return(rr=et(H.getFullYear()-Me.getFullYear()))===0&&(rr=et(H.getMonth()-Me.getMonth()))===0&&(rr=et(H.getDate()-Me.getDate())),rr}function Z(H){switch(H.getDay()){case 0:return new Date(H.getFullYear()-1,11,29);case 1:return H;case 2:return new Date(H.getFullYear(),0,3);case 3:return new Date(H.getFullYear(),0,2);case 4:return new Date(H.getFullYear(),0,1);case 5:return new Date(H.getFullYear()-1,11,31);case 6:return new Date(H.getFullYear()-1,11,30)}}function oe(H){var Me=H.Bb;for(H=new Date(new Date(H.Cb+1900,0,1).getTime());0<Me;){var et=H.getMonth(),rr=(Sr(H.getFullYear())?fs:ps)[et];if(!(Me>rr-H.getDate())){H.setDate(H.getDate()+Me);break}Me-=rr-H.getDate()+1,H.setDate(1),11>et?H.setMonth(et+1):(H.setMonth(0),H.setFullYear(H.getFullYear()+1))}return et=new Date(H.getFullYear()+1,0,4),Me=Z(new Date(H.getFullYear(),0,4)),et=Z(et),0>=G(Me,H)?0>=G(et,H)?H.getFullYear()+1:H.getFullYear():H.getFullYear()-1}c>>>=0,v>>>=0,$>>>=0,k>>>=0;var le=h()[k+40>>>2>>>0];for(var $e in k={kc:u()[k>>>2>>>0],jc:u()[k+4>>>2>>>0],Hb:u()[k+8>>>2>>>0],Lb:u()[k+12>>>2>>>0],Ib:u()[k+16>>>2>>>0],Cb:u()[k+20>>>2>>>0],ub:u()[k+24>>>2>>>0],Bb:u()[k+28>>>2>>>0],rc:u()[k+32>>>2>>>0],ic:u()[k+36>>>2>>>0],lc:le?rt(le):""},$=rt($),le={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})$=$.replace(new RegExp($e,"g"),le[$e]);var Le="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Be="January February March April May June July August September October November December".split(" ");for($e in le={"%a":H=>Le[H.ub].substring(0,3),"%A":H=>Le[H.ub],"%b":H=>Be[H.Ib].substring(0,3),"%B":H=>Be[H.Ib],"%C":H=>B((H.Cb+1900)/100|0,2),"%d":H=>B(H.Lb,2),"%e":H=>I(H.Lb,2," "),"%g":H=>oe(H).toString().substring(2),"%G":oe,"%H":H=>B(H.Hb,2),"%I":H=>((H=H.Hb)==0?H=12:12<H&&(H-=12),B(H,2)),"%j":H=>{for(var Me=0,et=0;et<=H.Ib-1;Me+=(Sr(H.Cb+1900)?fs:ps)[et++]);return B(H.Lb+Me,3)},"%m":H=>B(H.Ib+1,2),"%M":H=>B(H.jc,2),"%n":()=>`
`,"%p":H=>0<=H.Hb&&12>H.Hb?"AM":"PM","%S":H=>B(H.kc,2),"%t":()=>"	","%u":H=>H.ub||7,"%U":H=>B(Math.floor((H.Bb+7-H.ub)/7),2),"%V":H=>{var Me=Math.floor((H.Bb+7-(H.ub+6)%7)/7);if(2>=(H.ub+371-H.Bb-2)%7&&Me++,Me)Me==53&&((et=(H.ub+371-H.Bb)%7)==4||et==3&&Sr(H.Cb)||(Me=1));else{Me=52;var et=(H.ub+7-H.Bb-1)%7;(et==4||et==5&&Sr(H.Cb%400-1))&&Me++}return B(Me,2)},"%w":H=>H.ub,"%W":H=>B(Math.floor((H.Bb+7-(H.ub+6)%7)/7),2),"%y":H=>(H.Cb+1900).toString().substring(2),"%Y":H=>H.Cb+1900,"%z":H=>{var Me=0<=(H=H.ic);return H=Math.abs(H)/60,(Me?"+":"-")+("0000"+(H/60*100+H%60)).slice(-4)},"%Z":H=>H.lc,"%%":()=>"%"},$=$.replace(/%%/g,"\0\0"),le)$.includes($e)&&($=$.replace(new RegExp($e,"g"),le[$e](k)));return $e=function(H){var Me=Array(gr(H)+1);return Jr(H,Me,0,Me.length),Me}($=$.replace(/\0\0/g,"%")),$e.length>v?0:(ci($e,c),$e.length-1)}function wl(c,v,$,k){return kr(c>>>0,v>>>0,$>>>0,k>>>0)}T||function(){for(var c=f.numThreads-1;c--;)Xn();ln.unshift(()=>{Ct++,function(v){T?v():Promise.all(Dn.map(Zn)).then(v)}(()=>Yr())})}();for(var fi=Array(256),na=0;256>na;++na)fi[na]=String.fromCharCode(na);co=fi,Un=f.BindingError=class extends Error{constructor(c){super(c),this.name="BindingError"}},f.InternalError=class extends Error{constructor(c){super(c),this.name="InternalError"}},pt.push(0,1,void 0,1,null,1,!0,1,!1,1),f.count_emval_handles=()=>pt.length/2-5-Fa.length;var Po=[Pa,Ma,ji,ao,mr,so,oo,uo,Ln,Da,Na,lo,La,Ua,ja,Wa,ko,Eo,ls,ds,cs,er,Ro,Oo],ye=function(){function c($,k){return ye=$.exports,ye=function(){var I=ye,B={};for(let[G,Z]of Object.entries(I))B[G]=typeof Z=="function"?(...oe)=>{Qi.push(G);try{return Z(...oe)}finally{Ne||(Qi.pop(),Mt&&bn===1&&Qi.length===0&&(bn=0,Xt+=1,Ki(nr),typeof Fibers<"u"&&Fibers.sc()))}}:Z;return B}(),ye=function(){var I=ye,B=Z=>oe=>Z(oe)>>>0,G=Z=>()=>Z()>>>0;return(I=Object.assign({},I)).Ca=B(I.Ca),I.fb=G(I.fb),I.gb=B(I.gb),I.emscripten_main_runtime_thread_id=G(I.emscripten_main_runtime_thread_id),I.sb=B(I.sb),I.tb=G(I.tb),I}(),Ni.push(ye.ib),at.unshift(ye.Ba),ke=k,Yr(),ye}var v=Ra();if(Ct++,f.instantiateWasm)try{return f.instantiateWasm(v,c)}catch($){de(`Module.instantiateWasm callback failed with error: ${$}`),w($)}return Oi||(Oi=f.locateFile?Pi("ort-wasm-simd-threaded.jsep.wasm")?"ort-wasm-simd-threaded.jsep.wasm":f.locateFile?f.locateFile("ort-wasm-simd-threaded.jsep.wasm",Q):Q+"ort-wasm-simd-threaded.jsep.wasm":new URL("/yolo-benchmark-onnxruntime-web/assets/ort-wasm-simd-threaded.jsep-Bj7LIWiD.wasm",import.meta.url).href),function($,k){var I=Oi;return se||typeof WebAssembly.instantiateStreaming!="function"||Pi(I)||fr(I)||typeof fetch!="function"?Mi(I,$,k):fetch(I,{credentials:"same-origin"}).then(B=>WebAssembly.instantiateStreaming(B,$).then(k,function(G){return de(`wasm streaming compile failed: ${G}`),de("falling back to ArrayBuffer instantiation"),Mi(I,$,k)}))}(v,function($){c($.instance,$.module)}).catch(w),{}}(),ra=c=>(ra=ye.Ca)(c),hs=()=>(hs=ye.Da)();f._OrtInit=(c,v)=>(f._OrtInit=ye.Ea)(c,v),f._OrtGetLastError=(c,v)=>(f._OrtGetLastError=ye.Fa)(c,v),f._OrtCreateSessionOptions=(c,v,$,k,I,B,G,Z,oe,le)=>(f._OrtCreateSessionOptions=ye.Ga)(c,v,$,k,I,B,G,Z,oe,le),f._OrtAppendExecutionProvider=(c,v)=>(f._OrtAppendExecutionProvider=ye.Ha)(c,v),f._OrtAddFreeDimensionOverride=(c,v,$)=>(f._OrtAddFreeDimensionOverride=ye.Ia)(c,v,$),f._OrtAddSessionConfigEntry=(c,v,$)=>(f._OrtAddSessionConfigEntry=ye.Ja)(c,v,$),f._OrtReleaseSessionOptions=c=>(f._OrtReleaseSessionOptions=ye.Ka)(c),f._OrtCreateSession=(c,v,$)=>(f._OrtCreateSession=ye.La)(c,v,$),f._OrtReleaseSession=c=>(f._OrtReleaseSession=ye.Ma)(c),f._OrtGetInputOutputCount=(c,v,$)=>(f._OrtGetInputOutputCount=ye.Na)(c,v,$),f._OrtGetInputName=(c,v)=>(f._OrtGetInputName=ye.Oa)(c,v),f._OrtGetOutputName=(c,v)=>(f._OrtGetOutputName=ye.Pa)(c,v),f._OrtFree=c=>(f._OrtFree=ye.Qa)(c),f._OrtCreateTensor=(c,v,$,k,I,B)=>(f._OrtCreateTensor=ye.Ra)(c,v,$,k,I,B),f._OrtGetTensorData=(c,v,$,k,I)=>(f._OrtGetTensorData=ye.Sa)(c,v,$,k,I),f._OrtReleaseTensor=c=>(f._OrtReleaseTensor=ye.Ta)(c),f._OrtCreateRunOptions=(c,v,$,k)=>(f._OrtCreateRunOptions=ye.Ua)(c,v,$,k),f._OrtAddRunConfigEntry=(c,v,$)=>(f._OrtAddRunConfigEntry=ye.Va)(c,v,$),f._OrtReleaseRunOptions=c=>(f._OrtReleaseRunOptions=ye.Wa)(c),f._OrtCreateBinding=c=>(f._OrtCreateBinding=ye.Xa)(c),f._OrtBindInput=(c,v,$)=>(f._OrtBindInput=ye.Ya)(c,v,$),f._OrtBindOutput=(c,v,$,k)=>(f._OrtBindOutput=ye.Za)(c,v,$,k),f._OrtClearBoundOutputs=c=>(f._OrtClearBoundOutputs=ye._a)(c),f._OrtReleaseBinding=c=>(f._OrtReleaseBinding=ye.$a)(c),f._OrtRunWithBinding=(c,v,$,k,I)=>(f._OrtRunWithBinding=ye.ab)(c,v,$,k,I),f._OrtRun=(c,v,$,k,I,B,G,Z)=>(f._OrtRun=ye.bb)(c,v,$,k,I,B,G,Z),f._OrtEndProfiling=c=>(f._OrtEndProfiling=ye.cb)(c),f._JsepOutput=(c,v,$)=>(f._JsepOutput=ye.db)(c,v,$),f._JsepGetNodeName=c=>(f._JsepGetNodeName=ye.eb)(c);var pi,tr=()=>(tr=ye.fb)(),ia=f._malloc=c=>(ia=f._malloc=ye.gb)(c),pn=f._free=c=>(pn=f._free=ye.hb)(c),ms=(c,v,$,k,I,B)=>(ms=ye.kb)(c,v,$,k,I,B),Mo=()=>(Mo=ye.lb)(),Bo=(c,v,$,k,I)=>(Bo=ye.mb)(c,v,$,k,I),Dt=c=>(Dt=ye.nb)(c),Fn=c=>(Fn=ye.ob)(c),gs=()=>(gs=ye.pb)(),ys=(c,v)=>(ys=ye.qb)(c,v),hi=c=>(hi=ye.rb)(c),aa=c=>(aa=ye.sb)(c),mi=()=>(mi=ye.tb)(),Do=f.dynCall_ii=(c,v)=>(Do=f.dynCall_ii=ye.vb)(c,v),No=c=>(No=ye.wb)(c),nr=()=>(nr=ye.xb)(),sa=c=>(sa=ye.yb)(c),Er=()=>(Er=ye.zb)();function oa(){0<Ct||(T?(_(f),T||Xr(at),startWorker(f)):(Xr(ln),0<Ct||pi||(pi=!0,f.calledRun=!0,Ne||(T||Xr(at),_(f),T||Xr(dt)))))}return f.___start_em_js=882450,f.___stop_em_js=882672,f.stackSave=()=>mi(),f.stackRestore=c=>hi(c),f.stackAlloc=c=>aa(c),f.UTF8ToString=rt,f.stringToUTF8=Nn,f.lengthBytesUTF8=gr,$n=function c(){pi||oa(),pi||($n=c)},oa(),b}),n0=Wd,((e=globalThis.self)==null?void 0:e.name)==="em-pthread"&&Wd()}),Ea,mh,gh,yh,Fd,r0,vh,i0,Xu=ne(()=>{var e,r;Gc(),Ea=import.meta.url??(typeof document<"u"?(e=document.currentScript)==null?void 0:e.src:typeof self<"u"?(r=self.location)==null?void 0:r.href:void 0),mh=typeof location>"u"?void 0:location.origin,gh=(i,s)=>{try{let o=s??Ea;return(o?new URL(i,o):new URL(i)).origin===mh}catch{return!1}},yh=async i=>{let s=await(await fetch(i,{credentials:"same-origin"})).blob();return URL.createObjectURL(s)},Fd=(T_(),Fu(Jy)).default,r0=async()=>{if(!Ea)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(gh(Ea))return[void 0,Fd()];let i=await yh(Ea);return[i,Fd(i)]},vh=(I_(),Fu(t0)).default,i0=async(i,s,o)=>[void 0,vh]}),Vd,zu,Ns,Hd,wh,_h,Kc,_t,Ri=ne(()=>{Xu(),zu=!1,Ns=!1,Hd=!1,wh=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},_h=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Kc=async e=>{if(zu)return Promise.resolve();if(Ns)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Hd)throw new Error("previous call to 'initializeWebAssembly()' failed.");Ns=!0;let r=e.initTimeout,i=e.numThreads;if(!_h())throw new Error("WebAssembly SIMD is not supported in the current environment.");let s=wh();i>1&&!s&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+i+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=i=1);let o=e.wasmPaths,d=typeof o=="string"?o:void 0,u=o==null?void 0:o.mjs,h=(u==null?void 0:u.href)??u,m=o==null?void 0:o.wasm,g=(m==null?void 0:m.href)??m,_=e.wasmBinary,[w,f]=await i0(h,d,i>1),b=!1,S=[];if(r>0&&S.push(new Promise(x=>{setTimeout(()=>{b=!0,x()},r)})),S.push(new Promise((x,T)=>{let z={numThreads:i};_?z.wasmBinary=_:(g||d)&&(z.locateFile=(C,O)=>g??(d??O)+C),f(z).then(C=>{Ns=!1,zu=!0,Vd=C,x(),w&&URL.revokeObjectURL(w)},C=>{Ns=!1,Hd=!0,T(C)})})),await Promise.race(S),b)throw new Error(`WebAssembly backend initializing failed due to timeout: ${r}ms`)},_t=()=>{if(zu&&Vd)return Vd;throw new Error("WebAssembly is not initialized yet.")}}),Et,Hu,lt,Qc=ne(()=>{Ri(),Et=(e,r)=>{let i=_t(),s=i.lengthBytesUTF8(e)+1,o=i._malloc(s);return i.stringToUTF8(e,o,s),r.push(o),o},Hu=(e,r,i,s)=>{if(typeof e=="object"&&e!==null){if(i.has(e))throw new Error("Circular reference in options");i.add(e)}Object.entries(e).forEach(([o,d])=>{let u=r?r+o:o;if(typeof d=="object")Hu(d,u+".",i,s);else if(typeof d=="string"||typeof d=="number")s(u,d.toString());else if(typeof d=="boolean")s(u,d?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof d}`)})},lt=e=>{let r=_t(),i=r.stackSave();try{let s=r.stackAlloc(8);r._OrtGetLastError(s,s+4);let o=r.HEAP32[s/4],d=r.HEAPU32[s/4+1],u=d?r.UTF8ToString(d):"";throw new Error(`${e} ERROR_CODE: ${o}, ERROR_MESSAGE: ${u}`)}finally{r.stackRestore(i)}}}),a0,z_=ne(()=>{Ri(),Qc(),a0=e=>{let r=_t(),i=0,s=[],o=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)o.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)o.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(o.terminate=!1);let d=0;return(e==null?void 0:e.tag)!==void 0&&(d=Et(e.tag,s)),i=r._OrtCreateRunOptions(o.logSeverityLevel,o.logVerbosityLevel,!!o.terminate,d),i===0&&lt("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Hu(e.extra,"",new WeakSet,(u,h)=>{let m=Et(u,s),g=Et(h,s);r._OrtAddRunConfigEntry(i,m,g)!==0&&lt(`Can't set a run config entry: ${u} - ${h}.`)}),[i,s]}catch(d){throw i!==0&&r._OrtReleaseRunOptions(i),s.forEach(u=>r._free(u)),d}}}),$h,xh,bh,Sh,s0,A_=ne(()=>{Ri(),Qc(),$h=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},xh=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},bh=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let r=e.extra.session;r.use_ort_model_bytes_directly||(r.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(i=>(typeof i=="string"?i:i.name)==="webgpu")&&(e.enableMemPattern=!1)},Sh=(e,r,i)=>{for(let s of r){let o=typeof s=="string"?s:s.name;switch(o){case"webnn":if(o="WEBNN",typeof s!="string"){let u=s==null?void 0:s.deviceType;if(u){let h=Et("deviceType",i),m=Et(u,i);_t()._OrtAddSessionConfigEntry(e,h,m)!==0&&lt(`Can't set a session config entry: 'deviceType' - ${u}.`)}}break;case"webgpu":if(o="JS",typeof s!="string"){let u=s;if(u!=null&&u.preferredLayout){if(u.preferredLayout!=="NCHW"&&u.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${u.preferredLayout}`);let h=Et("preferredLayout",i),m=Et(u.preferredLayout,i);_t()._OrtAddSessionConfigEntry(e,h,m)!==0&&lt(`Can't set a session config entry: 'preferredLayout' - ${u.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${o}`)}let d=Et(o,i);_t()._OrtAppendExecutionProvider(e,d)!==0&&lt(`Can't append execution provider: ${o}.`)}},s0=e=>{let r=_t(),i=0,s=[],o=e||{};bh(o);try{let d=$h(o.graphOptimizationLevel??"all"),u=xh(o.executionMode??"sequential"),h=typeof o.logId=="string"?Et(o.logId,s):0,m=o.logSeverityLevel??2;if(!Number.isInteger(m)||m<0||m>4)throw new Error(`log serverity level is not valid: ${m}`);let g=o.logVerbosityLevel??0;if(!Number.isInteger(g)||g<0||g>4)throw new Error(`log verbosity level is not valid: ${g}`);let _=typeof o.optimizedModelFilePath=="string"?Et(o.optimizedModelFilePath,s):0;if(i=r._OrtCreateSessionOptions(d,!!o.enableCpuMemArena,!!o.enableMemPattern,u,!!o.enableProfiling,0,h,m,g,_),i===0&&lt("Can't create session options."),o.executionProviders&&Sh(i,o.executionProviders,s),o.enableGraphCapture!==void 0){if(typeof o.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${o.enableGraphCapture}`);let w=Et("enableGraphCapture",s),f=Et(o.enableGraphCapture.toString(),s);r._OrtAddSessionConfigEntry(i,w,f)!==0&&lt(`Can't set a session config entry: 'enableGraphCapture' - ${o.enableGraphCapture}.`)}if(o.freeDimensionOverrides)for(let[w,f]of Object.entries(o.freeDimensionOverrides)){if(typeof w!="string")throw new Error(`free dimension override name must be a string: ${w}`);if(typeof f!="number"||!Number.isInteger(f)||f<0)throw new Error(`free dimension override value must be a non-negative integer: ${f}`);let b=Et(w,s);r._OrtAddFreeDimensionOverride(i,b,f)!==0&&lt(`Can't set a free dimension override: ${w} - ${f}.`)}return o.extra!==void 0&&Hu(o.extra,"",new WeakSet,(w,f)=>{let b=Et(w,s),S=Et(f,s);r._OrtAddSessionConfigEntry(i,b,S)!==0&&lt(`Can't set a session config entry: ${w} - ${f}.`)}),[i,s]}catch(d){throw i!==0&&r._OrtReleaseSessionOptions(i),s.forEach(u=>r._free(u)),d}}}),qs,Ai,Ta,Yc,qu,Zc,Xc,Ec,ze=ne(()=>{qs=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Ai=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Ta=(e,r)=>{let i=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],s=typeof r=="number"?r:r.reduce((o,d)=>o*d,1);return i>0?Math.ceil(s*i):void 0},Yc=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},qu=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Zc=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Xc=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool",Ec=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Jc,o0=ne(()=>{Gc(),Jc=async e=>{if(typeof e=="string"){let r=await fetch(e);if(!r.ok)throw new Error(`failed to load external data file: ${e}`);let i=r.headers.get("Content-Length"),s=i?parseInt(i,10):0;if(s<1073741824)return new Uint8Array(await r.arrayBuffer());{if(!r.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let o=r.body.getReader(),d;try{d=new ArrayBuffer(s)}catch(h){if(h instanceof RangeError){let m=Math.ceil(s/65536);d=new WebAssembly.Memory({initial:m,maximum:m}).buffer}else throw h}let u=0;for(;;){let{done:h,value:m}=await o.read();if(h)break;let g=m.byteLength;new Uint8Array(d,u,g).set(m),u+=g}return new Uint8Array(d,0,s)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),kh,Eh,Ch,Th,ef,Ih,Ye,Qn=ne(()=>{ze(),kh=["V","I","W","E","F"],Eh=(e,r)=>{console.log(`[${kh[e]},${new Date().toISOString()}]${r}`)},ef=(e,r)=>{Ch=e,Th=r},Ih=(e,r)=>{let i=qu(e),s=qu(Ch);i>=s&&Eh(i,typeof r=="function"?r():r)},Ye=(...e)=>{Th&&Ih(...e)}}),tf,u0=ne(()=>{ze(),tf=(e,r)=>new(Yc(r))(e)}),nf=ne(()=>{}),qd,Au,Ru,zh,Ah,Gd,Cc,Rh,l0,R_=ne(()=>{Qn(),nf(),qd=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Au=[],Ru=e=>Math.ceil(e/16)*16,zh=e=>{for(let r=0;r<Au.length;r++){let i=Au[r];if(e<=i)return i}return Math.ceil(e/16)*16},Ah=1,Gd=()=>Ah++,Cc=async(e,r,i,s)=>{let o=Ru(i),d=e.device.createBuffer({size:o,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let u=e.getCommandEncoder();e.endComputePass(),u.copyBufferToBuffer(r,0,d,0,o),e.flush(),await d.mapAsync(GPUMapMode.READ);let h=d.getMappedRange();if(s){let m=s();return m.set(new Uint8Array(h,0,i)),m}else return new Uint8Array(h.slice(0,i))}finally{d.destroy()}},Rh=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersForUploadingPending=[],this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[r]of qd)Au.push(r),this.freeBuffers.set(r,[]),this.freeUniformBuffers.set(r,[])}upload(e,r){let i=r.buffer,s=r.byteOffset,o=r.byteLength,d=Ru(o),u=this.storageCache.get(e);if(!u)throw new Error("gpu data for uploading does not exist");if(u.originalSize!==o)throw new Error(`inconsistent data size. gpu data size=${u.originalSize}, data size=${o}`);let h=this.backend.device.createBuffer({mappedAtCreation:!0,size:d,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),m=h.getMappedRange();new Uint8Array(m).set(new Uint8Array(i,s,o)),h.unmap();let g=this.backend.getCommandEncoder();this.backend.endComputePass(),g.copyBufferToBuffer(h,0,u.gpuData.buffer,0,d),Ye("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`),this.buffersForUploadingPending.push(h)}memcpy(e,r){let i=this.storageCache.get(e);if(!i)throw new Error("source gpu data for memcpy does not exist");let s=this.storageCache.get(r);if(!s)throw new Error("destination gpu data for memcpy does not exist");if(i.originalSize!==s.originalSize)throw new Error("inconsistent source and destination gpu data size");let o=Ru(i.originalSize),d=this.backend.getCommandEncoder();this.backend.endComputePass(),d.copyBufferToBuffer(i.gpuData.buffer,0,s.gpuData.buffer,0,o)}registerExternalBuffer(e,r,i){let s;if(i){if(s=i[0],e===i[1])return Ye("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${r}) => id=${s}, buffer is the same, skip.`),s;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else s=Gd();return this.storageCache.set(s,{gpuData:{id:s,type:0,buffer:e},originalSize:r}),Ye("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${r}) => id=${s}, registered.`),s}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ye("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,r=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let i=zh(e),s,o=(r&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,d=(r&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(o||d){let h=(o?this.freeBuffers:this.freeUniformBuffers).get(i);h?h.length>0?s=h.pop():s=this.backend.device.createBuffer({size:i,usage:r}):s=this.backend.device.createBuffer({size:i,usage:r})}else s=this.backend.device.createBuffer({size:i,usage:r});let u={id:Gd(),type:0,buffer:s};return this.storageCache.set(u.id,{gpuData:u,originalSize:e}),Ye("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${u.id}`),u}get(e){var r;return(r=this.storageCache.get(e))==null?void 0:r.gpuData}release(e){let r=this.storageCache.get(e);if(!r)throw new Error("releasing data does not exist");return Ye("verbose",()=>`[WebGPU] GpuDataManager.release(id=${e}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(e),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,r){let i=this.storageCache.get(e);if(!i)throw new Error("data does not exist");await Cc(this.backend,i.gpuData.buffer,i.originalSize,r)}refreshPendingBuffers(){for(let e of this.buffersForUploadingPending)e.destroy();if(this.buffersForUploadingPending=[],this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let r=qd.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let i=this.freeBuffers.get(e.size)||[];r===void 0||i.length>=r?e.destroy():i.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let i=this.freeUniformBuffers.get(e.size)||[];r===void 0||i.length>=r?e.destroy():i.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let r of this.buffersPending)e.push(r);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(r=>{r.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(r=>{r.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(r=>{r.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onReleaseSession(e){let r=this.capturedPendingBuffers.get(e);r&&(r.forEach(i=>{i.destroy()}),this.capturedPendingBuffers.delete(e))}},l0=(...e)=>new Rh(...e)}),Oh,Ze,mt=ne(()=>{Oh=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Ze=e=>new Oh(e)}),Ph,za,K,Gu,d0,c0,f0,Oe=ne(()=>{Ph=class{static calcMatMulShape(e,r){return e[1]!==r[0]?void 0:[e[0],r[1]]}},za=class{static calcShape(e,r,i=!1){let s=e.length,o=r.length;if(s===0)return r;if(o===0)return e;let d=Math.max(e.length,r.length),u=new Array(d);if(i){if(s<2||o<2)return;let h=Ph.calcMatMulShape([e[s-2],e[s-1]],[r[o-2],r[o-1]]);if(h===void 0)return;[u[d-2],u[d-1]]=h}for(let h=i?3:1;h<=d;h++){let m=s-h<0?1:e[s-h],g=o-h<0?1:r[o-h];if(m!==g&&m>1&&g>1)return;let _=Math.max(m,g);if(m&&g)u[d-h]=Math.max(m,g);else{if(_>1)return;u[d-h]=0}}return u}static isValidBroadcast(e,r){let i=e.length,s=r.length;if(i>s)return!1;for(let o=1;o<=i;o++)if(e[i-o]!==1&&e[i-o]!==r[s-o])return!1;return!0}},K=class ju{static size(r){return ju.getSizeFromDimensionRange(r,0,r.length)}static convertShape(r,i=4){let s=r.length;if(s===0)return[];let o=new Array(s),d=s-1;for(;d>=0;){if(r[d]%i===0){o[d]=r[d]/i;break}if(i%r[d]!==0)throw new Error("cannot convert shape");o[d]=1,i/=r[d],d--}for(d--;d>=0;d--)o[d]=r[d];return o}static sizeFromDimension(r,i){if(i<0||i>r.length)throw new Error(`invalid dimension of ${i} for sizeFromDimension as Tensor has ${r.length} dimensions.`);return ju.getSizeFromDimensionRange(r,i,r.length)}static sizeToDimension(r,i){if(i<0||i>r.length)throw new Error(`invalid dimension of ${i} for sizeToDimension as Tensor has ${r.length} dimensions.`);return ju.getSizeFromDimensionRange(r,0,i)}static getSizeFromDimensionRange(r,i,s){let o=1;for(let d=i;d<s;d++){if(r[d]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");o*=r[d]}return o}static computeStrides(r){let i=r.length;if(i===0)return[];if(i===1)return[1];let s=new Array(i);s[i-1]=1,s[i-2]=r[i-1];for(let o=i-3;o>=0;--o)s[o]=s[o+1]*r[o+1];return s}static normalizeAxis(r,i){if(r<-i&&r>=i)throw new Error("unsupported axis for this operation.");return r<0?r+i:r}static normalizeAxes(r,i){return r.map(s=>this.normalizeAxis(s,i??r.length))}static sortBasedOnPerm(r,i){return i?i.map(s=>r[s]):r.slice().reverse()}static padShape(r,i){let s=r.length;return r.map((o,d)=>o+i[d]+i[d+s])}static areEqual(r,i){return r.length!==i.length?!1:r.every((s,o)=>s===i[o])}},Gu=class Gs{static adjustPoolAttributes(r,i,s,o,d,u){if(!r&&s.length!==i.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(r)for(let h=0;h<i.length-2;h++)h>=s.length?s.push(i[h+2]):s[h]=i[h+2];for(let h=0;h<s.length;h++)if(h<o.length){if(o[h]<0)throw new Error("strides should be greater than or equal to 1")}else o.push(1);for(let h=0;h<s.length;h++)if(h<d.length){if(d[h]<0)throw new Error("dilations should be greater than or equal to 1")}else d.push(1);for(let h=0;h<s.length*2;h++)if(h<u.length){if(u[h]<0)throw new Error("pad should be greater than or equal to 1")}else u.push(0);for(let h=0;h<s.length;h++){if(s[h]<=0)throw new Error("kernel shapes need to be greater than 0");if(u[h]>=s[h]||u[h+s.length]>=s[h])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(r,i,s,o,d,u,h){if(h){if(d.length!==2*(r.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(i.length!==r.length-2)throw new Error("length of strides should be the length of data dimensions");if(o.length!==r.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let m=0;m<r.length-2;m++)Gs.adjustPadAndReturnShape(r[m+(u?1:2)],i[m],s[m],o[m],d,m,m+r.length-2,h)}}static computePoolOutputShape(r,i,s,o,d,u,h){if(i.length<=0)throw new Error("input shape must be of size greater than 0");let m=[i[0],i[1]];return Gs.computeShapeHelper(r,i,m,s,o,d,u,h),m}static computeConvOutputShape(r,i,s,o,d,u,h){if(r.length<=0||i.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let m=[r[0],i[0]];return Gs.computeShapeHelper(!1,r,m,s,o,d,u,h),m}static computeShapeHelper(r,i,s,o,d,u,h,m){if(r)for(let g=0;g<i.length-2;g++)s.push(1);else for(let g=0;g<i.length-2;g++)s.push(Gs.adjustPadAndReturnShape(i[g+2],o[g],d[g],u[g],h,g,g+i.length-2,m))}static adjustPadAndReturnShape(r,i,s,o,d,u,h,m){let g=s*(o-1)+1;if(m&&m!=="NOTSET")switch(m){case"VALID":return d[u]=0,d[h]=0,Math.floor((r-g)/i+1);case"SAME_LOWER":case"SAME_UPPER":if(s!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let _=((r+i-1)/i-1)*i+o-r;return d[u]=Math.floor(m==="SAME_LOWER"?(_+1)/2:_/2),d[h]=_-d[u],Math.floor((r+_-o)/i+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((r+d[u]+d[h]-g)/i+1)}},d0=class{static getShapeOfGemmResult(e,r,i,s,o){if(e.length!==2||i.length!==2)throw new Error("shape need to be of size 2");let d,u,h;r?(d=e[1],u=e[0]):(d=e[0],u=e[1]);let m=-1;if(s?(h=i[0],m=1):(h=i[1],m=0),i[m]!==u)throw new Error("dimension mismatch");if(d<=0||h<=0||u<=0)throw new Error("invalid shape specified");if(o&&!za.isValidBroadcast(o,[d,h]))throw new Error("gemm: invalid bias shape for broadcast");return[d,h,u]}},c0=-34028234663852886e22,f0=34028234663852886e22}),Aa,Ou,yt,Rt,he,ft,Tc,Ia,Vr,ge,Pu,Y,we,rf,Mh,p0,Ys,Pe=ne(()=>{ze(),Oe(),Aa=64,Ou=(e,r)=>{if(r===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(e){case 10:return r>1?`vec${r}<f16>`:"f16";case 1:return r>1?`vec${r}<f32>`:"f32";case 6:return r>1?`vec${r}<i32>`:"i32";case 12:return r>1?`vec${r}<u32>`:"u32";case 7:if(r>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(r>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(r!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},yt=(e,r=1)=>{let i=Ou(e,r);return typeof i=="string"?i:i[0]},Rt=(e,r=1)=>{let i=Ou(e,r);return typeof i=="string"?i:i[1]},he=(...e)=>{let r=[];return e.forEach(i=>{i.length!==0&&r.push({type:12,data:i},{type:12,data:K.computeStrides(i)})}),r},ft=e=>e%4===0?4:e%2===0?2:1,Tc=(e="f32",r,i="0")=>!r||r===1?`${e}(${i})`:`vec${r}<${e}>(${i})`,Ia=(e,r,i)=>e==="f32"?i:r===1?`f32(${i})`:`vec${r}<f32>(${i})`,Vr=(e,r)=>r===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:r===2?`(${e}.x + ${e}.y)`:r===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ge=(e,r,i,s)=>e.startsWith("uniforms.")&&i>4?typeof r=="string"?s==="f16"?`${e}[(${r}) / 8][(${r}) % 8 / 4][(${r}) % 8 % 4]`:`${e}[(${r}) / 4][(${r}) % 4]`:s==="f16"?`${e}[${Math.floor(r/8)}][${Math.floor(r%8/4)}][${r%8%4}]`:`${e}[${Math.floor(r/4)}][${r%4}]`:i>1?`${e}[${r}]`:e,Pu=(e,r,i,s,o)=>{let d=typeof i=="number",u=d?i:i.length,h=[...new Array(u).keys()],m=u<2?"u32":u<=4?`vec${u}<u32>`:`array<u32, ${u}>`,g=Ou(r,o),_=typeof g=="string"?g:g[1],w=typeof g=="string"?g:g[0],f={indices:m,value:_,storage:w,tensor:r},b=A=>typeof A=="string"?A:`${A}u`,S={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},x=d?"uniforms.":"",T=`${x}${e}_shape`,z=`${x}${e}_strides`,C="";for(let A=0;A<u-1;A++)C+=`
    let dim${A} = current / ${ge(z,A,u)};
    let rest${A} = current % ${ge(z,A,u)};
    indices[${A}] = dim${A};
    current = rest${A};
    `;C+=`indices[${u-1}] = current;`;let O=u<2?"":`
  fn o2i_${e}(offset: u32) -> ${f.indices} {
    var indices: ${f.indices};
    var current = offset;
    ${C}
    return indices;
  }`,R=A=>(S.offsetToIndices=!0,u<2?A:`o2i_${e}(${A})`),M=[];if(u>=2)for(let A=u-1;A>=0;A--)M.push(`${ge(z,A,u)} * (indices[${A}])`);let F=u<2?"":`
  fn i2o_${e}(indices: ${f.indices}) -> u32 {
    return ${M.join("+")};
  }`,U=A=>(S.indicesToOffset=!0,u<2?A:`i2o_${e}(${A})`),Q=(...A)=>u===0?"0u":`${f.indices}(${A.map(b).join(",")})`,se=(A,N)=>u<2?`${A}`:`${ge(A,N,u)}`,ue=(A,N,ie)=>u<2?`${A}=${ie};`:`${ge(A,N,u)}=${ie};`,Se={},xe=(A,N)=>{S.broadcastedIndicesToOffset=!0;let ie=`${N.name}broadcastedIndicesTo${e}Offset`;if(ie in Se)return`${ie}(${A})`;let ce=[];for(let Ee=u-1;Ee>=0;Ee--){let Ce=N.indicesGet("outputIndices",Ee+N.rank-u);ce.push(`${se(z,Ee)} * (${Ce} % ${se(T,Ee)})`)}return Se[ie]=`fn ${ie}(outputIndices: ${N.type.indices}) -> u32 {
             return ${ce.length>0?ce.join("+"):"0u"};
           }`,`${ie}(${A})`},de=(A,N)=>(()=>{if(f.storage===f.value)return`${e}[${A}]=${N};`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`${e}[${A}]=vec2<u32>(u32(${N}), select(0u, 0xFFFFFFFFu, ${N} < 0));`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`${e}[${A}]=vec2<u32>(u32(${N}), 0u);`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`${e}[${A}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${N}));`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),Re=A=>(()=>{if(f.storage===f.value)return`${e}[${A}]`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`i32(${e}[${A}].x)`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`u32(${e}[${A}].x)`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${A}] & 0xFFu), bool(${e}[${A}] & 0xFF00u), bool(${e}[${A}] & 0xFF0000u), bool(${e}[${A}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),De=u<2?"":`
  fn get_${e}ByIndices(indices: ${f.indices}) -> ${_} {
    return ${Re(`i2o_${e}(indices)`)};
  }`,be=u<2?"":(()=>{let A=h.map(ie=>`d${ie}: u32`).join(", "),N=h.map(ie=>`d${ie}`).join(", ");return`
  fn get_${e}(${A}) -> ${_} {
    return get_${e}ByIndices(${Q(N)});
  }`})(),ke=(...A)=>{if(A.length!==u)throw new Error(`indices length must be ${u}`);let N=A.map(b).join(",");return u===0?Re("0u"):u===1?Re(N[0]):(S.get=!0,S.getByIndices=!0,S.indicesToOffset=!0,`get_${e}(${N})`)},q=A=>u<2?Re(A):(S.getByIndices=!0,S.indicesToOffset=!0,`get_${e}ByIndices(${A})`),X=u<2?"":`
  fn set_${e}ByIndices(indices: ${f.indices}, value: ${_}) {
    ${de(`i2o_${e}(indices)`,"value")}
  }`,J=u<2?"":(()=>{let A=h.map(ie=>`d${ie}: u32`).join(", "),N=h.map(ie=>`d${ie}`).join(", ");return`
  fn set_${e}(${A}, value: ${_}) {
    set_${e}ByIndices(${Q(N)}, value);
  }`})();return{impl:()=>{let A=[],N=!1;return S.offsetToIndices&&(A.push(O),N=!0),S.indicesToOffset&&(A.push(F),N=!0),S.broadcastedIndicesToOffset&&(Object.values(Se).forEach(ie=>A.push(ie)),N=!0),S.set&&(A.push(J),N=!0),S.setByIndices&&(A.push(X),N=!0),S.get&&(A.push(be),N=!0),S.getByIndices&&(A.push(De),N=!0),!d&&N&&A.unshift(`const ${T} = ${f.indices}(${i.join(",")});`,`const ${z} = ${f.indices}(${K.computeStrides(i).join(",")});`),A.join(`
`)},type:f,offsetToIndices:R,indicesToOffset:U,broadcastedIndicesToOffset:xe,indices:Q,indicesGet:se,indicesSet:ue,set:(...A)=>{if(A.length!==u+1)throw new Error(`indices length must be ${u}`);let N=A[u];if(typeof N!="string")throw new Error("value must be string");let ie=A.slice(0,u).map(b).join(",");return u===0?de("0u",N):u===1?de(ie[0],N):(S.set=!0,S.setByIndices=!0,S.indicesToOffset=!0,`set_${e}(${ie}, ${N})`)},setByOffset:de,setByIndices:(A,N)=>u<2?de(A,N):(S.setByIndices=!0,S.indicesToOffset=!0,`set_${e}ByIndices(${A}, ${N});`),get:ke,getByOffset:Re,getByIndices:q,usage:s,name:e,strides:z,shape:T,rank:u}},Y=(e,r,i,s=1)=>Pu(e,r,i,"input",s),we=(e,r,i,s=1)=>Pu(e,r,i,"output",s),rf=(e,r,i,s=1)=>Pu(e,r,i,"internal",s),Mh=class{constructor(e,r){this.normalizedDispatchGroup=e,this.limits=r,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Aa){let r=typeof e=="number"?e:e[0],i=typeof e=="number"?1:e[1],s=typeof e=="number"?1:e[2];if(r>this.limits.maxComputeWorkgroupSizeX||i>this.limits.maxComputeWorkgroupSizeY||s>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${r}, ${i}, ${s}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(r*i*s>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${r}, ${i}, ${s}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let o=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,d=o?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,u=o?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${r*i*s}u + local_idx;`;return`@compute @workgroup_size(${r}, ${i}, ${s})
  fn main(${d}) {
    ${u}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,r){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let i=e.usage==="input"?"read":"read_write",s=e.type.storage;return`@group(0) @binding(${r}) var<storage, ${i}> ${e.name}: array<${s}>;`}declareVariables(...e){return e.map(r=>this.declareVariable(r,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(r=>this.registerInternalVariable(r)),this}registerUniform(e,r,i=1){return this.uniforms.push({name:e,type:r,length:i}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:r,type:i,length:s}of this.uniforms)if(s&&s>4)i==="f16"?e.push(`@align(16) ${r}:array<mat2x4<${i}>, ${Math.ceil(s/8)}>`):e.push(`${r}:array<vec4<${i}>, ${Math.ceil(s/4)}>`);else{let o=s==null||s===1?i:`vec${s}<${i}>`;e.push(`${r}:${o}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=r=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(r)];return this.uniforms.map(r=>[e(r.type),r.length??1])}},p0=(e,r)=>new Mh(e,r),Ys=(e,r)=>{let i=e.length,s=[];for(let o=0;o<i;o++){let d=i-1-o,u=e[d]||1;(r[r.length-1-o]||1)>1&&u===1&&s.unshift(d)}return s}}),Bh,Kd,Dh,Nh,Lh,un,h0,m0,Kr=ne(()=>{ze(),Oe(),mt(),Pe(),Bh=e=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.")},Kd=(e,r)=>r&&r.length!==e?[...new Array(e).keys()].reverse():r,Dh=(e,r)=>K.sortBasedOnPerm(e,Kd(e.length,r)),Nh=(e,r,i,s)=>{let o=`fn perm(i: ${s.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`;for(let d=0;d<r;++d)o+=i.indicesSet("a",e[d],`i[${d}]`);return o+="return a;}"},Lh=(e,r)=>{let i=[],s=[];for(let o=0;o<e.length;++o)e[o]!==1&&i.push(e[o]),e[r[o]]!==1&&s.push(r[o]);return{newShape:i,newPerm:s}},un=(e,r)=>{let i=e.dataType,s=e.dims.length,o=Kd(s,r),d=Dh(e.dims,o),{newShape:u,newPerm:h}=Lh(e.dims,o),m=K.areEqual(h,[2,3,1]),g=K.areEqual(h,[3,1,2]),_=u.length===2&&h[0]>h[1]||m||g,w=_?u:e.dims,f=d;_&&(w=m?[u[0],u[1]*u[2]]:g?[u[0]*u[1],u[2]]:u,f=[w[1],w[0]]);let b=Y("a",i,w.length),S=we("output",i,f.length),x=16,T;return _?T=z=>`
  ${z.registerUniform("output_size","u32").declareVariables(b,S)}
  var<workgroup> tile : array<array<${S.type.value}, ${x+1}>, ${x}>;
  ${z.mainStart([x,x,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${x} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${x}u + local_id.x;
    let input_row = workgroup_id_x * ${x}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${b.getByIndices(`${b.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${x}u + local_id.x;
    let output_row = workgroup_id_y * ${x}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${S.setByIndices(`${S.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`:T=z=>`
  ${z.registerUniform("output_size","u32").declareVariables(b,S)}

  ${Nh(o,s,b,S)}

  ${z.mainStart()}
    ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`,{name:_?"TransposeShared":"Transpose",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>{let z=K.size(d);return{outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:_?{x:Math.ceil(f[1]/x),y:Math.ceil(f[0]/x)}:{x:Math.ceil(z/64)},programUniforms:[{type:12,data:z},...he(w,f)]}},getShaderSource:T}},h0=(e,r)=>{Bh(e.inputs),e.compute(un(e.inputs[0],r.perm))},m0=e=>Ze({perm:e.perm})}),Uh,jh,Wh,Fh,Vh,Hh,qh,Gh,Kh,Qh,In,g0,y0,v0,w0,_0,$0,x0,b0,S0,k0,O_=ne(()=>{ze(),Oe(),Pe(),af(),Kr(),Uh={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},jh={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Wh={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Fh={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Vh=(e,r)=>{let i=[];for(let s=r-e;s<r;++s)i.push(s);return i},Hh=(e,r)=>{let i=[],s=e.length;for(let d=0;d<s;d++)r.indexOf(d)===-1&&i.push(e[d]);let o=r.map(d=>e[d]);return[i,o]},qh=(e,r)=>{let i=e.length+r.length,s=[],o=0;for(let d=0;d<i;d++)r.indexOf(d)===-1?s.push(e[o++]):s.push(1);return s},Gh=(e,r)=>{for(let i=0;i<e.length;++i)if(e[e.length-i-1]!==r-1-i)return!1;return!0},Kh=(e,r)=>{let i=[];if(!Gh(e,r)){for(let s=0;s<r;++s)e.indexOf(s)===-1&&i.push(s);e.forEach(s=>i.push(s))}return i},Qh=(e,r,i,s,o,d,u)=>{let h=i[0].dims,m=K.size(d),g=K.size(u),_=Y("_A",i[0].dataType,h),w=we("output",o,d),f=32,b=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `;return{name:e,shaderCache:r,getShaderSource:S=>`
        ${S.registerUniform("reduceSize","u32").declareVariables(_,w)}
        ${b}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${S.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Wh[s]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${_.getByOffset("offset + k")});
           bestValue = ${Uh[s]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${jh[s]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${w.setByOffset("outputIndex",`${s==="mean"?`${w.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${w.type.storage}(${Fh[s]})`}`)};
         }
        }`,getRunData:()=>({outputs:[{dims:d,dataType:o}],dispatchGroup:{x:m},programUniforms:[{type:12,data:g}]})}},In=(e,r,i,s)=>{let o=e.inputs.length===1?i:Ic(e.inputs,i),d=o.axes;d.length===0&&!o.noopWithEmptyAxes&&(d=e.inputs[0].dims.map((b,S)=>S));let u=K.normalizeAxes(d,e.inputs[0].dims.length),h=u,m=e.inputs[0],g=Kh(h,e.inputs[0].dims.length);g.length>0&&(m=e.compute(un(e.inputs[0],g),{inputs:[0],outputs:[-1]})[0],h=Vh(h.length,m.dims.length));let[_,w]=Hh(m.dims,h),f=_;o.keepDims&&(f=qh(_,u)),e.compute(Qh(r,{hint:o.cacheKey,inputDependencies:["type"]},[m],s,e.inputs[0].dataType,f,w),{inputs:[m]})},g0=(e,r)=>{In(e,"ReduceMeanShared",r,"mean")},y0=(e,r)=>{In(e,"ReduceL1Shared",r,"l1")},v0=(e,r)=>{In(e,"ReduceL2Shared",r,"l2")},w0=(e,r)=>{In(e,"ReduceLogSumExpShared",r,"logSumExp")},_0=(e,r)=>{In(e,"ReduceMaxShared",r,"max")},$0=(e,r)=>{In(e,"ReduceMinShared",r,"min")},x0=(e,r)=>{In(e,"ReduceProdShared",r,"prod")},b0=(e,r)=>{In(e,"ReduceSumShared",r,"sum")},S0=(e,r)=>{In(e,"ReduceSumSquareShared",r,"sumSquare")},k0=(e,r)=>{In(e,"ReduceLogSumShared",r,"logSum")}}),zn,Yh,Ku,Ic,An,Zh,Xh,Jh,em,tm,nm,rm,im,am,sm,Rn,E0,C0,T0,I0,z0,A0,R0,O0,P0,M0,af=ne(()=>{ze(),Oe(),mt(),Pe(),O_(),zn=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Yh=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Ku=(e,r,i,s,o,d,u=!1,h=!1)=>{let m=[],g=i[0].dims,_=g.length,w=K.normalizeAxes(o,_),f=!h&&w.length===0;g.forEach((x,T)=>{f||w.indexOf(T)>=0?u&&m.push(1):m.push(x)});let b=m.length,S=K.size(m);return{name:e,shaderCache:r,getShaderSource:x=>{let T=[],z=Y("_A",i[0].dataType,_),C=we("output",d,b),O=s(z,C,w),R=O[2];for(let M=0,F=0;M<_;M++)f||w.indexOf(M)>=0?(u&&F++,R=`for(var j${M}: u32 = 0; j${M} < ${g[M]}; j${M}++) {
                  ${O[2].includes("last_index")?`let last_index = j${M};`:""}
                  ${z.indicesSet("input_indices",M,`j${M}`)}
                  ${R}
                }`):(T.push(`${z.indicesSet("input_indices",M,C.indicesGet("output_indices",F))};`),F++);return`

        ${x.registerUniform("output_size","u32").declareVariables(z,C)}

        ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${z.type.indices};
          let output_indices = ${C.offsetToIndices("global_idx")};

          ${T.join(`
`)}
          ${O[0]}       // init ops for reduce max/min
          ${O[1]}
          ${R}
          ${O[3]}
          ${O.length===4?C.setByOffset("global_idx","value"):O.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:m,dataType:d}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:[{type:12,data:S},...he(g,m)]})}},Ic=(e,r)=>{let i=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(s=>i.push(Number(s))),Ze({axes:i,keepDims:r.keepDims,noopWithEmptyAxes:r.noopWithEmptyAxes})},An=(e,r,i,s)=>{let o=e.inputs,d=o.length===1?i:Ic(o,i);e.compute(Ku(r,{hint:d.cacheKey,inputDependencies:["rank"]},[o[0]],d.noopWithEmptyAxes&&d.axes.length===0?Yh:s,d.axes,o[0].dataType,d.keepDims,d.noopWithEmptyAxes),{inputs:[0]})},Zh=(e,r)=>{zn(e.inputs),An(e,"ReduceLogSum",r,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += ${i.getByIndices("input_indices")};`,"value = log(value);"])},Xh=(e,r)=>{zn(e.inputs),An(e,"ReduceL1",r,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += abs(${i.getByIndices("input_indices")});`,""])},Jh=(e,r)=>{zn(e.inputs),An(e,"ReduceL2",r,(i,s)=>[`var t = ${s.type.value}(0); var value = ${s.type.value}(0);`,"",`t = ${i.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},em=(e,r)=>{zn(e.inputs),An(e,"ReduceLogSumExp",r,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += exp(${i.getByIndices("input_indices")});`,"value = log(value);"])},tm=(e,r)=>{zn(e.inputs),An(e,"ReduceMax",r,(i,s,o)=>{let d=[];for(let u=0;u<i.rank;u++)(o.indexOf(u)>=0||o.length===0)&&d.push(i.indicesSet("input_indices",u,0));return[`${d.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};`,`value = max(value, ${i.getByIndices("input_indices")});`,""]})},nm=(e,r)=>{zn(e.inputs),An(e,"ReduceMean",r,(i,s,o)=>{let d=1;for(let u=0;u<i.rank;u++)(o.indexOf(u)>=0||o.length===0)&&(d*=e.inputs[0].dims[u]);return["var sum = f32(0);","",`sum += f32(${i.getByIndices("input_indices")});`,`let value = ${s.type.value}(sum / ${d});`]})},rm=(e,r)=>{zn(e.inputs),An(e,"ReduceMin",r,(i,s,o)=>{let d=[];for(let u=0;u<i.rank;u++)(o.indexOf(u)>=0||o.length===0)&&d.push(`input_indices[${u}] = 0;`);return[`${d.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};`,`value = min(value, ${i.getByIndices("input_indices")});`,""]})},im=(e,r)=>{zn(e.inputs),An(e,"ReduceProd",r,(i,s)=>[`var value = ${s.type.storage}(1);`,"",`value *= ${i.getByIndices("input_indices")};`,""])},am=(e,r)=>{zn(e.inputs),An(e,"ReduceSum",r,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += ${i.getByIndices("input_indices")};`,""])},sm=(e,r)=>{zn(e.inputs),An(e,"ReduceSumSquare",r,(i,s)=>[`var t = ${s.type.value}(0); var value = ${s.type.value}(0);`,"",`t = ${i.getByIndices("input_indices")}; value += t * t;`,""])},Rn=(e,r,i)=>{if(r.length===0)return i;let s=1,o=1;for(let d=0;d<r.length;d++)r.indexOf(d)===-1?s*=e[d]:o*=e[d];return o<32&&s>1024},E0=(e,r)=>{Rn(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?nm(e,r):g0(e,r)},C0=(e,r)=>{Rn(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?Xh(e,r):y0(e,r)},T0=(e,r)=>{Rn(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?Jh(e,r):v0(e,r)},I0=(e,r)=>{Rn(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?em(e,r):w0(e,r)},z0=(e,r)=>{Rn(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?tm(e,r):_0(e,r)},A0=(e,r)=>{Rn(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?rm(e,r):$0(e,r)},R0=(e,r)=>{Rn(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?im(e,r):x0(e,r)},O0=(e,r)=>{Rn(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?am(e,r):b0(e,r)},P0=(e,r)=>{Rn(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?sm(e,r):S0(e,r)},M0=(e,r)=>{Rn(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?Zh(e,r):k0(e,r)}}),Qd,B0,D0,zc,P_=ne(()=>{ze(),mt(),af(),Qd=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},B0=(e,r)=>{Qd(e.inputs);let i=(s,o,d)=>{let u=[];for(let h=0;h<s.rank;h++)(d.indexOf(h)>=0||d.length===0)&&u.push(`input_indices[${h}] = 0;`);return[`${u.join(`
`)}`,`var value = ${s.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${s.getByIndices("input_indices")} ${r.selectLastIndex>0?"<=":"<"} value) {
         value = ${s.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",o.setByOffset("global_idx","best_index")]};e.compute(Ku("ArgMin",{hint:r.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[r.axis],7,r.keepDims),{inputs:[0]})},D0=(e,r)=>{Qd(e.inputs);let i=(s,o,d)=>{let u=[];for(let h=0;h<s.rank;h++)(d.indexOf(h)>=0||d.length===0)&&u.push(`input_indices[${h}] = 0;`);return[`${u.join(`
`)}`,`var value = ${s.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${s.getByIndices("input_indices")} ${r.selectLastIndex>0?">=":">"} value) {
         value = ${s.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",o.setByOffset("global_idx","best_index")]};e.compute(Ku("argMax",{hint:r.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[r.axis],7,r.keepDims),{inputs:[0]})},zc=e=>Ze(e)}),om,um,lm,dm,Zs,cm,N0,sf=ne(()=>{ze(),Oe(),nf(),Pe(),om=(e,r)=>{let i=e[0],s=e[1],o=e[2],d=e[3],u=e[4],h=e[5];if(u&&h)throw new Error("Attention cannot have both past and attention_bias");if(i.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let m=i.dims[0],g=i.dims[1],_=i.dims[2];if(o.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(s.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(s.dims[0]!==_)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(o.dims[0]!==s.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let w=o.dims[0]/3,f=w,b=f;if(r.qkvHiddenSizes.length>0){if(r.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let O of r.qkvHiddenSizes)if(O%r.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");w=r.qkvHiddenSizes[0],f=r.qkvHiddenSizes[1],b=r.qkvHiddenSizes[2]}let S=g;if(w!==f)throw new Error("qkv_hidden_sizes first element should be same as the second");if(o.dims[0]!==w+f+b)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let x=0;if(u){if(f!==b)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(u.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(u.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(u.dims[1]!==m)throw new Error('Input "past" second dimension must be batch_size');if(u.dims[2]!==r.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(u.dims[4]!==f/r.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');r.pastPresentShareBuffer||(x=u.dims[3])}let T=S+x,z=-1,C=0;if(d)throw new Error("Mask not supported");if(u)throw new Error("past is not supported");if(h){if(h.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(h.dims[0]!==m||h.dims[1]!==r.numHeads||h.dims[2]!==g||h.dims[3]!==T)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:m,sequenceLength:g,pastSequenceLength:x,kvSequenceLength:S,totalSequenceLength:T,maxSequenceLength:z,inputHiddenSize:_,hiddenSize:w,vHiddenSize:b,headSize:Math.floor(w/r.numHeads),vHeadSize:Math.floor(b/r.numHeads),numHeads:r.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:r.maskFilterValue,maskType:C,scale:r.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},um=(e,r,i)=>{let s=ft(i),o=64,d=i/s;d<o&&(o=32);let u=Math.ceil(i/s/o),h=[{type:1,data:1/i},{type:12,data:d},{type:12,data:u}],m=yt(e.dataType,s),g=Rt(1,s),_=["type"],w=f=>{let b=we("x",e.dataType,e.dims,s),S=Rt(e.dataType),x=[{name:"d_inv",type:"f32"},{name:"d_comp",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${o}>;
  var<workgroup> thread_sum: array<f32, ${o}>;
  ${f.registerUniforms(x).declareVariables(b)}
  ${f.mainStart([o,1,1])}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${o}) * uniforms.d_comp + local_offset;

    var thread_max_vector = ${g}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
      thread_max_vector = max(${g}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(s){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${s}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${o}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${g}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
      sum_vector += exp(${g}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(s){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${s}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${o}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
        x[offset + i] = ${b.type.value}(${S}(uniforms.d_inv));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
        var f32input = ${g}(x[offset + i]);
        x[offset + i] = ${b.type.value}(exp(f32input - max_value) / sum);
      }
    }
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${o};${m};${s}`,inputDependencies:_},getShaderSource:w,getRunData:()=>({outputs:[],dispatchGroup:{x:r},programUniforms:h})}},lm=(e,r,i,s,o,d,u,h)=>{let m=h+d.kvSequenceLength,g=[d.batchSize,d.numHeads,d.sequenceLength,m],_=d.kvNumHeads===void 0&&e>1&&s,w=_?[d.batchSize,d.numHeads,m,d.headSize]:void 0,f=u.scale===0?1/Math.sqrt(d.headSize):u.scale,b=ft(d.headSize),S=d.headSize/b,x=12,T={x:Math.ceil(m/x),y:Math.ceil(d.sequenceLength/x),z:d.batchSize*d.numHeads},z=[{type:12,data:d.sequenceLength},{type:12,data:S},{type:12,data:m},{type:12,data:d.numHeads},{type:1,data:f},{type:12,data:h},{type:12,data:d.kvSequenceLength}],C=_&&s&&K.size(s.dims)>0,O=["type","type"];C&&O.push("type"),o&&O.push("type");let R=[{dims:g,dataType:r.dataType,gpuDataType:0}];_&&R.push({dims:w,dataType:r.dataType,gpuDataType:0});let M=F=>{let U=Y("q",r.dataType,r.dims,b),Q=Y("key",i.dataType,i.dims,b),se=[U,Q];if(C){let Re=Y("past_key",s.dataType,s.dims,b);se.push(Re)}o&&se.push(Y("attention_bias",o.dataType,o.dims));let ue=we("output",r.dataType,g),Se=[ue];_&&Se.push(we("present_key",r.dataType,w,b));let xe=Rt(1,b),de=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"}];return`
  const TILE_SIZE = ${x}u;

  var<workgroup> tileQ: array<${U.type.storage}, ${x*x}>;
  var<workgroup> tileK: array<${U.type.storage}, ${x*x}>;
  ${F.registerUniforms(de).declareVariables(...se,...Se)}
  ${F.mainStart([x,x,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let qOffset = uniforms.M * uniforms.K * headIdx + m * uniforms.K;
    ${C&&_?`
    let kOffset = uniforms.kv_sequence_length * uniforms.K * headIdx;
    let pastKeyOffset = uniforms.past_sequence_length * uniforms.K * headIdx;`:`
    let kOffset = uniforms.N * uniforms.K * headIdx + n * uniforms.K;`}
    ${_?"let presentKeyOffset = headIdx * uniforms.N * uniforms.K;":""}
    var value = ${xe}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${C&&_?`
              if (n + local_id.y < uniforms.past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else {
                tileK[idx] =
                         key[kOffset + (n + local_id.y - uniforms.past_sequence_length) * uniforms.K + w + local_id.x];
              }`:"tileK[idx] = key[kOffset + local_id.y * uniforms.K + w + local_id.x];"}
      ${_?"present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];":""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
        value += ${xe}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    let headOffset = headIdx * uniforms.M * uniforms.N;
    if (global_id.y < uniforms.M && global_id.x < uniforms.N) {
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(b){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${b}`)}})()};
        output[outputIdx] = ${ue.type.value} (sum * uniforms.alpha) + ${o?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${b};${o!==void 0};${s!==void 0};${e}`,inputDependencies:O},getRunData:()=>({outputs:R,dispatchGroup:T,programUniforms:z}),getShaderSource:M}},dm=(e,r,i,s,o,d)=>{let u=d+o.kvSequenceLength,h=o.nReps?o.nReps:1,m=o.vHiddenSize*h,g=o.kvNumHeads==null&&e>1&&s,_=g?[o.batchSize,o.numHeads,u,o.headSize]:void 0,w=[o.batchSize,o.sequenceLength,m],f=12,b={x:Math.ceil(o.vHeadSize/f),y:Math.ceil(o.sequenceLength/f),z:o.batchSize*o.numHeads},S=[{type:12,data:o.sequenceLength},{type:12,data:u},{type:12,data:o.vHeadSize},{type:12,data:o.numHeads},{type:12,data:m},{type:12,data:d},{type:12,data:o.kvSequenceLength}],x=g&&s&&K.size(s.dims)>0,T=["type","type"];x&&T.push("type");let z=[{dims:w,dataType:r.dataType,gpuDataType:0}];g&&z.push({dims:_,dataType:r.dataType,gpuDataType:0});let C=O=>{let R=Y("probs",r.dataType,r.dims),M=Y("v",i.dataType,i.dims),F=[R,M];x&&F.push(Y("past_value",s.dataType,s.dims));let U=[we("output",r.dataType,w)];g&&U.push(we("present_value",r.dataType,_));let Q=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"}];return`
  const TILE_SIZE = ${f}u;
  var<workgroup> tileQ: array<${R.type.value}, ${f*f}>;
  var<workgroup> tileK: array<${R.type.value}, ${f*f}>;
  ${O.registerUniforms(Q).declareVariables(...F,...U)}
  ${O.mainStart([f,f,1])}
   let headIdx = workgroup_id.z;
   let m = global_id.y;
   let n = global_id.x;

   let offsetA = headIdx * (uniforms.M * uniforms.K) + m * uniforms.K;
   ${x&&g?`
    let pastValueOffset = headIdx * uniforms.N * uniforms.past_sequence_length + n;
    let vOffset = headIdx * uniforms.N * uniforms.kv_sequence_length + n;
      `:`
   let offsetB = headIdx * uniforms.N * uniforms.K + n;
            `}
    ${g?"let presentValueOffset = headIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${R.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${x&&g?`
        if (w + local_id.y < uniforms.past_sequence_length) {
          tileK[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else {
          tileK[idx] = v[vOffset + (w + local_id.y - uniforms.past_sequence_length) * uniforms.N];
        }
      `:`
        tileK[idx] = v[offsetB + (w + local_id.y) * uniforms.N];
      `}
        ${g?"present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileK[idx];":""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let currentBatchHeadNumber = workgroup_id.z % uniforms.num_heads;
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + currentBatchHeadNumber * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${s!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:z,dispatchGroup:b,programUniforms:S}),getShaderSource:C}},Zs=(e,r,i,s,o,d,u,h,m,g,_)=>{let w=Math.min(e.outputCount,1+(u?1:0)+(h?1:0)),f=g.kvNumHeads!==void 0||w>1?g.pastSequenceLength:0,b=f+g.kvSequenceLength,S=m&&K.size(m.dims)>0?m:void 0,x=[r,i];g.kvNumHeads===void 0&&w>1&&u&&K.size(u.dims)>0&&x.push(u),S&&x.push(S);let T=e.compute(lm(w,r,i,u,S,g,_,f),{inputs:x,outputs:g.kvNumHeads===void 0&&w>1?[-1,1]:[-1]})[0];e.compute(um(T,g.batchSize*g.numHeads*g.sequenceLength,b),{inputs:[T],outputs:[]});let z=[T,s];g.kvNumHeads===void 0&&w>1&&h&&K.size(h.dims)>0&&z.push(h),e.compute(dm(w,T,s,h,g,f),{inputs:z,outputs:g.kvNumHeads===void 0&&w>1?[0,2]:[0]})},cm=(e,r)=>{let i=[r.batchSize,r.numHeads,r.sequenceLength,r.headSize],s=r.sequenceLength,o=r.inputHiddenSize,d=r.headSize,u=12,h={x:Math.ceil(r.headSize/u),y:Math.ceil(r.sequenceLength/u),z:r.batchSize*r.numHeads},m=[e.inputs[0],e.inputs[1],e.inputs[2]],g=[{type:12,data:s},{type:12,data:o},{type:12,data:d},{type:12,data:r.numHeads},{type:12,data:r.headSize},{type:12,data:r.hiddenSize},{type:12,data:r.hiddenSize+r.hiddenSize+r.vHiddenSize}],_=w=>{let f=we("output_q",m[0].dataType,i),b=we("output_k",m[0].dataType,i),S=we("output_v",m[0].dataType,i),x=Y("input",m[0].dataType,m[0].dims),T=Y("weight",m[1].dataType,m[1].dims),z=Y("bias",m[2].dataType,m[2].dims),C=x.type.storage,O=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${u}u;
  var<workgroup> tileInput: array<${C}, ${u*u}>;
  var<workgroup> tileWeightQ: array<${C}, ${u*u}>;
  var<workgroup> tileWeightK: array<${C}, ${u*u}>;
  var<workgroup> tileWeightV: array<${C}, ${u*u}>;
  ${w.registerUniforms(O).declareVariables(x,T,z,f,b,S)}
  ${w.mainStart([u,u,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${C}(0);
    var valueK = ${C}(0);
    var valueV = ${C}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:h,programUniforms:g}),getShaderSource:_},{inputs:m,outputs:[-1,-1,-1]})},N0=(e,r)=>{let i=om(e.inputs,r),[s,o,d]=cm(e,i);return Zs(e,s,o,d,e.inputs[4],void 0,void 0,void 0,e.inputs[5],i,r)}}),fm,pm,hm,L0,M_=ne(()=>{Mn(),ze(),Oe(),mt(),Pe(),fm=(e,r)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let i=(s,o,d)=>{let u=o.length;if(u!==s.length)throw new Error(`${d}: num dimensions != ${u}`);o.forEach((h,m)=>{if(h!==s[m])throw new Error(`${d}: dim[${m}] do not match`)})};if(e[0].dims.length>1){let s=r.format==="NHWC"?r.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,r.spatial?2:void 0);i(e[1].dims,s,"Invalid input scale"),i(e[2].dims,s,"Invalid input B"),i(e[3].dims,s,"Invalid input mean"),i(e[4].dims,s,"Invalid input var")}else i(e[1].dims,[1],"Invalid input scale"),i(e[2].dims,[1],"Invalid input B"),i(e[3].dims,[1],"Invalid input mean"),i(e[4].dims,[1],"Invalid input var")},pm=(e,r)=>{let{epsilon:i,spatial:s,format:o}=r,d=e[0].dims,u=s?ft(d[d.length-1]):1,h=o==="NHWC"&&d.length>1?u:1,m=K.size(d)/u,g=s,_=g?d.length:d,w=Y("x",e[0].dataType,e[0].dims,u),f=Y("scale",e[1].dataType,e[1].dims,h),b=Y("bias",e[2].dataType,e[2].dims,h),S=Y("inputMean",e[3].dataType,e[3].dims,h),x=Y("inputVar",e[4].dataType,e[4].dims,h),T=we("y",e[0].dataType,_,u),z=()=>{let O="";if(s)O=`let cOffset = ${d.length===1?"0u":o==="NHWC"?`outputIndices[${d.length-1}] / ${u}`:"outputIndices[1]"};`;else if(o==="NCHW")O=`
            ${T.indicesSet("outputIndices","0","0")}
            let cOffset = ${T.indicesToOffset("outputIndices")};`;else{O=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${d.length-1}];`;for(let R=1;R<f.rank;R++)O+=`cIndices[${R}] = outputIndices[${R}];`;O+=`let cOffset = ${f.indicesToOffset("cIndices")};`}return O},C=O=>`
  const epsilon = ${i};
  ${O.registerUniform("outputSize","u32").declareVariables(w,f,b,S,x,T)}
  ${O.mainStart()}
  ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${T.offsetToIndices(`global_idx * ${u}`)};
    ${z()}
    let scale = ${f.getByOffset("cOffset")};
    let bias = ${b.getByOffset("cOffset")};
    let inputMean = ${S.getByOffset("cOffset")};
    let inputVar = ${x.getByOffset("cOffset")};
    let x = ${w.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${T.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${r.epsilon}_${r.format}_${s}_${u}`,inputDependencies:g?["rank","type","type","type","type"]:void 0},getShaderSource:C,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:g?[{type:12,data:m},...he(d)]:[{type:12,data:m}]})}},hm=e=>Ze(e),L0=(e,r)=>{let{inputs:i,outputCount:s}=e,o=hm({...r,outputCount:s});if(Je.webgpu.validateInputContent&&fm(i,o),r.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(pm(i,o))}}),mm,gm,U0,B_=ne(()=>{Oe(),Pe(),mm=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},gm=e=>{let r=e[0].dims,i=e[0].dims[2],s=K.size(r)/4,o=e[0].dataType,d=Y("input",o,r,4),u=Y("bias",o,[i],4),h=Y("residual",o,r,4),m=we("output",o,r,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:g=>`
  const channels = ${i}u / 4;
  ${g.declareVariables(d,u,h,m)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let value = ${d.getByOffset("global_idx")}
      + ${u.getByOffset("global_idx % channels")} + ${h.getByOffset("global_idx")};
    ${m.setByOffset("global_idx","value")}
  }`}},U0=e=>{mm(e.inputs),e.compute(gm(e.inputs))}}),ym,Ve,j0,W0,F0,V0,H0,q0,G0,K0,Q0,vm,Y0,Z0,X0,J0,Ks,ev,Wu,tv,nv,rv,iv,av,sv,ov,uv,lv,dv,cv,fv,pv,hv,mv,gv,Yd,yv,Ac,Rc,vv,wv,_v,wm,_m,$v,of=ne(()=>{ze(),Oe(),mt(),Pe(),ym=(e,r,i,s,o,d,u)=>{let h=Math.ceil(r/4),m="";typeof o=="string"?m=`${o}(a)`:m=o("a");let g=Y("inputData",i,[h],4),_=we("outputData",s,[h],4),w=[{name:"vec_size",type:"u32"}];return u&&w.push(...u),`
      ${e.registerUniforms(w).declareVariables(g,_)}

  ${d??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${g.getByOffset("global_idx")};
    ${_.setByOffset("global_idx",m)}
  }`},Ve=(e,r,i,s,o,d=e.dataType,u,h)=>{let m=[{type:12,data:Math.ceil(K.size(e.dims)/4)}];return u&&m.push(...u),{name:r,shaderCache:{hint:o,inputDependencies:["type"]},getShaderSource:g=>ym(g,K.size(e.dims),e.dataType,d,i,s,h),getRunData:g=>({outputs:[{dims:e.dims,dataType:d}],dispatchGroup:{x:Math.ceil(K.size(g[0].dims)/64/4)},programUniforms:m})}},j0=e=>{e.compute(Ve(e.inputs[0],"Abs","abs"))},W0=e=>{e.compute(Ve(e.inputs[0],"Acos","acos"))},F0=e=>{e.compute(Ve(e.inputs[0],"Acosh","acosh"))},V0=e=>{e.compute(Ve(e.inputs[0],"Asin","asin"))},H0=e=>{e.compute(Ve(e.inputs[0],"Asinh","asinh"))},q0=e=>{e.compute(Ve(e.inputs[0],"Atan","atan"))},G0=e=>{e.compute(Ve(e.inputs[0],"Atanh","atanh"))},K0=e=>Ze(e),Q0=(e,r)=>{let i;switch(r.to){case 10:i="vec4<f16>";break;case 1:i="vec4<f32>";break;case 12:i="vec4<u32>";break;case 6:i="vec4<i32>";break;case 9:i="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${r.to}`)}e.compute(Ve(e.inputs[0],"Cast",i,void 0,r.cacheKey,r.to))},vm=e=>{let r,i,s=e.length>=2&&e[1].data!==0,o=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:r=s?e[1].getFloat32Array()[0]:-34028234663852886e22,i=o?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:r=s?e[1].getUint16Array()[0]:64511,i=o?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Ze({min:r,max:i})},Y0=(e,r)=>{let i=r||vm(e.inputs),s=Rt(e.inputs[0].dataType);e.compute(Ve(e.inputs[0],"Clip",o=>`clamp(${o}, vec4<${s}>(uniforms.min), vec4<${s}>(uniforms.max))`,void 0,i.cacheKey,void 0,[{type:e.inputs[0].dataType,data:i.min},{type:e.inputs[0].dataType,data:i.max}],[{name:"min",type:s},{name:"max",type:s}]),{inputs:[0]})},Z0=e=>{e.compute(Ve(e.inputs[0],"Ceil","ceil"))},X0=e=>{e.compute(Ve(e.inputs[0],"Cos","cos"))},J0=e=>{e.compute(Ve(e.inputs[0],"Cosh","cosh"))},Ks=e=>Ze(e),ev=(e,r)=>{let i=Rt(e.inputs[0].dataType);e.compute(Ve(e.inputs[0],"Elu",s=>`elu_vf32(${s})`,`
  const elu_alpha_ = ${i}(${r.alpha});

  fn elu_f32(a: ${i}) -> ${i} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${i}>) -> vec4<${i}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,r.cacheKey))},Wu=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,tv=e=>{let r=Rt(e.inputs[0].dataType);e.compute(Ve(e.inputs[0],"Erf",i=>`erf_vf32(${i})`,Wu(r)))},nv=e=>{e.compute(Ve(e.inputs[0],"Exp","exp"))},rv=e=>{e.compute(Ve(e.inputs[0],"Floor","floor"))},iv=e=>{let r=Rt(e.inputs[0].dataType);e.compute(Ve(e.inputs[0],"Gelu",i=>`0.5 * ${i} * (1.0 + erf_vf32(${i} * 0.7071067811865475))`,Wu(r)))},av=(e,r)=>{let i=Rt(e.inputs[0].dataType);e.compute(Ve(e.inputs[0],"LeakyRelu",s=>`select(leaky_relu_alpha_ * ${s}, ${s}, ${s} >= vec4<${i}>(0.0))`,`const leaky_relu_alpha_ = ${i}(${r.alpha});`,r.cacheKey))},sv=e=>{e.compute(Ve(e.inputs[0],"Not",r=>`!${r}`))},ov=e=>{e.compute(Ve(e.inputs[0],"Neg",r=>`-${r}`))},uv=e=>{e.compute(Ve(e.inputs[0],"Reciprocal",r=>`1.0/${r}`))},lv=e=>{let r=Rt(e.inputs[0].dataType);e.compute(Ve(e.inputs[0],"Relu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > vec4<${r}>(0.0))`))},dv=e=>{e.compute(Ve(e.inputs[0],"Sigmoid",r=>`(1.0 / (1.0 + exp(-${r})))`))},cv=e=>Ze(e),fv=(e,r)=>{let i=Rt(e.inputs[0].dataType);e.compute(Ve(e.inputs[0],"HardSigmoid",s=>`max(vec4<${i}>(0.0), min(vec4<${i}>(1.0), ${r.alpha} * ${s} + vec4<${i}>(${r.beta})))`,void 0,r.cacheKey))},pv=e=>{e.compute(Ve(e.inputs[0],"Sin","sin"))},hv=e=>{e.compute(Ve(e.inputs[0],"Sinh","sinh"))},mv=e=>{e.compute(Ve(e.inputs[0],"Sqrt","sqrt"))},gv=e=>{e.compute(Ve(e.inputs[0],"Tan","tan"))},Yd=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,yv=e=>{e.compute(Ve(e.inputs[0],"Tanh",Yd))},Ac=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Yd("v")};
}
`,Rc=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,vv=e=>{let r=Rt(e.inputs[0].dataType);e.compute(Ve(e.inputs[0],"FastGelu",Rc,Ac(r),void 0,e.inputs[0].dataType))},wv=(e,r)=>{let i=Rt(e.inputs[0].dataType);return e.compute(Ve(e.inputs[0],"ThresholdedRelu",s=>`select(vec4<${i}>(0.0), ${s}, ${s} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${i}>(${r.alpha});`,r.cacheKey)),0},_v=e=>{e.compute(Ve(e.inputs[0],"Log","log"))},wm=(e,r)=>`
const alpha = vec4<${e}>(${r});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,_m=e=>`quick_gelu_impl(${e})`,$v=(e,r)=>{let i=Rt(e.inputs[0].dataType);e.compute(Ve(e.inputs[0],"QuickGelu",_m,wm(i,r.alpha),r.cacheKey,e.inputs[0].dataType))}}),$m,xm,xv,D_=ne(()=>{Oe(),Pe(),of(),$m=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},xm=e=>{let r=e[0].dims.slice();r[2]=r[2]/2;let i=Y("input",e[0].dataType,e[0].dims,4),s=Y("bias",e[0].dataType,[e[0].dims[2]],4),o=we("output",e[0].dataType,r,4),d=K.size(r)/4,u=yt(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)}}),getShaderSource:h=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${h.declareVariables(i,s,o)}

  ${Wu(u)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes(d)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${o.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},xv=e=>{$m(e.inputs),e.compute(xm(e.inputs))}}),bm,Sm,On,bv,Sv,kv,Ev,Cv,Tv,Iv,zv,Av,Rv,N_=ne(()=>{ze(),Oe(),Pe(),bm=(e,r,i,s,o,d,u,h,m,g,_,w)=>{let f,b;typeof h=="string"?f=b=(C,O)=>`${h}((${C}),(${O}))`:typeof h=="function"?f=b=h:(f=h.scalar,b=h.vector);let S=we("outputData",_,s.length,4),x=Y("aData",m,r.length,4),T=Y("bData",g,i.length,4),z;if(o)if(d){let C=K.size(r)===1,O=K.size(i)===1,R=r.length>0&&r[r.length-1]%4===0,M=i.length>0&&i[i.length-1]%4===0;C||O?z=S.setByOffset("global_idx",b(C?`${x.type.value}(${x.getByOffset("0")}.x)`:x.getByOffset("global_idx"),O?`${T.type.value}(${T.getByOffset("0")}.x)`:T.getByOffset("global_idx"))):z=`
            let outputIndices = ${S.offsetToIndices("global_idx * 4u")};
            let offsetA = ${x.broadcastedIndicesToOffset("outputIndices",S)};
            let offsetB = ${T.broadcastedIndicesToOffset("outputIndices",S)};
            ${S.setByOffset("global_idx",b(u||R?x.getByOffset("offsetA / 4u"):`${x.type.value}(${x.getByOffset("offsetA / 4u")}[offsetA % 4u])`,u||M?T.getByOffset("offsetB / 4u"):`${T.type.value}(${T.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else z=S.setByOffset("global_idx",b(x.getByOffset("global_idx"),T.getByOffset("global_idx")));else{if(!d)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let C=(O,R,M="")=>{let F=`aData[indexA${R}][componentA${R}]`,U=`bData[indexB${R}][componentB${R}]`;return`
            let outputIndices${R} = ${S.offsetToIndices(`global_idx * 4u + ${R}u`)};
            let offsetA${R} = ${x.broadcastedIndicesToOffset(`outputIndices${R}`,S)};
            let offsetB${R} = ${T.broadcastedIndicesToOffset(`outputIndices${R}`,S)};
            let indexA${R} = offsetA${R} / 4u;
            let indexB${R} = offsetB${R} / 4u;
            let componentA${R} = offsetA${R} % 4u;
            let componentB${R} = offsetB${R} % 4u;
            ${O}[${R}] = ${M}(${f(F,U)});
          `};_===9?z=`
            var data = vec4<u32>(0);
            ${C("data",0,"u32")}
            ${C("data",1,"u32")}
            ${C("data",2,"u32")}
            ${C("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:z=`
            ${C("outputData[global_idx]",0)}
            ${C("outputData[global_idx]",1)}
            ${C("outputData[global_idx]",2)}
            ${C("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(x,T,S)}

        ${w??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${z}
      }`},Sm=(e,r,i,s,o,d,u=i.dataType)=>{let h=!K.areEqual(i.dims,s.dims),m=i.dims,g=K.size(i.dims),_=!1,w=!1,f=[h];if(h){let b=za.calcShape(i.dims,s.dims,!1);if(!b)throw new Error("Can't perform binary op on the given tensors");m=b,g=K.size(m);let S=K.size(i.dims)===1,x=K.size(s.dims)===1,T=i.dims.length>0&&i.dims[i.dims.length-1]%4===0,z=s.dims.length>0&&s.dims[s.dims.length-1]%4===0;f.push(S),f.push(x),f.push(T),f.push(z);let C=1;for(let O=1;O<m.length;O++){let R=i.dims[i.dims.length-O]??1,M=s.dims[s.dims.length-O]??1;if(R===M)C*=R;else break}C%4===0?(w=!0,_=!0):(S||x||T||z)&&(_=!0)}else _=!0;return f.push(_),{name:e,shaderCache:{hint:r+f.map(b=>b.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:b=>bm(b,i.dims,s.dims,m,_,h,w,o,i.dataType,s.dataType,u,d),getRunData:()=>({outputs:[{dims:m,dataType:u}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(K.size(m)/4)},...he(i.dims,s.dims,m)]})}},On=(e,r,i,s,o,d)=>{e.compute(Sm(r,o??"",e.inputs[0],e.inputs[1],i,s,d))},bv=e=>{On(e,"Add",(r,i)=>`${r}+${i}`)},Sv=e=>{On(e,"Div",(r,i)=>`${r}/${i}`)},kv=e=>{On(e,"Equal",{scalar:(r,i)=>`u32(${r}==${i})`,vector:(r,i)=>`vec4<u32>(${r}==${i})`},void 0,void 0,9)},Ev=e=>{On(e,"Mul",(r,i)=>`${r}*${i}`)},Cv=e=>{let r=Y("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;On(e,"Pow",{scalar:(i,s)=>`pow_custom(${i},${s})`,vector:(i,s)=>`pow_vector_custom(${i},${s})`},`
    fn pow_custom(a : ${r}, b : ${r}) -> ${r} {
      if (b == ${r}(0.0)) {
        return ${r}(1.0);
      } else if (a < ${r}(0.0) && f32(b) != floor(f32(b))) {
        return ${r}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${r}(1.0), round(f32(abs(b) % ${r}(2.0))) != 1.0) * ${r}(${r==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${r}>, b : vec4<${r}>) -> vec4<${r}> {
      // TODO: implement vectorized pow
      return vec4<${r}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Tv=e=>{On(e,"Sub",(r,i)=>`${r}-${i}`)},Iv=e=>{On(e,"Greater",{scalar:(r,i)=>`u32(${r}>${i})`,vector:(r,i)=>`vec4<u32>(${r}>${i})`},void 0,void 0,9)},zv=e=>{On(e,"Less",{scalar:(r,i)=>`u32(${r}<${i})`,vector:(r,i)=>`vec4<u32>(${r}<${i})`},void 0,void 0,9)},Av=e=>{On(e,"GreaterOrEqual",{scalar:(r,i)=>`u32(${r}>=${i})`,vector:(r,i)=>`vec4<u32>(${r}>=${i})`},void 0,void 0,9)},Rv=e=>{On(e,"LessOrEqual",{scalar:(r,i)=>`u32(${r}<=${i})`,vector:(r,i)=>`vec4<u32>(${r}<=${i})`},void 0,void 0,9)}}),km,Em,Cm,Tm,Ov,Pv,L_=ne(()=>{ze(),Oe(),mt(),Pe(),km=(e,r)=>{if(!e||e.length<1)throw new Error("too few inputs");let i=0,s=e[i],o=s.dataType,d=s.dims.length;e.forEach((u,h)=>{if(h!==i){if(u.dataType!==o)throw new Error("input tensors should be one type");if(u.dims.length!==d)throw new Error("input tensors should have the same shape");u.dims.forEach((m,g)=>{if(g!==r&&m!==s.dims[g])throw new Error("non concat dimensions must match")})}})},Em=(e,r)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${r});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Cm=(e,r)=>{let i=e.length,s=[];for(let o=0;o<i;++o){let d=r.setByOffset("global_idx",e[o].getByIndices("indices"));i===1?s.push(d):o===0?s.push(`if (inputIndex == ${o}u) { ${d} }`):o===i-1?s.push(`else { ${d} }`):s.push(`else if (inputIndex == ${o}) { ${d} }`)}return s.join(`
`)},Tm=(e,r,i,s)=>{let o=K.size(i),d=new Array(e.length),u=new Array(e.length),h=0,m=[],g=[],_=[{type:12,data:o}];for(let x=0;x<e.length;++x)h+=e[x].dims[r],d[x]=h,g.push(e[x].dims.length),u[x]=Y(`input${x}`,s,g[x]),m.push("rank"),_.push({type:12,data:d[x]});for(let x=0;x<e.length;++x)_.push(...he(e[x].dims));_.push(...he(i));let w=we("output",s,i.length),f=w.indicesGet("indices",r),b=Array.from(Array(d.length).keys()).map(x=>`uniforms.sizeInConcatAxis${x}`).join(","),S=x=>`

  ${(()=>{x.registerUniform("outputSize","u32");for(let T=0;T<e.length;T++)x.registerUniform(`sizeInConcatAxis${T}`,"u32");return x.declareVariables(...u,w)})()}

  ${Em(d.length,b)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${w.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${d.length}u>(${b});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Cm(u,w)}
  }`;return{name:"Concat",shaderCache:{hint:`${r}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:i,dataType:s}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:_}),getShaderSource:S}},Ov=(e,r)=>{let i=e.inputs,s=i[0].dims,o=K.normalizeAxis(r.axis,s.length);km(i,o);let d=s.slice();d[o]=i.reduce((h,m)=>h+(m.dims.length>o?m.dims[o]:0),0);let u=i.filter(h=>K.size(h.dims)>0);e.compute(Tm(u,o,d,i[0].dataType),{inputs:u})},Pv=e=>Ze({axis:e.axis})}),Hr,qr,Gr,uf,Qr=ne(()=>{ze(),Oe(),Hr=(e,r,i="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${r}(0.0));`;case"Sigmoid":return`value = (${r}(1.0) / (${r}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${r}(${i}(uniforms.clip_min)), ${r}(${i}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${r}(0.0), min(${r}(1.0), ${i}(uniforms.alpha) * value + ${i}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${i}(uniforms.alpha) * value, value, value >= ${r}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},qr=(e,r)=>{e.activation==="Clip"?r.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?r.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&r.push({type:1,data:e.alpha})},Gr=(e,r)=>{e.activation==="Clip"?r.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?r.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&r.push({name:"alpha",type:"f32"})},uf=e=>{let r=(e==null?void 0:e.activation)||"";if(r==="HardSigmoid"){let[i,s]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:r,alpha:i,beta:s}}else if(r==="Clip"){let[i,s]=(e==null?void 0:e.activation_params)||[c0,f0];return{activation:r,clipMax:s,clipMin:i}}else if(r==="LeakyRelu"){let[i]=(e==null?void 0:e.activation_params)||[.01];return{activation:r,alpha:i}}return{activation:r}}}),Ot,lf,Ju=ne(()=>{Ot=(e,r)=>{switch(e){case 1:return r;case 2:return`vec2<${r}>`;case 3:return`vec3<${r}>`;case 4:return`vec4<${r}>`;default:throw new Error(`${e}-component is not supported.`)}},lf=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),df,Mv=ne(()=>{df=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Im,zm,Qu,Zd,Am,Yu,Rm,cf,el=ne(()=>{ze(),Oe(),Pe(),Qr(),Ju(),Im=(e,r)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${r?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${r?", batchIndices":""});
        `,zm=(e,r)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${r===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${r===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${r===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Qu=(e,r,i="f32",s,o=!1,d=32,u=!1,h=32)=>{let m=r[1]*e[1],g=r[0]*e[0],_=o?m:d,w=o?d:m,f=_/r[0],b=d/r[1];if(!((o&&f===4&&e[1]===4||!o&&(f===3||f===4))&&_%r[0]===0&&d%r[1]===0&&e[0]===4))throw new Error(`If transposeA ${o} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${_} must be divisible by workgroupSize[0]${r[0]}. tileInner ${d} must be divisible by workgroupSize[1] ${r[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${i}>, ${_/f}>, ${w}>;
var<workgroup> mm_Bsub: array<array<vec4<${i}>, ${g/e[0]}>, ${d}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${f};
const tileInner = ${d};

@compute @workgroup_size(${r[0]}, ${r[1]}, ${r[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${u?"0":"i32(globalId.z)"};
  ${s?`let batchIndices = ${s.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${m};

  let num_tiles = ${u?`${Math.ceil(h/d)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${u?`i32(globalId.z) * ${h}`:"0"};

  var acc: array<vec4<${i}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${b};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Im(o,s)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${s?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${f===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${zm(o,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Zd=(e,r)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${r?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${r?", batchIndices":""});
            `,Am=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Yu=(e,r,i="f32",s,o=!1,d=32,u=!1,h=32,m=!1)=>{let g=e[1]*r[1],_=e[0]*r[0],w=o?g:d,f=o?d:g;if(!(f%r[1]===0&&w%r[0]===0&&d%r[1]===0))throw new Error(`tileAHight ${f} must be divisible by workgroupSize[1]${r[1]}, tileAWidth ${w} must be divisible by workgroupSize[0]${r[0]}, tileInner ${d} must be divisible by workgroupSize[1]${r[1]}`);let b=f/r[1],S=w/r[0],x=d/r[1],T=m?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${g};
    let globalColStart = i32(workgroupId.x) * ${_};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${r[1]}) {
        for (var inputCol = localCol; inputCol < ${w}; inputCol = inputCol + ${r[0]}) {
          ${Zd(o,s)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${d}; inputRow = inputRow + ${r[1]}) {
            for (var inputCol = localCol; inputCol < ${_}; inputCol = inputCol + ${r[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${s?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${i}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${r[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${o?`mm_Asub[k][localRow + innerRow * ${r[1]}];`:`mm_Asub[localRow + innerRow * ${r[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${r[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${r[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${g};

let tileRowA = i32(localId.y) * ${b};
let tileColA = i32(localId.x) * ${S};
let tileRowB = i32(localId.y) * ${x};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${S}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Zd(o,s)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${x}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${s?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${i}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Am(o)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${i}, ${w}>, ${f}>;
  var<workgroup> mm_Bsub : array<array<${i}, ${_}>, ${d}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${d};

@compute @workgroup_size(${r[0]}, ${r[1]}, ${r[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${u?"0":"i32(globalId.z)"};
    ${s?`let batchIndices = ${s.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${u?`${Math.ceil(h/d)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${u?`i32(globalId.z) * ${h}`:"0"};

    var acc : array<array<${i}, colPerThread>, rowPerThread>;
    ${T}
  }
`},Rm=(e,r,i,s,o,d=!1)=>{let[u,h,m]=o,[g,_,w,f]=s,b=Ys(u,m),S=Ys(h,m),x=yt(s[0].type.tensor),T=()=>{let C=_.rank,O=g.rank,R=`var aIndices: ${_.type.indices};`;for(let M=C-2-1,F=O-1;M>=0;M--,F--)R+=`
aIndices[${M}] = ${O>1?`batchIndices[${F}]`:"batchIndices"};`;return b.forEach(M=>{R+=`
aIndices[${M}] = 0;`}),R+=`
aIndices[${C-2}] = u32(row);
                   aIndices[${C-1}] = u32(colIn);`,R},z=()=>{let C=w.rank,O=g.rank,R=`var bIndices: ${w.type.indices};`;for(let M=C-2-1,F=O-1;M>=0;M--,F--)R+=`
bIndices[${M}] = ${O>1?`batchIndices[${F}]`:"batchIndices"};`;return S.forEach(M=>{R+=`
bIndices[${M}] = 0;`}),R+=`
bIndices[${C-2}] = u32(row);
                   bIndices[${C-1}] = u32(colIn);`,R};return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${g.type.indices}) -> ${Ot(e,x)} {
      var value = ${Ot(e,x)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        ${T()}
        value = ${_.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${g.type.indices}) -> ${Ot(e,x)} {
      var value = ${Ot(e,x)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        ${z()}
        value = ${w.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ot(e,x)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${r?`value = value + ${d?"bias[colIn]":`${Ot(e,x)}(bias[row])`};`:""}
        ${i}
        ${f.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},cf=(e,r,i,s,o=!1,d)=>{let u=e[0].dims,h=e[1].dims,m=u.slice(0,-2),g=h.slice(0,-2),_=s?s.slice(0,-2):i.slice(0,-2),w=K.size(_),f=u[u.length-2],b=u[u.length-1],S=h[h.length-1],x=b%4===0&&S%4===0,T=f<=8?[4,1,1]:[4,4,1],z=[8,8,1],C=[Math.ceil(S/z[0]/T[0]),Math.ceil(f/z[1]/T[1]),Math.ceil(w/z[2]/T[2])],O=x?4:1,R=[...m,f,b/O],M=R.length,F=[...g,b,S/O],U=F.length,Q=[w,f,S/O],se=[{type:6,data:f},{type:6,data:S},{type:6,data:b}];qr(r,se),se.push(...he(_,R,F));let ue=["rank","rank"],Se=e.length>2;Se&&(se.push(...he(e[2].dims)),ue.push("rank")),se.push(...he(Q));let xe=de=>{let Re=_.length,De=rf("batchDims",e[0].dataType,Re,1),be=yt(e[0].dataType),ke=Y("a",e[0].dataType,M,O),q=Y("b",e[1].dataType,U,O),X=we("result",e[0].dataType,Q.length,O),J=[ke,q];if(Se){let Ee=o?O:1;J.push(Y("bias",e[2].dataType,e[2].dims.length,Ee))}let A=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Gr(r,A);let N=yt(X.type.tensor),ie=Hr(r,X.type.value,N),ce=Rm(O,Se,ie,[De,ke,q,X],[m,g,_],o);return`
  ${de.registerUniforms(A).registerInternalVariables(De).declareVariables(...J,X)}
  ${ce}
  ${x?Qu(T,z,be,De):Yu(T,z,be,De)}
                   `};return{name:"MatMul",shaderCache:{hint:`${T};${r.activation};${x};${o}`,inputDependencies:ue},getRunData:()=>({outputs:[{dims:d?d(i):i,dataType:e[0].dataType}],dispatchGroup:{x:C[0],y:C[1],z:C[2]},programUniforms:se}),getShaderSource:xe}}}),Om,Bv,U_=ne(()=>{ze(),Qn(),Pe(),Qr(),Ju(),Mv(),el(),Om=(e,r,i,s,o=!1,d,u=4,h=4,m=4,g="f32")=>{let _=se=>{switch(se){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${g}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${se} is not supported.`)}},w=se=>{switch(se){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${se} is not supported.`)}},f=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,b=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,S=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",x=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",T=e?"row":"col",z=e?"col":"row",C=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${T} / outWidth;
    let outCol = ${T} % outWidth;

    let WRow = ${z} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${z} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${z} % inChannels;
    var resData = ${Ot(u,g)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${S} && xCol >= 0 && xCol < ${x}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${_(u)}
    }
    return resData;`,O=e?r&&s?`
    let col = colIn * ${u};
    ${C}`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${C}
    }
    return ${Ot(u,g)}(0.0);`:s&&i?`
    let col = colIn * ${u};
    ${C}`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${C}
    }
    return ${Ot(u,g)}(0.0);`,R=`${w(h)}`,M=Ot(m,g),F=Ot(e?u:h,g),U=Ot(e?h:u,g),Q=Hr(d,M,g);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${F} {
      ${e?O:R}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${U} {
      ${e?R:O}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${M}) {
      let col = colIn * ${m};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${b}
      ${lf(o)}
      ${Q}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Bv=(e,r,i,s,o,d,u,h,m)=>{let g=r.format==="NHWC",_=g?e[0].dims[3]:e[0].dims[1],w=i[0],f=g?i[2]:i[3],b=g?i[1]:i[2],S=g?i[3]:i[1],x=g&&(_%4===0||_%3===0)&&S%4===0,T=g?S:f*b,z=g?f*b:S,C=[8,8,1],O=s<=8?[4,1,1]:[4,4,1],R=[Math.ceil(T/C[0]/O[0]),Math.ceil(z/C[1]/O[1]),Math.ceil(w/C[2]/O[2])];Ye("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${R}`);let M=x?g&&_%4!==0?3:4:1,F=C[1]*O[1],U=C[0]*O[0],Q=Math.max(C[0]*M,C[1]),se=s%F===0,ue=o%U===0,Se=d%Q===0,xe=x?[M,4,4]:[1,1,1],de=[{type:6,data:s},{type:6,data:o},{type:6,data:d},{type:6,data:[r.pads[0],r.pads[1]]},{type:6,data:r.strides},{type:6,data:r.dilations}];qr(r,de),de.push(...he(e[0].dims,e[1].dims));let Re=["rank","rank"];u&&(de.push(...he(e[2].dims)),Re.push("rank")),de.push(...he(i));let De=be=>{let ke=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Gr(r,ke);let q=x?4:1,X=yt(e[0].dataType),J=`
      fn setOutputAtIndex(flatIndex : i32, value : ${x?`vec4<${X}>`:X}) {
        result[flatIndex] = ${x?`vec4<${X}>`:X}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${x?`vec4<${X}>`:X}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${x?"/ 4":""}, value);
      }`,A=Y("x",e[0].dataType,e[0].dims.length,M===3?1:M),N=Y("w",e[1].dataType,e[1].dims.length,q),ie=[A,N],ce=we("result",e[0].dataType,i.length,q);if(u){let Ee=Y("bias",e[2].dataType,e[2].dims.length,q);ie.push(Ee),J+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${x?`vec4<${X}>`:X} {
          return bias[coords.${g?"w":"y"}${x?"/ 4":""}];
        }`}return`
        ${df("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${be.registerUniforms(ke).declareVariables(...ie,ce)}
        ${J}
        ${Om(g,se,ue,Se,u,r,xe[0],xe[1],xe[2],X)}
        ${x?Qu(O,C,X,void 0,!g,Q):Yu(O,C,X,void 0,!g,Q,!1,void 0,h)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${r.cacheKey};${M};${x};${se};${ue};${Se};${F};${U};${Q}`,inputDependencies:Re},getRunData:()=>({outputs:[{dims:m?m(i):i,dataType:e[0].dataType}],dispatchGroup:{x:R[0],y:R[1],z:R[2]},programUniforms:de}),getShaderSource:De}}}),Pm,Xd,Ls,Mm,Jd,Bm,Dv,Nv,j_=ne(()=>{ze(),Qn(),Oe(),Pe(),Qr(),Ju(),Pm=e=>{let r=1;for(let i=0;i<e.length;i++)r*=e[i];return r},Xd=e=>typeof e=="number"?[e,e,e]:e,Ls=(e,r)=>r<=1?e:e+(e-1)*(r-1),Mm=(e,r,i,s=1)=>{let o=Ls(r,s);return Math.floor((e[0]*(i-1)-i+o)/2)},Jd=(e,r,i,s,o)=>{o==null&&(o=Mm(e,r[0],s[0]));let d=[0,0,0,i];for(let u=0;u<3;u++)e[u]+2*o>=r[u]&&(d[u]=Math.trunc((e[u]-r[u]+2*o)/s[u]+1));return d},Bm=(e,r,i,s,o,d,u,h,m,g)=>{let _,w,f,b;if(e==="VALID"&&(e=0),typeof e=="number"){_={top:e,bottom:e,left:e,right:e,front:e,back:e};let S=Jd([r,i,s,1],[h,m,g],1,[o,d,u],e);w=S[0],f=S[1],b=S[2]}else if(Array.isArray(e)){if(!e.every((x,T,z)=>x===z[0]))throw Error(`Unsupported padding parameter: ${e}`);_={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let S=Jd([r,i,s,1],[h,m,g],1,[o,d,u],e[0]);w=S[0],f=S[1],b=S[2]}else if(e==="SAME_UPPER"){w=Math.ceil(r/o),f=Math.ceil(i/d),b=Math.ceil(s/u);let S=(w-1)*o+h-r,x=(f-1)*d+m-i,T=(b-1)*u+g-s,z=Math.floor(S/2),C=S-z,O=Math.floor(x/2),R=x-O,M=Math.floor(T/2),F=T-M;_={top:O,bottom:R,left:M,right:F,front:z,back:C}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:_,outDepth:w,outHeight:f,outWidth:b}},Dv=(e,r,i,s,o,d=!1,u="channelsLast")=>{let h,m,g,_,w;if(u==="channelsLast")[h,m,g,_,w]=e;else if(u==="channelsFirst")[h,w,m,g,_]=e;else throw new Error(`Unknown dataFormat ${u}`);let[f,,b,S,x]=r,[T,z,C]=Xd(i),[O,R,M]=Xd(s),F=Ls(b,O),U=Ls(S,R),Q=Ls(x,M),{padInfo:se,outDepth:ue,outHeight:Se,outWidth:xe}=Bm(o,m,g,_,T,z,C,F,U,Q),de=d?f*w:f,Re=[0,0,0,0,0];return u==="channelsFirst"?Re=[h,de,ue,Se,xe]:u==="channelsLast"&&(Re=[h,ue,Se,xe,de]),{batchSize:h,dataFormat:u,inDepth:m,inHeight:g,inWidth:_,inChannels:w,outDepth:ue,outHeight:Se,outWidth:xe,outChannels:de,padInfo:se,strideDepth:T,strideHeight:z,strideWidth:C,filterDepth:b,filterHeight:S,filterWidth:x,effectiveFilterDepth:F,effectiveFilterHeight:U,effectiveFilterWidth:Q,dilationDepth:O,dilationHeight:R,dilationWidth:M,inShape:e,outShape:Re,filterShape:r}},Nv=(e,r,i,s,o,d)=>{let u=d==="channelsLast";u?e[0].dims[3]:e[0].dims[1];let h=[64,1,1],m={x:i.map((T,z)=>z)},g=[Math.ceil(Pm(m.x.map(T=>i[T]))/h[0]),1,1];Ye("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${g}`);let _=1,w=K.size(i),f=[{type:12,data:w},{type:12,data:s},{type:12,data:o},{type:12,data:r.strides},{type:12,data:r.dilations}];qr(r,f),f.push(...he(e[0].dims,e[1].dims));let b=["rank","rank"],S=e.length===3;S&&(f.push(...he(e[2].dims)),b.push("rank")),f.push(...he(i));let x=T=>{let z=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:s.length},{name:"pads",type:"u32",length:o.length},{name:"strides",type:"u32",length:r.strides.length},{name:"dilations",type:"u32",length:r.dilations.length}];Gr(r,z);let C=1,O=yt(e[0].dataType),R=Y("x",e[0].dataType,e[0].dims.length,_),M=Y("W",e[1].dataType,e[1].dims.length,C),F=[R,M],U=we("result",e[0].dataType,i.length,C),Q="";if(S){let Se=Y("bias",e[2].dataType,e[2].dims.length,C);F.push(Se),Q+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${O} {
          return bias[${u?ge("coords",4,5):ge("coords",1,5)}];
        }`}let se=Ot(_,O),ue=Hr(r,se,O);return`
            ${Q}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${R.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${M.getByIndices("aIndices")};
            }
          ${T.registerUniforms(z).declareVariables(...F,U)}
          ${T.mainStart()}
          ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${U.offsetToIndices("global_idx")};
              let batch = ${ge("coords",0,R.rank)};
              let d2 = ${u?ge("coords",R.rank-1,R.rank):ge("coords",1,R.rank)};
              let xFRCCorner = vec3<u32>(${u?ge("coords",1,R.rank):ge("coords",2,R.rank)},
              ${u?ge("coords",2,R.rank):ge("coords",3,R.rank)},
              ${u?ge("coords",3,R.rank):ge("coords",4,R.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${u?ge("uniforms.x_shape",1,R.rank):ge("uniforms.x_shape",2,R.rank)};
              let xShapeZ = ${u?ge("uniforms.x_shape",2,R.rank):ge("uniforms.x_shape",3,R.rank)};
              let xShapeW = ${u?ge("uniforms.x_shape",3,R.rank):ge("uniforms.x_shape",4,R.rank)};
              let xShapeU = ${u?ge("uniforms.x_shape",4,R.rank):ge("uniforms.x_shape",1,R.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${u?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${u?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${u?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${u?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${S?"value = value + getBiasByOutputCoords(coords)":""};
              ${ue}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${r.cacheKey};${u};${_};${S}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:g[0],y:g[1],z:g[2]},programUniforms:f}),getShaderSource:x}}}),Lv,Uv,W_=ne(()=>{ze(),Oe(),Pe(),Qr(),Lv=(e,r,i,s)=>{let o=e.length>2,d=o?"value += b[output_channel];":"",u=e[0].dims,h=e[1].dims,m=r.format==="NHWC",g=m?i[3]:i[1],_=g/r.group,w=m&&_>=4?ft(g):1,f=K.size(i)/w,b=[{type:12,data:f},{type:12,data:r.dilations},{type:12,data:[r.strides[0],r.strides[1]]},{type:12,data:[r.pads[0],r.pads[1]]},{type:12,data:_}];qr(r,b),b.push(...he(u,[h[0],h[1],h[2],h[3]/w]));let S=o?["rank","rank","rank"]:["rank","rank"];b.push(...he([i[0],i[1],i[2],i[3]/w]));let x=T=>{let z=we("output",e[0].dataType,i.length,w),C=yt(z.type.tensor),O=Hr(r,z.type.value,C),R=Y("x",e[0].dataType,u.length),M=Y("w",e[1].dataType,h.length,w),F=[R,M];o&&F.push(Y("b",e[2].dataType,e[2].dims,w));let U=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:r.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Gr(r,U);let Q=m?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${R.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${M.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${R.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${M.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${T.registerUniforms(U).declareVariables(...F,z)}

  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${z.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${m?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${m?1:2}], outputIndices[${m?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${w} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${m?2:1}];

    var value: ${z.type.value} = ${z.type.value}(0);
    ${Q}
    ${d}
    ${O}
    ${z.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${r.cacheKey}_${w}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:s?s(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:b}),getShaderSource:x}},Uv=(e,r,i,s)=>{let o=e.length>2,d=ft(i[3]),u=ft(i[2]),h=K.size(i)/d/u,m=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/d],g=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/d],_=[i[0],i[1],i[2],i[3]/d],w=[{type:12,data:h},{type:6,data:[r.strides[0],r.strides[1]]},{type:6,data:[r.pads[0],r.pads[1]]}];qr(r,w),w.push(...he(m,g,_));let f=(u-1)*r.strides[1]+g[1],b=S=>{let x=we("output",e[0].dataType,_.length,d),T=yt(x.type.tensor),z=Hr(r,x.type.value,T),C=Y("x",e[0].dataType,m.length,d),O=Y("w",e[1].dataType,g.length,d),R=[C,O];o&&R.push(Y("b",e[2].dataType,e[2].dims,d));let M=o?"value += b[output_channel];":"",F=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Gr(r,F),`
  ${S.registerUniforms(F).declareVariables(...R,x)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${u}u;
    let col = (index1 % width1) * ${u}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${C.type.value}, ${f}>;
    var values: array<${x.type.value}, ${u}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${g[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${C.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${C.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${g[1]}; w_width++) {
          let w_val = ${O.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${u}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${u}u; i++) {
      var value = values[i];
      ${M}
      ${z}
      ${x.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${r.cacheKey};${d};${u};${f};${g[0]};${g[1]}`,inputDependencies:o?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:w}),getShaderSource:b}}}),Oc,Dm,jv,Wv=ne(()=>{ze(),Oe(),el(),Pe(),Qr(),Oc=(e,r,i,s,o=!1,d)=>{let u=e[0].dims,h=e[1].dims,m=u[u.length-2],g=h[h.length-1],_=u[u.length-1],w=ft(g),f=ft(_),b=ft(m),S=K.size(i)/w/b,x=e.length>2,T=s?s.slice(0,-2):i.slice(0,-2),z=[K.size(T),m,g],C=[{type:12,data:S},{type:12,data:m},{type:12,data:g},{type:12,data:_}];qr(r,C),C.push(...he(T,u,h)),x&&C.push(...he(e[2].dims)),C.push(...he(z));let O=R=>{let M=rf("batch_dims",e[0].dataType,T.length),F=Y("a",e[0].dataType,u.length,f),U=Y("b",e[1].dataType,h.length,w),Q=we("output",e[0].dataType,z.length,w),se=yt(Q.type.tensor),ue=Hr(r,Q.type.value,se),Se=[F,U],xe="";if(x){let J=o?w:1;Se.push(Y("bias",e[2].dataType,e[2].dims.length,J)),xe=`${o?`value += bias[col / ${J}];`:`value += ${Q.type.value}(bias[row + i]);`}`}let de=u.slice(0,-2),Re=h.slice(0,-2),De=Ys(de,T),be=Ys(Re,T),ke=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Gr(r,ke);let q=(J,A)=>{let N=J.rank,ie=J.name;if(N===2)return`var ${ie}_indices = ${J.type.indices}(0u, 0u);`;let ce=M.rank,Ee=`var ${ie}_indices: ${J.type.indices};`;for(let Ce=N-2-1,We=ce-1;Ce>=0;Ce--,We--)Ee+=`
${ie}_indices[${Ce}] = ${ce>1?`batch_indices[${We}]`:"batch_indices"};`;return A.forEach(Ce=>{Ee+=`
${ie}_indices[${Ce}] = 0;`}),Ee+=`${ie}_indices[${N-2}] = 0u;
                     ${ie}_indices[${N-1}] = 0u;`,Ee},X=()=>{let J=`var a_data: ${F.type.value};`;for(let A=0;A<f;A++)J+=`
              let b_data${A} = b[(b_offset + (k + ${A}) * uniforms.N + col) / ${w}];`;for(let A=0;A<b;A++){J+=`a_data = a[(a_offset + (row + ${A}) * uniforms.K + k) / ${f}];`;for(let N=0;N<f;N++)J+=`
            values[${A}] = fma(${U.type.value}(a_data${f===1?"":`[${N}]`}), b_data${N}, values[${A}]);
`}return J};return`
  ${R.registerUniforms(ke).registerInternalVariables(M).declareVariables(...Se,Q)}
  ${R.mainStart()}
    ${R.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${w})) * ${w};
    var index1 = global_idx / (uniforms.N / ${w});
    let stride1 = uniforms.M / ${b};
    let row = (index1 % stride1) * ${b};
    let batch = index1 / stride1;

    ${i.length===2?"":`let batch_indices = ${M.offsetToIndices("batch")};`}
    ${q(F,De)}
    let a_offset = ${F.indicesToOffset("a_indices")};
    ${q(U,be)}
    let b_offset = ${U.indicesToOffset("b_indices")};
    var values: array<${Q.type.value}, ${b}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${X()}
    }
    for (var i = 0u; i < ${b}u; i++) {
      var value = values[i];
      ${xe}
      ${ue}
      let cur_indices = ${Q.type.indices}(batch, row + i, col);
      let offset = ${Q.indicesToOffset("cur_indices")};
      ${Q.setByOffset(`offset / ${w}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${r.activation};${w};${f};${b};${o}`,inputDependencies:x?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:d?d(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:C}),getShaderSource:O}},Dm=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},jv=e=>{Dm(e.inputs);let r=za.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!r)throw new Error("Can't use matmul on the given tensors");let i=r[r.length-1],s=e.inputs[0].dims[e.inputs[0].dims.length-1];i<8&&s<8?e.compute(Oc(e.inputs,{activation:""},r)):e.compute(cf(e.inputs,{activation:""},r))}}),Nm,Mu,Lm,Bu,Pc,ec,Um,jm,Mc,F_=ne(()=>{Oe(),U_(),j_(),el(),W_(),Qr(),Wv(),Kr(),Nm=(e,r,i,s,o,d)=>{let u=e[0],h=e.slice(d?1:2,d?3:4),m=h.length,g=r[0],_=r.slice(2).map((f,b)=>f+(f-1)*(i[b]-1)),w=h.map((f,b)=>f+s[b]+s[b+m]).map((f,b)=>Math.floor((f-_[b]+o[b])/o[b]));return w.splice(0,0,u),w.splice(d?3:1,0,g),w},Mu=[2,3,1,0],Lm=(e,r)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[r.format==="NHWC"?e[0].dims.length-1:1],s=e[1].dims[1]*r.group;if(i!==s)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let o=e[0].dims.length-2;if(r.dilations.length!==o)throw new Error(`dilations should be ${o}D`);if(r.strides.length!==o)throw new Error(`strides should be ${o}D`);if(r.pads.length!==o*2)throw new Error(`pads should be ${o*2}D`);if(r.kernelShape.length!==0&&r.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Bu=(e,r)=>{let i=e.kernelShape.slice();i.length<r[1].dims.length-2&&i.push(...Array(r[1].dims.length-2-i.length).fill(0));for(let d=2;d<r[1].dims.length;++d)i[d-2]===0&&(i[d-2]=r[1].dims[d]);let s=e.pads.slice();Gu.adjustPadsBasedOnAutoPad(r[0].dims,e.strides,e.dilations,i,s,e.format==="NHWC",e.autoPad);let o=Object.assign({},e);return Object.assign(o,{kernelShape:i,pads:s}),o},Pc=e=>{let r=uf(e),i=e.format,s=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],o=e.dilations,d=e.group,u=e.kernel_shape,h=e.pads,m=e.strides,g=e.w_is_const();return{autoPad:s,format:i,dilations:o,group:d,kernelShape:u,pads:h,strides:m,wIsConst:g,...r,cacheKey:`${e.format};${r.activation};`}},ec=(e,r,i,s)=>{let o=i.format==="NHWC",d=Nm(r[0].dims,r[1].dims,i.dilations,i.pads,i.strides,o);if(i.group!==1){let F=[r[0]];if(o){let U=e.kernelCustomData.wT??e.compute(un(r[1],Mu),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=U),F.push(U)}else F.push(r[1]);r.length===3&&F.push(r[2]),!e.adapterInfo.isArchitecture("ampere")&&o&&r[1].dims[0]===i.group&&r[1].dims[1]===1&&i.dilations[0]===1&&i.dilations[1]===1?e.compute(Uv(F,i,d,s),{inputs:F}):e.compute(Lv(F,i,d,s),{inputs:F});return}let u=r.length===3,h=r[0].dims[o?1:2],m=r[0].dims[o?2:3],g=r[0].dims[o?3:1],_=r[1].dims[2],w=r[1].dims[3],f=d[o?1:2],b=d[o?2:3],S=d[o?3:1],x=o&&_===h&&w===m&&i.pads[0]===0&&i.pads[1]===0;if(x||_===1&&w===1&&i.dilations[0]===1&&i.dilations[1]===1&&i.strides[0]===1&&i.strides[1]===1&&i.pads[0]===0&&i.pads[1]===0){let F=d[0],U,Q,se,ue=[];if(o){let de=e.kernelCustomData.wT??e.compute(un(r[1],Mu),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];if(i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=de),x){let Re=h*m*g;U=r[0].reshape([1,F,Re]),Q=de.reshape([1,Re,S]),se=[1,F,S]}else U=r[0].reshape([F,h*m,g]),Q=de.reshape([1,g,S]),se=[F,f*b,S];ue.push(U),ue.push(Q)}else U=r[0].reshape([F,g,h*m]),Q=r[1].reshape([1,S,g]),se=[F,S,f*b],ue.push(Q),ue.push(U);u&&ue.push(r[2]);let Se=se[2],xe=ue[0].dims[ue[0].dims.length-1];Se<8&&xe<8?e.compute(Oc(ue,i,d,se,o,s),{inputs:ue}):e.compute(cf(ue,i,d,se,o,s),{inputs:ue});return}let T=!0,z=e.kernelCustomData.wT??e.compute(un(r[1],Mu),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=z);let C=[r[0],z];u&&C.push(r[2]);let O=o?f*b:S,R=o?S:f*b,M=_*w*g;e.compute(Bv(C,i,d,O,R,M,u,T,s),{inputs:C})},Um=(e,r)=>{let i=r.format==="NHWC",s=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&s.push(e.inputs[2]);let o=[0,r.pads[0],0,r.pads[1]],d=[1].concat(r.strides),u=[1].concat(r.dilations),h=[1].concat(r.kernelShape),m=Bu({...r,pads:o,strides:d,dilations:u,kernelShape:h},s);ec(e,s,m,g=>i?[g[0],g[2],g[3]]:[g[0],g[1],g[3]])},jm=(e,r,i)=>{let s=i.format==="NHWC"?"channelsLast":"channelsFirst",o=Bu(i,r),d=i.autoPad==="NOTSET"?i.pads:i.autoPad,u=Dv(r[0].dims,r[1].dims,i.strides,i.dilations,d,!1,s);e.compute(Nv(r,o,u.outShape,[u.filterDepth,u.filterHeight,u.filterWidth],[u.padInfo.front,u.padInfo.top,u.padInfo.left],s))},Mc=(e,r)=>{if(Lm(e.inputs,r),e.inputs[0].dims.length===3)Um(e,r);else if(e.inputs[0].dims.length===5)jm(e,e.inputs,r);else{let i=Bu(r,e.inputs);ec(e,e.inputs,i)}}}),Wm,Fv,V_=ne(()=>{ze(),Qn(),Pe(),Qr(),Ju(),Mv(),el(),Wm=(e,r=!1,i,s,o=4)=>{let d=T=>{switch(T){case 1:return"return w[getIndexFromCoords4D(coord, vec4<i32>(uniforms.w_shape))];";case 4:return`
            let coord1 = vec4<i32>(coordX, coordY, col + 1, rowInner);
            let coord2 = vec4<i32>(coordX, coordY, col + 2, rowInner);
            let coord3 = vec4<i32>(coordX, coordY, col + 3, rowInner);
            let v0 = w[getIndexFromCoords4D(coord, vec4<i32>(uniforms.w_shape))];
            let v1 = w[getIndexFromCoords4D(coord1, vec4<i32>(uniforms.w_shape))];
            let v2 = w[getIndexFromCoords4D(coord2, vec4<i32>(uniforms.w_shape))];
            let v3 = w[getIndexFromCoords4D(coord3, vec4<i32>(uniforms.w_shape))];
            return ${s}(v0, v1, v2, v3);
            `;default:throw new Error(`innerElementSize ${T} is not supported.`)}},u=e?`
      let coord = vec4<i32>(batch, iXR, iXC, xCh);
      `:`
      let coord = vec4<i32>(batch, xCh, iXR, iXC);
      `,h=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,m=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",g=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",_=e?"row":"col",w=e?"col":"row",f=`
      let inChannels = ${e?"i32(uniforms.x_shape[3])":"i32(uniforms.x_shape[1])"};
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      let outRow = ${_} / outWidth;
      let outCol = ${_} % outWidth;

      let WRow = ${w} / (uniforms.filter_dims[1] * inChannels);
      let WCol = ${w} / inChannels % uniforms.filter_dims[1];
      let xR = f32(outRow - uniforms.pads[0] + uniforms.dilations[0] * WRow) / f32(uniforms.strides[0]);
      let xC = f32(outCol - uniforms.pads[1] + uniforms.dilations[1] * WCol) / f32(uniforms.strides[1]);
      if (xR < 0.0 || xR >= f32(${m}) || fract(xR) > 0.0) {
        return ${s}(0.0);
      }
      if (xC < 0.0 || xC >= f32(${g}) || fract(xC) > 0.0) {
        return ${s}(0.0);
      }
      let iXR = i32(xR);
      let iXC = i32(xC);
      let xCh = ${w} % inChannels;
      ${u}
      return x[getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape))/${o}];`,b=e?`
      let col = colIn * ${o};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
        ${f}
      }
      return ${s}(0.0);`:`
      let col = colIn * ${o};
      if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
        ${f}
      }
      return ${s}(0.0);`,S=`
      let col = colIn * ${o};
      let inChannels = ${e?"i32(uniforms.x_shape[3])":"i32(uniforms.x_shape[1])"};
      let coordX = uniforms.filter_dims[0] - 1 - row / (uniforms.filter_dims[1] * inChannels);
      let coordY = uniforms.filter_dims[1] - 1 - (row / inChannels) % uniforms.filter_dims[1];
      if (${e?"row < uniforms.dim_inner && col < uniforms.dim_b_outer":"row < uniforms.dim_inner && col < uniforms.dim_a_outer"}  && coordX >= 0 && coordY >= 0) {
        let rowInner = row % inChannels;
        let coord = vec4<i32>(coordX, coordY, col, rowInner);
        ${d(o)}
      }
      return ${s}(0.0);
      `,x=Hr(i,s);return`
  fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${s} {
    ${e?b:S}
  }

  fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${s} {
    ${e?S:b}
  }

  fn mm_write(batch: i32, row : i32, colIn : i32, valueInput : ${s}) {
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
      var value = valueInput;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${h}
      ${lf(r)}
      ${x}
      result[getIndexFromCoords4D(coords, vec4<i32>(uniforms.result_shape))/${o}] = value;
    }
  }`},Fv=(e,r,i,s,o,d,u,h)=>{let m=r.format==="NHWC",g=m?e[0].dims[3]:e[0].dims[1],_=i[0],w=m?i[2]:i[3],f=m?i[1]:i[2],b=m?i[3]:i[1],S=m&&g%4===0&&g%3&&b%4===0,x=m?b:w*f,T=m?w*f:b,z=[8,8,1],C=s<=8?[4,1,1]:[4,4,1],O=[Math.ceil(x/z[0]/C[0]),Math.ceil(T/z[1]/C[1]),Math.ceil(_/z[2]/C[2])];Ye("verbose",()=>`[conv_backprop_mm_webgpu] dispatch = ${O}`);let R=S?4:1,M=Math.max(z[0]*R,z[1]),F=S?4:1,U=[r.kernelShape[m?1:2],r.kernelShape[m?2:3]],Q=[U[0]+(r.dilations[0]<=1?0:(U[0]-1)*(r.dilations[0]-1)),U[1]+(r.dilations[1]<=1?0:(U[1]-1)*(r.dilations[1]-1))],se=[Q[0]-1-Math.floor((r.pads[0]+r.pads[2])/2),Q[1]-1-Math.floor((r.pads[1]+r.pads[3])/2)],ue=[{type:6,data:s},{type:6,data:o},{type:6,data:d},{type:6,data:r.strides},{type:6,data:r.dilations},{type:6,data:U},{type:6,data:se}];qr(r,ue),ue.push(...he(e[0].dims,e[1].dims));let Se=["rank","rank"];u&&(ue.push(...he(e[2].dims)),Se.push("rank")),ue.push(...he(i));let xe=de=>{let Re=Y("x",e[0].dataType,e[0].dims.length,F),De=Y("w",e[1].dataType,e[1].dims.length,1),be=we("result",e[0].dataType,i.length,F),ke=[Re,De],q="";if(u){let A=Y("bias",e[2].dataType,e[2].dims.length,F);ke.push(A),q+=`
          fn getBiasByOutputCoords(coords : vec4<i32>) -> ${A.type.value} {
            return bias[coords.${m?"w":"y"}${S?"/ 4":""}];
          }`}let X=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"strides",type:"i32",length:2},{name:"dilations",type:"i32",length:2},{name:"filter_dims",type:"i32",length:U.length},{name:"pads",type:"i32",length:se.length}];Gr(r,X);let J=yt(e[0].dataType,1);if(J!=="f16"&&J!=="f32")throw new Error(`elemType ${J} is not supported.`);return`
        ${df("uniforms.result_strides")}
        ${de.registerUniforms(X).declareVariables(...ke,be)};
        ${q}
        ${Wm(m,u,r,Re.type.value,R)}
        ${S?Qu(C,z,J,void 0,!m,M):Yu(C,z,J,void 0,!m,M,!1,void 0,h)}`};return{name:"Conv2DTransposeMatMul",shaderCache:{hint:`${r.cacheKey};${C};${z};${S}`,inputDependencies:Se},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:O[0],y:O[1],z:O[2]},programUniforms:ue}),getShaderSource:xe}}}),Fm,Bc,H_=ne(()=>{ze(),Qn(),Oe(),Pe(),Fm=(e,r,i,s,o,d=!1,u,h,m=!1)=>{let g=m?1:2,_=m?2:3,w=m?3:1,f=d?2:1,b=`
  fn setOutputAtIndex(flatIndex : u32, value : ${d?`vec4<${u}>`:u}) {
    result[flatIndex] = ${d?`vec4<${u}>`:u}(value);
  }`;s&&(b+=`
    fn getBiasByOutputCoords(coords : vec4<u32>) -> ${d?`vec4<${u}>`:u} {
      return bias[coords.${m?"w":"y"}${d?"/ 4":""}];
    }`);let S=d?4:1,x=Y("W",r[1].dataType,r[1].dims.length,S),T=Y("Dy",r[0].dataType,r[0].dims.length,S),z=[T,x];s&&z.push(Y("bias",r[2].dataType,[i[w]].length,S));let C=we("result",r[0].dataType,i.length,S),O=`{
        let batch: u32 = ${o?"global_id.z":"workgroup_id.z"} / uniforms.result_shape[1];
        let r = ${o?"global_id.z":"workgroup_id.z"} % uniforms.result_shape[1];
        let c = ${o?"global_id.y":"workgroup_id.y"} * ${f};
        let d1: u32 = ${o?"global_id.x":"workgroup_id.x"} * 4;

        let dyCorner = vec2<i32>(i32(r), i32(c)) - vec2<i32>(uniforms.pads);

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        var dotProd: array<vec4<${u}>, ${f}>;
        for (var i = 0; i < ${f}; i++) {
          dotProd[i] = vec4<${u}>(0.0);
        }
        for (var wR: u32 = 0; wR < uniforms.filter_dims[0]; wR = wR + 1) {
          var dyR = (${u}(dyCorner.x) + ${u}(wR)) / ${u}(uniforms.strides.x);
          let wRPerm = uniforms.filter_dims[0] - 1 - wR;
          if (dyR < 0.0 || dyR >= ${u}(uniforms.Dy_shape[1]) ||
              fract(dyR) > 0.0 || wRPerm < 0) {
            continue;
          }
          let idyR: u32 = u32(dyR);

          for (var wC: u32 = 0; wC < uniforms.filter_dims[1]; wC = wC + 1) {
            let dyC = (${u}(dyCorner.y) + ${u}(wC)) / ${u}(uniforms.strides.y);
            let dyC2 = (${u}(dyCorner.y) + 1.0 + ${u}(wC)) / ${u}(uniforms.strides.y);
            let wCPerm = uniforms.filter_dims[1] - 1 - wC;
            if (wCPerm < 0) {
              continue;
            }
            var bDyCVal = true;
            var bDyCVal2 = true;
            if (dyC < 0.0 || dyC >= ${u}(uniforms.Dy_shape[2]) ||
                fract(dyC) > 0.0) {
              bDyCVal = false;
            }
            if (dyC2 < 0.0 || dyC2 >= ${u}(uniforms.Dy_shape[2]) ||
                fract(dyC2) > 0.0) {
              bDyCVal2 = false;
            }

            let idyC: u32 = u32(dyC);
            let idyC2: u32 = u32(dyC2);
            if (bDyCVal && bDyCVal2) {
              let d2Length = uniforms.Dy_shape[3];
              for (var d2 :u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${x.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${x.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${x.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${x.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${T.get("batch","idyR","idyC","d2")};
                let tmpval = vec4<${u}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[0] = dotProd[0] + tmpval;

                xValue =  ${T.get("batch","idyR","idyC2","d2")};

                dotProd[1] = dotProd[1] + vec4<${u}>(dot(xValue, wValue0),
                                                    dot(xValue, wValue1),
                                                    dot(xValue, wValue2),
                                                    dot(xValue, wValue3));
              }
            } else if (bDyCVal) {
              let d2Length = uniforms.Dy_shape[${w}];
              for (var d2: u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${x.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${x.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${x.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${x.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${T.get("batch","idyR","idyC","d2")};
                let tmpval = vec4<${u}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[0] = dotProd[0] + tmpval;
              }
            } else if (bDyCVal2) {
              let d2Length = uniforms.Dy_shape[3];
              for (var d2: u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${x.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${x.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${x.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${x.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${T.get("batch","idyR","idyC2","d2")};
                let tmpval = vec4<${u}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[1] = dotProd[1] + tmpval;
              }
            }
          }
        }

        for (var i: u32 = 0; i < ${f}; i = i + 1) {
          let value = dotProd[i] + ${s?"bias[c+i]":`vec4<${u}>(0.0)`};
          ${C.set("batch","r","c + i","d1","value")};
        }
      }`,R=`
          let outputIndices = ${C.offsetToIndices("global_idx")};
          let batch = ${C.indicesGet("outputIndices",0)};
          let d1 = ${C.indicesGet("outputIndices",w)};
          let r = ${C.indicesGet("outputIndices",g)};
          let c = ${C.indicesGet("outputIndices",_)};
          let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
          let dyRCorner = dyCorner.x;
          let dyCCorner = dyCorner.y;
          let groupId = d1 / uniforms.output_channels_per_group;
          let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
          // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
          // ? = to be determined. : = across all values in that axis.
          var dotProd = ${u}(0.0);
          for (var wR: u32 = 0; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
            if (wR % uniforms.dilations.x != 0) {
              continue;
            }
            let dyR = (${u}(dyRCorner) + ${u}(wR)) / ${u}(uniforms.strides[0]);
            let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
            if (dyR < 0.0 || dyR >= ${u}(uniforms.Dy_shape[${g}]) || fract(dyR) > 0.0 ||
                wRPerm < 0) {
              continue;
            }
            let idyR: u32 = u32(dyR);

            for (var wC: u32 = 0; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
              if (wC % uniforms.dilations.y != 0) {
                continue;
              }
              let dyC = (${u}(dyCCorner) + ${u}(wC)) / ${u}(uniforms.strides.y);
              let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
              if (dyC < 0.0 || dyC >= ${u}(uniforms.Dy_shape[${_}]) ||
                  fract(dyC) > 0.0 || wCPerm < 0) {
                continue;
              }
              let idyC: u32 = u32(dyC);
              var inputChannel = groupId * uniforms.input_channels_per_group;
              for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + 1) {
                let xValue = ${m?T.get("batch","idyR","idyC","inputChannel"):T.get("batch","inputChannel","idyR","idyC")};
                let wValue = ${x.get("inputChannel","wOutChannel","u32(wRPerm)","u32(wCPerm)")};
                dotProd = dotProd + xValue * wValue;
                inputChannel = inputChannel + 1;
              }
            }
          }
          let value = dotProd + ${s?"bias[d1]":`${u}(0.0)`};
          ${C.setByOffset("global_idx","value")};
        `;return`
  ${e.registerUniforms(h).declareVariables(...z,C)}
  ${b}

    ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
  ${d?O:R}}`},Bc=(e,r,i)=>{let s=e.length>2,o=r.outputShape,d=K.size(o),u=[Math.ceil(d/64),1,1];Ye("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${u}`);let h=r.format==="NHWC",m=["rank","rank"],g=[r.strides[0],r.strides[1]],_=[r.kernelShape[h?1:2],r.kernelShape[h?2:3]],w=[r.dilations[0],r.dilations[1]],f=[_[0]+(r.dilations[0]<=1?0:(r.kernelShape[h?1:2]-1)*(r.dilations[0]-1)),_[1]+(r.dilations[1]<=1?0:(r.kernelShape[h?2:3]-1)*(r.dilations[1]-1))],b=[f[0]-1-Math.floor((r.pads[0]+r.pads[2])/2),f[1]-1-Math.floor(r.pads[1]+r.pads[3])/2],S=!1,x=r.group,T=e[1].dims,z=T[0]/x,C=T[1],O=[{type:12,data:d},{type:12,data:g},{type:12,data:_},{type:12,data:w},{type:12,data:f},{type:6,data:b},{type:12,data:z},{type:12,data:C},...he(e[0].dims,e[1].dims)];s&&(O.push(...he(e[2].dims)),m.push("rank")),O.push(...he(o));let R=u[1]===1&&u[2]===1,M=F=>{let U=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:g.length},{name:"filter_dims",type:"u32",length:_.length},{name:"dilations",type:"u32",length:_.length},{name:"effective_filter_dims",type:"u32",length:f.length},{name:"pads",type:"i32",length:b.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],Q=yt(e[0].dataType);return`${Fm(F,e,o,s,R,S,Q,U,h)}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${r.cacheKey};`,inputDependencies:m},getRunData:()=>({dispatchGroup:{x:u[0],y:u[1],z:u[2]},outputs:[{dims:i?i(o):o,dataType:e[0].dataType}],programUniforms:O}),getShaderSource:M}}}),Vm,Hm,qm,tc,Vv,Gm,Km,Qm,Ym,Hv,q_=ne(()=>{V_(),H_(),Qr(),Kr(),Vm=(e,r,i,s,o,d)=>(e-1)*r+i+(s-1)*o+1-d,Hm=(e,r,i,s,o)=>{let d=Math.floor(e/2);r==="SAME_UPPER"?(i[s]=d,i[o]=e-d):r==="SAME_LOWER"&&(i[s]=e-d,i[o]=d)},qm=(e,r,i,s,o,d,u,h,m,g)=>{let _=e.length-2,w=g.length===0;m.length<_&&m.push(...Array(_-m.length).fill(0));let f=e[0],b=r[h?3:1]*o;for(let S=0,x=e.length-_-(h?1:0);S<_;++S,++x){let T=e[x],z=w?T*u[S]:g[S],C=Vm(T,u[S],d[S],r[x],i[S],z);Hm(C,s,d,S,S+_),w&&g.push(u[S]*(T-1)+m[S]+(r[x]-1)*i[S]+1-d[S]-d[S+_])}g.splice(0,0,f),g.splice(h?3:1,0,b)},tc=(e,r)=>{let i=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((w,f)=>w*f,1)===0){i.length=0;for(let w=2;w<r[1].dims.length;++w)i.push(r[1].dims[w])}let s=e.format==="NHWC";i.splice(0,0,r[1].dims[0]),i.splice(s?3:1,0,r[1].dims[1]);let o=e.pads.slice(),d=e.outputShape.slice(),u=e.outputPadding.slice(),h=r[0].dims,m=e.dilations.slice();if(m.reduce((w,f)=>w+f,0)===0){let w=r[0].dims.length-2;m=new Array(w).fill(1)}let g=e.strides.slice();if(g.reduce((w,f)=>w+f,0)===0){let w=r[0].dims.length-2;g=new Array(w).fill(1)}qm(h,i,m,e.autoPad,e.group,o,g,s,u,d);let _=Object.assign({},e);return Object.assign(_,{kernelShape:i,pads:o,outputPadding:u,outputShape:d,dilations:m,strides:g}),_},Vv=e=>{let r=uf(e),i=e.format,s=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],o=e.dilations,d=e.group,u=e.kernelShape,h=e.pads,m=e.strides,g=e.wIsConst(),_=e.outputPadding,w=e.outputShape;return{autoPad:s,format:i,dilations:o,group:d,kernelShape:u,outputPadding:_,outputShape:w,pads:h,strides:m,wIsConst:g,...r,cacheKey:`${e.format};${r.activation};`}},Gm=(e,r)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[r.format==="NHWC"?e[0].dims.length-1:1],s=e[1].dims[0];if(i!==s)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let o=e[1].dims[1]*r.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==o))throw new Error("invalid bias");let d=e[0].dims.length-2;if(r.dilations.reduce((u,h)=>u+h,0)>0&&r.dilations.length!==d)throw new Error(`dilations should be ${d}D`);if(r.strides.reduce((u,h)=>u+h,0)>0&&r.strides.length!==d)throw new Error(`strides should be ${d}D`);if(r.pads.reduce((u,h)=>u+h,0)>0&&r.pads.length!==d*2)throw new Error(`pads should be ${d*2}D`);if(r.outputPadding.length!==d&&r.outputPadding.length!==0)throw new Error(`output_padding should be ${d}D`);if(r.kernelShape.reduce((u,h)=>u+h,0)>0&&r.kernelShape.length!==0&&r.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(r.outputShape.length!==0&&r.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Km=[2,3,1,0],Qm=(e,r,i)=>{let s=tc(i,r),o=i.format==="NHWC",d=s.outputShape,u=d[o?3:1],h=r[0].dims[o?3:1];if(s.group!==1||u===1&&h===1){e.compute(Bc(r,s));return}let m=d[o?1:2],g=d[o?2:3],_=r[1].dims[2],w=r[1].dims[3],f=o?m*g:u,b=o?u:m*g,S=_*w*h,x=!0,T=e.kernelCustomData.wT??e.compute(un(r[1],Km),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=T);let z=[r[0],T],C=r.length===3;C&&(!o&&r[2].dims.length===1?z.push(r[2].reshape([r[2].dims[0],1,1])):z.push(r[2])),e.compute(Fv(z,s,d,f,b,S,C,x),{inputs:z})},Ym=(e,r)=>{let i=r.format==="NHWC",s=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&s.push(e.inputs[2]);let o=r.kernelShape;(o.length===0||o[0]===0)&&(o=[e.inputs[1].dims[2]]);let d=r.dilations;(d.length===0||d[0]===0)&&(d=[1]);let u=r.strides;(u.length===0||u[0]===0)&&(u=[1]);let h=r.pads;h.length===0&&(h=[0,0]),h=[0,h[0],0,h[1]],u=[1].concat(u),d=[1].concat(d),o=[1].concat(o);let m=tc({...r,pads:h,strides:u,dilations:d,kernelShape:o},s);e.compute(Bc(s,m,g=>i?[g[0],g[2],g[3]]:[g[0],g[1],g[3]]))},Hv=(e,r)=>{Gm(e.inputs,r),e.inputs[0].dims.length===3?Ym(e,r):Qm(e,e.inputs,r)}}),Zm,qv,Gv,G_=ne(()=>{ze(),Oe(),mt(),Pe(),Zm=(e,r,i,s)=>{let o=K.size(r),d=r.length,u=Y("input",e,d),h=we("output",e,d),m=i.dataType===6?i.getInt32Array()[0]:Number(i.getBigInt64Array()[0]),g=K.normalizeAxis(m,d),_=w=>{let f=` i32(${u.indicesGet("inputIndices","uniforms.axis")}) `,b=ge("uniforms.input_shape","uniforms.axis",d),S=s.reverse?f+(s.exclusive?" + 1":""):"0",x=s.reverse?b:f+(s.exclusive?"":" + 1");return`
                ${w.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(u,h)}
                ${w.mainStart()}
                  ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${h.offsetToIndices("global_idx")};
                  var sum = ${h.type.value}(0);
                  let first : i32 = ${S};
                  let last : i32 = ${x};
                  for (var i : i32 = first; i < last; i++) {
                    ${u.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${u.getByIndices("inputIndices")};
                  }
                  ${h.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:s.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:r,dataType:e}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},{type:12,data:g},...he(r,r)]}),getShaderSource:_}},qv=(e,r)=>{let i=e.inputs[0].dims,s=e.inputs[0].dataType,o=e.inputs[1];e.compute(Zm(s,i,o,r),{inputs:[0]})},Gv=e=>{let r=e.exclusive===1,i=e.reverse===1;return Ze({exclusive:r,reverse:i})}}),Xm,Jm,eg,Kv,Qv,K_=ne(()=>{ze(),Oe(),mt(),Pe(),Xm=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Jm=(e,r,i,s)=>{let o=[];o.push(`fn perm(i: ${s.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`);for(let d=0;d<r;++d)o.push(i.indicesSet("a",e[d],`i[${d}]`));return o.push("return a;}"),o.join(`
`)},eg=(e,r)=>{let i,s,o,d,u,h,m=r.format==="NHWC",g=r.blocksize,_=r.mode==="DCR";m?([i,s,o,d]=e.dims,u=_?[i,s,o,g,g,d/g**2]:[i,s,o,d/g**2,g,g],h=_?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([i,s,o,d]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],u=_?[i,g,g,d/g**2,s,o]:[i,d/g**2,g,g,s,o],h=_?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let w=e.reshape(u),f=w.dims.length,b=e.dataType,S=Y("a",b,f),x=we("output",b,f),T=z=>`
  ${z.registerUniform("output_size","u32").declareVariables(S,x)}

  ${Jm(h,f,S,x)}

  ${z.mainStart()}
    ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${x.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${x.setByOffset("global_idx",S.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${r.blocksize};${r.mode}`,inputDependencies:["rank"]},getRunData:z=>{let C=m?[i,s*g,o*g,d/g**2]:[i,d/g**2,s*g,o*g],O=K.size(C),R=w.dims,M=K.sortBasedOnPerm(R,h);return{outputs:[{dims:C,dataType:z[0].dataType}],dispatchGroup:{x:Math.ceil(O/64)},programUniforms:[{type:12,data:O},...he(R,M)]}},getShaderSource:T}},Kv=(e,r)=>{Xm(e.inputs),e.compute(eg(e.inputs[0],r))},Qv=e=>Ze({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Du,Us,nc,tg,ng,rg,ig,rc,ag,Yv,Zv,Q_=ne(()=>{ze(),Oe(),mt(),Pe(),Du="[a-zA-Z]|\\.\\.\\.",Us="("+Du+")+",nc="^"+Us+"$",tg="("+Us+",)*"+Us,ng="^"+tg+"$",rg=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,r){let i=this.symbolToIndices.get(e);i===void 0?i=[r]:i.push(r),this.symbolToIndices.set(e,i)}},ig=class{constructor(e,r){var o;this.equation=r,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[i,s]=r.includes("->")?r.split("->",2):[r,""];if(!i.match(RegExp(ng)))throw new Error("Invalid LHS term");if(i.split(",").forEach((d,u)=>{let h=e[u].dims.slice();if(!d.match(RegExp(nc)))throw new Error("Invalid LHS term");let m=this.processTerm(d,!0,h,u);this.lhs.push(m)}),s==="")s+=[...this.symbolToInfo.entries()].filter(([d,u])=>u.count===1||d==="...").map(([d])=>d).join("");else if(!s.match(RegExp(Us)))throw new Error("Invalid RHS");(o=s.match(RegExp(Du,"g")))==null||o.forEach(d=>{if(d==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let u=this.symbolToInfo.get(d);if(u===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(u.dimValue)}}),this.rhs=this.processTerm(s,!1,this.outputDims)}addSymbol(e,r,i){let s=this.symbolToInfo.get(e);if(s!==void 0){if(s.dimValue!==r&&s.count!==1)throw new Error("Dimension mismatch");s.count++,s.inputIndices.push(i)}else s={count:1,dimValue:r,inputIndices:[i]};this.symbolToInfo.set(e,s)}processTerm(e,r,i,s=-1){let o=i.length,d=!1,u=[],h=0;if(!e.match(RegExp(nc))&&!r&&e!=="")throw new Error("Invalid LHS term");let m=e.match(RegExp(Du,"g")),g=new rg(s);return m==null||m.forEach((_,w)=>{if(_==="..."){if(d)throw new Error("Only one ellipsis is allowed per input term");d=!0;let f=o-m.length+1;if(f<0)throw new Error("Ellipsis out of bounds");if(u=i.slice(h,h+f),this.hasEllipsis){if(this.ellipsisDims.length!==u.length||this.ellipsisDims.toString()!==u.toString())throw new Error("Ellipsis dimensions mismatch")}else if(r)this.hasEllipsis=!0,this.ellipsisDims=u;else throw new Error("Ellipsis must be specified in the LHS");for(let b=0;b<u.length;b++){let S=String.fromCharCode(48+b);g.addSymbol(S,w+b),this.addSymbol(S,i[h++],s)}}else g.addSymbol(_,w+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(_,i[h++],s)}),g}},rc=e=>e+"_max",ag=(e,r,i,s)=>{let o=e.map(g=>g.length).map((g,_)=>Y(`input${_}`,r,g)),d=K.size(s),u=we("output",r,s.length),h=[...i.symbolToInfo.keys()].filter(g=>!i.rhs.symbolToIndices.has(g)),m=g=>{let _=[],w="var prod = 1.0;",f="var sum = 0.0;",b="sum += prod;",S=[],x=[],T=[],z=[],C=i.symbolToInfo.size===i.rhs.symbolToIndices.size;i.symbolToInfo.forEach((R,M)=>{var F;if(i.rhs.symbolToIndices.has(M)){let U=(F=i.rhs.symbolToIndices.get(M))==null?void 0:F[0];U!==void 0&&i.lhs.forEach((Q,se)=>{if(R.inputIndices.includes(se)){let ue=Q.symbolToIndices.get(M);if(ue===void 0)throw new Error("Invalid symbol error");ue.forEach(Se=>{_.push(`${o[se].indicesSet(`input${se}Indices`,Se,u.indicesGet("outputIndices",U))}`)})}})}else i.lhs.forEach((U,Q)=>{if(R.inputIndices.includes(Q)){let se=U.symbolToIndices.get(M);if(se===void 0)throw new Error("Invalid symbol error");se.forEach(ue=>{S.push(`${o[Q].indicesSet(`input${Q}Indices`,ue,`${M}`)}`)}),z.push(`prod *= ${o[Q].getByIndices(`input${Q}Indices`)};`)}}),x.push(`for(var ${M}: u32 = 0; ${M} < uniforms.${rc(M)}; ${M}++) {`),T.push("}")});let O=C?[..._,`let sum = ${o.map((R,M)=>R.getByIndices(`input${M}Indices`)).join(" * ")};`]:[..._,f,...x,...S,w,...z,b,...T];return`
            ${g.registerUniforms(h.map(R=>({name:`${rc(R)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...o,u)}

            ${g.mainStart()}
            ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${u.offsetToIndices("global_idx")};
            ${o.map((R,M)=>`var input${M}Indices: ${o[M].type.indices};`).join(`
`)}
            ${O.join(`
`)};
            ${u.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:i.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let g=h.filter(w=>i.symbolToInfo.has(w)).map(w=>{var f;return{type:12,data:((f=i.symbolToInfo.get(w))==null?void 0:f.dimValue)||0}});g.push({type:12,data:d});let _=e.map((w,f)=>[...he(w)]).reduce((w,f)=>w.concat(f),g);return _.push(...he(s)),{outputs:[{dims:s,dataType:r}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:_}},getShaderSource:m}},Yv=(e,r)=>{let i=new ig(e.inputs,r.equation),s=i.outputDims,o=e.inputs.map((d,u)=>d.dims);e.compute(ag(o,e.inputs[0].dataType,i,s))},Zv=e=>{let r=e.equation.replace(/\s+/g,"");return Ze({equation:r})}}),sg,ic,og,ug,Xv,Y_=ne(()=>{ze(),Oe(),Pe(),sg=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let r=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),s=i.length<r.length?0:i.length-r.length,o=r.length<i.length?0:r.length-i.length;for(;s<i.length&&o<r.length;++s,++o)if(i[s]!==r[o]&&i[s]!==1&&r[o]!==1)throw new Error("Expand requires shape to be broadcastable to input")},ic=(e,r)=>{let i=e.length-r.length,s=[];for(let o=0;o<i;++o)s.push(e[o]);for(let o=0;o<r.length;++o)s.push(r[o]===1?e[o+i]:r[o]);return s},og=(e,r)=>e.length>r.length?ic(e,r):ic(r,e),ug=e=>{let r=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),s=og(r,i),o=e[0].dataType,d=o===9?4:1,u=Math.ceil(K.size(s)/d),h=g=>{let _=Y("input",o,r.length,d),w=we("output",o,s.length,d),f;if(o===9){let b=(S,x,T="")=>`
          let outputIndices${x} = ${w.offsetToIndices(`outputOffset + ${x}u`)};
          let offset${x} = ${_.broadcastedIndicesToOffset(`outputIndices${x}`,w)};
          let index${x} = offset${x} / 4u;
          let component${x} = offset${x} % 4u;
          ${S}[${x}] = ${T}(${_.getByOffset(`index${x}`)}[component${x}]);
        `;f=`
        let outputOffset = global_idx * ${d};
        var data = vec4<u32>(0);
        ${b("data",0,"u32")}
        ${b("data",1,"u32")}
        ${b("data",2,"u32")}
        ${b("data",3,"u32")}
        ${w.setByOffset("global_idx","data")}
      }`}else f=`
        let outputIndices = ${w.offsetToIndices("global_idx")};
        let inputOffset = ${_.broadcastedIndicesToOffset("outputIndices",w)};
        ${w.setByOffset("global_idx",_.getByOffset("inputOffset"))}
      }`;return`
    ${g.registerUniform("vec_size","u32").declareVariables(_,w)}
    ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${f}`},m=[{type:12,data:u},...he(r,s)];return{name:"Expand",shaderCache:{hint:`${s.length}`,inputDependencies:["rank"]},getShaderSource:h,getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m})}},Xv=e=>{sg(e.inputs),e.compute(ug(e.inputs),{inputs:[0]})}}),lg,Jv,Z_=ne(()=>{ze(),Oe(),Pe(),of(),lg=e=>{let r=e[0].dataType,i=K.size(e[0].dims),s=K.size(e[1].dims),o=s%4===0,d=u=>{let h=Y("x",r,[1],4),m=Y("bias",r,[1],4),g=we("y",r,[1],4),_=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],w=b=>`
      let bias${b}_offset: u32 = (global_idx * 4 + ${b}) % uniforms.bias_size;
      let bias${b} = ${m.getByOffset(`bias${b}_offset / 4`)}[bias${b}_offset % 4];`,f=o?`
      let bias = ${m.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${w(0)}${w(1)}${w(2)}${w(3)}
      let bias = ${h.type.value}(bias0, bias1, bias2, bias3);`;return`${u.registerUniforms(_).declareVariables(h,m,g)}

    ${Ac(Rt(r))}

    ${u.mainStart(Aa)}
      ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${h.getByOffset("global_idx")};
      ${f}
      let x_in = x + bias;
      ${g.setByOffset("global_idx",Rc("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${o}`,inputDependencies:["type","type"]},getShaderSource:d,getRunData:u=>({outputs:[{dims:u[0].dims,dataType:u[0].dataType}],programUniforms:[{type:12,data:Math.ceil(i/4)},{type:12,data:s}],dispatchGroup:{x:Math.ceil(i/Aa/4)}})}},Jv=e=>{e.inputs.length<2||K.size(e.inputs[1].dims)===0?vv(e):e.compute(lg(e.inputs))}}),dg,cg,ew,tw,X_=ne(()=>{ze(),Oe(),mt(),Pe(),dg=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},cg=(e,r)=>{let i=e[0].dims,s=e[1].dims,o=i.length,d=K.normalizeAxis(r.axis,o),u=i.slice(0);u.splice(d,1,...s);let h=i[d],m=e[0].dataType===9?4:1,g=Math.ceil(K.size(u)/m),_=[{type:12,data:g},{type:6,data:h},{type:12,data:d},...he(e[0].dims,e[1].dims,u)],w=f=>{let b=Y("data",e[0].dataType,e[0].dims.length,m),S=Y("inputIndices",e[1].dataType,e[1].dims.length),x=we("output",e[0].dataType,u.length,m),T=C=>{let O=s.length,R=`var indicesIndices${C}  = ${S.type.indices}(0);`;for(let M=0;M<O;M++)R+=`${O>1?`indicesIndices${C}[${M}]`:`indicesIndices${C}`} = ${u.length>1?`outputIndices${C}[uniforms.axis + ${M}]`:`outputIndices${C}`};`;R+=`
          var idx${C} = ${S.getByIndices(`indicesIndices${C}`)};
          if (idx${C} < 0) {
            idx${C} = idx${C} + uniforms.axisDimLimit;
          }
          var dataIndices${C} : ${b.type.indices};
        `;for(let M=0,F=0;M<o;M++)M===d?(R+=`${o>1?`dataIndices${C}[${M}]`:`dataIndices${C}`} = u32(idx${C});`,F+=O):(R+=`${o>1?`dataIndices${C}[${M}]`:`dataIndices${C}`} = ${u.length>1?`outputIndices${C}[${F}]`:`outputIndices${C}`};`,F++);return R},z;if(e[0].dataType===9){let C=(O,R,M="")=>`
          let outputIndices${R} = ${x.offsetToIndices(`outputOffset + ${R}u`)};
          ${T(R)};
          let offset${R} = ${b.indicesToOffset(`dataIndices${R}`)};
          let index${R} = offset${R} / 4u;
          let component${R} = offset${R} % 4u;
          ${O}[${R}] = ${M}(${b.getByOffset(`index${R}`)}[component${R}]);
        `;z=`
        let outputOffset = global_idx * ${m};
        var value = vec4<u32>(0);
        ${C("value",0,"u32")}
        ${C("value",1,"u32")}
        ${C("value",2,"u32")}
        ${C("value",3,"u32")}
        ${x.setByOffset("global_idx","value")}
      `}else z=`
      let outputIndices = ${x.offsetToIndices("global_idx")};
      ${T("")};
      let value = ${b.getByIndices("dataIndices")};
      ${x.setByOffset("global_idx","value")};
      `;return`
      ${f.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(b,S,x)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${z}
      }`};return{name:"Gather",shaderCache:{hint:r.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:_}),getShaderSource:w}},ew=e=>Ze({axis:e.axis}),tw=(e,r)=>{let i=e.inputs;dg(i),e.compute(cg(e.inputs,r))}}),fg,pg,nw,rw,J_=ne(()=>{ze(),Oe(),mt(),Pe(),fg=(e,r)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let i=K.normalizeAxis(r.quantizeAxis,e[0].dims.length),s=r.blockSize,o=e[0],d=e[2],u=e.length===4?e[3]:void 0;if(d.dims.length!==o.dims.length||!o.dims.map((h,m)=>m===i?Math.ceil(h/s)===d.dims[m]:h===d.dims[m]).reduce((h,m)=>h&&m,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(u){if(u.dataType!==o.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(u.dims.length!==d.dims.length||!u.dims.map((h,m)=>h===d.dims[m]).reduce((h,m)=>h&&m,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},pg=(e,r)=>{let i=e[0].dims,s=e[1].dims,o=i.length,d=K.normalizeAxis(r.gatherAxis,o),u=K.normalizeAxis(r.quantizeAxis,o),h=i.slice(0);h.splice(d,1,...s);let m=K.size(h),g=e[2].dataType,_=e[0].dataType===22,w=[{type:12,data:m},{type:12,data:u},{type:12,data:d},{type:12,data:r.blockSize},...he(...e.map((b,S)=>b.dims),h)],f=b=>{let S=Y("data",e[0].dataType,e[0].dims.length),x=Y("inputIndices",e[1].dataType,e[1].dims.length),T=Y("scales",e[2].dataType,e[2].dims.length),z=e.length>3?Y("zeroPoint",e[3].dataType,e[3].dims.length):void 0,C=we("output",g,h.length),O=[S,x,T];z&&O.push(z);let R=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${b.registerUniforms(R).declareVariables(...O,C)}
        ${b.mainStart()}
        let output_indices = ${C.offsetToIndices("global_idx")};
        var indices_indices = ${x.type.indices}(0);
        ${s.length>1?`
          for (var i: u32 = 0; i < ${s.length}; i++) {
            let index = ${C.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${x.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${C.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${S.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${C.indicesGet("output_indices","i")};
          ${S.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${x.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${i[d]};
        }
        ${S.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${h.length}; i++) {
          let index = ${C.indicesGet("output_indices",`i + ${s.length} - 1`)};
          ${S.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${S.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${S.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${_?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${T.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${T.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${T.getByIndices("scale_indices")};
        ${z?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${z.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${z.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${_?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Rt(g)}(quantized_data - zero_point) * scale;
        ${C.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${r.cacheKey};${e.filter((b,S)=>S!==1).map(b=>b.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(b,S)=>"rank")},getRunData:()=>({outputs:[{dims:h,dataType:g}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:w}),getShaderSource:f}},nw=(e,r)=>{let i=e.inputs;fg(i,r),e.compute(pg(e.inputs,r))},rw=e=>Ze({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),hg,mg,iw,aw,e2=ne(()=>{ze(),Oe(),mt(),Pe(),hg=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},mg=(e,r)=>{let i=e[0].dims,s=e[0].dataType,o=i.length,d=e[1].dims,u=e[1].dataType,h=K.normalizeAxis(r.axis,o),m=i[h],g=d.slice(0),_=K.size(g),w=Y("input",s,o),f=Y("indicesInput",u,d.length),b=we("output",s,g.length),S=[{type:12,data:_},{type:6,data:m},{type:12,data:h}];return S.push(...he(i,d,g)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:g,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:S}),getShaderSource:x=>`
      ${x.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(w,f,b)}
      ${x.mainStart()}
      ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${b.offsetToIndices("global_idx")};

      var idx = ${f.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${w.type.indices}(outputIndices);
      ${w.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${w.getByIndices("inputIndices")};

      ${b.setByOffset("global_idx","value")};
  }`}},iw=e=>Ze({axis:e.axis}),aw=(e,r)=>{let i=e.inputs;hg(i),e.compute(mg(e.inputs,r))}}),gg,yg,sw,ow,t2=ne(()=>{ze(),Oe(),Pe(),gg=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},yg=(e,r)=>{let i=e[0].dims.slice(),s=e[1].dims.slice(),[o,d,u]=d0.getShapeOfGemmResult(i,r.transA,s,r.transB,e.length===3?e[2].dims:void 0),h=[o,d];if(!h)throw new Error("Can't use gemm on the given tensors");let m=K.size(h),g=[{type:12,data:m},{type:12,data:o},{type:12,data:d},{type:12,data:u},{type:1,data:r.alpha},{type:1,data:r.beta}],_=["type","type"];e.length===3&&(g.push(...he(e[2].dims)),_.push("rank")),g.push(...he(h));let w=f=>{let b="";r.transA&&r.transB?b="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":r.transA&&!r.transB?b="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!r.transA&&r.transB?b="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!r.transA&&!r.transB&&(b="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let S=r.alpha===1?"":"value *= uniforms.alpha;",x=Y("a",e[0].dataType,e[0].dims),T=Y("b",e[1].dataType,e[1].dims),z=x.type.value,C=null,O=[x,T];e.length===3&&(C=Y("c",e[2].dataType,e[2].dims.length),O.push(C));let R=we("output",e[0].dataType,h.length);O.push(R);let M=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${f.registerUniforms(M).declareVariables(...O)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${z}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${b}
    }

    ${S}
    ${C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",R)}; value += ${z}(uniforms.beta) * ${C.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`};return{name:"Gemm",shaderCache:{hint:`${r.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:h,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:g}),getShaderSource:w}},sw=e=>{let r=e.transA,i=e.transB,s=e.alpha,o=e.beta;return{transA:r,transB:i,alpha:s,beta:o,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},ow=(e,r)=>{gg(e.inputs),e.compute(yg(e.inputs,r))}}),Ut,vg,uw,ac,wg,Qs,lw,dw=ne(()=>{ze(),Oe(),mt(),nf(),sf(),Pe(),Kr(),Ut=(e,r)=>e.length>r&&e[r].dims.length>0?e[r]:void 0,vg=(e,r)=>{let i=e[0],s=Ut(e,1),o=Ut(e,2),d=Ut(e,3),u=Ut(e,4),h=Ut(e,5),m=Ut(e,6),g=Ut(e,7);if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let _=i.dims[0],w=i.dims[1],f=i.dims.length===3?i.dims[2]:r.numHeads*i.dims[4],b=w,S=0,x=0,T=Math.floor(f/r.numHeads);if(m&&g&&K.size(m.dims)&&K.size(g.dims)){if(m.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(m.dims[0]!==_||m.dims[1]!==r.numHeads||m.dims[3]!==T)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(g.dims[0]!==_||g.dims[1]!==r.numHeads||g.dims[3]!==T)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(m.dims[2]!==g.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(g.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');S=m.dims[2],x=m.dims[2]}else if(m&&K.size(m.dims)||g&&K.size(g.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let z;if(s&&K.size(s.dims)>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(s.dims.length<3||s.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==s.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(s.dims.length===3){if(s.dims[2]!==i.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');z=2,b=s.dims[1]}else if(s.dims.length===5){if(s.dims[2]!==r.numHeads||s.dims[3]!==2||s.dims[4]!==T)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(o)throw new Error('Expect "value" be none when "key" has packed kv format.');z=5,b=s.dims[1]}else{if(s.dims[1]!==r.numHeads||s.dims[3]!==T)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');z=0,b=s.dims[2]}}else{if(i.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(i.dims[2]!==r.numHeads||i.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');z=3}if(d&&K.size(d.dims)>0){if(d.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(s&&s.dims.length===5&&s.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let C=S+b,O=0;if(u&&K.size(u.dims)>0){O=8;let U=u.dims;throw U.length===1?U[0]===_?O=1:U[0]===3*_+2&&(O=3):U.length===2&&U[0]===_&&U[1]===C&&(O=5),O===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let R=!1,M=f;if(o&&K.size(o.dims)>0){if(o.dims.length!==3&&o.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==o.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(o.dims.length===3){if(b!==o.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');M=o.dims[2]}else{if(b!==o.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');M=o.dims[1]*o.dims[3],R=!0}}let F=!1;if(u&&K.size(u.dims)>0)throw new Error("Key padding mask is not supported");if(h&&K.size(h.dims)>0){if(h.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(h.dims[0]!==_||h.dims[1]!==r.numHeads||h.dims[2]!==w||h.dims[3]!==C)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:_,sequenceLength:w,pastSequenceLength:S,kvSequenceLength:b,totalSequenceLength:C,maxSequenceLength:x,inputHiddenSize:0,hiddenSize:f,vHiddenSize:M,headSize:T,vHeadSize:Math.floor(M/r.numHeads),numHeads:r.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:r.maskFilterValue,maskType:O,scale:r.scale,broadcastResPosBias:F,passPastInKv:R,qkvFormat:z}},uw=e=>Ze({...e}),ac=Ze({perm:[0,2,1,3]}),wg=(e,r,i,s,o,d,u)=>{let h=[s,o,d],m=K.size(h),g=[{type:12,data:m},{type:12,data:u},{type:12,data:d}],_=w=>{let f=we("qkv_with_bias",r.dataType,h),b=Y("qkv",r.dataType,h),S=Y("bias",i.dataType,h),x=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${w.registerUniforms(x).declareVariables(b,S,f)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:h,dataType:r.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:g}),getShaderSource:_},{inputs:[r,i],outputs:[-1]})[0]},Qs=(e,r,i,s,o,d,u,h)=>{let m=d;if(u&&K.size(u.dims)>0){if(s===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return m=wg(e,d,u,r,s,i*o,h),m=m.reshape([r,s,i,o]),i===1||s===1?m:e.compute(un(m,ac.perm),{inputs:[m],outputs:[-1]})[0]}else return d.dims.length===3&&(m=d.reshape([r,s,i,o])),i===1||s===1?m:e.compute(un(m,ac.perm),{inputs:[m],outputs:[-1]})[0]},lw=(e,r)=>{let i=vg(e.inputs,r),s=e.inputs[0],o=Ut(e.inputs,1),d=Ut(e.inputs,2),u=Ut(e.inputs,3),h=Ut(e.inputs,4),m=Ut(e.inputs,5),g=Ut(e.inputs,6),_=Ut(e.inputs,7);if(s.dims.length===5)throw new Error("Packed QKV is not implemented");if((o==null?void 0:o.dims.length)===5)throw new Error("Packed KV is not implemented");let w=o&&d&&o.dims.length===4&&d.dims.length===4,f=Qs(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,s,u,0);if(w)return Zs(e,f,o,d,h,void 0,g,_,m,i,r);if(!o||!d)throw new Error("key and value must be provided");let b=Qs(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.headSize,o,u,i.hiddenSize),S=Qs(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.vHeadSize,d,u,2*i.hiddenSize);Zs(e,f,b,S,h,void 0,g,_,m,i,r)}}),sc,_g,$g,Dc,cw,fw=ne(()=>{ze(),Oe(),Pe(),sc=e=>Array.from(e.getBigInt64Array(),Number),_g=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(sc(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},$g=(e,r)=>{let i=[];for(let s=0;s<e.length;++s)i.push(e[s]*r[s]);return i},Dc=(e,r)=>{let i=e[0].dims,s=r??sc(e[1]),o=$g(i,s),d=K.size(o),u=e[0].dataType,h=Y("input",u,i.length),m=we("output",u,o.length),g=_=>`
      const inputShape = ${h.indices(...i)};
      ${_.registerUniform("output_size","u32").declareVariables(h,m)}
      ${_.mainStart()}
      ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${m.offsetToIndices("global_idx")};
      var input_indices: ${h.type.indices};
      for (var i = 0; i < ${i.length}; i++) {
        let input_dim_i = ${h.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${m.indicesGet("output_indices","i")}  % input_dim_i;

        ${h.indicesSet("input_indices","i","input_dim_value")}
      }
      ${m.setByOffset("global_idx",h.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${s}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:[{type:12,data:d},...he(e[0].dims,o)]}),getShaderSource:g}},cw=e=>{_g(e.inputs),e.compute(Dc(e.inputs),{inputs:[0]})}}),xg,oc,pw,bg,uc,hw,n2=ne(()=>{ze(),Oe(),mt(),sf(),Pe(),dw(),fw(),Kr(),xg=(e,r)=>{let i=e[0],s=e[1],o=e[2],d=e[3],u=e[4];if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let h=!1,m=i.dims[0],g=i.dims[1],_=i.dims.length===3?h?i.dims[2]/3:i.dims[2]:r.numHeads*i.dims[4],w=g,f=0,b=0,S=Math.floor(_/r.numHeads),x=d&&d.dims.length!==0,T=u&&u.dims.length!==0,z=!0;if(x&&T){if(d.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');f=d.dims[1],b=d.dims[1]}else if(x||T)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let C;if(s){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(s.dims.length<3||s.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==s.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(s.dims.length===3){if(i.dims[2]%s.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');C=2,w=s.dims[1]}else if(s.dims.length===5){if(s.dims[2]!==r.numHeads||s.dims[3]!==2||s.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(o)throw new Error('Expect "value" be none when "key" has packed kv format.');C=5,w=s.dims[1]}else{if(s.dims[1]!==r.numHeads||s.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');C=0,w=s.dims[2]}}else{if(i.dims.length!==3&&i.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(i.dims.length===5&&(i.dims[2]!==r.numHeads||i.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');C=3}let O=0,R=!1,M=_;if(o){if(o.dims.length!==3&&o.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==o.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(o.dims.length===3){if(w!==o.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');M=o.dims[2]}else{if(w!==o.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');M=o.dims[1]*o.dims[3],R=!0}}let F=f+w;return{batchSize:m,sequenceLength:g,pastSequenceLength:f,kvSequenceLength:w,totalSequenceLength:F,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:_,vHiddenSize:M,headSize:S,vHeadSize:Math.floor(M/r.kvNumHeads),numHeads:r.numHeads,kvNumHeads:r.kvNumHeads,nReps:r.numHeads/r.kvNumHeads,pastPresentShareBuffer:!1,maskType:O,scale:r.scale,broadcastResPosBias:!1,passPastInKv:R,qkvFormat:C,isPastkvBSNH:z}},oc=(e,r,i,s)=>{let o=[s.batchSize,s.totalSequenceLength,s.kvNumHeads,s.headSize],d=4,u=K.size(o)/d,h=s.totalSequenceLength,m=we("present_kv",i,o.length,d),g=Y("new_kv",e.dataType,e.dims.length,d),_=r?Y("past_kv",r.dataType,r.dims.length,d):void 0,w=Math.ceil(s.headSize/d),f={x:h,y:e.dims[0],z:1},b=r?["rank","rank"]:["rank"],S=[{type:12,data:u},{type:12,data:s.pastSequenceLength},{type:12,data:s.kvSequenceLength},{type:12,data:s.totalSequenceLength}],x=[g];_?(S.push(...he(e.dims),...he(r.dims),...he(o)),x.push(_)):S.push(...he(e.dims),...he(o));let T=[{name:"output_size",type:"u32"},{name:"past_seqlen",type:"u32"},{name:"new_seqlen",type:"u32"},{name:"present_seqlen",type:"u32"}],z=`      let past_batch_stride = uniforms.past_seqlen * num_heads * H;
        var past_head_stride = uniforms.past_seqlen * H;
        if (is_bsnh) {
          past_head_stride = H;
        }
        let in_offset = b * past_batch_stride + s * row_stride + n * past_head_stride + h;
        present_kv[out_offset] = past_kv[in_offset];`,C=`      let new_batch_stride = uniforms.new_seqlen * num_heads * H;
        let new_row_stride = num_heads * H;
        let new_head_stride = H;
        let in_offset = b * new_batch_stride + (s - past_seqlen) * new_row_stride + n * new_head_stride + h;
        present_kv[out_offset] = new_kv[in_offset];`,O=r?`if (s < past_seqlen) {
        ${z}
        } else if (s < past_seqlen + uniforms.new_seqlen) {
        ${C}
        }`:`if (s < past_seqlen + uniforms.new_seqlen) {
          ${C}
        }`,R=M=>`

  ${M.registerUniforms(T).declareVariables(...x,m)}
  ${M.mainStart([w,s.kvNumHeads,1])}
    ${M.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    var indices = ${m.offsetToIndices("global_idx")};
    let h = local_id.x;
    let n = local_id.y;
    let s = workgroup_id.x;
    let b = workgroup_id.y;
    let num_heads = ${s.kvNumHeads}u;
    let H = ${w}u;

    let present_seqlen = uniforms.present_seqlen;
    let present_batch_stride = present_seqlen * num_heads * H;
    var row_stride = H;
    let is_bsnh = ${s.isPastkvBSNH};

    if (is_bsnh) {
      row_stride = num_heads * H;
    }
    var present_head_stride = present_seqlen * H;
    if (is_bsnh) {
      present_head_stride = H;
    }

    let past_seqlen = uniforms.past_seqlen;

    let out_offset = b * present_batch_stride + s * row_stride + n * present_head_stride + h;
    ${O}
  }`;return{name:"ConcatPastNew",shaderCache:{hint:`${s.kvNumHeads}${w}${!!r}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:f,programUniforms:S}),getShaderSource:R}},pw=e=>Ze({...e}),bg=Ze({perm:[0,2,1,3]}),uc=(e,r,i,s,o)=>{let d=r,u=s.kvNumHeads,h=s.nReps;return r.dims.length===3&&s.kvSequenceLength!==0&&(d=r.reshape([s.batchSize,s.kvSequenceLength,u,s.headSize])),i?d=e.compute(oc(d,i,d.dataType,s),{inputs:[d,i],outputs:[s.isPastkvBSNH?o:-1]})[0]:d=e.compute(oc(d,void 0,d.dataType,s),{inputs:[d],outputs:[s.isPastkvBSNH?o:-1]})[0],h!==1&&(d=e.compute(Dc([d],[1,1,1,h]),{inputs:[d],outputs:[-1]})[0],d=d.reshape([s.batchSize,s.totalSequenceLength,u*h,s.headSize])),e.compute(un(d,bg.perm),{inputs:[d],outputs:[-1]})[0]},hw=(e,r)=>{var m;let i=xg(e.inputs,r);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((m=e.inputs[1])==null?void 0:m.dims.length)===5)throw new Error("Packed KV is not implemented");let s=Qs(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,e.inputs[0],void 0,0),o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,d=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=uc(e,e.inputs[1],o,i,1),h=uc(e,e.inputs[2],d,i,2);Zs(e,s,u,h,void 0,void 0,void 0,void 0,void 0,i,r)}}),lc,Sg,kg,mw,r2=ne(()=>{ze(),Oe(),Kr(),Pe(),lc=(e,r,i,s,o,d,u,h)=>{let m=ft(d),g=m===1?"f32":`vec${m}f`,_=m===1?"vec2f":`mat2x${m}f`,w=o*u,f=[o,u,d/m],b=[o,u,2],S=["rank","type","type"],x=[];x.push(...he(f,b));let T=z=>{let C=Y("x",r.dataType,3,m),O=Y("scale",i.dataType,i.dims),R=Y("bias",s.dataType,s.dims),M=we("output",1,3,2),F=[C,O,R,M],U=64;return`
  var<workgroup> workgroup_shared : array<${_}, ${U}>;
  const workgroup_size = ${U}u;
  ${z.declareVariables(...F)}
  ${z.mainStart(U)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${g}(0);
    var squared_sum = ${g}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${g}(${C.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${_}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Vr("workgroup_shared[0][0]",m)} / f32(hight * ${m});
      let squared_sum_final = ${Vr("workgroup_shared[0][1]",m)} / f32(hight * ${m});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${h}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${m};${h}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:b,dataType:1}],dispatchGroup:{x:w},programUniforms:x}),getShaderSource:T},{inputs:[r,i,s],outputs:[-1]})[0]},Sg=(e,r,i)=>{let s=r[0].dims,o=s,d=2,u=s[0],h=s[1],m=K.sizeFromDimension(s,d),g=ft(m),_=K.size(o)/g,w=lc(e,r[0],r[1],r[2],u,m,h,i.epsilon),f=[u,h,m/g],b=[u,h],S=["type","none"],x=T=>{let z=Y("x",r[0].dataType,f.length,g),C=Y("scale_shift",1,b.length,2),O=we("output",r[0].dataType,f.length,g),R=[z,C,O];return`
  ${T.registerUniform("output_size","u32").declareVariables(...R)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${O.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${C.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${z.getByOffset("global_idx")} * ${O.type.value}(scale_shift.x) + ${O.type.value}(scale_shift.y);
      ${O.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${g}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:o,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...he(f,b,f)]}),getShaderSource:x},{inputs:[r[0],w]})},kg=(e,r,i)=>{let s=r[0].dims,o=s,d=s[0],u=s[s.length-1],h=K.sizeFromDimension(s,1)/u,m=ft(u),g=K.size(o)/m,_=[{type:12,data:h},{type:12,data:Math.floor(u/m)}],w=["type","type"],f=[0,s.length-1];for(let T=0;T<s.length-2;T++)f.push(T+1);let b=e.compute(un(e.inputs[0],f),{inputs:[e.inputs[0]],outputs:[-1]})[0],S=lc(e,b,r[1],r[2],d,h,u,i.epsilon),x=T=>{let z=yt(r[0].dataType),C=m===1?"vec2f":`mat${m}x2f`,O=F=>{let U=F===0?"x":"y",Q=m===1?"f32":`vec${m}f`;switch(m){case 1:return`${z}(${Q}(scale.${U}))`;case 2:return`vec2<${z}>(${Q}(scale[0].${U}, scale[1].${U}))`;case 4:return`vec4<${z}>(${Q}(scale[0].${U}, scale[1].${U}, scale[2].${U}, scale[3].${U}))`;default:throw new Error(`Not supported compoents ${m}`)}},R=Y("input",r[0].dataType,r[0].dims,m),M=we("output",r[0].dataType,o,m);return`
  @group(0) @binding(0) var<storage, read> input : array<${R.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${C}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${M.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${T.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${O(0)}, ${O(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${m}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:o,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:_}),getShaderSource:x},{inputs:[r[0],S]})},mw=(e,r)=>{r.format==="NHWC"?kg(e,e.inputs,r):Sg(e,e.inputs,r)}}),Eg,Cg,gw,i2=ne(()=>{ze(),Oe(),Pe(),Eg=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Cg=(e,r,i)=>{let s=r.simplified,o=e[0].dims,d=e[1],u=!s&&e[2],h=o,m=K.normalizeAxis(r.axis,o.length),g=K.sizeToDimension(o,m),_=K.sizeFromDimension(o,m),w=K.size(d.dims),f=u?K.size(u.dims):0;if(w!==_||u&&f!==_)throw new Error(`Size of X.shape()[axis:] == ${_}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${w} and bias size of ${f}`);let b=[];for(let M=0;M<o.length;++M)M<m?b.push(o[M]):b.push(1);let S=ft(_),x=["type","type"],T=[{type:12,data:g},{type:1,data:_},{type:12,data:Math.floor(_/S)},{type:1,data:r.epsilon}];u&&x.push("type");let z=i>1,C=i>2,O=M=>{let F=yt(e[0].dataType),U=[Y("x",e[0].dataType,e[0].dims,S),Y("scale",d.dataType,d.dims,S)];u&&U.push(Y("bias",u.dataType,u.dims,S)),U.push(we("output",e[0].dataType,h,S)),z&&U.push(we("mean_data_output",1,b)),C&&U.push(we("inv_std_output",1,b));let Q=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${M.registerUniforms(Q).declareVariables(...U)}
  ${M.mainStart()}
    ${M.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Tc("f32",S)};
    var mean_square_vector = ${Tc("f32",S)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Ia(F,S,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Vr("mean_vector",S)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Vr("mean_square_vector",S)} / uniforms.norm_size ${s?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Ia(F,S,"x[j + offset]")};
      let f32scale = ${Ia(F,S,"scale[j]")};
      output[j + offset] = ${U[0].type.value}((f32input ${s?"":"- mean"}) * inv_std_dev * f32scale
        ${u?`+ ${Ia(F,S,"bias[j]")}`:""}
      );
    }

    ${z?"mean_data_output[global_idx] = mean":""};
    ${C?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},R=[{dims:h,dataType:e[0].dataType}];return z&&R.push({dims:b,dataType:1}),C&&R.push({dims:b,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${S};${i};${s}`,inputDependencies:x},getRunData:()=>({outputs:R,dispatchGroup:{x:Math.ceil(g/64)},programUniforms:T}),getShaderSource:O}},gw=(e,r)=>{Eg(e.inputs),e.compute(Cg(e.inputs,r,e.outputCount))}}),Tg,Ig,zg,yw,vw,a2=ne(()=>{ze(),Oe(),mt(),Pe(),Tg=(e,r)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let i=e[0],s=i.dims.length;if(i.dims[s-1]!==r.k)throw new Error("The last dim of input shape does not match the k value");let o=Math.floor((r.k+r.blockSize-1)/r.blockSize),d=r.blockSize/8*r.bits,u=e[1];if(!K.areEqual(u.dims,[r.n,o,d]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let h=e[2].dims;if(K.size(h)!==r.n*o)throw new Error("scales input size error.");if(e.length===4){let m=e[3].dims,g=r.bits>4?r.n*o:r.n*Math.floor((o+1)/2);if(K.size(m)!==g)throw new Error("zeroPoints input size error.")}},Ig=(e,r)=>{let i=e[0].dims,s=i.length,o=i[s-2],d=r.k,u=r.n,h=i.slice(0,s-2),m=K.size(h),g=e[1].dims[2]/4,_=e[0].dataType,w=ft(r.k),f=ft(g),b=ft(u),S=h.concat([o,u]),x=o>1&&u/b%2===0?2:1,T=K.size(S)/b/x,z=64,C=[],O=[m,o,d/w],R=K.convertShape(e[1].dims).slice();R.splice(-1,1,g/f),C.push(...he(O)),C.push(...he(R)),C.push(...he(e[2].dims)),e.length===4&&C.push(...he(K.convertShape(e[3].dims)));let M=[m,o,u/b];C.push(...he(M));let F=U=>{let Q=O.length,se=Y("a",e[0].dataType,Q,w),ue=Y("b",12,R.length,f),Se=Y("scales",e[2].dataType,e[2].dims.length),xe=[se,ue,Se],de=e.length===4?Y("zero_points",12,e[3].dims.length):void 0;de&&xe.push(de);let Re=M.length,De=we("output",e[0].dataType,Re,b),be=yt(e[0].dataType),ke=(()=>{switch(w){case 1:return`array<${be}, 8>`;case 2:return`mat4x2<${be}>`;case 4:return`mat2x4<${be}>`;default:throw new Error(`${w}-component is not supported.`)}})(),q=()=>{let A=`
          // reuse a data
            var input_offset = ${se.indicesToOffset(`${se.type.indices}(batch, row, word_offset)`)};
            var a_data: ${ke};
            for (var j: u32 = 0; j < ${8/w}; j++) {
              a_data[j] = ${se.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let N=0;N<b*x;N++)A+=`
            b_value = ${f===1?`b${N}_data`:`b${N}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${ke}(${Array.from({length:4},(ie,ce)=>`${be}(b_value_lower[${ce}]), ${be}(b_value_upper[${ce}])`).join(", ")});
            b_dequantized_values = ${w===1?`${ke}(${Array.from({length:8},(ie,ce)=>`(b_quantized_values[${ce}] - ${de?`zero_point${N}`:"zero_point"}) * scale${N}`).join(", ")});`:`(b_quantized_values - ${ke}(${Array(8).fill(`${de?`zero_point${N}`:"zero_point"}`).join(",")})) * scale${N};`};
            workgroup_shared[local_id.x * ${x} + ${Math.floor(N/b)}]${b>1?`[${N%b}]`:""} += ${Array.from({length:8/w},(ie,ce)=>`${w===1?`a_data[${ce}] * b_dequantized_values[${ce}]`:`dot(a_data[${ce}], b_dequantized_values[${ce}])`}`).join(" + ")};
          `;return A},X=()=>{let A=`
            var col_index = col * ${b};
            ${de?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${be}(8);`}
            `;for(let N=0;N<b*x;N++)A+=`
            let scale${N} = ${Se.getByOffset("col_index * nBlocksPerCol + block")};
            ${de?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${de.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${N} = ${be}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return A},J=()=>{let A=`col_index = col * ${b};`;for(let N=0;N<b*x;N++)A+=`
            let b${N}_data = ${ue.getByIndices(`${ue.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return A+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${ke};
            var b_dequantized_values: ${ke};`,A};return`
        var<workgroup> workgroup_shared: array<${De.type.value}, ${x*z}>;
        ${U.declareVariables(...xe,De)}
        ${U.mainStart([z,1,1])}
          let output_indices = ${De.offsetToIndices(`(global_idx / ${z}) * ${x}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${z}) {
            //process one block
            var word_offset: u32 = block * ${r.blockSize/w};
            ${X()}
            for (var word: u32 = 0; word < ${g}; word += ${f}) {
              ${J()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${q()}
                word_offset += ${8/w};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${x}) {
            var output_value: ${De.type.value} = ${De.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${z}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${x};
            }
            ${De.setByIndices(`${De.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${r.blockSize};${r.bits};${w};${f};${b};${x};${z}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:S,dataType:_}],dispatchGroup:{x:T},programUniforms:C}),getShaderSource:F}},zg=(e,r)=>{let i=e[0].dims,s=i.length,o=i[s-2],d=r.k,u=r.n,h=i.slice(0,s-2),m=K.size(h),g=e[1].dims[2]/4,_=e[0].dataType,w=ft(r.k),f=ft(g),b=h.concat([o,u]),S=128,x=u%8===0?8:u%4===0?4:1,T=S/x,z=T*f*8,C=z/w,O=z/r.blockSize,R=K.size(b)/x,M=[],F=[m,o,d/w],U=K.convertShape(e[1].dims).slice();U.splice(-1,1,g/f),M.push(...he(F)),M.push(...he(U)),M.push(...he(e[2].dims)),e.length===4&&M.push(...he(K.convertShape(e[3].dims)));let Q=[m,o,u];M.push(...he(Q));let se=ue=>{let Se=F.length,xe=Y("a",e[0].dataType,Se,w),de=Y("b",12,U.length,f),Re=Y("scales",e[2].dataType,e[2].dims.length),De=[xe,de,Re],be=e.length===4?Y("zero_points",12,e[3].dims.length):void 0;be&&De.push(be);let ke=Q.length,q=we("output",e[0].dataType,ke),X=yt(e[0].dataType),J=()=>{switch(w){case 1:return`
          let a_data0 = vec4<${X}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${X}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${X}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${X}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${w}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${xe.type.value}, ${C}>;
        var<workgroup> inter_results: array<array<${q.type.value}, ${T}>, ${x}>;
        ${ue.declareVariables(...De,q)}
        ${ue.mainStart([T,x,1])}
          let output_indices = ${q.offsetToIndices(`workgroup_index * ${x}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${O} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${C};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${C}; a_offset += ${S})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${xe.getByIndices(`${xe.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${xe.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${O} + local_id.x;
            ${be?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${be.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${X}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${X}(8);`}
            let scale = ${Re.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${de.getByIndices(`${de.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${r.blockSize/w};
            for (var i: u32 = 0; i < ${f}; i++) {
              ${J()}
              let b_value = ${f===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${X}>(${Array.from({length:4},(A,N)=>`${X}(b_value_lower[${N}]), ${X}(b_value_upper[${N}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${X}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(A,N)=>`${`dot(a_data${N}, b_dequantized_values[${N}])`}`).join(" + ")};
              word_offset += ${8/w};
            }
            workgroupBarrier();
          }

          if (local_idx < ${x}) {
            var output_value: ${q.type.value} = ${q.type.value}(0);
            for (var b = 0u; b < ${T}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${q.setByIndices(`${q.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${r.blockSize};${w};${f};${T};${x}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:b,dataType:_}],dispatchGroup:{x:R},programUniforms:M}),getShaderSource:se}},yw=(e,r)=>{Tg(e.inputs,r),r.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(zg(e.inputs,r)):e.compute(Ig(e.inputs,r))},vw=e=>Ze(e)}),Ag,Rg,Og,Pg,Mg,Bg,Dg,Ng,ww,s2=ne(()=>{ze(),Oe(),Pe(),Ag=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let r=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(r=e[3].dims[0]*2===e[1].dims[0]),!r)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Rg=(e,r,i)=>{let s="";for(let o=r-1;o>=0;--o)s+=`
            k = i32(${e.indicesGet("indices",o)}) - ${ge("uniforms.pads",o,i)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${ge("uniforms.x_shape",o,r)})) {
              break;
            }
            offset += k * i32(${ge("uniforms.x_strides",o,r)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${s}
            value = x[offset];
          }
      `},Og=(e,r,i)=>{let s="";for(let o=r-1;o>=0;--o)s+=`
                k = i32(${e.indicesGet("indices",o)}) - ${ge("uniforms.pads",o,i)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${ge("uniforms.x_shape",o,r)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${ge("uniforms.x_shape",o,r)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${ge("uniforms.x_strides",o,r)});
            `;return`
              var offset = 0;
              var k = 0;
              ${s}
              value = x[offset];
          `},Pg=(e,r,i)=>{let s="";for(let o=r-1;o>=0;--o)s+=`
                k = i32(${e.indicesGet("indices",o)}) - ${ge("uniforms.pads",o,i)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${ge("uniforms.x_shape",o,r)})) {
                  k = i32(${ge("uniforms.x_shape",o,r)}) - 1;
                }
                offset += k * i32(${ge("uniforms.x_strides",o,r)});
            `;return`
              var offset = 0;
              var k = 0;
              ${s}
              value = x[offset];
          `},Mg=(e,r,i)=>{let s="";for(let o=r-1;o>=0;--o)s+=`
                k = i32(${e.indicesGet("indices",o)}) - ${ge("uniforms.pads",o,i)};
                if (k < 0)  {
                  k += i32(${ge("uniforms.x_shape",o,r)}]);
                }
                if (k >= i32(${ge("uniforms.x_shape",o,r)})) {
                  k -= i32(${ge("uniforms.x_shape",o,r)});
                }
                offset += k * i32(${ge("uniforms.x_strides",o,r)});
            `;return`
              var offset = 0;
              var k = 0;
              ${s}
              value = x[offset];
          `},Bg=(e,r,i)=>{switch(i.mode){case 0:return Rg(e,r,i.pads.length);case 1:return Og(e,r,i.pads.length);case 2:return Pg(e,r,i.pads.length);case 3:return Mg(e,r,i.pads.length);default:throw new Error("Invalid mode")}},Dg=(e,r)=>{let i=K.padShape(e[0].dims.slice(),r.pads),s=e[0].dims,o=K.size(i),d=[{type:12,data:o},{type:6,data:r.pads}],u=e.length>=3&&e[2].data;r.mode===0&&d.push({type:u?e[2].dataType:1,data:r.value}),d.push(...he(e[0].dims,i));let h=["rank"],m=g=>{let _=we("output",e[0].dataType,i.length),w=Y("x",e[0].dataType,s.length),f=w.type.value,b=Bg(_,s.length,r),S=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:r.pads.length}];return r.mode===0&&S.push({name:"constant_value",type:u?f:"f32"}),`
            ${g.registerUniforms(S).declareVariables(w,_)}
            ${g.mainStart()}
            ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${_.offsetToIndices("global_idx")};

            var value = ${f}(0);
            ${b}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${r.mode}${u}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(K.size(i)/64)},programUniforms:d}),getShaderSource:m}},Ng=(e,r)=>{if(e.length>1){let i=e[1].getBigInt64Array(),s=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,o=e[0].dims.length,d=new Int32Array(2*o).fill(0);if(e.length>=4){let h=e[3].getBigInt64Array();for(let m=0;m<h.length;m++)d[Number(h[m])]=Number(i[m]),d[Number(h[m])+o]=Number(i[m+h.length])}else i.forEach((h,m)=>d[Number(m)]=Number(h));let u=[];return d.forEach(h=>u.push(h)),{mode:r.mode,value:s,pads:u}}else return r},ww=(e,r)=>{Ag(e.inputs);let i=Ng(e.inputs,r);e.compute(Dg(e.inputs,i),{inputs:[0]})}}),js,dc,cc,fc,pc,Lg,Ug,hc,mc,_w,$w,gc,xw,bw,yc,Sw,kw,Ew,Cw,o2=ne(()=>{Mn(),ze(),Oe(),Pe(),js=e=>{if(Je.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},dc=(e,r,i)=>{let s=r.format==="NHWC",o=e.dims.slice();s&&o.splice(1,0,o.pop());let d=Object.hasOwnProperty.call(r,"dilations"),u=r.kernelShape.slice(),h=r.strides.slice(),m=d?r.dilations.slice():[],g=r.pads.slice();Gu.adjustPoolAttributes(i,o,u,h,m,g);let _=Gu.computePoolOutputShape(i,o,h,m,u,g,r.autoPad),w=Object.assign({},r);d?Object.assign(w,{kernelShape:u,strides:h,pads:g,dilations:m,cacheKey:r.cacheKey}):Object.assign(w,{kernelShape:u,strides:h,pads:g,cacheKey:r.cacheKey});let f=_.slice();return f.push(f.splice(1,1)[0]),[w,s?f:_]},cc=(e,r)=>{let i=r.format==="NHWC",s=K.size(e),o=K.size(r.kernelShape),d=[{type:12,data:s},{type:12,data:o}],u=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(r.kernelShape.length<=2){let h=r.kernelShape[r.kernelShape.length-1],m=r.strides[r.strides.length-1],g=r.pads[r.pads.length/2-1],_=r.pads[r.pads.length-1],w=!!(g+_);d.push({type:12,data:h},{type:12,data:m},{type:12,data:g},{type:12,data:_}),u.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let f=!1;if(r.kernelShape.length===2){let b=r.kernelShape[r.kernelShape.length-2],S=r.strides[r.strides.length-2],x=r.pads[r.pads.length/2-2],T=r.pads[r.pads.length-2];f=!!(x+T),d.push({type:12,data:b},{type:12,data:S},{type:12,data:x},{type:12,data:T}),u.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[d,u,!0,w,f]}else{if(i)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let h=K.computeStrides(r.kernelShape);d.push({type:12,data:h},{type:12,data:r.pads},{type:12,data:r.strides}),u.push({name:"kernelStrides",type:"u32",length:h.length},{name:"pads",type:"u32",length:r.pads.length},{name:"strides",type:"u32",length:r.strides.length});let m=r.pads.reduce((g,_)=>g+_);return[d,u,!!m,!1,!1]}},fc=(e,r,i,s,o,d,u,h,m,g,_,w)=>{let f=o.format==="NHWC",b=r.type.value,S=we("output",r.type.tensor,s);if(o.kernelShape.length<=2){let x="",T="",z="",C=i-(f?2:1);if(_?x=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${C}] = indices[${C}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${C}] < 0 || xIndices[${C}]
                      >= uniforms.x_shape[${C}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${r.indicesToOffset("xIndices")}];
                  ${d}
                }`:x=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${C}] = indices[${C}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${r.indicesToOffset("xIndices")}];
                  ${d}
                }`,o.kernelShape.length===2){let O=i-(f?3:2);w?T=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${O}] = indices[${O}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${O}] < 0 || xIndices[${O}] >= uniforms.x_shape[${O}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:T=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${O}] = indices[${O}] * uniforms.sh - uniforms.phStart + j;
                `,z=`
              }
            `}return`
            ${e.registerUniforms(m).declareVariables(r,S)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${S.offsetToIndices("global_idx")};
              var xIndices = ${S.offsetToIndices("global_idx")};

              var value = ${b}(${h});
              var pad = 0;
              ${T}
              ${x}
              ${z}
              ${u}

              output[global_idx] = value;
            }`}else{if(f)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let x=o.kernelShape.length,T=o.pads.length,z="";return g?z=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${r.indicesToOffset("xIndices")}];
                ${d}
              }`:z=`
              }
              let x_val = x[${r.indicesToOffset("xIndices")}];
              ${d}
            `,`
            ${e.registerUniforms(m).declareVariables(r,S)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${S.offsetToIndices("global_idx")};
              var xIndices = ${S.offsetToIndices("global_idx")};

              var offsets: array<u32, ${x}>;

              var value = ${b}(${h});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${x-1}u; j++) {
                  offsets[j] = offset / ${ge("uniforms.kernelStrides","j",x)};
                  offset -= offsets[j] * ${ge("uniforms.kernelStrides","j",x)};
                }
                offsets[${x-1}] = offset;

                isPad = false;
                for (var j = ${i-x}u; j < ${i}u; j++) {
                  xIndices[j] = indices[j] * ${ge("uniforms.strides",`j - ${i-x}u`,x)}
                    + offsets[j - ${i-x}u] - ${ge("uniforms.pads","j - 2u",T)};
                  ${z}
              }
              ${u}

              output[global_idx] = value;
            }`}},pc=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Lg=e=>`${pc(e)};${e.countIncludePad}`,Ug=e=>`${pc(e)};${e.storageOrder};${e.dilations}`,hc=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),mc=(e,r,i,s)=>{let[o,d]=dc(r,s,i),u=Y("x",r.dataType,r.dims.length),h=u.type.value,m="value += x_val;",g="";o.countIncludePad?g+=`value /= ${h}(uniforms.kernelSize);`:g+=`value /= ${h}(i32(uniforms.kernelSize) - pad);`;let[_,w,f,b,S]=cc(d,o);_.push(...he(r.dims,d));let x=["rank"];return{name:e,shaderCache:{hint:`${s.cacheKey};${f};${b};${S}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:d,dataType:r.dataType}],dispatchGroup:{x:Math.ceil(K.size(d)/64)},programUniforms:_}),getShaderSource:T=>fc(T,u,r.dims.length,d.length,o,m,g,0,w,f,b,S)}},_w=e=>{let r=e.count_include_pad!==0,i=hc(e);if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let s={countIncludePad:r,...i,cacheKey:""};return{...s,cacheKey:Lg(s)}},$w=(e,r)=>{js(e.inputs),e.compute(mc("AveragePool",e.inputs[0],!1,r))},gc={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},xw=e=>{let r=e.format;return{format:r,...gc,cacheKey:r}},bw=(e,r)=>{js(e.inputs),e.compute(mc("GlobalAveragePool",e.inputs[0],!0,r))},yc=(e,r,i,s)=>{let[o,d]=dc(r,s,i),u=`
      value = max(x_val, value);
    `,h="",m=Y("x",r.dataType,r.dims.length),g=["rank"],[_,w,f,b,S]=cc(d,o);return _.push(...he(r.dims,d)),{name:e,shaderCache:{hint:`${s.cacheKey};${f};${b};${S}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:d,dataType:r.dataType}],dispatchGroup:{x:Math.ceil(K.size(d)/64)},programUniforms:_}),getShaderSource:x=>fc(x,m,r.dims.length,d.length,o,u,h,r.dataType===10?-65504:-1e5,w,f,b,S)}},Sw=(e,r)=>{js(e.inputs),e.compute(yc("MaxPool",e.inputs[0],!1,r))},kw=e=>{let r=e.storage_order,i=e.dilations,s=hc(e);if(r!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(s.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let o={storageOrder:r,dilations:i,...s,cacheKey:""};return{...o,cacheKey:Ug(o)}},Ew=e=>{let r=e.format;return{format:r,...gc,cacheKey:r}},Cw=(e,r)=>{js(e.inputs),e.compute(yc("GlobalMaxPool",e.inputs[0],!0,r))}}),jg,Wg,Tw,Iw,u2=ne(()=>{ze(),Oe(),mt(),Pe(),jg=(e,r)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((i,s)=>i===e[2].dims[s]).reduce((i,s)=>i&&s,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(r.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((o,d)=>d===r.axis||o===e[0].dims[d]).reduce((o,d)=>o&&d,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let i=e[0].dims[r.axis],s=e[1].dims[r.axis];if(r.blockSize<Math.ceil(i/s)||r.blockSize>Math.ceil(i/(s-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Wg=(e,r)=>{let i=K.normalizeAxis(r.axis,e[0].dims.length),s=e[0].dataType,o=s===3,d=e[0].dims,u=e[1].dataType,h=K.size(d),m=s===3||s===2,g=m?[Math.ceil(K.size(e[0].dims)/4)]:e[0].dims,_=e[1].dims,w=e.length>2?e[2]:void 0,f=w?m?[Math.ceil(K.size(w.dims)/4)]:w.dims:void 0,b=_.length===0||_.length===1&&_[0]===1,S=b===!1&&_.length===1,x=ft(h),T=b&&(!m||x===4),z=T?x:1,C=T&&!m?x:1,O=Y("input",m?12:s,g.length,C),R=Y("scale",u,_.length),M=w?Y("zero_point",m?12:s,f.length):void 0,F=we("output",u,d.length,z),U=[O,R];M&&U.push(M);let Q=[g,_];w&&Q.push(f);let se=[{type:12,data:h/z},{type:12,data:i},{type:12,data:r.blockSize},...he(...Q,d)],ue=Se=>{let xe=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${Se.registerUniforms(xe).declareVariables(...U,F)}
      ${Se.mainStart()}
          ${Se.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${F.offsetToIndices("global_idx")};

          // Set input x
          ${m?`
            let input = ${O.getByOffset("global_idx / 4")};
            let x_vec = ${o?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${z===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${O.getByOffset("global_idx")};`};

          // Set scale input
          ${b?`let scale_value= ${R.getByOffset("0")}`:S?`
            let scale_index = ${F.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${R.getByOffset("scale_index")};`:`
            var scale_indices: ${R.type.indices} = output_indices;
            let index = ${R.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${R.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${R.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${M?b?m?`
                let zero_point_input = ${M.getByOffset("0")};
                let zero_point_vec =  ${o?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${M.getByOffset("0")}`:S?m?`
                let zero_point_index = ${F.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${M.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${o?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${F.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${M.getByOffset("zero_point_index")};`:m?`
                let zero_point_offset = ${R.indicesToOffset("scale_indices")};
                let zero_point_input = ${M.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${o?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${M.getByIndices("scale_indices")};`:`let zero_point_value = ${m?o?"i32":"u32":O.type.value}(0);`};
      // Compute and write output
      ${F.setByOffset("global_idx",`${F.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:r.cacheKey,inputDependencies:M?["rank","rank","rank"]:["rank","rank"]},getShaderSource:ue,getRunData:()=>({outputs:[{dims:d,dataType:u}],dispatchGroup:{x:Math.ceil(h/z/64),y:1,z:1},programUniforms:se})}},Tw=(e,r)=>{jg(e.inputs,r),e.compute(Wg(e.inputs,r))},Iw=e=>Ze({axis:e.axis,blockSize:e.blockSize})}),Fg,Vg,zw,l2=ne(()=>{Mn(),ze(),Pe(),Fg=(e,r,i)=>{let s=e===r,o=e<r&&i<0,d=e>r&&i>0;if(s||o||d)throw new Error("Range these inputs' contents are invalid.")},Vg=(e,r,i,s)=>{let o=Math.abs(Math.ceil((r-e)/i)),d=[o],u=o,h=[{type:12,data:u},{type:s,data:e},{type:s,data:i},...he(d)],m=g=>{let _=we("output",s,d.length),w=_.type.value,f=[{name:"outputSize",type:"u32"},{name:"start",type:w},{name:"delta",type:w}];return`
        ${g.registerUniforms(f).declareVariables(_)}
        ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${w}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${s}`},getShaderSource:m,getRunData:()=>({outputs:[{dims:d,dataType:s}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h})}},zw=e=>{let r=0,i=0,s=0;e.inputs[0].dataType===6?(r=e.inputs[0].getInt32Array()[0],i=e.inputs[1].getInt32Array()[0],s=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(r=e.inputs[0].getFloat32Array()[0],i=e.inputs[1].getFloat32Array()[0],s=e.inputs[2].getFloat32Array()[0]),Je.webgpu.validateInputContent&&Fg(r,i,s),e.compute(Vg(r,i,s,e.inputs[0].dataType),{inputs:[]})}}),Hg,qg,Gg,Kg,Qg,Yg,Zg,Xg,Jg,ey,ty,vc,ny,ry,iy,ay,sy,Aw,Rw,d2=ne(()=>{ze(),Oe(),mt(),Pe(),Hg=(e,r)=>{if(e.every(i=>i>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(r.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(r.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},qg=(e,r,i)=>{r.every(o=>o>=0&&o<i||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let s=new Array(i).fill(1);return r.forEach((o,d)=>s[o]=e[d]),s},Gg=(e,r,i,s,o,d)=>{let[u,h,m]=i>10?[1,2,3]:[-1,e.length>1?1:-1,-1],g=e[0].dims.length;if(u>0&&e.length>u&&e[u].dims.length>0)e[u].getFloat32Array().forEach(_=>d.push(_));else if(r.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(h>0&&e.length>h&&e[h].dims.length===1&&e[h].dims[0]>0){if(e[h].getFloat32Array().forEach(_=>s.push(_)),s.length!==0&&s.length!==g&&i>=18&&s.length!==r.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Hg(s,r),r.axes.length>0&&qg(s,r.axes,g).forEach((_,w)=>s[w]=_)}if(m>0&&e.length>m&&e[m].dims.length===1&&e[m].dims[0]>0&&(e[m].getBigInt64Array().forEach(_=>o.push(Number(_))),o.length!==0&&o.length!==g&&i>=18&&o.length!==r.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(r.axes.length>0){if(s.length!==0&&s.length!==r.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(o.length!==0&&o.length!==r.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof s<"u"&&typeof o<"u"&&s.length>0&&o.length>g)throw new Error("Resize requires only of scales or sizes to be specified")},Kg=(e,r)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${r} { `+(()=>{switch(e){case"asymmetric":return`return ${r}(xResized) / ${r}(xScale);`;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${r}(xResized) + 0.5) / ${r}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${r}(xResized) + 0.5) / ${r}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    // The whole part and the fractional part are calculated separately due to inaccuracy of floating
                    // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
                    // offset-by-one error later in floor().
                    let whole = ${r}(xResized * (lengthOriginal - 1) / (lengthResized - 1));
                    let fract =
                        ${r}(xResized * (lengthOriginal - 1) % (lengthResized - 1)) / ${r}(lengthResized - 1);
                    return whole + fract;
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${r}(roiStart) * ${r}(lengthOriginal - 1) +
                        (${r}(xResized) * ${r}(roiEnd - roiStart) * ${r}(lengthOriginal - 1)) /
                        ${r}(lengthResized - 1);
                  } else {
                    return 0.5 * ${r}(roiStart + roiEnd) * ${r}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${r}xScale * ${r}(lengthResized);
                  const adjustment = ${r}(lengthResized) / outputWidth;
                  const center = ${r}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${r}(xResized) + 0.5) / ${r}(xScale)) - 0.5;`;case"half_pixel":return`return ((${r}(xResized) + 0.5) / ${r}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Qg=(e,r,i)=>`fn getNearestPixelFromOriginal(xOriginal: ${i}, isDownSample: bool) -> ${i} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(r<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Yg=(e,r,i)=>{let s=new Array(i).fill(0).concat(new Array(i).fill(1)),o=e.length===0?s:e.slice();return r.length>0?(r.forEach((d,u)=>{s[d]=o[u],s[u+i]=o[r.length+u]}),s):o},Zg=(e,r,i,s)=>{let o=[];if(i.length>0)if(s.length>0){if(e.forEach(d=>o.push(d)),Math.max(...s)>e.length)throw new Error("axes is out of bound");s.forEach((d,u)=>o[d]=i[u])}else i.forEach(d=>o.push(d));else{if(r.length===0)throw new Error("Resize requires either scales or sizes.");o=e.map((d,u)=>Math.round(d*r[u]))}return o},Xg=(e,r,i)=>{let s=(()=>{switch(i.keepAspectRatioPolicy){case"not_larger":return i.axes.length>0?Math.min(...i.axes.map(d=>r[d]),Number.MAX_VALUE):Math.min(...r,Number.MAX_VALUE);case"not_smaller":return i.axes.length>0?Math.max(...i.axes.map(d=>r[d]),Number.MIN_VALUE):Math.max(...r,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${i.keepAspectRatioPolicy} is not supported`)}})();r.fill(1,0,r.length);let o=e.slice();return i.axes.length>0?(i.axes.forEach(d=>r[d]=s),i.axes.forEach(d=>o[d]=Math.round(e[d]*r[d]))):(r.fill(s,0,r.length),o.forEach((d,u)=>o[u]=Math.round(d*r[u]))),o},Jg=(e,r,i,s,o)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${i.length}> {
      var original_indices: array<${e.type.value}, ${i.length}>;
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${ge("uniforms.scales","i",s)};
        var roi_low = ${ge("uniforms.roi","i",o)};
        var roi_hi = ${ge("uniforms.roi",`i + ${r.length}`,o)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${ge("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${ge("uniforms.output_shape","i",i.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,ey=(e,r,i,s,o,d,u)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${r.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${s.length}; i++) {
        var output_index = ${r.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${ge("uniforms.scales","i",o)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${ge("uniforms.roi","i",d)};
          var roi_hi = ${ge("uniforms.roi",`i + ${i.length}`,d)};
          var input_shape_i = ${ge("uniforms.input_shape","i",i.length)};
          var output_shape_i = ${ge("uniforms.output_shape","i",s.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${u} || (original_idx >= 0 && original_idx < ${r.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${r.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i"," input_index")}
      }
      return input_indices;
    }`,ty=(e,r)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ge("uniforms.input_shape","i",r.length)}) {
          return false;
        }
      }
      return true;
    }`,vc=(e,r,i,s)=>e.rank>s?`
    ${e.indicesSet("input_indices",r,"channel")};
    ${e.indicesSet("input_indices",i,"batch")};
`:"",ny=(e,r,i,s,o)=>{let[d,u,h,m]=i.length===2?[-1,0,1,-1]:[0,2,3,1],g=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${g} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",u,`max(0, min(row, ${i[u]} - 1))`)};
      ${e.indicesSet("input_indices",h,`max(0, min(col, ${i[h]} - 1))`)};
      ${vc(e,m,d,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${r.type.indices}) -> ${g} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${g} = originalIndices[${u}];
      var col:${g} = originalIndices[${h}];
      ${s?`if (row < 0 || row > (${i[u]} - 1) || col < 0 || col > (${i[h]} - 1)) {
        return ${o};
      }`:""};
      row = max(0, min(row, ${i[u]} - 1));
      col = max(0, min(col, ${i[h]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${i.length>2?`u32(originalIndices[${m}])`:"0"};
      var batch: u32 =  ${i.length>2?`u32(originalIndices[${d}])`:"0"};
      var x11: ${g} = getInputValue(batch, channel, row1, col1);
      var x12: ${g} = getInputValue(batch, channel, row1, col2);
      var x21: ${g} = getInputValue(batch, channel, row2, col1);
      var x22: ${g} = getInputValue(batch, channel, row2, col2);
      var dx1: ${g} = abs(row - ${g}(row1));
      var dx2: ${g} = abs(${g}(row2) - row);
      var dy1: ${g} = abs(col - ${g}(col1));
      var dy2: ${g} = abs(${g}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},ry=(e,r,i,s,o,d,u,h,m,g)=>{let _=i.length===2,[w,f]=_?[0,1]:[2,3],b=e.type.value,S=x=>{let T=x===w?"row":"col";return`
      fn ${T}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${r.type.indices}) -> ${b} {
        var output_index = ${r.indicesGet("output_indices",x)};
        var originalIdx: ${b} = getOriginalCoordinateFromResizedCoordinate(output_index, ${o[x]},
        ${s[x]}, ${i[x]}, ${d[x]}, ${d[x]} + ${i.length});
        var fractOriginalIdx: ${b} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${h} && (originalIdx < 0 || originalIdx > (${i[x]} - 1))) {
          return ${m};
        }
        var data: array<${b}, 4> = array<${b}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${T}: ${b} = originalIdx + ${b}(i);
          if (${T} < 0 || ${T} >= ${i[x]}) {
            ${g?`coefs[i + 1] = 0.0;
                        continue;`:h?`return ${m};`:`${T} = max(0, min(${T}, ${i[x]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",x,`u32(${T})`)};
          data[i + 1] = ${x===w?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${S(w)};
    ${S(f)};
  fn getCubicInterpolationCoefs(s: ${b}) -> array<${b}, 4> {
    var absS = abs(s);
    var coeffs: array<${b}, 4> = array<${b}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${b} = 1.0 - absS;
    var twoMinusAbsS: ${b} = 2.0 - absS;
    var onePlusAbsS: ${b} = 1.0 + absS;
    coeffs[0] = ((${u} * onePlusAbsS - 5 * ${u}) * onePlusAbsS + 8 * ${u}) * onePlusAbsS - 4 * ${u};
    coeffs[1] = ((${u} + 2) * absS - (${u} + 3)) * absS * absS + 1;
    coeffs[2] = ((${u} + 2) * oneMinusAbsS - (${u} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${u} * twoMinusAbsS - 5 * ${u}) * twoMinusAbsS + 8 * ${u}) * twoMinusAbsS - 4 * ${u};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${b}, 4>, coefs: array<${b}, 4>) -> ${b} {
    var coefsSum: ${b} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${r.type.indices}) -> ${b} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},iy=(e,r,i,s,o)=>{let[d,u,h,m,g]=i.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],_=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${_} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",u,`max(0, min(depth, ${i[u]} - 1))`)};
      ${e.indicesSet("input_indices",h,`max(0, min(height, ${i[h]} - 1))`)};
      ${e.indicesSet("input_indices",m,`max(0, min(width, ${i[m]} - 1))`)};
      ${vc(e,g,d,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${r.type.indices}) -> ${_} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${_} = originalIndices[${u}];
      var height:${_} = originalIndices[${h}];
      var width:${_} = originalIndices[${m}];
      ${s?`if (depth < 0 || depth > (${i[u]} - 1) || height < 0 || height > (${i[h]} - 1) || width < 0 || (width > ${i[m]} - 1)) {
      return ${o};
        }`:""};

    depth = max(0, min(depth, ${i[u]} - 1));
      height = max(0, min(height, ${i[h]} - 1));
      width = max(0, min(width, ${i[m]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${i.length>3?`u32(originalIndices[${g}])`:"0"};
      var batch: u32 =  ${i.length>3?`u32(originalIndices[${d}])`:"0"};

      var x111: ${_} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${_} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${_} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${_} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${_} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${_} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${_} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${_} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${_} = abs(depth - ${_}(depth1));
      var dx2: ${_} = abs(${_}(depth2) - depth);
      var dy1: ${_} = abs(height - ${_}(height1));
      var dy2: ${_} = abs(${_}(height2) - height);
      var dz1: ${_} = abs(width - ${_}(width1));
      var dz2: ${_} = abs(${_}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},ay=(e,r,i,s,o,d)=>{let u=e.dims,h=Yg(d,r.axes,u.length),m=Zg(u,s,o,r.axes),g=s.slice();s.length===0&&(g=u.map((C,O)=>C===0?1:m[O]/C),r.keepAspectRatioPolicy!=="stretch"&&(m=Xg(u,g,r)));let _=we("output",e.dataType,m.length),w=Y("input",e.dataType,u.length),f=K.size(m),b=u.length===m.length&&u.every((C,O)=>C===m[O]),S=r.coordinateTransformMode==="tf_crop_and_resize",x=r.extrapolationValue,T=w.type.value,z=C=>`
      ${b?"":`
      ${Kg(r.coordinateTransformMode,T)};
      ${(()=>{switch(r.mode){case"nearest":return`
              ${ty(w,u)};
              ${Qg(r.nearestMode,i,T)};
              ${ey(w,_,u,m,g.length,h.length,S)};
              `;case"linear":return`
              ${Jg(_,u,m,g.length,h.length)};
              ${(()=>{if(u.length===2||u.length===4)return`${ny(w,_,u,S,x)}`;if(u.length===3||u.length===5)return`${iy(w,_,u,S,x)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(u.length===2||u.length===4)return`${ry(w,_,u,m,g,h,r.cubicCoeffA,S,r.extrapolationValue,r.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${C.registerUniform("output_size","u32").registerUniform("scales","f32",g.length).registerUniform("roi","f32",h.length).declareVariables(w,_)}
      ${C.mainStart()}
        ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${b?"output[global_idx] = input[global_idx];":`
        let output_indices = ${_.offsetToIndices("global_idx")};
        var input_indices: ${w.type.indices};
        ${(()=>{switch(r.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${w.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${r.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${u.length===2||u.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${r.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${r.cacheKey}|${i}|${g.length>0?g:""}|${o.length>0?o:""}|${h.length>0?h:""}|${b}|${u}`,inputDependencies:["rank"]},getShaderSource:z,getRunData:()=>({outputs:[{dims:m,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:g},{type:1,data:h},...he(u,m)]})}},sy=e=>{let r=e.customDataBuffer;return new Uint32Array(r,r.byteOffset,1)[0]},Aw=(e,r)=>{let i=[],s=[],o=[],d=sy(e);if(r.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Gg(e.inputs,r,d,i,s,o),e.compute(ay(e.inputs[0],r,d,i,s,o),{inputs:[0]})},Rw=e=>{let r=e.antialias,i=e.axes,s=e.coordinateTransformMode,o=e.cubicCoeffA,d=e.excludeOutside!==0,u=e.extrapolationValue,h=e.keepAspectRatioPolicy,m=e.mode,g=e.nearestMode===""?"simple":e.nearestMode;return Ze({antialias:r,axes:i,coordinateTransformMode:s,cubicCoeffA:o,excludeOutside:d,extrapolationValue:u,keepAspectRatioPolicy:h,mode:m,nearestMode:g})}}),oy,uy,Ow,c2=ne(()=>{ze(),Oe(),mt(),Pe(),oy=(e,r)=>{let[i,s,o,d]=e,{numHeads:u,rotaryEmbeddingDim:h}=r;if(i.dims.length!==3&&i.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${i.dims.length}`);if(!K.areEqual(s.dims,[])&&!K.areEqual(s.dims,[1])&&s.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${s.dims.length}`);if(o.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${o.dims.length}`);if(d.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${d.dims.length}`);if(!K.areEqual(o.dims,d.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(h>0&&u===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let m=i.dims[0],g=i.dims[i.dims.length-2],_=o.dims[0],w=K.sizeFromDimension(i.dims,1)/g,f=h===0?o.dims[1]*2:w/u;if(h>f)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(s.dims.length===2){if(m!==s.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${s.dims[0]}`);if(g!==s.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${s.dims[1]}`)}if(f/2!==o.dims[1]&&h/2!==o.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${o.dims[1]}`);if(g>_)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},uy=(e,r)=>{let{interleaved:i,numHeads:s,rotaryEmbeddingDim:o,scale:d}=r,u=e[0].dims[0],h=K.sizeFromDimension(e[0].dims,1),m=e[0].dims[e[0].dims.length-2],g=h/m,_=e[2].dims[1],w=o===0?_*2:g/s,f=new Array(u,m,g/w,w-_),b=K.computeStrides(f),S=[{type:1,data:d},{type:12,data:f},{type:12,data:b},...e[0].dims.length===3?new Array({type:12,data:[h,g,w,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[h,w,m*w,1]}):[],...he(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],x=T=>{let z=Y("input",e[0].dataType,e[0].dims.length),C=Y("position_ids",e[1].dataType,e[1].dims.length),O=Y("cos_cache",e[2].dataType,e[2].dims.length),R=Y("sin_cache",e[3].dataType,e[3].dims.length),M=we("output",e[0].dataType,e[0].dims.length);return T.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:f.length},{name:"global_strides",type:"u32",length:b.length},{name:"input_output_strides",type:"u32",length:b.length}]),`
        ${T.declareVariables(z,C,O,R,M)}

        ${T.mainStart(Aa)}
          let half_rotary_emb_dim = uniforms.${O.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${T.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${C.broadcastedIndicesToOffset("bsnh.xy",we("",C.type.tensor,2))};
            let position_id =
                u32(${C.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${i});
            let j = i + select(half_rotary_emb_dim, 1, ${i});
            let re = ${z.getByOffset("i")} * ${O.get("position_id","bsnh[3]")} -
                ${z.getByOffset("j")} * ${R.get("position_id","bsnh[3]")};
            ${M.setByOffset("i","re")}
            let im = ${z.getByOffset("i")} * ${R.get("position_id","bsnh[3]")} +
                ${z.getByOffset("j")} * ${O.get("position_id","bsnh[3]")};
            ${M.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${M.setByOffset("k",z.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Ze({interleaved:i}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:x,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(K.size(f)/Aa)},programUniforms:S})}},Ow=(e,r)=>{oy(e.inputs,r),e.compute(uy(e.inputs,r))}}),ly,dy,Pw,f2=ne(()=>{ze(),Oe(),Pe(),ly=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let r=e[0],i=e[1],s=e[2];if(r.dataType!==i.dataType||r.dataType!==s.dataType)throw new Error("All inputs must have the same data type");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Input must be 2D or 3D");if(i.dims.length!==3&&i.dims.length!==2)throw new Error("Skip must be 2D or 3D");let o=r.dims[r.dims.length-1],d=r.dims[r.dims.length-2];if(i.dims[i.dims.length-1]!==o)throw new Error("Skip must have the same hidden size as input");if(i.dims[i.dims.length-2]!==d)throw new Error("Skip must have the same sequence length as input");if(s.dims.length!==1)throw new Error("Gamma must be 1D");if(s.dims[s.dims.length-1]!==o)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let u=e[3];if(u.dims.length!==1)throw new Error("Beta must be 1D");if(u.dims[u.dims.length-1]!==o)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let u=e[4];if(u.dims.length!==1)throw new Error("Bias must be 1D");if(u.dims[u.dims.length-1]!==o)throw new Error("Bias must have the same hidden size as input")}},dy=(e,r,i,s)=>{let o=r.simplified,d=e[0].dims,u=K.size(d),h=d,m=u,g=d.slice(-1)[0],_=s?d.slice(0,-1).concat(1):[],w=!o&&e.length>3,f=e.length>4,b=s&&i>1,S=s&&i>2,x=i>3,T=64,z=ft(g),C=[{type:12,data:m},{type:12,data:z},{type:12,data:g},{type:1,data:r.epsilon}],O=M=>{let F=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],U=[Y("x",e[0].dataType,e[0].dims,z),Y("skip",e[1].dataType,e[1].dims,z),Y("gamma",e[2].dataType,e[2].dims,z)];w&&U.push(Y("beta",e[3].dataType,e[3].dims,z)),f&&U.push(Y("bias",e[4].dataType,e[4].dims,z)),U.push(we("output",e[0].dataType,h,z)),b&&U.push(we("mean_output",1,_)),S&&U.push(we("inv_std_output",1,_)),x&&U.push(we("input_skip_bias_sum",e[0].dataType,h,z));let Q=yt(e[0].dataType),se=yt(1,z);return`

      ${M.registerUniforms(F).declareVariables(...U)}
      var<workgroup> sum_shared : array<${se}, ${T}>;
      var<workgroup> sum_squared_shared : array<${se}, ${T}>;

      ${M.mainStart([T,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${T};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${T};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${T-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${f?"bias[offset1d + i]":Q+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${x?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Ia(Q,z,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${T};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Vr("sum",z)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Vr("square_sum",z)} / f32(uniforms.hidden_size) ${o?"":"- mean * mean"} + uniforms.epsilon);
        ${b?"mean_output[global_idx] = mean;":""}
        ${S?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${o?"":`- ${Q}(mean)`}) *
            ${Q}(inv_std_dev) * gamma[offset1d + i]
            ${w?"+ beta[offset1d + i]":""};
        }
      }`},R=[{dims:h,dataType:e[0].dataType}];return i>1&&R.push({dims:_,dataType:1}),i>2&&R.push({dims:_,dataType:1}),i>3&&R.push({dims:d,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${z};${b};${S};${x}`,inputDependencies:e.map((M,F)=>"type")},getShaderSource:O,getRunData:()=>({outputs:R,dispatchGroup:{x:Math.ceil(m/g)},programUniforms:C})}},Pw=(e,r)=>{ly(e.inputs);let i=[0];e.outputCount>1&&i.push(-3),e.outputCount>2&&i.push(-3),e.outputCount>3&&i.push(3),e.compute(dy(e.inputs,r,e.outputCount,!1),{outputs:i})}}),cy,Ws,fy,wc,py,hy,Mw,Bw,p2=ne(()=>{ze(),Oe(),mt(),Pe(),cy=(e,r)=>{if(!e||e.length<1)throw new Error("too few inputs");if(r.axes.length!==0){if(r.axes.length!==r.starts.length||r.axes.length!==r.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(r.starts.length!==r.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((i,s)=>{if(e[s+1].dataType!==6&&e[s+1].dataType!==7)throw new Error(`Input ${s} must be an array of int32 or int64`)})},Ws=(e,r)=>{let i=[];if(e.length>r)if(e[r].dataType===7)e[r].getBigInt64Array().forEach(s=>i.push(Number(s)));else if(e[r].dataType===6)e[r].getInt32Array().forEach(s=>i.push(Number(s)));else throw new Error(`Input ${r} must be an array of int32 or int64`);return i},fy=(e,r)=>{if(e.length>1){let i=Ws(e,1),s=Ws(e,2),o=Ws(e,3);return o.length===0&&(o=[...Array(e[0].dims.length).keys()]),Ze({starts:i,ends:s,axes:o})}else return r},wc=(e,r,i,s,o)=>{let d=e;return e<0&&(d+=i[s[r]]),o[r]<0?Math.max(0,Math.min(d,i[s[r]]-1)):Math.max(0,Math.min(d,i[s[r]]))},py=(e,r,i)=>`fn calculateInputIndices(output_indices: ${r.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${i.length}; i >= 0; i--) {
            let input_shape_i = ${ge("uniforms.input_shape","i",i.length)};
            let steps_i = ${ge("uniforms.steps","i",i.length)};
            let signs_i = ${ge("uniforms.signs","i",i.length)};
            let starts_i = ${ge("uniforms.starts","i",i.length)};
            var output_index = ${r.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,hy=(e,r)=>{let i=e[0].dims,s=K.size(i),o=r.axes.length>0?K.normalizeAxes(r.axes,i.length):[...Array(i.length).keys()],d=Ws(e,4);d.forEach(z=>z!==0||(()=>{throw new Error("step cannot be 0")})),d.length===0&&(d=Array(o.length).fill(1));let u=r.starts.map((z,C)=>wc(z,C,i,o,d)),h=r.ends.map((z,C)=>wc(z,C,i,o,d));if(o.length!==u.length||o.length!==h.length)throw new Error("start, ends and axes should have the same number of elements");if(o.length!==i.length)for(let z=0;z<i.length;++z)o.includes(z)||(u.splice(z,0,0),h.splice(z,0,i[z]),d.splice(z,0,1));let m=d.map(z=>Math.sign(z));d.forEach((z,C,O)=>{if(z<0){let R=(h[C]-u[C])/z,M=u[C],F=M+R*d[C];u[C]=F,h[C]=M,O[C]=-z}});let g=i.slice(0);o.forEach((z,C)=>{g[z]=Math.ceil((h[z]-u[z])/d[z])});let _={dims:g,dataType:e[0].dataType},w=we("output",e[0].dataType,g.length),f=Y("input",e[0].dataType,e[0].dims.length),b=K.size(g),S=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:u.length},{name:"signs",type:"i32",length:m.length},{name:"steps",type:"u32",length:d.length}],x=[{type:12,data:b},{type:12,data:u},{type:6,data:m},{type:12,data:d},...he(e[0].dims,g)],T=z=>`
      ${z.registerUniforms(S).declareVariables(f,w)}
        ${py(f,w,i)}
        ${z.mainStart()}
          ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${w.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${w.setByOffset("global_idx",f.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${m.length}_${u.length}_${d.length}`,inputDependencies:["rank"]},getShaderSource:T,getRunData:()=>({outputs:[_],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:x})}},Mw=(e,r)=>{cy(e.inputs,r);let i=fy(e.inputs,r);e.compute(hy(e.inputs,i),{inputs:[0]})},Bw=e=>{let r=e.starts,i=e.ends,s=e.axes;return Ze({starts:r,ends:i,axes:s})}}),my,gy,Dw,Nw,h2=ne(()=>{ze(),Oe(),mt(),Kr(),Pe(),my=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},gy=(e,r)=>{let i=e.inputs[0],s=i.dims,o=K.size(s),d=64,u=s.length,h=K.normalizeAxis(r.axis,u),m=h<s.length-1,g,_=[];m?(_=Array.from({length:u},(U,Q)=>Q),_[h]=u-1,_[u-1]=h,g=e.compute(un(i,_),{inputs:[i],outputs:[-1]})[0]):g=i;let w=g.dims,f=w[u-1],b=o/f,S=ft(f),x=f/S,T=(U,Q)=>Q===4?`max(max(${U}.x, ${U}.y), max(${U}.z, ${U}.w))`:Q===2?`max(${U}.x, ${U}.y)`:Q===3?`max(max(${U}.x, ${U}.y), ${U}.z)`:U,z=Y("x",g.dataType,g.dims,S),C=we("result",g.dataType,g.dims,S),O=z.type.value,R=yt(g.dataType)==="f32"?`var threadMax = ${O}(-3.402823e+38f);`:`var threadMax = ${O}(-65504.0h);`,M=U=>`
      var<workgroup> rowMaxShared : ${O};
      var<workgroup> rowSumShared : ${O};
      var<workgroup> threadShared : array<${O}, ${d}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${O} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${O}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${U.registerUniform("packedCols","i32").declareVariables(z,C)}
      ${U.mainStart()}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${d};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${R}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${O}(${T("threadShared[0]",S)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${O}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${O}(${Vr("threadShared[0]",S)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,F=e.compute({name:"Softmax",shaderCache:{hint:`${S}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:w,dataType:g.dataType}],dispatchGroup:{x:b},programUniforms:[{type:6,data:x}]}),getShaderSource:M},{inputs:[g],outputs:[m?-1:0]})[0];m&&e.compute(un(F,_),{inputs:[F]})},Dw=(e,r)=>{my(e.inputs),gy(e,r)},Nw=e=>Ze({axis:e.axis})}),yy,vy,wy,_y,$y,Lw,Uw,m2=ne(()=>{ze(),Oe(),mt(),Pe(),yy=e=>{if(!e||e.length<1)throw new Error("too few inputs")},vy=(e,r)=>{let i=[],s=r.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(o=>i.push(Number(o))),s=i.length),Ze({numOutputs:s,axis:r.axis,splitSizes:i})},wy=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ge("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,_y=e=>{let r=e.length,i=[];for(let s=0;s<r;++s){let o=e[s].setByIndices("indices","input[global_idx]");r===1?i.push(o):s===0?i.push(`if (output_number == ${s}u) { ${o} }`):s===r-1?i.push(`else { ${o} }`):i.push(`else if (output_number == ${s}) { ${o} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${i.join(`
`)}
      }`},$y=(e,r)=>{let i=e[0].dims,s=K.size(i),o=e[0].dataType,d=K.normalizeAxis(r.axis,i.length),u=new Array(r.numOutputs),h=Y("input",o,i.length),m=new Array(r.numOutputs),g=[],_=[],w=0,f=[{type:12,data:s}];for(let S=0;S<r.numOutputs;S++){w+=r.splitSizes[S],m[S]=w;let x=i.slice();x[d]=r.splitSizes[S],_.push(x),u[S]=we(`output${S}`,o,x.length),g.push({dims:_[S],dataType:e[0].dataType})}f.push({type:12,data:m},...he(i,..._));let b=S=>`
  ${S.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",m.length).declareVariables(h,...u)}
  ${wy(m.length)}
  ${_y(u)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${h.offsetToIndices("global_idx")};
    var index = ${h.indicesGet("indices",d)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ge("uniforms.size_in_split_axis","output_number - 1u",m.length)};
      ${h.indicesSet("indices",d,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:g,dispatchGroup:{x:Math.ceil(s/64)},programUniforms:f})}},Lw=(e,r)=>{yy(e.inputs);let i=e.inputs.length===1?r:vy(e.inputs,r);e.compute($y(e.inputs,i),{inputs:[0]})},Uw=e=>{let r=e.axis,i=e.splitSizes,s=e.numOutputs<0?i.length:e.numOutputs;if(s!==i.length)throw new Error("numOutputs and splitSizes lengh must be equal");return Ze({axis:r,numOutputs:s,splitSizes:i})}}),xy,by,jw,g2=ne(()=>{ze(),Oe(),Pe(),xy=(e,r,i,s,o)=>{let d=we("output_data",o,i.length,4),u=Y("a_data",r[1].dataType,r[1].dims.length,4),h=Y("b_data",r[2].dataType,r[2].dims.length,4),m=Y("c_data",r[0].dataType,r[0].dims.length,4),g,_=(w,f,b)=>`select(${f}, ${w}, ${b})`;if(!s)g=d.setByOffset("global_idx",_(u.getByOffset("global_idx"),h.getByOffset("global_idx"),m.getByOffset("global_idx")));else{let w=(f,b,S="")=>{let x=`a_data[index_a${b}][component_a${b}]`,T=`b_data[index_b${b}][component_b${b}]`,z=`bool(c_data[index_c${b}] & (0xffu << (component_c${b} * 8)))`;return`
            let output_indices${b} = ${d.offsetToIndices(`global_idx * 4u + ${b}u`)};
            let offset_a${b} = ${u.broadcastedIndicesToOffset(`output_indices${b}`,d)};
            let offset_b${b} = ${h.broadcastedIndicesToOffset(`output_indices${b}`,d)};
            let offset_c${b} = ${m.broadcastedIndicesToOffset(`output_indices${b}`,d)};
            let index_a${b} = offset_a${b} / 4u;
            let index_b${b} = offset_b${b} / 4u;
            let index_c${b} = offset_c${b} / 4u;
            let component_a${b} = offset_a${b} % 4u;
            let component_b${b} = offset_b${b} % 4u;
            let component_c${b} = offset_c${b} % 4u;
            ${f}[${b}] = ${S}(${_(x,T,z)});
          `};o===9?g=`
            var data = vec4<u32>(0);
            ${w("data",0,"u32")}
            ${w("data",1,"u32")}
            ${w("data",2,"u32")}
            ${w("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:g=`
            ${w("output_data[global_idx]",0)}
            ${w("output_data[global_idx]",1)}
            ${w("output_data[global_idx]",2)}
            ${w("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(m,u,h,d)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${g}
      }`},by=e=>{let r=e[1].dims,i=e[2].dims,s=e[0].dims,o=e[1].dataType,d=!(K.areEqual(r,i)&&K.areEqual(i,s)),u=r,h=K.size(r);if(d){let g=za.calcShape(za.calcShape(r,i,!1),s,!1);if(!g)throw new Error("Can't perform where op on the given tensors");u=g,h=K.size(u)}let m=Math.ceil(h/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:g=>xy(g,e,u,d,o),getRunData:()=>({outputs:[{dims:u,dataType:o}],dispatchGroup:{x:Math.ceil(h/64/4)},programUniforms:[{type:12,data:m},...he(s,r,i,u)]})}},jw=e=>{e.compute(by(e.inputs))}}),Ww,y2=ne(()=>{P_(),sf(),M_(),B_(),D_(),N_(),L_(),F_(),q_(),G_(),K_(),Q_(),Y_(),Z_(),X_(),J_(),e2(),t2(),n2(),r2(),i2(),Wv(),a2(),dw(),s2(),o2(),u2(),l2(),af(),d2(),c2(),f2(),p2(),h2(),m2(),fw(),Kr(),of(),g2(),Ww=new Map([["Abs",[j0]],["Acos",[W0]],["Acosh",[F0]],["Add",[bv]],["ArgMax",[D0,zc]],["ArgMin",[B0,zc]],["Asin",[V0]],["Asinh",[H0]],["Atan",[q0]],["Atanh",[G0]],["Attention",[N0]],["AveragePool",[$w,_w]],["BatchNormalization",[L0]],["BiasAdd",[U0]],["BiasSplitGelu",[xv]],["Cast",[Q0,K0]],["Ceil",[Z0]],["Clip",[Y0]],["Concat",[Ov,Pv]],["Conv",[Mc,Pc]],["ConvTranspose",[Hv,Vv]],["Cos",[X0]],["Cosh",[J0]],["CumSum",[qv,Gv]],["DepthToSpace",[Kv,Qv]],["DequantizeLinear",[Tw,Iw]],["Div",[Sv]],["Einsum",[Yv,Zv]],["Elu",[ev,Ks]],["Equal",[kv]],["Erf",[tv]],["Exp",[nv]],["Expand",[Xv]],["FastGelu",[Jv]],["Floor",[rv]],["FusedConv",[Mc,Pc]],["Gather",[tw,ew]],["GatherElements",[aw,iw]],["GatherBlockQuantized",[nw,rw]],["Gelu",[iv]],["Gemm",[ow,sw]],["GlobalAveragePool",[bw,xw]],["GlobalMaxPool",[Cw,Ew]],["Greater",[Iv]],["GreaterOrEqual",[Av]],["GroupQueryAttention",[hw,pw]],["HardSigmoid",[fv,cv]],["InstanceNormalization",[mw]],["LayerNormalization",[gw]],["LeakyRelu",[av,Ks]],["Less",[zv]],["LessOrEqual",[Rv]],["Log",[_v]],["MatMul",[jv]],["MatMulNBits",[yw,vw]],["MaxPool",[Sw,kw]],["Mul",[Ev]],["MultiHeadAttention",[lw,uw]],["Neg",[ov]],["Not",[sv]],["Pad",[ww]],["Pow",[Cv]],["QuickGelu",[$v,Ks]],["Range",[zw]],["Reciprocal",[uv]],["ReduceMin",[A0]],["ReduceMean",[E0]],["ReduceMax",[z0]],["ReduceSum",[O0]],["ReduceProd",[R0]],["ReduceL1",[C0]],["ReduceL2",[T0]],["ReduceLogSum",[M0]],["ReduceLogSumExp",[I0]],["ReduceSumSquare",[P0]],["Relu",[lv]],["Resize",[Aw,Rw]],["RotaryEmbedding",[Ow]],["Sigmoid",[dv]],["Sin",[pv]],["Sinh",[hv]],["Slice",[Mw,Bw]],["SkipLayerNormalization",[Pw]],["Split",[Lw,Uw]],["Sqrt",[mv]],["Softmax",[Dw,Nw]],["Sub",[Tv]],["Tan",[gv]],["Tanh",[yv]],["ThresholdedRelu",[wv,Ks]],["Tile",[cw]],["Transpose",[h0,m0]],["Where",[jw]]])}),Fw,v2=ne(()=>{Mn(),Qn(),Pe(),Fw=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,r){this.repo.set(e,r)}run(e,r,i,s,o){Kn(e.programInfo.name);let d=this.backend.device,u=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let h=[];for(let g of r)h.push({binding:h.length,resource:{buffer:g.buffer}});for(let g of i)h.push({binding:h.length,resource:{buffer:g.buffer}});o&&h.push({binding:h.length,resource:o});let m=d.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:h,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let g={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:m,dispatchGroup:s};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(g)}u.setPipeline(e.computePipeline),u.setBindGroup(0,m),u.dispatchWorkgroups(...s),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Pn(e.programInfo.name)}dispose(){}build(e,r){Kn(e.name);let i=this.backend.device,s=[];i.features.has("shader-f16")&&s.push("enable f16;");let o=p0(r,this.backend.device.limits),d=e.getShaderSource(o),u=`${s.join(`
`)}
${o.additionalImplementations}
${d}`,h=i.createShaderModule({code:u,label:e.name});Ye("verbose",()=>`[WebGPU] ${e.name} shader code: ${u}`);let m=i.createComputePipeline({compute:{module:h,entryPoint:"main"},layout:"auto",label:e.name});return Pn(e.name),{programInfo:e,computePipeline:m,uniformVariablesInfo:o.variablesInfo}}normalizeDispatchGroupSize(e){let r=typeof e=="number"?e:e.x,i=typeof e=="number"?1:e.y||1,s=typeof e=="number"?1:e.z||1,o=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(r<=o&&i<=o&&s<=o)return[r,i,s];let d=r*i*s,u=Math.ceil(Math.sqrt(d));if(u>o){if(u=Math.ceil(Math.cbrt(d)),u>o)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[u,u,u]}else return[u,u,1]}}}),Sy,ky,Ey,Vw,w2=ne(()=>{Mn(),ze(),Qn(),u0(),R_(),y2(),v2(),Sy=(e,r)=>{if(r.length!==e.length)throw new Error(`inputDependencies length ${r.length} is not equal to inputTensors length ${e.length}.`);let i=[];for(let s=0;s<e.length;++s){let o=e[s].dataType;switch(r[s]){case"none":{i.push("");break}case"type":{i.push(`${o}`);break}case"rank":{let d=e[s].dims.length;i.push(`${o};${d}`);break}case"dims":{let d=e[s].dims.join(",");i.push(`${o};${d}`);break}default:throw new Error(`unsupported input dependency: ${r[s]}`)}}return i.join("|")},ky=(e,r,i)=>{var o,d;let s=e.name;return(o=e.shaderCache)!=null&&o.hint&&(s+="["+e.shaderCache.hint+"]"),s+=":"+i+`:${Sy(r,((d=e.shaderCache)==null?void 0:d.inputDependencies)??new Array(r.length).fill("dims"))}`,s},Ey=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Vw=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,r){this.env=e;let i=[],s={requiredLimits:{maxComputeWorkgroupStorageSize:r.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:r.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:r.limits.maxStorageBufferBindingSize,maxBufferSize:r.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:r.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:r.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:r.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:r.limits.maxComputeWorkgroupSizeZ},requiredFeatures:i};r.features.has("chromium-experimental-timestamp-query-inside-passes")?i.push("chromium-experimental-timestamp-query-inside-passes"):r.features.has("timestamp-query")&&i.push("timestamp-query"),r.features.has("shader-f16")&&i.push("shader-f16"),this.device=await r.requestDevice(s),this.adapterInfo=new Ey(r.info||await r.requestAdapterInfo()),this.gpuDataManager=l0(this),this.programManager=new Fw(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,ef(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:r,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),r={};this.queryType==="at-passes"&&(r.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(r)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Kn(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var s;let r=new BigUint64Array(e.getMappedRange()),i=this.pendingQueries.get(e);for(let o=0;o<r.length/2;o++){let d=i[o],u=d.kernelId,h=this.kernels.get(u),m=h.kernelType,g=h.kernelName,_=d.programName,w=d.inputTensorViews,f=d.outputTensorViews,b=r[o*2],S=r[o*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=b);let x=Number(b-this.queryTimeBase),T=Number(S-this.queryTimeBase);if(!Number.isSafeInteger(x)||!Number.isSafeInteger(T))throw new RangeError("incorrect timestamp range");if((s=this.env.webgpu.profiling)!=null&&s.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:w.map(z=>({dims:z.dims,dataType:Ai(z.dataType)})),outputsMetadata:f.map(z=>({dims:z.dims,dataType:Ai(z.dataType)})),kernelId:u,kernelType:m,kernelName:g,programName:_,startTime:x,endTime:T});else{let z="";w.forEach((O,R)=>{z+=`input[${R}]: [${O.dims}] | ${Ai(O.dataType)}, `});let C="";f.forEach((O,R)=>{C+=`output[${R}]: [${O.dims}] | ${Ai(O.dataType)}, `}),console.log(`[profiling] kernel "${u}|${m}|${g}|${_}" ${z}${C}execution time: ${T-x} ns`)}Vu("GPU",`${_}::${b}::${S}`)}e.unmap(),this.pendingQueries.delete(e)}),Pn()}run(e,r,i,s,o,d){Kn(e.name);let u=[];for(let C=0;C<r.length;++C){let O=r[C].data;if(O===0)continue;let R=this.gpuDataManager.get(O);if(!R)throw new Error(`no GPU data for input: ${O}`);u.push(R)}let{outputs:h,dispatchGroup:m,programUniforms:g}=e.getRunData(r),_=i.length===0?h.map((C,O)=>O):i;if(_.length!==h.length)throw new Error(`Output size ${_.length} must be equal to ${h.length}.`);let w=[],f=[];for(let C=0;C<h.length;++C){if(!Number.isInteger(_[C])||_[C]<-3||_[C]>=d)throw new Error(`Invalid output index: ${_[C]}`);if(_[C]===-3)continue;let O=_[C]===-1,R=_[C]===-2,M=O||R?o(h[C].dataType,h[C].dims):s(_[C],h[C].dataType,h[C].dims);if(w.push(M),M.data===0)continue;let F=this.gpuDataManager.get(M.data);if(!F)throw new Error(`no GPU data for output: ${M.data}`);if(O&&this.temporaryData.push(F),R){let U=this.kernelPersistentData.get(this.currentKernelId);U||(U=[],this.kernelPersistentData.set(this.currentKernelId,U)),U.push(F)}f.push(F)}if(u.length!==r.length||f.length!==w.length){if(f.length===0)return Pn(e.name),w;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let b;if(g){let C=0,O=[];g.forEach(U=>{let Q=typeof U.data=="number"?[U.data]:U.data;if(Q.length===0)return;let se=U.type===10?2:4,ue,Se;U.type===10?(Se=Q.length>4?16:Q.length>2?8:Q.length*se,ue=Q.length>4?16:se*Q.length):(Se=Q.length<=2?Q.length*se:16,ue=16),C=Math.ceil(C/Se)*Se,O.push(C);let xe=U.type===10?8:4;C+=Q.length>4?Math.ceil(Q.length/xe)*ue:Q.length*se});let R=16;C=Math.ceil(C/R)*R;let M=new ArrayBuffer(C);g.forEach((U,Q)=>{let se=O[Q],ue=typeof U.data=="number"?[U.data]:U.data;if(U.type===6)new Int32Array(M,se,ue.length).set(ue);else if(U.type===12)new Uint32Array(M,se,ue.length).set(ue);else if(U.type===10)new Uint16Array(M,se,ue.length).set(ue);else if(U.type===1)new Float32Array(M,se,ue.length).set(ue);else throw new Error(`Unsupported uniform type: ${Ai(U.type)}`)});let F=this.gpuDataManager.create(C,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(F.buffer,0,M,0,C),this.gpuDataManager.release(F.id),b={offset:0,size:C,buffer:F.buffer}}let S=this.programManager.normalizeDispatchGroupSize(m),x=S[1]===1&&S[2]===1,T=ky(e,r,x),z=this.programManager.getArtifact(T);if(z||(z=this.programManager.build(e,S),this.programManager.setArtifact(T,z),Ye("info",()=>`[artifact] key: ${T}, programName: ${e.name}`)),g&&z.uniformVariablesInfo){if(g.length!==z.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${z.uniformVariablesInfo.length}, got ${g.length} in program "${z.programInfo.name}".`);for(let C=0;C<g.length;C++){let O=g[C],R=O.type,M=typeof O.data=="number"?1:O.data.length,[F,U]=z.uniformVariablesInfo[C];if(R!==F||M!==U)throw new Error(`Uniform variable ${C} mismatch: expect type ${F} with size ${U}, got type ${R} with size ${M} in program "${z.programInfo.name}".`)}}if(Ye("info",()=>`[ProgramManager] run "${e.name}" (key=${T}) with ${S[0]}x${S[1]}x${S[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let C={kernelId:this.currentKernelId,programName:z.programInfo.name,inputTensorViews:r,outputTensorViews:w};this.pendingKernels.push(C),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(C)}return this.programManager.run(z,u,f,S,b),Pn(e.name),w}upload(e,r){this.gpuDataManager.upload(e,r)}memcpy(e,r){this.gpuDataManager.memcpy(e,r)}async download(e,r){await this.gpuDataManager.download(e,r)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,r,i,s){let o=Ww.get(e);if(!o)throw new Error(`kernel not implemented: ${e}`);let d={kernelType:e,kernelName:s,kernelEntry:o[0],attributes:[o[1],i]};this.kernels.set(r,d)}releaseKernel(e){let r=this.kernelPersistentData.get(e);if(r){for(let i of r)this.gpuDataManager.release(i.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,r,i){let s=this.kernels.get(e);if(!s)throw new Error(`kernel not created: ${e}`);let o=s.kernelType,d=s.kernelName,u=s.kernelEntry,h=s.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${o}] ${d}" is not allowed to be called recursively`);this.currentKernelId=e,h[0]&&(h[1]=h[0](h[1]),h[0]=void 0),Ye("info",()=>`[WebGPU] Start to run kernel "[${o}] ${d}"...`);let m=this.env.debug;this.temporaryData=[];try{return m&&this.device.pushErrorScope("validation"),u(r,h[1]),0}catch(g){return i.push(Promise.resolve(`[WebGPU] Kernel "[${o}] ${d}" failed. ${g}`)),1}finally{m&&i.push(this.device.popErrorScope().then(g=>g?`GPU validation error for kernel "[${o}] ${d}": ${g.message}`:null));for(let g of this.temporaryData)this.gpuDataManager.release(g.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,r,i,s){let o=this.sessionExternalDataMapping.get(e);o||(o=new Map,this.sessionExternalDataMapping.set(e,o));let d=o.get(r),u=this.gpuDataManager.registerExternalBuffer(i,s,d);return o.set(r,[u,i]),u}unregisterBuffers(e){let r=this.sessionExternalDataMapping.get(e);r&&(r.forEach(i=>this.gpuDataManager.unregisterExternalBuffer(i[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let r=this.gpuDataManager.get(e);if(!r)throw new Error(`no GPU data for buffer: ${e}`);return r.buffer}createDownloader(e,r,i){return async()=>{let s=await Cc(this,e,r);return tf(s.buffer,i)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ye("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ye("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ye("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),r=this.capturedPendingKernels.get(this.currentSessionId),i=e.length;this.pendingKernels=[];for(let s=0;s<i;s++){let o=this.getComputePassEncoder(),d=e[s];this.writeTimestamp(this.pendingDispatchNumber*2),o.setPipeline(d.computePipeline),o.setBindGroup(0,d.bindGroup),o.dispatchWorkgroups(...d.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(r[s]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Cy,_c,$c,Ty,Hw,_2=ne(()=>{Qn(),Cy=1,_c=()=>Cy++,$c=class{constructor(e,r){this.mlContext=e,this.tensorEntry=r,this.tensorCache=r?[r]:[]}get tensor(){var e;return(e=this.tensorEntry)==null?void 0:e[0]}get context(){if(!this.mlContext)throw new Error("MLContext has not been set.");return this.mlContext}set context(e){if(this.mlContext&&this.mlContext!==e)throw new Error("MLTensor in use in a different MLContext.");this.mlContext=e}destroy(){for(let[e]of this.tensorCache)e.destroy();this.tensorCache=[],this.tensorEntry=void 0}trySelectTensor(e,r){for(let[i,s,o]of this.tensorCache)if(r===i){if(this.context!==e)throw new Error("MLTensor cannot be registered with a different MLContext.");return this.tensorEntry=[i,s,o],!0}return!1}async ensureTensor(e,r,i){var d;if(this.tensorEntry){let[u,h,m]=this.tensorEntry;if(h===e&&m.every((g,_)=>g===r[_]))return u}for(let[u,h,m]of this.tensorCache)if(h===e&&m.every((g,_)=>g===r[_])){if(i&&this.tensorEntry){Ye("verbose",()=>`[WebNN] Slowdown may occur, having to copy existing tensor {dataType: ${e}, shape: ${r}}`);let g=await this.context.readTensor(this.tensorEntry[0]);this.context.writeTensor(u,g)}return this.tensorEntry=[u,h,m],u}Ye("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${e}, shape: ${r}}`);let s=MLTensorUsage.READ|MLTensorUsage.WRITE,o=await this.context.createTensor({dataType:e,shape:r,dimensions:r,usage:s});return this.tensorEntry=[o,e,r],this.tensorCache.push(this.tensorEntry),this.activeUpload&&((d=this.mlContext)==null||d.writeTensor(o,this.activeUpload),this.activeUpload=void 0),o}upload(e){var r;if(!this.tensorEntry){this.activeUpload=new Uint8Array(e);return}(r=this.mlContext)==null||r.writeTensor(this.tensorEntry[0],e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.tensorEntry)throw new Error("Tensor has not been created.");return e?this.context.readTensor(this.tensorEntry[0],e):this.context.readTensor(this.tensorEntry[0])}},Ty=class{constructor(e){this.backend=e,this.tensorsById=new Map,this.tensorIdsByContext=new Map}reserveTensorId(){let e=_c();return this.tensorsById.set(e,new $c),e}releaseTensorId(e){let r=this.tensorsById.get(e);if(r){r.destroy(),this.tensorsById.delete(e);for(let[i,s]of this.tensorIdsByContext)if(s.has(e)){s.delete(e),s.size===0&&this.tensorIdsByContext.delete(i);break}}}async ensureTensor(e,r,i,s){var d;Ye("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${e}, dataType: ${r}, shape: ${i}, copyOld: ${s}}`);let o=this.tensorsById.get(e);if(!o)throw new Error("Tensor not found.");return o.context=this.backend.currentContext,this.tensorIdsByContext.has(this.backend.currentContext)||this.tensorIdsByContext.set(this.backend.currentContext,new Set),(d=this.tensorIdsByContext.get(this.backend.currentContext))==null||d.add(e),o.ensureTensor(r,i,s)}upload(e,r){this.tensorsById.get(e).upload(r)}async download(e,r){return Ye("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${r==null?void 0:r.byteLength}}`),this.tensorsById.get(e).download(r)}releaseTensorsForContext(e){let r=this.tensorIdsByContext.get(e);if(r){for(let i of r)this.tensorsById.get(i).destroy(),this.tensorsById.delete(i);this.tensorIdsByContext.delete(e)}}registerTensor(e,r,i,s){for(let[u,h]of this.tensorsById)if(h.trySelectTensor(e,r))return u;let o=_c();this.tensorsById.set(o,new $c(e,[r,i,s]));let d=this.tensorIdsByContext.get(e);return d||(d=new Set,this.tensorIdsByContext.set(e,d)),d.add(o),o}},Hw=(...e)=>new Ty(...e)}),xc,qw,$2=ne(()=>{ze(),Ri(),u0(),_2(),Qn(),xc=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),qw=class{constructor(e){this.tensorManager=Hw(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,ef(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){this.activeSessionId=e}get currentContext(){let e=this.getMLContext(this.currentSessionId);if(!e)throw new Error(`No MLContext found for session ${this.currentSessionId}`);return e}registerMLContext(e,r){this.mlContextBySessionId.set(e,r);let i=this.sessionIdsByMLContext.get(r);i||(i=new Set,this.sessionIdsByMLContext.set(r,i)),i.add(e)}onReleaseSession(e){let r=this.mlContextBySessionId.get(e);if(!r)return;this.mlContextBySessionId.delete(e);let i=this.sessionIdsByMLContext.get(r);i.delete(e),i.size===0&&(this.sessionIdsByMLContext.delete(r),this.tensorManager.releaseTensorsForContext(r))}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ye("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,r,i,s){let o=xc.get(r);if(!o)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e,o,i,s)}uploadTensor(e,r){if(!_t().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ye("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${r.byteLength}}`),this.tensorManager.upload(e,r)}async downloadTensor(e,r){return this.tensorManager.download(e,r)}createMLTensorDownloader(e,r){return async()=>{let i=await this.tensorManager.download(e);return tf(i,r)}}registerMLTensor(e,r,i){let s=xc.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);let o=this.tensorManager.registerTensor(this.currentContext,e,s,i);return Ye("verbose",()=>`[WebNN] registerMLTensor {tensor: ${e}, dataType: ${s}, dimensions: ${i}} -> {tensorId: ${o}}`),o}flush(){}}}),Gw={};Xs(Gw,{init:()=>Kw});var Nu,Iy,Kw,x2=ne(()=>{ze(),w2(),Qn(),Oe(),$2(),Nu=class Qw{constructor(r,i,s,o){this.module=r,this.dataType=i,this.data=s,this.dims=o}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let r=K.size(this.dims);return r===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,r)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let r=K.size(this.dims);return r===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,r)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let r=K.size(this.dims);return r===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,r)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let r=K.size(this.dims);return r===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,r)}reshape(r){if(K.size(r)!==K.size(this.dims))throw new Error("Invalid new shape");return new Qw(this.module,this.dataType,this.data,r)}},Iy=class{constructor(e,r,i){this.module=e,this.backend=r,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=r.adapterInfo;let s=e.HEAPU32,o=i>>>2;this.opKernelContext=s[o++];let d=s[o++];this.outputCount=s[o++],this.customDataOffset=s[o++],this.customDataSize=s[o++];let u=[];for(let h=0;h<d;h++){let m=s[o++],g=s[o++],_=s[o++],w=[];for(let f=0;f<_;f++)w.push(s[o++]);u.push(new Nu(e,m,g,w))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}getMaxComputeWorkgroupSizes(){return[this.backend.device.limits.maxComputeWorkgroupSizeX,this.backend.device.limits.maxComputeWorkgroupSizeY,this.backend.device.limits.maxComputeWorkgroupSizeZ]}getMaxComputeWorkgroupStoragesize(){return this.backend.device.limits.maxComputeWorkgroupStorageSize}compute(e,r){var u;let i=((u=r==null?void 0:r.inputs)==null?void 0:u.map(h=>typeof h=="number"?this.inputs[h]:h))??this.inputs,s=(r==null?void 0:r.outputs)??[],o=(h,m,g)=>new Nu(this.module,m,this.output(h,g),g),d=(h,m)=>{let g=Ta(h,m);if(!g)throw new Error(`Unsupported data type: ${h}`);let _=g>0?this.backend.gpuDataManager.create(g).id:0;return new Nu(this.module,h,_,m)};return this.backend.run(e,i,s,o,d,this.outputCount)}output(e,r){let i=this.module.stackSave();try{let s=this.module.stackAlloc((1+r.length)*4),o=s>>2;this.module.HEAPU32[o++]=r.length;for(let d=0;d<r.length;d++)this.module.HEAPU32[o++]=r[d];return this.module._JsepOutput(this.opKernelContext,e,s)}catch(s){throw new Error(`Failed to generate kernel's output[${e}] with dims [${r}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${s}`)}finally{this.module.stackRestore(i)}}},Kw=async(e,r,i,s)=>{let o=r.jsepInit;if(!o)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let d=new Vw;await d.initialize(i,s),o("webgpu",[d,u=>d.alloc(u),u=>d.free(u),(u,h,m,g=!1)=>{if(g)Ye("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${u}, dst=${h}, size=${m}`),d.memcpy(u,h);else{Ye("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${u}, gpuDataId=${h}, size=${m}`);let _=r.HEAPU8.subarray(u>>>0,(u>>>0)+m);d.upload(h,_)}},async(u,h,m)=>{Ye("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${u}, dataOffset=${h}, size=${m}`),await d.download(u,()=>r.HEAPU8.subarray(h>>>0,(h>>>0)+m))},(u,h,m)=>d.createKernel(u,h,m,r.UTF8ToString(r._JsepGetNodeName(h))),u=>d.releaseKernel(u),(u,h,m,g)=>{Ye("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${m}, kernel=${u}, contextDataOffset=${h}`);let _=new Iy(r,d,h);return d.computeKernel(u,_,g)},()=>d.captureBegin(),()=>d.captureEnd(),()=>d.replay()])}else{let d=new qw(i);o("webnn",[d,()=>d.reserveTensorId(),u=>d.releaseTensorId(u),async(u,h,m,g)=>d.ensureTensor(u,h,m,g),(u,h)=>{d.uploadTensor(u,h)},async(u,h)=>d.downloadTensor(u,h)])}}}),zy,ff,pf,Wr,Ay,Zu,hf,mf,bc,gf,yf,vf,Yw=ne(()=>{z_(),A_(),ze(),Ri(),Qc(),o0(),zy=(e,r)=>{_t()._OrtInit(e,r)!==0&&lt("Can't initialize onnxruntime.")},ff=async e=>{zy(e.wasm.numThreads,qu(e.logLevel))},pf=async(e,r)=>{{let i=(x2(),Fu(Gw)).init;if(r==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let s=e.webgpu.adapter;if(s){if(typeof s.limits!="object"||typeof s.features!="object"||typeof s.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let o=e.webgpu.powerPreference;if(o!==void 0&&o!=="low-power"&&o!=="high-performance")throw new Error(`Invalid powerPreference setting: "${o}"`);let d=e.webgpu.forceFallbackAdapter;if(d!==void 0&&typeof d!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${d}"`);if(s=await navigator.gpu.requestAdapter({powerPreference:o,forceFallbackAdapter:d}),!s)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await i("webgpu",_t(),e,s)}if(r==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await i("webnn",_t(),e)}}},Wr=new Map,Ay=e=>{let r=_t(),i=r.stackSave();try{let s=r.stackAlloc(8);return r._OrtGetInputOutputCount(e,s,s+4)!==0&&lt("Can't get session input/output count."),[r.HEAP32[s/4],r.HEAP32[s/4+1]]}finally{r.stackRestore(i)}},Zu=e=>{let r=_t(),i=r._malloc(e.byteLength);if(i===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return r.HEAPU8.set(e,i),[i,e.byteLength]},hf=async(e,r)=>{var w,f;let i,s,o=_t();Array.isArray(e)?[i,s]=e:e.buffer===o.HEAPU8.buffer?[i,s]=[e.byteOffset,e.byteLength]:[i,s]=Zu(e);let d=0,u=0,h=0,m=[],g=[],_=[];try{if([u,m]=s0(r),(r==null?void 0:r.externalData)&&o.mountExternalData){let R=[];for(let M of r.externalData){let F=typeof M=="string"?M:M.path;R.push(Jc(typeof M=="string"?M:M.data).then(U=>{o.mountExternalData(F,U)}))}await Promise.all(R)}for(let R of(r==null?void 0:r.executionProviders)??[])if((typeof R=="string"?R:R.name)==="webnn"){if(o.shouldTransferToMLTensor=!1,o.currentContext)throw new Error("WebNN execution provider is already set.");if(typeof R!="string"){let M=R,F=M==null?void 0:M.context,U=M==null?void 0:M.gpuDevice,Q=M==null?void 0:M.deviceType,se=M==null?void 0:M.numThreads,ue=M==null?void 0:M.powerPreference;F?o.currentContext=F:U?o.currentContext=await navigator.ml.createContext(U):o.currentContext=await navigator.ml.createContext({deviceType:Q,numThreads:se,powerPreference:ue})}else o.currentContext=await navigator.ml.createContext();break}d=await o._OrtCreateSession(i,s,u),d===0&&lt("Can't create a session."),o.currentContext&&(o.jsepRegisterMLContext(d,o.currentContext),o.currentContext=void 0,o.shouldTransferToMLTensor=!0);let[b,S]=Ay(d),x=!!(r!=null&&r.enableGraphCapture),T=[],z=[],C=[];for(let R=0;R<b;R++){let M=o._OrtGetInputName(d,R);M===0&&lt("Can't get an input name."),g.push(M),T.push(o.UTF8ToString(M))}for(let R=0;R<S;R++){let M=o._OrtGetOutputName(d,R);M===0&&lt("Can't get an output name."),_.push(M);let F=o.UTF8ToString(M);z.push(F);{if(x&&(r==null?void 0:r.preferredOutputLocation)===void 0){C.push("gpu-buffer");continue}let U=typeof(r==null?void 0:r.preferredOutputLocation)=="string"?r.preferredOutputLocation:((w=r==null?void 0:r.preferredOutputLocation)==null?void 0:w[F])??"cpu";if(U!=="cpu"&&U!=="cpu-pinned"&&U!=="gpu-buffer"&&U!=="ml-tensor")throw new Error(`Not supported preferred output location: ${U}.`);if(x&&U!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${U}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);C.push(U)}}let O=null;return C.some(R=>R==="gpu-buffer"||R==="ml-tensor")&&(h=o._OrtCreateBinding(d),h===0&&lt("Can't create IO binding."),O={handle:h,outputPreferredLocations:C,outputPreferredLocationsEncoded:C.map(R=>Ec(R))}),Wr.set(d,[d,g,_,O,x,!1]),[d,T,z]}catch(b){throw g.forEach(S=>o._OrtFree(S)),_.forEach(S=>o._OrtFree(S)),h!==0&&o._OrtReleaseBinding(h),d!==0&&o._OrtReleaseSession(d),b}finally{o._free(i),u!==0&&o._OrtReleaseSessionOptions(u),m.forEach(b=>o._free(b)),(f=o.unmountExternalData)==null||f.call(o)}},mf=e=>{var m;let r=_t(),i=Wr.get(e);if(!i)throw new Error(`cannot release session. invalid session id: ${e}`);let[s,o,d,u,h]=i;u&&(h&&r._OrtClearBoundOutputs(u.handle),r._OrtReleaseBinding(u.handle)),(m=r.jsepOnReleaseSession)==null||m.call(r,e),o.forEach(g=>r._OrtFree(g)),d.forEach(g=>r._OrtFree(g)),r._OrtReleaseSession(s),Wr.delete(e)},bc=(e,r,i,s,o,d=!1)=>{if(!e){r.push(0);return}let u=_t(),h=e[0],m=e[1],g=e[3],_,w;if(h==="string"&&(g==="gpu-buffer"||g==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(d&&g!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${o} when enableGraphCapture is true.`);if(g==="gpu-buffer"){let S=e[2].gpuBuffer;w=Ta(qs(h),m);let x=u.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');_=x(s,o,S,w)}else if(g==="ml-tensor"){let S=e[2].mlTensor;w=Ta(qs(h),m);let x=u.jsepRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');_=x(S,qs(h),m)}else{let S=e[2];if(Array.isArray(S)){w=4*S.length,_=u._malloc(w),i.push(_);let x=_/4;for(let T=0;T<S.length;T++){if(typeof S[T]!="string")throw new TypeError(`tensor data at index ${T} is not a string`);u.HEAPU32[x++]=Et(S[T],i)}}else w=S.byteLength,_=u._malloc(w),i.push(_),u.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,w),_)}let f=u.stackSave(),b=u.stackAlloc(4*m.length);try{let S=b/4;m.forEach(T=>u.HEAP32[S++]=T);let x=u._OrtCreateTensor(qs(h),_,w,b,m.length,Ec(g));x===0&&lt(`Can't create tensor for input/output. session=${s}, index=${o}.`),r.push(x)}finally{u.stackRestore(f)}},gf=async(e,r,i,s,o,d)=>{var ue,Se;let u=_t(),h=Wr.get(e);if(!h)throw new Error(`cannot run inference. invalid session id: ${e}`);let m=h[0],g=h[1],_=h[2],w=h[3],f=h[4],b=h[5],S=r.length,x=s.length,T=0,z=[],C=[],O=[],R=[],M=u.stackSave(),F=u.stackAlloc(S*4),U=u.stackAlloc(S*4),Q=u.stackAlloc(x*4),se=u.stackAlloc(x*4);try{(ue=u.jsepOnRunStart)==null||ue.call(u,m),[T,z]=a0(d);for(let q=0;q<S;q++)bc(i[q],C,R,e,r[q],f);for(let q=0;q<x;q++)bc(o[q],O,R,e,S+s[q],f);let xe=F/4,de=U/4,Re=Q/4,De=se/4;for(let q=0;q<S;q++)u.HEAPU32[xe++]=C[q],u.HEAPU32[de++]=g[r[q]];for(let q=0;q<x;q++)u.HEAPU32[Re++]=O[q],u.HEAPU32[De++]=_[s[q]];if(w&&!b){let{handle:q,outputPreferredLocations:X,outputPreferredLocationsEncoded:J}=w;if(g.length!==S)throw new Error(`input count from feeds (${S}) is expected to be always equal to model's input count (${g.length}).`);for(let A=0;A<S;A++){let N=r[A];await u._OrtBindInput(q,g[N],C[A])!==0&&lt(`Can't bind input[${A}] for session=${e}.`)}for(let A=0;A<x;A++){let N=s[A];(Se=o[A])!=null&&Se[3]?u._OrtBindOutput(q,_[N],O[A],0)!==0&&lt(`Can't bind pre-allocated output[${A}] for session=${e}.`):u._OrtBindOutput(q,_[N],0,J[N])!==0&&lt(`Can't bind output[${A}] to ${X[A]} for session=${e}.`)}Wr.set(e,[m,g,_,w,f,!0])}let be;w?be=await u._OrtRunWithBinding(m,w.handle,x,Q,T):be=await u._OrtRun(m,U,F,S,se,x,Q,T),be!==0&&lt("failed to call OrtRun().");let ke=[];for(let q=0;q<x;q++){let X=u.HEAPU32[Q/4+q];if(X===O[q]){ke.push(o[q]);continue}let J=u.stackSave(),A=u.stackAlloc(4*4),N=!1,ie,ce=0;try{u._OrtGetTensorData(X,A,A+4,A+8,A+12)!==0&&lt(`Can't access output tensor data on index ${q}.`);let Ee=A/4,Ce=u.HEAPU32[Ee++];ce=u.HEAPU32[Ee++];let We=u.HEAPU32[Ee++],Fe=u.HEAPU32[Ee++],Ne=[];for(let at=0;at<Fe;at++)Ne.push(u.HEAPU32[We/4+at]);u._OrtFree(We);let He=Ne.reduce((at,dt)=>at*dt,1);ie=Ai(Ce);let ln=w==null?void 0:w.outputPreferredLocations[s[q]];if(ie==="string"){if(ln==="gpu-buffer"||ln==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let at=[],dt=ce/4;for(let Ct=0;Ct<He;Ct++){let $n=u.HEAPU32[dt++],Yr=Ct===He-1?void 0:u.HEAPU32[dt]-$n;at.push(u.UTF8ToString($n,Yr))}ke.push([ie,Ne,at,"cpu"])}else if(ln==="gpu-buffer"&&He>0){let at=u.jsepGetBuffer;if(!at)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let dt=at(ce),Ct=Ta(Ce,He);if(Ct===void 0||!Zc(ie))throw new Error(`Unsupported data type: ${ie}`);N=!0,ke.push([ie,Ne,{gpuBuffer:dt,download:u.jsepCreateDownloader(dt,Ct,ie),dispose:()=>{u._OrtReleaseTensor(X)}},"gpu-buffer"])}else if(ln==="ml-tensor"&&He>0){let at=u.jsepEnsureTensor;if(!at)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Ta(Ce,He)===void 0||!Xc(ie))throw new Error(`Unsupported data type: ${ie}`);let dt=await at(ce,Ce,Ne,!1);N=!0,ke.push([ie,Ne,{mlTensor:dt,download:u.jsepCreateMLTensorDownloader(ce,ie),dispose:()=>{u.jsepReleaseTensorId(ce),u._OrtReleaseTensor(X)}},"ml-tensor"])}else{let at=Yc(ie),dt=new at(He);new Uint8Array(dt.buffer,dt.byteOffset,dt.byteLength).set(u.HEAPU8.subarray(ce,ce+dt.byteLength)),ke.push([ie,Ne,dt,"cpu"])}}finally{u.stackRestore(J),ie==="string"&&ce&&u._free(ce),N||u._OrtReleaseTensor(X)}}return w&&!f&&(u._OrtClearBoundOutputs(w.handle),Wr.set(e,[m,g,_,w,f,!1])),ke}finally{u.stackRestore(M),C.forEach(xe=>u._OrtReleaseTensor(xe)),O.forEach(xe=>u._OrtReleaseTensor(xe)),R.forEach(xe=>u._free(xe)),T!==0&&u._OrtReleaseRunOptions(T),z.forEach(xe=>u._free(xe))}},yf=e=>{let r=_t(),i=Wr.get(e);if(!i)throw new Error("invalid session id");let s=i[0],o=r._OrtEndProfiling(s);o===0&&lt("Can't get an profile file name."),r._OrtFree(o)},vf=e=>{let r=[];for(let i of e){let s=i[2];!Array.isArray(s)&&"buffer"in s&&r.push(s.buffer)}return r}}),Fr,Zt,ka,Fs,Vs,Lu,Sc,Uu,Ti,Ii,Ry,Zw,Xw,Jw,e1,t1,n1,r1,i1=ne(()=>{Mn(),Yw(),Ri(),Xu(),Fr=()=>!!Je.wasm.proxy&&typeof document<"u",ka=!1,Fs=!1,Vs=!1,Uu=new Map,Ti=(e,r)=>{let i=Uu.get(e);i?i.push(r):Uu.set(e,[r])},Ii=()=>{if(ka||!Fs||Vs||!Zt)throw new Error("worker not ready")},Ry=e=>{switch(e.data.type){case"init-wasm":ka=!1,e.data.err?(Vs=!0,Sc[1](e.data.err)):(Fs=!0,Sc[0]()),Lu&&(URL.revokeObjectURL(Lu),Lu=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let r=Uu.get(e.data.type);e.data.err?r.shift()[1](e.data.err):r.shift()[0](e.data.out);break}}},Zw=async()=>{if(!Fs){if(ka)throw new Error("multiple calls to 'initWasm()' detected.");if(Vs)throw new Error("previous call to 'initWasm()' failed.");if(ka=!0,Fr())return new Promise((e,r)=>{Zt==null||Zt.terminate(),r0().then(([i,s])=>{try{Zt=s,Zt.onerror=d=>r(d),Zt.onmessage=Ry,Sc=[e,r];let o={type:"init-wasm",in:Je};Zt.postMessage(o),Lu=i}catch(o){r(o)}},r)});try{await Kc(Je.wasm),await ff(Je),Fs=!0}catch(e){throw Vs=!0,e}finally{ka=!1}}},Xw=async e=>{if(Fr())return Ii(),new Promise((r,i)=>{Ti("init-ep",[r,i]);let s={type:"init-ep",in:{epName:e,env:Je}};Zt.postMessage(s)});await pf(Je,e)},Jw=async e=>Fr()?(Ii(),new Promise((r,i)=>{Ti("copy-from",[r,i]);let s={type:"copy-from",in:{buffer:e}};Zt.postMessage(s,[e.buffer])})):Zu(e),e1=async(e,r)=>{if(Fr()){if(r!=null&&r.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Ii(),new Promise((i,s)=>{Ti("create",[i,s]);let o={type:"create",in:{model:e,options:{...r}}},d=[];e instanceof Uint8Array&&d.push(e.buffer),Zt.postMessage(o,d)})}else return hf(e,r)},t1=async e=>{if(Fr())return Ii(),new Promise((r,i)=>{Ti("release",[r,i]);let s={type:"release",in:e};Zt.postMessage(s)});mf(e)},n1=async(e,r,i,s,o,d)=>{if(Fr()){if(i.some(u=>u[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(o.some(u=>u))throw new Error("pre-allocated output tensor is not supported for proxy.");return Ii(),new Promise((u,h)=>{Ti("run",[u,h]);let m=i,g={type:"run",in:{sessionId:e,inputIndices:r,inputs:m,outputIndices:s,options:d}};Zt.postMessage(g,vf(m))})}else return gf(e,r,i,s,o,d)},r1=async e=>{if(Fr())return Ii(),new Promise((r,i)=>{Ti("end-profiling",[r,i]);let s={type:"end-profiling",in:e};Zt.postMessage(s)});yf(e)}}),kc,Oy,a1,b2=ne(()=>{Mn(),i1(),ze(),Gc(),o0(),kc=(e,r)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${r()}`)}},Oy=e=>{switch(e[3]){case"cpu":return new Pt(e[0],e[2],e[1]);case"gpu-buffer":{let r=e[0];if(!Zc(r))throw new Error(`not supported data type: ${r} for deserializing GPU tensor`);let{gpuBuffer:i,download:s,dispose:o}=e[2];return Pt.fromGpuBuffer(i,{dataType:r,dims:e[1],download:s,dispose:o})}case"ml-tensor":{let r=e[0];if(!Xc(r))throw new Error(`not supported data type: ${r} for deserializing MLTensor tensor`);let{mlTensor:i,download:s,dispose:o}=e[2];return Pt.fromMLTensor(i,{dataType:r,dims:e[1],download:s,dispose:o})}default:throw new Error(`invalid data location: ${e[3]}`)}},a1=class{async fetchModelAndCopyToWasmMemory(e){return Jw(await Jc(e))}async loadModel(e,r){Kn();let i;typeof e=="string"?i=await this.fetchModelAndCopyToWasmMemory(e):i=e,[this.sessionId,this.inputNames,this.outputNames]=await e1(i,r),Pn()}async dispose(){return t1(this.sessionId)}async run(e,r,i){Kn();let s=[],o=[];Object.entries(e).forEach(w=>{let f=w[0],b=w[1],S=this.inputNames.indexOf(f);if(S===-1)throw new Error(`invalid input '${f}'`);s.push(b),o.push(S)});let d=[],u=[];Object.entries(r).forEach(w=>{let f=w[0],b=w[1],S=this.outputNames.indexOf(f);if(S===-1)throw new Error(`invalid output '${f}'`);d.push(b),u.push(S)});let h=s.map((w,f)=>kc(w,()=>`input "${this.inputNames[o[f]]}"`)),m=d.map((w,f)=>w?kc(w,()=>`output "${this.outputNames[u[f]]}"`):null),g=await n1(this.sessionId,o,h,u,m,i),_={};for(let w=0;w<g.length;w++)_[this.outputNames[u[w]]]=d[w]??Oy(g[w]);return Pn(),_}startProfiling(){}endProfiling(){r1(this.sessionId)}}}),s1={};Xs(s1,{OnnxruntimeWebAssemblyBackend:()=>Lc,initializeFlags:()=>Nc,wasmBackend:()=>o1});var Nc,Lc,o1,S2=ne(()=>{Mn(),i1(),b2(),Xu(),Nc=()=>{if((typeof Je.wasm.initTimeout!="number"||Je.wasm.initTimeout<0)&&(Je.wasm.initTimeout=0),Je.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof Je.wasm.proxy!="boolean"&&(Je.wasm.proxy=!1),typeof Je.wasm.trace!="boolean"&&(Je.wasm.trace=!1),typeof Je.wasm.numThreads!="number"||!Number.isInteger(Je.wasm.numThreads)||Je.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Je.wasm.numThreads=1;else{let e=typeof navigator>"u"?d_("node:os").cpus().length:navigator.hardwareConcurrency;Je.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},Lc=class{async init(e){Nc(),await Zw(),await Xw(e)}async createInferenceSessionHandler(e,r){let i=new a1;return await i.loadModel(e,r),Promise.resolve(i)}},o1=new Lc});Mn();Mn();Mn();var k2="1.20.1";{let e=(S2(),Fu(s1)).wasmBackend;Ca("webgpu",e,5),Ca("webnn",e,5),Ca("cpu",e,10),Ca("wasm",e,10)}Object.defineProperty(Je.versions,"web",{value:k2,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function E2(e,r,i,s,o,d,u,h){let m=0,g=0;Je.wasm.wasmPaths="./node_modules/onnxruntime-web/dist/";const _=await qc.create(e,{executionProviders:[i]}),w=_.inputNames[0];let f=_.outputNames[0];async function b(){const x=new Pt("float32",new Float32Array(r.reduce((O,R)=>O*R)).map(()=>Math.random()),r),T=performance.now(),z=await _.run({[w]:x}),C=performance.now();return z[f].dispose(),C-T}function S(x,T){d.data.labels.push(x),d.data.datasets[0].data.push(T),d.update()}for(let x=0;x<s;x++){const T=await b();m+=T,S(x,T),u((m/(x+1)).toFixed(2)),await new Promise(z=>setTimeout(z,T))}for(let x=s;x<o+s;x++){const T=await b();g+=T,S(x,T),h((g/(x-s+1)).toFixed(2)),await new Promise(z=>setTimeout(z,T))}}function C2(){const e=sn.useRef(null),r=sn.useRef(null),[i,s]=sn.useState("0"),[o,d]=sn.useState("0"),u=sn.useRef(null),h=sn.useRef(null),m=sn.useRef(null),g=sn.useRef(null),_=sn.useRef(null),[w,f]=sn.useState([]),b=sn.useRef(null),S=sn.useRef(null);window.onload=()=>{const z=b.current.getContext("2d");S.current=new Chart(z,{type:"line",data:{labels:[],datasets:[{label:"Inference Time (ms)",data:[],borderColor:"lightblue",tension:.1}]},options:{plugins:{legend:{labels:{font:{size:16}}}},scales:{x:{ticks:{font:{size:14}}},y:{ticks:{font:{size:14}}}}}})};const x=async()=>{g.current.disabled=!0;const z=m.current;z.textContent="Start benchmark...",z.style.color="red",z.classList.add("blink"),S.current.data.labels=[],S.current.data.datasets[0].data=[],s("0"),d("0");try{const C=[1,3,640,640],O=r.current.value,R=w.find(F=>F.url===O),M=R?R.url:`${window.location.href}/models/${O}.onnx`;await E2(M,C,e.current.value,Number(u.current.value),Number(h.current.value),S.current,s,d)}catch(C){console.error(C),z.textContent="Failed!",z.classList.remove("blink"),g.current.disabled=!1;return}z.textContent="Finished!",z.style.color="green",z.classList.remove("blink"),g.current.disabled=!1},T=z=>{const C=z.target.files[0];if(C){const O=C.name.replace(".onnx","");f([...w,{name:O,url:URL.createObjectURL(C)}])}};return Ue.jsxs(Ue.Fragment,{children:[Ue.jsx("h1",{children:"Model Benchmark - onnxruntime Web"}),Ue.jsxs("div",{id:"setting-container",children:[Ue.jsxs("div",{children:[Ue.jsx("label",{htmlFor:"device-selector",children:"Backend:"}),Ue.jsxs("select",{name:"device-selector",ref:e,children:[Ue.jsx("option",{value:"webgpu",children:"webGPU"}),Ue.jsx("option",{value:"wasm",children:"Wasm(cpu)"})]})]}),Ue.jsxs("div",{children:[Ue.jsx("label",{htmlFor:"model-selector",children:"Model:"}),Ue.jsxs("select",{name:"model-selector",ref:r,children:[Ue.jsx("option",{value:"yolov10n",children:"yolov10n-2.3M"}),Ue.jsx("option",{value:"yolov10s",children:"yolov10s-7.2M"}),Ue.jsx("option",{value:"yolov9t-simplify",children:"yolov9t-2.0M"}),Ue.jsx("option",{value:"yolov9s-simplify",children:"yolov9s-7.1M"}),Ue.jsx("option",{value:"gelan-s2-simplify",children:"gelan-s2"}),Ue.jsx("option",{value:"yolov8n-simplify",children:"yolov8n-3.2M"}),Ue.jsx("option",{value:"yolov8s-simplify",children:"yolov8s-11.2M"}),w.map((z,C)=>Ue.jsx("option",{value:z.url,children:z.name},C))]})]}),Ue.jsxs("div",{children:[Ue.jsx("label",{htmlFor:"warmUpFrequency-input",children:"Warm up frequency:"}),Ue.jsx("input",{type:"number",id:"warmUpFrequency-input",defaultValue:1,min:0,ref:u})]}),Ue.jsxs("div",{children:[Ue.jsx("label",{htmlFor:"testFrequency-input",children:"Testing frequency:"}),Ue.jsx("input",{type:"number",id:"testFrequency-input",defaultValue:100,min:0,ref:h})]})]}),Ue.jsxs("div",{id:"button-container",children:[Ue.jsx("button",{onClick:x,ref:g,children:"Start benchmark"}),Ue.jsx("input",{type:"file",accept:".onnx",onChange:T,ref:_,hidden:!0}),Ue.jsx("button",{onClick:()=>_.current.click(),children:"Add model"})]}),Ue.jsxs("div",{id:"info-container",children:[Ue.jsxs("p",{children:["Warm up Average Time:"," ",Ue.jsxs("span",{className:"info-ms",children:[i,"ms"]})]}),Ue.jsxs("p",{children:["Inference Average Time:"," ",Ue.jsxs("span",{className:"info-ms",children:[o,"ms"]})]})]}),Ue.jsx("canvas",{ref:b}),Ue.jsx("p",{ref:m,style:{fontSize:"1.3rem"},children:"Not Start!"})]})}s_.createRoot(document.getElementById("root")).render(Ue.jsx(J1.StrictMode,{children:Ue.jsx(C2,{})}));
