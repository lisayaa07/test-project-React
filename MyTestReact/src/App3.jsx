import { useState } from "react";
import "./App3.css"
export default function Counter() {
  const [count, setCount] = useState(0);
  const [theme , setTheme] = useState("dark")

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  const toggleTheme = () => {

    if(theme === "light"){
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    
    <div className={theme} style={{ textAlign: "center", paddingTop: "40px" }}>
      <h1
        style={{
          color: count > 10 ? "green" : "red" ,
          
        }}
      >
        {count}
      </h1>

      <button onClick={increase} className="btn-mode">+</button>
      <button onClick={decrease} disabled={count === 0} className="btn-mode">
        -
      </button>
      <button onClick={reset} className="btn-mode">Reset</button>
      
      <button onClick={toggleTheme} className="btn-mode">Mode :{theme}</button>
    </div>
  );
}
