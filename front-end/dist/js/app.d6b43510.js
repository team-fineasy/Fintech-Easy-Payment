(function(e){function n(n){for(var r,a,o=n[0],i=n[1],s=n[2],f=0,h=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&h.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(n);while(h.length)h.shift()();return u.push.apply(u,s||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var o=t[a];0!==c[o]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},c={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-16ffa0fe":"7ca2f27e","chunk-1ac22f84":"48dda5af","chunk-21883a2c":"472437df","chunk-60612d40":"4a5f7fee","chunk-3147d9c4":"4efb39b5","chunk-1d3b2d5c":"c4af62a1","chunk-2045af00":"a053f68c","chunk-8f902bfc":"e538a953","chunk-7e0ae0f8":"81a13319","chunk-3c230b53":"00fcbc6f","chunk-d5e07a7e":"211a340e","chunk-74b33bc5":"5398bef2"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-1ac22f84":1,"chunk-21883a2c":1,"chunk-60612d40":1,"chunk-3147d9c4":1,"chunk-1d3b2d5c":1,"chunk-2045af00":1,"chunk-8f902bfc":1,"chunk-7e0ae0f8":1,"chunk-3c230b53":1,"chunk-d5e07a7e":1,"chunk-74b33bc5":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-16ffa0fe":"31d6cfe0","chunk-1ac22f84":"8455524c","chunk-21883a2c":"509272a8","chunk-60612d40":"efbdcd17","chunk-3147d9c4":"0e7e4c50","chunk-1d3b2d5c":"95b20c2a","chunk-2045af00":"f3ca868f","chunk-8f902bfc":"29608d6d","chunk-7e0ae0f8":"410e0232","chunk-3c230b53":"c8277a33","chunk-d5e07a7e":"509272a8","chunk-74b33bc5":"1bbdaac2"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var s=u[o],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===c))return n()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){s=h[o],f=s.getAttribute("data-href");if(f===r||f===c)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],l.parentNode.removeChild(l),t(u)},l.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(l)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=u);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=o(e);var h=new Error;s=function(n){f.onerror=f.onload=null,clearTimeout(l);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",h.name="ChunkLoadError",h.type=r,h.request=a,t[1](h)}c[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=n,s=s.slice();for(var h=0;h<s.length;h++)n(s[h]);var l=f;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("router-view")},c=[],u={name:"App",data:function(){return{}}},o=u,i=t("2877"),s=Object(i["a"])(o,a,c,!1,null,null,null),f=s.exports,h=t("a18c"),l=t("2f62"),d=t("1da1"),p=(t("96cf"),t("b0c0"),t("d722"));r["a"].use(l["a"]);var m=new l["a"].Store({state:{loginToken:"",accessToken:"",refreshToken:"",userSeqNum:"",code:"",userData:{accountList:{fintechUseNum:"",bankName:"",accountNum:""},productName:"",productPrice:"",productId:""}},getters:{},mutations:{SIGNUP:function(e,n){var t=n.loginToken;e.loginToken=t},GETCODE:function(e,n){e.code=n},GETTOKEN:function(e,n){e.accessToken=n.access_token,e.refreshToken=n.refresh_token,e.userSeqNum=n.user_seqnum,console.log(e)},GETUSERDATA:function(e,n){e.userData.accountList=n.account_list.state.refreshToken=n.refresh_token,e.userSeqNum=n.user_seqnum,console.log(e)}},actions:{handleSignup:function(e,n){return Object(d["a"])(regeneratorRuntime.mark((function e(){var t,r,a,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.name,r=n.password,a=n.email,c=n.phone,console.log(t,r,a,c),e.next=4,p["a"].signup(n).then((function(e){var n=e.data;return 0!==n&&sessionStorage.setItem("temporary-token",n),n}));case 4:return u=e.sent,e.abrupt("return",u);case 6:case"end":return e.stop()}}),e)})))()},handleSignin:function(e,n){return Object(d["a"])(regeneratorRuntime.mark((function e(){var t,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.password,r=n.email,console.log(t,r),e.next=4,p["a"].signin(n).then((function(e){var n=e.data;return console.log(n),2!==n&&3!==n&&sessionStorage.setItem("temporary-token",n),n}));case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))()},getUserData:function(){return Object(d["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p["a"].accountData().then((function(e){return console.log(e),e}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))()},postPaymentData:function(e){return Object(d["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,p["a"].withdrawData(e).then((function(e){return console.log(e),e}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))()}}}),k=t("f309");r["a"].use(k["a"]);var b=new k["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:b,render:function(e){return e(f)},router:h["a"],store:m,Vuex:l["a"]}).$mount("#app")},a18c:function(e,n,t){"use strict";t("d3b7"),t("3ca3"),t("ddb0");var r=t("2b0e"),a=t("8c4f");r["a"].use(a["a"]);var c={template:"<div>Not Found</div>"},u=new a["a"]({mode:"history",routes:[{path:"/",name:"Home",component:function(){return Promise.all([t.e("chunk-1ac22f84"),t.e("chunk-60612d40"),t.e("chunk-3147d9c4"),t.e("chunk-2045af00")]).then(t.bind(null,"b398"))}},{path:"/signup",name:"AuthMain",component:function(){return Promise.all([t.e("chunk-1ac22f84"),t.e("chunk-60612d40"),t.e("chunk-3147d9c4"),t.e("chunk-1d3b2d5c")]).then(t.bind(null,"ac8b"))}},{path:"/payment",name:"PaymentMain",component:function(){return Promise.all([t.e("chunk-1ac22f84"),t.e("chunk-60612d40"),t.e("chunk-3147d9c4"),t.e("chunk-8f902bfc")]).then(t.bind(null,"38a2"))}},{path:"/payment-result",name:"PaymentResult",component:function(){return Promise.all([t.e("chunk-1ac22f84"),t.e("chunk-21883a2c")]).then(t.bind(null,"eabb"))}},{path:"/authResult",name:"authResult",component:function(){return t.e("chunk-16ffa0fe").then(t.bind(null,"de7d"))}},{path:"/certification",name:"Certification",component:function(){return Promise.all([t.e("chunk-60612d40"),t.e("chunk-7e0ae0f8")]).then(t.bind(null,"deff"))}},{path:"*",component:c}]});n["a"]=u},d722:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t("bc3a"),a=t.n(r),c=window,u=c.applicationSettings,o=u.DB_ENDPOINT,i={signup:function(e){return a.a.post("".concat(o,"/api/signup"),e)},auth:function(e){return a.a.post("".concat(o,"/api/token"),{code:e},{headers:{ourtoken:sessionStorage.getItem("temporary-token")}})},signin:function(e){return a.a.post("".concat(o,"/api/signin"),e)},test:function(){return a.a.get("".concat(o,"/"))},accountData:function(){return a.a.get("".concat(o,"/api/account"))},withdrawData:function(){return a.a.post("".concat(o,"/api/withdraw"))}}}});
//# sourceMappingURL=app.d6b43510.js.map