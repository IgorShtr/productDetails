(this.webpackJsonpproductdetails=this.webpackJsonpproductdetails||[]).push([[0],{19:function(n,e,t){n.exports=t.p+"static/media/itemImg.a6a18ae4.jpg"},35:function(n,e,t){n.exports=t(47)},40:function(n,e,t){},41:function(n,e,t){},47:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(17),c=t.n(i),o=(t(40),t(41),t(33)),l=t(4),u=t(5),d=t(13),p=t(28),f=t(29),s=t(34),b=t(10),m={chosenActivity:"",links:[],isModalOpen:!0};var h=function(n){return function(e){e({type:"CHOSEN_ACTIVITY",payload:n})}},x=Object(d.combineReducers)({productDetails:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0,t=e.type,r=e.payload;switch(t){case"CHOSEN_ACTIVITY":return Object(b.a)(Object(b.a)({},n),{},{chosenActivity:r});case"ADD_LINK":return Object(b.a)(Object(b.a)({},n),{},{links:[].concat(Object(s.a)(n.links),[r])});case"IS_MODAL_OPEN":return Object(b.a)(Object(b.a)({},n),{},{isModalOpen:!n.isModalOpen});case"CLEAR_ACTION_ACTIVITIES":return Object(b.a)(Object(b.a)({},n),{},{links:[]});default:return n}}}),g=Object(d.createStore)(x,Object(f.composeWithDevTools)(Object(d.applyMiddleware)(p.a))),v=t(1),O=t(2);function E(){var n=Object(v.a)(["\nposition: fixed;\ntop: 0;\nleft: 0;\n"]);return E=function(){return n},n}function j(){var n=Object(v.a)(["\ndisplay:flex;\nflex-direction: column;\nmin-height: 100%\nwidth: 100vw;\nheight: 100%;\n& .content {\n  flex-grow:1;\n  margin: 50px;\n}\n"]);return j=function(){return n},n}var y=function(n){return a.a.createElement(w,null,a.a.createElement(D,null),a.a.createElement("main",{className:"content"},n.children))},w=O.a.div(j()),D=O.a.div(E()),k=t(19),A=t.n(k);function I(){var n=Object(v.a)(["\n  margin-top: 20px;\n background-color: lightgrey;\n border: 1px solid grey;\n border-radius: 5px;\npadding: 10px;\ncursor:pointer;\n"]);return I=function(){return n},n}function C(){var n=Object(v.a)(["\nwidth: 50%;\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\n img {\n   height: 300px;\n   width: 300px;\n }\n  div:first-child {\n   width: fit-content;\n }\n"]);return C=function(){return n},n}var T=function(){var n=Object(u.b)();return a.a.createElement(L,null,a.a.createElement("img",{src:A.a,alt:"not faund"}),a.a.createElement("div",null,"Body"),a.a.createElement(N,{onClick:function(){return n((function(n){n({type:"IS_MODAL_OPEN"})}))}}," More Ditails"))},L=O.a.div(C()),N=O.a.button(I()),S=t(49);function _(){var n=Object(v.a)(["\nwidth: 70%;\nmargin: 10px auto;\npadding: 5px 10px;\nbackground-color: #ffca18;\nborder: 1px solid #ffca18;\n border-radius: 5px;\n cursor: pointer;\n"]);return _=function(){return n},n}function M(){var n=Object(v.a)(["\noverflow:auto;\nheight: 150px;\n"]);return M=function(){return n},n}var V=function(){var n=(Object(u.c)((function(n){return n.productDetails.links}))||[]).map((function(n){var e=n.link;return a.a.createElement(z,{key:Object(S.a)()},e)}));return a.a.createElement(P,null,n)},P=O.a.div(M()),z=O.a.div(_()),F=t(16);function K(){var n=Object(v.a)(["\nmargin-top: 20px;\nalign-self: flex-end;\nwidth: 50px;\ncursor: pointer;\npadding: 5px;\nbackground-color: #ffca18;\nborder: 1px solid  #ffca18;\nborder-radius: 5px;\nfont-size: 12px;\n"]);return K=function(){return n},n}function q(){var n=Object(v.a)(["\nmargin-top: 10px;\nwidth: 98%;\np:last-child{\n  height: 12px;\n  color: red;\n  font-size:10px;\n}\n"]);return q=function(){return n},n}function B(){var n=Object(v.a)(["\nwidth: 100%;\nheight: 30px;\nborder:"," ;\nborder-radius: 5px;\n"]);return B=function(){return n},n}function J(){var n=Object(v.a)(["\nwidth: 100%;\nheight: 30px;\nborder:"," ;\nborder-radius: 5px;\n"]);return J=function(){return n},n}function R(){var n=Object(v.a)(["\nwidth: 240px;\nheight: 190px;\n// padding: 0 10px;\ndisplay: flex;\nflex-direction:column;\np{\n  color: grey;\n  margin: 0;\n  font-size: 12px;\n}\n"]);return R=function(){return n},n}var U=function(){var n=Object(u.b)(),e=Object(r.useState)(""),t=Object(F.a)(e,2),i=t[0],c=t[1],o=Object(r.useState)(""),l=Object(F.a)(o,2),d=l[0],p=l[1],f=Object(r.useState)(!0),s=Object(F.a)(f,2),b=s[0],m=s[1],h=Object(r.useState)(!0),x=Object(F.a)(h,2),g=x[0],v=x[1];return a.a.createElement(W,null,a.a.createElement($,null,a.a.createElement("p",null,"Link"),a.a.createElement(H,{type:"text",onChange:function(n){return c(n.target.value)},linkValidation:b}),b?a.a.createElement("p",null):a.a.createElement("p",null,"Is requered")),a.a.createElement($,null,a.a.createElement("p",null,"Title"),a.a.createElement(Y,{type:"text",onChange:function(n){return p(n.target.value)},titleValidation:g}),g?a.a.createElement("p",null):a.a.createElement("p",null,"Is requered")),a.a.createElement(G,{onClick:function(e){(e.preventDefault(),i.length>0&&d.length>0)?(n(function(n){return function(e){e({type:"ADD_LINK",payload:n})}}({title:d,link:i})),p(""),c(""),document.querySelectorAll("input").forEach((function(n){return n.value=""})),m(!0),v(!0)):(m(!!i),v(!!d))}},"Add"))},W=O.a.div(R()),H=O.a.input(J(),(function(n){return n.linkValidation?"1px solid grey":"1px solid red"})),Y=O.a.input(B(),(function(n){return n.titleValidation?"1px solid grey":"1px solid red"})),$=O.a.div(q()),G=O.a.button(K());function Q(){var n=Object(v.a)(["\npadding-top: 10px;\nheight: 180px;\n"]);return Q=function(){return n},n}var X=function(){var n=Object(u.c)((function(n){return n.productDetails.chosenActivity}));return a.a.createElement(a.a.Fragment,null,function(n){switch(n){case"ADD LINK":return a.a.createElement("div",null,a.a.createElement(U,null));case"ADD VOUTE":return a.a.createElement(Z,null," ADD VOUTE");case"ADD PAIMENT":return a.a.createElement(Z,null," ADD PAIMENT");case"ADD POLL":return a.a.createElement(Z,null," ADD POLL");default:return a.a.createElement(Z,null)}}(n))},Z=O.a.div(Q());function nn(){var n=Object(v.a)(["\nwidth: 75px;\nheight: 30px;\nborder: 1px solid lightgrey;\nborder-radius: 5px;\ntext-align: center;\nline-height: 30px;\nbackground-color: lightgrey;\ncolor: grey;\ncursor: pointer;\n: hover{\n  color: black; \n  background-color: white;\n  border: 1px solid black;\n}\n"]);return nn=function(){return n},n}function en(){var n=Object(v.a)(["\nwidth: 75px;\nheight: 30px;\nborder: 1px solid lightgrey;\nborder-radius: 5px;\ntext-align: center;\nline-height: 30px;\nbackground-color: lightgrey;\ncolor: grey;\ncursor: pointer;\n: hover{\n  color: black; \n  background-color: white;\n  border: 1px solid black;\n}\n"]);return en=function(){return n},n}function tn(){var n=Object(v.a)(["\nmargin-top: 75px;\ndisplay:flex;\njustify-content: flex-end;\nwidth: 100%;\ndiv:last-child{\n  margin-left: 20px;\n}\n"]);return tn=function(){return n},n}function rn(){var n=Object(v.a)(["\nborder: 1px solid grey;\nborder-radius: 5px;\nfont-size: 12px;\nbackground-color:",";\nwidth: 100px;\ntext-align: center;\nmargin-top: 10px;\ncursor: pointer;\npadding: 5px;\n\n:hover{\n  border: 1px solid black;\n}\n"]);return rn=function(){return n},n}function an(){var n=Object(v.a)(["\nwidth: 90%;\ndisplay: flex;\nflex-wrap: wrap;\njustify-content: space-between;\npadding: 10px 0;\nborder-bottom: 1px solid lightgrey;\n"]);return an=function(){return n},n}function cn(){var n=Object(v.a)(["\nborder-left: 1px solid lightgrey;\npadding: 10px;\nwidth:270px;\ndisplay: flex;\nflex-direction: column;\nalign-items: center; \nspan{\n  align-self: flex-end;\n  cursor: pointer;\n}\n"]);return cn=function(){return n},n}var on=function(){var n=Object(u.b)(),e=Object(u.c)((function(n){return n.productDetails.chosenActivity})),t=Object(u.c)((function(n){return n.productDetails.links})),r=["ADD LINK","ADD VOUTE","ADD PAIMENT","ADD POLL"].map((function(t){return a.a.createElement(dn,{onClick:function(){return n(h(t))},isActive:e===t},t)}));return a.a.createElement(ln,null,a.a.createElement("span",{onClick:function(){n((function(n){n({type:"IS_MODAL_OPEN"})})),n(h(""))}},"\u2715"),a.a.createElement("div",null,"Chose action"),a.a.createElement(un,null,r),a.a.createElement(X,null),a.a.createElement(pn,null,a.a.createElement(fn,{onClick:function(){return n((function(n){n({type:"CLEAR_ACTION_ACTIVITIES"})}))}},"Cancel"),a.a.createElement(sn,{onClick:function(){n((function(n){n({type:"IS_MODAL_OPEN"})})),alert(JSON.stringify(t))}},"Save")))},ln=O.a.div(cn()),un=O.a.div(an()),dn=O.a.div(rn(),(function(n){return n.isActive?"#ffca18":"none"})),pn=O.a.div(tn()),fn=O.a.div(en()),sn=O.a.div(nn());function bn(){var n=Object(v.a)(["\nmargin: 10px auto;\nwidth: 300px;\ndisplay: flex;\nflex-direction: column;\nimg{\n width: 250px; \n margin: 0 auto; \n}\n"]);return bn=function(){return n},n}function mn(){var n=Object(v.a)(["\n  height: fit-content;\n  min-width: 500px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%,-50%);\n  background: #F8F8F8;\n  display: flex;  \n  overflow: hidden;\n  z-index:3;\n  max-width: 70%;\n"]);return mn=function(){return n},n}function hn(){var n=Object(v.a)(["\nwidth: 100%;\nheight: 100%;\noverflow: hidden;\ntop:0;\nleft:0;\n position: fixed;\n background: rgba(0, 0, 0, 0.3);\n\n"]);return hn=function(){return n},n}var xn=function(){var n=Object(u.c)((function(n){return n.productDetails.isModalOpen}));return document.body.style.overflow=n?"hidden":"auto",n?a.a.createElement(gn,null,a.a.createElement(vn,null,a.a.createElement(On,null,a.a.createElement("img",{src:A.a,alt:"not faund"}),a.a.createElement(V,null)),a.a.createElement(on,null))):null},gn=O.a.div(hn()),vn=O.a.div(mn()),On=O.a.div(bn());function En(){var n=Object(v.a)(["\nheight: 500px;\nwidth: 100vw;\n"]);return En=function(){return n},n}var jn=function(){return a.a.createElement(y,null,a.a.createElement(yn,null,a.a.createElement(T,null),a.a.createElement(xn,null)))},yn=O.a.div(En());var wn=function(){return a.a.createElement(u.a,{store:g},a.a.createElement(o.a,{basename:"/productslist"},a.a.createElement(l.d,null,a.a.createElement(l.b,{exect:!0,path:"/productslist",component:jn}),a.a.createElement(l.a,{to:"/"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(wn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.86319ec8.chunk.js.map