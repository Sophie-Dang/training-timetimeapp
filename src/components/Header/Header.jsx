import React from "react";
import styles from './Header.module.scss';

function Header({title}) {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <button className="button text-icon-button">
        <img src="./images/menu.svg" alt="Menu" />
        Menu
      </button>
      <nav className={styles.menu}>
        <a href="/" className="--active">Mes entrées</a>
        <a href="/add">Nouvelle entrée</a>
      </nav>
    </header>
  )
}

export default Header;