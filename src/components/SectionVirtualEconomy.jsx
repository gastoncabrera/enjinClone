import React from "react";
import "../sass/pages/home.scss";

const SectionVirtualEconomy = () => {
  return (
    <>
      <section className="sectionVirtualEconomy">
        <div className="sectionVirtualEconomy__container">
          <article className="sectionVirtualEconomy__content">
            <h2 className="sectionVirtualEconomy__title">¿Por qué Enjin?</h2>
            <p className="sectionVirtualEconomy__description">
              Estamos cambiando la naturaleza fundamental de las economías
              virtuales.
            </p>
            <a href="/" className="sectionVirtualEconomy__btn">
              Aprenda Cómo
            </a>
          </article>
          <article className="sectionVirtualEconomy__imageContainer">
            <img
              src="https://assets-global.website-files.com/5d56cb37dc00725ec86984e3/603fa40eafadf9b589c5ca99_Why%20Enjin.png"
              className="sectionVirtualEconomy__image"
              alt="Virtual Economy"
            />
          </article>
        </div>
      </section>
    </>
  );
};
export default SectionVirtualEconomy;
