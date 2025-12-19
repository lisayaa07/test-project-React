import { useState } from 'react';
import SubjectList from './components/SubjectList';
import './App.css';

export default function App() {
      const [data] = useState([
      { ID : 1111111 , name: "คณิตศาสตร์" , credits: 4},
      { ID : 2222222 , name: "วิทยาศาสตร์" , credits: 3},
      { ID : 3333333 , name: "สังคมศาสตร์" , credits: 2},
      { ID : 4444444 , name: "ชีววิทยา" , credits: 3},
      { ID : 555555 , name: "เคมี" , credits: 2}
    ]); 
    console.log(data)
    return(
        <>
        <header>
            <h2>Course List Rendering</h2>
        </header>
        
        <main>
        <SubjectList data={data} />
        </main>
        </>
    )
}