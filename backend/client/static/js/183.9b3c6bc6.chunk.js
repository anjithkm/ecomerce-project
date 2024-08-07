"use strict";(self.webpackChunkcredot_mechine_test=self.webpackChunkcredot_mechine_test||[]).push([[183],{581:(e,t,i)=>{i.d(t,{$n:()=>o,Ay:()=>s,ey:()=>r});i(43);var n=i(579);const r=e=>{let{count:t=0,setCount:i,...r}=e;return(0,n.jsx)("div",{...r,children:(0,n.jsxs)("div",{style:{display:"flex",height:"100%",border:"1px solid #E2E2E2",width:"100%",justifyContent:"center"},children:[(0,n.jsx)("button",{className:"count-button",onClick:()=>{i(t-1)},style:{border:"none",width:"100%",display:"flex",cursor:"pointer",outline:"none",backgroundColor:"transparent"},children:(0,n.jsx)("img",{style:{margin:"auto"},src:"/assets/icons/minus.svg",alt:""})}),(0,n.jsx)("div",{className:"count",style:{display:"flex",justifyContent:"center",width:"100%",alignItems:"center",border:"solid #E2E2E2",borderWidth:"0px 1px 0px 1px",padding:"0px 10px 0px 10px"},children:t}),(0,n.jsx)("button",{className:"count-button",onClick:()=>{i(t+1)},style:{border:"none",display:"flex",width:"100%",cursor:"pointer",outline:"none",backgroundColor:"transparent"},children:(0,n.jsx)("img",{style:{margin:"auto"},src:"/assets/icons/plus.svg",alt:""})})]})})},o=e=>{let{icon:t,...i}=e;return(0,n.jsx)("button",{...i,children:(0,n.jsxs)("div",{style:{margin:"auto",display:"flex",height:"fit-content",width:"fit-content",justifyContent:"center"},children:[i.children," ",t]})})},s=o},183:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var n=i(43),r=function(){return r=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)};function o(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]])}return i}function s(e,t){var i="function"==typeof Symbol&&e[Symbol.iterator];if(!i)return e;var n,r,o=i.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)s.push(n.value)}catch(e){r={error:e}}finally{try{n&&!n.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}return s}function l(e,t,i){if(i||2===arguments.length)for(var n,r=0,o=t.length;r<o;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var d=(0,n.memo)((function(e){var t,i,d=e.responsiveProps,a=void 0===d?[]:d,c=o(e,["responsiveProps"]),u=s((0,n.useState)(0),2),m=u[0],v=u[1],h=s((0,n.useState)(c.activeSlideIndex),2),f=h[0],p=h[1],x=(0,n.useRef)(null),g=(0,n.useRef)(null),b=(0,n.useRef)(null),w=(0,n.useRef)(!1),y=(0,n.useRef)(0),S=(0,n.useRef)(!1),j=(0,n.useRef)(""),C=(0,n.useRef)(null),E=(0,n.useRef)(null),k=(0,n.useRef)(0),L=(0,n.useRef)(f),T=a.reduce((function(e,t){void 0===t&&(t={});var i=t.minWidth,n=void 0===i?0:i,s=t.maxWidth,l=void 0===s?null:s,d=o(t,["minWidth","maxWidth"]);return m>n&&(!l||m<=l)?r(r({},e),d):e}),c),N=n.Children.toArray(T.children),I=m?r(r({},T),{activeSlideIndex:Math.max(0,Math.min(T.activeSlideIndex,N.length-1)),itemsToShow:Math.min(N.length,T.itemsToShow||0),itemsToScroll:Math.min(N.length,T.itemsToScroll||1)}):c,M=I.containerProps,W=void 0===M?{}:M,P=W.style,R=void 0===P?{}:P,A=o(W,["style"]),O=I.innerProps,z=void 0===O?{}:O,B=z.style,F=void 0===B?{}:B,X=o(z,["style"]),V=I.itemsListProps,D=void 0===V?{}:V,_=D.style,q=void 0===_?{}:_,H=D.onTransitionEnd,Z=void 0===H?void 0:H,G=o(D,["style","onTransitionEnd"]),J=I.backwardBtnProps,U=void 0===J?{}:J,$=U.children,K=void 0===$?null:$,Q=U.show,Y=void 0===Q||Q,ee=o(U,["children","show"]),te=I.forwardBtnProps,ie=void 0===te?{}:te,ne=ie.children,re=void 0===ne?null:ne,oe=ie.show,se=void 0===oe||oe,le=o(ie,["children","show"]),de=I.activeSlideProps,ae=void 0===de?{}:de,ce=ae.className,ue=void 0===ce?"":ce,me=ae.style,ve=void 0===me?{}:me,he=o(ae,["className","style"]),fe=I.visibleSlideProps,pe=void 0===fe?{}:fe,xe=pe.className,ge=void 0===xe?"":xe,be=pe.style,we=void 0===be?{}:be,ye=o(pe,["className","style"]),Se=I.updateOnItemClick,je=void 0!==Se&&Se,Ce=I.activeSlideIndex,Ee=I.onRequestChange,ke=I.speed,Le=void 0===ke?0:ke,Te=I.delay,Ne=void 0===Te?0:Te,Ie=I.easing,Me=void 0===Ie?"linear":Ie,We=I.itemsToShow,Pe=void 0===We?0:We,Re=I.itemsToScroll,Ae=void 0===Re?1:Re,Oe=I.children,ze=I.onAfterChange,Be=I.autoplay,Fe=void 0!==Be&&Be,Xe=I.autoplayDirection,Ve=void 0===Xe?"forward":Xe,De=I.disableNavIfAllVisible,_e=void 0===De||De,qe=I.hideNavIfAllVisible,He=void 0===qe||qe,Ze=I.centerMode,Ge=void 0!==Ze&&Ze,Je=I.infinite,Ue=void 0===Je||Je,$e=I.disableNavIfEdgeVisible,Ke=void 0===$e||$e,Qe=I.disableNavIfEdgeActive,Ye=void 0===Qe||Qe,et=I.dotsNav,tt=void 0===et?{}:et,it=I.persistentChangeCallbacks,nt=void 0!==it&&it,rt=I.autoplayDelay,ot=void 0===rt?0:rt,st=I.preventScrollOnSwipe,lt=void 0!==st&&st,dt=I.disableSwipeByMouse,at=void 0!==dt&&dt,ct=I.disableSwipeByTouch,ut=void 0!==ct&&ct,mt=I.touchSwipeTreshold,vt=I.mouseSwipeTreshold,ht=I.swipeTreshold,ft=I.touchSwipeRatio,pt=I.mouseSwipeRatio,xt=I.swipeRatio,gt=void 0===xt?1:xt,bt=I.dirRTL,wt=void 0!==bt&&bt,yt=tt||{},St=yt.show,jt=void 0!==St&&St,Ct=yt.containerProps,Et=void 0===Ct?{}:Ct,kt=yt.itemBtnProps,Lt=void 0===kt?{}:kt,Tt=yt.activeItemBtnProps,Nt=void 0===Tt?{}:Tt,It=n.Children.count(Oe)-1,Mt=!!m&&(null===(t=g.current)||void 0===t?void 0:t.offsetWidth)>=(null===(i=b.current)||void 0===i?void 0:i.offsetWidth),Wt=He&&Mt,Pt=_e&&Mt,Rt=Ce-f==0||!Le&&!Ne?"none":"transform ".concat(Le,"ms ").concat(Me," ").concat(Ne,"ms"),At=(0,n.useCallback)((function(e){var t,i=e.correctionSlideIndex,n=e.prevCorrectionSlideIndex,r=e.curActiveSlideIndex,o=b.current.offsetWidth,d=b.current.children,a=d.length,c=Ue?l([],s(d),!1).slice(a/3-n,a/3-n+a/3):l([],s(d),!1),u=null===(t=c[r])||void 0===t?void 0:t.offsetWidth,m=Pe?c.reduce((function(e,t,i){return i>=r&&i<r+Pe||i<r&&i<r+Pe-c.length?e+t.offsetWidth:e}),0):g.current.offsetWidth,v=Math.min(m,g.current.offsetWidth),h=o-v,f=Ge&&Ue?-(v-u)/2:0,p=Ue?o/3:0,x=i-r==0?0:"forward"===j.current&&r<i?p:"backward"===j.current&&r>i?-p:0,w=r-i!=0,y=function(e){var t=c.reduce((function(t,i,n){return n>=e?t:t+(i.offsetWidth||0)}),0);return Ue?t:Math.min(h,t)},S=w&&Ue?y(i):0,C=w||!Ue?y(r):0,E=Pt?0:C-S+f+x+p,k="translateX(".concat(wt?"":"-").concat(E,"px)"),L=Ue?p+f:Math.min(h,c.reduce((function(e,t,i){return i<r?e+t.offsetWidth:e}),0)),T=L+v,N=c.map((function(e,t){return{slideIndex:t,htmlElement:e}})),I=Ue?l(l(l(l([],s(c.slice(r).map((function(e,t){return{slideIndex:t+r,htmlElement:e}}))),!1),s(N),!1),s(N),!1),s(c.slice(0,r).map((function(e,t){return{slideIndex:t,htmlElement:e}}))),!1):N,M=I.reduce((function(e,t){var i=t.slideIndex,n=t.htmlElement.offsetWidth;return(e.summ>=L&&e.summ<T||e.summ+n>L&&e.summ+n<=T)&&e.items.push({slideIndex:i,isFullyVisible:e.summ+n<=T&&e.summ>=L}),e.summ+=n,e}),{summ:0,items:[]}),W=!!M.items.find((function(e){return 0===e.slideIndex})),P=!!M.items.find((function(e){return e.slideIndex===c.length-1}));return{slidesHTMLElements:c,innerMaxWidth:m,itemsListMaxTranslateX:h,activeSlideWidth:u,offsetCorrectionForCenterMode:f,offsetCorrectionForInfiniteMode:p,itemsListTranslateX:E,itemsListTransform:k,visibleSlides:M.items,isFirstSlideVisible:W,isLastSlideVisible:P}}),[Ge,Pt,Ue,Pe,wt]),Ot=m?At({prevCorrectionSlideIndex:L.current,curActiveSlideIndex:Ce,correctionSlideIndex:f}):{},zt=Ot.innerMaxWidth,Bt=void 0===zt?0:zt,Ft=Ot.itemsListMaxTranslateX,Xt=void 0===Ft?0:Ft,Vt=Ot.activeSlideWidth,Dt=void 0===Vt?0:Vt,_t=Ot.offsetCorrectionForCenterMode,qt=void 0===_t?0:_t,Ht=Ot.offsetCorrectionForInfiniteMode,Zt=void 0===Ht?0:Ht,Gt=Ot.itemsListTranslateX,Jt=void 0===Gt?0:Gt,Ut=Ot.itemsListTransform,$t=void 0===Ut?"none":Ut,Kt=Ot.visibleSlides,Qt=void 0===Kt?[]:Kt,Yt=(0,n.useCallback)((function(e){var t;return"forward"===e?(t=Ce+Ae)>It?Ue?t-It-1:It:t:"backward"===e?(t=Ce-Ae)<0?Ue?It+1+t:0:t:Ce}),[Ce,Ae,It,Ue]),ei=(0,n.useCallback)((function(e,t){var i;if(j.current=t,b.current.style.transition=Le||Ne?"transform ".concat(Le,"ms ").concat(Me," ").concat(Ne,"ms"):"none",e!==Ce||nt){clearTimeout(C.current);var n=At({correctionSlideIndex:f,prevCorrectionSlideIndex:f,curActiveSlideIndex:e}),r=n.visibleSlides,o=n.isFirstSlideVisible,s=n.isLastSlideVisible,l=n.itemsListTransform;e!==Ce&&(null===(i=b.current)||void 0===i?void 0:i.style.transform)===l&&(w.current=!0),b.current.style.transform=l,Ee(e,{visibleSlides:r,isFirstSlideVisible:o,isLastSlideVisible:s})}else b.current.style.transform="translateX(".concat(wt?"":"-").concat(qt+Zt+(Ue?0:Jt),"px)")}),[nt,Ce,qt,Ne,Me,Le,Ee,Zt,Ue,Jt,f,At,wt]),ti=(0,n.useCallback)((function(){Fe&&(clearTimeout(C.current),C.current=setTimeout((function(){ei(Yt(Ve),Ve)}),ot||Ne))}),[Fe,Ve,ot,ei,Yt,Ne]),ii=(0,n.useCallback)((function(){ei(Yt("backward"),"backward")}),[ei,Yt]),ni=(0,n.useCallback)((function(e){p(Ce),Z&&Z(e)}),[Ce,Z]),ri=(0,n.useCallback)((function(){ei(Yt("forward"),"forward")}),[ei,Yt]),oi=function(e,t,i){return e.map((function(e,n){var s=e.props,l=void 0===s?{}:s,d=l.className,a=void 0===d?"":d,c=l.onClick,u=void 0===c?null:c,m=l.style,v=void 0===m?{}:m,h=o(l,["className","onClick","style"]),f=o(e,["props"]),p=Ue?k.current>=N.length?"forward":"backward":n>=Ce?"forward":"backward",x=n+t===Ce,g=Qt.find((function(e){return e.slideIndex===n+t})),b="".concat(a," ").concat(x?ue:""," ").concat(g?ge:"").trim()||void 0,w=r(r(r(r({},v),g?we:{}),x?ve:{}),{boxSizing:"border-box",margin:0}),y=!i&&je?function(e){var t=e.direction,i=e.index,n=e.onClick;return function(e){ei(i,t||(Ce<i?"forward":"")||(Ce>i?"backward":"")),n&&n(e)}}({direction:p,index:n+t,onClick:u}):u,S=r(r(r({role:"tabpanel",className:b,style:w,onClick:y},h),g?ye:{}),x?he:{});return k.current+=1,r({props:S},f)}))};return(0,n.useEffect)((function(){var e=b.current;function t(e){var i;e.preventDefault(),e.stopPropagation(),null===(i=e.target)||void 0===i||i.removeEventListener("click",t)}function i(e){var t,i;S.current=!0;var n=!!(null===(t=e.touches)||void 0===t?void 0:t[0]),r=n?null===(i=e.touches)||void 0===i?void 0:i[0].clientX:e.clientX,o=(y.current-r)*((n?ft:pt)||gt)+qt+Zt+(Ue?0:Jt),s=b.current.offsetWidth,l=Math.max(-o,-s);b.current.style.transition="none",b.current.style.transform="translateX(".concat((wt?-1:1)*l,"px)")}function n(e){var r,o,s;if(document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",n),document.removeEventListener("touchmove",i),document.removeEventListener("touchend",n),S.current){null===(r=e.target)||void 0===r||r.addEventListener("click",t);var l=!!(null===(o=e.changedTouches)||void 0===o?void 0:o[0]),d=l?e.changedTouches[e.changedTouches.length-1].clientX:e.clientX,a=(y.current-d)*((l?ft:pt)||gt),c=(l?mt:vt)||ht||Dt/2,u=a>c?{index:Yt("forward"),direction:"forward"}:a<-c?{index:Yt("backward"),direction:"backward"}:{index:Ce,direction:"forward"};ei(u.index,u.direction)}else null===(s=e.target)||void 0===s||s.removeEventListener("click",t);y.current=0,S.current=!1}function r(e){var t,r;clearTimeout(C.current);var o=!!(null===(t=e.touches)||void 0===t?void 0:t[0]);y.current=o?null===(r=e.touches)||void 0===r?void 0:r[0].clientX:e.clientX,o?(document.addEventListener("touchmove",i),document.addEventListener("touchend",n)):(document.addEventListener("mousemove",i),document.addEventListener("mouseup",n))}return Pt||(at||null==e||e.addEventListener("mousedown",r),ut||null==e||e.addEventListener("touchstart",r,{passive:!0}),at&&ut||null==e||e.addEventListener("dragstart",n)),function(){S.current=!1,y.current=0,null==e||e.removeEventListener("mousedown",r),null==e||e.removeEventListener("touchstart",r),null==e||e.removeEventListener("dragstart",n),document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",n),document.removeEventListener("touchmove",i),document.removeEventListener("touchend",n)}}),[Ue,Jt,$t,qt,Zt,Ce,Dt,Yt,ei,Pt,at,ut,mt,vt,ht,ft,pt,gt,wt]),(0,n.useEffect)((function(){return Ce!==f?(!Le&&!Ne||w.current)&&(w.current=!1,p(Ce)):(ze&&ze(Ce,f),(Ue||"forward"===Ve&&Ce!==It||"backward"===Ve&&0!==Ce)&&ti()),function(){clearTimeout(C.current)}}),[f,Ce,ze,Le,Ne,ti,Ue,It,Ve]),(0,n.useEffect)((function(){return m&&ti(),function(){clearTimeout(C.current)}}),[m]),(0,n.useEffect)((function(){function e(){clearTimeout(E.current),clearTimeout(C.current),E.current=setTimeout((function(){m!==window.innerWidth&&v(0)}),400)}return m!==window.innerWidth&&v(window.innerWidth),window.addEventListener("resize",e),function(){clearTimeout(E.current),window.removeEventListener("resize",e)}}),[m]),k.current=0,L.current=f,n.createElement("div",r({style:r({display:"flex",flexFlow:"row wrap",boxSizing:"border-box",justifyContent:"center",width:"100%"},R)},A,{ref:x}),Y&&!Wt&&n.createElement("button",r({},ee,{type:"button",onClick:(0===Jt&&Ke||0===Ce&&Ye)&&!Ue?void 0:ii,disabled:"boolean"==typeof ee.disabled?ee.disabled:!(!(0===Jt&&Ke||0===Ce&&Ye)||Ue)}),K),n.createElement("div",r({},X,{style:r(r({width:"100%"},F),{display:"flex",boxSizing:"border-box",flexFlow:"row wrap",padding:"0",overflow:"hidden",maxWidth:Bt?"".concat(Bt,"px"):void 0,flex:Bt?void 0:"1 0 auto"}),ref:g}),n.createElement("div",r({},G,{style:r(r({},q),{display:"flex",boxSizing:"border-box",outline:"none",transition:Rt,transform:$t,touchAction:lt?"none":"auto"}),onTransitionEnd:Le||Ne?ni:Z,tabIndex:-1,role:"presentation",ref:b}),Ue&&oi(N.slice(f),f,Pt),oi(N,0,Pt),Ue&&oi(N,0,Pt),Ue&&oi(N.slice(0,f),0,Pt))),se&&!Wt&&n.createElement("button",r({},le,{type:"button",onClick:(Jt===Xt&&Ke||Ce===It&&Ye)&&!Ue?void 0:ri,disabled:"boolean"==typeof le.disabled?le.disabled:!(!(Jt===Xt&&Ke||Ce===It&&Ye)||Ue)}),re),!!jt&&n.createElement("div",r({style:{width:"100%",display:"flex",justifyContent:"center"}},Et),Array.from({length:Math.ceil(N.length/Ae)}).map((function(e,t){return n.createElement("button",r({type:"button",key:t,title:"".concat(t)},Lt,Ce>=t*Ae&&Ce<Math.min(Ae*(t+1),It+1)?Nt:{},{onClick:function(){ei(Math.min(t*Ae,N.length-1),Math.min(t*Ae,N.length-1)>Ce?"forward":"backward")}}))}))))})),a=i(579);const c=e=>{let{slides:t,slidesStyle:i,buttonSize:r=60,buttonStyle:o,buttonClass:s,size:l,slidesClass:c}=e;const[u,m]=(0,n.useState)(0);return(0,a.jsx)("div",{children:(0,a.jsx)(d,{containerProps:{style:{width:"100%",minHeight:"big"==l?"347px":"fit-content",justifyContent:"space-between",userSelect:"none",position:"relative"}},preventScrollOnSwipe:!0,swipeTreshold:60,activeSlideIndex:u,onRequestChange:m,forwardBtnProps:{children:(0,a.jsx)("svg",{width:Math.floor(r/2),height:Math.floor(r/2),viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M12.5 24L11.0667 22.5667L17.6666 15.9667L11.0667 9.36668L12.5 7.93335L20.5333 15.9667L12.5 24Z",fill:"".concat("big"==l?"white":"black")})}),style:{width:r,height:r,minWidth:r,zIndex:1e3,right:0},className:s},backwardBtnProps:{children:(0,a.jsx)("svg",{width:Math.floor(r/2),height:Math.floor(r/2),viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M19.5 24L20.9333 22.5667L14.3334 15.9667L20.9333 9.36668L19.5 7.93335L11.4667 15.9667L19.5 24Z",fill:"".concat("big"==l?"white":"black")})}),style:{width:r,height:r,minWidth:r,zIndex:1e3},className:s},itemsToShow:7,speed:400,children:t.map(((e,t)=>(0,a.jsx)("img",{src:e,className:c,alt:"slide-image"},t)))})})};var u=i(511),m=i(216),v=i(581),h=i(148),f=i(801);const p=e=>{let{isSmall:t=!1,item:i}=e;const[r,o]=(0,n.useState)(0),s=(0,m.Zp)(),{auth:l}=(0,h.G)((e=>e.auth));return(0,a.jsxs)("div",{onClick:()=>{s("/".concat(null===l||void 0===l?void 0:l.user,"/product?id=").concat(i._id))},className:"".concat(t?"card-small":"card-big"),children:[(0,a.jsx)("div",{className:"badge",children:(0,a.jsx)("p",{children:"HOT"})}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"image-container",children:[(0,a.jsx)("img",{className:"card-image",src:null!==i&&void 0!==i&&i.images[0]?"".concat(f.JR).concat(null===i||void 0===i?void 0:i.images[0]):"/assets/images/image-placeholder.jpg",alt:"iphone"}),(0,a.jsx)(v.Ay,{className:"rounded card-add-button",icon:(0,a.jsx)("img",{src:"/assets/icons/add.svg",alt:""})})]}),(0,a.jsx)("p",{className:"card-category",children:null===i||void 0===i?void 0:i.category}),(0,a.jsx)("p",{className:"card-title",children:null===i||void 0===i?void 0:i.name}),(0,a.jsxs)("p",{className:"card-price",children:[" ",(0,a.jsx)("span",{className:"inr",children:"INR"}),(0,a.jsx)("span",{className:"price",children:(0,u.u)(null===i||void 0===i?void 0:i.discountedPrice)}),(0,a.jsx)("span",{className:"actual",children:(0,u.u)(null===i||void 0===i?void 0:i.actualPrice)})]}),(0,a.jsx)(v.Ay,{className:"addtocart-button",children:"ADD TO CART"})]})]})};var x=i(211);const g=()=>{var e,t;const i=(0,h.j)(),{error:r,data:o,loading:s}=(0,h.G)((e=>e.product));return(0,n.useEffect)((()=>{i((0,x.qr)())}),[]),s?(0,a.jsx)("div",{children:"loading..."}):(0,a.jsxs)("div",{children:[(0,a.jsx)(c,{size:"big",slidesClass:"main-slide",containerClass:"main-slide-container",buttonClass:"main-slide-button",buttonSize:50,slides:["/assets/images/slide-background.png","/assets/images/slide-background.png","/assets/images/slide-background.png"]}),(0,a.jsx)("div",{className:"products",children:(0,a.jsxs)("div",{className:"product-container",children:[(0,a.jsx)("div",{className:"product-title",children:"Products"}),(0,a.jsx)("div",{className:"horizontal-seperator",style:{marginTop:"22px"}}),o&&(null===o||void 0===o?void 0:o.items)&&(null===o||void 0===o||null===(e=o.items)||void 0===e?void 0:e.length)>0&&(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"row",height:"802px",width:"100%",overflow:"hidden"},children:[(0,a.jsx)("div",{style:{backgroundColor:"#B9B9B9",padding:"1px 0px 1px 1px",height:"800px",position:"relative"},children:(0,a.jsx)(p,{item:null===o||void 0===o?void 0:o.items[0],isSmall:!1},0)}),(0,a.jsx)("div",{className:"product-grid",style:{width:"100%",height:"800px"},children:null===o||void 0===o||null===(t=o.items)||void 0===t?void 0:t.map(((e,t)=>{if(0!==t)return(0,a.jsx)(p,{item:e,isSmall:!0},t)}))})]})||(0,a.jsx)("div",{className:"empty-container",children:(0,a.jsx)("img",{style:{width:"400px",height:"100%"},src:"/assets/images/no-product-found.png"})})]})}),(0,a.jsx)("div",{className:"brands",children:(0,a.jsxs)("div",{className:"brands-container",children:[(0,a.jsx)("p",{className:"brands-title",children:"Top Brands"}),(0,a.jsx)("div",{className:"horizontal-seperator",style:{marginBottom:"67px",marginTop:"22px"}}),(0,a.jsx)(c,{size:"small",slidesClass:"brands-slides",buttonClass:"brands-slides-button",buttonSize:40,slides:["/assets/images/apple.png","/assets/images/realme.png","/assets/images/sony.png","/assets/images/redmi.png","/assets/images/samsung.png","/assets/images/lg.png","/assets/images/dell.png"]})]})})]})}},511:(e,t,i)=>{i.d(t,{u:()=>n});const n=e=>new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2}).format(e)}}]);
//# sourceMappingURL=183.9b3c6bc6.chunk.js.map