// Scroll-driven 3D world for the home page (three.js, no paid assets)
import * as THREE from "./three.module.min.js";

const canvas = document.getElementById("space");
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
} catch (e) {
  canvas.style.display = "none";
  document.body.classList.add("no-webgl");
  throw e;
}
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
renderer.setClearColor(0x05070d, 1);
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 400);

// ---------- Lights ----------
scene.add(new THREE.AmbientLight(0x3a4a6a, 0.35));
// Lights ride with the camera so the Earth stays lit from every angle
scene.add(camera);
const sun = new THREE.DirectionalLight(0xffffff, 2.6);
sun.position.set(-3, 2, 2.5);
sun.target.position.set(0, 0, -3);
camera.add(sun); camera.add(sun.target);
const rim = new THREE.DirectionalLight(0x6fa0ff, 1.4);
rim.position.set(3, 0.5, -6);
rim.target.position.set(0, 0, -3);
camera.add(rim); camera.add(rim.target);

// ---------- Stars ----------
function starLayer(count, rMin, rMax, size, opacity) {
  const g = new THREE.BufferGeometry();
  const p = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = rMin + Math.random() * (rMax - rMin);
    const u = Math.random() * 2 - 1, t = Math.random() * Math.PI * 2;
    const s = Math.sqrt(1 - u * u);
    p[i * 3] = r * s * Math.cos(t); p[i * 3 + 1] = r * u; p[i * 3 + 2] = r * s * Math.sin(t);
  }
  g.setAttribute("position", new THREE.BufferAttribute(p, 3));
  const m = new THREE.PointsMaterial({ color: 0xffffff, size, sizeAttenuation: false, transparent: true, opacity, depthWrite: false });
  return new THREE.Points(g, m);
}
const isMobile = window.matchMedia("(max-width: 820px)").matches;
scene.add(starLayer(isMobile ? 1400 : 2600, 60, 140, 1.1, 0.75));
scene.add(starLayer(isMobile ? 200 : 380, 60, 140, 2.0, 0.9));

// ---------- Earth ----------
const loader = new THREE.TextureLoader();
const tex = (f, srgb) => {
  const t = loader.load("assets/img/" + f);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
};

const earthGroup = new THREE.Group();
scene.add(earthGroup);
earthGroup.rotation.z = THREE.MathUtils.degToRad(-12);

const seg = isMobile ? 64 : 96;
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(1, seg, seg),
  new THREE.MeshPhongMaterial({
    map: tex("earth.webp", true),
    specularMap: tex("earth_specular.webp"),
    normalMap: tex("earth_normal.webp"),
    normalScale: new THREE.Vector2(0.6, 0.6),
    specular: new THREE.Color(0x335577),
    shininess: 22
  })
);
earthGroup.add(earth);

const clouds = new THREE.Mesh(
  new THREE.SphereGeometry(1.012, seg, seg),
  new THREE.MeshLambertMaterial({ map: tex("earth_clouds.webp", true), transparent: true, opacity: 0.55, depthWrite: false })
);
earthGroup.add(clouds);

// Atmosphere glow (fresnel)
const glowVS = `varying vec3 vN; void main(){ vN = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`;
const atmo = new THREE.Mesh(
  new THREE.SphereGeometry(1.09, 64, 64),
  new THREE.ShaderMaterial({
    side: THREE.BackSide, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { c: { value: new THREE.Color(0x3f8cff) } },
    vertexShader: glowVS,
    fragmentShader: `uniform vec3 c; varying vec3 vN;
      void main(){ float i = pow(max(0.62 - dot(vN, vec3(0.0,0.0,1.0)), 0.0), 3.5); gl_FragColor = vec4(c, 1.0) * i * 1.6; }`
  })
);
scene.add(atmo);

const inner = new THREE.Mesh(
  new THREE.SphereGeometry(1.015, 64, 64),
  new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { c: { value: new THREE.Color(0x6fb4ff) } },
    vertexShader: glowVS,
    fragmentShader: `uniform vec3 c; varying vec3 vN;
      void main(){ float f = 1.0 - max(dot(vN, vec3(0.0,0.0,1.0)), 0.0); gl_FragColor = vec4(c, 1.0) * pow(f, 4.0) * 0.55; }`
  })
);
scene.add(inner);

// ---------- Cities + arcs (Bengaluru to the world) ----------
function ll(lat, lon, r) {
  const phi = THREE.MathUtils.degToRad(90 - lat);
  const th = THREE.MathUtils.degToRad(lon + 180);
  return new THREE.Vector3(-r * Math.sin(phi) * Math.cos(th), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(th));
}
const HOME = [12.97, 77.59];
const CITIES = [
  [25.2, 55.27], [51.5, -0.12], [40.71, -74.0], [1.35, 103.82], [-33.87, 151.2],
  [43.65, -79.38], [52.52, 13.4], [35.68, 139.69], [-26.2, 28.04], [48.85, 2.35]
];

