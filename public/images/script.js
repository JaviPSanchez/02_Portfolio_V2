import "./styles/main.scss";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";
import gsap from "gsap";

///////////SMOOTH SCROWLING/////////

const btnScrollTo1 = document.querySelector(".btn--scroll-to-1");
const btnScrollTo2 = document.querySelector(".btn--scroll-to-2");
const btnScrollTo3 = document.querySelector(".btn--scroll-to-3");
const btnScrollTo4 = document.querySelector(".btn--scroll-to-4");
const btnScrollTo5 = document.querySelector(".btn--scroll-to-5");

const sectionWho = document.querySelector(".section-who");
const sectionProjects = document.querySelector(".section-projects");
const sectionData = document.querySelector(".section-data");
const sectionContact = document.querySelector(".section-cta");
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const sectionHero = document.querySelector(".section-hero");

btnScrollTo1.addEventListener("click", function (e) {
  e.preventDefault();
  sectionWho.scrollIntoView({ behavior: "smooth" });
  // sectionProjects.scrollIntoView({ behavior: "smooth" });
});

btnScrollTo3.addEventListener("click", function (e) {
  e.preventDefault();
  sectionData.scrollIntoView({ behavior: "smooth" });
});
btnScrollTo4.addEventListener("click", function (e) {
  e.preventDefault();
  sectionContact.scrollIntoView({ behavior: "smooth" });
});
btnScrollTo5.addEventListener("click", function (e) {
  e.preventDefault();
  sectionProjects.scrollIntoView({ behavior: "smooth" });
});

///////////////////NAVIGATION////////////

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//////////////STICKY NAVIGATION////////////

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "200px",
  }
);
observer.observe(sectionHero);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

/////////////CUSTOM SHADERS/////////

const atmosphereVertexShader = `

varying vec3 vertexNormal;

void main() {
  vertexNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0);
}`;
const atmosphereFragmentShader = `
varying vec3 vertexNormal; 
void main() {
  float intensity = pow(0.9 - dot(vertexNormal, vec3(0, 0, 1)), 2.0);
  gl_FragColor = vec4(0.3, 0.6, 1.0, 0.9) * intensity;
}`;

//DOM

// Getting a reference to the container element that will hold our scene
const canvasContainer = document.querySelector(".hero-3d-box");

//SCENE

const scene = new THREE.Scene();

//CAMERA

const fieldOfView = 75;
let aspectRatio = canvasContainer.clientWidth / canvasContainer.clientHeight;
const nearClippingPlane = 0.1;
const farClippingPlane = 1000;

const camera = new THREE.PerspectiveCamera(
  fieldOfView,
  aspectRatio,
  nearClippingPlane,
  farClippingPlane
);
camera.position.set(0, 0, 12);

//RENDER

const renderer = new THREE.WebGLRenderer({ alpha: true });
// Setting the renderer to the same size as our container element
renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
// document.body.appendChild(renderer.domElement);
// Setting the pixel ratio so that our scene will look good on HiDPI displays
renderer.setPixelRatio(window.devicePixelRatio);
// Adding the automatically created <canvas> element to the page
canvasContainer.append(renderer.domElement);

//ORBIT CONTROLS

// new OrbitControls(camera, canvas);

////////////////////LIGHT////////////////////////////////

const light = new THREE.AmbientLight(0x222222);
scene.add(light);

const dLight = new THREE.DirectionalLight(0xffffff, 1);
dLight.position.set(5, 5, 5);
dLight.castShadow = true;
scene.add(dLight);

//////////////////////EARTH/////////////////////

const geometry = new THREE.SphereGeometry(5, 50, 50);

const texture = new THREE.TextureLoader().load(
  require("./assets/images/earthmap1k.jpg")
);
const bumpmap = new THREE.TextureLoader().load(
  require("./assets/images/earthbump1k.jpg")
);

const material = new THREE.MeshPhongMaterial({
  map: texture,
  bumpMap: bumpmap,
  bumpScale: 0.4,
});

const sphereMesh = new THREE.Mesh(geometry, material);
scene.add(sphereMesh);

//////CREATING GROUP//////////

