/* btnAbrirModal.addEventListener("click",e=>{
    ventanaModal.style.display = "block";
    ventanaModal.style.backgroundColor = 'green'
    document.querySelector('.modal_titulo').innerHTML = btnAbrirModal.dataset.titulo;
    return false
})

btnAbrirModal2.addEventListener("click",e=>{
    ventanaModal.style.display = "block"
    ventanaModal.style.backgroundColor = 'blue';

    document.querySelector('.modal_titulo').innerHTML = btnAbrirModal2.dataset.titulo;

    return false
}) */

btnAbrirModal.addEventListener('click', abrirModal);
btnAbrirModal2.addEventListener('click', abrirModal);

function abrirModal(event) {
    var titulo = event.target.dataset.titulo;
    var modalTitulo = document.querySelector('.modal_titulo');
    modalTitulo.textContent = titulo;
    ventanaModal.style.display = "block"
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