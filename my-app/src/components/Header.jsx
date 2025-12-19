
// export default function Header() {
//   return (
//     <h1>Hello</h1>
//   )
// }
// export default Header;
import "./Header.css";

const Header =({title, theme, setTheme})=>{

  const toggleTheme = () => {

    if(theme === "light"){
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return(
    <nav>
      <h1>{title}</h1>
      <button onClick={toggleTheme}>Switch Mode : {theme}</button>
    </nav>
)
}

export default Header;