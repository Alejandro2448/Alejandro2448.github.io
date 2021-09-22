
//Hago una lista de los supermercados a los que se puede acudir
var listaSupermercados =[];
listaSupermercados.push("Condis ")
listaSupermercados.push("Dia ")
listaSupermercados.push("Jespack ")
listaSupermercados.push("Bonpreu ")
listaSupermercados.push("BonÀrea ")

var añadir = document.getElementById("lista");
añadir.addEventListener("click", ingresarSupermercado);
var tabla = document.querySelector('tbody')
var botonEliminar =document.querySelector('table')
botonEliminar.addEventListener("click",eliminarFila)

function ingresarSupermercado()
{
    var supermercadoEscogido = document.getElementById("numeroSupermercado").value;
    var productoEscogido = document.getElementById("productoCompra").value;
    var cantidadEscogido = document.getElementById("cantidadCompra").value;
    cantidadProductoSolicitada=parseInt(cantidadEscogido.value);
    //Aqui he buscado como podia hacer la tabla dinamica por eso el codigo es diferente.
    tabla.innerHTML +=`
    <tr>
    <td>${supermercadoEscogido}</td>
    <td>${productoEscogido}</td>
    <td>${cantidadEscogido}</td>
    <td><button class="deletbtn">Eliminar</button></td>
    </tr>
    `;
}
function eliminarFila(evento){
if (!evento.target.classList.contains("deletbtn")){
    return;
    //la parte de ClassList no la comprendo he buscado en el codigo original en el que me he basado
    // y no se en que me equivoco para que no se elimine.

}
}
    //Entiendo mas o menos como lo hace pero lo que no me queda claro es el ${}
    //el querySelector lo he buscado pero hay algunas cosas que no me quedan claras
