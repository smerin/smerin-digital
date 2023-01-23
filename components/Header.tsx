import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Smerin Digital</h1>
        <h2 className={styles.subtitle}>
          Frontend development by George Smerin
        </h2>
      </div>
    </header>
  );
};

export default Header;
