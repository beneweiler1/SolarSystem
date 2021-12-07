import './style.css'
import * as THREE from 'three';
//import * as THREE from '../build/three.module.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';

import { MapControls, OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//import { GridHelper } from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight , 0.1, 2000);
//const camera = new THREE.(30, 1, 10, 2000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(4900);

renderer.render(scene,camera);


const pointLight =  new THREE.PointLight(0xffffff)
//const gridHelper = new THREE.GridHelper(200,50)
const ambientLight = new THREE.AmbientLight(0xffffff)
pointLight.position.set(0,0,50)
scene.add(ambientLight)
//scene.add(gridHelper)

//const lightHelper = new THREE.PointLightHelper(pointLight); 
//scene.add(lightHelper)

// const controls = new OrbitControls(camera, renderer.domElement)

// const controls = new FlyControls( camera, renderer.domElement );
// 				controls.movementSpeed = 1000;
// 				controls.domElement = renderer.domElement;
// 				controls.rollSpeed = Math.PI / 24;
// 				controls.autoForward = true;
// 				controls.dragToLook = false;



document.addEventListener( 'mousewheel', (event) => {
  camera.position.z +=event.deltaY/100;
});

//1,000,000 = one 
//planets are 1,000,000 times larger than they really are

document.addEventListener('keypress', (event => {
  if (event.key == 'w'){
    camera.position.z -=1;
  }
  if (event.key == 's'){
    camera.position.z +=1;
  }
  if (event.key == 'a'){
    camera.position.z +=10;
  }
  if (event.key == 'd'){
    camera.position.z -=10;
  }

}))


//load textures
const sunTexture = new THREE.TextureLoader().load('images/sun.jpg')
const mercuryTexture = new THREE.TextureLoader().load('images/Mercury.jpg')
const venusTexture = new  THREE.TextureLoader().load('images/venus.jpg')
const earthTexture = new THREE.TextureLoader().load('images/Earth.jpg')
const moonTexture = new  THREE.TextureLoader().load('images/moon.jpg')
const marsTexture = new  THREE.TextureLoader().load('images/mars.png')
const jupiterTexture = new  THREE.TextureLoader().load('images/Jupiter.jpg')
const saturnTexture = new  THREE.TextureLoader().load('images/Saturn.jpg')
const uranusTexture = new  THREE.TextureLoader().load('images/Uranus.jpg')
const neptuneTexture = new  THREE.TextureLoader().load('images/Neptune.jpg')
const normalTexture = new  THREE.TextureLoader().load('images/normal.jpg')

//https://www.youtube.com/watch?v=IA3HjAV2nzU&ab_channel=Genka

//load text fonts
const loader = new FontLoader();

loader.load('fonts/SquareFont_Regular.json', function (font) {
  const geometry = new TextGeometry('Move 1,000,000 km forward with "w" and backward with "s" \n move 10,000,000 km forward with "d" and backward with "a"' ,{
    font: font,
    size:8,
    height: 2,
  } )
  const textMesh = new THREE.Mesh(geometry, [
    new THREE.MeshPhongMaterial({color: 0xff00ff}), //font
    new THREE.MeshPhongMaterial({color: 0x00000f}) //side
  ])
  textMesh.castShadow = true
  textMesh.position.z = 4630
  textMesh.position.x = -160
  textMesh.position.y = -70
  scene.add(textMesh)
});

loader.load('fonts/StarJedi Special Edition_Regular.json', function (font) {
  const geometry = new TextGeometry('Welcome to our Solar System \n   Created by Ben Weiler',{
    font: font,
    size:11,
    height: 4,
  } )
  const textMesh = new THREE.Mesh(geometry, [
    new THREE.MeshPhongMaterial({color: 0xff00ff}), //font
    new THREE.MeshPhongMaterial({color: 0x000000}) //side
  ])
  textMesh.castShadow = true
  textMesh.position.z = 4660
  textMesh.position.x = -130
  textMesh.position.y = 60
  scene.add(textMesh)
});


loader.load('fonts/StarJedi Special Edition_Regular.json', function (font) {
  const geometry = new TextGeometry('The End',{
    font: font,
    size:0.8,
    height: 4,
  } )
  const textMesh = new THREE.Mesh(geometry, [
    new THREE.MeshPhongMaterial({color: 0xff00ff}), //font
    new THREE.MeshPhongMaterial({color: 0x000000}) //side
  ])
  textMesh.castShadow = true
  textMesh.position.z = -80
  textMesh.position.x = -2
  textMesh.position.y = 0
  scene.add(textMesh)
});




var geometry = new THREE.TorusGeometry( 15, 0.8, 100, 2999 );
const ring1 = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
  color: 0x808080, wireframe: true
}));
scene.add(ring1);

