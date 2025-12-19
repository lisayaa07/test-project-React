import Card from "./components/Card";
import "./App.css";

export default function App() {
  return (
    <div style={{ width: "400px", margin: "0 auto" }}>
      
      
      <Card>
        <img
          src="love.png"
        />
        <h2>Hello</h2>
      </Card>

     
      <Card>
        <h2>Login</h2>
        <input placeholder="Username" />
        <br /><br />
        <input type="password" placeholder="Password" />
        <br /><br />
        <button>Login</button>
      </Card>

    </div>
  );
}
