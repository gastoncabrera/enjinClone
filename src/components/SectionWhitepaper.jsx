import React from "react";
import "../sass/pages/home.scss";

const SectionWhitepaper = () => {
  return (
    <>
      <section className="sectionWhitepaper">
        <div className="sectionWhitepaper__container">
          <article className="sectionWhitepaper__content">
            <p className="sectionWhitepaper__presentation">
              PRESENTACIÓN DE EFINITY
            </p>
            <h2 className="sectionWhitepaper__title">
              Blockchain de próxima generación para las NFT
            </h2>
            <p className="sectionWhitepaper__description">
              Red escalable, descentralizada y de cadena cruzada diseñada para
              llevar tokens no fungibles a todo el mundo.
            </p>
            <a href="/" className="sectionWhitepaper__btn">
              Aprenda Más
            </a>
          </article>
          <article className="sectionWhitepaper__imageContainer">
            <img
              className="sectionWhitepaper__image"
              src="https://assets-global.website-files.com/5d56cb37dc00725ec86984e3/603fa40eafadf91f9cc5ca9b_Copy%20of%20Futuristic%20Highway.png"
              alt="whitepaper"
            />
          </article>
        </div>
      </section>
      <img
        src="https://assets-global.website-files.com/5d56cb37dc00725ec86984e3/5d56cb37dc007219e26985ef_divider-round-bottom.svg"
        alt="Borde redondeado del contenedor Whitepaper"
        className="bordeContainerImage"
      />
    </>
  );
};
export default SectionWhitepaper;