ring1.position.z = 3075
ring1.rotation.y = -0.1
//ring1.rotation.x = 30
ring1.rotation.x = 30

///////////////////////////////SUN //////////////
const Sun = new THREE.Mesh(
  new THREE.SphereGeometry(50, 32,32),
  new THREE.MeshStandardMaterial( {
    map: sunTexture,
    normalMap: normalTexture
  } )
);
scene.add(Sun)
Sun.position.z = 4500

loader.load('fonts/SquareFont_Regular.json', function (font) {
  const geometry = new TextGeometry(' Sun \n Largest Object in Solar System \n Mass: 333,000*mass of Earth \n Size: 109*Earth Radius' ,{
    font: font,
    size:5,
    height: 2,
  } )
  const textMesh = new THREE.Mesh(geometry, [
    new THREE.MeshPhongMaterial({color: 0xFF0000}), //font
    new THREE.MeshPhongMaterial({color: 0x000000}) //side
  ])
  textMesh.castShadow = true
  textMesh.position.z = Sun.position.z
  textMesh.position.x = 55
  textMesh.position.y = 10
  scene.add(textMesh)
});




/////////////////////MERCURY/////////////////////
const Mercury = new THREE.Mesh(
  new THREE.SphereGeometry(0.33),
  new THREE.MeshStandardMaterial( {
    map: mercuryTexture,
    normalMap: normalTexture
  } )
);

scene.add(Mercury)
Mercury.position.z = 4442.1

loader.load('fonts/SquareFont_Regular.json', function (font) {
  const geometry = new TextGeometry(' Mercury \n Second Smallest Planet \n Terrestrial Planet \n Mass: 0.056*mass of Earth \n Size: 0.38*Earth Radius \n 57,900,000 km from sun'  ,{
    font: font,
    size:.07,
    height: 2,
  } )
  const textMesh = new THREE.Mesh(geometry, [
    new THREE.MeshPhongMaterial({color: 0x9B00FF}), //font
    new THREE.MeshPhongMaterial({color: 0x000000}) //side
  ])
  textMesh.castShadow = true
  textMesh.position.z = Mercury.position.z
  textMesh.position.x = -0.5
  textMesh.position.y = 0.9
  scene.add(textMesh)
});



/////////////////////////VENUS///////////////////////////


const Venus = new THREE.Mesh(
  new THREE.SphereGeometry(0.95),
  new THREE.MeshStandardMaterial( {
    map: venusTexture,
    normalMap: normalTexture
  } )
);

scene.add(Venus)
Venus.position.z = 4392

loader.load('fonts/SquareFont_Regular.json', function (font) {
  const geometry = new TextGeometry(' Venus \n Fourth Smallest Planet \n Terrestrial Planet \n Mass: 0.82*mass of Earth \n Size: 0.95*Earth Radius \n 108,000,000 km from sun'  ,{
    font: font,
    size:.06,
    height: 1,
  } )
  const textMesh = new THREE.Mesh(geometry, [
    new THREE.MeshPhongMaterial({color: 0xE39B00}), //font
    new THREE.MeshPhongMaterial({color: 0x000000}) //side
  ])
  //textMesh.castShadow = true
  textMesh.position.z = Venus.position.z
  textMesh.position.x = 0.85
  textMesh.position.y = 0.3
  scene.add(textMesh)
});



/////////////////EARTH//////////////////


const Earth = new THREE.Mesh(
  new THREE.SphereGeometry(1),
  new THREE.MeshStandardMaterial( {
    map: earthTexture,
    normalMap: normalTexture
  } )
);
scene.add(Earth)
Earth.position.z = 4351

const Moon = new THREE.Mesh(
  new THREE.SphereGeometry(0.22,32,32),
  new THREE.MeshStandardMaterial( {
    map: moonTexture,
    normalMap: normalTexture
  } )
);

loader.load('fonts/SquareFont_Regular.json', function (font) {
  const geometry = new TextGeometry(' Earth \n Fifth Smallest Planet \n Terrestrial Planet \n Mass: 60.0E24 kg \n Size: 6,378 km \n 149,600,000 km from sun \n home' ,{
    font: font,
    size:.09,
    height: 2,
  } )
  const textMesh = new THREE.Mesh(geometry, [
    new THREE.MeshPhongMaterial({color: 0x0A00E3}), //font
    new THREE.MeshPhongMaterial({color: 0x000000}) //side
  ])
  textMesh.castShadow = true
  textMesh.position.z = Earth.position.z - 1
  textMesh.position.x = 1
  textMesh.position.y = 0.4
  scene.add(textMesh)
});



