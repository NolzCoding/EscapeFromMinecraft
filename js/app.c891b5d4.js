(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2b8c8005"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,a[1](l)}n[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{staticClass:"ma-0",attrs:{dark:"",app:"",fixed:"",light:"",elevation:"5"}},[r("v-container",[r("v-app-bar",{staticClass:"mx-auto",attrs:{elevation:"0",app:"",color:"dark","max-width":"1000",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:a("6839"),transition:"scale-transition",width:"250"}})],1),t.isMobile?t._e():r("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"textglow",attrs:{to:"/",width:"80",height:"65",tile:"",icon:""}},[t._v(" HOME ")]),t.isMobile?t._e():r("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"textglow",attrs:{to:"/about",width:"80",height:"65",tile:"",icon:""}},[t._v(" ABOUT ")]),r("v-spacer"),r("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[r("span",{staticClass:"mr-2 textglow"},[t._v("Join discord")]),r("v-icon",[t._v("mdi-discord")])],1)],1)],1)],1),r("v-main",[r("router-view")],1)],1)},o=[],i={name:"App",data:function(){return{}}},s=i,c=(a("034f"),a("2877")),l=a("6544"),u=a.n(l),d=a("7496"),p=a("40dc"),v=a("8336"),f=a("a523"),m=a("132d"),h=a("adda"),b=a("f6c4"),g=a("2fa4"),x=a("269a"),y=a.n(x),w=a("5607"),C=Object(c["a"])(s,n,o,!1,null,null,null),_=C.exports;u()(C,{VApp:d["a"],VAppBar:p["a"],VBtn:v["a"],VContainer:f["a"],VIcon:m["a"],VImg:h["a"],VMain:b["a"],VSpacer:g["a"]}),y()(C,{Ripple:w["a"]});a("d3b7"),a("3ca3"),a("ddb0");var O=a("8c4f"),V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",{attrs:{"grid-list-xs":""}},[r("v-img",{staticClass:"mx-auto",attrs:{"max-width":"1000",src:a("6839")}})],1),r("countdown-timer"),r("v-card-actions",{staticClass:"mx-auto"},[r("v-btn",{staticClass:"mx-auto mt-5 textglow",attrs:{outlined:"","x-large":"",color:"primary"}},[t._v("SIGN UP FOR APLHA TEST")])],1)],1)},j=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"countdown"}},[a("v-card",{staticClass:"mx-auto transparent",attrs:{elevation:"0","max-width":"1000"}},[a("v-card-title",{staticClass:"justify-center",attrs:{"primary-title":""}},[a("h2",{staticClass:"display-2 white--text text-center textglow"},[t._v("RELEASE")])]),a("v-divider",{staticClass:"ma-5"}),a("v-card-text",[a("v-row",{staticClass:"text-center"},[a("v-col",[a("v-card",{attrs:{outlined:""}},[a("p",{staticClass:"display-2 mt-5 textglow"},[t._v(t._s(t.days))]),a("v-card-text",{staticClass:"primary--text"},[t._v(" DAYS ")])],1)],1),a("v-col",[a("v-card",{attrs:{outlined:""}},[a("p",{staticClass:"display-2 mt-5 textglow"},[t._v(t._s(t.hours))]),a("v-card-text",{staticClass:"primary--text"},[t._v(" HOURS ")])],1)],1),a("v-col",[a("v-card",{attrs:{outlined:""}},[a("p",{staticClass:"display-2 mt-5 textglow"},[t._v(t._s(t.minutes))]),a("v-card-text",{staticClass:"primary--text"},[t._v(" MINUTES ")])],1)],1),a("v-col",[a("v-card",{attrs:{outlined:""}},[a("p",{staticClass:"display-2 mt-5 textglow"},[t._v(t._s(t.seconds))]),a("v-card-text",{staticClass:"primary--text"},[t._v(" SECONDS ")])],1)],1)],1),a("p",{staticClass:"text-center  mt-5"},[t._v("Subject to change")])],1)],1)],1)},T=[],k={name:"CountdownTimer",data:function(){return{date:new Date("Apr 30, 2022 18:00:00").getTime(),timetext:"",days:0,hours:0,minutes:0,seconds:0}},beforeCreate:function(){var t=this,e=setInterval((function(){var a=(new Date).getTime(),r=t.date-a;t.days=Math.floor(r/864e5),t.hours=Math.floor(r%864e5/36e5),t.minutes=Math.floor(r%36e5/6e4),t.seconds=Math.floor(r%6e4/1e3),r<0&&clearInterval(e)}),1e3)}},E=k,M=a("b0af"),A=a("99d9"),P=a("62ad"),I=a("ce7e"),D=a("0fd9"),H=Object(c["a"])(E,S,T,!1,null,null,null),L=H.exports;u()(H,{VCard:M["a"],VCardText:A["b"],VCardTitle:A["c"],VCol:P["a"],VDivider:I["a"],VRow:D["a"]});var N={name:"Home",components:{CountdownTimer:L}},R=N,B=Object(c["a"])(R,V,j,!1,null,"5248971c",null),U=B.exports;u()(B,{VBtn:v["a"],VCardActions:A["a"],VContainer:f["a"],VImg:h["a"]}),r["a"].use(O["a"]);var $=[{path:"/",name:"Home",component:U},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],J=new O["a"]({routes:$}),q=J,F=a("f309"),G=a("fcf4");r["a"].use(F["a"]);var Y=new F["a"]({theme:{dark:!0,options:{customProperties:!0},themes:{light:{primary:G["a"].purple,secondary:G["a"].grey.darken1,accent:G["a"].shades.black,error:G["a"].red.accent3},dark:{primary:G["a"].orange.lighten3}}}});r["a"].config.productionTip=!1,new r["a"]({router:q,vuetify:Y,render:function(t){return t(_)}}).$mount("#app")},6839:function(t,e,a){t.exports=a.p+"img/Image0001.d85ebac5.png"},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.c891b5d4.js.map