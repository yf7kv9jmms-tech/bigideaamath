(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,601951,50975,58135,378598,513095,663160,767223,e=>{"use strict";var a=e.i(126343),r=e.i(549637);let t={game:"songless",name:a.SONGLESS_NAME,path:"/songless",emoji:"🎧"},s={game:"songspot",name:r.SONGSPOT_NAME,path:"/songspot",emoji:"🎧"};e.s(["SONGLESS_ARENA",0,t,"SONGSPOT_ARENA",0,s],601951);var o=e.i(843476),i=e.i(531278),n=e.i(271645),l=e.i(732800),c=e.i(151304),d=e.i(770969),p=e.i(433627),b=e.i(360539),m=e.i(306512),u=e.i(53942),f=e.i(729395),g=e.i(303163),h=e.i(407104),x=e.i(350124);let $="Everything",y=["wembley","madison-square","red-rocks","hollywood-bowl","the-o2","royal-albert-hall","carnegie-hall","the-fillmore","ryman","massey-hall","olympia","paradiso","roundhouse","barrowland","first-avenue","troubadour","apollo","budokan","tivoli","vega","the-forum","greek-theatre","bowery-ballroom","sphere"].map((e,a)=>({id:e,name:0===a?$:`${$} ${a+1}`,detail:"All years · Hits only"}));function v(e){let a=y.findIndex(a=>a.id===e);return a>=0?Math.round(3e4*a/y.length):(0,h.fnv1a)(e)%3e4}function k(e){return Math.round(1e3*Math.ceil(Math.max(0,Math.min(2e4,2e4-e))/1e3)*2500/2e4)}let z=g.MAX_SONG_SCORE+2500,w="arena:chat-shut",j="arena:best",N=[...x.IDENTITY_KEYS,w,j],M={prefix:"songless_arena",channel:e=>`songless-arena:${e}`,api:"/api/arena",label:"arena",capacity:50,anonymous:"Player",arrived:e=>`${e} joined the room.`};e.s(["ARENA_BEST_KEY",0,j,"ARENA_CHAT_KEY",0,w,"ARENA_KEYS",0,N,"ARENA_ROOMS",0,y,"ARENA_SPEC",0,M,"COUNTDOWN_MS",0,3e3,"CYCLE_MS",0,3e4,"GUESS_MS",0,2e4,"JOIN_CUTOFF_MS",0,1e4,"REVEAL_MS",0,7e3,"ROOM_CAPACITY",0,50,"ROUND_CEILING",0,z,"SPEED_BONUS",0,2500,"roomPhaseOffset",0,v,"speedBonus",0,k],50975);var S=e.i(917129);let C={genres:[],artists:[],from:g.YEAR_MIN,to:g.YEAR_MAX,hits:!1,clean:!1},X={...C,hits:!0},W=e=>e.replace(/[^a-z0-9]/g,"").slice(0,24),R=e=>e.slice(0,24),Y=e=>[...new Set(e.map(W).filter(Boolean))].slice(0,4),H=new Set;function O(e,a){if(!e||0===e.artists.length)return H;let r=function(e){let a=new Map;for(let r of e){let e=W(r.key);e&&!a.has(e)&&a.set(e,r.key)}return a}(a),t=new Set;for(let a of e.artists){let e=r.get(R(a));e&&t.add(e)}return t}let A=e=>"x2"===e||e.startsWith("x2-")||e.startsWith("x-"),E=g.GENRES.map(e=>e.key);function F(e){let a=["x2"];for(let r of E)e.genres.includes(r)&&a.push("g"+r);for(let r of((0,g.isFullEra)(e.from,e.to)||a.push("f"+e.from,"t"+e.to),e.hits&&a.push("h"),e.clean&&a.push("c"),Y(e.artists).sort()))a.push("n"+r);return a.join("-")}function P(e){if(e.length>200)return null;if(e.startsWith("x-"))return function(e){let a=e.split("-");if(4!==a.length)return null;let[,r,t,s]=a;if("any"!==r&&!E.includes(r)||"any"!==t&&!Object.hasOwn(_,t)||"hits"!==s&&"deep"!==s)return null;let[o,i]="any"===t?[g.YEAR_MIN,g.YEAR_MAX]:_[t];return{genres:"any"===r?[]:[r],artists:[],from:o,to:i,hits:"hits"===s,clean:!1}}(e);if("x2"!==e&&!e.startsWith("x2-"))return null;let a={...C,genres:[],artists:[]},[,...r]=e.split("-"),t=null,s=null;for(let e of r){let r=e.slice(1);switch(e[0]){case"g":if(!E.includes(r)||a.genres.includes(r))return null;a.genres.push(r);break;case"n":if(!/^[a-z0-9]+$/.test(r)||a.artists.includes(r)||a.artists.length>=4)return null;a.artists.push(r);break;case"f":if(null===(t=L(r)))return null;break;case"t":if(null===(s=L(r)))return null;break;case"h":if(r)return null;a.hits=!0;break;case"c":if(r)return null;a.clean=!0;break;default:return null}}if(null===t!=(null===s))return null;if(null!==t&&null!==s){if(t>s)return null;a.from=t,a.to=s}return a}let L=e=>{if(!/^\d{4}$/.test(e))return null;let a=Number(e);return a>=g.YEAR_MIN&&a<=g.YEAR_MAX?a:null},_={"80s":[1980,1989],"90s":[1990,1999],"00s":[2e3,2009],"10s":[2010,2019],"20s":[2020,g.YEAR_MAX]};function I(e,a){let r=g.GENRES.filter(a=>e.includes(a.key)).map(e=>e.label);return 0===r.length?"":r.length<=2?r.join(a):r.length+" Genres"}function q(e,a=H){return{allowExplicit:!e.clean,hitsOnly:e.hits,yearFrom:e.from,yearTo:e.to,genres:e.genres,artists:[...a]}}function T(e,a){let r;return{id:F(e),name:function(e,a){if(e.artists.length>0){let r=e.artists.map(e=>a?.(e)??e);return 1===r.length?r[0]:2===r.length?r[0]+" & "+r[1]:r[0]+" +"+(r.length-1)}let r=[(0,g.isFullEra)(e.from,e.to)?"":e.from%10==0&&e.to===e.from+9?e.from+"s":e.from+"-"+e.to,I(e.genres," & ")].filter(Boolean);return 0===r.length?"Everything":r.join(" ")}(e,a),detail:(r=[],(0,g.isFullEra)(e.from,e.to)?r.push("All years"):e.artists.length>0&&r.push(e.from+"-"+e.to),e.artists.length>0&&r.push(0===e.genres.length?"All genres":I(e.genres,", ")),r.push(e.hits?"Hits only":"All songs"),e.clean&&r.push("Clean only"),r.join(" · "))}}function U(e,a){let r=P(e);return r?{...T(r,a),id:e}:null}function B(e,a){let r,t;return y.find(a=>a.id===e)??U(e,a)??(t=(r=(0,b.splitPrivateRoom)(e))?P(r.base):null,r&&t?{...T(t,a),id:e,code:r.code}:null)}function G(e){let a=new Map;for(let r of e){let e=W(r.key);e&&!a.has(e)&&a.set(e,r.label)}return e=>a.get(R(e))}function D(e,a,r=H){return(0,S.playablePool)(e,q(a,r))}let K=e=>y.find(a=>((e??{})[a.id]??0)<50)??null;function V(e,a){let r=e??{},t=Object.keys(r).filter(e=>A(e)&&(r[e]??0)>0).map(e=>U(e,a)).filter(e=>null!==e),s=K(e);return function(e){let a=new Set,r=new Map;for(let t of[...e].sort((e,a)=>Q(e)-Q(a)||J(e.id,a.id))){let e=t.name;for(let r=2;a.has(e);r++)e=`${t.name} ${r}`;a.add(e),r.set(t.id,e)}return e.map(e=>{let a=r.get(e.id);return a===e.name?e:{...e,name:a}})}([...y,...t].filter(e=>(r[e.id]??0)>0||e.id===s?.id).sort((e,a)=>{let t=(r[a.id]??0)-(r[e.id]??0);return 0!==t?t:Q(e)-Q(a)}))}let J=(e,a)=>e<a?-1:+(e>a),Q=e=>{let a=y.findIndex(a=>a.id===e.id);return a<0?y.length:a};function Z(e){return e?V(e).reduce((a,r)=>a+(e[r.id]??0),0)+(0,b.privateHeadcount)(e):0}var ee=e.i(292270),ea=e.i(475254);let er=(0,ea.default)("message-square",[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]);var et=e.i(761911),es=e.i(954726),eo=e.i(72377);function ei(e){return"countdown"===e.phase?e.msLeft+2e4+7e3:"guessing"===e.phase?e.msLeft+7e3:e.msLeft}var en=e.i(925256);let el=(e,a)=>e.round===a.round&&e.phase===a.phase&&(0,en.sameStep)(e.msLeft,a.msLeft);var ec=e.i(927191),ed=e.i(929880),ep=e.i(964535),eb=e.i(395181),em=e.i(787870);function eu(e,a){return Math.max(0,(0,ep.scoreForMs)(e)-a*g.WRONG_GUESS_COST)}function ef(e,a){return eu(Math.max(e.unlockedMs,a),e.wrong)}e.s(["previewScore",0,ef,"scoreSong",0,eu,"shareRun",0,function(e){return(0,em.shareText)({name:a.SONGLESS_NAME,emoji:"🎧",glyph:em.CLIP_GLYPH,path:"/songless",score:e.score,maxScore:g.MAX_RUN_SCORE,rank:(0,eb.rankFor)(e.score,g.MAX_RUN_SCORE,g.MUSIC_RANKS).title,results:e.results.map(e=>e.solved?(0,ep.formatMs)(e.unlockedMs):null)})}],58135);var eg=e.i(413315);function eh(e){let a=e.b??e.k;return(0,eg.isCount)(e.s)&&(0,eg.isCount)(e.q)&&(0,eg.isCount)(e.k)&&(0,eg.isCount)(a)&&(0,eg.isOptionalTime)(e.x)&&!(e.s>e.q*z)&&!(e.k>a)&&!(a>e.q)?{s:e.s,q:e.q,k:e.k,b:a,x:e.x}:null}let ex=e=>({score:e.s,played:e.q,streak:e.k,best:e.b,since:e.x}),e$={encode:e=>({s:e.score,q:e.played,k:e.streak,b:e.best,x:e.since}),read:function(e){if(!e||"object"!=typeof e||!(0,eg.isId)(e.i))return null;let a=eh(e);return a?{i:e.i,standing:ex(a)}:null}},ey=new Map;var ev=e.i(135612),ek=e.i(289988),ez=e.i(8314);let ew=new WeakMap;function ej(e,a,r,t){var s;let o=function(e){let a=ew.get(e);if(a)return a;let r=e.map((e,a)=>a);r.sort((a,r)=>e[r].streams-e[a].streams||(e[a].id<e[r].id?-1:+(e[a].id>e[r].id)));let t=Int32Array.from(r);return ew.set(e,t),t}(e),i=(s=(0,h.fnv1a)(`${a}:${r}:${t}`),s^=s>>>16,s=Math.imul(s,0x85ebca6b),s^=s>>>13,s=Math.imul(s,0xc2b2ae35),((s^=s>>>16)>>>0)/0x100000000),n=Math.min(o.length-1,Math.floor(o.length*(i*i)));return o[n]}function eN(e,a,r){let t=e.length;if(0===t)return null;if(t<=12)return e[ej(e,a,r,0)];let s=new Set;for(let t=1;t<=12;t++)s.add(ej(e,a,r-t,0));for(let t=0;t<8;t++){let o=ej(e,a,r,t);if(!s.has(o))return e[o]}return e[ej(e,a,r,0)]}var eM=e.i(88653),eS=e.i(846932),eC=e.i(712151),eX=e.i(338371),eW=e.i(448388),eR=e.i(907938),eY=e.i(431343),eH=e.i(107233),eO=e.i(347548),eA=e.i(752044),eE=e.i(11425),eF=e.i(792211);function eP({peaks:e,seed:a,unlocked:r,scrub:t,playhead:s,onScrub:i,disabled:l}){let c=(0,n.useRef)(null),d=(0,n.useRef)(null),p=(0,n.useRef)(null),b=(0,n.useRef)(null),m=(0,n.useRef)({peaks:e,unlocked:r,scrub:t,playhead:s,seed:a});(0,n.useLayoutEffect)(()=>{m.current={peaks:e,unlocked:r,scrub:t,playhead:s,seed:a}},[e,r,t,s,a]);let u=(0,n.useCallback)(e=>{let a=0x811c9dc5;for(let r=0;r<e.length;r++)a^=e.charCodeAt(r),a=Math.imul(a,0x1000193);let r=new Float32Array(160);for(let e=0;e<160;e++)a^=a<<13,a^=a>>>17,a^=a<<5,a>>>=0,r[e]=.16+a%1e3/1e3*.16;return r},[]);(0,n.useEffect)(()=>{let e=c.current,a=d.current;if(!e||!a)return;let r=e.getContext("2d");if(!r)return;let t=0,s=1,o=u(m.current.seed),i=m.current.seed,n=getComputedStyle(a),l=(e,a)=>n.getPropertyValue(e).trim()||a,f=l("--game-accent","#1ed760"),g=l("--game-pending","#ffffff"),h=l("--game-bar-locked","#24242c"),x=()=>{s=Math.min(2,window.devicePixelRatio||1);let t=a.getBoundingClientRect(),o=Math.max(1,Math.floor(t.width*s)),i=Math.max(1,Math.floor(t.height*s));return e.style.width=`${t.width}px`,e.style.height=`${t.height}px`,r.setTransform(s,0,0,s,0,0),(e.width!==o||e.height!==i)&&(e.width=o,e.height=i,r.setTransform(s,0,0,s,0,0),!0)};x();let $=window.matchMedia("(prefers-reduced-motion: reduce)").matches,y={unlocked:m.current.unlocked,scrub:m.current.scrub},v=new Float32Array(160),k=!1,z=null,w=performance.now(),j=e=>{let a=m.current,r=e/159,t=Math.max(y.unlocked,y.scrub),s=a.peaks?.[Math.floor(r*(a.peaks.length-1))]??0;return a.peaks&&r<=t?Math.max(s,.04):o[e]},N=e=>{let a=m.current,r=$?1:1-Math.exp(-e/.055),t=$?1:1-Math.exp(-e/.08),s=!1,o=(e,a,r)=>{let t=e+(a-e)*r;return 5e-4>Math.abs(a-t)&&(t=a),t!==e&&(s=!0),t};y.unlocked=o(y.unlocked,a.unlocked,r),y.scrub=o(y.scrub,a.scrub,null!==b.current?1:r);for(let e=0;e<160;e++){let a=j(e);k?v[e]=o(v[e],a,t):v[e]=a}return k=!0,p.current&&(p.current.style.left=`${100*y.scrub}%`),s},M=()=>{let a=m.current,t=e.width/s,o=e.height/s,i=o/2,n=Math.max(1,t/160-2);r.clearRect(0,0,t,o);for(let e=0;e<160;e++){let a=e/159,s=e*t/160,l=a<=y.unlocked,c=!l&&a<=y.scrub;r.fillStyle=l?f:c?g:h,r.globalAlpha=l?1:c?.85:1;let d=Math.max(2,v[e]*(o-6));r.beginPath(),r.roundRect(s,i-d/2,n,d,Math.min(n/2,1.5)),r.fill()}if(r.globalAlpha=1,null!=a.playhead){let e=a.playhead*t;r.fillStyle="#fff",r.fillRect(e-1,0,2,o),r.shadowColor=f,r.shadowBlur=12,r.fillRect(e-1,0,2,o),r.shadowBlur=0}};N(0);let S=!0,C=()=>{S=!0},X=new ResizeObserver(()=>{x()&&(S=!1,M())});X.observe(a);let W=()=>{r.setTransform(s,0,0,s,0,0),C()};e.addEventListener("contextrestored",W);let R=e=>{let a=m.current,r=Math.min(.05,Math.max(0,(e-w)/1e3));w=e,a.seed!==i&&(o=u(a.seed),i=a.seed),(N(r)||a.playhead!==z)&&C(),z=a.playhead,S&&(S=!1,M()),t=requestAnimationFrame(R)};return t=requestAnimationFrame(R),()=>{cancelAnimationFrame(t),X.disconnect(),e.removeEventListener("contextrestored",W)}},[u]);let f=(0,n.useCallback)(e=>{let a=d.current;if(!a)return 0;let r=a.getBoundingClientRect();return r.width<=0?0:Math.max(0,Math.min(1,(e-r.left)/r.width))},[]),g=e=>{b.current===e.pointerId&&(b.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId))};return(0,o.jsxs)("div",{ref:d,onPointerDown:e=>{l||0!==e.button||null!==b.current||(e.currentTarget.setPointerCapture(e.pointerId),b.current=e.pointerId,i(f(e.clientX)))},onPointerMove:e=>{b.current!==e.pointerId||l||i(f(e.clientX))},onPointerUp:g,onPointerCancel:g,onLostPointerCapture:g,className:"game-board relative w-full cursor-ew-resize touch-none select-none",children:[(0,o.jsx)("canvas",{ref:c,className:"block h-full w-full"}),(0,o.jsx)("div",{ref:p,className:"sl-wave-handle","data-pending":t>r,"aria-hidden":!0})]})}function eL({trackId:e,peaks:a,unlockedMs:r,scrubMs:t,onScrub:s,onPlay:i,onStop:n,onExtend:l,onSkip:c,snippet:d,disabled:p,previewPoints:b}){let m=t>r,u=(0,eF.useSweep)(d,d?.fromMs??0,d?.toMs??0,ep.MAX_MS),f=null!=d,g=f&&d.fromMs>0,h=r>=ep.MAX_MS;return(0,o.jsxs)("div",{className:"sl-scrubber game-stack",children:[(0,o.jsxs)("div",{className:"game-worth",children:[(0,o.jsx)("span",{className:"game-label",children:m?"worth if you play this":"worth now"}),(0,o.jsx)(eE.CountUp,{value:b,className:`game-display ${m?"game-text-pending":""}`})]}),(0,o.jsxs)("div",{className:"w-full",children:[(0,o.jsx)(eP,{peaks:a,seed:e,unlocked:r/ep.MAX_MS,scrub:t/ep.MAX_MS,playhead:u,onScrub:e=>s(e_(e*ep.MAX_MS)),disabled:p}),(0,o.jsxs)("div",{className:"game-board-foot flex items-center justify-between",children:[(0,o.jsx)("span",{className:"game-mono game-text-faint",children:(0,ep.formatMs)(ep.MIN_MS)}),(0,o.jsx)("span",{className:`game-readout ${m?"game-text-pending":""}`,children:(0,ep.formatMs)(t)}),(0,o.jsx)("span",{className:"game-mono game-text-faint",children:(0,ep.formatMs)(ep.MAX_MS)})]}),(0,o.jsx)("div",{className:"sl-presets flex items-center justify-center gap-2",children:ep.SCRUB_PRESETS.map(e=>{let a=1>Math.abs(t-e);return(0,o.jsxs)("button",{type:"button",className:"sl-preset","data-on":a,"data-paid":e<=r&&!a,onClick:()=>s(e),disabled:p,"aria-pressed":a,children:[a&&(0,o.jsx)(eS.motion.span,{layoutId:"sl-preset-pill",className:"sl-preset-pill",transition:eq,"aria-hidden":!0}),(0,o.jsx)("span",{className:"sl-preset-n",children:(0,ep.formatMs)(e)})]},e)})})]}),(0,o.jsxs)("div",{className:"flex w-full items-center gap-2",children:[(0,o.jsxs)("button",{type:"button",className:"game-btn game-btn-primary game-btn-play game-btn-tall flex-1",onClick:()=>f?n():i(),disabled:p,children:[f?(0,o.jsx)(eA.Square,{size:12,fill:"currentColor",strokeWidth:0}):(0,o.jsx)(eY.Play,{size:14,fill:"currentColor",strokeWidth:0}),f?"Stop":`Play ${(0,ep.formatMs)(t)}`]}),(0,o.jsxs)("button",{type:"button",className:"game-btn game-btn-extend game-btn-tall","data-on":g,onClick:l,disabled:p||h,"aria-label":`Hear ${eI} more, continuing from where the last clip stopped`,children:[(0,o.jsx)(eH.Plus,{size:14,strokeWidth:2.5}),eI]}),(0,o.jsx)("button",{type:"button",className:"game-btn game-btn-ghost game-btn-tall",onClick:c,disabled:p,"aria-label":"Skip this song",children:(0,o.jsx)(eO.SkipForward,{size:16})})]}),(0,o.jsx)("div",{className:"sr-only",children:(0,o.jsxs)("label",{children:["Audio length",(0,o.jsx)("input",{type:"range",min:0,max:1e3,value:Math.round(1e3*(0,ep.position)(t)),onChange:e=>s(e_((0,ep.msAt)(Number(e.target.value)/1e3))),disabled:p})]})})]})}e.s(["Waveform",0,eP],378598);let e_=e=>Math.round(Math.min(ep.MAX_MS,Math.max(ep.MIN_MS,e))),eI=`${ep.EXTEND_MS%1e3==0?ep.EXTEND_MS/1e3:(ep.EXTEND_MS/1e3).toFixed(1)}s`,eq={type:"spring",stiffness:560,damping:40,mass:.7};e.s(["Scrubber",0,eL],513095);var eT=e.i(772328),eU=e.i(129431);function eB(e){let a=(0,n.useRef)(new Set);return(0,n.useCallback)((r,t,{rise:s=0,delayMs:o=0}={})=>{!t||a.current.has(r)||(a.current.add(r),e||t.animate([{opacity:0,translate:`0 ${s}px`},{opacity:1,translate:"0 0"}],{duration:220,delay:o,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"backwards"}))},[e])}let eG={duration:.22,ease:[.16,1,.3,1]};function eD({track:e,outcome:a,warmup:r,points:t,bonus:s,unlockedMs:i,playing:n,onPlay:l,onStop:c,results:d,absent:p,live:b,meId:m}){let u=[...d.values()].concat(b?[]:p.map(e=>({id:e.id,name:e.name,correct:!1,gaveUp:!1,ms:0,points:0}))).sort(eK),f=eB((0,eT.useReducedMotion)());return(0,o.jsxs)(eU.RoundPanelFrame,{className:"arena-reveal w-full",children:["won"===a?(0,o.jsx)(eU.WinReveal,{art:(0,o.jsx)(eW.TrackArt,{track:e,size:136,className:"game-stamp-art"}),title:e.title,sub:(0,eW.trackCredit)(e),meta:(0,eW.trackMeta)(e),points:t,minPoints:ep.MIN_SONG_SCORE,maxPoints:g.MAX_SONG_SCORE+2500,caption:[r?"warm-up":"",`named at ${(0,ep.formatMs)(i)}`].filter(Boolean).join(", "),bonus:{points:s,label:"time bonus"}}):(0,o.jsx)(eU.MissReveal,{art:(0,o.jsx)(eW.TrackArt,{track:e,size:56,className:"shrink-0 rounded-lg"}),title:e.title,sub:e.artist,meta:(0,eW.trackMeta)(e),aside:e.year?String(e.year):void 0}),(0,o.jsx)(eU.ReplayButton,{playing:n,onPlay:l,onStop:c}),(0,o.jsx)("div",{className:"arena-scores game-scroll",children:0===u.length?(0,o.jsx)("p",{className:"game-empty",children:b?"Nobody else has answered yet.":"Nobody else played this round."}):u.map((e,a)=>(0,o.jsxs)(eS.motion.div,{className:"arena-score","data-me":e.id===m,"data-solved":e.correct,layout:"position",transition:eG,ref:r=>f(e.id,r,{rise:6,delayMs:Math.min(30*a,300)}),children:[(0,o.jsx)("span",{className:"arena-rank",children:a+1}),(0,o.jsx)("span",{className:"arena-score-name",children:e.name}),(0,o.jsx)("span",{className:"arena-score-at",children:e.correct?(0,ep.formatMs)(e.ms):e.gaveUp?"skipped":"missed"}),(0,o.jsx)("span",{className:"arena-score-pts",children:e.correct?`+${e.points.toLocaleString()}`:"0"})]},e.id))})]})}function eK(e,a){return e.points!==a.points?a.points-e.points:e.correct!==a.correct?e.correct?-1:1:e.correct&&e.ms!==a.ms?e.ms-a.ms:e.name.localeCompare(a.name)}function eV({n:e}){return(0,o.jsx)("div",{className:"arena-count",role:"status","aria-label":`Next round starting in ${e} seconds`,children:(0,o.jsx)("span",{className:"arena-count-n","aria-hidden":!0,children:e},e)})}function eJ({brand:e,round:a,tick:r,armed:t,warmup:s,roomName:i,pool:n,players:c,results:d,meId:p}){let b=(0,eW.useTrackSearch)(n),m=a.state,u="countdown"!==r.phase?null:Math.max(1,Math.ceil(r.msLeft/1e3)),f="guessing"===r.phase,g=f?k(r.msIn):0,h=null!=m&&"playing"!==m.outcome,x=null!=m&&m.round===r.round&&("reveal"===r.phase||"won"===m.outcome),$=r.startedAt+3e3,y=c.filter(e=>!d.has(e.id)&&(e.played>0||e.joinedAt<=$));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.RunColumn,{hud:(0,o.jsx)(eQ,{tick:r,armed:t,warmup:s,room:i,endedAt:null!=m&&m.round===r.round?m.settledAt:0,revealed:x}),children:(0,o.jsx)(eM.AnimatePresence,{mode:"wait",children:t?a.error?(0,o.jsx)(eS.motion.div,{className:"game-stack items-center text-center",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,o.jsx)("p",{className:"game-intro-rule",children:a.error})},"error"):m?f&&!h?(0,o.jsxs)(eS.motion.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0,transition:{duration:.32,ease:[.16,1,.3,1]}},exit:{opacity:0,transition:{duration:.1}},className:"game-stack",children:[(0,o.jsx)(eL,{trackId:m.track.id,peaks:a.peaks,unlockedMs:m.unlockedMs,scrubMs:m.scrubMs,onScrub:a.setScrub,onPlay:a.playScrub,onStop:a.stopAudio,onExtend:()=>void a.extend(ep.EXTEND_MS),onSkip:a.giveUp,snippet:a.snippet,disabled:a.loading,previewPoints:ef(m,m.scrubMs)+g}),(0,o.jsx)(eX.SearchBox,{game:e.game,search:b,onGuess:a.guess,placeholder:"Search songs…",ariaLabel:"Search songs",disabled:a.loading,wrongCount:m.wrong}),(0,o.jsx)(eC.WrongGuesses,{guesses:m.guesses.filter(e=>!e.correct).map(e=>({key:e.trackId,label:e.title}))}),a.notice&&(0,o.jsx)("p",{className:"game-mono game-text-bad",children:a.notice})]},"playing"):x?(0,o.jsx)(eD,{track:m.track,outcome:m.outcome,warmup:s,points:m.scored,bonus:m.bonus,unlockedMs:m.unlockedMs,playing:a.revealPlaying,onPlay:a.playReveal,onStop:a.stopAudio,results:d,absent:y,live:f,meId:p},"reveal"):f?(0,o.jsx)(e2,{waiting:y.length},"locked"):null:(0,o.jsx)(e1,{},"loading"):(0,o.jsx)(e0,{tick:r},"held")})}),null!==u&&(0,o.jsx)(eV,{n:u})]})}function eQ({tick:e,armed:a,warmup:r,room:t,endedAt:s,revealed:i}){let n="guessing"===e.phase,l="reveal"===e.phase,c=n||l,d=c&&s>0,p=d?ei(e):c?e.msLeft:0,b=d?Math.max(1,e.startedAt+3e4-s):n?2e4:7e3,m=n&&!d&&p<=5e3,u=i?"Results":r&&n?"Warm-up":n?t:a?"Next round":"Round in progress";return(0,o.jsxs)("div",{className:"game-hud",children:[(0,o.jsxs)("div",{className:"arena-hud",children:[(0,o.jsx)("span",{className:"arena-hud-label",children:u}),(0,o.jsx)("span",{className:"game-clock","data-low":n&&!d&&p<=1e4?"":void 0,"data-critical":m?"":void 0,role:"timer","aria-label":n&&!d?"Time left this round":c?"Time left on the results":"Round status",children:c?(0,eR.formatClock)(p):a?"Starting":"Up next"})]}),(0,o.jsx)("div",{className:"arena-drain","data-critical":m,"data-reveal":d,"aria-hidden":!0,children:c?(0,o.jsx)(eZ,{left:p,span:b},`${e.round}-${e.phase}-${d}`):(0,o.jsx)("i",{style:{transform:"scaleX(0)"}})})]})}function eZ({left:e,span:a}){let[r]=(0,n.useState)(()=>Math.max(0,a-e));return(0,o.jsx)("i",{className:"arena-drain-run",style:{animationDuration:`${a}ms`,animationDelay:`${-r}ms`}})}function e0({tick:e}){return(0,o.jsxs)(eS.motion.div,{className:"arena-wait",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[(0,o.jsx)("p",{className:"game-label",children:"Next round in"}),(0,o.jsx)("p",{className:"arena-wait-n",children:(0,eR.formatClock)(ei(e))})]})}function e1(){return(0,o.jsx)(eS.motion.div,{className:"game-stack items-center",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},role:"status","aria-label":"Loading",children:(0,o.jsx)(i.Loader2,{className:"animate-spin",size:20,"aria-hidden":!0})})}function e2({waiting:e}){return(0,o.jsxs)(eS.motion.div,{className:"game-stack items-center text-center",initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0},transition:{duration:.24,ease:[.16,1,.3,1]},children:[(0,o.jsxs)("div",{className:"game-worth",children:[(0,o.jsx)("span",{className:"game-label",children:"missed"}),(0,o.jsx)("span",{className:"game-display game-text-faint",children:"0"})]}),e>0&&(0,o.jsxs)("p",{className:"game-note",children:["Waiting on ",e," ",1===e?"player":"players"]})]})}var e5=e.i(37727),e3=e.i(280615);function e8({open:e,label:a,onClose:r,children:t}){let{box:s,onKeyDown:i}=(0,e3.useRoomSheet)(r);return(0,o.jsxs)("div",{className:"arena-sheet","data-shut":e?void 0:"",children:[(0,o.jsx)("button",{type:"button",className:"arena-scrim",onClick:r,tabIndex:-1,"aria-hidden":!0}),(0,o.jsxs)("div",{ref:s,className:"arena-sheet-box",role:"dialog","aria-modal":"true","aria-label":a,tabIndex:-1,onKeyDown:i,children:[(0,o.jsx)("button",{type:"button",className:"arena-shut",onClick:r,"aria-label":`Close ${a.toLowerCase()}`,children:(0,o.jsx)(e5.X,{size:15,"aria-hidden":!0})}),(0,o.jsx)("aside",{className:"arena-side",children:t})]})]})}var e4=e.i(975558);let e6=(0,ea.default)("panel-left-close",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]),e7=(0,ea.default)("smile-plus",[["path",{d:"M22 11v1a10 10 0 1 1-9-10",key:"ew0xw9"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}],["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}]]);var e9=e.i(131325),ae=e.i(116283);function aa({lines:e,reactions:a,meId:r,onSend:t,onReact:s,onFold:i}){let{draft:l,setDraft:c,send:d,log:p,field:b,onScroll:m}=(0,ae.useChatLog)(e,t),[u,f]=(0,n.useState)(null);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"arena-head",children:[(0,o.jsx)("div",{className:"arena-room",children:(0,o.jsx)("span",{className:"arena-room-name",children:"Chat"})}),i&&(0,o.jsx)("button",{type:"button",className:"arena-fold",onClick:i,"aria-label":"Hide chat",children:(0,o.jsx)(e6,{size:13,"aria-hidden":!0})})]}),(0,o.jsxs)("div",{className:"arena-chat",children:[(0,o.jsx)("div",{ref:p,className:"arena-log game-scroll",onScroll:m,role:"log","aria-label":"Room chat","aria-live":"polite",children:0===e.length?(0,o.jsx)("p",{className:"game-empty",children:"Say something."}):e.map(e=>"system"===e.kind?(0,o.jsx)("p",{className:"arena-sys",children:e.body},e.id):(0,o.jsx)(ar,{line:e,chips:(0,e9.chipsFor)(a.get(e.id),r),picking:u===e.id,onPick:()=>f(u===e.id?null:e.id),onReact:a=>{s(e.id,a),f(null)}},e.id))}),(0,o.jsxs)("form",{className:"arena-compose",onSubmit:e=>{e.preventDefault(),d()},children:[(0,o.jsx)("input",{ref:b,className:"arena-input",value:l,onChange:e=>c(e.target.value),placeholder:"Message the room",maxLength:x.CHAT_MAX_LENGTH,"aria-label":"Message the room",autoComplete:"off",autoCapitalize:"sentences",enterKeyHint:"send"}),(0,o.jsx)("button",{type:"submit",className:"arena-send",disabled:!l.trim(),"aria-label":"Send",onPointerDown:e=>e.preventDefault(),children:(0,o.jsx)(e4.ArrowUp,{size:14,"aria-hidden":!0})})]})]})]})}function ar({line:e,chips:a,picking:r,onPick:t,onReact:s}){return(0,o.jsxs)("div",{className:"arena-line","data-mine":e.mine,"data-open":r||void 0,children:[(0,o.jsxs)("div",{className:"arena-line-body",children:[(0,o.jsxs)("p",{className:"arena-said","data-mine":e.mine,children:[(0,o.jsx)("b",{children:e.name})," ",e.body]}),(0,o.jsx)("button",{type:"button",className:"arena-addreact",onClick:t,"aria-expanded":r,"aria-label":`React to ${e.name}'s message`,children:(0,o.jsx)(e7,{size:13,"aria-hidden":!0})})]}),r&&(0,o.jsx)("div",{className:"arena-picker",role:"group","aria-label":"Pick a reaction",children:x.REACTIONS.map((e,a)=>(0,o.jsx)("button",{type:"button",className:"arena-pick",onClick:()=>s(a),"aria-label":`React ${e}`,children:(0,o.jsx)("span",{"aria-hidden":!0,children:e})},e))}),a.length>0&&(0,o.jsx)("div",{className:"arena-chips",children:a.map(e=>(0,o.jsxs)("button",{type:"button",className:"arena-chip","data-mine":e.mine,onClick:()=>s(e.index),"aria-label":`${x.REACTIONS[e.index]} ${e.count}, ${e.mine?"remove yours":"add yours"}`,"aria-pressed":e.mine,children:[(0,o.jsx)("span",{"aria-hidden":!0,children:x.REACTIONS[e.index]}),(0,o.jsx)("i",{children:e.count})]},e.index))})]})}var at=e.i(662031),as=e.i(249602),ao=e.i(857953);function ai({brand:e,room:a,session:r,onStay:t,onLeave:s}){let{copied:i,share:n}=(0,as.useShare)();return(0,o.jsx)("div",{className:"arena-bye",role:"dialog","aria-label":`Leaving ${a}`,children:(0,o.jsxs)("div",{className:"arena-bye-inner",children:[(0,o.jsx)("p",{className:"arena-bye-ask",children:"Are you sure you want to leave?"}),(0,o.jsxs)("div",{className:"arena-bye-tally",children:[(0,o.jsxs)("p",{className:"arena-bye-figure",children:[r.solved,(0,o.jsxs)("span",{className:"arena-bye-of",children:["/",r.played]}),(0,o.jsx)("span",{className:"arena-bye-unit",children:"named"})]}),(0,o.jsxs)("dl",{className:"arena-bye-stats",children:[(0,o.jsx)(an,{label:"Points",value:r.score.toLocaleString(),badge:r.newBest?"New best":void 0}),(0,o.jsx)(an,{label:"Best streak",value:`${r.streak}`})]})]}),(0,o.jsxs)("div",{className:"arena-bye-acts",children:[(0,o.jsxs)("button",{type:"button",className:"game-btn arena-bye-leave",onClick:s,children:[(0,o.jsx)(ee.LogOut,{size:14,"aria-hidden":!0}),"Leave the room"]}),(0,o.jsx)("button",{type:"button",className:"game-btn game-btn-primary",onClick:t,children:"Keep playing"})]}),(0,o.jsxs)("button",{type:"button",className:"game-back-btn share-glint",onClick:()=>{n((0,ao.roomShareText)({game:e.name,emoji:e.emoji,headline:`${r.score.toLocaleString()} points`,figures:[`${r.solved} of ${r.played} named`,`Best streak ${r.streak}`],cta:"Beat my score",path:e.path}))},children:[(0,o.jsx)(at.Share2,{size:12,"aria-hidden":!0}),(0,o.jsx)("span",{children:i?"Copied!":"Share"})]})]})})}function an({label:e,value:a,badge:r}){return(0,o.jsxs)("div",{className:"arena-bye-stat",children:[(0,o.jsx)("dt",{children:e}),(0,o.jsxs)("dd",{children:[a,r&&(0,o.jsx)("span",{className:"arena-bye-new",children:r})]})]})}var al=e.i(664659),ac=e.i(270756);let ad=(0,ea.default)("user-plus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);var ap=e.i(531779);function ab({brand:e,room:a,roomId:r,code:t,detail:s,headcount:i,connected:n,onLeave:l}){let{copied:c,share:d}=(0,as.useShare)();return(0,o.jsxs)("div",{className:"arena-head","data-acts":"",children:[(0,o.jsxs)("div",{className:"arena-room",children:[(0,o.jsx)("span",{className:"arena-room-name",children:a}),!n||i>=50?(0,o.jsx)("span",{className:"arena-room-meta","data-down":!n,children:n?"Room full":"Reconnecting"}):s&&(0,o.jsx)("span",{className:"arena-room-meta",children:s}),t&&(0,o.jsx)(am,{code:t})]}),(0,o.jsxs)("div",{className:"arena-head-acts",children:[(0,o.jsxs)("button",{type:"button",className:"arena-invite share-glint","data-done":c||void 0,onClick:()=>void d((0,p.inviteUrl)(e.path,{id:r,code:t})),"aria-label":`Invite somebody to ${a}`,children:[(0,o.jsx)(ad,{size:12,"aria-hidden":!0}),c?"Copied!":"Invite"]}),(0,o.jsxs)("button",{type:"button",className:"arena-leave",onClick:l,"aria-label":"Leave room",children:[(0,o.jsx)(ee.LogOut,{size:12,"aria-hidden":!0}),"Leave"]})]})]})}function am({code:e}){let{isCopied:a,copyToClipboard:r}=(0,ap.useCopyToClipboard)({timeout:1800}),t=(0,b.formatRoomCode)(e);return(0,o.jsxs)("div",{className:"arena-private",children:[(0,o.jsxs)("span",{className:"arena-private-tag",children:[(0,o.jsx)(ac.Lock,{size:11,"aria-hidden":!0}),"Private room"]}),(0,o.jsxs)("button",{type:"button",className:"arena-room-code","data-done":a||void 0,onClick:()=>void r(e),"aria-label":a?`Room code ${t} copied`:`Room code ${t}. Copy the code`,children:["Code ",(0,o.jsx)("span",{className:"arena-room-code-n",children:a?"Copied":t})]})]})}let au={type:"spring",stiffness:420,damping:36,mass:.8},af={duration:.24,ease:[.16,1,.3,1]};function ag({brand:e,room:a,roomId:r,code:t,detail:s,players:i,connected:l,results:c,phase:d,onLeave:p}){let[b,m]=(0,n.useState)(null),u=(0,eT.useReducedMotion)(),f=eB(u);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ab,{brand:e,room:a,roomId:r,code:t,detail:s,headcount:i.length,connected:l,onLeave:p}),(0,o.jsxs)("div",{className:"arena-panel-label",children:[(0,o.jsxs)("span",{children:["Players (",i.length,")"]}),(0,o.jsx)("span",{children:"Points"})]}),(0,o.jsx)(eS.motion.div,{className:"arena-list game-scroll",layoutScroll:!0,children:0===i.length?(0,o.jsx)("p",{className:"game-empty",children:l?"Nobody else here yet.":"Joining the room."}):i.map((e,a)=>{var r,t;let s=(r=d,t=c.get(e.id),"guessing"===r?t?t.correct?`Got it at ${(0,ep.formatMs)(t.ms)}`:"Out":"Guessing":"reveal"===r&&t?t.correct?`Got it at ${(0,ep.formatMs)(t.ms)}`:t.gaveUp?"Skipped":"Ran out of time":""),i=b===e.id;return(0,o.jsxs)(eS.motion.div,{className:"arena-row","data-me":e.me,"data-open":i,layout:!u&&"position",transition:au,ref:a=>f(e.id,a),children:[(0,o.jsxs)("button",{type:"button",className:"arena-player","data-podium":a<3&&e.played>0,"aria-expanded":i,onClick:()=>m(i?null:e.id),children:[(0,o.jsx)("span",{className:"arena-rank",children:a+1}),(0,o.jsxs)("span",{className:"arena-who",children:[(0,o.jsxs)("span",{className:"arena-name",children:[e.name,e.me&&" (you)"]}),s&&(0,o.jsx)("span",{className:"arena-sub",children:s})]}),(0,o.jsx)("span",{className:"arena-points","data-quiet":0===e.played,children:e.known?0===e.played?"--":(0,o.jsx)(eE.CountUp,{value:e.score,duration:.5}):(0,o.jsx)("span",{className:"game-skel arena-points-skel","aria-hidden":!0})}),(0,o.jsx)(al.ChevronDown,{size:13,className:"arena-caret","aria-hidden":!0})]}),(0,o.jsx)(eM.AnimatePresence,{initial:!1,children:i&&(0,o.jsx)(eS.motion.div,{className:"overflow-hidden",initial:{height:0},animate:{height:"auto"},exit:{height:0},transition:u?{duration:0}:af,children:(0,o.jsx)(ah,{player:e})},"record")})]},e.id)})})]})}function ah({player:e}){return(0,o.jsxs)("dl",{className:"arena-stats",children:[(0,o.jsx)(ax,{label:"Rounds",value:0===e.played?"--":e.played.toLocaleString()}),(0,o.jsx)(ax,{label:"Points",value:e.score.toLocaleString()}),(0,o.jsx)(ax,{label:"Streak",value:`${e.streak}`}),(0,o.jsx)(ax,{label:"Best streak",value:`${Math.max(e.best,e.streak)}`})]})}function ax({label:e,value:a}){return(0,o.jsxs)("div",{className:"arena-stat",children:[(0,o.jsx)("dt",{children:e}),(0,o.jsx)("dd",{children:a})]})}function a$({brand:e,room:a,name:r,pool:t,artists:s,best:i,onScore:c,onLeave:p,onFull:m}){var u;let f,g=(0,n.useMemo)(()=>(0,d.clientId)(),[]),h=(0,n.useMemo)(()=>{let e;return e=a.id,P((0,b.splitPrivateRoom)(e)?.base??e)??X},[a.id]),$=(0,n.useMemo)(()=>(function(e,a,r=[]){if(!a)return e;let t=D(e,a,O(a,r));return t.length>=100?t:e})(t,h,s),[t,h,s]),y=(u=(0,n.useMemo)(()=>v(a.id),[a.id]),f=(0,n.useCallback)(e=>(function(e,a=0){let r=function(e,a=0){return Math.floor((e-x.ROOM_EPOCH-a)/3e4)}(e,a),t=function(e,a=0){return x.ROOM_EPOCH+a+3e4*e}(r,a),s=e-t;if(s<3e3)return{round:r,phase:"countdown",msIn:s,msLeft:3e3-s,startedAt:t};let o=s-3e3;return o<2e4?{round:r,phase:"guessing",msIn:o,msLeft:2e4-o,startedAt:t}:{round:r,phase:"reveal",msIn:o-2e4,msLeft:3e4-s,startedAt:t}})(e,u),[u]),(0,en.useWallClock)(f,el)),[j]=(0,n.useState)(()=>({round:y.round,mode:"countdown"===y.phase?"in":"reveal"===y.phase?"wait":y.msLeft>=1e4?"in":"warmup"})),N=y.round>j.round?"in":j.mode,S="wait"!==N,C="in"===N,W=(0,n.useRef)({score:0,streak:0,best:0,played:0}),R=(0,n.useRef)(0),[Y]=(0,n.useState)(i),{players:H,connected:A,synced:E,chat:F,sendChat:L,reactions:_,react:I,results:q,announce:T}=function({roomId:e,me:a,round:r,onFull:t}){let[s,o]=(0,n.useState)(()=>({round:-1,map:ey})),i=s.round===r?s.map:ey,l=(0,n.useRef)(s),c=(0,n.useCallback)((e,a,r=!1)=>{let t=l.current,s=t.round===a?t.map:ey;if(!r&&s.has(e.id))return!1;let i={round:a,map:new Map(s).set(e.id,e)};return l.current=i,o(i),!0},[]),p=(0,n.useRef)(r);(0,n.useLayoutEffect)(()=>{p.current=r},[r]);let b=(0,n.useMemo)(()=>({a:(e,a)=>{let r=function(e){if(!e||"object"!=typeof e||!(0,eg.isId)(e.i)||!(0,eg.isCount)(e.r)||"boolean"!=typeof e.c||void 0!==e.g&&"boolean"!=typeof e.g||!(0,eg.isAmount)(e.m,ep.MAX_MS)||!(0,eg.isCount)(e.p,z))return null;let a=eh(e);return a&&(e.c||0===e.p)&&!(e.p>a.s)?{i:e.i,n:(0,eg.safeName)(e.n,M.anonymous),r:e.r,c:e.c,g:e.g??!1,m:e.m,p:e.p,...a}:null}(e);if(!r||r.r!==p.current||r.i===(0,d.clientId)())return;let t=c({id:r.i,name:r.n,correct:r.c,gaveUp:r.g,ms:r.m,points:r.p},r.r);a.file(r.i,ex(r)),t&&r.c&&a.note(`${r.n} got it in ${(0,ep.formatMs)(r.m)}.`)}}),[c]),m=(0,ed.useRoom)(M,{roomId:e,name:a.name,restate:e$,handlers:b,onFull:t}),{members:u,standings:f,note:g,send:h,sendSpread:x,stand:$}=m,y=(0,n.useRef)(null),v=(0,n.useCallback)((e,a,r)=>{if(y.current===a)return;y.current=a,c(e,a,!0);let t=$(r);e.correct&&g(`You got it in ${(0,ep.formatMs)(e.ms)}.`);let s={i:e.id,n:e.name,r:a,c:e.correct,g:e.gaveUp,m:e.ms,p:e.points,s:t.score,q:t.played,k:t.streak,b:t.best,x:t.since};e.correct||e.gaveUp?h("a",s):x("a",s,a)},[c,g,h,x,$]);return{players:(0,n.useMemo)(()=>{let e=(0,d.clientId)();return u.map(a=>{let r=f.get(a.id);return{...a,score:r?.score??0,known:void 0!==r||a.id===e,streak:r?.streak??0,best:r?.best??0,played:r?.played??0,me:a.id===e}}).sort(ec.byStanding)},[u,f]),connected:m.connected,synced:m.synced,chat:m.chat,sendChat:m.sendChat,reactions:m.reactions,react:m.react,results:i,announce:v}}({roomId:a.id,me:{name:r},round:y.round,onFull:m});(0,eo.useSeat)(M,a.id,A);let U=(0,n.useCallback)(e=>{let a=e.correct?W.current.streak+1:0,t={score:W.current.score+e.points,streak:a,best:Math.max(W.current.best,a),played:W.current.played+1};W.current=t,e.correct&&R.current++,c(t.score),T({id:g,name:r,correct:e.correct,gaveUp:e.gaveUp,ms:e.ms,points:e.points},e.round,t)},[T,g,r,c]),B=function({pool:e,roomId:a,round:r,phase:t,guessFrom:s,armed:o,scored:i,onSettled:l}){let c=(0,n.useRef)(null);null===c.current&&(c.current=new ek.AudioEngine);let[d,p]=(0,n.useState)(null),[b,m]=(0,n.useState)(null),[u,f]=(0,n.useState)(!1),[g,h]=(0,n.useState)(null),[x,$]=(0,n.useState)(null),[y,v]=(0,n.useState)(!1),[z,w]=(0,n.useState)(null),j=(0,n.useRef)(null),N=(0,n.useRef)(0),M=(0,n.useRef)(null),S=(0,n.useCallback)(e=>{M.current=e,p(e)},[]),C=(0,n.useRef)(0);(0,n.useEffect)(()=>()=>{C.current++,N.current++,c.current?.dispose()},[]);let X=(0,n.useRef)(-1),W=(0,n.useRef)(l),R=(0,n.useRef)(i),Y=(0,n.useRef)(s);(0,n.useLayoutEffect)(()=>{W.current=l,R.current=i,Y.current=s},[s,l,i]);let H=(0,n.useCallback)(()=>{N.current++,c.current?.stop(),v(!1),$(null)},[]);(0,n.useEffect)(()=>{let t=++C.current,s=o?eN(e,a,r):null;if(!s){H(),j.current=null,S(null),m(null),h(null),f(!1);return}let i=c.current;i&&(H(),j.current=null,m(null),w(null),h(null),f(!0),S({round:r,track:s,unlockedMs:ep.MIN_MS,scrubMs:ep.MIN_MS,heardMs:0,wrong:0,guesses:[],outcome:"playing",scored:0,bonus:0,settledAt:0}),(async()=>{try{let e=await (0,ez.previewUrlFor)(s);if(t!==C.current)return;if(!e)throw Error("no preview");let a=await i.load(e);if(t!==C.current)return;j.current=a,m(i.peaks(a,220))}catch{if(t!==C.current)return;h("This round's clip could not be loaded.")}finally{t===C.current&&f(!1)}})())},[o,S,e,a,r,H]),(0,n.useEffect)(()=>{if("reveal"!==t)return;let s=eN(e,a,r+1);if(!s)return;let o=!0;return(0,ez.previewUrlFor)(s).then(e=>{o&&e&&c.current?.prefetch(e)}),()=>{o=!1}},[t,e,a,r]);let O=(0,n.useCallback)((e,a,r=!1)=>{if("playing"!==e.outcome||X.current===e.round)return;X.current=e.round,H(),w(null);let t=(0,ev.serverNow)(),s=a?k(t-Y.current):0,o=a?eu(e.unlockedMs,e.wrong)+s:0;S({...e,outcome:a?"won":"missed",scored:o,bonus:s,settledAt:t}),R.current&&W.current({round:e.round,correct:a,gaveUp:r,ms:e.unlockedMs,points:o,bonus:s})},[S,H]);(0,n.useEffect)(()=>{if("reveal"!==t)return;let e=M.current;e&&"playing"===e.outcome&&e.round===r&&!g&&O(e,!1)},[g,t,r,O]);let A=(0,n.useCallback)(()=>{let e=M.current;if(!e||"playing"!==e.outcome||!j.current)return null;let a=(0,ev.serverNow)()-Y.current;return a<0||a>=2e4?null:e},[]),E=(0,n.useCallback)(e=>{let a=M.current;a?.outcome==="playing"&&S({...a,scrubMs:e})},[S]),F=(0,n.useCallback)(async e=>{let a=c.current,r=j.current;a&&r&&($(e),await a.play([r],{offsetSec:e.fromMs/1e3,durationMs:e.toMs-e.fromMs}),$(a=>a===e?null:a))},[]),P=(0,n.useCallback)(async()=>{let e=A();if(!e)return;await c.current?.unlock();let a=A();if(!a||a.round!==e.round)return;let r=a.scrubMs;S({...a,unlockedMs:Math.max(a.unlockedMs,r),heardMs:Math.max(a.heardMs,r)}),await F({fromMs:0,toMs:r})},[S,A,F]),L=(0,n.useCallback)(async e=>{let a=A();if(!a)return;await c.current?.unlock();let r=A();if(!r||r.round!==a.round)return;let t=(0,ep.extendWindow)(r.unlockedMs,r.heardMs,e);t&&(S({...r,unlockedMs:Math.max(r.unlockedMs,t.toMs),scrubMs:t.toMs,heardMs:Math.max(r.heardMs,t.toMs)}),await F(t))},[S,A,F]),_=(0,n.useCallback)(e=>{let a=A();if(!a)return;if(a.guesses.some(a=>a.trackId===e.id))return void w("You already tried that song.");let r=e.id===a.track.id,t={...a,guesses:[...a.guesses,{trackId:e.id,title:e.title,artist:e.artist,correct:r,atMs:a.unlockedMs}]};r?O(t,!0):(w(null),S({...t,wrong:t.wrong+1}))},[S,A,O]),I=(0,n.useCallback)(()=>{let e=A();e&&O(e,!1,!0)},[A,O]),q=(0,n.useCallback)(async()=>{let e=c.current,a=j.current;if(!e||!a)return;let r=++N.current;await e.unlock(),N.current===r&&(v(!0),await e.play([a]),N.current===r&&v(!1))},[]),T=(0,n.useRef)(-1);return(0,n.useEffect)(()=>{let e=M.current;!e||e.round!==r||T.current===r||"reveal"!==t&&"won"!==e.outcome||j.current&&(T.current=r,q())},[u,t,q,r,d?.outcome,d?.round]),{state:d,peaks:b,loading:u,error:g,notice:z,snippet:x,revealPlaying:y,setScrub:E,playScrub:P,extend:L,guess:_,giveUp:I,playReveal:q,stopAudio:H}}({pool:$,roomId:a.id,round:y.round,phase:y.phase,guessFrom:y.startedAt+3e3,armed:S,scored:C,onSettled:U}),[G,K]=(0,n.useState)(null),V=(0,n.useCallback)(()=>{if(G)return void p();let e=W.current;0===e.played?p():K({played:e.played,solved:R.current,score:e.score,streak:e.best,newBest:e.score>Y})},[G,p,Y]),{open:J,shown:Q,openPanel:Z,closePanel:ea,unread:ei,chatShut:eb,foldChat:em}=(0,es.useRoomPanels)({chatLastId:F.at(-1)?.id??null,chatPanel:"chat",shutKey:w,shutMs:180}),ef={players:(0,o.jsx)(ag,{brand:e,room:a.name,roomId:a.id,code:a.code,detail:a.detail,players:H,connected:A&&E,results:q,phase:y.phase,onLeave:V}),chat:(0,o.jsx)(aa,{lines:F,reactions:_,meId:g,onSend:L,onReact:I})};return(0,o.jsxs)("div",{className:`unlimited ${e.game} arena relative isolate min-h-0 w-full flex-1 overflow-hidden rounded-xl`,children:[eb?(0,o.jsxs)("button",{type:"button",className:"arena-rail",onClick:()=>em(!1),"aria-label":ei?"Show chat, new messages":"Show chat",children:[(0,o.jsx)(er,{size:15,"aria-hidden":!0}),ei&&(0,o.jsx)("span",{className:"arena-dot","aria-hidden":!0})]}):(0,o.jsx)("aside",{className:"arena-side",children:(0,o.jsx)(aa,{lines:F,reactions:_,meId:g,onSend:L,onReact:I,onFold:()=>em(!0)})}),(0,o.jsxs)("div",{className:"arena-main",children:[(0,o.jsxs)("div",{className:"arena-bar",children:[(0,o.jsxs)("button",{type:"button",className:"arena-tab",onClick:()=>Z("players"),"aria-label":`Players and room info, ${H.length} here`,children:[(0,o.jsx)(et.Users,{size:13,"aria-hidden":!0}),"Players ",H.length]}),(0,o.jsxs)("button",{type:"button",className:"arena-tab",onClick:()=>Z("chat"),"aria-label":ei?"Chat, new messages":"Chat",children:[(0,o.jsx)(er,{size:13,"aria-hidden":!0}),"Chat",ei&&(0,o.jsx)("span",{className:"arena-dot","aria-hidden":!0})]}),(0,o.jsx)("button",{type:"button",className:"arena-tab","data-quiet":"",onClick:V,"aria-label":"Leave room",children:(0,o.jsx)(ee.LogOut,{size:14,"aria-hidden":!0})})]}),(0,o.jsxs)(l.GameCard,{game:e.game,children:[(0,o.jsx)(eJ,{brand:e,round:B,tick:y,armed:S,warmup:S&&!C,roomName:a.name,pool:$,players:H,results:q,meId:g}),G&&(0,o.jsx)(ai,{brand:e,room:a.name,session:G,onStay:()=>K(null),onLeave:p})]})]}),(0,o.jsx)("aside",{className:"arena-side",children:ef.players}),Q&&(0,o.jsx)(e8,{open:null!==J,label:"chat"===Q?"Room chat":"Players",onClose:ea,children:ef[Q]})]})}var ay=e.i(871689),av=e.i(619921),ak=e.i(643531),az=e.i(196421),aw=e.i(95674),aj=e.i(556048),aN=e.i(463059),aM=e.i(479606);let aS={sm:{borderRadius:32,borderWidth:1,width:70,height:36},md:{borderRadius:16,borderWidth:1},line:{borderRadius:16,borderWidth:1},"pulse-outside":{borderRadius:16,borderWidth:1},"pulse-inner":{borderRadius:16,borderWidth:1}},aC={sm:{dark:{strokeOpacity:.46,innerOpacity:.24,bloomOpacity:.38,innerShadow:"rgba(255, 255, 255, 0.3)",saturation:1.2},light:{strokeOpacity:.12,innerOpacity:.3,bloomOpacity:.16,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.8}},md:{dark:{strokeOpacity:.26,innerOpacity:.42,bloomOpacity:.24,innerShadow:"rgba(255, 255, 255, 0.27)",saturation:1.2},light:{strokeOpacity:.12,innerOpacity:.26,bloomOpacity:.34,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.5}},line:{dark:{strokeOpacity:1.14,innerOpacity:.7,bloomOpacity:.8,innerShadow:"rgba(255, 255, 255, 0.1)",saturation:1.2},light:{strokeOpacity:.16,innerOpacity:.32,bloomOpacity:.3,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.95}},"pulse-outside":{dark:{strokeOpacity:.94,innerOpacity:.34,bloomOpacity:.3,innerShadow:"transparent",saturation:1.2,brightness:1.9,hairlineOpacity:0},light:{strokeOpacity:1.96,innerOpacity:1.04,bloomOpacity:.42,innerShadow:"transparent",saturation:.6,brightness:1.7,hairlineOpacity:0}},"pulse-inner":{dark:{strokeOpacity:1.54,innerOpacity:.44,bloomOpacity:.66,innerShadow:"transparent",saturation:1.2,brightness:.75},light:{strokeOpacity:.32,innerOpacity:.4,bloomOpacity:.8,innerShadow:"transparent",saturation:.75,brightness:1.3}}},aX=(aC.md.dark,aC.md.light,{colorful:{border:[{color:"rgb(255, 50, 100)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(40, 140, 255)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(50, 200, 80)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(30, 185, 170)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(100, 70, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(40, 140, 255)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(255, 120, 40)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(240, 50, 180)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(180, 40, 240)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(255, 60, 80)",secondary:"rgba(40, 190, 180, 0.98)"},spikeLt:{primary:"rgb(200, 30, 60)",secondary:"rgb(20, 150, 140)"}},mono:{border:[{color:"rgb(180, 180, 180)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(140, 140, 140)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(160, 160, 160)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(130, 130, 130)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(170, 170, 170)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(150, 150, 150)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(190, 190, 190)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(145, 145, 145)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(165, 165, 165)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(200, 200, 200)",secondary:"rgb(170, 170, 170)"},spikeLt:{primary:"rgb(80, 80, 80)",secondary:"rgb(120, 120, 120)"}},ocean:{border:[{color:"rgb(100, 80, 220)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(60, 120, 255)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(80, 100, 200)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(50, 140, 220)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(120, 80, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(70, 130, 255)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(140, 100, 240)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(90, 110, 230)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(130, 70, 255)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(100, 120, 255)",secondary:"rgba(130, 100, 220, 0.98)"},spikeLt:{primary:"rgb(60, 60, 180)",secondary:"rgb(80, 100, 200)"}},sunset:{border:[{color:"rgb(255, 80, 50)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(255, 160, 40)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(255, 120, 60)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(255, 200, 50)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(255, 100, 80)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(255, 180, 60)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(255, 60, 60)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(255, 140, 50)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(255, 90, 70)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(255, 140, 80)",secondary:"rgba(255, 100, 60, 0.98)"},spikeLt:{primary:"rgb(200, 80, 40)",secondary:"rgb(220, 120, 30)"}}}),aW={colorful:{border:[{color:"rgb(50, 200, 80)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(30, 185, 170)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(255, 120, 40)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(100, 70, 255)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(240, 50, 180)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(180, 40, 240)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(40, 140, 255)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(255, 50, 100)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(50, 200, 80, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(30, 185, 170, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 120, 40, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(100, 70, 255, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(240, 50, 180, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(180, 40, 240, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(40, 140, 255, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(255, 50, 100, 0.3)",pos:"100% 27%",size:"11px 12px"}]},mono:{border:[{color:"rgb(160, 160, 160)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(140, 140, 140)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(180, 180, 180)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(150, 150, 150)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(170, 170, 170)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(155, 155, 155)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(145, 145, 145)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(165, 165, 165)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(160, 160, 160, 0.25)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(140, 140, 140, 0.22)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(180, 180, 180, 0.17)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(150, 150, 150, 0.17)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(170, 170, 170, 0.15)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(155, 155, 155, 0.20)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(145, 145, 145, 0.15)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(165, 165, 165, 0.15)",pos:"100% 27%",size:"11px 12px"}]},ocean:{border:[{color:"rgb(60, 140, 200)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(50, 120, 180)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(100, 80, 220)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(80, 100, 255)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(120, 70, 240)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(90, 80, 220)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(70, 110, 255)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(110, 90, 230)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(60, 140, 200, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(50, 120, 180, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(100, 80, 220, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(80, 100, 255, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(120, 70, 240, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(90, 80, 220, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(70, 110, 255, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(110, 90, 230, 0.3)",pos:"100% 27%",size:"11px 12px"}]},sunset:{border:[{color:"rgb(255, 180, 50)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(255, 150, 40)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(255, 80, 60)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(255, 100, 80)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(255, 60, 80)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(255, 120, 60)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(255, 200, 50)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(255, 90, 70)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(255, 180, 50, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(255, 150, 40, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 80, 60, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(255, 100, 80, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(255, 60, 80, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(255, 120, 60, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(255, 200, 50, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(255, 90, 70, 0.3)",pos:"100% 27%",size:"11px 12px"}]}},aR={colorful:{dark:[{color:"rgb(255, 50, 100)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(40, 180, 220)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(50, 200, 80)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(180, 40, 240)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 160, 30)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(100, 70, 255)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(40, 140, 255)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(240, 50, 180)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(30, 185, 170)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(255, 50, 100)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(40, 140, 255)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(50, 200, 80)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(180, 40, 240)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(30, 185, 170)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(100, 70, 255)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(40, 140, 255)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(255, 120, 40)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(240, 50, 180)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},mono:{dark:[{color:"rgb(200, 200, 200)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(170, 170, 170)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(155, 155, 155)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(185, 185, 185)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(165, 165, 165)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(180, 180, 180)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(160, 160, 160)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(175, 175, 175)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(190, 190, 190)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(100, 100, 100)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(80, 80, 80)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(90, 90, 90)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(70, 70, 70)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(85, 85, 85)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(95, 95, 95)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(75, 75, 75)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(105, 105, 105)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(65, 65, 65)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},ocean:{dark:[{color:"rgb(100, 80, 220)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(60, 120, 255)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(80, 100, 200)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(130, 70, 255)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(70, 130, 255)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(120, 80, 255)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(90, 110, 230)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(110, 90, 240)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(140, 100, 255)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(80, 60, 200)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(50, 100, 220)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(70, 90, 190)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(110, 60, 220)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(60, 110, 230)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(100, 70, 240)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(80, 100, 210)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(90, 80, 225)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(120, 90, 245)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},sunset:{dark:[{color:"rgb(255, 100, 60)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(255, 180, 50)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(255, 140, 70)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(255, 80, 80)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 200, 60)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(255, 120, 50)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(255, 160, 80)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(255, 90, 60)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(255, 70, 70)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(220, 80, 40)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(230, 150, 30)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(210, 110, 50)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(200, 60, 60)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(220, 170, 40)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(210, 100, 30)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(230, 130, 60)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(190, 70, 50)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(180, 50, 50)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]}},aY={colorful:[{color:"rgba(255, 50, 100, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(40, 180, 220, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(50, 200, 80, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(180, 40, 240, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 160, 30, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(100, 70, 255, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(40, 140, 255, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(240, 50, 180, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(30, 185, 170, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],mono:[{color:"rgba(200, 200, 200, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(170, 170, 170, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(155, 155, 155, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(185, 185, 185, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(165, 165, 165, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(180, 180, 180, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(160, 160, 160, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(175, 175, 175, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(190, 190, 190, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],ocean:[{color:"rgba(100, 80, 220, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(60, 120, 255, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(80, 100, 200, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(130, 70, 255, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(70, 130, 255, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(120, 80, 255, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(90, 110, 230, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(110, 90, 240, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(140, 100, 255, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],sunset:[{color:"rgba(255, 100, 60, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(255, 180, 50, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(255, 140, 70, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(255, 80, 80, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 200, 60, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(255, 120, 50, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(255, 160, 80, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(255, 90, 60, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(255, 70, 70, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}]},aH={colorful:{dark:{spikes:[{color1:"rgb(100, 70, 255)",color2:"rgba(100, 70, 255, 1)"},{color1:"rgba(255, 170, 40, 0.59)",color2:"rgba(255, 170, 40, 0.29)"},{color1:"rgb(50, 200, 100)",color2:"rgba(50, 200, 100, 1)"},{color1:"rgba(200, 50, 240, 0.91)",color2:"rgba(200, 50, 240, 0.45)"},{color1:"rgb(40, 140, 255)",color2:"rgba(40, 140, 255, 1)"}]},light:{spikes:[{color1:"rgb(80, 50, 200)",color2:"rgba(80, 50, 200, 0.8)"},{color1:"rgba(210, 130, 0, 0.7)",color2:"rgba(210, 130, 0, 0.46)"},{color1:"rgb(30, 160, 70)",color2:"rgba(30, 160, 70, 0.82)"},{color1:"rgb(160, 30, 190)",color2:"rgba(160, 30, 190, 0.7)"},{color1:"rgb(30, 100, 200)",color2:"rgba(30, 100, 200, 0.78)"}]}},mono:{dark:{spikes:[{color1:"rgb(200, 200, 200)",color2:"rgba(200, 200, 200, 1)"},{color1:"rgba(180, 180, 180, 0.59)",color2:"rgba(180, 180, 180, 0.29)"},{color1:"rgb(190, 190, 190)",color2:"rgba(190, 190, 190, 1)"},{color1:"rgba(170, 170, 170, 0.91)",color2:"rgba(170, 170, 170, 0.45)"},{color1:"rgb(185, 185, 185)",color2:"rgba(185, 185, 185, 1)"}]},light:{spikes:[{color1:"rgb(80, 80, 80)",color2:"rgba(80, 80, 80, 0.8)"},{color1:"rgba(100, 100, 100, 0.7)",color2:"rgba(100, 100, 100, 0.46)"},{color1:"rgb(70, 70, 70)",color2:"rgba(70, 70, 70, 0.82)"},{color1:"rgb(90, 90, 90)",color2:"rgba(90, 90, 90, 0.7)"},{color1:"rgb(85, 85, 85)",color2:"rgba(85, 85, 85, 0.78)"}]}},ocean:{dark:{spikes:[{color1:"rgb(100, 80, 255)",color2:"rgb(100, 80, 255)"},{color1:"rgba(80, 130, 220, 0.59)",color2:"rgba(80, 130, 220, 0.29)"},{color1:"rgb(60, 100, 255)",color2:"rgb(60, 100, 255)"},{color1:"rgba(90, 120, 200, 0.91)",color2:"rgba(90, 120, 200, 0.45)"},{color1:"rgb(120, 90, 255)",color2:"rgb(120, 90, 255)"}]},light:{spikes:[{color1:"rgb(50, 40, 180)",color2:"rgba(50, 40, 180, 0.8)"},{color1:"rgba(40, 80, 200, 0.7)",color2:"rgba(40, 80, 200, 0.46)"},{color1:"rgb(30, 50, 190)",color2:"rgba(30, 50, 190, 0.82)"},{color1:"rgb(60, 90, 180)",color2:"rgba(60, 90, 180, 0.7)"},{color1:"rgb(70, 60, 200)",color2:"rgba(70, 60, 200, 0.78)"}]}},sunset:{dark:{spikes:[{color1:"rgb(255, 100, 80)",color2:"rgb(255, 100, 80)"},{color1:"rgba(255, 150, 80, 0.59)",color2:"rgba(255, 150, 80, 0.29)"},{color1:"rgb(255, 80, 60)",color2:"rgb(255, 80, 60)"},{color1:"rgba(255, 120, 50, 0.91)",color2:"rgba(255, 120, 50, 0.45)"},{color1:"rgb(255, 140, 70)",color2:"rgb(255, 140, 70)"}]},light:{spikes:[{color1:"rgb(200, 60, 30)",color2:"rgba(200, 60, 30, 0.8)"},{color1:"rgba(220, 100, 20, 0.7)",color2:"rgba(220, 100, 20, 0.46)"},{color1:"rgb(180, 40, 20)",color2:"rgba(180, 40, 20, 0.82)"},{color1:"rgb(210, 80, 10)",color2:"rgba(210, 80, 10, 0.7)"},{color1:"rgb(190, 70, 30)",color2:"rgba(190, 70, 30, 0.78)"}]}}};function aO(e,a){let r=e.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*[\d.]+\s*\)$/);if(r)return`rgba(${r[1]}, ${r[2]}, ${r[3]}, ${a})`;let t=e.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);return t?`rgba(${t[1]}, ${t[2]}, ${t[3]}, ${a})`:e}function aA(e,a){let r=e.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);if(r)return`rgba(${r[1]}, ${r[2]}, ${r[3]}, ${(parseFloat(r[4])*a).toFixed(2)})`;let t=e.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);return t?`rgba(${t[1]}, ${t[2]}, ${t[3]}, ${a.toFixed(2)})`:e}let aE=[{region:1,quad:"tl"},{region:2,quad:"tl"},{region:3,quad:"bl"},{region:1,quad:"bl"},{region:2,quad:"br"},{region:3,quad:"br"},{region:1,quad:"tr"},{region:2,quad:"tr"},{region:3,quad:"tr"}],aF=[[65,35],[55,30],[35,65],[15,30],[173,28],[80,22],[69,28],[22,38],[47,44]],aP=[{ci:0,region:1,quad:"tl",w:84,h:48},{ci:1,region:2,quad:"tl",w:72,h:42},{ci:2,region:3,quad:"bl",w:48,h:84},{ci:4,region:2,quad:"br",w:216,h:38},{ci:5,region:3,quad:"br",w:102,h:31},{ci:6,region:1,quad:"tr",w:89,h:38},{ci:8,region:3,quad:"tr",w:62,h:58}],aL=[{ci:0,region:1,quad:"tl",w:80,h:19,x:"27%",y:"0%"},{ci:6,region:2,quad:"tr",w:74,h:11,x:"73%",y:"-1%"},{ci:7,region:3,quad:"tr",w:15,h:44,x:"100%",y:"33%"},{ci:8,region:1,quad:"br",w:19,h:38,x:"101%",y:"72%"},{ci:4,region:2,quad:"br",w:84,h:13,x:"67%",y:"100%"},{ci:1,region:3,quad:"bl",w:60,h:21,x:"24%",y:"101%"},{ci:2,region:1,quad:"bl",w:17,h:40,x:"0%",y:"60%"},{ci:3,region:2,quad:"tl",w:13,h:32,x:"-1%",y:"28%"}],a_=[{ci:0,region:1,quad:"tl",w:110,h:30,x:"27%",y:"3%"},{ci:6,region:2,quad:"tr",w:100,h:20,x:"73%",y:"1%"},{ci:7,region:3,quad:"tr",w:26,h:62,x:"100%",y:"33%"},{ci:8,region:1,quad:"br",w:30,h:56,x:"101%",y:"72%"},{ci:4,region:2,quad:"br",w:120,h:22,x:"67%",y:"99%"},{ci:1,region:3,quad:"bl",w:88,h:32,x:"24%",y:"99%"},{ci:2,region:1,quad:"bl",w:28,h:58,x:"0%",y:"60%"}];function aI(e,a,r,t,s,o,i,n){let l;return`radial-gradient(ellipse calc(${a}px * var(--bw${t}-${n}) * var(--pulse-glow-sx, 1) * var(--pulse-glow-boost, 1)) calc(${r}px * var(--bh${t}-${n}) * var(--bgh-${n}) * var(--pulse-glow-sy, 1) * var(--pulse-glow-boost, 1)) at calc(${o} + var(--bx${t}-${n})) calc(${i} + var(--by${t}-${n})), ${l=e.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/),`rgba(${l?`${l[1]}, ${l[2]}, ${l[3]}`:"255, 255, 255"}, var(--bop-${s}-${n}))`}, transparent)`}function aq(e,a,r){let t=aX[a].border;return e.map(e=>{let a=t[e.ci],[s,o]=a.pos.split(" ");return aI(a.color,e.w,e.h,e.region,e.quad,e.x??s,e.y??o,r)}).join(`,
    `)}function aT(e,a,r){let t=aX[a].border,s=+r.toFixed(3);return e.map(e=>{let a=t[e.ci],[r,o]=a.pos.split(" "),i=e.x??r,n=e.y??o,l=a.color.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/),c=l?`${l[1]}, ${l[2]}, ${l[3]}`:"255, 255, 255";return`radial-gradient(ellipse calc(${e.w}px * var(--pulse-glow-sx, 1) * var(--pulse-glow-boost, 1)) calc(${e.h}px * var(--pulse-glow-sy, 1) * var(--pulse-glow-boost, 1)) at ${i} ${n}, rgba(${c}, ${s}), transparent)`}).join(`,
    `)}function aU(e){return`
[data-beam="${e}"][data-paused],
[data-beam="${e}"][data-paused]::after,
[data-beam="${e}"][data-paused]::before,
[data-beam="${e}"][data-paused] [data-beam-bloom] {
  animation-play-state: paused !important;
}`}function aB(e){let a=["bw1","bh1","bw2","bh2","bw3","bh3","bgh","bop-tl","bop-tr","bop-bl","bop-br"].map(a=>`@property --${a}-${e} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}`).join(`

`),r=["bx1","by1","bx2","by2","bx3","by3"].map(a=>`@property --${a}-${e} {
  syntax: "<length>";
  initial-value: 0px;
  inherits: true;
}`).join(`

`);return`${a}

${r}

@property --beam-opacity-${e} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

@property --beam-hue-${e} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}`}function aG(e,a,r){let t="dark"===a,s=r/2.3;return"pulse-inner"===e?{sp:.28,dr:t?33:40,op:t?.48:.45,gh:t?.34:.22,bs:(t?1.9:2.6)*s,ss:(t?2.6:4.6)*s,ghs:(t?2.4:5.5)*s,huePeriod:16}:{sp:t?.28:.36,dr:t?14:19,op:.46*!!t,gh:t?.16:.58,bs:(t?2.3:3.7)*s,ss:(t?6.4:4.6)*s,ghs:(t?2.4:3.8)*s,huePeriod:14}}function aD(e,a,r){return`  animation: ${a}-${e} ${r}s ease forwards;`}let aK=new Set,aV=null,aJ=0,aQ=1e3/30-2,aZ=2*Math.PI;function a0(e){return(1-Math.cos(aZ*e))/2}function a1(e){if(aV=requestAnimationFrame(a1),e-aJ<aQ)return;aJ=e;let a=e/1e3;aK.forEach(({el:e,config:r})=>{for(let t of r.oscillators){let r=(a-t.delay)/t.period,s=t.a+(t.b-t.a)*a0(r);e.style.setProperty(t.prop,"px"===t.unit?`${s.toFixed(2)}px`:s.toFixed(4))}if(r.hue){let{prop:t,range:s,period:o,continuous:i}=r.hue,n=i?a/o%1*s:-s+2*s*a0(a/o);e.style.setProperty(t,`${n.toFixed(2)}deg`)}})}let a2=(0,n.forwardRef)(function({children:e,size:a="md",colorVariant:r="colorful",theme:t="dark",staticColors:s=!1,duration:i,active:l=!0,borderRadius:c,brightness:d,saturation:p,hueRange:b=30,strength:m=1,className:u,style:f,onActivate:g,onDeactivate:h,onAnimationEnd:x,...$},y){let v=(0,n.useId)().replace(/:/g,"-"),k=function(){let[e,a]=(0,n.useState)(()=>typeof window>"u"||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");return(0,n.useEffect)(()=>{if(typeof window>"u")return;let e=window.matchMedia("(prefers-color-scheme: dark)"),r=e=>{a(e.matches?"dark":"light")};return e.addEventListener("change",r),()=>e.removeEventListener("change",r)},[]),e}(),z=(0,n.useRef)(null),[w,j]=(0,n.useState)(l),[N,M]=(0,n.useState)(!1),[S,C]=(0,n.useState)(!0),[X,W]=(0,n.useState)(null),[R,Y]=(0,n.useState)({x:1,y:1});(0,n.useEffect)(()=>{if(null!=c)return;let e=z.current;if(!e)return;let a=()=>{let a=e.firstElementChild;if(!a)return;let r=parseFloat(getComputedStyle(a).borderTopLeftRadius);!isNaN(r)&&r>0&&W(r)};a();let r=new MutationObserver(a);return r.observe(e,{childList:!0,subtree:!1}),()=>r.disconnect()},[c,e]),(0,n.useEffect)(()=>{!l||w||N?l||!w||N||M(!0):j(!0)},[l,w,N]),(0,n.useEffect)(()=>{let e=z.current;if(!e||typeof IntersectionObserver>"u")return;let a=new IntersectionObserver(e=>{for(let a of e)C(a.isIntersecting)},{rootMargin:"256px"});return a.observe(e),()=>a.disconnect()},[]),(0,n.useEffect)(()=>{if("pulse-outside"!==a)return void Y({x:1,y:1});let e=z.current;if(!e)return;let r=e=>Math.max(.35,Math.min(4,e)),t=()=>{let a=e.firstElementChild;if(!a)return;let t=a.getBoundingClientRect();if(!t.width||!t.height)return;let s=+r(t.width/350).toFixed(3),o=+r(t.height/140).toFixed(3);Y(e=>e.x===s&&e.y===o?e:{x:s,y:o})};if(t(),typeof ResizeObserver>"u")return;let s=e.firstElementChild;if(!s)return;let o=new ResizeObserver(t);return o.observe(s),()=>o.disconnect()},[a,e]);let H=(0,n.useCallback)(e=>{let a=e.animationName;a.includes("fade-out")?(j(!1),M(!1),null==h||h()):a.includes("fade-in")&&(null==g||g()),null==x||x(e)},[g,h,x]),O="auto"===t?k:t,A=aC[a][O],E=aS[a],F="pulse-inner"===a||"pulse-outside"===a,P=c??X??E.borderRadius,L=i??("line"===a?3.1:F?2.3:1.96),_=p??A.saturation,I=d??A.brightness??1.3,q="line"===a?Math.min(b,13):b,T="mono"===r||s,U=(0,n.useMemo)(()=>(function(e){let{size:a}=e;return"line"===a?function(e){let{id:a,borderRadius:r,borderWidth:t,duration:s,strokeOpacity:o,innerOpacity:i,bloomOpacity:n,innerShadow:l,colorVariant:c,staticColors:d,brightness:p,saturation:b,hueRange:m,theme:u}=e,f=Math.max(0,r-t),g="dark"===u,h=d?"":`animation: beam-hue-shift-${a} 12s ease-in-out infinite;`,x=d?"":`animation: beam-hue-shift-bloom-${a} 8s ease-in-out infinite;`,$=d?"":`
@keyframes beam-hue-shift-${a} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${m}deg)) brightness(${p.toFixed(2)}) saturate(${b.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${m}deg)) brightness(${p.toFixed(2)}) saturate(${b.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${m}deg)) brightness(${p.toFixed(2)}) saturate(${b.toFixed(2)}); }
}

@keyframes beam-hue-shift-bloom-${a} {
  0% { filter: blur(8px) hue-rotate(calc(var(--beam-hue-base, 0deg) - ${m+10}deg)) brightness(${p.toFixed(2)}) saturate(${b.toFixed(2)}); }
  50% { filter: blur(8px) hue-rotate(calc(var(--beam-hue-base, 0deg) + ${m+10}deg)) brightness(${p.toFixed(2)}) saturate(${b.toFixed(2)}); }
  100% { filter: blur(8px) hue-rotate(calc(var(--beam-hue-base, 0deg) - ${m+10}deg)) brightness(${p.toFixed(2)}) saturate(${b.toFixed(2)}); }
}`,y=g?`radial-gradient(
        ellipse calc(24px * var(--beam-w-${a})) calc(28px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%) calc(100% + 2px),
        rgba(255, 255, 255, 0.38) 0%,
        rgba(255, 255, 255, 0.12) 30%,
        transparent 65%
      )`:`radial-gradient(
        ellipse calc(35px * var(--beam-w-${a})) calc(28px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%) calc(100% + 2px),
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.25) 35%,
        transparent 70%
      )`,v=aR[c][g?"dark":"light"].map(e=>{let r=0===e.offsetX?"":e.offsetX>0?` + ${e.offsetX}px`:` - ${Math.abs(e.offsetX)}px`,t=0===e.offsetY?"":e.offsetY>0?` + ${e.offsetY}px`:` - ${Math.abs(e.offsetY)}px`;return`radial-gradient(ellipse calc(${e.sizeW}px * var(--beam-w-${a})) calc(${e.sizeH}px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%${r}) calc(100%${t}), ${e.color}, transparent)`}).join(`,
       `),k=aY[c].map(e=>{let r=0===e.offsetX?"":e.offsetX>0?` + ${e.offsetX}px`:` - ${Math.abs(e.offsetX)}px`,t=0===e.offsetY?"":` - ${Math.abs(e.offsetY)}px`;return`radial-gradient(ellipse calc(${e.sizeW}px * var(--beam-w-${a})) calc(${e.sizeH}px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%${r}) calc(100%${t}), ${e.color}, transparent)`}).join(`,
    `),z=function(e,a,r){let t,s=(t=aX[e],a?t.spike:t.spikeLt),o=aH[e][a?"dark":"light"],i="mono"===e,n=i?.14:1,l=i?aA(s.primary,.14):s.primary,c=i?aA(s.primary,.09):s.primary,d=i?aA(s.secondary,.12):s.secondary,p=i?aO(s.secondary,.06):aO(s.secondary,.49),b=o.spikes.map(e=>i?{color1:aA(e.color1,n),color2:aA(e.color2,.7*n)}:e),m=i?"12px":"0.8px",u=i?"14px":"2px",f=i?"12px":"1.2px",g=i?"42px":"92px",h=i?"38px":"72px",x=i?"40px":"85px",$=i?"32px":"60px";if(a)return`radial-gradient(ellipse calc(${m} * var(--beam-spike-${r})) calc(${g} * var(--beam-h-${r})) at 8% calc(100% - 2px), ${l}, ${c} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${r})) calc(35px * var(--beam-h-${r})) at 22% calc(100% - 4px), ${d}, ${p} 50%, transparent 95%),
       radial-gradient(ellipse calc(${u} * (2 - var(--beam-spike-${r}))) calc(${h} * var(--beam-h-${r})) at 36% calc(100% - 3px), ${b[0].color1}, ${b[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${r})) calc(28px * var(--beam-h-${r})) at 50% calc(100% - 2px), ${b[1].color1}, ${b[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(${f} * (2 - var(--beam-spike2-${r}))) calc(${x} * var(--beam-h-${r})) at 64% calc(100% - 4px), ${b[2].color1}, ${b[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${r})) calc(45px * var(--beam-h-${r})) at 78% calc(100% - 2px), ${b[3].color1}, ${b[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(${i?"10px":"0.6px"} * (2 - var(--beam-spike-${r}))) calc(${$} * var(--beam-h-${r})) at 92% calc(100% - 3px), ${b[4].color1}, ${b[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(21px * var(--beam-spike-${r})) calc(15px * var(--beam-spike2-${r})) at calc(var(--beam-x-${r}) * 100%) calc(100% + 1px), ${i?"rgba(255, 255, 255, 0.5)":"rgba(255, 255, 255, 1)"} 0%, ${i?"rgba(255, 255, 255, 0.45)":"rgba(255, 255, 255, 0.9)"} 20%, ${i?"rgba(255, 255, 255, 0.25)":"rgba(255, 255, 255, 0.5)"} 50%, transparent 100%),
       radial-gradient(ellipse calc(42px * var(--beam-w-${r})) calc(40px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%) 100%, ${i?"rgba(255, 255, 255, 0.15)":"rgba(255, 255, 255, 0.3)"} 0%, ${i?"rgba(255, 255, 255, 0.06)":"rgba(255, 255, 255, 0.12)"} 25%, ${i?"rgba(255, 255, 255, 0.015)":"rgba(255, 255, 255, 0.03)"} 55%, transparent 80%)`;{let e=i?aA(s.primary,.11):aO(s.primary,.85),a=i?aA(s.secondary,.09):aO(s.secondary,.7);return`radial-gradient(ellipse calc(${m} * var(--beam-spike-${r})) calc(${g} * var(--beam-h-${r})) at 8% calc(100% - 2px), ${l}, ${e} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${r})) calc(35px * var(--beam-h-${r})) at 22% calc(100% - 4px), ${d}, ${a} 50%, transparent 95%),
       radial-gradient(ellipse calc(${u} * (2 - var(--beam-spike-${r}))) calc(${h} * var(--beam-h-${r})) at 36% calc(100% - 3px), ${b[0].color1}, ${b[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${r})) calc(28px * var(--beam-h-${r})) at 50% calc(100% - 2px), ${b[1].color1}, ${b[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(${f} * (2 - var(--beam-spike2-${r}))) calc(${x} * var(--beam-h-${r})) at 64% calc(100% - 4px), ${b[2].color1}, ${b[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${r})) calc(45px * var(--beam-h-${r})) at 78% calc(100% - 2px), ${b[3].color1}, ${b[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(${i?"12px":"1px"} * (2 - var(--beam-spike-${r}))) calc(${$} * var(--beam-h-${r})) at 92% calc(100% - 3px), ${b[4].color1}, ${b[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(50px * var(--beam-w-${r})) calc(32px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%) calc(100%), rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.18) 30%, rgba(0, 0, 0, 0.03) 60%, transparent 85%)`}}(c,g,a),w="mono"===c?"filter: blur(6px);":"";return`
@property --beam-x-${a} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

@property --beam-w-${a} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-h-${a} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-spike-${a} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-spike2-${a} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-edge-${a} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-opacity-${a} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${a}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: hidden;
}

[data-beam="${a}"][data-active] {
  animation:
    beam-travel-${a} ${s}s linear infinite,
    beam-edge-fade-${a} ${s}s linear infinite,
    beam-breathe-${a} ${(1.3*s).toFixed(1)}s ease-in-out infinite,
    beam-spike-${a} ${(1.33*s).toFixed(1)}s ease-in-out infinite,
    beam-spike2-${a} ${(1.7*s).toFixed(1)}s ease-in-out infinite,
    beam-fade-in-${a} 0.6s ease forwards;
}

[data-beam="${a}"][data-fading] {
  animation:
    beam-travel-${a} ${s}s linear infinite,
    beam-edge-fade-${a} ${s}s linear infinite,
    beam-breathe-${a} ${(1.3*s).toFixed(1)}s ease-in-out infinite,
    beam-spike-${a} ${(1.33*s).toFixed(1)}s ease-in-out infinite,
    beam-spike2-${a} ${(1.7*s).toFixed(1)}s ease-in-out infinite,
    beam-fade-out-${a} 0.5s ease forwards;
}

[data-beam="${a}"][data-active]::after,
[data-beam="${a}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${f}px;
  padding: ${t}px;
  clip-path: inset(0 round ${r}px);
  background: ${y}, ${v};
  -webkit-mask:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${a})) calc(60px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${a})) calc(60px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${a}) * var(--beam-edge-${a}) * ${o.toFixed(2)} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${h}
}

[data-beam="${a}"][data-active]::before,
[data-beam="${a}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  background: ${k};
  box-shadow: inset 0 0 9px 1px ${l};
  -webkit-mask-image:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${a})) calc(60px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${a})) calc(60px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${a}) * var(--beam-edge-${a}) * ${i.toFixed(2)} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  clip-path: inset(0 round ${r}px);
  ${h}
}

[data-beam="${a}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${f}px;
  clip-path: inset(0 round ${r}px);
  padding: 0;
  -webkit-mask: radial-gradient(
    ellipse calc(84px * var(--beam-w-${a})) calc(110px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%) 100%,
    white 0%, rgba(255, 255, 255, 0.5) 35%, transparent 100%
  );
  -webkit-mask-composite: source-over;
  mask: radial-gradient(
    ellipse calc(84px * var(--beam-w-${a})) calc(110px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%) 100%,
    white 0%, rgba(255, 255, 255, 0.5) 35%, transparent 100%
  );
  mask-composite: add;
  background: ${z};
  ${w}
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${a}"][data-active] [data-beam-bloom],
[data-beam="${a}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${a}) * var(--beam-edge-${a}) * ${n.toFixed(2)} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
  ${x}
}

@keyframes beam-travel-${a} {
  0%   { --beam-x-${a}: 0.06;  --beam-w-${a}: 0.5; }
  10%  { --beam-x-${a}: 0.15;  --beam-w-${a}: 0.8; }
  20%  { --beam-x-${a}: 0.25;  --beam-w-${a}: 1.1; }
  30%  { --beam-x-${a}: 0.35;  --beam-w-${a}: 1.3; }
  40%  { --beam-x-${a}: 0.44;  --beam-w-${a}: 1.45; }
  50%  { --beam-x-${a}: 0.5;   --beam-w-${a}: 1.5; }
  60%  { --beam-x-${a}: 0.56;  --beam-w-${a}: 1.45; }
  70%  { --beam-x-${a}: 0.65;  --beam-w-${a}: 1.3; }
  80%  { --beam-x-${a}: 0.75;  --beam-w-${a}: 1.1; }
  90%  { --beam-x-${a}: 0.85;  --beam-w-${a}: 0.8; }
  100% { --beam-x-${a}: 0.94;  --beam-w-${a}: 0.5; }
}

@keyframes beam-edge-fade-${a} {
  0%    { --beam-edge-${a}: 0; }
  12.5% { --beam-edge-${a}: 0; }
  32.5% { --beam-edge-${a}: 1; }
  67.5% { --beam-edge-${a}: 1; }
  87.5% { --beam-edge-${a}: 0; }
  100%  { --beam-edge-${a}: 0; }
}

@keyframes beam-breathe-${a} {
  0%, 100% { --beam-h-${a}: 0.8; }
  25%      { --beam-h-${a}: 1.25; }
  55%      { --beam-h-${a}: 0.85; }
  80%      { --beam-h-${a}: 1.3; }
}

@keyframes beam-spike-${a} {
  0%   { --beam-spike-${a}: 0.8; }
  25%  { --beam-spike-${a}: 1.3; }
  50%  { --beam-spike-${a}: 0.9; }
  75%  { --beam-spike-${a}: 1.4; }
  100% { --beam-spike-${a}: 0.8; }
}

@keyframes beam-spike2-${a} {
  0%   { --beam-spike2-${a}: 1.2; }
  25%  { --beam-spike2-${a}: 0.7; }
  50%  { --beam-spike2-${a}: 1.4; }
  75%  { --beam-spike2-${a}: 0.8; }
  100% { --beam-spike2-${a}: 1.2; }
}

@keyframes beam-fade-in-${a} {
  to { --beam-opacity-${a}: 1; }
}

@keyframes beam-fade-out-${a} {
  from { --beam-opacity-${a}: 1; }
  to { --beam-opacity-${a}: 0; }
}
${$}
${aU(a)}
`}(e):"sm"===a?function(e){let{id:a,borderRadius:r,borderWidth:t,duration:s,strokeOpacity:o,innerOpacity:i,bloomOpacity:n,innerShadow:l,colorVariant:c,staticColors:d,brightness:p,saturation:b,hueRange:m,theme:u}=e,f=Math.max(0,r-t),g="mono"===c?.5:1,h=d?"":`animation: beam-hue-shift-${a} 12s ease-in-out infinite;`,x=d?"":`
@keyframes beam-hue-shift-${a} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${m}deg)) brightness(${p.toFixed(2)}) saturate(${b.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${m}deg)) brightness(${p.toFixed(2)}) saturate(${b.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${m}deg)) brightness(${p.toFixed(2)}) saturate(${b.toFixed(2)}); }
}`,$="dark"===u,y=$?`conic-gradient(
        from var(--beam-angle-${a}),
        transparent 0%, transparent 54%,
        rgba(255, 255, 255, 0.1) 57%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(255, 255, 255, 0.6) 63%,
        rgba(255, 255, 255, 0.75) 66%,
        rgba(255, 255, 255, 0.6) 69%,
        rgba(255, 255, 255, 0.3) 72%,
        rgba(255, 255, 255, 0.1) 75%,
        transparent 78%, transparent 100%
      )`:`conic-gradient(
        from var(--beam-angle-${a}),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      )`,v=aW[c].border.map(e=>`radial-gradient(ellipse ${e.size} at ${e.pos}, ${e.color}, transparent)`).join(`,
    `),k=aW[c].inner.map(e=>`radial-gradient(ellipse ${e.size} at ${e.pos}, ${e.color}, transparent)`).join(`,
    `),z=$?`conic-gradient(
        from var(--beam-angle-${a}),
        transparent 0%, transparent 58%,
        rgba(255, 255, 255, 0.03) 62%,
        rgba(255, 255, 255, 0.08) 65%,
        rgba(255, 255, 255, 0.2) 67%,
        rgba(255, 255, 255, 0.45) 69%,
        rgba(255, 255, 255, 0.85) 70%,
        rgba(255, 255, 255, 0.85) 70.5%,
        rgba(255, 255, 255, 0.45) 71.5%,
        rgba(255, 255, 255, 0.2) 73%,
        rgba(255, 255, 255, 0.08) 75%,
        rgba(255, 255, 255, 0.03) 78%,
        transparent 82%
      )`:`conic-gradient(
        from var(--beam-angle-${a}),
        transparent 0%, transparent 58%,
        rgba(0, 0, 0, 0.02) 62%,
        rgba(0, 0, 0, 0.08) 65%,
        rgba(0, 0, 0, 0.2) 67%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.6) 70.5%,
        rgba(0, 0, 0, 0.4) 71.5%,
        rgba(0, 0, 0, 0.2) 73%,
        rgba(0, 0, 0, 0.08) 75%,
        rgba(0, 0, 0, 0.02) 78%,
        transparent 82%
      )`,w=`conic-gradient(
    from var(--beam-angle-${a}),
    transparent 0%, transparent 22%,
    rgba(255, 255, 255, 0.12) 28%, rgba(255, 255, 255, 0.4) 36%,
    white 46%, white 82%,
    rgba(255, 255, 255, 0.4) 88%, rgba(255, 255, 255, 0.12) 94%,
    transparent 97%, transparent 100%
  )`;return`
@property --beam-angle-${a} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-${a} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${a}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: hidden;
}

[data-beam="${a}"][data-active] {
  animation:
    beam-spin-${a} ${s}s linear infinite,
    beam-fade-in-${a} 0.6s ease forwards;
}

[data-beam="${a}"][data-fading] {
  animation:
    beam-spin-${a} ${s}s linear infinite,
    beam-fade-out-${a} 0.5s ease forwards;
}

[data-beam="${a}"][data-active]::after,
[data-beam="${a}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${f}px;
  padding: ${t}px;
  clip-path: inset(0 round ${r}px);
  background: ${y},${v};
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-${a}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    conic-gradient(
      from var(--beam-angle-${a}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${a}) * ${(o*g).toFixed(2)} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${h}
}

[data-beam="${a}"][data-active]::before,
[data-beam="${a}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  clip-path: inset(0 round ${r}px);
  background: ${k};
  box-shadow: inset 0 0 5px 1px ${l};
  -webkit-mask-image: ${w};
  -webkit-mask-composite: source-over;
  mask-image: ${w};
  mask-composite: add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${a}) * ${(i*g).toFixed(2)} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  ${h}
}

[data-beam="${a}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${f}px;
  clip-path: inset(0 round ${r}px);
  background: ${z};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${t}px;
  filter: blur(8px) brightness(${p.toFixed(2)}) saturate(${b.toFixed(2)});
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${a}"][data-active] [data-beam-bloom],
[data-beam="${a}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${a}) * ${(n*g).toFixed(2)} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
}

@keyframes beam-spin-${a} {
  to { --beam-angle-${a}: 360deg; }
}

@keyframes beam-fade-in-${a} {
  to { --beam-opacity-${a}: 1; }
}

@keyframes beam-fade-out-${a} {
  from { --beam-opacity-${a}: 1; }
  to { --beam-opacity-${a}: 0; }
}
${x}
${aU(a)}
`}(e):"pulse-inner"===a?function(e){var a;let r,t,s,{id:o,borderRadius:i,borderWidth:n,duration:l,strokeOpacity:c,innerOpacity:d,bloomOpacity:p,colorVariant:b,staticColors:m,brightness:u,saturation:f,hueRange:g,theme:h}=e,x="mono"===b?.5:1,$=(c*x).toFixed(2),y=(d*x).toFixed(2),v=(p*x).toFixed(2),{op:k}=aG("pulse-inner",h,l),z=u.toFixed(2),w=f.toFixed(2),j=m?`filter: brightness(${z}) saturate(${w});`:`filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${o}))) brightness(${z}) saturate(${w});`,N=m?`filter: blur(8px) brightness(${z}) saturate(${w});`:`filter: blur(8px) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${o}))) brightness(${z}) saturate(${w});`,M=aX[b].border.map((e,a)=>{let{region:r,quad:t}=aE[a],[s,i]=e.pos.split(" "),[n,l]=e.size.split(" ").map(parseFloat);return aI(e.color,n,l,r,t,s,i,o)}).join(`,
    `),S=(a="dark"===h,r=aX[b].border.map((e,a)=>{let{region:r,quad:t}=aE[a],[s,i]=e.pos.split(" "),[n,l]=aF[a];return aI(e.color,n,l,r,t,s,i,o)}),t=a?"255, 255, 255":"0, 0, 0",s=a?.18:.08,[...r,...[["0%","0%","tl"],["100%","0%","tr"],["0%","100%","bl"],["100%","100%","br"]].map(([e,a,r])=>`radial-gradient(ellipse 60px 60px at ${e} ${a}, rgba(${t}, calc(${s} * var(--bop-${r}-${o}))), transparent 70%)`)].join(`,
    `)),C=aT(aP,b,1-.5*k);return`
${aB(o)}

[data-beam="${o}"] {
  position: relative;
  border-radius: ${i}px;
  overflow: hidden;
  isolation: isolate;
}

[data-beam="${o}"][data-active] {
${aD(o,"beam-fade-in",.6)}
}

[data-beam="${o}"][data-fading] {
${aD(o,"beam-fade-out",.5)}
}

[data-beam="${o}"][data-active]::after,
[data-beam="${o}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${i}px;
  padding: ${n}px;
  clip-path: inset(0 round ${i}px);
  background: ${M};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${o}) * ${$} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${j}
}

[data-beam="${o}"][data-active]::before,
[data-beam="${o}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${i}px;
  clip-path: inset(0 round ${i}px);
  background: ${S};
  -webkit-mask-image:
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-over;
  mask-image:
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: add;
  pointer-events: none;
  z-index: 1;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${o}) * ${y} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  ${j}
}

[data-beam="${o}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${i}px;
  clip-path: inset(0 round ${i}px);
  background: ${C};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${n}px;
  pointer-events: none;
  z-index: 3;
  will-change: opacity;
  opacity: 0;
}

[data-beam="${o}"][data-active] [data-beam-bloom],
[data-beam="${o}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${o}) * ${v} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
  ${N}
}

@keyframes beam-fade-in-${o} { to { --beam-opacity-${o}: 1; } }
@keyframes beam-fade-out-${o} { from { --beam-opacity-${o}: 1; } to { --beam-opacity-${o}: 0; } }
${aU(o)}

@media (prefers-reduced-motion: reduce) {
  [data-beam="${o}"][data-active],
  [data-beam="${o}"][data-fading],
  [data-beam="${o}"][data-active]::after,
  [data-beam="${o}"][data-fading]::after,
  [data-beam="${o}"][data-active]::before,
  [data-beam="${o}"][data-fading]::before,
  [data-beam="${o}"][data-active] [data-beam-bloom],
  [data-beam="${o}"][data-fading] [data-beam-bloom] {
    animation: none !important;
  }
}
`}(e):"pulse-outside"===a?function(e){let{id:a,borderRadius:r,duration:t,strokeOpacity:s,innerOpacity:o,bloomOpacity:i,colorVariant:n,staticColors:l,brightness:c,saturation:d,hueRange:p,theme:b,hairlineOpacity:m=0}=e,u="dark"===b,f="mono"===n?.5:1,g=(s*f).toFixed(2),h=(o*f).toFixed(2),x=(i*f).toFixed(2),$=u?"70, 70, 70":"0, 0, 0",y=m.toFixed(2),v=`linear-gradient(rgba(${$}, ${y}), rgba(${$}, ${y}))`,{op:k}=aG("pulse-outside",b,t),z=u?3:6,w=u?22.5:15,j=c.toFixed(2),N=d.toFixed(2),M=l?`filter: brightness(${j}) saturate(${N});`:`filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${a}))) brightness(${j}) saturate(${N});`,S=`brightness(var(--beam-glow-brightness, ${j})) saturate(var(--beam-glow-saturate, ${N}))`,C=l?`filter: blur(var(--beam-core-blur, ${z}px)) ${S};`:`filter: blur(var(--beam-core-blur, ${z}px)) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${a}))) ${S};`,X=l?`filter: blur(var(--beam-bloom-blur, ${w}px)) ${S};`:`filter: blur(var(--beam-bloom-blur, ${w}px)) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${a}))) ${S};`,W=aq(aL,n,a),R=aq(aL,n,a),Y=aT(a_,n,1-.5*k),H=m>0?`${W},
    ${v}`:W;return`
