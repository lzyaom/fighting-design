import{h as g,f as v,a1 as k,a5 as C,d as x,o as y,c as T,x as J,E as W,r as G,D as A,b as m,_ as Y,v as Q,a6 as U,a7 as X,j as ee,C as P,y as te,n as ne}from"./framework.b7b74b24.js";const H=e=>(e.install=t=>{const{name:s}=e;s&&t.component(s,e)},e),Fe=(e,t)=>(e.install=s=>{s.config.globalProperties[t]=e},e),Ne=(e,t)=>(e.install=s=>{s.directive(t,e)},e),Ee=(e,t=2)=>b(e)?Number(e.toFixed(t)):(O("keepDecimal","`value` is not a number"),e),$e=(e,t=1e3)=>{let s;return(...a)=>{s&&clearTimeout(s),s=setTimeout(()=>{e(...a)},t)}},Pe=e=>e<10?`0${e}`:e.toString(),B=(e,t="px")=>e?h(e)?e:e+t:"",Be=e=>e?b(e)?e:Number.parseFloat(e)||0:0,w=e=>e.replace(/([A-Z])/g,(t,s)=>"-"+s.toLowerCase()),{toString:se}=Object.prototype,j=e=>t=>se.call(t)===`[object ${e}]`,we=j("Date"),h=e=>typeof e=="string",b=e=>typeof e=="number"&&!isNaN(e),L=e=>typeof e=="boolean",oe=j("Object"),re=e=>typeof e=="function",ce=Array.isArray,Le=typeof window<"u",O=(e,t)=>{console.warn(`[fighting-design/${e}]: ${t}`)},Se=(e,t)=>{console.error(`[fighting-design/${e}]: ${t}`)},S=(e=!1)=>({type:Boolean,default:e}),xe=e=>({type:Number,default:e}),I=(e,t)=>{const s={type:String,default:e};return t&&(s.validator=t),s},D=e=>({type:[String,Number],default:e}),V=(e=null)=>({type:Object,default:()=>e}),z=(e=null)=>({type:Function,default:e}),Ge=(e=[])=>({type:Array,default:()=>e}),F=(e,t)=>{const{filter:s}=ae(e),a=(r,u)=>g(()=>{const n=v([]),o=s(r);u&&n.value.push(u);for(const l in o)o[l]&&n.value.push(`f-${t}__${L(o[l])?w(l):o[l]}`);return n.value}),i=(r,u,n=!0)=>{if(L(n))return b(r)&&n?B(r):r;if(h(n)){if(n===u)return r}else if(ce(n)){for(const o of n)if(o===u)return r}return B(r)};return{classes:a,styles:(r,u=!0)=>g(()=>{const n=k({}),o=s(r);for(const l in o)o[l]&&(n[`--${t}-${w(l)}`]=i(o[l],l,u));return n})}},ae=e=>({filter:a=>{const i=k({});return a.forEach(c=>{h(c)?i[c]=C(e,c):oe(c)&&c.callback&&c.callback()&&(i[c.actualKey||c.key]=C(e,c.key))}),i},interceptors:(a,i,c=null)=>i()?C(e,a):c}),N=()=>({run:(t,...s)=>{re(t)&&t(...s)}}),Ae=["large","middle","small","mini"],le=["default","primary","success","danger","warning","info"],He=["_blank","_self","_parent","_top"],je=["fill","contain","cover","none","scale-down"],ie={icon:V(),color:I(),size:D(),onClick:z()},ue=x({name:"FSvgIcon",__name:"svg-icon",props:ie,setup(e){const t=e,{run:s}=N(),{styles:a}=F(t,"svg-icon"),i=r=>{s(t.onClick,r)},c=a(["size","color"]);return(r,u)=>(y(),T("i",{role:"img",class:"f-svg-icon","text-indent":"middle",style:A(m(c)),onClick:i},[r.icon?(y(),J(W(r.icon),{key:0})):G(r.$slots,"default",{key:1})],4))}}),fe=H(ue),de={},pe={width:"1em",height:"1em",viewBox:"0 0 16 16"},me=Q("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"},null,-1),ge=[me];function ye(e,t){return y(),T("svg",pe,ge)}const he=Y(de,[["render",ye]]),f=k({}),_=e=>e.props.placement,M=e=>{const t=_(e);return f[t].findIndex(s=>s.uid==e.uid)},R=e=>e.vnode.el.offsetHeight+16,be=e=>{const t=M(e),s=_(e);if(!(t<0))for(let a=t+1;a<f[s].length;a++){const i=f[s][a];i.exposed.offsetVal.value-=R(e)}},_e=e=>{be(e);const t=_(e);f[t].splice(M(e),1)},Oe=(e,t)=>{const s=n=>{const o=_(n);f[o]?f[o].push(n):f[o]=[n]},a=n=>{let o=n.offset||20;const l=f[n.placement?n.placement:t==="message"?"top":"top-right"];return l&&l.forEach(d=>{o+=R(d)}),o},i=n=>{const o=U(e,n),l=document.createElement("div");return X(o,l),document.body.appendChild(l.firstElementChild),o.component},c=n=>{const o=i(n);return s(o),o.proxy},r=n=>{const o={duration:2500,placement:t==="message"?"top":"top-right",offset:a(n),...n};return b(o.duration)||(o.duration=2500,O(`F${t}`,"Parameters `duration` is not a number.The default value has been used 2500.")),o},u=n=>{const o=h(n)?{message:n}:n;return c(r(o))};return le.forEach(n=>{u[n]=o=>c(r({message:o,type:n}))}),{Message:u}},De=(e,t)=>{const{classes:s,styles:a}=F(e,t),{run:i}=N(),c=ee(),r=v(!0),u=s(["type","placement","round"],`f-${t}`),n=a(["color","background","zIndex"],"zIndex"),o=g(()=>e.placement.includes("top")),l=v(e.offset);let d;const E=p=>{r.value=!1,i(e.onClose,p),clearTimeout(d)},Z=()=>{_e(c)},K=()=>{c.vnode.el&&c.vnode.el.parentElement.removeChild(c.vnode.el)},$=()=>{e.duration>0&&(d=setTimeout(()=>{E()},e.duration))};$();const q=g(()=>{const p={};return e.placement.includes("bottom")?p.bottom=l.value+"px":p.top=l.value+"px",p});return{classList:u,style:n,visible:r,isPosition:o,offsetStyle:q,offsetVal:l,onBeforeLeave:Z,onAfterLeave:K,clearTimer:()=>{d&&clearTimeout(d)},startTime:()=>{$()},handelClose:E}},Ce={size:D(),round:S(),disabled:S(),color:I(),hoverColor:I(),icon:V(),onClick:z()},ve=x({name:"FCloseBtn",__name:"close-btn",props:Ce,setup(e){const t=e,{styles:s,classes:a}=F(t,"close-btn"),{run:i}=N(),c=n=>{t.disabled||i(t.onClick,n)},r=a(["round","disabled"],"f-close-btn"),u=s(["color","hoverColor"]);return(n,o)=>(y(),T("div",{role:"button",class:ne(m(r)),style:A(m(u)),onClick:c},[P(m(fe),{size:n.size,icon:n.icon},{default:te(()=>[G(n.$slots,"default",{},()=>[P(m(he))])]),_:3},8,["size","icon"])],6))}}),Ve=H(ve);export{Ge as A,je as B,Se as C,$e as D,we as E,le as F,L as G,he as H,Pe as I,ae as J,Ne as K,S as a,xe as b,V as c,z as d,fe as e,Ve as f,Fe as g,Oe as h,h as i,Ae as j,F as k,H as l,D as m,re as n,N as o,ce as p,B as q,He as r,I as s,oe as t,De as u,Ee as v,O as w,Be as x,Le as y,b as z};
