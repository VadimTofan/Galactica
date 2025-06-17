import styles from "../page.module.css";

export const RoverPhoto = ({ roverName, date, url }) => {
  if (!url) {
    return <p>Loading rover photos...</p>;
  }

  return (
    <div className={styles.roverPhoto}>
      <p>Date: {date}</p>
      <img className={styles.nasaPicOfTheDayImg} src={url} alt={roverName} />
    </div>
  );
};
