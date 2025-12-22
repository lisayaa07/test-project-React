import { Link } from 'react-router';    
import styles from "./App.module.css"

export default function App() {
   
    return(
        <>  
        <div className={styles.header}>
            <h1>โมดูลที่ 4: แชร์ข้อมูลและจัดการ Effects</h1>
        </div>   
        <div className={styles.container_list}> 
            <Link to = "/App6" className={styles.list}>4.1: ค้นหาบทความ (Lifting State Up)</Link>
            <Link to = "/App7" className={styles.list}>4.2: นาฬิกาดิจิทัล (Effect & Cleanup)</Link>
        </div>
        
        </>
    )
}