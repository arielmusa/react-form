import { articles } from "../../data/articles";
import Article from "./Article";

export default function Main() {
  return (
    <div className="container">
      <form className="py-5">
        <div class="mb-3">
          <label for="titleInput" class="form-label">
            Add a new article
          </label>
          <input type="text" class="form-control" id="titleInput"></input>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="row row-gap-4">
        <h1>hello</h1>
        {articles.map((article) => (
          <Article title={article.title} key={article.id} />
        ))}
      </div>
    </div>
  );
}