${aB(a)}

[data-beam="${a}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: visible;
  isolation: isolate;
}

[data-beam="${a}"][data-active] {
${aD(a,"beam-fade-in",.6)}
}

[data-beam="${a}"][data-fading] {
${aD(a,"beam-fade-out",.5)}
}
${m>0?`
/* Idle hairline — painted above the (opaque) child in the inner 1px edge ring so
   it overlaps a standard inset component border exactly. */
[data-beam="${a}"]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  padding: 1px;
  clip-path: inset(0 round ${r}px);
  background: ${v};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
}
`:""}
[data-beam="${a}"][data-active]::after,
[data-beam="${a}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  padding: 1px;
  clip-path: inset(0 round ${r}px);
  background: ${H};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${a}) * ${g} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${M}
}

[data-beam="${a}"][data-active]::before,
[data-beam="${a}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: -10px;
  z-index: -1;
  border-radius: ${r+10}px;
  background: ${R};
  transform: scale(0.95, 0.9);
  pointer-events: none;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${a}) * ${h} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  ${C}
}

[data-beam="${a}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: -30px;
  z-index: -1;
  border-radius: ${r+30}px;
  background: ${Y};
  transform: scale(0.95, 0.9);
  pointer-events: none;
  will-change: transform;
  opacity: 0;
}

