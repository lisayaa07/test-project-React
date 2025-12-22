import { Link } from 'react-router';    
import styles from "./App.module.css"

export default function App() {
   
    return(
        <>  
        <div className={styles.header}>
            <h1>โมดูลที่ 3: จัดการข้อมูลซับซ้อน (Complex State Management)</h1>
        </div>   
        <div className={styles.container_list}> 
            <Link to = "/App4" className={styles.list}>3.1: ฟอร์มลงทะเบียน (Registration Form Object)</Link>
            <Link to = "/App5" className={styles.list}>3.2: ลิสต์สิ่งที่ต้องทำ (Todo List CRUD)</Link>
        </div>
        
        </>
    )
}