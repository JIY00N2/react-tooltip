import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

export default function LayoutPage() {
  return (
    <div className={styles.layout}>
      <Link
        to="/"
        className={styles.homeLogo}
      >
        홈으로
      </Link>
      <section className={styles.section}>
        <Outlet />
      </section>
    </div>
  );
}
