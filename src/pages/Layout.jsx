import { Link, Outlet } from "react-router-dom";
import styles from "../css/Layout.module.css";

export default function Layout() {
  return (
    <main className={styles.main}>
      <nav className={styles.navbar}>
        <ul className={styles.list}>
          <li className={styles.link}>
            <Link to="/" className={styles.linkText}>
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.container}>
        <Outlet />
      </div>
    </main>
  );
}
