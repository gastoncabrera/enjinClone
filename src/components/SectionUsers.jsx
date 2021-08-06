import "../sass/pages/home.scss";

const SectionUsers = () => {
  return (
    <>
      <section className="sectionUser">
        <div className="sectionUser__container">
          <div className="sectionUser__contentDescription">
            <article className="sectionUser__content">
              <h2 className="sectionUser__title">Confianza de Millones</h2>
              <p className="sectionUser__description">
                Millones de personas utilizan los productos de Enjin para
                gestionar, crear e intercambiar fichas fungibles y no fungibles.
              </p>
            </article>
            <article className="sectionUser__amountContainer">
              <nav className="sectionUser__amount">
                <ul className="sectionUser__list">
                  <li className="sectionUser__item left">
                    <span className="sectionUser__link--numberUsers left">
                      1.8M+
                    </span>
                    <p className="sectionUser__link--description left">
                      Instalaciones de la Cartera
                    </p>
                  </li>
                  <li className="sectionUser__item center">
                    <span className="sectionUser__link--numberUsers center">
                      1.1B
                    </span>
                    <p className="sectionUser__link--description center">
                      Activos Creados
                    </p>
                  </li>
                  <li className="sectionUser__item right">
                    <span className="sectionUser__link--numberUsers right">
                      44.1M
                    </span>
                    <p className="sectionUser__link--description right">
                      Volumen del Mercado (ENJ)
                    </p>
                  </li>
                </ul>
              </nav>
            </article>
          </div>
          <article className="sectionUser__imageContainer">
            <img
              className="sectionUser__image"
              src="https://assets-global.website-files.com/5d56cb37dc00725ec86984e3/603fa40e7ed3fb0bcb7e6519_Wallet.png"
              alt="users"
            />
          </article>
        </div>
      </section>
    </>
  );
};
export default SectionUsers;
