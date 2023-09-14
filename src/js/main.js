import * as THREE from 'three';

//Scene
const scene = new THREE.Scene();

// Cria a câmera, ( ângulo da lente, aspect ratio, min de distância p renderizar, máx distância p renderizar)
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 100);

// Cria o renderrizador, o CANVA, define o tamanho e coloca em tela
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


// Cria o formato do cubo e o tipo de material que é feito
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: '#4bc' } );

// Junta o formato e o material e adiciona isso na cena
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// Posiciona a câmera um pouco afastada do cubo
camera.position.z = 1.5;

// Faz o cubo ser renderizado várias vezes dentro de um espaço de tempo
function animate () {
    requestAnimationFrame( animate );
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}

animate();