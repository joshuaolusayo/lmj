(this.webpackJsonplmj=this.webpackJsonplmj||[]).push([[16],{190:function(t,e,n){"use strict";n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return j}));var c=n(191),a=n.n(c),r=n(192),i=n(23),s=n(193),o=n.n(s),u=function(){return function(){var t=Object(r.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o.a.get("/blog/articles.json").then((function(t){return t.data})).then((function(t){e({type:i.c,payload:t})})).catch((function(t){return console.log(t)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},l=function(){return function(){var t=Object(r.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o.a.get("/blog/articles.json").then((function(t){return t.data})).then((function(t){e({type:i.b,payload:t[0]})})).catch((function(t){return console.log(t)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(t){return function(){var e=Object(r.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.a.get("/blog/articles.json").then((function(t){return t.data})).then((function(e){return e.find((function(e){return e.heading===t}))})).then((function(t){n({type:i.a,payload:t})})).catch((function(t){return console.log(t)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(){return function(){var t=Object(r.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o.a.get("/blog/articles.json").then((function(t){return t.data})).then((function(t){e({type:i.d,payload:t.slice(0,3)})})).catch((function(t){return console.log(t)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},251:function(t,e,n){"use strict";n.r(e);var c=n(30),a=n(1),r=n(0),i=n(14),s=n(45),o=n(8),u=n(190),l=n(205),d=n(4),j=Object(r.lazy)((function(){return Object(d.a)((function(){return n.e(17).then(n.bind(null,242))}))}));e.default=Object(s.b)((function(t){return{article:t.posts.article}}),{fetchArticle:u.a})((function(t){var e=Object(o.m)(),n=Object(r.useState)(!0),s=Object(c.a)(n,2),u=s[0],d=s[1],h=Object(r.useState)(""),f=Object(c.a)(h,2),b=f[0],p=f[1];Object(r.useEffect)((function(){b&&window.location.href!==b&&d(!0),u&&(p(window.location.href),t.fetchArticle(e.heading).then((function(){return d(!1)})))}),[window.location.href,u]);var m=t.article;return u||Object(l.isEmpty)(m)?Object(a.jsx)("div",{className:"my-5 text-center lead",children:"Loading..."}):Object(a.jsx)(i.b,{children:Object(a.jsxs)("div",{className:"container-fluid article px-0",children:[Object(a.jsxs)(i.a,{children:[Object(a.jsx)("title",{children:m.heading}),Object(a.jsx)("meta",{name:"description",content:m.heading}),Object(a.jsx)("meta",{name:"keywords",content:"".concat(m.heading,", ").concat(m.tag)})]}),Object(a.jsx)("div",{className:"banner",style:{background:"linear-gradient(rgba(0,0,0.2), rgba(0,0,0,0.2)), url(".concat(m.image,") 15% 0%")},children:Object(a.jsxs)("div",{className:"container d-flex flex-column justify-content-center align-items-center h-100 text-light",children:[Object(a.jsx)("span",{className:"text-uppercase mb-3",children:m.tag}),Object(a.jsx)("h3",{className:"font-weight-bold text-center",children:m.heading}),Object(a.jsxs)("span",{className:"mt-2",children:[Object(a.jsx)("i",{className:"fa fa-clock-o"})," ",m.date]})]})}),Object(a.jsx)("div",{className:"container mt-5 mb-8 px-2 px-sm-auto",children:Object(a.jsx)("div",{className:"row no-gutters",children:Object(a.jsxs)("div",{className:"w-100",children:[Object(a.jsxs)("div",{className:"text-center mb-5",children:[Object(a.jsx)("q",{className:"lead",children:m.quoteStart}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{children:["- ",m.quoteStartAuthor]})]}),Object(a.jsx)("p",{children:m.intro}),m.section.map((function(t,e){return Object(a.jsxs)("div",{className:"my-5",children:[Object(a.jsx)("h4",{className:"font-weight-bold",children:t.heading}),t.para.map((function(t,e){return Object(a.jsx)("p",{children:t},e)}))]},e)})),Object(a.jsxs)("div",{className:"text-center mb-5",children:[Object(a.jsx)("q",{className:"lead",children:m.quoteEnd}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{children:["- ",m.quoteEndAuthor]})]}),Object(a.jsx)(j,{tag:m.tag,heading:m.heading,img:m.image,intro:m.intro})]})})})]})})}))}}]);
//# sourceMappingURL=16.1371fd40.chunk.js.map