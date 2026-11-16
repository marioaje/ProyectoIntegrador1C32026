let mensajeSpinner = `<div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-border text-secondary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-border text-success" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-border text-warning" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-border text-info" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-border text-light" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-border text-dark" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>`;

export function mostrarSpinner() {
    document.getElementById("mensajeSpinner").innerHTML = mensajeSpinner;
}

export function ocultarSpinner() {
    document.getElementById("mensajeSpinner").innerHTML = "";
}

//mostrar un modal 

export function mostrarModal(titulo, mensaje, tipo = "success", colorTexto = "white") {
    const modalBase = `
      <div
          class="modal fade"
          id="modalMostrarMensajes"
          tabindex="-1"
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header bg-${tipo === "" ? "success" : tipo} text-${colorTexto}">
                <h5 class="modal-title" id="modalTitleId">${titulo}</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="container-fluid">${mensaje}</div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
         
              </div>
            </div>
          </div>
        </div>
    `;

    const modalMensajes = document.getElementById("modalMensajes");

    modalMensajes.innerHTML = modalBase;


    const modalMostrarMensajes = bootstrap.Modal.getOrCreateInstance(
        document.getElementById("modalMostrarMensajes")
    );

    modalMostrarMensajes.show();

}


export function mensajesAlerts(titulo, descrpcion, tipo = "success") {


    const mensajesAlert = document.getElementById("mensajesAlert");

    const mensajeAlertasPersonalizado =
        `
        <div
            class="alert alert-${tipo === "" ? "success" : tipo} alert-dismissible fade show"
            role="alert"
            >
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
            ></button>
            <strong>${titulo}</strong> ${descrpcion}
            </div>
        `;


    mensajesAlert.innerHTML = mensajeAlertasPersonalizado;
}