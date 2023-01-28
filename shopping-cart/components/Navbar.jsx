import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import useCart from "@/hooks/useCart";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h6 className={styles.logo}>ShoppingCart</h6>
      <ul className={styles.links}>
        <li className={styles.navlink}>
          <Link href="/">Products</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
