(function(t){function e(e){for(var s,l,n=e[0],r=e[1],c=e[2],u=0,m=[];u<n.length;u++)l=n[u],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&m.push(i[l][0]),i[l]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,n=1;n<a.length;n++){var r=a[n];0!==i[r]&&(s=!1)}s&&(o.splice(e--,1),t=l(l.s=a[0]))}return t}var s={},i={app:0},o=[];function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],r=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var d=r;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0025":function(t,e,a){},"0227":function(t,e,a){t.exports=a.p+"img/city-profile.3b3fb65f.jpg"},"0d3a":function(t,e,a){},"0d86":function(t,e,a){t.exports=a.p+"img/leaf2.3b1af9de.png"},"1c60":function(t,e,a){t.exports=a.p+"img/city.54f2f092.jpg"},2716:function(t,e,a){"use strict";a("bc06")},"30db":function(t,e,a){"use strict";a("0025")},"34d4":function(t,e,a){},"401b":function(t,e,a){t.exports=a.p+"img/studio-2.927b288c.jpg"},4363:function(t,e,a){t.exports=a.p+"img/studio-5.5505c23b.jpg"},4459:function(t,e,a){},4472:function(t,e,a){t.exports=a.p+"img/olu-eletu.15d2ebb3.jpg"},"496b":function(t,e,a){"use strict";a("0d3a")},"56d7":function(t,e,a){"use strict";a.r(e);a("e623"),a("e379"),a("5dc8"),a("37e1");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"material-kit"}},[a("div",{class:{"nav-open":t.NavbarStore.showNavbar}},[a("router-view",{attrs:{name:"header"}}),a("div",[a("router-view")],1),a("router-view",{attrs:{name:"footer"}})],1)])},o=[],l=a("2877"),n={},r=Object(l["a"])(n,i,o,!1,null,null,null),c=r.exports,d=a("8c4f"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("parallax",{staticClass:"page-header header-filter",style:t.headerStyle},[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item"},[a("div",{staticClass:"image-wrapper"},[a("img",{directives:[{name:"show",rawName:"v-show",value:t.leafShow,expression:"leafShow"}],staticClass:"leaf2",attrs:{src:t.leaf2,alt:"leaf2"}}),a("div",{staticClass:"brand"},[a("h1",[t._v("Welcome to HappyPet")])])])])])]),a("div",{staticClass:"section section-signup page-header",style:t.signupImage},[a("div",{staticClass:"container"},[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-size-33 md-medium-size-40 md-small-size-50 md-xsmall-size-70 mx-auto text-center"},[a("login-card",{attrs:{"header-color":"green"}},[a("h4",{staticClass:"card-title",attrs:{slot:"title"},slot:"title"},[t._v("Login")]),a("md-field",{staticClass:"md-form-group",attrs:{slot:"inputs"},slot:"inputs"},[a("md-icon",[t._v("face")]),a("label",[t._v("User ID")]),a("md-input",{model:{value:t.userid,callback:function(e){t.userid=e},expression:"userid"}})],1),a("md-field",{staticClass:"md-form-group",attrs:{slot:"inputs"},slot:"inputs"},[a("md-icon",[t._v("email")]),a("label",[t._v("Email...")]),a("md-input",{attrs:{type:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("md-field",{staticClass:"md-form-group",attrs:{slot:"inputs"},slot:"inputs"},[a("md-icon",[t._v("lock_outline")]),a("label",[t._v("Password...")]),a("md-input",{model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("md-button",{staticClass:"md-simple md-success md-lg",attrs:{slot:"footer",href:"#/Home"},slot:"footer"},[t._v(" Get Started ")]),a("md-button",{staticClass:"md-simple md-success md-lg",attrs:{slot:"footer",href:"#/register"},slot:"footer"},[t._v(" Register ")])],1)],1)])])])],1)},m=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeDropDown,expression:"closeDropDown"}],class:[{open:t.isOpen},{dropdown:"down"===t.direction},{dropup:"up"===t.direction}],on:{click:t.toggleDropDown}},[t._t("title",[a("a",{staticClass:"dropdown-toggle",attrs:{"data-toggle":"dropdown",href:"javascript:void(0)"}},[a("i",{class:t.icon}),a("p",[t._v(t._s(t.title))])])]),t._t("default")],2)},f=[],v={name:"drop-down",props:{direction:{type:String,default:"down"},multiLevel:{type:Boolean,default:!1},title:String,icon:String},data:function(){return{isOpen:!1}},methods:{toggleDropDown:function(){this.multiLevel?this.isOpen=!0:this.isOpen=!this.isOpen},closeDropDown:function(){this.isOpen=!1}}},g=v,h=Object(l["a"])(g,p,f,!1,null,null,null),b=h.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:t.styles},[t._t("default")],2)},y=[];function _(t,e,a){var s;return function(){var i=this,o=arguments;clearTimeout(s),s=setTimeout((function(){s=null,a||t.apply(i,o)}),e),a&&!s&&t.apply(i,o)}}var w,x={name:"parallax",data:function(){return{styles:{},debounceTimeout:6}},methods:{handleScroll:function(t){var e=t/3;this.styles={transform:"translate3d(0, ".concat(e,"px,0)")}},checkForParallax:function(t){var e=this,a=_((function(){return e.handleScroll(t)}),this.debounceTimeout);a()}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){if(window.innerWidth>991){var e=this.scrollY;t.checkForParallax(e)}}))}},k=x,S=Object(l["a"])(k,C,y,!1,null,null,null),P=S.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"pagination",class:t.paginationClass},[a("li",{staticClass:"page-item prev-page",class:{disabled:1===t.value,"no-arrows":t.noArrows}},[a("a",{staticClass:"page-link",attrs:{"aria-label":"Previous"},on:{click:t.prevPage}},[t.withText?[t._v("Prev")]:a("i",{staticClass:"fas fa-angle-double-left"})],2)]),t._l(t.range(t.minPage,t.maxPage),(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.value===e}},[a("a",{staticClass:"page-link",on:{click:function(a){return t.changePage(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item page-pre next-page",class:{disabled:t.value===t.totalPages,"no-arrows":t.noArrows}},[a("a",{staticClass:"page-link",attrs:{"aria-label":"Next"},on:{click:t.nextPage}},[t.withText?[t._v("Next")]:a("i",{staticClass:"fas fa-angle-double-right"})],2)])],2)},O=[],z=(a("caad"),a("a9e3"),{name:"pagination",props:{type:{type:String,default:"primary",validator:function(t){return["default","primary","danger","success","warning","info","rose"].includes(t)}},withText:Boolean,noArrows:Boolean,pageCount:{type:Number,default:0},perPage:{type:Number,default:10},total:{type:Number,default:0},value:{type:Number,default:1}},computed:{paginationClass:function(){return"pagination-".concat(this.type)},totalPages:function(){return this.pageCount>0?this.pageCount:this.total>0?Math.ceil(this.total/this.perPage):1},pagesToDisplay:function(){return this.totalPages>0&&this.totalPages<this.defaultPagesToDisplay?this.totalPages:this.defaultPagesToDisplay},minPage:function(){if(this.value>=this.pagesToDisplay){var t=Math.floor(this.pagesToDisplay/2),e=t+this.value;return e>this.totalPages?this.totalPages-this.pagesToDisplay+1:this.value-t}return 1},maxPage:function(){if(this.value>=this.pagesToDisplay){var t=Math.floor(this.pagesToDisplay/2),e=t+this.value;return e<this.totalPages?e:this.totalPages}return this.pagesToDisplay}},data:function(){return{defaultPagesToDisplay:5}},methods:{range:function(t,e){for(var a=[],s=t;s<=e;s++)a.push(s);return a},changePage:function(t){this.$emit("input",t)},nextPage:function(){this.value<this.totalPages&&this.$emit("input",this.value+1)},prevPage:function(){this.value>1&&this.$emit("input",this.value-1)}},watch:{perPage:function(){this.$emit("input",1)},total:function(){this.$emit("input",1)}}}),E=z,N=Object(l["a"])(E,j,O,!1,null,null,null),D=(N.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slider",class:["slider-"+t.type],attrs:{disabled:t.disabled}})}),T=[],$=(a("a623"),a("5530")),I=a("e9fa"),A=a.n(I),M={name:"slider",props:{value:[String,Array,Number],disabled:Boolean,start:{type:[Number,Array],default:0},connect:{type:[Boolean,Array],default:function(){return[!0,!1]}},range:{type:Object,default:function(){return{min:0,max:100}}},type:{type:String,default:""},options:{type:Object,default:function(){return{}}}},data:function(){return{slider:null}},methods:{createSlider:function(){var t=this;A.a.create(this.$el,Object($["a"])({start:this.value||this.start,connect:this.connect,range:this.range},this.options));var e=this.$el.noUiSlider;e.on("slide",(function(){var a=e.get();a!==t.value&&t.$emit("input",a)}))}},mounted:function(){this.createSlider()},watch:{value:function(t,e){var a=this.$el.noUiSlider,s=a.get();t!==e&&s!==t&&(Array.isArray(s)&&Array.isArray(t)?e.length===t.length&&e.every((function(e,a){return e===t[a]}))&&a.set(t):a.set(t))}}},L=M,B=Object(l["a"])(L,D,T,!1,null,null,null),W=(B.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.tag,{tag:"component",staticClass:"badge",class:"badge-"+t.type},[t._t("default")],2)}),H=[],Y=(a("c975"),{name:"badge",props:{tag:{type:String,default:"span"},type:{type:String,default:"default",validator:function(t){var e=["primary","info","success","warning","danger","rose","default"];return-1!==e.indexOf(t)}}}}),F=Y,U=Object(l["a"])(F,W,H,!1,null,null,null),K=(U.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-card",{staticClass:"md-card-nav-tabs",class:{"no-label":t.noLabel,"md-card-plain":t.tabsPlain}},[a("md-card-content",[t._t("content")],2)],1)}),q=[],G={name:"nav-tabs-card",props:{noLabel:Boolean,tabsPlain:Boolean}},J=G,R=Object(l["a"])(J,K,q,!1,null,null,null),V=(R.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-card",{staticClass:"md-card-login",class:{"md-card-hidden":t.cardHidden}},[a("md-card-header",{class:t.getClass(t.headerColor)},[t._t("title"),a("div",{staticClass:"social-line"},[t._t("buttons")],2)],2),a("md-card-content",[t._t("description"),t._t("inputs")],2),a("md-card-actions",[t._t("footer")],2)],1)}),Q=[],X={name:"login-card",props:{headerColor:{type:String,default:""}},data:function(){return{cardHidden:!0}},beforeMount:function(){setTimeout(this.showCard,400)},methods:{showCard:function(){this.cardHidden=!1},getClass:function(t){return"md-card-header-"+t}}},Z=X,tt=Object(l["a"])(Z,V,Q,!1,null,null,null),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-card",{staticClass:"md-card-tabs",class:[{"flex-column":t.flexColumn},{"nav-pills-icons":t.navPillsIcons},{"md-card-plain":t.plain}]},[a("md-card-header",{attrs:{slot:"header-title"},slot:"header-title"}),a("md-card-content",[a("md-list",{staticClass:"nav-tabs"},t._l(t.tabName,(function(e,s){var i;return a("md-list-item",{key:e,class:[{active:t.isActivePanel(t.tabName[s])},(i={},i[t.getColorButton(t.colorButton)]=t.isActivePanel(t.tabName[s]),i)],on:{click:function(e){return t.switchPanel(t.tabName[s])}}},[t._v(" "+t._s(t.tabName[s])+" "),t.navPillsIcons?a("md-icon",[t._v(t._s(t.tabIcon[s]))]):t._e()],1)})),1),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("div",{staticClass:"tab-content"},t._l(t.tabName,(function(e,s){return t.isActivePanel(t.tabName[s])?a("div",{key:e,class:t.getTabContent(s+1)},[t._t(t.getTabContent(s+1),[t._v(" This is the default text! ")])],2):t._e()})),0)])],1)],1)},st=[],it={props:{flexColumn:Boolean,navPillsIcons:Boolean,plain:Boolean,tabName:Array,tabIcon:Array,colorButton:{type:String,default:""}},data:function(){return{activePanel:this.tabName[0]}},methods:{switchPanel:function(t){this.activePanel=t},isActivePanel:function(t){return this.activePanel==t},getColorButton:function(t){return"md-"+t},getTabContent:function(t){return"tab-pane-"+t}}},ot=it,lt=Object(l["a"])(ot,at,st,!1,null,null,null),nt=lt.exports,rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeModal,expression:"closeModal"}],staticClass:"modal-container"},[a("div",{staticClass:"modal-header"},[t._t("header")],2),a("div",{staticClass:"modal-body text-center"},[t._t("body")],2),a("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])])])},ct=[],dt={name:"modal",methods:{closeModal:function(){this.$emit("close")}}},ut=dt,mt=(a("30db"),Object(l["a"])(ut,rt,ct,!1,null,null,null)),pt=(mt.exports,{components:{LoginCard:et},name:"index",bodyClass:"index-page",props:{image:{type:String,default:a("cc1a")},leaf2:{type:String,default:a("0d86")},signup:{type:String,default:a("1c60")}},data:function(){return{firstname:null,email:null,password:null,leafShow:!1}},methods:{leafActive:function(){window.innerWidth<768?this.leafShow=!1:this.leafShow=!0}},computed:{headerStyle:function(){return{backgroundImage:"url(".concat(this.image,")")}},signupImage:function(){return{backgroundImage:"url(".concat(this.signup,")")}}},mounted:function(){this.leafActive(),window.addEventListener("resize",this.leafActive)},beforeDestroy:function(){window.removeEventListener("resize",this.leafActive)}}),ft=pt,vt=(a("ca9c"),Object(l["a"])(ft,u,m,!1,null,null,null)),gt=vt.exports,ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("parallax",{staticClass:"section page-header header-filter",style:t.headerStyle},[a("div",{staticClass:"container"},[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"},[a("h1",{staticClass:"title"},[t._v("Your Story Starts With Us.")]),a("h4",[t._v(" Every landing page needs a small description after the big bold title, that's why we added this text here. Add here all the information that can make you or your product create the first impression. ")]),a("br"),a("md-button",{staticClass:"md-success md-lg",attrs:{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",target:"_blank"}},[a("i",{staticClass:"fas fa-play"}),t._v(" Watch video")])],1)])])]),a("div",{staticClass:"main main-raised"},[a("div",{staticClass:"section"},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"features text-center"},[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-medium-size-33 md-small-size-100"},[a("div",{staticClass:"info"},[a("div",{staticClass:"icon icon-info"},[a("md-icon",[t._v("chat")])],1),a("h4",{staticClass:"info-title"},[t._v("Free Chat")]),a("p",[t._v(" Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough. ")])])]),a("div",{staticClass:"md-layout-item md-medium-size-33 md-small-size-100"},[a("div",{staticClass:"info"},[a("div",{staticClass:"icon icon-success"},[a("md-icon",[t._v("verified_user")])],1),a("h4",{staticClass:"info-title"},[t._v("Verified Users")]),a("p",[t._v(" Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough. ")])])]),a("div",{staticClass:"md-layout-item md-medium-size-33 md-small-size-100"},[a("div",{staticClass:"info"},[a("div",{staticClass:"icon icon-danger"},[a("md-icon",[t._v("fingerprint")])],1),a("h4",{staticClass:"info-title"},[t._v("Fingerprint")]),a("p",[t._v(" Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough. ")])])])])])])]),a("div",{staticClass:"section text-center"},[a("div",{staticClass:"container"},[a("h2",{staticClass:"title"},[t._v("Here is our team")]),a("div",{staticClass:"team"},[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-medium-size-33 md-small-size-100"},[a("div",{staticClass:"team-player"},[a("md-card",{staticClass:"md-card-plain"},[a("div",{staticClass:"md-layout-item md-size-50 mx-auto"},[a("img",{staticClass:"img-raised rounded-circle img-fluid",attrs:{src:t.teamImg1,alt:"Thumbnail Image"}})]),a("h4",{staticClass:"card-title"},[t._v(" Gigi Hadid "),a("br"),a("small",{staticClass:"card-description text-muted"},[t._v("Model")])]),a("md-card-content",[a("p",{staticClass:"card-description"},[t._v(" You can write here details about one of your team members. You can give more details about what they do. Feel free to add some "),a("a",{attrs:{href:"#"}},[t._v("links")]),t._v(" for people to be able to follow them outside the site. ")])]),a("md-card-actions",{staticClass:"text-center"},[a("md-button",{staticClass:"md-just-icon md-simple",attrs:{href:"javascript:void(0)"}},[a("i",{staticClass:"fab fa-twitter"})]),a("md-button",{staticClass:"md-just-icon md-simple",attrs:{href:"javascript:void(0)"}},[a("i",{staticClass:"fab fa-instagram"})]),a("md-button",{staticClass:"md-just-icon md-simple",attrs:{href:"javascript:void(0)"}},[a("i",{staticClass:"fab fa-facebook-square"})])],1)],1)],1)]),a("div",{staticClass:"md-layout-item md-medium-size-33 md-small-size-100"},[a("div",{staticClass:"team-player"},[a("md-card",{staticClass:"md-card-plain"},[a("div",{staticClass:"md-layout-item md-size-50 mx-auto"},[a("img",{staticClass:"img-raised rounded-circle img-fluid",attrs:{src:t.teamImg2,alt:"Thumbnail Image"}})]),a("h4",{staticClass:"card-title"},[t._v(" Carla Hortensia "),a("br"),a("small",{staticClass:"card-description text-muted"},[t._v("Designer")])]),a("md-card-content",[a("p",{staticClass:"card-description"},[t._v(" You can write here details about one of your team members. You can give more details about what they do. Feel free to add some "),a("a",{attrs:{href:"#"}},[t._v("links")]),t._v(" for people to be able to follow them outside the site. ")])]),a("md-card-actions",{staticClass:"text-center"},[a("md-button",{staticClass:"md-just-icon md-simple",attrs:{href:"javascript:void(0)"}},[a("i",{staticClass:"fab fa-twitter"})]),a("md-button",{staticClass:"md-just-icon md-simple",attrs:{href:"javascript:void(0)"}},[a("i",{staticClass:"fab fa-linkedin"})])],1)],1)],1)]),a("div",{staticClass:"md-layout-item md-medium-size-33 md-small-size-100"},[a("div",{staticClass:"team-player"},[a("md-card",{staticClass:"md-card-plain"},[a("div",{staticClass:"md-layout-item md-size-50 mx-auto"},[a("img",{staticClass:"img-raised rounded-circle img-fluid",attrs:{src:t.teamImg3,alt:"Thumbnail Image"}})]),a("h4",{staticClass:"card-title"},[t._v(" Kendall Jenner "),a("br"),a("small",{staticClass:"card-description text-muted"},[t._v("Model")])]),a("md-card-content",[a("p",{staticClass:"card-description"},[t._v(" You can write here details about one of your team members. You can give more details about what they do. Feel free to add some "),a("a",{attrs:{href:"#"}},[t._v("links")]),t._v(" for people to be able to follow them outside the site. ")])]),a("md-card-actions",{staticClass:"text-center"},[a("md-button",{staticClass:"md-just-icon md-simple",attrs:{href:"javascript:void(0)"}},[a("i",{staticClass:"fab fa-twitter"})]),a("md-button",{staticClass:"md-just-icon md-simple",attrs:{href:"javascript:void(0)"}},[a("i",{staticClass:"fab fa-instagram"})]),a("md-button",{staticClass:"md-just-icon md-simple",attrs:{href:"javascript:void(0)"}},[a("i",{staticClass:"fab fa-facebook-square"})])],1)],1)],1)])])])])]),a("div",{staticClass:"section section-contacts"},[a("div",{staticClass:"container"},[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-size-66 md-xsmall-size-100 mx-auto"},[a("h2",{staticClass:"text-center title"},[t._v("Work with us")]),a("h4",{staticClass:"text-center description"},[t._v(" Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours. ")]),a("form",{staticClass:"contact-form"},[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-size-50"},[a("md-field",[a("label",[t._v("Your Name")]),a("md-input",{attrs:{type:"text"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1),a("div",{staticClass:"md-layout-item md-size-50"},[a("md-field",[a("label",[t._v("Your Email")]),a("md-input",{attrs:{type:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1)]),a("md-field",{attrs:{maxlength:"5"}},[a("label",[t._v("Your Message")]),a("md-textarea",{model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-size-33 mx-auto text-center"},[a("md-button",{staticClass:"md-success"},[t._v("Send Message")])],1)])],1)])])])])])],1)},bt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"},[a("h2",{staticClass:"title text-center"},[t._v("Let's talk product")]),a("h5",{staticClass:"description"},[t._v(" This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more. ")])])])}],Ct={bodyClass:"landing-page",props:{header:{type:String,default:a("d4b8")},teamImg1:{type:String,default:a("a112")},teamImg2:{type:String,default:a("a023")},teamImg3:{type:String,default:a("c094")}},data:function(){return{name:null,email:null,message:null}},computed:{headerStyle:function(){return{backgroundImage:"url(".concat(this.header,")")}}}},yt=Ct,_t=(a("496b"),Object(l["a"])(yt,ht,bt,!1,null,"78511605",null)),wt=_t.exports,xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"section page-header header-filter",style:t.headerStyle},[a("div",{staticClass:"container"},[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"},[a("login-card",{attrs:{"header-color":"green"}},[a("h4",{staticClass:"card-title",attrs:{slot:"title"},slot:"title"},[t._v("Register")]),a("md-field",{staticClass:"md-form-group",attrs:{slot:"inputs"},slot:"inputs"},[a("md-icon",[t._v("face")]),a("label",[t._v("User ID")]),a("md-input",{model:{value:t.userid,callback:function(e){t.userid=e},expression:"userid"}})],1),a("md-field",{staticClass:"md-form-group",attrs:{slot:"inputs"},slot:"inputs"},[a("md-icon",[t._v("email")]),a("label",[t._v("Email...")]),a("md-input",{attrs:{type:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("md-field",{staticClass:"md-form-group",attrs:{slot:"inputs"},slot:"inputs"},[a("md-icon",[t._v("lock_outline")]),a("label",[t._v("Password...")]),a("md-input",{model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("md-field",{staticClass:"md-form-group",attrs:{slot:"inputs"},slot:"inputs"},[a("md-icon",[t._v("lock_outline")]),a("label",[t._v("Confirm Password...")]),a("md-input",{model:{value:t.confirmpassword,callback:function(e){t.confirmpassword=e},expression:"confirmpassword"}})],1),a("md-button",{staticClass:"md-simple md-success md-lg",attrs:{slot:"footer",href:"#/Home"},slot:"footer"},[t._v(" Get Started ")])],1)],1)])])])])},kt=[],St={components:{LoginCard:et},bodyClass:"login-page",data:function(){return{firstname:null,email:null,password:null}},props:{header:{type:String,default:a("5daa")}},computed:{headerStyle:function(){return{backgroundImage:"url(".concat(this.header,")")}}}},Pt=St,jt=Object(l["a"])(Pt,xt,kt,!1,null,null,null),Ot=jt.exports,zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("parallax",{staticClass:"section page-header header-filter",style:t.headerStyle}),a("div",{staticClass:"main main-raised"},[a("div",{staticClass:"section profile-content"},[a("div",{staticClass:"container"},[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-size-50 mx-auto"},[a("div",{staticClass:"profile"},[a("div",{staticClass:"avatar"},[a("img",{staticClass:"img-raised rounded-circle img-fluid",attrs:{src:t.img,alt:"Circle Image"}})]),a("div",{staticClass:"name"},[a("h3",{staticClass:"title"},[t._v("Carla Hortensia")]),a("h6",[t._v("Designer")]),a("md-button",{staticClass:"md-just-icon md-simple md-dribbble",attrs:{href:"javascript:void(0)"}},[a("i",{staticClass:"fab fa-dribbble"})]),a("md-button",{staticClass:"md-just-icon md-simple md-twitter",attrs:{href:"javascript:void(0)"}},[a("i",{staticClass:"fab fa-twitter"})]),a("md-button",{staticClass:"md-just-icon md-simple md-pinterest",attrs:{href:"javascript:void(0)"}},[a("i",{staticClass:"fab fa-pinterest"})])],1)])])]),t._m(0),a("div",{staticClass:"profile-tabs"},[a("tabs",{attrs:{"tab-name":["Studio","Work","Favorite"],"tab-icon":["camera","palette","favorite"],plain:"","nav-pills-icons":"","color-button":"success"}},[a("template",{slot:"tab-pane-1"},[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-size-25 ml-auto"},[a("img",{staticClass:"rounded",attrs:{src:t.tabPane1[0].image}}),a("img",{staticClass:"rounded",attrs:{src:t.tabPane1[1].image}})]),a("div",{staticClass:"md-layout-item md-size-25 mr-auto"},[a("img",{staticClass:"rounded",attrs:{src:t.tabPane1[3].image}}),a("img",{staticClass:"rounded",attrs:{src:t.tabPane1[2].image}})])])]),a("template",{slot:"tab-pane-2"},[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-size-25 ml-auto"},[a("img",{staticClass:"rounded",attrs:{src:t.tabPane2[0].image}}),a("img",{staticClass:"rounded",attrs:{src:t.tabPane2[1].image}}),a("img",{staticClass:"rounded",attrs:{src:t.tabPane2[2].image}})]),a("div",{staticClass:"md-layout-item md-size-25 mr-auto"},[a("img",{staticClass:"rounded",attrs:{src:t.tabPane2[3].image}}),a("img",{staticClass:"rounded",attrs:{src:t.tabPane2[4].image}})])])]),a("template",{slot:"tab-pane-3"},[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-size-25 ml-auto"},[a("img",{staticClass:"rounded",attrs:{src:t.tabPane3[0].image}}),a("img",{staticClass:"rounded",attrs:{src:t.tabPane3[1].image}})]),a("div",{staticClass:"md-layout-item md-size-25 mr-auto"},[a("img",{staticClass:"rounded",attrs:{src:t.tabPane3[2].image}}),a("img",{staticClass:"rounded",attrs:{src:t.tabPane3[3].image}}),a("img",{staticClass:"rounded",attrs:{src:t.tabPane3[4].image}})])])])],2)],1)])])])],1)},Et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"description text-center"},[a("p",[t._v(" An artist of considerable range, Chet Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. ")])])}],Nt={components:{Tabs:nt},bodyClass:"profile-page",data:function(){return{tabPane1:[{image:a("aa85")},{image:a("401b")},{image:a("abb9")},{image:a("4363")}],tabPane2:[{image:a("4472")},{image:a("5efa")},{image:a("dfe8")},{image:a("dd1d")},{image:a("8330")}],tabPane3:[{image:a("dd1d")},{image:a("f957")},{image:a("5efa")},{image:a("4472")},{image:a("aa85")}]}},props:{header:{type:String,default:a("0227")},img:{type:String,default:a("a023")}},computed:{headerStyle:function(){return{backgroundImage:"url(".concat(this.header,")")}}}},Dt=Nt,Tt=(a("2716"),Object(l["a"])(Dt,zt,Et,!1,null,"4e471c86",null)),$t=Tt.exports,It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-toolbar",{staticClass:"md-transparent md-absolute",class:t.extraNavClasses,attrs:{id:"toolbar","md-elevation":"0","color-on-scroll":t.colorOnScroll}},[a("div",{staticClass:"md-toolbar-row md-collapse-lateral"},[a("div",{staticClass:"md-toolbar-section-start"},[a("h3",{staticClass:"md-title"},[t._v("Welcome to HappyPet")])]),a("div",{staticClass:"md-toolbar-section-end"},[a("md-button",{staticClass:"md-just-icon md-simple md-toolbar-toggle",class:{toggled:t.toggledClass},on:{click:function(e){return t.toggleNavbarMobile()}}},[a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"})]),a("div",{staticClass:"md-collapse"},[a("div",{staticClass:"md-collapse-wrapper"},[a("mobile-menu",{attrs:{"nav-mobile-section-start":"false"}}),a("md-list",[t.showDownload?t._e():a("li",{staticClass:"md-list-item"},[a("a",{staticClass:"md-list-item-router md-list-item-container md-button-clean dropdown",attrs:{href:"javascript:void(0)"}},[a("div",{staticClass:"md-list-item-content"},[a("drop-down",{attrs:{direction:"down"}},[a("md-button",{staticClass:"md-button md-button-link md-white md-simple dropdown-toggle",attrs:{slot:"title","data-toggle":"dropdown"},slot:"title"},[a("i",{staticClass:"material-icons"},[t._v("menu")]),a("p",[t._v("MENU")])]),a("ul",{staticClass:"dropdown-menu dropdown-with-icons"},[a("li",[a("a",{attrs:{href:"#/landing"}},[a("i",{staticClass:"material-icons"},[t._v("home")]),a("p",[t._v("HOME")])])]),a("li",[a("a",{attrs:{href:"#/landing"}},[a("i",{staticClass:"material-icons"},[t._v("shop")]),a("p",[t._v("SHOP")])])]),a("li",[a("a",{attrs:{href:"#/"}},[a("i",{staticClass:"material-icons"},[t._v("logout")]),a("p",[t._v("Logout")])])])])],1)],1)])])])],1)])],1)])])},At=[],Mt=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return"true"===t.navMobileSectionStart?a("md-list",{staticClass:"nav-mobile-menu nav-mobile-section-start"},[t._t("default")],2):t._e()}),Lt=[],Bt={name:"mobile-menu",props:{navMobileSectionStart:{type:String,default:"false"}}},Wt=Bt,Ht=Object(l["a"])(Wt,Mt,Lt,!1,null,null,null),Yt=Ht.exports;function Ft(t){w||(w=setTimeout((function(){w=null,t()}),66))}var Ut={components:{MobileMenu:Yt},props:{type:{type:String,default:"white",validator:function(t){return["white","default","primary","danger","success","warning","info"].includes(t)}},colorOnScroll:{type:Number,default:0}},data:function(){return{extraNavClasses:"",toggledClass:!1}},computed:{showDownload:function(){var t=this,e=["landing","home"];return e.every((function(e){return e!==t.$route.name}))}},methods:{bodyClick:function(){var t=document.getElementById("bodyClick");if(null===t){var e=document.querySelector("body"),a=document.createElement("div");a.setAttribute("id","bodyClick"),e.appendChild(a);var s=document.getElementById("bodyClick");s.addEventListener("click",this.toggleNavbarMobile)}else t.remove()},toggleNavbarMobile:function(){this.NavbarStore.showNavbar=!this.NavbarStore.showNavbar,this.toggledClass=!this.toggledClass,this.bodyClick()},handleScroll:function(){var t=document.body.scrollTop||document.documentElement.scrollTop,e=document.getElementById("toolbar");this.currentScrollValue=t,this.colorOnScroll>0&&t>this.colorOnScroll?(this.extraNavClasses="md-".concat(this.type),e.classList.remove("md-transparent")):this.extraNavClasses&&(this.extraNavClasses="",e.classList.add("md-transparent"))},scrollListener:function(){Ft(this.handleScroll)},scrollToElement:function(){var t=document.getElementById("downloadSection");t&&t.scrollIntoView({block:"end",behavior:"smooth"})}},mounted:function(){document.addEventListener("scroll",this.scrollListener)},beforeDestroy:function(){document.removeEventListener("scroll",this.scrollListener)}},Kt=Ut,qt=Object(l["a"])(Kt,It,At,!1,null,null,null),Gt=qt.exports,Jt=function(){var t,e=this,a=e.$createElement,s=e._self._c||a;return s("footer",{staticClass:"footer",class:(t={},t["footer-"+e.type]=e.type,t),attrs:{"data-background-color":e.backgroundColor}},[s("div",{staticClass:"container"},[e._m(0),s("div",{staticClass:"copyright"},[e._v(" © "+e._s(e.year)+", made with "),s("md-icon",[e._v("favorite")]),e._v(" by "),s("a",{attrs:{href:"",target:"_blank"}},[e._v("Kagura Dance")]),e._v(" for CPE. ")],1)])])},Rt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("ul",[a("li",[a("a",{attrs:{href:""}},[t._v(" Kagura Dance ")])])])])}],Vt={props:{backgroundColor:String,type:String},data:function(){return{year:(new Date).getFullYear()}}},Qt=Vt,Xt=Object(l["a"])(Qt,Jt,Rt,!1,null,null,null),Zt=Xt.exports;s["default"].use(d["a"]);var te=new d["a"]({routes:[{path:"/",name:"index",components:{default:gt,header:Gt,footer:Zt},props:{header:{colorOnScroll:400},footer:{backgroundColor:"black"}}},{path:"/shop",name:"shop",components:{default:wt,header:Gt,footer:Zt},props:{header:{colorOnScroll:400},footer:{backgroundColor:"black"}}},{path:"/register",name:"register",components:{default:Ot,header:Gt,footer:Zt},props:{header:{colorOnScroll:400}}},{path:"/home",name:"home",components:{default:$t,header:Gt,footer:Zt},props:{header:{colorOnScroll:400},footer:{backgroundColor:"black"}}}],scrollBehavior:function(t){return t.hash?{selector:t.hash}:{x:0,y:0}}}),ee=a("43f9"),ae=a.n(ee),se=(a("51de"),a("60b6"),a("4459"),a("c7db")),ie={install:function(t){t.directive("click-outside",se["directive"])}},oe=ie,le={install:function(t){t.mixin({mounted:function(){var t=this.$options.bodyClass;t&&document.body.classList.add(t)},beforeDestroy:function(){var t=this.$options.bodyClass;t&&document.body.classList.remove(t)}})}},ne=le,re=a("e37d"),ce={install:function(t){t.component("drop-down",b),t.component(P.name,P),t.component("v-popover",re["a"])}},de=ce,ue=a("caf9"),me=a("0a63"),pe=a.n(me),fe={install:function(t){t.use(ae.a),t.use(oe),t.use(ne),t.use(de),t.use(pe.a),t.use(ue["a"],{observer:!0,observerOptions:{rootMargin:"0px",threshold:.1}})}};s["default"].config.productionTip=!1,s["default"].use(fe);var ve={showNavbar:!1};s["default"].mixin({data:function(){return{NavbarStore:ve}}}),new s["default"]({router:te,render:function(t){return t(c)}}).$mount("#app")},"5daa":function(t,e,a){t.exports=a.p+"img/profile_city.435c148e.jpg"},"5efa":function(t,e,a){t.exports=a.p+"img/clem-onojeghuo.23321ebf.jpg"},"60b6":function(t,e,a){},8330:function(t,e,a){t.exports=a.p+"img/clem-onojegaw.8f92b88b.jpg"},a023:function(t,e,a){t.exports=a.p+"img/christian.8c64339c.jpg"},a112:function(t,e,a){t.exports=a.p+"img/avatar.cc93a967.jpg"},aa85:function(t,e,a){t.exports=a.p+"img/studio-1.bd90b5d1.jpg"},abb9:function(t,e,a){t.exports=a.p+"img/studio-4.5bea741d.jpg"},bc06:function(t,e,a){},c094:function(t,e,a){t.exports=a.p+"img/kendall.5a0e395b.jpg"},ca9c:function(t,e,a){"use strict";a("34d4")},cc1a:function(t,e,a){t.exports=a.p+"img/vue-mk-header.98fb6ce8.jpg"},d4b8:function(t,e,a){t.exports=a.p+"img/bg7.2be2ff95.jpg"},dd1d:function(t,e,a){t.exports=a.p+"img/mariya-georgieva.66c8b404.jpg"},dfe8:function(t,e,a){t.exports=a.p+"img/cynthia-del-rio.f7c4b2dd.jpg"},f957:function(t,e,a){t.exports=a.p+"img/studio-3.3f242763.jpg"}});
//# sourceMappingURL=app.95e957ec.js.map