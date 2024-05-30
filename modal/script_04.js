



function abrirModal(event) {
    var nombre = event.target.dataset.nombre;
    console.log(nombre);
    var modalTitulo = document.querySelector('.modal_nombre');
    //var modalImagen = document.querySelector('.modal_imagen');
    modalTitulo.textContent = nombre;
    ventanaModal.style.display = "block"
    modalImagen.src = event.target.dataset.imagen;
    console.log(document.querySelector('.modal_precio'));
    document.querySelector('.modal_precio').textContent = event.target.dataset.precio;
    document.querySelector('.modal_descripcion').textContent = event.target.dataset.descripcion;
}

btnCerrarModal.addEventListener("click",e=>{
    ventanaModal.style.display = "none"
    return false
})

// actua sobre toda la ventana modal
/* ventanaModal.addEventListener("click",e=>{
    ventanaModal.style.display = "none"
    return false
}) */

ventanaModal.addEventListener('click', function(event) {
    if (event.target === this) {
        ventanaModal.style.display = 'none';
    }
});


// inicilizacion valores 
let tEnlaces = '';
for (flor in flores) {
    console.log(flor);
    console.log(flores[flor]);
    console.log(flores[flor].nombre);
    tEnlaces += `<a href="#" class="boton vmodal" id="btnAbrirModal" 
    data-nombre="${flores[flor].nombre}"
    data-descripcion = '${flores[flor].descripcion} '
    data-imagen = '${flores[flor].imagen}'
    data-precio = '${flores[flor].precio} €'
    >
    ver DETALLE (${flores[flor].nombre}) </a><br>`;
}
console.log(tEnlaces);
document.getElementById('articulos').innerHTML = tEnlaces;

document.querySelectorAll('.vmodal').forEach(btn=>{
    btn.addEventListener('click',abrirModal)
});
/* 
<a href="#" class="boton vmodal" id="btnAbrirModal" 
data-nombre="Ventana 1"
data-descripcion = 'Ventana 1 enviada desde date-mensaje '
data-imagen = 'img/imagen1.jpg'
data-precio = '3'
>
verdetalle </a><br> 
*/