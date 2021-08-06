import React from "react";

const SectionFooterItem = (props) => {
  const item = props.items;
  const title = props.title;
  return (
    <>
      <article className="product">
        <nav>
          <ul className="footer__list">
            <li className="footer__item">
              <p className="footer__title">{title}</p>
            </li>
            {item.map((item) => (
              <li className="footer__item" key={item}>
                <a className="footer__link" href="/">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </article>
    </>
  );
};
export default SectionFooterItem;
