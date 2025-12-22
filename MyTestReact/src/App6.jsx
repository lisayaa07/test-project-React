import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ArticleList from "./components/ArticleList";


export default function App() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <h1>Article Search</h1>

      <div className="container"> 
      <SearchBar setQuery={setQuery} />

     
      <ArticleList query={query} />
      </div>
    </div>
  );
}
