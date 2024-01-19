import React from 'react';
import { Link } from "react-router-dom";
import styles from './Navbar.module.css';

const Navbar = () => {

    return (
        <div className={styles.Navbar}>
            <header className={styles.title}>
              <p><Link reloadDocument to ="/">Club Eats</Link></p><span className={styles.imgSpan}><img className={styles.img} src="/ClubEatsLogo.png" alt="Club Eats logo" /></span>
            </header>
            <nav className={styles.nav}>
              <ul>
                <li>
                  <Link reloadDocument to ="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
        </div>
    );
};

export default Navbar;
