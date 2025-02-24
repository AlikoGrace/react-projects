import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";
import Logo from "./Logo";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of cities </p>
      <footer className={styles.footer}>
        &copy: copyright {new Date().getFullYear} bu worldwise.inc
      </footer>
    </div>
  );
};

export default SideBar;
