import Logo from '../../Assets/Images/logo.svg';

import './Header.scss';

function Header() {
  return (
    <header className="header__wrapper">
      <img title="logo" src={Logo} />
      <div className="button__wrapper">
        <button className="btn signin">Sign in</button>
        <button className="btn signup">Sign up</button>
      </div>
    </header>
  );
}

export default Header;
