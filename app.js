// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

// función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value;

    // validar que se ingrese un nombre
    if (nombreAmigo === "") {
        alert('Debes ingresar un nombre');
        return;
    }    

    // validar que el nombre no esté repetido
    if (amigos.includes(nombreAmigo)) {
        alert(`El nombre ${nombreAmigo} ya fue ingresado, no se permiten nombres duplicados`);
        return;
    }

    // agregar el nombre a la lista
    amigos.push(nombreAmigo);

    // limpia el nombre ya ingresado
    inputAmigo.value = "";

    // volver el cursor a la casilla de nombre
    inputAmigo.focus();

    // actualiza la lista de amigos
    actualizarListaAmigos();

}
// función para actualizar la lista de amigos
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // limpia la lista previa

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(li);
    });
}

// función para seleccionar un amigo aleatorio
function sortearAmigo() {
// limpiar el resultado anterior
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    if(amigos.length === 0){
        alert('No hay amigos en la lista para sortear');
        return;
    }
        
    // generar un número aleatorio
    const index = Math.floor(Math.random() * amigos.length);

    // obtener el amigo seleccionado o sorteado
    const amigoSorteado = amigos[index].toUpperCase(); // utiliza el índice aleatorio para el amigo

    // mostrar el amigo sorteado en el HTML
    resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;

    // limpiar la lista de amigos
    amigos = [];
    actualizarListaAmigos();

}