[data-beam="${a}"][data-active] [data-beam-bloom],
[data-beam="${a}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${a}) * ${x} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
  ${X}
}

@keyframes beam-fade-in-${a} { to { --beam-opacity-${a}: 1; } }
@keyframes beam-fade-out-${a} { from { --beam-opacity-${a}: 1; } to { --beam-opacity-${a}: 0; } }
${aU(a)}

@media (prefers-reduced-motion: reduce) {
  [data-beam="${a}"][data-active],
  [data-beam="${a}"][data-fading],
  [data-beam="${a}"][data-active]::after,
  [data-beam="${a}"][data-fading]::after,
  [data-beam="${a}"][data-active]::before,
  [data-beam="${a}"][data-fading]::before,
  [data-beam="${a}"][data-active] [data-beam-bloom],
  [data-beam="${a}"][data-fading] [data-beam-bloom] {
    animation: none !important;
  }
}
`}(e):function(e){let a,r,{id:t,borderRadius:s,borderWidth:o,duration:i,strokeOpacity:n,innerOpacity:l,bloomOpacity:c,innerShadow:d,colorVariant:p,staticColors:b,brightness:m,saturation:u,hueRange:f,theme:g}=e,h=Math.max(0,s-o),x="mono"===p?.5:1,$=b?"":`animation: beam-hue-shift-${t} 12s ease-in-out infinite;`,y=b?"":`
@keyframes beam-hue-shift-${t} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${f}deg)) brightness(${m.toFixed(2)}) saturate(${u.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${f}deg)) brightness(${m.toFixed(2)}) saturate(${u.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${f}deg)) brightness(${m.toFixed(2)}) saturate(${u.toFixed(2)}); }
}`,v="dark"===g,k=v?`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 54%,
        rgba(255, 255, 255, 0.1) 57%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(255, 255, 255, 0.6) 63%,
        rgba(255, 255, 255, 0.75) 66%,
        rgba(255, 255, 255, 0.6) 69%,
        rgba(255, 255, 255, 0.3) 72%,
        rgba(255, 255, 255, 0.1) 75%,
        transparent 78%, transparent 100%
      )`:`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      )`,z=aX[p].border.map(e=>`radial-gradient(ellipse ${e.size} at ${e.pos}, ${e.color}, transparent)`).join(`,
    `),w=(a=aX[p],r="mono"===p?.225:.45,a.border.map(e=>{let a=e.color.replace("rgb(","rgba(").replace(")",`, ${r})`);return`radial-gradient(ellipse ${e.size.split(" ").map(e=>{let a=parseInt(e);return`${Math.round(.9*a)}px`}).join(" ")} at ${e.pos}, ${a}, transparent)`}).join(`,
    `)),j=v?`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 58%,
        rgba(255, 255, 255, 0.03) 62%,
        rgba(255, 255, 255, 0.08) 65%,
        rgba(255, 255, 255, 0.2) 67%,
        rgba(255, 255, 255, 0.45) 69%,
        rgba(255, 255, 255, 0.85) 70%,
        rgba(255, 255, 255, 0.85) 70.5%,
        rgba(255, 255, 255, 0.45) 71.5%,
        rgba(255, 255, 255, 0.2) 73%,
        rgba(255, 255, 255, 0.08) 75%,
        rgba(255, 255, 255, 0.03) 78%,
        transparent 82%
      )`:`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 58%,
        rgba(0, 0, 0, 0.02) 62%,
        rgba(0, 0, 0, 0.08) 65%,
        rgba(0, 0, 0, 0.2) 67%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.6) 70.5%,
        rgba(0, 0, 0, 0.4) 71.5%,
        rgba(0, 0, 0, 0.2) 73%,
        rgba(0, 0, 0, 0.08) 75%,
        rgba(0, 0, 0, 0.02) 78%,
        transparent 82%
      )`;return`
