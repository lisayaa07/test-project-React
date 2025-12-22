import "./SearchBar.css"
export default function SearchBar({ setQuery }) {
  return (
    <input 
      placeholder="Search article..."
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
