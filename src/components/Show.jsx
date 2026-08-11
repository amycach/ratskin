import "../styles/App.module.css";
import styles from "../styles/Show.module.css";

export default function Show(props) {
  var { showName, showDate, location, city, poster, link } = props
  return (
    <div className={styles.show_container}>
      <div className={styles.info}>
        <div className={styles.info_titles}>
          <div className={styles.info_date}>
            {showDate}
          </div>
          <div>
            <div className={styles.show_title}>
              {showName}
            </div>
            <div className={styles.info_location}>
              {location}, {city}
            </div>
          </div>

        </div>
        <a className={styles.ticket_link} href={link} target="_blank" rel="noopener noreferrer">
          Tickets + more info
        </a>
      </div>
      <img className={styles.poster_container} src={poster} alt="Poster"></img>
    </div>
  );
}