import styles from "./CorsInfo.module.css";

export const CorsInfo = () => {
  return (
    <div className={styles.cors_block}>
      <p>*for correctly app work you should add Allow CORS extensions for your browser:</p>
      <div className={styles.links_flex}>
        <a
          href="https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf"
          target="_blank"
        >
          <div>
            <img className={styles.logo} src="https://www.infotrucs.fr/wp-content/uploads/2018/10/chrome.png" />
            <p>Chrome</p>
          </div>
        </a>
        <a href="https://addons.mozilla.org/en-US/firefox/addon/access-control-allow-origin/" target="_blank">
          <div>
            <img className={styles.logo} src="https://garant-service.tv/chaykovskiy-tv/firefox_PNG6.png" />
            <p>Mozilla FireFox</p>
          </div>
        </a>
        <a
          href="https://microsoftedge.microsoft.com/addons/detail/allow-cors-accesscontro/bhjepjpgngghppolkjdhckmnfphffdag"
          target="_blank"
        >
          <div>
            <img className={styles.logo} src="https://soft-windows10.ru/img/_src/microsoft-edge-logo.png" />
            <p>Edge</p>
          </div>
        </a>
      </div>
    </div>
  );
};
