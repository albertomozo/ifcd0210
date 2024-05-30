
document.querySelectorAll('.vmodal').forEach(btn=>{
    btn.addEventListener('click',abrirModal)
});


function abrirModal(event) {
    var titulo = event.target.dataset.titulo;
    var modalTitulo = document.querySelector('.modal_titulo');
    //var modalImagen = document.querySelector('.modal_imagen');
    modalTitulo.textContent = titulo;
    ventanaModal.style.display = "block"
    modalImagen.src = event.target.dataset.imagen;
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