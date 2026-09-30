const inputResultado = document.getElementById('resultado');

inputResultado.value = 90;

document.addEventListener('click', (e) => {

    const botonNumero = e.target.closest(".btn-success");
    if (botonNumero) {
        e.preventDefault();


        const valor = botonNumero.getAttribute('data-valor');

        inputResultado.value += valor;

    }


    if (e.target.classList.contains("btn-danger")) {
        e.preventDefault();
        limpiar();
    }

    if (e.target.classList.contains("btn-primary")) {
        e.preventDefault();
        alert("Operaciones");
    }


}
)

function limpiar() {
    inputResultado.value = 0;
}


function operaciones(n1, n2, op) {



    switch (op) {
        case '+':
            console.log("Opcion 1");
            break;

        case '-':
            console.log("Opcion 6");
            break;

        case '*':
            console.log("Opcion 12");
            break;

        case '/':
            console.log("Opcion 12");
            break;

        default:
            console.log("Opcion indefinida");
            break;
    }

}

