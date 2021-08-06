import React, { useState } from "react";
import "../sass/pages/home.scss";
import MenuDropDown from "../components/MenuDropDown";
import Language from "../components/Language";
import MenuBurguer from "../components/MenuBurguer";

const Header = () => {
  const [menu, setMenu] = useState(true);

  const menuActive = () => {
    setMenu(!menu);
  };
  return (
    <section className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img
            className="navbar__logoImage"
            src="https://assets-global.website-files.com/5d56cb37dc00725ec86984e3/6053b8d7980d026a513ac41c_enjinLogo(1).svg"
            alt="Logo Enjin"
          />
        </div>
        <MenuDropDown />
        <div className="container__searcher">
          <nav className="navbar__containerItems">
            <ul className="navbar__list">
              <li className="navbar__search">
                <button className="navbar__searchBtn" id="search">
                  <img
                    className="navbar__searchImage"
                    src="https://assets-global.website-files.com/5d56cb37dc00725ec86984e3/5fcd6861b2087f01ed5afdce_search.svg"
                    alt="search"
                  />
                </button>
              </li>
              <li className="navbar__languages">
                <img
                  className="navbar__languagesImage"
                  src="https://assets-global.website-files.com/5d56cb37dc00725ec86984e3/6007de906be2396c85e38519_003-spain.svg"
                  alt="language"
                />
                <Language />
              </li>
              <li className="navbar__menu">
                <img
                  onClick={menuActive}
                  src="https://assets-global.website-files.com/5d56cb37dc00725ec86984e3/5d56cb37dc00721019698553_icon-menu.svg"
                  className="menu__list"
                  alt="menu burger"
                />
                <MenuBurguer display={menu} />
              </li>
              <div className="navbar__login">
                <li className="login__item--sesion">
                  <a className="login__link--sesion" href="/">
                    Inicie sesión
                  </a>
                </li>
                <li className="login__item--init">
                  <a className="login__link--init" href="/">
                    Empiece
                  </a>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};
export default Header;
