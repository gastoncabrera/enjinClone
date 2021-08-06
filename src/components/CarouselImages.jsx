import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import "../sass/pages/home.scss";

class CarouselImages extends Component {
  state = {
    items: [
      {
        id: 1,
        image:
          "https://assets-global.website-files.com/5d56cb37dc00727a4f69850c/60bfe4e4d3d9e86ccd75c3b3_Powered%20by%20Enjin%20-%20Health%20Hero.png",
        title: "Adelante! Por Health Hero",
        description:
          "Lleve su salud al siguiente nivel con los NFT de bienestar.",
      },
      {
        id: 2,
        image:
          "https://assets-global.website-files.com/5d56cb37dc00727a4f69850c/5e58fb4e53cce94745c794be_Powered%20By%20Enjin%202.jpg",
        title: "Azure Heroes",
        description:
          "Descubrir el programa de recompensas de insignias digitales de Microsoft basado en blockchain ",
      },
      {
        id: 3,
        image:
          "https://assets-global.website-files.com/5d56cb37dc00727a4f69850c/5ff87d081dfc157f55cb90a3_ArjenHDRP.png",
        title: "Age of Rust",
        description:
          "Desbloquear los misterios de un universo de ciencia ficción post-apocalíptico.",
      },
      {
        id: 4,
        image:
          "https://assets-global.website-files.com/5d56cb37dc00727a4f69850c/5eff196dbaffe4a8904add31_Lost-Relics-EnjinFeatured.png",
        title: "Lost Relics",
        description:
          "Cortar tu camino a través de innumerables mazmorras en tu búsqueda de botín.",
      },
      {
        id: 5,
        image:
          "https://assets-global.website-files.com/5d56cb37dc00727a4f69850c/60a2e80e886ff15ec6d549ec_Utilify_Banner_PoweredByEnjin_nologo_centered.png",
        title: "Utilice",
        description:
          "Conecta con los creadores y encuentra tu lugar en el multiverso en constante expansión.",
      },
      {
        id: 6,
        image:
          "https://assets-global.website-files.com/5d56cb37dc00727a4f69850c/6053440fb59de75b7f37774b_gametalktalk-poweredbyenjin.jpeg",
        title: "GameTalkTalk",
        description:
          "Gana recompensas de NFT por jugar y participar en una comunidad de 3 millones de personas.",
      },
      {
        id: 7,
        image:
          "https://assets-global.website-files.com/5d56cb37dc00727a4f69850c/5eda01f427a7b651b7a348e3_mymetaverse-cover_2000x1360.jpg",
        title: "MyMetaverse",
        description:
          "Embarcarte en un viaje interdimensional en Minecraft y más allá.",
      },
    ],
  };

  render() {
    const breakPoints = [{ width: 1200, itemsToShow: 1 }];
    const { items } = this.state;
    return (
      <Carousel breakPoints={breakPoints}>
        {items.map((item) => (
          <div key={item.id} className="card__container">
            <div className="card__imageContainer">
              <img src={item.image} className="card__image1" alt={item.title} />
              <img
                className="card__image"
                src="https://assets-global.website-files.com/5d56cb37dc00725ec86984e3/5d56cb37dc00727c236985e1_divider-vertical-1.svg"
                alt=""
              />
            </div>
            <div className="card__descriptionContainer">
              <h3 className="card__title">{item.title}</h3>
              <p className="card__description">{item.description}</p>
              <a href="/" className="card__btn">
                Aprenda Más
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    );
  }
}
export default CarouselImages;
