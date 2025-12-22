import { Link } from 'react-router';    
import styles from "./App.module.css"

export default function App() {
   
    return(
        <>  
        <div className={styles.header}>
            <h1>โมดูลที่ 8: เจาะลึก DOM และ Custom Hooks</h1>
        </div>   
        <div className={styles.container_list}> 
            <Link to = "/App12" className={styles.list}>8.1: รีโมทคุมวิดีโอ (Video Player Control)</Link>
            <Link to = "/App13" className={styles.list}> 8.2: สร้าง Hook ไว้ดึงข้อมูล (useFetch Custom Hook)</Link>
        </div>
        
        </>
    )
}