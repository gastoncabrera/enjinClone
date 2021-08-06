import React from "react";
import HeaderMenuDropDown from "./HeaderMenuDropDown";
import { solutions, products, resources, about } from "../constMenuDropDown";

const MenuDropDown = () => {
  return (
    <>
      <nav className="menu__container">
        <HeaderMenuDropDown
          prod={products}
          key={products.title}
          title="Producto"
        />
        <HeaderMenuDropDown
          prod={solutions}
          key={solutions.title}
          title="Soluciones"
        />
        <HeaderMenuDropDown
          prod={resources}
          key={resources.title}
          title="Recursos"
        />
        <HeaderMenuDropDown prod={about} key={about.title} title="Acerca de" />
      </nav>
    </>
  );
};
export default MenuDropDown;
