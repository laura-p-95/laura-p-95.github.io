(function(){"use strict";var yw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function nd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var fg={exports:{}},vl={},gg={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa=Symbol.for("react.element"),Cw=Symbol.for("react.portal"),ww=Symbol.for("react.fragment"),Sw=Symbol.for("react.strict_mode"),kw=Symbol.for("react.profiler"),xw=Symbol.for("react.provider"),Bw=Symbol.for("react.context"),Tw=Symbol.for("react.forward_ref"),Iw=Symbol.for("react.suspense"),$w=Symbol.for("react.memo"),Aw=Symbol.for("react.lazy"),vg=Symbol.iterator;function Ew(t){return t===null||typeof t!="object"?null:(t=vg&&t[vg]||t["@@iterator"],typeof t=="function"?t:null)}var mg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bg=Object.assign,yg={};function wi(t,e,n){this.props=t,this.context=e,this.refs=yg,this.updater=n||mg}wi.prototype.isReactComponent={},wi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},wi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Cg(){}Cg.prototype=wi.prototype;function od(t,e,n){this.props=t,this.context=e,this.refs=yg,this.updater=n||mg}var rd=od.prototype=new Cg;rd.constructor=od,bg(rd,wi.prototype),rd.isPureReactComponent=!0;var wg=Array.isArray,Sg=Object.prototype.hasOwnProperty,id={current:null},kg={key:!0,ref:!0,__self:!0,__source:!0};function xg(t,e,n){var o,r={},i=null,a=null;if(e!=null)for(o in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(i=""+e.key),e)Sg.call(e,o)&&!kg.hasOwnProperty(o)&&(r[o]=e[o]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(o in s=t.defaultProps,s)r[o]===void 0&&(r[o]=s[o]);return{$$typeof:Fa,type:t,key:i,ref:a,props:r,_owner:id.current}}function Pw(t,e){return{$$typeof:Fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ad(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fa}function Fw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bg=/\/+/g;function sd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Fw(""+t.key):e.toString(36)}function ml(t,e,n,o,r){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Fa:case Cw:a=!0}}if(a)return a=t,r=r(a),t=o===""?"."+sd(a,0):o,wg(r)?(n="",t!=null&&(n=t.replace(Bg,"$&/")+"/"),ml(r,e,n,"",function(c){return c})):r!=null&&(ad(r)&&(r=Pw(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Bg,"$&/")+"/")+t)),e.push(r)),1;if(a=0,o=o===""?".":o+":",wg(t))for(var s=0;s<t.length;s++){i=t[s];var l=o+sd(i,s);a+=ml(i,e,n,l,r)}else if(l=Ew(t),typeof l=="function")for(t=l.call(t),s=0;!(i=t.next()).done;)i=i.value,l=o+sd(i,s++),a+=ml(i,e,n,l,r);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function bl(t,e,n){if(t==null)return t;var o=[],r=0;return ml(t,o,"","",function(i){return e.call(n,i,r++)}),o}function Rw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},yl={transition:null},Lw={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:yl,ReactCurrentOwner:id};ue.Children={map:bl,forEach:function(t,e,n){bl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return bl(t,function(){e++}),e},toArray:function(t){return bl(t,function(e){return e})||[]},only:function(t){if(!ad(t))throw Error("React.Children.only expected to receive a single React element child.");return t}},ue.Component=wi,ue.Fragment=ww,ue.Profiler=kw,ue.PureComponent=od,ue.StrictMode=Sw,ue.Suspense=Iw,ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lw,ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=bg({},t.props),r=t.key,i=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,a=id.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)Sg.call(e,l)&&!kg.hasOwnProperty(l)&&(o[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];o.children=s}return{$$typeof:Fa,type:t.type,key:r,ref:i,props:o,_owner:a}},ue.createContext=function(t){return t={$$typeof:Bw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:xw,_context:t},t.Consumer=t},ue.createElement=xg,ue.createFactory=function(t){var e=xg.bind(null,t);return e.type=t,e},ue.createRef=function(){return{current:null}},ue.forwardRef=function(t){return{$$typeof:Tw,render:t}},ue.isValidElement=ad,ue.lazy=function(t){return{$$typeof:Aw,_payload:{_status:-1,_result:t},_init:Rw}},ue.memo=function(t,e){return{$$typeof:$w,type:t,compare:e===void 0?null:e}},ue.startTransition=function(t){var e=yl.transition;yl.transition={};try{t()}finally{yl.transition=e}},ue.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},ue.useCallback=function(t,e){return qt.current.useCallback(t,e)},ue.useContext=function(t){return qt.current.useContext(t)},ue.useDebugValue=function(){},ue.useDeferredValue=function(t){return qt.current.useDeferredValue(t)},ue.useEffect=function(t,e){return qt.current.useEffect(t,e)},ue.useId=function(){return qt.current.useId()},ue.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)},ue.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)},ue.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)},ue.useMemo=function(t,e){return qt.current.useMemo(t,e)},ue.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)},ue.useRef=function(t){return qt.current.useRef(t)},ue.useState=function(t){return qt.current.useState(t)},ue.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)},ue.useTransition=function(){return qt.current.useTransition()},ue.version="18.2.0",gg.exports=ue;var ee=gg.exports;const F=nd(ee);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nw=ee,Dw=Symbol.for("react.element"),Ow=Symbol.for("react.fragment"),Hw=Object.prototype.hasOwnProperty,Mw=Nw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zw={key:!0,ref:!0,__self:!0,__source:!0};function Tg(t,e,n){var o,r={},i=null,a=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(o in e)Hw.call(e,o)&&!zw.hasOwnProperty(o)&&(r[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps,e)r[o]===void 0&&(r[o]=e[o]);return{$$typeof:Dw,type:t,key:i,ref:a,props:r,_owner:Mw.current}}vl.Fragment=Ow,vl.jsx=Tg,vl.jsxs=Tg,fg.exports=vl;var f=fg.exports,Cl={},Ig={exports:{}},pn={},$g={exports:{}},Ag={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,R){var X=N.length;N.push(R);e:for(;0<X;){var se=X-1>>>1,j=N[se];if(0<r(j,R))N[se]=R,N[X]=j,X=se;else break e}}function n(N){return N.length===0?null:N[0]}function o(N){if(N.length===0)return null;var R=N[0],X=N.pop();if(X!==R){N[0]=X;e:for(var se=0,j=N.length,Se=j>>>1;se<Se;){var De=2*(se+1)-1,Te=N[De],Ee=De+1,We=N[Ee];if(0>r(Te,X))Ee<j&&0>r(We,Te)?(N[se]=We,N[Ee]=X,se=Ee):(N[se]=Te,N[De]=X,se=De);else if(Ee<j&&0>r(We,X))N[se]=We,N[Ee]=X,se=Ee;else break e}}return R}function r(N,R){var X=N.sortIndex-R.sortIndex;return X!==0?X:N.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();t.unstable_now=function(){return a.now()-s}}var l=[],c=[],_=1,d=null,v=3,b=!1,S=!1,x=!1,O=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(N){for(var R=n(c);R!==null;){if(R.callback===null)o(c);else if(R.startTime<=N)o(c),R.sortIndex=R.expirationTime,e(l,R);else break;R=n(c)}}function E(N){if(x=!1,w(N),!S)if(n(l)!==null)S=!0,pe(D);else{var R=n(c);R!==null&&U(E,R.startTime-N)}}function D(N,R){S=!1,x&&(x=!1,C(m),m=-1),b=!0;var X=v;try{for(w(R),d=n(l);d!==null&&(!(d.expirationTime>R)||N&&!H());){var se=d.callback;if(typeof se=="function"){d.callback=null,v=d.priorityLevel;var j=se(d.expirationTime<=R);R=t.unstable_now(),typeof j=="function"?d.callback=j:d===n(l)&&o(l),w(R)}else o(l);d=n(l)}if(d!==null)var Se=!0;else{var De=n(c);De!==null&&U(E,De.startTime-R),Se=!1}return Se}finally{d=null,v=X,b=!1}}var P=!1,I=null,m=-1,y=5,B=-1;function H(){return!(t.unstable_now()-B<y)}function M(){if(I!==null){var N=t.unstable_now();B=N;var R=!0;try{R=I(!0,N)}finally{R?q():(P=!1,I=null)}}else P=!1}var q;if(typeof g=="function")q=function(){g(M)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,ge=G.port2;G.port1.onmessage=M,q=function(){ge.postMessage(null)}}else q=function(){O(M,0)};function pe(N){I=N,P||(P=!0,q())}function U(N,R){m=O(function(){N(t.unstable_now())},R)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){S||b||(S=!0,pe(D))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(v){case 1:case 2:case 3:var R=3;break;default:R=v}var X=v;v=R;try{return N()}finally{v=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,R){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var X=v;v=N;try{return R()}finally{v=X}},t.unstable_scheduleCallback=function(N,R,X){var se=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?se+X:se):X=se,N){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=X+j,N={id:_++,callback:R,priorityLevel:N,startTime:X,expirationTime:j,sortIndex:-1},X>se?(N.sortIndex=X,e(c,N),n(l)===null&&N===n(c)&&(x?(C(m),m=-1):x=!0,U(E,X-se))):(N.sortIndex=j,e(l,N),S||b||(S=!0,pe(D))),N},t.unstable_shouldYield=H,t.unstable_wrapCallback=function(N){var R=v;return function(){var X=v;v=R;try{return N.apply(this,arguments)}finally{v=X}}}})(Ag),$g.exports=Ag;var jw=$g.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg=ee,hn=jw;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pg=new Set,Ra={};function Pr(t,e){Si(t,e),Si(t+"Capture",e)}function Si(t,e){for(Ra[t]=e,t=0;t<e.length;t++)Pg.add(e[t])}var po=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ld=Object.prototype.hasOwnProperty,Vw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fg={},Rg={};function Ww(t){return ld.call(Rg,t)?!0:ld.call(Fg,t)?!1:Vw.test(t)?Rg[t]=!0:(Fg[t]=!0,!1)}function Uw(t,e,n,o){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qw(t,e,n,o){if(e===null||typeof e>"u"||Uw(t,e,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Gt(t,e,n,o,r,i,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=a}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xt[t]=new Gt(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xt[e]=new Gt(e,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){xt[t]=new Gt(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xt[t]=new Gt(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xt[t]=new Gt(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){xt[t]=new Gt(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){xt[t]=new Gt(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){xt[t]=new Gt(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){xt[t]=new Gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ud=/[\-:]([a-z])/g;function cd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ud,cd);xt[e]=new Gt(e,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ud,cd);xt[e]=new Gt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ud,cd);xt[e]=new Gt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){xt[t]=new Gt(t,1,!1,t.toLowerCase(),null,!1,!1)}),xt.xlinkHref=new Gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){xt[t]=new Gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function dd(t,e,n,o){var r=xt.hasOwnProperty(e)?xt[e]:null;(r!==null?r.type!==0:o||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qw(e,n,r,o)&&(n=null),o||r===null?Ww(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,o=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,o?t.setAttributeNS(o,e,n):t.setAttribute(e,n))))}var ho=Eg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wl=Symbol.for("react.element"),ki=Symbol.for("react.portal"),xi=Symbol.for("react.fragment"),_d=Symbol.for("react.strict_mode"),pd=Symbol.for("react.profiler"),Lg=Symbol.for("react.provider"),Ng=Symbol.for("react.context"),hd=Symbol.for("react.forward_ref"),fd=Symbol.for("react.suspense"),gd=Symbol.for("react.suspense_list"),vd=Symbol.for("react.memo"),Oo=Symbol.for("react.lazy"),Dg=Symbol.for("react.offscreen"),Og=Symbol.iterator;function La(t){return t===null||typeof t!="object"?null:(t=Og&&t[Og]||t["@@iterator"],typeof t=="function"?t:null)}var Oe=Object.assign,md;function Na(t){if(md===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);md=e&&e[1]||""}return`
`+md+t}var bd=!1;function yd(t,e){if(!t||bd)return"";bd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var o=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){o=c}t.call(e.prototype)}else{try{throw Error()}catch(c){o=c}t()}}catch(c){if(c&&o&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),i=o.stack.split(`
`),a=r.length-1,s=i.length-1;1<=a&&0<=s&&r[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(r[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||r[a]!==i[s]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=s);break}}}finally{bd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Na(t):""}function Gw(t){switch(t.tag){case 5:return Na(t.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return t=yd(t.type,!1),t;case 11:return t=yd(t.type.render,!1),t;case 1:return t=yd(t.type,!0),t;default:return""}}function Cd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xi:return"Fragment";case ki:return"Portal";case pd:return"Profiler";case _d:return"StrictMode";case fd:return"Suspense";case gd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ng:return(t.displayName||"Context")+".Consumer";case Lg:return(t._context.displayName||"Context")+".Provider";case hd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vd:return e=t.displayName||null,e!==null?e:Cd(t.type)||"Memo";case Oo:e=t._payload,t=t._init;try{return Cd(t(e))}catch{}}return null}function Yw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cd(e);case 8:return e===_d?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ho(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Xw(t){var e=Hg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),o=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){o=""+a,i.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(a){o=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sl(t){t._valueTracker||(t._valueTracker=Xw(t))}function Mg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),o="";return t&&(o=Hg(t)?t.checked?"true":"false":t.value),t=o,t!==n?(e.setValue(t),!0):!1}function kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wd(t,e){var n=e.checked;return Oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zg(t,e){var n=e.defaultValue==null?"":e.defaultValue,o=e.checked!=null?e.checked:e.defaultChecked;n=Ho(e.value!=null?e.value:n),t._wrapperState={initialChecked:o,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function jg(t,e){e=e.checked,e!=null&&dd(t,"checked",e,!1)}function Sd(t,e){jg(t,e);var n=Ho(e.value),o=e.type;if(n!=null)o==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(o==="submit"||o==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?kd(t,e.type,n):e.hasOwnProperty("defaultValue")&&kd(t,e.type,Ho(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var o=e.type;if(!(o!=="submit"&&o!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function kd(t,e,n){(e!=="number"||kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Da=Array.isArray;function Bi(t,e,n,o){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&o&&(t[n].defaultSelected=!0)}else{for(n=""+Ho(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,o&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function xd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return Oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(Da(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ho(n)}}function Ug(t,e){var n=Ho(e.value),o=Ho(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),o!=null&&(t.defaultValue=""+o)}function qg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Gg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Gg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xl,Yg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,o,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,o,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xl=xl||document.createElement("div"),xl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Oa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jw=["Webkit","ms","Moz","O"];Object.keys(Ha).forEach(function(t){Jw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ha[e]=Ha[t]})});function Xg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ha.hasOwnProperty(t)&&Ha[t]?(""+e).trim():e+"px"}function Jg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var o=n.indexOf("--")===0,r=Xg(n,e[n],o);n==="float"&&(n="cssFloat"),o?t.setProperty(n,r):t[n]=r}}var Qw=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Td(t,e){if(e){if(Qw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function Id(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $d=null;function Ad(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ed=null,Ti=null,Ii=null;function Qg(t){if(t=ss(t)){if(typeof Ed!="function")throw Error(L(280));var e=t.stateNode;e&&(e=Yl(e),Ed(t.stateNode,t.type,e))}}function Zg(t){Ti?Ii?Ii.push(t):Ii=[t]:Ti=t}function Kg(){if(Ti){var t=Ti,e=Ii;if(Ii=Ti=null,Qg(t),e)for(t=0;t<e.length;t++)Qg(e[t])}}function ev(t,e){return t(e)}function tv(){}var Pd=!1;function nv(t,e,n){if(Pd)return t(e,n);Pd=!0;try{return ev(t,e,n)}finally{Pd=!1,(Ti!==null||Ii!==null)&&(tv(),Kg())}}function Ma(t,e){var n=t.stateNode;if(n===null)return null;var o=Yl(n);if(o===null)return null;n=o[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var Fd=!1;if(po)try{var za={};Object.defineProperty(za,"passive",{get:function(){Fd=!0}}),window.addEventListener("test",za,za),window.removeEventListener("test",za,za)}catch{Fd=!1}function Zw(t,e,n,o,r,i,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(_){this.onError(_)}}var ja=!1,Bl=null,Tl=!1,Rd=null,Kw={onError:function(t){ja=!0,Bl=t}};function eS(t,e,n,o,r,i,a,s,l){ja=!1,Bl=null,Zw.apply(Kw,arguments)}function tS(t,e,n,o,r,i,a,s,l){if(eS.apply(this,arguments),ja){if(ja){var c=Bl;ja=!1,Bl=null}else throw Error(L(198));Tl||(Tl=!0,Rd=c)}}function Fr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ov(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function rv(t){if(Fr(t)!==t)throw Error(L(188))}function nS(t){var e=t.alternate;if(!e){if(e=Fr(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,o=e;;){var r=n.return;if(r===null)break;var i=r.alternate;if(i===null){if(o=r.return,o!==null){n=o;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===n)return rv(r),t;if(i===o)return rv(r),e;i=i.sibling}throw Error(L(188))}if(n.return!==o.return)n=r,o=i;else{for(var a=!1,s=r.child;s;){if(s===n){a=!0,n=r,o=i;break}if(s===o){a=!0,o=r,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,o=r;break}if(s===o){a=!0,o=i,n=r;break}s=s.sibling}if(!a)throw Error(L(189))}}if(n.alternate!==o)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function iv(t){return t=nS(t),t!==null?av(t):null}function av(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=av(t);if(e!==null)return e;t=t.sibling}return null}var sv=hn.unstable_scheduleCallback,lv=hn.unstable_cancelCallback,oS=hn.unstable_shouldYield,rS=hn.unstable_requestPaint,Qe=hn.unstable_now,iS=hn.unstable_getCurrentPriorityLevel,Ld=hn.unstable_ImmediatePriority,uv=hn.unstable_UserBlockingPriority,Il=hn.unstable_NormalPriority,aS=hn.unstable_LowPriority,cv=hn.unstable_IdlePriority,$l=null,no=null;function sS(t){if(no&&typeof no.onCommitFiberRoot=="function")try{no.onCommitFiberRoot($l,t,void 0,(t.current.flags&128)===128)}catch{}}var Un=Math.clz32?Math.clz32:cS,lS=Math.log,uS=Math.LN2;function cS(t){return t>>>=0,t===0?32:31-(lS(t)/uS|0)|0}var Al=64,El=4194304;function Va(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pl(t,e){var n=t.pendingLanes;if(n===0)return 0;var o=0,r=t.suspendedLanes,i=t.pingedLanes,a=n&268435455;if(a!==0){var s=a&~r;s!==0?o=Va(s):(i&=a,i!==0&&(o=Va(i)))}else a=n&~r,a!==0?o=Va(a):i!==0&&(o=Va(i));if(o===0)return 0;if(e!==0&&e!==o&&!(e&r)&&(r=o&-o,i=e&-e,r>=i||r===16&&(i&4194240)!==0))return e;if(o&4&&(o|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=o;0<e;)n=31-Un(e),r=1<<n,o|=t[n],e&=~r;return o}function dS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _S(t,e){for(var n=t.suspendedLanes,o=t.pingedLanes,r=t.expirationTimes,i=t.pendingLanes;0<i;){var a=31-Un(i),s=1<<a,l=r[a];l===-1?(!(s&n)||s&o)&&(r[a]=dS(s,e)):l<=e&&(t.expiredLanes|=s),i&=~s}}function Nd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function dv(){var t=Al;return Al<<=1,!(Al&4194240)&&(Al=64),t}function Dd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Un(e),t[e]=n}function pS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var o=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Un(n),i=1<<r;e[r]=0,o[r]=-1,t[r]=-1,n&=~i}}function Od(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var o=31-Un(n),r=1<<o;r&e|t[o]&e&&(t[o]|=e),n&=~r}}var be=0;function _v(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var pv,Hd,hv,fv,gv,Md=!1,Fl=[],Mo=null,zo=null,jo=null,Ua=new Map,qa=new Map,Vo=[],hS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vv(t,e){switch(t){case"focusin":case"focusout":Mo=null;break;case"dragenter":case"dragleave":zo=null;break;case"mouseover":case"mouseout":jo=null;break;case"pointerover":case"pointerout":Ua.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qa.delete(e.pointerId)}}function Ga(t,e,n,o,r,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:o,nativeEvent:i,targetContainers:[r]},e!==null&&(e=ss(e),e!==null&&Hd(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function fS(t,e,n,o,r){switch(e){case"focusin":return Mo=Ga(Mo,t,e,n,o,r),!0;case"dragenter":return zo=Ga(zo,t,e,n,o,r),!0;case"mouseover":return jo=Ga(jo,t,e,n,o,r),!0;case"pointerover":var i=r.pointerId;return Ua.set(i,Ga(Ua.get(i)||null,t,e,n,o,r)),!0;case"gotpointercapture":return i=r.pointerId,qa.set(i,Ga(qa.get(i)||null,t,e,n,o,r)),!0}return!1}function mv(t){var e=Rr(t.target);if(e!==null){var n=Fr(e);if(n!==null){if(e=n.tag,e===13){if(e=ov(n),e!==null){t.blockedOn=e,gv(t.priority,function(){hv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Rl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var o=new n.constructor(n.type,n);$d=o,n.target.dispatchEvent(o),$d=null}else return e=ss(n),e!==null&&Hd(e),t.blockedOn=n,!1;e.shift()}return!0}function bv(t,e,n){Rl(t)&&n.delete(e)}function gS(){Md=!1,Mo!==null&&Rl(Mo)&&(Mo=null),zo!==null&&Rl(zo)&&(zo=null),jo!==null&&Rl(jo)&&(jo=null),Ua.forEach(bv),qa.forEach(bv)}function Ya(t,e){t.blockedOn===e&&(t.blockedOn=null,Md||(Md=!0,hn.unstable_scheduleCallback(hn.unstable_NormalPriority,gS)))}function Xa(t){function e(r){return Ya(r,t)}if(0<Fl.length){Ya(Fl[0],t);for(var n=1;n<Fl.length;n++){var o=Fl[n];o.blockedOn===t&&(o.blockedOn=null)}}for(Mo!==null&&Ya(Mo,t),zo!==null&&Ya(zo,t),jo!==null&&Ya(jo,t),Ua.forEach(e),qa.forEach(e),n=0;n<Vo.length;n++)o=Vo[n],o.blockedOn===t&&(o.blockedOn=null);for(;0<Vo.length&&(n=Vo[0],n.blockedOn===null);)mv(n),n.blockedOn===null&&Vo.shift()}var $i=ho.ReactCurrentBatchConfig,Ll=!0;function vS(t,e,n,o){var r=be,i=$i.transition;$i.transition=null;try{be=1,zd(t,e,n,o)}finally{be=r,$i.transition=i}}function mS(t,e,n,o){var r=be,i=$i.transition;$i.transition=null;try{be=4,zd(t,e,n,o)}finally{be=r,$i.transition=i}}function zd(t,e,n,o){if(Ll){var r=jd(t,e,n,o);if(r===null)i_(t,e,o,Nl,n),vv(t,o);else if(fS(r,t,e,n,o))o.stopPropagation();else if(vv(t,o),e&4&&-1<hS.indexOf(t)){for(;r!==null;){var i=ss(r);if(i!==null&&pv(i),i=jd(t,e,n,o),i===null&&i_(t,e,o,Nl,n),i===r)break;r=i}r!==null&&o.stopPropagation()}else i_(t,e,o,null,n)}}var Nl=null;function jd(t,e,n,o){if(Nl=null,t=Ad(o),t=Rr(t),t!==null)if(e=Fr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ov(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Nl=t,null}function yv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iS()){case Ld:return 1;case uv:return 4;case Il:case aS:return 16;case cv:return 536870912;default:return 16}default:return 16}}var Wo=null,Vd=null,Dl=null;function Cv(){if(Dl)return Dl;var t,e=Vd,n=e.length,o,r="value"in Wo?Wo.value:Wo.textContent,i=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(o=1;o<=a&&e[n-o]===r[i-o];o++);return Dl=r.slice(t,1<o?1-o:void 0)}function Ol(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Hl(){return!0}function wv(){return!1}function fn(t){function e(n,o,r,i,a){this._reactName=n,this._targetInst=r,this.type=o,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(n=t[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Hl:wv,this.isPropagationStopped=wv,this}return Oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hl)},persist:function(){},isPersistent:Hl}),e}var Ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wd=fn(Ai),Ja=Oe({},Ai,{view:0,detail:0}),bS=fn(Ja),Ud,qd,Qa,Ml=Oe({},Ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qa&&(Qa&&t.type==="mousemove"?(Ud=t.screenX-Qa.screenX,qd=t.screenY-Qa.screenY):qd=Ud=0,Qa=t),Ud)},movementY:function(t){return"movementY"in t?t.movementY:qd}}),Sv=fn(Ml),yS=Oe({},Ml,{dataTransfer:0}),CS=fn(yS),wS=Oe({},Ja,{relatedTarget:0}),Gd=fn(wS),SS=Oe({},Ai,{animationName:0,elapsedTime:0,pseudoElement:0}),kS=fn(SS),xS=Oe({},Ai,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),BS=fn(xS),TS=Oe({},Ai,{data:0}),kv=fn(TS),IS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$S={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},AS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ES(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=AS[t])?!!e[t]:!1}function Yd(){return ES}var PS=Oe({},Ja,{key:function(t){if(t.key){var e=IS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$S[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yd,charCode:function(t){return t.type==="keypress"?Ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),FS=fn(PS),RS=Oe({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xv=fn(RS),LS=Oe({},Ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yd}),NS=fn(LS),DS=Oe({},Ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),OS=fn(DS),HS=Oe({},Ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),MS=fn(HS),zS=[9,13,27,32],Xd=po&&"CompositionEvent"in window,Za=null;po&&"documentMode"in document&&(Za=document.documentMode);var jS=po&&"TextEvent"in window&&!Za,Bv=po&&(!Xd||Za&&8<Za&&11>=Za),Tv=String.fromCharCode(32),Iv=!1;function $v(t,e){switch(t){case"keyup":return zS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Av(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ei=!1;function VS(t,e){switch(t){case"compositionend":return Av(e);case"keypress":return e.which!==32?null:(Iv=!0,Tv);case"textInput":return t=e.data,t===Tv&&Iv?null:t;default:return null}}function WS(t,e){if(Ei)return t==="compositionend"||!Xd&&$v(t,e)?(t=Cv(),Dl=Vd=Wo=null,Ei=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bv&&e.locale!=="ko"?null:e.data;default:return null}}var US={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ev(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!US[t.type]:e==="textarea"}function Pv(t,e,n,o){Zg(o),e=Ul(e,"onChange"),0<e.length&&(n=new Wd("onChange","change",null,n,o),t.push({event:n,listeners:e}))}var Ka=null,es=null;function qS(t){Jv(t,0)}function zl(t){var e=Ni(t);if(Mg(e))return t}function GS(t,e){if(t==="change")return e}var Fv=!1;if(po){var Jd;if(po){var Qd="oninput"in document;if(!Qd){var Rv=document.createElement("div");Rv.setAttribute("oninput","return;"),Qd=typeof Rv.oninput=="function"}Jd=Qd}else Jd=!1;Fv=Jd&&(!document.documentMode||9<document.documentMode)}function Lv(){Ka&&(Ka.detachEvent("onpropertychange",Nv),es=Ka=null)}function Nv(t){if(t.propertyName==="value"&&zl(es)){var e=[];Pv(e,es,t,Ad(t)),nv(qS,e)}}function YS(t,e,n){t==="focusin"?(Lv(),Ka=e,es=n,Ka.attachEvent("onpropertychange",Nv)):t==="focusout"&&Lv()}function XS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zl(es)}function JS(t,e){if(t==="click")return zl(e)}function QS(t,e){if(t==="input"||t==="change")return zl(e)}function ZS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qn=typeof Object.is=="function"?Object.is:ZS;function ts(t,e){if(qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),o=Object.keys(e);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var r=n[o];if(!ld.call(e,r)||!qn(t[r],e[r]))return!1}return!0}function Dv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ov(t,e){var n=Dv(t);t=0;for(var o;n;){if(n.nodeType===3){if(o=t+n.textContent.length,t<=e&&o>=e)return{node:n,offset:e-t};t=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dv(n)}}function Hv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Mv(){for(var t=window,e=kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=kl(t.document)}return e}function Zd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function KS(t){var e=Mv(),n=t.focusedElem,o=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hv(n.ownerDocument.documentElement,n)){if(o!==null&&Zd(n)){if(e=o.start,t=o.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,i=Math.min(o.start,r);o=o.end===void 0?i:Math.min(o.end,r),!t.extend&&i>o&&(r=o,o=i,i=r),r=Ov(n,i);var a=Ov(n,o);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),i>o?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ek=po&&"documentMode"in document&&11>=document.documentMode,Pi=null,Kd=null,ns=null,e_=!1;function zv(t,e,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;e_||Pi==null||Pi!==kl(o)||(o=Pi,"selectionStart"in o&&Zd(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ns&&ts(ns,o)||(ns=o,o=Ul(Kd,"onSelect"),0<o.length&&(e=new Wd("onSelect","select",null,e,n),t.push({event:e,listeners:o}),e.target=Pi)))}function jl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fi={animationend:jl("Animation","AnimationEnd"),animationiteration:jl("Animation","AnimationIteration"),animationstart:jl("Animation","AnimationStart"),transitionend:jl("Transition","TransitionEnd")},t_={},jv={};po&&(jv=document.createElement("div").style,"AnimationEvent"in window||(delete Fi.animationend.animation,delete Fi.animationiteration.animation,delete Fi.animationstart.animation),"TransitionEvent"in window||delete Fi.transitionend.transition);function Vl(t){if(t_[t])return t_[t];if(!Fi[t])return t;var e=Fi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jv)return t_[t]=e[n];return t}var Vv=Vl("animationend"),Wv=Vl("animationiteration"),Uv=Vl("animationstart"),qv=Vl("transitionend"),Gv=new Map,Yv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Uo(t,e){Gv.set(t,e),Pr(e,[t])}for(var n_=0;n_<Yv.length;n_++){var o_=Yv[n_],tk=o_.toLowerCase(),nk=o_[0].toUpperCase()+o_.slice(1);Uo(tk,"on"+nk)}Uo(Vv,"onAnimationEnd"),Uo(Wv,"onAnimationIteration"),Uo(Uv,"onAnimationStart"),Uo("dblclick","onDoubleClick"),Uo("focusin","onFocus"),Uo("focusout","onBlur"),Uo(qv,"onTransitionEnd"),Si("onMouseEnter",["mouseout","mouseover"]),Si("onMouseLeave",["mouseout","mouseover"]),Si("onPointerEnter",["pointerout","pointerover"]),Si("onPointerLeave",["pointerout","pointerover"]),Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ok=new Set("cancel close invalid load scroll toggle".split(" ").concat(os));function Xv(t,e,n){var o=t.type||"unknown-event";t.currentTarget=n,tS(o,e,void 0,t),t.currentTarget=null}function Jv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var o=t[n],r=o.event;o=o.listeners;e:{var i=void 0;if(e)for(var a=o.length-1;0<=a;a--){var s=o[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==i&&r.isPropagationStopped())break e;Xv(r,s,c),i=l}else for(a=0;a<o.length;a++){if(s=o[a],l=s.instance,c=s.currentTarget,s=s.listener,l!==i&&r.isPropagationStopped())break e;Xv(r,s,c),i=l}}}if(Tl)throw t=Rd,Tl=!1,Rd=null,t}function $e(t,e){var n=e[d_];n===void 0&&(n=e[d_]=new Set);var o=t+"__bubble";n.has(o)||(Qv(e,t,2,!1),n.add(o))}function r_(t,e,n){var o=0;e&&(o|=4),Qv(n,t,o,e)}var Wl="_reactListening"+Math.random().toString(36).slice(2);function rs(t){if(!t[Wl]){t[Wl]=!0,Pg.forEach(function(n){n!=="selectionchange"&&(ok.has(n)||r_(n,!1,t),r_(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Wl]||(e[Wl]=!0,r_("selectionchange",!1,e))}}function Qv(t,e,n,o){switch(yv(e)){case 1:var r=vS;break;case 4:r=mS;break;default:r=zd}n=r.bind(null,e,n,t),r=void 0,!Fd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),o?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function i_(t,e,n,o,r){var i=o;if(!(e&1)&&!(e&2)&&o!==null)e:for(;;){if(o===null)return;var a=o.tag;if(a===3||a===4){var s=o.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(a===4)for(a=o.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;s!==null;){if(a=Rr(s),a===null)return;if(l=a.tag,l===5||l===6){o=i=a;continue e}s=s.parentNode}}o=o.return}nv(function(){var c=i,_=Ad(n),d=[];e:{var v=Gv.get(t);if(v!==void 0){var b=Wd,S=t;switch(t){case"keypress":if(Ol(n)===0)break e;case"keydown":case"keyup":b=FS;break;case"focusin":S="focus",b=Gd;break;case"focusout":S="blur",b=Gd;break;case"beforeblur":case"afterblur":b=Gd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Sv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=CS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=NS;break;case Vv:case Wv:case Uv:b=kS;break;case qv:b=OS;break;case"scroll":b=bS;break;case"wheel":b=MS;break;case"copy":case"cut":case"paste":b=BS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=xv}var x=(e&4)!==0,O=!x&&t==="scroll",C=x?v!==null?v+"Capture":null:v;x=[];for(var g=c,w;g!==null;){w=g;var E=w.stateNode;if(w.tag===5&&E!==null&&(w=E,C!==null&&(E=Ma(g,C),E!=null&&x.push(is(g,E,w)))),O)break;g=g.return}0<x.length&&(v=new b(v,S,null,n,_),d.push({event:v,listeners:x}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",v&&n!==$d&&(S=n.relatedTarget||n.fromElement)&&(Rr(S)||S[fo]))break e;if((b||v)&&(v=_.window===_?_:(v=_.ownerDocument)?v.defaultView||v.parentWindow:window,b?(S=n.relatedTarget||n.toElement,b=c,S=S?Rr(S):null,S!==null&&(O=Fr(S),S!==O||S.tag!==5&&S.tag!==6)&&(S=null)):(b=null,S=c),b!==S)){if(x=Sv,E="onMouseLeave",C="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=xv,E="onPointerLeave",C="onPointerEnter",g="pointer"),O=b==null?v:Ni(b),w=S==null?v:Ni(S),v=new x(E,g+"leave",b,n,_),v.target=O,v.relatedTarget=w,E=null,Rr(_)===c&&(x=new x(C,g+"enter",S,n,_),x.target=w,x.relatedTarget=O,E=x),O=E,b&&S)t:{for(x=b,C=S,g=0,w=x;w;w=Ri(w))g++;for(w=0,E=C;E;E=Ri(E))w++;for(;0<g-w;)x=Ri(x),g--;for(;0<w-g;)C=Ri(C),w--;for(;g--;){if(x===C||C!==null&&x===C.alternate)break t;x=Ri(x),C=Ri(C)}x=null}else x=null;b!==null&&Zv(d,v,b,x,!1),S!==null&&O!==null&&Zv(d,O,S,x,!0)}}e:{if(v=c?Ni(c):window,b=v.nodeName&&v.nodeName.toLowerCase(),b==="select"||b==="input"&&v.type==="file")var D=GS;else if(Ev(v))if(Fv)D=QS;else{D=XS;var P=YS}else(b=v.nodeName)&&b.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(D=JS);if(D&&(D=D(t,c))){Pv(d,D,n,_);break e}P&&P(t,v,c),t==="focusout"&&(P=v._wrapperState)&&P.controlled&&v.type==="number"&&kd(v,"number",v.value)}switch(P=c?Ni(c):window,t){case"focusin":(Ev(P)||P.contentEditable==="true")&&(Pi=P,Kd=c,ns=null);break;case"focusout":ns=Kd=Pi=null;break;case"mousedown":e_=!0;break;case"contextmenu":case"mouseup":case"dragend":e_=!1,zv(d,n,_);break;case"selectionchange":if(ek)break;case"keydown":case"keyup":zv(d,n,_)}var I;if(Xd)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else Ei?$v(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(Bv&&n.locale!=="ko"&&(Ei||m!=="onCompositionStart"?m==="onCompositionEnd"&&Ei&&(I=Cv()):(Wo=_,Vd="value"in Wo?Wo.value:Wo.textContent,Ei=!0)),P=Ul(c,m),0<P.length&&(m=new kv(m,t,null,n,_),d.push({event:m,listeners:P}),I?m.data=I:(I=Av(n),I!==null&&(m.data=I)))),(I=jS?VS(t,n):WS(t,n))&&(c=Ul(c,"onBeforeInput"),0<c.length&&(_=new kv("onBeforeInput","beforeinput",null,n,_),d.push({event:_,listeners:c}),_.data=I))}Jv(d,e)})}function is(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ul(t,e){for(var n=e+"Capture",o=[];t!==null;){var r=t,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=Ma(t,n),i!=null&&o.unshift(is(t,i,r)),i=Ma(t,e),i!=null&&o.push(is(t,i,r))),t=t.return}return o}function Ri(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Zv(t,e,n,o,r){for(var i=e._reactName,a=[];n!==null&&n!==o;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===o)break;s.tag===5&&c!==null&&(s=c,r?(l=Ma(n,i),l!=null&&a.unshift(is(n,l,s))):r||(l=Ma(n,i),l!=null&&a.push(is(n,l,s)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var rk=/\r\n?/g,ik=/\u0000|\uFFFD/g;function Kv(t){return(typeof t=="string"?t:""+t).replace(rk,`
`).replace(ik,"")}function ql(t,e,n){if(e=Kv(e),Kv(t)!==e&&n)throw Error(L(425))}function Gl(){}var a_=null,s_=null;function l_(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var u_=typeof setTimeout=="function"?setTimeout:void 0,ak=typeof clearTimeout=="function"?clearTimeout:void 0,em=typeof Promise=="function"?Promise:void 0,sk=typeof queueMicrotask=="function"?queueMicrotask:typeof em<"u"?function(t){return em.resolve(null).then(t).catch(lk)}:u_;function lk(t){setTimeout(function(){throw t})}function c_(t,e){var n=e,o=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(o===0){t.removeChild(r),Xa(e);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=r}while(n);Xa(e)}function qo(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Li=Math.random().toString(36).slice(2),oo="__reactFiber$"+Li,as="__reactProps$"+Li,fo="__reactContainer$"+Li,d_="__reactEvents$"+Li,uk="__reactListeners$"+Li,ck="__reactHandles$"+Li;function Rr(t){var e=t[oo];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fo]||n[oo]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tm(t);t!==null;){if(n=t[oo])return n;t=tm(t)}return e}t=n,n=t.parentNode}return null}function ss(t){return t=t[oo]||t[fo],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ni(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function Yl(t){return t[as]||null}var __=[],Di=-1;function Go(t){return{current:t}}function Ae(t){0>Di||(t.current=__[Di],__[Di]=null,Di--)}function Be(t,e){Di++,__[Di]=t.current,t.current=e}var Yo={},Pt=Go(Yo),nn=Go(!1),Lr=Yo;function Oi(t,e){var n=t.type.contextTypes;if(!n)return Yo;var o=t.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===e)return o.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in n)r[i]=e[i];return o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function on(t){return t=t.childContextTypes,t!=null}function Xl(){Ae(nn),Ae(Pt)}function nm(t,e,n){if(Pt.current!==Yo)throw Error(L(168));Be(Pt,e),Be(nn,n)}function om(t,e,n){var o=t.stateNode;if(e=e.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var r in o)if(!(r in e))throw Error(L(108,Yw(t)||"Unknown",r));return Oe({},n,o)}function Jl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yo,Lr=Pt.current,Be(Pt,t),Be(nn,nn.current),!0}function rm(t,e,n){var o=t.stateNode;if(!o)throw Error(L(169));n?(t=om(t,e,Lr),o.__reactInternalMemoizedMergedChildContext=t,Ae(nn),Ae(Pt),Be(Pt,t)):Ae(nn),Be(nn,n)}var go=null,Ql=!1,p_=!1;function im(t){go===null?go=[t]:go.push(t)}function dk(t){Ql=!0,im(t)}function Xo(){if(!p_&&go!==null){p_=!0;var t=0,e=be;try{var n=go;for(be=1;t<n.length;t++){var o=n[t];do o=o(!0);while(o!==null)}go=null,Ql=!1}catch(r){throw go!==null&&(go=go.slice(t+1)),sv(Ld,Xo),r}finally{be=e,p_=!1}}return null}var Hi=[],Mi=0,Zl=null,Kl=0,$n=[],An=0,Nr=null,vo=1,mo="";function Dr(t,e){Hi[Mi++]=Kl,Hi[Mi++]=Zl,Zl=t,Kl=e}function am(t,e,n){$n[An++]=vo,$n[An++]=mo,$n[An++]=Nr,Nr=t;var o=vo;t=mo;var r=32-Un(o)-1;o&=~(1<<r),n+=1;var i=32-Un(e)+r;if(30<i){var a=r-r%5;i=(o&(1<<a)-1).toString(32),o>>=a,r-=a,vo=1<<32-Un(e)+r|n<<r|o,mo=i+t}else vo=1<<i|n<<r|o,mo=t}function h_(t){t.return!==null&&(Dr(t,1),am(t,1,0))}function f_(t){for(;t===Zl;)Zl=Hi[--Mi],Hi[Mi]=null,Kl=Hi[--Mi],Hi[Mi]=null;for(;t===Nr;)Nr=$n[--An],$n[An]=null,mo=$n[--An],$n[An]=null,vo=$n[--An],$n[An]=null}var gn=null,vn=null,Fe=!1,Gn=null;function sm(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function lm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,vn=qo(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nr!==null?{id:vo,overflow:mo}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,vn=null,!0):!1;default:return!1}}function g_(t){return(t.mode&1)!==0&&(t.flags&128)===0}function v_(t){if(Fe){var e=vn;if(e){var n=e;if(!lm(t,e)){if(g_(t))throw Error(L(418));e=qo(n.nextSibling);var o=gn;e&&lm(t,e)?sm(o,n):(t.flags=t.flags&-4097|2,Fe=!1,gn=t)}}else{if(g_(t))throw Error(L(418));t.flags=t.flags&-4097|2,Fe=!1,gn=t}}}function um(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function eu(t){if(t!==gn)return!1;if(!Fe)return um(t),Fe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!l_(t.type,t.memoizedProps)),e&&(e=vn)){if(g_(t))throw cm(),Error(L(418));for(;e;)sm(t,e),e=qo(e.nextSibling)}if(um(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vn=qo(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vn=null}}else vn=gn?qo(t.stateNode.nextSibling):null;return!0}function cm(){for(var t=vn;t;)t=qo(t.nextSibling)}function zi(){vn=gn=null,Fe=!1}function m_(t){Gn===null?Gn=[t]:Gn.push(t)}var _k=ho.ReactCurrentBatchConfig;function Yn(t,e){if(t&&t.defaultProps){e=Oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var tu=Go(null),nu=null,ji=null,b_=null;function y_(){b_=ji=nu=null}function C_(t){var e=tu.current;Ae(tu),t._currentValue=e}function w_(t,e,n){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===n)break;t=t.return}}function Vi(t,e){nu=t,b_=ji=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function En(t){var e=t._currentValue;if(b_!==t)if(t={context:t,memoizedValue:e,next:null},ji===null){if(nu===null)throw Error(L(308));ji=t,nu.dependencies={lanes:0,firstContext:t}}else ji=ji.next=t;return e}var Or=null;function S_(t){Or===null?Or=[t]:Or.push(t)}function dm(t,e,n,o){var r=e.interleaved;return r===null?(n.next=n,S_(e)):(n.next=r.next,r.next=n),e.interleaved=n,bo(t,o)}function bo(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Jo=!1;function k_(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _m(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yo(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qo(t,e,n){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,he&2){var r=o.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),o.pending=e,bo(t,n)}return r=o.interleaved,r===null?(e.next=e,S_(o)):(e.next=r.next,r.next=e),o.interleaved=e,bo(t,n)}function ou(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var o=e.lanes;o&=t.pendingLanes,n|=o,e.lanes=n,Od(t,n)}}function pm(t,e){var n=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var r=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?r=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?r=i=e:i=i.next=e}else r=i=e;n={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:o.shared,effects:o.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ru(t,e,n,o){var r=t.updateQueue;Jo=!1;var i=r.firstBaseUpdate,a=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var l=s,c=l.next;l.next=null,a===null?i=c:a.next=c,a=l;var _=t.alternate;_!==null&&(_=_.updateQueue,s=_.lastBaseUpdate,s!==a&&(s===null?_.firstBaseUpdate=c:s.next=c,_.lastBaseUpdate=l))}if(i!==null){var d=r.baseState;a=0,_=c=l=null,s=i;do{var v=s.lane,b=s.eventTime;if((o&v)===v){_!==null&&(_=_.next={eventTime:b,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var S=t,x=s;switch(v=e,b=n,x.tag){case 1:if(S=x.payload,typeof S=="function"){d=S.call(b,d,v);break e}d=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=x.payload,v=typeof S=="function"?S.call(b,d,v):S,v==null)break e;d=Oe({},d,v);break e;case 2:Jo=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,v=r.effects,v===null?r.effects=[s]:v.push(s))}else b={eventTime:b,lane:v,tag:s.tag,payload:s.payload,callback:s.callback,next:null},_===null?(c=_=b,l=d):_=_.next=b,a|=v;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;v=s,s=v.next,v.next=null,r.lastBaseUpdate=v,r.shared.pending=null}}while(1);if(_===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=_,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else i===null&&(r.shared.lanes=0);zr|=a,t.lanes=a,t.memoizedState=d}}function hm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var o=t[e],r=o.callback;if(r!==null){if(o.callback=null,o=n,typeof r!="function")throw Error(L(191,r));r.call(o)}}}var fm=new Eg.Component().refs;function x_(t,e,n,o){e=t.memoizedState,n=n(o,e),n=n==null?e:Oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var iu={isMounted:function(t){return(t=t._reactInternals)?Fr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var o=Xt(),r=tr(t),i=yo(o,r);i.payload=e,n!=null&&(i.callback=n),e=Qo(t,i,r),e!==null&&(Qn(e,t,r,o),ou(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var o=Xt(),r=tr(t),i=yo(o,r);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Qo(t,i,r),e!==null&&(Qn(e,t,r,o),ou(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),o=tr(t),r=yo(n,o);r.tag=2,e!=null&&(r.callback=e),e=Qo(t,r,o),e!==null&&(Qn(e,t,o,n),ou(e,t,o))}};function gm(t,e,n,o,r,i,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,i,a):e.prototype&&e.prototype.isPureReactComponent?!ts(n,o)||!ts(r,i):!0}function vm(t,e,n){var o=!1,r=Yo,i=e.contextType;return typeof i=="object"&&i!==null?i=En(i):(r=on(e)?Lr:Pt.current,o=e.contextTypes,i=(o=o!=null)?Oi(t,r):Yo),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=iu,t.stateNode=e,e._reactInternals=t,o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=i),e}function mm(t,e,n,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,o),e.state!==t&&iu.enqueueReplaceState(e,e.state,null)}function B_(t,e,n,o){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=fm,k_(t);var i=e.contextType;typeof i=="object"&&i!==null?r.context=En(i):(i=on(e)?Lr:Pt.current,r.context=Oi(t,i)),r.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(x_(t,e,i,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&iu.enqueueReplaceState(r,r.state,null),ru(t,n,r,o),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ls(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var o=n.stateNode}if(!o)throw Error(L(147,t));var r=o,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(a){var s=r.refs;s===fm&&(s=r.refs={}),a===null?delete s[i]:s[i]=a},e._stringRef=i,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function au(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function bm(t){var e=t._init;return e(t._payload)}function ym(t){function e(C,g){if(t){var w=C.deletions;w===null?(C.deletions=[g],C.flags|=16):w.push(g)}}function n(C,g){if(!t)return null;for(;g!==null;)e(C,g),g=g.sibling;return null}function o(C,g){for(C=new Map;g!==null;)g.key!==null?C.set(g.key,g):C.set(g.index,g),g=g.sibling;return C}function r(C,g){return C=or(C,g),C.index=0,C.sibling=null,C}function i(C,g,w){return C.index=w,t?(w=C.alternate,w!==null?(w=w.index,w<g?(C.flags|=2,g):w):(C.flags|=2,g)):(C.flags|=1048576,g)}function a(C){return t&&C.alternate===null&&(C.flags|=2),C}function s(C,g,w,E){return g===null||g.tag!==6?(g=up(w,C.mode,E),g.return=C,g):(g=r(g,w),g.return=C,g)}function l(C,g,w,E){var D=w.type;return D===xi?_(C,g,w.props.children,E,w.key):g!==null&&(g.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Oo&&bm(D)===g.type)?(E=r(g,w.props),E.ref=ls(C,g,w),E.return=C,E):(E=xu(w.type,w.key,w.props,null,C.mode,E),E.ref=ls(C,g,w),E.return=C,E)}function c(C,g,w,E){return g===null||g.tag!==4||g.stateNode.containerInfo!==w.containerInfo||g.stateNode.implementation!==w.implementation?(g=cp(w,C.mode,E),g.return=C,g):(g=r(g,w.children||[]),g.return=C,g)}function _(C,g,w,E,D){return g===null||g.tag!==7?(g=Ur(w,C.mode,E,D),g.return=C,g):(g=r(g,w),g.return=C,g)}function d(C,g,w){if(typeof g=="string"&&g!==""||typeof g=="number")return g=up(""+g,C.mode,w),g.return=C,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case wl:return w=xu(g.type,g.key,g.props,null,C.mode,w),w.ref=ls(C,null,g),w.return=C,w;case ki:return g=cp(g,C.mode,w),g.return=C,g;case Oo:var E=g._init;return d(C,E(g._payload),w)}if(Da(g)||La(g))return g=Ur(g,C.mode,w,null),g.return=C,g;au(C,g)}return null}function v(C,g,w,E){var D=g!==null?g.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return D!==null?null:s(C,g,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case wl:return w.key===D?l(C,g,w,E):null;case ki:return w.key===D?c(C,g,w,E):null;case Oo:return D=w._init,v(C,g,D(w._payload),E)}if(Da(w)||La(w))return D!==null?null:_(C,g,w,E,null);au(C,w)}return null}function b(C,g,w,E,D){if(typeof E=="string"&&E!==""||typeof E=="number")return C=C.get(w)||null,s(g,C,""+E,D);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case wl:return C=C.get(E.key===null?w:E.key)||null,l(g,C,E,D);case ki:return C=C.get(E.key===null?w:E.key)||null,c(g,C,E,D);case Oo:var P=E._init;return b(C,g,w,P(E._payload),D)}if(Da(E)||La(E))return C=C.get(w)||null,_(g,C,E,D,null);au(g,E)}return null}function S(C,g,w,E){for(var D=null,P=null,I=g,m=g=0,y=null;I!==null&&m<w.length;m++){I.index>m?(y=I,I=null):y=I.sibling;var B=v(C,I,w[m],E);if(B===null){I===null&&(I=y);break}t&&I&&B.alternate===null&&e(C,I),g=i(B,g,m),P===null?D=B:P.sibling=B,P=B,I=y}if(m===w.length)return n(C,I),Fe&&Dr(C,m),D;if(I===null){for(;m<w.length;m++)I=d(C,w[m],E),I!==null&&(g=i(I,g,m),P===null?D=I:P.sibling=I,P=I);return Fe&&Dr(C,m),D}for(I=o(C,I);m<w.length;m++)y=b(I,C,m,w[m],E),y!==null&&(t&&y.alternate!==null&&I.delete(y.key===null?m:y.key),g=i(y,g,m),P===null?D=y:P.sibling=y,P=y);return t&&I.forEach(function(H){return e(C,H)}),Fe&&Dr(C,m),D}function x(C,g,w,E){var D=La(w);if(typeof D!="function")throw Error(L(150));if(w=D.call(w),w==null)throw Error(L(151));for(var P=D=null,I=g,m=g=0,y=null,B=w.next();I!==null&&!B.done;m++,B=w.next()){I.index>m?(y=I,I=null):y=I.sibling;var H=v(C,I,B.value,E);if(H===null){I===null&&(I=y);break}t&&I&&H.alternate===null&&e(C,I),g=i(H,g,m),P===null?D=H:P.sibling=H,P=H,I=y}if(B.done)return n(C,I),Fe&&Dr(C,m),D;if(I===null){for(;!B.done;m++,B=w.next())B=d(C,B.value,E),B!==null&&(g=i(B,g,m),P===null?D=B:P.sibling=B,P=B);return Fe&&Dr(C,m),D}for(I=o(C,I);!B.done;m++,B=w.next())B=b(I,C,m,B.value,E),B!==null&&(t&&B.alternate!==null&&I.delete(B.key===null?m:B.key),g=i(B,g,m),P===null?D=B:P.sibling=B,P=B);return t&&I.forEach(function(M){return e(C,M)}),Fe&&Dr(C,m),D}function O(C,g,w,E){if(typeof w=="object"&&w!==null&&w.type===xi&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case wl:e:{for(var D=w.key,P=g;P!==null;){if(P.key===D){if(D=w.type,D===xi){if(P.tag===7){n(C,P.sibling),g=r(P,w.props.children),g.return=C,C=g;break e}}else if(P.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Oo&&bm(D)===P.type){n(C,P.sibling),g=r(P,w.props),g.ref=ls(C,P,w),g.return=C,C=g;break e}n(C,P);break}else e(C,P);P=P.sibling}w.type===xi?(g=Ur(w.props.children,C.mode,E,w.key),g.return=C,C=g):(E=xu(w.type,w.key,w.props,null,C.mode,E),E.ref=ls(C,g,w),E.return=C,C=E)}return a(C);case ki:e:{for(P=w.key;g!==null;){if(g.key===P)if(g.tag===4&&g.stateNode.containerInfo===w.containerInfo&&g.stateNode.implementation===w.implementation){n(C,g.sibling),g=r(g,w.children||[]),g.return=C,C=g;break e}else{n(C,g);break}else e(C,g);g=g.sibling}g=cp(w,C.mode,E),g.return=C,C=g}return a(C);case Oo:return P=w._init,O(C,g,P(w._payload),E)}if(Da(w))return S(C,g,w,E);if(La(w))return x(C,g,w,E);au(C,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,g!==null&&g.tag===6?(n(C,g.sibling),g=r(g,w),g.return=C,C=g):(n(C,g),g=up(w,C.mode,E),g.return=C,C=g),a(C)):n(C,g)}return O}var Wi=ym(!0),Cm=ym(!1),us={},ro=Go(us),cs=Go(us),ds=Go(us);function Hr(t){if(t===us)throw Error(L(174));return t}function T_(t,e){switch(Be(ds,e),Be(cs,t),Be(ro,us),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bd(e,t)}Ae(ro),Be(ro,e)}function Ui(){Ae(ro),Ae(cs),Ae(ds)}function wm(t){Hr(ds.current);var e=Hr(ro.current),n=Bd(e,t.type);e!==n&&(Be(cs,t),Be(ro,n))}function I_(t){cs.current===t&&(Ae(ro),Ae(cs))}var He=Go(0);function su(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $_=[];function A_(){for(var t=0;t<$_.length;t++)$_[t]._workInProgressVersionPrimary=null;$_.length=0}var lu=ho.ReactCurrentDispatcher,E_=ho.ReactCurrentBatchConfig,Mr=0,Me=null,ct=null,ht=null,uu=!1,_s=!1,ps=0,pk=0;function Ft(){throw Error(L(321))}function P_(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qn(t[n],e[n]))return!1;return!0}function F_(t,e,n,o,r,i){if(Mr=i,Me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,lu.current=t===null||t.memoizedState===null?vk:mk,t=n(o,r),_s){i=0;do{if(_s=!1,ps=0,25<=i)throw Error(L(301));i+=1,ht=ct=null,e.updateQueue=null,lu.current=bk,t=n(o,r)}while(_s)}if(lu.current=_u,e=ct!==null&&ct.next!==null,Mr=0,ht=ct=Me=null,uu=!1,e)throw Error(L(300));return t}function R_(){var t=ps!==0;return ps=0,t}function io(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?Me.memoizedState=ht=t:ht=ht.next=t,ht}function Pn(){if(ct===null){var t=Me.alternate;t=t!==null?t.memoizedState:null}else t=ct.next;var e=ht===null?Me.memoizedState:ht.next;if(e!==null)ht=e,ct=t;else{if(t===null)throw Error(L(310));ct=t,t={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},ht===null?Me.memoizedState=ht=t:ht=ht.next=t}return ht}function hs(t,e){return typeof e=="function"?e(t):e}function L_(t){var e=Pn(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var o=ct,r=o.baseQueue,i=n.pending;if(i!==null){if(r!==null){var a=r.next;r.next=i.next,i.next=a}o.baseQueue=r=i,n.pending=null}if(r!==null){i=r.next,o=o.baseState;var s=a=null,l=null,c=i;do{var _=c.lane;if((Mr&_)===_)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),o=c.hasEagerState?c.eagerState:t(o,c.action);else{var d={lane:_,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=d,a=o):l=l.next=d,Me.lanes|=_,zr|=_}c=c.next}while(c!==null&&c!==i);l===null?a=o:l.next=s,qn(o,e.memoizedState)||(rn=!0),e.memoizedState=o,e.baseState=a,e.baseQueue=l,n.lastRenderedState=o}if(t=n.interleaved,t!==null){r=t;do i=r.lane,Me.lanes|=i,zr|=i,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function N_(t){var e=Pn(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var o=n.dispatch,r=n.pending,i=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do i=t(i,a.action),a=a.next;while(a!==r);qn(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,o]}function Sm(){}function km(t,e){var n=Me,o=Pn(),r=e(),i=!qn(o.memoizedState,r);if(i&&(o.memoizedState=r,rn=!0),o=o.queue,D_(Tm.bind(null,n,o,t),[t]),o.getSnapshot!==e||i||ht!==null&&ht.memoizedState.tag&1){if(n.flags|=2048,fs(9,Bm.bind(null,n,o,r,e),void 0,null),ft===null)throw Error(L(349));Mr&30||xm(n,e,r)}return r}function xm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Me.updateQueue,e===null?(e={lastEffect:null,stores:null},Me.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Bm(t,e,n,o){e.value=n,e.getSnapshot=o,Im(e)&&$m(t)}function Tm(t,e,n){return n(function(){Im(e)&&$m(t)})}function Im(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qn(t,n)}catch{return!0}}function $m(t){var e=bo(t,1);e!==null&&Qn(e,t,1,-1)}function Am(t){var e=io();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:t},e.queue=t,t=t.dispatch=gk.bind(null,Me,t),[e.memoizedState,t]}function fs(t,e,n,o){return t={tag:t,create:e,destroy:n,deps:o,next:null},e=Me.updateQueue,e===null?(e={lastEffect:null,stores:null},Me.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(o=n.next,n.next=t,t.next=o,e.lastEffect=t)),t}function Em(){return Pn().memoizedState}function cu(t,e,n,o){var r=io();Me.flags|=t,r.memoizedState=fs(1|e,n,void 0,o===void 0?null:o)}function du(t,e,n,o){var r=Pn();o=o===void 0?null:o;var i=void 0;if(ct!==null){var a=ct.memoizedState;if(i=a.destroy,o!==null&&P_(o,a.deps)){r.memoizedState=fs(e,n,i,o);return}}Me.flags|=t,r.memoizedState=fs(1|e,n,i,o)}function Pm(t,e){return cu(8390656,8,t,e)}function D_(t,e){return du(2048,8,t,e)}function Fm(t,e){return du(4,2,t,e)}function Rm(t,e){return du(4,4,t,e)}function Lm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Nm(t,e,n){return n=n!=null?n.concat([t]):null,du(4,4,Lm.bind(null,e,t),n)}function O_(){}function Dm(t,e){var n=Pn();e=e===void 0?null:e;var o=n.memoizedState;return o!==null&&e!==null&&P_(e,o[1])?o[0]:(n.memoizedState=[t,e],t)}function Om(t,e){var n=Pn();e=e===void 0?null:e;var o=n.memoizedState;return o!==null&&e!==null&&P_(e,o[1])?o[0]:(t=t(),n.memoizedState=[t,e],t)}function Hm(t,e,n){return Mr&21?(qn(n,e)||(n=dv(),Me.lanes|=n,zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function hk(t,e){var n=be;be=n!==0&&4>n?n:4,t(!0);var o=E_.transition;E_.transition={};try{t(!1),e()}finally{be=n,E_.transition=o}}function Mm(){return Pn().memoizedState}function fk(t,e,n){var o=tr(t);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},zm(t))jm(e,n);else if(n=dm(t,e,n,o),n!==null){var r=Xt();Qn(n,t,o,r),Vm(n,e,o)}}function gk(t,e,n){var o=tr(t),r={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(zm(t))jm(e,r);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var a=e.lastRenderedState,s=i(a,n);if(r.hasEagerState=!0,r.eagerState=s,qn(s,a)){var l=e.interleaved;l===null?(r.next=r,S_(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=dm(t,e,r,o),n!==null&&(r=Xt(),Qn(n,t,o,r),Vm(n,e,o))}}function zm(t){var e=t.alternate;return t===Me||e!==null&&e===Me}function jm(t,e){_s=uu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Vm(t,e,n){if(n&4194240){var o=e.lanes;o&=t.pendingLanes,n|=o,e.lanes=n,Od(t,n)}}var _u={readContext:En,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},vk={readContext:En,useCallback:function(t,e){return io().memoizedState=[t,e===void 0?null:e],t},useContext:En,useEffect:Pm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,cu(4194308,4,Lm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return cu(4194308,4,t,e)},useInsertionEffect:function(t,e){return cu(4,2,t,e)},useMemo:function(t,e){var n=io();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var o=io();return e=n!==void 0?n(e):e,o.memoizedState=o.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},o.queue=t,t=t.dispatch=fk.bind(null,Me,t),[o.memoizedState,t]},useRef:function(t){var e=io();return t={current:t},e.memoizedState=t},useState:Am,useDebugValue:O_,useDeferredValue:function(t){return io().memoizedState=t},useTransition:function(){var t=Am(!1),e=t[0];return t=hk.bind(null,t[1]),io().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var o=Me,r=io();if(Fe){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),ft===null)throw Error(L(349));Mr&30||xm(o,e,n)}r.memoizedState=n;var i={value:n,getSnapshot:e};return r.queue=i,Pm(Tm.bind(null,o,i,t),[t]),o.flags|=2048,fs(9,Bm.bind(null,o,i,n,e),void 0,null),n},useId:function(){var t=io(),e=ft.identifierPrefix;if(Fe){var n=mo,o=vo;n=(o&~(1<<32-Un(o)-1)).toString(32)+n,e=":"+e+"R"+n,n=ps++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=pk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},mk={readContext:En,useCallback:Dm,useContext:En,useEffect:D_,useImperativeHandle:Nm,useInsertionEffect:Fm,useLayoutEffect:Rm,useMemo:Om,useReducer:L_,useRef:Em,useState:function(){return L_(hs)},useDebugValue:O_,useDeferredValue:function(t){var e=Pn();return Hm(e,ct.memoizedState,t)},useTransition:function(){var t=L_(hs)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:Sm,useSyncExternalStore:km,useId:Mm,unstable_isNewReconciler:!1},bk={readContext:En,useCallback:Dm,useContext:En,useEffect:D_,useImperativeHandle:Nm,useInsertionEffect:Fm,useLayoutEffect:Rm,useMemo:Om,useReducer:N_,useRef:Em,useState:function(){return N_(hs)},useDebugValue:O_,useDeferredValue:function(t){var e=Pn();return ct===null?e.memoizedState=t:Hm(e,ct.memoizedState,t)},useTransition:function(){var t=N_(hs)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:Sm,useSyncExternalStore:km,useId:Mm,unstable_isNewReconciler:!1};function qi(t,e){try{var n="",o=e;do n+=Gw(o),o=o.return;while(o);var r=n}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:r,digest:null}}function H_(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function M_(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var yk=typeof WeakMap=="function"?WeakMap:Map;function Wm(t,e,n){n=yo(-1,n),n.tag=3,n.payload={element:null};var o=e.value;return n.callback=function(){bu||(bu=!0,tp=o),M_(t,e)},n}function Um(t,e,n){n=yo(-1,n),n.tag=3;var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var r=e.value;n.payload=function(){return o(r)},n.callback=function(){M_(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){M_(t,e),typeof o!="function"&&(Ko===null?Ko=new Set([this]):Ko.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function qm(t,e,n){var o=t.pingCache;if(o===null){o=t.pingCache=new yk;var r=new Set;o.set(e,r)}else r=o.get(e),r===void 0&&(r=new Set,o.set(e,r));r.has(n)||(r.add(n),t=Rk.bind(null,t,e,n),e.then(t,t))}function Gm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ym(t,e,n,o,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yo(-1,1),e.tag=2,Qo(n,e,1))),n.lanes|=1),t)}var Ck=ho.ReactCurrentOwner,rn=!1;function Yt(t,e,n,o){e.child=t===null?Cm(e,null,n,o):Wi(e,t.child,n,o)}function Xm(t,e,n,o,r){n=n.render;var i=e.ref;return Vi(e,r),o=F_(t,e,n,o,i,r),n=R_(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Co(t,e,r)):(Fe&&n&&h_(e),e.flags|=1,Yt(t,e,o,r),e.child)}function Jm(t,e,n,o,r){if(t===null){var i=n.type;return typeof i=="function"&&!lp(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Qm(t,e,i,o,r)):(t=xu(n.type,null,o,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&r)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:ts,n(a,o)&&t.ref===e.ref)return Co(t,e,r)}return e.flags|=1,t=or(i,o),t.ref=e.ref,t.return=e,e.child=t}function Qm(t,e,n,o,r){if(t!==null){var i=t.memoizedProps;if(ts(i,o)&&t.ref===e.ref)if(rn=!1,e.pendingProps=o=i,(t.lanes&r)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,Co(t,e,r)}return z_(t,e,n,o,r)}function Zm(t,e,n){var o=e.pendingProps,r=o.children,i=t!==null?t.memoizedState:null;if(o.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Be(Yi,mn),mn|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Be(Yi,mn),mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:n,Be(Yi,mn),mn|=o}else i!==null?(o=i.baseLanes|n,e.memoizedState=null):o=n,Be(Yi,mn),mn|=o;return Yt(t,e,r,n),e.child}function Km(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function z_(t,e,n,o,r){var i=on(n)?Lr:Pt.current;return i=Oi(e,i),Vi(e,r),n=F_(t,e,n,o,i,r),o=R_(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Co(t,e,r)):(Fe&&o&&h_(e),e.flags|=1,Yt(t,e,n,r),e.child)}function e5(t,e,n,o,r){if(on(n)){var i=!0;Jl(e)}else i=!1;if(Vi(e,r),e.stateNode===null)hu(t,e),vm(e,n,o),B_(e,n,o,r),o=!0;else if(t===null){var a=e.stateNode,s=e.memoizedProps;a.props=s;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=En(c):(c=on(n)?Lr:Pt.current,c=Oi(e,c));var _=n.getDerivedStateFromProps,d=typeof _=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==o||l!==c)&&mm(e,a,o,c),Jo=!1;var v=e.memoizedState;a.state=v,ru(e,o,a,r),l=e.memoizedState,s!==o||v!==l||nn.current||Jo?(typeof _=="function"&&(x_(e,n,_,o),l=e.memoizedState),(s=Jo||gm(e,n,s,o,v,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=l),a.props=o,a.state=l,a.context=c,o=s):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{a=e.stateNode,_m(t,e),s=e.memoizedProps,c=e.type===e.elementType?s:Yn(e.type,s),a.props=c,d=e.pendingProps,v=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=En(l):(l=on(n)?Lr:Pt.current,l=Oi(e,l));var b=n.getDerivedStateFromProps;(_=typeof b=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||v!==l)&&mm(e,a,o,l),Jo=!1,v=e.memoizedState,a.state=v,ru(e,o,a,r);var S=e.memoizedState;s!==d||v!==S||nn.current||Jo?(typeof b=="function"&&(x_(e,n,b,o),S=e.memoizedState),(c=Jo||gm(e,n,c,o,v,S,l)||!1)?(_||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(o,S,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(o,S,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=S),a.props=o,a.state=S,a.context=l,o=c):(typeof a.componentDidUpdate!="function"||s===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),o=!1)}return j_(t,e,n,o,i,r)}function j_(t,e,n,o,r,i){Km(t,e);var a=(e.flags&128)!==0;if(!o&&!a)return r&&rm(e,n,!1),Co(t,e,i);o=e.stateNode,Ck.current=e;var s=a&&typeof n.getDerivedStateFromError!="function"?null:o.render();return e.flags|=1,t!==null&&a?(e.child=Wi(e,t.child,null,i),e.child=Wi(e,null,s,i)):Yt(t,e,s,i),e.memoizedState=o.state,r&&rm(e,n,!0),e.child}function t5(t){var e=t.stateNode;e.pendingContext?nm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&nm(t,e.context,!1),T_(t,e.containerInfo)}function n5(t,e,n,o,r){return zi(),m_(r),e.flags|=256,Yt(t,e,n,o),e.child}var V_={dehydrated:null,treeContext:null,retryLane:0};function W_(t){return{baseLanes:t,cachePool:null,transitions:null}}function o5(t,e,n){var o=e.pendingProps,r=He.current,i=!1,a=(e.flags&128)!==0,s;if((s=a)||(s=t!==null&&t.memoizedState===null?!1:(r&2)!==0),s?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Be(He,r&1),t===null)return v_(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=o.children,t=o.fallback,i?(o=e.mode,i=e.child,a={mode:"hidden",children:a},!(o&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Bu(a,o,0,null),t=Ur(t,o,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=W_(n),e.memoizedState=V_,t):U_(e,a));if(r=t.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return wk(t,e,a,o,s,r,n);if(i){i=o.fallback,a=e.mode,r=t.child,s=r.sibling;var l={mode:"hidden",children:o.children};return!(a&1)&&e.child!==r?(o=e.child,o.childLanes=0,o.pendingProps=l,e.deletions=null):(o=or(r,l),o.subtreeFlags=r.subtreeFlags&14680064),s!==null?i=or(s,i):(i=Ur(i,a,n,null),i.flags|=2),i.return=e,o.return=e,o.sibling=i,e.child=o,o=i,i=e.child,a=t.child.memoizedState,a=a===null?W_(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=t.childLanes&~n,e.memoizedState=V_,o}return i=t.child,t=i.sibling,o=or(i,{mode:"visible",children:o.children}),!(e.mode&1)&&(o.lanes=n),o.return=e,o.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=o,e.memoizedState=null,o}function U_(t,e){return e=Bu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function pu(t,e,n,o){return o!==null&&m_(o),Wi(e,t.child,null,n),t=U_(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wk(t,e,n,o,r,i,a){if(n)return e.flags&256?(e.flags&=-257,o=H_(Error(L(422))),pu(t,e,a,o)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=o.fallback,r=e.mode,o=Bu({mode:"visible",children:o.children},r,0,null),i=Ur(i,r,a,null),i.flags|=2,o.return=e,i.return=e,o.sibling=i,e.child=o,e.mode&1&&Wi(e,t.child,null,a),e.child.memoizedState=W_(a),e.memoizedState=V_,i);if(!(e.mode&1))return pu(t,e,a,null);if(r.data==="$!"){if(o=r.nextSibling&&r.nextSibling.dataset,o)var s=o.dgst;return o=s,i=Error(L(419)),o=H_(i,o,void 0),pu(t,e,a,o)}if(s=(a&t.childLanes)!==0,rn||s){if(o=ft,o!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(o.suspendedLanes|a)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,bo(t,r),Qn(o,t,r,-1))}return sp(),o=H_(Error(L(421))),pu(t,e,a,o)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Lk.bind(null,t),r._reactRetry=e,null):(t=i.treeContext,vn=qo(r.nextSibling),gn=e,Fe=!0,Gn=null,t!==null&&($n[An++]=vo,$n[An++]=mo,$n[An++]=Nr,vo=t.id,mo=t.overflow,Nr=e),e=U_(e,o.children),e.flags|=4096,e)}function r5(t,e,n){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),w_(t.return,e,n)}function q_(t,e,n,o,r){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:r}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=n,i.tailMode=r)}function i5(t,e,n){var o=e.pendingProps,r=o.revealOrder,i=o.tail;if(Yt(t,e,o.children,n),o=He.current,o&2)o=o&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&r5(t,n,e);else if(t.tag===19)r5(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}if(Be(He,o),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&su(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),q_(e,!1,r,n,i);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&su(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}q_(e,!0,n,null,i);break;case"together":q_(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Co(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Sk(t,e,n){switch(e.tag){case 3:t5(e),zi();break;case 5:wm(e);break;case 1:on(e.type)&&Jl(e);break;case 4:T_(e,e.stateNode.containerInfo);break;case 10:var o=e.type._context,r=e.memoizedProps.value;Be(tu,o._currentValue),o._currentValue=r;break;case 13:if(o=e.memoizedState,o!==null)return o.dehydrated!==null?(Be(He,He.current&1),e.flags|=128,null):n&e.child.childLanes?o5(t,e,n):(Be(He,He.current&1),t=Co(t,e,n),t!==null?t.sibling:null);Be(He,He.current&1);break;case 19:if(o=(n&e.childLanes)!==0,t.flags&128){if(o)return i5(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Be(He,He.current),o)break;return null;case 22:case 23:return e.lanes=0,Zm(t,e,n)}return Co(t,e,n)}var a5,G_,s5,l5;a5=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},G_=function(){},s5=function(t,e,n,o){var r=t.memoizedProps;if(r!==o){t=e.stateNode,Hr(ro.current);var i=null;switch(n){case"input":r=wd(t,r),o=wd(t,o),i=[];break;case"select":r=Oe({},r,{value:void 0}),o=Oe({},o,{value:void 0}),i=[];break;case"textarea":r=xd(t,r),o=xd(t,o),i=[];break;default:typeof r.onClick!="function"&&typeof o.onClick=="function"&&(t.onclick=Gl)}Td(n,o);var a;n=null;for(c in r)if(!o.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var s=r[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ra.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in o){var l=o[c];if(s=r?.[c],o.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(i||(i=[]),i.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ra.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&$e("scroll",t),i||s===l||(i=[])):(i=i||[]).push(c,l))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}},l5=function(t,e,n,o){n!==o&&(e.flags|=4)};function gs(t,e){if(!Fe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,o=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags&14680064,o|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=o,t.childLanes=n,e}function kk(t,e,n){var o=e.pendingProps;switch(f_(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rt(e),null;case 1:return on(e.type)&&Xl(),Rt(e),null;case 3:return o=e.stateNode,Ui(),Ae(nn),Ae(Pt),A_(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(eu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(rp(Gn),Gn=null))),G_(t,e),Rt(e),null;case 5:I_(e);var r=Hr(ds.current);if(n=e.type,t!==null&&e.stateNode!=null)s5(t,e,n,o,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!o){if(e.stateNode===null)throw Error(L(166));return Rt(e),null}if(t=Hr(ro.current),eu(e)){o=e.stateNode,n=e.type;var i=e.memoizedProps;switch(o[oo]=e,o[as]=i,t=(e.mode&1)!==0,n){case"dialog":$e("cancel",o),$e("close",o);break;case"iframe":case"object":case"embed":$e("load",o);break;case"video":case"audio":for(r=0;r<os.length;r++)$e(os[r],o);break;case"source":$e("error",o);break;case"img":case"image":case"link":$e("error",o),$e("load",o);break;case"details":$e("toggle",o);break;case"input":zg(o,i),$e("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},$e("invalid",o);break;case"textarea":Wg(o,i),$e("invalid",o)}Td(n,i),r=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?o.textContent!==s&&(i.suppressHydrationWarning!==!0&&ql(o.textContent,s,t),r=["children",s]):typeof s=="number"&&o.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&ql(o.textContent,s,t),r=["children",""+s]):Ra.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&$e("scroll",o)}switch(n){case"input":Sl(o),Vg(o,i,!0);break;case"textarea":Sl(o),qg(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=Gl)}o=r,e.updateQueue=o,o!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Gg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof o.is=="string"?t=a.createElement(n,{is:o.is}):(t=a.createElement(n),n==="select"&&(a=t,o.multiple?a.multiple=!0:o.size&&(a.size=o.size))):t=a.createElementNS(t,n),t[oo]=e,t[as]=o,a5(t,e,!1,!1),e.stateNode=t;e:{switch(a=Id(n,o),n){case"dialog":$e("cancel",t),$e("close",t),r=o;break;case"iframe":case"object":case"embed":$e("load",t),r=o;break;case"video":case"audio":for(r=0;r<os.length;r++)$e(os[r],t);r=o;break;case"source":$e("error",t),r=o;break;case"img":case"image":case"link":$e("error",t),$e("load",t),r=o;break;case"details":$e("toggle",t),r=o;break;case"input":zg(t,o),r=wd(t,o),$e("invalid",t);break;case"option":r=o;break;case"select":t._wrapperState={wasMultiple:!!o.multiple},r=Oe({},o,{value:void 0}),$e("invalid",t);break;case"textarea":Wg(t,o),r=xd(t,o),$e("invalid",t);break;default:r=o}Td(n,r),s=r;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?Jg(t,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Yg(t,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Oa(t,l):typeof l=="number"&&Oa(t,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ra.hasOwnProperty(i)?l!=null&&i==="onScroll"&&$e("scroll",t):l!=null&&dd(t,i,l,a))}switch(n){case"input":Sl(t),Vg(t,o,!1);break;case"textarea":Sl(t),qg(t);break;case"option":o.value!=null&&t.setAttribute("value",""+Ho(o.value));break;case"select":t.multiple=!!o.multiple,i=o.value,i!=null?Bi(t,!!o.multiple,i,!1):o.defaultValue!=null&&Bi(t,!!o.multiple,o.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Gl)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Rt(e),null;case 6:if(t&&e.stateNode!=null)l5(t,e,t.memoizedProps,o);else{if(typeof o!="string"&&e.stateNode===null)throw Error(L(166));if(n=Hr(ds.current),Hr(ro.current),eu(e)){if(o=e.stateNode,n=e.memoizedProps,o[oo]=e,(i=o.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:ql(o.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ql(o.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[oo]=e,e.stateNode=o}return Rt(e),null;case 13:if(Ae(He),o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Fe&&vn!==null&&e.mode&1&&!(e.flags&128))cm(),zi(),e.flags|=98560,i=!1;else if(i=eu(e),o!==null&&o.dehydrated!==null){if(t===null){if(!i)throw Error(L(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(L(317));i[oo]=e}else zi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Rt(e),i=!1}else Gn!==null&&(rp(Gn),Gn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(o=o!==null,o!==(t!==null&&t.memoizedState!==null)&&o&&(e.child.flags|=8192,e.mode&1&&(t===null||He.current&1?dt===0&&(dt=3):sp())),e.updateQueue!==null&&(e.flags|=4),Rt(e),null);case 4:return Ui(),G_(t,e),t===null&&rs(e.stateNode.containerInfo),Rt(e),null;case 10:return C_(e.type._context),Rt(e),null;case 17:return on(e.type)&&Xl(),Rt(e),null;case 19:if(Ae(He),i=e.memoizedState,i===null)return Rt(e),null;if(o=(e.flags&128)!==0,a=i.rendering,a===null)if(o)gs(i,!1);else{if(dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=su(t),a!==null){for(e.flags|=128,gs(i,!1),o=a.updateQueue,o!==null&&(e.updateQueue=o,e.flags|=4),e.subtreeFlags=0,o=n,n=e.child;n!==null;)i=n,t=o,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,t=a.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Be(He,He.current&1|2),e.child}t=t.sibling}i.tail!==null&&Qe()>Xi&&(e.flags|=128,o=!0,gs(i,!1),e.lanes=4194304)}else{if(!o)if(t=su(a),t!==null){if(e.flags|=128,o=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),gs(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Fe)return Rt(e),null}else 2*Qe()-i.renderingStartTime>Xi&&n!==1073741824&&(e.flags|=128,o=!0,gs(i,!1),e.lanes=4194304);i.isBackwards?(a.sibling=e.child,e.child=a):(n=i.last,n!==null?n.sibling=a:e.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Qe(),e.sibling=null,n=He.current,Be(He,o?n&1|2:n&1),e):(Rt(e),null);case 22:case 23:return ap(),o=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==o&&(e.flags|=8192),o&&e.mode&1?mn&1073741824&&(Rt(e),e.subtreeFlags&6&&(e.flags|=8192)):Rt(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function xk(t,e){switch(f_(e),e.tag){case 1:return on(e.type)&&Xl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ui(),Ae(nn),Ae(Pt),A_(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return I_(e),null;case 13:if(Ae(He),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));zi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ae(He),null;case 4:return Ui(),null;case 10:return C_(e.type._context),null;case 22:case 23:return ap(),null;case 24:return null;default:return null}}var fu=!1,Lt=!1,Bk=typeof WeakSet=="function"?WeakSet:Set,W=null;function Gi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Ge(t,e,o)}else n.current=null}function Y_(t,e,n){try{n()}catch(o){Ge(t,e,o)}}var u5=!1;function Tk(t,e){if(a_=Ll,t=Mv(),Zd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var r=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,c=0,_=0,d=t,v=null;t:for(;;){for(var b;d!==n||r!==0&&d.nodeType!==3||(s=a+r),d!==i||o!==0&&d.nodeType!==3||(l=a+o),d.nodeType===3&&(a+=d.nodeValue.length),(b=d.firstChild)!==null;)v=d,d=b;for(;;){if(d===t)break t;if(v===n&&++c===r&&(s=a),v===i&&++_===o&&(l=a),(b=d.nextSibling)!==null)break;d=v,v=d.parentNode}d=b}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(s_={focusedElem:t,selectionRange:n},Ll=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var x=S.memoizedProps,O=S.memoizedState,C=e.stateNode,g=C.getSnapshotBeforeUpdate(e.elementType===e.type?x:Yn(e.type,x),O);C.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(E){Ge(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return S=u5,u5=!1,S}function vs(t,e,n){var o=e.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var r=o=o.next;do{if((r.tag&t)===t){var i=r.destroy;r.destroy=void 0,i!==void 0&&Y_(e,n,i)}r=r.next}while(r!==o)}}function gu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var o=n.create;n.destroy=o()}n=n.next}while(n!==e)}}function X_(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function c5(t){var e=t.alternate;e!==null&&(t.alternate=null,c5(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[oo],delete e[as],delete e[d_],delete e[uk],delete e[ck])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function d5(t){return t.tag===5||t.tag===3||t.tag===4}function _5(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||d5(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function J_(t,e,n){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gl));else if(o!==4&&(t=t.child,t!==null))for(J_(t,e,n),t=t.sibling;t!==null;)J_(t,e,n),t=t.sibling}function Q_(t,e,n){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(o!==4&&(t=t.child,t!==null))for(Q_(t,e,n),t=t.sibling;t!==null;)Q_(t,e,n),t=t.sibling}var Bt=null,Xn=!1;function Zo(t,e,n){for(n=n.child;n!==null;)p5(t,e,n),n=n.sibling}function p5(t,e,n){if(no&&typeof no.onCommitFiberUnmount=="function")try{no.onCommitFiberUnmount($l,n)}catch{}switch(n.tag){case 5:Lt||Gi(n,e);case 6:var o=Bt,r=Xn;Bt=null,Zo(t,e,n),Bt=o,Xn=r,Bt!==null&&(Xn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(Xn?(t=Bt,n=n.stateNode,t.nodeType===8?c_(t.parentNode,n):t.nodeType===1&&c_(t,n),Xa(t)):c_(Bt,n.stateNode));break;case 4:o=Bt,r=Xn,Bt=n.stateNode.containerInfo,Xn=!0,Zo(t,e,n),Bt=o,Xn=r;break;case 0:case 11:case 14:case 15:if(!Lt&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){r=o=o.next;do{var i=r,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Y_(n,e,a),r=r.next}while(r!==o)}Zo(t,e,n);break;case 1:if(!Lt&&(Gi(n,e),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(s){Ge(n,e,s)}Zo(t,e,n);break;case 21:Zo(t,e,n);break;case 22:n.mode&1?(Lt=(o=Lt)||n.memoizedState!==null,Zo(t,e,n),Lt=o):Zo(t,e,n);break;default:Zo(t,e,n)}}function h5(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Bk),e.forEach(function(o){var r=Nk.bind(null,t,o);n.has(o)||(n.add(o),o.then(r,r))})}}function Jn(t,e){var n=e.deletions;if(n!==null)for(var o=0;o<n.length;o++){var r=n[o];try{var i=t,a=e,s=a;e:for(;s!==null;){switch(s.tag){case 5:Bt=s.stateNode,Xn=!1;break e;case 3:Bt=s.stateNode.containerInfo,Xn=!0;break e;case 4:Bt=s.stateNode.containerInfo,Xn=!0;break e}s=s.return}if(Bt===null)throw Error(L(160));p5(i,a,r),Bt=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ge(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)f5(e,t),e=e.sibling}function f5(t,e){var n=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(e,t),ao(t),o&4){try{vs(3,t,t.return),gu(3,t)}catch(x){Ge(t,t.return,x)}try{vs(5,t,t.return)}catch(x){Ge(t,t.return,x)}}break;case 1:Jn(e,t),ao(t),o&512&&n!==null&&Gi(n,n.return);break;case 5:if(Jn(e,t),ao(t),o&512&&n!==null&&Gi(n,n.return),t.flags&32){var r=t.stateNode;try{Oa(r,"")}catch(x){Ge(t,t.return,x)}}if(o&4&&(r=t.stateNode,r!=null)){var i=t.memoizedProps,a=n!==null?n.memoizedProps:i,s=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&jg(r,i),Id(s,a);var c=Id(s,i);for(a=0;a<l.length;a+=2){var _=l[a],d=l[a+1];_==="style"?Jg(r,d):_==="dangerouslySetInnerHTML"?Yg(r,d):_==="children"?Oa(r,d):dd(r,_,d,c)}switch(s){case"input":Sd(r,i);break;case"textarea":Ug(r,i);break;case"select":var v=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var b=i.value;b!=null?Bi(r,!!i.multiple,b,!1):v!==!!i.multiple&&(i.defaultValue!=null?Bi(r,!!i.multiple,i.defaultValue,!0):Bi(r,!!i.multiple,i.multiple?[]:"",!1))}r[as]=i}catch(x){Ge(t,t.return,x)}}break;case 6:if(Jn(e,t),ao(t),o&4){if(t.stateNode===null)throw Error(L(162));r=t.stateNode,i=t.memoizedProps;try{r.nodeValue=i}catch(x){Ge(t,t.return,x)}}break;case 3:if(Jn(e,t),ao(t),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Xa(e.containerInfo)}catch(x){Ge(t,t.return,x)}break;case 4:Jn(e,t),ao(t);break;case 13:Jn(e,t),ao(t),r=t.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(ep=Qe())),o&4&&h5(t);break;case 22:if(_=n!==null&&n.memoizedState!==null,t.mode&1?(Lt=(c=Lt)||_,Jn(e,t),Lt=c):Jn(e,t),ao(t),o&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!_&&t.mode&1)for(W=t,_=t.child;_!==null;){for(d=W=_;W!==null;){switch(v=W,b=v.child,v.tag){case 0:case 11:case 14:case 15:vs(4,v,v.return);break;case 1:Gi(v,v.return);var S=v.stateNode;if(typeof S.componentWillUnmount=="function"){o=v,n=v.return;try{e=o,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(x){Ge(o,n,x)}}break;case 5:Gi(v,v.return);break;case 22:if(v.memoizedState!==null){m5(d);continue}}b!==null?(b.return=v,W=b):m5(d)}_=_.sibling}e:for(_=null,d=t;;){if(d.tag===5){if(_===null){_=d;try{r=d.stateNode,c?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Xg("display",a))}catch(x){Ge(t,t.return,x)}}}else if(d.tag===6){if(_===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){Ge(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;_===d&&(_=null),d=d.return}_===d&&(_=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Jn(e,t),ao(t),o&4&&h5(t);break;case 21:break;default:Jn(e,t),ao(t)}}function ao(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(d5(n)){var o=n;break e}n=n.return}throw Error(L(160))}switch(o.tag){case 5:var r=o.stateNode;o.flags&32&&(Oa(r,""),o.flags&=-33);var i=_5(t);Q_(t,i,r);break;case 3:case 4:var a=o.stateNode.containerInfo,s=_5(t);J_(t,s,a);break;default:throw Error(L(161))}}catch(l){Ge(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ik(t,e,n){W=t,g5(t)}function g5(t,e,n){for(var o=(t.mode&1)!==0;W!==null;){var r=W,i=r.child;if(r.tag===22&&o){var a=r.memoizedState!==null||fu;if(!a){var s=r.alternate,l=s!==null&&s.memoizedState!==null||Lt;s=fu;var c=Lt;if(fu=a,(Lt=l)&&!c)for(W=r;W!==null;)a=W,l=a.child,a.tag===22&&a.memoizedState!==null?b5(r):l!==null?(l.return=a,W=l):b5(r);for(;i!==null;)W=i,g5(i),i=i.sibling;W=r,fu=s,Lt=c}v5(t)}else r.subtreeFlags&8772&&i!==null?(i.return=r,W=i):v5(t)}}function v5(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Lt||gu(5,e);break;case 1:var o=e.stateNode;if(e.flags&4&&!Lt)if(n===null)o.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Yn(e.type,n.memoizedProps);o.componentDidUpdate(r,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&hm(e,i,o);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hm(e,a,n)}break;case 5:var s=e.stateNode;if(n===null&&e.flags&4){n=s;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var _=c.memoizedState;if(_!==null){var d=_.dehydrated;d!==null&&Xa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Lt||e.flags&512&&X_(e)}catch(v){Ge(e,e.return,v)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function m5(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function b5(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gu(4,e)}catch(l){Ge(e,n,l)}break;case 1:var o=e.stateNode;if(typeof o.componentDidMount=="function"){var r=e.return;try{o.componentDidMount()}catch(l){Ge(e,r,l)}}var i=e.return;try{X_(e)}catch(l){Ge(e,i,l)}break;case 5:var a=e.return;try{X_(e)}catch(l){Ge(e,a,l)}}}catch(l){Ge(e,e.return,l)}if(e===t){W=null;break}var s=e.sibling;if(s!==null){s.return=e.return,W=s;break}W=e.return}}var $k=Math.ceil,vu=ho.ReactCurrentDispatcher,Z_=ho.ReactCurrentOwner,Fn=ho.ReactCurrentBatchConfig,he=0,ft=null,st=null,Tt=0,mn=0,Yi=Go(0),dt=0,ms=null,zr=0,mu=0,K_=0,bs=null,an=null,ep=0,Xi=1/0,wo=null,bu=!1,tp=null,Ko=null,yu=!1,er=null,Cu=0,ys=0,np=null,wu=-1,Su=0;function Xt(){return he&6?Qe():wu!==-1?wu:wu=Qe()}function tr(t){return t.mode&1?he&2&&Tt!==0?Tt&-Tt:_k.transition!==null?(Su===0&&(Su=dv()),Su):(t=be,t!==0||(t=window.event,t=t===void 0?16:yv(t.type)),t):1}function Qn(t,e,n,o){if(50<ys)throw ys=0,np=null,Error(L(185));Wa(t,n,o),(!(he&2)||t!==ft)&&(t===ft&&(!(he&2)&&(mu|=n),dt===4&&nr(t,Tt)),sn(t,o),n===1&&he===0&&!(e.mode&1)&&(Xi=Qe()+500,Ql&&Xo()))}function sn(t,e){var n=t.callbackNode;_S(t,e);var o=Pl(t,t===ft?Tt:0);if(o===0)n!==null&&lv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=o&-o,t.callbackPriority!==e){if(n!=null&&lv(n),e===1)t.tag===0?dk(C5.bind(null,t)):im(C5.bind(null,t)),sk(function(){!(he&6)&&Xo()}),n=null;else{switch(_v(o)){case 1:n=Ld;break;case 4:n=uv;break;case 16:n=Il;break;case 536870912:n=cv;break;default:n=Il}n=$5(n,y5.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function y5(t,e){if(wu=-1,Su=0,he&6)throw Error(L(327));var n=t.callbackNode;if(Ji()&&t.callbackNode!==n)return null;var o=Pl(t,t===ft?Tt:0);if(o===0)return null;if(o&30||o&t.expiredLanes||e)e=ku(t,o);else{e=o;var r=he;he|=2;var i=S5();(ft!==t||Tt!==e)&&(wo=null,Xi=Qe()+500,Vr(t,e));do try{Pk();break}catch(s){w5(t,s)}while(1);y_(),vu.current=i,he=r,st!==null?e=0:(ft=null,Tt=0,e=dt)}if(e!==0){if(e===2&&(r=Nd(t),r!==0&&(o=r,e=op(t,r))),e===1)throw n=ms,Vr(t,0),nr(t,o),sn(t,Qe()),n;if(e===6)nr(t,o);else{if(r=t.current.alternate,!(o&30)&&!Ak(r)&&(e=ku(t,o),e===2&&(i=Nd(t),i!==0&&(o=i,e=op(t,i))),e===1))throw n=ms,Vr(t,0),nr(t,o),sn(t,Qe()),n;switch(t.finishedWork=r,t.finishedLanes=o,e){case 0:case 1:throw Error(L(345));case 2:Wr(t,an,wo);break;case 3:if(nr(t,o),(o&130023424)===o&&(e=ep+500-Qe(),10<e)){if(Pl(t,0)!==0)break;if(r=t.suspendedLanes,(r&o)!==o){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=u_(Wr.bind(null,t,an,wo),e);break}Wr(t,an,wo);break;case 4:if(nr(t,o),(o&4194240)===o)break;for(e=t.eventTimes,r=-1;0<o;){var a=31-Un(o);i=1<<a,a=e[a],a>r&&(r=a),o&=~i}if(o=r,o=Qe()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*$k(o/1960))-o,10<o){t.timeoutHandle=u_(Wr.bind(null,t,an,wo),o);break}Wr(t,an,wo);break;case 5:Wr(t,an,wo);break;default:throw Error(L(329))}}}return sn(t,Qe()),t.callbackNode===n?y5.bind(null,t):null}function op(t,e){var n=bs;return t.current.memoizedState.isDehydrated&&(Vr(t,e).flags|=256),t=ku(t,e),t!==2&&(e=an,an=n,e!==null&&rp(e)),t}function rp(t){an===null?an=t:an.push.apply(an,t)}function Ak(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var r=n[o],i=r.getSnapshot;r=r.value;try{if(!qn(i(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(t,e){for(e&=~K_,e&=~mu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Un(e),o=1<<n;t[n]=-1,e&=~o}}function C5(t){if(he&6)throw Error(L(327));Ji();var e=Pl(t,0);if(!(e&1))return sn(t,Qe()),null;var n=ku(t,e);if(t.tag!==0&&n===2){var o=Nd(t);o!==0&&(e=o,n=op(t,o))}if(n===1)throw n=ms,Vr(t,0),nr(t,e),sn(t,Qe()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wr(t,an,wo),sn(t,Qe()),null}function ip(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(Xi=Qe()+500,Ql&&Xo())}}function jr(t){er!==null&&er.tag===0&&!(he&6)&&Ji();var e=he;he|=1;var n=Fn.transition,o=be;try{if(Fn.transition=null,be=1,t)return t()}finally{be=o,Fn.transition=n,he=e,!(he&6)&&Xo()}}function ap(){mn=Yi.current,Ae(Yi)}function Vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ak(n)),st!==null)for(n=st.return;n!==null;){var o=n;switch(f_(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Xl();break;case 3:Ui(),Ae(nn),Ae(Pt),A_();break;case 5:I_(o);break;case 4:Ui();break;case 13:Ae(He);break;case 19:Ae(He);break;case 10:C_(o.type._context);break;case 22:case 23:ap()}n=n.return}if(ft=t,st=t=or(t.current,null),Tt=mn=e,dt=0,ms=null,K_=mu=zr=0,an=bs=null,Or!==null){for(e=0;e<Or.length;e++)if(n=Or[e],o=n.interleaved,o!==null){n.interleaved=null;var r=o.next,i=n.pending;if(i!==null){var a=i.next;i.next=r,o.next=a}n.pending=o}Or=null}return t}function w5(t,e){do{var n=st;try{if(y_(),lu.current=_u,uu){for(var o=Me.memoizedState;o!==null;){var r=o.queue;r!==null&&(r.pending=null),o=o.next}uu=!1}if(Mr=0,ht=ct=Me=null,_s=!1,ps=0,Z_.current=null,n===null||n.return===null){dt=1,ms=e,st=null;break}e:{var i=t,a=n.return,s=n,l=e;if(e=Tt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,_=s,d=_.tag;if(!(_.mode&1)&&(d===0||d===11||d===15)){var v=_.alternate;v?(_.updateQueue=v.updateQueue,_.memoizedState=v.memoizedState,_.lanes=v.lanes):(_.updateQueue=null,_.memoizedState=null)}var b=Gm(a);if(b!==null){b.flags&=-257,Ym(b,a,s,i,e),b.mode&1&&qm(i,c,e),e=b,l=c;var S=e.updateQueue;if(S===null){var x=new Set;x.add(l),e.updateQueue=x}else S.add(l);break e}else{if(!(e&1)){qm(i,c,e),sp();break e}l=Error(L(426))}}else if(Fe&&s.mode&1){var O=Gm(a);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Ym(O,a,s,i,e),m_(qi(l,s));break e}}i=l=qi(l,s),dt!==4&&(dt=2),bs===null?bs=[i]:bs.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var C=Wm(i,l,e);pm(i,C);break e;case 1:s=l;var g=i.type,w=i.stateNode;if(!(i.flags&128)&&(typeof g.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Ko===null||!Ko.has(w)))){i.flags|=65536,e&=-e,i.lanes|=e;var E=Um(i,s,e);pm(i,E);break e}}i=i.return}while(i!==null)}x5(n)}catch(D){e=D,st===n&&n!==null&&(st=n=n.return);continue}break}while(1)}function S5(){var t=vu.current;return vu.current=_u,t===null?_u:t}function sp(){(dt===0||dt===3||dt===2)&&(dt=4),ft===null||!(zr&268435455)&&!(mu&268435455)||nr(ft,Tt)}function ku(t,e){var n=he;he|=2;var o=S5();(ft!==t||Tt!==e)&&(wo=null,Vr(t,e));do try{Ek();break}catch(r){w5(t,r)}while(1);if(y_(),he=n,vu.current=o,st!==null)throw Error(L(261));return ft=null,Tt=0,dt}function Ek(){for(;st!==null;)k5(st)}function Pk(){for(;st!==null&&!oS();)k5(st)}function k5(t){var e=I5(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?x5(t):st=e,Z_.current=null}function x5(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=xk(n,e),n!==null){n.flags&=32767,st=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{dt=6,st=null;return}}else if(n=kk(n,e,mn),n!==null){st=n;return}if(e=e.sibling,e!==null){st=e;return}st=e=t}while(e!==null);dt===0&&(dt=5)}function Wr(t,e,n){var o=be,r=Fn.transition;try{Fn.transition=null,be=1,Fk(t,e,n,o)}finally{Fn.transition=r,be=o}return null}function Fk(t,e,n,o){do Ji();while(er!==null);if(he&6)throw Error(L(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(pS(t,i),t===ft&&(st=ft=null,Tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yu||(yu=!0,$5(Il,function(){return Ji(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Fn.transition,Fn.transition=null;var a=be;be=1;var s=he;he|=4,Z_.current=null,Tk(t,n),f5(n,t),KS(s_),Ll=!!a_,s_=a_=null,t.current=n,Ik(n),rS(),he=s,be=a,Fn.transition=i}else t.current=n;if(yu&&(yu=!1,er=t,Cu=r),i=t.pendingLanes,i===0&&(Ko=null),sS(n.stateNode),sn(t,Qe()),e!==null)for(o=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],o(r.value,{componentStack:r.stack,digest:r.digest});if(bu)throw bu=!1,t=tp,tp=null,t;return Cu&1&&t.tag!==0&&Ji(),i=t.pendingLanes,i&1?t===np?ys++:(ys=0,np=t):ys=0,Xo(),null}function Ji(){if(er!==null){var t=_v(Cu),e=Fn.transition,n=be;try{if(Fn.transition=null,be=16>t?16:t,er===null)var o=!1;else{if(t=er,er=null,Cu=0,he&6)throw Error(L(331));var r=he;for(he|=4,W=t.current;W!==null;){var i=W,a=i.child;if(W.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(W=c;W!==null;){var _=W;switch(_.tag){case 0:case 11:case 15:vs(8,_,i)}var d=_.child;if(d!==null)d.return=_,W=d;else for(;W!==null;){_=W;var v=_.sibling,b=_.return;if(c5(_),_===c){W=null;break}if(v!==null){v.return=b,W=v;break}W=b}}}var S=i.alternate;if(S!==null){var x=S.child;if(x!==null){S.child=null;do{var O=x.sibling;x.sibling=null,x=O}while(x!==null)}}W=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,W=a;else e:for(;W!==null;){if(i=W,i.flags&2048)switch(i.tag){case 0:case 11:case 15:vs(9,i,i.return)}var C=i.sibling;if(C!==null){C.return=i.return,W=C;break e}W=i.return}}var g=t.current;for(W=g;W!==null;){a=W;var w=a.child;if(a.subtreeFlags&2064&&w!==null)w.return=a,W=w;else e:for(a=g;W!==null;){if(s=W,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:gu(9,s)}}catch(D){Ge(s,s.return,D)}if(s===a){W=null;break e}var E=s.sibling;if(E!==null){E.return=s.return,W=E;break e}W=s.return}}if(he=r,Xo(),no&&typeof no.onPostCommitFiberRoot=="function")try{no.onPostCommitFiberRoot($l,t)}catch{}o=!0}return o}finally{be=n,Fn.transition=e}}return!1}function B5(t,e,n){e=qi(n,e),e=Wm(t,e,1),t=Qo(t,e,1),e=Xt(),t!==null&&(Wa(t,1,e),sn(t,e))}function Ge(t,e,n){if(t.tag===3)B5(t,t,n);else for(;e!==null;){if(e.tag===3){B5(e,t,n);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ko===null||!Ko.has(o))){t=qi(n,t),t=Um(e,t,1),e=Qo(e,t,1),t=Xt(),e!==null&&(Wa(e,1,t),sn(e,t));break}}e=e.return}}function Rk(t,e,n){var o=t.pingCache;o!==null&&o.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,ft===t&&(Tt&n)===n&&(dt===4||dt===3&&(Tt&130023424)===Tt&&500>Qe()-ep?Vr(t,0):K_|=n),sn(t,e)}function T5(t,e){e===0&&(t.mode&1?(e=El,El<<=1,!(El&130023424)&&(El=4194304)):e=1);var n=Xt();t=bo(t,e),t!==null&&(Wa(t,e,n),sn(t,n))}function Lk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),T5(t,n)}function Nk(t,e){var n=0;switch(t.tag){case 13:var o=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:o=t.stateNode;break;default:throw Error(L(314))}o!==null&&o.delete(e),T5(t,n)}var I5;I5=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,Sk(t,e,n);rn=!!(t.flags&131072)}else rn=!1,Fe&&e.flags&1048576&&am(e,Kl,e.index);switch(e.lanes=0,e.tag){case 2:var o=e.type;hu(t,e),t=e.pendingProps;var r=Oi(e,Pt.current);Vi(e,n),r=F_(null,e,o,t,r,n);var i=R_();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(o)?(i=!0,Jl(e)):i=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,k_(e),r.updater=iu,e.stateNode=r,r._reactInternals=e,B_(e,o,t,n),e=j_(null,e,o,!0,i,n)):(e.tag=0,Fe&&i&&h_(e),Yt(null,e,r,n),e=e.child),e;case 16:o=e.elementType;e:{switch(hu(t,e),t=e.pendingProps,r=o._init,o=r(o._payload),e.type=o,r=e.tag=Ok(o),t=Yn(o,t),r){case 0:e=z_(null,e,o,t,n);break e;case 1:e=e5(null,e,o,t,n);break e;case 11:e=Xm(null,e,o,t,n);break e;case 14:e=Jm(null,e,o,Yn(o.type,t),n);break e}throw Error(L(306,o,""))}return e;case 0:return o=e.type,r=e.pendingProps,r=e.elementType===o?r:Yn(o,r),z_(t,e,o,r,n);case 1:return o=e.type,r=e.pendingProps,r=e.elementType===o?r:Yn(o,r),e5(t,e,o,r,n);case 3:e:{if(t5(e),t===null)throw Error(L(387));o=e.pendingProps,i=e.memoizedState,r=i.element,_m(t,e),ru(e,o,null,n);var a=e.memoizedState;if(o=a.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){r=qi(Error(L(423)),e),e=n5(t,e,o,n,r);break e}else if(o!==r){r=qi(Error(L(424)),e),e=n5(t,e,o,n,r);break e}else for(vn=qo(e.stateNode.containerInfo.firstChild),gn=e,Fe=!0,Gn=null,n=Cm(e,null,o,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zi(),o===r){e=Co(t,e,n);break e}Yt(t,e,o,n)}e=e.child}return e;case 5:return wm(e),t===null&&v_(e),o=e.type,r=e.pendingProps,i=t!==null?t.memoizedProps:null,a=r.children,l_(o,r)?a=null:i!==null&&l_(o,i)&&(e.flags|=32),Km(t,e),Yt(t,e,a,n),e.child;case 6:return t===null&&v_(e),null;case 13:return o5(t,e,n);case 4:return T_(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=Wi(e,null,o,n):Yt(t,e,o,n),e.child;case 11:return o=e.type,r=e.pendingProps,r=e.elementType===o?r:Yn(o,r),Xm(t,e,o,r,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(o=e.type._context,r=e.pendingProps,i=e.memoizedProps,a=r.value,Be(tu,o._currentValue),o._currentValue=a,i!==null)if(qn(i.value,a)){if(i.children===r.children&&!nn.current){e=Co(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var l=s.firstContext;l!==null;){if(l.context===o){if(i.tag===1){l=yo(-1,n&-n),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var _=c.pending;_===null?l.next=l:(l.next=_.next,_.next=l),c.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),w_(i.return,n,e),s.lanes|=n;break}l=l.next}}else if(i.tag===10)a=i.type===e.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(L(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),w_(a,n,e),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===e){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Yt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,o=e.pendingProps.children,Vi(e,n),r=En(r),o=o(r),e.flags|=1,Yt(t,e,o,n),e.child;case 14:return o=e.type,r=Yn(o,e.pendingProps),r=Yn(o.type,r),Jm(t,e,o,r,n);case 15:return Qm(t,e,e.type,e.pendingProps,n);case 17:return o=e.type,r=e.pendingProps,r=e.elementType===o?r:Yn(o,r),hu(t,e),e.tag=1,on(o)?(t=!0,Jl(e)):t=!1,Vi(e,n),vm(e,o,r),B_(e,o,r,n),j_(null,e,o,!0,t,n);case 19:return i5(t,e,n);case 22:return Zm(t,e,n)}throw Error(L(156,e.tag))};function $5(t,e){return sv(t,e)}function Dk(t,e,n,o){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,o){return new Dk(t,e,n,o)}function lp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ok(t){if(typeof t=="function")return lp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===hd)return 11;if(t===vd)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xu(t,e,n,o,r,i){var a=2;if(o=t,typeof t=="function")lp(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case xi:return Ur(n.children,r,i,e);case _d:a=8,r|=8;break;case pd:return t=Rn(12,n,e,r|2),t.elementType=pd,t.lanes=i,t;case fd:return t=Rn(13,n,e,r),t.elementType=fd,t.lanes=i,t;case gd:return t=Rn(19,n,e,r),t.elementType=gd,t.lanes=i,t;case Dg:return Bu(n,r,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Lg:a=10;break e;case Ng:a=9;break e;case hd:a=11;break e;case vd:a=14;break e;case Oo:a=16,o=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=Rn(a,n,e,r),e.elementType=t,e.type=o,e.lanes=i,e}function Ur(t,e,n,o){return t=Rn(7,t,o,e),t.lanes=n,t}function Bu(t,e,n,o){return t=Rn(22,t,o,e),t.elementType=Dg,t.lanes=n,t.stateNode={isHidden:!1},t}function up(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function cp(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Hk(t,e,n,o,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dd(0),this.expirationTimes=Dd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dd(0),this.identifierPrefix=o,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function dp(t,e,n,o,r,i,a,s,l){return t=new Hk(t,e,n,s,l),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Rn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},k_(i),t}function Mk(t,e,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ki,key:o==null?null:""+o,children:t,containerInfo:e,implementation:n}}function A5(t){if(!t)return Yo;t=t._reactInternals;e:{if(Fr(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(on(n))return om(t,n,e)}return e}function E5(t,e,n,o,r,i,a,s,l){return t=dp(n,o,!0,t,r,i,a,s,l),t.context=A5(null),n=t.current,o=Xt(),r=tr(n),i=yo(o,r),i.callback=e??null,Qo(n,i,r),t.current.lanes=r,Wa(t,r,o),sn(t,o),t}function Tu(t,e,n,o){var r=e.current,i=Xt(),a=tr(r);return n=A5(n),e.context===null?e.context=n:e.pendingContext=n,e=yo(i,a),e.payload={element:t},o=o===void 0?null:o,o!==null&&(e.callback=o),t=Qo(r,e,a),t!==null&&(Qn(t,r,a,i),ou(t,r,a)),a}function Iu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function P5(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _p(t,e){P5(t,e),(t=t.alternate)&&P5(t,e)}function zk(){return null}var F5=typeof reportError=="function"?reportError:function(t){console.error(t)};function pp(t){this._internalRoot=t}$u.prototype.render=pp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));Tu(t,e,null,null)},$u.prototype.unmount=pp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;jr(function(){Tu(null,t,null,null)}),e[fo]=null}};function $u(t){this._internalRoot=t}$u.prototype.unstable_scheduleHydration=function(t){if(t){var e=fv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vo.length&&e!==0&&e<Vo[n].priority;n++);Vo.splice(n,0,t),n===0&&mv(t)}};function hp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Au(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function R5(){}function jk(t,e,n,o,r){if(r){if(typeof o=="function"){var i=o;o=function(){var c=Iu(a);i.call(c)}}var a=E5(e,o,t,0,null,!1,!1,"",R5);return t._reactRootContainer=a,t[fo]=a.current,rs(t.nodeType===8?t.parentNode:t),jr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof o=="function"){var s=o;o=function(){var c=Iu(l);s.call(c)}}var l=dp(t,0,!1,null,null,!1,!1,"",R5);return t._reactRootContainer=l,t[fo]=l.current,rs(t.nodeType===8?t.parentNode:t),jr(function(){Tu(e,l,n,o)}),l}function Eu(t,e,n,o,r){var i=n._reactRootContainer;if(i){var a=i;if(typeof r=="function"){var s=r;r=function(){var l=Iu(a);s.call(l)}}Tu(e,a,t,r)}else a=jk(n,e,t,r,o);return Iu(a)}pv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Va(e.pendingLanes);n!==0&&(Od(e,n|1),sn(e,Qe()),!(he&6)&&(Xi=Qe()+500,Xo()))}break;case 13:jr(function(){var o=bo(t,1);if(o!==null){var r=Xt();Qn(o,t,1,r)}}),_p(t,1)}},Hd=function(t){if(t.tag===13){var e=bo(t,134217728);if(e!==null){var n=Xt();Qn(e,t,134217728,n)}_p(t,134217728)}},hv=function(t){if(t.tag===13){var e=tr(t),n=bo(t,e);if(n!==null){var o=Xt();Qn(n,t,e,o)}_p(t,e)}},fv=function(){return be},gv=function(t,e){var n=be;try{return be=t,e()}finally{be=n}},Ed=function(t,e,n){switch(e){case"input":if(Sd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var o=n[e];if(o!==t&&o.form===t.form){var r=Yl(o);if(!r)throw Error(L(90));Mg(o),Sd(o,r)}}}break;case"textarea":Ug(t,n);break;case"select":e=n.value,e!=null&&Bi(t,!!n.multiple,e,!1)}},ev=ip,tv=jr;var Vk={usingClientEntryPoint:!1,Events:[ss,Ni,Yl,Zg,Kg,ip]},Cs={findFiberByHostInstance:Rr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Wk={bundleType:Cs.bundleType,version:Cs.version,rendererPackageName:Cs.rendererPackageName,rendererConfig:Cs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ho.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=iv(t),t===null?null:t.stateNode},findFiberByHostInstance:Cs.findFiberByHostInstance||zk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pu.isDisabled&&Pu.supportsFiber)try{$l=Pu.inject(Wk),no=Pu}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vk,pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hp(e))throw Error(L(200));return Mk(t,e,null,n)},pn.createRoot=function(t,e){if(!hp(t))throw Error(L(299));var n=!1,o="",r=F5;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=dp(t,1,!1,null,null,n,!1,o,r),t[fo]=e.current,rs(t.nodeType===8?t.parentNode:t),new pp(e)},pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=iv(e),t=t===null?null:t.stateNode,t},pn.flushSync=function(t){return jr(t)},pn.hydrate=function(t,e,n){if(!Au(e))throw Error(L(200));return Eu(null,t,e,!0,n)},pn.hydrateRoot=function(t,e,n){if(!hp(t))throw Error(L(405));var o=n!=null&&n.hydratedSources||null,r=!1,i="",a=F5;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=E5(e,null,t,1,n??null,r,!1,i,a),t[fo]=e.current,rs(t),o)for(t=0;t<o.length;t++)n=o[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new $u(e)},pn.render=function(t,e,n){if(!Au(e))throw Error(L(200));return Eu(null,t,e,!1,n)},pn.unmountComponentAtNode=function(t){if(!Au(t))throw Error(L(40));return t._reactRootContainer?(jr(function(){Eu(null,null,t,!1,function(){t._reactRootContainer=null,t[fo]=null})}),!0):!1},pn.unstable_batchedUpdates=ip,pn.unstable_renderSubtreeIntoContainer=function(t,e,n,o){if(!Au(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return Eu(t,e,n,!1,o)},pn.version="18.2.0-next-9e3b772b8-20220608";function L5(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L5)}catch(t){console.error(t)}}L5(),Ig.exports=pn;var qr=Ig.exports,N5=qr;Cl.createRoot=N5.createRoot,Cl.hydrateRoot=N5.hydrateRoot;var D5={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(t,e){(function(n,o){t.exports=o()})(yw,function n(){var o=typeof self<"u"?self:typeof window<"u"?window:o!==void 0?o:{},r=!o.document&&!!o.postMessage,i=o.IS_PAPA_WORKER||!1,a={},s=0,l={parse:function(m,y){var B=(y=y||{}).dynamicTyping||!1;if(I(B)&&(y.dynamicTypingFunction=B,B={}),y.dynamicTyping=B,y.transform=!!I(y.transform)&&y.transform,y.worker&&l.WORKERS_SUPPORTED){var H=function(){if(!l.WORKERS_SUPPORTED)return!1;var q=(ge=o.URL||o.webkitURL||null,pe=n.toString(),l.BLOB_URL||(l.BLOB_URL=ge.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",pe,")();"],{type:"text/javascript"})))),G=new o.Worker(q),ge,pe;return G.onmessage=g,G.id=s++,a[G.id]=G}();return H.userStep=y.step,H.userChunk=y.chunk,H.userComplete=y.complete,H.userError=y.error,y.step=I(y.step),y.chunk=I(y.chunk),y.complete=I(y.complete),y.error=I(y.error),delete y.worker,void H.postMessage({input:m,config:y,workerId:H.id})}var M=null;return l.NODE_STREAM_INPUT,typeof m=="string"?(m=function(q){return q.charCodeAt(0)===65279?q.slice(1):q}(m),M=y.download?new d(y):new b(y)):m.readable===!0&&I(m.read)&&I(m.on)?M=new S(y):(o.File&&m instanceof File||m instanceof Object)&&(M=new v(y)),M.stream(m)},unparse:function(m,y){var B=!1,H=!0,M=",",q=`\r
`,G='"',ge=G+G,pe=!1,U=null,N=!1;(function(){if(typeof y=="object"){if(typeof y.delimiter!="string"||l.BAD_DELIMITERS.filter(function(j){return y.delimiter.indexOf(j)!==-1}).length||(M=y.delimiter),(typeof y.quotes=="boolean"||typeof y.quotes=="function"||Array.isArray(y.quotes))&&(B=y.quotes),typeof y.skipEmptyLines!="boolean"&&typeof y.skipEmptyLines!="string"||(pe=y.skipEmptyLines),typeof y.newline=="string"&&(q=y.newline),typeof y.quoteChar=="string"&&(G=y.quoteChar),typeof y.header=="boolean"&&(H=y.header),Array.isArray(y.columns)){if(y.columns.length===0)throw new Error("Option columns is empty");U=y.columns}y.escapeChar!==void 0&&(ge=y.escapeChar+G),(typeof y.escapeFormulae=="boolean"||y.escapeFormulae instanceof RegExp)&&(N=y.escapeFormulae instanceof RegExp?y.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var R=new RegExp(O(G),"g");if(typeof m=="string"&&(m=JSON.parse(m)),Array.isArray(m)){if(!m.length||Array.isArray(m[0]))return X(null,m,pe);if(typeof m[0]=="object")return X(U||Object.keys(m[0]),m,pe)}else if(typeof m=="object")return typeof m.data=="string"&&(m.data=JSON.parse(m.data)),Array.isArray(m.data)&&(m.fields||(m.fields=m.meta&&m.meta.fields||U),m.fields||(m.fields=Array.isArray(m.data[0])?m.fields:typeof m.data[0]=="object"?Object.keys(m.data[0]):[]),Array.isArray(m.data[0])||typeof m.data[0]=="object"||(m.data=[m.data])),X(m.fields||[],m.data||[],pe);throw new Error("Unable to serialize unrecognized input");function X(j,Se,De){var Te="";typeof j=="string"&&(j=JSON.parse(j)),typeof Se=="string"&&(Se=JSON.parse(Se));var Ee=Array.isArray(j)&&0<j.length,We=!Array.isArray(Se[0]);if(Ee&&H){for(var kt=0;kt<j.length;kt++)0<kt&&(Te+=M),Te+=se(j[kt],kt);0<Se.length&&(Te+=q)}for(var J=0;J<Se.length;J++){var ke=Ee?j.length:Se[J].length,Ue=!1,pt=Ee?Object.keys(Se[J]).length===0:Se[J].length===0;if(De&&!Ee&&(Ue=De==="greedy"?Se[J].join("").trim()==="":Se[J].length===1&&Se[J][0].length===0),De==="greedy"&&Ee){for(var Ie=[],Ut=0;Ut<ke;Ut++){var at=We?j[Ut]:Ut;Ie.push(Se[J][at])}Ue=Ie.join("").trim()===""}if(!Ue){for(var Pe=0;Pe<ke;Pe++){0<Pe&&!pt&&(Te+=M);var to=Ee&&We?j[Pe]:Pe;Te+=se(Se[J][to],Pe)}J<Se.length-1&&(!De||0<ke&&!pt)&&(Te+=q)}}return Te}function se(j,Se){if(j==null)return"";if(j.constructor===Date)return JSON.stringify(j).slice(1,25);var De=!1;N&&typeof j=="string"&&N.test(j)&&(j="'"+j,De=!0);var Te=j.toString().replace(R,ge);return(De=De||B===!0||typeof B=="function"&&B(j,Se)||Array.isArray(B)&&B[Se]||function(Ee,We){for(var kt=0;kt<We.length;kt++)if(-1<Ee.indexOf(We[kt]))return!0;return!1}(Te,l.BAD_DELIMITERS)||-1<Te.indexOf(M)||Te.charAt(0)===" "||Te.charAt(Te.length-1)===" ")?G+Te+G:Te}}};if(l.RECORD_SEP=String.fromCharCode(30),l.UNIT_SEP=String.fromCharCode(31),l.BYTE_ORDER_MARK="\uFEFF",l.BAD_DELIMITERS=["\r",`
`,'"',l.BYTE_ORDER_MARK],l.WORKERS_SUPPORTED=!r&&!!o.Worker,l.NODE_STREAM_INPUT=1,l.LocalChunkSize=10485760,l.RemoteChunkSize=5242880,l.DefaultDelimiter=",",l.Parser=C,l.ParserHandle=x,l.NetworkStreamer=d,l.FileStreamer=v,l.StringStreamer=b,l.ReadableStreamStreamer=S,o.jQuery){var c=o.jQuery;c.fn.parse=function(m){var y=m.config||{},B=[];return this.each(function(q){if(!(c(this).prop("tagName").toUpperCase()==="INPUT"&&c(this).attr("type").toLowerCase()==="file"&&o.FileReader)||!this.files||this.files.length===0)return!0;for(var G=0;G<this.files.length;G++)B.push({file:this.files[G],inputElem:this,instanceConfig:c.extend({},y)})}),H(),this;function H(){if(B.length!==0){var q,G,ge,pe,U=B[0];if(I(m.before)){var N=m.before(U.file,U.inputElem);if(typeof N=="object"){if(N.action==="abort")return q="AbortError",G=U.file,ge=U.inputElem,pe=N.reason,void(I(m.error)&&m.error({name:q},G,ge,pe));if(N.action==="skip")return void M();typeof N.config=="object"&&(U.instanceConfig=c.extend(U.instanceConfig,N.config))}else if(N==="skip")return void M()}var R=U.instanceConfig.complete;U.instanceConfig.complete=function(X){I(R)&&R(X,U.file,U.inputElem),M()},l.parse(U.file,U.instanceConfig)}else I(m.complete)&&m.complete()}function M(){B.splice(0,1),H()}}}function _(m){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(y){var B=D(y);B.chunkSize=parseInt(B.chunkSize),y.step||y.chunk||(B.chunkSize=null),this._handle=new x(B),(this._handle.streamer=this)._config=B}.call(this,m),this.parseChunk=function(y,B){if(this.isFirstChunk&&I(this._config.beforeFirstChunk)){var H=this._config.beforeFirstChunk(y);H!==void 0&&(y=H)}this.isFirstChunk=!1,this._halted=!1;var M=this._partialLine+y;this._partialLine="";var q=this._handle.parse(M,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var G=q.meta.cursor;this._finished||(this._partialLine=M.substring(G-this._baseIndex),this._baseIndex=G),q&&q.data&&(this._rowCount+=q.data.length);var ge=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(i)o.postMessage({results:q,workerId:l.WORKER_ID,finished:ge});else if(I(this._config.chunk)&&!B){if(this._config.chunk(q,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);q=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(q.data),this._completeResults.errors=this._completeResults.errors.concat(q.errors),this._completeResults.meta=q.meta),this._completed||!ge||!I(this._config.complete)||q&&q.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),ge||q&&q.meta.paused||this._nextChunk(),q}this._halted=!0},this._sendError=function(y){I(this._config.error)?this._config.error(y):i&&this._config.error&&o.postMessage({workerId:l.WORKER_ID,error:y,finished:!1})}}function d(m){var y;(m=m||{}).chunkSize||(m.chunkSize=l.RemoteChunkSize),_.call(this,m),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(B){this._input=B,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(y=new XMLHttpRequest,this._config.withCredentials&&(y.withCredentials=this._config.withCredentials),r||(y.onload=P(this._chunkLoaded,this),y.onerror=P(this._chunkError,this)),y.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var B=this._config.downloadRequestHeaders;for(var H in B)y.setRequestHeader(H,B[H])}if(this._config.chunkSize){var M=this._start+this._config.chunkSize-1;y.setRequestHeader("Range","bytes="+this._start+"-"+M)}try{y.send(this._config.downloadRequestBody)}catch(q){this._chunkError(q.message)}r&&y.status===0&&this._chunkError()}},this._chunkLoaded=function(){y.readyState===4&&(y.status<200||400<=y.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:y.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(B){var H=B.getResponseHeader("Content-Range");return H===null?-1:parseInt(H.substring(H.lastIndexOf("/")+1))}(y),this.parseChunk(y.responseText)))},this._chunkError=function(B){var H=y.statusText||B;this._sendError(new Error(H))}}function v(m){var y,B;(m=m||{}).chunkSize||(m.chunkSize=l.LocalChunkSize),_.call(this,m);var H=typeof FileReader<"u";this.stream=function(M){this._input=M,B=M.slice||M.webkitSlice||M.mozSlice,H?((y=new FileReader).onload=P(this._chunkLoaded,this),y.onerror=P(this._chunkError,this)):y=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var M=this._input;if(this._config.chunkSize){var q=Math.min(this._start+this._config.chunkSize,this._input.size);M=B.call(M,this._start,q)}var G=y.readAsText(M,this._config.encoding);H||this._chunkLoaded({target:{result:G}})},this._chunkLoaded=function(M){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(M.target.result)},this._chunkError=function(){this._sendError(y.error)}}function b(m){var y;_.call(this,m=m||{}),this.stream=function(B){return y=B,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var B,H=this._config.chunkSize;return H?(B=y.substring(0,H),y=y.substring(H)):(B=y,y=""),this._finished=!y,this.parseChunk(B)}}}function S(m){_.call(this,m=m||{});var y=[],B=!0,H=!1;this.pause=function(){_.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){_.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(M){this._input=M,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){H&&y.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),y.length?this.parseChunk(y.shift()):B=!0},this._streamData=P(function(M){try{y.push(typeof M=="string"?M:M.toString(this._config.encoding)),B&&(B=!1,this._checkIsFinished(),this.parseChunk(y.shift()))}catch(q){this._streamError(q)}},this),this._streamError=P(function(M){this._streamCleanUp(),this._sendError(M)},this),this._streamEnd=P(function(){this._streamCleanUp(),H=!0,this._streamData("")},this),this._streamCleanUp=P(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function x(m){var y,B,H,M=Math.pow(2,53),q=-M,G=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,ge=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,pe=this,U=0,N=0,R=!1,X=!1,se=[],j={data:[],errors:[],meta:{}};if(I(m.step)){var Se=m.step;m.step=function(J){if(j=J,Ee())Te();else{if(Te(),j.data.length===0)return;U+=J.data.length,m.preview&&U>m.preview?B.abort():(j.data=j.data[0],Se(j,pe))}}}function De(J){return m.skipEmptyLines==="greedy"?J.join("").trim()==="":J.length===1&&J[0].length===0}function Te(){return j&&H&&(kt("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+l.DefaultDelimiter+"'"),H=!1),m.skipEmptyLines&&(j.data=j.data.filter(function(J){return!De(J)})),Ee()&&function(){if(!j)return;function J(Ue,pt){I(m.transformHeader)&&(Ue=m.transformHeader(Ue,pt)),se.push(Ue)}if(Array.isArray(j.data[0])){for(var ke=0;Ee()&&ke<j.data.length;ke++)j.data[ke].forEach(J);j.data.splice(0,1)}else j.data.forEach(J)}(),function(){if(!j||!m.header&&!m.dynamicTyping&&!m.transform)return j;function J(Ue,pt){var Ie,Ut=m.header?{}:[];for(Ie=0;Ie<Ue.length;Ie++){var at=Ie,Pe=Ue[Ie];m.header&&(at=Ie>=se.length?"__parsed_extra":se[Ie]),m.transform&&(Pe=m.transform(Pe,at)),Pe=We(at,Pe),at==="__parsed_extra"?(Ut[at]=Ut[at]||[],Ut[at].push(Pe)):Ut[at]=Pe}return m.header&&(Ie>se.length?kt("FieldMismatch","TooManyFields","Too many fields: expected "+se.length+" fields but parsed "+Ie,N+pt):Ie<se.length&&kt("FieldMismatch","TooFewFields","Too few fields: expected "+se.length+" fields but parsed "+Ie,N+pt)),Ut}var ke=1;return!j.data.length||Array.isArray(j.data[0])?(j.data=j.data.map(J),ke=j.data.length):j.data=J(j.data,0),m.header&&j.meta&&(j.meta.fields=se),N+=ke,j}()}function Ee(){return m.header&&se.length===0}function We(J,ke){return Ue=J,m.dynamicTypingFunction&&m.dynamicTyping[Ue]===void 0&&(m.dynamicTyping[Ue]=m.dynamicTypingFunction(Ue)),(m.dynamicTyping[Ue]||m.dynamicTyping)===!0?ke==="true"||ke==="TRUE"||ke!=="false"&&ke!=="FALSE"&&(function(pt){if(G.test(pt)){var Ie=parseFloat(pt);if(q<Ie&&Ie<M)return!0}return!1}(ke)?parseFloat(ke):ge.test(ke)?new Date(ke):ke===""?null:ke):ke;var Ue}function kt(J,ke,Ue,pt){var Ie={type:J,code:ke,message:Ue};pt!==void 0&&(Ie.row=pt),j.errors.push(Ie)}this.parse=function(J,ke,Ue){var pt=m.quoteChar||'"';if(m.newline||(m.newline=function(at,Pe){at=at.substring(0,1048576);var to=new RegExp(O(Pe)+"([^]*?)"+O(Pe),"gm"),zn=(at=at.replace(to,"")).split("\r"),_o=at.split(`
`),No=1<_o.length&&_o[0].length<zn[0].length;if(zn.length===1||No)return`
`;for(var jn=0,qe=0;qe<zn.length;qe++)zn[qe][0]===`
`&&jn++;return jn>=zn.length/2?`\r
`:"\r"}(J,pt)),H=!1,m.delimiter)I(m.delimiter)&&(m.delimiter=m.delimiter(J),j.meta.delimiter=m.delimiter);else{var Ie=function(at,Pe,to,zn,_o){var No,jn,qe,ut;_o=_o||[",","	","|",";",l.RECORD_SEP,l.UNIT_SEP];for(var yi=0;yi<_o.length;yi++){var xe=_o[yi],Pa=0,Do=0,Ci=0;qe=void 0;for(var $r=new C({comments:zn,delimiter:xe,newline:Pe,preview:10}).parse(at),Ar=0;Ar<$r.data.length;Ar++)if(to&&De($r.data[Ar]))Ci++;else{var Er=$r.data[Ar].length;Do+=Er,qe!==void 0?0<Er&&(Pa+=Math.abs(Er-qe),qe=Er):qe=Er}0<$r.data.length&&(Do/=$r.data.length-Ci),(jn===void 0||Pa<=jn)&&(ut===void 0||ut<Do)&&1.99<Do&&(jn=Pa,No=xe,ut=Do)}return{successful:!!(m.delimiter=No),bestDelimiter:No}}(J,m.newline,m.skipEmptyLines,m.comments,m.delimitersToGuess);Ie.successful?m.delimiter=Ie.bestDelimiter:(H=!0,m.delimiter=l.DefaultDelimiter),j.meta.delimiter=m.delimiter}var Ut=D(m);return m.preview&&m.header&&Ut.preview++,y=J,B=new C(Ut),j=B.parse(y,ke,Ue),Te(),R?{meta:{paused:!0}}:j||{meta:{paused:!1}}},this.paused=function(){return R},this.pause=function(){R=!0,B.abort(),y=I(m.chunk)?"":y.substring(B.getCharIndex())},this.resume=function(){pe.streamer._halted?(R=!1,pe.streamer.parseChunk(y,!0)):setTimeout(pe.resume,3)},this.aborted=function(){return X},this.abort=function(){X=!0,B.abort(),j.meta.aborted=!0,I(m.complete)&&m.complete(j),y=""}}function O(m){return m.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function C(m){var y,B=(m=m||{}).delimiter,H=m.newline,M=m.comments,q=m.step,G=m.preview,ge=m.fastMode,pe=y=m.quoteChar===void 0||m.quoteChar===null?'"':m.quoteChar;if(m.escapeChar!==void 0&&(pe=m.escapeChar),(typeof B!="string"||-1<l.BAD_DELIMITERS.indexOf(B))&&(B=","),M===B)throw new Error("Comment character same as delimiter");M===!0?M="#":(typeof M!="string"||-1<l.BAD_DELIMITERS.indexOf(M))&&(M=!1),H!==`
`&&H!=="\r"&&H!==`\r
`&&(H=`
`);var U=0,N=!1;this.parse=function(R,X,se){if(typeof R!="string")throw new Error("Input must be a string");var j=R.length,Se=B.length,De=H.length,Te=M.length,Ee=I(q),We=[],kt=[],J=[],ke=U=0;if(!R)return Vn();if(m.header&&!X){var Ue=R.split(H)[0].split(B),pt=[],Ie={},Ut=!1;for(var at in Ue){var Pe=Ue[at];I(m.transformHeader)&&(Pe=m.transformHeader(Pe,at));var to=Pe,zn=Ie[Pe]||0;for(0<zn&&(Ut=!0,to=Pe+"_"+zn),Ie[Pe]=zn+1;pt.includes(to);)to=to+"_"+zn;pt.push(to)}if(Ut){var _o=R.split(H);_o[0]=pt.join(B),R=_o.join(H)}}if(ge||ge!==!1&&R.indexOf(y)===-1){for(var No=R.split(H),jn=0;jn<No.length;jn++){if(J=No[jn],U+=J.length,jn!==No.length-1)U+=H.length;else if(se)return Vn();if(!M||J.substring(0,Te)!==M){if(Ee){if(We=[],Ci(J.split(B)),td(),N)return Vn()}else Ci(J.split(B));if(G&&G<=jn)return We=We.slice(0,G),Vn(!0)}}return Vn()}for(var qe=R.indexOf(B,U),ut=R.indexOf(H,U),yi=new RegExp(O(pe)+O(y),"g"),xe=R.indexOf(y,U);;)if(R[U]!==y)if(M&&J.length===0&&R.substring(U,U+Te)===M){if(ut===-1)return Vn();U=ut+De,ut=R.indexOf(H,U),qe=R.indexOf(B,U)}else if(qe!==-1&&(qe<ut||ut===-1))J.push(R.substring(U,qe)),U=qe+Se,qe=R.indexOf(B,U);else{if(ut===-1)break;if(J.push(R.substring(U,ut)),Er(ut+De),Ee&&(td(),N))return Vn();if(G&&We.length>=G)return Vn(!0)}else for(xe=U,U++;;){if((xe=R.indexOf(y,xe+1))===-1)return se||kt.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:We.length,index:U}),Ar();if(xe===j-1)return Ar(R.substring(U,xe).replace(yi,y));if(y!==pe||R[xe+1]!==pe){if(y===pe||xe===0||R[xe-1]!==pe){qe!==-1&&qe<xe+1&&(qe=R.indexOf(B,xe+1)),ut!==-1&&ut<xe+1&&(ut=R.indexOf(H,xe+1));var Pa=$r(ut===-1?qe:Math.min(qe,ut));if(R.substr(xe+1+Pa,Se)===B){J.push(R.substring(U,xe).replace(yi,y)),R[U=xe+1+Pa+Se]!==y&&(xe=R.indexOf(y,U)),qe=R.indexOf(B,U),ut=R.indexOf(H,U);break}var Do=$r(ut);if(R.substring(xe+1+Do,xe+1+Do+De)===H){if(J.push(R.substring(U,xe).replace(yi,y)),Er(xe+1+Do+De),qe=R.indexOf(B,U),xe=R.indexOf(y,U),Ee&&(td(),N))return Vn();if(G&&We.length>=G)return Vn(!0);break}kt.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:We.length,index:U}),xe++}}else xe++}return Ar();function Ci(Wn){We.push(Wn),ke=U}function $r(Wn){var bw=0;if(Wn!==-1){var hg=R.substring(xe+1,Wn);hg&&hg.trim()===""&&(bw=hg.length)}return bw}function Ar(Wn){return se||(Wn===void 0&&(Wn=R.substring(U)),J.push(Wn),U=j,Ci(J),Ee&&td()),Vn()}function Er(Wn){U=Wn,Ci(J),J=[],ut=R.indexOf(H,U)}function Vn(Wn){return{data:We,errors:kt,meta:{delimiter:B,linebreak:H,aborted:N,truncated:!!Wn,cursor:ke+(X||0)}}}function td(){q(Vn()),We=[],kt=[]}},this.abort=function(){N=!0},this.getCharIndex=function(){return U}}function g(m){var y=m.data,B=a[y.workerId],H=!1;if(y.error)B.userError(y.error,y.file);else if(y.results&&y.results.data){var M={abort:function(){H=!0,w(y.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:E,resume:E};if(I(B.userStep)){for(var q=0;q<y.results.data.length&&(B.userStep({data:y.results.data[q],errors:y.results.errors,meta:y.results.meta},M),!H);q++);delete y.results}else I(B.userChunk)&&(B.userChunk(y.results,M,y.file),delete y.results)}y.finished&&!H&&w(y.workerId,y.results)}function w(m,y){var B=a[m];I(B.userComplete)&&B.userComplete(y),B.terminate(),delete a[m]}function E(){throw new Error("Not implemented.")}function D(m){if(typeof m!="object"||m===null)return m;var y=Array.isArray(m)?[]:{};for(var B in m)y[B]=D(m[B]);return y}function P(m,y){return function(){m.apply(y,arguments)}}function I(m){return typeof m=="function"}return i&&(o.onmessage=function(m){var y=m.data;if(l.WORKER_ID===void 0&&y&&(l.WORKER_ID=y.workerId),typeof y.input=="string")o.postMessage({workerId:l.WORKER_ID,results:l.parse(y.input,y.config),finished:!0});else if(o.File&&y.input instanceof File||y.input instanceof Object){var B=l.parse(y.input,y.config);B&&o.postMessage({workerId:l.WORKER_ID,results:B,finished:!0})}}),(d.prototype=Object.create(_.prototype)).constructor=d,(v.prototype=Object.create(_.prototype)).constructor=v,(b.prototype=Object.create(b.prototype)).constructor=b,(S.prototype=Object.create(_.prototype)).constructor=S,l})})(D5);var Uk=D5.exports;const O5=nd(Uk);class qk{constructor(){this.totalRecordsFromUser=-1,this.failedRecords=[],this.error={},this.statusResponse=void 0,this.errorResponses=[],this.columnNames=[],this.dataMotiveFailedRowsCount=0}}class It{static INSTANCE;MODELS_ENDPOINT="/models";JOBS_ENDPOINT="/jobs";WIDGET_ENDPOINT="/widget";constructor(e){this.URL=e,this.mappings={},this.defaultValues={},this.jobSettings={},this.importType="factData",this.chunkSize=1e5,this.resultObj={},this.delimiter=",",It.INSTANCE=this}static getInstance(){return It.INSTANCE}setMappings(e){this.mappings=e}getMappings(){return this.mappings}setDefaultValues(e){this.defaultValues=e}getDefaultValues(){return this.defaultValues}setJobSettings(e){this.jobSettings=e}getJobSettings(){return this.jobSettings}setChunkSize(e){this.chunkSize=e}getChunkSize(){return this.chunkSize}async getXLSXScriptURL(){const e=this.URL+this.WIDGET_ENDPOINT+"/xlsx.mini.min.js";return(await fetch(e)).ok?e:"https://cdn.sheetjs.com/xlsx-0.20.0/package/dist/xlsx.mini.min.js"}async getModels(){let e=await fetch(this.URL+this.MODELS_ENDPOINT);if(!e.ok)throw new Error("Unable to get list of models");return await e.json()}async getModel(e){let n=await fetch(this.URL+this.MODELS_ENDPOINT+"/"+e);if(!n.ok)throw new Error("Unable to get model information");return await n.json()}async getModelMetadata(e){let n=await fetch(this.URL+this.MODELS_ENDPOINT+"/"+e+"/metadata");if(!n.ok)throw new Error("Unable to get model metadata");return await n.json()}async getCSRFToken(){const e=this.URL+this.MODELS_ENDPOINT,o=await fetch(e,{method:"GET",headers:{"Content-Type":"application/json","X-Csrf-Token":"fetch"}});if(!o.ok)throw this.status="FAILED",await this.handleJsonError(o),new Error(`Unable to fetch CSRF token - ${o.status}`);return await o.headers.get("X-Csrf-Token")}async uploadData(e,n,o=(s,l)=>{},r="json",i={},a){this.resultObj=new qk,this.resultObj.columnNames=[[...a,"Rejection Reason"].join(this.delimiter)],this.status="NOT_STARTED";try{this.csrfToken=await this.getCSRFToken()}catch(c){this.resultObj.error=c,o(this.status,this.resultObj)}let s={};try{s=await this.createJob(e,this.importType,i)}catch(c){this.resultObj.error=c,o(this.status,this.resultObj);return}const l=s.jobID;if(this.resultObj.totalRecordsFromUser=n.length,r==="csv"){if(n.length<1){const c=new Error("Data contains no rows");this.resultObj.error=c,this.status="FAILED",o(this.status,c)}for(let c=1;c<n.length;c+=this.chunkSize){const _=[n[0],...n.slice(c,c+this.chunkSize)];try{await this.postCSVDataToJob(l,_)}catch(d){this.resultObj.error=d,o(this.status,this.resultObj);return}}}try{await this.postRunJob(l)}catch(c){this.resultObj.error=c,o(this.status,this.resultObj);return}try{await this.pollStatusTillCompletion(l)}catch(c){this.resultObj.error=c,o(this.status,this.resultObj)}if(this.status==="COMPLETED"&&this.resultObj.failedRecords.length>0&&(this.status="COMPLETED_WITH_FAILURES"),this.resultObj.statusResponse.additionalInformation.failedNumberRows)try{const c=await this.getInvalidRows(l),_=await this.convertDMInvalidRowsToCSV(c);this.resultObj.dataMotiveFailedRowsCount=_.length,this.resultObj.failedRecords=[...this.resultObj.failedRecords,..._]}catch(c){this.resultObj.error=c,o(this.status,this.resultObj);return}o(this.status,this.resultObj)}async pollStatusTillCompletion(e){for(;this.status!=="COMPLETED"&&this.status!=="FAILED"&&this.status!=="COMPLETED_WITH_FAILURES";){let n;try{n=await this.getJobStatus(e),this.status=n.jobStatus,this.resultObj.statusResponse=n}catch{throw this.status="FAILED",new Error("Error checking job status")}if(this.status==="COMPLETED"){if(n.additionalInformation.failedNumberRows!="0"){this.status="COMPLETED_WITH_FAILURES";return}return}else if(this.status==="FAILED")return;await new Promise(o=>setTimeout(o,3e3))}}async createJob(e,n="factData",o={}){const r=this.URL+this.MODELS_ENDPOINT+"/"+e+"/"+n;Object.keys(this.mappings).forEach(c=>{(this.mappings[c]===void 0||this.mappings[c]==="")&&(this.mappings[c]=c)});const i={...this.jobSettings},a=i.pivotOptions;a&&(!a.pivotColumnStart||!a.pivotKeyName||!a.pivotValueName)&&delete i.pivotOptions;const s={method:"POST",headers:{"Content-Type":"application/json","x-csrf-token":this.csrfToken},body:JSON.stringify({Mapping:this.mappings,DefaultValues:{...this.defaultValues,...o},JobSettings:i})},l=await fetch(r,s);if(!l.ok)throw this.status="FAILED",await this.handleJsonError(l),new Error(`HTTP error! status: ${l.status}`);return await l.json()}async postCSVDataToJob(e,n){const o=this.URL+this.JOBS_ENDPOINT+"/"+e,r=O5.unparse(n),i={method:"POST",headers:{"Content-Type":"text/csv","x-csrf-token":this.csrfToken},body:r},a=await fetch(o,i);if(!a.ok)throw this.status="FAILED",await this.handleJsonError(a),new Error(`Error sending data to import job: ${a.status}`);const s=await a.json();if(s.failedRows.length>0){const l=this.convertDISInvalidRowsToCSV(s.failedRows);this.resultObj.failedRecords=[...this.resultObj.failedRecords,...l]}return s}async postRunJob(e){const n=this.URL+this.JOBS_ENDPOINT+"/"+e+"/run",o={method:"POST",headers:{"Content-Type":"application/json","x-csrf-token":this.csrfToken},data:{jobSettings:this.jobSettings}},r=await fetch(n,o);if(!r.ok)throw this.status="FAILED",await this.handleJsonError(r),new Error(`HTTP error! status: ${r.status}`);return await r.json()}async getJobStatus(e){const n=this.URL+this.JOBS_ENDPOINT+"/"+e+"/status";let r=await fetch(n,{method:"GET"});if(!r.ok)throw await this.handleJsonError(r),new Error(`HTTP error! status: ${r.status}`);return await r.json()}async getJobs(){const e=this.URL+this.JOBS_ENDPOINT;let o=await fetch(e,{method:"GET"});if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);return await o.json()}async getInvalidRows(e){const n=this.URL+this.JOBS_ENDPOINT+"/"+e+"/invalidRows";let r=await fetch(n,{method:"GET"});if(!r.ok)throw await this.handleJsonError(r),new Error(`HTTP error! status: ${r.status}`);return await r.json()}async handleJsonError(e){const n=e.headers.get("Content-Type");if(n&&n.toLowerCase()==="application/json"){const o=await e.json();this.resultObj.errorResponses.push(o)}}validateJobData(e,n){const o=[];e.length<2&&o.push("The data should contain at least one row of headers and one row of values.");const r=this._getHeaderRow(e),i=n.keys;for(let l of i)!r.includes(l)&&!r.includes(this.mappings[l])&&!(this.jobSettings.pivotOptions!==void 0&&this.jobSettings.pivotOptions.pivotKeyName===l)&&!(this.jobSettings.pivotOptions!==void 0&&this.jobSettings.pivotOptions.pivotValueName===l)&&!this.defaultValues[l]&&l!=="Version"&&o.push(`The key dimension - ${l} has no value`);const a=n.columns.map(l=>l.columnName),s=[];for(let l in this.mappings)a.includes(l)||o.push(`The mapping ${l} to ${this.mappings[l]} is not valid. Please contact an administrator to fix the mappings settings.`),a.includes(l)&&this.mappings[l]!==void 0&&this.mappings[l]!==""&&s.push(this.mappings[l]);if(!this.jobSettings.ignoreAdditionalColumns)for(let l of r)!a.includes(l)&&!s.includes(l)&&o.push(`Data contains unknown column - ${l}`);return o}_getHeaderRow(e){e.length<2;const n=[...e[0]];let o=e[0].length;if(this.jobSettings.pivotOptions!==void 0&&this.jobSettings.pivotOptions.pivotColumnStart!==void 0){if(o=this.jobSettings.pivotOptions.pivotColumnStart,n.length<this.jobSettings.pivotColumnStart)return[`The data should contain at least ${this.jobSettings.pivotColumnStart} columns in order to support pivot import sedttings, found only ${n.length}`];for(;n.length>=o;)n.pop()}return n}validateVersionExistsInDataOrSettings(e){const n="Version",o=this._getHeaderRow(e);return!(!o.includes(n)&&!o.includes(this.mappings[n])&&!(this.jobSettings.pivotOptions!==void 0&&this.jobSettings.pivotOptions.pivotKeyName===n)&&!(this.jobSettings.pivotOptions!==void 0&&this.jobSettings.pivotOptions.pivotValueName===n))}convertDISInvalidRowsToCSV(e){return e.map(n=>`${n.row.replaceAll(",",this.delimiter)}${this.delimiter}${n.reason}`)}convertDMInvalidRowsToCSV(e){return e.failedRows.map(n=>Object.values(n).join(this.delimiter))}}var fp;(function(t){t.Accent1="Accent1",t.Accent2="Accent2",t.Accent3="Accent3",t.Accent4="Accent4",t.Accent5="Accent5",t.Accent6="Accent6",t.Accent7="Accent7",t.Accent8="Accent8",t.Accent9="Accent9",t.Accent10="Accent10",t.Placeholder="Placeholder"})(fp||(fp={}));const Fu=fp;var gp;(function(t){t.Circle="Circle",t.Square="Square"})(gp||(gp={}));const H5=gp;var vp;(function(t){t.XS="XS",t.S="S",t.M="M",t.L="L",t.XL="XL"})(vp||(vp={}));const Ru=vp;var mp;(function(t){t.Header="Header",t.Subheader="Subheader",t.Footer="Footer",t.FloatingFooter="FloatingFooter"})(mp||(mp={}));const bp=mp;var yp;(function(t){t.Small="Small",t.Medium="Medium",t.Large="Large"})(yp||(yp={}));const Cp=yp;var wp;(function(t){t.Default="Default",t.Positive="Positive",t.Negative="Negative",t.Transparent="Transparent",t.Emphasized="Emphasized",t.Attention="Attention"})(wp||(wp={}));const ws=wp;var Sp;(function(t){t.Button="Button",t.Submit="Submit",t.Reset="Reset"})(Sp||(Sp={}));const Qi=Sp;var kp;(function(t){t.StartsWithPerTerm="StartsWithPerTerm",t.StartsWith="StartsWith",t.Contains="Contains",t.None="None"})(kp||(kp={}));const xp=kp;let Gk=function(t){return t.Start="Start",t.Center="Center",t.End="End",t.Baseline="Baseline",t.Stretch="Stretch",t}({}),Yk=function(t){return t.Column="Column",t.ColumnReverse="ColumnReverse",t.Row="Row",t.RowReverse="RowReverse",t}({}),Xk=function(t){return t.Start="Start",t.Center="Center",t.End="End",t.SpaceAround="SpaceAround",t.SpaceBetween="SpaceBetween",t}({}),Jk=function(t){return t.NoWrap="NoWrap",t.Wrap="Wrap",t.WrapReverse="WrapReverse",t}({}),M5=function(t){return t.sapScrollBar="sapScrollBar",t.inheritingSapScrollBar="inheritingSapScrollBar",t}({});var Bp;(function(t){t.Contrast="Contrast",t.Critical="Critical",t.Default="Default",t.Information="Information",t.Negative="Negative",t.Neutral="Neutral",t.NonInteractive="NonInteractive",t.Positive="Positive"})(Bp||(Bp={}));const Tp=Bp;var Ip;(function(t){t.Text="Text",t.Email="Email",t.Number="Number",t.Password="Password",t.Tel="Tel",t.URL="URL"})(Ip||(Ip={}));const Lu=Ip;var $p;(function(t){t.Default="Default",t.Subtle="Subtle",t.Emphasized="Emphasized"})($p||($p={}));const Ap=$p;var Ep;(function(t){t.Button="Button",t.Scroll="Scroll",t.None="None"})(Ep||(Ep={}));const Ss=Ep;var Pp;(function(t){t.Inactive="Inactive",t.Active="Active",t.Detail="Detail",t.Navigation="Navigation"})(Pp||(Pp={}));const ln=Pp;var Fp;(function(t){t.None="None",t.SingleSelect="SingleSelect",t.SingleSelectBegin="SingleSelectBegin",t.SingleSelectEnd="SingleSelectEnd",t.SingleSelectAuto="SingleSelectAuto",t.MultiSelect="MultiSelect",t.Delete="Delete"})(Fp||(Fp={}));const ze=Fp;var Rp;(function(t){t.All="All",t.Inner="Inner",t.None="None"})(Rp||(Rp={}));const Nu=Rp;let z5=function(t){return t.Determinate="Determinate",t.Indeterminate="Indeterminate",t}({});var Lp;(function(t){t.Information="Information",t.Positive="Positive",t.Negative="Negative",t.Warning="Warning"})(Lp||(Lp={}));const Np=Lp;var Dp;(function(t){t.Complementary="Complementary",t.Form="Form",t.Region="Region"})(Dp||(Dp={}));const Op=Dp;var Hp;(function(t){t.Center="Center",t.Left="Left",t.Right="Right",t.Stretch="Stretch"})(Hp||(Hp={}));const gt=Hp;var Mp;(function(t){t.Left="Left",t.Right="Right",t.Top="Top",t.Bottom="Bottom"})(Mp||(Mp={}));const Ye=Mp;var zp;(function(t){t.Center="Center",t.Top="Top",t.Bottom="Bottom",t.Stretch="Stretch"})(zp||(zp={}));const Gr=zp;var jp;(function(t){t.None="None",t.Dialog="Dialog",t.AlertDialog="AlertDialog"})(jp||(jp={}));const Yr=jp;var Vp;(function(t){t.Vertical="Vertical",t.Horizontal="Horizontal"})(Vp||(Vp={}));const rr=Vp;var Wp;(function(t){t.H1="H1",t.H2="H2",t.H3="H3",t.H4="H4",t.H5="H5",t.H6="H6"})(Wp||(Wp={}));const Zi=Wp;let Ki=function(t){return t.Error="Error",t.None="None",t.Success="Success",t.Warning="Warning",t.Information="Information",t}({});var Up;(function(t){t.None="None",t.Normal="Normal"})(Up||(Up={}));const Ln=Up,Qk=ee.createContext(null),j5=()=>(globalThis["@ui5/webcomponents-react"]??={},globalThis["@ui5/webcomponents-react"].I18nContext??=Qk,globalThis["@ui5/webcomponents-react"].I18nContext),Zk=()=>ee.useContext(j5()),Nt=typeof document>"u",le={get userAgent(){return Nt?"":navigator.userAgent},get touch(){return Nt?!1:"ontouchstart"in window||navigator.maxTouchPoints>0},get ie(){return Nt?!1:/(msie|trident)/i.test(le.userAgent)},get chrome(){return Nt?!1:!le.ie&&/(Chrome|CriOS)/.test(le.userAgent)},get firefox(){return Nt?!1:/Firefox/.test(le.userAgent)},get safari(){return Nt?!1:!le.ie&&!le.chrome&&/(Version|PhantomJS)\/(\d+\.\d+).*Safari/.test(le.userAgent)},get webkit(){return Nt?!1:!le.ie&&/webkit/.test(le.userAgent)},get windows(){return Nt?!1:navigator.platform.indexOf("Win")!==-1},get iOS(){return Nt?!1:!!navigator.platform.match(/iPhone|iPad|iPod/)||!!(le.userAgent.match(/Mac/)&&"ontouchend"in document)},get android(){return Nt?!1:!le.windows&&/Android/.test(le.userAgent)},get androidPhone(){return Nt?!1:le.android&&/(?=android)(?=.*mobile)/i.test(le.userAgent)},get ipad(){return Nt?!1:/ipad/i.test(le.userAgent)||/Macintosh/i.test(le.userAgent)&&"ontouchend"in document}};let qp,Gp,ir;const Yp=()=>{if(Nt||!le.windows)return!1;if(qp===void 0){const t=le.userAgent.match(/Windows NT (\d+).(\d)/);qp=t?parseFloat(t[1]):0}return qp>=8},Kk=()=>{if(Nt||!le.webkit)return!1;if(Gp===void 0){const t=le.userAgent.match(/(webkit)[ /]([\w.]+)/);Gp=t?parseFloat(t[1]):0}return Gp>=537.1},V5=()=>{if(Nt)return!1;if(ir===void 0){if(le.ipad){ir=!0;return}if(le.touch){if(Yp()){ir=!0;return}if(le.chrome&&le.android){ir=!/Mobile Safari\/[.0-9]+/.test(le.userAgent);return}let t=window.devicePixelRatio?window.devicePixelRatio:1;le.android&&Kk()&&(t=1),ir=Math.min(window.screen.width/t,window.screen.height/t)>=600;return}ir=le.ie&&le.userAgent.indexOf("Touch")!==-1||le.android&&!le.androidPhone}},Du=()=>le.safari,ex=()=>le.chrome,Xp=()=>(V5(),(le.touch||Yp())&&ir),me=()=>(V5(),le.touch&&!ir),ea=()=>Nt?!1:!Xp()&&!me()||Yp(),tx=()=>Xp()&&ea(),nx=()=>le.iOS,W5=()=>le.android||le.androidPhone;class Xr{constructor(){this._eventRegistry=new Map}attachEvent(e,n){const o=this._eventRegistry,r=o.get(e);if(!Array.isArray(r)){o.set(e,[n]);return}r.includes(n)||r.push(n)}detachEvent(e,n){const o=this._eventRegistry,r=o.get(e);if(!r)return;const i=r.indexOf(n);i!==-1&&r.splice(i,1),r.length===0&&o.delete(e)}fireEvent(e,n){const r=this._eventRegistry.get(e);return r?r.map(i=>i.call(this,n)):[]}fireEventAsync(e,n){return Promise.all(this.fireEvent(e,n))}isHandlerAttached(e,n){const r=this._eventRegistry.get(e);return r?r.includes(n):!1}hasListeners(e){return!!this._eventRegistry.get(e)}}const Jp=new Map,ks=new Map;ks.set("S",[0,599]),ks.set("M",[600,1023]),ks.set("L",[1024,1439]),ks.set("XL",[1440,1/0]);var Ou;(function(t){t.RANGE_4STEPS="4Step"})(Ou||(Ou={}));const Hu={RANGESETS:Ou,initRangeSet:(t,e)=>{Jp.set(t,e)},getCurrentRange:(t,e=window.innerWidth)=>{let n=Jp.get(t);n||(n=Jp.get(Ou.RANGE_4STEPS));let o;const r=Math.floor(e);return n.forEach((i,a)=>{r>=i[0]&&r<=i[1]&&(o=a)}),o||[...n.keys()][0]}};Hu.initRangeSet(Hu.RANGESETS.RANGE_4STEPS,ks);var U5={},q5=U5.hasOwnProperty,ox=U5.toString,G5=q5.toString,rx=G5.call(Object),Y5=function(t){var e,n;return!t||ox.call(t)!=="[object Object]"?!1:(e=Object.getPrototypeOf(t),e?(n=q5.call(e,"constructor")&&e.constructor,typeof n=="function"&&G5.call(n)===rx):!0)},ix=Object.create(null),X5=function(t,e,n,o){var r,i,a,s,l,c,_=arguments[2]||{},d=3,v=arguments.length,b=arguments[0]||!1,S=arguments[1]?void 0:ix;for(typeof _!="object"&&typeof _!="function"&&(_={});d<v;d++)if((l=arguments[d])!=null)for(s in l)r=_[s],a=l[s],!(s==="__proto__"||_===a)&&(b&&a&&(Y5(a)||(i=Array.isArray(a)))?(i?(i=!1,c=r&&Array.isArray(r)?r:[]):c=r&&Y5(r)?r:{},_[s]=X5(b,arguments[1],c,a)):a!==S&&(_[s]=a));return _};const Qp=function(t,e){return X5(!0,!1,...arguments)},J5=new Map,Zp=(t,e)=>{J5.set(t,e)},Xe=t=>J5.get(t),Mu={themes:{default:"sap_fiori_3",all:["sap_fiori_3","sap_fiori_3_dark","sap_belize","sap_belize_hcb","sap_belize_hcw","sap_fiori_3_hcb","sap_fiori_3_hcw","sap_horizon","sap_horizon_dark","sap_horizon_hcb","sap_horizon_hcw","sap_horizon_exp"]},languages:{default:"en",all:["ar","bg","ca","cs","cy","da","de","el","en","en_GB","en_US_sappsd","en_US_saprigi","en_US_saptrc","es","es_MX","et","fi","fr","fr_CA","hi","hr","hu","in","it","iw","ja","kk","ko","lt","lv","ms","nl","no","pl","pt_PT","pt","ro","ru","sh","sk","sl","sv","th","tr","uk","vi","zh_CN","zh_TW"]},locales:{default:"en",all:["ar","ar_EG","ar_SA","bg","ca","cs","da","de","de_AT","de_CH","el","el_CY","en","en_AU","en_GB","en_HK","en_IE","en_IN","en_NZ","en_PG","en_SG","en_ZA","es","es_AR","es_BO","es_CL","es_CO","es_MX","es_PE","es_UY","es_VE","et","fa","fi","fr","fr_BE","fr_CA","fr_CH","fr_LU","he","hi","hr","hu","id","it","it_CH","ja","kk","ko","lt","lv","ms","nb","nl","nl_BE","pl","pt","pt_PT","ro","ru","ru_UA","sk","sl","sr","sr_Latn","sv","th","tr","uk","vi","zh_CN","zh_HK","zh_SG","zh_TW"]}},zu=Mu.themes.default,ax=Mu.themes.all,ju=Mu.languages.default,ta=Mu.locales.default,sx=t=>{const e=document.querySelector(`META[name="${t}"]`);return e&&e.getAttribute("content")},lx=t=>{const e=sx("sap-allowedThemeOrigins");return e&&e.split(",").some(n=>n==="*"||t===n.trim())},ux=(t,e)=>{const n=new URL(t).pathname;return new URL(n,e).toString()},cx=t=>{let e;try{if(t.startsWith(".")||t.startsWith("/"))e=new URL(t,window.location.href).toString();else{const n=new URL(t),o=n.origin;o&&lx(o)?e=n.toString():e=ux(n.toString(),window.location.href)}return e.endsWith("/")||(e=`${e}/`),`${e}UI5/`}catch{}};var Kp;(function(t){t.Full="full",t.Basic="basic",t.Minimal="minimal",t.None="none"})(Kp||(Kp={}));const Q5=Kp;let Z5=!1,un={animationMode:Q5.Full,theme:zu,themeRoot:void 0,rtl:void 0,language:void 0,timezone:void 0,calendarType:void 0,noConflict:!1,formatSettings:{},fetchDefaultLanguage:!1};const dx=()=>(Jr(),un.animationMode),_x=()=>(Jr(),un.theme),px=()=>(Jr(),un.themeRoot),hx=()=>(Jr(),un.rtl),fx=()=>(Jr(),un.language),gx=()=>(Jr(),un.fetchDefaultLanguage),vx=()=>(Jr(),un.noConflict),Vu=new Map;Vu.set("true",!0),Vu.set("false",!1);const mx=()=>{const t=document.querySelector("[data-ui5-config]")||document.querySelector("[data-id='sap-ui-config']");let e;if(t){try{e=JSON.parse(t.innerHTML)}catch{console.warn("Incorrect data-sap-ui-config format. Please use JSON")}e&&(un=Qp(un,e))}},bx=()=>{const t=new URLSearchParams(window.location.search);t.forEach((e,n)=>{const o=n.split("sap-").length;o===0||o===n.split("sap-ui-").length||K5(n,e,"sap")}),t.forEach((e,n)=>{n.startsWith("sap-ui")&&K5(n,e,"sap-ui")})},yx=t=>{const e=t.split("@")[1];return cx(e)},Cx=(t,e)=>t==="theme"&&e.includes("@")?e.split("@")[0]:e,K5=(t,e,n)=>{const o=e.toLowerCase(),r=t.split(`${n}-`)[1];Vu.has(e)&&(e=Vu.get(o)),r==="theme"?(un.theme=Cx(r,e),e&&e.includes("@")&&(un.themeRoot=yx(e))):un[r]=e},wx=()=>{const t=Xe("OpenUI5Support");if(!t||!t.isOpenUI5Detected())return;const e=t.getConfigurationSettingsObject();un=Qp(un,e)},Jr=()=>{typeof document>"u"||Z5||(mx(),bx(),wx(),Z5=!0)},eb=10;class Sx{constructor(){this.list=[],this.lookup=new Set}add(e){this.lookup.has(e)||(this.list.push(e),this.lookup.add(e))}remove(e){this.lookup.has(e)&&(this.list=this.list.filter(n=>n!==e),this.lookup.delete(e))}shift(){const e=this.list.shift();if(e)return this.lookup.delete(e),e}isEmpty(){return this.list.length===0}isAdded(e){return this.lookup.has(e)}process(e){let n;const o=new Map;for(n=this.shift();n;){const r=o.get(n)||0;if(r>eb)throw new Error(`Web component processed too many times this task, max allowed is: ${eb}`);e(n),o.set(n,r+1),n=this.shift()}}}const Wu=(t,e=document.body,n)=>{let o=document.querySelector(t);return o||(o=n?n():document.createElement(t),e.insertBefore(o,e.firstChild))},kx=()=>{const t=document.createElement("meta");return t.setAttribute("name","ui5-shared-resources"),t.setAttribute("content",""),t},xx=()=>typeof document>"u"?null:Wu('meta[name="ui5-shared-resources"]',document.head,kx),Qr=(t,e)=>{const n=t.split(".");let o=xx();if(!o)return e;for(let r=0;r<n.length;r++){const i=n[r],a=r===n.length-1;Object.prototype.hasOwnProperty.call(o,i)||(o[i]=a?e:{}),o=o[i]}return o},Bx={version:"1.16.0",major:1,minor:16,patch:0,suffix:"",isNext:!1,buildTime:1691061047};let Uu,Tx="";const eh=new Map,xs=Qr("Runtimes",[]),Ix=()=>{if(Uu===void 0){Uu=xs.length;const t=Bx;xs.push({...t,alias:Tx,description:`Runtime ${Uu} - ver ${t.version}`})}},Zr=()=>Uu,$x=(t,e)=>{const n=`${t},${e}`;if(eh.has(n))return eh.get(n);const o=xs[t],r=xs[e];if(!o||!r)throw new Error("Invalid runtime index supplied");if(o.isNext||r.isNext)return o.buildTime-r.buildTime;const i=o.major-r.major;if(i)return i;const a=o.minor-r.minor;if(a)return a;const s=o.patch-r.patch;if(s)return s;const c=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}).compare(o.suffix,r.suffix);return eh.set(n,c),c},Ax=()=>xs,tb=Qr("Tags",new Map),th=new Set;let Kr=new Map,nh;const nb=-1,Ex=t=>{th.add(t),tb.set(t,Zr())},Px=t=>th.has(t),Fx=()=>[...th.values()],Rx=t=>{let e=tb.get(t);e===void 0&&(e=nb),Kr.has(e)||Kr.set(e,new Set),Kr.get(e).add(t),nh||(nh=setTimeout(()=>{Lx(),Kr=new Map,nh=void 0},1e3))},Lx=()=>{const t=Ax(),e=Zr(),n=t[e];let o="Multiple UI5 Web Components instances detected.";t.length>1&&(o=`${o}
Loading order (versions before 1.1.0 not listed): ${t.map(r=>`
${r.description}`).join("")}`),[...Kr.keys()].forEach(r=>{let i,a;r===nb?(i=1,a={description:"Older unknown runtime"}):(i=$x(e,r),a=t[r]);let s;i>0?s="an older":i<0?s="a newer":s="the same",o=`${o}

"${n.description}" failed to define ${Kr.get(r).size} tag(s) as they were defined by a runtime of ${s} version "${a.description}": ${[...Kr.get(r)].sort().join(", ")}.`,i>0?o=`${o}
WARNING! If your code uses features of the above web components, unavailable in ${a.description}, it might not work as expected!`:o=`${o}
Since the above web components were defined by the same or newer version runtime, they should be compatible with your code.`}),o=`${o}

To prevent other runtimes from defining tags that you use, consider using scoping or have third-party libraries use scoping: https://github.com/SAP/ui5-webcomponents/blob/main/docs/2-advanced/03-scoping.md.`,console.warn(o)},ob=new Set,Nx=t=>{ob.add(t)},Dx=t=>ob.has(t),oh=new Set,Ox=new Xr,na=new Sx;let oa,qu,rh,Gu;const rb=async t=>{na.add(t),await Mx()},ib=t=>{Ox.fireEvent("beforeComponentRender",t),oh.add(t),t._render()},Hx=t=>{na.remove(t),oh.delete(t)},Mx=async()=>{Gu||(Gu=new Promise(t=>{window.requestAnimationFrame(()=>{na.process(ib),Gu=null,t(),rh||(rh=setTimeout(()=>{rh=void 0,na.isEmpty()&&Vx()},200))})})),await Gu},zx=()=>oa||(oa=new Promise(t=>{qu=t,window.requestAnimationFrame(()=>{na.isEmpty()&&(oa=void 0,t())})}),oa),jx=()=>{const t=Fx().map(e=>customElements.whenDefined(e));return Promise.all(t)},Bs=async()=>{await jx(),await zx()},Vx=()=>{na.isEmpty()&&qu&&(qu(),qu=void 0,oa=void 0)},ab=async t=>{oh.forEach(e=>{const n=e.constructor,o=n.getMetadata().getTag(),r=Dx(n),i=n.getMetadata().isLanguageAware(),a=n.getMetadata().isThemeAware();(!t||t.tag===o||t.rtlAware&&r||t.languageAware&&i||t.themeAware&&a)&&rb(e)}),await Bs()},sb=new Xr,lb="themeRegistered",Wx=t=>{sb.attachEvent(lb,t)},Ux=t=>sb.fireEvent(lb,t),ub=new Map,cb=new Map,db=new Set,Yu=new Set,V=(t,e,n)=>{cb.set(`${t}/${e}`,n),db.add(t),Yu.add(e),Ux(e)},_b=async(t,e)=>{const n=ub.get(`${t}_${e}`);if(n!==void 0)return n;if(!Yu.has(e)){const o=[...Yu.values()].join(", ");return console.warn(`You have requested a non-registered theme ${e} - falling back to ${zu}. Registered themes are: ${o}`),pb(t,zu)}return pb(t,e)},pb=async(t,e)=>{const n=cb.get(`${t}/${e}`);if(!n){console.error(`Theme [${e}] not registered for package [${t}]`);return}let o;try{o=await n(e)}catch(i){console.error(t,i.message);return}const r=o._||o;return ub.set(`${t}_${e}`,r),r},hb=()=>db,qx=t=>Yu.has(t),Gx=(t,e)=>{const n=document.createElement("style");return n.type="text/css",e&&Object.entries(e).forEach(o=>n.setAttribute(...o)),n.textContent=t,document.head.appendChild(n),n},Yx=(t,e)=>{const n=document.createElement("link");return n.type="text/css",n.rel="stylesheet",e&&Object.entries(e).forEach(o=>n.setAttribute(...o)),n.href=t,document.head.appendChild(n),new Promise(o=>{n.addEventListener("load",o),n.addEventListener("error",o)})},Xu=(t,e)=>e?`${t}|${e}`:t,Ts=(t,e,n="")=>{let o=typeof t=="string"?t:t.content;if(o.includes("[_ui5host]")&&(o=o.replaceAll("[_ui5host]",`[_ui5rt${Zr()}]`)),document.adoptedStyleSheets){const r=new CSSStyleSheet;r.replaceSync(o),r._ui5StyleId=Xu(e,n),document.adoptedStyleSheets=[...document.adoptedStyleSheets,r]}else{const r={};r[e]=n,Gx(o,r)}},Xx=(t,e,n="")=>{let o=typeof t=="string"?t:t.content;if(o.includes("[_ui5host]")&&(o=o.replaceAll("[_ui5host]",`[_ui5rt${Zr()}]`)),document.adoptedStyleSheets){const r=document.adoptedStyleSheets.find(i=>i._ui5StyleId===Xu(e,n));r&&r.replaceSync(o||"")}else{const r=document.querySelector(`head>style[${e}="${n}"]`);r&&(r.textContent=o||"")}},Is=(t,e="")=>document.adoptedStyleSheets?!!document.adoptedStyleSheets.find(n=>n._ui5StyleId===Xu(t,e)):!!document.querySelector(`head>style[${t}="${e}"]`),Jx=(t,e="")=>{if(document.adoptedStyleSheets)document.adoptedStyleSheets=document.adoptedStyleSheets.filter(n=>n._ui5StyleId!==Xu(t,e));else{const n=document.querySelector(`head > style[${t}="${e}"]`);n?.parentElement?.removeChild(n)}},fb=(t,e,n="")=>{Is(e,n)?Xx(t,e,n):Ts(t,e,n)},ra=new Set,Qx=()=>{let t=document.querySelector(".sapThemeMetaData-Base-baseLib")||document.querySelector(".sapThemeMetaData-UI5-sap-ui-core");if(t)return getComputedStyle(t).backgroundImage;t=document.createElement("span"),t.style.display="none",t.classList.add("sapThemeMetaData-Base-baseLib"),document.body.appendChild(t);let e=getComputedStyle(t).backgroundImage;return e==="none"&&(t.classList.add("sapThemeMetaData-UI5-sap-ui-core"),e=getComputedStyle(t).backgroundImage),document.body.removeChild(t),e},Zx=t=>{const e=/\(["']?data:text\/plain;utf-8,(.*?)['"]?\)$/i.exec(t);if(e&&e.length>=2){let n=e[1];if(n=n.replace(/\\"/g,'"'),n.charAt(0)!=="{"&&n.charAt(n.length-1)!=="}")try{n=decodeURIComponent(n)}catch{ra.has("decode")||(console.warn("Malformed theme metadata string, unable to decodeURIComponent"),ra.add("decode"));return}try{return JSON.parse(n)}catch{ra.has("parse")||(console.warn("Malformed theme metadata string, unable to parse JSON"),ra.add("parse"))}}},Kx=t=>{let e,n;try{e=t.Path.match(/\.([^.]+)\.css_variables$/)[1],n=t.Extends[0]}catch{ra.has("object")||(console.warn("Malformed theme metadata Object",t),ra.add("object"));return}return{themeName:e,baseThemeName:n}},ih=()=>{const t=Qx();if(!t||t==="none")return;const e=Zx(t);if(e)return Kx(e)},ah=new Xr,sh="themeLoaded",eB=t=>{ah.attachEvent(sh,t)},tB=t=>{ah.detachEvent(sh,t)},nB=t=>ah.fireEvent(sh,t);let lh;const gb=()=>(lh===void 0&&(lh=px()),lh),oB=t=>`${gb()}Base/baseLib/${t}/css_variables.css`,rB=async t=>{const e=document.querySelector(`[sap-ui-webcomponents-theme="${t}"]`);e&&document.head.removeChild(e),await Yx(oB(t),{"sap-ui-webcomponents-theme":t})},Ju=()=>{let t=document.activeElement;for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t},uh=Qr("PopupUtilsData",{currentZIndex:100}),vb=()=>{const t=Ju();return t&&typeof t.focus=="function"?t:null},iB=t=>{const e=vb();return e?mb(t,e):!1},mb=(t,e)=>{let n=t;if(n.shadowRoot&&(n=Array.from(n.shadowRoot.children).find(i=>i.localName!=="style"),!n))return!1;if(n===e)return!0;const o=n.localName==="slot"?n.assignedNodes():n.children;return o?Array.from(o).some(r=>mb(r,e)):!1},aB=(t,e,n)=>t>=n.left&&t<=n.right&&e>=n.top&&e<=n.bottom,sB=(t,e)=>{let n,o;if(t instanceof MouseEvent)n=t.clientX,o=t.clientY;else{const r=t.touches[0];n=r.clientX,o=r.clientY}return aB(n,o,e)};function lB(t){return"isUI5Element"in t&&"_show"in t}const bb=t=>{const e=t.parentElement||t.getRootNode&&t.getRootNode().host;return e&&(lB(e)||e===document.documentElement)?e:bb(e)},yb=()=>{const t=Xe("OpenUI5Support");return t&&t.isOpenUI5Detected()?t.getNextZIndex():(uh.currentZIndex+=2,uh.currentZIndex)},Cb=()=>uh.currentZIndex;class Dt{static isAtLeastVersion116(){const n=window.sap.ui.version.split(".");return!n||n.length<2?!1:parseInt(n[0])>1||parseInt(n[1])>=116}static isOpenUI5Detected(){return typeof window.sap?.ui?.require=="function"}static init(){return Dt.isOpenUI5Detected()?new Promise(e=>{window.sap.ui.require(["sap/ui/core/Core"],async n=>{const o=()=>{let r=["sap/ui/core/Popup","sap/ui/core/LocaleData"];Dt.isAtLeastVersion116()&&(r=[...r,"sap/base/i18n/Formatting","sap/base/i18n/Localization","sap/ui/core/ControlBehavior","sap/ui/core/Theming","sap/ui/core/date/CalendarUtils"]),window.sap.ui.require(r,i=>{i.setInitialZIndex(Cb()),e()})};Dt.isAtLeastVersion116()?(await n.ready(),o()):n.attachInit(o)})}):Promise.resolve()}static getConfigurationSettingsObject(){if(!Dt.isOpenUI5Detected())return{};if(Dt.isAtLeastVersion116()){const r=window.sap.ui.require("sap/ui/core/ControlBehavior"),i=window.sap.ui.require("sap/base/i18n/Localization"),a=window.sap.ui.require("sap/ui/core/Theming"),s=window.sap.ui.require("sap/base/i18n/Formatting"),l=window.sap.ui.require("sap/ui/core/date/CalendarUtils");return{animationMode:r.getAnimationMode(),language:i.getLanguage(),theme:a.getTheme(),themeRoot:a.getThemeRoot(),rtl:i.getRTL(),timezone:i.getTimezone(),calendarType:s.getCalendarType(),formatSettings:{firstDayOfWeek:l.getWeekConfigurationValues().firstDayOfWeek,legacyDateCalendarCustomizing:s.getLegacyDateCalendarCustomizing()}}}const n=window.sap.ui.require("sap/ui/core/Core").getConfiguration(),o=window.sap.ui.require("sap/ui/core/LocaleData");return{animationMode:n.getAnimationMode(),language:n.getLanguage(),theme:n.getTheme(),themeRoot:n.getThemeRoot(),rtl:n.getRTL(),timezone:n.getTimezone(),calendarType:n.getCalendarType(),formatSettings:{firstDayOfWeek:o?o.getInstance(n.getLocale()).getFirstDayOfWeek():void 0,legacyDateCalendarCustomizing:n.getFormatSettings().getLegacyDateCalendarCustomizing()}}}static getLocaleDataObject(){if(!Dt.isOpenUI5Detected())return;const e=window.sap.ui.require("sap/ui/core/LocaleData");if(Dt.isAtLeastVersion116()){const r=window.sap.ui.require("sap/base/i18n/Localization");return e.getInstance(r.getLanguageTag())._get()}const o=window.sap.ui.require("sap/ui/core/Core").getConfiguration();return e.getInstance(o.getLocale())._get()}static _listenForThemeChange(){if(Dt.isAtLeastVersion116()){const e=window.sap.ui.require("sap/ui/core/Theming");e.attachApplied(()=>{wb(e.getTheme())})}else{const e=window.sap.ui.require("sap/ui/core/Core"),n=e.getConfiguration();e.attachThemeChanged(()=>{wb(n.getTheme())})}}static attachListeners(){Dt.isOpenUI5Detected()&&Dt._listenForThemeChange()}static cssVariablesLoaded(){if(!Dt.isOpenUI5Detected())return;const e=[...document.head.children].find(n=>n.id==="sap-ui-theme-sap.ui.core");return e?!!e.href.match(/\/css(-|_)variables\.css/):!1}static getNextZIndex(){if(!Dt.isOpenUI5Detected())return;const e=window.sap.ui.require("sap/ui/core/Popup");return e||console.warn(`The OpenUI5Support feature hasn't been initialized properly. Make sure you import the "@ui5/webcomponents-base/dist/features/OpenUI5Support.js" module before all components' modules.`),e.getNextZIndex()}static setInitialZIndex(){if(!Dt.isOpenUI5Detected())return;window.sap.ui.require("sap/ui/core/Popup").setInitialZIndex(Cb())}}Zp("OpenUI5Support",Dt);const $s="@ui5/webcomponents-theming",uB=()=>hb().has($s),cB=async t=>{if(!uB())return;const e=await _b($s,t);e&&fb(e,"data-ui5-theme-properties",$s)},dB=()=>{Jx("data-ui5-theme-properties",$s)},_B=async t=>{const n=[...hb()].map(async o=>{if(o===$s)return;const r=await _b(o,t);r&&fb(r,`data-ui5-component-properties-${Zr()}`,o)});return Promise.all(n)},pB=async t=>{const e=ih();if(e)return e;const n=Xe("OpenUI5Support");if(n&&Dt.isOpenUI5Detected()){if(n.cssVariablesLoaded())return{themeName:n.getConfigurationSettingsObject()?.theme,baseThemeName:""}}else if(gb())return await rB(t),ih()},ch=async t=>{const e=await pB(t);!e||t!==e.themeName?await cB(t):dB();const n=qx(t)?t:e&&e.baseThemeName;await _B(n||zu),nB(t)};let ia;const As=()=>(ia===void 0&&(ia=_x()),ia),wb=async t=>{ia!==t&&(ia=t,await ch(ia),await ab({themeAware:!0}))},Ze=()=>{const t=As();return hB(t)?!t.startsWith("sap_horizon"):!ih()?.baseThemeName?.startsWith("sap_horizon")},hB=t=>ax.includes(t),fB=()=>Qr("CustomStyle.eventProvider",new Xr),gB="CustomCSSChange",dh=t=>{fB().attachEvent(gB,t)},vB=()=>Qr("CustomStyle.customCSSFor",{});dh(t=>{ab({tag:t})});const mB=t=>{const e=vB();return e[t]?e[t].join(""):""},Sb=()=>{const t=navigator.languages,e=()=>navigator.language;return t&&t[0]||e()||ju},kb=new Xr,xb="languageChange",Bb=t=>{kb.attachEvent(xb,t)},bB=t=>{kb.detachEvent(xb,t)};let _h,ph;const Tb=()=>(_h===void 0&&(_h=fx()),_h),yB=t=>{ph=t},CB=()=>(ph===void 0&&yB(gx()),ph),wB=/^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i;class Ib{constructor(e){const n=wB.exec(e.replace(/_/g,"-"));if(n===null)throw new Error(`The given language ${e} does not adhere to BCP-47.`);this.sLocaleId=e,this.sLanguage=n[1]||ju,this.sScript=n[2]||"",this.sRegion=n[3]||"",this.sVariant=n[4]&&n[4].slice(1)||null,this.sExtension=n[5]&&n[5].slice(1)||null,this.sPrivateUse=n[6]||null,this.sLanguage&&(this.sLanguage=this.sLanguage.toLowerCase()),this.sScript&&(this.sScript=this.sScript.toLowerCase().replace(/^[a-z]/,o=>o.toUpperCase())),this.sRegion&&(this.sRegion=this.sRegion.toUpperCase())}getLanguage(){return this.sLanguage}getScript(){return this.sScript}getRegion(){return this.sRegion}getVariant(){return this.sVariant}getVariantSubtags(){return this.sVariant?this.sVariant.split("-"):[]}getExtension(){return this.sExtension}getExtensionSubtags(){return this.sExtension?this.sExtension.slice(2).split("-"):[]}getPrivateUse(){return this.sPrivateUse}getPrivateUseSubtags(){return this.sPrivateUse?this.sPrivateUse.slice(2).split("-"):[]}hasPrivateUseSubtag(e){return this.getPrivateUseSubtags().indexOf(e)>=0}toString(){const e=[this.sLanguage];return this.sScript&&e.push(this.sScript),this.sRegion&&e.push(this.sRegion),this.sVariant&&e.push(this.sVariant),this.sExtension&&e.push(this.sExtension),this.sPrivateUse&&e.push(this.sPrivateUse),e.join("-")}}const hh=new Map,$b=t=>(hh.has(t)||hh.set(t,new Ib(t)),hh.get(t)),Ab=t=>{try{if(t&&typeof t=="string")return $b(t)}catch{}return new Ib(ta)},Eb=t=>{if(t)return Ab(t);const e=Tb();return e?$b(e):Ab(Sb())},SB=/^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i,Pb=/(?:^|-)(saptrc|sappsd)(?:-|$)/i,kB={he:"iw",yi:"ji",nb:"no",sr:"sh"},xB=t=>{let e;if(!t)return ta;if(typeof t=="string"&&(e=SB.exec(t.replace(/_/g,"-")))){let n=e[1].toLowerCase(),o=e[3]?e[3].toUpperCase():void 0;const r=e[2]?e[2].toLowerCase():void 0,i=e[4]?e[4].slice(1):void 0,a=e[6];return n=kB[n]||n,a&&(e=Pb.exec(a))||i&&(e=Pb.exec(i))?`en_US_${e[1].toLowerCase()}`:(n==="zh"&&!o&&(r==="hans"?o="CN":r==="hant"&&(o="TW")),n+(o?"_"+o+(i?"_"+i.replace("-","_"):""):""))}return ta},BB=t=>{if(!t)return ta;if(t==="zh_HK")return"zh_TW";const e=t.lastIndexOf("_");return e>=0?t.slice(0,e):t!==ta?ta:""},Fb=new Set,Rb=new Set,fh=new Map,gh=new Map,Lb=new Map,Nb=(t,e)=>{fh.set(t,e)},TB=t=>fh.get(t),Db=(t,e)=>{const n=`${t}/${e}`;return Lb.has(n)},IB=(t,e)=>{const n=`${t}/${e}`,o=Lb.get(n);return o&&!gh.get(n)&&gh.set(n,o(e)),gh.get(n)},$B=t=>{Fb.has(t)||(console.warn(`[${t}]: Message bundle assets are not configured. Falling back to English texts.`,` Add \`import "${t}/dist/Assets.js"\` in your bundle and make sure your build tool supports dynamic imports and JSON imports. See section "Assets" in the documentation for more information.`),Fb.add(t))},Ob=(t,e)=>e!==ju&&!Db(t,e),Hb=async t=>{const e=Eb().getLanguage(),n=Eb().getRegion();let o=e+(n?`-${n}`:"");if(Ob(t,o))for(o=xB(o);Ob(t,o);)o=BB(o);const r=CB();if(o===ju&&!r){Nb(t,null);return}if(!Db(t,o)){$B(t);return}try{const i=await IB(t,o);Nb(t,i)}catch(i){const a=i;Rb.has(a.message)||(Rb.add(a.message),console.error(a.message))}};Bb(t=>{const e=[...fh.keys()];return Promise.all(e.map(Hb))});const AB=/('')|'([^']+(?:''[^']*)*)(?:'|$)|\{([0-9]+(?:\s*,[^{}]*)?)\}|[{}]/g,EB=(t,e)=>(e=e||[],t.replace(AB,(n,o,r,i,a)=>{if(o)return"'";if(r)return r.replace(/''/g,"'");if(i){const s=typeof i=="string"?parseInt(i):i;return String(e[s])}throw new Error(`[i18n]: pattern syntax error at pos ${a}`)})),vh=new Map;class Mb{constructor(e){this.packageName=e}getText(e,...n){if(typeof e=="string"&&(e={key:e,defaultText:e}),!e||!e.key)return"";const o=TB(this.packageName);o&&!o[e.key]&&console.warn(`Key ${e.key} not found in the i18n bundle, the default text will be used`);const r=o&&o[e.key]?o[e.key]:e.defaultText||e.key;return EB(r,n)}}const PB=t=>{if(vh.has(t))return vh.get(t);const e=new Mb(t);return vh.set(t,e),e},Re=async t=>(await Hb(t),PB(t)),FB=new Mb("defaultBundle"),RB=t=>{const e=Zk();if(!e)throw new Error("'useI18nBundle()' may be used only in the context of a '<ThemeProvider>' component.");const n=ee.useRef(e);return mh(()=>{const{i18nBundles:o,setI18nBundle:r}=n.current;let i=!0;return o.hasOwnProperty(t)||Re(t).then(a=>{i&&r(t,a)},()=>{}),()=>{i=!1}},[t]),e.i18nBundles[t]??FB},mh=typeof window<"u"?ee.useLayoutEffect:ee.useEffect,LB=t=>{const e=/\$([-a-z0-9A-Z._]+)(?::([^$]*))?\$/.exec(t);return e&&e[2]?e[2].split(/,/):null},NB={iw:"he",ji:"yi",in:"id",sh:"sr"},DB=LB("$cldr-rtl-locales:ar,fa,he$")||[],OB=t=>(t=t&&NB[t]||t,DB.indexOf(t)>=0),HB=()=>{if(typeof document>"u")return!1;const t=hx();return t!==void 0?!!t:OB(Tb()||Sb())};function je(){return je=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},je.apply(this,arguments)}function zb(t,e){if(t==null)return{};var n={},o=Object.keys(t),r,i;for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}var jb={exports:{}},ye={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vt=typeof Symbol=="function"&&Symbol.for,bh=vt?Symbol.for("react.element"):60103,yh=vt?Symbol.for("react.portal"):60106,Qu=vt?Symbol.for("react.fragment"):60107,Zu=vt?Symbol.for("react.strict_mode"):60108,Ku=vt?Symbol.for("react.profiler"):60114,ec=vt?Symbol.for("react.provider"):60109,tc=vt?Symbol.for("react.context"):60110,Ch=vt?Symbol.for("react.async_mode"):60111,nc=vt?Symbol.for("react.concurrent_mode"):60111,oc=vt?Symbol.for("react.forward_ref"):60112,rc=vt?Symbol.for("react.suspense"):60113,MB=vt?Symbol.for("react.suspense_list"):60120,ic=vt?Symbol.for("react.memo"):60115,ac=vt?Symbol.for("react.lazy"):60116,zB=vt?Symbol.for("react.block"):60121,jB=vt?Symbol.for("react.fundamental"):60117,VB=vt?Symbol.for("react.responder"):60118,WB=vt?Symbol.for("react.scope"):60119;function bn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case bh:switch(t=t.type,t){case Ch:case nc:case Qu:case Ku:case Zu:case rc:return t;default:switch(t=t&&t.$$typeof,t){case tc:case oc:case ac:case ic:case ec:return t;default:return e}}case yh:return e}}}function Vb(t){return bn(t)===nc}ye.AsyncMode=Ch,ye.ConcurrentMode=nc,ye.ContextConsumer=tc,ye.ContextProvider=ec,ye.Element=bh,ye.ForwardRef=oc,ye.Fragment=Qu,ye.Lazy=ac,ye.Memo=ic,ye.Portal=yh,ye.Profiler=Ku,ye.StrictMode=Zu,ye.Suspense=rc,ye.isAsyncMode=function(t){return Vb(t)||bn(t)===Ch},ye.isConcurrentMode=Vb,ye.isContextConsumer=function(t){return bn(t)===tc},ye.isContextProvider=function(t){return bn(t)===ec},ye.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===bh},ye.isForwardRef=function(t){return bn(t)===oc},ye.isFragment=function(t){return bn(t)===Qu},ye.isLazy=function(t){return bn(t)===ac},ye.isMemo=function(t){return bn(t)===ic},ye.isPortal=function(t){return bn(t)===yh},ye.isProfiler=function(t){return bn(t)===Ku},ye.isStrictMode=function(t){return bn(t)===Zu},ye.isSuspense=function(t){return bn(t)===rc},ye.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Qu||t===nc||t===Ku||t===Zu||t===rc||t===MB||typeof t=="object"&&t!==null&&(t.$$typeof===ac||t.$$typeof===ic||t.$$typeof===ec||t.$$typeof===tc||t.$$typeof===oc||t.$$typeof===jB||t.$$typeof===VB||t.$$typeof===WB||t.$$typeof===zB)},ye.typeOf=bn,jb.exports=ye;var UB=jb.exports,wh=UB,qB={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},GB={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},YB={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Wb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Sh={};Sh[wh.ForwardRef]=YB,Sh[wh.Memo]=Wb;function Ub(t){return wh.isMemo(t)?Wb:Sh[t.$$typeof]||qB}var XB=Object.defineProperty,JB=Object.getOwnPropertyNames,qb=Object.getOwnPropertySymbols,QB=Object.getOwnPropertyDescriptor,ZB=Object.getPrototypeOf,Gb=Object.prototype;function Yb(t,e,n){if(typeof e!="string"){if(Gb){var o=ZB(e);o&&o!==Gb&&Yb(t,o,n)}var r=JB(e);qb&&(r=r.concat(qb(e)));for(var i=Ub(t),a=Ub(e),s=0;s<r.length;++s){var l=r[s];if(!GB[l]&&!(n&&n[l])&&!(a&&a[l])&&!(i&&i[l])){var c=QB(e,l);try{XB(t,l,c)}catch{}}}}return t}var KB=Yb;const eT=nd(KB);var tT=!0;function Xb(t,e){if(!tT){if(t)return;var n="Warning: "+e;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}var Jb={};Object.defineProperty(Jb,"__esModule",{value:!0}),Jb.default=nT;function nT(t){return t.displayName||t.name||(typeof t=="string"&&t.length>0?t:"Unknown")}function sc(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function lc(){return lc=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},lc.apply(this,arguments)}function oT(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function ar(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function rT(t){var e=function(n){oT(o,n);function o(){for(var i,a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return i=n.call.apply(n,[this].concat(s))||this,sc(ar(ar(i)),"cachedTheme",void 0),sc(ar(ar(i)),"lastOuterTheme",void 0),sc(ar(ar(i)),"lastTheme",void 0),sc(ar(ar(i)),"renderProvider",function(c){var _=i.props.children;return F.createElement(t.Provider,{value:i.getTheme(c)},_)}),i}var r=o.prototype;return r.getTheme=function(a){if(this.props.theme!==this.lastTheme||a!==this.lastOuterTheme||!this.cachedTheme)if(this.lastOuterTheme=a,this.lastTheme=this.props.theme,typeof this.lastTheme=="function"){var s=this.props.theme;this.cachedTheme=s(a)}else{var l=this.props.theme;this.cachedTheme=a?lc({},a,l):l}return this.cachedTheme},r.render=function(){var a=this.props.children;return a?F.createElement(t.Consumer,null,this.renderProvider):null},o}(F.Component);return e}function iT(t){return function(n){var o=F.forwardRef(function(r,i){return F.createElement(t.Consumer,null,function(a){return F.createElement(n,lc({theme:a,ref:i},r))})});return eT(o,n),o}}function aT(t){var e=function(){var o=F.useContext(t);return o};return e}function sT(t){return{context:t,withTheme:iT(t),useTheme:aT(t),ThemeProvider:rT(t)}}var Qb=ee.createContext(),lT=sT(Qb),uT=lT.ThemeProvider,Zb=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},aa=(typeof window>"u"?"undefined":Zb(window))==="object"&&(typeof document>"u"?"undefined":Zb(document))==="object"&&document.nodeType===9;function Es(t){"@babel/helpers - typeof";return Es=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Es(t)}function cT(t,e){if(Es(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e||"default");if(Es(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function dT(t){var e=cT(t,"string");return Es(e)==="symbol"?e:String(e)}function Kb(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,dT(o.key),o)}}function kh(t,e,n){return e&&Kb(t.prototype,e),n&&Kb(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function xh(t,e){return xh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,r){return o.__proto__=r,o},xh(t,e)}function ey(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,xh(t,e)}function ty(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var _T={}.constructor;function Bh(t){if(t==null||typeof t!="object")return t;if(Array.isArray(t))return t.map(Bh);if(t.constructor!==_T)return t;var e={};for(var n in t)e[n]=Bh(t[n]);return e}function uc(t,e,n){t===void 0&&(t="unnamed");var o=n.jss,r=Bh(e),i=o.plugins.onCreateRule(t,r,n);return i||(t[0],null)}var ny=function(e,n){for(var o="",r=0;r<e.length&&e[r]!=="!important";r++)o&&(o+=n),o+=e[r];return o},ei=function(e){if(!Array.isArray(e))return e;var n="";if(Array.isArray(e[0]))for(var o=0;o<e.length&&e[o]!=="!important";o++)n&&(n+=", "),n+=ny(e[o]," ");else n=ny(e,", ");return e[e.length-1]==="!important"&&(n+=" !important"),n};function sa(t){return t&&t.format===!1?{linebreak:"",space:""}:{linebreak:`
`,space:" "}}function Ps(t,e){for(var n="",o=0;o<e;o++)n+="  ";return n+t}function Fs(t,e,n){n===void 0&&(n={});var o="";if(!e)return o;var r=n,i=r.indent,a=i===void 0?0:i,s=e.fallbacks;n.format===!1&&(a=-1/0);var l=sa(n),c=l.linebreak,_=l.space;if(t&&a++,s)if(Array.isArray(s))for(var d=0;d<s.length;d++){var v=s[d];for(var b in v){var S=v[b];S!=null&&(o&&(o+=c),o+=Ps(b+":"+_+ei(S)+";",a))}}else for(var x in s){var O=s[x];O!=null&&(o&&(o+=c),o+=Ps(x+":"+_+ei(O)+";",a))}for(var C in e){var g=e[C];g!=null&&C!=="fallbacks"&&(o&&(o+=c),o+=Ps(C+":"+_+ei(g)+";",a))}return!o&&!n.allowEmpty||!t?o:(a--,o&&(o=""+c+o+c),Ps(""+t+_+"{"+o,a)+Ps("}",a))}var pT=/([[\].#*$><+~=|^:(),"'`\s])/g,oy=typeof CSS<"u"&&CSS.escape,Th=function(t){return oy?oy(t):t.replace(pT,"\\$1")},ry=function(){function t(n,o,r){this.type="style",this.isProcessed=!1;var i=r.sheet,a=r.Renderer;this.key=n,this.options=r,this.style=o,i?this.renderer=i.renderer:a&&(this.renderer=new a)}var e=t.prototype;return e.prop=function(o,r,i){if(r===void 0)return this.style[o];var a=i?i.force:!1;if(!a&&this.style[o]===r)return this;var s=r;(!i||i.process!==!1)&&(s=this.options.jss.plugins.onChangeValue(r,o,this));var l=s==null||s===!1,c=o in this.style;if(l&&!c&&!a)return this;var _=l&&c;if(_?delete this.style[o]:this.style[o]=s,this.renderable&&this.renderer)return _?this.renderer.removeProperty(this.renderable,o):this.renderer.setProperty(this.renderable,o,s),this;var d=this.options.sheet;return d&&d.attached,this},t}(),Ih=function(t){ey(e,t);function e(o,r,i){var a;a=t.call(this,o,r,i)||this;var s=i.selector,l=i.scoped,c=i.sheet,_=i.generateId;return s?a.selectorText=s:l!==!1&&(a.id=_(ty(ty(a)),c),a.selectorText="."+Th(a.id)),a}var n=e.prototype;return n.applyTo=function(r){var i=this.renderer;if(i){var a=this.toJSON();for(var s in a)i.setProperty(r,s,a[s])}return this},n.toJSON=function(){var r={};for(var i in this.style){var a=this.style[i];typeof a!="object"?r[i]=a:Array.isArray(a)&&(r[i]=ei(a))}return r},n.toString=function(r){var i=this.options.sheet,a=i?i.options.link:!1,s=a?je({},r,{allowEmpty:!0}):r;return Fs(this.selectorText,this.style,s)},kh(e,[{key:"selector",set:function(r){if(r!==this.selectorText){this.selectorText=r;var i=this.renderer,a=this.renderable;if(!(!a||!i)){var s=i.setSelector(a,r);s||i.replaceRule(a,this)}}},get:function(){return this.selectorText}}]),e}(ry),hT={onCreateRule:function(e,n,o){return e[0]==="@"||o.parent&&o.parent.type==="keyframes"?null:new Ih(e,n,o)}},$h={indent:1,children:!0},fT=/@([\w-]+)/,gT=function(){function t(n,o,r){this.type="conditional",this.isProcessed=!1,this.key=n;var i=n.match(fT);this.at=i?i[1]:"unknown",this.query=r.name||"@"+this.at,this.options=r,this.rules=new cc(je({},r,{parent:this}));for(var a in o)this.rules.add(a,o[a]);this.rules.process()}var e=t.prototype;return e.getRule=function(o){return this.rules.get(o)},e.indexOf=function(o){return this.rules.indexOf(o)},e.addRule=function(o,r,i){var a=this.rules.add(o,r,i);return a?(this.options.jss.plugins.onProcessRule(a),a):null},e.replaceRule=function(o,r,i){var a=this.rules.replace(o,r,i);return a&&this.options.jss.plugins.onProcessRule(a),a},e.toString=function(o){o===void 0&&(o=$h);var r=sa(o),i=r.linebreak;if(o.indent==null&&(o.indent=$h.indent),o.children==null&&(o.children=$h.children),o.children===!1)return this.query+" {}";var a=this.rules.toString(o);return a?this.query+" {"+i+a+i+"}":""},t}(),vT=/@container|@media|@supports\s+/,mT={onCreateRule:function(e,n,o){return vT.test(e)?new gT(e,n,o):null}},Ah={indent:1,children:!0},bT=/@keyframes\s+([\w-]+)/,Eh=function(){function t(n,o,r){this.type="keyframes",this.at="@keyframes",this.isProcessed=!1;var i=n.match(bT);i&&i[1]?this.name=i[1]:this.name="noname",this.key=this.type+"-"+this.name,this.options=r;var a=r.scoped,s=r.sheet,l=r.generateId;this.id=a===!1?this.name:Th(l(this,s)),this.rules=new cc(je({},r,{parent:this}));for(var c in o)this.rules.add(c,o[c],je({},r,{parent:this}));this.rules.process()}var e=t.prototype;return e.toString=function(o){o===void 0&&(o=Ah);var r=sa(o),i=r.linebreak;if(o.indent==null&&(o.indent=Ah.indent),o.children==null&&(o.children=Ah.children),o.children===!1)return this.at+" "+this.id+" {}";var a=this.rules.toString(o);return a&&(a=""+i+a+i),this.at+" "+this.id+" {"+a+"}"},t}(),yT=/@keyframes\s+/,CT=/\$([\w-]+)/g,Ph=function(e,n){return typeof e=="string"?e.replace(CT,function(o,r){return r in n?n[r]:o}):e},iy=function(e,n,o){var r=e[n],i=Ph(r,o);i!==r&&(e[n]=i)},wT={onCreateRule:function(e,n,o){return typeof e=="string"&&yT.test(e)?new Eh(e,n,o):null},onProcessStyle:function(e,n,o){return n.type!=="style"||!o||("animation-name"in e&&iy(e,"animation-name",o.keyframes),"animation"in e&&iy(e,"animation",o.keyframes)),e},onChangeValue:function(e,n,o){var r=o.options.sheet;if(!r)return e;switch(n){case"animation":return Ph(e,r.keyframes);case"animation-name":return Ph(e,r.keyframes);default:return e}}},ST=function(t){ey(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.toString=function(r){var i=this.options.sheet,a=i?i.options.link:!1,s=a?je({},r,{allowEmpty:!0}):r;return Fs(this.key,this.style,s)},e}(ry),kT={onCreateRule:function(e,n,o){return o.parent&&o.parent.type==="keyframes"?new ST(e,n,o):null}},xT=function(){function t(n,o,r){this.type="font-face",this.at="@font-face",this.isProcessed=!1,this.key=n,this.style=o,this.options=r}var e=t.prototype;return e.toString=function(o){var r=sa(o),i=r.linebreak;if(Array.isArray(this.style)){for(var a="",s=0;s<this.style.length;s++)a+=Fs(this.at,this.style[s]),this.style[s+1]&&(a+=i);return a}return Fs(this.at,this.style,o)},t}(),BT=/@font-face/,TT={onCreateRule:function(e,n,o){return BT.test(e)?new xT(e,n,o):null}},IT=function(){function t(n,o,r){this.type="viewport",this.at="@viewport",this.isProcessed=!1,this.key=n,this.style=o,this.options=r}var e=t.prototype;return e.toString=function(o){return Fs(this.key,this.style,o)},t}(),$T={onCreateRule:function(e,n,o){return e==="@viewport"||e==="@-ms-viewport"?new IT(e,n,o):null}},AT=function(){function t(n,o,r){this.type="simple",this.isProcessed=!1,this.key=n,this.value=o,this.options=r}var e=t.prototype;return e.toString=function(o){if(Array.isArray(this.value)){for(var r="",i=0;i<this.value.length;i++)r+=this.key+" "+this.value[i]+";",this.value[i+1]&&(r+=`
`);return r}return this.key+" "+this.value+";"},t}(),ET={"@charset":!0,"@import":!0,"@namespace":!0},PT={onCreateRule:function(e,n,o){return e in ET?new AT(e,n,o):null}},ay=[hT,mT,wT,kT,TT,$T,PT],FT={process:!0},sy={force:!0,process:!0},cc=function(){function t(n){this.map={},this.raw={},this.index=[],this.counter=0,this.options=n,this.classes=n.classes,this.keyframes=n.keyframes}var e=t.prototype;return e.add=function(o,r,i){var a=this.options,s=a.parent,l=a.sheet,c=a.jss,_=a.Renderer,d=a.generateId,v=a.scoped,b=je({classes:this.classes,parent:s,sheet:l,jss:c,Renderer:_,generateId:d,scoped:v,name:o,keyframes:this.keyframes,selector:void 0},i),S=o;o in this.raw&&(S=o+"-d"+this.counter++),this.raw[S]=r,S in this.classes&&(b.selector="."+Th(this.classes[S]));var x=uc(S,r,b);if(!x)return null;this.register(x);var O=b.index===void 0?this.index.length:b.index;return this.index.splice(O,0,x),x},e.replace=function(o,r,i){var a=this.get(o),s=this.index.indexOf(a);a&&this.remove(a);var l=i;return s!==-1&&(l=je({},i,{index:s})),this.add(o,r,l)},e.get=function(o){return this.map[o]},e.remove=function(o){this.unregister(o),delete this.raw[o.key],this.index.splice(this.index.indexOf(o),1)},e.indexOf=function(o){return this.index.indexOf(o)},e.process=function(){var o=this.options.jss.plugins;this.index.slice(0).forEach(o.onProcessRule,o)},e.register=function(o){this.map[o.key]=o,o instanceof Ih?(this.map[o.selector]=o,o.id&&(this.classes[o.key]=o.id)):o instanceof Eh&&this.keyframes&&(this.keyframes[o.name]=o.id)},e.unregister=function(o){delete this.map[o.key],o instanceof Ih?(delete this.map[o.selector],delete this.classes[o.key]):o instanceof Eh&&delete this.keyframes[o.name]},e.update=function(){var o,r,i;if(typeof(arguments.length<=0?void 0:arguments[0])=="string"?(o=arguments.length<=0?void 0:arguments[0],r=arguments.length<=1?void 0:arguments[1],i=arguments.length<=2?void 0:arguments[2]):(r=arguments.length<=0?void 0:arguments[0],i=arguments.length<=1?void 0:arguments[1],o=null),o)this.updateOne(this.get(o),r,i);else for(var a=0;a<this.index.length;a++)this.updateOne(this.index[a],r,i)},e.updateOne=function(o,r,i){i===void 0&&(i=FT);var a=this.options,s=a.jss.plugins,l=a.sheet;if(o.rules instanceof t){o.rules.update(r,i);return}var c=o.style;if(s.onUpdate(r,o,l,i),i.process&&c&&c!==o.style){s.onProcessStyle(o.style,o,l);for(var _ in o.style){var d=o.style[_],v=c[_];d!==v&&o.prop(_,d,sy)}for(var b in c){var S=o.style[b],x=c[b];S==null&&S!==x&&o.prop(b,null,sy)}}},e.toString=function(o){for(var r="",i=this.options.sheet,a=i?i.options.link:!1,s=sa(o),l=s.linebreak,c=0;c<this.index.length;c++){var _=this.index[c],d=_.toString(o);!d&&!a||(r&&(r+=l),r+=d)}return r},t}(),ly=function(){function t(n,o){this.attached=!1,this.deployed=!1,this.classes={},this.keyframes={},this.options=je({},o,{sheet:this,parent:this,classes:this.classes,keyframes:this.keyframes}),o.Renderer&&(this.renderer=new o.Renderer(this)),this.rules=new cc(this.options);for(var r in n)this.rules.add(r,n[r]);this.rules.process()}var e=t.prototype;return e.attach=function(){return this.attached?this:(this.renderer&&this.renderer.attach(),this.attached=!0,this.deployed||this.deploy(),this)},e.detach=function(){return this.attached?(this.renderer&&this.renderer.detach(),this.attached=!1,this):this},e.addRule=function(o,r,i){var a=this.queue;this.attached&&!a&&(this.queue=[]);var s=this.rules.add(o,r,i);return s?(this.options.jss.plugins.onProcessRule(s),this.attached?(this.deployed&&(a?a.push(s):(this.insertRule(s),this.queue&&(this.queue.forEach(this.insertRule,this),this.queue=void 0))),s):(this.deployed=!1,s)):null},e.replaceRule=function(o,r,i){var a=this.rules.get(o);if(!a)return this.addRule(o,r,i);var s=this.rules.replace(o,r,i);return s&&this.options.jss.plugins.onProcessRule(s),this.attached?(this.deployed&&this.renderer&&(s?a.renderable&&this.renderer.replaceRule(a.renderable,s):this.renderer.deleteRule(a)),s):(this.deployed=!1,s)},e.insertRule=function(o){this.renderer&&this.renderer.insertRule(o)},e.addRules=function(o,r){var i=[];for(var a in o){var s=this.addRule(a,o[a],r);s&&i.push(s)}return i},e.getRule=function(o){return this.rules.get(o)},e.deleteRule=function(o){var r=typeof o=="object"?o:this.rules.get(o);return!r||this.attached&&!r.renderable?!1:(this.rules.remove(r),this.attached&&r.renderable&&this.renderer?this.renderer.deleteRule(r.renderable):!0)},e.indexOf=function(o){return this.rules.indexOf(o)},e.deploy=function(){return this.renderer&&this.renderer.deploy(),this.deployed=!0,this},e.update=function(){var o;return(o=this.rules).update.apply(o,arguments),this},e.updateOne=function(o,r,i){return this.rules.updateOne(o,r,i),this},e.toString=function(o){return this.rules.toString(o)},t}(),RT=function(){function t(){this.plugins={internal:[],external:[]},this.registry={}}var e=t.prototype;return e.onCreateRule=function(o,r,i){for(var a=0;a<this.registry.onCreateRule.length;a++){var s=this.registry.onCreateRule[a](o,r,i);if(s)return s}return null},e.onProcessRule=function(o){if(!o.isProcessed){for(var r=o.options.sheet,i=0;i<this.registry.onProcessRule.length;i++)this.registry.onProcessRule[i](o,r);o.style&&this.onProcessStyle(o.style,o,r),o.isProcessed=!0}},e.onProcessStyle=function(o,r,i){for(var a=0;a<this.registry.onProcessStyle.length;a++)r.style=this.registry.onProcessStyle[a](r.style,r,i)},e.onProcessSheet=function(o){for(var r=0;r<this.registry.onProcessSheet.length;r++)this.registry.onProcessSheet[r](o)},e.onUpdate=function(o,r,i,a){for(var s=0;s<this.registry.onUpdate.length;s++)this.registry.onUpdate[s](o,r,i,a)},e.onChangeValue=function(o,r,i){for(var a=o,s=0;s<this.registry.onChangeValue.length;s++)a=this.registry.onChangeValue[s](a,r,i);return a},e.use=function(o,r){r===void 0&&(r={queue:"external"});var i=this.plugins[r.queue];i.indexOf(o)===-1&&(i.push(o),this.registry=[].concat(this.plugins.external,this.plugins.internal).reduce(function(a,s){for(var l in s)l in a&&a[l].push(s[l]);return a},{onCreateRule:[],onProcessRule:[],onProcessStyle:[],onProcessSheet:[],onChangeValue:[],onUpdate:[]}))},t}(),LT=function(){function t(){this.registry=[]}var e=t.prototype;return e.add=function(o){var r=this.registry,i=o.options.index;if(r.indexOf(o)===-1){if(r.length===0||i>=this.index){r.push(o);return}for(var a=0;a<r.length;a++)if(r[a].options.index>i){r.splice(a,0,o);return}}},e.reset=function(){this.registry=[]},e.remove=function(o){var r=this.registry.indexOf(o);this.registry.splice(r,1)},e.toString=function(o){for(var r=o===void 0?{}:o,i=r.attached,a=zb(r,["attached"]),s=sa(a),l=s.linebreak,c="",_=0;_<this.registry.length;_++){var d=this.registry[_];i!=null&&d.attached!==i||(c&&(c+=l),c+=d.toString(a))}return c},kh(t,[{key:"index",get:function(){return this.registry.length===0?0:this.registry[this.registry.length-1].options.index}}]),t}(),Rs=new LT,Fh=typeof globalThis<"u"?globalThis:typeof window<"u"&&window.Math===Math?window:typeof self<"u"&&self.Math===Math?self:Function("return this")(),Rh="2f1acc6c3a606b082e5eef5e54414ffb";Fh[Rh]==null&&(Fh[Rh]=0);var uy=Fh[Rh]++,cy=function(e){e===void 0&&(e={});var n=0,o=function(i,a){n+=1;var s="",l="";return a&&(a.options.classNamePrefix&&(l=a.options.classNamePrefix),a.options.jss.id!=null&&(s=String(a.options.jss.id))),e.minify?""+(l||"c")+uy+s+n:l+i.key+"-"+uy+(s?"-"+s:"")+"-"+n};return o},dy=function(e){var n;return function(){return n||(n=e()),n}},NT=function(e,n){try{return e.attributeStyleMap?e.attributeStyleMap.get(n):e.style.getPropertyValue(n)}catch{return""}},DT=function(e,n,o){try{var r=o;if(Array.isArray(o)&&(r=ei(o)),e.attributeStyleMap)e.attributeStyleMap.set(n,r);else{var i=r?r.indexOf("!important"):-1,a=i>-1?r.substr(0,i-1):r;e.style.setProperty(n,a,i>-1?"important":"")}}catch{return!1}return!0},OT=function(e,n){try{e.attributeStyleMap?e.attributeStyleMap.delete(n):e.style.removeProperty(n)}catch{}},HT=function(e,n){return e.selectorText=n,e.selectorText===n},_y=dy(function(){return document.querySelector("head")});function MT(t,e){for(var n=0;n<t.length;n++){var o=t[n];if(o.attached&&o.options.index>e.index&&o.options.insertionPoint===e.insertionPoint)return o}return null}function zT(t,e){for(var n=t.length-1;n>=0;n--){var o=t[n];if(o.attached&&o.options.insertionPoint===e.insertionPoint)return o}return null}function jT(t){for(var e=_y(),n=0;n<e.childNodes.length;n++){var o=e.childNodes[n];if(o.nodeType===8&&o.nodeValue.trim()===t)return o}return null}function VT(t){var e=Rs.registry;if(e.length>0){var n=MT(e,t);if(n&&n.renderer)return{parent:n.renderer.element.parentNode,node:n.renderer.element};if(n=zT(e,t),n&&n.renderer)return{parent:n.renderer.element.parentNode,node:n.renderer.element.nextSibling}}var o=t.insertionPoint;if(o&&typeof o=="string"){var r=jT(o);if(r)return{parent:r.parentNode,node:r.nextSibling}}return!1}function WT(t,e){var n=e.insertionPoint,o=VT(e);if(o!==!1&&o.parent){o.parent.insertBefore(t,o.node);return}if(n&&typeof n.nodeType=="number"){var r=n,i=r.parentNode;i&&i.insertBefore(t,r.nextSibling);return}_y().appendChild(t)}var UT=dy(function(){var t=document.querySelector('meta[property="csp-nonce"]');return t?t.getAttribute("content"):null}),py=function(e,n,o){try{"insertRule"in e?e.insertRule(n,o):"appendRule"in e&&e.appendRule(n)}catch{return!1}return e.cssRules[o]},hy=function(e,n){var o=e.cssRules.length;return n===void 0||n>o?o:n},qT=function(){var e=document.createElement("style");return e.textContent=`
`,e},GT=function(){function t(n){this.getPropertyValue=NT,this.setProperty=DT,this.removeProperty=OT,this.setSelector=HT,this.hasInsertedRules=!1,this.cssRules=[],n&&Rs.add(n),this.sheet=n;var o=this.sheet?this.sheet.options:{},r=o.media,i=o.meta,a=o.element;this.element=a||qT(),this.element.setAttribute("data-jss",""),r&&this.element.setAttribute("media",r),i&&this.element.setAttribute("data-meta",i);var s=UT();s&&this.element.setAttribute("nonce",s)}var e=t.prototype;return e.attach=function(){if(!(this.element.parentNode||!this.sheet)){WT(this.element,this.sheet.options);var o=!!(this.sheet&&this.sheet.deployed);this.hasInsertedRules&&o&&(this.hasInsertedRules=!1,this.deploy())}},e.detach=function(){if(this.sheet){var o=this.element.parentNode;o&&o.removeChild(this.element),this.sheet.options.link&&(this.cssRules=[],this.element.textContent=`
`)}},e.deploy=function(){var o=this.sheet;if(o){if(o.options.link){this.insertRules(o.rules);return}this.element.textContent=`
`+o.toString()+`
`}},e.insertRules=function(o,r){for(var i=0;i<o.index.length;i++)this.insertRule(o.index[i],i,r)},e.insertRule=function(o,r,i){if(i===void 0&&(i=this.element.sheet),o.rules){var a=o,s=i;if(o.type==="conditional"||o.type==="keyframes"){var l=hy(i,r);if(s=py(i,a.toString({children:!1}),l),s===!1)return!1;this.refCssRule(o,l,s)}return this.insertRules(a.rules,s),s}var c=o.toString();if(!c)return!1;var _=hy(i,r),d=py(i,c,_);return d===!1?!1:(this.hasInsertedRules=!0,this.refCssRule(o,_,d),d)},e.refCssRule=function(o,r,i){o.renderable=i,o.options.parent instanceof ly&&this.cssRules.splice(r,0,i)},e.deleteRule=function(o){var r=this.element.sheet,i=this.indexOf(o);return i===-1?!1:(r.deleteRule(i),this.cssRules.splice(i,1),!0)},e.indexOf=function(o){return this.cssRules.indexOf(o)},e.replaceRule=function(o,r){var i=this.indexOf(o);return i===-1?!1:(this.element.sheet.deleteRule(i),this.cssRules.splice(i,1),this.insertRule(r,i))},e.getRules=function(){return this.element.sheet.cssRules},t}(),YT=0,XT=function(){function t(n){this.id=YT++,this.version="10.10.0",this.plugins=new RT,this.options={id:{minify:!1},createGenerateId:cy,Renderer:aa?GT:null,plugins:[]},this.generateId=cy({minify:!1});for(var o=0;o<ay.length;o++)this.plugins.use(ay[o],{queue:"internal"});this.setup(n)}var e=t.prototype;return e.setup=function(o){return o===void 0&&(o={}),o.createGenerateId&&(this.options.createGenerateId=o.createGenerateId),o.id&&(this.options.id=je({},this.options.id,o.id)),(o.createGenerateId||o.id)&&(this.generateId=this.options.createGenerateId(this.options.id)),o.insertionPoint!=null&&(this.options.insertionPoint=o.insertionPoint),"Renderer"in o&&(this.options.Renderer=o.Renderer),o.plugins&&this.use.apply(this,o.plugins),this},e.createStyleSheet=function(o,r){r===void 0&&(r={});var i=r,a=i.index;typeof a!="number"&&(a=Rs.index===0?0:Rs.index+1);var s=new ly(o,je({},r,{jss:this,generateId:r.generateId||this.generateId,insertionPoint:this.options.insertionPoint,Renderer:this.options.Renderer,index:a}));return this.plugins.onProcessSheet(s),s},e.removeStyleSheet=function(o){return o.detach(),Rs.remove(o),this},e.createRule=function(o,r,i){if(r===void 0&&(r={}),i===void 0&&(i={}),typeof o=="object")return this.createRule(void 0,o,r);var a=je({},i,{name:o,jss:this,Renderer:this.options.Renderer});a.generateId||(a.generateId=this.generateId),a.classes||(a.classes={}),a.keyframes||(a.keyframes={});var s=uc(o,r,a);return s&&this.plugins.onProcessRule(s),s},e.use=function(){for(var o=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return i.forEach(function(s){o.plugins.use(s)}),this},t}(),fy=function(e){return new XT(e)},gy=function(){function t(){this.length=0,this.sheets=new WeakMap}var e=t.prototype;return e.get=function(o){var r=this.sheets.get(o);return r&&r.sheet},e.add=function(o,r){this.sheets.has(o)||(this.length++,this.sheets.set(o,{sheet:r,refs:0}))},e.manage=function(o){var r=this.sheets.get(o);if(r)return r.refs===0&&r.sheet.attach(),r.refs++,r.sheet;Xb(!1,"[JSS] SheetsManager: can't find sheet to manage")},e.unmanage=function(o){var r=this.sheets.get(o);r?r.refs>0&&(r.refs--,r.refs===0&&r.sheet.detach()):Xb(!1,"SheetsManager: can't find sheet to unmanage")},kh(t,[{key:"size",get:function(){return this.length}}]),t}(),Lh=typeof CSS=="object"&&CSS!=null&&"number"in CSS;function vy(t){var e=null;for(var n in t){var o=t[n],r=typeof o;if(r==="function")e||(e={}),e[n]=o;else if(r==="object"&&o!==null&&!Array.isArray(o)){var i=vy(o);i&&(e||(e={}),e[n]=i)}}return e}/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */fy();var my=Date.now(),Nh="fnValues"+my,Dh="fnStyle"+ ++my,JT=function(){return{onCreateRule:function(n,o,r){if(typeof o!="function")return null;var i=uc(n,{},r);return i[Dh]=o,i},onProcessStyle:function(n,o){if(Nh in o||Dh in o)return n;var r={};for(var i in n){var a=n[i];typeof a=="function"&&(delete n[i],r[i]=a)}return o[Nh]=r,n},onUpdate:function(n,o,r,i){var a=o,s=a[Dh];s&&(a.style=s(n)||{});var l=a[Nh];if(l)for(var c in l)a.prop(c,l[c](n),i)}}};const QT=JT;function ZT(t){var e,n=t.Symbol;return typeof n=="function"?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}var la;typeof self<"u"?la=self:typeof window<"u"?la=window:typeof global<"u"?la=global:typeof module<"u"?la=module:la=Function("return this")();var by=ZT(la),yy=function(e){return e&&e[by]&&e===e[by]()},KT=function(e){return{onCreateRule:function(o,r,i){if(!yy(r))return null;var a=r,s=uc(o,{},i);return a.subscribe(function(l){for(var c in l)s.prop(c,l[c],e)}),s},onProcessRule:function(o){if(!(o&&o.type!=="style")){var r=o,i=r.style,a=function(_){var d=i[_];if(!yy(d))return"continue";delete i[_],d.subscribe({next:function(b){r.prop(_,b,e)}})};for(var s in i)var l=a(s)}}}};const eI=KT;var tI=/;\n/,nI=function(e){for(var n={},o=e.split(tI),r=0;r<o.length;r++){var i=(o[r]||"").trim();if(i){var a=i.indexOf(":");if(a!==-1){var s=i.substr(0,a).trim(),l=i.substr(a+1).trim();n[s]=l}}}return n},oI=function(e){typeof e.style=="string"&&(e.style=nI(e.style))};function rI(){return{onProcessRule:oI}}var sr="@global",Oh="@global ",iI=function(){function t(n,o,r){this.type="global",this.at=sr,this.isProcessed=!1,this.key=n,this.options=r,this.rules=new cc(je({},r,{parent:this}));for(var i in o)this.rules.add(i,o[i]);this.rules.process()}var e=t.prototype;return e.getRule=function(o){return this.rules.get(o)},e.addRule=function(o,r,i){var a=this.rules.add(o,r,i);return a&&this.options.jss.plugins.onProcessRule(a),a},e.replaceRule=function(o,r,i){var a=this.rules.replace(o,r,i);return a&&this.options.jss.plugins.onProcessRule(a),a},e.indexOf=function(o){return this.rules.indexOf(o)},e.toString=function(o){return this.rules.toString(o)},t}(),aI=function(){function t(n,o,r){this.type="global",this.at=sr,this.isProcessed=!1,this.key=n,this.options=r;var i=n.substr(Oh.length);this.rule=r.jss.createRule(i,o,je({},r,{parent:this}))}var e=t.prototype;return e.toString=function(o){return this.rule?this.rule.toString(o):""},t}(),sI=/\s*,\s*/g;function Cy(t,e){for(var n=t.split(sI),o="",r=0;r<n.length;r++)o+=e+" "+n[r].trim(),n[r+1]&&(o+=", ");return o}function lI(t,e){var n=t.options,o=t.style,r=o?o[sr]:null;if(r){for(var i in r)e.addRule(i,r[i],je({},n,{selector:Cy(i,t.selector)}));delete o[sr]}}function uI(t,e){var n=t.options,o=t.style;for(var r in o)if(!(r[0]!=="@"||r.substr(0,sr.length)!==sr)){var i=Cy(r.substr(sr.length),t.selector);e.addRule(i,o[r],je({},n,{selector:i})),delete o[r]}}function cI(){function t(n,o,r){if(!n)return null;if(n===sr)return new iI(n,o,r);if(n[0]==="@"&&n.substr(0,Oh.length)===Oh)return new aI(n,o,r);var i=r.parent;return i&&(i.type==="global"||i.options.parent&&i.options.parent.type==="global")&&(r.scoped=!1),!r.selector&&r.scoped===!1&&(r.selector=n),null}function e(n,o){n.type!=="style"||!o||(lI(n,o),uI(n,o))}return{onCreateRule:t,onProcessRule:e}}var dc=function(e){return e&&typeof e=="object"&&!Array.isArray(e)},Hh="extendCurrValue"+Date.now();function dI(t,e,n,o){var r=typeof t.extend;if(r==="string"){if(!n)return;var i=n.getRule(t.extend);if(!i||i===e)return;var a=i.options.parent;if(a){var s=a.rules.raw[t.extend];ti(s,e,n,o)}return}if(Array.isArray(t.extend)){for(var l=0;l<t.extend.length;l++){var c=t.extend[l],_=typeof c=="string"?je({},t,{extend:c}):t.extend[l];ti(_,e,n,o)}return}for(var d in t.extend){if(d==="extend"){ti(t.extend.extend,e,n,o);continue}if(dc(t.extend[d])){d in o||(o[d]={}),ti(t.extend[d],e,n,o[d]);continue}o[d]=t.extend[d]}}function _I(t,e,n,o){for(var r in t)if(r!=="extend"){if(dc(o[r])&&dc(t[r])){ti(t[r],e,n,o[r]);continue}if(dc(t[r])){o[r]=ti(t[r],e,n);continue}o[r]=t[r]}}function ti(t,e,n,o){return o===void 0&&(o={}),dI(t,e,n,o),_I(t,e,n,o),o}function pI(){function t(n,o,r){return"extend"in n?ti(n,o,r):n}function e(n,o,r){if(o!=="extend")return n;if(n==null||n===!1){for(var i in r[Hh])r.prop(i,null);return r[Hh]=null,null}if(typeof n=="object"){for(var a in n)r.prop(a,n[a]);r[Hh]=n}return null}return{onProcessStyle:t,onChangeValue:e}}var wy=/\s*,\s*/g,hI=/&/g,fI=/\$([\w-]+)/g;function gI(){function t(r,i){return function(a,s){var l=r.getRule(s)||i&&i.getRule(s);return l?l.selector:s}}function e(r,i){for(var a=i.split(wy),s=r.split(wy),l="",c=0;c<a.length;c++)for(var _=a[c],d=0;d<s.length;d++){var v=s[d];l&&(l+=", "),l+=v.indexOf("&")!==-1?v.replace(hI,_):_+" "+v}return l}function n(r,i,a){if(a)return je({},a,{index:a.index+1});var s=r.options.nestingLevel;s=s===void 0?1:s+1;var l=je({},r.options,{nestingLevel:s,index:i.indexOf(r)+1});return delete l.name,l}function o(r,i,a){if(i.type!=="style")return r;var s=i,l=s.options.parent,c,_;for(var d in r){var v=d.indexOf("&")!==-1,b=d[0]==="@";if(!(!v&&!b)){if(c=n(s,l,c),v){var S=e(d,s.selector);_||(_=t(l,a)),S=S.replace(fI,_);var x=s.key+"-"+d;"replaceRule"in l?l.replaceRule(x,r[d],je({},c,{selector:S})):l.addRule(x,r[d],je({},c,{selector:S}))}else b&&l.addRule(d,{},c).addRule(s.key,r[d],{selector:s.selector});delete r[d]}}return r}return{onProcessStyle:o}}function Mh(t,e){if(!e)return!0;if(Array.isArray(e)){for(var n=0;n<e.length;n++){var o=Mh(t,e[n]);if(!o)return!1}return!0}if(e.indexOf(" ")>-1)return Mh(t,e.split(" "));var r=t.options.parent;if(e[0]==="$"){var i=r.getRule(e.substr(1));return!i||i===t?!1:(r.classes[t.key]+=" "+r.classes[i.key],!0)}return r.classes[t.key]+=" "+e,!0}function vI(){function t(e,n){return"composes"in e&&(Mh(n,e.composes),delete e.composes),e}return{onProcessStyle:t}}var mI=/[A-Z]/g,bI=/^ms-/,zh={};function yI(t){return"-"+t.toLowerCase()}function Sy(t){if(zh.hasOwnProperty(t))return zh[t];var e=t.replace(mI,yI);return zh[t]=bI.test(e)?"-"+e:e}function _c(t){var e={};for(var n in t){var o=n.indexOf("--")===0?n:Sy(n);e[o]=t[n]}return t.fallbacks&&(Array.isArray(t.fallbacks)?e.fallbacks=t.fallbacks.map(_c):e.fallbacks=_c(t.fallbacks)),e}function CI(){function t(n){if(Array.isArray(n)){for(var o=0;o<n.length;o++)n[o]=_c(n[o]);return n}return _c(n)}function e(n,o,r){if(o.indexOf("--")===0)return n;var i=Sy(o);return o===i?n:(r.prop(i,n),null)}return{onProcessStyle:t,onChangeValue:e}}var A=Lh&&CSS?CSS.px:"px",pc=Lh&&CSS?CSS.ms:"ms",ua=Lh&&CSS?CSS.percent:"%",wI={"animation-delay":pc,"animation-duration":pc,"background-position":A,"background-position-x":A,"background-position-y":A,"background-size":A,border:A,"border-bottom":A,"border-bottom-left-radius":A,"border-bottom-right-radius":A,"border-bottom-width":A,"border-left":A,"border-left-width":A,"border-radius":A,"border-right":A,"border-right-width":A,"border-top":A,"border-top-left-radius":A,"border-top-right-radius":A,"border-top-width":A,"border-width":A,"border-block":A,"border-block-end":A,"border-block-end-width":A,"border-block-start":A,"border-block-start-width":A,"border-block-width":A,"border-inline":A,"border-inline-end":A,"border-inline-end-width":A,"border-inline-start":A,"border-inline-start-width":A,"border-inline-width":A,"border-start-start-radius":A,"border-start-end-radius":A,"border-end-start-radius":A,"border-end-end-radius":A,margin:A,"margin-bottom":A,"margin-left":A,"margin-right":A,"margin-top":A,"margin-block":A,"margin-block-end":A,"margin-block-start":A,"margin-inline":A,"margin-inline-end":A,"margin-inline-start":A,padding:A,"padding-bottom":A,"padding-left":A,"padding-right":A,"padding-top":A,"padding-block":A,"padding-block-end":A,"padding-block-start":A,"padding-inline":A,"padding-inline-end":A,"padding-inline-start":A,"mask-position-x":A,"mask-position-y":A,"mask-size":A,height:A,width:A,"min-height":A,"max-height":A,"min-width":A,"max-width":A,bottom:A,left:A,top:A,right:A,inset:A,"inset-block":A,"inset-block-end":A,"inset-block-start":A,"inset-inline":A,"inset-inline-end":A,"inset-inline-start":A,"box-shadow":A,"text-shadow":A,"column-gap":A,"column-rule":A,"column-rule-width":A,"column-width":A,"font-size":A,"font-size-delta":A,"letter-spacing":A,"text-decoration-thickness":A,"text-indent":A,"text-stroke":A,"text-stroke-width":A,"word-spacing":A,motion:A,"motion-offset":A,outline:A,"outline-offset":A,"outline-width":A,perspective:A,"perspective-origin-x":ua,"perspective-origin-y":ua,"transform-origin":ua,"transform-origin-x":ua,"transform-origin-y":ua,"transform-origin-z":ua,"transition-delay":pc,"transition-duration":pc,"vertical-align":A,"flex-basis":A,"shape-margin":A,size:A,gap:A,grid:A,"grid-gap":A,"row-gap":A,"grid-row-gap":A,"grid-column-gap":A,"grid-template-rows":A,"grid-template-columns":A,"grid-auto-rows":A,"grid-auto-columns":A,"box-shadow-x":A,"box-shadow-y":A,"box-shadow-blur":A,"box-shadow-spread":A,"font-line-height":A,"text-shadow-x":A,"text-shadow-y":A,"text-shadow-blur":A};function ky(t){var e=/(-[a-z])/g,n=function(a){return a[1].toUpperCase()},o={};for(var r in t)o[r]=t[r],o[r.replace(e,n)]=t[r];return o}var SI=ky(wI);function Ls(t,e,n){if(e==null)return e;if(Array.isArray(e))for(var o=0;o<e.length;o++)e[o]=Ls(t,e[o],n);else if(typeof e=="object")if(t==="fallbacks")for(var r in e)e[r]=Ls(r,e[r],n);else for(var i in e)e[i]=Ls(t+"-"+i,e[i],n);else if(typeof e=="number"&&isNaN(e)===!1){var a=n[t]||SI[t];return a&&!(e===0&&a===A)?typeof a=="function"?a(e).toString():""+e+a:e.toString()}return e}function kI(t){t===void 0&&(t={});var e=ky(t);function n(r,i){if(i.type!=="style")return r;for(var a in r)r[a]=Ls(a,r[a],e);return r}function o(r,i){return Ls(i,r,e)}return{onProcessStyle:n,onChangeValue:o}}var xI={"background-size":!0,"background-position":!0,border:!0,"border-bottom":!0,"border-left":!0,"border-top":!0,"border-right":!0,"border-radius":!0,"border-image":!0,"border-width":!0,"border-style":!0,"border-color":!0,"box-shadow":!0,flex:!0,margin:!0,padding:!0,outline:!0,"transform-origin":!0,transform:!0,transition:!0},BI={position:!0,size:!0},hc={padding:{top:0,right:0,bottom:0,left:0},margin:{top:0,right:0,bottom:0,left:0},background:{attachment:null,color:null,image:null,position:null,repeat:null},border:{width:null,style:null,color:null},"border-top":{width:null,style:null,color:null},"border-right":{width:null,style:null,color:null},"border-bottom":{width:null,style:null,color:null},"border-left":{width:null,style:null,color:null},outline:{width:null,style:null,color:null},"list-style":{type:null,position:null,image:null},transition:{property:null,duration:null,"timing-function":null,timingFunction:null,delay:null},animation:{name:null,duration:null,"timing-function":null,timingFunction:null,delay:null,"iteration-count":null,iterationCount:null,direction:null,"fill-mode":null,fillMode:null,"play-state":null,playState:null},"box-shadow":{x:0,y:0,blur:0,spread:0,color:null,inset:null},"text-shadow":{x:0,y:0,blur:null,color:null}},jh={border:{radius:"border-radius",image:"border-image",width:"border-width",style:"border-style",color:"border-color"},"border-bottom":{width:"border-bottom-width",style:"border-bottom-style",color:"border-bottom-color"},"border-top":{width:"border-top-width",style:"border-top-style",color:"border-top-color"},"border-left":{width:"border-left-width",style:"border-left-style",color:"border-left-color"},"border-right":{width:"border-right-width",style:"border-right-style",color:"border-right-color"},background:{size:"background-size",image:"background-image"},font:{style:"font-style",variant:"font-variant",weight:"font-weight",stretch:"font-stretch",size:"font-size",family:"font-family",lineHeight:"line-height","line-height":"line-height"},flex:{grow:"flex-grow",basis:"flex-basis",direction:"flex-direction",wrap:"flex-wrap",flow:"flex-flow",shrink:"flex-shrink"},align:{self:"align-self",items:"align-items",content:"align-content"},grid:{"template-columns":"grid-template-columns",templateColumns:"grid-template-columns","template-rows":"grid-template-rows",templateRows:"grid-template-rows","template-areas":"grid-template-areas",templateAreas:"grid-template-areas",template:"grid-template","auto-columns":"grid-auto-columns",autoColumns:"grid-auto-columns","auto-rows":"grid-auto-rows",autoRows:"grid-auto-rows","auto-flow":"grid-auto-flow",autoFlow:"grid-auto-flow",row:"grid-row",column:"grid-column","row-start":"grid-row-start",rowStart:"grid-row-start","row-end":"grid-row-end",rowEnd:"grid-row-end","column-start":"grid-column-start",columnStart:"grid-column-start","column-end":"grid-column-end",columnEnd:"grid-column-end",area:"grid-area",gap:"grid-gap","row-gap":"grid-row-gap",rowGap:"grid-row-gap","column-gap":"grid-column-gap",columnGap:"grid-column-gap"}};function TI(t,e,n){return t.map(function(o){return By(o,e,n,!1,!0)})}function xy(t,e,n,o){return n[e]==null?t:t.length===0?[]:Array.isArray(t[0])?xy(t[0],e,n,o):typeof t[0]=="object"?TI(t,e,o):[t]}function By(t,e,n,o,r){if(!(hc[e]||jh[e]))return[];var i=[];if(jh[e]&&(t=II(t,n,jh[e],o)),Object.keys(t).length)for(var a in hc[e]){if(t[a]){Array.isArray(t[a])?i.push(BI[a]===null?t[a]:t[a].join(" ")):i.push(t[a]);continue}hc[e][a]!=null&&i.push(hc[e][a])}return!i.length||r?i:[i]}function II(t,e,n,o){for(var r in n){var i=n[r];if(typeof t[r]<"u"&&(o||!e.prop(i))){var a,s=Ns((a={},a[i]=t[r],a),e)[i];o?e.style.fallbacks[i]=s:e.style[i]=s}delete t[r]}return t}function Ns(t,e,n){for(var o in t){var r=t[o];if(Array.isArray(r)){if(!Array.isArray(r[0])){if(o==="fallbacks"){for(var i=0;i<t.fallbacks.length;i++)t.fallbacks[i]=Ns(t.fallbacks[i],e,!0);continue}t[o]=xy(r,o,xI,e),t[o].length||delete t[o]}}else if(typeof r=="object"){if(o==="fallbacks"){t.fallbacks=Ns(t.fallbacks,e,!0);continue}t[o]=By(r,o,e,n),t[o].length||delete t[o]}else t[o]===""&&delete t[o]}return t}function $I(){function t(e,n){if(!e||n.type!=="style")return e;if(Array.isArray(e)){for(var o=0;o<e.length;o++)e[o]=Ns(e[o],n);return e}return Ns(e,n)}return{onProcessStyle:t}}function Vh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function AI(t){if(Array.isArray(t))return Vh(t)}function EI(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function PI(t,e){if(t){if(typeof t=="string")return Vh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Vh(t,e)}}function FI(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function RI(t){return AI(t)||EI(t)||PI(t)||FI()}var Ds="",Wh="",Ty="",Iy="",LI=aa&&"ontouchstart"in document.documentElement;if(aa){var Uh={Moz:"-moz-",ms:"-ms-",O:"-o-",Webkit:"-webkit-"},NI=document.createElement("p"),qh=NI.style,DI="Transform";for(var Gh in Uh)if(Gh+DI in qh){Ds=Gh,Wh=Uh[Gh];break}Ds==="Webkit"&&"msHyphens"in qh&&(Ds="ms",Wh=Uh.ms,Iy="edge"),Ds==="Webkit"&&"-apple-trailing-word"in qh&&(Ty="apple")}var te={js:Ds,css:Wh,vendor:Ty,browser:Iy,isTouch:LI};function OI(t){return t[1]==="-"||te.js==="ms"?t:"@"+te.css+"keyframes"+t.substr(10)}var HI={noPrefill:["appearance"],supportedProperty:function(e){return e!=="appearance"?!1:te.js==="ms"?"-webkit-"+e:te.css+e}},MI={noPrefill:["color-adjust"],supportedProperty:function(e){return e!=="color-adjust"?!1:te.js==="Webkit"?te.css+"print-"+e:e}},zI=/[-\s]+(.)?/g;function jI(t,e){return e?e.toUpperCase():""}function Yh(t){return t.replace(zI,jI)}function lr(t){return Yh("-"+t)}var VI={noPrefill:["mask"],supportedProperty:function(e,n){if(!/^mask/.test(e))return!1;if(te.js==="Webkit"){var o="mask-image";if(Yh(o)in n)return e;if(te.js+lr(o)in n)return te.css+e}return e}},WI={noPrefill:["text-orientation"],supportedProperty:function(e){return e!=="text-orientation"?!1:te.vendor==="apple"&&!te.isTouch?te.css+e:e}},UI={noPrefill:["transform"],supportedProperty:function(e,n,o){return e!=="transform"?!1:o.transform?e:te.css+e}},qI={noPrefill:["transition"],supportedProperty:function(e,n,o){return e!=="transition"?!1:o.transition?e:te.css+e}},GI={noPrefill:["writing-mode"],supportedProperty:function(e){return e!=="writing-mode"?!1:te.js==="Webkit"||te.js==="ms"&&te.browser!=="edge"?te.css+e:e}},YI={noPrefill:["user-select"],supportedProperty:function(e){return e!=="user-select"?!1:te.js==="Moz"||te.js==="ms"||te.vendor==="apple"?te.css+e:e}},XI={supportedProperty:function(e,n){if(!/^break-/.test(e))return!1;if(te.js==="Webkit"){var o="WebkitColumn"+lr(e);return o in n?te.css+"column-"+e:!1}if(te.js==="Moz"){var r="page"+lr(e);return r in n?"page-"+e:!1}return!1}},JI={supportedProperty:function(e,n){if(!/^(border|margin|padding)-inline/.test(e))return!1;if(te.js==="Moz")return e;var o=e.replace("-inline","");return te.js+lr(o)in n?te.css+o:!1}},QI={supportedProperty:function(e,n){return Yh(e)in n?e:!1}},ZI={supportedProperty:function(e,n){var o=lr(e);return e[0]==="-"||e[0]==="-"&&e[1]==="-"?e:te.js+o in n?te.css+e:te.js!=="Webkit"&&"Webkit"+o in n?"-webkit-"+e:!1}},KI={supportedProperty:function(e){return e.substring(0,11)!=="scroll-snap"?!1:te.js==="ms"?""+te.css+e:e}},e2={supportedProperty:function(e){return e!=="overscroll-behavior"?!1:te.js==="ms"?te.css+"scroll-chaining":e}},t2={"flex-grow":"flex-positive","flex-shrink":"flex-negative","flex-basis":"flex-preferred-size","justify-content":"flex-pack",order:"flex-order","align-items":"flex-align","align-content":"flex-line-pack"},n2={supportedProperty:function(e,n){var o=t2[e];return o&&te.js+lr(o)in n?te.css+o:!1}},$y={flex:"box-flex","flex-grow":"box-flex","flex-direction":["box-orient","box-direction"],order:"box-ordinal-group","align-items":"box-align","flex-flow":["box-orient","box-direction"],"justify-content":"box-pack"},o2=Object.keys($y),r2=function(e){return te.css+e},i2={supportedProperty:function(e,n,o){var r=o.multiple;if(o2.indexOf(e)>-1){var i=$y[e];if(!Array.isArray(i))return te.js+lr(i)in n?te.css+i:!1;if(!r)return!1;for(var a=0;a<i.length;a++)if(!(te.js+lr(i[0])in n))return!1;return i.map(r2)}return!1}},Ay=[HI,MI,VI,WI,UI,qI,GI,YI,XI,JI,QI,ZI,KI,e2,n2,i2],Ey=Ay.filter(function(t){return t.supportedProperty}).map(function(t){return t.supportedProperty}),a2=Ay.filter(function(t){return t.noPrefill}).reduce(function(t,e){return t.push.apply(t,RI(e.noPrefill)),t},[]),Os,ni={};if(aa){Os=document.createElement("p");var Xh=window.getComputedStyle(document.documentElement,"");for(var Jh in Xh)isNaN(Jh)||(ni[Xh[Jh]]=Xh[Jh]);a2.forEach(function(t){return delete ni[t]})}function Qh(t,e){if(e===void 0&&(e={}),!Os)return t;if(ni[t]!=null)return ni[t];(t==="transition"||t==="transform")&&(e[t]=t in Os.style);for(var n=0;n<Ey.length&&(ni[t]=Ey[n](t,Os.style,e),!ni[t]);n++);try{Os.style[t]=""}catch{return!1}return ni[t]}var ca={},s2={transition:1,"transition-property":1,"-webkit-transition":1,"-webkit-transition-property":1},l2=/(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g,ur;function u2(t,e,n){if(e==="var")return"var";if(e==="all")return"all";if(n==="all")return", all";var o=e?Qh(e):", "+Qh(n);return o||e||n}aa&&(ur=document.createElement("p"));function Py(t,e){var n=e;if(!ur||t==="content")return e;if(typeof n!="string"||!isNaN(parseInt(n,10)))return n;var o=t+n;if(ca[o]!=null)return ca[o];try{ur.style[t]=n}catch{return ca[o]=!1,!1}if(s2[t])n=n.replace(l2,u2);else if(ur.style[t]===""&&(n=te.css+n,n==="-ms-flex"&&(ur.style[t]="-ms-flexbox"),ur.style[t]=n,ur.style[t]===""))return ca[o]=!1,!1;return ur.style[t]="",ca[o]=n,ca[o]}function c2(){function t(r){if(r.type==="keyframes"){var i=r;i.at=OI(i.at)}}function e(r){for(var i in r){var a=r[i];if(i==="fallbacks"&&Array.isArray(a)){r[i]=a.map(e);continue}var s=!1,l=Qh(i);l&&l!==i&&(s=!0);var c=!1,_=Py(l,ei(a));_&&_!==a&&(c=!0),(s||c)&&(s&&delete r[i],r[l||i]=_||a)}return r}function n(r,i){return i.type!=="style"?r:e(r)}function o(r,i){return Py(i,ei(r))||r}return{onProcessRule:t,onProcessStyle:n,onChangeValue:o}}function d2(){var t=function(n,o){return n.length===o.length?n>o?1:-1:n.length-o.length};return{onProcessStyle:function(n,o){if(o.type!=="style")return n;for(var r={},i=Object.keys(n).sort(t),a=0;a<i.length;a++)r[i[a]]=n[i[a]];return r}}}var _2=function(e){return e===void 0&&(e={}),{plugins:[QT(),eI(e.observable),rI(),cI(),pI(),gI(),vI(),CI(),kI(e.defaultUnit),$I(),c2(),d2()]}};const p2=_2;var h2=Number.MIN_SAFE_INTEGER||-1e9,f2=function(){return h2++},g2=ee.createContext({classNamePrefix:"",disableStylesGeneration:!1,isSSR:!aa}),Fy=new Map,Zh=function(e,n){var o=e.managers;if(o)return o[n]||(o[n]=new gy),o[n];var r=Fy.get(n);return r||(r=new gy,Fy.set(n,r)),r},Ry=function(e){var n=e.sheet,o=e.context,r=e.index,i=e.theme;if(n){var a=Zh(o,r);a.manage(i),o.registry&&o.registry.add(n)}},v2=function(e){if(e.sheet){var n=Zh(e.context,e.index);n.unmanage(e.theme)}},m2=fy(p2()),Ly=new WeakMap,Ny=function(e){return Ly.get(e)},b2=function(e,n){Ly.set(e,n)},y2=function(e){var n=e.styles;return typeof n!="function"?n:n(e.theme)};function C2(t,e){var n;t.context.id&&t.context.id.minify!=null&&(n=t.context.id.minify);var o=t.context.classNamePrefix||"";t.name&&!n&&(o+=t.name.replace(/\s/g,"-")+"-");var r="";return t.name&&(r=t.name+", "),r+=typeof t.styles=="function"?"Themed":"Unthemed",je({},t.sheetOptions,{index:t.index,meta:r,classNamePrefix:o,link:e,generateId:t.sheetOptions&&t.sheetOptions.generateId?t.sheetOptions.generateId:t.context.generateId})}var w2=function(e){if(!e.context.disableStylesGeneration){var n=Zh(e.context,e.index),o=n.get(e.theme);if(o)return o;var r=e.context.jss||m2,i=y2(e),a=vy(i),s=r.createStyleSheet(i,C2(e,a!==null));return b2(s,{dynamicStyles:a,styles:i}),n.add(e.theme,s),s}},S2=function(e,n){for(var o in n)e.deleteRule(n[o])},k2=function(e,n,o){for(var r in o)n.updateOne(o[r],e)},x2=function(e,n){var o=Ny(e);if(o){var r={};for(var i in o.dynamicStyles)for(var a=e.rules.index.length,s=e.addRule(i,o.dynamicStyles[i]),l=a;l<e.rules.index.length;l++){var c=e.rules.index[l];e.updateOne(c,n),r[s===c?i:c.key]=c}return r}},B2=function(e,n){if(!n)return e.classes;var o=Ny(e);if(!o)return e.classes;var r={};for(var i in o.styles)r[i]=e.classes[i],i in n&&(r[i]+=" "+e.classes[n[i].key]);return r};function Dy(t){return t?ee.useEffect:F.useInsertionEffect||ee.useLayoutEffect}var Kh={},fc=function(e,n){n===void 0&&(n={});var o=n,r=o.index,i=r===void 0?f2():r,a=o.theming,s=o.name,l=zb(o,["index","theming","name"]),c=a&&a.context||Qb,_=function(b){return typeof e=="function"&&(b||ee.useContext(c))||Kh},d={};return function(b){var S=ee.useRef(!0),x=ee.useContext(g2),O=_(b&&b.theme),C=ee.useMemo(function(){var D=w2({context:x,styles:e,name:s,theme:O,index:i,sheetOptions:l});return D&&x.isSSR&&Ry({index:i,context:x,sheet:D,theme:O}),[D,D?x2(D,b):null]},[x,O]),g=C[0],w=C[1];Dy(x.isSSR)(function(){g&&w&&!S.current&&k2(b,g,w)},[b]),Dy(x.isSSR)(function(){return g&&Ry({index:i,context:x,sheet:g,theme:O}),function(){g&&(v2({index:i,context:x,sheet:g,theme:O}),w&&S2(g,w))}},[g]);var E=ee.useMemo(function(){return g&&w?B2(g,w):d},[g,w]);return ee.useDebugValue(E),ee.useDebugValue(O===Kh?"No theme":O),ee.useEffect(function(){S.current=!1}),E}};function T2(t){const e=ee.useRef(null);return[ee.useCallback(o=>{t&&(typeof t=="function"&&t(o),{}.hasOwnProperty.call(t,"current")&&(t.current=o)),e.current=o},[t]),e]}const $={sapBrandColor:"var(--sapBrandColor)",sapHighlightColor:"var(--sapHighlightColor)",sapBaseColor:"var(--sapBaseColor)",sapShellColor:"var(--sapShellColor)",sapBackgroundColor:"var(--sapBackgroundColor)",sapFontFamily:"var(--sapFontFamily)",sapFontSize:"var(--sapFontSize)",sapTextColor:"var(--sapTextColor)",sapLinkColor:"var(--sapLinkColor)",sapCompanyLogo:"var(--sapCompanyLogo)",sapBackgroundImage:"var(--sapBackgroundImage)",sapBackgroundImageOpacity:"var(--sapBackgroundImageOpacity)",sapBackgroundImageRepeat:"var(--sapBackgroundImageRepeat)",sapSelectedColor:"var(--sapSelectedColor)",sapHoverColor:"var(--sapHoverColor)",sapActiveColor:"var(--sapActiveColor)",sapHighlightTextColor:"var(--sapHighlightTextColor)",sapTitleColor:"var(--sapTitleColor)",sapNegativeColor:"var(--sapNegativeColor)",sapCriticalColor:"var(--sapCriticalColor)",sapPositiveColor:"var(--sapPositiveColor)",sapInformativeColor:"var(--sapInformativeColor)",sapNeutralColor:"var(--sapNeutralColor)",sapNegativeElementColor:"var(--sapNegativeElementColor)",sapCriticalElementColor:"var(--sapCriticalElementColor)",sapPositiveElementColor:"var(--sapPositiveElementColor)",sapInformativeElementColor:"var(--sapInformativeElementColor)",sapNeutralElementColor:"var(--sapNeutralElementColor)",sapNegativeTextColor:"var(--sapNegativeTextColor)",sapCriticalTextColor:"var(--sapCriticalTextColor)",sapPositiveTextColor:"var(--sapPositiveTextColor)",sapInformativeTextColor:"var(--sapInformativeTextColor)",sapNeutralTextColor:"var(--sapNeutralTextColor)",sapErrorColor:"var(--sapErrorColor)",sapWarningColor:"var(--sapWarningColor)",sapSuccessColor:"var(--sapSuccessColor)",sapInformationColor:"var(--sapInformationColor)",sapErrorBackground:"var(--sapErrorBackground)",sapWarningBackground:"var(--sapWarningBackground)",sapSuccessBackground:"var(--sapSuccessBackground)",sapInformationBackground:"var(--sapInformationBackground)",sapNeutralBackground:"var(--sapNeutralBackground)",sapErrorBorderColor:"var(--sapErrorBorderColor)",sapWarningBorderColor:"var(--sapWarningBorderColor)",sapSuccessBorderColor:"var(--sapSuccessBorderColor)",sapInformationBorderColor:"var(--sapInformationBorderColor)",sapNeutralBorderColor:"var(--sapNeutralBorderColor)",sapElement_LineHeight:"var(--sapElement_LineHeight)",sapElement_Height:"var(--sapElement_Height)",sapElement_BorderWidth:"var(--sapElement_BorderWidth)",sapElement_BorderCornerRadius:"var(--sapElement_BorderCornerRadius)",sapElement_Compact_LineHeight:"var(--sapElement_Compact_LineHeight)",sapElement_Compact_Height:"var(--sapElement_Compact_Height)",sapElement_Condensed_LineHeight:"var(--sapElement_Condensed_LineHeight)",sapElement_Condensed_Height:"var(--sapElement_Condensed_Height)",sapContent_LineHeight:"var(--sapContent_LineHeight)",sapContent_IconHeight:"var(--sapContent_IconHeight)",sapContent_IconColor:"var(--sapContent_IconColor)",sapContent_ContrastIconColor:"var(--sapContent_ContrastIconColor)",sapContent_NonInteractiveIconColor:"var(--sapContent_NonInteractiveIconColor)",sapContent_MarkerIconColor:"var(--sapContent_MarkerIconColor)",sapContent_MarkerTextColor:"var(--sapContent_MarkerTextColor)",sapContent_MeasureIndicatorColor:"var(--sapContent_MeasureIndicatorColor)",sapContent_Selected_MeasureIndicatorColor:"var(--sapContent_Selected_MeasureIndicatorColor)",sapContent_Placeholderloading_Background:"var(--sapContent_Placeholderloading_Background)",sapContent_Placeholderloading_Gradient:"var(--sapContent_Placeholderloading_Gradient)",sapContent_ImagePlaceholderBackground:"var(--sapContent_ImagePlaceholderBackground)",sapContent_ImagePlaceholderForegroundColor:"var(--sapContent_ImagePlaceholderForegroundColor)",sapContent_RatedColor:"var(--sapContent_RatedColor)",sapContent_UnratedColor:"var(--sapContent_UnratedColor)",sapContent_BusyColor:"var(--sapContent_BusyColor)",sapContent_FocusColor:"var(--sapContent_FocusColor)",sapContent_FocusStyle:"var(--sapContent_FocusStyle)",sapContent_FocusWidth:"var(--sapContent_FocusWidth)",sapContent_ContrastFocusColor:"var(--sapContent_ContrastFocusColor)",sapContent_ShadowColor:"var(--sapContent_ShadowColor)",sapContent_ContrastShadowColor:"var(--sapContent_ContrastShadowColor)",sapContent_Shadow0:"var(--sapContent_Shadow0)",sapContent_Shadow1:"var(--sapContent_Shadow1)",sapContent_Shadow2:"var(--sapContent_Shadow2)",sapContent_Shadow3:"var(--sapContent_Shadow3)",sapContent_TextShadow:"var(--sapContent_TextShadow)",sapContent_ContrastTextShadow:"var(--sapContent_ContrastTextShadow)",sapContent_HeaderShadow:"var(--sapContent_HeaderShadow)",sapContent_Interaction_Shadow:"var(--sapContent_Interaction_Shadow)",sapContent_Selected_Shadow:"var(--sapContent_Selected_Shadow)",sapContent_Negative_Shadow:"var(--sapContent_Negative_Shadow)",sapContent_Critical_Shadow:"var(--sapContent_Critical_Shadow)",sapContent_Positive_Shadow:"var(--sapContent_Positive_Shadow)",sapContent_Informative_Shadow:"var(--sapContent_Informative_Shadow)",sapContent_Neutral_Shadow:"var(--sapContent_Neutral_Shadow)",sapContent_SearchHighlightColor:"var(--sapContent_SearchHighlightColor)",sapContent_HelpColor:"var(--sapContent_HelpColor)",sapContent_LabelColor:"var(--sapContent_LabelColor)",sapContent_MonospaceFontFamily:"var(--sapContent_MonospaceFontFamily)",sapContent_MonospaceBoldFontFamily:"var(--sapContent_MonospaceBoldFontFamily)",sapContent_IconFontFamily:"var(--sapContent_IconFontFamily)",sapContent_DisabledTextColor:"var(--sapContent_DisabledTextColor)",sapContent_DisabledOpacity:"var(--sapContent_DisabledOpacity)",sapContent_ContrastTextThreshold:"var(--sapContent_ContrastTextThreshold)",sapContent_ContrastTextColor:"var(--sapContent_ContrastTextColor)",sapContent_ForegroundColor:"var(--sapContent_ForegroundColor)",sapContent_ForegroundBorderColor:"var(--sapContent_ForegroundBorderColor)",sapContent_ForegroundTextColor:"var(--sapContent_ForegroundTextColor)",sapContent_BadgeBackground:"var(--sapContent_BadgeBackground)",sapContent_BadgeTextColor:"var(--sapContent_BadgeTextColor)",sapContent_DragAndDropActiveColor:"var(--sapContent_DragAndDropActiveColor)",sapContent_Selected_TextColor:"var(--sapContent_Selected_TextColor)",sapContent_Selected_Background:"var(--sapContent_Selected_Background)",sapContent_Selected_Hover_Background:"var(--sapContent_Selected_Hover_Background)",sapContent_Selected_ForegroundColor:"var(--sapContent_Selected_ForegroundColor)",sapContent_ForcedColorAdjust:"var(--sapContent_ForcedColorAdjust)",sapContent_Illustrative_Color1:"var(--sapContent_Illustrative_Color1)",sapContent_Illustrative_Color2:"var(--sapContent_Illustrative_Color2)",sapContent_Illustrative_Color3:"var(--sapContent_Illustrative_Color3)",sapContent_Illustrative_Color4:"var(--sapContent_Illustrative_Color4)",sapContent_Illustrative_Color5:"var(--sapContent_Illustrative_Color5)",sapContent_Illustrative_Color6:"var(--sapContent_Illustrative_Color6)",sapContent_Illustrative_Color7:"var(--sapContent_Illustrative_Color7)",sapContent_Illustrative_Color8:"var(--sapContent_Illustrative_Color8)",sapContent_Illustrative_Color9:"var(--sapContent_Illustrative_Color9)",sapContent_Illustrative_Color10:"var(--sapContent_Illustrative_Color10)",sapContent_Illustrative_Color11:"var(--sapContent_Illustrative_Color11)",sapContent_Illustrative_Color12:"var(--sapContent_Illustrative_Color12)",sapContent_Illustrative_Color13:"var(--sapContent_Illustrative_Color13)",sapContent_Illustrative_Color14:"var(--sapContent_Illustrative_Color14)",sapContent_Illustrative_Color15:"var(--sapContent_Illustrative_Color15)",sapContent_Illustrative_Color16:"var(--sapContent_Illustrative_Color16)",sapContent_Illustrative_Color17:"var(--sapContent_Illustrative_Color17)",sapContent_Illustrative_Color18:"var(--sapContent_Illustrative_Color18)",sapContent_Illustrative_Color19:"var(--sapContent_Illustrative_Color19)",sapContent_Illustrative_Color20:"var(--sapContent_Illustrative_Color20)",sapFontLightFamily:"var(--sapFontLightFamily)",sapFontBoldFamily:"var(--sapFontBoldFamily)",sapFontSemiboldFamily:"var(--sapFontSemiboldFamily)",sapFontSemiboldDuplexFamily:"var(--sapFontSemiboldDuplexFamily)",sapFontBlackFamily:"var(--sapFontBlackFamily)",sapFontHeaderFamily:"var(--sapFontHeaderFamily)",sapFontSmallSize:"var(--sapFontSmallSize)",sapFontLargeSize:"var(--sapFontLargeSize)",sapFontHeader1Size:"var(--sapFontHeader1Size)",sapFontHeader2Size:"var(--sapFontHeader2Size)",sapFontHeader3Size:"var(--sapFontHeader3Size)",sapFontHeader4Size:"var(--sapFontHeader4Size)",sapFontHeader5Size:"var(--sapFontHeader5Size)",sapFontHeader6Size:"var(--sapFontHeader6Size)",sapLink_TextDecoration:"var(--sapLink_TextDecoration)",sapLink_Hover_Color:"var(--sapLink_Hover_Color)",sapLink_Hover_TextDecoration:"var(--sapLink_Hover_TextDecoration)",sapLink_Active_Color:"var(--sapLink_Active_Color)",sapLink_Active_TextDecoration:"var(--sapLink_Active_TextDecoration)",sapLink_Visited_Color:"var(--sapLink_Visited_Color)",sapLink_InvertedColor:"var(--sapLink_InvertedColor)",sapLink_SubtleColor:"var(--sapLink_SubtleColor)",sapShell_Background:"var(--sapShell_Background)",sapShell_BackgroundImage:"var(--sapShell_BackgroundImage)",sapShell_BackgroundImageOpacity:"var(--sapShell_BackgroundImageOpacity)",sapShell_BackgroundImageRepeat:"var(--sapShell_BackgroundImageRepeat)",sapShell_BorderColor:"var(--sapShell_BorderColor)",sapShell_TextColor:"var(--sapShell_TextColor)",sapShell_InteractiveBackground:"var(--sapShell_InteractiveBackground)",sapShell_InteractiveTextColor:"var(--sapShell_InteractiveTextColor)",sapShell_InteractiveBorderColor:"var(--sapShell_InteractiveBorderColor)",sapShell_GroupTitleTextColor:"var(--sapShell_GroupTitleTextColor)",sapShell_GroupTitleTextShadow:"var(--sapShell_GroupTitleTextShadow)",sapShell_Hover_Background:"var(--sapShell_Hover_Background)",sapShell_Active_Background:"var(--sapShell_Active_Background)",sapShell_Active_TextColor:"var(--sapShell_Active_TextColor)",sapShell_Selected_Background:"var(--sapShell_Selected_Background)",sapShell_Selected_TextColor:"var(--sapShell_Selected_TextColor)",sapShell_Selected_Hover_Background:"var(--sapShell_Selected_Hover_Background)",sapShell_Favicon:"var(--sapShell_Favicon)",sapShell_Navigation_Background:"var(--sapShell_Navigation_Background)",sapShell_Navigation_Hover_Background:"var(--sapShell_Navigation_Hover_Background)",sapShell_Navigation_SelectedColor:"var(--sapShell_Navigation_SelectedColor)",sapShell_Navigation_Selected_TextColor:"var(--sapShell_Navigation_Selected_TextColor)",sapShell_Navigation_TextColor:"var(--sapShell_Navigation_TextColor)",sapShell_Navigation_Active_TextColor:"var(--sapShell_Navigation_Active_TextColor)",sapShell_Navigation_Active_Background:"var(--sapShell_Navigation_Active_Background)",sapShell_Shadow:"var(--sapShell_Shadow)",sapShell_NegativeColor:"var(--sapShell_NegativeColor)",sapShell_CriticalColor:"var(--sapShell_CriticalColor)",sapShell_PositiveColor:"var(--sapShell_PositiveColor)",sapShell_InformativeColor:"var(--sapShell_InformativeColor)",sapShell_NeutralColor:"var(--sapShell_NeutralColor)",sapShell_Category_1_Background:"var(--sapShell_Category_1_Background)",sapShell_Category_1_BorderColor:"var(--sapShell_Category_1_BorderColor)",sapShell_Category_1_TextColor:"var(--sapShell_Category_1_TextColor)",sapShell_Category_1_TextShadow:"var(--sapShell_Category_1_TextShadow)",sapShell_Category_2_Background:"var(--sapShell_Category_2_Background)",sapShell_Category_2_BorderColor:"var(--sapShell_Category_2_BorderColor)",sapShell_Category_2_TextColor:"var(--sapShell_Category_2_TextColor)",sapShell_Category_2_TextShadow:"var(--sapShell_Category_2_TextShadow)",sapShell_Category_3_Background:"var(--sapShell_Category_3_Background)",sapShell_Category_3_BorderColor:"var(--sapShell_Category_3_BorderColor)",sapShell_Category_3_TextColor:"var(--sapShell_Category_3_TextColor)",sapShell_Category_3_TextShadow:"var(--sapShell_Category_3_TextShadow)",sapShell_Category_4_Background:"var(--sapShell_Category_4_Background)",sapShell_Category_4_BorderColor:"var(--sapShell_Category_4_BorderColor)",sapShell_Category_4_TextColor:"var(--sapShell_Category_4_TextColor)",sapShell_Category_4_TextShadow:"var(--sapShell_Category_4_TextShadow)",sapShell_Category_5_Background:"var(--sapShell_Category_5_Background)",sapShell_Category_5_BorderColor:"var(--sapShell_Category_5_BorderColor)",sapShell_Category_5_TextColor:"var(--sapShell_Category_5_TextColor)",sapShell_Category_5_TextShadow:"var(--sapShell_Category_5_TextShadow)",sapShell_Category_6_Background:"var(--sapShell_Category_6_Background)",sapShell_Category_6_BorderColor:"var(--sapShell_Category_6_BorderColor)",sapShell_Category_6_TextColor:"var(--sapShell_Category_6_TextColor)",sapShell_Category_6_TextShadow:"var(--sapShell_Category_6_TextShadow)",sapShell_Category_7_Background:"var(--sapShell_Category_7_Background)",sapShell_Category_7_BorderColor:"var(--sapShell_Category_7_BorderColor)",sapShell_Category_7_TextColor:"var(--sapShell_Category_7_TextColor)",sapShell_Category_7_TextShadow:"var(--sapShell_Category_7_TextShadow)",sapShell_Category_8_Background:"var(--sapShell_Category_8_Background)",sapShell_Category_8_BorderColor:"var(--sapShell_Category_8_BorderColor)",sapShell_Category_8_TextColor:"var(--sapShell_Category_8_TextColor)",sapShell_Category_8_TextShadow:"var(--sapShell_Category_8_TextShadow)",sapShell_Category_9_Background:"var(--sapShell_Category_9_Background)",sapShell_Category_9_BorderColor:"var(--sapShell_Category_9_BorderColor)",sapShell_Category_9_TextColor:"var(--sapShell_Category_9_TextColor)",sapShell_Category_9_TextShadow:"var(--sapShell_Category_9_TextShadow)",sapShell_Category_10_Background:"var(--sapShell_Category_10_Background)",sapShell_Category_10_BorderColor:"var(--sapShell_Category_10_BorderColor)",sapShell_Category_10_TextColor:"var(--sapShell_Category_10_TextColor)",sapShell_Category_10_TextShadow:"var(--sapShell_Category_10_TextShadow)",sapShell_Category_11_Background:"var(--sapShell_Category_11_Background)",sapShell_Category_11_BorderColor:"var(--sapShell_Category_11_BorderColor)",sapShell_Category_11_TextColor:"var(--sapShell_Category_11_TextColor)",sapShell_Category_11_TextShadow:"var(--sapShell_Category_11_TextShadow)",sapShell_Category_12_Background:"var(--sapShell_Category_12_Background)",sapShell_Category_12_BorderColor:"var(--sapShell_Category_12_BorderColor)",sapShell_Category_12_TextColor:"var(--sapShell_Category_12_TextColor)",sapShell_Category_12_TextShadow:"var(--sapShell_Category_12_TextShadow)",sapShell_Category_13_Background:"var(--sapShell_Category_13_Background)",sapShell_Category_13_BorderColor:"var(--sapShell_Category_13_BorderColor)",sapShell_Category_13_TextColor:"var(--sapShell_Category_13_TextColor)",sapShell_Category_13_TextShadow:"var(--sapShell_Category_13_TextShadow)",sapShell_Category_14_Background:"var(--sapShell_Category_14_Background)",sapShell_Category_14_BorderColor:"var(--sapShell_Category_14_BorderColor)",sapShell_Category_14_TextColor:"var(--sapShell_Category_14_TextColor)",sapShell_Category_14_TextShadow:"var(--sapShell_Category_14_TextShadow)",sapShell_Category_15_Background:"var(--sapShell_Category_15_Background)",sapShell_Category_15_BorderColor:"var(--sapShell_Category_15_BorderColor)",sapShell_Category_15_TextColor:"var(--sapShell_Category_15_TextColor)",sapShell_Category_15_TextShadow:"var(--sapShell_Category_15_TextShadow)",sapShell_Category_16_Background:"var(--sapShell_Category_16_Background)",sapShell_Category_16_BorderColor:"var(--sapShell_Category_16_BorderColor)",sapShell_Category_16_TextColor:"var(--sapShell_Category_16_TextColor)",sapShell_Category_16_TextShadow:"var(--sapShell_Category_16_TextShadow)",sapAvatar_1_Background:"var(--sapAvatar_1_Background)",sapAvatar_1_BorderColor:"var(--sapAvatar_1_BorderColor)",sapAvatar_1_TextColor:"var(--sapAvatar_1_TextColor)",sapAvatar_2_Background:"var(--sapAvatar_2_Background)",sapAvatar_2_BorderColor:"var(--sapAvatar_2_BorderColor)",sapAvatar_2_TextColor:"var(--sapAvatar_2_TextColor)",sapAvatar_3_Background:"var(--sapAvatar_3_Background)",sapAvatar_3_BorderColor:"var(--sapAvatar_3_BorderColor)",sapAvatar_3_TextColor:"var(--sapAvatar_3_TextColor)",sapAvatar_4_Background:"var(--sapAvatar_4_Background)",sapAvatar_4_BorderColor:"var(--sapAvatar_4_BorderColor)",sapAvatar_4_TextColor:"var(--sapAvatar_4_TextColor)",sapAvatar_5_Background:"var(--sapAvatar_5_Background)",sapAvatar_5_BorderColor:"var(--sapAvatar_5_BorderColor)",sapAvatar_5_TextColor:"var(--sapAvatar_5_TextColor)",sapAvatar_6_Background:"var(--sapAvatar_6_Background)",sapAvatar_6_BorderColor:"var(--sapAvatar_6_BorderColor)",sapAvatar_6_TextColor:"var(--sapAvatar_6_TextColor)",sapAvatar_7_Background:"var(--sapAvatar_7_Background)",sapAvatar_7_BorderColor:"var(--sapAvatar_7_BorderColor)",sapAvatar_7_TextColor:"var(--sapAvatar_7_TextColor)",sapAvatar_8_Background:"var(--sapAvatar_8_Background)",sapAvatar_8_BorderColor:"var(--sapAvatar_8_BorderColor)",sapAvatar_8_TextColor:"var(--sapAvatar_8_TextColor)",sapAvatar_9_Background:"var(--sapAvatar_9_Background)",sapAvatar_9_BorderColor:"var(--sapAvatar_9_BorderColor)",sapAvatar_9_TextColor:"var(--sapAvatar_9_TextColor)",sapAvatar_10_Background:"var(--sapAvatar_10_Background)",sapAvatar_10_BorderColor:"var(--sapAvatar_10_BorderColor)",sapAvatar_10_TextColor:"var(--sapAvatar_10_TextColor)",sapButton_Background:"var(--sapButton_Background)",sapButton_BorderColor:"var(--sapButton_BorderColor)",sapButton_BorderWidth:"var(--sapButton_BorderWidth)",sapButton_BorderCornerRadius:"var(--sapButton_BorderCornerRadius)",sapButton_TextColor:"var(--sapButton_TextColor)",sapButton_Hover_Background:"var(--sapButton_Hover_Background)",sapButton_Hover_BorderColor:"var(--sapButton_Hover_BorderColor)",sapButton_Hover_TextColor:"var(--sapButton_Hover_TextColor)",sapButton_IconColor:"var(--sapButton_IconColor)",sapButton_Active_Background:"var(--sapButton_Active_Background)",sapButton_Active_BorderColor:"var(--sapButton_Active_BorderColor)",sapButton_Active_TextColor:"var(--sapButton_Active_TextColor)",sapButton_Emphasized_Background:"var(--sapButton_Emphasized_Background)",sapButton_Emphasized_BorderColor:"var(--sapButton_Emphasized_BorderColor)",sapButton_Emphasized_TextColor:"var(--sapButton_Emphasized_TextColor)",sapButton_Emphasized_Hover_Background:"var(--sapButton_Emphasized_Hover_Background)",sapButton_Emphasized_Hover_BorderColor:"var(--sapButton_Emphasized_Hover_BorderColor)",sapButton_Emphasized_Hover_TextColor:"var(--sapButton_Emphasized_Hover_TextColor)",sapButton_Emphasized_Active_Background:"var(--sapButton_Emphasized_Active_Background)",sapButton_Emphasized_Active_BorderColor:"var(--sapButton_Emphasized_Active_BorderColor)",sapButton_Emphasized_Active_TextColor:"var(--sapButton_Emphasized_Active_TextColor)",sapButton_Emphasized_TextShadow:"var(--sapButton_Emphasized_TextShadow)",sapButton_Emphasized_FontWeight:"var(--sapButton_Emphasized_FontWeight)",sapButton_Reject_Background:"var(--sapButton_Reject_Background)",sapButton_Reject_BorderColor:"var(--sapButton_Reject_BorderColor)",sapButton_Reject_TextColor:"var(--sapButton_Reject_TextColor)",sapButton_Reject_Hover_Background:"var(--sapButton_Reject_Hover_Background)",sapButton_Reject_Hover_BorderColor:"var(--sapButton_Reject_Hover_BorderColor)",sapButton_Reject_Hover_TextColor:"var(--sapButton_Reject_Hover_TextColor)",sapButton_Reject_Active_Background:"var(--sapButton_Reject_Active_Background)",sapButton_Reject_Active_BorderColor:"var(--sapButton_Reject_Active_BorderColor)",sapButton_Reject_Active_TextColor:"var(--sapButton_Reject_Active_TextColor)",sapButton_Reject_Selected_Background:"var(--sapButton_Reject_Selected_Background)",sapButton_Reject_Selected_BorderColor:"var(--sapButton_Reject_Selected_BorderColor)",sapButton_Reject_Selected_TextColor:"var(--sapButton_Reject_Selected_TextColor)",sapButton_Reject_Selected_Hover_Background:"var(--sapButton_Reject_Selected_Hover_Background)",sapButton_Reject_Selected_Hover_BorderColor:"var(--sapButton_Reject_Selected_Hover_BorderColor)",sapButton_Accept_Background:"var(--sapButton_Accept_Background)",sapButton_Accept_BorderColor:"var(--sapButton_Accept_BorderColor)",sapButton_Accept_TextColor:"var(--sapButton_Accept_TextColor)",sapButton_Accept_Hover_Background:"var(--sapButton_Accept_Hover_Background)",sapButton_Accept_Hover_BorderColor:"var(--sapButton_Accept_Hover_BorderColor)",sapButton_Accept_Hover_TextColor:"var(--sapButton_Accept_Hover_TextColor)",sapButton_Accept_Active_Background:"var(--sapButton_Accept_Active_Background)",sapButton_Accept_Active_BorderColor:"var(--sapButton_Accept_Active_BorderColor)",sapButton_Accept_Active_TextColor:"var(--sapButton_Accept_Active_TextColor)",sapButton_Accept_Selected_Background:"var(--sapButton_Accept_Selected_Background)",sapButton_Accept_Selected_BorderColor:"var(--sapButton_Accept_Selected_BorderColor)",sapButton_Accept_Selected_TextColor:"var(--sapButton_Accept_Selected_TextColor)",sapButton_Accept_Selected_Hover_Background:"var(--sapButton_Accept_Selected_Hover_Background)",sapButton_Accept_Selected_Hover_BorderColor:"var(--sapButton_Accept_Selected_Hover_BorderColor)",sapButton_Lite_Background:"var(--sapButton_Lite_Background)",sapButton_Lite_BorderColor:"var(--sapButton_Lite_BorderColor)",sapButton_Lite_TextColor:"var(--sapButton_Lite_TextColor)",sapButton_Lite_Hover_Background:"var(--sapButton_Lite_Hover_Background)",sapButton_Lite_Hover_BorderColor:"var(--sapButton_Lite_Hover_BorderColor)",sapButton_Lite_Hover_TextColor:"var(--sapButton_Lite_Hover_TextColor)",sapButton_Lite_Active_Background:"var(--sapButton_Lite_Active_Background)",sapButton_Lite_Active_BorderColor:"var(--sapButton_Lite_Active_BorderColor)",sapButton_Selected_Background:"var(--sapButton_Selected_Background)",sapButton_Selected_BorderColor:"var(--sapButton_Selected_BorderColor)",sapButton_Selected_TextColor:"var(--sapButton_Selected_TextColor)",sapButton_Selected_Hover_Background:"var(--sapButton_Selected_Hover_Background)",sapButton_Selected_Hover_BorderColor:"var(--sapButton_Selected_Hover_BorderColor)",sapButton_Attention_Background:"var(--sapButton_Attention_Background)",sapButton_Attention_BorderColor:"var(--sapButton_Attention_BorderColor)",sapButton_Attention_TextColor:"var(--sapButton_Attention_TextColor)",sapButton_Attention_Hover_Background:"var(--sapButton_Attention_Hover_Background)",sapButton_Attention_Hover_BorderColor:"var(--sapButton_Attention_Hover_BorderColor)",sapButton_Attention_Hover_TextColor:"var(--sapButton_Attention_Hover_TextColor)",sapButton_Attention_Active_Background:"var(--sapButton_Attention_Active_Background)",sapButton_Attention_Active_BorderColor:"var(--sapButton_Attention_Active_BorderColor)",sapButton_Attention_Active_TextColor:"var(--sapButton_Attention_Active_TextColor)",sapButton_Attention_Selected_Background:"var(--sapButton_Attention_Selected_Background)",sapButton_Attention_Selected_BorderColor:"var(--sapButton_Attention_Selected_BorderColor)",sapButton_Attention_Selected_TextColor:"var(--sapButton_Attention_Selected_TextColor)",sapButton_Attention_Selected_Hover_Background:"var(--sapButton_Attention_Selected_Hover_Background)",sapButton_Attention_Selected_Hover_BorderColor:"var(--sapButton_Attention_Selected_Hover_BorderColor)",sapButton_Negative_Background:"var(--sapButton_Negative_Background)",sapButton_Negative_BorderColor:"var(--sapButton_Negative_BorderColor)",sapButton_Negative_TextColor:"var(--sapButton_Negative_TextColor)",sapButton_Negative_Hover_Background:"var(--sapButton_Negative_Hover_Background)",sapButton_Negative_Hover_BorderColor:"var(--sapButton_Negative_Hover_BorderColor)",sapButton_Negative_Hover_TextColor:"var(--sapButton_Negative_Hover_TextColor)",sapButton_Negative_Active_Background:"var(--sapButton_Negative_Active_Background)",sapButton_Negative_Active_BorderColor:"var(--sapButton_Negative_Active_BorderColor)",sapButton_Negative_Active_TextColor:"var(--sapButton_Negative_Active_TextColor)",sapButton_Critical_Background:"var(--sapButton_Critical_Background)",sapButton_Critical_BorderColor:"var(--sapButton_Critical_BorderColor)",sapButton_Critical_TextColor:"var(--sapButton_Critical_TextColor)",sapButton_Critical_Hover_Background:"var(--sapButton_Critical_Hover_Background)",sapButton_Critical_Hover_BorderColor:"var(--sapButton_Critical_Hover_BorderColor)",sapButton_Critical_Hover_TextColor:"var(--sapButton_Critical_Hover_TextColor)",sapButton_Critical_Active_Background:"var(--sapButton_Critical_Active_Background)",sapButton_Critical_Active_BorderColor:"var(--sapButton_Critical_Active_BorderColor)",sapButton_Critical_Active_TextColor:"var(--sapButton_Critical_Active_TextColor)",sapButton_Success_Background:"var(--sapButton_Success_Background)",sapButton_Success_BorderColor:"var(--sapButton_Success_BorderColor)",sapButton_Success_TextColor:"var(--sapButton_Success_TextColor)",sapButton_Success_Hover_Background:"var(--sapButton_Success_Hover_Background)",sapButton_Success_Hover_BorderColor:"var(--sapButton_Success_Hover_BorderColor)",sapButton_Success_Hover_TextColor:"var(--sapButton_Success_Hover_TextColor)",sapButton_Success_Active_Background:"var(--sapButton_Success_Active_Background)",sapButton_Success_Active_BorderColor:"var(--sapButton_Success_Active_BorderColor)",sapButton_Success_Active_TextColor:"var(--sapButton_Success_Active_TextColor)",sapButton_Information_Background:"var(--sapButton_Information_Background)",sapButton_Information_BorderColor:"var(--sapButton_Information_BorderColor)",sapButton_Information_TextColor:"var(--sapButton_Information_TextColor)",sapButton_Information_Hover_Background:"var(--sapButton_Information_Hover_Background)",sapButton_Information_Hover_BorderColor:"var(--sapButton_Information_Hover_BorderColor)",sapButton_Information_Hover_TextColor:"var(--sapButton_Information_Hover_TextColor)",sapButton_Information_Active_Background:"var(--sapButton_Information_Active_Background)",sapButton_Information_Active_BorderColor:"var(--sapButton_Information_Active_BorderColor)",sapButton_Information_Active_TextColor:"var(--sapButton_Information_Active_TextColor)",sapButton_Neutral_Background:"var(--sapButton_Neutral_Background)",sapButton_Neutral_BorderColor:"var(--sapButton_Neutral_BorderColor)",sapButton_Neutral_TextColor:"var(--sapButton_Neutral_TextColor)",sapButton_Neutral_Hover_Background:"var(--sapButton_Neutral_Hover_Background)",sapButton_Neutral_Hover_BorderColor:"var(--sapButton_Neutral_Hover_BorderColor)",sapButton_Neutral_Hover_TextColor:"var(--sapButton_Neutral_Hover_TextColor)",sapButton_Neutral_Active_Background:"var(--sapButton_Neutral_Active_Background)",sapButton_Neutral_Active_BorderColor:"var(--sapButton_Neutral_Active_BorderColor)",sapButton_Neutral_Active_TextColor:"var(--sapButton_Neutral_Active_TextColor)",sapButton_Track_Background:"var(--sapButton_Track_Background)",sapButton_Track_BorderColor:"var(--sapButton_Track_BorderColor)",sapButton_Track_TextColor:"var(--sapButton_Track_TextColor)",sapButton_Track_Hover_Background:"var(--sapButton_Track_Hover_Background)",sapButton_Track_Hover_BorderColor:"var(--sapButton_Track_Hover_BorderColor)",sapButton_Track_Selected_Background:"var(--sapButton_Track_Selected_Background)",sapButton_Track_Selected_BorderColor:"var(--sapButton_Track_Selected_BorderColor)",sapButton_Track_Selected_TextColor:"var(--sapButton_Track_Selected_TextColor)",sapButton_Track_Selected_Hover_Background:"var(--sapButton_Track_Selected_Hover_Background)",sapButton_Track_Selected_Hover_BorderColor:"var(--sapButton_Track_Selected_Hover_BorderColor)",sapButton_Handle_Background:"var(--sapButton_Handle_Background)",sapButton_Handle_BorderColor:"var(--sapButton_Handle_BorderColor)",sapButton_Handle_TextColor:"var(--sapButton_Handle_TextColor)",sapButton_Handle_Hover_Background:"var(--sapButton_Handle_Hover_Background)",sapButton_Handle_Hover_BorderColor:"var(--sapButton_Handle_Hover_BorderColor)",sapButton_Handle_Selected_Background:"var(--sapButton_Handle_Selected_Background)",sapButton_Handle_Selected_BorderColor:"var(--sapButton_Handle_Selected_BorderColor)",sapButton_Handle_Selected_TextColor:"var(--sapButton_Handle_Selected_TextColor)",sapButton_Handle_Selected_Hover_Background:"var(--sapButton_Handle_Selected_Hover_Background)",sapButton_Handle_Selected_Hover_BorderColor:"var(--sapButton_Handle_Selected_Hover_BorderColor)",sapButton_Track_Negative_Background:"var(--sapButton_Track_Negative_Background)",sapButton_Track_Negative_BorderColor:"var(--sapButton_Track_Negative_BorderColor)",sapButton_Track_Negative_TextColor:"var(--sapButton_Track_Negative_TextColor)",sapButton_Track_Negative_Hover_Background:"var(--sapButton_Track_Negative_Hover_Background)",sapButton_Track_Negative_Hover_BorderColor:"var(--sapButton_Track_Negative_Hover_BorderColor)",sapButton_Handle_Negative_Background:"var(--sapButton_Handle_Negative_Background)",sapButton_Handle_Negative_BorderColor:"var(--sapButton_Handle_Negative_BorderColor)",sapButton_Handle_Negative_TextColor:"var(--sapButton_Handle_Negative_TextColor)",sapButton_Handle_Negative_Hover_Background:"var(--sapButton_Handle_Negative_Hover_Background)",sapButton_Handle_Negative_Hover_BorderColor:"var(--sapButton_Handle_Negative_Hover_BorderColor)",sapButton_Track_Positive_Background:"var(--sapButton_Track_Positive_Background)",sapButton_Track_Positive_BorderColor:"var(--sapButton_Track_Positive_BorderColor)",sapButton_Track_Positive_TextColor:"var(--sapButton_Track_Positive_TextColor)",sapButton_Track_Positive_Hover_Background:"var(--sapButton_Track_Positive_Hover_Background)",sapButton_Track_Positive_Hover_BorderColor:"var(--sapButton_Track_Positive_Hover_BorderColor)",sapButton_Handle_Positive_Background:"var(--sapButton_Handle_Positive_Background)",sapButton_Handle_Positive_BorderColor:"var(--sapButton_Handle_Positive_BorderColor)",sapButton_Handle_Positive_TextColor:"var(--sapButton_Handle_Positive_TextColor)",sapButton_Handle_Positive_Hover_Background:"var(--sapButton_Handle_Positive_Hover_Background)",sapButton_Handle_Positive_Hover_BorderColor:"var(--sapButton_Handle_Positive_Hover_BorderColor)",sapButton_TokenBackground:"var(--sapButton_TokenBackground)",sapButton_TokenBorderColor:"var(--sapButton_TokenBorderColor)",sapField_Background:"var(--sapField_Background)",sapField_BackgroundStyle:"var(--sapField_BackgroundStyle)",sapField_TextColor:"var(--sapField_TextColor)",sapField_PlaceholderTextColor:"var(--sapField_PlaceholderTextColor)",sapField_BorderColor:"var(--sapField_BorderColor)",sapField_HelpBackground:"var(--sapField_HelpBackground)",sapField_BorderWidth:"var(--sapField_BorderWidth)",sapField_BorderStyle:"var(--sapField_BorderStyle)",sapField_BorderCornerRadius:"var(--sapField_BorderCornerRadius)",sapField_Shadow:"var(--sapField_Shadow)",sapField_Hover_Background:"var(--sapField_Hover_Background)",sapField_Hover_BackgroundStyle:"var(--sapField_Hover_BackgroundStyle)",sapField_Hover_BorderColor:"var(--sapField_Hover_BorderColor)",sapField_Hover_HelpBackground:"var(--sapField_Hover_HelpBackground)",sapField_Hover_Shadow:"var(--sapField_Hover_Shadow)",sapField_Hover_InvalidShadow:"var(--sapField_Hover_InvalidShadow)",sapField_Hover_WarningShadow:"var(--sapField_Hover_WarningShadow)",sapField_Hover_SuccessShadow:"var(--sapField_Hover_SuccessShadow)",sapField_Hover_InformationShadow:"var(--sapField_Hover_InformationShadow)",sapField_Active_BorderColor:"var(--sapField_Active_BorderColor)",sapField_Focus_Background:"var(--sapField_Focus_Background)",sapField_Focus_BorderColor:"var(--sapField_Focus_BorderColor)",sapField_Focus_HelpBackground:"var(--sapField_Focus_HelpBackground)",sapField_ReadOnly_Background:"var(--sapField_ReadOnly_Background)",sapField_ReadOnly_BackgroundStyle:"var(--sapField_ReadOnly_BackgroundStyle)",sapField_ReadOnly_BorderColor:"var(--sapField_ReadOnly_BorderColor)",sapField_ReadOnly_BorderStyle:"var(--sapField_ReadOnly_BorderStyle)",sapField_ReadOnly_HelpBackground:"var(--sapField_ReadOnly_HelpBackground)",sapField_RequiredColor:"var(--sapField_RequiredColor)",sapField_InvalidColor:"var(--sapField_InvalidColor)",sapField_InvalidBackground:"var(--sapField_InvalidBackground)",sapField_InvalidBackgroundStyle:"var(--sapField_InvalidBackgroundStyle)",sapField_InvalidBorderWidth:"var(--sapField_InvalidBorderWidth)",sapField_InvalidBorderStyle:"var(--sapField_InvalidBorderStyle)",sapField_InvalidShadow:"var(--sapField_InvalidShadow)",sapField_WarningColor:"var(--sapField_WarningColor)",sapField_WarningBackground:"var(--sapField_WarningBackground)",sapField_WarningBackgroundStyle:"var(--sapField_WarningBackgroundStyle)",sapField_WarningBorderWidth:"var(--sapField_WarningBorderWidth)",sapField_WarningBorderStyle:"var(--sapField_WarningBorderStyle)",sapField_WarningShadow:"var(--sapField_WarningShadow)",sapField_SuccessColor:"var(--sapField_SuccessColor)",sapField_SuccessBackground:"var(--sapField_SuccessBackground)",sapField_SuccessBackgroundStyle:"var(--sapField_SuccessBackgroundStyle)",sapField_SuccessBorderWidth:"var(--sapField_SuccessBorderWidth)",sapField_SuccessBorderStyle:"var(--sapField_SuccessBorderStyle)",sapField_SuccessShadow:"var(--sapField_SuccessShadow)",sapField_InformationColor:"var(--sapField_InformationColor)",sapField_InformationBackground:"var(--sapField_InformationBackground)",sapField_InformationBackgroundStyle:"var(--sapField_InformationBackgroundStyle)",sapField_InformationBorderWidth:"var(--sapField_InformationBorderWidth)",sapField_InformationBorderStyle:"var(--sapField_InformationBorderStyle)",sapField_InformationShadow:"var(--sapField_InformationShadow)",sapGroup_TitleBackground:"var(--sapGroup_TitleBackground)",sapGroup_TitleBorderColor:"var(--sapGroup_TitleBorderColor)",sapGroup_TitleTextColor:"var(--sapGroup_TitleTextColor)",sapGroup_Title_FontSize:"var(--sapGroup_Title_FontSize)",sapGroup_ContentBackground:"var(--sapGroup_ContentBackground)",sapGroup_ContentBorderColor:"var(--sapGroup_ContentBorderColor)",sapGroup_BorderWidth:"var(--sapGroup_BorderWidth)",sapGroup_BorderCornerRadius:"var(--sapGroup_BorderCornerRadius)",sapGroup_FooterBackground:"var(--sapGroup_FooterBackground)",sapToolbar_Background:"var(--sapToolbar_Background)",sapToolbar_SeparatorColor:"var(--sapToolbar_SeparatorColor)",sapList_HeaderBackground:"var(--sapList_HeaderBackground)",sapList_HeaderBorderColor:"var(--sapList_HeaderBorderColor)",sapList_HeaderTextColor:"var(--sapList_HeaderTextColor)",sapList_BorderColor:"var(--sapList_BorderColor)",sapList_BorderWidth:"var(--sapList_BorderWidth)",sapList_TextColor:"var(--sapList_TextColor)",sapList_Active_TextColor:"var(--sapList_Active_TextColor)",sapList_Active_Background:"var(--sapList_Active_Background)",sapList_SelectionBackgroundColor:"var(--sapList_SelectionBackgroundColor)",sapList_SelectionBorderColor:"var(--sapList_SelectionBorderColor)",sapList_Hover_SelectionBackground:"var(--sapList_Hover_SelectionBackground)",sapList_Background:"var(--sapList_Background)",sapList_Hover_Background:"var(--sapList_Hover_Background)",sapList_AlternatingBackground:"var(--sapList_AlternatingBackground)",sapList_GroupHeaderBackground:"var(--sapList_GroupHeaderBackground)",sapList_GroupHeaderBorderColor:"var(--sapList_GroupHeaderBorderColor)",sapList_GroupHeaderTextColor:"var(--sapList_GroupHeaderTextColor)",sapList_TableGroupHeaderBackground:"var(--sapList_TableGroupHeaderBackground)",sapList_TableGroupHeaderBorderColor:"var(--sapList_TableGroupHeaderBorderColor)",sapList_TableGroupHeaderTextColor:"var(--sapList_TableGroupHeaderTextColor)",sapList_FooterBackground:"var(--sapList_FooterBackground)",sapList_FooterTextColor:"var(--sapList_FooterTextColor)",sapList_TableFooterBorder:"var(--sapList_TableFooterBorder)",sapList_TableFixedBorderColor:"var(--sapList_TableFixedBorderColor)",sapMessage_ErrorBorderColor:"var(--sapMessage_ErrorBorderColor)",sapMessage_WarningBorderColor:"var(--sapMessage_WarningBorderColor)",sapMessage_SuccessBorderColor:"var(--sapMessage_SuccessBorderColor)",sapMessage_InformationBorderColor:"var(--sapMessage_InformationBorderColor)",sapPopover_BorderCornerRadius:"var(--sapPopover_BorderCornerRadius)",sapProgress_Background:"var(--sapProgress_Background)",sapProgress_BorderColor:"var(--sapProgress_BorderColor)",sapProgress_TextColor:"var(--sapProgress_TextColor)",sapProgress_FontSize:"var(--sapProgress_FontSize)",sapProgress_NegativeBackground:"var(--sapProgress_NegativeBackground)",sapProgress_NegativeBorderColor:"var(--sapProgress_NegativeBorderColor)",sapProgress_NegativeTextColor:"var(--sapProgress_NegativeTextColor)",sapProgress_CriticalBackground:"var(--sapProgress_CriticalBackground)",sapProgress_CriticalBorderColor:"var(--sapProgress_CriticalBorderColor)",sapProgress_CriticalTextColor:"var(--sapProgress_CriticalTextColor)",sapProgress_PositiveBackground:"var(--sapProgress_PositiveBackground)",sapProgress_PositiveBorderColor:"var(--sapProgress_PositiveBorderColor)",sapProgress_PositiveTextColor:"var(--sapProgress_PositiveTextColor)",sapProgress_InformationBackground:"var(--sapProgress_InformationBackground)",sapProgress_InformationBorderColor:"var(--sapProgress_InformationBorderColor)",sapProgress_InformationTextColor:"var(--sapProgress_InformationTextColor)",sapProgress_Value_Background:"var(--sapProgress_Value_Background)",sapProgress_Value_BorderColor:"var(--sapProgress_Value_BorderColor)",sapProgress_Value_TextColor:"var(--sapProgress_Value_TextColor)",sapProgress_Value_NegativeBackground:"var(--sapProgress_Value_NegativeBackground)",sapProgress_Value_NegativeBorderColor:"var(--sapProgress_Value_NegativeBorderColor)",sapProgress_Value_NegativeTextColor:"var(--sapProgress_Value_NegativeTextColor)",sapProgress_Value_CriticalBackground:"var(--sapProgress_Value_CriticalBackground)",sapProgress_Value_CriticalBorderColor:"var(--sapProgress_Value_CriticalBorderColor)",sapProgress_Value_CriticalTextColor:"var(--sapProgress_Value_CriticalTextColor)",sapProgress_Value_PositiveBackground:"var(--sapProgress_Value_PositiveBackground)",sapProgress_Value_PositiveBorderColor:"var(--sapProgress_Value_PositiveBorderColor)",sapProgress_Value_PositiveTextColor:"var(--sapProgress_Value_PositiveTextColor)",sapProgress_Value_InformationBackground:"var(--sapProgress_Value_InformationBackground)",sapProgress_Value_InformationBorderColor:"var(--sapProgress_Value_InformationBorderColor)",sapProgress_Value_InformationTextColor:"var(--sapProgress_Value_InformationTextColor)",sapScrollBar_FaceColor:"var(--sapScrollBar_FaceColor)",sapScrollBar_TrackColor:"var(--sapScrollBar_TrackColor)",sapScrollBar_BorderColor:"var(--sapScrollBar_BorderColor)",sapScrollBar_SymbolColor:"var(--sapScrollBar_SymbolColor)",sapScrollBar_Dimension:"var(--sapScrollBar_Dimension)",sapScrollBar_Hover_FaceColor:"var(--sapScrollBar_Hover_FaceColor)",sapSlider_Background:"var(--sapSlider_Background)",sapSlider_BorderColor:"var(--sapSlider_BorderColor)",sapSlider_Selected_Background:"var(--sapSlider_Selected_Background)",sapSlider_Selected_BorderColor:"var(--sapSlider_Selected_BorderColor)",sapSlider_HandleBackground:"var(--sapSlider_HandleBackground)",sapSlider_HandleBorderColor:"var(--sapSlider_HandleBorderColor)",sapSlider_RangeHandleBackground:"var(--sapSlider_RangeHandleBackground)",sapSlider_Hover_HandleBackground:"var(--sapSlider_Hover_HandleBackground)",sapSlider_Hover_HandleBorderColor:"var(--sapSlider_Hover_HandleBorderColor)",sapSlider_Hover_RangeHandleBackground:"var(--sapSlider_Hover_RangeHandleBackground)",sapSlider_Active_HandleBackground:"var(--sapSlider_Active_HandleBackground)",sapSlider_Active_HandleBorderColor:"var(--sapSlider_Active_HandleBorderColor)",sapSlider_Active_RangeHandleBackground:"var(--sapSlider_Active_RangeHandleBackground)",sapPageHeader_Background:"var(--sapPageHeader_Background)",sapPageHeader_BorderColor:"var(--sapPageHeader_BorderColor)",sapPageHeader_TextColor:"var(--sapPageHeader_TextColor)",sapPageFooter_Background:"var(--sapPageFooter_Background)",sapPageFooter_BorderColor:"var(--sapPageFooter_BorderColor)",sapPageFooter_TextColor:"var(--sapPageFooter_TextColor)",sapInfobar_Background:"var(--sapInfobar_Background)",sapInfobar_Hover_Background:"var(--sapInfobar_Hover_Background)",sapInfobar_Active_Background:"var(--sapInfobar_Active_Background)",sapInfobar_NonInteractive_Background:"var(--sapInfobar_NonInteractive_Background)",sapInfobar_TextColor:"var(--sapInfobar_TextColor)",sapObjectHeader_Background:"var(--sapObjectHeader_Background)",sapObjectHeader_Hover_Background:"var(--sapObjectHeader_Hover_Background)",sapObjectHeader_BorderColor:"var(--sapObjectHeader_BorderColor)",sapObjectHeader_Title_TextColor:"var(--sapObjectHeader_Title_TextColor)",sapObjectHeader_Title_FontSize:"var(--sapObjectHeader_Title_FontSize)",sapObjectHeader_Title_SnappedFontSize:"var(--sapObjectHeader_Title_SnappedFontSize)",sapObjectHeader_Title_FontFamily:"var(--sapObjectHeader_Title_FontFamily)",sapObjectHeader_Subtitle_TextColor:"var(--sapObjectHeader_Subtitle_TextColor)",sapBlockLayer_Background:"var(--sapBlockLayer_Background)",sapTile_Background:"var(--sapTile_Background)",sapTile_Hover_Background:"var(--sapTile_Hover_Background)",sapTile_Active_Background:"var(--sapTile_Active_Background)",sapTile_BorderColor:"var(--sapTile_BorderColor)",sapTile_BorderCornerRadius:"var(--sapTile_BorderCornerRadius)",sapTile_TitleTextColor:"var(--sapTile_TitleTextColor)",sapTile_TextColor:"var(--sapTile_TextColor)",sapTile_IconColor:"var(--sapTile_IconColor)",sapTile_SeparatorColor:"var(--sapTile_SeparatorColor)",sapTile_Interactive_BorderColor:"var(--sapTile_Interactive_BorderColor)",sapTile_OverlayBackground:"var(--sapTile_OverlayBackground)",sapTile_OverlayForegroundColor:"var(--sapTile_OverlayForegroundColor)",sapAccentColor1:"var(--sapAccentColor1)",sapAccentColor2:"var(--sapAccentColor2)",sapAccentColor3:"var(--sapAccentColor3)",sapAccentColor4:"var(--sapAccentColor4)",sapAccentColor5:"var(--sapAccentColor5)",sapAccentColor6:"var(--sapAccentColor6)",sapAccentColor7:"var(--sapAccentColor7)",sapAccentColor8:"var(--sapAccentColor8)",sapAccentColor9:"var(--sapAccentColor9)",sapAccentColor10:"var(--sapAccentColor10)",sapAccentBackgroundColor1:"var(--sapAccentBackgroundColor1)",sapAccentBackgroundColor2:"var(--sapAccentBackgroundColor2)",sapAccentBackgroundColor3:"var(--sapAccentBackgroundColor3)",sapAccentBackgroundColor4:"var(--sapAccentBackgroundColor4)",sapAccentBackgroundColor5:"var(--sapAccentBackgroundColor5)",sapAccentBackgroundColor6:"var(--sapAccentBackgroundColor6)",sapAccentBackgroundColor7:"var(--sapAccentBackgroundColor7)",sapAccentBackgroundColor8:"var(--sapAccentBackgroundColor8)",sapAccentBackgroundColor9:"var(--sapAccentBackgroundColor9)",sapAccentBackgroundColor10:"var(--sapAccentBackgroundColor10)",sapIndicationColor_1:"var(--sapIndicationColor_1)",sapIndicationColor_1_Background:"var(--sapIndicationColor_1_Background)",sapIndicationColor_1_BorderColor:"var(--sapIndicationColor_1_BorderColor)",sapIndicationColor_1_TextColor:"var(--sapIndicationColor_1_TextColor)",sapIndicationColor_1_Hover_Background:"var(--sapIndicationColor_1_Hover_Background)",sapIndicationColor_1_Active_Background:"var(--sapIndicationColor_1_Active_Background)",sapIndicationColor_1_Active_BorderColor:"var(--sapIndicationColor_1_Active_BorderColor)",sapIndicationColor_1_Active_TextColor:"var(--sapIndicationColor_1_Active_TextColor)",sapIndicationColor_1_Selected_Background:"var(--sapIndicationColor_1_Selected_Background)",sapIndicationColor_1_Selected_BorderColor:"var(--sapIndicationColor_1_Selected_BorderColor)",sapIndicationColor_1_Selected_TextColor:"var(--sapIndicationColor_1_Selected_TextColor)",sapIndicationColor_1b:"var(--sapIndicationColor_1b)",sapIndicationColor_1b_BorderColor:"var(--sapIndicationColor_1b_BorderColor)",sapIndicationColor_1b_Hover_Background:"var(--sapIndicationColor_1b_Hover_Background)",sapIndicationColor_2:"var(--sapIndicationColor_2)",sapIndicationColor_2_Background:"var(--sapIndicationColor_2_Background)",sapIndicationColor_2_BorderColor:"var(--sapIndicationColor_2_BorderColor)",sapIndicationColor_2_TextColor:"var(--sapIndicationColor_2_TextColor)",sapIndicationColor_2_Hover_Background:"var(--sapIndicationColor_2_Hover_Background)",sapIndicationColor_2_Active_Background:"var(--sapIndicationColor_2_Active_Background)",sapIndicationColor_2_Active_BorderColor:"var(--sapIndicationColor_2_Active_BorderColor)",sapIndicationColor_2_Active_TextColor:"var(--sapIndicationColor_2_Active_TextColor)",sapIndicationColor_2_Selected_Background:"var(--sapIndicationColor_2_Selected_Background)",sapIndicationColor_2_Selected_BorderColor:"var(--sapIndicationColor_2_Selected_BorderColor)",sapIndicationColor_2_Selected_TextColor:"var(--sapIndicationColor_2_Selected_TextColor)",sapIndicationColor_2b:"var(--sapIndicationColor_2b)",sapIndicationColor_2b_BorderColor:"var(--sapIndicationColor_2b_BorderColor)",sapIndicationColor_2b_Hover_Background:"var(--sapIndicationColor_2b_Hover_Background)",sapIndicationColor_3:"var(--sapIndicationColor_3)",sapIndicationColor_3_Background:"var(--sapIndicationColor_3_Background)",sapIndicationColor_3_BorderColor:"var(--sapIndicationColor_3_BorderColor)",sapIndicationColor_3_TextColor:"var(--sapIndicationColor_3_TextColor)",sapIndicationColor_3_Hover_Background:"var(--sapIndicationColor_3_Hover_Background)",sapIndicationColor_3_Active_Background:"var(--sapIndicationColor_3_Active_Background)",sapIndicationColor_3_Active_BorderColor:"var(--sapIndicationColor_3_Active_BorderColor)",sapIndicationColor_3_Active_TextColor:"var(--sapIndicationColor_3_Active_TextColor)",sapIndicationColor_3_Selected_Background:"var(--sapIndicationColor_3_Selected_Background)",sapIndicationColor_3_Selected_BorderColor:"var(--sapIndicationColor_3_Selected_BorderColor)",sapIndicationColor_3_Selected_TextColor:"var(--sapIndicationColor_3_Selected_TextColor)",sapIndicationColor_3b:"var(--sapIndicationColor_3b)",sapIndicationColor_3b_BorderColor:"var(--sapIndicationColor_3b_BorderColor)",sapIndicationColor_3b_Hover_Background:"var(--sapIndicationColor_3b_Hover_Background)",sapIndicationColor_4:"var(--sapIndicationColor_4)",sapIndicationColor_4_Background:"var(--sapIndicationColor_4_Background)",sapIndicationColor_4_BorderColor:"var(--sapIndicationColor_4_BorderColor)",sapIndicationColor_4_TextColor:"var(--sapIndicationColor_4_TextColor)",sapIndicationColor_4_Hover_Background:"var(--sapIndicationColor_4_Hover_Background)",sapIndicationColor_4_Active_Background:"var(--sapIndicationColor_4_Active_Background)",sapIndicationColor_4_Active_BorderColor:"var(--sapIndicationColor_4_Active_BorderColor)",sapIndicationColor_4_Active_TextColor:"var(--sapIndicationColor_4_Active_TextColor)",sapIndicationColor_4_Selected_Background:"var(--sapIndicationColor_4_Selected_Background)",sapIndicationColor_4_Selected_BorderColor:"var(--sapIndicationColor_4_Selected_BorderColor)",sapIndicationColor_4_Selected_TextColor:"var(--sapIndicationColor_4_Selected_TextColor)",sapIndicationColor_4b:"var(--sapIndicationColor_4b)",sapIndicationColor_4b_BorderColor:"var(--sapIndicationColor_4b_BorderColor)",sapIndicationColor_4b_Hover_Background:"var(--sapIndicationColor_4b_Hover_Background)",sapIndicationColor_5:"var(--sapIndicationColor_5)",sapIndicationColor_5_Background:"var(--sapIndicationColor_5_Background)",sapIndicationColor_5_BorderColor:"var(--sapIndicationColor_5_BorderColor)",sapIndicationColor_5_TextColor:"var(--sapIndicationColor_5_TextColor)",sapIndicationColor_5_Hover_Background:"var(--sapIndicationColor_5_Hover_Background)",sapIndicationColor_5_Active_Background:"var(--sapIndicationColor_5_Active_Background)",sapIndicationColor_5_Active_BorderColor:"var(--sapIndicationColor_5_Active_BorderColor)",sapIndicationColor_5_Active_TextColor:"var(--sapIndicationColor_5_Active_TextColor)",sapIndicationColor_5_Selected_Background:"var(--sapIndicationColor_5_Selected_Background)",sapIndicationColor_5_Selected_BorderColor:"var(--sapIndicationColor_5_Selected_BorderColor)",sapIndicationColor_5_Selected_TextColor:"var(--sapIndicationColor_5_Selected_TextColor)",sapIndicationColor_5b:"var(--sapIndicationColor_5b)",sapIndicationColor_5b_BorderColor:"var(--sapIndicationColor_5b_BorderColor)",sapIndicationColor_5b_Hover_Background:"var(--sapIndicationColor_5b_Hover_Background)",sapIndicationColor_6:"var(--sapIndicationColor_6)",sapIndicationColor_6_Background:"var(--sapIndicationColor_6_Background)",sapIndicationColor_6_BorderColor:"var(--sapIndicationColor_6_BorderColor)",sapIndicationColor_6_TextColor:"var(--sapIndicationColor_6_TextColor)",sapIndicationColor_6_Hover_Background:"var(--sapIndicationColor_6_Hover_Background)",sapIndicationColor_6_Active_Background:"var(--sapIndicationColor_6_Active_Background)",sapIndicationColor_6_Active_BorderColor:"var(--sapIndicationColor_6_Active_BorderColor)",sapIndicationColor_6_Active_TextColor:"var(--sapIndicationColor_6_Active_TextColor)",sapIndicationColor_6_Selected_Background:"var(--sapIndicationColor_6_Selected_Background)",sapIndicationColor_6_Selected_BorderColor:"var(--sapIndicationColor_6_Selected_BorderColor)",sapIndicationColor_6_Selected_TextColor:"var(--sapIndicationColor_6_Selected_TextColor)",sapIndicationColor_6b:"var(--sapIndicationColor_6b)",sapIndicationColor_6b_BorderColor:"var(--sapIndicationColor_6b_BorderColor)",sapIndicationColor_6b_Hover_Background:"var(--sapIndicationColor_6b_Hover_Background)",sapIndicationColor_7:"var(--sapIndicationColor_7)",sapIndicationColor_7_Background:"var(--sapIndicationColor_7_Background)",sapIndicationColor_7_BorderColor:"var(--sapIndicationColor_7_BorderColor)",sapIndicationColor_7_TextColor:"var(--sapIndicationColor_7_TextColor)",sapIndicationColor_7_Hover_Background:"var(--sapIndicationColor_7_Hover_Background)",sapIndicationColor_7_Active_Background:"var(--sapIndicationColor_7_Active_Background)",sapIndicationColor_7_Active_BorderColor:"var(--sapIndicationColor_7_Active_BorderColor)",sapIndicationColor_7_Active_TextColor:"var(--sapIndicationColor_7_Active_TextColor)",sapIndicationColor_7_Selected_Background:"var(--sapIndicationColor_7_Selected_Background)",sapIndicationColor_7_Selected_BorderColor:"var(--sapIndicationColor_7_Selected_BorderColor)",sapIndicationColor_7_Selected_TextColor:"var(--sapIndicationColor_7_Selected_TextColor)",sapIndicationColor_7b:"var(--sapIndicationColor_7b)",sapIndicationColor_7b_BorderColor:"var(--sapIndicationColor_7b_BorderColor)",sapIndicationColor_7b_Hover_Background:"var(--sapIndicationColor_7b_Hover_Background)",sapIndicationColor_8:"var(--sapIndicationColor_8)",sapIndicationColor_8_Background:"var(--sapIndicationColor_8_Background)",sapIndicationColor_8_BorderColor:"var(--sapIndicationColor_8_BorderColor)",sapIndicationColor_8_TextColor:"var(--sapIndicationColor_8_TextColor)",sapIndicationColor_8_Hover_Background:"var(--sapIndicationColor_8_Hover_Background)",sapIndicationColor_8_Active_Background:"var(--sapIndicationColor_8_Active_Background)",sapIndicationColor_8_Active_BorderColor:"var(--sapIndicationColor_8_Active_BorderColor)",sapIndicationColor_8_Active_TextColor:"var(--sapIndicationColor_8_Active_TextColor)",sapIndicationColor_8_Selected_Background:"var(--sapIndicationColor_8_Selected_Background)",sapIndicationColor_8_Selected_BorderColor:"var(--sapIndicationColor_8_Selected_BorderColor)",sapIndicationColor_8_Selected_TextColor:"var(--sapIndicationColor_8_Selected_TextColor)",sapIndicationColor_8b:"var(--sapIndicationColor_8b)",sapIndicationColor_8b_BorderColor:"var(--sapIndicationColor_8b_BorderColor)",sapIndicationColor_8b_Hover_Background:"var(--sapIndicationColor_8b_Hover_Background)",sapIndicationColor_9:"var(--sapIndicationColor_9)",sapIndicationColor_9_Background:"var(--sapIndicationColor_9_Background)",sapIndicationColor_9_BorderColor:"var(--sapIndicationColor_9_BorderColor)",sapIndicationColor_9_TextColor:"var(--sapIndicationColor_9_TextColor)",sapIndicationColor_9_Hover_Background:"var(--sapIndicationColor_9_Hover_Background)",sapIndicationColor_9_Active_Background:"var(--sapIndicationColor_9_Active_Background)",sapIndicationColor_9_Active_BorderColor:"var(--sapIndicationColor_9_Active_BorderColor)",sapIndicationColor_9_Active_TextColor:"var(--sapIndicationColor_9_Active_TextColor)",sapIndicationColor_9_Selected_Background:"var(--sapIndicationColor_9_Selected_Background)",sapIndicationColor_9_Selected_BorderColor:"var(--sapIndicationColor_9_Selected_BorderColor)",sapIndicationColor_9_Selected_TextColor:"var(--sapIndicationColor_9_Selected_TextColor)",sapIndicationColor_9b:"var(--sapIndicationColor_9b)",sapIndicationColor_9b_BorderColor:"var(--sapIndicationColor_9b_BorderColor)",sapIndicationColor_9b_Hover_Background:"var(--sapIndicationColor_9b_Hover_Background)",sapIndicationColor_10:"var(--sapIndicationColor_10)",sapIndicationColor_10_Background:"var(--sapIndicationColor_10_Background)",sapIndicationColor_10_BorderColor:"var(--sapIndicationColor_10_BorderColor)",sapIndicationColor_10_TextColor:"var(--sapIndicationColor_10_TextColor)",sapIndicationColor_10_Hover_Background:"var(--sapIndicationColor_10_Hover_Background)",sapIndicationColor_10_Active_Background:"var(--sapIndicationColor_10_Active_Background)",sapIndicationColor_10_Active_BorderColor:"var(--sapIndicationColor_10_Active_BorderColor)",sapIndicationColor_10_Active_TextColor:"var(--sapIndicationColor_10_Active_TextColor)",sapIndicationColor_10_Selected_Background:"var(--sapIndicationColor_10_Selected_Background)",sapIndicationColor_10_Selected_BorderColor:"var(--sapIndicationColor_10_Selected_BorderColor)",sapIndicationColor_10_Selected_TextColor:"var(--sapIndicationColor_10_Selected_TextColor)",sapIndicationColor_10b:"var(--sapIndicationColor_10b)",sapIndicationColor_10b_BorderColor:"var(--sapIndicationColor_10b_BorderColor)",sapIndicationColor_10b_Hover_Background:"var(--sapIndicationColor_10b_Hover_Background)",sapLegend_WorkingBackground:"var(--sapLegend_WorkingBackground)",sapLegend_NonWorkingBackground:"var(--sapLegend_NonWorkingBackground)",sapLegend_CurrentDateTime:"var(--sapLegend_CurrentDateTime)",sapLegendColor1:"var(--sapLegendColor1)",sapLegendColor2:"var(--sapLegendColor2)",sapLegendColor3:"var(--sapLegendColor3)",sapLegendColor4:"var(--sapLegendColor4)",sapLegendColor5:"var(--sapLegendColor5)",sapLegendColor6:"var(--sapLegendColor6)",sapLegendColor7:"var(--sapLegendColor7)",sapLegendColor8:"var(--sapLegendColor8)",sapLegendColor9:"var(--sapLegendColor9)",sapLegendColor10:"var(--sapLegendColor10)",sapLegendColor11:"var(--sapLegendColor11)",sapLegendColor12:"var(--sapLegendColor12)",sapLegendColor13:"var(--sapLegendColor13)",sapLegendColor14:"var(--sapLegendColor14)",sapLegendColor15:"var(--sapLegendColor15)",sapLegendColor16:"var(--sapLegendColor16)",sapLegendColor17:"var(--sapLegendColor17)",sapLegendColor18:"var(--sapLegendColor18)",sapLegendColor19:"var(--sapLegendColor19)",sapLegendColor20:"var(--sapLegendColor20)",sapLegendBackgroundColor1:"var(--sapLegendBackgroundColor1)",sapLegendBackgroundColor2:"var(--sapLegendBackgroundColor2)",sapLegendBackgroundColor3:"var(--sapLegendBackgroundColor3)",sapLegendBackgroundColor4:"var(--sapLegendBackgroundColor4)",sapLegendBackgroundColor5:"var(--sapLegendBackgroundColor5)",sapLegendBackgroundColor6:"var(--sapLegendBackgroundColor6)",sapLegendBackgroundColor7:"var(--sapLegendBackgroundColor7)",sapLegendBackgroundColor8:"var(--sapLegendBackgroundColor8)",sapLegendBackgroundColor9:"var(--sapLegendBackgroundColor9)",sapLegendBackgroundColor10:"var(--sapLegendBackgroundColor10)",sapLegendBackgroundColor11:"var(--sapLegendBackgroundColor11)",sapLegendBackgroundColor12:"var(--sapLegendBackgroundColor12)",sapLegendBackgroundColor13:"var(--sapLegendBackgroundColor13)",sapLegendBackgroundColor14:"var(--sapLegendBackgroundColor14)",sapLegendBackgroundColor15:"var(--sapLegendBackgroundColor15)",sapLegendBackgroundColor16:"var(--sapLegendBackgroundColor16)",sapLegendBackgroundColor17:"var(--sapLegendBackgroundColor17)",sapLegendBackgroundColor18:"var(--sapLegendBackgroundColor18)",sapLegendBackgroundColor19:"var(--sapLegendBackgroundColor19)",sapLegendBackgroundColor20:"var(--sapLegendBackgroundColor20)",sapChart_OrderedColor_1:"var(--sapChart_OrderedColor_1)",sapChart_OrderedColor_2:"var(--sapChart_OrderedColor_2)",sapChart_OrderedColor_3:"var(--sapChart_OrderedColor_3)",sapChart_OrderedColor_4:"var(--sapChart_OrderedColor_4)",sapChart_OrderedColor_5:"var(--sapChart_OrderedColor_5)",sapChart_OrderedColor_6:"var(--sapChart_OrderedColor_6)",sapChart_OrderedColor_7:"var(--sapChart_OrderedColor_7)",sapChart_OrderedColor_8:"var(--sapChart_OrderedColor_8)",sapChart_OrderedColor_9:"var(--sapChart_OrderedColor_9)",sapChart_OrderedColor_10:"var(--sapChart_OrderedColor_10)",sapChart_OrderedColor_11:"var(--sapChart_OrderedColor_11)",sapChart_Bad:"var(--sapChart_Bad)",sapChart_Critical:"var(--sapChart_Critical)",sapChart_Good:"var(--sapChart_Good)",sapChart_Neutral:"var(--sapChart_Neutral)",sapChart_Sequence_1:"var(--sapChart_Sequence_1)",sapChart_Sequence_2:"var(--sapChart_Sequence_2)",sapChart_Sequence_3:"var(--sapChart_Sequence_3)",sapChart_Sequence_4:"var(--sapChart_Sequence_4)",sapChart_Sequence_5:"var(--sapChart_Sequence_5)",sapChart_Sequence_6:"var(--sapChart_Sequence_6)",sapChart_Sequence_7:"var(--sapChart_Sequence_7)",sapChart_Sequence_8:"var(--sapChart_Sequence_8)",sapChart_Sequence_9:"var(--sapChart_Sequence_9)",sapChart_Sequence_10:"var(--sapChart_Sequence_10)",sapChart_Sequence_11:"var(--sapChart_Sequence_11)",sapChart_Sequence_Neutral:"var(--sapChart_Sequence_Neutral)","sapFontUrl_SAP-icons_ttf":"var(--sapFontUrl_SAP-icons_ttf)","sapFontUrl_SAP-icons_woff":"var(--sapFontUrl_SAP-icons_woff)","sapFontUrl_SAP-icons_woff2":"var(--sapFontUrl_SAP-icons_woff2)","sapFontUrl_SAP-icons-TNT_ttf":"var(--sapFontUrl_SAP-icons-TNT_ttf)","sapFontUrl_SAP-icons-TNT_woff":"var(--sapFontUrl_SAP-icons-TNT_woff)","sapFontUrl_SAP-icons-TNT_woff2":"var(--sapFontUrl_SAP-icons-TNT_woff2)","sapFontUrl_SAP-icons-Business-Suite_ttf":"var(--sapFontUrl_SAP-icons-Business-Suite_ttf)","sapFontUrl_SAP-icons-Business-Suite_woff":"var(--sapFontUrl_SAP-icons-Business-Suite_woff)","sapFontUrl_SAP-icons-Business-Suite_woff2":"var(--sapFontUrl_SAP-icons-Business-Suite_woff2)",sapFontUrl_72_Regular_woff2:"var(--sapFontUrl_72_Regular_woff2)",sapFontUrl_72_Regular_woff:"var(--sapFontUrl_72_Regular_woff)",sapFontUrl_72_Regular_full_woff2:"var(--sapFontUrl_72_Regular_full_woff2)",sapFontUrl_72_Regular_full_woff:"var(--sapFontUrl_72_Regular_full_woff)",sapFontUrl_72_Bold_woff2:"var(--sapFontUrl_72_Bold_woff2)",sapFontUrl_72_Bold_woff:"var(--sapFontUrl_72_Bold_woff)",sapFontUrl_72_Bold_full_woff2:"var(--sapFontUrl_72_Bold_full_woff2)",sapFontUrl_72_Bold_full_woff:"var(--sapFontUrl_72_Bold_full_woff)",sapFontUrl_72_Semibold_woff2:"var(--sapFontUrl_72_Semibold_woff2)",sapFontUrl_72_Semibold_woff:"var(--sapFontUrl_72_Semibold_woff)",sapFontUrl_72_Semibold_full_woff2:"var(--sapFontUrl_72_Semibold_full_woff2)",sapFontUrl_72_Semibold_full_woff:"var(--sapFontUrl_72_Semibold_full_woff)",sapFontUrl_72_SemiboldDuplex_woff2:"var(--sapFontUrl_72_SemiboldDuplex_woff2)",sapFontUrl_72_SemiboldDuplex_woff:"var(--sapFontUrl_72_SemiboldDuplex_woff)",sapFontUrl_72_SemiboldDuplex_full_woff2:"var(--sapFontUrl_72_SemiboldDuplex_full_woff2)",sapFontUrl_72_SemiboldDuplex_full_woff:"var(--sapFontUrl_72_SemiboldDuplex_full_woff)",sapFontUrl_72_Light_woff2:"var(--sapFontUrl_72_Light_woff2)",sapFontUrl_72_Light_woff:"var(--sapFontUrl_72_Light_woff)",sapFontUrl_72_Light_full_woff2:"var(--sapFontUrl_72_Light_full_woff2)",sapFontUrl_72_Light_full_woff:"var(--sapFontUrl_72_Light_full_woff)",sapFontUrl_72_Black_woff2:"var(--sapFontUrl_72_Black_woff2)",sapFontUrl_72_Black_woff:"var(--sapFontUrl_72_Black_woff)",sapFontUrl_72_Black_full_woff2:"var(--sapFontUrl_72_Black_full_woff2)",sapFontUrl_72_Black_full_woff:"var(--sapFontUrl_72_Black_full_woff)",sapFontUrl_72_BoldItalic_woff2:"var(--sapFontUrl_72_BoldItalic_woff2)",sapFontUrl_72_BoldItalic_woff:"var(--sapFontUrl_72_BoldItalic_woff)",sapFontUrl_72_BoldItalic_full_woff2:"var(--sapFontUrl_72_BoldItalic_full_woff2)",sapFontUrl_72_BoldItalic_full_woff:"var(--sapFontUrl_72_BoldItalic_full_woff)",sapFontUrl_72_Condensed_woff2:"var(--sapFontUrl_72_Condensed_woff2)",sapFontUrl_72_Condensed_woff:"var(--sapFontUrl_72_Condensed_woff)",sapFontUrl_72_Condensed_full_woff2:"var(--sapFontUrl_72_Condensed_full_woff2)",sapFontUrl_72_Condensed_full_woff:"var(--sapFontUrl_72_Condensed_full_woff)",sapFontUrl_72_CondensedBold_woff2:"var(--sapFontUrl_72_CondensedBold_woff2)",sapFontUrl_72_CondensedBold_woff:"var(--sapFontUrl_72_CondensedBold_woff)",sapFontUrl_72_CondensedBold_full_woff2:"var(--sapFontUrl_72_CondensedBold_full_woff2)",sapFontUrl_72_CondensedBold_full_woff:"var(--sapFontUrl_72_CondensedBold_full_woff)",sapFontUrl_72_Italic_woff2:"var(--sapFontUrl_72_Italic_woff2)",sapFontUrl_72_Italic_woff:"var(--sapFontUrl_72_Italic_woff)",sapFontUrl_72_Italic_full_woff2:"var(--sapFontUrl_72_Italic_full_woff2)",sapFontUrl_72_Italic_full_woff:"var(--sapFontUrl_72_Italic_full_woff)",sapFontUrl_72Mono_Regular_woff2:"var(--sapFontUrl_72Mono_Regular_woff2)",sapFontUrl_72Mono_Regular_woff:"var(--sapFontUrl_72Mono_Regular_woff)",sapFontUrl_72Mono_Regular_full_woff2:"var(--sapFontUrl_72Mono_Regular_full_woff2)",sapFontUrl_72Mono_Regular_full_woff:"var(--sapFontUrl_72Mono_Regular_full_woff)",sapFontUrl_72Mono_Bold_woff2:"var(--sapFontUrl_72Mono_Bold_woff2)",sapFontUrl_72Mono_Bold_woff:"var(--sapFontUrl_72Mono_Bold_woff)",sapFontUrl_72Mono_Bold_full_woff2:"var(--sapFontUrl_72Mono_Bold_full_woff2)",sapFontUrl_72Mono_Bold_full_woff:"var(--sapFontUrl_72Mono_Bold_full_woff)"};var Z;(function(t){t.ui5WcrBarHeight="--_ui5wcr-BarHeight",t.ui5WcrButtonTopBottomPadding="--_ui5wcr-ButtonTopBottomPadding",t.ui5WcrAnalyticalTableExpandButtonHeight="--_ui5wcr-AnalyticalTableExpandButtonHeight",t.ui5WcrAnalyticalTableExpandIconHeight="--_ui5wcr-AnalyticalTableExpandIconHeight",t.ui5WcrAnalyticalTableRowHeight="--_ui5wcr-AnalyticalTableRowHeight",t.ui5WcrAnalyticalTableHeaderRowHeight="--_ui5wcr-AnalyticalTableHeaderRowHeight",t.ui5WcrAnalyticalTableTreePaddingLevel1="--_ui5wcr-AnalyticalTableTreePaddingLevel1",t.ui5WcrAnalyticalTableTreePaddingLevel2="--_ui5wcr-AnalyticalTableTreePaddingLevel2",t.ui5WcrAnalyticalTableTreePaddingLevel3="--_ui5wcr-AnalyticalTableTreePaddingLevel3",t.ui5WcrCheckBoxWidthHeight="--_ui5wcr-CheckBoxWidthHeight",t.ui5WcrAnalyticalTableSelectionColumnWidth="--_ui5wcr-AnalyticalTableSelectionColumnWidth",t.ui5WcrToolbarHeight="--_ui5wcr-ToolbarHeight",t.ui5WcrToolbarPopoverContentPadding="--_ui5wcr-ToolbarPopoverContentPadding",t.ui5WcrToolbarSeparatorHeight="--_ui5wcr-ToolbarSeparatorHeight",t.ui5WcrFormGroupTitleHeight="--_ui5wcr-FormGroupTitleHeight",t.ui5WcrMessageViewListItemHeightSingle="--_ui5wcr-MessageViewListItemHeightSingle",t.ui5WcrMessageViewListItemHeightByLine="--_ui5wcr-MessageViewListItemHeightByLine",t.ui5WcrSplitterSize="--_ui5wcr-SplitterSize",t.ui5WcrDialogHeaderHeight="--_ui5wcr-DialogHeaderHeight",t.ui5WcrDialogSubHeaderHeight="--_ui5wcr-DialogSubHeaderHeight",t.ui5WcrElementHeight="--_ui5wcr-ElementHeight"})(Z||(Z={})),new Proxy(Z,{get:(t,e)=>`var(${t[e]})`});const I2={[Z.ui5WcrBarHeight]:"2.75rem",[Z.ui5WcrButtonTopBottomPadding]:"0.25rem 0",[Z.ui5WcrAnalyticalTableExpandButtonHeight]:"2.25rem",[Z.ui5WcrAnalyticalTableExpandIconHeight]:"1rem",[Z.ui5WcrAnalyticalTableRowHeight]:"44px",[Z.ui5WcrAnalyticalTableHeaderRowHeight]:"44px",[Z.ui5WcrAnalyticalTableTreePaddingLevel1]:"1.5rem",[Z.ui5WcrAnalyticalTableTreePaddingLevel2]:"2.25rem",[Z.ui5WcrAnalyticalTableTreePaddingLevel3]:"2.75rem",[Z.ui5WcrCheckBoxWidthHeight]:"2.75rem",[Z.ui5WcrAnalyticalTableSelectionColumnWidth]:"44px",[Z.ui5WcrToolbarHeight]:"2.75rem",[Z.ui5WcrToolbarPopoverContentPadding]:"0.25rem 0.5rem",[Z.ui5WcrToolbarSeparatorHeight]:"2rem",[Z.ui5WcrFormGroupTitleHeight]:"2.75rem",[Z.ui5WcrMessageViewListItemHeightSingle]:"2.75rem",[Z.ui5WcrMessageViewListItemHeightByLine]:"3.325rem",[Z.ui5WcrSplitterSize]:"1rem",[Z.ui5WcrDialogHeaderHeight]:"2.75rem",[Z.ui5WcrDialogSubHeaderHeight]:"3rem",[Z.ui5WcrElementHeight]:$.sapElement_Height},$2={[Z.ui5WcrBarHeight]:"2.5rem",[Z.ui5WcrButtonTopBottomPadding]:"0.1875rem 0",[Z.ui5WcrAnalyticalTableExpandButtonHeight]:"1.5rem",[Z.ui5WcrAnalyticalTableExpandIconHeight]:"0.75rem",[Z.ui5WcrAnalyticalTableRowHeight]:"32px",[Z.ui5WcrAnalyticalTableHeaderRowHeight]:"32px",[Z.ui5WcrAnalyticalTableTreePaddingLevel1]:"1rem",[Z.ui5WcrAnalyticalTableTreePaddingLevel2]:"1.5rem",[Z.ui5WcrAnalyticalTableTreePaddingLevel3]:"2rem",[Z.ui5WcrCheckBoxWidthHeight]:"2rem",[Z.ui5WcrAnalyticalTableSelectionColumnWidth]:"32px",[Z.ui5WcrToolbarHeight]:"2rem",[Z.ui5WcrToolbarPopoverContentPadding]:"0.1875rem 0.375rem",[Z.ui5WcrToolbarSeparatorHeight]:"1.5rem",[Z.ui5WcrFormGroupTitleHeight]:"2rem",[Z.ui5WcrMessageViewListItemHeightSingle]:"2rem",[Z.ui5WcrMessageViewListItemHeightByLine]:"3.25rem",[Z.ui5WcrDialogHeaderHeight]:"2.5rem",[Z.ui5WcrDialogSubHeaderHeight]:"2.25rem",[Z.ui5WcrElementHeight]:$.sapElement_Compact_Height},A2=()=>new Promise(t=>{document.body?t():document.addEventListener("DOMContentLoaded",()=>{t()})}),E2={packageName:"@ui5/webcomponents-base",fileName:"FontFace.css",content:`@font-face{font-family:"72";font-style:normal;font-weight:400;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Regular.woff2?ui5-webcomponents) format("woff2"),local("72")}@font-face{font-family:"72full";font-style:normal;font-weight:400;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Regular-full.woff2?ui5-webcomponents) format("woff2"),local('72-full')}@font-face{font-family:"72";font-style:normal;font-weight:700;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold.woff2?ui5-webcomponents) format("woff2"),local('72-Bold')}@font-face{font-family:"72full";font-style:normal;font-weight:700;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72-Bold';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold.woff2?ui5-webcomponents) format("woff2"),local('72-Bold')}@font-face{font-family:'72-Boldfull';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72-Light';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Light.woff2?ui5-webcomponents) format("woff2"),local('72-Light')}@font-face{font-family:'72-Lightfull';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Light-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72Mono';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Regular.woff2?ui5-webcomponents) format('woff2'),local('72Mono')}@font-face{font-family:'72Monofull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Regular-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:'72Mono-Bold';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Bold.woff2?ui5-webcomponents) format('woff2'),local('72Mono-Bold')}@font-face{font-family:'72Mono-Boldfull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Bold-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:"72Black";font-style:bold;font-weight:900;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Black.woff2?ui5-webcomponents) format("woff2"),local('72Black')}@font-face{font-family:"72-SemiboldDuplex";src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-SemiboldDuplex.woff2?ui5-webcomponents) format("woff2"),local('72-SemiboldDuplex')}`},P2={packageName:"@ui5/webcomponents-base",fileName:"OverrideFontFace.css",content:"@font-face{font-family:'72override';unicode-range:U+0102-0103,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EB7,U+1EB8-1EC7,U+1EC8-1ECB,U+1ECC-1EE3,U+1EE4-1EF1,U+1EF4-1EF7;src:local('Arial'),local('Helvetica'),local('sans-serif')}"},F2=()=>{const t=Xe("OpenUI5Support");(!t||!t.isOpenUI5Detected())&&R2(),L2()},R2=()=>{Is("data-ui5-font-face")||Ts(E2,"data-ui5-font-face")},L2=()=>{Is("data-ui5-font-face-override")||Ts(P2,"data-ui5-font-face-override")},N2={packageName:"@ui5/webcomponents-base",fileName:"SystemCSSVars.css",content:":root{--_ui5_content_density:cozy}.sapUiSizeCompact,.ui5-content-density-compact,[data-ui5-compact-size]{--_ui5_content_density:compact}[dir=rtl]{--_ui5_dir:rtl}[dir=ltr]{--_ui5_dir:ltr}"},D2=()=>{Is("data-ui5-system-css-vars")||Ts(N2,"data-ui5-system-css-vars")};let ef=!1,gc;const Oy=new Xr,O2=t=>{if(!ef){Oy.attachEvent("boot",t);return}t()},H2=async()=>{if(gc!==void 0)return gc;const t=async e=>{if(typeof document>"u"){e();return}Wx(M2),Ix();const n=Xe("OpenUI5Support"),o=n?n.isOpenUI5Detected():!1,r=Xe("F6Navigation");n&&await n.init(),r&&!o&&r.init(),await A2(),await ch(As()),n&&n.attachListeners(),F2(),D2(),e(),ef=!0,await Oy.fireEventAsync("boot")};return gc=new Promise(t),gc},M2=t=>{const e=As();ef&&t===e&&ch(e)},tf=new Map,nf=new Map,Hy=t=>{if(!tf.has(t)){const e=z2(t.split("-"));tf.set(t,e)}return tf.get(t)},My=t=>{if(!nf.has(t)){const e=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();nf.set(t,e)}return nf.get(t)},z2=t=>t.map((e,n)=>n===0?e.toLowerCase():e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(""),j2=t=>{if(!(t instanceof HTMLElement))return"default";const e=t.getAttribute("slot");if(e){const n=e.match(/^(.+?)-\d+$/);return n?n[1]:e}return"default"},zy=t=>t instanceof HTMLSlotElement?t.assignedNodes({flatten:!0}).filter(e=>e instanceof HTMLElement):[t],V2=t=>t.reduce((e,n)=>e.concat(zy(n)),[]);let W2,jy={include:[/^ui5-/],exclude:[]};const of=new Map,Vy=()=>W2,rf=t=>{if(!of.has(t)){const e=jy.include.some(n=>t.match(n))&&!jy.exclude.some(n=>t.match(n));of.set(t,e)}return of.get(t)},af=t=>{if(rf(t))return Vy()};class U2{constructor(e){this.metadata=e}getInitialState(){if(Object.prototype.hasOwnProperty.call(this,"_initialState"))return this._initialState;const e={},n=this.slotsAreManaged(),o=this.getProperties();for(const r in o){const i=o[r].type,a=o[r].defaultValue;i===Boolean?(e[r]=!1,a!==void 0&&console.warn("The 'defaultValue' metadata key is ignored for all booleans properties, they would be initialized with 'false' by default")):o[r].multiple?e[r]=[]:i===Object?e[r]="defaultValue"in o[r]?o[r].defaultValue:{}:i===String?e[r]="defaultValue"in o[r]?o[r].defaultValue:"":e[r]=a}if(n){const r=this.getSlots();for(const[i,a]of Object.entries(r)){const s=a.propertyName||i;e[s]=[]}}return this._initialState=e,e}static validatePropertyValue(e,n){return n.multiple&&e?e.map(r=>Wy(r,n)):Wy(e,n)}static validateSlotValue(e,n){return q2(e,n)}getPureTag(){return this.metadata.tag||""}getTag(){const e=this.metadata.tag;if(!e)return"";const n=af(e);return n?`${e}-${n}`:e}hasAttribute(e){const n=this.getProperties()[e];return n.type!==Object&&!n.noAttribute&&!n.multiple}getPropertiesList(){return Object.keys(this.getProperties())}getAttributesList(){return this.getPropertiesList().filter(this.hasAttribute.bind(this)).map(My)}canSlotText(){const e=this.getSlots().default;return e&&e.type===Node}hasSlots(){return!!Object.entries(this.getSlots()).length}hasIndividualSlots(){return this.slotsAreManaged()&&Object.values(this.getSlots()).some(e=>e.individualSlots)}slotsAreManaged(){return!!this.metadata.managedSlots}supportsF6FastNavigation(){return!!this.metadata.fastNavigation}getProperties(){return this.metadata.properties||(this.metadata.properties={}),this.metadata.properties}getEvents(){return this.metadata.events||(this.metadata.events={}),this.metadata.events}getSlots(){return this.metadata.slots||(this.metadata.slots={}),this.metadata.slots}isLanguageAware(){return!!this.metadata.languageAware}isThemeAware(){return!!this.metadata.themeAware}shouldInvalidateOnChildChange(e,n,o){const r=this.getSlots()[e].invalidateOnChildChange;if(r===void 0)return!1;if(typeof r=="boolean")return r;if(typeof r=="object"){if(n==="property"){if(r.properties===void 0)return!1;if(typeof r.properties=="boolean")return r.properties;if(Array.isArray(r.properties))return r.properties.includes(o);throw new Error("Wrong format for invalidateOnChildChange.properties: boolean or array is expected")}if(n==="slot"){if(r.slots===void 0)return!1;if(typeof r.slots=="boolean")return r.slots;if(Array.isArray(r.slots))return r.slots.includes(o);throw new Error("Wrong format for invalidateOnChildChange.slots: boolean or array is expected")}}throw new Error("Wrong format for invalidateOnChildChange: boolean or object is expected")}}const Wy=(t,e)=>{const n=e.type;let o=e.validator;return n&&n.isDataTypeClass&&(o=n),o?o.isValid(t)?t:e.defaultValue:!n||n===String?typeof t=="string"||typeof t>"u"||t===null?t:t.toString():n===Boolean?typeof t=="boolean"?t:!1:n===Object?typeof t=="object"?t:e.defaultValue:t in n?t:e.defaultValue},q2=(t,e)=>(t&&zy(t).forEach(n=>{if(!(n instanceof e.type))throw new Error(`The element is not of type ${e.type.toString()}`)}),t);class G2 extends HTMLElement{}customElements.get("ui5-static-area")||customElements.define("ui5-static-area",G2);const Y2=10,sf=t=>Array.isArray(t)?t.filter(e=>!!e).flat(Y2).map(e=>typeof e=="string"?e:e.content).join(" "):typeof t=="string"?t:t.content,vc=new Map;dh(t=>{vc.delete(`${t}_normal`)});const Uy=(t,e=!1)=>{const n=t.getMetadata().getTag(),o=`${n}_${e?"static":"normal"}`,r=Xe("OpenUI5Enablement");if(!vc.has(o)){let i,a="";if(r&&(a=sf(r.getBusyIndicatorStyles())),e)i=sf(t.staticAreaStyles);else{const s=mB(n)||"";i=`${sf(t.styles)} ${s}`}i=`${i} ${a}`,vc.set(o,i)}return vc.get(o)},mc=new Map;dh(t=>{mc.delete(`${t}_normal`)});const X2=(t,e=!1)=>{const o=`${t.getMetadata().getTag()}_${e?"static":"normal"}`;if(!mc.has(o)){const r=Uy(t,e),i=new CSSStyleSheet;i.replaceSync(r),mc.set(o,[i])}return mc.get(o)},lf=(t,e=!1)=>{let n;const o=t.constructor,r=e?t.staticAreaItem.shadowRoot:t.shadowRoot;let i;if(e?i=t.renderStatic():i=t.render(),!r){console.warn("There is no shadow root to update");return}if(document.adoptedStyleSheets?r.adoptedStyleSheets=X2(o,e):n=Uy(o,e),o.renderer){o.renderer(i,r,n,e,{host:t});return}o.render(i,r,n,e,{host:t})},J2="--_ui5_content_density",Q2=t=>getComputedStyle(t).getPropertyValue(J2),Z2="--_ui5_dir",qy=t=>{const e=window.document,n=["ltr","rtl"],o=getComputedStyle(t).getPropertyValue(Z2);return n.includes(o)?o:n.includes(t.dir)?t.dir:n.includes(e.documentElement.dir)?e.documentElement.dir:n.includes(e.body.dir)?e.body.dir:HB()?"rtl":void 0},bc="ui5-static-area-item",K2="data-sap-ui-integration-popup-content";class Hs extends HTMLElement{constructor(){super(),this._rendered=!1,this.attachShadow({mode:"open"})}setOwnerElement(e){this.ownerElement=e,this.classList.add(this.ownerElement._id),this.ownerElement.hasAttribute("data-ui5-static-stable")&&this.setAttribute("data-ui5-stable",this.ownerElement.getAttribute("data-ui5-static-stable"))}update(){this._rendered&&(this.updateAdditionalProperties(),lf(this.ownerElement,!0))}updateAdditionalProperties(){this._updateAdditionalAttrs(),this._updateContentDensity(),this._updateDirection()}_updateContentDensity(){Q2(this.ownerElement)==="compact"?(this.classList.add("sapUiSizeCompact"),this.classList.add("ui5-content-density-compact")):(this.classList.remove("sapUiSizeCompact"),this.classList.remove("ui5-content-density-compact"))}_updateDirection(){if(this.ownerElement){const e=qy(this.ownerElement);e?this.setAttribute("dir",e):this.removeAttribute("dir")}}_updateAdditionalAttrs(){this.setAttribute(`_ui5rt${Zr()}`,""),this.setAttribute("_ui5host",""),this.setAttribute(bc,""),this.setAttribute(K2,"")}async getDomRef(){return this.updateAdditionalProperties(),this._rendered||(this._rendered=!0,lf(this.ownerElement,!0)),await Bs(),this.shadowRoot}static getTag(){const e=af(bc);return e?`${bc}-${e}`:bc}static createInstance(){return customElements.get(Hs.getTag())||customElements.define(Hs.getTag(),Hs),document.createElement(this.getTag())}}const e$=[],t$=t=>e$.some(e=>t.startsWith(e)),uf=new WeakMap,n$=(t,e,n)=>{const o=new MutationObserver(e);uf.set(t,o),o.observe(t,n)},o$=t=>{const e=uf.get(t);e&&(e.disconnect(),uf.delete(t))},r$=["value-changed","click"];let cf;const i$=t=>r$.includes(t),a$=t=>{const e=Gy();return!(typeof e!="boolean"&&e.events&&e.events.includes&&e.events.includes(t))},Gy=()=>(cf===void 0&&(cf=vx()),cf),s$=t=>{const e=Gy();return i$(t)?!1:e===!0?!0:!a$(t)},l$=["disabled","title","hidden","role","draggable"],Yy=t=>l$.includes(t)||t.startsWith("aria")?!0:![HTMLElement,Element,Node].some(n=>n.prototype.hasOwnProperty(t)),Xy=(t,e)=>{if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0},df=(t,e)=>{const n=u$(e),o=Vy();return t.call(e,e,n,o)},u$=t=>{const e=t.constructor,n=e.getMetadata().getPureTag(),o=e.getUniqueDependencies().map(r=>r.getMetadata().getPureTag()).filter(rf);return rf(n)&&o.push(n),o};let c$=0;const Jy=new Map,_f=new Map;function Ms(t){this._suppressInvalidation||(this.onInvalidation(t),this._changedState.push(t),rb(this),this._eventProvider.fireEvent("invalidate",{...t,target:this}))}class Ce extends HTMLElement{constructor(){super();const e=this.constructor;this._changedState=[],this._suppressInvalidation=!0,this._inDOM=!1,this._fullyConnected=!1,this._childChangeListeners=new Map,this._slotChangeListeners=new Map,this._eventProvider=new Xr;let n;this._domRefReadyPromise=new Promise(o=>{n=o}),this._domRefReadyPromise._deferredResolve=n,this._doNotSyncAttributes=new Set,this._state={...e.getMetadata().getInitialState()},this._upgradeAllProperties(),e._needsShadowDOM()&&this.attachShadow({mode:"open"})}get _id(){return this.__id||(this.__id=`ui5wc_${++c$}`),this.__id}render(){const e=this.constructor.template;return df(e,this)}renderStatic(){const e=this.constructor.staticAreaTemplate;return df(e,this)}async connectedCallback(){const e=this.constructor;this.setAttribute(`_ui5rt${Zr()}`,""),this.setAttribute("_ui5host",""),this.setAttribute(e.getMetadata().getPureTag(),""),e.getMetadata().supportsF6FastNavigation()&&this.setAttribute("data-sap-ui-fastnavgroup","true");const n=e.getMetadata().slotsAreManaged();this._inDOM=!0,n&&(this._startObservingDOMChildren(),await this._processChildren()),this._inDOM&&(ib(this),this._domRefReadyPromise._deferredResolve(),this._fullyConnected=!0,this.onEnterDOM())}disconnectedCallback(){const n=this.constructor.getMetadata().slotsAreManaged();this._inDOM=!1,n&&this._stopObservingDOMChildren(),this._fullyConnected&&(this.onExitDOM(),this._fullyConnected=!1),this.staticAreaItem&&this.staticAreaItem.parentElement&&this.staticAreaItem.parentElement.removeChild(this.staticAreaItem),Hx(this)}onBeforeRendering(){}onAfterRendering(){}onEnterDOM(){}onExitDOM(){}_startObservingDOMChildren(){const e=this.constructor;if(!e.getMetadata().hasSlots())return;const o=e.getMetadata().canSlotText(),r={childList:!0,subtree:o,characterData:o};n$(this,this._processChildren.bind(this),r)}_stopObservingDOMChildren(){o$(this)}async _processChildren(){this.constructor.getMetadata().hasSlots()&&await this._updateSlots()}async _updateSlots(){const e=this.constructor,n=e.getMetadata().getSlots(),o=e.getMetadata().canSlotText(),r=Array.from(o?this.childNodes:this.children),i=new Map,a=new Map;for(const[d,v]of Object.entries(n)){const b=v.propertyName||d;a.set(b,d),i.set(b,[...this._state[b]]),this._clearSlot(d,v)}const s=new Map,l=new Map,c=r.map(async(d,v)=>{const b=j2(d),S=n[b];if(S===void 0){if(b!=="default"){const O=Object.keys(n).join(", ");console.warn(`Unknown slotName: ${b}, ignoring`,d,`Valid values are: ${O}`)}return}if(S.individualSlots){const O=(s.get(b)||0)+1;s.set(b,O),d._individualSlot=`${b}-${O}`}if(d instanceof HTMLElement){const O=d.localName;if(O.includes("-")&&!t$(O)){if(!window.customElements.get(O)){const w=window.customElements.whenDefined(O);let E=Jy.get(O);E||(E=new Promise(D=>setTimeout(D,1e3)),Jy.set(O,E)),await Promise.race([w,E])}window.customElements.upgrade(d)}}if(d=e.getMetadata().constructor.validateSlotValue(d,S),da(d)&&S.invalidateOnChildChange){const O=this._getChildChangeListener(b);O&&d.attachInvalidate.call(d,O)}d instanceof HTMLSlotElement&&this._attachSlotChange(d,b);const x=S.propertyName||b;l.has(x)?l.get(x).push({child:d,idx:v}):l.set(x,[{child:d,idx:v}])});await Promise.all(c),l.forEach((d,v)=>{this._state[v]=d.sort((b,S)=>b.idx-S.idx).map(b=>b.child)});let _=!1;for(const[d,v]of Object.entries(n)){const b=v.propertyName||d;Xy(i.get(b),this._state[b])||(Ms.call(this,{type:"slot",name:a.get(b),reason:"children"}),_=!0)}_||Ms.call(this,{type:"slot",name:"default",reason:"textcontent"})}_clearSlot(e,n){const o=n.propertyName||e;this._state[o].forEach(i=>{if(da(i)){const a=this._getChildChangeListener(e);a&&i.detachInvalidate.call(i,a)}i instanceof HTMLSlotElement&&this._detachSlotChange(i,e)}),this._state[o]=[]}attachInvalidate(e){this._eventProvider.attachEvent("invalidate",e)}detachInvalidate(e){this._eventProvider.detachEvent("invalidate",e)}_onChildChange(e,n){this.constructor.getMetadata().shouldInvalidateOnChildChange(e,n.type,n.name)&&Ms.call(this,{type:"slot",name:e,reason:"childchange",child:n.target})}attributeChangedCallback(e,n,o){let r;if(this._doNotSyncAttributes.has(e))return;const i=this.constructor.getMetadata().getProperties(),a=e.replace(/^ui5-/,""),s=Hy(a);if(i.hasOwnProperty(s)){const l=i[s],c=l.type;let _=l.validator;c&&c.isDataTypeClass&&(_=c),_?r=_.attributeToProperty(o):c===Boolean?r=o!==null:r=o,this[s]=r}}_updateAttribute(e,n){const o=this.constructor;if(!o.getMetadata().hasAttribute(e))return;const i=o.getMetadata().getProperties()[e],a=i.type;let s=i.validator;const l=My(e),c=this.getAttribute(l);if(a&&a.isDataTypeClass&&(s=a),s){const _=s.propertyToAttribute(n);_===null?(this._doNotSyncAttributes.add(l),this.removeAttribute(l),this._doNotSyncAttributes.delete(l)):this.setAttribute(l,_)}else a===Boolean?n===!0&&c===null?this.setAttribute(l,""):n===!1&&c!==null&&this.removeAttribute(l):typeof n!="object"&&c!==n&&this.setAttribute(l,n)}_upgradeProperty(e){if(this.hasOwnProperty(e)){const n=this[e];delete this[e],this[e]=n}}_upgradeAllProperties(){this.constructor.getMetadata().getPropertiesList().forEach(this._upgradeProperty.bind(this))}_getChildChangeListener(e){return this._childChangeListeners.has(e)||this._childChangeListeners.set(e,this._onChildChange.bind(this,e)),this._childChangeListeners.get(e)}_getSlotChangeListener(e){return this._slotChangeListeners.has(e)||this._slotChangeListeners.set(e,this._onSlotChange.bind(this,e)),this._slotChangeListeners.get(e)}_attachSlotChange(e,n){const o=this._getSlotChangeListener(n);o&&e.addEventListener("slotchange",o)}_detachSlotChange(e,n){e.removeEventListener("slotchange",this._getSlotChangeListener(n))}_onSlotChange(e){Ms.call(this,{type:"slot",name:e,reason:"slotchange"})}onInvalidation(e){}_render(){const e=this.constructor,n=e.getMetadata().hasIndividualSlots();this._suppressInvalidation=!0,this.onBeforeRendering(),this._onComponentStateFinalized&&this._onComponentStateFinalized(),this._suppressInvalidation=!1,this._changedState=[],e._needsShadowDOM()&&lf(this),this.staticAreaItem&&this.staticAreaItem.update(),n&&this._assignIndividualSlotsToChildren(),this.onAfterRendering()}_assignIndividualSlotsToChildren(){Array.from(this.children).forEach(n=>{n._individualSlot&&n.setAttribute("slot",n._individualSlot)})}_waitForDomRef(){return this._domRefReadyPromise}getDomRef(){if(typeof this._getRealDomRef=="function")return this._getRealDomRef();if(!this.shadowRoot||this.shadowRoot.children.length===0)return;const e=[...this.shadowRoot.children].filter(n=>!["link","style"].includes(n.localName));return e.length!==1&&console.warn(`The shadow DOM for ${this.constructor.getMetadata().getTag()} does not have a top level element, the getDomRef() method might not work as expected`),e[0]}getFocusDomRef(){const e=this.getDomRef();if(e)return e.querySelector("[data-sap-focus-ref]")||e}async getFocusDomRefAsync(){return await this._waitForDomRef(),this.getFocusDomRef()}async focus(e){await this._waitForDomRef();const n=this.getFocusDomRef();n&&typeof n.focus=="function"&&n.focus(e)}fireEvent(e,n,o=!1,r=!0){const i=this._fireEvent(e,n,o,r),a=Hy(e);return a!==e?i&&this._fireEvent(a,n,o):i}_fireEvent(e,n,o=!1,r=!0){const i=new CustomEvent(`ui5-${e}`,{detail:n,composed:!1,bubbles:r,cancelable:o}),a=this.dispatchEvent(i);if(s$(e))return a;const s=new CustomEvent(e,{detail:n,composed:!1,bubbles:r,cancelable:o});return this.dispatchEvent(s)&&a}getSlottedNodes(e){return V2(this[e])}get effectiveDir(){return Nx(this.constructor),qy(this)}get isUI5Element(){return!0}get classes(){return{}}static get observedAttributes(){return this.getMetadata().getAttributesList()}static _needsShadowDOM(){return!!this.template||Object.prototype.hasOwnProperty.call(this.prototype,"render")}static _needsStaticArea(){return!!this.staticAreaTemplate||Object.prototype.hasOwnProperty.call(this.prototype,"renderStatic")}getStaticAreaItemDomRef(){if(!this.constructor._needsStaticArea())throw new Error("This component does not use the static area");return this.staticAreaItem||(this.staticAreaItem=Hs.createInstance(),this.staticAreaItem.setOwnerElement(this)),this.staticAreaItem.parentElement||Wu("ui5-static-area").appendChild(this.staticAreaItem),this.staticAreaItem.getDomRef()}static _generateAccessors(){const e=this.prototype,n=this.getMetadata().slotsAreManaged(),o=this.getMetadata().getProperties();for(const[r,i]of Object.entries(o)){if(Yy(r)||console.warn(`"${r}" is not a valid property name. Use a name that does not collide with DOM APIs`),i.type===Boolean&&i.defaultValue)throw new Error(`Cannot set a default value for property "${r}". All booleans are false by default.`);if(i.type===Array)throw new Error(`Wrong type for property "${r}". Properties cannot be of type Array - use "multiple: true" and set "type" to the single value type, such as "String", "Object", etc...`);if(i.type===Object&&i.defaultValue)throw new Error(`Cannot set a default value for property "${r}". All properties of type "Object" are empty objects by default.`);if(i.multiple&&i.defaultValue)throw new Error(`Cannot set a default value for property "${r}". All multiple properties are empty arrays by default.`);Object.defineProperty(e,r,{get(){if(this._state[r]!==void 0)return this._state[r];const a=i.defaultValue;return i.type===Boolean?!1:i.type===String?a:i.multiple?[]:a},set(a){let s;a=this.constructor.getMetadata().constructor.validatePropertyValue(a,i);const _=i.type;let d=i.validator;const v=this._state[r];_&&_.isDataTypeClass&&(d=_),d?s=!d.valuesAreEqual(v,a):Array.isArray(v)&&Array.isArray(a)&&i.multiple&&i.compareValues?s=!Xy(v,a):s=v!==a,s&&(this._state[r]=a,Ms.call(this,{type:"property",name:r,newValue:a,oldValue:v}),this._updateAttribute(r,a))}})}if(n){const r=this.getMetadata().getSlots();for(const[i,a]of Object.entries(r)){Yy(i)||console.warn(`"${i}" is not a valid property name. Use a name that does not collide with DOM APIs`);const s=a.propertyName||i;Object.defineProperty(e,s,{get(){return this._state[s]!==void 0?this._state[s]:[]},set(){throw new Error("Cannot set slot content directly, use the DOM APIs (appendChild, removeChild, etc...)")}})}}}static get styles(){return""}static get staticAreaStyles(){return""}static get dependencies(){return[]}static getUniqueDependencies(){if(!_f.has(this)){const e=this.dependencies.filter((n,o,r)=>r.indexOf(n)===o);_f.set(this,e)}return _f.get(this)||[]}static whenDependenciesDefined(){return Promise.all(this.getUniqueDependencies().map(e=>e.define()))}static async onDefine(){return Promise.resolve()}static async define(){await H2(),await Promise.all([this.whenDependenciesDefined(),this.onDefine()]);const e=this.getMetadata().getTag(),n=Px(e),o=customElements.get(e);return o&&!n?Rx(e):o||(this._generateAccessors(),Ex(e),window.customElements.define(e,this)),this}static getMetadata(){if(this.hasOwnProperty("_metadata"))return this._metadata;const e=[this.metadata];let n=this;for(;n!==Ce;)n=Object.getPrototypeOf(n),e.unshift(n.metadata);const o=Qp({},...e);return this._metadata=new U2(o),this._metadata}}Ce.metadata={};const da=t=>"isUI5Element"in t,fe=t=>e=>{if(Object.prototype.hasOwnProperty.call(e,"metadata")||(e.metadata={}),typeof t=="string"){e.metadata.tag=t;return}const{tag:n,languageAware:o,themeAware:r,fastNavigation:i}=t;e.metadata.tag=n,o&&(e.metadata.languageAware=o),r&&(e.metadata.themeAware=r),i&&(e.metadata.fastNavigation=i),["render","renderer","template","staticAreaTemplate","styles","staticAreaStyles","dependencies"].forEach(a=>{const l=t[a==="render"?"renderer":a];l&&Object.defineProperty(e,a,{get:()=>l})})},h=t=>(e,n)=>{const o=e.constructor;Object.prototype.hasOwnProperty.call(o,"metadata")||(o.metadata={});const r=o.metadata;r.properties||(r.properties={});const i=r.properties;i[n]||(i[n]=t||{type:String})},ce=t=>(e,n)=>{const o=e.constructor;Object.prototype.hasOwnProperty.call(o,"metadata")||(o.metadata={});const r=o.metadata;r.slots||(r.slots={});const i=r.slots;if(t&&t.default&&i.default)throw new Error("Only one slot can be the default slot.");const a=t&&t.default?"default":n;t=t||{type:HTMLElement},t.type||(t.type=HTMLElement),i[a]||(i[a]=t),t.default&&(delete i.default.default,i.default.propertyName=n),o.metadata.managedSlots=!0},re=(t,e={})=>n=>{Object.prototype.hasOwnProperty.call(n,"metadata")||(n.metadata={});const o=n.metadata;o.events||(o.events={});const r=o.events;r[t]||(r[t]=e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pf;const yc=window,_a=yc.trustedTypes,Qy=_a?_a.createPolicy("lit-html",{createHTML:t=>t}):void 0,Cc="$lit$",So=`lit$${(Math.random()+"").slice(9)}$`,hf="?"+So,d$=`<${hf}>`,oi=document,zs=()=>oi.createComment(""),js=t=>t===null||typeof t!="object"&&typeof t!="function",Zy=Array.isArray,Ky=t=>Zy(t)||typeof t?.[Symbol.iterator]=="function",ff=`[ 	
\f\r]`,Vs=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,e0=/-->/g,t0=/>/g,ri=RegExp(`>|${ff}(?:([^\\s"'>=/]+)(${ff}*=${ff}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),n0=/'/g,o0=/"/g,r0=/^(?:script|style|textarea|title)$/i,i0=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),a0=i0(1),s0=i0(2),ko=Symbol.for("lit-noChange"),Ke=Symbol.for("lit-nothing"),l0=new WeakMap,ii=oi.createTreeWalker(oi,129,null,!1);function u0(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qy!==void 0?Qy.createHTML(e):e}const c0=(t,e)=>{const n=t.length-1,o=[];let r,i=e===2?"<svg>":"",a=Vs;for(let s=0;s<n;s++){const l=t[s];let c,_,d=-1,v=0;for(;v<l.length&&(a.lastIndex=v,_=a.exec(l),_!==null);)v=a.lastIndex,a===Vs?_[1]==="!--"?a=e0:_[1]!==void 0?a=t0:_[2]!==void 0?(r0.test(_[2])&&(r=RegExp("</"+_[2],"g")),a=ri):_[3]!==void 0&&(a=ri):a===ri?_[0]===">"?(a=r??Vs,d=-1):_[1]===void 0?d=-2:(d=a.lastIndex-_[2].length,c=_[1],a=_[3]===void 0?ri:_[3]==='"'?o0:n0):a===o0||a===n0?a=ri:a===e0||a===t0?a=Vs:(a=ri,r=void 0);const b=a===ri&&t[s+1].startsWith("/>")?" ":"";i+=a===Vs?l+d$:d>=0?(o.push(c),l.slice(0,d)+Cc+l.slice(d)+So+b):l+So+(d===-2?(o.push(void 0),s):b)}return[u0(t,i+(t[n]||"<?>")+(e===2?"</svg>":"")),o]};class Ws{constructor({strings:e,_$litType$:n},o){let r;this.parts=[];let i=0,a=0;const s=e.length-1,l=this.parts,[c,_]=c0(e,n);if(this.el=Ws.createElement(c,o),ii.currentNode=this.el.content,n===2){const d=this.el.content,v=d.firstChild;v.remove(),d.append(...v.childNodes)}for(;(r=ii.nextNode())!==null&&l.length<s;){if(r.nodeType===1){if(r.hasAttributes()){const d=[];for(const v of r.getAttributeNames())if(v.endsWith(Cc)||v.startsWith(So)){const b=_[a++];if(d.push(v),b!==void 0){const S=r.getAttribute(b.toLowerCase()+Cc).split(So),x=/([.?@])?(.*)/.exec(b);l.push({type:1,index:i,name:x[2],strings:S,ctor:x[1]==="."?_0:x[1]==="?"?p0:x[1]==="@"?h0:Us})}else l.push({type:6,index:i})}for(const v of d)r.removeAttribute(v)}if(r0.test(r.tagName)){const d=r.textContent.split(So),v=d.length-1;if(v>0){r.textContent=_a?_a.emptyScript:"";for(let b=0;b<v;b++)r.append(d[b],zs()),ii.nextNode(),l.push({type:2,index:++i});r.append(d[v],zs())}}}else if(r.nodeType===8)if(r.data===hf)l.push({type:2,index:i});else{let d=-1;for(;(d=r.data.indexOf(So,d+1))!==-1;)l.push({type:7,index:i}),d+=So.length-1}i++}}static createElement(e,n){const o=oi.createElement("template");return o.innerHTML=e,o}}function ai(t,e,n=t,o){var r,i,a,s;if(e===ko)return e;let l=o!==void 0?(r=n._$Co)===null||r===void 0?void 0:r[o]:n._$Cl;const c=js(e)?void 0:e._$litDirective$;return l?.constructor!==c&&((i=l?._$AO)===null||i===void 0||i.call(l,!1),c===void 0?l=void 0:(l=new c(t),l._$AT(t,n,o)),o!==void 0?((a=(s=n)._$Co)!==null&&a!==void 0?a:s._$Co=[])[o]=l:n._$Cl=l),l!==void 0&&(e=ai(t,l._$AS(t,e.values),l,o)),e}class d0{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:o},parts:r}=this._$AD,i=((n=e?.creationScope)!==null&&n!==void 0?n:oi).importNode(o,!0);ii.currentNode=i;let a=ii.nextNode(),s=0,l=0,c=r[0];for(;c!==void 0;){if(s===c.index){let _;c.type===2?_=new pa(a,a.nextSibling,this,e):c.type===1?_=new c.ctor(a,c.name,c.strings,this,e):c.type===6&&(_=new f0(a,this,e)),this._$AV.push(_),c=r[++l]}s!==c?.index&&(a=ii.nextNode(),s++)}return ii.currentNode=oi,i}v(e){let n=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,n),n+=o.strings.length-2):o._$AI(e[n])),n++}}class pa{constructor(e,n,o,r){var i;this.type=2,this._$AH=Ke,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=o,this.options=r,this._$Cp=(i=r?.isConnected)===null||i===void 0||i}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=ai(this,e,n),js(e)?e===Ke||e==null||e===""?(this._$AH!==Ke&&this._$AR(),this._$AH=Ke):e!==this._$AH&&e!==ko&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ky(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Ke&&js(this._$AH)?this._$AA.nextSibling.data=e:this.$(oi.createTextNode(e)),this._$AH=e}g(e){var n;const{values:o,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Ws.createElement(u0(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===i)this._$AH.v(o);else{const a=new d0(i,this),s=a.u(this.options);a.v(o),this.$(s),this._$AH=a}}_$AC(e){let n=l0.get(e.strings);return n===void 0&&l0.set(e.strings,n=new Ws(e)),n}T(e){Zy(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let o,r=0;for(const i of e)r===n.length?n.push(o=new pa(this.k(zs()),this.k(zs()),this,this.options)):o=n[r],o._$AI(i),r++;r<n.length&&(this._$AR(o&&o._$AB.nextSibling,r),n.length=r)}_$AR(e=this._$AA.nextSibling,n){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,n);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class Us{constructor(e,n,o,r,i){this.type=1,this._$AH=Ke,this._$AN=void 0,this.element=e,this.name=n,this._$AM=r,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Ke}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,o,r){const i=this.strings;let a=!1;if(i===void 0)e=ai(this,e,n,0),a=!js(e)||e!==this._$AH&&e!==ko,a&&(this._$AH=e);else{const s=e;let l,c;for(e=i[0],l=0;l<i.length-1;l++)c=ai(this,s[o+l],n,l),c===ko&&(c=this._$AH[l]),a||(a=!js(c)||c!==this._$AH[l]),c===Ke?e=Ke:e!==Ke&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}a&&!r&&this.j(e)}j(e){e===Ke?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class _0 extends Us{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ke?void 0:e}}const _$=_a?_a.emptyScript:"";class p0 extends Us{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Ke?this.element.setAttribute(this.name,_$):this.element.removeAttribute(this.name)}}class h0 extends Us{constructor(e,n,o,r,i){super(e,n,o,r,i),this.type=5}_$AI(e,n=this){var o;if((e=(o=ai(this,e,n,0))!==null&&o!==void 0?o:Ke)===ko)return;const r=this._$AH,i=e===Ke&&r!==Ke||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==Ke&&(r===Ke||i);i&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,o;typeof this._$AH=="function"?this._$AH.call((o=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&o!==void 0?o:this.element,e):this._$AH.handleEvent(e)}}class f0{constructor(e,n,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){ai(this,e)}}const p$={O:Cc,P:So,A:hf,C:1,M:c0,L:d0,R:Ky,D:ai,I:pa,V:Us,H:p0,N:h0,U:_0,F:f0},g0=yc.litHtmlPolyfillSupport;g0?.(Ws,pa),((pf=yc.litHtmlVersions)!==null&&pf!==void 0?pf:yc.litHtmlVersions=[]).push("2.8.0");const h$=(t,e,n)=>{var o,r;const i=(o=n?.renderBefore)!==null&&o!==void 0?o:e;let a=i._$litPart$;if(a===void 0){const s=(r=n?.renderBefore)!==null&&r!==void 0?r:null;i._$litPart$=a=new pa(e.insertBefore(zs(),s),s,void 0,n??{})}return a._$AI(t),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wc={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Sc=t=>(...e)=>({_$litDirective$:t,values:e});class kc{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,o){this._$Ct=e,this._$AM=n,this._$Ci=o}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:f$}=p$,v0=()=>document.createComment(""),qs=(t,e,n)=>{var o;const r=t._$AA.parentNode,i=e===void 0?t._$AB:e._$AA;if(n===void 0){const a=r.insertBefore(v0(),i),s=r.insertBefore(v0(),i);n=new f$(a,s,t,t.options)}else{const a=n._$AB.nextSibling,s=n._$AM,l=s!==t;if(l){let c;(o=n._$AQ)===null||o===void 0||o.call(n,t),n._$AM=t,n._$AP!==void 0&&(c=t._$AU)!==s._$AU&&n._$AP(c)}if(a!==i||l){let c=n._$AA;for(;c!==a;){const _=c.nextSibling;r.insertBefore(c,i),c=_}}}return n},si=(t,e,n=t)=>(t._$AI(e,n),t),g$={},v$=(t,e=g$)=>t._$AH=e,m$=t=>t._$AH,gf=t=>{var e;(e=t._$AP)===null||e===void 0||e.call(t,!1,!0);let n=t._$AA;const o=t._$AB.nextSibling;for(;n!==o;){const r=n.nextSibling;n.remove(),n=r}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m0=(t,e,n)=>{const o=new Map;for(let r=e;r<=n;r++)o.set(t[r],r);return o},mt=Sc(class extends kc{constructor(t){if(super(t),t.type!==wc.CHILD)throw Error("repeat() can only be used in text expressions")}ct(t,e,n){let o;n===void 0?n=e:e!==void 0&&(o=e);const r=[],i=[];let a=0;for(const s of t)r[a]=o?o(s,a):a,i[a]=n(s,a),a++;return{values:i,keys:r}}render(t,e,n){return this.ct(t,e,n).values}update(t,[e,n,o]){var r;const i=m$(t),{values:a,keys:s}=this.ct(e,n,o);if(!Array.isArray(i))return this.ut=s,a;const l=(r=this.ut)!==null&&r!==void 0?r:this.ut=[],c=[];let _,d,v=0,b=i.length-1,S=0,x=a.length-1;for(;v<=b&&S<=x;)if(i[v]===null)v++;else if(i[b]===null)b--;else if(l[v]===s[S])c[S]=si(i[v],a[S]),v++,S++;else if(l[b]===s[x])c[x]=si(i[b],a[x]),b--,x--;else if(l[v]===s[x])c[x]=si(i[v],a[x]),qs(t,c[x+1],i[v]),v++,x--;else if(l[b]===s[S])c[S]=si(i[b],a[S]),qs(t,i[v],i[b]),b--,S++;else if(_===void 0&&(_=m0(s,S,x),d=m0(l,v,b)),_.has(l[v]))if(_.has(l[b])){const O=d.get(s[S]),C=O!==void 0?i[O]:null;if(C===null){const g=qs(t,i[v]);si(g,a[S]),c[S]=g}else c[S]=si(C,a[S]),qs(t,i[v],C),i[O]=null;S++}else gf(i[b]),b--;else gf(i[v]),v++;for(;S<=x;){const O=qs(t,c[x+1]);si(O,a[S]),c[S++]=O}for(;v<=b;){const O=i[v++];O!==null&&gf(O)}return this.ut=s,v$(t,c),ko}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=Sc(class extends kc{constructor(t){var e;if(super(t),t.type!==wc.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,o;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!(!((n=this.nt)===null||n===void 0)&&n.has(i))&&this.it.add(i);return this.render(e)}const r=t.element.classList;this.it.forEach(i=>{i in e||(r.remove(i),this.it.delete(i))});for(const i in e){const a=!!e[i];a===this.it.has(i)||!((o=this.nt)===null||o===void 0)&&o.has(i)||(a?(r.add(i),this.it.add(i)):(r.remove(i),this.it.delete(i)))}return ko}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class b$ extends kc{constructor(e){var n;if(super(e),e.type!==wc.ATTRIBUTE||e.name!=="style"||((n=e.strings)===null||n===void 0?void 0:n.length)>2)throw new Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return""}update(e,[n]){const{style:o}=e.element;if(this._previousStyleProperties===void 0){this._previousStyleProperties=new Set;for(const r in n)this._previousStyleProperties.add(r)}this._previousStyleProperties.forEach(r=>{n[r]==null&&(this._previousStyleProperties.delete(r),r.includes("-")?o.removeProperty(r):o[r]="")});for(const r in n){const i=n[r];i!=null&&(this._previousStyleProperties.add(r),r.includes("-")?o.setProperty(r,i):o[r]=i)}return ko}}const ie=Sc(b$);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=t=>t??Ke;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let vf=class extends kc{constructor(e){if(super(e),this.et=Ke,e.type!==wc.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Ke||e==null)return this.ft=void 0,this.et=e;if(e===ko)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const n=[e];return n.raw=n,this.ft={_$litType$:this.constructor.resultType,strings:n,values:[]}}};vf.directiveName="unsafeHTML",vf.resultType=1;const ha=Sc(vf),p=(t,...e)=>{const n=Xe("LitStatic");return(n?n.html:a0)(t,...e)},Gs=(t,...e)=>{const n=Xe("LitStatic");return(n?n.svg:s0)(t,...e)},et=(t,e,n,o,r)=>{const i=Xe("OpenUI5Enablement");i&&!o&&(t=i.wrapTemplateResultInBusyMarkup(p,r.host,t)),typeof n=="string"?t=p`<style>${n}</style>${t}`:Array.isArray(n)&&n.length&&(t=p`${n.map(a=>p`<link type="text/css" rel="stylesheet" href="${a}">`)}${t}`),h$(t,e,r)},k=(t,e,n)=>{const o=Xe("LitStatic");if(o)return o.unsafeStatic((e||[]).includes(t)?`${t}-${n}`:t)};var mf;(function(t){t.None="None",t.Success="Success",t.Warning="Warning",t.Error="Error",t.Information="Information"})(mf||(mf={}));const z=mf,xc=new WeakMap,Ys=new WeakMap,y$={attributes:!0,childList:!0,characterData:!0,subtree:!0},cr=t=>{const e=t;return e.accessibleNameRef?b0(t):e.accessibleName?e.accessibleName:void 0},b0=t=>{const e=t.accessibleNameRef?.split(" ")??[],n=t.getRootNode();let o="";return e.forEach((r,i)=>{const a=n.querySelector(`[id='${r}']`),s=`${a&&a.textContent?a.textContent:""}`;s&&(o+=s,i<e.length-1&&(o+=" "))}),o},y0=t=>{const e=new Set;return C0(t).forEach(i=>{e.add(i)}),(t.accessibleNameRef?.split(" ")??[]).forEach(i=>{const a=C$(t,i);a&&e.add(a)}),Array.from(e)},C0=t=>{const e=t.getRootNode().querySelectorAll(`[for="${t.id}"]`);return Array.from(e)},C$=(t,e)=>t.getRootNode().querySelector(`[id='${e}']`),w$=t=>{const e=[];if(C0(t).forEach(o=>{const r=o.textContent;r&&e.push(r)}),e.length)return e.join(" ")},S$=t=>n=>{if(!(n&&n.type==="property"&&n.name==="accessibleNameRef"))return;const o=Ys.get(t);if(!o)return;const r=o.observedElements,i=y0(t);r.forEach(a=>{i.includes(a)||bf(o,a)}),i.forEach(a=>{r.includes(a)||(w0(o,a),o.observedElements.push(a))}),o?.callback()},k$=(t,e)=>{if(Ys.has(t))return;const n=y0(t),o=S$(t),r={host:t,observedElements:n,callback:e,invalidationCallback:o};Ys.set(t,r),t.attachInvalidate(o),n.forEach(i=>{w0(r,i)}),e()},w0=(t,e)=>{let n=xc.get(e);if(!n){n={observer:null,callbacks:[]};const o=new MutationObserver(()=>{n.callbacks.forEach(a=>{a()});const i=document.getElementById(e.id);t.host.id===e.getAttribute("for")||i||bf(t,e)});n.observer=o,o.observe(e,y$),xc.set(e,n)}n.callbacks.includes(t.callback)||n.callbacks.push(t.callback)},bf=(t,e)=>{const n=xc.get(e);n&&(n.callbacks=n.callbacks.filter(o=>o!==t.callback),n.callbacks.length||(n.observer?.disconnect(),xc.delete(e))),t.observedElements=t.observedElements.filter(o=>o!==e)},x$=t=>{const e=Ys.get(t);if(!e)return;[...e.observedElements].forEach(o=>{bf(e,o)}),t.detachInvalidate(e.invalidationCallback),Ys.delete(t)};var Ve;(function(t){t[t.BACKSPACE=8]="BACKSPACE",t[t.TAB=9]="TAB",t[t.ENTER=13]="ENTER",t[t.SHIFT=16]="SHIFT",t[t.CONTROL=17]="CONTROL",t[t.ALT=18]="ALT",t[t.BREAK=19]="BREAK",t[t.CAPS_LOCK=20]="CAPS_LOCK",t[t.ESCAPE=27]="ESCAPE",t[t.SPACE=32]="SPACE",t[t.PAGE_UP=33]="PAGE_UP",t[t.PAGE_DOWN=34]="PAGE_DOWN",t[t.END=35]="END",t[t.HOME=36]="HOME",t[t.ARROW_LEFT=37]="ARROW_LEFT",t[t.ARROW_UP=38]="ARROW_UP",t[t.ARROW_RIGHT=39]="ARROW_RIGHT",t[t.ARROW_DOWN=40]="ARROW_DOWN",t[t.PRINT=44]="PRINT",t[t.INSERT=45]="INSERT",t[t.DELETE=46]="DELETE",t[t.DIGIT_0=48]="DIGIT_0",t[t.DIGIT_1=49]="DIGIT_1",t[t.DIGIT_2=50]="DIGIT_2",t[t.DIGIT_3=51]="DIGIT_3",t[t.DIGIT_4=52]="DIGIT_4",t[t.DIGIT_5=53]="DIGIT_5",t[t.DIGIT_6=54]="DIGIT_6",t[t.DIGIT_7=55]="DIGIT_7",t[t.DIGIT_8=56]="DIGIT_8",t[t.DIGIT_9=57]="DIGIT_9",t[t.A=65]="A",t[t.B=66]="B",t[t.C=67]="C",t[t.D=68]="D",t[t.E=69]="E",t[t.F=70]="F",t[t.G=71]="G",t[t.H=72]="H",t[t.I=73]="I",t[t.J=74]="J",t[t.K=75]="K",t[t.L=76]="L",t[t.M=77]="M",t[t.N=78]="N",t[t.O=79]="O",t[t.P=80]="P",t[t.Q=81]="Q",t[t.R=82]="R",t[t.S=83]="S",t[t.T=84]="T",t[t.U=85]="U",t[t.V=86]="V",t[t.W=87]="W",t[t.X=88]="X",t[t.Y=89]="Y",t[t.Z=90]="Z",t[t.WINDOWS=91]="WINDOWS",t[t.CONTEXT_MENU=93]="CONTEXT_MENU",t[t.TURN_OFF=94]="TURN_OFF",t[t.SLEEP=95]="SLEEP",t[t.NUMPAD_0=96]="NUMPAD_0",t[t.NUMPAD_1=97]="NUMPAD_1",t[t.NUMPAD_2=98]="NUMPAD_2",t[t.NUMPAD_3=99]="NUMPAD_3",t[t.NUMPAD_4=100]="NUMPAD_4",t[t.NUMPAD_5=101]="NUMPAD_5",t[t.NUMPAD_6=102]="NUMPAD_6",t[t.NUMPAD_7=103]="NUMPAD_7",t[t.NUMPAD_8=104]="NUMPAD_8",t[t.NUMPAD_9=105]="NUMPAD_9",t[t.NUMPAD_ASTERISK=106]="NUMPAD_ASTERISK",t[t.NUMPAD_PLUS=107]="NUMPAD_PLUS",t[t.NUMPAD_MINUS=109]="NUMPAD_MINUS",t[t.NUMPAD_COMMA=110]="NUMPAD_COMMA",t[t.NUMPAD_SLASH=111]="NUMPAD_SLASH",t[t.F1=112]="F1",t[t.F2=113]="F2",t[t.F3=114]="F3",t[t.F4=115]="F4",t[t.F5=116]="F5",t[t.F6=117]="F6",t[t.F7=118]="F7",t[t.F8=119]="F8",t[t.F9=120]="F9",t[t.F10=121]="F10",t[t.F11=122]="F11",t[t.F12=123]="F12",t[t.NUM_LOCK=144]="NUM_LOCK",t[t.SCROLL_LOCK=145]="SCROLL_LOCK",t[t.COLON=186]="COLON",t[t.PLUS=187]="PLUS",t[t.COMMA=188]="COMMA",t[t.SLASH=189]="SLASH",t[t.DOT=190]="DOT",t[t.PIPE=191]="PIPE",t[t.SEMICOLON=192]="SEMICOLON",t[t.MINUS=219]="MINUS",t[t.GREAT_ACCENT=220]="GREAT_ACCENT",t[t.EQUALS=221]="EQUALS",t[t.SINGLE_QUOTE=222]="SINGLE_QUOTE",t[t.BACKSLASH=226]="BACKSLASH"})(Ve||(Ve={}));const tt=t=>(t.key?t.key==="Enter":t.keyCode===Ve.ENTER)&&!Ot(t),Le=t=>(t.key?t.key==="Spacebar"||t.key===" ":t.keyCode===Ve.SPACE)&&!Ot(t),fa=t=>(t.key?t.key==="ArrowLeft"||t.key==="Left":t.keyCode===Ve.ARROW_LEFT)&&!Ot(t),ga=t=>(t.key?t.key==="ArrowRight"||t.key==="Right":t.keyCode===Ve.ARROW_RIGHT)&&!Ot(t),dr=t=>(t.key?t.key==="ArrowUp"||t.key==="Up":t.keyCode===Ve.ARROW_UP)&&!Ot(t),xo=t=>(t.key?t.key==="ArrowDown"||t.key==="Down":t.keyCode===Ve.ARROW_DOWN)&&!Ot(t),S0=t=>(t.key?t.key==="ArrowUp"||t.key==="Up":t.keyCode===Ve.ARROW_UP)&&li(t,!1,!1,!0),k0=t=>(t.key?t.key==="ArrowDown"||t.key==="Down":t.keyCode===Ve.ARROW_DOWN)&&li(t,!1,!1,!0),x0=t=>(t.key?t.key==="ArrowLeft"||t.key==="Left":t.keyCode===Ve.ARROW_LEFT)&&li(t,!1,!1,!0),B0=t=>(t.key?t.key==="ArrowRight"||t.key==="Right":t.keyCode===Ve.ARROW_RIGHT)&&li(t,!1,!1,!0),Xs=t=>(t.key?t.key==="Home":t.keyCode===Ve.HOME)&&!Ot(t),Js=t=>(t.key?t.key==="End":t.keyCode===Ve.END)&&!Ot(t),Qs=t=>(t.key?t.key==="Escape"||t.key==="Esc":t.keyCode===Ve.ESCAPE)&&!Ot(t),Bo=t=>(t.key?t.key==="Tab":t.keyCode===Ve.TAB)&&!Ot(t),va=t=>(t.key?t.key==="Tab":t.keyCode===Ve.TAB)&&li(t,!1,!1,!0),T0=t=>(t.key?t.key==="Backspace":t.keyCode===Ve.BACKSPACE)&&!Ot(t),Bc=t=>(t.key?t.key==="Delete":t.keyCode===Ve.DELETE)&&!Ot(t),Tc=t=>(t.key?t.key==="PageUp":t.keyCode===Ve.PAGE_UP)&&!Ot(t),Ic=t=>(t.key?t.key==="PageDown":t.keyCode===Ve.PAGE_DOWN)&&!Ot(t),I0=t=>t.key?B$(t)||T$(t):t.keyCode===Ve.F4&&!Ot(t)||t.keyCode===Ve.ARROW_DOWN&&li(t,!1,!0,!1),B$=t=>t.key==="F4"&&!Ot(t),T$=t=>(t.key==="ArrowDown"||t.key==="Down"||t.key==="ArrowUp"||t.key==="Up")&&li(t,!1,!0,!1),Ot=t=>t.shiftKey||t.altKey||$0(t),$0=t=>!!(t.metaKey||t.ctrlKey),li=(t,e,n,o)=>t.shiftKey===o&&t.altKey===n&&$0(t)===e;var $c;(function(t){t["SAP-icons"]="SAP-icons-v4",t.horizon="SAP-icons-v5",t["SAP-icons-TNT"]="tnt",t.BusinessSuiteInAppSymbols="business-suite"})($c||($c={}));const A0=t=>$c[t]?$c[t]:t;var _r;(function(t){t.SAPIconsV4="SAP-icons-v4",t.SAPIconsV5="SAP-icons-v5",t.SAPIconsTNTV2="tnt-v2",t.SAPIconsTNTV3="tnt-v3",t.SAPBSIconsV1="business-suite-v1",t.SAPBSIconsV2="business-suite-v2"})(_r||(_r={}));const To=new Map;To.set("SAP-icons",{legacy:_r.SAPIconsV4,sap_horizon:_r.SAPIconsV5}),To.set("tnt",{legacy:_r.SAPIconsTNTV2,sap_horizon:_r.SAPIconsTNTV3}),To.set("business-suite",{legacy:_r.SAPBSIconsV1,sap_horizon:_r.SAPBSIconsV2});const I$=(t,e)=>{if(To.has(t)){To.set(t,{...e,...To.get(t)});return}To.set(t,e)},E0=t=>{const e=Ze()?"legacy":"sap_horizon";return To.has(t)?To.get(t)[e]:t},$$=new Map,A$=t=>$$.get(t),P0=t=>{const e=A$(As());return!t&&e?A0(e):E0(t||"SAP-icons")},E$="legacy",F0=new Map,R0=Qr("SVGIcons.registry",new Map),yf=Qr("SVGIcons.promises",new Map),Cf="ICON_NOT_FOUND",P$=async t=>{if(!yf.has(t)){if(!F0.has(t))throw new Error(`No loader registered for the ${t} icons collection. Probably you forgot to import the "AllIcons.js" module for the respective package.`);const e=F0.get(t);yf.set(t,e(t))}return yf.get(t)},L0=t=>{Object.keys(t.data).forEach(e=>{const n=t.data[e];ne(e,{pathData:n.path||n.paths,ltr:n.ltr,accData:n.acc,collection:t.collection,packageName:t.packageName})})},ne=(t,e)=>{const n=`${e.collection}/${t}`;R0.set(n,{pathData:e.pathData,ltr:e.ltr,accData:e.accData,packageName:e.packageName,customTemplate:e.customTemplate,viewBox:e.viewBox,collection:e.collection})},N0=t=>{t.startsWith("sap-icon://")&&(t=t.replace("sap-icon://",""));let e;return[t,e]=t.split("/").reverse(),t=t.replace("icon-",""),e&&(e=A0(e)),{name:t,collection:e}},D0=t=>{const{name:e,collection:n}=N0(t);return wf(n,e)},O0=async t=>{const{name:e,collection:n}=N0(t);let o=Cf;try{o=await P$(P0(n))}catch(i){console.error(i.message)}if(o===Cf)return o;const r=wf(n,e);return r||(Array.isArray(o)?o.forEach(i=>{L0(i),I$(n,{[i.themeFamily||E$]:i.collection})}):L0(o),wf(n,e))},wf=(t,e)=>{const n=`${P0(t)}/${e}`;return R0.get(n)},F$=async t=>{if(!t)return;let e=D0(t);if(e||(e=await O0(t)),e&&e!==Cf&&e.accData)return(await Re(e.packageName)).getText(e.accData)},R$="accept",H0="M455.8 94q9 9 3 19l-222 326q-4 8-12 9t-14-5l-151-167q-5-5-4.5-11t5.5-11l25-25q12-12 23 0l96 96q5 5 13 4.5t12-8.5l175-249q4-7 11.5-8t13.5 4z";ne(R$,{pathData:H0,ltr:!0,collection:"SAP-icons-v4",packageName:"@ui5/webcomponents-icons"});const L$="accept",M0="M187 416q-12 0-20-9L71 299q-7-7-7-17 0-11 7.5-18.5T90 256q12 0 19 9l77 87 217-247q8-9 19-9t18.5 7.5T448 122q0 10-6 16L206 407q-7 9-19 9z";ne(L$,{pathData:M0,ltr:!0,collection:"SAP-icons-v5",packageName:"@ui5/webcomponents-icons"}),Ze();function N$(t,e,n){return p`<svg class="ui5-icon-root" part="root" tabindex="${u(this._tabIndex)}" dir="${u(this._dir)}" viewBox="${u(this.viewBox)}" role="${u(this.effectiveAccessibleRole)}" focusable="false" preserveAspectRatio="xMidYMid meet" aria-label="${u(this.effectiveAccessibleName)}" aria-hidden=${u(this.effectiveAriaHidden)} xmlns="http://www.w3.org/2000/svg" @focusin=${this._onfocusin} @focusout=${this._onfocusout} @keydown=${this._onkeydown} @keyup=${this._onkeyup}>${M$.call(this,t,e,n)}</svg>`}function D$(t,e,n){return Gs`<title id="${u(this._id)}-tooltip">${u(this.effectiveAccessibleName)}</title>`}function O$(t,e,n){return Gs`${u(this.customSvg)}`}function H$(t,e,n,o,r){return Gs`<path d="${u(o)}"></path>`}function M$(t,e,n){return Gs`${this.hasIconTooltip?D$.call(this,t,e,n):void 0}<g role="presentation">${this.customSvg?O$.call(this,t,e,n):void 0}${mt(this.pathData,(o,r)=>o._id||r,(o,r)=>H$.call(this,t,e,n,o,r))}</g>`}const de={packageName:"@ui5/webcomponents-theming",fileName:"themes/sap_fiori_3/parameters-bundle.css",content:`/**
* Copyright (c) 2012-2020 SAP SE or an SAP affiliate company and Theming Base Content contributors. Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*
* Theming Engine 1.23050.0-20230615114838+48b41017daabe3369028edc8539a00c12a880d68
* data:{"Path": "Base.baseLib.sap_fiori_3.css_variables", "PathPattern": "/%frameworkId%/%libId%/%themeId%/%fileId%.css", "Extends": ["sap_base_fiori","baseTheme"], "Tags": ["Fiori_3","LightColorScheme"], "FallbackThemeId": "sap_belize", "Engine": {"Name": "theming-engine", "Version": "1.23050.0-20230615114838+48b41017daabe3369028edc8539a00c12a880d68"}, "Version": { "Build": "11.5.0.20230619095805", "Source": "11.5.0"}}
*/

:root{--sapThemeMetaData-Base-baseLib:{"Path": "Base.baseLib.sap_fiori_3.css_variables", "PathPattern": "/%frameworkId%/%libId%/%themeId%/%fileId%.css", "Extends": ["sap_base_fiori","baseTheme"], "Tags": ["Fiori_3","LightColorScheme"], "FallbackThemeId": "sap_belize", "Engine": {"Name": "theming-engine", "Version": "1.23050.0-20230615114838+48b41017daabe3369028edc8539a00c12a880d68"}, "Version": { "Build": "11.5.0.20230619095805", "Source": "11.5.0"}};}

/**
* Base.baseLib.baseTheme.base (Version 11.5.0)
*/

/**
* Base.baseLib.baseTheme.css_variables (Version 11.5.0)
*/

:root {
  --sapBrandColor: #0a6ed1;
  --sapHighlightColor: #0854a0;
  --sapBaseColor: #fff;
  --sapShellColor: #354a5f;
  --sapBackgroundColor: #f7f7f7;
  --sapFontFamily: "72", "72full", Arial, Helvetica, sans-serif;
  --sapFontSize: .875rem;
  --sapTextColor: #32363a;
  --sapLinkColor: #0a6ed1;
  --sapCompanyLogo: none;
  --sapBackgroundImage: none;
  --sapBackgroundImageOpacity: 1.0;
  --sapBackgroundImageRepeat: false;
  --sapSelectedColor: #0854a0;
  --sapHoverColor: #ededed;
  --sapActiveColor: #0854a0;
  --sapHighlightTextColor: #fff;
  --sapTitleColor: #32363a;
  --sapNegativeColor: #bb0000;
  --sapCriticalColor: #df6e0c;
  --sapPositiveColor: #107e3e;
  --sapInformativeColor: #0a6ed1;
  --sapNeutralColor: #6a6d70;
  --sapNegativeElementColor: #bb0000;
  --sapCriticalElementColor: #df6e0c;
  --sapPositiveElementColor: #107e3e;
  --sapInformativeElementColor: #0a6ed1;
  --sapNeutralElementColor: #6a6d70;
  --sapNegativeTextColor: #bb0000;
  --sapCriticalTextColor: #b3590a;
  --sapPositiveTextColor: #107e3e;
  --sapInformativeTextColor: #0a6ed1;
  --sapNeutralTextColor: #6a6d70;
  --sapErrorColor: #bb0000;
  --sapWarningColor: #df6e0c;
  --sapSuccessColor: #107e3e;
  --sapInformationColor: #0a6ed1;
  --sapErrorBackground: #ffebeb;
  --sapWarningBackground: #fef7f1;
  --sapSuccessBackground: #f1fdf6;
  --sapInformationBackground: #f5faff;
  --sapNeutralBackground: #f4f4f4;
  --sapErrorBorderColor: #bb0000;
  --sapWarningBorderColor: #df6e0c;
  --sapSuccessBorderColor: #107e3e;
  --sapInformationBorderColor: #0a6ed1;
  --sapNeutralBorderColor: #6a6d70;
  --sapElement_LineHeight: 2.75rem;
  --sapElement_Height: 2.25rem;
  --sapElement_BorderWidth: .0625rem;
  --sapElement_BorderCornerRadius: .25rem;
  --sapElement_Compact_LineHeight: 2rem;
  --sapElement_Compact_Height: 1.625rem;
  --sapElement_Condensed_LineHeight: 1.5rem;
  --sapElement_Condensed_Height: 1.375rem;
  --sapContent_LineHeight: 1.4;
  --sapContent_IconHeight: 1rem;
  --sapContent_IconColor: #0854a0;
  --sapContent_ContrastIconColor: #fff;
  --sapContent_NonInteractiveIconColor: #6a6d70;
  --sapContent_MarkerIconColor: #286eb4;
  --sapContent_MarkerTextColor: #0e7581;
  --sapContent_MeasureIndicatorColor: #89919a;
  --sapContent_Selected_MeasureIndicatorColor: #89919a;
  --sapContent_Placeholderloading_Background: #ccc;
  --sapContent_Placeholderloading_Gradient: linear-gradient(to right, #ccc 0%, #ccc 20%, #999 50%, #ccc 80%, #ccc 100%);
  --sapContent_ImagePlaceholderBackground: #ccc;
  --sapContent_ImagePlaceholderForegroundColor: #fff;
  --sapContent_RatedColor: #d08014;
  --sapContent_UnratedColor: #89919a;
  --sapContent_BusyColor: #0854a0;
  --sapContent_FocusColor: #000;
  --sapContent_FocusStyle: dotted;
  --sapContent_FocusWidth: .0625rem;
  --sapContent_ContrastFocusColor: #fff;
  --sapContent_ShadowColor: #000;
  --sapContent_ContrastShadowColor: #fff;
  --sapContent_Shadow0: 0 0 0 0.0625rem rgba(0,0,0,0.1), 0 0.125rem 0.5rem 0 rgba(0,0,0,0.1);
  --sapContent_Shadow1: 0 0 0 0.0625rem rgba(0,0,0,0.42), 0 0.125rem 0.5rem 0 rgba(0,0,0,0.3);
  --sapContent_Shadow2: 0 0 0 0.0625rem rgba(0,0,0,0.42), 0 0.625rem 1.875rem 0 rgba(0,0,0,0.3);
  --sapContent_Shadow3: 0 0 0 0.0625rem rgba(0,0,0,0.42), 0 1.25rem 5rem 0 rgba(0,0,0,0.3);
  --sapContent_TextShadow: 0 0 0.125rem #fff;
  --sapContent_ContrastTextShadow: 0 0 0.0625rem rgba(0,0,0,0.7);
  --sapContent_HeaderShadow: 0 0.125rem 0.125rem 0 rgba(0,0,0,0.05), inset 0 -0.0625rem 0 0 #d9d9d9;
  --sapContent_Interaction_Shadow: none;
  --sapContent_Selected_Shadow: none;
  --sapContent_Negative_Shadow: none;
  --sapContent_Critical_Shadow: none;
  --sapContent_Positive_Shadow: none;
  --sapContent_Informative_Shadow: none;
  --sapContent_Neutral_Shadow: none;
  --sapContent_SearchHighlightColor: #d4f7db;
  --sapContent_HelpColor: #3f8600;
  --sapContent_LabelColor: #6a6d70;
  --sapContent_MonospaceFontFamily: "72Mono", "72Monofull", lucida console, monospace;
  --sapContent_MonospaceBoldFontFamily: "72Mono-Bold", "72Mono-Boldfull", lucida console, monospace;
  --sapContent_IconFontFamily: "SAP-icons";
  --sapContent_DisabledTextColor: rgba(50,54,58,0.6);
  --sapContent_DisabledOpacity: 0.4;
  --sapContent_ContrastTextThreshold: 0.65;
  --sapContent_ContrastTextColor: #fff;
  --sapContent_ForegroundColor: #efefef;
  --sapContent_ForegroundBorderColor: #89919a;
  --sapContent_ForegroundTextColor: #32363a;
  --sapContent_BadgeBackground: #d04343;
  --sapContent_BadgeTextColor: #fff;
  --sapContent_DragAndDropActiveColor: #0854a0;
  --sapContent_Selected_TextColor: #fff;
  --sapContent_Selected_Background: #0854a0;
  --sapContent_Selected_Hover_Background: #095caf;
  --sapContent_Selected_ForegroundColor: #0854a0;
  --sapContent_ForcedColorAdjust: none;
  --sapContent_Illustrative_Color1: #0a6ed1;
  --sapContent_Illustrative_Color2: #72b5f8;
  --sapContent_Illustrative_Color3: #ffba10;
  --sapContent_Illustrative_Color4: #4a5055;
  --sapContent_Illustrative_Color5: #9da4aa;
  --sapContent_Illustrative_Color6: #c6cace;
  --sapContent_Illustrative_Color7: #e7e9ea;
  --sapContent_Illustrative_Color8: #fff;
  --sapContent_Illustrative_Color9: #64edd2;
  --sapContent_Illustrative_Color10: #e7e9ea;
  --sapContent_Illustrative_Color11: #f31ded;
  --sapContent_Illustrative_Color12: #5dc122;
  --sapContent_Illustrative_Color13: #4ba1f6;
  --sapContent_Illustrative_Color14: #298ff4;
  --sapContent_Illustrative_Color15: #e6a400;
  --sapContent_Illustrative_Color16: #085aaa;
  --sapContent_Illustrative_Color17: #00a5a8;
  --sapContent_Illustrative_Color18: #d9ddde;
  --sapContent_Illustrative_Color19: #ccd0d2;
  --sapContent_Illustrative_Color20: #bec4c6;
  --sapFontLightFamily: "72-Light", "72-Lightfull", "72", "72full", Arial, Helvetica, sans-serif;
  --sapFontBoldFamily: "72-Bold", "72-Boldfull", "72", "72full", Arial, Helvetica, sans-serif;
  --sapFontSemiboldFamily: "72-Semibold", "72-Semiboldfull", "72", "72full", Arial, Helvetica, sans-serif;
  --sapFontSemiboldDuplexFamily: "72-SemiboldDuplex", "72-SemiboldDuplexfull", "72", "72full", Arial, Helvetica, sans-serif;
  --sapFontBlackFamily: "72Black", "72Blackfull","72", "72full", Arial, Helvetica, sans-serif;
  --sapFontHeaderFamily: "72", "72full", Arial, Helvetica, sans-serif;
  --sapFontSmallSize: .75rem;
  --sapFontLargeSize: 1rem;
  --sapFontHeader1Size: 2.25rem;
  --sapFontHeader2Size: 1.5rem;
  --sapFontHeader3Size: 1.25rem;
  --sapFontHeader4Size: 1.125rem;
  --sapFontHeader5Size: 1rem;
  --sapFontHeader6Size: .875rem;
  --sapLink_TextDecoration: none;
  --sapLink_Hover_Color: #0854a0;
  --sapLink_Hover_TextDecoration: underline;
  --sapLink_Active_Color: #0a6ed1;
  --sapLink_Active_TextDecoration: underline;
  --sapLink_Visited_Color: #0a6ed1;
  --sapLink_InvertedColor: #d3e8fd;
  --sapLink_SubtleColor: #074888;
  --sapShell_Background: #edeff0;
  --sapShell_BackgroundImage: linear-gradient(to bottom, #dfe3e4, #f3f4f5);
  --sapShell_BackgroundImageOpacity: 1.0;
  --sapShell_BackgroundImageRepeat: false;
  --sapShell_BorderColor: #354a5f;
  --sapShell_TextColor: #fff;
  --sapShell_InteractiveBackground: #354a5f;
  --sapShell_InteractiveTextColor: #d1e8ff;
  --sapShell_InteractiveBorderColor: #7996b4;
  --sapShell_GroupTitleTextColor: #32363a;
  --sapShell_GroupTitleTextShadow: 0 0 0.125rem #fff;
  --sapShell_Hover_Background: #283848;
  --sapShell_Active_Background: #23303e;
  --sapShell_Active_TextColor: #fff;
  --sapShell_Selected_Background: #23303e;
  --sapShell_Selected_TextColor: #fff;
  --sapShell_Selected_Hover_Background: #23303e;
  --sapShell_Favicon: none;
  --sapShell_Navigation_Background: #354a5f;
  --sapShell_Navigation_Hover_Background: #283848;
  --sapShell_Navigation_SelectedColor: #d1e8ff;
  --sapShell_Navigation_Selected_TextColor: #d1e8ff;
  --sapShell_Navigation_TextColor: #fff;
  --sapShell_Navigation_Active_TextColor: #fff;
  --sapShell_Navigation_Active_Background: #23303e;
  --sapShell_Shadow: 0 0.125rem 0.125rem 0 rgba(0,0,0,0.08), inset 0 -0.0625rem 0 0 rgba(0,0,0,0.18);
  --sapShell_NegativeColor: #f88;
  --sapShell_CriticalColor: #f8b67d;
  --sapShell_PositiveColor: #abe2c2;
  --sapShell_InformativeColor: #b1d6fb;
  --sapShell_NeutralColor: #d4d6d7;
  --sapShell_Category_1_Background: #286eb4;
  --sapShell_Category_1_BorderColor: #286eb4;
  --sapShell_Category_1_TextColor: #fff;
  --sapShell_Category_1_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_2_Background: #db1f77;
  --sapShell_Category_2_BorderColor: #db1f77;
  --sapShell_Category_2_TextColor: #fff;
  --sapShell_Category_2_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_3_Background: #d58215;
  --sapShell_Category_3_BorderColor: #d58215;
  --sapShell_Category_3_TextColor: #fff;
  --sapShell_Category_3_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_4_Background: #892971;
  --sapShell_Category_4_BorderColor: #892971;
  --sapShell_Category_4_TextColor: #fff;
  --sapShell_Category_4_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_5_Background: #bb2f2f;
  --sapShell_Category_5_BorderColor: #bb2f2f;
  --sapShell_Category_5_TextColor: #fff;
  --sapShell_Category_5_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_6_Background: #1193a2;
  --sapShell_Category_6_BorderColor: #1193a2;
  --sapShell_Category_6_TextColor: #fff;
  --sapShell_Category_6_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_7_Background: #cf5db3;
  --sapShell_Category_7_BorderColor: #cf5db3;
  --sapShell_Category_7_TextColor: #fff;
  --sapShell_Category_7_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_8_Background: #8b9668;
  --sapShell_Category_8_BorderColor: #8b9668;
  --sapShell_Category_8_TextColor: #fff;
  --sapShell_Category_8_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_9_Background: #597da1;
  --sapShell_Category_9_BorderColor: #597da1;
  --sapShell_Category_9_TextColor: #fff;
  --sapShell_Category_9_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_10_Background: #647987;
  --sapShell_Category_10_BorderColor: #647987;
  --sapShell_Category_10_TextColor: #fff;
  --sapShell_Category_10_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_11_Background: #dc5b5b;
  --sapShell_Category_11_BorderColor: #dc5b5b;
  --sapShell_Category_11_TextColor: #fff;
  --sapShell_Category_11_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_12_Background: #5154bd;
  --sapShell_Category_12_BorderColor: #5154bd;
  --sapShell_Category_12_TextColor: #fff;
  --sapShell_Category_12_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_13_Background: #bc1b66;
  --sapShell_Category_13_BorderColor: #bc1b66;
  --sapShell_Category_13_TextColor: #fff;
  --sapShell_Category_13_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_14_Background: #49797e;
  --sapShell_Category_14_BorderColor: #49797e;
  --sapShell_Category_14_TextColor: #fff;
  --sapShell_Category_14_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_15_Background: #476380;
  --sapShell_Category_15_BorderColor: #476380;
  --sapShell_Category_15_TextColor: #fff;
  --sapShell_Category_15_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_16_Background: #687a33;
  --sapShell_Category_16_BorderColor: #687a33;
  --sapShell_Category_16_TextColor: #fff;
  --sapShell_Category_16_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapAvatar_1_Background: #d08014;
  --sapAvatar_1_BorderColor: #d08014;
  --sapAvatar_1_TextColor: #fff;
  --sapAvatar_2_Background: #d04343;
  --sapAvatar_2_BorderColor: #d04343;
  --sapAvatar_2_TextColor: #fff;
  --sapAvatar_3_Background: #db1f77;
  --sapAvatar_3_BorderColor: #db1f77;
  --sapAvatar_3_TextColor: #fff;
  --sapAvatar_4_Background: #c0399f;
  --sapAvatar_4_BorderColor: #c0399f;
  --sapAvatar_4_TextColor: #fff;
  --sapAvatar_5_Background: #6367de;
  --sapAvatar_5_BorderColor: #6367de;
  --sapAvatar_5_TextColor: #fff;
  --sapAvatar_6_Background: #286eb4;
  --sapAvatar_6_BorderColor: #286eb4;
  --sapAvatar_6_TextColor: #fff;
  --sapAvatar_7_Background: #0f828f;
  --sapAvatar_7_BorderColor: #0f828f;
  --sapAvatar_7_TextColor: #fff;
  --sapAvatar_8_Background: #7ca10c;
  --sapAvatar_8_BorderColor: #7ca10c;
  --sapAvatar_8_TextColor: #fff;
  --sapAvatar_9_Background: #925ace;
  --sapAvatar_9_BorderColor: #925ace;
  --sapAvatar_9_TextColor: #fff;
  --sapAvatar_10_Background: #647987;
  --sapAvatar_10_BorderColor: #647987;
  --sapAvatar_10_TextColor: #fff;
  --sapButton_Background: #fff;
  --sapButton_BorderColor: #0854a0;
  --sapButton_BorderWidth: .0625rem;
  --sapButton_BorderCornerRadius: .25rem;
  --sapButton_TextColor: #0854a0;
  --sapButton_Hover_Background: #ebf5fe;
  --sapButton_Hover_BorderColor: #0854a0;
  --sapButton_Hover_TextColor: #0854a0;
  --sapButton_IconColor: #0854a0;
  --sapButton_Active_Background: #0854a0;
  --sapButton_Active_BorderColor: #0854a0;
  --sapButton_Active_TextColor: #fff;
  --sapButton_Emphasized_Background: #0a6ed1;
  --sapButton_Emphasized_BorderColor: #0a6ed1;
  --sapButton_Emphasized_TextColor: #fff;
  --sapButton_Emphasized_Hover_Background: #085caf;
  --sapButton_Emphasized_Hover_BorderColor: #085caf;
  --sapButton_Emphasized_Hover_TextColor: #fff;
  --sapButton_Emphasized_Active_Background: #0854a0;
  --sapButton_Emphasized_Active_BorderColor: #0854a0;
  --sapButton_Emphasized_Active_TextColor: #fff;
  --sapButton_Emphasized_TextShadow: transparent;
  --sapButton_Emphasized_FontWeight: bold;
  --sapButton_Reject_Background: #fff;
  --sapButton_Reject_BorderColor: #bb0000;
  --sapButton_Reject_TextColor: #b00;
  --sapButton_Reject_Hover_Background: #ffebeb;
  --sapButton_Reject_Hover_BorderColor: #bb0000;
  --sapButton_Reject_Hover_TextColor: #b00;
  --sapButton_Reject_Active_Background: #a20000;
  --sapButton_Reject_Active_BorderColor: #a20000;
  --sapButton_Reject_Active_TextColor: #fff;
  --sapButton_Reject_Selected_Background: #a20000;
  --sapButton_Reject_Selected_BorderColor: #a20000;
  --sapButton_Reject_Selected_TextColor: #fff;
  --sapButton_Reject_Selected_Hover_Background: #b00;
  --sapButton_Reject_Selected_Hover_BorderColor: #b00;
  --sapButton_Accept_Background: #fff;
  --sapButton_Accept_BorderColor: #107e3e;
  --sapButton_Accept_TextColor: #107e3e;
  --sapButton_Accept_Hover_Background: #f1fdf6;
  --sapButton_Accept_Hover_BorderColor: #107e3e;
  --sapButton_Accept_Hover_TextColor: #107e3e;
  --sapButton_Accept_Active_Background: #0d6733;
  --sapButton_Accept_Active_BorderColor: #0d6733;
  --sapButton_Accept_Active_TextColor: #fff;
  --sapButton_Accept_Selected_Background: #0d6733;
  --sapButton_Accept_Selected_BorderColor: #0d6733;
  --sapButton_Accept_Selected_TextColor: #fff;
  --sapButton_Accept_Selected_Hover_Background: #107e3e;
  --sapButton_Accept_Selected_Hover_BorderColor: #107e3e;
  --sapButton_Lite_Background: transparent;
  --sapButton_Lite_BorderColor: transparent;
  --sapButton_Lite_TextColor: #0854a0;
  --sapButton_Lite_Hover_Background: #ebf5fe;
  --sapButton_Lite_Hover_BorderColor: #0854a0;
  --sapButton_Lite_Hover_TextColor: #0854a0;
  --sapButton_Lite_Active_Background: #0854a0;
  --sapButton_Lite_Active_BorderColor: #0854a0;
  --sapButton_Selected_Background: #0854a0;
  --sapButton_Selected_BorderColor: #0854a0;
  --sapButton_Selected_TextColor: #fff;
  --sapButton_Selected_Hover_Background: #095caf;
  --sapButton_Selected_Hover_BorderColor: #095caf;
  --sapButton_Attention_Background: #fff;
  --sapButton_Attention_BorderColor: #df6e0c;
  --sapButton_Attention_TextColor: #32363a;
  --sapButton_Attention_Hover_Background: #fef7f1;
  --sapButton_Attention_Hover_BorderColor: #df6e0c;
  --sapButton_Attention_Hover_TextColor: #32363a;
  --sapButton_Attention_Active_Background: #f3801c;
  --sapButton_Attention_Active_BorderColor: #f3801c;
  --sapButton_Attention_Active_TextColor: #fff;
  --sapButton_Attention_Selected_Background: #f3801c;
  --sapButton_Attention_Selected_BorderColor: #f3801c;
  --sapButton_Attention_Selected_TextColor: #fff;
  --sapButton_Attention_Selected_Hover_Background: #f48e34;
  --sapButton_Attention_Selected_Hover_BorderColor: #f48e34;
  --sapButton_Negative_Background: #bb0000;
  --sapButton_Negative_BorderColor: #bb0000;
  --sapButton_Negative_TextColor: #fff;
  --sapButton_Negative_Hover_Background: #970000;
  --sapButton_Negative_Hover_BorderColor: #970000;
  --sapButton_Negative_Hover_TextColor: #fff;
  --sapButton_Negative_Active_Background: #800;
  --sapButton_Negative_Active_BorderColor: #800;
  --sapButton_Negative_Active_TextColor: #fff;
  --sapButton_Critical_Background: #df6e0c;
  --sapButton_Critical_BorderColor: #df6e0c;
  --sapButton_Critical_TextColor: #fff;
  --sapButton_Critical_Hover_Background: #f3801c;
  --sapButton_Critical_Hover_BorderColor: #f3801c;
  --sapButton_Critical_Hover_TextColor: #fff;
  --sapButton_Critical_Active_Background: #f5933e;
  --sapButton_Critical_Active_BorderColor: #f5933e;
  --sapButton_Critical_Active_TextColor: #fff;
  --sapButton_Success_Background: #107e3e;
  --sapButton_Success_BorderColor: #107e3e;
  --sapButton_Success_TextColor: #fff;
  --sapButton_Success_Hover_Background: #0c5e2e;
  --sapButton_Success_Hover_BorderColor: #0c5e2e;
  --sapButton_Success_Hover_TextColor: #fff;
  --sapButton_Success_Active_Background: #0a5128;
  --sapButton_Success_Active_BorderColor: #0a5128;
  --sapButton_Success_Active_TextColor: #fff;
  --sapButton_Information_Background: #0a6ed1;
  --sapButton_Information_BorderColor: #0a6ed1;
  --sapButton_Information_TextColor: #fff;
  --sapButton_Information_Hover_Background: #0961b9;
  --sapButton_Information_Hover_BorderColor: #0961b9;
  --sapButton_Information_Hover_TextColor: #fff;
  --sapButton_Information_Active_Background: #0854a0;
  --sapButton_Information_Active_BorderColor: #0854a0;
  --sapButton_Information_Active_TextColor: #fff;
  --sapButton_Neutral_Background: #6a6d70;
  --sapButton_Neutral_BorderColor: #6a6d70;
  --sapButton_Neutral_TextColor: #fff;
  --sapButton_Neutral_Hover_Background: #595b5e;
  --sapButton_Neutral_Hover_BorderColor: #595b5e;
  --sapButton_Neutral_Hover_TextColor: #fff;
  --sapButton_Neutral_Active_Background: #515456;
  --sapButton_Neutral_Active_BorderColor: #515456;
  --sapButton_Neutral_Active_TextColor: #fff;
  --sapButton_Track_Background: #ededed;
  --sapButton_Track_BorderColor: #89919a;
  --sapButton_Track_TextColor: #32363a;
  --sapButton_Track_Hover_Background: #ededed;
  --sapButton_Track_Hover_BorderColor: #0854a0;
  --sapButton_Track_Selected_Background: #ebf5fe;
  --sapButton_Track_Selected_BorderColor: #0854a0;
  --sapButton_Track_Selected_TextColor: #32363a;
  --sapButton_Track_Selected_Hover_Background: #ebf5fe;
  --sapButton_Track_Selected_Hover_BorderColor: #095caf;
  --sapButton_Handle_Background: #fff;
  --sapButton_Handle_BorderColor: #89919a;
  --sapButton_Handle_TextColor: #32363a;
  --sapButton_Handle_Hover_Background: #ebf5fe;
  --sapButton_Handle_Hover_BorderColor: #0854a0;
  --sapButton_Handle_Selected_Background: #0854a0;
  --sapButton_Handle_Selected_BorderColor: #0854a0;
  --sapButton_Handle_Selected_TextColor: #fff;
  --sapButton_Handle_Selected_Hover_Background: #095caf;
  --sapButton_Handle_Selected_Hover_BorderColor: #095caf;
  --sapButton_Track_Negative_Background: #ffebeb;
  --sapButton_Track_Negative_BorderColor: #bb0000;
  --sapButton_Track_Negative_TextColor: #b00;
  --sapButton_Track_Negative_Hover_Background: #ffebeb;
  --sapButton_Track_Negative_Hover_BorderColor: #bb0000;
  --sapButton_Handle_Negative_Background: #fff;
  --sapButton_Handle_Negative_BorderColor: #bb0000;
  --sapButton_Handle_Negative_TextColor: #b00;
  --sapButton_Handle_Negative_Hover_Background: #ffebeb;
  --sapButton_Handle_Negative_Hover_BorderColor: #bb0000;
  --sapButton_Track_Positive_Background: #f1fdf6;
  --sapButton_Track_Positive_BorderColor: #107e3e;
  --sapButton_Track_Positive_TextColor: #107e3e;
  --sapButton_Track_Positive_Hover_Background: #f1fdf6;
  --sapButton_Track_Positive_Hover_BorderColor: #107e3e;
  --sapButton_Handle_Positive_Background: #fff;
  --sapButton_Handle_Positive_BorderColor: #107e3e;
  --sapButton_Handle_Positive_TextColor: #107e3e;
  --sapButton_Handle_Positive_Hover_Background: #f1fdf6;
  --sapButton_Handle_Positive_Hover_BorderColor: #107e3e;
  --sapButton_TokenBackground: #fafafa;
  --sapButton_TokenBorderColor: #c2c2c2;
  --sapField_Background: #fff;
  --sapField_BackgroundStyle: none;
  --sapField_TextColor: #32363a;
  --sapField_PlaceholderTextColor: #74777a;
  --sapField_BorderColor: #89919a;
  --sapField_HelpBackground: #fff;
  --sapField_BorderWidth: .0625rem;
  --sapField_BorderStyle: solid;
  --sapField_BorderCornerRadius: .125rem;
  --sapField_Shadow: none;
  --sapField_Hover_Background: #fff;
  --sapField_Hover_BackgroundStyle: none;
  --sapField_Hover_BorderColor: #0854a0;
  --sapField_Hover_HelpBackground: #ebf5fe;
  --sapField_Hover_Shadow: none;
  --sapField_Hover_InvalidShadow: none;
  --sapField_Hover_WarningShadow: none;
  --sapField_Hover_SuccessShadow: none;
  --sapField_Hover_InformationShadow: none;
  --sapField_Active_BorderColor: #0854a0;
  --sapField_Focus_Background: #fff;
  --sapField_Focus_BorderColor: #89919a;
  --sapField_Focus_HelpBackground: #fff;
  --sapField_ReadOnly_Background: rgba(242,242,242,0.5);
  --sapField_ReadOnly_BackgroundStyle: none;
  --sapField_ReadOnly_BorderColor: #89919a;
  --sapField_ReadOnly_BorderStyle: solid;
  --sapField_ReadOnly_HelpBackground: rgba(242,242,242,0.5);
  --sapField_RequiredColor: #ce3b3b;
  --sapField_InvalidColor: #bb0000;
  --sapField_InvalidBackground: #fff;
  --sapField_InvalidBackgroundStyle: none;
  --sapField_InvalidBorderWidth: .125rem;
  --sapField_InvalidBorderStyle: solid;
  --sapField_InvalidShadow: none;
  --sapField_WarningColor: #df6e0c;
  --sapField_WarningBackground: #fff;
  --sapField_WarningBackgroundStyle: none;
  --sapField_WarningBorderWidth: .125rem;
  --sapField_WarningBorderStyle: solid;
  --sapField_WarningShadow: none;
  --sapField_SuccessColor: #107e3e;
  --sapField_SuccessBackground: #fff;
  --sapField_SuccessBackgroundStyle: none;
  --sapField_SuccessBorderWidth: .0625rem;
  --sapField_SuccessBorderStyle: solid;
  --sapField_SuccessShadow: none;
  --sapField_InformationColor: #0a6ed1;
  --sapField_InformationBackground: #fff;
  --sapField_InformationBackgroundStyle: none;
  --sapField_InformationBorderWidth: .125rem;
  --sapField_InformationBorderStyle: solid;
  --sapField_InformationShadow: none;
  --sapGroup_TitleBackground: transparent;
  --sapGroup_TitleBorderColor: #d9d9d9;
  --sapGroup_TitleTextColor: #32363a;
  --sapGroup_Title_FontSize: 1.125rem;
  --sapGroup_ContentBackground: #fff;
  --sapGroup_ContentBorderColor: #d9d9d9;
  --sapGroup_BorderWidth: .0625rem;
  --sapGroup_BorderCornerRadius: 0;
  --sapGroup_FooterBackground: transparent;
  --sapToolbar_Background: transparent;
  --sapToolbar_SeparatorColor: #d9d9d9;
  --sapList_HeaderBackground: #f2f2f2;
  --sapList_HeaderBorderColor: #e5e5e5;
  --sapList_HeaderTextColor: #32363a;
  --sapList_BorderColor: #e5e5e5;
  --sapList_BorderWidth: .0625rem;
  --sapList_TextColor: #32363a;
  --sapList_Active_TextColor: #fff;
  --sapList_Active_Background: #0854a0;
  --sapList_SelectionBackgroundColor: #e5f0fa;
  --sapList_SelectionBorderColor: #0854a0;
  --sapList_Hover_SelectionBackground: #d8e9f8;
  --sapList_Background: #fff;
  --sapList_Hover_Background: #f5f5f5;
  --sapList_AlternatingBackground: #f2f2f2;
  --sapList_GroupHeaderBackground: #fff;
  --sapList_GroupHeaderBorderColor: #d9d9d9;
  --sapList_GroupHeaderTextColor: #32363a;
  --sapList_TableGroupHeaderBackground: #efefef;
  --sapList_TableGroupHeaderBorderColor: #d9d9d9;
  --sapList_TableGroupHeaderTextColor: #32363a;
  --sapList_FooterBackground: #fafafa;
  --sapList_FooterTextColor: #32363a;
  --sapList_TableFooterBorder: #d9d9d9;
  --sapList_TableFixedBorderColor: #8c8c8c;
  --sapMessage_ErrorBorderColor: #bb0000;
  --sapMessage_WarningBorderColor: #df6e0c;
  --sapMessage_SuccessBorderColor: #107e3e;
  --sapMessage_InformationBorderColor: #0a6ed1;
  --sapPopover_BorderCornerRadius: .25rem;
  --sapProgress_Background: #fff;
  --sapProgress_BorderColor: #89919a;
  --sapProgress_TextColor: #32363a;
  --sapProgress_FontSize: .75rem;
  --sapProgress_NegativeBackground: #fff;
  --sapProgress_NegativeBorderColor: #89919a;
  --sapProgress_NegativeTextColor: #32363a;
  --sapProgress_CriticalBackground: #fff;
  --sapProgress_CriticalBorderColor: #89919a;
  --sapProgress_CriticalTextColor: #32363a;
  --sapProgress_PositiveBackground: #fff;
  --sapProgress_PositiveBorderColor: #89919a;
  --sapProgress_PositiveTextColor: #32363a;
  --sapProgress_InformationBackground: #fff;
  --sapProgress_InformationBorderColor: #89919a;
  --sapProgress_InformationTextColor: #32363a;
  --sapProgress_Value_Background: #6a6d70;
  --sapProgress_Value_BorderColor: #89919a;
  --sapProgress_Value_TextColor: #32363a;
  --sapProgress_Value_NegativeBackground: #bb0000;
  --sapProgress_Value_NegativeBorderColor: #fff;
  --sapProgress_Value_NegativeTextColor: #32363a;
  --sapProgress_Value_CriticalBackground: #df6e0c;
  --sapProgress_Value_CriticalBorderColor: #fff;
  --sapProgress_Value_CriticalTextColor: #32363a;
  --sapProgress_Value_PositiveBackground: #107e3e;
  --sapProgress_Value_PositiveBorderColor: #fff;
  --sapProgress_Value_PositiveTextColor: #32363a;
  --sapProgress_Value_InformationBackground: #0a6ed1;
  --sapProgress_Value_InformationBorderColor: #fff;
  --sapProgress_Value_InformationTextColor: #32363a;
  --sapScrollBar_FaceColor: #949494;
  --sapScrollBar_TrackColor: #fff;
  --sapScrollBar_BorderColor: #949494;
  --sapScrollBar_SymbolColor: #0854a0;
  --sapScrollBar_Dimension: .75rem;
  --sapScrollBar_Hover_FaceColor: #8c8c8c;
  --sapSlider_Background: #89919a;
  --sapSlider_BorderColor: #89919a;
  --sapSlider_Selected_Background: #0854a0;
  --sapSlider_Selected_BorderColor: #0854a0;
  --sapSlider_HandleBackground: #fff;
  --sapSlider_HandleBorderColor: #89919a;
  --sapSlider_RangeHandleBackground: transparent;
  --sapSlider_Hover_HandleBackground: #ebf5fe;
  --sapSlider_Hover_HandleBorderColor: #0854a0;
  --sapSlider_Hover_RangeHandleBackground: #ebf5fe;
  --sapSlider_Active_HandleBackground: #0854a0;
  --sapSlider_Active_HandleBorderColor: #0854a0;
  --sapSlider_Active_RangeHandleBackground: transparent;
  --sapPageHeader_Background: #fff;
  --sapPageHeader_BorderColor: #d9d9d9;
  --sapPageHeader_TextColor: #32363a;
  --sapPageFooter_Background: #fff;
  --sapPageFooter_BorderColor: #d9d9d9;
  --sapPageFooter_TextColor: #32363a;
  --sapInfobar_Background: #0f828f;
  --sapInfobar_Hover_Background: #0e7581;
  --sapInfobar_Active_Background: #0a545c;
  --sapInfobar_NonInteractive_Background: #e6e6e6;
  --sapInfobar_TextColor: #fff;
  --sapObjectHeader_Background: #fff;
  --sapObjectHeader_Hover_Background: #f5f5f5;
  --sapObjectHeader_BorderColor: #d9d9d9;
  --sapObjectHeader_Title_TextColor: #32363a;
  --sapObjectHeader_Title_FontSize: 1.25rem;
  --sapObjectHeader_Title_SnappedFontSize: 1.25rem;
  --sapObjectHeader_Title_FontFamily: "72", "72full", Arial, Helvetica, sans-serif;
  --sapObjectHeader_Subtitle_TextColor: #6a6d70;
  --sapBlockLayer_Background: #000;
  --sapTile_Background: #fff;
  --sapTile_Hover_Background: #f5f5f5;
  --sapTile_Active_Background: #f5f5f5;
  --sapTile_BorderColor: transparent;
  --sapTile_BorderCornerRadius: .25rem;
  --sapTile_TitleTextColor: #32363a;
  --sapTile_TextColor: #6a6d70;
  --sapTile_IconColor: #5a7da0;
  --sapTile_SeparatorColor: #ccc;
  --sapTile_Interactive_BorderColor: #b3b3b3;
  --sapTile_OverlayBackground: rgba(0,0,0,0.8);
  --sapTile_OverlayForegroundColor: #fff;
  --sapAccentColor1: #d08014;
  --sapAccentColor2: #d04343;
  --sapAccentColor3: #db1f77;
  --sapAccentColor4: #c0399f;
  --sapAccentColor5: #6367de;
  --sapAccentColor6: #286eb4;
  --sapAccentColor7: #0f828f;
  --sapAccentColor8: #7ca10c;
  --sapAccentColor9: #925ace;
  --sapAccentColor10: #647987;
  --sapAccentBackgroundColor1: #fff3b8;
  --sapAccentBackgroundColor2: #ffd0e7;
  --sapAccentBackgroundColor3: #fff0fa;
  --sapAccentBackgroundColor4: #ffdcf3;
  --sapAccentBackgroundColor5: #ded3ff;
  --sapAccentBackgroundColor6: #d1efff;
  --sapAccentBackgroundColor7: #c2fcee;
  --sapAccentBackgroundColor8: #ebf5cb;
  --sapAccentBackgroundColor9: #dafdf5;
  --sapAccentBackgroundColor10: #eaecee;
  --sapIndicationColor_1: #880000;
  --sapIndicationColor_1_Background: #880000;
  --sapIndicationColor_1_BorderColor: #880000;
  --sapIndicationColor_1_TextColor: #fff;
  --sapIndicationColor_1_Hover_Background: #6f0000;
  --sapIndicationColor_1_Active_Background: #500;
  --sapIndicationColor_1_Active_BorderColor: #880000;
  --sapIndicationColor_1_Active_TextColor: #fff;
  --sapIndicationColor_1_Selected_Background: #500;
  --sapIndicationColor_1_Selected_BorderColor: #880000;
  --sapIndicationColor_1_Selected_TextColor: #fff;
  --sapIndicationColor_1b: #fb9d9d;
  --sapIndicationColor_1b_BorderColor: #fb9d9d;
  --sapIndicationColor_1b_Hover_Background: #fa8585;
  --sapIndicationColor_2: #bb0000;
  --sapIndicationColor_2_Background: #bb0000;
  --sapIndicationColor_2_BorderColor: #bb0000;
  --sapIndicationColor_2_TextColor: #fff;
  --sapIndicationColor_2_Hover_Background: #a20000;
  --sapIndicationColor_2_Active_Background: #800;
  --sapIndicationColor_2_Active_BorderColor: #bb0000;
  --sapIndicationColor_2_Active_TextColor: #fff;
  --sapIndicationColor_2_Selected_Background: #800;
  --sapIndicationColor_2_Selected_BorderColor: #bb0000;
  --sapIndicationColor_2_Selected_TextColor: #fff;
  --sapIndicationColor_2b: #fcc4c4;
  --sapIndicationColor_2b_BorderColor: #fcc4c4;
  --sapIndicationColor_2b_Hover_Background: #fbacac;
  --sapIndicationColor_3: #df6e0c;
  --sapIndicationColor_3_Background: #df6e0c;
  --sapIndicationColor_3_BorderColor: #df6e0c;
  --sapIndicationColor_3_TextColor: #fff;
  --sapIndicationColor_3_Hover_Background: #d0670b;
  --sapIndicationColor_3_Active_Background: #c2600a;
  --sapIndicationColor_3_Active_BorderColor: #df6e0c;
  --sapIndicationColor_3_Active_TextColor: #fff;
  --sapIndicationColor_3_Selected_Background: #c2600a;
  --sapIndicationColor_3_Selected_BorderColor: #df6e0c;
  --sapIndicationColor_3_Selected_TextColor: #fff;
  --sapIndicationColor_3b: #fff2c0;
  --sapIndicationColor_3b_BorderColor: #fff2c0;
  --sapIndicationColor_3b_Hover_Background: #ffeda6;
  --sapIndicationColor_4: #107e3e;
  --sapIndicationColor_4_Background: #107e3e;
  --sapIndicationColor_4_BorderColor: #107e3e;
  --sapIndicationColor_4_TextColor: #fff;
  --sapIndicationColor_4_Hover_Background: #0d6733;
  --sapIndicationColor_4_Active_Background: #0a5128;
  --sapIndicationColor_4_Active_BorderColor: #107e3e;
  --sapIndicationColor_4_Active_TextColor: #fff;
  --sapIndicationColor_4_Selected_Background: #0a5128;
  --sapIndicationColor_4_Selected_BorderColor: #107e3e;
  --sapIndicationColor_4_Selected_TextColor: #fff;
  --sapIndicationColor_4b: #bae8bc;
  --sapIndicationColor_4b_BorderColor: #bae8bc;
  --sapIndicationColor_4b_Hover_Background: #a7e2a9;
  --sapIndicationColor_5: #0a6ed1;
  --sapIndicationColor_5_Background: #0a6ed1;
  --sapIndicationColor_5_BorderColor: #0a6ed1;
  --sapIndicationColor_5_TextColor: #fff;
  --sapIndicationColor_5_Hover_Background: #0961b9;
  --sapIndicationColor_5_Active_Background: #0854a0;
  --sapIndicationColor_5_Active_BorderColor: #0a6ed1;
  --sapIndicationColor_5_Active_TextColor: #fff;
  --sapIndicationColor_5_Selected_Background: #0854a0;
  --sapIndicationColor_5_Selected_BorderColor: #0a6ed1;
  --sapIndicationColor_5_Selected_TextColor: #fff;
  --sapIndicationColor_5b: #d3effd;
  --sapIndicationColor_5b_BorderColor: #d3effd;
  --sapIndicationColor_5b_Hover_Background: #bbe6fc;
  --sapIndicationColor_6: #0f828f;
  --sapIndicationColor_6_Background: #0f828f;
  --sapIndicationColor_6_BorderColor: #0f828f;
  --sapIndicationColor_6_TextColor: #fff;
  --sapIndicationColor_6_Hover_Background: #0d6d78;
  --sapIndicationColor_6_Active_Background: #0a5861;
  --sapIndicationColor_6_Active_BorderColor: #0f828f;
  --sapIndicationColor_6_Active_TextColor: #fff;
  --sapIndicationColor_6_Selected_Background: #0a5861;
  --sapIndicationColor_6_Selected_BorderColor: #0f828f;
  --sapIndicationColor_6_Selected_TextColor: #fff;
  --sapIndicationColor_6b: #cdf5ec;
  --sapIndicationColor_6b_BorderColor: #cdf5ec;
  --sapIndicationColor_6b_Hover_Background: #b8f1e4;
  --sapIndicationColor_7: #925ace;
  --sapIndicationColor_7_Background: #925ace;
  --sapIndicationColor_7_BorderColor: #925ace;
  --sapIndicationColor_7_TextColor: #fff;
  --sapIndicationColor_7_Hover_Background: #8546c8;
  --sapIndicationColor_7_Active_Background: #7838bd;
  --sapIndicationColor_7_Active_BorderColor: #925ace;
  --sapIndicationColor_7_Active_TextColor: #fff;
  --sapIndicationColor_7_Selected_Background: #7838bd;
  --sapIndicationColor_7_Selected_BorderColor: #925ace;
  --sapIndicationColor_7_Selected_TextColor: #fff;
  --sapIndicationColor_7b: #e2dbff;
  --sapIndicationColor_7b_BorderColor: #e2dbff;
  --sapIndicationColor_7b_Hover_Background: #cdc2ff;
  --sapIndicationColor_8: #c0399f;
  --sapIndicationColor_8_Background: #c0399f;
  --sapIndicationColor_8_BorderColor: #c0399f;
  --sapIndicationColor_8_TextColor: #fff;
  --sapIndicationColor_8_Hover_Background: #ac338f;
  --sapIndicationColor_8_Active_Background: #992d7e;
  --sapIndicationColor_8_Active_BorderColor: #c0399f;
  --sapIndicationColor_8_Active_TextColor: #fff;
  --sapIndicationColor_8_Selected_Background: #992d7e;
  --sapIndicationColor_8_Selected_BorderColor: #c0399f;
  --sapIndicationColor_8_Selected_TextColor: #fff;
  --sapIndicationColor_8b: #f8d6ff;
  --sapIndicationColor_8b_BorderColor: #f8d6ff;
  --sapIndicationColor_8b_Hover_Background: #f4bdff;
  --sapIndicationColor_9: #1d2d3e;
  --sapIndicationColor_9_Background: #1d2d3e;
  --sapIndicationColor_9_BorderColor: #1d2d3e;
  --sapIndicationColor_9_TextColor: #fff;
  --sapIndicationColor_9_Hover_Background: #15202d;
  --sapIndicationColor_9_Active_Background: #0d141b;
  --sapIndicationColor_9_Active_BorderColor: #1d2d3e;
  --sapIndicationColor_9_Active_TextColor: #fff;
  --sapIndicationColor_9_Selected_Background: #0d141b;
  --sapIndicationColor_9_Selected_BorderColor: #1d2d3e;
  --sapIndicationColor_9_Selected_TextColor: #fff;
  --sapIndicationColor_9b: #fff;
  --sapIndicationColor_9b_BorderColor: #d9d9d9;
  --sapIndicationColor_9b_Hover_Background: #f2f2f2;
  --sapIndicationColor_10: #45484a;
  --sapIndicationColor_10_Background: #45484a;
  --sapIndicationColor_10_BorderColor: #45484a;
  --sapIndicationColor_10_TextColor: #fff;
  --sapIndicationColor_10_Hover_Background: #393b3d;
  --sapIndicationColor_10_Active_Background: #2c2e30;
  --sapIndicationColor_10_Active_BorderColor: #45484a;
  --sapIndicationColor_10_Active_TextColor: #fff;
  --sapIndicationColor_10_Selected_Background: #2c2e30;
  --sapIndicationColor_10_Selected_BorderColor: #45484a;
  --sapIndicationColor_10_Selected_TextColor: #fff;
  --sapIndicationColor_10b: #eaecee;
  --sapIndicationColor_10b_BorderColor: #eaecee;
  --sapIndicationColor_10b_Hover_Background: #dcdfe3;
  --sapLegend_WorkingBackground: #fafafa;
  --sapLegend_NonWorkingBackground: #dedede;
  --sapLegend_CurrentDateTime: #c0399f;
  --sapLegendColor1: #d58215;
  --sapLegendColor2: #dc5b5b;
  --sapLegendColor3: #db1f77;
  --sapLegendColor4: #9b3b3b;
  --sapLegendColor5: #cf5db3;
  --sapLegendColor6: #286eb4;
  --sapLegendColor7: #1193a2;
  --sapLegendColor8: #8b9668;
  --sapLegendColor9: #647987;
  --sapLegendColor10: #892971;
  --sapLegendColor11: #725a3a;
  --sapLegendColor12: #bb2f2f;
  --sapLegendColor13: #bc1b66;
  --sapLegendColor14: #8b714f;
  --sapLegendColor15: #606190;
  --sapLegendColor16: #597da1;
  --sapLegendColor17: #49797e;
  --sapLegendColor18: #687a33;
  --sapLegendColor19: #295989;
  --sapLegendColor20: #5154bd;
  --sapLegendBackgroundColor1: #fdf3e7;
  --sapLegendBackgroundColor2: #faeaea;
  --sapLegendBackgroundColor3: #fce9f2;
  --sapLegendBackgroundColor4: #f8ecec;
  --sapLegendBackgroundColor5: #f9ebf5;
  --sapLegendBackgroundColor6: #ebf3fa;
  --sapLegendBackgroundColor7: #e8fbfd;
  --sapLegendBackgroundColor8: #f3f4ef;
  --sapLegendBackgroundColor9: #f1f3f4;
  --sapLegendBackgroundColor10: #f9ebf6;
  --sapLegendBackgroundColor11: #f6f2ed;
  --sapLegendBackgroundColor12: #faeaea;
  --sapLegendBackgroundColor13: #fce9f2;
  --sapLegendBackgroundColor14: #f5f2ee;
  --sapLegendBackgroundColor15: #f0f0f5;
  --sapLegendBackgroundColor16: #eff2f6;
  --sapLegendBackgroundColor17: #eff5f6;
  --sapLegendBackgroundColor18: #f5f7ed;
  --sapLegendBackgroundColor19: #ebf2f9;
  --sapLegendBackgroundColor20: #ecedf8;
  --sapChart_OrderedColor_1: #438cd5;
  --sapChart_OrderedColor_2: #e66729;
  --sapChart_OrderedColor_3: #16976c;
  --sapChart_OrderedColor_4: #ed4a7b;
  --sapChart_OrderedColor_5: #945ecf;
  --sapChart_OrderedColor_6: #1193a2;
  --sapChart_OrderedColor_7: #525df4;
  --sapChart_OrderedColor_8: #bf399e;
  --sapChart_OrderedColor_9: #6c8893;
  --sapChart_OrderedColor_10: #ed5f5f;
  --sapChart_OrderedColor_11: #2f6497;
  --sapChart_Bad: #dc0d0e;
  --sapChart_Critical: #cb7d0c;
  --sapChart_Good: #3c9d57;
  --sapChart_Neutral: #848f94;
  --sapChart_Sequence_1: #438cd5;
  --sapChart_Sequence_2: #e66729;
  --sapChart_Sequence_3: #16976c;
  --sapChart_Sequence_4: #ed4a7b;
  --sapChart_Sequence_5: #945ecf;
  --sapChart_Sequence_6: #1193a2;
  --sapChart_Sequence_7: #525df4;
  --sapChart_Sequence_8: #bf399e;
  --sapChart_Sequence_9: #6c8893;
  --sapChart_Sequence_10: #ed5f5f;
  --sapChart_Sequence_11: #2f6497;
  --sapChart_Sequence_Neutral: #848f94;
  
  --sapFontUrl_SAP-icons_woff: url('../../../Base/baseLib/baseTheme/fonts/SAP-icons.woff');
  --sapFontUrl_SAP-icons_woff2: url('../../../Base/baseLib/baseTheme/fonts/SAP-icons.woff2');
  --sapFontUrl_SAP-icons-TNT_ttf: url('../../../Base/baseLib/baseTheme/fonts/SAP-icons-TNT.ttf');
  --sapFontUrl_SAP-icons-TNT_woff: url('../../../Base/baseLib/baseTheme/fonts/SAP-icons-TNT.woff');
  --sapFontUrl_SAP-icons-TNT_woff2: url('../../../Base/baseLib/baseTheme/fonts/SAP-icons-TNT.woff2');
  --sapFontUrl_SAP-icons-Business-Suite_ttf: url('../../../Base/baseLib/baseTheme/fonts/BusinessSuiteInAppSymbols.ttf');
  --sapFontUrl_SAP-icons-Business-Suite_woff: url('../../../Base/baseLib/baseTheme/fonts/BusinessSuiteInAppSymbols.woff');
  --sapFontUrl_SAP-icons-Business-Suite_woff2: url('../../../Base/baseLib/baseTheme/fonts/BusinessSuiteInAppSymbols.woff2');
  --sapFontUrl_72_Regular_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Regular.woff2');
  --sapFontUrl_72_Regular_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Regular.woff');
  --sapFontUrl_72_Regular_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Regular-full.woff2');
  --sapFontUrl_72_Regular_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Regular-full.woff');
  --sapFontUrl_72_Bold_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Bold.woff2');
  --sapFontUrl_72_Bold_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Bold.woff');
  --sapFontUrl_72_Bold_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Bold-full.woff2');
  --sapFontUrl_72_Bold_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Bold-full.woff');
  --sapFontUrl_72_Semibold_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Semibold.woff2');
  --sapFontUrl_72_Semibold_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Semibold.woff');
  --sapFontUrl_72_Semibold_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Semibold-full.woff2');
  --sapFontUrl_72_Semibold_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Semibold-full.woff');
  --sapFontUrl_72_SemiboldDuplex_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-SemiboldDuplex.woff2');
  --sapFontUrl_72_SemiboldDuplex_woff: url('../../../Base/baseLib/baseTheme/fonts/72-SemiboldDuplex.woff');
  --sapFontUrl_72_SemiboldDuplex_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-SemiboldDuplex-full.woff2');
  --sapFontUrl_72_SemiboldDuplex_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-SemiboldDuplex-full.woff');
  --sapFontUrl_72_Light_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Light.woff2');
  --sapFontUrl_72_Light_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Light.woff');
  --sapFontUrl_72_Light_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Light-full.woff2');
  --sapFontUrl_72_Light_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Light-full.woff');
  --sapFontUrl_72_Black_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Black.woff2');
  --sapFontUrl_72_Black_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Black.woff');
  --sapFontUrl_72_Black_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Black-full.woff2');
  --sapFontUrl_72_Black_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Black-full.woff');
  --sapFontUrl_72_BoldItalic_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-BoldItalic.woff2');
  --sapFontUrl_72_BoldItalic_woff: url('../../../Base/baseLib/baseTheme/fonts/72-BoldItalic.woff');
  --sapFontUrl_72_BoldItalic_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-BoldItalic-full.woff2');
  --sapFontUrl_72_BoldItalic_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-BoldItalic-full.woff');
  --sapFontUrl_72_Condensed_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Condensed.woff2');
  --sapFontUrl_72_Condensed_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Condensed.woff');
  --sapFontUrl_72_Condensed_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Condensed-full.woff2');
  --sapFontUrl_72_Condensed_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Condensed-full.woff');
  --sapFontUrl_72_CondensedBold_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-CondensedBold.woff2');
  --sapFontUrl_72_CondensedBold_woff: url('../../../Base/baseLib/baseTheme/fonts/72-CondensedBold.woff');
  --sapFontUrl_72_CondensedBold_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-CondensedBold-full.woff2');
  --sapFontUrl_72_CondensedBold_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-CondensedBold-full.woff');
  --sapFontUrl_72_Italic_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Italic.woff2');
  --sapFontUrl_72_Italic_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Italic.woff');
  --sapFontUrl_72_Italic_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Italic-full.woff2');
  --sapFontUrl_72_Italic_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Italic-full.woff');
  --sapFontUrl_72Mono_Regular_woff2: url('../../../Base/baseLib/baseTheme/fonts/72Mono-Regular.woff2');
  --sapFontUrl_72Mono_Regular_woff: url('../../../Base/baseLib/baseTheme/fonts/72Mono-Regular.woff');
  --sapFontUrl_72Mono_Regular_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72Mono-Regular-full.woff2');
  --sapFontUrl_72Mono_Regular_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72Mono-Regular-full.woff');
  --sapFontUrl_72Mono_Bold_woff2: url('../../../Base/baseLib/baseTheme/fonts/72Mono-Bold.woff2');
  --sapFontUrl_72Mono_Bold_woff: url('../../../Base/baseLib/baseTheme/fonts/72Mono-Bold.woff');
  --sapFontUrl_72Mono_Bold_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72Mono-Bold-full.woff2');
  --sapFontUrl_72Mono_Bold_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72Mono-Bold-full.woff');
}

.background-image--sapCompanyLogo {
  background-image: var(--sapCompanyLogo);
}

.background-image--sapBackgroundImage {
  background-image: var(--sapBackgroundImage);
}

.background-image--sapShell_BackgroundImage {
  background-image: var(--sapShell_BackgroundImage);
}

/**
* Base.baseLib.sap_base_fiori.base (Version 11.5.0)
*/

/**
* Base.baseLib.sap_base_fiori.css_variables (Version 11.5.0)
*/

/**
* Base.baseLib.sap_fiori_3.base (Version 11.5.0)
*/

/**
* Base.baseLib.sap_fiori_3.css_variables (Version 11.5.0)
*/
`},ve={packageName:"@ui5/webcomponents",fileName:"themes/sap_fiori_3/parameters-bundle.css",content:`:root [_ui5host] {
	--ui5-avatar-hover-box-shadow-offset: 0px 0px 0px 0.0625rem;
	--ui5-avatar-initials-color: var(--sapContent_ImagePlaceholderForegroundColor);
	--ui5-avatar-border-radius: .25rem;
	--ui5-avatar-border-radius-img-deduction: 0.0625rem;
	--ui5-avatar-initials-border: none;
	--ui5-avatar-accent1: var(--sapAccentColor1);
	--ui5-avatar-accent2: var(--sapAccentColor2);
	--ui5-avatar-accent3: var(--sapAccentColor3);
	--ui5-avatar-accent4: var(--sapAccentColor4);
	--ui5-avatar-accent5: var(--sapAccentColor5);
	--ui5-avatar-accent6: var(--sapAccentColor6);
	--ui5-avatar-accent7: var(--sapAccentColor7);
	--ui5-avatar-accent8: var(--sapAccentColor8);
	--ui5-avatar-accent9: var(--sapAccentColor9);
	--ui5-avatar-accent10: var(--sapAccentColor10);
	--ui5-avatar-placeholder: var(--sapContent_ImagePlaceholderBackground);

	--ui5-avatar-accent1-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-accent2-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-accent3-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-accent4-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-accent5-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-accent6-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-accent7-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-accent8-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-accent9-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-accent10-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-placeholder-color: var(--ui5-avatar-initials-color);

	--ui5-avatar-accent1-border-color: var(--sapField_BorderColor);
	--ui5-avatar-accent2-border-color: var(--sapField_BorderColor);
	--ui5-avatar-accent3-border-color: var(--sapField_BorderColor);
	--ui5-avatar-accent4-border-color: var(--sapField_BorderColor);
	--ui5-avatar-accent5-border-color: var(--sapField_BorderColor);
	--ui5-avatar-accent6-border-color: var(--sapField_BorderColor);
	--ui5-avatar-accent7-border-color: var(--sapField_BorderColor);
	--ui5-avatar-accent8-border-color: var(--sapField_BorderColor);
	--ui5-avatar-accent9-border-color: var(--sapField_BorderColor);
	--ui5-avatar-accent10-border-color: var(--sapField_BorderColor);
	--ui5-avatar-placeholder-border-color: var(--sapField_BorderColor);

	--_ui5_avatar_outline: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	--_ui5_avatar_focus_offset: 1px;
	--_ui5_avatar_focus_width: 1px;
	--_ui5_avatar_focus_color: var(--sapContent_FocusColor);

	--_ui5_avatar_fontsize_XS: 0.75rem;
	--_ui5_avatar_fontsize_S: 1.125rem;
	--_ui5_avatar_fontsize_M: 1.625rem;
	--_ui5_avatar_fontsize_L: 2rem;
	--_ui5_avatar_fontsize_XL: 2.75rem;

	--_ui5_avatar_icon_XS: 1rem;
	--_ui5_avatar_icon_S: 1.5rem;
	--_ui5_avatar_icon_M: 2rem;
	--_ui5_avatar_icon_L: 2.5rem;
	--_ui5_avatar_icon_XL: 3rem;
}

:root [_ui5host] {
	--_ui5_avatar_fontsize_XS: 1rem;
	--_ui5_avatar_fontsize_S: 1.125rem;
	--_ui5_avatar_fontsize_M: 1.5rem;
	--_ui5_avatar_fontsize_L: 2.25rem;
	--_ui5_avatar_fontsize_XL: 3rem;
}

:root [_ui5host] {
	--_ui5_avatar_group_button_focus_border: none;
}

:root [_ui5host] {
	--_ui5-badge-cursor: default;

	--ui5-badge-color-scheme-1-background: var(--sapLegendBackgroundColor1);
	--ui5-badge-color-scheme-1-border: var(--sapAccentColor1);
	--ui5-badge-color-scheme-1-color: var(--sapTextColor);

	--ui5-badge-color-scheme-2-background: var(--sapLegendBackgroundColor2);
	--ui5-badge-color-scheme-2-border: var(--sapAccentColor2);
	--ui5-badge-color-scheme-2-color: var(--sapTextColor);

	--ui5-badge-color-scheme-3-background: var(--sapLegendBackgroundColor3);
	--ui5-badge-color-scheme-3-border: var(--sapAccentColor3);
	--ui5-badge-color-scheme-3-color: var(--sapTextColor);

	--ui5-badge-color-scheme-4-background: var(--sapLegendBackgroundColor5);
	--ui5-badge-color-scheme-4-border: var(--sapAccentColor4);
	--ui5-badge-color-scheme-4-color: var(--sapTextColor);

	--ui5-badge-color-scheme-5-background: var(--sapLegendBackgroundColor20);
	--ui5-badge-color-scheme-5-border: var(--sapAccentColor5);
	--ui5-badge-color-scheme-5-color: var(--sapTextColor);

	--ui5-badge-color-scheme-6-background: var(--sapLegendBackgroundColor6);
	--ui5-badge-color-scheme-6-border: var(--sapAccentColor6);
	--ui5-badge-color-scheme-6-color: var(--sapTextColor);

	--ui5-badge-color-scheme-7-background: var(--sapLegendBackgroundColor7);
	--ui5-badge-color-scheme-7-border: var(--sapAccentColor7);
	--ui5-badge-color-scheme-7-color: var(--sapTextColor);

	--ui5-badge-color-scheme-8-background: var(--sapLegendBackgroundColor18);
	--ui5-badge-color-scheme-8-border: var(--sapLegendColor18);
	--ui5-badge-color-scheme-8-color: var(--sapTextColor);

	--ui5-badge-color-scheme-9-background: var(--sapLegendBackgroundColor10);
	--ui5-badge-color-scheme-9-border: var(--sapAccentColor10);
	--ui5-badge-color-scheme-9-color: var(--sapTextColor);

	--ui5-badge-color-scheme-10-background: var(--sapLegendBackgroundColor9);
	--ui5-badge-color-scheme-10-border: var(--sapAccentColor9);
	--ui5-badge-color-scheme-10-color: var(--sapTextColor);
}

:root [_ui5host] {
	--browser_scrollbar_border_radius: var(--sapElement_BorderCornerRadius);
	--browser_scrollbar_border: none;
}

:root [_ui5host] {
	--_ui5_busy_indicator_color: var(--sapContent_IconColor);
	--_ui5_busy_indicator_focus_outline:  var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	--_ui5_busy_indicator_focus_border_radius: 0px;
}

:root [_ui5host] {
	--_ui5_button_focused_border: 0.0625rem dotted var(--sapContent_FocusColor);
	--_ui5_button_focused_border_radius: 0.25rem;
	--_ui5_button_focused_inner_border_radius: 0;
	--_ui5_button_base_min_width: 2.5rem;
	--_ui5_button_base_min_compact_width: 2rem;
	--_ui5_button_base_height: 2.5rem;
	--_ui5_button_compact_height: 1.625rem;
	--_ui5_button_border_radius: var(--sapButton_BorderCornerRadius);
	--_ui5_button_base_padding: 0.6875rem;
	--_ui5_button_compact_padding: 0.4375rem;
	--_ui5_button_base_icon_only_padding: 0.5625rem;
	--_ui5_button_base_icon_margin: 0.563rem;
	--_ui5_button_icon_font_size: 1.375rem;
	--_ui5_button_outline: 1px dotted var(--sapContent_FocusColor);
	--_ui5_button_emphasized_outline: 1px dotted var(--sapContent_FocusColor);
	--_ui5_button_outline_offset: calc(-1 * .1875rem);
	--_ui5_button_emphasized_font_weight: normal;
	--_ui5_button_text_shadow: var(--sapContent_TextShadow);
	--_ui5_button_focus_offset: 1px;
	--_ui5_button_focus_width: 1px;
	--_ui5_button_focus_color: var(--sapContent_FocusColor);
	--_ui5_button_focus_outline_focus_color: var(--sapContent_ContrastFocusColor);
	--_ui5_button_pressed_focused_border_color: var(--sapContent_ContrastFocusColor);

	--_ui5_button_positive_border_focus_hover_color: var(--sapContent_FocusColor);
	--_ui5_button_positive_focus_border_color: var(--sapButton_Accept_BorderColor);
	--_ui5_button_negative_focus_border_color: var(--sapButton_Reject_BorderColor);
	--_ui5_button_attention_focus_border_color: var(--sapButton_Negative_BorderColor);
	--_ui5_button_emphasized_focused_border_color: var(--sapButton_Emphasized_BorderColor);
	--_ui5_button_fontFamily:  "72override", var(--sapFontFamily);
	--_ui5_button_emphasized_focused_border_before: none;
	--_ui5_button_emphasized_focused_border_radius: 0;
	--_ui5_button_transparent_hover: transparent;
}

:root [_ui5host] {
	--_ui5_button_base_min_width: 2.25rem;
	--_ui5_button_base_height: 2.25rem;
	--_ui5_button_base_padding: 0.5625rem;
	--_ui5_button_base_icon_only_padding: 0.5625rem;
	--_ui5_button_base_icon_margin: 0.375rem;
	--_ui5_button_icon_font_size: 1rem;
	--_ui5_button_emphasized_font_weight: bold;
	--_ui5_button_text_shadow: none;
	--_ui5_button_emphasized_focused_border: 0.0625rem dotted var(--sapContent_ContrastFocusColor);
	--_ui5_button_emphasized_focused_border_before: 0.0625rem solid var(--sapContent_FocusColor);
	--_ui5_button_emphasized_outline: 1px solid var(--sapContent_FocusColor);
}

:root [_ui5host] {
	--_ui5_card_box_shadow: var(--sapContent_Shadow0);
	--_ui5_card_hover_box_shadow: var(--_ui5_card_box_shadow);
	--_ui5_card_border: 1px solid var(--sapTile_BorderColor);
	--_ui5_card_border-radius: var(--sapElement_BorderCornerRadius);
	--_ui5_card_header_padding: 1rem;
	--_ui5_card_header_hover_bg: var(--sapList_Hover_Background);
	--_ui5_card_header_active_bg: var(--_ui5_card_header_hover_bg);
	--_ui5_card_header_border: 1px solid var(--_ui5_card_header_border_color);
	--_ui5_card_header_border_color: var(--sapTile_SeparatorColor);
	--_ui5_card_header_focus_border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	--_ui5_card_header_focus_radius: 0px;
	--_ui5_card_header_focus_bottom_radius: 0px;
	--_ui5_card_header_focus_offset: 1px;
	--_ui5_card_header_title_font_family: "72override", var(--sapFontFamily);
	--_ui5_card_header_title_font_size: var(--sapFontHeader5Size);
	--_ui5_card_header_title_font_weight: normal;
	--_ui5_card_header_subtitle_margin_top: .25rem;
}

:root [_ui5host] {
    --ui5_carousel_background_color_solid: var(--sapGroup_ContentBackground);
    --ui5_carousel_background_color_translucent: var(--sapBackgroundColor);
    --ui5_carousel_button_size: 2.5rem;
    --ui5_carousel_inactive_dot_size: 0.25rem;
    --ui5_carousel_inactive_dot_margin: 0 0.375rem;
    --ui5_carousel_inactive_dot_border: 1px solid var(--sapContent_ForegroundBorderColor);
    --ui5_carousel_inactive_dot_background: var(--sapContent_ForegroundBorderColor);
    --ui5_carousel_active_dot_border: 1px solid var(--sapContent_Selected_ForegroundColor);
    --ui5_carousel_active_dot_background: var(--sapContent_Selected_ForegroundColor);
}

:root [_ui5host] {
--_ui5_checkbox_wrapper_padding: .8125rem;
--_ui5_checkbox_width_height: 3rem;
--_ui5_checkbox_box_shadow: none;
--_ui5_checkbox_transition: unset;
--_ui5_checkbox_focus_border: none;
--_ui5_checkbox_disabled_opacity: .5;
--_ui5_checkbox_border_radius: 0;
--_ui5_checkbox_hover_background: var(--sapField_Hover_Background);
--_ui5_checkbox_active_background: var(--sapField_Hover_Background);
--_ui5_checkbox_checkmark_warning_color: var(--sapField_TextColor);
--_ui5_checkbox_inner_warning_color: var(--sapField_WarningColor);
--_ui5_checkbox_inner_information_color: currentColor;
--_ui5_checkbox_checkmark_color: var(--sapSelectedColor);
--_ui5_checkbox_focus_position: .6875rem;
--_ui5_checkbox_focus_outline: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
--_ui5_checkbox_focus_border_radius: 0;
--_ui5_checkbox_outer_hover_background: transparent;
--_ui5_checkbox_inner_width_height: 1.375rem;
--_ui5_checkbox_inner_border: solid .125rem var(--sapField_BorderColor);
--_ui5_checkbox_inner_hover_border_color: var(--sapField_HoverBorderColor);
--_ui5_checkbox_inner_hover_checked_border_color: var(--sapField_HoverBorderColor);
--_ui5_checkbox_inner_selected_border_color: var(--sapField_BorderColor);
--_ui5_checkbox_inner_disabled_border_color: var(--sapField_BorderColor);
--_ui5_checkbox_inner_active_border_color: var(--sapField_BorderColor);
--_ui5_checkbox_inner_border_radius: 0;
--_ui5_checkbox_inner_error_border: 0.125rem solid var(--sapField_InvalidColor);
--_ui5_checkbox_inner_warning_border: 0.125rem solid var(--sapField_WarningColor);
--_ui5_checkbox_inner_information_border: 0.125rem solid var(--sapField_InformationColor);
--_ui5_checkbox_inner_information_box_shadow: none;
--_ui5_checkbox_inner_warning_box_shadow: none;
--_ui5_checkbox_inner_error_box_shadow: none;
--_ui5_checkbox_inner_success_box_shadow: none;
--_ui5_checkbox_inner_default_box_shadow: none;
--_ui5_checkbox_inner_warning_background_hover: var(--sapField_WarningBackground);
--_ui5_checkbox_inner_error_background_hover: var(--sapField_InvalidBackground);
--_ui5_checkbox_inner_success_background_hover: var(--sapField_SuccessBackground);
--_ui5_checkbox_inner_information_background_hover: var(--sapField_InformationBackground);
--_ui5_checkbox_inner_success_border: var(--sapField_BorderWidth) solid var(--sapField_SuccessColor);
--_ui5_checkbox_inner_readonly_border: 0.125rem solid var(--sapField_ReadOnly_BorderColor);
--_ui5_checkbox_inner_background: var(--sapField_Background);
--_ui5_checkbox_wrapped_focus_padding: .375rem;
--_ui5_checkbox_wrapped_content_margin_top: .125rem;
--_ui5_checkbox_wrapped_focus_left_top_bottom_position: .5625rem;
--_ui5_checkbox_compact_wrapper_padding: .5rem;
--_ui5_checkbox_compact_width_height: 2rem;
--_ui5_checkbox_compact_inner_size: 1rem;
--_ui5_checkbox_compact_focus_position: .375rem;
--_ui5_checkbox_compact_wrapped_label_margin_top: -1px;
--_ui5_checkbox_label_color: var(--sapContent_LabelColor);
--_ui5_checkbox_label_offset: var(--_ui5_checkbox_wrapper_padding);
--_ui5_checkbox_disabled_label_color: var(--sapContent_LabelColor);
--_ui5_checkbox_default_focus_border: none;
--_ui5_checkbox_focus_outline_display: block;
--_ui5_checkbox_right_focus_distance: 0;
}

:root [_ui5host] {
	--_ui5_checkbox_wrapper_padding: .6875rem;
	--_ui5_checkbox_width_height: 2.75rem;
	--_ui5_checkbox_inner_border: .0625rem solid var(--sapField_BorderColor);
	--_ui5_checkbox_focus_position: 0.5625rem;
	--_ui5_checkbox_inner_border_radius: .125rem;
	--_ui5_checkbox_wrapped_content_margin_top: 0;
	--_ui5_checkbox_wrapped_focus_padding: .5rem;
	--_ui5_checkbox_inner_readonly_border: 1px solid var(--sapField_ReadOnly_BorderColor);
	--_ui5_checkbox_compact_wrapped_label_margin_top: -0.125rem;
}

:root [_ui5host] {
	--_ui5_color-palette-item-container-sides-padding: 0.3125rem;
	--_ui5_color-palette-item-container-rows-padding: 0.6875rem;
	--_ui5_color-palette-item-focus-height: 1.5rem;
	--_ui5_color-palette-item-container-padding: var(--_ui5_color-palette-item-container-sides-padding) var(--_ui5_color-palette-item-container-rows-padding);
	--_ui5_color-palette-item-hover-margin: 0;
	--_ui5_color-palette-row-height: 9.5rem;
	--_ui5_color-palette-button-height: 3rem;
	--_ui5_color-palette-item-before-focus-color: 0.0625rem solid white;
	--_ui5_color-palette-item-before-focus-offset: 0.0625rem;
	--_ui5_color-palette-item-before-focus-hover-offset: 0.0625rem;
	--_ui5_color-palette-item-after-focus-color: 0.0625rem dotted black;
	--_ui5_color-palette-item-after-focus-offset: 0.0625rem;
	--_ui5_color-palette-item-after-focus-hover-offset: 0.0625rem;
	--_ui5_color-palette-item-before-focus-border-radius: 0;
	--_ui5_color-palette-item-before-focus-border-radius: 0;
	--_ui5_color-palette-item-outer-border-radius: 0.25rem;
	--_ui5_color-palette-item-inner-border-radius: 0.1875rem;
	--_ui5_color-palette-item-hover-outer-border-radius: 0.25rem;
	--_ui5_color-palette-item-hover-inner-border-radius: 0.1875rem;
}

:root [_ui5host] {
    --_ui5_color_picker_slider_handle_box_shadow: 0.0625rem solid var(--sapField_BorderColor);
    --_ui5_color_picker_slider_handle_border: 0.125rem solid var(--sapField_BorderColor);
    --_ui5_color_picker_slider_handle_outline_hover: 0.125rem solid var(--sapButton_Hover_BorderColor);
    --_ui5_color_picker_slider_handle_outline_focus: 0.0625rem dotted var(--sapContent_FocusColor);
    --_ui5_color_picker_slider_handle_margin_top: 0.125rem;
    --_ui5_color_picker_slider_handle_focus_margin_top: 0.125rem;
    --_ui5_color_picker_circle_outer_border: 0.0625rem solid var(--sapContent_ContrastShadowColor);
    --_ui5_color_picker_circle_inner_border: 0.0625rem solid var(--sapField_BorderColor);
    --_ui5_color_picker_circle_inner_circle_size: 0.5625rem;
    --_ui5_color_picker_slider_container_margin_top: -10px;
    --_ui5_color_picker_slider_handle_inline_focus: none;
}

:root [_ui5host] {
	--_ui5_datepicker_icon_border: none;
	--_ui5-datepicker_border_radius: 0;
	--_ui5-datepicker-hover-background: var(--sapField_Hover_Background);
	--_ui5-datepicker_icon_border_radius: 0;
    
}

:root [_ui5host] {
	--_ui5_daypicker_item_box_shadow: inset 0 0 0 0.0625rem var(--sapContent_Selected_ForegroundColor);
	--_ui5_daypicker_item_margin: 2px;
	--_ui5_daypicker_item_border: none;
	--_ui5_daypicker_item_selected_border_color: var(--sapList_Background);
	--_ui5_daypicker_daynames_container_height: 2rem;
	--_ui5_daypicker_weeknumbers_container_padding_top: 2rem;
	--_ui5_daypicker_item_othermonth_background_color: var(--sapList_Background);
	--_ui5_daypicker_item_othermonth_color: var(--sapContent_LabelColor);
	--_ui5_daypicker_item_othermonth_hover_color: var(--sapContent_LabelColor);
	--_ui5_daypicker_item_border_radius: 0;
	--_ui5_daypicker_item_now_inner_border_radius: 0;
	--_ui5_daypicker_dayname_color: var(--sapTextColor);
	--_ui5_daypicker_weekname_color: var(--sapTextColor);
	--_ui5_daypicker_item_outline_width: 1px;
	--_ui5_daypicker_item_outline_offset: 1px;
	--_ui5_daypicker_item_now_selected_outline_offset: 2px;
	--_ui5_daypicker_item_now_focus_after_width: calc(100% - .25rem);
	--_ui5_daypicker_item_now_focus_after_height: calc(100% - .25rem);
	--_ui5_daypicker_item_now_selected_focus_after_width: calc(100% - .375rem);
	--_ui5_daypicker_item_now_selected_focus_after_height: calc(100% - .375rem);
	--_ui5_daypicker_item_selected_background: transparent;
	--_ui5_daypicker_item_selected_box_shadow: var(--_ui5_daypicker_item_box_shadow), var(--_ui5_daypicker_item_box_shadow);
	--_ui5_daypicker_item_selected_daytext_hover_background: transparent;
	--_ui5_daypicker_item_outline_focus_after: none;
	--_ui5_daypicker_item_border_radius_focus_after: none;
	--_ui5_daypicker_item_border_focus_after: var(--_ui5_daypicker_item_outline_width) dotted var(--sapContent_FocusColor);
	--_ui5_daypicker_item_width_focus_after: calc(100% - 0.25rem);
	--_ui5_daypicker_item_height_focus_after: calc(100% - 0.25rem);
	--_ui5_daypicker_item_now_border: 0.125rem solid var(--sapLegend_CurrentDateTime);
	--_ui5_daypicker_item_now_outline: none;
	--_ui5_daypicker_item_now_outline_offset: none;
	--_ui5_daypicker_item_now_outline_offset_focus_after: var(--_ui5_daypicker_item_now_outline_offset);
	--_ui5_daypicker_item_selected_between_border: 5%;
	--_ui5_daypicker_item_selected_between_background: transparent;
	--_ui5_daypicker_item_selected_between_text_background: var(--sapList_SelectionBackgroundColor);
	--_ui5_daypicker_item_selected_between_text_font: inherit;
	--_ui5_daypicker_item_selected_between_hover_background: inherit;
	--_ui5_daypicker_item_now_box_shadow: inset 0 0 0 0.0625rem var(--_ui5_daypicker_item_selected_border_color);
	--_ui5_daypicker_item_selected_text_outline: none;
	--_ui5_daypicker_item_now_not_selected_inset: 0;
	--_ui5_daypicker_item_now_inset: 0.1875rem;
	--_ui5_daypicker_item_now_border_color: var(--sapLegend_CurrentDateTime);
	--_ui5_daypicker_item_weeekend_filter: brightness(100%);
	--_ui5_daypicker_item_selected_hover: var(--sapContent_Selected_Hover_Background);
	--_ui5_daypicker_item_border_radius_item: none;
	--_ui5_daypicker_item_now_selected_outline_offset: -0.3125rem;
	--_ui5_daypicker_two_calendar_item_now_inset: 0.1875rem;
	--_ui5_daypicker_item_selected__secondary_type_text_outline: none;
	--_ui5_daypicker_two_calendar_item_now_day_text_content: none;
	--_ui5_daypicker_two_calendar_item_now_selected_border_width: 0.0625rem;
	--_ui5_daypicker_two_calendar_item_border_radius: 0.3125rem;
	--_ui5_daypicker_two_calendar_item_border_focus_border_radius: 0rem;
	--_ui5_daypicker_two_calendar_item_no_selected_inset: 0.125rem;
	--_ui5_daypicker_two_calendar_item_selected_now_border_radius_focus: 0.0625rem;
	--_ui5_daypicker_two_calendar_item_no_selected_focus_inset: 0.125rem;
	--_ui5_daypicker_two_calendar_item_no_select_focus_border_radius: 0.0625rem;
	--_ui5_dp_two_calendar_item_secondary_text_border_radios: 0.25rem;
	--_ui5_daypicker_two_calendar_item_now_selected_border_inset: 0.125rem;
}

:root [_ui5host] {
	--_ui5_daypicker_item_selected_background: var(--sapContent_Selected_Background);
	--_ui5_daypicker_dayname_color: var(--sapContent_LabelColor);
	--_ui5_daypicker_weekname_color: var(--sapContent_LabelColor);
	--_ui5_daypicker_item_border_radius_focus_after: 0.0625rem;
	--_ui5_daypicker_item_border_radius_item: 0.0625rem;
	--_ui5_daypicker_item_selected_border: none;
	--_ui5_daypicker_item_not_selected_focus_border: 0.0625rem dotted var(--sapContent_FocusColor);
	--_ui5_daypicker_item_selected_focus_color: var(--sapContent_ContrastFocusColor);
	--_ui5_daypicker_item_selected_focus_width: 0.0625rem;
	--_ui5_daypicker_item_no_selected_inset: 0.125rem;
	--_ui5_daypicker_item_now_border_focus_after: 0.0625rem dotted var(--sapList_SelectionBorderColor);
	--_ui5_daypicker_item_now_border_radius_focus_after: 0.0625rem;
	--_ui5_day_picker_item_selected_now_border: 0.1875rem solid var(--sapList_Background);
	--_ui5_day_picker_item_selected_now_border_focus: 0.0625rem dotted var(--sapContent_ContrastFocusColor);
	--_ui5_day_picker_item_selected_now_border_radius_focus: 0.0625rem;
	--_ui5-dp-item_withsecondtype_border: 0.1875rem;
	--_ui5_daypicker_item_border_radius: 0.25rem;
	--_ui5_daypicker_item_selected_text_border: none;
	--_ui5_daypicker_item_selected_between_text_border_radios: 0.25rem;
	--_ui5_daypicker_item_select_between_border: 1px solid var(--sapContent_Selected_ForegroundColor);
	--_ui5_daypicker_item_now_selected_outline_offset: -0.3125rem;
}

:root [_ui5host] {
	--_ui5_file_uploader_hover_border: 1px solid var(--sapField_Hover_BorderColor);
	--_ui5_file_uploader_value_state_error_hover_background_color: var(--sapField_Hover_Background);
}

:root [_ui5host] {
	--_ui5_dialog_resize_handle_color: var(--sapButton_Lite_TextColor);
	--_ui5_dialog_resize_handle_right: -0.25rem;
	--_ui5_dialog_resize_handle_bottom: -0.0625rem;
	--_ui5_dialog_header_focus_bottom_offset: 3px;
	--_ui5_dialog_header_focus_top_offset: 2px;
	--_ui5_dialog_header_focus_left_offset: 2px;
	--_ui5_dialog_header_focus_right_offset: 2px;
	--_ui5_dialog_header_border_radius: 0px;
	--_ui5_dialog_header_error_state_box_shadow: inset 0 -0.0625rem var(--sapErrorBorderColor), var(--sapContent_HeaderShadow);
	--_ui5_dialog_header_information_state_box_shadow: inset 0 -0.0625rem var(--sapInformationBorderColor), var(--sapContent_HeaderShadow);
	--_ui5_dialog_header_success_state_box_shadow: inset 0 -0.0625rem var(--sapSuccessBorderColor), var(--sapContent_HeaderShadow);
	--_ui5_dialog_header_warning_state_box_shadow: inset 0 -0.0625rem var(--sapWarningBorderColor), var(--sapContent_HeaderShadow);
	--_ui5_dialog_header_error_state_icon_color: var(--sapNegativeElementColor);
	--_ui5_dialog_header_information_state_icon_color: var(--sapInformativeElementColor);
	--_ui5_dialog_header_success_state_icon_color: var(--sapPositiveElementColor);
	--_ui5_dialog_header_warning_state_icon_color: var(--sapCriticalElementColor);
}

:root [_ui5host] {
	--ui5-group-header-listitem-background-color: var(--sapList_GroupHeaderBackground);
}

:root [_ui5host] {
	--_ui5_input_width: 13.125rem;
	--_ui5_input_min_width: 2.75rem;
	--_ui5_input_height: var(--sapElement_Height);
	--_ui5_input_compact_height: 1.625rem;
	--_ui5_input_margin_top_bottom: 0.25rem;
	--_ui5_input_hover_border: var(--sapField_BorderWidth) var(--sapField_BorderStyle) var(--sapField_Hover_BorderColor);
	--_ui5_input_value_state_error_hover_background: var(--sapField_Hover_Background);
	--_ui5_input_background_color: var(--sapField_Background);
	--_ui5_input_border_radius: var(--sapField_BorderCornerRadius);
	--_ui5_input_focus_border_radius: 0;
	--_ui5-input-border: 2px solid transparent; /* The value of this variable defaults to sap_horizon theme, because if it defaults to fiori, then a flickering of the border is present*/
	--_ui5_input_placeholder_style: italic;
	--_ui5_input_placeholder_color: var(--sapField_PlaceholderTextColor);
	--_ui5_input_bottom_border_height: 0;
	--_ui5_input_bottom_border_color: transparent;
	--_ui5_input_focused_border_color: var(--sapField_Hover_BorderColor);
	--_ui5_input_state_border_width: 0.125rem;
	--_ui5_input_information_border_width: 0.125rem;
	--_ui5_input_error_font_weight: normal;
	--_ui5_input_warning_font_weight: normal;
	--_ui5_input_focus_border_width: 1px;
	--_ui5_input_error_warning_border_style: solid;
	--_ui5_input_error_warning_font_style: inherit;
	--_ui5_input_error_warning_text_indent: 0;
	--_ui5_input_disabled_color: var(--sapContent_DisabledTextColor);
	--_ui5_input_disabled_font_weight: normal;
	--_ui5_input_disabled_border_color: var(--sapField_BorderColor);
	--_ui5-input_disabled_background: var(--sapField_Background);
	--_ui5_input_readonly_border_color: var(--sapField_ReadOnly_BorderColor);
	--_ui5_input_readonly_background: var(--sapField_ReadOnly_Background);
	--_ui5_input_custom_icon_padding: .5625rem .625rem;
	--_ui5_input_error_warning_custom_icon_padding: .5rem .625rem;
	--_ui5_input_information_custom_icon_padding: .5rem .625rem;
	--_ui5_input_error_warning_icon_padding: .5rem .5rem .5rem .5625rem;
	--_ui5_input_information_icon_padding: .5rem .5rem .5rem .5625rem;
	--_ui5_input_disabled_opacity: var(--sapContent_DisabledOpacity);
	--_ui5_input_icon_min_width: 2.25rem;
	--_ui5_input_compact_min_width: 2rem;
	--_ui5_input_transition: none;
	--_ui5-input-value-state-icon-display: none;
	--_ui5_input_focused_value_state_error_background: var(--sapField_InvalidBackground);
	--_ui5_input_focused_value_state_warning_background: var(--sapField_WarningBackground);
	--_ui5_input_focused_value_state_success_background: var(--sapField_SuccessBackground);
	--_ui5_input_focused_value_state_information_background: var(--sapField_InformationBackground);
	--_ui5_input_value_state_error_border_color: var(--sapField_InvalidColor);
	--_ui5_input_focused_value_state_error_border_color: var(--sapField_InvalidColor);
	--_ui5_input_focused_value_state_error_focus_outline_color: var(--sapContent_FocusColor);
	--_ui5_input_focused_value_state_warning_focus_outline_color: var(--sapContent_FocusColor);
	--_ui5_input_focused_value_state_success_focus_outline_color: var(--sapContent_FocusColor);
	--_ui5_input_value_state_warning_border_color: var(--sapField_WarningColor);
	--_ui5_input_focused_value_state_warning_border_color: var(--sapField_WarningColor);
	--_ui5_input_value_state_success_border_color: var(--sapField_SuccessColor);
	--_ui5_input_focused_value_state_success_border_color: var(--sapField_SuccessColor);
	--_ui5_input_value_state_success_border_width: 1px;
	--_ui5_input_value_state_information_border_color: var(--sapField_InformationColor);
	--_ui5_input_focused_value_state_information_border_color: var(--sapField_InformationColor);
	--_ui5-input-value-state-information-border-width: 1px;
	--_ui5-input-background-image: none;
	--_ui5_input_focus_offset: 1px;
	--ui5_input_focus_pseudo_element_content: '';
	--_ui5_input_value_state_error_warning_placeholder_font_weight: normal;
	--_ui5_input_focus_outline_color: var(--sapContent_FocusColor);
	--_ui5-input_error_placeholder_color: var(--sapField_PlaceholderTextColor);
	--_ui5_input_icon_width: 2.25rem;
	--_ui5_input_icon_wrapper_height: 100%;
	--_ui5_input_icon_wrapper_state_height: 100%;
	--_ui5_input_icon_wrapper_success_state_height: 100%;
	--_ui5-input-icons-count: 0;
	--_ui5_input_margin_top_bottom: 0.1875rem;
	--_ui5_input_tokenizer_min_width: 3.25rem;
}

[data-ui5-compact-size][_ui5host], [data-ui5-compact-size] [_ui5host],
.ui5-content-density-compact[_ui5host], .ui5-content-density-compact [_ui5host],
.sapUiSizeCompact[_ui5host], .sapUiSizeCompact [_ui5host] {
	--_ui5_input_min_width: 2rem;
	--_ui5_input_icon_width: 2rem;
}

:root [_ui5host] {
	--_ui5-input-border: 1px solid var(--sapField_BorderColor);
}

:root [_ui5host] {
	--_ui5_input_icon_padding: .5625rem;
	--_ui5_input_icon_color: var(--sapContent_IconColor);
	--_ui5_input_icon_pressed_color: var(--sapButton_Active_TextColor);
	--_ui5_input_icon_pressed_bg: var(--sapButton_Selected_Background);
	--_ui5_input_icon_hover_bg: var(--sapButton_Lite_Hover_Background);
	--_ui5_input_icon_border_radius: 0;
	--_ui5_input_icon_box_shadow: none;
	--_ui5_input_icon_border: 1px solid transparent;
	--_ui5_input_error_icon_box_shadow: var(--_ui5_input_icon_box_shadow);
	--_ui5_input_warning_icon_box_shadow: var(--_ui5_input_icon_box_shadow);
	--_ui5_input_information_icon_box_shadow: var(--_ui5_input_icon_box_shadow);
	--_ui5_input_success_icon_box_shadow: var(--_ui5_input_icon_box_shadow);
	--_ui5_input_icon_error_pressed_color: var(--sapButton_Active_TextColor);
	--_ui5_input_icon_warning_pressed_color: var(--sapButton_Active_TextColor);
	--_ui5_input_icon_information_pressed_color: var(--sapButton_Active_TextColor);
	--_ui5_input_icon_success_pressed_color: var(--sapButton_Active_TextColor);

}

:root [_ui5host] {
	--_ui5_link_text_decoration: none;
	--_ui5_link_hover_text_decoration: underline;
	--_ui5_link_focused_hover_text_decoration: underline;
	--_ui5_link_focused_hover_text_color: var(--sapLinkColor);
	--_ui5_link_active_text_decoration: underline;
	--_ui5_link_border: 0.0625rem dotted transparent;
	--_ui5_link_border_focus: 0.0625rem dotted var(--sapContent_FocusColor);
	--_ui5_link_focus_border-radius: 0;
	--_ui5_link_focus_background_color: transparent;
	--_ui5_link_focus_color: var(--sapLinkColor);
	--_ui5_link_focus_text_decoration: underline;
	--_ui5_link_subtle_text_decoration: none;
	--_ui5_link_subtle_text_decoration_hover: underline;

}

:root [_ui5host] {
	--_ui5_link_text_decoration: none;
	--_ui5_link_hover_text_decoration: underline;
}

:root [_ui5host] {
	--ui5_list_footer_text_color: var(--sapPageFooter_TextColor);
}

:root [_ui5host] {
	--ui5_list_footer_text_color: var(--sapTextColor);
}

:root [_ui5host] {
	--ui5-listitem-background-color: var(--sapList_Background);
	--ui5-listitem-border-bottom: 1px solid var(--sapList_BorderColor);
	--ui5-listitem-selected-border-bottom: 1px solid var(--sapList_SelectionBorderColor);
	--ui5-listitem-focused-selected-border-bottom: 1px solid var(--sapList_SelectionBorderColor);
	--ui5-listitem-active-border-color: var(--sapContent_ContrastFocusColor);
	--ui5-listitem-padding: 0 1rem;
	--ui5-listitem-focus-border-radius: 0;
	--ui5-listitem-focus-offset: 0.125rem;
	--_ui5_listitembase_focus_width: 1px;
	--_ui5-listitembase_disabled_opacity: 0.5;
	--_ui5_product_switch_item_border: none;
}

:root [_ui5host] {
	--_ui5_menu_popover_border_radius: var(--sapElement_BorderCornerRadius);
	--_ui5_menu_item_padding: 0 1rem 0 0.75rem;
	--_ui5_menu_item_submenu_icon_right: 1rem;
	--_ui5_menu_item_additional_text_start_margin: 1rem;
}

:root [_ui5host] {
	--_ui5_monthpicker_item_border_radius: 0;
	--_ui5_monthpicker_item_border: none;
	--_ui5_monthpicker_item_margin: 1px;
	--_ui5_monthpicker_item_focus_after_width: calc(100% - 0.375rem);
	--_ui5_monthpicker_item_focus_after_height: calc(100% - 0.375rem);
	--_ui5_monthpicker_item_focus_after_border: 1px dotted var(--sapContent_FocusColor);
	--_ui5_monthpicker_item_focus_after_offset: 2px;
	--_ui5_monthpicker_item_focus_after_border_radius: 0;
	--_ui5_monthpicker_item_selected_text_color: var(--sapContent_ContrastTextColor);
	--_ui5_monthpicker_item_selected_background_color: var(--sapSelectedColor);
	--_ui5_monthpicker_item_selected_hover_color: var(--sapContent_Selected_Background);
	--_ui5_monthpicker_item_selected_box_shadow: none;
	--_ui5_monthpicker_item_focus_after_outline: none;
	--_ui5_monthpicker_item_selected_font_wieght: inherit;
}

:root [_ui5host] {
	--_ui5_monthpicker_item_border_radius: 0.25rem;
}

:root [_ui5host]{
	--_ui5_message_strip_icon_width: 2.5rem;
	--_ui5_message_strip_button_border_width: 0;
	--_ui5_message_strip_button_border_style: none;
	--_ui5_message_strip_button_border_color: transparent;
	--_ui5_message_strip_button_border_radius: 0;
	--_ui5_message_strip_padding: 0.4375rem 2.5rem 0.4375rem 2.5rem;
	--_ui5_message_strip_padding_block_no_icon: 0.4375rem 0.4375rem;
	--_ui5_message_strip_padding_inline_no_icon: 1rem 2.5rem;
	--_ui5_message_strip_button_height: 1.625rem;
	--_ui5_message_strip_border_width: 1px;
	--_ui5_message_strip_close_button_border: none;
	--_ui5_message_strip_icon_top: 0.4375rem;
	--_ui5_message_strip_focus_width: 1px;
	--_ui5_message_strip_focus_offset: -2px;
	--_ui5_message_strip_close_button_top: 0.125rem;
	--_ui5_message_strip_close_button_right: 0.125rem;
}

:root [_ui5host] {
	--_ui5_panel_focus_border:   var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	--_ui5_panel_button_root_width: 3rem;
	--_ui5_panel_border_radius: 0px;
	--_ui5_panel_border_radius_expanded: 0;
	--_ui5_panel_default_header_border: none;
	--_ui5_panel_border_bottom: 0.0625rem solid var(--sapGroup_TitleBorderColor);
	--_ui5_panel_outline_offset: -3px;
	--_ui5_panel_icon_color: var(--sapContent_IconColor);
	--_ui5_panel_header_padding_right: 0.5rem;
	--_ui5_panel_header_button_wrapper_padding: .25rem;
	--_ui5_panel_focus_offset: 1px;
	--_ui5_panel_content_padding: 0.625rem 1rem 1.375rem 1rem;
	--_ui5_panel_header_background_color: var(--sapBackgroundColor);
}

[data-ui5-compact-size][_ui5host], [data-ui5-compact-size] [_ui5host],
.ui5-content-density-compact[_ui5host], .ui5-content-density-compact [_ui5host],
.sapUiSizeCompact[_ui5host], .sapUiSizeCompact [_ui5host] {
	--_ui5_panel_header_button_wrapper_padding: .5625rem .375rem;
}

:root [_ui5host] {
	--_ui5_panel_button_root_width: 2.75rem;
}

:root [_ui5host] {
	--_ui5_popover_background: var(--sapGroup_ContentBackground);
	--_ui5_popover_box_shadow: var(--sapContent_Shadow2);
	--_ui5_popover_no_arrow_box_shadow: var(--sapContent_Shadow1);
}

:root [_ui5host] {
	--_ui5_popup_content_padding_s: 1rem;
	--_ui5_popup_content_padding_m_l: 2rem;
	--_ui5_popup_content_padding_xl: 3rem;
	--_ui5_popup_header_footer_padding_s: 1rem;
	--_ui5_popup_header_footer_padding_m_l: 2rem;
	--_ui5_popup_header_footer_padding_xl: 3rem;
	--_ui5_popup_viewport_margin: 10px;
	--_ui5_popup_header_font_weight: 400;
	--_ui5_popup_header_font_family: var(--sapFontFamily);
	--_ui5_popup_header_prop_header_text_alignment: flex-start;
	--_ui5_popup_border_radius: var(--sapElement_BorderCornerRadius);
	--_ui5_popup_header_background: var(--sapPageHeader_Background);
	--_ui5_popup_header_shadow: var(--sapContent_HeaderShadow);
	--_ui5_popup_header_border: none;
}

:root [_ui5host] {
    --_ui5_progress_indicator_background_none: var(--sapField_Background);
    --_ui5_progress_indicator_background_error: var(--sapField_Background);
    --_ui5_progress_indicator_background_warning: var(--sapField_Background);
    --_ui5_progress_indicator_background_success: var(--sapField_Background);
    --_ui5_progress_indicator_background_information: var(--sapField_Background);
    --_ui5_progress_indicator_value_state_none: var(--sapNeutralElementColor);
    --_ui5_progress_indicator_value_state_error: var(--sapNegativeElementColor);
    --_ui5_progress_indicator_value_state_warning: var(--sapCriticalElementColor);
    --_ui5_progress_indicator_value_state_success: var(--sapPositiveElementColor);
    --_ui5_progress_indicator_value_state_information: var(--sapInformativeElementColor);
    --_ui5_progress_indicator_border_color_error: var(--sapField_BorderColor);
    --_ui5_progress_indicator_border_color_warning: var(--sapField_BorderColor);
    --_ui5_progress_indicator_border_color_success: var(--sapField_BorderColor);
    --_ui5_progress_indicator_border_color_information: var(--sapField_BorderColor);
    --_ui5_progress_indicator_color: var(--sapTextColor);
    --_ui5_progress_indicator_bar_color: var(--sapContent_ContrastTextColor);
    --_ui5_progress_indicator_border: 0.0625rem solid var(--sapField_BorderColor);
    --_ui5_progress_indicator_bar_border_max: none;
    --_ui5_progress_indicator_icon_visibility: none;

    --_ui5_progress_indicator_side_points_visibility: none;

    --_ui5_progress_indicator_host_height: 1rem;
    --_ui5_progress_indicator_host_min_height: 1rem;
    --_ui5_progress_indicator_root_border_radius: 0.5rem;
    --_ui5_progress_indicator_root_height: 100%;
    --_ui5_progress_indicator_root_overflow: hidden;
    
    --_ui5_progress_indicator_bar_height: 100%;
    --_ui5_progress_indicator_bar_border_radius: 0.5rem 0 0 0.5rem;

    --_ui5_progress_indicator_remaining_bar_overflow: hidden;

    --_ui5_progress_indicator_icon_size: var(--sapFontSmallSize);

    --_ui5_progress_indicator_value_margin: 0 0.375rem;
}

:root [_ui5host] {
	--_ui5_radio_button_min_width: 2.75rem;
	--_ui5_radio_button_min_width_compact: 2rem;
	--_ui5_radio_button_hover_fill: var(--sapField_Hover_Background);
	--_ui5_radio_button_hover_fill_error: var(--sapField_Hover_Background);
	--_ui5_radio_button_hover_fill_warning: var(--sapField_Hover_Background);
	--_ui5_radio_button_hover_fill_success: var(--sapField_Hover_Background);
	--_ui5_radio_button_hover_fill_information: var(--sapField_Hover_Background);
	--_ui5_radio_button_border_width: 1px;
	--_ui5_radio_button_checked_fill: var(--sapSelectedColor);
	--_ui5_radio_button_checked_error_fill: var(--sapField_InvalidColor);
	--_ui5_radio_button_checked_warning_fill: var(--sapField_TextColor);
	--_ui5_radio_button_checked_success_fill: var(--sapField_SuccessColor);
	--_ui5_radio_button_checked_information_fill: var(--sapField_InformationColor);
	--_ui5_radio_button_warning_error_border_dash: 0;
	--_ui5_radio_button_outer_ring_color: var(--sapField_BorderColor);
	--_ui5_radio_button_outer_ring_width: var(--sapField_BorderWidth);
	--_ui5_radio_button_outer_ring_bg: var(--sapField_Background);
	--_ui5_radio_button_outer_ring_hover_color: var(--sapField_Hover_BorderColor);
	--_ui5_radio_button_outer_ring_active_color: var(--sapField_Hover_BorderColor);
	--_ui5_radio_button_outer_ring_checked_hover_color: var(--sapField_Hover_BorderColor);
	--_ui5_radio_button_outer_ring_padding: 0 0.625rem;
	--_ui5_radio_button_border_radius: 0;
	--_ui5_radio_button_border: none;
	--_ui5_radio_button_focus_border: none;
	--_ui5_radio_button_focus_outline: block;
	--_ui5_radio_button_hover_shadow: none;
	--_ui5_radio_button_transition: none;
	--_ui5_radio_button_hover_background: inherit;
	--_ui5_radio_button_color: var(--sapField_BorderColor);
	--_ui5_radio_button_label_offset: 1px;
	--_ui5_radio_button_label_color: var(--sapContent_LabelColor);
	--_ui5_radio_button_items_align: unset;
	--_ui5_radio_button_inner_width: initial;
	--_ui5_radio_button_border_readonly_focus_style: var(--sapContent_FocusStyle);
	--_ui5_radio_button_inner_ring_radius: 22%;
	--_ui5_radio_button_outer_ring_hover_shadow: none;
	--_ui5_radio_button_outer_ring_hover_shadow_error: none;
	--_ui5_radio_button_outer_ring_hover_shadow_warning: none;
	--_ui5_radio_button_outer_ring_hover_shadow_success: none;
	--_ui5_radio_button_outer_ring_hover_shadow_information: none;
	--_ui5_radio_button_read_only_border_type: none;
	--_ui5_radio_button_inner_ring_color: var(--sapSelectedColor);
	--_ui5_radio_button_information_border_width: var(--sapField_InformationBorderWidth);
	--_ui5_radio_button_read_only_border_width: var(--sapField_BorderWidth);
	--_ui5_radio_button_read_only_inner_ring_color: var(--sapContent_NonInteractiveIconColor);
}

:root [_ui5host] {
	--_ui5_rating_indicator_border_radius: 0px;
	--_ui5_rating_indicator_outline_offset: 0px;
	--_ui5_rating_indicator_item_height: 1em;
	--_ui5_rating_indicator_item_width: 1em;
	--_ui5_rating_indicator_readonly_item_height: 1em;
	--_ui5_rating_indicator_readonly_item_width: 1em;
	--_ui5_rating_indicator_readonly_item_spacing: 0px;
	--_ui5_rating_indicator_component_spacing: 0.5rem 0px;
}

[data-ui5-compact-size][_ui5host], [data-ui5-compact-size] [_ui5host],
.ui5-content-density-compact[_ui5host], .ui5-content-density-compact [_ui5host],
.sapUiSizeCompact[_ui5host], .sapUiSizeCompact [_ui5host] {
	--_ui5_rating_indicator_item_height: 0.67em;
	--_ui5_rating_indicator_item_width: 0.67em;
	--_ui5_rating_indicator_readonly_item_height: 0.67em;
	--_ui5_rating_indicator_readonly_item_width: 0.67em;
	--_ui5_rating_indicator_component_spacing: 0.8125rem 0px;
}

:root [_ui5host] {
	--_ui5_segmented_btn_inner_border: 0.0625rem solid var(--sapButton_BorderColor);
	--_ui5_segmented_btn_inner_border_odd_child: 0;
	--_ui5_segmented_btn_inner_pressed_border_odd_child: 0;
	--_ui5_segmented_btn_border_radius: 0.375rem;
	--_ui5_segmented_btn_inner_border_radius: 0;
	--_ui5_segmented_btn_outer_border_radius: 0.375rem;
	--_ui5_segmented_btn_background_color: transparent;
}

:root [_ui5host] {
	--_ui5_select_disabled_background: var(--sapField_Background);
	--_ui5_select_disabled_border_color: var(--sapField_BorderColor);
	--_ui5_select_state_error_warning_border_style: solid;
	--_ui5_select_state_error_warning_border_width: 0.125rem;
	--_ui5_select_hover_icon_left_border: 1px solid transparent;
	--_ui5_select_focus_width: 1px;
	--_ui5_select_label_color: var(--sapField_TextColor);
}

:root [_ui5host] {
	--_ui5_split_button_focused_border: 0.0625rem dotted var(--sapContent_FocusColor);
	--_ui5_split_button_focused_border_radius: 0.125rem;
	--_ui5_split_button_hover_border_radius: 0;
	--_ui5_split_button_hover_border_radius: 0;
	--_ui5_split_button_attention_separator_color: var(--sapButton_Attention_BorderColor);
	--_ui5_split_button_middle_separator_width: 0;
	--_ui5_split_button_middle_separator_left: 0;
	--_ui5_split_button_middle_separator_hover_display: block;
	--_ui5_split_button_text_button_width: 2.25rem;
	--_ui5_split_button_text_button_right_border_width: 0;
	--_ui5_split_button_transparent_hover_background: var(--sapButton_Lite_Background);
	--_ui5_split_button_transparent_hover_color: var(--sapButton_Lite_TextColor);
	--_ui5_split_button_transparent_disabled_background: transparent;
	--_ui5_split_button_inner_focused_border_radius_outer: 0.25rem;
	--_ui5_split_button_inner_focused_border_radius_inner: 0;
}

:root [_ui5host] {
	/* switch */
	--_ui5_switch_height: 2.75rem;
	--_ui5_switch_width: 3.25rem;

	--_ui5_switch_min_width: 3.875rem;

	--_ui5_switch_with_label_width: 100%;

	--_ui5_switch_focus_outline: var(--_ui5_switch_foucs_border_size) dotted var(--sapContent_FocusColor);

	--_ui5_switch_root_outline_top: 0.25rem;
	--_ui5_switch_root_outline_bottom: 0.25rem;
	--_ui5_switch_root_outline_left: 0;
	--_ui5_switch_root_outline_right: 0;

	--_ui5_switch_foucs_border_size: 1px;

	--_ui5-switch-root-border-radius: 0;
	--_ui5-switch-root-box-shadow: none;
	--_ui5_switch_root_after_outline: none;

	--_ui5-switch-focus: "";
	--_ui5_switch_disabled_opacity: .4;

	--_ui5_switch_transform: translateX(100%) translateX(-1.875rem);
	--_ui5_switch_transform_with_label: translateX(100%) translateX(-1.875rem);

	--_ui5_switch_rtl_transform: translateX(-100%) translateX(1.875rem);
	--_ui5_switch_rtl_transform_with_label: translateX(-100%) translateX(1.875rem);

	/* switch track */
	--_ui5_switch_track_with_label_width: 100%;
	--_ui5_switch_track_with_label_height: 1.375rem;

	--_ui5_switch_track_width: 100%;
	--_ui5_switch_track_height: 1.375rem;

	--_ui5_switch_track_border_radius: 0.75rem;
	--_ui5-switch-track-border: 1px solid;

	--_ui5_switch_track_active_background_color: var(--sapButton_Track_Selected_Background);
	--_ui5_switch_track_inactive_background_color: var(--sapButton_Track_Background);
	--_ui5_switch_track_hover_active_background_color: var(--sapButton_Track_Selected_Background);
	--_ui5_switch_track_hover_inactive_background_color: var(--sapButton_Track_Background);

	--_ui5_switch_track_active_border_color: var(--sapContent_ForegroundBorderColor);
	--_ui5_switch_track_inactive_border_color: var(--sapContent_ForegroundBorderColor);
	--_ui5_switch_track_hover_active_border_color: var(--sapButton_Hover_BorderColor);
	--_ui5_switch_track_hover_inactive_border_color: var(--sapButton_Hover_BorderColor);

	--_ui5_switch_track_semantic_accept_background_color: var(--sapSuccessBackground);
	--_ui5_switch_track_semantic_reject_background_color: var(--sapErrorBackground);
	--_ui5_switch_track_semantic_hover_accept_background_color: var(--sapSuccessBackground);
	--_ui5_switch_track_semantic_hover_reject_background_color: var(--sapErrorBackground);

	--_ui5_switch_track_semantic_accept_border_color: var(--sapSuccessBorderColor);
	--_ui5_switch_track_semantic_reject_border_color: var(--sapErrorBorderColor);
	--_ui5_switch_track_semantic_hover_accept_border_color: var(--sapSuccessBorderColor);
	--_ui5_switch_track_semantic_hover_reject_border_color: var(--sapErrorBorderColor);
	
	--_ui5_switch_track_transition: none;
	--_ui5_switch_track_icon_display: none;

	/* switch handle */
	--_ui5_switch_handle_width: 2rem;

	--_ui5_switch_handle_height: 2rem;

	--_ui5_switch_handle_with_label_width: 2rem;

	--_ui5_switch_handle_with_label_height: 2rem;

	--_ui5_switch_handle_border: var(--_ui5_switch_handle_border_width) solid var(--sapButton_Handle_BorderColor);
	--_ui5_switch_handle_border_width: 0.0625rem;
	--_ui5_switch_handle_border_radius: 1rem;

	--_ui5_switch_handle_active_background_color: var(--sapButton_Selected_Background);
	--_ui5_switch_handle_inactive_background_color: var(--sapButton_TokenBackground);
	--_ui5_switch_handle_hover_active_background_color: var(--sapButton_Selected_Hover_Background);
	--_ui5_switch_handle_hover_inactive_background_color: var(--sapButton_Handle_Hover_Background);

	--_ui5_switch_handle_active_border_color: var(--sapButton_Selected_BorderColor);
	--_ui5_switch_handle_inactive_border_color: var(--sapContent_ForegroundBorderColor);
	--_ui5_switch_handle_hover_active_border_color: var(--sapButton_Selected_BorderColor);
	--_ui5_switch_handle_hover_inactive_border_color: var(--sapButton_Hover_BorderColor);

	--_ui5_switch_handle_semantic_accept_background_color: var(--sapButton_Background);
	--_ui5_switch_handle_semantic_reject_background_color: var(--sapButton_Background);
	--_ui5_switch_handle_semantic_hover_accept_background_color: var(--sapSuccessBackground);
	--_ui5_switch_handle_semantic_hover_reject_background_color: var(--sapErrorBackground);

	--_ui5_switch_handle_semantic_accept_border_color: var(--sapSuccessBorderColor);
	--_ui5_switch_handle_semantic_reject_border_color: var(--sapErrorBorderColor);
	--_ui5_switch_handle_semantic_hover_accept_border_color: var(--sapSuccessBorderColor);
	--_ui5_switch_handle_semantic_hover_reject_border_color: var(--sapErrorBorderColor);

	--_ui5_switch_handle_on_hover_box_shadow: none;
	--_ui5_switch_handle_off_hover_box_shadow: none;
	--_ui5_switch_handle_semantic_on_hover_box_shadow: var(--sapContent_Informative_Shadow);
	--_ui5_switch_handle_semantic_off_hover_box_shadow: var(--sapContent_Negative_Shadow);

	--_ui5-switch-handle-icon-display: none;
	--_ui5_switch_handle_left: -0.0625rem;
	--_ui5-switch-slider-texts-display: inline;

	/* switch text */
	--_ui5_switch_text_font_family: "72override", var(--sapFontFamily);
	--_ui5_switch_text_font_size: var(--sapFontSmallSize);

	--_ui5_switch_text_with_label_font_family: "72override", var(--sapFontFamily);
	--_ui5_switch_text_with_label_font_size: var(--sapFontSmallSize);

	--_ui5_switch_text_with_label_width: none;

	--_ui5_switch_text_width: none;

	--_ui5_switch_text_inactive_left: auto;
	--_ui5_switch_text_inactive_right: 0.125rem;
	--_ui5_switch_text_active_left: calc(-100% + 2rem);
	--_ui5_switch_text_active_right: auto;

	--_ui5_switch_text_active_color: var(--sapButton_Track_Selected_TextColor);
	--_ui5_switch_text_inactive_color: var(--sapTextColor);

	--_ui5_switch_text_semantic_accept_color: var(--sapPositiveElementColor);
	--_ui5_switch_text_semantic_reject_color: var(--sapNegativeElementColor);

	--_ui5_switch_text_overflow: none;
	--_ui5_switch_text_z_index: inherit;
	--_ui5_switch_text_hidden: hidden;
	--_ui5_switch_text_min_width: 1.625rem;

	--_ui5_switch_icon_width: 0.75rem;
	--_ui5_switch_icon_height: 0.75rem;
}

[data-ui5-compact-size][_ui5host], [data-ui5-compact-size] [_ui5host],
.ui5-content-density-compact[_ui5host], .ui5-content-density-compact [_ui5host],
.sapUiSizeCompact[_ui5host], .sapUiSizeCompact [_ui5host] {
	--_ui5_switch_height: 2rem;
	--_ui5_switch_width: 2.5rem;
	--_ui5_switch_with_label_width: 100%;
	--_ui5_switch_root_outline_top: 0;
	--_ui5_switch_root_outline_bottom: 0;
	--_ui5_switch_transform: translateX(100%) translateX(-1.5rem);
	--_ui5_switch_transform_with_label: translateX(100%) translateX( -1.5rem);
	--_ui5_switch_rtl_transform: translateX(1.5rem) translateX(-100%);
	--_ui5_switch_rtl_transform_with_label: translateX(1.5rem) translateX(-100%);
	--_ui5_switch_track_with_label_width: 100%;
	--_ui5_switch_track_with_label_height: 1.375rem;
	--_ui5_switch_track_width: 100%;
	--_ui5_switch_track_height: 1.375rem;
	--_ui5_switch_handle_width: 1.625rem;
	--_ui5_switch_handle_height: 1.625rem;
	--_ui5_switch_handle_with_label_width: 1.625rem;
	--_ui5_switch_handle_with_label_height: 1.625rem;
	--_ui5_switch_text_font_size: var(--sapFontSmallSize);
	--_ui5_switch_text_width: none;
	--_ui5_switch_text_active_left: calc(-100% + 1.625rem);
}

:root [_ui5host] {
	/* Header */
	--_ui5_tc_header_height: var(--_ui5_tc_item_height);
	--_ui5_tc_header_height_text_only: var(--_ui5_tc_item_text_only_height);
	--_ui5_tc_header_height_text_with_additional_text: var(--_ui5_tc_item_text_only_with_additional_text_height);
	--_ui5_tc_header_box_shadow: var(--sapContent_HeaderShadow);
	--_ui5_tc_header_border_bottom: 0.125rem solid var(--sapObjectHeader_Background);
	--_ui5_tc_header_background: var(--sapObjectHeader_Background);
	--_ui5_tc_header_background_translucent: var(--sapObjectHeader_Background);
	--_ui5_tc_content_background: var(--sapBackgroundColor);
	--_ui5_tc_content_background_translucent: var(--sapGroup_ContentBackground);

	/* Header Item */
	--_ui5_tc_headeritem_padding: 1rem;
	--_ui5_tc_headerItem_color: var(--sapContent_LabelColor);
	--_ui5_tc_headerItem_additional_text_color: var(--sapContent_LabelColor);
	--_ui5_tc_headerItem_text_hover_color: var(--_ui5_tc_headerItem_color);
	--_ui5_tc_headerItem_text_selected_color: var(--sapSelectedColor);
	--_ui5_tc_headerItem_text_selected_hover_color: var(--sapSelectedColor);
	--_ui5_tc_headeritem_text_font_weight: normal;
	--_ui5_tc_headerItem_additional_text_font_weight: normal;
	--_ui5_tc_headerItem_neutral_color: var(--sapNeutralColor);
	--_ui5_tc_headerItem_positive_color: var(--sapPositiveColor);
	--_ui5_tc_headerItem_negative_color: var(--sapNegativeColor);
	--_ui5_tc_headerItem_critical_color: var(--sapCriticalColor);
	--_ui5_tc_headerItem_neutral_border_color: var(--_ui5_tc_headerItem_neutral_color);
	--_ui5_tc_headerItem_positive_border_color: var(--_ui5_tc_headerItem_positive_color);
	--_ui5_tc_headerItem_negative_border_color: var(--_ui5_tc_headerItem_negative_color);
	--_ui5_tc_headerItem_critical_border_color: var(--_ui5_tc_headerItem_critical_color);
	--_ui5_tc_headerItem_neutral_selected_border_color: var(--_ui5_tc_headerItem_neutral_color);
	--_ui5_tc_headerItem_positive_selected_border_color: var(--_ui5_tc_headerItem_positive_color);
	--_ui5_tc_headerItem_negative_selected_border_color: var(--_ui5_tc_headerItem_negative_color);
	--_ui5_tc_headerItem_critical_selected_border_color: var(--_ui5_tc_headerItem_critical_color);
	--_ui5_tc_headerItem_transition: none;
	--_ui5_tc_headerItem_hover_border_visibility: hidden;
	--_ui5_tc_headerItem_focus_offset: 0px;

	--_ui5_tc_headerItemContent_border_radius: 0.125rem 0.125rem 0 0;
	--_ui5_tc_headerItemContent_border_bottom: 0.125rem solid var(--sapSelectedColor);
	--_ui5_tc_headerItemContent_border_bg: transparent;
	--_ui5_tc_headerItem_neutral_border_bg: transparent;
	--_ui5_tc_headerItem_positive_border_bg: transparent;
	--_ui5_tc_headerItem_negative_border_bg: transparent;
	--_ui5_tc_headerItem_critical_border_bg: transparent;
	--_ui5_tc_headerItemContent_border_height: 0;
	--_ui5_tc_headerItemContent_focus_offset: 1rem;
	--_ui5_tc_headerItem_focus_border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	--_ui5_tc_headerItem_text_focus_border_offset_left: 0px;
	--_ui5_tc_headerItem_text_focus_border_offset_right: 0px;
	--_ui5_tc_headerItem_text_focus_border_offset_top: 0px;
	--_ui5_tc_headerItem_text_focus_border_offset_bottom: 0px;
	--_ui5_tc_headerItem_mixed_mode_focus_border_offset_left: 0.75rem;
	--_ui5_tc_headerItem_mixed_mode_focus_border_offset_right: 	0.625rem;
	--_ui5_tc_headerItem_mixed_mode_focus_border_offset_top: 0.75rem;
	--_ui5_tc_headerItem_mixed_mode_focus_border_offset_bottom: 0.75rem;
	--_ui5_tc_headerItemContent_focus_border: none;
	--_ui5_tc_headerItemContent_default_focus_border: none;
	--_ui5_tc_headerItemContent_focus_border_radius: 0;
	--_ui5_tc_headerItemSemanticIcon_display: none;
	--_ui5_tc_headerItemSemanticIcon_size: 0.75rem;
	--_ui5_tc_headerItem_focus_border_radius: 0px;
	--_ui5_tc_mixedMode_itemText_color: var(--sapContent_LabelColor);
	--_ui5_tc_mixedMode_itemText_font_family: var(--sapFontFamily);
	--_ui5_tc_mixedMode_itemText_font_size:  var(--sapFontSmallSize);
	--_ui5_tc_mixedMode_itemText_font_weight: normal;
	--_ui5_tc_headerItem_expand_button_margin_inline_start: 0.625rem;
	--_ui5_tc_headerItem_single_click_expand_button_margin_inline_start: 0.875rem;
	--_ui5_tc_headerItem_expand_button_border_radius: var(--sapButton_BorderCornerRadius);
	--_ui5_tc_headerItem_expand_button_separator_display: none;

	/* Overflow Item */

	--_ui5_tc_overflowItem_positive_color: var(--sapPositiveColor);
	--_ui5_tc_overflowItem_negative_color: var(--sapNegativeColor);
	--_ui5_tc_overflowItem_critical_color: var(--sapCriticalColor);
	--_ui5_tc_overflowItem_focus_offset: 0.125rem;
	--_ui5_tc_overflowItem_extraIndent: 0rem;

	/* Header Item icons */
	--_ui5_tc_headerItemIcon_border: 1px solid var(--sapHighlightColor);
	--_ui5_tc_headerItemIcon_color: var(--sapHighlightColor);
	--_ui5_tc_headerItemIcon_selected_background: var(--sapHighlightColor);
	--_ui5_tc_headerItemIcon_selected_color: var(--sapGroup_ContentBackground);
	--_ui5_tc_headerItemIcon_positive_selected_background: var(--sapPositiveColor);
	--_ui5_tc_headerItemIcon_negative_selected_background: var(--sapNegativeColor);
	--_ui5_tc_headerItemIcon_critical_selected_background: var(--sapCriticalColor);
	--_ui5_tc_headerItemIcon_neutral_selected_background: var(--sapNeutralColor);
	--_ui5_tc_headerItemIcon_semantic_selected_color: var(--sapGroup_ContentBackground);
	--_ui5_tc_headerItemIcon_background_color: transparent;

	--_ui5_tc_overflowItem_default_color: var(--sapNeutralTextColor);
	--_ui5_tc_overflowItem_current_color: CurrentColor;
	--_ui5_tc_content_border_bottom: 0.125rem solid var(--sapObjectHeader_BorderColor);

	--_ui5_tc_headerItem_focus_border_offset: -2px;
	--_ui5_tc_headerItemIcon_focus_border_radius: 0;

	/* Overflow Buttons*/
	--_ui5_tc_overflow_text_color: var(--sapButton_TextColor);
}

[data-ui5-compact-size][_ui5host], [data-ui5-compact-size] [_ui5host],
.ui5-content-density-compact[_ui5host], .ui5-content-density-compact [_ui5host],
.sapUiSizeCompact[_ui5host], .sapUiSizeCompact [_ui5host] {
	--_ui5_tc_header_height: var(--_ui5_tc_item_height);
}

:root [_ui5host] {
	--_ui5_tc_header_border_bottom: 0.0625rem solid var(--sapObjectHeader_Background);

	/* Header Item */
	--_ui5_tc_headerItemContent_border_bottom: 0.1875rem solid var(--sapSelectedColor);

	--_ui5_tc_overflowItem_default_color: var(--sapNeutralTextColor);
	--_ui5_tc_overflowItem_current_color: CurrentColor;
	--_ui5_tc_content_border_bottom: 0.0625rem solid var(--sapObjectHeader_BorderColor);
	--_ui5_tc_headerItem_text_hover_color: #1a1c1f;
}

:root [_ui5host] {
	--_ui5_textarea_state_border_width: 0.125rem;
	--_ui5_textarea_information_border_width: 0.125rem;
	--_ui5_textarea_placeholder_font_style: italic;
	--_ui5_textarea_value_state_error_warning_placeholder_font_weight: normal;
	--_ui5_textarea_error_placeholder_font_style: italic;
	--_ui5_textarea_error_placeholder_color: var(--sapField_PlaceholderTextColor);
	--_ui5_textarea_error_hover_background_color: var(--sapField_Hover_Background);
	--_ui5_textarea_hover_border: var(--sapField_BorderWidth) var(--sapField_BorderStyle) var(--sapField_Hover_BorderColor);
	--_ui5_textarea_error_warning_border_style: solid;
	--_ui5_textarea_disabled_opacity: 0.4;
	--_ui5_textarea_line_height: 1.4;
	--_ui5_textarea_focus_pseudo_element_content: '';
	--_ui5_textarea_focused_value_state_error_background: var(--sapField_InvalidBackground);
	--_ui5_textarea_focused_value_state_warning_background: var(--sapField_WarningBackground);
	--_ui5_textarea_focused_value_state_success_background: var(--sapField_SuccessBackground);
	--_ui5_textarea_focused_value_state_information_background: var(--sapField_InformationBackground);
	--_ui5_textarea_focused_value_state_error_focus_outline_color: var(--sapContent_FocusColor);
	--_ui5_textarea_focused_value_state_warning_focus_outline_color: var(--sapContent_FocusColor);
	--_ui5_textarea_focused_value_state_success_focus_outline_color: var(--sapContent_FocusColor);
	--_ui5_textarea_focus_offset: 1px;
	--_ui5_textarea_readonly_focus_offset: 1px;
	--_ui5_textarea_value_state_focus_offset: 1px;
	--_ui5_textarea_focus_outline_color: var(--sapContent_FocusColor);
	--__ui5_textarea_min_height: 2.25rem;
	--_ui5_textarea_padding_right_and_left: 0.5625rem;
	--_ui5_textarea_padding_right_and_left_error_warning: 0.5rem;
	--_ui5_textarea_padding_right_and_left_information: 0.5rem;
	--_ui5_textarea_padding_right_and_left_readonly: 0.5625rem;
	--_ui5_textarea_padding_top: 0.4375rem;
	--_ui5_textarea_padding_bottom: 0.4375rem;
	--_ui5_textarea_padding_top_readonly: 0.4375rem;
	--_ui5_textarea_padding_bottom_readonly:0.4375rem;
	--_ui5_textarea_padding_top_error_warning: 0.375rem;
	--_ui5_textarea_padding_bottom_error_warning: 0.375rem;
	--_ui5_textarea_padding_top_information: 0.375rem;
	--_ui5_textarea_padding_bottom_information: 0.375rem;
	--_ui5_textarea_margin: 0.25rem 0;
	--_ui5_textarea_exceeded_text_height: 1rem;
	--_ui5_textarea_readonly_border_style: var(--sapField_BorderStyle);
}

[data-ui5-compact-size][_ui5host], [data-ui5-compact-size] [_ui5host],
.ui5-content-density-compact[_ui5host], .ui5-content-density-compact [_ui5host],
.sapUiSizeCompact[_ui5host], .sapUiSizeCompact [_ui5host] {
	--_ui5_textarea_padding_right_and_left: 0.4375rem;
	--_ui5_textarea_padding_right_and_left_error_warning: 0.375rem;
	--_ui5_textarea_padding_right_and_left_information: 0.375rem;
	--_ui5_textarea_padding_right_and_left_readonly: 0.4375rem;
	--_ui5_textarea_padding_top: 0.125rem;
	--_ui5_textarea_padding_bottom: 0.125rem;
	--_ui5_textarea_padding_top_readonly: 0.125rem;
	--_ui5_textarea_padding_bottom_readonly: 0.125rem;
	--_ui5_textarea_padding_top_error_warning: 0.0625rem;
	--_ui5_textarea_padding_bottom_error_warning: 0.0625rem;
	--_ui5_textarea_padding_top_information: 0.0625rem;
	--_ui5_textarea_padding_bottom_information: 0.0625rem;
	--_ui5_textarea_exceeded_text_height: 0.375rem;
	--_ui5_textarea_margin: 0.1875rem 0;
	--__ui5_textarea_min_height: 1.625rem;
}

:root [_ui5host] {
	--_ui5_time_picker_border: 0.0625rem solid transparent;
	--_ui5-time_picker_border_radius: 0;
}

:root [_ui5host] {
	--_ui5_time_picker_border: 0.0625rem solid transparent;
}

:root [_ui5host] {
	--_ui5_toast_vertical_offset: 3rem;
	--_ui5_toast_horizontal_offset: 2rem;
	--_ui5_toast_background: var(--sapList_Background);
	--_ui5_toast_shadow: var(--sapContent_Shadow2);
}

:root [_ui5host]{
	--_ui5_wheelslider_item_text_size: var(--sapFontSize);
	--_ui5_wheelslider_selected_item_hover_background_color: var(--sapList_BorderColor);
	--_ui5_wheelslider_label_text_size: var(--sapFontSmallSize);
	--_ui5_wheelslider_selection_frame_margin_top: calc(var(--_ui5_wheelslider_item_height) * 2);
	--_ui5_wheelslider_mobile_selection_frame_margin_top: calc(var(--_ui5_wheelslider_item_height) * 4);
	--_ui5_wheelslider_label_text_color: var(--sapContent_LabelColor);
	--_ui5_wheelslider_height: 240px;
	--_ui5_wheelslider_mobile_height: 432px;
	--_ui5_wheelslider_item_width: 48px;
	--_ui5_wheelslider_item_height: 46px;
	--_ui5_wheelslider_arrows_visibility: hidden;
	--_ui_wheelslider_item_hover_color: var(--sapButton_Emphasized_Hover_BorderColor);
	--_ui_wheelslider_item_expanded_hover_color: var(--sapList_Hover_Background);
}

:root [_ui5host]{
	--_ui5_wheelslider_item_background_color: var(--sapLegend_WorkingBackground);
	--_ui5_wheelslider_item_text_color: var(--sapTextColor);
	--_ui_wheelslider_item_hover_color: var(--sapButton_Emphasized_Hover_BorderColor);
	--_ui5_wheelslider_item_border_color: var(--sapList_Background);
	--_ui5_wheelslider_item_hovered_border_color: var(--sapList_Background);
	--_ui5_wheelslider_collapsed_item_text_color: var(--_ui5_wheelslider_item_border_color);
	--_ui5_wheelslider_selected_item_background_color: var(--sapContent_Selected_Background);
	--_ui5_wheelslider_selected_item_hover_background_color: var(--sapButton_Emphasized_Hover_BorderColor);
	--_ui5_wheelslider_active_item_background_color:var(--sapContent_Selected_Background);
	--_ui5_wheelslider_active_item_text_color: var(--sapContent_Selected_TextColor);
	--_ui5_wheelslider_selection_frame_color: var(--sapList_SelectionBorderColor);
	--_ui_wheelslider_item_border_radius: var(--_ui5_button_border_radius);
}

:root [_ui5host] {
	--_ui5_toggle_button_pressed_focussed: var(--sapButton_Selected_BorderColor);
	--_ui5_toggle_button_pressed_focussed_hovered: var(--sapButton_Selected_BorderColor);
	--_ui5_toggle_button_selected_positive_text_color: var(--sapButton_Selected_TextColor);
	--_ui5_toggle_button_selected_negative_text_color: var(--sapButton_Selected_TextColor);
	--_ui5_toggle_button_selected_attention_text_color: var(--sapButton_Selected_TextColor);
	--_ui5_toggle_button_emphasized_pressed_focussed_hovered: var(--sapContent_FocusColor);
	--_ui5_toggle_button_emphasized_text_shadow: none;
}

:root [_ui5host] {
	--_ui5_yearpicker_item_selected_focus: var(--sapContent_Selected_Background);
	--_ui5_yearpicker_item_selected_hover_color: var(--sapContent_Selected_Background);
	--_ui5_yearpicker_item_border: none;
	--_ui5_yearpicker_item_border_radius: 0;
	--_ui5_yearpicker_item_margin: 1px;
	--_ui5_yearpicker_item_focus_after_width: calc(100% - 0.375rem);
	--_ui5_yearpicker_item_focus_after_height: calc(100% - 0.375rem);
	--_ui5_yearpicker_item_focus_after_border: 1px dotted var(--sapContent_FocusColor);
	--_ui5_yearpicker_item_focus_after_offset: 2px;
	--_ui5_yearpicker_item_focus_after_border_radius: 0;
	--_ui5_yearpicker_item_selected_background_color: var(--sapSelectedColor);
	--_ui5_yearpicker_item_selected_text_color: var(--sapContent_ContrastTextColor);
	--_ui5_yearpicker_item_selected_box_shadow: none;
	--_ui5_yearpicker_item_focus_after_outline: none;
}

:root [_ui5host] {
	--_ui5_yearpicker_item_border_radius: 0.25rem;
}

:root [_ui5host] {
	--_ui5_calendar_header_arrow_button_border: none;
	--_ui5_calendar_header_arrow_button_border_radius: 0.25rem;
	--_ui5_calendar_header_middle_button_width: 6.25rem;
	--_ui5_calendar_header_middle_button_flex: 1 1 auto;
	--_ui5_calendar_header_middle_button_focus_border_radius: 0.25rem;
	--_ui5_calendar_header_middle_button_focus_border: none;
	--_ui5_calendar_header_middle_button_focus_after_display: block;
	--_ui5_calendar_header_middle_button_focus_after_width: calc(100% - 0.25rem);
	--_ui5_calendar_header_middle_button_focus_after_height: calc(100% - 0.25rem);
	--_ui5_calendar_header_middle_button_focus_after_top_offset: 1px;
	--_ui5_calendar_header_middle_button_focus_after_left_offset: 1px;
	--_ui5_calendar_header_button_background_color: none;
	--_ui5_calendar_header_arrow_button_box_shadow: none;
	--_ui5_calendar_header_middle_button_focus_background: transparent;
	--_ui5_calendar_header_middle_button_focus_outline: none;
	--_ui5_calendar_header_middle_button_focus_active_outline: none;
	--_ui5_calendar_header_middle_button_focus_active_background: var(--sapButton_Active_Background);
	--_ui5_calendar_header_middle_button_focus_after_border: 1px dotted var(--sapContent_FocusColor);
}

:root [_ui5host] {
	--_ui5_calendar_header_middle_button_focus_after_width: calc(100% - 0.375rem);
	--_ui5_calendar_header_middle_button_focus_after_height: calc(100% - 0.375rem);
	--_ui5_calendar_header_middle_button_focus_after_top_offset: 0.125rem;
	--_ui5_calendar_header_middle_button_focus_after_left_offset: 0.125rem;
}

:root [_ui5host] {
	--ui5_table_bottom_border: 1px solid var(--sapList_BorderColor);
	--ui5_table_header_row_outline_width: 1px;
	--ui5_table_multiselect_column_width: 2.75rem;
	--ui5_table_header_row_font_weight: normal;
	--ui5_table_header_row_border_bottom_color: var(--sapList_BorderColor);
	--ui5_table_header_row_border_width: 1px;
	--_ui5_table_load_more_border-bottom: none;
}

:root [_ui5host] {
	--ui5_table_header_row_font_weight: normal;
}

:root [_ui5host] {
	--ui5_table_row_outline_width: 1px;
}

:root [_ui5host] {
	--ui5_table_group_row_font-weight: normal;
	--ui5_table_border_width: 0 0 1px 0;
}

:root [_ui5host] {
	--_ui5_load_more_padding: 0;
	--_ui5_load_more_border: 1px top solid transparent;
	--_ui5_load_more_border_radius: none;
	--_ui5_load_more_outline_width: 1px;
}

:root [_ui5host] {
	--_ui5_token_background: var(--sapButton_TokenBackground);
	--_ui5_token_readonly_background: var(--sapButton_TokenBackground);
	--_ui5_token_readonly_color: var(--sapContent_LabelColor);
	--_ui5_token_border_radius: var(--sapButton_BorderCornerRadius);
	--_ui5_token_focus_outline_width: 0.0625rem;
	--_ui5_token_outline_offset: -0.125rem;
	--_ui5_token_text_color: var(--sapButton_TextColor);
	--_ui5_token_hover_border_color: var(--sapButton_Hover_BorderColor);
	--_ui5_token_right_margin: 0.3125rem;
	--_ui5_token_padding: 0.25rem 0;
	--_ui5_token_left_padding: 0.3125rem;
	--_ui5_token_readonly_padding: 0.25rem 0.375rem;
	--_ui5_token_selected_focus_outline: var(--_ui5_token_focus_outline_width) dotted var(--sapContent_ContrastFocusColor);
	--_ui5_token_focus_outline: var(--_ui5_token_focus_outline_width) dotted var(--sapContent_FocusColor);
	--_ui5_token_selected_hover_border_color: var(--sapButton_Selected_Hover_BorderColor);
	--_ui5_token_focused_selected_border: 1px solid var(--sapButton_Selected_BorderColor);
	--ui5_token_focus_pseudo_element_content: none;
	--_ui5_token_focus_offset: -0.25rem;
	--_ui5_token_selected_text_font_family: "72override", var(--sapFontFamily);
	--_ui5_token_selected_internal_border_bottom: none;
	--_ui5_token_selected_internal_border_bottom_radius: 0;
	--_ui5_token_text_icon_top: 0;
	--_ui5_token_selected_focused_offset_bottom: var(--_ui5_token_focus_offset);
}

:root [_ui5host] {
	--_ui5_token_focus_outline_width: 0.0625rem;
	--_ui5_token_text_color: var(--sapTextColor);
}

:root [_ui5host] {
	--_ui5_tokenizer_padding: 0.3125rem;
	--_ui5_tokenizer_n_more_text_color: var(--sapField_TextColor);
	--_ui5_tokenizer-popover_offset: .3125rem;
}

[data-ui5-compact-size][_ui5host], [data-ui5-compact-size] [_ui5host],
.ui5-content-density-compact[_ui5host], .ui5-content-density-compact [_ui5host],
.sapUiSizeCompact[_ui5host], .sapUiSizeCompact [_ui5host] {
	--_ui5_tokenizer-popover_offset: .1875rem;
}

:root [_ui5host] {
	--_ui5-tree-item-minimal-background: var(--sapList_SelectionBackgroundColor);
	--_ui5-tree-item-minimal-children-indicator-display: initial;
}

:root [_ui5host] {
	--_ui5_value_state_message_border: none;
	--_ui5_value_state_header_border: none;
	--_ui5_input_value_state_icon_display: none;
	--_ui5_value_state_message_padding: 0.5rem;
	--_ui5_value_state_header_padding: .5625rem 1rem;
	--_ui5_value_state_message_popover_box_shadow: none;
	--_ui5_value_state_message_icon_width: .875rem;
	--_ui5_value_state_message_icon_height: .875rem;
	--_ui5_input_value_state_icon_offset: .5rem;
	--_ui5_value_state_header_offset: -0.125rem;
	--_ui5_value_state_message_popover_border_radius: 0;
}

:root [_ui5host] {
	--_ui5-multi_combobox_token_margin_top: 3px;
}

:root [_ui5host] {
	--_ui5-multi_combobox_token_margin_top: 1px;
}

:root [_ui5host] {\r
	--_ui5_slider_progress_container_background: var(--sapField_BorderColor);\r
	--_ui5_slider_progress_container_dot_display: none;\r
	--_ui5_slider_progress_container_dot_background: var(--sapField_BorderColor);\r
	--_ui5_slider_progress_border: none;\r
	--_ui5_slider_padding: 1.406rem 1.0625rem;\r
	--_ui5_slider_inner_height: 0.25rem;\r
	--_ui5_slider_outer_height: 1.6875rem;\r
	--_ui5_slider_progress_border_radius: 0.25rem;\r
	--_ui5_slider_progress_background: var(--sapActiveColor);\r
	--_ui5_slider_handle_icon_display: none;\r
	--_ui5_range_slider_root_hover_handle_icon_display: none;\r
	--_ui5_slider_handle_height: 1.625rem;\r
	--_ui5_slider_handle_width: 1.625rem;\r
	--_ui5_slider_handle_border: solid 0.125rem var(--sapField_BorderColor);\r
	--_ui5_slider_handle_border_radius: 1rem;\r
	--_ui5_slider_handle_box_shadow: none;\r
	--_ui5_slider_handle_box_shadow_focus: none;\r
	--_ui5_slider_handle_background: var(--sapButton_Background);\r
	--_ui5_range_slider_handle_background: #FFF;\r
	--_ui5_slider_handle_top: -0.825rem;\r
	--_ui5_slider_tickmark_bg: var(--sapField_BorderColor);\r
	--_ui5_slider_tickmark_in_range_bg: var(--sapButton_Active_Background);\r
	--_ui5_slider_handle_margin_left: calc(-1 * (var(--_ui5_slider_handle_width) / 2));\r
	--_ui5_slider_handle_hover_background: var(--sapButton_Hover_Background);\r
	--_ui5_slider_handle_hover_border: 0.125rem solid var(--sapButton_Hover_BorderColor);\r
	--_ui5_slider_handle_outline: 0.0625rem dotted var(--sapContent_FocusColor);\r
	--_ui5_slider_handle_focus_border: var(--_ui5_slider_handle_hover_border);\r
	--_ui5_slider_handle_active_border: var(--_ui5_slider_handle_hover_border);\r
	--_ui5_slider_handle_focused_top: var(--_ui5_slider_handle_top);\r
	--_ui5_slider_handle_focused_margin_left: var(--_ui5_slider_handle_margin_left);\r
	--_ui5_slider_handle_outline_offset: 0.075rem;\r
	--_ui5_slider_icon_left: 0.5rem;\r
	--_ui5_slider_icon_top: 0.125rem;\r
	--_ui5_range_slider_handle_hover_background: rgba(var(--sapButton_Background), 0.25);\r
	--_ui5_range_slider_handle_hover_icon_display: none;\r
	--_ui5_slider_progress_outline: 0.0625rem dotted var(--sapContent_FocusColor);\r
	--_ui5_slider_progress_outline_offset: -0.8125rem;\r
	--_ui5_slider_tickmark_top: -0.375rem;\r
	--_ui5_slider_disabled_opacity: 0.4;\r
	--_ui5_slider_tooltip_fontsize: var(--sapFontSmallSize);\r
	--_ui5_slider_tooltip_color: var(--sapContent_LabelColor);\r
	--_ui5_slider_tooltip_background: var(--sapField_Background);\r
	--_ui5_slider_tooltip_border_radius: var(--sapElement_BorderCornerRadius);\r
	--_ui5_slider_tooltip_border_color: var(--sapField_BorderColor);\r
	--_ui5_slider_tooltip_border: 0.0625rem solid var(--_ui5_slider_tooltip_border_color);\r
	--_ui5_slider_tooltip_box_shadow: none;\r
	--_ui5_slider_tooltip_padding: 0.4125rem;\r
	--_ui5_slider_tooltip_height: 1rem;\r
	--_ui5_slider_tooltip_min_width: 2rem;\r
	--_ui5_slider_tooltip_bottom: 2rem;\r
	--_ui5_slider_label_fontsize: var(--sapFontSmallSize);\r
	--_ui5_slider_label_color: var(--sapContent_LabelColor);\r
	--_ui5_range_slider_progress_focus_display: none;\r
	--_ui5_range_slider_progress_focus_top: -1.063rem;\r
	--_ui5_range_slider_progress_focus_left: -1.438rem;\r
	--_ui5_range_slider_progress_focus_padding: 0 1.375rem 0 1.438rem;\r
	--_ui5_range_slider_progress_focus_height: 2rem;\r
	--_ui5_range_slider_legacy_progress_focus_display: block;\r
	--_ui5_slider_handle_focus_width: 0;\r
	--_ui5_slider_start_end_point_size: .375rem;\r
	--_ui5_slider_start_end_point_left: -0.875rem;\r
	--_ui5_slider_start_end_point_top: -.1875rem;\r
	--_ui5_slider_handle_hover_box_shadow: none;\r
	--_ui5_slider_handle_background_focus: var(--_ui5_slider_handle_background);\r
	--_ui5_slider_handle_active_box_shadow: none;\r
	--_ui5_slider_handle_focused_tooltip_distance: var(--_ui5_slider_tooltip_bottom);\r
	--_ui5_slider_handle_box_sizing: content-box;\r
	--_ui5_slider_tooltip_border_box: content-box;\r
	--_ui5_range_slider_handle_active_background: var(--_ui5_range_slider_handle_background);\r
	--_ui5_range_slider_active_handle_icon_display: none;\r
	--_ui5_range_slider_handle_background_focus: transparent;\r
	--_ui5_range_slider_progress_focus_width: 100%;\r
	--_ui5_range_slider_root_active_handle_icon_display: none;\r
	--_ui5_slider_tickmark_height: 1rem;\r
	--_ui5_slider_tickmark_top: -.3125rem;\r
	--_ui5_slider_progress_box_sizing: content-box;\r
	--_ui5_slider_tickmark_in_range_bg: var(--sapField_BorderColor);\r
	--_ui5_range_slider_focus_outline_width: 100%;\r
	--_ui5_slider_progress_outline_offset_left: 0;\r
	--_ui5_range_slider_focus_outline_radius: 0;\r
\r
	--_ui5_slider_progress_container_top: 0;\r
	--_ui5_slider_progress_height: 100%;\r
	--_ui5_slider_active_progress_border: none;\r
	--_ui5_slider_active_progress_left: 0;\r
	--_ui5_slider_active_progress_top: 0;\r
\r
	--_ui5_slider_no_tickmarks_progress_container_top: var(--_ui5_slider_progress_container_top);\r
	--_ui5_slider_no_tickmarks_progress_height: var(--_ui5_slider_progress_height);\r
	--_ui5_slider_no_tickmarks_active_progress_border: var(--_ui5_slider_active_progress_border);\r
	--_ui5_slider_no_tickmarks_active_progress_left: var(--_ui5_slider_active_progress_left);\r
	--_ui5_slider_no_tickmarks_active_progress_top: var(--_ui5_slider_active_progress_top);\r
	--_ui5_slider_handle_focus_visibility: none;\r
	--_ui5_slider_handle_icon_size: 1rem;\r
}

[data-ui5-compact-size][_ui5host], [data-ui5-compact-size] [_ui5host],\r
.ui5-content-density-compact[_ui5host], .ui5-content-density-compact [_ui5host],\r
.sapUiSizeCompact[_ui5host], .sapUiSizeCompact [_ui5host] {\r
	--_ui5_slider_handle_focused_top: -0.625rem;\r
	--_ui5_slider_handle_focused_margin_left: -0.75rem;\r
	--_ui5_slider_handle_icon_size: .875rem;\r
	--_ui5_slider_padding: 1rem 1.0625rem;\r
}

:root [_ui5host] {
	--_ui5_slider_inner_min_width: 4rem;
	--_ui5_slider_handle_background_focus: var(--sapButton_Background);
	--_ui5_range_slider_handle_background_focus: transparent;
	--_ui5_slider_handle_top: -.875rem;
	--_ui5_range_slider_handle_background: transparent;
	--_ui5_range_slider_handle_active_background: transparent;
	--_ui5_slider_handle_background: var(--sapButton_Background);
	--_ui5_slider_handle_hover_background: var(--sapButton_Hover_Background);
	--_ui5_range_slider_root_hover_handle_bg: transparent;
	--_ui5_range_slider_root_active_handle_icon_display: none;
	--_ui5_slider_handle_width: 1.875rem;
	--_ui5_slider_handle_height: 1.875rem;
	--_ui5_slider_handle_box_sizing: border-box;
	--_ui5_slider_tickmark_top: -.34375rem;
}

:root [_ui5host] {
	--_ui5_step_input_input_error_background_color: var(--sapField_InvalidBackground);
	--_ui5-step_input_button_state_hover_background_color: var(--sapField_Background);
	--_ui5_step_input_border_style: 1px solid var(--sapField_BorderColor);
	--_ui5_step_input_border_style_hover: 1px solid var(--sapField_Hover_BorderColor);
	--_ui5_step_input_button_background_color:var(--sapField_Background);
	--_ui5_step_input_input_border: 1px solid transparent;
	--_ui5_step_input_input_margin_top: -0.0625rem;
	--_ui5_step_input_button_display: inline-block;
	--_ui5_step_input_button_left: 0;
	--_ui5_step_input_button_right: 0;
	--_ui5_step_input_input_border_focused_after: var(--_ui5_input_focus_border_width) dotted var(--sapContent_FocusColor);
	--_ui5_step_input_input_border_top_bottom_focused_after: 0.0625rem;
	--_ui5_step_input_input_border_radius_focused_after: 0;
	--_ui5_step_input_input_information_border_color_focused_after: var(--sapField_BorderColor);
	--_ui5_step_input_input_warning_border_color_focused_after: var(--sapField_BorderColor);
	--_ui5_step_input_input_success_border_color_focused_after: var(--sapField_BorderColor);
	--_ui5_step_input_input_error_border_color_focused_after: var(--sapField_BorderColor);
	--_ui5_step_input_disabled_button_background: var(--sapField_ReadOnly_Background);
	--_ui5_step_input_border_color_hover: var(--sapField_Hover_Background);
	--_ui5_step_input_border_hover: 1px solid var(--sapField_Hover_BorderColor);
	--_ui5_input_input_background_color: var(--sapField_InvalidBackground);
	--_ui5_step_input_min_width: 7.25rem;
	--_ui5_step_input_padding: 2.5rem;
}

:root [_ui5host] {
	/* Calendar */
	--_ui5_calendar_height: 24.5rem;
	--_ui5_calendar_width: 20rem;
	--_ui5_calendar_padding: 1rem;
	--_ui5_calendar_left_right_padding:  0.5rem;
	--_ui5_calendar_top_bottom_padding: 1rem;
	--_ui5_calendar_header_height: 3rem;
	--_ui5_calendar_header_arrow_button_width: 2.5rem;
	--_ui5_calendar_header_padding: 0.25rem 0;

	--_ui5_checkbox_root_side_padding: .6875rem;
	--_ui5_checkbox_icon_size: 1rem;
	--_ui5_checkbox_partially_icon_size: .75rem;
	--_ui5_custom_list_item_rb_min_width: 2.75rem;
	--_ui5_day_picker_item_width: 2.25rem;
	--_ui5_day_picker_item_height: 2.875rem;
	--_ui5_day_picker_empty_height: 3rem;
	--_ui5_day_picker_item_justify_content: space-between;
	--_ui5_dp_two_calendar_item_now_text_padding_top: 0.387rem;
    --_ui5_dp_two_calendar_item_primary_text_height: 1.8125rem;
    --_ui5_dp_two_calendar_item_secondary_text_height: 1rem;
	--_ui5_dp_two_calendar_item_text_padding_top: 0.575rem;

	/* ColorPalette */
	 --_ui5_color-palette-item-height: 1.75rem;
	 --_ui5_color-palette-item-hover-height: 2.375rem;
	 --_ui5_color-palette-item-margin: calc((var(--_ui5_color-palette-item-hover-height) - var(--_ui5_color-palette-item-height)) / 2);
	 --_ui5_color-palette-row-width: 12rem;
	 --_ui5_color-palette-swatch-container-padding: 0.3125rem 0.6875rem;

	 /* DateTimePicker */
	--_ui5_datetime_picker_width: 40.0625rem;
	--_ui5_datetime_picker_height: 25rem;
	--_ui5_datetime_timeview_width: 17rem;
	--_ui5_datetime_timeview_phonemode_width: 19.5rem;
	--_ui5_datetime_timeview_padding: 1rem;

	/* Dialog */
	--_ui5_dialog_content_min_height: 2.75rem;
	--_ui5_dialog_footer_height: 2.75rem;

	--_ui5_input_inner_padding: 0 0.625rem;
	--_ui5_input_inner_padding_with_icon: 0 0.25rem 0 0.625rem;
	--_ui5_input_inner_space_to_tokenizer: 0.125rem;
	--_ui5_input_inner_space_to_n_more_text: 0.1875rem;
	--_ui5_input_value_state_icon_padding: var(--_ui5-input-icon-padding);
	--_ui5_list_no_data_height: 3rem;
	--_ui5_list_item_cb_margin_right: 0;
	--_ui5_list_item_title_size: var(--sapFontLargeSize);
	--_ui5_list_no_data_font_size: var(--sapFontLargeSize);
	--_ui5_list_item_img_size: 3rem;
	--_ui5_list_item_img_top_margin: 0.5rem;
	--_ui5_list_item_img_bottom_margin: 0.5rem;
	--_ui5_list_item_img_hn_margin: 0.75rem;
	--_ui5_list_item_dropdown_base_height: 2.5rem;
	--_ui5_list_item_base_height: 2.75rem;
	--_ui5_list_item_icon_size: 1.125rem;
	--_ui5_list_item_icon_padding-inline-end: 0.5rem;
	--_ui5_list_item_selection_btn_margin_top: calc(-1 * var(--_ui5_checkbox_wrapper_padding));
	--_ui5_list_item_content_vertical_offset: calc((var(--_ui5_list_item_base_height) - var(--_ui5_list_item_title_size)) / 2);
	--_ui5_group_header_list_item_height: 2.75rem;
	--_ui5_list_busy_row_height: 3rem;
	--_ui5_month_picker_item_height: 3rem;
	--_ui5_list_buttons_left_space: 0.125rem;

	/* Popup subclasses */
	--_ui5_popup_default_header_height: 2.75rem;

	/* Notifications */
	--_ui5-notification-overflow-popover-padding: 0.25rem 0.5rem;

	--_ui5_year_picker_item_height: 3rem;
	--_ui5_tokenizer_padding: 0.25rem;
	--_ui5_token_height: 1.625rem;
	--_ui5_token_icon_size: .75rem;
	--_ui5_token_icon_padding: 0.25rem 0.5rem;
	--_ui5_token_wrapper_right_padding: 0.3125rem;
	--_ui5_token_wrapper_left_padding: 0;
	--_ui5_tl_bubble_padding: 1rem;
	--_ui5_tl_indicator_before_bottom: -1.625rem;
	--_ui5_tl_padding: 1rem 1rem 1rem .5rem;
	--_ui5_tl_li_margin_bottom: 1.625rem;

	/*switch*/
	--_ui5_switch_focus_width_size_horizon_exp: calc(100% + 4px);
	--_ui5_switch_focus_height_size_horizon_exp: calc(100% + 4px);

	--_ui5_tc_item_text: 3rem;
	--_ui5_tc_item_height: 4.75rem;
	--_ui5_tc_item_text_only_height: 2.75rem;
	--_ui5_tc_item_text_only_with_additional_text_height: 3.75rem;
	--_ui5_tc_item_text_line_height: 1.325rem;
	--_ui5_tc_item_icon_circle_size: 2.75rem;
	--_ui5_tc_item_icon_size: 1.25rem;
	--_ui5_tc_item_add_text_margin_top: 0.375rem;

	/* TextArea */
	--_ui5_textarea_margin: .25rem 0;

	/* Panel */
	--_ui5_panel_header_height: 2.75rem;

	/* Radio Button */
	--_ui5_radio_button_height: 2.75rem;
	--_ui5_radio_button_label_side_padding: .875rem;
	--_ui5_radio_button_focus_dist: .5rem;
	--_ui5_radio_button_inner_size: 2.75rem;
	--_ui5_radio_button_svg_size: 1.375rem;
	--_ui5_radio_button_label_width: calc(100% - 2.75rem);
	--_ui5_radio_button_outer_ring_padding_with_label: 0 0.6875rem;

	/* Responsive Popover */
	--_ui5-responsive_popover_header_height: 2.75rem;

	/* Side Navigation */
	--ui5_side_navigation_item_height: 2.75rem;

	/* Table */

	--_ui5_load_more_text_height: 2.75rem;
	--_ui5_load_more_text_font_size: var(--sapFontMediumSize);
	--_ui5_load_more_desc_padding:  0.375rem 2rem 0.875rem 2rem;
	--ui5_table_header_row_height: 2.75rem;
	--ui5_table_row_height: 2.75rem;
	--ui5_table_focus_outline_offset: -0.125rem;
	--ui5_table_group_row_height: 2rem;

	/* Tree */
	--_ui5-tree-indent-step: 1.5rem;
	--_ui5-tree-toggle-box-width: 2.75rem;
	--_ui5-tree-toggle-box-height: 2.25rem;
	--_ui5-tree-toggle-icon-size: 1.0625rem;

	/* Timeline */
	--_ui5_timeline_tli_indicator_before_bottom: -1.625rem;
	--_ui5_timeline_tli_indicator_before_right: -1.625rem;
	--_ui5_timeline_tli_indicator_before_without_icon_bottom: -1.875rem;
	--_ui5_timeline_tli_indicator_before_without_icon_right: -1.9375rem;

	/* SegmentedButton */
	--_ui5_segmented_btn_border_radius: 0.375rem;

	/* SplitButton */
	--_ui5_split_button_middle_separator_top: 0;
	--_ui5_split_button_middle_separator_height: 2.25rem;
}

[data-ui5-compact-size][_ui5host], [data-ui5-compact-size] [_ui5host],
.ui5-content-density-compact[_ui5host], .ui5-content-density-compact [_ui5host],
.sapUiSizeCompact[_ui5host], .sapUiSizeCompact [_ui5host] {
	--_ui5_button_base_height: 1.625rem;
	--_ui5_button_base_padding: 0.4375rem;
	--_ui5_button_base_min_width: 2rem;
	--_ui5_button_icon_font_size: 1rem;

	/* Calendar */
	--_ui5_calendar_height: 18rem;
	--_ui5_calendar_width: 17.75rem;
	--_ui5_calendar_left_right_padding: 0.25rem;
	--_ui5_calendar_top_bottom_padding: 0.5rem;
	--_ui5_calendar_header_height: 2rem;
	--_ui5_calendar_header_arrow_button_width: 2rem;
	--_ui5_calendar_header_padding: 0;

	/* CheckBox */
	--_ui5_checkbox_root_side_padding: var(--_ui5_checkbox_wrapped_focus_padding);
	--_ui5_checkbox_wrapped_content_margin_top: var(--_ui5_checkbox_compact_wrapped_label_margin_top);
	--_ui5_checkbox_wrapped_focus_left_top_bottom_position: var(--_ui5_checkbox_compact_focus_position);
	--_ui5_checkbox_width_height: var(--_ui5_checkbox_compact_width_height);
	--_ui5_checkbox_wrapper_padding: var(--_ui5_checkbox_compact_wrapper_padding);
	--_ui5_checkbox_focus_position: var(--_ui5_checkbox_compact_focus_position);
	--_ui5_checkbox_inner_width_height: var(--_ui5_checkbox_compact_inner_size);
	--_ui5_checkbox_icon_size: .75rem;
	--_ui5_checkbox_partially_icon_size: .5rem;

	/* ColorPalette */
	--_ui5_color-palette-item-height: 1.25rem;
	--_ui5_color-palette-item-focus-height: 1rem;
	--_ui5_color-palette-item-container-sides-padding: 0.1875rem;
	--_ui5_color-palette-item-container-rows-padding: 0.8125rem;
	--_ui5_color-palette-item-hover-height: 1.625rem;
	--_ui5_color-palette-item-margin: calc((var(--_ui5_color-palette-item-hover-height) - var(--_ui5_color-palette-item-height)) / 2);
	--_ui5_color-palette-row-width: 8.125rem;
	--_ui5_color-palette-swatch-container-padding: 0.1875rem 0.8125rem;
	--_ui5_color-palette-item-hover-margin: 0;
	--_ui5_color-palette-row-height: 7.5rem;
	--_ui5_color-palette-button-height: 2rem;
	--_ui5_color_picker_slider_container_margin_top: -4px;

	/* Custom List Item */
	--_ui5_custom_list_item_rb_min_width: 2rem;

	/* DayPicker */
	--_ui5_daypicker_weeknumbers_container_padding_top: 2rem;
	--_ui5_day_picker_item_width: 2rem;
	--_ui5_day_picker_item_height: 2rem;
	--_ui5_day_picker_empty_height: 2.125rem;
	--_ui5_day_picker_item_justify_content: flex-end;
	--_ui5_dp_two_calendar_item_now_text_padding_top: 0rem;
    --_ui5_dp_two_calendar_item_primary_text_height: 1rem;
    --_ui5_dp_two_calendar_item_secondary_text_height: 0.75rem;
	--_ui5_dp_two_calendar_item_text_padding_top: 0;

	/* DateTimePicker */
	--_ui5_datetime_picker_height: 17rem;
	--_ui5_datetime_picker_width: 34.0625rem;
	--_ui5_datetime_timeview_width: 17rem;
	--_ui5_datetime_timeview_phonemode_width: 18.5rem;
	--_ui5_datetime_timeview_padding: 0.5rem;

	/* Dialog */
	--_ui5_dialog_content_min_height: 2.5rem;
	--_ui5_dialog_footer_height: 2.5rem;

	/* Input */
	--_ui5_input_height: var(--sapElement_Compact_Height);
	--_ui5_input_inner_padding: 0 0.5rem;
	--_ui5_input_inner_padding_with_icon: 0 0.2rem 0 0.5rem;
	--_ui5_input_inner_space_to_tokenizer: 0.125rem;
	--_ui5_input_inner_space_to_n_more_text: 0.125rem;
	--_ui5_input_icon_min_width: var(--_ui5_input_compact_min_width);
	--_ui5_input_icon_padding: .25rem .4375rem;
	--_ui5_input_error_warning_icon_padding: .1875rem .375rem .1875rem .4375rem;
	--_ui5_input_information_icon_padding: .1875rem .375rem .1875rem .4375rem;
	--_ui5_input_custom_icon_padding: .25rem .5rem;
	--_ui5_input_error_warning_custom_icon_padding: .1875rem .5rem;
	--_ui5_input_information_custom_icon_padding: .1875rem .5rem;
	--_ui5_input_value_state_icon_padding: .1875rem .5rem;

	/* Menu */
	--_ui5_menu_item_padding: 0 0.75rem 0 0.5rem;
	--_ui5_menu_item_submenu_icon_right: 0.75rem;

	/* Notifications */
	--_ui5-notification-overflow-popover-padding: 0.25rem 0.5rem;

	/* Popup subclasses */
	--_ui5_popup_default_header_height: 2.5rem;

	/* TextArea */
	--_ui5_textarea_margin: .1875rem 0;

	/* List */
	--_ui5_list_no_data_height: 2rem;
	--_ui5_list_item_cb_margin_right: .5rem;
	--_ui5_list_item_title_size: var(--sapFontSize);
	--_ui5_list_item_img_top_margin: 0.55rem;
	--_ui5_list_no_data_font_size: var(--sapFontSize);
	--_ui5_list_item_dropdown_base_height: 2rem;
	--_ui5_list_item_base_height: 2rem;
	--_ui5_list_item_icon_size: 1rem;
	--_ui5_list_item_selection_btn_margin_top: calc(-1 * var(--_ui5_checkbox_wrapper_padding));
	--_ui5_list_item_content_vertical_offset: calc((var(--_ui5_list_item_base_height) - var(--_ui5_list_item_title_size)) / 2);
	--_ui5_list_busy_row_height: 2rem;
	--_ui5_list_buttons_left_space: 0.125rem;

	--_ui5_month_picker_item_height: 2rem;
	--_ui5_year_picker_item_height: 2rem;
	--_ui5_panel_header_height: 2.5rem;

	--_ui5_token_height: 1.25rem;
	--_ui5_token_right_margin: 0.25rem;
	--_ui5_token_left_padding: 0.25rem;
	--_ui5_token_readonly_padding: 0.125rem 0.25rem;
	--_ui5_token_focus_offset: -0.125rem;
	--_ui5_token_icon_size: .75rem;
	--_ui5_token_icon_padding: 0.125rem 0.25rem;
	--_ui5_token_wrapper_right_padding: 0.25rem;
	--_ui5_token_wrapper_left_padding: 0;
	--_ui5_token_outline_offset: -0.125rem;

	--_ui5_tl_bubble_padding: .5rem;
	--_ui5_tl_indicator_before_bottom: -.5rem;
	--_ui5_tl_padding: .5rem;
	--_ui5_tl_li_margin_bottom: .5rem;

	--_ui5_wheelslider_item_width: 64px;
	--_ui5_wheelslider_item_height: 32px;
	--_ui5_wheelslider_height: 224px;
	--_ui5_wheelslider_selection_frame_margin_top: calc(var(--_ui5_wheelslider_item_height) * 2);
	--_ui5_wheelslider_arrows_visibility: visible;
	--_ui5_wheelslider_mobile_selection_frame_margin_top: 128px;

	--_ui5_tc_item_text: 2rem;
	--_ui5_tc_item_text_line_height: 1.325rem;
	--_ui5_tc_item_icon_size: 1rem;
	--_ui5_tc_item_add_text_margin_top: 0.3125rem;
	--_ui5_tc_item_height: 4rem;
	--_ui5_tc_header_height: var(--_ui5_tc_item_height);
	--_ui5_tc_item_icon_circle_size: 2rem;
	--_ui5_tc_item_icon_size: 1rem;

	/* Radio Button */
	--_ui5_radio_button_min_width: var(--_ui5_radio_button_min_width_compact);
	--_ui5_radio_button_height: 2rem;
	--_ui5_radio_button_label_side_padding: .5rem;
	--_ui5_radio_button_focus_dist: .375rem;
	--_ui5_radio_button_inner_size: 2rem;
	--_ui5_radio_button_svg_size: 1rem;
	--_ui5_radio_button_label_width: calc(100% - 2rem + 1px);
	--_ui5_radio_button_outer_ring_padding_with_label: 0 0.5rem;

	/* Responsive Popover */
	--_ui5-responsive_popover_header_height: 2.5rem;

	/* Side Navigation */
	--ui5_side_navigation_item_height: 2rem;

	/* Slider */
	--_ui5_slider_handle_height: 1.25rem;
	--_ui5_slider_handle_width: 1.25rem;
	--_ui5_slider_handle_top: -.5rem;
	--_ui5_slider_tooltip_height: 1rem;
	--_ui5_slider_tooltip_padding: 0.25rem;
	/* --_ui5_slider_tooltip_bottom: 1.875rem; */
	--_ui5_slider_progress_outline_offset: -0.625rem;
	--_ui5_slider_outer_height: 1.3125rem;

	/* SplitButton */
	--_ui5_split_button_middle_separator_top: 0;
	--_ui5_split_button_middle_separator_height: 1.625rem;

	/* StepInput */
	--_ui5_step_input_min_width: 6rem;
	--_ui5_step_input_padding: 2rem;

	/* Table */
	--_ui5_load_more_text_height: 2.625rem;
	--_ui5_load_more_text_font_size: var(--sapFontSize);
	--_ui5_load_more_desc_padding: 0 2rem 0.875rem 2rem;
	--ui5_table_header_row_height: 2rem;
	--ui5_table_row_height: 2rem;

	/* Tree */
	--_ui5-tree-indent-step: 0.5rem;
	--_ui5-tree-toggle-box-width: 2rem;
	--_ui5-tree-toggle-box-height: 1.5rem;
	--_ui5-tree-toggle-icon-size: 0.8125rem;

	/* Timeline */
	--_ui5_timeline_tli_indicator_before_bottom: -0.5rem;
	--_ui5_timeline_tli_indicator_before_right: -0.5rem;
	--_ui5_timeline_tli_indicator_before_without_icon_bottom: -0.75rem;
	--_ui5_timeline_tli_indicator_before_without_icon_right: -0.8125rem;

	/* ViewSettingsDialog */
	--_ui5_vsd_header_container: 2.5rem;
	--_ui5_vsd_sub_header_container_height: 2rem;
	--_ui5_vsd_header_height: 4rem;
	--_ui5_vsd_expand_content_height: 25.4375rem;
}

:root [_ui5host], [dir="ltr"][_ui5host], [dir="ltr"] [_ui5host] {
	--_ui5_rotation_90deg: rotate(90deg);
	--_ui5_rotation_minus_90deg: rotate(-90deg);

	--_ui5_icon_transform_scale: none;
	--_ui5_panel_toggle_btn_rotation: var(--_ui5_rotation_90deg);
	--_ui5_li_notification_group_toggle_btn_rotation: var(--_ui5_rotation_90deg);
	--_ui5_timeline_scroll_container_offset: 0.5rem;

	--_ui5_popover_upward_arrow_margin: 0.1875rem 0 0 0.1875rem;
	--_ui5_popover_right_arrow_margin: 0.1875rem 0 0 -0.375rem;
	--_ui5_popover_downward_arrow_margin: -0.375rem 0 0 0.125rem;
	--_ui5_popover_left_arrow_margin: 0.125rem 0 0 0.25rem;
	--_ui5_dialog_resize_cursor: se-resize;

	--_ui5_progress_indicator_bar_border_radius: 0.5rem 0 0 0.5rem;
	--_ui5_progress_indicator_remaining_bar_border_radius: 0 0.5rem 0.5rem 0;
	--_ui5_menu_submenu_margin_offset: -0.25rem 0;
	--_ui5_menu_submenu_placement_type_left_margin_offset: 0.25rem 0;
	--_ui5-menu_item_icon_float: right;

	--_ui5-shellbar-notification-btn-count-offset: -0.125rem;
}

[dir="rtl"][_ui5host], [dir="rtl"] [_ui5host] {
	--_ui5_icon_transform_scale: scale(-1, 1);
	--_ui5_panel_toggle_btn_rotation: var(--_ui5_rotation_minus_90deg);
	--_ui5_li_notification_group_toggle_btn_rotation: var(--_ui5_rotation_minus_90deg);
	--_ui5_timeline_scroll_container_offset: -0.5rem;

	--_ui5_popover_upward_arrow_margin: .1875rem .125rem 0 0;
	--_ui5_popover_right_arrow_margin: .1875rem .25rem 0 0;
	--_ui5_popover_downward_arrow_margin: -0.4375rem .125rem 0 0;
	--_ui5_popover_left_arrow_margin: .1875rem -.375rem 0 0;
	--_ui5_dialog_resize_cursor:sw-resize;

	--_ui5_progress_indicator_bar_border_radius: 0 0.5rem 0.5rem 0;
	--_ui5_progress_indicator_remaining_bar_border_radius: 0.5rem 0 0 0.5rem;

	--_ui5_menu_submenu_margin_offset: 0 -0.25rem;
	--_ui5_menu_submenu_placement_type_left_margin_offset: 0 0.25rem;
	--_ui5-menu_item_icon_float: left;

	--_ui5-shellbar-notification-btn-count-offset: unset;
}`};V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const z$={packageName:"@ui5/webcomponents",fileName:"themes/Icon.css",content:`:host {
	-webkit-tap-highlight-color: rgba(0,0,0,0);
}

:host([hidden]) {
	display: none;
}

:host([invalid]) {
	display:none;
}

/*The ui5_hovered class is set by FileUploader to indicate hover state of the control*/

:host(:not([hidden]).ui5_hovered) {
	opacity: .7;
}

:host {
	display: inline-block;
	width: 1rem;
	height: 1rem;
	color: var(--sapContent_NonInteractiveIconColor);
	fill: currentColor;
	outline: none;
}

:host([design="Contrast"]) {
	color: var(--sapContent_ContrastIconColor);
}

:host([design="Critical"]) {
	color: var(--sapCriticalElementColor);
}

:host([design="Default"]) {
	color: var(--sapContent_IconColor);
}

:host([design="Information"]) {
	color: var(--sapInformativeElementColor);
}

:host([design="Negative"]) {
	color: var(--sapNegativeElementColor);
}

:host([design="Neutral"]) {
	color: var(--sapNeutralElementColor);
}

:host([design="NonInteractive"]) {
	color: var(--sapContent_NonInteractiveIconColor);
}

:host([design="Positive"]) {
	color: var(--sapPositiveElementColor);
}

:host([interactive][focused]) .ui5-icon-root {
	outline: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	border-radius: var(--ui5-icon-focus-border-radius);
}

.ui5-icon-root {
	display:flex;
	height: 100%;
	width: 100%;
	outline: none;
	vertical-align: top;
}

:host([interactive]) {
	cursor: pointer;
}

/*
 * The Icon is currently the only component that enforces "LTR" direction inside its ShadowDOM
 * as some icons should not be mirrored in RTL (f.e. checkmark, search, etc.).
 * That means, we can have "RTL" set globally and "LTR" set internally for the Icon ShadowDom
  * html dir=rtl
 * 		[ui5-icon]
 * 			#shadowroot
 * 				svg dir=ltr
 * In this case, we need to explicitly check for it as the global CSS definitions (rtl-parameters.css)
 * is placed in the "head" and won't consider it.
 */

.ui5-icon-root:not([dir="ltr"]) {
	transform: var(--_ui5_icon_transform_scale);
	transform-origin: center;
}`};var yn=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};const j$="ICON_NOT_FOUND",z0="presentation";let Ht=class extends Ce{_onFocusInHandler(){this.interactive&&(this.focused=!0)}_onFocusOutHandler(){this.focused=!1}_onkeydown(e){this.interactive&&(tt(e)&&this.fireEvent("click"),Le(e)&&e.preventDefault())}_onkeyup(e){this.interactive&&Le(e)&&this.fireEvent("click")}get _dir(){return this.ltr?"ltr":void 0}get effectiveAriaHidden(){return this.ariaHidden===""?this.isDecorative?!0:void 0:this.ariaHidden}get _tabIndex(){return this.interactive?"0":void 0}get isDecorative(){return this.effectiveAccessibleRole===z0}get effectiveAccessibleRole(){return this.accessibleRole?this.accessibleRole:this.interactive?"button":this.effectiveAccessibleName?"img":z0}async onBeforeRendering(){const e=this.name;if(!e)return console.warn("Icon name property is required",this);let n=D0(e);if(n||(n=await O0(e)),!n)return this.invalid=!0,console.warn(`Required icon is not registered. Invalid icon name: ${this.name}`);if(n===j$)return this.invalid=!0,console.warn(`Required icon is not registered. You can either import the icon as a module in order to use it e.g. "@ui5/webcomponents-icons/dist/${e.replace("sap-icon://","")}.js", or setup a JSON build step and import "@ui5/webcomponents-icons/dist/AllIcons.js".`);if(this.viewBox=n.viewBox||"0 0 512 512",n.customTemplate&&(n.pathData=[],this.customSvg=df(n.customTemplate,this)),this.invalid=!1,this.pathData=Array.isArray(n.pathData)?n.pathData:[n.pathData],this.accData=n.accData,this.ltr=n.ltr,this.packageName=n.packageName,this._onfocusout=this.interactive?this._onFocusOutHandler.bind(this):void 0,this._onfocusin=this.interactive?this._onFocusInHandler.bind(this):void 0,this.accessibleName)this.effectiveAccessibleName=this.accessibleName;else if(this.accData){const o=await Re(this.packageName);this.effectiveAccessibleName=o.getText(this.accData)||void 0}else this.effectiveAccessibleName=void 0}get hasIconTooltip(){return this.showTooltip&&this.effectiveAccessibleName}};yn([h({type:Tp,defaultValue:Tp.Default})],Ht.prototype,"design",void 0),yn([h({type:Boolean})],Ht.prototype,"interactive",void 0),yn([h()],Ht.prototype,"name",void 0),yn([h()],Ht.prototype,"accessibleName",void 0),yn([h({type:Boolean})],Ht.prototype,"showTooltip",void 0),yn([h()],Ht.prototype,"accessibleRole",void 0),yn([h()],Ht.prototype,"ariaHidden",void 0),yn([h({multiple:!0})],Ht.prototype,"pathData",void 0),yn([h({type:Object,defaultValue:void 0,noAttribute:!0})],Ht.prototype,"accData",void 0),yn([h({type:Boolean})],Ht.prototype,"focused",void 0),yn([h({type:Boolean})],Ht.prototype,"invalid",void 0),yn([h({noAttribute:!0,defaultValue:void 0})],Ht.prototype,"effectiveAccessibleName",void 0),Ht=yn([fe({tag:"ui5-icon",languageAware:!0,themeAware:!0,renderer:et,template:N$,styles:z$}),re("click")],Ht),Ht.define();const Cn=Ht,V$={key:"AVATAR_TOOLTIP",defaultText:"Avatar"},W$={key:"BUSY_INDICATOR_TITLE",defaultText:"Please wait"},U$={key:"BUTTON_ARIA_TYPE_ACCEPT",defaultText:"Positive Action"},q$={key:"BUTTON_ARIA_TYPE_REJECT",defaultText:"Negative Action"},G$={key:"BUTTON_ARIA_TYPE_EMPHASIZED",defaultText:"Emphasized"},Y$={key:"DELETE",defaultText:"Delete"},X$={key:"FILEUPLOAD_BROWSE",defaultText:"Browse..."},J$={key:"FILEUPLOADER_TITLE",defaultText:"Upload File"},Q$={key:"GROUP_HEADER_TEXT",defaultText:"Group Header"},Z$={key:"SELECT_ROLE_DESCRIPTION",defaultText:"Listbox"},K$={key:"SELECT_OPTIONS",defaultText:"Select Options"},eA={key:"INPUT_SUGGESTIONS",defaultText:"Suggestions available"},Sf={key:"INPUT_SUGGESTIONS_TITLE",defaultText:"Select"},tA={key:"INPUT_SUGGESTIONS_ONE_HIT",defaultText:"1 result available"},nA={key:"INPUT_SUGGESTIONS_MORE_HITS",defaultText:"{0} results are available"},oA={key:"INPUT_SUGGESTIONS_NO_HIT",defaultText:"No results"},rA={key:"LINK_SUBTLE",defaultText:"Subtle"},iA={key:"LINK_EMPHASIZED",defaultText:"Emphasized"},kf={key:"LIST_ITEM_POSITION",defaultText:"List item {0} of {1}"},aA={key:"LIST_ITEM_SELECTED",defaultText:"Selected"},sA={key:"LIST_ITEM_NOT_SELECTED",defaultText:"Not Selected"},lA={key:"LIST_ITEM_GROUP_HEADER",defaultText:"Group Header"},uA={key:"ARIA_LABEL_LIST_ITEM_CHECKBOX",defaultText:"Multiple Selection mode."},cA={key:"ARIA_LABEL_LIST_ITEM_RADIO_BUTTON",defaultText:"Item Selection."},dA={key:"ARIA_LABEL_LIST_SELECTABLE",defaultText:"Contains Selectable Items"},_A={key:"ARIA_LABEL_LIST_MULTISELECTABLE",defaultText:"Contains Multi-Selectable Items"},pA={key:"ARIA_LABEL_LIST_DELETABLE",defaultText:"Contains Deletable Items"},hA={key:"MESSAGE_STRIP_CLOSE_BUTTON",defaultText:"Information Bar Close"},fA={key:"MESSAGE_STRIP_CLOSABLE",defaultText:"Closable"},gA={key:"MESSAGE_STRIP_ERROR",defaultText:"Error Information Bar"},vA={key:"MESSAGE_STRIP_WARNING",defaultText:"Warning Information Bar"},mA={key:"MESSAGE_STRIP_SUCCESS",defaultText:"Success Information Bar"},bA={key:"MESSAGE_STRIP_INFORMATION",defaultText:"Information Bar"},yA={key:"PANEL_ICON",defaultText:"Expand/Collapse"},CA={key:"RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON",defaultText:"Decline"},wA={key:"LOAD_MORE_TEXT",defaultText:"More"},xf={key:"VALUE_STATE_TYPE_ERROR",defaultText:"Value State Error"},Bf={key:"VALUE_STATE_TYPE_WARNING",defaultText:"Value State Warning"},Tf={key:"VALUE_STATE_TYPE_SUCCESS",defaultText:"Value State Success"},If={key:"VALUE_STATE_TYPE_INFORMATION",defaultText:"Value State Information"},ma={key:"VALUE_STATE_ERROR",defaultText:"Invalid entry"},ba={key:"VALUE_STATE_WARNING",defaultText:"Warning issued"},Zs={key:"VALUE_STATE_INFORMATION",defaultText:"Informative entry"},ya={key:"VALUE_STATE_SUCCESS",defaultText:"Entry successfully validated"},SA={key:"DIALOG_HEADER_ARIA_ROLE_DESCRIPTION",defaultText:"Interactive Header"},kA={key:"DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE",defaultText:"Use Shift+Arrow keys to resize"},xA={key:"DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE",defaultText:"Use Arrow keys to move"},BA={key:"DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE",defaultText:"Use Arrow keys to move, Shift+Arrow keys to resize"},TA={key:"LABEL_COLON",defaultText:":"};function IA(t,e,n){return p`<label class="ui5-label-root" @click=${this._onclick}><span class="ui5-label-text-wrapper"><bdi id="${u(this._id)}-bdi"><slot></slot></bdi></span><span aria-hidden="true" class="ui5-label-required-colon" data-colon="${u(this._colonSymbol)}"></span></label>`}V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const $A={packageName:"@ui5/webcomponents",fileName:"themes/Label.css",content:`:host(:not([hidden])) {
	display: inline-flex;
}

:host {
	max-width: 100%;
	color: var(--sapContent_LabelColor);
	font-family: "72override", var(--sapFontFamily);
	font-size: var(--sapFontSize);
	font-weight: normal;
	cursor: text;
}

.ui5-label-root {
	width: 100%;
	cursor: inherit;
}

:host([wrapping-type="Normal"]) .ui5-label-root {
	white-space: normal;
}

:host(:not([wrapping-type="Normal"])) .ui5-label-root {
	display: inline-flex;
	white-space: nowrap;
}

:host(:not([wrapping-type="Normal"])) .ui5-label-text-wrapper {
	text-overflow: ellipsis;
	overflow: hidden;
	display: inline-block;
	vertical-align: top;
	flex: 0 1 auto;
	min-width: 0;
}

:host([show-colon]) .ui5-label-required-colon:before {
	content: attr(data-colon);
}

:host([required]) .ui5-label-required-colon:after {
	content:"*";
	color: var(--sapField_RequiredColor);
	font-size: 1.25rem;
	font-weight: bold;
	position: relative;
	font-style: normal;
	vertical-align: middle;
	line-height: 0;
}

:host([required][show-colon]) .ui5-label-required-colon:after {
	margin-inline-start: .125rem;
}

bdi {
	padding-right: 0.075rem; /*1.2px - fix for last letter clipping issue when style is italic*/
}

:host([show-colon]) .ui5-label-required-colon {
	margin-inline-start: -0.05rem; /*0.8px - fix for last letter clipping issue when style is italic*/
	white-space: pre;
}`};var Ks=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},Ac;let pr=Ac=class extends Ce{static async onDefine(){Ac.i18nBundle=await Re("@ui5/webcomponents-fiori")}_onclick(){if(!this.for)return;const e=this.getRootNode().querySelector(`#${this.for}`);e&&e.focus()}get _colonSymbol(){return Ac.i18nBundle.getText(TA)}};Ks([h()],pr.prototype,"for",void 0),Ks([h({type:Boolean})],pr.prototype,"showColon",void 0),Ks([h({type:Boolean})],pr.prototype,"required",void 0),Ks([h({type:Ln,defaultValue:Ln.None})],pr.prototype,"wrappingType",void 0),pr=Ac=Ks([fe({tag:"ui5-label",renderer:et,template:IA,styles:$A})],pr),pr.define();const Ec=pr;V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const AA={packageName:"@ui5/webcomponents",fileName:"themes/CheckBox.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}
:host {
	-webkit-tap-highlight-color: rgba(0,0,0,0);
}
:host(:not([hidden])) {
	display: inline-block;
}
:host {
	overflow: hidden;
	max-width: 100%;
	outline: none;
	border-radius: var(--_ui5_checkbox_border_radius);
	transition: var(--_ui5_checkbox_transition);
	cursor: pointer;
	user-select: none;
  	-moz-user-select: none;
  	-webkit-user-select: none;
  	-ms-user-select: none;
}
/* disabled */
:host([disabled]) {
	cursor: default;
}
:host([disabled]) .ui5-checkbox-root {
	opacity: var(--_ui5_checkbox_disabled_opacity);
}
:host([disabled]) .ui5-checkbox-inner {
	border-color: var(--_ui5_checkbox_inner_disabled_border_color);
}
:host([disabled]) .ui5-checkbox-label {
	color: var(--_ui5_checkbox_disabled_label_color);
}
/* readonly */
:host([readonly]:not([value-state="Warning"]):not([value-state="Error"])) .ui5-checkbox-inner {
	background: var(--sapField_ReadOnly_Background);
	border: var(--_ui5_checkbox_inner_readonly_border);
	color: var(--sapField_TextColor);
}
/* wrap */
:host([wrapping-type="Normal"][text]) .ui5-checkbox-root {
	min-height: auto;
	box-sizing: border-box;
	align-items: flex-start;
	padding-top: var(--_ui5_checkbox_root_side_padding);
	padding-bottom: var(--_ui5_checkbox_root_side_padding);
}
:host([wrapping-type="Normal"][text]) .ui5-checkbox-root .ui5-checkbox-inner,
:host([wrapping-type="Normal"][text]) .ui5-checkbox-root .ui5-checkbox-label {
	margin-top: var(--_ui5_checkbox_wrapped_content_margin_top);
}
:host([wrapping-type="Normal"][text]) .ui5-checkbox-root .ui5-checkbox-label {
	overflow-wrap: break-word;
	align-self: center;
}
:host([wrapping-type="Normal"]) .ui5-checkbox-root:focus::before {
	bottom: var(--_ui5_checkbox_wrapped_focus_left_top_bottom_position);
}
/* value states */
:host([value-state="Error"]) .ui5-checkbox-inner,
:host([value-state="Error"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner {
	background: var(--sapField_InvalidBackground);
	border: var(--_ui5_checkbox_inner_error_border);
	color: var(--sapField_InvalidColor);
}
:host([value-state="Error"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner {
	background: var(--_ui5_checkbox_inner_error_background_hover);
}
:host([value-state="Warning"]) .ui5-checkbox-inner,
:host([value-state="Warning"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner {
	background: var(--sapField_WarningBackground);
	border: var(--_ui5_checkbox_inner_warning_border);
	color: var(--_ui5_checkbox_inner_warning_color);
}
:host([value-state="Warning"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner {
	background: var(--_ui5_checkbox_inner_warning_background_hover);
}
:host([value-state="Information"]) .ui5-checkbox-inner,
:host([value-state="Information"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner {
	background: var(--sapField_InformationBackground);
	border: var(--_ui5_checkbox_inner_information_border);
	color: var(--_ui5_checkbox_inner_information_color);
}
:host([value-state="Information"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner {
	background: var(--_ui5_checkbox_inner_information_background_hover);
}
:host([value-state="Success"]) .ui5-checkbox-inner,
:host([value-state="Success"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner  {
	background: var(--sapField_SuccessBackground);
	border: var(--_ui5_checkbox_inner_success_border);
	color: var(--sapField_SuccessColor);
}
:host([value-state="Success"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner  {
	background: var(--_ui5_checkbox_inner_success_background_hover);
}
:host([value-state="Warning"]) .ui5-checkbox-icon,
:host([value-state="Warning"][indeterminate]) .ui5-checkbox-inner::after {
	color: var(--_ui5_checkbox_checkmark_warning_color);
}
:host([text]) .ui5-checkbox-root {
	padding-inline-end: var(--_ui5_checkbox_right_focus_distance);
}
:host([text]) .ui5-checkbox-root:focus::before {
	inset-inline-end: 0;
}
.ui5-checkbox-root {
	position: relative;
	display: inline-flex;
	align-items: center;
	width: 100%;
	min-height: var(--_ui5_checkbox_width_height);
	min-width: var(--_ui5_checkbox_width_height);
	padding: 0 var(--_ui5_checkbox_wrapper_padding);
	box-sizing: border-box;
	outline: none;
	transition: var(--_ui5_checkbox_transition);
	border: var(--_ui5_checkbox_default_focus_border);
	border-radius: var(--_ui5_checkbox_border_radius);
	box-sizing: border-box;
}
/* focused */
.ui5-checkbox-root:focus::before {
	display: var(--_ui5_checkbox_focus_outline_display);
	content: "";
	position: absolute;
	inset-inline: var(--_ui5_checkbox_focus_position);
	inset-block: var(--_ui5_checkbox_focus_position);
	border: var(--_ui5_checkbox_focus_outline);
	border-radius: var(--_ui5_checkbox_focus_border_radius);
}
:host .ui5-checkbox-root:focus {
	border: var(--_ui5_checkbox_focus_border);
	border-radius: 0.5rem;
}
/* hover */
:host(:hover:not([disabled])) {
	background: var(--_ui5_checkbox_outer_hover_background);
}
.ui5-checkbox--hoverable .ui5-checkbox-label:hover {
	color: var(--_ui5_checkbox_label_color);
}
/* hover, not active, not checked */
:host(:not([active]):not([checked]):not([value-state])) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner,
:host(:not([active]):not([checked])[value-state="None"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner {
	background: var(--_ui5_checkbox_hover_background);
	border-color: var(--_ui5_checkbox_inner_hover_border_color);
}
/* hover, not active, checked */
:host(:not([active])[checked]:not([value-state])) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner,
:host(:not([active])[checked][value-state="None"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner {
	background: var(--_ui5_checkbox_hover_background);
	border-color: var(--_ui5_checkbox_inner_hover_checked_border_color);
}
/* checked */
:host([checked]:not([value-state])) .ui5-checkbox-inner,
:host([checked][value-state="None"]) .ui5-checkbox-inner {
	border-color: var(--_ui5_checkbox_inner_selected_border_color);
}
/* active, not checked */
:host([active]:not([checked]):not([value-state]):not([disabled])) .ui5-checkbox-inner,
:host([active]:not([checked])[value-state="None"]:not([disabled])) .ui5-checkbox-inner {
	border-color: var(--_ui5_checkbox_inner_active_border_color);
	background-color: var(--_ui5_checkbox_active_background);
}
/* active, checked */
:host([active][checked]:not([value-state]):not([disabled])) .ui5-checkbox-inner,
:host([active][checked][value-state="None"]:not([disabled])) .ui5-checkbox-inner {
	border-color: var(--_ui5_checkbox_inner_selected_border_color);
	background-color: var(--_ui5_checkbox_active_background);
}
.ui5-checkbox-inner {
	min-width: var(--_ui5_checkbox_inner_width_height);
	max-width: var(--_ui5_checkbox_inner_width_height);
	height: var(--_ui5_checkbox_inner_width_height);
	max-height: var(--_ui5_checkbox_inner_width_height);
	border: var(--_ui5_checkbox_inner_border);
	border-radius: var(--_ui5_checkbox_inner_border_radius);
	background: var(--_ui5_checkbox_inner_background);
	color: var(--_ui5_checkbox_checkmark_color);
	box-sizing: border-box;
	position: relative;
	cursor: inherit;
}
:host([indeterminate][checked]) .ui5-checkbox-inner::after {
	content: "";
	background-color: currentColor;
	position: absolute;
	left:50%;
	top:50%;
	transform: translate(-50%, -50%);
	width: var(--_ui5_checkbox_partially_icon_size);
	height: var(--_ui5_checkbox_partially_icon_size);
}
.ui5-checkbox-inner input {
	-webkit-appearance: none;
	visibility: hidden;
	width: 0;
	left: 0;
	position: absolute;
	font-size: inherit;
}
.ui5-checkbox-root .ui5-checkbox-label {
	margin-inline-start: var(--_ui5_checkbox_label_offset);
	cursor: inherit;
	text-overflow: ellipsis;
	overflow: hidden;
	pointer-events: none;
	color: var(--_ui5_checkbox_label_color);
}
.ui5-checkbox-icon {
	width: var(--_ui5_checkbox_icon_size);
	height: var(--_ui5_checkbox_icon_size);
	color: currentColor;
	cursor: inherit;
	position: absolute;
	left:50%;
	top:50%;
	transform: translate(-50%, -50%);
}


`};function EA(t,e,n){return p`<div class="ui5-checkbox-root ${Y(this.classes.main)}" role="checkbox" part="root" aria-checked="${u(this.effectiveAriaChecked)}" aria-readonly="${u(this.ariaReadonly)}" aria-disabled="${u(this.effectiveAriaDisabled)}" aria-label="${u(this.ariaLabelText)}" aria-labelledby="${u(this.ariaLabelledBy)}" aria-describedby="${u(this.ariaDescribedBy)}" aria-required="${u(this.required)}" tabindex="${u(this.effectiveTabIndex)}" @mousedown="${this._onmousedown}" @mouseup="${this._onmouseup}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click="${this._onclick}" @focusout="${this._onfocusout}"><div id="${u(this._id)}-CbBg" class="ui5-checkbox-inner">${this.isCompletelyChecked?PA.call(this,t,e,n):void 0}<input id="${u(this._id)}-CB" type='checkbox' ?checked="${this.checked}" ?readonly="${this.readonly}" ?disabled="${this.disabled}" tabindex="-1" aria-hidden="true" data-sap-no-tab-ref /></div>${this.text?FA.call(this,t,e,n):void 0}${this.hasValueState?RA.call(this,t,e,n):void 0}<slot name="formSupport"></slot></div>`}function PA(t,e,n){return n?p`<${k("ui5-icon",e,n)} aria-hidden="true" name="accept" class="ui5-checkbox-icon"></${k("ui5-icon",e,n)}>`:p`<ui5-icon aria-hidden="true" name="accept" class="ui5-checkbox-icon"></ui5-icon>`}function FA(t,e,n){return n?p`<${k("ui5-label",e,n)} id="${u(this._id)}-label" class="ui5-checkbox-label" wrapping-type="${u(this.wrappingType)}">${u(this.text)}</${k("ui5-label",e,n)}>`:p`<ui5-label id="${u(this._id)}-label" class="ui5-checkbox-label" wrapping-type="${u(this.wrappingType)}">${u(this.text)}</ui5-label>`}function RA(t,e,n){return p`<span id="${u(this._id)}-descr" class="ui5-hidden-text">${u(this.valueStateText)}</span>`}var cn=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},Ca;let j0=!1,$f,$t=Ca=class extends Ce{constructor(){super(),this._deactivate=()=>{$f&&($f.active=!1)},j0||(document.addEventListener("mouseup",this._deactivate),j0=!0)}onBeforeRendering(){this._enableFormSupport()}_enableFormSupport(){const e=Xe("FormSupport");e?e.syncNativeHiddenInput(this,(n,o)=>{o.disabled=!!n.disabled,o.checked=!!n.checked,o.value=n.checked?"on":""}):this.name&&console.warn('In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";')}_onclick(){this.toggle()}_onmousedown(){this.readonly||this.disabled||(this.active=!0,$f=this)}_onmouseup(){this.active=!1}_onfocusout(){this.active=!1}_onkeydown(e){Le(e)&&(e.preventDefault(),this.active=!0),tt(e)&&(this.toggle(),this.active=!0)}_onkeyup(e){Le(e)&&this.toggle(),this.active=!1}toggle(){if(this.canToggle()){const e={checked:this.checked,indeterminate:this.indeterminate};this.indeterminate?(this.indeterminate=!1,this.checked=!0):this.checked=!this.checked;const n=!this.fireEvent("change",null,!0),o=!this.fireEvent("value-changed",null,!0);(n||o)&&(this.checked=e.checked,this.indeterminate=e.indeterminate)}return this}canToggle(){return!(this.disabled||this.readonly)}valueStateTextMappings(){return{Error:Ca.i18nBundle.getText(ma),Warning:Ca.i18nBundle.getText(ba),Success:Ca.i18nBundle.getText(ya)}}get ariaLabelText(){return cr(this)}get classes(){return{main:{"ui5-checkbox--hoverable":!this.disabled&&!this.readonly&&ea()}}}get ariaReadonly(){return this.readonly?"true":void 0}get effectiveAriaDisabled(){return this.disabled?"true":void 0}get effectiveAriaChecked(){return this.indeterminate&&this.checked?"mixed":this.checked}get ariaLabelledBy(){if(!this.ariaLabelText)return this.text?`${this._id}-label`:void 0}get ariaDescribedBy(){return this.hasValueState?`${this._id}-descr`:void 0}get hasValueState(){return this.valueState!==z.None}get valueStateText(){if(this.valueState!==z.None&&this.valueState!==z.Information)return this.valueStateTextMappings()[this.valueState]}get effectiveTabIndex(){const e=this.getAttribute("tabindex");return this.disabled?void 0:e||"0"}get isCompletelyChecked(){return this.checked&&!this.indeterminate}static async onDefine(){Ca.i18nBundle=await Re("@ui5/webcomponents")}};cn([h()],$t.prototype,"accessibleNameRef",void 0),cn([h()],$t.prototype,"accessibleName",void 0),cn([h({type:Boolean})],$t.prototype,"disabled",void 0),cn([h({type:Boolean})],$t.prototype,"readonly",void 0),cn([h({type:Boolean})],$t.prototype,"required",void 0),cn([h({type:Boolean})],$t.prototype,"indeterminate",void 0),cn([h({type:Boolean})],$t.prototype,"checked",void 0),cn([h()],$t.prototype,"text",void 0),cn([h({type:z,defaultValue:z.None})],$t.prototype,"valueState",void 0),cn([h({type:Ln,defaultValue:Ln.None})],$t.prototype,"wrappingType",void 0),cn([h()],$t.prototype,"name",void 0),cn([h({type:Boolean})],$t.prototype,"active",void 0),cn([ce()],$t.prototype,"formSupport",void 0),$t=Ca=cn([fe({tag:"ui5-checkbox",languageAware:!0,renderer:et,template:EA,styles:AA,dependencies:[Ec,Cn]}),re("change")],$t),$t.define();const LA=$t;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V0=Symbol.for(""),NA=t=>{if(t?.r===V0)return t?._$litStatic$},DA=t=>({_$litStatic$:t,r:V0}),W0=new Map,U0=t=>(e,...n)=>{const o=n.length;let r,i;const a=[],s=[];let l,c=0,_=!1;for(;c<o;){for(l=e[c];c<o&&(i=n[c],(r=NA(i))!==void 0);)l+=r+e[++c],_=!0;c!==o&&s.push(i),a.push(l),c++}if(c===o&&a.push(e[o]),_){const d=a.join("$$lit$$");(e=W0.get(d))===void 0&&(a.raw=a,W0.set(d,e=a)),n=s}return t(e,...n)},OA=U0(a0),HA=U0(s0);class Pc{}Pc.html=OA,Pc.svg=HA,Pc.unsafeStatic=DA,Zp("LitStatic",Pc);const MA=t=>t.charAt(0).toUpperCase()+t.slice(1),q0=t=>t.replace(/([A-Z])/g,(e,n)=>`-${n.toLowerCase()}`),zA=t=>t.replace(/([-_]\w)/g,e=>e[1].toUpperCase()),Af=t=>`on${MA(zA(t))}`,G0=new Set([]),bt=(t,e,n,o,r,i)=>ee.forwardRef((a,s)=>{const{className:l,children:c,waitForDefine:_,...d}=a,[v,b]=T2(s),S=af(t),x=S?`${t}-${S}`:t,[O,C]=ee.useState(G0.has(x)),g=e.reduce((P,I)=>d.hasOwnProperty(I)?{...P,[q0(I)]:d[I]}:P,{}),w=n.reduce((P,I)=>d[I]===!0||d[I]==="true"?{...P,[q0(I)]:!0}:P,{}),E=o.reduce((P,I)=>{const m=d[I];if(!m)return P;if(d[I]?.$$typeof===Symbol.for("react.portal"))return console.warn("ReactPortal is not supported for slot props."),P;const y=[];let B=0;const H=M=>{M&&(M.type===ee.Fragment?ee.Children.toArray(M.props?.children).filter(Boolean).forEach(q=>{H(q)}):(y.push(ee.cloneElement(M,{key:`${I}-${B}`,slot:I})),B++))};return Array.isArray(m)?m.forEach(M=>{H(M)}):H(m),[...P,...y]},[]);mh(()=>{const P=b.current,I={};if(!_||O)return r.forEach(m=>{const y=d[Af(m)];typeof y=="function"&&(I[m]=y,P?.addEventListener(m,I[m]))}),()=>{for(const m in I)P?.removeEventListener(m,I[m])}},[...r.map(P=>d[Af(P)]),O,_]);const D=Object.entries(d).filter(([P])=>!e.includes(P)).filter(([P])=>!o.includes(P)).filter(([P])=>!n.includes(P)).filter(([P])=>!r.map(I=>Af(I)).includes(P)).reduce((P,[I,m])=>(!I.startsWith("aria-")&&!I.startsWith("data-")&&m===!1||(P[I]=m),P),{});return ee.useEffect(()=>{_&&!O&&customElements.whenDefined(x).then(()=>{C(!0),G0.add(x)})},[x,_,O]),_&&!O?null:F.createElement(x,{ref:v,...w,...g,...D,class:l},E,c)}),ui=bt("ui5-checkbox",["accessibleName","accessibleNameRef","name","text","valueState","wrappingType"],["checked","disabled","indeterminate","readonly","required"],[],["change"]);ui.displayName="CheckBox",ui.defaultProps={valueState:Ki.None};function Y0(t){var e,n,o="";if(typeof t=="string"||typeof t=="number")o+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=Y0(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}function Ef(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=Y0(t))&&(o&&(o+=" "),o+=e);return o}const jA={key:"PLEASE_WAIT",defaultText:"Please wait"};let T=function(t){return t.ActionSheetBoxShadow="--_ui5wcr_ActionSheet_BoxShadow",t.ActionSheetHeaderBoxShadow="--_ui5wcr_ActionSheet_HeaderBoxShadow",t.ActionSheetMobileHeaderBackground="--_ui5wcr_ActionSheet_MobileHeaderBackground",t.ActionSheetMobileHeaderBorderRadius="--_ui5wcr_ActionSheet_MobileHeaderBorderRadius",t.ActionSheetMobileHeaderBoxShadow="--_ui5wcr_ActionSheet_MobileHeaderBoxShadow",t.ActionSheetMobileHeaderTextColor="--_ui5wcr_ActionSheet_MobileHeaderTextColor",t.ActionSheetTopBorderRadius="--_ui5wcr_ActionSheet_TopBorderRadius",t.AnalyticalTableHeaderActiveTextColor="--_ui5wcr-AnalyticalTable-HeaderActiveTextColor",t.AnalyticalTableHeaderBorderWidth="--_ui5wcr-AnalyticalTable-HeaderBorderWidth",t.AnalyticalTableHeaderFontFamily="--_ui5wcr-AnalyticalTable-HeaderFontFamily",t.AnalyticalTableOuterBorderBlock="--_ui5wcr-AnalyticalTable-OuterBorderBlock",t.AnalyticalTableOuterBorderInline="--_ui5wcr-AnalyticalTable-OuterBorderInline",t.ObjectPageSectionBorderTop="--_ui5wcr_ObjectPage_SectionBorderTop",t.ObjectPageSectionTitleFontFamily="--_ui5wcr_ObjectPage_SectionTitleFontFamily",t.ObjectPageSectionTitleHeight="--_ui5wcr_ObjectPage_SectionTitleHeight",t.ObjectPageSectionTitleLineHeight="--_ui5wcr_ObjectPage_SectionTitleLineHeight",t.ObjectPageSectionTitleTextDecoration="--_ui5wcr_ObjectPage_SectionTitleTextDecoration",t.ObjectPageSubSectionBackgroundColor="--_ui5wcr_ObjectPage_SubSectionBackgroundColor",t.ObjectPageSubSectionBorderRadius="--_ui5wcr_ObjectPage_SubSectionBorderRadius",t.ObjectPageSubSectionPaddingBlockStart="--_ui5wcr_ObjectPage_PaddingBlockStart",t.SplitterBarBorderFix="--_ui5wcr_Splitter_BarBorderHighContrastFix",t.SplitterBarBorderFocus="--_ui5wcr_Splitter_BarBorderFocus",t.SplitterBarBorderStyle="--_ui5wcr_Splitter_BarBorderStyle",t.SplitterBarOutline="--_ui5wcr_Splitter_BarOutline",t.SplitterContentBorderColor="--_ui5wcr_Splitter_ContentBorderColor",t.SplitterIconColor="--_ui5wcr_Splitter_IconColor",t.ToolbarFocusOutline="--_ui5wcr_Toolbar_FocusOutline",t.ToolbarFocusShadow="--_ui5wcr_Toolbar_FocusShadow",t}({});new Proxy(T,{get:(t,e)=>`var(${t[e]})`});let Pf;const wa=new Map,X0=()=>(Pf||(Pf=new window.ResizeObserver(t=>{window.requestAnimationFrame(()=>{t.forEach(e=>{const n=wa.get(e.target);n&&Promise.all(n.map(o=>o()))})})})),Pf),VA=(t,e)=>{const n=wa.get(t)||[];n.length||X0().observe(t),wa.set(t,[...n,e])},WA=(t,e)=>{const n=wa.get(t)||[];if(n.length===0)return;const o=n.filter(r=>r!==e);o.length===0?(X0().unobserve(t),wa.delete(t)):wa.set(t,o)};class Nn{static register(e,n){let o=e;da(o)&&(o=o.getDomRef()),o instanceof HTMLElement?VA(o,n):console.warn("Cannot register ResizeHandler for element",e)}static deregister(e,n){let o=e;da(o)&&(o=o.getDomRef()),o instanceof HTMLElement?WA(o,n):console.warn("Cannot deregister ResizeHandler for element",e)}}function UA(t,e,n){return p`<div class="ui5-avatar-root" tabindex="${u(this.tabindex)}" data-sap-focus-ref @keyup=${this._onkeyup} @keydown=${this._onkeydown} @focusout=${this._onfocusout} @focusin=${this._onfocusin} @click=${this._onclick} role="${u(this._role)}" aria-haspopup="${u(this._ariaHasPopup)}" aria-label="${u(this.accessibleNameText)}">${this.hasImage?qA.call(this,t,e,n):GA.call(this,t,e,n)}<slot name="badge"></slot></div>`}function qA(t,e,n){return p`<slot></slot>`}function GA(t,e,n){return p`${this.icon?YA.call(this,t,e,n):void 0}${this.initials?XA.call(this,t,e,n):void 0}`}function YA(t,e,n){return n?p`<${k("ui5-icon",e,n)} class="ui5-avatar-icon" name="${u(this.icon)}"></${k("ui5-icon",e,n)}>`:p`<ui5-icon class="ui5-avatar-icon" name="${u(this.icon)}"></ui5-icon>`}function XA(t,e,n){return n?p`<span class="ui5-avatar-initials">${u(this.validInitials)}</span><${k("ui5-icon",e,n)} class="ui5-avatar-icon ui5-avatar-icon-fallback" name="employee"></${k("ui5-icon",e,n)}>`:p`<span class="ui5-avatar-initials">${u(this.validInitials)}</span><ui5-icon class="ui5-avatar-icon ui5-avatar-icon-fallback" name="employee"></ui5-icon>`}V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const JA={packageName:"@ui5/webcomponents",fileName:"themes/Avatar.css",content:`:host(:not([hidden])) {
	display: inline-block;
	box-sizing: border-box;
	position: relative;
}

/*The ui5_hovered class is set by FileUploader to indicate hover state of the control*/

:host(:not([hidden]).ui5_hovered) {
	opacity: .7;
}

:host(:not([hidden]):not([pressed]):hover) {
	box-shadow: var(--ui5-avatar-hover-box-shadow-offset);
}

:host(:not([hidden])[focused]:not([pressed])) {
	outline: var(--_ui5_avatar_outline);
	outline-offset: var(--_ui5_avatar_focus_offset);
}

:host(:not([disabled])[interactive]) {
	cursor: pointer;
}

:host([disabled]) {
	opacity: var(--sapContent_DisabledOpacity);
}

:host(:not([hidden])[pressed]) {
	background: var(--sapButton_Active_Background);
	border-color: var(--sapButton_Active_BorderColor);
	color: var(--sapButton_Active_TextColor);
}

:host(:not([hidden])[pressed]:hover) {
	background: var(--sapButton_Selected_Hover_Background);
	border-color: var(--sapButton_Selected_Hover_BorderColor);
	color: var(--sapButton_Selected_TextColor);
}

:host {
	height: 3rem;
	width: 3rem;
	border-radius: 50%;
	border: var(--ui5-avatar-initials-border);
	outline: none;
	color: var(--ui5-avatar-initials-color);
}

.ui5-avatar-root {
	display: flex;
	align-items: center;
	justify-content: center;
	outline: none;
	height: 100%;
	width: 100%;
}

/* Sizes */

:host([_size="XS"]),
:host([size="XS"]) {
	height: 2rem;
	width: 2rem;
	min-height: 2rem;
	min-width: 2rem;
	font-size: var(--_ui5_avatar_fontsize_XS);
}

:host([_size="S"]),
:host([size="S"]) {
	min-height: 3rem;
	min-width: 3rem;
	font-size: var(--_ui5_avatar_fontsize_S);
}

:host([_size="M"]),
:host([size="M"]) {
	min-height: 4rem;
	min-width: 4rem;
	font-size: var(--_ui5_avatar_fontsize_M);
}

:host([_size="L"]),
:host([size="L"]) {
	min-height: 5rem;
	min-width: 5rem;
	font-size: var(--_ui5_avatar_fontsize_L);
}

:host([_size="XL"]),
:host([size="XL"]) {
	min-height: 7rem;
	min-width: 7rem;
	font-size: var(--_ui5_avatar_fontsize_XL);
}

/* Icon */

:host .ui5-avatar-icon {
	height: var(--_ui5_avatar_fontsize_S);
	width: var(--_ui5_avatar_fontsize_S);
	color: inherit;
}

:host([_size="XS"]) .ui5-avatar-icon,
:host([size="XS"]) .ui5-avatar-icon {
	height: var(--_ui5_avatar_icon_XS);
	width: var(--_ui5_avatar_icon_XS);
}

:host([_size="S"]) .ui5-avatar-icon,
:host([size="S"]) .ui5-avatar-icon {
	height: var(--_ui5_avatar_icon_S);
	width: var(--_ui5_avatar_icon_S);
}

:host([_size="M"]) .ui5-avatar-icon,
:host([size="M"]) .ui5-avatar-icon {
	height: var(--_ui5_avatar_icon_M);
	width: var(--_ui5_avatar_icon_M);
}

:host([_size="L"]) .ui5-avatar-icon,
:host([size="L"]) .ui5-avatar-icon {
	height: var(--_ui5_avatar_icon_L);
	width: var(--_ui5_avatar_icon_L);
}

:host([_size="XL"]) .ui5-avatar-icon,
:host([size="XL"]) .ui5-avatar-icon {
	height: var(--_ui5_avatar_icon_XL);
	width: var(--_ui5_avatar_icon_XL);
}

::slotted(*) {
	border-radius: 50%;
    width: 100%;
    height: 100%;
	pointer-events: none;
}

/* Shapes */

:host([shape="Square"]) {
	border-radius: var(--ui5-avatar-border-radius);
}

:host([shape="Square"]) ::slotted(*) {
	border-radius: calc(var(--ui5-avatar-border-radius) - var(--ui5-avatar-border-radius-img-deduction));
}

:host(:not([color-scheme])),
:host(:not([_has-image])),
:host([_color-scheme="Accent6"]),
:host([ui5-avatar][color-scheme="Accent6"]) {
	background-color: var(--ui5-avatar-accent6);
	color: var(--ui5-avatar-accent6-color);
	border-color: var(--ui5-avatar-accent6-border-color);
}

:host([_color-scheme="Accent1"]),
:host([ui5-avatar][color-scheme="Accent1"]) {
	background-color: var(--ui5-avatar-accent1);
	color: var(--ui5-avatar-accent1-color);
	border-color: var(--ui5-avatar-accent1-border-color);
}

:host([_color-scheme="Accent2"]),
:host([ui5-avatar][color-scheme="Accent2"]) {
	background-color: var(--ui5-avatar-accent2);
	color: var(--ui5-avatar-accent2-color);
	border-color: var(--ui5-avatar-accent2-border-color);
}

:host([_color-scheme="Accent3"]),
:host([ui5-avatar][color-scheme="Accent3"]) {
	background-color: var(--ui5-avatar-accent3);
	color: var(--ui5-avatar-accent3-color);
	border-color: var(--ui5-avatar-accent3-border-color);
}

:host([_color-scheme="Accent4"]),
:host([ui5-avatar][color-scheme="Accent4"]) {
	background-color: var(--ui5-avatar-accent4);
	color: var(--ui5-avatar-accent4-color);
	border-color: var(--ui5-avatar-accent4-border-color);
}

:host([_color-scheme="Accent5"]),
:host([ui5-avatar][color-scheme="Accent5"]) {
	background-color: var(--ui5-avatar-accent5);
	color: var(--ui5-avatar-accent5-color);
	border-color: var(--ui5-avatar-accent5-border-color);
}

:host([_color-scheme="Accent7"]),
:host([ui5-avatar][color-scheme="Accent7"]) {
	background-color: var(--ui5-avatar-accent7);
	color: var(--ui5-avatar-accent7-color);
	border-color: var(--ui5-avatar-accent7-border-color);
}

:host([_color-scheme="Accent8"]),
:host([ui5-avatar][color-scheme="Accent8"]) {
	background-color: var(--ui5-avatar-accent8);
	color: var(--ui5-avatar-accent8-color);
	border-color: var(--ui5-avatar-accent8-border-color);
}

:host([_color-scheme="Accent9"]),
:host([ui5-avatar][color-scheme="Accent9"]) {
	background-color: var(--ui5-avatar-accent9);
	color: var(--ui5-avatar-accent9-color);
	border-color: var(--ui5-avatar-accent9-border-color);
}

:host([_color-scheme="Accent10"]),
:host([ui5-avatar][color-scheme="Accent10"]) {
	background-color: var(--ui5-avatar-accent10);
	color: var(--ui5-avatar-accent10-color);
	border-color: var(--ui5-avatar-accent10-border-color);
}

:host([_color-scheme="Placeholder"]),
:host([ui5-avatar][color-scheme="Placeholder"]) {
	background-color: var(--ui5-avatar-placeholder);
	color: var(--ui5-avatar-placeholder-color);
	border-color: var(--ui5-avatar-placeholder-border-color);
}

:host([_has-image]) {
	color: var(--ui5-avatar-accent10-color);
	background-color: transparent;
	vertical-align: middle;
}

.ui5-avatar-initials {
	color: inherit;
}

.ui5-avatar-icon ~ .ui5-avatar-initials,
.ui5-avatar-icon ~ .ui5-avatar-icon-fallback {
	display: none;
}

.ui5-avatar-initials:not(.ui5-avatar-initials-hidden) + .ui5-avatar-icon-fallback {
	display: none;
}

.ui5-avatar-initials-hidden {
	position: absolute;
	visibility: hidden;
	z-index: 0;
	pointer-events: none;
}

/* Slotted Badge */

::slotted([slot="badge"]) {
	position: absolute;
	bottom: 0;
	right: 0;
	width: 1.125rem;
	height: 1.125rem;
	background: var(--sapButton_Emphasized_Background);
	border: var(--sapButton_Emphasized_Background);
	border-radius: 1rem;
	color: var(--sapContent_BadgeTextColor);
	justify-content: center;
	font-family: "72override", var(--sapFontFamily);
	font-size: var(--sapFontSmallSize);
}

::slotted([ui5-badge][slot="badge"]) {
	padding: 0.1875rem;
}

:host([_size="L"]) ::slotted([slot="badge"]),
:host([size="L"]) ::slotted([slot="badge"]) {
	width: 1.25rem;
	height: 1.25rem;
}

:host([_size="XL"]) ::slotted([slot="badge"]),
:host([size="XL"]) ::slotted([slot="badge"]) {
	padding: 0.375rem;
	width: 1.75rem;
	height: 1.75rem;
}

:host([shape="Square"]) ::slotted([slot="badge"]) {
	bottom: -0.125rem;
	right: -0.125rem;
}

:host([_size="L"][shape="Square"]) ::slotted([slot="badge"]),
:host([size="L"][shape="Square"]) ::slotted([slot="badge"]) {
	bottom: -0.1875rem;
	right: -0.1875rem;
}

:host([_size="XL"][shape="Square"]) ::slotted([slot="badge"]),
:host([size="XL"][shape="Square"]) ::slotted([slot="badge"]) {
	bottom: -0.25rem;
	right: -0.25rem;
}`},QA="employee",J0="M448 512H64V384q0-26 10-49.5t27.5-41T142 266t50-10h64q-27 0-50-10t-40.5-27.5T138 178t-10-50q0-26 10-49.5t27.5-41T206 10t50-10q26 0 49.5 10t41 27.5 27.5 41 10 49.5q0 27-10 50t-27.5 40.5-41 27.5-49.5 10h64q26 0 49.5 10t41 27.5 27.5 41 10 49.5v128zM96 384v96h320v-96q0-40-28-68t-68-28H192q-40 0-68 28t-28 68zm160-160q40 0 68-28t28-68-28-68-68-28-68 28-28 68 28 68 68 28zm32 192v-32h96v32h-96z";ne(QA,{pathData:J0,ltr:!1,collection:"SAP-icons-v4",packageName:"@ui5/webcomponents-icons"});const ZA="employee",Q0="M342 255q48 23 77 67.5t29 99.5v32q0 11-7.5 18.5T422 480H90q-11 0-18.5-7.5T64 454v-32q0-55 29-99.5t77-67.5l-4-5q-19-17-28.5-40.5T128 160q0-27 10-50t27.5-40.5 41-27.5T256 32t49.5 10.5 41 28T374 111t10 49q0 27-11 52t-31 43zm-163-95q0 32 22.5 54.5T256 237t54.5-22.5T333 160t-22.5-54.5T256 83t-54.5 22.5T179 160zm51 181l-25-15q-13-7-13-19v-6q-34 17-55.5 49T115 422v7h115v-88zm167 81q0-40-21-72t-56-49v6q0 12-13 19l-26 15v88h116v-7zm-71-70q11 0 18.5 7.5T352 378t-7.5 18-18.5 7h-12q-11 0-18.5-7t-7.5-18 7.5-18.5T314 352h12z";ne(ZA,{pathData:Q0,ltr:!1,collection:"SAP-icons-v5",packageName:"@ui5/webcomponents-icons"}),Ze();var yt=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},Fc;let nt=Fc=class extends Ce{constructor(){super(),this._handleResizeBound=this.handleResize.bind(this)}static async onDefine(){Fc.i18nBundle=await Re("@ui5/webcomponents")}get tabindex(){return this._tabIndex||(this._interactive?"0":"-1")}get _effectiveSize(){return this.getAttribute("size")||this._size}get _effectiveBackgroundColor(){return this.getAttribute("color-scheme")||this._colorScheme}get _role(){return this._interactive?"button":void 0}get _ariaHasPopup(){return this._getAriaHasPopup()}get _interactive(){return this.interactive&&!this.disabled}get validInitials(){const e=/^[a-zA-Zà-üÀ-Ü]{1,3}$/;return this.initials&&e.test(this.initials)?this.initials:null}get accessibleNameText(){return this.accessibleName?this.accessibleName:Fc.i18nBundle.getText(V$)||void 0}get hasImage(){return this._hasImage=!!this.image.length,this._hasImage}get initialsContainer(){return this.getDomRef().querySelector(".ui5-avatar-initials")}onBeforeRendering(){this._onclick=this._interactive?this._onClickHandler.bind(this):void 0}async onAfterRendering(){await Bs(),this.initials&&!this.icon&&this._checkInitials()}onEnterDOM(){this.initialsContainer&&Nn.register(this.initialsContainer,this._handleResizeBound)}onExitDOM(){this.initialsContainer&&Nn.deregister(this.initialsContainer,this._handleResizeBound)}handleResize(){this.initials&&!this.icon&&this._checkInitials()}_checkInitials(){const e=this.getDomRef(),n=e.querySelector(".ui5-avatar-initials");if(!this.validInitials){n.classList.add("ui5-avatar-initials-hidden");return}n&&n.classList.remove("ui5-avatar-initials-hidden"),this.initials&&this.initials.length===3&&n&&n.scrollWidth>e.scrollWidth&&n.classList.add("ui5-avatar-initials-hidden")}_onClickHandler(e){e.stopPropagation(),this._fireClick()}_onkeydown(e){this._interactive&&(tt(e)&&this._fireClick(),Le(e)&&e.preventDefault())}_onkeyup(e){this._interactive&&!e.shiftKey&&Le(e)&&this._fireClick()}_fireClick(){this.fireEvent("click"),this.pressed=!this.pressed}_onfocusout(){this.focused=!1}_onfocusin(){this._interactive&&(this.focused=!0)}_getAriaHasPopup(){if(!(!this._interactive||this.ariaHaspopup===""))return this.ariaHaspopup}};yt([h({type:Boolean})],nt.prototype,"disabled",void 0),yt([h({type:Boolean})],nt.prototype,"interactive",void 0),yt([h({type:Boolean})],nt.prototype,"focused",void 0),yt([h({type:Boolean})],nt.prototype,"pressed",void 0),yt([h()],nt.prototype,"icon",void 0),yt([h()],nt.prototype,"initials",void 0),yt([h({type:H5,defaultValue:H5.Circle})],nt.prototype,"shape",void 0),yt([h({type:Ru,defaultValue:Ru.S})],nt.prototype,"size",void 0),yt([h({type:Ru,defaultValue:Ru.S})],nt.prototype,"_size",void 0),yt([h({type:Fu,defaultValue:Fu.Accent6})],nt.prototype,"colorScheme",void 0),yt([h({type:Fu,defaultValue:Fu.Accent6})],nt.prototype,"_colorScheme",void 0),yt([h()],nt.prototype,"accessibleName",void 0),yt([h()],nt.prototype,"ariaHaspopup",void 0),yt([h({noAttribute:!0})],nt.prototype,"_tabIndex",void 0),yt([h({type:Boolean})],nt.prototype,"_hasImage",void 0),yt([ce({type:HTMLElement,default:!0})],nt.prototype,"image",void 0),yt([ce()],nt.prototype,"badge",void 0),nt=Fc=yt([fe({tag:"ui5-avatar",languageAware:!0,renderer:et,styles:JA,template:UA,dependencies:[Cn]}),re("click")],nt),nt.define();const KA=nt;var Ff;(function(t){t.Auto="Auto",t.Vertical="Vertical",t.Horizontal="Horizontal",t.Paging="Paging"})(Ff||(Ff={}));const hr=Ff;var Rf;(function(t){t.Static="Static",t.Cyclic="Cyclic"})(Rf||(Rf={}));const el=Rf;class Z0{constructor(e,n){if(!e.isUI5Element)throw new Error("The root web component must be a UI5 Element instance");if(this.rootWebComponent=e,this.rootWebComponent.addEventListener("keydown",this._onkeydown.bind(this)),this.rootWebComponent._onComponentStateFinalized=()=>{this._init()},typeof n.getItemsCallback!="function")throw new Error("getItemsCallback is required");this._getItems=n.getItemsCallback,this._currentIndex=n.currentIndex||0,this._rowSize=n.rowSize||1,this._behavior=n.behavior||el.Static,this._navigationMode=n.navigationMode||hr.Auto,this._affectedPropertiesNames=n.affectedPropertiesNames||[],this._skipItemsSize=n.skipItemsSize||null}setCurrentItem(e){const n=this._getItems().indexOf(e);if(n===-1){console.warn("The provided item is not managed by ItemNavigation",e);return}this._currentIndex=n,this._applyTabIndex()}setRowSize(e){this._rowSize=e}_init(){this._getItems().forEach((e,n)=>{e._tabIndex=n===this._currentIndex?"0":"-1"})}_onkeydown(e){if(!this._canNavigate())return;const n=this._navigationMode===hr.Horizontal||this._navigationMode===hr.Auto,o=this._navigationMode===hr.Vertical||this._navigationMode===hr.Auto,r=this.rootWebComponent.effectiveDir==="rtl";if(r&&fa(e)&&n)this._handleRight();else if(r&&ga(e)&&n)this._handleLeft();else if(fa(e)&&n)this._handleLeft();else if(ga(e)&&n)this._handleRight();else if(dr(e)&&o)this._handleUp();else if(xo(e)&&o)this._handleDown();else if(Xs(e))this._handleHome();else if(Js(e))this._handleEnd();else if(Tc(e))this._handlePageUp();else if(Ic(e))this._handlePageDown();else return;e.preventDefault(),this._applyTabIndex(),this._focusCurrentItem()}_handleUp(){const e=this._getItems().length;if(this._currentIndex-this._rowSize>=0){this._currentIndex-=this._rowSize;return}if(this._behavior===el.Cyclic){const n=this._currentIndex%this._rowSize,o=n===0?this._rowSize-1:n-1,r=Math.ceil(e/this._rowSize);let i=o+(r-1)*this._rowSize;i>e-1&&(i-=this._rowSize),this._currentIndex=i}else this._currentIndex=0}_handleDown(){const e=this._getItems().length;if(this._currentIndex+this._rowSize<e){this._currentIndex+=this._rowSize;return}if(this._behavior===el.Cyclic){const o=(this._currentIndex%this._rowSize+1)%this._rowSize;this._currentIndex=o}else this._currentIndex=e-1}_handleLeft(){const e=this._getItems().length;if(this._currentIndex>0){this._currentIndex-=1;return}this._behavior===el.Cyclic&&(this._currentIndex=e-1)}_handleRight(){const e=this._getItems().length;if(this._currentIndex<e-1){this._currentIndex+=1;return}this._behavior===el.Cyclic&&(this._currentIndex=0)}_handleHome(){const e=this._rowSize>1?this._rowSize:this._getItems().length;this._currentIndex-=this._currentIndex%e}_handleEnd(){const e=this._rowSize>1?this._rowSize:this._getItems().length;this._currentIndex+=e-1-this._currentIndex%e}_handlePageUp(){this._rowSize>1||this._handlePageUpFlat()}_handlePageDown(){this._rowSize>1||this._handlePageDownFlat()}_handlePageUpFlat(){if(this._skipItemsSize===null){this._currentIndex-=this._currentIndex;return}this._currentIndex+1>this._skipItemsSize?this._currentIndex-=this._skipItemsSize:this._currentIndex-=this._currentIndex}_handlePageDownFlat(){if(this._skipItemsSize===null){this._currentIndex=this._getItems().length-1;return}this._getItems().length-this._currentIndex-1>this._skipItemsSize?this._currentIndex+=this._skipItemsSize:this._currentIndex=this._getItems().length-1}_applyTabIndex(){const e=this._getItems();for(let n=0;n<e.length;n++)e[n]._tabIndex=n===this._currentIndex?"0":"-1";this._affectedPropertiesNames.forEach(n=>{const o=this.rootWebComponent[n];this.rootWebComponent[n]=Array.isArray(o)?[...o]:{...o}})}_focusCurrentItem(){const e=this._getCurrentItem();e&&e.focus()}_canNavigate(){const e=this._getCurrentItem(),n=Ju();return e&&e===n}_getCurrentItem(){const e=this._getItems();if(!e.length)return;for(;this._currentIndex>=e.length;)this._currentIndex-=this._rowSize;this._currentIndex<0&&(this._currentIndex=0);const n=e[this._currentIndex];if(!n)return;if(da(n))return n.getFocusDomRef();const o=this.rootWebComponent.getDomRef();if(o&&n.id)return o.querySelector(`#${n.id}`)}}const K0=new WeakMap,so=(t,e)=>{K0.set(t,e)},tl=t=>K0.get(t),eE=t=>Array.from(t).filter(e=>e.nodeType!==Node.COMMENT_NODE&&(e.nodeType!==Node.TEXT_NODE||(e.nodeValue||"").trim().length!==0)).length>0;function tE(t,e,n){return p`<button type="button" class="ui5-button-root" ?disabled="${this.disabled}" data-sap-focus-ref  @focusout=${this._onfocusout} @focusin=${this._onfocusin} @click=${this._onclick} @mousedown=${this._onmousedown} @mouseup=${this._onmouseup} @keydown=${this._onkeydown} @keyup=${this._onkeyup} @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" tabindex=${u(this.tabIndexValue)} aria-expanded="${u(this.accessibilityAttributes.expanded)}" aria-controls="${u(this.accessibilityAttributes.controls)}" aria-haspopup="${u(this.accessibilityAttributes.hasPopup)}" aria-label="${u(this.ariaLabelText)}" title="${u(this.buttonTitle)}" part="button">${this.icon?nE.call(this,t,e,n):void 0}<span id="${u(this._id)}-content" class="ui5-button-text"><bdi><slot></slot></bdi></span>${this.hasButtonType?oE.call(this,t,e,n):void 0}</button> `}function nE(t,e,n){return n?p`<${k("ui5-icon",e,n)} class="ui5-button-icon" name="${u(this.icon)}" accessible-role="${u(this.iconRole)}" part="icon" ?show-tooltip=${this.showIconTooltip}></${k("ui5-icon",e,n)}>`:p`<ui5-icon class="ui5-button-icon" name="${u(this.icon)}" accessible-role="${u(this.iconRole)}" part="icon" ?show-tooltip=${this.showIconTooltip}></ui5-icon>`}function oE(t,e,n){return p`<span class="ui5-hidden-text">${u(this.buttonTypeText)}</span>`}V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const rE={packageName:"@ui5/webcomponents",fileName:"themes/Button.css",content:`:host {
	vertical-align: middle;
}
.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}
:host(:not([hidden])) {
	display: inline-block;
}
:host {
	min-width: var(--_ui5_button_base_min_width);
	height: var(--_ui5_button_base_height);
	line-height: normal;
	font-family: var(--_ui5_button_fontFamily);
	font-size: var(--sapFontSize);
	text-shadow: var(--_ui5_button_text_shadow);
	border-radius: var(--_ui5_button_border_radius);
	cursor: pointer;
	background-color: var(--sapButton_Background);
	border: var(--sapButton_BorderWidth) solid var(--sapButton_BorderColor);
	color: var(--sapButton_TextColor);
	box-sizing: border-box;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.ui5-button-root {
	min-width: inherit;
	cursor: inherit;
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	outline: none;
	padding: 0 var(--_ui5_button_base_padding);
	position: relative;
	background: transparent;
	border: none;
	color: inherit;
	text-shadow: inherit;
	font: inherit;
	white-space: inherit;
	overflow: inherit;
	text-overflow: inherit;
	letter-spacing: inherit;
	word-spacing: inherit;
	line-height: inherit;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
}
:host(:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),
:host(:not([hidden]):not([disabled]).ui5_hovered) {
	background: var(--sapButton_Hover_Background);
	box-shadow: var(--sapContent_Interaction_Shadow);
	border: 1px solid var(--sapButton_Hover_BorderColor);
	color: var(--sapButton_Hover_TextColor);
}
.ui5-button-icon {
	color: inherit;
	flex-shrink: 0;
}
:host([icon-end]) .ui5-button-root {
	flex-direction: row-reverse;
}
:host([icon-end]) .ui5-button-icon {
	margin-inline-start: var(--_ui5_button_base_icon_margin);
}
:host([icon-only]) .ui5-button-root {
	min-width: auto;
	padding: 0;
}
:host([icon-only]) .ui5-button-text {
	display: none;
}
.ui5-button-text {
	outline: none;
	position: relative;
	white-space: inherit;
	overflow: inherit;
	text-overflow: inherit;
}
:host([has-icon]:not([icon-end])) .ui5-button-text {
	margin-inline-start: var(--_ui5_button_base_icon_margin);
}
:host([has-icon][icon-end]) .ui5-button-text {
	margin-inline-start: 0;
}
:host([disabled]) {
	opacity: var(--sapContent_DisabledOpacity);
	pointer-events: unset;
	cursor: default;
}
:host([has-icon]:not([icon-only])) .ui5-button-text{
	/* calculating the minimum width by removing the icon size  */
	min-width: calc(var(--_ui5_button_base_min_width) - var(--_ui5_button_base_icon_margin) - 1rem);
}
:host([disabled]:active) {
	pointer-events: none;
}
:host([focused]) .ui5-button-root:after {
	content: "";
	position: absolute;
	box-sizing: border-box;
	left: 0.0625rem;
	top: 0.0625rem;
	right: 0.0625rem;
	bottom: 0.0625rem;
	border: var(--_ui5_button_focused_border);
	border-radius: var(--_ui5_button_focused_border_radius);
}
:host([design="Emphasized"][focused]) .ui5-button-root:after {
	border-color: var(--_ui5_button_emphasized_focused_border_color);
}
:host([design="Emphasized"][focused]) .ui5-button-root:before {
	content: "";
	position: absolute;
	box-sizing: border-box;
	left: 0.0625rem;
	top: 0.0625rem;
	right: 0.0625rem;
	bottom: 0.0625rem;
	border: var(--_ui5_button_emphasized_focused_border_before);
	border-radius: var(--_ui5_button_focused_border_radius);
}
.ui5-button-root::-moz-focus-inner {
	border: 0;
}
bdi {
	display: block;
	white-space: inherit;
	overflow: inherit;
	text-overflow: inherit;
}
:host([ui5-button][active]:not([disabled]):not([non-interactive])) {
	background-image: none;
	background-color: var(--sapButton_Active_Background);
	border-color: var(--sapButton_Active_BorderColor);
	color: var(--sapButton_Active_TextColor);
}
:host([design="Positive"]) {
	background-color: var(--sapButton_Accept_Background);
	border-color: var(--sapButton_Accept_BorderColor);
	color: var(--sapButton_Accept_TextColor);
}
/*The ui5_hovered class is set by FileUploader to indicate hover state of the control*/
:host([design="Positive"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),
:host([design="Positive"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered) {
	background-color: var(--sapButton_Accept_Hover_Background);
	border-color: var(--sapButton_Accept_Hover_BorderColor);
	box-shadow: var(--sapContent_Positive_Shadow);
	color: var(--sapButton_Accept_Hover_TextColor);
}
:host([ui5-button][design="Positive"][active]:not([non-interactive])) {
	background-color: var(--sapButton_Accept_Active_Background);
	border-color: var(--sapButton_Accept_Active_BorderColor);
	color: var(--sapButton_Accept_Active_TextColor);
}
:host([design="Negative"]) {
	background-color: var(--sapButton_Reject_Background);
	border-color: var(--sapButton_Reject_BorderColor);
	color: var(--sapButton_Reject_TextColor);
}
/*The ui5_hovered class is set by FileUploader to indicate hover state of the control*/
:host([design="Negative"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),
:host([design="Negative"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered) {
	background-color: var(--sapButton_Reject_Hover_Background);
	border-color: var(--sapButton_Reject_Hover_BorderColor);
	box-shadow: var(--sapContent_Negative_Shadow);
	color: var(--sapButton_Reject_Hover_TextColor);
}
:host([ui5-button][design="Negative"][active]:not([non-interactive])) {
	background-color: var(--sapButton_Reject_Active_Background);
	border-color: var(--sapButton_Reject_Active_BorderColor);
	color: var(--sapButton_Reject_Active_TextColor);
}
:host([design="Attention"]) {
	background-color: var(--sapButton_Attention_Background);
	border-color: var(--sapButton_Attention_BorderColor);
	color: var(--sapButton_Attention_TextColor);
}
/*The ui5_hovered class is set by FileUploader to indicate hover state of the control*/
:host([design="Attention"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),
:host([design="Attention"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered) {
	background-color: var(--sapButton_Attention_Hover_Background);
	border-color: var(--sapButton_Attention_Hover_BorderColor);
	color: var(--sapButton_Attention_Hover_TextColor);
	box-shadow: var(--sapContent_Critical_Shadow)
}
:host([ui5-button][design="Attention"][active]:not([non-interactive])) {
	background-color: var(--sapButton_Attention_Active_Background);
	border-color: var(--sapButton_Attention_Active_BorderColor);
	color: var(--sapButton_Attention_Active_TextColor);
}
:host([design="Emphasized"]) {
	background-color: var(--sapButton_Emphasized_Background);
	border-color: var(--sapButton_Emphasized_BorderColor);
	border-width: var(--_ui5_button_emphasized_border_width);
	color: var(--sapButton_Emphasized_TextColor);
	font-weight: var(--_ui5_button_emphasized_font_weight);
}
/*The ui5_hovered class is set by FileUploader to indicate hover state of the control*/
:host([design="Emphasized"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),
:host([design="Emphasized"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered) {
	background-color: var(--sapButton_Emphasized_Hover_Background);
	border-color: var(--sapButton_Emphasized_Hover_BorderColor);
	border-width: var(--_ui5_button_emphasized_border_width);
	color: var(--sapButton_Emphasized_Hover_TextColor);
	box-shadow: none;
}
:host([ui5-button][design="Empasized"][active]:not([non-interactive])) {
	background-color: var(--sapButton_Emphasized_Active_Background);
	border-color: var(--sapButton_Emphasized_Active_BorderColor);
	color: var(--sapButton_Emphasized_Active_TextColor);
}
:host([design="Emphasized"][focused]) .ui5-button-root:after {
	border-color: var(--sapContent_ContrastFocusColor);
	outline: none;
}
:host([design="Transparent"]) {
	background-color: var(--sapButton_Lite_Background);
	color: var(--sapButton_Lite_TextColor);
	border-color: var(--sapButton_Lite_BorderColor);
}
/*The ui5_hovered class is set by FileUploader to indicate hover state of the control*/
:host([design="Transparent"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),
:host([design="Transparent"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered) {
	background-color: var(--sapButton_Lite_Hover_Background);
	border-color: var(--sapButton_Lite_Hover_BorderColor);
	box-shadow: var(--sapContent_Interaction_Shadow);
	color: var(--sapButton_Lite_Hover_TextColor);
}
:host([ui5-button][design="Transparent"][active]:not([non-interactive])) {
	background-color: var(--sapButton_Lite_Active_Background);
	border-color: var(--sapButton_Lite_Active_BorderColor);
	color: var(--sapButton_Active_TextColor);
}
/* SegmentedButton and ToggleButton */
:host([ui5-segmented-button-item][active][focused]) .ui5-button-root:after,
:host([pressed][focused]) .ui5-button-root:after {
	border-color: var(--_ui5_button_pressed_focused_border_color);
	outline: none;
}
:host([ui5-segmented-button-item][focused]:not(:last-child)) .ui5-button-root:after {
	border-top-right-radius: var(--_ui5_button_focused_inner_border_radius);
	border-bottom-right-radius: var(--_ui5_button_focused_inner_border_radius);
}
:host([ui5-segmented-button-item][focused]:not(:first-child)) .ui5-button-root:after {
	border-top-left-radius: var(--_ui5_button_focused_inner_border_radius);
	border-bottom-left-radius: var(--_ui5_button_focused_inner_border_radius);
}
`};var ot=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},nl;let e1=!1,ol=null,Ne=nl=class extends Ce{constructor(){super(),this._deactivate=()=>{ol&&(ol.active=!1)},e1||(document.addEventListener("mouseup",this._deactivate),e1=!0);const e=n=>{so(n,"button"),!this.nonInteractive&&(this.active=!0)};this._ontouchstart={handleEvent:e,passive:!0}}onEnterDOM(){this._isTouch=(me()||Xp())&&!tx()}async onBeforeRendering(){const e=Xe("FormSupport");this.type!==Qi.Button&&!e&&console.warn('In order for the "type" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";'),this.submits&&!e&&console.warn('In order for the "submits" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";'),this.iconOnly=this.isIconOnly,this.hasIcon=!!this.icon,this.buttonTitle=this.tooltip||await F$(this.icon)}_onclick(e){if(this.nonInteractive)return;so(e,"button");const n=Xe("FormSupport");n&&this._isSubmit&&n.triggerFormSubmit(this),n&&this._isReset&&n.triggerFormReset(this),Du()&&this.getDomRef()?.focus()}_onmousedown(e){this.nonInteractive||this._isTouch||(so(e,"button"),this.active=!0,ol=this)}_ontouchend(e){this.disabled&&(e.preventDefault(),e.stopPropagation()),this.active=!1,ol&&(ol.active=!1)}_onmouseup(e){so(e,"button")}_onkeydown(e){so(e,"button"),(Le(e)||tt(e))&&(this.active=!0)}_onkeyup(e){(Le(e)||tt(e))&&(this.active=!1)}_onfocusout(){this.nonInteractive||(this.active=!1,ea()&&(this.focused=!1))}_onfocusin(e){this.nonInteractive||(so(e,"button"),ea()&&(this.focused=!0))}get hasButtonType(){return this.design!==ws.Default&&this.design!==ws.Transparent}get iconRole(){return this.icon?"presentation":""}get isIconOnly(){return!eE(this.text)}static typeTextMappings(){return{Positive:U$,Negative:q$,Emphasized:G$}}get buttonTypeText(){return nl.i18nBundle.getText(nl.typeTextMappings()[this.design])}get tabIndexValue(){const e=this.getAttribute("tabindex");return e||(this.nonInteractive?"-1":this._tabIndex)}get showIconTooltip(){return this.iconOnly&&!this.tooltip}get ariaLabelText(){return cr(this)}get _isSubmit(){return this.type===Qi.Submit||this.submits}get _isReset(){return this.type===Qi.Reset}static async onDefine(){nl.i18nBundle=await Re("@ui5/webcomponents")}};ot([h({type:ws,defaultValue:ws.Default})],Ne.prototype,"design",void 0),ot([h({type:Boolean})],Ne.prototype,"disabled",void 0),ot([h()],Ne.prototype,"icon",void 0),ot([h({type:Boolean})],Ne.prototype,"iconEnd",void 0),ot([h({type:Boolean})],Ne.prototype,"submits",void 0),ot([h()],Ne.prototype,"tooltip",void 0),ot([h({defaultValue:void 0})],Ne.prototype,"accessibleName",void 0),ot([h({defaultValue:""})],Ne.prototype,"accessibleNameRef",void 0),ot([h({type:Object})],Ne.prototype,"accessibilityAttributes",void 0),ot([h({type:Qi,defaultValue:Qi.Button})],Ne.prototype,"type",void 0),ot([h({type:Boolean})],Ne.prototype,"active",void 0),ot([h({type:Boolean})],Ne.prototype,"iconOnly",void 0),ot([h({type:Boolean})],Ne.prototype,"focused",void 0),ot([h({type:Boolean})],Ne.prototype,"hasIcon",void 0),ot([h({type:Boolean})],Ne.prototype,"nonInteractive",void 0),ot([h({noAttribute:!0})],Ne.prototype,"buttonTitle",void 0),ot([h({type:Object})],Ne.prototype,"_iconSettings",void 0),ot([h({defaultValue:"0",noAttribute:!0})],Ne.prototype,"_tabIndex",void 0),ot([h({type:Boolean})],Ne.prototype,"_isTouch",void 0),ot([ce({type:Node,default:!0})],Ne.prototype,"text",void 0),Ne=nl=ot([fe({tag:"ui5-button",languageAware:!0,renderer:et,template:tE,styles:rE,dependencies:[Cn]}),re("click")],Ne),Ne.define();const ci=Ne;function iE(t,e,n){return p`<div class="${Y(this.classes.root)}" aria-label="${u(this.accInfo.label)}" role="toolbar" part="bar"><div class="ui5-bar-content-container ui5-bar-startcontent-container"><slot name="startContent"></slot></div><div class="ui5-bar-content-container ui5-bar-midcontent-container"><slot></slot></div><div class="ui5-bar-content-container ui5-bar-endcontent-container"><slot name="endContent"></slot></div></div>`}const Lf={packageName:"@ui5/webcomponents-fiori",fileName:"themes/sap_fiori_3/parameters-bundle.css",content:`[data-ui5-compact-size][_ui5host], [data-ui5-compact-size] [_ui5host],
.ui5-content-density-compact[_ui5host], .ui5-content-density-compact [_ui5host],
.sapUiSizeCompact[_ui5host], .sapUiSizeCompact [_ui5host] {
	--_ui5_bar_base_height: 2.5rem;
	--_ui5_bar_subheader_height: 2.25rem;
}
:root [_ui5host] {
	--_ui5_bar_base_height: 2.75rem;
	--_ui5_bar_subheader_height: 3rem;
	--_ui5_bar-start-container-padding-start: 0.75rem;
	--_ui5_bar-mid-container-padding-start-end: 0.5rem;
	--_ui5_bar-end-container-padding-end: 0.75rem;
}
:root [_ui5host] {
	--_ui5_fcl_solid_bg: var(--sapShell_Background);
	--_ui5_fcl_column_border: none;
	--_ui5_fcl_decoration_top: linear-gradient(to top, var(--sapHighlightColor), transparent);
	--_ui5_fcl_decoration_bottom: linear-gradient(to bottom, var(--sapHighlightColor), transparent);
}
:root [_ui5host] {\r
    --sapIllus_BrandColorPrimary: var(--sapContent_Illustrative_Color1);\r
    --sapIllus_BrandColorSecondary: var(--sapContent_Illustrative_Color2);\r
    --sapIllus_StrokeDetailColor: var(--sapContent_Illustrative_Color4);\r
    --sapIllus_Layering1: var(--sapContent_Illustrative_Color5);\r
    --sapIllus_Layering2: var(--sapContent_Illustrative_Color6);\r
    --sapIllus_BackgroundColor: var(--sapContent_Illustrative_Color7);\r
    --sapIllus_ObjectFillColor: var(--sapContent_Illustrative_Color8);\r
    --sapIllus_AccentColor: var(--sapContent_Illustrative_Color3);\r
    --sapIllus_NoColor: none;\r
    --sapIllus_PatternShadow: url(#sapIllus_PatternShadow);\r
    --sapIllus_PatternHighlight: url(#sapIllus_PatternHighlight);\r
  }
:root [_ui5host] {
	--_ui5_media_gallery_overflow_btn_background:  var(--sapButton_Neutral_Background);
	--_ui5_media_gallery_overflow_btn_color:  var(--sapBaseColor);
	--_ui5_media_gallery_overflow_btn_border:  none;
}
:root [_ui5host] {
	--_ui5_media_gallery_thumbnail_border: 1px solid var(--sapContent_ForegroundColor);
	--_ui5_media_gallery_thumbnail_selected_border: 2px solid var(--sapSelectedColor);
	--_ui5_media_gallery_thumbnail_focus_outline: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	--_ui5_media_gallery_item_overlay_box_shadow: inset 0px 0px 80px rgba(0, 0, 0, 0.2);
}
:root [_ui5host] {
	--_ui5_page_list_bg: var(--sapGroup_ContentBackground);
	--_ui5_page_transparent_bg: transparent;
}
:root [_ui5host] {
	--_ui5_product_switch_item_width: 11.25rem;
	--_ui5_product_switch_item_height: 7rem;
	--_ui5_product_switch_item_outline_width: .0625rem;
	--_ui5_product_switch_item_outline_color: var(--sapContent_FocusColor);
	--_ui5_product_switch_item_outline: var(--_ui5_product_switch_item_outline_width) var(--_ui5_product_switch_item_outline_color) dotted;
	--_ui5_product_switch_item_active_outline_color: var(--sapContent_ContrastFocusColor);
	--_ui5_product_switch_item_outline_offset: -.1875rem;
	--_ui5_product_switch_item_outline_offset_positive: .1875rem;
}
:root [_ui5host] {\r
	--_ui5_shellbar_root_height: 2.75rem;\r
	--_ui5_shellbar_logo_outline_color: var(--sapContent_ContrastFocusColor);\r
	--_ui5_shellbar_logo_outline: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--_ui5_shellbar_logo_outline_color);\r
	--_ui5_shellbar_outline_offset: -0.0625rem;\r
	--_ui5_shellbar_logo_outline_offset: var(--_ui5_shellbar_outline_offset);\r
	--_ui5_shellbar_button_box_shadow: none;\r
	--_ui5_shellbar_button_border: none;\r
	--_ui5_shellbar_button_border_radius: 0.25rem;\r
	--_ui5_shellbar_button_active_color: var(--sapShell_Active_TextColor);\r
	--_ui5_shellbar_logo_outline_border_radius: 0;\r
	--_ui5_shellbar_copilot_stop_color1: #C0D9F2;\r
	--_ui5_shellbar_copilot_stop_color2: #FFFFFF;\r
	--_ui5_shellbar_copilot_focus_offset: 0;\r
	--_ui5_shellbar_search_button_size: 2.25rem;\r
	--_ui5_shellbar_search_field_height: 2.25rem;\r
	--_ui5_shellbar_search_button_border_radius: 0.25rem;\r
	--_ui5_shellbar_search_field_background: var(--sapShellColor);\r
	--_ui5_shellbar_search_field_border: 1px solid var(--sapShell_InteractiveBorderColor);\r
	--_ui5_shellbar_search_field_color: var(--sapShell_TextColor);\r
	--_ui5_shellbar_search_field_outline_focused: 1px dotted var(--sapContent_ContrastFocusColor);\r
	--_ui5_shellbar_overflow_container_middle_height: 2.5rem;\r
	--_ui5_shellbar_menu_button_title_font_size: 0.75rem;\r
}
:root [_ui5host] {\r
	--_ui5_shellbar_button_focused_border: 0.0625rem dotted var(--sapContent_ContrastFocusColor);\r
}
/* fiori 3 */
:root [_ui5host] {
	--_ui5_side_navigation_width: 15rem;
	--_ui5_side_navigation_box_shadow: var(--sapContent_Shadow0);
	--_ui5_side_navigation_popover_box_shadow: var(--_ui5_popover_box_shadow);
	--_ui5_side_navigation_separator_backgound: var(--sapList_GroupHeaderBorderColor);
	--_ui5_side_navigation_item_icon_color: var(--sapContent_IconColor);
	--_ui5_side_navigation_icon_size: 1.125rem;
	--_ui5_side_navigation_toggle_icon_color: var(--sapContent_NonInteractiveIconColor);
	--_ui5_side_navigation_toggle_icon_size: 1rem;
	--_ui5_side_navigation_collapsed_state_width: 3.25rem;
	--_ui5_side_navigation_indent_step: 1.25rem;
	--_ui5_side_navigation_indent_step_in_popover: 1.25rem;
	--_ui5_side_navigation_icon_padding_inline_start: 1.125rem;
	--_ui5_side_navigation_icon_padding_inline_end: 0.5rem;
	--_ui5_side_navigation_collapsed_state_divider_padding: 0 0.5rem;
	--_ui5_side_navigation_divider_padding: 0 1rem;
	--_ui5_side_navigation_divider_height: 0.125rem;
	--_ui5_side_navigation_divider_margin: 0.25rem 0;
	--_ui5_side_navigation_border_inline_end: var(--sapList_BorderWidth) solid var(--sapList_GroupHeaderBorderColor);
	--_ui5_side_navigation_border_radius: 0;
	--_ui5_side_navigation_container_padding: 0;
	--_ui5_side_navigation_container_padding_in_popover: 0.5rem;
	--_ui5_side_navigation_item_padding: 0 1rem;
	--_ui5_side_navigation_item_gap: 0;
	--_ui5_side_navigation_item_border_width: 0.0625rem;
	--_ui5_side_navigation_item_border_radius: 0;
	--_ui5_side_navigation_item_height: 2.75rem;
	--_ui5_side_navigation_item_level_1_font: "72override", var(--sapFontFamily);
	--_ui5_side_navigation_item_level_1_margin_bottom_in_popover: 0;
	--_ui5_side_navigation_item_transition: none;
	--_ui5_side_navigation_item_selection_indicator_display: none;
	--_ui5_side_navigation_item_selection_indicator_reserved_space_has_children: 0;
	--_ui5_side_navigation_subitem_selection_indicator_reserved_space_no_children: 0;
}
:root [_ui5host] {
	--_ui5_TimelineItem_arrow_size: 1.625rem;
	--_ui5_TimelineItem_bubble_border_width: 0.0625rem;
	--_ui5_TimelineItem_bubble_border_style: dotted;
	--_ui5_TimelineItem_bubble_border_radius: 0.25rem;
	--_ui5_TimelineItem_bubble_border_color: var(--sapList_BorderColor);
	--_ui5_TimelineItem_bubble_border_top: -0.125rem;
	--_ui5_TimelineItem_bubble_border_right: -0.125rem;
	--_ui5_TimelineItem_bubble_border_bottom: -0.125rem;
	--_ui5_TimelineItem_bubble_border_left: -0.625rem;
	--_ui5_TimelineItem_bubble_rtl_left_offset: -0.125rem;
	--_ui5_TimelineItem_bubble_rtl_right_offset: -0.625rem;
	--_ui5_TimelineItem_bubble_focus_border_radius: 0;
	--_ui5_TimelineItem_horizontal_bubble_focus_top_offset: -0.625rem;
	--_ui5_TimelineItem_horizontal_bubble_focus_left_offset: -0.125rem;

	--_ui5_TimelineItem_bubble_content_padding: var(--_ui5_tl_bubble_padding);
	--_ui5_TimelineItem_bubble_content_subtitle_padding_top: 0.375rem;
	--_ui5_TimelineItem_bubble_content_description_padding_top: 0.75rem;
}
:root [_ui5host] {
	--ui5_upload_collection_drag_overlay_border: 0.125rem dashed var(--sapContent_ForegroundBorderColor);
	--ui5_upload_collection_drop_overlay_border: 0.125rem solid var(--sapContent_DragAndDropActiveColor);
	--ui5_upload_collection_drop_overlay_background: transparent;
	--ui5_upload_collection_button_margin_block_end: 0;
	--ui5_upload_collection_last_button_inline_end: 0;
	--ui5_upload_collection_small_size_buttons_margin_block_start: 0.75rem;
}
:root [_ui5host] {
	--_ui5_vsd_header_container: 2.75rem;
	--_ui5_vsd_sub_header_container_height: 2.75rem;
	--_ui5_vsd_content_li_padding: 0.375rem;
	--_ui5_vsd_content_height: 23.4375rem;
	--_ui5_vsd_expand_content_height: 26.1875rem;
}
:root [_ui5host] {
    --_ui5_wiz_content_item_wrapper_padding: 0rem;
    --_ui5_wiz_content_item_wrapper_bg: var(--sapBackgroundColor);
}
:root [_ui5host] {
	--_ui5_wiz_tab_focus_outline: 1px dotted var(--sapContent_FocusColor);
	--_ui5_wiz_tab_selected_bg: var(--sapSelectedColor);
	--_ui5_wiz_tab_border: 1px solid var(--sapSelectedColor);
	--_ui5_wiz_tab_selection_line: var(--sapSelectedColor);
	--_ui5_wiz_tab_icon_color: var(--sapSelectedColor);
	--_ui5_wiz_tab_active_separator_color: var(--sapSelectedColor);
	--_ui5_wiz_tab_title_color: var(--sapContent_LabelColor);
	--_ui5_wiz_tab_title_font_family: var(--sapFontFamily);
	--_ui5_wiz_tab_focus_border_radius: 0;
}
`};V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents-fiori","sap_fiori_3",async()=>Lf);const aE={packageName:"@ui5/webcomponents-fiori",fileName:"themes/Bar.css",content:`:host {
	background-color: var(--sapPageHeader_Background);
	height: var(--_ui5_bar_base_height);
	width: 100%;
	box-shadow: var(--sapContent_HeaderShadow);
	display: block;
}

.ui5-bar-root {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: inherit;
	width: inherit;
	background-color: inherit;
	box-shadow: inherit;
	border-radius: inherit;
}

.ui5-bar-root .ui5-bar-startcontent-container {
	padding-inline-start: var(--_ui5_bar-start-container-padding-start);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
}

.ui5-bar-root .ui5-bar-content-container {
	min-width: calc(30% - calc(var(--_ui5_bar-start-container-padding-start)
							 + var(--_ui5_bar-end-container-padding-end)
						  + (2*var(--_ui5_bar-mid-container-padding-start-end))));
}

.ui5-bar-root.ui5-bar-root-shrinked .ui5-bar-content-container {
	min-width: 0px;
	overflow: hidden;
	height: 100%;
}

.ui5-bar-root .ui5-bar-endcontent-container {
	padding-inline-end: var(--_ui5_bar-end-container-padding-end);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
}

.ui5-bar-root .ui5-bar-midcontent-container {
	padding: 0 var(--_ui5_bar-mid-container-padding-start-end);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
}

:host([design="Footer"]){
	background-color: var(--sapPageFooter_Background);
	border-top: 0.0625rem solid var(--sapPageFooter_BorderColor);
	box-shadow: none;
}

:host([design="Subheader"]){
	height: var(--_ui5_bar_subheader_height);
}

:host([design="FloatingFooter"]){
	border-radius: var(--sapElement_BorderCornerRadius);
	background-color: var(--sapPageFooter_Background);
	box-shadow: var(--sapContent_Shadow1);
	border: none;
}

::slotted(*) {
	margin: 0 0.25rem;
}
`};var rl=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let di=class extends Ce{get accInfo(){return{label:this.design}}constructor(){super(),this._handleResizeBound=this.handleResize.bind(this)}handleResize(){const e=this.getDomRef(),n=e.offsetWidth,o=Array.from(e.children).some(r=>r.offsetWidth>n/3);e.classList.toggle("ui5-bar-root-shrinked",o)}get classes(){return{root:{"ui5-bar-root":!0}}}onBeforeRendering(){[...this.startContent,...this.middleContent,...this.endContent].forEach(e=>e.classList.add("ui5-bar-content"))}onEnterDOM(){Nn.register(this,this._handleResizeBound),this.getDomRef().querySelectorAll(".ui5-bar-content-container").forEach(e=>{Nn.register(e,this._handleResizeBound)},this)}onExitDOM(){Nn.deregister(this,this._handleResizeBound),this.getDomRef().querySelectorAll(".ui5-bar-content-container").forEach(e=>{Nn.deregister(e,this._handleResizeBound)},this)}};rl([h({type:bp,defaultValue:bp.Header})],di.prototype,"design",void 0),rl([ce({type:HTMLElement})],di.prototype,"startContent",void 0),rl([ce({type:HTMLElement,default:!0})],di.prototype,"middleContent",void 0),rl([ce({type:HTMLElement})],di.prototype,"endContent",void 0),di=rl([fe({tag:"ui5-bar",fastNavigation:!0,renderer:et,styles:aE,template:iE})],di),di.define();const _i=bt("ui5-bar",["design"],[],["endContent","startContent"],[]);_i.displayName="Bar",_i.defaultProps={design:bp.Header};const Zn=(t,e,n)=>Math.min(Math.max(t,e),n),Rc=t=>t.nodeName==="SLOT"?!1:t.offsetWidth<=0&&t.offsetHeight<=0||t.style&&t.style.visibility==="hidden",sE=/^(?:a|area)$/i,lE=/^(?:input|select|textarea|button)$/i,uE=t=>{if(t.disabled)return!1;const e=t.getAttribute("tabindex");return e!=null?parseInt(e)>=0:lE.test(t.nodeName)||sE.test(t.nodeName)&&!!t.href},cE=t=>t.hasAttribute("data-ui5-focus-trap"),t1=async(t,e)=>!t||Rc(t)?null:Nf(t,!0,e),dE=async(t,e)=>!t||Rc(t)?null:Nf(t,!1,e),_E=t=>t.hasAttribute("data-ui5-focus-redirect")||!Rc(t),Nf=async(t,e,n)=>{let o,r,i=-1;t.shadowRoot?o=e?t.shadowRoot.firstChild:t.shadowRoot.lastChild:t instanceof HTMLSlotElement&&t.assignedNodes()?(r=t.assignedNodes(),i=e?0:r.length-1,o=r[i]):n?o=t:o=e?t.firstElementChild:t.lastElementChild;let a;for(;o;){const s=o;if(da(o)&&(o=await o.getFocusDomRefAsync()),!o)return null;if(o.nodeType===1&&_E(o)&&!cE(o)){if(uE(o))return o&&typeof o.focus=="function"?o:null;if(a=await Nf(o,e),a)return a&&typeof a.focus=="function"?a:null}o=e?s.nextSibling:s.previousSibling,r&&!r[i].contains(o)&&(i=e?i+1:i-1,o=r[i])}return null},pE="ui5-content-native-scrollbars",n1=()=>document.body.classList.contains(pE);function hE(t,e,n){return p`<section style="${ie(this.styles.root)}" class="${Y(this.classes.root)}" role="${u(this._role)}" aria-modal="${u(this._ariaModal)}" aria-label="${u(this._ariaLabel)}" aria-labelledby="${u(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span><div style="${ie(this.styles.content)}" class="${Y(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div><span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section> `}function fE(t,e,n){return p`<div class="ui5-block-layer" ?hidden=${this._blockLayerHidden} tabindex="0" style="${ie(this.styles.blockLayer)}" @keydown="${this._preventBlockLayerFocus}" @mousedown="${this._preventBlockLayerFocus}"></div>`}let Dn=[];const o1=(t,e=[])=>{Dn.some(n=>n.instance===t)||Dn.push({instance:t,parentPopovers:e}),a1(),Dn.length===1&&vE()},r1=t=>{Dn=Dn.filter(e=>e.instance!==t),a1(),Dn.length||mE()},gE=()=>[...Dn],i1=t=>{Dn.length&&Qs(t)&&Dn[Dn.length-1].instance.close(!0)},vE=()=>{document.addEventListener("keydown",i1)},mE=()=>{document.removeEventListener("keydown",i1)},a1=()=>{let t,e=!1;for(let n=Dn.length-1;n>=0;n--)t=Dn[n].instance,!e&&t.isModal?(t.isTopModalPopup=!0,e=!0):t.isTopModalPopup=!1};V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const bE={packageName:"@ui5/webcomponents",fileName:"themes/Popup.css",content:`:host {
    min-width: 1px; /** So that it can always get focus **/
    display: none;
    position: fixed;
}
`};V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const yE={packageName:"@ui5/webcomponents",fileName:"themes/PopupStaticAreaStyles.css",content:`.ui5-block-layer {
	display: none;
	position: fixed;
	background-color: var(--sapBlockLayer_Background);
	opacity: 0.6;
	top: -500px;
	left: -500px;
	right: -500px;
	bottom: -500px;
	outline: none;
	pointer-events: all;
	z-index: -1;
}

.ui5-block-layer:not([hidden]) {
	display: inline-block;
}`};V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const CE={packageName:"@ui5/webcomponents",fileName:"themes/PopupGlobal.css",content:`.ui5-popup-scroll-blocker {
	overflow: hidden;
}
`};var wn=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},il;(()=>{Is("data-ui5-popup-scroll-blocker")||Ts(CE,"data-ui5-popup-scroll-blocker")})();const Lc=new Set;let Jt=il=class extends Ce{constructor(){super(),this._resizeHandler=this._resize.bind(this)}onBeforeRendering(){this._blockLayerHidden=!this.isOpen()||!this.isTopModalPopup}onEnterDOM(){Nn.register(this,this._resizeHandler)}onExitDOM(){this.isOpen()&&(il.unblockPageScrolling(this),this._removeOpenedPopup()),Nn.deregister(this,this._resizeHandler)}get _displayProp(){return"block"}_resize(){this.mediaRange=Hu.getCurrentRange(Hu.RANGESETS.RANGE_4STEPS,this.getDomRef().offsetWidth)}_preventBlockLayerFocus(e){e.preventDefault()}static blockPageScrolling(e){Lc.add(e),Lc.size===1&&document.documentElement.classList.add("ui5-popup-scroll-blocker")}static unblockPageScrolling(e){Lc.delete(e),Lc.size===0&&document.documentElement.classList.remove("ui5-popup-scroll-blocker")}_scroll(e){this.fireEvent("scroll",{scrollTop:e.target.scrollTop,targetRef:e.target})}_onkeydown(e){const n=e.target===this._root&&va(e),o=tt(e)&&!this.isOpen();(n||o)&&e.preventDefault()}_onfocusout(e){e.relatedTarget||(this._shouldFocusRoot=!0)}_onmousedown(e){Du()||this._root.removeAttribute("tabindex"),this.shadowRoot.contains(e.target)?this._shouldFocusRoot=!0:this._shouldFocusRoot=!1}_onmouseup(){Du()||(this._root.tabIndex=-1),this._shouldFocusRoot&&(ex()&&this._root.focus(),this._shouldFocusRoot=!1)}async forwardToFirst(){const e=await t1(this);e?e.focus():this._root.focus()}async forwardToLast(){const e=await dE(this);e?e.focus():this._root.focus()}async applyInitialFocus(){await this.applyFocus()}async applyFocus(){if(await this._waitForDomRef(),this.getRootNode()===this)return;const e=this.getRootNode().getElementById(this.initialFocus)||document.getElementById(this.initialFocus)||await t1(this)||this._root;e&&(e===this._root&&(e.tabIndex=-1),e.focus())}isOpen(){return this.opened}isFocusWithin(){return iB(this._root)}async _open(e){this.fireEvent("before-open",{},!0,!1)&&(this.isModal&&!this.shouldHideBackdrop&&(this.getStaticAreaItemDomRef(),this._blockLayerHidden=!1,il.blockPageScrolling(this)),this._zIndex=yb(),this.style.zIndex=this._zIndex?.toString()||"",this._focusedElementBeforeOpen=vb(),this._show(),this._addOpenedPopup(),this.opened=!0,this.open=!0,await Bs(),!this._disableInitialFocus&&!e&&await this.applyInitialFocus(),this.fireEvent("after-open",{},!1,!1))}_addOpenedPopup(){o1(this)}close(e=!1,n=!1,o=!1){!this.opened||!this.fireEvent("before-close",{escPressed:e},!0,!1)||(this.isModal&&(this._blockLayerHidden=!0,il.unblockPageScrolling(this)),this.hide(),this.opened=!1,this.open=!1,n||this._removeOpenedPopup(),!this.preventFocusRestore&&!o&&this.resetFocus(),this.fireEvent("after-close",{},!1,!1))}_removeOpenedPopup(){r1(this)}resetFocus(){this._focusedElementBeforeOpen&&(this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null)}_show(){this.style.display=this._displayProp}hide(){this.style.display="none"}get _ariaLabel(){return cr(this)}get _root(){return this.shadowRoot.querySelector(".ui5-popup-root")}get _role(){return this.accessibleRole===Yr.None?void 0:this.accessibleRole.toLowerCase()}get _ariaModal(){return this.accessibleRole===Yr.None?void 0:"true"}get contentDOM(){return this.shadowRoot.querySelector(".ui5-popup-content")}get styles(){return{root:{},content:{},blockLayer:{zIndex:this._zIndex?this._zIndex-1:""}}}get classes(){return{root:{"ui5-popup-root":!0,"ui5-content-native-scrollbars":n1()},content:{"ui5-popup-content":!0}}}};wn([h()],Jt.prototype,"initialFocus",void 0),wn([h({type:Boolean})],Jt.prototype,"preventFocusRestore",void 0),wn([h({type:Boolean})],Jt.prototype,"open",void 0),wn([h({type:Boolean,noAttribute:!0})],Jt.prototype,"opened",void 0),wn([h({defaultValue:void 0})],Jt.prototype,"accessibleName",void 0),wn([h({defaultValue:""})],Jt.prototype,"accessibleNameRef",void 0),wn([h({type:Yr,defaultValue:Yr.Dialog})],Jt.prototype,"accessibleRole",void 0),wn([h()],Jt.prototype,"mediaRange",void 0),wn([h({type:Boolean})],Jt.prototype,"_disableInitialFocus",void 0),wn([h({type:Boolean})],Jt.prototype,"_blockLayerHidden",void 0),wn([h({type:Boolean,noAttribute:!0})],Jt.prototype,"isTopModalPopup",void 0),wn([ce({type:HTMLElement,default:!0})],Jt.prototype,"content",void 0),Jt=il=wn([fe({renderer:et,styles:bE,template:hE,staticAreaTemplate:fE,staticAreaStyles:yE}),re("before-open"),re("after-open"),re("before-close",{escPressed:{type:Boolean}}),re("after-close"),re("scroll")],Jt);const s1=Jt,wE="resize-corner",l1="M384 224v32q0 12-10 22L182 470q-10 10-22 10h-32zM224 480l160-160v32q0 12-10 22l-96 96q-10 10-22 10h-32zm160-64v32q0 12-10 22t-22 10h-32z";ne(wE,{pathData:l1,ltr:!1,collection:"SAP-icons-v4",packageName:"@ui5/webcomponents-icons"});const SE="resize-corner",u1="M202 512q-11 0-18.5-7.5T176 486q0-10 8-18l204-205q7-7 18-7t18.5 7.5T432 282t-7 18L220 505q-7 7-18 7zm128 0q-11 0-18.5-7.5T304 486q0-10 8-18l76-77q7-7 18-7t18.5 7.5T432 410t-7 18l-77 77q-7 7-18 7z";ne(SE,{pathData:u1,ltr:!1,collection:"SAP-icons-v5",packageName:"@ui5/webcomponents-icons"}),Ze();const c1={key:"ICON_DECLINE",defaultText:"Decline"},d1={key:"ICON_ERROR",defaultText:"Error"},_1={key:"ICON_EXPAND_GROUP",defaultText:"Expand Group"},p1={key:"ICON_REFRESH",defaultText:"Refresh"},kE="error",h1="M512 256q0 53-20.5 100t-55 81.5-81 54.5-99.5 20-100-20.5-81.5-55T20 355 0 256q0-54 20-100.5t55-81T156.5 20 256 0t99.5 20T437 75t55 81.5 20 99.5zM399 364q6-6 0-12l-86-86q-6-6 0-12l81-81q6-6 0-12l-37-37q-2-2-6-2t-6 2l-83 82q-1 3-6 3-3 0-6-3l-84-83q-1-2-6-2-4 0-6 2l-37 37q-6 6 0 12l83 82q6 6 0 12l-83 82q-2 2-2.5 6t2.5 6l36 37q4 2 6 2 4 0 6-2l85-84q2-2 6-2t6 2l88 88q4 2 6 2t6-2z";ne(kE,{pathData:h1,ltr:!1,accData:d1,collection:"SAP-icons-v4",packageName:"@ui5/webcomponents-icons"});const xE="error",f1="M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zm45 256l74-73q9-11 9-23 0-13-9.5-22.5T352 128q-12 0-23 9l-73 74-73-74q-10-9-23-9t-22.5 9.5T128 160q0 12 9 23l74 73-74 73q-9 10-9 23t9.5 22.5T160 384t23-9l73-74 73 74q11 9 23 9 13 0 22.5-9.5T384 352t-9-23z";ne(xE,{pathData:f1,ltr:!1,accData:d1,collection:"SAP-icons-v5",packageName:"@ui5/webcomponents-icons"}),Ze();const BE="alert",g1="M501 374q5 10 7.5 19.5T512 412v5q0 31-23 47t-50 16H74q-13 0-26-4t-23.5-12-17-20T0 417q0-13 4-22.5t9-20.5L198 38q21-38 61-38 38 0 59 38zM257 127q-13 0-23.5 8T223 161q1 7 2 12 3 25 4.5 48t3.5 61q0 11 7.5 16t16.5 5q22 0 23-21l2-36 9-85q0-18-10.5-26t-23.5-8zm0 299q20 0 31.5-12t11.5-32q0-19-11.5-31T257 339t-31.5 12-11.5 31q0 20 11.5 32t31.5 12z";ne(BE,{pathData:g1,ltr:!1,collection:"SAP-icons-v4",packageName:"@ui5/webcomponents-icons"});const TE="alert",v1="M505 399q7 13 7 27 0 21-15.5 37.5T456 480H56q-25 0-40.5-16.5T0 426q0-14 7-27L208 59q17-27 48-27 14 0 27 6.5T304 59zM288 176q0-14-9-23t-23-9-23 9-9 23v96q0 14 9 23t23 9 23-9 9-23v-96zm-32 240q14 0 23-9t9-23-9-23-23-9-23 9-9 23 9 23 23 9z";ne(TE,{pathData:v1,ltr:!1,collection:"SAP-icons-v5",packageName:"@ui5/webcomponents-icons"}),Ze();const IE="sys-enter-2",m1="M512 256q0 54-20 100.5t-54.5 81T356 492t-100 20q-54 0-100.5-20t-81-55T20 355.5 0 256t20.5-100 55-81.5T157 20t99-20q53 0 100 20t81.5 54.5T492 156t20 100zm-118-87q4-8-1-13l-36-36q-3-4-8-4t-8 5L237 294q-3 1-4 0l-70-52q-4-3-7-3t-4.5 2-2.5 3l-29 41q-6 8 2 14l113 95q2 2 7 2t8-4z";ne(IE,{pathData:m1,ltr:!0,collection:"SAP-icons-v4",packageName:"@ui5/webcomponents-icons"});const $E="sys-enter-2",b1="M256 0q53 0 100 20t81.5 54.5T492 156t20 100-20 100-54.5 81.5T356 492t-100 20-100-20-81.5-54.5T20 356 0 256t20-100 54.5-81.5T156 20 256 0zm150 183q10-9 10-23 0-13-9.5-22.5T384 128t-22 9L186 308l-68-63q-9-9-22-9t-22.5 9.5T64 268q0 15 10 24l91 83q9 9 21 9 13 0 23-9z";ne($E,{pathData:b1,ltr:!0,collection:"SAP-icons-v5",packageName:"@ui5/webcomponents-icons"}),Ze();const AE="information",y1="M0 256q0-53 20.5-100t55-81.5T157 20t99-20q54 0 100.5 20t81 55 54.5 81.5 20 99.5q0 54-20 100.5t-54.5 81T356 492t-100 20q-54 0-100.5-20t-81-55T20 355.5 0 256zm192 112v33h128v-33h-32V215q0-6-7-6h-88v31h32v128h-33zm34-201q14 11 30 11 17 0 29.5-11.5T298 138q0-19-13-31-12-12-29-12-19 0-30.5 12.5T214 138q0 17 12 29z";ne(AE,{pathData:y1,ltr:!1,collection:"SAP-icons-v4",packageName:"@ui5/webcomponents-icons"});const EE="information",C1="M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zm0 160q14 0 23-9t9-23-9-23-23-9-23 9-9 23 9 23 23 9zm32 64q0-14-9-23t-23-9-23 9-9 23v160q0 14 9 23t23 9 23-9 9-23V224z";ne(EE,{pathData:C1,ltr:!1,collection:"SAP-icons-v5",packageName:"@ui5/webcomponents-icons"}),Ze();function PE(t,e,n){return p`<section style="${ie(this.styles.root)}" class="${Y(this.classes.root)}" role="${u(this._role)}" aria-modal="${u(this._ariaModal)}" aria-label="${u(this._ariaLabel)}" aria-labelledby="${u(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span>${this._displayHeader?FE.call(this,t,e,n):void 0}<div style="${ie(this.styles.content)}" class="${Y(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div>${this.footer.length?jE.call(this,t,e,n):void 0}${this._showResizeHandle?VE.call(this,t,e,n):void 0}<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section> `}function FE(t,e,n){return p`<header><div class="ui5-popup-header-root" id="ui5-popup-header" role="group" aria-describedby=${u(this.effectiveAriaDescribedBy)} aria-roledescription=${u(this.ariaRoleDescriptionHeaderText)} tabindex="${u(this._headerTabIndex)}" @keydown="${this._onDragOrResizeKeyDown}" @mousedown="${this._onDragMouseDown}" part="header" state="${u(this.state)}">${this.hasValueState?RE.call(this,t,e,n):void 0}${this.header.length?LE.call(this,t,e,n):NE.call(this,t,e,n)}${this.resizable?DE.call(this,t,e,n):ME.call(this,t,e,n)}</div></header>`}function RE(t,e,n){return n?p`<${k("ui5-icon",e,n)} class="ui5-dialog-value-state-icon" name="${u(this._dialogStateIcon)}"></${k("ui5-icon",e,n)}>`:p`<ui5-icon class="ui5-dialog-value-state-icon" name="${u(this._dialogStateIcon)}"></ui5-icon>`}function LE(t,e,n){return p`<slot name="header"></slot>`}function NE(t,e,n){return p`<h1 id="ui5-popup-header-text" class="ui5-popup-header-text">${u(this.headerText)}</h1>`}function DE(t,e,n){return p`${this.draggable?OE.call(this,t,e,n):HE.call(this,t,e,n)}`}function OE(t,e,n){return p`<span id="${u(this._id)}-descr" aria-hidden="true" class="ui5-hidden-text">${u(this.ariaDescribedByHeaderTextDraggableAndResizable)}</span>`}function HE(t,e,n){return p`<span id="${u(this._id)}-descr" aria-hidden="true" class="ui5-hidden-text">${u(this.ariaDescribedByHeaderTextResizable)}</span>`}function ME(t,e,n){return p`${this.draggable?zE.call(this,t,e,n):void 0}`}function zE(t,e,n){return p`<span id="${u(this._id)}-descr" aria-hidden="true" class="ui5-hidden-text">${u(this.ariaDescribedByHeaderTextDraggable)}</span>`}function jE(t,e,n){return p`<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`}function VE(t,e,n){return n?p`<${k("ui5-icon",e,n)} name="resize-corner" class="ui5-popup-resize-handle" @mousedown="${this._onResizeMouseDown}"></${k("ui5-icon",e,n)}>`:p`<ui5-icon name="resize-corner" class="ui5-popup-resize-handle" @mousedown="${this._onResizeMouseDown}"></ui5-icon>`}V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const Df={packageName:"@ui5/webcomponents",fileName:"themes/BrowserScrollbar.css",content:`:not(.ui5-content-native-scrollbars) ::-webkit-scrollbar:horizontal {
	height: var(--sapScrollBar_Dimension);
}

:not(.ui5-content-native-scrollbars) ::-webkit-scrollbar:vertical {
	width: var(--sapScrollBar_Dimension);
}

:not(.ui5-content-native-scrollbars) ::-webkit-scrollbar {
	background-color: var(--sapScrollBar_TrackColor);
	border-left: var(--browser_scrollbar_border);
}

:not(.ui5-content-native-scrollbars) ::-webkit-scrollbar-thumb {
	border-radius: var(--browser_scrollbar_border_radius);
	background-color: var(--sapScrollBar_FaceColor);
}

:not(.ui5-content-native-scrollbars) ::-webkit-scrollbar-thumb:hover {
	background-color: var(--sapScrollBar_Hover_FaceColor);
}

:not(.ui5-content-native-scrollbars) ::-webkit-scrollbar-corner {
	background-color: var(--sapScrollBar_TrackColor);
}`};V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const w1={packageName:"@ui5/webcomponents",fileName:"themes/PopupsCommon.css",content:`:host {
    display: none;
    position: fixed;
    background: var(--sapGroup_ContentBackground);
    border-radius: var(--_ui5_popup_border_radius);
    min-height: 2rem;
    box-sizing: border-box;
}

.ui5-popup-root {
    background: inherit;
    border-radius: inherit;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    outline: none;
}

.ui5-popup-root .ui5-popup-header-root {
    color: var(--sapPageHeader_TextColor);
    box-shadow: var(--_ui5_popup_header_shadow);
    border-bottom: var(--_ui5_popup_header_border);
    margin-bottom: 0.125rem;
}

.ui5-popup-content {
    color: var(--sapTextColor);
}

.ui5-popup-footer-root {
    background: var(--sapPageFooter_Background);
    border-top: 1px solid var(--sapPageFooter_BorderColor);
    color: var(--sapPageFooter_TextColor);
}

.ui5-popup-header-root,
.ui5-popup-footer-root,
:host([header-text]) .ui5-popup-header-text {
    margin: 0;
    font-size: 1rem;
    font-family: "72override", var(--_ui5_popup_header_font_family);
    display: flex;
    justify-content: center;
    align-items: center;
}

.ui5-popup-header-root .ui5-popup-header-text {
	font-weight: var(--_ui5_popup_header_font_weight);
}

.ui5-popup-content {
    overflow: auto;

    /* Consider how to make this top level */
    box-sizing: border-box;
}

:host([header-text]) .ui5-popup-header-text {
    text-align: center;
    min-height: var(--_ui5_popup_default_header_height);
    max-height: var(--_ui5_popup_default_header_height);
    line-height: var(--_ui5_popup_default_header_height);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    display: inline-block;
}

:host([header-text]) .ui5-popup-header-root {
	justify-content: var(--_ui5_popup_header_prop_header_text_alignment);
}

:host(:not([header-text])) .ui5-popup-header-text {
    display: none;
}

:host([disable-scrolling]) .ui5-popup-content {
    overflow: hidden;
}

/*** Responsive paddings for the content***/

:host([media-range="S"]) .ui5-popup-content {
	padding: 1rem var(--_ui5_popup_content_padding_s);
}

:host([media-range="M"]) .ui5-popup-content,
:host([media-range="L"]) .ui5-popup-content {
	padding: 1rem var(--_ui5_popup_content_padding_m_l);
}

:host([media-range="XL"]) .ui5-popup-content {
	padding: 1rem var(--_ui5_popup_content_padding_xl);
}

.ui5-popup-header-root {
	background: var(--_ui5_popup_header_background);
}

/*** Responsive paddings for the Header and Footer ***/

:host([media-range="S"]) .ui5-popup-header-root,
:host([media-range="S"]) .ui5-popup-footer-root {
	padding-left: var(--_ui5_popup_header_footer_padding_s);
	padding-right: var(--_ui5_popup_header_footer_padding_s);
}

:host([media-range="M"]) .ui5-popup-header-root,
:host([media-range="L"]) .ui5-popup-header-root,
:host([media-range="M"]) .ui5-popup-footer-root,
:host([media-range="L"]) .ui5-popup-footer-root {
	padding-left: var(--_ui5_popup_header_footer_padding_m_l);
	padding-right: var(--_ui5_popup_header_footer_padding_m_l);
}

:host([media-range="XL"]) .ui5-popup-header-root,
:host([media-range="XL"]) .ui5-popup-footer-root {
	padding-left: var(--_ui5_popup_header_footer_padding_xl);
	padding-right: var(--_ui5_popup_header_footer_padding_xl);
}
`};V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const WE={packageName:"@ui5/webcomponents",fileName:"themes/Dialog.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}

:host {
	min-width: 20rem;
	min-height: 6rem;
	max-height: 94%;
	max-width: 90%;
	flex-direction: column;
	box-shadow: var(--sapContent_Shadow3);
	border-radius: var(--sapElement_BorderCornerRadius);
}

:host([stretch]) {
	width: 90%;
	height: 94%;
}

:host([stretch][on-phone]) {
	width: 100%;
	height: 100%;
	max-height: 100%;
	max-width: 100%;
	border-radius: 0;
}

:host([draggable]) .ui5-popup-header-root,
:host([draggable]) ::slotted([slot="header"]) {
	cursor: move;
}

:host([draggable]) .ui5-popup-header-root * {
	cursor: auto;
}

:host([draggable]) .ui5-popup-root {
	user-select: text;
}

.ui5-popup-root {
	display: flex;
	flex-direction: column;
	max-width: 100vw;
}

.ui5-popup-header-root {
	position: relative;
}

:host([state="Error"]) .ui5-popup-header-root {
	box-shadow: var(--_ui5_dialog_header_error_state_box_shadow);
}

:host([state="Information"]) .ui5-popup-header-root {
	box-shadow: var(--_ui5_dialog_header_information_state_box_shadow);
}

:host([state="Success"]) .ui5-popup-header-root {
	box-shadow: var(--_ui5_dialog_header_success_state_box_shadow);
}

:host([state="Warning"]) .ui5-popup-header-root {
	box-shadow: var(--_ui5_dialog_header_warning_state_box_shadow);
}

.ui5-dialog-value-state-icon {
	margin-inline-end: 0.5rem;
}

:host([state="Error"]) .ui5-dialog-value-state-icon {
	color: var(--_ui5_dialog_header_error_state_icon_color);
}

:host([state="Information"]) .ui5-dialog-value-state-icon {
	color: var(--_ui5_dialog_header_information_state_icon_color);
}

:host([state="Success"]) .ui5-dialog-value-state-icon {
	color: var(--_ui5_dialog_header_success_state_icon_color);
}

:host([state="Warning"]) .ui5-dialog-value-state-icon {
	color: var(--_ui5_dialog_header_warning_state_icon_color);
}

.ui5-popup-header-root {
	outline: none;
}

.ui5-popup-header-root:focus:after {
	content: '';
	position: absolute;
	left: var(--_ui5_dialog_header_focus_left_offset);
	bottom: var(--_ui5_dialog_header_focus_bottom_offset);
	right: var(--_ui5_dialog_header_focus_right_offset);
	top: var(--_ui5_dialog_header_focus_top_offset);
	border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	border-radius: var(--_ui5_dialog_header_border_radius) var(--_ui5_dialog_header_border_radius) 0 0;
	pointer-events: none;
}

:host([stretch]) .ui5-popup-content {
	width: 100%;
	height: 100%;
}

.ui5-popup-content {
	min-height: var(--_ui5_dialog_content_min_height);
	flex: 1 1 auto;
}

.ui5-popup-resize-handle {
	position: absolute;
	bottom: var(--_ui5_dialog_resize_handle_bottom);
	inset-inline-end: var(--_ui5_dialog_resize_handle_right);
	cursor: var(--_ui5_dialog_resize_cursor);
	color: var(--_ui5_dialog_resize_handle_color);
}

:host ::slotted([slot="footer"]) {
	height: var(--_ui5_dialog_footer_height);
}

:host ::slotted([slot="footer"][ui5-bar][design="Footer"]) {
	border-top: none;
}`};var lo=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},Io;const fr=16,UE={[z.Error]:"error",[z.Warning]:"alert",[z.Success]:"sys-enter-2",[z.Information]:"information"};let Sn=Io=class extends s1{constructor(){super(),this._draggedOrResized=!1,this._revertSize=()=>{Object.assign(this.style,{top:"",left:"",width:"",height:""})},this._screenResizeHandler=this._screenResize.bind(this),this._dragMouseMoveHandler=this._onDragMouseMove.bind(this),this._dragMouseUpHandler=this._onDragMouseUp.bind(this),this._resizeMouseMoveHandler=this._onResizeMouseMove.bind(this),this._resizeMouseUpHandler=this._onResizeMouseUp.bind(this),this._dragStartHandler=this._handleDragStart.bind(this)}static async onDefine(){Io.i18nBundle=await Re("@ui5/webcomponents")}static _isHeader(e){return e.classList.contains("ui5-popup-header-root")||e.getAttribute("slot")==="header"}async show(e=!1){await super._open(e)}get isModal(){return!0}get shouldHideBackdrop(){return!1}get _ariaLabelledBy(){let e;return this.headerText!==""&&!this._ariaLabel&&(e="ui5-popup-header-text"),e}get ariaRoleDescriptionHeaderText(){return this.resizable||this.draggable?Io.i18nBundle.getText(SA):void 0}get effectiveAriaDescribedBy(){return this.resizable||this.draggable?`${this._id}-descr`:void 0}get ariaDescribedByHeaderTextResizable(){return Io.i18nBundle.getText(kA)}get ariaDescribedByHeaderTextDraggable(){return Io.i18nBundle.getText(xA)}get ariaDescribedByHeaderTextDraggableAndResizable(){return Io.i18nBundle.getText(BA)}get _displayProp(){return"flex"}get _displayHeader(){return this.header.length||this.headerText||this.draggable||this.resizable}get _movable(){return!this.stretch&&this.onDesktop&&(this.draggable||this.resizable)}get _headerTabIndex(){return this._movable?"0":void 0}get _showResizeHandle(){return this.resizable&&this.onDesktop}get _minHeight(){let e=Number.parseInt(window.getComputedStyle(this.contentDOM).minHeight);const n=this._root.querySelector(".ui5-popup-header-root");n&&(e+=n.offsetHeight);const o=this._root.querySelector(".ui5-popup-footer-root");return o&&(e+=o.offsetHeight),e}get hasValueState(){return this.state!==z.None}get _dialogStateIcon(){return UE[this.state]}get _role(){if(this.accessibleRole!==Yr.None)return this.state===z.Error||this.state===z.Warning?Yr.AlertDialog.toLowerCase():this.accessibleRole.toLowerCase()}_show(){super._show(),this._center()}onBeforeRendering(){super.onBeforeRendering(),this._isRTL=this.effectiveDir==="rtl",this.onPhone=me(),this.onDesktop=ea()}onAfterRendering(){!this.isOpen()&&this.open?this.show():this.isOpen()&&!this.open&&this.close()}onEnterDOM(){super.onEnterDOM(),this._attachScreenResizeHandler(),this.addEventListener("dragstart",this._dragStartHandler)}onExitDOM(){super.onExitDOM(),this._detachScreenResizeHandler(),this.removeEventListener("dragstart",this._dragStartHandler)}_resize(){super._resize(),this._draggedOrResized||this._center()}_screenResize(){this._center()}_attachScreenResizeHandler(){this._screenResizeHandlerAttached||(window.addEventListener("resize",this._screenResizeHandler),this._screenResizeHandlerAttached=!0)}_detachScreenResizeHandler(){this._screenResizeHandlerAttached&&(window.removeEventListener("resize",this._screenResizeHandler),this._screenResizeHandlerAttached=!1)}_center(){const e=window.innerHeight-this.offsetHeight,n=window.innerWidth-this.offsetWidth;Object.assign(this.style,{top:`${Math.round(e/2)}px`,left:`${Math.round(n/2)}px`})}_onDragMouseDown(e){if(!this._movable||!this.draggable||!Io._isHeader(e.target))return;e.preventDefault();const{top:n,left:o}=this.getBoundingClientRect(),{width:r,height:i}=window.getComputedStyle(this);Object.assign(this.style,{top:`${n}px`,left:`${o}px`,width:`${Math.round(Number.parseFloat(r)*100)/100}px`,height:`${Math.round(Number.parseFloat(i)*100)/100}px`}),this._x=e.clientX,this._y=e.clientY,this._draggedOrResized=!0,this._attachMouseDragHandlers()}_onDragMouseMove(e){e.preventDefault();const{clientX:n,clientY:o}=e,r=this._x-n,i=this._y-o,{left:a,top:s}=this.getBoundingClientRect();Object.assign(this.style,{left:`${Math.floor(a-r)}px`,top:`${Math.floor(s-i)}px`}),this._x=n,this._y=o}_onDragMouseUp(){delete this._x,delete this._y,this._detachMouseDragHandlers()}_onDragOrResizeKeyDown(e){if(!(!this._movable||!Io._isHeader(e.target))){if(this.draggable&&[dr,xo,fa,ga].some(n=>n(e))){this._dragWithEvent(e);return}this.resizable&&[S0,k0,x0,B0].some(n=>n(e))&&this._resizeWithEvent(e)}}_dragWithEvent(e){const{top:n,left:o,width:r,height:i}=this.getBoundingClientRect();let a=0,s="top";switch(!0){case dr(e):a=n-fr,s="top";break;case xo(e):a=n+fr,s="top";break;case fa(e):a=o-fr,s="left";break;case ga(e):a=o+fr,s="left";break}a=Zn(a,0,s==="left"?window.innerWidth-r:window.innerHeight-i),this.style[s]=`${a}px`}_resizeWithEvent(e){this._draggedOrResized=!0,this.addEventListener("ui5-before-close",this._revertSize,{once:!0});const{top:n,left:o}=this.getBoundingClientRect(),r=window.getComputedStyle(this),i=Number.parseFloat(r.minWidth),a=window.innerWidth-o,s=window.innerHeight-n;let l=Number.parseFloat(r.width),c=Number.parseFloat(r.height);switch(!0){case S0(e):c-=fr;break;case k0(e):c+=fr;break;case x0(e):l-=fr;break;case B0(e):l+=fr;break}l=Zn(l,i,a),c=Zn(c,this._minHeight,s),Object.assign(this.style,{width:`${l}px`,height:`${c}px`})}_attachMouseDragHandlers(){window.addEventListener("mousemove",this._dragMouseMoveHandler),window.addEventListener("mouseup",this._dragMouseUpHandler)}_detachMouseDragHandlers(){window.removeEventListener("mousemove",this._dragMouseMoveHandler),window.removeEventListener("mouseup",this._dragMouseUpHandler)}_onResizeMouseDown(e){if(!this._movable||!this.resizable)return;e.preventDefault();const{top:n,left:o}=this.getBoundingClientRect(),{width:r,height:i,minWidth:a}=window.getComputedStyle(this);this._initialX=e.clientX,this._initialY=e.clientY,this._initialWidth=Number.parseFloat(r),this._initialHeight=Number.parseFloat(i),this._initialTop=n,this._initialLeft=o,this._minWidth=Number.parseFloat(a),this._cachedMinHeight=this._minHeight,Object.assign(this.style,{top:`${n}px`,left:`${o}px`}),this._draggedOrResized=!0,this._attachMouseResizeHandlers()}_onResizeMouseMove(e){const{clientX:n,clientY:o}=e;let r,i;this._isRTL?(r=Zn(this._initialWidth-(n-this._initialX),this._minWidth,this._initialLeft+this._initialWidth),i=Zn(this._initialLeft+(n-this._initialX),0,this._initialX+this._initialWidth-this._minWidth)):r=Zn(this._initialWidth+(n-this._initialX),this._minWidth,window.innerWidth-this._initialLeft);const a=Zn(this._initialHeight+(o-this._initialY),this._cachedMinHeight,window.innerHeight-this._initialTop);Object.assign(this.style,{height:`${a}px`,width:`${r}px`,left:i?`${i}px`:void 0})}_onResizeMouseUp(){delete this._initialX,delete this._initialY,delete this._initialWidth,delete this._initialHeight,delete this._initialTop,delete this._initialLeft,delete this._minWidth,delete this._cachedMinHeight,this._detachMouseResizeHandlers()}_handleDragStart(e){this.draggable&&e.preventDefault()}_attachMouseResizeHandlers(){window.addEventListener("mousemove",this._resizeMouseMoveHandler),window.addEventListener("mouseup",this._resizeMouseUpHandler),this.addEventListener("ui5-before-close",this._revertSize,{once:!0})}_detachMouseResizeHandlers(){window.removeEventListener("mousemove",this._resizeMouseMoveHandler),window.removeEventListener("mouseup",this._resizeMouseUpHandler)}};lo([h()],Sn.prototype,"headerText",void 0),lo([h({type:Boolean})],Sn.prototype,"stretch",void 0),lo([h({type:Boolean})],Sn.prototype,"draggable",void 0),lo([h({type:Boolean})],Sn.prototype,"resizable",void 0),lo([h({type:z,defaultValue:z.None})],Sn.prototype,"state",void 0),lo([h({type:Boolean})],Sn.prototype,"onPhone",void 0),lo([h({type:Boolean})],Sn.prototype,"onDesktop",void 0),lo([ce()],Sn.prototype,"header",void 0),lo([ce()],Sn.prototype,"footer",void 0),Sn=Io=lo([fe({tag:"ui5-dialog",template:PE,styles:[Df,w1,WE],dependencies:[Cn]})],Sn),Sn.define();const qE=Sn;class S1{static isValid(e){return!1}static attributeToProperty(e){return e}static propertyToAttribute(e){return e===null?null:String(e)}static valuesAreEqual(e,n){return e===n}static generateTypeAccessors(e){Object.keys(e).forEach(n=>{Object.defineProperty(this,n,{get(){return e[n]}})})}static get isDataTypeClass(){return!0}}class kn extends S1{static isValid(e){return Number.isInteger(e)}static attributeToProperty(e){return parseInt(e)}}function GE(t,e,n){return p`<div class="${Y(this.classes.root)}">${this._isBusy?YE.call(this,t,e,n):void 0}<slot></slot>${this._isBusy?JE.call(this,t,e,n):void 0}</div>`}function YE(t,e,n){return p`<div class="ui5-busy-indicator-busy-area" title="${u(this.ariaTitle)}" tabindex="0" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Busy" aria-labelledby="${u(this.labelId)}" data-sap-focus-ref><div class="ui5-busy-indicator-circles-wrapper"><div class="ui5-busy-indicator-circle circle-animation-0"></div><div class="ui5-busy-indicator-circle circle-animation-1"></div><div class="ui5-busy-indicator-circle circle-animation-2"></div></div>${this.text?XE.call(this,t,e,n):void 0}</div>`}function XE(t,e,n){return n?p`<${k("ui5-label",e,n)} id="${u(this._id)}-label" class="ui5-busy-indicator-text">${u(this.text)}</${k("ui5-label",e,n)}>`:p`<ui5-label id="${u(this._id)}-label" class="ui5-busy-indicator-text">${u(this.text)}</ui5-label>`}function JE(t,e,n){return p`<span data-ui5-focus-redirect tabindex="0" @focusin="${this._redirectFocus}"></span>`}V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const QE={packageName:"@ui5/webcomponents",fileName:"themes/BusyIndicator.css",content:`:host(:not([hidden])) {
	display: inline-block;
}

:host([_is-busy]) {
	color: var(--_ui5_busy_indicator_color);
}

:host([size="Small"]) .ui5-busy-indicator-root {
	min-width: 1.5rem;
	min-height: .5rem;
}

:host([size="Small"][text]:not([text=""])) .ui5-busy-indicator-root {
	min-height: 1.75rem;
}

:host([size="Small"]) .ui5-busy-indicator-circle {
	width: .5rem;
	height: .5rem;
}

:host(:not([size])) .ui5-busy-indicator-root,
:host([size="Medium"]) .ui5-busy-indicator-root {
	min-width: 3rem;
	min-height: 1rem;
}

:host(:not([size])[text]:not([text=""])) .ui5-busy-indicator-root,
:host([size="Medium"][text]:not([text=""])) .ui5-busy-indicator-root {
	min-height: 2.25rem;
}

:host(:not([size])) .ui5-busy-indicator-circle,
:host([size="Medium"])  .ui5-busy-indicator-circle {
	width: 1rem;
	height: 1rem;
}

:host([size="Large"]) .ui5-busy-indicator-root {
	min-width: 6rem;
	min-height: 2rem;
}

:host([size="Large"][text]:not([text=""])) .ui5-busy-indicator-root {
	min-height: 3.25rem;
}

:host([size="Large"]) .ui5-busy-indicator-circle {
	width: 2rem;
	height: 2rem;
}

.ui5-busy-indicator-root {
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	background-color: inherit;
	height: inherit;
}

.ui5-busy-indicator-busy-area {
	position: absolute;
	z-index: 99;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: inherit;
	flex-direction: column;
}

.ui5-busy-indicator-busy-area:focus {
	outline: var(--_ui5_busy_indicator_focus_outline);
	outline-offset: -2px;
    border-radius: var(--_ui5_busy_indicator_focus_border_radius);
}

.ui5-busy-indicator-circles-wrapper {
	line-height: 0;
}

.ui5-busy-indicator-circle {
	display: inline-block;
	background-color: currentColor;
	border-radius: 50%;
}

.ui5-busy-indicator-circle::before {
	content: "";
	width: 100%;
	height: 100%;
	border-radius: 100%;
}

.circle-animation-0 {
	animation: grow 1.6s infinite cubic-bezier(0.32, 0.06, 0.85, 1.11);
}

.circle-animation-1 {
	animation: grow 1.6s infinite cubic-bezier(0.32, 0.06, 0.85, 1.11);
	animation-delay: 200ms;
}

.circle-animation-2 {
	animation: grow 1.6s infinite cubic-bezier(0.32, 0.06, 0.85, 1.11);
	animation-delay: 400ms;
}

.ui5-busy-indicator-text {
	width: 100%;
	margin-top: .25rem;
	text-align: center;
}

@keyframes grow {
	0%, 50%, 100% {
		-webkit-transform: scale(0.5);
		-moz-transform: scale(0.5);
		transform: scale(0.5);
	}
	25% {
		-webkit-transform: scale(1);
		-moz-transform: scale(1);
		transform: scale(1);
	}
}
`};var Sa=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},Nc;let $o=Nc=class extends Ce{constructor(){super(),this._keydownHandler=this._handleKeydown.bind(this),this._preventEventHandler=this._preventEvent.bind(this)}onEnterDOM(){this.addEventListener("keydown",this._keydownHandler,{capture:!0}),this.addEventListener("keyup",this._preventEventHandler,{capture:!0})}onExitDOM(){this._busyTimeoutId&&(clearTimeout(this._busyTimeoutId),delete this._busyTimeoutId),this.removeEventListener("keydown",this._keydownHandler,!0),this.removeEventListener("keyup",this._preventEventHandler,!0)}static async onDefine(){Nc.i18nBundle=await Re("@ui5/webcomponents")}get ariaTitle(){return Nc.i18nBundle.getText(W$)}get labelId(){return this.text?`${this._id}-label`:void 0}get classes(){return{root:{"ui5-busy-indicator-root":!0}}}onBeforeRendering(){this.active?!this._isBusy&&!this._busyTimeoutId&&(this._busyTimeoutId=setTimeout(()=>{delete this._busyTimeoutId,this._isBusy=!0},Math.max(0,this.delay))):(this._busyTimeoutId&&(clearTimeout(this._busyTimeoutId),delete this._busyTimeoutId),this._isBusy=!1)}_handleKeydown(e){this._isBusy&&(e.stopImmediatePropagation(),Bo(e)&&(this.focusForward=!0,this.shadowRoot.querySelector("[data-ui5-focus-redirect]").focus(),this.focusForward=!1))}_preventEvent(e){this._isBusy&&e.stopImmediatePropagation()}_redirectFocus(e){this.focusForward||(e.preventDefault(),this.shadowRoot.querySelector(".ui5-busy-indicator-busy-area").focus())}};Sa([h()],$o.prototype,"text",void 0),Sa([h({type:Cp,defaultValue:Cp.Medium})],$o.prototype,"size",void 0),Sa([h({type:Boolean})],$o.prototype,"active",void 0),Sa([h({validator:kn,defaultValue:1e3})],$o.prototype,"delay",void 0),Sa([h({type:Boolean})],$o.prototype,"_isBusy",void 0),$o=Nc=Sa([fe({tag:"ui5-busy-indicator",languageAware:!0,styles:QE,renderer:et,template:GE,dependencies:[Ec]})],$o),$o.define();const k1=$o,x1={key:"TIMELINE_ARIA_LABEL",defaultText:"Timeline"};function ZE(t,e,n){return p`<a class="ui5-link-root" role="${u(this.effectiveAccRole)}" href="${u(this.parsedRef)}" target="${u(this.target)}" rel="${u(this._rel)}" tabindex="${u(this.effectiveTabIndex)}" ?disabled="${this.disabled}" aria-label="${u(this.ariaLabelText)}" aria-haspopup="${u(this.accessibilityAttributes.hasPopup)}" aria-expanded="${u(this.accessibilityAttributes.expanded)}" @focusin=${this._onfocusin} @focusout=${this._onfocusout} @click=${this._onclick} @keydown=${this._onkeydown} @keyup=${this._onkeyup}><slot></slot>${this.hasLinkType?KE.call(this,t,e,n):void 0}</a>`}function KE(t,e,n){return p`<span class="ui5-hidden-text">${u(this.linkTypeText)}</span>`}V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const eP={packageName:"@ui5/webcomponents",fileName:"themes/Link.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}

:host(:not([hidden])) {
	display: inline-flex;
}

:host {
	max-width: 100%;
	color: var(--sapLinkColor);
	font-family: var(--sapFontFamily);
	font-size: var(--sapFontSize);
	cursor: pointer;
	outline: none;
	text-decoration: var(--_ui5_link_text_decoration);
	text-shadow: var(--sapContent_TextShadow);
	white-space: nowrap;
	overflow-wrap: normal;
}

:host(:hover) {
	color: var(--sapLink_Hover_Color);
	text-decoration: var(--_ui5_link_hover_text_decoration);
}

:host(:active) {
	color: var(--sapLink_Active_Color);
	text-decoration: var(--_ui5_link_active_text_decoration);
}

:host([disabled]) {
	pointer-events: none;
}

:host([disabled]) .ui5-link-root {
	text-shadow: none;
	outline: none;
	cursor: default;
	pointer-events: none;
	opacity: var(--sapContent_DisabledOpacity);
}

:host([design="Emphasized"]) .ui5-link-root {
	font-family: var(--sapFontBoldFamily);
}

:host([design="Subtle"]) {
	color: var(--sapLink_SubtleColor);
	text-decoration: var(--_ui5_link_subtle_text_decoration);
}

:host([design="Subtle"]:hover:not(:active)) {
	color: var(--sapLink_SubtleColor);
	text-decoration: var(--_ui5_link_subtle_text_decoration_hover);
}

:host([wrapping-type="Normal"]) {
	white-space: normal;
	overflow-wrap: break-word;
}

.ui5-link-root {
	max-width: 100%;
	display: inline-block;
	position: relative;
	overflow: hidden;
	text-overflow: ellipsis;
	outline: none;
	white-space: inherit;
	overflow-wrap: inherit;
	text-decoration: inherit;
	color: inherit;
}

:host .ui5-link-root {
	border: var(--_ui5_link_border);
	border-radius: var(--_ui5_link_focus_border-radius);
}

:host([focused]) .ui5-link-root,
:host([design="Subtle"][focused]) .ui5-link-root {
	background-color: var(--_ui5_link_focus_background_color);
	border: var(--_ui5_link_border_focus);
	border-radius: var(--_ui5_link_focus_border-radius);
	text-shadow: none;
}

:host([focused]),
:host([design="Subtle"][focused]) {
	color:  var(--_ui5_link_focus_color);
	text-decoration: var(--_ui5_link_focus_text_decoration);
}

:host([focused]:hover:not(:active)) {
	color: var(--_ui5_link_focused_hover_text_color);
	text-decoration: var(--_ui5_link_focused_hover_text_decoration);
}`};var xn=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},al;let Mt=al=class extends Ce{constructor(){super(),this._dummyAnchor=document.createElement("a")}onBeforeRendering(){const e=this.target!=="_self"&&this.href&&this._isCrossOrigin();this._rel=e?"noreferrer noopener":void 0}_isCrossOrigin(){const e=window.location;return this._dummyAnchor.href=this.href,!(this._dummyAnchor.hostname===e.hostname&&this._dummyAnchor.port===e.port&&this._dummyAnchor.protocol===e.protocol)}get effectiveTabIndex(){return this._tabIndex?this._tabIndex:this.disabled||!this.textContent?.length?"-1":"0"}get ariaLabelText(){return cr(this)}get hasLinkType(){return this.design!==Ap.Default}static typeTextMappings(){return{Subtle:rA,Emphasized:iA}}get linkTypeText(){return al.i18nBundle.getText(al.typeTextMappings()[this.design])}get parsedRef(){return this.href&&this.href.length>0?this.href:void 0}get effectiveAccRole(){return this.accessibleRole.toLowerCase()}static async onDefine(){al.i18nBundle=await Re("@ui5/webcomponents")}_onclick(e){const{altKey:n,ctrlKey:o,metaKey:r,shiftKey:i}=e;e.stopImmediatePropagation(),so(e,"link"),this.fireEvent("click",{altKey:n,ctrlKey:o,metaKey:r,shiftKey:i},!0)||e.preventDefault()}_onfocusin(e){so(e,"link"),this.focused=!0}_onfocusout(){this.focused=!1}_onkeydown(e){tt(e)&&!this.href?this._onclick(e):Le(e)&&e.preventDefault(),so(e,"link")}_onkeyup(e){if(!Le(e)){so(e,"link");return}if(this._onclick(e),this.href&&!e.defaultPrevented){const n=new MouseEvent("click");n.stopImmediatePropagation(),this.getDomRef().dispatchEvent(n)}}};xn([h({type:Boolean})],Mt.prototype,"disabled",void 0),xn([h()],Mt.prototype,"href",void 0),xn([h()],Mt.prototype,"target",void 0),xn([h({type:Ap,defaultValue:Ap.Default})],Mt.prototype,"design",void 0),xn([h({type:Ln,defaultValue:Ln.None})],Mt.prototype,"wrappingType",void 0),xn([h()],Mt.prototype,"accessibleName",void 0),xn([h()],Mt.prototype,"accessibleNameRef",void 0),xn([h({defaultValue:"link"})],Mt.prototype,"accessibleRole",void 0),xn([h({type:Object})],Mt.prototype,"accessibilityAttributes",void 0),xn([h({noAttribute:!0})],Mt.prototype,"_rel",void 0),xn([h({noAttribute:!0})],Mt.prototype,"_tabIndex",void 0),xn([h({type:Boolean})],Mt.prototype,"focused",void 0),Mt=al=xn([fe({tag:"ui5-link",languageAware:!0,renderer:et,template:ZE,styles:eP}),re("click",{detail:{altKey:{type:Boolean},ctrlKey:{type:Boolean},metaKey:{type:Boolean},shiftKey:{type:Boolean}}})],Mt),Mt.define();const tP=Mt;function nP(t,e,n){return p`${this._isPhone?oP.call(this,t,e,n):lP.call(this,t,e,n)}`}function oP(t,e,n){return n?p`<${k("ui5-dialog",e,n)} accessible-name=${u(this.accessibleName)} accessible-name-ref=${u(this.accessibleNameRef)} accessible-role=${u(this.accessibleRole)} stretch _disable-initial-focus @ui5-before-open="${u(this._beforeDialogOpen)}" @ui5-after-open="${u(this._propagateDialogEvent)}" @ui5-before-close="${u(this._propagateDialogEvent)}" @ui5-after-close="${u(this._afterDialogClose)}" exportparts="content, header, footer">${this._hideHeader?void 0:B1.call(this,t,e,n)}<slot></slot><slot slot="footer" name="footer"></slot></${k("ui5-dialog",e,n)}>`:p`<ui5-dialog accessible-name=${u(this.accessibleName)} accessible-name-ref=${u(this.accessibleNameRef)} accessible-role=${u(this.accessibleRole)} stretch _disable-initial-focus @ui5-before-open="${u(this._beforeDialogOpen)}" @ui5-after-open="${u(this._propagateDialogEvent)}" @ui5-before-close="${u(this._propagateDialogEvent)}" @ui5-after-close="${u(this._afterDialogClose)}" exportparts="content, header, footer">${this._hideHeader?void 0:B1.call(this,t,e,n)}<slot></slot><slot slot="footer" name="footer"></slot></ui5-dialog>`}function B1(t,e,n){return p`${this.header.length?rP.call(this,t,e,n):iP.call(this,t,e,n)}`}function rP(t,e,n){return p`<slot slot="header" name="header"></slot>`}function iP(t,e,n){return p`<div class="${Y(this.classes.header)}" slot="header">${this.headerText?aP.call(this,t,e,n):void 0}${this._hideCloseButton?void 0:sP.call(this,t,e,n)}</div>`}function aP(t,e,n){return n?p`<${k("ui5-title",e,n)} level="H2" class="ui5-popup-header-text ui5-responsive-popover-header-text">${u(this.headerText)}</${k("ui5-title",e,n)}>`:p`<ui5-title level="H2" class="ui5-popup-header-text ui5-responsive-popover-header-text">${u(this.headerText)}</ui5-title>`}function sP(t,e,n){return n?p`<${k("ui5-button",e,n)} icon="decline" design="Transparent" aria-label="${u(this._closeDialogAriaLabel)}" @click="${this.close}"></${k("ui5-button",e,n)}>`:p`<ui5-button icon="decline" design="Transparent" aria-label="${u(this._closeDialogAriaLabel)}" @click="${this.close}"></ui5-button>`}function lP(t,e,n){return p`<section style="${ie(this.styles.root)}" class="${Y(this.classes.root)}" role="${u(this._role)}" aria-modal="${u(this._ariaModal)}" aria-label="${u(this._ariaLabel)}" aria-labelledby="${u(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span><span class="ui5-popover-arrow" style="${ie(this.styles.arrow)}"></span>${this._displayHeader?uP.call(this,t,e,n):void 0}<div style="${ie(this.styles.content)}" class="${Y(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div>${this._displayFooter?_P.call(this,t,e,n):void 0}<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section>`}function uP(t,e,n){return p`<header class="ui5-popup-header-root" id="ui5-popup-header" part="header">${this.header.length?cP.call(this,t,e,n):dP.call(this,t,e,n)}</header>`}function cP(t,e,n){return p`<slot name="header"></slot>`}function dP(t,e,n){return p`<h1 class="ui5-popup-header-text">${u(this.headerText)}</h1>`}function _P(t,e,n){return p`${this.footer.length?pP.call(this,t,e,n):void 0}`}function pP(t,e,n){return p`<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`}class hP extends S1{static isValid(e){return typeof e=="string"||e instanceof HTMLElement}static propertyToAttribute(e){return e instanceof HTMLElement?null:e}}let T1;const fP=300,zt=[],sl=()=>{zt.forEach(t=>{t.instance.reposition()})},gP=()=>{document.activeElement.tagName==="IFRAME"&&TP().reverse().forEach(t=>t.instance.close(!1,!1,!0))},vP=()=>{T1=setInterval(()=>{sl(),gP()},fP)},mP=()=>{clearInterval(T1)},bP=()=>{document.body.addEventListener("scroll",sl,{capture:!0})},yP=()=>{document.body.removeEventListener("scroll",sl,{capture:!0})},CP=t=>{t&&t.shadowRoot.addEventListener("scroll",sl,{capture:!0})},wP=t=>{t&&t.shadowRoot.removeEventListener("scroll",sl,{capture:!0})},SP=()=>{document.addEventListener("mousedown",I1)},kP=()=>{document.removeEventListener("mousedown",I1)},I1=t=>{const e=gE();if(!(e.length===0||!NP(e[e.length-1].instance)))for(let o=e.length-1;o!==-1;o--){const r=e[o].instance;if(r.isModal||r.isOpenerClicked(t))return;if(sB(t,r.getBoundingClientRect()))break;r.close()}},xP=t=>{const e=IP(t);o1(t,e),zt.push({instance:t,parentPopovers:e}),CP(t),zt.length===1&&(bP(),SP(),vP())},BP=t=>{const e=[t];for(let n=0;n<zt.length;n++){const o=zt[n].parentPopovers.indexOf(t);zt[n].parentPopovers.length>0&&o>-1&&e.push(zt[n].instance)}for(let n=e.length-1;n>=0;n--)for(let o=0;o<zt.length;o++){let r=-1;e[n]===zt[o].instance&&(r=o),r>=0&&(r1(zt[r].instance),wP(zt[r].instance),zt.splice(r,1)[0].instance.close(!1,!0))}zt.length||(yP(),kP(),mP())},TP=()=>zt,IP=t=>{let e=t.parentNode;const n=[];for(;e&&e.parentNode;){for(let o=0;o<zt.length;o++)e===zt[o].instance&&n.push(e);e=e.parentNode}return n};function $P(t,e,n){return p`<section style="${ie(this.styles.root)}" class="${Y(this.classes.root)}" role="${u(this._role)}" aria-modal="${u(this._ariaModal)}" aria-label="${u(this._ariaLabel)}" aria-labelledby="${u(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span><span class="ui5-popover-arrow" style="${ie(this.styles.arrow)}"></span>${this._displayHeader?AP.call(this,t,e,n):void 0}<div style="${ie(this.styles.content)}" class="${Y(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div>${this._displayFooter?FP.call(this,t,e,n):void 0}<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section> `}function AP(t,e,n){return p`<header class="ui5-popup-header-root" id="ui5-popup-header" part="header">${this.header.length?EP.call(this,t,e,n):PP.call(this,t,e,n)}</header>`}function EP(t,e,n){return p`<slot name="header"></slot>`}function PP(t,e,n){return p`<h1 class="ui5-popup-header-text">${u(this.headerText)}</h1>`}function FP(t,e,n){return p`${this.footer.length?RP.call(this,t,e,n):void 0}`}function RP(t,e,n){return p`<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`}V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const LP={packageName:"@ui5/webcomponents",fileName:"themes/Popover.css",content:`:host {
	box-shadow: var(--_ui5_popover_box_shadow);
	background-color: var(--_ui5_popover_background);
	max-width: calc(100vw - (100vw - 100%) - 2 * var(--_ui5_popup_viewport_margin));
}

:host([hide-arrow]) {
	box-shadow: var(--_ui5_popover_no_arrow_box_shadow);
}

:host([opened][actual-placement-type="Top"]) {
	margin-top: var(--_ui5-popover-margin-bottom);
}

:host([opened][actual-placement-type="Bottom"]) {
	margin-top: var(--_ui5-popover-margin-top);
}

/* pointing upward arrow */

:host([actual-placement-type="Bottom"]) .ui5-popover-arrow {
	left: calc(50% - 0.5625rem);
	top: -0.5rem;
	height: 0.5625rem;
}

:host([actual-placement-type="Bottom"]) .ui5-popover-arrow:after {
	margin: var(--_ui5_popover_upward_arrow_margin);
}

/* pointing right arrow */

:host([actual-placement-type="Left"]) .ui5-popover-arrow {
	top: calc(50% - 0.5625rem);
	right: -0.5625rem;
	width: 0.5625rem;
}

:host([actual-placement-type="Left"]) .ui5-popover-arrow:after {
	margin: var(--_ui5_popover_right_arrow_margin);
}

/* pointing downward arrow */

:host([actual-placement-type="Top"]) .ui5-popover-arrow {
	left: calc(50% - 0.5625rem);
	height: 0.5625rem;
	top: 100%;
}

:host([actual-placement-type="Top"]) .ui5-popover-arrow:after {
	margin: var(--_ui5_popover_downward_arrow_margin);
}

/* pointing left arrow */

:host(:not([actual-placement-type])) .ui5-popover-arrow,
:host([actual-placement-type="Right"]) .ui5-popover-arrow {
	left: -0.5625rem;
	top: calc(50% - 0.5625rem);
	width: 0.5625rem;
	height: 1rem;
}

:host(:not([actual-placement-type])) .ui5-popover-arrow:after,
:host([actual-placement-type="Right"]) .ui5-popover-arrow:after {
	margin: var(--_ui5_popover_left_arrow_margin);
}

:host([hide-arrow]) .ui5-popover-arrow {
	display: none;
}

.ui5-popover-root {
	min-width: 6.25rem;
}

.ui5-popover-arrow {
	pointer-events: none;
	display: block;
	width: 1rem;
	height: 1rem;
	position: absolute;
	overflow: hidden;
}

.ui5-popover-arrow:after {
	content: "";
	display: block;
	width: 0.7rem;
	height: 0.7rem;
	background-color: var(--_ui5_popover_background);
	box-shadow: var(--_ui5_popover_box_shadow);
	transform: rotate(-45deg);
}
`};var Ct=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},gr;const Of=8;let rt=gr=class extends s1{static get VIEWPORT_MARGIN(){return 10}constructor(){super()}onAfterRendering(){if(!this.isOpen()&&this.open){let e;if(this.opener instanceof HTMLElement?e=this.opener:typeof this.opener=="string"&&(e=this.getRootNode().getElementById(this.opener)),!e){console.warn("Valid opener id is required.");return}this.showAt(e)}else this.isOpen()&&!this.open&&this.close()}isOpenerClicked(e){const n=e.target;if(n===this._opener)return!0;const o=n;return o.getFocusDomRef&&o.getFocusDomRef()===this._opener?!0:e.composedPath().indexOf(this._opener)>-1}async showAt(e,n=!1){!e||this.opened||(this._opener=e,this._openerRect=e.getBoundingClientRect(),await super._open(n))}_addOpenedPopup(){xP(this)}_removeOpenedPopup(){BP(this)}shouldCloseDueToOverflow(e,n){const r={Right:n.right,Left:n.left,Top:n.top,Bottom:n.bottom},i=bb(this._opener);let a=!1,s=!1;if(i.showAt){const l=i.contentDOM.getBoundingClientRect();a=n.top>l.top+l.height,s=n.top+n.height<l.top}return r[e]<0||r[e]+32>i.innerHeight||a||s}shouldCloseDueToNoOpener(e){return e.top===0&&e.bottom===0&&e.left===0&&e.right===0}isOpenerOutsideViewport(e){return e.bottom<0||e.top>window.innerHeight||e.right<0||e.left>window.innerWidth}_resize(){super._resize(),this.opened&&this.reposition()}reposition(){this._show()}_show(){let e;const n=this.getPopoverSize();if(n.width===0||n.height===0)return;if(this.isOpen()&&(this._openerRect=this._opener.getBoundingClientRect()),this.shouldCloseDueToNoOpener(this._openerRect)&&this.isFocusWithin()?e=this._oldPlacement:e=this.calcPlacement(this._openerRect,n),this._preventRepositionAndClose||this.isOpenerOutsideViewport(this._openerRect))return this.close();this._oldPlacement=e,this.actualPlacementType=e.placementType;let o=Zn(this._left,gr.VIEWPORT_MARGIN,document.documentElement.clientWidth-n.width-gr.VIEWPORT_MARGIN);this.actualPlacementType===Ye.Right&&(o=Math.max(o,this._left));let r=Zn(this._top,gr.VIEWPORT_MARGIN,document.documentElement.clientHeight-n.height-gr.VIEWPORT_MARGIN);this.actualPlacementType===Ye.Bottom&&(r=Math.max(r,this._top)),this.arrowTranslateX=e.arrow.x,this.arrowTranslateY=e.arrow.y,r=this._adjustForIOSKeyboard(r),Object.assign(this.style,{top:`${r}px`,left:`${o}px`}),super._show(),this.horizontalAlign===gt.Stretch&&this._width&&(this.style.width=this._width)}_adjustForIOSKeyboard(e){if(!nx())return e;const n=Math.ceil(this.getBoundingClientRect().top);return e+(Number.parseInt(this.style.top||"0")-n)}getPopoverSize(){this.opened||Object.assign(this.style,{display:"block",top:"-10000px",left:"-10000px"});const e=this.getBoundingClientRect(),n=e.width,o=e.height;return{width:n,height:o}}get arrowDOM(){return this.shadowRoot.querySelector(".ui5-popover-arrow")}calcPlacement(e,n){let o=0,r=0;const i=this.allowTargetOverlap,a=document.documentElement.clientWidth,s=document.documentElement.clientHeight;let l=s,c=a;const _=this.getActualPlacementType(e,n);this._preventRepositionAndClose=this.shouldCloseDueToNoOpener(e)||this.shouldCloseDueToOverflow(_,e);const d=_===Ye.Top||_===Ye.Bottom;this.horizontalAlign===gt.Stretch&&d?(n.width=e.width,this._width=`${e.width}px`):this.verticalAlign===Gr.Stretch&&!d&&(n.height=e.height);const v=this.hideArrow?0:Of;switch(_){case Ye.Top:o=this.getVerticalLeft(e,n),r=Math.max(e.top-n.height-v,0),i||(l=e.top-v);break;case Ye.Bottom:o=this.getVerticalLeft(e,n),r=e.bottom+v,i?r=Math.max(Math.min(r,s-n.height),0):l=s-e.bottom-v;break;case Ye.Left:o=Math.max(e.left-n.width-v,0),r=this.getHorizontalTop(e,n),i||(c=e.left-v);break;case Ye.Right:o=e.left+e.width+v,r=this.getHorizontalTop(e,n),i?o=Math.max(Math.min(o,a-n.width),0):c=a-e.right-v;break}d?n.width>a||o<0?o=0:o+n.width>a&&(o-=o+n.width-a):n.height>s||r<0?r=0:r+n.height>s&&(r-=r+n.height-s),this._maxHeight=Math.round(l-gr.VIEWPORT_MARGIN),this._maxWidth=Math.round(c-gr.VIEWPORT_MARGIN),(this._left===void 0||Math.abs(this._left-o)>1.5)&&(this._left=Math.round(o)),(this._top===void 0||Math.abs(this._top-r)>1.5)&&(this._top=Math.round(r));const b=Number.parseInt(window.getComputedStyle(this).getPropertyValue("border-radius"));return{arrow:this.getArrowPosition(e,n,o,r,d,b),top:this._top,left:this._left,placementType:_}}getArrowPosition(e,n,o,r,i,a){const s=this._actualHorizontalAlign;let l=s===gt.Center||s===gt.Stretch;s===gt.Right&&o<=e.left&&(l=!0),s===gt.Left&&o+n.width>=e.left+e.width&&(l=!0);let c=0;i&&l&&(c=e.left+e.width/2-o-n.width/2);let _=0;i||(_=e.top+e.height/2-r-n.height/2);const d=n.height/2-a-Of/2;_=Zn(_,-d,d);const v=n.width/2-a-Of/2;return c=Zn(c,-v,v),{x:Math.round(c),y:Math.round(_)}}fallbackPlacement(e,n,o,r){if(o.left>r.width)return Ye.Left;if(e-o.right>o.left)return Ye.Right;if(n-o.bottom>r.height)return Ye.Bottom;if(n-o.bottom<o.top)return Ye.Top}getActualPlacementType(e,n){const o=this.placementType;let r=o;const i=document.documentElement.clientWidth,a=document.documentElement.clientHeight;switch(o){case Ye.Top:e.top<n.height&&e.top<a-e.bottom&&(r=Ye.Bottom);break;case Ye.Bottom:a-e.bottom<n.height&&a-e.bottom<e.top&&(r=Ye.Top);break;case Ye.Left:e.left<n.width&&(r=this.fallbackPlacement(i,a,e,n)||o);break;case Ye.Right:i-e.right<n.width&&(r=this.fallbackPlacement(i,a,e,n)||o);break}return r}getVerticalLeft(e,n){const o=this._actualHorizontalAlign;let r=0;switch(o){case gt.Center:case gt.Stretch:r=e.left-(n.width-e.width)/2;break;case gt.Left:r=e.left;break;case gt.Right:r=e.right-n.width;break}return r}getHorizontalTop(e,n){let o=0;switch(this.verticalAlign){case Gr.Center:case Gr.Stretch:o=e.top-(n.height-e.height)/2;break;case Gr.Top:o=e.top;break;case Gr.Bottom:o=e.bottom-n.height;break}return o}get isModal(){return this.modal}get shouldHideBackdrop(){return this.hideBackdrop}get _ariaLabelledBy(){if(!this._ariaLabel&&this._displayHeader)return"ui5-popup-header"}get styles(){return{...super.styles,root:{"max-height":this._maxHeight?`${this._maxHeight}px`:"","max-width":this._maxWidth?`${this._maxWidth}px`:""},arrow:{transform:`translate(${this.arrowTranslateX}px, ${this.arrowTranslateY}px)`}}}get classes(){const e=super.classes;return e.root["ui5-popover-root"]=!0,e}get _displayHeader(){return!!(this.header.length||this.headerText)}get _displayFooter(){return!0}get _actualHorizontalAlign(){if(this.effectiveDir==="rtl"){if(this.horizontalAlign===gt.Left)return gt.Right;if(this.horizontalAlign===gt.Right)return gt.Left}return this.horizontalAlign}};Ct([h()],rt.prototype,"headerText",void 0),Ct([h({type:Ye,defaultValue:Ye.Right})],rt.prototype,"placementType",void 0),Ct([h({type:gt,defaultValue:gt.Center})],rt.prototype,"horizontalAlign",void 0),Ct([h({type:Gr,defaultValue:Gr.Center})],rt.prototype,"verticalAlign",void 0),Ct([h({type:Boolean})],rt.prototype,"modal",void 0),Ct([h({type:Boolean})],rt.prototype,"hideBackdrop",void 0),Ct([h({type:Boolean})],rt.prototype,"hideArrow",void 0),Ct([h({type:Boolean})],rt.prototype,"allowTargetOverlap",void 0),Ct([h({validator:hP})],rt.prototype,"opener",void 0),Ct([h({type:Boolean})],rt.prototype,"disableScrolling",void 0),Ct([h({validator:kn,defaultValue:0,noAttribute:!0})],rt.prototype,"arrowTranslateX",void 0),Ct([h({validator:kn,defaultValue:0,noAttribute:!0})],rt.prototype,"arrowTranslateY",void 0),Ct([h({type:Ye,defaultValue:Ye.Right})],rt.prototype,"actualPlacementType",void 0),Ct([h({validator:kn,noAttribute:!0})],rt.prototype,"_maxHeight",void 0),Ct([h({validator:kn,noAttribute:!0})],rt.prototype,"_maxWidth",void 0),Ct([ce({type:HTMLElement})],rt.prototype,"header",void 0),Ct([ce({type:HTMLElement})],rt.prototype,"footer",void 0),rt=gr=Ct([fe({tag:"ui5-popover",styles:[Df,w1,LP],template:$P})],rt);const NP=t=>"showAt"in t;rt.define();const vr=rt;function DP(t,e,n){return p`${this.h1?OP.call(this,t,e,n):void 0}${this.h2?HP.call(this,t,e,n):void 0}${this.h3?MP.call(this,t,e,n):void 0}${this.h4?zP.call(this,t,e,n):void 0}${this.h5?jP.call(this,t,e,n):void 0}${this.h6?VP.call(this,t,e,n):void 0}`}function OP(t,e,n){return p`<h1 class="ui5-title-root"><span id="${u(this._id)}-inner"><slot></slot></span></h1>`}function HP(t,e,n){return p`<h2 class="ui5-title-root"><span id="${u(this._id)}-inner"><slot></slot></span></h2>`}function MP(t,e,n){return p`<h3 class="ui5-title-root"><span id="${u(this._id)}-inner"><slot></slot></span></h3>`}function zP(t,e,n){return p`<h4 class="ui5-title-root"><span id="${u(this._id)}-inner"><slot></slot></span></h4>`}function jP(t,e,n){return p`<h5 class="ui5-title-root"><span id="${u(this._id)}-inner"><slot></slot></span></h5>`}function VP(t,e,n){return p`<h6 class="ui5-title-root"><span id="${u(this._id)}-inner"><slot></slot></span></h6>`}V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const WP={packageName:"@ui5/webcomponents",fileName:"themes/Title.css",content:`:host(:not([hidden])) {
	display: block;
	cursor: text;
}

:host {
	max-width: 100%;
	color: var(--sapGroup_TitleTextColor);
	font-size: var(--sapFontHeader2Size);
	font-family: "72override", var(--sapFontHeaderFamily);
	text-shadow: var(--sapContent_TextShadow);
}

.ui5-title-root {
	display: inline-block;
	position: relative;
	font-weight: normal;
	font-size: inherit;
	box-sizing: border-box;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	max-width: 100%;
	vertical-align: bottom;
	-webkit-margin-before: 0;
	-webkit-margin-after: 0;
	-webkit-margin-start: 0;
	-webkit-margin-end: 0;
	margin: 0;
	cursor: inherit;
}

:host([wrapping-type="Normal"]) .ui5-title-root,
:host([wrapping-type="Normal"]) ::slotted(*) {
	white-space: pre-line;
}

::slotted(*) {
	font-size: inherit;
	font-family: inherit;
	text-shadow: inherit;
}

/* Level H1 */

:host([level="H1"]) {
	font-size: var(--sapFontHeader1Size);
}

/* Level H2 */

:host([level="H2"]) {
	font-size: var(--sapFontHeader2Size);
}

/* Level H3 */

:host([level="H3"]) {
	font-size: var(--sapFontHeader3Size);
}

/* Level H4 */

:host([level="H4"]) {
	font-size: var(--sapFontHeader4Size);
}

/* Level H5 */

:host([level="H5"]) {
	font-size: var(--sapFontHeader5Size);
}

/* Level H6 */

:host([level="H6"]) {
	font-size: var(--sapFontHeader6Size);
}
`};var Hf=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let ka=class extends Ce{get normalizedLevel(){return this.level.toLowerCase()}get h1(){return this.normalizedLevel==="h1"}get h2(){return this.normalizedLevel==="h2"}get h3(){return this.normalizedLevel==="h3"}get h4(){return this.normalizedLevel==="h4"}get h5(){return this.normalizedLevel==="h5"}get h6(){return this.normalizedLevel==="h6"}};Hf([h({type:Ln,defaultValue:Ln.None})],ka.prototype,"wrappingType",void 0),Hf([h({type:Zi,defaultValue:Zi.H2})],ka.prototype,"level",void 0),ka=Hf([fe({tag:"ui5-title",renderer:et,template:DP,styles:WP})],ka),ka.define();const UP=ka,qP="decline",$1="M86 109l22-23q5-5 12-5 6 0 11 5l124 125L380 86q5-5 11-5 7 0 12 5l22 23q12 11 0 23L301 256l124 125q11 11 0 22l-22 23q-8 5-12 5-3 0-11-5L255 301 131 426q-5 5-11 5-4 0-12-5l-22-23q-11-11 0-22l124-125L86 132q-12-12 0-23z";ne(qP,{pathData:$1,ltr:!1,accData:c1,collection:"SAP-icons-v4",packageName:"@ui5/webcomponents-icons"});const GP="decline",A1="M292 256l117 116q7 7 7 18 0 12-7.5 19t-18.5 7q-10 0-18-8L256 292 140 408q-8 8-18 8-11 0-18.5-7.5T96 390q0-10 8-18l116-116-116-116q-8-8-8-18 0-11 7.5-18.5T122 96t18 7l116 117 116-117q7-7 18-7t18.5 7.5T416 122t-7 18z";ne(GP,{pathData:A1,ltr:!1,accData:c1,collection:"SAP-icons-v5",packageName:"@ui5/webcomponents-icons"}),Ze(),V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const YP={packageName:"@ui5/webcomponents",fileName:"themes/ResponsivePopover.css",content:`:host {
	--_ui5_input_width: 100%;
	min-width: 6.25rem;
	min-height: 2rem;
}

:host([opened]) {
	display: inline-block;
}

.ui5-responsive-popover-header {
	height: var(--_ui5-responsive_popover_header_height);
	display: flex;
	justify-content: space-between;
	align-items: center;
	width:100%;
}

.ui5-responsive-popover-header-text {
	width: calc(100% - var(--_ui5_button_base_min_width));
}

.ui5-responsive-popover-header-no-title {
	justify-content: flex-end;
}
`};var Dc=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},Oc;let pi=Oc=class extends vr{constructor(){super()}async showAt(e,n=!1){if(!me())await super.showAt(e,n);else{this.style.display="contents";const o=yb();if(!o)return;this.style.zIndex=o.toString(),await this._dialog.show(n)}}close(e=!1,n=!1,o=!1){me()?this._dialog.close(e,n,o):super.close(e,n,o)}toggle(e){if(this.isOpen())return this.close();this.showAt(e)}isOpen(){return me()&&this._dialog?this._dialog.isOpen():super.isOpen()}get classes(){const e=super.classes;return e.header={"ui5-responsive-popover-header":!0,"ui5-responsive-popover-header-no-title":!this.headerText},e}get _dialog(){return this.shadowRoot.querySelector("[ui5-dialog]")}get contentDOM(){return me()?this._dialog.contentDOM:super.contentDOM}get _isPhone(){return me()}get _displayHeader(){return(me()||!this.contentOnlyOnDesktop)&&super._displayHeader}get _displayFooter(){return me()||!this.contentOnlyOnDesktop}get _closeDialogAriaLabel(){return Oc.i18nBundle.getText(CA)}_beforeDialogOpen(e){this.open=!0,this.opened=!0,this._propagateDialogEvent(e)}_afterDialogClose(e){this.open=!1,this.opened=!1,this._propagateDialogEvent(e)}_propagateDialogEvent(e){const n=e.type.replace("ui5-","");this.fireEvent(n,e.detail)}get isModal(){return me()?this._dialog.isModal:super.isModal}static async onDefine(){Oc.i18nBundle=await Re("@ui5/webcomponents")}};Dc([h({type:Boolean})],pi.prototype,"contentOnlyOnDesktop",void 0),Dc([h({type:Boolean})],pi.prototype,"_hideHeader",void 0),Dc([h({type:Boolean})],pi.prototype,"_hideCloseButton",void 0),pi=Oc=Dc([fe({tag:"ui5-responsive-popover",styles:[vr.styles,YP],template:nP,dependencies:[...vr.dependencies,ci,qE,UP]})],pi),pi.define();const Mf=pi,E1=t=>{let e=t;return t.shadowRoot&&t.shadowRoot.activeElement&&(e=t.shadowRoot.activeElement),e};let Hc=null;const XP=(t,e)=>{Hc&&clearTimeout(Hc),Hc=setTimeout(()=>{Hc=null,t()},e)},JP=t=>{const e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)};function QP(t,e,n){return p`<div class="${Y(this.classes.root)}" @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" @ui5-_press=${u(this.onItemPress)} @ui5-close=${u(this.onItemClose)} @ui5-toggle=${u(this.onItemToggle)} @ui5-_focused=${u(this.onItemFocused)} @ui5-_forward-after=${u(this.onForwardAfter)} @ui5-_forward-before=${u(this.onForwardBefore)} @ui5-_selection-requested=${u(this.onSelectionRequested)} @ui5-_focus-requested=${u(this.onFocusRequested)}><div class="ui5-list-scroll-container">${this.header.length?ZP.call(this,t,e,n):void 0}${this.shouldRenderH1?KP.call(this,t,e,n):void 0}${this.hasData?eF.call(this,t,e,n):void 0}<span id="${u(this._id)}-modeLabel" class="ui5-hidden-text">${u(this.ariaLabelModeText)}</span><ul id="${u(this._id)}-listUl" class="ui5-list-ul" role="${u(this.accessibleRole)}" aria-label="${u(this.ariaLabelTxt)}" aria-labelledby="${u(this.ariaLabelledBy)}" aria-roledescription="${u(this.accessibleRoleDescription)}"><slot></slot>${this.showNoDataText?tF.call(this,t,e,n):void 0}</ul>${this.growsWithButton?nF.call(this,t,e,n):void 0}${this.footerText?oF.call(this,t,e,n):void 0}${this.hasData?rF.call(this,t,e,n):void 0}<span tabindex="-1" aria-hidden="true" class="ui5-list-end-marker"></span></div>${this.busy?iF.call(this,t,e,n):void 0}</div> `}function ZP(t,e,n){return p`<slot name="header" />`}function KP(t,e,n){return p`<header id="${u(this.headerID)}" class="ui5-list-header">${u(this.headerText)}</header>`}function eF(t,e,n){return p`<div id="${u(this._id)}-before" tabindex="0" role="none" class="ui5-list-focusarea"></div>`}function tF(t,e,n){return p`<li id="${u(this._id)}-nodata" class="ui5-list-nodata"><div id="${u(this._id)}-nodata-text" class="ui5-list-nodata-text">${u(this.noDataText)}</div></li>`}function nF(t,e,n){return p`<div growing-button><div tabindex="0" role="button" id="${u(this._id)}-growing-btn" aria-labelledby="${u(this._id)}-growingButton-text" ?active="${this._loadMoreActive}" @click="${this._onLoadMoreClick}" @keydown="${this._onLoadMoreKeydown}" @keyup="${this._onLoadMoreKeyup}" @mousedown="${this._onLoadMoreMousedown}" @mouseup="${this._onLoadMoreMouseup}" growing-button-inner><span id="${u(this._id)}-growingButton-text" growing-button-text>${u(this._growingButtonText)}</span></div></div>`}function oF(t,e,n){return p`<footer id="${u(this._id)}-footer" class="ui5-list-footer">${u(this.footerText)}</footer>`}function rF(t,e,n){return p`<div id="${u(this._id)}-after" tabindex="0" role="none" class="ui5-list-focusarea"></div>`}function iF(t,e,n){return n?p`<div class="ui5-list-busy-row"><${k("ui5-busy-indicator",e,n)} delay="${u(this.busyDelay)}" active size="Medium" class="ui5-list-busy-ind" style="${ie(this.styles.busyInd)}" data-sap-focus-ref></${k("ui5-busy-indicator",e,n)}></div>`:p`<div class="ui5-list-busy-row"><ui5-busy-indicator delay="${u(this.busyDelay)}" active size="Medium" class="ui5-list-busy-ind" style="${ie(this.styles.busyInd)}" data-sap-focus-ref></ui5-busy-indicator></div>`}V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const aF={packageName:"@ui5/webcomponents",fileName:"themes/List.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}
[growing-button] {
	display: flex;
	align-items: center;
	padding: var(--_ui5_load_more_padding);
	border-top: 1px solid var(--sapList_BorderColor);
	border-bottom: var(--_ui5_load_more_border-bottom);
	box-sizing: border-box;
	cursor: pointer;
	outline: none;
}
[growing-button-inner] {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	min-height: var(--_ui5_load_more_text_height);
	width: 100%;
	color: var(--sapButton_TextColor);
	background-color: var(--sapList_Background);
	border: var(--_ui5_load_more_border);
	border-radius: var(--_ui5_load_more_border_radius);
	box-sizing: border-box;
}
[growing-button-inner]:focus {
	outline: var(--_ui5_load_more_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	outline-offset: -0.125rem;
	border-color: transparent;
}
[growing-button-inner]:hover {
	background-color: var(--sapList_Hover_Background);
}
[growing-button-inner]:active,
[growing-button-inner][active] {
	background-color: var(--sapList_Active_Background);
	border-color: var(--sapList_Active_Background);
}
[growing-button-inner]:active > *,
[growing-button-inner][active] > * {
	color: var(--sapList_Active_TextColor);
}
[growing-button-text],
[growing-button-subtext] {
	width: 100%;
	text-align: center;
	font-family: "72override", var(--sapFontFamily);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	box-sizing: border-box;
}
[growing-button-text] {
	height: var(--_ui5_load_more_text_height);
	padding: 0.875rem 1rem 0 1rem;
	font-size: var(--_ui5_load_more_text_font_size);
	font-weight: bold;
}
[growing-button-subtext] {
	font-size: var(--sapFontSize);
	padding: var(--_ui5_load_more_desc_padding);
}
:host(:not([hidden])) {
	display: block;
	max-width: 100%;
	width: 100%;
	-webkit-tap-highlight-color: transparent;
}
:host([indent]) .ui5-list-root {
	padding: 2rem;
}
:host([separators="None"]) .ui5-list-nodata {
	border-bottom: 0;
}
:host([busy]) {
	opacity: 0.72;
}
:host([busy]) .ui5-list-busy-row {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	outline: none;
}
:host([busy]) .ui5-list-busy-ind {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
}
.ui5-list-root {
	width: 100%;
	height: 100%;
	position: relative;
	box-sizing: border-box;
}
.ui5-list-scroll-container {
	overflow: auto;
	height: 100%;
}
.ui5-list-ul {
	list-style-type: none;
	padding: 0;
	margin: 0;
}
.ui5-list-ul:focus {
	outline: none;
}
.ui5-list-focusarea {
	position: fixed; /* keep it in the visible viewport, so that IE does not scroll on focus */
}
.ui5-list-header {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	box-sizing: border-box;
	font-size: var(--sapFontHeader4Size); 
	font-family: "72override", var(--sapFontFamily);
	color: var(--sapGroup_TitleTextColor);
	height: 3rem;
	line-height: 3rem;
	padding: 0 1rem;
	background-color: var(--sapGroup_TitleBackground);
	border-bottom: 1px solid var(--sapGroup_TitleBorderColor);
}
.ui5-list-footer {
	height: 2rem;
	box-sizing: border-box;
	-webkit-text-size-adjust: none;	/* To improve readability Mobile Safari automatically increases the size of small text so let's disable this */
	font-size: var(--sapFontSize);
	font-family: "72override", var(--sapFontFamily);
	line-height: 2rem;
	background-color: var(--sapList_FooterBackground);
	color: var(--ui5_list_footer_text_color);
	padding: 0 1rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.ui5-list-nodata {
	list-style-type: none;
	display: -webkit-box;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: center;
	justify-content: center;
	color: var(--sapTextColor);
	background-color: var(--sapList_Background);
	border-bottom: 1px solid var(--sapList_BorderColor);
	padding: 0 1rem !important;
	height: var(--_ui5_list_no_data_height);
	font-size: var(--_ui5_list_no_data_font_size);
	font-family: "72override", var(--sapFontFamily);
}
.ui5-list-nodata-text {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}`};var wt=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},hi;const sF=250,lF=10;let it=hi=class extends Ce{static async onDefine(){hi.i18nBundle=await Re("@ui5/webcomponents")}constructor(){super(),this._previouslyFocusedItem=null,this._forwardingFocus=!1,this.resizeListenerAttached=!1,this.listEndObserved=!1,this._itemNavigation=new Z0(this,{skipItemsSize:lF,navigationMode:hr.Vertical,getItemsCallback:()=>this.getEnabledItems()}),this._handleResize=this.checkListInViewport.bind(this),this._handleResize=this.checkListInViewport.bind(this),this.initialIntersection=!0}onExitDOM(){this.unobserveListEnd(),this.resizeListenerAttached=!1,Nn.deregister(this.getDomRef(),this._handleResize)}onBeforeRendering(){this.prepareListItems()}onAfterRendering(){this.growsOnScroll?this.observeListEnd():this.listEndObserved&&this.unobserveListEnd(),this.grows&&(this.checkListInViewport(),this.attachForResize())}attachForResize(){this.resizeListenerAttached||(this.resizeListenerAttached=!0,Nn.register(this.getDomRef(),this._handleResize))}get shouldRenderH1(){return!this.header.length&&this.headerText}get headerID(){return`${this._id}-header`}get modeLabelID(){return`${this._id}-modeLabel`}get listEndDOM(){return this.shadowRoot.querySelector(".ui5-list-end-marker")}get hasData(){return this.getItems().length!==0}get showNoDataText(){return!this.hasData&&this.noDataText}get isDelete(){return this.mode===ze.Delete}get isSingleSelect(){return[ze.SingleSelect,ze.SingleSelectBegin,ze.SingleSelectEnd,ze.SingleSelectAuto].includes(this.mode)}get isMultiSelect(){return this.mode===ze.MultiSelect}get ariaLabelledBy(){if(this.accessibleNameRef||this.accessibleName)return;const e=[];return(this.isMultiSelect||this.isSingleSelect||this.isDelete)&&e.push(this.modeLabelID),this.shouldRenderH1&&e.push(this.headerID),e.length?e.join(" "):void 0}get ariaLabelTxt(){return cr(this)}get ariaLabelModeText(){return this.isMultiSelect?hi.i18nBundle.getText(_A):this.isSingleSelect?hi.i18nBundle.getText(dA):this.isDelete?hi.i18nBundle.getText(pA):""}get grows(){return this.growing!==Ss.None}get growsOnScroll(){return this.growing===Ss.Scroll}get growsWithButton(){return this.growing===Ss.Button}get _growingButtonText(){return hi.i18nBundle.getText(wA)}get busyIndPosition(){return this.grows?this._inViewport?"absolute":"sticky":"absolute"}get styles(){return{busyInd:{position:this.busyIndPosition}}}get classes(){return{root:{"ui5-list-root":!0,"ui5-content-native-scrollbars":n1()}}}prepareListItems(){const e=this.getItemsForProcessing();e.forEach((n,o)=>{const r=o===e.length-1,i=this.separators===Nu.All||this.separators===Nu.Inner&&!r;n.hasConfigurableMode&&(n._mode=this.mode),n.hasBorder=i})}async observeListEnd(){this.listEndObserved||(await Bs(),this.getIntersectionObserver().observe(this.listEndDOM),this.listEndObserved=!0)}unobserveListEnd(){this.growingIntersectionObserver&&(this.growingIntersectionObserver.disconnect(),this.growingIntersectionObserver=null,this.listEndObserved=!1)}onInteresection(e){if(this.initialIntersection){this.initialIntersection=!1;return}e.forEach(n=>{n.isIntersecting&&XP(this.loadMore.bind(this),sF)})}onSelectionRequested(e){const n=this.getSelectedItems();let o=!1;this._selectionRequested=!0,this.mode!==ze.None&&this[`handle${this.mode}`]&&(o=this[`handle${this.mode}`](e.detail.item,!!e.detail.selected)),o&&!this.fireEvent("selection-change",{selectedItems:this.getSelectedItems(),previouslySelectedItems:n,selectionComponentPressed:e.detail.selectionComponentPressed,targetItem:e.detail.item,key:e.detail.key},!0)&&this._revertSelection(n)}handleSingleSelect(e){return e.selected?!1:(this.deselectSelectedItems(),e.selected=!0,!0)}handleSingleSelectBegin(e){return this.handleSingleSelect(e)}handleSingleSelectEnd(e){return this.handleSingleSelect(e)}handleSingleSelectAuto(e){return this.handleSingleSelect(e)}handleMultiSelect(e,n){return e.selected=n,!0}handleDelete(e){return this.fireEvent("item-delete",{item:e}),!0}deselectSelectedItems(){this.getSelectedItems().forEach(e=>{e.selected=!1})}getSelectedItems(){return this.getItems().filter(e=>e.selected)}getEnabledItems(){return this.getItems().filter(e=>!e.disabled)}getItems(){return this.getSlottedNodes("items")}getItemsForProcessing(){return this.getItems()}_revertSelection(e){this.getItems().forEach(n=>{const o=e.indexOf(n)!==-1,r=n.shadowRoot.querySelector(".ui5-li-multisel-cb"),i=n.shadowRoot.querySelector(".ui5-li-singlesel-radiobtn");n.selected=o,r?r.checked=o:i&&(i.checked=o)})}_onkeydown(e){Bo(e)&&this._handleTabNext(e)}_onLoadMoreKeydown(e){Le(e)&&(e.preventDefault(),this._loadMoreActive=!0),tt(e)&&(this._onLoadMoreClick(),this._loadMoreActive=!0),Bo(e)&&this.focusAfterElement(),va(e)&&(this.getPreviouslyFocusedItem()?this.focusPreviouslyFocusedItem():this.focusFirstItem(),e.preventDefault())}_onLoadMoreKeyup(e){Le(e)&&this._onLoadMoreClick(),this._loadMoreActive=!1}_onLoadMoreMousedown(){this._loadMoreActive=!0}_onLoadMoreMouseup(){this._loadMoreActive=!1}_onLoadMoreClick(){this.loadMore()}checkListInViewport(){this._inViewport=JP(this.getDomRef())}loadMore(){this.fireEvent("load-more")}_handleTabNext(e){E1(e.target)}_onfocusin(e){const n=E1(e.target);if(!this.isForwardElement(n)){e.stopImmediatePropagation();return}if(!this.getPreviouslyFocusedItem()){this.growsWithButton&&this.isForwardAfterElement(n)?this.focusGrowingButton():this.focusFirstItem(),e.stopImmediatePropagation();return}if(!this.getForwardingFocus()){if(this.growsWithButton&&this.isForwardAfterElement(n)){this.focusGrowingButton(),e.stopImmediatePropagation();return}this.focusPreviouslyFocusedItem(),e.stopImmediatePropagation()}this.setForwardingFocus(!1)}isForwardElement(e){const n=e.id,o=this.getBeforeElement();return this._id===n||o&&o.id===n?!0:this.isForwardAfterElement(e)}isForwardAfterElement(e){const n=e.id,o=this.getAfterElement();return o&&o.id===n}onItemFocused(e){const n=e.target;if(e.stopPropagation(),this._itemNavigation.setCurrentItem(n),this.fireEvent("item-focused",{item:n}),this.mode===ze.SingleSelectAuto){const o={item:n,selectionComponentPressed:!1,selected:!0,key:e.detail.key};this.onSelectionRequested({detail:o})}}onItemPress(e){const n=e.detail.item;if(this.fireEvent("item-click",{item:n},!0)){if(!this._selectionRequested&&this.mode!==ze.Delete){this._selectionRequested=!0;const o={item:n,selectionComponentPressed:!1,selected:!n.selected,key:e.detail.key};this.onSelectionRequested({detail:o})}this._selectionRequested=!1}}onItemClose(e){const n=e.target;(n?.hasAttribute("ui5-li-notification")||n?.hasAttribute("ui5-li-notification-group"))&&this.fireEvent("item-close",{item:e.detail?.item})}onItemToggle(e){this.fireEvent("item-toggle",{item:e.detail.item})}onForwardBefore(e){this.setPreviouslyFocusedItem(e.target),this.focusBeforeElement(),e.stopPropagation()}onForwardAfter(e){this.setPreviouslyFocusedItem(e.target),this.growsWithButton?(this.focusGrowingButton(),e.preventDefault()):this.focusAfterElement(),e.stopPropagation()}focusBeforeElement(){this.setForwardingFocus(!0),this.getBeforeElement().focus()}focusAfterElement(){this.setForwardingFocus(!0),this.getAfterElement().focus()}focusGrowingButton(){const e=this.getGrowingButton();e&&e.focus()}getGrowingButton(){return this.shadowRoot.querySelector(`#${this._id}-growing-btn`)}focusFirstItem(){const e=this.getFirstItem(n=>!n.disabled);e&&e.focus()}focusPreviouslyFocusedItem(){const e=this.getPreviouslyFocusedItem();e&&e.focus()}focusFirstSelectedItem(){const e=this.getFirstItem(n=>n.selected&&!n.disabled);e&&e.focus()}focusItem(e){this._itemNavigation.setCurrentItem(e),e.focus()}onFocusRequested(e){setTimeout(()=>{this.setPreviouslyFocusedItem(e.target),this.focusPreviouslyFocusedItem()},0)}setForwardingFocus(e){this._forwardingFocus=e}getForwardingFocus(){return this._forwardingFocus}setPreviouslyFocusedItem(e){this._previouslyFocusedItem=e}getPreviouslyFocusedItem(){return this._previouslyFocusedItem}getFirstItem(e){const n=this.getItems();let o=null;if(!e)return n.length?n[0]:null;for(let r=0;r<n.length;r++)if(e(n[r])){o=n[r];break}return o}getAfterElement(){return this._afterElement||(this._afterElement=this.shadowRoot.querySelector(`#${this._id}-after`)),this._afterElement}getBeforeElement(){return this._beforeElement||(this._beforeElement=this.shadowRoot.querySelector(`#${this._id}-before`)),this._beforeElement}getIntersectionObserver(){return this.growingIntersectionObserver||(this.growingIntersectionObserver=new IntersectionObserver(this.onInteresection.bind(this),{root:null,rootMargin:"0px",threshold:1})),this.growingIntersectionObserver}};wt([h()],it.prototype,"headerText",void 0),wt([h()],it.prototype,"footerText",void 0),wt([h({type:Boolean})],it.prototype,"indent",void 0),wt([h({type:ze,defaultValue:ze.None})],it.prototype,"mode",void 0),wt([h()],it.prototype,"noDataText",void 0),wt([h({type:Nu,defaultValue:Nu.All})],it.prototype,"separators",void 0),wt([h({type:Ss,defaultValue:Ss.None})],it.prototype,"growing",void 0),wt([h({type:Boolean})],it.prototype,"busy",void 0),wt([h({validator:kn,defaultValue:1e3})],it.prototype,"busyDelay",void 0),wt([h()],it.prototype,"accessibleName",void 0),wt([h({defaultValue:""})],it.prototype,"accessibleNameRef",void 0),wt([h({defaultValue:"list"})],it.prototype,"accessibleRole",void 0),wt([h({defaultValue:void 0,noAttribute:!0})],it.prototype,"accessibleRoleDescription",void 0),wt([h({type:Boolean})],it.prototype,"_inViewport",void 0),wt([h({type:Boolean})],it.prototype,"_loadMoreActive",void 0),wt([ce({type:HTMLElement,default:!0})],it.prototype,"items",void 0),wt([ce()],it.prototype,"header",void 0),it=hi=wt([fe({tag:"ui5-list",fastNavigation:!0,renderer:et,template:QP,styles:[Df,aF],dependencies:[k1]}),re("item-click",{detail:{item:{type:HTMLElement}}}),re("item-close",{detail:{item:{type:HTMLElement}}}),re("item-toggle",{detail:{item:{type:HTMLElement}}}),re("item-delete",{detail:{item:{type:HTMLElement}}}),re("selection-change",{detail:{selectedItems:{type:Array},previouslySelectedItems:{type:Array},targetItem:{type:HTMLElement},selectionComponentPressed:{type:Boolean}}}),re("load-more"),re("item-focused",{detail:{item:{type:HTMLElement}}})],it),it.define();const zf=it,uF="edit",P1="M475 104q5 7 5 12 0 6-5 11L150 453q-4 4-8 4L32 480l22-110q0-5 4-9L384 36q4-4 11-4t11 4zm-121 99l-46-45L84 381l46 46zm87-88l-46-44-64 64 45 45z";ne(uF,{pathData:P1,ltr:!1,collection:"SAP-icons-v4",packageName:"@ui5/webcomponents-icons"});const cF="edit",F1="M505 94q7 7 7 18t-6 17L130 505q-7 7-18 7H26q-11 0-18.5-7.5T0 486v-86q1-10 6-16L382 7q7-7 18-7t18 7zm-55 18l-50-50-50 50 50 50zm-86 86l-50-50L62 400l50 50z";ne(cF,{pathData:F1,ltr:!1,collection:"SAP-icons-v5",packageName:"@ui5/webcomponents-icons"}),Ze();const dF=t=>{if(!t)return!1;const e=t.nodeName.toLowerCase();if(t.hasAttribute("data-sap-no-tab-ref")||Rc(t))return!1;const n=t.getAttribute("tabindex");return n!=null?parseInt(n)>=0:e==="a"||/input|select|textarea|button|object/.test(e)?!t.disabled:!1},_F=t=>jf([...t.children]),jf=(t,e)=>{const n=e||[];return t&&t.forEach(o=>{if(o.nodeType===Node.TEXT_NODE||o.nodeType===Node.COMMENT_NODE)return;let r=o;if(!r.hasAttribute("data-sap-no-tab-ref")){if(r.shadowRoot){const i=r.shadowRoot.children;r=Array.from(i).find(a=>a.tagName!=="STYLE")}r&&(dF(r)&&n.push(r),r.tagName==="SLOT"?jf(r.assignedNodes(),n):jf([...r.children],n))}}),n};V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const pF={packageName:"@ui5/webcomponents",fileName:"themes/ListItemBase.css",content:`:host(:not([hidden])) {
	display: block;
}

:host {
	height: var(--_ui5_list_item_base_height);
	background: var(--ui5-listitem-background-color);
	box-sizing: border-box;
	border-bottom: 1px solid transparent;
}

/* selected */

:host([selected]) {
	background: var(--sapList_SelectionBackgroundColor);
}

:host([has-border]) {
	border-bottom: var(--ui5-listitem-border-bottom);
}

:host([selected]) {
	border-bottom: var(--ui5-listitem-selected-border-bottom);
}

:host(:not([focused])[selected][has-border]) {
	border-bottom: var(--ui5-listitem-selected-border-bottom);
}

/* focused & selected */

:host([focused][selected]) {
	border-bottom: var(--ui5-listitem-focused-selected-border-bottom);
}

.ui5-li-root {
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: var(--ui5-listitem-padding);
	box-sizing: border-box;
}

/* focused */

:host([focused]) .ui5-li-root.ui5-li--focusable {
	outline: none;
}

:host([focused]) .ui5-li-root.ui5-li--focusable:after {
	content: "";
	border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	position: absolute;
	border-radius: var(--ui5-listitem-focus-border-radius);
	top: var(--ui5-listitem-focus-offset);
	right: var(--ui5-listitem-focus-offset);
	bottom: var(--ui5-listitem-focus-offset);
	left: var(--ui5-listitem-focus-offset);
	pointer-events: none;
}

:host([focused]) .ui5-li-content:focus:after {
	content: "";
	border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	pointer-events: none;
}

:host([active][focused]) .ui5-li-root.ui5-li--focusable:after {
	border-color: var(--ui5-listitem-active-border-color);
}

:host([disabled]) {
    opacity: var(--_ui5-listitembase_disabled_opacity);
    pointer-events: none;
}

.ui5-li-content {
	max-width: 100%;
	font-family: "72override", var(--sapFontFamily);
	color: var(--sapList_TextColor);
}
`};var xa=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let mr=class extends Ce{_onfocusin(e){e.target===this.getFocusDomRef()&&(this.focused=!0,this.fireEvent("_focused",e))}_onfocusout(){this.focused=!1}_onkeydown(e){if(Bo(e))return this._handleTabNext(e);if(va(e))return this._handleTabPrevious(e)}_onkeyup(e){}_handleTabNext(e){this.shouldForwardTabAfter()&&(this.fireEvent("_forward-after",{},!0)||e.preventDefault())}_handleTabPrevious(e){const n=e.target;this.shouldForwardTabBefore(n)&&this.fireEvent("_forward-before")}shouldForwardTabAfter(){const e=_F(this.getFocusDomRef());return e.length===0||e[e.length-1]===Ju()}shouldForwardTabBefore(e){return this.getFocusDomRef()===e}get classes(){return{main:{"ui5-li-root":!0,"ui5-li--focusable":!this.disabled}}}get _ariaDisabled(){return this.disabled?!0:void 0}get hasConfigurableMode(){return!1}get _effectiveTabIndex(){return this.disabled?-1:this.selected?0:this._tabIndex}};xa([h({type:Boolean})],mr.prototype,"selected",void 0),xa([h({type:Boolean})],mr.prototype,"hasBorder",void 0),xa([h({defaultValue:"-1",noAttribute:!0})],mr.prototype,"_tabIndex",void 0),xa([h({type:Boolean})],mr.prototype,"disabled",void 0),xa([h({type:Boolean})],mr.prototype,"focused",void 0),mr=xa([fe({renderer:et,styles:pF}),re("_focused"),re("_forward-after"),re("_forward-before")],mr);const Mc=mr;class br{static hasGroup(e){return this.groups.has(e)}static getGroup(e){return this.groups.get(e)}static getCheckedRadioFromGroup(e){return this.checkedRadios.get(e)}static removeGroup(e){return this.checkedRadios.delete(e),this.groups.delete(e)}static addToGroup(e,n){this.hasGroup(n)?(this.enforceSingleSelection(e,n),this.getGroup(n)&&this.getGroup(n).push(e)):this.createGroup(e,n),this.updateTabOrder(n)}static removeFromGroup(e,n){const o=this.getGroup(n);if(!o)return;const r=this.getCheckedRadioFromGroup(n);o.forEach((i,a,s)=>{if(e._id===i._id)return s.splice(a,1)}),r===e&&this.checkedRadios.set(n,null),o.length||this.removeGroup(n),this.updateTabOrder(n)}static createGroup(e,n){e.checked&&this.checkedRadios.set(n,e),this.groups.set(n,[e])}static selectNextItem(e,n){const o=this.getGroup(n);if(!o)return;const r=o.length,i=o.indexOf(e);if(r<=1)return;const a=this._nextSelectable(i,o);a&&this.updateSelectionInGroup(a,n)}static updateTabOrder(e){const n=this.getGroup(e);if(!n)return;const o=n.some(r=>r.checked);n.filter(r=>!r.disabled).forEach((r,i)=>{o?r._tabIndex=r.checked?"0":"-1":r._tabIndex=i===0?"0":"-1"})}static selectPreviousItem(e,n){const o=this.getGroup(n);if(!o)return;const r=o.length,i=o.indexOf(e);if(r<=1)return;const a=this._previousSelectable(i,o);a&&this.updateSelectionInGroup(a,n)}static selectItem(e,n){this.updateSelectionInGroup(e,n),this.updateTabOrder(n)}static updateSelectionInGroup(e,n){const o=this.getCheckedRadioFromGroup(n);o&&this._deselectRadio(o),this._selectRadio(e),this.checkedRadios.set(n,e)}static _deselectRadio(e){e&&(e.checked=!1)}static _selectRadio(e){e&&(e.focus(),e.checked=!0,e._checked=!0,e.fireEvent("change"))}static _nextSelectable(e,n){if(!n)return null;const o=n.length;let r=null;if(e===o-1){if(n[0].disabled||n[0].readonly)return this._nextSelectable(1,n);r=n[0]}else{if(n[e+1].disabled||n[e+1].readonly)return this._nextSelectable(e+1,n);r=n[e+1]}return r}static _previousSelectable(e,n){const o=n.length;let r=null;if(e===0){if(n[o-1].disabled||n[o-1].readonly)return this._previousSelectable(o-1,n);r=n[o-1]}else{if(n[e-1].disabled||n[e-1].readonly)return this._previousSelectable(e-1,n);r=n[e-1]}return r}static enforceSingleSelection(e,n){const o=this.getCheckedRadioFromGroup(n);e.checked?o?e!==o&&(this._deselectRadio(o),this.checkedRadios.set(n,e)):this.checkedRadios.set(n,e):e===o&&this.checkedRadios.set(n,null),this.updateTabOrder(n)}static get groups(){return this._groups||(this._groups=new Map),this._groups}static get checkedRadios(){return this._checkedRadios||(this._checkedRadios=new Map),this._checkedRadios}}function hF(t,e,n){return p`<div class="ui5-radio-root" role="radio" aria-checked="${u(this.checked)}" aria-disabled="${u(this.effectiveAriaDisabled)}" aria-describedby="${u(this.effectiveAriaDescribedBy)}" aria-label="${u(this.ariaLabelText)}" tabindex="${u(this.effectiveTabIndex)}" @click="${this._onclick}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @mousedown="${this._onmousedown}" @mouseup="${this._onmouseup}" @focusout="${this._onfocusout}"><div class='ui5-radio-inner ${Y(this.classes.inner)}'><svg class="ui5-radio-svg" focusable="false" aria-hidden="true">${vF.call(this,t,e,n)}</svg><input type='radio' ?required="${this.required}" ?checked="${this.checked}" ?readonly="${this.readonly}" ?disabled="${this.effectiveAriaDisabled}" name="${u(this.name)}"  data-sap-no-tab-ref/></div>${this.text?fF.call(this,t,e,n):void 0}${this.hasValueState?gF.call(this,t,e,n):void 0}<slot name="formSupport"></slot></div>`}function fF(t,e,n){return n?p`<${k("ui5-label",e,n)} id="${u(this._id)}-label" class="ui5-radio-label" for="${u(this._id)}" wrapping-type="${u(this.wrappingType)}">${u(this.text)}</${k("ui5-label",e,n)}>`:p`<ui5-label id="${u(this._id)}-label" class="ui5-radio-label" for="${u(this._id)}" wrapping-type="${u(this.wrappingType)}">${u(this.text)}</ui5-label>`}function gF(t,e,n){return p`<span id="${u(this._id)}-descr" class="ui5-hidden-text">${u(this.valueStateText)}</span>`}function vF(t,e,n){return Gs`<circle class="ui5-radio-svg-outer" cx="50%" cy="50%" r="50%" /><circle class="ui5-radio-svg-inner" cx="50%" cy="50%" />`}V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const mF={packageName:"@ui5/webcomponents",fileName:"themes/RadioButton.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}

:host(:not([hidden])) {
	display: inline-block;
}

:host {
	min-width: var(--_ui5_radio_button_min_width);
	max-width: 100%;
	text-overflow: ellipsis;
	overflow: hidden;
	color: var(--_ui5_radio_button_color);
	border-radius: var(--_ui5_radio_button_border_radius);
	transition: var(--_ui5_radio_button_transition);
}

:host(:not([disabled])) .ui5-radio-root {
	cursor: pointer;
}

/* checked */

:host([checked]) {
	color: var(--_ui5_radio_button_checked_fill);
}

:host([checked]) .ui5-radio-svg-inner {
	fill: var(--_ui5_radio_button_inner_ring_color);
}

:host([checked]) .ui5-radio-svg-outer {
	stroke: var(--_ui5_radio_button_outer_ring_color);
}

/* disabled */

:host([disabled]) .ui5-radio-root {
	color: var(--_ui5_radio_button_color);
	opacity: var(--sapContent_DisabledOpacity);
}

:host([disabled][checked]) .ui5-radio-svg-outer {
	stroke: var(--_ui5_radio_button_color);
}

/* focused */

:host(:not([disabled])) .ui5-radio-root:focus:before {
	content: "";
	display: var(--_ui5_radio_button_focus_outline);
	position: absolute;
	top: var(--_ui5_radio_button_focus_dist);
	bottom: var(--_ui5_radio_button_focus_dist);
	left: var(--_ui5_radio_button_focus_dist);
	right: var(--_ui5_radio_button_focus_dist);
	pointer-events: none;
	border: var(--_ui5_radio_button_border_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	border-radius: var(--_ui5_radio_button_border_radius);
}

/* horizon readonly focus */

:host(:not([disabled])[readonly]) .ui5-radio-root:focus:before {
	border: var(--_ui5_radio_button_border_width) var(--_ui5_radio_button_border_readonly_focus_style) var(--sapContent_FocusColor);
}

:host(:not([disabled])) .ui5-radio-root:focus {
	border-radius: var(--_ui5_radio_button_border_radius);
	border: var(--_ui5_radio_button_focus_border);
}

/* hovered */

:host(:not([disabled]):hover) {
	background: var(--_ui5_radio_button_hover_background);
	box-shadow: var(--_ui5_radio_button_hover_shadow);
}

/* hovered and value-state */

:host(:not([value-state="Error"]):not([value-state="Warning"]):not([value-state="Success"]):not([value-state="Information"])) .ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer {
	stroke: var(--_ui5_radio_button_outer_ring_hover_color);
}

:host(:not([value-state="Error"]):not([value-state="Warning"]):not([value-state="Success"]):not([value-state="Information"])) .ui5-radio-root:hover .ui5-radio-inner--hoverable {
	filter: drop-shadow(var(--_ui5_radio_button_outer_ring_hover_shadow));
}

:host(:not([value-state="Error"]):not([value-state="Warning"]):not([value-state="Success"]):not([value-state="Information"])[checked]) .ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer {
	stroke: var(--_ui5_radio_button_outer_ring_checked_hover_color);
}

.ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer,
:host([checked]) .ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer {
	fill: var(--_ui5_radio_button_hover_fill);
}

/* active, checked */

:host([active][checked]:not([value-state]):not([disabled]):not([readonly])) .ui5-radio-svg-outer {
	stroke: var(--_ui5_radio_button_outer_ring_checked_hover_color);
}

/* active, not checked */

:host([active]:not([checked]):not([value-state]):not([disabled]):not([readonly])) .ui5-radio-svg-outer {
	stroke: var(--_ui5_radio_button_outer_ring_active_color);
}

/* with label */

:host([text]) .ui5-radio-root:focus:before {
	inset-inline: var(--_ui5_radio_button_focus_dist) 0;
}

:host([text]) .ui5-radio-inner {
	padding: var(--_ui5_radio_button_outer_ring_padding_with_label);
}

/* readonly */

:host([checked][readonly]) .ui5-radio-svg-inner {
	fill: var(--_ui5_radio_button_read_only_inner_ring_color);
}

:host([readonly]) .ui5-radio-root .ui5-radio-svg-outer {
	fill: var(--sapField_ReadOnly_Background);
	stroke: var(--sapField_ReadOnly_BorderColor);
	stroke-dasharray: var(--_ui5_radio_button_read_only_border_type);
	stroke-width: var(--_ui5_radio_button_read_only_border_width);
}

/* value states */

:host([value-state="Error"]) .ui5-radio-svg-outer,
:host([value-state="Warning"]) .ui5-radio-svg-outer {
	stroke-width: var(--sapField_InvalidBorderWidth);
}

:host([value-state="Information"]) .ui5-radio-svg-outer {
	stroke-width: var(--_ui5_radio_button_information_border_width);
}

/* Error state */

:host([value-state="Error"][checked]) .ui5-radio-svg-inner {
	fill: var(--_ui5_radio_button_checked_error_fill);
}

:host([value-state="Error"]) .ui5-radio-svg-outer,
:host([value-state="Error"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer {
	stroke: var(--sapField_InvalidColor);
	fill: var(--sapField_InvalidBackground);
}

:host([value-state="Error"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer {
	fill: var(--_ui5_radio_button_hover_fill_error);
}

:host([value-state="Error"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable {
	filter: drop-shadow(var(--_ui5_radio_button_outer_ring_hover_shadow_error));
}

/* Warning state */

:host([value-state="Warning"][checked]) .ui5-radio-svg-inner {
	fill: var(--_ui5_radio_button_checked_warning_fill);
}

:host([value-state="Warning"]) .ui5-radio-svg-outer,
:host([value-state="Warning"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer {
	stroke: var(--sapField_WarningColor);
	fill: var(--sapField_WarningBackground);
}

:host([value-state="Warning"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer {
	fill: var(--_ui5_radio_button_hover_fill_warning);
}

:host([value-state="Warning"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable {
	filter: drop-shadow(var(--_ui5_radio_button_outer_ring_hover_shadow_warning));
}

/* Success state */

:host([value-state="Success"][checked]) .ui5-radio-svg-inner {
	fill: var(--_ui5_radio_button_checked_success_fill);
}

:host([value-state="Success"]) .ui5-radio-svg-outer,
:host([value-state="Success"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer {
	stroke: var(--sapField_SuccessColor);
	fill: var(--sapField_SuccessBackground);
}

:host([value-state="Success"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer {
	fill: var(--_ui5_radio_button_hover_fill_success);
}

:host([value-state="Success"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable {
	filter: drop-shadow(var(--_ui5_radio_button_outer_ring_hover_shadow_success));
}

/* Information state */

:host([value-state="Information"][checked]) .ui5-radio-svg-inner {
	fill: var(--_ui5_radio_button_checked_information_fill);
}

:host([value-state="Information"]) .ui5-radio-svg-outer,
:host([value-state="Information"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer {
	stroke: var(--sapField_InformationColor);
	fill: var(--sapField_InformationBackground);
}

:host([value-state="Information"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer {
	fill: var(--_ui5_radio_button_hover_fill_information);
}

:host([value-state="Information"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable {
	filter: drop-shadow(var(--_ui5_radio_button_outer_ring_hover_shadow_information));
}

:host([value-state="Error"]) .ui5-radio-root,
:host([value-state="Warning"]) .ui5-radio-root,
:host([value-state="Information"]) .ui5-radio-root {
	stroke-dasharray: var(--_ui5_radio_button_warning_error_border_dash);
}

.ui5-radio-root {
	height: var(--_ui5_radio_button_height);
	position: relative;
	display: inline-flex;
	flex-wrap: nowrap;
	outline: none;
	max-width: 100%;
	width: var(--_ui5_radio_button_inner_width);
	box-sizing: border-box;
	border: var(--_ui5_radio_button_border);
	border-radius: var(--_ui5_radio_button_border_radius);
	transition: var(--_ui5_radio_button_transition);
}

/* Inner */

.ui5-radio-inner {
	display: flex;
	align-items: center;
	padding: var(--_ui5_radio_button_outer_ring_padding);
	flex-shrink: 0;
	height: var(--_ui5_radio_button_inner_size);
	font-size: 1rem; /* override font size of the message dialog */
	pointer-events: none;
	vertical-align: top;
}

.ui5-radio-inner {
	outline: none;
}

.ui5-radio-inner input {
	-webkit-appearance: none;
	visibility: hidden;
	width: 0;
	left: 0;
	position: absolute;
	font-size: inherit;
	margin: 0; /* FF puts margin */
}

/* Label */

[ui5-label].ui5-radio-label {
	display: flex;
	align-items: center;
	padding-inline-end: var(--_ui5_radio_button_label_offset);
	vertical-align: top;
	max-width: 100%;
	text-overflow: ellipsis;
	overflow: hidden;
	pointer-events: none;
	color: var(--_ui5_radio_button_label_color);
}

:host([wrapping-type="Normal"][text]) .ui5-radio-root {
	height: auto;
}

:host([wrapping-type="Normal"][text]) [ui5-label].ui5-radio-label {
	padding: var(--_ui5_radio_button_label_side_padding) 0;
	overflow-wrap: break-word;
}

/* SVG */

.ui5-radio-svg {
	height: var(--_ui5_radio_button_svg_size);
	width: var(--_ui5_radio_button_svg_size);
	overflow: visible;
	pointer-events: none;
}

.ui5-radio-svg-outer {
	fill: var(--_ui5_radio_button_outer_ring_bg);
	stroke: currentColor;
	stroke-width: var(--_ui5_radio_button_outer_ring_width);
}

.ui5-radio-svg-inner {
	fill: none;
	r: var(--_ui5_radio_button_inner_ring_radius);
}

.ui5-radio-svg-outer,
.ui5-radio-svg-inner {
	flex-shrink: 0;
}

/* ListItem Context */

:host(.ui5-li-singlesel-radiobtn) .ui5-radio-root .ui5-radio-inner .ui5-radio-svg-outer {
	fill: var(--sapList_Background);
}
`};var Qt=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},fi;let R1=!1,Vf,St=fi=class extends Ce{constructor(){super(),this._deactivate=()=>{Vf&&(Vf.active=!1)},R1||(document.addEventListener("mouseup",this._deactivate),R1=!0)}static async onDefine(){fi.i18nBundle=await Re("@ui5/webcomponents")}onBeforeRendering(){this.syncGroup(),this._enableFormSupport()}onExitDOM(){this.syncGroup(!0)}syncGroup(e){const n=this._name,o=this.name,r=this._checked,i=this.checked;e&&br.removeFromGroup(this,n),o!==n?(n&&br.removeFromGroup(this,n),o&&br.addToGroup(this,o)):o&&br.enforceSingleSelection(this,o),this.name&&i!==r&&br.updateTabOrder(this.name),this._name=this.name,this._checked=this.checked}_enableFormSupport(){const e=Xe("FormSupport");e?e.syncNativeHiddenInput(this,(n,o)=>{o.value=n.value,o.type="radio",o.checked=n.checked}):this.value&&console.warn('In order for the "value" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";')}_onclick(){return this.toggle()}_handleDown(e){const n=this.name;n&&(e.preventDefault(),br.selectNextItem(this,n))}_handleUp(e){const n=this.name;n&&(e.preventDefault(),br.selectPreviousItem(this,n))}_onkeydown(e){if(Le(e))return this.active=!0,e.preventDefault();if(tt(e))return this.active=!0,this.toggle();const n=this.effectiveDir==="rtl";(xo(e)||!n&&ga(e)||n&&fa(e))&&this._handleDown(e),(dr(e)||!n&&fa(e)||n&&ga(e))&&this._handleUp(e)}_onkeyup(e){Le(e)&&this.toggle(),this.active=!1}_onmousedown(){this.active=!0,Vf=this}_onmouseup(){this.active=!1}_onfocusout(){this.active=!1}toggle(){return this.canToggle()?this.name?(br.selectItem(this,this.name),this):(this.checked=!this.checked,this.fireEvent("change"),this):this}canToggle(){return!(this.disabled||this.readonly||this.checked)}get classes(){return{inner:{"ui5-radio-inner--hoverable":!this.disabled&&!this.readonly&&ea()}}}get effectiveAriaDisabled(){return this.disabled?"true":null}get ariaLabelText(){return[cr(this),this.text].filter(Boolean).join(" ")}get effectiveAriaDescribedBy(){return this.hasValueState?`${this._id}-descr`:void 0}get hasValueState(){return this.valueState!==z.None}get valueStateText(){switch(this.valueState){case z.Error:return fi.i18nBundle.getText(ma);case z.Warning:return fi.i18nBundle.getText(ba);case z.Success:return fi.i18nBundle.getText(ya);case z.Information:return fi.i18nBundle.getText(Zs);default:return""}}get effectiveTabIndex(){const e=this.getAttribute("tabindex");return this.disabled?"-1":this.name?this._tabIndex:e||"0"}get strokeWidth(){return this.valueState==="None"?"1":"2"}};Qt([h({type:Boolean})],St.prototype,"disabled",void 0),Qt([h({type:Boolean})],St.prototype,"readonly",void 0),Qt([h({type:Boolean})],St.prototype,"required",void 0),Qt([h({type:Boolean})],St.prototype,"checked",void 0),Qt([h()],St.prototype,"text",void 0),Qt([h({type:z,defaultValue:z.None})],St.prototype,"valueState",void 0),Qt([h()],St.prototype,"name",void 0),Qt([h()],St.prototype,"value",void 0),Qt([h({type:Ln,defaultValue:Ln.None})],St.prototype,"wrappingType",void 0),Qt([h()],St.prototype,"accessibleName",void 0),Qt([h()],St.prototype,"accessibleNameRef",void 0),Qt([h({defaultValue:"-1",noAttribute:!0})],St.prototype,"_tabIndex",void 0),Qt([h({type:Boolean})],St.prototype,"active",void 0),Qt([ce()],St.prototype,"formSupport",void 0),St=fi=Qt([fe({tag:"ui5-radio-button",languageAware:!0,renderer:et,template:hF,styles:mF,dependencies:[Ec]}),re("change")],St),St.define();const bF=St;V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const yF={packageName:"@ui5/webcomponents",fileName:"themes/ListItem.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}

/* actionable (type="Active" + desktop) */

:host([actionable]:not([disabled])) {
	cursor: pointer;
}

/* selected and hovered */

:host([selected][actionable]:not([active]):hover) {
	background : var(--sapList_Hover_SelectionBackground);
}

/* selected and active */

:host([active][actionable]),
:host([selected][active][actionable]) {
	background: var(--sapList_Active_Background);
}

/* hovered */

:host([actionable]:not([active]):not([selected]):hover) {
	background : var(--sapList_Hover_Background);
}

/* focused */

:host([active][actionable]) .ui5-li-root.ui5-li--focusable:focus,
:host([active][actionable]) .ui5-li-root.ui5-li--focusable .ui5-li-content:focus {
	outline-color: var(--sapContent_ContrastFocusColor);
}

/* navigated */

:host([navigated]) .ui5-li-root .ui5-li-navigated {
	width: 0.1875rem;
	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
	background-color: var(--sapList_SelectionBorderColor);
}

/* active */

:host([active][actionable]) .ui5-li-root .ui5-li-icon {
	color: var(--sapList_Active_TextColor);
}

/* [ui5-li]: title, description, additionalTextState */

:host([active][actionable]) .ui5-li-title,
:host([active][actionable]) .ui5-li-desc,
:host([active][actionable]) .ui5-li-additional-text {
	color: var(--sapList_Active_TextColor);
}

/* [ui5-li]: additionalTextState */

:host([additional-text-state="Warning"]) .ui5-li-additional-text {
	color: var(--sapCriticalTextColor);
}

:host([additional-text-state="Success"]) .ui5-li-additional-text {
	color: var(--sapPositiveTextColor);
}

:host([additional-text-state="Error"]) .ui5-li-additional-text {
	color: var(--sapNegativeTextColor);
}

:host([additional-text-state="Information"]) .ui5-li-additional-text {
	color: var(--sapInformativeTextColor);
}

/* [ui5-li]: item with title and description */

:host([has-title][description]) {
	height: 5rem;
}

:host([has-title][image]) {
	height: 5rem;
}

:host([_has-image-content]) {
	height: 5rem;
}

:host([image]) .ui5-li-content {
	height: 3rem;
}

:host([description]) .ui5-li-root {
	padding: 1rem;
}

:host([description]) .ui5-li-content {
	height: 3rem;
}

:host([has-title][description]) .ui5-li-title {
	padding-bottom: 0.375rem;
}

.ui5-li-text-wrapper {
	display: flex;
	flex-direction: column;
	flex: auto;
	min-width: 1px;
	line-height: normal;
}

:host([description]) .ui5-li-text-wrapper {
	height: 100%;
	justify-content: space-between;
	padding: 0.125rem 0;
}

.ui5-li-description-info-wrapper {
	display: flex;
	justify-content: space-between;
}

.ui5-li-title {
	color: var(--sapTextColor);
	font-size: var(--_ui5_list_item_title_size);
}

.ui5-li-additional-text,
:host(:not([wrapping-type="Normal"])) .ui5-li-title,
.ui5-li-desc {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

:host([wrapping-type="Normal"]) {
	height: auto;
}

:host([wrapping-type="Normal"]) .ui5-li-content {
	margin: var(--_ui5_list_item_content_vertical_offset) 0;
}

.ui5-li-desc {
	color: var(--sapContent_LabelColor);
	font-size: var(--sapFontSize);
}

.ui5-li-additional-text {
	margin: 0 0.25rem;
	color: var(--sapNeutralTextColor);
	font-size: 0.875rem;
	min-width: 3.75rem;
	text-align: end;
}

:host([description]) .ui5-li-additional-text {
	align-self: flex-end;
}

.ui5-li-img {
	width: var(--_ui5_list_item_img_size);
	height: var(--_ui5_list_item_img_size);
	border-radius: var(--ui5-avatar-border-radius);
}

.ui5-li-img,
.ui5-li-imgContent {
	min-width: var(--_ui5_list_item_img_size);
	min-height: var(--_ui5_list_item_img_size);
	margin-top: var(--_ui5_list_item_img_top_margin);
	margin-bottom: var(--_ui5_list_item_img_bottom_margin);
	margin-inline-end: var(--_ui5_list_item_img_hn_margin);
}

.ui5-li-img-inner {
	object-fit: contain;
}

.ui5-li-icon {
	min-width: var(--_ui5_list_item_icon_size);
	min-height: var(--_ui5_list_item_icon_size);
	color: var(--sapContent_NonInteractiveIconColor);
	padding-inline-end: var(--_ui5_list_item_icon_padding-inline-end);
}

.ui5-li-content {
	display: flex;
	align-items: center;
	flex: auto;
	overflow: hidden;
}

.ui5-li-detailbtn,
.ui5-li-deletebtn {
	display: flex;
	align-items: center;
	margin-left: var(--_ui5_list_buttons_left_space);
}

.ui5-li-multisel-cb,
.ui5-li-singlesel-radiobtn {
	flex-shrink: 0;
}

:host([description]) .ui5-li-singlesel-radiobtn {
	align-self: flex-start;
	margin-top: var(--_ui5_list_item_selection_btn_margin_top);
}

:host([description]) .ui5-li-multisel-cb {
	align-self: flex-start;
	margin-top: var(--_ui5_list_item_selection_btn_margin_top);
}

:host([_mode="SingleSelectBegin"]) .ui5-li-root {
	padding-inline: 0 1rem;
}

:host([_mode="MultiSelect"]) .ui5-li-root {
	padding-inline: 0 1rem;
}

:host([_mode="SingleSelectEnd"]) .ui5-li-root {
	padding-inline: 1rem 0;
}

:host [ui5-checkbox].ui5-li-singlesel-radiobtn {
	margin-right: var(--_ui5_list_item_cb_margin_right);
}
`};var Wf;(function(t){t.Dialog="Dialog",t.Grid="Grid",t.ListBox="ListBox",t.Menu="Menu",t.Tree="Tree"})(Wf||(Wf={}));const CF=Wf,wF="slim-arrow-right",L1="M357.5 233q10 10 10 23t-10 23l-165 165q-12 11-23 0t0-23l160-159q6-6 0-12l-159-159q-5-5-5-11t5-11 11-5 11 5z";ne(wF,{pathData:L1,ltr:!1,collection:"SAP-icons-v4",packageName:"@ui5/webcomponents-icons"});const SF="slim-arrow-right",N1="M186 416q-11 0-18.5-7.5T160 390q0-10 8-18l121-116-121-116q-8-8-8-18 0-11 7.5-18.5T186 96q10 0 17 7l141 134q8 8 8 19 0 12-8 18L203 409q-7 7-17 7z";ne(SF,{pathData:N1,ltr:!1,collection:"SAP-icons-v5",packageName:"@ui5/webcomponents-icons"}),Ze();var Zt=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},yr;let At=yr=class extends Mc{constructor(){super(),this.deactivateByKey=n=>{tt(n)&&this.deactivate()},this.deactivate=()=>{this.active&&(this.active=!1)};const e=n=>{this._onmousedown(n)};this._ontouchstart={handleEvent:e,passive:!0}}onBeforeRendering(){this.actionable=(this.type===ln.Active||this.type===ln.Navigation)&&this._mode!==ze.Delete}onEnterDOM(){document.addEventListener("mouseup",this.deactivate),document.addEventListener("touchend",this.deactivate),document.addEventListener("keyup",this.deactivateByKey)}onExitDOM(){document.removeEventListener("mouseup",this.deactivate),document.removeEventListener("keyup",this.deactivateByKey),document.removeEventListener("touchend",this.deactivate)}_onkeydown(e){super._onkeydown(e);const n=this.type===ln.Active,o=this.typeNavigation;Le(e)&&e.preventDefault(),(Le(e)||tt(e))&&(n||o)&&this.activate(),tt(e)&&this.fireItemPress(e)}_onkeyup(e){(Le(e)||tt(e))&&this.deactivate(),Le(e)&&this.fireItemPress(e),this.modeDelete&&Bc(e)&&this.onDelete()}_onmousedown(e){tl(e)!=="button"&&this.activate()}_onmouseup(e){tl(e)!=="button"&&this.deactivate()}_ontouchend(e){this._onmouseup(e)}_onfocusout(){super._onfocusout(),this.deactivate()}_onclick(e){tl(e)!=="button"&&this.fireItemPress(e)}onMultiSelectionComponentPress(e){this.isInactive||this.fireEvent("_selection-requested",{item:this,selected:e.target.checked,selectionComponentPressed:!0})}onSingleSelectionComponentPress(e){this.isInactive||this.fireEvent("_selection-requested",{item:this,selected:!e.target.checked,selectionComponentPressed:!0})}activate(){(this.type===ln.Active||this.type===ln.Navigation)&&(this.active=!0)}onDelete(){this.fireEvent("_selection-requested",{item:this,selectionComponentPressed:!1})}onDetailClick(){this.fireEvent("detail-click",{item:this,selected:this.selected})}fireItemPress(e){this.isInactive||(tt(e)&&e.preventDefault(),this.fireEvent("_press",{item:this,selected:this.selected,key:e.key}))}get isInactive(){return this.type===ln.Inactive||this.type===ln.Detail}get placeSelectionElementBefore(){return this._mode===ze.MultiSelect||this._mode===ze.SingleSelectBegin}get placeSelectionElementAfter(){return!this.placeSelectionElementBefore&&(this._mode===ze.SingleSelectEnd||this._mode===ze.Delete)}get modeSingleSelect(){return[ze.SingleSelectBegin,ze.SingleSelectEnd,ze.SingleSelect].includes(this._mode)}get modeMultiSelect(){return this._mode===ze.MultiSelect}get modeDelete(){return this._mode===ze.Delete}get renderDeleteButton(){return this.modeDelete}get typeDetail(){return this.type===ln.Detail}get typeNavigation(){return this.type===ln.Navigation}get typeActive(){return this.type===ln.Active}get _ariaSelected(){if(this.modeMultiSelect||this.modeSingleSelect)return this.selected}get ariaSelectedText(){let e;return this._ariaSelected!==void 0&&(e=this._ariaSelected?yr.i18nBundle.getText(aA):yr.i18nBundle.getText(sA)),e}get deleteText(){return yr.i18nBundle.getText(Y$)}get hasDeleteButtonSlot(){return!!this.deleteButton.length}get _accessibleNameRef(){return this.accessibleName?`${this._id}-invisibleText`:`${this._id}-content ${this._id}-invisibleText`}get _accInfo(){return{role:this.accessibleRole||this.role,ariaExpanded:void 0,ariaLevel:this._level||void 0,ariaLabel:yr.i18nBundle.getText(uA),ariaLabelRadioButton:yr.i18nBundle.getText(cA),ariaSelectedText:this.ariaSelectedText,ariaHaspopup:this.ariaHaspopup||void 0,setsize:this.accessibilityAttributes.ariaSetsize,posinset:this.accessibilityAttributes.ariaPosinset}}get hasConfigurableMode(){return!0}static async onDefine(){yr.i18nBundle=await Re("@ui5/webcomponents")}};Zt([h({type:ln,defaultValue:ln.Active})],At.prototype,"type",void 0),Zt([h({type:Object})],At.prototype,"accessibilityAttributes",void 0),Zt([h({type:Boolean})],At.prototype,"navigated",void 0),Zt([h({type:Boolean})],At.prototype,"active",void 0),Zt([h()],At.prototype,"title",void 0),Zt([h({type:Boolean})],At.prototype,"actionable",void 0),Zt([h({defaultValue:"listitem"})],At.prototype,"role",void 0),Zt([h({defaultValue:void 0,noAttribute:!0})],At.prototype,"accessibleRoleDescription",void 0),Zt([h()],At.prototype,"accessibleRole",void 0),Zt([h({type:ze,defaultValue:ze.None})],At.prototype,"_mode",void 0),Zt([h({type:CF,noAttribute:!0})],At.prototype,"ariaHaspopup",void 0),Zt([h({type:kn})],At.prototype,"_level",void 0),Zt([h({type:Boolean,noAttribute:!0})],At.prototype,"disableDeleteButton",void 0),Zt([ce()],At.prototype,"deleteButton",void 0),At=yr=Zt([fe({languageAware:!0,styles:[Mc.styles,yF],dependencies:[ci,bF,LA]}),re("detail-click"),re("_press"),re("_focused"),re("_selection-requested")],At);const D1=At;function kF(t,e,n){return p`<li part="native-li" data-sap-focus-ref tabindex="${u(this._effectiveTabIndex)}" class="${Y(this.classes.main)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" @mouseup="${this._onmouseup}" @mousedown="${this._onmousedown}" @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" @click="${this._onclick}" role="${u(this._accInfo.role)}" aria-expanded="${u(this._accInfo.ariaExpanded)}" title="${u(this.title)}" aria-level="${u(this._accInfo.ariaLevel)}" aria-haspopup="${u(this._accInfo.ariaHaspopup)}" aria-posinset="${u(this._accInfo.posinset)}" aria-roledescription="${u(this.accessibleRoleDescription)}" aria-setsize="${u(this._accInfo.setsize)}" aria-describedby="${u(this._id)}-invisibleText-describedby" aria-labelledby="${u(this._accessibleNameRef)}" aria-disabled="${u(this._ariaDisabled)}" aria-selected="${u(this._accInfo.ariaSelected)}" aria-checked="${u(this._accInfo.ariaChecked)}" aria-owns="${u(this._accInfo.ariaOwns)}">${this.placeSelectionElementBefore?xF.call(this,t,e,n):void 0}<div id="${u(this._id)}-content" class="ui5-li-content">${this.hasImageContent?EF.call(this,t,e,n):PF.call(this,t,e,n)}${this.displayIconBegin?RF.call(this,t,e,n):void 0}<div class="ui5-li-text-wrapper"><span part="title" class="ui5-li-title"><slot></slot></span>${this.description?LF.call(this,t,e,n):void 0}${this.typeActive?void 0:DF.call(this,t,e,n)}</div>${this.description?void 0:OF.call(this,t,e,n)}</div>${this.displayIconEnd?MF.call(this,t,e,n):void 0}${this.typeDetail?zF.call(this,t,e,n):void 0}${this.typeNavigation?jF.call(this,t,e,n):void 0}${this.navigated?VF.call(this,t,e,n):void 0}${this.placeSelectionElementAfter?WF.call(this,t,e,n):void 0}<span id="${u(this._id)}-invisibleText" class="ui5-hidden-text">${u(this._accInfo.listItemAriaLabel)}${u(this.accessibleName)}</span><span id="${u(this._id)}-invisibleText-describedby" class="ui5-hidden-text">${u(this._accInfo.ariaSelectedText)}</span></li> `}function xF(t,e,n){return p`${this.modeSingleSelect?BF.call(this,t,e,n):void 0}${this.modeMultiSelect?TF.call(this,t,e,n):void 0}${this.renderDeleteButton?IF.call(this,t,e,n):void 0}`}function BF(t,e,n){return n?p`<${k("ui5-radio-button",e,n)} ?disabled="${this.isInactive}" accessible-name="${u(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${u(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${k("ui5-radio-button",e,n)}>`:p`<ui5-radio-button ?disabled="${this.isInactive}" accessible-name="${u(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${u(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`}function TF(t,e,n){return n?p`<${k("ui5-checkbox",e,n)} ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${u(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${u(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${k("ui5-checkbox",e,n)}>`:p`<ui5-checkbox ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${u(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${u(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`}function IF(t,e,n){return p`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot?$F.call(this,t,e,n):AF.call(this,t,e,n)}</div>`}function $F(t,e,n){return p`<slot name="deleteButton"></slot>`}function AF(t,e,n){return n?p`<${k("ui5-button",e,n)} tabindex="-1" data-sap-no-tab-ref id="${u(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${u(this.deleteText)}"></${k("ui5-button",e,n)}>`:p`<ui5-button tabindex="-1" data-sap-no-tab-ref id="${u(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${u(this.deleteText)}"></ui5-button>`}function EF(t,e,n){return p`<div class="ui5-li-imgContent"><slot name="imageContent"></slot></div>`}function PF(t,e,n){return p`${this.displayImage?FF.call(this,t,e,n):void 0}`}function FF(t,e,n){return n?p`<${k("ui5-avatar",e,n)} shape="Square" class="ui5-li-img"><img src="${u(this.image)}" class="ui5-li-img-inner" /></${k("ui5-avatar",e,n)}>`:p`<ui5-avatar shape="Square" class="ui5-li-img"><img src="${u(this.image)}" class="ui5-li-img-inner" /></ui5-avatar>`}function RF(t,e,n){return n?p`<${k("ui5-icon",e,n)} part="icon" name="${u(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></${k("ui5-icon",e,n)}>`:p`<ui5-icon part="icon" name="${u(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></ui5-icon>`}function LF(t,e,n){return p`<div class="ui5-li-description-info-wrapper"><span part="description" class="ui5-li-desc">${u(this.description)}</span>${this.additionalText?NF.call(this,t,e,n):void 0}</div>`}function NF(t,e,n){return p`<span part="additional-text" class="ui5-li-additional-text">${u(this.additionalText)}</span>`}function DF(t,e,n){return p`<span class="ui5-hidden-text">${u(this.type)}</span>`}function OF(t,e,n){return p`${this.additionalText?HF.call(this,t,e,n):void 0}`}function HF(t,e,n){return p`<span part="additional-text" class="ui5-li-additional-text">${u(this.additionalText)}</span>`}function MF(t,e,n){return n?p`<${k("ui5-icon",e,n)} part="icon" name="${u(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></${k("ui5-icon",e,n)}>`:p`<ui5-icon part="icon" name="${u(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></ui5-icon>`}function zF(t,e,n){return n?p`<div class="ui5-li-detailbtn"><${k("ui5-button",e,n)} design="Transparent" icon="edit" @click="${this.onDetailClick}"></${k("ui5-button",e,n)}></div>`:p`<div class="ui5-li-detailbtn"><ui5-button design="Transparent" icon="edit" @click="${this.onDetailClick}"></ui5-button></div>`}function jF(t,e,n){return n?p`<${k("ui5-icon",e,n)} name ="slim-arrow-right"></${k("ui5-icon",e,n)}>`:p`<ui5-icon name ="slim-arrow-right"></ui5-icon>`}function VF(t,e,n){return p`<div class="ui5-li-navigated"></div>`}function WF(t,e,n){return p`${this.modeSingleSelect?UF.call(this,t,e,n):void 0}${this.modeMultiSelect?qF.call(this,t,e,n):void 0}${this.renderDeleteButton?GF.call(this,t,e,n):void 0}`}function UF(t,e,n){return n?p`<${k("ui5-radio-button",e,n)} ?disabled="${this.isInactive}" accessible-name="${u(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${u(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${k("ui5-radio-button",e,n)}>`:p`<ui5-radio-button ?disabled="${this.isInactive}" accessible-name="${u(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${u(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`}function qF(t,e,n){return n?p`<${k("ui5-checkbox",e,n)} ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${u(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${u(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${k("ui5-checkbox",e,n)}>`:p`<ui5-checkbox ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${u(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${u(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`}function GF(t,e,n){return p`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot?YF.call(this,t,e,n):XF.call(this,t,e,n)}</div>`}function YF(t,e,n){return p`<slot name="deleteButton"></slot>`}function XF(t,e,n){return n?p`<${k("ui5-button",e,n)} tabindex="-1" data-sap-no-tab-ref id="${u(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${u(this.deleteText)}"></${k("ui5-button",e,n)}>`:p`<ui5-button tabindex="-1" data-sap-no-tab-ref id="${u(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${u(this.deleteText)}"></ui5-button>`}var On=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Kt=class extends D1{onBeforeRendering(){super.onBeforeRendering(),this.hasTitle=!!this.textContent,this._hasImageContent=this.hasImageContent}get displayImage(){return!!this.image}get displayIconBegin(){return!!(this.icon&&!this.iconEnd)}get displayIconEnd(){return!!(this.icon&&this.iconEnd)}get hasImageContent(){return!!this.imageContent.length}};On([h()],Kt.prototype,"description",void 0),On([h()],Kt.prototype,"icon",void 0),On([h({type:Boolean})],Kt.prototype,"iconEnd",void 0),On([h()],Kt.prototype,"image",void 0),On([h()],Kt.prototype,"additionalText",void 0),On([h({type:z,defaultValue:z.None})],Kt.prototype,"additionalTextState",void 0),On([h()],Kt.prototype,"accessibleName",void 0),On([h({type:Ln,defaultValue:Ln.None})],Kt.prototype,"wrappingType",void 0),On([h({type:Boolean})],Kt.prototype,"hasTitle",void 0),On([h({type:Boolean})],Kt.prototype,"_hasImageContent",void 0),On([ce()],Kt.prototype,"imageContent",void 0),Kt=On([fe({tag:"ui5-li",template:kF,dependencies:[...D1.dependencies,Cn,KA]})],Kt),Kt.define();const Uf=Kt,JF="slim-arrow-down",O1="M420.5 187q11-12 23 0 5 5 5 11t-5 11l-165 165q-10 9-23 9t-22-9l-166-165q-5-5-5-11.5t5-11.5 11.5-5 11.5 5l160 160q5 6 11 0z";ne(JF,{pathData:O1,ltr:!1,collection:"SAP-icons-v4",packageName:"@ui5/webcomponents-icons"});const QF="slim-arrow-down",H1="M96 186q0-11 7.5-18.5T122 160q10 0 18 8l116 121 116-121q8-8 18-8 11 0 18.5 7.5T416 186q0 10-7 17L275 344q-8 8-19 8-12 0-18-8L103 203q-7-7-7-17z";ne(QF,{pathData:H1,ltr:!1,collection:"SAP-icons-v5",packageName:"@ui5/webcomponents-icons"}),Ze();const Ao=bt("ui5-busy-indicator",["delay","size","text"],["active"],[],[]);Ao.displayName="BusyIndicator",Ao.defaultProps={delay:1e3,size:Cp.Medium};const we=bt("ui5-button",["accessibleName","accessibleNameRef","design","icon","tooltip","type"],["disabled","iconEnd","submits"],[],["click"]);we.displayName="Button",we.defaultProps={design:ws.Default,type:Qi.Button};const Eo=new WeakMap;class ll{static get tasks(){return Eo}static enqueue(e,n){Eo.has(e)||Eo.set(e,[]),Eo.get(e).push(n)}static run(e,n){return Eo.has(e)||Eo.set(e,[]),n().then(()=>{const o=Eo.get(e);if(o.length>0)return ll.run(e,o.shift());Eo.delete(e)})}static push(e,n){Eo.get(e)?ll.enqueue(e,n):ll.run(e,n)}}const M1=t=>{let e=null,n=!1,o,r,i;const a=new Promise((s,l)=>{i=c=>{e=e||c;const _=c-e,d=t.duration-_;if(_<=t.duration){const v=1-d/t.duration;t.advance(v),n||(o=requestAnimationFrame(i))}else t.advance(1),s()},r=()=>{n=!0,cancelAnimationFrame(o),l(new Error("animation stopped"))}}).catch(s=>s);return ll.push(t.element,()=>(typeof t.beforeStart=="function"&&t.beforeStart(),requestAnimationFrame(i),new Promise(s=>{a.then(()=>s())}))),{promise:()=>a,stop:()=>r}},z1=400;let qf;const ZF=()=>(qf===void 0&&(qf=dx()),qf);V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const zc={packageName:"@ui5/webcomponents",fileName:"themes/ResponsivePopoverCommon.css",content:`/* styles for input in dialog */
.input-root-phone {
	flex: 1;
	position: relative;
	height: var(--_ui5_input_height);
	color: var(--sapField_TextColor);
	font-size: var(--sapFontSize);
	font-family: "72override", var(--sapFontFamily);
	background: var(--sapField_BackgroundStyle);
	background-color: var(--_ui5_input_background_color);
	border: var(--_ui5-input-border);
	border-radius: var(--_ui5_input_border_radius);
	box-sizing: border-box;
}
.input-root-phone [inner-input] {
	padding: 0 0.5rem;
	width: 100%;
	height: 100%;
}
.input-root-phone [inner-input]:focus {
	background-color: var(--sapField_Focus_Background);
}
.input-root-phone:focus-within:before {
	content: '';
	position: absolute;
	pointer-events: none;
	z-index: 2;
	border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	border-radius: var(--_ui5_input_focus_border_radius);
	top: var(--_ui5_input_focus_offset);
	bottom: var(--_ui5_input_focus_offset);
	left: var(--_ui5_input_focus_offset);
	right: var(--_ui5_input_focus_offset);

}
.input-root-phone [value-state="Error"] [input-icon][data-ui5-compact-size],
.input-root-phone [value-state="Success"] [input-icon][data-ui5-compact-size],
.input-root-phone [value-state="Warning"] [input-icon][data-ui5-compact-size] {
	padding: .1875rem .5rem
}
[inner-input] {
	background: transparent;
	color: inherit;
	border: none;
	font-style: normal;
	-webkit-appearance: none;
	-moz-appearance: textfield;
	line-height: normal;
	padding: var(--_ui5_input_inner_padding);
	box-sizing: border-box;
	min-width: 3rem;
	text-overflow: ellipsis;
	flex: 1;
	outline: none;
	font-size: inherit;
	font-family: inherit;
	border-radius: var(--_ui5_input_border_radius);
}
[inner-input]::selection,
[inner-input]::-moz-selection {
	background: var(--sapSelectedColor);
	color: var(--sapContent_ContrastTextColor);
}
/* Input placeholder */
[inner-input]::-webkit-input-placeholder {
	font-style: italic;
	color: var(--sapField_PlaceholderTextColor);
}
[inner-input]::-moz-placeholder {
	font-style: italic;
	color: var(--sapField_PlaceholderTextColor);
}
.input-root-phone[value-state]:not([value-state="None"]) {
	border-width: var(--_ui5_input_state_border_width);
}
.input-root-phone[value-state="Error"] [inner-input],
.input-root-phone[value-state="Warning"] [inner-input] {
	font-style: var(--_ui5_input_error_warning_font_style);
}
.input-root-phone[value-state="Error"] [inner-input] {
	font-weight: var(--_ui5_input_error_font_weight);
}
.input-root-phone[value-state="Error"]:not([readonly]) {
	background: var(--sapField_InvalidBackgroundStyle);
	background-color: var(--sapField_InvalidBackground);
	border-color: var(--_ui5_input_value_state_error_border_color);
}
.input-root-phone[value-state="Error"]:not([readonly]) [inner-input]:focus {
	background-color: var(--_ui5_input_focused_value_state_error_background);
	border-color: var(--_ui5_input_focused_value_state_error_border_color);
}
.input-root-phone[value-state="Error"]:not([readonly]):focus-within:before {
	border-color: var(--_ui5_input_focused_value_state_error_focus_outline_color);
}
.input-root-phone[value-state="Error"]:not([readonly]):not([disabled]),
.input-root-phone[value-state="Warning"]:not([readonly]):not([disabled]),
.input-root-phone[value-state="Information"]:not([readonly]):not([disabled]) {
	border-style: var(--_ui5_input_error_warning_border_style);
}
.input-root-phone[value-state="Warning"]:not([readonly]) {
	background: var(--sapField_WarningBackgroundStyle);
	background-color: var(--sapField_WarningBackground);
	border-color: var(--_ui5_input_value_state_warning_border_color);
}
.input-root-phone[value-state="Warning"]:not([readonly]) [inner-input]:focus {
	background-color: var(--_ui5_input_focused_value_state_warning_background);
	border-color: var(--_ui5_input_focused_value_state_warning_border_color);
}
.input-root-phone[value-state="Warning"]:not([readonly]):focus-within:before {
	border-color: var(--_ui5_input_focused_value_state_warning_focus_outline_color);
}
.input-root-phone[value-state="Success"]:not([readonly]) {
	background: var(--sapField_SuccessBackgroundStyle);
	background-color: var(--sapField_SuccessBackground);
	border-color: var(--_ui5_input_value_state_success_border_color);
	border-width: var(--_ui5_input_value_state_success_border_width);
}
.input-root-phone[value-state="Success"]:not([readonly]) [inner-input]:focus {
	background-color: var(--_ui5_input_focused_value_state_success_background);
	border-color: var(--_ui5_input_focused_value_state_success_border_color);
}
.input-root-phone[value-state="Success"]:not([readonly]):focus-within:before {
	border-color: var(--_ui5_input_focused_value_state_success_focus_outline_color);
}
.input-root-phone[value-state="Information"]:not([readonly]) {
	background: var(--sapField_InformationBackgroundStyle);
	background-color: var(--sapField_InformationBackground);
	border-color: var(--_ui5_input_value_state_information_border_color);
	border-width: var(--_ui5_input_information_border_width);
}
.input-root-phone[value-state="Information"]:not([readonly]) [inner-input]:focus {
	background-color: var(--_ui5_input_focused_value_state_information_background);
	border-color: var(--_ui5_input_focused_value_state_information_border_color);
}
/* MultiComboBox & MultiInput specific */
.ui5-multi-combobox-toggle-button {
	margin-left: 0.5rem;
}
.ui5-responsive-popover-header {
	width: 100%;
	min-height: 2.5rem;
	display: flex;
	flex-direction: column;
}
.ui5-responsive-popover-header-text {
	width: calc(100% - var(--_ui5_button_base_min_width));
}
/* Header and footer layout */
.ui5-responsive-popover-header .row {
	box-sizing: border-box;
	padding: 0.25rem 1rem;
	min-height: 2.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: var(--sapFontHeader5Size);
}
.ui5-responsive-popover-footer {
	display: flex;
	justify-content: flex-end;
	padding: 0.25rem 0;
	width: 100%;
}
.ui5-responsive-popover-close-btn {
	position: absolute;
	right: 1rem;
}

`},KF=t=>{let e=0;return(t.selectionStart||t.selectionStart===0)&&(e=t.selectionDirection==="backward"?t.selectionStart:t.selectionEnd),e},eR=(t,e)=>{t.selectionStart?(t.focus(),t.setSelectionRange(e,e)):t.focus()},tR="not-editable",j1="M443 104q5 7 5 12 0 6-5 11L118 453q-4 4-8 4L0 480l22-110q0-5 4-9L352 36q4-4 11-4t11 4zm-121 99l-46-45L52 381l46 46zm87-88l-46-44-64 64 45 45zm71 204l-63 64-65-64-33 32 66 63-66 66 33 32 65-66 63 66 32-32-66-66 66-63z";ne(tR,{pathData:j1,ltr:!1,collection:"SAP-icons-v4",packageName:"@ui5/webcomponents-icons"});const nR="not-editable",V1="M504 94q7 7 7 18t-7 18L130 505q-9 7-18 7H26q-11 0-18.5-7.5T0 486v-86q0-10 8-18L381 7q9-7 18-7 11 0 18 7zm-55 18l-50-50-50 50 50 50zm-86 86l-50-50L62 400l50 50zm142 270q7 7 7 18t-7.5 18.5T486 512t-18-7l-37-38-38 38q-7 7-18 7t-18.5-7.5T349 486q0-10 8-18l38-37-38-38q-8-8-8-18 0-11 7.5-18.5T375 349q10 0 18 8l38 37 37-37q8-8 18-8 11 0 18.5 7.5T512 375t-7 18l-38 38z";ne(nR,{pathData:V1,ltr:!1,collection:"SAP-icons-v5",packageName:"@ui5/webcomponents-icons"}),Ze();function oR(t,e,n){return p`<div class="ui5-input-root ui5-input-focusable-element" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}"><div class="ui5-input-content"><input id="${u(this._id)}-inner" class="ui5-input-inner" style="${ie(this.styles.innerInput)}" type="${u(this.inputType)}" inner-input ?inner-input-with-icon="${this.icon.length}" ?disabled="${this.disabled}" ?readonly="${this._readonly}" .value="${u(this._innerValue)}" placeholder="${u(this._placeholder)}" maxlength="${u(this.maxlength)}" role="${u(this.accInfo.input.role)}" aria-controls="${u(this.accInfo.input.ariaControls)}" aria-invalid="${u(this.accInfo.input.ariaInvalid)}" aria-haspopup="${u(this.accInfo.input.ariaHasPopup)}" aria-describedby="${u(this.accInfo.input.ariaDescribedBy)}" aria-roledescription="${u(this.accInfo.input.ariaRoledescription)}" aria-autocomplete="${u(this.accInfo.input.ariaAutoComplete)}" aria-expanded="${u(this.accInfo.input.ariaExpanded)}" aria-label="${u(this.accInfo.input.ariaLabel)}" aria-required="${u(this.required)}" @input="${this._handleInput}" @change="${this._handleChange}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click=${this._click} @focusin=${this.innerFocusIn} data-sap-focus-ref step="${u(this.nativeInputAttributes.step)}" min="${u(this.nativeInputAttributes.min)}" max="${u(this.nativeInputAttributes.max)}" />${this.effectiveShowClearIcon?rR.call(this,t,e,n):void 0}${this.icon.length?iR.call(this,t,e,n):void 0}<div class="ui5-input-value-state-icon">${ha(this._valueStateInputIcon)}</div>${this.showSuggestions?aR.call(this,t,e,n):void 0}${this.accInfo.input.ariaDescription?sR.call(this,t,e,n):void 0}${this.hasValueState?lR.call(this,t,e,n):void 0}</div><slot name="formSupport"></slot></div>`}function rR(t,e,n){return n?p`<div @click=${this._clear} @mousedown=${this._iconMouseDown} class="ui5-input-clear-icon-wrapper" input-icon tabindex="-1"><${k("ui5-icon",e,n)} tabindex="-1" class="ui5-input-clear-icon" name="decline"></${k("ui5-icon",e,n)}></div>`:p`<div @click=${this._clear} @mousedown=${this._iconMouseDown} class="ui5-input-clear-icon-wrapper" input-icon tabindex="-1"><ui5-icon tabindex="-1" class="ui5-input-clear-icon" name="decline"></ui5-icon></div>`}function iR(t,e,n){return p`<div class="ui5-input-icon-root"><slot name="icon"></slot></div>`}function aR(t,e,n){return p`<span id="${u(this._id)}-suggestionsText" class="ui5-hidden-text">${u(this.suggestionsText)}</span><span id="${u(this._id)}-selectionText" class="ui5-hidden-text" aria-live="polite" role="status"></span><span id="${u(this._id)}-suggestionsCount" class="ui5-hidden-text" aria-live="polite">${u(this.availableSuggestionsCount)}</span>`}function sR(t,e,n){return p`<span id="${u(this._id)}-descr" class="ui5-hidden-text">${u(this.accInfo.input.ariaDescription)}</span>`}function lR(t,e,n){return p`<span id="${u(this._id)}-valueStateDesc" class="ui5-hidden-text">${u(this.ariaValueStateHiddenText)}</span>`}function uR(t,e,n){return p`${this.showSuggestions?cR.call(this,t,e,n):void 0}${this.hasValueStateMessage?gR.call(this,t,e,n):void 0} `}function cR(t,e,n){return n?p`<${k("ui5-responsive-popover",e,n)} class="${Y(this.classes.popover)}" hide-arrow _disable-initial-focus placement-type="Bottom" horizontal-align="Left" style="${ie(this.styles.suggestionsPopover)}" @ui5-after-open="${u(this._afterOpenPopover)}" @ui5-after-close="${u(this._afterClosePopover)}" @ui5-scroll="${u(this._scroll)}">${this._isPhone?W1.call(this,t,e,n):void 0}${this._isPhone?void 0:Y1.call(this,t,e,n)}<${k("ui5-list",e,n)} separators="${u(this.suggestionSeparators)}" @mousedown="${this.onItemMouseDown}" mode="SingleSelect">${mt(this.suggestionsTexts,(o,r)=>o._id||r,(o,r)=>Q1.call(this,t,e,n,o,r))}</${k("ui5-list",e,n)}>${this._isPhone?K1.call(this,t,e,n):void 0}</${k("ui5-responsive-popover",e,n)}>`:p`<ui5-responsive-popover class="${Y(this.classes.popover)}" hide-arrow _disable-initial-focus placement-type="Bottom" horizontal-align="Left" style="${ie(this.styles.suggestionsPopover)}" @ui5-after-open="${u(this._afterOpenPopover)}" @ui5-after-close="${u(this._afterClosePopover)}" @ui5-scroll="${u(this._scroll)}">${this._isPhone?W1.call(this,t,e,n):void 0}${this._isPhone?void 0:Y1.call(this,t,e,n)}<ui5-list separators="${u(this.suggestionSeparators)}" @mousedown="${this.onItemMouseDown}" mode="SingleSelect">${mt(this.suggestionsTexts,(o,r)=>o._id||r,(o,r)=>Q1.call(this,t,e,n,o,r))}</ui5-list>${this._isPhone?K1.call(this,t,e,n):void 0}</ui5-responsive-popover>`}function W1(t,e,n){return n?p`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${u(this._headerTitleText)}</span><${k("ui5-button",e,n)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._closeRespPopover}"></${k("ui5-button",e,n)}></div><div class="row"><div class="input-root-phone native-input-wrapper"><${k("ui5-input",e,n)} class="ui5-input-inner-phone" type="${u(this.inputType)}" .value="${u(this.value)}" ?show-clear-icon=${this.showClearIcon} placeholder="${u(this.placeholder)}" @ui5-input="${u(this._handleInput)}" @ui5-change="${u(this._handleChange)}"></${k("ui5-input",e,n)}></div></div>${this.hasValueStateMessage?U1.call(this,t,e,n):void 0}</div>`:p`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${u(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._closeRespPopover}"></ui5-button></div><div class="row"><div class="input-root-phone native-input-wrapper"><ui5-input class="ui5-input-inner-phone" type="${u(this.inputType)}" .value="${u(this.value)}" ?show-clear-icon=${this.showClearIcon} placeholder="${u(this.placeholder)}" @ui5-input="${u(this._handleInput)}" @ui5-change="${u(this._handleChange)}"></ui5-input></div></div>${this.hasValueStateMessage?U1.call(this,t,e,n):void 0}</div>`}function U1(t,e,n){return n?p`<div class="${Y(this.classes.popoverValueState)}" style="${ie(this.styles.suggestionPopoverHeader)}"><${k("ui5-icon",e,n)} class="ui5-input-value-state-message-icon" name="${u(this._valueStateMessageInputIcon)}"></${k("ui5-icon",e,n)}>${this.shouldDisplayDefaultValueStateMessage?q1.call(this,t,e,n):G1.call(this,t,e,n)}</div>`:p`<div class="${Y(this.classes.popoverValueState)}" style="${ie(this.styles.suggestionPopoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${u(this._valueStateMessageInputIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage?q1.call(this,t,e,n):G1.call(this,t,e,n)}</div>`}function q1(t,e,n){return p`${u(this.valueStateText)}`}function G1(t,e,n){return p`${mt(this.valueStateMessageText,(o,r)=>o._id||r,(o,r)=>dR.call(this,t,e,n,o,r))}`}function dR(t,e,n,o,r){return p`${u(o)}`}function Y1(t,e,n){return p`${this.hasValueStateMessage?_R.call(this,t,e,n):void 0}`}function _R(t,e,n){return n?p`<div slot="header" ?focused=${this._isValueStateFocused} class="ui5-responsive-popover-header ${Y(this.classes.popoverValueState)}" style=${ie(this.styles.suggestionPopoverHeader)}><${k("ui5-icon",e,n)} class="ui5-input-value-state-message-icon" name="${u(this._valueStateMessageInputIcon)}"></${k("ui5-icon",e,n)}>${this.shouldDisplayDefaultValueStateMessage?X1.call(this,t,e,n):J1.call(this,t,e,n)}</div>`:p`<div slot="header" ?focused=${this._isValueStateFocused} class="ui5-responsive-popover-header ${Y(this.classes.popoverValueState)}" style=${ie(this.styles.suggestionPopoverHeader)}><ui5-icon class="ui5-input-value-state-message-icon" name="${u(this._valueStateMessageInputIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage?X1.call(this,t,e,n):J1.call(this,t,e,n)}</div>`}function X1(t,e,n){return p`${u(this.valueStateText)}`}function J1(t,e,n){return p`${mt(this.valueStateMessageText,(o,r)=>o._id||r,(o,r)=>pR.call(this,t,e,n,o,r))}`}function pR(t,e,n,o,r){return p`${u(o)}`}function Q1(t,e,n,o,r){return p`${o.groupItem?hR.call(this,t,e,n,o,r):fR.call(this,t,e,n,o,r)}`}function hR(t,e,n,o,r){return n?p`<${k("ui5-li-groupheader",e,n)} data-ui5-key="${u(o.key)}">${ha(o.text)}</${k("ui5-li-groupheader",e,n)}>`:p`<ui5-li-groupheader data-ui5-key="${u(o.key)}">${ha(o.text)}</ui5-li-groupheader>`}function fR(t,e,n,o,r){return n?p`<${k("ui5-li-suggestion-item",e,n)} image="${u(o.image)}" icon="${u(o.icon)}" additional-text="${u(o.additionalText)}" type="${u(o.type)}" additional-text-state="${u(o.additionalTextState)}" data-ui5-key="${u(o.key)}">${ha(o.text)}${o.description?Z1.call(this,t,e,n,o,r):void 0}</${k("ui5-li-suggestion-item",e,n)}>`:p`<ui5-li-suggestion-item image="${u(o.image)}" icon="${u(o.icon)}" additional-text="${u(o.additionalText)}" type="${u(o.type)}" additional-text-state="${u(o.additionalTextState)}" data-ui5-key="${u(o.key)}">${ha(o.text)}${o.description?Z1.call(this,t,e,n,o,r):void 0}</ui5-li-suggestion-item>`}function Z1(t,e,n,o,r){return p`<span slot="richDescription">${ha(o.description)}</span>`}function K1(t,e,n){return n?p`<div slot="footer" class="ui5-responsive-popover-footer"><${k("ui5-button",e,n)} design="Transparent" @click="${this._closeRespPopover}">OK</${k("ui5-button",e,n)}></div>`:p`<div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${this._closeRespPopover}">OK</ui5-button></div>`}function gR(t,e,n){return n?p`<${k("ui5-popover",e,n)} skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="${u(this._valueStatePopoverHorizontalAlign)}"><div slot="header" class="${Y(this.classes.popoverValueState)}" style="${ie(this.styles.popoverHeader)}"><${k("ui5-icon",e,n)} class="ui5-input-value-state-message-icon" name="${u(this._valueStateMessageInputIcon)}"></${k("ui5-icon",e,n)}>${this.shouldDisplayDefaultValueStateMessage?eC.call(this,t,e,n):tC.call(this,t,e,n)}</div></${k("ui5-popover",e,n)}>`:p`<ui5-popover skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="${u(this._valueStatePopoverHorizontalAlign)}"><div slot="header" class="${Y(this.classes.popoverValueState)}" style="${ie(this.styles.popoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${u(this._valueStateMessageInputIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage?eC.call(this,t,e,n):tC.call(this,t,e,n)}</div></ui5-popover>`}function eC(t,e,n){return p`${u(this.valueStateText)}`}function tC(t,e,n){return p`${mt(this.valueStateMessageText,(o,r)=>o._id||r,(o,r)=>vR.call(this,t,e,n,o,r))}`}function vR(t,e,n,o,r){return p`${u(o)}`}const mR=/[[\]{}()*+?.\\^$|]/g,bR=t=>t.replace(mR,"\\$&"),nC=(t,e,n)=>{const o=new RegExp(`(^|\\s)${bR(t.toLowerCase())}.*`,"g");return e.filter(r=>{const i=r[n];return o.lastIndex=0,o.test(i.toLowerCase())})},Gf=(t,e,n)=>e.filter(o=>o[n].toLowerCase().startsWith(t.toLowerCase())),yR=Object.freeze(Object.defineProperty({__proto__:null,Contains:(t,e,n)=>e.filter(o=>o[n].toLowerCase().includes(t.toLowerCase())),None:(t,e)=>e,StartsWith:Gf,StartsWithPerTerm:nC},Symbol.toStringTag,{value:"Module"}));V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const CR={packageName:"@ui5/webcomponents",fileName:"themes/Input.css",content:`:host {
	vertical-align: middle;
}
.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}
/*
	This CSS file enables visual alignment of all icons within input elements.
	API:
	- add input-icon attribute to an icon
	- [Optional] pressed attribute set to the icon will enable additional styling (check MultiComboBox, Select, etc.)
*/
[input-icon] {
	color: var(--_ui5_input_icon_color);
	cursor: pointer;
	outline: none;
	padding: var(--_ui5_input_icon_padding);
	border-inline-start: var(--_ui5_input_icon_border);
	min-width: 1rem;
	min-height: 1rem;
	border-radius: var(--_ui5_input_icon_border_radius);
}
[input-icon][pressed] {
	background: var(--_ui5_input_icon_pressed_bg);
	box-shadow: var(--_ui5_input_icon_box_shadow);
	border-inline-start: var(--_ui5_select_hover_icon_left_border);
	color: var(--_ui5_input_icon_pressed_color);
}
[input-icon]:active {
	background-color: var(--sapButton_Active_Background);
	box-shadow: var(--_ui5_input_icon_box_shadow);
	border-inline-start: var(--_ui5_select_hover_icon_left_border);
	color: var(--_ui5_input_icon_pressed_color);
}
[input-icon]:not([pressed]):not(:active):hover {
	background: var(--_ui5_input_icon_hover_bg);
	box-shadow: var(--_ui5_input_icon_box_shadow);
}
[input-icon]:hover {
	border-inline-start: var(--_ui5_select_hover_icon_left_border);
	box-shadow: var(--_ui5_input_icon_box_shadow);
}
:host(:not([hidden])) {
	display: inline-block;
}
:host {
	width: var(--_ui5_input_width);
	min-width: calc(var(--_ui5_input_min_width) + (var(--_ui5-input-icons-count)*var(--_ui5_input_icon_width)));
	margin: var(--_ui5_input_margin_top_bottom) 0;
	height: var(--_ui5_input_height);
	color: var(--sapField_TextColor);
	font-size: var(--sapFontSize);
	font-family: "72override", var(--sapFontFamily);
	font-style: normal;
	border: var(--_ui5-input-border);
	border-radius: var(--_ui5_input_border_radius);
	box-sizing: border-box;
	text-align: start;
	transition: var(--_ui5_input_transition);
	background: var(--sapField_BackgroundStyle);
	background-color: var(--_ui5_input_background_color);
}
:host(:not([readonly])) {
	box-shadow: var(--sapField_Shadow);
}
:host([focused]:not([opened])) {
	border-color: var(--_ui5_input_focused_border_color);
	background-color: var(--sapField_Focus_Background);
}
.ui5-input-focusable-element {
	position: relative;
}
:host([focused]:not([opened])) .ui5-input-focusable-element::after {
	content: var(--ui5_input_focus_pseudo_element_content);
	position: absolute;
	pointer-events: none;
	z-index: 2;
	border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--_ui5_input_focus_outline_color);
	border-radius: var(--_ui5_input_focus_border_radius);
	top: var(--_ui5_input_focus_offset);
	bottom: var(--_ui5_input_focus_offset);
	left: var(--_ui5_input_focus_offset);
	right: var(--_ui5_input_focus_offset);
}
.ui5-input-root::before {
	content: "";
	position: absolute;
	width: calc(100% - 2px);
	left: 1px;
	bottom: -2px;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	height: var(--_ui5_input_bottom_border_height);
	transition: var(--_ui5_input_transition);
	background-color: var(--_ui5_input_bottom_border_color);
}
.ui5-input-root {
	width: 100%;
	height: 100%;
	position: relative;
	background: transparent;
	display: inline-block;
	outline: none;
	box-sizing: border-box;
	color: inherit;
	transition: border-color .2s ease-in-out;
	border-radius: var(--_ui5_input_border_radius);
	overflow: hidden;
}
:host([disabled]) {
	opacity: var(--_ui5_input_disabled_opacity);
	cursor: default;
	pointer-events: none;
	background-color: var(--_ui5-input_disabled_background);
	border-color: var(--_ui5_input_disabled_border_color);
}
:host([disabled]) .ui5-input-root::before,
:host([readonly]) .ui5-input-root::before {
	content: none;
}
[inner-input] {
	background: transparent;
	color: inherit;
	border: none;
	font-style: inherit;
	-webkit-appearance: none;
	-moz-appearance: textfield;
	padding: var(--_ui5_input_inner_padding);
	box-sizing: border-box;
	min-width: var(--_ui5_input_min_width);
	width: 100%;
	text-align: inherit;
	text-overflow: ellipsis;
	flex: 1;
	outline: none;
	font-size: inherit;
	font-family: inherit;
	line-height: inherit;
	letter-spacing: inherit;
	word-spacing: inherit;
	text-align: inherit;
}
[inner-input][inner-input-with-icon] {
	padding: var(--_ui5_input_inner_padding_with_icon);
}
.ui5-input-value-state-icon {
	height: 100%;
	display: var(--_ui5-input-value-state-icon-display);
	align-items: center;
}
.ui5-input-value-state-icon > svg {
	margin-right: 8px;
}
[inner-input]::selection {
	background: var(--sapSelectedColor);
	color: var(--sapContent_ContrastTextColor);
}
/* Input placeholder */
:host([disabled]) [inner-input]::-webkit-input-placeholder {
	visibility: hidden;
}
:host([readonly]) [inner-input]::-webkit-input-placeholder {
	visibility: hidden;
}
:host([disabled]) [inner-input]::-moz-placeholder {
	visibility: hidden;
}
:host([readonly]) [inner-input]::-moz-placeholder {
	visibility: hidden;
}
[inner-input]::-webkit-input-placeholder {
	font-weight: normal;
	font-style: var(--_ui5_input_placeholder_style);
	color: var(--_ui5_input_placeholder_color);
	padding-right: 0.125rem;
}
[inner-input]::-moz-placeholder {
	font-weight: normal;
	font-style: var(--_ui5_input_placeholder_style);
	color: var(--_ui5_input_placeholder_color);
	padding-right: 0.125rem;
}
:host([value-state="Error"]) [inner-input]::-webkit-input-placeholder {
	color: var(--_ui5-input_error_placeholder_color);
	font-weight: var(--_ui5_input_value_state_error_warning_placeholder_font_weight);
}
:host([value-state="Error"]) [inner-input]::-moz-placeholder {
	color: var(--_ui5-input_error_placeholder_color);
	font-weight: var(--_ui5_input_value_state_error_warning_placeholder_font_weight);
}
:host([value-state="Warning"]) [inner-input]::-webkit-input-placeholder {
	font-weight: var(--_ui5_input_value_state_error_warning_placeholder_font_weight);
}
:host([value-state="Warning"]) [inner-input]::-moz-placeholder {
	font-weight: var(--_ui5_input_value_state_error_warning_placeholder_font_weight);
}
:host([value-state="Success"]) [inner-input]::-webkit-input-placeholder {
	color: var(--_ui5_input_placeholder_color);
}
:host([value-state="Success"]) [inner-input]::-moz-placeholder {
	color: var(--_ui5_input_placeholder_color);
}
:host([value-state="Information"]) [inner-input]::-webkit-input-placeholder {
	color: var(--_ui5_input_placeholder_color);
}
:host([value-state="Information"]) [inner-input]::-moz-placeholder {
	color: var(--_ui5_input_placeholder_color);
}
.ui5-input-content {
	height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	overflow: hidden;
	outline: none;
	background: transparent;
	color: inherit;
	border-radius: var(--_ui5_input_border_radius);
}
:host([readonly]) {
	border-color: var(--_ui5_input_readonly_border_color);
	background: var(--sapField_ReadOnly_BackgroundStyle);
	background-color: var(--_ui5_input_readonly_background);
}
:host([value-state="None"]:not([readonly]):hover),
:host(:not([value-state]):not([readonly]):hover) {
	border: var(--_ui5_input_hover_border);
	border-color: var(--_ui5_input_focused_border_color);
	box-shadow: var(--sapField_Hover_Shadow);
	background: var(--sapField_Hover_BackgroundStyle);
	background-color: var(--sapField_Hover_Background);
}
:host(:not([value-state]):not([readonly])[focused]:not([opened]):hover),
:host([value-state="None"]:not([readonly])[focused]:not([opened]):hover) {
	box-shadow: none;
}
:host([focused]):not([opened]) .ui5-input-root::before {
	content: none;
}
:host(:not([readonly]):not([disabled])[value-state]:not([value-state="None"])) {
	border-width: var(--_ui5_input_state_border_width);
}
:host([value-state="Error"]) [inner-input],
:host([value-state="Warning"]) [inner-input] {
	font-style: var(--_ui5_input_error_warning_font_style);
	text-indent: var(--_ui5_input_error_warning_text_indent);
}
:host([value-state="Error"]) [inner-input] {
	font-weight: var(--_ui5_input_error_font_weight);
}
:host([value-state="Warning"]) [inner-input] {
	font-weight: var(--_ui5_input_warning_font_weight);
}
:host([value-state="Error"]:not([readonly]):not([disabled])) {
	background: var(--sapField_InvalidBackgroundStyle);
	background-color: var(--sapField_InvalidBackground);
	border-color: var(--_ui5_input_value_state_error_border_color);
	box-shadow: var(--sapField_InvalidShadow);
}
:host([value-state="Error"][focused]:not([opened]):not([readonly])) {
	background-color: var(--_ui5_input_focused_value_state_error_background);
	border-color: var(--_ui5_input_focused_value_state_error_border_color);
}
:host([value-state="Error"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after {
	border-color: var(--_ui5_input_focused_value_state_error_focus_outline_color);
}
:host([value-state="Error"]:not([readonly])) .ui5-input-root::before{
	background-color: var(--_ui5-input-value-state-error-border-botom-color);
}
:host([value-state="Error"]:not([readonly]):not([focused]):hover),
:host([value-state="Error"]:not([readonly])[focused][opened]:hover) {
	background-color: var(--_ui5_input_value_state_error_hover_background);
	box-shadow: var(--sapField_Hover_InvalidShadow);
}
:host([value-state="Error"]:not([readonly]):not([disabled])),
:host([value-state="Warning"]:not([readonly]):not([disabled])),
:host([value-state="Information"]:not([readonly]):not([disabled])) {
	border-style: var(--_ui5_input_error_warning_border_style);
}
:host([value-state="Warning"]:not([readonly]):not([disabled])) {
	background: var(--sapField_WarningBackgroundStyle);
	background-color: var(--sapField_WarningBackground);
	border-color: var(--_ui5_input_value_state_warning_border_color);
	box-shadow: var(--sapField_WarningShadow);
}
:host([value-state="Warning"][focused]:not([opened]):not([readonly])) {
	background-color: var(--_ui5_input_focused_value_state_warning_background);
	border-color: var(--_ui5_input_focused_value_state_warning_border_color);
}
:host([value-state="Warning"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after {
	border-color: var(--_ui5_input_focused_value_state_warning_focus_outline_color);
}
:host([value-state="Warning"]:not([readonly])) .ui5-input-root::before{
	background-color: var(--_ui5_input_value_state_warning_border_botom_color);
}
:host([value-state="Warning"]:not([readonly]):not([focused]):hover),
:host([value-state="Warning"]:not([readonly])[focused][opened]:hover)  {
	background-color: var(--sapField_Hover_Background);
	box-shadow: var(--sapField_Hover_WarningShadow);
}
:host([value-state="Success"]:not([readonly]):not([disabled])) {
	background: var(--sapField_SuccessBackgroundStyle);
	background-color: var(--sapField_SuccessBackground);
	border-color: var(--_ui5_input_value_state_success_border_color);
	border-width: var(--_ui5_input_value_state_success_border_width);
	box-shadow: var(--sapField_SuccessShadow);
}
:host([value-state="Success"][focused]:not([opened]):not([readonly])) {
	background-color: var(--_ui5_input_focused_value_state_success_background);
	border-color: var(--_ui5_input_focused_value_state_success_border_color);
}
:host([value-state="Success"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after {
	border-color: var(--_ui5_input_focused_value_state_success_focus_outline_color);
}
:host([value-state="Success"]:not([readonly])) .ui5-input-root::before{
	background-color: var(--_ui5_input_value_state_success_border_botom_color);
}
:host([value-state="Success"]:not([readonly]):not([focused]):hover),
:host([value-state="Success"]:not([readonly])[focused][opened]:hover) {
	background-color: var(--sapField_Hover_Background);
	box-shadow: var(--sapField_Hover_SuccessShadow);
}
:host([value-state="Information"]:not([readonly]):not([disabled])) {
	background: var(--sapField_InformationBackgroundStyle);
	background-color: var(--sapField_InformationBackground);
	border-color: var(--_ui5_input_value_state_information_border_color);
	border-width: var(--_ui5_input_information_border_width);
	box-shadow: var(--sapField_InformationShadow);
}
:host([value-state="Information"][focused]:not([opened]):not([readonly])) {
	background-color: var(--_ui5_input_focused_value_state_information_background);
	border-color: var(--_ui5_input_focused_value_state_information_border_color);
}
:host([value-state="Information"]:not([readonly])) .ui5-input-root::before{
	background-color: var(--_ui5_input_value_success_information_border_botom_color);
}
:host([value-state="Information"]:not([readonly]):not([focused]):hover),
:host([value-state="Information"]:not([readonly])[focused][opened]:hover) {
	background-color: var(--sapField_Hover_Background);
	box-shadow: var(--sapField_Hover_InformationShadow);
}
/* Input Icon */
.ui5-input-icon-root {
	min-width: var(--_ui5_input_icon_min_width);
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
/* TODO: Remove this after parser is fixed
	-	this statement is transformed to [ui5-multi-combobox] [ui5-icon] which
	affects all icons in the combobox incuding these in the list items
*/
::slotted([ui5-icon][slot="icon"]) {
	align-self: start;
	padding: var(--_ui5_input_custom_icon_padding);
	/* Normalize like libraries overrule the selector, thefore we need !important */
	box-sizing: content-box !important;
}
:host([value-state="Error"]) [input-icon],
:host([value-state="Warning"]) [input-icon]{
	padding: var(--_ui5_input_error_warning_icon_padding);
}
:host([value-state="Information"]) [input-icon] {
	padding: var(--_ui5_input_information_icon_padding);
}
:host([value-state="Error"]) ::slotted([input-icon][ui5-icon]),
:host([value-state="Error"]) ::slotted([ui5-icon][slot="icon"]),
:host([value-state="Warning"]) ::slotted([ui5-icon][slot="icon"]) {
	padding: var(--_ui5_input_error_warning_custom_icon_padding);
}
:host([value-state="Information"]) ::slotted([ui5-icon][slot="icon"]) {
	padding: var(--_ui5_input_information_custom_icon_padding);
}
:host([value-state="Error"]) [input-icon]:active,
:host([value-state="Error"]) [input-icon][pressed] {
	box-shadow: var(--_ui5_input_error_icon_box_shadow);
	color: var(--_ui5_input_icon_error_pressed_color);
}
:host([value-state="Error"]) [input-icon]:not([pressed]):not(:active):hover {
	box-shadow: var(--_ui5_input_error_icon_box_shadow);
}
:host([value-state="Warning"]) [input-icon]:active,
:host([value-state="Warning"]) [input-icon][pressed] {
	box-shadow: var(--_ui5_input_warning_icon_box_shadow);
	color: var(--_ui5_input_icon_warning_pressed_color);
}
:host([value-state="Warning"]) [input-icon]:not([pressed]):not(:active):hover {
	box-shadow: var(--_ui5_input_warning_icon_box_shadow);
}
:host([value-state="Information"]) [input-icon]:active,
:host([value-state="Information"]) [input-icon][pressed] {
	box-shadow: var(--_ui5_input_information_icon_box_shadow);
	color: var(--_ui5_input_icon_information_pressed_color);
}
:host([value-state="Information"]) [input-icon]:not([pressed]):not(:active):hover {
	box-shadow: var(--_ui5_input_information_icon_box_shadow);
}
:host([value-state="Success"]) [input-icon]:active,
:host([value-state="Success"]) [input-icon][pressed] {
	box-shadow: var(--_ui5_input_success_icon_box_shadow);
	color: var(--_ui5_input_icon_success_pressed_color);
}
:host([value-state="Success"]) [input-icon]:not([pressed]):not(:active):hover {
	box-shadow: var(--_ui5_input_success_icon_box_shadow);
}
.ui5-input-clear-icon-wrapper {
	height: var(--_ui5_input_icon_wrapper_height);
	padding: 0;
	width: var(--_ui5_input_icon_width);
	min-width: var(--_ui5_input_icon_width);
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
}
:host([value-state]:not([value-state="None"]):not([value-state="Success"])) .ui5-input-clear-icon-wrapper {
	height: var(--_ui5_input_icon_wrapper_state_height);
	vertical-align: top;
}
:host([value-state="Success"]) .ui5-input-clear-icon-wrapper {
	height: var(--_ui5_input_icon_wrapper_success_state_height);
}
[ui5-icon].ui5-input-clear-icon {
	padding: 0;
	color: inherit;
}
/* Chrome, Safari, Edge, Opera */
[inner-input]::-webkit-outer-spin-button,
[inner-input]::-webkit-inner-spin-button {
	-webkit-appearance: inherit;
	margin: inherit;
}
`};V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const jc={packageName:"@ui5/webcomponents",fileName:"themes/ValueStateMessage.css",content:`.ui5-valuestatemessage-popover {
	border-radius: var(--_ui5_value_state_message_popover_border_radius);
	box-shadow: var(--_ui5_value_state_message_popover_box_shadow);
}

.ui5-input-value-state-message-icon {
	width: var(--_ui5_value_state_message_icon_width);
	height: var(--_ui5_value_state_message_icon_height);
	display: var(--_ui5_input_value_state_icon_display);
	position: absolute;
	padding-right: 0.375rem;
}

.ui5-valuestatemessage-root .ui5-input-value-state-message-icon {
	left: var(--_ui5_input_value_state_icon_offset);
}

.ui5-input-value-state-message-icon[name="error"] {
	color: var(--sapNegativeElementColor);
}

.ui5-input-value-state-message-icon[name="alert"] {
	color: var(--sapCriticalElementColor);
}

.ui5-input-value-state-message-icon[name="success"] {
	color: var(--sapPositiveElementColor);
}

.ui5-input-value-state-message-icon[name="information"] {
	color: var(--sapInformativeElementColor);
}

.ui5-valuestatemessage-root {
	box-sizing: border-box;
	display: inline-block;
	color: var(--sapTextColor);
	font-size: var(--sapFontSmallSize);
	font-family: "72override", var(--sapFontFamily);
	height: auto;
	padding: var(--_ui5_value_state_message_padding);
	overflow: hidden;
	text-overflow: ellipsis;
	min-width: 6.25rem;
	border: var(--_ui5_value_state_message_border);
}

[ui5-responsive-popover] .ui5-valuestatemessage-header, [ui5-popover] .ui5-valuestatemessage-header  {
	min-height: 2rem;
}

[ui5-responsive-popover] .ui5-valuestatemessage-header {
	padding: var(--_ui5_value_state_header_padding);
	border: var(--_ui5_value_state_header_border);
	border-bottom: var(--_ui5_value_state_header_border_bottom);
}

.ui5-valuestatemessage--success {
	background: var(--sapSuccessBackground);
}

.ui5-valuestatemessage--warning {
	background: var(--sapWarningBackground);
}

.ui5-valuestatemessage--error {
	background: var(--sapErrorBackground);
}

.ui5-valuestatemessage--information {
	background: var(--sapInformationBackground);
}

.ui5-responsive-popover-header[focused], .ui5-responsive-popover-header:focus {
	outline-offset: var(--_ui5_value_state_header_offset);
	outline: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
}

.ui5-valuestatemessage-popover::part(header),
.ui5-valuestatemessage-popover::part(content) {
	padding: 0;
}

.ui5-valuestatemessage-popover::part(header),
.ui5-valuestatemessage-popover::part(footer) {
	min-height: 0;
}

.ui5-valuestatemessage-popover::part(header),
.ui5-suggestions-popover-with-value-state-header::part(header) {
	margin-bottom: 0;
}
`};V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const oC={packageName:"@ui5/webcomponents",fileName:"themes/Suggestions.css",content:`.ui5-suggestions-popover {
	box-shadow: var(--sapContent_Shadow1);
}

.ui5-suggestions-popover::part(header),
.ui5-suggestions-popover::part(content) {
	padding: 0;
}

.ui5-suggestions-popover::part(footer) {
	padding: 0 1rem;
}

.ui5-suggestions-popover [ui5-li],
.ui5-suggestions-popover [ui5-li-suggestion-item] {
	height: var(--_ui5_list_item_dropdown_base_height);
}

.ui5-suggestions-popover [ui5-li]::part(icon),
.ui5-suggestions-popover [ui5-li-suggestion-item]::part(icon) {
	color: var(--sapList_TextColor);
}

.input-root-phone.native-input-wrapper {
	display: contents;
}

.input-root-phone.native-input-wrapper::before {
	display: none;
}

.native-input-wrapper .ui5-input-inner-phone {
	margin: 0;
}`};var _e=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},jt,Cr;(function(t){t.CHANGE="change",t.INPUT="input",t.SUGGESTION_ITEM_SELECT="suggestion-item-select"})(Cr||(Cr={}));var Vc;(function(t){t.ACTION_ENTER="enter",t.ACTION_USER_INPUT="input"})(Vc||(Vc={}));let ae=jt=class extends Ce{constructor(){super(),this.hasSuggestionItemSelected=!1,this.valueBeforeItemSelection="",this.valueBeforeItemPreview="",this.suggestionSelectionCanceled=!1,this.previousValue="",this.firstRendering=!0,this.typedInValue="",this.lastConfirmedValue="",this.isTyping=!1,this.suggestionsTexts=[],this._handleResizeBound=this._handleResize.bind(this),this._keepInnerValue=!1,this._focusedAfterClear=!1}onEnterDOM(){Nn.register(this,this._handleResizeBound),k$(this,this._updateAssociatedLabelsTexts.bind(this))}onExitDOM(){Nn.deregister(this,this._handleResizeBound),x$(this)}onBeforeRendering(){this._keepInnerValue||(this._innerValue=this.value),this.showSuggestions&&(this.enableSuggestions(),this.suggestionsTexts=this.Suggestions.defaultSlotProperties(this.typedInValue)),this.effectiveShowClearIcon=this.showClearIcon&&!!this.value&&!this.readonly&&!this.disabled,this.style.setProperty("--_ui5-input-icons-count",`${this.iconsCount}`),this.FormSupport=Xe("FormSupport");const e=!!this.suggestionItems.length,n=!!this.value,o=this.shadowRoot.querySelector("input")===Ju();this._isPhone?this.open=this.openOnMobile:this._forceOpen?this.open=!0:this.open=n&&e&&o&&this.isTyping,this.FormSupport?this.FormSupport.syncNativeHiddenInput(this):this.name&&console.warn('In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";');const r=this.value,i=this.getInputDOMRefSync();if(!i||!r)return;const a=i.selectionEnd-i.selectionStart;if(this._shouldAutocomplete&&!W5()&&!a&&!this._isKeyNavigation){const s=this._getFirstMatchingItem(r);s&&this._handleTypeAhead(s)}}async onAfterRendering(){const e=this.getInputDOMRefSync();this.Suggestions&&this.showSuggestions&&(this.Suggestions.toggle(this.open,{preventFocusRestore:!0}),this._listWidth=await this.Suggestions._getListWidth()),this.shouldDisplayOnlyValueStateMessage?this.openPopover():this.closePopover(),this._performTextSelection&&(e.value!==this._innerValue&&(e.value=this._innerValue),this.typedInValue.length&&this.value.length&&e.setSelectionRange(this.typedInValue.length,this.value.length)),this._performTextSelection=!1}_onkeydown(e){if(this._isKeyNavigation=!0,this._shouldAutocomplete=!this.noTypeahead&&!(T0(e)||Bc(e)||Qs(e)),dr(e))return this._handleUp(e);if(xo(e))return this._handleDown(e);if(Le(e))return this._handleSpace(e);if(Bo(e))return this._handleTab();if(tt(e))return this._handleEnter(e);if(Tc(e))return this._handlePageUp(e);if(Ic(e))return this._handlePageDown(e);if(Xs(e))return this._handleHome(e);if(Js(e))return this._handleEnd(e);if(Qs(e))return this._handleEscape();this.showSuggestions&&this._clearPopoverFocusAndSelection(),this._keyDown=!0,this._isKeyNavigation=!1}_onkeyup(e){Bc(e)&&(this.value=e.target.value),this._keyDown=!1}_handleUp(e){this.Suggestions&&this.Suggestions.isOpened()&&this.Suggestions.onUp(e)}_handleDown(e){this.Suggestions&&this.Suggestions.isOpened()&&this.Suggestions.onDown(e)}_handleSpace(e){this.Suggestions&&this.Suggestions.onSpace(e)}_handleTab(){this.Suggestions&&this.previousValue!==this.value&&this.Suggestions.onTab()}_handleEnter(e){const n=!!(this.Suggestions&&this.Suggestions.onEnter(e)),o=this.getInputDOMRefSync(),r=this.suggestionItems.find(i=>i.text&&i.text===this.value||i.textContent===this.value);if(r){const i=r.text?r.text:r.textContent||"";o.setSelectionRange(i.length,i.length),n||(this.selectSuggestion(r,!0),this.open=!1)}if(this._isPhone&&!this.suggestionItems.length&&!this.isTypeNumber&&o.setSelectionRange(this.value.length,this.value.length),!n){this.lastConfirmedValue=this.value,this.FormSupport&&this.FormSupport.triggerFormSubmit(this);return}this.focused=!0}_handlePageUp(e){this._isSuggestionsFocused?this.Suggestions.onPageUp(e):e.preventDefault()}_handlePageDown(e){this._isSuggestionsFocused?this.Suggestions.onPageDown(e):e.preventDefault()}_handleHome(e){this._isSuggestionsFocused&&this.Suggestions.onHome(e)}_handleEnd(e){this._isSuggestionsFocused&&this.Suggestions.onEnd(e)}_handleEscape(){const n=this.showSuggestions&&!!this.Suggestions&&this.open,o=this.getInputDOMRefSync(),r=o.selectionEnd-o.selectionStart>0;if(this.isTyping=!1,!n){this.value=this.lastConfirmedValue?this.lastConfirmedValue:this.previousValue;return}if(n&&this.Suggestions._isItemOnTarget()){this.value=this.typedInValue||this.valueBeforeItemPreview,this.suggestionSelectionCanceled=!0,this.focused=!0;return}r&&(this.value=this.typedInValue),this._isValueStateFocused&&(this._isValueStateFocused=!1,this.focused=!0)}async _onfocusin(e){await this.getInputDOMRef(),this.focused=!0,this._focusedAfterClear||(this.previousValue=this.value),this.valueBeforeItemPreview=this.value,this._inputIconFocused=!!e.target&&e.target===this.querySelector("[ui5-icon]"),this._focusedAfterClear=!1}innerFocusIn(){}_onfocusout(e){const n=e.relatedTarget,o=this.Suggestions&&n&&n.shadowRoot&&n.shadowRoot.contains(this.Suggestions.responsivePopover),r=n&&n.shadowRoot&&n.shadowRoot.querySelector(".ui5-valuestatemessage-root");if(this._keepInnerValue=!1,this.showClearIcon&&!this.effectiveShowClearIcon&&(this._clearIconClicked=!1,this._handleChange()),o||r){e.stopImmediatePropagation();return}n&&n.classList.contains(this._id)||(this.open=!1,this._clearPopoverFocusAndSelection(),this._clearIconClicked||(this.previousValue=""),this.lastConfirmedValue="",this.focused=!1,this.isTyping=!1,this._forceOpen=!1)}_clearPopoverFocusAndSelection(){!this.showSuggestions||!this.Suggestions||(this._isValueStateFocused=!1,this.hasSuggestionItemSelected=!1,this.Suggestions._deselectItems(),this.Suggestions._clearItemFocus())}_click(){me()&&!this.readonly&&this.Suggestions&&(this.blur(),this.openOnMobile=!0)}_handleChange(){if(this._clearIconClicked){this._clearIconClicked=!1;return}this.previousValue!==this.getInputDOMRefSync().value&&(this.fireEvent(Cr.CHANGE),this.previousValue=this.value,this.typedInValue=this.value)}_clear(){this.value="",this.fireEvent(Cr.INPUT),this._isPhone||(this.focus(),this._focusedAfterClear=!0)}_iconMouseDown(){this._clearIconClicked=!0}_scroll(e){this.fireEvent("suggestion-scroll",{scrollTop:e.detail.scrollTop,scrollContainer:e.detail.targetRef})}_handleInput(e){const n=this.getInputDOMRefSync(),o=this.value&&this.isTypeNumber&&!n.value,r=e.inputType||e.detail&&e.detail.inputType||"";this._keepInnerValue=!1;const i=["deleteWordBackward","deleteWordForward","deleteSoftLineBackward","deleteSoftLineForward","deleteEntireSoftLine","deleteHardLineBackward","deleteHardLineForward","deleteByDrag","deleteByCut","deleteContent","deleteContentBackward","deleteContentForward","historyUndo"];if(this._shouldAutocomplete=!i.includes(r)&&!this.noTypeahead,this.suggestionSelectionCanceled=!1,e instanceof InputEvent){const a=this.isTypeNumber&&(e.inputType==="deleteContentForward"||e.inputType==="deleteContentBackward")&&!e.target.value.includes(".")&&this.value.includes("."),s=o&&e.data==="e",l=o&&this.value.startsWith("-")&&this.value.length===2&&(e.inputType==="deleteContentForward"||e.inputType==="deleteContentBackward");(a||s||l)&&(this.value=e.target.value,this._keepInnerValue=!0)}e.target===n&&(this.focused=!0,e.stopImmediatePropagation()),this.fireEventByAction(Vc.ACTION_ENTER,e),this.hasSuggestionItemSelected=!1,this._isValueStateFocused=!1,this.Suggestions&&this.Suggestions.updateSelectedItemPosition(-1),this.isTyping=!0}_startsWithMatchingItems(e){const n=this.suggestionItems[0].text?"text":"textContent";return Gf(e,this.suggestionItems,n)}_getFirstMatchingItem(e){if(!this.suggestionItems.length)return;const n=this._startsWithMatchingItems(e).filter(o=>!o.groupItem);if(n.length)return n[0]}_handleTypeAhead(e){const n=e.text?e.text:e.textContent||"";this._innerValue=n,this.value=n,this._performTextSelection=!0,this._shouldAutocomplete=!1}_handleResize(){this._inputWidth=this.offsetWidth}_updateAssociatedLabelsTexts(){this._associatedLabelsTexts=w$(this),this._accessibleLabelsRefTexts=b0(this)}_closeRespPopover(){this.Suggestions.close(!0)}async _afterOpenPopover(){me()&&(await this.getInputDOMRef()).focus()}_afterClosePopover(){this.announceSelectedItem(),me()&&(this.blur(),this.focused=!1),this.openOnMobile=!1,this.open=!1,this._forceOpen=!1,this.hasSuggestionItemSelected&&this.focus()}isValueStateOpened(){return!!this._isPopoverOpen}async openPopover(){const e=await this._getPopover();e&&(this._isPopoverOpen=!0,e.showAt(this))}async closePopover(){const e=await this._getPopover();e&&e.close()}async _getPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-popover]")}openPicker(){!this.suggestionItems.length||this.disabled||this.readonly||(this._forceOpen=!0)}enableSuggestions(){if(this.Suggestions)return;const e=Xe("InputSuggestions");if(e)this.Suggestions=new e(this,"suggestionItems",!0,!1);else throw new Error('You have to import "@ui5/webcomponents/dist/features/InputSuggestions.js" module to use ui5-input suggestions')}selectSuggestion(e,n){if(e.groupItem)return;const o=this.typedInValue||this.value,r=e.text||e.textContent||"",i=n?this.valueBeforeItemSelection!==r:o!==r;this.hasSuggestionItemSelected=!0,i&&(this.value=r,this.valueBeforeItemSelection=r,this.lastConfirmedValue=r,this._performTextSelection=!0,this.hasSuggestionItemSelected=!0,this.value=r,this.fireEvent(Cr.CHANGE),me()&&this.fireEvent(Cr.INPUT),this.typedInValue=this.value,this.previousValue=this.value),this.valueBeforeItemPreview="",this.suggestionSelectionCanceled=!1,this.fireEvent(Cr.SUGGESTION_ITEM_SELECT,{item:e}),this.isTyping=!1,this.openOnMobile=!1,this._forceOpen=!1}previewSuggestion(e){this.valueBeforeItemSelection=this.value,this.updateValueOnPreview(e),this.announceSelectedItem(),this._previewItem=e}updateValueOnPreview(e){const o=e.type==="Inactive"||e.groupItem?this.valueBeforeItemPreview:e.effectiveTitle||e.textContent||"";this.value=o,this._performTextSelection=!0}get previewItem(){return this._previewItem?this.getSuggestionByListItem(this._previewItem):null}async fireEventByAction(e,n){if(this.disabled||this.readonly)return;const o=await this.getInputValue(),r=e===Vc.ACTION_ENTER;this.value=o,this.typedInValue=o,this.valueBeforeItemPreview=o,r&&(this.fireEvent(Cr.INPUT,{inputType:n.inputType}),this.fireEvent("value-changed"))}async getInputValue(){return this.getDomRef()?(await this.getInputDOMRef()).value:""}async getInputDOMRef(){return me()&&this.Suggestions?(await this.Suggestions._getSuggestionPopover(),this.Suggestions.responsivePopover.querySelector(".ui5-input-inner-phone")):this.nativeInput}getInputDOMRefSync(){return me()&&this.Suggestions&&this.Suggestions.responsivePopover?this.Suggestions.responsivePopover.querySelector(".ui5-input-inner-phone").shadowRoot.querySelector("input"):this.nativeInput}get nativeInput(){const e=this.getDomRef();return e?e.querySelector("input"):null}get nativeInputWidth(){return this.nativeInput?this.nativeInput.offsetWidth:0}getLabelableElementId(){return this.getInputId()}getSuggestionByListItem(e){const n=parseInt(e.getAttribute("data-ui5-key"));return this.suggestionItems[n]}isSuggestionsScrollable(){return this.Suggestions?this.Suggestions._isScrollable():Promise.resolve(!1)}getInputId(){return`${this._id}-inner`}onItemMouseOver(e){const n=e.target,o=this.getSuggestionByListItem(n);o&&o.fireEvent("mouseover",{item:o,targetRef:n})}onItemMouseOut(e){const n=e.target,o=this.getSuggestionByListItem(n);o&&o.fireEvent("mouseout",{item:o,targetRef:n})}onItemMouseDown(e){e.preventDefault()}onItemSelected(e,n){this.selectSuggestion(e,n)}onItemPreviewed(e){this.previewSuggestion(e),this.fireEvent("suggestion-item-preview",{item:this.getSuggestionByListItem(e),targetRef:e})}get valueStateTypeMappings(){return{Success:jt.i18nBundle.getText(Tf),Information:jt.i18nBundle.getText(If),Error:jt.i18nBundle.getText(xf),Warning:jt.i18nBundle.getText(Bf)}}valueStateTextMappings(){return{Success:jt.i18nBundle.getText(ya),Information:jt.i18nBundle.getText(Zs),Error:jt.i18nBundle.getText(ma),Warning:jt.i18nBundle.getText(ba)}}announceSelectedItem(){const e=this.shadowRoot.querySelector(`#${this._id}-selectionText`);this.Suggestions&&this.Suggestions._isItemOnTarget()?e.textContent=this.itemSelectionAnnounce:e.textContent=""}get _readonly(){return this.readonly&&!this.disabled}get _headerTitleText(){return jt.i18nBundle.getText(Sf)}get inputType(){return this.type.toLowerCase()}get isTypeNumber(){return this.type===Lu.Number}get suggestionsTextId(){return this.showSuggestions?`${this._id}-suggestionsText`:""}get valueStateTextId(){return this.hasValueState?`${this._id}-valueStateDesc`:""}get accInfo(){const e=this.showSuggestions?"true":void 0,n=this.showSuggestions?"list":void 0,o=this._inputAccInfo.ariaDescribedBy?`${this.suggestionsTextId} ${this.valueStateTextId} ${this._inputAccInfo.ariaDescribedBy}`.trim():`${this.suggestionsTextId} ${this.valueStateTextId}`.trim();return{input:{ariaRoledescription:this._inputAccInfo&&(this._inputAccInfo.ariaRoledescription||void 0),ariaDescribedBy:o||void 0,ariaInvalid:this.valueState===z.Error?"true":void 0,ariaHasPopup:this._inputAccInfo.ariaHasPopup?this._inputAccInfo.ariaHasPopup:e,ariaAutoComplete:this._inputAccInfo.ariaAutoComplete?this._inputAccInfo.ariaAutoComplete:n,role:this._inputAccInfo&&this._inputAccInfo.role,ariaControls:this._inputAccInfo&&this._inputAccInfo.ariaControls,ariaExpanded:this._inputAccInfo&&this._inputAccInfo.ariaExpanded,ariaDescription:this._inputAccInfo&&this._inputAccInfo.ariaDescription,ariaLabel:this._inputAccInfo&&this._inputAccInfo.ariaLabel||this._accessibleLabelsRefTexts||this.accessibleName||this._associatedLabelsTexts||void 0}}}get nativeInputAttributes(){return{min:this.isTypeNumber?this._nativeInputAttributes.min:void 0,max:this.isTypeNumber?this._nativeInputAttributes.max:void 0,step:this.isTypeNumber?this._nativeInputAttributes.step||"any":void 0}}get ariaValueStateHiddenText(){if(!this.hasValueState)return;const e=this.valueState!==z.None?this.valueStateTypeMappings[this.valueState]:"";return this.shouldDisplayDefaultValueStateMessage?this.valueStateText?`${e} ${this.valueStateText}`:e:`${e}`.concat(" ",this.valueStateMessageText.map(n=>n.textContent).join(" "))}get itemSelectionAnnounce(){return this.Suggestions?this.Suggestions.itemSelectionAnnounce:""}get iconsCount(){const e=this.icon?this.icon.length:0,n=Number(this.effectiveShowClearIcon)??0;return e+n}get classes(){return{popover:{"ui5-suggestions-popover":!this._isPhone&&this.showSuggestions,"ui5-suggestions-popover-with-value-state-header":!this._isPhone&&this.showSuggestions&&this.hasValueStateMessage},popoverValueState:{"ui5-valuestatemessage-root":!0,"ui5-valuestatemessage-header":!0,"ui5-valuestatemessage--success":this.valueState===z.Success,"ui5-valuestatemessage--error":this.valueState===z.Error,"ui5-valuestatemessage--warning":this.valueState===z.Warning,"ui5-valuestatemessage--information":this.valueState===z.Information}}}get styles(){const e=parseInt(getComputedStyle(document.documentElement).fontSize);return{popoverHeader:{"max-width":this._inputWidth?`${this._inputWidth}px`:""},suggestionPopoverHeader:{display:this._listWidth===0?"none":"inline-block",width:this._listWidth?`${this._listWidth}px`:""},suggestionsPopover:{"min-width":this._inputWidth?`${this._inputWidth}px`:"","max-width":this._inputWidth&&this._inputWidth/e>40?`${this._inputWidth}px`:"40rem"},innerInput:{padding:""}}}get suggestionSeparators(){return"None"}get valueStateMessageText(){return this.getSlottedNodes("valueStateMessage").map(e=>e.cloneNode(!0))}get shouldDisplayOnlyValueStateMessage(){return this.hasValueStateMessage&&!this.readonly&&!this.open&&this.focused}get shouldDisplayDefaultValueStateMessage(){return!this.valueStateMessage.length&&this.hasValueStateMessage}get hasValueState(){return this.valueState!==z.None}get hasValueStateMessage(){return this.hasValueState&&this.valueState!==z.Success&&(!this._inputIconFocused||!!(this._isPhone&&this.Suggestions))}get valueStateText(){return this.valueState!==z.None?this.valueStateTextMappings()[this.valueState]:void 0}get suggestionsText(){return jt.i18nBundle.getText(eA)}get availableSuggestionsCount(){if(this.showSuggestions&&(this.value||this.Suggestions.isOpened()))switch(this.suggestionsTexts.length){case 0:return jt.i18nBundle.getText(oA);case 1:return jt.i18nBundle.getText(tA);default:return jt.i18nBundle.getText(nA,this.suggestionsTexts.length)}}get step(){return this.isTypeNumber?"any":void 0}get _isPhone(){return me()}get _isSuggestionsFocused(){return!this.focused&&this.Suggestions&&this.Suggestions.isOpened()}get _placeholder(){return this.placeholder}get _valueStateInputIcon(){const e={Error:'<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071C5.90237 13.3166 5.90237 12.6834 6.29289 12.2929L8.58579 10L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L10 8.58579L12.2929 6.29289C12.6834 5.90237 13.3166 5.90237 13.7071 6.29289C14.0976 6.68342 14.0976 7.31658 13.7071 7.70711L11.4142 10L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L10 11.4142L7.70711 13.7071Z" fill="#EE3939"/>',Warning:'<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M11.8619 0.49298C11.6823 0.187541 11.3544 0 11 0C10.6456 0 10.3177 0.187541 10.1381 0.49298L0.138066 17.493C-0.0438112 17.8022 -0.0461447 18.1851 0.13195 18.4965C0.310046 18.8079 0.641283 19 1 19H21C21.3587 19 21.69 18.8079 21.868 18.4965C22.0461 18.1851 22.0438 17.8022 21.8619 17.493L11.8619 0.49298ZM11 6C11.5523 6 12 6.44772 12 7V10C12 10.5523 11.5523 11 11 11C10.4477 11 10 10.5523 10 10V7C10 6.44772 10.4477 6 11 6ZM11 16C11.8284 16 12.5 15.3284 12.5 14.5C12.5 13.6716 11.8284 13 11 13C10.1716 13 9.5 13.6716 9.5 14.5C9.5 15.3284 10.1716 16 11 16Z" fill="#F58B00"/>',Success:'<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10ZM14.7071 6.29289C14.3166 5.90237 13.6834 5.90237 13.2929 6.29289L8 11.5858L6.70711 10.2929C6.31658 9.90237 5.68342 9.90237 5.29289 10.2929C4.90237 10.6834 4.90237 11.3166 5.29289 11.7071L7.29289 13.7071C7.68342 14.0976 8.31658 14.0976 8.70711 13.7071L14.7071 7.70711C15.0976 7.31658 15.0976 6.68342 14.7071 6.29289Z" fill="#36A41D"/>',Information:'<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V15C0 16.6569 1.34315 18 3 18H15C16.6569 18 18 16.6569 18 15V3C18 1.34315 16.6569 0 15 0H3ZM9 6.5C9.82843 6.5 10.5 5.82843 10.5 5C10.5 4.17157 9.82843 3.5 9 3.5C8.17157 3.5 7.5 4.17157 7.5 5C7.5 5.82843 8.17157 6.5 9 6.5ZM9 8.5C9.55228 8.5 10 8.94772 10 9.5V13.5C10 14.0523 9.55228 14.5 9 14.5C8.44771 14.5 8 14.0523 8 13.5V9.5C8 8.94772 8.44771 8.5 9 8.5Z" fill="#1B90FF"/>'};return this.valueState!==z.None?`
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 20 20" fill="none">
				${e[this.valueState]};
			</svg>
			`:""}get _valueStatePopoverHorizontalAlign(){return this.effectiveDir!=="rtl"?"Left":"Right"}get _valueStateMessageInputIcon(){const e={Error:"error",Warning:"alert",Success:"sys-enter-2",Information:"information"};return this.valueState!==z.None?e[this.valueState]:""}getCaretPosition(){return KF(this.nativeInput)}setCaretPosition(e){eR(this.nativeInput,e)}removeFractionalPart(e){return e.includes(".")?e.slice(0,e.indexOf(".")):e.includes(",")?e.slice(0,e.indexOf(",")):e}static async onDefine(){const e=Xe("InputSuggestions");[jt.i18nBundle]=await Promise.all([Re("@ui5/webcomponents"),e?e.init():Promise.resolve()])}};_e([h({type:Boolean})],ae.prototype,"disabled",void 0),_e([h({type:Boolean})],ae.prototype,"highlight",void 0),_e([h()],ae.prototype,"placeholder",void 0),_e([h({type:Boolean})],ae.prototype,"readonly",void 0),_e([h({type:Boolean})],ae.prototype,"required",void 0),_e([h({type:Boolean})],ae.prototype,"noTypeahead",void 0),_e([h({type:Lu,defaultValue:Lu.Text})],ae.prototype,"type",void 0),_e([h()],ae.prototype,"value",void 0),_e([h({noAttribute:!0})],ae.prototype,"_innerValue",void 0),_e([h({type:z,defaultValue:z.None})],ae.prototype,"valueState",void 0),_e([h()],ae.prototype,"name",void 0),_e([h({type:Boolean})],ae.prototype,"showSuggestions",void 0),_e([h({validator:kn})],ae.prototype,"maxlength",void 0),_e([h()],ae.prototype,"accessibleName",void 0),_e([h({defaultValue:""})],ae.prototype,"accessibleNameRef",void 0),_e([h({type:Boolean})],ae.prototype,"showClearIcon",void 0),_e([h({type:Boolean})],ae.prototype,"effectiveShowClearIcon",void 0),_e([h({type:Boolean})],ae.prototype,"focused",void 0),_e([h({type:Boolean})],ae.prototype,"openOnMobile",void 0),_e([h({type:Boolean})],ae.prototype,"open",void 0),_e([h({type:Boolean})],ae.prototype,"_forceOpen",void 0),_e([h({type:Boolean})],ae.prototype,"_isValueStateFocused",void 0),_e([h({type:Object,noAttribute:!0})],ae.prototype,"_inputAccInfo",void 0),_e([h({type:Object,noAttribute:!0})],ae.prototype,"_nativeInputAttributes",void 0),_e([h({validator:kn})],ae.prototype,"_inputWidth",void 0),_e([h({validator:kn})],ae.prototype,"_listWidth",void 0),_e([h({type:Boolean,noAttribute:!0})],ae.prototype,"_isPopoverOpen",void 0),_e([h({type:Boolean,noAttribute:!0})],ae.prototype,"_inputIconFocused",void 0),_e([h({type:String,noAttribute:!0,defaultValue:void 0})],ae.prototype,"_associatedLabelsTexts",void 0),_e([h({type:String,noAttribute:!0,defaultValue:void 0})],ae.prototype,"_accessibleLabelsRefTexts",void 0),_e([ce({type:HTMLElement,default:!0})],ae.prototype,"suggestionItems",void 0),_e([ce()],ae.prototype,"icon",void 0),_e([ce()],ae.prototype,"formSupport",void 0),_e([ce()],ae.prototype,"valueStateMessage",void 0),ae=jt=_e([fe({tag:"ui5-input",languageAware:!0,renderer:et,template:oR,staticAreaTemplate:uR,styles:CR,staticAreaStyles:[zc,jc,oC],get dependencies(){const t=Xe("InputSuggestions");return[vr,Cn].concat(t?t.dependencies:[])}}),re("change"),re("input"),re("suggestion-item-select",{detail:{item:{type:HTMLElement}}}),re("suggestion-item-preview",{detail:{item:{type:HTMLElement},targetRef:{type:HTMLElement}}}),re("suggestion-scroll",{detail:{scrollTop:{type:kn},scrollContainer:{type:HTMLElement}}})],ae),ae.define();const wR=ae;var Yf;(function(t){t.Polite="Polite",t.Assertive="Assertive"})(Yf||(Yf={}));const Ba=Yf;let wr,Sr;const rC=t=>{t.style.position="absolute",t.style.clip="rect(1px,1px,1px,1px)",t.style.userSelect="none",t.style.left="-1000px",t.style.top="-1000px",t.style.pointerEvents="none"};O2(()=>{wr&&Sr||(wr=document.createElement("span"),Sr=document.createElement("span"),wr.classList.add("ui5-invisiblemessage-polite"),Sr.classList.add("ui5-invisiblemessage-assertive"),wr.setAttribute("aria-live","polite"),Sr.setAttribute("aria-live","assertive"),wr.setAttribute("role","alert"),Sr.setAttribute("role","alert"),rC(wr),rC(Sr),Wu("ui5-static-area").appendChild(wr),Wu("ui5-static-area").appendChild(Sr))});const Xf=(t,e)=>{const n=e===Ba.Assertive?Sr:wr;n.textContent="",n.textContent=t,e!==Ba.Assertive&&e!==Ba.Polite&&console.warn('You have entered an invalid mode. Valid values are: "Polite" and "Assertive". The framework will automatically set the mode to "Polite".'),setTimeout(()=>{n.textContent===t&&(n.textContent="")},3e3)};function SR(t,e,n){return p`<div class="ui5-combobox-root ui5-input-focusable-element">${this.hasValueState?kR.call(this,t,e,n):void 0}<input id="ui5-combobox-input" .value="${u(this.value)}" inner-input placeholder="${u(this.placeholder)}" ?disabled=${this.disabled} ?readonly=${this.readonly} value-state="${u(this.valueState)}" @keydown="${this._keydown}" @input="${this._input}" @change="${this._inputChange}" @click=${this._click} @keyup="${this._keyup}" @focusin="${this._focusin}" @focusout="${this._focusout}" aria-expanded="${u(this.open)}" role="combobox" aria-haspopup="listbox" aria-autocomplete="both" aria-describedby="value-state-description" aria-label="${u(this.ariaLabelText)}" aria-required="${u(this.required)}" data-sap-focus-ref />${this.icon?xR.call(this,t,e,n):void 0}${this.readonly?void 0:BR.call(this,t,e,n)}</div>`}function kR(t,e,n){return p`<span id="value-state-description" class="ui5-hidden-text">${u(this.ariaValueStateHiddenText)}</span>`}function xR(t,e,n){return p`<slot name="icon"></slot>`}function BR(t,e,n){return n?p`<${k("ui5-icon",e,n)} name="slim-arrow-down" slot="icon" tabindex="-1" input-icon ?pressed="${this._iconPressed}" @click="${this._arrowClick}" accessible-name="${u(this._iconAccessibleNameText)}"></${k("ui5-icon",e,n)}>`:p`<ui5-icon name="slim-arrow-down" slot="icon" tabindex="-1" input-icon ?pressed="${this._iconPressed}" @click="${this._arrowClick}" accessible-name="${u(this._iconAccessibleNameText)}"></ui5-icon>`}function TR(t,e,n){return n?p`<${k("ui5-responsive-popover",e,n)} class="${Y(this.classes.popover)}" hide-arrow _disable-initial-focus placement-type="Bottom" horizontal-align="Left" style="${ie(this.styles.suggestionsPopover)}" @ui5-after-open=${u(this._afterOpenPopover)} @ui5-after-close=${u(this._afterClosePopover)}><${k("ui5-busy-indicator",e,n)} ?active=${this.loading} size="Medium" class="ui5-combobox-busy"></${k("ui5-busy-indicator",e,n)}>${this._isPhone?iC.call(this,t,e,n):void 0}${this._isPhone?void 0:uC.call(this,t,e,n)}<${k("ui5-list",e,n)} separators="None" @ui5-item-click=${u(this._selectItem)} @ui5-item-focused=${u(this._onItemFocus)} @mousedown=${this._itemMousedown} mode="SingleSelect">${mt(this._filteredItems,(o,r)=>o._id||r,(o,r)=>_C.call(this,t,e,n,o,r))}</${k("ui5-list",e,n)}>${this._isPhone?pC.call(this,t,e,n):void 0}</${k("ui5-responsive-popover",e,n)}>${this.shouldOpenValueStateMessagePopover?hC.call(this,t,e,n):void 0} `:p`<ui5-responsive-popover class="${Y(this.classes.popover)}" hide-arrow _disable-initial-focus placement-type="Bottom" horizontal-align="Left" style="${ie(this.styles.suggestionsPopover)}" @ui5-after-open=${u(this._afterOpenPopover)} @ui5-after-close=${u(this._afterClosePopover)}><ui5-busy-indicator ?active=${this.loading} size="Medium" class="ui5-combobox-busy"></ui5-busy-indicator>${this._isPhone?iC.call(this,t,e,n):void 0}${this._isPhone?void 0:uC.call(this,t,e,n)}<ui5-list separators="None" @ui5-item-click=${u(this._selectItem)} @ui5-item-focused=${u(this._onItemFocus)} @mousedown=${this._itemMousedown} mode="SingleSelect">${mt(this._filteredItems,(o,r)=>o._id||r,(o,r)=>_C.call(this,t,e,n,o,r))}</ui5-list>${this._isPhone?pC.call(this,t,e,n):void 0}</ui5-responsive-popover>${this.shouldOpenValueStateMessagePopover?hC.call(this,t,e,n):void 0} `}function iC(t,e,n){return n?p`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${u(this._headerTitleText)}</span><${k("ui5-button",e,n)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._closeRespPopover}"></${k("ui5-button",e,n)}></div><div class="row"><div class="input-root-phone" value-state="${u(this.valueState)}"><input class="ui5-input-inner-phone" .value="${u(this.value)}" inner-input placeholder="${u(this.placeholder)}" value-state="${u(this.valueState)}" @input="${this._input}" @change="${this._inputChange}" @keydown="${this._keydown}" aria-autocomplete="both" /></div></div>${this.hasValueStateText?aC.call(this,t,e,n):void 0}</div>`:p`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${u(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._closeRespPopover}"></ui5-button></div><div class="row"><div class="input-root-phone" value-state="${u(this.valueState)}"><input class="ui5-input-inner-phone" .value="${u(this.value)}" inner-input placeholder="${u(this.placeholder)}" value-state="${u(this.valueState)}" @input="${this._input}" @change="${this._inputChange}" @keydown="${this._keydown}" aria-autocomplete="both" /></div></div>${this.hasValueStateText?aC.call(this,t,e,n):void 0}</div>`}function aC(t,e,n){return n?p`<div class="${Y(this.classes.popoverValueState)}" style="${ie(this.styles.popoverValueStateMessage)}"><${k("ui5-icon",e,n)} class="ui5-input-value-state-message-icon" name="${u(this._valueStateMessageIcon)}"></${k("ui5-icon",e,n)}>${this.shouldDisplayDefaultValueStateMessage?sC.call(this,t,e,n):lC.call(this,t,e,n)}</div>`:p`<div class="${Y(this.classes.popoverValueState)}" style="${ie(this.styles.popoverValueStateMessage)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${u(this._valueStateMessageIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage?sC.call(this,t,e,n):lC.call(this,t,e,n)}</div>`}function sC(t,e,n){return p`${u(this.valueStateDefaultText)}`}function lC(t,e,n){return p`${mt(this.valueStateMessageText,(o,r)=>o._id||r,(o,r)=>IR.call(this,t,e,n,o,r))}`}function IR(t,e,n,o,r){return p`${u(o)}`}function uC(t,e,n){return p`${this.hasValueStateText?$R.call(this,t,e,n):void 0}`}function $R(t,e,n){return n?p`<div slot="header" class="ui5-responsive-popover-header ${Y(this.classes.popoverValueState)}" ?focused=${this._isValueStateFocused} tabindex="0" style="${ie(this.styles.suggestionPopoverHeader)}"><${k("ui5-icon",e,n)} class="ui5-input-value-state-message-icon" name="${u(this._valueStateMessageIcon)}"></${k("ui5-icon",e,n)}>${this.shouldDisplayDefaultValueStateMessage?cC.call(this,t,e,n):dC.call(this,t,e,n)}</div>`:p`<div slot="header" class="ui5-responsive-popover-header ${Y(this.classes.popoverValueState)}" ?focused=${this._isValueStateFocused} tabindex="0" style="${ie(this.styles.suggestionPopoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${u(this._valueStateMessageIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage?cC.call(this,t,e,n):dC.call(this,t,e,n)}</div>`}function cC(t,e,n){return p`${u(this.valueStateDefaultText)}`}function dC(t,e,n){return p`${mt(this.valueStateMessageText,(o,r)=>o._id||r,(o,r)=>AR.call(this,t,e,n,o,r))}`}function AR(t,e,n,o,r){return p`${u(o)}`}function _C(t,e,n,o,r){return p`${o.isGroupItem?ER.call(this,t,e,n,o,r):PR.call(this,t,e,n,o,r)}`}function ER(t,e,n,o,r){return n?p`<${k("ui5-li-groupheader",e,n)} ?focused=${o.focused}>${u(o.text)}</${k("ui5-li-groupheader",e,n)}>`:p`<ui5-li-groupheader ?focused=${o.focused}>${u(o.text)}</ui5-li-groupheader>`}function PR(t,e,n,o,r){return n?p`<${k("ui5-li",e,n)} type="Active" additional-text=${u(o.additionalText)} group-name=${u(o.groupName)} ._tabIndex=${u(o.itemTabIndex)} .mappedItem=${u(o)} ?selected=${o.selected} ?focused=${o.focused}>${u(o.text)}</${k("ui5-li",e,n)}>`:p`<ui5-li type="Active" additional-text=${u(o.additionalText)} group-name=${u(o.groupName)} ._tabIndex=${u(o.itemTabIndex)} .mappedItem=${u(o)} ?selected=${o.selected} ?focused=${o.focused}>${u(o.text)}</ui5-li>`}function pC(t,e,n){return n?p`<div slot="footer" class="ui5-responsive-popover-footer"><${k("ui5-button",e,n)} design="Transparent" @click="${this._closeRespPopover}">OK</${k("ui5-button",e,n)}></div>`:p`<div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${this._closeRespPopover}">OK</ui5-button></div>`}function hC(t,e,n){return n?p`<${k("ui5-popover",e,n)} skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" horizontal-align="${u(this._valueStatePopoverHorizontalAlign)}" placement-type="Bottom"><div slot="header" class="${Y(this.classes.popoverValueState)}" style="${ie(this.styles.popoverHeader)}"><${k("ui5-icon",e,n)} class="ui5-input-value-state-message-icon" name="${u(this._valueStateMessageIcon)}"></${k("ui5-icon",e,n)}>${this.shouldDisplayDefaultValueStateMessage?fC.call(this,t,e,n):gC.call(this,t,e,n)}</div></${k("ui5-popover",e,n)}>`:p`<ui5-popover skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" horizontal-align="${u(this._valueStatePopoverHorizontalAlign)}" placement-type="Bottom"><div slot="header" class="${Y(this.classes.popoverValueState)}" style="${ie(this.styles.popoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${u(this._valueStateMessageIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage?fC.call(this,t,e,n):gC.call(this,t,e,n)}</div></ui5-popover>`}function fC(t,e,n){return p`${u(this.valueStateDefaultText)}`}function gC(t,e,n){return p`${mt(this.valueStateMessageText,(o,r)=>o._id||r,(o,r)=>FR.call(this,t,e,n,o,r))}`}function FR(t,e,n,o,r){return p`${u(o)}`}V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const RR={packageName:"@ui5/webcomponents",fileName:"themes/ComboBox.css",content:`:host {
	vertical-align: middle;
}
.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}
/*
	This CSS file enables visual alignment of all icons within input elements.
	API:
	- add input-icon attribute to an icon
	- [Optional] pressed attribute set to the icon will enable additional styling (check MultiComboBox, Select, etc.)
*/
[input-icon] {
	color: var(--_ui5_input_icon_color);
	cursor: pointer;
	outline: none;
	padding: var(--_ui5_input_icon_padding);
	border-inline-start: var(--_ui5_input_icon_border);
	min-width: 1rem;
	min-height: 1rem;
	border-radius: var(--_ui5_input_icon_border_radius);
}
[input-icon][pressed] {
	background: var(--_ui5_input_icon_pressed_bg);
	box-shadow: var(--_ui5_input_icon_box_shadow);
	border-inline-start: var(--_ui5_select_hover_icon_left_border);
	color: var(--_ui5_input_icon_pressed_color);
}
[input-icon]:active {
	background-color: var(--sapButton_Active_Background);
	box-shadow: var(--_ui5_input_icon_box_shadow);
	border-inline-start: var(--_ui5_select_hover_icon_left_border);
	color: var(--_ui5_input_icon_pressed_color);
}
[input-icon]:not([pressed]):not(:active):hover {
	background: var(--_ui5_input_icon_hover_bg);
	box-shadow: var(--_ui5_input_icon_box_shadow);
}
[input-icon]:hover {
	border-inline-start: var(--_ui5_select_hover_icon_left_border);
	box-shadow: var(--_ui5_input_icon_box_shadow);
}
:host(:not([hidden])) {
	display: inline-block;
}
:host {
	width: var(--_ui5_input_width);
	min-width: calc(var(--_ui5_input_min_width) + (var(--_ui5-input-icons-count)*var(--_ui5_input_icon_width)));
	margin: var(--_ui5_input_margin_top_bottom) 0;
	height: var(--_ui5_input_height);
	color: var(--sapField_TextColor);
	font-size: var(--sapFontSize);
	font-family: "72override", var(--sapFontFamily);
	font-style: normal;
	border: var(--_ui5-input-border);
	border-radius: var(--_ui5_input_border_radius);
	box-sizing: border-box;
	text-align: start;
	transition: var(--_ui5_input_transition);
	background: var(--sapField_BackgroundStyle);
	background-color: var(--_ui5_input_background_color);
}
:host(:not([readonly])) {
	box-shadow: var(--sapField_Shadow);
}
:host([focused]:not([opened])) {
	border-color: var(--_ui5_input_focused_border_color);
	background-color: var(--sapField_Focus_Background);
}
.ui5-input-focusable-element {
	position: relative;
}
:host([focused]:not([opened])) .ui5-input-focusable-element::after {
	content: var(--ui5_input_focus_pseudo_element_content);
	position: absolute;
	pointer-events: none;
	z-index: 2;
	border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--_ui5_input_focus_outline_color);
	border-radius: var(--_ui5_input_focus_border_radius);
	top: var(--_ui5_input_focus_offset);
	bottom: var(--_ui5_input_focus_offset);
	left: var(--_ui5_input_focus_offset);
	right: var(--_ui5_input_focus_offset);
}
.ui5-input-root::before {
	content: "";
	position: absolute;
	width: calc(100% - 2px);
	left: 1px;
	bottom: -2px;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	height: var(--_ui5_input_bottom_border_height);
	transition: var(--_ui5_input_transition);
	background-color: var(--_ui5_input_bottom_border_color);
}
.ui5-input-root {
	width: 100%;
	height: 100%;
	position: relative;
	background: transparent;
	display: inline-block;
	outline: none;
	box-sizing: border-box;
	color: inherit;
	transition: border-color .2s ease-in-out;
	border-radius: var(--_ui5_input_border_radius);
	overflow: hidden;
}
:host([disabled]) {
	opacity: var(--_ui5_input_disabled_opacity);
	cursor: default;
	pointer-events: none;
	background-color: var(--_ui5-input_disabled_background);
	border-color: var(--_ui5_input_disabled_border_color);
}
:host([disabled]) .ui5-input-root::before,
:host([readonly]) .ui5-input-root::before {
	content: none;
}
[inner-input] {
	background: transparent;
	color: inherit;
	border: none;
	font-style: inherit;
	-webkit-appearance: none;
	-moz-appearance: textfield;
	padding: var(--_ui5_input_inner_padding);
	box-sizing: border-box;
	min-width: var(--_ui5_input_min_width);
	width: 100%;
	text-align: inherit;
	text-overflow: ellipsis;
	flex: 1;
	outline: none;
	font-size: inherit;
	font-family: inherit;
	line-height: inherit;
	letter-spacing: inherit;
	word-spacing: inherit;
	text-align: inherit;
}
[inner-input][inner-input-with-icon] {
	padding: var(--_ui5_input_inner_padding_with_icon);
}
.ui5-input-value-state-icon {
	height: 100%;
	display: var(--_ui5-input-value-state-icon-display);
	align-items: center;
}
.ui5-input-value-state-icon > svg {
	margin-right: 8px;
}
[inner-input]::selection {
	background: var(--sapSelectedColor);
	color: var(--sapContent_ContrastTextColor);
}
/* Input placeholder */
:host([disabled]) [inner-input]::-webkit-input-placeholder {
	visibility: hidden;
}
:host([readonly]) [inner-input]::-webkit-input-placeholder {
	visibility: hidden;
}
:host([disabled]) [inner-input]::-moz-placeholder {
	visibility: hidden;
}
:host([readonly]) [inner-input]::-moz-placeholder {
	visibility: hidden;
}
[inner-input]::-webkit-input-placeholder {
	font-weight: normal;
	font-style: var(--_ui5_input_placeholder_style);
	color: var(--_ui5_input_placeholder_color);
	padding-right: 0.125rem;
}
[inner-input]::-moz-placeholder {
	font-weight: normal;
	font-style: var(--_ui5_input_placeholder_style);
	color: var(--_ui5_input_placeholder_color);
	padding-right: 0.125rem;
}
:host([value-state="Error"]) [inner-input]::-webkit-input-placeholder {
	color: var(--_ui5-input_error_placeholder_color);
	font-weight: var(--_ui5_input_value_state_error_warning_placeholder_font_weight);
}
:host([value-state="Error"]) [inner-input]::-moz-placeholder {
	color: var(--_ui5-input_error_placeholder_color);
	font-weight: var(--_ui5_input_value_state_error_warning_placeholder_font_weight);
}
:host([value-state="Warning"]) [inner-input]::-webkit-input-placeholder {
	font-weight: var(--_ui5_input_value_state_error_warning_placeholder_font_weight);
}
:host([value-state="Warning"]) [inner-input]::-moz-placeholder {
	font-weight: var(--_ui5_input_value_state_error_warning_placeholder_font_weight);
}
:host([value-state="Success"]) [inner-input]::-webkit-input-placeholder {
	color: var(--_ui5_input_placeholder_color);
}
:host([value-state="Success"]) [inner-input]::-moz-placeholder {
	color: var(--_ui5_input_placeholder_color);
}
:host([value-state="Information"]) [inner-input]::-webkit-input-placeholder {
	color: var(--_ui5_input_placeholder_color);
}
:host([value-state="Information"]) [inner-input]::-moz-placeholder {
	color: var(--_ui5_input_placeholder_color);
}
.ui5-input-content {
	height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	overflow: hidden;
	outline: none;
	background: transparent;
	color: inherit;
	border-radius: var(--_ui5_input_border_radius);
}
:host([readonly]) {
	border-color: var(--_ui5_input_readonly_border_color);
	background: var(--sapField_ReadOnly_BackgroundStyle);
	background-color: var(--_ui5_input_readonly_background);
}
:host([value-state="None"]:not([readonly]):hover),
:host(:not([value-state]):not([readonly]):hover) {
	border: var(--_ui5_input_hover_border);
	border-color: var(--_ui5_input_focused_border_color);
	box-shadow: var(--sapField_Hover_Shadow);
	background: var(--sapField_Hover_BackgroundStyle);
	background-color: var(--sapField_Hover_Background);
}
:host(:not([value-state]):not([readonly])[focused]:not([opened]):hover),
:host([value-state="None"]:not([readonly])[focused]:not([opened]):hover) {
	box-shadow: none;
}
:host([focused]):not([opened]) .ui5-input-root::before {
	content: none;
}
:host(:not([readonly]):not([disabled])[value-state]:not([value-state="None"])) {
	border-width: var(--_ui5_input_state_border_width);
}
:host([value-state="Error"]) [inner-input],
:host([value-state="Warning"]) [inner-input] {
	font-style: var(--_ui5_input_error_warning_font_style);
	text-indent: var(--_ui5_input_error_warning_text_indent);
}
:host([value-state="Error"]) [inner-input] {
	font-weight: var(--_ui5_input_error_font_weight);
}
:host([value-state="Warning"]) [inner-input] {
	font-weight: var(--_ui5_input_warning_font_weight);
}
:host([value-state="Error"]:not([readonly]):not([disabled])) {
	background: var(--sapField_InvalidBackgroundStyle);
	background-color: var(--sapField_InvalidBackground);
	border-color: var(--_ui5_input_value_state_error_border_color);
	box-shadow: var(--sapField_InvalidShadow);
}
:host([value-state="Error"][focused]:not([opened]):not([readonly])) {
	background-color: var(--_ui5_input_focused_value_state_error_background);
	border-color: var(--_ui5_input_focused_value_state_error_border_color);
}
:host([value-state="Error"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after {
	border-color: var(--_ui5_input_focused_value_state_error_focus_outline_color);
}
:host([value-state="Error"]:not([readonly])) .ui5-input-root::before{
	background-color: var(--_ui5-input-value-state-error-border-botom-color);
}
:host([value-state="Error"]:not([readonly]):not([focused]):hover),
:host([value-state="Error"]:not([readonly])[focused][opened]:hover) {
	background-color: var(--_ui5_input_value_state_error_hover_background);
	box-shadow: var(--sapField_Hover_InvalidShadow);
}
:host([value-state="Error"]:not([readonly]):not([disabled])),
:host([value-state="Warning"]:not([readonly]):not([disabled])),
:host([value-state="Information"]:not([readonly]):not([disabled])) {
	border-style: var(--_ui5_input_error_warning_border_style);
}
:host([value-state="Warning"]:not([readonly]):not([disabled])) {
	background: var(--sapField_WarningBackgroundStyle);
	background-color: var(--sapField_WarningBackground);
	border-color: var(--_ui5_input_value_state_warning_border_color);
	box-shadow: var(--sapField_WarningShadow);
}
:host([value-state="Warning"][focused]:not([opened]):not([readonly])) {
	background-color: var(--_ui5_input_focused_value_state_warning_background);
	border-color: var(--_ui5_input_focused_value_state_warning_border_color);
}
:host([value-state="Warning"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after {
	border-color: var(--_ui5_input_focused_value_state_warning_focus_outline_color);
}
:host([value-state="Warning"]:not([readonly])) .ui5-input-root::before{
	background-color: var(--_ui5_input_value_state_warning_border_botom_color);
}
:host([value-state="Warning"]:not([readonly]):not([focused]):hover),
:host([value-state="Warning"]:not([readonly])[focused][opened]:hover)  {
	background-color: var(--sapField_Hover_Background);
	box-shadow: var(--sapField_Hover_WarningShadow);
}
:host([value-state="Success"]:not([readonly]):not([disabled])) {
	background: var(--sapField_SuccessBackgroundStyle);
	background-color: var(--sapField_SuccessBackground);
	border-color: var(--_ui5_input_value_state_success_border_color);
	border-width: var(--_ui5_input_value_state_success_border_width);
	box-shadow: var(--sapField_SuccessShadow);
}
:host([value-state="Success"][focused]:not([opened]):not([readonly])) {
	background-color: var(--_ui5_input_focused_value_state_success_background);
	border-color: var(--_ui5_input_focused_value_state_success_border_color);
}
:host([value-state="Success"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after {
	border-color: var(--_ui5_input_focused_value_state_success_focus_outline_color);
}
:host([value-state="Success"]:not([readonly])) .ui5-input-root::before{
	background-color: var(--_ui5_input_value_state_success_border_botom_color);
}
:host([value-state="Success"]:not([readonly]):not([focused]):hover),
:host([value-state="Success"]:not([readonly])[focused][opened]:hover) {
	background-color: var(--sapField_Hover_Background);
	box-shadow: var(--sapField_Hover_SuccessShadow);
}
:host([value-state="Information"]:not([readonly]):not([disabled])) {
	background: var(--sapField_InformationBackgroundStyle);
	background-color: var(--sapField_InformationBackground);
	border-color: var(--_ui5_input_value_state_information_border_color);
	border-width: var(--_ui5_input_information_border_width);
	box-shadow: var(--sapField_InformationShadow);
}
:host([value-state="Information"][focused]:not([opened]):not([readonly])) {
	background-color: var(--_ui5_input_focused_value_state_information_background);
	border-color: var(--_ui5_input_focused_value_state_information_border_color);
}
:host([value-state="Information"]:not([readonly])) .ui5-input-root::before{
	background-color: var(--_ui5_input_value_success_information_border_botom_color);
}
:host([value-state="Information"]:not([readonly]):not([focused]):hover),
:host([value-state="Information"]:not([readonly])[focused][opened]:hover) {
	background-color: var(--sapField_Hover_Background);
	box-shadow: var(--sapField_Hover_InformationShadow);
}
/* Input Icon */
.ui5-input-icon-root {
	min-width: var(--_ui5_input_icon_min_width);
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
/* TODO: Remove this after parser is fixed
	-	this statement is transformed to [ui5-multi-combobox] [ui5-icon] which
	affects all icons in the combobox incuding these in the list items
*/
::slotted([ui5-icon][slot="icon"]) {
	align-self: start;
	padding: var(--_ui5_input_custom_icon_padding);
	/* Normalize like libraries overrule the selector, thefore we need !important */
	box-sizing: content-box !important;
}
:host([value-state="Error"]) [input-icon],
:host([value-state="Warning"]) [input-icon]{
	padding: var(--_ui5_input_error_warning_icon_padding);
}
:host([value-state="Information"]) [input-icon] {
	padding: var(--_ui5_input_information_icon_padding);
}
:host([value-state="Error"]) ::slotted([input-icon][ui5-icon]),
:host([value-state="Error"]) ::slotted([ui5-icon][slot="icon"]),
:host([value-state="Warning"]) ::slotted([ui5-icon][slot="icon"]) {
	padding: var(--_ui5_input_error_warning_custom_icon_padding);
}
:host([value-state="Information"]) ::slotted([ui5-icon][slot="icon"]) {
	padding: var(--_ui5_input_information_custom_icon_padding);
}
:host([value-state="Error"]) [input-icon]:active,
:host([value-state="Error"]) [input-icon][pressed] {
	box-shadow: var(--_ui5_input_error_icon_box_shadow);
	color: var(--_ui5_input_icon_error_pressed_color);
}
:host([value-state="Error"]) [input-icon]:not([pressed]):not(:active):hover {
	box-shadow: var(--_ui5_input_error_icon_box_shadow);
}
:host([value-state="Warning"]) [input-icon]:active,
:host([value-state="Warning"]) [input-icon][pressed] {
	box-shadow: var(--_ui5_input_warning_icon_box_shadow);
	color: var(--_ui5_input_icon_warning_pressed_color);
}
:host([value-state="Warning"]) [input-icon]:not([pressed]):not(:active):hover {
	box-shadow: var(--_ui5_input_warning_icon_box_shadow);
}
:host([value-state="Information"]) [input-icon]:active,
:host([value-state="Information"]) [input-icon][pressed] {
	box-shadow: var(--_ui5_input_information_icon_box_shadow);
	color: var(--_ui5_input_icon_information_pressed_color);
}
:host([value-state="Information"]) [input-icon]:not([pressed]):not(:active):hover {
	box-shadow: var(--_ui5_input_information_icon_box_shadow);
}
:host([value-state="Success"]) [input-icon]:active,
:host([value-state="Success"]) [input-icon][pressed] {
	box-shadow: var(--_ui5_input_success_icon_box_shadow);
	color: var(--_ui5_input_icon_success_pressed_color);
}
:host([value-state="Success"]) [input-icon]:not([pressed]):not(:active):hover {
	box-shadow: var(--_ui5_input_success_icon_box_shadow);
}
.ui5-input-clear-icon-wrapper {
	height: var(--_ui5_input_icon_wrapper_height);
	padding: 0;
	width: var(--_ui5_input_icon_width);
	min-width: var(--_ui5_input_icon_width);
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
}
:host([value-state]:not([value-state="None"]):not([value-state="Success"])) .ui5-input-clear-icon-wrapper {
	height: var(--_ui5_input_icon_wrapper_state_height);
	vertical-align: top;
}
:host([value-state="Success"]) .ui5-input-clear-icon-wrapper {
	height: var(--_ui5_input_icon_wrapper_success_state_height);
}
[ui5-icon].ui5-input-clear-icon {
	padding: 0;
	color: inherit;
}
/* Chrome, Safari, Edge, Opera */
[inner-input]::-webkit-outer-spin-button,
[inner-input]::-webkit-inner-spin-button {
	-webkit-appearance: inherit;
	margin: inherit;
}
.ui5-combobox-root {
	display: flex;
	overflow: hidden;
	width: 100%;
	height: 100%;
	border-radius: var(--_ui5_input_border_radius);
}`};V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const LR={packageName:"@ui5/webcomponents",fileName:"themes/ComboBoxPopover.css",content:`.ui5-combobox-busy {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
	z-index: 42;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	pointer-events: all;
}

.ui5-combobox-busy:not([active]) {
	display: none;
}`};var ul=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let kr=class extends Ce{get isGroupItem(){return!1}};ul([h()],kr.prototype,"text",void 0),ul([h()],kr.prototype,"additionalText",void 0),ul([h({type:Boolean})],kr.prototype,"focused",void 0),ul([h({type:Boolean})],kr.prototype,"selected",void 0),kr=ul([fe("ui5-cb-item")],kr),kr.define();const NR=kr;var Jf=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Ta=class extends Ce{get isGroupItem(){return!0}};Jf([h()],Ta.prototype,"text",void 0),Jf([h({type:Boolean})],Ta.prototype,"focused",void 0),Ta=Jf([fe("ui5-cb-group-item")],Ta),Ta.define();const DR=Ta;function OR(t,e,n){return p`<ul part="native-li" tabindex="${u(this._tabIndex)}" class="ui5-ghli-root ${Y(this.classes.main)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keydown="${this._onkeydown}" aria-label="${u(this.ariaLabelText)}" aria-roledescription="${u(this.groupHeaderText)}" role="group"><div id="${u(this._id)}-content" class="ui5-li-content"><span class="ui5-ghli-title"><slot></slot></span></div></ul>`}V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const HR={packageName:"@ui5/webcomponents",fileName:"themes/GroupHeaderListItem.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}

:host {
	height: var(--_ui5_group_header_list_item_height);
	background: var(--ui5-group-header-listitem-background-color);
	color: var(--sapList_TableGroupHeaderTextColor);
}

:host([has-border]) {
	border-bottom: 1px solid var(--sapList_GroupHeaderBorderColor);
}

.ui5-li-root.ui5-ghli-root {
	padding-top: 0.5rem;
	color: currentColor;
	font-size: var(--sapFontHeader6Size);
	font-weight: normal;
	line-height: 2rem;
	margin: 0;
}

.ui5-ghli-title {
	display: block;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-weight: bold;
}
`};var vC=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},Wc;let cl=Wc=class extends Mc{get groupItem(){return!0}get groupHeaderText(){return Wc.i18nBundle.getText(Q$)}get ariaLabelText(){return[this.textContent,this.accessibleName].filter(Boolean).join(" ")}static async onDefine(){Wc.i18nBundle=await Re("@ui5/webcomponents")}};vC([h()],cl.prototype,"accessibleName",void 0),cl=Wc=vC([fe({tag:"ui5-li-groupheader",languageAware:!0,template:OR,styles:[Mc.styles,HR]})],cl),cl.define();const Qf=cl;var lt=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},Vt;const Uc=10;var Zf;(function(t){t.Error="error",t.Warning="alert",t.Success="sys-enter-2",t.Information="information"})(Zf||(Zf={}));let Je=Vt=class extends Ce{constructor(){super(),this._filteredItems=[],this._initialRendering=!0,this._itemFocused=!1,this._autocomplete=!1,this._isKeyNavigation=!1,this._lastValue="",this._selectionPerformed=!1,this._selectedItemText="",this._userTypedValue=""}onBeforeRendering(){const e=this.valueStatePopover;this.FormSupport=Xe("FormSupport"),(this._initialRendering||this.filter==="None")&&(this._filteredItems=this.items),!this._initialRendering&&document.activeElement===this&&!this._filteredItems.length&&e?.close(),this._selectMatchingItem(),this._initialRendering=!1;const n=this.icon.length||0,o=this.readonly?0:1;this.style.setProperty("--_ui5-input-icons-count",`${n+o}`)}async onAfterRendering(){const e=await this._getPicker();me()&&e.opened&&this.inner.focus(),await this.shouldClosePopover()&&!me()&&(e.close(!1,!1,!0),this._clearFocus(),this._itemFocused=!1),this.toggleValueStatePopover(this.shouldOpenValueStateMessagePopover),this.storeResponsivePopoverWidth(),Du()&&this._autocomplete&&this.filterValue!==this.value&&this.inner.setSelectionRange(this._isKeyNavigation?0:this.filterValue.length,this.value.length)}async shouldClosePopover(){return(await this._getPicker()).opened&&!this.focused&&!this._itemFocused&&!this._isValueStateFocused}_focusin(e){this.focused=!0,this._lastValue=this.value,this._autocomplete=!1,!me()&&e.target.setSelectionRange(0,this.value.length)}_focusout(e){const n=e.relatedTarget,o=n?.shadowRoot?.querySelector(".ui5-valuestatemessage-root");if(this._fireChangeEvent(),o){e.stopImmediatePropagation();return}!this.shadowRoot.contains(n)&&this.staticAreaItem!==e.relatedTarget&&(this.focused=!1,!me()&&this._closeRespPopover(e))}_afterOpenPopover(){this._iconPressed=!0}_afterClosePopover(){this._iconPressed=!1,this._filteredItems=this.items,me()&&this.blur(),this._selectionPerformed&&(this._lastValue=this.value,this._selectionPerformed=!1)}async _toggleRespPopover(){(await this._getPicker()).opened?this._closeRespPopover():this._openRespPopover()}async storeResponsivePopoverWidth(){this.open&&!this._listWidth&&(this._listWidth=(await this._getPicker()).offsetWidth)}toggleValueStatePopover(e){e?this.openValueStatePopover():this.closeValueStatePopover()}async openValueStatePopover(){(await this._getValueStatePopover())?.showAt(this)}async closeValueStatePopover(){(await this._getValueStatePopover())?.close()}async _getValueStatePopover(){const n=(await this.getStaticAreaItemDomRef()).querySelector(".ui5-valuestatemessage-popover");return this.valueStatePopover=n,n}_resetFilter(){this._userTypedValue="",this.inner.setSelectionRange(0,this.value.length),this._filteredItems=this._filterItems(""),this._selectMatchingItem()}_arrowClick(){this.inner.focus(),this._resetFilter(),me()&&this.value&&!this._lastValue&&(this._lastValue=this.value),this._toggleRespPopover()}_input(e){const{value:n}=e.target,o=this.shouldAutocomplete(e);if(e.target===this.inner&&(e.stopImmediatePropagation(),this.focused=!0,this._isValueStateFocused=!1),this._filteredItems=this._filterItems(n),this.value=n,this.filterValue=n,this._clearFocus(),o&&!W5()){const r=this._getFirstMatchingItem(n);r&&this._applyAtomicValueAndSelection(r,n,!0),n!==""&&r&&!r.selected&&!r.isGroupItem&&this.fireEvent("selection-change",{item:r})}this.fireEvent("input"),!me()&&(!this._filteredItems.length||n===""?this._closeRespPopover():this._openRespPopover())}shouldAutocomplete(e){const n=e.inputType;return!["deleteWordBackward","deleteWordForward","deleteSoftLineBackward","deleteSoftLineForward","deleteEntireSoftLine","deleteHardLineBackward","deleteHardLineForward","deleteByDrag","deleteByCut","deleteContent","deleteContentBackward","deleteContentForward","historyUndo"].includes(n)}_startsWithMatchingItems(e){return Gf(e,this._filteredItems,"text")}_clearFocus(){this._filteredItems.map(e=>(e.focused=!1,e))}handleNavKeyPress(e){if(this.focused&&(Xs(e)||Js(e))&&this.value)return;const n=this.open,o=this._filteredItems.find(i=>n?i.focused:i.selected),r=o?this._filteredItems.indexOf(o):-1;e.preventDefault(),!(this.focused&&n&&(dr(e)||Tc(e)||Ic(e)))&&(this._filteredItems.length-1===r&&xo(e)||(this._isKeyNavigation=!0,(e.key==="ArrowDown"||e.key==="ArrowUp"||e.key==="PageUp"||e.key==="PageDown"||e.key==="Home"||e.key==="End")&&this[`_handle${e.key}`](e,r)))}_handleItemNavigation(e,n,o){const r=this.open,i=this._filteredItems[n],a=o?this._filteredItems[n+1]:this._filteredItems[n-1],s=i&&i.isGroupItem;if(!r&&(s&&!a||!s&&!i)||(this._clearFocus(),r?(this._itemFocused=!0,this.value=s?"":i.text,this.focused=!1,i.focused=!0):(this.focused=!0,this.value=s?a.text:i.text,i.focused=!1),this._isValueStateFocused=!1,this._announceSelectedItem(n),s&&r))return;const l=this._getFirstMatchingItem(this.value);l&&this._applyAtomicValueAndSelection(l,this.open?this._userTypedValue:"",!0),l&&!l.selected&&this.fireEvent("selection-change",{item:l}),this.fireEvent("input"),this._fireChangeEvent()}_handleArrowDown(e,n){const o=this.open;if(this.focused&&n===-1&&this.hasValueStateText&&o){this._isValueStateFocused=!0,this.focused=!1;return}n=!o&&this.hasValueState&&n===-1?0:n,this._handleItemNavigation(e,++n,!0)}_handleArrowUp(e,n){const o=this.open;if(n===0&&!this.hasValueStateText){this._clearFocus(),this.focused=!0,this._itemFocused=!1;return}if(n===0&&this.hasValueStateText&&o){this._clearFocus(),this._itemFocused=!1,this._isValueStateFocused=!0,this._filteredItems[0].selected=!1;return}if(this._isValueStateFocused){this.focused=!0,this._isValueStateFocused=!1;return}n=!o&&this.hasValueState&&n===-1?0:n,this._handleItemNavigation(e,--n,!1)}_handlePageUp(e,n){const o=n-Uc>-1;n=o?n-Uc:0;const r=this._filteredItems[n].isGroupItem&&!this.open;if(!o&&this.hasValueStateText&&this.open){this._clearFocus(),this._itemFocused=!1,this._isValueStateFocused=!0;return}this._handleItemNavigation(e,n,r)}_handlePageDown(e,n){const o=this._filteredItems.length;n=n+Uc<o?n+Uc:o-1;const i=this._filteredItems[n].isGroupItem&&!this.open;this._handleItemNavigation(e,n,i)}_handleHome(e){const n=this._filteredItems[0].isGroupItem&&!this.open;if(this.hasValueStateText&&this.open){this._clearFocus(),this._itemFocused=!1,this._isValueStateFocused=!0;return}this._handleItemNavigation(e,0,n)}_handleEnd(e){this._handleItemNavigation(e,this._filteredItems.length-1,!0)}_keyup(){this._userTypedValue=this.value.substring(0,this.inner.selectionStart||0)}_keydown(e){const n=xo(e)||dr(e)||Tc(e)||Ic(e)||Xs(e)||Js(e),o=this.responsivePopover;if(this._autocomplete=!(T0(e)||Bc(e)),this._isKeyNavigation=!1,n&&!this.readonly&&this._filteredItems.length&&this.handleNavKeyPress(e),tt(e)&&(this._fireChangeEvent(),o?.opened?(this._closeRespPopover(),this.focused=!0):this.FormSupport&&this.FormSupport.triggerFormSubmit(this)),Qs(e)&&(this.focused=!0,this.value=this.open?this.value:this._lastValue,this._isValueStateFocused=!1),(Bo(e)||va(e))&&this.open&&this._closeRespPopover(),I0(e)&&!this.readonly&&!this.disabled){e.preventDefault(),this._resetFilter(),this._toggleRespPopover();const r=this._filteredItems.find(i=>i.selected);r&&this.open?(this._itemFocused=!0,r.focused=!0,this.focused=!1):this.open&&this._filteredItems.length?this._handleItemNavigation(e,0,!0):this.focused=!0}}_click(){me()&&!this.readonly&&this._openRespPopover()}_closeRespPopover(e){const n=this.responsivePopover;e&&e.target.classList.contains("ui5-responsive-popover-close-btn")&&this._selectedItemText&&(this.value=this._selectedItemText,this.filterValue=this._selectedItemText),e&&e.target.classList.contains("ui5-responsive-popover-close-btn")&&(this.value=this._lastValue||"",this.filterValue=this._lastValue||""),me()&&this._fireChangeEvent(),this._isValueStateFocused=!1,this._clearFocus(),n?.close()}async _openRespPopover(){(await this._getPicker()).showAt(this)}_filterItems(e){const n=this.items.filter(r=>!r.isGroupItem),o=(yR[this.filter]||nC)(e,n,"text");return this.items.filter((r,i,a)=>Vt._groupItemFilter(r,++i,a,o)||o.indexOf(r)!==-1)}static _groupItemFilter(e,n,o,r){if(e.isGroupItem){let i;for(;o[n]&&!o[n].isGroupItem&&!i;)i=r.indexOf(o[n])!==-1,n++;return i}}_getFirstMatchingItem(e){if(this.items.find(r=>r.focused===!0)?.isGroupItem){this.value=this.filterValue;return}const o=this._startsWithMatchingItems(e).filter(r=>!r.isGroupItem);if(o.length)return o[0]}_applyAtomicValueAndSelection(e,n,o){const r=e&&e.text||"";this.inner.value=r,o&&this.inner.setSelectionRange(n.length,r.length),this.value=r}_selectMatchingItem(){const e=this.items.find(r=>r.focused),n=e&&e.isGroupItem,o=this._filteredItems.find(r=>!r.isGroupItem&&r.text===this.value&&!n);this._filteredItems=this._filteredItems.map(r=>(r.selected=r===o,r))}_fireChangeEvent(){this.value!==this._lastValue&&(this.fireEvent("change"),this._lastValue=this.value)}_inputChange(e){e.preventDefault()}_itemMousedown(e){e.preventDefault()}_selectItem(e){const n=e.detail.item;this._selectedItemText=n.mappedItem.text,this._selectionPerformed=!0;const o=this.value===this._selectedItemText,r=this.value.toLowerCase()===this.filterValue.toLowerCase();if(o&&r)return this._fireChangeEvent(),this._closeRespPopover();this.value=this._selectedItemText,n.mappedItem.selected||this.fireEvent("selection-change",{item:n.mappedItem}),this._filteredItems.map(i=>(i.selected=i===n.mappedItem&&!i.isGroupItem,i)),this._fireChangeEvent(),this._closeRespPopover(),this.inner.setSelectionRange(this.value.length,this.value.length)}_onItemFocus(){this._itemFocused=!0}_announceSelectedItem(e){const n=this._filteredItems[e],o=n.additionalText||"",r=n?.isGroupItem,i=Vt.i18nBundle.getText(kf,e+1,this._filteredItems.length),a=Vt.i18nBundle.getText(lA);Xf(r?`${a} ${n.text}`:`${o} ${i}`.trim(),Ba.Polite)}get _headerTitleText(){return Vt.i18nBundle.getText(Sf)}get _iconAccessibleNameText(){return Vt.i18nBundle.getText(K$)}get inner(){return me()?this.responsivePopover.querySelector(".ui5-input-inner-phone"):this.shadowRoot.querySelector("[inner-input]")}async _getPicker(){const n=(await this.getStaticAreaItemDomRef()).querySelector("[ui5-responsive-popover]");return this.responsivePopover=n,n}get hasValueState(){return this.valueState!==z.None}get hasValueStateText(){return this.hasValueState&&this.valueState!==z.Success}get ariaValueStateHiddenText(){if(!this.hasValueState)return"";let e="";return this.valueState!==z.None&&(e=this.valueStateTypeMappings[this.valueState]),this.shouldDisplayDefaultValueStateMessage?`${e} ${this.valueStateDefaultText||""}`:`${e}`.concat(" ",this.valueStateMessageText.map(n=>n.textContent).join(" "))}get valueStateDefaultText(){if(this.valueState!==z.None)return this.valueStateTextMappings[this.valueState]}get valueStateMessageText(){return this.getSlottedNodes("valueStateMessage").map(e=>e.cloneNode(!0))}get valueStateTextMappings(){return{[z.Success]:Vt.i18nBundle.getText(ya),[z.Error]:Vt.i18nBundle.getText(ma),[z.Warning]:Vt.i18nBundle.getText(ba),[z.Information]:Vt.i18nBundle.getText(Zs)}}get valueStateTypeMappings(){return{[z.Success]:Vt.i18nBundle.getText(Tf),[z.Information]:Vt.i18nBundle.getText(If),[z.Error]:Vt.i18nBundle.getText(xf),[z.Warning]:Vt.i18nBundle.getText(Bf)}}get shouldOpenValueStateMessagePopover(){return this.focused&&!this.readonly&&this.hasValueStateText&&!this._iconPressed&&!this.open&&!this._isPhone}get shouldDisplayDefaultValueStateMessage(){return!this.valueStateMessage.length&&this.hasValueStateText}get _valueStatePopoverHorizontalAlign(){return this.effectiveDir!=="rtl"?gt.Left:gt.Right}get _valueStateMessageIcon(){return this.valueState!==z.None?Zf[this.valueState]:""}get open(){return this?.responsivePopover?.opened||!1}get _isPhone(){return me()}get itemTabIndex(){}get ariaLabelText(){return cr(this)}static async onDefine(){Vt.i18nBundle=await Re("@ui5/webcomponents")}get styles(){const e=parseInt(getComputedStyle(document.documentElement).fontSize);return{popoverHeader:{width:`${this.offsetWidth}px`},suggestionPopoverHeader:{display:this._listWidth===0?"none":"inline-block",width:`${this._listWidth||""}px`},suggestionsPopover:{"min-width":`${this.offsetWidth||0}px`,"max-width":this.offsetWidth/e>40?`${this.offsetWidth}px`:"40rem"}}}get classes(){return{popover:{"ui5-suggestions-popover":!this._isPhone,"ui5-suggestions-popover-with-value-state-header":!this._isPhone&&this.hasValueStateText},popoverValueState:{"ui5-valuestatemessage-header":!0,"ui5-valuestatemessage-root":!0,"ui5-valuestatemessage--success":this.valueState===z.Success,"ui5-valuestatemessage--error":this.valueState===z.Error,"ui5-valuestatemessage--warning":this.valueState===z.Warning,"ui5-valuestatemessage--information":this.valueState===z.Information}}}};lt([h()],Je.prototype,"value",void 0),lt([h()],Je.prototype,"filterValue",void 0),lt([h()],Je.prototype,"placeholder",void 0),lt([h({type:Boolean})],Je.prototype,"disabled",void 0),lt([h({type:z,defaultValue:z.None})],Je.prototype,"valueState",void 0),lt([h({type:Boolean})],Je.prototype,"readonly",void 0),lt([h({type:Boolean})],Je.prototype,"required",void 0),lt([h({type:Boolean})],Je.prototype,"loading",void 0),lt([h({type:xp,defaultValue:xp.StartsWithPerTerm})],Je.prototype,"filter",void 0),lt([h({type:Boolean})],Je.prototype,"focused",void 0),lt([h({type:Boolean})],Je.prototype,"_isValueStateFocused",void 0),lt([h()],Je.prototype,"accessibleName",void 0),lt([h()],Je.prototype,"accessibleNameRef",void 0),lt([h({type:Boolean,noAttribute:!0})],Je.prototype,"_iconPressed",void 0),lt([h({type:Object,noAttribute:!0,multiple:!0})],Je.prototype,"_filteredItems",void 0),lt([h({validator:kn,noAttribute:!0})],Je.prototype,"_listWidth",void 0),lt([ce({type:HTMLElement,default:!0,invalidateOnChildChange:!0})],Je.prototype,"items",void 0),lt([ce()],Je.prototype,"valueStateMessage",void 0),lt([ce()],Je.prototype,"icon",void 0),Je=Vt=lt([fe({tag:"ui5-combobox",languageAware:!0,renderer:et,styles:RR,staticAreaStyles:[zc,jc,LR,oC],template:SR,staticAreaTemplate:TR,dependencies:[NR,Cn,Mf,zf,k1,ci,Uf,Qf,vr,DR]}),re("change"),re("input"),re("selection-change",{detail:{item:{type:HTMLElement}}})],Je),Je.define();const Kf=bt("ui5-combobox",["accessibleName","accessibleNameRef","filter","placeholder","value","valueState"],["disabled","loading","readonly","required"],["icon","valueStateMessage"],["change","input","selection-change"]);Kf.displayName="ComboBox",Kf.defaultProps={filter:xp.StartsWithPerTerm,valueState:Ki.None};const mC=bt("ui5-cb-item",["additionalText","text"],[],[],[]);mC.displayName="ComboBoxItem";const gi=bt("ui5-dialog",["headerText","state","accessibleName","accessibleNameRef","accessibleRole","initialFocus"],["draggable","resizable","stretch","open","preventFocusRestore"],["footer","header"],["after-close","after-open","before-close","before-open"]);gi.displayName="Dialog",gi.defaultProps={state:Ki.None,accessibleRole:Yr.Dialog};function MR(t,e,n){return p`<div class="ui5-file-uploader-root" @mouseover="${this._onmouseover}" @mouseout="${this._onmouseout}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click="${this._onclick}"><div class="ui5-file-uploader-mask">${this.hideInput?void 0:zR.call(this,t,e,n)}<slot></slot></div>${this._keepInputInShadowDOM?jR.call(this,t,e,n):VR.call(this,t,e,n)}</div>`}function zR(t,e,n){return n?p`<${k("ui5-input",e,n)} value="${u(this.value)}" value-state="${u(this.valueState)}" placeholder="${u(this.placeholder)}" ?disabled="${this.disabled}" tabindex="-1" class="ui5-file-uploader-input"></${k("ui5-input",e,n)}>`:p`<ui5-input value="${u(this.value)}" value-state="${u(this.valueState)}" placeholder="${u(this.placeholder)}" ?disabled="${this.disabled}" tabindex="-1" class="ui5-file-uploader-input"></ui5-input>`}function jR(t,e,n){return p`<input type="file" title="${u(this.titleText)}" accept="${u(this.accept)}" ?multiple="${this.multiple}" ?disabled="${this.disabled}" @change="${this._onChange}" aria-hidden="true" tabindex="-1">`}function VR(t,e,n){return p`<slot name="formSupport"></slot>`}function WR(t,e,n){return n?p`<${k("ui5-popover",e,n)} skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="Left"><div slot="header" class="${Y(this.classes.popoverValueState)}" style="${ie(this.styles.popoverHeader)}">${this._valueStateMessageInputIcon?bC.call(this,t,e,n):void 0}${this.shouldDisplayDefaultValueStateMessage?yC.call(this,t,e,n):CC.call(this,t,e,n)}</div></${k("ui5-popover",e,n)}>`:p`<ui5-popover skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="Left"><div slot="header" class="${Y(this.classes.popoverValueState)}" style="${ie(this.styles.popoverHeader)}">${this._valueStateMessageInputIcon?bC.call(this,t,e,n):void 0}${this.shouldDisplayDefaultValueStateMessage?yC.call(this,t,e,n):CC.call(this,t,e,n)}</div></ui5-popover>`}function bC(t,e,n){return n?p`<${k("ui5-icon",e,n)} class="ui5-input-value-state-message-icon" name="${u(this._valueStateMessageInputIcon)}"></${k("ui5-icon",e,n)}>`:p`<ui5-icon class="ui5-input-value-state-message-icon" name="${u(this._valueStateMessageInputIcon)}"></ui5-icon>`}function yC(t,e,n){return p`${u(this.valueStateText)}`}function CC(t,e,n){return p`${mt(this.valueStateMessageText,(o,r)=>o._id||r,(o,r)=>UR.call(this,t,e,n,o,r))}`}function UR(t,e,n,o,r){return p`${u(o)}`}V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const qR={packageName:"@ui5/webcomponents",fileName:"themes/FileUploader.css",content:`:host {
	vertical-align: middle;
}

:host {
	display: inline-block;
}

.ui5-file-uploader-root {
	position: relative;
}

.ui5-file-uploader-root input[type=file] {
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.ui5-file-uploader-root input[type=file]:not([disabled]) {
	cursor: pointer;
}

.ui5-file-uploader-mask {
	display: flex;
	align-items: center;
}

.ui5-file-uploader-mask [ui5-input] {
	margin-right: 0.25rem;
}

:host([value-state="None"]:not([disabled]):hover) [ui5-input],
:host(:not([value-state]):not([disabled]):hover) [ui5-input] {
	border: var(--_ui5_file_uploader_hover_border);
	background-color: var(--sapField_Hover_Background);
	box-shadow: var(--sapField_Hover_Shadow);
}

:host([value-state="Error"]:not([disabled]):hover) [ui5-input] {
	background-color: var(--_ui5_file_uploader_value_state_error_hover_background_color);
	box-shadow: var(--sapField_Hover_InvalidShadow);
}

:host([value-state="Warning"]:not([disabled]):hover) [ui5-input] {
	background-color: var(--sapField_Hover_Background);
	box-shadow: var(--sapField_Hover_WarningShadow);
}

:host([value-state="Success"]:not([disabled]):hover) [ui5-input] {
	background-color: var(--sapField_Hover_Background);
	box-shadow: var(--sapField_Hover_SuccessShadow);
}

:host([value-state="Information"]:not([disabled]):hover) [ui5-input] {
	background-color: var(--sapField_Hover_Background);
	box-shadow: var(--sapField_Hover_InformationShadow);
}

:host(:not([disabled]):active) [ui5-button] {
	background-color: var(--sapButton_Active_Background);
	border-color: var(--sapButton_Active_BorderColor);
	color: var(--sapButton_Active_TextColor);
	text-shadow: none;
}
`};var Bn=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},uo;let en=uo=class extends Ce{static get formAssociated(){return!0}constructor(){super(),this._internals=this.attachInternals&&this.attachInternals()}_onmouseover(){this.content.forEach(e=>{e.classList.add("ui5_hovered")})}_onmouseout(){this.content.forEach(e=>{e.classList.remove("ui5_hovered")})}_onclick(e){tl(e)==="button"&&this._input.click()}_onkeydown(e){tt(e)&&(this._input.click(),e.preventDefault())}_onkeyup(e){Le(e)&&(this._input.click(),e.preventDefault())}_onfocusin(){this.focused=!0}_onfocusout(){this.focused=!1}get files(){return this._input?this._input.files:uo._emptyFilesList}onBeforeRendering(){this._enableFormSupport()}onAfterRendering(){this.value||(this._input.value=""),this.toggleValueStatePopover(this.shouldOpenValueStateMessagePopover)}_enableFormSupport(){const e=Xe("FormSupport");e?this._canUseNativeFormSupport?this._setFormValue():e.syncNativeFileInput(this,(n,o)=>{o.disabled=!!n.disabled},this._onChange.bind(this)):this.name&&console.warn('In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";')}_onChange(e){const n=e.target.files;this._updateValue(n),this.fireEvent("change",{files:n})}_updateValue(e){this.value=Array.from(e||[]).reduce((n,o)=>`${n}"${o.name}" `,"")}_setFormValue(){const e=new FormData;if(this.files)for(let n=0;n<this.files.length;n++)e.append(this.name,this.files[n]);this._internals.setFormValue(e)}toggleValueStatePopover(e){e?this.openValueStatePopover():this.closeValueStatePopover()}async openValueStatePopover(){const e=await this._getPopover();e&&e.showAt(this)}async closeValueStatePopover(){const e=await this._getPopover();e&&e.close()}async _getPopover(){return(await this.getStaticAreaItemDomRef()).querySelector(".ui5-valuestatemessage-popover")}static get _emptyFilesList(){return this.emptyInput||(this.emptyInput=document.createElement("input"),this.emptyInput.type="file"),this.emptyInput.files}get browseText(){return uo.i18nBundle.getText(X$)}get titleText(){return uo.i18nBundle.getText(J$)}get _canUseNativeFormSupport(){return!!(this._internals&&this._internals.setFormValue)}get _keepInputInShadowDOM(){return this._canUseNativeFormSupport||!this.name}get _input(){return this.shadowRoot.querySelector("input[type=file]")||this.querySelector("input[type=file][data-ui5-form-support]")}get valueStateTextMappings(){return{Success:uo.i18nBundle.getText(ya),Information:uo.i18nBundle.getText(Zs),Error:uo.i18nBundle.getText(ma),Warning:uo.i18nBundle.getText(ba)}}get valueStateText(){return this.valueStateTextMappings[this.valueState]}get hasValueState(){return this.valueState!==z.None}get hasValueStateText(){return this.hasValueState&&this.valueState!==z.Success}get valueStateMessageText(){return this.getSlottedNodes("valueStateMessage").map(e=>e.cloneNode(!0))}get shouldDisplayDefaultValueStateMessage(){return!this.valueStateMessage.length&&this.hasValueStateText}get shouldOpenValueStateMessagePopover(){return this.focused&&this.hasValueStateText&&!this.hideInput}get _valueStateMessageInputIcon(){const e={Error:"error",Warning:"alert",Success:"sys-enter-2",Information:"information"};return this.valueState!==z.None?e[this.valueState]:""}get classes(){return{popoverValueState:{"ui5-valuestatemessage-root":!0,"ui5-valuestatemessage--success":this.valueState===z.Success,"ui5-valuestatemessage--error":this.valueState===z.Error,"ui5-valuestatemessage--warning":this.valueState===z.Warning,"ui5-valuestatemessage--information":this.valueState===z.Information}}}get styles(){return{popoverHeader:{width:`${this.ui5Input?this.ui5Input.offsetWidth:0}px`}}}get ui5Input(){return this.shadowRoot.querySelector(".ui5-file-uploader-input")}static async onDefine(){uo.i18nBundle=await Re("@ui5/webcomponents")}};Bn([h()],en.prototype,"accept",void 0),Bn([h({type:Boolean})],en.prototype,"hideInput",void 0),Bn([h({type:Boolean})],en.prototype,"disabled",void 0),Bn([h({type:Boolean})],en.prototype,"multiple",void 0),Bn([h()],en.prototype,"name",void 0),Bn([h()],en.prototype,"placeholder",void 0),Bn([h()],en.prototype,"value",void 0),Bn([h({type:z,defaultValue:z.None})],en.prototype,"valueState",void 0),Bn([h({type:Boolean})],en.prototype,"focused",void 0),Bn([ce({type:HTMLElement,default:!0})],en.prototype,"content",void 0),Bn([ce()],en.prototype,"valueStateMessage",void 0),Bn([ce()],en.prototype,"formSupport",void 0),en=uo=Bn([fe({tag:"ui5-file-uploader",languageAware:!0,renderer:et,styles:qR,template:MR,staticAreaTemplate:WR,staticAreaStyles:[zc,jc],dependencies:[wR,vr,Cn]}),re("change",{detail:{files:{type:FileList}}})],en),en.define();const dl=bt("ui5-file-uploader",["accept","name","placeholder","value","valueState"],["disabled","hideInput","multiple"],["valueStateMessage"],["change"]);dl.displayName="FileUploader",dl.defaultProps={valueState:Ki.None};const Po=bt("ui5-icon",["accessibleName","accessibleRole","design","name"],["interactive","showTooltip"],[],[]);Po.displayName="Icon",Po.defaultProps={design:Tp.Default};const qc=bt("ui5-input",["accessibleName","accessibleNameRef","maxlength","name","placeholder","type","value","valueState"],["disabled","noTypeahead","readonly","required","showClearIcon","showSuggestions"],["icon","valueStateMessage"],["change","input","suggestion-item-preview","suggestion-item-select"]);qc.displayName="Input",qc.defaultProps={type:Lu.Text,valueState:Ki.None};const oe=bt("ui5-label",["for","wrappingType"],["required","showColon"],[],[]);oe.displayName="Label";function GR(t,e,n){return p`<div class="${Y(this.classes.root)}" id="${u(this._id)}" role="note" aria-live="assertive" aria-labelledby="${u(this._id)}">${this.hideIcon?void 0:YR.call(this,t,e,n)}<span class="ui5-hidden-text">${u(this.hiddenText)}</span><span class="ui5-message-strip-text"><slot></slot></span>${this.hideCloseButton?void 0:QR.call(this,t,e,n)}</div>`}function YR(t,e,n){return p`<div class="ui5-message-strip-icon-wrapper" aria-hidden="true">${this.iconProvided?XR.call(this,t,e,n):JR.call(this,t,e,n)}</div>`}function XR(t,e,n){return p`<slot name="icon"></slot>`}function JR(t,e,n){return n?p`<${k("ui5-icon",e,n)} name="${u(this.standardIconName)}" class="ui5-message-strip-icon"></${k("ui5-icon",e,n)}>`:p`<ui5-icon name="${u(this.standardIconName)}" class="ui5-message-strip-icon"></ui5-icon>`}function QR(t,e,n){return n?p`<${k("ui5-button",e,n)} icon="decline" design="Transparent" class="ui5-message-strip-close-button" tooltip="${u(this._closeButtonText)}" @click=${this._closeClick}></${k("ui5-button",e,n)}>`:p`<ui5-button icon="decline" design="Transparent" class="ui5-message-strip-close-button" tooltip="${u(this._closeButtonText)}" @click=${this._closeClick}></ui5-button>`}V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const ZR={packageName:"@ui5/webcomponents",fileName:"themes/MessageStrip.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}

:host(:not([hidden])) {
	display: inline-block;
	width: 100%;
}

/** Root classes **/

.ui5-message-strip-root {
	width: 100%;
	height: 100%;
	display: flex;
	border-radius: var(--sapPopover_BorderCornerRadius);
	padding: var(--_ui5_message_strip_padding);
	border-width: var(--_ui5_message_strip_border_width);
	border-style: solid;
	box-sizing: border-box;
	position: relative;
}

.ui5-message-strip-root-hide-icon {
	padding-inline: var(--_ui5_message_strip_padding_inline_no_icon);
	padding-block: var(--_ui5_message_strip_padding_block_no_icon);
}

.ui5-message-strip-root-hide-close-button {
	padding-inline-end: 1rem;
}

.ui5-message-strip-root--info {
	background-color: var(--sapInformationBackground);
	border-color: var(--sapMessage_InformationBorderColor);
	color: var(--sapTextColor);
}

.ui5-message-strip-root--info .ui5-message-strip-icon {
	color: var(--sapInformativeElementColor);
}

.ui5-message-strip-root--positive {
	background-color: var(--sapSuccessBackground);
	border-color: var(--sapMessage_SuccessBorderColor);
}

.ui5-message-strip-root--positive .ui5-message-strip-icon {
	color: var(--sapPositiveElementColor);
}

.ui5-message-strip-root--negative {
	background-color: var(--sapErrorBackground);
	border-color: var(--sapMessage_ErrorBorderColor);
}

.ui5-message-strip-root--negative .ui5-message-strip-icon {
	color: var(--sapNegativeElementColor);
}

.ui5-message-strip-root--warning {
	background-color: var(--sapWarningBackground);
	border-color: var(--sapMessage_WarningBorderColor);
}

.ui5-message-strip-root--warning .ui5-message-strip-icon {
	color: var(--sapCriticalElementColor);
}

/** Icon wrapper **/

.ui5-message-strip-icon-wrapper {
	position: absolute;
	top: var(--_ui5_message_strip_icon_top);
	inset-inline-start: 0.75rem;
	box-sizing: border-box;
}

/** Text **/

.ui5-message-strip-text {
	width: 100%;
	color: var(--sapTextColor);
	line-height: 1.2;
	font-family: "72override", var(--sapFontFamily);
	font-size: var(--sapFontSize);
}

/** Close button - always in compact mode **/

.ui5-message-strip-close-button {
	width: 2rem;
	min-width: 2rem;
	height: 1.65rem;
	min-height: 1.65rem;
	position: absolute;
	top: var(--_ui5_message_strip_close_button_top);
	inset-inline-end: var(--_ui5_message_strip_close_button_right);
}`};var _l=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},vi,eg;(function(t){t.Information="ui5-message-strip-root--info",t.Positive="ui5-message-strip-root--positive",t.Negative="ui5-message-strip-root--negative",t.Warning="ui5-message-strip-root--warning"})(eg||(eg={}));var tg;(function(t){t.Information="information",t.Positive="sys-enter-2",t.Negative="error",t.Warning="alert"})(tg||(tg={}));let mi=vi=class extends Ce{_closeClick(){this.fireEvent("close")}static async onDefine(){vi.i18nBundle=await Re("@ui5/webcomponents")}static designAnnouncementMappings(){const e=n=>vi.i18nBundle.getText(n);return{Information:e(bA),Positive:e(mA),Negative:e(gA),Warning:e(vA)}}get hiddenText(){return`${vi.designAnnouncementMappings()[this.design]} ${this.hideCloseButton?"":this._closableText}`}get _closeButtonText(){return vi.i18nBundle.getText(hA)}get _closableText(){return vi.i18nBundle.getText(fA)}get classes(){return{root:{"ui5-message-strip-root":!0,"ui5-message-strip-root-hide-icon":this.hideIcon,"ui5-message-strip-root-hide-close-button":this.hideCloseButton,[this.designClasses]:!0}}}get iconProvided(){return this.icon.length>0}get standardIconName(){return tg[this.design]}get designClasses(){return eg[this.design]}};_l([h({type:Np,defaultValue:Np.Information})],mi.prototype,"design",void 0),_l([h({type:Boolean})],mi.prototype,"hideIcon",void 0),_l([h({type:Boolean})],mi.prototype,"hideCloseButton",void 0),_l([ce()],mi.prototype,"icon",void 0),mi=vi=_l([fe({tag:"ui5-message-strip",languageAware:!0,renderer:et,template:GR,styles:ZR,dependencies:[Cn,ci]}),re("close")],mi),mi.define();const Gc=bt("ui5-message-strip",["design"],["hideCloseButton","hideIcon"],["icon"],["close"]);Gc.displayName="MessageStrip",Gc.defaultProps={design:Np.Information};var xr=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Kn=class extends Ce{get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}};xr([h({type:Boolean})],Kn.prototype,"selected",void 0),xr([h({type:Boolean})],Kn.prototype,"disabled",void 0),xr([h()],Kn.prototype,"title",void 0),xr([h({defaultValue:null})],Kn.prototype,"icon",void 0),xr([h()],Kn.prototype,"value",void 0),xr([h()],Kn.prototype,"additionalText",void 0),xr([h({type:Boolean})],Kn.prototype,"_focused",void 0),Kn=xr([fe("ui5-option")],Kn),Kn.define();const KR=Kn,_t=bt("ui5-option",["additionalText","icon","value"],["disabled","selected"],[],[]);_t.displayName="Option";const e3=t=>{let e,n,o,r,i,a,s,l,c,_,d,v;const b=M1({beforeStart:()=>{t.style.display="block",e=getComputedStyle(t),n=parseFloat(e.paddingTop),o=parseFloat(e.paddingBottom),r=parseFloat(e.marginTop),i=parseFloat(e.marginBottom),a=parseFloat(e.height),s=t.style.overflow,l=t.style.paddingTop,c=t.style.paddingBottom,_=t.style.marginTop,d=t.style.marginBottom,v=t.style.height,t.style.overflow="hidden",t.style.paddingTop="0",t.style.paddingBottom="0",t.style.marginTop="0",t.style.marginBottom="0",t.style.height="0"},duration:z1,element:t,advance:S=>{t.style.display="block",t.style.paddingTop=`${n*S}px`,t.style.paddingBottom=`${o*S}px`,t.style.marginTop=`${r*S}px`,t.style.marginBottom=`${i*S}px`,t.style.height=`${a*S}px`}});return b.promise().then(()=>{t.style.overflow=s,t.style.paddingTop=l,t.style.paddingBottom=c,t.style.marginTop=_,t.style.marginBottom=d,t.style.height=v}),b},t3=t=>{let e,n,o,r,i,a,s,l,c,_,d,v;const b=M1({beforeStart:()=>{const S=t;e=getComputedStyle(S),n=parseFloat(e.paddingTop),o=parseFloat(e.paddingBottom),r=parseFloat(e.marginTop),i=parseFloat(e.marginBottom),a=parseFloat(e.height),s=S.style.overflow,l=S.style.paddingTop,c=S.style.paddingBottom,_=S.style.marginTop,d=S.style.marginBottom,v=S.style.height,S.style.overflow="hidden"},duration:z1,element:t,advance:S=>{t.style.paddingTop=`${n-n*S}px`,t.style.paddingBottom=`${o-o*S}px`,t.style.marginTop=`${r-r*S}px`,t.style.marginBottom=`${i-i*S}px`,t.style.height=`${a-a*S}px`}});return b.promise().then(S=>{S instanceof Error||(t.style.overflow=s,t.style.paddingTop=l,t.style.paddingBottom=c,t.style.marginTop=_,t.style.marginBottom=d,t.style.height=v,t.style.display="none")}),b};function n3(t,e,n){return p`<div class="ui5-panel-root" role="${u(this.accRole)}" aria-label="${u(this.effectiveAccessibleName)}" aria-labelledby="${u(this.fixedPanelAriaLabelledbyReference)}">${this.hasHeaderOrHeaderText?o3.call(this,t,e,n):void 0}<div class="ui5-panel-content" id="${u(this._id)}-content" tabindex="-1" style="${ie(this.styles.content)}" part="content"><slot></slot></div></div>`}function o3(t,e,n){return p`<div class="ui5-panel-heading-wrapper${Y(this.classes.stickyHeaderClass)}" role="${u(this.headingWrapperRole)}" aria-level="${u(this.headingWrapperAriaLevel)}"><div @click="${this._headerClick}" @keydown="${this._headerKeyDown}" @keyup="${this._headerKeyUp}" class="ui5-panel-header" tabindex="${u(this.headerTabIndex)}" role="${u(this.accInfo.role)}" aria-expanded="${u(this.accInfo.ariaExpanded)}" aria-controls="${u(this.accInfo.ariaControls)}" aria-labelledby="${u(this.accInfo.ariaLabelledby)}" part="header">${this.fixed?void 0:r3.call(this,t,e,n)}${this._hasHeader?s3.call(this,t,e,n):l3.call(this,t,e,n)}</div></div>`}function r3(t,e,n){return p`<div class="ui5-panel-header-button-root">${this._hasHeader?i3.call(this,t,e,n):a3.call(this,t,e,n)}</div>`}function i3(t,e,n){return n?p`<${k("ui5-button",e,n)} design="Transparent" class="ui5-panel-header-button ui5-panel-header-button-with-icon" @click="${this._toggleButtonClick}" .accessibilityAttributes=${u(this.accInfo.button.accessibilityAttributes)} tooltip="${u(this.accInfo.button.title)}" accessible-name="${u(this.accInfo.button.ariaLabelButton)}"><div class="ui5-panel-header-icon-wrapper"><${k("ui5-icon",e,n)} class="ui5-panel-header-icon ${Y(this.classes.headerBtn)}" name="slim-arrow-right"></${k("ui5-icon",e,n)}></div></${k("ui5-button",e,n)}>`:p`<ui5-button design="Transparent" class="ui5-panel-header-button ui5-panel-header-button-with-icon" @click="${this._toggleButtonClick}" .accessibilityAttributes=${u(this.accInfo.button.accessibilityAttributes)} tooltip="${u(this.accInfo.button.title)}" accessible-name="${u(this.accInfo.button.ariaLabelButton)}"><div class="ui5-panel-header-icon-wrapper"><ui5-icon class="ui5-panel-header-icon ${Y(this.classes.headerBtn)}" name="slim-arrow-right"></ui5-icon></div></ui5-button>`}function a3(t,e,n){return n?p`<${k("ui5-icon",e,n)} class="ui5-panel-header-button ui5-panel-header-icon ${Y(this.classes.headerBtn)}" name="slim-arrow-right" show-tooltip accessible-name="${u(this.toggleButtonTitle)}"></${k("ui5-icon",e,n)}>`:p`<ui5-icon class="ui5-panel-header-button ui5-panel-header-icon ${Y(this.classes.headerBtn)}" name="slim-arrow-right" show-tooltip accessible-name="${u(this.toggleButtonTitle)}"></ui5-icon>`}function s3(t,e,n){return p`<slot name="header"></slot>`}function l3(t,e,n){return p`<div id="${u(this._id)}-header-title" class="ui5-panel-header-title">${u(this.headerText)}</div>`}V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const u3={packageName:"@ui5/webcomponents",fileName:"themes/Panel.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}

:host(:not([hidden])) {
	display: block;
}

:host {
	font-family: "72override", var(--sapFontFamily);
	background-color: var(--sapGroup_TitleBackground);
	border-radius: var(--_ui5_panel_border_radius);
}

:host(:not([collapsed])) {
	border-bottom: var(--_ui5_panel_border_bottom);
}

:host([fixed]) .ui5-panel-header {
	padding-left: 1rem;
}

.ui5-panel-header {
	min-height: var(--_ui5_panel_header_height);
	width: 100%;
	position: relative;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	outline: none;
	box-sizing: border-box;
	padding-right: var(--_ui5_panel_header_padding_right);
}

.ui5-panel-header-icon {
	color: var(--_ui5_panel_icon_color);
}

.ui5-panel-header-button-animated {
	transition: transform 0.4s ease-out;
}

:host(:not([_has-header]):not([fixed])) .ui5-panel-header {
	cursor: pointer;
}

:host(:not([_has-header]):not([fixed])) .ui5-panel-header:focus::after {
	content: "";
	position: absolute;
	pointer-events: none;
	z-index: 2;
	border: var(--_ui5_panel_focus_border);
	border-radius: var(--_ui5_panel_border_radius);
	top: var(--_ui5_panel_focus_offset);
	bottom: var(--_ui5_panel_focus_offset);
	left: var(--_ui5_panel_focus_offset);
	right: var(--_ui5_panel_focus_offset);
}

:host(:not([collapsed]):not([_has-header]):not([fixed])) .ui5-panel-header:focus:after {
	border-radius: var(--_ui5_panel_border_radius_expanded);
}

:host(:not([collapsed])) .ui5-panel-header-button:not(.ui5-panel-header-button-with-icon),
:host(:not([collapsed])) .ui5-panel-header-icon-wrapper [ui5-icon] {
	transform: var(--_ui5_panel_toggle_btn_rotation);
}

:host([fixed]) .ui5-panel-header-title {
	width: 100%;
}

.ui5-panel-heading-wrapper.ui5-panel-heading-wrapper-sticky {
    position: sticky;
    top: 0;
	background-color: var(--_ui5_panel_header_background_color);
	z-index: 100; /* The z-index of the table header is 99 therefore to have table in the panel and panel header to be on top we need 100 */
	border-radius: var(--_ui5_panel_border_radius);
}

.ui5-panel-header-title {
	width: calc(100% - var(--_ui5_panel_button_root_width));
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-family: "72override", var(--sapFontHeaderFamily);
	font-size: var(--sapGroup_Title_FontSize);
	font-weight: normal;
	color: var(--sapGroup_TitleTextColor);
	font-weight: normal;
}

.ui5-panel-content {
	padding: var(--_ui5_panel_content_padding);
	background-color: var(--sapGroup_ContentBackground);
	outline: none;
	border-bottom-left-radius: var(--_ui5_panel_border_radius);
	border-bottom-right-radius: var(--_ui5_panel_border_radius);
	overflow: auto;
}

.ui5-panel-header-button-root {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	width: var(--_ui5_panel_button_root_width);
	height: var(--_ui5_panel_button_root_width);
	padding: var(--_ui5_panel_header_button_wrapper_padding);
	box-sizing: border-box;
}

:host([fixed]:not([collapsed]):not([_has-header])) .ui5-panel-header,
:host([collapsed]) .ui5-panel-header {
	border-bottom: 0.0625rem solid var(--sapGroup_TitleBorderColor);
}

:host([collapsed]) .ui5-panel-header {
	border-bottom-left-radius: var(--_ui5_panel_border_radius);
	border-bottom-right-radius: var(--_ui5_panel_border_radius);
}

:host(:not([fixed]):not([collapsed])) .ui5-panel-header {
	border-bottom: var(--_ui5_panel_default_header_border);
}

[ui5-button].ui5-panel-header-button {
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: initial;
	height: 100%;
	width: 100%;
}

.ui5-panel-header-icon-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
}

.ui5-panel-header-icon-wrapper,
.ui5-panel-header-icon-wrapper .ui5-panel-header-icon {
	color: inherit;
}

.ui5-panel-header-icon-wrapper,
[ui5-button].ui5-panel-header-button-with-icon [ui5-icon] {
	pointer-events: none;
}

.ui5-panel-root {
	height: 100%;
    display: flex;
    flex-direction: column;
}`};var dn=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},Yc;let Wt=Yc=class extends Ce{onBeforeRendering(){this._animationRunning||(this._contentExpanded=!this.collapsed),this._hasHeader=!!this.header.length}shouldToggle(e){return this.header.length?e.classList.contains("ui5-panel-header-button"):!0}shouldNotAnimate(){return this.noAnimation||ZF()===Q5.None}_headerClick(e){this.shouldToggle(e.target)&&this._toggleOpen()}_toggleButtonClick(e){e.x===0&&e.y===0&&e.stopImmediatePropagation()}_headerKeyDown(e){this.shouldToggle(e.target)&&(tt(e)&&e.preventDefault(),Le(e)&&e.preventDefault())}_headerKeyUp(e){this.shouldToggle(e.target)&&(tt(e)&&this._toggleOpen(),Le(e)&&this._toggleOpen())}_toggleOpen(){if(this.fixed)return;if(this.collapsed=!this.collapsed,this.shouldNotAnimate()){this.fireEvent("toggle");return}this._animationRunning=!0;const e=this.getDomRef().querySelectorAll(".ui5-panel-content"),n=[];[].forEach.call(e,o=>{this.collapsed?n.push(t3(o).promise()):n.push(e3(o).promise())}),Promise.all(n).then(()=>{this._animationRunning=!1,this._contentExpanded=!this.collapsed,this.fireEvent("toggle")})}_headerOnTarget(e){return e.classList.contains("sapMPanelWrappingDiv")}get classes(){return{headerBtn:{"ui5-panel-header-button-animated":!this.shouldNotAnimate()},stickyHeaderClass:{"ui5-panel-heading-wrapper-sticky":this.stickyHeader}}}get toggleButtonTitle(){return Yc.i18nBundle.getText(yA)}get expanded(){return!this.collapsed}get accRole(){return this.accessibleRole.toLowerCase()}get effectiveAccessibleName(){return typeof this.accessibleName=="string"&&this.accessibleName.length?this.accessibleName:void 0}get accInfo(){return{button:{accessibilityAttributes:{expanded:this.expanded},title:this.toggleButtonTitle,ariaLabelButton:!this.nonFocusableButton&&this.useAccessibleNameForToggleButton?this.effectiveAccessibleName:void 0},ariaExpanded:this.nonFixedInternalHeader?this.expanded:void 0,ariaControls:this.nonFixedInternalHeader?`${this._id}-content`:void 0,ariaLabelledby:this.nonFocusableButton?this.ariaLabelledbyReference:void 0,role:this.nonFixedInternalHeader?"button":void 0}}get ariaLabelledbyReference(){return this.nonFocusableButton&&this.headerText&&!this.fixed?`${this._id}-header-title`:void 0}get fixedPanelAriaLabelledbyReference(){return this.fixed&&!this.effectiveAccessibleName?`${this._id}-header-title`:void 0}get headerAriaLevel(){return this.headerLevel.slice(1)}get headerTabIndex(){return this.header.length||this.fixed?"-1":"0"}get headingWrapperAriaLevel(){return this._hasHeader?void 0:this.headerAriaLevel}get headingWrapperRole(){return this._hasHeader?void 0:"heading"}get nonFixedInternalHeader(){return!this._hasHeader&&!this.fixed}get hasHeaderOrHeaderText(){return this._hasHeader||this.headerText}get nonFocusableButton(){return!this.header.length}get styles(){return{content:{display:this._contentExpanded?"block":"none"}}}static async onDefine(){Yc.i18nBundle=await Re("@ui5/webcomponents")}};dn([h()],Wt.prototype,"headerText",void 0),dn([h({type:Boolean})],Wt.prototype,"fixed",void 0),dn([h({type:Boolean})],Wt.prototype,"collapsed",void 0),dn([h({type:Boolean})],Wt.prototype,"noAnimation",void 0),dn([h({type:Op,defaultValue:Op.Form})],Wt.prototype,"accessibleRole",void 0),dn([h({type:Zi,defaultValue:Zi.H2})],Wt.prototype,"headerLevel",void 0),dn([h()],Wt.prototype,"accessibleName",void 0),dn([h({type:Boolean})],Wt.prototype,"stickyHeader",void 0),dn([h({type:Boolean})],Wt.prototype,"useAccessibleNameForToggleButton",void 0),dn([h({type:Boolean})],Wt.prototype,"_hasHeader",void 0),dn([h({type:Boolean,noAttribute:!0})],Wt.prototype,"_contentExpanded",void 0),dn([h({type:Boolean,noAttribute:!0})],Wt.prototype,"_animationRunning",void 0),dn([ce()],Wt.prototype,"header",void 0),Wt=Yc=dn([fe({tag:"ui5-panel",fastNavigation:!0,languageAware:!0,renderer:et,template:n3,styles:u3,dependencies:[ci,Cn]}),re("toggle")],Wt),Wt.define();const eo=bt("ui5-panel",["accessibleName","accessibleRole","headerLevel","headerText"],["collapsed","fixed","noAnimation","stickyHeader"],["header"],["toggle"]);eo.displayName="Panel",eo.defaultProps={accessibleRole:Op.Form,headerLevel:Zi.H2};function c3(t,e,n){return n?p`<div class="ui5-select-root ui5-input-focusable-element" id="${u(this._id)}-select" @click="${this._onclick}">${this.selectedOptionIcon?wC.call(this,t,e,n):void 0}<div class="ui5-select-label-root" data-sap-focus-ref tabindex="${u(this._effectiveTabIndex)}" role="combobox" aria-haspopup="listbox" aria-label="${u(this.ariaLabelText)}" aria-describedby="${u(this.valueStateTextId)}" aria-disabled="${u(this.isDisabled)}" aria-required="${u(this.required)}" aria-expanded="${u(this._isPickerOpen)}" aria-roledescription="${u(this._ariaRoleDescription)}" @keydown="${this._onkeydown}" @keypress="${this._handleKeyboardNavigation}" @keyup="${this._onkeyup}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}">${u(this._text)}</div><${k("ui5-icon",e,n)} name="slim-arrow-down" input-icon ?pressed="${this._iconPressed}"></${k("ui5-icon",e,n)}>${this.hasValueState?SC.call(this,t,e,n):void 0}<slot name="formSupport"></slot></div>`:p`<div class="ui5-select-root ui5-input-focusable-element" id="${u(this._id)}-select" @click="${this._onclick}">${this.selectedOptionIcon?wC.call(this,t,e,n):void 0}<div class="ui5-select-label-root" data-sap-focus-ref tabindex="${u(this._effectiveTabIndex)}" role="combobox" aria-haspopup="listbox" aria-label="${u(this.ariaLabelText)}" aria-describedby="${u(this.valueStateTextId)}" aria-disabled="${u(this.isDisabled)}" aria-required="${u(this.required)}" aria-expanded="${u(this._isPickerOpen)}" aria-roledescription="${u(this._ariaRoleDescription)}" @keydown="${this._onkeydown}" @keypress="${this._handleKeyboardNavigation}" @keyup="${this._onkeyup}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}">${u(this._text)}</div><ui5-icon name="slim-arrow-down" input-icon ?pressed="${this._iconPressed}"></ui5-icon>${this.hasValueState?SC.call(this,t,e,n):void 0}<slot name="formSupport"></slot></div>`}function wC(t,e,n){return n?p`<${k("ui5-icon",e,n)} aria-hidden="true" class="ui5-select-option-icon" name="${u(this.selectedOptionIcon)}"></${k("ui5-icon",e,n)}>`:p`<ui5-icon aria-hidden="true" class="ui5-select-option-icon" name="${u(this.selectedOptionIcon)}"></ui5-icon>`}function SC(t,e,n){return p`<span id="${u(this._id)}-valueStateDesc" class="ui5-hidden-text">${u(this.valueStateText)}</span>`}function d3(t,e,n){return p`${this.options?_3.call(this,t,e,n):void 0}${this.shouldOpenValueStateMessagePopover?m3.call(this,t,e,n):void 0}`}function _3(t,e,n){return n?p`<${k("ui5-responsive-popover",e,n)} hide-arrow _disable-initial-focus placement-type="Bottom" class="ui5-select-popover ${Y(this.classes.popover)}" horizontal-align="Left" @ui5-after-open="${u(this._afterOpen)}" @ui5-before-open="${u(this._beforeOpen)}" @ui5-after-close="${u(this._afterClose)}" @keydown="${this._onkeydown}" style=${ie(this.styles.responsivePopover)}>${this._isPhone?kC.call(this,t,e,n):void 0}${this._isPhone?void 0:BC.call(this,t,e,n)}<${k("ui5-list",e,n)} mode="SingleSelectAuto" separators="None" @mousedown="${this._itemMousedown}" @ui5-item-click="${u(this._handleItemPress)}">${mt(this._syncedOptions,(o,r)=>o._id||r,(o,r)=>$C.call(this,t,e,n,o,r))}</${k("ui5-list",e,n)}></${k("ui5-responsive-popover",e,n)}>`:p`<ui5-responsive-popover hide-arrow _disable-initial-focus placement-type="Bottom" class="ui5-select-popover ${Y(this.classes.popover)}" horizontal-align="Left" @ui5-after-open="${u(this._afterOpen)}" @ui5-before-open="${u(this._beforeOpen)}" @ui5-after-close="${u(this._afterClose)}" @keydown="${this._onkeydown}" style=${ie(this.styles.responsivePopover)}>${this._isPhone?kC.call(this,t,e,n):void 0}${this._isPhone?void 0:BC.call(this,t,e,n)}<ui5-list mode="SingleSelectAuto" separators="None" @mousedown="${this._itemMousedown}" @ui5-item-click="${u(this._handleItemPress)}">${mt(this._syncedOptions,(o,r)=>o._id||r,(o,r)=>$C.call(this,t,e,n,o,r))}</ui5-list></ui5-responsive-popover>`}function kC(t,e,n){return n?p`<div class="ui5-responsive-popover-header"><div class="row"><span>${u(this._headerTitleText)}</span><${k("ui5-button",e,n)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._toggleRespPopover}"></${k("ui5-button",e,n)}></div>${this.hasValueStateText?xC.call(this,t,e,n):void 0}</div>`:p`<div class="ui5-responsive-popover-header"><div class="row"><span>${u(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._toggleRespPopover}"></ui5-button></div>${this.hasValueStateText?xC.call(this,t,e,n):void 0}</div>`}function xC(t,e,n){return p`<div class="${Y(this.classes.popoverValueState)} row ui5-select-value-state-dialog-header">${this.shouldDisplayDefaultValueStateMessage?p3.call(this,t,e,n):h3.call(this,t,e,n)}</div>`}function p3(t,e,n){return p`${u(this.valueStateText)}`}function h3(t,e,n){return p`${mt(this.valueStateMessageText,(o,r)=>o._id||r,(o,r)=>f3.call(this,t,e,n,o,r))}`}function f3(t,e,n,o,r){return p`${u(o)}`}function BC(t,e,n){return p`${this.hasValueStateText?g3.call(this,t,e,n):void 0}`}function g3(t,e,n){return n?p`<div class="${Y(this.classes.popoverValueState)}" style=${ie(this.styles.responsivePopoverHeader)}><${k("ui5-icon",e,n)} class="ui5-input-value-state-message-icon" name="${u(this._valueStateMessageInputIcon)}"></${k("ui5-icon",e,n)}>${this.shouldDisplayDefaultValueStateMessage?TC.call(this,t,e,n):IC.call(this,t,e,n)}</div>`:p`<div class="${Y(this.classes.popoverValueState)}" style=${ie(this.styles.responsivePopoverHeader)}><ui5-icon class="ui5-input-value-state-message-icon" name="${u(this._valueStateMessageInputIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage?TC.call(this,t,e,n):IC.call(this,t,e,n)}</div>`}function TC(t,e,n){return p`${u(this.valueStateText)}`}function IC(t,e,n){return p`${mt(this.valueStateMessageText,(o,r)=>o._id||r,(o,r)=>v3.call(this,t,e,n,o,r))}`}function v3(t,e,n,o,r){return p`${u(o)}`}function $C(t,e,n,o,r){return n?p`<${k("ui5-li",e,n)} id="${u(o.id)}-li" icon="${u(o.icon)}" ?selected="${o.selected}" ?focused="${o._focused}" title="${u(o.title)}" additional-text="${u(o.additionalText)}" ?aria-selected="${o.selected}" data-ui5-stable="${u(o.stableDomRef)}">${u(o.textContent)}</${k("ui5-li",e,n)}>`:p`<ui5-li id="${u(o.id)}-li" icon="${u(o.icon)}" ?selected="${o.selected}" ?focused="${o._focused}" title="${u(o.title)}" additional-text="${u(o.additionalText)}" ?aria-selected="${o.selected}" data-ui5-stable="${u(o.stableDomRef)}">${u(o.textContent)}</ui5-li>`}function m3(t,e,n){return n?p`<${k("ui5-popover",e,n)} skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="Left"><div class="${Y(this.classes.popoverValueState)}" style="${ie(this.styles.popoverHeader)}"><${k("ui5-icon",e,n)} class="ui5-input-value-state-message-icon" name="${u(this._valueStateMessageInputIcon)}"></${k("ui5-icon",e,n)}>${this.shouldDisplayDefaultValueStateMessage?AC.call(this,t,e,n):EC.call(this,t,e,n)}</div></${k("ui5-popover",e,n)}>`:p`<ui5-popover skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="Left"><div class="${Y(this.classes.popoverValueState)}" style="${ie(this.styles.popoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${u(this._valueStateMessageInputIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage?AC.call(this,t,e,n):EC.call(this,t,e,n)}</div></ui5-popover>`}function AC(t,e,n){return p`${u(this.valueStateText)}`}function EC(t,e,n){return p`${mt(this.valueStateMessageText,(o,r)=>o._id||r,(o,r)=>b3.call(this,t,e,n,o,r))}`}function b3(t,e,n,o,r){return p`${u(o)}`}V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const y3={packageName:"@ui5/webcomponents",fileName:"themes/Select.css",content:`:host {
	vertical-align: middle;
}
/*
	This CSS file enables visual alignment of all icons within input elements.
	API:
	- add input-icon attribute to an icon
	- [Optional] pressed attribute set to the icon will enable additional styling (check MultiComboBox, Select, etc.)
*/
[input-icon] {
	color: var(--_ui5_input_icon_color);
	cursor: pointer;
	outline: none;
	padding: var(--_ui5_input_icon_padding);
	border-inline-start: var(--_ui5_input_icon_border);
	min-width: 1rem;
	min-height: 1rem;
	border-radius: var(--_ui5_input_icon_border_radius);
}
[input-icon][pressed] {
	background: var(--_ui5_input_icon_pressed_bg);
	box-shadow: var(--_ui5_input_icon_box_shadow);
	border-inline-start: var(--_ui5_select_hover_icon_left_border);
	color: var(--_ui5_input_icon_pressed_color);
}
[input-icon]:active {
	background-color: var(--sapButton_Active_Background);
	box-shadow: var(--_ui5_input_icon_box_shadow);
	border-inline-start: var(--_ui5_select_hover_icon_left_border);
	color: var(--_ui5_input_icon_pressed_color);
}
[input-icon]:not([pressed]):not(:active):hover {
	background: var(--_ui5_input_icon_hover_bg);
	box-shadow: var(--_ui5_input_icon_box_shadow);
}
[input-icon]:hover {
	border-inline-start: var(--_ui5_select_hover_icon_left_border);
	box-shadow: var(--_ui5_input_icon_box_shadow);
}
.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}
:host(:not([hidden])) {
	display: inline-block;
}
:host {
	width: var(--_ui5_input_width);
	min-width: calc(var(--_ui5_input_min_width) + (var(--_ui5-input-icons-count)*var(--_ui5_input_icon_width)));
	margin: var(--_ui5_input_margin_top_bottom) 0;
	height: var(--_ui5_input_height);
	color: var(--sapField_TextColor);
	font-size: var(--sapFontSize);
	font-family: "72override", var(--sapFontFamily);
	font-style: normal;
	border: var(--_ui5-input-border);
	border-radius: var(--_ui5_input_border_radius);
	box-sizing: border-box;
	text-align: start;
	transition: var(--_ui5_input_transition);
	background: var(--sapField_BackgroundStyle);
	background-color: var(--_ui5_input_background_color);
}
:host(:not([readonly])) {
	box-shadow: var(--sapField_Shadow);
}
:host([focused]:not([opened])) {
	border-color: var(--_ui5_input_focused_border_color);
	background-color: var(--sapField_Focus_Background);
}
.ui5-input-focusable-element {
	position: relative;
}
:host([focused]:not([opened])) .ui5-input-focusable-element::after {
	content: var(--ui5_input_focus_pseudo_element_content);
	position: absolute;
	pointer-events: none;
	z-index: 2;
	border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--_ui5_input_focus_outline_color);
	border-radius: var(--_ui5_input_focus_border_radius);
	top: var(--_ui5_input_focus_offset);
	bottom: var(--_ui5_input_focus_offset);
	left: var(--_ui5_input_focus_offset);
	right: var(--_ui5_input_focus_offset);
}
.ui5-input-root::before {
	content: "";
	position: absolute;
	width: calc(100% - 2px);
	left: 1px;
	bottom: -2px;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	height: var(--_ui5_input_bottom_border_height);
	transition: var(--_ui5_input_transition);
	background-color: var(--_ui5_input_bottom_border_color);
}
.ui5-input-root {
	width: 100%;
	height: 100%;
	position: relative;
	background: transparent;
	display: inline-block;
	outline: none;
	box-sizing: border-box;
	color: inherit;
	transition: border-color .2s ease-in-out;
	border-radius: var(--_ui5_input_border_radius);
	overflow: hidden;
}
:host([disabled]) {
	opacity: var(--_ui5_input_disabled_opacity);
	cursor: default;
	pointer-events: none;
	background-color: var(--_ui5-input_disabled_background);
	border-color: var(--_ui5_input_disabled_border_color);
}
:host([disabled]) .ui5-input-root::before,
:host([readonly]) .ui5-input-root::before {
	content: none;
}
[inner-input] {
	background: transparent;
	color: inherit;
	border: none;
	font-style: inherit;
	-webkit-appearance: none;
	-moz-appearance: textfield;
	padding: var(--_ui5_input_inner_padding);
	box-sizing: border-box;
	min-width: var(--_ui5_input_min_width);
	width: 100%;
	text-align: inherit;
	text-overflow: ellipsis;
	flex: 1;
	outline: none;
	font-size: inherit;
	font-family: inherit;
	line-height: inherit;
	letter-spacing: inherit;
	word-spacing: inherit;
	text-align: inherit;
}
[inner-input][inner-input-with-icon] {
	padding: var(--_ui5_input_inner_padding_with_icon);
}
.ui5-input-value-state-icon {
	height: 100%;
	display: var(--_ui5-input-value-state-icon-display);
	align-items: center;
}
.ui5-input-value-state-icon > svg {
	margin-right: 8px;
}
[inner-input]::selection {
	background: var(--sapSelectedColor);
	color: var(--sapContent_ContrastTextColor);
}
/* Input placeholder */
:host([disabled]) [inner-input]::-webkit-input-placeholder {
	visibility: hidden;
}
:host([readonly]) [inner-input]::-webkit-input-placeholder {
	visibility: hidden;
}
:host([disabled]) [inner-input]::-moz-placeholder {
	visibility: hidden;
}
:host([readonly]) [inner-input]::-moz-placeholder {
	visibility: hidden;
}
[inner-input]::-webkit-input-placeholder {
	font-weight: normal;
	font-style: var(--_ui5_input_placeholder_style);
	color: var(--_ui5_input_placeholder_color);
	padding-right: 0.125rem;
}
[inner-input]::-moz-placeholder {
	font-weight: normal;
	font-style: var(--_ui5_input_placeholder_style);
	color: var(--_ui5_input_placeholder_color);
	padding-right: 0.125rem;
}
:host([value-state="Error"]) [inner-input]::-webkit-input-placeholder {
	color: var(--_ui5-input_error_placeholder_color);
	font-weight: var(--_ui5_input_value_state_error_warning_placeholder_font_weight);
}
:host([value-state="Error"]) [inner-input]::-moz-placeholder {
	color: var(--_ui5-input_error_placeholder_color);
	font-weight: var(--_ui5_input_value_state_error_warning_placeholder_font_weight);
}
:host([value-state="Warning"]) [inner-input]::-webkit-input-placeholder {
	font-weight: var(--_ui5_input_value_state_error_warning_placeholder_font_weight);
}
:host([value-state="Warning"]) [inner-input]::-moz-placeholder {
	font-weight: var(--_ui5_input_value_state_error_warning_placeholder_font_weight);
}
:host([value-state="Success"]) [inner-input]::-webkit-input-placeholder {
	color: var(--_ui5_input_placeholder_color);
}
:host([value-state="Success"]) [inner-input]::-moz-placeholder {
	color: var(--_ui5_input_placeholder_color);
}
:host([value-state="Information"]) [inner-input]::-webkit-input-placeholder {
	color: var(--_ui5_input_placeholder_color);
}
:host([value-state="Information"]) [inner-input]::-moz-placeholder {
	color: var(--_ui5_input_placeholder_color);
}
.ui5-input-content {
	height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	overflow: hidden;
	outline: none;
	background: transparent;
	color: inherit;
	border-radius: var(--_ui5_input_border_radius);
}
:host([readonly]) {
	border-color: var(--_ui5_input_readonly_border_color);
	background: var(--sapField_ReadOnly_BackgroundStyle);
	background-color: var(--_ui5_input_readonly_background);
}
:host([value-state="None"]:not([readonly]):hover),
:host(:not([value-state]):not([readonly]):hover) {
	border: var(--_ui5_input_hover_border);
	border-color: var(--_ui5_input_focused_border_color);
	box-shadow: var(--sapField_Hover_Shadow);
	background: var(--sapField_Hover_BackgroundStyle);
	background-color: var(--sapField_Hover_Background);
}
:host(:not([value-state]):not([readonly])[focused]:not([opened]):hover),
:host([value-state="None"]:not([readonly])[focused]:not([opened]):hover) {
	box-shadow: none;
}
:host([focused]):not([opened]) .ui5-input-root::before {
	content: none;
}
:host(:not([readonly]):not([disabled])[value-state]:not([value-state="None"])) {
	border-width: var(--_ui5_input_state_border_width);
}
:host([value-state="Error"]) [inner-input],
:host([value-state="Warning"]) [inner-input] {
	font-style: var(--_ui5_input_error_warning_font_style);
	text-indent: var(--_ui5_input_error_warning_text_indent);
}
:host([value-state="Error"]) [inner-input] {
	font-weight: var(--_ui5_input_error_font_weight);
}
:host([value-state="Warning"]) [inner-input] {
	font-weight: var(--_ui5_input_warning_font_weight);
}
:host([value-state="Error"]:not([readonly]):not([disabled])) {
	background: var(--sapField_InvalidBackgroundStyle);
	background-color: var(--sapField_InvalidBackground);
	border-color: var(--_ui5_input_value_state_error_border_color);
	box-shadow: var(--sapField_InvalidShadow);
}
:host([value-state="Error"][focused]:not([opened]):not([readonly])) {
	background-color: var(--_ui5_input_focused_value_state_error_background);
	border-color: var(--_ui5_input_focused_value_state_error_border_color);
}
:host([value-state="Error"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after {
	border-color: var(--_ui5_input_focused_value_state_error_focus_outline_color);
}
:host([value-state="Error"]:not([readonly])) .ui5-input-root::before{
	background-color: var(--_ui5-input-value-state-error-border-botom-color);
}
:host([value-state="Error"]:not([readonly]):not([focused]):hover),
:host([value-state="Error"]:not([readonly])[focused][opened]:hover) {
	background-color: var(--_ui5_input_value_state_error_hover_background);
	box-shadow: var(--sapField_Hover_InvalidShadow);
}
:host([value-state="Error"]:not([readonly]):not([disabled])),
:host([value-state="Warning"]:not([readonly]):not([disabled])),
:host([value-state="Information"]:not([readonly]):not([disabled])) {
	border-style: var(--_ui5_input_error_warning_border_style);
}
:host([value-state="Warning"]:not([readonly]):not([disabled])) {
	background: var(--sapField_WarningBackgroundStyle);
	background-color: var(--sapField_WarningBackground);
	border-color: var(--_ui5_input_value_state_warning_border_color);
	box-shadow: var(--sapField_WarningShadow);
}
:host([value-state="Warning"][focused]:not([opened]):not([readonly])) {
	background-color: var(--_ui5_input_focused_value_state_warning_background);
	border-color: var(--_ui5_input_focused_value_state_warning_border_color);
}
:host([value-state="Warning"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after {
	border-color: var(--_ui5_input_focused_value_state_warning_focus_outline_color);
}
:host([value-state="Warning"]:not([readonly])) .ui5-input-root::before{
	background-color: var(--_ui5_input_value_state_warning_border_botom_color);
}
:host([value-state="Warning"]:not([readonly]):not([focused]):hover),
:host([value-state="Warning"]:not([readonly])[focused][opened]:hover)  {
	background-color: var(--sapField_Hover_Background);
	box-shadow: var(--sapField_Hover_WarningShadow);
}
:host([value-state="Success"]:not([readonly]):not([disabled])) {
	background: var(--sapField_SuccessBackgroundStyle);
	background-color: var(--sapField_SuccessBackground);
	border-color: var(--_ui5_input_value_state_success_border_color);
	border-width: var(--_ui5_input_value_state_success_border_width);
	box-shadow: var(--sapField_SuccessShadow);
}
:host([value-state="Success"][focused]:not([opened]):not([readonly])) {
	background-color: var(--_ui5_input_focused_value_state_success_background);
	border-color: var(--_ui5_input_focused_value_state_success_border_color);
}
:host([value-state="Success"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after {
	border-color: var(--_ui5_input_focused_value_state_success_focus_outline_color);
}
:host([value-state="Success"]:not([readonly])) .ui5-input-root::before{
	background-color: var(--_ui5_input_value_state_success_border_botom_color);
}
:host([value-state="Success"]:not([readonly]):not([focused]):hover),
:host([value-state="Success"]:not([readonly])[focused][opened]:hover) {
	background-color: var(--sapField_Hover_Background);
	box-shadow: var(--sapField_Hover_SuccessShadow);
}
:host([value-state="Information"]:not([readonly]):not([disabled])) {
	background: var(--sapField_InformationBackgroundStyle);
	background-color: var(--sapField_InformationBackground);
	border-color: var(--_ui5_input_value_state_information_border_color);
	border-width: var(--_ui5_input_information_border_width);
	box-shadow: var(--sapField_InformationShadow);
}
:host([value-state="Information"][focused]:not([opened]):not([readonly])) {
	background-color: var(--_ui5_input_focused_value_state_information_background);
	border-color: var(--_ui5_input_focused_value_state_information_border_color);
}
:host([value-state="Information"]:not([readonly])) .ui5-input-root::before{
	background-color: var(--_ui5_input_value_success_information_border_botom_color);
}
:host([value-state="Information"]:not([readonly]):not([focused]):hover),
:host([value-state="Information"]:not([readonly])[focused][opened]:hover) {
	background-color: var(--sapField_Hover_Background);
	box-shadow: var(--sapField_Hover_InformationShadow);
}
/* Input Icon */
.ui5-input-icon-root {
	min-width: var(--_ui5_input_icon_min_width);
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
/* TODO: Remove this after parser is fixed
	-	this statement is transformed to [ui5-multi-combobox] [ui5-icon] which
	affects all icons in the combobox incuding these in the list items
*/
::slotted([ui5-icon][slot="icon"]) {
	align-self: start;
	padding: var(--_ui5_input_custom_icon_padding);
	/* Normalize like libraries overrule the selector, thefore we need !important */
	box-sizing: content-box !important;
}
:host([value-state="Error"]) [input-icon],
:host([value-state="Warning"]) [input-icon]{
	padding: var(--_ui5_input_error_warning_icon_padding);
}
:host([value-state="Information"]) [input-icon] {
	padding: var(--_ui5_input_information_icon_padding);
}
:host([value-state="Error"]) ::slotted([input-icon][ui5-icon]),
:host([value-state="Error"]) ::slotted([ui5-icon][slot="icon"]),
:host([value-state="Warning"]) ::slotted([ui5-icon][slot="icon"]) {
	padding: var(--_ui5_input_error_warning_custom_icon_padding);
}
:host([value-state="Information"]) ::slotted([ui5-icon][slot="icon"]) {
	padding: var(--_ui5_input_information_custom_icon_padding);
}
:host([value-state="Error"]) [input-icon]:active,
:host([value-state="Error"]) [input-icon][pressed] {
	box-shadow: var(--_ui5_input_error_icon_box_shadow);
	color: var(--_ui5_input_icon_error_pressed_color);
}
:host([value-state="Error"]) [input-icon]:not([pressed]):not(:active):hover {
	box-shadow: var(--_ui5_input_error_icon_box_shadow);
}
:host([value-state="Warning"]) [input-icon]:active,
:host([value-state="Warning"]) [input-icon][pressed] {
	box-shadow: var(--_ui5_input_warning_icon_box_shadow);
	color: var(--_ui5_input_icon_warning_pressed_color);
}
:host([value-state="Warning"]) [input-icon]:not([pressed]):not(:active):hover {
	box-shadow: var(--_ui5_input_warning_icon_box_shadow);
}
:host([value-state="Information"]) [input-icon]:active,
:host([value-state="Information"]) [input-icon][pressed] {
	box-shadow: var(--_ui5_input_information_icon_box_shadow);
	color: var(--_ui5_input_icon_information_pressed_color);
}
:host([value-state="Information"]) [input-icon]:not([pressed]):not(:active):hover {
	box-shadow: var(--_ui5_input_information_icon_box_shadow);
}
:host([value-state="Success"]) [input-icon]:active,
:host([value-state="Success"]) [input-icon][pressed] {
	box-shadow: var(--_ui5_input_success_icon_box_shadow);
	color: var(--_ui5_input_icon_success_pressed_color);
}
:host([value-state="Success"]) [input-icon]:not([pressed]):not(:active):hover {
	box-shadow: var(--_ui5_input_success_icon_box_shadow);
}
.ui5-input-clear-icon-wrapper {
	height: var(--_ui5_input_icon_wrapper_height);
	padding: 0;
	width: var(--_ui5_input_icon_width);
	min-width: var(--_ui5_input_icon_width);
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
}
:host([value-state]:not([value-state="None"]):not([value-state="Success"])) .ui5-input-clear-icon-wrapper {
	height: var(--_ui5_input_icon_wrapper_state_height);
	vertical-align: top;
}
:host([value-state="Success"]) .ui5-input-clear-icon-wrapper {
	height: var(--_ui5_input_icon_wrapper_success_state_height);
}
[ui5-icon].ui5-input-clear-icon {
	padding: 0;
	color: inherit;
}
/* Chrome, Safari, Edge, Opera */
[inner-input]::-webkit-outer-spin-button,
[inner-input]::-webkit-inner-spin-button {
	-webkit-appearance: inherit;
	margin: inherit;
}
.ui5-select-root {
	min-width: calc(var(--_ui5_input_min_width) + (var(--_ui5-input-icons-count)*var(--_ui5_input_icon_width)));
	width: 100%;
	height: 100%;
	display: flex;
	outline: none;
	cursor: pointer;
	overflow: hidden;
	border-radius: var(--_ui5_input_border_radius);
}
.ui5-select-label-root {
	flex-shrink: 1;
	flex-grow: 1;
	align-self: center;
	min-width: 1rem;
	padding-inline-start: 0.5rem;
	cursor: pointer;
	outline: none;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: var(--_ui5_select_label_color);
	font-family: "72override", var(--sapFontFamily);
	font-size: var(--sapFontSize);
	font-weight: normal;
}
.ui5-select-option-icon {
	padding-inline-start: 0.5rem;
	color: var(--sapField_TextColor);
	align-self: center;
}
:host(:not([disabled])) {
	cursor: pointer;
}
`};V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents","sap_fiori_3",async()=>ve);const C3={packageName:"@ui5/webcomponents",fileName:"themes/SelectPopover.css",content:`.ui5-select-popover::part(content),
.ui5-select-popover::part(header) {
	padding: 0;
}

.ui5-select-popover [ui5-li] {
	height: var(--_ui5_list_item_dropdown_base_height);
}

.ui5-select-popover [ui5-li]::part(icon) {
	color: var(--sapList_TextColor);
}
`};var tn=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},_n;let Et=_n=class extends Ce{constructor(){super(),this._syncedOptions=[],this._selectedIndex=-1,this._selectedIndexBeforeOpen=-1,this._escapePressed=!1,this._lastSelectedOption=null,this._typedChars=""}onBeforeRendering(){this._syncSelection(),this._enableFormSupport(),this.style.setProperty("--_ui5-input-icons-count",`${this.iconsCount}`)}onAfterRendering(){this.toggleValueStatePopover(this.shouldOpenValueStateMessagePopover),this._isPickerOpen&&(this._listWidth||(this._listWidth=this.responsivePopover.offsetWidth)),this._attachRealDomRefs()}_onfocusin(){this.focused=!0}_onfocusout(){this.focused=!1}get _isPickerOpen(){return!!this.responsivePopover&&this.responsivePopover.opened}async _respPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-responsive-popover]")}get selectedOption(){return this._filteredItems.find(e=>e.selected)}async _toggleRespPopover(){this._iconPressed=!0,this.responsivePopover=await this._respPopover(),!this.disabled&&(this._isPickerOpen?this.responsivePopover.close():this.responsivePopover.showAt(this))}async _attachRealDomRefs(){this.responsivePopover=await this._respPopover(),this.options.forEach(e=>{e._getRealDomRef=()=>this.responsivePopover.querySelector(`*[data-ui5-stable=${e.stableDomRef}]`)})}_syncSelection(){let e=-1,n=-1;const o=this._filteredItems,r=o.map((i,a)=>((i.selected||i.textContent===this.value)&&(e=a),n===-1&&(n=a),i.selected=!1,i._focused=!1,{selected:!1,_focused:!1,icon:i.icon,value:i.value,textContent:i.textContent,title:i.title,additionalText:i.additionalText,id:i._id,stableDomRef:i.stableDomRef}));e>-1?(r[e].selected=!0,r[e]._focused=!0,o[e].selected=!0,o[e]._focused=!0,this._text=r[e].textContent,this._selectedIndex=e):(this._text="",this._selectedIndex=-1,r[n]&&(r[n].selected=!0,r[n]._focused=!0,o[n].selected=!0,o[n]._focused=!0,this._selectedIndex=n,this._text=o[n].textContent)),this._syncedOptions=r}_enableFormSupport(){const e=Xe("FormSupport");e?e.syncNativeHiddenInput(this,(n,o)=>{const r=n;o.disabled=!!n.disabled,o.value=r._currentlySelectedOption?r._currentlySelectedOption.value:""}):this.name&&console.warn('In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";')}_onkeydown(e){(Bo(e)||va(e))&&this.responsivePopover&&this.responsivePopover.opened&&this.responsivePopover.close(),I0(e)?(e.preventDefault(),this._toggleRespPopover()):Le(e)?e.preventDefault():Qs(e)&&this._isPickerOpen?this._escapePressed=!0:Xs(e)?this._handleHomeKey(e):Js(e)?this._handleEndKey(e):tt(e)?this._handleSelectionChange():(dr(e)||xo(e))&&this._handleArrowNavigation(e)}_handleKeyboardNavigation(e){if(tt(e))return;const n=e.key.toLowerCase();this._typedChars+=n;const o=/^(.)\1+$/i.test(this._typedChars)?n:this._typedChars;clearTimeout(this._typingTimeoutID),this._typingTimeoutID=setTimeout(()=>{this._typedChars="",this._typingTimeoutID=-1},1e3),this._selectTypedItem(o)}_selectTypedItem(e){const n=this._selectedIndex,o=this._searchNextItemByText(e);if(o){const r=this._filteredItems.indexOf(o);this._changeSelectedItem(this._selectedIndex,r),n!==this._selectedIndex&&this.itemSelectionAnnounce()}}_searchNextItemByText(e){let n=this._filteredItems.slice(0);const o=n.splice(this._selectedIndex+1,n.length-this._selectedIndex),r=n.splice(0,n.length-1);return n=o.concat(r),n.find(i=>(i.textContent||"").toLowerCase().startsWith(e))}_handleHomeKey(e){e.preventDefault(),this._changeSelectedItem(this._selectedIndex,0)}_handleEndKey(e){const n=this._filteredItems.length-1;e.preventDefault(),this._changeSelectedItem(this._selectedIndex,n)}_onkeyup(e){Le(e)&&(this._isPickerOpen?this._handleSelectionChange():this._toggleRespPopover())}_getSelectedItemIndex(e){return this._filteredItems.findIndex(n=>`${n._id}-li`===e.id)}_select(e){this._filteredItems[this._selectedIndex].selected=!1,this._selectedIndex=e,this._filteredItems[e].selected=!0}_handleItemPress(e){const n=e.detail.item,o=this._getSelectedItemIndex(n);this._handleSelectionChange(o)}_itemMousedown(e){e.preventDefault()}_onclick(){this.getFocusDomRef().focus(),this._toggleRespPopover()}_handleSelectionChange(e=this._selectedIndex){this._select(e),this._toggleRespPopover()}_handleArrowNavigation(e){let n=-1;const o=this._selectedIndex,r=xo(e);e.preventDefault(),r?n=this._getNextOptionIndex():n=this._getPreviousOptionIndex(),this._changeSelectedItem(this._selectedIndex,n),o!==this._selectedIndex&&this.itemSelectionAnnounce()}_changeSelectedItem(e,n){const o=this._filteredItems;o[e].selected=!1,o[e]._focused=!1,o[n].selected=!0,o[n]._focused=!0,this._selectedIndex=n,this._isPickerOpen||this._fireChangeEvent(o[n])}_getNextOptionIndex(){return this._selectedIndex===this.options.length-1?this._selectedIndex:this._selectedIndex+1}_getPreviousOptionIndex(){return this._selectedIndex===0?this._selectedIndex:this._selectedIndex-1}_beforeOpen(){this._selectedIndexBeforeOpen=this._selectedIndex,this._lastSelectedOption=this._filteredItems[this._selectedIndex]}_afterOpen(){this.opened=!0,this.fireEvent("open"),this.itemSelectionAnnounce()}_afterClose(){this.opened=!1,this._iconPressed=!1,this._listWidth=0,this._escapePressed?(this._select(this._selectedIndexBeforeOpen),this._escapePressed=!1):this._lastSelectedOption!==this._filteredItems[this._selectedIndex]&&(this._fireChangeEvent(this._filteredItems[this._selectedIndex]),this._lastSelectedOption=this._filteredItems[this._selectedIndex]),this.fireEvent("close")}_fireChangeEvent(e){const n=!this.fireEvent("change",{selectedOption:e},!0);this.selectedItem=e.textContent,this.fireEvent("selected-item-changed"),n&&(this.selectedItem=this._lastSelectedOption.textContent,this._select(this._selectedIndexBeforeOpen))}get valueStateTextMappings(){return{[z.Success]:_n.i18nBundle.getText(ya),[z.Information]:_n.i18nBundle.getText(Zs),[z.Error]:_n.i18nBundle.getText(ma),[z.Warning]:_n.i18nBundle.getText(ba)}}get valueStateTypeMappings(){return{[z.Success]:_n.i18nBundle.getText(Tf),[z.Information]:_n.i18nBundle.getText(If),[z.Error]:_n.i18nBundle.getText(xf),[z.Warning]:_n.i18nBundle.getText(Bf)}}get valueStateText(){let e;return this.shouldDisplayDefaultValueStateMessage?e=this.valueStateDefaultText:e=this.valueStateMessageText.map(n=>n.textContent).join(" "),`${this.valueStateTypeText} ${e}`}get valueStateDefaultText(){return this.valueState!==z.None?this.valueStateTextMappings[this.valueState]:""}get valueStateTypeText(){return this.valueState!==z.None?this.valueStateTypeMappings[this.valueState]:""}get hasValueState(){return this.valueState!==z.None}get valueStateTextId(){return this.hasValueState?`${this._id}-valueStateDesc`:void 0}get isDisabled(){return this.disabled||void 0}get _headerTitleText(){return _n.i18nBundle.getText(Sf)}get _currentlySelectedOption(){return this._filteredItems[this._selectedIndex]}get _effectiveTabIndex(){return this.disabled||this.responsivePopover&&this.responsivePopover.opened?"-1":"0"}get _valueStateMessageInputIcon(){const e={Error:"error",Warning:"alert",Success:"sys-enter-2",Information:"information"};return this.valueState!==z.None?e[this.valueState]:""}get iconsCount(){return this.selectedOptionIcon?2:1}get classes(){return{popoverValueState:{"ui5-valuestatemessage-root":!0,"ui5-valuestatemessage--success":this.valueState===z.Success,"ui5-valuestatemessage--error":this.valueState===z.Error,"ui5-valuestatemessage--warning":this.valueState===z.Warning,"ui5-valuestatemessage--information":this.valueState===z.Information},popover:{"ui5-select-popover-valuestate":this.hasValueState}}}get styles(){return{popoverHeader:{"max-width":`${this.offsetWidth}px`},responsivePopoverHeader:{display:this._filteredItems.length&&this._listWidth===0?"none":"inline-block",width:`${this._filteredItems.length?this._listWidth:this.offsetWidth}px`},responsivePopover:{"min-width":`${this.offsetWidth}px`}}}get ariaLabelText(){return cr(this)}get valueStateMessageText(){return this.getSlottedNodes("valueStateMessage").map(e=>e.cloneNode(!0))}get shouldDisplayDefaultValueStateMessage(){return!this.valueStateMessageText.length&&this.hasValueStateText}get hasValueStateText(){return this.hasValueState&&this.valueState!==z.Success}get shouldOpenValueStateMessagePopover(){return this.focused&&this.hasValueStateText&&!this._iconPressed&&!this._isPickerOpen&&!this._isPhone}get _ariaRoleDescription(){return _n.i18nBundle.getText(Z$)}get _isPhone(){return me()}get _filteredItems(){return this.options.filter(e=>!e.disabled)}itemSelectionAnnounce(){let e;const n=this._filteredItems.length,o=_n.i18nBundle.getText(kf,this._selectedIndex+1,n);this.focused&&this._currentlySelectedOption&&(e=`${this._currentlySelectedOption.textContent} ${this._isPickerOpen?o:""}`,Xf(e,Ba.Polite))}async openValueStatePopover(){this.valueStatePopover=await this._getPopover(),this.valueStatePopover&&this.valueStatePopover.showAt(this)}closeValueStatePopover(){this.valueStatePopover&&this.valueStatePopover.close()}toggleValueStatePopover(e){e?this.openValueStatePopover():this.closeValueStatePopover()}get selectedOptionIcon(){return this.selectedOption&&this.selectedOption.icon}async _getPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-popover]")}static async onDefine(){_n.i18nBundle=await Re("@ui5/webcomponents")}};tn([h({type:Boolean})],Et.prototype,"disabled",void 0),tn([h()],Et.prototype,"name",void 0),tn([h({type:z,defaultValue:z.None})],Et.prototype,"valueState",void 0),tn([h({type:Boolean})],Et.prototype,"required",void 0),tn([h()],Et.prototype,"accessibleName",void 0),tn([h()],Et.prototype,"accessibleNameRef",void 0),tn([h({type:String,noAttribute:!0})],Et.prototype,"_text",void 0),tn([h({type:Boolean,noAttribute:!0})],Et.prototype,"_iconPressed",void 0),tn([h({type:Boolean})],Et.prototype,"opened",void 0),tn([h({validator:kn,defaultValue:0,noAttribute:!0})],Et.prototype,"_listWidth",void 0),tn([h({type:Boolean})],Et.prototype,"focused",void 0),tn([ce({default:!0,type:HTMLElement,invalidateOnChildChange:!0})],Et.prototype,"options",void 0),tn([ce()],Et.prototype,"formSupport",void 0),tn([ce()],Et.prototype,"valueStateMessage",void 0),Et=_n=tn([fe({tag:"ui5-select",languageAware:!0,renderer:et,template:c3,staticAreaTemplate:d3,styles:y3,staticAreaStyles:[zc,jc,C3],dependencies:[KR,Ec,Mf,vr,zf,Uf,Cn,ci]}),re("change",{detail:{selectedOption:{type:HTMLElement}}}),re("open"),re("close")],Et),Et.define();const Tn=bt("ui5-select",["accessibleName","accessibleNameRef","name","valueState"],["disabled","required"],["valueStateMessage"],["change","close","open"]);Tn.displayName="Select",Tn.defaultProps={valueState:Ki.None};var PC=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let pl=class extends Ce{get groupItem(){return!0}};PC([h()],pl.prototype,"text",void 0),pl=PC([fe({tag:"ui5-suggestion-group-item",dependencies:[Qf]})],pl),pl.define();const w3=pl;function S3(t,e,n){return p`<li part="native-li" data-sap-focus-ref tabindex="${u(this._effectiveTabIndex)}" class="${Y(this.classes.main)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" @mouseup="${this._onmouseup}" @mousedown="${this._onmousedown}" @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" @click="${this._onclick}" role="${u(this._accInfo.role)}" aria-expanded="${u(this._accInfo.ariaExpanded)}" title="${u(this.title)}" aria-level="${u(this._accInfo.ariaLevel)}" aria-haspopup="${u(this._accInfo.ariaHaspopup)}" aria-posinset="${u(this._accInfo.posinset)}" aria-roledescription="${u(this.accessibleRoleDescription)}" aria-setsize="${u(this._accInfo.setsize)}" aria-describedby="${u(this._id)}-invisibleText-describedby" aria-labelledby="${u(this._accessibleNameRef)}" aria-disabled="${u(this._ariaDisabled)}" aria-selected="${u(this._accInfo.ariaSelected)}" aria-checked="${u(this._accInfo.ariaChecked)}" aria-owns="${u(this._accInfo.ariaOwns)}">${this.placeSelectionElementBefore?k3.call(this,t,e,n):void 0}<div id="${u(this._id)}-content" class="ui5-li-content">${this.hasImageContent?A3.call(this,t,e,n):E3.call(this,t,e,n)}${this.displayIconBegin?F3.call(this,t,e,n):void 0}<div class="ui5-li-text-wrapper">${this.hasTitle?R3.call(this,t,e,n):void 0}${this.hasDescription?L3.call(this,t,e,n):void 0}${this.typeActive?void 0:H3.call(this,t,e,n)}</div>${this.hasDescription?void 0:M3.call(this,t,e,n)}</div>${this.displayIconEnd?j3.call(this,t,e,n):void 0}${this.typeDetail?V3.call(this,t,e,n):void 0}${this.typeNavigation?W3.call(this,t,e,n):void 0}${this.navigated?U3.call(this,t,e,n):void 0}${this.placeSelectionElementAfter?q3.call(this,t,e,n):void 0}<span id="${u(this._id)}-invisibleText" class="ui5-hidden-text">${u(this._accInfo.listItemAriaLabel)}${u(this.accessibleName)}</span><span id="${u(this._id)}-invisibleText-describedby" class="ui5-hidden-text">${u(this._accInfo.ariaSelectedText)}</span></li> `}function k3(t,e,n){return p`${this.modeSingleSelect?x3.call(this,t,e,n):void 0}${this.modeMultiSelect?B3.call(this,t,e,n):void 0}${this.renderDeleteButton?T3.call(this,t,e,n):void 0}`}function x3(t,e,n){return n?p`<${k("ui5-radio-button",e,n)} ?disabled="${this.isInactive}" accessible-name="${u(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${u(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${k("ui5-radio-button",e,n)}>`:p`<ui5-radio-button ?disabled="${this.isInactive}" accessible-name="${u(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${u(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`}function B3(t,e,n){return n?p`<${k("ui5-checkbox",e,n)} ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${u(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${u(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${k("ui5-checkbox",e,n)}>`:p`<ui5-checkbox ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${u(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${u(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`}function T3(t,e,n){return p`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot?I3.call(this,t,e,n):$3.call(this,t,e,n)}</div>`}function I3(t,e,n){return p`<slot name="deleteButton"></slot>`}function $3(t,e,n){return n?p`<${k("ui5-button",e,n)} tabindex="-1" data-sap-no-tab-ref id="${u(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${u(this.deleteText)}"></${k("ui5-button",e,n)}>`:p`<ui5-button tabindex="-1" data-sap-no-tab-ref id="${u(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${u(this.deleteText)}"></ui5-button>`}function A3(t,e,n){return p`<div class="ui5-li-imgContent"><slot name="imageContent"></slot></div>`}function E3(t,e,n){return p`${this.displayImage?P3.call(this,t,e,n):void 0}`}function P3(t,e,n){return n?p`<${k("ui5-avatar",e,n)} shape="Square" class="ui5-li-img"><img src="${u(this.image)}" class="ui5-li-img-inner" /></${k("ui5-avatar",e,n)}>`:p`<ui5-avatar shape="Square" class="ui5-li-img"><img src="${u(this.image)}" class="ui5-li-img-inner" /></ui5-avatar>`}function F3(t,e,n){return n?p`<${k("ui5-icon",e,n)} part="icon" name="${u(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></${k("ui5-icon",e,n)}>`:p`<ui5-icon part="icon" name="${u(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></ui5-icon>`}function R3(t,e,n){return p`<span part="title" class="ui5-li-title"><slot></slot></span>`}function L3(t,e,n){return p`<div class="ui5-li-description-info-wrapper"><span part="description" class="ui5-li-desc">${this.richDescription.length?N3.call(this,t,e,n):D3.call(this,t,e,n)}</span>${this.additionalText?O3.call(this,t,e,n):void 0}</div>`}function N3(t,e,n){return p`<slot name="richDescription"></slot>`}function D3(t,e,n){return p`${u(this.description)}`}function O3(t,e,n){return p`<span part="additional-text" class="ui5-li-additional-text">${u(this.additionalText)}</span>`}function H3(t,e,n){return p`<span class="ui5-hidden-text">${u(this.type)}</span>`}function M3(t,e,n){return p`${this.additionalText?z3.call(this,t,e,n):void 0}`}function z3(t,e,n){return p`<span part="additional-text" class="ui5-li-additional-text">${u(this.additionalText)}</span>`}function j3(t,e,n){return n?p`<${k("ui5-icon",e,n)} part="icon" name="${u(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></${k("ui5-icon",e,n)}>`:p`<ui5-icon part="icon" name="${u(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></ui5-icon>`}function V3(t,e,n){return n?p`<div class="ui5-li-detailbtn"><${k("ui5-button",e,n)} design="Transparent" icon="edit" @click="${this.onDetailClick}"></${k("ui5-button",e,n)}></div>`:p`<div class="ui5-li-detailbtn"><ui5-button design="Transparent" icon="edit" @click="${this.onDetailClick}"></ui5-button></div>`}function W3(t,e,n){return n?p`<${k("ui5-icon",e,n)} name ="slim-arrow-right"></${k("ui5-icon",e,n)}>`:p`<ui5-icon name ="slim-arrow-right"></ui5-icon>`}function U3(t,e,n){return p`<div class="ui5-li-navigated"></div>`}function q3(t,e,n){return p`${this.modeSingleSelect?G3.call(this,t,e,n):void 0}${this.modeMultiSelect?Y3.call(this,t,e,n):void 0}${this.renderDeleteButton?X3.call(this,t,e,n):void 0}`}function G3(t,e,n){return n?p`<${k("ui5-radio-button",e,n)} ?disabled="${this.isInactive}" accessible-name="${u(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${u(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${k("ui5-radio-button",e,n)}>`:p`<ui5-radio-button ?disabled="${this.isInactive}" accessible-name="${u(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${u(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`}function Y3(t,e,n){return n?p`<${k("ui5-checkbox",e,n)} ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${u(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${u(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${k("ui5-checkbox",e,n)}>`:p`<ui5-checkbox ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${u(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${u(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`}function X3(t,e,n){return p`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot?J3.call(this,t,e,n):Q3.call(this,t,e,n)}</div>`}function J3(t,e,n){return p`<slot name="deleteButton"></slot>`}function Q3(t,e,n){return n?p`<${k("ui5-button",e,n)} tabindex="-1" data-sap-no-tab-ref id="${u(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${u(this.deleteText)}"></${k("ui5-button",e,n)}>`:p`<ui5-button tabindex="-1" data-sap-no-tab-ref id="${u(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${u(this.deleteText)}"></ui5-button>`}var ng=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Ia=class extends Uf{onBeforeRendering(){super.onBeforeRendering(),this.hasTitle=!!this.titleText.length}get effectiveTitle(){return this.titleText.filter(e=>e.nodeType!==Node.COMMENT_NODE).map(e=>e.textContent).join("")}get hasDescription(){return this.richDescription.length||this.description}get groupItem(){return!1}};ng([ce({type:HTMLElement})],Ia.prototype,"richDescription",void 0),ng([ce({type:Node,default:!0})],Ia.prototype,"titleText",void 0),Ia=ng([fe({tag:"ui5-li-suggestion-item",template:S3})],Ia),Ia.define();const FC=Ia;var Fo=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};let Hn=class extends Ce{get groupItem(){return!1}};Fo([h()],Hn.prototype,"text",void 0),Fo([h({type:ln,defaultValue:ln.Active})],Hn.prototype,"type",void 0),Fo([h()],Hn.prototype,"description",void 0),Fo([h()],Hn.prototype,"icon",void 0),Fo([h({type:Boolean})],Hn.prototype,"iconEnd",void 0),Fo([h()],Hn.prototype,"image",void 0),Fo([h()],Hn.prototype,"additionalText",void 0),Fo([h({type:z,defaultValue:z.None})],Hn.prototype,"additionalTextState",void 0),Hn=Fo([fe({tag:"ui5-suggestion-item",dependencies:[FC]})],Hn),Hn.define();const Z3=Hn;function K3(t,e,n){return p`<div class="ui5-timeline-root" @focusin=${this._onfocusin} @keydown=${this._onkeydown}><div class="ui5-timeline-scroll-container"><ul class="ui5-timeline-list" aria-live="polite" aria-label="${u(this.ariaLabel)}">${mt(this.items,(o,r)=>o._id||r,(o,r)=>eL.call(this,t,e,n,o,r))}</ul></div></div>`}function eL(t,e,n,o,r){return p`<li class="ui5-timeline-list-item"><slot name="${u(o._individualSlot)}"></slot></li>`}function tL(t,e,n){return p`<div class="ui5-tli-root" dir="${u(this.effectiveDir)}"><div class="${Y(this.classes.indicator)}"><div class="ui5-tli-icon-outer">${this.icon?nL.call(this,t,e,n):oL.call(this,t,e,n)}</div></div><div class="ui5-tli-bubble" tabindex="${u(this._tabIndex)}" data-sap-focus-ref><div class="ui5-tli-title">${this.name?rL.call(this,t,e,n):void 0}<span>${u(this.titleText)}</span></div><div class="ui5-tli-subtitle">${u(this.subtitleText)}</div>${this.textContent?sL.call(this,t,e,n):void 0}<span class="${Y(this.classes.bubbleArrowPosition)}"></span></div></div>`}function nL(t,e,n){return n?p`<${k("ui5-icon",e,n)} class="ui5-tli-icon" name="${u(this.icon)}"></${k("ui5-icon",e,n)}>`:p`<ui5-icon class="ui5-tli-icon" name="${u(this.icon)}"></ui5-icon>`}function oL(t,e,n){return p`<div class="ui5-tli-dummy-icon-container"></div>`}function rL(t,e,n){return p`${this.nameClickable?iL.call(this,t,e,n):aL.call(this,t,e,n)}`}function iL(t,e,n){return n?p`<${k("ui5-link",e,n)} @ui5-click="${u(this.onNamePress)}" class="ui5-tli-title-name-clickable">${u(this.name)}&nbsp;</${k("ui5-link",e,n)}>`:p`<ui5-link @ui5-click="${u(this.onNamePress)}" class="ui5-tli-title-name-clickable">${u(this.name)}&nbsp;</ui5-link>`}function aL(t,e,n){return p`<span class="ui5-tli-title-name">${u(this.name)}&nbsp;</span>`}function sL(t,e,n){return p`<div class="ui5-tli-desc"><slot></slot></div>`}V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents-fiori","sap_fiori_3",async()=>Lf);const lL={packageName:"@ui5/webcomponents-fiori",fileName:"themes/TimelineItem.css",content:`:host(:not([hidden])) {
	display: block;
}

.ui5-tli-root {
	display: flex;
}

:host([layout="Horizontal"]) .ui5-tli-root {
	flex-direction: column;
}

:host(:not([layout="Horizontal"])) .ui5-tli-indicator {
	position: relative;
	width: 2rem;
}

:host([layout="Horizontal"]) .ui5-tli-indicator {
	position: relative;
	display: flex;
	height: 2rem;
	align-items: center;
}

:host(:not([layout="Horizontal"])) .ui5-tli-indicator::before {
	content: "";
	display: inline-block;
	background-color: var(--sapContent_ForegroundBorderColor);
	width: 1px;
	position: absolute;
	top: 2.125rem;
	bottom: var(--_ui5_timeline_tli_indicator_before_bottom);
	left: 50%;
}

:host([layout="Horizontal"]) .ui5-tli-indicator::before {
	content: "";
	display: inline-block;
	background-color: var(--sapContent_ForegroundBorderColor);
	height: 1px;
	top: 50%;
	position: absolute;
	left: 2.0625rem;
	right: var(--_ui5_timeline_tli_indicator_before_right);
}

:host(:not([layout="Horizontal"])) .ui5-tli-indicator.ui5-tli-indicator-large-line::before {
	bottom: var(--_ui5_timeline_tli_indicator_before_without_icon_bottom);
}

:host([layout="Horizontal"]) .ui5-tli-indicator.ui5-tli-indicator-large-line::before{
	right: var(--_ui5_timeline_tli_indicator_before_without_icon_right);
}

/* Line when no Icon is provided */

:host(:not([layout="Horizontal"])):not([icon]) .ui5-tli-indicator::before {
	bottom: var(--_ui5_timeline_tli_indicator_before_without_icon_bottom);
	top: 1.875rem;
}

/* Line when no Icon is provided in horizontal*/

:host([layout="Horizontal"]:not([icon])) .ui5-tli-indicator::before {
	top: 50%;
	right: var(--_ui5_timeline_tli_indicator_before_without_icon_right);
	left: 1.6875rem;
}

:host(:not([layout="Horizontal"])):not([icon]) .ui5-tli-indicator.ui5-tli-indicator-short-line::before {
	bottom: var(--_ui5_timeline_tli_indicator_before_bottom);
}

:host([layout="Horizontal"]:not([icon])) .ui5-tli-indicator.ui5-tli-indicator-short-line::before {
	right: var(--_ui5_timeline_tli_indicator_before_right);
}

/* No Icon Dot */

:host(:not([icon])) .ui5-tli-indicator::after {
	content: "";
	display: inline-block;
	box-sizing: border-box;
	border: 1px solid var(--sapContent_NonInteractiveIconColor);
	background-color: var(--sapContent_NonInteractiveIconColor);
	border-radius: 50%;
	width: 0.375rem;
	height: 0.375rem;
	position: absolute;
	top: 0.9375rem;
	left: 51.75%;
	transform: translateX(-50%);
}

/* No Icon Dot in Hotizontal */

:host([layout="Horizontal"]:not([icon])) .ui5-tli-indicator::after {
	top: 0.84rem;
	left: 0.9625rem;
}

:host(:last-child) .ui5-tli-indicator::before {
	display: none;
}

:host(:last-child) .ui5-tli-indicator::before {
	display: none;
}

.ui5-tli-icon-outer {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: .25rem;
	height: 1.625rem;
	width: 2rem;
}

:host([layout="Horizontal"]) .ui5-tli-icon-outer {
	margin-top: 0rem;
	height: 1.3125rem;
}

.ui5-tli-icon {
	color: var(--sapContent_NonInteractiveIconColor);
	height: 1.375rem;
	width: 1.375rem;
}

:host([layout="Horizontal"]) .ui5-tli-dummy-icon-container {
	height: 1.375rem;
	width: 1.375rem;
	display: inline-block;
	outline: none;
}

.ui5-tli-bubble {
	background: var(--sapGroup_ContentBackground);
	border: 1px solid var(--_ui5_TimelineItem_bubble_border_color);
	box-sizing: border-box;
	border-radius: var(--_ui5_TimelineItem_bubble_border_radius);
	flex: 1;
	position: relative;
	margin-left: .5rem;
	padding: var(--_ui5_TimelineItem_bubble_content_padding);
}

:host([layout="Horizontal"]) .ui5-tli-bubble {
	margin-top: .5rem;
	margin-left: 0;
}

.ui5-tli-bubble:focus {
	outline: none;
}

.ui5-tli-bubble:focus::after {
	content: "";
    border: var(--_ui5_TimelineItem_bubble_border_width) var(--_ui5_TimelineItem_bubble_border_style) var(--sapContent_FocusColor);
    border-radius: var(--_ui5_TimelineItem_bubble_focus_border_radius);
	position: absolute;
	top: var(--_ui5_TimelineItem_bubble_border_top);
	right: var(--_ui5_TimelineItem_bubble_border_right);
	bottom: var(--_ui5_TimelineItem_bubble_border_bottom);
	left: var(--_ui5_TimelineItem_bubble_border_left);
	pointer-events: none;
}

:host([layout="Horizontal"]) .ui5-tli-bubble:focus::after {
	top: var(--_ui5_TimelineItem_horizontal_bubble_focus_top_offset);
	left: var(--_ui5_TimelineItem_horizontal_bubble_focus_left_offset);
}

.ui5-tli-bubble-arrow {
	width: var(--_ui5_TimelineItem_arrow_size);
	padding-bottom: var(--_ui5_TimelineItem_arrow_size);
	position: absolute;
	pointer-events: none;
	top: 0;
	left: 0;
	overflow: hidden;
}

.ui5-tli-bubble-arrow::before {
	content: "";
	background: var(--sapGroup_ContentBackground);
	border: 1px solid var(--_ui5_TimelineItem_bubble_border_color);
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	transform-origin: 0 100%;
	transform: rotate(45deg);
}

:host([layout="Horizontal"]) .ui5-tli-bubble-arrow::before {
	transform: rotate(315deg);
}

.ui5-tli-bubble-arrow--left {
	left: calc(-1 * var(--_ui5_TimelineItem_arrow_size));
}

.ui5-tli-bubble-arrow--top {
	top: calc(-1 * var(--_ui5_TimelineItem_arrow_size));
}

.ui5-tli-bubble-arrow--left::before {
	left: 50%;
	width: 50%;
	transform-origin: 100% 100%;
}

.ui5-tli-bubble-arrow--top::before {
	left: 42%;
	width: 75%;
	transform-origin: 152% 104%;
}

.ui5-tli-title,
.ui5-tli-desc {
	color: var(--sapTextColor);
	font-family: var(--sapFontFamily);
	font-weight: 400;
	font-size: var(--sapFontSize);
}

.ui5-tli-title span {
	display: inline-block;
}

.ui5-tli-subtitle {
	color: var(--sapContent_LabelColor);
	font-family: var(--sapFontFamily);
	font-weight: 400;
	font-size: var(--sapFontSmallSize);
	padding-top: var(--_ui5_TimelineItem_bubble_content_subtitle_padding_top);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.ui5-tli-desc {
	padding-top: var(--_ui5_TimelineItem_bubble_content_description_padding_top);
}

[dir=rtl] .ui5-tli-bubble-arrow--left {
	right: calc(-1 * var(--_ui5_TimelineItem_arrow_size));
	left: auto;
	transform: scale(-1, 1);
}

[dir=rtl] .ui5-tli-bubble-arrow--top {
	right: 0;
	left: auto;
	transform: scale(-1, 1);
}

[dir=rtl] .ui5-tli-bubble {
	margin-left: auto;
	margin-right: .5rem;
}

:host([layout="Horizontal"]) [dir=rtl] .ui5-tli-bubble {
	margin-right: 0;
}

[dir=rtl] .ui5-tli-bubble:focus::after {
	left: var(--_ui5_TimelineItem_bubble_rtl_left_offset);
	right: var(--_ui5_TimelineItem_bubble_rtl_right_offset);
}

:host([layout="Horizontal"]) [dir=rtl]  .ui5-tli-bubble:focus::after {
	right: 0
}

:host([layout="Horizontal"]:not([icon])) [dir=rtl] .ui5-tli-indicator::after {
	right: 0.625rem;
}

/* Line when no Icon is provided in horizontal*/

:host([layout="Horizontal"]:not([icon])) [dir=rtl] .ui5-tli-indicator::before {
	right: 1.9375rem;
	left: var(--_ui5_timeline_tli_indicator_before_right);
}

:host([layout="Horizontal"]) [dir=rtl] .ui5-tli-indicator::before {
	left: var(--_ui5_timeline_tli_indicator_before_right);
	right: 2.125rem;
}`};var Ro=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i};const uL="ShortLineWidth",cL="LargeLineWidth";let Mn=class extends Ce{constructor(){super()}onNamePress(){this.fireEvent("name-click",{})}focusLink(){this.shadowRoot.querySelector("[ui5-link]")?.focus()}get classes(){return{indicator:{"ui5-tli-indicator":!0,"ui5-tli-indicator-short-line":this._lineWidth===uL,"ui5-tli-indicator-large-line":this._lineWidth===cL},bubbleArrowPosition:{"ui5-tli-bubble-arrow":!0,"ui5-tli-bubble-arrow--left":this.layout===rr.Vertical,"ui5-tli-bubble-arrow--top":this.layout===rr.Horizontal}}}};Ro([h()],Mn.prototype,"icon",void 0),Ro([h()],Mn.prototype,"name",void 0),Ro([h({type:Boolean})],Mn.prototype,"nameClickable",void 0),Ro([h()],Mn.prototype,"titleText",void 0),Ro([h()],Mn.prototype,"subtitleText",void 0),Ro([h({defaultValue:"-1",noAttribute:!0})],Mn.prototype,"_tabIndex",void 0),Ro([h({type:rr,defaultValue:rr.Vertical})],Mn.prototype,"layout",void 0),Ro([h()],Mn.prototype,"_lineWidth",void 0),Mn=Ro([fe({tag:"ui5-timeline-item",renderer:et,styles:lL,template:tL,dependencies:[Cn,tP]}),re("name-click")],Mn),Mn.define();const dL=Mn;V("@ui5/webcomponents-theming","sap_fiori_3",async()=>de),V("@ui5/webcomponents-fiori","sap_fiori_3",async()=>Lf);const _L={packageName:"@ui5/webcomponents-fiori",fileName:"themes/Timeline.css",content:`:host(:not([hidden])) {
	display: block;
}

.ui5-timeline-root {
	padding: var(--_ui5_tl_padding);
	box-sizing: border-box;
	overflow: hidden;
}

.ui5-timeline-list {
	list-style: none;
	margin: 0;
	padding: 0;
}

.ui5-timeline-list-item {
	margin-bottom: var(--_ui5_tl_li_margin_bottom);
}

.ui5-timeline-list-item:last-child {
	margin-bottom: 0;
}

:host([layout="Horizontal"]) .ui5-timeline-list {
	white-space: nowrap;
	list-style: none;
	margin: 0;
	padding: 0;
}

:host([layout="Horizontal"]) .ui5-timeline-list-item {
	display: inline-block;
	margin-inline-start: var(--_ui5_tl_li_margin_bottom);
}

:host([layout="Horizontal"]) .ui5-timeline-scroll-container {
	overflow: auto;
	/* The padding values of the parent container are added to the size of scroll container */
	width: calc(100% + var(--_ui5_timeline_scroll_container_offset));
}`};var Xc=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},hl;const pL="ShortLineWidth",hL="LargeLineWidth";let $a=hl=class extends Ce{constructor(){super(),this._itemNavigation=new Z0(this,{getItemsCallback:()=>this.items})}static async onDefine(){hl.i18nBundle=await Re("@ui5/webcomponents-fiori")}get ariaLabel(){return this.accessibleName?`${hl.i18nBundle.getText(x1)} ${this.accessibleName}`:hl.i18nBundle.getText(x1)}_onfocusin(e){const n=e.target;this._itemNavigation.setCurrentItem(n)}onBeforeRendering(){this._itemNavigation._navigationMode=this.layout===rr.Horizontal?hr.Horizontal:hr.Vertical;for(let e=0;e<this.items.length;e++)this.items[e].layout=this.layout,this.items[e+1]&&this.items[e+1].icon?this.items[e]._lineWidth=pL:this.items[e].icon&&this.items[e+1]&&!this.items[e+1].icon&&(this.items[e]._lineWidth=hL)}_onkeydown(e){const n=e.target;Bo(e)?(!n.nameClickable||tl(e)==="link")&&this._handleTabNextOrPrevious(e,Bo(e)):va(e)&&this._handleTabNextOrPrevious(e)}_handleTabNextOrPrevious(e,n){const o=e.target,r=n?this.items.indexOf(o)+1:this.items.indexOf(o)-1,i=this.items[r];if(i){if(i.nameClickable&&!n){e.preventDefault(),i.focusLink();return}e.preventDefault(),i.focus(),this._itemNavigation.setCurrentItem(i)}}};Xc([h({type:rr,defaultValue:rr.Vertical})],$a.prototype,"layout",void 0),Xc([h()],$a.prototype,"accessibleName",void 0),Xc([ce({type:HTMLElement,individualSlots:!0,default:!0})],$a.prototype,"items",void 0),$a=hl=Xc([fe({tag:"ui5-timeline",languageAware:!0,renderer:et,styles:_L,template:K3,dependencies:[dL]})],$a),$a.define();const og=bt("ui5-timeline",["accessibleName","layout"],[],[],[]);og.displayName="Timeline",og.defaultProps={layout:rr.Vertical};const RC=bt("ui5-timeline-item",["icon","name","subtitleText","titleText"],["nameClickable"],[],["name-click"]);RC.displayName="TimelineItem";const Jc=bt("ui5-title",["level","wrappingType"],[],[],[]);Jc.displayName="Title",Jc.defaultProps={level:Zi.H2};const fL="refresh",LC="M478 320q-6 41-25.5 76T404 456.5 337.5 497 257 512q-46 0-86.5-17.5t-71-48-48-71T34 288q0-45 16.5-85T96 133t68-48 84-20h61q26 0 60-1l-41-36q-5-5-5-11.5T328 5t11-5 11 5l58 51q9 10 9 23t-9 23l-57 54q-5 5-11 5t-11-5-5-11.5 5-11.5l40-37H257q-40 0-74.5 15T122 152t-41 61-15 75 15 75 41 61 60.5 41 74.5 15q36 0 68-12t56.5-33.5T423 384t23-64h32z";ne(fL,{pathData:LC,ltr:!1,accData:p1,collection:"SAP-icons-v4",packageName:"@ui5/webcomponents-icons"});const gL="refresh",NC="M307 179q0-11 7.5-18t18.5-7h101q-27-48-75-75.5T255 51q-42 0-79.5 16t-65 43.5-43.5 65T51 256t16 80 44 65 65 44 80 16q35 0 67-11.5t58.5-31.5 45.5-48.5 28-62.5q2-8 9.5-13.5T480 288q11 0 18.5 7.5T506 314q0 2-.5 3.5L504 322q-10 42-34 76.5t-57 60-73 39.5-84 14q-53 0-100-20t-81.5-54.5T20 356 0 256t20-100 54.5-81.5 81-54.5T255 0q61 0 115.5 26.5T461 101V26q0-11 7-18.5T486 0t18.5 7.5T512 26v153q0 11-7.5 18.5T486 205H333q-11 0-18.5-7.5T307 179z";ne(gL,{pathData:NC,ltr:!1,accData:p1,collection:"SAP-icons-v5",packageName:"@ui5/webcomponents-icons"}),Ze();const vL=fc({flexBox:{display:"flex","&:where($fitContainer)":{width:"100%",height:"100%"},"&:where($justifyContentStart)":{justifyContent:"flex-start"},"&:where($justifyContentEnd)":{justifyContent:"flex-end"},"&:where($justifyContentCenter)":{justifyContent:"center"},"&:where($justifyContentSpaceAround)":{justifyContent:"space-around"},"&:where($justifyContentSpaceBetween)":{justifyContent:"space-between"},"&:where($alignItemsStart)":{alignItems:"flex-start"},"&:where($alignItemsEnd)":{alignItems:"flex-end"},"&:where($alignItemsCenter)":{alignItems:"center"},"&:where($alignItemsStretch)":{alignItems:"stretch"},"&:where($alignItemsBaseline)":{alignItems:"baseline"}},flexBoxDisplayInline:{display:"inline-flex"},fitContainer:{},justifyContentStart:{},justifyContentEnd:{},justifyContentCenter:{},justifyContentSpaceAround:{},justifyContentSpaceBetween:{},alignItemsStart:{},alignItemsEnd:{},alignItemsCenter:{},alignItemsStretch:{},alignItemsBaseline:{},flexBoxDirectionColumn:{flexDirection:"column"},flexBoxDirectionColumnReverse:{flexDirection:"column-reverse"},flexBoxDirectionRow:{flexDirection:"row"},flexBoxDirectionRowReverse:{flexDirection:"row-reverse"},flexWrapNoWrap:{flexWrap:"nowrap"},flexWrapWrap:{flexWrap:"wrap"},flexWrapWrapReverse:{flexWrap:"wrap-reverse"}},{name:"FlexBox"}),K=ee.forwardRef((t,e)=>{const{children:n,justifyContent:o=Xk.Start,direction:r=Yk.Row,alignItems:i=Gk.Stretch,displayInline:a,wrap:s=Jk.NoWrap,className:l,fitContainer:c,as:_="div",...d}=t,v=vL(),b=Ef(v.flexBox,v[`flexBoxDirection${r}`],v[`justifyContent${o}`],v[`alignItems${i}`],v[`flexWrap${s}`],a&&v.flexBoxDisplayInline,c&&v.fitContainer,l),S=_;return F.createElement(S,{ref:e,className:b,...d},n)});K.displayName="FlexBox";const mL={text:{fontFamily:$.sapFontFamily,fontSize:$.sapFontSize,fontWeight:"normal",color:$.sapTextColor,display:"inline-block",boxSizing:"border-box",whiteSpace:"pre-line",wordWrap:"break-word",maxWidth:"100%","&::selection":{background:$.sapSelectedColor,color:$.sapContent_ContrastTextColor}},renderWhitespace:{whiteSpace:"pre-wrap"},noWrap:{textOverflow:"ellipsis",whiteSpace:"nowrap",wordWrap:"normal",overflow:"hidden","&$renderWhitespace":{whiteSpace:"pre"}}},bL=fc(mL,{name:"Text"}),Br=ee.forwardRef((t,e)=>{const{children:n,renderWhitespace:o,wrapping:r,className:i,style:a,slot:s,...l}=t,c=bL(),_=Ef(c.text,r===!1&&c.noWrap,o&&c.renderWhitespace,i);return F.createElement("span",{ref:e,style:a,className:_,slot:s,...l},n)});Br.defaultProps={renderWhitespace:!1,wrapping:!0},Br.displayName="Text";const yL={"@keyframes scroll":{"0%":{backgroundPosition:"-100% 0"},"100%":{backgroundPosition:"200% 0"}},loader:{position:"relative",height:"0.25rem",width:"100%","&:before":{content:'""',width:"100%",height:"100%",position:"absolute",left:0,backgroundColor:$.sapContent_BusyColor,opacity:.15},"&$loaderDeterminate":{background:`linear-gradient(to right, ${$.sapContent_BusyColor}, ${$.sapContent_BusyColor})`,backgroundRepeat:"repeat-y"},"&$loaderIndeterminate":{background:`linear-gradient(
      to right,
      transparent 0px,
      ${$.sapContent_BusyColor} calc(50% - 2rem),
      ${$.sapContent_BusyColor} calc(50% + 2rem),
      transparent 100%
    )`,backgroundSize:"40%",backgroundRepeat:"repeat-y",animation:"$scroll 1.2s linear infinite"}},loaderDeterminate:{},loaderIndeterminate:{}},CL=fc(yL,{name:"Loader"}),rg=ee.forwardRef((t,e)=>{const{className:n,type:o,progress:r,slot:i,style:a,delay:s,...l}=t,c=CL(),[_,d]=ee.useState(s===0),v=Ef(c.loader,n,c[`loader${o}`]),b=o!==z5.Determinate?"40%":r;ee.useEffect(()=>{let x;return s>0&&(x=setTimeout(()=>{d(!0)},s)),()=>{clearTimeout(x)}},[]);const S=RB("@ui5/webcomponents-react");return _?F.createElement("div",{ref:e,className:v,"data-component-name":"Loader","aria-busy":"true",role:"progressbar",title:S.getText(jA),slot:i,style:{...a,backgroundSize:b},...l}):null});rg.defaultProps={type:z5.Indeterminate,progress:"0px",delay:0},rg.displayName="Loader";const DC=ee.createContext({setModal:null}),wL=(t,e)=>({...t,...e.payload});function SL({children:t}){const[e,n]=ee.useReducer(wL,{}),o=ee.useRef({}),r=ee.useRef(!1),i=ee.useCallback(()=>Promise.all(Object.keys(o.current).map(l=>Re(l))).then(l=>{const c=l.reduce((_,d)=>({..._,[d.packageName]:d}),{});r.current&&n({payload:c})}),[]),a=ee.useCallback((l,c)=>{o.current[l]=c,i()},[]);ee.useEffect(()=>(r.current=!0,Bb(i),()=>{r.current=!1,bB(i)}),[]);const s=j5();return F.createElement(s.Provider,{value:{i18nBundles:e,setI18nBundle:a}},t)}const kL=(t,e)=>{switch(e.type){case"set":return[...t,e.payload];case"reset":return t.filter(n=>n.id!==e.payload.id);default:return t}};function xL({children:t}){const[e,n]=ee.useReducer(kL,[]),o=ee.useRef(!1);return!o.current&&typeof window<"u"&&(window["@ui5/webcomponents-react"]??={},window["@ui5/webcomponents-react"].ModalsContext=DC,window["@ui5/webcomponents-react"].setModal=n,o.current=!0),F.createElement(DC.Provider,{value:{setModal:n}},e.map(r=>{if(r?.Component)return qr.createPortal(F.createElement(r.Component,{...r.props,ref:r.ref,key:r.id,"data-id":r.id}),r.container??document.body)}),t)}const BL={[T.ActionSheetHeaderBoxShadow]:"none",[T.ActionSheetMobileHeaderBackground]:"transparent",[T.ActionSheetMobileHeaderBorderRadius]:"0",[T.ActionSheetMobileHeaderBoxShadow]:"none",[T.ActionSheetMobileHeaderTextColor]:$.sapContent_ContrastTextColor,[T.AnalyticalTableHeaderActiveTextColor]:$.sapList_HeaderTextColor,[T.AnalyticalTableHeaderBorderWidth]:"0.0625rem",[T.AnalyticalTableHeaderFontFamily]:$.sapFontFamily,[T.AnalyticalTableOuterBorderBlock]:`1px solid ${$.sapList_BorderColor}`,[T.AnalyticalTableOuterBorderInline]:`1px solid ${$.sapList_BorderColor}`,[T.ObjectPageSectionBorderTop]:`0.0625rem solid ${$.sapGroup_TitleBorderColor}`,[T.ObjectPageSectionTitleFontFamily]:$.sapFontFamily,[T.ObjectPageSectionTitleHeight]:"2.25rem",[T.ObjectPageSectionTitleLineHeight]:"2.25rem",[T.ObjectPageSectionTitleTextDecoration]:"none",[T.ObjectPageSubSectionBackgroundColor]:"transparent",[T.ObjectPageSubSectionBorderRadius]:"0",[T.ObjectPageSubSectionPaddingBlockStart]:"2rem",[T.SplitterBarBorderFix]:`${$.sapContent_FocusWidth} solid ${$.sapContent_FocusColor}`,[T.SplitterBarBorderFocus]:`${$.sapContent_FocusWidth} solid ${$.sapContent_FocusColor}`,[T.SplitterBarBorderStyle]:"none",[T.SplitterBarOutline]:"none",[T.SplitterContentBorderColor]:$.sapHighlightColor,[T.SplitterIconColor]:$.sapButton_Lite_TextColor,[T.ToolbarFocusOutline]:`${$.sapContent_FocusWidth} ${$.sapContent_FocusStyle} ${$.sapContent_FocusColor}`,[T.ToolbarFocusShadow]:"none"},TL={[T.ActionSheetTopBorderRadius]:$.sapElement_BorderCornerRadius,[T.ActionSheetBoxShadow]:$.sapContent_HeaderShadow,[T.SplitterBarBorderFocus]:`.0625rem dotted ${$.sapContent_FocusColor}`,[T.SplitterBarBorderFix]:`.0625rem dotted ${$.sapContent_FocusColor}`},IL={[T.ActionSheetTopBorderRadius]:$.sapElement_BorderCornerRadius,[T.ActionSheetBoxShadow]:$.sapContent_HeaderShadow},$L={[T.ActionSheetTopBorderRadius]:$.sapElement_BorderCornerRadius,[T.ActionSheetBoxShadow]:$.sapContent_HeaderShadow},AL={[T.ActionSheetTopBorderRadius]:$.sapElement_BorderCornerRadius,[T.ActionSheetBoxShadow]:$.sapContent_HeaderShadow,[T.SplitterBarBorderFocus]:`.0625rem dotted ${$.sapContent_FocusColor}`,[T.SplitterBarBorderFix]:`.0625rem dotted ${$.sapContent_FocusColor}`},EL={[T.ActionSheetTopBorderRadius]:$.sapElement_BorderCornerRadius,[T.ActionSheetBoxShadow]:$.sapContent_HeaderShadow,[T.SplitterBarBorderFocus]:`.0625rem dotted ${$.sapContent_FocusColor}`,[T.SplitterBarBorderFix]:`.0625rem dotted ${$.sapContent_FocusColor}`},PL={[T.ActionSheetTopBorderRadius]:$.sapElement_BorderCornerRadius,[T.ActionSheetBoxShadow]:$.sapContent_HeaderShadow,[T.SplitterContentBorderColor]:$.sapGroup_ContentBorderColor,[T.SplitterBarBorderStyle]:`solid ${$.sapGroup_ContentBorderColor} 0.0625rem`,[T.SplitterBarOutline]:`0.15rem dotted ${$.sapGroup_ContentBorderColor}`,[T.SplitterBarBorderFocus]:`solid ${$.sapGroup_ContentBorderColor} 0.0625rem`,[T.SplitterBarBorderFix]:"none"},FL={[T.ActionSheetTopBorderRadius]:$.sapElement_BorderCornerRadius,[T.ActionSheetBoxShadow]:$.sapContent_HeaderShadow,[T.SplitterContentBorderColor]:$.sapGroup_ContentBorderColor,[T.SplitterBarBorderStyle]:`solid ${$.sapGroup_ContentBorderColor} 0.0625rem`,[T.SplitterBarOutline]:`0.15rem dotted ${$.sapGroup_ContentBorderColor}`,[T.SplitterBarBorderFocus]:`solid ${$.sapGroup_ContentBorderColor} 0.0625rem`,[T.SplitterBarBorderFix]:"none"},RL={[T.ActionSheetHeaderBoxShadow]:$.sapContent_HeaderShadow,[T.ActionSheetMobileHeaderBackground]:$.sapPageHeader_Background,[T.ActionSheetMobileHeaderBorderRadius]:$.sapPopover_BorderCornerRadius,[T.ActionSheetMobileHeaderBoxShadow]:$.sapContent_Shadow2,[T.ActionSheetMobileHeaderTextColor]:$.sapPageHeader_TextColor,[T.AnalyticalTableHeaderFontFamily]:$.sapFontBoldFamily,[T.AnalyticalTableOuterBorderBlock]:"none",[T.AnalyticalTableOuterBorderInline]:"none",[T.ObjectPageSectionBorderTop]:"none",[T.ObjectPageSectionTitleFontFamily]:$.sapFontBoldFamily,[T.ObjectPageSectionTitleHeight]:"2.75rem",[T.ObjectPageSectionTitleLineHeight]:"4rem",[T.ObjectPageSubSectionBackgroundColor]:$.sapGroup_ContentBackground,[T.ObjectPageSubSectionBorderRadius]:$.sapElement_BorderCornerRadius,[T.ObjectPageSubSectionPaddingBlockStart]:"0.5rem",[T.SplitterContentBorderColor]:$.sapGroup_ContentBorderColor,[T.ToolbarFocusOutline]:"none",[T.ToolbarFocusShadow]:`inset 0 0 0 0.125rem ${$.sapContent_FocusColor}`},LL={[T.ActionSheetHeaderBoxShadow]:$.sapContent_HeaderShadow,[T.ActionSheetMobileHeaderBackground]:$.sapPageHeader_Background,[T.ActionSheetMobileHeaderBorderRadius]:$.sapPopover_BorderCornerRadius,[T.ActionSheetMobileHeaderBoxShadow]:$.sapContent_Shadow2,[T.ActionSheetMobileHeaderTextColor]:$.sapPageHeader_TextColor,[T.AnalyticalTableHeaderFontFamily]:$.sapFontBoldFamily,[T.AnalyticalTableOuterBorderBlock]:"none",[T.AnalyticalTableOuterBorderInline]:"none",[T.ObjectPageSectionTitleFontFamily]:$.sapFontBoldFamily,[T.ObjectPageSectionTitleLineHeight]:"4rem",[T.ObjectPageSectionTitleHeight]:"2.75rem",[T.ObjectPageSectionBorderTop]:"none",[T.ObjectPageSubSectionBackgroundColor]:$.sapGroup_ContentBackground,[T.ObjectPageSubSectionBorderRadius]:$.sapElement_BorderCornerRadius,[T.ObjectPageSubSectionPaddingBlockStart]:"0.5rem",[T.SplitterContentBorderColor]:$.sapGroup_ContentBorderColor,[T.ToolbarFocusOutline]:"none",[T.ToolbarFocusShadow]:`inset 0 0 0 0.125rem ${$.sapContent_FocusColor}`},NL={[T.ObjectPageSectionTitleFontFamily]:$.sapFontBoldFamily,[T.ObjectPageSectionTitleTextDecoration]:`underline ${$.sapList_SelectionBorderColor}`,[T.ObjectPageSectionBorderTop]:"none",[T.ObjectPageSubSectionBackgroundColor]:$.sapGroup_ContentBackground,[T.ObjectPageSubSectionBorderRadius]:$.sapElement_BorderCornerRadius,[T.ActionSheetHeaderBoxShadow]:$.sapContent_HeaderShadow,[T.ActionSheetMobileHeaderBackground]:$.sapPageHeader_Background,[T.ActionSheetMobileHeaderBorderRadius]:$.sapPopover_BorderCornerRadius,[T.ActionSheetMobileHeaderBoxShadow]:$.sapContent_Shadow2,[T.ActionSheetMobileHeaderTextColor]:$.sapPageHeader_TextColor,[T.SplitterContentBorderColor]:$.sapGroup_ContentBorderColor,[T.SplitterBarBorderStyle]:`solid ${$.sapGroup_ContentBorderColor} 0.0625rem`,[T.SplitterBarOutline]:`0.15rem dotted ${$.sapGroup_ContentBorderColor}`,[T.SplitterBarBorderFocus]:`solid ${$.sapGroup_ContentBorderColor} 0.0625rem`,[T.SplitterBarBorderFix]:"none",[T.AnalyticalTableHeaderFontFamily]:$.sapFontBoldFamily,[T.AnalyticalTableHeaderActiveTextColor]:$.sapContent_ContrastTextColor,[T.AnalyticalTableHeaderBorderWidth]:"0.188rem",[T.AnalyticalTableOuterBorderInline]:"none"},DL={[T.ObjectPageSectionTitleFontFamily]:$.sapFontBoldFamily,[T.ObjectPageSectionTitleTextDecoration]:`underline ${$.sapList_SelectionBorderColor}`,[T.ObjectPageSectionBorderTop]:"none",[T.ObjectPageSubSectionBackgroundColor]:$.sapGroup_ContentBackground,[T.ObjectPageSubSectionBorderRadius]:$.sapElement_BorderCornerRadius,[T.ActionSheetHeaderBoxShadow]:$.sapContent_HeaderShadow,[T.ActionSheetMobileHeaderBackground]:$.sapPageHeader_Background,[T.ActionSheetMobileHeaderBorderRadius]:$.sapPopover_BorderCornerRadius,[T.ActionSheetMobileHeaderBoxShadow]:$.sapContent_Shadow2,[T.ActionSheetMobileHeaderTextColor]:$.sapPageHeader_TextColor,[T.SplitterContentBorderColor]:$.sapGroup_ContentBorderColor,[T.SplitterBarBorderStyle]:`solid ${$.sapGroup_ContentBorderColor} 0.0625rem`,[T.SplitterBarOutline]:`0.15rem dotted ${$.sapGroup_ContentBorderColor}`,[T.SplitterBarBorderFocus]:`solid ${$.sapGroup_ContentBorderColor} 0.0625rem`,[T.SplitterBarBorderFix]:"none",[T.AnalyticalTableHeaderFontFamily]:$.sapFontBoldFamily,[T.AnalyticalTableHeaderActiveTextColor]:$.sapContent_ContrastTextColor,[T.AnalyticalTableHeaderBorderWidth]:"0.188rem",[T.AnalyticalTableOuterBorderInline]:"none"},OL={"@global":{[`.${M5.inheritingSapScrollBar} *:not([data-native-scrollbar])`]:{"&::-webkit-scrollbar":{backgroundColor:$.sapScrollBar_TrackColor,"&:horizontal":{height:$.sapScrollBar_Dimension},"&:vertical":{width:$.sapScrollBar_Dimension}},"&::-webkit-scrollbar-thumb":{backgroundColor:$.sapScrollBar_FaceColor,borderRadius:"0.25rem","&:hover":{backgroundColor:$.sapScrollBar_Hover_FaceColor},"&:horizontal":{height:$.sapScrollBar_Dimension},"&:vertical":{width:$.sapScrollBar_Dimension}},"&::-webkit-scrollbar-corner":{backgroundColor:$.sapScrollBar_TrackColor}},[`.${M5.sapScrollBar}:not([data-native-scrollbar])`]:{"&::-webkit-scrollbar":{backgroundColor:$.sapScrollBar_TrackColor,"&:horizontal":{height:$.sapScrollBar_Dimension},"&:vertical":{width:$.sapScrollBar_Dimension}},"&::-webkit-scrollbar-thumb":{backgroundColor:$.sapScrollBar_FaceColor,borderRadius:"0.25rem","&:hover":{backgroundColor:$.sapScrollBar_Hover_FaceColor},"&:horizontal":{height:$.sapScrollBar_Dimension},"&:vertical":{width:$.sapScrollBar_Dimension}},"&::-webkit-scrollbar-corner":{backgroundColor:$.sapScrollBar_TrackColor}},":root":{extend:[I2,BL]},"[data-ui5-compact-size], .ui5-content-density-compact, .sapUiSizeCompact":{extend:$2},'[data-sap-theme="sap_belize"]':TL,'[data-sap-theme="sap_belize_hcb"]':IL,'[data-sap-theme="sap_belize_hcw"]':$L,'[data-sap-theme="sap_fiori_3"]':AL,'[data-sap-theme="sap_fiori_3_dark"]':EL,'[data-sap-theme="sap_fiori_3_hcb"]':PL,'[data-sap-theme="sap_fiori_3_hcw"]':FL,'[data-sap-theme="sap_horizon"]':RL,'[data-sap-theme="sap_horizon_dark"]':LL,'[data-sap-theme="sap_horizon_hcb"]':NL,'[data-sap-theme="sap_horizon_hcw"]':DL}},HL=fc(OL,{name:"ThemeProvider"}),OC=t=>{const{children:e}=t;return HL(),mh(()=>{document.documentElement.setAttribute("data-sap-theme",As());const n=o=>{document.documentElement.setAttribute("data-sap-theme",o)};return eB(n),()=>{tB(n)}},[]),F.createElement(uT,{theme:$},F.createElement(SL,null,F.createElement(xL,null,e)))};OC.displayName="ThemeProvider";function Tr(t){if(t.message)return f.jsx(Gc,{design:"Negative",onClose:()=>t.close(),children:t.message})}var ML=function(t,e){var n=t.toString(16);return e&&(n=n.padStart(e,"0")),n},zL=/[\x00-\x2b\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\xff\u2028\u2029]/g,jL=/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f]/,HC={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"},VL=function(t){var e=HC[t];return e||(jL.test(t)?e="&#xfffd;":e="&#x"+ML(t.charCodeAt(0))+";",HC[t]=e),e},MC=function(t){return t.replace(zL,VL)};const WL=t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function zC(t,e,n,o){return t.replaceAll(new RegExp(WL(e),`${o?"i":""}g`),n)}function UL(t,e){if(!t||!e)return t;const n=a=>{const[s,l]=a.split("");for(;t.indexOf(a)>=0||e.indexOf(a)>=0;)a=`${s}${a}${l}`;return a},o=n("12"),r=n("34");let i=MC(zC(t,e,a=>`${o}${a}${r}`,!0));return[[o,"<b>"],[r,"</b>"]].forEach(([a,s])=>{i=zC(i,a,s,!1)}),i}class Aa{constructor(e,n,o,r){this.component=e,this.slotName=n,this.handleFocus=r,this.highlight=o,this.fnOnSuggestionItemPress=this.onItemPress.bind(this),this.fnOnSuggestionItemMouseOver=this.onItemMouseOver.bind(this),this.fnOnSuggestionItemMouseOut=this.onItemMouseOut.bind(this),this._getSuggestionPopover(),this.selectedItemIndex=-1}defaultSlotProperties(e){const n=this._getComponent().suggestionItems,o=this.highlight&&!!e,r=[];return n.map((i,a)=>{const s=o?this.getHighlightedText(i,e):this.getRowText(i),l=o?this.getHighlightedDesc(i,e):this.getRowDesc(i);return r.push({text:s,description:l,image:i.image||void 0,icon:i.icon||void 0,type:i.type||void 0,additionalText:i.additionalText||void 0,additionalTextState:i.additionalTextState,groupItem:i.groupItem,key:a})}),r}onUp(e){return e.preventDefault(),this._handleItemNavigation(!1),!0}onDown(e){return e.preventDefault(),this._handleItemNavigation(!0),!0}onSpace(e){return this._isItemOnTarget()?(e.preventDefault(),this.onItemSelected(null,!0),!0):!1}onEnter(e){return this._isGroupOrInactiveItem?(e.preventDefault(),!1):this._isItemOnTarget()?(this.onItemSelected(null,!0),!0):!1}onPageUp(e){e.preventDefault();const n=this.selectedItemIndex-10>-1;return this._hasValueState&&!n?(this._focusValueState(),!0):(this._moveItemSelection(this.selectedItemIndex,n?this.selectedItemIndex-=10:this.selectedItemIndex=0),!0)}onPageDown(e){e.preventDefault();const n=this._getItems(),o=n.length-1,r=this.selectedItemIndex+10<=o;return this._hasValueState&&!n?(this._focusValueState(),!0):(this._moveItemSelection(this.selectedItemIndex,r?this.selectedItemIndex+=10:this.selectedItemIndex=o),!0)}onHome(e){return e.preventDefault(),this._hasValueState?(this._focusValueState(),!0):(this._moveItemSelection(this.selectedItemIndex,this.selectedItemIndex=0),!0)}onEnd(e){e.preventDefault();const n=this._getItems().length-1;return this._hasValueState&&!n?(this._focusValueState(),!0):(this._moveItemSelection(this.selectedItemIndex,this.selectedItemIndex=n),!0)}onTab(){return this._isItemOnTarget()?(this.onItemSelected(null,!0),!0):!1}toggle(e,n){(e!==void 0?e:!this.isOpened())?this.open():this.close(n.preventFocusRestore)}async _isScrollable(){const e=await this._getScrollContainer();return e.offsetHeight<e.scrollHeight}open(){this._getComponent().open=!0,this._beforeOpen(),this.responsivePopover.showAt(this._getComponent())}async close(e=!1){const n=this._getItems()&&this._getItems()[this.selectedItemIndex];this._getComponent().open=!1,this.responsivePopover=await this._getSuggestionPopover(),this.responsivePopover.close(!1,!1,e),n&&n.focused&&(n.focused=!1)}updateSelectedItemPosition(e){this.selectedItemIndex=e}onItemMouseOver(e){this._getComponent().onItemMouseOver(e)}onItemMouseOut(e){this._getComponent().onItemMouseOut(e)}onItemSelected(e,n){const o=this._getItems(),r=e||o[this.selectedItemIndex];this.selectedItemIndex=o.indexOf(r),this.accInfo={currentPos:this.selectedItemIndex+1,listSize:o.length,itemText:this._getRealItems()[this.selectedItemIndex].description},!(r.type==="Inactive"||r.groupItem)&&(this._getComponent().onItemSelected(this._getRealItems()[this.selectedItemIndex],n),r.selected=!1,r.focused=!1,this._getComponent().open=!1)}onItemPreviewed(e){this._getComponent().onItemPreviewed(e)}onItemPress(e){let n;const o=e.type==="ui5-item-click";o&&!e.detail.item.selected||this._handledPress&&!o||(o&&e.detail.item.selected?(n=e.detail.item,this._handledPress=!0):n=e.detail.selectedItems[0],this.onItemSelected(n,!1))}_beforeOpen(){this._attachItemsListeners(),this._attachPopupListeners()}async _attachItemsListeners(){const e=await this._getList();e.removeEventListener("ui5-item-click",this.fnOnSuggestionItemPress),e.addEventListener("ui5-item-click",this.fnOnSuggestionItemPress),e.removeEventListener("ui5-selection-change",this.fnOnSuggestionItemPress),e.addEventListener("ui5-selection-change",this.fnOnSuggestionItemPress),e.removeEventListener("mouseover",this.fnOnSuggestionItemMouseOver),e.addEventListener("mouseover",this.fnOnSuggestionItemMouseOver),e.removeEventListener("mouseout",this.fnOnSuggestionItemMouseOut),e.addEventListener("mouseout",this.fnOnSuggestionItemMouseOut)}_attachPopupListeners(){this.handleFocus&&(this.attachedAfterOpened||(this.responsivePopover.addEventListener("ui5-after-open",this._onOpen.bind(this)),this.attachedAfterOpened=!0),this.attachedAfterClose||(this.responsivePopover.addEventListener("ui5-after-close",this._onClose.bind(this)),this.attachedAfterClose=!0))}_onOpen(){this._applyFocus()}_onClose(){this._handledPress=!1}_applyFocus(){this.selectedItemIndex&&this._getItems()[this.selectedItemIndex].focus()}_isItemOnTarget(){return this.isOpened()&&this.selectedItemIndex!==null&&this.selectedItemIndex!==-1&&!this._isGroupOrInactiveItem}get _isGroupOrInactiveItem(){const e=this._getItems();return!e||!e[this.selectedItemIndex]?!1:e[this.selectedItemIndex].groupItem||e[this.selectedItemIndex].type==="Inactive"}isOpened(){return!!(this.responsivePopover&&this.responsivePopover.opened)}_handleItemNavigation(e){this._getItems().length&&(e?this._selectNextItem():this._selectPreviousItem())}_selectNextItem(){const e=this._getItems().length,n=this.selectedItemIndex;if(this._hasValueState&&n===-1&&!this.component._isValueStateFocused){this._focusValueState();return}(n===-1&&!this._hasValueState||this.component._isValueStateFocused)&&(this._clearValueStateFocus(),this.selectedItemIndex=-1),!(n!==-1&&n+1>e-1)&&this._moveItemSelection(n,++this.selectedItemIndex)}_selectPreviousItem(){const e=this._getItems(),n=this.selectedItemIndex;if(this._hasValueState&&n===0&&!this.component._isValueStateFocused){this.component.hasSuggestionItemSelected=!1,this.component._isValueStateFocused=!0,this.selectedItemIndex=0,e[0].focused=!1,e[0].selected=!1;return}if(this.component._isValueStateFocused){this.component.focused=!0,this.component._isValueStateFocused=!1,this.selectedItemIndex=0;return}if(!(n===-1||n===null)){if(n-1<0){e[n].selected=!1,e[n].focused=!1,this.component.focused=!0,this.component.hasSuggestionItemSelected=!1,this.selectedItemIndex-=1;return}this._moveItemSelection(n,--this.selectedItemIndex)}}_moveItemSelection(e,n){const o=this._getItems(),r=o[n],i=o[e];r&&(this.component.focused=!1,this._clearValueStateFocus(),this.accInfo={currentPos:n+1,listSize:o.length,itemText:this._getRealItems()[o.indexOf(r)].description},i&&(i.selected=!1,i.focused=!1),r&&(r.focused=!0,r.type==="Active"&&(r.selected=!0),this.handleFocus&&r.focus()),this.component.hasSuggestionItemSelected=!0,this.onItemPreviewed(r),this._isItemIntoView(r)||this._scrollItemIntoView(r))}_deselectItems(){this._getItems().forEach(n=>{n.selected=!1,n.focused=!1})}_clearItemFocus(){const e=this._getItems().find(n=>n.focused);e&&(e.focused=!1)}_isItemIntoView(e){const n=e.getDomRef().getBoundingClientRect(),o=this._getComponent().getDomRef().getBoundingClientRect(),r=window.innerHeight||document.documentElement.clientHeight;return n.top+Aa.SCROLL_STEP<=r&&n.top>=o.top}async _scrollItemIntoView(e){const n=e.getDomRef().offsetTop,o=await this._getScrollContainer();o.scrollTop=n}async _getScrollContainer(){return this._scrollContainer||(await this._getSuggestionPopover(),this._scrollContainer=this.responsivePopover.shadowRoot.querySelector(".ui5-popup-content")),this._scrollContainer}_getItems(){return this.responsivePopover?[...this.responsivePopover.querySelector("[ui5-list]").children]:[]}_getComponent(){return this.component}async _getList(){return this.responsivePopover=await this._getSuggestionPopover(),this.responsivePopover.querySelector("[ui5-list]")}async _getListWidth(){return(await this._getList()).offsetWidth}_getRealItems(){return this._getComponent().getSlottedNodes(this.slotName)}async _getSuggestionPopover(){if(this.responsivePopover)return this.responsivePopover;const e=await this._getComponent().getStaticAreaItemDomRef();return this.responsivePopover=e.querySelector("[ui5-responsive-popover]"),this.responsivePopover}get itemSelectionAnnounce(){if(!this.accInfo)return"";const e=Aa.i18nBundle.getText(kf,this.accInfo.currentPos,this.accInfo.listSize);return`${this.accInfo.itemText} ${e}`}getRowText(e){return this.sanitizeText(e.text||e.textContent||"")}getRowDesc(e){return this.sanitizeText(e.description||"")}getHighlightedText(e,n){const o=e.text||e.textContent||"";return this.hightlightInput(o,n)}getHighlightedDesc(e,n){const o=e.description;return this.hightlightInput(o,n)}hightlightInput(e,n){return UL(e,n)}sanitizeText(e){return MC(e)}get _hasValueState(){return this.component.hasValueStateMessage}_focusValueState(){const e=this._getItems();this.component._isValueStateFocused=!0,this.component.focused=!1,this.component.hasSuggestionItemSelected=!1,this.selectedItemIndex=0,this.component.value=this.component.typedInValue,e&&this._scrollItemIntoView(e[0]),this._deselectItems()}_clearValueStateFocus(){this.component._isValueStateFocused=!1}static get dependencies(){return[Z3,w3,Mf,zf,FC,Qf,ci,Cn,vr]}static async init(){Aa.i18nBundle=await Re("@ui5/webcomponents")}}Aa.SCROLL_STEP=60,Zp("InputSuggestions",Aa);function qL(t){const e=t.models.find(n=>n.modelID===t.modelId);return t.networkLoading?f.jsxs(f.Fragment,{children:[f.jsx(oe,{wrappingType:"Normal",children:"Loading models..."}),f.jsx(rg,{})]}):t.modelId===""?f.jsx(oe,{wrappingType:"Normal",children:"Please select a model from the drop down."}):e?f.jsxs(oe,{wrappingType:"Normal",children:[e.modelName," (",e.modelID,")"]}):f.jsxs(oe,{wrappingType:"Normal",children:["Selected ",t.modelId," (Warning: could not find model in API)"]})}function GL(t){const[e,n]=F.useState([]),[o,r]=F.useState(""),[i,a]=F.useState(""),[s,l]=F.useState(!0);F.useEffect(()=>{It.getInstance().getModels().then(d=>{n(d.models),l(!1)}).catch(d=>{a("Error - "+d.message),l(!1)})},[]);let c=e;o&&(c=e.filter(d=>d.modelName.toLowerCase().includes(o.toLowerCase())||d.modelID.toLowerCase().includes(o.toLowerCase())||d.modelDescription.toLowerCase().includes(o.toLowerCase())));const _=e.find(d=>d.modelID===t.modelId);return f.jsx(eo,{headerText:"Model Selection",children:f.jsxs("div",{style:{display:"flex",flexDirection:"column",paddingLeft:30},children:[f.jsx(Tr,{message:i}),f.jsx(qL,{networkLoading:s,models:e,modelId:t.modelId}),f.jsx(Kf,{style:{width:"100%"},onSelectionChange:d=>t.setModelId(d.detail.item.dataset.id),onInput:d=>r(d.target.value),value:_?_.modelName:"",filter:"None",children:c.map(d=>f.jsx(mC,{text:d.modelName,"data-id":d.modelID},d.modelID))})]})})}function Lo(t){return Array.isArray?Array.isArray(t):WC(t)==="[object Array]"}const YL=1/0;function XL(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-YL?"-0":e}function JL(t){return t==null?"":XL(t)}function co(t){return typeof t=="string"}function jC(t){return typeof t=="number"}function QL(t){return t===!0||t===!1||ZL(t)&&WC(t)=="[object Boolean]"}function VC(t){return typeof t=="object"}function ZL(t){return VC(t)&&t!==null}function In(t){return t!=null}function ig(t){return!t.trim().length}function WC(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const aD="Extended search is not available",KL="Incorrect 'index' type",e7=t=>`Invalid value for key ${t}`,t7=t=>`Pattern length exceeds max of ${t}.`,n7=t=>`Missing ${t} property in key`,o7=t=>`Property 'weight' in key '${t}' must be a positive integer`,UC=Object.prototype.hasOwnProperty;class r7{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(o=>{let r=qC(o);n+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,n+=r.weight}),this._keys.forEach(o=>{o.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function qC(t){let e=null,n=null,o=null,r=1,i=null;if(co(t)||Lo(t))o=t,e=GC(t),n=ag(t);else{if(!UC.call(t,"name"))throw new Error(n7("name"));const a=t.name;if(o=a,UC.call(t,"weight")&&(r=t.weight,r<=0))throw new Error(o7(a));e=GC(a),n=ag(a),i=t.getFn}return{path:e,id:n,weight:r,src:o,getFn:i}}function GC(t){return Lo(t)?t:t.split(".")}function ag(t){return Lo(t)?t.join("."):t}function i7(t,e){let n=[],o=!1;const r=(i,a,s)=>{if(In(i))if(!a[s])n.push(i);else{let l=a[s];const c=i[l];if(!In(c))return;if(s===a.length-1&&(co(c)||jC(c)||QL(c)))n.push(JL(c));else if(Lo(c)){o=!0;for(let _=0,d=c.length;_<d;_+=1)r(c[_],a,s+1)}else a.length&&r(c,a,s+1)}};return r(t,co(e)?e.split("."):e,0),o?n:n[0]}var Q={...{isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},...{includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},...{location:0,threshold:.6,distance:100},...{useExtendedSearch:!1,getFn:i7,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1}};const a7=/[^ ]+/g;function s7(t=1,e=3){const n=new Map,o=Math.pow(10,e);return{get(r){const i=r.match(a7).length;if(n.has(i))return n.get(i);const a=1/Math.pow(i,.5*t),s=parseFloat(Math.round(a*o)/o);return n.set(i,s),s},clear(){n.clear()}}}class sg{constructor({getFn:e=Q.getFn,fieldNormWeight:n=Q.fieldNormWeight}={}){this.norm=s7(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,o)=>{this._keysMap[n.id]=o})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,co(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();co(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,o=this.size();n<o;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!In(e)||ig(e))return;let o={v:e,i:n,n:this.norm.get(e)};this.records.push(o)}_addObject(e,n){let o={i:n,$:{}};this.keys.forEach((r,i)=>{let a=r.getFn?r.getFn(e):this.getFn(e,r.path);if(In(a)){if(Lo(a)){let s=[];const l=[{nestedArrIndex:-1,value:a}];for(;l.length;){const{nestedArrIndex:c,value:_}=l.pop();if(In(_))if(co(_)&&!ig(_)){let d={v:_,i:c,n:this.norm.get(_)};s.push(d)}else Lo(_)&&_.forEach((d,v)=>{l.push({nestedArrIndex:v,value:d})})}o.$[i]=s}else if(co(a)&&!ig(a)){let s={v:a,n:this.norm.get(a)};o.$[i]=s}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function YC(t,e,{getFn:n=Q.getFn,fieldNormWeight:o=Q.fieldNormWeight}={}){const r=new sg({getFn:n,fieldNormWeight:o});return r.setKeys(t.map(qC)),r.setSources(e),r.create(),r}function l7(t,{getFn:e=Q.getFn,fieldNormWeight:n=Q.fieldNormWeight}={}){const{keys:o,records:r}=t,i=new sg({getFn:e,fieldNormWeight:n});return i.setKeys(o),i.setIndexRecords(r),i}function Qc(t,{errors:e=0,currentLocation:n=0,expectedLocation:o=0,distance:r=Q.distance,ignoreLocation:i=Q.ignoreLocation}={}){const a=e/t.length;if(i)return a;const s=Math.abs(o-n);return r?a+s/r:s?1:a}function u7(t=[],e=Q.minMatchCharLength){let n=[],o=-1,r=-1,i=0;for(let a=t.length;i<a;i+=1){let s=t[i];s&&o===-1?o=i:!s&&o!==-1&&(r=i-1,r-o+1>=e&&n.push([o,r]),o=-1)}return t[i-1]&&i-o>=e&&n.push([o,i-1]),n}const bi=32;function c7(t,e,n,{location:o=Q.location,distance:r=Q.distance,threshold:i=Q.threshold,findAllMatches:a=Q.findAllMatches,minMatchCharLength:s=Q.minMatchCharLength,includeMatches:l=Q.includeMatches,ignoreLocation:c=Q.ignoreLocation}={}){if(e.length>bi)throw new Error(t7(bi));const _=e.length,d=t.length,v=Math.max(0,Math.min(o,d));let b=i,S=v;const x=s>1||l,O=x?Array(d):[];let C;for(;(C=t.indexOf(e,S))>-1;){let I=Qc(e,{currentLocation:C,expectedLocation:v,distance:r,ignoreLocation:c});if(b=Math.min(I,b),S=C+_,x){let m=0;for(;m<_;)O[C+m]=1,m+=1}}S=-1;let g=[],w=1,E=_+d;const D=1<<_-1;for(let I=0;I<_;I+=1){let m=0,y=E;for(;m<y;)Qc(e,{errors:I,currentLocation:v+y,expectedLocation:v,distance:r,ignoreLocation:c})<=b?m=y:E=y,y=Math.floor((E-m)/2+m);E=y;let B=Math.max(1,v-y+1),H=a?d:Math.min(v+y,d)+_,M=Array(H+2);M[H+1]=(1<<I)-1;for(let G=H;G>=B;G-=1){let ge=G-1,pe=n[t.charAt(ge)];if(x&&(O[ge]=+!!pe),M[G]=(M[G+1]<<1|1)&pe,I&&(M[G]|=(g[G+1]|g[G])<<1|1|g[G+1]),M[G]&D&&(w=Qc(e,{errors:I,currentLocation:ge,expectedLocation:v,distance:r,ignoreLocation:c}),w<=b)){if(b=w,S=ge,S<=v)break;B=Math.max(1,2*v-S)}}if(Qc(e,{errors:I+1,currentLocation:v,expectedLocation:v,distance:r,ignoreLocation:c})>b)break;g=M}const P={isMatch:S>=0,score:Math.max(.001,w)};if(x){const I=u7(O,s);I.length?l&&(P.indices=I):P.isMatch=!1}return P}function d7(t){let e={};for(let n=0,o=t.length;n<o;n+=1){const r=t.charAt(n);e[r]=(e[r]||0)|1<<o-n-1}return e}class XC{constructor(e,{location:n=Q.location,threshold:o=Q.threshold,distance:r=Q.distance,includeMatches:i=Q.includeMatches,findAllMatches:a=Q.findAllMatches,minMatchCharLength:s=Q.minMatchCharLength,isCaseSensitive:l=Q.isCaseSensitive,ignoreLocation:c=Q.ignoreLocation}={}){if(this.options={location:n,threshold:o,distance:r,includeMatches:i,findAllMatches:a,minMatchCharLength:s,isCaseSensitive:l,ignoreLocation:c},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const _=(v,b)=>{this.chunks.push({pattern:v,alphabet:d7(v),startIndex:b})},d=this.pattern.length;if(d>bi){let v=0;const b=d%bi,S=d-b;for(;v<S;)_(this.pattern.substr(v,bi),v),v+=bi;if(b){const x=d-bi;_(this.pattern.substr(x),x)}}else _(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:o}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let S={isMatch:!0,score:0};return o&&(S.indices=[[0,e.length-1]]),S}const{location:r,distance:i,threshold:a,findAllMatches:s,minMatchCharLength:l,ignoreLocation:c}=this.options;let _=[],d=0,v=!1;this.chunks.forEach(({pattern:S,alphabet:x,startIndex:O})=>{const{isMatch:C,score:g,indices:w}=c7(e,S,x,{location:r+O,distance:i,threshold:a,findAllMatches:s,minMatchCharLength:l,includeMatches:o,ignoreLocation:c});C&&(v=!0),d+=g,C&&w&&(_=[..._,...w])});let b={isMatch:v,score:v?d/this.chunks.length:1};return v&&o&&(b.indices=_),b}}class Ir{constructor(e){this.pattern=e}static isMultiMatch(e){return JC(e,this.multiRegex)}static isSingleMatch(e){return JC(e,this.singleRegex)}search(){}}function JC(t,e){const n=t.match(e);return n?n[1]:null}class _7 extends Ir{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class p7 extends Ir{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const o=e.indexOf(this.pattern)===-1;return{isMatch:o,score:o?0:1,indices:[0,e.length-1]}}}class h7 extends Ir{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class f7 extends Ir{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class g7 extends Ir{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class v7 extends Ir{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class QC extends Ir{constructor(e,{location:n=Q.location,threshold:o=Q.threshold,distance:r=Q.distance,includeMatches:i=Q.includeMatches,findAllMatches:a=Q.findAllMatches,minMatchCharLength:s=Q.minMatchCharLength,isCaseSensitive:l=Q.isCaseSensitive,ignoreLocation:c=Q.ignoreLocation}={}){super(e),this._bitapSearch=new XC(e,{location:n,threshold:o,distance:r,includeMatches:i,findAllMatches:a,minMatchCharLength:s,isCaseSensitive:l,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class ZC extends Ir{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,o;const r=[],i=this.pattern.length;for(;(o=e.indexOf(this.pattern,n))>-1;)n=o+i,r.push([o,n-1]);const a=!!r.length;return{isMatch:a,score:a?0:1,indices:r}}}const lg=[_7,ZC,h7,f7,v7,g7,p7,QC],KC=lg.length,m7=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,b7="|";function y7(t,e={}){return t.split(b7).map(n=>{let o=n.trim().split(m7).filter(i=>i&&!!i.trim()),r=[];for(let i=0,a=o.length;i<a;i+=1){const s=o[i];let l=!1,c=-1;for(;!l&&++c<KC;){const _=lg[c];let d=_.isMultiMatch(s);d&&(r.push(new _(d,e)),l=!0)}if(!l)for(c=-1;++c<KC;){const _=lg[c];let d=_.isSingleMatch(s);if(d){r.push(new _(d,e));break}}}return r})}const C7=new Set([QC.type,ZC.type]);class w7{constructor(e,{isCaseSensitive:n=Q.isCaseSensitive,includeMatches:o=Q.includeMatches,minMatchCharLength:r=Q.minMatchCharLength,ignoreLocation:i=Q.ignoreLocation,findAllMatches:a=Q.findAllMatches,location:s=Q.location,threshold:l=Q.threshold,distance:c=Q.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:o,minMatchCharLength:r,findAllMatches:a,ignoreLocation:i,location:s,threshold:l,distance:c},this.pattern=n?e:e.toLowerCase(),this.query=y7(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:o,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let i=0,a=[],s=0;for(let l=0,c=n.length;l<c;l+=1){const _=n[l];a.length=0,i=0;for(let d=0,v=_.length;d<v;d+=1){const b=_[d],{isMatch:S,indices:x,score:O}=b.search(e);if(S){if(i+=1,s+=O,o){const C=b.constructor.type;C7.has(C)?a=[...a,...x]:a.push(x)}}else{s=0,i=0,a.length=0;break}}if(i){let d={isMatch:!0,score:s/i};return o&&(d.indices=a),d}}return{isMatch:!1,score:1}}}const ug=[];function S7(...t){ug.push(...t)}function cg(t,e){for(let n=0,o=ug.length;n<o;n+=1){let r=ug[n];if(r.condition(t,e))return new r(t,e)}return new XC(t,e)}const Zc={AND:"$and",OR:"$or"},dg={PATH:"$path",PATTERN:"$val"},_g=t=>!!(t[Zc.AND]||t[Zc.OR]),k7=t=>!!t[dg.PATH],x7=t=>!Lo(t)&&VC(t)&&!_g(t),ew=t=>({[Zc.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function tw(t,e,{auto:n=!0}={}){const o=r=>{let i=Object.keys(r);const a=k7(r);if(!a&&i.length>1&&!_g(r))return o(ew(r));if(x7(r)){const l=a?r[dg.PATH]:i[0],c=a?r[dg.PATTERN]:r[l];if(!co(c))throw new Error(e7(l));const _={keyId:ag(l),pattern:c};return n&&(_.searcher=cg(c,e)),_}let s={children:[],operator:i[0]};return i.forEach(l=>{const c=r[l];Lo(c)&&c.forEach(_=>{s.children.push(o(_))})}),s};return _g(t)||(t=ew(t)),o(t)}function B7(t,{ignoreFieldNorm:e=Q.ignoreFieldNorm}){t.forEach(n=>{let o=1;n.matches.forEach(({key:r,norm:i,score:a})=>{const s=r?r.weight:null;o*=Math.pow(a===0&&s?Number.EPSILON:a,(s||1)*(e?1:i))}),n.score=o})}function T7(t,e){const n=t.matches;e.matches=[],In(n)&&n.forEach(o=>{if(!In(o.indices)||!o.indices.length)return;const{indices:r,value:i}=o;let a={indices:r,value:i};o.key&&(a.key=o.key.src),o.idx>-1&&(a.refIndex=o.idx),e.matches.push(a)})}function I7(t,e){e.score=t.score}function $7(t,e,{includeMatches:n=Q.includeMatches,includeScore:o=Q.includeScore}={}){const r=[];return n&&r.push(T7),o&&r.push(I7),t.map(i=>{const{idx:a}=i,s={item:e[a],refIndex:a};return r.length&&r.forEach(l=>{l(i,s)}),s})}class Ea{constructor(e,n={},o){this.options={...Q,...n},this.options.useExtendedSearch,this._keyStore=new r7(this.options.keys),this.setCollection(e,o)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof sg))throw new Error(KL);this._myIndex=n||YC(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){In(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let o=0,r=this._docs.length;o<r;o+=1){const i=this._docs[o];e(i,o)&&(this.removeAt(o),o-=1,r-=1,n.push(i))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:o,includeScore:r,shouldSort:i,sortFn:a,ignoreFieldNorm:s}=this.options;let l=co(e)?co(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return B7(l,{ignoreFieldNorm:s}),i&&l.sort(a),jC(n)&&n>-1&&(l=l.slice(0,n)),$7(l,this._docs,{includeMatches:o,includeScore:r})}_searchStringList(e){const n=cg(e,this.options),{records:o}=this._myIndex,r=[];return o.forEach(({v:i,i:a,n:s})=>{if(!In(i))return;const{isMatch:l,score:c,indices:_}=n.searchIn(i);l&&r.push({item:i,idx:a,matches:[{score:c,value:i,norm:s,indices:_}]})}),r}_searchLogical(e){const n=tw(e,this.options),o=(s,l,c)=>{if(!s.children){const{keyId:d,searcher:v}=s,b=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(l,d),searcher:v});return b&&b.length?[{idx:c,item:l,matches:b}]:[]}const _=[];for(let d=0,v=s.children.length;d<v;d+=1){const b=s.children[d],S=o(b,l,c);if(S.length)_.push(...S);else if(s.operator===Zc.AND)return[]}return _},r=this._myIndex.records,i={},a=[];return r.forEach(({$:s,i:l})=>{if(In(s)){let c=o(n,s,l);c.length&&(i[l]||(i[l]={idx:l,item:s,matches:[]},a.push(i[l])),c.forEach(({matches:_})=>{i[l].matches.push(..._)}))}}),a}_searchObjectList(e){const n=cg(e,this.options),{keys:o,records:r}=this._myIndex,i=[];return r.forEach(({$:a,i:s})=>{if(!In(a))return;let l=[];o.forEach((c,_)=>{l.push(...this._findMatches({key:c,value:a[_],searcher:n}))}),l.length&&i.push({idx:s,item:a,matches:l})}),i}_findMatches({key:e,value:n,searcher:o}){if(!In(n))return[];let r=[];if(Lo(n))n.forEach(({v:i,i:a,n:s})=>{if(!In(i))return;const{isMatch:l,score:c,indices:_}=o.searchIn(i);l&&r.push({score:c,key:e,value:i,idx:a,norm:s,indices:_})});else{const{v:i,n:a}=n,{isMatch:s,score:l,indices:c}=o.searchIn(i);s&&r.push({score:l,key:e,value:i,norm:a,indices:c})}return r}}Ea.version="6.6.2",Ea.createIndex=YC,Ea.parseIndex=l7,Ea.config=Q,Ea.parseQuery=tw,S7(w7);const A7="combine",nw="M475 244q5 8 5 12t-5 12l-73 72q-6 6-12.5 5.5t-10.5-5-5-11 5-12.5l46-45h-66q-43 0-80.5 19.5T216 346q-28 42-71 66.5T48 438q-10 0-13-4.5T32 422t3-11.5 13-4.5q49-2 82.5-22t59.5-56q35-50 89-72-54-22-89-72-25-36-60.5-57T49 106q-11 0-14-4.5T32 90q0-6 3-11t13-5q51 0 95.5 25t72.5 67q25 35 62.5 54t80.5 20h66l-46-45q-5-6-4.5-12.5t4.5-11 10.5-5T402 172z";ne(A7,{pathData:nw,ltr:!1,collection:"SAP-icons-v4",packageName:"@ui5/webcomponents-icons"});const E7="combine",ow="M504 238q8 8 8 19 0 10-8 18l-83 83q-7 7-18 7t-18-7.5-7-17.5q0-12 7-19l46-46h-93q-73 0-103 45l-14 23q-13 20-26.5 39t-30 33.5T127 439t-49 9H26q-11 0-18.5-7.5T0 422t7.5-18 18.5-7h52q18 0 32.5-7.5t26.5-19 22-26.5 19-30l14-22q14-22 36-37-21-13-36-34l-14-22q-9-15-19-30t-22-26.5-26.5-19T78 116H26q-11 0-18.5-7.5T0 90t7.5-18T26 65h52q28 0 49 8.5t37.5 23T194 130t26 40l15 22q7 10 16.5 16.5t19.5 10 19 4.5 15 1h112l-32-32q-7-7-7-18t7-18.5 18-7.5 18 7z";ne(E7,{pathData:ow,ltr:!1,collection:"SAP-icons-v5",packageName:"@ui5/webcomponents-icons"}),Ze();class Kc{async parseXLSXFileSimple(e,n,o=()=>{}){const r=new Worker(URL.createObjectURL(new Blob([`    importScripts("${await It.INSTANCE.getXLSXScriptURL()}");

    self.addEventListener('message', async(e) => {
      try {
        const ab = new FileReaderSync().readAsArrayBuffer(e.data.file);
        const workbook = XLSX.read(ab, {dense: true});
        const parsingSheetName = e.data.sheetName === "" ? workbook.SheetNames[0] : e.data.sheetName
        const sheet = workbook.Sheets[parsingSheetName]
        const dataInCSVFormat = XLSX.utils.sheet_to_json(sheet, {header: 1, defval: ""})
        postMessage({dataInCSVFormat: dataInCSVFormat, sheetNames: workbook.SheetNames})
      } catch(e) {
        postMessage(e)
      }
    })
    `],{type:"text/javascript"})));return new Promise((i,a)=>{r.onmessage=async function(s){const l=await s.data.dataInCSVFormat,c=await s.data.sheetNames;o([l,c])},r.onerror=s=>{a(s.message)},r.postMessage({file:e,sheetName:n})})}parseCSVFileSimple(e,n=()=>{}){O5.parse(e,{worker:!0,complete:(o,r)=>{this.sheetData=o.data,n(this.sheetData)},error:(o,r)=>{console.error(o)}})}}const P7="document-text",rw="M416 0q14 0 23 9.5t9 22.5v448q0 14-9 23t-22 9H97q-14 0-23.5-9T64 480V128L192 0h224zm1 480l-1-448H224v96q0 14-9.5 23t-22.5 9H96v320h321zm-81-96q16 0 16 16 0 6-4.5 11t-11.5 5H176q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h160zm0-64q16 0 16 16 0 6-4.5 11t-11.5 5H176q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h160z";ne(P7,{pathData:rw,ltr:!1,collection:"SAP-icons-v4",packageName:"@ui5/webcomponents-icons"});const F7="document-text",iw="M422 0q11 0 18.5 7.5T448 26v460q0 11-7.5 18.5T422 512H90q-11 0-18.5-7.5T64 486V192q0-10 6-17L213 9q6-9 19-9h190zm-25 51H244l-20 24v66q0 21-15 36t-36 15h-50l-8 9v260h282V51zM160 282q0-11 7.5-18.5T186 256h140q11 0 18.5 7.5T352 282t-7.5 18-18.5 7H186q-11 0-18.5-7t-7.5-18zm166 70q11 0 18.5 7.5T352 378t-7.5 18-18.5 7H186q-11 0-18.5-7t-7.5-18 7.5-18.5T186 352h140z";ne(F7,{pathData:iw,ltr:!1,collection:"SAP-icons-v5",packageName:"@ui5/webcomponents-icons"}),Ze();function pg(t){return f.jsxs(K,{direction:"Column",style:{width:"100%"},children:[f.jsx(Br,{style:{display:"flex",justifyContent:"center"},children:t.text}),f.jsx(Ao,{active:!0,style:{marginTop:"1rem"}})]})}function R7(t){let e=t.versions;const[n,o]=F.useState(!1),[r,i]=F.useState("");return t.importType==="privateFactData"||(e=e.filter(s=>s.id.startsWith("public."))),f.jsx(K,{children:t.fileParserRunning?f.jsx(pg,{text:"Parsing File"}):f.jsxs(K,{direction:"Column",style:{width:"100%"},children:[f.jsxs(K,{direction:"Column",style:{marginBottom:"1rem",display:t.shouldDisplayVersionDropdown?"":"None"},children:[f.jsx(oe,{children:"Target Version:"}),f.jsx(Br,{children:"Select the version you want to run the import job on."}),f.jsxs(K,{direction:"Row",children:[f.jsx(Tn,{onChange:s=>t.setVersion(s.detail.selectedOption.dataset.id),children:n?f.jsx(_t,{children:"Loading Versions..."}):e.map(s=>f.jsx(_t,{selected:s.id===t.version.id,"data-id":s.id,children:s.description},s.id))}),f.jsx(we,{icon:"refresh",style:{marginTop:"5px",marginLeft:"5px",minWidth:0,height:"25px",width:"20px"},design:"Transparent",onClick:()=>{o(!0),It.INSTANCE.getModel(t.modelId).then(s=>{s.versions!==void 0&&t.setAvailableVersions(s.versions),o(!1)}).catch(()=>{o(!1),i("Failed to Reload Versions")})}})]}),f.jsx(Tr,{message:r,close:()=>i("")})]}),t.defaultVersion!==""&&f.jsxs(Br,{style:{marginBottom:".5rem"},children:["Selected Target Version: ",f.jsx("b",{children:t.defaultVersion})]}),f.jsxs(K,{direction:"Column",children:[f.jsx(oe,{children:"Upload File:"}),f.jsxs(K,{children:[f.jsx(dl,{hideInput:!0,value:t.file?t.file.name:"",style:{marginTop:".5rem",marginBottom:".5rem"},onChange:async s=>{s.target.files[0]&&t.setFile(s.target.files[0])},children:f.jsx(we,{style:{height:"23px"},children:"Select Source File"})}),f.jsx(Po,{style:{margin:"auto",marginLeft:"10px",marginRight:0},name:"document-text"}),f.jsx(oe,{style:{margin:"auto"},children:t.file?t.file.name:"No File"}),f.jsx(we,{style:{margin:"auto",marginRight:0,marginLeft:0,minWidth:0,height:"20px",width:"20px"},design:"Transparent",icon:"decline",onClick:()=>{t.setFile(void 0),t.setParsedFileName(void 0),t.setSheetNames([])}})]}),t.sheetNames&&t.sheetNames.length!==0&&t.file&&fl(t.file,"xlsx")&&f.jsxs(K,{direction:"Column",children:[f.jsx(oe,{children:"Select Sheet Name:"}),f.jsx(Tn,{onChange:s=>{t.setSelectedSheetName(s.detail.selectedOption.dataset.id)},children:t.sheetNames.map(s=>f.jsx(_t,{"data-id":s,selected:s===t.selectedSheetName,children:s},s))})]})]}),f.jsx(K,{direction:"Column",children:t.importDataValidationCompleted&&t.file?f.jsxs(f.Fragment,{children:[f.jsxs(oe,{children:[Math.max(0,t.importData.length-1)," rows of data found in the file."]}),t.importValidationErrors.map(s=>f.jsx(Gc,{style:{marginTop:"1rem"},design:"Negative",onClose:()=>t.setImportValidationErrors([...t.importValidationErrors].filter(l=>l!==s)),children:s},s))]}):f.jsx(Ao,{})})]})})}function fl(t,e){return t.name.substring(t.name.lastIndexOf(".")+1).toLowerCase()===e.toLowerCase()}function L7(t){const[e,n]=F.useState(!1),[o,r]=F.useState(!1),[i,a]=F.useState(!1),[s,l]=F.useState(void 0),[c,_]=F.useState(""),[d,v]=F.useState(""),[b,S]=F.useState([]),[x,O]=F.useState(""),[C,g]=F.useState([]),[w,E]=F.useState(""),[D,P]=F.useState([]),[I,m]=F.useState(!1);F.useEffect(()=>{if(s===void 0&&(S([]),B(!1),M([]),a(!1)),(s&&s.name!==c||s&&x!==d)&&!t.importRunning){m(!0),_(s.name),v(x),S([]),B(!1),M([]),a(!1),t.setImportStatus(""),t.setImportResult({});const ge=U=>{const N=U[0],R=U[1];S(N),g(R),m(!1)},pe=U=>{S(U),m(!1)};fl(s,"xlsx")?new Kc().parseXLSXFileSimple(s,x,ge):fl(s,"csv")?new Kc().parseCSVFileSimple(s,pe):console.error("Invalid File Selected")}},[s,c,x,d,I,t]);const[y,B]=F.useState(!1),[H,M]=F.useState([]);F.useEffect(()=>{if(!t.importRunning&&b.length>0&&!y&&t.metadata&&t.importType){const ge=It.INSTANCE.validateJobData(b,t.metadata[t.importType]);a(!It.INSTANCE.validateVersionExistsInDataOrSettings(b)),M(ge),B(!0)}},[b,y,x,t]),F.useEffect(()=>{if(b.length>0&&e&&!o&&y){r(!0);const ge=(N,R)=>{l(void 0),_(void 0),S([]),n(!1),r(!1),B(!1),M([]),a(!1),t.setImportRunning(!1),t.setImportStatus(N),t.setImportResult(R),t.jobFinsishedEventDispatcher(N,R)};t.setImportRunning(!0);const pe={};w!==""&&(pe.Version=w);const U=t.metadata.factData.columns.map(N=>N.columnName);It.INSTANCE.uploadData(t.modelId,b,ge,"csv",pe,U)}},[b,o,y,t]),F.useEffect(()=>{t.modelId&&It.INSTANCE.getModel(t.modelId).then(ge=>{ge.versions!==void 0&&P(ge.versions)})},[t.modelId]);const q=It.INSTANCE.getDefaultValues();let G=q.hasOwnProperty("Version")?q.Version:"";return f.jsxs("div",{children:[qr.createPortal(f.jsx(gi,{open:t.dialogOpen&&t.isViewMode,headerText:"Upload Data",onAfterClose:()=>t.setDialogOpen(!1),className:"footerPartNoPadding",style:{padding:0},footer:f.jsx(_i,{style:{minWidth:"100%",height:"38px",backgroundColor:"white",boxShadow:"none"},endContent:f.jsxs(f.Fragment,{children:[f.jsx(we,{disabled:!s||I,style:{marginLeft:"auto",height:"24px",backgroundColor:"#5496cd",border:0},design:"Emphasized",onClick:()=>{t.setDialogOpen(!1),n(!0)},children:"Run"}),f.jsx(we,{style:{height:"24px"},design:"Transparent",onClick:()=>t.setDialogOpen(!1),children:"Cancel"})]})}),children:f.jsx(R7,{setSelectedSheetName:O,selectedSheetName:x,setFile:l,setParsedFileName:_,file:s,versions:D,setVersion:E,version:w,defaultVersion:G,shouldDisplayVersionDropdown:i&&G==="",importType:t.importType,importValidationErrors:H,setImportValidationErrors:M,importDataValidationCompleted:y,importData:b,sheetNames:C,setSheetNames:g,fileParserRunning:I,setAvailableVersions:P,modelId:t.modelId})}),document.body),qr.createPortal(f.jsx(gi,{open:e,onAfterClose:()=>n(!1),style:{padding:0},footer:f.jsx(_i,{style:{minWidth:"100%",height:"38px"},endContent:f.jsx(f.Fragment,{children:f.jsx(we,{style:{height:"24px",backgroundColor:"#5496cd",border:0},design:"Emphasized",onClick:()=>n(!1),children:"Run In Background"})})}),children:f.jsx(pg,{text:"Please wait while the data import is running."})}),document.body)]})}function N7(t){const[e,n]=F.useState([]),[o,r]=F.useState(!1),[i,a]=F.useState(""),[s,l]=F.useState(void 0),[c,_]=F.useState(""),[d,v]=F.useState(""),[b,S]=F.useState(""),[x,O]=F.useState([]),C=()=>{l(void 0),n([]),a(""),_(""),v(""),S(""),O([]),t.setMappings({})};return F.useEffect(()=>{if(s&&s.name!==c||s&&d!==b){const g=D=>{const P=D.map(H=>String(H)),I={includeScore:!0},m=new Ea(P,I),y=H=>{const M=m.search(H.replaceAll("_","").trim());return M[0]&&M[0].score!==void 0&&M[0].score<.34?M[0].item:""},B={...t.mappings};t.metadata.columns.forEach(H=>B[H.columnName]=y(H.columnName)),t.setMappings(B),n(D),a("")},w=D=>{const I=D[0][0],m=D[1];g(I),O(m),t.setFileParserRunning(!1)},E=D=>{g(D),t.setFileParserRunning(!1)};t.setFileParserRunning(!0),fl(s,"xlsx")?new Kc().parseXLSXFileSimple(s,d,w):fl(s,"csv")&&(O([]),new Kc().parseCSVFileSimple(s,D=>E(D[0]))),_(s.name),S(d)}},[s,c,b,d,t]),t.fileParserRunning?f.jsx(K,{direction:"column",children:f.jsx(pg,{text:"Parsing File"})}):e.length>0?f.jsxs(K,{direction:"Column",children:[t.metadata.columns.map(g=>f.jsxs(K,{direction:"Row",justifyContent:"SpaceBetween",style:{marginBottom:"1rem"},children:[f.jsx(Br,{style:{margin:"auto",marginLeft:0},children:g.columnName}),f.jsx(Po,{style:{width:"1.2rem",height:"1.2rem",margin:"auto",marginRight:"10px"},name:"combine"}),f.jsxs(Tn,{onChange:w=>t.setMappings({...t.mappings,[g.columnName]:w.detail.selectedOption.dataset.id}),children:[e.map(w=>f.jsx(_t,{selected:t.mappings[g.columnName]===w,"data-id":w,children:w},w)),f.jsx(_t,{selected:t.mappings[g.columnName]==="","data-id":"",children:""})]})]},g.columnName)),f.jsxs(K,{style:{marginBottom:"1rem"},children:[f.jsx(dl,{hideInput:!0,value:s?s.name:"",style:{marginTop:".5rem",marginBottom:".5rem"},onChange:async g=>{g.target.files&&g.target.files.length>0&&l(g.target.files[0])},children:f.jsx(we,{style:{height:"23px"},children:"Upload Template File"})}),f.jsx(Po,{style:{margin:"auto",marginLeft:"10px",marginRight:0},name:"document-text"}),f.jsx(oe,{style:{margin:"auto"},children:s?s.name:"No File"}),f.jsx(we,{style:{margin:"auto",marginRight:0,marginLeft:0,minWidth:0,height:"20px",width:"20px"},design:"Transparent",icon:"decline",onClick:C})]}),x.length>0?f.jsxs(K,{style:{marginBottom:"0.5rem",justifyContent:"space-between"},children:[f.jsx(oe,{style:{marginTop:"0.5rem"},children:"Select Sheet Name:"}),f.jsx(Tn,{onChange:g=>{v(g.detail.selectedOption.dataset.id)},children:x.map(g=>f.jsx(_t,{"data-id":g,selected:g===t.selectedSheetName,children:g},g))})]}):f.jsx(Ao,{}),f.jsx(we,{onClick:()=>{C(),r(!0)},children:"Raw Text Input"})]}):t.metadata!==void 0&&(o||Object.keys(t.mappings).filter(g=>!!g).length!==0)?f.jsxs(K,{direction:"Column",children:[t.metadata.columns.map(g=>f.jsxs(K,{direction:"Row",justifyContent:"SpaceBetween",style:{marginBottom:"1rem"},children:[f.jsx(Br,{style:{margin:"auto",marginLeft:0},children:g.columnName}),f.jsx(Po,{style:{width:"1.2rem",height:"1.2rem",margin:"auto",marginRight:"10px"},name:"combine"}),f.jsx(qc,{value:t.mappings[g.columnName]||"",onChange:w=>t.setMappings({...t.mappings,[g.columnName]:w.target.value})})]},g.columnName)),f.jsx(we,{onClick:()=>{C(),r(!1)},children:"Upload File Template"})]}):f.jsxs(K,{direction:"Column",children:[f.jsx(oe,{style:{marginBottom:"0.5rem"},children:"Select a mapping method"}),f.jsxs(K,{style:{marginBottom:"0.5rem"},children:[f.jsx(dl,{hideInput:!0,value:i,style:{marginTop:".5rem",marginBottom:".5rem"},onChange:async g=>{g.target.files&&g.target.files.length>0&&l(g.target.files[0])},children:f.jsx(we,{style:{height:"23px"},children:"Upload Template File"})}),f.jsx(Po,{style:{margin:"auto",marginLeft:"10px",marginRight:0},name:"document-text"}),f.jsx(oe,{style:{margin:"auto"},children:s?s.name:"No File"}),f.jsx(we,{style:{margin:"auto",marginRight:0,marginLeft:0,minWidth:0,height:"20px",width:"20px"},design:"Transparent",icon:"decline",onClick:C})]}),f.jsx(oe,{style:{marginLeft:"auto",marginRight:"auto"},children:"OR"}),x.length>0?f.jsxs(K,{style:{marginBottom:"0.5rem"},children:[f.jsx(oe,{children:"Select Sheet Name:"}),f.jsx(Tn,{onChange:g=>{v(g.detail.selectedOption.dataset.id)},children:x.map(g=>f.jsx(_t,{"data-id":g,selected:g===t.selectedSheetName,children:g},g))})]}):f.jsx(Ao,{}),f.jsx(we,{onClick:()=>{t.setMappings([]),C(),r(!0)},children:"Raw Text Input"})]})}function D7(t){const[e,n]=F.useState(!1),[o,r]=F.useState(t.mappings),[i,a]=F.useState(!1),s=t.importTypeMetadata;return F.useMemo(()=>{r(t.mappings)},[t.mappings]),f.jsxs(eo,{headerText:"Data Mappings",collapsed:!0,children:[f.jsxs("div",{style:{display:"flex",flexDirection:"column",paddingLeft:30},children:[f.jsxs(oe,{wrappingType:"Normal",children:[f.jsx("b",{children:"Optionally"})," configure mappings if columns in the user's uploaded data will have different names to the expected column names of the data import service."]}),f.jsx(we,{disabled:s===void 0,onClick:()=>{n(!0)},children:"Open Data Mappings Dialog"})]}),qr.createPortal(f.jsx(gi,{open:e,headerText:"Data Mappings",onAfterClose:()=>n(!1),style:{padding:0},footer:f.jsx(_i,{design:"Footer",endContent:f.jsxs(f.Fragment,{children:[f.jsx(we,{onClick:()=>{n(!1),a(!1),t.setMappings(o)},children:"Save"}),f.jsx(we,{onClick:()=>{a(!1),n(!1)},children:"Cancel"})]})}),children:f.jsx(N7,{metadata:s,setMappings:r,mappings:o,fileParserRunning:i,setFileParserRunning:a})}),document.body)]})}const O7=["YYYYWW","YYYY/WW","YYYY-WW","YYYY.WW","WWYYYY","WW-YYYY","WW/YYYY","WW.YYYY"],H7=["YYYYMMDD","YYYY/MM-DD","YYYY-MM/DD","YYYY-DD-MM","YYYY-MM-DD","YYYY/MM/DD","DD-MM-YYYY","DD.MM.YYYY","DD/MM/YYYY","MM-DD-YYYY"],M7=["YYYYQ","YYYY-Q","YYYYQQ","YYYY-QQ","YYYY.QQ"],z7=["YYYYMM","YYYY/MM","YYYY-MM","YYYY.MM","MMYYYY","MM-YYYY","MM/YYYY","MM.YYYY"],j7=["YYYY"],V7=["YYYYPP","YYYY.PP","PPPYYYY","YYYY-PP","PPP.YYYY","PPP/YYYY","PPP-YYYY","YYYY.PPP","YYYYPPP"],W7=["YYYYPPDD","YYYY/PP-DD","YYYY-PP/DD","YYYY-DD-PP","YYYY-PP-DD","YYYY/PP/DD","DD-PP-YYYY","DD.PP.YYYY","DD/PP/YYYY","PP-DD-YYYY"],aw=[...O7,...H7,...M7,...z7,...j7,...V7,...W7],U7=(t,e)=>/^[0-9]*$/.test(t)?t:e;function q7(t){const[e,n]=F.useState(t.pivotSettings!==void 0&&t.pivotSettings.pivotColumnStart),o=(r,i)=>{t.setPivotSettings({...t.pivotSettings,[r]:i})};return f.jsxs(K,{direction:"Column",children:[f.jsxs(K,{children:[f.jsx(ui,{checked:t.pivotSettings!==void 0,onChange:r=>{r.target.checked?t.setPivotSettings({}):t.clearPivotSettings(),n(r.target.checked)}}),f.jsx(oe,{style:{alignSelf:"center"},children:"Enable Pivot Settings"})]}),f.jsxs(K,{direction:"Column",style:{display:e?"":"none"},children:[f.jsx(K,{direction:"Row"}),f.jsxs(K,{direction:"Row",children:[f.jsx(oe,{style:{alignSelf:"center"},children:"Pivot Column Start"}),f.jsx("input",{type:"text",value:t.pivotSettings&&t.pivotSettings.pivotColumnStart?t.pivotSettings.pivotColumnStart:"",style:{marginLeft:"auto",height:"20px",border:"1px solid rgb(191, 191, 191)",minWidth:"204px"},onInput:r=>{r.preventDefault(),o("pivotColumnStart",U7(r.target.value,t.pivotSettings.pivotColumnStart))}})]}),f.jsxs(K,{direction:"Row",children:[f.jsx(oe,{style:{alignSelf:"center"},children:"Pivot Key"}),f.jsxs(Tn,{style:{marginLeft:"auto"},onChange:r=>o("pivotKeyName",r.detail.selectedOption.dataset.id),children:[f.jsx(_t,{"data-id":"",selected:t.pivotSettings&&t.pivotSettings.pivotKeyName===""}),t.importTypeMetadata.columns.map(r=>{const i=t.mappings[r.columnName]?t.mappings[r.columnName]:r.columnName;return f.jsx(_t,{"data-id":i,selected:t.pivotSettings&&t.pivotSettings.pivotKeyName===i,children:i},i)})]})]}),f.jsxs(K,{direction:"Row",children:[f.jsx(oe,{style:{alignSelf:"center"},children:"Pivot Value"}),f.jsxs(Tn,{style:{marginLeft:"auto"},onChange:r=>o("pivotValueName",r.detail.selectedOption.dataset.id),children:[f.jsx(_t,{"data-id":"",selected:t.pivotSettings&&t.pivotSettings.pivotValueName===""}),t.importTypeMetadata.columns.map(r=>{const i=t.mappings[r.columnName]?t.mappings[r.columnName]:r.columnName;return f.jsx(_t,{"data-id":i,selected:t.pivotSettings&&t.pivotSettings.pivotValueName===i,children:i},i)})]})]})]})]})}function G7(t){return f.jsx(K,{children:t.importType==="factData"&&f.jsxs(K,{children:[f.jsx(oe,{style:{alignSelf:"center"},children:"Import Method:"}),f.jsxs(Tn,{style:{marginLeft:"auto"},onChange:e=>t.setImportMethod(e.detail.selectedOption.dataset.id),children:[f.jsx(_t,{"data-id":"Update",selected:t.importMethod==="Update",children:"Update"}),f.jsx(_t,{"data-id":"Append",selected:t.importMethod==="Append",children:"Append"})]})]})})}function Y7(t){return f.jsxs(K,{children:[f.jsx(ui,{checked:t.reverseSign,disabled:t.disabled,onChange:e=>t.setReverseSign(e.target.checked)}),f.jsx(oe,{style:{alignSelf:"center"},children:"Reverse Account Sign"})]})}function X7(t){return f.jsxs(K,{children:[f.jsx(ui,{checked:t.executeWithFailedRows,onChange:e=>t.setExecuteWithFailedRows(e.target.checked)}),f.jsx(oe,{style:{alignSelf:"center"},children:"Execute With Failed Rows"})]})}function J7(t){return f.jsxs(K,{children:[f.jsx(ui,{checked:t.ignoreAdditionalColumns,onChange:e=>t.setIgnoreAdditionalColumns(e.target.checked)}),f.jsx(oe,{style:{alignSelf:"center"},children:"Ignore Additional Columns"})]})}function Q7(t){const[e,n]=F.useState([]),o=a=>{a.target.checked?t.setDateFormats({}):t.clearDateFormats()};F.useState(()=>{const s=t.importTypeMetadata.columns.filter(l=>l.propertyType==="DATE").map(l=>l.columnName);n(s)},[t.importTypeMetadata]);const r=F.useMemo(()=>t.dateFormats?Object.keys(t.dateFormats):[],[t.dateFormats]),i=a=>{a!==void 0&&t.dateFormats[a]===void 0&&t.setDateFormats({...t.dateFormats,[a]:aw[0]})};return f.jsxs(K,{direction:"Column",children:[f.jsxs(K,{direction:"Row",children:[f.jsx(ui,{disabled:t.disabled,checked:t.dateFormats!==void 0,onChange:a=>o(a)}),f.jsx(oe,{style:{alignSelf:"center"},children:"Enable Date Format Settings"})]}),f.jsxs(K,{direction:"Column",style:{display:t.dateFormats!==void 0?"":"None"},children:[r.map(a=>f.jsxs(K,{direction:"Row",children:[f.jsxs(oe,{style:{alignSelf:"center",overflow:"hidden",width:"30%"},children:[a,":"]}),f.jsx(Tn,{style:{marginLeft:"auto"},onChange:s=>{t.setDateFormats({...t.dateFormats,[a]:s.detail.selectedOption.dataset.id})},children:aw.map(s=>f.jsx(_t,{"data-id":s,selected:t.dateFormats[a]===s,children:s},s))},a),f.jsx(we,{icon:"decline",design:"Transparent",onClick:s=>{const l={...t.dateFormats};delete l[a],t.setDateFormats(l)}})]},a)),f.jsx(oe,{style:{alignSelf:"center",marginTop:".5rem"},children:"Select Date Dimension To Add Format:"}),f.jsxs(Tn,{style:{margin:"auto",marginTop:".5rem"},onClose:a=>{const s=a.target.children;for(let l of s)l._state.selected&&!t.dateFormats.hasOwnProperty(l.dataset.id)&&i(l.dataset.id)},children:[f.jsx(_t,{}),e.map(a=>f.jsx(_t,{"data-id":a,children:a},a))]})]})]})}function Z7(t){const[e,n]=F.useState(""),o=d=>t.setJobSettings({...t.jobSettings,importMethod:d}),r=d=>t.setJobSettings({...t.jobSettings,pivotOptions:d}),i=d=>t.setJobSettings({...t.jobSettings,reverseSignByAccountType:d}),a=d=>{t.setJobSettings({...t.jobSettings,executeWithFailedRows:d})},s=d=>{t.setJobSettings({...t.jobSettings,ignoreAdditionalColumns:d})},l=()=>{const d={...t.jobSettings};delete d.pivotOptions,t.setJobSettings(d)},c=()=>{const d={...t.jobSettings};delete d.dateFormats,t.setJobSettings(d)},_=d=>{t.setJobSettings({...t.jobSettings,dateFormats:d})};return t.importTypeMetadata===void 0?f.jsx(eo,{headerText:"Job Settings",collapsed:!0,children:f.jsx("div",{style:{display:"flex",flexDirection:"column",paddingLeft:30},children:f.jsx(oe,{wrappingType:"Normal",children:"Model and Import Type selection is required to enable and display Job Settings"})})}):f.jsx(eo,{headerText:"Job Settings",collapsed:!0,children:f.jsxs("div",{style:{display:"flex",flexDirection:"column",paddingLeft:30},children:[f.jsx(Tr,{message:e,close:()=>n("")}),f.jsx(G7,{setImportMethod:o,importMethod:t.jobSettings.importMethod,importType:t.importType}),f.jsx(Y7,{disabled:t.importType==="privateFactData",reverseSign:t.jobSettings.reverseSignByAccountType===!0,setReverseSign:i}),f.jsx(X7,{executeWithFailedRows:t.jobSettings.executeWithFailedRows?t.jobSettings.executeWithFailedRows:!0,setExecuteWithFailedRows:a}),f.jsx(J7,{ignoreAdditionalColumns:t.jobSettings.ignoreAdditionalColumns?t.jobSettings.ignoreAdditionalColumns:!1,setIgnoreAdditionalColumns:s}),f.jsx(q7,{pivotSettings:t.jobSettings.pivotOptions,setPivotSettings:r,clearPivotSettings:l,mappings:t.mappings,importTypeMetadata:t.importTypeMetadata}),f.jsx(Q7,{dateFormats:t.jobSettings.dateFormats,importTypeMetadata:t.importTypeMetadata,setDateFormats:_,clearDateFormats:c,disabled:t.importType==="privateFactData"})]})})}function sw(t){switch(t){case"factData":return"Fact Data";case"masterData":return"Master Data";case"masterFactData":return"Master & Fact Data";case"privateFactData":return"Private Fact Data";default:return t}}const K7=t=>t.filter(e=>e!=="masterData"&&e!=="masterFactData");function eN(t){const[e,n]=F.useState([]),[o,r]=F.useState("");return F.useEffect(()=>{It.getInstance().getModel(t.modelId).then(i=>{if(i.importTypes){const a=i.importTypes.map(s=>s.importType);n(K7(a))}}).catch(i=>{r("Error - "+i.message)})},[t.modelId]),t.modelId===""?f.jsx(eo,{headerText:"Import Type",collapsed:!0,children:f.jsx(oe,{children:"Please select a model first."})}):f.jsx(eo,{headerText:"Import Type",collapsed:!0,children:f.jsxs("div",{style:{display:"flex",flexDirection:"column",paddingLeft:30},children:[f.jsx(Tr,{message:o,close:()=>r("")}),f.jsx(oe,{children:"Select Import Type"}),f.jsxs(Tn,{onChange:i=>t.setImportType(i.detail.selectedOption.dataset.id),style:{width:"100%"},children:[f.jsx(_t,{"data-id":"",selected:t.importType==="",children:e&&e.length===0?"Loading...":""},""),e.map(i=>f.jsx(_t,{"data-id":i,selected:i===t.importType,children:sw(i)},i))]}),f.jsx(oe,{wrappingType:"Normal",children:"Note: swapping import type resets default values, mappings, and job settings."})]})})}const tN="arrow-right",lw="M503 234q9 9 9 22.5t-9 22.5L344 439q-10 10-23 10t-23-10q-9-9-9-22.5t9-22.5l106-106H32q-13 0-22.5-9T0 256q0-13 9.5-22.5T32 224h372L299 119q-10-10-10-23t10-22q9-10 22-10t22 10z";ne(tN,{pathData:lw,ltr:!1,collection:"SAP-icons-v4",packageName:"@ui5/webcomponents-icons"});const nN="arrow-right",uw="M331 409q-7 7-17 7-11 0-18.5-7.5T288 390q0-10 8-18l95-90H58q-11 0-18.5-7.5T32 256t7.5-18.5T58 230h333l-95-90q-8-8-8-18 0-11 7.5-18.5T314 96q10 0 17 7l141 134q8 8 8 19 0 12-8 18z";ne(nN,{pathData:uw,ltr:!1,collection:"SAP-icons-v5",packageName:"@ui5/webcomponents-icons"}),Ze();function oN(t){return t.metadata===void 0?f.jsx("div",{children:"Error! You shouldn't be seeing this.."}):f.jsx(K,{direction:"Column",children:t.metadata.columns.map(e=>f.jsxs(K,{direction:"Row",justifyContent:"SpaceBetween",children:[f.jsx(Br,{style:{margin:"auto",marginLeft:0},children:e.columnName}),f.jsx(Po,{style:{width:"1.2rem",height:"1.2rem",margin:"auto",marginRight:"10px"},name:"arrow-right"}),f.jsx(qc,{value:t.defaultValues[e.columnName]||"",onChange:n=>t.setDefaultValues({...t.defaultValues,[e.columnName]:n.target.value})})]}))})}function rN(t){const[e,n]=F.useState(!1),[o,r]=F.useState(t.defaultValues);F.useMemo(()=>{r(t.defaultValues)},[t.defaultValues]),F.useEffect(()=>{e||r(t.defaultValues)},[e]);const i=()=>{const c={};Object.keys(o).forEach(_=>{o[_]!==void 0&&o[_]!==""&&(c[_]=o[_])}),t.setDefaultValues(c),n(!1)},a=t.importTypeMetadata,[s,l]=F.useState("");return f.jsx(eo,{headerText:"Default Values",collapsed:!0,children:f.jsxs("div",{style:{display:"flex",flexDirection:"column",paddingLeft:30},children:[f.jsx(Tr,{message:s,close:()=>l("")}),f.jsxs(oe,{wrappingType:"Normal",children:[f.jsx("b",{children:"Optionally"})," configure default values. These will be used if the user's uploaded data does not supply a value for a measure or dimension."]}),f.jsx(we,{disabled:a===void 0,onClick:()=>{n(!0)},children:"Open Default Values Dialog"}),qr.createPortal(f.jsx(gi,{open:e,headerText:"Default Values",onAfterClose:()=>n(!1),footer:f.jsx(_i,{design:"Footer",endContent:f.jsxs(f.Fragment,{children:[f.jsx(we,{onClick:()=>i(),children:"Save"}),f.jsx(we,{onClick:()=>n(!1),children:"Close"})]})}),children:f.jsx(oN,{metadata:a,setDefaultValues:r,defaultValues:o})}),document.body)]})})}const iN="media-play",cw="M433.5 246q8 5 8 13.5t-8 13.5l-314 203q-8 4-17 4-13 0-22.5-9t-9.5-23V64q0-14 9.5-23t22.5-9q7 0 17 5zm-96 13l-203-135v266z";ne(iN,{pathData:cw,ltr:!0,collection:"SAP-icons-v4",packageName:"@ui5/webcomponents-icons"});const aN="media-play",dw="M122 480q-11 0-18.5-7.5T96 454V58q0-11 7.5-18.5T122 32q7 0 15 5l269 198q10 8 10 21t-10 21L137 475q-8 5-15 5zm25-372v296l200-148z";ne(aN,{pathData:dw,ltr:!0,collection:"SAP-icons-v5",packageName:"@ui5/webcomponents-icons"}),Ze();const sN="copy",_w="M32 192l96-96h224q13 0 22.5 9t9.5 23v352q0 14-9 23t-23 9H65q-14 0-23.5-9T32 480V192zm320 288V128H160v64q0 14-9.5 23t-23.5 9H65v256h287zM159 64l65-64h224q12 0 22 9t10 23v352q0 14-9 23t-23 9h-32v-32h32V32H256v32h-97zm-15 256h128q16 0 16 16 0 6-4.5 11t-11.5 5H144q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5zm-16 80q0-7 5-11.5t11-4.5h128q16 0 16 16 0 6-4.5 11t-11.5 5H144q-6 0-11-5t-5-11z";ne(sN,{pathData:_w,ltr:!1,collection:"SAP-icons-v4",packageName:"@ui5/webcomponents-icons"});const lN="copy",pw="M384 26q0 11-7.5 18T358 51H122q-17 0-28 11T83 90v268q0 11-7 18.5T58 384t-18.5-7.5T32 358V90q0-38 26-64t64-26h236q11 0 18.5 7.5T384 26zm6 70q38 0 64 26t26 64v236q0 38-26 64t-64 26H218q-38 0-64-26t-26-64V186q0-38 26-64t64-26h172zm39 90q0-17-11-28t-28-11H218q-17 0-28 11t-11 28v236q0 17 11 28t28 11h172q17 0 28-11t11-28V186zm-71 83q11 0 18.5 7.5T384 295t-7.5 18-18.5 7H250q-11 0-18.5-7t-7.5-18 7.5-18.5T250 269h108zm0 96q11 0 18.5 7t7.5 18-7.5 18.5T358 416H250q-11 0-18.5-7.5T224 390t7.5-18 18.5-7h108z";ne(lN,{pathData:pw,ltr:!1,collection:"SAP-icons-v5",packageName:"@ui5/webcomponents-icons"}),Ze();function gl(t){const{text:e,copyText:n}=t,[o,r]=F.useState(!1);return f.jsxs(f.Fragment,{children:[f.jsxs(oe,{style:{fontSize:"14px"},wrappingType:"None",children:[f.jsx(we,{hidden:t.noInfo,design:"Transparent",icon:"information",id:"openPopoverBtn",onClick:()=>r(!0)})," ",e]}),qr.createPortal(f.jsx(gi,{headerText:"Import Info",onBeforeClose:()=>{r(!1)},onAfterClose:()=>r(!1),open:o,allowTargetOverlap:!0,footer:f.jsxs(_i,{children:[f.jsx(we,{icon:"copy",design:"Transparent",onClick:()=>navigator.clipboard.writeText(n),children:"Copy Text"}),f.jsx(we,{onClick:()=>r(!1),children:"Close"})]}),children:f.jsxs(K,{direction:"Column",children:[f.jsx(oe,{wrappingType:"Normal",children:e}),t.dataMotiveFailedRecordsCount!==void 0&&t.dataMotiveFailedRecordsCount>=2e3&&f.jsx(oe,{wrappingType:"Normal",style:{marginTop:"0.5rem"},children:"Note: This is only a sample of the Failed Records. More may be available."})]})}),document.body)]})}function hw(t){return t.toLowerCase().split("_").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join(" ")}function uN(t){const e=()=>{t.importRunning||t.setDialogOpen(!0)};window.handleButtonClick=e;const n=()=>t.importResult&&t.importStatus?`Import Complete (${hw(t.importStatus)})`:t.importRunning?"Import Running":"Upload Data",o=()=>{if(t.importResult!==void 0&&t.importStatus){if(t.importResult.failedRecords.length>0){const i=[...t.importResult.columnNames,...t.importResult.failedRecords].join(`
`),a=`Import had ${t.importResult.failedRecords.length} failed records. `;return f.jsx(gl,{dataMotiveFailedRecordsCount:t.importResult.dataMotiveFailedRowsCount,copyText:a,text:f.jsxs(f.Fragment,{children:[a,f.jsx("a",{style:{color:"rgb(10, 110, 209)",textDecoration:"none",textOverflow:"ellipsis",display:"inline-block"},target:"_blank",rel:"noreferrer",href:"data:text/csv;charset=utf-8,"+encodeURIComponent(i),download:"failedRecords.csv",children:"Download Failed Records"})]})})}if(t.importStatus==="FAILED")return t.importResult.errorResponses.length>0&&t.importResult.errorResponses[0].error?f.jsx(gl,{text:t.importResult.errorResponses[0].error.message,copyText:t.importResult.errorResponses[0].error.message}):(console.error("Upload Widget Critical Error",t.importResult,t.importStatus),f.jsx(gl,{text:"An unknown error occured. Please contact an admin."}));if(t.importResult.statusResponse&&t.importResult.statusResponse.additionalInformation&&t.importResult.statusResponse.additionalInformation.totalNumberRowsInJob){const i=`Succesfully imported ${t.importResult.statusResponse.additionalInformation.totalNumberRowsInJob} rows of data`;return f.jsx(gl,{text:i,copyText:i})}}return t.importRunning?f.jsx(Ao,{active:!0,style:{marginTop:".5rem"}}):f.jsx(gl,{text:"Upload your planning csv",noInfo:!0})};return f.jsxs(K,{direction:"Row",style:{display:"flex",minWidth:"100%",minHeight:"100%"},children:[f.jsx("div",{style:{display:"flex",cursor:"pointer",flexDirection:"row",backgroundColor:t.isViewMode?"#abcae6":"#c6cace",minWidth:"64px",width:"64px",minHeight:"64px",height:"100%",border:0,borderRadius:"3px"},onClick:()=>e(),children:f.jsx(Po,{name:"media-play",style:{margin:"auto",alignSelf:"center",color:"white",fontSize:"1.5rem"}})}),f.jsxs("div",{style:{display:"flex",flexDirection:"column",padding:".3rem",paddingLeft:".6rem",paddingRight:0,maxWidth:"100%"},children:[f.jsx(Jc,{style:{marginBottom:".2rem",fontSize:"16px"},children:n()}),o()]})]})}function cN(t){const[e,n]=F.useState(!1),[o,r]=F.useState(!1),[i,a]=F.useState({}),[s,l]=F.useState("");let c=!0;if(window.location&&window.location.href){const _=new URLSearchParams(window.location.href.split("?")[1]).get("mode");_&&_==="edit"&&(c=!1)}return f.jsxs(f.Fragment,{children:[f.jsx(uN,{importResult:i,importStatus:s,importTypeMetadata:t.metadata,setDialogOpen:n,importRunning:o,isViewMode:c}),f.jsx(L7,{modelId:t.modelId,dialogOpen:e,setDialogOpen:n,importRunning:o,setImportRunning:r,setImportResult:a,setImportStatus:l,importType:t.importType,metadata:t.metadata,importStatus:s,importResult:i,isViewMode:c,jobFinsishedEventDispatcher:t.jobFinsishedEventDispatcher})]})}function dN(){return f.jsx("div",{style:{backgroundColor:"#eff4f9",minHeight:"120px",display:"flex",borderBottom:"1px solid #d1e0ee"},children:f.jsxs("div",{style:{paddingLeft:24,paddingRight:24,paddingTop:12,paddingBottom:12,margin:"auto",marginLeft:0},children:[f.jsx(Jc,{style:{margin:"auto",marginLeft:0,color:"#346187"},children:"File Upload"}),f.jsx(oe,{children:"Configure File Upload Widget"})]})})}const _N="pending",fw="M228 284V138q0-7 5-11.5t12-4.5q15 0 15 16v114h146q17 0 17 16t-17 16H228zM325 0q69 17 119.5 67.5T512 187h-34q-17-55-57.5-95T325 35V0zm-65 479q39 0 74-12t63.5-34 49-51 31.5-65h34q-11 42-34.5 78T421 457t-74 40.5-87 14.5q-54 0-101-20.5t-82.5-56-56-82.5T0 252q0-46 14.5-86.5T55 92t62-57 78-35v34q-36 11-65 31.5t-51 49T45 178t-12 74q0 48 17.5 89T99 413t72.5 48.5T260 479z";ne(_N,{pathData:fw,ltr:!1,collection:"SAP-icons-v4",packageName:"@ui5/webcomponents-icons"});const pN="pending",gw="M236.942 460.887q10.997 1 17.496 7.999t6.498 17.995l-1 2q-1 9.997-7.998 16.995t-16.995 5.999h-2q-49.988-2-92.477-23.494t-73.982-56.486-48.988-80.48T0 255.937q0-52.988 19.995-99.476t54.487-81.48 80.98-54.987T254.938 0q60.985 0 115.472 26.993t90.477 74.982V24.994q0-10.997 7.499-17.996T486.88 0t17.996 6.998 6.998 17.996v153.962q0 10.998-6.998 18.496t-17.996 7.498H345.916q-10.998 0-18.496-7.498t-7.498-18.496 7.498-17.995 18.496-6.999h87.978q-26.993-47.988-74.982-75.481T254.938 50.988q-41.99 0-79.48 15.996t-64.985 43.989-43.49 65.484-15.995 79.48q0 39.99 13.996 75.982t38.99 63.484 58.986 44.99 73.982 20.494zm21.995-236.942q8.998 0 17.995 6.999l90.978 86.978q7.998 6.999 7.998 17.996t-7.498 18.495-17.496 7.499q-8.997 0-17.995-6.999l-84.98-79.98h-98.975q-10.998 0-18.496-6.998t-7.498-17.996 6.998-18.496 17.996-7.498h110.973zm227.944 33.992q10.997 0 17.996 7.998t6.998 18.995q0 7.998-3.999 24.494t-11.497 32.992-17.496 28.993-20.995 12.497q-7.998 0-15.496-7.498t-7.498-18.495q0-2 1-5.499t4.998-11.497q5.999-13.997 11.498-29.993t9.497-32.992q2-8.998 8.998-14.496t15.996-5.499zm-108.973 163.96q12.997-10.997 22.994-10.997t16.996 6.998 6.998 16.996q0 10.997-11.497 22.494t-26.993 20.995-31.493 15.496-23.994 5.999q-10.997 0-18.495-6.998t-7.498-17.996q0-18.995 26.993-27.993 10.997-3 24.494-9.998t21.495-14.996z";ne(pN,{pathData:gw,ltr:!1,collection:"SAP-icons-v5",packageName:"@ui5/webcomponents-icons"}),Ze();const hN="expand-group",vw="M425.5 234q9-9 22.5-9t22.5 9q10 10 10 23t-10 23l-192 192q-9 9-22.5 9t-22.5-9l-193-191q-10-10-10-23t10-22q9-10 22-10t23 10l159 157q11 11 23 0zm0-193q9-9 22.5-9t22.5 9q10 10 10 23t-10 23l-192 192q-9 9-22.5 9t-22.5-9L40.5 88q-10-10-10-23t10-22q9-10 22-10t23 10l159 157q5 5 11.5 5t11.5-5z";ne(hN,{pathData:vw,ltr:!1,accData:_1,collection:"SAP-icons-v4",packageName:"@ui5/webcomponents-icons"});const fN="expand-group",mw="M390 64q11 0 18.5 7.5T416 90q0 10-7 17L275 248q-8 8-19 8-12 0-18-8L103 107q-7-7-7-17 0-11 7.5-18.5T122 64q10 0 18 8l116 121L372 72q8-8 18-8zm0 192q11 0 18.5 7.5T416 282q0 10-7 17L275 440q-8 8-19 8-12 0-18-8L103 299q-7-7-7-17 0-11 7.5-18.5T122 256q10 0 18 8l116 121 116-121q8-8 18-8z";ne(fN,{pathData:mw,ltr:!1,accData:_1,collection:"SAP-icons-v5",packageName:"@ui5/webcomponents-icons"}),Ze();function gN(t){const[e,n]=F.useState([]),[o,r]=F.useState(""),[i,a]=F.useState(5),[s,l]=F.useState(!1),c=e.filter(_=>_.modelID===t.modelId);return F.useEffect(()=>{e.length===0&&o===""&&(l(!0),It.INSTANCE.getJobs().then(_=>{l(!1),_.sort((d,v)=>new Date(v.lastUpdatedTime)-new Date(d.lastUpdatedTime)),n(_)}).catch(_=>{l(!1),r(_.message)}))},[t.modelId,e,o]),t.modelId===""?f.jsx(eo,{headerText:"Job Timeline",collapsed:!0,children:f.jsx(oe,{children:"Please select a model first."})}):f.jsx(eo,{headerText:"Jobs Timeline",collapsed:!0,children:f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx(Tr,{message:o,close:()=>r("")}),s?f.jsx(Ao,{active:!0}):void 0,f.jsx(vN,{jobs:c.slice(0,i)}),f.jsxs(we,{hidden:c.length<5,onClick:()=>a(Math.min(i+5,c.length)),children:["Load More (",i," / ",c.length,")"]})]})})}function vN(t){return f.jsx(og,{waitForDefine:!0,children:t.jobs.map(e=>f.jsx(RC,{titleText:e.owner+" "+hw(e.status),subtitleText:sw(e.importType)+" "+e.lastUpdatedTime,icon:e.status==="COMPLETED"?"edit":"pending",waitForDefine:!0,children:f.jsx("div",{children:f.jsx(mN,{job:e},e.jobID)},e.jobID)},e.jobID))})}function mN(t){const{job:e}=t,[n,o]=F.useState(void 0),[r,i]=F.useState(!1),[a,s]=F.useState(""),l=()=>{r||(i(!0),It.INSTANCE.getJobStatus(e.jobID).then(c=>{o({...c}),i(!1)}).catch(c=>{s(c.message),i(!1)}))};return f.jsxs(K,{direction:"Column",children:[f.jsx(Tr,{message:a}),f.jsx(bN,{additionalInformation:n?n.additionalInformation:void 0}),f.jsx(yN,{additionalInfo:n}),f.jsx(Ao,{active:!0,style:{marginTop:".5rem",display:r?"":"None"}}),f.jsx(we,{style:{marginTop:".5rem"},disabled:n!==void 0,icon:"expand-group",design:"Transparent",onClick:()=>l(),children:f.jsx("span",{children:"Fetch Additional Info"})})]})}function bN(t){if(t.additionalInformation&&t.additionalInformation.failedNumberRows&&t.additionalInformation.totalNumberRowsInJob){const{failedNumberRows:e,totalNumberRowsInJob:n}=t.additionalInformation,o=parseInt(n)-parseInt(e);return f.jsxs(K,{direction:"Column",children:[f.jsxs(oe,{children:["Total Rows: ",n]}),f.jsxs(oe,{children:["Failed Rows: ",e]}),f.jsxs(oe,{children:["Successful Rows: ",o]})]})}else return f.jsx("div",{})}function yN(t){return t.additionalInfo===void 0?f.jsx(K,{direction:"Row"}):f.jsxs(K,{direction:"Column",children:[f.jsx(we,{style:{marginTop:".5rem"},design:"Transparent",onClick:()=>navigator.clipboard.writeText(JSON.stringify(t.additionalInfo)),icon:"copy",children:"Copy JSON Stats"}),f.jsx(we,{style:{marginTop:".5rem"},disabled:!t.additionalInfo.invalidRowsURL,tooltip:t.additionalInfo.invalidRowsURL?"":"You must validate or run the job to see invalid rows",design:"Transparent",onClick:()=>navigator.clipboard.writeText(t.additionalInfo.invalidRowsURL),icon:"copy",children:"Copy Invalid Rows URL"})]})}function CN(t){const[e,n]=F.useState(t.modelId),[o,r]=F.useState(t.importType),[i,a]=F.useState(t.mappings||{}),[s,l]=F.useState(t.defaultValues||{}),[c,_]=F.useState(t.jobSettings||{}),[d,v]=F.useState({}),[b,S]=F.useState(""),x=g=>{g!==e&&(n(g),r(""),a({}),l({}))},O=g=>{g!==o&&(r(g),a({}),l({}),_({}))};F.useEffect(()=>{t.isAdminMode&&e&&t.setWidgetAttribute("modelId",e)},[e]),F.useEffect(()=>{t.isAdminMode&&o&&t.setWidgetAttribute("importType",o)},[o]),F.useEffect(()=>{t.isAdminMode&&i&&t.setWidgetAttribute("mappings",i)},[i]),F.useEffect(()=>{t.isAdminMode&&s&&t.setWidgetAttribute("defaultValues",s)},[s]),F.useEffect(()=>{t.isAdminMode&&c&&t.setWidgetAttribute("jobSettings",c)},[c]),F.useEffect(()=>{e&&It.getInstance().getModelMetadata(e).then(g=>{v(g),S("")}).catch(g=>{S("Error - "+g.message)})},[e]);const C=()=>{switch(t.mode){case"BUILDER":return f.jsxs("div",{children:[f.jsx(dN,{}),f.jsxs("div",{style:{padding:"24px",paddingTop:"12px"},children:[f.jsx(Tr,{message:b,close:()=>S("")}),f.jsx(GL,{modelId:e,setModelId:x}),f.jsx(eN,{modelId:e,importType:o,setImportType:O}),f.jsx(D7,{modelId:e,importTypeMetadata:d[o],mappings:i,setMappings:a}),f.jsx(rN,{modelId:e,importTypeMetadata:d[o],defaultValues:s,setDefaultValues:l}),f.jsx(Z7,{jobSettings:c,setJobSettings:_,importTypeMetadata:d[o],mappings:i,importType:o}),f.jsx(gN,{modelId:e})]})]});case"Styler":{console.log("Styler Panel not implemented.");break}case"STORY":default:return f.jsx(cN,{modelId:e,metadata:d,importType:o,mappings:i,jobFinsishedEventDispatcher:t.jobFinsishedEventDispatcher})}};return f.jsx(OC,{children:C()})}class wN extends HTMLElement{static get observedAttributes(){return["settings"]}constructor(){super(),this.baseURL=window.location.origin,this.dataImportService=new It(this.baseURL+"/api/v1/dataimport"),this.modelId="",this.importType="",this.mappings={},this.defaultValues={},this.jobSettings={},this.sheetName="",this.updateSettings()}attributeChangedCallback(e,n,o){const r=JSON.parse(this.getAttribute("settings"));r.setWidgetAttribute=this.setWidgetAttribute.bind(this),this.root&&ed(this.root,r)}onCustomWidgetAfterUpdate(e){e.modelId!==void 0&&(this.modelId=e.modelId),e.importType!==void 0&&(this.importType=e.importType),e.mappings!==void 0&&(this.mappings=e.mappings),e.defaultValues!==void 0&&(this.defaultValues=e.defaultValues),e.jobSettings!==void 0&&(this.jobSettings=e.jobSettings),e.sheetName!==void 0&&(this.sheetName=e.sheetName),this.updateSettings()}setWidgetAttribute(e,n){const o=JSON.parse(this.getAttribute("settings"));o[e]=n;const r=new CustomEvent("propertiesChanged",{detail:{properties:{[e]:n}}});this.dispatchEvent(r)}updateSettings(){const e={modelId:this.modelId,importType:this.importType,baseURL:this.baseURL,mode:"BUILDER",isAdminMode:!0,jobSettings:this.jobSettings,mappings:this.mappings,defaultValues:this.defaultValues,sheetName:this.sheetName};this.setAttribute("settings",JSON.stringify(e))}connectedCallback(){const e=this;this.root||(this.root=Cl.createRoot(e));const n=JSON.parse(this.getAttribute("settings"));n.setWidgetAttribute=this.setWidgetAttribute.bind(this),ed(this.root,n)}}function ed(t,e){t.render(f.jsx(CN,{...e}))}class SN extends HTMLElement{static get observedAttributes(){return["settings"]}constructor(){super(),this.baseURL=window.location.origin,this.dataImportService=new It(this.baseURL+"/api/v1/dataimport"),this.importType="",this.modelId="",this.resultObj=void 0,this.updateSettings()}open(){window.handleButtonClick()}jobRunFinishedEventDispatcher(e,n){const o={COMPLETED:"onSuccess",COMPLETED_WITH_FAILURES:"onPartialSuccess",FAILED:"onFailure"};o[e]!==void 0&&(this.resultObj=n,this.dispatchEvent(new Event(o[e])))}getTotalJobRowCount(){return this.resultObj?this.resultObj.totalRecordsFromUser:-1}getJobFailedRowCount(){return this.resultObj?this.resultObj.failedRecords.length:-1}attributeChangedCallback(e,n,o){const r=JSON.parse(this.getAttribute("settings"));this.root&&ed(this.root,r)}connectedCallback(){const e=this;this.root||(this.root=Cl.createRoot(e));const o={...JSON.parse(this.getAttribute("settings")),jobFinsishedEventDispatcher:this.jobRunFinishedEventDispatcher.bind(this)};ed(this.root,o)}onCustomWidgetAfterUpdate(e){console.log("Import Widget Properties",e),e.modelId!==void 0&&(this.modelId=e.modelId),e.importType!==void 0&&this.setImportType(e.importType),e.mappings!==void 0&&this.setMappings(e.mappings),e.defaultValues!==void 0&&this.setDefaultValues(e.defaultValues),e.jobSettings!==void 0&&this.setJobSettings(e.jobSettings),e.sheetName!==void 0&&(this.sheetName=e.sheetName),this.updateSettings()}updateSettings(){const e={modelId:this.modelId,baseURL:this.baseURL,mode:"STORY",isAdminMode:!1,jobSettings:this.getJobSettings(),mappings:this.getMappings(),defaultValues:this.getDefaultValues(),importType:this.importType};this.setAttribute("settings",JSON.stringify(e))}get modelId(){return this._modelId}set modelId(e){this._modelId=e,this.updateSettings()}setImportType(e){this.dataImportService.importType=e}setMappings(e){this.dataImportService.setMappings(e)}setJobSettings(e){this.dataImportService.setJobSettings(e)}setDefaultValues(e){this.dataImportService.setDefaultValues(e)}setSheetName(e){this.sheetName=e}setChunkSize(e){this.dataImportService.setChunkSize(e)}getImportType(){return this.dataImportService.importType}getJobSettings(){return this.dataImportService.getJobSettings()}getDefaultValues(){return this.dataImportService.getDefaultValues()}getMappings(){return this.dataImportService.getMappings()}getChunkSize(){return this.dataImportService.getChunkSize()}}window.customElements.get("com-sap-file-upload-widget-builder")===void 0&&window.customElements.define("com-sap-file-upload-widget-builder",wN),window.customElements.get("com-sap-file-upload-widget")===void 0&&window.customElements.define("com-sap-file-upload-widget",SN)})();
