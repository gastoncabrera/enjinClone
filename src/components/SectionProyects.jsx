import React from "react";
import CarouselImages from "./CarouselImages";

const SectionProyects = () => {
  return (
    <>
      <section className="sectionProyects">
        <div className="sectionProyects__container">
          <article className="sectionProyects__contents">
            <h1 className="sectionProyects__title">Propulsado por Enjin</h1>
            <p className="sectionProyects__description">
              Descubra proyectos pioneros de blockchain creados por
              desarrolladores con talento y empresas con visión de futuro de
              todo el mundo.
            </p>
          </article>
          <div className="sectionProyects__slider">
            <CarouselImages />
          </div>
        </div>
      </section>
    </>
  );
};
export default SectionProyects;
