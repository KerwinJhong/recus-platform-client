(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8842"],{"54e2":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container py-5"},[s("form",{staticClass:"w-100",on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.handleSubmit(e)}}},[t._m(0),s("div",{staticClass:"form-label-group mb-2"},[s("label",{attrs:{for:"account"}},[t._v("手機號碼")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],staticClass:"form-control",attrs:{id:"account",name:"account",type:"text",placeholder:"09XXXXXXX",disabled:t.isProcessing,autofocus:""},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}})]),s("div",{staticClass:"form-label-group mb-3"},[s("label",{attrs:{for:"password"}},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",required:"",disabled:t.isProcessing,autocomplete:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{type:"submit",disabled:t.isProcessing}},[t._v("Submit")]),s("div",{staticClass:"text-center mb-3"},[s("p",[s("router-link",{attrs:{to:"/signup"}},[t._v("Sign Up")])],1)]),s("p",{staticClass:"mt-5 mb-3 text-muted text-center"},[t._v("© 2017-2018")])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center mb-4"},[s("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("Sign In")])])}],a=(s("d3b7"),s("96cf"),s("a4d3"),s("4de4"),s("e439"),s("dbb4"),s("b64b"),s("159b"),s("ade3")),o=s("2fa3");function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(Object(s),!0).forEach((function(e){Object(a["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var u={signIn:function(t){var e=t.account,s=t.password;return o["a"].post("/signin",{account:e,password:s})},signUp:function(t){return o["a"].post("/signUp",c({},t))}},p={name:"SignIn",data:function(){return{account:"",password:"",isProcessing:!1}},methods:{handleSubmit:function(){var t,e,s;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,this.isProcessing=!0,this.account&&this.password){r.next=6;break}return this.$swal({type:"warning",title:"帳號與密碼不可空白"}),this.isProcessing=!1,r.abrupt("return");case 6:return r.next=8,regeneratorRuntime.awrap(u.signIn({account:this.account,password:this.password}));case 8:if(t=r.sent,e=t.data,s=t.statusText,"OK"===s&&"success"===e.status){r.next=12;break}throw new Error(s);case 12:localStorage.setItem("token",e.token),this.$store.commit("setCurrentUser",e.user),this.$router.push("/order"),this.$swal({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,type:"success",title:"成功登入",text:""}),r.next=23;break;case 18:r.prev=18,r.t0=r["catch"](0),this.password="",this.isProcessing=!1,this.$swal({type:"error",title:"Oops...",text:"請確認您的帳號密碼",footer:'<a href="/signup">建立帳號?</a>'});case 23:case"end":return r.stop()}}),null,this,[[0,18]])}}},l=p,d=s("2877"),b=Object(d["a"])(l,r,n,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d0c8842.732fa79f.js.map