(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{35:function(e,t,a){e.exports=a(47)},40:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),o=a(31),r=a.n(o),l=(a(40),a(14)),c=a(19),s=a(5),m=a(6),d=a(3),u=a(8),p=1087,h=function(e){return Object(m.a)({},"@media (min-width: ".concat(p,"px)"),Object(u.a)({},e))},g=Object(d.b)((function(e){return Object(u.a)({container:{position:"absolute",right:70,top:60,height:35,width:35,padding:10,boxSizing:"border-box",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)","&:hover":{transform:"scale(1.1)"}},lightContainer:{backgroundColor:"white"},icon:{color:e.palette.text.primary}},h({container:{right:80,top:20,height:45,width:45}}))})),f=a(15),b=function(e){var t,a=e.variant,n=e.language,o=e.setLanguage,r=Object(d.c)(),l=g({theme:r}),c=Object(f.a)((t={},Object(m.a)(t,l.container,!0),Object(m.a)(t,l.lightContainer,"light"===a),t));return i.a.createElement("div",{className:c,onClick:function(){return o((function(e){return"pt-br"===e?"en-us":"pt-br"}))}},i.a.createElement("div",{className:l.icon},"pt-br"===n?"EN":"PT"))},x=Object(d.b)((function(e){return Object(u.a)({container:{position:"absolute",right:20,top:60,height:35,width:35,padding:10,boxSizing:"border-box",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)","&:hover":{transform:"scale(1.1)"}},lightContainer:{backgroundColor:"white"},icon:{color:e.palette.text.primary}},h({container:{top:20,height:45,width:45}}))})),v=a(33),E=function(e){var t,a=e.variant,n=e.setVariant,o=Object(d.c)(),r=x({theme:o}),l=Object(f.a)((t={},Object(m.a)(t,r.container,!0),Object(m.a)(t,r.lightContainer,"light"===a),t));return i.a.createElement("div",{className:l,onClick:n},i.a.createElement("div",{className:r.icon},i.a.createElement(v.a,{size:35})))},y={home:{greetings:{title:"OL\xc1, EU SOU EDUARDO! ",subtitle:"E eu construo solu\xe7\xf5es para "},loop:{web:"a Web"}},about:{title:"Sobre",bio:["Ol\xe1, me chamo Eduardo e sou um desenvolvedor frontend (na maior parte do tempo) apaixonado por React. Desenvolvo em React desde seu lan\xe7amento (2015) e acompanhei de perto a evolu\xe7\xe3o da biblioteca e do ecossistema que a rodeia.","Sou formado em An\xe1lise e Desenvolvimento de Sistemas e atualmente curso p\xf3s gradua\xe7\xe3o em desenvolvimento web, sou principalmente focado no desenvolvimento para devs e criador da solu\xe7\xe3o de estilos dudaui, criada para sanar problemas no desenvolvimento server-side usando jss. Ativo contribuidor no stackoverflow e envolvido com projetos open-source (core wallet for node, dudaui, node's marketmaker), meu maior foco hoje em dia esta no desenvolvimento de aplica\xe7\xf5es confi\xe1veis, progressivas, escalon\xe1veis e perform\xe1ticas."]},skills:{title:"Tecnologias e Experi\xeancia",subtitle:["Trabalho como desenvolvedor h\xe1 6 anos, 5 com React, e a maior parte dos meus projetos ficaram escopados no desenvolvimento de componentes para a CleverTech o que me permitiu contato com diferentes tecnologias, incluindo mas n\xe3o exclusivamente gamefica\xe7\xe3o, streaming de v\xeddeos, internacionaliza\xe7\xe3o, temifica\xe7\xe3o...","Trabalhei tamb\xe9m com web-sockets, geolocaliza\xe7\xe3o, geofencing, monitoramento de posi\xe7\xe3o em tempo real e telemetria."]},portfolio:{subtitle:"Aqui est\xe3o alguns dos meus trabalhos"}},w={home:{greetings:{title:"HI, I'M EDUARDO! ",subtitle:"And I build solutions for "},loop:{web:"the Web"}},about:{title:"About",bio:["Hi there, I'm Eduardo and I'm a frontend developer (most of the time), which clearly prefers React. I've been coding in React since it's release (2015) and I've watched it's evolution closely (both the library's and the ecosystem around it).","I have a degree in System Analysis and Development and currently studying a post graduation course in web development, I'm mostly focused in developing for devs and I'm the creator of the style's solution dudaui, created to solve server-side related problems when using jss. Active contributor of Stackoverflow and involved with open-source projects(core wallet for node, dudaui, node's marketmaker), my main focus nowadays is the development of reliable, progressive, scalable and perfomatic applications."]},skills:{title:"Skills & Experience",subtitle:["I've been working as a developer for the past 6 years, 5 with React, e most of my projects were scoped in the development of components for CleverTech which allowed me to get in touch with a lot of interesting technologies, including but not exclusively gamefication, video streaming, internacionalization, theming...","I've also worked with web-sockets, geolocalization, geofencing, realtime position monitoring and telemetry."]},portfolio:{subtitle:"Here are a few of my jobs"}},k=Object(n.createContext)(),j=function(e){var t=e.children,a=e.language,o=void 0===a?"pt-br":a,r=Object(n.useMemo)((function(){return"pt-br"===o?y:w}),[o]);return i.a.createElement(k.Provider,{value:r},t)},O=a(27),N=a(13),C=function(){var e=Object(n.useState)(window.innerWidth<p),t=Object(l.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){var e=function(){return i(window.innerWidth<p)};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a},D=Object(d.b)((function(e){return{container:{width:"100%",height:"50px",boxSizing:"border-box",padding:"0 10px",backgroundColor:e.palette.background.dark,display:"flex",justifyContent:"flex-end",alignItems:"center"},hamburguer:{color:"white",cursor:"pointer"},sidePanel:{position:"fixed",top:0,left:"-200px",width:"200px",height:"100%",backgroundColor:e.palette.background.dark,transformOrigin:"top left",transform:"translateX(0)"},sideMenu:{display:"flex",height:"100%",flexDirection:"column",justifyContent:"space-between"},list:{listStyleType:"none",padding:0,display:"flex",flexDirection:"column",height:"100%"},listItem:{display:"flex",alignItems:"center",padding:5,"&:hover":{backgroundColor:e.palette.background.light}},icon:{color:e.palette.primary,padding:5},title:{color:"white",padding:5},socialIcons:{display:"flex",justifyContent:"space-between",padding:10},socialIcon:{color:"white","&:hover":{color:e.palette.primary}}}})),I=a(16),S=a(23),z=a(34),T=function(e){switch(e){case"github":return"https://github.com/dupocas";case"stackoverflow":return"https://stackoverflow.com/users/10106580/dupocas";case"linkedin":return"https://www.linkedin.com/in/eduardo-po%C3%A7as-silva-66a6b5150/";default:return""}},A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"30px";switch(e){case"home":return i.a.createElement(I.d,{size:t});case"about":return i.a.createElement(I.b,{size:t});case"skills":return i.a.createElement(I.c,{size:t});case"portfolio":return i.a.createElement(I.a,{size:t});default:return null}},R=function(e){switch(e){case"stackoverflow":return i.a.createElement(S.b,{size:"30px"});case"github":return i.a.createElement(S.a,{size:"30px"});case"linkedin":return i.a.createElement(z.a,{size:"30px"});default:return null}},M=[{name:"home",path:"/",title:"Home"},{name:"about",path:"/about",title:"Sobre"},{name:"skills",path:"/skills",title:"Tecnologias"},{name:"portfolio",path:"/portfolio",title:"Portfolio"}],W=["stackoverflow","github","linkedin"],L=function(){var e=Object(d.c)(),t=D({theme:e}),a=Object(n.useState)(!1),o=Object(l.a)(a,2),r=o[0],s=o[1],m=Object(N.b)({transform:r?"translateX(100%)":"translateX(0%)"});return i.a.createElement("div",{className:t.container},i.a.createElement("div",{className:t.hamburguer,onClick:function(){return s((function(e){return!e}))}},i.a.createElement(I.e,{size:"30px"})),i.a.createElement(N.a.div,{className:t.sidePanel,style:m},i.a.createElement("div",{className:t.sideMenu},i.a.createElement("ul",{className:t.list},M.map((function(e){return i.a.createElement(c.b,{to:e.path,key:e.name,style:{textDecoration:"none"}},i.a.createElement("li",{className:t.listItem},i.a.createElement("div",{className:t.icon},A(e.name,"20px")),i.a.createElement("div",{className:t.title},e.title)))}))),i.a.createElement("div",{className:t.socialIcons},W.map((function(e){return i.a.createElement("a",{key:e,href:T(e),target:"_blank",rel:"noopener noreferrer"},i.a.createElement("div",{className:t.socialIcon},R(e)))}))))))},H=Object(d.b)((function(e){return{container:{position:"fixed",left:0,top:0,width:"50px",height:"100%",boxSizing:"border-box",padding:10,paddingTop:0,marginTop:0,backgroundColor:e.palette.background.dark,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",zIndex:"9999"},logo:{height:"50px",width:"50px",marginBottom:"20px"},icon:{color:e.palette.primary,padding:5,"&:hover":{color:e.palette.secondary}},activeIcon:{color:e.palette.secondary},socialIcon:{color:"white",padding:5,"&:hover":{color:e.palette.primary}}}})),B=function(e){var t=e.height,a=void 0===t?"50":t,n=e.width,o=void 0===n?"50":n,r=e.stroke,l={fill:"none",stroke:void 0===r?"#fc1056":r,strokeWidth:30,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterLimit:10};return i.a.createElement("svg",{x:"0px",y:"0px",viewBox:"0 0 1080 1080",style:{height:a,width:o}},i.a.createElement("g",{id:"Camada_1"}),i.a.createElement("g",{id:"Camada_2"},i.a.createElement("g",null,i.a.createElement("path",{style:Object(u.a)({},l,{stroke:"#06fddd"}),d:"M363.66,544.59c0,0-33,17-24,22s307-194,343-297c0,0-433.46,645.63-511,634\r c-56.56-8.48-57.5-138.5,79.64-265.25c15.18-14.03,34.86-30.25,50.79-47.29c30.1-32.18,86.57-77.47,127.57,10.53\r c64.18,137.76,283.34,156.41,455,8c61.48-53.15,85-116,94-184"}),i.a.createElement("path",{style:l,d:"M807.66,510.59c0,0-510.38,80.38-693.4,40.17c0,0-50.6-22.17,48.4-57.17\r c92.81-32.81,344.71-156.15,443.4-240.66c19.68-16.85,40.96-31.74,63.79-43.98c85.5-45.84,130.81-49.36,112.81,27.64\r c0,0-57,135-231,360s-195,263-164,240s52-41,52-41"}))))},P=function(){var e=Object(d.c)(),t=H({theme:e}),a=Object(s.e)(),n=function(e){var n;return Object(f.a)((n={},Object(m.a)(n,t.icon,!0),Object(m.a)(n,t.activeIcon,a.pathname===e),n))};return i.a.createElement("div",{className:t.container},i.a.createElement("div",{className:t.items},i.a.createElement("div",{className:t.logo},i.a.createElement(B,null)),M.map((function(e){return i.a.createElement(c.b,{to:e.path,key:e.name},i.a.createElement("div",{className:n(e.path)},A(e.name)))}))),i.a.createElement("div",{className:t.socialItems},W.map((function(e){return i.a.createElement("a",{key:e.name,href:T(e),target:"_blank",rel:"noopener noreferrer"},i.a.createElement("div",{className:t.socialIcon},R(e)))}))))},U=function(){return C()?i.a.createElement(L,null):i.a.createElement(P,null)},X=Object(d.b)({container:{marginLeft:"50px",padding:10,boxSizing:"border-box",height:"100%",width:"100%"},mobileContainer:{padding:10,boxSizing:"border-box",height:"100%",width:"100%"}}),_=function(e){var t,a=e.children,n=C(),o=X(),r=Object(f.a)((t={},Object(m.a)(t,o.container,!n),Object(m.a)(t,o.mobileContainer,n),t));return i.a.createElement("div",{className:r},a)},q=Object(d.b)((function(e){return{container:{position:"relative",width:"100%",height:"100%",backgroundColor:e.palette.background.light,color:e.palette.text.primary,overflow:"hidden !important"},section:{height:"100%",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},trailsMain:{position:"relative",overflow:"hidden",cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center"},trailsText:{height:"80px",lineHeight:"80px",color:e.palette.primary,fontSize:"40px",fontWeight:800,willChange:"transform, opacity",textAlign:"center",overflow:"hidden",marginLeft:"10px","& > div":{overflow:"hidden"}},mobileTitle:{height:"40px",lineHeight:"40px",color:e.palette.primary,fontSize:"20px",fontWeight:800,textAlign:"center",textTransform:"uppercase"},mobileText:{height:"40px",lineHeight:"40px",color:e.palette.primary,fontSize:"20px",fontWeight:800,textAlign:"center"},context:{width:"100%",position:"absolute",overflow:"hidden","& > h1":{textAlign:"center",color:"#fff",fontSize:"50px"}},area:{background:"-webkit-linear-gradient(to left, #8f94fb, #4e54c8)",width:"100%",height:"100vh",overflow:"hidden"},circle:{position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden","& > li":{position:"absolute",display:"block",listStyle:"none",width:"20px",height:"20px",background:"rgba(252,16,86, .7)",animation:"$animate 25s linear infinite",bottom:"-150px","&::nth-child(1)":{left:"25%",width:"80px",height:"80px",animationDelay:"0s"},"&:nth-child(2)":{left:"10%",width:"20px",height:"20px",animationDelay:"2s",animationDuration:"12s"},"&:nth-child(3)":{left:"70%",width:"20px",height:"20px",animationDelay:"4s"},"&:nth-child(4)":{left:"40%",width:"60px",height:"60px",animationDelay:"0s",animationDuration:"18s"},"&:nth-child(5)":{left:"65%",width:"20px",height:"20px",animationDelay:"0s"},"&:nth-child(6)":{left:"75%",width:"110px",height:"110px",animationDelay:"3s"},"&:nth-child(7)":{left:"35%",width:"150px",height:"150px",animationDelay:"7s"},"&:nth-child(8)":{left:"50%",width:"25px",height:"25px",animationDelay:"15s",animationDuration:"45s"},"&:nth-child(9)":{left:"20%",width:"15px",height:" 15px",animationDelay:"2s",animationDuration:"35s"},"&:nth-child(10)":{left:"85%",width:"150px",height:"150px",animationDelay:"0s",animationDuration:"11s"}}},"@keyframes animate":{"0%":{transform:"translateY(0) rotate(0deg)",opacity:1,borderRadius:0},"100%":{transform:"translateY(-1000px) rotate(720deg)",opacity:0,borderRadius:"50%"}}}})),G=a(21),V=a.n(G),J=a(26),Y=a.n(J),$={mass:5,tension:2e3,friction:500},F=function(){var e=Object(d.c)(),t=Object(n.useContext)(k),a=q({theme:e}),o=[t.home.greetings.title,i.a.createElement("span",{role:"img","aria-label":"happy emoji"},"\ud83d\ude01")],r=[t.home.greetings.subtitle],c=C(),s=Object(n.useState)(!0),m=Object(l.a)(s,1)[0],p=Object(N.c)(o.length,{config:$,opacity:m?1:0,x:m?0:20,height:m?80:0,from:{opacity:0,x:20,height:0}}),h=Object(N.c)(o.length,{config:$,opacity:m?1:0,x:m?0:20,height:m?80:0,from:{opacity:0,x:20,height:0},delay:600});return i.a.createElement("div",{className:a.container},i.a.createElement(U,null),i.a.createElement(_,null,i.a.createElement("div",{className:a.section},!c&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:a.context},i.a.createElement("div",{className:a.trailsMain},p.map((function(e,t){var n=e.x,r=e.height,l=Object(O.a)(e,["x","height"]);return i.a.createElement(N.a.div,{key:o[t],className:a.trailsText,style:Object(u.a)({},l,{transform:n.interpolate((function(e){return"translate3d(0,".concat(e,"px,0)")}))})},i.a.createElement(N.a.div,{style:{height:r}},o[t]))}))),i.a.createElement("div",{className:a.trailsMain},h.map((function(e,t){var n=e.x,l=e.height,c=Object(O.a)(e,["x","height"]);return i.a.createElement(N.a.div,{key:o[t],className:a.trailsText,style:Object(u.a)({},c,{transform:n.interpolate((function(e){return"translate3d(0,".concat(e,"px,0)")}))})},i.a.createElement(N.a.div,{style:{height:l}},r[t]))})),i.a.createElement(Y.a,null,[t.home.loop.web,"Mobile","Desktop"].map((function(e){return i.a.createElement(V.a,{key:e,startDelay:1e3,cursor:{blink:!0,element:"|"},className:a.trailsText},i.a.createElement("span",null,e),i.a.createElement(V.a.Backspace,{delay:2800,count:e.length}))}))))),i.a.createElement("div",{className:a.area},i.a.createElement("ul",{className:a.circle},i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null)))),c&&i.a.createElement("div",null,i.a.createElement("div",{className:a.mobileTitle},"".concat(t.home.greetings.title," ")," ",i.a.createElement("span",{role:"img","aria-label":"happy-emoji"},"\ud83d\ude01")),i.a.createElement("div",{className:a.mobileText},"".concat(t.home.greetings.subtitle," "),i.a.createElement(Y.a,null,[t.home.loop.web,"Mobile","Desktop"].map((function(e){return i.a.createElement(V.a,{key:e,startDelay:800,cursor:{blink:!0,element:"|"},className:a.mobileText},i.a.createElement("span",null,e),i.a.createElement(V.a.Backspace,{delay:2800,count:e.length}))}))))))))},K=Object(d.b)((function(e){return Object(u.a)({container:{width:"100%",height:"100%",backgroundColor:e.palette.background.light,color:e.palette.text.primary,overflow:"hidden"},section:{height:"100%",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},title:{fontSize:30,marginTop:"20px"},bio:{width:"100%",fontWeight:500,textAlign:"center"}},h({bio:{maxWidth:"700px",textAlign:"left"},section:{marginLeft:"30px",justifyContent:"center",alignItems:"flex-start"}}))})),Q=function(){var e=Object(d.c)(),t=K({theme:e}),a=Object(n.useContext)(k);return i.a.createElement("div",{className:t.container},i.a.createElement(U,null),i.a.createElement(_,null,i.a.createElement("div",{className:t.section},i.a.createElement("div",{className:t.title},a.about.title),i.a.createElement("div",{className:t.bio},a.about.bio.map((function(e,t){return i.a.createElement("p",{key:t},e)}))))))},Z=[{name:"dudaui",title:"Dudaui",description:"Solu\xe7\xe3o de estilos para React",img:"https://i.imgur.com/XwNNC8I.png",href:"https://github.com/dupocas/dudaui"},{name:"sorting",title:"Generators, hooks e springs",description:"Usando generators, hooks e compartilhamento de estilos est\xe1ticos.",img:"https://digitalents.com.br/wp-content/uploads/2016/03/js-logo.png",href:"https://github.com/dupocas/sort"}],ee=Object(d.b)((function(e){return Object(u.a)({container:{width:"100%",height:"100%",backgroundColor:e.palette.background.light,color:e.palette.text.primary,overflowX:"hidden"},section:{height:"100%",width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},title:{fontSize:30},jobs:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",width:"100%",height:"100%",marginTop:"20px"},jobContainer:{display:"flex",flexDirection:"column",alignItems:"center",color:e.palette.text.primary},job:{height:"150px",width:"250px",padding:5,margin:"10px 20px",borderRadius:"10px",display:"flex",border:"1px solid transparent",alignItems:"center",justifyContent:"center",cursor:"pointer","& > img":{height:"130px",width:"130px"}}},h({jobs:{marginTop:0,height:"60%",flexDirection:"row",justifyContent:"center"}}))})),te=function(e){var t=e.language,a=Object(d.c)(),o=ee({theme:a}),r=Object(n.useContext)(k);return i.a.createElement("div",{className:o.container},i.a.createElement(U,null),i.a.createElement(_,null,i.a.createElement("div",{className:o.section},i.a.createElement("div",{className:o.title},"Portfolio"),i.a.createElement("div",{className:o.subtitle},r.portfolio.subtitle),i.a.createElement("div",{className:o.jobs},Z.map((function(e){return i.a.createElement("a",{key:e.name,href:e.href,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"}},i.a.createElement("div",{className:o.jobContainer},i.a.createElement("div",{className:o.job},i.a.createElement("img",{src:e.img,alt:"job-miniature"})),i.a.createElement("div",{className:o.jobTitle},function(e){if("pt-br"===t)return e;switch(e){case"Dudaui":return"Dudaui";case"Generators, hooks e springs":return"Generators, hooks and springs";default:return null}}(e.title))))}))))))},ae=Object(d.b)((function(e){return Object(u.a)({container:{width:"100%",height:"100%",backgroundColor:e.palette.background.light,color:e.palette.text.primary,overflow:"hidden"},section:{height:"100%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},title:{fontSize:30,marginTop:"20px"},subtitle:{marginTop:"30px",textAlign:"center"}},h({section:{alignItems:"flex-start",marginLeft:"30px"},subtitle:{maxWidth:"700px",textAlign:"left"}}))})),ne=function(){var e=Object(d.c)(),t=ae({theme:e}),a=Object(n.useContext)(k);return i.a.createElement("div",{className:t.container},i.a.createElement(U,null),i.a.createElement(_,null,i.a.createElement("div",{className:t.section},i.a.createElement("div",{className:t.title},a.skills.title),i.a.createElement("div",{className:t.subtitle},a.skills.subtitle.map((function(e,t){return i.a.createElement("p",{key:t},e)}))))))},ie={primary:"#06a2fd",secondary:"#fc1056",background:{light:"#f2f2f2",regular:"#f2f2f2",dark:"#070707"},text:{primary:"#181818",grey:"#303030"}},oe={primary:"#06fddd",secondary:"#fc1056",background:{light:"#1d1d1d",regular:"#181818",dark:"#070707"},text:{primary:"#ffffff",grey:"#656565"}},re=function(e){return"dark"===e?oe:ie},le=function(e){var t=e.children,a=e.variant,o=Object(n.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"dark";return{palette:re(e)}}(a)}),[a]);return i.a.createElement(d.a,{theme:o},t)},ce=function(){var e=Object(n.useState)("dark"),t=Object(l.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)("pt-br"),m=Object(l.a)(r,2),d=m[0],u=m[1],p=function(){return o((function(e){return"light"===e?"dark":"light"}))};return i.a.createElement(j,{language:d},i.a.createElement(le,{variant:a},i.a.createElement(c.a,null,i.a.createElement(s.a,{exact:!0,path:"/"},i.a.createElement(F,null)),i.a.createElement(s.a,{path:"/about"},i.a.createElement(Q,null)),i.a.createElement(s.a,{path:"/skills"},i.a.createElement(ne,null)),i.a.createElement(s.a,{path:"/portfolio"},i.a.createElement(te,{language:d}))),i.a.createElement(E,{setVariant:p,variant:a}),i.a.createElement(b,{setVariant:p,variant:a,language:d,setLanguage:u})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.1a758037.chunk.js.map