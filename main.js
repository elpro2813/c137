
function preload(){
  /*Cargar la imágen */
  img = loadImage('dog_cat.jpg');
}


/*Crear función setup() y...*/
function setup() {
  /*...crear el lienzo*/
  canvas = createCanvas(640, 420);
  /*Dar posición centro al lienzo */
  canvas.center();
}


function draw() {
  image(img, 0, 0, 640, 420);
  /*ajustar el color */
  fill(255, 0, 0);
  /*texto de la etiqueta */
  text("Dog", 45, 75);
  /*Desabilitar la función fill */
  noFill();
  stroke(255, 0, 0);
  /*Rectangulo */
  rect(30, 60, 450, 350 );
}
