import{S as z,i as Q,s as R,l as d,u as N,a as y,m as v,p as S,v as P,h,c as b,q as o,b as U,K as c,Q as $,R as j,n as D,T as J,U as V,x as X,y as Y,z as Z,f as k,t as ee,C as te}from"../chunks/index-b96070fb.js";function re(r){var e=r.default;if(typeof e=="function"){var l=function(){return e.apply(this,arguments)};l.prototype=e.prototype}else l={};return Object.defineProperty(l,"__esModule",{value:!0}),Object.keys(r).forEach(function(a){var s=Object.getOwnPropertyDescriptor(r,a);Object.defineProperty(l,a,s.get?s:{enumerable:!0,get:function(){return r[a]}})}),l}var q={exports:{}};const ne={},le=Object.freeze(Object.defineProperty({__proto__:null,default:ne},Symbol.toStringTag,{value:"Module"})),x=re(le),ae=x,G=x,se=x,oe=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function ie(r){const e={};let l=r.toString();l=l.replace(/\r\n?/mg,`
`);let a;for(;(a=oe.exec(l))!=null;){const s=a[1];let t=a[2]||"";t=t.trim();const n=t[0];t=t.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),n==='"'&&(t=t.replace(/\\n/g,`
`),t=t.replace(/\\r/g,"\r")),e[s]=t}return e}function F(r){console.log(`[dotenv][DEBUG] ${r}`)}function ce(r){return r[0]==="~"?G.join(se.homedir(),r.slice(1)):r}function ue(r){let e=G.resolve(process.cwd(),".env"),l="utf8";const a=Boolean(r&&r.debug),s=Boolean(r&&r.override);r&&(r.path!=null&&(e=ce(r.path)),r.encoding!=null&&(l=r.encoding));try{const t=B.parse(ae.readFileSync(e,{encoding:l}));return Object.keys(t).forEach(function(n){Object.prototype.hasOwnProperty.call(process.env,n)?(s===!0&&(process.env[n]=t[n]),a&&F(s===!0?`"${n}" is already defined in \`process.env\` and WAS overwritten`:`"${n}" is already defined in \`process.env\` and was NOT overwritten`)):process.env[n]=t[n]}),{parsed:t}}catch(t){return a&&F(`Failed to load ${e} ${t.message}`),{error:t}}}const B={config:ue,parse:ie};q.exports.config=B.config;q.exports.parse=B.parse;q.exports=B;function pe(r){let e,l,a,s,t,n,u,E,w,p,O,g,I,L,m,A,_,T,C,H;return{c(){e=d("div"),l=d("label"),a=N("Name"),s=y(),t=d("input"),n=y(),u=d("label"),E=N("Email"),w=y(),p=d("input"),O=y(),g=d("label"),I=N("Tier"),L=y(),m=d("input"),A=y(),_=d("input"),this.h()},l(f){e=v(f,"DIV",{class:!0});var i=S(e);l=v(i,"LABEL",{for:!0,class:!0});var K=S(l);a=P(K,"Name"),K.forEach(h),s=b(i),t=v(i,"INPUT",{type:!0,id:!0,name:!0,placeholder:!0,class:!0}),n=b(i),u=v(i,"LABEL",{for:!0,class:!0});var M=S(u);E=P(M,"Email"),M.forEach(h),w=b(i),p=v(i,"INPUT",{type:!0,id:!0,name:!0,placeholder:!0,class:!0}),O=b(i),g=v(i,"LABEL",{for:!0,class:!0});var W=S(g);I=P(W,"Tier"),W.forEach(h),L=b(i),m=v(i,"INPUT",{type:!0,id:!0,name:!0,placeholder:!0,class:!0}),A=b(i),_=v(i,"INPUT",{type:!0,class:!0}),i.forEach(h),this.h()},h(){o(l,"for","name"),o(l,"class","svelte-fl9noc"),o(t,"type","text"),o(t,"id","name"),o(t,"name","name"),o(t,"placeholder","Aly"),o(t,"class","svelte-fl9noc"),o(u,"for","email"),o(u,"class","svelte-fl9noc"),o(p,"type","text"),o(p,"id","email"),o(p,"name","email"),o(p,"placeholder","aly@aly.com"),o(p,"class","svelte-fl9noc"),o(g,"for","tier"),o(g,"class","svelte-fl9noc"),o(m,"type","text"),o(m,"id","tier"),o(m,"name","tier"),o(m,"placeholder","Free/Pro/Enterprise"),o(m,"class","svelte-fl9noc"),o(_,"type","submit"),_.value=T="Create a "+r[2]+" tier for "+r[0],o(_,"class","svelte-fl9noc"),o(e,"class","svelte-fl9noc")},m(f,i){U(f,e,i),c(e,l),c(l,a),c(e,s),c(e,t),$(t,r[0]),c(e,n),c(e,u),c(u,E),c(e,w),c(e,p),$(p,r[1]),c(e,O),c(e,g),c(g,I),c(e,L),c(e,m),$(m,r[2]),c(e,A),c(e,_),C||(H=[j(t,"input",r[4]),j(p,"input",r[5]),j(m,"input",r[6]),j(_,"click",r[3])],C=!0)},p(f,[i]){i&1&&t.value!==f[0]&&$(t,f[0]),i&2&&p.value!==f[1]&&$(p,f[1]),i&4&&m.value!==f[2]&&$(m,f[2]),i&5&&T!==(T="Create a "+f[2]+" tier for "+f[0])&&(_.value=T)},i:D,o:D,d(f){f&&h(e),C=!1,J(H)}}}function fe(r,e,l){V();let a="",s="",t="Free";const n="http://localhost:8080/register";async function u(){console.log({name:a,email:s,tier:t}),console.log(n);let O=await fetch(`${n}`,{method:"POST",headers:new Headers([["Content-Type","application/json"]]),body:JSON.stringify({tenant:a,email:s,tier:t,base_domain:"kube.ab.tobealy.com",action:"deploy"})});console.log(O)}function E(){a=this.value,l(0,a)}function w(){s=this.value,l(1,s)}function p(){t=this.value,l(2,t)}return[a,s,t,u,E,w,p]}class me extends z{constructor(e){super(),Q(this,e,fe,pe,R,{})}}function de(r){let e,l,a,s,t;return s=new me({}),{c(){e=d("h1"),l=N("Welcome to SvelteKit"),a=y(),X(s.$$.fragment)},l(n){e=v(n,"H1",{});var u=S(e);l=P(u,"Welcome to SvelteKit"),u.forEach(h),a=b(n),Y(s.$$.fragment,n)},m(n,u){U(n,e,u),c(e,l),U(n,a,u),Z(s,n,u),t=!0},p:D,i(n){t||(k(s.$$.fragment,n),t=!0)},o(n){ee(s.$$.fragment,n),t=!1},d(n){n&&h(e),n&&h(a),te(s,n)}}}class _e extends z{constructor(e){super(),Q(this,e,null,de,R,{})}}export{_e as default};
