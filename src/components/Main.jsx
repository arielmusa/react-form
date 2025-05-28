import { useState } from "react";
import { articles } from "../../data/articles";
import Article from "./Article";

const emptyArticle = {
  id: 0,
  title: "",
};

export default function Main() {
  const [articleList, setNewArticleList] = useState(articles);
  const [newArticle, setNewArticle] = useState(emptyArticle);

  const handleSetNewArticle = (e) => {
    setNewArticle({
      id: articles.length + 1,
      [e.target.name]: e.target.value,
    });
    console.log(newArticle);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticleList = [...articles, newArticle];
    setNewArticleList(newArticleList);
    setNewArticle(emptyArticle);
  };

  return (
    <div className="container">
      <form className="py-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="titleInput" className="form-label">
            Add a new article
          </label>
          <input
            type="text"
            className="form-control"
            id="titleInput"
            name="title"
            value={newArticle.title}
            onChange={handleSetNewArticle}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="row row-gap-4">
        <h1>Article List</h1>
        {articleList.map((article) => (
          <Article title={article.title} key={article.id} />
        ))}
      </div>
    </div>
  );
}
