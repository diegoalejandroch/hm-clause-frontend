function Navbar() {
  return (
    <div className="navbar fixed z-10 glass bg-base-300 bg-opacity-60 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Inicio</a>
            </li>
            <li>
              <a>Productos</a>
              <ul className="p-2">
                <li>
                  <a>Semilla de Tomate</a>
                </li>
                <li>
                  <a>Semilla de Pimiento</a>
                </li>
                <li>
                  <a>Semilla de Tomatillo</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Nosotros</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">HM Clause</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Inicio</a>
          </li>
          <li>
            <details>
              <summary>Productos</summary>
              <ul className="p-2">
                <li>
                  <a>Tomate</a>
                </li>
                <li>
                  <a>Pimiento</a>
                </li>
                <li>
                  <a>Tomatillo</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Nosotros</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Sign in</a>
      </div>
    </div>
  );
}

export default Navbar;
