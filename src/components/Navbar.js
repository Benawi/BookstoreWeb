import { NavLink } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import NavStyles from '../styles/NavBar.module.css';
import Datet from './DateTimer';

const NavBar = () => (
  <div className={NavStyles.barContainer}>
    <div className={NavStyles.navBarContainer}>
      <nav className={NavStyles.navLinksContainer}>
        <h1>
          <NavLink className="fontStyle6 fontColor3 mr2" to="/">የጉራጌ ህዝብ ባህልና እሴት </NavLink>
        </h1>
        <p>
          <NavLink className="fontStyle7 fontColor1 mr1" to="/">ገጽ</NavLink>
        </p>
        <p>
          <NavLink className="fontStyle5 fontColor1" to="/categories">የገጽ ምድብ</NavLink>
        </p>
      </nav>
      <div>
        <Datet />
      </div>
      <div>
        <FaRegUserCircle style={{ color: '#0290ff', fontSize: '2.5em' }} />
      </div>
    </div>
  </div>
);

export default NavBar;
