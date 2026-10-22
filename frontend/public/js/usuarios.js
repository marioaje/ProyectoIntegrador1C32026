import { API } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('usuarioForm');
    const formTitulo = document.getElementById('formTitulo');
    const inputId = document.getElementById('usuarioId');
    const inputNombre = document.getElementById('nombre');
    const inputCorreo = document.getElementById('correo');
    const inputClave = document.getElementById('clave');
    const btnGuardar = document.getElementById('btnGuardar');
    const btnCancelarEdicion = document.getElementById('btnCancelarEdicion');
    const btnRecargar = document.getElementById('btnRecargar');
    const tablaBody = document.getElementById('tablaUsuariosBody');
    const alertaContainer = document.getElementById('alertaContainer');

    function mostrarAlerta(mensaje, tipo = 'success') {
        alertaContainer.innerHTML = `
            <div class="alert alert-${tipo} alert-dismissible fade show" role="alert">
                ${mensaje}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
    }

    function activarModoEdicion(usuario) {
        inputId.value = usuario._id;
        inputNombre.value = usuario.nombre || '';
        inputCorreo.value = usuario.correo || '';
        inputClave.value = usuario.clave || '';

        formTitulo.textContent = 'Editar Usuario';
        btnGuardar.textContent = 'Actualizar';
        btnGuardar.classList.replace('btn-primary', 'btn-warning');
        btnCancelarEdicion.classList.remove('d-none');
    }

    function resetearFormulario() {
        form.reset();
        inputId.value = '';
        formTitulo.textContent = 'Registrar Usuario';
        btnGuardar.textContent = 'Guardar';
        btnGuardar.classList.replace('btn-warning', 'btn-primary');
        btnCancelarEdicion.classList.add('d-none');
    }

    btnCancelarEdicion.addEventListener('click', resetearFormulario);

    function renderizarTabla(usuarios) {
        tablaBody.innerHTML = '';

        if (!usuarios.length) {
            tablaBody.innerHTML = '<tr><td colspan="4" class="text-center py-4">No hay usuarios registrados.</td></tr>';
            return;
        }

        usuarios.forEach((usuario) => {
            const tr = document.createElement('tr');

            const tdNombre = document.createElement('td');
            tdNombre.textContent = usuario.nombre;

            const tdCorreo = document.createElement('td');
            tdCorreo.textContent = usuario.correo;

            const tdClave = document.createElement('td');
            tdClave.textContent = '••••••';

            const tdAcciones = document.createElement('td');
            tdAcciones.className = 'text-end';

            const btnEditar = document.createElement('button');
            btnEditar.type = 'button';
            btnEditar.className = 'btn btn-sm btn-outline-primary me-2';
            btnEditar.textContent = 'Editar';
            btnEditar.addEventListener('click', () => activarModoEdicion(usuario));

            const btnEliminar = document.createElement('button');
            btnEliminar.type = 'button';
            btnEliminar.className = 'btn btn-sm btn-outline-danger';
            btnEliminar.textContent = 'Eliminar';
            btnEliminar.addEventListener('click', () => eliminarUsuario(usuario));

            tdAcciones.append(btnEditar, btnEliminar);
            tr.append(tdNombre, tdCorreo, tdClave, tdAcciones);
            tablaBody.appendChild(tr);
        });
    }

    async function cargarUsuarios() {
        try {
            const respuesta = await fetch(API.USUARIOS);
            const usuarios = await respuesta.json();
            renderizarTabla(usuarios);
        } catch (error) {
            tablaBody.innerHTML = '<tr><td colspan="4" class="text-center py-4 text-danger">Error al conectar con la API.</td></tr>';
        }
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const datosUsuario = {
            nombre: inputNombre.value.trim(),
            correo: inputCorreo.value.trim(),
            clave: inputClave.value.trim()
        };

        const idEdicion = inputId.value;
        const esEdicion = Boolean(idEdicion);
        const url = esEdicion ? `${API.USUARIOS}/${idEdicion}` : API.USUARIOS;
        const metodo = esEdicion ? 'PUT' : 'POST';

        try {
            const respuesta = await fetch(url, {
                method: metodo,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datosUsuario)
            });

            const resultado = await respuesta.json();

            if (!respuesta.ok) {
                throw new Error(resultado.message || 'Error al guardar');
            }

            mostrarAlerta(esEdicion ? 'Usuario actualizado' : 'Usuario creado', 'success');
            resetearFormulario();
            cargarUsuarios();
        } catch (error) {
            mostrarAlerta(error.message, 'danger');
        }
    });

    async function eliminarUsuario(usuario) {
        if (!confirm(`¿Eliminar a ${usuario.nombre}?`)) return;

        try {
            const respuesta = await fetch(`${API.USUARIOS}/${usuario._id}`, {
                method: 'DELETE'
            });

            if (!respuesta.ok) {
                throw new Error('Error al eliminar');
            }

            mostrarAlerta('Usuario eliminado', 'info');
            cargarUsuarios();
        } catch (error) {
            mostrarAlerta(error.message, 'danger');
        }
    }

    btnRecargar.addEventListener('click', cargarUsuarios);
    cargarUsuarios();
});