const dotTex = (() => {
  const c = document.createElement("canvas"); c.width = c.height = 64;
  const x = c.getContext("2d");
  const g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "rgba(255,255,255,1)"); g.addColorStop(0.25, "rgba(111,227,211,0.9)"); g.addColorStop(1, "rgba(111,227,211,0)");
  x.fillStyle = g; x.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
})();

const net = new THREE.Group();
earth.add(net);
const dotMat = new THREE.SpriteMaterial({ map: dotTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
function addDot(lat, lon, s) {
  const d = new THREE.Sprite(dotMat.clone());
  d.position.copy(ll(lat, lon, 1.005));
  d.scale.setScalar(s);
  net.add(d);
  return d;
}
const homeDot = addDot(HOME[0], HOME[1], 0.11);
const dots = CITIES.map(c => addDot(c[0], c[1], 0.06));

const arcs = CITIES.map(c => {
  const a = ll(HOME[0], HOME[1], 1.0), b = ll(c[0], c[1], 1.0);
  const mid = a.clone().add(b).multiplyScalar(0.5);
  const lift = 1.0 + a.distanceTo(b) * 0.42;
  mid.normalize().multiplyScalar(lift);
  const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
  const pts = curve.getPoints(80);
  const g = new THREE.BufferGeometry().setFromPoints(pts);
  g.setDrawRange(0, 0);
  const m = new THREE.LineBasicMaterial({ color: 0x6fe3d3, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false });
  const line = new THREE.Line(g, m);
  net.add(line);
  return line;
});

// Face India toward the camera at the start
const hv = ll(HOME[0], HOME[1], 1);
const faceYaw = -Math.atan2(hv.x, hv.z);
earth.rotation.y = faceYaw;
clouds.rotation.y = faceYaw;

// ---------- Moon + red planet ----------
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(0.22, 48, 48),
  new THREE.MeshPhongMaterial({ map: tex("moon.webp", true), shininess: 2 })
);
scene.add(moon);

function marsTexture() {
  const c = document.createElement("canvas"); c.width = 512; c.height = 256;
  const x = c.getContext("2d");
  x.fillStyle = "#b8552a"; x.fillRect(0, 0, 512, 256);
  for (let i = 0; i < 900; i++) {
    const r = Math.random() * 18 + 2;
    x.fillStyle = `rgba(${Math.random() < 0.5 ? "90,30,12" : "235,150,95"},${Math.random() * 0.18})`;
    x.beginPath(); x.ellipse(Math.random() * 512, Math.random() * 256, r * 2, r, 0, 0, 6.283); x.fill();
  }
  for (let y = 0; y < 256; y += 3) { x.fillStyle = `rgba(80,25,10,${Math.random() * 0.08})`; x.fillRect(0, y, 512, 2); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
const mars = new THREE.Mesh(
  new THREE.SphereGeometry(0.3, 48, 48),
  new THREE.MeshPhongMaterial({ map: marsTexture(), shininess: 4 })
);
scene.add(mars);

// ---------- Scroll keyframes ----------
// d: camera distance, az/el: orbit angles, sx/sy: where Earth sits on screen (-1..1), arcs: 0..1
const DESK = [
  { d: 3.0, az: 0.0, el: 0.10, sx: 0.00, sy: -1.62, arcs: 0 },
  { d: 3.9, az: 0.25, el: 0.30, sx: 0.00, sy: -0.62, arcs: 1 },
  { d: 3.1, az: 0.95, el: 0.22, sx: 0.44, sy: 0.00, arcs: 1 },
  { d: 2.7, az: -1.10, el: 0.28, sx: -0.44, sy: 0.00, arcs: 1 },
  { d: 2.35, az: -2.20, el: 0.30, sx: 0.46, sy: 0.02, arcs: 1 },
  { d: 5.0, az: -3.30, el: 0.05, sx: -0.40, sy: 0.00, arcs: 1 }
];
const MOBI = [
  { d: 3.6, az: 0.0, el: 0.10, sx: 0.0, sy: -1.5, arcs: 0 },
  { d: 6.0, az: 0.25, el: 0.30, sx: 0.0, sy: -0.55, arcs: 1 },
  { d: 5.2, az: 0.95, el: 0.22, sx: 0.0, sy: 0.48, arcs: 1 },
  { d: 4.8, az: -1.10, el: 0.28, sx: 0.0, sy: 0.48, arcs: 1 },
  { d: 4.4, az: -2.20, el: 0.30, sx: 0.0, sy: 0.48, arcs: 1 },
  { d: 7.0, az: -3.30, el: 0.05, sx: 0.0, sy: 0.45, arcs: 1 }
];
let KEYS = isMobile ? MOBI : DESK;

const stops = [...document.querySelectorAll("[data-stop]")];
const ease = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

function targetState() {
  // Which stop are we between? Each stop's centre is its "arrival" point.
  const mid = window.scrollY + window.innerHeight * 0.5;
  const centres = stops.map(s => { const r = s.getBoundingClientRect(); return r.top + window.scrollY + r.height * 0.5; });
  if (mid <= centres[0]) return lerpKey(KEYS[0], KEYS[0], 0);
  for (let i = 0; i < centres.length - 1; i++) {
    if (mid < centres[i + 1]) {
      const t = (mid - centres[i]) / (centres[i + 1] - centres[i]);
      return lerpKey(KEYS[i], KEYS[i + 1], ease(Math.min(Math.max(t, 0), 1)));
    }
  }
  return lerpKey(KEYS[KEYS.length - 1], KEYS[KEYS.length - 1], 0);
}
function lerpKey(a, b, t) {
  const o = {};
  for (const k in a) o[k] = a[k] + (b[k] - a[k]) * t;
  return o;
}

const cur = Object.assign({}, KEYS[0]);
const right = new THREE.Vector3(), up = new THREE.Vector3(), fwd = new THREE.Vector3();

function place(st) {
  const cx = st.d * Math.cos(st.el) * Math.sin(st.az);
  const cy = st.d * Math.sin(st.el);
  const cz = st.d * Math.cos(st.el) * Math.cos(st.az);
  camera.position.set(cx, cy, cz);
  fwd.set(-cx, -cy, -cz).normalize();
  right.crossVectors(fwd, camera.up).normalize();
  up.crossVectors(right, fwd).normalize();
  const hh = st.d * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
  const hw = hh * camera.aspect;
  const target = new THREE.Vector3()
    .addScaledVector(right, -st.sx * hw)
    .addScaledVector(up, -st.sy * hh);
  camera.lookAt(target);

  // Companions orbit loosely with the camera so they stay in frame
  moon.position.copy(new THREE.Vector3().addScaledVector(right, -2.4).addScaledVector(up, 0.55).addScaledVector(fwd, 0.6));
  mars.position.copy(new THREE.Vector3().addScaledVector(right, 3.0).addScaledVector(up, 0.75).addScaledVector(fwd, 3.2));
  if (isMobile) {
    moon.position.copy(new THREE.Vector3().addScaledVector(right, -1.25).addScaledVector(up, 1.9).addScaledVector(fwd, 0.4));
    mars.position.copy(new THREE.Vector3().addScaledVector(right, 1.5).addScaledVector(up, 2.8).addScaledVector(fwd, 3.0));
  }
}

function resize() {
  const w = canvas.clientWidth, h = canvas.clientHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
window.addEventListener("resize", resize);
resize();

// ---------- Loop ----------
const clock = new THREE.Clock();
let visible = true;
document.addEventListener("visibilitychange", () => { visible = !document.hidden; });
const storyEnd = () => {
  const last = stops[stops.length - 1];
  return last.getBoundingClientRect().bottom + window.scrollY + window.innerHeight;
};

function frame() {
  requestAnimationFrame(frame);
  if (!visible || window.scrollY > storyEnd()) return;
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;

  const tg = targetState();
  const k = reduce ? 1 : 1 - Math.pow(0.001, dt);
  for (const key in cur) cur[key] += (tg[key] - cur[key]) * k;
  place(cur);

  if (!reduce) {
    earth.rotation.y += dt * 0.02;
    clouds.rotation.y += dt * 0.028;
    moon.rotation.y += dt * 0.05;
    mars.rotation.y += dt * 0.06;
  }

  // Arcs draw in, then pulse
  arcs.forEach((a, i) => {
    const n = Math.floor(81 * Math.min(Math.max(cur.arcs * 1.6 - i * 0.06, 0), 1));
    a.geometry.setDrawRange(0, n);
    a.material.opacity = 0.35 + 0.45 * (0.5 + 0.5 * Math.sin(t * 1.4 + i));
  });
  net.visible = cur.arcs > 0.01;
  homeDot.scale.setScalar(0.09 + 0.03 * Math.sin(t * 2.2));
  dots.forEach(d => d.material.opacity = Math.min(cur.arcs * 1.5, 1));

  renderer.render(scene, camera);
}
place(cur);
frame();
document.body.classList.add("world-ready");
