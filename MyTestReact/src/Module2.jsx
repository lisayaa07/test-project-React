import { Link } from 'react-router';    
import styles from "./App.module.css"

export default function App() {
   
    return(
        <>   
        <div className={styles.header}>
            <h1>โมดูลที่ 2: ทำให้แอปขยับได้ (Interactivity & Basic State)</h1>
        </div>    
        <div className={styles.container_list}>
            <Link to = "/App3" className={styles.list}>2.1: เคาน์เตอร์อัจฉริยะ (Smart Counter)</Link>
        </div>      
        
        
     
        
        </>
    )
}