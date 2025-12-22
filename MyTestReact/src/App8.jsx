import Card from "./components/Card";
import "./App8.css";

export default function App() {
  return (
    <div style={{ width: "400px", margin: "0 auto" }}>
      
      
      <Card>
        <img
          src="love.png"
          className="img-app8"
        />
        <h2>Hello</h2>
      </Card>

     
      <Card>
        <h2>Login</h2>
        <input placeholder="Username"  className="input-app8"/>
        <br /><br />
        <input type="password" placeholder="Password" className="input-app8"/>
        <br /><br />
        <button>Login</button>
      </Card>

    </div>
  );
}