@property --beam-angle-${t} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-${t} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${t}"] {
  position: relative;
  border-radius: ${s}px;
  overflow: hidden;
}

[data-beam="${t}"][data-active] {
  animation:
    beam-spin-${t} ${i}s linear infinite,
    beam-fade-in-${t} 0.6s ease forwards;
}

[data-beam="${t}"][data-fading] {
  animation:
    beam-spin-${t} ${i}s linear infinite,
    beam-fade-out-${t} 0.5s ease forwards;
}

[data-beam="${t}"][data-active]::after,
[data-beam="${t}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${h}px;
  padding: ${o}px;
  clip-path: inset(0 round ${s}px);
  background: ${k},${z};
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${t}) * ${(n*x).toFixed(2)} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${$}
}

[data-beam="${t}"][data-active]::before,
[data-beam="${t}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${s}px;
  background: ${w};
  box-shadow: inset 0 0 9px 1px ${d};
  -webkit-mask-image:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${t}) * ${(l*x).toFixed(2)} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  clip-path: inset(0 round ${s}px);
  ${$}
}

[data-beam="${t}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${h}px;
  clip-path: inset(0 round ${s}px);
  background: ${j};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${o}px;
  filter: blur(8px) brightness(${m.toFixed(2)}) saturate(${u.toFixed(2)});
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${t}"][data-active] [data-beam-bloom],
[data-beam="${t}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${t}) * ${(c*x).toFixed(2)} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
}

@keyframes beam-spin-${t} {
  to { --beam-angle-${t}: 360deg; }
}

@keyframes beam-fade-in-${t} {
  to { --beam-opacity-${t}: 1; }
}

@keyframes beam-fade-out-${t} {
  from { --beam-opacity-${t}: 1; }
  to { --beam-opacity-${t}: 0; }
}
${y}
${aU(t)}
`}(e)})({id:v,borderRadius:P,borderWidth:E.borderWidth,duration:L,strokeOpacity:A.strokeOpacity,innerOpacity:A.innerOpacity,bloomOpacity:A.bloomOpacity,innerShadow:A.innerShadow,size:a,colorVariant:r,staticColors:T,brightness:I,saturation:_,hueRange:q,theme:O,hairlineOpacity:A.hairlineOpacity}),[v,P,E.borderWidth,L,A.strokeOpacity,A.innerOpacity,A.bloomOpacity,A.innerShadow,A.hairlineOpacity,a,r,T,I,_,q,O]),B=(0,n.useMemo)(()=>F?function(e,a,r,t,s){if("pulse-inner"!==e&&"pulse-outside"!==e)return null;let o=aG(e,a,r);return{oscillators:function(e,a){let{sp:r,dr:t,op:s,gh:o,bs:i,ss:n,ghs:l}=a;return[{prop:`--bw1-${e}`,a:1-r,b:1+1.1*r,period:.9*n,delay:0,unit:""},{prop:`--bh1-${e}`,a:1+.9*r,b:1-.85*r,period:1.26*n,delay:0,unit:""},{prop:`--bx1-${e}`,a:-t,b:.9*t,period:1.6*i,delay:0,unit:"px"},{prop:`--by1-${e}`,a:.55*t,b:-(.7*t),period:1.6*i,delay:0,unit:"px"},{prop:`--bw2-${e}`,a:1+r,b:1-.85*r,period:1.1*n,delay:0,unit:""},{prop:`--bh2-${e}`,a:1-.8*r,b:1+1.05*r,period:.81*n,delay:0,unit:""},{prop:`--bx2-${e}`,a:.8*t,b:-(.9*t),period:1.88*i,delay:0,unit:"px"},{prop:`--by2-${e}`,a:-t,b:.65*t,period:1.88*i,delay:0,unit:"px"},{prop:`--bw3-${e}`,a:1-.6*r,b:1+1.15*r,period:.98*n,delay:0,unit:""},{prop:`--bh3-${e}`,a:1+.75*r,b:1-r,period:1.4*n,delay:0,unit:""},{prop:`--bx3-${e}`,a:-(.6*t),b:t,period:1.45*i,delay:0,unit:"px"},{prop:`--by3-${e}`,a:-(.85*t),b:.45*t,period:1.45*i,delay:0,unit:"px"},{prop:`--bgh-${e}`,a:1-o,b:1+o,period:l,delay:0,unit:""},{prop:`--bop-tl-${e}`,a:1-s,b:1,period:i,delay:0,unit:""},{prop:`--bop-tr-${e}`,a:1-s,b:1,period:1.32*i,delay:.28*i,unit:""},{prop:`--bop-bl-${e}`,a:1-s,b:1,period:.84*i,delay:.55*i,unit:""},{prop:`--bop-br-${e}`,a:1-s,b:1,period:1.58*i,delay:.83*i,unit:""}]}(s,o),hue:t?null:{prop:`--beam-hue-${s}`,range:360,period:o.huePeriod,continuous:!0}}}(a,O,L,T,v):null,[F,a,O,L,q,T,v]);(0,n.useEffect)(()=>{var e;if(!B||!(w||N)||!S)return;let a=z.current;if(a&&!("u">typeof window&&null!=(e=window.matchMedia)&&e.call(window,"(prefers-reduced-motion: reduce)").matches)){let e;return e={el:a,config:B},aK.add(e),null==aV&&(aJ=0,aV=requestAnimationFrame(a1)),()=>{aK.delete(e),0===aK.size&&null!=aV&&(cancelAnimationFrame(aV),aV=null)}}},[B,w,N,S]);let G=(0,n.useCallback)(e=>{z.current=e,"function"==typeof y?y(e):y&&(y.current=e)},[y]),D={...f??{},"--beam-strength":Math.max(0,Math.min(1,m)),..."pulse-outside"===a?{"--pulse-glow-sx":R.x,"--pulse-glow-sy":R.y}:{}};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{children:U}),(0,o.jsxs)("div",{...$,ref:G,"data-beam":v,"data-active":w&&!N?"":void 0,"data-fading":N?"":void 0,"data-paused":!w||N||S?void 0:"",className:u,style:D,onAnimationEnd:H,children:[e,(0,o.jsx)("div",{"data-beam-bloom":!0})]})]})});function a5({active:e,children:a}){return(0,o.jsx)(a2,{className:"game-intro-beam",size:"md",colorVariant:"colorful",theme:"dark",strength:.85,active:e,children:a})}function a3({n:e}){return null===e||e<=0?null:(0,o.jsxs)("span",{className:"game-intro-alt-sub",children:[(0,o.jsx)("i",{className:"game-intro-alt-dot","aria-hidden":!0}),e," playing now"]})}e.s(["ArenaEntry",0,function({game:e,online:a,disabled:r,onOpen:t}){return(0,o.jsx)(a5,{active:!r,children:(0,o.jsxs)("button",{type:"button",className:"game-intro-alt",onClick:()=>{(0,aM.track)("arena_open",{game:e,online:a??0}),t()},disabled:r,children:[(0,o.jsx)(et.Users,{size:16,"aria-hidden":!0}),(0,o.jsxs)("span",{className:"game-intro-alt-copy",children:[(0,o.jsx)("span",{className:"game-intro-alt-name",children:"Play multiplayer"}),(0,o.jsx)(a3,{n:a})]}),(0,o.jsx)(aN.ChevronRight,{size:16,"aria-hidden":!0,className:"game-intro-alt-go"})]})})},"PlayingNow",0,a3,"useArenaEntry",0,e=>(0,m.useRoomEntry)(M,Z,e)],663160);var a8=e.i(966003);let a4=[{value:"public",label:"Public",rule:"Listed in the lobby. Anyone can join."},{value:"private",label:"Private",rule:"Hidden from the lobby. Friends join with a 6-digit code."}];function a6({pool:e,artists:a,niche:r,onNiche:t,visibility:s,onVisibility:l,onOpen:c,onPrivate:d,onBack:p}){let b=(0,n.useMemo)(()=>G(a),[a]),m=(0,n.useMemo)(()=>O(r,a),[r,a]),f=(0,n.useMemo)(()=>q(r,m),[r,m]),g=(0,n.useMemo)(()=>T(r,b),[r,b]),h=(0,n.useMemo)(()=>((e,a,r=H)=>D(e,a,r).length)(e,r,m),[e,r,m]),x=(0,n.useMemo)(()=>(function(e,a,r=H){let t={};for(let s of D(e,{...a,genres:[]},r))t[s.genre]=(t[s.genre]??0)+1;return t})(e,r,m),[e,r,m]),$=(0,n.useMemo)(()=>(function(e,a){let r={};for(let t of D(e,{...a,artists:[]}))for(let e of t.artistKeys)r[e]=(r[e]??0)+1;return r})(e,r),[e,r]),y=0===e.length,v=!y&&h<100,k=g.id.length>200,z="private"===s,w=(0,u.useOpenPrivate)(M,d);return(0,o.jsx)("div",{className:"game-intro",children:(0,o.jsx)("div",{className:"game-intro-body game-scroll",children:(0,o.jsxs)("div",{className:"game-intro-inner",children:[(0,o.jsxs)("div",{className:"game-intro-head game-rise",style:{"--i":0},children:[(0,o.jsx)("p",{className:"game-intro-title",children:"Create a game"}),(0,o.jsx)("p",{className:"game-intro-rule",children:z?"Pick the songs. Only people with the code can join.":"Pick the songs. Anyone can join the room."}),(0,o.jsxs)("button",{type:"button",className:"game-back-btn",onClick:p,"aria-label":"Back to the room list",children:[(0,o.jsx)(ay.ArrowLeft,{size:12,"aria-hidden":!0}),(0,o.jsx)("span",{children:"Rooms"})]})]}),(0,o.jsxs)("div",{className:"arena-make game-rise",style:{"--i":1},children:[(0,o.jsx)(a8.MusicSettingsPanel,{settings:f,onChange:e=>t({genres:e.genres,artists:Y(e.artists),from:e.yearFrom,to:e.yearTo,hits:e.hitsOnly,clean:!e.allowExplicit}),artists:a,genreCounts:x,artistCounts:$,loading:y,artistLimit:4}),(0,o.jsxs)("div",{className:"arena-visibility",children:[(0,o.jsx)("span",{className:"game-label",id:"arena-visibility-label",children:"Who can join"}),(0,o.jsx)("div",{className:"arena-tabs",role:"radiogroup","aria-labelledby":"arena-visibility-label",children:a4.map(e=>(0,o.jsx)("button",{type:"button",role:"radio",className:"arena-tab","aria-checked":e.value===s,onClick:()=>l(e.value),children:e.label},e.value))}),(0,o.jsx)("p",{className:"game-note",children:a4.find(e=>e.value===s)?.rule})]}),(0,o.jsxs)("button",{type:"button",className:"arena-make-go",onClick:()=>z?void w.open(g.id):c(g),disabled:y||v||k||w.busy,"aria-label":`${z?"Create private game":"Create game"}: ${g.name}, ${g.detail}`,children:[(0,o.jsxs)("span",{className:"arena-make-copy",children:[(0,o.jsx)("span",{className:"arena-make-name",children:w.busy?"Creating...":z?"Create private game":"Create game"}),(0,o.jsxs)("span",{className:"arena-make-detail",children:[g.name," · ",g.detail]})]}),(0,o.jsx)("span",{className:"arena-make-meta",children:y?"":`${h.toLocaleString()} songs`}),w.busy?(0,o.jsx)(i.Loader2,{className:"animate-spin",size:14,"aria-hidden":!0}):(0,o.jsx)(av.ArrowRight,{size:14,"aria-hidden":!0})]}),z&&w.problem&&(0,o.jsx)("p",{className:"game-note game-text-bad",role:"alert",children:w.problem}),v&&(0,o.jsxs)("p",{className:"game-note",children:["Needs ",100," songs. Widen the filters."]}),k&&(0,o.jsx)("p",{className:"game-note",children:"Too many filters for one room. Drop an artist or a genre."})]})]})})})}function a7({brand:e,counts:a,name:r,pool:t,artists:s,label:i,best:l,notice:c,onName:d,onJoin:p,onOpen:b,onPrivate:m,onBack:u}){let f=V(a,i),g=a?Z(a):null,[h,x]=(0,n.useState)(!1),[$,y]=(0,n.useState)(X),[v,k]=(0,n.useState)("public");return h?(0,o.jsx)(a6,{pool:t,artists:s,niche:$,onNiche:y,visibility:v,onVisibility:k,onOpen:b,onPrivate:m,onBack:()=>x(!1)}):(0,o.jsx)("div",{className:"game-intro",children:(0,o.jsx)("div",{className:"game-intro-body game-scroll",children:(0,o.jsxs)("div",{className:"game-intro-inner arena-lobby",children:[(0,o.jsxs)("div",{className:"game-intro-head game-rise",style:{"--i":0},children:[(0,o.jsx)(aw.Meter,{}),(0,o.jsx)("p",{className:"game-intro-title",children:e.name}),(0,o.jsx)("p",{className:"game-intro-rule",children:"Pick a room and play everyone in it."}),(0,o.jsxs)("button",{type:"button",className:"game-back-btn",onClick:u,"aria-label":"Leave multiplayer and play on your own",children:[(0,o.jsx)(ay.ArrowLeft,{size:12,"aria-hidden":!0}),(0,o.jsx)("span",{children:"Play on your own"})]})]}),(0,o.jsx)(re,{name:r,onName:d,best:l,style:{"--i":1}}),(0,o.jsxs)("div",{className:"arena-rooms game-rise",style:{"--i":2},children:[(0,o.jsxs)("div",{className:"arena-rooms-head",children:[(0,o.jsx)("span",{className:"game-label",children:"Rooms"}),(0,o.jsx)(a3,{n:g})]}),c&&(0,o.jsx)("p",{className:"game-note game-text-bad",children:c}),f.map(e=>{let r=a?.[e.id]??0,t=r>=50;return(0,o.jsxs)("button",{type:"button",className:"arena-room-row",onClick:()=>p(e),disabled:t,"aria-label":t?`${e.name}, full`:0===r?`Join ${e.name}, nobody here yet`:`Join ${e.name}, ${r} playing`,children:[(0,o.jsxs)("span",{className:"arena-room-copy",children:[(0,o.jsx)("span",{className:"arena-room-name",children:e.name}),e.detail&&(0,o.jsx)("span",{className:"arena-room-detail",children:e.detail})]}),(0,o.jsxs)("span",{className:"arena-count-badge","data-live":r>0&&!t,"data-full":t,children:[(0,o.jsx)(et.Users,{size:12,"aria-hidden":!0}),null===a?"--":t?"Full":0===r?"Be first":`${r} playing`]}),(0,o.jsxs)("span",{className:"arena-enter","aria-hidden":!0,children:[t?"Full":"Join",!t&&(0,o.jsx)(av.ArrowRight,{size:13})]})]},e.id)}),(0,o.jsxs)("button",{type:"button",className:"arena-make-open",onClick:()=>x(!0),children:[(0,o.jsx)("span",{className:"arena-make-copy",children:(0,o.jsx)("span",{className:"arena-make-name",children:"Create a game"})}),(0,o.jsx)(eH.Plus,{size:16,"aria-hidden":!0})]}),(0,o.jsx)(a9,{onPrivate:m})]})]})})})}function a9({onPrivate:e}){let{draft:a,setDraft:r,code:t,busy:s,problem:n,submit:l}=(0,u.useJoinCode)(M,e);return(0,o.jsxs)("form",{className:"arena-code",onSubmit:e=>{e.preventDefault(),l()},children:[(0,o.jsx)("label",{className:"game-label",htmlFor:"arena-code-field",children:"Join a private room"}),(0,o.jsxs)("div",{className:"arena-namerow",children:[(0,o.jsx)("input",{id:"arena-code-field",className:"game-field arena-namefield arena-codefield",value:a,onChange:e=>r(e.target.value),placeholder:"6-digit code",inputMode:"numeric",autoComplete:"off",spellCheck:!1,enterKeyHint:"go","aria-invalid":null!==n,"aria-describedby":n?"arena-code-problem":void 0,"data-bad":null!==n}),(0,o.jsx)("button",{type:"submit",className:`game-btn arena-code-go ${t?"game-btn-primary":"game-btn-ghost"}`,disabled:s,"aria-label":s?"Looking for the room":"Join the room with this code",children:s?(0,o.jsx)(i.Loader2,{className:"animate-spin",size:14,"aria-hidden":!0}):"Join"})]}),n&&(0,o.jsx)("p",{id:"arena-code-problem",className:"game-note game-text-bad",role:"alert",children:n})]})}function re({name:e,onName:a,best:r,style:t}){let{draft:s,setDraft:i,touched:n,problem:l,dirty:c,commit:p,shuffle:b,onKeyDown:m}=(0,aj.useRoomName)(e,a);return(0,o.jsxs)("div",{className:"arena-you game-rise",style:t,children:[(0,o.jsxs)("div",{className:"arena-youhead",children:[(0,o.jsx)("span",{className:"game-label",children:"Display name"}),r>0&&(0,o.jsxs)("span",{className:"game-intro-alt-sub",children:["Personal best: ",r.toLocaleString()]})]}),(0,o.jsxs)("div",{className:"arena-namerow",children:[(0,o.jsx)("input",{className:"game-field arena-namefield",value:s,onChange:e=>i(e.target.value),onKeyDown:m,maxLength:d.NAME_MAX,"aria-label":"Your name in the arena","aria-invalid":n&&null!==l,"data-bad":n&&null!==l,autoComplete:"off",autoCapitalize:"off",spellCheck:!1,enterKeyHint:"done"}),(0,o.jsx)("button",{type:"button",className:`game-btn ${c&&!l?"game-btn-primary":"game-btn-ghost"}`,onClick:c?p:b,"aria-label":c?"Save name":"Pick a random name",children:c?(0,o.jsx)(ak.Check,{size:14,"aria-hidden":!0}):(0,o.jsx)(az.Shuffle,{size:14,"aria-hidden":!0})})]}),n&&l&&(0,o.jsx)("p",{className:"game-note game-text-bad",children:d.NAME_HELP[l]})]})}let ra=F(X);e.s(["Arena",0,function({brand:e,pool:a,artists:r,initialRoom:t,standalone:s=!1,onExit:g}){let h=(0,m.useHydrated)(),[x,$]=(0,n.useState)(d.readArenaName),[v,k]=(0,n.useState)(()=>t?B(t):null),[z,w]=(0,n.useState)(null!==v),[N,S]=(0,n.useState)(null),[C,X]=(0,n.useState)(()=>(0,c.readBest)(j)),W=(0,n.useCallback)(e=>X((0,c.keepBest)(j,e)),[]),R=(0,f.useRoomCounts)(M,null===v),Y=(0,n.useMemo)(()=>G(r),[r]),H=(0,n.useCallback)(e=>{let a=B(e,Y);return!!a?.code&&(S(null),w(!0),k(a),!0)},[Y]),O=(0,u.useInviteCode)(M,t,e=>{e.ok&&H(e.id)||S(b.PRIVATE_HELP[e.ok?"stale":e.miss])}),E=(0,n.useMemo)(()=>v&&z?B(v.id,Y)??v:v,[z,Y,v]);(0,n.useEffect)(()=>(v?.code?(0,p.holdRoomParam)(v.code):v||O||(0,p.dropRoomParam)(),p.dropRoomParam),[O,v]);let F=(0,n.useCallback)(e=>{$(e),(0,d.writeArenaName)(e)},[]),P=(0,n.useCallback)(e=>{let a=e;if((R?.[e.id]??0)>=50){let r=A(e.id)?null:K(R);if(!r)return void S("That room just filled up. Try another below.");a=r}S(null),w(!1),k(a)},[R]),L=(0,n.useCallback)(e=>P(e.id===ra?y.find(e=>((R??{})[e.id]??0)===0)??null??e:e),[R,P]),_=(0,n.useCallback)(()=>k(null),[]),I=(0,n.useCallback)(()=>{S(v?.code?"That private room is full.":"That room filled up. An open one is ready below."),k(null)},[v]);return!h||O?(0,o.jsx)(l.GameCard,{game:e.game,children:(0,o.jsx)("div",{className:"game-stack items-center",role:"status","aria-label":"Loading",children:(0,o.jsx)(i.Loader2,{className:"animate-spin",size:20,"aria-hidden":!0})})}):E?(0,o.jsx)(a$,{brand:e,room:E,name:x,pool:a,artists:r,best:C,onScore:W,onLeave:s?_:g,onFull:I},E.id):(0,o.jsx)(l.GameCard,{game:e.game,children:(0,o.jsx)(a7,{brand:e,counts:R,name:x,pool:a,artists:r,label:Y,best:C,notice:N,onName:F,onJoin:P,onOpen:L,onPrivate:H,onBack:g})})}],767223)}]);