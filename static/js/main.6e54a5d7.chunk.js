(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(5),s=n.n(o),r=n(1),l=(n(11),n(12),n(13),function(e){var t=e.posts,n=e.postId,a=e.setPostId,o=e.selectOnePost;return c.a.createElement("div",{className:"PostsList"},c.a.createElement("h2",null,"Posts:"),c.a.createElement("ul",{className:"PostsList__list"},t.map((function(e){return c.a.createElement("li",{key:e.id,className:"PostsList__item"},c.a.createElement("div",null,c.a.createElement("b",null,"User #".concat(e.userId)),e.body),n===e.id?c.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){return a(0)}},"Close"):c.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){a(e.id),o(e.id)}},"Open"))}))))}),m=n(2),u=n(3),i=(n(14),"https://mate-api.herokuapp.com");function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0;return fetch("".concat(i).concat(e).concat(t),n).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))}function p(){return d("/comments")}function f(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return d(e,t,{method:"DELETE"})}("/comments/",e)}function b(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0;return d(e,t,{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(n)})}("/comments","",e)}var E=function(e){var t=e.postId,n=e.setComments,o=Object(a.useState)({postId:t,name:"",email:"",body:""}),s=Object(r.a)(o,2),l=s[0],i=s[1],d=function(e){var t=e.target;i((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(m.a)({},t.name,t.value))}))};return c.a.createElement("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault(),b(l).then(p).then((function(e){return n(e.data)})),i({postId:t,name:"",email:"",body:""})}},c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",value:l.name,name:"name",placeholder:"Your name",className:"NewCommentForm__input",onChange:d})),c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"email",value:l.email,placeholder:"Your email",className:"NewCommentForm__input",onChange:d})),c.a.createElement("div",{className:"form-field"},c.a.createElement("textarea",{name:"body",value:l.body,placeholder:"Type comment here",className:"NewCommentForm__input",onChange:d})),c.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button",disabled:Object.values(l).some((function(e){return""===e}))},"Add a comment"))},h=(n(15),function(e){var t=e.title,n=e.selectedPostId,o=Object(a.useState)(!1),s=Object(r.a)(o,2),l=s[0],m=s[1],u=Object(a.useState)([]),i=Object(r.a)(u,2),d=i[0],b=i[1];Object(a.useEffect)((function(){p().then((function(e){return b(e.data)}))}),[]);var h=d.filter((function(e){return e.postId===n}));return c.a.createElement("div",{className:"PostDetails"},c.a.createElement("h2",null,"Post details:"),c.a.createElement("section",{className:"PostDetails__post"},c.a.createElement("p",null,t)),c.a.createElement("section",{className:"PostDetails__comments"},0!==h.length&&c.a.createElement("button",{type:"button",className:"button",onClick:function(){return m(!l)}},l?"Show ".concat(h.length," comments"):"Hide ".concat(h.length," comments")),!l&&c.a.createElement("ul",{className:"PostDetails__list"},h.map((function(e){return c.a.createElement("li",{key:e.id,className:"PostDetails__list-item"},c.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){f(e.id).then(p).then((function(e){return b(e.data)}))}},"X"),c.a.createElement("p",null,e.body))})))),c.a.createElement("section",null,c.a.createElement("div",{className:"PostDetails__form-wrapper"},c.a.createElement(E,{postId:n,setComments:b}))))});function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return d("/posts/".concat(e))}h.defaultProps={title:""};var _=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],o=t[1],s=Object(a.useState)({}),m=Object(r.a)(s,2),u=m[0],i=m[1],p=Object(a.useState)([]),f=Object(r.a)(p,2),b=f[0],E=f[1],_=Object(a.useState)(0),N=Object(r.a)(_,2),O=N[0],j=N[1];Object(a.useEffect)((function(){v().then((function(e){return o(e.data)})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return d("/users/".concat(e))}().then((function(e){return E(e.data)}))}),[]);return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App__header"},c.a.createElement("label",null,"Select a user: \xa0",c.a.createElement("select",{className:"App__user-selector",onChange:function(e){var t,n=e.target.value;"0"!==n&&(t=n,d("/posts?userId=".concat(t))).then((function(e){return o(e.data)})),"0"===n&&v().then((function(e){return o(e.data)}))}},c.a.createElement("option",{value:"0"},"All users"),b.map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.name)}))))),c.a.createElement("main",{className:"App__main"},c.a.createElement("div",{className:"App__sidebar"},c.a.createElement(l,{posts:n,postId:O,setPostId:j,selectOnePost:function(e){v(e).then((function(e){return i(e.data)}))}})),c.a.createElement("div",{className:"App__content"},0!==O&&c.a.createElement(h,Object.assign({},u,{selectedPostId:O})))))};s.a.render(c.a.createElement(_,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.6e54a5d7.chunk.js.map