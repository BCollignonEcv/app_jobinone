"use strict";(self["webpackChunkapp_jobinone"]=self["webpackChunkapp_jobinone"]||[]).push([[168],{168:function(e,t,n){n.r(t),n.d(t,{startTapClick:function(){return i}});var o=n(587);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const i=e=>{let t,n,i,v,p=10*-u,f=0;const L=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),m=new WeakMap,h=()=>void 0!==t&&null!==t.parentElement,E=e=>{p=(0,o.q)(e),T(e)},w=e=>{p=(0,o.q)(e),S(e)},b=e=>{const t=(0,o.q)(e)-u;p<t&&T(e)},g=e=>{const t=(0,o.q)(e)-u;p<t&&S(e)},k=e=>{S(e)},q=()=>{clearTimeout(v),v=void 0,n&&(j(!1),n=void 0)},T=e=>{n||h()||(t=void 0,C(s(e),e))},S=e=>{C(void 0,e)},C=(e,t)=>{if(e&&e===n)return;clearTimeout(v),v=void 0;const{x:i,y:s}=(0,o.p)(t);if(n){if(m.has(n))throw new Error("internal error");n.classList.contains(c)||R(n,i,s),j(!0)}if(e){const t=m.get(e);t&&(clearTimeout(t),m.delete(e));const n=a(e)?0:d;e.classList.remove(c),v=setTimeout((()=>{R(e,i,s),v=void 0}),n)}n=e},R=(e,t,n)=>{f=Date.now(),e.classList.add(c);const o=L&&r(e);o&&o.addRipple&&(y(),i=o.addRipple(t,n))},y=()=>{void 0!==i&&(i.then((e=>e())),i=void 0)},j=e=>{y();const t=n;if(!t)return;const o=l-Date.now()+f;if(e&&o>0&&!a(t)){const e=setTimeout((()=>{t.classList.remove(c),m.delete(t)}),l);m.set(t,e)}else t.classList.remove(c)},x=document;x.addEventListener("ionScrollStart",(e=>{t=e.target,q()})),x.addEventListener("ionScrollEnd",(()=>{t=void 0})),x.addEventListener("ionGestureCaptured",q),x.addEventListener("touchstart",E,!0),x.addEventListener("touchcancel",w,!0),x.addEventListener("touchend",w,!0),x.addEventListener("mousedown",b,!0),x.addEventListener("mouseup",g,!0),x.addEventListener("contextmenu",k,!0)},s=e=>{if(!e.composedPath)return e.target.closest(".ion-activatable");{const t=e.composedPath();for(let e=0;e<t.length-2;e++){const n=t[e];if(n.classList&&n.classList.contains("ion-activatable"))return n}}},a=e=>e.classList.contains("ion-activatable-instant"),r=e=>{if(e.shadowRoot){const t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},c="ion-activated",d=200,l=200,u=2500}}]);
//# sourceMappingURL=168.cf2d9e11.js.map