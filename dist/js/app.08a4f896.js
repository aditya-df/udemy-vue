(function(e){function t(t){for(var r,c,i=t[0],s=t[1],u=t[2],d=0,l=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&l.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(l.length)l.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},c={app:0},o={app:0},a=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-11199ee9":"5fc1a750","chunk-3571e1c3":"2d1ab5ae","chunk-3fbcdb4e":"8a776d0a","chunk-6bcfedda":"28168a0d"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-11199ee9":1,"chunk-3571e1c3":1,"chunk-6bcfedda":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-11199ee9":"29c99deb","chunk-3571e1c3":"af76c2ea","chunk-3fbcdb4e":"31d6cfe0","chunk-6bcfedda":"c58a0605"}[e]+".css",o=s.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var u=a[i],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===o))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],d=u.getAttribute("data-href");if(d===r||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete c[e],f.parentNode.removeChild(f),n(a)},f.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){c[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=a);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=i(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",l.name="ChunkLoadError",l.type=r,l.request=c,n[1](l)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0584":function(e,t,n){"use strict";n("9b78")},1432:function(e,t,n){"use strict";n("3f4c")},3131:function(e,t,n){},"3ec8":function(e,t,n){"use strict";n("cf1f")},"3f4c":function(e,t,n){},"4cc9":function(e,t,n){"use strict";n("d8e2")},"4ef0":function(e,t,n){"use strict";n("608e")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d3b7"),n("3ca3"),n("ddb0");var r=n("7a23"),c=n("6c02"),o={class:"controls"},a=Object(r["j"])("Refresh"),i=Object(r["j"])("Register as Coach"),s=Object(r["j"])("Log In to Register as Coach"),u={key:0},d={key:1},l={key:2};function f(e,t,n,c,f,b){var h=Object(r["D"])("base-dialog"),j=Object(r["D"])("coach-filter"),p=Object(r["D"])("base-button"),O=Object(r["D"])("base-spinner"),m=Object(r["D"])("coach-item"),g=Object(r["D"])("base-card");return Object(r["v"])(),Object(r["h"])("div",null,[Object(r["k"])(h,{show:!!f.error,title:"Error Occured",onClose:b.handleError},{default:Object(r["L"])((function(){return[Object(r["i"])("p",null,Object(r["G"])(f.error),1)]})),_:1},8,["show","onClose"]),Object(r["i"])("section",null,[Object(r["k"])(j,{onChangeFilter:b.setFilters},null,8,["onChangeFilter"])]),Object(r["i"])("section",null,[Object(r["k"])(g,null,{default:Object(r["L"])((function(){return[Object(r["i"])("div",o,[Object(r["k"])(p,{mode:"outline",onClick:t[0]||(t[0]=function(e){return b.loadCoaches(!0)})},{default:Object(r["L"])((function(){return[a]})),_:1}),!b.isLoggedIn||b.isCoach||f.isLoading?b.isLoggedIn?Object(r["g"])("",!0):(Object(r["v"])(),Object(r["f"])(p,{key:1,link:"",to:"/auth?redirect=register"},{default:Object(r["L"])((function(){return[s]})),_:1})):(Object(r["v"])(),Object(r["f"])(p,{key:0,link:"",to:"/register"},{default:Object(r["L"])((function(){return[i]})),_:1}))]),f.isLoading?(Object(r["v"])(),Object(r["h"])("div",u,[Object(r["k"])(O)])):b.hasCoaches?(Object(r["v"])(),Object(r["h"])("ul",d,[(Object(r["v"])(!0),Object(r["h"])(r["a"],null,Object(r["B"])(b.filteredCoaches,(function(e){return Object(r["v"])(),Object(r["f"])(m,{key:e.id,id:e.id,firstName:e.firstName,lastName:e.lastName,rate:e.hourlyRate,areas:e.areas},null,8,["id","firstName","lastName","rate","areas"])})),128))])):(Object(r["v"])(),Object(r["h"])("h3",l,"have no coaches"))]})),_:1})])])}var b=n("c7eb"),h=n("1da1"),j=(n("4de4"),n("caad"),n("2532"),{class:"actions"}),p=Object(r["j"])("contact"),O=Object(r["j"])("View Details");function m(e,t,n,c,o,a){var i=Object(r["D"])("base-badge"),s=Object(r["D"])("base-button");return Object(r["v"])(),Object(r["h"])("li",null,[Object(r["i"])("h3",null,Object(r["G"])(a.fullName),1),Object(r["i"])("h4",null,"$"+Object(r["G"])(n.rate)+"/hour",1),Object(r["i"])("div",null,[(Object(r["v"])(!0),Object(r["h"])(r["a"],null,Object(r["B"])(n.areas,(function(e){return Object(r["v"])(),Object(r["f"])(i,{key:e,title:e,type:e},null,8,["title","type"])})),128))]),Object(r["i"])("div",j,[Object(r["k"])(s,{link:"",mode:"outline",to:a.coachContactLink},{default:Object(r["L"])((function(){return[p]})),_:1},8,["to"]),Object(r["k"])(s,{link:"",to:a.coachDetailLink},{default:Object(r["L"])((function(){return[O]})),_:1},8,["to"])])])}var g={props:["id","firstName","lastName","rate","areas"],computed:{fullName:function(){return this.firstName+" "+this.lastName},coachContactLink:function(){return this.$route.path+"/"+this.id+"/contact"},coachDetailLink:function(){return this.$route.path+"/"+this.id}}},v=(n("0584"),n("6b0d")),k=n.n(v);const w=k()(g,[["render",m],["__scopeId","data-v-680f39de"]]);var y=w,I=function(e){return Object(r["y"])("data-v-24ae8223"),e=e(),Object(r["w"])(),e},L=I((function(){return Object(r["i"])("h2",null,"Find Your Coach",-1)})),C={class:"filter-option"},_=I((function(){return Object(r["i"])("label",{for:"frontend"},"Frontend",-1)})),x={class:"filter-option"},F=I((function(){return Object(r["i"])("label",{for:"backend"},"Backend",-1)})),S={class:"filter-option"},q=I((function(){return Object(r["i"])("label",{for:"career"},"Career",-1)}));function A(e,t,n,c,o,a){var i=Object(r["D"])("base-card");return Object(r["v"])(),Object(r["f"])(i,null,{default:Object(r["L"])((function(){return[L,Object(r["i"])("span",C,[Object(r["i"])("input",{type:"checkbox",checked:"",id:"frontend",onChange:t[0]||(t[0]=function(){return a.setFilter&&a.setFilter.apply(a,arguments)})},null,32),_]),Object(r["i"])("span",x,[Object(r["i"])("input",{type:"checkbox",checked:"",id:"backend",onChange:t[1]||(t[1]=function(){return a.setFilter&&a.setFilter.apply(a,arguments)})},null,32),F]),Object(r["i"])("span",S,[Object(r["i"])("input",{type:"checkbox",checked:"",id:"career",onChange:t[2]||(t[2]=function(){return a.setFilter&&a.setFilter.apply(a,arguments)})},null,32),q])]})),_:1})}var E=n("ade3"),D=n("5530"),N={emits:["change-filter"],data:function(){return{filters:{frontend:!0,backend:!0,career:!0}}},methods:{setFilter:function(e){var t=e.target.id,n=e.target.checked,r=Object(D["a"])(Object(D["a"])({},this.filters),{},Object(E["a"])({},t,n));this.filters=r,this.$emit("change-filter",r)}}};n("cfb5");const T=k()(N,[["render",A],["__scopeId","data-v-24ae8223"]]);var $=T,R={data:function(){return{error:null,isLoading:!1,activeFilter:{frontend:!0,backend:!0,career:!0}}},computed:{isCoach:function(){return this.$store.getters["coaches/isCoach"]},filteredCoaches:function(){var e=this,t=this.$store.getters["coaches/coaches"];return t.filter((function(t){return!(!e.activeFilter.frontend||!t.areas.includes("frontend"))||(!(!e.activeFilter.backend||!t.areas.includes("backend"))||!(!e.activeFilter.career||!t.areas.includes("career")))}))},hasCoaches:function(){return!this.isLoading&&this.$store.getters["coaches/hasCoaches"]},isLoggedIn:function(){return this.$store.getters.isAuthenticate}},components:{CoachItem:y,CoachFilter:$},methods:{setFilters:function(e){this.activeFilter=e},loadCoaches:function(){var e=arguments,t=this;return Object(h["a"])(Object(b["a"])().mark((function n(){var r;return Object(b["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.length>0&&void 0!==e[0]&&e[0],t.isLoading=!0,n.prev=2,n.next=5,t.$store.dispatch("coaches/loadCoaches",{forcedRefresh:r});case 5:n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](2),t.error=n.t0.message||"Something went wrong";case 10:t.isLoading=!1;case 11:case"end":return n.stop()}}),n,null,[[2,7]])})))()},handleError:function(){this.error=null}},created:function(){this.loadCoaches()},mounted:function(){console.log(this.isCoach)}};n("4ef0");const U=k()(R,[["render",f],["__scopeId","data-v-663d0c16"]]);var M=U,P=function(e){return Object(r["y"])("data-v-4b9e81ec"),e=e(),Object(r["w"])(),e},B={class:"form-control"},V=P((function(){return Object(r["i"])("label",{for:"email"},"Your E-Mail",-1)})),G={class:"form-control"},J=P((function(){return Object(r["i"])("label",{for:"message"},"Message",-1)})),H={key:0,class:"errors"},z={class:"actions"},Y=Object(r["j"])("Send Message");function K(e,t,n,c,o,a){var i=Object(r["D"])("base-button");return Object(r["v"])(),Object(r["h"])("form",{onSubmit:t[2]||(t[2]=Object(r["N"])((function(){return a.submitForm&&a.submitForm.apply(a,arguments)}),["prevent"]))},[Object(r["i"])("div",B,[V,Object(r["M"])(Object(r["i"])("input",{type:"email",id:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.email=e})},null,512),[[r["J"],o.email,void 0,{trim:!0}]])]),Object(r["i"])("div",G,[J,Object(r["M"])(Object(r["i"])("textarea",{rows:"5",id:"message","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.message=e})},null,512),[[r["J"],o.message,void 0,{trim:!0}]])]),o.formIsValid?Object(r["g"])("",!0):(Object(r["v"])(),Object(r["h"])("p",H," Please enter a valid email and non-empty message. ")),Object(r["i"])("div",z,[Object(r["k"])(i,null,{default:Object(r["L"])((function(){return[Y]})),_:1})])],32)}n("ac1f"),n("5319");var W={data:function(){return{email:"",message:"",formIsValid:!0}},methods:{submitForm:function(){this.formIsValid=!0,""!==this.email&&this.email.includes("@")&&""!==this.message?(this.$store.dispatch("requests/contactCoach",{email:this.email,message:this.message,coachId:this.$route.params.id}),this.$router.replace("/coaches")):this.formIsValid=!1}}};n("df8a");const Q=k()(W,[["render",K],["__scopeId","data-v-4b9e81ec"]]);var X=Q;const Z={},ee=Z;var te=ee,ne=function(e){return Object(r["y"])("data-v-6e74c98e"),e=e(),Object(r["w"])(),e},re={class:"form-control"},ce=ne((function(){return Object(r["i"])("label",{for:"email"},"E - mail",-1)})),oe={class:"form-control"},ae=ne((function(){return Object(r["i"])("label",{for:"password"},"Password",-1)})),ie={key:0};function se(e,t,n,c,o,a){var i=Object(r["D"])("base-dialog"),s=Object(r["D"])("base-spinner"),u=Object(r["D"])("base-button"),d=Object(r["D"])("base-card");return Object(r["v"])(),Object(r["h"])("div",null,[Object(r["k"])(i,{show:!!o.error,title:"An error occured",onClose:a.handleError},{default:Object(r["L"])((function(){return[Object(r["i"])("p",null,Object(r["G"])(o.error),1)]})),_:1},8,["show","onClose"]),Object(r["k"])(i,{show:o.isLoading,title:"Authenticating...",fixed:""},{default:Object(r["L"])((function(){return[Object(r["k"])(s)]})),_:1},8,["show"]),Object(r["k"])(d,null,{default:Object(r["L"])((function(){return[Object(r["i"])("form",{onSubmit:t[2]||(t[2]=Object(r["N"])((function(){return a.submitForm&&a.submitForm.apply(a,arguments)}),["prevent"]))},[Object(r["i"])("div",re,[ce,Object(r["M"])(Object(r["i"])("input",{type:"email",id:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.email=e})},null,512),[[r["J"],o.email,void 0,{trim:!0}]])]),Object(r["i"])("div",oe,[ae,Object(r["M"])(Object(r["i"])("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.password=e})},null,512),[[r["J"],o.password,void 0,{trim:!0}]])]),o.formIsValid?Object(r["g"])("",!0):(Object(r["v"])(),Object(r["h"])("p",ie,"please enter a valid username and password")),Object(r["k"])(u,null,{default:Object(r["L"])((function(){return[Object(r["j"])(Object(r["G"])(a.submitButtonCaption),1)]})),_:1}),Object(r["k"])(u,{type:"button",mode:"flat",onClick:a.switchAuthMode},{default:Object(r["L"])((function(){return[Object(r["j"])(Object(r["G"])(a.switchButtonModeCaption),1)]})),_:1},8,["onClick"])],32)]})),_:1})])}var ue={data:function(){return{email:"",password:"",formIsValid:!0,mode:"login",isLoading:!1,error:null}},computed:{submitButtonCaption:function(){return"login"==this.mode?"Login":(console.log(this.mode),"Register")},switchButtonModeCaption:function(){return"login"==this.mode?"Register instead":"Login instead"}},methods:{submitForm:function(){var e=this;return Object(h["a"])(Object(b["a"])().mark((function t(){var n,r;return Object(b["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.formIsValid=!0,""!==e.email&&e.email.includes("@")&&!(e.password.length<6)){t.next=5;break}return console.log(e.email,e.password),e.formIsValid=!1,t.abrupt("return");case 5:if(e.isLoading=!0,n={email:e.email,password:e.password},t.prev=7,"login"!=e.mode){t.next=13;break}return t.next=11,e.$store.dispatch("logIn",n);case 11:t.next=15;break;case 13:return t.next=15,e.$store.dispatch("signUp",n);case 15:r="/"+(e.$route.query.redirect||"coaches"),e.$router.replace(r),t.next=23;break;case 19:t.prev=19,t.t0=t["catch"](7),console.log(t.t0.message),e.error=t.t0.message.toLowerCase()||"Failed to authenticate, try again";case 23:e.isLoading=!1;case 24:case"end":return t.stop()}}),t,null,[[7,19]])})))()},switchAuthMode:function(){"login"==this.mode?this.mode="register":this.mode="login"},handleError:function(){this.error=null}}};n("8047");const de=k()(ue,[["render",se],["__scopeId","data-v-6e74c98e"]]);var le=de,fe=n("5502"),be={registerCoach:function(e,t){e.coaches.push(t)},setCoaches:function(e,t){e.coaches=t},setFetchTimestamp:function(e){e.lastFetch=(new Date).getTime()}},he=(n("e9c4"),n("d9e2"),n("a4d3"),n("e01a"),{registerCoach:function(e,t){var n=e.rootGetters.userId,r={firstName:t.first,lastName:t.last,areas:t.areas,description:t.desc,hourlyRate:t.rate},c=e.rootGetters.token;fetch("https://vue-http-demo-6d20d-default-rtdb.asia-southeast1.firebasedatabase.app/coaches/".concat(n,".json?auth=")+c,{method:"PUT",body:JSON.stringify(r)}),r.id=n,e.commit("registerCoach",r)},loadCoaches:function(e,t){return Object(h["a"])(Object(b["a"])().mark((function n(){var r,c,o,a,i,s;return Object(b["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.forcedRefresh||e.getters.shouldUpdate){n.next=2;break}return n.abrupt("return",!1);case 2:return n.next=4,fetch("https://vue-http-demo-6d20d-default-rtdb.asia-southeast1.firebasedatabase.app/coaches.json");case 4:return r=n.sent,n.next=7,r.json();case 7:if(c=n.sent,r.ok){n.next=11;break}throw o=new Error(c.message||"Failed to fetch"),o;case 11:for(i in a=[],c)s={id:i,firstName:c[i].firstName,lastName:c[i].lastName,areas:c[i].areas,description:c[i].description,hourlyRate:c[i].hourlyRate},a.push(s);e.commit("setCoaches",a),e.commit("setFetchTimestamp");case 15:case"end":return n.stop()}}),n)})))()}}),je={coaches:function(e){return e.coaches},hasCoaches:function(e){return e.coaches&&e.coaches.length>0},isCoach:function(e,t,n,r){var c=t.coaches,o=r.userId;return c.some((function(e){return e.id===o}))},shouldUpdate:function(e){var t=e.lastFetch;if(!t)return!0;var n=(new Date).getTime();return(n-t)/1e3>60}},pe={namespaced:!0,state:function(){return{lastFetch:null,coaches:[]}},mutations:be,actions:he,getters:je},Oe={addRequest:function(e,t){e.requests.push(t)},setRequests:function(e,t){e.requests=t}},me=(n("b0c0"),{contactCoach:function(e,t){return Object(h["a"])(Object(b["a"])().mark((function n(){var r,c,o,a;return Object(b["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r={userEmail:t.email,message:t.message},n.next=3,fetch("https://vue-http-demo-6d20d-default-rtdb.asia-southeast1.firebasedatabase.app/requests/".concat(t.coachId,".json"),{method:"POST",body:JSON.stringify(r)});case 3:return c=n.sent,n.next=6,c.json();case 6:if(o=n.sent,c.ok){n.next=10;break}throw a=new Error(c.message||"Failed to send data."),a;case 10:r.id=o.name,r.coachId=t.coachId,e.commit("addRequest",r);case 13:case"end":return n.stop()}}),n)})))()},fetchRequests:function(e){return Object(h["a"])(Object(b["a"])().mark((function t(){var n,r,c,o,a,i,s,u;return Object(b["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.rootGetters.userId,r=e.rootGetters.token,t.next=4,fetch("https://vue-http-demo-6d20d-default-rtdb.asia-southeast1.firebasedatabase.app/requests/".concat(n,".json?auth=")+r);case 4:return c=t.sent,t.next=7,c.json();case 7:if(o=t.sent,c.ok){t.next=11;break}throw a=new Error(c.message||"Failed to fetch data."),a;case 11:for(s in i=[],o)u={id:s,coachId:n,userEmail:o[s].userEmail,message:o[s].message},i.push(u);e.commit("setRequests",i);case 14:case"end":return t.stop()}}),t)})))()}}),ge={requests:function(e,t,n,r){var c=r.userId;return e.requests.filter((function(e){return e.coachId===c}))},hasRequests:function(e,t){return t.requests&&t.requests.length>0}},ve={namespaced:!0,state:function(){return{requests:[]}},mutations:Oe,actions:me,getters:ge},ke=null,we={logIn:function(e,t){return Object(h["a"])(Object(b["a"])().mark((function n(){return Object(b["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",e.dispatch("auth",Object(D["a"])(Object(D["a"])({},t),{},{mode:"login"})));case 1:case"end":return n.stop()}}),n)})))()},signUp:function(e,t){return Object(h["a"])(Object(b["a"])().mark((function n(){return Object(b["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",e.dispatch("auth",Object(D["a"])(Object(D["a"])({},t),{},{mode:"signup"})));case 1:case"end":return n.stop()}}),n)})))()},auth:function(e,t){return Object(h["a"])(Object(b["a"])().mark((function n(){var r,c,o,a,i,s,u;return Object(b["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.mode,c="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBHAMlUfgEuVnlSNEeem8fqTRDI8xJOB3w","signup"==r&&(c="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBHAMlUfgEuVnlSNEeem8fqTRDI8xJOB3w"),n.next=5,fetch(c,{method:"POST",body:JSON.stringify({email:t.email,password:t.password,returnSecureToken:!0})});case 5:return o=n.sent,n.next=8,o.json();case 8:if(a=n.sent,o.ok){n.next=12;break}throw i=new Error(a.error.message||"Failed to authenticate."),i;case 12:s=1e3*+a.expiresIn,u=(new Date).getTime()+s,ke=setTimeout((function(){e.dispatch("autoLogout")}),s),localStorage.setItem("token",a.idToken),localStorage.setItem("userId",a.localId),localStorage.setItem("tokenExpiration",u),e.commit("setUser",{token:a.idToken,userId:a.localId});case 19:case"end":return n.stop()}}),n)})))()},tryLogin:function(e){var t=localStorage.getItem("token"),n=localStorage.getItem("userId"),r=localStorage.getItem("tokenExpiration"),c=+r-(new Date).getTime();c<0||(ke=setTimeout((function(){e.dispatch("autoLogout")}),c),t&&n&&e.commit("setUser",{token:localStorage.getItem("token"),userId:localStorage.getItem("userId")}))},logOut:function(e){localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("tokenExpiration"),clearTimeout(ke),e.commit("setUser",{token:null,userId:null})},autoLogout:function(e){e.dispatch("logOut"),e.commit("setAutoLogout")}},ye={userId:function(e){return e.userId},token:function(e){return e.token},isAuthenticate:function(e){return!!e.token},didAutoLogout:function(e){return e.didAutoLogout}},Ie={setUser:function(e,t){e.token=t.token,e.userId=t.userId,e.didAutoLogout=!1},setAutoLogout:function(e){e.didAutoLogout=!0}},Le={state:function(){return{userId:null,token:null,didAutoLogout:!1}},getters:ye,mutations:Ie,actions:we},Ce=Object(fe["a"])({modules:{coaches:pe,requests:ve,auth:Le}}),_e=Ce,xe=function(){return n.e("chunk-3fbcdb4e").then(n.bind(null,"591c"))},Fe=function(){return n.e("chunk-6bcfedda").then(n.bind(null,"f7b3"))},Se=function(){return n.e("chunk-11199ee9").then(n.bind(null,"416f"))},qe=Object(c["a"])({history:Object(c["b"])(),routes:[{path:"/",redirect:"/coaches"},{path:"/coaches",component:M},{path:"/coaches/:id",component:xe,props:!0,children:[{path:"contact",component:X}]},{path:"/register",component:Fe,meta:{requiredAuth:!0,notCoach:!0}},{path:"/requests",component:Se,meta:{requiredAuth:!0}},{path:"/auth",component:le,meta:{requiredUnauth:!0}},{path:"/:notFound(.*)",component:te}]});qe.beforeEach((function(e,t,n){e.meta.requiredAuth&&!_e.getters.isAuthenticate?n("/auth"):e.meta.requiredUnauth&&_e.getters.isAuthenticate?n("/coaches"):n()}));var Ae=qe;function Ee(e,t,n,c,o,a){var i=Object(r["D"])("the-header"),s=Object(r["D"])("router-view");return Object(r["v"])(),Object(r["h"])(r["a"],null,[Object(r["k"])(i),Object(r["k"])(s,null,{default:Object(r["L"])((function(e){return[Object(r["k"])(r["c"],{name:"route",mode:"out-in"},{default:Object(r["L"])((function(){return[(Object(r["v"])(),Object(r["f"])(Object(r["E"])(e.Component)))]})),_:2},1024)]})),_:1})],64)}var De=Object(r["j"])("Find a Coach"),Ne=Object(r["j"])("All Coaches"),Te=Object(r["j"])("Login"),$e=Object(r["j"])("Requests"),Re={key:0},Ue=Object(r["j"])("Logout");function Me(e,t,n,c,o,a){var i=Object(r["D"])("router-link"),s=Object(r["D"])("base-button");return Object(r["v"])(),Object(r["h"])("header",null,[Object(r["i"])("nav",null,[Object(r["i"])("h1",null,[Object(r["k"])(i,{to:"/"},{default:Object(r["L"])((function(){return[De]})),_:1})]),Object(r["i"])("ul",null,[Object(r["i"])("li",null,[Object(r["k"])(i,{to:"/coaches"},{default:Object(r["L"])((function(){return[Ne]})),_:1}),a.isLoggedIn?(Object(r["v"])(),Object(r["f"])(i,{key:1,to:"/requests"},{default:Object(r["L"])((function(){return[$e]})),_:1})):(Object(r["v"])(),Object(r["f"])(i,{key:0,to:"/auth"},{default:Object(r["L"])((function(){return[Te]})),_:1}))]),a.isLoggedIn?(Object(r["v"])(),Object(r["h"])("li",Re,[Object(r["k"])(s,{onClick:a.logOut},{default:Object(r["L"])((function(){return[Ue]})),_:1},8,["onClick"])])):Object(r["g"])("",!0)])])])}var Pe={computed:{isLoggedIn:function(){return this.$store.getters.isAuthenticate}},methods:{logOut:function(){this.$store.dispatch("logOut"),this.$router.replace("/")}}};n("fba8");const Be=k()(Pe,[["render",Me],["__scopeId","data-v-93f58f7e"]]);var Ve=Be,Ge={components:{TheHeader:Ve},computed:{didAutoLogout:function(){return this.$store.getters.didAutoLogout}},created:function(){this.$store.dispatch("tryLogin")},watch:{didAutoLogout:function(e,t){e&&e!==t&&this.$router.replace("/coaches")}}};n("b8cd");const Je=k()(Ge,[["render",Ee]]);var He=Je,ze={class:"card"};function Ye(e,t){return Object(r["v"])(),Object(r["h"])("div",ze,[Object(r["C"])(e.$slots,"default",{},void 0,!0)])}n("4cc9");const Ke={},We=k()(Ke,[["render",Ye],["__scopeId","data-v-1f9750d9"]]);var Qe=We;n("9911");function Xe(e,t,n,c,o,a){var i=Object(r["D"])("router-link");return n.link?(Object(r["v"])(),Object(r["f"])(i,{key:1,to:n.to,class:Object(r["r"])(n.mode)},{default:Object(r["L"])((function(){return[Object(r["C"])(e.$slots,"default",{},void 0,!0)]})),_:3},8,["to","class"])):(Object(r["v"])(),Object(r["h"])("button",{key:0,class:Object(r["r"])(n.mode)},[Object(r["C"])(e.$slots,"default",{},void 0,!0)],2))}var Ze={props:{mode:{type:String,required:!1,default:null},link:{type:Boolean,required:!1,default:!1},to:{type:String,required:!1,default:"/"}}};n("c1e6");const et=k()(Ze,[["render",Xe],["__scopeId","data-v-06958e44"]]);var tt=et;function nt(e,t,n,c,o,a){return Object(r["v"])(),Object(r["h"])("span",{class:Object(r["r"])(["badge",n.type])},Object(r["G"])(a.text),3)}var rt={props:["type","title"],computed:{text:function(){return this.title.toUpperCase()}}};n("1432");const ct=k()(rt,[["render",nt],["__scopeId","data-v-41992f0e"]]);var ot=ct,at=function(e){return Object(r["y"])("data-v-5147169a"),e=e(),Object(r["w"])(),e},it={class:"spinner"},st=at((function(){return Object(r["i"])("div",{class:"lds-roller"},[Object(r["i"])("div"),Object(r["i"])("div"),Object(r["i"])("div"),Object(r["i"])("div"),Object(r["i"])("div"),Object(r["i"])("div"),Object(r["i"])("div"),Object(r["i"])("div")],-1)})),ut=[st];function dt(e,t){return Object(r["v"])(),Object(r["h"])("div",it,ut)}n("3ec8");const lt={},ft=k()(lt,[["render",dt],["__scopeId","data-v-5147169a"]]);var bt=ft,ht=Object(r["l"])((function(){return n.e("chunk-3571e1c3").then(n.bind(null,"ae92"))})),jt=Object(r["e"])(He);jt.use(Ae),jt.use(_e),jt.component("base-card",Qe),jt.component("base-button",tt),jt.component("base-badge",ot),jt.component("base-spinner",bt),jt.component("base-dialog",ht),jt.mount("#app")},"608e":function(e,t,n){},"6cd3":function(e,t,n){},"6e01":function(e,t,n){},8047:function(e,t,n){"use strict";n("3131")},"94b4":function(e,t,n){},"9b78":function(e,t,n){},b8cd:function(e,t,n){"use strict";n("6e01")},c1e6:function(e,t,n){"use strict";n("cd4f")},cd4f:function(e,t,n){},cf1f:function(e,t,n){},cfb5:function(e,t,n){"use strict";n("94b4")},d1f1:function(e,t,n){},d8e2:function(e,t,n){},df8a:function(e,t,n){"use strict";n("6cd3")},fba8:function(e,t,n){"use strict";n("d1f1")}});
//# sourceMappingURL=app.08a4f896.js.map