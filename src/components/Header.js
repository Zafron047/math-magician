import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => (
  <section className="nav">
    <h1 className="nav h1">Math Magician</h1>
    <ul className="navul">
      <li className="navul li">
        <Link
          to="/"
        >
          Home
        </Link>
      </li>
      <li className="navul li liBorder">
        <Link
          to="/calculator"
        >
          Calculator
        </Link>
      </li>
      <li className="navul li">
        <Link
          to="/GetApi"
        >
          Quote
        </Link>
      </li>
    </ul>
  </section>
);

export default Header;
