function Navbar() {
  return (
    <header className="navbar-area">
      <nav
        className="nav nav-pills nav-fill gap-2 p-1 small bg-white rounded-5 shadow-sm mx-3 mx-md-5"
        aria-label="Navegação principal"
      >
        <a className="nav-link rounded-5" href="#inicio">
          Início
        </a>

        <a className="nav-link rounded-5" href="#jogos">
          Jogos
        </a>

        <a className="nav-link rounded-5" href="#sobre">
          Nossa história
        </a>

        <a className="nav-link rounded-5" href="#contato">
          Contato
        </a>
      </nav>
    </header>
  );
}

export default Navbar;