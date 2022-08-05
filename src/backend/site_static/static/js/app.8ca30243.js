(function(){"use strict";var e={8673:function(e,n,t){var r=t(9242),o=t(3396);function i(e,n){const t=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(t)}var a=t(89);const s={},u=(0,a.Z)(s,[["render",i]]);var f=u,c=t(2483);const l={class:"login"};function d(e,n,t,r,i,a){const s=(0,o.up)("LoginForm");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o.Wm)(s)])}var m=t(7139);const p=e=>((0,o.dD)("data-v-1e8f3b2e"),e=e(),(0,o.Cn)(),e),g={class:"form-signin w-100 m-auto"},h=p((()=>(0,o._)("h1",{class:"h3 mb-3 fw-normal"},"Please sign in",-1))),v={class:"form-floating"},b=p((()=>(0,o._)("label",{for:"floatingInput"},"Username",-1))),y={class:"form-floating"},w=p((()=>(0,o._)("label",{for:"floatingPassword"},"Password",-1))),_=p((()=>(0,o._)("button",{class:"w-100 btn btn-lg btn-primary",type:"submit"}," Sign in ",-1))),k={class:"warning-text"};function O(e,n,t,i,a,s){return(0,o.wg)(),(0,o.iD)("div",g,[(0,o._)("form",{class:"login",onSubmit:n[2]||(n[2]=(0,r.iM)(((...e)=>s.submit&&s.submit(...e)),["prevent"]))},[h,(0,o._)("div",v,[(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"floatingInput",placeholder:"Username","onUpdate:modelValue":n[0]||(n[0]=n=>e.form.username=n)},null,512),[[r.nr,e.form.username]]),b]),(0,o._)("div",y,[(0,o.wy)((0,o._)("input",{type:"password",class:"form-control",id:"floatingPassword",placeholder:"Password","onUpdate:modelValue":n[1]||(n[1]=n=>e.form.password=n)},null,512),[[r.nr,e.form.password]]),w]),_,(0,o._)("p",k,(0,m.zw)(e.errorMessage),1)],32)])}var C={name:"LoginForm",data:function(){return{errorMessage:"",form:{username:"",password:""},url:""}},methods:{async submit(){if(this.form.username.length)if(this.form.password.length){var e=await fetch(`${this.url}/api/v1/user/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.form)}),n=await e.json();200==e.status?(Cookies.set("token",n.token),await this.$router.push({path:"/"})):this.errorMessage=n.detail}else this.errorMessage="Password is empty";else this.errorMessage="Username is empty"}}};const j=(0,a.Z)(C,[["render",O],["__scopeId","data-v-1e8f3b2e"]]);var P=j,S={name:"LoginView",components:{LoginForm:P}};const E=(0,a.Z)(S,[["render",d]]);var T=E;const A={},L=A;var M=L;const N=[{path:"/",name:"main",component:()=>t.e(443).then(t.bind(t,8355))},{path:"/login",name:"login",component:T},{path:"/register",name:"register",component:M}],x=(0,c.p7)({history:(0,c.PO)("/"),routes:N});var F=x,U=t(407),D=t.n(U);(0,r.ri)(f).use(F).use(D()).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],i=e[c][2];for(var s=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(s=!1,i<a&&(a=i));if(s){e.splice(c--,1);var f=o();void 0!==f&&(n=f)}}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"static/js/about.4fc04286.js"}}(),function(){t.miniCssF=function(e){return"static/css/about.f0d7af98.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="frontend:";t.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var s,u;if(void 0!==i)for(var f=document.getElementsByTagName("script"),c=0;c<f.length;c++){var l=f[c];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==n+i){s=l;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+i),s.src=r),e[r]=[o];var d=function(n,t){s.onerror=s.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)t();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=s,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=i,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var a=t.miniCssF(r),s=t.p+a;if(n(a,s))return o();e(r,s,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={443:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(n),s=new Error,u=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};t.l(a,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],s=r[1],u=r[2],f=0;if(a.some((function(n){return 0!==e[n]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(u)var c=u(t)}for(n&&n(r);f<a.length;f++)i=a[f],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(c)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(8673)}));r=t.O(r)})();
//# sourceMappingURL=app.8ca30243.js.map