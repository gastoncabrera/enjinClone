import React from "react";

const Blog = (blog) => {
  const { img, title, btn, fecha } = blog.blog;
  return (
    <>
      <article className="sectionBlogCard__container">
        <img className="sectionBlogCard__image" src={img} alt={title} />
        <div className="sectionBlogCard__btn">
          <a
            className={
              btn === "Blockchain" ? "news__btn--blockchain" : "news__btn"
            }
            href="/"
          >
            {btn}
          </a>
        </div>
        <p className="sectionBlogCard__date">{fecha}</p>
        <h6 className="sectionBlogCard__title">{title}</h6>
      </article>
    </>
  );
};
export default Blog;
