import React from "react";
import "../sass/pages/home.scss";
import { blog } from "../const";
import Blog from "./Blog";

const SectionBlock = () => {
  return (
    <>
      <img
        src="https://assets-global.website-files.com/5d56cb37dc00725ec86984e3/5d56cb37dc007260dc6985f4_divider-round-top.svg"
        alt="Borde redondeado del contenedor Blog"
        className="bordeContainerImage"
      />
      <section className="blog">
        <div className="blog__container">
          <div className="blog__presentationContainer">
            <h2 className="sectionBlog__title">Desde Nuestro Blog</h2>
            <p className="sectionBlog__description">
              Las últimas noticias de la empresa, guías de gamedev y
              conocimientos sobre blockchain.
            </p>
          </div>
          <section className="sectionBlog__container">
            {blog.map((blog) => (
              <Blog blog={blog} key={blog.title} />
            ))}
          </section>
        </div>
      </section>
    </>
  );
};
export default SectionBlock;
