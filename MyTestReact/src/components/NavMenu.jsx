import { NavLink } from "react-router";
import { modules } from "../data/modules";
import styles from "../App.module.css";

export default function NavMenu() {
  return (
    <aside className={styles.sidebar}>
      {modules.map((module) => (
        <div key={module.id} className={styles.sidebarGroup}>
          <NavLink
            to={module.path}
            className={({ isActive }) =>
              isActive
                ? styles.sidebarTitleActive
                : styles.sidebarTitle
            }
          >
            {module.title}
          </NavLink>

          <div className={styles.sidebarChildren}>
            {module.children?.map((child, index) => (
              <NavLink
                key={index}
                to={child.path}
                className={({ isActive }) =>
                  isActive
                    ? styles.sidebarItemActive
                    : styles.sidebarItem
                }
              >
                {child.name}
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
}
