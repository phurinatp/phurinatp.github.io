(function(t){function e(e){for(var n,a,i=e[0],l=e[1],c=e[2],s=0,p=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return d.push.apply(d,c||[]),o()}function o(){for(var t,e=0;e<d.length;e++){for(var o=d[e],n=!0,i=1;i<o.length;i++){var l=o[i];0!==r[l]&&(n=!1)}n&&(d.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},r={app:0},d=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;d.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"2bc2":function(t,e,o){"use strict";var n=o("e999"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);var n=o("2b0e"),r=o("bb71");o("da64");n["a"].use(r["a"],{iconfont:"md",theme:{background:"#F8F8F8",card:"#FFFFFF",error:"#FF5252",red:"#FF5252",black:"#182627",warning:"#F8AD00",SBTC:"#F7931A",SXRP:"#23292F",STHBT:"#05396b",SUSDT:"#53AE94"}});var d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("AddTodo",{on:{"add-todo":t.addTodo}}),o("Todos",{attrs:{todos:t.todos},on:{"del-todo":t.deleteTodo}}),o("v-card",[t._v("\n    Hello world\n  ")])],1)},a=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.todos,(function(e){return o("div",{key:e.id},[o("TodoItem",{attrs:{todo:e},on:{"del-todo":function(o){return t.$emit("del-todo",e.id)}}})],1)})),0)},l=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"todo-item",class:{"is-completed":t.todo.completed}},[o("input",{attrs:{type:"checkbox"},domProps:{checked:t.todo.completed},on:{change:t.markCompleted}}),o("p",[t._v(" "+t._s(t.todo.title))]),o("button",{on:{click:function(e){return t.$emit("del-todo",t.todo.id)}}},[t._v("Delete")])])])},u=[],s={name:"TodoItem",props:{todo:Object},methods:{markCompleted(){this.todo.completed=!this.todo.completed}}},p=s,f=(o("8abf"),o("2877")),m=Object(f["a"])(p,c,u,!1,null,"d61146ac",null),b=m.exports,v={name:"Todos",components:{TodoItem:b},props:{todos:Array}},h=v,y=Object(f["a"])(h,i,l,!1,null,"450b51cc",null),T=y.exports,_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-form",{on:{submit:function(e){return e.preventDefault(),t.addTodo(e)}}},[o("v-text-field",{attrs:{type:"text"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),o("v-btn",{attrs:{type:"submit"}},[t._v("Add")])],1)],1)},F=[],g={name:"AddTodo",data(){return{title:""}},methods:{addTodo(){let t={id:4,title:this.title,completed:!1};this.$emit("add-todo",t)}}},O=g,x=(o("2bc2"),o("6544")),j=o.n(x),k=o("8336"),w=o("4bd4"),P=o("2677"),S=Object(f["a"])(O,_,F,!1,null,"2dd7a2e8",null),A=S.exports;j()(S,{VBtn:k["a"],VForm:w["a"],VTextField:P["a"]});var $={name:"app",components:{Todos:T,AddTodo:A},data(){return{todos:[{id:1,title:"Read a book",completed:!1},{id:2,title:"Play a game",completed:!0},{id:3,title:"walking",completed:!1}]}},methods:{deleteTodo(t){this.todos=this.todos.filter(e=>e.id!==t)},addTodo(t){this.todos.push(t)}}},C=$,E=(o("7faf"),o("b0af")),D=Object(f["a"])(C,d,a,!1,null,null,null),M=D.exports;j()(D,{VCard:E["a"]}),n["a"].config.productionTip=!1,new n["a"]({render:t=>t(M)}).$mount("#app")},"7faf":function(t,e,o){"use strict";var n=o("882c"),r=o.n(n);r.a},"882c":function(t,e,o){},"8abf":function(t,e,o){"use strict";var n=o("bb5f"),r=o.n(n);r.a},bb5f:function(t,e,o){},e999:function(t,e,o){}});
//# sourceMappingURL=app.caa9aa40.js.map