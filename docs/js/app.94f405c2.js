(function(e){function t(t){for(var s,r,o=t[0],l=t[1],c=t[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(n.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},i={app:0},n=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"2b5c":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("Nav"),a("div",{staticClass:"container"},[a("router-view")],1)],1)},n=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[e._m(0),a("a",{staticClass:"navbar-burger burger",class:{"is-active":e.isActive},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(t){e.isActive=!e.isActive}}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"navbar-menu",class:{"is-active":e.isActive},attrs:{id:"navbarBasicExample"}},[a("div",{staticClass:"navbar-start"},[a("router-link",{staticClass:"navbar-item hom",attrs:{to:"/"}},[e._v("Home")]),a("router-link",{staticClass:"navbar-item hom",attrs:{to:"/about"}},[e._v("Inspiration")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/profile"}},[e._v("Profile")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/schedule"}},[e._v("My-Schedule")]),null!==e.ctx.user&&e.ctx.user.admin?a("router-link",{staticClass:"navbar-item",attrs:{to:"/dashboard"}},[e._v("Dashboard")]):e._e()],1),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("div",{staticClass:"buttons"},[null===e.ctx.user?a("router-link",{staticClass:"button is-primary is-rounded",attrs:{to:"/register"}},[e._v("Register")]):e._e(),null===e.ctx.user?a("router-link",{staticClass:"button is-light is-rounded",attrs:{to:"/login"}},[e._v("Log in")]):e._e(),null!==e.ctx.user?a("button",{staticClass:"button is-primary",on:{click:e.logout}},[e._v(" Log out ")]):e._e()],1)])])])])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"navbar-item",attrs:{href:"/"}},[a("strong",{staticClass:"is-size-4"},[e._v("Exercise Helper")])])}],l=(a("c740"),a("a434"),[{name:"Triceps",finished:!1,activities:[{type:"cable pull downs",completed:!0}]},{name:"Cardio",finished:!1,activities:[{type:"5 Minute Run",completed:!1},{type:"Box Jumps",completed:!1}]},{name:"Legs",finished:!1,activities:[{type:"calf raises",completed:!1}]},{name:"Conditioning",finished:!1,activities:[{type:"Jogging",completed:!1}]}]),c=[{id:1,name:"Monday",exercises:[]},{id:2,name:"Tuesday",exercises:[]},{id:3,name:"Wednesday",exercises:[]},{id:4,name:"Thursday",exercises:[]},{id:5,name:"Friday",exercises:[]},{id:6,name:"Saturday",exercises:[]},{id:7,name:"Sunday",exercises:[]}],u=JSON.parse(JSON.stringify(c));u[0].exercises=[JSON.parse(JSON.stringify(l[0]))],u[1].exercises=[JSON.parse(JSON.stringify(l[1]))];a("d3b7"),Object({NODE_ENV:"production",BASE_URL:""}).API_ROOT;var d=[{id:1,email:"mymail@gmail.com",name:"Elijah Judge",handle:"elijahjudge",password:"1234",admin:!0,loggedIn:!1,friends:[],routine:u},{id:2,email:"mistermailmansmailaccount@gmail.com",name:"mail man",handle:"ohilovemail",password:"password",admin:!1,loggedIn:!1,friends:[],routine:c},{id:3,email:"jupiter@gmail.com",name:"planet guy",handle:"planetGuy",password:"marsmoon",admin:!1,loggedIn:!1,friends:[],routine:c},{id:4,email:"test@gmail.com",name:"test guy",handle:"testy",password:"mctester",admin:!1,loggedIn:!1,friends:[],routine:c},{id:5,email:"moshemoshe@gmail.com",name:"moshe plotkin",handle:"Teacher",password:"webprogramming",admin:!0,loggedIn:!1,friends:[],routine:c}];var m={state:{user:null,users:d},removeActivityFromExerciseGroup:function(e,t,a){this.state.user.routine[e-1].exercises[t].activities.splice(a,1)},removeExerciseGroupFromDay:function(e,t){this.state.user.routine[e-1].exercises.splice(t,1)},addExerciseGroupToDay:function(e,t){this.state.user.routine[e-1].exercises.push({name:t,finished:!1,activities:[]})},addActivityToGroup:function(e,t,a){this.state.user.routine[e-1].exercises[t].activities.push({type:a,completed:!1})},login:function(e,t){var a=d.findIndex((function(a){return a.handle===e&&a.password===t}));return-1!==a?(this.state.user=d[a],this.state.user.loggedIn=!0,!0):(this.state.user=null,!1)},logout:function(){this.state.user.loggedIn=!1,this.state.user=null}},p={data:function(){return{ctx:m.state,isActive:!1}},methods:{logout:function(){m.logout(),this.$router.push("/")}}},v=p,f=(a("5b49"),a("2877")),h=Object(f["a"])(v,r,o,!1,null,null,null),g=h.exports,b={components:{Nav:g}},C=b,y=Object(f["a"])(C,i,n,!1,null,null,null),_=y.exports,w=a("8c4f"),x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("section",{staticClass:"hero is-dark"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[e._v(" Get ready to be Healthy and Happy! ")]),a("div",{staticClass:"control"},[a("ul",[a("li",[a("router-link",{staticClass:"btn button is-primary is-medium is-rounded",attrs:{to:"/register"}},[e._v("Register")])],1),a("br"),a("li",[a("router-link",{staticClass:"btn button is-primary is-medium is-rounded",attrs:{to:"/login"}},[e._v("Already Registered?")])],1)])]),a("br"),a("h2",{staticClass:"subtitle"},[e._v(" register an acount to keep track of your hard work! ")])])])]),a("Nav")],1)},E=[],k={name:"Home",components:{}},I=k,N=(a("7f02"),Object(f["a"])(I,x,E,!1,null,"78df542c",null)),A=N.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",[a("div",{staticClass:"hero-body"},[a("h1",{staticClass:"title",staticStyle:{"font-size":"65px",color:"rgb(83, 50, 180)"},attrs:{align:"center"}},[e._v(" Log In ")]),a("div",{staticClass:"container"},[a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-5-tablet is-4-desktop is-3-widescreen"},[a("form",{staticClass:"box",attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{for:""}},[e._v("Username")]),a("div",{staticClass:"control has-icons-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"input",attrs:{type:"username",id:"Username",placeholder:"username goes here",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._m(0)])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{for:""}},[e._v("Password")]),a("div",{staticClass:"control has-icons-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input",attrs:{type:"password",id:"loginPassword",placeholder:"*******",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._m(1)])]),e._m(2),a("div",{staticClass:"field is-grouped is-grouped-multiline"},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary is-small is-rounded",staticStyle:{width:"150px"},on:{click:e.login}},[e._v(" submit ")])]),a("div",{staticClass:"control"},[a("router-link",{staticClass:"button is-primary is-small is-rounded",staticStyle:{"background-color":"rgb(125,150,150)"},attrs:{to:"/Register"}},[e._v("Register")])],1)])])])])])])])},L=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fa fa-envelope"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fa fa-lock"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"field"},[a("label",{staticClass:"checkbox",attrs:{for:""}},[a("input",{attrs:{type:"checkbox"}}),e._v(" Remember Me ")])])}],$={data:function(){return{username:"",password:""}},methods:{login:function(){m.login(this.username,this.password)?(this.$buefy.toast.open({message:"Successfully logged in",type:"is-success"}),this.$router.push("schedule")):this.$buefy.toast.open({message:"Login failed",type:"is-danger"})}}},S=$,B=Object(f["a"])(S,O,L,!1,null,"67d315fe",null),P=B.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",[a("div",{attrs:{id:"app"}},[a("div",{staticClass:"section"},[a("div",{staticClass:"container"},[e._m(0),a("h1",{staticClass:"title",staticStyle:{"font-size":"65px",color:"rgb(83, 50, 180)"},attrs:{align:"center"}},[e._v(" Registration ")]),a("form",{attrs:{id:"register-form"}},[a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{for:"username"}},[e._v("Username")]),a("div",{staticClass:"control has-icons-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"input",attrs:{type:"text",placeholder:"Username",name:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._m(1)]),a("label",{staticClass:"label",attrs:{for:"email"}},[e._v("Email")]),a("div",{staticClass:"control has-icons-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email",name:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._m(2)]),a("div",{staticClass:"columns row-one"},[a("div",{staticClass:"column"},[a("label",{staticClass:"label",attrs:{for:"firstName"}},[e._v("First Name")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.first_name,expression:"first_name"}],staticClass:"input",attrs:{type:"text",placeholder:"First Name",name:"firstName"},domProps:{value:e.first_name},on:{input:function(t){t.target.composing||(e.first_name=t.target.value)}}})])]),a("div",{staticClass:"column"},[a("label",{staticClass:"label",attrs:{for:"lastName"}},[e._v("Last Name")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.last_name,expression:"last_name"}],staticClass:"input",attrs:{type:"text",placeholder:"Last Name",name:"lastName"},domProps:{value:e.last_name},on:{input:function(t){t.target.composing||(e.last_name=t.target.value)}}})])])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("label",{staticClass:"label",attrs:{for:"password"}},[e._v("Password")]),a("div",{staticClass:"control has-icons-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password",name:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._m(3)])]),a("div",{staticClass:"column"},[a("label",{staticClass:"label",attrs:{for:"retypePassword"}},[e._v("Re-Type Password")]),a("div",{staticClass:"control has-icons-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.cpassword,expression:"cpassword"}],staticClass:"input",attrs:{type:"password",placeholder:"Confirm Password",name:"retypePassword"},domProps:{value:e.cpassword},on:{input:function(t){t.target.composing||(e.cpassword=t.target.value)}}}),e._m(4)])])]),a("div",{staticClass:"field is-grouped"},[e._m(5),a("div",{staticClass:"control"},[a("button",{staticClass:"button is-secondary is-medium is-rounded",staticStyle:{"background-color":"rgb(125,150,150)",color:"white"},on:{click:e.undo}},[e._v(" Clear ")])])])])])])])])])},j=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"media is-pulled-right"},[a("div",{staticClass:"media-content"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"icon is-left"},[a("i",{staticClass:"fa"},[e._v("user")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"icon is-left"},[a("i",{staticClass:"fa"},[e._v("envelope-square")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"icon is-left"},[a("i",{staticClass:"fa"},[e._v("key")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"icon is-left"},[a("i",{staticClass:"fa"},[e._v("lock")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary is-medium is-rounded",attrs:{type:"submit"}},[e._v(" Submit ")])])}],G=(a("96cf"),a("1da1")),q={name:"Register",components:{},data:function(){return{form:{username:"",email:"",first_name:"",last_name:"",password:"",cpassword:""},showError:!1}},methods:{submit:function(){var e=this;return Object(G["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.Register(e.form);case 3:e.$router.push("/schedule"),e.showError=!1,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.showError=!0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},undo:function(){this.$refs["username"].value="macaroni"}}},F=q,T=Object(f["a"])(F,R,j,!1,null,null,null),M=T.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("b-tabs",[a("b-tab-item",{staticStyle:{padding:"50px 0px"},attrs:{label:"Table"}},[a("b-table",{attrs:{data:e.data,columns:e.columns,"checked-rows":e.checkedRows,"is-row-checkable":function(e){return!0},"checkbox-position":e.left,checkable:""},on:{"update:checkedRows":function(t){e.checkedRows=t},"update:checked-rows":function(t){e.checkedRows=t}}},[a("b",[e._v("Total Checked")]),e._v(": "+e._s(e.checkedRows.length)+" "),e._l(e.columns,(function(t){return[a("b-table-column",e._b({key:t.id,scopedSlots:e._u([{key:"searchable",fn:function(s){return t.searchable&&!t.numeric?[a("b-input",{attrs:{placeholder:"Search...",size:"is-small"},model:{value:s.filters[s.column.field],callback:function(t){e.$set(s.filters,s.column.field,t)},expression:"props.filters[props.column.field]"}})]:void 0}},{key:"default",fn:function(a){return[e._v(" "+e._s(a.row[t.field])+" ")]}}],null,!0)},"b-table-column",t,!1))]}))],2)],1),a("b-tab-item",{attrs:{label:"Selected"}},[e.checkedRows.length>0?a("pre",[e._v(e._s(e.checkedRows))]):a("pre",[e._v("        You have to select at least one user\n      ")])])],1)],1)},J=[],U={data:function(){return{data:m.state.users,checkedRows:[],columns:[{field:"id",label:"ID#",width:"30",height:"100",numeric:!0,searchable:!0},{field:"name",label:"Full Name",searchable:!0},{field:"handle",label:"Username",searchable:!0},{field:"loggedIn",label:"Logged in?",searchable:!0},{field:"admin",label:"Administrator",searchable:!0}]}}},z=U,H=Object(f["a"])(z,D,J,!1,null,"3da39d5a",null),W=H.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",{staticClass:"title",staticStyle:{"font-size":"47px",color:"white"},attrs:{align:"center"}},[e._v(" Exercise Schedule ")]),e._l(e.ctx.user.routine,(function(t){return a("div",{key:t,staticClass:"column"},[a("div",{staticClass:"card"},[a("header",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title"},[e._v(" "+e._s(t.name)+" ")]),a("p",{staticClass:"card-header-icon",on:{click:function(a){return e.promptExerciseGroup(t.id)}}},[a("i",{staticClass:"fas fa-plus-square",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"card-content"},[a("div",{staticClass:"content"},[a("Exercise",{attrs:{exercises:t.exercises,dayId:t.id}})],1)])])])}))],2)},Y=[],K=(a("b0c0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("div",{staticClass:"card"},e._l(e.exercises,(function(t,s){return a("b-collapse",{key:t,staticClass:"card",attrs:{animation:"slide",open:!1}},[a("div",{staticClass:"card-header",attrs:{slot:"trigger",role:"button"},on:{click:function(t){e.isOpen=!e.isOpen}},slot:"trigger"},[a("p",{staticClass:"card-header-title"},[e._v(" "+e._s(t.name)+" ")]),a("a",{staticClass:"card-header-icon",attrs:{"aria-label":"more options"}},[a("i",{class:e.arrow,attrs:{"aria-hidden":"true"}})])]),e._l(t.activities,(function(t,i){return a("div",{key:t,staticClass:"card-content"},[e._v(" "+e._s(t.type)+" "),a("a",{staticClass:"card-item"},[a("i",{staticClass:"fas fa-minus-square",attrs:{"aria-hidden":"true"},on:{click:function(t){return e.removeGroupActivity(s,i)}}})])])})),a("footer",{staticClass:"card-footer"},[a("a",{staticClass:"card-footer-item",on:{click:function(t){return e.promptExerciseGroupActivity(s)}}},[a("i",{staticClass:"fas fa-plus",attrs:{"aria-hidden":"true"}})]),a("a",{staticClass:"card-footer-item",on:{click:function(t){return e.removeExerciseGroup(s)}}},[a("i",{staticClass:"fas fa-trash-alt",attrs:{"aria-hidden":"true"}})])])],2)})),1)])}),Q=[],X={props:["exercises","dayId"],data:function(){return{isOpen:!1}},computed:{arrow:function(){return this.isOpen?"fas fa-angle-up":"fas fa-angle-down"}},methods:{removeGroupActivity:function(e,t){m.removeActivityFromExerciseGroup(this.$props.dayId,e,t)},removeExerciseGroup:function(e){m.removeExerciseGroupFromDay(this.$props.dayId,e)},promptExerciseGroupActivity:function(e){var t=this;this.$buefy.dialog.prompt({message:"Enter an activity",inputAttrs:{placeholder:"e.g. Pullups",maxlength:25},trapFocus:!0,onConfirm:function(a){m.addActivityToGroup(t.$props.dayId,e,a),t.$buefy.toast.open({message:a+" added to "+m.state.user.routine[t.$props.dayId-1].name,type:"is-success"})}})}}},Z=X,ee=(a("e9a2"),Object(f["a"])(Z,K,Q,!1,null,null,null)),te=ee.exports,ae={name:"Schedule",data:function(){return{ctx:m.state}},components:{Exercise:te},methods:{promptExerciseGroup:function(e){var t=this;this.$buefy.dialog.prompt({message:"Enter an Exercise group",inputAttrs:{placeholder:"e.g. Biceps",maxlength:25},trapFocus:!0,onConfirm:function(a){m.addExerciseGroupToDay(e,a),t.$buefy.toast.open({message:a+" added to "+m.state.user.routine[e-1].name,type:"is-success"})}})}}},se=ae,ie=(a("87ed"),Object(f["a"])(se,V,Y,!1,null,"3cfcdb25",null)),ne=ie.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Profile"},[a("Nav",{ref:"Nav"}),e._m(0),e._m(1)],1)},oe=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"headerContainer"},[a("h1",{staticClass:"title",staticStyle:{"font-size":"65px",color:"rgb(83, 50, 180)"},attrs:{align:"center"}},[e._v(" Profile ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{staticClass:"profileContainer",attrs:{id:"profileForm"}},[a("div",{staticClass:"sectionContainer"},[a("div",{staticClass:"inputLine"},[a("div",{staticClass:"part-label"},[e._v("Name")]),a("div",{staticClass:"form-inline"},[a("input",{staticClass:"name-box form-control",attrs:{type:"text",id:"firstName",placeholder:"First Name"}}),a("input",{staticClass:"name-box form-control",attrs:{type:"text",id:"lastName",placeholder:"Last Name"}})])])]),a("div",{staticClass:"sectionContainer"},[a("div",{staticClass:"section-label"},[e._v("Nutritional Info")]),a("div",{staticClass:"inputLine"},[a("div",{staticClass:"part-label"},[e._v("Gender")]),a("select",{staticClass:"gender-box form-control",attrs:{id:"gender",placeholder:"Gender"}},[a("option",{attrs:{value:"M"}},[e._v("Male")]),a("option",{attrs:{value:"F"}},[e._v("Female")]),a("option",{attrs:{value:"O"}},[e._v("Other")])])]),a("div",{staticClass:"inputLine"},[a("div",{staticClass:"part-label"},[e._v("Height")]),a("div",{staticClass:"height-row"},[a("div",{staticClass:"height-col"},[a("input",{staticClass:"height-box form-control",attrs:{type:"number",id:"heightFT",min:"2",max:"10",placeholder:"0"}}),a("div",{staticClass:"height-unit"},[e._v("ft")])]),a("div",{staticClass:"height-col"},[a("input",{staticClass:"height-box form-control",attrs:{type:"number",id:"heightIN",min:"0",max:"11",placeholder:"0"}}),a("div",{staticClass:"height-unit"},[e._v("in")])])])]),a("div",{staticClass:"inputLine"},[a("div",{staticClass:"part-label"},[e._v("Age")]),a("input",{staticClass:"input-box form-control",attrs:{type:"number",id:"age",min:"9",max:"100",placeholder:"years"}})]),a("div",{staticClass:"inputLine"},[a("div",{staticClass:"part-label"},[e._v("Weight")]),a("input",{staticClass:"input-box form-control",attrs:{type:"number",id:"weight",min:"10",placeholder:"lb"}})]),a("div",{staticClass:"inputLine",attrs:{id:"activity"}},[a("div",{staticClass:"part-label"},[e._v("Exercise Goals")]),a("select",{staticClass:"input-box section-end form-control",attrs:{id:"weightGoals"}},[a("option",{attrs:{value:"-1000"}},[e._v("Lose weight")]),a("option",{attrs:{value:"-500"}},[e._v("gain weight")]),a("option",{attrs:{value:"500"}},[e._v("mental health benefits")]),a("option",{attrs:{value:"-1000"}},[e._v("general physical benefits")])])]),a("div",{staticClass:"inputLine",attrs:{id:"activity"}},[a("div",{staticClass:"part-label"},[e._v("Activity Level")]),a("select",{staticClass:"input-box form-control",attrs:{id:"activityLevel"}},[a("option",{attrs:{value:"1.000"}},[e._v("Basal Metabolic Rate (BMR)")]),a("option",{attrs:{value:"1.200"}},[e._v("Sedentary - little to no exersize")]),a("option",{attrs:{value:"1.375"}},[e._v("Lightly Active - exersize/sports 1-3 times a week")]),a("option",{attrs:{value:"1.550"}},[e._v("Moderately Active - exersize/sports 3-5 times a week")]),a("option",{attrs:{value:"1.725"}},[e._v("Very Active - exersize/sports 6-7 times a week")]),a("option",{attrs:{value:"1.900"}},[e._v("Exrta Active - very hard exercise/sports or physical job")])])])]),a("div",{staticClass:"sectionContainer"},[a("div",{staticClass:"section-label"},[e._v("Account Info")]),a("div",{staticClass:"inputLine"},[a("input",{staticClass:"input-box form-control",attrs:{type:"email",id:"email",placeholder:"Email"}})]),a("div",{staticClass:"inputLine"},[a("input",{staticClass:"input-box form-control",attrs:{id:"username",placeholder:"Username"}})]),a("div",{staticClass:"inputLine"},[a("input",{staticClass:"input-box section-end form-control",attrs:{id:"password",placeholder:"Password"}})])]),a("div",{attrs:{align:"center"}},[a("button",{staticClass:"btn btn-success submitBtn",attrs:{type:"submit"}},[e._v(" Submit ")])])])}],le=(Object({NODE_ENV:"production",BASE_URL:""}).API_ROOT,{data:function(){return{access:!1}},components:{},methods:{fillFields:function(e){document.getElementById("firstName").value=e.firstName,document.getElementById("lastName").value=e.lastName,document.getElementById("gender").value=e.gender,document.getElementById("heightFT").value=e.heightFT,document.getElementById("heightIN").value=e.heightIN,document.getElementById("weight").value=e.weight,document.getElementById("age").value=e.age,document.getElementById("activityLevel").value=e.activityLevel,document.getElementById("weightGoals").value=e.weightGoals,document.getElementById("email").value=e.email,document.getElementById("username").value=e.username,document.getElementById("password").value=e.password},updateUser:function(){var e=document.getElementById("email").value,t=document.getElementById("username").value,a=document.getElementById("password").value,s=document.getElementById("firstName").value,i=document.getElementById("lastName").value,n=document.getElementById("gender").value,r=document.getElementById("heightFT").value,o=document.getElementById("heightIN").value,l=document.getElementById("weight").value,c=document.getElementById("age").value,u=document.getElementById("activityLevel").value,d=document.getElementById("weightGoals").value,m=0;"M"==n?m=66+6.23*l+12.7*(12*r+o)-6.8*c*u-d:"F"==n&&(m=655+4.35*l+4.7*(12*r+o)-4.7*c*u-d),r<0||o<0||l<0?alert("Signup Info Can Not Be Negitive"):c<15||c>80?alert("Please Provide An Age Between 15 And 80"):(void 0)(e,t,a,s,i,n,r,o,l,c,u,d,m).then((function(e){"409"==e?alert("Username or Email is taken"):alert("Changes have been made")})),event.preventDefault()},mounted:function(){var e=this;(void 0)().then((function(t){"404"==t?((void 0)(),e.$router.push("/")):(e.fillFields(t),document.getElementById("profileForm").addEventListener("submit",e.updateUser),window.onbeforeunload=function(){return"Warning - Reloading site will log you out"})}))}}}),ce=le,ue=(a("ca35"),Object(f["a"])(ce,re,oe,!1,null,"6ffa3f00",null)),de=ue.exports,me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about"},[a("b-carousel",e._l(e.carousels,(function(t,s){return a("b-carousel-item",{key:s},[a("section",{class:"hero is-medium is-"+t.color},[a("div",{staticClass:"hero-body has-text-centered"},[a("h1",{staticClass:"title"},[e._v(e._s(t.text))])])])])})),1)],1)},pe=[],ve={data:function(){return{carousels:[{text:"“Today I will do what others won’t, so tomorrow I can accomplish what others can’t.” —Jerry Rice",color:"primary"},{text:"“Do something today that your future self will thank you for.”",color:"info"},{text:"“We are what we repeatedly do. Excellence then is not an act but a habit.” —Aristotle",color:"success"},{text:"“No matter how slow you go, you are still lapping everybody on the couch.” —Unknown",color:"warning"},{text:"“Sweat is fat crying.”",color:"danger"}],form:{bagel:"baggggell",jcole:"ASfasf"}}},methods:{dosome:function(){this.form["bagel"]="senfsnefn"}}},fe=ve,he=Object(f["a"])(fe,me,pe,!1,null,null,null),ge=he.exports;s["a"].use(w["a"]);var be=[{path:"/",name:"Home",component:A,meta:{requiresAdmin:!1,requiresLogin:!1}},{path:"/home",name:"Home2",component:A,meta:{requiresAdmin:!1,requiresLogin:!1}},{path:"/login",name:"Login",component:P,meta:{requiresAdmin:!1,requiresLogin:!1}},{path:"/dashboard",name:"Dashboard",component:W,meta:{requiresAdmin:!0,requiresLogin:!0}},{path:"/register",name:"Register",component:M,meta:{requiresAdmin:!1,requiresLogin:!1}},{path:"/schedule",name:"Schedule",component:ne,meta:{requiresAdmin:!1,requiresLogin:!0}},{path:"/profile",name:"Profile",component:de,meta:{requiresAdmin:!1,requiresLogin:!0}},{path:"/about",name:"About",component:ge,meta:{requiresAdmin:!1,requiresLogin:!1}}],Ce=new w["a"]({mode:"history",base:"",routes:be});Ce.beforeEach((function(e,t,a){var s=m.state.user;null===s&&e.meta.requiresLogin?a("/login"):e.meta.requiresAdmin&&!s.admin?a("/home"):a()}));var ye=Ce,_e=a("289d");a("5abe"),a("15f5");s["a"].use(_e["a"],{defaultIconComponent:"vue-fontawesome",defaultIconPack:"fas"}),s["a"].config.productionTip=!1,new s["a"]({router:ye,render:function(e){return e(_)}}).$mount("#app")},"58de":function(e,t,a){},"5b49":function(e,t,a){"use strict";var s=a("58de"),i=a.n(s);i.a},"7f02":function(e,t,a){"use strict";var s=a("e1d1"),i=a.n(s);i.a},"87ed":function(e,t,a){"use strict";var s=a("944a"),i=a.n(s);i.a},"944a":function(e,t,a){},c688:function(e,t,a){},ca35:function(e,t,a){"use strict";var s=a("2b5c"),i=a.n(s);i.a},e1d1:function(e,t,a){},e9a2:function(e,t,a){"use strict";var s=a("c688"),i=a.n(s);i.a}});
//# sourceMappingURL=app.94f405c2.js.map