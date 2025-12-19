import PersonList from "./components/PersonList.jsx"; 
import Header from "./components/Header.jsx";
import { useState } from "react";
import "./App.css";
import AddForm from "./components/AddForm.jsx"; 
function App() {
      const [data, setData] = useState([
      { id : 1 , name: "chani" , gender:"male" },
      { id : 2 , name: "huhu" , gender:"female"},
      { id : 3 , name: "what" , gender:"male"},
      { id : 4 , name: "eiei" , gender:"female"},
    ]);


    const [theme , setTheme] = useState ("light");
  
function deleteUser(id){
      const newarray = data.filter((user)=> user.id !== id)//new array
      setData(newarray)
    }
  

  return (
    <div className={theme}>
    <div className="app">
    <Header title="Person App" theme={theme} setTheme={setTheme}/>
    <main>
      <AddForm data={data} setData={setData}/>
      <PersonList data={data} deleteUser={deleteUser}/>
    </main>

    </div>
    </div>
  );
}

export default App;
