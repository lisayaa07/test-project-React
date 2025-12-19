import { useState } from 'react';
import StudentCard from './components/StudentCard';
import './App.css';

export default function App() {
      const [data] = useState([
      { studentID : 1 , name: "chani" , major:"Sci" ,gpa:"3.50" ,image : "/love.png"},
      { studentID : 2 , name: "huhu" , major:"Sci", gpa:"1.00" ,image : "/1.jpg"},
      { studentID : 3 , name: "what" , major:"Com", gpa:"1.95", image : "/2.jpg"},
      { studentID : 4 , name: "eiei" , major:"Com", gpa:"2.45" ,image : "/3.jpg"},
    ]); 
    console.log(data)
    return(
        <>
        <header>
            <h1>Student Information</h1>
        </header>
        
        <main>
        <StudentCard data={data} />
        </main>
        </>
    )
}