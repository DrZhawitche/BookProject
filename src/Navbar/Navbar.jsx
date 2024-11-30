import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();  // Get the current location (URL)

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Journey To The Center Of The Earth</h1>
      </div>

      <ul className="links">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        </li>
        <li>
          <Link to="/plot" className={location.pathname === '/plot' ? 'active' : ''}>Plot</Link>
        </li>
        <li>
          <Link to="/themes" className={location.pathname === '/themes' ? 'active' : ''}>Themes</Link>
        </li>
        <li>
          <Link to="/adaptations" className={location.pathname === '/adaptations' ? 'active' : ''}>Adaptations</Link>
        </li>
        {/* <li> */}
          {/* <Link to="/multimedia" className={location.pathname === '/multimedia' ? 'active' : ''}>Multimedia</Link> */}
        {/* </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
