import "./ArticleList.css"
const articles = [
  "React Basics",
  "HTML",
  "CSS",
  "JavaScript",
  ""
];

export default function ArticleList({ query }) {
  const filteredArticles = articles.filter(article =>
    article.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {filteredArticles.map((article, index) => (
        <p key={index}>{article}</p>
      ))}
    </>
  );
}
