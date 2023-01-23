import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; Smerin Digital Limited 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
