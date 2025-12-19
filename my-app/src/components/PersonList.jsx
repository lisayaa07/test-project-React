import { useState } from "react";

 import "./PersonList.css"
 import User from "./User";

   //สามารถเขียน {data}  แล้วไม่ต้องเขียนตัวแปรมารับก็ได้
function PersonList({data,deleteUser}) {

  //  const [name, setName] = useState("chanipron");
  // console.table(data);
  const[show, setShow] = useState(true); 

  return (
    <>
    <div className="container">
  
     <div className="header">
    
      <h2 style={{color:"red",fontSize:"20px"}}>จำนวนประชากร {data.length} คน</h2>
      
      {/* if else แบบย่อ */}
      <button onClick={()=>setShow(!show)}>{show ? "ซ่อน" : "แสดง"}</button>
      </div>

      <ul>
        {show && 
          data.map((item)=>(
            <User key={item.id} item={item} deleteUser={deleteUser}/>
        ))}
         
      </ul>
    </div></>
    
  )
}

export default PersonList;

    {/* <h1>hello {name}</h1>
      <h3>ที่อยู่ : {address}</h3>
      <h3>อายุ : {age} ปี</h3>
      
     <button onClick = {()=>setAge(age+1)}>เพิ่ม</button>
     <but onClick = {()=>setAge(age-1)}>ลด</but
     <button onClick={() => setAge(22)}>reset</button> */}
     {/* <h3>{name}</h3>

     <button onClick={()=>setName("huhu")}>เปลี่ยนชื่อ</button>  
     <button onClick={()=>setName("chanipron")}>reset</button>   */}