(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,42920,61005,e=>{"use strict";var t=e.i(43476),a=e.i(71645);let r={aurora:{style:"streak",colors:["#f4efe9","#e9c2b8","#c2433f","#2a1e2a","#22395e","#6f97c2","#e5edf4"],scale:.7,warp:1.4,angle:-.62,gloss:.18,veins:0},ember:{style:"marble",colors:["#07090c","#16252c","#3d5f68","#1a1416","#a3201a","#ef4a2b","#ff8a5c"],scale:.62,warp:3.2,angle:-.5,gloss:.55,veins:.6},dusk:{style:"marble",colors:["#120c18","#3e2850","#8f6c9c","#2b1a24","#b3502f","#eab08a","#fbe7d2"],scale:.75,warp:3.6,angle:.8,gloss:.5,veins:.5},glacier:{style:"streak",colors:["#f7f8fa","#d9e2ea","#9fb4c7","#e8edf2","#bccbd8","#ffffff"],scale:.7,warp:1.6,angle:.35,gloss:.25,veins:0},verdant:{style:"marble",colors:["#070b08","#173024","#4f7a5a","#141812","#a7843a","#e9cf87","#fbf3d6"],scale:.7,warp:3.4,angle:2.1,gloss:.5,veins:.5}};function n(e){let t=e>>>0;return()=>{let e=t=t+0x6d2b79f5>>>0;return e=Math.imul(e^e>>>15,1|e),(((e^=e+Math.imul(e^e>>>7,61|e))^e>>>14)>>>0)/0x100000000}}function o(e){let t=0x811c9dc5;for(let a=0;a<e.length;a++)t=Math.imul(t^e.charCodeAt(a),0x1000193);return t>>>0}let i=new Map,s=[],l=!1;function f({art:e,seed:o,w:d,h:c,density:g,priority:u,className:p}){let h=a.useRef(null),[m,x]=a.useState(!1),b=JSON.stringify("string"==typeof e?r[e]:e),y=Math.round(d*g),v=Math.round(c*g);return a.useEffect(()=>{var e;let t,a,r=!0;return x(!1),(e=JSON.parse(b),t=JSON.stringify([e,o,y,v]),!(a=i.get(t))&&(a=new Promise(t=>{let a,r,i,f,d,c,g,p,h,m,x,b,k,w,j,N,M,C,S,z,A,E,R,P,_,L,O=s.length;for(;O>1&&s[O-1].priority>u;)O--;s.splice(O,0,{job:(a=Math.max(1,Math.round(y)),r=Math.max(1,Math.round(v)),f=(i=e.colors.length>=2?e.colors:["#111111","#eeeeee"]).map((e,t)=>{let a,r;return{t:t/(i.length-1),c:(3===(a=e.trim().replace(/^#/,"")).length&&(a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]),[(r=/^[0-9a-f]{6}$/i.test(a)?parseInt(a,16):8421504)>>16&255,r>>8&255,255&r])}}),d=e.scale??.7,c=e.warp??3,g=e.gloss??.4,p=e.veins??0,h="streak"===e.style,m=function(e){let t=n(e),a=new Uint8Array(512),r=new Float32Array(512),o=[];for(let e=0;e<256;e++)o.push(e);for(let e=255;e>0;e--){let a=Math.floor(t()*(e+1)),r=o[e];o[e]=o[a],o[a]=r}for(let e=0;e<512;e++)a[e]=o[255&e];for(let e=0;e<256;e++){let a=t()*Math.PI*2;r[2*e]=Math.cos(a),r[2*e+1]=Math.sin(a)}let i=(e,t)=>{let n=Math.floor(e),o=Math.floor(t),i=e-n,s=t-o,l=255&n,f=255&o,d=2*a[l+a[f]],c=2*a[l+1+a[f]],g=2*a[l+a[f+1]],u=2*a[l+1+a[f+1]],p=r[d]*i+r[d+1]*s,h=r[c]*(i-1)+r[c+1]*s,m=r[g]*i+r[g+1]*(s-1),x=r[u]*(i-1)+r[u+1]*(s-1),b=i*i*i*(i*(6*i-15)+10);return p+b*(h-p)+s*s*s*(s*(6*s-15)+10)*(m-p+b*(x-m-h+p))};return(e,t,a)=>{let r=0,n=.5;for(let o=0;o<a;o++){r+=n*i(e,t);let a=1.6*e+1.2*t+7.1;t=-1.2*e+1.6*t+3.3,e=a,n*=.5}return r}}(977*o+13),b=50*(x=n(o+1))(),k=50*x(),j=Math.cos(w=(e.angle??0)+(x()-.5)*.5),N=Math.sin(w),M=Math.min(a,r),z=new Float32Array((C=Math.ceil(a/2)+3)*(S=Math.ceil(r/2)+3)),A=new Float32Array(C*S),E=new Float32Array(a*r),R=new Float32Array(a*r),P=new Uint8ClampedArray(a*r*4),_=0,L=e=>{for(let t=0;t<C;t++){let n=((t-1)*2-a/2)/M,o=((e-1)*2-r/2)/M,i=(n*j-o*N)*d,s=(n*N+o*j)*d;h&&(i*=.14,s*=2.2);let l=m(i+=b,s+=k,3),f=m(i+5.2,s+1.3,3),g=m(i+c*l+1.7,s+c*f+9.2,3),u=m(i+c*l+8.3,s+c*f+2.8,3);z[e*C+t]=m(i+c*g,s+c*u,4),A[e*C+t]=Math.sqrt(l*l+f*f)}},{width:a,height:r,pixels:P,step:e=>{if(_>=S)return!0;let t=Math.min(S,_+Math.max(1,e));for(;_<t;)L(_++);return!(_<S)&&((()=>{let e=(e,t,a,r)=>(-e+9*t+9*a-r)/16,t=new Float32Array(a*S);for(let r=0;r<S;r++){let n=r*C;for(let o=0;o<a;o++){let i=(o>>1)+1;t[r*a+o]=1&o?e(z[n+i-1],z[n+i],z[n+i+1],z[n+i+2]):z[n+i]}}for(let n=0;n<r;n++){let r=(n>>1)+1;for(let o=0;o<a;o++){E[n*a+o]=1&n?e(t[(r-1)*a+o],t[r*a+o],t[(r+1)*a+o],t[(r+2)*a+o]):t[r*a+o];let i=(o>>1)+1,s=A[r*C+i],l=1&o?(s+A[r*C+i+1])/2:s,f=1&n?1&o?(A[(r+1)*C+i]+A[(r+1)*C+i+1])/2:A[(r+1)*C+i]:l;R[n*a+o]=(l+f)/2}}})(),(()=>{let e=[],t=Math.max(1,Math.floor(E.length/4096));for(let a=0;a<E.length;a+=t)e.push(E[a]);e.sort((e,t)=>e-t);let n=e[Math.floor(.02*e.length)],o=1/(e[Math.floor(.98*e.length)]-n||1),i=o*M*.012;for(let e=0;e<r;e++)for(let t=0;t<a;t++){let s=e*a+t,l=(E[s]-n)*o;l=l<0?0:l>1?1:l;let d=1;for(;d<f.length-1&&f[d].t<l;)d++;let c=f[d-1],u=f[d],h=(l-c.t)/(u.t-c.t||1);h=(h=h<0?0:h>1?1:h)*h*(3-2*h);let m=(E[t<a-1?s+1:s]-E[t>0?s-1:s])*i,x=(E[e<r-1?s+a:s]-E[e>0?s-a:s])*i,b=(-(-.55*m)- -.65*x+.52)/Math.sqrt(m*m+x*x+1),y=Math.pow(b>0?b:0,24)*g*255,v=(.82+.28*b)*(1+.035*Math.sin(150*l+24*R[s]))*(1-p*Math.max(0,1-14*Math.abs(R[s]-.42))*.6);P[4*s]=(c.c[0]+(u.c[0]-c.c[0])*h)*v+y,P[4*s+1]=(c.c[1]+(u.c[1]-c.c[1])*h)*v+y,P[4*s+2]=(c.c[2]+(u.c[2]-c.c[2])*h)*v+y,P[4*s+3]=255}})(),!0)}}),priority:u,done:t}),function(){if(l)return;l=!0;let e=()=>{let t=performance.now()+7;for(;s.length&&performance.now()<t;){let e=s[0];if(e.job.step(4)){s.shift();let t=document.createElement("canvas");t.width=e.job.width,t.height=e.job.height,t.getContext("2d")?.putImageData(new ImageData(e.job.pixels,t.width,t.height),0,0),e.done(t)}}s.length?requestAnimationFrame(e):l=!1};requestAnimationFrame(e)}()}),i.set(t,a)),a).then(e=>{let t=h.current;r&&t&&(t.width=e.width,t.height=e.height,t.getContext("2d")?.drawImage(e,0,0),x(!0))}),()=>{r=!1}},[b,o,y,v,u]),(0,t.jsx)("canvas",{ref:h,"aria-hidden":"true",className:p,"data-ready":m||void 0,style:{width:d,height:c,maxWidth:"none"}})}let d="M0 56A22 22 0 0 1 22 34L146 34C170 34 172 0 198 0L318 0A22 22 0 0 1 340 22L340 250A22 22 0 0 1 318 272L22 272A22 22 0 0 1 0 250Z",c="M0 22A22 22 0 0 1 22 0L118 0C144 0 146 32 172 32L318 32A22 22 0 0 1 340 54L340 176A22 22 0 0 1 318 198L22 198A22 22 0 0 1 0 176Z",g=e=>{var t;let a,r;return e+" "+(t="элементов",r=(a=Math.abs(e)%100)%10,a>10&&a<20?t:1===r?"элемент":r>=2&&r<=4?"элемента":t)},u=[{name:"Cover — final",meta:"PNG · 4.8 MB",art:"ember"},{name:"Moodboard",meta:"24 images",art:"dusk"},{name:"Brief.pdf",meta:"PDF · 1.2 MB"}],p=`
.gf-root {
  --gf-px: 0;
  --gf-py: 0;
  --gf-ease: cubic-bezier(.2, .8, .2, 1);
  --gf-spring: cubic-bezier(.34, 1.36, .5, 1);
  --gf-hinge: 0deg;
  --gf-lift: 42px;
  --gf-spread: 0px;
  --gf-fan: 0deg;
  --gf-stack: 15px;
  --gf-ink: #141416;
  --gf-ink-soft: rgba(20, 20, 22, .55);
  position: relative;
  display: inline-block;
  flex: none;
  vertical-align: top;
  font-family: var(--gf-font, ui-sans-serif), system-ui, -apple-system, "SF Pro Text", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  isolation: isolate;
}
.gf-root[data-tone="dark"] { --gf-ink: #f5f5f7; --gf-ink-soft: rgba(245, 245, 247, .58); }
.gf-root:hover, .gf-root:focus-within { --gf-hinge: -11deg; --gf-lift: -34px; --gf-spread: 8px; --gf-fan: 1.4deg; --gf-stack: 10px; }
.gf-root[data-peek]:hover, .gf-root[data-open] { --gf-hinge: -24deg; --gf-lift: -96px; --gf-spread: 40px; --gf-fan: 5deg; --gf-stack: 30px; }

.gf-stage {
  position: absolute;
  left: 0;
  top: 0;
  width: 340px;
  height: 272px;
  transform-origin: 0 0;
}
.gf-tilt {
  position: absolute;
  inset: 0;
  transform: perspective(1400px) rotateX(calc(var(--gf-py) * -3deg)) rotateY(calc(var(--gf-px) * 4deg));
  transition: transform .9s var(--gf-ease);
}

.gf-shadow {
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: -6px;
  height: 60px;
  border-radius: 40px;
  background: rgba(16, 18, 24, .34);
  filter: blur(22px);
  transform: translateX(calc(var(--gf-px) * -8px));
  transition: transform .9s var(--gf-ease), opacity .9s var(--gf-ease);
}
.gf-root[data-tone="dark"] .gf-shadow { background: rgba(0, 0, 0, .62); }

.gf-back {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(180deg, #f3f3f4 0%, #e3e3e6 100%);
}
.gf-root[data-tone="dark"] .gf-back { background: linear-gradient(180deg, #2a2a2e 0%, #121214 100%); }
.gf-art {
  position: absolute;
  left: -12px;
  top: -12px;
  max-width: none;
  object-fit: cover;
  transform: translate(calc(var(--gf-px) * -7px), calc(var(--gf-py) * -6px)) scale(1.02);
  transition: transform 1.1s var(--gf-ease), opacity 1.2s var(--gf-ease), filter 1.2s var(--gf-ease);
}
canvas.gf-art { opacity: 0; filter: blur(14px) saturate(.6); }
canvas.gf-art[data-ready] { opacity: 1; filter: none; }
.gf-back-sheen {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, .22) 0%, rgba(255, 255, 255, 0) 22%),
    radial-gradient(120% 80% at 80% 0%, rgba(255, 255, 255, .16), rgba(255, 255, 255, 0) 60%);
  pointer-events: none;
}

.gf-rim {
  position: absolute;
  left: 0;
  top: 0;
  max-width: none;
  overflow: visible;
  pointer-events: none;
  fill: none;
}
.gf-back-rim { width: 340px; height: 272px; }
.gf-back-rim path { stroke: rgba(255, 255, 255, .45); stroke-width: 1; }
.gf-root[data-tone="dark"] .gf-back-rim path { stroke: rgba(255, 255, 255, .16); }

/* ---- files ---------------------------------------------------------------- */
.gf-files {
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
  /* nothing hangs out of the bottom of the pocket, however tall the stack */
  clip-path: inset(-400px -400px 10px -400px);
}
.gf-sheet-slot { display: contents; }
.gf-sheet {
  all: unset;
  box-sizing: border-box;
  position: absolute;
  left: 34px;
  top: 96px;
  width: 272px;
  height: 184px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  pointer-events: auto;
  background: linear-gradient(180deg, #ffffff 0%, #f2f2f0 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, .9),
    0 0 0 .5px rgba(0, 0, 0, .1),
    0 10px 26px -8px rgba(10, 12, 20, .28);
  transform-origin: 50% 100%;
  transform:
    translate(calc(var(--gf-jx) + var(--gf-slot) * var(--gf-spread)), calc(var(--gf-lift) + var(--gf-depth) * var(--gf-stack) * -1))
    rotate(calc(var(--gf-jr) + var(--gf-slot) * var(--gf-fan)));
  transition:
    transform .75s var(--gf-spring) calc(var(--gf-depth) * 40ms),
    box-shadow .4s var(--gf-ease),
    translate .9s var(--gf-ease),
    opacity .9s var(--gf-ease);
}
.gf-root[data-tone="dark"] .gf-sheet { background: linear-gradient(180deg, #2c2c30 0%, #1c1c1f 100%); box-shadow: inset 0 1px 0 rgba(255, 255, 255, .14), 0 0 0 .5px rgba(255, 255, 255, .08), 0 12px 28px -8px rgba(0, 0, 0, .7); }
.gf-sheet--art { background: #1a1a1d; }
.gf-root[data-open] .gf-sheet:hover,
.gf-root[data-peek]:hover .gf-sheet:hover,
.gf-root[data-open] .gf-sheet:focus-visible {
  transform:
    translate(calc(var(--gf-jx) + var(--gf-slot) * var(--gf-spread)), calc(var(--gf-lift) + var(--gf-depth) * var(--gf-stack) * -1 - 18px))
    rotate(calc(var(--gf-slot) * var(--gf-fan) * .6));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .9), 0 0 0 .5px rgba(0, 0, 0, .1), 0 22px 40px -12px rgba(10, 12, 20, .42);
  transition-delay: 0s;
}
.gf-sheet:focus-visible { outline: 2px solid #4c8dff; outline-offset: 2px; }
.gf-sheet-art {
  position: absolute;
  left: 0;
  top: 0;
  width: 272px;
  height: 184px;
  max-width: none;
  object-fit: cover;
  transition: opacity .9s var(--gf-ease), filter .9s var(--gf-ease);
}
canvas.gf-sheet-art { opacity: 0; filter: blur(10px); }
canvas.gf-sheet-art[data-ready] { opacity: 1; filter: none; }
.gf-sheet--art::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(180deg, rgba(0, 0, 0, .42) 0%, rgba(0, 0, 0, 0) 34%);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .2);
  pointer-events: none;
}
.gf-sheet-head {
  position: absolute;
  left: 14px;
  right: 14px;
  top: 11px;
  z-index: 1;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  white-space: nowrap;
}
.gf-sheet-name {
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12.5px;
  font-weight: 560;
  letter-spacing: -.005em;
  color: #18181b;
}
.gf-sheet-meta {
  flex: none;
  font-family: var(--gf-mono, ui-monospace), "SF Mono", SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 10px;
  letter-spacing: .02em;
  color: rgba(24, 24, 27, .5);
}
.gf-root[data-tone="dark"] .gf-sheet-name, .gf-sheet--art .gf-sheet-name { color: #fafafa; }
.gf-root[data-tone="dark"] .gf-sheet-meta, .gf-sheet--art .gf-sheet-meta { color: rgba(250, 250, 250, .66); }
.gf-lines {
  position: absolute;
  left: 14px;
  right: 14px;
  top: 40px;
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.gf-lines i {
  display: block;
  height: 5px;
  border-radius: 3px;
  background: rgba(24, 24, 27, .08);
}
.gf-lines i:first-child { height: 9px; margin-bottom: 4px; background: rgba(24, 24, 27, .14); }
.gf-root[data-tone="dark"] .gf-lines i { background: rgba(255, 255, 255, .08); }
.gf-root[data-tone="dark"] .gf-lines i:first-child { background: rgba(255, 255, 255, .16); }

.gf-sheet--drop { animation: gf-drop .85s var(--gf-ease) both; }
@keyframes gf-drop {
  0% { translate: 0 -190px; rotate: -9deg; opacity: 0; }
  35% { opacity: 1; }
  72% { translate: 0 10px; rotate: 1deg; }
  100% { translate: 0 0; rotate: 0deg; opacity: 1; }
}

/* ---- front glass ----------------------------------------------------------- */
.gf-front {
  position: absolute;
  left: 0;
  top: 74px;
  width: 340px;
  height: 198px;
  z-index: 10;
  -webkit-backdrop-filter: blur(22px) saturate(1.5);
  backdrop-filter: blur(22px) saturate(1.5);
  transform-origin: 50% 100%;
  transform: perspective(760px) rotateX(var(--gf-hinge));
  transition: transform .8s var(--gf-spring), translate 1s var(--gf-ease), opacity 1s var(--gf-ease);
}
.gf-front--bump { animation: gf-bump .7s var(--gf-ease) .38s both; }
@keyframes gf-bump {
  0% { scale: 1; }
  35% { scale: 1.018 .975; }
  70% { scale: .996 1.006; }
  100% { scale: 1; }
}
.gf-tint {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, .16) 0%, rgba(255, 255, 255, .5) 42%, rgba(252, 252, 252, .93) 100%);
}
.gf-root[data-tone="dark"] .gf-tint {
  background: linear-gradient(180deg, rgba(18, 18, 20, .18) 0%, rgba(14, 14, 16, .62) 46%, rgba(8, 8, 10, .94) 100%);
}
.gf-spec {
  position: absolute;
  inset: 0;
  background: radial-gradient(260px 200px at calc(50% + var(--gf-px) * 46%) calc(30% + var(--gf-py) * 40%), rgba(255, 255, 255, .5), rgba(255, 255, 255, 0) 70%);
  mix-blend-mode: soft-light;
  opacity: .9;
  transition: background-position .6s var(--gf-ease);
  pointer-events: none;
}
.gf-root[data-tone="dark"] .gf-spec { mix-blend-mode: screen; opacity: .16; }
.gf-front-rim { width: 340px; height: 198px; }
.gf-front-rim path { stroke-width: 2.4; transition: stroke-width .3s var(--gf-ease); }
.gf-root[data-tone="dark"] .gf-front-rim { opacity: .55; }

.gf-hit {
  all: unset;
  position: absolute;
  inset: 0;
  z-index: 1;
  cursor: pointer;
}
.gf-hit:focus-visible ~ .gf-label .gf-title { text-decoration: underline; text-decoration-thickness: 1.5px; text-underline-offset: 4px; }
.gf-front:has(.gf-hit:focus-visible) .gf-front-rim path { stroke-width: 5; }

.gf-label {
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 200px;
  pointer-events: none;
  color: var(--gf-ink);
}
.gf-root[data-place="bottom-left"] .gf-label { left: 28px; bottom: 32px; }
.gf-root[data-place="top-left"] .gf-label { left: 28px; top: 34px; }
.gf-root[data-place="top-right"] .gf-label { right: 32px; top: 52px; align-items: flex-start; }
.gf-title {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -.012em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.gf-meta {
  font-family: var(--gf-mono, ui-monospace), "SF Mono", SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 12px;
  letter-spacing: .03em;
  color: var(--gf-ink-soft);
  white-space: nowrap;
  animation: gf-roll .5s var(--gf-ease) both;
}
@keyframes gf-roll {
  from { opacity: 0; translate: 0 7px; filter: blur(3px); }
  to { opacity: 1; translate: 0 0; filter: blur(0); }
}

/* ---- the key: + or \xb7\xb7\xb7 ------------------------------------------------------ */
.gf-key {
  all: unset;
  box-sizing: border-box;
  position: absolute;
  right: 22px;
  bottom: 22px;
  z-index: 12;
  width: 58px;
  height: 58px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: transform .35s var(--gf-spring), box-shadow .35s var(--gf-ease), background .35s var(--gf-ease);
}
.gf-key:hover { transform: translateY(-2px); }
.gf-key:active { transform: translateY(0) scale(.93); transition-duration: .12s; }
.gf-key:focus-visible { outline: 2px solid #4c8dff; outline-offset: 3px; }
.gf-key--add {
  color: #fff;
  background: radial-gradient(120% 90% at 50% 0%, #3a3a3f 0%, #121214 55%, #050506 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, .22),
    inset 0 -3px 8px rgba(0, 0, 0, .7),
    0 0 0 1px rgba(0, 0, 0, .75),
    0 14px 22px -8px rgba(0, 0, 0, .55),
    0 3px 6px -2px rgba(0, 0, 0, .35);
}
.gf-root[data-tone="dark"] .gf-key--add {
  color: #111113;
  background: radial-gradient(120% 90% at 50% 0%, #ffffff 0%, #ececee 55%, #d2d2d6 100%);
  box-shadow: inset 0 1px 0 #fff, inset 0 -3px 8px rgba(0, 0, 0, .14), 0 0 0 1px rgba(0, 0, 0, .4), 0 14px 22px -8px rgba(0, 0, 0, .7);
}
.gf-key--more {
  color: #111113;
  background: linear-gradient(180deg, rgba(255, 255, 255, .92) 0%, rgba(226, 226, 230, .82) 100%);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow:
    inset 0 1px 0 #fff,
    inset 0 -2px 4px rgba(0, 0, 0, .06),
    0 0 0 1px rgba(0, 0, 0, .16),
    0 10px 18px -8px rgba(0, 0, 0, .3);
}
.gf-root[data-tone="dark"] .gf-key--more {
  color: #f5f5f7;
  background: linear-gradient(180deg, rgba(255, 255, 255, .16) 0%, rgba(255, 255, 255, .06) 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .22), 0 0 0 1px rgba(255, 255, 255, .1), 0 10px 18px -8px rgba(0, 0, 0, .6);
}
.gf-key--more[aria-expanded="true"] { transform: scale(.96); }
.gf-glyph { display: block; max-width: none; fill: none; stroke: currentColor; stroke-linecap: round; }
.gf-glyph--plus { width: 26px; height: 26px; stroke-width: 1.6; animation: gf-turn .6s var(--gf-spring); }
.gf-glyph--more { width: 30px; height: 12px; stroke-width: 1.7; }
@keyframes gf-turn { from { rotate: -90deg; } to { rotate: 0deg; } }

/* ---- menu ------------------------------------------------------------------- */
.gf-menu {
  position: absolute;
  right: 22px;
  bottom: 90px;
  z-index: 20;
  min-width: 176px;
  padding: 6px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  background: rgba(252, 252, 253, .72);
  -webkit-backdrop-filter: blur(24px) saturate(1.6);
  backdrop-filter: blur(24px) saturate(1.6);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .9), 0 0 0 .5px rgba(0, 0, 0, .14), 0 24px 48px -16px rgba(10, 12, 20, .4);
  transform-origin: 100% 100%;
  opacity: 0;
  visibility: hidden;
  transform: translateY(6px) scale(.94);
  transition: opacity .2s var(--gf-ease), transform .32s var(--gf-spring), visibility 0s .32s;
}
.gf-menu[data-open] { opacity: 1; visibility: visible; transform: none; transition-delay: 0s; }
.gf-root[data-tone="dark"] .gf-menu { background: rgba(30, 30, 34, .72); box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 0 0 .5px rgba(255, 255, 255, .1), 0 24px 48px -16px rgba(0, 0, 0, .8); }
.gf-menu-item {
  all: unset;
  box-sizing: border-box;
  padding: 9px 12px;
  border-radius: 10px;
  font-size: 13.5px;
  font-weight: 450;
  color: #18181b;
  cursor: pointer;
}
.gf-root[data-tone="dark"] .gf-menu-item { color: #f4f4f5; }
.gf-menu-item:hover, .gf-menu-item:focus-visible { background: rgba(24, 24, 27, .07); }
.gf-root[data-tone="dark"] .gf-menu-item:hover, .gf-root[data-tone="dark"] .gf-menu-item:focus-visible { background: rgba(255, 255, 255, .09); }
.gf-menu-item--danger { color: #d92d20; }
.gf-root[data-tone="dark"] .gf-menu-item--danger { color: #ff6b5e; }

/* ---- entrance: the folder assembles itself ---------------------------------- */
.gf-root:not([data-entered]) .gf-back,
.gf-root:not([data-entered]) .gf-back-rim { translate: 0 22px; opacity: 0; }
.gf-root:not([data-entered]) .gf-sheet { translate: 0 -120px; opacity: 0; }
.gf-root:not([data-entered]) .gf-front { translate: 0 46px; opacity: 0; }
.gf-root:not([data-entered]) .gf-key { opacity: 0; scale: .6; }
.gf-root:not([data-entered]) .gf-shadow { opacity: 0; }
.gf-back, .gf-back-rim { transition: translate 1s var(--gf-ease), opacity .9s var(--gf-ease); }
.gf-root[data-entered] .gf-sheet { transition-delay: calc(var(--gf-depth) * 40ms), 0s, calc(.18s + var(--gf-depth) * 90ms), calc(.18s + var(--gf-depth) * 90ms); }
.gf-root[data-entered] .gf-front { transition-delay: 0s, .42s, .42s; }
.gf-key { transition: transform .35s var(--gf-spring), box-shadow .35s var(--gf-ease), opacity .6s var(--gf-ease) .7s, scale .7s var(--gf-spring) .7s; }

@media (prefers-reduced-motion: reduce) {
  .gf-root *, .gf-root *::before, .gf-root *::after {
    transition-duration: 0s !important;
    transition-delay: 0s !important;
    animation: none !important;
  }
  .gf-tilt { transform: none; }
}
`;e.s(["ArtCanvas",0,f,"default",0,function({label:e="My Files",meta:r,tone:i="light",art:s="aurora",seed:l=3,image:h,files:m=u,action:x="add",onAdd:b,onFilesChange:y,menu:v=[],labelPlacement:k="bottom-left",open:w,defaultOpen:j=!1,onOpenChange:N,onFileSelect:M,width:C=340,appear:S=!0,appearDelay:z=0,itemsLabel:A=g,peek:E=!1,className:R,style:P}){let _=a.useId().replace(/:/g,""),L=a.useRef(null),O=a.useRef(null),T=a.useRef(null),F=a.useRef(null),$=a.useRef(null),[I,B]=a.useState(m),D=a.useRef(m.map((e,t)=>t)),K=a.useRef(m.length),[U,q]=a.useState(null),[W,X]=a.useState(0),[Y,H]=a.useState(j),J=w??Y,Z=a.useCallback(e=>{void 0===w&&H(e),N?.(e)},[w,N]),[G,V]=a.useState(!1),[Q,ee]=a.useState(!S),et=C/340,ea=Math.min(1.5,Math.max(1,window.devicePixelRatio||1))*et;a.useEffect(()=>{if(!S)return;let e=L.current;if(!e||"u"<typeof IntersectionObserver)return void ee(!0);let t=0,a=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(a.disconnect(),t=window.setTimeout(()=>ee(!0),z))},{threshold:.25});return a.observe(e),()=>{a.disconnect(),window.clearTimeout(t)}},[S,z]),a.useEffect(()=>{let e=L.current;if(!e)return;let t=0,a=0,r=0,n=()=>{t=0,e.style.setProperty("--gf-px",a.toFixed(3)),e.style.setProperty("--gf-py",r.toFixed(3))},o=o=>{if("touch"===o.pointerType)return;let i=e.getBoundingClientRect();a=(o.clientX-i.left)/i.width*2-1,r=(o.clientY-i.top)/i.height*2-1,t||(t=requestAnimationFrame(n))},i=()=>{a=0,r=0,t||(t=requestAnimationFrame(n))};return e.addEventListener("pointermove",o),e.addEventListener("pointerleave",i),()=>{e.removeEventListener("pointermove",o),e.removeEventListener("pointerleave",i),cancelAnimationFrame(t)}},[]);let er=E&&!J;a.useEffect(()=>{O.current?.toggleAttribute("inert",!J&&!E)},[J,E]),a.useEffect(()=>{if(!J&&!G)return;let e=e=>{"Escape"===e.key&&(G?(V(!1),F.current?.focus()):(Z(!1),T.current?.focus()))},t=e=>{let t=e.target;!G||$.current?.contains(t)||F.current?.contains(t)||V(!1),!J||G||L.current?.contains(t)||Z(!1)};return document.addEventListener("keydown",e),document.addEventListener("pointerdown",t),()=>{document.removeEventListener("keydown",e),document.removeEventListener("pointerdown",t)}},[J,G,Z]),a.useEffect(()=>{G&&$.current?.querySelector("[role=menuitem]")?.focus()},[G]);let en=[{label:J?"Закрыть папку":"Открыть папку",onSelect:()=>Z(!J)},...v],eo=Math.max(0,I.length-4),ei=I.slice(eo),es=I.length,el=r??A(es);return(0,t.jsxs)("div",{ref:L,className:"gf-root"+(R?" "+R:""),"data-tone":i,"data-open":J||void 0,"data-peek":E||void 0,"data-entered":Q||void 0,"data-place":k,style:{width:C,height:326*et,...P},children:[(0,t.jsx)("style",{children:p}),(0,t.jsx)("div",{className:"gf-stage",style:{transform:"translateY("+54*et+"px) scale("+et+")"},children:(0,t.jsxs)("div",{className:"gf-tilt",children:[(0,t.jsx)("div",{className:"gf-shadow","aria-hidden":"true"}),(0,t.jsxs)("div",{className:"gf-back",style:{clipPath:"path('"+d+"')"},"aria-hidden":"true",children:[h?(0,t.jsx)("img",{className:"gf-art",src:h,alt:"",width:364,height:296,draggable:!1}):"none"!==s?(0,t.jsx)(f,{className:"gf-art",art:s,seed:l,w:364,h:296,density:ea,priority:0}):null,(0,t.jsx)("div",{className:"gf-back-sheen"})]}),(0,t.jsx)("svg",{className:"gf-rim gf-back-rim",viewBox:"0 0 340 272","aria-hidden":"true",children:(0,t.jsx)("path",{d:d})}),(0,t.jsxs)("div",{className:"gf-front"+(W?" gf-front--bump":""),style:{clipPath:"path('"+c+"')"},children:[(0,t.jsx)("div",{className:"gf-tint","aria-hidden":"true"}),(0,t.jsx)("div",{className:"gf-spec","aria-hidden":"true"}),(0,t.jsxs)("svg",{className:"gf-rim gf-front-rim",viewBox:"0 0 340 198","aria-hidden":"true",children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{id:"gf-rim-"+_,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"#fff",stopOpacity:"0.95"}),(0,t.jsx)("stop",{offset:"0.35",stopColor:"#fff",stopOpacity:"0.35"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#fff",stopOpacity:"0.12"})]})}),(0,t.jsx)("path",{d:c,stroke:"url(#gf-rim-"+_+")"})]}),(0,t.jsx)("button",{ref:T,type:"button",className:"gf-hit","aria-expanded":J,"aria-label":(J?"Закрыть папку «":"Открыть папку «")+e+"», "+A(es),onClick:()=>{V(!1),Z(!J)}}),(0,t.jsxs)("div",{className:"gf-label",children:[(0,t.jsx)("span",{className:"gf-title",children:e}),(0,t.jsx)("span",{className:"gf-meta",children:el},el)]})]},W),(0,t.jsx)("div",{ref:O,className:"gf-files",role:"list","aria-label":"Содержимое папки «"+e+"»","aria-hidden":er||void 0,children:ei.map((e,a)=>{var r;let i=D.current[eo+a],s=(r=ei.length)<=1?0:a/(r-1)*2-1,l=n(o(e.name)+i),d=!!(e.art||e.image),c=(0,t.jsxs)(t.Fragment,{children:[d?e.image?(0,t.jsx)("img",{className:"gf-sheet-art",src:e.image,alt:"",width:272,height:184,draggable:!1}):(0,t.jsx)(f,{className:"gf-sheet-art",art:e.art,seed:o(e.name)%997,w:272,h:184,density:Math.min(ea,1.25),priority:1}):(0,t.jsxs)("span",{className:"gf-lines","aria-hidden":"true",children:[(0,t.jsx)("i",{style:{width:"86%"}}),(0,t.jsx)("i",{style:{width:"92%"}}),(0,t.jsx)("i",{style:{width:"64%"}}),(0,t.jsx)("i",{style:{width:"88%"}}),(0,t.jsx)("i",{style:{width:"42%"}})]}),(0,t.jsxs)("span",{className:"gf-sheet-head",children:[(0,t.jsx)("span",{className:"gf-sheet-name",children:e.name}),e.meta?(0,t.jsx)("span",{className:"gf-sheet-meta",children:e.meta}):null]})]}),g={className:"gf-sheet"+(d?" gf-sheet--art":"")+(i===U?" gf-sheet--drop":""),style:{"--gf-slot":s,"--gf-depth":ei.length-1-a,"--gf-jx":((l()-.5)*10).toFixed(2)+"px","--gf-jr":((l()-.5)*3.2).toFixed(2)+"deg",zIndex:a+1},onAnimationEnd:i===U?()=>q(null):void 0,tabIndex:er?-1:void 0};return(0,t.jsx)("div",{role:"listitem",className:"gf-sheet-slot",children:e.href?(0,t.jsx)("a",{...g,href:e.href,onClick:()=>M?.(e,eo+a),children:c}):(0,t.jsx)("button",{...g,type:"button",onClick:()=>M?.(e,eo+a),children:c})},i)})}),"none"!==x?(0,t.jsx)("button",{ref:F,type:"button",className:"gf-key gf-key--"+x,"aria-label":"add"===x?"Добавить файл в «"+e+"»":"Действия с папкой «"+e+"»","aria-haspopup":"more"===x?"menu":void 0,"aria-expanded":"more"===x?G:void 0,"aria-controls":"more"===x?"gf-menu-"+_:void 0,onClick:()=>{let e,t,a;return"add"===x?(e=b?.(I)||{name:"Без названия "+(I.length+1),meta:"Только что"},t=[...I,e],a=K.current++,void(D.current=[...D.current,a],B(t),q(a),X(e=>e+1),y?.(t))):V(e=>!e)},children:"add"===x?(0,t.jsx)("svg",{className:"gf-glyph gf-glyph--plus",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M12 4.5v15M4.5 12h15"})},W):(0,t.jsxs)("svg",{className:"gf-glyph gf-glyph--more",viewBox:"0 0 30 12","aria-hidden":"true",children:[(0,t.jsx)("rect",{x:"1",y:"1.5",width:"8",height:"9",rx:"3.4"}),(0,t.jsx)("rect",{x:"11",y:"1.5",width:"8",height:"9",rx:"3.4"}),(0,t.jsx)("rect",{x:"21",y:"1.5",width:"8",height:"9",rx:"3.4"})]})}):null,"more"===x?(0,t.jsx)("div",{ref:$,id:"gf-menu-"+_,role:"menu","aria-label":"Меню папки «"+e+"»",className:"gf-menu","data-open":G||void 0,onKeyDown:e=>{let t=Array.from($.current?.querySelectorAll("[role=menuitem]")??[]),a=t.indexOf(document.activeElement),r=a=>{e.preventDefault(),t[(a+t.length)%t.length]?.focus()};"ArrowDown"===e.key?r(a+1):"ArrowUp"===e.key?r(a-1):"Home"===e.key?r(0):"End"===e.key?r(t.length-1):"Tab"===e.key&&V(!1)},children:en.map((e,a)=>(0,t.jsx)("button",{type:"button",role:"menuitem",tabIndex:G?-1:void 0,disabled:!G,className:"gf-menu-item"+(e.danger?" gf-menu-item--danger":""),onClick:()=>{V(!1),F.current?.focus(),e.onSelect?.()},children:e.label},e.label+a))}):null]})})]})},"hashString",0,o],61005);let h=`
.art-panel-canvas { position: absolute; left: 0; top: 0; opacity: 0; filter: blur(12px) saturate(.7); transition: opacity 1s cubic-bezier(.2,.8,.2,1), filter 1s cubic-bezier(.2,.8,.2,1); }
.art-panel-canvas[data-ready] { opacity: 1; filter: none; }
`;e.s(["ArtPanel",0,function({art:e,seed:r,seedKey:n,className:i,density:s=1}){let l=a.useRef(null),[d,c]=a.useState(null);a.useEffect(()=>{let e=l.current;if(!e)return;let t=()=>{let t=Math.max(80,80*Math.ceil(e.offsetWidth/80)),a=Math.max(80,80*Math.ceil(e.offsetHeight/80));c(e=>e&&e.w===t&&e.h===a?e:{w:t,h:a})};t();let a=new ResizeObserver(t);return a.observe(e),()=>a.disconnect()},[]);let g=r??(n?o(n)%997:3);return(0,t.jsxs)("div",{ref:l,"aria-hidden":"true",className:"art-panel absolute inset-0 overflow-hidden "+(i??""),children:[d?(0,t.jsx)(f,{art:e,seed:g,w:d.w,h:d.h,density:s,priority:0,className:"art-panel-canvas"}):null,(0,t.jsx)("style",{children:h})]})}],42920)},5014,e=>{"use strict";var t=e.i(71645);let a=(...e)=>e.filter((e,t,a)=>!!e&&""!==e.trim()&&a.indexOf(e)===t).join(" ").trim(),r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},n=(0,t.createContext)({}),o=(0,t.forwardRef)(({color:e,size:o,width:i,height:s,strokeWidth:l,absoluteStrokeWidth:f,nonScalingStroke:d,className:c="",children:g,iconNode:u=[],icon:p={node:u,aliases:[],size:24},...h},m)=>{let{size:x=24,strokeWidth:b=2,absoluteStrokeWidth:y=!1,nonScalingStroke:v=!1,color:k="currentColor",className:w=""}=(0,t.useContext)(n)??{},j=!!g||(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(h),[N,M,C=[]]=function(e,t={}){return function(e,t={}){let n=t.attributeNames??{},o=e=>n[e]??e,i=e.size??e.width??r.width,s=e.size??e.height??r.height,l=e.aliases?.filter(e=>"string"==typeof e&&""!==e.trim()).map(e=>`lucide-${e}`)??[],f=[...e.name?[`lucide-${e.name}`]:[],...l],d=t.className?.split(" ").filter(Boolean)??[],c=!1===t.includeDefaultClasses?a(...d):a("lucide",...f,...d),g=t.absoluteStrokeWidth?Number(t.strokeWidth??r["stroke-width"])*Number(e.size??e.width??r.width)/Number(t.size??t.width??r.width):t.strokeWidth??r["stroke-width"];return["svg",{...Object.entries(r).reduce((e,[t,a])=>(e[o(t)]=a,e),{}),..."color"in t&&t.color&&{[o("stroke")]:t.color},..."size"in t&&null!=t.size&&{[o("width")]:t.size,[o("height")]:t.size},..."width"in t&&null!=t.width&&{[o("width")]:t.width},..."height"in t&&null!=t.height&&{[o("height")]:t.height},[o("stroke-width")]:g,...c&&{[o("class")]:c},[o("viewBox")]:`0 0 ${i} ${s}`,...!1===t.hasA11yProp?{[o("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},e.node.map(e=>{let[a,r,n]=e,i=t.nonScalingStroke?{[o("vector-effect")]:"non-scaling-stroke",...r}:r;return n?[a,i,n]:[a,i]})]}(e,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}(p,{color:e??k,width:i??o??x,height:s??o??x,strokeWidth:l??b,absoluteStrokeWidth:f??y,nonScalingStroke:d??v,className:a(w,c),hasA11yProp:j,attributes:h});return(0,t.createElement)(N,{ref:m,...M},[...C.map(([e,a])=>(0,t.createElement)(e,a)),...Array.isArray(g)?g:[g]])});e.s(["default",0,o],5014)},56420,e=>{"use strict";var t=e.i(71645),a=e.i(5014);e.s(["default",0,function(e,r=[],n=[]){let o,i="string"==typeof e?function(e,t,a=[]){if(null==t)throw Error("[lucide]: iconNode is required when icon name is used");return{name:e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),size:24,node:t,...a.length>0?{aliases:a}:{}}}(e,r,n):e,s=(0,t.forwardRef)(({className:e,...r},n)=>(0,t.createElement)(a.default,{ref:n,icon:i,className:e,...r}));return i.name&&(s.displayName=(o=(e=>{let t="",a=!1;for(let r of e){if("-"===r||"_"===r||r<=" "){a=t.length>0;continue}0===t.length?t+=r.toLowerCase():t+=a?r.toUpperCase():r,a=!1}return t})(i.name)).charAt(0).toUpperCase()+o.slice(1)),s}],56420)},95057,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={formatUrl:function(){return s},formatWithValidation:function(){return f},urlObjectKeys:function(){return l}};for(var n in r)Object.defineProperty(a,n,{enumerable:!0,get:r[n]});let o=e.r(90809)._(e.r(98183)),i=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:a}=e,r=e.protocol||"",n=e.pathname||"",s=e.hash||"",l=e.query||"",f=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?f=t+e.host:a&&(f=t+(~a.indexOf(":")?`[${a}]`:a),e.port&&(f+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));let d=e.search||l&&`?${l}`||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||i.test(r))&&!1!==f?(f="//"+(f||""),n&&"/"!==n[0]&&(n="/"+n)):f||(f=""),s&&"#"!==s[0]&&(s="#"+s),d&&"?"!==d[0]&&(d="?"+d),n=n.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${r}${f}${n}${d}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function f(e){return s(e)}},18581,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"useMergedRef",{enumerable:!0,get:function(){return n}});let r=e.r(71645);function n(e,t){let a=(0,r.useRef)(null),n=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=a.current;e&&(a.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(a.current=o(e,r)),t&&(n.current=o(t,r))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let a=e(t);return"function"==typeof a?a:()=>e(null)}}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),t.exports=a.default)},73668,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"isLocalURL",{enumerable:!0,get:function(){return o}});let r=e.r(18967),n=e.r(52817);function o(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),a=new URL(e,t);return a.origin===t&&(0,n.hasBasePath)(a.pathname)}catch(e){return!1}}},84508,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},22016,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={default:function(){return x},useLinkStatus:function(){return y}};for(var n in r)Object.defineProperty(a,n,{enumerable:!0,get:r[n]});let o=e.r(90809),i=e.r(43476),s=o._(e.r(71645)),l=e.r(95057),f=e.r(8372),d=e.r(18581),c=e.r(18967),g=e.r(5550);e.r(33525);let u=e.r(88540),p=e.r(91949),h=e.r(73668),m=e.r(9396);function x(t){var a,r;let n,o,x,[y,v]=(0,s.useOptimistic)(p.IDLE_LINK_STATUS),k=(0,s.useRef)(null),{href:w,as:j,children:N,prefetch:M=null,passHref:C,replace:S,shallow:z,scroll:A,onClick:E,onMouseEnter:R,onTouchStart:P,legacyBehavior:_=!1,onNavigate:L,transitionTypes:O,ref:T,unstable_dynamicOnHover:F,...$}=t;n=N,_&&("string"==typeof n||"number"==typeof n)&&(n=(0,i.jsx)("a",{children:n}));let I=s.default.useContext(f.AppRouterContext),B=!1!==M,D=!1!==M?null===(r=M)||"auto"===r?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,K="string"==typeof(a=j||w)?a:(0,l.formatUrl)(a);if(_){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=s.default.Children.only(n)}let U=_?o&&"object"==typeof o&&o.ref:T,q=s.default.useCallback(e=>(null!==I&&(k.current=(0,p.mountLinkInstance)(e,K,I,D,B,v)),()=>{k.current&&((0,p.unmountLinkForCurrentNavigation)(k.current),k.current=null),(0,p.unmountPrefetchableInstance)(e)}),[B,K,I,D,v]),W={ref:(0,d.useMergedRef)(q,U),onClick(t){_||"function"!=typeof E||E(t),_&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!I||t.defaultPrevented||function(t,a,r,n,o,i,l){if("u">typeof window){let f,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((f=t.currentTarget.getAttribute("target"))&&"_self"!==f||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(a)){n&&(t.preventDefault(),location.replace(a));return}if(t.preventDefault(),i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:c}=e.r(99781);s.default.startTransition(()=>{c(a,n?"replace":"push",!1===o?u.ScrollBehavior.NoScroll:u.ScrollBehavior.Default,r.current,l)})}}(t,K,k,S,A,L,O)},onMouseEnter(e){_||"function"!=typeof R||R(e),_&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),I&&B&&(0,p.onNavigationIntent)(e.currentTarget,!0===F)},onTouchStart:function(e){_||"function"!=typeof P||P(e),_&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),I&&B&&(0,p.onNavigationIntent)(e.currentTarget,!0===F)}};return(0,c.isAbsoluteUrl)(K)?W.href=K:_&&!C&&("a"!==o.type||"href"in o.props)||(W.href=(0,g.addBasePath)(K)),x=_?s.default.cloneElement(o,W):(0,i.jsx)("a",{...$,...W,children:n}),(0,i.jsx)(b.Provider,{value:y,children:x})}e.r(84508);let b=(0,s.createContext)(p.IDLE_LINK_STATUS),y=()=>(0,s.useContext)(b);("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),t.exports=a.default)},93539,e=>{"use strict";var t=e.i(43476),a=e.i(56420);let r={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};r.node;let n=(0,a.default)(r),o={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};o.node;let i=(0,a.default)(o);e.s(["ThemeToggle",0,function(){return(0,t.jsxs)("button",{type:"button",onClick:function(){let e=document.documentElement,t="dark"===(e.getAttribute("data-theme")??(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"))?"light":"dark";e.setAttribute("data-theme",t);try{localStorage.setItem("ev-theme",t)}catch{}},"aria-label":"Переключить тему оформления",title:"Светлая / тёмная тема","data-testid":"theme-toggle",className:"grid size-8 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground",children:[(0,t.jsx)(n,{"aria-hidden":"true",className:"size-4 dark:hidden"}),(0,t.jsx)(i,{"aria-hidden":"true",className:"hidden size-4 dark:block"})]})}],93539)},63676,e=>{"use strict";var t=e.i(56420);let a={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};a.node;let r=(0,t.default)(a);e.s(["X",0,r],63676)},76123,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(56420);let n={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};n.node;let o=(0,r.default)(n),i="w-full rounded-2xl border border-white/15 bg-white/8 px-4 py-3 text-[15px] text-white placeholder:text-white/40 outline-none backdrop-blur-md transition-colors focus:border-white/50 focus:bg-white/12";e.s(["FeedbackForm",0,function({nick:e}){let[r,n]=a.useState(""),[s,l]=a.useState(""),[f,d]=a.useState(""),[c,g]=a.useState(!1);return(0,t.jsxs)("form",{id:"feedback",onSubmit:function(t){let a;t.preventDefault();let n=["Заявка с сайта Empire V · AI-Studio",r.trim()?`Имя: ${r.trim()}`:"",s.trim()?`Как связаться: ${s.trim()}`:"","",f.trim()].filter((e,t,a)=>""!==e||t>0&&""!==a[t-1]);window.open((a=encodeURIComponent(n.join("\n")),e?`https://t.me/${e}?text=${a}`:`https://t.me/share/url?url=%20&text=${a}`),"_blank","noopener,noreferrer"),g(!0)},"aria-labelledby":"feedback-title",className:"space-y-3",children:[(0,t.jsx)("h3",{id:"feedback-title",className:"text-lg font-semibold tracking-tight",children:"Написать нам в Telegram"}),(0,t.jsxs)("label",{className:"block",children:[(0,t.jsx)("span",{className:"sr-only",children:"Ваше имя"}),(0,t.jsx)("input",{className:i,name:"name",autoComplete:"name",placeholder:"Ваше имя",value:r,onChange:e=>n(e.target.value)})]}),(0,t.jsxs)("label",{className:"block",children:[(0,t.jsx)("span",{className:"sr-only",children:"Как с вами связаться"}),(0,t.jsx)("input",{className:i,name:"contact",autoComplete:"tel",placeholder:"Телефон или @ник в Telegram",value:s,onChange:e=>l(e.target.value)})]}),(0,t.jsxs)("label",{className:"block",children:[(0,t.jsx)("span",{className:"sr-only",children:"Что нужно сделать"}),(0,t.jsx)("textarea",{className:i+" min-h-28 resize-y",name:"message",required:!0,placeholder:"Коротко: что нужно автоматизировать или построить",value:f,onChange:e=>d(e.target.value)})]}),(0,t.jsxs)("button",{type:"submit",className:"inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-[15px] font-medium text-[#141416] transition-[transform,opacity] hover:opacity-90 active:translate-y-px",children:[(0,t.jsx)(o,{className:"size-4","aria-hidden":"true"}),"Отправить в Telegram"]}),(0,t.jsx)("p",{role:"status",className:"min-h-5 text-[13px] leading-snug text-white/60",children:c?"Telegram открылся с готовым текстом. Осталось нажать «Отправить» в чате.":"Откроется Telegram с готовым сообщением. Данные нигде не сохраняются."})]})}],76123)},18566,(e,t,a)=>{t.exports=e.r(76562)},47975,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(74080),n=e.i(18566),o=e.i(56420);let i={name:"arrow-up-right",size:24,node:[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]};i.node;let s=(0,o.default)(i);var l=e.i(63676),f=e.i(61005),d=e.i(42920);e.i(47167);let c="/empire-v",g=e=>c&&e.startsWith("/")?c+e:e,u=e=>c&&e.startsWith(c+"/")?e.slice(c.length):e,p=e=>{var t;let a,r;return e+" "+(t="проектов",r=(a=Math.abs(e)%100)%10,a>10&&a<20?t:1===r?"проект":r>=2&&r<=4?"проекта":t)},h="cubic-bezier(.2, .8, .2, 1)";function m({category:e,index:r,onOpen:n}){let o=a.useRef(null),i=function(e){let[t,r]=a.useState(300);return a.useEffect(()=>{let t=e.current;if(!t)return;let a=()=>r(Math.round(Math.min(340,Math.max(240,t.getBoundingClientRect().width-8))));a();let n=new ResizeObserver(a);return n.observe(t),()=>n.disconnect()},[e]),t}(o),s=e.projects.slice(0,4).reverse().map(t=>({name:t.title,meta:t.cardMeta,href:g(`/projects/${t.slug}/`),...t.image?{image:t.image}:{art:e.art}}));return(0,t.jsx)("div",{ref:o,className:"flex w-full justify-center","data-category":e.id,children:(0,t.jsx)(f.default,{label:e.title,meta:p(e.projects.length),itemsLabel:p,tone:e.tone,art:e.art,seed:3+7*r,files:s,action:"none",peek:!0,open:!1,onOpenChange:t=>t&&n(e.id),labelPlacement:e.labelPlacement??"bottom-left",width:i,appearDelay:r%3*140})})}function x({category:e,origin:r,onClose:n,onNavigate:o}){let i=a.useRef(null),f=a.useRef(null),c=a.useRef(null),u=a.useRef(!1),m=a.useMemo(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches,[]),b=a.useCallback((e,t,a)=>{let n=e.getBoundingClientRect(),o=r?r.left+r.width/2:window.innerWidth/2,i=r?r.top+.45*r.height:window.innerHeight,s=o-(n.left+n.width/2),l=i-(n.top+n.height/2);return`translate(${s}px, ${l}px) scale(.32) rotate(${(t-(a-1)/2)*7}deg)`},[r]),y=()=>Array.from(f.current?.querySelectorAll("[data-spread-card]")??[]);a.useLayoutEffect(()=>{let e=i.current;if(!e)return;e.animate([{opacity:0},{opacity:1}],{duration:m?120:320,easing:h,fill:"both"});let t=y();t.forEach((e,a)=>{m?e.animate([{opacity:0},{opacity:1}],{duration:160,fill:"both"}):e.animate([{transform:b(e,a,t.length),opacity:0},{opacity:1,offset:.35},{transform:"none",opacity:1}],{duration:720,delay:60+70*a,easing:"cubic-bezier(.34, 1.25, .5, 1)",fill:"both"})}),c.current?.focus({preventScroll:!0})},[b,m]);let v=a.useCallback(()=>{if(u.current)return;u.current=!0;let e=y(),t=e.map((t,a)=>m?t.animate([{opacity:1},{opacity:0}],{duration:120,fill:"both"}):t.animate([{transform:"none",opacity:1},{transform:b(t,a,e.length),opacity:0}],{duration:380,delay:(e.length-1-a)*35,easing:"cubic-bezier(.5, 0, .75, 0)",fill:"both"})),a=i.current?.animate([{opacity:1},{opacity:0}],{duration:m?120:420,delay:120*!m,easing:h,fill:"both"});Promise.all([...t,...a?[a]:[]].map(e=>e.finished.catch(()=>void 0))).then(n)},[b,n,m]);a.useEffect(()=>{let e=e=>{if("Escape"===e.key)e.preventDefault(),v();else if("Tab"===e.key){let t=i.current?.querySelectorAll("a[href], button");if(!t?.length)return;let a=t[0],r=t[t.length-1];e.shiftKey&&document.activeElement===a?(e.preventDefault(),r.focus()):e.shiftKey||document.activeElement!==r||(e.preventDefault(),a.focus())}};document.addEventListener("keydown",e);let t=document.documentElement,a=t.style.overflow;return t.style.overflow="hidden",()=>{document.removeEventListener("keydown",e),t.style.overflow=a}},[v]);let k=e.projects.length;return(0,t.jsx)("div",{ref:i,role:"dialog","aria-modal":"true","aria-labelledby":"spread-title","data-testid":"folder-spread",className:"fixed inset-0 z-[60] overflow-y-auto bg-background/55 backdrop-blur-xl backdrop-saturate-150",onClick:e=>{(e.target===e.currentTarget||void 0!==e.target.dataset.backdrop)&&v()},children:(0,t.jsxs)("div",{"data-backdrop":!0,className:"container-page flex min-h-full flex-col py-6 sm:py-10",children:[(0,t.jsxs)("div",{"data-backdrop":!0,className:"mb-6 flex items-start justify-between gap-4 sm:mb-10",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{className:"mono-label flex items-center gap-2",children:[(0,t.jsx)("span",{className:"size-2 rounded-full",style:{background:e.accent},"aria-hidden":"true"}),p(k)]}),(0,t.jsx)("h2",{id:"spread-title",className:"mt-2 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl",children:e.title}),(0,t.jsx)("p",{className:"mt-2 max-w-[48ch] text-muted-foreground",children:e.subtitle})]}),(0,t.jsx)("button",{ref:c,type:"button",onClick:v,className:"grid size-11 shrink-0 place-items-center rounded-full border border-border bg-card shadow-sm hover:bg-muted","aria-label":"Закрыть папку",children:(0,t.jsx)(l.X,{className:"size-5","aria-hidden":"true"})})]}),(0,t.jsx)("ul",{ref:f,"data-backdrop":!0,className:"grid flex-1 content-start gap-4 sm:gap-5 "+(1===k?"sm:grid-cols-1 sm:max-w-md":2===k?"sm:grid-cols-2 lg:max-w-4xl":"sm:grid-cols-2 lg:grid-cols-3"),children:e.projects.map(a=>{let r=g(`/projects/${a.slug}/`);return(0,t.jsx)("li",{"data-spread-card":!0,className:"will-change-transform",children:(0,t.jsxs)("a",{href:r,onClick:e=>{0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||(e.preventDefault(),o(r))},className:"group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_60px_-30px_rgba(10,12,20,.45)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-[0_40px_70px_-30px_rgba(10,12,20,.55)]",children:[(0,t.jsxs)("div",{className:"relative aspect-[16/10] overflow-hidden bg-[#141416]",children:[(0,t.jsx)(d.ArtPanel,{art:e.art,seedKey:a.slug}),a.image?(0,t.jsx)("img",{src:a.image,alt:"",decoding:"async",className:"absolute inset-x-5 top-6 h-[calc(100%+24px)] w-[calc(100%-40px)] rounded-xl object-cover object-top shadow-[0_20px_40px_-12px_rgba(0,0,0,.6)] ring-1 ring-white/15 transition-transform duration-700 group-hover:-translate-y-1"}):null,(0,t.jsx)("span",{className:"absolute top-3 left-3 rounded-full bg-black/40 px-2.5 py-1 font-mono text-[10.5px] tracking-[0.12em] text-white uppercase backdrop-blur-md",children:a.cardMeta})]}),(0,t.jsxs)("div",{className:"flex flex-1 flex-col gap-2 p-5",children:[(0,t.jsxs)("div",{className:"flex items-baseline justify-between gap-3",children:[(0,t.jsx)("h3",{className:"text-lg leading-snug font-semibold tracking-tight",children:a.title}),(0,t.jsx)("span",{className:"shrink-0 font-mono text-[11px] text-muted-foreground",children:a.status})]}),(0,t.jsx)("p",{className:"text-[14.5px] leading-relaxed text-muted-foreground",children:a.oneLiner}),(0,t.jsxs)("p",{className:"mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium",children:["Открыть проект",(0,t.jsx)(s,{className:"size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5","aria-hidden":"true"})]})]})]})},a.slug)})})]})})}e.s(["FolderDesk",0,function({categories:e}){let o=(0,n.useRouter)(),[i,s]=a.useState(null),[l,f]=a.useState(null),d=a.useRef(null),c=e.find(e=>e.id===i)??null,g=e=>{f(d.current?.querySelector(`[data-category="${e}"] .gf-root`)?.getBoundingClientRect()??null),s(e)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{ref:d,onClickCapture:e=>{if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;let t=e.target.closest("a.gf-sheet");t&&(e.preventDefault(),o.push(u(t.getAttribute("href")??"/")))},className:"grid grid-cols-1 items-end justify-items-center gap-x-10 gap-y-14 sm:grid-cols-2 xl:grid-cols-3",children:e.map((e,a)=>(0,t.jsx)(m,{category:e,index:a,onOpen:g},e.id))}),c?(0,r.createPortal)((0,t.jsx)(x,{category:c,origin:l,onClose:()=>{s(null),i&&(d.current?.querySelector(`[data-category="${i}"] .gf-hit`)??null)?.focus({preventScroll:!0})},onNavigate:e=>{s(null),o.push(u(e))}},c.id),document.body):null]})}],47975)}]);