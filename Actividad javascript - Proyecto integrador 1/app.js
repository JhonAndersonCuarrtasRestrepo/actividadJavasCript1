
let listaContacto = [
    "Jhon Anderson Cuartas Restrepo",
    "Marisela Restrepo",
    "Arturo Magno Cuartas",
    "Geraldine Carvajal",
    "Yeleidis Blanco Diaz",
    "Edwin Alejandro"
];

// Lista antes de ser modificada

console.log(listaContacto);

function agregarContacto(a) {
    let agregar = listaContacto.push(a);
}

agregarContacto("Jose Julian");

// Lista con un nombre agregado

console.log(listaContacto);

function eliminarContacto(a) {
    let eliminar = listaContacto.shift(a);
}

eliminarContacto();


// Lista con un nombre eliminado

console.log(listaContacto);


// Funcion para mostrar la lista

function mostrarLista() {
  console.log(listaContacto); 
}

mostrarLista();



