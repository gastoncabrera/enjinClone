import React from "react";
import { icons } from "../constFooter";
import "../sass/pages/home.scss";

const FooterContact = () => {
  return (
    <>
      <section className="contact__container">
        <div>
          <h2 className="contact__title">Manténgase al Día</h2>
          <p className="contact__description">
            No te pierdas las últimas noticias, guías y opiniones de Enjin.
          </p>
        </div>
        <form action="" className="contact">
          <div className="contact__inputContainer">
            <input
              placeholder="Correo Electrónico"
              className="contact__input"
            />
            <button className="contact__btn">Suscríbase</button>
          </div>
        </form>
      </section>
      <section className="app-and-social">
        <div className="app__container">
          <article className="app__btn">
            <a className="app__btn--googleplay" href="/">
              <i className="fab fa-google-play" />
              Google Play
            </a>
            <a className="app__btn--appstore" href="/">
              <i className="fab fa-app-store-ios" />
              App Store
            </a>
          </article>
          <article className="social__container">
            <nav className="social">
              <ul className="social__list">
                {icons.map((icon) => (
                  <li className="social__item" key={icon.title}>
                    <a className="social__link" href={icon.link}>
                      <img src={icon.img} alt={icon.title} />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </article>
        </div>
        <div className="owner__container">
          <article className="owner">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMTowNTowNSAxMTowNzoyMhtD834AAALQSURBVEhLxZbRS1NRGMA/V25XczRdoVuUS9xqSjIaEUniQhAKo/JBeuzJp8Jn/wKfpZ586kkiHyoWFcJgsjCyFmGENa0sdWJlJZtXtxl2vnPP8pzdu+3eGesHHzvfd3e+755zvu87t6KltW8byoyJ/ZaV/xJU9/bW2qxwtOkQtJ1oBqu1GmqIIMmEDAki02/m4NPHJfj5K0HthSga1Ok4AH6/l8hxZilMNPqOyAzEl78zi5qCQTvO+qCr6xTTjBEKvYDI09dME8l7poHOkyUHRHBuIOBnmohm0NaWprwTjIAvjr5yUW0vnmF//xWm7YDJEo9/A1nepJLZ+q082Famm0wmkCQzEQtIVRbwuA9TOzIyck84Y1XQiz0dqqQJT7yC6MsZSCRlZikOrjK7W5hcwYcROkaE7bXb96sCBoMRCIejhgLaSHmhZEGf6DuLsNL2M23Q3X2aaQCx2QUYHX3CNACfz0PPqKHBTmvVCOPjz2Hy2TQdCyv1eI6wkcIaV+j47PKlTnCTszIaEOF9C0Fzna2ThMnidB6E+fllXbJEEi6d2WIzFXjfwvYODl4Di7mSaUoC4XmWQm/vOdoys6TSGRgauk3HeZvDbkltptlIjbDSG9f7hCzjV4rp72p00HExqkid1hE/lXv3MAvA6uoa3Lx1l46FlWID4JEsZjYCWFxYAZfLoUvq6+uEgAjvWwiK1xOPrXan1uY+LML9BxMwS8ooub7BrPrhfQvbi3fmwMBVpik8ejwJU1NvmaaPfdUS9JDO5vW6mAVgePjO37tWWCkasWXxXDjfTs/TWqO/NrHUVr7+YJrSBvnLXdV7CzX8ZdK05Y0UyGR7c+vQZKogCSSxpm8Gd7OBho/s5vLOResy16xT/FOpTYEHS07r6yFvc8AJY2MhphkH5+Z7cc3t5Sn7hxkPdqpjnkZ6W2h9gsZiX+B97DPtPMXQHfTfAfAHprI6G52iXSAAAAAASUVORK5CYII="
              className="owner__image"
              alt="owner"
            />
            <p className="owner__title">Copyright © Enjin 2021</p>
          </article>
          <article className="author">
            <div className="author__title--top">
              <a className="author__link" href="/">
                Condiciones de servicio -
              </a>
              <a className="author__link" href="/">
                Política de privacidad -
              </a>
            </div>
            <div className="author__title--bottom">
              <a className="author__link" href="/">
                Seguridad
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
export default FooterContact;
