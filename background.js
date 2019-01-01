
var renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.gammaInput = true;
renderer.gammaOutput = true;

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 40, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.set(0, 1, 3);

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

var lightcolours = [0xff7700, 0x7700ff, 0x00ff77, 0xff0077, 0x77ff00, 0x0077ff]
var lightcolours2 = shuffleArray(lightcolours);
var spotLight = new THREE.SpotLight( lightcolours2[0], 1 );

spotLight.position.set( 0, 5, 0 );
spotLight.castShadow = true;
spotLight.angle = Math.PI / 4;
spotLight.penumbra = 1;
spotLight.decay = 10;
spotLight.distance = 20;

spotLight.shadow.mapSize.width = 512;
spotLight.shadow.mapSize.height = 512;

spotLight.shadow.camera.near = 1;
spotLight.shadow.camera.far = 100;
spotLight.shadow.camera.fov = 10;

scene.add( spotLight );

var material = new THREE.MeshPhongMaterial( { color: 0x7f7f7f } );
var boxgeometry = new THREE.BoxGeometry( 1, 1, 1 );

var box1 = new THREE.Mesh( boxgeometry, material );
// box1.position.set(-1, 1, -1);
box1.position.set((Math.random()*2)-1, 1, -4.5 );
box1.rotation.set(Math.random(), Math.random(), Math.random());
box1.castShadow = true;

scene.add( box1 );

var groundgeometry = new THREE.PlaneGeometry( 10, 10, 100 );
var ground = new THREE.Mesh( groundgeometry, material );
ground.rotation.x = 3.14159 * -0.5;
ground.receiveShadow = true;
ground.castShadow = false;
scene.add( ground );

var onResize = function () {
    console.log("resize");
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
}

window.addEventListener( 'resize', onResize, false );

var animate = function () {
    requestAnimationFrame( animate );

    box1.rotation.x += 0.01;
    box1.rotation.z += 0.01;
    box1.position.z += 0.05;

    if ( box1.position.z > 3.0 ) {
        box1.position.set((Math.random()*2)-1, 1, -4.5 - ( Math.random() * 15.0) );
    }

    renderer.render( scene, camera );
};

animate();
