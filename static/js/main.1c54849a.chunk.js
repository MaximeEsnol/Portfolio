(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{19:function(e){e.exports=JSON.parse('[{"name":"OnStage","slug":"onstage","description":"A website and application that allows people to find concerts of their favorite artists near them.","technologies":["React Native","Java","Spring"],"images":[{"src":"onstage_1.png","alt":"Screenshot of a show from The Weeknd\'s After Hours tour in the OnStage application."}],"repository":[{"name":"OnStage Application","url":"https://gitlab.com/MaximeEsnol/onstage"},{"name":"OnStage API","url":"https://gitlab.com/MaximeEsnol/onstagewebapp"}]},{"name":"Box Shadow Generator","slug":"box-shadow","description":"Quickly and easily generate complex box shadows. The application generates the appropriate CSS on the fly. Once you find the perfect shadow, simply copy and paste the generated CSS into your own code.","technologies":["React"],"images":[{"src":"bsg_1.png","alt":"Screenshot of the Box Shadow Generator website."},{"src":"bsg_2.png","alt":"Screenshot of the Box Shadow Generator website with the generated CSS shown."}],"repository":"https://github.com/MaximeEsnol/BoxShadowGenerator","demo":"https://shadows.maximeesnol.dev"}]')},41:function(e,t,a){e.exports=a(74)},46:function(e,t,a){},47:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},48:function(e,t,a){},53:function(e){e.exports=JSON.parse('[{"name":"LinkedIn","url":"https://www.linkedin.com/in/maxime-esnol-939855183/","username":"MaximeEsnol","icon":"fab fa-linkedin","accent":"#0077B5"},{"name":"GitHub","url":"https://github.com/MaximeEsnol","username":"MaximeEsnol","icon":"fab fa-github","accent":"#4f4f4f"}]')},54:function(e){e.exports=JSON.parse('{"name":"Maxime Esnol","email":"maxime.esnol02@gmail.com","linkedin":"","github":"","bio":"I\'m Maxime, a passionate web developer that\'s eager to learn new things constantly.","photo":"maxime_esnol.jpg"}')},71:function(e){e.exports=JSON.parse('[{"date":"02-11-1999","title":"I was born","content":"On the 11th of February 1999, I was born. That is where it all began."},{"date":"09-24-2017","title":"Start of my IT studies","content":"I decide to start studying my passion: IT. I begin my studies at Odisee High School."},{"date":"06-30-2017","title":"Graduated with a Tourism degree","content":"In 2017, I finished my secondary studies and graduated with a Tourism degree. "}]')},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),o=(a(46),a(47),a(48),a(8)),i=a(3),s=function(e){var t=Object(n.useRef)(!1);Object(n.useEffect)((function(){t.current||(document.title=e,t.current=!0)}))},m=a(2),u=function(e){var t=e.children,a=e.delay,l=void 0===a?0:a,c=e.duration,o=void 0===c?1e3:c,i=e.classNames,s=void 0===i?"":i,u=e.started,d=void 0!==u&&u,h=Object(n.useRef)(null),f=Object(n.useRef)(null),E=Object(n.useRef)(t.props.className).current,p=Object(n.useState)(t),b=Object(m.a)(p,2),g=b[0],v=b[1];Object(n.useEffect)((function(){return d&&null==h.current&&(h.current=setTimeout((function(){j()}),l)),function(){y()}}),[d]);var j=function(){f.current=setTimeout((function(){v(r.a.cloneElement(t,{className:E+" "+s+" playing done"}))}),o),v(r.a.cloneElement(t,{className:E+" "+s+" playing active"}))},y=function(){clearTimeout(h.current),clearTimeout(f.current),h.current=null,f.current=null};return r.a.createElement(r.a.Fragment,null,g)},d=function(e){var t=e.onRequestScroll;return r.a.createElement("section",null,r.a.createElement("h1",{className:"multiline"},r.a.createElement(u,{started:!0,duration:2e3,classNames:""},r.a.createElement("span",{className:"line home-hi"},"Hi,")),r.a.createElement(u,{started:!0,duration:1e3,delay:1200,classNames:""},r.a.createElement("span",{className:"line home-name"},"I'm Maxime"))),r.a.createElement("div",{className:"home-bio-container"},r.a.createElement(u,{started:!0,duration:1e3,delay:2800,classNames:""},r.a.createElement("p",{className:"home-bio"},"I'm a passionate web developer who loves to learn about new technologies, build memorable user experiences and watch the stars."))),r.a.createElement(u,{started:!0,duration:1e3,delay:4800},r.a.createElement("div",{className:"fab-btn home-fab",onClick:t.bind(void 0)},r.a.createElement(u,{started:!0,duration:500,delay:5300},r.a.createElement("i",{className:"fas fa-chevron-down home-fab-icon"})))))},h=a(13),f=a.n(h),E=function(e){var t=e.project,a=e.isAnimated,l=void 0!==a&&a,c=Object(n.useState)(l?"animated":""),i=Object(m.a)(c,2),s=i[0],d=(i[1],r.a.createElement("h3",null,r.a.createElement(o.b,{to:"/project/"+t.slug},t.name,r.a.createElement("i",{className:"fas fa-chevron-right"})))),h=r.a.createElement("p",null,t.description),f=r.a.createElement("div",{className:"project-image",style:{backgroundImage:"url(/images/"+t.images[0].src+")"}});return r.a.createElement("div",{className:"project-container"},r.a.createElement("div",{className:"project "+s},r.a.createElement("div",{className:"project-description"},l?r.a.createElement(u,{started:!0,delay:750,duration:3e3,children:d}):d,l?r.a.createElement(u,{started:!0,delay:2750,duration:1e3,children:h}):h),l?r.a.createElement(u,{started:!0,delay:4250,duration:750,children:f}):f))},p=r.a.forwardRef((function(e,t){var l=Object(n.useRef)(!1),c=Object(n.useState)(null),i=Object(m.a)(c,2),s=i[0],u=i[1],d=function(){return new Promise((function(e){var t=a(19);e(t[t.length-1])}))};return r.a.createElement(f.a,{partialVisibility:!0,offset:{bottom:100},onChange:function(e){return t=e,void(!l.current&&t&&(l.current=!0,d().then((function(e){u(e)}))));var t}},r.a.createElement("section",{ref:t},r.a.createElement("h2",null,"Latest work"),null!=s&&r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{project:s,isAnimated:!0}),r.a.createElement(o.b,{to:"/projects",className:"button primary more-projects-btn"},"See more"))))})),b=function(e){var t=e.social,a=e.withUsername,n=void 0!==a&&a,l=t.url,c=t.icon,o=t.accent,i=t.username;return r.a.createElement("li",null,r.a.createElement("a",{href:l,accentcolor:o},r.a.createElement("i",{className:c}),n&&r.a.createElement("span",{className:"social__username"},i)))},g=function(e){var t=e.withUsername,l=void 0!==t&&t,c=Object(n.useRef)(a(53));return r.a.createElement("div",{className:"social-links"},r.a.createElement("ul",null,c.current.map((function(e,t){return r.a.createElement(b,{key:t,social:e,withUsername:l})}))))},v=function(e){var t=e.user,a=(e.isAnimated,Object(n.useRef)("").current),l=Object(n.useState)(!1),c=Object(m.a)(l,2),o=c[0],i=c[1];return r.a.createElement(f.a,{partialVisibility:!0,offset:{bottom:20},onChange:function(e){return t=e,void(!o&&t&&i(!0));var t}},r.a.createElement(u,{started:o,delay:250,duration:1e3},r.a.createElement("div",{className:"card user animated"},r.a.createElement("div",{className:"photo-container animated"},r.a.createElement(u,{started:o,delay:750,duration:500},r.a.createElement("img",{src:a+"/images/"+t.photo,className:"profile-photo",alt:"",width:72,height:72}))),r.a.createElement("div",{className:"card__content"},r.a.createElement("h3",null,t.name),r.a.createElement("p",null,t.bio)),r.a.createElement(g,{withUsername:!0}))))},j=function(e){var t=e.name,a=e.id,l=e.label,c=e.onChangeText,o=void 0===c?null:c,i=e.defaultValue,s=void 0===i?"":i,u=(e.type,Object(n.useState)(s)),d=Object(m.a)(u,2),h=d[0],f=d[1];return r.a.createElement("div",{className:"input-field"},r.a.createElement("textarea",{id:a,name:t,value:h,onChange:function(e){return f((t=e).target.value),void(null!=o&&o.call(void 0,t.target.value));var t},placeholder:" "},h),r.a.createElement("label",{htmlFor:a},l))},y=function(e){var t=e.name,a=e.id,l=e.label,c=e.onChangeText,o=void 0===c?null:c,i=e.defaultValue,s=void 0===i?"":i,u=e.type,d=void 0===u?"text":u,h=e.honeypot,f=void 0!==h&&h,E=Object(n.useState)(s),p=Object(m.a)(E,2),b=p[0],g=p[1],v=Object(n.useRef)();f&&(v.current={height:0,position:"absolute",overflow:"hidden"});return r.a.createElement("div",{className:"input-field",style:v.current},r.a.createElement("input",{type:d,id:a,name:t,value:b,onChange:function(e){return g((t=e).target.value),void(null!=o&&o.call(void 0,t.target.value));var t},placeholder:" "}),r.a.createElement("label",{htmlFor:a},l),r.a.createElement("div",{className:"input-background"}))},O=function(e){var t=e.title,a=Object(n.useState)(""),l=Object(m.a)(a,2),c=l[0],o=l[1],i=Object(n.useState)(""),s=Object(m.a)(i,2),u=s[0],d=s[1],h=Object(n.useState)(""),f=Object(m.a)(h,2),E=f[0],p=f[1],b=Object(n.useState)(null),g=Object(m.a)(b,2),v=g[0],O=g[1],N=Object(n.useRef)("mailto:maxime.esnol02@gmail.com").current,w=Object(n.useState)(""),x=Object(m.a)(w,2),S=x[0],k=x[1],C=Object(n.useState)("disabled"),R=Object(m.a)(C,2),I=R[0],T=R[1];Object(n.useEffect)((function(){if(E.length>3&&""!==c&&u.includes("@")&&null==v){""!==I&&T("");var e=N+"?subject=";e+=encodeURI("[Contact Form] ["+c+"]"),e+="&body=",e+=encodeURI(E),k(e+="&bcc="+u)}else T("disabled")}),[E,c,u,v]);return r.a.createElement("form",{className:"contact"},r.a.createElement("h3",null,t),r.a.createElement(y,{name:"name",id:"name",label:"Your name",onChangeText:function(e){return o(e)}}),r.a.createElement(y,{name:"email",id:"email",label:"Your email",onChangeText:function(e){return d(e)}}),r.a.createElement(j,{name:"message",id:"message",label:"Your message",onChangeText:function(e){return p(e)}}),r.a.createElement(y,{name:"tags",honeypot:!0,id:"tags",label:"Tags for your message",onChangeText:function(e){return O(e)}}),r.a.createElement("button",{disabled:"disabled"===I,type:"button",className:"button primary",onClick:function(){window.open(S,"_blank")}},"Send"))},N=function(e){var t=a(54);return r.a.createElement("section",{className:"about-me"},r.a.createElement("h2",null,"About me"),r.a.createElement(v,{user:t,isAnimated:!0}),r.a.createElement("div",{className:"what-i-do"},r.a.createElement("h3",null,"What I do"),r.a.createElement("p",null,"Simply put, I create interactive and modern websites and web apps. I take care of both front end and back end. Using technologies as React, Vue and Laravel, I'm able to make stunning, functional websites that do exactly what you want them to.")),r.a.createElement(O,{title:"Send me a message"}))},w=function(e){s("Maxime Esnol");var t=Object(n.useRef)(null);return r.a.createElement("div",{className:"home"},r.a.createElement(d,{onRequestScroll:function(e){window.scrollTo({left:0,top:e.current.offsetTop,behavior:"smooth"})}.bind(void 0,t)}),r.a.createElement(p,{ref:t}),r.a.createElement(N,null))},x=function(e){s("My Work - Maxime Esnol");var t=Object(n.useRef)(a(19)).current;return r.a.createElement("section",null,r.a.createElement("h1",null,"My work"),t.map((function(e,t){return r.a.createElement(E,{key:t,project:e})})))},S=a(36),k=a.n(S),C=a(37),R=a.n(C),I=a(16),T=function(e){return r.a.createElement("div",Object.assign({},e,{className:"slide"}),e.children)},M=function(e){var t=e.children,a=Object(I.a)(e,["children"]),l=Object(n.useState)(0),c=Object(m.a)(l,2),o=c[0],i=c[1],s=Object(n.useRef)();Object(n.useEffect)((function(){console.log(s.current.offsetWidth),s.current.scrollTo({top:0,left:s.current.offsetWidth*t.length*o/100,behavior:"smooth"})}));var u=function(e){var a=100/t.length;"previous"===e?d(o-a):"next"===e&&d(o+a)},d=function(e){i(e<=0?0:e>=100?100:e)};return r.a.createElement("div",{className:"slides-container"},r.a.createElement("i",{className:"fas fa-chevron-left",onClick:function(){return u.call(void 0,"previous")}}),r.a.createElement("i",{className:"fas fa-chevron-right",onClick:function(){return u.call(void 0,"next")}}),r.a.createElement("div",Object.assign({},a,{className:"slides",ref:s}),t))},F=function(e){var t=e.name;return r.a.createElement("span",{className:"technology"},t)},_=function(e){var t=e.children,a=e.height,n=Object(I.a)(e,["children","height"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"fixed-footer-height",style:{height:a}}),r.a.createElement("div",Object.assign({},n,{className:"fixed-footer"}),t))},A=function(e){return r.a.createElement(r.a.Fragment,null)},G=function(e){var t=Object(i.f)().slug,l=Object(n.useRef)(!1),c=Object(n.useState)({}),o=Object(m.a)(c,2),s=o[0],u=o[1];return Object(n.useEffect)((function(){if(!l.current){l.current=!0;var e=a(19).find((function(e){return e.slug===t}));k.a.get("../data/project-data/"+t+".md").then((function(t){e.about={__html:R()(t.data)}})).catch((function(t){e.about={__html:"<p>Unable to retrieve this project's 'About'.</p>"}})).finally((function(){u(e)}))}}),[]),r.a.createElement("section",{className:"project-details"},r.a.createElement(M,null,void 0!==s.images&&s.images.map((function(e,t){return r.a.createElement(T,{key:t,style:{backgroundImage:"url(../images/"+e.src+")"}})}))),r.a.createElement("h1",null,s.name),r.a.createElement("p",{className:"description"},s.description),r.a.createElement("div",{className:"technologies"},void 0!==s.technologies&&s.technologies.map((function(e,t){return r.a.createElement(F,{key:t,name:e})}))),r.a.createElement("div",{className:"about",dangerouslySetInnerHTML:s.about}),r.a.createElement(_,{height:"60px"},void 0!==s.repository&&r.a.createElement("a",{href:s.repository,className:"button primary"},"View Code"),void 0!==s.demo&&r.a.createElement("a",{href:s.demo,className:"button primary"},"View Demo")))},U=function(e){var t=e.date,a=e.title,n=e.children;return r.a.createElement("div",{className:"timeline-entry"},r.a.createElement("div",{className:"timeline-entry-date"},t),r.a.createElement("div",{className:"timeline-entry-content"},r.a.createElement("h2",null,a),r.a.createElement("p",null,n)))},B=function(e){var t=e.children;return r.a.createElement("div",{className:"timeline"},r.a.createElement("div",{className:"timeline-line-start timeline-line-part"}),t,r.a.createElement("div",{className:"timeline-line-end timeline-line-part"}))},J=function(e){s("Experience - Maxime Esnol");var t=Object(n.useRef)(a(71)).current.sort((function(e,t){return new Date(t.date)-new Date(e.date)}));return r.a.createElement("section",{className:"experience"},r.a.createElement("h1",null,"My experience"),r.a.createElement(B,null,t.map((function(e,t){var a=new Date(e.date),n=a.getFullYear(),l=a.toLocaleString("en",{month:"short"}),c=a.getDate();return r.a.createElement(U,{key:t,date:c+" "+l+" "+n,title:e.title},e.content)}))))},V=function(e){return s("Contact me - Maxime Esnol"),r.a.createElement("section",{className:"contact"},r.a.createElement("h1",null,"Get in touch"),r.a.createElement(O,{title:"Mail me"}))},W=a(75),H=a(76),D=a(38),L=a.n(D),Y=Object(i.g)((function(e){var t=e.location,a=e.children;return"undefined"===typeof t.key&&(t.key=L()()),r.a.createElement(W.a,{mode:"out-in"},r.a.createElement(H.a,{key:t.key,classNames:"fade",timeout:{enter:250,exit:250}},r.a.createElement(i.c,{location:t},a)))})),P=a(39),q=a(17),z=a(6),Q=function(e){var t=e.toggleMenu,a=e.isOpen,l=e.isFixedNav,c=e.height,o=Object(n.useState)(q.a),i=Object(m.a)(o,2),s=i[0],u=i[1],d=Object(n.useRef)(a),h=Object(n.useRef)(null);return Object(n.useEffect)((function(){a!==d.current&&(h.current=setTimeout((function(){u(a?q.b:q.a)}),100),d.current=a)})),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{style:{height:c+"px"}},r.a.createElement("p",null,"Maxime Esnol"),r.a.createElement(z.d,{timeout:200},r.a.createElement(H.a,{in:a,classNames:"",timeout:200},r.a.createElement("div",{className:"menu-icon"},r.a.createElement(P.a,{icon:s,size:"lg",onClick:t}))))),l&&r.a.createElement("div",{className:"nav-fix-height",style:{height:c+"px"}}))},$=function(e){var t=e.isOpen,a=(e.className,e.children),n=e.triggerClose,l=void 0===n?null:n;return r.a.createElement(z.d,{timeout:500},r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{in:t,className:"overlay",timeout:500},r.a.createElement("div",{onClick:function(){null!=l&&l()}})),r.a.createElement(H.a,{in:t,className:"slide",timeout:500},r.a.createElement("div",null,a))))},K=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),l=a[0],c=a[1],i=function(){c(!l)};return r.a.createElement("header",null,r.a.createElement(Q,{toggleMenu:i,isOpen:l,isFixedNav:!0,height:70}),r.a.createElement($,{isOpen:l,triggerClose:i},r.a.createElement("ul",{className:"site-links"},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/",onClick:i},"Home")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/projects",onClick:i},"Projects")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/experience",onClick:i},"Experience")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/contact",onClick:i},"Get in touch"))),r.a.createElement(g,null)))},X=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null),r.a.createElement("div",{className:"content"},r.a.createElement(Y,null,r.a.createElement(i.a,{exact:!0,path:"/",component:w}),r.a.createElement(i.a,{path:"/projects",component:x}),r.a.createElement(i.a,{path:"/project/:slug",component:G}),r.a.createElement(i.a,{path:"/experience",component:J}),r.a.createElement(i.a,{path:"/contact",component:V}))),r.a.createElement(A,null))};var Z=function(){return r.a.createElement(o.a,null,r.a.createElement(X,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.1c54849a.chunk.js.map