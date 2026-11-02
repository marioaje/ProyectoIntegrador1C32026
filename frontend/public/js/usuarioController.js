import { API } from './config.js';

console.log(API.USUARIOS);

$(document).ready(function () {
    consultarUsuarios();


    $("#formUsuarioCrear").submit(function (event) {
        event.preventDefault();
        crearUsuario();
    });

});


export async function consultarUsuarios() {

    // const APIResponse = await fetch(API.USUARIOS);
    // const datosUsarios = await APIResponse.json();
    // console.log(datosUsarios);

    $.ajax({
        type: "GET",
        url: API.USUARIOS,
        dataType: "json",
        success: function (response) {
            cargarDatosTabla(response)
        }
    });

}


function cargarDatosTabla(response) {

    let tabla = $("#tbodyUsuarios");

    tabla.empty();
    // console.log("cargando datos tabla", response);

    response.forEach(elementIndividual => {
        // console.log(elementIndividual._id);
        // console.log(elementIndividual);


        let fila = `
              <tr class="">
                  <td scope="row">${elementIndividual._id}</td>
                  <td>${elementIndividual.nombre}</td>
                  <td>${elementIndividual.correo}</td>
                  <td>${elementIndividual.clave}</td>
                  <td>
                    <a
                        name=""
                        id=""
                        class="btn btn-success"
                        href="#"
                        role="button"
                        >Editar</a
                    >
                  
                    <a
                        name=""
                        id=""
                        class="btn btn-danger"
                        href="#"
                        role="button"
                        >Eliminar</a
                  >
                  
                  </td>
                </tr>
        `;
        tabla.append(fila);
    });


}


function crearUsuario() {
    // const nomnbre = document.getElementById("nombre").value;
    // const correo = document.getElementById("correo").value;
    // const clave = document.getElementById("clave").value;

    const nombre = $("#nombre").val();
    const correo = $("#correo").val();
    const clave = $("#clave").val();

    const objetoUsuario = {
        nombre,
        correo,
        clave
    }

    $.ajax({
        type: "POST",
        url: API.USUARIOS,
        data: JSON.stringify(objetoUsuario),
        dataType: "json",
        contentType: "application/json",
        success: function (response) {
            consultarUsuarios();

        }
    });


    alert("Usuario creado correctamente");

}