document.addEventListener("DOMContentLoaded", function () {

  const menu = document.getElementById("menu");
  const footerMenu = document.getElementById("footerMenu");

  if (!menu) return;

  menu.innerHTML = `
      <nav class="navbar navbar-expand-sm navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand" href="#">Proyecto Integrador</a>
            <button
              class="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
              <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    href="index.html"
                    aria-current="page"
                    >Home <span class="visually-hidden">(current)</span></a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="usuarios.html">Usuarios</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="productos.html">Productos</a>
                </li>                

                <li class="nav-item">
                  <a class="nav-link" href="CrearCurso.html">Crear Curso</a>
                </li>     

                <li class="nav-item">
                  <a class="nav-link" href="login.html">Login</a>
                </li>     

                
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="dropdownId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >Dropdown</a
                  >
                  <div class="dropdown-menu" aria-labelledby="dropdownId">
                    <a class="dropdown-item" href="productos.html">Productos</a>
                    <a class="dropdown-item" href="#">Action 2</a>
                  </div>
                </li>
              </ul>
              <form class="d-flex my-2 my-lg-0">
                <input
                  class="form-control me-sm-2"
                  type="text"
                  placeholder="Search"
                />
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>    
    `;









  footerMenu.innerHTML = `  <footer
            class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
          >
            <p class="col-md-4 mb-0 text-body-secondary">
              &copy; 2025 Company, Inc
            </p>
            <a
              href="/"
              class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
              aria-label="Bootstrap"
            >
              <svg class="bi me-2" width="40" height="32" aria-hidden="true">
                <use xlink:href="#bootstrap"></use>
              </svg>
            </a>
            <ul class="nav col-md-4 justify-content-end">
              <li class="nav-item">
                <a href="#" class="nav-link px-2 text-body-secondary">Home</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link px-2 text-body-secondary"
                  >Features</a
                >
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link px-2 text-body-secondary"
                  >Pricing</a
                >
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link px-2 text-body-secondary">FAQs</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link px-2 text-body-secondary">Aboust</a>
              </li>
            </ul>
          </footer>`;



});