import { Link } from 'react-router';    
import styles from "./App.module.css"

export default function App() {
   
    return(
        <>  
        <div className={styles.header}>
            <h1>โมดูลที่ 6: ฟีเจอร์ใหม่ React 19 (Modern React Features)</h1>
        </div>   
        <div className={styles.container_list}> 
            <Link to = "/App9" className={styles.list}>6.1: ฟอร์มรับข่าวสาร (Async Actions)</Link>
            <Link to = "/App10" className={styles.list}> 6.2: โชว์ผลลัพธ์ทันใจ (Optimistic UI)</Link>
        </div>
        
        </>
    )
}