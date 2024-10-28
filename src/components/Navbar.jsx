function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-success" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Hotéis
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-light"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link ${props.pagina == 'Home' ? 'active' : ''}`}
                href="#"
                onClick={() => props.selecionaPagina('Home')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  props.pagina == 'Quartos' ? 'active' : ''
                }`}
                href="#"
                onClick={() => props.selecionaPagina('Quartos')}
              >
                Quartos
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  props.pagina == 'Reserva' ? 'active' : ''
                }`}
                href="#"
                onClick={() => props.selecionaPagina('Reserva')}
              >
                Reservas
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
