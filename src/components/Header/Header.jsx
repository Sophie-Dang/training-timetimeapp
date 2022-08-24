import PropTypes from 'prop-types';
import React from "react";
import styles from './Header.module.scss';

function Header({title, theme}) {
  const classes = {
    theme: theme === 'dark' ? styles.dark : '',
  }
  return (
    <header className={`${styles.container}`}>
      <h1 className={`${styles.title} ${classes.theme}`}>{title}</h1>
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

Header.propTypes = {
  /** CPT - Any title */
  title: PropTypes.string.isRequired,
  /** CPT - dark or null */
  theme: PropTypes.string,
};

export default Header;