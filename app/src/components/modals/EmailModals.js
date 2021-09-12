import Swal from 'sweetalert2';

const modalSuccess = () => {
    Swal.fire({
        title: 'Todo correcto',
        text: 'El mensaje se ha enviado con éxito.',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#28a745'
    })
}
  
const modalError = () => {
    Swal.fire({
        title: 'Ups...',
        text: 'Ha surgido un problema y el mensaje no se ha podido enviar con éxito.',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#d33'
    })
}

export {
    modalSuccess,
    modalError
}