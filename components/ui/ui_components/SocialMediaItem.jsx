import styles from "../Footer.module.css";

export default function SocialMedia() {
  return (
    <div className={styles.footerLinks}>
      <h3>Follow us</h3>
      <ul className={styles.footerList}>
        <SocialMediaItem url="https://facebook.com" title="Facebook" icon="/socialMedia/fb.png"/>
        <SocialMediaItem url="https://instagram.com" title="Instagram" icon="/socialMedia/instagram.png" />
        <SocialMediaItem url="https://tiktok.com" title="TikTok" icon="/socialMedia/tiktok.png" />
        <SocialMediaItem url="https://google.com" title="On the streets at night" icon="/socialMedia/google.png" />
        <SocialMediaItem url="https://linkedin.com" title="LinkedIn" icon="/socialMedia/linkedin.png" />
       </ul>
    </div>
  );
}

export const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <li>
      <a href={url} target="_blank">
        <img src={icon} alt={title} style={{ width: "20px", marginRight: "8px", verticalAlign: "middle" }} />
        {title}
      </a>
    </li>
  );
};