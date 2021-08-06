import React from "react";
import "../sass/pages/home.scss";

const HeaderMenuDropDown = (props) => {
  const title = props.title;
  const item = props.prod;
  return (
    <>
      <div className="menu__dropDownProduct dropDown">
        <div className="menu__dropDownProductContainer TitleContainer">
          <span className="menu__dropDownProductTitle">{title}</span>
          <img
            className="menu__dropDownProductImage"
            src="https://assets-global.website-files.com/5d56cb37dc00725ec86984e3/5e16b2b33c053ff9fa81f175_chevron-down%20(1).svg"
            alt=""
          />
        </div>
        <div className="menu__productContainer">
          {item.map((prod) => (
            <li key={prod.title} className="menu__listItem">
              <img src={prod.img} alt="" className="plataforma__image" />
              <div className="listItem__container">
                <span className="plataforma__title">{prod.title}</span>
                <p className="plataforma__description">{prod.description}</p>
              </div>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};
export default HeaderMenuDropDown;
