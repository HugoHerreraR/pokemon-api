(function(t){function e(e){for(var a,r,c=e[0],l=e[1],i=e[2],p=0,v=[];p<c.length;p++)r=c[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&v.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,i||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,c=1;c<s.length;c++){var l=s[c];0!==n[l]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},o=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var u=l;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},o=[],r={created:function(){this.$router.push({path:"pokemons"}).catch((function(t){}))}},c=r,l=s("2877"),i=Object(l["a"])(c,n,o,!1,null,null,null),u=i.exports,p=s("9483");Object(p["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var v=s("8c4f"),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-navigation-drawer",{attrs:{app:"",color:"#880E4F",dark:""},model:{value:t.sidebar,callback:function(e){t.sidebar=e},expression:"sidebar"}},[s("v-list",t._l(t.menuItems,(function(e){return s("v-list-item",{key:e.title,attrs:{to:e.path}},[s("v-list-item-content",[t._v(t._s(e.title))])],1)})),1)],1),s("v-toolbar",{staticClass:"margen",attrs:{color:"#880E4F",dark:""}},[s("span",{staticClass:"hidden-sm-and-up"},[s("v-app-bar-nav-icon",{on:{click:function(e){t.sidebar=!t.sidebar}}})],1),s("v-toolbar-title",[s("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"#",tag:"span"}},[t._v(" "+t._s(t.appTitle)+" ")])],1),s("v-spacer"),s("v-toolbar-items",{staticClass:"hidden-xs-only"},t._l(t.menuItems,(function(e){return s("v-btn",{key:e.title,attrs:{text:"",to:e.path}},[t._v(" "+t._s(e.title)+" ")])})),1)],1),s("v-main",[s("transition",[s("router-view")],1)],1)],1)},d=[],h={name:"Home",components:{},data:function(){return{appTitle:"Pokémons",sidebar:!1,menuItems:[{title:"Home",path:"/pokemons"},{title:"Busca tu Pokémon",path:"/search"}],pagina:""}},created:function(){},computed:{}},_=h,m=Object(l["a"])(_,f,d,!1,null,null,null),g=m.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-row",t._l(t.pokemons,(function(e,a){return s("v-col",{key:a,staticClass:"mx-auto",attrs:{cols:"12",sm:"6",md:"3",justify:"center",align:"center"}},[s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[s("div",{staticStyle:{"background-color":"#FF1744"},attrs:{justify:"center",align:"center"}},[s("v-avatar",{staticStyle:{"background-color":"white"},attrs:{size:"140"}},[s("v-img",{attrs:{contain:"",src:e.sprites.front_default,height:"200px"}})],1)],1),s("v-card-title",[t._v(t._s(e.name.toUpperCase()))]),s("v-expansion-panels",[s("v-expansion-panel",[s("v-expansion-panel-header",[t._v(" Ver más "),s("v-spacer")],1),s("v-expansion-panel-content",{attrs:{height:"400"}},[s("span",[t._v("Datos")]),s("br"),s("br"),s("v-row",{attrs:{align:"center"}},[s("v-col",{attrs:{cols:"4"}},[s("span",{staticClass:"mx-auto"},[t._v("ID"),s("br"),t._v(" "+t._s(e.id))])]),s("v-col",{attrs:{cols:"4"}},[t._v("Altura"),s("br"),t._v(" "+t._s(e.height))]),s("v-col",{attrs:{cols:"4"}},[t._v("Peso"),s("br"),t._v(" "+t._s(e.weight))])],1),s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{attrs:{cols:"4"}},[t._v("HP")]),s("v-col",{attrs:{cols:"8"}},[s("v-progress-linear",{staticClass:"mx-auto",attrs:{color:"#388E3C",height:"16"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.value;return[s("strong",[t._v(t._s(Math.ceil(a)))])]}}],null,!0),model:{value:e.stats[0].base_stat,callback:function(s){t.$set(e.stats[0],"base_stat",s)},expression:"pokemon.stats[0].base_stat"}})],1),s("v-col",{attrs:{cols:"4"}},[t._v("Ataque")]),s("v-col",{attrs:{cols:"8"}},[s("v-progress-linear",{attrs:{color:"#F44336",height:"16"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.value;return[s("strong",[t._v(t._s(Math.ceil(a)))])]}}],null,!0),model:{value:e.stats[1].base_stat,callback:function(s){t.$set(e.stats[1],"base_stat",s)},expression:"pokemon.stats[1].base_stat"}})],1),s("v-col",{attrs:{cols:"4"}},[t._v("Defensa")]),s("v-col",{attrs:{cols:"8"}},[s("v-progress-linear",{attrs:{color:"#FFEB3B",height:"16"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.value;return[s("strong",[t._v(t._s(Math.ceil(a)))])]}}],null,!0),model:{value:e.stats[2].base_stat,callback:function(s){t.$set(e.stats[2],"base_stat",s)},expression:"pokemon.stats[2].base_stat"}})],1),s("v-col",{attrs:{cols:"4"}},[t._v("Ataque especial")]),s("v-col",{attrs:{cols:"8"}},[s("v-progress-linear",{attrs:{color:"#E91E63",height:"16"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.value;return[s("strong",[t._v(t._s(Math.ceil(a)))])]}}],null,!0),model:{value:e.stats[3].base_stat,callback:function(s){t.$set(e.stats[3],"base_stat",s)},expression:"pokemon.stats[3].base_stat"}})],1),s("v-col",{attrs:{cols:"4"}},[t._v("Defensa especial")]),s("v-col",{attrs:{cols:"8"}},[s("v-progress-linear",{attrs:{color:"#AEEA00",height:"16"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.value;return[s("strong",[t._v(t._s(Math.ceil(a)))])]}}],null,!0),model:{value:e.stats[4].base_stat,callback:function(s){t.$set(e.stats[4],"base_stat",s)},expression:"pokemon.stats[4].base_stat"}})],1),s("v-col",{attrs:{cols:"4"}},[t._v("Speed")]),s("v-col",{attrs:{cols:"8"}},[s("v-progress-linear",{attrs:{color:"#3F51B5",height:"16"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.value;return[s("strong",[t._v(t._s(Math.ceil(a)))])]}}],null,!0),model:{value:e.stats[5].base_stat,callback:function(s){t.$set(e.stats[5],"base_stat",s)},expression:"pokemon.stats[5].base_stat"}})],1)],1)],1)],1)],1)],1)],1)})),1)],1)},k=[],x=(s("d3b7"),s("159b"),s("b0c0"),{data:function(){return{userData:[],pokemons:[],img:""}},created:function(){var t=this;this.$store.dispatch("api/GET_POKEMON").then((function(e){e.results.forEach((function(e){t.userData.push(e)})),t.userData.forEach((function(e){t.$store.dispatch("api/GET_ABOUT",e.name).then((function(e){t.pokemons.push(e)})).catch((function(t){console.log(t)}))}))})).catch((function(t){console.log(t)}))},methods:{}}),y=x,w=(s("fd5d"),Object(l["a"])(y,b,k,!1,null,"74ae9c1a",null)),E=w.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("br"),s("v-row",[s("v-col",{attrs:{cols:"4",justify:"right",align:"right"}},[s("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Buscar proyecto","single-line":"",solo:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),s("v-col",{attrs:{cols:"3"}},[s("v-btn",{on:{click:t.buscar}},[t._v("Buscar")])],1)],1),s("v-row",[s("v-col",{attrs:{cols:"12",justify:"center",align:"center"}},[s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344px"}},[s("div",{staticStyle:{"background-color":"#ff1744"},attrs:{justify:"center",align:"center"}},[s("v-avatar",{staticStyle:{"background-color":"white"},attrs:{size:"140"}},[s("v-img",{attrs:{contain:"",src:t.img,height:"200px"}})],1)],1),s("v-card-title",[t._v(t._s(t.name))]),s("v-expansion-panels",[s("v-expansion-panel",[s("v-expansion-panel-header",[t._v(" Ver más "),s("v-spacer")],1),s("v-expansion-panel-content",{attrs:{height:"400"}},[s("span",[t._v("Datos")]),s("br"),s("br"),s("v-row",{attrs:{align:"center"}},[s("v-col",{attrs:{cols:"4"}},[s("span",{staticClass:"mx-auto"},[t._v("ID"),s("br"),t._v(" "+t._s(t.id))])]),s("v-col",{attrs:{cols:"4"}},[t._v("Altura"),s("br"),t._v(" "+t._s(t.height))]),s("v-col",{attrs:{cols:"4"}},[t._v("Peso"),s("br"),t._v(" "+t._s(t.weight))])],1),s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{attrs:{cols:"4"}},[t._v("HP")]),s("v-col",{attrs:{cols:"8"}},[s("v-progress-linear",{staticClass:"mx-auto",attrs:{color:"#388E3C",height:"16"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.value;return[s("strong",[t._v(t._s(Math.ceil(a)))])]}}]),model:{value:t.hp,callback:function(e){t.hp=e},expression:"hp"}})],1),s("v-col",{attrs:{cols:"4"}},[t._v("Ataque")]),s("v-col",{attrs:{cols:"8"}},[s("v-progress-linear",{attrs:{color:"#F44336",height:"16"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.value;return[s("strong",[t._v(t._s(Math.ceil(a)))])]}}]),model:{value:t.attack,callback:function(e){t.attack=e},expression:"attack"}})],1),s("v-col",{attrs:{cols:"4"}},[t._v("Defensa")]),s("v-col",{attrs:{cols:"8"}},[s("v-progress-linear",{attrs:{color:"#FFEB3B",height:"16"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.value;return[s("strong",[t._v(t._s(Math.ceil(a)))])]}}]),model:{value:t.defense,callback:function(e){t.defense=e},expression:"defense"}})],1),s("v-col",{attrs:{cols:"4"}},[t._v("Ataque especial")]),s("v-col",{attrs:{cols:"8"}},[s("v-progress-linear",{attrs:{color:"#E91E63",height:"16"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.value;return[s("strong",[t._v(t._s(Math.ceil(a)))])]}}]),model:{value:t.special_attack,callback:function(e){t.special_attack=e},expression:"special_attack"}})],1),s("v-col",{attrs:{cols:"4"}},[t._v("Defensa especial")]),s("v-col",{attrs:{cols:"8"}},[s("v-progress-linear",{attrs:{color:"#AEEA00",height:"16"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.value;return[s("strong",[t._v(t._s(Math.ceil(a)))])]}}]),model:{value:t.special_defense,callback:function(e){t.special_defense=e},expression:"special_defense"}})],1),s("v-col",{attrs:{cols:"4"}},[t._v("Speed")]),s("v-col",{attrs:{cols:"8"}},[s("v-progress-linear",{attrs:{color:"#3F51B5",height:"16"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.value;return[s("strong",[t._v(t._s(Math.ceil(a)))])]}}]),model:{value:t.speed,callback:function(e){t.speed=e},expression:"speed"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)},S=[],O=(s("ac1f"),s("841c"),{data:function(){return{search:"bulbasaur",consulta:[],pokemons:[{name:String}],img:"",name:"",id:"",height:"",weight:"",base_stat:"",hp:"",attack:"",defense:"",special_attack:"",special_defense:"",speed:""}},created:function(){var t=this;this.search.toLowerCase();this.$store.dispatch("api/GET_ABOUT",this.search.toLowerCase()).then((function(e){t.name=e.name,t.img=e.sprites.front_default,t.id=e.id,t.height=e.height,t.weight=e.weight,t.hp=e.stats[0].base_stat,t.attack=e.stats[1].base_stat,t.defense=e.stats[2].base_stat,t.special_attack=e.stats[3].base_stat,t.special_defense=e.stats[4].base_stat,t.speed=e.stats[5].base_stat})).catch((function(t){console.log(t)}))},methods:{buscar:function(){var t=this;this.$store.dispatch("api/GET_ABOUT",this.search.toLowerCase()).then((function(e){t.name=e.name,t.id=e.id,t.img=e.sprites.front_default,t.height=e.height,t.weight=e.weight,t.hp=e.stats[0].base_stat,t.attack=e.stats[1].base_stat,t.defense=e.stats[2].base_stat,t.special_attack=e.stats[3].base_stat,t.special_defense=e.stats[4].base_stat,t.speed=e.stats[5].base_stat})).catch((function(t){console.log(t)}))}},computed:{nombre:function(){}}}),j=O,P=Object(l["a"])(j,F,S,!1,null,null,null),C=P.exports;a["default"].use(v["a"]);var A=[{path:"/",name:"Home",component:g,children:[{path:"pokemons",name:"Pokemons",component:E},{path:"search",name:"Buscador",component:C}]}],M=new v["a"]({base:"/",routes:A}),B=M,$=s("1da1"),T=(s("96cf"),s("2f62")),D=s("bc3a"),G=s.n(D),q={namespaced:!0,actions:{GET_POKEMON:function(t){return new Promise((function(t,e){a["default"].axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"').then((function(e){t(e.data)})).catch((function(t){e(t)}))}))},GET_ABOUT:function(t,e){return new Promise((function(t,s){a["default"].axios.get("https://pokeapi.co/api/v2/pokemon/"+e).then((function(e){t(e.data)})).catch((function(t){s(t)}))}))}}};a["default"].use(T["a"]);var H=new T["a"].Store({state:{pokemons:[],pokemonsFilter:[]},mutations:{setPokemons:function(t,e){t.pokemons=e},setPokemonsFilter:function(t,e){t.pokemonsFilter=e}},actions:{getPokemons:function(t){return Object($["a"])(regeneratorRuntime.mark((function e(){var s,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.commit,e.prev=1,e.next=4,fetch("https://pokeapi.co/api/v2/pokemon");case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,s("setPokemons",n.results),s("setPokemonsFilter",n.results),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](1),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))()}},modules:{api:q}}),I=s("130e"),N=s("ce5b"),U=s.n(N);s("bf40");a["default"].use(U.a);var L=new U.a({theme:{options:{customProperties:!0},themes:{light:{primary:"#007BFF",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}});s("e792"),s("d5e8"),s("5363");a["default"].use(I["a"],G.a),a["default"].config.productionTip=!1,new a["default"]({router:B,store:H,vuetify:L,render:function(t){return t(u)}}).$mount("#app")},a27b:function(t,e,s){},fd5d:function(t,e,s){"use strict";s("a27b")}});
//# sourceMappingURL=app.23e2eb3b.js.map