(function(t){function e(e){for(var o,s,i=e[0],l=e[1],c=e[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],o=!0,s=1;s<r.length;s++){var l=r[s];0!==n[l]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var o={},n={app:0},a=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0d06a523"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,o){r=n[t]=[e,o]}));e.push(r[2]=o);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t);var c=new Error;a=function(e){l.onerror=l.onload=null,clearTimeout(u);var r=n[t];if(0!==r){if(r){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,r[1](c)}n[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(r,o,function(e){return t[e]}.bind(null,o));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var f=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"13b4":function(t,e,r){t.exports=r.p+"img/cover.f76169ba.svg"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{staticClass:"px-2",attrs:{app:"",color:"white",elevation:"0"}},[r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),r("v-toolbar-title",{staticClass:"text-h6 pl-2"},[t._v("Portfolio")])],1),r("v-spacer"),r("v-btn",{staticClass:"text-none",attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[r("span",[t._v("About")])]),r("v-btn",{staticClass:"text-none",attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[r("span",[t._v("Projects")])]),r("v-btn",{staticClass:"text-none",attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[r("span",[t._v("Blogs")])]),r("v-btn",{staticClass:"text-none mr-2",attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[r("span",[t._v("Contact")])])],1),r("v-content",[r("HelloWorld")],1)],1)},a=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"px-8"},[o("v-row",{staticClass:"py-4",attrs:{align:"center"}},[o("v-col",{attrs:{cols:"6"}},[o("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Welcome to Ayush World!")]),o("p",{staticClass:"text-h5 font-weight-regular grey--text text--darken-1 my-6"},[t._v(" Hi, I am "),o("span",{staticClass:"primary--text font-weight-medium"},[t._v("Ayush P Gupta")]),o("br"),t._v("IIT Roorkee | Flutter & Vue Developer | Physics Educator at Unacademy "),o("br"),t._v("| Flute Player | DIY person ")]),o("div",{staticClass:"mt-12"},[o("v-btn",{attrs:{color:"primary"}},[o("v-icon",{staticClass:"mr-2",attrs:{left:"",small:""}},[t._v("mdi-file")]),t._v("VIEW MY RESUME ")],1)],1)]),o("v-col",{attrs:{cols:"6"}},[o("v-img",{attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:r("13b4")}})],1)],1),o("v-divider",{staticClass:"my-8"}),o("v-row",{staticClass:"text-center py-4",attrs:{justify:"center"}},[o("v-col",{attrs:{cols:"12"}},[o("p",{staticClass:"text-h4 font-weight-bold mb-3"},[t._v("About Me")])]),o("v-col",{attrs:{cols:"12"}},[o("p",{staticClass:"text-h6 font-weight-regular grey--text text--darken-1"},[t._v(" I am a graduate from IIT Roorkee (2018)"),o("br"),t._v(" I belong to Lucknow, India"),o("br"),o("br"),t._v(" My area of interest is Application Development, Teaching Physics,"),o("br"),t._v(" Playing Flute, Sketching, DIY stuff, self-learning and many more. "),o("br"),o("br"),t._v("Mainly my expertise is with Mobile Application Development using "),o("a",{staticClass:" font-weight-medium px-1",attrs:{href:"https://flutter.dev/",target:"_blank"}},[t._v(" Flutter")]),t._v("SDK."),o("br"),t._v(" Also I have intermediate expertise with web app development using "),o("a",{staticClass:" font-weight-medium px-1",attrs:{href:"https://vuejs.org/",target:"_blank"}},[t._v(" VueJs")]),t._v(". ")])])],1),o("v-divider",{staticClass:"my-8"}),o("v-row",{staticClass:"text-center py-4",attrs:{justify:"center"}},[o("v-col",{attrs:{cols:"12"}},[o("p",{staticClass:"text-h4 font-weight-bold mb-3"},[t._v("My Github")])]),o("v-col",{attrs:{cols:"12"}},[o("v-btn",{attrs:{color:"grey darken-3 text-none",dark:""}},[o("v-icon",{staticClass:"mr-3",attrs:{left:"",medium:""}},[t._v("mdi-github")]),t._v("github.com/apgapg ")],1)],1)],1)],1)},i=[],l={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},c=l,u=r("2877"),f=r("6544"),p=r.n(f),v=r("8336"),d=r("62ad"),h=r("a523"),m=r("ce7e"),g=r("132d"),b=r("adda"),y=r("0fd9"),x=Object(u["a"])(c,s,i,!1,null,null,null),w=x.exports;p()(x,{VBtn:v["a"],VCol:d["a"],VContainer:h["a"],VDivider:m["a"],VIcon:g["a"],VImg:b["a"],VRow:y["a"]});var _={name:"App",components:{HelloWorld:w},data:function(){return{}}},j=_,C=r("7496"),k=r("40dc"),V=r("a75b"),A=r("2fa4"),P=r("2a7f"),I=Object(u["a"])(j,n,a,!1,null,null,null),O=I.exports;p()(I,{VApp:C["a"],VAppBar:k["a"],VBtn:v["a"],VContent:V["a"],VImg:b["a"],VSpacer:A["a"],VToolbarTitle:P["a"]});var E=r("9483");Object(E["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});r("d3b7");var M=r("8c4f"),S=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},T=[],W={name:"Home",components:{HelloWorld:w}},D=W,H=Object(u["a"])(D,S,T,!1,null,null,null),F=H.exports;o["a"].use(M["a"]);var q=[{path:"/",name:"Home",component:F},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],B=new M["a"]({mode:"history",base:"/",routes:q}),L=B,N=r("f309");o["a"].use(N["a"]);var R=new N["a"]({});o["a"].config.productionTip=!1,new o["a"]({router:L,vuetify:R,render:function(t){return t(O)}}).$mount("#app")},cf05:function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.413dcfd7.js.map