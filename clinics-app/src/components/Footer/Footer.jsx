import classes from "./Footer.module.css";
import FooterNavigation from "./FooterNavigation/FooterNavigation"

const Footer = () => {
  return (
    <div className={classes.footer}>
      <FooterNavigation />
    </div>
  );
};

export default Footer;