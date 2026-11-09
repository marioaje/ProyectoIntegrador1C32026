import { API } from './config.js';

console.log(API.USUARIOS);

$(document).ready(function () {
    consultarUsuarios();

    $("#formUsuarioCrear").submit(function (event) {
        event.preventDefault();
        crearUsuario();
    });


    $("#formUsuarioEditar").submit(function (event) {
        event.preventDefault();
        editarUsuario();
    });


    $("#formUsuarioEliminar").submit(function (event) {
        event.preventDefault();
        eliminarUsuario();
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
        },
        error: function (xhr, status, error) {
            let errores = "Error al consultar usuarios" + error;
            alert(errores);
            alert(xhr);
            alert(status);
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
                        onclick="cargarEditarUsuario('${elementIndividual._id}')"
                        >Editar</a
                    >
                  
                    <a
                        name=""
                        id=""
                        class="btn btn-danger"
                        href="#"
                        role="button"
                        onclick="cargarEliminarUsuario('${elementIndividual._id}')"
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
            $("#formUsuarioCrear")[0].reset();
        }
    });


    alert("Usuario creado correctamente");

}


window.cargarEditarUsuario = function (identificadorUsuario) {

    // console.log("cargarEditarUsuario", identificadorUsuario);

    const url = `${API.USUARIOS}/${identificadorUsuario}`;
    console.log("cargarEditarUsuario", url);

    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function (response) {
            cargarDatosInputEditar(response)
        }
    });



    const modalEditar = new bootstrap.Modal($("#modalEditar")[0]);
    modalEditar.show();
}




window.cargarEliminarUsuario = function (identificadorUsuario) {
    $("#idEliminar").val(identificadorUsuario);


    const modalEliminar = new bootstrap.Modal($("#modalEliminar")[0]);
    modalEliminar.show();
}



function cargarDatosInputEditar(response) {

    $("#idEditar").val(response._id);
    $("#nombreEditar").val(response.nombre);
    $("#correoEditar").val(response.correo);
    $("#claveEditar").val(response.clave);

}



function editarUsuario() {
    const identificadorUsuario = $("#idEditar").val();
    const nombre = $("#nombreEditar").val();
    const correo = $("#correoEditar").val();
    const clave = $("#claveEditar").val();

    const url = `${API.USUARIOS}/${identificadorUsuario}`;

    const objetoUsuario = {

        nombre,
        correo,
        clave
    }

    $.ajax({
        type: "PUT",
        url: url,
        data: JSON.stringify(objetoUsuario),
        dataType: "json",
        contentType: "application/json",
        success: function (response) {
            consultarUsuarios();
            $("#formUsuarioEditar")[0].reset();
            bootstrap.Modal.getInstance($("#modalEditar")[0]).hide();
        }
    });


    alert("Usuario actualizado correctamente");
}



function eliminarUsuario() {
    const identificadorUsuario = $("#idEliminar").val();


    const url = `${API.USUARIOS}/${identificadorUsuario}`;


    $.ajax({
        type: "DELETE",
        url: url,
        dataType: "json",
        contentType: "application/json",
        success: function (response) {
            consultarUsuarios();
            $("#formUsuarioEliminar")[0].reset();
            bootstrap.Modal.getInstance($("#modalEliminar")[0]).hide();
        }
    });


    alert("Usuario eliminado correctamente");
}



function mostrarSpinner() {


}


function ocultarSpinner() {

}