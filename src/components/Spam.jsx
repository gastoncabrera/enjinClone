import React from "react";
import "../sass/pages/home.scss";

const Spam = () => {
  function close() {
    return document.getElementById("spam").classList.add("close");
  }
  return (
    <>
      <section className="spam" id="spam">
        <div className="spam__container">
          <div className="spam__btn">
            <a href="/">Blog</a>
          </div>
          <div className="spam__info">
            <a href="/">Cómo las NFT aportan realismo a los juegos virtuales</a>
            <a href="/">Lea Más</a>
          </div>
          <button className="spam__close" type="button" onClick={close}>
            <img
              className="bi bi-x"
              src="https://assets-global.website-files.com/5d56cb37dc00725ec86984e3/5d56cb37dc0072383a698574_icon-x-light.svg"
              alt=""
            />
          </button>
        </div>
      </section>
    </>
  );
};
export default Spam;
