import { Link } from 'react-router';    
import styles from "./App.module.css"

export default function App() {
   
    return(
        <>  
        <div className={styles.header}>
            <h1>โมดูลที่ 5: ประกอบร่าง Component (Composition)</h1>
        </div>   
        <div className={styles.container_list}> 
            <Link to = "/App8" className={styles.list}>5.1: กล่องข้อความอเนกประสงค์ (Reusable Card)</Link>
           
        </div>
        
        </>
    )
}