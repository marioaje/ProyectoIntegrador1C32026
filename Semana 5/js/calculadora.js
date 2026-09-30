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



        //operaciones
    }


}
)

function limpiar() {
    inputResultado.value = 0;
}


function operaciones(n1, n2, op) {

    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);


    switch (op) {
        case '+':
            return num1 + num2;
            break;

        case '-':
            return num1 - num2;
            break;

        case '*':
            return num1 * num2;
            break;

        case '/':
            return num1 / num2;
            break;

        default:
            return "Error";
            break;
    }

}

