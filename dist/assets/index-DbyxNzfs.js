(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const T of document.querySelectorAll('link[rel="modulepreload"]'))C(T);new MutationObserver(T=>{for(const L of T)if(L.type==="childList")for(const O of L.addedNodes)O.tagName==="LINK"&&O.rel==="modulepreload"&&C(O)}).observe(document,{childList:!0,subtree:!0});function u(T){const L={};return T.integrity&&(L.integrity=T.integrity),T.referrerPolicy&&(L.referrerPolicy=T.referrerPolicy),T.crossOrigin==="use-credentials"?L.credentials="include":T.crossOrigin==="anonymous"?L.credentials="omit":L.credentials="same-origin",L}function C(T){if(T.ep)return;T.ep=!0;const L=u(T);fetch(T.href,L)}})();var Uo={exports:{}},Ir={},Go={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rc;function Rm(){if(rc)return W;rc=1;var l=Symbol.for("react.element"),d=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),O=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),X=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),B=Symbol.iterator;function q(f){return f===null||typeof f!="object"?null:(f=B&&f[B]||f["@@iterator"],typeof f=="function"?f:null)}var ee={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ie=Object.assign,K={};function re(f,w,G){this.props=f,this.context=w,this.refs=K,this.updater=G||ee}re.prototype.isReactComponent={},re.prototype.setState=function(f,w){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,w,"setState")},re.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function je(){}je.prototype=re.prototype;function Je(f,w,G){this.props=f,this.context=w,this.refs=K,this.updater=G||ee}var be=Je.prototype=new je;be.constructor=Je,ie(be,re.prototype),be.isPureReactComponent=!0;var Se=Array.isArray,Le=Object.prototype.hasOwnProperty,Ce={current:null},Ee={key:!0,ref:!0,__self:!0,__source:!0};function ve(f,w,G){var F,Y={},U=null,te=null;if(w!=null)for(F in w.ref!==void 0&&(te=w.ref),w.key!==void 0&&(U=""+w.key),w)Le.call(w,F)&&!Ee.hasOwnProperty(F)&&(Y[F]=w[F]);var ae=arguments.length-2;if(ae===1)Y.children=G;else if(1<ae){for(var me=Array(ae),Ye=0;Ye<ae;Ye++)me[Ye]=arguments[Ye+2];Y.children=me}if(f&&f.defaultProps)for(F in ae=f.defaultProps,ae)Y[F]===void 0&&(Y[F]=ae[F]);return{$$typeof:l,type:f,key:U,ref:te,props:Y,_owner:Ce.current}}function ut(f,w){return{$$typeof:l,type:f.type,key:w,ref:f.ref,props:f.props,_owner:f._owner}}function rt(f){return typeof f=="object"&&f!==null&&f.$$typeof===l}function ke(f){var w={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(G){return w[G]})}var Ke=/\/+/g;function E(f,w){return typeof f=="object"&&f!==null&&f.key!=null?ke(""+f.key):w.toString(36)}function R(f,w,G,F,Y){var U=typeof f;(U==="undefined"||U==="boolean")&&(f=null);var te=!1;if(f===null)te=!0;else switch(U){case"string":case"number":te=!0;break;case"object":switch(f.$$typeof){case l:case d:te=!0}}if(te)return te=f,Y=Y(te),f=F===""?"."+E(te,0):F,Se(Y)?(G="",f!=null&&(G=f.replace(Ke,"$&/")+"/"),R(Y,w,G,"",function(Ye){return Ye})):Y!=null&&(rt(Y)&&(Y=ut(Y,G+(!Y.key||te&&te.key===Y.key?"":(""+Y.key).replace(Ke,"$&/")+"/")+f)),w.push(Y)),1;if(te=0,F=F===""?".":F+":",Se(f))for(var ae=0;ae<f.length;ae++){U=f[ae];var me=F+E(U,ae);te+=R(U,w,G,me,Y)}else if(me=q(f),typeof me=="function")for(f=me.call(f),ae=0;!(U=f.next()).done;)U=U.value,me=F+E(U,ae++),te+=R(U,w,G,me,Y);else if(U==="object")throw w=String(f),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.");return te}function it(f,w,G){if(f==null)return f;var F=[],Y=0;return R(f,F,"","",function(U){return w.call(G,U,Y++)}),F}function Be(f){if(f._status===-1){var w=f._result;w=w(),w.then(function(G){(f._status===0||f._status===-1)&&(f._status=1,f._result=G)},function(G){(f._status===0||f._status===-1)&&(f._status=2,f._result=G)}),f._status===-1&&(f._status=0,f._result=w)}if(f._status===1)return f._result.default;throw f._result}var ue={current:null},I={transition:null},$={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:I,ReactCurrentOwner:Ce};function _(){throw Error("act(...) is not supported in production builds of React.")}return W.Children={map:it,forEach:function(f,w,G){it(f,function(){w.apply(this,arguments)},G)},count:function(f){var w=0;return it(f,function(){w++}),w},toArray:function(f){return it(f,function(w){return w})||[]},only:function(f){if(!rt(f))throw Error("React.Children.only expected to receive a single React element child.");return f}},W.Component=re,W.Fragment=u,W.Profiler=T,W.PureComponent=Je,W.StrictMode=C,W.Suspense=Q,W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,W.act=_,W.cloneElement=function(f,w,G){if(f==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+f+".");var F=ie({},f.props),Y=f.key,U=f.ref,te=f._owner;if(w!=null){if(w.ref!==void 0&&(U=w.ref,te=Ce.current),w.key!==void 0&&(Y=""+w.key),f.type&&f.type.defaultProps)var ae=f.type.defaultProps;for(me in w)Le.call(w,me)&&!Ee.hasOwnProperty(me)&&(F[me]=w[me]===void 0&&ae!==void 0?ae[me]:w[me])}var me=arguments.length-2;if(me===1)F.children=G;else if(1<me){ae=Array(me);for(var Ye=0;Ye<me;Ye++)ae[Ye]=arguments[Ye+2];F.children=ae}return{$$typeof:l,type:f.type,key:Y,ref:U,props:F,_owner:te}},W.createContext=function(f){return f={$$typeof:O,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},f.Provider={$$typeof:L,_context:f},f.Consumer=f},W.createElement=ve,W.createFactory=function(f){var w=ve.bind(null,f);return w.type=f,w},W.createRef=function(){return{current:null}},W.forwardRef=function(f){return{$$typeof:M,render:f}},W.isValidElement=rt,W.lazy=function(f){return{$$typeof:le,_payload:{_status:-1,_result:f},_init:Be}},W.memo=function(f,w){return{$$typeof:X,type:f,compare:w===void 0?null:w}},W.startTransition=function(f){var w=I.transition;I.transition={};try{f()}finally{I.transition=w}},W.unstable_act=_,W.useCallback=function(f,w){return ue.current.useCallback(f,w)},W.useContext=function(f){return ue.current.useContext(f)},W.useDebugValue=function(){},W.useDeferredValue=function(f){return ue.current.useDeferredValue(f)},W.useEffect=function(f,w){return ue.current.useEffect(f,w)},W.useId=function(){return ue.current.useId()},W.useImperativeHandle=function(f,w,G){return ue.current.useImperativeHandle(f,w,G)},W.useInsertionEffect=function(f,w){return ue.current.useInsertionEffect(f,w)},W.useLayoutEffect=function(f,w){return ue.current.useLayoutEffect(f,w)},W.useMemo=function(f,w){return ue.current.useMemo(f,w)},W.useReducer=function(f,w,G){return ue.current.useReducer(f,w,G)},W.useRef=function(f){return ue.current.useRef(f)},W.useState=function(f){return ue.current.useState(f)},W.useSyncExternalStore=function(f,w,G){return ue.current.useSyncExternalStore(f,w,G)},W.useTransition=function(){return ue.current.useTransition()},W.version="18.3.1",W}var ic;function ns(){return ic||(ic=1,Go.exports=Rm()),Go.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ac;function Mm(){if(ac)return Ir;ac=1;var l=ns(),d=Symbol.for("react.element"),u=Symbol.for("react.fragment"),C=Object.prototype.hasOwnProperty,T=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L={key:!0,ref:!0,__self:!0,__source:!0};function O(M,Q,X){var le,B={},q=null,ee=null;X!==void 0&&(q=""+X),Q.key!==void 0&&(q=""+Q.key),Q.ref!==void 0&&(ee=Q.ref);for(le in Q)C.call(Q,le)&&!L.hasOwnProperty(le)&&(B[le]=Q[le]);if(M&&M.defaultProps)for(le in Q=M.defaultProps,Q)B[le]===void 0&&(B[le]=Q[le]);return{$$typeof:d,type:M,key:q,ref:ee,props:B,_owner:T.current}}return Ir.Fragment=u,Ir.jsx=O,Ir.jsxs=O,Ir}var oc;function Om(){return oc||(oc=1,Uo.exports=Mm()),Uo.exports}var y=Om(),J=ns(),Fi={},Qo={exports:{}},We={},Wo={exports:{}},Jo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sc;function jm(){return sc||(sc=1,(function(l){function d(I,$){var _=I.length;I.push($);e:for(;0<_;){var f=_-1>>>1,w=I[f];if(0<T(w,$))I[f]=$,I[_]=w,_=f;else break e}}function u(I){return I.length===0?null:I[0]}function C(I){if(I.length===0)return null;var $=I[0],_=I.pop();if(_!==$){I[0]=_;e:for(var f=0,w=I.length,G=w>>>1;f<G;){var F=2*(f+1)-1,Y=I[F],U=F+1,te=I[U];if(0>T(Y,_))U<w&&0>T(te,Y)?(I[f]=te,I[U]=_,f=U):(I[f]=Y,I[F]=_,f=F);else if(U<w&&0>T(te,_))I[f]=te,I[U]=_,f=U;else break e}}return $}function T(I,$){var _=I.sortIndex-$.sortIndex;return _!==0?_:I.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var L=performance;l.unstable_now=function(){return L.now()}}else{var O=Date,M=O.now();l.unstable_now=function(){return O.now()-M}}var Q=[],X=[],le=1,B=null,q=3,ee=!1,ie=!1,K=!1,re=typeof setTimeout=="function"?setTimeout:null,je=typeof clearTimeout=="function"?clearTimeout:null,Je=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function be(I){for(var $=u(X);$!==null;){if($.callback===null)C(X);else if($.startTime<=I)C(X),$.sortIndex=$.expirationTime,d(Q,$);else break;$=u(X)}}function Se(I){if(K=!1,be(I),!ie)if(u(Q)!==null)ie=!0,Be(Le);else{var $=u(X);$!==null&&ue(Se,$.startTime-I)}}function Le(I,$){ie=!1,K&&(K=!1,je(ve),ve=-1),ee=!0;var _=q;try{for(be($),B=u(Q);B!==null&&(!(B.expirationTime>$)||I&&!ke());){var f=B.callback;if(typeof f=="function"){B.callback=null,q=B.priorityLevel;var w=f(B.expirationTime<=$);$=l.unstable_now(),typeof w=="function"?B.callback=w:B===u(Q)&&C(Q),be($)}else C(Q);B=u(Q)}if(B!==null)var G=!0;else{var F=u(X);F!==null&&ue(Se,F.startTime-$),G=!1}return G}finally{B=null,q=_,ee=!1}}var Ce=!1,Ee=null,ve=-1,ut=5,rt=-1;function ke(){return!(l.unstable_now()-rt<ut)}function Ke(){if(Ee!==null){var I=l.unstable_now();rt=I;var $=!0;try{$=Ee(!0,I)}finally{$?E():(Ce=!1,Ee=null)}}else Ce=!1}var E;if(typeof Je=="function")E=function(){Je(Ke)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,it=R.port2;R.port1.onmessage=Ke,E=function(){it.postMessage(null)}}else E=function(){re(Ke,0)};function Be(I){Ee=I,Ce||(Ce=!0,E())}function ue(I,$){ve=re(function(){I(l.unstable_now())},$)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(I){I.callback=null},l.unstable_continueExecution=function(){ie||ee||(ie=!0,Be(Le))},l.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ut=0<I?Math.floor(1e3/I):5},l.unstable_getCurrentPriorityLevel=function(){return q},l.unstable_getFirstCallbackNode=function(){return u(Q)},l.unstable_next=function(I){switch(q){case 1:case 2:case 3:var $=3;break;default:$=q}var _=q;q=$;try{return I()}finally{q=_}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(I,$){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var _=q;q=I;try{return $()}finally{q=_}},l.unstable_scheduleCallback=function(I,$,_){var f=l.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?f+_:f):_=f,I){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=_+w,I={id:le++,callback:$,priorityLevel:I,startTime:_,expirationTime:w,sortIndex:-1},_>f?(I.sortIndex=_,d(X,I),u(Q)===null&&I===u(X)&&(K?(je(ve),ve=-1):K=!0,ue(Se,_-f))):(I.sortIndex=w,d(Q,I),ie||ee||(ie=!0,Be(Le))),I},l.unstable_shouldYield=ke,l.unstable_wrapCallback=function(I){var $=q;return function(){var _=q;q=$;try{return I.apply(this,arguments)}finally{q=_}}}})(Jo)),Jo}var lc;function Vm(){return lc||(lc=1,Wo.exports=jm()),Wo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dc;function $m(){if(dc)return We;dc=1;var l=ns(),d=Vm();function u(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var C=new Set,T={};function L(e,n){O(e,n),O(e+"Capture",n)}function O(e,n){for(T[e]=n,e=0;e<n.length;e++)C.add(n[e])}var M=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Q=Object.prototype.hasOwnProperty,X=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,le={},B={};function q(e){return Q.call(B,e)?!0:Q.call(le,e)?!1:X.test(e)?B[e]=!0:(le[e]=!0,!1)}function ee(e,n,r,i){if(r!==null&&r.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ie(e,n,r,i){if(n===null||typeof n>"u"||ee(e,n,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function K(e,n,r,i,a,o,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=i,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=s}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new K(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];re[n]=new K(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new K(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new K(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new K(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){re[e]=new K(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){re[e]=new K(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){re[e]=new K(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){re[e]=new K(e,5,!1,e.toLowerCase(),null,!1,!1)});var je=/[\-:]([a-z])/g;function Je(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(je,Je);re[n]=new K(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(je,Je);re[n]=new K(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(je,Je);re[n]=new K(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){re[e]=new K(e,1,!1,e.toLowerCase(),null,!1,!1)}),re.xlinkHref=new K("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){re[e]=new K(e,1,!1,e.toLowerCase(),null,!0,!0)});function be(e,n,r,i){var a=re.hasOwnProperty(n)?re[n]:null;(a!==null?a.type!==0:i||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(ie(n,r,a,i)&&(r=null),i||a===null?q(n)&&(r===null?e.removeAttribute(n):e.setAttribute(n,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(n=a.attributeName,i=a.attributeNamespace,r===null?e.removeAttribute(n):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,i?e.setAttributeNS(i,n,r):e.setAttribute(n,r))))}var Se=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Le=Symbol.for("react.element"),Ce=Symbol.for("react.portal"),Ee=Symbol.for("react.fragment"),ve=Symbol.for("react.strict_mode"),ut=Symbol.for("react.profiler"),rt=Symbol.for("react.provider"),ke=Symbol.for("react.context"),Ke=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),it=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),I=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var _=Object.assign,f;function w(e){if(f===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);f=n&&n[1]||""}return`
`+f+e}var G=!1;function F(e,n){if(!e||G)return"";G=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(v){var i=v}Reflect.construct(e,[],n)}else{try{n.call()}catch(v){i=v}e.call(n.prototype)}else{try{throw Error()}catch(v){i=v}e()}}catch(v){if(v&&i&&typeof v.stack=="string"){for(var a=v.stack.split(`
`),o=i.stack.split(`
`),s=a.length-1,c=o.length-1;1<=s&&0<=c&&a[s]!==o[c];)c--;for(;1<=s&&0<=c;s--,c--)if(a[s]!==o[c]){if(s!==1||c!==1)do if(s--,c--,0>c||a[s]!==o[c]){var m=`
`+a[s].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=s&&0<=c);break}}}finally{G=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?w(e):""}function Y(e){switch(e.tag){case 5:return w(e.type);case 16:return w("Lazy");case 13:return w("Suspense");case 19:return w("SuspenseList");case 0:case 2:case 15:return e=F(e.type,!1),e;case 11:return e=F(e.type.render,!1),e;case 1:return e=F(e.type,!0),e;default:return""}}function U(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ee:return"Fragment";case Ce:return"Portal";case ut:return"Profiler";case ve:return"StrictMode";case E:return"Suspense";case R:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ke:return(e.displayName||"Context")+".Consumer";case rt:return(e._context.displayName||"Context")+".Provider";case Ke:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case it:return n=e.displayName||null,n!==null?n:U(e.type)||"Memo";case Be:n=e._payload,e=e._init;try{return U(e(n))}catch{}}return null}function te(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return U(n);case 8:return n===ve?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ae(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function me(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ye(e){var n=me(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),i=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,o=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Br(e){e._valueTracker||(e._valueTracker=Ye(e))}function ds(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),i="";return e&&(i=me(e)?e.checked?"true":"false":e.value),e=i,e!==r?(n.setValue(e),!0):!1}function Ar(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Yi(e,n){var r=n.checked;return _({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function cs(e,n){var r=n.defaultValue==null?"":n.defaultValue,i=n.checked!=null?n.checked:n.defaultChecked;r=ae(n.value!=null?n.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function us(e,n){n=n.checked,n!=null&&be(e,"checked",n,!1)}function Xi(e,n){us(e,n);var r=ae(n.value),i=n.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Zi(e,n.type,r):n.hasOwnProperty("defaultValue")&&Zi(e,n.type,ae(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ms(e,n,r){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var i=n.type;if(!(i!=="submit"&&i!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,r||n===e.value||(e.value=n),e.defaultValue=n}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Zi(e,n,r){(n!=="number"||Ar(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var qn=Array.isArray;function vn(e,n,r,i){if(e=e.options,n){n={};for(var a=0;a<r.length;a++)n["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=n.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&i&&(e[r].defaultSelected=!0)}else{for(r=""+ae(r),n=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function ea(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(u(91));return _({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ps(e,n){var r=n.value;if(r==null){if(r=n.children,n=n.defaultValue,r!=null){if(n!=null)throw Error(u(92));if(qn(r)){if(1<r.length)throw Error(u(93));r=r[0]}n=r}n==null&&(n=""),r=n}e._wrapperState={initialValue:ae(r)}}function fs(e,n){var r=ae(n.value),i=ae(n.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),n.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function gs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function hs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ta(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?hs(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rr,vs=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,r,i,a){MSApp.execUnsafeLocalFunction(function(){return e(n,r,i,a)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Rr=Rr||document.createElement("div"),Rr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Rr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Fn(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var Un={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vc=["Webkit","ms","Moz","O"];Object.keys(Un).forEach(function(e){Vc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Un[n]=Un[e]})});function ys(e,n,r){return n==null||typeof n=="boolean"||n===""?"":r||typeof n!="number"||n===0||Un.hasOwnProperty(e)&&Un[e]?(""+n).trim():n+"px"}function _s(e,n){e=e.style;for(var r in n)if(n.hasOwnProperty(r)){var i=r.indexOf("--")===0,a=ys(r,n[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,a):e[r]=a}}var $c=_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function na(e,n){if(n){if($c[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(u(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(u(61))}if(n.style!=null&&typeof n.style!="object")throw Error(u(62))}}function ra(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ia=null;function aa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oa=null,yn=null,_n=null;function ws(e){if(e=pr(e)){if(typeof oa!="function")throw Error(u(280));var n=e.stateNode;n&&(n=ai(n),oa(e.stateNode,e.type,n))}}function bs(e){yn?_n?_n.push(e):_n=[e]:yn=e}function Ss(){if(yn){var e=yn,n=_n;if(_n=yn=null,ws(e),n)for(e=0;e<n.length;e++)ws(n[e])}}function ks(e,n){return e(n)}function xs(){}var sa=!1;function Ts(e,n,r){if(sa)return e(n,r);sa=!0;try{return ks(e,n,r)}finally{sa=!1,(yn!==null||_n!==null)&&(xs(),Ss())}}function Gn(e,n){var r=e.stateNode;if(r===null)return null;var i=ai(r);if(i===null)return null;r=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(u(231,n,typeof r));return r}var la=!1;if(M)try{var Qn={};Object.defineProperty(Qn,"passive",{get:function(){la=!0}}),window.addEventListener("test",Qn,Qn),window.removeEventListener("test",Qn,Qn)}catch{la=!1}function Hc(e,n,r,i,a,o,s,c,m){var v=Array.prototype.slice.call(arguments,3);try{n.apply(r,v)}catch(S){this.onError(S)}}var Wn=!1,Mr=null,Or=!1,da=null,qc={onError:function(e){Wn=!0,Mr=e}};function Fc(e,n,r,i,a,o,s,c,m){Wn=!1,Mr=null,Hc.apply(qc,arguments)}function Uc(e,n,r,i,a,o,s,c,m){if(Fc.apply(this,arguments),Wn){if(Wn){var v=Mr;Wn=!1,Mr=null}else throw Error(u(198));Or||(Or=!0,da=v)}}function nn(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function Cs(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Es(e){if(nn(e)!==e)throw Error(u(188))}function Gc(e){var n=e.alternate;if(!n){if(n=nn(e),n===null)throw Error(u(188));return n!==e?null:e}for(var r=e,i=n;;){var a=r.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){r=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===r)return Es(a),e;if(o===i)return Es(a),n;o=o.sibling}throw Error(u(188))}if(r.return!==i.return)r=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===r){s=!0,r=a,i=o;break}if(c===i){s=!0,i=a,r=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===r){s=!0,r=o,i=a;break}if(c===i){s=!0,i=o,r=a;break}c=c.sibling}if(!s)throw Error(u(189))}}if(r.alternate!==i)throw Error(u(190))}if(r.tag!==3)throw Error(u(188));return r.stateNode.current===r?e:n}function Is(e){return e=Gc(e),e!==null?Ns(e):null}function Ns(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ns(e);if(n!==null)return n;e=e.sibling}return null}var Ps=d.unstable_scheduleCallback,Ls=d.unstable_cancelCallback,Qc=d.unstable_shouldYield,Wc=d.unstable_requestPaint,ye=d.unstable_now,Jc=d.unstable_getCurrentPriorityLevel,ca=d.unstable_ImmediatePriority,zs=d.unstable_UserBlockingPriority,jr=d.unstable_NormalPriority,Kc=d.unstable_LowPriority,Ds=d.unstable_IdlePriority,Vr=null,wt=null;function Yc(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Vr,e,void 0,(e.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:eu,Xc=Math.log,Zc=Math.LN2;function eu(e){return e>>>=0,e===0?32:31-(Xc(e)/Zc|0)|0}var $r=64,Hr=4194304;function Jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qr(e,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes,s=r&268435455;if(s!==0){var c=s&~a;c!==0?i=Jn(c):(o&=s,o!==0&&(i=Jn(o)))}else s=r&~a,s!==0?i=Jn(s):o!==0&&(i=Jn(o));if(i===0)return 0;if(n!==0&&n!==i&&(n&a)===0&&(a=i&-i,o=n&-n,a>=o||a===16&&(o&4194240)!==0))return n;if((i&4)!==0&&(i|=r&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=i;0<n;)r=31-mt(n),a=1<<r,i|=e[r],n&=~a;return i}function tu(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nu(e,n){for(var r=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-mt(o),c=1<<s,m=a[s];m===-1?((c&r)===0||(c&i)!==0)&&(a[s]=tu(c,n)):m<=n&&(e.expiredLanes|=c),o&=~c}}function ua(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bs(){var e=$r;return $r<<=1,($r&4194240)===0&&($r=64),e}function ma(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function Kn(e,n,r){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-mt(n),e[n]=r}function ru(e,n){var r=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-mt(r),o=1<<a;n[a]=0,i[a]=-1,e[a]=-1,r&=~o}}function pa(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var i=31-mt(r),a=1<<i;a&n|e[i]&n&&(e[i]|=n),r&=~a}}var oe=0;function As(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Rs,fa,Ms,Os,js,ga=!1,Fr=[],Mt=null,Ot=null,jt=null,Yn=new Map,Xn=new Map,Vt=[],iu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vs(e,n){switch(e){case"focusin":case"focusout":Mt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":Yn.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(n.pointerId)}}function Zn(e,n,r,i,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:r,eventSystemFlags:i,nativeEvent:o,targetContainers:[a]},n!==null&&(n=pr(n),n!==null&&fa(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function au(e,n,r,i,a){switch(n){case"focusin":return Mt=Zn(Mt,e,n,r,i,a),!0;case"dragenter":return Ot=Zn(Ot,e,n,r,i,a),!0;case"mouseover":return jt=Zn(jt,e,n,r,i,a),!0;case"pointerover":var o=a.pointerId;return Yn.set(o,Zn(Yn.get(o)||null,e,n,r,i,a)),!0;case"gotpointercapture":return o=a.pointerId,Xn.set(o,Zn(Xn.get(o)||null,e,n,r,i,a)),!0}return!1}function $s(e){var n=rn(e.target);if(n!==null){var r=nn(n);if(r!==null){if(n=r.tag,n===13){if(n=Cs(r),n!==null){e.blockedOn=n,js(e.priority,function(){Ms(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=va(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);ia=i,r.target.dispatchEvent(i),ia=null}else return n=pr(r),n!==null&&fa(n),e.blockedOn=r,!1;n.shift()}return!0}function Hs(e,n,r){Ur(e)&&r.delete(n)}function ou(){ga=!1,Mt!==null&&Ur(Mt)&&(Mt=null),Ot!==null&&Ur(Ot)&&(Ot=null),jt!==null&&Ur(jt)&&(jt=null),Yn.forEach(Hs),Xn.forEach(Hs)}function er(e,n){e.blockedOn===n&&(e.blockedOn=null,ga||(ga=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,ou)))}function tr(e){function n(a){return er(a,e)}if(0<Fr.length){er(Fr[0],e);for(var r=1;r<Fr.length;r++){var i=Fr[r];i.blockedOn===e&&(i.blockedOn=null)}}for(Mt!==null&&er(Mt,e),Ot!==null&&er(Ot,e),jt!==null&&er(jt,e),Yn.forEach(n),Xn.forEach(n),r=0;r<Vt.length;r++)i=Vt[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<Vt.length&&(r=Vt[0],r.blockedOn===null);)$s(r),r.blockedOn===null&&Vt.shift()}var wn=Se.ReactCurrentBatchConfig,Gr=!0;function su(e,n,r,i){var a=oe,o=wn.transition;wn.transition=null;try{oe=1,ha(e,n,r,i)}finally{oe=a,wn.transition=o}}function lu(e,n,r,i){var a=oe,o=wn.transition;wn.transition=null;try{oe=4,ha(e,n,r,i)}finally{oe=a,wn.transition=o}}function ha(e,n,r,i){if(Gr){var a=va(e,n,r,i);if(a===null)Ba(e,n,i,Qr,r),Vs(e,i);else if(au(a,e,n,r,i))i.stopPropagation();else if(Vs(e,i),n&4&&-1<iu.indexOf(e)){for(;a!==null;){var o=pr(a);if(o!==null&&Rs(o),o=va(e,n,r,i),o===null&&Ba(e,n,i,Qr,r),o===a)break;a=o}a!==null&&i.stopPropagation()}else Ba(e,n,i,null,r)}}var Qr=null;function va(e,n,r,i){if(Qr=null,e=aa(i),e=rn(e),e!==null)if(n=nn(e),n===null)e=null;else if(r=n.tag,r===13){if(e=Cs(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Qr=e,null}function qs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jc()){case ca:return 1;case zs:return 4;case jr:case Kc:return 16;case Ds:return 536870912;default:return 16}default:return 16}}var $t=null,ya=null,Wr=null;function Fs(){if(Wr)return Wr;var e,n=ya,r=n.length,i,a="value"in $t?$t.value:$t.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var s=r-e;for(i=1;i<=s&&n[r-i]===a[o-i];i++);return Wr=a.slice(e,1<i?1-i:void 0)}function Jr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Kr(){return!0}function Us(){return!1}function Xe(e){function n(r,i,a,o,s){this._reactName=r,this._targetInst=a,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(r=e[c],this[c]=r?r(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Kr:Us,this.isPropagationStopped=Us,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Kr)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Kr)},persist:function(){},isPersistent:Kr}),n}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_a=Xe(bn),nr=_({},bn,{view:0,detail:0}),du=Xe(nr),wa,ba,rr,Yr=_({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ka,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rr&&(rr&&e.type==="mousemove"?(wa=e.screenX-rr.screenX,ba=e.screenY-rr.screenY):ba=wa=0,rr=e),wa)},movementY:function(e){return"movementY"in e?e.movementY:ba}}),Gs=Xe(Yr),cu=_({},Yr,{dataTransfer:0}),uu=Xe(cu),mu=_({},nr,{relatedTarget:0}),Sa=Xe(mu),pu=_({},bn,{animationName:0,elapsedTime:0,pseudoElement:0}),fu=Xe(pu),gu=_({},bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hu=Xe(gu),vu=_({},bn,{data:0}),Qs=Xe(vu),yu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_u={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bu(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=wu[e])?!!n[e]:!1}function ka(){return bu}var Su=_({},nr,{key:function(e){if(e.key){var n=yu[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_u[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ka,charCode:function(e){return e.type==="keypress"?Jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ku=Xe(Su),xu=_({},Yr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ws=Xe(xu),Tu=_({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ka}),Cu=Xe(Tu),Eu=_({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iu=Xe(Eu),Nu=_({},Yr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pu=Xe(Nu),Lu=[9,13,27,32],xa=M&&"CompositionEvent"in window,ir=null;M&&"documentMode"in document&&(ir=document.documentMode);var zu=M&&"TextEvent"in window&&!ir,Js=M&&(!xa||ir&&8<ir&&11>=ir),Ks=" ",Ys=!1;function Xs(e,n){switch(e){case"keyup":return Lu.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function Du(e,n){switch(e){case"compositionend":return Zs(n);case"keypress":return n.which!==32?null:(Ys=!0,Ks);case"textInput":return e=n.data,e===Ks&&Ys?null:e;default:return null}}function Bu(e,n){if(Sn)return e==="compositionend"||!xa&&Xs(e,n)?(e=Fs(),Wr=ya=$t=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Js&&n.locale!=="ko"?null:n.data;default:return null}}var Au={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function el(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Au[e.type]:n==="textarea"}function tl(e,n,r,i){bs(i),n=ni(n,"onChange"),0<n.length&&(r=new _a("onChange","change",null,r,i),e.push({event:r,listeners:n}))}var ar=null,or=null;function Ru(e){_l(e,0)}function Xr(e){var n=En(e);if(ds(n))return e}function Mu(e,n){if(e==="change")return n}var nl=!1;if(M){var Ta;if(M){var Ca="oninput"in document;if(!Ca){var rl=document.createElement("div");rl.setAttribute("oninput","return;"),Ca=typeof rl.oninput=="function"}Ta=Ca}else Ta=!1;nl=Ta&&(!document.documentMode||9<document.documentMode)}function il(){ar&&(ar.detachEvent("onpropertychange",al),or=ar=null)}function al(e){if(e.propertyName==="value"&&Xr(or)){var n=[];tl(n,or,e,aa(e)),Ts(Ru,n)}}function Ou(e,n,r){e==="focusin"?(il(),ar=n,or=r,ar.attachEvent("onpropertychange",al)):e==="focusout"&&il()}function ju(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xr(or)}function Vu(e,n){if(e==="click")return Xr(n)}function $u(e,n){if(e==="input"||e==="change")return Xr(n)}function Hu(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var pt=typeof Object.is=="function"?Object.is:Hu;function sr(e,n){if(pt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),i=Object.keys(n);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var a=r[i];if(!Q.call(n,a)||!pt(e[a],n[a]))return!1}return!0}function ol(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sl(e,n){var r=ol(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=n&&i>=n)return{node:r,offset:n-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ol(r)}}function ll(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ll(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function dl(){for(var e=window,n=Ar();n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=Ar(e.document)}return n}function Ea(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function qu(e){var n=dl(),r=e.focusedElem,i=e.selectionRange;if(n!==r&&r&&r.ownerDocument&&ll(r.ownerDocument.documentElement,r)){if(i!==null&&Ea(r)){if(n=i.start,e=i.end,e===void 0&&(e=n),"selectionStart"in r)r.selectionStart=n,r.selectionEnd=Math.min(e,r.value.length);else if(e=(n=r.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,o=Math.min(i.start,a);i=i.end===void 0?o:Math.min(i.end,a),!e.extend&&o>i&&(a=i,i=o,o=a),a=sl(r,o);var s=sl(r,i);a&&s&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),o>i?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=r;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<n.length;r++)e=n[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fu=M&&"documentMode"in document&&11>=document.documentMode,kn=null,Ia=null,lr=null,Na=!1;function cl(e,n,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Na||kn==null||kn!==Ar(i)||(i=kn,"selectionStart"in i&&Ea(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),lr&&sr(lr,i)||(lr=i,i=ni(Ia,"onSelect"),0<i.length&&(n=new _a("onSelect","select",null,n,r),e.push({event:n,listeners:i}),n.target=kn)))}function Zr(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var xn={animationend:Zr("Animation","AnimationEnd"),animationiteration:Zr("Animation","AnimationIteration"),animationstart:Zr("Animation","AnimationStart"),transitionend:Zr("Transition","TransitionEnd")},Pa={},ul={};M&&(ul=document.createElement("div").style,"AnimationEvent"in window||(delete xn.animationend.animation,delete xn.animationiteration.animation,delete xn.animationstart.animation),"TransitionEvent"in window||delete xn.transitionend.transition);function ei(e){if(Pa[e])return Pa[e];if(!xn[e])return e;var n=xn[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in ul)return Pa[e]=n[r];return e}var ml=ei("animationend"),pl=ei("animationiteration"),fl=ei("animationstart"),gl=ei("transitionend"),hl=new Map,vl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ht(e,n){hl.set(e,n),L(n,[e])}for(var La=0;La<vl.length;La++){var za=vl[La],Uu=za.toLowerCase(),Gu=za[0].toUpperCase()+za.slice(1);Ht(Uu,"on"+Gu)}Ht(ml,"onAnimationEnd"),Ht(pl,"onAnimationIteration"),Ht(fl,"onAnimationStart"),Ht("dblclick","onDoubleClick"),Ht("focusin","onFocus"),Ht("focusout","onBlur"),Ht(gl,"onTransitionEnd"),O("onMouseEnter",["mouseout","mouseover"]),O("onMouseLeave",["mouseout","mouseover"]),O("onPointerEnter",["pointerout","pointerover"]),O("onPointerLeave",["pointerout","pointerover"]),L("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),L("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),L("onBeforeInput",["compositionend","keypress","textInput","paste"]),L("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),L("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),L("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qu=new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));function yl(e,n,r){var i=e.type||"unknown-event";e.currentTarget=r,Uc(i,n,void 0,e),e.currentTarget=null}function _l(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],a=i.event;i=i.listeners;e:{var o=void 0;if(n)for(var s=i.length-1;0<=s;s--){var c=i[s],m=c.instance,v=c.currentTarget;if(c=c.listener,m!==o&&a.isPropagationStopped())break e;yl(a,c,v),o=m}else for(s=0;s<i.length;s++){if(c=i[s],m=c.instance,v=c.currentTarget,c=c.listener,m!==o&&a.isPropagationStopped())break e;yl(a,c,v),o=m}}}if(Or)throw e=da,Or=!1,da=null,e}function de(e,n){var r=n[Va];r===void 0&&(r=n[Va]=new Set);var i=e+"__bubble";r.has(i)||(wl(n,e,2,!1),r.add(i))}function Da(e,n,r){var i=0;n&&(i|=4),wl(r,e,i,n)}var ti="_reactListening"+Math.random().toString(36).slice(2);function cr(e){if(!e[ti]){e[ti]=!0,C.forEach(function(r){r!=="selectionchange"&&(Qu.has(r)||Da(r,!1,e),Da(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ti]||(n[ti]=!0,Da("selectionchange",!1,n))}}function wl(e,n,r,i){switch(qs(n)){case 1:var a=su;break;case 4:a=lu;break;default:a=ha}r=a.bind(null,n,r,e),a=void 0,!la||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(n,r,{capture:!0,passive:a}):e.addEventListener(n,r,!0):a!==void 0?e.addEventListener(n,r,{passive:a}):e.addEventListener(n,r,!1)}function Ba(e,n,r,i,a){var o=i;if((n&1)===0&&(n&2)===0&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var c=i.stateNode.containerInfo;if(c===a||c.nodeType===8&&c.parentNode===a)break;if(s===4)for(s=i.return;s!==null;){var m=s.tag;if((m===3||m===4)&&(m=s.stateNode.containerInfo,m===a||m.nodeType===8&&m.parentNode===a))return;s=s.return}for(;c!==null;){if(s=rn(c),s===null)return;if(m=s.tag,m===5||m===6){i=o=s;continue e}c=c.parentNode}}i=i.return}Ts(function(){var v=o,S=aa(r),k=[];e:{var b=hl.get(e);if(b!==void 0){var N=_a,z=e;switch(e){case"keypress":if(Jr(r)===0)break e;case"keydown":case"keyup":N=ku;break;case"focusin":z="focus",N=Sa;break;case"focusout":z="blur",N=Sa;break;case"beforeblur":case"afterblur":N=Sa;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Gs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=uu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Cu;break;case ml:case pl:case fl:N=fu;break;case gl:N=Iu;break;case"scroll":N=du;break;case"wheel":N=Pu;break;case"copy":case"cut":case"paste":N=hu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Ws}var D=(n&4)!==0,_e=!D&&e==="scroll",g=D?b!==null?b+"Capture":null:b;D=[];for(var p=v,h;p!==null;){h=p;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,g!==null&&(x=Gn(p,g),x!=null&&D.push(ur(p,x,h)))),_e)break;p=p.return}0<D.length&&(b=new N(b,z,null,r,S),k.push({event:b,listeners:D}))}}if((n&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",b&&r!==ia&&(z=r.relatedTarget||r.fromElement)&&(rn(z)||z[Et]))break e;if((N||b)&&(b=S.window===S?S:(b=S.ownerDocument)?b.defaultView||b.parentWindow:window,N?(z=r.relatedTarget||r.toElement,N=v,z=z?rn(z):null,z!==null&&(_e=nn(z),z!==_e||z.tag!==5&&z.tag!==6)&&(z=null)):(N=null,z=v),N!==z)){if(D=Gs,x="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(D=Ws,x="onPointerLeave",g="onPointerEnter",p="pointer"),_e=N==null?b:En(N),h=z==null?b:En(z),b=new D(x,p+"leave",N,r,S),b.target=_e,b.relatedTarget=h,x=null,rn(S)===v&&(D=new D(g,p+"enter",z,r,S),D.target=h,D.relatedTarget=_e,x=D),_e=x,N&&z)t:{for(D=N,g=z,p=0,h=D;h;h=Tn(h))p++;for(h=0,x=g;x;x=Tn(x))h++;for(;0<p-h;)D=Tn(D),p--;for(;0<h-p;)g=Tn(g),h--;for(;p--;){if(D===g||g!==null&&D===g.alternate)break t;D=Tn(D),g=Tn(g)}D=null}else D=null;N!==null&&bl(k,b,N,D,!1),z!==null&&_e!==null&&bl(k,_e,z,D,!0)}}e:{if(b=v?En(v):window,N=b.nodeName&&b.nodeName.toLowerCase(),N==="select"||N==="input"&&b.type==="file")var A=Mu;else if(el(b))if(nl)A=$u;else{A=ju;var j=Ou}else(N=b.nodeName)&&N.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&(A=Vu);if(A&&(A=A(e,v))){tl(k,A,r,S);break e}j&&j(e,b,v),e==="focusout"&&(j=b._wrapperState)&&j.controlled&&b.type==="number"&&Zi(b,"number",b.value)}switch(j=v?En(v):window,e){case"focusin":(el(j)||j.contentEditable==="true")&&(kn=j,Ia=v,lr=null);break;case"focusout":lr=Ia=kn=null;break;case"mousedown":Na=!0;break;case"contextmenu":case"mouseup":case"dragend":Na=!1,cl(k,r,S);break;case"selectionchange":if(Fu)break;case"keydown":case"keyup":cl(k,r,S)}var V;if(xa)e:{switch(e){case"compositionstart":var H="onCompositionStart";break e;case"compositionend":H="onCompositionEnd";break e;case"compositionupdate":H="onCompositionUpdate";break e}H=void 0}else Sn?Xs(e,r)&&(H="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(H="onCompositionStart");H&&(Js&&r.locale!=="ko"&&(Sn||H!=="onCompositionStart"?H==="onCompositionEnd"&&Sn&&(V=Fs()):($t=S,ya="value"in $t?$t.value:$t.textContent,Sn=!0)),j=ni(v,H),0<j.length&&(H=new Qs(H,e,null,r,S),k.push({event:H,listeners:j}),V?H.data=V:(V=Zs(r),V!==null&&(H.data=V)))),(V=zu?Du(e,r):Bu(e,r))&&(v=ni(v,"onBeforeInput"),0<v.length&&(S=new Qs("onBeforeInput","beforeinput",null,r,S),k.push({event:S,listeners:v}),S.data=V))}_l(k,n)})}function ur(e,n,r){return{instance:e,listener:n,currentTarget:r}}function ni(e,n){for(var r=n+"Capture",i=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=Gn(e,r),o!=null&&i.unshift(ur(e,o,a)),o=Gn(e,n),o!=null&&i.push(ur(e,o,a))),e=e.return}return i}function Tn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function bl(e,n,r,i,a){for(var o=n._reactName,s=[];r!==null&&r!==i;){var c=r,m=c.alternate,v=c.stateNode;if(m!==null&&m===i)break;c.tag===5&&v!==null&&(c=v,a?(m=Gn(r,o),m!=null&&s.unshift(ur(r,m,c))):a||(m=Gn(r,o),m!=null&&s.push(ur(r,m,c)))),r=r.return}s.length!==0&&e.push({event:n,listeners:s})}var Wu=/\r\n?/g,Ju=/\u0000|\uFFFD/g;function Sl(e){return(typeof e=="string"?e:""+e).replace(Wu,`
`).replace(Ju,"")}function ri(e,n,r){if(n=Sl(n),Sl(e)!==n&&r)throw Error(u(425))}function ii(){}var Aa=null,Ra=null;function Ma(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Oa=typeof setTimeout=="function"?setTimeout:void 0,Ku=typeof clearTimeout=="function"?clearTimeout:void 0,kl=typeof Promise=="function"?Promise:void 0,Yu=typeof queueMicrotask=="function"?queueMicrotask:typeof kl<"u"?function(e){return kl.resolve(null).then(e).catch(Xu)}:Oa;function Xu(e){setTimeout(function(){throw e})}function ja(e,n){var r=n,i=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(i===0){e.removeChild(a),tr(n);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=a}while(r);tr(n)}function qt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function xl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}var Cn=Math.random().toString(36).slice(2),bt="__reactFiber$"+Cn,mr="__reactProps$"+Cn,Et="__reactContainer$"+Cn,Va="__reactEvents$"+Cn,Zu="__reactListeners$"+Cn,em="__reactHandles$"+Cn;function rn(e){var n=e[bt];if(n)return n;for(var r=e.parentNode;r;){if(n=r[Et]||r[bt]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=xl(e);e!==null;){if(r=e[bt])return r;e=xl(e)}return n}e=r,r=e.parentNode}return null}function pr(e){return e=e[bt]||e[Et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function En(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function ai(e){return e[mr]||null}var $a=[],In=-1;function Ft(e){return{current:e}}function ce(e){0>In||(e.current=$a[In],$a[In]=null,In--)}function se(e,n){In++,$a[In]=e.current,e.current=n}var Ut={},Ae=Ft(Ut),qe=Ft(!1),an=Ut;function Nn(e,n){var r=e.type.contextTypes;if(!r)return Ut;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===n)return i.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in r)a[o]=n[o];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function Fe(e){return e=e.childContextTypes,e!=null}function oi(){ce(qe),ce(Ae)}function Tl(e,n,r){if(Ae.current!==Ut)throw Error(u(168));se(Ae,n),se(qe,r)}function Cl(e,n,r){var i=e.stateNode;if(n=n.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var a in i)if(!(a in n))throw Error(u(108,te(e)||"Unknown",a));return _({},r,i)}function si(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ut,an=Ae.current,se(Ae,e),se(qe,qe.current),!0}function El(e,n,r){var i=e.stateNode;if(!i)throw Error(u(169));r?(e=Cl(e,n,an),i.__reactInternalMemoizedMergedChildContext=e,ce(qe),ce(Ae),se(Ae,e)):ce(qe),se(qe,r)}var It=null,li=!1,Ha=!1;function Il(e){It===null?It=[e]:It.push(e)}function tm(e){li=!0,Il(e)}function Gt(){if(!Ha&&It!==null){Ha=!0;var e=0,n=oe;try{var r=It;for(oe=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}It=null,li=!1}catch(a){throw It!==null&&(It=It.slice(e+1)),Ps(ca,Gt),a}finally{oe=n,Ha=!1}}return null}var Pn=[],Ln=0,di=null,ci=0,at=[],ot=0,on=null,Nt=1,Pt="";function sn(e,n){Pn[Ln++]=ci,Pn[Ln++]=di,di=e,ci=n}function Nl(e,n,r){at[ot++]=Nt,at[ot++]=Pt,at[ot++]=on,on=e;var i=Nt;e=Pt;var a=32-mt(i)-1;i&=~(1<<a),r+=1;var o=32-mt(n)+a;if(30<o){var s=a-a%5;o=(i&(1<<s)-1).toString(32),i>>=s,a-=s,Nt=1<<32-mt(n)+a|r<<a|i,Pt=o+e}else Nt=1<<o|r<<a|i,Pt=e}function qa(e){e.return!==null&&(sn(e,1),Nl(e,1,0))}function Fa(e){for(;e===di;)di=Pn[--Ln],Pn[Ln]=null,ci=Pn[--Ln],Pn[Ln]=null;for(;e===on;)on=at[--ot],at[ot]=null,Pt=at[--ot],at[ot]=null,Nt=at[--ot],at[ot]=null}var Ze=null,et=null,pe=!1,ft=null;function Pl(e,n){var r=ct(5,null,null,0);r.elementType="DELETED",r.stateNode=n,r.return=e,n=e.deletions,n===null?(e.deletions=[r],e.flags|=16):n.push(r)}function Ll(e,n){switch(e.tag){case 5:var r=e.type;return n=n.nodeType!==1||r.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ze=e,et=qt(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ze=e,et=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(r=on!==null?{id:Nt,overflow:Pt}:null,e.memoizedState={dehydrated:n,treeContext:r,retryLane:1073741824},r=ct(18,null,null,0),r.stateNode=n,r.return=e,e.child=r,Ze=e,et=null,!0):!1;default:return!1}}function Ua(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ga(e){if(pe){var n=et;if(n){var r=n;if(!Ll(e,n)){if(Ua(e))throw Error(u(418));n=qt(r.nextSibling);var i=Ze;n&&Ll(e,n)?Pl(i,r):(e.flags=e.flags&-4097|2,pe=!1,Ze=e)}}else{if(Ua(e))throw Error(u(418));e.flags=e.flags&-4097|2,pe=!1,Ze=e}}}function zl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function ui(e){if(e!==Ze)return!1;if(!pe)return zl(e),pe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ma(e.type,e.memoizedProps)),n&&(n=et)){if(Ua(e))throw Dl(),Error(u(418));for(;n;)Pl(e,n),n=qt(n.nextSibling)}if(zl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(n===0){et=qt(e.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++}e=e.nextSibling}et=null}}else et=Ze?qt(e.stateNode.nextSibling):null;return!0}function Dl(){for(var e=et;e;)e=qt(e.nextSibling)}function zn(){et=Ze=null,pe=!1}function Qa(e){ft===null?ft=[e]:ft.push(e)}var nm=Se.ReactCurrentBatchConfig;function fr(e,n,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(u(309));var i=r.stateNode}if(!i)throw Error(u(147,e));var a=i,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(s){var c=a.refs;s===null?delete c[o]:c[o]=s},n._stringRef=o,n)}if(typeof e!="string")throw Error(u(284));if(!r._owner)throw Error(u(290,e))}return e}function mi(e,n){throw e=Object.prototype.toString.call(n),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Bl(e){var n=e._init;return n(e._payload)}function Al(e){function n(g,p){if(e){var h=g.deletions;h===null?(g.deletions=[p],g.flags|=16):h.push(p)}}function r(g,p){if(!e)return null;for(;p!==null;)n(g,p),p=p.sibling;return null}function i(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function a(g,p){return g=en(g,p),g.index=0,g.sibling=null,g}function o(g,p,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<p?(g.flags|=2,p):h):(g.flags|=2,p)):(g.flags|=1048576,p)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function c(g,p,h,x){return p===null||p.tag!==6?(p=jo(h,g.mode,x),p.return=g,p):(p=a(p,h),p.return=g,p)}function m(g,p,h,x){var A=h.type;return A===Ee?S(g,p,h.props.children,x,h.key):p!==null&&(p.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Be&&Bl(A)===p.type)?(x=a(p,h.props),x.ref=fr(g,p,h),x.return=g,x):(x=Ri(h.type,h.key,h.props,null,g.mode,x),x.ref=fr(g,p,h),x.return=g,x)}function v(g,p,h,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=Vo(h,g.mode,x),p.return=g,p):(p=a(p,h.children||[]),p.return=g,p)}function S(g,p,h,x,A){return p===null||p.tag!==7?(p=gn(h,g.mode,x,A),p.return=g,p):(p=a(p,h),p.return=g,p)}function k(g,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=jo(""+p,g.mode,h),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Le:return h=Ri(p.type,p.key,p.props,null,g.mode,h),h.ref=fr(g,null,p),h.return=g,h;case Ce:return p=Vo(p,g.mode,h),p.return=g,p;case Be:var x=p._init;return k(g,x(p._payload),h)}if(qn(p)||$(p))return p=gn(p,g.mode,h,null),p.return=g,p;mi(g,p)}return null}function b(g,p,h,x){var A=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return A!==null?null:c(g,p,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Le:return h.key===A?m(g,p,h,x):null;case Ce:return h.key===A?v(g,p,h,x):null;case Be:return A=h._init,b(g,p,A(h._payload),x)}if(qn(h)||$(h))return A!==null?null:S(g,p,h,x,null);mi(g,h)}return null}function N(g,p,h,x,A){if(typeof x=="string"&&x!==""||typeof x=="number")return g=g.get(h)||null,c(p,g,""+x,A);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Le:return g=g.get(x.key===null?h:x.key)||null,m(p,g,x,A);case Ce:return g=g.get(x.key===null?h:x.key)||null,v(p,g,x,A);case Be:var j=x._init;return N(g,p,h,j(x._payload),A)}if(qn(x)||$(x))return g=g.get(h)||null,S(p,g,x,A,null);mi(p,x)}return null}function z(g,p,h,x){for(var A=null,j=null,V=p,H=p=0,Pe=null;V!==null&&H<h.length;H++){V.index>H?(Pe=V,V=null):Pe=V.sibling;var ne=b(g,V,h[H],x);if(ne===null){V===null&&(V=Pe);break}e&&V&&ne.alternate===null&&n(g,V),p=o(ne,p,H),j===null?A=ne:j.sibling=ne,j=ne,V=Pe}if(H===h.length)return r(g,V),pe&&sn(g,H),A;if(V===null){for(;H<h.length;H++)V=k(g,h[H],x),V!==null&&(p=o(V,p,H),j===null?A=V:j.sibling=V,j=V);return pe&&sn(g,H),A}for(V=i(g,V);H<h.length;H++)Pe=N(V,g,H,h[H],x),Pe!==null&&(e&&Pe.alternate!==null&&V.delete(Pe.key===null?H:Pe.key),p=o(Pe,p,H),j===null?A=Pe:j.sibling=Pe,j=Pe);return e&&V.forEach(function(tn){return n(g,tn)}),pe&&sn(g,H),A}function D(g,p,h,x){var A=$(h);if(typeof A!="function")throw Error(u(150));if(h=A.call(h),h==null)throw Error(u(151));for(var j=A=null,V=p,H=p=0,Pe=null,ne=h.next();V!==null&&!ne.done;H++,ne=h.next()){V.index>H?(Pe=V,V=null):Pe=V.sibling;var tn=b(g,V,ne.value,x);if(tn===null){V===null&&(V=Pe);break}e&&V&&tn.alternate===null&&n(g,V),p=o(tn,p,H),j===null?A=tn:j.sibling=tn,j=tn,V=Pe}if(ne.done)return r(g,V),pe&&sn(g,H),A;if(V===null){for(;!ne.done;H++,ne=h.next())ne=k(g,ne.value,x),ne!==null&&(p=o(ne,p,H),j===null?A=ne:j.sibling=ne,j=ne);return pe&&sn(g,H),A}for(V=i(g,V);!ne.done;H++,ne=h.next())ne=N(V,g,H,ne.value,x),ne!==null&&(e&&ne.alternate!==null&&V.delete(ne.key===null?H:ne.key),p=o(ne,p,H),j===null?A=ne:j.sibling=ne,j=ne);return e&&V.forEach(function(Am){return n(g,Am)}),pe&&sn(g,H),A}function _e(g,p,h,x){if(typeof h=="object"&&h!==null&&h.type===Ee&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Le:e:{for(var A=h.key,j=p;j!==null;){if(j.key===A){if(A=h.type,A===Ee){if(j.tag===7){r(g,j.sibling),p=a(j,h.props.children),p.return=g,g=p;break e}}else if(j.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Be&&Bl(A)===j.type){r(g,j.sibling),p=a(j,h.props),p.ref=fr(g,j,h),p.return=g,g=p;break e}r(g,j);break}else n(g,j);j=j.sibling}h.type===Ee?(p=gn(h.props.children,g.mode,x,h.key),p.return=g,g=p):(x=Ri(h.type,h.key,h.props,null,g.mode,x),x.ref=fr(g,p,h),x.return=g,g=x)}return s(g);case Ce:e:{for(j=h.key;p!==null;){if(p.key===j)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){r(g,p.sibling),p=a(p,h.children||[]),p.return=g,g=p;break e}else{r(g,p);break}else n(g,p);p=p.sibling}p=Vo(h,g.mode,x),p.return=g,g=p}return s(g);case Be:return j=h._init,_e(g,p,j(h._payload),x)}if(qn(h))return z(g,p,h,x);if($(h))return D(g,p,h,x);mi(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(r(g,p.sibling),p=a(p,h),p.return=g,g=p):(r(g,p),p=jo(h,g.mode,x),p.return=g,g=p),s(g)):r(g,p)}return _e}var Dn=Al(!0),Rl=Al(!1),pi=Ft(null),fi=null,Bn=null,Wa=null;function Ja(){Wa=Bn=fi=null}function Ka(e){var n=pi.current;ce(pi),e._currentValue=n}function Ya(e,n,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===r)break;e=e.return}}function An(e,n){fi=e,Wa=Bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Ue=!0),e.firstContext=null)}function st(e){var n=e._currentValue;if(Wa!==e)if(e={context:e,memoizedValue:n,next:null},Bn===null){if(fi===null)throw Error(u(308));Bn=e,fi.dependencies={lanes:0,firstContext:e}}else Bn=Bn.next=e;return n}var ln=null;function Xa(e){ln===null?ln=[e]:ln.push(e)}function Ml(e,n,r,i){var a=n.interleaved;return a===null?(r.next=r,Xa(n)):(r.next=a.next,a.next=r),n.interleaved=r,Lt(e,i)}function Lt(e,n){e.lanes|=n;var r=e.alternate;for(r!==null&&(r.lanes|=n),r=e,e=e.return;e!==null;)e.childLanes|=n,r=e.alternate,r!==null&&(r.childLanes|=n),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Qt=!1;function Za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ol(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zt(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Wt(e,n,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Z&2)!==0){var a=i.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),i.pending=n,Lt(e,r)}return a=i.interleaved,a===null?(n.next=n,Xa(i)):(n.next=a.next,a.next=n),i.interleaved=n,Lt(e,r)}function gi(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194240)!==0)){var i=n.lanes;i&=e.pendingLanes,r|=i,n.lanes=r,pa(e,r)}}function jl(e,n){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var a=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?a=o=s:o=o.next=s,r=r.next}while(r!==null);o===null?a=o=n:o=o.next=n}else a=o=n;r={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}function hi(e,n,r,i){var a=e.updateQueue;Qt=!1;var o=a.firstBaseUpdate,s=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var m=c,v=m.next;m.next=null,s===null?o=v:s.next=v,s=m;var S=e.alternate;S!==null&&(S=S.updateQueue,c=S.lastBaseUpdate,c!==s&&(c===null?S.firstBaseUpdate=v:c.next=v,S.lastBaseUpdate=m))}if(o!==null){var k=a.baseState;s=0,S=v=m=null,c=o;do{var b=c.lane,N=c.eventTime;if((i&b)===b){S!==null&&(S=S.next={eventTime:N,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var z=e,D=c;switch(b=n,N=r,D.tag){case 1:if(z=D.payload,typeof z=="function"){k=z.call(N,k,b);break e}k=z;break e;case 3:z.flags=z.flags&-65537|128;case 0:if(z=D.payload,b=typeof z=="function"?z.call(N,k,b):z,b==null)break e;k=_({},k,b);break e;case 2:Qt=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,b=a.effects,b===null?a.effects=[c]:b.push(c))}else N={eventTime:N,lane:b,tag:c.tag,payload:c.payload,callback:c.callback,next:null},S===null?(v=S=N,m=k):S=S.next=N,s|=b;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;b=c,c=b.next,b.next=null,a.lastBaseUpdate=b,a.shared.pending=null}}while(!0);if(S===null&&(m=k),a.baseState=m,a.firstBaseUpdate=v,a.lastBaseUpdate=S,n=a.shared.interleaved,n!==null){a=n;do s|=a.lane,a=a.next;while(a!==n)}else o===null&&(a.shared.lanes=0);un|=s,e.lanes=s,e.memoizedState=k}}function Vl(e,n,r){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var i=e[n],a=i.callback;if(a!==null){if(i.callback=null,i=r,typeof a!="function")throw Error(u(191,a));a.call(i)}}}var gr={},St=Ft(gr),hr=Ft(gr),vr=Ft(gr);function dn(e){if(e===gr)throw Error(u(174));return e}function eo(e,n){switch(se(vr,n),se(hr,e),se(St,gr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ta(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ta(n,e)}ce(St),se(St,n)}function Rn(){ce(St),ce(hr),ce(vr)}function $l(e){dn(vr.current);var n=dn(St.current),r=ta(n,e.type);n!==r&&(se(hr,e),se(St,r))}function to(e){hr.current===e&&(ce(St),ce(hr))}var fe=Ft(0);function vi(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var no=[];function ro(){for(var e=0;e<no.length;e++)no[e]._workInProgressVersionPrimary=null;no.length=0}var yi=Se.ReactCurrentDispatcher,io=Se.ReactCurrentBatchConfig,cn=0,ge=null,xe=null,Ie=null,_i=!1,yr=!1,_r=0,rm=0;function Re(){throw Error(u(321))}function ao(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!pt(e[r],n[r]))return!1;return!0}function oo(e,n,r,i,a,o){if(cn=o,ge=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,yi.current=e===null||e.memoizedState===null?sm:lm,e=r(i,a),yr){o=0;do{if(yr=!1,_r=0,25<=o)throw Error(u(301));o+=1,Ie=xe=null,n.updateQueue=null,yi.current=dm,e=r(i,a)}while(yr)}if(yi.current=Si,n=xe!==null&&xe.next!==null,cn=0,Ie=xe=ge=null,_i=!1,n)throw Error(u(300));return e}function so(){var e=_r!==0;return _r=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?ge.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function lt(){if(xe===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var n=Ie===null?ge.memoizedState:Ie.next;if(n!==null)Ie=n,xe=e;else{if(e===null)throw Error(u(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ie===null?ge.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function wr(e,n){return typeof n=="function"?n(e):n}function lo(e){var n=lt(),r=n.queue;if(r===null)throw Error(u(311));r.lastRenderedReducer=e;var i=xe,a=i.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,r.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,m=null,v=o;do{var S=v.lane;if((cn&S)===S)m!==null&&(m=m.next={lane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),i=v.hasEagerState?v.eagerState:e(i,v.action);else{var k={lane:S,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null};m===null?(c=m=k,s=i):m=m.next=k,ge.lanes|=S,un|=S}v=v.next}while(v!==null&&v!==o);m===null?s=i:m.next=c,pt(i,n.memoizedState)||(Ue=!0),n.memoizedState=i,n.baseState=s,n.baseQueue=m,r.lastRenderedState=i}if(e=r.interleaved,e!==null){a=e;do o=a.lane,ge.lanes|=o,un|=o,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[n.memoizedState,r.dispatch]}function co(e){var n=lt(),r=n.queue;if(r===null)throw Error(u(311));r.lastRenderedReducer=e;var i=r.dispatch,a=r.pending,o=n.memoizedState;if(a!==null){r.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);pt(o,n.memoizedState)||(Ue=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),r.lastRenderedState=o}return[o,i]}function Hl(){}function ql(e,n){var r=ge,i=lt(),a=n(),o=!pt(i.memoizedState,a);if(o&&(i.memoizedState=a,Ue=!0),i=i.queue,uo(Gl.bind(null,r,i,e),[e]),i.getSnapshot!==n||o||Ie!==null&&Ie.memoizedState.tag&1){if(r.flags|=2048,br(9,Ul.bind(null,r,i,a,n),void 0,null),Ne===null)throw Error(u(349));(cn&30)!==0||Fl(r,n,a)}return a}function Fl(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=ge.updateQueue,n===null?(n={lastEffect:null,stores:null},ge.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function Ul(e,n,r,i){n.value=r,n.getSnapshot=i,Ql(n)&&Wl(e)}function Gl(e,n,r){return r(function(){Ql(n)&&Wl(e)})}function Ql(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!pt(e,r)}catch{return!0}}function Wl(e){var n=Lt(e,1);n!==null&&yt(n,e,1,-1)}function Jl(e){var n=kt();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wr,lastRenderedState:e},n.queue=e,e=e.dispatch=om.bind(null,ge,e),[n.memoizedState,e]}function br(e,n,r,i){return e={tag:e,create:n,destroy:r,deps:i,next:null},n=ge.updateQueue,n===null?(n={lastEffect:null,stores:null},ge.updateQueue=n,n.lastEffect=e.next=e):(r=n.lastEffect,r===null?n.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,n.lastEffect=e)),e}function Kl(){return lt().memoizedState}function wi(e,n,r,i){var a=kt();ge.flags|=e,a.memoizedState=br(1|n,r,void 0,i===void 0?null:i)}function bi(e,n,r,i){var a=lt();i=i===void 0?null:i;var o=void 0;if(xe!==null){var s=xe.memoizedState;if(o=s.destroy,i!==null&&ao(i,s.deps)){a.memoizedState=br(n,r,o,i);return}}ge.flags|=e,a.memoizedState=br(1|n,r,o,i)}function Yl(e,n){return wi(8390656,8,e,n)}function uo(e,n){return bi(2048,8,e,n)}function Xl(e,n){return bi(4,2,e,n)}function Zl(e,n){return bi(4,4,e,n)}function ed(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function td(e,n,r){return r=r!=null?r.concat([e]):null,bi(4,4,ed.bind(null,n,e),r)}function mo(){}function nd(e,n){var r=lt();n=n===void 0?null:n;var i=r.memoizedState;return i!==null&&n!==null&&ao(n,i[1])?i[0]:(r.memoizedState=[e,n],e)}function rd(e,n){var r=lt();n=n===void 0?null:n;var i=r.memoizedState;return i!==null&&n!==null&&ao(n,i[1])?i[0]:(e=e(),r.memoizedState=[e,n],e)}function id(e,n,r){return(cn&21)===0?(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=r):(pt(r,n)||(r=Bs(),ge.lanes|=r,un|=r,e.baseState=!0),n)}function im(e,n){var r=oe;oe=r!==0&&4>r?r:4,e(!0);var i=io.transition;io.transition={};try{e(!1),n()}finally{oe=r,io.transition=i}}function ad(){return lt().memoizedState}function am(e,n,r){var i=Xt(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},od(e))sd(n,r);else if(r=Ml(e,n,r,i),r!==null){var a=$e();yt(r,e,i,a),ld(r,n,i)}}function om(e,n,r){var i=Xt(e),a={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(od(e))sd(n,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var s=n.lastRenderedState,c=o(s,r);if(a.hasEagerState=!0,a.eagerState=c,pt(c,s)){var m=n.interleaved;m===null?(a.next=a,Xa(n)):(a.next=m.next,m.next=a),n.interleaved=a;return}}catch{}finally{}r=Ml(e,n,a,i),r!==null&&(a=$e(),yt(r,e,i,a),ld(r,n,i))}}function od(e){var n=e.alternate;return e===ge||n!==null&&n===ge}function sd(e,n){yr=_i=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function ld(e,n,r){if((r&4194240)!==0){var i=n.lanes;i&=e.pendingLanes,r|=i,n.lanes=r,pa(e,r)}}var Si={readContext:st,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},sm={readContext:st,useCallback:function(e,n){return kt().memoizedState=[e,n===void 0?null:n],e},useContext:st,useEffect:Yl,useImperativeHandle:function(e,n,r){return r=r!=null?r.concat([e]):null,wi(4194308,4,ed.bind(null,n,e),r)},useLayoutEffect:function(e,n){return wi(4194308,4,e,n)},useInsertionEffect:function(e,n){return wi(4,2,e,n)},useMemo:function(e,n){var r=kt();return n=n===void 0?null:n,e=e(),r.memoizedState=[e,n],e},useReducer:function(e,n,r){var i=kt();return n=r!==void 0?r(n):n,i.memoizedState=i.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=am.bind(null,ge,e),[i.memoizedState,e]},useRef:function(e){var n=kt();return e={current:e},n.memoizedState=e},useState:Jl,useDebugValue:mo,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=Jl(!1),n=e[0];return e=im.bind(null,e[1]),kt().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,r){var i=ge,a=kt();if(pe){if(r===void 0)throw Error(u(407));r=r()}else{if(r=n(),Ne===null)throw Error(u(349));(cn&30)!==0||Fl(i,n,r)}a.memoizedState=r;var o={value:r,getSnapshot:n};return a.queue=o,Yl(Gl.bind(null,i,o,e),[e]),i.flags|=2048,br(9,Ul.bind(null,i,o,r,n),void 0,null),r},useId:function(){var e=kt(),n=Ne.identifierPrefix;if(pe){var r=Pt,i=Nt;r=(i&~(1<<32-mt(i)-1)).toString(32)+r,n=":"+n+"R"+r,r=_r++,0<r&&(n+="H"+r.toString(32)),n+=":"}else r=rm++,n=":"+n+"r"+r.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},lm={readContext:st,useCallback:nd,useContext:st,useEffect:uo,useImperativeHandle:td,useInsertionEffect:Xl,useLayoutEffect:Zl,useMemo:rd,useReducer:lo,useRef:Kl,useState:function(){return lo(wr)},useDebugValue:mo,useDeferredValue:function(e){var n=lt();return id(n,xe.memoizedState,e)},useTransition:function(){var e=lo(wr)[0],n=lt().memoizedState;return[e,n]},useMutableSource:Hl,useSyncExternalStore:ql,useId:ad,unstable_isNewReconciler:!1},dm={readContext:st,useCallback:nd,useContext:st,useEffect:uo,useImperativeHandle:td,useInsertionEffect:Xl,useLayoutEffect:Zl,useMemo:rd,useReducer:co,useRef:Kl,useState:function(){return co(wr)},useDebugValue:mo,useDeferredValue:function(e){var n=lt();return xe===null?n.memoizedState=e:id(n,xe.memoizedState,e)},useTransition:function(){var e=co(wr)[0],n=lt().memoizedState;return[e,n]},useMutableSource:Hl,useSyncExternalStore:ql,useId:ad,unstable_isNewReconciler:!1};function gt(e,n){if(e&&e.defaultProps){n=_({},n),e=e.defaultProps;for(var r in e)n[r]===void 0&&(n[r]=e[r]);return n}return n}function po(e,n,r,i){n=e.memoizedState,r=r(i,n),r=r==null?n:_({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ki={isMounted:function(e){return(e=e._reactInternals)?nn(e)===e:!1},enqueueSetState:function(e,n,r){e=e._reactInternals;var i=$e(),a=Xt(e),o=zt(i,a);o.payload=n,r!=null&&(o.callback=r),n=Wt(e,o,a),n!==null&&(yt(n,e,a,i),gi(n,e,a))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var i=$e(),a=Xt(e),o=zt(i,a);o.tag=1,o.payload=n,r!=null&&(o.callback=r),n=Wt(e,o,a),n!==null&&(yt(n,e,a,i),gi(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=$e(),i=Xt(e),a=zt(r,i);a.tag=2,n!=null&&(a.callback=n),n=Wt(e,a,i),n!==null&&(yt(n,e,i,r),gi(n,e,i))}};function dd(e,n,r,i,a,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,s):n.prototype&&n.prototype.isPureReactComponent?!sr(r,i)||!sr(a,o):!0}function cd(e,n,r){var i=!1,a=Ut,o=n.contextType;return typeof o=="object"&&o!==null?o=st(o):(a=Fe(n)?an:Ae.current,i=n.contextTypes,o=(i=i!=null)?Nn(e,a):Ut),n=new n(r,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ki,e.stateNode=n,n._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),n}function ud(e,n,r,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,i),n.state!==e&&ki.enqueueReplaceState(n,n.state,null)}function fo(e,n,r,i){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},Za(e);var o=n.contextType;typeof o=="object"&&o!==null?a.context=st(o):(o=Fe(n)?an:Ae.current,a.context=Nn(e,o)),a.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(po(e,n,o,r),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&ki.enqueueReplaceState(a,a.state,null),hi(e,r,a,i),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Mn(e,n){try{var r="",i=n;do r+=Y(i),i=i.return;while(i);var a=r}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:a,digest:null}}function go(e,n,r){return{value:e,source:null,stack:r??null,digest:n??null}}function ho(e,n){try{console.error(n.value)}catch(r){setTimeout(function(){throw r})}}var cm=typeof WeakMap=="function"?WeakMap:Map;function md(e,n,r){r=zt(-1,r),r.tag=3,r.payload={element:null};var i=n.value;return r.callback=function(){Pi||(Pi=!0,Lo=i),ho(e,n)},r}function pd(e,n,r){r=zt(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var a=n.value;r.payload=function(){return i(a)},r.callback=function(){ho(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){ho(e,n),typeof i!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),r}function fd(e,n,r){var i=e.pingCache;if(i===null){i=e.pingCache=new cm;var a=new Set;i.set(n,a)}else a=i.get(n),a===void 0&&(a=new Set,i.set(n,a));a.has(r)||(a.add(r),e=xm.bind(null,e,n,r),n.then(e,e))}function gd(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function hd(e,n,r,i,a){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(n=zt(-1,1),n.tag=2,Wt(r,n,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var um=Se.ReactCurrentOwner,Ue=!1;function Ve(e,n,r,i){n.child=e===null?Rl(n,null,r,i):Dn(n,e.child,r,i)}function vd(e,n,r,i,a){r=r.render;var o=n.ref;return An(n,a),i=oo(e,n,r,i,o,a),r=so(),e!==null&&!Ue?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Dt(e,n,a)):(pe&&r&&qa(n),n.flags|=1,Ve(e,n,i,a),n.child)}function yd(e,n,r,i,a){if(e===null){var o=r.type;return typeof o=="function"&&!Oo(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(n.tag=15,n.type=o,_d(e,n,o,i,a)):(e=Ri(r.type,null,i,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,(e.lanes&a)===0){var s=o.memoizedProps;if(r=r.compare,r=r!==null?r:sr,r(s,i)&&e.ref===n.ref)return Dt(e,n,a)}return n.flags|=1,e=en(o,i),e.ref=n.ref,e.return=n,n.child=e}function _d(e,n,r,i,a){if(e!==null){var o=e.memoizedProps;if(sr(o,i)&&e.ref===n.ref)if(Ue=!1,n.pendingProps=i=o,(e.lanes&a)!==0)(e.flags&131072)!==0&&(Ue=!0);else return n.lanes=e.lanes,Dt(e,n,a)}return vo(e,n,r,i,a)}function wd(e,n,r){var i=n.pendingProps,a=i.children,o=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(jn,tt),tt|=r;else{if((r&1073741824)===0)return e=o!==null?o.baseLanes|r:r,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,se(jn,tt),tt|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:r,se(jn,tt),tt|=i}else o!==null?(i=o.baseLanes|r,n.memoizedState=null):i=r,se(jn,tt),tt|=i;return Ve(e,n,a,r),n.child}function bd(e,n){var r=n.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(n.flags|=512,n.flags|=2097152)}function vo(e,n,r,i,a){var o=Fe(r)?an:Ae.current;return o=Nn(n,o),An(n,a),r=oo(e,n,r,i,o,a),i=so(),e!==null&&!Ue?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Dt(e,n,a)):(pe&&i&&qa(n),n.flags|=1,Ve(e,n,r,a),n.child)}function Sd(e,n,r,i,a){if(Fe(r)){var o=!0;si(n)}else o=!1;if(An(n,a),n.stateNode===null)Ti(e,n),cd(n,r,i),fo(n,r,i,a),i=!0;else if(e===null){var s=n.stateNode,c=n.memoizedProps;s.props=c;var m=s.context,v=r.contextType;typeof v=="object"&&v!==null?v=st(v):(v=Fe(r)?an:Ae.current,v=Nn(n,v));var S=r.getDerivedStateFromProps,k=typeof S=="function"||typeof s.getSnapshotBeforeUpdate=="function";k||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==i||m!==v)&&ud(n,s,i,v),Qt=!1;var b=n.memoizedState;s.state=b,hi(n,i,s,a),m=n.memoizedState,c!==i||b!==m||qe.current||Qt?(typeof S=="function"&&(po(n,r,S,i),m=n.memoizedState),(c=Qt||dd(n,r,c,i,b,m,v))?(k||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=m),s.props=i,s.state=m,s.context=v,i=c):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{s=n.stateNode,Ol(e,n),c=n.memoizedProps,v=n.type===n.elementType?c:gt(n.type,c),s.props=v,k=n.pendingProps,b=s.context,m=r.contextType,typeof m=="object"&&m!==null?m=st(m):(m=Fe(r)?an:Ae.current,m=Nn(n,m));var N=r.getDerivedStateFromProps;(S=typeof N=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==k||b!==m)&&ud(n,s,i,m),Qt=!1,b=n.memoizedState,s.state=b,hi(n,i,s,a);var z=n.memoizedState;c!==k||b!==z||qe.current||Qt?(typeof N=="function"&&(po(n,r,N,i),z=n.memoizedState),(v=Qt||dd(n,r,v,i,b,z,m)||!1)?(S||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,z,m),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,z,m)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&b===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&b===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=z),s.props=i,s.state=z,s.context=m,i=v):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&b===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&b===e.memoizedState||(n.flags|=1024),i=!1)}return yo(e,n,r,i,o,a)}function yo(e,n,r,i,a,o){bd(e,n);var s=(n.flags&128)!==0;if(!i&&!s)return a&&El(n,r,!1),Dt(e,n,o);i=n.stateNode,um.current=n;var c=s&&typeof r.getDerivedStateFromError!="function"?null:i.render();return n.flags|=1,e!==null&&s?(n.child=Dn(n,e.child,null,o),n.child=Dn(n,null,c,o)):Ve(e,n,c,o),n.memoizedState=i.state,a&&El(n,r,!0),n.child}function kd(e){var n=e.stateNode;n.pendingContext?Tl(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Tl(e,n.context,!1),eo(e,n.containerInfo)}function xd(e,n,r,i,a){return zn(),Qa(a),n.flags|=256,Ve(e,n,r,i),n.child}var _o={dehydrated:null,treeContext:null,retryLane:0};function wo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Td(e,n,r){var i=n.pendingProps,a=fe.current,o=!1,s=(n.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(a&2)!==0),c?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),se(fe,a&1),e===null)return Ga(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(s=i.children,e=i.fallback,o?(i=n.mode,o=n.child,s={mode:"hidden",children:s},(i&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Mi(s,i,0,null),e=gn(e,i,r,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=wo(r),n.memoizedState=_o,e):bo(n,s));if(a=e.memoizedState,a!==null&&(c=a.dehydrated,c!==null))return mm(e,n,s,i,c,a,r);if(o){o=i.fallback,s=n.mode,a=e.child,c=a.sibling;var m={mode:"hidden",children:i.children};return(s&1)===0&&n.child!==a?(i=n.child,i.childLanes=0,i.pendingProps=m,n.deletions=null):(i=en(a,m),i.subtreeFlags=a.subtreeFlags&14680064),c!==null?o=en(c,o):(o=gn(o,s,r,null),o.flags|=2),o.return=n,i.return=n,i.sibling=o,n.child=i,i=o,o=n.child,s=e.child.memoizedState,s=s===null?wo(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~r,n.memoizedState=_o,i}return o=e.child,e=o.sibling,i=en(o,{mode:"visible",children:i.children}),(n.mode&1)===0&&(i.lanes=r),i.return=n,i.sibling=null,e!==null&&(r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)),n.child=i,n.memoizedState=null,i}function bo(e,n){return n=Mi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function xi(e,n,r,i){return i!==null&&Qa(i),Dn(n,e.child,null,r),e=bo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function mm(e,n,r,i,a,o,s){if(r)return n.flags&256?(n.flags&=-257,i=go(Error(u(422))),xi(e,n,s,i)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=i.fallback,a=n.mode,i=Mi({mode:"visible",children:i.children},a,0,null),o=gn(o,a,s,null),o.flags|=2,i.return=n,o.return=n,i.sibling=o,n.child=i,(n.mode&1)!==0&&Dn(n,e.child,null,s),n.child.memoizedState=wo(s),n.memoizedState=_o,o);if((n.mode&1)===0)return xi(e,n,s,null);if(a.data==="$!"){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(u(419)),i=go(o,i,void 0),xi(e,n,s,i)}if(c=(s&e.childLanes)!==0,Ue||c){if(i=Ne,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))!==0?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Lt(e,a),yt(i,e,a,-1))}return Mo(),i=go(Error(u(421))),xi(e,n,s,i)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=Tm.bind(null,e),a._reactRetry=n,null):(e=o.treeContext,et=qt(a.nextSibling),Ze=n,pe=!0,ft=null,e!==null&&(at[ot++]=Nt,at[ot++]=Pt,at[ot++]=on,Nt=e.id,Pt=e.overflow,on=n),n=bo(n,i.children),n.flags|=4096,n)}function Cd(e,n,r){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),Ya(e.return,n,r)}function So(e,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:a}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=r,o.tailMode=a)}function Ed(e,n,r){var i=n.pendingProps,a=i.revealOrder,o=i.tail;if(Ve(e,n,i.children,r),i=fe.current,(i&2)!==0)i=i&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cd(e,r,n);else if(e.tag===19)Cd(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(se(fe,i),(n.mode&1)===0)n.memoizedState=null;else switch(a){case"forwards":for(r=n.child,a=null;r!==null;)e=r.alternate,e!==null&&vi(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=n.child,n.child=null):(a=r.sibling,r.sibling=null),So(n,!1,a,r,o);break;case"backwards":for(r=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&vi(e)===null){n.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}So(n,!0,r,null,o);break;case"together":So(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ti(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Dt(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),un|=n.lanes,(r&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(u(153));if(n.child!==null){for(e=n.child,r=en(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=en(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function pm(e,n,r){switch(n.tag){case 3:kd(n),zn();break;case 5:$l(n);break;case 1:Fe(n.type)&&si(n);break;case 4:eo(n,n.stateNode.containerInfo);break;case 10:var i=n.type._context,a=n.memoizedProps.value;se(pi,i._currentValue),i._currentValue=a;break;case 13:if(i=n.memoizedState,i!==null)return i.dehydrated!==null?(se(fe,fe.current&1),n.flags|=128,null):(r&n.child.childLanes)!==0?Td(e,n,r):(se(fe,fe.current&1),e=Dt(e,n,r),e!==null?e.sibling:null);se(fe,fe.current&1);break;case 19:if(i=(r&n.childLanes)!==0,(e.flags&128)!==0){if(i)return Ed(e,n,r);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),se(fe,fe.current),i)break;return null;case 22:case 23:return n.lanes=0,wd(e,n,r)}return Dt(e,n,r)}var Id,ko,Nd,Pd;Id=function(e,n){for(var r=n.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},ko=function(){},Nd=function(e,n,r,i){var a=e.memoizedProps;if(a!==i){e=n.stateNode,dn(St.current);var o=null;switch(r){case"input":a=Yi(e,a),i=Yi(e,i),o=[];break;case"select":a=_({},a,{value:void 0}),i=_({},i,{value:void 0}),o=[];break;case"textarea":a=ea(e,a),i=ea(e,i),o=[];break;default:typeof a.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=ii)}na(r,i);var s;r=null;for(v in a)if(!i.hasOwnProperty(v)&&a.hasOwnProperty(v)&&a[v]!=null)if(v==="style"){var c=a[v];for(s in c)c.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else v!=="dangerouslySetInnerHTML"&&v!=="children"&&v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(T.hasOwnProperty(v)?o||(o=[]):(o=o||[]).push(v,null));for(v in i){var m=i[v];if(c=a!=null?a[v]:void 0,i.hasOwnProperty(v)&&m!==c&&(m!=null||c!=null))if(v==="style")if(c){for(s in c)!c.hasOwnProperty(s)||m&&m.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in m)m.hasOwnProperty(s)&&c[s]!==m[s]&&(r||(r={}),r[s]=m[s])}else r||(o||(o=[]),o.push(v,r)),r=m;else v==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,c=c?c.__html:void 0,m!=null&&c!==m&&(o=o||[]).push(v,m)):v==="children"?typeof m!="string"&&typeof m!="number"||(o=o||[]).push(v,""+m):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&(T.hasOwnProperty(v)?(m!=null&&v==="onScroll"&&de("scroll",e),o||c===m||(o=[])):(o=o||[]).push(v,m))}r&&(o=o||[]).push("style",r);var v=o;(n.updateQueue=v)&&(n.flags|=4)}},Pd=function(e,n,r,i){r!==i&&(n.flags|=4)};function Sr(e,n){if(!pe)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Me(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(n)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,i|=a.subtreeFlags&14680064,i|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=r,n}function fm(e,n,r){var i=n.pendingProps;switch(Fa(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(n),null;case 1:return Fe(n.type)&&oi(),Me(n),null;case 3:return i=n.stateNode,Rn(),ce(qe),ce(Ae),ro(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(ui(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ft!==null&&(Bo(ft),ft=null))),ko(e,n),Me(n),null;case 5:to(n);var a=dn(vr.current);if(r=n.type,e!==null&&n.stateNode!=null)Nd(e,n,r,i,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!i){if(n.stateNode===null)throw Error(u(166));return Me(n),null}if(e=dn(St.current),ui(n)){i=n.stateNode,r=n.type;var o=n.memoizedProps;switch(i[bt]=n,i[mr]=o,e=(n.mode&1)!==0,r){case"dialog":de("cancel",i),de("close",i);break;case"iframe":case"object":case"embed":de("load",i);break;case"video":case"audio":for(a=0;a<dr.length;a++)de(dr[a],i);break;case"source":de("error",i);break;case"img":case"image":case"link":de("error",i),de("load",i);break;case"details":de("toggle",i);break;case"input":cs(i,o),de("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},de("invalid",i);break;case"textarea":ps(i,o),de("invalid",i)}na(r,o),a=null;for(var s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="children"?typeof c=="string"?i.textContent!==c&&(o.suppressHydrationWarning!==!0&&ri(i.textContent,c,e),a=["children",c]):typeof c=="number"&&i.textContent!==""+c&&(o.suppressHydrationWarning!==!0&&ri(i.textContent,c,e),a=["children",""+c]):T.hasOwnProperty(s)&&c!=null&&s==="onScroll"&&de("scroll",i)}switch(r){case"input":Br(i),ms(i,o,!0);break;case"textarea":Br(i),gs(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=ii)}i=a,n.updateQueue=i,i!==null&&(n.flags|=4)}else{s=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hs(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=s.createElement(r,{is:i.is}):(e=s.createElement(r),r==="select"&&(s=e,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):e=s.createElementNS(e,r),e[bt]=n,e[mr]=i,Id(e,n,!1,!1),n.stateNode=e;e:{switch(s=ra(r,i),r){case"dialog":de("cancel",e),de("close",e),a=i;break;case"iframe":case"object":case"embed":de("load",e),a=i;break;case"video":case"audio":for(a=0;a<dr.length;a++)de(dr[a],e);a=i;break;case"source":de("error",e),a=i;break;case"img":case"image":case"link":de("error",e),de("load",e),a=i;break;case"details":de("toggle",e),a=i;break;case"input":cs(e,i),a=Yi(e,i),de("invalid",e);break;case"option":a=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},a=_({},i,{value:void 0}),de("invalid",e);break;case"textarea":ps(e,i),a=ea(e,i),de("invalid",e);break;default:a=i}na(r,a),c=a;for(o in c)if(c.hasOwnProperty(o)){var m=c[o];o==="style"?_s(e,m):o==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&vs(e,m)):o==="children"?typeof m=="string"?(r!=="textarea"||m!=="")&&Fn(e,m):typeof m=="number"&&Fn(e,""+m):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(T.hasOwnProperty(o)?m!=null&&o==="onScroll"&&de("scroll",e):m!=null&&be(e,o,m,s))}switch(r){case"input":Br(e),ms(e,i,!1);break;case"textarea":Br(e),gs(e);break;case"option":i.value!=null&&e.setAttribute("value",""+ae(i.value));break;case"select":e.multiple=!!i.multiple,o=i.value,o!=null?vn(e,!!i.multiple,o,!1):i.defaultValue!=null&&vn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ii)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Me(n),null;case 6:if(e&&n.stateNode!=null)Pd(e,n,e.memoizedProps,i);else{if(typeof i!="string"&&n.stateNode===null)throw Error(u(166));if(r=dn(vr.current),dn(St.current),ui(n)){if(i=n.stateNode,r=n.memoizedProps,i[bt]=n,(o=i.nodeValue!==r)&&(e=Ze,e!==null))switch(e.tag){case 3:ri(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ri(i.nodeValue,r,(e.mode&1)!==0)}o&&(n.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[bt]=n,n.stateNode=i}return Me(n),null;case 13:if(ce(fe),i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pe&&et!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Dl(),zn(),n.flags|=98560,o=!1;else if(o=ui(n),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(u(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(u(317));o[bt]=n}else zn(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Me(n),o=!1}else ft!==null&&(Bo(ft),ft=null),o=!0;if(!o)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=r,n):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(fe.current&1)!==0?Te===0&&(Te=3):Mo())),n.updateQueue!==null&&(n.flags|=4),Me(n),null);case 4:return Rn(),ko(e,n),e===null&&cr(n.stateNode.containerInfo),Me(n),null;case 10:return Ka(n.type._context),Me(n),null;case 17:return Fe(n.type)&&oi(),Me(n),null;case 19:if(ce(fe),o=n.memoizedState,o===null)return Me(n),null;if(i=(n.flags&128)!==0,s=o.rendering,s===null)if(i)Sr(o,!1);else{if(Te!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(s=vi(e),s!==null){for(n.flags|=128,Sr(o,!1),i=s.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),n.subtreeFlags=0,i=r,r=n.child;r!==null;)o=r,e=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return se(fe,fe.current&1|2),n.child}e=e.sibling}o.tail!==null&&ye()>Vn&&(n.flags|=128,i=!0,Sr(o,!1),n.lanes=4194304)}else{if(!i)if(e=vi(s),e!==null){if(n.flags|=128,i=!0,r=e.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),Sr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!pe)return Me(n),null}else 2*ye()-o.renderingStartTime>Vn&&r!==1073741824&&(n.flags|=128,i=!0,Sr(o,!1),n.lanes=4194304);o.isBackwards?(s.sibling=n.child,n.child=s):(r=o.last,r!==null?r.sibling=s:n.child=s,o.last=s)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=ye(),n.sibling=null,r=fe.current,se(fe,i?r&1|2:r&1),n):(Me(n),null);case 22:case 23:return Ro(),i=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(n.flags|=8192),i&&(n.mode&1)!==0?(tt&1073741824)!==0&&(Me(n),n.subtreeFlags&6&&(n.flags|=8192)):Me(n),null;case 24:return null;case 25:return null}throw Error(u(156,n.tag))}function gm(e,n){switch(Fa(n),n.tag){case 1:return Fe(n.type)&&oi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Rn(),ce(qe),ce(Ae),ro(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return to(n),null;case 13:if(ce(fe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(u(340));zn()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ce(fe),null;case 4:return Rn(),null;case 10:return Ka(n.type._context),null;case 22:case 23:return Ro(),null;case 24:return null;default:return null}}var Ci=!1,Oe=!1,hm=typeof WeakSet=="function"?WeakSet:Set,P=null;function On(e,n){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){he(e,n,i)}else r.current=null}function xo(e,n,r){try{r()}catch(i){he(e,n,i)}}var Ld=!1;function vm(e,n){if(Aa=Gr,e=dl(),Ea(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var s=0,c=-1,m=-1,v=0,S=0,k=e,b=null;t:for(;;){for(var N;k!==r||a!==0&&k.nodeType!==3||(c=s+a),k!==o||i!==0&&k.nodeType!==3||(m=s+i),k.nodeType===3&&(s+=k.nodeValue.length),(N=k.firstChild)!==null;)b=k,k=N;for(;;){if(k===e)break t;if(b===r&&++v===a&&(c=s),b===o&&++S===i&&(m=s),(N=k.nextSibling)!==null)break;k=b,b=k.parentNode}k=N}r=c===-1||m===-1?null:{start:c,end:m}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ra={focusedElem:e,selectionRange:r},Gr=!1,P=n;P!==null;)if(n=P,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,P=e;else for(;P!==null;){n=P;try{var z=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(z!==null){var D=z.memoizedProps,_e=z.memoizedState,g=n.stateNode,p=g.getSnapshotBeforeUpdate(n.elementType===n.type?D:gt(n.type,D),_e);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(x){he(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,P=e;break}P=n.return}return z=Ld,Ld=!1,z}function kr(e,n,r){var i=n.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&xo(n,r,o)}a=a.next}while(a!==i)}}function Ei(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==n)}}function To(e){var n=e.ref;if(n!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof n=="function"?n(e):n.current=e}}function zd(e){var n=e.alternate;n!==null&&(e.alternate=null,zd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[bt],delete n[mr],delete n[Va],delete n[Zu],delete n[em])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dd(e){return e.tag===5||e.tag===3||e.tag===4}function Bd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Co(e,n,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?r.nodeType===8?r.parentNode.insertBefore(e,n):r.insertBefore(e,n):(r.nodeType===8?(n=r.parentNode,n.insertBefore(e,r)):(n=r,n.appendChild(e)),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=ii));else if(i!==4&&(e=e.child,e!==null))for(Co(e,n,r),e=e.sibling;e!==null;)Co(e,n,r),e=e.sibling}function Eo(e,n,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Eo(e,n,r),e=e.sibling;e!==null;)Eo(e,n,r),e=e.sibling}var ze=null,ht=!1;function Jt(e,n,r){for(r=r.child;r!==null;)Ad(e,n,r),r=r.sibling}function Ad(e,n,r){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Vr,r)}catch{}switch(r.tag){case 5:Oe||On(r,n);case 6:var i=ze,a=ht;ze=null,Jt(e,n,r),ze=i,ht=a,ze!==null&&(ht?(e=ze,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ze.removeChild(r.stateNode));break;case 18:ze!==null&&(ht?(e=ze,r=r.stateNode,e.nodeType===8?ja(e.parentNode,r):e.nodeType===1&&ja(e,r),tr(e)):ja(ze,r.stateNode));break;case 4:i=ze,a=ht,ze=r.stateNode.containerInfo,ht=!0,Jt(e,n,r),ze=i,ht=a;break;case 0:case 11:case 14:case 15:if(!Oe&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){a=i=i.next;do{var o=a,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&xo(r,n,s),a=a.next}while(a!==i)}Jt(e,n,r);break;case 1:if(!Oe&&(On(r,n),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(c){he(r,n,c)}Jt(e,n,r);break;case 21:Jt(e,n,r);break;case 22:r.mode&1?(Oe=(i=Oe)||r.memoizedState!==null,Jt(e,n,r),Oe=i):Jt(e,n,r);break;default:Jt(e,n,r)}}function Rd(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new hm),n.forEach(function(i){var a=Cm.bind(null,e,i);r.has(i)||(r.add(i),i.then(a,a))})}}function vt(e,n){var r=n.deletions;if(r!==null)for(var i=0;i<r.length;i++){var a=r[i];try{var o=e,s=n,c=s;e:for(;c!==null;){switch(c.tag){case 5:ze=c.stateNode,ht=!1;break e;case 3:ze=c.stateNode.containerInfo,ht=!0;break e;case 4:ze=c.stateNode.containerInfo,ht=!0;break e}c=c.return}if(ze===null)throw Error(u(160));Ad(o,s,a),ze=null,ht=!1;var m=a.alternate;m!==null&&(m.return=null),a.return=null}catch(v){he(a,n,v)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Md(n,e),n=n.sibling}function Md(e,n){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vt(n,e),xt(e),i&4){try{kr(3,e,e.return),Ei(3,e)}catch(D){he(e,e.return,D)}try{kr(5,e,e.return)}catch(D){he(e,e.return,D)}}break;case 1:vt(n,e),xt(e),i&512&&r!==null&&On(r,r.return);break;case 5:if(vt(n,e),xt(e),i&512&&r!==null&&On(r,r.return),e.flags&32){var a=e.stateNode;try{Fn(a,"")}catch(D){he(e,e.return,D)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=r!==null?r.memoizedProps:o,c=e.type,m=e.updateQueue;if(e.updateQueue=null,m!==null)try{c==="input"&&o.type==="radio"&&o.name!=null&&us(a,o),ra(c,s);var v=ra(c,o);for(s=0;s<m.length;s+=2){var S=m[s],k=m[s+1];S==="style"?_s(a,k):S==="dangerouslySetInnerHTML"?vs(a,k):S==="children"?Fn(a,k):be(a,S,k,v)}switch(c){case"input":Xi(a,o);break;case"textarea":fs(a,o);break;case"select":var b=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var N=o.value;N!=null?vn(a,!!o.multiple,N,!1):b!==!!o.multiple&&(o.defaultValue!=null?vn(a,!!o.multiple,o.defaultValue,!0):vn(a,!!o.multiple,o.multiple?[]:"",!1))}a[mr]=o}catch(D){he(e,e.return,D)}}break;case 6:if(vt(n,e),xt(e),i&4){if(e.stateNode===null)throw Error(u(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(D){he(e,e.return,D)}}break;case 3:if(vt(n,e),xt(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{tr(n.containerInfo)}catch(D){he(e,e.return,D)}break;case 4:vt(n,e),xt(e);break;case 13:vt(n,e),xt(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(Po=ye())),i&4&&Rd(e);break;case 22:if(S=r!==null&&r.memoizedState!==null,e.mode&1?(Oe=(v=Oe)||S,vt(n,e),Oe=v):vt(n,e),xt(e),i&8192){if(v=e.memoizedState!==null,(e.stateNode.isHidden=v)&&!S&&(e.mode&1)!==0)for(P=e,S=e.child;S!==null;){for(k=P=S;P!==null;){switch(b=P,N=b.child,b.tag){case 0:case 11:case 14:case 15:kr(4,b,b.return);break;case 1:On(b,b.return);var z=b.stateNode;if(typeof z.componentWillUnmount=="function"){i=b,r=b.return;try{n=i,z.props=n.memoizedProps,z.state=n.memoizedState,z.componentWillUnmount()}catch(D){he(i,r,D)}}break;case 5:On(b,b.return);break;case 22:if(b.memoizedState!==null){Vd(k);continue}}N!==null?(N.return=b,P=N):Vd(k)}S=S.sibling}e:for(S=null,k=e;;){if(k.tag===5){if(S===null){S=k;try{a=k.stateNode,v?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(c=k.stateNode,m=k.memoizedProps.style,s=m!=null&&m.hasOwnProperty("display")?m.display:null,c.style.display=ys("display",s))}catch(D){he(e,e.return,D)}}}else if(k.tag===6){if(S===null)try{k.stateNode.nodeValue=v?"":k.memoizedProps}catch(D){he(e,e.return,D)}}else if((k.tag!==22&&k.tag!==23||k.memoizedState===null||k===e)&&k.child!==null){k.child.return=k,k=k.child;continue}if(k===e)break e;for(;k.sibling===null;){if(k.return===null||k.return===e)break e;S===k&&(S=null),k=k.return}S===k&&(S=null),k.sibling.return=k.return,k=k.sibling}}break;case 19:vt(n,e),xt(e),i&4&&Rd(e);break;case 21:break;default:vt(n,e),xt(e)}}function xt(e){var n=e.flags;if(n&2){try{e:{for(var r=e.return;r!==null;){if(Dd(r)){var i=r;break e}r=r.return}throw Error(u(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Fn(a,""),i.flags&=-33);var o=Bd(e);Eo(e,o,a);break;case 3:case 4:var s=i.stateNode.containerInfo,c=Bd(e);Co(e,c,s);break;default:throw Error(u(161))}}catch(m){he(e,e.return,m)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ym(e,n,r){P=e,Od(e)}function Od(e,n,r){for(var i=(e.mode&1)!==0;P!==null;){var a=P,o=a.child;if(a.tag===22&&i){var s=a.memoizedState!==null||Ci;if(!s){var c=a.alternate,m=c!==null&&c.memoizedState!==null||Oe;c=Ci;var v=Oe;if(Ci=s,(Oe=m)&&!v)for(P=a;P!==null;)s=P,m=s.child,s.tag===22&&s.memoizedState!==null?$d(a):m!==null?(m.return=s,P=m):$d(a);for(;o!==null;)P=o,Od(o),o=o.sibling;P=a,Ci=c,Oe=v}jd(e)}else(a.subtreeFlags&8772)!==0&&o!==null?(o.return=a,P=o):jd(e)}}function jd(e){for(;P!==null;){var n=P;if((n.flags&8772)!==0){var r=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Oe||Ei(5,n);break;case 1:var i=n.stateNode;if(n.flags&4&&!Oe)if(r===null)i.componentDidMount();else{var a=n.elementType===n.type?r.memoizedProps:gt(n.type,r.memoizedProps);i.componentDidUpdate(a,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Vl(n,o,i);break;case 3:var s=n.updateQueue;if(s!==null){if(r=null,n.child!==null)switch(n.child.tag){case 5:r=n.child.stateNode;break;case 1:r=n.child.stateNode}Vl(n,s,r)}break;case 5:var c=n.stateNode;if(r===null&&n.flags&4){r=c;var m=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&r.focus();break;case"img":m.src&&(r.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var v=n.alternate;if(v!==null){var S=v.memoizedState;if(S!==null){var k=S.dehydrated;k!==null&&tr(k)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}Oe||n.flags&512&&To(n)}catch(b){he(n,n.return,b)}}if(n===e){P=null;break}if(r=n.sibling,r!==null){r.return=n.return,P=r;break}P=n.return}}function Vd(e){for(;P!==null;){var n=P;if(n===e){P=null;break}var r=n.sibling;if(r!==null){r.return=n.return,P=r;break}P=n.return}}function $d(e){for(;P!==null;){var n=P;try{switch(n.tag){case 0:case 11:case 15:var r=n.return;try{Ei(4,n)}catch(m){he(n,r,m)}break;case 1:var i=n.stateNode;if(typeof i.componentDidMount=="function"){var a=n.return;try{i.componentDidMount()}catch(m){he(n,a,m)}}var o=n.return;try{To(n)}catch(m){he(n,o,m)}break;case 5:var s=n.return;try{To(n)}catch(m){he(n,s,m)}}}catch(m){he(n,n.return,m)}if(n===e){P=null;break}var c=n.sibling;if(c!==null){c.return=n.return,P=c;break}P=n.return}}var _m=Math.ceil,Ii=Se.ReactCurrentDispatcher,Io=Se.ReactCurrentOwner,dt=Se.ReactCurrentBatchConfig,Z=0,Ne=null,we=null,De=0,tt=0,jn=Ft(0),Te=0,xr=null,un=0,Ni=0,No=0,Tr=null,Ge=null,Po=0,Vn=1/0,Bt=null,Pi=!1,Lo=null,Kt=null,Li=!1,Yt=null,zi=0,Cr=0,zo=null,Di=-1,Bi=0;function $e(){return(Z&6)!==0?ye():Di!==-1?Di:Di=ye()}function Xt(e){return(e.mode&1)===0?1:(Z&2)!==0&&De!==0?De&-De:nm.transition!==null?(Bi===0&&(Bi=Bs()),Bi):(e=oe,e!==0||(e=window.event,e=e===void 0?16:qs(e.type)),e)}function yt(e,n,r,i){if(50<Cr)throw Cr=0,zo=null,Error(u(185));Kn(e,r,i),((Z&2)===0||e!==Ne)&&(e===Ne&&((Z&2)===0&&(Ni|=r),Te===4&&Zt(e,De)),Qe(e,i),r===1&&Z===0&&(n.mode&1)===0&&(Vn=ye()+500,li&&Gt()))}function Qe(e,n){var r=e.callbackNode;nu(e,n);var i=qr(e,e===Ne?De:0);if(i===0)r!==null&&Ls(r),e.callbackNode=null,e.callbackPriority=0;else if(n=i&-i,e.callbackPriority!==n){if(r!=null&&Ls(r),n===1)e.tag===0?tm(qd.bind(null,e)):Il(qd.bind(null,e)),Yu(function(){(Z&6)===0&&Gt()}),r=null;else{switch(As(i)){case 1:r=ca;break;case 4:r=zs;break;case 16:r=jr;break;case 536870912:r=Ds;break;default:r=jr}r=Yd(r,Hd.bind(null,e))}e.callbackPriority=n,e.callbackNode=r}}function Hd(e,n){if(Di=-1,Bi=0,(Z&6)!==0)throw Error(u(327));var r=e.callbackNode;if($n()&&e.callbackNode!==r)return null;var i=qr(e,e===Ne?De:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||n)n=Ai(e,i);else{n=i;var a=Z;Z|=2;var o=Ud();(Ne!==e||De!==n)&&(Bt=null,Vn=ye()+500,pn(e,n));do try{Sm();break}catch(c){Fd(e,c)}while(!0);Ja(),Ii.current=o,Z=a,we!==null?n=0:(Ne=null,De=0,n=Te)}if(n!==0){if(n===2&&(a=ua(e),a!==0&&(i=a,n=Do(e,a))),n===1)throw r=xr,pn(e,0),Zt(e,i),Qe(e,ye()),r;if(n===6)Zt(e,i);else{if(a=e.current.alternate,(i&30)===0&&!wm(a)&&(n=Ai(e,i),n===2&&(o=ua(e),o!==0&&(i=o,n=Do(e,o))),n===1))throw r=xr,pn(e,0),Zt(e,i),Qe(e,ye()),r;switch(e.finishedWork=a,e.finishedLanes=i,n){case 0:case 1:throw Error(u(345));case 2:fn(e,Ge,Bt);break;case 3:if(Zt(e,i),(i&130023424)===i&&(n=Po+500-ye(),10<n)){if(qr(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){$e(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Oa(fn.bind(null,e,Ge,Bt),n);break}fn(e,Ge,Bt);break;case 4:if(Zt(e,i),(i&4194240)===i)break;for(n=e.eventTimes,a=-1;0<i;){var s=31-mt(i);o=1<<s,s=n[s],s>a&&(a=s),i&=~o}if(i=a,i=ye()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*_m(i/1960))-i,10<i){e.timeoutHandle=Oa(fn.bind(null,e,Ge,Bt),i);break}fn(e,Ge,Bt);break;case 5:fn(e,Ge,Bt);break;default:throw Error(u(329))}}}return Qe(e,ye()),e.callbackNode===r?Hd.bind(null,e):null}function Do(e,n){var r=Tr;return e.current.memoizedState.isDehydrated&&(pn(e,n).flags|=256),e=Ai(e,n),e!==2&&(n=Ge,Ge=r,n!==null&&Bo(n)),e}function Bo(e){Ge===null?Ge=e:Ge.push.apply(Ge,e)}function wm(e){for(var n=e;;){if(n.flags&16384){var r=n.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var a=r[i],o=a.getSnapshot;a=a.value;try{if(!pt(o(),a))return!1}catch{return!1}}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Zt(e,n){for(n&=~No,n&=~Ni,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var r=31-mt(n),i=1<<r;e[r]=-1,n&=~i}}function qd(e){if((Z&6)!==0)throw Error(u(327));$n();var n=qr(e,0);if((n&1)===0)return Qe(e,ye()),null;var r=Ai(e,n);if(e.tag!==0&&r===2){var i=ua(e);i!==0&&(n=i,r=Do(e,i))}if(r===1)throw r=xr,pn(e,0),Zt(e,n),Qe(e,ye()),r;if(r===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,fn(e,Ge,Bt),Qe(e,ye()),null}function Ao(e,n){var r=Z;Z|=1;try{return e(n)}finally{Z=r,Z===0&&(Vn=ye()+500,li&&Gt())}}function mn(e){Yt!==null&&Yt.tag===0&&(Z&6)===0&&$n();var n=Z;Z|=1;var r=dt.transition,i=oe;try{if(dt.transition=null,oe=1,e)return e()}finally{oe=i,dt.transition=r,Z=n,(Z&6)===0&&Gt()}}function Ro(){tt=jn.current,ce(jn)}function pn(e,n){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Ku(r)),we!==null)for(r=we.return;r!==null;){var i=r;switch(Fa(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&oi();break;case 3:Rn(),ce(qe),ce(Ae),ro();break;case 5:to(i);break;case 4:Rn();break;case 13:ce(fe);break;case 19:ce(fe);break;case 10:Ka(i.type._context);break;case 22:case 23:Ro()}r=r.return}if(Ne=e,we=e=en(e.current,null),De=tt=n,Te=0,xr=null,No=Ni=un=0,Ge=Tr=null,ln!==null){for(n=0;n<ln.length;n++)if(r=ln[n],i=r.interleaved,i!==null){r.interleaved=null;var a=i.next,o=r.pending;if(o!==null){var s=o.next;o.next=a,i.next=s}r.pending=i}ln=null}return e}function Fd(e,n){do{var r=we;try{if(Ja(),yi.current=Si,_i){for(var i=ge.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}_i=!1}if(cn=0,Ie=xe=ge=null,yr=!1,_r=0,Io.current=null,r===null||r.return===null){Te=1,xr=n,we=null;break}e:{var o=e,s=r.return,c=r,m=n;if(n=De,c.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var v=m,S=c,k=S.tag;if((S.mode&1)===0&&(k===0||k===11||k===15)){var b=S.alternate;b?(S.updateQueue=b.updateQueue,S.memoizedState=b.memoizedState,S.lanes=b.lanes):(S.updateQueue=null,S.memoizedState=null)}var N=gd(s);if(N!==null){N.flags&=-257,hd(N,s,c,o,n),N.mode&1&&fd(o,v,n),n=N,m=v;var z=n.updateQueue;if(z===null){var D=new Set;D.add(m),n.updateQueue=D}else z.add(m);break e}else{if((n&1)===0){fd(o,v,n),Mo();break e}m=Error(u(426))}}else if(pe&&c.mode&1){var _e=gd(s);if(_e!==null){(_e.flags&65536)===0&&(_e.flags|=256),hd(_e,s,c,o,n),Qa(Mn(m,c));break e}}o=m=Mn(m,c),Te!==4&&(Te=2),Tr===null?Tr=[o]:Tr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var g=md(o,m,n);jl(o,g);break e;case 1:c=m;var p=o.type,h=o.stateNode;if((o.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Kt===null||!Kt.has(h)))){o.flags|=65536,n&=-n,o.lanes|=n;var x=pd(o,c,n);jl(o,x);break e}}o=o.return}while(o!==null)}Qd(r)}catch(A){n=A,we===r&&r!==null&&(we=r=r.return);continue}break}while(!0)}function Ud(){var e=Ii.current;return Ii.current=Si,e===null?Si:e}function Mo(){(Te===0||Te===3||Te===2)&&(Te=4),Ne===null||(un&268435455)===0&&(Ni&268435455)===0||Zt(Ne,De)}function Ai(e,n){var r=Z;Z|=2;var i=Ud();(Ne!==e||De!==n)&&(Bt=null,pn(e,n));do try{bm();break}catch(a){Fd(e,a)}while(!0);if(Ja(),Z=r,Ii.current=i,we!==null)throw Error(u(261));return Ne=null,De=0,Te}function bm(){for(;we!==null;)Gd(we)}function Sm(){for(;we!==null&&!Qc();)Gd(we)}function Gd(e){var n=Kd(e.alternate,e,tt);e.memoizedProps=e.pendingProps,n===null?Qd(e):we=n,Io.current=null}function Qd(e){var n=e;do{var r=n.alternate;if(e=n.return,(n.flags&32768)===0){if(r=fm(r,n,tt),r!==null){we=r;return}}else{if(r=gm(r,n),r!==null){r.flags&=32767,we=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Te=6,we=null;return}}if(n=n.sibling,n!==null){we=n;return}we=n=e}while(n!==null);Te===0&&(Te=5)}function fn(e,n,r){var i=oe,a=dt.transition;try{dt.transition=null,oe=1,km(e,n,r,i)}finally{dt.transition=a,oe=i}return null}function km(e,n,r,i){do $n();while(Yt!==null);if((Z&6)!==0)throw Error(u(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(ru(e,o),e===Ne&&(we=Ne=null,De=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Li||(Li=!0,Yd(jr,function(){return $n(),null})),o=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||o){o=dt.transition,dt.transition=null;var s=oe;oe=1;var c=Z;Z|=4,Io.current=null,vm(e,r),Md(r,e),qu(Ra),Gr=!!Aa,Ra=Aa=null,e.current=r,ym(r),Wc(),Z=c,oe=s,dt.transition=o}else e.current=r;if(Li&&(Li=!1,Yt=e,zi=a),o=e.pendingLanes,o===0&&(Kt=null),Yc(r.stateNode),Qe(e,ye()),n!==null)for(i=e.onRecoverableError,r=0;r<n.length;r++)a=n[r],i(a.value,{componentStack:a.stack,digest:a.digest});if(Pi)throw Pi=!1,e=Lo,Lo=null,e;return(zi&1)!==0&&e.tag!==0&&$n(),o=e.pendingLanes,(o&1)!==0?e===zo?Cr++:(Cr=0,zo=e):Cr=0,Gt(),null}function $n(){if(Yt!==null){var e=As(zi),n=dt.transition,r=oe;try{if(dt.transition=null,oe=16>e?16:e,Yt===null)var i=!1;else{if(e=Yt,Yt=null,zi=0,(Z&6)!==0)throw Error(u(331));var a=Z;for(Z|=4,P=e.current;P!==null;){var o=P,s=o.child;if((P.flags&16)!==0){var c=o.deletions;if(c!==null){for(var m=0;m<c.length;m++){var v=c[m];for(P=v;P!==null;){var S=P;switch(S.tag){case 0:case 11:case 15:kr(8,S,o)}var k=S.child;if(k!==null)k.return=S,P=k;else for(;P!==null;){S=P;var b=S.sibling,N=S.return;if(zd(S),S===v){P=null;break}if(b!==null){b.return=N,P=b;break}P=N}}}var z=o.alternate;if(z!==null){var D=z.child;if(D!==null){z.child=null;do{var _e=D.sibling;D.sibling=null,D=_e}while(D!==null)}}P=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,P=s;else e:for(;P!==null;){if(o=P,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:kr(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,P=g;break e}P=o.return}}var p=e.current;for(P=p;P!==null;){s=P;var h=s.child;if((s.subtreeFlags&2064)!==0&&h!==null)h.return=s,P=h;else e:for(s=p;P!==null;){if(c=P,(c.flags&2048)!==0)try{switch(c.tag){case 0:case 11:case 15:Ei(9,c)}}catch(A){he(c,c.return,A)}if(c===s){P=null;break e}var x=c.sibling;if(x!==null){x.return=c.return,P=x;break e}P=c.return}}if(Z=a,Gt(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Vr,e)}catch{}i=!0}return i}finally{oe=r,dt.transition=n}}return!1}function Wd(e,n,r){n=Mn(r,n),n=md(e,n,1),e=Wt(e,n,1),n=$e(),e!==null&&(Kn(e,1,n),Qe(e,n))}function he(e,n,r){if(e.tag===3)Wd(e,e,r);else for(;n!==null;){if(n.tag===3){Wd(n,e,r);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Kt===null||!Kt.has(i))){e=Mn(r,e),e=pd(n,e,1),n=Wt(n,e,1),e=$e(),n!==null&&(Kn(n,1,e),Qe(n,e));break}}n=n.return}}function xm(e,n,r){var i=e.pingCache;i!==null&&i.delete(n),n=$e(),e.pingedLanes|=e.suspendedLanes&r,Ne===e&&(De&r)===r&&(Te===4||Te===3&&(De&130023424)===De&&500>ye()-Po?pn(e,0):No|=r),Qe(e,n)}function Jd(e,n){n===0&&((e.mode&1)===0?n=1:(n=Hr,Hr<<=1,(Hr&130023424)===0&&(Hr=4194304)));var r=$e();e=Lt(e,n),e!==null&&(Kn(e,n,r),Qe(e,r))}function Tm(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),Jd(e,r)}function Cm(e,n){var r=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(u(314))}i!==null&&i.delete(n),Jd(e,r)}var Kd;Kd=function(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps||qe.current)Ue=!0;else{if((e.lanes&r)===0&&(n.flags&128)===0)return Ue=!1,pm(e,n,r);Ue=(e.flags&131072)!==0}else Ue=!1,pe&&(n.flags&1048576)!==0&&Nl(n,ci,n.index);switch(n.lanes=0,n.tag){case 2:var i=n.type;Ti(e,n),e=n.pendingProps;var a=Nn(n,Ae.current);An(n,r),a=oo(null,n,i,e,a,r);var o=so();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Fe(i)?(o=!0,si(n)):o=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Za(n),a.updater=ki,n.stateNode=a,a._reactInternals=n,fo(n,i,e,r),n=yo(null,n,i,!0,o,r)):(n.tag=0,pe&&o&&qa(n),Ve(null,n,a,r),n=n.child),n;case 16:i=n.elementType;e:{switch(Ti(e,n),e=n.pendingProps,a=i._init,i=a(i._payload),n.type=i,a=n.tag=Im(i),e=gt(i,e),a){case 0:n=vo(null,n,i,e,r);break e;case 1:n=Sd(null,n,i,e,r);break e;case 11:n=vd(null,n,i,e,r);break e;case 14:n=yd(null,n,i,gt(i.type,e),r);break e}throw Error(u(306,i,""))}return n;case 0:return i=n.type,a=n.pendingProps,a=n.elementType===i?a:gt(i,a),vo(e,n,i,a,r);case 1:return i=n.type,a=n.pendingProps,a=n.elementType===i?a:gt(i,a),Sd(e,n,i,a,r);case 3:e:{if(kd(n),e===null)throw Error(u(387));i=n.pendingProps,o=n.memoizedState,a=o.element,Ol(e,n),hi(n,i,null,r);var s=n.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){a=Mn(Error(u(423)),n),n=xd(e,n,i,r,a);break e}else if(i!==a){a=Mn(Error(u(424)),n),n=xd(e,n,i,r,a);break e}else for(et=qt(n.stateNode.containerInfo.firstChild),Ze=n,pe=!0,ft=null,r=Rl(n,null,i,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(zn(),i===a){n=Dt(e,n,r);break e}Ve(e,n,i,r)}n=n.child}return n;case 5:return $l(n),e===null&&Ga(n),i=n.type,a=n.pendingProps,o=e!==null?e.memoizedProps:null,s=a.children,Ma(i,a)?s=null:o!==null&&Ma(i,o)&&(n.flags|=32),bd(e,n),Ve(e,n,s,r),n.child;case 6:return e===null&&Ga(n),null;case 13:return Td(e,n,r);case 4:return eo(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=Dn(n,null,i,r):Ve(e,n,i,r),n.child;case 11:return i=n.type,a=n.pendingProps,a=n.elementType===i?a:gt(i,a),vd(e,n,i,a,r);case 7:return Ve(e,n,n.pendingProps,r),n.child;case 8:return Ve(e,n,n.pendingProps.children,r),n.child;case 12:return Ve(e,n,n.pendingProps.children,r),n.child;case 10:e:{if(i=n.type._context,a=n.pendingProps,o=n.memoizedProps,s=a.value,se(pi,i._currentValue),i._currentValue=s,o!==null)if(pt(o.value,s)){if(o.children===a.children&&!qe.current){n=Dt(e,n,r);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var m=c.firstContext;m!==null;){if(m.context===i){if(o.tag===1){m=zt(-1,r&-r),m.tag=2;var v=o.updateQueue;if(v!==null){v=v.shared;var S=v.pending;S===null?m.next=m:(m.next=S.next,S.next=m),v.pending=m}}o.lanes|=r,m=o.alternate,m!==null&&(m.lanes|=r),Ya(o.return,r,n),c.lanes|=r;break}m=m.next}}else if(o.tag===10)s=o.type===n.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(u(341));s.lanes|=r,c=s.alternate,c!==null&&(c.lanes|=r),Ya(s,r,n),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===n){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ve(e,n,a.children,r),n=n.child}return n;case 9:return a=n.type,i=n.pendingProps.children,An(n,r),a=st(a),i=i(a),n.flags|=1,Ve(e,n,i,r),n.child;case 14:return i=n.type,a=gt(i,n.pendingProps),a=gt(i.type,a),yd(e,n,i,a,r);case 15:return _d(e,n,n.type,n.pendingProps,r);case 17:return i=n.type,a=n.pendingProps,a=n.elementType===i?a:gt(i,a),Ti(e,n),n.tag=1,Fe(i)?(e=!0,si(n)):e=!1,An(n,r),cd(n,i,a),fo(n,i,a,r),yo(null,n,i,!0,e,r);case 19:return Ed(e,n,r);case 22:return wd(e,n,r)}throw Error(u(156,n.tag))};function Yd(e,n){return Ps(e,n)}function Em(e,n,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,n,r,i){return new Em(e,n,r,i)}function Oo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Im(e){if(typeof e=="function")return Oo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ke)return 11;if(e===it)return 14}return 2}function en(e,n){var r=e.alternate;return r===null?(r=ct(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ri(e,n,r,i,a,o){var s=2;if(i=e,typeof e=="function")Oo(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ee:return gn(r.children,a,o,n);case ve:s=8,a|=8;break;case ut:return e=ct(12,r,n,a|2),e.elementType=ut,e.lanes=o,e;case E:return e=ct(13,r,n,a),e.elementType=E,e.lanes=o,e;case R:return e=ct(19,r,n,a),e.elementType=R,e.lanes=o,e;case ue:return Mi(r,a,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rt:s=10;break e;case ke:s=9;break e;case Ke:s=11;break e;case it:s=14;break e;case Be:s=16,i=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return n=ct(s,r,n,a),n.elementType=e,n.type=i,n.lanes=o,n}function gn(e,n,r,i){return e=ct(7,e,i,n),e.lanes=r,e}function Mi(e,n,r,i){return e=ct(22,e,i,n),e.elementType=ue,e.lanes=r,e.stateNode={isHidden:!1},e}function jo(e,n,r){return e=ct(6,e,null,n),e.lanes=r,e}function Vo(e,n,r){return n=ct(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Nm(e,n,r,i,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ma(0),this.expirationTimes=ma(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ma(0),this.identifierPrefix=i,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function $o(e,n,r,i,a,o,s,c,m){return e=new Nm(e,n,r,c,m),n===1?(n=1,o===!0&&(n|=8)):n=0,o=ct(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Za(o),e}function Pm(e,n,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ce,key:i==null?null:""+i,children:e,containerInfo:n,implementation:r}}function Xd(e){if(!e)return Ut;e=e._reactInternals;e:{if(nn(e)!==e||e.tag!==1)throw Error(u(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Fe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(u(171))}if(e.tag===1){var r=e.type;if(Fe(r))return Cl(e,r,n)}return n}function Zd(e,n,r,i,a,o,s,c,m){return e=$o(r,i,!0,e,a,o,s,c,m),e.context=Xd(null),r=e.current,i=$e(),a=Xt(r),o=zt(i,a),o.callback=n??null,Wt(r,o,a),e.current.lanes=a,Kn(e,a,i),Qe(e,i),e}function Oi(e,n,r,i){var a=n.current,o=$e(),s=Xt(a);return r=Xd(r),n.context===null?n.context=r:n.pendingContext=r,n=zt(o,s),n.payload={element:e},i=i===void 0?null:i,i!==null&&(n.callback=i),e=Wt(a,n,s),e!==null&&(yt(e,a,s,o),gi(e,a,s)),s}function ji(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ec(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function Ho(e,n){ec(e,n),(e=e.alternate)&&ec(e,n)}function Lm(){return null}var tc=typeof reportError=="function"?reportError:function(e){console.error(e)};function qo(e){this._internalRoot=e}Vi.prototype.render=qo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(u(409));Oi(e,n,null,null)},Vi.prototype.unmount=qo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;mn(function(){Oi(null,e,null,null)}),n[Et]=null}};function Vi(e){this._internalRoot=e}Vi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Os();e={blockedOn:null,target:e,priority:n};for(var r=0;r<Vt.length&&n!==0&&n<Vt[r].priority;r++);Vt.splice(r,0,e),r===0&&$s(e)}};function Fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nc(){}function zm(e,n,r,i,a){if(a){if(typeof i=="function"){var o=i;i=function(){var v=ji(s);o.call(v)}}var s=Zd(n,i,e,0,null,!1,!1,"",nc);return e._reactRootContainer=s,e[Et]=s.current,cr(e.nodeType===8?e.parentNode:e),mn(),s}for(;a=e.lastChild;)e.removeChild(a);if(typeof i=="function"){var c=i;i=function(){var v=ji(m);c.call(v)}}var m=$o(e,0,!1,null,null,!1,!1,"",nc);return e._reactRootContainer=m,e[Et]=m.current,cr(e.nodeType===8?e.parentNode:e),mn(function(){Oi(n,m,r,i)}),m}function Hi(e,n,r,i,a){var o=r._reactRootContainer;if(o){var s=o;if(typeof a=="function"){var c=a;a=function(){var m=ji(s);c.call(m)}}Oi(n,s,e,a)}else s=zm(r,n,e,a,i);return ji(s)}Rs=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var r=Jn(n.pendingLanes);r!==0&&(pa(n,r|1),Qe(n,ye()),(Z&6)===0&&(Vn=ye()+500,Gt()))}break;case 13:mn(function(){var i=Lt(e,1);if(i!==null){var a=$e();yt(i,e,1,a)}}),Ho(e,1)}},fa=function(e){if(e.tag===13){var n=Lt(e,134217728);if(n!==null){var r=$e();yt(n,e,134217728,r)}Ho(e,134217728)}},Ms=function(e){if(e.tag===13){var n=Xt(e),r=Lt(e,n);if(r!==null){var i=$e();yt(r,e,n,i)}Ho(e,n)}},Os=function(){return oe},js=function(e,n){var r=oe;try{return oe=e,n()}finally{oe=r}},oa=function(e,n,r){switch(n){case"input":if(Xi(e,r),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<r.length;n++){var i=r[n];if(i!==e&&i.form===e.form){var a=ai(i);if(!a)throw Error(u(90));ds(i),Xi(i,a)}}}break;case"textarea":fs(e,r);break;case"select":n=r.value,n!=null&&vn(e,!!r.multiple,n,!1)}},ks=Ao,xs=mn;var Dm={usingClientEntryPoint:!1,Events:[pr,En,ai,bs,Ss,Ao]},Er={findFiberByHostInstance:rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bm={bundleType:Er.bundleType,version:Er.version,rendererPackageName:Er.rendererPackageName,rendererConfig:Er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Se.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Is(e),e===null?null:e.stateNode},findFiberByHostInstance:Er.findFiberByHostInstance||Lm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qi.isDisabled&&qi.supportsFiber)try{Vr=qi.inject(Bm),wt=qi}catch{}}return We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dm,We.createPortal=function(e,n){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fo(n))throw Error(u(200));return Pm(e,n,null,r)},We.createRoot=function(e,n){if(!Fo(e))throw Error(u(299));var r=!1,i="",a=tc;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=$o(e,1,!1,null,null,r,!1,i,a),e[Et]=n.current,cr(e.nodeType===8?e.parentNode:e),new qo(n)},We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=Is(n),e=e===null?null:e.stateNode,e},We.flushSync=function(e){return mn(e)},We.hydrate=function(e,n,r){if(!$i(n))throw Error(u(200));return Hi(null,e,n,!0,r)},We.hydrateRoot=function(e,n,r){if(!Fo(e))throw Error(u(405));var i=r!=null&&r.hydratedSources||null,a=!1,o="",s=tc;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),n=Zd(n,null,e,1,r??null,a,!1,o,s),e[Et]=n.current,cr(e),i)for(e=0;e<i.length;e++)r=i[e],a=r._getVersion,a=a(r._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[r,a]:n.mutableSourceEagerHydrationData.push(r,a);return new Vi(n)},We.render=function(e,n,r){if(!$i(n))throw Error(u(200));return Hi(null,e,n,!1,r)},We.unmountComponentAtNode=function(e){if(!$i(e))throw Error(u(40));return e._reactRootContainer?(mn(function(){Hi(null,null,e,!1,function(){e._reactRootContainer=null,e[Et]=null})}),!0):!1},We.unstable_batchedUpdates=Ao,We.unstable_renderSubtreeIntoContainer=function(e,n,r,i){if(!$i(r))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return Hi(e,n,r,!1,i)},We.version="18.3.1-next-f1338f8080-20240426",We}var cc;function Hm(){if(cc)return Qo.exports;cc=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(d){console.error(d)}}return l(),Qo.exports=$m(),Qo.exports}var uc;function qm(){if(uc)return Fi;uc=1;var l=Hm();return Fi.createRoot=l.createRoot,Fi.hydrateRoot=l.hydrateRoot,Fi}var Fm=qm();const He=String.raw,Ct=String.raw,Rt=Ct`
window.getDishImageSrc = window.getDishImageSrc || function(item) {
            if (item && item.image) return item.image;
            var rawId = (item && (item.displayId || item.id)) || '';
            var safeId = String(rawId).trim();
            return safeId ? '/images/' + encodeURIComponent(safeId) + '.png' : '';
        };

        window.handleMenuImageError = window.handleMenuImageError || function(img) {
            img.style.display = 'none';
            var fallback = img.nextElementSibling;
            if (fallback) fallback.style.display = 'flex';
        };
  `,Um=[{key:"signature",icon:"🏆",zh:"主廚推薦",en:"Special"},{key:"appetizer",icon:"🥟",zh:"前菜",en:"Appetizer"},{key:"soup",icon:"🍜",zh:"湯",en:"Soup"},{key:"hotpot",icon:"🍲",zh:"煲",en:"Hot Pot"},{key:"rice",icon:"🍚",zh:"飯類",en:"Rice"},{key:"noodle",icon:"🍝",zh:"麵類",en:"Noodle"},{key:"noodleSoup",icon:"🥣",zh:"湯麵",en:"Noodle Soup"},{key:"seafood",icon:"🦐",zh:"海鮮",en:"Seafood"},{key:"beef",icon:"🥩",zh:"牛肉",en:"Beef"},{key:"chicken",icon:"🍗",zh:"雞肉",en:"Chicken"},{key:"bbq",icon:"🍖",zh:"燒臘",en:"BBQ & Marinated Special"},{key:"vegetable",icon:"🥬",zh:"蔬菜",en:"Vegetable"},{key:"pork",icon:"🐷",zh:"豬肉",en:"Pork"},{key:"drinks",icon:"🥤",zh:"飲料",en:"Drinks & Tea"}],Gm=[{id:"S1",displayId:"S1",category:"signature",name:"北京鴨一吃",name_en:"Peking Duck - 1 Style",desc:"經典片皮烤鴨，搭配荷葉餅、青蔥、小黃瓜與甜麵醬，鴨皮酥香、鴨肉柔嫩，是最傳統的北京烤鴨吃法。",desc_en:"Classic sliced roast duck served with lotus-leaf pancakes, scallions, cucumber, and sweet bean sauce. The skin is crisp and fragrant, while the meat stays tender.",howToEat:"取一片荷葉餅，抹上甜麵醬，放入烤鴨、青蔥與小黃瓜後捲起享用。",howToEat_en:"Spread sweet bean sauce on a pancake, add roast duck, scallions, and cucumber, then roll it up and enjoy.",ingredients:{zh:["主餐","主廚醬汁","配料","可加點 Extra Bun"],en:["Main entrée","Chef sauce","Side ingredients","Extra bun available"]},price:49.95,priceText:"$49.95",color:"linear-gradient(135deg, #c0392b, #96281b)",image:"/images/S1.png"},{id:"S2_SOUP",displayId:"S2-",category:"signature",name:"北京鴨二吃 - 鴨架湯",name_en:"Peking Duck - 2 Styles with Duck Bone Soup",desc:"經典片皮烤鴨搭配鴨架湯。鴨架熬成溫潤清爽的湯底，加入白菜、豆腐與菇類，能平衡烤鴨的油脂感，適合喜歡湯品與清爽收尾的客人。",desc_en:"Classic sliced Peking duck served with duck bone soup. The duck bones are simmered into a light, comforting broth with cabbage, tofu, and mushrooms, balancing the richness of the roast duck.",howToEat:"先用荷葉餅包入烤鴨、青蔥、小黃瓜與甜麵醬享用，再搭配熱鴨架湯慢慢品嚐。",howToEat_en:"Enjoy the duck first as pancake wraps with scallions, cucumber, and sweet bean sauce, then sip the warm duck bone soup alongside or as a finish.",ingredients:{zh:["片皮烤鴨","荷葉餅","青蔥、小黃瓜","甜麵醬","鴨架湯"],en:["Sliced roast duck","Mandarin pancakes","Scallions and cucumber","Sweet bean sauce","Duck bone soup"]},price:59.95,priceText:"$59.95",color:"linear-gradient(135deg, #c0392b, #96281b)",image:"/images/S2.png"},{id:"S2_STIR_FRY",displayId:"S2-",category:"signature",name:"北京鴨二吃 - 鴨肉絲炒芽菜",name_en:"Peking Duck - 2 Styles with Shredded Duck & Bean Sprouts",desc:"經典片皮烤鴨搭配鴨肉絲炒芽菜。鴨肉絲、豆芽與青蔥大火快炒，口感爽脆、帶有鑊氣與醬香，適合想要更豐富口感與下飯風味的客人。",desc_en:"Classic sliced Peking duck served with shredded duck and bean sprouts. The duck, bean sprouts, and scallions are quickly stir-fried for crisp texture, wok aroma, and savory sauce flavor.",howToEat:"先吃烤鴨捲餅，再把鴨肉絲炒芽菜當作第二道菜享用；可單吃，也很適合配白飯。",howToEat_en:"Start with the duck pancake wraps, then enjoy the shredded duck and bean sprout stir-fry as the second dish. It is great on its own or with steamed rice.",ingredients:{zh:["片皮烤鴨","荷葉餅","青蔥、小黃瓜","甜麵醬","鴨肉絲炒芽菜"],en:["Sliced roast duck","Mandarin pancakes","Scallions and cucumber","Sweet bean sauce","Shredded duck and bean sprout stir-fry"]},price:59.95,priceText:"$59.95",color:"linear-gradient(135deg, #c0392b, #96281b)",image:"/images/S2-1.png"},{id:"S3",displayId:"S3",category:"signature",name:"北京鴨三吃",name_en:"Peking Duck - 3 Styles",desc:"集合片鴨、鴨架湯與炒鴨菜，是最豐盛完整的北京鴨組合，適合多人分享與家庭聚餐。",desc_en:"A complete Peking duck set with sliced duck, duck bone soup, and stir-fried duck. It is the most generous combination and is ideal for sharing or family gatherings.",howToEat:"先吃片鴨捲餅，再品嚐炒鴨菜，最後以鴨架湯收尾，口感層次最完整。",howToEat_en:"Enjoy the sliced duck pancake wraps first, then the stir-fried duck, and finish with duck bone soup for the fullest progression of flavors.",ingredients:{zh:["主餐","主廚醬汁","配料","可加點 Extra Bun"],en:["Main entrée","Chef sauce","Side ingredients","Extra bun available"]},price:69.95,priceText:"$69.95",color:"linear-gradient(135deg, #c0392b, #96281b)",image:"/images/S3.png"},{id:"S4",displayId:"S4",category:"signature",name:"Extra Bun (10片)",name_en:"Extra Bun (10 pcs)",desc:"額外薄餅10片",desc_en:"Extra Mandarin pancakes 10 pieces",ingredients:{zh:["主餐","主廚醬汁","配料","可加點 Extra Bun"],en:["Main entrée","Chef sauce","Side ingredients","Extra bun available"]},price:10,priceText:"$10.00",color:"linear-gradient(135deg, #d35400, #e67e22)",image:"/images/S4.png"},{id:"A1",displayId:"A1",category:"appetizer",name:"水餃 (6)",name_en:"Boiled Dumplings (6)",desc:"手工水餃6顆",desc_en:"Handmade boiled dumplings, 6 pieces",ingredients:{zh:["開胃小點","醬料","蔬菜或肉類"],en:["Appetizer","Dipping sauce","Vegetable or meat filling"]},price:4.95,priceText:"$4.95",color:"linear-gradient(135deg, #e67e22, #f39c12)",image:"/images/A1.png"},{id:"A2",displayId:"A2",category:"appetizer",name:"鍋貼 (6)",name_en:"Pan-Fried Dumplings (6)",desc:"香煎鍋貼6顆",desc_en:"Pan-fried dumplings, 6 pieces",ingredients:{zh:["開胃小點","醬料","蔬菜或肉類"],en:["Appetizer","Dipping sauce","Vegetable or meat filling"]},price:5.95,priceText:"$5.95",color:"linear-gradient(135deg, #e67e22, #f39c12)",image:"/images/A2.png"},{id:"A3",displayId:"A3",category:"appetizer",name:"素菜春卷",name_en:"Vegetable Spring Rolls",desc:"素菜春卷",desc_en:"Vegetable spring rolls",ingredients:{zh:["開胃小點","醬料","蔬菜或肉類"],en:["Appetizer","Dipping sauce","Vegetable or meat filling"]},price:2.95,priceText:"$2.95",color:"linear-gradient(135deg, #f39c12, #f1c40f)",image:"/images/A3.png"},{id:"A4",displayId:"A4",category:"appetizer",name:"雞肉春卷",name_en:"Chicken Spring Rolls",desc:"雞肉春卷",desc_en:"Chicken spring rolls",ingredients:{zh:["開胃小點","醬料","蔬菜或肉類"],en:["Appetizer","Dipping sauce","Vegetable or meat filling"]},price:3,priceText:"$3.00",color:"linear-gradient(135deg, #f39c12, #f1c40f)",image:"/images/A4.png"},{id:"A5",displayId:"A5",category:"appetizer",name:"炸蟹餃",name_en:"Fried Crab Rangoon",desc:"炸蟹餃",desc_en:"Fried crab rangoon",ingredients:{zh:["開胃小點","醬料","蔬菜或肉類"],en:["Appetizer","Dipping sauce","Vegetable or meat filling"]},price:5.99,priceText:"$5.99",color:"linear-gradient(135deg, #e74c3c, #c0392b)",image:"/images/A5.png"},{id:"A6",displayId:"A6",category:"appetizer",name:"毛豆",name_en:"Edamame",desc:"毛豆",desc_en:"Steamed edamame",ingredients:{zh:["開胃小點","醬料","蔬菜或肉類"],en:["Appetizer","Dipping sauce","Vegetable or meat filling"]},price:4.95,priceText:"$4.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/A6.png"},{id:"A7",displayId:"A7",category:"appetizer",name:"涼拌黑木耳",name_en:"Cold Black Fungus",desc:"涼拌黑木耳",desc_en:"Cold dressed black fungus",ingredients:{zh:["開胃小點","醬料","蔬菜或肉類"],en:["Appetizer","Dipping sauce","Vegetable or meat filling"]},price:4.95,priceText:"$4.95",color:"linear-gradient(135deg, #2c3e50, #34495e)",image:"/images/A7.png"},{id:"A8",displayId:"A8",category:"appetizer",name:"涼拌小黃瓜",name_en:"Cold Cucumber Salad",desc:"涼拌小黃瓜",desc_en:"Cold dressed cucumber",ingredients:{zh:["開胃小點","醬料","蔬菜或肉類"],en:["Appetizer","Dipping sauce","Vegetable or meat filling"]},price:4.95,priceText:"$4.95",color:"linear-gradient(135deg, #27ae60, #16a085)",image:"/images/A8.png"},{id:"A9",displayId:"A9",category:"appetizer",name:"炸雞翅",name_en:"Fried Chicken Wings",desc:"炸雞翅",desc_en:"Deep-fried chicken wings",ingredients:{zh:["開胃小點","醬料","蔬菜或肉類"],en:["Appetizer","Dipping sauce","Vegetable or meat filling"]},price:5.99,priceText:"$5.99",color:"linear-gradient(135deg, #e67e22, #d35400)",image:"/images/A9.png"},{id:"B1",displayId:"B1",category:"soup",name:"酸辣湯 S",name_en:"Hot & Sour Soup S",desc:"酸辣湯 小碗",desc_en:"Hot & sour soup, small",ingredients:{zh:["高湯","配料","蔥花","胡椒"],en:["Broth","Soup ingredients","Scallions","Pepper"]},price:4.95,priceText:"$4.95",color:"linear-gradient(135deg, #e74c3c, #c0392b)",image:"/images/B1.png"},{id:"B1L",displayId:"B1L",category:"soup",name:"酸辣湯 L",name_en:"Hot & Sour Soup L",desc:"酸辣湯 大碗",desc_en:"Hot & sour soup, large",ingredients:{zh:["高湯","配料","蔥花","胡椒"],en:["Broth","Soup ingredients","Scallions","Pepper"]},price:7.95,priceText:"$7.95",color:"linear-gradient(135deg, #e74c3c, #c0392b)",image:"/images/B1L.png"},{id:"B2",displayId:"B2",category:"soup",name:"蛋花湯 S",name_en:"Egg Drop Soup S",desc:"蛋花湯 小碗",desc_en:"Egg drop soup, small",ingredients:{zh:["高湯","配料","蔥花","胡椒"],en:["Broth","Soup ingredients","Scallions","Pepper"]},price:4.95,priceText:"$4.95",color:"linear-gradient(135deg, #f1c40f, #f39c12)",image:"/images/B2.png"},{id:"B2L",displayId:"B2L",category:"soup",name:"蛋花湯 L",name_en:"Egg Drop Soup L",desc:"蛋花湯 大碗",desc_en:"Egg drop soup, large",ingredients:{zh:["高湯","配料","蔥花","胡椒"],en:["Broth","Soup ingredients","Scallions","Pepper"]},price:7.95,priceText:"$7.95",color:"linear-gradient(135deg, #f1c40f, #f39c12)",image:"/images/B2L.png"},{id:"B3",displayId:"B3",category:"soup",name:"清菜豆腐湯",name_en:"Mixed Veg & Tofu Soup",desc:"清菜豆腐湯",desc_en:"Mixed vegetable and tofu soup",ingredients:{zh:["高湯","配料","蔥花","胡椒"],en:["Broth","Soup ingredients","Scallions","Pepper"]},price:9.95,priceText:"$9.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/B3.png"},{id:"B4",displayId:"B4",category:"soup",name:"雲吞湯",name_en:"Wonton Soup",desc:"雲吞湯",desc_en:"Wonton soup",ingredients:{zh:["高湯","配料","蔥花","胡椒"],en:["Broth","Soup ingredients","Scallions","Pepper"]},price:12.95,priceText:"$12.95",color:"linear-gradient(135deg, #e67e22, #d35400)",image:"/images/B4.png"},{id:"B5",displayId:"B5",category:"soup",name:"蟹肉魚肚羹 小",name_en:"Crab & Fish Maw Soup S",desc:"蟹肉魚肚羹 小碗",desc_en:"Crab meat and fish maw soup, small",ingredients:{zh:["高湯","配料","蔥花","胡椒"],en:["Broth","Soup ingredients","Scallions","Pepper"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #e74c3c, #c0392b)",image:"/images/B5.png"},{id:"B5L",displayId:"B5L",category:"soup",name:"蟹肉魚肚羹 大",name_en:"Crab & Fish Maw Soup L",desc:"蟹肉魚肚羹 大碗",desc_en:"Crab meat and fish maw soup, large",ingredients:{zh:["高湯","配料","蔥花","胡椒"],en:["Broth","Soup ingredients","Scallions","Pepper"]},price:21.95,priceText:"$21.95",color:"linear-gradient(135deg, #e74c3c, #c0392b)",image:"/images/B5L.png"},{id:"B6",displayId:"B6",category:"soup",name:"西湖牛肉羹 小",name_en:"West Lake Beef Soup S",desc:"西湖牛肉羹 小碗",desc_en:"West Lake beef soup, small",ingredients:{zh:["高湯","配料","蔥花","胡椒"],en:["Broth","Soup ingredients","Scallions","Pepper"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #8e44ad, #9b59b6)",image:"/images/B6.png"},{id:"B6L",displayId:"B6L",category:"soup",name:"西湖牛肉羹 大",name_en:"West Lake Beef Soup L",desc:"西湖牛肉羹 大碗",desc_en:"West Lake beef soup, large",ingredients:{zh:["高湯","配料","蔥花","胡椒"],en:["Broth","Soup ingredients","Scallions","Pepper"]},price:21.95,priceText:"$21.95",color:"linear-gradient(135deg, #8e44ad, #9b59b6)",image:"/images/B6L.png"},{id:"B7",displayId:"B7",category:"soup",name:"海皇羹 小",name_en:"Seafood Soup S",desc:"海皇羹 小碗",desc_en:"Seafood soup, small",ingredients:{zh:["高湯","配料","蔥花","胡椒"],en:["Broth","Soup ingredients","Scallions","Pepper"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #2980b9, #3498db)",image:"/images/B7.png"},{id:"B7L",displayId:"B7L",category:"soup",name:"海皇羹 大",name_en:"Seafood Soup L",desc:"海皇羹 大碗",desc_en:"Seafood soup, large",ingredients:{zh:["高湯","配料","蔥花","胡椒"],en:["Broth","Soup ingredients","Scallions","Pepper"]},price:21.95,priceText:"$21.95",color:"linear-gradient(135deg, #2980b9, #3498db)",image:"/images/B7L.png"},{id:"C1",displayId:"C1",category:"hotpot",name:"海鮮豆腐煲",name_en:"Seafood Tofu Clay Pot",desc:"海鮮豆腐煲是一道溫潤鮮美的廣東式煲仔料理。以嫩滑魚片、蝦仁、蟹肉棒、白菜、香菇與金黃豆腐一同燴煮，搭配清淡濃稠的海鮮芡汁，讓豆腐吸收湯汁的鮮甜。整體口感滑嫩、鮮香、溫和不膩，是很適合搭配白飯的暖胃主菜。",desc_en:"Seafood Tofu Clay Pot is a comforting Cantonese-style casserole dish made with tender fish fillet, shrimp, imitation crab, napa cabbage, mushrooms, and golden tofu. The ingredients are simmered in a light savory seafood sauce, allowing the tofu to absorb the rich flavor. It is warm, smooth, flavorful, and perfect with steamed rice.",ingredients:{zh:["豆腐","蔬菜","肉類或海鮮","砂鍋醬汁"],en:["Tofu","Vegetables","Meat or seafood","Clay pot sauce"]},price:19.95,priceText:"$19.95",color:"linear-gradient(135deg, #e74c3c, #c0392b)",image:"/images/C1.png",howToEat:"建議趁熱享用，可以先吃吸滿醬汁的豆腐，再搭配魚片、蝦仁與蔬菜一起入口。湯汁很適合淋在白飯上，讓整體味道更鮮甜下飯。",howToEat_en:"Best served hot. Enjoy the tofu first to taste the absorbed seafood sauce, then pair it with fish, shrimp, and vegetables. Spoon the sauce over steamed rice for an even richer and more satisfying meal."},{id:"C2",displayId:"C2",category:"hotpot",name:"什錦豆腐煲",name_en:"Assorted Tofu Pot",desc:"什錦豆腐煲",desc_en:"Assorted tofu clay pot",ingredients:{zh:["豆腐","蔬菜","肉類或海鮮","砂鍋醬汁"],en:["Tofu","Vegetables","Meat or seafood","Clay pot sauce"]},price:19.95,priceText:"$19.95",color:"linear-gradient(135deg, #e67e22, #d35400)",image:"/images/C2.png"},{id:"C3",displayId:"C3",category:"hotpot",name:"牛腩豆腐煲",name_en:"Beef Brisket Tofu Pot",desc:"牛腩豆腐煲",desc_en:"Beef brisket tofu clay pot",ingredients:{zh:["豆腐","蔬菜","肉類或海鮮","砂鍋醬汁"],en:["Tofu","Vegetables","Meat or seafood","Clay pot sauce"]},price:19.95,priceText:"$19.95",color:"linear-gradient(135deg, #8e44ad, #9b59b6)",image:"/images/C3.png"},{id:"C4",displayId:"C4",category:"hotpot",name:"鹹魚雞粒豆腐煲",name_en:"Salted Fish Chicken Tofu Pot",desc:"鹹魚雞粒豆腐煲",desc_en:"Salted fish and diced chicken tofu pot",ingredients:{zh:["豆腐","蔬菜","肉類或海鮮","砂鍋醬汁"],en:["Tofu","Vegetables","Meat or seafood","Clay pot sauce"]},price:19.95,priceText:"$19.95",color:"linear-gradient(135deg, #f39c12, #f1c40f)",image:"/images/C4.png"},{id:"C5",displayId:"C5",category:"hotpot",name:"鹹魚雞粒茄子煲",name_en:"Salted Fish Chicken Eggplant Pot",desc:"鹹魚雞粒茄子煲",desc_en:"Salted fish and diced chicken eggplant pot",ingredients:{zh:["豆腐","蔬菜","肉類或海鮮","砂鍋醬汁"],en:["Tofu","Vegetables","Meat or seafood","Clay pot sauce"]},price:19.95,priceText:"$19.95",color:"linear-gradient(135deg, #8e44ad, #9b59b6)",image:"/images/C5.png"},{id:"C6",displayId:"C6",category:"hotpot",name:"沙茶牛肉粉絲煲",name_en:"Satay Beef Vermicelli Pot",desc:"沙茶牛肉粉絲煲",desc_en:"Satay beef vermicelli clay pot",ingredients:{zh:["豆腐","蔬菜","肉類或海鮮","砂鍋醬汁"],en:["Tofu","Vegetables","Meat or seafood","Clay pot sauce"]},price:19.95,priceText:"$19.95",color:"linear-gradient(135deg, #d35400, #e67e22)",image:"/images/C6.png"},{id:"D1",displayId:"D1",category:"rice",name:"蝦仁炒飯",name_en:"Shrimp Fried Rice",desc:"蝦仁炒飯",desc_en:"Shrimp fried rice",ingredients:{zh:["白飯","蛋","蔥花","主食配料"],en:["Rice","Egg","Scallions","Main toppings"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #e74c3c, #c0392b)",image:"/images/D1.png"},{id:"D2",displayId:"D2",category:"rice",name:"叉燒炒飯",name_en:"BBQ Pork Fried Rice",desc:"叉燒炒飯",desc_en:"BBQ pork fried rice",ingredients:{zh:["白飯","蛋","蔥花","主食配料"],en:["Rice","Egg","Scallions","Main toppings"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #c0392b, #96281b)",image:"/images/D2.png"},{id:"D3",displayId:"D3",category:"rice",name:"牛肉炒飯",name_en:"Beef Fried Rice",desc:"牛肉炒飯",desc_en:"Beef fried rice",ingredients:{zh:["白飯","蛋","蔥花","主食配料"],en:["Rice","Egg","Scallions","Main toppings"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #8e44ad, #9b59b6)",image:"/images/D3.png"},{id:"D4",displayId:"D4",category:"rice",name:"什錦炒飯",name_en:"House Special Fried Rice",desc:"什錦炒飯是一道份量豐富、香氣十足的經典炒飯。米飯以大火快炒，粒粒分明，搭配雞蛋、青豆、蔥花，再加入叉燒、豬肉與蝦仁等多種配料。叉燒帶有微甜燒臘香，豬肉增加鹹香口感，蝦仁則帶出鮮甜海味，讓整體風味更有層次。",desc_en:"House Special Fried Rice is a flavorful and satisfying classic fried rice dish. The rice is wok-fried until each grain is distinct and aromatic, then mixed with egg, green peas, scallions, char siu BBQ pork, pork, and shrimp. The char siu adds a slightly sweet roasted flavor, the pork brings savory depth, and the shrimp adds a light seafood sweetness.",ingredients:{zh:["白飯","蛋","蔥花","主食配料"],en:["Rice","Egg","Scallions","Main toppings"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #e67e22, #d35400)",image:"/images/D4.png",howToEat:"建議趁熱享用，能吃到炒飯的鍋氣與米飯香。可以單獨作為主餐，也很適合搭配青菜、湯品或燒臘一起吃。若喜歡味道重一點，也可以加一點辣油或醬油提味。",howToEat_en:"Best enjoyed hot to bring out the wok aroma and texture of the rice. It can be served as a main dish on its own or paired with vegetables, soup, or Cantonese BBQ dishes. Add a little chili oil or soy sauce for extra flavor if desired."},{id:"D5",displayId:"D5",category:"rice",name:"鹹魚雞粒炒飯",name_en:"Salted Fish Chicken Fried Rice",desc:"鹹魚雞粒炒飯",desc_en:"Salted fish and diced chicken fried rice",ingredients:{zh:["白飯","蛋","蔥花","主食配料"],en:["Rice","Egg","Scallions","Main toppings"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #f39c12, #f1c40f)",image:"/images/D5.png"},{id:"D6",displayId:"D6",category:"rice",name:"叉燒油雞飯",name_en:"BBQ Pork & Chicken Rice",desc:"叉燒油雞飯",desc_en:"BBQ pork and soy sauce chicken rice",ingredients:{zh:["白飯","蛋","蔥花","主食配料"],en:["Rice","Egg","Scallions","Main toppings"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #c0392b, #96281b)",image:"/images/D6.png"},{id:"D7",displayId:"D7",category:"rice",name:"叉燒燒雞飯",name_en:"BBQ Pork & Roast Chicken Rice",desc:"叉燒燒雞飯",desc_en:"BBQ pork and roast chicken rice",ingredients:{zh:["白飯","蛋","蔥花","主食配料"],en:["Rice","Egg","Scallions","Main toppings"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #c0392b, #96281b)",image:"/images/D7.png"},{id:"D8",displayId:"D8",category:"rice",name:"燒鴨油雞飯",name_en:"Roast Duck & Chicken Rice",desc:"燒鴨油雞飯",desc_en:"Roast duck and soy sauce chicken rice",ingredients:{zh:["白飯","蛋","蔥花","主食配料"],en:["Rice","Egg","Scallions","Main toppings"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #d35400, #e67e22)",image:"/images/D8.png"},{id:"D9",displayId:"D9",category:"rice",name:"三寶飯",name_en:"Three Treasure Rice",desc:"三寶飯（叉燒、燒鴨、油雞）",desc_en:"BBQ pork, roast duck & soy sauce chicken rice",ingredients:{zh:["白飯","蛋","蔥花","主食配料"],en:["Rice","Egg","Scallions","Main toppings"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #e74c3c, #c0392b)",image:"/images/D9.png"},{id:"D10",displayId:"D10",category:"rice",name:"叉燒飯",name_en:"BBQ Pork Rice",desc:"叉燒飯",desc_en:"BBQ pork rice",ingredients:{zh:["白飯","蛋","蔥花","主食配料"],en:["Rice","Egg","Scallions","Main toppings"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #c0392b, #96281b)",image:"/images/D10.png"},{id:"D11",displayId:"D11",category:"rice",name:"油雞飯",name_en:"Soy Sauce Chicken Rice",desc:"油雞飯",desc_en:"Soy sauce chicken rice",ingredients:{zh:["白飯","蛋","蔥花","主食配料"],en:["Rice","Egg","Scallions","Main toppings"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #f39c12, #f1c40f)",image:"/images/D11.png"},{id:"D12",displayId:"D12",category:"rice",name:"避風塘大蟹飯",name_en:"Typhoon Shelter Crab Rice",desc:"避風塘大蟹飯",desc_en:"Typhoon shelter style crab rice",ingredients:{zh:["白飯","蛋","蔥花","主食配料"],en:["Rice","Egg","Scallions","Main toppings"]},price:80.95,priceText:"$80.95",color:"linear-gradient(135deg, #e74c3c, #96281b)",image:"/images/D12.png"},{id:"E1",displayId:"E1",category:"noodle",name:"海鮮兩面黃",name_en:"Seafood Pan-Fried Noodles",desc:"海鮮兩面黃",desc_en:"Seafood pan-fried noodles",ingredients:{zh:["麵條","蔬菜","醬汁","主食配料"],en:["Noodles","Vegetables","Sauce","Main toppings"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #e67e22, #d35400)",image:"/images/E1.png"},{id:"E2",displayId:"E2",category:"noodle",name:"蝦球兩面黃",name_en:"Shrimp Pan-Fried Noodles",desc:"蝦球兩面黃",desc_en:"Shrimp ball pan-fried noodles",ingredients:{zh:["麵條","蔬菜","醬汁","主食配料"],en:["Noodles","Vegetables","Sauce","Main toppings"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #e74c3c, #c0392b)",image:"/images/E2.png"},{id:"E3",displayId:"E3",category:"noodle",name:"牛肉兩面黃",name_en:"Beef Pan-Fried Noodles",desc:"牛肉兩面黃",desc_en:"Beef pan-fried noodles",ingredients:{zh:["麵條","蔬菜","醬汁","主食配料"],en:["Noodles","Vegetables","Sauce","Main toppings"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #8e44ad, #9b59b6)",image:"/images/E3.png"},{id:"E4",displayId:"E4",category:"noodle",name:"叉燒兩面黃",name_en:"BBQ Pork Pan-Fried Noodles",desc:"叉燒兩面黃",desc_en:"BBQ pork pan-fried noodles",ingredients:{zh:["麵條","蔬菜","醬汁","主食配料"],en:["Noodles","Vegetables","Sauce","Main toppings"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #c0392b, #96281b)",image:"/images/E4.png"},{id:"E5",displayId:"E5",category:"noodle",name:"乾炒牛河",name_en:"Beef Chow Fun",desc:"經典廣東風味炒河粉，以寬河粉搭配嫩牛肉、豆芽、洋蔥與青蔥大火快炒。河粉吸附醬香，帶有鑊氣，口感滑順又帶嚼勁，牛肉鮮嫩入味，是非常受歡迎的主食類餐點。",desc_en:"A classic Cantonese-style stir-fried wide rice noodle dish with tender sliced beef, bean sprouts, onion, and scallions. The noodles are wok-fried with savory soy sauce, giving them a rich aroma, smooth texture, and satisfying chew. A hearty and popular entrée choice.",ingredients:{zh:["麵條","蔬菜","醬汁","主食配料"],en:["Noodles","Vegetables","Sauce","Main toppings"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #8e44ad, #9b59b6)",image:"/images/E5.png",howToEat:"建議趁熱享用，能吃到河粉最好的香氣與口感。可搭配辣油或醬油增加風味，也很適合作為主餐單獨享用。",howToEat_en:"Best enjoyed hot to experience the full wok aroma and soft, chewy texture of the noodles. Add chili oil or soy sauce if desired. Perfect as a main entrée."},{id:"E6",displayId:"E6",category:"noodle",name:"豉椒牛河",name_en:"Black Bean Beef Ho Fun",desc:"豉椒牛河",desc_en:"Beef ho fun with black bean sauce",ingredients:{zh:["麵條","蔬菜","醬汁","主食配料"],en:["Noodles","Vegetables","Sauce","Main toppings"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #2c3e50, #34495e)",image:"/images/E6.png"},{id:"E7",displayId:"E7",category:"noodle",name:"星洲炒米粉",name_en:"Singapore Fried Vermicelli",desc:"星洲炒米粉",desc_en:"Singapore style fried vermicelli",ingredients:{zh:["麵條","蔬菜","醬汁","主食配料"],en:["Noodles","Vegetables","Sauce","Main toppings"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #f39c12, #f1c40f)",image:"/images/E7.png"},{id:"E8",displayId:"E8",category:"noodle",name:"廣東炒米粉",name_en:"Cantonese Fried Vermicelli",desc:"廣東炒米粉",desc_en:"Cantonese style fried vermicelli",ingredients:{zh:["麵條","蔬菜","醬汁","主食配料"],en:["Noodles","Vegetables","Sauce","Main toppings"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #e67e22, #d35400)",image:"/images/E8.png"},{id:"E9",displayId:"E9",category:"noodle",name:"什錦撈麵",name_en:"House Special Lo Mein",desc:"什錦撈麵",desc_en:"House special lo mein",ingredients:{zh:["麵條","蔬菜","醬汁","主食配料"],en:["Noodles","Vegetables","Sauce","Main toppings"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #e67e22, #f39c12)",image:"/images/E9.png"},{id:"E10",displayId:"E10",category:"noodle",name:"海鮮撈麵",name_en:"Seafood Lo Mein",desc:"海鮮撈麵",desc_en:"Seafood lo mein",ingredients:{zh:["麵條","蔬菜","醬汁","主食配料"],en:["Noodles","Vegetables","Sauce","Main toppings"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #2980b9, #3498db)",image:"/images/E10.png"},{id:"E11",displayId:"E11",category:"noodle",name:"雞肉撈麵",name_en:"Chicken Lo Mein",desc:"雞肉撈麵",desc_en:"Chicken lo mein",ingredients:{zh:["麵條","蔬菜","醬汁","主食配料"],en:["Noodles","Vegetables","Sauce","Main toppings"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #f39c12, #f1c40f)",image:"/images/E11.png"},{id:"E12",displayId:"E12",category:"noodle",name:"牛肉撈麵",name_en:"Beef Lo Mein",desc:"牛肉撈麵",desc_en:"Beef lo mein",ingredients:{zh:["麵條","蔬菜","醬汁","主食配料"],en:["Noodles","Vegetables","Sauce","Main toppings"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #8e44ad, #9b59b6)",image:"/images/E12.png"},{id:"E13",displayId:"E13",category:"noodle",name:"蔬菜撈麵",name_en:"Vegetable Lo Mein",desc:"蔬菜撈麵",desc_en:"Vegetable lo mein",ingredients:{zh:["麵條","蔬菜","醬汁","主食配料"],en:["Noodles","Vegetables","Sauce","Main toppings"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/E13.png"},{id:"E14",displayId:"E14",category:"noodle",name:"撈麵",name_en:"Plain Lo Mein",desc:"撈麵",desc_en:"Plain lo mein",ingredients:{zh:["麵條","蔬菜","醬汁","主食配料"],en:["Noodles","Vegetables","Sauce","Main toppings"]},price:5,priceText:"$5.00",color:"linear-gradient(135deg, #f39c12, #f1c40f)",image:"/images/E14.png"},{id:"E15",displayId:"E15",category:"noodle",name:"蔬菜兩面黃",name_en:"Vegetable Pan-Fried Noodles",desc:"蔬菜兩面黃",desc_en:"Vegetable pan-fried noodles",ingredients:{zh:["麵條","蔬菜","醬汁","主食配料"],en:["Noodles","Vegetables","Sauce","Main toppings"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/E15.png"},{id:"E16",displayId:"E16",category:"noodle",name:"雞肉兩面黃",name_en:"Chicken Pan-Fried Noodles",desc:"雞肉兩面黃",desc_en:"Chicken pan-fried noodles",ingredients:{zh:["麵條","蔬菜","醬汁","主食配料"],en:["Noodles","Vegetables","Sauce","Main toppings"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #f39c12, #f1c40f)",image:"/images/E16.png"},{id:"E17",displayId:"E17",category:"noodle",name:"什錦兩面黃",name_en:"House Special Pan-Fried Crispy Noodles",desc:"什錦兩面黃是一道經典廣東式脆麵料理。底部使用煎至金黃酥脆的細麵，外圈香脆、內層保有麵香；上方淋上什錦配料與濃郁芡汁，包含肉片、青菜、白菜、紅蘿蔔、蘑菇等食材。醬汁滲入麵條後，會形成一半酥脆、一半吸汁柔軟的口感，層次非常豐富。",desc_en:"House Special Pan-Fried Crispy Noodles is a classic Cantonese-style noodle dish. Crispy golden pan-fried noodles are topped with a savory mixed stir-fry of sliced meat, bok choy, cabbage, carrots, mushrooms, and vegetables in a light brown sauce. The noodles stay crispy around the edges while absorbing the flavorful sauce in the center, creating a rich contrast of textures.",ingredients:{zh:["麵條","蔬菜","醬汁","主食配料"],en:["Noodles","Vegetables","Sauce","Main toppings"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #e67e22, #d35400)",image:"/images/E17.png",howToEat:"建議趁熱享用，先吃外圍酥脆的麵條，再把中間吸收醬汁的麵與配料一起入口。也可以將上方的肉片、青菜與脆麵拌開，讓每一口都有醬香、蔬菜清甜與麵條的酥脆口感。",howToEat_en:"Best enjoyed hot. Try the crispy edges first, then mix the saucy toppings with the noodles in the center. Each bite combines crunchy noodles, tender meat, vegetables, and savory sauce."},{id:"E18",displayId:"E18",category:"noodle",name:"蔬菜河粉",name_en:"Vegetable Ho Fun",desc:"蔬菜河粉",desc_en:"Vegetable ho fun (flat rice noodles)",ingredients:{zh:["麵條","蔬菜","醬汁","主食配料"],en:["Noodles","Vegetables","Sauce","Main toppings"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/E18.png"},{id:"E19",displayId:"E19",category:"noodle",name:"蝦撈麵",name_en:"Shrimp Lo Mein",desc:"蝦撈麵",desc_en:"Shrimp lo mein",ingredients:{zh:["麵條","蔬菜","醬汁","主食配料"],en:["Noodles","Vegetables","Sauce","Main toppings"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #e74c3c, #c0392b)",image:"/images/E19.png"},{id:"E20",displayId:"E20",category:"noodle",name:"龍蝦兩面黃",name_en:"Lobster Pan-Fried Noodles",desc:"龍蝦兩面黃",desc_en:"Lobster pan-fried noodles",ingredients:{zh:["麵條","蔬菜","醬汁","主食配料"],en:["Noodles","Vegetables","Sauce","Main toppings"]},price:100.95,priceText:"$100.95",color:"linear-gradient(135deg, #c0392b, #96281b)",image:"/images/E20.png"},{id:"E21",displayId:"E21",category:"noodle",name:"肉絲兩面黃",name_en:"Shredded Pork Pan-Fried Noodles",desc:"肉絲兩面黃",desc_en:"Shredded pork pan-fried noodles",ingredients:{zh:["麵條","蔬菜","醬汁","主食配料"],en:["Noodles","Vegetables","Sauce","Main toppings"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #e67e22, #d35400)",image:"/images/E21.png"},{id:"E22",displayId:"E22",category:"noodle",name:"龍蝦意麵",name_en:"Lobster E-Fu Noodles",desc:"龍蝦意麵",desc_en:"Lobster with e-fu noodles",ingredients:{zh:["麵條","蔬菜","醬汁","主食配料"],en:["Noodles","Vegetables","Sauce","Main toppings"]},price:100.95,priceText:"$100.95",color:"linear-gradient(135deg, #c0392b, #96281b)",image:"/images/E22.png"},{id:"E23",displayId:"E23",category:"noodle",name:"炸醬麵",name_en:"Zha Jiang Mian",desc:"炸醬麵",desc_en:"Zha jiang mian (soybean paste noodles)",ingredients:{zh:["麵條","蔬菜","醬汁","主食配料"],en:["Noodles","Vegetables","Sauce","Main toppings"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #8e44ad, #9b59b6)",image:"/images/E23.png"},{id:"F1",displayId:"F1",category:"noodleSoup",name:"雲吞湯麵",name_en:"Wonton Noodle Soup",desc:"雲吞湯麵",desc_en:"Wonton noodle soup",ingredients:{zh:["湯底","麵條","青菜","主食配料"],en:["Soup base","Noodles","Greens","Main toppings"]},price:12.95,priceText:"$12.95",color:"linear-gradient(135deg, #e67e22, #d35400)",image:"/images/F1.png"},{id:"F2",displayId:"F2",category:"noodleSoup",name:"牛腩湯麵",name_en:"Beef Brisket Noodle Soup",desc:"牛腩湯麵",desc_en:"Beef brisket noodle soup",ingredients:{zh:["湯底","麵條","青菜","主食配料"],en:["Soup base","Noodles","Greens","Main toppings"]},price:14.95,priceText:"$14.95",color:"linear-gradient(135deg, #8e44ad, #9b59b6)",image:"/images/F2.png"},{id:"F3",displayId:"F3",category:"noodleSoup",name:"牛腩雲吞麵",name_en:"Beef Brisket & Wonton Noodle Soup",desc:"牛腩雲吞麵",desc_en:"Beef brisket and wonton noodle soup",ingredients:{zh:["湯底","麵條","青菜","主食配料"],en:["Soup base","Noodles","Greens","Main toppings"]},price:14.95,priceText:"$14.95",color:"linear-gradient(135deg, #8e44ad, #9b59b6)",image:"/images/F3.png"},{id:"F4",displayId:"F4",category:"noodleSoup",name:"叉燒雲吞麵",name_en:"BBQ Pork & Wonton Noodle Soup",desc:"叉燒雲吞麵",desc_en:"BBQ pork and wonton noodle soup",ingredients:{zh:["湯底","麵條","青菜","主食配料"],en:["Soup base","Noodles","Greens","Main toppings"]},price:14.95,priceText:"$14.95",color:"linear-gradient(135deg, #c0392b, #96281b)",image:"/images/F4.png"},{id:"F5",displayId:"F5",category:"noodleSoup",name:"油雞雲吞麵",name_en:"Chicken & Wonton Noodle Soup",desc:"油雞雲吞麵",desc_en:"Soy sauce chicken and wonton noodle soup",ingredients:{zh:["湯底","麵條","青菜","主食配料"],en:["Soup base","Noodles","Greens","Main toppings"]},price:14.95,priceText:"$14.95",color:"linear-gradient(135deg, #f39c12, #f1c40f)",image:"/images/F5.png"},{id:"F6",displayId:"F6",category:"noodleSoup",name:"燒鴨雲吞麵",name_en:"Roast Duck & Wonton Noodle Soup",desc:"燒鴨雲吞麵",desc_en:"Roast duck and wonton noodle soup",ingredients:{zh:["湯底","麵條","青菜","主食配料"],en:["Soup base","Noodles","Greens","Main toppings"]},price:14.95,priceText:"$14.95",color:"linear-gradient(135deg, #d35400, #e67e22)",image:"/images/F6.png"},{id:"F7",displayId:"F7",category:"noodleSoup",name:"紅燒牛肉麵",name_en:"Braised Beef Noodle Soup",desc:"紅燒牛肉麵",desc_en:"Braised beef noodle soup",ingredients:{zh:["湯底","麵條","青菜","主食配料"],en:["Soup base","Noodles","Greens","Main toppings"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #8e44ad, #9b59b6)",image:"/images/F7.png"},{id:"G1",displayId:"G1",category:"seafood",name:"核桃蝦",name_en:"Walnut Shrimp",desc:"核桃蝦",desc_en:"Honey walnut shrimp",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:20.95,priceText:"$20.95",color:"linear-gradient(135deg, #e74c3c, #c0392b)",image:"/images/G1.png"},{id:"G2",displayId:"G2",category:"seafood",name:"椒鹽蝦",name_en:"Salt & Pepper Shrimp",desc:"椒鹽蝦",desc_en:"Salt and pepper shrimp",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:20.95,priceText:"$20.95",color:"linear-gradient(135deg, #e67e22, #d35400)",image:"/images/G2.png"},{id:"G3",displayId:"G3",category:"seafood",name:"宮保蝦",name_en:"Kung Pao Shrimp",desc:"宮保蝦",desc_en:"Kung pao shrimp",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:20.95,priceText:"$20.95",color:"linear-gradient(135deg, #e74c3c, #c0392b)",image:"/images/G3.png"},{id:"G4",displayId:"G4",category:"seafood",name:"魚香蝦",name_en:"Shrimp with Garlic Sauce",desc:"魚香蝦",desc_en:"Shrimp with fish-fragrant sauce",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:20.95,priceText:"$20.95",color:"linear-gradient(135deg, #e67e22, #f39c12)",image:"/images/G4.png"},{id:"G5",displayId:"G5",category:"seafood",name:"芝士蝦",name_en:"Cheese Shrimp",desc:"芝士蝦",desc_en:"Cheese baked shrimp",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:20.95,priceText:"$20.95",color:"linear-gradient(135deg, #f1c40f, #f39c12)",image:"/images/G5.png"},{id:"G7",displayId:"G7",category:"seafood",name:"滑蛋蝦仁",name_en:"Shrimp with Egg",desc:"滑蛋蝦仁",desc_en:"Shrimp with scrambled egg",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:20.95,priceText:"$20.95",color:"linear-gradient(135deg, #f1c40f, #f39c12)",image:"/images/G7.png"},{id:"G8",displayId:"G8",category:"seafood",name:"腰果蝦",name_en:"Cashew Shrimp",desc:"腰果蝦",desc_en:"Cashew shrimp",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:20.95,priceText:"$20.95",color:"linear-gradient(135deg, #e67e22, #d35400)",image:"/images/G8.png"},{id:"G9",displayId:"G9",category:"seafood",name:"油泡魚片",name_en:"Sautéed Fish Fillet",desc:"油泡魚片",desc_en:"Sautéed fish fillet",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:20.95,priceText:"$20.95",color:"linear-gradient(135deg, #2980b9, #3498db)",image:"/images/G9.png"},{id:"G10",displayId:"G10",category:"seafood",name:"椒鹽鮮魷",name_en:"Salt & Pepper Squid",desc:"椒鹽鮮魷",desc_en:"Salt and pepper squid",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:20.95,priceText:"$20.95",color:"linear-gradient(135deg, #e67e22, #d35400)",image:"/images/G10.png"},{id:"G11",displayId:"G11",category:"seafood",name:"魚片豆腐",name_en:"Fish Fillet with Tofu",desc:"魚片豆腐是一道清爽又下飯的家常中式料理。嫩滑魚片搭配外層微金黃、口感柔軟的豆腐一同燴炒，豆腐看起來接近油豆腐，能吸收醬汁的鮮味。整體以淡雅鹹香的芡汁包裹，加入青蔥與少量蔬菜點綴，口感滑嫩、味道溫和，很適合喜歡清淡但有層次風味的客人。",desc_en:"Fish Fillet with Tofu is a light and comforting Chinese-style dish. Tender sliced fish fillet is cooked with soft golden tofu that resembles fried tofu, allowing it to absorb the savory sauce. Finished with scallions and a light glaze, this dish has a mild, smooth, and delicate flavor that pairs perfectly with rice.",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:20.95,priceText:"$20.95",color:"linear-gradient(135deg, #2980b9, #3498db)",image:"/images/G11.png",howToEat:"建議搭配白飯一起享用，讓豆腐與魚片的醬汁拌入飯中更香。魚片口感細嫩，豆腐吸汁入味，適合趁熱吃。也可以搭配青菜或湯品，形成清爽的一餐。",howToEat_en:"Best served hot with steamed rice. The tofu absorbs the sauce, while the fish fillet stays tender and delicate. Pair it with vegetables or soup for a lighter, balanced meal."},{id:"G12",displayId:"G12",category:"seafood",name:"酸菜魚片",name_en:"Sour Cabbage Fish Fillet",desc:"酸菜魚片",desc_en:"Fish fillet with pickled cabbage",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:20.95,priceText:"$20.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/G12.png"},{id:"G13",displayId:"G13",category:"seafood",name:"水煮魚片",name_en:"Sichuan Boiled Fish Fillet",desc:"水煮魚片",desc_en:"Sichuan style boiled fish fillet",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:20.95,priceText:"$20.95",color:"linear-gradient(135deg, #e74c3c, #c0392b)",image:"/images/G13.png"},{id:"G14",displayId:"G14",category:"seafood",name:"椒鹽三鮮",name_en:"Salt & Pepper Three Delights",desc:"椒鹽三鮮",desc_en:"Salt and pepper three delights",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:20.95,priceText:"$20.95",color:"linear-gradient(135deg, #e67e22, #d35400)",image:"/images/G14.png"},{id:"G15",displayId:"G15",category:"seafood",name:"避風塘炒三鮮",name_en:"Typhoon Shelter Three Delights",desc:"避風塘炒三鮮",desc_en:"Typhoon shelter style three delights",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:20.95,priceText:"$20.95",color:"linear-gradient(135deg, #e74c3c, #96281b)",image:"/images/G15.png"},{id:"G16",displayId:"G16",category:"seafood",name:"椒鹽大蝦",name_en:"Salt and Pepper Jumbo Shrimp",desc:"椒鹽大蝦是一道香氣濃郁、口感酥香的經典中式海鮮料理。大蝦經高溫炸至外層金黃酥脆，再拌入椒鹽、蒜酥、青辣椒與乾辣椒，帶出鹹香、微辣與蒜香的層次。蝦肉鮮甜彈牙，外層帶有酥脆口感，是非常適合分享的招牌海鮮菜。",desc_en:"Salt and Pepper Jumbo Shrimp is a flavorful Chinese seafood dish featuring large shrimp fried until golden and crisp, then tossed with salt-and-pepper seasoning, crispy garlic, green chili, and dried red chili. The shrimp are juicy and naturally sweet inside, with a savory, slightly spicy, and aromatic crispy coating.",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:24.95,priceText:"$24.95",color:"linear-gradient(135deg, #e74c3c, #c0392b)",image:"/images/G16.png",howToEat:"建議趁熱享用，先吃外層的蒜酥與椒鹽香氣，再品嚐蝦肉的鮮甜。可以單獨作為開胃菜，也很適合搭配白飯、炒飯或炒麵一起吃。若喜歡重口味，可以把盤中的蒜酥與辣椒一起配著蝦吃。",howToEat_en:"Best enjoyed hot while the shrimp are still crisp. Try the shrimp together with the fried garlic and chili pieces for extra aroma and flavor. It works well as an appetizer or as a main dish paired with steamed rice, fried rice, or noodles."},{id:"G17",displayId:"G17",category:"seafood",name:"清蒸鱸魚",name_en:"Steamed Sea Bass",desc:"清蒸鱸魚",desc_en:"Steamed whole sea bass",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:70.95,priceText:"$70.95",color:"linear-gradient(135deg, #2980b9, #3498db)",image:"/images/G17.png"},{id:"G18",displayId:"G18",category:"seafood",name:"薑蔥螃蟹",name_en:"Ginger Scallion Crab",desc:"薑蔥螃蟹",desc_en:"Crab with ginger and scallion",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:80,priceText:"$80.00",color:"linear-gradient(135deg, #e74c3c, #c0392b)",image:"/images/G18.png"},{id:"G19",displayId:"G19",category:"seafood",name:"薑蔥龍蝦",name_en:"Ginger Scallion Lobster",desc:"薑蔥龍蝦",desc_en:"Lobster with ginger and scallion",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:80,priceText:"$80.00",color:"linear-gradient(135deg, #c0392b, #96281b)",image:"/images/G19.png"},{id:"G20",displayId:"G20",category:"seafood",name:"蒜蓉粉絲龍蝦",name_en:"Lobster with Garlic Vermicelli",desc:"蒜蓉粉絲龍蝦",desc_en:"Lobster with garlic and vermicelli",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:100,priceText:"$100.00",color:"linear-gradient(135deg, #c0392b, #96281b)",image:"/images/G20.png"},{id:"G21",displayId:"G21",category:"seafood",name:"芝士龍蝦",name_en:"Cheese Lobster",desc:"芝士龍蝦",desc_en:"Cheese baked lobster",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:80,priceText:"$80.00",color:"linear-gradient(135deg, #f1c40f, #f39c12)",image:"/images/G21.png"},{id:"G22",displayId:"G22",category:"seafood",name:"酸菜魷魚",name_en:"Sour Cabbage Squid",desc:"酸菜魷魚",desc_en:"Squid with pickled cabbage",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:20.95,priceText:"$20.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/G22.png"},{id:"G23",displayId:"G23",category:"seafood",name:"什菜蝦",name_en:"Shrimp with Mixed Vegetables",desc:"什菜蝦",desc_en:"Shrimp with mixed vegetables",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:20.95,priceText:"$20.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/G23.png"},{id:"G24",displayId:"G24",category:"seafood",name:"椒鹽魚片",name_en:"Salt & Pepper Fish Fillet",desc:"椒鹽魚片",desc_en:"Salt and pepper fish fillet",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:20.95,priceText:"$20.95",color:"linear-gradient(135deg, #e67e22, #d35400)",image:"/images/G24.png"},{id:"G25",displayId:"G25",category:"seafood",name:"芥蘭蝦",name_en:"Shrimp with Chinese Broccoli",desc:"芥蘭蝦",desc_en:"Shrimp with Chinese broccoli",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:20.95,priceText:"$20.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/G25.png"},{id:"G26",displayId:"G26",category:"seafood",name:"蝦蓉芙蓉蛋",name_en:"Shrimp Egg Foo Young",desc:"蝦蓉芙蓉蛋",desc_en:"Shrimp egg foo young",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:20.95,priceText:"$20.95",color:"linear-gradient(135deg, #f1c40f, #f39c12)",image:"/images/G26.png"},{id:"G27",displayId:"G27",category:"seafood",name:"甜酸蝦",name_en:"Sweet & Sour Shrimp",desc:"甜酸蝦",desc_en:"Sweet and sour shrimp",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:20.95,priceText:"$20.95",color:"linear-gradient(135deg, #e74c3c, #f39c12)",image:"/images/G27.png"},{id:"G28",displayId:"G28",category:"seafood",name:"甜酸魚片",name_en:"Sweet & Sour Fish Fillet",desc:"甜酸魚片",desc_en:"Sweet and sour fish fillet",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:20.95,priceText:"$20.95",color:"linear-gradient(135deg, #e74c3c, #f39c12)",image:"/images/G28.png"},{id:"G29",displayId:"G29",category:"seafood",name:"什菜魚片",name_en:"Fish Fillet with Mixed Vegetables",desc:"什菜魚片",desc_en:"Fish fillet with mixed vegetables",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:20.95,priceText:"$20.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/G29.png"},{id:"G30",displayId:"G30",category:"seafood",name:"豆腐蒸魚片",name_en:"Steamed Fish Fillet with Tofu",desc:"豆腐蒸魚片",desc_en:"Steamed fish fillet with tofu",ingredients:{zh:["海鮮","蔬菜","主廚醬汁"],en:["Seafood","Vegetables","Chef sauce"]},price:20.95,priceText:"$20.95",color:"linear-gradient(135deg, #2980b9, #3498db)",image:"/images/G30.png"},{id:"H1",displayId:"H1",category:"beef",name:"陳皮牛肉",name_en:"Beef with Dried Tangerine Peel",desc:"陳皮牛肉",desc_en:"Beef with dried tangerine peel",ingredients:{zh:["牛肉","蔬菜","醬汁"],en:["Beef","Vegetables","Sauce"]},price:18.95,priceText:"$18.95",color:"linear-gradient(135deg, #8e44ad, #9b59b6)",image:"/images/H1.png"},{id:"H2",displayId:"H2",category:"beef",name:"蔥爆牛肉",name_en:"Beef with Scallion",desc:"蔥爆牛肉",desc_en:"Stir-fried beef with scallion",ingredients:{zh:["牛肉","蔬菜","醬汁"],en:["Beef","Vegetables","Sauce"]},price:18.95,priceText:"$18.95",color:"linear-gradient(135deg, #8e44ad, #9b59b6)",image:"/images/H2.png"},{id:"H3",displayId:"H3",category:"beef",name:"青椒牛肉",name_en:"Beef with Green Pepper",desc:"青椒牛肉",desc_en:"Beef with green bell pepper",ingredients:{zh:["牛肉","蔬菜","醬汁"],en:["Beef","Vegetables","Sauce"]},price:18.95,priceText:"$18.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/H3.png"},{id:"H4",displayId:"H4",category:"beef",name:"芥蘭牛肉",name_en:"Beef with Chinese Broccoli",desc:"芥蘭牛肉",desc_en:"Beef with Chinese broccoli",ingredients:{zh:["牛肉","蔬菜","醬汁"],en:["Beef","Vegetables","Sauce"]},price:18.95,priceText:"$18.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/H4.png"},{id:"H5",displayId:"H5",category:"beef",name:"四季豆牛肉",name_en:"Beef with String Beans",desc:"四季豆牛肉",desc_en:"Beef with string beans",ingredients:{zh:["牛肉","蔬菜","醬汁"],en:["Beef","Vegetables","Sauce"]},price:18.95,priceText:"$18.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/H5.png"},{id:"H6",displayId:"H6",category:"beef",name:"雙冬牛肉",name_en:"Beef with Mushroom & Bamboo",desc:"雙冬牛肉",desc_en:"Beef with mushroom and bamboo shoots",ingredients:{zh:["牛肉","蔬菜","醬汁"],en:["Beef","Vegetables","Sauce"]},price:18.95,priceText:"$18.95",color:"linear-gradient(135deg, #795548, #5d4037)",image:"/images/H6.png"},{id:"H7",displayId:"H7",category:"beef",name:"沙嗲牛肉",name_en:"Satay Beef",desc:"沙嗲牛肉",desc_en:"Satay beef",ingredients:{zh:["牛肉","蔬菜","醬汁"],en:["Beef","Vegetables","Sauce"]},price:18.95,priceText:"$18.95",color:"linear-gradient(135deg, #e67e22, #d35400)",image:"/images/H7.png"},{id:"H8",displayId:"H8",category:"beef",name:"中國芥蘭牛",name_en:"Beef with China Broccoli",desc:"中國芥蘭牛",desc_en:"Beef with China broccoli",ingredients:{zh:["牛肉","蔬菜","醬汁"],en:["Beef","Vegetables","Sauce"]},price:18.95,priceText:"$18.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/H8.png"},{id:"H9",displayId:"H9",category:"beef",name:"蒙古牛肉",name_en:"Mongolian Beef",desc:"蒙古牛肉",desc_en:"Mongolian beef",ingredients:{zh:["牛肉","蔬菜","醬汁"],en:["Beef","Vegetables","Sauce"]},price:18.95,priceText:"$18.95",color:"linear-gradient(135deg, #8e44ad, #9b59b6)",image:"/images/H9.png"},{id:"H10",displayId:"H10",category:"beef",name:"湖南牛肉",name_en:"Hunan Beef",desc:"湖南牛肉",desc_en:"Hunan style beef",ingredients:{zh:["牛肉","蔬菜","醬汁"],en:["Beef","Vegetables","Sauce"]},price:18.95,priceText:"$18.95",color:"linear-gradient(135deg, #e74c3c, #c0392b)",image:"/images/H10.png"},{id:"H11",displayId:"H11",category:"beef",name:"宮保牛肉",name_en:"Kung Pao Beef",desc:"宮保牛肉",desc_en:"Kung pao beef",ingredients:{zh:["牛肉","蔬菜","醬汁"],en:["Beef","Vegetables","Sauce"]},price:18.95,priceText:"$18.95",color:"linear-gradient(135deg, #e74c3c, #c0392b)",image:"/images/H11.png"},{id:"H12",displayId:"H12",category:"beef",name:"黑椒牛仔粒",name_en:"Black Pepper Beef Cubes",desc:"黑椒牛仔粒",desc_en:"Black pepper beef cubes",ingredients:{zh:["牛肉","蔬菜","醬汁"],en:["Beef","Vegetables","Sauce"]},price:18.95,priceText:"$18.95",color:"linear-gradient(135deg, #2c3e50, #34495e)",image:"/images/H12.png"},{id:"H13",displayId:"H13",category:"beef",name:"牛肉芙蓉蛋",name_en:"Beef Egg Foo Young",desc:"牛肉芙蓉蛋",desc_en:"Beef egg foo young",ingredients:{zh:["牛肉","蔬菜","醬汁"],en:["Beef","Vegetables","Sauce"]},price:18.95,priceText:"$18.95",color:"linear-gradient(135deg, #f1c40f, #f39c12)",image:"/images/H13.png"},{id:"H14",displayId:"H14",category:"beef",name:"什菜牛肉",name_en:"Beef with Mixed Vegetables",desc:"什菜牛肉",desc_en:"Beef with mixed vegetables",ingredients:{zh:["牛肉","蔬菜","醬汁"],en:["Beef","Vegetables","Sauce"]},price:18.95,priceText:"$18.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/H14.png"},{id:"H15",displayId:"H15",category:"beef",name:"長豆豆牛肉",name_en:"Beef with Long Beans",desc:"長豆豆牛肉",desc_en:"Beef with long beans",ingredients:{zh:["牛肉","蔬菜","醬汁"],en:["Beef","Vegetables","Sauce"]},price:18.95,priceText:"$18.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/H15.png"},{id:"H16",displayId:"H16",category:"beef",name:"空心菜牛肉",name_en:"Beef with Water Spinach",desc:"空心菜牛肉",desc_en:"Beef with water spinach",ingredients:{zh:["牛肉","蔬菜","醬汁"],en:["Beef","Vegetables","Sauce"]},price:18.95,priceText:"$18.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/H16.png"},{id:"H17",displayId:"H17",category:"beef",name:"苦瓜牛肉",name_en:"Beef with Bitter Melon",desc:"苦瓜牛肉",desc_en:"Beef with bitter melon",ingredients:{zh:["牛肉","蔬菜","醬汁"],en:["Beef","Vegetables","Sauce"]},price:18.95,priceText:"$18.95",color:"linear-gradient(135deg, #27ae60, #16a085)",image:"/images/H17.png"},{id:"I1",displayId:"I1",category:"chicken",name:"陳皮雞",name_en:"Chicken with Dried Tangerine Peel",desc:"陳皮雞",desc_en:"Chicken with dried tangerine peel",ingredients:{zh:["雞肉","蔬菜","醬汁"],en:["Chicken","Vegetables","Sauce"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #f39c12, #f1c40f)",image:"/images/I1.png"},{id:"I2",displayId:"I2",category:"chicken",name:"左宗雞",name_en:"General Tso's Chicken",desc:"左宗雞",desc_en:"General Tso's chicken",ingredients:{zh:["雞肉","蔬菜","醬汁"],en:["Chicken","Vegetables","Sauce"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #e74c3c, #c0392b)",image:"/images/I2.png"},{id:"I3",displayId:"I3",category:"chicken",name:"芝麻雞",name_en:"Sesame Chicken",desc:"芝麻雞",desc_en:"Sesame chicken",ingredients:{zh:["雞肉","蔬菜","醬汁"],en:["Chicken","Vegetables","Sauce"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #e67e22, #d35400)",image:"/images/I3.png"},{id:"I4",displayId:"I4",category:"chicken",name:"甜酸雞",name_en:"Sweet & Sour Chicken",desc:"甜酸雞",desc_en:"Sweet and sour chicken",ingredients:{zh:["雞肉","蔬菜","醬汁"],en:["Chicken","Vegetables","Sauce"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #e74c3c, #f39c12)",image:"/images/I4.png"},{id:"I5",displayId:"I5",category:"chicken",name:"宮保雞",name_en:"Kung Pao Chicken",desc:"宮保雞",desc_en:"Kung pao chicken",ingredients:{zh:["雞肉","蔬菜","醬汁"],en:["Chicken","Vegetables","Sauce"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #e74c3c, #c0392b)",image:"/images/I5.png"},{id:"I6",displayId:"I6",category:"chicken",name:"腰果雞",name_en:"Cashew Chicken",desc:"腰果雞",desc_en:"Cashew chicken",ingredients:{zh:["雞肉","蔬菜","醬汁"],en:["Chicken","Vegetables","Sauce"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #e67e22, #d35400)",image:"/images/I6.png"},{id:"I7",displayId:"I7",category:"chicken",name:"香茅雞",name_en:"Lemongrass Chicken",desc:"香茅雞",desc_en:"Lemongrass chicken",ingredients:{zh:["雞肉","蔬菜","醬汁"],en:["Chicken","Vegetables","Sauce"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/I7.png"},{id:"I8",displayId:"I8",category:"chicken",name:"什菜雞",name_en:"Chicken with Mixed Vegetables",desc:"什菜雞",desc_en:"Chicken with mixed vegetables",ingredients:{zh:["雞肉","蔬菜","醬汁"],en:["Chicken","Vegetables","Sauce"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/I8.png"},{id:"I9",displayId:"I9",category:"chicken",name:"辣子雞丁",name_en:"Szechuan Spicy Diced Chicken",desc:"辣子雞丁",desc_en:"Szechuan spicy diced chicken",ingredients:{zh:["雞肉","蔬菜","醬汁"],en:["Chicken","Vegetables","Sauce"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #e74c3c, #c0392b)",image:"/images/I9.png"},{id:"I10",displayId:"I10",category:"chicken",name:"中國芥藍雞",name_en:"Chicken with China Broccoli",desc:"中國芥藍雞",desc_en:"Chicken with China broccoli",ingredients:{zh:["雞肉","蔬菜","醬汁"],en:["Chicken","Vegetables","Sauce"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/I10.png"},{id:"I11",displayId:"I11",category:"chicken",name:"蒙古雞",name_en:"Mongolian Chicken",desc:"蒙古雞",desc_en:"Mongolian chicken",ingredients:{zh:["雞肉","蔬菜","醬汁"],en:["Chicken","Vegetables","Sauce"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #8e44ad, #9b59b6)",image:"/images/I11.png"},{id:"I12",displayId:"I12",category:"chicken",name:"湖南雞",name_en:"Hunan Chicken",desc:"湖南雞",desc_en:"Hunan style chicken",ingredients:{zh:["雞肉","蔬菜","醬汁"],en:["Chicken","Vegetables","Sauce"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #e74c3c, #c0392b)",image:"/images/I12.png"},{id:"I13",displayId:"I13",category:"chicken",name:"四季豆雞",name_en:"Chicken with String Beans",desc:"四季豆雞",desc_en:"Chicken with string beans",ingredients:{zh:["雞肉","蔬菜","醬汁"],en:["Chicken","Vegetables","Sauce"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/I13.png"},{id:"I14",displayId:"I14",category:"chicken",name:"魚香雞",name_en:"Chicken with Garlic Sauce",desc:"魚香雞",desc_en:"Chicken with fish-fragrant sauce",ingredients:{zh:["雞肉","蔬菜","醬汁"],en:["Chicken","Vegetables","Sauce"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #e67e22, #f39c12)",image:"/images/I14.png"},{id:"I15",displayId:"I15",category:"chicken",name:"鹽酥雞",name_en:"Taiwanese Salt & Pepper Chicken",desc:"鹽酥雞",desc_en:"Taiwanese style salt and pepper chicken",ingredients:{zh:["雞肉","蔬菜","醬汁"],en:["Chicken","Vegetables","Sauce"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #e67e22, #d35400)",image:"/images/I15.png"},{id:"J1",displayId:"J1",category:"bbq",name:"明爐燒鴨半隻",name_en:"Roast Duck Half",desc:"明爐燒鴨半隻",desc_en:"Roast duck, half",ingredients:{zh:["燒臘主食","醬汁","配菜"],en:["BBQ entrée","Sauce","Side vegetables"]},price:20.95,priceText:"$20.95",color:"linear-gradient(135deg, #d35400, #e67e22)",image:"/images/J1.png"},{id:"J2",displayId:"J2",category:"bbq",name:"明爐燒鴨全隻",name_en:"Roast Duck Whole",desc:"明爐燒鴨全隻",desc_en:"Roast duck, whole",ingredients:{zh:["燒臘主食","醬汁","配菜"],en:["BBQ entrée","Sauce","Side vegetables"]},price:39.95,priceText:"$39.95",color:"linear-gradient(135deg, #d35400, #e67e22)",image:"/images/J2.png"},{id:"J3",displayId:"J3",category:"bbq",name:"蜜汁叉燒",name_en:"Honey BBQ Pork",desc:"蜜汁叉燒",desc_en:"Honey glazed BBQ pork",ingredients:{zh:["燒臘主食","醬汁","配菜"],en:["BBQ entrée","Sauce","Side vegetables"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #c0392b, #96281b)",image:"/images/J3.png"},{id:"J4",displayId:"J4",category:"bbq",name:"燒鴨油雞",name_en:"Roast Duck & Chicken",desc:"燒鴨油雞",desc_en:"Roast duck and soy sauce chicken",ingredients:{zh:["燒臘主食","醬汁","配菜"],en:["BBQ entrée","Sauce","Side vegetables"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #d35400, #e67e22)",image:"/images/J4.png"},{id:"J5",displayId:"J5",category:"bbq",name:"三拼燒臘",name_en:"BBQ Triple Combo",desc:"三拼燒臘",desc_en:"BBQ triple combo platter",ingredients:{zh:["燒臘主食","醬汁","配菜"],en:["BBQ entrée","Sauce","Side vegetables"]},price:20.95,priceText:"$20.95",color:"linear-gradient(135deg, #e74c3c, #c0392b)",image:"/images/J5.png"},{id:"J6",displayId:"J6",category:"bbq",name:"叉燒油雞",name_en:"Soy Sauce Chicken & Char Siu BBQ Pork",desc:"經典港式燒臘雙拼，將香嫩油雞與蜜汁叉燒搭配在同一盤中。油雞皮色金黃油亮，肉質鮮嫩多汁，帶有淡淡醬香；叉燒外層紅亮焦香，口感帶甜鹹蜜汁風味。兩種燒臘一次享用，風味豐富，是非常適合配飯的經典主菜。",desc_en:"A classic Cantonese barbecue combo featuring tender soy sauce chicken and sweet glazed char siu BBQ pork. The chicken has glossy golden skin with juicy, flavorful meat, while the char siu is caramelized, savory, and slightly sweet. This combination offers two signature roast flavors on one plate and pairs perfectly with rice.",ingredients:{zh:["燒臘主食","醬汁","配菜"],en:["BBQ entrée","Sauce","Side vegetables"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #c0392b, #96281b)",image:"/images/J6.png",howToEat:"建議搭配白飯一起享用，可將盤中的醬汁淋在飯上，讓米飯吸收油雞與叉燒的香氣。也可以搭配青菜或湯品，作為完整的一餐。",howToEat_en:"Best served with steamed rice. Spoon the savory sauce over the rice to enjoy the rich flavor from both the chicken and char siu. It also pairs well with vegetables or soup for a complete meal."},{id:"J7",displayId:"J7",category:"bbq",name:"叉燒燒鴨",name_en:"Roast Duck & Char Siu BBQ Pork",desc:"經典港式燒臘雙拼，將香氣濃郁的燒鴨與蜜汁叉燒搭配在一起。燒鴨外皮油亮焦香，肉質鮮嫩多汁，帶有濃厚的烤香與醬汁風味；叉燒色澤紅亮，口感軟嫩，甜鹹交融並帶有微微焦糖香。兩種經典燒臘一次享用，風味豐富，非常適合搭配白飯。",desc_en:"A classic Cantonese barbecue combo featuring roasted duck and char siu BBQ pork. The roast duck has glossy, flavorful skin with tender and juicy meat, while the char siu is sweet, savory, and caramelized with a rich red glaze. This two-meat combination offers a satisfying variety of classic Cantonese roast flavors and pairs perfectly with steamed rice.",ingredients:{zh:["燒臘主食","醬汁","配菜"],en:["BBQ entrée","Sauce","Side vegetables"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #c0392b, #96281b)",image:"/images/J7.png",howToEat:"建議搭配白飯享用，可將盤中的燒臘醬汁淋在飯上，讓米飯吸收燒鴨與叉燒的香氣。也很適合搭配青菜、湯品或炒麵一起享用，作為完整的一餐。",howToEat_en:"Best served with steamed rice. Spoon the savory roast meat sauce over the rice for extra flavor. It also pairs well with vegetables, soup, or fried noodles for a complete meal."},{id:"J9",displayId:"J9",category:"bbq",name:"貴妃雞半隻",name_en:"Soy Sauce Chicken — Half Chicken",desc:"經典港式油雞，選用約半隻雞切件上桌，份量適合 2–3 人分享。雞皮金黃油亮，肉質鮮嫩多汁，帶有淡淡醬香與雞肉本身的鮮甜。搭配特製薑汁一起享用，能提升香氣，也讓整體口感更清爽。",desc_en:"A classic Cantonese soy sauce chicken served as a half-chicken portion, perfect for sharing between 2–3 people. The chicken features glossy golden skin, tender juicy meat, and a light savory soy aroma. Served with house ginger sauce to enhance the flavor and add a refreshing aromatic touch.",ingredients:{zh:["燒臘主食","醬汁","配菜"],en:["BBQ entrée","Sauce","Side vegetables"]},price:20.95,priceText:"$20.95",color:"linear-gradient(135deg, #f39c12, #f1c40f)",image:"/images/J9.png",howToEat:"建議沾少量薑汁一起吃，薑香能帶出油雞的鮮味。也很適合搭配白飯，將雞汁與薑汁拌入飯中，風味更香。",howToEat_en:"Dip each piece lightly in the ginger sauce to bring out the chicken’s natural flavor. It also pairs perfectly with steamed rice, especially with a little chicken sauce and ginger sauce mixed in."},{id:"J10",displayId:"J10",category:"bbq",name:"貴妃雞全隻",name_en:"Soy Sauce Chicken — Whole Chicken",desc:"經典港式油雞全隻版本，份量充足，適合家庭聚餐或多人分享。整隻雞切件後擺盤，保留雞腿、雞翅、雞胸等不同部位的口感。雞皮油亮滑嫩，肉質鮮甜多汁，搭配薑汁後香氣更突出，是宴客或多人用餐很受歡迎的主菜選擇。",desc_en:"A whole Cantonese soy sauce chicken, generously portioned and ideal for family meals or group sharing. The chicken is chopped and plated with a variety of cuts, including leg, wing, and breast pieces. The glossy skin, tender meat, and savory aroma pair beautifully with ginger sauce, making it a popular centerpiece for gatherings.",ingredients:{zh:["燒臘主食","醬汁","配菜"],en:["BBQ entrée","Sauce","Side vegetables"]},price:39.95,priceText:"$39.95",color:"linear-gradient(135deg, #f39c12, #f1c40f)",image:"/images/J10.png",howToEat:"可依喜好選擇不同部位享用：雞腿肉較嫩滑，雞胸肉較清爽，雞翅香味較濃。建議搭配白飯、炒麵、青菜或湯品，作為完整的一桌餐點。",howToEat_en:"Enjoy different cuts based on preference: leg meat is tender and juicy, breast meat is lighter, and wings have a richer flavor. Best paired with steamed rice, fried noodles, vegetables, or soup for a complete shared meal."},{id:"J13",displayId:"J13",category:"bbq",name:"蔥油雞半隻",name_en:"Scallion Oil Chicken Half",desc:"蔥油雞半隻",desc_en:"Scallion oil chicken, half",ingredients:{zh:["燒臘主食","醬汁","配菜"],en:["BBQ entrée","Sauce","Side vegetables"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/J13.png"},{id:"J14",displayId:"J14",category:"bbq",name:"蔥油雞全隻",name_en:"Scallion Oil Chicken Whole",desc:"蔥油雞全隻",desc_en:"Scallion oil chicken, whole",ingredients:{zh:["燒臘主食","醬汁","配菜"],en:["BBQ entrée","Sauce","Side vegetables"]},price:29.95,priceText:"$29.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/J14.png"},{id:"J15",displayId:"J15",category:"bbq",name:"手撕雞",name_en:"Shredded Chicken",desc:"手撕雞",desc_en:"Hand-shredded chicken",ingredients:{zh:["燒臘主食","醬汁","配菜"],en:["BBQ entrée","Sauce","Side vegetables"]},price:50.95,priceText:"$50.95",color:"linear-gradient(135deg, #f39c12, #f1c40f)",image:"/images/J15.png"},{id:"J16",displayId:"J16",category:"bbq",name:"炸子雞",name_en:"Fried Whole Chicken",desc:"炸子雞",desc_en:"Deep-fried whole chicken",ingredients:{zh:["燒臘主食","醬汁","配菜"],en:["BBQ entrée","Sauce","Side vegetables"]},price:35.95,priceText:"$35.95",color:"linear-gradient(135deg, #e67e22, #d35400)",image:"/images/J16.png"},{id:"J17",displayId:"J17",category:"bbq",name:"蜜汁肋排",name_en:"Honey BBQ Spare Ribs",desc:"蜜汁肋排",desc_en:"Honey glazed BBQ spare ribs",ingredients:{zh:["燒臘主食","醬汁","配菜"],en:["BBQ entrée","Sauce","Side vegetables"]},price:26.95,priceText:"$26.95",color:"linear-gradient(135deg, #c0392b, #96281b)",image:"/images/J17.png"},{id:"V1",displayId:"V1",category:"vegetable",name:"脆皮炸豆腐",name_en:"Crispy Fried Tofu",desc:"脆皮炸豆腐",desc_en:"Crispy fried tofu",ingredients:{zh:["時蔬","蒜蓉或醬汁","豆腐可選"],en:["Seasonal vegetables","Garlic or sauce","Tofu optional"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #f39c12, #f1c40f)",image:"/images/V1.png"},{id:"V2",displayId:"V2",category:"vegetable",name:"北菇扒菜膽",name_en:"Mushroom with Vegetables",desc:"北菇扒菜膽",desc_en:"Mushroom with bok choy",ingredients:{zh:["時蔬","蒜蓉或醬汁","豆腐可選"],en:["Seasonal vegetables","Garlic or sauce","Tofu optional"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/V2.png"},{id:"V3",displayId:"V3",category:"vegetable",name:"干扁四季豆",name_en:"Dry-Fried Green Beans",desc:"四季豆經高溫快炒至外層微微皺香，搭配蒜末與鹹香調味拌炒，口感爽脆中帶有焦香。這道菜風味濃郁、香氣十足，是非常下飯的經典蔬菜料理。",desc_en:"Fresh green beans are dry-fried until lightly blistered and fragrant, then tossed with minced garlic and savory seasonings. The result is crisp, aromatic, and full of flavor, making it a classic vegetable dish that pairs perfectly with rice.",ingredients:{zh:["時蔬","蒜蓉或醬汁","豆腐可選"],en:["Seasonal vegetables","Garlic or sauce","Tofu optional"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/V3.png",howToEat:"建議搭配白飯一起享用，能平衡鹹香風味。可作為配菜，也很適合與炒飯、炒麵或其他主菜一起搭配。",howToEat_en:"Best served with steamed rice to balance the savory flavor. Enjoy it as a side dish or pair it with fried rice, noodles, or other entrées."},{id:"V4",displayId:"V4",category:"vegetable",name:"家常豆腐",name_en:"Home-Style Tofu",desc:"家常豆腐",desc_en:"Home-style tofu",ingredients:{zh:["時蔬","蒜蓉或醬汁","豆腐可選"],en:["Seasonal vegetables","Garlic or sauce","Tofu optional"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #f39c12, #f1c40f)",image:"/images/V4.png"},{id:"V5",displayId:"V5",category:"vegetable",name:"麻婆豆腐",name_en:"Mapo Tofu",desc:"麻婆豆腐",desc_en:"Mapo tofu",ingredients:{zh:["時蔬","蒜蓉或醬汁","豆腐可選"],en:["Seasonal vegetables","Garlic or sauce","Tofu optional"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #e74c3c, #c0392b)",image:"/images/V5.png"},{id:"V6",displayId:"V6",category:"vegetable",name:"魚香茄子",name_en:"Eggplant with Garlic Sauce",desc:"魚香茄子",desc_en:"Eggplant with fish-fragrant sauce",ingredients:{zh:["時蔬","蒜蓉或醬汁","豆腐可選"],en:["Seasonal vegetables","Garlic or sauce","Tofu optional"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #8e44ad, #9b59b6)",image:"/images/V6.png"},{id:"V7",displayId:"V7",category:"vegetable",name:"素什錦",name_en:"Mixed Vegetables",desc:"素什錦",desc_en:"Stir-fried mixed vegetables",ingredients:{zh:["時蔬","蒜蓉或醬汁","豆腐可選"],en:["Seasonal vegetables","Garlic or sauce","Tofu optional"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/V7.png"},{id:"V8",displayId:"V8",category:"vegetable",name:"玉子豆腐",name_en:"Japanese Tofu",desc:"玉子豆腐",desc_en:"Japanese egg tofu",ingredients:{zh:["時蔬","蒜蓉或醬汁","豆腐可選"],en:["Seasonal vegetables","Garlic or sauce","Tofu optional"]},price:18.95,priceText:"$18.95",color:"linear-gradient(135deg, #f1c40f, #f39c12)",image:"/images/V8.png"},{id:"V9",displayId:"V9",category:"vegetable",name:"椒鹽豆腐",name_en:"Salt & Pepper Tofu",desc:"椒鹽豆腐",desc_en:"Salt and pepper tofu",ingredients:{zh:["時蔬","蒜蓉或醬汁","豆腐可選"],en:["Seasonal vegetables","Garlic or sauce","Tofu optional"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #e67e22, #d35400)",image:"/images/V9.png"},{id:"V10",displayId:"V10",category:"vegetable",name:"蒜蓉豆苗",name_en:"Garlic Pea Shoots",desc:"蒜蓉豆苗",desc_en:"Garlic pea shoots",ingredients:{zh:["時蔬","蒜蓉或醬汁","豆腐可選"],en:["Seasonal vegetables","Garlic or sauce","Tofu optional"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/V10.png"},{id:"V11",displayId:"V11",category:"vegetable",name:"蒜蓉空心菜",name_en:"Garlic Water Spinach",desc:"蒜蓉空心菜",desc_en:"Garlic water spinach",ingredients:{zh:["時蔬","蒜蓉或醬汁","豆腐可選"],en:["Seasonal vegetables","Garlic or sauce","Tofu optional"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/V11.png"},{id:"V12",displayId:"V12",category:"vegetable",name:"腐乳空心菜",name_en:"Fermented Tofu Water Spinach",desc:"腐乳空心菜",desc_en:"Water spinach with fermented tofu",ingredients:{zh:["時蔬","蒜蓉或醬汁","豆腐可選"],en:["Seasonal vegetables","Garlic or sauce","Tofu optional"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #27ae60, #16a085)",image:"/images/V12.png"},{id:"V13",displayId:"V13",category:"vegetable",name:"蒜蓉青江菜",name_en:"Garlic Bok Choy",desc:"蒜蓉青江菜",desc_en:"Garlic bok choy",ingredients:{zh:["時蔬","蒜蓉或醬汁","豆腐可選"],en:["Seasonal vegetables","Garlic or sauce","Tofu optional"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/V13.png"},{id:"V14",displayId:"V14",category:"vegetable",name:"蒜蓉菠菜",name_en:"Garlic Spinach",desc:"蒜蓉菠菜",desc_en:"Garlic spinach",ingredients:{zh:["時蔬","蒜蓉或醬汁","豆腐可選"],en:["Seasonal vegetables","Garlic or sauce","Tofu optional"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/V14.png"},{id:"V15",displayId:"V15",category:"vegetable",name:"蒜蓉手撕高麗菜",name_en:"Garlic Torn Cabbage",desc:"蒜蓉手撕高麗菜",desc_en:"Garlic torn cabbage",ingredients:{zh:["時蔬","蒜蓉或醬汁","豆腐可選"],en:["Seasonal vegetables","Garlic or sauce","Tofu optional"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/V15.png"},{id:"V16",displayId:"V16",category:"vegetable",name:"水煮青菜",name_en:"Boiled Vegetables",desc:"水煮青菜",desc_en:"Blanched vegetables",ingredients:{zh:["時蔬","蒜蓉或醬汁","豆腐可選"],en:["Seasonal vegetables","Garlic or sauce","Tofu optional"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/V16.png"},{id:"V17",displayId:"V17",category:"vegetable",name:"紅燒茄子",name_en:"Braised Eggplant",desc:"紅燒茄子",desc_en:"Braised eggplant",ingredients:{zh:["時蔬","蒜蓉或醬汁","豆腐可選"],en:["Seasonal vegetables","Garlic or sauce","Tofu optional"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #8e44ad, #9b59b6)",image:"/images/V17.png"},{id:"V18",displayId:"V18",category:"vegetable",name:"青菜芙蓉蛋",name_en:"Vegetable Egg Foo Young",desc:"青菜芙蓉蛋",desc_en:"Vegetable egg foo young",ingredients:{zh:["時蔬","蒜蓉或醬汁","豆腐可選"],en:["Seasonal vegetables","Garlic or sauce","Tofu optional"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #f1c40f, #f39c12)",image:"/images/V18.png"},{id:"V19",displayId:"V19",category:"vegetable",name:"蠔油芥藍",name_en:"Chinese Broccoli in Oyster Sauce",desc:"蠔油芥藍",desc_en:"Chinese broccoli in oyster sauce",ingredients:{zh:["時蔬","蒜蓉或醬汁","豆腐可選"],en:["Seasonal vegetables","Garlic or sauce","Tofu optional"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/V19.png"},{id:"V20",displayId:"V20",category:"vegetable",name:"蒜蓉芥藍",name_en:"Garlic Chinese Broccoli",desc:"蒜蓉芥藍",desc_en:"Garlic Chinese broccoli",ingredients:{zh:["時蔬","蒜蓉或醬汁","豆腐可選"],en:["Seasonal vegetables","Garlic or sauce","Tofu optional"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/V20.png"},{id:"V21",displayId:"V21",category:"vegetable",name:"蒜蓉A菜",name_en:"Garlic Lettuce",desc:"蒜蓉A菜",desc_en:"Garlic lettuce",ingredients:{zh:["時蔬","蒜蓉或醬汁","豆腐可選"],en:["Seasonal vegetables","Garlic or sauce","Tofu optional"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/V21.png"},{id:"V22",displayId:"V22",category:"vegetable",name:"腐乳A菜",name_en:"Fermented Tofu Lettuce",desc:"腐乳A菜",desc_en:"Lettuce with fermented tofu",ingredients:{zh:["時蔬","蒜蓉或醬汁","豆腐可選"],en:["Seasonal vegetables","Garlic or sauce","Tofu optional"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #27ae60, #16a085)",image:"/images/V22.png"},{id:"V23",displayId:"V23",category:"vegetable",name:"蒜蓉四季豆",name_en:"Garlic String Beans",desc:"蒜蓉四季豆",desc_en:"Garlic string beans",ingredients:{zh:["時蔬","蒜蓉或醬汁","豆腐可選"],en:["Seasonal vegetables","Garlic or sauce","Tofu optional"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/V23.png"},{id:"V24",displayId:"V24",category:"vegetable",name:"苦瓜煎蛋",name_en:"Bitter Melon Omelette",desc:"苦瓜煎蛋",desc_en:"Bitter melon omelette",ingredients:{zh:["時蔬","蒜蓉或醬汁","豆腐可選"],en:["Seasonal vegetables","Garlic or sauce","Tofu optional"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #f1c40f, #f39c12)",image:"/images/V24.png"},{id:"V25",displayId:"V25",category:"vegetable",name:"番茄炒蛋",name_en:"Tomato Egg Stir-Fry",desc:"番茄炒蛋",desc_en:"Stir-fried tomato and egg",ingredients:{zh:["時蔬","蒜蓉或醬汁","豆腐可選"],en:["Seasonal vegetables","Garlic or sauce","Tofu optional"]},price:15.95,priceText:"$15.95",color:"linear-gradient(135deg, #e74c3c, #f39c12)",image:"/images/V25.png"},{id:"P1",displayId:"P1",category:"pork",name:"魚香肉絲",name_en:"Shredded Pork with Garlic Sauce",desc:"魚香肉絲",desc_en:"Shredded pork with fish-fragrant sauce",ingredients:{zh:["豬肉","蔬菜","醬汁","白飯可另點"],en:["Pork","Vegetables","Sauce","Rice available separately"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #e67e22, #f39c12)",image:"/images/P1.png"},{id:"P2",displayId:"P2",category:"pork",name:"椒鹽排骨",name_en:"Salt & Pepper Spare Ribs",desc:"椒鹽排骨",desc_en:"Salt and pepper spare ribs",ingredients:{zh:["豬肉","蔬菜","醬汁","白飯可另點"],en:["Pork","Vegetables","Sauce","Rice available separately"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #e67e22, #d35400)",image:"/images/P2.png"},{id:"P3",displayId:"P3",category:"pork",name:"京都排骨",name_en:"Peking Spare Ribs",desc:"京都排骨",desc_en:"Peking style spare ribs",ingredients:{zh:["豬肉","蔬菜","醬汁","白飯可另點"],en:["Pork","Vegetables","Sauce","Rice available separately"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #c0392b, #96281b)",image:"/images/P3.png"},{id:"P4",displayId:"P4",category:"pork",name:"香干肉絲",name_en:"Shredded Pork with Dried Tofu",desc:"香干肉絲",desc_en:"Shredded pork with dried tofu",ingredients:{zh:["豬肉","蔬菜","醬汁","白飯可另點"],en:["Pork","Vegetables","Sauce","Rice available separately"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #795548, #5d4037)",image:"/images/P4.png"},{id:"P5",displayId:"P5",category:"pork",name:"回鍋肉",name_en:"Twice-Cooked Pork",desc:"回鍋肉",desc_en:"Twice-cooked pork",ingredients:{zh:["豬肉","蔬菜","醬汁","白飯可另點"],en:["Pork","Vegetables","Sauce","Rice available separately"]},price:16.95,priceText:"$16.95",color:"linear-gradient(135deg, #e74c3c, #c0392b)",image:"/images/P5.png"},{id:"DR1",displayId:"",category:"drinks",name:"瓶裝汽水",name_en:"Bottled Soda",desc:"可口可樂/雪碧/零卡",desc_en:"Coke / Sprite / Diet Coke",ingredients:{zh:["飲品","冰塊可調整"],en:["Beverage","Ice level adjustable"]},price:2.5,priceText:"$2.50",color:"linear-gradient(135deg, #e74c3c, #c0392b)",image:"/images/DR1.png"},{id:"DR2",displayId:"",category:"drinks",name:"罐裝汽水",name_en:"Canned Soda",desc:"可口可樂/雪碧/零卡",desc_en:"Coke / Sprite / Diet Coke",ingredients:{zh:["飲品","冰塊可調整"],en:["Beverage","Ice level adjustable"]},price:1.5,priceText:"$1.50",color:"linear-gradient(135deg, #e74c3c, #c0392b)",image:"/images/DR2.png"},{id:"DR3",displayId:"",category:"drinks",name:"瓶裝冰茶",name_en:"Bottled Iced Tea",desc:"瓶裝冰茶",desc_en:"Bottled iced tea",ingredients:{zh:["飲品","冰塊可調整"],en:["Beverage","Ice level adjustable"]},price:2.75,priceText:"$2.75",color:"linear-gradient(135deg, #f39c12, #e67e22)",image:"/images/DR3.png"},{id:"DR4",displayId:"",category:"drinks",name:"冰紅茶",name_en:"Iced Black Tea",desc:"冰紅茶",desc_en:"Iced black tea",ingredients:{zh:["飲品","冰塊可調整"],en:["Beverage","Ice level adjustable"]},price:2,priceText:"$2.00",color:"linear-gradient(135deg, #f39c12, #e67e22)",image:"/images/DR4.png"},{id:"DR5",displayId:"",category:"drinks",name:"熱茶",name_en:"Hot Tea",desc:"熱茶",desc_en:"Hot tea",ingredients:{zh:["飲品","冰塊可調整"],en:["Beverage","Ice level adjustable"]},price:2.5,priceText:"$2.50",color:"linear-gradient(135deg, #27ae60, #2ecc71)",image:"/images/DR5.png"},{id:"DR6",displayId:"",category:"drinks",name:"茉莉花茶",name_en:"Jasmine Tea",desc:"茉莉花茶",desc_en:"Jasmine tea",ingredients:{zh:["飲品","冰塊可調整"],en:["Beverage","Ice level adjustable"]},price:2.5,priceText:"$2.50",color:"linear-gradient(135deg, #27ae60, #16a085)",image:"/images/DR6.png"},{id:"DR7",displayId:"",category:"drinks",name:"菊花茶",name_en:"Chrysanthemum Tea",desc:"菊花茶",desc_en:"Chrysanthemum tea",ingredients:{zh:["飲品","冰塊可調整"],en:["Beverage","Ice level adjustable"]},price:2.5,priceText:"$2.50",color:"linear-gradient(135deg, #f1c40f, #f39c12)",image:"/images/DR7.png"}],Ji=Ct`
window.menuCategories = ${JSON.stringify(Um,null,12)};
window.menuItems = ${JSON.stringify(Gm,null,12)};
`,zr=Ct`
(function(){
    function zhDisplay(value) {
        return (window.currentLang === 'en') ? value : (window.formatDisplayText ? window.formatDisplayText(value) : value);
    }

    function escapeHtml(value) {
        return String(value || '').replace(/[&<>'"]/g, function(char) {
            return { '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#039;', '"':'&quot;' }[char];
        });
    }

    function getLocalizedValue(value, fallback) {
        var lang = window.currentLang || 'zh';
        var raw = '';
        if (value && typeof value === 'object' && !Array.isArray(value)) {
            raw = value[lang] || value.zh || value.en || fallback || '';
        } else {
            raw = value || fallback || '';
        }
        return lang === 'en' ? raw : zhDisplay(raw);
    }

    function getItemName(item) {
        if (!item) return '';
        return (window.currentLang === 'en')
            ? (item.name_en || getLocalizedValue(item.name_i18n, item.name))
            : getLocalizedValue(item.name_i18n, item.name);
    }

    function getItemDesc(item) {
        if (!item) return '';
        var fallbackZh = item.desc || item.name || '';
        var fallbackEn = item.desc_en || item.name_en || fallbackZh;
        return (window.currentLang === 'en')
            ? (item.desc_en || getLocalizedValue(item.desc_i18n, fallbackEn))
            : getLocalizedValue(item.desc_i18n, fallbackZh);
    }

    function getItemHowToEat(item) {
        if (!item) return '';
        var fallbackZh = item.howToEat || '';
        var fallbackEn = item.howToEat_en || fallbackZh;
        return (window.currentLang === 'en')
            ? (item.howToEat_en || getLocalizedValue(item.howToEat_i18n, fallbackEn))
            : getLocalizedValue(item.howToEat_i18n, fallbackZh);
    }

    function getItemIngredients(item) {
        var lang = window.currentLang || 'zh';
        if (item && item.ingredients) {
            if (Array.isArray(item.ingredients)) return item.ingredients;
            return item.ingredients[lang] || item.ingredients.zh || item.ingredients.en || [];
        }
        if (item && item.ingredients_i18n) {
            return item.ingredients_i18n[lang] || item.ingredients_i18n.zh || item.ingredients_i18n.en || [];
        }
        return [];
    }

    function getCategoryMeta(catKey) {
        var categories = window.menuCategories || [];
        return categories.find(function(cat) { return cat.key === catKey; }) || { key: catKey, icon: '📋', zh: catKey || '菜品', en: catKey || 'Dish' };
    }

    function getCategoryLabel(cat) {
        if (!cat) return '';
        return (window.currentLang === 'en') ? (cat.en || cat.key || '') : zhDisplay(cat.zh || cat.key || '');
    }

    function getAiImageNoteText() {
        return (window.currentLang === 'en') ? 'AI refined from real photo' : zhDisplay('基於真實照片讓AI微調');
    }

    function getNoDishesText() {
        return (window.currentLang === 'en') ? 'No dishes in this category yet.' : zhDisplay('此分類目前沒有菜品');
    }

    function getDishDetailHintText() {
        return (window.currentLang === 'en') ? 'Click to view dish details' : zhDisplay('點選查看菜品介紹');
    }

    Object.assign(window, {
        zhDisplay: zhDisplay,
        escapeHtml: escapeHtml,
        getLocalizedValue: getLocalizedValue,
        getItemName: getItemName,
        getItemDesc: getItemDesc,
        getItemHowToEat: getItemHowToEat,
        getItemIngredients: getItemIngredients,
        getCategoryMeta: getCategoryMeta,
        getCategoryLabel: getCategoryLabel,
        getAiImageNoteText: getAiImageNoteText,
        getNoDishesText: getNoDishesText,
        getDishDetailHintText: getDishDetailHintText
    });
})();
`,Qm=He`
<a class="logo brand-logo brand-logo-nav" href="#/" aria-label="Awesome Restaurant Home">
  <img class="brand-logo-img" src="/images/awesome-food-logo.png" alt="Awesome restaurant food graphic" />
  <span class="brand-logo-text">
    <span class="brand-logo-title">Awesome</span>
    <span class="brand-logo-subtitle brand-logo-subtitle-zh">五餅二魚</span>
    <span class="brand-logo-subtitle brand-logo-subtitle-en">Authentic Chinese Cuisine</span>
  </span>
</a>`,Wm=He`<nav class="navbar">
<div class="container">
${Qm}
<div class="nav-links">
<a data-i18n="nav_home" href="#/">首頁</a>
<a data-i18n="nav_menu" href="#/menu">菜單</a>
<a data-i18n="nav_search" href="#/search">搜尋</a>
<a data-i18n="nav_reservation" href="#/reservation">訂位</a>
<a data-i18n="nav_order" href="#/cart">點餐</a>
<a data-i18n="nav_about" href="#/about">關於我們</a>
<a data-i18n="nav_promo" href="#/promotions">優惠活動</a>
</div>
<div class="nav-actions">
<div class="chinese-variant-switcher" aria-label="Chinese text style switcher">
  <button class="chinese-variant-toggle" type="button" data-language-control="variant-menu" onclick="toggleChineseVariantMenu(event)">
    <span class="chinese-variant-label">简体</span>
    <span class="chinese-variant-arrow">▾</span>
  </button>
  <div class="chinese-variant-menu">
    <button type="button" data-chinese-variant="zh-cn" onclick="setChineseVariant('zh-cn')">简体</button>
    <button type="button" data-chinese-variant="zh-yue" onclick="setChineseVariant('zh-yue')">廣東字</button>
    <button type="button" data-chinese-variant="zh-tw" onclick="setChineseVariant('zh-tw')">繁體</button>
  </div>
</div>
<button class="lang-toggle" type="button" data-language-control="toggle-lang" onclick="toggleLang()">EN</button>
<a class="btn-member" data-i18n="nav_member" href="#/member">會員</a>
<button class="mobile-menu-btn" onclick="toggleMobileMenu()">☰</button>
</div>
</div>
</nav>`;function _t(l="default"){return Wm}function Jm(l){const d=l==="home";return He`<footer class="footer">
<div class="container">
<div class="footer-grid">
<div class="footer-col">
<h3 data-i18n="footer_brand">餐廳品牌</h3>
<p data-i18n="footer_desc">用心準備每一道料理，為您帶來難忘的美食體驗</p>
</div>
<div class="footer-col">
<h3 data-i18n="footer_menu">快速連結</h3>
<a data-i18n="nav_menu" href="#/menu">菜單</a>
<a data-i18n="nav_reservation" href="#/reservation">訂位</a>
<a data-i18n="nav_order" href="#/cart">點餐</a>
${d?He`<a data-i18n="nav_promo" href="#/promotions">優惠活動</a>`:""}
</div>
<div class="footer-col">
<h3 data-i18n="footer_contact">聯絡資訊</h3>
<p>📍 1520 Independence Pkwy, Plano, TX 75075</p>
<p>📞 972-985-8899 / 945-361-3394</p>
${d?He`<p>✉️ info@restaurant.com</p>`:""}
</div>
<div class="footer-col">
<h3 data-i18n="footer_hours">營業時間</h3>
<p data-i18n="footer_hours_detail">週一至週日 11:00 - 21:00（週二公休，20:30 最後點餐）</p>
</div>
</div>
<div class="footer-bottom">
<p data-i18n="footer_rights">© 2026 餐廳品牌. All rights reserved.</p>
</div>
</div>
</footer>`}function Tt(l="default"){return Jm(l)}const rs=He`<div class="cart-overlay" onclick="closeCart()"></div>
<div class="cart-sidebar">
<div class="cart-header">
<h3 data-i18n="cart">購物車</h3>
<button class="cart-close" onclick="closeCart()">✕</button>
</div>
<div class="cart-items" id="cartItems"></div>
<div class="cart-footer">
<div class="cart-total">
<span data-i18n="order_total">合計</span>
<span id="cartTotal">$0</span>
</div>
<a class="btn-submit" data-i18n="order_checkout" href="#/cart" style="text-align:center;display:block;text-decoration:none">前往結帳</a>
</div>
</div>`,Km=He`
${_t("home")}
<section class="hero">
<div class="hero-content container">
<!-- [LOGO TEXT FIX 2] Food image + real multilingual text. No data-i18n keys are used for the brand name. -->
<div class="brand-logo brand-logo-hero" aria-label="Awesome Restaurant Logo">
  <img class="brand-logo-img" src="/images/awesome-food-logo.png" alt="Awesome restaurant food graphic" />
  <div class="brand-logo-text">
    <div class="brand-logo-title">Awesome</div>
    <div class="brand-logo-subtitle brand-logo-subtitle-zh">五餅二魚</div>
    <div class="brand-logo-subtitle brand-logo-subtitle-en">Authentic Chinese Cuisine</div>
  </div>
</div>
<!-- [LOGO TEXT FIX 2 END] -->
<h1 data-i18n="hero_title">品味頂級料理，享受極致美味</h1>
<p data-i18n="hero_subtitle">我們用心準備每一道佳餚，為您帶來難忘的美食體驗</p>
<div class="hero-buttons">
<a class="btn btn-primary" data-i18n="hero_btn_menu" href="#/menu">瀏覽菜單</a>
<a class="btn btn-outline" data-i18n="hero_btn_reserve" href="#/reservation">立即訂位</a>
</div>
</div>
</section>
<section class="section features">
<div class="container">
<div class="section-title fade-in">
<h2 data-i18n="feature_title">為何選擇我們</h2>
<div class="divider"></div>
<p class="subtitle" data-i18n="feature_subtitle">堅持品質，用心服務每一位顧客</p>
</div>
<div class="feature-grid">
<div class="feature-card fade-in">
<div class="feature-icon">🥬</div>
<h3 data-i18n="feature_fresh">新鮮食材</h3>
<p data-i18n="feature_fresh_desc">每日嚴選最新鮮的頂級食材，確保每道料理的品質</p>
</div>
<div class="feature-card fade-in">
<div class="feature-icon">👨‍🍳</div>
<h3 data-i18n="feature_chef">專業主廚</h3>
<p data-i18n="feature_chef_desc">擁有多年經驗的專業主廚，為您呈現精湛廚藝</p>
</div>
<div class="feature-card fade-in">
<div class="feature-icon feature-icon-stopwatch-wrap">
  <img class="feature-icon-stopwatch" src="/images/feature-stopwatch.png" alt="Stopwatch icon" />
</div>
<h3 data-i18n="feature_delivery">快速外送</h3>
<p data-i18n="feature_delivery_desc">30分鐘內新鮮送达，讓您在家也能享受美味</p>
</div>
<div class="feature-card fade-in">
<div class="feature-icon">💖</div>
<h3 data-i18n="feature_service">優質服務</h3>
<p data-i18n="feature_service_desc">親切專業的服務團隊，為您打造舒適的用餐體驗</p>
</div>
</div>
</div>
</section>
<section class="promo-banner">
<div class="container">
<h2 data-i18n="promo_banner_title">限時優惠進行中</h2>
<p data-i18n="promo_banner_desc">新會員首次消費享9折優惠，立即加入會員</p>
<a class="btn btn-primary" data-i18n="promo_banner_btn" href="#/promotions">了解更多</a>
</div>
</section>
<section class="section menu-preview">
<div class="container">
<div class="section-title fade-in">
<h2 data-i18n="menu_title">精選菜單</h2>
<div class="divider"></div>
<p class="subtitle" data-i18n="menu_subtitle">嚴選食材，匠心烹製</p>
</div>
<div class="menu-grid" id="menuPreview"></div>
<div style="text-align:center;margin-top:40px">
<a class="btn btn-primary" data-i18n="hero_btn_menu" href="#/menu" style="background:var(--primary);color:white">瀏覽菜單</a>
</div>
</div>
</section>
<section class="section" style="background:var(--white)">
<div class="container">
<div class="about-section">
<div class="about-img-wrap fade-in">
<img class="about-photo" src="/images/about-us-family-photo.png" alt="Owners standing in front of the restaurant" />
</div>
<div class="about-text fade-in">
<h2 data-i18n="about_title">關於我們</h2>
<p data-i18n="about_desc1">我們是一家主打廣東菜的餐廳，從燒臘、海鮮到熱炒與湯品，延續粵菜講究鮮、嫩、清、和的風味。</p>
<p data-i18n="about_desc2">開業兩年有餘，我們持續以用心料理與真誠服務接待每位客人，現已提供約180道菜色，累積服務數千位顧客。</p>
<div class="about-stats">
<div class="stat-item">
<div class="stat-number">28+</div>
<div class="stat-label" data-i18n="about_years">個月營運</div>
</div>
<div class="stat-item">
<div class="stat-number">180</div>
<div class="stat-label" data-i18n="about_dishes">道料理</div>
</div>
<div class="stat-item">
<div class="stat-number">6K+</div>
<div class="stat-label" data-i18n="about_customers">位顧客</div>
</div>
</div>
<a class="btn btn-primary" data-i18n="nav_about" href="#/about" style="background:var(--primary);color:white;margin-top:30px;display:inline-block">關於我們</a>
</div>
</div>
</div>
</section>
${Tt("home")}
${rs}
`,Ym=[Rt,Ji,zr,Ct`
const items = Array.isArray(window.menuItems) ? window.menuItems : [];
const grid = document.getElementById('menuPreview');
const featuredCodes = ['E5', 'S2', 'J6', 'J7', 'J9', 'E17'];
function readHomeCart() {
    try { return JSON.parse(localStorage.getItem('cart') || '[]') || []; } catch { return []; }
}
function getHomeItemQty(itemId) {
    const row = readHomeCart().find(function(cartItem) { return cartItem.id === itemId; });
    return Number(row && (row.qty || row.quantity) || 0);
}
function renderHomeCartControl(item) {
    const qty = getHomeItemQty(item.id);
    if (qty > 0) {
        return '<div class="dish-cart-stepper compact-stepper" onclick="event.stopPropagation()">'
            + '<button type="button" aria-label="Decrease" onclick="homeChangeQty(&quot;' + item.id + '&quot;, -1, event)">−</button>'
            + '<span>' + qty + '</span>'
            + '<button type="button" aria-label="Increase" onclick="homeChangeQty(&quot;' + item.id + '&quot;, 1, event)">+</button>'
            + '</div>';
    }
    return '<button class="btn-add-cart" type="button" onclick="homeChangeQty(&quot;' + item.id + '&quot;, 1, event)">' + escapeHtml(t('menu_add_cart')) + '</button>';
}
function findFeaturedItem(code) {
    if (code === 'S2') {
        return items.find(function(item) { return item.id === 'S2_SOUP'; })
            || items.find(function(item) { return item.id === 'S2'; })
            || items.find(function(item) { return String(item.id || '').indexOf('S2') === 0; });
    }
    return items.find(function(item) { return item.id === code || item.displayId === code; });
}
const featuredItems = featuredCodes.map(findFeaturedItem).filter(Boolean);
window.homeChangeQty = function(itemId, delta, event) {
    if (event) { event.preventDefault(); event.stopPropagation(); }
    const item = featuredItems.find(function(entry) { return entry.id === itemId; });
    if (!item) return;
    if (delta > 0) {
        if (typeof window.addToCart === 'function') window.addToCart(item);
    } else if (typeof window.updateQty === 'function') {
        window.updateQty(itemId, -1);
    }
    if (typeof window.renderFeaturedMenu === 'function') window.renderFeaturedMenu();
    if (typeof window.updateCartBadge === 'function') window.updateCartBadge();
};
window.renderFeaturedMenu = function() {
    if (!grid) return;
    const aiImageNote = getAiImageNoteText();
    grid.innerHTML = featuredItems.map(function(item) {
        const itemName = getItemName(item);
        const itemDesc = getItemDesc(item) || item.name;
        return '<div class="menu-card fade-in">'
            + '<div class="menu-card-img" style="background:' + (item.color || '') + '"><img class="menu-card-photo" src="' + getDishImageSrc(item) + '" alt="' + escapeHtml(itemName) + '" onerror="handleMenuImageError(this)"><span class="ai-image-note">' + escapeHtml(aiImageNote) + '</span></div>'
            + '<div class="menu-card-body">'
            + '<h3 class="menu-name">' + escapeHtml(itemName) + '</h3>'
            + '<p class="desc menu-desc">' + escapeHtml(itemDesc) + '</p>'
            + '<div class="menu-card-footer">'
            + '<span class="price">$' + item.price + '</span>'
            + renderHomeCartControl(item)
            + '</div></div></div>';
    }).join('');
    initScrollAnimations();
};
window.renderFeaturedMenu();
if (!window.__homeCartSyncBound) {
    window.__homeCartSyncBound = true;
    window.addEventListener('cartchange', function() {
        if (document.getElementById('menuPreview') && typeof window.renderFeaturedMenu === 'function') window.renderFeaturedMenu();
    });
    window.addEventListener('storage', function(event) {
        if (event.key === 'cart' && document.getElementById('menuPreview') && typeof window.renderFeaturedMenu === 'function') window.renderFeaturedMenu();
    });
}
  `],Xm={html:Km,scripts:Ym,source:"index.html"},Zm=He`
${_t()}
<div class="page-header" style="padding:90px 0 30px">
<div class="container">
<h1 data-i18n="menu_title">精選菜單</h1>
<p data-i18n="menu_subtitle">嚴選食材，匠心烹製</p>
</div>
</div>
<div class="menu-page-layout">
<aside class="menu-sidebar" id="menuSidebar">
<nav class="sidebar-nav" id="sidebarNav"></nav>
</aside>
<main class="menu-main-content" id="menuMainContent"></main>
</div>
${Tt()}
${rs}
`,ep=[Rt,Ji,zr,Ct`
window.currentLang = window.currentLang || 'zh';
        // [DEAD CODE REMOVED] toggleLang fallback deleted: src/i18n/language.js always
        // registers the real window.toggleLang before page scripts run.
        window.toggleMobileMenu = window.toggleMobileMenu || function(){
            var links = document.querySelector('.nav-links');
            if (links) links.classList.toggle('active');
        };
        window.addToCart = window.addToCart || function(item){
            alert('已加入：' + item.name);
        };
        window.closeCart = window.closeCart || function(){
            document.querySelector('.cart-overlay')?.classList.remove('active');
            document.querySelector('.cart-sidebar')?.classList.remove('active');
        };

                // [SPLIT PHASE 3] Menu data now comes from shared/menuDataScript.js.
        var categories = window.menuCategories || [];
        var allItems = window.menuItems || [];

        function getMenuParam(name) {
            var query = window.location.search || (window.location.hash.includes('?') ? '?' + window.location.hash.split('?')[1] : '');
            return new URLSearchParams(query).get(name);
        }

        function isValidCategory(catKey) {
            return categories.some(function(cat) { return cat.key === catKey; });
        }

        function getInitialCategory() {
            var fromUrl = getMenuParam('cat');
            if (isValidCategory(fromUrl)) return fromUrl;
            var saved = sessionStorage.getItem('lastMenuCategory');
            if (isValidCategory(saved)) return saved;
            return categories.length ? categories[0].key : '';
        }

        var activeCategory = getInitialCategory();
        var menuItemsById = {};
        allItems.forEach(function(item) { menuItemsById[item.id] = item; });

        function readMenuCart() {
            try { return JSON.parse(localStorage.getItem('cart') || '[]') || []; } catch (error) { return []; }
        }

        function getMenuItemQty(itemId) {
            var row = readMenuCart().find(function(cartItem) { return cartItem.id === itemId; });
            return Number(row && (row.qty || row.quantity) || 0);
        }

        function renderMenuCartControl(item) {
            var qty = getMenuItemQty(item.id);
            if (qty > 0) {
                return '<div class="dish-cart-stepper compact-stepper">'
                    + '<button type="button" aria-label="Decrease" onclick="menuChangeQty(&quot;' + item.id + '&quot;, -1, event)">−</button>'
                    + '<span>' + qty + '</span>'
                    + '<button type="button" aria-label="Increase" onclick="menuChangeQty(&quot;' + item.id + '&quot;, 1, event)">+</button>'
                    + '</div>';
            }
            return '<button class="menu-item-add-btn" type="button" onclick="menuChangeQty(&quot;' + item.id + '&quot;, 1, event)"><span class="add-icon">+</span></button>';
        }

        window.buildSidebar = function() {
            var nav = document.getElementById('sidebarNav');
            if (!nav) return;
            nav.innerHTML = categories.map(function(cat) {
                var label = getCategoryLabel(cat);
                return '<a href="#" class="sidebar-link ' + (cat.key === activeCategory ? 'active' : '') + '" data-cat="' + cat.key + '" onclick="selectCategory(&quot;' + cat.key + '&quot;, event)">' +
                    '<span class="sidebar-icon">' + cat.icon + '</span>' +
                    '<span class="sidebar-label">' + escapeHtml(label) + '</span>' +
                    '</a>';
            }).join('');
        }

        window.renderSelectedCategory = function() {
            var main = document.getElementById('menuMainContent');
            if (!main) return;
            var meta = getCategoryMeta(activeCategory);
            var label = getCategoryLabel(meta);
            var catItems = allItems.filter(function(item) { return item.category === activeCategory; });

            if (!catItems.length) {
                main.innerHTML = '<div class="menu-empty-state">' + escapeHtml(getNoDishesText()) + '</div>';
                return;
            }

            var aiImageNote = getAiImageNoteText();
            var html = '<section class="menu-category-section menu-category-' + activeCategory + '" id="cat-' + activeCategory + '">';
            html += '<div class="category-header">';
            html += '<span class="category-header-icon">' + meta.icon + '</span>';
            html += '<h2 class="category-header-title">' + escapeHtml(label) + '</h2>';
            html += '</div>';
            html += '<div class="menu-items-grid">';

            catItems.forEach(function(item) {
                var itemName = getItemName(item);
                var itemDesc = getItemDesc(item) || getDishDetailHintText();
                var itemTitle = item.displayId ? item.displayId + ' ' + itemName : itemName;
                html += '<div class="menu-item-card" tabindex="0" role="button" onclick="openDishDetail(&quot;' + item.id + '&quot;)" onkeydown="handleDishKey(event, &quot;' + item.id + '&quot;)">';
                html += '<div class="menu-item-image">';
                html += '<img class="menu-item-photo" src="' + getDishImageSrc(item) + '" alt="' + escapeHtml(itemTitle) + '" onerror="handleMenuImageError(this)">';
                html += '<div class="menu-item-image-placeholder" style="display:none"><span>' + escapeHtml(item.displayId || meta.icon) + '</span></div>';
                html += '<span class="ai-image-note">' + escapeHtml(aiImageNote) + '</span>';
                html += '</div>';
                html += '<div class="menu-item-info">';
                html += '<div class="menu-item-header">';
                if (item.displayId) html += '<span class="menu-item-id">' + escapeHtml(item.displayId) + '</span>';
                html += '<h3 class="menu-item-name">' + escapeHtml(itemName) + '</h3>';
                html += '</div>';
                html += '<p class="menu-item-desc">' + escapeHtml(itemDesc) + '</p>';
                html += '<div class="menu-item-footer">';
                html += '<span class="menu-item-price">' + escapeHtml(item.priceText) + '</span>';
                html += renderMenuCartControl(item);
                html += '</div>';
                html += '</div>';
                html += '</div>';
            });

            html += '</div></section>';
            main.innerHTML = html;
        }

        window.selectCategory = function(cat, event) {
            if (event) event.preventDefault();
            if (!isValidCategory(cat)) return;
            activeCategory = cat;
            sessionStorage.setItem('lastMenuCategory', activeCategory);
            buildSidebar();
            renderSelectedCategory();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        window.menuAddToCart = function(itemId, event) {
            window.menuChangeQty(itemId, 1, event);
        }

        window.menuChangeQty = function(itemId, delta, event) {
            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }
            var item = menuItemsById[itemId];
            if (!item) return;
            if (delta > 0) {
                if (typeof window.addToCart === 'function') {
                    window.addToCart(item);
                }
            } else if (typeof window.updateQty === 'function') {
                window.updateQty(itemId, -1);
            }
            if (typeof window.renderCart === 'function') window.renderCart();
            if (typeof window.updateCartBadge === 'function') window.updateCartBadge();
            renderSelectedCategory();
        }

        window.handleDishKey = function(event, itemId) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openDishDetail(itemId);
            }
        }

        window.openDishDetail = function(itemId) {
            var item = menuItemsById[itemId];
            if (!item) return;
            sessionStorage.setItem('lastMenuCategory', activeCategory);
            window.location.hash = '#/dish-detail?id=' + encodeURIComponent(itemId) + '&cat=' + encodeURIComponent(activeCategory);
        }

        window.rebuildMenu = function() {
            var fromUrl = getMenuParam('cat');
            if (isValidCategory(fromUrl)) activeCategory = fromUrl;
            sessionStorage.setItem('lastMenuCategory', activeCategory);
            buildSidebar();
            renderSelectedCategory();
        };

        if (!window.__menuCartSyncBound) {
            window.__menuCartSyncBound = true;
            window.addEventListener('cartchange', function() {
                if (document.getElementById('menuMainContent') && typeof window.renderSelectedCategory === 'function') window.renderSelectedCategory();
            });
            window.addEventListener('storage', function(event) {
                if (event.key === 'cart' && document.getElementById('menuMainContent') && typeof window.renderSelectedCategory === 'function') window.renderSelectedCategory();
            });
        }

        // [DEAD CODE REMOVED] DOMContentLoaded listener deleted: in React the DOM is
        // already mounted; App.jsx runLegacyInit calls window.rebuildMenu, which runs
        // buildSidebar() + renderSelectedCategory().
  `],tp={html:Zm,scripts:ep,source:"menu.html"},np=He`
${_t()}
<section class="recommend-search-page" aria-labelledby="recommendSearchTitle">
  <div class="recommend-search-container">
    <header class="recommend-search-hero">
      <span class="recommend-search-kicker" data-i18n="recommend_kicker">Menu Guide</span>
      <h1 id="recommendSearchTitle" data-i18n="recommend_title">菜單建議與搜尋</h1>
      <p data-i18n="recommend_subtitle">不知道怎麼點？可先選擇人數建議，也可以直接搜尋菜品。</p>
      <span class="recommend-tax-note" data-i18n="search_tax_note">價格含稅前</span>
    </header>

    <div class="recommend-tabs" role="tablist" aria-label="Menu recommendation and search tabs">
      <button class="recommend-tab active" type="button" data-panel="search" role="tab" aria-selected="true" data-i18n="recommend_tab_search">搜尋菜品</button>
      <button class="recommend-tab" type="button" data-panel="combo2" role="tab" aria-selected="false" data-i18n="recommend_tab_2">2人點餐</button>
      <button class="recommend-tab" type="button" data-panel="combo3" role="tab" aria-selected="false" data-i18n="recommend_tab_3">3人點餐</button>
      <button class="recommend-tab" type="button" data-panel="combo4" role="tab" aria-selected="false" data-i18n="recommend_tab_4">4人點餐</button>
    </div>

    <div class="recommend-panel active" id="recommendPanelSearch" data-panel="search" role="tabpanel">
      <div class="recommend-search-card" role="search">
        <div class="recommend-search-card-title">
          <h2 data-i18n="search_title">菜品搜尋</h2>
          <p data-i18n="search_subtitle">輸入菜名、編號或關鍵字，快速找到想點的餐點</p>
        </div>
        <label class="recommend-search-input-wrap" for="dishSuggestSearchInput">
          <span class="recommend-search-icon" aria-hidden="true">⌕</span>
          <input
            id="dishSuggestSearchInput"
            class="recommend-search-input"
            type="search"
            autocomplete="off"
            data-i18n-placeholder="search_placeholder"
            placeholder="搜尋品項…"
          />
          <button id="dishSuggestSearchClear" class="recommend-search-clear" type="button" aria-label="Clear search">×</button>
        </label>
      </div>

      <div class="recommend-search-status" id="dishSuggestSearchStatus" aria-live="polite"></div>
      <div class="recommend-results-grid" id="dishSuggestSearchResults"></div>
    </div>

    <div class="recommend-panel" id="recommendPanelCombo2" data-panel="combo2" role="tabpanel" hidden>
      <div class="recommend-coming-card">
        <span class="recommend-coming-icon">🍽️</span>
        <h2 data-i18n="recommend_combo_2_title">2人點餐組合</h2>
        <p data-i18n="recommend_combo_placeholder">此區先保留版面，之後可放入組合內容、推薦份量與加購建議。</p>
      </div>
    </div>

    <div class="recommend-panel" id="recommendPanelCombo3" data-panel="combo3" role="tabpanel" hidden>
      <div class="recommend-coming-card">
        <span class="recommend-coming-icon">🥢</span>
        <h2 data-i18n="recommend_combo_3_title">3人點餐組合</h2>
        <p data-i18n="recommend_combo_placeholder">此區先保留版面，之後可放入組合內容、推薦份量與加購建議。</p>
      </div>
    </div>

    <div class="recommend-panel" id="recommendPanelCombo4" data-panel="combo4" role="tabpanel" hidden>
      <div class="recommend-coming-card">
        <span class="recommend-coming-icon">🍲</span>
        <h2 data-i18n="recommend_combo_4_title">4人點餐組合</h2>
        <p data-i18n="recommend_combo_placeholder">此區先保留版面，之後可放入組合內容、推薦份量與加購建議。</p>
      </div>
    </div>
  </div>
</section>
${Tt()}
${rs}
`,rp=[Rt,Ji,zr,Ct`
(function(){
    window.currentLang = window.currentLang || 'zh';
    window.toggleMobileMenu = window.toggleMobileMenu || function(){
        var links = document.querySelector('.nav-links');
        if (links) links.classList.toggle('active');
    };
    window.closeCart = window.closeCart || function(){
        document.querySelector('.cart-overlay')?.classList.remove('active');
        document.querySelector('.cart-sidebar')?.classList.remove('active');
    };

    var allItems = window.menuItems || [];
    var itemById = {};
    allItems.forEach(function(item) { itemById[item.id] = item; });

    function text(key) {
        return (window.t ? window.t(key) : key) || key;
    }

    function normalize(value) {
        return String(value || '').toLowerCase().trim();
    }

    function getCategoryText(item) {
        var lang = window.currentLang || 'zh';
        var categories = window.menuCategories || [];
        var meta = categories.find(function(category) { return category.key === item.category; });
        if (!meta) return item.category || '';
        return lang === 'en' ? (meta.en || meta.zh || item.category || '') : (meta.zh || meta.en || item.category || '');
    }

    function getPrimarySearchFields(item) {
        var lang = window.currentLang || 'zh';
        if (lang === 'en') {
            return [item.displayId, item.name_en, getCategoryText(item)].join(' ');
        }
        return [item.displayId, item.name, getCategoryText(item)].join(' ');
    }

    function getIngredientSearchFields(item) {
        var lang = window.currentLang || 'zh';
        if (lang === 'en') return (item.ingredients && item.ingredients.en || []).join(' ');
        return (item.ingredients && item.ingredients.zh || []).join(' ');
    }

    function getDescriptionSearchFields(item) {
        var lang = window.currentLang || 'zh';
        return lang === 'en' ? (item.desc_en || '') : (item.desc || '');
    }

    function readCart() {
        try { return JSON.parse(localStorage.getItem('cart') || '[]') || []; } catch (error) { return []; }
    }

    function writeCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
        window.dispatchEvent(new Event('cartUpdated'));
        window.dispatchEvent(new Event('storage'));
        if (typeof window.updateCartBadge === 'function') window.updateCartBadge();
        if (typeof window.renderCart === 'function') window.renderCart();
    }

    function getQty(itemId) {
        var row = readCart().find(function(cartItem) { return cartItem.id === itemId; });
        return Number(row && (row.qty || row.quantity) || 0);
    }

    function changeQty(itemId, delta, event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        var item = itemById[itemId];
        if (!item) return;
        var cart = readCart();
        var row = cart.find(function(cartItem) { return cartItem.id === itemId; });
        var nextQty = Math.max(0, (row ? Number(row.qty || row.quantity || 0) : 0) + delta);

        if (!row && nextQty > 0) {
            cart.push({
                id: item.id,
                displayId: item.displayId,
                name: item.name,
                name_en: item.name_en,
                price: item.price,
                priceText: item.priceText,
                image: item.image,
                qty: nextQty,
                quantity: nextQty
            });
        } else if (row && nextQty > 0) {
            row.qty = nextQty;
            row.quantity = nextQty;
        } else if (row) {
            cart = cart.filter(function(cartItem) { return cartItem.id !== itemId; });
        }

        writeCart(cart);
        renderResults();
    }

    function cartControl(item) {
        var qty = getQty(item.id);
        if (qty > 0) {
            return '<div class="recommend-stepper">'
                + '<button type="button" aria-label="Decrease" onclick="recommendSearchChangeQty(&quot;' + item.id + '&quot;, -1, event)">−</button>'
                + '<span>' + qty + '</span>'
                + '<button type="button" aria-label="Increase" onclick="recommendSearchChangeQty(&quot;' + item.id + '&quot;, 1, event)">+</button>'
                + '</div>';
        }
        return '<button class="recommend-add-btn" type="button" onclick="recommendSearchChangeQty(&quot;' + item.id + '&quot;, 1, event)"><span>+</span></button>';
    }

    function openDish(itemId) {
        window.location.hash = '#/dish-detail?id=' + encodeURIComponent(itemId);
    }

    function filteredItems() {
        var input = document.getElementById('dishSuggestSearchInput');
        var q = normalize(input ? input.value : '');
        if (!q) return allItems.slice(0, 12);

        return allItems.filter(function(item) {
            var primary = normalize(getPrimarySearchFields(item));
            var ingredients = normalize(getIngredientSearchFields(item));
            var description = normalize(getDescriptionSearchFields(item));

            // Keep short/common words accurate. For example, searching "rice" should
            // return rice-category or rice-name dishes, not every dish whose description
            // says it is "perfect with steamed rice". Descriptions are searched only
            // for longer phrases.
            return primary.indexOf(q) !== -1
                || ingredients.indexOf(q) !== -1
                || (q.length >= 5 && description.indexOf(q) !== -1);
        });
    }

    function renderResults() {
        var wrap = document.getElementById('dishSuggestSearchResults');
        var status = document.getElementById('dishSuggestSearchStatus');
        if (!wrap) return;

        var items = filteredItems();
        var input = document.getElementById('dishSuggestSearchInput');
        var hasQuery = !!(input && input.value.trim());

        if (status) {
            var label = window.currentLang === 'en'
                ? (hasQuery ? items.length + ' results found' : 'Showing recommended dishes')
                : (hasQuery ? '找到 ' + items.length + ' 道菜品' : '顯示推薦菜品');
            status.textContent = window.currentLang === 'en' ? label : (window.formatDisplayText ? window.formatDisplayText(label) : label);
        }

        if (!items.length) {
            wrap.innerHTML = '<div class="recommend-empty-state">'
                + '<h3>' + window.escapeHtml(text('search_empty_title')) + '</h3>'
                + '<p>' + window.escapeHtml(text('search_empty_desc')) + '</p>'
                + '</div>';
            return;
        }

        var aiNote = window.getAiImageNoteText ? window.getAiImageNoteText() : '';
        wrap.innerHTML = items.map(function(item) {
            var name = window.getItemName ? window.getItemName(item) : (item.name || item.name_en || '');
            var desc = window.getItemDesc ? window.getItemDesc(item) : (item.desc || item.desc_en || '');
            var cat = window.getCategoryLabel ? window.getCategoryLabel(window.getCategoryMeta(item.category)) : item.category;
            var image = window.getDishImageSrc ? window.getDishImageSrc(item) : (item.image || '/images/awesome-logo.png');
            var title = (item.displayId ? item.displayId + ' ' : '') + name;
            return '<article class="recommend-result-card" tabindex="0" role="button" onclick="recommendSearchOpenDish(&quot;' + item.id + '&quot;)" onkeydown="if(event.key===\'Enter\'||event.key===\' \'){recommendSearchOpenDish(&quot;' + item.id + '&quot;);}">'
                + '<div class="recommend-result-image">'
                + '<img src="' + image + '" alt="' + window.escapeHtml(title) + '" onerror="handleMenuImageError(this)">'
                + '<span class="ai-image-note">' + window.escapeHtml(aiNote) + '</span>'
                + '</div>'
                + '<div class="recommend-result-body">'
                + '<div class="recommend-result-meta"><span>' + window.escapeHtml(item.displayId || '') + '</span><span>' + window.escapeHtml(cat) + '</span></div>'
                + '<h3>' + window.escapeHtml(name) + '</h3>'
                + '<p>' + window.escapeHtml(desc) + '</p>'
                + '<div class="recommend-result-footer">'
                + '<span class="recommend-result-price">' + window.escapeHtml(item.priceText || ('$' + Number(item.price || 0).toFixed(2))) + '</span>'
                + cartControl(item)
                + '</div>'
                + '</div>'
                + '</article>';
        }).join('');
    }

    function activatePanel(panel) {
        document.querySelectorAll('.recommend-tab').forEach(function(btn) {
            var active = btn.getAttribute('data-panel') === panel;
            btn.classList.toggle('active', active);
            btn.setAttribute('aria-selected', active ? 'true' : 'false');
        });
        document.querySelectorAll('.recommend-panel').forEach(function(el) {
            var active = el.getAttribute('data-panel') === panel;
            el.classList.toggle('active', active);
            el.hidden = !active;
        });
    }

    function bindPage() {
        document.querySelectorAll('.recommend-tab').forEach(function(btn) {
            btn.addEventListener('click', function() { activatePanel(btn.getAttribute('data-panel')); });
        });

        var input = document.getElementById('dishSuggestSearchInput');
        var clear = document.getElementById('dishSuggestSearchClear');
        if (input) input.addEventListener('input', renderResults);
        if (clear) clear.addEventListener('click', function(event) {
            event.preventDefault();
            if (input) {
                input.value = '';
                input.focus();
            }
            renderResults();
        });

        window.addEventListener('languagechange', renderResults);
        window.addEventListener('chinesevariantchange', renderResults);
        window.addEventListener('cartUpdated', renderResults);
        renderResults();
    }

    window.recommendSearchChangeQty = changeQty;
    window.recommendSearchOpenDish = openDish;
    window.renderRecommendSearch = renderResults;

    bindPage();
})();
`],mc={html:np,scripts:rp,source:"search"},ip=He`
${_t()}
<main class="dish-detail-wrap">
<section class="dish-hero">
<button id="dishPrevBtn" class="dish-nav-arrow dish-nav-prev" type="button" aria-label="Previous dish">‹</button>
<button id="dishNextBtn" class="dish-nav-arrow dish-nav-next" type="button" aria-label="Next dish">›</button>
<div class="dish-image-panel">
<div class="dish-image-placeholder"><img id="dishImage" class="dish-detail-image" src="/images/A1.png" alt="菜品圖片"><span id="dishImageCode" class="dish-image-code">A1</span><span id="dishAiImageNote" class="ai-image-note dish-ai-image-note">AI示意圖僅供參考</span></div>
</div>
<div class="dish-info-panel">
<div class="dish-category" id="dishCategory">豬肉 Pork</div>
<h1 class="dish-title" id="dishTitle">魚香肉絲</h1>
<div class="dish-price" id="dishPrice">$16.95</div>
<p class="dish-desc" id="dishDescription">這裡是菜品介紹範例。之後可補上料理特色、食材來源、口味描述、辣度、是否含堅果或其他過敏原提醒。</p>
<p class="dish-how-to-eat" id="dishHowToEat"></p>
<div id="dishCartControl" class="dish-cart-control"></div>
<a class="dish-back" data-i18n="dish_back" href="#/menu">← 返回菜單</a>
</div>
</section>
</main>
`,ap=[Rt,Ji,zr,Ct`
window.currentLang = window.currentLang || 'zh';
        // [DEAD CODE REMOVED] toggleLang fallback deleted: src/i18n/language.js always
        // registers the real window.toggleLang before page scripts run.
        window.toggleMobileMenu = window.toggleMobileMenu || function(){
            var links = document.querySelector('.nav-links');
            if (links) links.classList.toggle('active');
        };

                // [SPLIT PHASE 3] Menu data now comes from shared/menuDataScript.js.
        var categories = window.menuCategories || [];
        var allItems = window.menuItems || [];
        function getDishParam(name) {
            var query = window.location.search || (window.location.hash.includes('?') ? '?' + window.location.hash.split('?')[1] : '');
            return new URLSearchParams(query).get(name);
        }
        function getItemId() { return getDishParam('id') || 'P1'; }

        function getMenuCategoryUrl(category) {
            return '#/menu' + (category ? '?cat=' + encodeURIComponent(category) : '');
        }

        function getDishDetailUrl(itemId, category) {
            return '#/dish-detail?id=' + encodeURIComponent(itemId) + '&cat=' + encodeURIComponent(category || '');
        }

        function navigateDishButton(btn) {
            if (!btn) return;
            var targetType = btn.getAttribute('data-target-type');
            var targetId = btn.getAttribute('data-target-id');
            var targetCategory = btn.getAttribute('data-target-category') || sessionStorage.getItem('lastMenuCategory') || '';
            if (targetType === 'menu') {
                window.location.hash = getMenuCategoryUrl(targetCategory);
                return;
            }
            if (targetId) {
                sessionStorage.setItem('lastMenuCategory', targetCategory);
                window.location.hash = getDishDetailUrl(targetId, targetCategory);
                window.setTimeout(function() {
                    if (window.renderDish) window.renderDish();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 0);
            }
        }

        window.dishNavigatePrev = function(event) {
            if (event) event.preventDefault();
            navigateDishButton(document.getElementById('dishPrevBtn'));
        };

        window.dishNavigateNext = function(event) {
            if (event) event.preventDefault();
            navigateDishButton(document.getElementById('dishNextBtn'));
        };

        window.renderDish = function() {
            if (!document.getElementById('dishTitle')) return;
            var itemId = getItemId();
            var item = allItems.find(function(i) { return i.id === itemId; }) || allItems.find(function(i) { return i.id === 'P1'; }) || allItems[0];
            if (!item) return;
            var meta = getCategoryMeta(item.category);
            var displayId = item.displayId || item.id || '';
            var itemName = getItemName(item);
            var itemDesc = getItemDesc(item);
            var itemHowToEat = getItemHowToEat(item);
            document.title = (displayId ? displayId + ' ' : '') + itemName + ((window.currentLang === 'en') ? ' - Dish Details' : ' - ' + zhDisplay('菜品介紹'));
            var dishImage = document.getElementById('dishImage');
            var dishImageCode = document.getElementById('dishImageCode');
            if (dishImageCode) dishImageCode.textContent = displayId || meta.icon;
            if (dishImage) {
                dishImage.src = getDishImageSrc(item);
                dishImage.alt = (displayId ? displayId + ' ' : '') + itemName;
                dishImage.style.display = 'block';
                if (dishImageCode) dishImageCode.style.display = 'none';
                dishImage.onerror = function() {
                    dishImage.style.display = 'none';
                    if (dishImageCode) dishImageCode.style.display = 'flex';
                };
                dishImage.onload = function() {
                    dishImage.style.display = 'block';
                    if (dishImageCode) dishImageCode.style.display = 'none';
                };
            }
            var dishCategoryEl = document.getElementById('dishCategory');
            if (dishCategoryEl) dishCategoryEl.textContent = (window.currentLang === 'en') ? meta.en : getCategoryLabel(meta) + ' ' + meta.en;
            var backLink = document.querySelector('.dish-back');
            var backCategory = getDishParam('cat') || item.category || sessionStorage.getItem('lastMenuCategory') || '';
            if (backCategory) sessionStorage.setItem('lastMenuCategory', backCategory);
            if (backLink) {
                backLink.href = getMenuCategoryUrl(backCategory);
            }

            var aiNoteEl = document.getElementById('dishAiImageNote');
            if (aiNoteEl) aiNoteEl.textContent = getAiImageNoteText();

            var sameCategoryItems = allItems.filter(function(i) { return i.category === item.category; });
            var currentIndex = sameCategoryItems.findIndex(function(i) { return i.id === item.id; });
            var prevBtn = document.getElementById('dishPrevBtn');
            var nextBtn = document.getElementById('dishNextBtn');

            function setDishNavButton(btn, targetItem, directionText) {
                if (!btn) return;
                var labelText = directionText;
                if (targetItem) {
                    var targetName = (window.currentLang === 'en') ? (targetItem.name_en || targetItem.name || '') : getLocalizedValue(targetItem.name_i18n, targetItem.name || '');
                    btn.setAttribute('data-target-type', 'dish');
                    btn.setAttribute('data-target-id', targetItem.id);
                    btn.setAttribute('data-target-category', item.category);
                    labelText = directionText + ': ' + targetName;
                } else {
                    btn.setAttribute('data-target-type', 'menu');
                    btn.setAttribute('data-target-id', '');
                    btn.setAttribute('data-target-category', item.category);
                    labelText = directionText + ': ' + ((window.currentLang === 'en') ? 'Back to menu' : zhDisplay('返回菜單'));
                }
                btn.setAttribute('aria-label', labelText);
                btn.title = labelText;
            }

            setDishNavButton(prevBtn, currentIndex > 0 ? sameCategoryItems[currentIndex - 1] : null, (window.currentLang === 'en') ? 'Previous dish' : zhDisplay('上一個菜品'));
            setDishNavButton(nextBtn, currentIndex >= 0 && currentIndex < sameCategoryItems.length - 1 ? sameCategoryItems[currentIndex + 1] : null, (window.currentLang === 'en') ? 'Next dish' : zhDisplay('下一個菜品'));
            if (prevBtn) prevBtn.onclick = window.dishNavigatePrev;
            if (nextBtn) nextBtn.onclick = window.dishNavigateNext;

            document.getElementById('dishTitle').textContent = (displayId ? displayId + ' ' : '') + itemName;
            document.getElementById('dishPrice').textContent = item.priceText || '';
            document.getElementById('dishDescription').textContent = itemDesc || ((window.currentLang === 'en') ? 'This dish detail page can include flavor notes, spice level, allergens, and recommendations.' : zhDisplay('這是「' + itemName + '」的介紹頁面樣本。之後可以在這裡放料理特色 口味描述 辣度 過敏原與推薦說明。'));
            var howToEatEl = document.getElementById('dishHowToEat');
            if (howToEatEl) {
                howToEatEl.textContent = itemHowToEat ? (((window.currentLang === 'en') ? 'How to enjoy: ' : zhDisplay('建議吃法：')) + itemHowToEat) : '';
                howToEatEl.style.display = itemHowToEat ? 'block' : 'none';
            }
            renderDishCartControl(item);
        }

        function readDishCart() {
            try { return JSON.parse(localStorage.getItem('cart') || '[]') || []; } catch (error) { return []; }
        }

        function getDishCartQty(itemId) {
            var row = readDishCart().find(function(cartItem) { return cartItem.id === itemId; });
            return Number(row && (row.qty || row.quantity) || 0);
        }

        function renderDishCartControl(item) {
            var control = document.getElementById('dishCartControl');
            if (!control || !item) return;
            var qty = getDishCartQty(item.id);
            if (qty > 0) {
                control.innerHTML = '<div class="dish-cart-stepper dish-detail-stepper">'
                    + '<button type="button" aria-label="Decrease" onclick="dishDetailChangeQty(&quot;' + item.id + '&quot;, -1, event)">−</button>'
                    + '<span>' + qty + '</span>'
                    + '<button type="button" aria-label="Increase" onclick="dishDetailChangeQty(&quot;' + item.id + '&quot;, 1, event)">+</button>'
                    + '</div>';
            } else {
                var label = (window.currentLang === 'en') ? 'Add to Cart' : zhDisplay('加入購物車');
                control.innerHTML = '<button class="dish-add-cart-btn" id="dishAddCartBtn" type="button" onclick="dishDetailChangeQty(&quot;' + item.id + '&quot;, 1, event)">' + label + '</button>';
            }
        }

        window.dishDetailChangeQty = function(itemId, delta, event) {
            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }
            var item = allItems.find(function(i) { return i.id === itemId; });
            if (!item) return;
            if (delta > 0) {
                if (typeof window.addToCart === 'function') window.addToCart(item);
            } else if (typeof window.updateQty === 'function') {
                window.updateQty(itemId, -1);
            }
            if (typeof window.renderCart === 'function') window.renderCart();
            if (typeof window.updateCartBadge === 'function') window.updateCartBadge();
            renderDishCartControl(item);
        };

        if (!window.__dishDetailCartSyncBound) {
            window.__dishDetailCartSyncBound = true;
            window.addEventListener('cartchange', function() {
                if (document.getElementById('dishCartControl') && typeof window.renderDish === 'function') window.renderDish();
            });
            window.addEventListener('storage', function(event) {
                if (event.key === 'cart' && document.getElementById('dishCartControl') && typeof window.renderDish === 'function') window.renderDish();
            });
        }

        // [DEAD CODE REMOVED] DOMContentLoaded listener deleted: in React the DOM is
        // already mounted; App.jsx runLegacyInit calls window.renderDish explicitly.
  `],op={html:ip,scripts:ap,source:"dish-detail.html"},sp=He`
${_t()}
<div class="page-header">
<div class="container">
<h1 data-i18n="reservation_title">線上訂位</h1>
<p data-i18n="reservation_subtitle">預約您的專屬座位</p>
</div>
</div>
<section class="section">
<div class="container">
<div class="reservation-notice" role="note" aria-label="Reservation notice">
<h2 data-i18n="reservation_notice_title">訂位公告</h2>
<ul>
<li data-i18n="reservation_notice_seafood">海鮮類餐點建議提前 2 小時預訂。</li>
<li data-i18n="reservation_notice_hours">營業時間：週一至週日 11:00 - 21:00。</li>
<li data-i18n="reservation_notice_business_lunch">商業午餐：週一至週五 11:00 - 14:00。</li>
<li data-i18n="reservation_notice_closed_tuesday">每週二公休，週二不開放訂位。</li>
<li data-i18n="reservation_notice_confirm">我們會以電話或簡訊確認訂位資訊。</li>
<li data-i18n="reservation_notice_blacklist">預訂未赴約且未提前通知者，可能會被列入黑名單。</li>
</ul>
</div>
<form class="reservation-form" id="reservationForm">
<div class="form-group">
<label data-i18n="reservation_name">姓名</label>
<input id="resName" required="" type="text" minlength="1" autocomplete="name"/>
</div>
<div class="form-group">
<label data-i18n="reservation_phone">電話</label>
<input id="resPhone" placeholder="xxx-xxx-xxxx" required="" type="tel" inputmode="numeric" maxlength="12" autocomplete="tel"/>
<small class="form-help" data-i18n="reservation_phone_help">請輸入 10 位數電話，完成後會自動轉成 xxx-xxx-xxxx。</small>
</div>
<div class="form-row">
<div class="form-group">
<label data-i18n="reservation_date">日期</label>
<input id="resDate" required="" type="date"/>
<small class="form-help" data-i18n="reservation_date_help">每週二公休，不開放訂位。</small>
</div>
<div class="form-group">
<label data-i18n="reservation_time">時間</label>
<select id="resTime" required="">
<option value="">--</option>
<option value="11:00">11:00</option>
<option value="11:30">11:30</option>
<option value="12:00">12:00</option>
<option value="12:30">12:30</option>
<option value="13:00">13:00</option>
<option value="13:30">13:30</option>
<option value="17:00">17:00</option>
<option value="17:30">17:30</option>
<option value="18:00">18:00</option>
<option value="18:30">18:30</option>
<option value="19:00">19:00</option>
<option value="19:30">19:30</option>
<option value="20:00">20:00</option>
<option value="20:30">20:30</option>
</select>
</div>
</div>
<div class="form-group">
<label data-i18n="reservation_guests">用餐人數</label>
<select id="resGuests" required="">
<option value="">--</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8+</option>
</select>
</div>
<div class="form-group">
<label data-i18n="reservation_note">特殊需求</label>
<textarea data-i18n-placeholder="reservation_note_placeholder" id="resNote" placeholder="如有特殊飲食需求或慶祝活動，請在此說明" rows="3"></textarea>
</div>
<button class="btn-submit" data-i18n="reservation_submit" type="submit">確認訂位</button>
</form>
</div>
</section>
${Tt()}
`,lp=[Rt,Ct`
const dateInput = document.getElementById('resDate');
const phoneInput = document.getElementById('resPhone');

function getLocalDateValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return year + '-' + month + '-' + day;
}

function isTuesdayDateValue(value) {
  if (!value) return false;
  const parts = value.split('-').map(Number);
  if (parts.length !== 3 || parts.some(function(part) { return Number.isNaN(part); })) return false;
  return new Date(parts[0], parts[1] - 1, parts[2]).getDay() === 2;
}

function formatPhone(value) {
  const digits = String(value || '').replace(/\D/g, '').slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return digits.slice(0, 3) + '-' + digits.slice(3);
  return digits.slice(0, 3) + '-' + digits.slice(3, 6) + '-' + digits.slice(6);
}

function getPhoneDigits(value) {
  return String(value || '').replace(/\D/g, '');
}

if (dateInput) {
  const today = new Date();
  dateInput.min = getLocalDateValue(today);
  dateInput.addEventListener('change', function() {
    if (isTuesdayDateValue(dateInput.value)) {
      dateInput.setCustomValidity(t('reservation_closed_tuesday_short'));
      showToast(t('reservation_closed_tuesday_long'), 'error');
      dateInput.value = '';
    } else {
      dateInput.setCustomValidity('');
    }
  });
}

if (phoneInput) {
  phoneInput.addEventListener('input', function() {
    phoneInput.value = formatPhone(phoneInput.value);
    phoneInput.setCustomValidity('');
  });
  phoneInput.addEventListener('blur', function() {
    phoneInput.value = formatPhone(phoneInput.value);
    if (getPhoneDigits(phoneInput.value).length !== 10) {
      phoneInput.setCustomValidity(t('reservation_phone_length_short'));
    } else {
      phoneInput.setCustomValidity('');
    }
  });
}

function saveReservationLocal(data) {
  const reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
  reservations.unshift(data);
  localStorage.setItem('reservations', JSON.stringify(reservations));
}

async function saveReservationToBackend(data) {
  let response;
  try {
    response = await fetch('/api/reservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  } catch (networkError) {
    const error = new Error('network');
    error.isNetworkError = true;
    throw error;
  }
  const payload = await response.json().catch(function() { return {}; });
  if (!response.ok || !payload.ok) {
    // Server-side validation rejected the reservation (e.g. Tuesday, bad phone).
    const error = new Error(payload.message || 'Reservation API failed');
    error.isApiError = true;
    throw error;
  }
  return payload.reservation || data;
}

window.submitReservation = async function(e) {
  e.preventDefault();
  const name = document.getElementById('resName').value.trim();
  const phone = formatPhone(document.getElementById('resPhone').value);
  const phoneDigits = getPhoneDigits(phone);
  const date = document.getElementById('resDate').value;

  if (!name) {
    showToast(t('reservation_name_required'), 'error');
    document.getElementById('resName').focus();
    return;
  }

  if (phoneDigits.length !== 10) {
    showToast(t('reservation_phone_length_long'), 'error');
    document.getElementById('resPhone').value = phone;
    document.getElementById('resPhone').focus();
    return;
  }

  if (isTuesdayDateValue(date)) {
    showToast(t('reservation_closed_tuesday_long'), 'error');
    document.getElementById('resDate').value = '';
    document.getElementById('resDate').focus();
    return;
  }

  const data = {
    name: name,
    phone: phone,
    date: date,
    time: document.getElementById('resTime').value,
    guests: document.getElementById('resGuests').value,
    note: document.getElementById('resNote').value.trim(),
    replied: false,
    replyNote: '',
    status: 'new',
    createdAt: new Date().toISOString()
  };

  // [HONEST SAVE] Success is only reported after the backend has actually written
  // the reservation to data/reservations.json. Server-side rejections (validation)
  // and network failures each show their own error instead of a fake success.
  try {
    const saved = await saveReservationToBackend(data);
    saveReservationLocal(saved);
    showToast(t('reservation_success'), 'success');
    document.getElementById('reservationForm').reset();
  } catch (error) {
    console.warn('Reservation backend save failed:', error);
    if (error.isNetworkError) {
      showToast(t('reservation_server_unreachable'), 'error');
    } else {
      showToast(t('reservation_server_rejected') + (error.message && error.message !== 'Reservation API failed' ? ' (' + error.message + ')' : ''), 'error');
    }
  }
};

// [NO INLINE HANDLERS] Stable event binding instead of inline onsubmit.
document.getElementById('reservationForm')?.addEventListener('submit', window.submitReservation);
  `],dp={html:sp,scripts:lp,source:"reservation.html"},cp=He`
${_t()}
<div class="page-header">
  <div class="container">
    <h1 data-i18n="nav_member">會員中心</h1>
  </div>
</div>
<section class="section" style="min-height:60vh">
  <div class="member-container member-container-wide">
    <div class="member-card" id="memberForm">
      <div class="member-tabs">
        <button class="member-tab active" data-i18n="member_login" id="tabLogin" type="button">登入</button>
        <button class="member-tab" data-i18n="member_register" id="tabRegister" type="button">註冊</button>
      </div>

      <form id="loginForm" autocomplete="on">
        <div class="form-group">
          <label id="loginPhoneLabel">電話號碼 / 後台帳號</label>
          <input id="loginEmail" required type="text" autocomplete="username" inputmode="tel" placeholder="請輸入 10 位數電話" />
        </div>
        <div class="form-group">
          <label data-i18n="member_password">密碼</label>
          <input id="loginPassword" required type="password" autocomplete="current-password" />
        </div>
        <button class="btn-submit" data-i18n="member_login_btn" id="memberLoginSubmitBtn" type="submit">登入</button>
        <div id="memberLoginMessage" style="margin-top:12px;font-size:0.9rem;text-align:center;color:#c0392b;min-height:1.2em"></div>
      </form>

      <form id="registerForm" style="display:none" autocomplete="on">
        <div class="form-group">
          <label data-i18n="member_name">姓名</label>
          <input id="regName" required type="text" />
        </div>
        <div class="form-group">
          <label data-i18n="member_phone">電話</label>
          <input id="regPhone" required type="tel" inputmode="numeric" maxlength="12" placeholder="請輸入 10 位數電話" />
        </div>
        <div class="form-group">
          <label data-i18n="member_email">電子郵件</label>
          <input id="regEmail" type="email" placeholder="可選" />
        </div>
        <div class="form-group">
          <label data-i18n="member_password">密碼</label>
          <input id="regPassword" minlength="6" required type="password" />
        </div>
        <button class="btn-submit" data-i18n="member_register_btn" type="submit">註冊</button>
      </form>
    </div>

    <div class="member-card member-dashboard-card" id="memberDashboard" style="display:none">
      <div class="member-dashboard-top">
        <div class="member-profile-mini">
          <div id="memberAvatar" class="member-avatar">👤</div>
          <div>
            <h2 id="memberName"></h2>
            <p id="memberPhone"></p>
            <p id="memberEmail" style="display:none"></p>
          </div>
        </div>
        <div class="member-dashboard-actions">
          <button class="lang-toggle member-lang-toggle" type="button" data-language-control="toggle-lang" onclick="toggleLang()">EN</button>
          <button class="member-logout-btn" data-i18n="member_logout" id="memberLogoutBtn" type="button">登出</button>
        </div>
      </div>

      <div class="member-action-tabs" role="tablist" aria-label="會員功能">
        <button class="member-action-tab active" type="button" data-member-panel="current" data-member-text="tabCurrent">當前訂單</button>
        <button class="member-action-tab" type="button" data-member-panel="service" data-member-text="tabService">桌邊服務</button>
        <button class="member-action-tab" type="button" data-member-panel="history" data-member-text="tabHistory">歷史紀錄</button>
        <button class="member-action-tab" type="button" data-member-panel="profile" data-member-text="tabProfile">個人資料修改</button>
      </div>

      <div class="member-panel active" id="memberPanelCurrent">
        <div class="member-panel-heading">
          <h3 data-member-text="currentTitle">當前訂單</h3>
          <p data-member-text="currentDesc">顯示兩小時內、以目前電話號碼建立的訂單。</p>
        </div>
        <div id="memberCurrentOrders" class="member-order-list"></div>
      </div>

      <div class="member-panel" id="memberPanelService">
        <div class="member-panel-heading">
          <h3 data-member-text="serviceTitle">桌邊服務</h3>
          <p data-member-text="serviceDesc">先選擇座位，再點選需要的服務；送出後會即時出現在後台。</p>
        </div>
        <div class="service-table-block" id="serviceTableBlock">
          <div class="service-table-head">
            <div>
              <h4 data-member-text="selectTableTitle">選擇座位</h4>
              <p data-member-text="selectTableDesc">選擇完成後座位表會自動收起；需要更改時再展開。</p>
            </div>
            <button class="admin-secondary-btn admin-small-btn" type="button" id="serviceChangeTableBtn">選擇座位</button>
          </div>
          <div id="serviceSelectedTable" class="selected-table-label">未選擇</div>
          <div id="serviceTableSelector" class="service-table-selector"></div>
        </div>
        <div class="service-category-block">
          <h4 data-member-text="foodTitle">食物</h4>
          <div class="service-button-grid" id="serviceFoodButtons"></div>
        </div>
        <div class="service-category-block">
          <h4 data-member-text="drinkTitle">飲料</h4>
          <div class="service-button-grid" id="serviceDrinkButtons"></div>
        </div>
        <div class="service-category-block">
          <h4 data-member-text="supplyTitle">用品</h4>
          <div class="service-button-grid" id="serviceSupplyButtons"></div>
        </div>
        <div id="serviceRequestMessage" class="service-request-message"></div>
      </div>

      <div class="member-panel" id="memberPanelHistory">
        <div class="member-panel-heading">
          <h3 data-member-text="historyTitle">歷史紀錄</h3>
          <p data-member-text="historyDesc">顯示兩小時以前、以目前電話號碼建立的每一筆訂單。</p>
        </div>
        <div id="memberHistoryOrders" class="member-order-list"></div>
      </div>

      <div class="member-panel" id="memberPanelProfile">
        <div class="member-panel-heading">
          <h3 data-member-text="profileTitle">個人資料修改</h3>
          <p data-member-text="profileDesc">目前先顯示資料，修改功能下一步再做。</p>
        </div>
        <div id="memberProfileInfo" class="member-profile-info"></div>
      </div>
    </div>
  </div>
</section>
${Tt()}
`,up=[Rt,Ct`
(function initMemberPage() {
  const ADMIN_NAME = 'awesome';
  const TWO_HOURS = 2 * 60 * 60 * 1000;

  function el(id) { return document.getElementById(id); }

  function safeCurrentLang() {
    return window.currentLang || localStorage.getItem('lang') || 'zh';
  }

  function text(zh, en) {
    return safeCurrentLang() === 'en' ? en : zh;
  }


  const MEMBER_DASHBOARD_TEXT = {
    tabCurrent: ['當前訂單', 'Current Orders'],
    tabService: ['桌邊服務', 'Table Service'],
    tabHistory: ['歷史紀錄', 'Order History'],
    tabProfile: ['個人資料修改', 'Profile'],
    currentTitle: ['當前訂單', 'Current Orders'],
    currentDesc: ['顯示兩小時內、以目前電話號碼建立的訂單。', 'Shows orders created with this phone number within the last two hours.'],
    serviceTitle: ['桌邊服務', 'Table Service'],
    serviceDesc: ['先選擇座位，再點選需要的服務；送出後會即時出現在後台內用訂餐區。', 'Choose a table, then select a service. It will appear immediately in the admin dine-in order area.'],
    selectTableTitle: ['選擇座位', 'Select Table'],
    selectTableDesc: ['選擇完成後座位表會自動收起；需要更改時再展開。', 'After selecting a table, the floor plan closes automatically. Open it again to change tables.'],
    foodTitle: ['食物', 'Food'],
    drinkTitle: ['飲料', 'Drinks'],
    supplyTitle: ['用品', 'Supplies'],
    historyTitle: ['歷史紀錄', 'Order History'],
    historyDesc: ['顯示兩小時以前、以目前電話號碼建立的每一筆訂單。', 'Shows orders older than two hours created with this phone number.'],
    profileTitle: ['個人資料修改', 'Profile'],
    profileDesc: ['目前先顯示資料，修改功能下一步再做。', 'Profile editing will be added in the next step.']
  };

  function memberText(key) {
    const pair = MEMBER_DASHBOARD_TEXT[key] || [key, key];
    return text(pair[0], pair[1]);
  }

  function applyMemberDashboardLanguage() {
    document.querySelectorAll('[data-member-text]').forEach(function(node) {
      node.textContent = memberText(node.getAttribute('data-member-text'));
    });
    renderServiceTableSelector();
    renderServiceButtons();
    renderServiceMessage();
    try {
      const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
      if (user) {
        renderOrdersForUser(user);
        renderProfile(user);
      }
    } catch (error) {}
  }

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>'"]/g, function(ch) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[ch];
    });
  }

  function phoneDigits(value) {
    return String(value || '').replace(/\D/g, '').slice(0, 10);
  }

  function formatPhone(value) {
    const digits = phoneDigits(value);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return digits.slice(0, 3) + '-' + digits.slice(3);
    return digits.slice(0, 3) + '-' + digits.slice(3, 6) + '-' + digits.slice(6);
  }

  function message(zh, en, type) {
    const msg = text(zh, en);
    const box = el('memberLoginMessage');
    if (box) {
      box.textContent = msg;
      box.style.color = type === 'success' ? '#1f8a4c' : '#c0392b';
    }
    if (typeof window.showToast === 'function') window.showToast(msg, type || 'error');
  }

  function serviceMessage(zh, en, type) {
    lastServiceMessage = { zh: zh, en: en, type: type || 'success' };
    renderServiceMessage();
    const msg = text(zh, en);
    if (typeof window.showToast === 'function') window.showToast(msg, type || 'success');
  }

  function renderServiceMessage() {
    const box = el('serviceRequestMessage');
    if (!box || !lastServiceMessage) return;
    box.textContent = text(lastServiceMessage.zh, lastServiceMessage.en);
    box.className = 'service-request-message ' + (lastServiceMessage.type === 'success' ? 'is-success' : 'is-error');
  }

  function setPhoneInputs() {
    const login = el('loginEmail');
    const regPhone = el('regPhone');
    if (login) login.addEventListener('input', function() {
      if (String(login.value || '').trim().toLowerCase() !== ADMIN_NAME) login.value = formatPhone(login.value);
    });
    if (regPhone) regPhone.addEventListener('input', function() { regPhone.value = formatPhone(regPhone.value); });
  }

  window.switchTab = function(tab) {
    el('tabLogin')?.classList.toggle('active', tab === 'login');
    el('tabRegister')?.classList.toggle('active', tab === 'register');
    if (el('loginForm')) el('loginForm').style.display = tab === 'login' ? 'block' : 'none';
    if (el('registerForm')) el('registerForm').style.display = tab === 'register' ? 'block' : 'none';
    const box = el('memberLoginMessage');
    if (box) box.textContent = '';
  };

  function saveAdminSession(payload, username) {
    localStorage.setItem('admin_token', payload.token);
    localStorage.setItem('admin_user', payload.username || username || ADMIN_NAME);
    localStorage.removeItem('admin_auth');
  }

  function goToAdminDashboard() { window.location.hash = '#/admin-dashboard'; }

  async function backendAdminLogin(username, password) {
    let response;
    try {
      response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
    } catch (networkError) {
      const error = new Error('network');
      error.isNetworkError = true;
      throw error;
    }
    const payload = await response.json().catch(function() { return {}; });
    if (!response.ok || !payload.token) throw new Error(payload.message || 'login failed');
    return payload;
  }

  function getUsers() {
    try { return JSON.parse(localStorage.getItem('users') || '[]'); } catch (error) { return []; }
  }

  function saveUsers(users) { localStorage.setItem('users', JSON.stringify(users)); }

  function normalizeUser(raw) {
    const phone = formatPhone(raw.phone || raw.email || raw.username || '');
    return {
      name: raw.name || phone,
      email: raw.email || '',
      phone: phone,
      phoneDigits: phoneDigits(phone),
      password: raw.password || ''
    };
  }

  window.handleLogin = async function(event) {
    if (event) event.preventDefault();
    const usernameRaw = String(el('loginEmail')?.value || '').trim();
    const username = usernameRaw.toLowerCase();
    const password = String(el('loginPassword')?.value || '').trim();

    if (!usernameRaw || !password) {
      message('請輸入電話號碼與密碼', 'Please enter phone number and password', 'error');
      return false;
    }

    if (username === ADMIN_NAME) {
      message('正在驗證後台帳號...', 'Checking admin account...', 'success');
      try {
        const payload = await backendAdminLogin(username, password);
        saveAdminSession(payload, username);
        message('後台登入成功，正在進入後台...', 'Admin login successful. Opening dashboard...', 'success');
        setTimeout(goToAdminDashboard, 120);
      } catch (error) {
        if (error.isNetworkError) message('無法連線後台伺服器，請先執行 npm start', 'Cannot reach the backend server. Please run npm start first.', 'error');
        else message('後台帳號或密碼錯誤', 'Invalid admin username or password', 'error');
      }
      return false;
    }

    const loginDigits = phoneDigits(usernameRaw);
    if (loginDigits.length !== 10) {
      message('請輸入 10 位數電話號碼', 'Please enter a 10-digit phone number', 'error');
      return false;
    }

    const users = getUsers().map(normalizeUser);
    const user = users.find(function(u) { return u.phoneDigits === loginDigits && String(u.password || '') === password; });
    if (!user) {
      message('電話號碼或密碼錯誤', 'Invalid phone number or password', 'error');
      return false;
    }
    localStorage.setItem('currentUser', JSON.stringify(user));
    showDashboard(user);
    return false;
  };

  window.handleRegister = function(event) {
    if (event) event.preventDefault();
    const digits = phoneDigits(el('regPhone')?.value || '');
    if (digits.length !== 10) {
      message('請輸入 10 位數電話號碼', 'Please enter a 10-digit phone number', 'error');
      return false;
    }
    const user = normalizeUser({
      name: el('regName')?.value || '',
      email: el('regEmail')?.value || '',
      phone: formatPhone(digits),
      password: el('regPassword')?.value || ''
    });
    const users = getUsers().map(normalizeUser);
    if (users.find(function(u) { return u.phoneDigits === user.phoneDigits; })) {
      message('此電話號碼已註冊', 'This phone number is already registered', 'error');
      return false;
    }
    users.push(user);
    saveUsers(users);
    message('註冊成功，請用電話號碼登入', 'Registered successfully. Please log in with your phone number.', 'success');
    window.switchTab('login');
    el('registerForm')?.reset();
    return false;
  };

  function getOrdersForPhone(phone) {
    const digits = phoneDigits(phone);
    let orders = [];
    try { orders = JSON.parse(localStorage.getItem('orders') || '[]'); } catch (error) { orders = []; }
    return orders.filter(function(order) {
      const orderPhone = phoneDigits(order.customerPhone || order.phone || order.memberPhone || '');
      return orderPhone === digits && Array.isArray(order.items) && order.items.some(function(item) {
        return Number(item.qty || item.quantity || 0) > 0;
      });
    }).sort(function(a, b) { return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime(); });
  }

  function getOrderAge(order) {
    const createdAt = new Date(order.createdAt || order.time || 0).getTime();
    if (!createdAt) return Number.MAX_SAFE_INTEGER;
    return Date.now() - createdAt;
  }

  function orderTypeText(order) {
    const type = order.orderType || order.type;
    if (type === 'dinein' || type === 'dine-in') return text('內用', 'Dine-in');
    if (type === 'delivery') return text('外送', 'Delivery');
    return text('外帶自取', 'Pickup');
  }

  function orderLocationText(order) {
    const type = order.orderType || order.type;
    if (type === 'dinein' || type === 'dine-in') return text('桌號 ', 'Table ') + esc(order.table || order.tableNumber || '-');
    return text('取餐 ', 'Pickup ') + esc(order.pickupTime || '-');
  }

  function orderStatusText(order) {
    return esc(order.status || order.orderStatus || text('新訂單', 'New order'));
  }

  function formatTotal(order) {
    const value = order.cashTotal != null ? order.cashTotal : order.totalPrice != null ? order.totalPrice : order.total != null ? order.total : 0;
    return '$' + Number(value || 0).toFixed(2);
  }

  function itemLine(item) {
    const name = safeCurrentLang() === 'en' && item.name_en ? item.name_en : item.name;
    const code = item.displayId || item.id || '';
    const qty = item.qty != null ? item.qty : item.quantity;
    return '<li>' + esc((code ? '#' + code + ' ' : '') + (name || '') + ' x' + qty) + '</li>';
  }

  function renderOrderCard(order) {
    const created = order.createdAt ? new Date(order.createdAt).toLocaleString() : '-';
    return '<article class="member-order-card">'
      + '<div class="member-order-card-top">'
      + '  <div><strong>' + esc(orderTypeText(order)) + '</strong><span>' + esc(orderLocationText(order)) + '</span></div>'
      + '  <span class="member-order-status">' + orderStatusText(order) + '</span>'
      + '</div>'
      + '<div class="member-order-created">' + esc(text('建立：', 'Created: ') + created) + '</div>'
      + '<div class="member-order-card-body">'
      + '  <ul>' + (Array.isArray(order.items) ? order.items.map(itemLine).join('') : '') + '</ul>'
      + '  <div class="member-order-summary">'
      + '    <strong>' + esc(formatTotal(order)) + '</strong>'
      + '    <span>' + esc(order.customerName || '') + '</span>'
      + '    <span>' + esc(order.customerPhone || '') + '</span>'
      + '  </div>'
      + '</div>'
      + '</article>';
  }

  function renderOrdersForUser(user) {
    const orders = getOrdersForPhone(user.phone);
    const current = orders.filter(function(order) { return getOrderAge(order) <= TWO_HOURS; });
    const history = orders.filter(function(order) { return getOrderAge(order) > TWO_HOURS; });
    const currentBox = el('memberCurrentOrders');
    const historyBox = el('memberHistoryOrders');
    if (currentBox) currentBox.innerHTML = current.length ? current.map(renderOrderCard).join('') : '<div class="member-empty-box">' + esc(text('目前沒有兩小時內的訂單', 'No current orders within the last two hours')) + '</div>';
    if (historyBox) historyBox.innerHTML = history.length ? history.map(renderOrderCard).join('') : '<div class="member-empty-box">' + esc(text('目前沒有兩小時以前的歷史訂單', 'No historical orders older than two hours')) + '</div>';
  }

  function renderProfile(user) {
    const profile = el('memberProfileInfo');
    if (!profile) return;
    profile.innerHTML = '<div class="profile-row"><span>' + esc(text('姓名', 'Name')) + '</span><strong>' + esc(user.name || '-') + '</strong></div>'
      + '<div class="profile-row"><span>' + esc(text('電話', 'Phone')) + '</span><strong>' + esc(user.phone || '-') + '</strong></div>'
      + '<div class="profile-row"><span>' + esc(text('電子郵件', 'Email')) + '</span><strong>' + esc(user.email || '-') + '</strong></div>'
      + '<div class="profile-note">' + esc(text('資料修改功能下一步再做。', 'Profile editing will be added in the next step.')) + '</div>';
  }

  function setActivePanel(name) {
    document.querySelectorAll('.member-action-tab').forEach(function(btn) {
      btn.classList.toggle('active', btn.getAttribute('data-member-panel') === name);
    });
    const map = { current: 'memberPanelCurrent', service: 'memberPanelService', history: 'memberPanelHistory', profile: 'memberPanelProfile' };
    Object.keys(map).forEach(function(key) {
      const panel = el(map[key]);
      if (panel) panel.classList.toggle('active', key === name);
    });
  }


  const SERVICE_TABLE_ROWS = [
    { cls: 'booth-row top-booth-row', type: 'booth-seat', ids: ['E5', 'E4', 'E3', 'E2', 'E1'] },
    { cls: 'table-row upper-table-row', type: 'round-seat', ids: ['D3', 'D2', 'D1', 'C2'] },
    { cls: 'table-row lower-table-row', type: 'round-seat', ids: ['B3', 'B2', 'B1', 'C1'] },
    { cls: 'booth-row bottom-booth-row', type: 'booth-seat', ids: ['A5', 'A4', 'A3', 'A2', 'A1'] }
  ];
  let currentServiceTable = '';
  let serviceTableOpen = true;
  let lastServiceMessage = null;

  function serviceTableHtml(selected) {
    const mainRows = SERVICE_TABLE_ROWS.map(function(row, index) {
      const buttons = row.ids.map(function(id) {
        return '<button type="button" class="table-seat ' + row.type + (selected === id ? ' active' : '') + '" data-service-table="' + esc(id) + '">' + esc(id) + '</button>';
      }).join('');
      if (index === 1 || index === 2) return '<div class="floor-plan-row ' + row.cls + '">' + buttons + '</div>';
      return '<div class="floor-plan-row ' + row.cls + '">' + buttons + '</div>';
    });
    return '<div class="floor-plan floor-plan-v2" aria-label="座位選擇">'
      + '<div class="floor-main-area">'
      + mainRows[0]
      + '<div class="floor-table-area">' + mainRows[1] + mainRows[2] + '</div>'
      + mainRows[3]
      + '</div>'
      + '<div class="floor-side-area"><div class="counter-label">Counter</div><div class="entrance-label">Entrance</div></div>'
      + '</div>';
  }

  function renderServiceTableSelector() {
    const selectedLabel = el('serviceSelectedTable');
    const selector = el('serviceTableSelector');
    const changeBtn = el('serviceChangeTableBtn');
    if (selectedLabel) {
      selectedLabel.textContent = currentServiceTable || text('未選擇', 'Not selected');
      selectedLabel.classList.toggle('has-selection', Boolean(currentServiceTable));
    }
    if (changeBtn) changeBtn.textContent = currentServiceTable ? text('更改座位', 'Change table') : text('選擇座位', 'Select table');
    if (selector) {
      selector.style.display = serviceTableOpen ? 'block' : 'none';
      selector.innerHTML = serviceTableOpen ? serviceTableHtml(currentServiceTable) : '';
    }
  }

  function setServiceTable(id) {
    currentServiceTable = String(id || '').trim().toUpperCase();
    serviceTableOpen = false;
    try { localStorage.setItem('memberServiceTable', currentServiceTable); } catch (error) {}
    renderServiceTableSelector();
    serviceMessage('已選擇座位：' + currentServiceTable, 'Selected table: ' + currentServiceTable, 'success');
  }

  const SERVICE_ITEM_REGISTRY = {};

  function serviceItem(id, zh, en, qty, zhDesc, enDesc) {
    const item = {
      id: id,
      label: text(zh, en),
      valueZh: zh,
      valueEn: en,
      desc: text(zhDesc || '', enDesc || ''),
      qty: Boolean(qty)
    };
    SERVICE_ITEM_REGISTRY[id] = item;
    return item;
  }

  function serviceButtonHtml(item) {
    const desc = item.desc ? '<small class="service-item-desc">' + esc(item.desc) + '</small>' : '';
    if (item.qty) {
      return '<div class="service-qty-card"><span>' + esc(item.label) + '</span>' + desc + '<select data-service-qty="' + esc(item.id) + '"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select><button type="button" data-service-key="' + esc(item.id) + '">' + esc(text('送出', 'Submit')) + '</button></div>';
    }
    return '<button class="service-request-btn" type="button" data-service-key="' + esc(item.id) + '"><span>' + esc(item.label) + '</span>' + desc + '</button>';
  }

  function renderServiceButtons() {
    const food = [
      serviceItem('rice-refill', '補飯', 'Rice refill'),
      serviceItem('fruit', '上水果', 'Fruit'),
      serviceItem('fortune-cookies', '幸運餅乾', 'Fortune cookies'),
      serviceItem('chili-sauce', '辣椒', 'Chili sauce')
    ];
    const drink = [
      serviceItem('water-refill', '補水', 'Water refill'),
      serviceItem('hot-tea-refill', '補熱茶', 'Hot tea refill'),
      serviceItem('sweet-iced-tea', '補冰茶(甜)', 'Sweet iced tea'),
      serviceItem('unsweetened-iced-tea', '補冰茶(不甜)', 'Unsweetened iced tea')
    ];
    const supply = [
      serviceItem('napkins', '補紙巾', 'Napkins'),
      serviceItem('paper-towels', '擦手紙', 'Paper towels'),
      serviceItem('straws', '吸管', 'Straws'),
      serviceItem('bowls-plates', '碗盤', 'Bowls / plates', true),
      serviceItem('chopsticks', '筷子', 'Chopsticks', true),
      serviceItem('large-to-go-box', '大盒子', 'Large to-go box', true, '適合餐點 1/3 量以上', 'For more than 1/3 of a dish'),
      serviceItem('small-to-go-box', '小盒子', 'Small to-go box', true, '適合餐點 1/3 量以下', 'For less than 1/3 of a dish'),
      serviceItem('large-soup-box', '大湯盒', 'Large soup container', true, '密封湯盒，適合裝湯品 1/2 左右', 'Sealed soup container, about half a soup portion'),
      serviceItem('small-soup-box', '小湯盒', 'Small soup container', true, '適合裝有湯汁的菜品', 'For dishes with sauce or soup'),
      serviceItem('large-bag', '大袋子', 'Large bag', true),
      serviceItem('small-bag', '小袋子', 'Small bag', true)
    ];
    if (el('serviceFoodButtons')) el('serviceFoodButtons').innerHTML = food.map(serviceButtonHtml).join('');
    if (el('serviceDrinkButtons')) el('serviceDrinkButtons').innerHTML = drink.map(serviceButtonHtml).join('');
    if (el('serviceSupplyButtons')) el('serviceSupplyButtons').innerHTML = supply.map(serviceButtonHtml).join('');
  }

  async function postServiceRequestToBackend(request) {
    const response = await fetch('/api/service-requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request)
    });
    const payload = await response.json().catch(function() { return {}; });
    if (!response.ok || !payload.ok) throw new Error(payload.message || 'service request failed');
    return payload.request || request;
  }

  function saveServiceRequestLocal(request) {
    let requests = [];
    try { requests = JSON.parse(localStorage.getItem('serviceRequests') || '[]'); } catch (error) { requests = []; }
    requests.unshift(request);
    localStorage.setItem('serviceRequests', JSON.stringify(requests));
  }

  async function saveServiceRequest(item, qty) {
    item = item || {};
    const label = item.label || item.valueZh || item.valueEn || '';
    let user = null;
    try { user = JSON.parse(localStorage.getItem('currentUser') || 'null'); } catch (error) {}
    if (!user) return;
    if (!currentServiceTable) {
      serviceTableOpen = true;
      renderServiceTableSelector();
      serviceMessage('請先選擇座位', 'Please select a table first', 'error');
      return;
    }
    const request = {
      id: 'SR-' + Date.now(),
      table: currentServiceTable,
      phone: user.phone,
      phoneDigits: phoneDigits(user.phone),
      name: user.name || '',
      item: item.valueZh || label,
      itemZh: item.valueZh || label,
      itemEn: item.valueEn || label,
      quantity: qty || 1,
      kind: 'service',
      status: 'new',
      createdAt: new Date().toISOString()
    };
    try {
      const saved = await postServiceRequestToBackend(request);
      saveServiceRequestLocal(saved);
      serviceMessage('已送出桌邊服務：' + currentServiceTable + '｜' + (item.valueZh || label) + ' x' + (qty || 1), 'Service request sent: ' + currentServiceTable + ' | ' + (item.valueEn || label) + ' x' + (qty || 1), 'success');
    } catch (error) {
      saveServiceRequestLocal(request);
      serviceMessage('已暫存在本機；如需同步後台請確認 npm start 正在執行', 'Saved locally. To sync with admin, make sure npm start is running.', 'error');
    }
  }

  function bindDashboardEvents() {
    document.querySelectorAll('.member-action-tab').forEach(function(btn) {
      btn.addEventListener('click', function() { setActivePanel(btn.getAttribute('data-member-panel') || 'current'); });
    });
    document.getElementById('memberDashboard')?.addEventListener('click', function(event) {
      const tableBtn = event.target.closest('[data-service-table]');
      if (tableBtn) { setServiceTable(tableBtn.getAttribute('data-service-table') || ''); return; }
      if (event.target.closest('#serviceChangeTableBtn')) { serviceTableOpen = true; renderServiceTableSelector(); return; }
      const btn = event.target.closest('[data-service-key]');
      if (!btn) return;
      const key = btn.getAttribute('data-service-key') || '';
      const item = SERVICE_ITEM_REGISTRY[key];
      const qtySelect = document.querySelector('[data-service-qty="' + CSS.escape(key) + '"]');
      const qty = qtySelect ? Number(qtySelect.value || 1) : 1;
      saveServiceRequest(item, qty);
    });
  }

  window.showDashboard = function(user) {
    user = normalizeUser(user || {});
    localStorage.setItem('currentUser', JSON.stringify(user));
    if (el('memberForm')) el('memberForm').style.display = 'none';
    if (el('memberDashboard')) el('memberDashboard').style.display = 'block';
    if (el('memberName')) el('memberName').textContent = user.name || user.phone || '';
    if (el('memberPhone')) el('memberPhone').textContent = user.phone || '';
    if (el('memberEmail')) el('memberEmail').textContent = user.email || '';
    if (el('memberAvatar')) el('memberAvatar').textContent = (user.name || user.phone || '?').charAt(0).toUpperCase();
    renderOrdersForUser(user);
    renderServiceButtons();
    try { currentServiceTable = localStorage.getItem('memberServiceTable') || ''; } catch (error) { currentServiceTable = ''; }
    serviceTableOpen = !currentServiceTable;
    renderServiceTableSelector();
    renderProfile(user);
    applyMemberDashboardLanguage();
    setActivePanel('current');
  };

  window.handleLogout = function() {
    localStorage.removeItem('currentUser');
    if (el('memberForm')) el('memberForm').style.display = 'block';
    if (el('memberDashboard')) el('memberDashboard').style.display = 'none';
    el('loginForm')?.reset();
    message('已登出', 'Logged out', 'success');
  };

  window.addEventListener('languagechange', applyMemberDashboardLanguage);
  window.addEventListener('chinesevariantchange', applyMemberDashboardLanguage);

  el('tabLogin')?.addEventListener('click', function() { window.switchTab('login'); });
  el('tabRegister')?.addEventListener('click', function() { window.switchTab('register'); });
  el('loginForm')?.addEventListener('submit', window.handleLogin);
  el('registerForm')?.addEventListener('submit', window.handleRegister);
  el('memberLogoutBtn')?.addEventListener('click', window.handleLogout);
  setPhoneInputs();
  bindDashboardEvents();

  try {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (currentUser) window.showDashboard(currentUser);
  } catch (error) {}
})();
  `],mp={html:cp,scripts:up,source:"member.html"},pp=He`
${_t()}
<div class="page-header">
<div class="container">
<h1 data-i18n="about_page_title">關於我們</h1>
<p data-i18n="about_page_subtitle">用心料理，用愛服務</p>
</div>
</div>
<section class="section" style="background:var(--white)">
<div class="container">
<div class="about-section">
<div class="about-img-wrap fade-in">
<img class="about-photo" src="/images/about-us-family-photo.png" alt="Owners standing in front of the restaurant" />
</div>
<div class="about-text fade-in">
<h2 data-i18n="about_story">我們的故事</h2>
<p data-i18n="about_story_p1">我們是一家主打廣東菜的餐廳，從燒臘、海鮮、熱炒到湯品，保留粵菜講究鮮、嫩、清、和的特色，也結合適合家庭與朋友聚餐的豐富菜色。</p>
<p data-i18n="about_story_p2">開業兩年有餘以來，我們始終秉持用心料理、真誠待客的精神，持續精進每一道餐點，讓每位來訪的客人都能感受到溫暖與地道風味。</p>
<div class="about-stats">
<div class="stat-item">
<div class="stat-number">28+</div>
<div class="stat-label" data-i18n="about_years">個月營運</div>
</div>
<div class="stat-item">
<div class="stat-number">180</div>
<div class="stat-label" data-i18n="about_dishes">道料理</div>
</div>
<div class="stat-item">
<div class="stat-number">6K+</div>
<div class="stat-label" data-i18n="about_customers">位顧客</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="section">
<div class="container">
<div class="section-title fade-in">
<h2 data-i18n="about_philosophy">我們的理念</h2>
<div class="divider"></div>
</div>
<div class="fade-in" style="max-width:700px;margin:0 auto;text-align:center">
<p data-i18n="about_philosophy_p" style="font-size:1.1rem;color:var(--text-light);line-height:2">堅持使用當季新鮮食材，减少不必要的添加物，讓每位顧客都能品嚐到食物最純粹的美味。</p>
</div>
</div>
</section>
<section class="section" style="background:var(--white)">
<div class="container">
<div class="section-title fade-in">
<h2 data-i18n="about_env_title">用餐環境</h2>
<div class="divider"></div>
</div>
<div class="about-space-gallery fade-in">
<div class="about-space-card">
<img class="about-space-photo" src="/images/view1.png" alt="Restaurant dining room with red round banquet tables" />
</div>
<div class="about-space-card">
<img class="about-space-photo" src="/images/view2.png" alt="Restaurant booth seating with warm pendant lighting" />
</div>
</div>
</div>
</section>
<section class="section">
<div class="container">
<div class="section-title fade-in">
<h2 data-i18n="about_location_title">餐廳位置</h2>
<div class="divider"></div>
</div>
<div class="fade-in" style="max-width:800px;margin:0 auto">
<div style="background:var(--bg-warm);border-radius:var(--radius);padding:30px;text-align:center">
<div style="font-size:3rem;margin-bottom:15px">📍</div>
<h3 style="margin-bottom:10px">1520 Independence Pkwy, Plano, TX 75075</h3>
<p style="color:var(--text-light);margin-bottom:5px">Plano, Texas</p>
<p style="color:var(--text-light)">營業時間：週一至週日 11:00 - 21:00（週二公休，20:30 最後點餐）</p>
<div style="margin-top:20px;padding:20px;background:linear-gradient(135deg, #667eea, #764ba2);border-radius:8px;color:white">
<p style="font-size:0.9rem;opacity:0.8">Google Maps 圖區域</p>
<p style="font-size:0.8rem;opacity:0.6;margin-top:5px">（可嵌入實際地圖）</p>
</div>
</div>
</div>
</div>
</section>
${Tt()}
`,fp=[Rt],gp={html:pp,scripts:fp,source:"about.html"},hp=He`
${_t()}
<div class="page-header">
<div class="container">
<h1 data-i18n="promo_page_title">優惠活動</h1>
<p data-i18n="promo_page_subtitle">精彩優惠，不容錯過</p>
</div>
</div>
<section class="section">
<div class="container">
<div class="promo-grid">
<div class="promo-card fade-in">
<div class="promo-card-img" style="background:linear-gradient(135deg, #e74c3c, #c0392b)"></div>
<div class="promo-card-body">
<span class="promo-badge">HOT</span>
<h3 data-i18n="promo_new_member">新會員優惠</h3>
<p data-i18n="promo_new_member_desc">首次加入會員並消費，即享全單9折優惠</p>
<span class="promo-date" data-i18n="promo_new_member_date">長期活動</span>
</div>
</div>
<div class="promo-card fade-in">
<div class="promo-card-img" style="background:linear-gradient(135deg, #e91e63, #f06292)"></div>
<div class="promo-card-body">
<span class="promo-badge">🎂</span>
<h3 data-i18n="promo_birthday">生日優惠</h3>
<p data-i18n="promo_birthday_desc">生日當月消費滿$1000，贈送精緻生日蛋糕一份</p>
<span class="promo-date" data-i18n="promo_birthday_date">長期活動</span>
</div>
</div>
<div class="promo-card fade-in">
<div class="promo-card-img" style="background:linear-gradient(135deg, #f39c12, #e67e22)"></div>
<div class="promo-card-body">
<span class="promo-badge">⏰</span>
<h3 data-i18n="promo_weekday">平日午間優惠</h3>
<p data-i18n="promo_weekday_desc">週一至週五 11:00-14:00，精選套餐只要$299起</p>
<span class="promo-date" data-i18n="promo_weekday_date">每週一至週五</span>
</div>
</div>
<div class="promo-card fade-in">
<div class="promo-card-img" style="background:linear-gradient(135deg, #27ae60, #2ecc71)"></div>
<div class="promo-card-body">
<span class="promo-badge">👨‍👩‍👧‍👦</span>
<h3 data-i18n="promo_family">家庭聚餐方案</h3>
<p data-i18n="promo_family_desc">4人以上團體用餐，享套餐85折優惠，再贈送飲品一杯</p>
<span class="promo-date" data-i18n="promo_family_date">需提前預約</span>
</div>
</div>
<div class="promo-card fade-in">
<div class="promo-card-img" style="background:linear-gradient(135deg, #8e44ad, #9b59b6)"></div>
<div class="promo-card-body">
<span class="promo-badge">🛍️</span>
<h3 data-i18n="promo_takeout">外帶自取優惠</h3>
<p data-i18n="promo_takeout_desc">滿$500折$50，滿$1000折$120</p>
<span class="promo-date" data-i18n="promo_takeout_date">長期活動</span>
</div>
</div>
<div class="promo-card fade-in">
<div class="promo-card-img" style="background:linear-gradient(135deg, #3498db, #2980b9)"></div>
<div class="promo-card-body">
<span class="promo-badge">🤝</span>
<h3 data-i18n="promo_refer">推薦好友</h3>
<p data-i18n="promo_refer_desc">成功推薦一位新會員，雙方各獲得$100抵用券</p>
<span class="promo-date" data-i18n="promo_refer_date">長期活動</span>
</div>
</div>
</div>
</div>
</section>
${Tt()}
`,vp=[Rt],yp={html:hp,scripts:vp,source:"promotions.html"},_p=He`
${_t()}
<div class="page-header admin-page-header">
  <div class="container">
    <h1>後台管理</h1>
    <p>預定訂位與購物車資訊</p>
  </div>
</div>
<section class="section admin-section">
  <div class="container">
    <div id="adminDashboard" class="admin-dashboard">
      <div class="admin-dashboard-top">
        <div>
          <h2>管理中心</h2>
          <p>「購物車」內會同時顯示內用訂餐、桌邊服務與外帶自取；未處理項目為紅底白框，已處理項目為白底紅框。</p>
        </div>
        <button class="admin-secondary-btn" type="button" id="adminLogoutBtn">登出</button>
      </div>

      <div class="admin-view-tabs" role="tablist" aria-label="管理中心分類">
        <button class="admin-view-tab active" type="button" data-admin-view="cart">購物車</button>
        <button class="admin-view-tab" type="button" data-admin-view="service">桌邊服務</button>
        <button class="admin-view-tab" type="button" data-admin-view="reservation">預定</button>
      </div>

      <div id="adminCartView" class="admin-view-panel active">
        <div class="admin-panel">
          <div class="admin-panel-title-row">
            <div>
              <h3>購物車 / 訂單資訊</h3>
              <p>左側顯示內用訂餐與桌邊服務，右側顯示外帶自取訂單。</p>
            </div>
            <button class="admin-secondary-btn admin-small-btn" type="button" id="adminReloadOrdersBtn">重新整理</button>
          </div>
          <div id="adminCartList" class="admin-list admin-cart-list"></div>
          <div id="adminOrdersList" class="admin-orders-split"></div>
        </div>
      </div>


      <div id="adminServiceView" class="admin-view-panel">
        <div class="admin-panel">
          <div class="admin-panel-title-row">
            <div>
              <h3>桌邊服務</h3>
              <p>會員送出的補飯、補水、用品等桌邊服務會即時出現在這裡；完成後按「完成」刪除。</p>
            </div>
            <button class="admin-secondary-btn admin-small-btn" type="button" id="adminReloadServiceBtn">重新整理</button>
          </div>
          <div id="adminServiceRequestsList" class="admin-orders-split"></div>
        </div>
      </div>

      <div id="adminReservationView" class="admin-view-panel">
        <div class="admin-panel">
          <div class="admin-panel-title-row">
            <div>
              <h3>預定訂位</h3>
              <p>顧客送出訂位後，會在這裡新增一筆資料。</p>
            </div>
            <button class="admin-secondary-btn admin-small-btn" type="button" id="adminReloadBtn">重新整理</button>
          </div>
          <div id="adminReservationsList" class="admin-list"></div>
        </div>
      </div>
    </div>
  </div>
</section>
${Tt()}
`,wp=[Rt,zr,Ct`
function adminParseJson(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || '[]');
    return Array.isArray(value) ? value : [];
  } catch (error) {
    return [];
  }
}

function adminGetToken() {
  return localStorage.getItem('admin_token') || '';
}

function adminAuthHeaders(extra) {
  return Object.assign({ 'Authorization': 'Bearer ' + adminGetToken() }, extra || {});
}

function adminHandleUnauthorized(response) {
  if (response.status === 401) {
    window.adminLogout();
    throw new Error('登入已過期，請重新登入');
  }
}

function formatAdminDate(value) {
  if (!value) return '-';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  const lang = window.currentLang === 'en' ? 'en-US' : 'zh-TW';
  return date.toLocaleString(lang, {
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit'
  });
}

function adminCurrency(value) {
  return '$' + Number(value || 0).toFixed(2).replace(/\.00$/, '');
}

function adminEscape(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function adminPhoneDigits(value) {
  return String(value || '').replace(/\D/g, '');
}

function adminOrderHasItems(order) {
  return Array.isArray(order && order.items) && order.items.some(function(item) {
    return Number(item.qty || item.quantity || 0) > 0;
  });
}

window.adminLogout = function() {
  localStorage.removeItem('admin_token');
  localStorage.removeItem('admin_user');
  localStorage.removeItem('admin_auth');
  window.location.hash = '#/member';
};

function setAdminView(view) {
  const nextView = view === 'reservation' || view === 'service' ? view : 'cart';
  localStorage.setItem('admin_active_view', nextView);
  document.querySelectorAll('[data-admin-view]').forEach(function(button) {
    button.classList.toggle('active', button.getAttribute('data-admin-view') === nextView);
  });
  document.getElementById('adminCartView')?.classList.toggle('active', nextView === 'cart');
  document.getElementById('adminServiceView')?.classList.toggle('active', nextView === 'service');
  document.getElementById('adminReservationView')?.classList.toggle('active', nextView === 'reservation');
}

// ===== Reservations =====
function adminNormalizeReservations(items) {
  return (Array.isArray(items) ? items : []).map(function(item, index) {
    return Object.assign({
      id: item.id || String(item.createdAt || Date.now()) + '-' + index,
      name: '', phone: '', date: '', time: '', guests: '', note: '',
      replied: false, replyNote: '', status: 'new', createdAt: new Date().toISOString()
    }, item);
  });
}

let adminReservationsCache = [];

async function adminLoadReservations() {
  const response = await fetch('/api/admin/reservations', { method: 'GET', headers: adminAuthHeaders() });
  adminHandleUnauthorized(response);
  const payload = await response.json().catch(function() { return {}; });
  if (!response.ok || !payload.ok) throw new Error(payload.message || 'load failed');
  adminReservationsCache = adminNormalizeReservations(payload.reservations || []);
  return adminReservationsCache;
}

async function adminUpdateReservationApi(id, data) {
  const response = await fetch('/api/admin/reservations/' + encodeURIComponent(id), {
    method: 'PUT', headers: adminAuthHeaders({ 'Content-Type': 'application/json' }), body: JSON.stringify(data)
  });
  adminHandleUnauthorized(response);
  const payload = await response.json().catch(function() { return {}; });
  if (!response.ok || !payload.ok) throw new Error(payload.message || 'update failed');
  return payload.reservation || data;
}

async function adminDeleteReservationApi(id) {
  const response = await fetch('/api/admin/reservations/' + encodeURIComponent(id), { method: 'DELETE', headers: adminAuthHeaders() });
  adminHandleUnauthorized(response);
  const payload = await response.json().catch(function() { return {}; });
  if (!response.ok || !payload.ok) throw new Error(payload.message || 'delete failed');
  return true;
}

const ADMIN_STATUS_LABELS = {
  'new': '未回覆',
  'replied': '已回覆',
  'confirmed': '已確認',
  'cancelled': '已取消',
  'seated': '已入座'
};

function adminGetReservationById(id) {
  return adminReservationsCache.find(function(item) { return String(item.id) === String(id); });
}

function adminDisplayStatus(res) {
  if (res.status === 'new' && res.replied) return 'replied';
  return ADMIN_STATUS_LABELS[res.status] ? res.status : (res.replied ? 'replied' : 'new');
}

function adminReservationIsHandled(res) {
  return Boolean(res.replied) || adminDisplayStatus(res) !== 'new';
}

function adminStatusOptionsHtml(selected) {
  return Object.keys(ADMIN_STATUS_LABELS).map(function(key) {
    return '<option value="' + key + '" ' + (key === selected ? 'selected' : '') + '>' + ADMIN_STATUS_LABELS[key] + '</option>';
  }).join('');
}

function reservationCardHtml(res, index) {
  const id = String(res.id || index);
  const statusKey = adminDisplayStatus(res);
  const statusLabel = ADMIN_STATUS_LABELS[statusKey] || statusKey;
  const handled = adminReservationIsHandled(res);
  return ''
    + '<div class="admin-record-card ' + (handled ? 'admin-card-handled' : 'admin-card-unhandled') + '" data-reservation-id="' + adminEscape(id) + '">'
    + '  <div class="admin-record-main">'
    + '    <div class="admin-record-info">'
    + '      <div class="admin-record-head">'
    + '        <h4>訂位 #' + (index + 1) + ' ｜ ' + adminEscape(res.name || '未填姓名') + '</h4>'
    + '        <span class="admin-status-pill">' + (handled ? '已處理' : '未處理') + '</span>'
    + '        <span class="admin-status-pill">' + adminEscape(statusLabel) + '</span>'
    + '      </div>'
    + '      <p>電話：' + adminEscape(res.phone || '-') + '</p>'
    + '      <p>日期時間：' + adminEscape(res.date || '-') + ' ' + adminEscape(res.time || '') + '</p>'
    + '      <p>人數：' + adminEscape(res.guests || '-') + '</p>'
    + '      <p>特殊需求：' + (res.note ? adminEscape(res.note) : '無') + '</p>'
    + '      <p>回復紀錄：' + (res.replyNote ? adminEscape(res.replyNote) : '尚無回復紀錄') + '</p>'
    + '      <p class="admin-muted">建立：' + formatAdminDate(res.createdAt) + '</p>'
    + '    </div>'
    + '    <div class="admin-record-actions">'
    + '      <label class="admin-reply-check"><input type="checkbox" ' + (res.replied ? 'checked' : '') + ' data-action="toggle-reply" data-id="' + adminEscape(id) + '"> 已回復</label>'
    + '      <label class="admin-reply-check">狀態 <select data-action="set-status" data-id="' + adminEscape(id) + '">' + adminStatusOptionsHtml(statusKey) + '</select></label>'
    + '      <button class="admin-secondary-btn admin-small-btn" type="button" data-action="show-edit" data-id="' + adminEscape(id) + '">編輯</button>'
    + '      <button class="admin-danger-btn admin-small-btn" type="button" data-action="delete" data-id="' + adminEscape(id) + '">刪除</button>'
    + '    </div>'
    + '  </div>'
    + '  <form class="admin-edit-form" id="adminEditReservation-' + adminEscape(id) + '" style="display:none" data-action="save-edit" data-id="' + adminEscape(id) + '">'
    + '    <div class="admin-edit-grid">'
    + '      <label>姓名<input name="name" value="' + adminEscape(res.name || '') + '" required></label>'
    + '      <label>電話<input name="phone" value="' + adminEscape(res.phone || '') + '" required></label>'
    + '      <label>日期<input name="date" type="date" value="' + adminEscape(res.date || '') + '" required></label>'
    + '      <label>時間<input name="time" value="' + adminEscape(res.time || '') + '" required></label>'
    + '      <label>人數<input name="guests" value="' + adminEscape(res.guests || '') + '" required></label>'
    + '      <label>狀態<select name="status">' + adminStatusOptionsHtml(statusKey) + '</select></label>'
    + '    </div>'
    + '    <label>特殊需求<textarea name="note" rows="2">' + adminEscape(res.note || '') + '</textarea></label>'
    + '    <label>回復紀錄<textarea name="replyNote" rows="2" placeholder="例如：已電話確認、已簡訊回覆">' + adminEscape(res.replyNote || '') + '</textarea></label>'
    + '    <label class="admin-reply-check"><input name="replied" type="checkbox" ' + (res.replied ? 'checked' : '') + '> 已回復</label>'
    + '    <div class="admin-edit-actions">'
    + '      <button class="btn-submit admin-save-btn" type="submit">儲存</button>'
    + '      <button class="admin-secondary-btn" type="button" data-action="hide-edit" data-id="' + adminEscape(id) + '">取消</button>'
    + '    </div>'
    + '  </form>'
    + '</div>';
}

window.renderAdminReservations = async function() {
  const list = document.getElementById('adminReservationsList');
  if (!list) return;
  list.innerHTML = '<div class="admin-empty">讀取訂位資料中...</div>';
  let reservations;
  try {
    reservations = await adminLoadReservations();
  } catch (error) {
    list.innerHTML = '<div class="admin-empty">無法載入訂位資料：' + adminEscape(error.message) + '</div>';
    return;
  }
  if (!reservations.length) {
    list.innerHTML = '<div class="admin-empty">目前沒有預定訂位資料</div>';
    return;
  }
  const unhandled = reservations.filter(function(item) { return !adminReservationIsHandled(item); }).length;
  list.innerHTML = '<div class="admin-subtitle">預定訂位：' + reservations.length + ' 筆｜未處理：' + unhandled + ' 筆</div>' + reservations.map(reservationCardHtml).join('');
};

async function adminPersistAndReload(action, successMessage) {
  try {
    await action();
    if (typeof showToast === 'function') showToast(successMessage, 'success');
  } catch (error) {
    if (typeof showToast === 'function') showToast('後台更新失敗：' + error.message, 'error');
  }
  await window.renderAdminReservations();
}

window.adminShowReservationEdit = function(id) {
  const form = document.getElementById('adminEditReservation-' + id);
  if (form) form.style.display = 'block';
};
window.adminHideReservationEdit = function(id) {
  const form = document.getElementById('adminEditReservation-' + id);
  if (form) form.style.display = 'none';
};
window.adminToggleReservationReply = async function(id, checked) {
  const original = adminGetReservationById(id);
  if (!original) return;
  const data = Object.assign({}, original, { replied: Boolean(checked), updatedAt: new Date().toISOString() });
  if (checked && (data.status === 'new' || !ADMIN_STATUS_LABELS[data.status])) data.status = 'replied';
  if (!checked && data.status === 'replied') data.status = 'new';
  await adminPersistAndReload(function() { return adminUpdateReservationApi(id, data); }, '回覆狀態已更新');
};
window.adminSetReservationStatus = async function(id, status) {
  const original = adminGetReservationById(id);
  if (!original || !ADMIN_STATUS_LABELS[status]) return;
  const data = Object.assign({}, original, { status: status, updatedAt: new Date().toISOString() });
  if (status === 'new') data.replied = false;
  if (status !== 'new') data.replied = true;
  await adminPersistAndReload(function() { return adminUpdateReservationApi(id, data); }, '狀態已更新為「' + ADMIN_STATUS_LABELS[status] + '」');
};
window.adminSaveReservationEdit = async function(form, id) {
  const original = adminGetReservationById(id) || { id: id, createdAt: new Date().toISOString() };
  const data = Object.assign({}, original, {
    name: form.elements.name.value.trim(), phone: form.elements.phone.value.trim(), date: form.elements.date.value,
    time: form.elements.time.value.trim(), guests: form.elements.guests.value.trim(), status: form.elements.status.value,
    note: form.elements.note.value.trim(), replyNote: form.elements.replyNote.value.trim(), replied: form.elements.replied.checked,
    updatedAt: new Date().toISOString()
  });
  if (data.status !== 'new') data.replied = true;
  await adminPersistAndReload(function() { return adminUpdateReservationApi(id, data); }, '訂位資料已更新');
};
window.adminDeleteReservation = async function(id) {
  if (!window.confirm('確定要刪除這筆訂位資料嗎？')) return;
  await adminPersistAndReload(function() { return adminDeleteReservationApi(id); }, '訂位資料已刪除');
};

// ===== Current cart + submitted orders =====
function getItemName(item) {
  if (window.currentLang === 'en' && item.name_en) return item.name_en;
  return item.name || item.title || item.id || 'Item';
}

function renderAdminCart() {
  const list = document.getElementById('adminCartList');
  if (!list) return;
  const cart = adminParseJson('cart').filter(function(item) { return Number(item.qty || item.quantity || 0) > 0; });
  if (!cart.length) {
    list.innerHTML = '<div class="admin-empty">目前瀏覽器購物車是空的</div>';
    return;
  }
  const totalQty = cart.reduce(function(sum, item) { return sum + Number(item.qty || item.quantity || 0); }, 0);
  const total = cart.reduce(function(sum, item) { return sum + Number(item.price || 0) * Number(item.qty || item.quantity || 0); }, 0);
  list.innerHTML = '<div class="admin-subtitle">目前瀏覽器購物車｜品項數量：' + totalQty + '</div>'
    + cart.map(function(item) {
      return '<div class="admin-current-cart-row"><span>' + adminEscape(getItemName(item)) + '</span><span>' + Number(item.qty || item.quantity || 0) + ' × ' + adminCurrency(item.price) + '</span></div>';
    }).join('')
    + '<div class="admin-cart-total">購物車小計：' + adminCurrency(total) + '</div>';
}

const ADMIN_ORDER_STATUS_LABELS = {
  'new': '新訂單',
  'making': '製作中',
  'ready': '可取餐',
  'completed': '已完成',
  'cancelled': '已取消'
};
let adminOrdersCache = [];

function adminOrderStatusOptionsHtml(selected) {
  return Object.keys(ADMIN_ORDER_STATUS_LABELS).map(function(key) {
    return '<option value="' + key + '" ' + (key === selected ? 'selected' : '') + '>' + ADMIN_ORDER_STATUS_LABELS[key] + '</option>';
  }).join('');
}
async function adminLoadOrders() {
  const response = await fetch('/api/admin/orders', { method: 'GET', headers: adminAuthHeaders() });
  adminHandleUnauthorized(response);
  const payload = await response.json().catch(function() { return {}; });
  if (!response.ok || !payload.ok) throw new Error(payload.message || 'load failed');
  adminOrdersCache = (Array.isArray(payload.orders) ? payload.orders : []).filter(adminOrderHasItems);
  return adminOrdersCache;
}
async function adminUpdateOrderApi(id, data) {
  const response = await fetch('/api/admin/orders/' + encodeURIComponent(id), {
    method: 'PUT', headers: adminAuthHeaders({ 'Content-Type': 'application/json' }), body: JSON.stringify(data)
  });
  adminHandleUnauthorized(response);
  const payload = await response.json().catch(function() { return {}; });
  if (!response.ok || !payload.ok) throw new Error(payload.message || 'update failed');
  return payload.order;
}
async function adminDeleteOrderApi(id) {
  const response = await fetch('/api/admin/orders/' + encodeURIComponent(id), { method: 'DELETE', headers: adminAuthHeaders() });
  adminHandleUnauthorized(response);
  const payload = await response.json().catch(function() { return {}; });
  if (!response.ok || !payload.ok) throw new Error(payload.message || 'delete failed');
  return true;
}
function adminOrderServiceGroup(order) { return order.type === 'takeout' ? 'takeout' : 'dinein'; }
function adminOrderIsHandled(order) { return ['completed', 'cancelled'].includes(String(order.status || 'new')); }
function adminOrderStatusKey(order) { return ADMIN_ORDER_STATUS_LABELS[order.status] ? order.status : 'new'; }
function adminOrderCardHtml(order, index) {
  const id = String(order.id || index);
  const statusKey = adminOrderStatusKey(order);
  const handled = adminOrderIsHandled(order);
  const isTakeout = adminOrderServiceGroup(order) === 'takeout';
  const typeText = isTakeout ? '外帶自取' : '內用';
  const primaryInfo = isTakeout
    ? '外帶自取｜' + adminEscape(order.customerName || '-') + '｜電話 ' + adminEscape(order.customerPhone || '-') + '｜取餐 ' + adminEscape(order.pickupTime || '-')
    : '內用｜桌號 ' + adminEscape(order.table || '-') + '｜電話 ' + adminEscape(order.customerPhone || '-');
  const totalValue = order.cashTotal || order.total || order.totalPrice || order.subtotal;
  const itemsHtml = Array.isArray(order.items) ? order.items.map(function(item) {
    return '<div class="admin-order-item-line">#' + adminEscape(item.displayId || item.id || '') + ' ' + adminEscape(item.name || '')
      + ' x' + Number(item.qty || item.quantity || 0) + (item.note ? '（' + adminEscape(item.note) + '）' : '') + '</div>';
  }).join('') : '';
  return ''
    + '<div class="admin-order-card ' + (handled ? 'admin-card-handled' : 'admin-card-unhandled') + '" data-order-id="' + adminEscape(id) + '">'
    + '  <div class="admin-order-card-top">'
    + '    <h4>#' + (index + 1) + ' ' + typeText + '</h4>'
    + '    <span class="admin-status-pill">' + (handled ? '已處理' : '未處理') + '</span>'
    + '  </div>'
    + '  <div class="admin-order-primary-info">' + primaryInfo + '</div>'
    + '  <div class="admin-order-created">建立：' + formatAdminDate(order.createdAt) + '</div>'
    + '  <div class="admin-order-card-body">'
    + '    <div class="admin-order-items-list">' + (itemsHtml || '<div class="admin-order-item-line">無菜品資料</div>') + '</div>'
    + '    <div class="admin-order-side">'
    + '      <strong class="admin-order-price">' + adminCurrency(totalValue) + '</strong>'
    + '      <span class="admin-status-pill">' + ADMIN_ORDER_STATUS_LABELS[statusKey] + '</span>'
    + '      <select data-action="set-order-status" data-id="' + adminEscape(id) + '">' + adminOrderStatusOptionsHtml(statusKey) + '</select>'
    + '      <button class="admin-danger-btn admin-small-btn" type="button" data-action="delete-order" data-id="' + adminEscape(id) + '">刪除</button>'
    + '    </div>'
    + '  </div>'
    + '</div>';
}
window.renderAdminOrders = async function() {
  const list = document.getElementById('adminOrdersList');
  if (!list) return;
  list.innerHTML = '<div class="admin-empty">讀取訂單與桌邊服務中...</div>';
  let orders;
  let serviceRequests = [];
  try {
    orders = await adminLoadOrders();
    serviceRequests = await adminLoadServiceRequests();
  }
  catch (error) { list.innerHTML = '<div class="admin-empty">無法載入訂單資料：' + adminEscape(error.message) + '</div>'; return; }
  const dineinOrders = orders.filter(function(order) { return adminOrderServiceGroup(order) === 'dinein'; });
  const takeout = orders.filter(function(order) { return adminOrderServiceGroup(order) === 'takeout'; });
  const dineinTasks = dineinOrders.concat(serviceRequests.map(function(req) {
    return Object.assign({ __taskType: 'service' }, req);
  }));
  dineinTasks.sort(function(a, b) {
    return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
  });
  const unhandledOrders = orders.filter(function(order) { return !adminOrderIsHandled(order); }).length;
  const unhandledServices = serviceRequests.length;
  const sectionHtml = function(title, rows) {
    return '<div class="admin-order-column"><div class="admin-subtitle">' + title + '：' + rows.length + ' 筆</div>'
      + (rows.length ? rows.map(function(row, index) {
          return row.__taskType === 'service' ? adminServiceCardHtml(row, index) : adminOrderCardHtml(row, index);
        }).join('') : '<div class="admin-empty">此分類目前沒有任務</div>')
      + '</div>';
  };
  list.innerHTML = '<div class="admin-orders-summary">已送出訂單：' + orders.length + ' 筆｜桌邊服務：' + serviceRequests.length + ' 筆｜未處理：' + (unhandledOrders + unhandledServices) + ' 筆</div>'
    + '<div class="admin-order-columns">' + sectionHtml('內用訂餐', dineinTasks) + sectionHtml('外帶自取', takeout) + '</div>';
};window.adminSetOrderStatus = async function(id, status) {
  if (!ADMIN_ORDER_STATUS_LABELS[status]) return;
  try {
    await adminUpdateOrderApi(id, { status: status });
    if (typeof showToast === 'function') showToast('訂單狀態已更新為「' + ADMIN_ORDER_STATUS_LABELS[status] + '」', 'success');
  } catch (error) {
    if (typeof showToast === 'function') showToast('後台更新失敗：' + error.message, 'error');
  }
  await window.renderAdminOrders();
};
window.adminDeleteOrder = async function(id) {
  if (!window.confirm('確定要刪除這筆訂單嗎？')) return;
  try {
    await adminDeleteOrderApi(id);
    if (typeof showToast === 'function') showToast('訂單已刪除', 'success');
  } catch (error) {
    if (typeof showToast === 'function') showToast('後台更新失敗：' + error.message, 'error');
  }
  await window.renderAdminOrders();
};


// ===== Table-side service requests =====
let adminServiceRequestsCache = [];

function adminNormalizeServiceRequests(items) {
  return (Array.isArray(items) ? items : []).map(function(item, index) {
    return Object.assign({
      id: item.id || String(item.createdAt || Date.now()) + '-' + index,
      table: '', item: '', quantity: 1, phone: '', name: '', status: 'new', createdAt: new Date().toISOString()
    }, item);
  });
}

async function adminLoadServiceRequests() {
  try {
    const response = await fetch('/api/admin/service-requests', { method: 'GET', headers: adminAuthHeaders() });
    adminHandleUnauthorized(response);
    const payload = await response.json().catch(function() { return {}; });
    if (!response.ok || !payload.ok) throw new Error(payload.message || 'load failed');
    adminServiceRequestsCache = adminNormalizeServiceRequests(payload.requests || []);
    return adminServiceRequestsCache;
  } catch (error) {
    const local = adminParseJson('serviceRequests');
    adminServiceRequestsCache = adminNormalizeServiceRequests(local);
    return adminServiceRequestsCache;
  }
}

async function adminDeleteServiceRequestApi(id) {
  const response = await fetch('/api/admin/service-requests/' + encodeURIComponent(id), { method: 'DELETE', headers: adminAuthHeaders() });
  adminHandleUnauthorized(response);
  const payload = await response.json().catch(function() { return {}; });
  if (!response.ok || !payload.ok) throw new Error(payload.message || 'delete failed');
  return true;
}

function adminDeleteServiceRequestLocal(id) {
  const local = adminParseJson('serviceRequests');
  localStorage.setItem('serviceRequests', JSON.stringify(local.filter(function(item) { return String(item.id) !== String(id); })));
}

function adminServiceCardHtml(req, index) {
  const id = String(req.id || index);
  const qty = Math.max(1, Math.floor(Number(req.quantity || 1) || 1));
  return ''
    + '<div class="admin-order-card admin-card-unhandled admin-service-card" data-service-request-id="' + adminEscape(id) + '">'
    + '  <div class="admin-order-card-top">'
    + '    <h4>#' + (index + 1) + ' 服務任務｜桌號 ' + adminEscape(req.table || '-') + '</h4>'
    + '    <span class="admin-status-pill">未處理</span>'
    + '  </div>'
    + '  <div class="admin-order-primary-info">桌邊服務｜' + adminEscape(req.item || '-') + ' x' + qty + '｜' + adminEscape(req.name || '-') + '｜電話 ' + adminEscape(req.phone || '-') + '</div>'
    + '  <div class="admin-order-created">建立：' + formatAdminDate(req.createdAt) + '</div>'
    + '  <div class="admin-order-card-body">'
    + '    <div class="admin-order-items-list"><div class="admin-order-item-line">服務內容：' + adminEscape(req.item || '-') + ' x' + qty + '</div></div>'
    + '    <div class="admin-order-side">'
    + '      <button class="admin-danger-btn admin-small-btn" type="button" data-action="complete-service" data-id="' + adminEscape(id) + '">完成</button>'
    + '    </div>'
    + '  </div>'
    + '</div>';
}

window.renderAdminServiceRequests = async function() {
  const list = document.getElementById('adminServiceRequestsList');
  if (!list) return;
  list.innerHTML = '<div class="admin-empty">讀取桌邊服務中...</div>';
  let requests = [];
  try { requests = await adminLoadServiceRequests(); }
  catch (error) { list.innerHTML = '<div class="admin-empty">無法載入桌邊服務：' + adminEscape(error.message) + '</div>'; return; }
  list.innerHTML = '<div class="admin-orders-summary">待完成桌邊服務：' + requests.length + ' 筆</div>'
    + (requests.length ? requests.map(adminServiceCardHtml).join('') : '<div class="admin-empty">目前沒有待完成桌邊服務</div>');
};

window.adminCompleteServiceRequest = async function(id) {
  try {
    await adminDeleteServiceRequestApi(id);
  } catch (error) {
    adminDeleteServiceRequestLocal(id);
  }
  if (typeof showToast === 'function') showToast('桌邊服務已完成並刪除', 'success');
  await window.renderAdminOrders();
  await window.renderAdminServiceRequests();
};

async function verifyAdminSession() {
  const token = localStorage.getItem('admin_token');
  if (!token) return false;
  try {
    const response = await fetch('/api/admin/verify', { method: 'GET', headers: { 'Authorization': 'Bearer ' + token } });
    return response.ok;
  } catch (error) { return false; }
}
async function renderAdminDashboard() {
  const authed = await verifyAdminSession();
  if (!authed) {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    localStorage.removeItem('admin_auth');
    window.location.hash = '#/member';
    return;
  }
  setAdminView(localStorage.getItem('admin_active_view') || 'cart');
  renderAdminCart();
  await window.renderAdminOrders();
  await window.renderAdminServiceRequests();
  await window.renderAdminReservations();
}

document.getElementById('adminLogoutBtn')?.addEventListener('click', function() { window.adminLogout(); });
document.getElementById('adminReloadBtn')?.addEventListener('click', function() { window.renderAdminReservations(); });
document.getElementById('adminReloadOrdersBtn')?.addEventListener('click', async function() { renderAdminCart(); await window.renderAdminOrders(); await window.renderAdminServiceRequests(); });
document.getElementById('adminReloadServiceBtn')?.addEventListener('click', function() { window.renderAdminServiceRequests(); });
document.querySelectorAll('[data-admin-view]').forEach(function(button) {
  button.addEventListener('click', function() { setAdminView(button.getAttribute('data-admin-view')); });
});
const adminListEl = document.getElementById('adminReservationsList');
if (adminListEl) {
  adminListEl.addEventListener('click', function(event) {
    const target = event.target.closest('[data-action]');
    if (!target || target.tagName === 'INPUT' || target.tagName === 'FORM') return;
    const id = target.getAttribute('data-id');
    const action = target.getAttribute('data-action');
    if (action === 'show-edit') window.adminShowReservationEdit(id);
    else if (action === 'hide-edit') window.adminHideReservationEdit(id);
    else if (action === 'delete') window.adminDeleteReservation(id);
  });
  adminListEl.addEventListener('change', function(event) {
    const target = event.target;
    if (target.matches('input[type="checkbox"][data-action="toggle-reply"]')) window.adminToggleReservationReply(target.getAttribute('data-id'), target.checked);
    else if (target.matches('select[data-action="set-status"]')) window.adminSetReservationStatus(target.getAttribute('data-id'), target.value);
  });
  adminListEl.addEventListener('submit', function(event) {
    const form = event.target.closest('form[data-action="save-edit"]');
    if (!form) return;
    event.preventDefault();
    window.adminSaveReservationEdit(form, form.getAttribute('data-id'));
  });
}
const adminOrdersEl = document.getElementById('adminOrdersList');
if (adminOrdersEl) {
  adminOrdersEl.addEventListener('change', function(event) {
    const target = event.target;
    if (target.matches('select[data-action="set-order-status"]')) window.adminSetOrderStatus(target.getAttribute('data-id'), target.value);
  });
  adminOrdersEl.addEventListener('click', function(event) {
    const completeService = event.target.closest('[data-action="complete-service"]');
    if (completeService) { window.adminCompleteServiceRequest(completeService.getAttribute('data-id')); return; }
    const target = event.target.closest('[data-action="delete-order"]');
    if (target) window.adminDeleteOrder(target.getAttribute('data-id'));
  });
}

const adminServiceEl = document.getElementById('adminServiceRequestsList');
if (adminServiceEl) {
  adminServiceEl.addEventListener('click', function(event) {
    const target = event.target.closest('[data-action="complete-service"]');
    if (target) window.adminCompleteServiceRequest(target.getAttribute('data-id'));
  });
}
let adminServiceRefreshTimer = null;
if (adminServiceRefreshTimer) clearInterval(adminServiceRefreshTimer);
adminServiceRefreshTimer = setInterval(function() {
  if (document.getElementById('adminDashboard')) { window.renderAdminOrders(); window.renderAdminServiceRequests(); }
}, 4000);

window.renderAdminDashboard = renderAdminDashboard;
window.renderAdminCart = renderAdminCart;
renderAdminDashboard();
  `],bp={html:_p,scripts:wp,source:"admin-dashboard.html"},Zo={home:Xm,menu:tp,search:mc,"dish-search":mc,"dish-detail":op,reservation:dp,member:mp,about:gp,promotions:yp,"admin-dashboard":bp},es={zh:{nav_home:"首頁",nav_menu:"菜單",nav_search:"搜尋",nav_reservation:"訂位",nav_order:"點餐",nav_about:"關於我們",nav_promo:"優惠活動",nav_member:"會員",brand_main:"Awesome",brand_tagline:"五餅二魚",hero_title:"品味頂級料理，享受極致美味",hero_subtitle:"我們用心準備每一道佳餚，為您帶來難忘的美食體驗",hero_btn_menu:"瀏覽菜單",hero_btn_reserve:"立即訂位",feature_title:"為何選擇我們",feature_subtitle:"堅持品質，用心服務每一位顧客",feature_fresh:"新鮮食材",feature_fresh_desc:"每日嚴選最新鮮的頂級食材，確保每道料理的品質",feature_chef:"專業主廚",feature_chef_desc:"擁有多年經驗的專業主廚，為您呈現精湛廚藝",feature_delivery:"快速備餐",feature_delivery_desc:"接單後立即完成您的餐點，讓您滿足味蕾",feature_service:"優質服務",feature_service_desc:"親切專業的服務團隊，為您打造舒適的用餐體驗",promo_banner_title:"限時優惠進行中",promo_banner_desc:"新會員首次消費享9折優惠，立即加入會員",promo_banner_btn:"了解更多",menu_title:"精選菜單",menu_subtitle:"嚴選食材，匠心烹製",menu_all:"全部",menu_signature:"主廚推薦",menu_appetizer:"前菜",menu_soup:"湯",menu_hotpot:"煲",menu_rice:"飯類",menu_noodle:"麵類",menu_noodleSoup:"湯麵",menu_seafood:"海鮮",menu_beef:"牛肉",menu_chicken:"雞肉",menu_bbq:"燒臘",menu_vegetable:"蔬菜",menu_pork:"豬肉",menu_drinks:"飲料",menu_add_cart:"加入購物車",search_title:"菜品搜尋",search_subtitle:"輸入菜名、編號或關鍵字，快速找到想點的餐點",search_tax_note:"價格含稅前",search_placeholder:"搜尋品項…",search_empty_title:"找不到符合的菜品",search_empty_desc:"請試試其他菜名、編號或分類。",recommend_kicker:"Menu Guide",recommend_title:"菜單建議與搜尋",recommend_subtitle:"不知道怎麼點？可先選擇人數建議，也可以直接搜尋菜品。",recommend_tab_search:"搜尋菜品",recommend_tab_2:"2人點餐",recommend_tab_3:"3人點餐",recommend_tab_4:"4人點餐",recommend_combo_2_title:"2人點餐組合",recommend_combo_3_title:"3人點餐組合",recommend_combo_4_title:"4人點餐組合",recommend_combo_placeholder:"此區先保留版面，之後可放入組合內容、推薦份量與加購建議。",about_title:"關於我們",about_desc1:"我們是一家主打廣東菜的餐廳，從燒臘、海鮮到熱炒與湯品，延續粵菜講究鮮、嫩、清、和的風味。",about_desc2:"開業兩年有餘，我們持續以用心料理與真誠服務接待每位客人，現已提供約180道菜色，累積服務數千位顧客。",about_years:"個月營運",about_dishes:"道料理",about_customers:"位顧客",footer_brand:"餐廳品牌",footer_desc:"用心準備每一道料理，為您帶來難忘的美食體驗",footer_menu:"快速連結",footer_contact:"聯絡資訊",footer_hours:"營業時間",footer_hours_detail:"週一至週日 11:00 - 21:00（週二公休，20:30 最後點餐）",footer_rights:"© 2026 餐廳品牌. All rights reserved.",reservation_title:"線上訂位",reservation_subtitle:"預約您的專屬座位",reservation_name:"姓名",reservation_phone:"電話",reservation_date:"日期",reservation_time:"時間",reservation_guests:"用餐人數",reservation_note:"特殊需求",reservation_note_placeholder:"如有特殊飲食需求或慶祝活動，請在此說明",reservation_notice_title:"訂位公告",reservation_notice_seafood:"海鮮類餐點建議提前 2 小時預訂。",reservation_notice_hours:"營業時間：週一至週日 11:00 - 21:00。",reservation_notice_business_lunch:"商業午餐：週一至週五 11:00 - 14:00。",reservation_notice_closed_tuesday:"每週二公休，週二不開放訂位。",reservation_notice_confirm:"我們會以電話或簡訊確認訂位資訊。",reservation_notice_blacklist:"預訂未赴約且未提前通知者，可能會被列入黑名單。",reservation_phone_help:"請輸入 10 位數電話，完成後會自動轉成 xxx-xxx-xxxx。",reservation_date_help:"每週二公休，不開放訂位。",reservation_name_required:"請填寫姓名。",reservation_phone_length_short:"電話需要 10 位數。",reservation_phone_length_long:"電話需要 10 位數，格式為 xxx-xxx-xxxx。",reservation_closed_tuesday_short:"每週二公休，不開放訂位。",reservation_closed_tuesday_long:"每週二公休，不開放訂位，請選擇其他日期。",reservation_submit:"確認訂位",reservation_success:"訂位成功！我們將盡快與您確認",reservation_server_unreachable:"無法連線伺服器，訂位尚未送出，請確認後台已啟動或稍後再試。",reservation_server_rejected:"訂位未成功，請檢查資料後再試一次。",order_clear_cart:"清空購物車",order_cart_cleared:"購物車已清空",order_item_note_placeholder:"備註（選填）",order_remove_item:"移除",order_server_unreachable:"無法連線伺服器，訂單尚未送出，請確認後台已啟動或稍後再試。",order_server_rejected:"訂單未成功送出，請檢查資料後再試一次。",order_phone_optional:"電話號碼（必填）",order_phone_optional_placeholder:"請輸入 10 位數電話",order_total_qty:"總數量",order_title:"內用 / 外帶自取",order_subtitle:"選擇座位或取餐時間，確認您的餐點",order_type:"取餐方式",order_dinein:"內用",order_takeout:"外帶自取",order_delivery:"外送到府",order_address:"送餐地址",order_address_placeholder:"請輸入完整送餐地址",order_table_select:"選擇桌號",order_table_hint:"請依照店內座位圖選擇桌號。",order_counter:"櫃台",order_entrance:"入口",order_customer_name:"姓名",order_customer_name_placeholder:"請輸入姓名",order_customer_phone:"電話",order_customer_phone_placeholder:"請輸入 10 位數電話",order_pickup_time:"取餐時間",order_pickup_time_placeholder:"Select pickup time",order_pickup_time_range:"Available pickup time: 11:00 AM - 08:30 PM.",order_cart:"購物車",order_empty:"購物車是空的",order_empty_desc:"快去菜單挑選喜歡的料理吧！",order_subtotal:"小計",order_tax:"稅金（8.25%）",order_payment_calculation:"付款計算",order_cash_calculation:"現金計算（含稅）",order_card_calculation:"刷卡計算（含稅 + 2%）",order_payment_reference_note:"以上計算僅供參考，實際金額以現場付費為主。",order_pickup_hour:"Hour",order_pickup_minute:"Minute",order_pickup_period:"AM/PM",order_delivery_fee:"外送費",order_total:"合計",order_checkout:"送出訂單",order_success:"訂單已送出！感謝您的訂購",order_cart_page_title:"購物車",order_cart_page_subtitle:"加入購物車只是暫存，按下 Place Order / 送出訂單後才會建立正式訂單。",order_current_category:"目前分類",order_member_order:"會員訂餐",order_guest_order:"暫時訂餐",order_dinein_phone_placeholder:"請輸入 10 位數電話",order_dinein_phone_help:"內用訂單必須輸入電話號碼，方便會員訂單與後台查詢。",order_not_selected:"未選擇",order_pickup_info:"外帶自取資訊",order_total_amount:"總金額",order_decrease_qty:"減少數量",order_increase_qty:"增加數量",order_remove_item_aria:"移除餐點",order_floor_plan_aria:"餐廳座位圖",order_submitting:"送出中...",order_success_title:"訂單已送出！",order_success_subtitle:"感謝您的訂購，後台已建立這筆訂單。",order_type_label:"類型",order_name_label:"姓名",order_phone_label:"電話",order_pickup_time_label:"取餐時間",order_table_label:"桌號",order_temporary_dinein_no_phone:"-",order_total_amount_label:"總金額",order_continue_ordering:"繼續點餐",order_not_completed:"訂單尚未完成",order_error_empty_cart:"購物車是空的，請先到菜單加入餐點",order_error_select_table:"請先選擇桌號",order_error_dinein_phone:"請輸入完整 10 位數電話",order_error_pickup_name:"請填寫外帶姓名",order_error_pickup_phone:"外帶自取需要 10 位數電話",order_error_pickup_time:"請選擇 11:00 AM - 08:30 PM 之間的取餐時間",order_error_pickup_time_expired:"目前時間已超過您選擇的取餐時間，不能下單。請重新選擇較晚的取餐時間。",member_login:"登入",member_register:"註冊",member_email:"電子郵件",member_password:"密碼",member_name:"姓名",member_phone:"電話",member_login_btn:"登入",member_register_btn:"註冊",member_logout:"登出",member_welcome:"歡迎回來",member_orders:"我的訂單",member_profile:"個人資料",about_page_title:"關於我們",about_page_subtitle:"用心料理，用愛服務",about_story:"我們的故事",about_story_p1:"我們是一家主打廣東菜的餐廳，從燒臘、海鮮、熱炒到湯品，保留粵菜講究鮮、嫩、清、和的特色，也結合適合家庭與朋友聚餐的豐富菜色。",about_story_p2:"開業兩年有餘以來，我們始終秉持用心料理、真誠待客的精神，持續精進每一道餐點，讓每位來訪的客人都能感受到溫暖與地道風味。",about_philosophy:"我們的理念",about_philosophy_p:"堅持使用當季新鮮食材，减少不必要的添加物，讓每位顧客都能品嚐到食物最純粹的美味。",about_env_title:"用餐環境",about_location_title:"餐廳位置",promo_page_title:"優惠活動",promo_page_subtitle:"精彩優惠，不容錯過",promo_new_member:"新會員優惠",promo_new_member_desc:"首次加入會員並消費，即享全單9折優惠",promo_new_member_date:"長期活動",promo_birthday:"生日優惠",promo_birthday_desc:"生日當月消費滿$1000，贈送精緻生日蛋糕一份",promo_birthday_date:"長期活動",promo_weekday:"平日午間優惠",promo_weekday_desc:"週一至週五 11:00-14:00，精選套餐只要$299起",promo_weekday_date:"每週一至週五",promo_family:"家庭聚餐方案",promo_family_desc:"4人以上團體用餐，享套餐85折優惠，再贈送飲品一杯",promo_family_date:"需提前預約",promo_takeout:"外帶自取優惠",promo_takeout_desc:"滿$500折$50，滿$1000折$120",promo_takeout_date:"長期活動",promo_refer:"推薦好友",promo_refer_desc:"成功推薦一位新會員，雙方各獲得$100抵用券",promo_refer_date:"長期活動",cart:"購物車",items:"道料理",dish_size_title:"更改您的尺寸",dish_size_s:"小份",dish_size_m:"中份",dish_size_l:"大份",dish_back:"← 返回菜單",dish_ingredients:"內容物"},en:{nav_home:"Home",nav_menu:"Menu",nav_search:"Search",nav_reservation:"Reservation",nav_order:"Order",nav_about:"About",nav_promo:"Promotions",nav_member:"Member",brand_main:"Awesome",brand_tagline:"Authentic Chinese Cuisine",hero_title:"Savor Premium Cuisine, Enjoy Exceptional Taste",hero_subtitle:"We craft every dish with passion, bringing you an unforgettable dining experience",hero_btn_menu:"View Menu",hero_btn_reserve:"Reserve Now",feature_title:"Why Choose Us",feature_subtitle:"Quality ingredients, dedicated service",feature_fresh:"Fresh Ingredients",feature_fresh_desc:"We handpick the freshest premium ingredients daily to ensure quality in every dish",feature_chef:"Expert Chefs",feature_chef_desc:"Our experienced chefs bring years of culinary expertise to your plate",feature_delivery:"Quick Preparation",feature_delivery_desc:"Delivered fresh to your door within 30 minutes",feature_service:"Excellent Service",feature_service_desc:"Our friendly and professional team ensures a comfortable dining experience",promo_banner_title:"Limited Time Offer",promo_banner_desc:"New members get 10% off first purchase. Join now!",promo_banner_btn:"Learn More",menu_title:"Featured Menu",menu_subtitle:"Premium ingredients, masterfully prepared",menu_all:"All",menu_signature:"Chef Special",menu_appetizer:"Appetizer",menu_soup:"Soup",menu_hotpot:"Hot Pot",menu_rice:"Rice",menu_noodle:"Noodle",menu_noodleSoup:"Noodle Soup",menu_seafood:"Seafood",menu_beef:"Beef",menu_chicken:"Chicken",menu_bbq:"BBQ",menu_vegetable:"Vegetable",menu_pork:"Pork",menu_drinks:"Drinks",menu_add_cart:"Add to Cart",search_title:"Dish Search",search_subtitle:"Search by dish name, code, or keyword to quickly find what you want.",search_tax_note:"Prices before tax",search_placeholder:"Search dishes…",search_empty_title:"No matching dishes found",search_empty_desc:"Try another dish name, code, or category.",recommend_kicker:"Menu Guide",recommend_title:"Menu Suggestions & Search",recommend_subtitle:"Not sure what to order? Start with party-size suggestions or search directly.",recommend_tab_search:"Dish Search",recommend_tab_2:"For 2 People",recommend_tab_3:"For 3 People",recommend_tab_4:"For 4 People",recommend_combo_2_title:"2-Person Set Menu",recommend_combo_3_title:"3-Person Set Menu",recommend_combo_4_title:"4-Person Set Menu",recommend_combo_placeholder:"This section is reserved for future set-menu items, serving guidance, and add-on suggestions.",about_title:"About Us",about_desc1:"We are a Cantonese restaurant, featuring roast meats, seafood, stir-fries, and soups while preserving the fresh, balanced character of Guangdong cuisine.",about_desc2:"With more than two years in business, we now offer around 180 dishes and have welcomed thousands of guests with heartfelt service.",about_years:"Months Serving",about_dishes:"Dishes",about_customers:"Guests Served",footer_brand:"Restaurant Brand",footer_desc:"Crafting every dish with care for an unforgettable dining experience",footer_menu:"Quick Links",footer_contact:"Contact Us",footer_hours:"Opening Hours",footer_hours_detail:"Mon-Sun 11:00 AM - 9:00 PM (Closed Tuesday, last order 8:30 PM)",footer_rights:"© 2026 Restaurant Brand. All rights reserved.",reservation_title:"Online Reservation",reservation_subtitle:"Reserve Your Perfect Table",reservation_name:"Name",reservation_phone:"Phone",reservation_date:"Date",reservation_time:"Time",reservation_guests:"Number of Guests",reservation_note:"Special Requests",reservation_note_placeholder:"Any dietary requirements or celebrations, please let us know",reservation_notice_title:"Reservation Notice",reservation_notice_seafood:"Seafood items are recommended to be reserved 2 hours in advance.",reservation_notice_hours:"Business hours: Monday to Sunday, 11:00 AM - 9:00 PM.",reservation_notice_business_lunch:"Business lunch: Monday to Friday, 11:00 AM - 2:00 PM.",reservation_notice_closed_tuesday:"We are closed every Tuesday. Tuesday reservations are not available.",reservation_notice_confirm:"We will call or text you to confirm your reservation details.",reservation_notice_blacklist:"No-shows without advance notice may be added to the blacklist.",reservation_phone_help:"Please enter a 10-digit phone number. It will be formatted as xxx-xxx-xxxx.",reservation_date_help:"Closed every Tuesday. Reservations are not available on Tuesdays.",reservation_name_required:"Please enter your name.",reservation_phone_length_short:"Phone number must be 10 digits.",reservation_phone_length_long:"Phone number must be 10 digits in xxx-xxx-xxxx format.",reservation_closed_tuesday_short:"Closed every Tuesday. Reservations are not available.",reservation_closed_tuesday_long:"Closed every Tuesday. Please choose another date.",reservation_submit:"Confirm Reservation",reservation_success:"Reservation successful! We will confirm with you shortly",reservation_server_unreachable:"Cannot reach the server. Your reservation was not submitted - please make sure the backend is running or try again later.",reservation_server_rejected:"Reservation was not accepted. Please check your details and try again.",order_clear_cart:"Clear Cart",order_cart_cleared:"Cart cleared",order_item_note_placeholder:"Note (optional)",order_remove_item:"Remove",order_server_unreachable:"Cannot reach the server. Your order was not submitted - please make sure the backend is running or try again later.",order_server_rejected:"Order was not accepted. Please check your details and try again.",order_phone_optional:"Phone Number (required)",order_phone_optional_placeholder:"Enter a 10-digit phone number",order_total_qty:"Total Quantity",order_title:"Dine-In / Pickup",order_subtitle:"Choose a table or pickup time, then confirm your order",order_type:"Order Type",order_dinein:"Dine-In",order_takeout:"Pickup",order_delivery:"Delivery",order_address:"Delivery Address",order_address_placeholder:"Enter your full delivery address",order_table_select:"Select Table",order_table_hint:"Choose your table from the restaurant floor plan.",order_counter:"Counter",order_entrance:"Entrance",order_customer_name:"Name",order_customer_name_placeholder:"Enter your name",order_customer_phone:"Phone",order_customer_phone_placeholder:"Enter 10-digit phone number",order_pickup_time:"Pickup Time",order_pickup_time_placeholder:"Select pickup time",order_pickup_time_range:"Available pickup time: 11:00 AM - 08:30 PM.",order_cart:"Cart",order_empty:"Your cart is empty",order_empty_desc:"Go to the menu and pick your favorites!",order_subtotal:"Subtotal",order_tax:"Tax (8.25%)",order_payment_calculation:"Payment calculation",order_cash_calculation:"Cash calculation (tax included)",order_card_calculation:"Card calculation (tax + 2%)",order_payment_reference_note:"These calculations are for reference only. The final amount is based on in-store payment.",order_pickup_hour:"Hour",order_pickup_minute:"Minute",order_pickup_period:"AM/PM",order_delivery_fee:"Delivery Fee",order_total:"Total",order_checkout:"Place Order",order_success:"Order placed! Thank you for your order",order_cart_page_title:"Cart",order_cart_page_subtitle:"Items in the cart are temporary. A real order is created only after you press Place Order.",order_current_category:"Current Type",order_member_order:"Member Order",order_guest_order:"Temporary Order",order_dinein_phone_placeholder:"Enter a 10-digit phone number",order_dinein_phone_help:"Dine-in orders require a phone number for member and admin records.",order_not_selected:"Not Selected",order_pickup_info:"Pickup Information",order_total_amount:"Total Amount",order_decrease_qty:"Decrease quantity",order_increase_qty:"Increase quantity",order_remove_item_aria:"Remove item",order_floor_plan_aria:"Restaurant floor plan",order_submitting:"Submitting...",order_success_title:"Order Placed!",order_success_subtitle:"Thank you for your order. The backend has created this order.",order_type_label:"Type",order_name_label:"Name",order_phone_label:"Phone",order_pickup_time_label:"Pickup Time",order_table_label:"Table",order_temporary_dinein_no_phone:"-",order_total_amount_label:"Total Amount",order_continue_ordering:"Continue Ordering",order_not_completed:"Order not completed",order_error_empty_cart:"Your cart is empty. Please add items from the menu first.",order_error_select_table:"Please select a table first.",order_error_dinein_phone:"Please enter a complete 10-digit phone number.",order_error_pickup_name:"Please enter a pickup name.",order_error_pickup_phone:"Pickup requires a 10-digit phone number.",order_error_pickup_time:"Please choose a pickup time between 11:00 AM and 08:30 PM.",order_error_pickup_time_expired:"The current time has already passed your selected pickup time. This order cannot be placed. Please choose a later pickup time.",member_login:"Login",member_register:"Register",member_email:"Email",member_password:"Password",member_name:"Name",member_phone:"Phone",member_login_btn:"Login",member_register_btn:"Register",member_logout:"Logout",member_welcome:"Welcome Back",member_orders:"My Orders",member_profile:"Profile",about_page_title:"About Us",about_page_subtitle:"Cooking with Heart, Serving with Love",about_story:"Our Story",about_story_p1:"We are a Cantonese restaurant specializing in roast meats, seafood, stir-fries, and soups, bringing out the fresh and balanced flavors that define Guangdong cuisine.",about_story_p2:"In more than two years of operation, we have remained committed to heartfelt cooking and warm hospitality, refining each dish so every guest can enjoy an authentic and welcoming dining experience.",about_philosophy:"Our Philosophy",about_philosophy_p:"We insist on using fresh seasonal ingredients with minimal additives, so every guest can taste the purest flavors of food.",about_env_title:"Our Space",about_location_title:"Location",promo_page_title:"Promotions",promo_page_subtitle:"Exciting Deals You Can't Miss",promo_new_member:"New Member Offer",promo_new_member_desc:"Join as a new member and enjoy 10% off your first order",promo_new_member_date:"Ongoing",promo_birthday:"Birthday Special",promo_birthday_desc:"Spend $1000+ during your birthday month and receive a complimentary birthday cake",promo_birthday_date:"Ongoing",promo_weekday:"Weekday Lunch Deal",promo_weekday_desc:"Mon-Fri 11:00-14:00, select set meals from just $299",promo_weekday_date:"Monday to Friday",promo_family:"Family Dining Package",promo_family_desc:"Groups of 4+ enjoy 15% off set meals plus a complimentary drink each",promo_family_date:"Reservation required",promo_takeout:"Takeout Discount",promo_takeout_desc:"Spend $500 get $50 off, spend $1000 get $120 off",promo_takeout_date:"Ongoing",promo_refer:"Refer a Friend",promo_refer_desc:"Refer a new member and both receive $100 vouchers",promo_refer_date:"Ongoing",cart:"Cart",items:"items",dish_size_title:"Choose Your Size",dish_size_s:"Small",dish_size_m:"Medium",dish_size_l:"Large",dish_back:"← Back to Menu",dish_ingredients:"Ingredients"}},yc=["zh","en"],_c=["zh-cn","zh-yue","zh-tw"],pc={"zh-cn":"简体","zh-yue":"廣東字","zh-tw":"繁體"},Sp={圖:"图",僅:"仅",參:"参",號:"号",個:"个",覽:"览",選:"选",AI示意圖僅供參考:"AI示意图仅供参考",基於真實照片讓AI微調:"基于真实照片让AI微调",上一個菜品:"上一个菜品",下一個菜品:"下一个菜品",首頁:"首页",菜單:"菜单",菜單建議與搜尋:"菜单建议与搜索",搜尋菜品:"搜索菜品","2人點餐":"2人点餐","3人點餐":"3人点餐","4人點餐":"4人点餐","不知道怎麼點？可先選擇人數建議，也可以直接搜尋菜品。":"不知道怎么点？可先选择人数建议，也可以直接搜索菜品。","此區先保留版面，之後可放入組合內容、推薦份量與加購建議。":"此区先保留版面，之后可放入组合内容、推荐份量与加购建议。",訂位:"订位",點餐:"点餐",關於我們:"关于我们",優惠活動:"优惠活动",會員:"会员",品味頂級料理:"品味顶级料理",享受極致美味:"享受极致美味",我們:"我们",準備:"准备",每一道佳餚:"每一道佳肴",為您:"为您",帶來:"带来",難忘:"难忘",體驗:"体验",瀏覽:"浏览",立即:"立即",為何:"为何",選擇:"选择",堅持:"坚持",品質:"品质",服務:"服务",顧客:"顾客",新鮮:"新鲜",食材:"食材",嚴選:"严选",頂級:"顶级",確保:"确保",料理:"料理",專業:"专业",主廚:"主厨",擁有:"拥有",經驗:"经验",呈現:"呈现",精湛:"精湛",廚藝:"厨艺",快速備餐:"快速备餐",接單:"接单",餐點:"餐点",滿足:"满足",味蕾:"味蕾",優質:"优质",親切:"亲切",團隊:"团队",打造:"打造",舒適:"舒适",用餐:"用餐",限時優惠進行中:"限时优惠进行中",首次:"首次",消費:"消费",享:"享",折:"折",加入:"加入",了解更多:"了解更多",精選:"精选",嚴選食材:"严选食材",匠心烹製:"匠心烹制",全部:"全部",主廚推薦:"主厨推荐",前菜:"前菜",湯:"汤",煲:"煲",飯類:"饭类",麵類:"面类",湯麵:"汤面",海鮮:"海鲜",牛肉:"牛肉",雞肉:"鸡肉",燒臘:"烧腊",蔬菜:"蔬菜",豬肉:"猪肉",飲料:"饮料",加入購物車:"加入购物车",廣東菜:"广东菜",餐廳:"餐厅",燒臘:"烧腊",熱炒:"热炒",湯品:"汤品",延續:"延续",粵菜:"粤菜",講究:"讲究",鮮:"鲜",開業:"开业",兩年:"两年",有餘:"有余",持續:"持续",真誠:"真诚",接待:"接待",客人:"客人",現已:"现已",約:"约",道菜色:"道菜色",累積:"累计",數千位:"数千位",個月營運:"个月运营",道料理:"道料理",位顧客:"位顾客",餐廳品牌:"餐厅品牌",快速連結:"快速链接",聯絡資訊:"联络资讯",營業時間:"营业时间",週一至週日:"周一至周日",線上訂位:"线上订位",預約:"预约",專屬:"专属",座位:"座位",姓名:"姓名",電話:"电话",日期:"日期",時間:"时间",人數:"人数",特殊需求:"特殊需求",飲食:"饮食",慶祝活動:"庆祝活动",說明:"说明",確認訂位:"确认订位",訂位成功:"订位成功",盡快:"尽快",與您確認:"与您确认",外帶:"外带",外送:"外送",取餐方式:"取餐方式",自取:"自取",到府:"到府",送餐地址:"送餐地址",請輸入完整送餐地址:"请输入完整送餐地址",購物車:"购物车",空的:"空的",快去:"快去",挑選:"挑选",喜歡:"喜欢",小計:"小计",外送費:"外送费",合計:"合计",前往結帳:"前往结帐",訂單已送出:"订单已送出",感謝:"感谢",訂購:"订购",登入:"登录",註冊:"注册",電子郵件:"电子邮件",密碼:"密码",登出:"登出",歡迎回來:"欢迎回来",我的訂單:"我的订单",個人資料:"个人资料",會員中心:"会员中心",我們的故事:"我们的故事",用心料理:"用心料理",用愛服務:"用爱服务",特色:"特色",結合:"结合",適合:"适合",家庭:"家庭",朋友:"朋友",聚餐:"聚餐",豐富:"丰富",以來:"以来",始終:"始终",秉持:"秉持",待客:"待客",精神:"精神",精進:"精进",每位:"每位",來訪:"来访",感受到:"感受到",溫暖:"温暖",地道:"地道",風味:"风味",我們的理念:"我们的理念",當季:"当季",减少:"减少",不必要:"不必要",添加物:"添加物",品嚐:"品尝",純粹:"纯粹",美味:"美味",用餐環境:"用餐环境",餐廳位置:"餐厅位置",生日優惠:"生日优惠",生日當月:"生日当月",滿:"满",贈送:"赠送",精緻:"精致",長期活動:"长期活动",平日午間優惠:"平日午间优惠",每週:"每周",家庭聚餐方案:"家庭聚餐方案",團體:"团体",飲品:"饮品",需提前預約:"需提前预约",外帶自取優惠:"外带自取优惠",推薦好友:"推荐好友",成功推薦:"成功推荐",雙方:"双方",獲得:"获得",抵用券:"抵用券",菜品:"菜品",內容物:"内容物",更改您的尺寸:"更改您的尺寸",小份:"小份",中份:"中份",大份:"大份",返回菜單:"返回菜单",此分類目前沒有菜品:"此分类目前没有菜品",點選查看菜品介紹:"点选查看菜品介绍",尚無訂單紀錄:"尚无订单纪录",帳號或密碼錯誤:"帐号或密码错误",已登出:"已登出",已加入購物車:"已加入购物车"},kp={頂:"顶",級:"级",極:"极",準:"准",備:"备",餚:"肴",為:"为",您:"您",帶:"带",難:"难",體:"体",驗:"验",瀏:"浏",覽:"览",選:"选",擇:"择",堅:"坚",質:"质",務:"务",顧:"顾",鮮:"鲜",嚴:"严",確:"确",專:"专",廚:"厨",擁:"拥",經:"经",現:"现",藝:"艺",單:"单",點:"点",優:"优",團:"团",隊:"队",適:"适",時:"时",進:"进",會:"会",費:"费",瞭:"了",製:"制",湯:"汤",飯:"饭",類:"类",麵:"面",燒:"烧",臘:"腊",豬:"猪",飲:"饮",購:"购",車:"车",廣:"广",東:"东",廳:"厅",熱:"热",續:"续",粵:"粤",講:"讲",鮮:"鲜",兩:"两",餘:"余",誠:"诚",數:"数",營:"营",聯:"联",資訊:"资讯",業:"业",間:"间",週:"周",線:"线",預:"预",屬:"属",話:"话",請:"请",輸:"输",擇:"择",歡:"欢",錄:"录",資:"资",愛:"爱",豐:"丰",來:"来",終:"终",進:"进",訪:"访",溫:"温",風:"风",當:"当",嚐:"尝",純:"纯",緻:"致",贈:"赠",獲:"获",雙:"双",號:"号",錯:"错",誤:"误",註:"注",冊:"册",電:"电",郵:"邮",頁:"页",關:"关",於:"于",門:"门",內:"内",與:"与",後:"后",這:"这",裡:"里",放:"放",過:"过",濾:"滤",稱:"称",圖:"图",說:"说",彙:"汇",匯:"汇",總:"总",額:"额",稅:"税",僅:"仅",際:"际",場:"场",復:"复",壓:"压",縮:"缩",檔:"档"},xp={關於我們:"關於我哋",我們:"我哋",您:"你",菜單:"餐牌",菜單建議與搜尋:"餐牌建議同搜尋",搜尋菜品:"搵餸菜","2人點餐":"2人落單","3人點餐":"3人落單","4人點餐":"4人落單","不知道怎麼點？可先選擇人數建議，也可以直接搜尋菜品。":"唔知點樣叫餸？可以先揀人數建議，或者直接搵餸菜。","此區先保留版面，之後可放入組合內容、推薦份量與加購建議。":"呢區先保留版面，之後可以放套餐內容、份量建議同加購建議。",瀏覽餐牌:"睇餐牌",瀏覽菜單:"睇餐牌",訂位:"訂座",立即訂座:"即刻訂座",點餐:"落單",外帶:"外賣自取",外送:"送餐",購物車:"購物車",加入購物車:"加入購物車",為您帶來:"為你帶嚟",帶來:"帶嚟",請輸入:"請輸入",快去:"快啲去",了解更多:"睇多啲",為何選擇我們:"點解揀我哋","堅持品質，用心服務每一位顧客":"堅持品質，用心服務每一位客人",歡迎回來:"歡迎返嚟",尚無訂單紀錄:"暫時未有訂單紀錄",登入:"登入",註冊:"登記",優惠活動:"優惠",立即加入會員:"即刻加入會員",前往結帳:"去結帳",感謝您的訂購:"多謝你嘅訂購",感謝:"多謝",取餐方式:"攞餐方式",內用:"堂食",外帶自取:"外賣自取",目前分類:"目前類型",會員訂餐:"會員落單",暫時訂餐:"臨時落單","電話號碼（選填）":"電話號碼（可唔填）","有電話＝會員訂餐；不填＝暫時內用":"有電話＝會員落單；唔填＝臨時堂食","可不填。未填電話時，後台會歸類為「暫時訂餐 / 內用」。":"可以唔填。未填電話時，後台會歸類為「臨時落單 / 堂食」。",選擇桌號:"揀枱號","請依照店內座位圖選擇桌號。":"請跟店內座位圖揀枱號。",未選擇:"未揀",外帶自取資訊:"外賣自取資料",姓名:"姓名",請輸入姓名:"請輸入姓名",電話:"電話","請輸入 10 位數電話":"請輸入 10 位電話",取餐時間:"攞餐時間",總數量:"總數量",總金額:"總金額","稅金（8.25%）":"稅金（8.25%）",付款計算:"付款計算","現金計算（含稅）":"現金計算（含稅）","刷卡計算（含稅 + 2%）":"刷卡計算（含稅 + 2%）","以上計算僅供參考，實際金額以現場付費為主。":"以上計算只供參考，實際金額以現場付款為準。",送出訂單:"送出訂單","送出中...":"送出緊...",購物車是空的:"購物車暫時係空嘅","快去菜單挑選喜歡的料理吧！":"快啲去餐牌揀你鍾意嘅餸啦！",小計:"小計",減少數量:"減少數量",增加數量:"增加數量",移除餐點:"移除餸菜",餐廳座位圖:"餐廳座位圖","訂單已送出！":"訂單已送出！","感謝您的訂購，後台已建立這筆訂單。":"多謝你落單，後台已經建立呢張訂單。",類型:"類型",桌號:"枱號","暫時內用（未輸入電話）":"臨時堂食（未輸入電話）",繼續點餐:"繼續落單",訂單尚未完成:"訂單仲未完成","購物車是空的，請先到菜單加入餐點":"購物車暫時係空嘅，請先去餐牌加入餸菜",請先選擇桌號:"請先揀枱號","電話號碼需為 10 位數，或留空作為暫時內用":"電話號碼需要 10 位，或者留空作為臨時堂食",請填寫外帶姓名:"請填寫外賣自取姓名","外帶自取需要 10 位數電話":"外賣自取需要 10 位電話",請選擇取餐時間:"請揀攞餐時間",櫃台:"櫃台",入口:"入口",這是:"呢個係",之後:"之後",這裡:"呢度",品嚐:"品嚐",美味:"滋味"};function wc(l,d){let u=String(l??"");return Object.entries(d).sort((C,T)=>T[0].length-C[0].length).forEach(([C,T])=>{u=u.split(C).join(T)}),u}function Tp(l){let d=wc(l,Sp);return d=Array.from(d).map(u=>kp[u]||u).join(""),d}function Cp(l){return wc(l,xp)}function nt(){const l=localStorage.getItem("lang");return yc.includes(l)?l:"zh"}function At(){const l=localStorage.getItem("chineseVariant");return _c.includes(l)?l:"zh-cn"}function is(l){const d=_c.includes(l)?l:"zh-cn";return localStorage.setItem("chineseVariant",d),window.currentChineseVariant=d,document.documentElement.dataset.chineseVariant=d,nt()==="zh"&&(document.documentElement.lang=d),d}function hn(l,d=At()){return l==null?l:d==="zh-cn"?Tp(String(l)):d==="zh-yue"?Cp(String(l)):String(l)}function Ep(l){return nt()==="zh"?hn(l):l}function fc(l){l.nodeType===Node.TEXT_NODE?l.__originalZhText===void 0&&(l.__originalZhText=l.nodeValue):l instanceof Element&&["placeholder","title","aria-label"].forEach(d=>{if(l.hasAttribute(d)){const u=`__originalZhAttr_${d}`;l[u]===void 0&&(l[u]=l.getAttribute(d))}})}function as(l=document.body){var C;if(!l||nt()!=="zh")return;const d=document.createTreeWalker(l,NodeFilter.SHOW_TEXT,{acceptNode(T){var O;const L=T.parentElement;return!L||["SCRIPT","STYLE","NOSCRIPT"].includes(L.tagName)||(O=L.closest)!=null&&O.call(L,'[data-react-managed="true"]')||!T.nodeValue||!T.nodeValue.trim()?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),u=[];for(;d.nextNode();)u.push(d.currentNode);u.forEach(T=>{fc(T),T.nodeValue=hn(T.__originalZhText)}),(C=l.querySelectorAll)==null||C.call(l,"[placeholder], [title], [aria-label]").forEach(T=>{var L;(L=T.closest)!=null&&L.call(T,'[data-react-managed="true"]')||(fc(T),["placeholder","title","aria-label"].forEach(O=>{const M=`__originalZhAttr_${O}`;T[M]!==void 0&&T.setAttribute(O,hn(T[M]))}))})}function os(l){const d=yc.includes(l)?l:"zh";return localStorage.setItem("lang",d),window.currentLang=d,document.documentElement.lang=d==="zh"?At():"en",document.documentElement.dataset.lang=d,d}function Pr(l,d=nt()){var u,C;return((u=es[d])==null?void 0:u[l])||((C=es.zh)==null?void 0:C[l])||l}function bc(l=nt()){document.querySelectorAll(".lang-toggle").forEach(d=>{d.textContent=l==="zh"?"EN":"中",d.setAttribute("aria-label",l==="zh"?"Switch to English":"切換到中文"),d.setAttribute("title",l==="zh"?"Switch to English":"切換到中文")}),document.querySelectorAll(".chinese-variant-switcher").forEach(d=>{d.hidden=l!=="zh",d.classList.toggle("is-hidden",l!=="zh")}),document.querySelectorAll(".chinese-variant-label").forEach(d=>{d.textContent=pc[At()]||pc["zh-cn"]})}function Ki(){const l=os(nt());return is(At()),document.querySelectorAll("[data-i18n]").forEach(d=>{const u=d.getAttribute("data-i18n");d.textContent=Pr(u,l)}),document.querySelectorAll("[data-i18n-placeholder]").forEach(d=>{const u=d.getAttribute("data-i18n-placeholder");d.setAttribute("placeholder",Pr(u,l))}),document.querySelectorAll("[data-i18n-title]").forEach(d=>{const u=d.getAttribute("data-i18n-title");d.setAttribute("title",Pr(u,l))}),bc(l),as(),l}function Sc(){if(Ki(),typeof window.rebuildMenu=="function"&&window.rebuildMenu(),typeof window.renderDish=="function"&&window.renderDish(),typeof window.renderOrderCart=="function"&&window.renderOrderCart(),typeof window.refreshOrderLabels=="function"&&window.refreshOrderLabels(),typeof window.renderFeaturedMenu=="function"&&window.renderFeaturedMenu(),typeof window.renderCart=="function"&&window.renderCart(),typeof window.renderOrderCategories=="function"&&window.renderOrderCategories(),typeof window.renderRecommendSearch=="function"&&window.renderRecommendSearch(),typeof window.renderOrderMenu=="function"){const l=window.currentOrderItems||window.allOrderItems||window.allItems||[];Array.isArray(l)&&l.length&&window.renderOrderMenu(l)}bc(nt()),as()}function kc(l){os(l),Sc(),window.dispatchEvent(new CustomEvent("languagechange",{detail:{lang:nt()}}))}function Ip(){kc(nt()==="zh"?"en":"zh")}function Np(l){is(l),Sc(),window.dispatchEvent(new CustomEvent("chinesevariantchange",{detail:{variant:At()}}))}function Pp(l){var u,C,T;(u=l==null?void 0:l.stopPropagation)==null||u.call(l);const d=((T=(C=l==null?void 0:l.currentTarget)==null?void 0:C.closest)==null?void 0:T.call(C,".chinese-variant-switcher"))||document.querySelector(".chinese-variant-switcher");d==null||d.classList.toggle("open")}function xc(){document.querySelectorAll(".chinese-variant-switcher.open").forEach(l=>l.classList.remove("open"))}function Lr(){return Ki()}window.translations=es;window.t=Pr;window.getCurrentLang=nt;window.getCurrentChineseVariant=At;window.setChineseVariant=Np;window.toggleChineseVariantMenu=Pp;window.closeChineseVariantMenus=xc;window.formatChineseText=hn;window.formatDisplayText=Ep;window.applyChineseVariantToPage=as;window.setLang=kc;window.toggleLang=Ip;window.updateAllText=Ki;window.applyTranslations=Ki;is(At());os(nt());document.addEventListener("click",xc);const Tc="cart",Cc="orders",ts="cartchange";function Ec(l){return(Array.isArray(l)?l:[]).map(d=>({...d,qty:Math.max(0,Math.floor(Number((d==null?void 0:d.qty)??(d==null?void 0:d.quantity))||0)),price:Number(d==null?void 0:d.price)||0})).filter(d=>d.id&&d.qty>0)}function gc(){try{const l=JSON.parse(localStorage.getItem(Tc)||"[]");return Ec(l)}catch{return[]}}function Nr(l){const d=Ec(l);return localStorage.setItem(Tc,JSON.stringify(d)),window.cart=d,window.dispatchEvent(new CustomEvent(ts,{detail:d})),typeof window.updateCartBadge=="function"&&window.updateCartBadge(),d}function Ic(l){return(Array.isArray(l==null?void 0:l.items)?l.items:[]).some(u=>Math.max(0,Math.floor(Number((u==null?void 0:u.qty)??(u==null?void 0:u.quantity))||0))>0)}function Lp(){try{const l=JSON.parse(localStorage.getItem(Cc)||"[]");return(Array.isArray(l)?l:[]).filter(Ic)}catch{return[]}}function zp(l){if(!Ic(l))return null;const d=Lp();return d.push(l),localStorage.setItem(Cc,JSON.stringify(d)),l}const Nc=J.createContext(null);function Dp(l,d){return l.find(C=>C.id===d.id)?l.map(C=>C.id===d.id?{...C,qty:C.qty+1}:C):[...l,{id:d.id,displayId:d.displayId||d.id,name:d.name||"",name_en:d.name_en||"",price:Number(d.price)||0,color:d.color||"",qty:1}]}function Bp({children:l}){const[d,u]=J.useState(()=>gc());J.useEffect(()=>{const B=()=>u(gc());return window.addEventListener(ts,B),window.addEventListener("storage",B),()=>{window.removeEventListener(ts,B),window.removeEventListener("storage",B)}},[]);const C=J.useCallback(B=>{if(u(q=>{const ee=Dp(q,B);return Nr(ee),ee}),typeof window.showToast=="function"){const q=(window.currentLang||"zh")==="zh";window.showToast(q?"已加入購物車":"Added to cart","success")}},[]),T=J.useCallback(B=>{u(q=>{const ee=q.filter(ie=>ie.id!==B);return Nr(ee),ee})},[]),L=J.useCallback(B=>{u(q=>{const ee=q.map(ie=>ie.id===B?{...ie,qty:ie.qty+1}:ie);return Nr(ee),ee})},[]),O=J.useCallback(B=>{u(q=>{const ee=q.map(ie=>ie.id===B?{...ie,qty:ie.qty-1}:ie).filter(ie=>ie.qty>0);return Nr(ee),ee})},[]),M=J.useCallback(()=>{u([]),Nr([])},[]),Q=J.useCallback(()=>d.reduce((B,q)=>B+Number(q.qty||0),0),[d]),X=J.useCallback(()=>d.reduce((B,q)=>B+Number(q.price||0)*Number(q.qty||0),0),[d]);J.useEffect(()=>{Object.assign(window,{addToCart:C,removeFromCart:T,updateQty:(B,q)=>q>0?L(B):O(B),clearCart:M,getCartTotal:X,getCartCount:Q})},[C,T,L,O,M,X,Q]);const le={cartItems:d,addToCart:C,removeFromCart:T,increaseQuantity:L,decreaseQuantity:O,clearCart:M,getTotalQuantity:Q,getTotalPrice:X};return y.jsx(Nc.Provider,{value:le,children:l})}function Pc(){const l=J.useContext(Nc);if(!l)throw new Error("useCart must be used within a CartProvider");return l}const Ap=[{row:"top-booth-row",variant:"booth",ids:["E5","E4","E3","E2","E1"]},{row:"upper-table-row",variant:"round",ids:["D3","D2","D1","C2"]},{row:"lower-table-row",variant:"round",ids:["B3","B2","B1","C1"]},{row:"bottom-booth-row",variant:"booth",ids:["A5","A4","A3","A2","A1"]}];function Ui({id:l,selected:d,onSelect:u,variant:C}){return y.jsx("button",{type:"button",className:`table-seat ${C==="booth"?"booth-seat":"round-seat"} ${d?"active":""}`,"aria-pressed":d,onClick:()=>u(l),children:l})}function Rp({selectedTable:l,onSelect:d,labels:u}){const[C,T,L,O]=Ap;return y.jsxs("div",{className:"floor-plan floor-plan-v2","aria-label":u.floorPlanAria,children:[y.jsxs("div",{className:"floor-main-area",children:[y.jsx("div",{className:`floor-plan-row booth-row ${C.row}`,children:C.ids.map(M=>y.jsx(Ui,{id:M,variant:C.variant,selected:l===M,onSelect:d},M))}),y.jsxs("div",{className:"floor-table-area",children:[y.jsx("div",{className:`floor-plan-row table-row ${T.row}`,children:T.ids.map(M=>y.jsx(Ui,{id:M,variant:T.variant,selected:l===M,onSelect:d},M))}),y.jsx("div",{className:`floor-plan-row table-row ${L.row}`,children:L.ids.map(M=>y.jsx(Ui,{id:M,variant:L.variant,selected:l===M,onSelect:d},M))})]}),y.jsx("div",{className:`floor-plan-row booth-row ${O.row}`,children:O.ids.map(M=>y.jsx(Ui,{id:M,variant:O.variant,selected:l===M,onSelect:d},M))})]}),y.jsxs("div",{className:"floor-side-area",children:[y.jsx("div",{className:"counter-label",children:u.counter}),y.jsx("div",{className:"entrance-label",children:u.entrance})]})]})}function Ko(l){return`$${Number(l||0).toFixed(2)}`}function Mp({item:l,onIncrease:d,onDecrease:u,onRemove:C,labels:T,lang:L,chineseVariant:O}){const M=Number(l.price||0),Q=Number(l.qty||0),X=M*Q,le=L==="en"&&l.name_en?l.name_en:hn(l.name,O);return y.jsxs("div",{className:"order-cart-row",children:[y.jsxs("div",{className:"order-cart-row-main",children:[y.jsx("h4",{children:le}),y.jsxs("div",{className:"order-cart-row-meta",children:[Ko(M)," x ",Q]}),y.jsxs("div",{className:"order-cart-row-meta",children:[T.subtotal,": ",Ko(X)]})]}),y.jsxs("div",{className:"order-cart-row-side",children:[y.jsx("strong",{children:Ko(X)}),y.jsxs("div",{className:"cart-item-qty",children:[y.jsx("button",{type:"button",className:"qty-btn",onClick:()=>u(l.id),"aria-label":T.decreaseQty,children:"−"}),y.jsx("span",{children:Q}),y.jsx("button",{type:"button",className:"qty-btn",onClick:()=>d(l.id),"aria-label":T.increaseQty,children:"+"}),y.jsx("button",{type:"button",className:"qty-btn",onClick:()=>C(l.id),title:T.remove,"aria-label":T.removeItem,children:"✕"})]})]})]})}function Gi(l){return`$${Number(l||0).toFixed(2)}`}function Op(l){const d=Math.round(Number(l||0)*100)/100,u=Math.round(d*.0825*100)/100,C=Math.round((d+u)*100)/100,T=Math.round(C*1.02*100)/100;return{beforeTax:d,tax:u,cashTotal:C,cardTotal:T}}function jp({items:l,onIncrease:d,onDecrease:u,onRemove:C,totalQuantity:T,totalPrice:L,labels:O,lang:M,chineseVariant:Q}){const X=Op(L);return l.length?y.jsxs("div",{children:[y.jsx("div",{className:"order-cart-items",children:l.map(le=>y.jsx(Mp,{item:le,onIncrease:d,onDecrease:u,onRemove:C,labels:O,lang:M,chineseVariant:Q},le.id))}),y.jsxs("div",{className:"order-cart-footer",children:[y.jsxs("div",{className:"order-summary-line",children:[y.jsx("span",{children:O.totalQuantity}),y.jsx("span",{children:T})]}),y.jsxs("div",{className:"order-summary-line",children:[y.jsx("span",{children:O.subtotal}),y.jsx("span",{children:Gi(X.beforeTax)})]}),y.jsxs("div",{className:"order-summary-line",children:[y.jsx("span",{children:O.tax}),y.jsx("span",{children:Gi(X.tax)})]}),y.jsxs("div",{className:"payment-total-options",role:"group","aria-label":O.paymentCalculation,children:[y.jsxs("div",{className:"payment-total-option",children:[y.jsx("span",{children:O.cashCalculation}),y.jsx("strong",{children:Gi(X.cashTotal)})]}),y.jsxs("div",{className:"payment-total-option",children:[y.jsx("span",{children:O.cardCalculation}),y.jsx("strong",{children:Gi(X.cardTotal)})]})]}),y.jsx("p",{className:"payment-reference-note",children:O.paymentReferenceNote})]})]}):y.jsxs("div",{className:"cart-empty",children:[y.jsx("div",{className:"cart-empty-icon",children:"🛒"}),y.jsx("p",{children:O.empty}),y.jsx("p",{style:{fontSize:"0.85rem",marginTop:5},children:O.emptyDesc})]})}function Yo(l){return`$${Number(l||0).toFixed(2)}`}function Wi(l){return String(l||"").replace(/\D/g,"").slice(0,10)}function Qi(l){const d=Wi(l);return d.length<=3?d:d.length<=6?`${d.slice(0,3)}-${d.slice(3)}`:`${d.slice(0,3)}-${d.slice(3,6)}-${d.slice(6)}`}function Vp(l){const d=Math.round(Number(l||0)*100)/100,u=Math.round(d*.0825*100)/100,C=Math.round((d+u)*100)/100,T=Math.round(C*1.02*100)/100;return{subtotal:d,tax:u,cashTotal:C,cardTotal:T}}const Lc=660,zc=1230,$p=10;function Dc(l){const d=Math.floor(l/60),u=l%60,C=d>=12?"PM":"AM",T=d%12||12;return`${String(T).padStart(2,"0")}:${String(u).padStart(2,"0")} ${C}`}function Hp(){const l=[];for(let d=Lc;d<=zc;d+=$p)l.push({value:Dc(d),minutes:d});return l}function ss(l){const d=String(l||"").trim();if(!d)return null;const u=d.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);if(u){let L=Number(u[1]);const O=Number(u[2]),M=u[3].toUpperCase();return L<1||L>12||O<0||O>59?null:(M==="PM"&&L!==12&&(L+=12),M==="AM"&&L===12&&(L=0),L*60+O)}const C=d.match(/^(AM|PM)\s+(\d{1,2}):(\d{2})$/i);if(C)return ss(`${C[2]}:${C[3]} ${C[1].toUpperCase()}`);const T=d.match(/^(\d{1,2}):(\d{2})$/);if(T){const L=Number(T[1]),O=Number(T[2]);return L<0||L>23||O<0||O>59?null:L*60+O}return null}function Xo(l){const d=ss(l);return d===null||d<Lc||d>zc?"":Dc(d)}function qp(l){const d=ss(l);if(d===null)return!1;const u=new Date;return u.getHours()*60+u.getMinutes()>d}function Fp(l){return l.map(d=>{const u=Number(d.price)||0,C=Math.max(0,Math.floor(Number(d.qty??d.quantity)||0));return{id:String(d.id||"").trim(),displayId:String(d.displayId||d.id||"").trim(),name:String(d.name||"").trim(),name_en:String(d.name_en||"").trim(),price:u,qty:C,subtotal:Math.round(u*C*100)/100,note:String(d.note||"").trim()}}).filter(d=>d.id&&d.qty>0)}async function Up(l){const d=await fetch("/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}),u=await d.json().catch(()=>({}));if(!d.ok||!u.ok)throw new Error(u.message||"BACKEND_REJECTED");return u.order||l}function Gp(){const{cartItems:l,increaseQuantity:d,decreaseQuantity:u,removeFromCart:C,clearCart:T,getTotalQuantity:L,getTotalPrice:O}=Pc(),[M,Q]=J.useState(nt()),[X,le]=J.useState(At()),[B,q]=J.useState("dinein"),[ee,ie]=J.useState(""),[K,re]=J.useState(""),[je,Je]=J.useState(""),[be,Se]=J.useState(""),[Le,Ce]=J.useState(""),[Ee,ve]=J.useState(""),[ut,rt]=J.useState(!1),[ke,Ke]=J.useState(null),E=_=>{const f=Pr(_,M);return M==="zh"?hn(f,X):f},R=J.useMemo(()=>({pageTitle:E("order_cart_page_title"),pageSubtitle:E("order_cart_page_subtitle"),orderType:E("order_type"),dineIn:E("order_dinein"),pickup:E("order_takeout"),currentCategory:E("order_current_category"),memberOrder:E("order_member_order"),guestOrder:E("order_guest_order"),phoneOptional:E("order_phone_optional"),dineInPhonePlaceholder:E("order_dinein_phone_placeholder"),dineInPhoneHelp:E("order_dinein_phone_help"),selectTable:E("order_table_select"),tableHint:E("order_table_hint"),notSelected:E("order_not_selected"),pickupInfo:E("order_pickup_info"),name:E("order_customer_name"),namePlaceholder:E("order_customer_name_placeholder"),phone:E("order_customer_phone"),phonePlaceholder:E("order_customer_phone_placeholder"),pickupTime:E("order_pickup_time"),pickupTimePlaceholder:E("order_pickup_time_placeholder"),pickupTimeRange:E("order_pickup_time_range"),cart:E("order_cart"),placeOrder:E("order_checkout"),submitting:E("order_submitting"),empty:E("order_empty"),emptyDesc:E("order_empty_desc"),subtotal:E("order_subtotal"),tax:E("order_tax"),paymentCalculation:E("order_payment_calculation"),cashCalculation:E("order_cash_calculation"),cardCalculation:E("order_card_calculation"),paymentReferenceNote:E("order_payment_reference_note"),totalQuantity:E("order_total_qty"),totalAmount:E("order_total_amount"),decreaseQty:E("order_decrease_qty"),increaseQty:E("order_increase_qty"),remove:E("order_remove_item"),removeItem:E("order_remove_item_aria"),counter:E("order_counter"),entrance:E("order_entrance"),floorPlanAria:E("order_floor_plan_aria"),successTitle:E("order_success_title"),successSubtitle:E("order_success_subtitle"),type:E("order_type_label"),nameLabel:E("order_name_label"),phoneLabel:E("order_phone_label"),pickupTimeLabel:E("order_pickup_time_label"),tableLabel:E("order_table_label"),temporaryDineIn:E("order_temporary_dinein_no_phone"),totalAmountLabel:E("order_total_amount_label"),continueOrdering:E("order_continue_ordering")}),[M,X]);J.useEffect(()=>{window.scrollTo(0,0),typeof window.initNavbarScroll=="function"&&window.initNavbarScroll(),typeof window.initScrollAnimations=="function"&&window.initScrollAnimations(),typeof window.updateCartBadge=="function"&&window.updateCartBadge(),Lr()},[]),J.useEffect(()=>{const _=()=>{Q(nt()),le(At()),setTimeout(()=>Lr(),0)};return window.addEventListener("languagechange",_),window.addEventListener("chinesevariantchange",_),window.addEventListener("storage",_),()=>{window.removeEventListener("languagechange",_),window.removeEventListener("chinesevariantchange",_),window.removeEventListener("storage",_)}},[]),J.useEffect(()=>{const _=setTimeout(()=>Lr(),0);return()=>clearTimeout(_)},[M,X,B,ke,Ee,l.length,K]),J.useEffect(()=>{try{const _=JSON.parse(localStorage.getItem("orderDraft")||"{}");_&&typeof _=="object"&&(q(_.orderType==="takeout"?"takeout":"dinein"),re(_.selectedTable||""),ie(_.dineInPhone||""),Je(_.takeoutName||""),Se(_.takeoutPhone||""),Ce(Xo(_.pickupTime||"")))}catch{}},[]),J.useEffect(()=>{const _={orderType:B,selectedTable:K,dineInPhone:ee,takeoutName:je,takeoutPhone:be,pickupTime:Le};localStorage.setItem("orderDraft",JSON.stringify(_))},[B,K,ee,je,be,Le]);const it=L(),Be=O(),ue=J.useMemo(()=>Hp(),[]);J.useMemo(()=>Wi(B==="takeout"?be:ee).length===10?R.memberOrder:R.guestOrder,[B,be,ee,R.memberOrder,R.guestOrder]);function I(){if(l.length===0)return E("order_error_empty_cart");if(B==="dinein"){if(!K)return E("order_error_select_table");if(Wi(ee).length!==10)return E("order_error_dinein_phone")}if(B==="takeout"){if(!je.trim())return E("order_error_pickup_name");if(Wi(be).length!==10)return E("order_error_pickup_phone");const _=Xo(Le);if(!_)return E("order_error_pickup_time");if(qp(_))return E("order_error_pickup_time_expired")}return""}async function $(){const _=I();if(_){ve(_),_===E("order_error_pickup_time_expired")&&window.alert(_);return}const f=Fp(l);if(f.length===0){ve(E("order_error_empty_cart")),T();return}const w=Qi(B==="takeout"?be:ee),G=Math.round(f.reduce((U,te)=>U+te.subtotal,0)*100)/100,F=Vp(G),Y={type:B,table:B==="dinein"?K:"",customerName:B==="takeout"?je.trim():"",customerPhone:w,userType:"member",pickupTime:B==="takeout"?Xo(Le):"",items:f,totalQuantity:f.reduce((U,te)=>U+te.qty,0),subtotal:F.subtotal,taxRate:.0825,tax:F.tax,cashTotal:F.cashTotal,cardServiceRate:.02,cardTotal:F.cardTotal,total:F.cashTotal,createdAt:new Date().toISOString()};rt(!0),ve("");try{const U=await Up(Y);zp(U),T(),localStorage.removeItem("orderDraft"),Ke(U)}catch(U){const te=U.message==="BACKEND_REJECTED"?E("order_server_rejected"):U.message;ve(`${E("order_not_completed")}: ${te||E("order_server_unreachable")}`)}finally{rt(!1)}}if(ke){const _=ke.type==="takeout";return y.jsxs(y.Fragment,{children:[y.jsx("div",{dangerouslySetInnerHTML:{__html:_t()}}),y.jsxs("main",{"data-react-managed":"true",children:[y.jsx("div",{className:"page-header",children:y.jsxs("div",{className:"container",children:[y.jsx("h1",{children:R.successTitle}),y.jsx("p",{children:R.successSubtitle})]})}),y.jsx("section",{className:"section",children:y.jsx("div",{className:"container",style:{maxWidth:620},children:y.jsxs("div",{className:"order-cart-card",children:[y.jsxs("p",{style:{fontSize:"1.1rem",marginBottom:10},children:[R.type,": ",y.jsx("strong",{children:ke.userType==="member"?R.memberOrder:R.guestOrder})," ｜"," ",y.jsx("strong",{children:_?R.pickup:R.dineIn})]}),_?y.jsxs("p",{style:{marginBottom:10},children:[R.nameLabel,": ",ke.customerName||"-"," ｜ ",R.phoneLabel,": ",ke.customerPhone||"-"," ｜ ",R.pickupTimeLabel,":"," ",ke.pickupTime||"-"]}):y.jsxs("p",{style:{marginBottom:10},children:[R.tableLabel,": ",y.jsx("strong",{children:ke.table})," ｜ ",R.phoneLabel,": ",ke.customerPhone||R.temporaryDineIn]}),y.jsxs("p",{style:{marginBottom:16},children:[R.totalAmountLabel,": ",y.jsx("strong",{children:Yo(ke.total)})]}),y.jsx("div",{className:"order-cart-items",children:ke.items.map(f=>{const w=M==="en"&&f.name_en?f.name_en:hn(f.name,X);return y.jsxs("div",{className:"order-cart-row",children:[y.jsxs("div",{className:"order-cart-row-main",children:[y.jsxs("h4",{children:[f.displayId?`${f.displayId} `:"",w]}),y.jsxs("div",{className:"order-cart-row-meta",children:[Yo(f.price)," x ",f.qty]})]}),y.jsx("div",{className:"order-cart-row-side",children:y.jsx("strong",{children:Yo(f.subtotal)})})]},f.id)})}),y.jsx("button",{type:"button",className:"btn-submit",style:{width:"100%",marginTop:20},onClick:()=>Ke(null),children:R.continueOrdering})]})})})]}),y.jsx("div",{dangerouslySetInnerHTML:{__html:Tt()}})]})}return y.jsxs(y.Fragment,{children:[y.jsx("div",{dangerouslySetInnerHTML:{__html:_t()}}),y.jsxs("main",{"data-react-managed":"true",children:[y.jsx("div",{className:"page-header",children:y.jsxs("div",{className:"container",children:[y.jsx("h1",{children:R.pageTitle}),y.jsx("p",{children:R.pageSubtitle})]})}),y.jsx("section",{className:"section order-section",children:y.jsx("div",{className:"container",children:y.jsxs("div",{className:"order-layout",children:[y.jsxs("div",{className:"order-left-panel",children:[y.jsxs("div",{className:"order-option-card",children:[y.jsx("h3",{children:R.orderType}),y.jsxs("div",{className:"order-type-tabs",role:"tablist","aria-label":R.orderType,children:[y.jsx("button",{type:"button",className:`menu-cat-btn order-mode-btn ${B==="dinein"?"active":""}`,onClick:()=>{q("dinein"),ve("")},children:R.dineIn}),y.jsx("button",{type:"button",className:`menu-cat-btn order-mode-btn ${B==="takeout"?"active":""}`,onClick:()=>{q("takeout"),ve("")},children:R.pickup})]}),y.jsxs("div",{className:"order-draft-hint",children:[R.currentCategory,": ",B==="takeout"?R.pickup:R.dineIn]})]}),B==="dinein"?y.jsxs("div",{className:"order-option-card",children:[y.jsxs("div",{className:"form-group",children:[y.jsx("label",{children:R.phoneOptional}),y.jsx("input",{type:"tel",value:ee,onChange:_=>ie(Qi(_.target.value)),placeholder:R.dineInPhonePlaceholder,inputMode:"numeric",maxLength:12})]}),y.jsxs("div",{className:"order-panel-title-row",children:[y.jsxs("div",{children:[y.jsx("h4",{children:R.selectTable}),y.jsx("p",{children:R.tableHint})]}),y.jsx("strong",{className:`selected-table-label ${K?"has-selection":""}`,children:K||R.notSelected})]}),y.jsx(Rp,{selectedTable:K,labels:R,onSelect:_=>{re(_),ve("")}})]}):y.jsxs("div",{className:"order-option-card",children:[y.jsx("h3",{children:R.pickupInfo}),y.jsxs("div",{className:"order-form-grid",children:[y.jsxs("div",{className:"form-group",children:[y.jsx("label",{children:R.name}),y.jsx("input",{value:je,onChange:_=>Je(_.target.value),placeholder:R.namePlaceholder})]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{children:R.phone}),y.jsx("input",{type:"tel",value:be,onChange:_=>Se(Qi(_.target.value)),placeholder:R.phonePlaceholder,inputMode:"numeric",maxLength:12})]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{children:R.pickupTime}),y.jsx("div",{className:"pickup-time-selects pickup-time-single",lang:"en",children:y.jsxs("select",{value:Le,"aria-label":R.pickupTime,onChange:_=>{Ce(_.target.value),ve("")},children:[y.jsx("option",{value:"",children:R.pickupTimePlaceholder}),ue.map(_=>y.jsx("option",{value:_.value,children:_.value},_.minutes))]})}),y.jsx("small",{children:R.pickupTimeRange})]})]})]})]}),y.jsx("div",{className:"order-cart-column",children:y.jsxs("div",{className:"order-cart-card",children:[y.jsx("div",{className:"order-cart-header",children:y.jsx("h3",{children:R.cart})}),y.jsx(jp,{items:l,onIncrease:d,onDecrease:u,onRemove:C,totalQuantity:it,totalPrice:Be,labels:R,lang:M,chineseVariant:X}),y.jsxs("div",{style:{padding:"0 20px 20px"},children:[Ee?y.jsx("p",{style:{color:"#c0392b",marginBottom:10},children:Ee}):null,y.jsx("button",{type:"button",className:"btn-submit",style:{width:"100%"},onClick:$,disabled:ut,children:ut?R.submitting:R.placeOrder})]})]})})]})})})]}),y.jsx("div",{dangerouslySetInnerHTML:{__html:Tt()}})]})}function hc(){return(window.location.hash||"#/").replace(/^#\/?/,"").split("?")[0].replace(/^\//,"")||"home"}function Qp(l){Lr(),typeof window.updateAllText=="function"&&window.updateAllText(),typeof window.initScrollAnimations=="function"&&window.initScrollAnimations(),typeof window.initNavbarScroll=="function"&&window.initNavbarScroll(),typeof window.updateCartBadge=="function"&&window.updateCartBadge();for(const d of l.scripts||[])try{const u=`(() => {
${d}
})();`;new Function(u)()}catch(u){console.error("Legacy page script error:",l.source,u)}typeof window.rebuildMenu=="function"&&window.rebuildMenu(),typeof window.renderDish=="function"&&window.renderDish(),typeof window.renderOrderCart=="function"&&window.renderOrderCart(),typeof window.updateCartBadge=="function"&&window.updateCartBadge(),Lr()}function Wp(){const{getTotalQuantity:l}=Pc(),d=l(),u=()=>{window.location.hash="#/cart"};return y.jsxs("button",{type:"button",className:"floating-cart-button","aria-label":"Open order cart",onClick:u,children:[y.jsx("span",{className:"floating-cart-icon","aria-hidden":"true",children:"🛒"}),d>0?y.jsx("span",{className:"floating-cart-count",children:d}):null]})}function Jp({pageKey:l}){const d=Zo[l]||Zo.home;return J.useEffect(()=>{window.scrollTo(0,0);const u=setTimeout(()=>Qp(d),0);return()=>clearTimeout(u)},[l,d]),y.jsx("div",{dangerouslySetInnerHTML:{__html:d.html}})}function Kp(){const[l,d]=J.useState(hc());J.useEffect(()=>{const C=()=>d(hc());return window.addEventListener("hashchange",C),window.location.hash||window.history.replaceState(null,"","#/"),()=>window.removeEventListener("hashchange",C)},[]);const u=J.useMemo(()=>Zo[l]?l:"home",[l]);return y.jsxs(Bp,{children:[l==="cart"||l==="order"?y.jsx(Gp,{}):y.jsx(Jp,{pageKey:u}),y.jsx(Wp,{})]})}function Bc(l){return(Array.isArray(l)?l:[]).map(function(d){return Object.assign({},d,{qty:Math.max(0,Math.floor(Number(d&&(d.qty??d.quantity)||0))),price:Number(d&&d.price)||0})}).filter(function(d){return d.id&&d.qty>0})}function Yp(){try{const l=JSON.parse(localStorage.getItem("cart")||"[]");return Bc(l)}catch{return[]}}function Ac(l){const d=Bc(l);localStorage.setItem("cart",JSON.stringify(d)),window.cart=d,window.dispatchEvent(new CustomEvent("cartchange",{detail:d}))}function Xp(l,d){const u=Array.isArray(l)?[...l]:[],C=u.find(T=>T.id===d.id);return C?C.qty+=1:u.push({...d,displayId:d.displayId||d.id,qty:1,note:d.note||""}),u}function Zp(l,d,u){return(Array.isArray(l)?l:[]).map(C=>C.id===d?{...C,note:String(u||"")}:{...C})}function Rc(l,d){return(Array.isArray(l)?l:[]).filter(u=>u.id!==d)}function ef(l,d,u){const C=(Array.isArray(l)?l:[]).map(L=>({...L})),T=C.find(L=>L.id===d);return T?(T.qty+=u,T.qty<=0?Rc(C,d):C):C}function tf(l){return(Array.isArray(l)?l:[]).reduce((d,u)=>d+Number(u.price||0)*Number(u.qty||0),0)}function nf(l){return(Array.isArray(l)?l:[]).reduce((d,u)=>d+Number(u.qty||0),0)}window.cart=Yp();function rf(l){window.cart=Xp(window.cart,l),Dr(),Hn(),jc(currentLang==="zh"?window.formatDisplayText("已加入購物車"):"Added to cart","success")}function af(l){window.cart=Rc(window.cart,l),Dr(),Hn()}function of(l,d){window.cart=ef(window.cart,l,d),Dr(),Hn()}function sf(l,d){window.cart=Zp(window.cart,l,d),Ac(window.cart)}function lf(){window.cart=[],Dr(),Hn()}function Mc(){return tf(window.cart)}function Oc(){return nf(window.cart)}function Dr(){Ac(window.cart),ls()}function ls(){const l=document.querySelector(".cart-badge");if(l){const d=Oc();l.textContent=d,l.style.display=d>0?"flex":"none"}}function Hn(){const l=document.getElementById("cartItems"),d=document.getElementById("cartTotal");if(l){if(window.cart.length===0){l.innerHTML=`
            <div class="cart-empty">
                <div class="cart-empty-icon">🛒</div>
                <p data-i18n="order_empty">${t("order_empty")}</p>
                <p style="font-size:0.85rem;margin-top:5px" data-i18n="order_empty_desc">${t("order_empty_desc")}</p>
            </div>`,d&&(d.textContent="$0");return}l.innerHTML=window.cart.map(u=>`
        <div class="cart-item">
            <div class="cart-item-img" style="background:${u.color||"linear-gradient(135deg, #ffecd2, #fcb69f)"}"></div>
            <div class="cart-item-info">
                <h4>${window.getItemName?window.getItemName(u):(currentLang==="en"?u.name_en:window.formatDisplayText(u.name))||u.name||""}</h4>
                <div class="price">$${u.price}</div>
            </div>
            <div class="cart-item-qty">
                <button class="qty-btn" onclick="updateQty('${u.id}', -1)">−</button>
                <span>${u.qty}</span>
                <button class="qty-btn" onclick="updateQty('${u.id}', 1)">+</button>
            </div>
        </div>
    `).join(""),d&&(d.textContent=`$${Mc()}`),ls()}}function jc(l,d=""){let u=document.querySelector(".toast");u||(u=document.createElement("div"),u.className="toast",document.body.appendChild(u)),u.textContent=l,u.className="toast "+d,setTimeout(()=>u.classList.add("show"),10),setTimeout(()=>u.classList.remove("show"),2500)}function df(){var l,d;(l=document.querySelector(".cart-overlay"))==null||l.classList.add("active"),(d=document.querySelector(".cart-sidebar"))==null||d.classList.add("active"),document.body.style.overflow="hidden",Hn()}function cf(){var l,d;(l=document.querySelector(".cart-overlay"))==null||l.classList.remove("active"),(d=document.querySelector(".cart-sidebar"))==null||d.classList.remove("active"),document.body.style.overflow=""}function uf(){var l;(l=document.querySelector(".nav-links"))==null||l.classList.toggle("active")}function mf(){const l=new IntersectionObserver(d=>{d.forEach(u=>{u.isIntersecting&&u.target.classList.add("visible")})},{threshold:.1});document.querySelectorAll(".fade-in").forEach(d=>l.observe(d))}let vc=!1;function pf(){vc||(vc=!0,window.addEventListener("scroll",()=>{const l=document.querySelector(".navbar");l&&(l.style.boxShadow=window.scrollY>50?"0 2px 20px rgba(0,0,0,0.1)":"0 2px 10px rgba(0,0,0,0.05)")}))}Object.assign(window,{addToCart:rf,removeFromCart:af,updateQty:of,updateCartNote:sf,clearCart:lf,getCartTotal:Mc,getCartCount:Oc,saveCart:Dr,updateCartBadge:ls,renderCart:Hn,showToast:jc,openCart:df,closeCart:cf,toggleMobileMenu:uf,initScrollAnimations:mf,initNavbarScroll:pf});Fm.createRoot(document.getElementById("root")).render(y.jsx(Kp,{}));
