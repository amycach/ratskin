import "../styles/App.module.css";
import styles from "../styles/CardSet.module.css";

export default function CardSet(props) {
    var {setName, artist, images} = props
    return (
    <div>
      <div>
        <div>
          {setName}
        </div>
        <div>
          art by {artist}
        </div>
      </div>
      <div className={styles.cards_container}>
        {
          images.map((image) =>
            <img src={image} className={styles.card}></img>
          )
        }
      </div>
    </div>
  );
}