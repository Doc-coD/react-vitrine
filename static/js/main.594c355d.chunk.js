(this["webpackJsonpreact-vitrine"]=this["webpackJsonpreact-vitrine"]||[]).push([[0],{22:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(15),n=c.n(a),r=(c(22),c(2)),i=c(4),o=c(0),j=function(e){return Object(o.jsx)("div",{className:"scroll-bottom",children:Object(o.jsxs)("div",{className:"sb-main",children:[e.left&&Object(o.jsx)(i.b,{to:e.left,className:"left hover",children:Object(o.jsx)("span",{children:"\u276c"})}),Object(o.jsx)("p",{className:"center",children:"Scroll"}),e.right&&Object(o.jsx)(i.b,{to:e.right,className:"right hover",children:Object(o.jsx)("span",{children:"\u276d"})})]})})},l=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(j,{left:"project4"})})},m=function(){return Object(s.useEffect)((function(){var e=["simple","clear","smart","strong"],t=0,c=0,s=document.getElementById("text-target");!function a(){setTimeout((function(){t>=e.length?(t=0,c=0,a()):c<e[t].length?(!function(){var a=document.createElement("span");s.appendChild(a),a.classList.add("letter"),a.style.animation="anim 5s ease forwards",a.textContent=e[t][c],setTimeout((function(){a.remove()}),2e3)}(),c++,a()):(c=0,t++,setTimeout((function(){a()}),2e3))}),80)}()}),[]),Object(o.jsx)("div",{children:Object(o.jsxs)("span",{className:"dynamic-text",children:[Object(o.jsx)("span",{className:"simply",children:"simply"}),Object(o.jsx)("span",{id:"text-target"})]})})},b=function(){return Object(o.jsx)("div",{className:"navigation",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)(i.b,{to:"/",exact:!0,className:"hover",activeClassName:"nav-active",children:Object(o.jsx)("li",{children:"accueil"})}),Object(o.jsxs)("li",{className:"nav-portfolio",children:["portfolio",Object(o.jsxs)("ul",{className:"nav-projects",children:[Object(o.jsx)(i.b,{to:"/project1",activeClassName:"nav-active",className:"hover",children:Object(o.jsx)("li",{children:"projet1"})}),Object(o.jsx)(i.b,{to:"/project2",activeClassName:"nav-active",className:"hover",children:Object(o.jsx)("li",{children:"projet2"})}),Object(o.jsx)(i.b,{to:"/project3",activeClassName:"nav-active",className:"hover",children:Object(o.jsx)("li",{children:"projet3"})}),Object(o.jsx)(i.b,{to:"/project4",activeClassName:"nav-active",className:"hover",children:Object(o.jsx)("li",{children:"projet4"})})]})]}),Object(o.jsx)(i.b,{to:"/contact",exact:!0,className:"hover",activeClassName:"nav-active",children:Object(o.jsx)("li",{children:"contact"})})]})})},d=function(){var e=function(){document.querySelectorAll(".social-network a").forEach((function(e){e.addEventListener("mouseover",(function(t){var c=t.offsetX-20,s=t.offsetY-13;e.style.transform="translate(".concat(c,"px, ").concat(s,"px)")})),e.addEventListener("mouseleave",(function(t){e.style.transform=""}))}))};return Object(o.jsx)("div",{className:"social-network",children:Object(o.jsxs)("ul",{className:"content",children:[Object(o.jsx)("a",{href:"https://www.facebook.com",target:"_blank",rel:"noopener noreferrer",className:"hover",onMouseOver:e,children:Object(o.jsx)("li",{children:Object(o.jsx)("i",{className:"fab fa-facebook-f"})})}),Object(o.jsx)("a",{href:"https://www.twitter.com",target:"_blank",rel:"noopener noreferrer",className:"hover",onMouseOver:e,children:Object(o.jsx)("li",{children:Object(o.jsx)("i",{className:"fab fa-twitter"})})}),Object(o.jsx)("a",{href:"https://www.instagram.com",target:"_blank",rel:"noopener noreferrer",className:"hover",onMouseOver:e,children:Object(o.jsx)("li",{children:Object(o.jsx)("i",{className:"fab fa-instagram"})})})]})})},h=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"home",children:[Object(o.jsx)(b,{}),Object(o.jsx)(d,{}),Object(o.jsx)("div",{className:"home-main",children:Object(o.jsxs)("div",{className:"main-content",children:[Object(o.jsx)("h1",{children:"Doc Agency"}),Object(o.jsx)("h2",{children:Object(o.jsx)(m,{})})]})}),Object(o.jsx)(j,{right:"project1"})]})})},u=function(){return Object(o.jsx)("span",{className:"logo",children:"DoC"})},x=c(17),p=[{id:1,title:"Casta",date:"Janvier 2020",languages:["React","Php","Sass"],infos:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque labore suscipit, pariatur laboriosam autem omnis saepe quisquam enim iste.",img:"./assets/img/projet-2.jpg",link:"http://www.google.com"},{id:2,title:"Lyon B\xe9ton",date:"Mars 2020",languages:["Symfony","Vue"],infos:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque labore suscipit, pariatur laboriosam autem omnis saepe quisquam enim iste.",img:"./assets/img/projet-1.jpg",link:"http://www.google.com"},{id:3,title:"Everpost",date:"Avril 2020",languages:["Wordpress","Php","React"],infos:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque labore suscipit, pariatur laboriosam autem omnis saepe quisquam enim iste.",img:"./assets/img/projet-3.jpg",link:"http://www.google.com"},{id:4,title:"Creative Dev",date:"Juillet 2020",languages:["Vue","Php"],infos:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque labore suscipit, pariatur laboriosam autem omnis saepe quisquam enim iste.",img:"./assets/img/projet-4.jpg",link:"http://www.google.com"}],O=function(e){var t=Object(s.useState)(p),c=Object(x.a)(t,1)[0],a=c[e.numberProject];console.log(c[2]);var n=Math.floor(200*Math.random()+700)+"px",r=Math.floor(200*Math.random()+150)+"px",i="scale("+(Math.random()+.7)+")";return Object(o.jsxs)("div",{className:"project-main",children:[Object(o.jsxs)("div",{className:"project-content",children:[Object(o.jsx)("h1",{children:a.title}),Object(o.jsx)("p",{children:a.date}),Object(o.jsx)("ul",{className:"languages",children:a.languages.map((function(e){return Object(o.jsx)("li",{children:e},e)}))})]}),Object(o.jsxs)("div",{className:"img-content",children:[Object(o.jsxs)("div",{className:"img-container hover",children:[Object(o.jsxs)("span",{children:[Object(o.jsx)("h3",{children:a.title}),Object(o.jsx)("p",{children:a.infos})]}),Object(o.jsx)("img",{src:a.img,alt:"tof projet"})]}),Object(o.jsx)("div",{className:"button-container",children:Object(o.jsx)("a",{href:a.link,target:"_blank",rel:"noopener noreferrer",className:"hover",children:Object(o.jsx)("span",{className:"button",children:"Visiter"})})})]}),Object(o.jsx)("span",{className:"random-circle",style:{left:n,top:r,transform:i}})]})},v=function(){return Object(o.jsx)("main",{children:Object(o.jsxs)("div",{className:"project",children:[Object(o.jsx)(b,{}),Object(o.jsx)(u,{}),Object(o.jsx)(O,{numberProject:0}),Object(o.jsx)(j,{left:"/",right:"project2"})]})})},f=function(){return Object(o.jsx)("main",{children:Object(o.jsxs)("div",{className:"project",children:[Object(o.jsx)(b,{}),Object(o.jsx)(u,{}),Object(o.jsx)(O,{numberProject:1}),Object(o.jsx)(j,{left:"project1",right:"project3"})]})})},g=function(){return Object(o.jsx)("main",{children:Object(o.jsxs)("div",{className:"project",children:[Object(o.jsx)(b,{}),Object(o.jsx)(u,{}),Object(o.jsx)(O,{numberProject:2}),Object(o.jsx)(j,{left:"project2",right:"project4"})]})})},N=function(){return Object(o.jsx)("main",{children:Object(o.jsxs)("div",{className:"project",children:[Object(o.jsx)(b,{}),Object(o.jsx)(u,{}),Object(o.jsx)(O,{numberProject:3}),Object(o.jsx)(j,{left:"project3",right:"contact"})]})})},w=function(){return Object(o.jsxs)(r.d,{children:[Object(o.jsx)(r.b,{exact:!0,path:"/",component:h}),Object(o.jsx)(r.b,{exact:!0,path:"/project1",component:v}),Object(o.jsx)(r.b,{exact:!0,path:"/project2",component:f}),Object(o.jsx)(r.b,{exact:!0,path:"/project3",component:g}),Object(o.jsx)(r.b,{exact:!0,path:"/project4",component:N}),Object(o.jsx)(r.b,{exact:!0,path:"/contact",component:l}),Object(o.jsx)(r.a,{to:"/"})]})};n.a.render(Object(o.jsx)(i.a,{children:Object(o.jsx)(w,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.594c355d.chunk.js.map