const group = new THREE.Group();
group.add(sphereMesh);
scene.add(group);

///////////////////// CLOUDS/////////////////

const cloudMesh = new THREE.Mesh(
  new THREE.SphereGeometry(5.2, 50, 50),
  new THREE.MeshPhongMaterial({
    emissive: 0xffffff,
    transparent: true,
    opacity: 0.9,
    map: new THREE.TextureLoader().load(
      require("./assets/images/earthCloud1k.png")
    ),
  })
);
scene.add(cloudMesh);

////////////ATMOSPHERE/////////////

const atmosphere = new THREE.Mesh(
  new THREE.SphereGeometry(5, 50, 50),
  new THREE.ShaderMaterial({
    vertexShader: atmosphereVertexShader,
    fragmentShader: atmosphereFragmentShader,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide,
  })
);

atmosphere.scale.set(1.1, 1.1, 1.1);
atmosphere.position.set(0, 0, 0);

scene.add(atmosphere);

sphereMesh.rotation.y = -Math.PI / 2;

//////////MOUSE CONTROL///////////

const mouse = {
  x: 0,
  y: 0,
};

//ANIMATION
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  cloudMesh.rotation.y += 0.002;
  group.rotation.y = mouse.x * 0.5;

  gsap.to(group.rotation, {
    x: -mouse.y * 0.3,
    y: mouse.x * 0.3,
    duration: 2,
  });
}
animate();

addEventListener("mousemove", () => {
  mouse.x = (event.clientX / innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / innerHeight) * 2 + 1;
});

/////MODAL////////////

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelector(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

btnOpenModal.addEventListener("click", openModal);

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

//////SOCIAL/////

//DOM
const socialMedia = document.querySelector(".c-social-media");
const socialMediaButtom = document.querySelector(".js-share-btn");
const socialMediaButtomIcon = document.querySelector(".c-social-media__icon");
const socialMediaItems = [
  ...document.querySelectorAll(".c-social-media__item"),
];

const socialMediaCounts = socialMediaItems.length;
const middleCounts = socialMediaCounts / 2;
const socialMediaSpacing = 75;

const activateSocialMedia = () => {
  gsap.to(socialMediaButtom, {
    duration: 0.1,
    scaleX: 1.2,
    scaleY: 0.6,
    ease: "power3.out",
    onComplete: () => {
      gsap.to(socialMediaButtom, {
        duration: 1,
        scale: 1.2,
        ease: "elastic.out(1.2, 0.6)",
      });

      gsap.to(socialMediaButtomIcon, {
        duration: 0.8,
        scale: 1,
        ease: "elastic.out(1.1, 0.6)",
      });
    },
  });

  socialMediaItems.map((item, i) => {
    let position = i - middleCounts;
    if (position >= 0) position += 1;
    const distance = Math.abs(position);

    gsap.to(item, {
      duration: 1.1 * distance,
      x: position * socialMediaSpacing,
      scaleY: 0.6,
      scaleX: 1.1,
      ease: "elastic.out(1.01, 0.5)",
    });

    gsap.to(item, {
      duration: 2 * distance,
      scale: 1,
      ease: "elastic.out(1.1, 0.6)",
    });
  });
};

const deactivateSocialMedia = () => {
  gsap.to(socialMediaButtom, {
    duration: 1.4,
    delay: 0.1,
    scale: 1.25,
    ease: "elastic.out",
  });

  gsap.to(socialMediaButtomIcon, 1.4, {
    scale: 1,
    ease: "elastic.out",
  });

  socialMediaItems.map((item, i) => {
    let position = i - middleCounts;
    if (position >= 0) position += 1;
    const distance = Math.abs(position);

    gsap.to(item, {
      duration: 0.4,
      x: 0,
      scale: 1,
      ease: "power3.inOut",
    });
  });
};

const triggerSocialMedia = () => {
  if (socialMedia.classList.contains("is-active")) {
    deactivateSocialMedia();
  } else {
    activateSocialMedia();
  }

  socialMedia.classList.toggle("is-active");
};

socialMediaButtom.addEventListener("click", triggerSocialMedia);
