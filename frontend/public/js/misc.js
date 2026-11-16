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

export function mostrarModal(titulo, mensaje, tipo, colorTexto) {
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
              <div class="modal-header bg-${tipo} text-${colorTexto}">
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