import { Link } from 'react-router';    
import styles from "./App.module.css"

export default function App() {
   
    return(
        <>  
        <div className={styles.header}>
            <h1>โมดูลที่ 7: คำนวณค่าสดๆ (Derived State)</h1>
        </div>   
        <div className={styles.container_list}> 
            <Link to = "/App11" className={styles.list}>7.1: กรองสินค้าขั้นเทพ (Filtered Product List)</Link>
           
        </div>
        
        </>
    )
}