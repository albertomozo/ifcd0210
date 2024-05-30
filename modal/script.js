btnAbrirModal.addEventListener("click",e=>{
    ventanaModal.style.display = "block";
    ventanaModal.style.backgroundColor = 'green'
    document.querySelector('.modal_titulo').innerHTML = btnAbrirModal.dataset.titulo;
    document.querySelector('.modal_mensaje').innerHTML = btnAbrirModal.dataset.mensaje;
    return false
})
btnAbrirModal2.addEventListener("click",e=>{
    ventanaModal.style.display = "block"
    ventanaModal.style.backgroundColor = 'blue';
    /* document.querySelector('.fondo_transparente').style.opacity = 0.2; 
 */
    document.querySelector('.modal_titulo').innerHTML = btnAbrirModal2.dataset.titulo;
    document.querySelector('.modal_mensaje').innerHTML = btnAbrirModal2.dataset.mensaje;

    return false
})
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