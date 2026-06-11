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
          <li className={styles.link}>
            <Link to="ex1" className={styles.linkText}>
              EX1
            </Link>
          </li>
          <li className={styles.link}>
            <Link to="ex2" className={styles.linkText}>
              EX2
            </Link>
          </li>
          <li className={styles.link}>
            <Link to="ex3" className={styles.linkText}>
              EX3
            </Link>
          </li>
          <li className={styles.link}>
            <Link to="ex4" className={styles.linkText}>
              EX4
            </Link>
          </li>
          <li className={styles.link}>
            <Link to="ex5" className={styles.linkText}>
              EX5
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
