(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{169:function(e,t,n){},223:function(e,t,n){e.exports=n(415)},228:function(e,t,n){},415:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),u=(n(228),n(161)),i=n(24),l=n(417),s=n(137),m=n(38),f=n.n(m),p=n(58),b=n(139),d=n(221),h=n(34),j=(n(230),n(33)),v=n(418),O=n(422),E=(n(169),n(420)),g=n(419),y=n(421),k=n(423),S=(E.a.Title,E.a.Text,function(e){var t=e.visible,n=e.onCancel,c=e.onSubmit,o=Object(a.useState)([]),u=Object(h.a)(o,2),i=u[0],l=u[1],s=Object(a.useState)(null),m=Object(h.a)(s,2),b=m[0],d=m[1],j=g.a.useForm(),v=Object(h.a)(j,1)[0];Object(a.useEffect)((function(){Object(p.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/ratings");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,l(n);case 7:case"end":return e.stop()}}),e)})))()}),[]);return r.a.createElement(y.a,{title:"Rate the latest bad joke",visible:t,okText:"Submit",onCancel:n,onOk:function(){v.validateFields().then((function(e){c(e),n()})).catch((function(e){console.log("Validate Failed:",e)}))}},r.a.createElement(g.a,{form:v,layout:"vertical",name:"rating-modal"},r.a.createElement(g.a.Item,{name:"rating",label:"Rating",rules:[{required:!0,message:"You have to select rating before you can submit."}]},r.a.createElement(k.a,{count:i.length,tooltips:i.map((function(e){return r.a.createElement(a.Fragment,null,r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.description))})),value:b,onChange:function(){!function(e){d(e)}(b)},allowClear:!0}))))}),w=(l.a.Header,l.a.Content),x=function(e){var t=e.replace(/([A-Z])/g," $1");return t.charAt(0).toUpperCase()+t.slice(1)},C=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),u=Object(h.a)(o,2),i=u[0],m=u[1],E=Object(a.useState)(null),g=Object(h.a)(E,2),y=g[0],k=g[1],C=function(e){return r.a.createElement(j.a,{type:"primary",shape:"circle",icon:r.a.createElement(O.a,null),onClick:function(){m(!0),k(e)}})},T=function(e){return e.sort((function(e,t){return t.score-e.score})),e.map((function(e){e.imgUrl;var t=Object(d.a)(e,["imgUrl"]);return Object(b.a)({},t)})).map((function(e,t){return Object(b.a)(Object(b.a)({rank:t+1},e),{},{actions:C(e)})}))},A=function(){var e=Object(p.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/users");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(T(n));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){A()}),[]);var F=n&&n.length&&Object(s.a)(Object.keys(n[0]).filter((function(e){return!["imgUrl","id"].includes(e)})).map((function(e,t){return{key:t,dataIndex:e,title:x(e)}}))),I=function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/users/".concat(y.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:m(!1),k(null),A();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(l.a,null,r.a.createElement(w,null,r.a.createElement(v.a,{columns:F,dataSource:n}),r.a.createElement(S,{onSubmit:I,visible:i,onCancel:function(){return m(!1)}})))},T=n(424),A=function(e){var t=e.visible,n=e.onCancel,c=e.onSubmit,o=Object(a.useState)(""),u=Object(h.a)(o,2),i=(u[0],u[1],Object(a.useState)("")),l=Object(h.a)(i,2),s=(l[0],l[1],g.a.useForm()),m=Object(h.a)(s,1)[0];return r.a.createElement(y.a,{title:"Add a new user to the competition",visible:t,okText:"Submit",onCancel:n,onOk:function(){m.validateFields().then((function(e){c(e),n()})).catch((function(e){console.log("Validate Failed:",e)}))}},r.a.createElement(g.a,{form:m,layout:"vertical",name:"user-modal"},r.a.createElement(g.a.Item,{name:"firstName",label:"First Name",rules:[{required:!0,message:"The user must have a first name"}]},r.a.createElement(T.a,null)),r.a.createElement(g.a.Item,{name:"lastName",label:"Last Name",rules:[{required:!0,message:"The user must have a last name"}]},r.a.createElement(T.a,null))))},F=l.a.Content,I=function(e){var t=e.replace(/([A-Z])/g," $1");return t.charAt(0).toUpperCase()+t.slice(1)},U=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),u=Object(h.a)(o,2),i=u[0],l=u[1],m=function(){var e=Object(p.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/users");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){m()}),[]);var b=n&&n.length&&Object(s.a)(Object.keys(n[0]).filter((function(e){return!["imgUrl","score"].includes(e)})).map((function(e,t){return{key:t,dataIndex:e,title:I(e)}}))),d=function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:l(!1),m();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(F,null,r.a.createElement(v.a,{columns:b,dataSource:n}),r.a.createElement(j.a,{type:"primary",onClick:function(){return l(!0)}},"Add a new user"),r.a.createElement(A,{onSubmit:d,visible:i,onCancel:function(){return l(!1)}}))},N=n(70),J=["home","admin"],$=function(){var e=Object(i.e)();return r.a.createElement(N.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["0"]},J.map((function(t,n){return r.a.createElement(N.a.Item,{key:n,title:t,onClick:function(){e.push("/".concat("home"===t?"":t))}},function(e){var t=e.replace(/([A-Z])/g," $1");return t.charAt(0).toUpperCase()+t.slice(1)}(t))})))},q=l.a.Header,H=function(){return r.a.createElement(u.a,null,r.a.createElement(l.a,null,r.a.createElement(q,null,r.a.createElement($,null)),r.a.createElement(i.a,{path:"/",component:C,exact:!0}),r.a.createElement(i.a,{path:"/admin",component:U,exact:!0})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[223,1,2]]]);
//# sourceMappingURL=main.cb5b3570.chunk.js.map