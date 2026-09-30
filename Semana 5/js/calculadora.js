const inputResultado = document.getElementById('resultado');
let resultadoAnterio = 0;

inputResultado.value = 0;

document.addEventListener('click', (e) => {

    const botonNumero = e.target.closest(".btn-success");
    if (botonNumero) {
        e.preventDefault();
        const valor = botonNumero.getAttribute('data-valor');

        if (resultadoAnterio == inputResultado.value) {
            limpiar();
        }

        inputResultado.value += valor;



    }


    if (e.target.classList.contains("btn-danger")) {
        e.preventDefault();
        limpiar();
    }

    const botonOperaciones = e.target.closest(".btn-primary");
    if (botonOperaciones) {
        e.preventDefault();

        const valorOperacion = botonOperaciones.getAttribute('data-valor');
        // alert(valorOperacion);

        resultadoAnterio = operaciones(resultadoAnterio, inputResultado.value, valorOperacion);
        inputResultado.value = resultadoAnterio;
        //operaciones ????
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

