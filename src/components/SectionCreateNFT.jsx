import React from "react";
import "../sass/pages/home.scss";

const SectionCreateNFT = () => {
  return (
    <>
      <section className="createNFT">
        <div className="createNFT__container">
          <article className="createNFT__info">
            <h1 className="createNFT__title">
              NFT de nueva generación para todos
            </h1>
            <p className="createNFT__description">
              Productos que facilitan a particulares, empresas y marcas el uso
              de fichas no fungibles del futuro.
            </p>
            <a className="createNFT__btn" href="/">
              Empiece
            </a>
          </article>
          <article className="createNFT__imageContainer">
            <img
              src="https://assets-global.website-files.com/5d56cb37dc00725ec86984e3/603fa40ef01501570a1f08a4_Above%20Fold%20Ecosystem%20(1).png"
              alt="createNFT"
              className="createNFT__image"
            />
          </article>
        </div>
      </section>
      <img
        src="https://assets-global.website-files.com/5d56cb37dc00725ec86984e3/5d56cb37dc007219e26985ef_divider-round-bottom.svg"
        alt="Borde redondeado del contenedor createNFT"
        className="bordeContainerImage"
      />
    </>
  );
};
export default SectionCreateNFT;
