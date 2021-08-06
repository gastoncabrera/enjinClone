import React, { useState } from "react";
import { resources, about } from "../constMenuDropDown";
import MenuBurguerSubItem from "./MenuBurguerSubItem";

const MenuBurguer = ({ display }) => {
  const [resourcesMenu, setResourcesMenu] = useState(false);
  const [aboutMenu, setAboutMenu] = useState(false);

  const dropDownResource = () => {
    setResourcesMenu(!resourcesMenu);
  };
  const dropDownAbout = () => {
    setAboutMenu(!aboutMenu);
  };
  return (
    <>
      <div
        className={
          display
            ? "menuBurguer__contentDesactive"
            : "menuBurguer__contentActive"
        }
      >
        <nav className="menuBurguer">
          <ul className="menuBurguer__list">
            <li className="menuBurguer__item">
              <a href="/" className="menuBurguer__link--title">
                Productos
              </a>
            </li>
            <li className="menuBurguer__item">
              <div className="menuBurguer__link">
                <div
                  className="menuBurguer__link--title"
                  onClick={dropDownResource}
                >
                  Recursos
                  <img
                    src="https://assets-global.website-files.com/5d56cb37dc00725ec86984e3/5e16b2b33c053ff9fa81f175_chevron-down%20(1).svg"
                    alt="Recursos"
                    className="menuBurguer__link--img"
                  />
                </div>
                {resourcesMenu && <MenuBurguerSubItem item={resources} />}
              </div>
            </li>
            <li className="menuBurguer__item">
              <div className="menuBurguer__link">
                <div
                  className="menuBurguer__link--title"
                  onClick={dropDownAbout}
                >
                  Acerca de
                  <img
                    src="https://assets-global.website-files.com/5d56cb37dc00725ec86984e3/5e16b2b33c053ff9fa81f175_chevron-down%20(1).svg"
                    alt="Acerca de"
                    className="menuBurguer__link--img"
                  />
                </div>
                {aboutMenu && <MenuBurguerSubItem item={about} />}
              </div>
            </li>
            <li className="menuBurguer__item">
              <a href="/" className="menuBurguer__link--title">
                Inicie sesión
              </a>
            </li>
            <li className="menuBurguer__item">
              <a href="/" className="menuBurguer__link--title">
                Empiece
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default MenuBurguer;
