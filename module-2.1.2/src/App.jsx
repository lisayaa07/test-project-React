import { useState } from "react";
import ("./App.css")
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

      <button onClick={increase}>+</button>
      <button onClick={decrease} disabled={count === 0}>
        -
      </button>
      <button onClick={reset}>Reset</button>
      
      <button onClick={toggleTheme}>Mode :{theme}</button>
    </div>
  );
}
