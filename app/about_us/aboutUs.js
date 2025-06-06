import styles from "./page.module.css";

export const OurValues = () => {
  return (
    <div className={styles.values}>
      <div className={styles.values__box}>
        <h2>Exploration:</h2>
        <p className={styles.values__text}>
          We are driven by a deep-seated desire to explore the unknown. We believe that the pursuit of discovery is at the heart of human nature, and we are committed to pushing the boundaries of what
          is possible.
        </p>
        <hr className={styles.values__line} />
      </div>

      <div className={styles.values__box}>
        <h2>Innovation:</h2>
        <p className={styles.values__text}>
          At Galactica, we prioritize cutting-edge technology and innovation. We are constantly evolving our spacecraft, safety protocols, and services to ensure that our travelers experience the most
          advanced and secure space journeys available.
        </p>
        <hr className={styles.values__line} />
      </div>

      <div className={styles.values__box}>
        <h2>Sustainability:</h2>
        <p className={styles.values__text}>
          We are committed to making space exploration sustainable for future generations. Our space missions are designed to minimize environmental impact, both on Earth and in space, and to foster a
          spirit of responsibility towards our universe.
        </p>
        <hr className={styles.values__line} />
      </div>

      <div className={styles.values__box}>
        <h2>Community:</h2>
        <p className={styles.values__text}>
          We believe in the power of collective exploration. Our journeys are not just about reaching new destinations; they are about building a community of space enthusiasts who share a passion for
          the stars.
        </p>
        <hr className={styles.values__line} />
      </div>
    </div>
  );
};

export const OurCrew = () => {
  return (
    <div className={styles.crew}>
      <p className={styles.crew__text}>
        Our crew is the heart and soul of Galactica. We are a diverse team of seasoned space explorers, engineers, and visionaries who are united by a common goal: to make space travel accessible and
        exciting for all. Captain Sarah Vega: A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.
        Dr. Leo Redding: Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is
        exhilarating. Chief Engineer Hana Lee: With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her
        innovation ensures that our travelers are always in safe hands. Mission Specialist Alex Santos: As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly.
        With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers. Crew Member Maya Patel: Maya brings a unique blend of technical skills and customer
        service experience to the team. She’s always ready to assist with any needs and to make sure every traveler has an unforgettable experience
      </p>
      <div className={styles.crew__about}>
        <div className={styles.crew__card}>
          <img className={styles.crew__image} src="/crew/image-anousheh-ansari.webp" alt="anousheh ansari" />
          <h3>Anousheh Ansari</h3>
          <p>Engineer & First Female Private Space Explorer</p>
        </div>
        <div className={styles.crew__card}>
          <img className={styles.crew__image} src="/crew/image-douglas-hurley.webp" alt="douglas hurley" />
          <h3>Douglas Hurley</h3>
          <p>NASA Astronaut & Commander, SpaceX Demo-2</p>
        </div>
        <div className={styles.crew__card}>
          <img className={styles.crew__image} src="/crew/image-mark-shuttleworth.webp" alt="mark shuttleworth" />
          <h3>Mark Shuttleworth</h3>
          <p>Entrepreneur & First African in Space</p>
        </div>
        <div className={styles.crew__card}>
          <img className={styles.crew__image} src="/crew/image-victor-glover.webp" alt="victor glover" />
          <h3>Victor Glover</h3>
          <p>NASA Astronaut & Pilot, Crew-1 ISS Mission</p>
        </div>
      </div>
    </div>
  );
};

export const OurPartners = () => {
  return (
    <div className={styles.partners}>
      <p> We collaborate with some of the most respected names in the space and technology industries to make every journey extraordinary.</p>
      <div className={styles.partners__images}>
        <img className={styles.partners__logo} src="/business_partners/alphabet-logo.png" alt="alphabet logo" />
        <img className={styles.partners__logo} src="/business_partners/amazon_logo.png" alt="amazon logo" />
        <img className={styles.partners__logo} src="/business_partners/CBC_Logo_White.png" alt="cbc logo" />
        <img className={styles.partners__logo} src="/business_partners/Microsoft-logo-white.png" alt="microsoft logo" />
        <img className={styles.partners__logo} src="/business_partners/nyu-logo.png" alt="nyu logo" />
        <img className={styles.partners__logo} src="/business_partners/QueensLogo_white.png" alt="queens logo" />
        <img className={styles.partners__logo} src="/business_partners/samsung-logo.png" alt="samsung logo" />
        <img className={styles.partners__logo} src="/business_partners/sodexo-logo.png" alt="sodexo logo" />
      </div>
    </div>
  );
};
