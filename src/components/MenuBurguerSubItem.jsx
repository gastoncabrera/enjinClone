import React from "react";

const MenuBurguerSubItem = ({ item }) => {
  return (
    <>
      <div className="subMenuActive">
        <ul className="subItem__list">
          {item.map((item) => (
            <li key={item.title} className="subItem__item">
              <a href="/" className="subItem__link">
                <img
                  src={item.img}
                  alt={item.title}
                  className="subItem__link--img"
                />
                <div className="subItem__linkContent">
                  <p className="subItem__link--title">{item.title}</p>
                  <p className="subItem__link--description">
                    {item.description}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default MenuBurguerSubItem;
