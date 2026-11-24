(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,42920,61005,e=>{"use strict";var t=e.i(43476),r=e.i(71645);let a={aurora:{style:"streak",colors:["#f4efe9","#e9c2b8","#c2433f","#2a1e2a","#22395e","#6f97c2","#e5edf4"],scale:.7,warp:1.4,angle:-.62,gloss:.18,veins:0},ember:{style:"marble",colors:["#07090c","#16252c","#3d5f68","#1a1416","#a3201a","#ef4a2b","#ff8a5c"],scale:.62,warp:3.2,angle:-.5,gloss:.55,veins:.6},dusk:{style:"marble",colors:["#120c18","#3e2850","#8f6c9c","#2b1a24","#b3502f","#eab08a","#fbe7d2"],scale:.75,warp:3.6,angle:.8,gloss:.5,veins:.5},glacier:{style:"streak",colors:["#f7f8fa","#d9e2ea","#9fb4c7","#e8edf2","#bccbd8","#ffffff"],scale:.7,warp:1.6,angle:.35,gloss:.25,veins:0},verdant:{style:"marble",colors:["#070b08","#173024","#4f7a5a","#141812","#a7843a","#e9cf87","#fbf3d6"],scale:.7,warp:3.4,angle:2.1,gloss:.5,veins:.5}};function o(e){let t=e>>>0;return()=>{let e=t=t+0x6d2b79f5>>>0;return e=Math.imul(e^e>>>15,1|e),(((e^=e+Math.imul(e^e>>>7,61|e))^e>>>14)>>>0)/0x100000000}}function n(e){let t=0x811c9dc5;for(let r=0;r<e.length;r++)t=Math.imul(t^e.charCodeAt(r),0x1000193);return t>>>0}let i=new Map,s=[],l=!1;function f({art:e,seed:n,w:d,h:g,density:c,priority:p,className:u}){let h=r.useRef(null),[m,b]=r.useState(!1),x=JSON.stringify("string"==typeof e?a[e]:e),v=Math.round(d*c),y=Math.round(g*c);return r.useEffect(()=>{var e;let t,r,a=!0;return b(!1),(e=JSON.parse(x),t=JSON.stringify([e,n,v,y]),!(r=i.get(t))&&(r=new Promise(t=>{let r,a,i,f,d,g,c,u,h,m,b,x,k,w,j,M,N,S,C,A,z,E,P,O,R,L,_=s.length;for(;_>1&&s[_-1].priority>p;)_--;s.splice(_,0,{job:(r=Math.max(1,Math.round(v)),a=Math.max(1,Math.round(y)),f=(i=e.colors.length>=2?e.colors:["#111111","#eeeeee"]).map((e,t)=>{let r,a;return{t:t/(i.length-1),c:(3===(r=e.trim().replace(/^#/,"")).length&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]),[(a=/^[0-9a-f]{6}$/i.test(r)?parseInt(r,16):8421504)>>16&255,a>>8&255,255&a])}}),d=e.scale??.7,g=e.warp??3,c=e.gloss??.4,u=e.veins??0,h="streak"===e.style,m=function(e){let t=o(e),r=new Uint8Array(512),a=new Float32Array(512),n=[];for(let e=0;e<256;e++)n.push(e);for(let e=255;e>0;e--){let r=Math.floor(t()*(e+1)),a=n[e];n[e]=n[r],n[r]=a}for(let e=0;e<512;e++)r[e]=n[255&e];for(let e=0;e<256;e++){let r=t()*Math.PI*2;a[2*e]=Math.cos(r),a[2*e+1]=Math.sin(r)}let i=(e,t)=>{let o=Math.floor(e),n=Math.floor(t),i=e-o,s=t-n,l=255&o,f=255&n,d=2*r[l+r[f]],g=2*r[l+1+r[f]],c=2*r[l+r[f+1]],p=2*r[l+1+r[f+1]],u=a[d]*i+a[d+1]*s,h=a[g]*(i-1)+a[g+1]*s,m=a[c]*i+a[c+1]*(s-1),b=a[p]*(i-1)+a[p+1]*(s-1),x=i*i*i*(i*(6*i-15)+10);return u+x*(h-u)+s*s*s*(s*(6*s-15)+10)*(m-u+x*(b-m-h+u))};return(e,t,r)=>{let a=0,o=.5;for(let n=0;n<r;n++){a+=o*i(e,t);let r=1.6*e+1.2*t+7.1;t=-1.2*e+1.6*t+3.3,e=r,o*=.5}return a}}(977*n+13),x=50*(b=o(n+1))(),k=50*b(),j=Math.cos(w=(e.angle??0)+(b()-.5)*.5),M=Math.sin(w),N=Math.min(r,a),A=new Float32Array((S=Math.ceil(r/2)+3)*(C=Math.ceil(a/2)+3)),z=new Float32Array(S*C),E=new Float32Array(r*a),P=new Float32Array(r*a),O=new Uint8ClampedArray(r*a*4),R=0,L=e=>{for(let t=0;t<S;t++){let o=((t-1)*2-r/2)/N,n=((e-1)*2-a/2)/N,i=(o*j-n*M)*d,s=(o*M+n*j)*d;h&&(i*=.14,s*=2.2);let l=m(i+=x,s+=k,3),f=m(i+5.2,s+1.3,3),c=m(i+g*l+1.7,s+g*f+9.2,3),p=m(i+g*l+8.3,s+g*f+2.8,3);A[e*S+t]=m(i+g*c,s+g*p,4),z[e*S+t]=Math.sqrt(l*l+f*f)}},{width:r,height:a,pixels:O,step:e=>{if(R>=C)return!0;let t=Math.min(C,R+Math.max(1,e));for(;R<t;)L(R++);return!(R<C)&&((()=>{let e=(e,t,r,a)=>(-e+9*t+9*r-a)/16,t=new Float32Array(r*C);for(let a=0;a<C;a++){let o=a*S;for(let n=0;n<r;n++){let i=(n>>1)+1;t[a*r+n]=1&n?e(A[o+i-1],A[o+i],A[o+i+1],A[o+i+2]):A[o+i]}}for(let o=0;o<a;o++){let a=(o>>1)+1;for(let n=0;n<r;n++){E[o*r+n]=1&o?e(t[(a-1)*r+n],t[a*r+n],t[(a+1)*r+n],t[(a+2)*r+n]):t[a*r+n];let i=(n>>1)+1,s=z[a*S+i],l=1&n?(s+z[a*S+i+1])/2:s,f=1&o?1&n?(z[(a+1)*S+i]+z[(a+1)*S+i+1])/2:z[(a+1)*S+i]:l;P[o*r+n]=(l+f)/2}}})(),(()=>{let e=[],t=Math.max(1,Math.floor(E.length/4096));for(let r=0;r<E.length;r+=t)e.push(E[r]);e.sort((e,t)=>e-t);let o=e[Math.floor(.02*e.length)],n=1/(e[Math.floor(.98*e.length)]-o||1),i=n*N*.012;for(let e=0;e<a;e++)for(let t=0;t<r;t++){let s=e*r+t,l=(E[s]-o)*n;l=l<0?0:l>1?1:l;let d=1;for(;d<f.length-1&&f[d].t<l;)d++;let g=f[d-1],p=f[d],h=(l-g.t)/(p.t-g.t||1);h=(h=h<0?0:h>1?1:h)*h*(3-2*h);let m=(E[t<r-1?s+1:s]-E[t>0?s-1:s])*i,b=(E[e<a-1?s+r:s]-E[e>0?s-r:s])*i,x=(-(-.55*m)- -.65*b+.52)/Math.sqrt(m*m+b*b+1),v=Math.pow(x>0?x:0,24)*c*255,y=(.82+.28*x)*(1+.035*Math.sin(150*l+24*P[s]))*(1-u*Math.max(0,1-14*Math.abs(P[s]-.42))*.6);O[4*s]=(g.c[0]+(p.c[0]-g.c[0])*h)*y+v,O[4*s+1]=(g.c[1]+(p.c[1]-g.c[1])*h)*y+v,O[4*s+2]=(g.c[2]+(p.c[2]-g.c[2])*h)*y+v,O[4*s+3]=255}})(),!0)}}),priority:p,done:t}),function(){if(l)return;l=!0;let e=()=>{let t=performance.now()+7;for(;s.length&&performance.now()<t;){let e=s[0];if(e.job.step(4)){s.shift();let t=document.createElement("canvas");t.width=e.job.width,t.height=e.job.height,t.getContext("2d")?.putImageData(new ImageData(e.job.pixels,t.width,t.height),0,0),e.done(t)}}s.length?requestAnimationFrame(e):l=!1};requestAnimationFrame(e)}()}),i.set(t,r)),r).then(e=>{let t=h.current;a&&t&&(t.width=e.width,t.height=e.height,t.getContext("2d")?.drawImage(e,0,0),b(!0))}),()=>{a=!1}},[x,n,v,y,p]),(0,t.jsx)("canvas",{ref:h,"aria-hidden":"true",className:u,"data-ready":m||void 0,style:{width:d,height:g,maxWidth:"none"}})}let d="M0 56A22 22 0 0 1 22 34L146 34C170 34 172 0 198 0L318 0A22 22 0 0 1 340 22L340 250A22 22 0 0 1 318 272L22 272A22 22 0 0 1 0 250Z",g="M0 22A22 22 0 0 1 22 0L118 0C144 0 146 32 172 32L318 32A22 22 0 0 1 340 54L340 176A22 22 0 0 1 318 198L22 198A22 22 0 0 1 0 176Z",c=e=>{var t;let r,a;return e+" "+(t="элементов",a=(r=Math.abs(e)%100)%10,r>10&&r<20?t:1===a?"элемент":a>=2&&a<=4?"элемента":t)},p=[{name:"Cover — final",meta:"PNG · 4.8 MB",art:"ember"},{name:"Moodboard",meta:"24 images",art:"dusk"},{name:"Brief.pdf",meta:"PDF · 1.2 MB"}],u=`
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
`;e.s(["ArtCanvas",0,f,"default",0,function({label:e="My Files",meta:a,tone:i="light",art:s="aurora",seed:l=3,image:h,files:m=p,action:b="add",onAdd:x,onFilesChange:v,menu:y=[],labelPlacement:k="bottom-left",open:w,defaultOpen:j=!1,onOpenChange:M,onFileSelect:N,width:S=340,appear:C=!0,appearDelay:A=0,itemsLabel:z=c,peek:E=!1,className:P,style:O}){let R=r.useId().replace(/:/g,""),L=r.useRef(null),_=r.useRef(null),F=r.useRef(null),T=r.useRef(null),I=r.useRef(null),[U,B]=r.useState(m),$=r.useRef(m.map((e,t)=>t)),D=r.useRef(m.length),[W,q]=r.useState(null),[K,X]=r.useState(0),[Y,J]=r.useState(j),H=w??Y,Z=r.useCallback(e=>{void 0===w&&J(e),M?.(e)},[w,M]),[G,Q]=r.useState(!1),[V,ee]=r.useState(!C),et=S/340,er=Math.min(1.5,Math.max(1,window.devicePixelRatio||1))*et;r.useEffect(()=>{if(!C)return;let e=L.current;if(!e||"u"<typeof IntersectionObserver)return void ee(!0);let t=0,r=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(r.disconnect(),t=window.setTimeout(()=>ee(!0),A))},{threshold:.25});return r.observe(e),()=>{r.disconnect(),window.clearTimeout(t)}},[C,A]),r.useEffect(()=>{let e=L.current;if(!e)return;let t=0,r=0,a=0,o=()=>{t=0,e.style.setProperty("--gf-px",r.toFixed(3)),e.style.setProperty("--gf-py",a.toFixed(3))},n=n=>{if("touch"===n.pointerType)return;let i=e.getBoundingClientRect();r=(n.clientX-i.left)/i.width*2-1,a=(n.clientY-i.top)/i.height*2-1,t||(t=requestAnimationFrame(o))},i=()=>{r=0,a=0,t||(t=requestAnimationFrame(o))};return e.addEventListener("pointermove",n),e.addEventListener("pointerleave",i),()=>{e.removeEventListener("pointermove",n),e.removeEventListener("pointerleave",i),cancelAnimationFrame(t)}},[]);let ea=E&&!H;r.useEffect(()=>{_.current?.toggleAttribute("inert",!H&&!E)},[H,E]),r.useEffect(()=>{if(!H&&!G)return;let e=e=>{"Escape"===e.key&&(G?(Q(!1),T.current?.focus()):(Z(!1),F.current?.focus()))},t=e=>{let t=e.target;!G||I.current?.contains(t)||T.current?.contains(t)||Q(!1),!H||G||L.current?.contains(t)||Z(!1)};return document.addEventListener("keydown",e),document.addEventListener("pointerdown",t),()=>{document.removeEventListener("keydown",e),document.removeEventListener("pointerdown",t)}},[H,G,Z]),r.useEffect(()=>{G&&I.current?.querySelector("[role=menuitem]")?.focus()},[G]);let eo=[{label:H?"Закрыть папку":"Открыть папку",onSelect:()=>Z(!H)},...y],en=Math.max(0,U.length-4),ei=U.slice(en),es=U.length,el=a??z(es);return(0,t.jsxs)("div",{ref:L,className:"gf-root"+(P?" "+P:""),"data-tone":i,"data-open":H||void 0,"data-peek":E||void 0,"data-entered":V||void 0,"data-place":k,style:{width:S,height:326*et,...O},children:[(0,t.jsx)("style",{children:u}),(0,t.jsx)("div",{className:"gf-stage",style:{transform:"translateY("+54*et+"px) scale("+et+")"},children:(0,t.jsxs)("div",{className:"gf-tilt",children:[(0,t.jsx)("div",{className:"gf-shadow","aria-hidden":"true"}),(0,t.jsxs)("div",{className:"gf-back",style:{clipPath:"path('"+d+"')"},"aria-hidden":"true",children:[h?(0,t.jsx)("img",{className:"gf-art",src:h,alt:"",width:364,height:296,draggable:!1}):"none"!==s?(0,t.jsx)(f,{className:"gf-art",art:s,seed:l,w:364,h:296,density:er,priority:0}):null,(0,t.jsx)("div",{className:"gf-back-sheen"})]}),(0,t.jsx)("svg",{className:"gf-rim gf-back-rim",viewBox:"0 0 340 272","aria-hidden":"true",children:(0,t.jsx)("path",{d:d})}),(0,t.jsxs)("div",{className:"gf-front"+(K?" gf-front--bump":""),style:{clipPath:"path('"+g+"')"},children:[(0,t.jsx)("div",{className:"gf-tint","aria-hidden":"true"}),(0,t.jsx)("div",{className:"gf-spec","aria-hidden":"true"}),(0,t.jsxs)("svg",{className:"gf-rim gf-front-rim",viewBox:"0 0 340 198","aria-hidden":"true",children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{id:"gf-rim-"+R,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"#fff",stopOpacity:"0.95"}),(0,t.jsx)("stop",{offset:"0.35",stopColor:"#fff",stopOpacity:"0.35"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#fff",stopOpacity:"0.12"})]})}),(0,t.jsx)("path",{d:g,stroke:"url(#gf-rim-"+R+")"})]}),(0,t.jsx)("button",{ref:F,type:"button",className:"gf-hit","aria-expanded":H,"aria-label":(H?"Закрыть папку «":"Открыть папку «")+e+"», "+z(es),onClick:()=>{Q(!1),Z(!H)}}),(0,t.jsxs)("div",{className:"gf-label",children:[(0,t.jsx)("span",{className:"gf-title",children:e}),(0,t.jsx)("span",{className:"gf-meta",children:el},el)]})]},K),(0,t.jsx)("div",{ref:_,className:"gf-files",role:"list","aria-label":"Содержимое папки «"+e+"»","aria-hidden":ea||void 0,children:ei.map((e,r)=>{var a;let i=$.current[en+r],s=(a=ei.length)<=1?0:r/(a-1)*2-1,l=o(n(e.name)+i),d=!!(e.art||e.image),g=(0,t.jsxs)(t.Fragment,{children:[d?e.image?(0,t.jsx)("img",{className:"gf-sheet-art",src:e.image,alt:"",width:272,height:184,draggable:!1}):(0,t.jsx)(f,{className:"gf-sheet-art",art:e.art,seed:n(e.name)%997,w:272,h:184,density:Math.min(er,1.25),priority:1}):(0,t.jsxs)("span",{className:"gf-lines","aria-hidden":"true",children:[(0,t.jsx)("i",{style:{width:"86%"}}),(0,t.jsx)("i",{style:{width:"92%"}}),(0,t.jsx)("i",{style:{width:"64%"}}),(0,t.jsx)("i",{style:{width:"88%"}}),(0,t.jsx)("i",{style:{width:"42%"}})]}),(0,t.jsxs)("span",{className:"gf-sheet-head",children:[(0,t.jsx)("span",{className:"gf-sheet-name",children:e.name}),e.meta?(0,t.jsx)("span",{className:"gf-sheet-meta",children:e.meta}):null]})]}),c={className:"gf-sheet"+(d?" gf-sheet--art":"")+(i===W?" gf-sheet--drop":""),style:{"--gf-slot":s,"--gf-depth":ei.length-1-r,"--gf-jx":((l()-.5)*10).toFixed(2)+"px","--gf-jr":((l()-.5)*3.2).toFixed(2)+"deg",zIndex:r+1},onAnimationEnd:i===W?()=>q(null):void 0,tabIndex:ea?-1:void 0};return(0,t.jsx)("div",{role:"listitem",className:"gf-sheet-slot",children:e.href?(0,t.jsx)("a",{...c,href:e.href,onClick:()=>N?.(e,en+r),children:g}):(0,t.jsx)("button",{...c,type:"button",onClick:()=>N?.(e,en+r),children:g})},i)})}),"none"!==b?(0,t.jsx)("button",{ref:T,type:"button",className:"gf-key gf-key--"+b,"aria-label":"add"===b?"Добавить файл в «"+e+"»":"Действия с папкой «"+e+"»","aria-haspopup":"more"===b?"menu":void 0,"aria-expanded":"more"===b?G:void 0,"aria-controls":"more"===b?"gf-menu-"+R:void 0,onClick:()=>{let e,t,r;return"add"===b?(e=x?.(U)||{name:"Без названия "+(U.length+1),meta:"Только что"},t=[...U,e],r=D.current++,void($.current=[...$.current,r],B(t),q(r),X(e=>e+1),v?.(t))):Q(e=>!e)},children:"add"===b?(0,t.jsx)("svg",{className:"gf-glyph gf-glyph--plus",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M12 4.5v15M4.5 12h15"})},K):(0,t.jsxs)("svg",{className:"gf-glyph gf-glyph--more",viewBox:"0 0 30 12","aria-hidden":"true",children:[(0,t.jsx)("rect",{x:"1",y:"1.5",width:"8",height:"9",rx:"3.4"}),(0,t.jsx)("rect",{x:"11",y:"1.5",width:"8",height:"9",rx:"3.4"}),(0,t.jsx)("rect",{x:"21",y:"1.5",width:"8",height:"9",rx:"3.4"})]})}):null,"more"===b?(0,t.jsx)("div",{ref:I,id:"gf-menu-"+R,role:"menu","aria-label":"Меню папки «"+e+"»",className:"gf-menu","data-open":G||void 0,onKeyDown:e=>{let t=Array.from(I.current?.querySelectorAll("[role=menuitem]")??[]),r=t.indexOf(document.activeElement),a=r=>{e.preventDefault(),t[(r+t.length)%t.length]?.focus()};"ArrowDown"===e.key?a(r+1):"ArrowUp"===e.key?a(r-1):"Home"===e.key?a(0):"End"===e.key?a(t.length-1):"Tab"===e.key&&Q(!1)},children:eo.map((e,r)=>(0,t.jsx)("button",{type:"button",role:"menuitem",tabIndex:G?-1:void 0,disabled:!G,className:"gf-menu-item"+(e.danger?" gf-menu-item--danger":""),onClick:()=>{Q(!1),T.current?.focus(),e.onSelect?.()},children:e.label},e.label+r))}):null]})})]})},"hashString",0,n],61005);let h=`
.art-panel-canvas { position: absolute; left: 0; top: 0; opacity: 0; filter: blur(12px) saturate(.7); transition: opacity 1s cubic-bezier(.2,.8,.2,1), filter 1s cubic-bezier(.2,.8,.2,1); }
.art-panel-canvas[data-ready] { opacity: 1; filter: none; }
`;e.s(["ArtPanel",0,function({art:e,seed:a,seedKey:o,className:i,density:s=1}){let l=r.useRef(null),[d,g]=r.useState(null);r.useEffect(()=>{let e=l.current;if(!e)return;let t=()=>{let t=Math.max(80,80*Math.ceil(e.offsetWidth/80)),r=Math.max(80,80*Math.ceil(e.offsetHeight/80));g(e=>e&&e.w===t&&e.h===r?e:{w:t,h:r})};t();let r=new ResizeObserver(t);return r.observe(e),()=>r.disconnect()},[]);let c=a??(o?n(o)%997:3);return(0,t.jsxs)("div",{ref:l,"aria-hidden":"true",className:"art-panel absolute inset-0 overflow-hidden "+(i??""),children:[d?(0,t.jsx)(f,{art:e,seed:c,w:d.w,h:d.h,density:s,priority:0,className:"art-panel-canvas"}):null,(0,t.jsx)("style",{children:h})]})}],42920)},95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={formatUrl:function(){return s},formatWithValidation:function(){return f},urlObjectKeys:function(){return l}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let n=e.r(90809)._(e.r(98183)),i=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,a=e.protocol||"",o=e.pathname||"",s=e.hash||"",l=e.query||"",f=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?f=t+e.host:r&&(f=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(f+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let d=e.search||l&&`?${l}`||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||i.test(a))&&!1!==f?(f="//"+(f||""),o&&"/"!==o[0]&&(o="/"+o)):f||(f=""),s&&"#"!==s[0]&&(s="#"+s),d&&"?"!==d[0]&&(d="?"+d),o=o.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${a}${f}${o}${d}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function f(e){return s(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let a=e.r(71645);function o(e,t){let r=(0,a.useRef)(null),o=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=n(e,a)),t&&(o.current=n(t,a))},[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return n}});let a=e.r(18967),o=e.r(52817);function n(e){if(!(0,a.isAbsoluteUrl)(e))return!0;try{let t=(0,a.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return b},useLinkStatus:function(){return v}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let n=e.r(90809),i=e.r(43476),s=n._(e.r(71645)),l=e.r(95057),f=e.r(8372),d=e.r(18581),g=e.r(18967),c=e.r(5550);e.r(33525);let p=e.r(88540),u=e.r(91949),h=e.r(73668),m=e.r(9396);function b(t){var r,a;let o,n,b,[v,y]=(0,s.useOptimistic)(u.IDLE_LINK_STATUS),k=(0,s.useRef)(null),{href:w,as:j,children:M,prefetch:N=null,passHref:S,replace:C,shallow:A,scroll:z,onClick:E,onMouseEnter:P,onTouchStart:O,legacyBehavior:R=!1,onNavigate:L,transitionTypes:_,ref:F,unstable_dynamicOnHover:T,...I}=t;o=M,R&&("string"==typeof o||"number"==typeof o)&&(o=(0,i.jsx)("a",{children:o}));let U=s.default.useContext(f.AppRouterContext),B=!1!==N,$=!1!==N?null===(a=N)||"auto"===a?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,D="string"==typeof(r=j||w)?r:(0,l.formatUrl)(r);if(R){if(o?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=s.default.Children.only(o)}let W=R?n&&"object"==typeof n&&n.ref:F,q=s.default.useCallback(e=>(null!==U&&(k.current=(0,u.mountLinkInstance)(e,D,U,$,B,y)),()=>{k.current&&((0,u.unmountLinkForCurrentNavigation)(k.current),k.current=null),(0,u.unmountPrefetchableInstance)(e)}),[B,D,U,$,y]),K={ref:(0,d.useMergedRef)(q,W),onClick(t){R||"function"!=typeof E||E(t),R&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(t),!U||t.defaultPrevented||function(t,r,a,o,n,i,l){if("u">typeof window){let f,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((f=t.currentTarget.getAttribute("target"))&&"_self"!==f||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(r)){o&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:g}=e.r(99781);s.default.startTransition(()=>{g(r,o?"replace":"push",!1===n?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,a.current,l)})}}(t,D,k,C,z,L,_)},onMouseEnter(e){R||"function"!=typeof P||P(e),R&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),U&&B&&(0,u.onNavigationIntent)(e.currentTarget,!0===T)},onTouchStart:function(e){R||"function"!=typeof O||O(e),R&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),U&&B&&(0,u.onNavigationIntent)(e.currentTarget,!0===T)}};return(0,g.isAbsoluteUrl)(D)?K.href=D:R&&!S&&("a"!==n.type||"href"in n.props)||(K.href=(0,c.addBasePath)(D)),b=R?s.default.cloneElement(n,K):(0,i.jsx)("a",{...I,...K,children:o}),(0,i.jsx)(x.Provider,{value:v,children:b})}e.r(84508);let x=(0,s.createContext)(u.IDLE_LINK_STATUS),v=()=>(0,s.useContext)(x);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},5014,e=>{"use strict";var t=e.i(71645);let r=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim(),a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},o=(0,t.createContext)({}),n=(0,t.forwardRef)(({color:e,size:n,width:i,height:s,strokeWidth:l,absoluteStrokeWidth:f,nonScalingStroke:d,className:g="",children:c,iconNode:p=[],icon:u={node:p,aliases:[],size:24},...h},m)=>{let{size:b=24,strokeWidth:x=2,absoluteStrokeWidth:v=!1,nonScalingStroke:y=!1,color:k="currentColor",className:w=""}=(0,t.useContext)(o)??{},j=!!c||(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(h),[M,N,S=[]]=function(e,t={}){return function(e,t={}){let o=t.attributeNames??{},n=e=>o[e]??e,i=e.size??e.width??a.width,s=e.size??e.height??a.height,l=e.aliases?.filter(e=>"string"==typeof e&&""!==e.trim()).map(e=>`lucide-${e}`)??[],f=[...e.name?[`lucide-${e.name}`]:[],...l],d=t.className?.split(" ").filter(Boolean)??[],g=!1===t.includeDefaultClasses?r(...d):r("lucide",...f,...d),c=t.absoluteStrokeWidth?Number(t.strokeWidth??a["stroke-width"])*Number(e.size??e.width??a.width)/Number(t.size??t.width??a.width):t.strokeWidth??a["stroke-width"];return["svg",{...Object.entries(a).reduce((e,[t,r])=>(e[n(t)]=r,e),{}),..."color"in t&&t.color&&{[n("stroke")]:t.color},..."size"in t&&null!=t.size&&{[n("width")]:t.size,[n("height")]:t.size},..."width"in t&&null!=t.width&&{[n("width")]:t.width},..."height"in t&&null!=t.height&&{[n("height")]:t.height},[n("stroke-width")]:c,...g&&{[n("class")]:g},[n("viewBox")]:`0 0 ${i} ${s}`,...!1===t.hasA11yProp?{[n("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},e.node.map(e=>{let[r,a,o]=e,i=t.nonScalingStroke?{[n("vector-effect")]:"non-scaling-stroke",...a}:a;return o?[r,i,o]:[r,i]})]}(e,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}(u,{color:e??k,width:i??n??b,height:s??n??b,strokeWidth:l??x,absoluteStrokeWidth:f??v,nonScalingStroke:d??y,className:r(w,g),hasA11yProp:j,attributes:h});return(0,t.createElement)(M,{ref:m,...N},[...S.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(c)?c:[c]])});e.s(["default",0,n],5014)},56420,e=>{"use strict";var t=e.i(71645),r=e.i(5014);e.s(["default",0,function(e,a=[],o=[]){let n,i="string"==typeof e?function(e,t,r=[]){if(null==t)throw Error("[lucide]: iconNode is required when icon name is used");return{name:e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),size:24,node:t,...r.length>0?{aliases:r}:{}}}(e,a,o):e,s=(0,t.forwardRef)(({className:e,...a},o)=>(0,t.createElement)(r.default,{ref:o,icon:i,className:e,...a}));return i.name&&(s.displayName=(n=(e=>{let t="",r=!1;for(let a of e){if("-"===a||"_"===a||a<=" "){r=t.length>0;continue}0===t.length?t+=a.toLowerCase():t+=r?a.toUpperCase():a,r=!1}return t})(i.name)).charAt(0).toUpperCase()+n.slice(1)),s}],56420)},93539,e=>{"use strict";var t=e.i(43476),r=e.i(56420);let a={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};a.node;let o=(0,r.default)(a),n={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};n.node;let i=(0,r.default)(n);e.s(["ThemeToggle",0,function(){return(0,t.jsxs)("button",{type:"button",onClick:function(){let e=document.documentElement,t="dark"===(e.getAttribute("data-theme")??(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"))?"light":"dark";e.setAttribute("data-theme",t);try{localStorage.setItem("ev-theme",t)}catch{}},"aria-label":"Переключить тему оформления",title:"Светлая / тёмная тема","data-testid":"theme-toggle",className:"grid size-8 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground",children:[(0,t.jsx)(o,{"aria-hidden":"true",className:"size-4 dark:hidden"}),(0,t.jsx)(i,{"aria-hidden":"true",className:"hidden size-4 dark:block"})]})}],93539)}]);