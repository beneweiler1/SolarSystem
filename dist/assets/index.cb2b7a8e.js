import{S as L,P as R,W as b,a as q,A,T as m,F as _,b as u,M as s,c as i,d as I,e as l,f as p,g as j}from"./vendor.bf2d2062.js";const J=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))M(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const F of c.addedNodes)F.tagName==="LINK"&&F.rel==="modulepreload"&&M(F)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function M(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}};J();const e=new L,r=new R(40,window.innerWidth/window.innerHeight,.1,2e3),w=new b({canvas:document.querySelector("#bg")});w.setPixelRatio(window.devicePixelRatio);w.setSize(window.innerWidth,window.innerHeight);r.position.setZ(4900);w.render(e,r);const P=new q(16777215),N=new A(16777215);P.position.set(100,100,100);e.add(N,P);document.addEventListener("mousewheel",o=>{r.position.z+=o.deltaY/100});document.addEventListener("keypress",o=>{o.key=="w"&&(r.position.z-=1),o.key=="s"&&(r.position.z+=1),o.key=="a"&&(r.position.z+=10),o.key=="d"&&(r.position.z-=10)});const W=new m().load("images/sun.jpg"),O=new m().load("images/Mercury.jpg"),U=new m().load("images/venus.jpg"),G=new m().load("images/Earth.jpg"),C=new m().load("images/moon.jpg"),H=new m().load("images/mars.png"),V=new m().load("images/Jupiter.jpg"),D=new m().load("images/Saturn.jpg"),K=new m().load("images/Uranus.jpg"),Y=new m().load("images/Neptune.jpg");new m().load("images/normal.jpg");const d=new _;d.load("fonts/SquareFont_Regular.json",function(o){const t=new u(`Move 1,000,000 km forward with "w" and backward with "s" 
 move 10,000,000 km forward with "d" and backward with "a"`,{font:o,size:8,height:2}),n=new s(t,[new i({color:16711935}),new i({color:15})]);n.castShadow=!0,n.position.z=4630,n.position.x=-160,n.position.y=-70,e.add(n)});d.load("fonts/StarJedi Special Edition_Regular.json",function(o){const t=new u(`Welcome to our Solar System 
   Created by Ben Weiler`,{font:o,size:11,height:4}),n=new s(t,[new i({color:16711935}),new i({color:0})]);n.castShadow=!0,n.position.z=4660,n.position.x=-130,n.position.y=60,e.add(n)});d.load("fonts/StarJedi Special Edition_Regular.json",function(o){const t=new u("The End",{font:o,size:.8,height:4}),n=new s(t,[new i({color:16711935}),new i({color:0})]);n.castShadow=!0,n.position.z=-80,n.position.x=-2,n.position.y=0,e.add(n)});var Z=new I(15,.8,100,2999);const f=new s(Z,new l({color:8421504,wireframe:!0}));e.add(f);f.position.z=3075;f.rotation.y=-.1;f.rotation.x=30;const h=new s(new p(50,32,32),new l({map:W}));e.add(h);h.position.z=4500;d.load("fonts/SquareFont_Regular.json",function(o){const t=new u(` Sun 
 Largest Object in Solar System 
 Mass: 333,000*mass of Earth 
 Size: 109*Earth Radius`,{font:o,size:5,height:2}),n=new s(t,[new i({color:16711680}),new i({color:0})]);n.castShadow=!0,n.position.z=h.position.z,n.position.x=55,n.position.y=10,e.add(n)});const g=new s(new p(.33),new l({map:O}));e.add(g);g.position.z=4442.1;d.load("fonts/SquareFont_Regular.json",function(o){const t=new u(` Mercury 
 Second Smallest Planet 
 Terrestrial Planet 
 Mass: 0.056*mass of Earth 
 Size: 0.38*Earth Radius 
 57,900,000 km from sun`,{font:o,size:.07,height:2}),n=new s(t,[new i({color:10158335}),new i({color:0})]);n.castShadow=!0,n.position.z=g.position.z,n.position.x=-.5,n.position.y=.9,e.add(n)});const y=new s(new p(.95),new l({map:U}));e.add(y);y.position.z=4392;d.load("fonts/SquareFont_Regular.json",function(o){const t=new u(` Venus 
 Fourth Smallest Planet 
 Terrestrial Planet 
 Mass: 0.82*mass of Earth 
 Size: 0.95*Earth Radius 
 108,000,000 km from sun`,{font:o,size:.06,height:1}),n=new s(t,[new i({color:14916352}),new i({color:0})]);n.position.z=y.position.z,n.position.x=.85,n.position.y=.3,e.add(n)});const z=new s(new p(1),new l({map:G}));e.add(z);z.position.z=4351;const x=new s(new p(.22,32,32),new l({map:C}));d.load("fonts/SquareFont_Regular.json",function(o){const t=new u(` Earth 
 Fifth Smallest Planet 
 Terrestrial Planet 
 Mass: 60.0E24 kg 
 Size: 6,378 km 
 149,600,000 km from sun 
 home`,{font:o,size:.09,height:2}),n=new s(t,[new i({color:655587}),new i({color:0})]);n.castShadow=!0,n.position.z=z.position.z-1,n.position.x=1,n.position.y=.4,e.add(n)});e.add(x);x.position.z=4350.616;d.load("fonts/SquareFont_Regular.json",function(o){const t=new u(` Moon 
 238,900 km from Earth 
 First solar object explored by humans other than earth`,{font:o,size:.02,height:2}),n=new s(t,[new i({color:6974058}),new i({color:0})]);n.castShadow=!0,n.position.z=x.position.z-2,n.position.x=-.23,n.position.y=.3,e.add(n)});const S=new s(new p(.53,32,32),new l({map:H}));e.add(S);S.position.z=4272;d.load("fonts/SquareFont_Regular.json",function(o){const t=new u(` Mars 
 Third Smallest Planet 
 Terrestrial Planet 
 Mass: Earth*0.11 kg 
 Size: Earth*0.53 km 
 228,000,000 km from Sun`,{font:o,size:.1,height:2}),n=new s(t,[new i({color:13915904}),new i({color:0})]);n.castShadow=!0,n.position.z=S.position.z-2,n.position.x=.8,n.position.y=.3,e.add(n)});const E=new s(new p(11,32,32),new l({map:V}));e.add(E);E.position.z=3722;d.load("fonts/SquareFont_Regular.json",function(o){const t=new u(` Jupiter 
 Largest Planet 
 Jovian Planet 
 Mass: Earth*317.9 kg 
 Size: Earth*11.3 km 
 779,000,000 km from Sun`,{font:o,size:.7,height:3}),n=new s(t,[new i({color:16759176}),new i({color:0})]);n.castShadow=!0,n.position.z=E.position.z+5,n.position.x=-22,n.position.y=3.5,e.add(n)});const k=new s(new p(9,32,32),new l({map:D}));e.add(k);k.position.z=3070;d.load("fonts/SquareFont_Regular.json",function(o){const t=new u(` Saturn 
 Second Largest Planet 
 Jovian Planet 
 Mass: Earth*95.1 kg 
 Size: Earth*9.4 km 
 1,430,000,000 km from sun`,{font:o,size:.7,height:3}),n=new s(t,[new i({color:15255934}),new i({color:0})]);n.castShadow=!0,n.position.z=k.position.z+5,n.position.x=-20,n.position.y=6.2,e.add(n)});const v=new s(new p(4,32,32),new l({map:K}));e.add(v);v.position.z=650;d.load("fonts/SquareFont_Regular.json",function(o){const t=new u(` Uranus 
 Third Largest Planet 
 Jovian Planet 
 Mass: Earth*14.54 kg 
 Size: Earth*4 km 
 2,850,000,000 km from sun`,{font:o,size:.2,height:3}),n=new s(t,[new i({color:44799}),new i({color:0})]);n.castShadow=!0,n.position.z=v.position.z+1,n.position.x=3.8,n.position.y=.8,e.add(n)});const B=new s(new p(4,32,32),new l({map:Y}));e.add(B);d.load("fonts/SquareFont_Regular.json",function(o){const t=new u(` Netptune 
 Fourth Largest Planet 
 Jovian Planet 
 Mass: Earth*17.1 kg 
 Size: Earth*3.9 km 
 4,500,000,000 km from sun`,{font:o,size:.2,height:3}),n=new s(t,[new i({color:44799}),new i({color:0})]);n.castShadow=!0,n.position.z=B.position.z+1,n.position.x=3.8,n.position.y=.8,e.add(n)});function Q(){const o=new p(.25,24,24),t=new l({color:16777215}),n=new s(o,t);var[M,a]=Array(2).fill().map(()=>j.randFloatSpread(500)),[c]=Array(1).fill().map(()=>j.randFloatSpread(9e3));n.position.set(M,a,c),e.add(n)}Array(1e3).fill().forEach(Q);function T(){requestAnimationFrame(T),h.rotation.y+=37e-5,g.rotation.y+=17e-5,y.rotation.y+=4e-4,z.rotation.y+=.01,x.rotation.y+=3e-4,S.rotation.y+=.01,E.rotation.y+=.024,k.rotation.y+=.021,v.rotation.y+=.014,B.rotation.y+=.015,f.rotation.z+=.001,w.setSize(window.innerWidth,window.innerHeight),w.render(e,r)}function X(){r.position.z=h.position.z+250}var $=document.getElementById("sunButton");$.onclick=X;function nn(){r.position.z=g.position.z+5}var on=document.getElementById("mercuryButton");on.onclick=nn;function tn(){r.position.z=y.position.z+5}var en=document.getElementById("venusButton");en.onclick=tn;function sn(){r.position.z=z.position.z+5}var rn=document.getElementById("earthButton");rn.onclick=sn;function an(){r.position.z=x.position.z+1}var cn=document.getElementById("moonButton");cn.onclick=an;function un(){r.position.z=S.position.z+5}var dn=document.getElementById("marsButton");dn.onclick=un;function ln(){r.position.z=E.position.z+40}var mn=document.getElementById("jupiterButton");mn.onclick=ln;function pn(){r.position.z=k.position.z+40}var wn=document.getElementById("saturnButton");wn.onclick=pn;function fn(){r.position.z=v.position.z+15}var hn=document.getElementById("uranusButton");hn.onclick=fn;function gn(){r.position.z=B.position.z+15}var yn=document.getElementById("neptuneButton");yn.onclick=gn;function zn(){r.position.z=4900}var xn=document.getElementById("startButton");xn.onclick=zn;T();
