import { Link } from 'react-router';    
import styles from "./App.module.css"

export default function App() {
   
    return(
        <>  
        <div className={styles.header}>
            <h1>โมดูลที่ 1: เริ่มสร้างหน้าตา UI (Fundamental UI Construction)</h1>
        </div>   
        <div className={styles.container_list}>
            <Link to = "/Apptest" className={styles.list}>1.1: การ์ดแนะนำตัว (Student Profile Card)</Link>
            <Link to = "/App2" className={styles.list}>1.2: ลิสต์รายวิชา (Course List Rendering)</Link>
        </div>         
                
        </>
    )
}