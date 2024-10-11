import { Link } from 'react-router-dom';
import Logo from '../../Assets/Images/Logo2.svg';

import './Header.scss';

function Header() {
  return (
    <header className="header__wrapper">
      <Link to="/">
        <img className="logo" title="logo" src={Logo} />
      </Link>
      {/* <div className="button__wrapper">
        <button className="btn signin">Sign in</button>
        <button className="btn signup">Sign up</button>
      </div> */}
    </header>
  );
}

export default Header;
