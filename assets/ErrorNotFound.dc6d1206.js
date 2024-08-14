import{D as Z,W as I,F as ee,L as te,J as G,K as ne,b as o,g as J,c as ae,r as D,B as T,I as re,d as le,h as _,M as ue,f as ie,V as oe,s as se,N as ce,x as V,v as de}from"./index.52000ac3.js";import{c as fe,Q as z}from"./QIcon.86087727.js";import{v as ve,u as me,e as ge,a as be,Q as he}from"./vm.920e8b75.js";function ye(e,t=250){let l=!1,n;return function(){return l===!1&&(l=!0,setTimeout(()=>{l=!1},t),n=e.apply(this,arguments)),n}}function Q(e,t,l,n){l.modifiers.stop===!0&&G(e);const u=l.modifiers.color;let g=l.modifiers.center;g=g===!0||n===!0;const f=document.createElement("span"),d=document.createElement("span"),C=ne(e),{left:h,top:v,width:x,height:r}=t.getBoundingClientRect(),y=Math.sqrt(x*x+r*r),m=y/2,k=`${(x-y)/2}px`,i=g?k:`${C.left-h-m}px`,b=`${(r-y)/2}px`,P=g?b:`${C.top-v-m}px`;d.className="q-ripple__inner",fe(d,{height:`${y}px`,width:`${y}px`,transform:`translate3d(${i},${P},0) scale3d(.2,.2,1)`,opacity:0}),f.className=`q-ripple${u?" text-"+u:""}`,f.setAttribute("dir","ltr"),f.appendChild(d),t.appendChild(f);const w=()=>{f.remove(),clearTimeout(R)};l.abort.push(w);let R=setTimeout(()=>{d.classList.add("q-ripple__inner--enter"),d.style.transform=`translate3d(${k},${b},0) scale3d(1,1,1)`,d.style.opacity=.2,R=setTimeout(()=>{d.classList.remove("q-ripple__inner--enter"),d.classList.add("q-ripple__inner--leave"),d.style.opacity=0,R=setTimeout(()=>{f.remove(),l.abort.splice(l.abort.indexOf(w),1)},275)},250)},50)}function F(e,{modifiers:t,value:l,arg:n}){const u=Object.assign({},e.cfg.ripple,t,l);e.modifiers={early:u.early===!0,stop:u.stop===!0,center:u.center===!0,color:u.color||n,keyCodes:[].concat(u.keyCodes||13)}}var ke=Z({name:"ripple",beforeMount(e,t){const l=t.instance.$.appContext.config.globalProperties.$q.config||{};if(l.ripple===!1)return;const n={cfg:l,enabled:t.value!==!1,modifiers:{},abort:[],start(u){n.enabled===!0&&u.qSkipRipple!==!0&&u.type===(n.modifiers.early===!0?"pointerdown":"click")&&Q(u,e,n,u.qKeyEvent===!0)},keystart:ye(u=>{n.enabled===!0&&u.qSkipRipple!==!0&&I(u,n.modifiers.keyCodes)===!0&&u.type===`key${n.modifiers.early===!0?"down":"up"}`&&Q(u,e,n,!0)},300)};F(n,t),e.__qripple=n,ee(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const l=e.__qripple;l!==void 0&&(l.enabled=t.value!==!1,l.enabled===!0&&Object(t.value)===t.value&&F(l,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(l=>{l()}),te(t,"main"),delete e._qripple)}});const Y={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},pe=Object.keys(Y),qe={align:{type:String,validator:e=>pe.includes(e)}};function xe(e){return o(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${Y[t]}`})}function H(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function W(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function _e(e,t){for(const l in t){const n=t[l],u=e[l];if(typeof n=="string"){if(n!==u)return!1}else if(Array.isArray(u)===!1||u.length!==n.length||n.some((g,f)=>g!==u[f]))return!1}return!0}function U(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((l,n)=>l===t[n]):e.length===1&&e[0]===t}function Ee(e,t){return Array.isArray(e)===!0?U(e,t):Array.isArray(t)===!0?U(t,e):e===t}function Le(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const l in e)if(Ee(e[l],t[l])===!1)return!1;return!0}const $e={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean};function Ce({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const l=J(),{props:n,proxy:u,emit:g}=l,f=ve(l),d=o(()=>n.disable!==!0&&n.href!==void 0),C=t===!0?o(()=>f===!0&&n.disable!==!0&&d.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):o(()=>f===!0&&d.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),h=o(()=>C.value===!0?P(n.to):null),v=o(()=>h.value!==null),x=o(()=>d.value===!0||v.value===!0),r=o(()=>n.type==="a"||x.value===!0?"a":n.tag||e||"div"),y=o(()=>d.value===!0?{href:n.href,target:n.target}:v.value===!0?{href:h.value.href,target:n.target}:{}),m=o(()=>{if(v.value===!1)return-1;const{matched:s}=h.value,{length:p}=s,E=s[p-1];if(E===void 0)return-1;const $=u.$route.matched;if($.length===0)return-1;const B=$.findIndex(W.bind(null,E));if(B!==-1)return B;const N=H(s[p-2]);return p>1&&H(E)===N&&$[$.length-1].path!==N?$.findIndex(W.bind(null,s[p-2])):B}),k=o(()=>v.value===!0&&m.value!==-1&&_e(u.$route.params,h.value.params)),i=o(()=>k.value===!0&&m.value===u.$route.matched.length-1&&Le(u.$route.params,h.value.params)),b=o(()=>v.value===!0?i.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":k.value===!0?` ${n.activeClass}`:"":"");function P(s){try{return u.$router.resolve(s)}catch{}return null}function w(s,{returnRouterError:p,to:E=n.to,replace:$=n.replace}={}){if(n.disable===!0)return s.preventDefault(),Promise.resolve(!1);if(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey||s.button!==void 0&&s.button!==0||n.target==="_blank")return Promise.resolve(!1);s.preventDefault();const B=u.$router[$===!0?"replace":"push"](E);return p===!0?B:B.then(()=>{}).catch(()=>{})}function R(s){if(v.value===!0){const p=E=>w(s,E);g("click",s,p),s.defaultPrevented!==!0&&p()}else g("click",s)}return{hasRouterLink:v,hasHrefLink:d,hasLink:x,linkTag:r,resolvedLink:h,linkIsActive:k,linkIsExactActive:i,linkClass:b,linkAttrs:y,getLink:P,navigateToRouterLink:w,navigateOnClick:R}}const X={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Be={xs:8,sm:10,md:14,lg:20,xl:24},we=["button","submit","reset"],Re=/[^\s]\/[^\s]/,Pe=["flat","outline","push","unelevated"];function Te(e,t){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t}const Se={...me,...$e,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Pe.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...qe.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},Oe={...Se,round:Boolean};function Ae(e){const t=ge(e,Be),l=xe(e),{hasRouterLink:n,hasLink:u,linkTag:g,linkAttrs:f,navigateOnClick:d}=Ce({fallbackTag:"button"}),C=o(()=>{const i=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},i,{padding:e.padding.split(/\s+/).map(b=>b in X?X[b]+"px":b).join(" "),minWidth:"0",minHeight:"0"}):i}),h=o(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),v=o(()=>e.disable!==!0&&e.loading!==!0),x=o(()=>v.value===!0?e.tabindex||0:-1),r=o(()=>Te(e,"standard")),y=o(()=>{const i={tabindex:x.value};return u.value===!0?Object.assign(i,f.value):we.includes(e.type)===!0&&(i.type=e.type),g.value==="a"?(e.disable===!0?i["aria-disabled"]="true":i.href===void 0&&(i.role="button"),n.value!==!0&&Re.test(e.type)===!0&&(i.type=e.type)):e.disable===!0&&(i.disabled="",i["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(i,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),i}),m=o(()=>{let i;e.color!==void 0?e.flat===!0||e.outline===!0?i=`text-${e.textColor||e.color}`:i=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(i=`text-${e.textColor}`);const b=e.round===!0?"round":`rectangle${h.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${r.value} q-btn--${b}`+(i!==void 0?" "+i:"")+(v.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),k=o(()=>l.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:m,style:C,innerClasses:k,attributes:y,hasLink:u,linkTag:g,navigateOnClick:d,isActionable:v}}const{passiveCapture:q}=ie;let S=null,O=null,A=null;var Me=ae({name:"QBtn",props:{...Oe,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:l}){const{proxy:n}=J(),{classes:u,style:g,innerClasses:f,attributes:d,hasLink:C,linkTag:h,navigateOnClick:v,isActionable:x}=Ae(e),r=D(null),y=D(null);let m=null,k,i=null;const b=o(()=>e.label!==void 0&&e.label!==null&&e.label!==""),P=o(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:C.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),w=o(()=>({center:e.round})),R=o(()=>{const a=Math.max(0,Math.min(100,e.percentage));return a>0?{transition:"transform 0.6s",transform:`translateX(${a-100}%)`}:{}}),s=o(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(x.value===!0){const a={onClick:E,onKeydown:$,onMousedown:N};if(n.$q.platform.has.touch===!0){const c=e.onTouchstart!==void 0?"":"Passive";a[`onTouchstart${c}`]=B}return a}return{onClick:T}}),p=o(()=>({ref:r,class:"q-btn q-btn-item non-selectable no-outline "+u.value,style:g.value,...d.value,...s.value}));function E(a){if(r.value!==null){if(a!==void 0){if(a.defaultPrevented===!0)return;const c=document.activeElement;if(e.type==="submit"&&c!==document.body&&r.value.contains(c)===!1&&c.contains(r.value)===!1){r.value.focus();const K=()=>{document.removeEventListener("keydown",T,!0),document.removeEventListener("keyup",K,q),r.value!==null&&r.value.removeEventListener("blur",K,q)};document.addEventListener("keydown",T,!0),document.addEventListener("keyup",K,q),r.value.addEventListener("blur",K,q)}}v(a)}}function $(a){r.value!==null&&(l("keydown",a),I(a,[13,32])===!0&&O!==r.value&&(O!==null&&M(),a.defaultPrevented!==!0&&(r.value.focus(),O=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("keyup",L,!0),r.value.addEventListener("blur",L,q)),T(a)))}function B(a){r.value!==null&&(l("touchstart",a),a.defaultPrevented!==!0&&(S!==r.value&&(S!==null&&M(),S=r.value,m=a.target,m.addEventListener("touchcancel",L,q),m.addEventListener("touchend",L,q)),k=!0,i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,k=!1},200)))}function N(a){r.value!==null&&(a.qSkipRipple=k===!0,l("mousedown",a),a.defaultPrevented!==!0&&A!==r.value&&(A!==null&&M(),A=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("mouseup",L,q)))}function L(a){if(r.value!==null&&!(a!==void 0&&a.type==="blur"&&document.activeElement===r.value)){if(a!==void 0&&a.type==="keyup"){if(O===r.value&&I(a,[13,32])===!0){const c=new MouseEvent("click",a);c.qKeyEvent=!0,a.defaultPrevented===!0&&re(c),a.cancelBubble===!0&&G(c),r.value.dispatchEvent(c),T(a),a.qKeyEvent=!0}l("keyup",a)}M()}}function M(a){const c=y.value;a!==!0&&(S===r.value||A===r.value)&&c!==null&&c!==document.activeElement&&(c.setAttribute("tabindex",-1),c.focus()),S===r.value&&(m!==null&&(m.removeEventListener("touchcancel",L,q),m.removeEventListener("touchend",L,q)),S=m=null),A===r.value&&(document.removeEventListener("mouseup",L,q),A=null),O===r.value&&(document.removeEventListener("keyup",L,!0),r.value!==null&&r.value.removeEventListener("blur",L,q),O=null),r.value!==null&&r.value.classList.remove("q-btn--active")}function j(a){T(a),a.qSkipRipple=!0}return le(()=>{M(!0)}),Object.assign(n,{click:a=>{x.value===!0&&E(a)}}),()=>{let a=[];e.icon!==void 0&&a.push(_(z,{name:e.icon,left:e.stack!==!0&&b.value===!0,role:"img"})),b.value===!0&&a.push(_("span",{class:"block"},[e.label])),a=be(t.default,a),e.iconRight!==void 0&&e.round===!1&&a.push(_(z,{name:e.iconRight,right:e.stack!==!0&&b.value===!0,role:"img"}));const c=[_("span",{class:"q-focus-helper",ref:y})];return e.loading===!0&&e.percentage!==void 0&&c.push(_("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[_("span",{class:"q-btn__progress-indicator fit block",style:R.value})])),c.push(_("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+f.value},a)),e.loading!==null&&c.push(_(oe,{name:"q-transition--fade"},()=>e.loading===!0?[_("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[_(he)])]:null)),ue(_(h.value,p.value,c),[[ke,P.value,void 0,w.value]])}}});const je={class:"fullscreen bg-blue text-white text-center q-pa-md flex flex-center"},Ne=V("div",{style:{"font-size":"30vh"}}," 404 ",-1),Ke=V("div",{class:"text-h2",style:{opacity:".4"}}," Oops. Nothing here... ",-1),ze=Object.assign({name:"ErrorNotFound"},{__name:"ErrorNotFound",setup(e){return(t,l)=>(se(),ce("div",je,[V("div",null,[Ne,Ke,de(Me,{class:"q-mt-xl",color:"white","text-color":"blue",unelevated:"",to:"/",label:"Go Home","no-caps":""})])]))}});export{ze as default};
