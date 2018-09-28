var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60, 1.333, 0.1, 100);

var canvas = document.querySelector("canvas");
var renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setClearColor(0xFFFFFF);

var geometry;
// geometry = new THREE.BoxGeometry(1, 1, 1);
// geometry = new THREE.SphereGeometry(1, 7, 7);
geometry = new THREE.IcosahedronBufferGeometry(1, 0);

var material = new THREE.MeshBasicMaterial({
    color: 0xFFFFFF
});

var edges = new THREE.EdgesGeometry( geometry );
var lineMat = new THREE.LineBasicMaterial({
	color: 0x777777,
	linewidth: 2,
	linecap: 'round', //ignored by WebGLRenderer
	linejoin:  'round' //ignored by WebGLRenderer
} );

var line = new THREE.LineSegments( edges, lineMat);
scene.add( line );

var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 2;

function resize() {
    var width = canvas.clientWidth;
    var height = canvas.clientHeight;
    if (width != canvas.width || height != canvas.height) {
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();  
    }
}

function render(time) {
    time *= 0.002;
    resize();
    line.rotation.x = cube.rotation.x = time * 0.5;
    line.rotation.y = cube.rotation.y = time * 0.2;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

render();
