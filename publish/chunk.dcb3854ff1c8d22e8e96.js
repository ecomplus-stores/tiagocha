(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{228:function(t,i,o){var e=o(234);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,o(172).default)("6cc07505",e,!0,{})},230:function(t,i,o){"use strict";var e={name:"ABackdrop",props:{isVisible:{type:Boolean,default:!0},zIndexOnShow:{type:Number,default:1080},transitionMs:{type:Number,default:150}},data:()=>({opacity:0,zIndex:null,top:null}),computed:{style(){const{top:t,zIndex:i,transitionMs:o,opacity:e}=this;return{top:t,transition:`opacity ${o}ms linear`,opacity:e,zIndex:i}}},methods:{hide(){this.$emit("update:is-visible",!1),this.$emit("hide")},lockBodyScroll(){document.body.style.maxWidth=`${document.body.offsetWidth}px`,document.body.style.overflow="hidden"}},watch:{isVisible(t){t?(this.opacity=null,this.lockBodyScroll()):(this.opacity=0,document.body.style.overflow=document.body.style.maxWidth=null)},opacity(t){0===t?setTimeout((()=>{this.top=this.zIndex=null}),this.transitionMs):(this.zIndex=this.zIndexOnShow,this.top=0)}},mounted(){this.isVisible&&(setTimeout((()=>{this.opacity=null}),this.transitionMs),this.lockBodyScroll())}},s=(o(233),o(51)),a=Object(s.a)(e,(function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{staticClass:"backdrop",style:t.style,on:{click:t.hide}})}),[],!1,null,null,null);i.a=a.exports},233:function(t,i,o){"use strict";o(228)},234:function(t,i,o){(i=o(171)(!1)).push([t.i,".backdrop{position:fixed;top:-100vh;left:0;width:100vw;height:100vh;background-color:var(--dark);opacity:.65;cursor:pointer;z-index:-100}",""]),t.exports=i},236:function(t,i,o){"use strict";var e=o(27),s=o(42),a={name:"AAlert",props:{canShow:{type:Boolean,default:!0},variant:{type:String,default:"warning"}},data:()=>({count:1}),computed:{i19close:()=>Object(s.a)(e.J)},watch:{canShow(t){t&&this.count++}}},n=o(51),r=Object(n.a)(a,(function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",[o("transition",{attrs:{"enter-active-class":"animated fadeInDown fast"}},[t.canShow?o("div",{key:t.count},[t._m(0)]):t._e()])],1)}),[function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"alert alert-dismissible fade show",class:"alert-"+t.variant,attrs:{role:"alert"}},[t._t("default"),o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":t.i19close},on:{click:function(i){return t.$emit("dismiss")}}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])],2)}],!1,null,null,null);i.a=r.exports},265:function(t,i,o){var e=o(311);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,o(172).default)("5ba7bbf2",e,!0,{})},310:function(t,i,o){"use strict";o(265)},311:function(t,i,o){(i=o(171)(!1)).push([t.i,".login-modal__box{z-index:1090;position:fixed;top:0;left:0;width:100vw;box-sizing:border-box;border-radius:0}@media (min-width:410px){.login-modal__box{width:400px;left:50%;margin-left:-200px;top:var(--spacer-4);border-radius:var(--border-radius)}}@media (min-height:400px){.login-modal__box{top:15%}}.login-modal .alert{margin-bottom:var(--spacer-3)}.login-modal__logout{margin-top:var(--spacer-3)}.login-modal__btn{color:#fff;text-align:left;line-height:var(--line-height-lg);padding:.7rem;min-width:15rem}.login-modal__btn:hover{color:#fff}.login-modal__btn:focus{box-shadow:none}.login-modal__btn--facebook{background:#3b5999;border-color:#2f4d8a}.login-modal__btn--facebook:hover{background:#274480;border-color:#274480}.login-modal__btn--google{background:#cb4023;border-color:#be3419}.login-modal__btn--google:hover{background:#c1361a;border-color:#c1361a}.login-modal__btn--windowslive{background:#329ffc;border-color:#2996f2}.login-modal__btn--windowslive:hover{background:#1f8ce9;border-color:#1f8ce9}.login-modal__btn-icon{display:inline-block;width:1.4rem;text-align:center;margin-right:var(--spacer-1)}.login-modal__back{display:block;padding-left:.3rem;padding-right:.3rem}.login-modal__back:focus{box-shadow:none}.login-modal__visitor-info{font-size:var(--font-size-sm);margin-top:var(--spacer-2);text-align:center;color:var(--text-muted)}",""]),t.exports=i},368:function(t,i,o){"use strict";o.r(i);var e=o(34),s=o(27),a=o(42),n=o(52),r=o(184),l=o(236),c=o(230),d={name:"LoginModal",components:{ALink:r.a,AAlert:l.a,ABackdrop:c.a},props:{isVisible:{type:Boolean,default:!0},getGreetingsMsg:Function,accountUrl:{type:String,default:"/app/#/account/"},ordersUrl:{type:String,default:"/app/#/account/orders"},ecomPassport:{type:Object,default:()=>n.a}},data:()=>({isLoading:!1,isWaitingPopup:!1,isLogged:!1,email:"",name:"",oauthProviders:[],isLoginForm:!1,hasLoginError:!1,hasNoProfileFound:!1}),computed:{i19close:()=>Object(a.a)(s.J),i19continueLoginOnPopup:()=>Object(a.a)(s.T),i19email:()=>Object(a.a)(s.hb),i19guestCheckoutMsg:()=>Object(a.a)(s.Ab),i19loginErrorMsg:()=>Object(a.a)(s.Tb),i19login:()=>Object(a.a)(s.Sb),i19logout:()=>Object(a.a)(s.Vb),i19myAccount:()=>Object(a.a)(s.cc),i19myOrders:()=>Object(a.a)(s.dc),i19noProfileFoundWithEmail:()=>Object(a.a)(s.lc),i19signInWith:()=>Object(a.a)(s.wd),i19signInWithAnotherEmail:()=>Object(a.a)(s.xd),i19signUpWith:()=>Object(a.a)(s.yd),greetings(){return"function"==typeof this.getGreetingsMsg?this.getGreetingsMsg(this.name):`${Object(a.a)(s.Cb)} ${this.name||Object(a.a)(s.Qd)}`}},methods:{hide(){this.$emit("update:is-visible",!1)},update(){const{checkLogin:t,getCustomerName:i}=this.ecomPassport;this.name=i(),this.isLogged=t(),this.email="",this.isWaitingPopup=!1},waitPromise(t){this.isLoading=!0,t.catch(console.error).finally((()=>{this.isLoading=!1}))},setOauthProviders(){const t=this.ecomPassport.fetchOauthProviders().then((({host:t,baseUri:i,oauthPath:o,providers:e})=>{const s=[];for(const a in e)if(e[a]){const{faIcon:n,providerName:r}=e[a];s.push({link:t+i+a+o,faIcon:n,provider:a,providerName:r})}this.oauthProviders=s})).catch((t=>{throw this.presetOauthProviders(),t}));return this.waitPromise(t),t},presetOauthProviders(){this.oauthProviders=[{faIcon:"fa-facebook-f",providerName:"Facebook",provider:"facebook"},{faIcon:"fa-google",providerName:"Google",provider:"google"},{faIcon:"fa-windows",providerName:"Windows",provider:"windowslive"}]},openOauthPopup(t,i){if(this.hasLoginError=!1,t)this.ecomPassport.popupOauthLink(t),this.isWaitingPopup=!0;else{const t=this.setOauthProviders().then((()=>{const t=this.oauthProviders.find((t=>t.provider===i));this.openOauthPopup(t,i)})).catch((t=>{throw this.hasLoginError=!0,t}));this.waitPromise(t)}},submitEmail(){this.isLoginForm=!1;const t=this.ecomPassport.fetchLogin(this.email).catch((t=>{const{response:i}=t;if(!i||403!==i.status)throw setTimeout((()=>{this.hasLoginError=!0}),100),t;this.hasNoProfileFound=!0}));this.waitPromise(t)},logout(){this.ecomPassport.logout()}},watch:{hasNoProfileFound(t){!1===t&&(this.email=""),this.isLoginForm=!t},isLoginForm(t){this.hasLoginError=!1,t&&(this.isWaitingPopup=!1,this.$nextTick((()=>{setTimeout((()=>{this.$refs.input.focus()}),200)})))}},mounted(){["login","logout"].forEach((t=>{this.ecomPassport.on(t,(i=>{this.update(),this.$emit(t,i)}))})),this.update(),this.setOauthProviders()}},u=(o(310),o(51)),p=Object(u.a)(d,(function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"login-modal"},[o("a-backdrop",{attrs:{"is-visible":t.isVisible},on:{hide:t.hide}}),o("transition",{attrs:{"enter-active-class":"animated zoomIn","leave-active-class":"animated fadeOutUp slow"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.isVisible,expression:"isVisible"}],staticClass:"login-modal__box card"},[t._t("header",(function(){return[o("div",{staticClass:"login-modal__header card-header"},[t._v(" "+t._s(t.greetings)+" "),o("button",{staticClass:"close",attrs:{type:"button","aria-label":t.i19close},on:{click:t.hide}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])]})),o("div",{staticClass:"login-modal__body card-body"},[t.hasLoginError?o("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[t._v(" "+t._s(t.i19loginErrorMsg)+" ")]):t._e(),o("transition-group",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated position-absolute fadeOut faster"}},[t.isLoading?o("div",{key:"waiting"},[o("div",{staticClass:"spinner-border m-3",attrs:{role:"status"}},[o("span",{staticClass:"sr-only"},[t._v("Loading...")])])]):t.isLogged?o("div",{key:"logged"},[o("div",{staticClass:"list-group list-group-flush"},[o("a-link",{staticClass:"list-group-item list-group-item-action",attrs:{href:t.ordersUrl}},[t._v(" "+t._s(t.i19myOrders)+" ")]),o("a-link",{staticClass:"list-group-item list-group-item-action",attrs:{href:t.accountUrl}},[t._v(" "+t._s(t.i19myAccount)+" ")])],1),o("button",{staticClass:"login-modal__logout btn btn-block btn-danger",attrs:{type:"button"},on:{click:t.logout}},[o("i",{staticClass:"fas fa-sign-out-alt"}),t._v(" "+t._s(t.i19logout)+" ")])]):t.isLoginForm?o("div",{key:"form"},[o("form",{on:{submit:function(i){return i.preventDefault(),t.submitEmail.apply(null,arguments)}}},[o("div",{staticClass:"form-group"},[o("button",{staticClass:"login-modal__back btn",attrs:{type:"button"},on:{click:function(i){t.isLoginForm=!1}}},[o("i",{staticClass:"fas fa-arrow-left"})]),o("label",{attrs:{for:"login-modal-email"}},[t._v(" "+t._s(t.i19signInWith+" "+t.i19email)+" ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],ref:"input",staticClass:"form-control",attrs:{type:"email",id:"login-modal-email",placeholder:"email@mail.com",required:""},domProps:{value:t.email},on:{input:function(i){i.target.composing||(t.email=i.target.value)}}})]),o("button",{staticClass:"btn btn-block btn-primary",attrs:{type:"submit"}},[t._v(" "+t._s(t.i19login)+" ")])])]):o("div",{key:"oauth"},[!t.isWaitingPopup&&t.hasNoProfileFound?o("div",{staticClass:"alert alert-info",attrs:{role:"alert"}},[t._v(" "+t._s(t.i19noProfileFoundWithEmail)+" "),o("b",[t._v(t._s(t.email))]),t._v(". "),o("br"),o("a",{staticClass:"alert-link",attrs:{href:"#"},on:{click:function(i){i.preventDefault(),t.hasNoProfileFound=!1}}},[t._v(" "+t._s(t.i19signInWithAnotherEmail)+" ")])]):t._e(),o("a-alert",{attrs:{"can-show":t.isWaitingPopup,variant:"info"}},[t._v(" "+t._s(t.i19continueLoginOnPopup)+". ")]),t._l(t.oauthProviders,(function(i){var e=i.link,s=i.faIcon,a=i.providerName,n=i.provider;return o("button",{key:n,staticClass:"login-modal__btn btn btn-block",class:"login-modal__btn--"+n,attrs:{type:"button"},on:{click:function(i){return t.openOauthPopup(e,n)}}},[o("span",{staticClass:"login-modal__btn-icon"},[o("i",{class:"fab "+s})]),t._v(" "+t._s(t.hasNoProfileFound?t.i19signUpWith:t.i19signInWith)+" "+t._s(a)+" ")])})),t.hasNoProfileFound?o("div",{staticClass:"login-modal__visitor-info"},[t._v(" "+t._s(t.i19guestCheckoutMsg)+" ")]):o("button",{key:"email",staticClass:"login-modal__btn btn btn-block btn-secondary",attrs:{type:"button"},on:{click:function(i){t.isLoginForm=!0}}},[o("span",{staticClass:"login-modal__btn-icon"},[o("i",{staticClass:"fas fa-envelope"})]),t._v(" "+t._s(t.i19signInWith+" "+t.i19email)+" ")])],2)])],1)],2)])],1)}),[],!1,null,null,null).exports;i.default=(t={},i="login-modal",o="user-button")=>{const s=document.getElementById(i),a=document.getElementById(o);if(s&&a){const o=window.storefront&&window.storefront.getScopedSlots;new e.a({data:{isVisible:!1},created(){a.addEventListener("click",(t=>{t.preventDefault(),this.isVisible=!0}))},render(e){const a=this;return e(p,{attrs:{id:i},props:{...t.props,isVisible:a.isVisible},on:{"update:is-visible"(t){a.isVisible=t}},scopedSlots:"function"==typeof o?o(s,e):void 0})}}).$mount(s)}}}}]);
//# sourceMappingURL=chunk.dcb3854ff1c8d22e8e96.js.map