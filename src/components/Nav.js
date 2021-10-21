import { NavLink } from "react-router-dom";
import { ROUTES } from "../consts";

import styles from "../App.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul style={{ display: "flex", gap: "3ch", flexDirection: "column" }}>
        <li className={styles.navbutton}>
          <NavLink className={styles.textdeco} exact to={ROUTES.HOME}>
            Overzicht
          </NavLink>
        </li>
        <li className={styles.navbutton}>
          <NavLink className={styles.textdeco} exact to={ROUTES.INPUTS}>
            Geavanceerde opties
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;