scene.add(Moon)
Moon.position.z = 4350.616

loader.load('fonts/SquareFont_Regular.json', function (font) {
  const geometry = new TextGeometry(' Moon \n 238,900 km from Earth \n Second Solar Body Explored by HUmans' ,{
    font: font,
    size:.02,
    height: 2,
  } )
  const textMesh = new THREE.Mesh(geometry, [
    new THREE.MeshPhongMaterial({color: 0x6A6A6A}), //font
    new THREE.MeshPhongMaterial({color: 0x000000}) //side
  ])
  textMesh.castShadow = true
  textMesh.position.z = Moon.position.z - 2
  textMesh.position.x = -0.23
  textMesh.position.y = 0.3
  scene.add(textMesh)
});




///////////////////MARS/////////////////
const Mars = new THREE.Mesh(
  new THREE.SphereGeometry(0.53,32,32),
  new THREE.MeshStandardMaterial( {
    map: marsTexture,
    normalMap: normalTexture
  } )
);
scene.add(Mars)
Mars.position.z = 4272

loader.load('fonts/SquareFont_Regular.json', function (font) {
  const geometry = new TextGeometry(' Mars \n Third Smallest Planet \n Terrestrial Planet \n Mass: Earth*0.11 kg \n Size: Earth*0.53 km \n 228,000,000 km from Sun' ,{
    font: font,
    size:0.1,
    height: 2,
  } )
  const textMesh = new THREE.Mesh(geometry, [
    new THREE.MeshPhongMaterial({color: 0xD45700}), //font
    new THREE.MeshPhongMaterial({color: 0x000000}) //side
  ])
  textMesh.castShadow = true
  textMesh.position.z = Mars.position.z - 2
  textMesh.position.x = 0.8
  textMesh.position.y = 0.3
  scene.add(textMesh)
});

/////////////JUPITER//////////


const Jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(11,32,32),
  new THREE.MeshStandardMaterial( {
    map: jupiterTexture,
    normalMap: normalTexture
  } )
);
scene.add(Jupiter)
Jupiter.position.z = 3722

loader.load('fonts/SquareFont_Regular.json', function (font) {
  const geometry = new TextGeometry(' Jupiter \n Largest Planet \n Jovian Planet \n Mass: Earth*317.9 kg \n Size: Earth*11.3 km \n 779,000,000 km from Sun' ,{
    font: font,
    size:0.7,
    height: 3,
  } )
  const textMesh = new THREE.Mesh(geometry, [
    new THREE.MeshPhongMaterial({color: 0xFFB988}), //font
    new THREE.MeshPhongMaterial({color: 0x000000}) //side
  ])
  textMesh.castShadow = true
  textMesh.position.z = Jupiter.position.z + 5
  textMesh.position.x = -22
  textMesh.position.y = 3.5
  scene.add(textMesh)
});


//////////////////////SATURN


const Saturn = new THREE.Mesh(
  new THREE.SphereGeometry(9,32,32),
  new THREE.MeshStandardMaterial( {
    map: saturnTexture,
    normalMap: normalTexture
  } )
);
scene.add(Saturn)
Saturn.position.z = 3070

loader.load('fonts/SquareFont_Regular.json', function (font) {
  const geometry = new TextGeometry(' Saturn \n Second Largest Planet \n Jovian Planet \n Mass: Earth*95.1 kg \n Size: Earth*9.4 km \n 1,430,000,000 km from sun' ,{
    font: font,
    size:0.7,
    height: 3,
  } )
  const textMesh = new THREE.Mesh(geometry, [
    new THREE.MeshPhongMaterial({color: 0xE8C97E}), //font
    new THREE.MeshPhongMaterial({color: 0x000000}) //side
  ])
  textMesh.castShadow = true
  textMesh.position.z = Saturn.position.z + 5
  textMesh.position.x = -20
  textMesh.position.y = 6.2
  scene.add(textMesh)
});


/////////////////////URANUS


const Uranus = new THREE.Mesh(
  new THREE.SphereGeometry(4,32,32),
  new THREE.MeshStandardMaterial( {
    map: uranusTexture,
    normalMap: normalTexture
  } )
);
scene.add(Uranus)
Uranus.position.z = 650

loader.load('fonts/SquareFont_Regular.json', function (font) {
  const geometry = new TextGeometry(' Uranus \n Third Largest Planet \n Jovian Planet \n Mass: Earth*14.54 kg \n Size: Earth*4 km \n 2,850,000,000 km from sun' ,{
    font: font,
    size:0.2,
    height: 3,
  } )
  const textMesh = new THREE.Mesh(geometry, [
    new THREE.MeshPhongMaterial({color: 0x00AEFF}), //font
    new THREE.MeshPhongMaterial({color: 0x000000}) //side
  ])
  textMesh.castShadow = true
  textMesh.position.z = Uranus.position.z + 1
  textMesh.position.x = 3.8
  textMesh.position.y = 0.8
  scene.add(textMesh)
});


