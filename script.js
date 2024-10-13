// Initialize Leaflet Map (2D map)
const map = L.map('map').setView([51.505, -0.09], 13); // Set the default view (lat, long, zoom level)

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add event listener for map clicks
map.on('click', function(e) {
    const latLong = e.latlng;
    console.log(`Clicked at latitude: ${latLong.lat}, longitude: ${latLong.lng}`);
    load3DScene(latLong.lat, latLong.lng);  // Load 3D scene based on lat-long
});

// Three.js initialization
let scene, camera, renderer, model;

// Initialize Three.js
function initThreeJS() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Add ambient light for basic lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Add directional light (like sunlight)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    camera.position.z = 5; // Set camera position
    animate();
}

// Load 3D scene based on lat-long clicked on 2D map
function load3DScene(lat, long) {
    if (model) {
        scene.remove(model);  // Remove previous model if it exists
    }

    const loader = new THREE.GLTFLoader();
    loader.load('models/building.gltf', function(gltf) {  // Load the GLTF model (replace with actual model path)
        model = gltf.scene;
        model.scale.set(1, 1, 1);  // Scale model if necessary
        scene.add(model);  // Add model to the scene
    });
}

// Animation loop to render the scene
function animate() {
    requestAnimationFrame(animate);
    if (model) {
        model.rotation.y += 0.01;  // Rotate the model for some interaction
    }
    renderer.render(scene, camera);
}

// Initialize Three.js
initThreeJS();
