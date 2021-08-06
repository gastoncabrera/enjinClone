import React from "react";
import "../sass/pages/home.scss";
import FooterContact from "../components/FooterContact";
import {
  products,
  solucions,
  resources,
  helpAndCommunity,
  about,
} from "../constFooter";
import SectionFooterItem from "../components/SectionFooterItem";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__container">
        <div className="footer__containerLink">
          <SectionFooterItem items={products} title="Productos" />
          <SectionFooterItem items={solucions} title="Soluciones" />
          <SectionFooterItem items={resources} title="Recursos" />
          <SectionFooterItem
            items={helpAndCommunity}
            title="Ayuda y comunidad"
          />
          <SectionFooterItem items={about} title="Acerca de" />
        </div>
        <FooterContact />
      </div>
    </section>
  );
};
export default Footer;
