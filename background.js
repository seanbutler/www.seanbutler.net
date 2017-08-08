var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60, 1.333, 0.1, 100);

var canvas = document.querySelector("canvas");
var renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setClearColor(0xD3D3D3);

var geometry = new THREE.BoxGeometry(9, 9, 9);
var material = new THREE.MeshBasicMaterial({
    color: 0xD3D3D3
});

var edges = new THREE.EdgesGeometry( geometry );
var lineMat = new THREE.LineBasicMaterial({
	color: 0xffffff,
	linewidth: 1,
	linecap: 'round', //ignored by WebGLRenderer
	linejoin:  'round' //ignored by WebGLRenderer
} );

var line = new THREE.LineSegments( edges, lineMat);

scene.add( line );

var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 15;

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
    time *= 0.001;
    resize();
    line.rotation.x = cube.rotation.x = time * 0.1;
    line.rotation.y = cube.rotation.y = time * 0.031;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

render();