/////////////////NEPTUNE

const Neptune = new THREE.Mesh(
  new THREE.SphereGeometry(4,32,32),
  new THREE.MeshStandardMaterial( {
    map: neptuneTexture,
    normalMap: normalTexture
  } )
);
scene.add(Neptune)

loader.load('fonts/SquareFont_Regular.json', function (font) {
  const geometry = new TextGeometry(' Netptune \n Fourth Largest Planet \n Jovian Planet \n Mass: Earth*17.1 kg \n Size: Earth*3.9 km \n 4,500,000,000 km from sun' ,{
    font: font,
    size:0.2,
    height: 3,
  } )
  const textMesh = new THREE.Mesh(geometry, [
    new THREE.MeshPhongMaterial({color: 0x00AEFF}), //font
    new THREE.MeshPhongMaterial({color: 0x000000}) //side
  ])
  textMesh.castShadow = true
  textMesh.position.z = Neptune.position.z + 1
  textMesh.position.x = 3.8
  textMesh.position.y = 0.8
  scene.add(textMesh)
});




function addStar(){
  const geometry = new THREE.SphereGeometry(.25,24,24)
  const material = new THREE.MeshStandardMaterial({color: 0xffffff})
  const star = new THREE.Mesh(geometry,material);

  var [x,y] = Array(2).fill().map(() => THREE.MathUtils.randFloatSpread(500));
  var [z] = Array(1).fill().map(() => THREE.MathUtils.randFloatSpread(9000));
  star.position.set(x,y,z);
  scene.add(star)
}
Array(1000).fill().forEach(addStar)


function animate() {
  requestAnimationFrame( animate );
  Sun.rotation.y += 0.0001
  Mercury.rotation.y += 0.01
  Venus.rotation.y -= 0.01
  Earth.rotation.y += 0.01
  Moon.rotation.y += 0.001
  Mars.rotation.y += 0.01
  Jupiter.rotation.y += 0.001
  Saturn.rotation.y += 0.001
  Uranus.rotation.y += 0.001
  Neptune.rotation.y += 0.001
  ring1.rotation.z += 0.001
  // ring1.rotation.x += .011
  // ring1.rotation.y += .01
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
  //controls.update();
}

function moveSun(){
  camera.position.z = Sun.position.z + 250
}
var sunButton = document.getElementById('sunButton')
sunButton.onclick = moveSun

function moveMercury(){
  camera.position.z = Mercury.position.z + 5
}
var mercuryButton = document.getElementById('mercuryButton')
mercuryButton.onclick = moveMercury

function moveVenus(){
  camera.position.z = Venus.position.z + 5
}
var venusButton = document.getElementById('venusButton')
venusButton.onclick = moveVenus

function moveEarth(){
  camera.position.z = Earth.position.z + 5
}
var earthButton = document.getElementById('earthButton')
earthButton.onclick = moveEarth
function moveMoon(){
  camera.position.z = Moon.position.z + 1
}
var moonButton = document.getElementById('moonButton')
moonButton.onclick = moveMoon
function moveMars(){
  camera.position.z = Mars.position.z + 5
}
var marsButton = document.getElementById('marsButton')
marsButton.onclick = moveMars

function moveJupiter(){
  camera.position.z = Jupiter.position.z + 40
}
var jupiterButton = document.getElementById('jupiterButton')
jupiterButton.onclick = moveJupiter

function moveSaturn(){
  camera.position.z = Saturn.position.z + 40
}
var saturnButton = document.getElementById('saturnButton')
saturnButton.onclick = moveSaturn

function moveUranus(){
  camera.position.z = Uranus.position.z + 15
}
var uranusButton = document.getElementById('uranusButton')
uranusButton.onclick = moveUranus

function moveNeptune(){
  camera.position.z = Neptune.position.z + 15
}
var neptuneButton = document.getElementById('neptuneButton')
neptuneButton.onclick = moveNeptune

function moveStart(){
  camera.position.z = 4900
}
var startButton = document.getElementById('startButton')
startButton.onclick = moveStart




//used to move objects on scroll
//document.body.onscroll = moveCamera
// function moveCamera(){
//   const t = body.getBoundingClientRect().top;
//   Moon.rotation.x += 0.05;
//   camera.position.z = t * - 1;
// }
animate()