import{c as D,i as te,e as V,l as ue,p as ze,a as ut,b as f,h as S,g as U,w as q,o as Z,d as ee,n as Te,f as qe,r as k,j as Ne,k as se,m as le,q as ct,s as Ie,t as Q,u as j,v as C,x as _,y as g,z as Ce,A as I,B as dt,C as J,D as ft,E as re,F as pe,G as De,H as ye,I as ke,J as be,K as vt,L as mt,M as G,N as ht,O as gt,P as Ee,Q as ne}from"./index.0dab7d68.js";import{h as X,a as pt,b as yt,c as Ve}from"./QSpinner.fe1312f7.js";import{s as bt,g as wt,a as _t,b as xt,c as we,Q as W,d as qt,e as Ct,u as kt,f as St,h as $t,i as zt,j as ie,k as Tt,l as Pt}from"./format.44892337.js";import{u as Bt,a as Lt,Q as We}from"./QBtn.608d917b.js";import{Q as je,a as Ue,u as Ot,b as Qt,c as Dt,d as Se,e as Et,f as Vt}from"./axios.880dac5d.js";import{Q as Ht}from"./Ripple.30d012f8.js";var Mt=D({name:"QPageContainer",setup(e,{slots:l}){const{proxy:{$q:o}}=U(),n=te(ue,V);if(n===V)return console.error("QPageContainer needs to be child of QLayout"),V;ze(ut,!0);const t=f(()=>{const a={};return n.header.space===!0&&(a.paddingTop=`${n.header.size}px`),n.right.space===!0&&(a[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(a.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(a[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),a});return()=>S("div",{class:"q-page-container",style:t.value},X(l.default))}});const{passive:He}=qe,At=["both","horizontal","vertical"];var Ft=D({name:"QScrollObserver",props:{axis:{type:String,validator:e=>At.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:bt},emits:["scroll"],setup(e,{emit:l}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,t,a;q(()=>e.scrollTarget,()=>{c(),d()});function u(){n!==null&&n();const x=Math.max(0,_t(t)),b=xt(t),v={top:x-o.position.top,left:b-o.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const h=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";o.position={top:x,left:b},o.directionChanged=o.direction!==h,o.delta=v,o.directionChanged===!0&&(o.direction=h,o.inflectionPoint=o.position),l("scroll",{...o})}function d(){t=wt(a,e.scrollTarget),t.addEventListener("scroll",s,He),s(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",s,He),t=void 0)}function s(x){if(x===!0||e.debounce===0||e.debounce==="0")u();else if(n===null){const[b,v]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];n=()=>{v(b),n=null}}}const{proxy:i}=U();return q(()=>i.$q.lang.rtl,u),Z(()=>{a=i.$el.parentNode,d()}),ee(()=>{n!==null&&n(),c()}),Object.assign(i,{trigger:s,getPosition:()=>o}),Te}});function Rt(){const e=k(!Ne.value);return e.value===!1&&Z(()=>{e.value=!0}),{isHydrated:e}}const Xe=typeof ResizeObserver!="undefined",Me=Xe===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var $e=D({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:l}){let o=null,n,t={width:-1,height:-1};function a(c){c===!0||e.debounce===0||e.debounce==="0"?u():o===null&&(o=setTimeout(u,e.debounce))}function u(){if(o!==null&&(clearTimeout(o),o=null),n){const{offsetWidth:c,offsetHeight:s}=n;(c!==t.width||s!==t.height)&&(t={width:c,height:s},l("resize",t))}}const{proxy:d}=U();if(d.trigger=a,Xe===!0){let c;const s=i=>{n=d.$el.parentNode,n?(c=new ResizeObserver(a),c.observe(n),u()):i!==!0&&se(()=>{s(!0)})};return Z(()=>{s()}),ee(()=>{o!==null&&clearTimeout(o),c!==void 0&&(c.disconnect!==void 0?c.disconnect():n&&c.unobserve(n))}),Te}else{let i=function(){o!==null&&(clearTimeout(o),o=null),s!==void 0&&(s.removeEventListener!==void 0&&s.removeEventListener("resize",a,qe.passive),s=void 0)},x=function(){i(),n&&n.contentDocument&&(s=n.contentDocument.defaultView,s.addEventListener("resize",a,qe.passive),u())};const{isHydrated:c}=Rt();let s;return Z(()=>{se(()=>{n=d.$el,n&&x()})}),ee(i),()=>{if(c.value===!0)return S("object",{class:"q--avoid-card-border",style:Me.style,tabindex:-1,type:"text/html",data:Me.url,"aria-hidden":"true",onLoad:x})}}}}),Nt=D({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:l,emit:o}){const{proxy:{$q:n}}=U(),t=k(null),a=k(n.screen.height),u=k(e.container===!0?0:n.screen.width),d=k({position:0,direction:"down",inflectionPoint:0}),c=k(0),s=k(Ne.value===!0?0:we()),i=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),x=f(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),b=f(()=>s.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${s.value}px`}:null),v=f(()=>s.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${s.value}px`,width:`calc(100% + ${s.value}px)`}:null);function h(y){if(e.container===!0||document.qScrollPrevented!==!0){const $={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};d.value=$,e.onScroll!==void 0&&o("scroll",$)}}function T(y){const{height:$,width:L}=y;let A=!1;a.value!==$&&(A=!0,a.value=$,e.onScrollHeight!==void 0&&o("scrollHeight",$),w()),u.value!==L&&(A=!0,u.value=L),A===!0&&e.onResize!==void 0&&o("resize",y)}function z({height:y}){c.value!==y&&(c.value=y,w())}function w(){if(e.container===!0){const y=a.value>c.value?we():0;s.value!==y&&(s.value=y)}}let m=null;const P={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:a,containerHeight:c,scrollbarWidth:s,totalWidth:f(()=>u.value+s.value),rows:f(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:le({size:0,offset:0,space:!1}),right:le({size:300,offset:0,space:!1}),footer:le({size:0,offset:0,space:!1}),left:le({size:300,offset:0,space:!1}),scroll:d,animate(){m!==null?clearTimeout(m):document.body.classList.add("q-body--layout-animate"),m=setTimeout(()=>{m=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,$,L){P[y][$]=L}};if(ze(ue,P),we()>0){let L=function(){y=null,$.classList.remove("hide-scrollbar")},A=function(){if(y===null){if($.scrollHeight>n.screen.height)return;$.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(L,300)},Y=function(F){y!==null&&F==="remove"&&(clearTimeout(y),L()),window[`${F}EventListener`]("resize",A)},y=null;const $=document.body;q(()=>e.container!==!0?"add":"remove",Y),e.container!==!0&&Y("add"),ct(()=>{Y("remove")})}return()=>{const y=pt(l.default,[S(Ft,{onScroll:h}),S($e,{onResize:T})]),$=S("div",{class:i.value,style:x.value,ref:e.container===!0?void 0:t,tabindex:-1},y);return e.container===!0?S("div",{class:"q-layout-container overflow-hidden",ref:t},[S($e,{onResize:z}),S("div",{class:"absolute-full",style:b.value},[S("div",{class:"scroll",style:v.value},[$])])]):$}}}),It=D({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:l}){const o=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>S("div",{class:o.value},X(l.default))}}),Wt=D({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:l}){const o=f(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>S(e.tag,{class:o.value},X(l.default))}}),jt=D({name:"QCardActions",props:{...Bt,vertical:Boolean},setup(e,{slots:l}){const o=Lt(e),n=f(()=>`q-card__actions ${o.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>S("div",{class:n.value},X(l.default))}}),Ut=D({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:l}){const o=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>S("div",{class:o.value,role:"toolbar"},X(l.default))}}),Xt=D({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:o}){const{proxy:{$q:n}}=U(),t=te(ue,V);if(t===V)return console.error("QHeader needs to be child of QLayout"),V;const a=k(parseInt(e.heightHint,10)),u=k(!0),d=f(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||n.platform.is.ios&&t.isContainer.value===!0),c=f(()=>{if(e.modelValue!==!0)return 0;if(d.value===!0)return u.value===!0?a.value:0;const m=a.value-t.scroll.value.position;return m>0?m:0}),s=f(()=>e.modelValue!==!0||d.value===!0&&u.value!==!0),i=f(()=>e.modelValue===!0&&s.value===!0&&e.reveal===!0),x=f(()=>"q-header q-layout__section--marginal "+(d.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),b=f(()=>{const m=t.rows.value.top,P={};return m[0]==="l"&&t.left.space===!0&&(P[n.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),m[2]==="r"&&t.right.space===!0&&(P[n.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),P});function v(m,P){t.update("header",m,P)}function h(m,P){m.value!==P&&(m.value=P)}function T({height:m}){h(a,m),v("size",m)}function z(m){i.value===!0&&h(u,!0),o("focusin",m)}q(()=>e.modelValue,m=>{v("space",m),h(u,!0),t.animate()}),q(c,m=>{v("offset",m)}),q(()=>e.reveal,m=>{m===!1&&h(u,e.modelValue)}),q(u,m=>{t.animate(),o("reveal",m)}),q(t.scroll,m=>{e.reveal===!0&&h(u,m.direction==="up"||m.position<=e.revealOffset||m.position-m.inflectionPoint<100)});const w={};return t.instances.header=w,e.modelValue===!0&&v("size",a.value),v("space",e.modelValue),v("offset",c.value),ee(()=>{t.instances.header===w&&(t.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const m=yt(l.default,[]);return e.elevated===!0&&m.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),m.push(S($e,{debounce:0,onResize:T})),S("header",{class:x.value,style:b.value,onFocusin:z},m)}}});const Yt=["href"],Kt=["src"],Jt={style:{"text-decoration":"none"}},Gt=g("p",{class:"text-subtitle-2 text-grey-8"},"Best Sneakers Shop",-1),Zt=["src"],ea=g("img",{src:"/heart.svg",alt:"Heart"},null,-1),ta=g("span",null,"Favs",-1),aa=["src"],oa=g("span",null,"Profile",-1),la=g("div",{class:"text-h6"},"Hi, you do not have an account",-1),ra={__name:"Header",props:{totalPrice:Number},emits:["toggle-drawer"],setup(e,{emit:l}){const o=l,n=k(!1);function t(){o("toggle-drawer")}const a=f(()=>"/quasar_sneakers");return(u,d)=>{const c=Ie("router-link");return Q(),j(Xt,{bordered:"",class:"bg-white text-primary q-pa-md q-py-sm"},{default:C(()=>[_(Ut,{class:"flex justify-between"},{default:C(()=>[g("a",{href:a.value+"#",style:{"text-decoration":"none"},class:"router-link-active router-link-exact-active flex q-gutter-md items-center flex-row","aria-current":"page"},[g("img",{src:a.value+"/logo.png",alt:"Logo",style:{height:"3vw","max-width":"3vw"}},null,8,Kt),g("div",Jt,[_(It,{class:"text-uppercase text-bold text-black"},{default:C(()=>[Ce(" Quasar Sneakers")]),_:1}),Gt])],8,Yt),_(je,{class:"flex items-center"},{default:C(()=>[g("a",{onClick:t},[_(W,{class:"flex items-center cursor-pointer q-px-md text-grey-7 hover:text-black q-gutter-xs"},{default:C(()=>[g("img",{src:a.value+"/cart.svg",alt:"Cart"},null,8,Zt),g("b",null,I(e.totalPrice)+" rub",1)]),_:1})]),_(c,{to:"/favs",style:{"text-decoration":"none"}},{default:C(()=>[_(W,{class:"flex items-center cursor-pointer q-px-md text-grey-7 q-gutter-xs hover:text-black"},{default:C(()=>[ea,ta]),_:1})]),_:1}),g("a",{onClick:d[0]||(d[0]=s=>n.value=!0)},[_(W,{class:"flex items-center cursor-pointer q-px-md text-grey-7 q-gutter-xs hover:text-black"},{default:C(()=>[g("img",{src:a.value+"/profile.svg",alt:"Profile"},null,8,aa),oa]),_:1})]),_(qt,{modelValue:n.value,"onUpdate:modelValue":d[2]||(d[2]=s=>n.value=s),persistent:""},{default:C(()=>[_(Ue,{class:"q-pa-md"},{default:C(()=>[_(Wt,{class:"justify-center"},{default:C(()=>[la]),_:1}),_(jt,{class:"justify-center"},{default:C(()=>[_(We,{label:"Okay",onClick:d[1]||(d[1]=s=>n.value=!1)})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})}}},Pe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},na=Object.keys(Pe);Pe.all=!0;function Ae(e){const l={};for(const o of na)e[o]===!0&&(l[o]=!0);return Object.keys(l).length===0?Pe:(l.horizontal===!0?l.left=l.right=!0:l.left===!0&&l.right===!0&&(l.horizontal=!0),l.vertical===!0?l.up=l.down=!0:l.up===!0&&l.down===!0&&(l.vertical=!0),l.horizontal===!0&&l.vertical===!0&&(l.all=!0),l)}const ia=["INPUT","TEXTAREA"];function Fe(e,l){return l.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof l.handler=="function"&&ia.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(l.uid)===-1)}function _e(e,l,o){const n=ke(e);let t,a=n.left-l.event.x,u=n.top-l.event.y,d=Math.abs(a),c=Math.abs(u);const s=l.direction;s.horizontal===!0&&s.vertical!==!0?t=a<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?t=u<0?"up":"down":s.up===!0&&u<0?(t="up",d>c&&(s.left===!0&&a<0?t="left":s.right===!0&&a>0&&(t="right"))):s.down===!0&&u>0?(t="down",d>c&&(s.left===!0&&a<0?t="left":s.right===!0&&a>0&&(t="right"))):s.left===!0&&a<0?(t="left",d<c&&(s.up===!0&&u<0?t="up":s.down===!0&&u>0&&(t="down"))):s.right===!0&&a>0&&(t="right",d<c&&(s.up===!0&&u<0?t="up":s.down===!0&&u>0&&(t="down")));let i=!1;if(t===void 0&&o===!1){if(l.event.isFirst===!0||l.event.lastDir===void 0)return{};t=l.event.lastDir,i=!0,t==="left"||t==="right"?(n.left-=a,d=0,a=0):(n.top-=u,c=0,u=0)}return{synthetic:i,payload:{evt:e,touch:l.event.mouse!==!0,mouse:l.event.mouse===!0,position:n,direction:t,isFirst:l.event.isFirst,isFinal:o===!0,duration:Date.now()-l.event.time,distance:{x:d,y:c},offset:{x:a,y:u},delta:{x:n.left-l.event.lastX,y:n.top-l.event.lastY}}}}let sa=0;var xe=dt({name:"touch-pan",beforeMount(e,{value:l,modifiers:o}){if(o.mouse!==!0&&J.has.touch!==!0)return;function n(a,u){o.mouse===!0&&u===!0?vt(a):(o.stop===!0&&ye(a),o.prevent===!0&&De(a))}const t={uid:"qvtp_"+sa++,handler:l,modifiers:o,direction:Ae(o),noop:Te,mouseStart(a){Fe(a,t)&&ft(a)&&(re(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Fe(a,t)){const u=a.target;re(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,u){if(J.is.firefox===!0&&pe(e,!0),t.lastEvt=a,u===!0||o.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const s=a.type.indexOf("mouse")!==-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&De(s),a.cancelBubble===!0&&ye(s),Object.assign(s,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:s}}ye(a)}const{left:d,top:c}=ke(a);t.event={x:d,y:c,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:d,lastY:c}},move(a){if(t.event===void 0)return;const u=ke(a),d=u.left-t.event.x,c=u.top-t.event.y;if(d===0&&c===0)return;t.lastEvt=a;const s=t.event.mouse===!0,i=()=>{n(a,s);let v;o.preserveCursor!==!0&&o.preservecursor!==!0&&(v=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ct(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,v!==void 0&&(document.documentElement.style.cursor=v),document.body.classList.remove("non-selectable"),s===!0){const T=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{T(),h()},50):T()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&n(a,t.event.mouse);const{payload:v,synthetic:h}=_e(a,t,!1);v!==void 0&&(t.handler(v)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&i(),t.event.lastX=v.position.left,t.event.lastY=v.position.top,t.event.lastDir=h===!0?void 0:v.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||s===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){i(),t.event.detected=!0,t.move(a);return}const x=Math.abs(d),b=Math.abs(c);x!==b&&(t.direction.horizontal===!0&&x>b||t.direction.vertical===!0&&x<b||t.direction.up===!0&&x<b&&c<0||t.direction.down===!0&&x<b&&c>0||t.direction.left===!0&&x>b&&d<0||t.direction.right===!0&&x>b&&d>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,u){if(t.event!==void 0){if(be(t,"temp"),J.is.firefox===!0&&pe(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(_e(a===void 0?t.lastEvt:a,t).payload);const{payload:d}=_e(a===void 0?t.lastEvt:a,t,!0),c=()=>{t.handler(d)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,o.mouse===!0){const a=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";re(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}J.has.touch===!0&&re(t,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,l){const o=e.__qtouchpan;o!==void 0&&(l.oldValue!==l.value&&(typeof value!="function"&&o.end(),o.handler=l.value),o.direction=Ae(l.modifiers))},beforeUnmount(e){const l=e.__qtouchpan;l!==void 0&&(l.event!==void 0&&l.end(),be(l,"main"),be(l,"temp"),J.is.firefox===!0&&pe(e,!1),l.styleCleanup!==void 0&&l.styleCleanup(),delete e.__qtouchpan)}});const Re=150;var ua=D({name:"QDrawer",inheritAttrs:!1,props:{...kt,...Ot,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...St,"onLayout","miniState"],setup(e,{slots:l,emit:o,attrs:n}){const t=U(),{proxy:{$q:a}}=t,u=Qt(e,a),{preventBodyScroll:d}=Tt(),{registerTimeout:c,removeTimeout:s}=Dt(),i=te(ue,V);if(i===V)return console.error("QDrawer needs to be child of QLayout"),V;let x,b=null,v;const h=k(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),T=f(()=>e.mini===!0&&h.value!==!0),z=f(()=>T.value===!0?e.miniWidth:e.width),w=k(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),m=f(()=>e.persistent!==!0&&(h.value===!0||Ye.value===!0));function P(r,p){if(A(),r!==!1&&i.animate(),O(0),h.value===!0){const B=i.instances[ae.value];B!==void 0&&B.belowBreakpoint===!0&&B.hide(!1),H(1),i.isContainer.value!==!0&&d(!0)}else H(0),r!==!1&&me(!1);c(()=>{r!==!1&&me(!0),p!==!0&&o("show",r)},Re)}function y(r,p){Y(),r!==!1&&i.animate(),H(0),O(R.value*z.value),he(),p!==!0?c(()=>{o("hide",r)},Re):s()}const{show:$,hide:L}=$t({showing:w,hideOnRouteChange:m,handleShow:P,handleHide:y}),{addToHistory:A,removeFromHistory:Y}=zt(w,L,m),F={belowBreakpoint:h,hide:L},E=f(()=>e.side==="right"),R=f(()=>(a.lang.rtl===!0?-1:1)*(E.value===!0?1:-1)),Be=k(0),N=k(!1),ce=k(!1),Le=k(z.value*R.value),ae=f(()=>E.value===!0?"left":"right"),de=f(()=>w.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:z.value:0),fe=f(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(E.value?"R":"L")!==-1||a.platform.is.ios===!0&&i.isContainer.value===!0),K=f(()=>e.overlay===!1&&w.value===!0&&h.value===!1),Ye=f(()=>e.overlay===!0&&w.value===!0&&h.value===!1),Ke=f(()=>"fullscreen q-drawer__backdrop"+(w.value===!1&&N.value===!1?" hidden":"")),Je=f(()=>({backgroundColor:`rgba(0,0,0,${Be.value*.4})`})),Oe=f(()=>E.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),Ge=f(()=>E.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),Ze=f(()=>{const r={};return i.header.space===!0&&Oe.value===!1&&(fe.value===!0?r.top=`${i.header.offset}px`:i.header.space===!0&&(r.top=`${i.header.size}px`)),i.footer.space===!0&&Ge.value===!1&&(fe.value===!0?r.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(r.bottom=`${i.footer.size}px`)),r}),et=f(()=>{const r={width:`${z.value}px`,transform:`translateX(${Le.value}px)`};return h.value===!0?r:Object.assign(r,Ze.value)}),tt=f(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),at=f(()=>`q-drawer q-drawer--${e.side}`+(ce.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(N.value===!0?" no-transition":w.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${T.value===!0?"mini":"standard"}`+(fe.value===!0||K.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Oe.value===!0?" q-drawer--top-padding":""))),ot=f(()=>{const r=a.lang.rtl===!0?e.side:ae.value;return[[xe,it,void 0,{[r]:!0,mouse:!0}]]}),lt=f(()=>{const r=a.lang.rtl===!0?ae.value:e.side;return[[xe,Qe,void 0,{[r]:!0,mouse:!0}]]}),rt=f(()=>{const r=a.lang.rtl===!0?ae.value:e.side;return[[xe,Qe,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function ve(){st(h,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}q(h,r=>{r===!0?(x=w.value,w.value===!0&&L(!1)):e.overlay===!1&&e.behavior!=="mobile"&&x!==!1&&(w.value===!0?(O(0),H(0),he()):$(!1))}),q(()=>e.side,(r,p)=>{i.instances[p]===F&&(i.instances[p]=void 0,i[p].space=!1,i[p].offset=0),i.instances[r]=F,i[r].size=z.value,i[r].space=K.value,i[r].offset=de.value}),q(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&ve()}),q(()=>e.behavior+e.breakpoint,ve),q(i.isContainer,r=>{w.value===!0&&d(r!==!0),r===!0&&ve()}),q(i.scrollbarWidth,()=>{O(w.value===!0?0:void 0)}),q(de,r=>{M("offset",r)}),q(K,r=>{o("onLayout",r),M("space",r)}),q(E,()=>{O()}),q(z,r=>{O(),ge(e.miniToOverlay,r)}),q(()=>e.miniToOverlay,r=>{ge(r,z.value)}),q(()=>a.lang.rtl,()=>{O()}),q(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(nt(),i.animate())}),q(T,r=>{o("miniState",r)});function O(r){r===void 0?se(()=>{r=w.value===!0?0:z.value,O(R.value*r)}):(i.isContainer.value===!0&&E.value===!0&&(h.value===!0||Math.abs(r)===z.value)&&(r+=R.value*i.scrollbarWidth.value),Le.value=r)}function H(r){Be.value=r}function me(r){const p=r===!0?"remove":i.isContainer.value!==!0?"add":"";p!==""&&document.body.classList[p]("q-body--drawer-toggle")}function nt(){b!==null&&clearTimeout(b),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ce.value=!0,b=setTimeout(()=>{b=null,ce.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function it(r){if(w.value!==!1)return;const p=z.value,B=ie(r.distance.x,0,p);if(r.isFinal===!0){B>=Math.min(75,p)===!0?$():(i.animate(),H(0),O(R.value*p)),N.value=!1;return}O((a.lang.rtl===!0?E.value!==!0:E.value)?Math.max(p-B,0):Math.min(0,B-p)),H(ie(B/p,0,1)),r.isFirst===!0&&(N.value=!0)}function Qe(r){if(w.value!==!0)return;const p=z.value,B=r.direction===e.side,oe=(a.lang.rtl===!0?B!==!0:B)?ie(r.distance.x,0,p):0;if(r.isFinal===!0){Math.abs(oe)<Math.min(75,p)===!0?(i.animate(),H(1),O(0)):L(),N.value=!1;return}O(R.value*oe),H(ie(1-oe/p,0,1)),r.isFirst===!0&&(N.value=!0)}function he(){d(!1),me(!0)}function M(r,p){i.update(e.side,r,p)}function st(r,p){r.value!==p&&(r.value=p)}function ge(r,p){M("size",r===!0?e.miniWidth:p)}return i.instances[e.side]=F,ge(e.miniToOverlay,z.value),M("space",K.value),M("offset",de.value),e.showIfAbove===!0&&e.modelValue!==!0&&w.value===!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),Z(()=>{o("onLayout",K.value),o("miniState",T.value),x=e.showIfAbove===!0;const r=()=>{(w.value===!0?P:y)(!1,!0)};if(i.totalWidth.value!==0){se(r);return}v=q(i.totalWidth,()=>{v(),v=void 0,w.value===!1&&e.showIfAbove===!0&&h.value===!1?$(!1):r()})}),ee(()=>{v!==void 0&&v(),b!==null&&(clearTimeout(b),b=null),w.value===!0&&he(),i.instances[e.side]===F&&(i.instances[e.side]=void 0,M("size",0),M("offset",0),M("space",!1))}),()=>{const r=[];h.value===!0&&(e.noSwipeOpen===!1&&r.push(mt(S("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),ot.value)),r.push(Ve("div",{ref:"backdrop",class:Ke.value,style:Je.value,"aria-hidden":"true",onClick:L},void 0,"backdrop",e.noSwipeBackdrop!==!0&&w.value===!0,()=>rt.value)));const p=T.value===!0&&l.mini!==void 0,B=[S("div",{...n,key:""+p,class:[tt.value,n.class]},p===!0?l.mini():X(l.default))];return e.elevated===!0&&w.value===!0&&B.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Ve("aside",{ref:"content",class:at.value,style:et.value},B,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>lt.value)),S("div",{class:"q-drawer-container"},r)}}});const ca={class:"flex col q-px-sm"},da={class:"flex items-center justify-between",style:{width:"100%"}},fa=["src"],va={__name:"CartItem",props:{id:Number,title:String,imageUrl:String,price:Number},emits:["onClickRemove"],setup(e,{emit:l}){const o=l,n=f(()=>"/quasar_sneakers");return(t,a)=>(Q(),j(Ue,{class:"flex items-center q-py-md",style:{width:"100%"}},{default:C(()=>[_(Se,{src:e.imageUrl,alt:"",class:"q-px-xs",style:{width:"30%"}},null,8,["src"]),g("div",ca,[g("p",null,I(e.title),1),g("span",da,[g("b",null,I(e.price)+" rub.",1),g("img",{class:"q-mx-sm",onClick:a[0]||(a[0]=u=>o("onClickRemove")),src:n.value+"/close.svg",style:{width:"23px"}},null,8,fa)])])]),_:1}))}},ma={__name:"CartItemList",setup(e){const{mycart:l,removeFromCart:o}=te("mycart"),n=f(()=>"/quasar_sneakers");return(t,a)=>(Q(),j(je,{class:"flex q-gutter-sm"},{default:C(()=>[(Q(!0),G(ht,null,gt(Ee(l),u=>(Q(),j(va,{key:u.id,title:u.title,price:u.price,"image-url":n.value+"/"+u.imageUrl,onOnClickRemove:()=>Ee(o)(u)},null,8,["title","price","image-url","onOnClickRemove"]))),128))]),_:1}))}},ha={style:{height:"100%"},class:"q-pa-md q-gutter-md"},ga={class:"flex items-center q-gutter-md"},pa={key:0,class:"flex col q-mt-lg"},ya=g("span",null,"\u0418\u0442\u043E\u0433\u043E: ",-1),ba=g("div",{class:"flex-1"},null,-1),wa=g("span",null,"\u041D\u0430\u043B\u043E\u0433 (5%): ",-1),_a=g("div",{class:"flex-1"},null,-1),xa={key:0},qa=g("div",{class:"q-pa-md"},[g("b",{style:{"font-size":"1.5rem"}},"\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430\u044F"),g("p",{class:"text-grey-7"},"\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0445\u043E\u0442\u044F \u0431\u044B 1 \u043F\u0430\u0440\u0443 \u043A\u0440\u043E\u0441\u0441\u043E\u0432\u043E\u043A, \u0447\u0442\u043E\u0431\u044B \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437.")],-1),Ca={key:1},ka={class:"q-pa-md"},Sa=g("b",{style:{"font-size":"1.5rem"}},"\u0417\u0430\u043A\u0430\u0437 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D",-1),$a={class:"text-grey-7"},za={__name:"Drawer",props:{totalPrice:Number},emits:["close-drawer"],setup(e,{emit:l}){const o=k(!1),n=l;function t(){n("close-drawer")}const a=e,{mycart:u}=te("mycart"),d=k(!1),c=k(null),s=async()=>{try{d.value=!0;const{data:v}=await Vt.post("https://6e5e12b4bb07b2b5.mokky.dev/orders",{items:u.value,totalPrice:a.totalPrice});return u.value=[],c.value=v.id,v}catch(v){console.log(v)}finally{d.value=!1}},i=f(()=>u.value.length===0),x=f(()=>d.value||i.value),b=f(()=>"/quasar_sneakers");return q(o,v=>{console.log("Drawer open:",v)}),(v,h)=>(Q(),j(ua,{modelValue:o.value,"onUpdate:modelValue":h[0]||(h[0]=T=>o.value=T),side:"right",width:350,bordered:"",overlay:"","show-if-above":""},{default:C(()=>[g("div",ha,[g("div",ga,[_(Ht,{onClick:t,class:"cursor-pointer",name:"arrow_back",color:"grey-6",size:"1.3rem"}),_(Et,{class:"text-bold",style:{"font-size":"1.3rem"}},{default:C(()=>[Ce("\u041A\u043E\u0440\u0437\u0438\u043D\u0430")]),_:1})]),a.totalPrice?(Q(),G("div",pa,[_(ma),_(Pt,{style:{width:"100%"},class:"q-my-lg"},{default:C(()=>[_(W,{dense:"",class:"flex justify-between q-py-xs q-px-xs"},{default:C(()=>[ya,ba,g("b",null,I(a.totalPrice)+" rub.",1)]),_:1}),_(W,{dense:"",class:"flex justify-between q-py-xs q-px-xs"},{default:C(()=>[wa,_a,g("b",null,I((a.totalPrice*.05).toFixed(0))+" rub.",1)]),_:1}),_(We,{onClick:s,disabled:x.value,class:"bg-light-green-6 q-py-sm text-white text-bold q-mt-md",style:{width:"100%"}},{default:C(()=>[Ce("\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437")]),_:1},8,["disabled"])]),_:1})])):ne("",!0),a.totalPrice===0?(Q(),j(W,{key:1,class:"flex flex-center text-center items-center q-pa-xl",style:{height:"80%"}},{default:C(()=>[c.value?ne("",!0):(Q(),G("div",xa,[_(Se,{src:b.value+"/package-icon.png",height:"80px",width:"80px"},null,8,["src"]),qa])),c.value?(Q(),G("div",Ca,[_(Se,{src:b.value+"/order-success-icon.png",width:"80px"},null,8,["src"]),g("div",ka,[Sa,g("p",$a,"\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437 \u2116"+I(c.value)+" \u0441\u043A\u043E\u0440\u043E \u0431\u0443\u0434\u0435\u0442 \u043F\u0435\u0440\u0435\u0434\u0430\u043D \u043A\u0443\u0440\u044C\u0435\u0440\u0441\u043A\u043E\u0439 \u0441\u043B\u0443\u0436\u0431\u0435",1)])])):ne("",!0)]),_:1})):ne("",!0)])]),_:1},8,["modelValue"]))}},Ta={class:"bg-light-green-1"},Pa={class:"shadow-2 rounded-borders bg-white"},Ha={__name:"MainLayout",setup(e){const l=k(!1);function o(){console.log("Toggling Drawer"),l.value=!l.value,console.log(l.value)}const n=k([]),t=f(()=>n.value.reduce((d,c)=>d+c.price,0)),a=d=>{n.value.push(d),d.isAdded=!0},u=d=>{n.value.splice(n.value.indexOf(d),1),d.isAdded=!1};return q(n,()=>{localStorage.setItem("mycart",JSON.stringify(n.value))},{deep:!0}),ze("mycart",{mycart:n,addToCart:a,removeFromCart:u}),(d,c)=>{const s=Ie("router-view");return Q(),G("div",null,[g("div",Ta,[_(Nt,{view:"lHh lpr lFf",container:"",style:{height:"100vh"}},{default:C(()=>[_(za,{modelValue:l.value,"onUpdate:modelValue":c[0]||(c[0]=i=>l.value=i),onCloseDrawer:o,totalPrice:t.value,class:"z-index: 9999;position: fixed;"},null,8,["modelValue","totalPrice"]),g("div",Pa,[_(ra,{onToggleDrawer:o,totalPrice:t.value},null,8,["totalPrice"]),_(Mt,null,{default:C(()=>[_(s)]),_:1})])]),_:1})])])}}};export{Ha as default};
