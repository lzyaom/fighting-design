import{d as L,o,x as i,y as N,a2 as T,v as z,n as V,b as e,D as h,c as r,C as D,z as u,a3 as I,E as _,t as g,F as j,a as w,a4 as A,T as E}from"./framework.b7b74b24.js";import{s as l,F as O,a as d,b as m,c as G,d as H,u as W,e as Y,i as q,f as J,g as K,h as Q}from"./index.143ce84d.js";const R={message:{type:[String,Object],default:()=>null},type:l("default",t=>O.includes(t)),close:d(),duration:m(2500),round:d(),icon:G(),color:l(),background:l(),offset:m(20),placement:l("top",t=>["top","top-left","top-right","bottom","bottom-left","bottom-right"].includes(t)),zIndex:m(),closeBtn:{type:[String,Object],default:()=>null},onClose:H()},U={key:0,class:"f-message__before_icon"},X={key:2,class:"f-message__text"},Z=L({name:"FMessage",__name:"message",props:R,setup(t,{expose:v}){const y=t,{classList:b,style:B,visible:k,isPosition:F,offsetStyle:C,offsetVal:S,onBeforeLeave:M,onAfterLeave:P,clearTimer:c,startTime:f,handelClose:p}=W(y,"message");return v({offsetVal:S}),(s,a)=>(o(),i(E,{mode:"out-in",appear:"",name:"f-message-fade"+(e(F)?"-top":"-bottom"),onBeforeLeave:e(M),onAfterLeave:e(P)},{default:N(()=>[T(z("div",{class:V(e(b)),style:h([e(C),e(B)]),onMouseleave:a[1]||(a[1]=(...n)=>e(f)&&e(f)(...n)),onMouseenter:a[2]||(a[2]=(...n)=>e(c)&&e(c)(...n))},[s.icon?(o(),r("div",U,[D(e(Y),{icon:s.icon,size:16},null,8,["icon"])])):u("",!0),I(s.message)?(o(),i(_(s.message),{key:1})):(o(),r("div",X,g(s.message),1)),s.close?(o(),r("div",{key:3,class:"f-message__close",onClick:a[0]||(a[0]=(...n)=>e(p)&&e(p)(...n))},[e(q)(s.closeBtn)?(o(),r(j,{key:0},[w(g(s.closeBtn),1)],64)):(o(),i(e(J),{key:1,icon:s.closeBtn,size:15,color:"#a4a4a4"},null,8,["icon"]))])):u("",!0)],38),[[A,e(k)]])]),_:1},8,["name","onBeforeLeave","onAfterLeave"]))}}),{Message:$}=Q(Z,"message"),se=K($,"FMessage");export{se as F};
