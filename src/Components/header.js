import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Mon Site</h1>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'
              }
            >
              Connexion
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;