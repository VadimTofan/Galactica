import styles from "./page.module.css";

// TASK - React 1 week 1
// After you are finished with creating the page, move the OurValues, OurCrew, OurPartners components into their own files
// OurValues.js, OurCrew.js, OurPartners.js should live in this folder
// import and use the components from the newly created files

const OurValues = () => {
  // TASK - React 1 week 1
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <>
      <p>
        Exploration: We are driven by a deep-seated desire to explore the unknown. We believe that the pursuit of discovery is at the heart of human nature, and we are committed to pushing the
        boundaries of what is possible. Innovation: At Galactica, we prioritize cutting-edge technology and innovation. We are constantly evolving our spacecraft, safety protocols, and services to
        ensure that our travelers experience the most advanced and secure space journeys available. Sustainability: We are committed to making space exploration sustainable for future generations. Our
        space missions are designed to minimize environmental impact, both on Earth and in space, and to foster a spirit of responsibility towards our universe. Community: We believe in the power of
        collective exploration. Our journeys are not just about reaching new destinations; they are about building a community of space enthusiasts who share a passion for the stars.{" "}
      </p>
      <img className={styles.ourValuesImage} src="/data/inspiration_about_us/our_values.png" alt="our values and ideas" />
    </>
  );
};

const OurCrew = () => {
  // TASK - React 1 week 1
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <>
      <p>
        Our crew is the heart and soul of Galactica. We are a diverse team of seasoned space explorers, engineers, and visionaries who are united by a common goal: to make space travel accessible and
        exciting for all. Captain Sarah Vega: A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.
        Dr. Leo Redding: Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is
        exhilarating. Chief Engineer Hana Lee: With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her
        innovation ensures that our travelers are always in safe hands. Mission Specialist Alex Santos: As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly.
        With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers. Crew Member Maya Patel: Maya brings a unique blend of technical skills and customer
        service experience to the team. She’s always ready to assist with any needs and to make sure every traveler has an unforgettable experience
      </p>
      <div className={styles.crewImagesRow}>
        <img className={styles.ourCrewImage} src="/crew/image-anousheh-ansari.webp" alt="anousheh ansari" />
        <img className={styles.ourCrewImage} src="/crew/image-douglas-hurley.webp" alt="douglas hurley" />
        <img className={styles.ourCrewImage} src="/crew/image-mark-shuttleworth.webp" alt="mark shuttleworth" />
        <img className={styles.ourCrewImage} src="/crew/image-victor-glover.webp" alt="victor glover" />
      </div>
    </>
  );
};

const OurPartners = () => {
  // TASK - React 1 week 1
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <>
      <p> We collaborate with some of the most respected names in the space and technology industries to make every journey extraordinary.</p>;
      <div className={styles.partnersRow}>
        <img className={styles.partnerLogo} src="/business_partners/alphabet-logo.png" alt="alphabet logo" />
        <img className={styles.partnerLogo} src="/business_partners/amazon_logo.png" alt="amazon logo" />
        <img className={styles.partnerLogo} src="/business_partners/CBC_Logo_White.png" alt="cbc logo" />
        <img className={styles.partnerLogo} src="/business_partners/Microsoft-logo-white.png" alt="microsoft logo" />
        <img className={styles.partnerLogo} src="/business_partners/nyu_logo.png" alt="nyu logo" />
        <img className={styles.partnerLogo} src="/business_partners/QueensLogo_white.png" alt="queens logo" />
        <img className={styles.partnerLogo} src="/business_partners/samsung-logo.png" alt="samsung logo" />
        <img className={styles.partnerLogo} src="/business_partners/sodexo-logo.png" alt="sodexo logo" />
      </div>
    </>
  );
};

export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>
        <section className="card">
          <h2>Our Values</h2>
          <OurValues />
        </section>
        <section className="card">
          <h2>The crew</h2>
          <OurCrew />
        </section>
        <section className="card">
          <h2>The crew</h2>
          <OurPartners />
        </section>
      </main>
    </div>
  );
};

export default Crew;
