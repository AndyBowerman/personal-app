import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul className="navbar">
      <Link to="/" className="navbar__link">
        <li className="navbar__item">Home</li>
      </Link>
      <Link to="/weather" className="navbar__link">
        <li className="navbar__item">Weather</li>
      </Link>
      <Link to="/todolist" className="navbar__link">
        <li className="navbar__item">To Do List</li>
      </Link>
    </ul>
  )
}

export default Navbar
