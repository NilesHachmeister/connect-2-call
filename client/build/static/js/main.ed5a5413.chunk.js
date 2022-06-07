(this["webpackJsonpconnect-2-call"]=this["webpackJsonpconnect-2-call"]||[]).push([[0],{49:function(e,a,t){},81:function(e,a,t){},88:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/card6.9d451640.jpeg"},89:function(e,a,t){"use strict";t.r(a);var n,r,c,i=t(1),s=t.n(i),l=t(25),o=t.n(l),j=(t(81),t(36)),d=t(37),b=t(65),u=t(74),h=t(4),g=t(73),O=t(105),p=t(107),m=t(102),x=t(70),v=t(51),y=t(23),f=t(29),k=t(13),w=t(8),C=t(104),L=t(103),S=t(100),$=t(108),F=t(45),q=t(106),T=Object(q.a)(n||(n=Object(F.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),P=(Object(q.a)(r||(r=Object(F.a)(["\n  mutation addPost($taskTitle: String!, $callLanguage: String!, $description: String!, $callCategory: String, $payment: String!, $callTime: String!, $phoneNumberToCall: String!, $postUser: String!) {\n    addPost(taskTitle: $taskTitle, callLanguage: $callLanguage, description: $description, callCategory: $callCategory, payment: $payment, callTime: $callTime, phoneNumberToCall: $phoneNumberToCall, postUser: $postUser ) {\n      \n        _id\n        taskTitle\n        callLanguage\n        description\n        callCategory\n        payment\n        callTime\n        phoneNumberToCall\n    postUser\n      \n    }\n  }\n"]))),Object(q.a)(c||(c=Object(F.a)(["\nmutation AddUser($name: String!, $email: String!, $password: String!, $siteLanguage: String!, $spokenLanguage: String!, $isCaller: Boolean!) {\n  addUser(name: $name, email: $email, password: $password, siteLanguage: $siteLanguage, spokenLanguage: $spokenLanguage, isCaller: $isCaller) {\n       user {\n        _id\n        name\n        email\n        password\n        siteLanguage\n        spokenLanguage\n        isCaller\n        category\n      }\n      token\n  }\n}"])))),U=t(54),I=t.n(U),_=new(function(){function e(){Object(j.a)(this,e)}return Object(d.a)(e,[{key:"getProfile",value:function(){return I()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return I()(e).exp<Date.now()/1e3}catch(a){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),E=t(0),G=function(){var e=Object(i.useState)({name:"",email:"",password:"",siteLanguage:"",spokenLanguage:"",isCaller:!1,category:""}),a=Object(w.a)(e,2),t=a[0],n=a[1],r=Object($.a)(P),c=Object(w.a)(r,2),s=c[0],l=c[1].error,o=Object(i.useState)(!1),j=Object(w.a)(o,1)[0],d=Object(i.useState)(!1),b=Object(w.a)(d,2),u=b[0],g=b[1],O=function(e){var a=e.target,r=a.name,c=a.value;n(Object(h.a)(Object(h.a)({},t),{},Object(k.a)({},r,c)))},p=function(){var e=Object(f.a)(Object(y.a)().mark((function e(a){var r,c;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,s({variables:Object(h.a)({},t)});case 6:if(r=e.sent,c=r.data,console.log(c),!l){e.next=11;break}throw new Error("something went wrong!");case 11:_.login(c.addUser.token),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),console.error(e.t0),g(!0);case 18:n({name:"",email:"",password:"",siteLanguage:"",spokenLanguage:"",isCaller:!1,category:""});case 19:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(a){return e.apply(this,arguments)}}();return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(C.a,{noValidate:!0,validated:j,onSubmit:p,children:[Object(E.jsx)(L.a,{dismissible:!0,onClose:function(){return g(!1)},show:u,variant:"danger",children:"Something went wrong with your signup!"}),Object(E.jsxs)(C.a.Group,{children:[Object(E.jsx)(C.a.Label,{htmlFor:"name",children:"name"}),Object(E.jsx)(C.a.Control,{type:"text",placeholder:"Your name",name:"name",onChange:O,value:t.name,required:!0}),Object(E.jsx)(C.a.Control.Feedback,{type:"invalid",children:"name is required!"})]}),Object(E.jsxs)(C.a.Group,{children:[Object(E.jsx)(C.a.Label,{htmlFor:"email",children:"Email"}),Object(E.jsx)(C.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:O,value:t.email,required:!0}),Object(E.jsx)(C.a.Control.Feedback,{type:"invalid",children:"Email is required!"})]}),Object(E.jsxs)(C.a.Group,{children:[Object(E.jsx)(C.a.Label,{htmlFor:"password",children:"Password"}),Object(E.jsx)(C.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:O,value:t.password,required:!0}),Object(E.jsx)(C.a.Control.Feedback,{type:"invalid",children:"Password is required!"})]}),Object(E.jsxs)(C.a.Group,{children:[Object(E.jsx)(C.a.Label,{htmlFor:"siteLanguage",children:"siteLanguage"}),Object(E.jsx)(C.a.Control,{type:"text",placeholder:"siteLanguage",name:"siteLanguage",onChange:O,value:t.siteLanguage,required:!0}),Object(E.jsx)(C.a.Control.Feedback,{type:"invalid",children:"siteLanguage is required!"})]}),Object(E.jsxs)(C.a.Group,{children:[Object(E.jsx)(C.a.Label,{htmlFor:"spokenLanguage",children:"spokenLanguage"}),Object(E.jsx)(C.a.Control,{type:"text",placeholder:"spokenLanguage",name:"spokenLanguage",onChange:O,value:t.spokenLanguage,required:!0}),Object(E.jsx)(C.a.Control.Feedback,{type:"invalid",children:"spokenLanguage is required!"})]}),Object(E.jsxs)(C.a.Group,{children:[Object(E.jsx)(C.a.Label,{htmlFor:"isCaller",children:"isCaller"}),Object(E.jsx)(C.a.Control,{type:"checkbox",name:"isCaller",onChange:function(e){var a=e.target.name;n(Object(h.a)(Object(h.a)({},t),{},Object(k.a)({},a,!t.isCaller))),console.log(t.isCaller)},required:!0}),Object(E.jsx)(C.a.Control.Feedback,{type:"invalid",children:"isCaller is required!"})]}),Object(E.jsxs)(C.a.Group,{children:[Object(E.jsx)(C.a.Label,{htmlFor:"category",children:"category"}),Object(E.jsx)(C.a.Control,{type:"text",placeholder:"category",name:"category",onChange:O,value:t.category,required:!0}),Object(E.jsx)(C.a.Control.Feedback,{type:"invalid",children:"category is required!"})]}),Object(E.jsx)(S.a,{disabled:!(t.name&&t.email&&t.password),type:"submit",variant:"success",children:"Submit"})]})})},B=(t(49),function(){return Object(E.jsxs)("main",{children:[Object(E.jsx)("div",{class:"fixed-bg"}),Object(E.jsx)("li",{class:"card",id:"card_1",children:Object(E.jsxs)("div",{class:"card__content",children:[Object(E.jsxs)("div",{children:[Object(E.jsx)("h2",{children:Object(E.jsx)("i",{children:'"I\'m so thankful I can depend on you!"'})}),Object(E.jsx)("p",{children:"-Joan from Minneapolis "}),Object(E.jsx)("p",{children:Object(E.jsx)("a",{href:"#top",class:"btn btn--accent",children:"Read more"})})]}),Object(E.jsx)("figure",{class:!0,children:Object(E.jsx)("img",{src:t(88),alt:"this is Joan"})})]})}),Object(E.jsxs)("aside",{children:[Object(E.jsxs)("div",{class:"card",id:"card-about",children:[Object(E.jsx)("p",{children:"Blah Blah Blah....where we explain our App"}),Object(E.jsx)("br",{})]}),Object(E.jsxs)("div",{class:"container",id:"container",children:[Object(E.jsx)("div",{class:"form-container log-in-container",children:Object(E.jsxs)("form",{action:"#",children:[Object(E.jsx)("h1",{children:"Welcome Back!"}),Object(E.jsx)("br",{}),Object(E.jsx)("input",{type:"email",placeholder:"Email"}),Object(E.jsx)("input",{type:"password",placeholder:"Password"}),Object(E.jsx)("button",{children:"Log In"})]})}),Object(E.jsx)("div",{class:"overlay-container",children:Object(E.jsx)("div",{class:"overlay",children:Object(E.jsxs)("div",{class:"overlay-panel overlay-right",children:[Object(E.jsx)("h4",{children:"New Here?"}),Object(E.jsx)("p",{children:"SIgn up below to either make or request calls."}),Object(E.jsx)("button",{children:"Sign Up"}),Object(E.jsx)("br",{})]})})})]})]})]})}),D=function(){var e=Object(i.useState)({email:"",password:"",username:""}),a=Object(w.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(!1),c=Object(w.a)(r,1)[0],s=Object(i.useState)(!1),l=Object(w.a)(s,2),o=l[0],j=l[1],d=Object($.a)(T),b=Object(w.a)(d,1)[0],u=function(e){var a=e.target,r=a.name,c=a.value;n(Object(h.a)(Object(h.a)({},t),{},Object(k.a)({},r,c)))},g=function(){var e=Object(f.a)(Object(y.a)().mark((function e(a){var r,c;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,b({variables:Object(h.a)({},t)});case 6:r=e.sent,c=r.data,_.login(c.login.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),j(!0);case 15:n({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(C.a,{noValidate:!0,validated:c,onSubmit:g,children:[Object(E.jsx)(L.a,{dismissible:!0,onClose:function(){return j(!1)},show:o,variant:"danger",children:"Something went wrong with your login credentials!"}),Object(E.jsxs)(C.a.Group,{children:[Object(E.jsx)(C.a.Label,{htmlFor:"email",children:"Email"}),Object(E.jsx)(C.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:u,value:t.email,required:!0}),Object(E.jsx)(C.a.Control.Feedback,{type:"invalid",children:"Email is required!"})]}),Object(E.jsxs)(C.a.Group,{children:[Object(E.jsx)(C.a.Label,{htmlFor:"password",children:"Password"}),Object(E.jsx)(C.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:u,value:t.password,required:!0}),Object(E.jsx)(C.a.Control.Feedback,{type:"invalid",children:"Password is required!"})]}),Object(E.jsx)(S.a,{disabled:!(t.email&&t.password),type:"submit",variant:"success",children:"Submit"})]})})},H=function(){return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("header",{children:Object(E.jsx)("div",{class:"header",children:Object(E.jsxs)("div",{class:"header-right",children:[Object(E.jsx)("a",{class:"button",href:"#home",children:"Home"}),Object(E.jsx)("a",{class:"button",href:"#login",children:"Login"}),Object(E.jsx)("a",{class:"button",href:"#signup",children:"Sign Up"})]})})})})};var N=function(){return Object(E.jsxs)("footer",{children:[Object(E.jsxs)("ul",{class:"list-inline",children:[Object(E.jsx)("li",{class:"list-inline-item",children:Object(E.jsx)("a",{href:"#",children:"Home"})}),Object(E.jsx)("li",{class:"list-inline-item",children:Object(E.jsx)("a",{href:"#",children:"Login"})}),Object(E.jsx)("li",{class:"list-inline-item",children:Object(E.jsx)("a",{href:"#",children:"Sign Up"})}),Object(E.jsx)("li",{class:"list-inline-item",children:Object(E.jsx)("a",{href:"#",children:"FAQ's"})})]}),Object(E.jsx)("p",{class:"copyright",children:"Connect 2 Call \xa9 2022"})]})},Y=function(){var e=Object(i.useState)("Home"),a=Object(w.a)(e,2),t=a[0],n=a[1];return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(H,{currentPage:t,changeFunction:function(e){n(e)}}),"Home"===t?Object(E.jsx)(B,{}):"Login"===t?Object(E.jsx)(D,{}):"SignUp"===t?Object(E.jsx)(G,{}):void 0,Object(E.jsx)(N,{})]})},J=Object(g.a)({uri:"/graphql"}),V=Object(x.a)((function(e,a){var t=a.headers,n=localStorage.getItem("id_token");return{headers:Object(h.a)(Object(h.a)({},t),{},{authorization:n?"Bearer ".concat(n):""})}})),A=new O.a({link:V.concat(J),cache:new p.a}),M=function(e){Object(b.a)(t,e);var a=Object(u.a)(t);function t(){return Object(j.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return Object(E.jsx)(m.a,{client:A,children:Object(E.jsx)(v.a,{children:Object(E.jsx)(Y,{})})})}}]),t}(s.a.Component),z=M;o.a.render(Object(E.jsx)(s.a.StrictMode,{children:Object(E.jsx)(z,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.ed5a5413.chunk.js.map