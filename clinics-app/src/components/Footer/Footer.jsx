import styles from "./Footer.module.css";
import FooterNavigation from "./FooterNavigation/FooterNavigation"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <FooterNavigation />
    </div>
  );
};

export default Footer;