import { Link } from "react-router";
import styles from "../App.module.css";

export default function ModuleCard({ title, path }) {
  return (
    <Link to={path} className={styles.list}>
      {title}
    </Link>
  );
}
