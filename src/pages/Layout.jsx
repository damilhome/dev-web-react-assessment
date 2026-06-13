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
            <Link to="ex5/admin" className={styles.linkText}>
              EX5 - Administrador
            </Link>
          </li>
          <li className={styles.link}>
            <Link to="ex5/colab" className={styles.linkText}>
              EX5 - Colaborador
            </Link>
          </li>
          <li className={styles.link}>
            <Link to="ex6" className={styles.linkText}>
              EX6
            </Link>
          </li>
          <li className={styles.link}>
            <Link to="ex6/brasil" className={styles.linkText}>
              EX6 - Brasil
            </Link>
          </li>
          <li className={styles.link}>
            <Link to="ex7" className={styles.linkText}>
              EX7
            </Link>
          </li>
          <li className={styles.link}>
            <Link to="ex8" className={styles.linkText}>
              EX8
            </Link>
          </li>
          <li className={styles.link}>
            <Link to="ex9" className={styles.linkText}>
              EX9
            </Link>
          </li>
          <li className={styles.link}>
            <Link to="ex9/danilo" className={styles.linkText}>
              EX9 - Danilo
            </Link>
          </li>
          <li className={styles.link}>
            <Link to="ex10" className={styles.linkText}>
              EX10
            </Link>
          </li>
          <li className={styles.link}>
            <Link to="ex11" className={styles.linkText}>
              EX11
            </Link>
          </li>
          <li className={styles.link}>
            <Link to="ex12" className={styles.linkText}>
              EX12
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
