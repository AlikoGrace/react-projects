import { Outlet } from "react-router-dom";
import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";
import Logo from "./Logo";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        &copy: copyright {new Date().getFullYear} bu worldwise.inc
      </footer>
    </div>
  );
};

export default SideBar;
