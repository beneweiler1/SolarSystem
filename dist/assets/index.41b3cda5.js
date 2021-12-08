import{S as R,P as b,W as q,a as A,A as _,T as m,F as I,b as u,M as s,c as i,d as J,e as l,f as p,g as P}from"./vendor.bf2d2062.js";const N=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))B(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const j of c.addedNodes)j.tagName==="LINK"&&j.rel==="modulepreload"&&B(j)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function B(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}};N();const e=new R,a=new b(40,window.innerWidth/window.innerHeight,.1,2e3),f=new q({canvas:document.querySelector("#bg")});f.setPixelRatio(window.devicePixelRatio);f.setSize(window.innerWidth,window.innerHeight);a.position.setZ(4900);f.render(e,a);const T=new A(16777215),W=new _(16777215);T.position.set(100,100,100);e.add(W,T);document.addEventListener("mousewheel",o=>{a.position.z+=o.deltaY/100});document.addEventListener("keypress",o=>{o.key=="w"&&(a.position.z-=1),o.key=="s"&&(a.position.z+=1),o.key=="a"&&(a.position.z+=10),o.key=="d"&&(a.position.z-=10)});const U=new m().load("images/sun.jpg"),O=new m().load("images/Mercury.jpg"),G=new m().load("images/venus.jpg"),H=new m().load("images/Earth.jpg"),C=new m().load("images/moon.jpg"),V=new m().load("images/mars.png"),D=new m().load("images/Jupiter.jpg"),K=new m().load("images/Saturn.jpg"),Y=new m().load("images/Uranus.jpg"),Z=new m().load("images/Neptune.jpg"),w=new m().load("images/normal.jpg"),d=new I;d.load("fonts/SquareFont_Regular.json",function(o){const t=new u(`Move 1,000,000 km forward with "w" and backward with "s" 
 move 10,000,000 km forward with "d" and backward with "a"`,{font:o,size:8,height:2}),n=new s(t,[new i({color:16711935}),new i({color:15})]);n.castShadow=!0,n.position.z=4630,n.position.x=-160,n.position.y=-70,e.add(n)});d.load("fonts/StarJedi Special Edition_Regular.json",function(o){const t=new u(`Welcome to our Solar System 
   Created by Ben Weiler`,{font:o,size:11,height:4}),n=new s(t,[new i({color:16711935}),new i({color:0})]);n.castShadow=!0,n.position.z=4660,n.position.x=-130,n.position.y=60,e.add(n)});d.load("fonts/StarJedi Special Edition_Regular.json",function(o){const t=new u("The End",{font:o,size:.8,height:4}),n=new s(t,[new i({color:16711935}),new i({color:0})]);n.castShadow=!0,n.position.z=-80,n.position.x=-2,n.position.y=0,e.add(n)});var Q=new J(15,.8,100,2999);const h=new s(Q,new l({color:8421504,wireframe:!0}));e.add(h);h.position.z=3075;h.rotation.y=-.1;h.rotation.x=30;const g=new s(new p(50,32,32),new l({map:U,normalMap:w}));e.add(g);g.position.z=4500;d.load("fonts/SquareFont_Regular.json",function(o){const t=new u(` Sun 
 Largest Object in Solar System 
 Mass: 333,000*mass of Earth 
 Size: 109*Earth Radius`,{font:o,size:5,height:2}),n=new s(t,[new i({color:16711680}),new i({color:0})]);n.castShadow=!0,n.position.z=g.position.z,n.position.x=55,n.position.y=10,e.add(n)});const y=new s(new p(.33),new l({map:O,normalMap:w}));e.add(y);y.position.z=4442.1;d.load("fonts/SquareFont_Regular.json",function(o){const t=new u(` Mercury 
 Second Smallest Planet 
 Terrestrial Planet 
 Mass: 0.056*mass of Earth 
 Size: 0.38*Earth Radius 
 57,900,000 km from sun`,{font:o,size:.07,height:2}),n=new s(t,[new i({color:10158335}),new i({color:0})]);n.castShadow=!0,n.position.z=y.position.z,n.position.x=-.5,n.position.y=.9,e.add(n)});const z=new s(new p(.95),new l({map:G,normalMap:w}));e.add(z);z.position.z=4392;d.load("fonts/SquareFont_Regular.json",function(o){const t=new u(` Venus 
 Fourth Smallest Planet 
 Terrestrial Planet 
 Mass: 0.82*mass of Earth 
 Size: 0.95*Earth Radius 
 108,000,000 km from sun`,{font:o,size:.06,height:1}),n=new s(t,[new i({color:14916352}),new i({color:0})]);n.position.z=z.position.z,n.position.x=.85,n.position.y=.3,e.add(n)});const x=new s(new p(1),new l({map:H,normalMap:w}));e.add(x);x.position.z=4351;const S=new s(new p(.22,32,32),new l({map:C,normalMap:w}));d.load("fonts/SquareFont_Regular.json",function(o){const t=new u(` Earth 
 Fifth Smallest Planet 
 Terrestrial Planet 
 Mass: 60.0E24 kg 
 Size: 6,378 km 
 149,600,000 km from sun 
 home`,{font:o,size:.09,height:2}),n=new s(t,[new i({color:655587}),new i({color:0})]);n.castShadow=!0,n.position.z=x.position.z-1,n.position.x=1,n.position.y=.4,e.add(n)});e.add(S);S.position.z=4350.616;d.load("fonts/SquareFont_Regular.json",function(o){const t=new u(` Moon 
 238,900 km from Earth 
 Second Solar Body Explored by HUmans`,{font:o,size:.02,height:2}),n=new s(t,[new i({color:6974058}),new i({color:0})]);n.castShadow=!0,n.position.z=S.position.z-2,n.position.x=-.23,n.position.y=.3,e.add(n)});const M=new s(new p(.53,32,32),new l({map:V,normalMap:w}));e.add(M);M.position.z=4272;d.load("fonts/SquareFont_Regular.json",function(o){const t=new u(` Mars 
 Third Smallest Planet 
 Terrestrial Planet 
 Mass: Earth*0.11 kg 
 Size: Earth*0.53 km 
 228,000,000 km from Sun`,{font:o,size:.1,height:2}),n=new s(t,[new i({color:13915904}),new i({color:0})]);n.castShadow=!0,n.position.z=M.position.z-2,n.position.x=.8,n.position.y=.3,e.add(n)});const E=new s(new p(11,32,32),new l({map:D,normalMap:w}));e.add(E);E.position.z=3722;d.load("fonts/SquareFont_Regular.json",function(o){const t=new u(` Jupiter 
 Largest Planet 
 Jovian Planet 
 Mass: Earth*317.9 kg 
 Size: Earth*11.3 km 
 779,000,000 km from Sun`,{font:o,size:.7,height:3}),n=new s(t,[new i({color:16759176}),new i({color:0})]);n.castShadow=!0,n.position.z=E.position.z+5,n.position.x=-22,n.position.y=3.5,e.add(n)});const k=new s(new p(9,32,32),new l({map:K,normalMap:w}));e.add(k);k.position.z=3070;d.load("fonts/SquareFont_Regular.json",function(o){const t=new u(` Saturn 
 Second Largest Planet 
 Jovian Planet 
 Mass: Earth*95.1 kg 
 Size: Earth*9.4 km 
 1,430,000,000 km from sun`,{font:o,size:.7,height:3}),n=new s(t,[new i({color:15255934}),new i({color:0})]);n.castShadow=!0,n.position.z=k.position.z+5,n.position.x=-20,n.position.y=6.2,e.add(n)});const v=new s(new p(4,32,32),new l({map:Y,normalMap:w}));e.add(v);v.position.z=650;d.load("fonts/SquareFont_Regular.json",function(o){const t=new u(` Uranus 
 Third Largest Planet 
 Jovian Planet 
 Mass: Earth*14.54 kg 
 Size: Earth*4 km 
 2,850,000,000 km from sun`,{font:o,size:.2,height:3}),n=new s(t,[new i({color:44799}),new i({color:0})]);n.castShadow=!0,n.position.z=v.position.z+1,n.position.x=3.8,n.position.y=.8,e.add(n)});const F=new s(new p(4,32,32),new l({map:Z,normalMap:w}));e.add(F);d.load("fonts/SquareFont_Regular.json",function(o){const t=new u(` Netptune 
 Fourth Largest Planet 
 Jovian Planet 
 Mass: Earth*17.1 kg 
 Size: Earth*3.9 km 
 4,500,000,000 km from sun`,{font:o,size:.2,height:3}),n=new s(t,[new i({color:44799}),new i({color:0})]);n.castShadow=!0,n.position.z=F.position.z+1,n.position.x=3.8,n.position.y=.8,e.add(n)});function X(){const o=new p(.25,24,24),t=new l({color:16777215}),n=new s(o,t);var[B,r]=Array(2).fill().map(()=>P.randFloatSpread(500)),[c]=Array(1).fill().map(()=>P.randFloatSpread(9e3));n.position.set(B,r,c),e.add(n)}Array(1e3).fill().forEach(X);function L(){requestAnimationFrame(L),g.rotation.y+=1e-4,y.rotation.y+=.01,z.rotation.y-=.01,x.rotation.y+=.01,S.rotation.y+=.001,M.rotation.y+=.01,E.rotation.y+=.001,k.rotation.y+=.001,v.rotation.y+=.001,F.rotation.y+=.001,h.rotation.z+=.001,f.setSize(window.innerWidth,window.innerHeight),f.render(e,a)}function $(){a.position.z=g.position.z+250}var nn=document.getElementById("sunButton");nn.onclick=$;function on(){a.position.z=y.position.z+5}var tn=document.getElementById("mercuryButton");tn.onclick=on;function en(){a.position.z=z.position.z+5}var sn=document.getElementById("venusButton");sn.onclick=en;function an(){a.position.z=x.position.z+5}var rn=document.getElementById("earthButton");rn.onclick=an;function cn(){a.position.z=S.position.z+1}var un=document.getElementById("moonButton");un.onclick=cn;function dn(){a.position.z=M.position.z+5}var ln=document.getElementById("marsButton");ln.onclick=dn;function mn(){a.position.z=E.position.z+40}var pn=document.getElementById("jupiterButton");pn.onclick=mn;function wn(){a.position.z=k.position.z+40}var fn=document.getElementById("saturnButton");fn.onclick=wn;function hn(){a.position.z=v.position.z+15}var gn=document.getElementById("uranusButton");gn.onclick=hn;function yn(){a.position.z=F.position.z+15}var zn=document.getElementById("neptuneButton");zn.onclick=yn;function xn(){a.position.z=4900}var Sn=document.getElementById("startButton");Sn.onclick=xn;L();
