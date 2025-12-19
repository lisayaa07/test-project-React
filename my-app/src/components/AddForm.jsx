import "./AddForm.css";
import { useState } from "react";
export default function AddForm(props){
    const {data,setData} = props

    const [name,setName] = useState("")
    const [gender,setGender] = useState("male")

    function saveData(e){
        e.preventDefault()//ป้องกันการรีเฟรชหน้า
        //ส่งค่าแบบแยก
        console.log(name,gender)
        //ส่งค่าแบบ object
        const user={
            // id: data.length + 1, //อาจซ้ำกันได้ถ้ามีการลบข้อมูล
            id:Math.floor(Math.random()*1000),
            name:name,
            gender:gender
        }
        console.log(user);
        setData([...data,user])
        setName("")
        setGender("male")
    }   

    return(
        <section className="container">
            <form onSubmit={saveData} >
                <label>name:</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>

                <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <option >male</option>      
                    <option >female</option>
                </select>
                <button type="submit" className="btn-submit" disabled ={name.trim()===""}>submit</button>
            </form>
     </section>
    );
}