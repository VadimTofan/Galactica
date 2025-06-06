import styles from "./page.module.css";
import { OurValues, OurCrew, OurPartners } from "./aboutUs.js";

export default Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>
        <section className={styles.card}>
          <h2 className={styles.card__heading}>Our Values</h2>
          <OurValues />
        </section>
        <section className={styles.card}>
          <h2 className={styles.card__heading}>The crew</h2>
          <OurCrew />
        </section>
        <section className={styles.card}>
          <h2 className={styles.card__heading}>Our Partners</h2>
          <OurPartners />
        </section>
      </main>
    </div>
  );
};
