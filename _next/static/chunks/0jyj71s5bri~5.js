(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,42920,61005,e=>{"use strict";var t=e.i(43476),a=e.i(71645);let r={aurora:{style:"streak",colors:["#f4efe9","#e9c2b8","#c2433f","#2a1e2a","#22395e","#6f97c2","#e5edf4"],scale:.7,warp:1.4,angle:-.62,gloss:.18,veins:0},ember:{style:"marble",colors:["#07090c","#16252c","#3d5f68","#1a1416","#a3201a","#ef4a2b","#ff8a5c"],scale:.62,warp:3.2,angle:-.5,gloss:.55,veins:.6},dusk:{style:"marble",colors:["#120c18","#3e2850","#8f6c9c","#2b1a24","#b3502f","#eab08a","#fbe7d2"],scale:.75,warp:3.6,angle:.8,gloss:.5,veins:.5},glacier:{style:"streak",colors:["#f7f8fa","#d9e2ea","#9fb4c7","#e8edf2","#bccbd8","#ffffff"],scale:.7,warp:1.6,angle:.35,gloss:.25,veins:0},verdant:{style:"marble",colors:["#070b08","#173024","#4f7a5a","#141812","#a7843a","#e9cf87","#fbf3d6"],scale:.7,warp:3.4,angle:2.1,gloss:.5,veins:.5}};function o(e){let t=e>>>0;return()=>{let e=t=t+0x6d2b79f5>>>0;return e=Math.imul(e^e>>>15,1|e),(((e^=e+Math.imul(e^e>>>7,61|e))^e>>>14)>>>0)/0x100000000}}function n(e){let t=0x811c9dc5;for(let a=0;a<e.length;a++)t=Math.imul(t^e.charCodeAt(a),0x1000193);return t>>>0}let i=new Map,s=[],l=!1;function f({art:e,seed:n,w:g,h:d,density:p,priority:c,className:h}){let x=a.useRef(null),[u,b]=a.useState(!1),m=JSON.stringify("string"==typeof e?r[e]:e),v=Math.round(g*p),y=Math.round(d*p);return a.useEffect(()=>{var e;let t,a,r=!0;return b(!1),(e=JSON.parse(m),t=JSON.stringify([e,n,v,y]),!(a=i.get(t))&&(a=new Promise(t=>{let a,r,i,f,g,d,p,h,x,u,b,m,k,w,j,M,N,A,C,F,S,z,E,R,L,I,P=s.length;for(;P>1&&s[P-1].priority>c;)P--;s.splice(P,0,{job:(a=Math.max(1,Math.round(v)),r=Math.max(1,Math.round(y)),f=(i=e.colors.length>=2?e.colors:["#111111","#eeeeee"]).map((e,t)=>{let a,r;return{t:t/(i.length-1),c:(3===(a=e.trim().replace(/^#/,"")).length&&(a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]),[(r=/^[0-9a-f]{6}$/i.test(a)?parseInt(a,16):8421504)>>16&255,r>>8&255,255&r])}}),g=e.scale??.7,d=e.warp??3,p=e.gloss??.4,h=e.veins??0,x="streak"===e.style,u=function(e){let t=o(e),a=new Uint8Array(512),r=new Float32Array(512),n=[];for(let e=0;e<256;e++)n.push(e);for(let e=255;e>0;e--){let a=Math.floor(t()*(e+1)),r=n[e];n[e]=n[a],n[a]=r}for(let e=0;e<512;e++)a[e]=n[255&e];for(let e=0;e<256;e++){let a=t()*Math.PI*2;r[2*e]=Math.cos(a),r[2*e+1]=Math.sin(a)}let i=(e,t)=>{let o=Math.floor(e),n=Math.floor(t),i=e-o,s=t-n,l=255&o,f=255&n,g=2*a[l+a[f]],d=2*a[l+1+a[f]],p=2*a[l+a[f+1]],c=2*a[l+1+a[f+1]],h=r[g]*i+r[g+1]*s,x=r[d]*(i-1)+r[d+1]*s,u=r[p]*i+r[p+1]*(s-1),b=r[c]*(i-1)+r[c+1]*(s-1),m=i*i*i*(i*(6*i-15)+10);return h+m*(x-h)+s*s*s*(s*(6*s-15)+10)*(u-h+m*(b-u-x+h))};return(e,t,a)=>{let r=0,o=.5;for(let n=0;n<a;n++){r+=o*i(e,t);let a=1.6*e+1.2*t+7.1;t=-1.2*e+1.6*t+3.3,e=a,o*=.5}return r}}(977*n+13),m=50*(b=o(n+1))(),k=50*b(),j=Math.cos(w=(e.angle??0)+(b()-.5)*.5),M=Math.sin(w),N=Math.min(a,r),F=new Float32Array((A=Math.ceil(a/2)+3)*(C=Math.ceil(r/2)+3)),S=new Float32Array(A*C),z=new Float32Array(a*r),E=new Float32Array(a*r),R=new Uint8ClampedArray(a*r*4),L=0,I=e=>{for(let t=0;t<A;t++){let o=((t-1)*2-a/2)/N,n=((e-1)*2-r/2)/N,i=(o*j-n*M)*g,s=(o*M+n*j)*g;x&&(i*=.14,s*=2.2);let l=u(i+=m,s+=k,3),f=u(i+5.2,s+1.3,3),p=u(i+d*l+1.7,s+d*f+9.2,3),c=u(i+d*l+8.3,s+d*f+2.8,3);F[e*A+t]=u(i+d*p,s+d*c,4),S[e*A+t]=Math.sqrt(l*l+f*f)}},{width:a,height:r,pixels:R,step:e=>{if(L>=C)return!0;let t=Math.min(C,L+Math.max(1,e));for(;L<t;)I(L++);return!(L<C)&&((()=>{let e=(e,t,a,r)=>(-e+9*t+9*a-r)/16,t=new Float32Array(a*C);for(let r=0;r<C;r++){let o=r*A;for(let n=0;n<a;n++){let i=(n>>1)+1;t[r*a+n]=1&n?e(F[o+i-1],F[o+i],F[o+i+1],F[o+i+2]):F[o+i]}}for(let o=0;o<r;o++){let r=(o>>1)+1;for(let n=0;n<a;n++){z[o*a+n]=1&o?e(t[(r-1)*a+n],t[r*a+n],t[(r+1)*a+n],t[(r+2)*a+n]):t[r*a+n];let i=(n>>1)+1,s=S[r*A+i],l=1&n?(s+S[r*A+i+1])/2:s,f=1&o?1&n?(S[(r+1)*A+i]+S[(r+1)*A+i+1])/2:S[(r+1)*A+i]:l;E[o*a+n]=(l+f)/2}}})(),(()=>{let e=[],t=Math.max(1,Math.floor(z.length/4096));for(let a=0;a<z.length;a+=t)e.push(z[a]);e.sort((e,t)=>e-t);let o=e[Math.floor(.02*e.length)],n=1/(e[Math.floor(.98*e.length)]-o||1),i=n*N*.012;for(let e=0;e<r;e++)for(let t=0;t<a;t++){let s=e*a+t,l=(z[s]-o)*n;l=l<0?0:l>1?1:l;let g=1;for(;g<f.length-1&&f[g].t<l;)g++;let d=f[g-1],c=f[g],x=(l-d.t)/(c.t-d.t||1);x=(x=x<0?0:x>1?1:x)*x*(3-2*x);let u=(z[t<a-1?s+1:s]-z[t>0?s-1:s])*i,b=(z[e<r-1?s+a:s]-z[e>0?s-a:s])*i,m=(-(-.55*u)- -.65*b+.52)/Math.sqrt(u*u+b*b+1),v=Math.pow(m>0?m:0,24)*p*255,y=(.82+.28*m)*(1+.035*Math.sin(150*l+24*E[s]))*(1-h*Math.max(0,1-14*Math.abs(E[s]-.42))*.6);R[4*s]=(d.c[0]+(c.c[0]-d.c[0])*x)*y+v,R[4*s+1]=(d.c[1]+(c.c[1]-d.c[1])*x)*y+v,R[4*s+2]=(d.c[2]+(c.c[2]-d.c[2])*x)*y+v,R[4*s+3]=255}})(),!0)}}),priority:c,done:t}),function(){if(l)return;l=!0;let e=()=>{let t=performance.now()+7;for(;s.length&&performance.now()<t;){let e=s[0];if(e.job.step(4)){s.shift();let t=document.createElement("canvas");t.width=e.job.width,t.height=e.job.height,t.getContext("2d")?.putImageData(new ImageData(e.job.pixels,t.width,t.height),0,0),e.done(t)}}s.length?requestAnimationFrame(e):l=!1};requestAnimationFrame(e)}()}),i.set(t,a)),a).then(e=>{let t=x.current;r&&t&&(t.width=e.width,t.height=e.height,t.getContext("2d")?.drawImage(e,0,0),b(!0))}),()=>{r=!1}},[m,n,v,y,c]),(0,t.jsx)("canvas",{ref:x,"aria-hidden":"true",className:h,"data-ready":u||void 0,style:{width:g,height:d,maxWidth:"none"}})}let g="M0 56A22 22 0 0 1 22 34L146 34C170 34 172 0 198 0L318 0A22 22 0 0 1 340 22L340 250A22 22 0 0 1 318 272L22 272A22 22 0 0 1 0 250Z",d="M0 22A22 22 0 0 1 22 0L118 0C144 0 146 32 172 32L318 32A22 22 0 0 1 340 54L340 176A22 22 0 0 1 318 198L22 198A22 22 0 0 1 0 176Z",p=e=>{var t;let a,r;return e+" "+(t="элементов",r=(a=Math.abs(e)%100)%10,a>10&&a<20?t:1===r?"элемент":r>=2&&r<=4?"элемента":t)},c=[{name:"Cover — final",meta:"PNG · 4.8 MB",art:"ember"},{name:"Moodboard",meta:"24 images",art:"dusk"},{name:"Brief.pdf",meta:"PDF · 1.2 MB"}],h=`
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
`;e.s(["ArtCanvas",0,f,"default",0,function({label:e="My Files",meta:r,tone:i="light",art:s="aurora",seed:l=3,image:x,files:u=c,action:b="add",onAdd:m,onFilesChange:v,menu:y=[],labelPlacement:k="bottom-left",open:w,defaultOpen:j=!1,onOpenChange:M,onFileSelect:N,width:A=340,appear:C=!0,appearDelay:F=0,itemsLabel:S=p,peek:z=!1,className:E,style:R}){let L=a.useId().replace(/:/g,""),I=a.useRef(null),P=a.useRef(null),O=a.useRef(null),B=a.useRef(null),T=a.useRef(null),[q,D]=a.useState(u),U=a.useRef(u.map((e,t)=>t)),Y=a.useRef(u.length),[X,H]=a.useState(null),[J,K]=a.useState(0),[G,W]=a.useState(j),Z=w??G,$=a.useCallback(e=>{void 0===w&&W(e),M?.(e)},[w,M]),[Q,V]=a.useState(!1),[_,ee]=a.useState(!C),et=A/340,ea=Math.min(1.5,Math.max(1,window.devicePixelRatio||1))*et;a.useEffect(()=>{if(!C)return;let e=I.current;if(!e||"u"<typeof IntersectionObserver)return void ee(!0);let t=0,a=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(a.disconnect(),t=window.setTimeout(()=>ee(!0),F))},{threshold:.25});return a.observe(e),()=>{a.disconnect(),window.clearTimeout(t)}},[C,F]),a.useEffect(()=>{let e=I.current;if(!e)return;let t=0,a=0,r=0,o=()=>{t=0,e.style.setProperty("--gf-px",a.toFixed(3)),e.style.setProperty("--gf-py",r.toFixed(3))},n=n=>{if("touch"===n.pointerType)return;let i=e.getBoundingClientRect();a=(n.clientX-i.left)/i.width*2-1,r=(n.clientY-i.top)/i.height*2-1,t||(t=requestAnimationFrame(o))},i=()=>{a=0,r=0,t||(t=requestAnimationFrame(o))};return e.addEventListener("pointermove",n),e.addEventListener("pointerleave",i),()=>{e.removeEventListener("pointermove",n),e.removeEventListener("pointerleave",i),cancelAnimationFrame(t)}},[]);let er=z&&!Z;a.useEffect(()=>{P.current?.toggleAttribute("inert",!Z&&!z)},[Z,z]),a.useEffect(()=>{if(!Z&&!Q)return;let e=e=>{"Escape"===e.key&&(Q?(V(!1),B.current?.focus()):($(!1),O.current?.focus()))},t=e=>{let t=e.target;!Q||T.current?.contains(t)||B.current?.contains(t)||V(!1),!Z||Q||I.current?.contains(t)||$(!1)};return document.addEventListener("keydown",e),document.addEventListener("pointerdown",t),()=>{document.removeEventListener("keydown",e),document.removeEventListener("pointerdown",t)}},[Z,Q,$]),a.useEffect(()=>{Q&&T.current?.querySelector("[role=menuitem]")?.focus()},[Q]);let eo=[{label:Z?"Закрыть папку":"Открыть папку",onSelect:()=>$(!Z)},...y],en=Math.max(0,q.length-4),ei=q.slice(en),es=q.length,el=r??S(es);return(0,t.jsxs)("div",{ref:I,className:"gf-root"+(E?" "+E:""),"data-tone":i,"data-open":Z||void 0,"data-peek":z||void 0,"data-entered":_||void 0,"data-place":k,style:{width:A,height:326*et,...R},children:[(0,t.jsx)("style",{children:h}),(0,t.jsx)("div",{className:"gf-stage",style:{transform:"translateY("+54*et+"px) scale("+et+")"},children:(0,t.jsxs)("div",{className:"gf-tilt",children:[(0,t.jsx)("div",{className:"gf-shadow","aria-hidden":"true"}),(0,t.jsxs)("div",{className:"gf-back",style:{clipPath:"path('"+g+"')"},"aria-hidden":"true",children:[x?(0,t.jsx)("img",{className:"gf-art",src:x,alt:"",width:364,height:296,draggable:!1}):"none"!==s?(0,t.jsx)(f,{className:"gf-art",art:s,seed:l,w:364,h:296,density:ea,priority:0}):null,(0,t.jsx)("div",{className:"gf-back-sheen"})]}),(0,t.jsx)("svg",{className:"gf-rim gf-back-rim",viewBox:"0 0 340 272","aria-hidden":"true",children:(0,t.jsx)("path",{d:g})}),(0,t.jsxs)("div",{className:"gf-front"+(J?" gf-front--bump":""),style:{clipPath:"path('"+d+"')"},children:[(0,t.jsx)("div",{className:"gf-tint","aria-hidden":"true"}),(0,t.jsx)("div",{className:"gf-spec","aria-hidden":"true"}),(0,t.jsxs)("svg",{className:"gf-rim gf-front-rim",viewBox:"0 0 340 198","aria-hidden":"true",children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{id:"gf-rim-"+L,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"#fff",stopOpacity:"0.95"}),(0,t.jsx)("stop",{offset:"0.35",stopColor:"#fff",stopOpacity:"0.35"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#fff",stopOpacity:"0.12"})]})}),(0,t.jsx)("path",{d:d,stroke:"url(#gf-rim-"+L+")"})]}),(0,t.jsx)("button",{ref:O,type:"button",className:"gf-hit","aria-expanded":Z,"aria-label":(Z?"Закрыть папку «":"Открыть папку «")+e+"», "+S(es),onClick:()=>{V(!1),$(!Z)}}),(0,t.jsxs)("div",{className:"gf-label",children:[(0,t.jsx)("span",{className:"gf-title",children:e}),(0,t.jsx)("span",{className:"gf-meta",children:el},el)]})]},J),(0,t.jsx)("div",{ref:P,className:"gf-files",role:"list","aria-label":"Содержимое папки «"+e+"»","aria-hidden":er||void 0,children:ei.map((e,a)=>{var r;let i=U.current[en+a],s=(r=ei.length)<=1?0:a/(r-1)*2-1,l=o(n(e.name)+i),g=!!(e.art||e.image),d=(0,t.jsxs)(t.Fragment,{children:[g?e.image?(0,t.jsx)("img",{className:"gf-sheet-art",src:e.image,alt:"",width:272,height:184,draggable:!1}):(0,t.jsx)(f,{className:"gf-sheet-art",art:e.art,seed:n(e.name)%997,w:272,h:184,density:Math.min(ea,1.25),priority:1}):(0,t.jsxs)("span",{className:"gf-lines","aria-hidden":"true",children:[(0,t.jsx)("i",{style:{width:"86%"}}),(0,t.jsx)("i",{style:{width:"92%"}}),(0,t.jsx)("i",{style:{width:"64%"}}),(0,t.jsx)("i",{style:{width:"88%"}}),(0,t.jsx)("i",{style:{width:"42%"}})]}),(0,t.jsxs)("span",{className:"gf-sheet-head",children:[(0,t.jsx)("span",{className:"gf-sheet-name",children:e.name}),e.meta?(0,t.jsx)("span",{className:"gf-sheet-meta",children:e.meta}):null]})]}),p={className:"gf-sheet"+(g?" gf-sheet--art":"")+(i===X?" gf-sheet--drop":""),style:{"--gf-slot":s,"--gf-depth":ei.length-1-a,"--gf-jx":((l()-.5)*10).toFixed(2)+"px","--gf-jr":((l()-.5)*3.2).toFixed(2)+"deg",zIndex:a+1},onAnimationEnd:i===X?()=>H(null):void 0,tabIndex:er?-1:void 0};return(0,t.jsx)("div",{role:"listitem",className:"gf-sheet-slot",children:e.href?(0,t.jsx)("a",{...p,href:e.href,onClick:()=>N?.(e,en+a),children:d}):(0,t.jsx)("button",{...p,type:"button",onClick:()=>N?.(e,en+a),children:d})},i)})}),"none"!==b?(0,t.jsx)("button",{ref:B,type:"button",className:"gf-key gf-key--"+b,"aria-label":"add"===b?"Добавить файл в «"+e+"»":"Действия с папкой «"+e+"»","aria-haspopup":"more"===b?"menu":void 0,"aria-expanded":"more"===b?Q:void 0,"aria-controls":"more"===b?"gf-menu-"+L:void 0,onClick:()=>{let e,t,a;return"add"===b?(e=m?.(q)||{name:"Без названия "+(q.length+1),meta:"Только что"},t=[...q,e],a=Y.current++,void(U.current=[...U.current,a],D(t),H(a),K(e=>e+1),v?.(t))):V(e=>!e)},children:"add"===b?(0,t.jsx)("svg",{className:"gf-glyph gf-glyph--plus",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M12 4.5v15M4.5 12h15"})},J):(0,t.jsxs)("svg",{className:"gf-glyph gf-glyph--more",viewBox:"0 0 30 12","aria-hidden":"true",children:[(0,t.jsx)("rect",{x:"1",y:"1.5",width:"8",height:"9",rx:"3.4"}),(0,t.jsx)("rect",{x:"11",y:"1.5",width:"8",height:"9",rx:"3.4"}),(0,t.jsx)("rect",{x:"21",y:"1.5",width:"8",height:"9",rx:"3.4"})]})}):null,"more"===b?(0,t.jsx)("div",{ref:T,id:"gf-menu-"+L,role:"menu","aria-label":"Меню папки «"+e+"»",className:"gf-menu","data-open":Q||void 0,onKeyDown:e=>{let t=Array.from(T.current?.querySelectorAll("[role=menuitem]")??[]),a=t.indexOf(document.activeElement),r=a=>{e.preventDefault(),t[(a+t.length)%t.length]?.focus()};"ArrowDown"===e.key?r(a+1):"ArrowUp"===e.key?r(a-1):"Home"===e.key?r(0):"End"===e.key?r(t.length-1):"Tab"===e.key&&V(!1)},children:eo.map((e,a)=>(0,t.jsx)("button",{type:"button",role:"menuitem",tabIndex:Q?-1:void 0,disabled:!Q,className:"gf-menu-item"+(e.danger?" gf-menu-item--danger":""),onClick:()=>{V(!1),B.current?.focus(),e.onSelect?.()},children:e.label},e.label+a))}):null]})})]})},"hashString",0,n],61005);let x=`
.art-panel-canvas { position: absolute; left: 0; top: 0; opacity: 0; filter: blur(12px) saturate(.7); transition: opacity 1s cubic-bezier(.2,.8,.2,1), filter 1s cubic-bezier(.2,.8,.2,1); }
.art-panel-canvas[data-ready] { opacity: 1; filter: none; }
`;e.s(["ArtPanel",0,function({art:e,seed:r,seedKey:o,className:i,density:s=1}){let l=a.useRef(null),[g,d]=a.useState(null);a.useEffect(()=>{let e=l.current;if(!e)return;let t=()=>{let t=Math.max(80,80*Math.ceil(e.offsetWidth/80)),a=Math.max(80,80*Math.ceil(e.offsetHeight/80));d(e=>e&&e.w===t&&e.h===a?e:{w:t,h:a})};t();let a=new ResizeObserver(t);return a.observe(e),()=>a.disconnect()},[]);let p=r??(o?n(o)%997:3);return(0,t.jsxs)("div",{ref:l,"aria-hidden":"true",className:"art-panel absolute inset-0 overflow-hidden "+(i??""),children:[g?(0,t.jsx)(f,{art:e,seed:p,w:g.w,h:g.h,density:s,priority:0,className:"art-panel-canvas"}):null,(0,t.jsx)("style",{children:x})]})}],42920)}]);